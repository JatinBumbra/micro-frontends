import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start the app
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);
};

// If we are in dev and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('_marketing-dev-root');
  if (el) mount(el, { defaultHistory: createBrowserHistory() });
}

// We are running and container and export the mount function
export { mount };
