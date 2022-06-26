import "./scss/_index.scss";
import "./App.scss";
import Home from "./components/home";

import Slider from "./components/slider";
import NavBar from "./components/navBar";
import ContactBar from "./components/contactBar";

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
    </div>
  );
}

export default App;
