import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import heroImg from "@/assets/bgImg/hero.jpg";
import heroImg1 from "@/assets/bgImg/noikebg.jpg";
import { Link } from "react-router";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

type ImageCarsouel = {
  imgSrc: string;
  heading: string;
  description: string;
};
const imageCarsouel: Array<ImageCarsouel> = [
  {
    imgSrc: heroImg,
    heading: "Winter sale upto 20% off",
    description:
      " Discover our latest collection of premium products at unbeatable prices.",
  },
  {
    imgSrc: heroImg1,
    heading: "GEAR UP FOR EVERY STRIDE",
    description:
      "Discover our latest collection of premium products at unbeatable prices.",
  },
];

export default function Hero() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent className="h-full">
        {imageCarsouel.map((_, index) => (
          <CarouselItem
            key={index}
            className={`w-full h-[calc(100vh-3.5rem)] flex items-center justify-center relative z-10 bg-center bg-cover bg-no-repeat `}
            style={{ backgroundImage: `url(${_.imgSrc})` }}
          >
            <div className="text-white z-20 space-y-6 max-w-4xl p-4">
              <h1 className="text-4xl md:text-6xl  font-bold">{_.heading}</h1>
              <p className="text-lg md:text-xl max-w-xl">{_.description}</p>
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 mt-5"
                >
                  Shop Now
                </Button>
              </Link>
            </div>
            <div className="w-full h-full absolute bg-black/75 shadow-lg z-10" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
