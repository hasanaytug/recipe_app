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
  const [recepi, setRecepi] = useState("");
  const [modalOn, setModalOn] = useState(false);

  const setTabs = (data) => {
    const cousineArr = data.map((e) => e.strArea);
    const categoryArr = data.map((e) => e.strCategory);
    const cousineSet = new Set(cousineArr);
    const categorySet = new Set(categoryArr);
    setCousine([...cousineSet]);
    setCategories([...categorySet]);
  };

  const handleGenerateItem = () => {
    const fetchData = async () => {
      const resp = await fetch(url);
      const json = await resp.json();
      setStaticData([...data, json.meals[0]]);
      setData([...data, json.meals[0]]);
    };
    fetchData();
    setTabs(data);
  };

  const handleFilter = (e, v, tab) => {
    console.log(data);

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
              const {
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
        {modalOn ? (
          <Modal instructions={recepi} setModalOn={setModalOn} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
