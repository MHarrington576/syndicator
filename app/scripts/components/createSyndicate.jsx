var React = require('react');

var LimitedNav = require('./templates/limitedNav.jsx').LimitedNav;
var FileModel = require('../models/file').FileModel;

var SyndicateForm = React.createClass({
  getInitialState: function(){
    var name = '';
    var description = '';
    var iconUrl = '';
    var address = '';
    var city = '';
    var state = '';
    var zip = '';
    var execCode = '';
    var sponsCode = '';
    var dirCode = '';
    var collabCode = '';

    return {
      name: name,
      description: description,
      iconUrl: iconUrl,
      address: address,
      city: city,
      state: state,
      zip: zip,
      execCode: execCode,
      sponsCode: sponsCode,
      dirCode: dirCode,
      collabCode: collabCode
    };
  },

  setSyndicateName: function(e){
    var syndicateName = e.target.value;
    this.setState({name: syndicateName});
  },

  setSyndicateDescription: function(e){
    var syndicateDescription = e.target.value;
    this.setState({description: syndicateDescription});
  },

  setSyndicateIconUrl: function(e){
    var syndicateIconUrl = e.target.value;
    this.setState({iconUrl: syndicateIconUrl});
  },

  setSyndicateBannerUrl: function(e){
    var syndicateBannerUrl = e.target.value;
    this.setState({bannerUrl: syndicateBannerUrl});
  },

  setSyndicateExecCode: function(){
    var syndicateExecCode = 'execCodeValue';
    this.setState({execCode: syndicateExecCode});
  },

  setSyndicateSponsCode: function(){
    var syndicateSponsCode = 'sponsCodeValue';
    this.setState({sponsCode: syndicateSponsCode});
  },

  setSyndicateDirCode: function(){
    var syndicateDirCode = 'dirCodeValue';
    this.setState({dirCode: syndicateDirCode});
  },

  setSyndicateCollabCode: function(){
    var syndicateCollabCode = 'collabCodeValue';
    this.setState({collabCode: syndicateCollabCode});
  },

  handleSubmit: function(e){
    e.preventDefault();
    var icon = document.getElementById('icon-input')[0].files[0];
    var file = new FileModel();
    file.set('name', icon.name);
    file.set('data', icon);
    file.save().done(function(){
      var newSyndicate = {
        name: this.state.name,
        description: this.state.description,
        icon: file.get('url')
      };
      this.props.handleSubmit(newSyndicate);
    });
  },

  render: function(){
    var self = this;
    return (

      <div className="col-sm-5 col-xs-10">
        <form id="syndicate-creation-form" encType="multipart/form-data/" onSubmit={self.handleSubmit} method="POST">

          <div className="form-group">
            <label htmlFor="syndicate-name-input">Syndicate Name</label>
            <input className="form-control" id="syndicate-name-input" type="text" name="syndicate-name" onChange={self.setSyndicateName} value={self.state.name} required />
          </div>

          <div className="form-group">
            <label htmlFor="syndicate-description-input">Description</label>
            <textarea className="form-control" id="syndicate-description-input" type="text" name="syndicate-description" placeholder="What's this group all about?" required />
          </div>

          <div className="form-group">
            <label htmlFor="icon-input">Icon</label>
            <input className="form-control" id="icon-input" type="file" name="icon" />
          </div>

          <div className="form-group">
            <label htmlFor="syndicate-address-input">Street Address</label>
            <input className="form-control" id="syndicate-address-input" type="text" name="syndicate-address" placeholder="101 N Main St, Suite 400" required />
          </div>

          <div className="form-group">
            <label htmlFor="syndicate-city-input">City</label>
            <input className="form-control" id="syndicate-city-input" type="text" name="syndicate-city" placeholder="Greenville" required />
          </div>

          <div className="form-group">
            <label htmlFor="syndicate-state-input">State</label>
            <input className="form-control" id="syndicate-state-input" type="text" name="syndicate-state" placeholder="SC" required />
          </div>

          <div className="form-group">
            <label htmlFor="syndicate-zip-input">ZIP Code</label>
            <input className="form-control" id="syndicate-zip-input" type="number" name="syndicate-zip" placeholder="29601" required />
          </div>

          <input className="btn btn-info" type="submit" name="submit" value="Create Syndicate" />

        </form>

        <br />

        <p>Executive Code: <span className="code">{(Math.random() / 3.1415926535897932385).toString(36).toUpperCase().slice(18)}</span></p>
        <p>Sponsor Code: <span className="code">{(Math.random() / 3.1415926535897932385).toString(36).toUpperCase().slice(18)}</span></p>
        <p>Director Code: <span className="code">{(Math.random() / 3.1415926535897932385).toString(36).toUpperCase().slice(18)}</span></p>
        <p>Collaborator Code: <span className="code">{(Math.random() / 3.1415926535897932385).toString(36).toUpperCase().slice(18)}</span></p>
      </div>

    );
  }
});

var CreateSyndicateContainer = React.createClass({
  render: function(){
    return (

      <div>
        <LimitedNav />
        <h2>Create a ne&#119; Syndicate</h2>

        <SyndicateForm />
      </div>

    );
  }
});

module.exports = {
  CreateSyndicateContainer: CreateSyndicateContainer
};
