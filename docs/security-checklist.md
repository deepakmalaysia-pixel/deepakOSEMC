# Repository Security Checklist (Beginner Friendly)

Use this checklist to protect your repository and website from unwanted changes.

## 1. Protect Your GitHub Account

1. Enable two-factor authentication (2FA).
2. Use a strong unique password.
3. Use passkeys if available.
4. Never share your password or token with anyone.

## 2. Protect Repository Access

1. Keep write access only for trusted people.
2. Remove old or unused collaborators.
3. Check repository access every month.

## 3. Protect The Main Branch

In GitHub repository settings, configure branch protection for `main`:

1. Require a pull request before merging.
2. Require approvals (at least 1 if you work with others).
3. Block force pushes.
4. Block branch deletion.

If you are the only maintainer, you can still use this with a personal workflow branch.

## 4. Safe Working Habits In VS Code

1. Check changed files before every commit.
2. Read the diff of `index.html` and `script.js` carefully.
3. Commit small, logical changes.
4. Use clear commit messages.

## 5. Publishing Safety Checks

Before publishing:

1. Confirm only expected files changed.
2. Confirm links open correct destinations.
3. Push to `main`.
4. Verify GitHub Actions deployment success.
5. Open the live site and test key links.

## 6. Emergency Steps If You Suspect Tampering

1. Change GitHub password immediately.
2. Revoke unknown GitHub tokens.
3. Review recent commits and collaborators.
4. Revert suspicious commits.
5. Re-enable and tighten branch protection.

## 7. Practical Rule

If something looks unfamiliar, do not publish first. Review carefully, then commit.