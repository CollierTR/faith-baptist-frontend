# Project Overview

This is a website for Faith Baptist Church, built with the [Astro](https://astro.build/) web framework. It uses [React](https://react.dev/) for interactive components and [Tailwind CSS](https://tailwindcss.com/) for styling.

The project is structured as a standard Astro project:
- `src/pages` contains the pages of the site.
- `src/components` contains reusable components, a mix of Astro and React components.
- `src/layouts` contains the main site layout.
- `astro.config.mjs` contains the Astro configuration, including integrations with React and Tailwind CSS.

# Building and Running

To work on this project, you'll need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   This will start a local development server at `http://localhost:4321`.

3. **Build for production:**
   ```bash
   npm run build
   ```
   This will create a production-ready build in the `dist/` directory.

4. **Preview the production build:**
    ```bash
    npm run preview
    ```

# Development Conventions

- **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
- **Components:** Both Astro (`.astro`) and React (`.jsx`) components are used. React components are used for interactive UI elements, such as the mobile navigation menu.
- **Linting and Formatting:** While no explicit linting or formatting configuration is present, it's recommended to use a tool like [Prettier](https://prettier.io/) to maintain consistent code style.
