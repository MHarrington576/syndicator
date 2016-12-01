var React = require('react');

var models = require('../models/syndicate');
var LimitedNav = require('./templates/limitedNav.jsx').LimitedNav;

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

var WarRoomContainer = React.createClass({
  // getInitialState: function(){
  //   return {
  //     syndicateList: new models.SyndicateToSelectCollection
  //   };
  // },
  //
  // componentWillMount: function(){
  //   var syndicateList = this.state.syndicateList;
  //   syndicateList.fetch().then(function(response){
  //     this.setState({syndicateList: response.results});
  //   });
  // },

  render: function(){
    return (

      <div>
        <LimitedNav />
        <h2 className="war-room-heading">The War Room</h2>

        <hr />

        <a href="#syndicate/:id">Riverside HS Speech &amp; Debate</a>

        <br /><br />

        <div className="war-room-function">
          <a href="#user/:id/create-syndicate">
            <i className="fa fa-plus-circle fa-2x wr-icon" aria-hidden="true"></i>
            <span>Create a ne&#119; Syndicate</span>
          </a>
        </div>

        <br /><br />

        <div className="war-room-function">
          <a href="#user/:id/war-room" className="open-modal">
            <i className="fa fa-plus-circle fa-2x wr-icon" aria-hidden="true"></i>
            <span>Join a Syndicate</span>
          </a>
        </div>
      </div>

    );
  }
});

module.exports = {
  WarRoomContainer: WarRoomContainer
};
