import icon from "../../assets/images/Icon.svg";
import icon1 from "../../assets/images/hamburger.svg";
import icon2 from "../../assets/images/cross.svg";
import icon3 from "../../assets/images/dark.svg";

export const Header = ({ darkMode, theme }) => {
  // simple function for toggling hamburger menu
  const toggleMenu = () => {
    const offScreenMenu = document.querySelector(".offScreenMenu");
    offScreenMenu.classList.toggle("active");
    const body = document.querySelector("body");
    body.classList.toggle("active");
  };
  const switchIcon = theme === "light" ? icon : icon3;

  return (
    <>
      <div className={`offScreenMenu ${theme}`}>
        <div className="headerLogoContainer">
          <p>{`{DB}`}</p>
          <div onClick={toggleMenu} className="hamburgerCross">
            <img src={icon2} alt="" />
          </div>
        </div>
        <ul>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Work">Work</a>
          </li>
          <li>
            <a href="#Testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#seventhEmailH3">Contact</a>
          </li>
        </ul>
        <span onClick={darkMode}>
          <p>Switch Theme</p>
          <a className="changeTheme buttonsHover">
            <img src={switchIcon} alt="-" />
          </a>
        </span>
        <a
          href="https://drive.google.com/file/d/1OGPGSI_fLh_uio94I--Pb48kUi9YA8pH/view"
          className="downloadCV"
        >
          Download CV
        </a>
      </div>
      <header className={`header ${theme}`}>
        <div className="headerLogoContainer">{`{DB}`}</div>
        <nav>
          <ul>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Work">Work</a>
            </li>
            <li>
              <a href="#Testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#seventhEmailH3">Contact</a>
            </li>
            <li onClick={darkMode}>
              <a className="changeTheme buttonsHover">
                <img src={switchIcon} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1OGPGSI_fLh_uio94I--Pb48kUi9YA8pH/view?usp=sharing"
                className="downloadCV"
              >
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
