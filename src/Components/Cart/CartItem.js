import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { CDN_URL } from "../../utils/constants";
import { BiFoodTag } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/Redux store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeHandler = (item) => {
    console.log("remove");
    dispatch(removeItem(item.id));
  };

  const { name, price, defaultPrice, description, imageId, isVeg } = item;
  return (
    <div className="h-40 flex items-center justify-between border-b-2 p-4">
      <div className="menu-item-details">
        <p>
          <BiFoodTag className={isVeg ? "veg-icon" : "non-veg-icon"} />
        </p>
        <h1 className="menu-item-name">{name}</h1>
        <p className="menu-item-price">
          {" "}
          <FaRupeeSign style={{ fontSize: "1rem", fontWeight: "700" }} />
          {price ? price : defaultPrice / 100}
        </p>
        <p className="menu-item-description">{description}</p>
      </div>
      <div className="menu-item-add flex items-center gap-4">
        <div className="menu-item-image">
          <img src={CDN_URL + imageId}></img>
        </div>
        <button
          onClick={() => removeHandler(item)}
          className="px-2 py-1 bg-black text-white rounded-lg"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
