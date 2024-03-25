import "./forYourPleasure.scss";
import imgCup from "../../resources/img/Coffee_cup.jpeg"
import AppLogoBean from "../appLogoBean/AppLogoBean";
import AppNav from "../appNav/AppNav";

const ForYourPleasure = () => {
	return (
		<>
      <header className="pleasure__header">
        <AppNav white />
        <h1>For your pleasure</h1>
      </header>
      <main className="coffee__main">
        <div className="coffee__about">
          <div className="coffee__about__img">
            <img src={imgCup} alt="girl with coffee cup" />
          </div>
          <div className="coffee__about__info">
            <p className="text__title">About our goods</p>
            <AppLogoBean />
            <div className="coffee__about__info__text">
              <p className="text__main">
							Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
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
	)
}

export default ForYourPleasure