import AppNav from "../appNav/AppNav";
import "../ourCoffee/ourCoffee.scss";
import imgGirl from "../../resources/img/girl-865304_1920.jpg";
import AppLogoBean from "../appLogoBean/AppLogoBean";

const OurCoffee = () => {
  return (
    <>
      <header className="coffee__header">
        <AppNav white />
        <h1>Our Coffee</h1>
      </header>
      <main className="coffee__main">
        <div className="coffee__about">
          <div className="coffee__about__img">
            <img src={imgGirl} alt="girl with coffee cup" />
          </div>
          <div className="coffee__about__info">
            <p className="text__title">About our beans</p>
            <AppLogoBean />
            <div className="coffee__about__info__text">
              <p className="text__main">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible.
              </p>
              <p className="text__main">
                Afraid at highly months do things on at. Situation recommend
                objection do intention so questions. As greatly removed calling
                pleased improve an. Last ask him cold feel met spot shy want.
                Children me laughing we prospect answered followed. At it went
                is song that held help face.
              </p>
            </div>
          </div>
        </div>
				<div className="coffee__line"></div>
      </main>
    </>
  );
};

export default OurCoffee;
 