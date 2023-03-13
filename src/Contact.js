import {
  Email,
  LocationCityOutlined,
  LocationOn,
  Phone,
  WhatsApp,
} from "@material-ui/icons";
import React from "react";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-evenly bg-primary-dark text-white py-6 h-[90vh]"
      id="contact"
    >
      <h2 className="text-center text-3xl tracking-wider md:text-4xl lg:text-5xl">
        Contact
      </h2>
      <div className="flex flex-col items-center w-[100%] justify-evenly lg:w-[80%] lg:flex-row lg:justify-around">
        <div className="flex flex-col w-[80%] mx-auto pr-8">
          <h3 className="text-xl text-primary-yellow py-2 tracking-wide md:text-2xl lg:text-3xl">
            Having a project? I would love to help.
          </h3>
          <div className="flex items-center py-2">
            <Phone />
            <p className="pl-4 text-lg text-gray-300">+92 3142274315</p>
          </div>
          <div className="flex items-center py-2">
            <Email />
            <p className="pl-4 text-lg text-gray-300">
              tariqhussainchang363@gmail.com
            </p>
          </div>
          <div className="flex items-center py-2">
            <LocationOn />
            <p className="pl-4 text-lg text-gray-300">
              New foujdari road, chang muhalla, shikarpur, sindh, pakistan
            </p>
          </div>
        </div>

        <form className="flex flex-col items-center py-8 w-[80%]">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="bg-alt-dark text-primary-yellow text-lg font-semibold my-1 py-2 w-full placeholder: px-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-alt-dark text-primary-yellow text-lg font-semibold my-1 py-2 w-full placeholder: px-4"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="bg-alt-dark text-primary-yellow text-lg font-semibold  my-1 py-2 w-full placeholder: px-4"
          ></textarea>
          <button
            type="submit"
            className="bg-primary-yellow my-1 py-2 w-full text-black font-normal text-xl "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
