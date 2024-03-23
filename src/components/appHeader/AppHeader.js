import "../appHeader/appHeader.scss";
import { Link } from "react-router-dom";

import AppNav from "../appNav/AppNav";
import AppLogoBean from "../appLogoBean/AppLogoBean";

const AppHeader = () => {
  return (
    <header className="app__header">
      <AppNav white />
      <div className="app__title">
        <h1>Everything You Love About Coffee</h1>
        <AppLogoBean white />
        <p>We makes every day full of energy and taste</p>
        <p className="app__title__text2">Want to try our beans?</p>
				<Link to="/coffee">
				<button className="app__title-button">More</button>
				</Link>
        
      </div>
    </header>
  );
};

export default AppHeader;
