# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/1a9b4d97-8185-4259-94e8-d25be4b601fd

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/1a9b4d97-8185-4259-94e8-d25be4b601fd) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

You can use Lovable’s Publish, or deploy to Cloudflare Pages.

### Cloudflare Pages (recommended)

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite (optional)
- SPA routing: included via `public/_redirects` (fallback to `index.html`).

Steps:
- Create a Pages project and connect your Git repo.
- Configure the build command and output directory as above.
- Optional: set Node version if needed (Pages defaults are fine for Vite 5).

Note: The repository uses npm (package-lock.json). We removed `bun.lockb` to ensure Cloudflare uses npm. In Pages Build settings you can also set the build command explicitly to:

```
npm ci && npm run build
```

#### Form submissions → Telegram

This repo includes a Cloudflare Pages Function at `functions/submit.ts`.

- Frontend posts JSON to `/submit` with `{ name, contact }`.
- The function sends a Telegram message via Bot API.

Configure secrets in Cloudflare Pages → Settings → Environment variables:

- `TELEGRAM_BOT_TOKEN` (Secret): token of your bot
- `TELEGRAM_CHAT_ID` (Secret): chat ID or channel `@username`

After saving, redeploy the project. The form in the “Beta” section will start sending applications to Telegram.

#### Configure demo video

`VideoSection` reads the YouTube ID from a Vite env variable. Set it in Pages → Settings → Environment variables (both Production and Preview):

- Name: `VITE_YOUTUBE_VIDEO_ID`
- Value: e.g. `dQw4w9WgXcQ`

Local development: create `.env` with `VITE_YOUTUBE_VIDEO_ID=<your_id>`.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
