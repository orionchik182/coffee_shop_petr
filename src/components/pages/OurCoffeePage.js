import OurCoffee from "../ourCoffee/OurCoffee";
import AppFooter from "../appFooter/AppFooter";
import { useState } from "react";
import Filter from "../filter/Filter";
import CoffeeOffers from "../coffeeOffers/CoffeeOffers";



const OurCoffeePage = (props) => {

const [findCountry, setFindCountry] = useState();
const [findInput, setFindInput] = useState();
	
const addFilterCountry = (countryFilter) => {
	setFindCountry(findCountry => countryFilter)
}

const addFilterInput = (inputFilter) => {
	setFindInput(findInput => inputFilter)
}
	

	return (
		<>
		<OurCoffee />
		<Filter addFilterCountry={addFilterCountry} addFilterInput={addFilterInput}/>	
		<CoffeeOffers data={props} findInput={findInput} findCountry={findCountry}/>	
		<AppFooter />
		</>
	)
}

export default OurCoffeePage;