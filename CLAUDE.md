# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at http://localhost:3000
npm run build    # Production build to /build
npm test         # Run tests in watch mode
npm test -- --watchAll=false  # Run tests once (CI mode)
```

## Architecture

This is a Create React App (React 19) marketing/corporate website for **Opus Engineering**, an industrial PEB (Pre-Engineered Buildings) company.

### Routing (react-router-dom v6)

`App.js` defines all routes:

| Route | Page Component |
|-------|---------------|
| `/` | `Pages/Home/Home` |
| `/about` | `Pages/AboutUs/AboutUs` |
| `/services` | `Pages/Services/Services` |
| `/contact` | `Pages/ContactUs/ContactUs` |
| `/projects` | `Components/Projects/Project_updated` |
| `/blogs` | `Components/Blog/BlogPage` |
| `/terms` | `Pages/Terms` |

### Page composition pattern

Every page wraps section components between a shared `<Navbar/>` and `<Footer/>`. Pages do not contain their own logic — they only compose components. Many components are commented out inside pages; these are either experimental alternatives or temporarily disabled sections.

### Component structure

`src/Components/` groups components by section (e.g., `Hero/`, `WhatweDo/`, `Blog/`). Each component folder contains:
- A `.jsx` or `.js` component file
- A co-located `.css` file
- Optionally a `*data.js` file with hardcoded content arrays (e.g., `WhatweDo/Coachingdata.js`)

Content like service descriptions, blog posts, FAQ answers, and testimonials is all hardcoded in these data files or inline within the component — there is no CMS or API.

### Image paths

Images are referenced two ways — do not mix them up:
- **ES module imports** for images used in JS/JSX (e.g., `import logo from '../../Images/o_logo.png'`)
- **Public-path strings** like `/Images/shed.jpg` for paths in data arrays (e.g., `Coachingdata.js`). These resolve against the `public/` folder at runtime, but the actual files live in `src/Images/`. CRA copies them at build time only if they are explicitly imported or placed in `public/`. If adding new card/flip images referenced by path string, place them in `public/Images/`.

### Commented-out code

Several files contain large commented-out blocks that are prior implementations (e.g., the scroll-driven sticky version of `Coaching.jsx`, the full dropdown menus in `Navbar.jsx`). These are intentional and should be left in place unless explicitly removed.
