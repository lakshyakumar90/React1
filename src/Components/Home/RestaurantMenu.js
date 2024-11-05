import Shimmer from "../../utils/Shimmer";
import { useParams } from "react-router-dom";
import OfferCarousel from "../Carousels/OfferCarousel";
import { IoSearchOutline } from "react-icons/io5";
import TopPicksCarousel from "../Carousels/TopPicksCarousel";
import CollapsibleDiv from "../Small Components/CollapsibleDiv";
import Footer from "../Footer/Footer";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);  //THIS IS A CUSTOM HOOK

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
  const topPicks = menuInfo.cards[1].card.card;

  let topPicksSlides = [];
  if (topPicks.title === "Top Picks") {
    const topPicksSlidesCount = topPicks.carousel.length;
    topPicksSlides = Array.from(Array(topPicksSlidesCount).keys());
  }

  //RECOMMENDED PART
  const shouldExcludeIndex1 = menuInfo.cards[1].card.card.title === "Top Picks";
  const allCards = menuInfo.cards;
  let mappedCards = []
  let a = 0;


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
          {topPicks.title === "Top Picks" && (
            <div style={{ margin: "3vw 0" }}>
              <TopPicksCarousel
                info={topPicks}
                slides={topPicksSlides}
                options={options}
              />
            </div>
          )}

          {/* NEXT ALL DIVS */}
          <div style={{ margin: "3vw 0" }}>
            {mappedCards = allCards.slice(shouldExcludeIndex1 ? 2 : 1, -2).map((card, index) => {
              const adjustedIndex = shouldExcludeIndex1 ? index + 1 : index;
               return (
                  <CollapsibleDiv card={card} key={adjustedIndex} />
               )
            })}
          </div>
        </div>

        {/* FOOTER */}
        <Footer item={cardInfo} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
