import React from 'react'
import About1 from '../Assets/About-us1.png' 
import About2 from '../Assets/About-us2.png'

function About() {
  return (
    <div className='max-w-7xl mx-auto flex flex-col gap-[64px] md:gap-[70px] mt-[50px] pb-[50px] px-[10px] md:pb-[100px] md:px-0 md:mt-[140px]  '>
        <div className='flex flex-col-reverse gap-[32px] md:flex-row justify-between items-center'>
            <div className='w-[100%] mx-auto md:w-[50%]'>
                <p className='mb-[12px] text-[24px] font-bold text-[#FF6F29]'>Who is Imoodev</p>
                <h3 className='mb-[18px] font-semibold text-[36px]/[40px] lg:text-[40px]/[58px]'>We are a service engaged in digital marketing</h3>
                <p className='mb-[24px] mb:mb-[40px] text-[16px]/[32px]'>Do not miss this opportunity. With our experience, Whello will find something unique in your brand. Analyze and try to follow what your audience really likes and is looking for, so that your customers will be more loyal to you.</p>
                <button className='w-[100%] transition-all delay-200 ease-in cursor-pointer bg-[var(--color-text)] text-[var(--color-bg)] md:w-auto py-[16px] px-[42px] font-semibold'>Consult now</button>
            </div>
            <div className='w-[100%] md:w-[50%]'>
                <img className='w-full' src={About1}/>
            </div>
        </div>
        <div className='flex flex-col-reverse gap-[32px] md:flex-row-reverse justify-between items-center'>
            <div className='w-[100%] mx-auto md:w-[50%]'>
                <h3 className='mb-[18px] font-semibold text-[36px]/[40px] lg:text-[40px]/[58px]'>Expand your business by building a website online</h3>
                <p className='mb-[24px] mb:mb-[40px] text-[16px]/[32px]'>Do not miss this opportunity. With our experience, Whello will find something unique in your brand. Analyze and try to follow what your audience really likes and is looking for, so that your customers will be more loyal to you.</p>
                <button className='w-[100%] transition-all delay-200 ease-in cursor-pointer bg-[var(--color-text)] text-[var(--color-bg)] md:w-auto py-[16px] px-[42px] font-semibold'>Consult now</button>
            </div>
            <div className='w-[100%] md:w-[50%]'>
                <img className='w-full' src={About2}/>
            </div>
        </div>
    </div>
  )
}

export default About