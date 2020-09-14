import React, { useContext } from 'react';
import { WishlistContext } from './WishlistProvider';

const AddToWishlistButton = ({ book }) => {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const handleClick = () => {

    if (wishlist.includes(book.Id)) {
      setWishlist(wishlist.filter(item => item !== book.Id));
    } else {
      setWishlist(wishlist.concat(book.Id));
    }
    console.log(wishlist)

  };

  const inWishlist = () => {
    if (wishlist.includes(book.Id)) {
      return 'Убрать';
    }
    return 'Добавить';
  };
  return (<button onClick={handleClick}>{inWishlist()}</button>);
};

export default AddToWishlistButton;
