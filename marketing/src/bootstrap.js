import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in dev and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('_marketing-dev-root');
  if (el) mount(el);
}

// We are running and container and export the mount function
export { mount };
