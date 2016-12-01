var Backbone = require('backbone');
var React = require('react');

var User = require('../models/user').User;
require('../router');

var SignUpForm = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },

  handleEmail: function(e){
    e.preventDefault();
    this.setState({username: e.target.value});
  },

  handlePassword: function(e){
    e.preventDefault();
    this.setState({password: e.target.value});
  },

  handleSubmit: function(e){
    e.preventDefault();
    var username = this.state.username;
    var password = this.state.password;

    this.props.signUpNewUser(username, password);
    this.setState({username: '', password: ''});
  },

  render: function(){
    return (

      <form id="sign-up-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input className="form-control" id="email" type="email" name="email" placeholder="Please enter a valid email address" value={this.state.username} onChange={this.handleEmail} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="form-control" id="password" type="password" name="password" placeholder="Please enter a password" value={this.state.password} onChange={this.handlePassword} />
        </div>

        <input className="btn btn-primary" type="submit" value="Sign Up" />
      </form>

    )
  }
});

var LoginForm = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },

  handleEmail: function(e){
    e.preventDefault();
    this.setState({username: e.target.value});
  },

  handlePassword: function(e){
    e.preventDefault();
    this.setState({password: e.target.value});
  },

  handleSubmit: function(e){
    e.preventDefault();
    var username = this.state.username;
    var password = this.state.password;

    this.props.logInUser(username, password);
  },

  render: function(){
    return (

      <form id="login-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input className="form-control" id="email" type="email" name="email" placeholder="Please enter your email address" value={this.state.username} onChange={this.handleEmail} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="form-control" id="password" type="password" name="password" placeholder="Please enter your password" value={this.state.password} onChange={this.handlePassword} />
        </div>

        <input className="btn btn-success" type="submit" value="Log In" />
      </form>

    )
  }
});

var HomepageContainer = React.createClass({
  getInitialState: function(){
    return {
      user: new User()
    };
  },

  signUpNewUser: function(username, password){
    this.state.user.set({username: username, password: password});
    this.state.user.signUp();
  },

  logInUser: function(username, password){
    this.state.user.set({username: username, password: password});
    this.state.user.logIn(username, password);
  },

  render: function(){
    return (

    <div className="homepage">
      <div className="well">
        <h1>Syndicator</h1>
        <h4 id="homepage-logo-caption">A customizable team-management system</h4>
      </div>
      <div>
        <div className="row">
          <div className="col-md-3 col-xs-6">
            <h2>Log In</h2>
            <LoginForm logInUser={this.logInUser} />
            <h2>Sign Up</h2>
            <SignUpForm signUpNewUser={this.signUpNewUser} />
          </div>
        </div>
      </div>
    </div>

    )
  }
});

module.exports = {
  HomepageContainer: HomepageContainer
};
