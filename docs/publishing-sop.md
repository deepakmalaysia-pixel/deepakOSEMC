# Publishing SOP (Beginner Friendly)

Use this checklist every time you update the website.

## A. Before You Publish

1. Save all edited files.
2. Open Source Control in VS Code (`Ctrl + Shift + G`).
3. Confirm your changed files are expected.

## B. Commit And Push

1. Stage all changes.
2. Add a clear commit message.
3. Click Commit.
4. Click Push (or Sync Changes).

If Push says you must pull first:

1. Run Pull (Rebase).
2. If conflicts appear, resolve them.
3. Continue rebase.
4. Push again.

## C. GitHub Settings (One-Time Or If Deployment Fails)

1. Go to repository Settings > Pages.
2. Set Source to GitHub Actions.
3. Go to Settings > Environments > github-pages.
4. Allow branch `main` (or remove branch restriction).

## D. Check Deployment

1. Open Actions tab on GitHub.
2. Open the latest run for Publish site from main to GitHub Pages.
3. Confirm status is Success.
4. If status is Failed, open the error and fix settings/workflow, then re-run.

## E. Final Live Check

1. Refresh the live site:
   https://deepakmalaysia-pixel.github.io/deepakOSEMC/
2. Verify new content appears.
3. Test any new links/files (for example .pptx or .docx).

## F. Special Note For PowerPoint Or Word Files

- `.pptx` and `.docx` are binary files.
- They will open as downloads or in Office apps, not as text in VS Code.
- This is normal behavior.

## G. Quick Troubleshooting

### Error: "local changes would be overwritten by merge"

1. Stage and commit local changes first.
2. Pull (Rebase).
3. Push.

### Error: "branch main is not allowed to deploy to github-pages"

1. Go to Settings > Environments > github-pages.
2. Allow `main`.
3. Re-run workflow.

### Site still old after successful push

1. Confirm latest commit is on `main`.
2. Confirm latest publish run is Success.
3. Hard refresh browser (`Ctrl + F5`).

## H. Standard Publish Flow (Short Form)

Edit -> Commit -> Push -> Actions Success -> Refresh Live Site