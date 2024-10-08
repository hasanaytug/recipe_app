import { useState, useEffect } from "react";
import "./App.css";
import MenuItem from "./components/MenuItem.jsx";
import Filter from "./components/Filter.jsx";
import Modal from "./components/Modal.jsx";
import { v4 as uuidv4 } from "uuid";

const url = "https://www.themealdb.com/api/json/v1/1/random.php";

function App() {
  const [staticData, setStaticData] = useState([]);
  const [cousine, setCousine] = useState([]);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [recepi, setRecepi] = useState([]);
  const [modalOn, setModalOn] = useState(false);

  const setTabs = (data) => {
    const cousineArr = data.map((e) => e.strArea);
    const categoryArr = data.map((e) => e.strCategory);
    const cousineSet = new Set(cousineArr);
    const categorySet = new Set(categoryArr);
    setCousine((currentData) => {
      return [...cousineSet];
    });
    setCategories([...categorySet]);
  };

  const handleGenerateItem = () => {
    const fetchData = async () => {
      const resp = await fetch(url);
      const json = await resp.json();
      setStaticData([...data, json.meals[0]]);
      setData((currentData) => {
        const updatedData = [...currentData, json.meals[0]];
        setTabs(updatedData);
        return updatedData;
      });
    };
    fetchData();
  };

  const handleFilter = (e, v) => {
    setData((currentState) => {
      const newState = currentState.filter((d) => e.target.innerHTML === d[v]);
      setTabs(newState);
      return newState;
    });
  };

  const handleReset = () => {
    setData((currentState) => {
      const newState = staticData;
      setTabs(newState);
      return newState;
    });
  };
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            filter: modalOn ? "blur(5px)" : "none",
          }}
        >
          <button className="btn" onClick={handleGenerateItem}>
            Add a Random Recipe
          </button>
          <Filter
            data={data}
            cousine={cousine}
            categories={categories}
            handleFilter={handleFilter}
            handleReset={handleReset}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {data.map((d) => {
              const ingredientsArr = [
                d.strIngredient1,
                d.strIngredient2,
                d.strIngredient3,
                d.strIngredient4,
                d.strIngredient5,
                d.strIngredient6,
                d.strIngredient7,
                d.strIngredient8,
                d.strIngredient9,
                d.strIngredient10,
                d.strIngredient11,
                d.strIngredient12,
                d.strIngredient13,
                d.strIngredient14,
                d.strIngredient15,
                d.strIngredient16,
                d.strIngredient17,
                d.strIngredient18,
                d.strIngredient19,
                d.strIngredient20,
              ];
              const {
                strYoutube,
                idMeal,
                strMeal,
                strCategory,
                strArea,
                strInstructions,
                strMealThumb,
              } = d;
              return (
                <div
                  style={{
                    margin: "50px",
                  }}
                  key={uuidv4()}
                >
                  <MenuItem
                    strYoutube={strYoutube}
                    ingredientsArr={ingredientsArr}
                    setRecepi={setRecepi}
                    setModalOn={setModalOn}
                    idMeal={idMeal}
                    strMeal={strMeal}
                    strCategory={strCategory}
                    strArea={strArea}
                    strInstructions={strInstructions}
                    strMealThumb={strMealThumb}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {modalOn ? <Modal recepi={recepi} setModalOn={setModalOn} /> : <></>}
      </div>
    </>
  );
}

export default App;
