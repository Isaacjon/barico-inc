"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const images = [
  "/bg_img_2.jpg",
  "/bg_img.jpg"
];

export const Header = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState([false, false]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Preload images
  useEffect(() => {
    images.forEach((src, idx) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setLoaded((prev) => {
          const updated = [...prev];
          updated[idx] = true;
          return updated;
        });
      };
    });
  }, []);

  // Change background every 5s, only if both images are loaded
  useEffect(() => {
    if (loaded.every(Boolean)) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [loaded]);

  return (
    <div
      id="main"
      className={`relative sm:bg-left-top md:bg-center pt-[15vh] pb-[5.5vh] h-screen overflow-hidden`}
      style={{ position: "relative" }}
    >
      {/* Backgrounds */}
      {images.map((src, idx) => (
        <div
          key={src}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: current === idx ? 1 : 0,
            zIndex: 0,
            transition: "opacity 1s ease"
          }}
        />
      ))}
      <div className="container h-full text-white flex flex-col justify-center relative z-10">
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
