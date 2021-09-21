import React, { useMemo, useState } from 'react';
import useUsers from '../../contexts/userContext';
import UsersList from '../../components/UsersList';
import Search from '../../components/Search/Search';
import UserModel from '../../models/UserModel';
import Select, { SelectOption } from '../../components/Select/Select';
import './styles.css';

type UsersRouteProps = {};

// const useStyles = createUseStyles(styles);
type filterAttributes = 'name' | 'email' | 'address';

const sortOptions: SelectOption[] = [
  { id: 'name', label: 'Sort by: Name' },
  { id: 'email', label: 'Sort by: Email' },
  { id: 'address', label: 'Sort by: Address' },
];

const UsersRoute: React.FC<UsersRouteProps> = (props) => {
  // const classes = useStyles(props);
  const { users, status, updateUser } = useUsers();
  const [searchValue, setSearchValue] = useState('');
  const [sortAttribute, setSortAttribute] = useState<filterAttributes>('name');
  const filteredUsers = useMemo(() => {
    return users
      .filter((user) =>
        user.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )
      .sort((a, b) => {
        if (sortAttribute === 'name') {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        } else if (sortAttribute === 'email') {
          return a.email.toLowerCase().localeCompare(b.email.toLowerCase());
        } else if (sortAttribute === 'address') {
          return a.address.toLowerCase().localeCompare(b.address.toLowerCase());
        }
      });
  }, [users, searchValue, sortAttribute]);

  if (status === 'idle' || status === 'loading') return <div>loading data</div>;
  if (status === 'error') return <div>There was an error loading the data</div>;
  return (
    <div className="Users-root">
      <div className="Users-top-bar">
        <Search searchValue={searchValue} changeSearchValue={setSearchValue} />
        <Select
          options={sortOptions}
          selectedOption={sortAttribute}
          setSelectedOption={(option) =>
            setSortAttribute(option as filterAttributes)
          }
        />
      </div>
      <UsersList users={filteredUsers} updateUser={updateUser} />
    </div>
  );
};

UsersRoute.displayName = 'UsersRoute';
export default UsersRoute;
