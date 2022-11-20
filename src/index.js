import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux'

// this reducer we export from userslice we named it as userReducer because we export the reducer from the slice
import userReducer from './features/user'

const store=configureStore({
  reducer:{
    user:userReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

