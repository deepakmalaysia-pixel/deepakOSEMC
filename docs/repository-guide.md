# Repository Guide For Beginners

This document explains the folders and files in this repository in simple language.

## 1. What This Repository Is

This repository stores two things:

- The website files that display your project online.
- The supporting project documents, templates, diagrams, and data sheets.

Think of it as one cupboard with separate shelves.

- The top shelf is the website itself.
- The other shelves hold the documents used by the website.

## 2. Main Folder Structure

```text
deepakOSEMC/
├── .github/
│   └── workflows/
│       └── blank.yml
├── docs/
│   ├── draft-tender.md
│   ├── mh-compliance.md
│   └── repository-guide.md
├── maps/
│   └── electrical-sld.md
├── presentations/
│   └── Electrical Preventive Maintenance Program.pptx
├── sheets/
│   ├── EMC_Savings_Tracker.csv
│   ├── evaluation-matrix.csv
│   ├── evaluation-matrix.html
│   └── evaluation-matrix.md
├── templates/
│   └── tor-template.md
├── .gitattributes
├── .gitignore
├── index.html
├── README.md
├── script.js
└── styles.css
```

## 3. Meaning Of Each Folder

### Root Folder

The root folder means the main top-level project folder.

Important files here:

- `index.html`: The main website page.
- `styles.css`: The design and appearance of the website.
- `script.js`: The movement and interactive behavior of the website.
- `README.md`: The short introduction to the repository.

Simple rule:

- If you want to preview the main website, open `index.html`.

### .github/

This folder is for GitHub automation.

- `workflows/blank.yml`: Automatically publishes the website to GitHub Pages.

You usually do not need to edit this unless you want to change how publishing works.

### docs/

This folder stores written project documents.

- `draft-tender.md`: Draft tender content.
- `mh-compliance.md`: Maharashtra compliance checklist.
- `repository-guide.md`: This beginner-friendly guide.

Use this folder for text-based reference documents.

### maps/

This folder stores diagram-related files or placeholders.

- `electrical-sld.md`: Reference placeholder for the electrical single-line diagram.

Use this folder for electrical layouts, diagrams, or map-style references.

### presentations/

This folder stores PowerPoint or slide-based presentation material.

- `Electrical Preventive Maintenance Program.pptx`: Presentation deck for review and discussion.

Use this folder for downloadable presentation files.

### sheets/

This folder stores spreadsheets, calculations, and sheet-like data.

- `evaluation-matrix.csv`: Raw evaluation table data.
- `evaluation-matrix.html`: Browser view of the evaluation matrix.
- `evaluation-matrix.md`: Notes or explanation for the evaluation matrix.
- `EMC_Savings_Tracker.csv`: Savings tracker sheet.

Use this folder for files that behave like tables or calculations.

### templates/

This folder stores reusable document formats.

- `tor-template.md`: Terms of Reference template.

Use this folder when you want a standard format that can be reused later.

## 4. Meaning Of The File Types

You will see different file extensions in the repository.

- `.html`: A web page.
- `.css`: Design rules for a web page.
- `.js`: JavaScript for movement or interactivity.
- `.md`: Markdown document, which is simple formatted text.
- `.csv`: Spreadsheet-style table data.
- `.yml`: Automation or configuration file.

## 5. Which File To Open For What

- To preview the main website: `index.html`
- To read the tender draft: `docs/draft-tender.md`
- To read the compliance checklist: `docs/mh-compliance.md`
- To view the matrix in a browser: `sheets/evaluation-matrix.html`
- To edit sheet-style raw data: `sheets/evaluation-matrix.csv` or `sheets/EMC_Savings_Tracker.csv`
- To reuse the ToR structure: `templates/tor-template.md`

## 6. Recommended Rule For Future Work

To keep the repository neat, use this rule:

- Keep website engine files in the root folder.
- Keep written documents in `docs/`.
- Keep diagrams in `maps/`.
- Keep presentation decks in `presentations/`.
- Keep tables and spreadsheet-style files in `sheets/`.
- Keep reusable formats in `templates/`.

## 7. Very Short Summary

If you forget everything else, remember this:

- `index.html` is the main page.
- `docs/` is for documents.
- `maps/` is for diagram references.
- `presentations/` is for PowerPoint or slide decks.
- `sheets/` is for tables and trackers.
- `templates/` is for reusable formats.

That is the complete working structure of this repository.