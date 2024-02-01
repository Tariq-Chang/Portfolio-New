import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";
const Navbar2 = () => {
  let links = [
    { path: "#home", name: "HOME" },
    { path: "#about", name: "ABOUT" },
    { path: "#skills", name: "SKILLS" },
    { path: "#projects", name: "PROJECTS" },
    { path: "#contact", name: "CONTACT" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 w-full z-20 bg-primary-yellow">
      <nav className="font-[Poppins] flex max-w-[1200px] mx-auto justify-between items-center py-4">
        <div className="px-4 cursor-pointer">
          {!open ? (
            <div className=" hover:scale-125 md:hidden">
              <MenuIcon onClick={() => setOpen(!open)} />
            </div>
          ) : (
            <div className="md:hidden">
              <CancelIcon onClick={() => setOpen(!open)} />
            </div>
          )}
        </div>
        <ul
          className={`items__container flex flex-col z-10 mt-[3px] absolute left-0 top-12 ${
            open ? "top-12 left-0" : "top-12 left-[-500px]"
          } bg-primary-yellow transition-all duration-500 ease-in w-40 md:flex-row md:bg-transparent md:transition-none md:top-0 md:left-16 md:mt-[0px]`}
        >
          {links.map((link, i) => {
            return (
              <li
                key={i}
                className="px-5 py-4 cursor-pointer text-md hover:bg-yellow-400"
              >
                <a href={link.path}>{link.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="hidden  px-4 md:flex justify-center items-center">
          <a href="https://github.com/Tariq-Chang" target="_blank" className="flex justify-center px-4 hover:text-yellow-600 cursor-pointer">
            <GitHub />
          </a>
          <a href="https://www.facebook.com/tariqhussain.chang.395" target="_blank" className="flex justify-center px-4 hover:text-yellow-600 cursor-pointer">
            <Facebook />
          </a>
          <a href="https://www.linkedin.com/in/tariq-hussain-chang-a6686223b/" target="_blank" className="flex justify-center px-4 hover:text-yellow-600 cursor-pointer">
            <LinkedIn />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
