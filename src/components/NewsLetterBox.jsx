import React from 'react'

const NewsLetterBox = () => {
const onSubmitHandler=(event)=>{
event.prventDefult();
}

  return (
    <div className='text-center'>
<p className='text-2xl font-medium text-gray-800'>
    Subscribe now & get 20% off on your first purchase
</p>
<p className='text-gray-400 mt-3'>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente nulla, quis saepe explicabo sint est. Vel nisi eius, excepturi facilis in possimus, maxime et vitae autem expedita, suscipit recusandae!

</p>
<form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx:auto my-6 border pl-3'>
  <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none " required/>
  <button className='bg-black text-white text-xs px:10 py-4' type='submit'>Submit</button>
</form>
    </div>
  )
}

export default NewsLetterBox