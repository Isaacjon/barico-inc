"use client"

import { motion } from "motion/react"

export const Marketing = () => {
  return (
    <div className='bg-zinc-800 py-16 text-white px-4'>
      <div className='max-w-[1200px] mx-auto '>
        <div className='grid md:grid-cols-2 gap-14 md:gap-4'>
          
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true, amount: 0.6 }}
              className='flex flex-col gap-4 justify-center text-center md:text-start'
            >
              <h2 className='text-2xl md:text-4xl font-bold'>МАРКЕТИНГ И ПРОДАЖИ: СТРАТЕГИЯ УСПЕХА</h2>
              <p className='text-xl md:text-2xl'>Наш продукт будет направлен на ключевых потребителей углекислого бария</p>
            </motion.div>

            <div>
            {data.map((item, i)=> (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                viewport={{ once: true, amount: 0.1 }}
                className={`flex gap-2 ${i && 'mt-4 md:mt-6'}`}>
                {/* <div className='bg-brand mt-[2px] rounded-md max-w-6 min-w-6 max-h-6 min-h-6 grid place-items-center text-white'>{i+1}</div> */}
                <div className=''>
                  <b className='font-semibold text-xl  pb-0.5 border-b-[0.5px]  border-zinc-400'>{item.title}: </b> <br />
                  <p className='mt-2'>{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

const data = [
  {
    title: "Производители керамики и стекла",
    subtitle: "Предприятия, выпускающие керамическую плитку, стекло, фарфор, глазурь.",
  },
  {
    title: "Лакокрасочные предприятия",
    subtitle: "Компании, производящие краски, эмали, лаки.",
  },
  {
    title: "Химические компании",
    subtitle: " Производители различных химических соединений.",
  },
  {
    title: "Нефтегазовые компании",
    subtitle: "Предприятия, осуществляющие добычу и переработку нефти и газа.",
  },
]
