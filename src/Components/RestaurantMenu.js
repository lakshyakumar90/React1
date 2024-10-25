import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import EmblaCarousel from "./EmblaCarousel";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_URL + resId);
    const json = await response.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Destructure safely
  const cardInfo = resInfo.cards[2]?.card?.card?.info;
  const {
    name,
    sla,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
  } = cardInfo;

  const offerInfo =
    resInfo.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;


  const OPTIONS = { align: "start" };
  const SLIDE_COUNT = offerInfo.length;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div style={{ marginTop: "5vw", padding: "2vw" }} className="menu">
      <div className="main-div">
        <div>
          <h1 className="restaurant-name">{name}</h1>
          <div className="res-main-info">
            <h2 className="restaurant-rating">
              <i className="ri-star-fill"></i>&nbsp; ({totalRatingsString}) ●{" "}
              {costForTwoMessage}
            </h2>
            <h3>{cuisines.join(", ")}</h3>
            <ul>
              <li>Outlet &nbsp; {locality} </li>
              <li>{sla.slaString}</li>
            </ul>
          </div>
        </div>
        <div className="carousel-div">
          <EmblaCarousel
            offerInfo={offerInfo}
            slides={SLIDES}
            options={OPTIONS}
          />
        </div>
        <div className="menu-dishes">
          <h2 style={{textAlign: "center"}}>| MENU |</h2>
          <input type="text" placeholder="Search for Dishes" className="menu-search"/>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
