import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);

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
              <input className='w-3' type="checkbox" value="Men" /> Men
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Women" /> Women
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Kids" /> Kids
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

      {/* Product Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {products && products.map((product, index) => (
          <div key={index} className='border p-2 rounded shadow-sm'>
            <img src={product.image} alt={product.name} className='w-full h-40 object-cover' />
            <p className='mt-2 font-medium'>{product.name}</p>
            <p className='text-sm text-gray-500'>{product.category}</p>
            <p className='font-bold'>{product.price} {product.currency || '$'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
