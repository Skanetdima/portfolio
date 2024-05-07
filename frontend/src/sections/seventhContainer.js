import { socialMedias } from "./partials/SocialMedias";
import icon from "../assets/images/Icon8.svg";
import icon1 from "../assets/images/Icon9.svg";
import { useRef } from "react";

export const SeventhContainer = () => {
  const h3Ref = useRef(null);

  const handleClick = () => {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");

    // Getting value
    const h3Content = h3Ref.current.textContent || h3Ref.current.innerText;

    // Writing to clipboard
    navigator.clipboard.writeText(h3Content);
  };

  return (
    <div className="seventhContainer forContainers">
      <span className="AboutMe">Get in touch</span>
      <p>
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <span className="seventhEmail">
        <img src={icon} />
        <h3 ref={h3Ref} id="seventhEmailH3">
          dimabogacan@gmail.com
        </h3>
        <button onClick={handleClick} className="buttonsHover popup">
          <img src={icon1} />
          <span className="popuptext" id="myPopup">
            Copied
          </span>
        </button>
      </span>
      <span>You may also find me on these platforms!</span>
      <div className="seventhSocialContainer">{socialMedias()}</div>
    </div>
  );
};
