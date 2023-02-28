import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/CloseTwoTone";
import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";
const Navbar = () => {
  let links = [
    { path: "/", name: "HOME" },
    { path: "/about", name: "ABOUT" },
    { path: "/projects", name: "PROJECTS" },
    { path: "/services", name: "SERVICES" },
    { path: "contact", name: "CONTACT" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className="z-[10] w-full relative font-[Poppins]">
      {/* <div className="absolute top-0 left-0 w-full cursor-pointer py-2 bg-primary-yellow px-4">
        {!open ? (
          <div className="md:hidden ">
            <MenuIcon onClick={() => setOpen(!open)} />
          </div>
        ) : (
          <div className="md:hidden">
            <CancelIcon onClick={() => setOpen(!open)} />
          </div>
        )}
      </div> */}
      <ul
        className={`flex justify-center items-center w-full text-sm px-4 bg-primary-yellow absolute top-0 left-0 drop-shadow-sm sm:text-md `}
      >
        {links.map((link, i) => {
          return (
            <li
              key={i}
              className="flex justify-left items-center font-md text-sm md:text-md"
            >
              <a
                href={link.path}
                className="flex items-center px-4 h-12 hover:bg-yellow-300"
              >
                {link.name}
              </a>
            </li>
          );
        })}
        <div className="hidden px-4 md:flex items-center pl-16">
          <div className="px-2  text-[#333] cursor-pointer hover:text-black">
            <GitHub />
          </div>
          <div className="px-2  text-[#333] cursor-pointer hover:text-black">
            <Facebook />
          </div>
          <div className="px-2  text-[#333] cursor-pointer hover:text-black">
            <LinkedIn />
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
