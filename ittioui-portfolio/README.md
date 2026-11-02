# Mohamed Ittioui — Portfolio

A bilingual (English/Spanish), dark, responsive React portfolio based only on the details in the supplied CV.

## Included

- React + Vite
- English / Spanish language toggle
- Responsive navigation
- Search and category filter for the projects section
- Experience, skills, education, languages and contact sections
- CV PDF included in `public/`
- Relative asset base configured for GitHub Pages project sites

## Before publishing

1. Open `src/main.jsx`.
2. Replace every `YOUR-USERNAME` with your GitHub username/profile URL.
3. Review the copy and add repository/demo links only for projects that are real and ready to show.
4. The project card currently describes the personal applications mentioned in the CV; it does not claim a particular app or repository exists.

## Run locally

Install Node.js (LTS), then from this folder:

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Build and test the production version

```bash
npm run build
npm run preview
```

Vite outputs the static site to `dist/`.

## Publish to GitHub Pages (recommended: GitHub Actions)

1. Create a **public** repository on GitHub, for example `ittioui-portfolio`.
2. Upload the contents of this folder to the repository root (do not upload the ZIP itself as the only repository content).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Add `.github/workflows/deploy.yml` (included in this project) and push the files to the `main` branch.
6. Open **Actions** and wait for the `Deploy portfolio to GitHub Pages` workflow to finish successfully.
7. The published address will normally be `https://YOUR-USERNAME.github.io/ittioui-portfolio/`. Replace the example username and repository name with yours.

If your repository is named `YOUR-USERNAME.github.io`, the published address is normally `https://YOUR-USERNAME.github.io/`.

## Notes

- GitHub Pages hosts the built frontend only. It does not run a Django/Python backend or PHP server.
- The Google Fonts import is optional; if fonts cannot load, system fallbacks are used.
- The CV PDF is copied into `public/CV-Mohamed-Ittioui.pdf` and is linked from the contact section.
- Do not publish secrets, API keys, private client data, or code you do not have permission to share.
