# GitHub cooperation

**Make sure you are in the project dir (e.g.: "borger/desktop/AdminPlatform")**

1. Verify you are in main branch before you start coding (you should code in main branch and when you are done coding, jump to 2nd step)

`git switch main` 

2. Create new branch, using the Jira issue key (e.g.: "git switch -c PNTA-39-Implement-BE")

`git switch -c PNTA-12345-branch-name`

3. Add changes

`git add .`

4. Commit changes with mandatory description and Jira issue key

`git commit -m "PNTA-12345 This is the commit description"`

5. Rebase the current branch with the main branch to get last changes and try to avoid further merge conflicts (if you get merge conflicts while rebasing, follow steps in terminal)

`git pull --rebase origin main`

6. Push to remote branch

`git push origin HEAD`

7. If you had problems with merge conflicts and rebase, sometimes you might need to force push

`git push -f origin HEAD`