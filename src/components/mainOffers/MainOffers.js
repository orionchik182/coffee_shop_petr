import "./mainOffers.scss";
import { Link } from "react-router-dom";
import img0 from "../../resources/coffee/1.jpeg";
import img1 from "../../resources/coffee/2.jpeg";
import img2 from "../../resources/coffee/3.jpeg";

const MainOffers = (props) => {
  const allCoffee = (props) => {
    const data = Object.values(props.data.data);
    const elements = data.map((item, i) => {
			const imgs = [img0, img1, img2]
      return (
        <Link key={i} to={`/coffee/${item.id}`}>
          <div className="app__offers-goods-coffee">
            <img src={imgs[i]} alt={item.name} />
            <div className="app__offers-goods-coffee-name">
              {item.name} {item.weight} kg
            </div>
            <div className="app__offers-goods-coffee-price">{item.price}$</div>
          </div>
        </Link>
      );
    });		
    return <>{elements}</>;
  };

  const items = allCoffee(props);

  return (
    <section className="app__offers">
      <h2>Our best</h2>
      <div className="app__offers-goods">{items}</div>
    </section>
  );
};

export default MainOffers;
