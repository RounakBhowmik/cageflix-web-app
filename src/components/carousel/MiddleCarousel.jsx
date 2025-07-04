import { isEmpty } from "lodash";
import CategoryRow from "./CategoryRow.jsx";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AppContext } from "../../store/AppProvider.jsx";

const MiddleCarousel = (props) => {
  const navigate = useNavigate();
  const appCtx = useContext(AppContext);
  const { shows } = appCtx;
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
  if (
    isEmpty(props.movies) ||
    (shows?.state?.isSearch && isEmpty(shows?.state?.searchData.movies))
  ) {
    return (
      <div
        style={{
          minHeight: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#181818",
          color: "#fff",
          fontSize: "1.3rem",
          borderRadius: "8px",
          margin: "32px 0",
          boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
        }}
      >
        <span style={{ opacity: 0.8, letterSpacing: 1 }}>No Data Found</span>
      </div>
    );
  }
  if (shows?.state?.isSearch) {
    return (
      <CategoryRow
        title={shows?.state?.genre?.name || "Movies"}
        data={shows?.state?.searchData.movies || []}
        onClick={onMovieDetails}
      />
    );
  }
  return (
    <div>
      {props.movies.map((ele, key) => (
        <CategoryRow
          title={props.genres[key].name}
          data={ele.data?.results || []}
          onClick={onMovieDetails}
        />
      ))}
      {/* <CategoryRow
        title="Tv Shows"
        data={props.tvShows || []}
        onClick={onTvShowDetails}
      /> */}
    </div>
  );
};

export default MiddleCarousel;
