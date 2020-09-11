import React, { useState, useEffect, createContext } from 'react';

export const WishlistContext = createContext({
  wishlist: '',
  setWishlist: () => { },
});

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState('dark');
  useEffect(() => {
    function loadWishlist() {
      const wishlist = localStorage.getItem('wishlist');
      return wishlist || [];
    }
    setWishlist(loadWishlist());
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', wishlist);
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist: wishlist, setWishlist: setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
