import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App';


ReactDOM.render(
  <Router basename="/classical-junkie">
    <ScrollToTop/>
    <App />
  </Router>,
  document.getElementById('root')
);
