import {
  items,
  itemsForGuess,
  itemsForRobin,
  mapForItems,
} from "./data/fifthItems";
import icon from "../assets/images/Icon_Button.svg";

export const FifthContainer = ({ theme }) => {
  const divUlItemsForRobin = itemsForRobin.map(mapForItems);
  const divUlItemsForGuess = itemsForGuess.map(mapForItems);
  const divItems = items.map((obj) => {
    return (
      <li key={obj.id}>
        <div className={`fifthImageContainer ${theme.substr(29)}`}>
          <a href={obj.a}>
            <img src={obj.image} alt="" />
          </a>
        </div>
        <div className="fifthUlTextContainer">
          <h4>{obj.h4}</h4>
          <p>{obj.p}</p>
          <ul>
            {obj.h4 === "Robin.W" ? divUlItemsForRobin : divUlItemsForGuess}
          </ul>
          <a className="buttonsHover" href={obj.a}>
            <img src={icon} alt="" />
          </a>
        </div>
      </li>
    );
  });

  return (
    <div className={theme}>
      <span className="AboutMe">Work</span>
      <p id="Work">Here is a quick summary of my most recent experiences:</p>
      <ul>{divItems}</ul>
    </div>
  );
};
