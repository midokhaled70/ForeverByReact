import React, { use, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const {ProductId}=useParams();
  const {products}=useContext(ShopContext);
  const [productData,setProductData]=useState(false);

  const fetchProductData=async()=>{

  }
  useEffect(()=>{

  },[])
  return (
    <div>Product</div>
  )
}

export default Product