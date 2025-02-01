/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState, } from "react"

export const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const [activeIndex, setActiveIndex] = useState(0)

  const [burger, setBurger] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100 && window.screen.availWidth > 768) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.addEventListener('scroll', toggleVisible)
    }
  }, [])

  return (
    <div className="bg-[#151515] md:bg-black/0 fixed z-50 w-full transition-all duration-300"
      style={{ backgroundColor: `${visible ? 'rgb(21 21 21 / 0.6)' : ''}` }}
    >
      <nav className="container relative flex justify-between items-center min-h-[80px] md:max-h-[80px]">

        <div className="absolute max-w-[152px] w-[10vw] min-w-[82px] z-10">
          {/* <img src={logo} alt="barico" className="w-full h-full" /> */}
          <h1 className="text-sm whitespace-nowrap">BARICO INC.</h1>
        </div>

        <ul
          className={`transition-all duration-300 absolute top-0 left-0 right-0 md:translate-y-0  w-full flex flex-col md:flex-row  gap-8 pt-16 px-[16px] md:px-[30px] md:pt-0  md:static h-screen md:h-auto md:justify-center  ${burger ? ' justify-start -translate-y-[0px] -z-10 bg-black/80 before' : '-translate-y-full '} 
          `}>
          {nav_menu.map((item, idx) => {
            return (
              <li
                onClick={() => {
                  setActiveIndex(idx)
                  setBurger(false)
                }}

                key={item?.id}
                className={`${activeIndex === idx ? 'activeLink' : ''} py-2 uppercase`}>
                <a href={item.link} className="flex items-center gap-[6px]">
                  <span className={`hover:text-brand  tracking-wider text-sm font-semibold ${activeIndex === idx ? 'text-brand' : 'text-white'}`}>{item?.text}</span>
                  <img src={activeIndex === idx ? "/active-dropdown-arrow.svg" : "/dropdown-arrow.svg"} alt="dropdown_arrow" />
                </a>
              </li>
            )
          })}
        </ul>

        <div onClick={() => setBurger(!burger)} className="relative w-[35px] h-[35px] ml-auto md:hidden bg-[#2B2B2B] rounded-full grid place-items-center">
          <img className={`w-[15px] ${burger ? 'scale-150' : ''}`} src={burger ? "/close-burger.png" : "/open-burger.svg"} alt="menu opener" />
        </div>

      </nav>

    </div >

  )
}

const nav_menu = [
  {
    id: 1,
    text: 'Главный',
    link: '#main'
  },
  {
    id: 2,
    text: 'Резюме проекта',
    link: '#cv'
  },
  {
    id: 3,
    text: 'Спрос', 
    link: '#demand'
  },
  {
    id: 4,
    text: 'Статистика', 
    link: '#stats'
  },
  {
    id: 5,
    text: 'Стратегия',
    link: '#strategy'
  },
]
