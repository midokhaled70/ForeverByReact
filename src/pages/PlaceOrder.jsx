import React, { useContext, useState } from 'react'
import assets from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method,setMehtod]=useState('cod');
  const {navigate}=useContext(ShopContext);
  return (


    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h[80vh] border-t'>


      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
<div className='text-xl sm:text-2xl my-3'>
  <Title text1={'DElivery'} text2={'information'}/>

</div>

<div className='flex gap-3'>

<input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First name' type='text'name='' id=''/>
<input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last name' type='text'name='' id=''/>

</div>
<input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email address' type='email'name='' id=''/>
<input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' type='text'name='' id=''/>
<div className='flex gap-3'>

<input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='city' type='text'name='' id=''/>
<input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' type='text'name='' id=''/>

</div>
<div className='flex gap-3'>

<input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='ZipCode' type='number'name='' id=''/>
<input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' type='text'name='' id=''/>

</div>
<input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' type='number'name='' id=''/>

      </div>
      {/* right */}
      <div className='mt-8'>  
 <div className='mt-8 min-w-80'>
<CartTotal/>

      </div>
      <div className='mt-12'>
<Title text1={'pAYment'} text2={'METHOD'}/>
{/* Payment method selection */}
<div className='flex gap-3 flex-col lg:flex-row'>
  <div onClick={()=>{
    setMehtod('stripe')
  }} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
    <p className={`min-w-3.5 h-3.5 border rounded-full  ${method=='stripe'?'bg-green-400':''}`}></p>
    <img className='h-5 mx-4' src={assets.stripe_logo} alt=''/>
  <div onClick={()=>{
    setMehtod('razorpay')
  }} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
    <p className={`min-w-3.5 h-3.5 border rounded-full ${method=='razorpay'?'bg-green-400':''} `}></p>
    <img className='h-5 mx-4' src={assets.razorpay_logo} alt=''/>

 
  

</div>

  <div onClick={()=>{
    setMehtod('cod')
  }}  className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
    <p className={`min-w-3.5 h-3.5 border rounded-full ${method=='cod'?'bg-green-400':''} `}></p>
    <img className='h-5 mx-4' src={assets.razorpay_logo} alt=''/>
    <p className='text-gray-500 text-sm font-medium mx-4 '>Cash on deleivery</p>

 
  

</div>
 


      </div>
      <div className='w-full text-end mt-8'>
        <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLace Order</button>
      </div>
      </div>
     

    </div>
        </div>
</div>
  )
  }



export default PlaceOrder