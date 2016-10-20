var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models');
var views = require('./views');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    this.collection = new models.PostCollection();
    this.collection.fetch();
  },
  index: function() {
    var titleView = new views.PostTitleView(collection: this.collection);
    var bodyView = new views.PostBodyView(collection: this.collection);
  }
});

var router = new AppRouter();

module.exports = router;
