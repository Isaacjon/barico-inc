"use client"

import { motion } from "motion/react"
import Image from "next/image"

const productList  = [
  {
    title: "облицовочный кирпич",
  },
  {
    title: "декоративный кирпич",
  },
  {
    title: "фасадный кирпич",
  },
  {
    title: "жженый кирпич",
  },
  {
    title: "керамический кирпич",
  },
  {
    title: "красный кирпич",
  },
  {
    title: "полноцелый кирпич",
  },
  {
    title: "огнеупорные кирпичи",
  },
]

export const Products = () => {
  return (
      <div className='bg-white relative text-[#2d2a26] overflow-hidden ' id="cv">
        <Image
          className={`
            h-[20vh] w-[20vh] md:h-[20vh] md:w-[20vh] object-contain absolute right-[-10vh] bottom-[2vh] z-[1]
          `}
          src="https://ceramitech.uz/wp-content/uploads/2022/08/figure-kirpich.svg"
          alt="product image"
          width={343}
          height={400}
        />

        <h3 className="text-center text-black leading-[130%] text-[3.2vh] font-bold mb-[4vh]">
        Продукция
        </h3>

        <div className='container grid grid-cols-1 md:grid-cols-4 gap-[20px]'>
          {productList.map(pro => (
            <button key={pro.title} className="max-w-max md:mb-[5vh] md:mt-0 bg-brand font-bold text-white border-none py-[1.6vh] px-[4.3vh] rounded-[5vh]" >
              {pro.title}
            </button>
          ))}

        </div>



        <div className="container relative z-[2] py-[7vh] md:py-[10vh]">
            <h3 className="text-black leading-[130%] text-[3.2vh] font-bold mb-[4vh]">
              <b className="text-[1.8vh] font-semibold text-brand">Ceramitech Group</b>
              <br />
              Фотогалерея
            </h3>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 0.1 }}
            className='grid grid-cols-2 gap-[10px] xl:gap-[20px] xl:grid-cols-3 '
          >
            {Array.from({length: 6}).map((_, i) => (
              <div
                key={i}
                className={`aspect-square`}
              >
                <Image
                  className={`h-full w-full object-cover`}
                  src={`/demand-${i + 1}.png`}
                  alt="product image"
                  width={340}
                  height={340}
                />
              </div>
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