import React from "react";
import { v4 as uuidv4 } from "uuid";

function MenuItem({
  strYoutube,
  ingredientsArr,
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
          justifyContent: "flex-start",
        }}
      >
        <h2 style={{ padding: "5px 20px", textAlign: "center" }}>{strMeal}</h2>
        <hr style={{ border: "1px solid #c7253e", margin: "10px" }}></hr>
        <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
          Ingredients
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {ingredientsArr.map((ingredient) => {
            if (ingredient?.length) {
              return (
                <p
                  key={uuidv4()}
                  style={{
                    fontSize: "1rem",
                    marginLeft: "20px",
                  }}
                >
                  • {ingredient} •
                </p>
              );
            }
          })}
        </div>

        <button
          onClick={(e) => {
            setModalOn(true);
            setRecepi([strInstructions, strMeal, strYoutube]);
          }}
          className="btn-sub-card"
          style={{
            fontSize: ".75rem",
            margin: "0px",
            marginTop: "auto",
          }}
        >
          Show Recipe
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
