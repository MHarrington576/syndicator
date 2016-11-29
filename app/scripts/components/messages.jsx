var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var MessagesContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        <h2>Syndicate Messages</h2>
      </div>

    );
  }
});

module.exports = {
  MessagesContainer: MessagesContainer
};
