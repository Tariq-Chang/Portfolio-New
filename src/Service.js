import React from "react";

const Service = ({ image, name }) => {
  return (
    <div className="bg-secondary-dark text-white py-4 px-4  mx-2 mb-3">
      <img
        src={image}
        alt="project icons"
        className="w-full h-48 object-contain"
      />
      <h3 className="font-semibold">{name}</h3>
    </div>
  );
};

export default Service;
