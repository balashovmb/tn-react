import React from 'react';

const Avatar = ({ avatar, name }) => (
  <div className="w-16 md:w-20 flex-none">
    <img className="rounded" src={avatar} alt={avatar ? name : 'Фото отсутствует.'} />
  </div>
);

export default Avatar;
