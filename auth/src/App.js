import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

// import Landing from './components/Landing';
// import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

const App = ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch></Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
