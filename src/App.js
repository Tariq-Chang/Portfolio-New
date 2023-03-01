import React from "react";
import About from "./About";

import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Services from "./Services";
import Navbar2 from "./Navbar2";

function App() {
  return (
    <div>
      <Navbar2 />
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
