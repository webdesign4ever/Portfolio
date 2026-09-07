# Muhammad Moazzam Portfolio

A responsive developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize content

All portfolio content lives in `lib/data.ts`: profile information, experience, projects, skills, and certifications can be updated there without changing presentation components.

Replace `public/resume.pdf` when the résumé changes. Project cards deliberately use CSS mockups, so they can be swapped for real visuals without changing the layout.

## Contact form

The contact endpoint is `app/api/contact/route.ts` and uses Resend's email API. Add these values in `.env.local` locally and in Vercel project settings when deploying:

```bash
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=Portfolio <onboarding@resend.dev>
CONTACT_TO_EMAIL=rajamoazzam789@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

For initial testing with `onboarding@resend.dev`, `CONTACT_TO_EMAIL` must be the email address used to create the Resend account. For real visitors, verify a domain in Resend and set `RESEND_FROM_EMAIL` to an address on that exact verified domain. Until configured, the form displays a helpful message and direct contact links remain available.

## Quality notes

The site includes semantic sections, keyboard focus states, reduced-motion support, a persisted dark mode, generated Open Graph image/favicon, and file-based `sitemap.xml` and `robots.txt` routes. It is ready to deploy on Vercel.
