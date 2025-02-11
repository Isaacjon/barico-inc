"use client"

import { motion } from "motion/react"
import Image from "next/image"

export const AboutCompany = () => {
  return (
      <div className='bg-white overflow-hidden p-[7vh_0] md:p-[13vh_0] relative text-[#2d2a26]' id="cv">
        <Image
          className={`
            h-[20vh] w-[20vh] md:h-[20vh] md:w-[20vh] object-contain absolute left-[-10vh] top-[12vh] z-[1]
          `}
          src="https://ceramitech.uz/wp-content/uploads/2022/08/figure-kirpich.svg"
          alt="product image"
          width={343}
          height={400}
        />

        <div className="container relative z-[2]">

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 0.1 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'
          >
            {/* left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex items-start md:items-center gap-5 flex-col md:flex-row"
              >
                <h3 className="text-black leading-[130%] text-[3.2vh] font-bold mb-[4vh]">
                  <b className="text-[1.8vh] font-semibold text-brand">О компании</b>
                  <br />
                  Ceramitech Group
                </h3>

                <button className=" bg-brand font-bold text-white border-none py-[13px] px-[25px]" >
                  подробно
                </button>
              </motion.div>
              <div className="text-[1.6vh] leading-[150%] mb-[5vh]">
                <p>
                  <strong className="font-bold">
                    Завод входит в группу компаний ALBUS.
                  </strong>
                </p>
                <p>
                Мощность предприятия более 80 млн. штук в год основного изделия из кирпича 1,4 НФ, что делает его одним из крупнейших заводов в странах СНГ и Центральной Азии. Кроме кирпича 1,4НФ завод выпускает востребованные на строительном рынке керамический  камень 2,1НФ и керамоблок 10,7НФ.
                </p>
                <p>&nbsp;</p>
                <p>
                На заводе работает высококвалифицированный производственный персонал, прошедший обучение и практику в компании SABO. Кроме того, прием на работу ИТР на конкурсной основе позволяет поддерживать работоспособность завода на высокой мощности без снижения качества продукции.
                </p>
                <p>&nbsp;</p>
                <p>
                Завод использует в производстве сырьё с карьеров Узбекистана, разрабатывая собственный карьер с глиной. Завод имеет резервные источники энергоснабжения на случай отключения. Печи завода работают на газу круглый год, выпуская высококачественную продукцию даже в осенне-зимний период. Данные обстоятельства сырьевой  независимости, использования газа и резервирования энергоснабжения делают Завод Ceramitech Group одним из самых надежных поставщиков керамического кирпича.
                </p>

              </div>
              <div className="grid md:flex items-end">
                <div className="grid">
                  <h3 className="text-black leading-[130%] text-[3.2vh] font-bold mb-[4vh] whitespace-nowrap ">
                    <b className="text-[1.8vh] font-semibold text-brand">Предприятие группы ALBUS</b>
                  </h3>

                  <Image
                    className={``}
                    src="https://ceramitech.uz/wp-content/uploads/2024/01/post-1.png"
                    alt="albus"
                    width={255}
                    height={89}
                  />
                </div>
                <div className="h-[152px] md:h-auto grid place-content-center md:block  md:pl-[50px] pb-[20px]">
                  <button className="mt-[5vh] md:mt-0 bg-brand font-bold text-white border-none py-[1.6vh] px-[4.3vh] rounded-[5vh]" >
                    Начать сотрудничество
                  </button>
                </div>
              </div>

            </div>
            {/* left */}

            {/* right */}
            <div className="flex items-center">
              <div className="relative flex-1 text-center sm:text-right">
                <Image
                  className="w-full max-w-[376px] inline-block relative z-[2]"
                  src="https://ceramitech.uz/wp-content/uploads/2022/08/about-photo-1.jpg"
                  alt="image"
                  width={376}
                  height={401}
                />

                <div className=" z-[3] absolute right-[-7%] sm:right-[-8%] top-[-7%] sm:top-[-10vh] w-[13vh] h-[13vh] border-[1vh] border-brand" />
                <div className="hidden sm:block z-[1] absolute left-[15vh] bottom-[-15vh] w-[36vh] h-[38vh] border-[2vh] border-brand" />
              </div>
            </div>
            {/* right */}

          </motion.div >
        </div>
    </div>
  )
}