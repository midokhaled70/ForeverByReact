import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets';
const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 border-t'>
<Title text1={'CONTACT'} text2={'US'}/>
    </div>
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
<img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=''/>
<div className='flex flex-col justify-center items-start gap-6'>
<p className='font-semibold text-xl text-gray-600'>OUR Store</p>
<p className='text-gray-500'>443443 willms station <br/> mnasoura,dd Egypt </p>
<p className='text-gray-500'>Tel: (+20) 103-048-0083 <br/> Email: ahmedkhaled33@gmail.com</p>
<p className='font-semibold text-xl text-gray-600'  >mido khaled</p>
<p className='text-gray-500'>Learn more</p>
<button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
</div>
    </div>
    </div>
  )
}

export default Contact
