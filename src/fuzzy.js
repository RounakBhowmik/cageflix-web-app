import Fuse from 'fuse.js'; // Capitalized for class

// Static movie data
const movies = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Dark Knight", year: 2008 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "Fight Club", year: 1999 },
  { title: "The Matrix", year: 1999 },
];

// Fuse.js options
const fuseOptions = {
  includeScore: true,
  threshold: 0.4,
  keys: ['title'],
};

const fuseInstance = new Fuse(movies, fuseOptions);

const query = "Foarst";
export const results = fuseInstance.search(query).map(result => result.item);




