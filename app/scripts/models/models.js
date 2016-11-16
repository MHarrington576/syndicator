var Backbone = require('backbone');

var SyndicateToSelect = Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: {
    name: '',
    description: '',
    icon: '',
    memberCount: 0
  }
});

var SyndicateToSelectCollection = Backbone.Collection.extend({
  model: SyndicateToSelect,
  baseUrl: 'https://shadow-of-the-colossus-server.herokuapp.com/classes/Syndicates'
});

var User = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://shadow-of-the-colossus-server.herokuapp.com/users',

  parse: function(data){
    return data.results;
  },

  signUp: function(){
    var self = this;
    var username = this.get('username');
    var password = this.get('password');

    this.save().then(function(data){
      localStorage.setItem('user', JSON.stringify(self.toJSON()));
    });
  },

  signIn: function(username, password){
    var self = this;
    var loginUrl = 'https://shadow-of-the-colossus-server.herokuapp.com/' + 'login?username=' + encodeURI(username) + '&password=' + encodeURI(password);

    $.ajax(loginUrl).then(function(response){
      localStorage.setItem('token', response.sessionToken);
      Backbone.history.navigate('user/listsyndicates', {trigger: true});
    });
  }
});

module.exports = {
  User: User
};
