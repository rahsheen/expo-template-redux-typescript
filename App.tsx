import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { App } from './src/';

const MainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default MainApp;
