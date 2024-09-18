#!/bin/bash

# Set up variables
REPO_URL="https://github.com/Hacker-tech-lang/ai-website.git"
COMMIT_MSG="Initial AI website commit"

# Initialize git repository
echo "Initializing Git repository..."
git init

# Stage all changes
echo "Staging all files..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "$COMMIT_MSG"

# Add the remote repository
echo "Adding remote repository..."
git remote add origin $REPO_URL

# Push changes to GitHub
echo "Pushing to GitHub..."
git push -u origin master

echo "Deployment complete!"
