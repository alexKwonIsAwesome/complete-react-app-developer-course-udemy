var React = require('react');

var GreeterForm = React.createClass ({
  onFormSubmit: function(e) {
      e.preventDefault();
      var submit = {}
      var name = this.refs.name.value;
      var message = this.refs.message.value;
      
      if (name.length > 0){
        this.refs.name.value = "";
        submit.name = name;
      }

      if (message.length > 0) {
        this.refs.message.value= "";
        submit.message = message;
      }
      this.props.onNewSubmit(submit);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <textarea ref="message"/>
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = GreeterForm;
