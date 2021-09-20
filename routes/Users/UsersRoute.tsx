import React from 'react';
import useUsers from '../../contexts/userContext';
import UsersList from '../../components/UsersList';

type UsersRouteProps = {};

// const useStyles = createUseStyles(styles);

const UsersRoute: React.FC<UsersRouteProps> = (props) => {
  // const classes = useStyles(props);
  const { users, status } = useUsers();
  if (status === 'idle' || status === 'loading') return <div>loading data</div>;
  if (status === 'error') return <div>There was an error loading the data</div>;

  if (users.length === 0) return <div>No results</div>;

  return <UsersList users={users} />;
};

UsersRoute.displayName = 'UsersRoute';
export default UsersRoute;
