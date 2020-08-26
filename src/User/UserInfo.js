import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserInfo = () => {
  const user = useContext(UserContext);
  return (
    <div className="float-right">
      {
        (user.firstName || user.lastName)
          ? (
            <div className="flex">
              {user.avatarUrl && (
              <div className="w-10">
                <img src={user.avatarUrl} alt="user.firstName user.lastName" data-testid="user-avatar" className="rounded" />
              </div>
              )}
              <div className="flex-row text-sm">
                <div>{user.firstName}</div>
                <div>{user.lastName}</div>
              </div>
            </div>
          )
          : <div>anonymous</div>
      }
    </div>
  );
};

export default UserInfo;
