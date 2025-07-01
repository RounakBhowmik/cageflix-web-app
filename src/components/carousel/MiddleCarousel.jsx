import React from "react";
import CategoryRow from "./CategoryRow.jsx";

const trending = [
  {
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/12/05111917/bollywood-movies-releasing-in-2025.jpg",
    tag: "New",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BOGVmNzMwNWYtYmZmNi00ODliLWE2ODgtZGM2ZTM3MjhmOGYwXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
    tag: "Top 10",
  },
  {
    image:
      "https://media-cache.cinematerial.com/p/500x/u4qc80tc/jaat-indian-movie-poster.jpg?v=1737810390",
  },
  {
    image:
      "https://media-cache.cinematerial.com/p/500x/5asumnqr/aghathiyaa-indian-movie-poster.jpg?v=1740601669",
  },
  {
    image:
      "https://media-cache.cinematerial.com/p/500x/5asumnqr/aghathiyaa-indian-movie-poster.jpg?v=1740601669",
  },
  {
    image:
      "https://media-cache.cinematerial.com/p/500x/5asumnqr/aghathiyaa-indian-movie-poster.jpg?v=1740601669",
  },
  { image: "https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg" },
  { image: "https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg" },
  { image: "https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg" },
  { image: "https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg" },
  { image: "https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg" },
  { image: "https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg" },
];

const comedy = [
  {
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/12/05111917/bollywood-movies-releasing-in-2025.jpg",
  },
  {
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/12/05111917/bollywood-movies-releasing-in-2025.jpg",
  },
  {
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/12/05111917/bollywood-movies-releasing-in-2025.jpg",
  },
  {
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/12/05111917/bollywood-movies-releasing-in-2025.jpg",
  },
  {
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/12/05111917/bollywood-movies-releasing-in-2025.jpg",
  },
];

const MiddleCarousel = () => {
  return (
    <div>
      <CategoryRow title="Continue Watching" products={trending} />
      <CategoryRow title="Movies" products={comedy} />
      <CategoryRow title="Comedy" products={comedy} />
      <CategoryRow title="TV Shows" products={comedy} />
    </div>
  );
};

export default MiddleCarousel;
