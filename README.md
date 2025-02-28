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
git clone https://github.com/tlektessov/tlektessov.github.io.git
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
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets
│   │   ├── about-pic.png
│   │   ├── admin_page.png
│   │   ├── arrow.png
│   │   ├── checkmark.png
│   │   ├── education.png
│   │   ├── email.png
│   │   ├── experience.png
│   │   ├── github.png
│   │   ├── linkedin.png
│   │   ├── mindsight_mobile.png
│   │   ├── patron_website.png
│   │   ├── profile-pic.png
│   │   └── Temirlan_Tlektessov_Resume.pdf
│   ├── components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience
│   │   │   ├── Experience.jsx
│   │   │   └── ExperienceContainer.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Profile.jsx
│   │   ├── Projects
│   │   │   ├── Projects.jsx
│   │   │   └── ProjectsContainer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Dependencies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to check for linting errors.

## License

This project is licensed under the MIT License.
