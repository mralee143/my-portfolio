import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[80%] mx-auto grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className="font-logo text-white text-[18px]">
            <span className="text-[30px] md:text[40px] text-red-500">Mr.</span>
            Ali
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
            I’m a passionate web developer specializing in React,Next, and
            digital marketing. I create sleek, responsive websites and
            user-friendly dashboards to enhance digital experiences.
          </h1>
          {/* <p className="mt-[1.3rem] text-red-500 underline font-semibold">
						talhashabbir109@gmail.com
					</p> */}
        </div>
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Quick Link
          </h1>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-red-500">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              Home
            </Link>
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-red-500">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              About
            </Link>
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-red-500">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              Services
            </Link>
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-red-500">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              Contact
            </Link>
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Address
          </h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Lahore,Singhpura"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapIcon className="w-[1rem] h-[1rem] text-red-500" />
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Lahore,Singhpura"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[17px] font-normal text-white opacity-75  hover:text-red-500">
                Lahore , Pakistan
              </p>
            </a>
          </div>

          <div className="flex items-center mt-[1rem] space-x-2">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aleehaider045@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <EnvelopeIcon className="w-[1rem] h-[1rem] text-red-500" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aleehaider045@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <p className="text-[17px] font-normal text-white hover:text-red-500 opacity-75">
                aleehaider045@gmail.com
              </p>
            </a>
          </div>

          <div className="flex items-center mt-[1rem] space-x-2">
            <a
              href="https://wa.me/+923144202998"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <PhoneIcon className="w-[1rem] h-[1rem] text-red-500" />
            </a>
            <a
              href="https://wa.me/+923144202998"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[17px] font-normal text-white hover:text-red-500 opacity-75">
                +92-314-4202998
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
        &#169; Copyright Mr.Ali 2025
      </div>
    </div>
  );
};

export default Footer;
