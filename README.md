## Welcome!

This is my personal portfolio website as a Next.js app. It can be accessed [here](https://kyle-armstrong.homelabwizard.net/).

### Local development

To get the site running locally:

1. Install dependencies.

   ```bash
   npm install
   ```

2. Run the development server.

   ```bash
   npm run dev
   ```

   The site will be served at `http://localhost:3000/` with hot reloading enabled.

3. Build a production bundle when you are ready to deploy.

   ```bash
   npm run build
   npm run start
   ```

   `npm run start` serves the optimized build, matching what runs inside the Docker image.

### Rebuilding the Docker image locally

If you need to test the Docker image before pushing to GitHub Container Registry, run:

```bash
docker build -t portfolio-website:local .
```

You can then launch it with:

```bash
docker run --rm -p 3000:3000 portfolio-website:local
```

### Continuous delivery

The GitHub Actions workflow in [`.github/workflows/docker-image.yml`](.github/workflows/docker-image.yml) now only builds and publishes a new image when changes land on the `main` branch. Images are tagged with both `latest` and the commit SHA so you can roll back or inspect previous builds as needed.
