import { FirstContainer } from "./sections/firstContainer";
import { Header } from "./sections/partials/Header";
import { SecondContainer } from "./sections/secondContainer";
import { ThirdContainer } from "./sections/thirdContainer";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <FirstContainer />
        <SecondContainer />
        <ThirdContainer />
      </main>
    </>
  );
}
