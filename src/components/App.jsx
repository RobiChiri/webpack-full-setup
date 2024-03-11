import "../styles/index.scss";
import F1 from "./F1";
import mclaren from "../images/2954472-60645375-1600-900.jpg";
import mclaren_logo from "../images/mclaren-svgrepo-com.svg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>REACT</h1>
        </section>
        <img src={mclaren} alt="mclaren" width="250px" />
        <img src={mclaren_logo} alt="mclaren" width="150px" />

        <F1 />
      </main>
    </>
  );
};

export default App;
