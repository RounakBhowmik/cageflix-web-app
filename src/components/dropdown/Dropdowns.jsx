import { isEmpty, isUndefined } from "lodash";
import { useContext, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { AppContext } from "../../store/AppProvider";
import { fetchShowsByGenre } from "../../store/actions/shows";

const Dropdowns = ({ data }) => {
  const appCtx = useContext(AppContext);
  const { shows } = appCtx;
  const [selectedGenre, setSelectedGenre] = useState("Genres");
  const onGenreSelect = (id) => {
    fetchShowsByGenre({ name: selectedGenre, value: id }, shows.dispatch);
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
              <Dropdown.Item
                style={{
                  color: "#fff",
                  padding: "4px 10px",
                  margin: 0,
                }}
                eventKey={-1}
                onClick={() => setSelectedGenre("Genres")}
              >
                Genres
              </Dropdown.Item>
              {
                data != undefined && data.genres.slice(0, 4).map((ele, key) => (
                  <Dropdown.Item
                    style={{
                      color: "#fff",
                      padding: "4px 10px",
                      margin: 0,
                    }}
                    eventKey={ele.id}
                    key={key}
                    onClick={() => setSelectedGenre(ele.name)}
                  >
                    {ele.name}
                  </Dropdown.Item>
                ))
              }
              {/* <Dropdown.Item
                href="#/action-2"
                style={{
                  color: "#fff",
                  padding: "4px 10px",
                  margin: 0,
                }}
              >
                Another action
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                style={{
                  color: "#fff",
                  padding: "4px 10px",
                  margin: 0,
                }}
              >
                Another action
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                style={{
                  color: "#fff",
                  padding: "4px 10px",
                  margin: 0,
                }}
              >
                Another action
              </Dropdown.Item>
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <Dropdown.Item
                href="#/action-3"
                style={{
                  color: "#fff",
                  padding: "4px 10px",
                  margin: 0,
                }}
              >
                Something else
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-4"
                style={{
                  color: "#fff",
                  padding: "4px 10px",
                  margin: 0,
                }}
              >
                Fourth action
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-4"
                style={{
                  color: "#fff",
                  padding: "4px 10px",
                  margin: 0,
                }}
              >
                Fourth action
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-4"
                style={{
                  color: "#fff",
                  padding: "4px 10px",
                  margin: 0,
                }}
              >
                Fourth action
              </Dropdown.Item> */}
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Dropdowns;
