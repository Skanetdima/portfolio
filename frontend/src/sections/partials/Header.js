import icon from "../../assets/images/Icon.svg";
import icon1 from "../../assets/images/hamburger.svg";
import icon2 from "../../assets/images/cross.svg";
import { useState } from "react";

export const Header = () => {
  const [toggleList, setToggleist] = useState(true);

  const toggleMenu = () => {
    let hambIconSrc = document.querySelector(".hamburger img").src;
    let hambIcon = document.querySelector(".hamburger img");
    if (hambIconSrc.indexOf(icon2) != -1) {
      hambIcon.src = icon1;
    } else {
      hambIcon.src = icon2;
    }
  };
  return (
    <>
      <div className="offScreenMenu">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>Contact</li>
        </ul>
      </div>
      <header>
        <div className="headerLogoContainer">{`{DB}`}</div>
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#" className="changeTheme buttonsHover">
                <img src={icon} alt="-" />
              </a>
            </li>
            <li>
              <a href="#" className="downloadCV">
                Download CV
              </a>
            </li>
          </ul>
        </nav>
        <div onClick={toggleMenu} className="hamburger">
          <img src={icon1} alt="" />
        </div>
      </header>
    </>
  );
};
