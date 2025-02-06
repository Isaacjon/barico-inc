"use client"

import { motion } from "motion/react"

import Image from "next/image";
import React from "react";

export const DemandMarkets = () => {
  return (
    <div className="py-24 px-10" id="stats">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h3 className="text-2xl font-semibold text-center">
          Доказанная Привлекательность: Рынок требует Нашу Продукцию 
        </h3>
        {/* <p className='text-black text-2xl font-semibold text-center max-w-[700px] mx-auto mt-5 '>
          Доказанная привлекательность: Рынок требует  нашу продукцию 
        </p> */}
        <div className="max-w-screen-2xl mx-auto mt-16 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 ">
          {data.map((item, i) => (
            <div
              style={{ background: "rgba(238,237,237, 0.8)" }}
              key={i}
              className={`scale-100 flex flex-col bg-gray-900 shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden`}
            >
              <div
                className={`p-3 flex flex-col gap-4 h-full rounded-[inherit]`}
              >
                <div className="h-[260px] rounded-[inherit]">
                  {/* <img
                    className="h-full w-full object-cover rounded-[inherit]"
                    src={item.img}
                  /> */}
                  <Image
                    className="rounded-[inherit] h-full w-full"
                    src={item.img}
                    alt="Factory name"
                    width={480}
                    height={260}
                  />
                </div>
                <div>
                  <b className="text-lg">{item.name}</b>
                  <p className="text-lg">{item.tite}</p>
                  <b className="text-lg">{item.amountTitle}</b>
                  <p className="text-lg">{item.amount}</p>
                  <b className="text-lg">{item.priceTitle}</b>
                  <p className="text-lg">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const data = [
  {
    name: "ООО «ЛЗСФ»",
    tite: "Входит в группу заводов УК «ЛМЗ», занимается производством фритт и глазурей и является одним из старейших предприятий данного направления деятельности.",
    amountTitle: 'Необходимый объём',
    amount: "20 тонн/месяц",
    priceTitle: "Предлагаемая цена",
    price: "137.000 рублей/тонна",
    img: "/factory-1.png"
  },
  {
    name: "«Самарский Стройфарфор»",
    tite: "Одно из крупнейших предприятий Самарской губернии, специализирующееся на выпуске сантехники и керамогранита. Завод выпускает продукцию под брендами SANITA LUXE и SANITA по сантехнике, KERRANOVA и GRASARO по керамограниту.",
    amountTitle: 'Необходимый объём',
    amount: "30 тонн/месяц",
    priceTitle: "Предлагаемая цена",
    price: "115.000 рублей/тонна",
    img: "/factory-2.png"
  },
  {
    name: "ООО «ОСМиБТ»",
    tite: "Крупнейший в Центрально-Черноземном регионе производитель керамического кирпича и санфаянса",
    amountTitle: 'Необходимый объём',
    amount: "80 тонн/месяц",
    priceTitle: "Предлагаемая цена",
    price: "118.000 рублей/тонна",
    img: "/factory-3.png"
  },

];
