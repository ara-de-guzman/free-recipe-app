import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import MenuDetails from "./page/MenuDetails";
import Header from "./component/Header";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [menu, setMenu] = useState("");
  const [submitMenu, setSubmitMenu] = useState("");

  const submitHandleChange = (e) => {
    setMenu(e.target.value);
  };
  const submitMenuHandle = () => {
    setSubmitMenu(menu);
  };

  let APIURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${submitMenu}`;

  useEffect(() => {
    axios
      .get(APIURL)
      .then((result) => setRecipes(result.data.meals))
      .catch((error) => console.log(error));
  }, [APIURL]);

  return (
    <Router>
      <Header onchange={submitHandleChange} onclick={submitMenuHandle} />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              recipes={recipes}
              onchange={submitHandleChange}
              onclick={submitMenuHandle}
            />
          }
        />
        <Route />
        <Route path="*" element={<div> Not Found</div>} />
        <Route path="/details/:id" element={<MenuDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
