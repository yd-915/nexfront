import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ContextStore } from '../client/src/ContextStore';

import '../client/src/index.css';
import App from '../client/src/App';
import reportWebVitals from '../client/src/reportWebVitals';

ReactDOM.render(
   // <React.StrictMode>
      <ContextStore>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ContextStore>,
   // </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
