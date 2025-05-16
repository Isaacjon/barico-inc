"use client"

import { motion } from "motion/react"
import Image from "next/image"

export const AboutCompany = () => {
  return (
      <div className='bg-white overflow-hidden p-[7vh_0] md:p-[13vh_0] relative text-[#2d2a26]' id="cv">
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
                  Barichem Inc.
                </h3>

                <button className="m-[5vh_0_7vh] md:m-0 bg-brand font-bold text-white border-none py-[13px] px-[25px]" >
                  подробно
                </button>
              </motion.div>
              <div className="text-21px mb-[5vh]">
                <p>
                  На сегодняшний день наша производственная мощность позволяет производить до 10000-12000 тонн в год Карбоната Бария, что обеспечивает стабильные поставки для наших партнёров. 
                </p>
                <p>&nbsp;</p>
                <p>
                  На заводе работает высококвалифицированный производственный персонал. Кроме того, прием на работу ИТР на конкурсной основе позволяет поддерживать работоспособность завода на высокой мощности без снижения качества продукции.
                </p>
                <p>&nbsp;</p>
                <p>
                  Понимая потребности рынка, мы расширяем ассортимент продукции. В настоящее время ведётся активная разработка и отработка технологий производства хлорида бария и сульфата бария. Эти направления откроют дополнительные возможности для наших клиентов в различных отраслях — от металлургии и стекольной промышленности до нефтехимии и медицины.
                </p>
                <p>&nbsp;</p>
                <p>
                Наша цель — быть надёжным и долгосрочным партнёром, предоставляя качественный продукт, своевременную логистику и профессиональное сопровождение на всех этапах сотрудничества.
                </p>

              </div>

            </div>
            {/* left */}

            {/* right */}
            <div className="flex items-center">
              <div className="relative flex-1 text-center sm:text-right">
                <Image
                  className="w-full max-w-[376px] inline-block relative z-[2]"
                  src="/process_making.png"
                  alt="image"
                  width={576}
                  height={601}
                />

                <div className="hidden sm:block z-[3] absolute right-[-7%] sm:right-[-8%] top-[-7%] sm:top-[-10vh] w-[13vh] h-[13vh] border-[1vh] border-brand" />
                <div className="hidden sm:block z-[1] absolute left-[14vh] bottom-[-10vh] w-[20vh] h-[18vh] border-[1vh] border-brand" />
              </div>
            </div>
            {/* right */}

          </motion.div >
        </div>
    </div>
  )
}