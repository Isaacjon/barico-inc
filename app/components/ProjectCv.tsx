"use client"

import { motion, useSpring, useInView } from "motion/react"
import { useEffect, useRef, useState } from "react"


const data  = [
  {
    tite: "Инвестиции",
    number: "400 000",
    leftSign: '$',
  },
  {
    tite: "Срок окупаемости",
    number: "18",
    rightSign: ' месяца',
  },
  {
    tite: "Ежемесячные затраты",
    number: "93 800",
    leftSign: '$',
  },
  {
    tite: "Ожидаемая прибыль",
    number: "42 152",
    leftSign: '$',
  },

  {
    tite: "Точка безубыточности",
    number: "3",
    rightSign: ' месяца',
  },
  {
    tite: "Рентабельность продаж",
    number: "39,4",
    rightSign: '%',
  },

]


export const ProjectCv = () => {

  return (
    <div className='py-24 relative custom-bg' id="cv">
      {/* <div className='gradient-bg'/> */}
      <div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h3 className='text-brand text-2xl font-semibold text-center'>Резюме проекта</h3>
        <p className='text-black text-2xl font-semibold text-center max-w-[700px] mx-auto mt-5 '>
          Производство углекислого бария (BaCO3) с объемом 150 тонн в
          месяц, ориентированное на российский и узбекский рынки.
        </p>
      </div>

      <div  
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.9 }}
        className='max-w-screen-2xl mx-auto mt-16 px-4 py-6 grid lg:grid-cols-12 sm:grid-cols-3 grid-cols-2 gap-x-1 gap-y-1'
      >
        {data.map((item, i) => (
          <SingleCard key={i} item={item} />
        ))}
      </div >
    </div>
  )
}

interface SingleCardProps {
  item: {
    tite: string;
    number: string;
    leftSign?: string;
    rightSign?: string;
  }
}

const SingleCard = ({ item }: SingleCardProps) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); 

  const [displayNums, setDisplayNums] = useState(0)

  // Convert number safely
  const targetNumber = parseFloat(
    item.number.toString().replace(/\s/g, "").replace(",", ".")
  );

  const springNumsCount = useSpring(0, {
    stiffness: 100, // Controls speed
    damping: 20, // Controls smoothness
  });

  useEffect(() => {
    if (isInView) {
      springNumsCount.set(targetNumber);
    }
  }, [isInView, targetNumber, springNumsCount]);

  useEffect(() => {
    const unsubscribe = springNumsCount.on("change", (value) => {
      setDisplayNums(Math.round(value)); // Ensure smooth transition
    });

    return () => unsubscribe(); // Cleanup
  }, [springNumsCount]);

  return (
    <div 
      ref={ref}
      style={{background: "rgba(238,237,237, 0.8)"}}
      className=' hover:scale-95 transition-all col-item col-span-1 lg:col-span-2 relative'>
    <div className='p-3 aspect-square  grid content-center text-center overflow-hidden'>
      <span className='text-brand font-bold text-xl md:text-2xl'>
        {item.leftSign}
        <span className=''>{displayNums.toLocaleString("ru-RU")}</span>
        {item.rightSign}
      </span>
      <p className='md:text-xl text-lg font-semibold h-14'>{item.tite}</p>
    </div>
  </div>
  )
}


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

