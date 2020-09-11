import React, { useContext } from 'react';

import { WishlistContext } from './WishlistProvider';
import Button from '../common/Button';

const AddToWishlistButton = ({ book }) => {
  const { wishlist, setWishlist } = useContext(WishlistContext);

  const handleClick = () => {
    if (wishlist.includes(book.Id)) {
      setWishlist(wishlist.filter(item => item !== book.Id));
    } else {
      setWishlist(wishlist.concat(book.Id));
    }
  };

  const buttonLabel = () => {
    if (wishlist.includes(book.Id)) {
      return 'Убрать из желаемого';
    }
    return 'Добавить в желаемое';
  };

  return (<Button className="ml-2" onClick={handleClick}>{buttonLabel()}</Button>);
};

export default AddToWishlistButton;
