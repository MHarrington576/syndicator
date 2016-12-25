var React = require('react');

var PlanetCollection = require('../models/planet').PlanetCollection;
var MainNav = require('./templates/navbar.jsx').MainNav;
var setUpParse = require('../parseUtilities').setUpParse;

var DeploymentContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        <h2>Syndicate Deployment</h2>
        <h3>Select this button to find a protector for you and all your imaginary friends!</h3>

        <form onSubmit={this.handleSubmit}>
          <input className="btn btn-lg btn-danger" type="submit" />
        </form>

        <p id="fill-me-up">TECHNICALLY A RESPONSE FROM AN API: (please have mercy on me)<br />XMLHttpRequest cannot load 'http://gateway.marvel.com/v1/public/charactersts=1&hash=21bd2e1b96821f4b508e0dd04ba254bd&apikey=809f574f31a7e23a17adc1f6a3631a58'. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:8080' is therefore not allowed access. The response had HTTP status code 404.</p>

        <p>Powered by my tears</p>

      </div>

    );
  }
});

// Yelp API Consumer Key: JjJYjN73o58v5MI6Qe1qmw //
// Yelp API Token: y6iAJ_CD9FW71TLFYlA9IIKfXOuC8_4k //

module.exports = {
  DeploymentContainer: DeploymentContainer
};
