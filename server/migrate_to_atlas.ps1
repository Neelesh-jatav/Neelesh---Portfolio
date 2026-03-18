param(
    [string]$LocalDbName = "portfolio",
    [string]$AtlasHost = "cluster0.vstfdx4.mongodb.net",
    [string]$AtlasUser = "neeleshkumar22j_db_user",
    [string]$TargetDbName = "portfolio",
    [string]$DumpRoot = "$env:USERPROFILE\dump",
    [string]$ToolsBin = "C:\Program Files\MongoDB\Tools\100\bin",
    [string]$MongoshPath = "C:\Program Files\mongosh\mongosh.exe"
)

$ErrorActionPreference = "Stop"

function ConvertTo-PlainText {
    param([Security.SecureString]$Secure)
    $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($Secure)
    try {
        return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr)
    }
    finally {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
    }
}

$mongodumpExe = Join-Path $ToolsBin "mongodump.exe"
$mongorestoreExe = Join-Path $ToolsBin "mongorestore.exe"

if (-not (Test-Path $mongodumpExe)) {
    throw "mongodump.exe not found at: $mongodumpExe"
}
if (-not (Test-Path $mongorestoreExe)) {
    throw "mongorestore.exe not found at: $mongorestoreExe"
}

Write-Host "[1/3] Dumping local database '$LocalDbName'..." -ForegroundColor Cyan
$localUri = "mongodb://localhost:27017/$LocalDbName"
& $mongodumpExe --uri=$localUri --out=$DumpRoot
if ($LASTEXITCODE -ne 0) {
    throw "mongodump failed with exit code $LASTEXITCODE"
}

$dumpDbPath = Join-Path $DumpRoot $LocalDbName
if (-not (Test-Path $dumpDbPath)) {
    throw "Expected dump folder not found: $dumpDbPath"
}

$securePassword = Read-Host "Enter Atlas password for user '$AtlasUser'" -AsSecureString
$atlasPassword = ConvertTo-PlainText -Secure $securePassword

$atlasUriNoCreds = "mongodb+srv://$AtlasHost/admin?retryWrites=true&w=majority&appName=Cluster0"
$atlasRestoreUri = "mongodb+srv://$AtlasHost/?retryWrites=true&w=majority&appName=Cluster0"

if (Test-Path $MongoshPath) {
    Write-Host "[2/3] Testing Atlas authentication (ping)..." -ForegroundColor Cyan
    & $MongoshPath $atlasUriNoCreds --username $AtlasUser --password $atlasPassword --eval "db.runCommand({ ping: 1 })"
    if ($LASTEXITCODE -ne 0) {
        throw "Atlas ping/authentication failed. Check Atlas username/password, project, and IP/network access."
    }
}
else {
    Write-Host "[2/3] mongosh not found, skipping ping test. Continuing restore..." -ForegroundColor Yellow
}

Write-Host "[3/3] Restoring dump into Atlas database '$TargetDbName'..." -ForegroundColor Cyan
& $mongorestoreExe --uri=$atlasRestoreUri --username=$AtlasUser --password=$atlasPassword --authenticationDatabase=admin --db=$TargetDbName $dumpDbPath
if ($LASTEXITCODE -ne 0) {
    throw "mongorestore failed with exit code $LASTEXITCODE"
}

Write-Host "Done. Atlas upload completed successfully." -ForegroundColor Green
Write-Host "Local DB: $LocalDbName -> Atlas DB: $TargetDbName" -ForegroundColor Green
