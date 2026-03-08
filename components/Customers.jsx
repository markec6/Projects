import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

function Customers() {

    let testimonials = [
        {
            num: '01',
            naslov: 'Expand your business to the online realm',
            desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat '
        },
        {
            num: '02',
            naslov: 'Expand your business to the online realm',
            desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat '
        },
        {
            num: '03',
            naslov: 'Enjoy the results of selling online',
            desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat '
        }
    ]

  return (
    <div className='pb-[64px] md: pb-[32px] pt-[30px] md:pt-[60px] bg-[var(--color-text)] text-[var(--color-text)]'>
        <div className='max-w-7xl mx-auto px-[10px] md:px-0'>
            <div>
                <h2 className='text-[30px] md:text-[36px] lg:text-[42px] font-bold text-center mb-[40px]'>We always prioritize customer satisfaction</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-[32px]'>
                {testimonials.map((test) => {
                    return <div className='flex flex-col justify-between p-[24px] md:p-[32px] lg:-[32px] bg-[var(--color-bg)] text-[var(--color-text)] rounded-[5px]'>
                        <p className='text-[64px] mb-[32px]'>{test.num}</p>
                        <h3 className='text-[24px]/[34px] pb-[16px] font-semibold'>{test.naslov}</h3>
                        <p className='text-[16px]/[28px]'>{test.desc}</p>
                        <div className='flex gap-[12px] items-center mt-[48px]'>
                            <Link className='font-semibold'>Learn more</Link>
                            <FaArrowRightLong />
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Customers