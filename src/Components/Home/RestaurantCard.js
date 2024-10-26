import { CDN_URL } from "../../utils/constants";
const RestaurantCard = ({resData}) => {

    const {
      cloudinaryImageId,
      name,
      avgRating,
      sla,
      cuisines,
      locality
    } = resData?.info; 
  
    return (
      <div className="res-card">
        <img src={CDN_URL + cloudinaryImageId} />
        <div className="res-details">
        <h3>{name}</h3>
        <p className="rating">
          <i className="ri-star-fill"></i> {avgRating} &nbsp; <span>{sla.slaString}</span>
        </p>
        <div className="food-location">
        <p className="food-choice">
         {cuisines.join(", ")}
        </p>
        <p className="location">
          {locality}
        </p>
        </div>
        </div>
      </div>
    );
  };

  export default RestaurantCard;