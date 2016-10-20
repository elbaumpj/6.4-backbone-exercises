var Backbone = require('backbone');

var Person = Backbone.Model.extend({
  idAttribute: '_id'
});


var PeopleCollection = Backbone.Collection.extend({
  model: Person,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/peterspeople'
});


module.exports = {
  Person: Person,
  PeopleCollection: PeopleCollection
}
