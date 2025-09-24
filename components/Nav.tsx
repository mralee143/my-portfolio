import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid"; // Solid version
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      } else {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";

  return (
    <div
      className={`fixed w-full z-[1000] ${stickyStyle} transition-all duration-300`}
    >
      <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-xl">
          <a href="./">
            <span className="text-red-500">Mr.</span>
            <span>Ali</span>
          </a>
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="nav__link cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="nav__link cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="nav__link cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav__link cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;
