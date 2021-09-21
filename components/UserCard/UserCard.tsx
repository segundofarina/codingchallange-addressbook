import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import styles from './styles';

type UserCardProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  profileImgUrl: string;
};

const UserCard: React.FC<UserCardProps> = ({
  name,
  email,
  phone,
  address,
  profileImgUrl,
}) => {
  return (
    <div style={styles.root}>
      <div>{name}</div>
      <img src={profileImgUrl} style={styles.profileImg} />
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
