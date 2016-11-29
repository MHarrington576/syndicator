var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var DeploymentContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        <h2>Syndicate Deployment</h2>
      </div>

    );
  }
});

module.exports = {
  DeploymentContainer: DeploymentContainer
};
