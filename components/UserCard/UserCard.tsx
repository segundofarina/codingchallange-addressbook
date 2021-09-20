import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

type UserCardProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  profileImgUrl: string;
};

const UserCard: React.FC<UserCardProps> = ({ name, email, phone, address }) => {
  return (
    <div style={{ margin: '20px', border: '1px solid', padding: '20px' }}>
      <div>{name}</div>
      {/* tag as mail to */}
      <div>{email}</div>
      {/* tag as call  */}
      <div>{phone}</div>
      <div>{address}</div>
    </div>
  );
};

UserCard.displayName = 'UserCard';
export default UserCard;
