import ForYourPleasure from "../forYourPleasure/ForYourPleasure";
import AppFooter from "../appFooter/AppFooter";
import CoffeeOffers from "../coffeeOffers/CoffeeOffers";

const ForYourPleasurePage = (props) => {
	return (
		<>
			<ForYourPleasure />
			<CoffeeOffers data={props}/>
			<AppFooter />
		</>
	)
}

export default ForYourPleasurePage