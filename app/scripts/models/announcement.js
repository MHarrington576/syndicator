var $ = require('jquery');
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

  deleteAnnouncement: function(objectId){
    $.ajax({
      url:'https://shadow-of-the-colossus-server.herokuapp.com/classes/SyndicatorAnnouncements/' + objectId,
      type: 'DELETE',
      success: function(result){
        console.log(result);
      }
    });
  }
});

var AnnouncementCollection = Backbone.Collection.extend({
  model: Announcement,
  url: 'https://shadow-of-the-colossus-server.herokuapp.com/classes/SyndicatorAnnouncements',

  parse: function(data){
    return data.results;
  }
});

module.exports = {
  Announcement: Announcement,
  AnnouncementCollection: AnnouncementCollection
};
