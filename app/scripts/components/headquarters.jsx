var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;
var AddAnnouncement = require('./templates/announcementModal.jsx').AddAnnouncementModal;
var Announcement = require('../models/announcement').Announcement;
var AnnouncementCollection = require('../models/announcement').AnnouncementCollection;

var AnnouncementComponent = React.createClass({
  render: function(){
    var announcement = this.props.announcement;
    var announcementId = announcement.get('objectId');
    return (

      <div>
        <h3 className="ui-announcement-heading">{announcement.get('heading')}</h3>
        <p>{announcement.get('body')}</p>
        <br />
        <button className="btn btn-danger ann-delete-btn" type="submit" deleteAnnouncement={this.deleteAnnouncement} onSubmit={announcement.removeAnnouncement}>Delete</button>
        <button className="btn btn-primary ann-edit-btn">Edit</button>

        <hr />
      </div>

    );
  }
});

var HQContainer = React.createClass({
  getInitialState: function(){
    return {
      announcement: new Announcement(),
      announcementCollection: new AnnouncementCollection()
    };
  },

  componentWillMount: function(){
    var self = this;
    this.state.announcementCollection.fetch().then(function(){
      self.setState({announcementCollection: self.state.announcementCollection});
    });
  },

  addNewAnnouncement: function(heading, body){
    this.state.announcement.set({heading: heading, body: body});
    this.state.announcement.postAnnouncement(heading, body);
  },

  removeAnnouncement: function(){
    this.state.announcement.deleteAnnouncement(objectId);
  },

  render: function(){
    var announcementList = this.state.announcementCollection.map(function(announcement){
      return (
        <AnnouncementComponent key={announcement.cid} announcement={announcement} />
      );
    });
    return (

      <div>
        <MainNav />
        <AddAnnouncement addNewAnnouncement={this.addNewAnnouncement} />

        <aside className="col-sm-3 col-xs-12">
          <h2>Riverside HS Speech &amp; Debate</h2>
          <div className="syndciate-logo" />
          <p>
            This group is dedicated to providing you with important information about upcoming Riverside Speech and Debate events and activities. It will be revised on a regular basis, and out-of-date or off-topic posts will be deleted. If you have general questions to ask or important speech and debate information to share, do it here.<br /><br />
            2012, 2013, 2014, 2015 and 2016 South Carolina State Champions<br />
            2012 and 2015 SC NSDA District Cumulative Points Champion<br />
            2013 NSDA Leading Chapter for Excellence in Speech<br />
            2014 NSDA School of Excellence in Speech<br />
            2013 and 2016 NSDA School of Honor in Speech<br />
            2014 SC NSDA District Champions in Speech<br />
            2016 SC NSDA District Champions in Debate<br />
            2016 SC NSDA District Champions in Congress<br />
          </p>
        </aside>

        <div className="announcement-board col-sm-9 col-xs-12">
          <h2>Announcements</h2>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#announcement-modal">
            <span>Add an Announcement</span>
          </button>
          <br />
          <hr />

          {announcementList}

        </div>
      </div>

    );
  }
});

var el = document.getElementById('')

module.exports = {
  HQContainer: HQContainer
};
