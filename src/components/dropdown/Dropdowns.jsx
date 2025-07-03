import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Dropdowns = () => {
  return (
    <div>
      <Dropdown className="mb-2">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Genres
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div style={{ display: "flex", gap: "12px", minWidth: "220px" }}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Fourth action</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Fourth action</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Fourth action</Dropdown.Item>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Dropdowns;
