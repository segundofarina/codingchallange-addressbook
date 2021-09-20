import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

const App = () => {
  return <div>Hello world </div>;
};

render(<App />, document.getElementById('root'));
