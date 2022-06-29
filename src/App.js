import "./scss/_index.scss";
import "./App.scss";
import Home from "./components/home";

import About from "./components/about";
import Portfolio from "./components/portfolio";
import Photos from "./components/photos";
import Gallery from "./components/gallery";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio />
      <Photos />
      <Gallery />
    </div>
  );
}

export default App;
