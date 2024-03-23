import SingleCoffee from "../singleCoffee/SingleCoffee";
import AppFooter from "../appFooter/AppFooter";


const SingleCoffeePage = (props) => {	
	return (
		<>
			<SingleCoffee data={props}/>
			<AppFooter />
		</>
	)
}

export default SingleCoffeePage