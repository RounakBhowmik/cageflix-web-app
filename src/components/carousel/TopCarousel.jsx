import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/TopCarousel.css";

const TopCarousel = ({ movies = [], tvshows = [] }) => {
  
  // Get first 2 movies and first 2 tvshows
  const movieSlides = (movies.results || [])
    .slice(0, 2)
    .map((item, idx) => ({
      id: `movie-${item.id || idx}`,
      image: item.image || item.poster_path || item.backdrop_path || "",
      name: item.title || item.name || item.movie_name || "",
      type: "Movie",
    }));
  const tvSlides = (tvshows.results || [])
    .slice(0, 2)
    .map((item, idx) => ({
      id: `tv-${item.id || idx}`,
      image: item.image || item.poster_path || item.backdrop_path || "",
      name: item.title || item.name || item.movie_name || "",
      type: "TV Show",
    }));
  const slides = [...movieSlides, ...tvSlides];

  return (
    <Carousel className="top-carousel" indicators={false}>
      {slides.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="top-carousel-img"
            src={"https://image.tmdb.org/t/p/w500"+item.image}
            alt={item.name}
          />
          <Carousel.Caption>
            <h1>
              {item.name}{" "}
              <span
                style={{ fontSize: "1rem", fontWeight: 400 }}
              >{`(${item.type})`}</span>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TopCarousel;
