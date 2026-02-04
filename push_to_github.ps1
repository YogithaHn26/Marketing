# Helper script to push to GitHub using absolute path

# Define the absolute path to git
$GitPath = "C:\Program Files\Git\cmd\git.exe"

# Check if git exists at the path
if (-not (Test-Path $GitPath)) {
    Write-Host "Error: Git executable not found at $GitPath" -ForegroundColor Red
    exit 1
}

# Variable for repository URL
$RepoUrl = "https://github.com/YogithaHn26/Marketing.git"

Write-Host "Initializing Git repository..." -ForegroundColor Cyan
& $GitPath init

Write-Host "Adding files..." -ForegroundColor Cyan
& $GitPath add .

Write-Host "Committing changes..." -ForegroundColor Cyan
& $GitPath commit -m "Initial commit of marketing site with Home and Blog pages"

Write-Host "Renaming branch to main..." -ForegroundColor Cyan
& $GitPath branch -M main

Write-Host "Adding remote origin..." -ForegroundColor Cyan
# Remove origin if it exists to avoid errors on re-run
& $GitPath remote remove origin 2>$null
& $GitPath remote add origin $RepoUrl

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
& $GitPath push -u origin main

Write-Host "Done! Project pushed to $RepoUrl" -ForegroundColor Green
