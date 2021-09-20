import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import UserModel from '../../models/UserModel';
import UserCard from '../UserCard';

type UsersListProps = {
  users: UserModel[];
};

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div>
      {users.map(({ login, name, email, phone, picture, location }) => (
        <UserCard
          key={`${login.uuid}`}
          name={`${name.first} ${name.last}`}
          email={email}
          phone={phone}
          address={`${location.city}, ${location.state}`}
        />
      ))}
    </div>
  );
};

UsersList.displayName = 'UsersList';
export default UsersList;
