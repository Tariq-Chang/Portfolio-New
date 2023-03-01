import React from "react";
import Service from "./Service";
import reactIcon from "./images/react-icon.png";
import reduxIcon from "./images/redux-icon.png";
const Services = () => {
  return (
    <div className="flex flex-col justify-evenly py-8">
      <h1 className="text-center py-4 text-xl tracker-wider font-semibold mb-4 sm:text-2xl md:text-3xl">
        Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-[95vw] mx-auto md:grid-cols-3 max-w-[80vw]">
        <Service image={reactIcon} name="React" />
        <Service image={reduxIcon} name="Redux" />
        <Service image={reactIcon} name="React" />
      </div>
    </div>
  );
};

export default Services;
