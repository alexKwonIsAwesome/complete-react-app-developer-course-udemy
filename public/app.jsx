var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

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

ReactDOM.render(
  <Greeter name="Alex"  message="You're welcome here!"/>,
  document.getElementById('app')
);
