import { FirstContainer } from "./sections/firstContainer";
import { FifthContainer } from "./sections/fifthContainer";
import { Header } from "./sections/partials/Header";
import { SecondContainer } from "./sections/secondContainer";
import { ThirdContainer } from "./sections/thirdContainer";
import { FourthContainer } from "./sections/fourthContainer";
import { SixthContainer } from "./sections/sixthContainer";
import { SeventhContainer } from "./sections/seventhContainer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <FirstContainer />
        <SecondContainer />
        <ThirdContainer />
        <FourthContainer />
        <FifthContainer />
        <SixthContainer />
        <SeventhContainer />
      </main>
    </>
  );
}
