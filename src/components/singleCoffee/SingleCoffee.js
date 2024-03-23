import "./singleCoffee.scss";
import { useParams } from "react-router-dom";
import AppNav from "../appNav/AppNav";
import imgCoffee from "../../resources/img/Coffee Mask Group.jpg";
import AppLogoBean from "../appLogoBean/AppLogoBean";
import img0 from "../../resources/coffee/1.jpeg";
import img1 from "../../resources/coffee/2.jpeg";

const SingleCoffee = (props) => {
	const imgs = [img0, img1, imgCoffee];
	const {id} = useParams();
	const data = Object.values(props.data.data).filter(item => item.id == id);
	const {name, country, price, desc} = data[0]
  return (
    <>
      <header className="coffee__header">
        <AppNav white />
        <h1>Our Coffee</h1>
      </header>
      <main className="coffee__main">
        <div className="coffee__about">
          <div className="coffee__about__img">
            <img src={imgs[id-1]} alt={name} />
          </div>
          <div className="coffee__about__info">
            <p className="text__title">About it</p>
            <AppLogoBean />
            <div className="coffee__about__info__text">
              <div className="coffee__about__info__text-desc">
                <p className="text__desc">Country:</p>
                <p className="text__main">{country}</p>
              </div>
              <div className="coffee__about__info__text-desc">                
                <p className="text__main-desc">
                  <span>Description:</span> {desc}
                </p>
              </div>
              <div className="coffee__about__info__text-desc">
                <p className="text__desc">Price:</p>
                <p className="text__price">{price}$</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleCoffee;
