import React from "react";
import CategoryRow from "./CategoryRow.jsx";
import { useNavigate } from "react-router";

const MiddleCarousel = (props) => {
  const navigate = useNavigate();
  const onMovieDetails = (details) => {
    return navigate("/details/" + details.id, {
      state: { movie: { ...details } },
    });
  };
  const onTvShowDetails = (details) => {
    return navigate("/details/" + details.id, {
      state: { movie: { ...details } },
    });
  };
  return (
    <div>
      <CategoryRow
        title="Movies"
        data={props.movies?.results || []}
        onClick={onMovieDetails}
      />
      <CategoryRow
        title="Tv Shows"
        data={props.tvshows?.results || []}
        onClick={onTvShowDetails}
      />
    </div>
  );
};

export default MiddleCarousel;
