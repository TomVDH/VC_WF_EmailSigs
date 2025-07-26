# Vancouver Club - Webflow Cloud Email Signatures

A Webflow Cloud application for The Vancouver Club, built with Astro and integrated with Webflow's DevLink components.

## 🚀 Project Overview

This project demonstrates:
- **Webflow Cloud** deployment with Astro framework
- **DevLink integration** with Webflow design system
- **VcHeader and VcFooter** components from Vancouver Club's Webflow site
- **Responsive design** with Vancouver Club branding

## 🏗️ Project Structure

```text
/
├── devlink/                 # Webflow components synced from your site
│   ├── VcHeader✓.jsx       # Vancouver Club header component
│   ├── VcFooter✓.jsx       # Vancouver Club footer component
│   └── global.css          # Webflow design system styles
├── src/
│   ├── layouts/
│   │   └── Layout.astro    # Base layout with DevLink integration
│   └── pages/
│       └── index.astro     # Homepage with header/footer
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4322`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `webflow cloud deploy`    | Deploy to Webflow Cloud                         |
| `webflow devlink sync`    | Sync updated Webflow components                  |

## 🌐 Deployment

This project is deployed to Webflow Cloud and available at:
- **Local Development**: `http://localhost:4322/email-sigs`
- **Production**: `https://your-site.webflow.io/email-sigs`

## 🔗 Links

- **GitHub Repository**: [https://github.com/TomVDH/VC_WF_EmailSigs](https://github.com/TomVDH/VC_WF_EmailSigs)
- **Webflow Cloud Documentation**: [https://developers.webflow.com/webflow-cloud/getting-started](https://developers.webflow.com/webflow-cloud/getting-started)

## 📝 License

MIT License - see LICENSE file for details.
