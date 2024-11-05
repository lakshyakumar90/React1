import { useContext, useState } from "react";
import Button from "../Buttons/Button";
import myImage from "../../../media/logo_size.jpg";
import { Link, NavLink } from "react-router-dom";
import Navlink from "../Small Components/Navlink";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to={"/"}>
          <img src={myImage}></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Navlink route="/" name="Home" />
          </li>
          <li>
            <Navlink route="/about" name="About" />
          </li>
          <li>
            <Navlink route="/contact" name="Contact" />
          </li>
          <li>
            <Navlink route="/cart" name="Cart" cartItems={cartItems} />
          </li>
          <li>
            <Navlink route="/grocery" name="Grocery" />
          </li>
          <li>
            <Button
              onClick={() =>
                btnName === "Login"
                  ? setBtnName(loggedInUser)
                  : setBtnName("Login")
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
