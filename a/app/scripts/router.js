var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/blog');
var views = require('./views/blog');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function() {
    this.collection = new models.PostCollection();
    this.collection.fetch();
  },
  index: function() {

    var postForm = new views.PostFormView({collection: this.collection});

  }
});



var router = new AppRouter();

module.exports = router;
