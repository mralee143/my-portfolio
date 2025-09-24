import React from "react";

import PriceCard1 from "./Helper/PriceCard1";
import PriceCard2 from "./Helper/PriceCard2";
import PriceCard3 from "./Helper/PriceCard3";

const Price = () => {
	return (
		<div className="pt-[5rem] pb-[3rem] bg-black ">
			<div className="text-center">
				<p className="heading__mini">Popular Services</p>
				<h1 className="heading__primary">
					Best <span className="text-red-500">Pricing</span> For Your Project
				</h1>
			</div>
			<div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]">
				<PriceCard1 plane="Basic" price="5$" save="25%" bg="bg-red-900" />
				<PriceCard2 plane="Standard" price="10$" save="35%" bg="bg-green-900" />
				<PriceCard3 plane="Premium" price="20$" save="45%" bg="bg-blue-900" />
			</div>
		</div>
	);
};

export default Price;
