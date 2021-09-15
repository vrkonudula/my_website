import { Header } from "./sections/header";
import { About } from "./sections/about";
import { Info } from "./sections/info";
import { News } from "./sections/news";
import "./styles.css";

export const App = () => {
  return (
    <>
      <Header />
      <About />
      <Info />
      <News />
    </>
  );
}
