var React = require('react');

var LimitedNav = require('./templates/limitedNav.jsx').LimitedNav;

function randomCode(length){
  Math.random().toString(16).slice(2);
}

var SyndicateForm = React.createClass({
  getInitialState: function(){
    var name = '';
    var description = '';
    var iconUrl = '';
    var bannerUrl = '';
    var execCode = '';
    var sponsCode = '';
    var dirCode = '';
    var collabCode = '';

    return {
      name: name,
      description: description,
      iconUrl: iconUrl,
      bannerUrl: bannerUrl,
      execCode: execCode,
      sponsCode: sponsCode,
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
    var syndicateExecCode = 1;
    this.setState({execCode: syndicateExecCode});
  },

  setSyndicateSponsCode: function(){
    var syndicateSponsCode = 2;
    this.setState({sponsCode: syndicateSponsCode});
  },

  setSyndicateDirCode: function(){
    var syndicateDirCode = 3;
    this.setState({dirCode: syndicateDirCode});
  },

  setSyndicateCollabCode: function(){
    var syndicateCollabCode = 4;
    this.setState({collabCode: syndicateCollabCode});
  },

  render: function(){
    return (
      <div>
        <p>Executive Code: <span className="code">{(Math.random() / 3.1415926535897932383).toString(36).toUpperCase().slice(18)}</span></p>
        <p>Sponsor Code: <span className="code">{(Math.random() / 3.1415926535897932383).toString(36).toUpperCase().slice(18)}</span></p>
        <p>Director Code: <span className="code">{(Math.random() / 3.1415926535897932383).toString(36).toUpperCase().slice(18)}</span></p>
        <p>Collaborator Code: <span className="code">{(Math.random() / 3.1415926535897932383).toString(36).toUpperCase().slice(18)}</span></p>

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
