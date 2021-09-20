import React from 'react';
import { createContext, useEffect, useMemo, useState, useContext } from 'react';
import UserModel from '../models/UserModel';
import { getUsers } from '../requests/users';

type UsersContextProps = {};
type QueryStatus = 'idle' | 'success' | 'loading' | 'error';

const UsersContext = createContext<
  | {
      users: UserModel[];
      updateUser: (user: UserModel) => void;
      status: QueryStatus;
    }
  | undefined
>(undefined);

const useUsers = () => {
  const context = useContext(UsersContext);
  if (context === undefined) {
    throw new Error(' must be used within a UsersContextProvider');
  }
  return context;
};

/**
 * Custom hook to handle Users
 */
export const UsersContextProvider: React.FC<UsersContextProps> = ({
  children,
}) => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [status, setStatus] = useState<QueryStatus>('idle');

  useEffect(() => {
    const fetchAsync = async () => {
      setStatus('loading');
      try {
        const _users = await getUsers();
        setUsers(_users);
        setStatus('success');
      } catch (e) {
        setStatus('error');
      }
    };
    fetchAsync();
  }, []);

  const updateUser = async (updatedUser: UserModel) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.login.uuid === updatedUser.login.uuid) return updatedUser;
        return user;
      })
    );
  };

  /* Custom hook public interface */
  return (
    <UsersContext.Provider
      value={{
        users,
        updateUser,
        status,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default useUsers;
