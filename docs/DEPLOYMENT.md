# Deployment

## Prerequisites

- Node.js 20+
- npm 10+

## Local Build

```bash
npm install
npm run build
```

Output goes to `dist/`. Three pages: `index.html`, `asterism.html`, `family-viii.html`.

Preview the build:

```bash
npm run preview
```

Open http://localhost:4173.

## Vercel Deployment

### Option A: CLI

```bash
npx vercel
```

Follow the prompts. Auto-detects Vite.

### Option B: GitHub Integration

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com), import the repo
3. Vercel auto-detects Vite - no config needed
4. Set the project name to `asterism`

The `vercel.json` in this repo configures the framework and clean URLs.

### Option C: Any Static Host

Serve the `dist/` directory. Examples:

```bash
# Python
python3 -m http.server -d dist 8080

# Node
npx serve dist

# Netlify
# Drag dist/ into the Netlify dashboard
```

## Post-Deploy Verification

- Visit the production URL
- Click through all specimens on Family VIII
- Test the RECORD button
- Verify the hidden specimen 101 reveal works
- Check that the standalone piece cycles correctly
