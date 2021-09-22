import React from 'react';
import { FC } from 'react';
import UserModel from '../../models/UserModel';
import FlipableUserCard from '../FlipableUserCard';
import './styles';

type UsersListProps = {
  users: UserModel[];
  updateUser: (user: UserModel) => void;
};

const UsersList: FC<UsersListProps> = ({ users, updateUser }) => {
  if (users.length === 0)
    return <div className="UsersList-no-results">No results</div>;
  return (
    <div className="UserList-root">
      {users.map(({ id, name, email, phone, picture, address, gender }) => (
        <FlipableUserCard
          key={`${id}`}
          name={name}
          email={email}
          phone={phone}
          address={address}
          profileImgUrl={picture.large}
          updateInfo={(user) => updateUser({ id, picture, gender, ...user })}
        />
      ))}
    </div>
  );
};

UsersList.displayName = 'UsersList';
export default UsersList;
