import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import styles from './styles';
import useUsers from '../../contexts/userContext';

type UsersRouteProps = {};

const useStyles = createUseStyles(styles);

const UsersRoute: React.FC<UsersRouteProps> = (props) => {
  const classes = useStyles(props);
  const { users } = useUsers();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id.value}>{user.name}</div>
      ))}
    </div>
  );
};

UsersRoute.defaultProps = {};
UsersRoute.displayName = 'UsersRoute';
export default UsersRoute;
