import { CDN_URL } from "../../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, locality } =
    resData?.info;

  return (
    <div data-testid="resCard" className="res-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <div className="res-details">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="rating">
          <i className="ri-star-fill"></i> {avgRating} &nbsp;{" "}
          <span>{sla.slaString}</span>
        </p>
        <div className="food-location">
          <p className="food-choice">{cuisines.join(", ")}</p>
          <p className="location">{locality}</p>
        </div>
      </div>
    </div>
  );
};

export const withOpen = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute z-[2] bg-zinc-900 text-slate-100 px-4 py-1 rounded-md opacity-70">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
