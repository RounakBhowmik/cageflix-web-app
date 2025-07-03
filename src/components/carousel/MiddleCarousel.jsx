import React from "react";
import CategoryRow from "./CategoryRow.jsx";

const MiddleCarousel = (props) => {
  return (
    <div>
      <CategoryRow title="Movies" data={props.movies?.results || []} />
      <CategoryRow title="Tv Shows" data={props.tvshows?.results || []} />
    </div>
  );
};

export default MiddleCarousel;
