import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Client from 'yllet';
import { Provider } from 'yllet-react';

const client = new Client({
    endpoint: 'https://demo.wp-api.org/wp-json/'
});

ReactDOM.render(
  <Provider client={client}>
    <App />
  </Provider>,
  document.getElementById('root')
);
