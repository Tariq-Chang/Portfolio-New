import React from "react";
import About from "./About";

import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Services from "./Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
