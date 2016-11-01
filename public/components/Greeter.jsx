var React = require('react');
var GreeterForm = require('GreeterForm');
var GreeterMessage = require('GreeterMessage');

var Greeter = React.createClass({

  getDefaultProps: function() {
    return {
      name: "React",
      message: "You're welcome here!"
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewSubmit: function(submit) {
    this.setState(submit);
    console.log(submit);
  },
  render: function(){
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewSubmit={this.handleNewSubmit} />
      </div>
    );
  }
});

module.exports = Greeter;
