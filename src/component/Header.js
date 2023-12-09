import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import "./ComponentStyle.css";
import { Link } from "react-router-dom";

function Header({ onclick, onchange }) {
  return (
    <header>
      <div className="top-header">
        <Link to="/">
          <div className="logo">
            <div>
              <FaBowlFood />
            </div>
            <div>Free Food Recipes</div>
          </div>
        </Link>
        <div className="social-media">
          <div>
            <FaYoutube />
          </div>
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="search-container">
        <p>Elevate Your Home Cooking with these Exclusive Free Recipes</p>
        <div className="search-bar">
          <input type="text" onChange={onchange} />
          <Link to="/">
            <button onClick={onclick}>Search</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
