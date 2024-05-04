import { items } from "./data/sixthItems";

export const SixthContainer = () => {
  const divItems = items.map((obj) => (
    <li key={obj.id}>
      <img src={obj.image} alt="" />
      <p>{obj.p}</p>
      <h4>{obj.h4}</h4>
      <span>{obj.span}</span>
    </li>
  ));
  return (
    <div className="sixthContainer forContainers">
      <span className="AboutMe">Testimonials</span>
      <p>Nice things people have said about me:</p>
      <ul>{divItems}</ul>
    </div>
  );
};
