# URL-SHRTNR

This project is a URL shortener built with Next.js for the frontend and Cloudflare Workers for the backend. It utilizes Cloudflare's KV storage to store shortened URLs. The project is designed to be fast and was built to learn about Cloudflare Workers.

The project is set up as a mono repo using Turbo, with both the frontend and backend projects located inside.

## Preview

![preview](https://user-images.githubusercontent.com/47970111/212549515-9cecd087-7d1c-4be2-8771-20946a63623e.gif)

Please note that in order to fully use this project, you will need to have a Cloudflare account and set up a worker and KV storage. The documentation for this can be found on the Cloudflare website.

## Setting up the project

Before you can run the project, you will need to have npm, node, and git installed on your machine.

1. Clone the repository using git: ``git clone https://github.com/qnton/url-shrtnr.git``
2. Navigate to the project directory: ``cd url-shrtnr``
3. Install the project dependencies: ``npm install``
4. In the backend directory, copy the ``wrangler.toml.sample`` file to ``wrangler.toml`` and adjust the variables as needed.
5. In the frontend directory, copy the ``.env.sample`` file to ``.env.local`` and adjust the variables as needed.
6. Run the project: ``npm run dev``
