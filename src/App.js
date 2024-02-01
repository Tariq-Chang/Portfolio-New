import React from "react";
import About from "./About";

import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Navbar2 from "./Navbar2";

function App() {
  return (
    <div>
      <Navbar2 />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
