var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');


ReactDOM.render(
  <Greeter name="Alex"  message="You're welcome here!"/>,
  document.getElementById('app')
);
