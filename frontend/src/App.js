import { FirstContainer } from "./sections/firstContainer";
import { FifthContainer } from "./sections/fifthContainer";
import { Header } from "./sections/partials/Header";
import { SecondContainer } from "./sections/secondContainer";
import { ThirdContainer } from "./sections/thirdContainer";
import { FourthContainer } from "./sections/fourthContainer";
import { SixthContainer } from "./sections/sixthContainer";
import { SeventhContainer } from "./sections/seventhContainer";
import icon from "./assets/images/Icon.svg";
import icon3 from "./assets/images/dark.svg";
import { Footer } from "./sections/partials/Footer";
import { useState } from "react";

export default function App() {
  // darkmode
  const [theme, setTheme] = useState("light");
  const darkMode = (e) => {
    e.preventDefault();
    const body = document.querySelector("body");
    body.classList.remove("active");
    const image = document.getElementById("headerThemeImg");
    if (image.getAttribute("src") == icon) {
      image.src = icon3;
    } else {
      image.src = icon;
    }

    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Header darkMode={darkMode} theme={theme} />
      <main className={`main ${theme}`}>
        <FirstContainer theme={`firstContainer forContainers ${theme}`} />
        <SecondContainer theme={`secondContainer forContainers ${theme}`} />
        <ThirdContainer theme={`thirdContainer forContainers ${theme}`} />
        <FourthContainer theme={`fourthContainer forContainers ${theme}`} />
        <FifthContainer theme={`fifthContainer forContainers ${theme}`} />
        <SixthContainer theme={`sixthContainer forContainers ${theme}`} />
        <SeventhContainer theme={`seventhContainer forContainers ${theme}`} />
      </main>
      <Footer theme={`footer forContainers ${theme}`} />
    </>
  );
}
