import React from 'react'

const PlaceOrder = () => {
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
<Title text1={'pAYment'}/>
      </div>
      </div>
     

    </div>
  )
}

export default PlaceOrder