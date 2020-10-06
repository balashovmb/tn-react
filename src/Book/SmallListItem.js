import React from 'react';

const SmallListItem = React.memo((props) => {
  const {
    Cover,
    Title,
    Authors
  } = props.book;

  return (
    <div className="flex flex-row mt-2 border-t-2 pt-1">
      <div className="w-16">
        <img className="mt-1" src={Cover} alt={Title} />
      </div>
      <div className="ml-2">
        <div className="font-bold">{Title}</div>
        <div>{Authors}</div>
        <>{props.children}</>
      </div>
    </div>
  );
});

export default SmallListItem;
