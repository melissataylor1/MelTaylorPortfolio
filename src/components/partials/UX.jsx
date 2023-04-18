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
      caption: "DoorDash concept art. Illustrator. 2021. ",
    },
    {
      src: graph2,
      caption: "DoorDash concept art. Photoshop, Dimension. 2021",
    },
    {
      src: graph3,
      caption: "DoorDash concept art. Photoshop, Dimension. 2021",
    },
    {
      src: kyc1,
      caption: "Logo prototype. Illustrator. 2020.",
    },

    {
      src: kyc2,
      caption: "Long Johnny fan art. Illustrator, Photoshop. 2020.",
    },
    {
      src: kyc3,
      caption: "Lou Reed fan art. Photoshop, Illustrator. 2021.",
    },
    {
      src: kyc5,
      caption: "Concept Album art. Photoshop. 2020.",
    },

    {
      src: kyc6,
      caption:
        "Georgetown, ON snapchat geo filter (picked up by Snapchat inc.). Illustrator. 2017.",
    },

    {
      src: kyc7,
      caption:
        "Podcast background for SpiritLive Radio. Illustrator, Photoshop. 2021.",
    },

    {
      src: kyc8,
      caption:
        "Podcast overlay for SpiritLive Radio. Illustrator, Photoshop. 2021",
    },

    {
      src: kyc9,
      caption: "Beer can label prototype. Photoshop, Dimension. 2021.",
    },
    {
      src: portal1,
      caption: "Zoom background, signage mockup. Photoshop. 2022. ",
    },
    {
      src: portal2,
      caption: "Self Portrait. Illustrator, Photoshop. 2020.",
    },

    {
      src: portal3,
      caption: "Body Study 1. Illustrator, Photoshop. 2020.",
    },
    {
      src: portal4,
      caption: "Body Study 2. Illustrator, Photoshop. 2020.",
    },
  ];

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="carousel-ux ">
      <img
        src={images[currentImage].src}
        alt={images[currentImage].caption}
        className="carousel-image-ux  mx-auto rounded-md"
      />
      <div className="caption font-extralight">
        {images[currentImage].caption}
      </div>
      <button
        className="prev-button bg-zinc-800 font-light"
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className="next-button bg-zinc-800 font-light"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default UX;
