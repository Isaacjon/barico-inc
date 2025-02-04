import React from 'react'


export const ProjectCv = () => {
  return (
    <div className='py-14'>
      <h3 className='text-brand text-2xl font-semibold text-center'>Резюме проекта</h3>
      <p className='text-black text-2xl font-semibold text-center max-w-[700px] mx-auto mt-5 '>
        Производство углекислого бария (BaCO3) с объемом 150 тонн в
        месяц, ориентированное на российский и узбекский рынки.
      </p>

      <div className='px-4 py-6 grid lg:grid-cols-12 grid-cols-3 gap-x-px gap-y-px lg:gap-x-1 lg:gap-y-1'>
        <div className='col-item col-span-1 lg:col-span-2 relative bg-[#ffffff08]'>
          <div className='p-3 aspect-square border-gray-300 border rounded-md grid content-center text-center'>
          <p className='text-xl'>Инвестиции:</p>
          <span>$400 000</span>
          </div>
        </div>

        <div className='col-item col-span-1 lg:col-span-2 relative bg-[#ffffff08]'>
          <div className='p-3 aspect-square border-gray-300 border rounded-md grid content-center text-center'>
          <p className='text-xl'>Ежемесячные затраты</p>
          <span>$93 800</span>
          </div>
        </div>

        <div className='col-item col-span-1 lg:col-span-2 relative bg-[#ffffff08]'>
        <div className='p-3 aspect-square border-gray-300 border rounded-md grid content-center text-center'>
          <p className='text-xl'>Ожидаемая прибыль</p>
          <span>$42 152</span>
        </div>
        </div>

        <div className='col-item col-span-1 lg:col-span-2 relative bg-[#ffffff08]'>
        <div className='p-3 aspect-square border-gray-300 border rounded-md grid content-center text-center'>
          <p className='text-xl'>Срок окупаемости</p>
          <span>18 месяцев</span>
        </div>
        </div>

        <div className='col-item col-span-1 lg:col-span-2 relative bg-[#ffffff08]'>
        <div className='p-3 aspect-square border-gray-300 border rounded-md grid content-center text-center'>
          <p className='text-xl'>Точка безубыточности</p>
          <span>3 месяца</span>
        </div>
        </div>

        <div className='col-item col-span-1 lg:col-span-2 relative bg-[#ffffff08]'>
        <div className='p-3 aspect-square border-gray-300 border rounded-md grid content-center text-center'>
          <p className='text-xl'>Рентабельность продаж</p>
          <span>39,4%</span>
        </div>
        </div>
      </div>
    </div>
  )
}
