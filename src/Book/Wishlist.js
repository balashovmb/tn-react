import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import ListItem from './ListItem';
import { WishlistContext } from './WishlistProvider';

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <>
      <Helmet>
        <title>Список желаемого</title>
      </Helmet>
      {Object.values(wishlist).length === 0 && <div className="ml-2"> Список желаемого пуст.</div>}
      {Object.values(wishlist).map(book => (
        <div key={book.Id}>
          <ListItem book={book} />
        </div>
      ))}
    </>
  );
};

export default Wishlist;
