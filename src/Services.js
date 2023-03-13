import React from "react";
import Service from "./Service";
import reactIcon from "./images/react-icon.png";
import reduxIcon from "./images/redux-icon.png";
const Services = () => {
  const tailwindLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png";
  return (
    <div
      className="bg-primary-dark flex flex-col justify-evenly py-8"
      id="services"
    >
      <h1 className="text-center text-white py-4 text-2xl tracking-wider mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
        Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-[95vw] mx-auto md:grid-cols-3 max-w-[80vw]">
        <Service image={reactIcon} name="React" />
        <Service image={tailwindLogo} name="Tailwindcss" />
        <Service image={reduxIcon} name="Redux" />
      </div>
    </div>
  );
};

export default Services;
