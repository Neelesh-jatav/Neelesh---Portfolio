param(
    [string]$AtlasHost = "cluster0.vstfdx4.mongodb.net",
    [string]$AtlasUser = "neeleshkumar22j_db_user",
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

if (-not (Test-Path $MongoshPath)) {
    throw "mongosh.exe not found at: $MongoshPath"
}

Write-Host "[1/4] Checking DNS for Atlas host..." -ForegroundColor Cyan
try {
    Resolve-DnsName -Name $AtlasHost -ErrorAction Stop | Out-Null
    Write-Host "DNS lookup succeeded." -ForegroundColor Green
}
catch {
    throw "DNS lookup failed for $AtlasHost. Check internet/DNS and Atlas host value."
}

Write-Host "[2/4] Testing outbound network to Atlas on port 27017..." -ForegroundColor Cyan
$netTest = Test-NetConnection -ComputerName $AtlasHost -Port 27017 -WarningAction SilentlyContinue
if (-not $netTest.TcpTestSucceeded) {
    throw "Cannot reach $AtlasHost:27017 from this machine. Check firewall/network/ISP restrictions."
}
Write-Host "Network check succeeded." -ForegroundColor Green

$securePassword = Read-Host "Enter Atlas password for user '$AtlasUser'" -AsSecureString
$atlasPassword = ConvertTo-PlainText -Secure $securePassword

$atlasUri = "mongodb+srv://$AtlasHost/admin?retryWrites=true&w=majority&appName=Cluster0"
Write-Host "[3/4] Testing Atlas login with mongosh..." -ForegroundColor Cyan
& $MongoshPath $atlasUri --username $AtlasUser --password $atlasPassword --eval "db.runCommand({ ping: 1 })"
if ($LASTEXITCODE -ne 0) {
    throw "Atlas login failed. Check username/password, Atlas project, and Database Access permissions."
}
Write-Host "Authentication succeeded." -ForegroundColor Green

Write-Host "[4/4] Checking user visibility (connection status)..." -ForegroundColor Cyan
& $MongoshPath $atlasUri --username $AtlasUser --password $atlasPassword --quiet --eval "db.runCommand({ connectionStatus: 1 }).authInfo.authenticatedUsers"
if ($LASTEXITCODE -ne 0) {
    throw "Connection status check failed unexpectedly."
}

Write-Host "Atlas auth test completed successfully." -ForegroundColor Green
