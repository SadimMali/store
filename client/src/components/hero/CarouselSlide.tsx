import { Link } from "react-router";
import { Button } from "../ui/button";
import { CarouselItem } from "../ui/carousel";
import React from "react";

type Props = {
  imgSrc: string;
  heading: string;
  description: string;
};
const CarouselSlide: React.FC<Props> = ({ imgSrc, heading, description }) => {
  return (
    <CarouselItem
      // key={index}
      className={`w-full h-[calc(100vh-3.5rem)] flex items-center justify-start relative z-10 bg-center bg-cover bg-no-repeat `}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className=" z-20 space-y-3 max-w-4xl px-10">
        <h1 className="text-4xl md:text-6xl  font-bold">{heading}</h1>
        <p className="text-3xl md:text-5xl max-w-xl font-medium">
          {description}
        </p>
        <Link to="/products">
          <Button
            size="lg"
            className="bg-red-500 text-white hover:bg-black mt-5"
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </CarouselItem>
  );
};

export default CarouselSlide;
