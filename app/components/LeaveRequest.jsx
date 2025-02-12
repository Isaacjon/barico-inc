import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'

export const LeaveRequest = () => {
  return (
    <div className='container leading-[150%] text-[#2d2a26] mb-[10vh] pt-9'>
      <div  className='bg-white shadow-[0px_4px_50px_rgb(0_0_0_/_15%)]'>
        <div className='p-[2vh_6.5vh] grid grid-cols-12'>
          <div className='col-span-12 md:col-span-5 flex items-center'>
            <p className='text-[2.6vh] md:text-[3.2vh] font-bold text-center md:text-left'>
              Оставьте заявку и получите персональное предложение
            </p>
          </div>
          <div className='col-span-12 md:col-span-4'>
            <div className='px-[10px] flex justify-center md:block'>
              <Image
                className={`align-top max-w-full text-center inline-block h-[19vh] object-contain`}
                src="https://ceramitech.uz/wp-content/uploads/2022/08/cta_kirpichi.jpg"
                alt="product image"
                width={250}
                height={151}
              />
            </div>
          </div>
          <div className='col-span-12 md:col-span-3 flex items-center'>
            <button className="block m-auto md:ml-auto text-[1.8vh] bg-brand font-bold text-white border-none p-[1.6vh_4.3vh] rounded-[5vh]">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
