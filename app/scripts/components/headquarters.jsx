var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var HQContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        <h2>Syndicate Headquarters</h2>

      </div>

    );
  }
});

module.exports = {
  HQContainer: HQContainer
};
