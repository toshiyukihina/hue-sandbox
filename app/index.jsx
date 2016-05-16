import React from 'react';
import ReactDOM from 'react-dom';
require('../node_modules/bootstrap/dist/css/bootstrap.css')

import App from './components/app'

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);
