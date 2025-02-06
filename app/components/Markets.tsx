"use client"

import { motion } from "motion/react"

export const Markets = () => {
  return (
    <div className='pb-24 px-4 ru-banner' id='markets'>
      {/* <h3 className='text-white text-2xl font-semibold text-center'>РЫНОК</h3> */}

      <div className='max-w-[1200px] mx-auto flex flex-col gap-6 mt-16 '>
        {data.map((item, i) => (
          <div key={i} className={`${i && 'mt-8'}`}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <div className='text-center text-2xl font-bold mb-4'>
                <h3>{item.tite}</h3>
              </div>
              <div className='flex items-center sm:items-start gap-6 xl:gap-16 text-black mt-3 flex-col-reverse sm:flex-row '>
                <div className='flex flex-col gap-2'>
                    {Object.entries(item.topics).map((entr, i) => (
                      <div key={i} className={`flex gap-2 ${i && 'mt-4'}`}>
                        {/* <div className='bg-brand mt-[2px] rounded-md max-w-6 min-w-6 max-h-6 min-h-6 grid place-items-center text-white'>{i+1}</div> */}
                        <div className=''>
                          <b className='font-semibold text-xl pb-0.5 border-b-2'>{entr[0]}: </b> <br />
                          <p className='mt-2'>{entr[1]}</p>
                        </div>
                      </div>
                    ))}
                </div>
                
                <div className='h-[260px] flex-shrink-0 aspect-[4/6]'>
                  <img src={item.img} alt="" className='w-full h-full object-cover'/>
                </div>
              </div>
            </motion.div>
          </div>

        ))}
      </div>
    </div>
  )
}

const data  = [
  {
    tite: "РЫНОК УГЛЕКИСЛОГО БАРИЯ В РОССИИ",
    topics: {
      "Стабильный спрос": "Согласно данным Росстата, внутреннее потребление углекислого бария в России в последние годы держится на уровне около 50 000 тонн в год.", 
      "Конкуренция": "На российском рынке работают как отечественные производители, так и импортёры, в основном из Китая.", 
      "Тенденции": "Рынок углекислого бария в России имеет положительную динамику роста, обусловленную развитием строительной отрасли и увеличением производства керамических и стеклянных изделий.", 
    },
    img: '/ru-flag.png'
  },
  {
    tite: "РЫНОК УГЛЕКИСЛОГО БАРИЯ В УЗБЕКИСТАНЕ",
    topics: {
      "Стабильный спрос": "Узбекистан является перспективным рынком с растущим спросом на углекислый барий. Это обусловлено развитием строительной индустрии и производством керамики.",
      "Конкуренция": "На узбекском рынке в основном преобладают импортные поставки углекислого бария, однако есть и небольшие отечественные производители.",
      "Тенденции": "Узбекистан стремится увеличить долю отечественных производителей в целях импортозамещения и развития собственной промышленности.",
    },
    img: '/uz-flag.png'
  },
]
