import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts,setFilterProduct]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [category,setCategory]=useState([]);
  const toggleCategory=(e)=>{
    if (category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item !==e.target.value));
    }else{
      setCategory(prev=>[...prev,e.target.value]);
    }
  }
useEffect(()=>{
setFilterProduct(products)
},[])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t'>
      <div className='min-w-60'>
        <p
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
        </p>

        {/* Categories Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" onChange={toggleCategory} value="Men" /> Men
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" onChange={toggleCategory} value="Women" /> Women
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" onChange={toggleCategory} value="Kids" /> Kids
            </label>
          </div>
        </div>

        {/* Type Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Topwear" /> Topwear
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Bottomwear" /> Bottomwear
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Winterwear" /> Winterwear
            </label>
          </div>
        </div>
      </div>
{/* Right Side */}
<div className='flex-1'>
<div className='flex justify-between text-base sm:text-2xl mb-4'>
<Title text1={'ALL '} text2={'Collections'}/>
{/* product Sort */}
<select className='border-2 border-gray-300 text-sm px-2'>
  <option value="relavant">Sort By Relevance</option>
  <option value="Low">Sort By:Low to Hight</option>
  <option value="Hight">Sort By : Hight to Low</option>
</select>

</div>
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
{
  filterProducts.map((item,index)=>(
    <ProductItem key={index} item={item} name={item.name} id={item._id} price={item.price} image={item.image} />
  ))
}
</div>
  </div>

      {/* Product Grid */}
   
    </div>
  );
};

export default Collection;
