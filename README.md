# DW Website Frontend

This is a SvelteKit app for the DW character sheet UI.  
It is built as a static site and deployed automatically to GitHub Pages via GitHub Actions.

## Features

- SvelteKit + TypeScript
- Tailwind CSS styling
- Static site generation
- Automated deployment to GitHub Pages

## Deployment

On every push to the `master` branch, the site is built and published to GitHub Pages using the workflow in `.github/workflows/deploy.yml`.

## Local Development

```bash
yarn install
yarn dev
```

## License

MIT
