var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var SettingsContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        <h2>User Settings</h2>
      </div>

    );
  }
});

module.exports = {
  SettingsContainer: SettingsContainer
};
