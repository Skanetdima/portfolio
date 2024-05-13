import { items } from "./data/thirdItems";

export const ThirdContainer = ({ theme }) => {
  const divItems = items.map((obj) => {
    return (
      <li key={obj.id}>
        <img src={obj.image} alt="" />
        <span>{obj.name}</span>
      </li>
    );
  });
  return (
    <div className={theme}>
      <span className="AboutMe">Skills</span>
      <p>The skills, tools and technologies I am really good at:</p>
      <ul className="thirdItemsContainer">{divItems}</ul>
    </div>
  );
};
