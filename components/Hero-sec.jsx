import React from 'react'

function HeroSec() {
  return (
    <div className='max-w-7xl mx-auto pt-[30px] md:pt-[60px] pb-[26px] bg-[var(--color-bg)] text-[var(--color-text)] mx-auto transition-all duration-300 ease-in-out'>
        <h1 className=' text-[32px] md:text-[40px] lg:text-[48px] w-[80%] mx-auto text-center font-bold  '>
            We are creative agency capable of creating outstanding designs and websites
        </h1>
        <p className=' font-regular my-[28px] text-[16px]mx-auto text-center lg:w-[90%] mx-auto lg:mt-[50px]'>With Immodev Reach more customers and grow your business potential online by building a website with us</p>
        <div className='pt-[36px] w-[90%] flex flex-col gap-[16px] md:flex-row md:justify-between gap-[16px] justify-center md:w-[50%] mx-auto font-semibold'>
          <button className='transition-all delay-200 ease-in cursor-pointer bg-[var(--color-text)] text-[var(--color-bg)] py-[16px] w-[100%]'>Consult now</button>
          <button className='cursor-pointer bg-[rgba(245,158,11,0.7)] py-[16px] w-[100%]'>About us</button>
        </div>
    </div>
  )
}

export default HeroSec