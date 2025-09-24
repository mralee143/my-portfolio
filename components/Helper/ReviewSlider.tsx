import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";
import ClientReviewCard2 from "./ClientReviewCard2";
import ClientReviewCard3 from "./ClientReviewCard3";
import ClientReviewCard4 from "./ClientReviewCard4";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1300 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1300, min: 764 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 764, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const ReviewSlider = () => {
	return (
		<Carousel
			responsive={responsive}
			additionalTransfrom={0}
			arrows={true}
			autoPlay={true}
			autoPlaySpeed={5000}
			centerMode={false}
			infinite
			itemClass="item"
			// className="mx-[1.2rem]"
		>
			<ClientReviewCard
				image="/images/user1.png"
				user="Arsalan"
				role="CEO & Co-Founder - Ssense.pk"
			/>
			<ClientReviewCard2
				image="/images/user2.jpg"
				user="Fatima"
				role="MERN Developer"
			/>
			<ClientReviewCard3
				image="/images/user3.png"
				user="Umar Javed"
				role="Web Developer"
			/>
			<ClientReviewCard4
				image="/images/user3.jpg"
				user="Michael Perju"
				role="Python Developer"
			/>
		</Carousel>
	);
};

export default ReviewSlider;
