var React = require('react');

var Dossier = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://shadow-of-the-colossus-server.herokuapp.com/SyndicatorDossiers',

  createDossier: function(){
    var self = this;
    var firstName = this.get('username');
    var lastName = this.get('password');
    var email = this.get('email');

    this.save().then(function(data){
      localStorage.setItem('user', JSON.stringify(self.toJSON()));
    });
  },

  handleSubmit: function(e){
    e.preventDefault();
    var picture = document.getElementById('user-avatar-input')[0].files[0];
    var file = new FileModel();
    file.set('name', icon.name);
    file.set('data', icon);
    file.save().done(function(){
      var newAvatar = {
        icon: file.get('url')
      };
      this.props.handleSubmit(newAvatar);
    });
  }
});

module.exports = {
  Dossier: Dossier
};
