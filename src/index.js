import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App'
// import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../src/css/Navbar.css';
import '../src/css/Footer.css';
import DataProvider from './redux/Store'

ReactDOM.render(
    <DataProvider>
      <App />
    </DataProvider>,
  document.getElementById('root')
);
