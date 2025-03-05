# Tim's Portfolio

My personal portfolio website built using React, Vite, and Tailwind CSS.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [License](#license)

## Installation

To get started with this project, clone the repository and install the dependencies:

```sh
git clone https://github.com/tlektessov/tlektessov.github.io
cd tlektessov.github.io
npm install
```

## Usage

To run the project locally, use the following command:

```sh
npm run dev
```

This will start the development server and you can view the website at `http://localhost:3000`.

To build the project for production, use the following command:

```sh
npm run build
```

To preview the production build, use the following command:

```sh
npm run preview
```

## Project Structure

```filetree
tlektessov.github.io
├── src
│   ├── assets
│   ├── components
│   │   ├── About
│   │   │   └── About.jsx
│   │   ├── Contact
│   │   │   └── Contact.jsx
│   │   ├── Experience
│   │   │   ├── Experience.jsx
│   │   │   └── ExpsContainer.jsx
│   │   ├── Footer
│   │   │   └── Footer.jsx
│   │   ├── General
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── ConstructionContainer.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Drawer.jsx
│   │   │   ├── IconButton.jsx
│   │   │   └── SectionTag.jsx
│   │   ├── Header
│   │   │   └── Header.jsx
│   │   ├── Hero
│   │   │   └── Profile.jsx
│   │   ├── Hooks
│   │   │   ├── use-scroll.js
│   │   │   ├── use-windows-size.js
│   │   │   └── useResponsive.js
│   │   ├── Projects
│   │   │   ├── Projects.jsx
│   │   │   └── ProjectsContainer.jsx
│   │   └── Skills
│   │       ├── Skills.jsx
│   │       └── SkillsLogos.jsx
│   ├── assets.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github
│   └── workflows
│       └── static.yml
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js

## Dependencies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Radix UI](https://www.radix-ui.com/)

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to check for linting errors.

## License

This project is licensed under the MIT License.
