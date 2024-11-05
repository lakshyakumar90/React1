import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({route, name}) => {
  return (
    <NavLink
      to={route}
      style={({ isActive }) => ({
        color: isActive ? "#777" : "black",
        textDecoration: isActive ? "underline" : "none",
      })}
      className="nav-link"
    >
      {name}
    </NavLink>
  );
};

export default Navlink;
