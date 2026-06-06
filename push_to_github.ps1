#!/usr/bin/env powershell
# ============================================
# Module 3: Challenge Me - Git Push Script
# ============================================
# This script creates a new branch, commits all changes, and pushes to GitHub

param(
    [string]$BranchName = "feature/challenge-me-module",
    [string]$CommitMessage = "feat: Implement Module 3 - Challenge Me with full-stack backend"
)

$ErrorActionPreference = "Stop"

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Module 3: Challenge Me - Git Push Script" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
Write-Host "Checking git installation..." -ForegroundColor Yellow
try {
    git --version | Out-Null
    Write-Host "✓ Git found" -ForegroundColor Green
} catch {
    Write-Host "✗ Git not found. Please install git first." -ForegroundColor Red
    exit 1
}

# Check if we're in a git repository
Write-Host "Checking git repository..." -ForegroundColor Yellow
try {
    git rev-parse --git-dir | Out-Null
    Write-Host "✓ Git repository found" -ForegroundColor Green
} catch {
    Write-Host "✗ Not in a git repository" -ForegroundColor Red
    exit 1
}

# Display current status
Write-Host ""
Write-Host "Current Git Status:" -ForegroundColor Yellow
git status --short
Write-Host ""

# Create and checkout new branch
Write-Host "Creating new branch: $BranchName" -ForegroundColor Yellow
git checkout -b $BranchName 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Branch created successfully" -ForegroundColor Green
} else {
    Write-Host "Note: Branch may already exist, attempting to checkout..." -ForegroundColor Yellow
    git checkout $BranchName
    if ($LASTEXITCODE -ne 0) {
        Write-Host "✗ Failed to create/checkout branch" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""

# Stage all changes
Write-Host "Staging all changes..." -ForegroundColor Yellow
git add -A
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ All changes staged" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to stage changes" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
Write-Host "Commit message: $CommitMessage" -ForegroundColor Gray
git commit -m $CommitMessage
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Changes committed successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to commit changes" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Show commit details
Write-Host "Commit Details:" -ForegroundColor Yellow
git log --oneline -1
Write-Host ""

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "Repository: https://github.com/alexusesgithub/Team7-ngpit" -ForegroundColor Gray
Write-Host "Branch: $BranchName" -ForegroundColor Gray
git push -u origin $BranchName
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Successfully pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to push to GitHub" -ForegroundColor Red
    Write-Host "Hint: Check your authentication and internet connection" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "✓ All done!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Visit: https://github.com/alexusesgithub/Team7-ngpit" -ForegroundColor Gray
Write-Host "2. Create a Pull Request from '$BranchName' to 'main'" -ForegroundColor Gray
Write-Host "3. Add description and request review" -ForegroundColor Gray
Write-Host ""
