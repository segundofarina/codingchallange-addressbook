import React from 'react';
import { FC } from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import UserModel from '../../models/UserModel';
import UserCard from '../UserCard';

type UsersListProps = {
  users: UserModel[];
};

const UsersList: FC<UsersListProps> = ({ users }) => {
  if (users.length === 0) return <div>No results</div>;

  return (
    <div>
      {users.map(({ id, name, email, phone, picture, address }) => (
        <UserCard
          key={`${id}`}
          name={name}
          email={email}
          phone={phone}
          address={address}
          profileImgUrl={picture.large}
        />
      ))}
    </div>
  );
};

UsersList.displayName = 'UsersList';
export default UsersList;
