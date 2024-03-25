import "./coffeeOffers.scss";
import { useState, useEffect } from "react";
import allCoffee from "../allCoffeeFunction/allCoffee";
import img2 from "../../resources/coffee/3.jpeg";

const CoffeeOffers = (props) => {
  const  [data, setData]  = useState([]);

  const imgs = [img2, img2, img2, img2, img2, img2];
  

	useEffect(() => {
		setData(data => allCoffee(props.data.data, imgs, "coffee", props.findCountry, props.findInput));
	}, [props.findInput, props.findCountry])	
	

  return (
    <section className="coffee__offers">
      <div className="coffee__offers-goods">{data}</div>
    </section>
  );
};

export default CoffeeOffers;
