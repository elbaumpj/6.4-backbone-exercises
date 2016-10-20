var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/directory');
var views = require('./views/directory');


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    this.collection = new models.PeopleCollection();
    this.collection.fetch();
  },
  index: function() {
    var addPersonForm = new views.PersonAddForm({collection: this.collection});
    $('.app').html(addPersonForm.render().el);
  }
});


var router = new AppRouter();

module.exports = router;
