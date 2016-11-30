var React = require('react');

var LimitedNav = require('./templates/limitedNav.jsx').LimitedNav;

var MessagesContainer = React.createClass({
  render: function(){
    return (

      <div>
        <LimitedNav />
        <h2>User Messages</h2>
      </div>

    );
  }
});

module.exports = {
  MessagesContainer: MessagesContainer
};
