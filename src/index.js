import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './components/Helper/Redux/Store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserProvider } from './components/Helper/UserContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId="692883285002-nqn6bjqmv9o8rvgk52qc8s4ft9pe7fpk.apps.googleusercontent.com"
      >
        <UserProvider>
          <App />
        </UserProvider>
      </GoogleOAuthProvider>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
