var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var AgendaContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        <h2>Syndicate Agenda</h2>

      </div>

    );
  }
});

module.exports = {
  AgendaContainer: AgendaContainer
};
