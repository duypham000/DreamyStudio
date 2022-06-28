import "./scss/_index.scss";
import "./App.scss";
import Home from "./components/home";

import Slider from "./components/slider";
import NavBar from "./components/navBar";
import ContactBar from "./components/contactBar";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Photos from "./components/photos";

function App() {
  return (
    <div className="App">
      <Home>
        <NavBar />

        <div>
          <Slider />
        </div>
        <ContactBar />
      </Home>{" "}
      <About />
      <Portfolio />
      <Photos />
    </div>
  );
}

export default App;
