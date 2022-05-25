import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { GoogleOAuthProvider } from '@react-oauth/google';
import reducers from './reducers'
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider
      clientId="440373155499-8uui497562aesmiv2merbh3nuemno1ji.apps.googleusercontent.com"
    >
      <App />
    </GoogleOAuthProvider>
  </Provider>
    
);