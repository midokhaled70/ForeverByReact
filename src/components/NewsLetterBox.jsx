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
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esapiente nulla, quis saepe explicabo sint est. Vel nisi eius, excepturi facilis in possimus, maxime et vitae autem expedita, suscipit recusandae!

</p>
<form 
  onSubmit={onSubmitHandler} 
  className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
>
  <input 
    type="email" 
    placeholder="Enter your email" 
    className="w-full sm:flex-1 outline-none p-2" 
    required
  />
  <button 
    type="submit" 
    className="bg-black text-white text-sm px-6 py-3 rounded-md hover:bg-gray-800 transition-all"
  >
    Submit
  </button>
</form>

    </div>
  )
}

export default NewsLetterBox