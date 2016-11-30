var Backbone = require('backbone');

var Announcement = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://shadow-of-the-colossus-server.herokuapp.com/classes/SyndicatorAnnouncements',

  defaults: {
    heading: '',
    announcerAvatarUrl: '',
    announcer: '',
    date: '',
    body: ''
  }
});

var AnnouncementCollection = Backbone.Collection.extend({
  model: Announcement
});

module.exports = {
  Announcement: Announcement,
  AnnouncementCollection: AnnouncementCollection
};
