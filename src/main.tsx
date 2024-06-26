import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './styles/main.scss';
import { Provider } from 'react-redux';
import store from './redux/store.ts'; 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
