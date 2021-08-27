import React from "react";
import Load from "./load.gif";
function Loader() {
  return (
    <div
      style={{
        width: "100vw",
        height: "80hw",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <img src={Load} alt="loading..." />
    </div>
  );
}

export default Loader;
