import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import "../../styles/TopCarousel.css";

const TopCarousel = ({ movies = [], tvshows = [] }) => {
  const navigate = useNavigate();

  // Get first 2 movies and first 2 tvshows
  const movieSlides = (movies.results || [])
    .slice(0, 2)
    .map((item, idx) => ({
      id: `movie-${item.id || idx}`,
      image: item.backdrop_path || "",
      name: item.title || item.name || item.movie_name || "",
      type: "Movie",
      details: item,
      imageQualityPath: "/original", // Use high quality for movies
    }));
  const tvSlides = (tvshows.results || [])
    .slice(0, 2)
    .map((item, idx) => ({
      id: `tv-${item.id || idx}`,
      image: item.backdrop_path || "",
      name: item.title || item.name || item.movie_name || "",
      type: "TV Show",
      details: item,
      imageQualityPath: "/original", // Use high quality for TV shows
    }));
  const slides = [...movieSlides, ...tvSlides];

  // Unified click handler to pass full details as state
  const handleSlideClick = (slide) => {
    navigate(`/details/${slide.id.replace(/^(movie|tv)-/, "")}`, {
      state: { movie: { ...slide.details } },
    });
  };

  return (
    <Carousel className="top-carousel" indicators={false}>
      {slides.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="top-carousel-img"
            src={"https://image.tmdb.org/t/p" + item.imageQualityPath + item.image}
            alt={item.name}
            style={{ cursor: "pointer" }}
            onClick={() => handleSlideClick(item)}
          />
          <Carousel.Caption>
            <h1>
              {item.name}{" "}
              {/* <span
                style={{ fontSize: "1rem", fontWeight: 400 }}
              >{`(${item.type})`}</span> */}
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TopCarousel;
