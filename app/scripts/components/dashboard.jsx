var React = require('react');

var models = require('../models/models');
var MainNav = require('./templates/navbar.jsx').MainNav;

var ListItem = React.createClass({
  render: function(){
    var syndicate = this.props.syndicate;
    return <a href={'#syndicates/' + syndicate.objectId + '/'} className="list-group-item">{syndicate.name}</a>
  }
});

var List = React.createClass({
  render: function(){
    var syndicateList = this.props.syndicates.map(function(syndicate){
      return <syndicateItem key={syndicate.objectId} syndicate={syndicate} />
    });
    return (

      <div className="row">
        <span className="lead">Your Syndicates</span>
        <div className="list-group">
          {syndicateList}
        </div>
      </div>

    );
  }
});

var DashboardContainer = React.createClass({
  getInitialState: function(){
    return {
      syndicateList: new models.SyndicateToSelectCollection
    };
  },

  componentWillMount: function(){
    var syndicateList = this.state.syndicateList;
    syndicateList.fetch().then(function(response){
      this.setState({syndicateList: response.results});
    });
  },

  render: function(){
    return (

      <div>
        <MainNav />
        <List syndicates={this.state.syndicateList} />
      </div>

    );
  }
});

module.exports = {
  DashboardContainer: DashboardContainer
};
