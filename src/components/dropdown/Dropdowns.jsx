import { isEmpty, isUndefined } from "lodash";
import { useContext, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { AppContext } from "../../store/AppProvider";
import { clearSearchShows, fetchShowsByGenre } from "../../store/actions/shows";

const Dropdowns = ({ data }) => {
  const appCtx = useContext(AppContext);
  const { shows } = appCtx;
  const [selectedGenre, setSelectedGenre] = useState("Genres");
  const onGenreSelect = (e) => {
    const { name, id } = JSON.parse(e)
    if (id == -1) {
      clearSearchShows(shows.dispatch);
      return;
    }
    fetchShowsByGenre({ name: name, value: id }, shows.dispatch);
  }
  return (
    <div>
      <Dropdown className="custom-dropdown" onSelect={onGenreSelect}>
        <Dropdown.Toggle
          id="dropdown-basic"
          style={{
            background: "#ff3c3c",
            border: "none",
            color: "#fff",
            fontWeight: 600,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            padding: "5px 12px",
            borderRadius: "6px",
            fontSize: "1rem",
            minWidth: 90,
          }}
        >
          {selectedGenre}
        </Dropdown.Toggle>

        <Dropdown.Menu
          style={{
            background: "#181818",
            color: "#fff",
            border: "1px solid #333",
            borderRadius: 8,
            minWidth: 180,
            padding: "4px 0",
          }}
        >
          <div style={{ display: "flex", gap: "6px", minWidth: "180px" }}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              {data != undefined && data.genres.slice(0, 4).map((ele, key) => (
                <Dropdown.Item
                  style={{
                    color: "#fff",
                    padding: "4px 10px",
                    margin: 0,
                    background: "#181818"
                  }}
                  eventKey={JSON.stringify({ name: ele.name, id: ele.id })}
                  key={key}
                  onClick={() => setSelectedGenre(ele.name)}
                  className="custom-dropdown-item"
                >
                  {ele.name}
                </Dropdown.Item>
              ))}
              <Dropdown.Item
                style={{
                  color: "#fff",
                  padding: "4px 10px",
                  margin: 0,
                  background: "#181818"
                }}
                eventKey={JSON.stringify({ name: "Genres", id: -1 })}
                onClick={() => setSelectedGenre("Genres")}
                className="custom-dropdown-item"
              >
                Genres
              </Dropdown.Item>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Dropdowns;
