# Portfolio

Personal portfolio site for Garrett Hockersmith — [garrhock.github.io/portfolio-website](https://garrhock.github.io/portfolio-website)

A two-column layout: the left half is fixed and carries the introduction, navigation, and social links, while the right half scrolls through About, Experience, and Projects. Below the large breakpoint it collapses to a single column with sticky section headers.

## Tech stack

- **React 19** with hooks
- **Vite 7** for the build and dev server
- **Tailwind CSS 4**, configured CSS-first via `@theme` in `src/index.css`
- **Public Sans** and **JetBrains Mono** from Google Fonts

## Running it

```bash
npm install
npm run dev      # http://localhost:5173/portfolio-website/
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # eslint
```

The dev URL includes the `/portfolio-website/` path because `vite.config.js` sets `base` for GitHub Pages deployment.

## Structure

```
src/
├── App.jsx                    Layout shell, cursor spotlight, scrollspy
├── index.css                  Theme tokens and row hover choreography
└── components/
    ├── Sidebar.jsx            Fixed left column with nav state
    ├── About.jsx
    ├── Experience.jsx
    ├── Projects.jsx
    ├── Socials.jsx
    ├── Mark.jsx               Company/platform logos beside dates
    ├── SystemwareMark.jsx
    ├── SectionHeading.jsx     Sticky on mobile, screen-reader-only on desktop
    └── ArrowIcon.jsx
```

Content lives in arrays at the top of `Experience.jsx` and `Projects.jsx` — adding an entry means adding an object, not touching markup.

### Notes

- Colours, fonts, and spacing come from the `@theme` block in `src/index.css`. Tailwind 4 reads that directly; there is no `tailwind.config.js`.
- The two opacity rules driving the row hover effect have equal specificity, so their **source order** in `index.css` is what makes the hovered row win. Don't reorder them.
- The cursor spotlight is skipped entirely on coarse pointers, and all transitions are disabled under `prefers-reduced-motion`.

## Credits

Layout inspired by [Brittany Chiang](https://brittanychiang.com).
