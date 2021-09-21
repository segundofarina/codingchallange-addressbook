import React, { ChangeEvent, FC, useState } from 'react';
import './styles.css';
import UserModel from '../../models/UserModel';
import cancelIcon from '../../resources/icons/cancel-close.svg';

type EditCardProps = {
  user: Pick<UserModel, 'name' | 'email' | 'phone' | 'address'>;
  updateInfo: (
    user: Pick<UserModel, 'name' | 'email' | 'phone' | 'address'>
  ) => void;
  cancel: () => void;
};

const EditCard: FC<EditCardProps> = ({ user, updateInfo, cancel }) => {
  const { name, email, phone, address } = user;
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPhone, setEditedPhone] = useState(phone);
  const [editedAddress, setEditedAddress] = useState(address);

  const onChangeHandler =
    (update: (val: string) => void) => (e: ChangeEvent<HTMLInputElement>) =>
      update(e.target.value);

  return (
    <div className="Edit-Card-root">
      <div>
        <img
          src={cancelIcon}
          alt="edit"
          className="Edit-Card-Cancel-Icon"
          onClick={() => cancel()}
        />
      </div>
      <form
        className="Edit-Card-back-root"
        onSubmit={(e) => {
          e.preventDefault();
          updateInfo({
            email: editedEmail,
            address: editedAddress,
            name: editedName,
            phone: editedPhone,
          });
        }}
      >
        <div>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            id="name"
            value={editedName}
            className="Edit-Card-input"
            onChange={onChangeHandler(setEditedName)}
          />
        </div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input
            id="email"
            value={editedEmail}
            className="Edit-Card-input"
            onChange={onChangeHandler(setEditedEmail)}
          />
        </div>
        <div>
          <div>
            <label htmlFor="phone">Phone</label>
          </div>
          <input
            id="phone"
            value={editedPhone}
            className="Edit-Card-input"
            onChange={onChangeHandler(setEditedPhone)}
          />
        </div>
        <div>
          <div>
            <label htmlFor="address">Address</label>
          </div>
          <input
            id="address"
            value={editedAddress}
            className="Edit-Card-input"
            onChange={onChangeHandler(setEditedAddress)}
          />
        </div>
        <div className="Edit-card-buttons">
          <button type="submit" className="Edit-card-buttons-update">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

EditCard.displayName = 'EditCard';
export default EditCard;
