import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/frontend_assets/assets';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [CartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size');
      return;
    }

    const cartData = structuredClone(CartItems);
    if (cartData[itemId]) {
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in CartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (!itemInfo) continue;

      for (const size in CartItems[itemId]) {
        const quantity = CartItems[itemId][size];
        if (quantity > 0) {
          totalAmount += itemInfo.price * quantity;
        }
      }
    }

    return totalAmount;
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in CartItems) {
      for (const size in CartItems[itemId]) {
        const quantity = CartItems[itemId][size];
        if (quantity > 0) totalCount += quantity;
      }
    }

    return totalCount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    const cartData = structuredClone(CartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  useEffect(() => {
    console.log('Cart Items Updated:', CartItems);
  }, [CartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    CartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
