import React from 'react';
import classNames from 'classnames';
import styles from './styles';
import './styles.css';

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
    <div className="User-Card-root">
      <div className="User-Card-front-root">
        <div className="User-Card-front-hero">
          <div className="User-Card-front-name">{name}</div>
        </div>
        <img src={profileImgUrl} className="User-Card-front-profile-img" />
        <div className="User-Card-front-email">
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
        <div>{address}</div>
      </div>
    </div>
  );
};

UserCard.displayName = 'UserCard';
export default UserCard;
