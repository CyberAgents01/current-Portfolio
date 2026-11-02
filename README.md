# Ankush Patil — IT Infrastructure Portfolio

A responsive, multi-page React portfolio built with Vite, React Router, Framer Motion, Lucide React and custom CSS.

## Included
- Home, About, Skills, Projects, project detail pages, Experience, Education and Contact.
- Original supplied homepage banner at `public/images/ankush-hero.png`.
- Supplied resume PDF at `public/Ankush-Patil-Resume.pdf`.
- Responsive navigation and reduced-motion support.
- Contact form validation with mailto fallback.
- Optional Formspree integration.
- Render static-site configuration.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```
The production website is generated in `dist/`.

## Deploy to Render
1. Push this project to a GitHub repository.
2. In Render, choose **New → Static Site** and connect the repository.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Deploy. The included `public/_redirects` file provides an SPA fallback on hosts that support redirects.

Alternatively, use the included `render.yaml` blueprint.

## Contact form setup (optional)
By default, the contact form validates input and opens the visitor's email application with a prefilled message. It does **not** claim to send a message automatically.

To enable direct online submissions:
1. Create a form with Formspree.
2. Copy its endpoint, such as `https://formspree.io/f/your-form-id`.
3. Create a `.env` file in the project root.
4. Add:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```
5. Restart the dev server and rebuild. Configure the same variable in Render's environment settings if needed.

## Update project repository links
Open `src/data/profile.js`. Each project has a `github` field. Add the exact repository URL when available. Empty values intentionally display “Repository link pending”.

## Resume
The supplied resume is already included at:
`public/Ankush-Patil-Resume.pdf`

Replace that file with a newer PDF using the same filename to update the Download Resume button.

## Hero image
The supplied image is included at:
`public/images/ankush-hero.png`

The homepage uses this original image directly. It is not regenerated or face-edited.

## Notes
- Skill percentages and fabricated statistics are intentionally omitted.
- The NetCluster framework is labelled “RAI Framework” because that is how it appears in the supplied resume. Confirm the spelling if you want it changed to “RIA”.
- Individual project repository URLs were not provided, so no fake URLs are included.
- This is a static frontend. Formspree is optional for direct contact submissions.
