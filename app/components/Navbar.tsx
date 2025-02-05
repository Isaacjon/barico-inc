/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState, } from "react"

export const Navbar = () => {
  const [visible, setVisible] = useState(false)
  console.log('visible', visible)
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
    <div className="fixed z-50 w-full  transition-all duration-300"
      style={{ backgroundColor: `${true ? '#ffffffc6' : ''}`, boxShadow: "0 8px 11px rgba(0, 0, 0, 0.04)" }}
      // style={{ backgroundColor: `${true ? 'rgb(21 21 21 / 0.6)' : ''}`, boxShadow: "0 8px 11px rgba(255, 255, 255, 0.4)" }}
    >
      <nav className="container relative flex justify-between items-center min-h-[80px] md:max-h-[80px]">

        <div className="absolute max-w-[152px] w-[10vw] min-w-[82px] z-10">
          {/* <img src={logo} alt="barico" className="w-full h-full" /> */}
          <h1 className="text-md text-black whitespace-nowrap font-bold">BARICHEM INC.</h1>
          {/* <svg viewBox="0 0 78 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-black stroke-black dark:fill-white dark:stroke-white h-auto w-full transition-transform group-hover:scale-110"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.60437 5.7827C6.60437 4.90573 6.16007 4.46343 5.2839 4.46343C4.3993 4.46343 3.96503 4.90573 3.96503 5.7827V13.7047C3.96383 14.5889 4.3993 15.0312 5.2839 15.0312C6.16007 15.0312 6.60437 14.5889 6.60437 13.7047V12.4437H5.89814V8.4847H10.5674V13.7047C10.5674 17.2275 8.80583 18.9898 5.2839 18.9898C1.76157 18.9898 0 17.2275 0 13.7047V5.7827C0 2.26157 1.76157 0.5 5.2839 0.5C8.80583 0.5 10.5674 2.26157 10.5674 5.7827H6.60437ZM27.7223 0.5V4.46463H22.4376V7.10397H26.4018V11.0622H22.4376V15.0324H27.7207V18.9894H18.4794V0.5H27.7223ZM41.6666 0.5L39.7753 7.10397L37.7032 0.5H33.745L37.7032 12.3879V18.9894H41.6666V12.3879L45.6329 0.5H41.6666ZM68.6951 0.5H77.9364V4.46463H75.2935V18.9894H71.3268V4.46463H68.6951V0.5ZM55.0565 5.24519C55.0859 6.06551 56.0729 7.12727 58.0245 8.42244C60.6634 10.1844 61.9875 11.946 61.9875 13.7059C61.9875 17.2287 60.2268 18.9894 56.6988 18.9894C53.1757 18.9894 51.4209 17.2287 51.4209 13.7059H55.3795C55.3795 14.6404 55.637 15.1919 56.1247 15.3823C56.3481 15.5241 56.596 15.6226 56.8756 15.6226C57.3532 15.6226 57.7549 15.3823 58.0185 15.0324C58.2013 14.7846 58.3274 14.4977 58.3274 14.1715C58.2458 13.3625 57.2721 12.3308 55.3795 11.0622C52.7406 9.30664 51.4209 7.54507 51.4209 5.7839C51.4209 2.26277 53.1757 0.5 56.6988 0.5C60.2268 0.5 61.9875 2.26277 61.9875 5.7839H58.0245C58.0245 5.33196 57.9622 4.97 57.8457 4.68839C57.8426 4.67736 57.836 4.66856 57.8289 4.65907C57.8251 4.65405 57.8212 4.64884 57.8176 4.643C57.7602 4.52288 57.6846 4.41843 57.5995 4.32082C57.3303 4.00546 56.9511 3.79255 56.5044 3.79255C55.8612 3.79255 55.3386 4.21797 55.1445 4.79686C55.0975 4.94148 55.0565 5.0845 55.0565 5.23916V5.24519Z" stroke="none"></path></svg> */}
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
                  <span className={`hover:text-brand  tracking-wider text-sm font-semibold ${activeIndex === idx ? 'text-brand' : 'text-black'}`}>{item?.text}</span>
                  {/* <img src={activeIndex === idx ? "/active-dropdown-arrow.svg" : "/dropdown-arrow.svg"} alt="dropdown_arrow" /> */}
                </a>
              </li>
            )
          })}
        </ul>

        <div onClick={() => setBurger(!burger)} className="relative w-[35px] h-[35px] ml-auto md:hidden bg-[#f5f5f5] rounded-full grid place-items-center">
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
