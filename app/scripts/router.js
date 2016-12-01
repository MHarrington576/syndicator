// Third-party dependencies
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

// Local dependencies
var setUpParse = require('./parseUtilities').setUpParse;
var TestingComponent = require('./components/testing.jsx').TestingComponent;
var HomepageContainer = require('./components/homepage.jsx').HomepageContainer;
var UserCreationContainer = require('./components/createUser.jsx').UserCreationContainer;
var WarRoomContainer = require('./components/warRoom.jsx').WarRoomContainer;
var CreateSyndicateContainer = require('./components/createSyndicate.jsx').CreateSyndicateContainer;
var SettingsContainer = require('./components/settings.jsx').SettingsContainer;
// var MessagesContainer = require('./components/messages.jsx').MessagesContainer;
var HQContainer = require('./components/headquarters.jsx').HQContainer;
var AgendaContainer = require('./components/agenda.jsx').AgendaContainer;
var DeploymentContainer = require('./components/deployment.jsx').DeploymentContainer;
var DossierContainer = require('./components/dossier.jsx').DossierContainer;
var RosterContainer = require('./components/roster.jsx').RosterContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'homepage',
    'testing': 'testing',
    'user/create': 'createUser',
    'user/:id/war-room': 'warRoom',
    'user/:id/create-syndicate': 'createSyndicate',
    // 'user/:id/messages': 'messages',
    'user/:id/settings': 'settings',
    'syndicate/:id': 'headquarters',
    'syndicate/:id/agenda': 'agenda',
    'syndicate/:id/exec/deployment': 'deployment',
    'syndicate/:id/exec/roster': 'roster',
    'syndicate/:id/user/:id/dossier': 'dossier'
  },

  initialize: function(){
    setUpParse('tiyfeefall2016', 'parietinaeumbra');
  },

  homepage: function(){
    ReactDOM.render(
      React.createElement(HomepageContainer, {router: this}),
      document.getElementById('app')
    );
  },

  testing: function(){
    ReactDOM.render(
      React.createElement(TestingComponent, {router: this}),
      document.getElementById('app')
    );
  },

  createUser: function(){
    ReactDOM.render(
      React.createElement(UserCreationContainer, {router: this}),
      document.getElementById('app')
    );
  },

  warRoom: function(){
    ReactDOM.render(
      React.createElement(WarRoomContainer, {router: this}),
      document.getElementById('app')
    );
  },

  createSyndicate: function(){
    ReactDOM.render(
      React.createElement(CreateSyndicateContainer, {router: this}),
      document.getElementById('app')
    );
  },

  // messages: function(){
  //   ReactDOM.render(
  //     React.createElement(MessagesContainer, {router: this}),
  //     document.getElementById('app')
  //   );
  // },

  settings: function(){
    ReactDOM.render(
      React.createElement(SettingsContainer, {router: this}),
      document.getElementById('app')
    );
  },

  headquarters: function(){
    ReactDOM.render(
      React.createElement(HQContainer, {router: this}),
      document.getElementById('app')
    );
  },

  agenda: function(){
    ReactDOM.render(
      React.createElement(AgendaContainer, {router: this}),
      document.getElementById('app')
    );
  },

  deployment: function(){
    ReactDOM.render(
      React.createElement(DeploymentContainer, {router: this}),
      document.getElementById('app')
    );
  },

  roster: function(){
    ReactDOM.render(
      React.createElement(RosterContainer, {router: this}),
      document.getElementById('app')
    );
  },

  dossier: function(){
    ReactDOM.render(
      React.createElement(DossierContainer, {router: this}),
      document.getElementById('app')
    );
  }

});

// Instantiate the router
var router = new AppRouter();

module.exports = router;
