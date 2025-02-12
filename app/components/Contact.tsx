import Image from 'next/image'
import React from 'react'

const data = [
  {
    title: "Адрес производства",
    subtitle: "Ташкентская область, Ахангаранский район, ТУТ мфй, улица Бунёдкор, дом 334",
    icon: "https://ceramitech.uz/wp-content/uploads/2022/08/location.svg"
  },
  {
    title: "Юридический адрес",
    subtitle: "Республика Узбекистан, Ферганская область, Узбекистанский район, городок Шурсув",
    icon: "https://ceramitech.uz/wp-content/uploads/2022/08/location.svg"
  },
  {
    title: "Телефон офиса продаж",
    subtitle: "+998(99)776-67-77",
    icon: "https://ceramitech.uz/wp-content/uploads/2022/08/call.svg",
    link: "tel:998997766777"
  },
  // {
  //   title: "Почта",
  //   subtitle: "info@barichem.com",
  //   icon: "/email-icon.svg",
  //   link: "mailto:info@barichem.com"
  // },
]
export const Contact = () => {
  return (
    <div className='relative leading-[150%] text-[#2d2a26]  bg-white p-[7vh_0_5vh] border-t-[1px] border-[#D9D9D9]'>
      <div className='container grid grid-cols-1 md:grid-cols-2'>
        <div className='md:pr-4'>
          <h3 className="text-[3.2vh] font-bold mb-[5vh]">
            Контакты
          </h3>
          {data.map((item, i) => (
            <div key={i} className={`flex items-start gap-3 ${i && 'mt-10'}`}>
              <div className='grid place-content-center min-w-[48px] max-w-[48px] md:max-w-max md:min-w-[48px] aspect-square'>
                <Image
                  className=""
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <p className='text-[1.4vh] font-medium text-brand'>{item.title}</p>
                <p className='text-[1.6vh] font-semibold mt-[0.8vh]'>{item.link ? (
                    <a href={item.link}>
                      {item.subtitle}
                    </a>
                ) : item.subtitle}</p>
              </div>
            </div>
          ))}

          <div className='flex mt-[7vh]'>
            <div className='p-[10px] grid place-content-center'>
              <Image
                className=""
                src="https://ceramitech.uz/wp-content/uploads/2024/01/post-1.png"
                alt="albus"
                width={164}
                height={57}
              />
            </div>
            <div className='p-[10px] grid place-content-center ml-[30px]'>
            <Image
              className=""
              src="https://ceramitech.uz/wp-content/uploads/2022/08/sticky-logo.svg"
              alt="albus"
              width={134}
              height={32}
            />
            
            </div>
          </div>
        </div>

        <div className='mt-[5vh] md:mt-0 border md:absolute top-0 bottom-0 right-0 md:w-6/12 h-[76vh] md:h-full'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.5633316969765!2d69.2023099117653!3d41.27484270284871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a3d32fd18b5%3A0xab5f80ce6aeaa081!2sBunyodkor%20Avenue%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1738853173804!5m2!1sen!2s" 
            className='w-full h-full'
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </div>
  )
}
