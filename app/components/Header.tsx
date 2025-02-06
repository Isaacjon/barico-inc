export const Header = () => {
  return (
    <div
      id="main"
      className="header-bg-mobile sm:header-bg relative sm:bg-left-top md:bg-center pt-[80px] min-h-screen grid place-content-center"
    >
      <div className="container py-[40px] pt-[55px] h-full">
        {/* subtitle */}
        <h2 className="font-brand text-zinc-800 text-2xl text-center md:text-[60px] !leading-[150%] font-bold">
          ПРОИЗВОДСТВО <br />
          УГЛЕКИСЛОГО БАРИЯ
        </h2>

        <hr className="border-2 max-w-[300px] m-auto my-4 border-brand" />

        <div className="flex flex-col items-center justify-center m-auto">
          {/* title */}
          <div className="relative w-full px-6">
            {/* <div className="bg-brand h-5/6 w-[3px] absolute top-[50%] -translate-y-1/2"></div> */}
            <p className="text-center font-[family-name:var(--font-montserrat)] pl-4 text-2xl md:leading-normal  md:text-[40px] font-medium w-full ">
              Перспективный бизнес с высокой рентабельностью
            </p>
          </div>
          <h1 className="mt-4 p-2 md:px-6 rounded-lg md:rounded-3xl bg-[#ff510080] shadow-customShadow text-xl text-center flex justify-center gap-2 ">
            <span
              className={`text-stroke-white font-semibold font-[family-name:var(--font-poppins)] leading-[100%] 2xl:leading-[130%] text-brand text-[34px] md:text-[60px] 2xl:text-[80px]`}
            >
              BARICHEM
            </span>

            <span className="inline-flex flex-col justify-start items-start self-center">
              <span
                className={`font-[family-name:var(--font-poppins)] font-medium text-transparent tracking-normal text-stroke-white md:text-stroke-white-2 text-2xl md:text-[50px] 2xl:text-[60px]`}
              >
                INC.
              </span>
            </span>
          </h1>


        </div>
      </div>
    </div>
  );
};
