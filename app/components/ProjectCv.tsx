import React from 'react'

const data  = [
  {
    tite: "Инвестиции",
    number: "400 000",
    leftSign: '$',
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
    tite: "Срок окупаемости",
    number: "18",
    rightSign: ' месяца',
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
      <h3 className='text-brand text-2xl font-semibold text-center'>Резюме проекта</h3>
      <p className='text-black text-2xl font-semibold text-center max-w-[700px] mx-auto mt-5 '>
        Производство углекислого бария (BaCO3) с объемом 150 тонн в
        месяц, ориентированное на российский и узбекский рынки.
      </p>

      <div className='mt-16 px-4 py-6 grid lg:grid-cols-12 sm:grid-cols-3 grid-cols-2 gap-x-1 gap-y-1'>
        {data.map((item, i) => (
          <div 
          style={{background: "rgba(238,237,237, 0.8)"}}
          key={i} 
          className='col-item col-span-1 lg:col-span-2 relative'>
            <div className='p-3 aspect-square  grid content-center text-center overflow-hidden'>
              <span className='text-brand font-bold text-xl md:text-2xl'>
                {item.leftSign}
                <span className=''>{item.number}</span>
                {item.rightSign}
              </span>
              <p className='md:text-xl text-lg font-semibold h-14'>{item.tite}</p>
            </div>
          </div>
        ))}
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

