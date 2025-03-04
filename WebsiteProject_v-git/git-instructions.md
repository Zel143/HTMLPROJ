# Git Instructions for Team Page

Follow these steps to push your team.html file to a Git branch:

## If you haven't set up Git yet

```bash
# Navigate to your project folder
cd /e:/ITS121/A-PROJECT FOLDER/

# Initialize a new Git repository
git init

# Configure your Git user information if needed
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

## Creating and pushing to a new branch

```bash
# Create a new branch and switch to it
git checkout -b feature/team-page

# Add your team.html file to staging
git add team.html

# Commit your changes with a descriptive message
git commit -m "Add team page with team members and descriptions"

# If you have a remote repository already set up
git push -u origin feature/team-page
```

## If you want to push to an existing branch

```bash
# Switch to the existing branch
git checkout existing-branch-name

# Add your team.html file to staging
git add team.html

# Commit your changes
git commit -m "Update team page with team members and descriptions"

# Push to the remote repository
git push origin existing-branch-name
```

## Additional Useful Git Commands

```bash
# Check the status of your files
git status

# View commit history
git log

# Create a new branch without switching to it
git branch new-branch-name

# List all branches
git branch -a

# Discard changes in working directory
git restore team.html

# Pull latest changes from remote branch
git pull origin branch-name
```
