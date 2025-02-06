import Image from 'next/image'
import React from 'react'


const data = [
  {
    title: "Адрес",
    subtitle: "Ташкентская область, Ахангаранский район, ТУТ мфй, улица Бунёдкор, дом 334",
    icon: "/location-icon.svg"
  },
  {
    title: "Телефон",
    subtitle: "+998997766777",
    icon: "/phone-icon.svg"
  },
]
export const Contact = () => {
  return (
    <div className='bg-zinc-800 text-white py-8 px-4 pb-6'>
      <h3 className="text-4xl font-semibold text-center mb-10">
        Контакты
      </h3>
      <div className='max-w-[1200px] mx-auto flex justify-between gap-10 md:gap-3 flex-col md:flex-row'>
        <div>
          {data.map((item, i) => (
            <div key={i} className={`flex gap-3 ${i && 'mt-10'}`}>
              <div className='grid place-content-center min-w-[40px] max-w-[40px] md:max-w-max md:min-w-[60px] aspect-square'>
                <Image
                  className="dark:invert"
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <p className='text-2xl'>{item.title}</p>
                <p className='text-lg max-w-screen-sm'><i>{item.subtitle?.includes("998") ? (
                    <a href="tel: +998997766777">
                      {item.subtitle}
                    </a>
                ) : item.subtitle}</i></p>
              </div>
            </div>
          ))}
          <h1 className="max-w-fit mt-10 p-2 rounded-lg bg-[#ff510080] shadow-customShadow flex justify-center gap-2 ">
            <span
              className={`text-stroke-white font-semibold font-[family-name:var(--font-poppins)] text-brand text-4xl`}
            >
              BARICHEM
            </span>

            <span className="inline-flex flex-col justify-start items-start self-center">
              <span
                className={`font-[family-name:var(--font-poppins)] font-medium text-transparent tracking-normal text-stroke-white text-2xl`}
              >
                INC.
              </span>
            </span>
          </h1>
        </div>

        <div className='w-full md:w-[400px] md:max-w-[50%] overflow-hidden rounded'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5633316969765!2d69.2023099117653!3d41.27484270284871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a3d32fd18b5%3A0xab5f80ce6aeaa081!2sBunyodkor%20Avenue%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1738853173804!5m2!1sen!2s" 
            width="600" 
            height="300" 
            className='w-full h-full max-h-[350px] min-h-[250px] '
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto border-t-[0.5px] border-white mt-14 text-center'>
        <p className='text-sm mt-5'>2025</p>
      </div>
    </div>
  )
}
