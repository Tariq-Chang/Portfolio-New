import React from "react";
import Skill from "./Skill";
import reactIcon from "./images/react-icon.png";
import reduxIcon from "./images/redux-icon.png";
import { SiTailwindcss } from "react-icons/si";
const Skills = () => {
  const tailwindLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png";
  const skillsData = [
    {
      image: reactIcon,
      name:"React"
    },
    {
      image: reduxIcon,
      name:"Redux"
    },
    {
      image: tailwindLogo,
      name:"TailwindCSS"
    },
    {
      image: reactIcon,
      name:"React"
    },
    {
      image: reduxIcon,
      name:"Redux"
    },
    {
      image: <SiTailwindcss />,
      name:"TailwindCSS"
    },
  ]
  
  return (
    <div
      className="bg-primary-dark flex flex-col justify-evenly py-8"
      id="skills"
    >
      <h1 className="text-center text-white py-4 text-2xl tracking-wider mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
        Skills
      </h1>
      <div className="grid__container grid grid-cols-2 sm:grid-cols-3 w-[95vw] mx-auto md:grid-cols-4 max-w-[80vw]">
        {
          skillsData.map(({image, name}) => <Skill image={image} name={name} />)
        }
      </div>
    </div>
  );
};

export default Skills;
