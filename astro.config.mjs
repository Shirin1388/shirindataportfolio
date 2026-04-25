import { defineConfig } from "astro/config";

// Replace YOUR_GITHUB_USERNAME with your actual GitHub username
// Replace YOUR_REPO_NAME with your actual repository name
// Example: site: 'https://johndoe.github.io', base: '/my-portfolio'
// If the repo is named USERNAME.github.io, you can remove the `base` line entirely.

export default defineConfig({
  site: "https://YOUR_GITHUB_USERNAME.github.io",
  base: "/YOUR_REPO_NAME",
  output: "static",
});
