import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({route, name, cartItems}) => {
  return (
    <NavLink
      to={route}
      style={({ isActive }) => ({
        color: isActive ? "#777" : "black",
        textDecoration: isActive ? "underline" : "none",
      })}
      className="nav-link"
    >
      {cartItems ? `${name}-(${cartItems.length})` : name}
    </NavLink>
  );
};

export default Navlink;
