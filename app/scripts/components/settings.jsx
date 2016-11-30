var React = require('react');

var LimitedNav = require('./templates/limitedNav.jsx').LimitedNav;

var SettingsContainer = React.createClass({
  render: function(){
    return (

      <div>
        <LimitedNav />
        <h2>User Settings</h2>
      </div>

    );
  }
});

module.exports = {
  SettingsContainer: SettingsContainer
};
