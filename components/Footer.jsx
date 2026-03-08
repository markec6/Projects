import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";


function Footer() {
  return (
    <div className='px-[10px] md:px-0 mt-[15px] md:mt-[100px]'>
        <div className=' py-[40px] max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-[24px]'>   
            <div className='w-[100%] md:w-[50%] mb-[42px] flex flex-col md:flex-row justify-around'>
                <div>
                    <p className='text-[20px] font-bold mb-[12px]'>Imoodev</p>
                    <div className='flex items-center gap-[12px] mb-[24px]'>
                        <MdLocationOn className='size-[18px]' />
                        <p>Beograd, Novi Beogard</p>
                    </div>
                    <div className='flex items-center gap-[12px] mb-[24px]'>
                        <IoMail className='size-[16px]' />
                        <p>marjanovica773@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-[12px] mb-[24px]'>
                        <FaPhone className='size-[16px]'/>
                        <p>0628723227</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[18px]'>
                    <p className='text-[20px] font-semibold'>Our Feature</p>
                    <p className='text-[#8E919A]'>Paying Off Debt</p>
                    <p className='text-[#8E919A]'>Planning Work</p>
                    <p className='text-[#8E919A]'>Our Promise</p>  
                    <p className='text-[#8E919A]'>Employee Benefits</p>
                </div>
            </div>

            <div className='flex flex-col w-[100%] gap-[24px] md:w-[50%] md:flex-row justify-around'>
                <div className='flex flex-col gap-[18px]'>
                    <p className='text-[20px] font-semibold'>Our Services</p>
                    <p className='text-[#8E919A]'>Digital Service</p>
                    <p className='text-[#8E919A]'>Marketing Service</p>
                </div>
                <div className='flex flex-col gap-[18px]'>
                    <p className='text-[20px] font-semibold'>Join our email</p>
                    <p className='text-[#8E919A]'>Enter your email address for joined our agency</p>
                    <div className='flex flex-row gap-[8px] items-center'>
                        <input className='w-[50%] outline-none rounded-[4px] p-[8px] w-[100%] bg-[var(--color-text)] text-[var(--color-bg)]'></input>
                        <FaLocationArrow className='size-[32px] p-[7px] bg-[var(--color-text)] text-[var(--color-bg)] rounded-[4px]' />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[var(--color-text)] text-[var(--color-bg)] py-[20px]'>
            <p className='tex-[14px] font-normal text-center'>Copyright all, made by ( <span className='font-bold'>Aleksa Marjanovic</span>)</p>
        </div>
    </div>
  )
}

export default Footer