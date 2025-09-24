import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props {
	showNav: boolean;
	closeNav: () => void;
}

const NavMobile = ({ closeNav, showNav }: Props) => {
	const navOpenStyle = showNav ? "translate-x-0" : "-translate-x-full";

	return (
		<div>
			<div
				className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vh]`}
            ></div>
			<ul
				className={`fixed top-0 left-0 h-full w-[60%] bg-red-600 flex flex-col items-center justify-center space-y-14 text-white z-[10006] transform transition-transform duration-500 ${navOpenStyle}`}
			>
				<li>
					<a className="nav__link text-[25px] sm:text-[30px]" href="#home">
						Home
					</a>
				</li>
				<li>
					<a className="nav__link text-[25px] sm:text-[30px]" href="#about">
						About
					</a>
				</li>
				<li>
					<a className="nav__link text-[25px] sm:text-[30px]" href="#services">
						Services
					</a>
				</li>
				<li>
					<a className="nav__link text-[25px] sm:text-[30px]" href="#blog">
						Blog
					</a>
				</li>
				<li>
					<a className="nav__link text-[25px] sm:text-[30px]" href="#contact">
						Contact
					</a>
				</li>
				<XMarkIcon
					onClick={closeNav}
					className="absolute top-[1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white cursor-pointer"
				/>
			</ul>
		</div>
	);
};

export default NavMobile;
