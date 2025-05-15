"use client";
import Image from "next/image"

import { motion } from "motion/react";

export const ProjectCv = () => {

  return (
    <div className="bg-white text-[#2d2a26] pt-[7vh] overflow-hidden">
      <div className="container">
        {data.map((item, i, arr) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 0.5 }}
            className={`grid grid-cols-1 md:grid-cols-2 md:order-2 ${(i === arr.length - 1) ? '' : 'mb-[10vh]'}`}
          >
            <div className={`${i % 2 === 0 ? '' : 'md:order-2'}`}>
              <h3 className="leading-[130%] text-[3.2vh] font-bold mb-[1.5vh] sm:mb-0">
                <b className="text-[1.8vh] font-semibold text-brand">Ceramitech Group</b>
                <br />
                {item.title}
              </h3>

              <div className="leading-[150%] text-[1.6vh]">
                <p className="">{item.specs}</p>
                {item.details.map(detail => (
                  <div key={detail.title} className="mt-[20px]">
                    <p className="">
                      <strong className="text-[1.8vh] text-brand">{detail.title}</strong>
                      <br />
                      {detail.subtitle}
                    </p>
                  </div>
                ))}

              <button className="mt-[5vh] mb-[3vh] text-[1.8vh] sm:mb-0 bg-brand font-bold text-white border-none py-[13px] px-[25px] rounded-[5vh]">
                Оставить заявку
              </button>
              </div>
            </div>

            <div className="relative">
              <div className="grid place-content-center relative z-[2]">
                <Image
                  className="h-[50vh] w-[42vh] object-contain"
                  src={item.img}
                  alt="product image"
                  width={343}
                  height={400}
                />
              </div>
             
              <div className={`absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-[1] rounded-[50%] w-[35vh] h-[35vh] ${i % 2 === 0 ? 'bg-[#082363]' : 'bg-[#2B2E37]'}`} />
              <Image
                  className={`
                    h-[25vh] w-[25vh] md:h-[36vh] md:w-[36vh] object-contain absolute 
                    ${i % 2 === 0 ? 'right-[-15vh] md:right-[-20vh] lg:right-[-28vh] bottom-[-7vh]' : 'left-[-15vh] md:left-[-20vh] lg:left-[-28vh] bottom-[-3vh]'}
                  `}
                  src={'https://ceramitech.uz/wp-content/uploads/2022/08/circle.svg'}
                  alt="product image"
                  width={343}
                  height={400}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // return (
  //   <div className='py-24 relative custom-bg' id="cv">
  //     <motion.div
  //       initial={{ opacity: 0, y: 50 }}
  //       whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
  //       viewport={{ once: true, amount: 0.5 }}
  //     >
  //       <h3 className='text-brand text-2xl font-semibold text-center'>Резюме проекта</h3>
  //       <p className='text-black text-2xl font-semibold text-center max-w-[700px] mx-auto mt-5 '>
  //         Производство углекислого бария (BaCO3) с объемом 150 тонн в
  //         месяц, ориентированное на российский и узбекский рынки.
  //       </p>
  //     </motion.div>

  //     <motion.div  
  //       initial={{ opacity: 0, y: 100 }}
  //       whileInView={{ opacity: 1, y: 0 }}
  //       viewport={{ once: true, amount: 0.9 }}
  //       className='max-w-screen-2xl mx-auto mt-16 px-4 py-6 grid lg:grid-cols-12 sm:grid-cols-3 grid-cols-2 gap-x-1 gap-y-1'
  //     >
  //       {data.map((item, i) => (
  //         <SingleCard key={i} item={item} />
  //       ))}
  //     </motion.div >
  //   </div>
  // )
}

const data = [
  {
    title: "Кирпич 1,4 НФ гладкий",
    specs: "250х120х88 мм. вес ~ 3,2кг/шт., марка М150, морозостойкость F35-50",
    img: "https://ceramitech.uz/wp-content/uploads/2022/08/new-kirpich-m150-1.png",
    details: [
      {
        title: "Уникальное теплосбережение",
        subtitle: "Высокая теплоизоляция. В доме всегда комфортная атмосфера – зимой тепло, летом прохладно. Повышенная эффективность работ систем отопления и кондиционирования."
      },
      {
        title: "Экономичность",
        subtitle: "Пустотность кирпича увеличивает его теплоизоляцию и позволяет снизить расходы за счет уменьшения ширины стен возводимого строения."
      }
    ]
  },
  {
    title: "Кирпич 1,4 НФ рифлёный",
    specs: "250*120*65мм, вес ~ 3,2кг/шт., марка М150, морозостойкость F35-50",
    img: "https://ceramitech.uz/wp-content/uploads/2022/08/kirpich-14-nf-rifleniy.png",
    details: [
      {
        title: "Оптимальный вариант под отделку",
        subtitle: "Рядовой рифленый кирпич, в основном, применяется для стен и перегородок, требующих оштукатуривания, так как обеспечивает хорошее сцепление со штукатурными растворами."
      }
    ]
  },
  {
    title: "Керамический камень 2,1 НФ",
    specs: "250x120x140 мм. Вес ~ 3,7 кг. марка М150, морозостойкость F50",
    img: "https://ceramitech.uz/wp-content/uploads/2022/08/porizovanniy-kamen-21nf.png",
    details: [
      {
        title: "Используется для возведения наружных и внутренних стен.",
        subtitle: "К особенностям данного вида продукции можно отнести высокий уровень звуконепроницаемости и теплоизоляции. Особая форма блока позволяет сократить расход кладочного раствора, а также заметно уменьшить нагрузку на фундамент и время на кладку стены."
      }
    ]
  },
  {
    title: "Керамоблок 10,7 НФ",
    specs: "380х250х219 мм Вес ~ 16.8 кг. марка М75, морозостойкость F50",
    img: "https://ceramitech.uz/wp-content/uploads/2022/08/ceramoblok-107-nf.png",
    details: [
      {
        title: "Перспективный стеновой материал с впечатляющим набором качеств",
        subtitle: "Структура блока с пустотами определяет одно из его главных положительных качеств – отменную теплоизоляцию, позволяющую сохранять тепло. Вертикальные стыки обладают высокой герметичностью, не давая появляться мостикам холода.\n\nМатериал невосприимчив к химикатам, плесени и микроорганизмам. Еще одним аргументом в пользу керамоблока, является звукоизоляция – свойство, повышающее комфорт жизни в доме."
      }
    ]
  }
]

// const data  = [
//   {
//     tite: "Инвестиции",
//     number: "400 000",
//     leftSign: '$',
//   },
//   {
//     tite: "Срок окупаемости",
//     number: "18",
//     rightSign: ' месяца',
//   },
//   {
//     tite: "Ежемесячные затраты",
//     number: "93 800",
//     leftSign: '$',
//   },
//   {
//     tite: "Ожидаемая прибыль",
//     number: "42 152",
//     leftSign: '$',
//   },

//   {
//     tite: "Точка безубыточности",
//     number: "3",
//     rightSign: ' месяца',
//   },
//   {
//     tite: "Рентабельность продаж",
//     number: "39,4",
//     rightSign: '%',
//   },

// ]

// interface SingleCardProps {
//   item: {
//     tite: string;
//     number: string;
//     leftSign?: string;
//     rightSign?: string;
//   }
// }

// const SingleCard = ({ item }: SingleCardProps) => {

//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 }); 

//   const [displayNums, setDisplayNums] = useState(0)

//   // Convert number safely
//   const targetNumber = parseFloat(
//     item.number.toString().replace(/\s/g, "").replace(",", ".")
//   );

//   const springNumsCount = useSpring(0, {
//     stiffness: 100, // Controls speed
//     damping: 20, // Controls smoothness
//   });

//   useEffect(() => {
//     if (isInView) {
//       springNumsCount.set(targetNumber);
//     }
//   }, [isInView, targetNumber, springNumsCount]);

//   useEffect(() => {
//     const unsubscribe = springNumsCount.on("change", (value) => {
//       setDisplayNums(Math.round(value)); // Ensure smooth transition
//     });

//     return () => unsubscribe(); // Cleanup
//   }, [springNumsCount]);

//   return (
//     <div 
//       ref={ref}
//       style={{background: "rgba(238,237,237, 0.8)"}}
//       className=' hover:scale-95 transition-all col-item col-span-1 lg:col-span-2 relative'>
//     <div className='p-3 aspect-square  grid content-center text-center overflow-hidden'>
//       <span className='text-brand font-bold text-xl md:text-2xl'>
//         {item.leftSign}
//         <span className=''>{displayNums.toLocaleString("ru-RU")}</span>
//         {item.rightSign}
//       </span>
//       <p className='md:text-xl text-lg font-semibold h-14'>{item.tite}</p>
//     </div>
//   </div>
//   )
// }


// 'use client';

// import React from 'react';

// const ProjectSummary = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 border border-gray-300 p-8">
//       {/* Title and Subtitle Centered */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold mb-4">РЕЗЮМЕ ПРОЕКТА</h2>
//         <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//           Производство углекислого бария (BaCO3) с объемом 150 тонн в месяц, ориентированное на российский и узбекский рынки.
//         </p>
//       </div>
      
//       {/* Full Width Image */}
//       <div className="w-full h-96 bg-cover bg-center mb-8 border border-gray-300" style={{ backgroundImage: "url('/image.png')" }}></div>
      
//       {/* Stats in 6-Column Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-5xl">
//         {[
//           { label: 'Инвестиции', value: '$400 000' },
//           { label: 'Ежемесячные затраты', value: '$93 800' },
//           { label: 'Ожидаемая прибыль', value: '$42 152' },
//           { label: 'Срок окупаемости', value: '18 месяцев' },
//           { label: 'Точка безубыточности', value: '3 месяца' },
//           { label: 'Рентабельность продаж', value: '39,4%' },
//         ].map((stat, index) => (
//           <div key={index} className="p-4 bg-white border border-gray-300 rounded-lg text-center shadow-md">
//             <p className="text-lg font-semibold text-gray-700">{stat.label}</p>
//             <p className="text-xl font-bold text-gray-900">{stat.value}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectSummary;

