# 🚀 Portfolio Deployment Guide

Your portfolio is ready to deploy! Here are two easy options:

## Option 1: Deploy to Vercel (Recommended) ⭐

Vercel is the fastest and easiest option for Next.js apps.

### Steps:
1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**
   - Sign up with GitHub
   - Click "New Project"
   - Select your portfolio repository
   - Vercel auto-detects Next.js ✅
   - Click "Deploy"

3. **That's it!** Your site goes live at `vimal.vercel.app`

### Custom Domain (Optional)
- In Vercel Dashboard → Settings → Domains
- Add your custom domain (e.g., `vimal.dev`)
- Follow DNS instructions

---

## Option 2: Deploy to Netlify

Netlify also works great with Next.js.

### Steps:
1. **Push to GitHub** (same as above)

2. **Go to [netlify.com](https://netlify.com)**
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your portfolio repo
   - Build command: `next build`
   - Publish directory: `.next`
   - Click "Deploy"

3. **Custom domain:** Settings → Domain Management

---

## Option 3: Deploy to GitHub Pages

Free hosting directly from GitHub.

1. **Update `next.config.js`:**
```javascript
const nextConfig = {
  output: 'export',
  basePath: '',
}
```

2. **Create GitHub Actions workflow** (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

3. **Push to GitHub** - Actions automatically deploy to `username.github.io`

---

## Quick Setup Checklist

- [ ] Update social links (GitHub, LinkedIn, email)
- [ ] Replace placeholder links in projects
- [ ] Add real project links and descriptions
- [ ] Update your email in contact section
- [ ] Test on mobile (responsive design)
- [ ] Deploy to Vercel/Netlify/GitHub Pages

---

## Local Development

To test locally before deploying:

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`

---

## Key Features of Your Portfolio

✨ **Modern Design**
- Smooth animations and transitions
- Dark theme with teal/blue gradients
- Fully responsive (mobile, tablet, desktop)

📊 **Showcase Your Work**
- Featured projects with tech stacks
- Skills organized by category
- Education & certifications section

🎯 **Call-to-Action**
- Direct email link
- GitHub/LinkedIn integration
- Schedule a call option

🚀 **Performance**
- Next.js optimizations
- Fast page load times
- SEO-friendly metadata

---

## Need Help?

**Vercel Docs:** https://vercel.com/docs
**Next.js Docs:** https://nextjs.org/docs
**Tailwind Docs:** https://tailwindcss.com/docs

Good luck! 🎉
