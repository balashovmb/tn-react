import React from 'react';

const TagHot = React.memo(({ subscribers }) => (
  <span className="font-bold"> {(subscribers > 300) && '*HOT!*'}</span>
));

export default TagHot;
