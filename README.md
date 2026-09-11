# FT7 Game Information Website

A modern, SEO-friendly FT7 Game informational and referral website built with React, Vite, Tailwind CSS, React Router, Framer Motion, and Lucide icons.

## Features

- Responsive informational homepage
- About, Disclaimer, Privacy Policy, and Terms pages
- News & Blog section with article cards and detail routing
- SEO-friendly page metadata and semantic HTML structure
- Reusable components and centralized site config
- Strong but responsible CTA links and referral configuration

## Getting started

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

## Change the target referral URL

Update the URL in:

```js
src/data/siteConfig.js
```

```js
export const SITE_CONFIG = {
  siteName: 'FT7 GAME',
  targetUrl: 'https://example.com',
  description: 'General information, guides and updates related to FT7 Game.'
};
```

Replace the placeholder with your real referral or target link.

## Change colors

The website uses the configured Tailwind theme in:

```js
tailwind.config.js
```

You can edit the colors under the `extend.colors` section to match your branding.

## Add or edit articles

Update the article list in:

```js
src/data/articles.js
```

Each article object contains:

- `title`
- `slug`
- `category`
- `date`
- `excerpt`
- `image`
- `content`

## Replace images

Images for article cards can be replaced in:

```bash
public/images/
```

Use your own SVG or image files and update the corresponding `image` path in `src/data/articles.js`.

## Edit disclaimer content

Update the legal and informational wording in:

```js
src/pages/Disclaimer.jsx
```

This page is structured to make ownership, referral, and legal wording easy to customize.

## Project structure

```text
src/
  components/
  data/
  pages/
  App.jsx
  main.jsx
  index.css
```

## Notes

- The site intentionally avoids claiming official ownership unless explicitly confirmed.
- The design is informational and referral-oriented rather than a game portal or casino-style layout.
- CTA buttons and navigation are centralized for ease of editing.
