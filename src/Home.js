import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import bgImage from "./images/background.jpg";
const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="py-24 px-2 text-white text-center w-full min-h-[100vh] bg-no-repeat bg-cover"
    >
      <h1 className="py-12 pb-2 text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl">
        I'm{" "}
        <span className="text-primary-yellow font-semibold tracking-wider drop-shadow-sm text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Tariq Hussain
        </span>
      </h1>
      <h3 className="px-2 opacity-[0.7] max-w-[470px] mx-auto text-sm tracking-wide sm:text-lg md:text-xl py-2">
        I will be your front end developer with excellent skills in React.js,
        Redux.
      </h3>
      <div className="mt-4 flex justify-evenly items-center py-4 px-8 max-w-[400px] mx-auto md:hidden">
        <div className="text-white">
          <GitHub className="cursor-pointer hover:text-primary-yellow" />
        </div>
        <div className="text-white ">
          <Facebook className="cursor-pointer hover:text-primary-yellow" />
        </div>
        <div className="text-white">
          <LinkedIn className="cursor-pointer hover:text-primary-yellow" />
        </div>
      </div>
      <button className="font-medium tracking-wider bg-green-700 py-2 px-2 rounded-sm mt-32 text-sm hover:bg-yellow-900 opacity-[0.8] sm:py-3 px-3 text-lg mx-auto ml-4">
        Get Started
      </button>
    </div>
  );
};

export default Home;
