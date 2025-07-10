import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 mt-2">
      {/* ----left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb[-30px]">
        <p className="text-3xl text-white md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <div>
          <a
            href="#speciality"
            className="flex items-center gap-2 px-8 py-3 bg-white rounded-full text-gray-600 text-sm m-auto hover:scale-105 transition-all duration-300"
          >
            Book Appointment{" "}
            <img className="w-3" src={assets.arrow_icon} alt="" />
          </a>
        </div>
      </div>
      {/* ----right side */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute rounded-lg bottom-0 h-auto"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
