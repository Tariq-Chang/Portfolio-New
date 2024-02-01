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
      image: "https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png",
      name:"HTML5"
    },
    {
      image: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png",
      name:"CSS3"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR09-LVBwCm3Ge2T9lmYQi1PXULql89DIGpelFz1-aT5Q&s",
      name:"Javascript"
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
      image: tailwindLogo,
      name:"TailwindCSS"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      name:"Express"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
      name:"MongoDB"
    },
    {
      image: "https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png",
      name:"Typescript"
    },
    {
      image: "https://static-00.iconduck.com/assets.00/file-type-angular-icon-1907x2048-tobdkjt1.png",
      name:"Angular"
    },
    {
      image: "https://static-00.iconduck.com/assets.00/storybook-icon-icon-412x512-341bo8r1.png",
      name:"Storybook"
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
      <div className="grid__container grid grid-cols-2 sm:grid-cols-3 w-[95vw] mx-auto md:grid-cols-4 lg:grid-cols-5 max-w-[80vw]">
        {
          skillsData.map(({image, name}) => <Skill image={image} name={name} />)
        }
      </div>
    </div>
  );
};

export default Skills;
