import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-[-4rem] bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading__mini">About Me</p>
          <h1 className="heading__primary">
            Professional <span className="text-red-500"> Website</span> for your
            business
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
            A professional website boosts your business by enhancing
            credibility, engaging customers, and driving sales. It showcases
            your services 24/7 with a sleek, user-friendly design. Stand out
            online and grow your brand effortlessly!
          </p>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-centre space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-red-500" />
              <p className="text-[18px] text-white">Frontend Development</p>
            </div>
            <div className="flex items-centre space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-red-500" />
              <p className="text-[18px] text-white">Backend Development</p>
            </div>
            <div className="flex items-centre space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-red-500" />
              <p className="text-[18px] text-white">Web Development</p>
            </div>
            <div className="flex items-centre space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-red-500" />
              <p className="text-[18px] text-white">MERN Development</p>
            </div>
            <div className="flex items-centre space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-red-500" />
              <p className="text-[18px] text-white">UI/UX Design</p>
            </div>
            <div className="flex items-centre space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-red-500" />
              <p className="text-[18px] text-white">Social Media Marketing</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              className="p-6 text-center bg-red-500"
            >
              <p className="text-[50px] text-white italic font-bold">1</p>
              <p className="text-[20px] text-white italic font-600">
                Year experience
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="p-6 text-center bg-red-500"
            >
              <p className="text-[50px] text-white italic font-bold">50+</p>
              <p className="text-[20px] text-white italic font-600">
                Happy CLient
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
              className="p-6 text-center bg-red-500"
            >
              <p className="text-[50px] text-white italic font-bold">50+</p>
              <p className="text-[20px] text-white italic font-600">
                Project Done
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
              className="p-6 text-center bg-red-500"
            >
              <p className="text-[50px] text-white italic font-bold">3+</p>
              <p className="text-[20px] text-white italic font-600">
                Award Win
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
