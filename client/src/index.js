require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('./index.css');
const App = require('./App');
const React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
