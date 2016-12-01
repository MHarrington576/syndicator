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
          <h2>Syndicate Name</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dol eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
