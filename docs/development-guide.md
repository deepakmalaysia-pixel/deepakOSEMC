# Complete Development Guide (Beginner Friendly)

This guide explains how to develop this repository from start to finish.

It is written for a non-programmer who is learning step by step.

## 1. What You Are Building

This repository has two parts:

1. A website (HTML + CSS + JavaScript).
2. Supporting project documents (Markdown, CSV, presentations).

Main files for the website:

- `index.html`: page structure and links.
- `styles.css`: colors, layout, text size, spacing.
- `script.js`: button actions and animation behavior.

Main supporting folders:

- `docs/`: written documents.
- `maps/`: diagram references.
- `presentations/`: pptx and docx files.
- `sheets/`: data tables and matrix files.
- `templates/`: reusable templates.

## 2. One-Time Setup (First Day)

### A. Install Required Tools

1. Install Visual Studio Code.
2. Install Git for Windows.
3. Create a GitHub account (if not already done).

### B. Open The Repository In VS Code

1. Open VS Code.
2. File > Open Folder.
3. Select the `deepakOSEMC` folder.

### C. Confirm Basic Files Are Visible

You should see:

- `index.html`
- `styles.css`
- `script.js`
- `README.md`
- folders like `docs`, `sheets`, `presentations`

## 3. Daily Development Workflow (Simple Routine)

Use this routine every time.

1. Open repository in VS Code.
2. Decide what you want to change today.
3. Edit only the needed files.
4. Preview the result in browser.
5. Save all files.
6. Commit with a clear message.
7. Push to GitHub.
8. Check the published website.

If you follow these 8 steps each time, work remains clean and stress-free.

## 4. How To Make Common Changes

### A. Change Text On The Website

Edit `index.html`.

Examples:

- Step titles
- descriptions
- link labels

After editing, save and refresh browser preview.

### B. Change Colors, Fonts, Spacing, Box Sizes

Edit `styles.css`.

Examples:

- heading size
- card spacing
- button style
- mobile spacing

After editing, save and refresh browser preview.

### C. Change Motion Or Button Behavior

Edit `script.js`.

Examples:

- replay button behavior
- animation timing
- sequence order

Change one small thing at a time and test.

### D. Add Or Update Documents

1. Put markdown docs in `docs/`.
2. Put table files in `sheets/`.
3. Put presentation files in `presentations/`.
4. Add or update links in `index.html` and `README.md`.

## 5. How To Preview Before Publishing

### Option 1 (Very Easy)

1. In VS Code Explorer, right-click `index.html`.
2. Click Open With Default Browser.
3. Keep browser and VS Code side by side.
4. Save file, then refresh browser.

### Option 2 (Live Preview Extension)

1. Install a live preview extension in VS Code.
2. Start preview.
3. Edit files and see updates faster.

## 6. Git And GitHub (No Fear Version)

You do not need to memorize many commands.

### In VS Code Source Control

1. Open Source Control (`Ctrl + Shift + G`).
2. Review changed files.
3. Stage changes.
4. Write commit message.
5. Commit.
6. Push / Sync.

### Good Commit Message Style

Use short and specific messages:

- Add publishing SOP link in homepage
- Fix preview links for maintenance documents
- Update README with browser viewer links

## 7. Safe Change Strategy (Very Important)

To avoid confusion:

1. Make small changes.
2. Test after every small change.
3. Commit after each working chunk.
4. Do not edit many unrelated files in one commit.

This gives easy rollback if something breaks.

## 8. Publishing Checklist

Follow this sequence:

1. Save all files.
2. Confirm changed files are expected.
3. Commit.
4. Push.
5. Wait for GitHub Actions success.
6. Refresh live site (`Ctrl + F5`).
7. Test links and document previews.

For detailed publishing help, see `docs/publishing-sop.md`.

## 9. Troubleshooting (Beginner Cases)

### A. Website Still Shows Old Content

1. Check push was successful.
2. Check latest workflow run is successful.
3. Hard refresh browser (`Ctrl + F5`).
4. Wait 1-2 minutes and refresh again.

### B. A Link Downloads Instead Of Previewing

1. Use Office or Google viewer link format.
2. Avoid direct links to `.pptx` or `.docx` when preview is required.

### C. Push Rejected

1. Pull latest changes.
2. Resolve conflicts if shown.
3. Push again.

### D. Accidentally Changed Wrong File

1. Do not panic.
2. Review file in Source Control diff.
3. Keep only intended changes.
4. Then commit.

## 10. Learning Path For You (Gentle Progress)

Learn in this order:

1. HTML basics: headings, paragraphs, lists, links.
2. CSS basics: color, spacing, font size, responsive layout.
3. JavaScript basics: simple click events and class toggles.
4. Git basics: commit, push, pull.

Suggested weekly pattern:

- Week 1: only HTML edits.
- Week 2: simple CSS improvements.
- Week 3: small JavaScript changes.
- Week 4: combine all three with confidence.

## 11. Recommended Work Habit (Comfortable Pace)

1. Work in 30-45 minute sessions.
2. Keep a small notepad of what you changed.
3. End each session with one commit.
4. Write one-line summary in commit message.

Consistency beats speed.

## 12. Quick Reference (At A Glance)

- Edit page content: `index.html`
- Edit design: `styles.css`
- Edit behavior: `script.js`
- Add project docs: `docs/`
- Add table data: `sheets/`
- Add presentations: `presentations/`
- Publish steps: `docs/publishing-sop.md`

## 13. Final Encouragement

You are already doing the right things:

- making real updates,
- publishing to GitHub,
- improving documentation,
- and asking clear questions.

That is exactly how good developers grow.