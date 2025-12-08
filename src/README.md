# Runway Services Website

A parallax scrolling landing page with custom fonts and immersive design.

## Deployment Instructions

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/iamstefanp/runwayservices-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

### Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Local Development

```bash
npm install
npm run dev
```

## Built With

- React 18
- Vite
- Tailwind CSS 4.0
- TypeScript
- Custom Google Fonts
