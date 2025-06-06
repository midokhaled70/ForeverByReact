import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import assets from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size];
        if (quantity > 0) {
          tempData.push({
            _id: productId,
            size,
            quantity,
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 px-4 sm:px-8">
      <div className="text-2xl mb-6">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {cartData.length === 0 ? (
        <p className="text-gray-500 text-center mt-8">Your cart is currently empty.</p>
      ) : (
        <div>
          {cartData.map((item, index) => {
            const product = products.find(p => p._id === item._id);
            if (!product) return null;

            const total = product.price * item.quantity;

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_1.5fr_1fr] sm:grid-cols-[4fr_1.5fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img className="w-16 sm:w-20 object-cover" src={product.image[0]} alt={product.name} />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{product.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{currency} {product.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 text-sm">{item.size}</p>
                    </div>
                  </div>
                </div>

                <input
                  className="border max-w-14 sm:max-w-20 px-2 py-1 text-center"
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={e => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val) && val > 0) {
                      updateQuantity(item._id, item.size, val);
                    }
                  }}
                />

                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm sm:text-base whitespace-nowrap">{currency} {total}</p>
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="w-4 sm:w-5 cursor-pointer"
                    src={assets.bin_icon}
                    alt="delete"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className='flex justify-end my-20'>
<div className='w-full sm:w-[450px]'>
<CartTotal/>
<div className='w-full text-end'>
<button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROcced to checkout</button>
</div>
</div>
      </div>
    </div>
  );
};

export default Cart;
