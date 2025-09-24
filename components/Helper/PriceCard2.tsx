import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props {
  plane: string;
  save: string;
  price: string;
  bg: string;
}

const PriceCard2 = ({ bg, plane, price, save }: Props) => {
  return (
    <div className="text-center rounded-lg bg-gray-900">
      <div className={`p-6 rounded-t-lg ${bg}`}>
        <h1 className="text-white text-[30px]">{plane}</h1>
        <p className="text-[16px] text-[#d7d7d7]">
          Try out {plane} Plan Save {""}
          <span className="text-yellow-400">{save}</span>
        </p>
        <div className="flex justify-center items-end mt-[1rem] space-x-1">
          <h1 className="text-[40px] font-bold text-yellow-400">{price}</h1>
          <p className="text-white">/Hour</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <CheckIcon className="w-[1.4rem] text-red-500" />
          <p className="text-[17px] text-white opacity-80">Next Js Website</p>
        </div>
        <div className="flex items-center space-x-3">
          <CheckIcon className="w-[1.4rem] text-red-500" />
          <p className="text-[17px] text-white opacity-80">React Js Website</p>
        </div>
        <div className="flex items-center space-x-3">
          <CheckIcon className="w-[1.4rem] text-red-500" />
          <p className="text-[17px] text-white opacity-80">
            Fullstack Js Website
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <CheckIcon className="w-[1.4rem] text-red-500" />
          <p className="text-[17px] text-white opacity-80">Authentication</p>
        </div>
        <div className="flex items-center space-x-3">
          <CheckIcon className="w-[1.4rem] text-red-500" />
          <p className="text-[17px] text-white opacity-80">Mern Website</p>
        </div>
        <div className="flex items-center space-x-3">
          <CheckIcon className="w-[1.4rem] text-red-500" />
          <p className="text-[17px] text-white opacity-80">Shopify Website</p>
        </div>
      </div>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=talhashabbir109@gmail.com&su=Standard%20Package%2010%24%20per%20hour&body=Hello,%0A%0A%20I%20am%20interested%20in%20the%20Standard%20Package%20at%2010%24%20per%20hour.%0A%0ALooking%20forward%20to%20your%20response.%20%0A%0ABest%20regards"
        className="mt-[1.5rem] px-8 py-4 bg-blue-600 text-white block w-[100%] hover:bg-blue-800 transition-all duration-300"
      >
        Get Started
      </a>
    </div>
  );
};

export default PriceCard2;
