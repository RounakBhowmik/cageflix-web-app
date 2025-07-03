import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 120, width: "100%" }}>
    <Spinner animation="border" role="status" variant="danger" style={{ width: 44, height: 44 }}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default Loader;
