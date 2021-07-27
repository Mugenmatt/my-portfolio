import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './assets/css/globalStyles';

ReactDOM.render(
    <Fragment>
      <GlobalStyles />
      <App />
    </Fragment>,
  document.getElementById('root')
);