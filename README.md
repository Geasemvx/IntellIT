# IntellIT website

A one-page website for IntellIT, an IT consultancy in Cape Town, built with React, Vite, Tailwind CSS and an interactive 3D robot made in Spline (which runs on Three.js). It's based on the original IntellIT template, and its contact form emails enquiries to you.

## Run it locally

You need Node.js 18 or later.

```bash
npm install
npm run dev
```

Then open the local address Vite prints, usually http://localhost:5173.

## Edit your details

Most text lives in `src/config.js`, including the 3D robot's scene link (`ROBOT_SCENE`): your name, email, location, links, services and process steps. Change it there and the whole site updates. The About section text is in `src/components/About.jsx`.

## Deploy to Netlify and receive form emails

1. Push this folder to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project** and pick the repository. The build settings come from `netlify.toml` (`npm run build`, publish folder `dist`).
3. In the site's settings, open **Forms** and make sure form detection is turned on, then redeploy so Netlify finds the `contact` form.
4. Still under **Forms**, add a **form notification → Email notification**, choose the `contact` form, and enter the email address you want enquiries sent to.

Every message sent through the site then appears under **Forms** in Netlify and is emailed to you. Netlify's menus change from time to time, so the names above may differ slightly.

## Hosting somewhere else

Netlify Forms only works on Netlify. On any other host:

1. Create a free form at https://formspree.io and copy its endpoint (it looks like `https://formspree.io/f/abcdwxyz`).
2. Copy `.env.example` to `.env` and paste the endpoint after `VITE_FORMSPREE_ENDPOINT=`.
3. Rebuild with `npm run build`. Formspree will email each submission to you.

## Project structure

```
public/            gradient.png from the template, favicon
src/config.js      site details, services and process steps
src/components/    Header, Hero, RobotScene (3D robot), Services, Process, About, Contact, Footer
src/lib/           form sending and reduced-motion helpers
index.html         includes a hidden copy of the form so Netlify can detect it
```
