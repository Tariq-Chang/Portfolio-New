import React from "react";
import vectorIcon from "./images/vector-icon.jpg";
const About = () => {
  return (
    <div className=" w-full bg-primary-white py-2 md:flex items-center py-16 px-12">
      <div className="w-60 h-60 mx-auto px-4 py-6 sm:w-72 h-72 md:w-80 h-80 lg:w-100 h-100">
        <img
          src={`${vectorIcon}`}
          alt="boy sitting on the computer"
          className="hover:scale-125 cursor-pointer duration-1000"
        />
      </div>
      <div className="w-full mx-auto px-2 py-8 drop-shadow-lg text-[#333] max-w-[350px] text-justify sm:max-w-[400px]">
        <h1 className="py-2 text-center text-xl font-semibold tracking-wider sm:text-2xl font-bold md:text-3xl">
          About
        </h1>
        <h3 className="pt-4 px-4 text-[#333 md:text-md">
          The quiz brown fox jumps over the lazy dog. The quiz brown fox jumps
          over the lazy dog. The quiz brown fox jumps over the lazy dog. The
          quiz brown fox jumps over the lazy dog. The quiz brown fox jumps over
          the lazy dog.
        </h3>
      </div>
    </div>
  );
};

export default About;
