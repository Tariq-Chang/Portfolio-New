import { Email, Phone, WhatsApp } from "@material-ui/icons";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center bg-primary-dark text-white h-[60vh]">
      <h3 className="text-white tracking-wider text-xl text-center pb-6 sm:text-2xl md:text-3xl lg:text-4xl">
        Contact
      </h3>
      <div class="flex flex-col justify-center md:flex-col sm:flex-col pl-20">
        <div className="flex  pl-10 flex-wrap pb-4 sm:text-lg">
          <WhatsApp className="mr-2 " />
          <h3 className="tracking-wider">+92 3142274315</h3>
        </div>
        <div className="flex pl-10 flex-wrap pb-4 sm:text-lg">
          <Email className="mr-2 " />
          <h3 className="tracking-wider">tariqhussainchang363@gmail.com</h3>
        </div>
        <div className="flex pl-10 flex-wrap sm:text-lg">
          <Phone className="mr-2 " />
          <h3 className="tracking-wider">+92 3142274315</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
