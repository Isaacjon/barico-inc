
export const Header = () => {

  return (
    <div id='main' className='header-bg-mobile sm:header-bg relative sm:bg-left-top md:bg-center pt-[80px] min-h-screen grid place-content-center'>
      <div className="container py-[40px] pt-[55px]h-full">
        {/* subtitle */}
        <h2 className='font-brand text-2xl text-center md:text-6xl 2xl:text-7xl !leading-[150%] font-bold'>
        ПРОИЗВОДСТВО <br />
        УГЛЕКИСЛОГО БАРИЯ
        </h2>
        
        <hr className="border-2 max-w-[50%] m-auto my-4 border-[#ff510080]"/>
        
        <div className="flex flex-col items-center justify-center max-w-min m-auto">
        {/* title */}
        <h1 className='px-6 rounded-lg md:rounded-3xl bg-[#ff510080] shadow-customShadow font-russo text-xl text-center flex justify-center gap-2 '>

          <span className={`text-stroke-white font-semibold font-[family-name:var(--font-poppins)] leading-[100%] 2xl:leading-[130%] text-brand text-[44px] md:text-[100px] 2xl:text-[140px]`}>
            BARICHEM
          </span>

          <span className='inline-flex flex-col justify-start items-start self-center'>
            <span className={`font-[family-name:var(--font-poppins)] font-medium text-transparent tracking-normal text-stroke-white md:text-stroke-white-2 text-2xl md:text-[70px] 2xl:text-[100px]`}>
              INC.
            </span>
          </span>
        </h1>

        <div className='relative w-full mt-4 px-6'>
          <div className='bg-brand h-5/6 w-[3px] absolute top-[50%] -translate-y-1/2'></div>
          <p className='font-[family-name:var(--font-montserrat)] pl-4 md:text-[25px] font-medium w-full md:whitespace-nowrap'>
            Перспективный бизнес с высокой рентабельностью 
          </p>
        </div>
        </div>

        <div className=' mt-14 flex flex-col lg:flex-row items-center gap-5'>
          <div className="">

          </div>

          <div className='self-end mx-auto mt-10 lg:mt-0'>
            {/* <Button>Batafsil biling</Button> */}

          </div>
        </div>
      </div>
    </div>

  )
}
