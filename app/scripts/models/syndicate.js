var $ = require('jquery');
var Backbone = require('backbone');

var Syndicate = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://shadow-of-the-colossus-server.herokuapp.com/classes/Syndicates',

  defaults: {
    name: '',
    description: '',
    iconUrl: '',
    bannerUrl: ''
  },

  deleteSyndicate: function(syndicateId){
    $.ajax({
      url: 'https://shadow-of-the-colossus-server.herokuapp.com/classes/Syndicates',
      type: 'DELETE',
      success: function(response){
        console.log(response);
      }
    });
  }
});

var SyndicateCollection = Backbone.Collection.extend({
  model: Syndicate
});

module.exports = {
  Syndicate: Syndicate,
  SyndicateCollection: SyndicateCollection
};
