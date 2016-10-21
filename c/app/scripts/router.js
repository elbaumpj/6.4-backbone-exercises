var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/posts');
var views = require('./views/posts');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    this.collection = new models.PostCollection();
    // this.collection.fetch();

  },
  index: function() {
    var titleView = new views.PostTitleView({collection: this.collection});
    // var bodyView = new views.PostBodyView({collection: this.collection});
    this.collection.fetch()
    $('#title-list').html(titleView.el);
  }
});

var router = new AppRouter();

module.exports = router;
