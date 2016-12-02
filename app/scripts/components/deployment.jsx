var React = require('react');

var PlanetCollection = require('../models/planet').PlanetCollection;
var MainNav = require('./templates/navbar.jsx').MainNav;

var DeploymentContainer = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    $.ajax({
      url: 'http://http.cat/404.jpg',
      method: 'GET'
    });
  },

  render: function(){
    return (

      <div>
        <MainNav />
        <h2>Syndicate Deployment</h2>
        <h3>Select this button to find a new home for you and all your imaginary friends!</h3>

        <div id="planet-listing">{}</div>

        <form onSubmit={this.handleSubmit}>
          <input className="btn btn-lg btn-danger" type="submit" />
        </form>

        <p>Powered by SWAPI</p>

      </div>

    );
  }
});

// Yelp API Consumer Key: JjJYjN73o58v5MI6Qe1qmw //
// Yelp API Token: y6iAJ_CD9FW71TLFYlA9IIKfXOuC8_4k //

module.exports = {
  DeploymentContainer: DeploymentContainer
};
