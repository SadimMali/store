import {
  Carousel,
  CarouselApi,
  CarouselContent,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import React from "react";
import CategoryItem from "./CategoryItem";
import CarouselSlide from "./CarouselSlide";
import {  imageCarousel, productCategories } from "@/data/carouselData";

//Array containing carousel slide details

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number>(1);
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  // Effect to update the current slide when the carousel API is initialized or when a slide changes
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full relative"
      >
        <CarouselContent className="h-full">
          {imageCarousel.map((slide, index) => (
            <CarouselSlide key={index} {...slide} />
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex absolute bottom-10 left-10 z-50 space-x-3">
        {productCategories.map((category) => (
          <CategoryItem
            key={category.id}
            name={category.name}
            isActive={category.id === current}
            onClick={() => api?.scrollTo(category.id - 1)}
          />
        ))}
      </div>
    </div>
  );
}
