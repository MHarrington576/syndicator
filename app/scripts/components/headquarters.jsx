var React = require('react');

var MainNav = require('./templates/navbar.jsx').MainNav;
var AddAnnouncement = require('./templates/announcementModal.jsx').AddAnnouncementModal;
var Announcement = require('../models/announcement').Announcement;
var AnnouncementCollection = require('../models/announcement').AnnouncementCollection;

var AnnouncementComponent = React.createClass({
  // getInitialState: function(){
  //   var self = this;
  //   var announcementCollection = new AnnouncementCollection();
  //
  //   announcementCollection.fetch().then(function(){
  //     self.setState({collection: announcementCollection});
  //     setInterval(function(){
  //       announcementCollection.fetch().then(function(){
  //         self.setState({collection: announcementCollection});
  //       });
  //     }, 60000);
  //   })
  // },

  render: function(){
    return (

      <h3>AnnouncementComponent</h3>

    );
  }
});

var HQContainer = React.createClass({
  getInitialState: function(){
    return {
      announcement: new Announcement()
    };
  },

  addNewAnnouncement: function(heading, body){
    this.state.announcement.set({heading: heading, body: body});
    this.state.announcement.postAnnouncement(heading, body);
  },

  render: function(){
    return (

      <div>
        <MainNav />
        <AddAnnouncement addNewAnnouncement={this.addNewAnnouncement}/>

        <aside className="col-sm-3 col-xs-12">
          <h2>Riverside HS Speech &amp; Debate</h2>
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

          <AnnouncementComponent />

          <h3>This Is an Announcement</h3>
          <div>
            <p>IMG</p>
            <span>Announcing User</span>
          </div>
          <h6>00 Month 2016</h6>
          <p>Jianbing VHS kitsch scenester, tofu veniam labore eu exercitation ea messenger bag gluten-free irure placeat taxidermy. Crucifix vinyl assumenda, 3 wolf moon echo park jianbing laboris officia slow-carb fanny pack tote bag flexitarian williamsburg cardigan. Listicle before they sold out affogato sriracha, stumptown paleo normcore. Fixie proident veniam, tofu nesciunt elit assumenda taxidermy. Elit af semiotics anim skateboard direct trade celiac voluptate deserunt, enamel pin accusamus culpa four loko aesthetic pop-up. Af aute viral franzen green juice magna, irure deserunt succulents ad coloring book man bun. Tousled art party synth nostrud, literally cillum snackwave subway tile pitchfork listicle 90's occaecat post-ironic odio pour-over.</p>

          <br />
          <hr />
        </div>

      </div>

    );
  }
});

module.exports = {
  HQContainer: HQContainer
};
