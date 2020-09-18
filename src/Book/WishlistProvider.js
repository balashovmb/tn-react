import React, { useState, createContext } from 'react';

export const WishlistContext = createContext({
  wishlist: {},
  setWishlist: () => { },
});

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || {});

  const saveInStorage = (wishlist) => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };

  const toggleWishlistItem = (book) => {
    if (wishlist[book.Id]) {
      delete wishlist[book.Id];
    } else {
      wishlist[book.Id] = book;
    }
    setWishlist(wishlist);
    saveInStorage(wishlist);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist, toggleWishlistItem }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
