#!/bin/bash

# ============================================
# Module 3: Challenge Me - Git Push Script
# ============================================
# This script creates a new branch, commits all changes, and pushes to GitHub

BRANCH_NAME="${1:-feature/challenge-me-module}"
COMMIT_MESSAGE="${2:-feat: Implement Module 3 - Challenge Me with full-stack backend}"

set -e

echo "============================================"
echo "Module 3: Challenge Me - Git Push Script"
echo "============================================"
echo ""

# Check if git is installed
echo "Checking git installation..."
if ! command -v git &> /dev/null; then
    echo "✗ Git not found. Please install git first."
    exit 1
fi
echo "✓ Git found"

# Check if we're in a git repository
echo "Checking git repository..."
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "✗ Not in a git repository"
    exit 1
fi
echo "✓ Git repository found"

# Display current status
echo ""
echo "Current Git Status:"
git status --short
echo ""

# Create and checkout new branch
echo "Creating new branch: $BRANCH_NAME"
if git checkout -b "$BRANCH_NAME" 2>/dev/null; then
    echo "✓ Branch created successfully"
else
    echo "Note: Branch may already exist, attempting to checkout..."
    git checkout "$BRANCH_NAME" || {
        echo "✗ Failed to create/checkout branch"
        exit 1
    }
fi

echo ""

# Stage all changes
echo "Staging all changes..."
git add -A
if [ $? -eq 0 ]; then
    echo "✓ All changes staged"
else
    echo "✗ Failed to stage changes"
    exit 1
fi

echo ""

# Commit changes
echo "Committing changes..."
echo "Commit message: $COMMIT_MESSAGE"
git commit -m "$COMMIT_MESSAGE"
if [ $? -eq 0 ]; then
    echo "✓ Changes committed successfully"
else
    echo "✗ Failed to commit changes"
    exit 1
fi

echo ""

# Show commit details
echo "Commit Details:"
git log --oneline -1
echo ""

# Push to GitHub
echo "Pushing to GitHub..."
echo "Repository: https://github.com/alexusesgithub/Team7-ngpit"
echo "Branch: $BRANCH_NAME"
git push -u origin "$BRANCH_NAME"
if [ $? -eq 0 ]; then
    echo "✓ Successfully pushed to GitHub!"
else
    echo "✗ Failed to push to GitHub"
    echo "Hint: Check your authentication and internet connection"
    exit 1
fi

echo ""
echo "============================================"
echo "✓ All done!"
echo "============================================"
echo ""
echo "Next steps:"
echo "1. Visit: https://github.com/alexusesgithub/Team7-ngpit"
echo "2. Create a Pull Request from '$BRANCH_NAME' to 'main'"
echo "3. Add description and request review"
echo ""
