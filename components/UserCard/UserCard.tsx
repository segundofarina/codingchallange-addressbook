import React, { FC } from 'react';
import classNames from 'classnames';
import './styles.css';
import editIcon from '../../resources/icons/edit.svg';

type UserCardProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  profileImgUrl: string;
  onEditClick: () => void;
};

const UserCard: FC<UserCardProps> = ({
  name,
  email,
  phone,
  address,
  profileImgUrl,
  onEditClick,
}) => {
  return (
    <div className="User-Card-root">
      <div className="User-Card-front-root">
        <div className="User-Card-front-hero">
          <div>
            <img
              src={editIcon}
              alt="edit"
              className="User-Card-Edit-Icon"
              onClick={() => onEditClick()}
            />
          </div>
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
