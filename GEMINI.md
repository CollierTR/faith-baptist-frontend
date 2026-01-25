# GEMINI.md

## Project Overview

This is the frontend for the Faith Baptist Church website. It is a static site generated with [Astro](https://astro.build/), using [React](https://reactjs.org/) for UI components and [Tailwind CSS](https://tailwindcss.com/) for styling. The site is configured for deployment on [Netlify](https://www.netlify.com/).

The project structure follows the standard Astro layout:

-   `src/pages`: Contains the pages of the site. Each `.astro` file corresponds to a route.
-   `src/components`: Contains reusable UI components, written in both Astro and React (`.jsx`).
-   `src/layouts`: Contains the main layout for the site.
-   `public`: Contains static assets like images and fonts.

## Building and Running

The following commands are available to run the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally, before deploying |

## Development Conventions

-   **Styling**: Styling is done using Tailwind CSS. Global styles are defined in `src/styles/global.css`.
-   **Components**: Reusable UI components are created in the `src/components` directory. Both Astro components (`.astro`) and React components (`.jsx`) are used.
-   **Routing**: Routing is handled by Astro's file-based routing system. Each `.astro` file in the `src/pages` directory becomes a page on the site.
-   **Deployment**: The site is configured for deployment on Netlify. The configuration is in `astro.config.mjs`.

## APIs and Future Development

The `notes.md` file contains information about the APIs used in the project and a to-do list for future development.

### API Endpoints

-   **Sermon Categories**: `https://media.faithbaptistkirksville.org/wp-json/wp/v2/categories?parent=3&per_page=100`

### To-Do List

-   About
    -   Download: Constitution
    -   Page: statement of faith
-   Resources
    -   Links
    -   Hymn App
    -   Counciling
        -   What is BC?
        -   Do you need BC?
        -   BC Resources
-   To-do for Cliff
    -   Need to re-date the blog articles if possible (I can do this if needed)
    -   Need to expose a speaker attribute as an extension in the api
    -   Pull in the new sermons
    -   train Brandon and me on editing the content
