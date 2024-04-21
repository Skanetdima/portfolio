import icon from "../../assets/images/Icon.svg";
export const Header = () => {
  return (
    <header>
      <div className="headerLogoContainer"></div>
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
        </ul>
      </nav>
      <a href="#" className="changeTheme">
        <img src={icon} alt="-" />
      </a>
      <div className="downloadCV"></div>
    </header>
  );
};
