# Pushing to Main Branch in Git

Follow these steps to push your changes to the main branch:

## Check your current branch

```bash
git branch
```
This will show all branches with an asterisk (*) next to your current branch.

## Switch to main/master branch if you're not already on it

```bash
git checkout main
```
or if your default branch is called "master":
```bash
git checkout master
```

## Pull the latest changes before pushing (recommended)

```bash
git pull origin main
```
This ensures you have the latest code from the remote repository.

## Stage your changes

To stage all changed files:
```bash
git add .
```

To stage specific files:
```bash
git add team.html styles.css
```

## Commit your changes

```bash
git commit -m "Add team page with member descriptions and photos"
```
Use a clear, descriptive commit message that explains what you've changed.

## Push your changes to the main branch

```bash
git push origin main
```
This uploads your committed changes to the remote repository's main branch.

## Handling merge conflicts

If you encounter conflicts when pulling or pushing:

1. Git will mark the conflicted files
2. Open each conflicted file and resolve the conflicts (look for the `<<<<<<< HEAD`, `=======`, and `>>>>>>> branch-name` markers)
3. After resolving, stage the fixed files:
   ```bash
   git add .
   ```
4. Complete the merge by committing:
   ```bash
   git commit -m "Resolve merge conflicts"
   ```
5. Push your changes:
   ```bash
   git push origin main
   ```

## Best Practices for Working with Main Branch

- Always pull before making changes to keep your local repository updated
- Consider using feature branches for major changes, then merge to main when complete
- Communicate with team members before pushing significant changes to main
- Include meaningful commit messages that explain what and why (not how)
- Make sure your code works before pushing to main
