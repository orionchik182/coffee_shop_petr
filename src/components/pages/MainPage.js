import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";
import MainInfo from "../mainInfo/MainInfo";
import MainOffers from "../mainOffers/MainOffers";

const MainPage = (props) => {
	return (
		<>
		<AppHeader/>
      <MainInfo/>
      <MainOffers data={props}/>
      <AppFooter/>
		</>
	)
}

export default MainPage;