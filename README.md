# Cageflix Web App

A visually appealing, fully responsive movie and TV show web app inspired by Netflix. Built with React, React Bootstrap, and custom CSS, Cageflix offers a modern UI, dynamic navigation, fuzzy search, and seamless browsing of movies and TV shows.

## Features

- *Netflix-like UI:* Modern, dark-themed, and fully responsive design.
- *Responsive Carousels:* Browse movies and TV shows in horizontal carousels with smooth navigation.
- *Dynamic Details Page:* Click any movie or show to view detailed information, including title, overview, rating, language, popularity, and release date.
- *Fuzzy Search:* Instantly search for movies and shows with typo-tolerant results using Fuse.js.
- *Genre Dropdown:* Filter content by genre using a custom-styled dropdown.
- *Full-width Footer:* Consistent, responsive footer across all pages.
- *React Router Navigation:* Fast, client-side navigation between Home, Details, and Auth pages.
- *Loader Component:* Elegant loading spinner for async states.
- *API Ready:* Easily connect to a real movie API or use static/dummy data.

## Tech Stack

- *Frontend:* React, React Bootstrap, Custom CSS
- *Routing:* React Router
- *State Management:* React Context API (with hooks)
- *Search:* Fuse.js
- *Styling:* Responsive CSS, Flexbox, Media Queries

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   bash
   git clone https://github.com/yourusername/cageflix-web-app.git
   cd cageflix-web-app
   
2. Install dependencies:
   bash
   npm install
   # or
   yarn install
   

### Running the App
bash
npm run dev
# or
yarn dev

The app will be available at http://localhost:5173 (or the port shown in your terminal).

## Project Structure


├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── carousel/
│   │   ├── dropdown/
│   │   ├── footer/
│   │   ├── navbar/
│   │   └── ...
│   ├── pages/
│   │   ├── auth/
│   │   ├── detailsShow/
│   │   └── home/
│   ├── routes/
│   ├── shared/
│   ├── styles/
│   └── ...
├── package.json
├── vite.config.js
└── README.md


## Customization
- *API Integration:*
  - Replace static data with real API calls in the relevant components (see CategoryRow.jsx, TopCarousel.jsx, etc.).
  - Use React Query or fetch/axios for async data fetching.
- *Styling:*
  - Modify CSS in src/styles/ for branding or layout changes.
- *Authentication:*
  - Extend the Auth pages for real user login/signup.

## Credits
- [TMDB API](https://www.themoviedb.org/documentation/api) (for movie data, if used)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Fuse.js](https://fusejs.io/)

## License
This project is licensed under the MIT License.
