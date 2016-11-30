var Backbone = require('backbone');

var File = Backbone.Model.extend({
  defaults: {
    name: 'image.jpg'
  },

  urlRoot: function(){
    var url = 'https://shadow-of-the-colossus-server.herokuapp.com/files/';
    return (url + encodeURIComponent(this.get('name')));
  },

  save: function(attributes, options){
    options = options || {};
    attributes = attributes || {};

    this.set(attributes);
    var image = this.get('data');

    options.data = image;
    options.beforeSend = function(request){
      request.setRequestHeader('X-Parse-Application-Id', 'tiyfeefall2016');
      request.setRequestHeader('X-Parse-Rest-API-Key', 'parietinaeumbra');
      request.setRequestHeader('Content-Type', image.type);
    };
    options.processData = false;
    options.contentType = false;

    return Backbone.Model.prototype.save.call(this, attributes, options);
  }
});

module.exports = {
  'File': File
};
