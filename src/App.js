import "./scss/_index.scss";
import "./App.scss";
import { useEffect, useState } from "react";

import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Photos from "./components/photos";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    document.title = "Dreamy Studio";
  });

  useEffect(() => {
    const handelScroll = () => {
      setShowBtn(document.scrollY > 200);
    };
    window.addEventListener("scroll", handelScroll);
    return window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <div className="App">
      {showBtn && (
        <div className="btnToTop">
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      )}
      <Home />
      <About />
      <Portfolio />
      <Photos />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
