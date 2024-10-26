import { useEffect, useState } from "react";
import Shimmer from "../../utils/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utils/constants";
import OfferCarousel from "../Carousels/OfferCarousel";
import { IoSearchOutline } from "react-icons/io5";
import TopPicksCarousel from "../Carousels/TopPicksCarousel";

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

  //OFFER INFORMATION
  const offerInfo =
    resInfo.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

  //MENU INFORMATION
  const menuInfo = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  //OFFER CAROUSEL
  const options = { align: "start" };
  const offerSlidesCount = offerInfo.length;
  const offerSlides = Array.from(Array(offerSlidesCount).keys());

  //TOP PICKS CAROUSEL
  const topPicksSlidesCount = menuInfo.cards[1].card.card.carousel.length;
  const topPicksSlides = Array.from(Array(topPicksSlidesCount).keys());
  const topPicks = menuInfo.cards[1].card.card;

  //RECOMMENDED PART
  const recommended = menuInfo.cards[2].card.card;

  return (
    <div style={{ marginTop: "5vw", padding: "2vw" }} className="menu">
      <div className="main-div">

        {/* FIRST DIV */}
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

        {/* OFFER CAROUSEL DIV */}
        <div className="carousel-div">
          <OfferCarousel
            info={offerInfo}
            slides={offerSlides}
            options={options}
          />
        </div>

        {/* MENU DIV  */}
        <div className="menu-dishes">
          <h2 style={{ textAlign: "center" }}>| MENU |</h2>
          <div className="menu-search-div">
            <div>
              <IoSearchOutline className="search-icon" />
              <button className="menu-search">Search for Dishes</button>
            </div>
            <div></div>
          </div>
          <hr />

          {/* TOP PICKS DIV  */}
          <div style={{ margin: "3vw 0" }}>
          <TopPicksCarousel
            info={topPicks}
            slides={topPicksSlides}
            options={options}
          />
          </div>
          <hr />

          {/* RECOMMENDED DIV */}
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
