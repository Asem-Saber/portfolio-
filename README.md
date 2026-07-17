# Asem Saber — Portfolio

Personal portfolio website showcasing my work as an AI Engineer.

![Portfolio Preview](Portfolio-snapshot.png)

## Built With

- **Next.js 16** — React 19, App Router, Turbopack
- **Tailwind CSS v4** — Utility-first styling
- **GSAP** — Scroll-triggered animations and page transitions
- **Lenis** — Smooth scroll

## Sections

- **Hero** — Introduction with animated text reveal
- **About** — Bio, highlights, and stats
- **Tech Stack** — Scrolling icon rows with hover tooltips
- **Projects** — Featured project list with floating thumbnail on hover, individual detail pages with key features
- **Experience** — Timeline of work, training, and education
- **Contact** — Email and resume links

## Use It as Your Own

Feel free to clone this repo and make it yours:

```bash
git clone https://github.com/Asem-Saber/portfolio-.git
cd portfolio-
npm install
npm run dev
```

To customize, update these files:

| What to change | File |
|---|---|
| Name, role, email, resume URL | `lib/data.ts` → `GENERAL_INFO` |
| Social links (GitHub, LinkedIn, etc.) | `lib/data.ts` → `SOCIAL_LINKS` |
| Nav bar links | `lib/data.ts` → `NAV_LINKS` |
| About me bio and highlights | `lib/data.ts` → `ABOUT_TEXT` |
| Stats (projects count, GPA, etc.) | `lib/data.ts` → `STATS` |
| Tech stack icons and names | `lib/data.ts` → `TECH_STACK` |
| Projects (title, description, key features, tech, images) | `lib/data.ts` → `PROJECTS` |
| Work experience and education | `lib/data.ts` → `EXPERIENCES` |
| Profile photo | `public/images/personal-pic.jpeg` |
| Project thumbnails and screenshots | `public/images/projects/` |
| Site title and meta description | `app/layout.tsx` → `metadata` |
| Color theme | `app/globals.css` → CSS variables |

Almost everything lives in `lib/data.ts` — swap the content, drop in your images, and you're done.

## Deployment

Deploy to [Vercel](https://vercel.com) — zero config for Next.js.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Email:** asem.saber.ai@gmail.com
- **GitHub:** [Asem-Saber](https://github.com/Asem-Saber)
- **LinkedIn:** [Asem Saber](https://www.linkedin.com/in/asem-saber-8657a6278)
- **Kaggle:** [asemsaber](https://www.kaggle.com/asemsaber)
