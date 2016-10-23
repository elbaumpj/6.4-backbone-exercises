var $ = require('jquery');
var Backbone = require('backbone');
var views = require('./views/posts');
var models = require('./models/posts');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function() {
    this.collection = new models.PostCollection();

  },
  index: function() {
    var addPostForm = new views.AddPostForm({collection: this.collection});
    //var addPostView = new vewis.AddPostView(collection: this.collection);
    var addTitleView = new views.AddTitleView({collection: this.collection});

  this.collection.fetch();


    $('.app').html(addPostForm.render().el);
    $('.titles').html(addTitleView.render().el);
  }
});


var router = new AppRouter();

module.exports = router;
