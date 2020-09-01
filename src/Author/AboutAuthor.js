import React from 'react';
import Avatar from './Avatar';

const AboutAuthor = (props) => {
  if (!props.author) {
    return <div>Информация об авторе отсутствует.</div>;
  }

  const {
    author: { Name, Email, Info, AvatarUrl }
  } = props;

  return (
    <div className="flex p-1 border-t">
      <Avatar avatar={AvatarUrl} name={Name} />
      <div className="flex-row ml-2">
        <div className="font-bold">{Name}</div>
        <div>{Email}</div>
        <div>{Info}</div>
      </div>
    </div>
  );
};

export default AboutAuthor;
