import { items, items1 } from "./data/fourthItems";

export const FourthContainer = () => {
  const ulInDivItems = items1.map((obj) => {
    return <li key={obj.id}>{obj.text}</li>;
  });
  const divItems = items.map((obj) => {
    return (
      <li key={obj.id} className="fourthExperienceItem">
        <h4 style={{ color: "blue" }}>planner-AI</h4>
        <div className="fourthTextContainer">
          <h4>{obj.h4}</h4>
          <ul>{ulInDivItems}</ul>
        </div>
        <p className="fourthDateContainer">{obj.p}</p>
      </li>
    );
  });
  return (
    <div className="fourthContainer forContainers">
      <span className="AboutMe">Experience</span>
      <p>Here is a quick summary of my most recent experiences:</p>
      <ul>{divItems}</ul>
    </div>
  );
};
