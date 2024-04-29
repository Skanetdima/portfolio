import { items } from "./data/fifthItems";
export const FifthContainer = () => {
  const divItems = items.map((obj) => {
    return (
      <li key={obj.id}>
        <div className="fifthImageContainer">
          <img src={obj.image} alt="" />
        </div>
        <div className="fifthUlTextContainer">
          <h4>{obj.h4}</h4>
          <p>{obj.p}</p>
        </div>
      </li>
    );
  });

  return (
    <div className="fifthContainer">
      <span className="AboutMe">Work</span>
      <p>Here is a quick summary of my most recent experiences:</p>
      <ul>{divItems}</ul>
    </div>
  );
};
