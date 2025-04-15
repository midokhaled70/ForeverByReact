import React, { use, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const {ProductId}=useParams();
  const {products}=useContext(ShopContext);
  const [productData,setProductData]=useState(false);
const [image,setImage]=useState('')
  const fetchProductData=async()=>{
products.map((item)=>{
if(item._id===ProductId){
  setProductData(item)
setImage(item.image[0])
  return null;
}
})
  }
  useEffect(()=>{
    fetchProductData();
  },[ProductId,products])
  return productData   (
    <div>

    </div>
  )
}

export default Product