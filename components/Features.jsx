import React from 'react'
import edit from '../Assets/Edit.png'
import heart from '../Assets/Heart.png'
import category from '../Assets/Category.png'
import img from '../Assets/Image.png'

function Features() {
    const cards = [
        {
            imageUrl: edit,
            podnaslov: 'Web Development',
            opis: 'Easy to modify from the provided template settings page without the need for complicated coding skills.',
            background: '#C9A227'
        },
        {
            imageUrl: heart,
            podnaslov: 'UI Design',
            opis: 'Equipped with basic SEO techniques such as H1 H2 H3 and breadcrumbs so that the website is liked by search engines like Google, Bing etc.',
            background: '#00B4D8'
        },
        {
            imageUrl: img,
            podnaslov: 'Graphic Design',
            opis: 'Elegant and professional design, your website will have more value & attractive in the eyes of your visitors or customers.',
            background: '#7400B8'
        },
        {
            imageUrl: category,
            podnaslov: 'Invitations and gifts',
            opis: 'Easy to use even for new people and comes with documentation to make it easier',
            background: '#FF4D6D'
        }
    ]


  return (
    <div className='max-w-7xl mx-auto px-[10px] md:p-0 mt-[40px] md:mt-[140px]'>
        <div className='flex flex-col md:flex-row items-center mb-[40px] gap-[16px]'>
            <div className='w-[100%] md:w-[50%]'>
                <p className='text-[24px] font-bold text-[#FF6F29] mb-[8px]'>What Does Imoodev Do?</p>
                <h2 className='text-[30px] md:text-[36px] lg:text-[42px] font-bold mt-[8px]'>Analyzing Target Customers with the Right!</h2>
            </div>
            <p className='w-[100%] md:w-[50%] text-[16px]/[32px]'>Do not miss this opportunity. With our experience, Whello will find something unique in your brand. Analyze and try to follow what your audience really likes and is looking for, so that your customers will be more loyal to you.</p>
        </div>
        <div className='flex flex-col md:grid grid-cols-2 gap-[24px]'>
            {cards.map((card) => {
                return <div className='p-[32px] border  border-[#D1D5DB] flex flex-col gap-[32px] rounded-[4px]'>
                    <img className='size-[32px] p-[5px] rounded-2xl' style={{backgroundColor: card.background}} src={card.imageUrl}/>
                    <h4 className='text-[24px] font-semibold'>{card.podnaslov}</h4>
                    <p className='text-[16px]/[28px]'>{card.opis}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Features