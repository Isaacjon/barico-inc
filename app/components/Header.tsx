"use client"

import { motion } from "motion/react"
import Image from "next/image";

export const Header = () => {

  return (
    <div
      id="main"
      className="header-bg relative sm:bg-left-top md:bg-center pt-[15vh] pb-[5.5vh] h-screen "
    >
      <div
        className="container h-full text-white flex flex-col">
        {/* subtitle */}
        <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="leading-[1.2] text-[36px] sm:text-[63px] text-center font-black">
          ПРОИЗВОДСТВО УГЛЕКИСЛОГО БАРИЯ
        </motion.h2>

        <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4 mt-auto">
          {data.map(item => (
            <div key={item.title} className="p-[2.5vh] bg-white flex items-center gap-[2.5vh]">
              <div className="min-w-[51.60px]">
                <Image
                  className=""
                  src={item.img}
                  alt="product image"
                  width={51.60}
                  height={51.60}
                />
              </div>
                <p className="text-[#2d2a26] text-[1.5vh]">{item.title}</p>
            </div>
          ))}
        </div>

        {/* <hr className="border-2 max-w-[150px] md:max-w-[300px] m-auto my-4 border-brand" /> */}

        {/* <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="flex flex-col items-center justify-center m-auto"
        >
          <div className="relative w-full px-6">
            <div className="bg-brand h-5/6 w-[3px] absolute top-[50%] -translate-y-1/2"></div>
            <p className="text-center font-[family-name:var(--font-montserrat)] pl-4 text-2xl md:leading-normal  md:text-[40px] font-medium w-full ">
              Перспективный бизнес с высокой рентабельностью
            </p>
          </div>
          <h1 className="mt-4 p-2 md:px-6 rounded-lg md:rounded-3xl bg-[#ff510080] shadow-customShadow text-xl text-center flex justify-center gap-2 ">
            <span
              className={`text-stroke-white font-semibold font-[family-name:var(--font-poppins)] leading-[100%] 2xl:leading-[130%] text-brand text-[34px] md:text-[60px] 2xl:text-[80px]`}
            >
              BARICHEM
            </span>

            <span className="inline-flex flex-col justify-start items-start self-center">
              <span
                className={`font-[family-name:var(--font-poppins)] font-medium text-transparent tracking-normal text-stroke-white md:text-stroke-white-2 text-2xl md:text-[50px] 2xl:text-[60px]`}
              >
                INC.
              </span>
            </span>
          </h1>
        </motion.div> */}
      </div>
    </div>
  );
};

const data = [
  {
    title: "Один из крупнейших заводов керамического и облицовочного кирпича в центральной Азии",
    img: "/banner-icons/card-icon-1.svg"
  },
  {
    title: "Полностью автоматизированное производство",
    img: "/banner-icons/card-icon-2.svg"
  },
  {
    title: "Европейское оборудование от мировых производителей",
    img: "/banner-icons/card-icon-3.svg"
  },
  {
    title: "Производительность – более 80 миллионов кирпичей в год!",
    img: "/banner-icons/card-icon-4.svg"
  },
]
