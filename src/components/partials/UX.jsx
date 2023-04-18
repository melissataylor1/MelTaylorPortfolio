import React, { useState } from "react";
import Stack from "./Stack";

// Icons/Logos

import left from "../../assets/icons/circle-left-solid.svg";
import right from "../../assets/icons/circle-right-solid.svg";

import album1 from "../../assets/images/graphics/album1.png";
import album2 from "../../assets/images/graphics/album2.jpg";
import album3 from "../../assets/images/graphics/album3.jpg";
import body1 from "../../assets/images/graphics/body1.png";
import body2 from "../../assets/images/graphics/body2.png";
import body3 from "../../assets/images/graphics/body4.png";
import body4 from "../../assets/images/graphics/body5.png";
import doordash1 from "../../assets/images/graphics/doordash1.jpeg";
import doordash2 from "../../assets/images/graphics/doordash2.jpeg";
import doordash3 from "../../assets/images/graphics/doordash3.jpeg";
import fanart from "../../assets/images/graphics/fanart.png";
import fathersday from "../../assets/images/graphics/fathersday.png";
import logo1 from "../../assets/images/graphics/logo4.png";
import logo2 from "../../assets/images/graphics/logo1.png";
import logo from "../../assets/images/graphics/logo.png";
import logo3 from "../../assets/images/graphics/logo2.png";
import logo4 from "../../assets/images/graphics/logo3.png";
import geofilter from "../../assets/images/graphics/geofilter.png";
import mockup3 from "../../assets/images/graphics/mockup3.jpg";
import officemockup from "../../assets/images/graphics/officemockup.png";
import poster from "../../assets/images/graphics/poster.png";
import selfportrait from "../../assets/images/graphics/selfportrait.png";
import zoombg1 from "../../assets/images/graphics/zoombg1.png";
import zoombg2 from "../../assets/images/graphics/zoombg2.png";

const Graphic = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: doordash1,
      caption: "DoorDash concept art. Illustrator. 2021. ",
    },
    {
      src: doordash2,
      caption: "DoorDash concept art. Photoshop, Dimension. 2021",
    },
    {
      src: doordash3,
      caption: "DoorDash concept art. Dimension, Photoshop. 2021",
    },

    {
      src: logo1,
      caption: "Sticker design 1. Illustrator. 2020.",
    },
    {
      src: logo,
      caption: "Sticker design 2. Illustrator. 2020.",
    },
    {
      src: logo3,
      caption: "Sticker design 3. Illustrator. 2020.",
    },

    {
      src: logo2,
      caption: "Logo prototype. Illustrator. 2020.",
    },

    {
      src: album2,
      caption: "Long Johnny fan art. Illustrator, Photoshop. 2020.",
    },
    {
      src: fanart,
      caption: "Lou Reed fan art. Photoshop, Illustrator. 2021.",
    },
    {
      src: album3,
      caption: "Concept Album art. Photoshop. 2020.",
    },

    {
      src: geofilter,
      caption:
        "Georgetown, ON snapchat geo filter (picked up by Snapchat inc.). Illustrator. 2017.",
    },

    {
      src: zoombg1,
      caption:
        "Podcast background for SpiritLive Radio. Illustrator, Photoshop. 2021.",
    },

    {
      src: zoombg2,
      caption:
        "Podcast overlay for SpiritLive Radio. Illustrator, Photoshop. 2021",
    },

    {
      src: mockup3,
      caption: "Beer can label prototype. Photoshop, Dimension. 2021.",
    },
    {
      src: officemockup,
      caption: "Zoom background, signage mockup. Photoshop. 2022. ",
    },
    {
      src: selfportrait,
      caption: "Self Portrait. Illustrator, Photoshop. 2020.",
    },

    {
      src: body1,
      caption: "Body Study 1. Illustrator, Photoshop. 2020.",
    },
    {
      src: body2,
      caption: "Body Study 2. Illustrator, Photoshop. 2020.",
    },
    {
      src: body3,
      caption: "Body Study 3. Illustrator, Photoshop. 2020.",
    },
    {
      src: body4,
      caption: "Body Study 4. Illustrator, Photoshop. 2020.",
    },
  ];

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="carousel ">
      <img
        src={images[currentImage].src}
        alt={images[currentImage].caption}
        className="carousel-image mx-auto rounded-md"
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

export default Graphic;
