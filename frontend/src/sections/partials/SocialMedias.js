import icon2 from "../../assets/images/Icon2.svg";
import icon3 from "../../assets/images/Icon3.svg";
import icon4 from "../../assets/images/Icon4.svg";

// Social Medias
export const socialMedias = () => {
  return (
    <>
      <a
        className="buttonsHover"
        target="_blank"
        href="https://github.com/Skanetdima"
      >
        <img src={icon2} alt="" />
      </a>
      <a className="buttonsHover" target="_blank" href="">
        <img src={icon3} alt="" />
      </a>
      <a className="buttonsHover" target="_blank" href="">
        <img src={icon4} alt="" />
      </a>
    </>
  );
};
