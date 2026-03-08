import React from 'react'

function Letter() {
  return (
    <div className='py-[32px] md:py-[56px] bg-[var(--color-text)] text-[var(--color-bg)] px-[10px] md:px-0 max-w-7xl mx-auto'>
        <div className='flex flex-col items-center'>
            <h2 className='text-[30px] md:text-[36px] lg:text-[42px] font-semibold'>Subs Our Newsletter for Daily Update</h2>
            <div className='flex flex-col bg-[var(--color-bg)] w-[100%] md:w-[60%] mx-auto md:flex-row pr-0 md:pr-[10px]  py-[10px] mt-[32px] md:mt-[56px]'>
                <input placeholder='Your email address here' className='p-[20px] text-[var(--color-text)] w-[100%] md:w-[100%] outline-none'>
                </input>
                <button className=' w-[95%] md:w-[auto] mx-auto md:px-[42px] py-[12px] bg-[var(--color-text)] text-[var(--color-bg)] font-semibold transition-all duration-200 ease-in-out'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Letter