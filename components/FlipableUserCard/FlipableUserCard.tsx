import React, { FC } from 'react';
import FlipCard from '../FlipCard/FlipCard';
import EditCard from '../EditCard/EditCard';
import UserCard from '../UserCard';
import UserModel from '../../models/UserModel';

type FlipableUserCardProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  profileImgUrl: string;
  updateInfo: (
    user: Pick<UserModel, 'name' | 'email' | 'phone' | 'address'>
  ) => void;
};

const FlipableUserCard: FC<FlipableUserCardProps> = ({
  name,
  email,
  phone,
  address,
  profileImgUrl,
  updateInfo,
}) => {
  return (
    <FlipCard
      renderBackCard={(toggle) => {
        return (
          <EditCard
            updateInfo={(user) => {
              updateInfo(user);
              toggle();
            }}
            user={{ name, email, phone, address }}
            cancel={() => toggle()}
          />
        );
      }}
      renderFrontCard={(toggle) => {
        return (
          <UserCard
            name={name}
            email={email}
            phone={phone}
            address={address}
            profileImgUrl={profileImgUrl}
            onEditClick={() => toggle()}
          />
        );
      }}
    />
  );
};

FlipableUserCard.displayName = 'FlipableUserCard';
export default FlipableUserCard;
