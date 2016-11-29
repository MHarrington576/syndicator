var React = require('react');

var LogOutNav = require('./templates/logOutNav.jsx').LogOutNav;

var CreateSyndicateContainer = React.createClass({
  render: function(){
    return (

      <div>
        <LogOutNav />
        <h2>Create a ne&#119; Syndicate</h2>
      </div>

    );
  }
});

module.exports = {
  CreateSyndicateContainer: CreateSyndicateContainer
};
