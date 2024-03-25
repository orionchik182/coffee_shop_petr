import "./mainOffers.scss";
import { useState, useEffect } from "react";

import img0 from "../../resources/coffee/1.jpeg";
import img1 from "../../resources/coffee/2.jpeg";
import img2 from "../../resources/coffee/3.jpeg";
import allCoffee from "../allCoffeeFunction/allCoffee";

const MainOffers = (props) => {
	const  [data, setData]  = useState();

	const imgs = [img0, img1, img2]  

	useEffect(() => {
		setData(data => allCoffee(props.data.data, imgs, "app"));
	}, [])

  return (
    <section className="app__offers">
      <h2>Our best</h2>
      <div className="app__offers-goods">{data}</div>
    </section>
  );
};

export default MainOffers;
