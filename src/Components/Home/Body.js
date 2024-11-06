import RestaurantCard, { withOpen } from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import Shimmer from "../../utils/Shimmer";
import Button from "../Buttons/Button";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const location = useLocation();

  const fetchData = async () => {
    const data = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.315901751287292&lng=78.0372558106201&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setOriginalRestaurants(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, [location]); // Refetch data when the location changes

  useEffect(() => {
    setSearchText(""); // Reset search text
    setListOfRestaurants(originalRestaurants); // Reset to original restaurants
  }, [location]);

  // const RestaurantCardPromoted = withOpen(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1 style={{ color: "red", textAlign: "center", marginTop: "5rem" }}>
        You are offline, please check your internet connection.{" "}
      </h1>
    );
  }


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">
        <div className="search">
          <input
            type="text"
            data-testid="searchInput"
            placeholder="Search Restaurant"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            onClick={() => {
              const searchedRestaurants = originalRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurants(searchedRestaurants);
            }}
            props={"Search"}
          />
        </div>

        <div className="buttons">
          <Button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setListOfRestaurants(filteredRestaurants);
            }}
            props={"Top Rated Restaurants"}
          />
          <Button
            onClick={() => setListOfRestaurants(originalRestaurants)}
            props={"Reset Filters"}
          />
        </div>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            className="restaurant-link"
            key={restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
            {/* {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )} */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
