var Backbone = require('backbone');

var Planet = Backbone.Model.extend({
  defaults: {
    visible: true
  }
});

var PlanetCollection = Backbone.Collection.extend({
  model: Planet,
  url: 'http://swapi.co/api/planets/',

  parse: function(data){
    return data.results;
  }
});

module.exports = {
  Planet: Planet,
  PlanetCollection: PlanetCollection
};
