import React from "react";
import profileImageCropped from "./images/profile-image-cropped.png";
const About = () => {
  return (
    <div
      id="about"
      className=" w-full py-2 md:flex items-center md:py-16 md:px-12"
    >
      <div className="flex items-center justify-center mx-auto px-4 py-8">
        <img
          src={`${profileImageCropped}`}
          alt="boy sitting on the computer"
          className="bg-gradient-to-b from-yellow-400 rounded-full w-[200px] h-[200px] object-contain hover:scale-125 cursor-pointer duration-1000 md:w-[250px] md:h-[250px] md:object-contain lg:w-[300px] lg:h-[300px] lg:object-contain"
        />
      </div>
      <div className="w-full mx-auto px-2 py-8 drop-shadow-lg text-[#333]  max-w-[500px] text-justify sm:max-w-[500px]">
        <h1 className="py-2 text-center text-2xl font-semibold tracking-wider sm:text-3xl md:text-4xl lg:text-5xl">
          About
        </h1>
        <h3 className="pt-4 px-4 text-[#333] text-md md:text-lg lg:text-xl">
          Assalam, Alaikum! Hello, I'm Tariq Hussain Chang, a full-stack software developer specializing in React.js, JavaScript, Redux, TypeScript, Next.js, and MongoDB. With a passion for crafting seamless web experiences, I bring creativity to front-end design and efficiency to back-end data management. Let's connect and explore the exciting world of web development!
        </h3>
      </div>
    </div>
  );
};

export default About;
