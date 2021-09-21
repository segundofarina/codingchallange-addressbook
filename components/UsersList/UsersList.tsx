import React from 'react';
import { FC } from 'react';
import classNames from 'classnames';
import UserModel from '../../models/UserModel';
import UserCard from '../UserCard';
import './styles';
import FlipCard from '../FlipCard/FlipCard';

type UsersListProps = {
  users: UserModel[];
};

const UsersList: FC<UsersListProps> = ({ users }) => {
  if (users.length === 0)
    return <div className="UsersList-no-results">No results</div>;
  const { id, name, email, phone, picture, address } = users[0];
  return (
    <div className="UserList-root">
      <FlipCard
        renderBackCard={(toggle) => {
          return (
            <div>
              <div>back</div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggle();
                }}
              >
                flip
              </button>
            </div>
          );
        }}
        renderFrontCard={(toggle) => {
          return (
            <UserCard
              key={`${id}`}
              name={name}
              email={email}
              phone={phone}
              address={address}
              profileImgUrl={picture.large}
            />
          );
        }}
      />
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
