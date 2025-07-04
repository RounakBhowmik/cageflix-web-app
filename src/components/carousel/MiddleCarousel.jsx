import { isEmpty } from "lodash";
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
  if (isEmpty(props.movies) && isEmpty(props.tvShows)) {
    return (
      <div>
        <p>No Shows Found</p>
      </div>
    )
  }

  return (
    <div>
      <CategoryRow
        title="Movies"
        data={props.movies || []}
        onClick={onMovieDetails}
      />
      <CategoryRow
        title="Tv Shows"
        data={props.tvShows || []}
        onClick={onTvShowDetails}
      />
    </div>
  );
};

export default MiddleCarousel;
