import "../appFooter/appFooter.scss";
import AppNav from "../appNav/AppNav";
import AppLogoBean from "../appLogoBean/AppLogoBean";

const AppFooter = () => {
  return (
    <footer className="app__footer">
      <AppNav />
      <AppLogoBean />
    </footer>
  );
};

export default AppFooter;
