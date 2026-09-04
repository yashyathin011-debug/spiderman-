# Spydy Portfolio

Personal portfolio site for Sri Sushmita — full-stack engineer. Built with
React, Vite, and Tailwind CSS.

## Features

- Hover-to-reveal hero portrait
- About, Skills, Projects, and Contact sections
- Fully responsive, keyboard-accessible, respects reduced-motion preference

## File structure

```
spydy-portfolio/
├── index.html              Entry HTML, loads fonts and the React root
├── package.json             Dependencies and npm scripts
├── vite.config.js           Vite build configuration
├── tailwind.config.js       Design tokens (colors, fonts)
├── postcss.config.js        Tailwind/Autoprefixer pipeline
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              React entry point
    ├── App.jsx               Page layout — assembles all sections
    ├── index.css             Tailwind directives + small global styles
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx           Hover-reveal portrait + intro
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   └── WebCorner.jsx      Original decorative line-art (no third-party art)
    └── data/
        ├── skills.js          Edit this to update your skill list
        └── projects.js        Edit this to update your project cards
```

## Run it locally in VS Code

1. Open this folder in VS Code (`File → Open Folder…`).
2. Open the built-in terminal (`` Ctrl+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Customize

- **Photo**: replace the placeholder block in `src/components/Hero.jsx` with
  `<img src="/portrait.jpg" alt="Sri Sushmita" className="w-full h-full object-cover" />`
  and drop `portrait.jpg` into `public/`.
- **Resume**: add `resume.pdf` to `public/` — the "Explore" button already
  links to `/resume.pdf`.
- **Projects / Skills**: edit `src/data/projects.js` and `src/data/skills.js`.
- **Colors**: edit the `colors` block in `tailwind.config.js`.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy

The build output (`npm run build`) is a static `dist/` folder — deploy it
directly to GitHub Pages, Vercel, or Netlify.
