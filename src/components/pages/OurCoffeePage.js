import OurCoffee from "../ourCoffee/OurCoffee";
import AppFooter from "../appFooter/AppFooter";
import Filter from "../filter/Filter";
import CoffeeOffers from "../coffeeOffers/CoffeeOffers";



const OurCoffeePage = () => {
	return (
		<>
		<OurCoffee />
		<Filter />	
		<CoffeeOffers />	
		<AppFooter />
		</>
	)
}

export default OurCoffeePage;