import icon from "../../assets/images/Icon.svg";
import icon1 from "../../assets/images/hamburger.svg";
import icon2 from "../../assets/images/cross.svg";

export const Header = () => {
  const toggleMenu = () => {
    let offScreenMenu = document.querySelector(".offScreenMenu");
    offScreenMenu.classList.toggle("active");
    let body = document.querySelector("body");
    body.classList.toggle("active");
  };
  return (
    <>
      <div className="offScreenMenu">
        <div className="headerLogoContainer">
          <p>{`{DB}`}</p>
          <div onClick={toggleMenu} className="hamburgerCross">
            <img src={icon2} alt="" />
          </div>
        </div>
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
        </ul>
        <span>
          <p>Switch Theme</p>
          <a href="#" className="changeTheme buttonsHover">
            <img src={icon} alt="-" />
          </a>
        </span>
        <a href="#" className="downloadCV">
          Download CV
        </a>
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
