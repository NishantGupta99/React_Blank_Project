import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from "./FirstComponent";
import Userform from "./Userform";

ReactDOM.render(
  <React.StrictMode>
    <Userform />
    <FirstComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

