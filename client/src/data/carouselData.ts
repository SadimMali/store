import {ImageCarousel, ProductCategories } from "@/types/Carousel.type";

import slider1 from "@/assets/bgImg/slider1_.jpg";
import slider2 from "@/assets/bgImg/slider2_.jpg";
import slider3 from "@/assets/bgImg/slider3_.jpg";

export const imageCarousel: Array<ImageCarousel> = [
    {
      imgSrc: slider1,
      heading: "Enhance your",
      description: "experience",
    },
    {
      imgSrc: slider2,
      heading: "Wireless airpod",
      description: "stylish attire",
    },
    {
      imgSrc: slider3,
      heading: "Listening music",
      description: "headphones",
    },
  ];
  
  // List of product categories displayed as navigation below the carousel
 export const productCategories: Array<ProductCategories> = [
    {
      id: 1,
      name: "vrbox",
    },
    {
      id: 2,
      name: "airpods",
    },
    {
      id: 3,
      name: "headphone",
    },
  ];