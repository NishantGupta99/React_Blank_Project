import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from "./FirstComponent";
import Userform from "./Userform";
import NestedComponent from "./NestedComponent";

ReactDOM.render(
  <React.StrictMode>
    <Userform />
    <FirstComponent />
    <NestedComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

