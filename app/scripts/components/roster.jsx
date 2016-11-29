var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var RosterContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        <h2>Syndicate Roster</h2>
      </div>

    );
  }
});

module.exports = {
  RosterContainer: RosterContainer
};
