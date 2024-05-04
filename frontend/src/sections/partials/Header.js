import icon from "../../assets/images/Icon.svg";
export const Header = () => {
  return (
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
    </header>
  );
};
