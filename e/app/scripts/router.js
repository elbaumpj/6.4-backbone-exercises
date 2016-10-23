var $ = require('jquery');
var Backbone = require('backbone');
var views = require('./views/posts');
var models = require('./models/posts');

var AppRouter = Backbone.Router.extend({
  router: {
    '': 'index'
  },
  initialize: function() {
    this.collection = new models.PostCollection();
  },
  index: function () {
    var addPostForm = new views.AddPostForm();
  }
});


var router = new AppRouter();

module.exports = router;
