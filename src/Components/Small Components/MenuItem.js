import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { CDN_URL } from "../../utils/constants";
import AddButton from "../Buttons/AddButton";
import { BiFoodTag } from "react-icons/bi";


const MenuItem = ({ item }) => {
  const { name, price, ratings, description, imageId, isVeg } = item;
  return (
    <div className="menu-item">
      <div className="menu-item-details">
        <p><BiFoodTag className={isVeg ? "veg-icon" : "non-veg-icon"} /></p>
        <h1 className="menu-item-name">{name}</h1>
        <p className="menu-item-price">
          {" "}
          <FaRupeeSign style={{ fontSize: "1rem", fontWeight: "700" }} />
          {price}
        </p>
        <span className="menu-item-rating">
          <span className="menu-item-rating-child">
            <MdOutlineStar />
            {ratings.aggregatedRating.rating}
          </span>
          ( {ratings.aggregatedRating.ratingCountV2})
        </span>
        <p className="menu-item-description">{description}</p>
      </div>
      <div className="menu-item-add">
        {imageId != undefined ? (
          <>
            <div className="menu-item-image">
              <img src={CDN_URL + imageId}></img>
            </div>
            <div className="item-add-button">
              <AddButton item={item} />
              <p className="item-add-text">Customizable</p>
            </div>
          </>
        ) : (
          <div className="item-add-button-noimg">
            <AddButton item={item} />
            <p className="item-add-text">Customizable</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
