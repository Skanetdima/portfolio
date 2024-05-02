import {
  items,
  itemsForGuess,
  itemsForRobin,
  mapForItems,
} from "./data/fifthItems";
import icon from "../assets/images/Icon_Button.svg";

export const FifthContainer = () => {
  const divUlItemsForRobin = itemsForRobin.map(mapForItems);
  const divUlItemsForGuess = itemsForGuess.map(mapForItems);
  const divItems = items.map((obj) => {
    return (
      <li key={obj.id}>
        <div className="fifthImageContainer">
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
          <a href={obj.a}>
            <img src={icon} alt="" />
          </a>
        </div>
      </li>
    );
  });

  return (
    <div className="fifthContainer forContainers">
      <span className="AboutMe">Work</span>
      <p>Here is a quick summary of my most recent experiences:</p>
      <ul>{divItems}</ul>
    </div>
  );
};
