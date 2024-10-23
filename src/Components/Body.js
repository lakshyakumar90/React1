import RestaurantCard from "./RestaurantCard";
import React, { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import Button from "./Button";
import { Link } from "react-router-dom";

export const Body = () => {
  //normal variable
  // let listOfRestaurants = restaurantData;

  //state variable - super powerful variable (React Hooks)
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setOriginalRestaurants(restaurants);
  };

  //dependency array is not compulsory and => if not then useEffect will be called everytime the component renders.
  //if dependency is an empty array useEffect is called on initial render and only once
  //if there is dependency array => depArray then the useEffect will be called on initial render and on dependency change
  useEffect(() => {
    fetchData();
  }, []);

  //conditional rendering
  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    //Body DIV
    <div className="body">
      <div className="filters">
        <div className="search">
          <input
            type="text"
            placeholder="Search Restaurant"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              const searchedRestaurants = originalRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
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
            onClick={() => {
              setListOfRestaurants(originalRestaurants);
            }}
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
