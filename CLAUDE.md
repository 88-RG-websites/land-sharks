# land-sharks: Land Shark Tours site, not built from restaurant-template

This repo has `.eleventy.js`, so a SessionStart hook injects `~/.claude/context/client-site.md` here. Its
deploy, server and review rules apply. Its "Template mechanics" section does not: there is no
`lib/site.js`, `theme.js`, `template.json` or `template.lock` here, and no template skills (the upgrade
and go-live tools do not run against this repo). This file holds only what is specific to this site.

## This site
- A Reservation Genie client (backend reservation-genie_v2), not an 88restaurants one: leave it out of
  template and fleet work unless the owner asks for it.
  RG paths come from `client.rgPath` (`land-shark-tours`); bookings run on `book.landsharktours.com`.
- Build: `npm run build` (Tailwind CSS from `src/assets/sass/styles.scss`, then Eleventy `src/` → `dist/`).
  Content: `src/_data/client.js`.
- Preview: `https://preview.88restaurants.com/landsharktours.com/` (`SITE_NAME` is `landsharktours.com`).
  Production domain: `landsharktours.com` (`deploy.sh` `PROD_DOMAIN`).
- `deploy.sh` has the guarded `--confirm` production path (rules in the shared file).
- A push to `main` also runs `.github/workflows/deploy.yml` (GitHub Pages build of `dist/`).

Add a fact here only when it is true of this site alone. Anything that would hold for every client
site belongs in `~/.claude/context/client-site.md`.
