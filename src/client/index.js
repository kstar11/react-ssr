import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import getStore from '../store';
import Routes from '../Routes';

const App = () => (
  <Provider store={getStore()} >
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(<App />, document.querySelector('#root'));