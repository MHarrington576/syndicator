var Backbone = require('backbone');

var Announcement = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://shadow-of-the-colossus-server.herokuapp.com/classes/SyndicatorAnnouncements',

  defaults: {
    heading: '',
    body: ''
  },

  postAnnouncement: function(heading, body){
    var heading = this.get('heading');
    var body = this.get('body');

    this.save();
  },

  deleteAnnouncement: function(heading, body){
    var heading = this.get('heading');
    var body = this.get('body');

    this.destroy();
  }
});

var AnnouncementCollection = Backbone.Collection.extend({
  model: Announcement
});

module.exports = {
  Announcement: Announcement,
  AnnouncementCollection: AnnouncementCollection
};
