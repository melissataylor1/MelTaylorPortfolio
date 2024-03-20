import React from "react";

// Icons/Logos

import graph1 from "../../assets/images/ux/graph1.png";
import graph2 from "../../assets/images/ux/graph2.jpeg";
import graph3 from "../../assets/images/ux/graph2copy.jpeg";
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
  const images = [
    {
      src: graph1,
      caption: "Portfolio Managment Dashboard Mockup A",
    },
    {
      src: kyc8,
      caption: "Portfolio Managment Dashboard Mockup B",
    },
    {
      src: graph3,
      caption: "Portfolio Managment Dashboard",
    },
    {
      src: graph2,
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

  return (
    <div className="grid gap-y-5 md:gap-y-8 lg:gap-5 xl:gap-10 w-11/12 mx-auto xl:grid-cols-2 grid-cols-1">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <div className="hover:project-card-hover shadow-lg shadow-black bg-zinc-800 rounded-md">
            <div className="flex justify-center items-center p-5">
              <img
                src={image.src}
                alt={image.caption}
                className="object-cover max-h-screen/2 rounded-md rounded-md"
              />
            </div>
            <div className="text-center p-4">{image.caption}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UX;
