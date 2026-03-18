# 📘 Detailed Deployment Notes (Render + Database)

## ✅ Current Status
Deployment is successful on Render.

Primary URL:
https://neelesh-portfolio.onrender.com

## 🔍 Verification Summary
A quick live check was performed to confirm whether the deployment is serving only the API or the full frontend.

Fetched resources:
- https://neelesh-portfolio.onrender.com/
- https://neelesh-portfolio.onrender.com/api/projects

## ⚠️ Runtime Issues Found
1. Root URL returns **404**
2. API endpoint `/api/projects` returns **500**

## 🧠 Most Likely Cause
Render does not currently have the `MONGODB_URI` environment variable configured.

Because of that, the backend falls back to localhost MongoDB, which does not exist in Render's hosted environment.

## 🛠️ Fix in Render (Database Connection)
Follow these exact steps:

1. Open your **Render Web Service** settings.
2. Go to **Environment**.
3. Add this variable:
   - Key: `MONGODB_URI`
   - Value: your MongoDB Atlas connection string
4. Save changes.
5. Redeploy the service.

## ✅ Post-Fix Checks
After redeploy:

1. Open:
   - https://neelesh-portfolio.onrender.com/api/projects
2. Confirm it returns JSON (and no longer returns 500).

## 🌐 Frontend Note
If you want the homepage URL to show your full portfolio UI (instead of API-only backend behavior):

- Deploy the `client` as a separate **Render Static Site**, or
- Configure the backend to serve the built frontend files.

## 📋 Optional Next Step
If needed, prepare a clean step-by-step Render setup for both services:
- Backend API service
- Frontend static site
