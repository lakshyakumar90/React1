import { useState } from "react";
import Button from "./Button";
import myImage from "../../media/logo_size.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={myImage}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#777" : "black",
                textDecoration: isActive ? "underline" : "none",
              })}
              className="nav-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#777" : "black",
                textDecoration: isActive ? "underline" : "none",
              })}
              className="nav-link"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#777" : "black",
                textDecoration: isActive ? "underline" : "none",
              })}
              className="nav-link"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              style={({ isActive }) => ({
                color: isActive ? "#777" : "black",
                textDecoration: isActive ? "underline" : "none",
              })}
              className="nav-link"
            >
              Cart
            </NavLink>
          </li>
          <li>
            <Button
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
              props={btnName}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
