"use client"

import { motion } from "motion/react"
import Image from "next/image"

export const Advantages = () => {
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
    </div>
  )
}

const data = [
  {
    img: "https://ceramitech.uz/wp-content/uploads/2022/08/preimushestva-1.svg",
    title: "Автоматизация",
    subtitle: "Позволяет контролировать качество на каждом этапе и обеспечивать <b>соответствие сертификатам</b>",
  },
  {
    img: "https://ceramitech.uz/wp-content/uploads/2022/08/preimushestva-2.svg",
    title: "Аттестованный персонал",
    subtitle: "обеспечивает выпуск порядка <b>80 млн. штук в год</b>",
  },
  {
    img: "https://ceramitech.uz/wp-content/uploads/2022/08/preimushestva-3.svg",
    title: "Индивидуальный подход",
    subtitle: "<b>к каждому клиенту</b> \n• индивидуальная упаковка \n• возможность доставки \n• соответствие качеству",
  },
  {
    img: "https://ceramitech.uz/wp-content/uploads/2022/08/laboratory.svg",
    title: "Собственная лаборатория",
    subtitle: "Ежедневная <b>проверка качества</b> выпускаемой продукции",
  },
  {
    img: "https://ceramitech.uz/wp-content/uploads/2022/08/preimushestva-4.svg",
    title: "Доверие",
    subtitle: "Нам доверяют частные покупатели и <b>крупнейшие строительные компании</b> на территории Узбекистана, Казахстана и Кыргызстана",
  },

]

interface SingleCardProps {
  item: {
    img: string;
    title: string;
    subtitle: string;
  }
}

const SingleCard = ({ item }: SingleCardProps) => {
  return (
    <div className='p-[2.5vh_2.5vh_4.5vh] bg-white text-[#2d2a26]'>
      <div>
        <Image
            className={`  h-[65px] w-[65px]`}
            src={item.img}
            alt="product image"
            width={65}
            height={65}
        />
      </div>
      <div className=''>
        <h3 className='text-black font-bold text-[2.2vh] leading-[130%] mt-[4vh]'>
          {item.title}
        </h3>
        <p className='mt-[2vh] text-sm leading-[24px]'>{item.subtitle}</p>
      </div>
  </div>
  )
}