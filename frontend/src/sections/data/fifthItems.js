import image from "../../assets/images/Picture.png";
import image1 from "../../assets/images/Picture1.png";

export const items = [
  {
    id: 0,
    image: image,
    h4: "Robin.W",
    p: "A website for contacting and finding a great designer(as an example), easily in a few simple clicks. The main goal was to show my knowledge of this technologies",
    a: "https://skanetdima.github.io/Robin.W/",
  },
  {
    id: 1,
    image: image1,
    h4: "GUESS HOUSE",
    p: "A website for booking a house in Norway(Implementation of Figma design) with usage of clear technologies.",
    a: "https://skanetdima.github.io/GUESS_HOUSE/",
  },
];
// Items for Robin(Stack)
export const itemsForRobin = [
  {
    id: 0,
    tech: "JavaScript",
  },
  {
    id: 1,
    tech: "React",
  },
  {
    id: 2,
    tech: "Figma",
  },
  {
    id: 3,
    tech: "Sass/Scss",
  },
  {
    id: 4,
    tech: "Git",
  },
];
// Items for Guess(stack)
export const itemsForGuess = [
  {
    id: 0,
    tech: "JavaScript",
  },
  {
    id: 1,
    tech: "HTML",
  },
  {
    id: 2,
    tech: "Figma",
  },
  {
    id: 3,
    tech: "Sass/Scss",
  },
  {
    id: 4,
    tech: "Git",
  },
];

export const mapForItems = (obj) => {
  return (
    <li className="AboutMe" key={obj.id}>
      {obj.tech}
    </li>
  );
};
