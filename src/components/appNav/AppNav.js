import { Link } from "react-router-dom";

import "../appNav/appNav.scss";
import AppLogoCoffee from "../../resources/logo/coffee-bean.svg";
import AppLogoCoffeeBlack from "../../resources/logo/coffee-bean-black.png";



const AppNav = ({ white }) => {
  return (
    <>
      <div className="wrapper">
        <img
          className="logoCoffee"
          src={white ? AppLogoCoffee : AppLogoCoffeeBlack}
          alt="logo coffee beans"
        />
        <nav className="app__menu">
          <ul>
            <li>
              <Link to="/">Coffee house</Link>
            </li>
            <li>
              <Link to="/coffee">Our coffee</Link>
            </li>
            <li>
              <Link to="/pleasure">For your pleasure</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default AppNav;
