import React from 'react'
import {assets}from '../assets/frontend_assets/assets'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium '>
<img src={assets.logo} className='w-36' alt=""/>
<h1>mido</h1>

    </div>
  )
}

export default Navbar