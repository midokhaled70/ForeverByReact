import React from 'react'


import {assets}from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
<div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
<div>
  <img src={assets} className='mb-5 w-32 'alt=''/>
  <p className='text-gray-600 w-full md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

<div>

  <p className='text-xl font-medium mb-5'> COMPANY</p>
  <ul className='flex flex-col gap-1 text-gray-600'>
<li>HOME</li>
<li>About</li>
<li>Services</li>
<li>privacy policy</li>
  </ul>
</div>

<div>
<p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
<ul className='flex flex-col gap-1 text-gray-600'>
<li>+201030840083</li>
<li>info@midokhaled.com</li>
</ul>

</div>



</div>
<div>Copyright 2023@ Midokhaled</div>
    </div>
  )
}

export default Footer