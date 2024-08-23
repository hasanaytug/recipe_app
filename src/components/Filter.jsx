import React from "react";
import Tabs from "./Tabs";

function Filter({ data, handleFilter, handleReset, categories, cousine }) {
  return (
    <div>
      {data.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Tabs
            data={cousine}
            handleFilter={handleFilter}
            handleReset={handleReset}
            name="COUSINES"
            tabName="strArea"
          />
          <Tabs
            data={categories}
            handleFilter={handleFilter}
            handleReset={handleReset}
            name="CATEGORY"
            tabName="strCategory"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Filter;
