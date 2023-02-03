import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from 'react-router-dom';



const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
     <BrowserRouter>
  <App />
  </BrowserRouter>
  );
  root.render(element);
}

setInterval(tick, 1000);


