// Third-party dependencies
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

// Local dependencies
var setUpParse = require('./parseUtilities').setUpParse;
var LoginContainer = require('./components/login.jsx').LoginContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  initialize: function(){
    setUpParse('tiyfeefall2016', 'parietinaeumbra')
  },

  index: function(){
    ReactDOM.render(
      React.createElement(LoginContainer),
      document.getElementById('app')
    )
  }
});

// Instantiate the router
var router = new AppRouter();

module.exports = router;
