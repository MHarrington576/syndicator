var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var CalendarComponent = React.createClass({
  render: function(){
    return (

      <div>
        <div id="calendar">Calendar</div>
      </div>

    );
  }
});

var AgendaContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        <h2>Syndicate Agenda</h2>

        <CalendarComponent />

      </div>

    );
  }
});

module.exports = {
  AgendaContainer: AgendaContainer
};
