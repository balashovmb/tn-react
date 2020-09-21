import React, { useContext, useState } from 'react';

import { WishlistContext } from './WishlistProvider';
import Button from '../common/Button';

const AddToWishlistButton = ({ book }) => {
  const { isWishedBook, toggleWishlistItem } = useContext(WishlistContext);

  const handleClick = () => {
    toggleWishlistItem(book);
  };

  const buttonLabel = () => {
    if (isWishedBook(book.Id)) {
      return 'Убрать из желаемого';
    }
    return 'Добавить в желаемое';
  };

  return (<Button className="ml-2" onClick={handleClick}>{buttonLabel()}</Button>);
};

export default AddToWishlistButton;
