import "../appLogoBean/appLogoBean.scss";
import whiteBean from "../../resources/logo/Group.png";
import blackBean from "../../resources/logo/Group-2.png";

const AppLogoBean = ({white}) => {
  return <div className={white ? "app__wrapper" : "app__wrapper-black"}>
  <img
    className={white ? "app__wrapper-logo" : "app__wrapper-black-logo"}
    src={white ? whiteBean : blackBean}
    alt="logo coffee bean"
  />
</div>;
};

export default AppLogoBean;
