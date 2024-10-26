import { useState } from "react";
import Button from "../Buttons/Button";
import myImage from "../../../media/logo_size.jpg";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/', { replace: true });
    navigate(0); // Triggers a full page reload
  };
  return (
    <div className="header">
      <div className="logo-container">
        <Link to={"/"} onClick={handleHomeClick}><img src={myImage}></img></Link>
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
              onClick={handleHomeClick}
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
