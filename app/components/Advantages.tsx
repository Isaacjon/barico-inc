"use client"

import { motion } from "motion/react"
import Image from "next/image"

export const Advantages = () => {
  return (
      <div className='custom-bg p-[7vh_0_5vh] md:p-[13vh_0] ' id="cv">
        <div className="max-w-screen-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-white leading-[130%] text-[3.2vh] font-bold mb-[5vh]">
            <b className="text-[1.8vh] font-semibold text-brand">Ceramitech Group</b>
            <br />
            Преимущества
          </h3>
        </motion.div>

        <motion.div  
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true, amount: 0.1 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  gap-[20px]'
        >
          {data.map((item, i) => (
            <SingleCard key={i} item={item} />
          ))}
        </motion.div >
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