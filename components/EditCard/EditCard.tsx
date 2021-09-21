import React, { ChangeEvent, FC, useState } from 'react';
import classNames from 'classnames';
import './styles.css';
import UserModel from '../../models/UserModel';

type EditCardProps = {
  user: UserModel;
  updateInfo: (user: UserModel) => void;
  cancel: () => void;
};

const EditCard: FC<EditCardProps> = ({ user, updateInfo, cancel }) => {
  const { name, email, phone, address, id, picture, gender } = user;
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPhone, setEditedPhone] = useState(phone);
  const [editedAddress, setEditedAddress] = useState(address);

  const onChangeHandler =
    (update: (val: string) => void) => (e: ChangeEvent<HTMLInputElement>) =>
      update(e.target.value);

  const updateUserHandler = () => {
    updateInfo({
      id,
      picture,
      email: editedEmail,
      address: editedAddress,
      gender,
      name: editedName,
      phone: editedPhone,
    });
  };
  return (
    <div className="Edit-Card-root">
      <form
        className="Edit-Card-back-root"
        onSubmit={(e) => {
          e.preventDefault();
          updateUserHandler();
        }}
      >
        <div>
          <div>Name</div>
          <input value={editedName} onChange={onChangeHandler(setEditedName)} />
        </div>
        <div>
          <div>Email</div>
          <input
            value={editedEmail}
            onChange={onChangeHandler(setEditedEmail)}
          />
        </div>
        <div>
          <div>Phone</div>
          <input
            value={editedPhone}
            onChange={onChangeHandler(setEditedPhone)}
          />
        </div>
        <div>
          <div>Address</div>
          <input
            value={editedAddress}
            onChange={onChangeHandler(setEditedAddress)}
          />
        </div>
        <div>
          <button onClick={(e) => cancel()}>Cancel</button>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

EditCard.displayName = 'EditCard';
export default EditCard;
