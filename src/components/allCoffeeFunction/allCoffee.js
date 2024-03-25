import { Link } from "react-router-dom";

const allCoffee = (props, imgs, className, filterCountry, filterInput) => {
	const data = Object.values(props);
	let filteredData = data;
	// console.log(filterCountry)
	console.log(filterInput)
	if (filterCountry!==undefined && filterCountry.trim() !== "") {
		filteredData = data.filter(item => item.country.toLowerCase().includes(filterCountry.toLowerCase()))
	} 
	if (filterInput !== undefined && filterInput.trim() !== "") {
		filteredData = data.filter(item => 
			
			item.name.toLowerCase().includes(filterInput.toLowerCase()) ||
			item.price == filterInput ||
			item.weight == filterInput
		)
	}

	const myClass = `${className}__offers-goods-coffee`;
	
	const elements = filteredData.map((item, i) => {	
		return (			
			<Link key={i} to={`/coffee/${item.id}`}>
				<div className={myClass}>
					<img src={imgs[i]} alt={item.name} />
					<div className={`${myClass}-name`}>
						{item.name} {item.weight} kg
					</div>
					{className === 'coffee' ? <div className={`${myClass}-country`}>{item.country}</div> : null}
					<div className={`${myClass}-price`}>{item.price}$</div>
				</div>
			</Link>
		);
	});		
	return <>{elements}</>;
};

export default allCoffee;