import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Main.css";
import { FaYoutube } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function MenuDetails() {
  const { id } = useParams();
  const [mealDetail, setMealDetail] = useState([]);

  let mealDetailApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  useEffect(() => {
    axios
      .get(mealDetailApi)
      .then((res) => setMealDetail(res.data.meals[0]))
      .catch((err) => console.log(err));
  }, [mealDetailApi]);

  let counter = 0;

  while (counter < 20) {
    console.log(counter);
    counter++;
  }

  return (
    <div>
      <Link to="/">
        <button className="go-back-link"><FaArrowLeft/> Go Back</button>
      </Link>
      <div className="food-card-detail">
        <div className="food-card-detailImg">
          <img src={mealDetail.strMealThumb} alt={mealDetail} />
        </div>
        <div className="food-card-detailText">
          <h1>{mealDetail.strMeal}</h1>
          <h3>Ingredients</h3>
          <ul>
            <li>
              {mealDetail.strMeasure1} {mealDetail.strIngredient1}
            </li>
            <li>
              {mealDetail.strMeasure2} {mealDetail.strIngredient2}
            </li>
            <li>
              {mealDetail.strMeasure3} {mealDetail.strIngredient3}
            </li>
            <li>
              {mealDetail.strMeasure4} {mealDetail.strIngredient4}
            </li>
            <li>
              {mealDetail.strMeasure5} {mealDetail.strIngredient5}
            </li>
            <li>
              {mealDetail.strMeasure6} {mealDetail.strIngredient6}
            </li>
            <li>
              {mealDetail.strMeasure7} {mealDetail.strIngredient7}
            </li>
            <li>
              {mealDetail.strMeasure8} {mealDetail.strIngredient8}
            </li>
            <li>
              {mealDetail.strMeasure9} {mealDetail.strIngredient9}
            </li>
            <li>
              {mealDetail.strMeasure10} {mealDetail.strIngredient10}
            </li>
            <li>
              {mealDetail.strMeasure11} {mealDetail.strIngredient11}
            </li>
            <li>
              {mealDetail.strMeasure12} {mealDetail.strIngredient12}
            </li>
            <li>
              {mealDetail.strMeasure13} {mealDetail.strIngredient13}
            </li>
            <li>
              {mealDetail.strMeasure14} {mealDetail.strIngredient14}
            </li>
            <li>
              {mealDetail.strMeasure15} {mealDetail.strIngredient15}
            </li>
            <li>
              {mealDetail.strMeasure16} {mealDetail.strIngredient16}
            </li>
            <li>
              {mealDetail.strMeasure17} {mealDetail.strIngredient17}
            </li>
            <li>
              {mealDetail.strMeasure18} {mealDetail.strIngredient18}
            </li>
            <li>
              {mealDetail.strMeasure19} {mealDetail.strIngredient19}
            </li>
            <li>
              {mealDetail.strMeasure20} {mealDetail.strIngredient20}
            </li>
          </ul>
          <h3>Instructions</h3>
          <p>{mealDetail.strInstructions}</p>

          <div className="food-card-detailVideo">
            <Link to={mealDetail.strYoutube} target="_blank">
              <button className="youtube-btn">
                {" "}
                Watch it on youtube <FaYoutube />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDetails;
