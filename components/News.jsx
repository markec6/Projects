import React from 'react'
import News1 from '../Assets/News1.png'
import News2 from '../Assets/News2.png'
import News3 from '../Assets/News3.png'

function News() {
  return (
    <div className='px-[10px] mb-[50px] md:mb-[100px] md:px-0 max-w-7xl mx-auto pt-[50px] md:pt-[100px]'>
        <h2 className='pb-[50px] text-center md:text-left text-[30px] md:text-[36px] lg:text-[42px] font-bold'>latest news from Imoodev</h2>
        <div className='flex flex-col gap-[54px] md:flex-row md:gap-[24px] '>
            <div className='bg-[var(--color-text)] text-[var(--color-bg)]'>
                <img src={News1} className='w-[100%]'/>
                <div className='pb-[12px] px-[20px]'>
                    <div className='flex justify-between pt-[6px] md:pt-[10px]'>
                        <p className='text-[#8E919A] text-[12px]'>September 9, 2020</p>
                        <p className='text-[#8E919A] text-[12px]'>Posted By Admin</p>
                    </div>
                    <h3 className='text-[24px] md:text-[20px] lg:text-[24px]    font-semibold my-[16px]'>Introducing Uncode 2.3.0 and the WooCommerce Builder</h3>
                    <p className='text-[16px]/[28px]'>We are pleased to bring you Uncode 2.3.0 the latest and greatest version of our pixel-perfect, creative, multipurpose WordPress . . . .</p>
                </div>
            </div>
            <div className='bg-[var(--color-text)] text-[var(--color-bg)]'>
                <img src={News2} className='w-[100%]'/>
                <div className='p-[12px]'>
                    <div className='flex justify-between pt-[6px] md:pt-[10px]'>
                        <p className='text-[#8E919A] text-[12px]'>September 9, 2020</p>
                        <p className='text-[#8E919A] text-[12px]'>Posted By Admin</p>
                    </div>
                    <h3 className='text-[24px] md:text-[20px] lg:text-[24px] font-semibold my-[16px]'>Introducing Uncode 2.3.0 and the WooCommerce Builder</h3>
                    <p className='text-[16px]/[28px]'>We are pleased to bring you Uncode 2.3.0 the latest and greatest version of our pixel-perfect, creative, multipurpose WordPress . . . .</p>
                </div>
            </div>
           <div className='bg-[var(--color-text)] text-[var(--color-bg)]'>
                <img src={News3} className='w-[100%]'/>
                <div className='p-[12px]'>
                    <div className='flex justify-between pt-[6px] md:pt-[10px]'>
                        <p className='text-[#8E919A] text-[12px]'>September 9, 2020</p>
                        <p className='text-[#8E919A] text-[12px]'>Posted By Admin</p>
                    </div>
                    <h3 className='text-[24px] md:text-[20px] lg:text-[24px] font-semibold my-[16px]'>Introducing Uncode 2.3.0 and the WooCommerce Builder</h3>
                    <p className='text-[16px]/[28px]'>We are pleased to bring you Uncode 2.3.0 the latest and greatest version of our pixel-perfect, creative, multipurpose WordPress . . . .</p>
                </div>
            </div>
        </div>
    </div>
  )
}

// Ovde smo mogli da napravimo array sa vise objekata (kartica)
// samo sam napravio na drugaciji nacin
// da su ovo news koje bi se stalno azurirale ili dodavale, sigurno bi koristili array i map za prikaz 

export default News