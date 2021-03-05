import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import {BrowserRouter} from 'react-router-dom';
function load() {
  return(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}
ReactDOM.render(load(), document.getElementById('root'));