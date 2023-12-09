import "./ComponentStyle.css";
import { Link } from 'react-router-dom'


function FoodCard({image,name,category,area,id}) {
  
  return (
    <div className="food-card">
          <div className="food-card-img">
            <img src={image} alt={name} />
          </div>
          <div className="food-card-text">
            <h1>{name}</h1>
            <p>Area: {area}</p>
            <p>Category: {category}</p>
            <Link to={`/details/${id}`}><button className='link-button'>More Details</button></Link>
          </div>
        </div>
  )
}

export default FoodCard
