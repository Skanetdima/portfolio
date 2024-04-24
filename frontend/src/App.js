import { FirstContainer } from "./sections/firstContainer";
import { Header } from "./sections/partials/Header";
import { SecondContainer } from "./sections/secondContainer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <FirstContainer />
        <SecondContainer />
      </main>
    </>
  );
}
