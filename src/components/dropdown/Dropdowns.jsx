import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Dropdowns = () => {
  return (
    <div>
      <Dropdown className="custom-dropdown">
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
          Genres
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
                href="#/action-1"
                style={{
                  color: "#fff",
                  padding: "4px 10px",
                  margin: 0,
                }}
              >
                Action
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
              </Dropdown.Item>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Dropdowns;
