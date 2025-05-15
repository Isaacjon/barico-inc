"use client"

import Image from "next/image"
import { useEffect, useState, } from "react"

export const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 74) {
      setVisible(true);
    } else if (scrolled <= 74) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.addEventListener('scroll', toggleVisible)
    }
  }, [])


  const headerClass = `
  font-[family-name:var(--font-montserrat)] fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${visible ? 'bg-white text-black shadow-[0_0_3px_0_rgba(0,0,0,.06)]' : 'text-white'}
  `

  return (
    <div className="relative w-full max-w-[100vw]">
      <div className={headerClass}
      >
        <nav className=" container relative flex justify-between items-center min-h-[74px] md:max-h-[74px]">

          <div className="max-w-max">
            {/* <img src={logo} alt="barico" className="w-full h-full" /> */}
            <h1 className="text-md text-inherit whitespace-nowrap font-bold">BARICHEM INC.</h1>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <button className="max-w-max flex items-center gap-4  border-none p-2 rounded-lg">
              <Image
                className={`${visible ? '' : 'invert'} "dark:invert -mb-1"`}
                src="/phone-icon.svg"
                alt="phone icon"
                width={30}
                height={30}
              />
              
              <h1 className="text-lg text-inherit whitespace-nowrap font-bold underline underline-offset-[6px]">
                <a href="tel: +998997766777">
                  +998 (99) 776-67-77
                </a>
              </h1>
            </button>
            <button className="max-w-max flex items-center gap-4  border-none p-2 rounded-lg">
              <Image
                className={`${visible ? '' : 'invert'} "dark:invert -mb-1"`}
                src="/phone-icon.svg"
                alt="phone icon"
                width={30}
                height={30}
              />
              
              <h1 className="text-lg text-inherit whitespace-nowrap font-bold underline underline-offset-[6px]">
                <a href="tel: +998990329990">
                  +998 (99) 032-99-90
                </a>
              </h1>
            </button>

            <button className=" bg-brand font-bold text-white border-none py-[13px] px-[25px] rounded-[5vh]
            shadow-[0px_5px_30px_rgba(83,116,175,0.61)]
            ">
              Заказать звонок
            </button>
          </div>

          {/* <div onClick={() => setBurger(!burger)} className="relative w-[35px] h-[35px] ml-auto md:hidden bg-[#f5f5f5] rounded-full grid place-items-center">
            <img className={`w-[15px] ${burger ? 'scale-150' : ''}`} src={burger ? "/close-burger.png" : "/open-burger.svg"} alt="menu opener" />
          </div> */}

        </nav>

      </div >
    </div>

  )
}

// const nav_menu = [
//   {
//     id: 1,
//     text: 'Главный',
//     link: '#main'
//   },
//   {
//     id: 2,
//     text: 'Резюме проекта',
//     link: '#cv'
//   },
//   {
//     id: 3,
//     text: 'Спрос', 
//     link: '#demand'
//   },
//   {
//     id: 4,
//     text: 'Стратегия',
//     link: '#strategy'
//   },
//   {
//     id: 5,
//     text: 'Статистика', 
//     link: '#stats'
//   },

// ]
