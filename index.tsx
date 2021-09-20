import React, { Component } from 'react';
import { render } from 'react-dom';
import { UsersContextProvider } from './contexts/userContext';
import './style.css';
import UsersRoute from './routes/Users/UsersRoute';

interface AppProps {}
interface AppState {
  name: string;
}

const App = () => {
  return (
    <UsersContextProvider>
      <UsersRoute />
    </UsersContextProvider>
  );
};

render(<App />, document.getElementById('root'));
