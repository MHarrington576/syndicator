var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;

var DossierContainer = React.createClass({
  render: function(){
    return (

      <div>
        <MainNav />

          <div className="panel panel-primary col-xs-6 col-xs-offset-3">
            <div className="panel-heading">
              <h2 className="dossier-name">Faith Ingle</h2>
            </div>
            <div className="panel-body">
              <div className="dossier-pic">
                <img className="dossier-img" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/15203302_819641611512028_6937041629310300404_n.jpg?oh=8c74737441f4c6912f7ffa2e2dcee91b&oe=58AE3EBD" />
              </div>
              <h3 className="dossier-syndicate-container"><a className="dossier-syndicate" href="#syndicate/:id">Riverside HS Speech &amp; Debate</a></h3>
              <h3 className="dossier-auth-value">Executive</h3>
            </div>

            <table className="table table-hover">
              <thead />

              <tbody>
                <tr>
                  <th scope="row" />
                  <td>Current Piece:</td>
                  <td><a href="#syndicate/:id/user/:id/dossier">"Cashmere If You Can"</a></td>
                  <td>Even&#116;:</td>
                  <td>Storytelling</td>
                </tr>
                <tr>
                  <th scope="row" />
                  <td>Current Piece:</td>
                  <td><a href="#syndicate/:id/user/:id/dossier">"Chronicles Simpkins Will Cut Your A** terisk"</a></td>
                  <td>Even&#116;:</td>
                  <td>Dramatic Interpretation</td>
                </tr>
                <tr>
                  <th scope="row" />
                  <td>Current Piece:</td>
                  <td><a href="#syndicate/:id/user/:id/dossier">"Let's Build Something Together"</a></td>
                  <td>Even&#116;:</td>
                  <td>Original Oratory</td>
                </tr>
              </tbody>
            </table>

            <div className="panel-body">
              <h3 className="dossier-syndicate-container"><a className="dossier-syndicate" href="#user/:id/war-room">Sample Syndicate</a></h3>
              <h3 className="dossier-auth-value">Collaborator</h3>
            </div>

            <table className="table">
              <thead />
              <tbody>
                <tr>
                  <th scope="row" />
                  <td>No data</td>
                </tr>
              </tbody>
            </table>

          </div>

      </div>

    );
  }
});

module.exports = {
  DossierContainer: DossierContainer
};
