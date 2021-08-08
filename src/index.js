import React from 'react';
import ReactDOM from 'react-dom';
//import FirstComponent from "./FirstComponent";
//import Userform from "./Userform";
//import NestedComponent from "./NestedComponent";
import BookStore from "./BookStore";
import './BookStore.css'; // this is how we import a css file we use the relative path and use the endtire path instead of just the name the naming convention of css is that we name it teh saem what its styling 

ReactDOM.render(
  <React.StrictMode>
    <BookStore />

  </React.StrictMode>,
  document.getElementById('root')
);

