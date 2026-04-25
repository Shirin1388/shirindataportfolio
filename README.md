# 🗂️ BI Engineer Portfolio

A personal and professional portfolio for a **Business Intelligence Engineer**, built with [Astro](https://astro.build) v5. Deployed as a static site via **GitHub Pages** using **GitHub Actions**.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Local Development](#local-development)
3. [Personalising the Site](#personalising-the-site)
4. [Deploying to GitHub Pages — Step by Step](#deploying-to-github-pages--step-by-step)
   - [Step 1 — Create a GitHub account](#step-1--create-a-github-account)
   - [Step 2 — Install Git on your machine](#step-2--install-git-on-your-machine)
   - [Step 3 — Create a new repository on GitHub](#step-3--create-a-new-repository-on-github)
   - [Step 4 — Connect your local project to GitHub](#step-4--connect-your-local-project-to-github)
   - [Step 5 — Update the Astro config](#step-5--update-the-astro-config)
   - [Step 6 — Push your code](#step-6--push-your-code)
   - [Step 7 — Enable GitHub Pages in your repo settings](#step-7--enable-github-pages-in-your-repo-settings)
   - [Step 8 — Watch the deployment](#step-8--watch-the-deployment)
5. [How Automatic Deployments Work](#how-automatic-deployments-work)
6. [Custom Domain (Optional)](#custom-domain-optional)
7. [Troubleshooting](#troubleshooting)

---

## Project Structure

```
/
├── public/
│   ├── favicon.svg          ← Replace with your own
│   └── resume.pdf           ← Add your CV here
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── Work.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro      ← Single-page entry point
│   └── styles/
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml       ← GitHub Actions CI/CD pipeline
├── astro.config.mjs         ← Site URL and base path live here
└── package.json
```

---

## Local Development

### Prerequisites

- **Node.js** 18 or later — download from [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js)

### Run the dev server

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server (hot reload included)
npm run dev
```

Open your browser at `http://localhost:4321`. Any file you save will reload the page instantly.

### Other useful commands

| Command            | Action                                      |
| ------------------ | ------------------------------------------- |
| `npm run dev`      | Start local dev server at `localhost:4321`  |
| `npm run build`    | Build the production static site to `dist/` |
| `npm run preview`  | Preview the production build locally        |

---

## Personalising the Site

Search for the placeholder values below and replace them with your own details.

| File | What to change |
|------|---------------|
| `src/components/Hero.astro` | Your name, tagline, availability status, stat numbers |
| `src/components/About.astro` | Bio text, location, education, certifications |
| `src/components/Skills.astro` | Skill names and proficiency levels |
| `src/components/Projects.astro` | Project titles, descriptions, metrics, links |
| `src/components/Work.astro` | Job roles, companies, dates, achievements |
| `src/components/Contact.astro` | Your email address, LinkedIn, GitHub handle |
| `src/components/Footer.astro` | Your name |
| `src/pages/index.astro` | Page `<title>` and meta description |
| `astro.config.mjs` | `site` URL and `base` path (see Step 5) |
| `public/resume.pdf` | Replace with your actual CV/résumé |
| `public/photo.jpg` | Add your profile photo (then update the `About` component to use `<img>`) |

---

## Deploying to GitHub Pages — Step by Step

This guide assumes you are new to Git and GitHub. Follow each step carefully.

---

### Step 1 — Create a GitHub account

If you do not already have one, go to [github.com](https://github.com) and sign up for a free account. Remember your **username** — you will need it later.

---

### Step 2 — Install Git on your machine

Git is the tool that sends your code to GitHub.

- **Windows**: Download and install from [git-scm.com](https://git-scm.com/download/win)
- **macOS**: Open Terminal and run `git --version`. If Git isn't installed, macOS will prompt you to install it.
- **Linux (Ubuntu/Debian)**: `sudo apt install git`

After installing, tell Git who you are (do this once):

```bash
git config --global user.name  "Your Full Name"
git config --global user.email "your@email.com"
```

---

### Step 3 — Create a new repository on GitHub

1. Log in to [github.com](https://github.com).
2. Click the **+** button in the top-right corner → **New repository**.
3. Name your repository. Two common choices:
   - `portfolio` → your site will be at `https://YOUR_USERNAME.github.io/portfolio`
   - `YOUR_USERNAME.github.io` → your site will be at `https://YOUR_USERNAME.github.io` (cleaner URL, recommended for a personal portfolio)
4. Set visibility to **Public** (required for free GitHub Pages).
5. **Do not** tick "Add a README file" — you already have one.
6. Click **Create repository**.

After creating the repo, GitHub will show you a page with a URL like:

```
https://github.com/YOUR_USERNAME/YOUR_REPO_NAME
```

Copy that URL — you'll need it in the next step.

---

### Step 4 — Connect your local project to GitHub

Open your terminal, navigate to the portfolio folder, and run these commands one at a time:

```bash
# Move into your project folder (adjust the path to where you saved it)
cd path/to/portfolio

# Initialise a local git repository
git init

# Add all project files to be tracked
git add .

# Create your first commit (a snapshot of the project)
git commit -m "Initial portfolio commit"

# Rename the default branch to 'main' (GitHub's default)
git branch -M main

# Link your local project to the GitHub repository you just created
# Replace the URL below with YOUR repository URL from Step 3
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

> **What is a remote?** A "remote" is just a nickname for a URL. When you run `git push`, Git knows to send your code to that URL. The nickname `origin` is the conventional default name — you will see it used everywhere.

---

### Step 5 — Update the Astro config

Open `astro.config.mjs` and update the two values at the top:

```js
export default defineConfig({
  // Replace with your actual GitHub username and repo name:
  site: "https://YOUR_USERNAME.github.io",
  base: "/YOUR_REPO_NAME",  // ← Remove this entire line if your repo is named YOUR_USERNAME.github.io
  output: "static",
});
```

**Examples:**

| Repository name | `site` | `base` |
|---|---|---|
| `portfolio` | `https://john.github.io` | `/portfolio` |
| `john.github.io` | `https://john.github.io` | *(remove the line)* |

Save the file, then stage and commit the change:

```bash
git add astro.config.mjs
git commit -m "Set site URL and base path for GitHub Pages"
```

---

### Step 6 — Push your code

Send your code to GitHub:

```bash
git push -u origin main
```

> **Tip:** The `-u origin main` flags tell Git to remember that `origin main` is where to push by default. After this first push, you can just type `git push` in future.

If asked for your GitHub credentials, use your GitHub username and a **Personal Access Token** (not your password). To create one:
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic).
2. Click "Generate new token", give it a name, set an expiration, and tick the `repo` scope.
3. Copy the token and use it as your password when Git prompts you.

---

### Step 7 — Enable GitHub Pages in your repo settings

1. Go to your repository on GitHub (e.g. `github.com/YOUR_USERNAME/YOUR_REPO_NAME`).
2. Click the **Settings** tab at the top.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment**, change the **Source** dropdown to **GitHub Actions**.
5. Click **Save**.

That's it! You do not need to select a branch or folder — the `deploy.yml` workflow handles everything.

---

### Step 8 — Watch the deployment

1. Go to your repository on GitHub.
2. Click the **Actions** tab.
3. You should see a workflow called **Deploy to GitHub Pages** running (yellow dot = in progress, green tick = success, red ✗ = error).
4. Once the workflow succeeds (usually takes 1–3 minutes), your site is live!

Your site URL:
- If your repo is `portfolio` → `https://YOUR_USERNAME.github.io/portfolio`
- If your repo is `YOUR_USERNAME.github.io` → `https://YOUR_USERNAME.github.io`

---

## How Automatic Deployments Work

Every time you push code to the `main` branch, the GitHub Actions workflow in `.github/workflows/deploy.yml` runs automatically. It:

1. Checks out your code on a fresh Ubuntu virtual machine.
2. Uses the official [Astro GitHub Action](https://github.com/withastro/action) to install dependencies and build the site.
3. Deploys the built files to GitHub Pages.

You never have to run `npm run build` manually for production — just push your changes.

---

## Custom Domain (Optional)

If you own a domain (e.g. `yourname.dev`):

1. Create a file `public/CNAME` containing just your domain:
   ```
   yourname.dev
   ```
2. In `astro.config.mjs`, set `site: "https://yourname.dev"` and remove the `base` line.
3. Push the changes.
4. In your domain registrar's DNS settings, point your domain to GitHub Pages by adding:
   - 4 × `A` records pointing to GitHub's IP addresses (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site))
   - Or a `CNAME` record pointing `www` to `YOUR_USERNAME.github.io`
5. In GitHub → Settings → Pages → Custom domain, enter your domain and click **Save**.

DNS changes can take up to 24 hours to propagate.

---

## Troubleshooting

**Styles or links are broken after deploying**  
→ Make sure `base` in `astro.config.mjs` exactly matches your repo name (case-sensitive). E.g. if the repo is `Portfolio`, use `base: "/Portfolio"`.

**The Actions tab shows a red ✗**  
→ Click the failed workflow → click the failing step → read the error message. Common causes: Node version mismatch, typo in `astro.config.mjs`, or a missing dependency.

**GitHub Pages source is not showing "GitHub Actions"**  
→ Make sure you pushed at least one commit to `main` before changing the Pages source setting. GitHub sometimes requires a commit before the option appears.

**`git push` asks for credentials every time**  
→ Run `git config --global credential.helper store` (or use `osxkeychain` on macOS) to cache your credentials.

**Changes pushed but site didn't update**  
→ Wait 1–3 minutes and hard-refresh your browser (`Ctrl+Shift+R` / `Cmd+Shift+R`). GitHub Pages can sometimes serve a cached version.

---

*Built with ♥ using [Astro](https://astro.build)*
