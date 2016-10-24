var $ = require('jquery');
var Backbone = require('backbone');
var views = require('./views/posts');
var models = require('./models/posts');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'post/id': 'displayBody'
  },
  initialize: function() {
    this.collection = new models.PostCollection();

  },
  index: function() {
    var addPostForm = new views.AddPostForm({collection: this.collection});
    var addTitleView = new views.AddTitleView({collection: this.collection});

  this.collection.fetch();


    $('.form-container').html(addPostForm.render().el);
    $('.titles').html(addTitleView.el);

  },
  displayBody: function() {
    var self = this;
    var post = this.collection.get(body);
    var postBodyView = new views.PostBodyView({model: post});

    //In case page loads before we can grab the post body
      if(!post){
        this.collection.fetch().then(function(){
          self.getBody(body);
        });
        return;
    }
  $('.post-body').html(postBodyView.el);
  }
});


var router = new AppRouter();

module.exports = router;
