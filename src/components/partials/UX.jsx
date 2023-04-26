import React, { useState } from "react";
import Stack from "./Stack";

// Icons/Logos

import graph1 from "../../assets/images/ux/graph1.png";
import graph2 from "../../assets/images/ux/graph2.jpeg";
import graph3 from "../../assets/images/ux/graph2copy.jpeg";
import home1 from "../../assets/images/ux/home1.jpeg";
import home2 from "../../assets/images/ux/home2.jpeg";
import home3 from "../../assets/images/ux/home3.jpeg";
import home4 from "../../assets/images/ux/home5.jpeg";
import kyc1 from "../../assets/images/ux/kyc1.png";
import kyc2 from "../../assets/images/ux/kyc2.png";
import kyc3 from "../../assets/images/ux/kyc3.png";
import kyc5 from "../../assets/images/ux/kyc5.png";
import kyc6 from "../../assets/images/ux/kyc7.png";
import kyc7 from "../../assets/images/ux/kyc6.png";
import kyc8 from "../../assets/images/ux/kyc8.png";
import kyc9 from "../../assets/images/ux/kyc9.png";
import portal1 from "../../assets/images/ux/portal1.jpeg";
import portal2 from "../../assets/images/ux/portal2.png";
import portal3 from "../../assets/images/ux/portal3.png";
import portal4 from "../../assets/images/ux/portal4.png";

const UX = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: graph1,
      caption: "Portfolio Managment Dashboard",
    },
    {
      src: graph2,
      caption: "Portfolio Managment Dashboard",
    },
    {
      src: graph3,
      caption: "Portfolio Managment Dashboard",
    },
    {
      src: kyc1,
      caption: "Know Your Client Quiz Interface",
    },

    {
      src: kyc2,
      caption: "Know Your Client Quiz Interface",
    },
    {
      src: kyc3,
      caption: "Know Your Client Quiz Interface",
    },
    {
      src: kyc5,
      caption: "Know Your Client Quiz Interface",
    },

    {
      src: kyc6,
      caption: "Know Your Client Quiz Interface",
    },

    {
      src: kyc7,
      caption: "Know Your Client Quiz Interface",
    },

    {
      src: kyc8,
      caption: "Portfolio Managment Dashboard",
    },

    {
      src: kyc9,
      caption: "Portfolio Managment Dashboard",
    },
    {
      src: portal1,
      caption: "Company Internal Employee Website ",
    },
    {
      src: portal2,
      caption: "Company Internal Employee Website ",
    },

    {
      src: portal3,
      caption: "Company Internal Employee Website ",
    },
    {
      src: portal4,
      caption: "Company Internal Employee Website ",
    },
  ];

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="carousel 2xl:carousel-ux">
      <img
        src={images[currentImage].src}
        alt={images[currentImage].caption}
        className="carousel-image 2xl:carousel-image-ux mx-auto rounded-md"
      />
      <div className="caption font-extralight">
        {images[currentImage].caption}
      </div>
      <button className="prev-button" onClick={handlePrev}>
        <i class="fa-solid fa-circle-chevron-left text-2xl md:text-4xl "></i>
      </button>
      <button className="next-button " onClick={handleNext}>
        <i class="fa-solid fa-circle-chevron-right text-2xl md:text-4xl"></i>
      </button>
    </div>
  );
};

export default UX;
