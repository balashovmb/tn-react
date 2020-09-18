import React, { useContext, useState } from 'react';

import { WishlistContext } from './WishlistProvider';
import Button from '../common/Button';

const AddToWishlistButton = ({ book }) => {
  const { wishlist, toggleWishlistItem } = useContext(WishlistContext);

  const [itemInWishlist, setItemInWishlist] = useState(Boolean(wishlist[book.Id]));

  const handleClick = () => {
    setItemInWishlist(() => (!itemInWishlist));
    toggleWishlistItem(book);
  };

  const buttonLabel = () => {
    if (itemInWishlist) {
      return 'Убрать из желаемого';
    }
    return 'Добавить в желаемое';
  };

  return (<Button className="ml-2" onClick={handleClick}>{buttonLabel()}</Button>);
};

export default AddToWishlistButton;
