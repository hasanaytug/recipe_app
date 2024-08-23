import React from "react";

function MenuItem({
  setModalOn,
  setRecepi,
  idMeal,
  strMeal,
  sttCategory,
  strArea,
  strInstructions,
  strMealThumb,
}) {
  return (
    <div
      style={{
        width: "300px",
        height: "700px",
        backgroundColor: "#FABC3F",
        marginTop: "50px",
      }}
    >
      <img style={{ width: "300px" }} src={strMealThumb} alt="" />
      <div
        style={{
          height: "370px",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ padding: "5px 20px", textAlign: "center" }}>{strMeal}</h2>
        <p style={{ textAlign: "center" }}>
          {strInstructions.substring(0, 400) + "..."}
        </p>
        <button
          onClick={(e) => {
            setModalOn(true);
            setRecepi(strInstructions);
          }}
          className="btn-sub-card"
          style={{ fontSize: ".75rem", margin: "0px" }}
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
