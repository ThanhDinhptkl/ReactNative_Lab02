import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import DataList from './components/DataList';

export default function App() {
  return (
    <Provider store={store}>
      <DataList />
    </Provider>
  );
}

