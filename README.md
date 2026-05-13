# objsee.org

minimal single-page site for the `objsee` pseudonym.

## stack

- next 16 (static export, `output: "export"`)
- react 19
- tailwind v4
- jetbrains mono
- bun

## dev

```bash
bun install
bun run dev
```

## build

```bash
bun run build   # → ./out
```

## deploy

pushes to `master`/`main` are built and deployed to gh pages via
`.github/workflows/deploy.yml`. custom domain is set via `public/CNAME`
(`objsee.org`). enable gh pages → source: github actions in repo settings.

## todo

- drop avatar asset at `public/avatar.png` (or similar) and swap the `<span
  className="avatar" />` in `src/app/page.tsx` for a real `<img>` (keep the
  `outline-offset: -1px` ring).
- confirm bio copy in `src/app/page.tsx`.
- confirm tangled handle (`tangled.org/@objsee.tngl.sh`).
