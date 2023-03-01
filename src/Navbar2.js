import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";
const Navbar2 = () => {
  let links = [
    { path: "/", name: "HOME" },
    { path: "/about", name: "ABOUT" },
    { path: "/projects", name: "PROJECTS" },
    { path: "/services", name: "SERVICES" },
    { path: "contact", name: "CONTACT" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="relative  bg-primary-yellow">
      <nav className="font-[Poppins] flex max-w-[1200px] justify-between items-center h-12 py-2">
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
          className={`flex flex-col z-10 mt-[3px] absolute left-0 top-12 ${
            open ? "top-12 left-0" : "top-12 left-[-500px]"
          } bg-primary-yellow transition-all duration-500 ease-in w-40 md:left-0 top-0`}
        >
          {links.map((link, i) => {
            return (
              <li
                key={i}
                className="px-5 py-4 cursor-pointer text-md hover:bg-yellow-400"
              >
                {link.name}
              </li>
            );
          })}
        </ul>
        <div className="hidden  px-4 md:flex justify-center items-center">
          <div className="flex justify-center px-4 hover:text-yellow-600 cursor-pointer">
            <GitHub />
          </div>
          <div className="flex justify-center px-4 hover:text-yellow-600 cursor-pointer">
            <Facebook />
          </div>
          <div className="flex justify-center px-4 hover:text-yellow-600 cursor-pointer">
            <LinkedIn />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
