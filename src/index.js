import React from 'react';
import ReactDOM from 'react-dom';
//import FirstComponent from "./FirstComponent";
//import Userform from "./Userform";
//import NestedComponent from "./NestedComponent";
import BookStore from "./BookStore";

ReactDOM.render(
  <React.StrictMode>
    <BookStore />

  </React.StrictMode>,
  document.getElementById('root')
);

