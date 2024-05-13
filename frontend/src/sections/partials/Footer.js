export const Footer = ({ theme }) => {
  return (
    <footer className={theme}>
      <span>
        &copy; 2024 |{" "}
        <a
          target="_blank"
          href="https://www.figma.com/@shahsagarm?fuid=1363833721816260310"
        >
          Designed
        </a>
        {"  by Sagar Shah"}
        and{" "}
        <a target="_blank" href="https://github.com/Skanetdima/portfolio">
          coded
        </a>{" "}
        with ❤️️ by Dmitry
      </span>
    </footer>
  );
};
