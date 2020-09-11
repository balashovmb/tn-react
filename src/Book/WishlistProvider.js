import React, { useState, useEffect, createContext } from 'react';

export const WishlistContext = createContext({
  wishlist: [],
  setWishlist: () => { },
});

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    function loadWishlist() {
      const wishlist = localStorage.getItem('wishlist').split(',').filter(Boolean);
      return wishlist || [];
    }
    setWishlist(loadWishlist());
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', wishlist);
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
