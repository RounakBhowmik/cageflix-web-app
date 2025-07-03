import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Loader from "../../components/commonLoader/Loader";
import "../../styles/DetailsPage.css";
import { useLocation } from "react-router";

const DetailsPage = () => {
  const location = useLocation();
  const { movie } = location.state || {};
  const [showFullTitle, setShowFullTitle] = useState(false);
  const [showFullOverview, setShowFullOverview] = useState(false);
console.log("Movie details:", movie);
  if (!movie || Object.keys(movie).length === 0) {
    return (
      <div
        className="details-loader-wrapper"
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <Card className="custom-card">
      <Card.Body>
        <Row className="two-column-row">
          <Col md={5} className="left-column">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
              alt={movie?.title}
              className="img-fluid"
            />
          </Col>
          <Col md={7} className="right-column">
            <Card.Title
              style={{
                color: "#fff",
                cursor:
                  movie.original_title?.length > 30 ||
                  movie.original_name?.length > 30
                    ? "pointer"
                    : "default",
                maxWidth: "100%",
                position: "relative",
                userSelect: "none",
              }}
              className={
                !showFullTitle &&
                ((movie.original_title && movie.original_title.length > 30) ||
                  (movie.original_name && movie.original_name.length > 30))
                  ? "clamp-title"
                  : ""
              }
              onClick={() => {
                if (
                  (movie.original_title && movie.original_title.length > 30) ||
                  (movie.original_name && movie.original_name.length > 30)
                )
                  setShowFullTitle(!showFullTitle);
              }}
              title={
                showFullTitle ? undefined : "Click to expand full title"
              }
            >
              {movie.original_title || movie.original_name}
              <span style={{ fontSize: "1rem", color: "#b3b3b3" }}>
                ({movie?.release_date?.split("-")[0]})
              </span>
              {!showFullTitle && ((movie.original_title && movie.original_title.length > 30) || (movie.original_name && movie.original_name.length > 30)) && (
                <span
                  style={{
                    color: "#ff9800",
                    fontSize: "0.9rem",
                    marginLeft: 8,
                  }}
                >
                  ...more
                </span>
              )}
            </Card.Title>
            <Card.Text
              style={{ color: "#e0e0e0", cursor: movie?.overview?.length > 180 ? "pointer" : "default" }}
              className={
                !showFullOverview && movie?.overview?.length > 180 ? "clamp-overview" : ""
              }
              onClick={() => {
                if (movie?.overview?.length > 180) setShowFullOverview(!showFullOverview);
              }}
              title={showFullOverview ? undefined : "Click to expand full overview"}
            >
              {movie?.overview}
              {!showFullOverview && movie?.overview?.length > 180 && (
                <span style={{ color: "#ff9800", fontSize: "0.9rem", marginLeft: 8 }}>...more</span>
              )}
            </Card.Text>
            <div className="rating" style={{ margin: "1rem 0" }}>
              <span className="rating-label" style={{ color: "#b3b3b3" }}>
                User Rating:{" "}
              </span>
              <span
                className="rating-value"
                style={{
                  background:
                    "linear-gradient(90deg, #ff9800 0%, #ff5722 100%)",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "0.25rem 0.75rem",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  margin: "0 0.5rem",
                }}
              >
                {movie?.vote_average?.toFixed
                  ? movie.vote_average.toFixed(1)
                  : movie.vote_average}
              </span>
              <span className="rating-label" style={{ color: "#b3b3b3" }}>
                {" "}
                / 10
              </span>
            </div>
            <div className="language">
              <span className="language-label" style={{ color: "#b3b3b3" }}>
                Language:{" "}
              </span>
              <span className="language-value" style={{ color: "#fff" }}>
                {movie?.original_language === "en" ||
                movie?.original_language === "en-US"
                  ? "English"
                  : movie?.original_language === "ko"
                  ? "Korean"
                  : movie?.original_language === "in"
                  ? "Hindi"
                  : movie?.original_language === "ja"
                  ? "Javanese"
                  : movie?.original_language === "fr"
                  ? "French"
                  : movie?.original_language === "hu"
                  ? "Hungarian"
                  : movie?.original_language}
              </span>
            </div>
            <div className="popularity">
              <span className="popularity-label" style={{ color: "#b3b3b3" }}>
                Popularity:{" "}
              </span>
              <span className="popularity-value" style={{ color: "#fff" }}>
                {movie?.popularity}
              </span>
            </div>
            <div className="release-date">
              <span className="release-date-label" style={{ color: "#b3b3b3" }}>
                Release Date:{" "}
              </span>
              <span className="release-date-value" style={{ color: "#fff" }}>
                {movie?.release_date || "N/A"}
              </span>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DetailsPage;
