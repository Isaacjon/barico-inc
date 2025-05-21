"use client"

import { motion } from "motion/react"

import Image from "next/image";
import React from "react";

export const Facilites = () => {
  return (
    <div
      // style={{
      //   background:
      //     'url("/uz-banner.jpg") no-repeat center / cover',
      // }}
      className="py-24  px-4 facilities-banner"
    >
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data1.map((item) => (
              <div key={item.title} className="text-white backdrop-blur-lg bg-semi-transparent-black rounded-2xl p-5">
                <div className="flex items-center gap-2">
                    <div className="min-w-[40px] aspect-square">
                      <Image
                        className="dark:invert"
                        src={item.icon}
                        alt="Location"
                        width={40}
                        height={40}
                      />
                    </div>
                  <span className="text-xl md:text-3xl font-bold">{item.title}</span>
                </div>
                <p className="mt-5 text-base md:text-lg">
                  {item.subtitle}
                </p>
              </div>
          ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            {data2.map((item) => (
                <div key={item.title} className="text-white backdrop-blur-md bg-semi-transparent-black rounded-2xl p-5">
                  <div className="flex items-center gap-2">
                    <div className="min-w-[40px] aspect-square">
                      <Image
                        className="dark:invert"
                        src={item.icon}
                        alt="Location"
                        width={40}
                        height={40}
                      />
                    </div>
                  <span className="text-lg md:text-xl font-bold">{item.title}</span>
                </div>
                <div>
                  {item.subItems.map((subItem) => (
                    <p key={subItem.title} className="mt-5 text-base md:text-lg">
                      <b className="font-bold">
                      {subItem.title}: 
                      </b>
                      <span>
                      {" "}{subItem.subtitle}
                      </span>
                    </p>
                  ))}
                </div>

                </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const data1 = [
  {
    title: 'Местоположение',
    subtitle: "Производственный цех будет расположен за пределами города на площади 2000-3000 м2 с удобным доступом к транспорту, энергоснабжению и коммуникациям",
    icon: '/location-icon.svg'
  },
  {
    title: 'Оборудование',
    subtitle: "Для производства углекислого бария будет использоваться современное оборудование",
    icon: '/hammer-wrench-icon.svg'
  },
]

const data2 = [
  {
    title: 'Необходимое оборудование',
    icon: '/hammer-wrench-icon.svg',
    subItems: [
      {
        title: "Дробилка",
        subtitle: "Для дробления барита до необходимой крупности.",
      },
      {
        title: "Вращающаяся печь",
        subtitle: "Для спекания барита с коксом при высокой температуре.",
      },
      {
        title: "Шаровые мельницы",
        subtitle: "Для измельчения спеченного продукта",
      },
      {
        title: "Нержавеющие емкости",
        subtitle: "Для хранения и перемешивания растворов",
      },
    ]
  },
  {
    title: 'Необходимое оборудование',
    icon: '/hammer-wrench-icon.svg',
    subItems: [
      {
        title: "Емкость для соляной кислоты",
        subtitle: "Для хранения и использования соляной кислоты",
      },
      {
        title: "Пресс-фильтр",
        subtitle: "Для фильтрации растворов",
      },
      {
        title: "Сушильный конвейер",
        subtitle: "Для сушки готового продукта",
      },
      {
        title: "Паровой котел",
        subtitle: "Для обеспечения процесса спекания в печи",
      },
    ]
  },
  {
    title: 'Основные виды сырья',
    icon: '/cube-icon.svg',
    subItems: [
      {
        title: "Барит казахстанский",
        subtitle: "Основное сырье для производства углекислого бария",
      },
      {
        title: "Кокс нефтяной",
        subtitle: "Для спекания барита",
      },
      {
        title: "Поваренная соль",
        subtitle: "Для нейтрализации кислоты",
      },
      {
        title: "Соляная кислота",
        subtitle: "Для выщелачивания продукта",
      },
      {
        title: "Сода кальцинированная",
        subtitle: "Для регулирования pH растворов",
      },
    ]
  },
]
