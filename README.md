
# Pixel Integrity Check

This is a web application built with React, Vite, and TypeScript using Lovable.

## Deploying to GitHub Pages

If you are seeing a "MIME type" error on your live GitHub Pages site, it's because the raw source code (`.tsx` files) is being deployed instead of the compiled JavaScript (`.js`) files that browsers can understand.

To fix this, you need to set up a deployment workflow that automatically builds your site and pushes the result to GitHub Pages. The recommended way to do this is with GitHub Actions.

### Step 1: Create a GitHub Actions Workflow

1.  Go to your project's repository on GitHub.com.
2.  Click on the **Actions** tab near the top of the page.
3.  If you see a suggestion for a "Node.js" workflow, click "Configure". Otherwise, click **"set up a workflow yourself"**.
4.  This will open a new file editor in GitHub. Name the file `deploy.yml`. It must be located at `.github/workflows/deploy.yml`.
5.  Delete the default content and paste the following code into the file:

    ```yaml
    # Simple workflow for deploying static content to GitHub Pages
    name: Deploy static content to Pages

    on:
      # Runs on pushes to the default branch
      push:
        branches: ['main'] # Change to 'master' if that's your default branch

      # Allows you to run this workflow manually from the Actions tab
      workflow_dispatch:

    # Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
    permissions:
      contents: read
      pages: write
      id-token: write

    # Allow only one concurrent deployment
    concurrency:
      group: 'pages'
      cancel-in-progress: true

    jobs:
      # Single deploy job
      deploy:
        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v4
          - name: Set up Node
            uses: actions/setup-node@v4
            with:
              node-version: 18 # Use a recent LTS version
              cache: 'npm'
          - name: Install dependencies
            run: npm install
          - name: Build
            run: npm run build # This command builds your site into the 'dist' folder
          - name: Setup Pages
            uses: actions/configure-pages@v5
          - name: Upload artifact
            uses: actions/upload-pages-artifact@v3
            with:
              # Upload 'dist' directory
              path: './dist'
          - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v4
    ```

6.  Click **"Commit changes..."**. You can commit directly to your `main` branch.

### Step 2: Configure GitHub Pages Settings

1.  After committing the workflow file, go back to your repository's main page.
2.  Click on the **Settings** tab.
3.  In the left sidebar, click on **Pages**.
4.  Under "Build and deployment", change the **Source** from "Deploy from a branch" to **"GitHub Actions"**.

### Step 3: Trigger the Deployment

The workflow will run automatically now. To see it run immediately, you can go to the **Actions** tab, click on the workflow on the left, and click "Run workflow".

After the workflow finishes, your site will be deployed correctly. Any future changes you push from Lovable will also be deployed automatically.

