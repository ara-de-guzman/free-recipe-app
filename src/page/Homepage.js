import FoodCard from "../component/FoodCard";
import { PiSmileySadFill } from "react-icons/pi";
import "./Main.css";

function Homepage({ recipes }) {
  console.log(recipes == null);
  return (
    <div className="home-component">
      <div className="recipe-container">
        {recipes == null ? (
          <div className="not-found">
            {" "}
            <p>
              <PiSmileySadFill /> Sorry no recipe found
            </p>
          </div>
        ) : (
          recipes.map((recipe) => (
            <FoodCard
              key={recipe.idMeal}
              name={recipe.strMeal}
              category={recipe.strCategory}
              area={recipe.strArea}
              image={recipe.strMealThumb}
              id={recipe.idMeal}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Homepage;
