"use client"

import { motion } from "motion/react"

export const MarketingStrategy = () => {
  return (
    <div className='ru-banner py-16 text-white' id='strategy'>
      <div className='max-w-screen-2xl mx-auto px-4'>
          
          <div className='text-black text-center mb-4'>
            <h2 className='text-2xl md:text-4xl font-bold'>СТРАТЕГИЯ МАРКЕТИНГА</h2>
          </div>

          <div>
            {data2.map((item, i)=> (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2 * i } }}
                viewport={{ once: true, amount: 1 }}
              >
              <div className={`flex gap-3 md:gap-5 p-2 md:p-5 ${item.bg} ${i && 'mt-[1px]'}`}>
                <div className='mt-[2px] rounded-md w-6 text-3xl md:text-5xl grid place-items-center text-white'>{i+1}</div>
                <div className=''>
                  <b className='font-semibold md:text-2xl'>{item.title}: </b> <br />
                  <p className='mt-2 text-sm md:text-lg'>{item.subtitle}</p>
                </div>
              </div>
              </motion.div>
            ))}
          </div>

      </div>
    </div>
  )
}

const data2 = [
  {
    title: "Установление долгосрочных партнерских отношений",
    subtitle: "С ключевыми клиентами из целевых отраслей",
    bg: "bg-zinc-900"
  },
  {
    title: "Разработка конкурентных цен",
    subtitle: "Определение цены с учетом затрат, конкуренции и спроса",
    bg: "bg-zinc-800"
  },
  {
    title: "Активное участие в профильных выставках и конференциях",
    subtitle: "Для демонстрации продукции и установления контактов с потенциальными клиентами",
    bg: "bg-zinc-700"
  },
  {
    title: "Создание сайта и ведение рекламных кампаний в интернете",
    subtitle: "Для продвижения бренда и продукции в онлайн-среде",
    bg: "bg-zinc-600"
  },
  {
    title: "Проведение маркетинговых исследований",
    subtitle: " Для изучения потребностей рынка и выявления новых возможностей",
    bg: "bg-zinc-500"
  },
]