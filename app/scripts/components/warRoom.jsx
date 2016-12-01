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
        <h2 className="war-room-heading">Your War Room</h2>

        <hr />

        <div className="card card-block col-sm-5 col-xs-12 wr-card">
          <div className="card-block">
            <h2 className="card-title">Riverside HS Speech &amp; Debate</h2>
            <p className="card-text">This group is dedicated to providing you with important information about upcoming Riverside Speech and Debate events and activities. It will be revised on a regular basis, and out-of-date or off-topic posts will be deleted. If you have general questions to ask or important speech and debate information to share, do it here.</p>
            <a href="#syndicate/:id" className="btn btn-primary wr-btn">View HQ</a>
          </div>
        </div>

        <div className="card card-block col-sm-5 col-sm-offset-1 col-xs-12 wr-card">
          <div className="card-block">
            <h2 className="card-title">Sample Syndicate</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a href="#syndicate/:id" className="btn btn-primary wr-btn">View HQ</a>
          </div>
        </div>

        <br /><br />

        <div className="col-sm-3 col-xs-9">
          <div className="war-room-function">
            <a href="#user/:id/create-syndicate">
              <i className="fa fa-plus-circle fa-2x wr-icon" aria-hidden="true"></i>
              <span>Create a ne&#119; Syndicate</span>
            </a>
          </div>

          <br />

          <div className="war-room-function">
            <a href="#user/:id/war-room" className="open-modal">
              <i className="fa fa-plus-circle fa-2x wr-icon" aria-hidden="true"></i>
              <span>Join a Syndicate</span>
            </a>
          </div>

        </div>
      </div>

    );
  }
});

module.exports = {
  WarRoomContainer: WarRoomContainer
};
