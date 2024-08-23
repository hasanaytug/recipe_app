import React from "react";
import { v4 as uuidv4 } from "uuid";

function Tabs({ data, name, tabName, handleFilter, handleReset, func }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>{name}</h1>
      <div
        style={{
          width: "150vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button onClick={handleReset} className="btn-sub">
          ALL
        </button>

        {data.map((d) => (
          <button
            key={uuidv4()}
            onClick={(e) => handleFilter(e, tabName)}
            className="btn-sub"
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
