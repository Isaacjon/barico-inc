"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState} from "react";

export const Header = ({ height = '' }) => {
  const [bgImage, setBgSlider] = useState('/bg_img_2.jpg');

  const changeBackgroundInEverySeconds = () => {
    const images = [
      '/bg_img_2.jpg',
      '/bg_img.jpg'
    ];

    let index = 0;

    setInterval(() => {
      setBgSlider(images[index]);
      index = (index + 1) % images.length;
    }, 5000);
  }

  useEffect(() => {
    changeBackgroundInEverySeconds();
  }, [])
  
  return (
    <div
      id="main"
      className={`duration-1000 transition-all relative sm:bg-left-top md:bg-center pt-[15vh] pb-[5.5vh] h-screen`}
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}

    >
      <div className="container h-full text-white flex flex-col justify-center">
        {/* subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="leading-[1.2] text-[30px] sm:text-[42px] text-center font-black overflow-hidden my-auto"
        >
          Улучшение отраслей промышленности с помощью специализированных продуктов на основе бария.
        </motion.h2>
        {/* title */}
      </div>
    </div>
  );
};

const data = [
  {
    title:
      "Один из крупнейших заводов керамического и облицовочного кирпича в центральной Азии",
    img: "/banner-icons/card-icon-1.svg",
  },
  {
    title: "Полностью автоматизированное производство",
    img: "/banner-icons/card-icon-2.svg",
  },
  {
    title: "Европейское оборудование от мировых производителей",
    img: "/banner-icons/card-icon-3.svg",
  },
  {
    title: "Производительность – более 80 миллионов кирпичей в год!",
    img: "/banner-icons/card-icon-4.svg",
  },
];
