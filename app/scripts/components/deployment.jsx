var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var NearbyMap = React.createClass({
  render: function(){
    return (

      <div>
        <span>Map</span>
      </div>

    );
  }
});

var DeploymentContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        <h2>Syndicate Deployment</h2>

        <NearbyMap />
      </div>

    );
  }
});

module.exports = {
  DeploymentContainer: DeploymentContainer
};
