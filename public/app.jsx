var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var name = 'Kwon';

ReactDOM.render(
  <Greeter name={name}  message="You're welcome here!"/>,
  document.getElementById('app')
);
