import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const BestSeller = () => {
    const{products}=useContext(ShopContext);
    const [BestSeller,setBestSeller]=useState([]);
    useEffect(()=>{
const bestProduct=products.filter((item)=>(item.BestSeller));
setBestSeller(bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10'>
<div className='text-center text-3'>

</div>
    </div>
  )
}

export default BestSeller