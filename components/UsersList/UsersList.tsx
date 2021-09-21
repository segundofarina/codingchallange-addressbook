import React from 'react';
import { FC } from 'react';
import classNames from 'classnames';
import UserModel from '../../models/UserModel';
import UserCard from '../UserCard';
import './styles';
import FlipCard from '../FlipCard/FlipCard';
import EditCard from '../EditCard/EditCard';

type UsersListProps = {
  users: UserModel[];
  updateUser: (user: UserModel) => void;
};

const UsersList: FC<UsersListProps> = ({ users, updateUser }) => {
  if (users.length === 0)
    return <div className="UsersList-no-results">No results</div>;
  const { id, name, email, phone, picture, address } = users[0];
  return (
    <div className="UserList-root">
      <FlipCard
        renderBackCard={(toggle) => {
          return (
            <EditCard updateInfo={updateUser} user={users[0]} cancel={toggle} />
          );
        }}
        renderFrontCard={(toggle) => {
          return (
            <div>
              <UserCard
                key={`${id}`}
                name={name}
                email={email}
                phone={phone}
                address={address}
                profileImgUrl={picture.large}
                onEditClick={() => toggle()}
              />
            </div>
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
