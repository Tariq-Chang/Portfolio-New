import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import bgImage from "./images/background.jpg";

import ReactTyped from "react-typed";
import "react-typed/dist/animatedCursor.css";
import "tailwindcss/tailwind.css";
const Home = () => {
  return (
    <div
      id="home"
      style={{ backgroundImage: `url(${bgImage})` }}
      className="py-24 px-2 text-white text-center w-full min-h-[100vh] bg-no-repeat bg-cover"
    >
      <h1 className="py-12 pb-2 text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl">
        I'm{" "}
        {/* <span className="text-primary-yellow font-semibold tracking-wider drop-shadow-sm text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Tariq Hussain
        </span> */}
        <ReactTyped
          strings={["Tariq Hussain"]}
          typeSpeed={40}
          backSpeed={20}
          className="text-primary-yellow font-semibold tracking-wider drop-shadow-sm text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        />
      </h1>
      <h3 className="px-2 max-w-[470px] mx-auto text-sm tracking-wide sm:text-lg md:text-xl py-2">
        I am a full stack developer having expertise in{" "}
        <span className="opacity-[1]">
          React.js, Redux, Typescript, Express, Node.js, MongoDB, mongoose and
          more.
        </span>
      </h3>
      <div className="mt-4 flex justify-evenly items-center py-4 px-8 max-w-[400px] mx-auto md:hidden">
        <a
          href="https://github.com/Tariq-Chang"
          target="_blank"
          className="flex justify-center px-4 hover:text-yellow-600 cursor-pointer"
        >
          <GitHub />
        </a>
        <a
          href="https://www.facebook.com/tariqhussain.chang.395"
          target="_blank"
          className="flex justify-center px-4 hover:text-yellow-600 cursor-pointer"
        >
          <Facebook />
        </a>
        <a
          href="https://www.linkedin.com/in/tariq-hussain-chang-a6686223b/"
          target="_blank"
          className="flex justify-center px-4 hover:text-yellow-600 cursor-pointer"
        >
          <LinkedIn />
        </a>
      </div>
      <a href="#contact">
        <button className="font-medium tracking-wider bg-green-700 py-2 px-2 rounded-sm mt-32 text-sm hover:bg-yellow-900 opacity-[0.8] sm:py-3 sm:px-3 sm:text-lg mx-auto ml-4">
          Get Started
        </button>
      </a>
    </div>
  );
};

export default Home;
