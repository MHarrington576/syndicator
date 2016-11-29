var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var DossierContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />
        <h2>Syndicate Member Dossier</h2>
      </div>

    );
  }
});

module.exports = {
  DossierContainer: DossierContainer
};
