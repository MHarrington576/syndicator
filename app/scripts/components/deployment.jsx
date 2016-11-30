var React = require('react');
// var google = require('react-google-maps');

var MainNav = require('./templates/navbar.jsx').MainNav;

var DeploymentContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        <h2>Syndicate Deployment</h2>

        <span>MapTest</span>

      </div>

    );
  }
});

module.exports = {
  DeploymentContainer: DeploymentContainer
};
