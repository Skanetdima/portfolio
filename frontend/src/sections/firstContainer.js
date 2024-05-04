import icon from "../assets/images/Icon1.svg";
import icon1 from "../assets/images/icon-dot-emerald-500.svg";

import icon5 from "../assets/images/photo_2024-04-22_08-23-36.jpg";
import { socialMedias } from "./partials/SocialMedias";

export const FirstContainer = () => {
  return (
    <div className="firstContainer">
      <div className="firstTextContainer">
        <h1>Hello, I'm Dmitry :)</h1>
        <p className="firstDescription">
          I'm a full stack-developer (React.js & Node.js) with a focus on
          developing (and occasionally designing) exceptional digital
          experiences that are quick-usable, accessible, visually satisfying,
          and responsive. Even if I have a small comercial experience, It
          doesn't mean that I'm not ready to study something new.
        </p>
        <span>
          <img src={icon} alt="" />
          <p> Poznan, Poland</p>
        </span>
        <span>
          <img src={icon1} alt="" />
          <p>Available for new projects</p>
        </span>
        <div className="firstSocialmediaContainer">{socialMedias()}</div>
      </div>
      <div className="firstImageContainer">
        <img src={icon5} alt="" />
      </div>
    </div>
  );
};
