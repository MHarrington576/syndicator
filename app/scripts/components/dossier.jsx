var $ = require('jquery');
var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;
var FileModel = require('../models/file').FileModel;

var DossierContainer = React.createClass({
  getInitialState: function(){
    return {
      imageUrl: "https://unsplash.it/100/100"
    }
  },

  handleDelete: function(e){
    e.preventDefault();
    var element = document.querySelector('#dossier-avatar');
    element.style.display = "none";
  },

  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var picture = document.getElementById('user-avatar-input').files[0];
    var file = new FileModel();
    file.set('name', picture.name);
    file.set('data', picture);
    file.save().done(function(){
      var newAvatar = {
        picture: file.get('url')
      };
      self.setState({imageUrl: newAvatar.picture});
    });
    var element = document.querySelector('#dossier-avatar');
    element.style.display = "inline-block";
  },

  render: function(){
    return (

      <div>
        <MainNav />

          <div className="panel panel-primary col-xs-6 col-xs-offset-3">
            <div className="panel-heading">
              <h2 className="dossier-name">Faith Ingle</h2>
            </div>
            <div className="panel-body">

              <form id="user-creation-form" encType="multipart/form-data/" onSubmit={this.handleSubmit}>
                <input className="form-control" id="user-avatar-input" type="file" name="user-avatar" />
                <input className="btn btn-info" type="submit" name="submit" value="Upload" />
              </form>

              <form onSubmit={this.handleDelete}>
                <div className="dossier-pic">
                  <img className="dossier-img" id="dossier-avatar" src={this.state.imageUrl} />
                </div>
                <input type="submit" value="Delete" id="delete-dossier-avatar" />
              </form>
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
                  <td>Duo Interpretation</td>
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
