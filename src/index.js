import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import './fontawsome'
setTimeout(hideElement, 1000)

function hideElement(){
    ReactDOM.render(<App/>, document.getElementById("root"));
    document.getElementById("startup").style.display = 'none';
}