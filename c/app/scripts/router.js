var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/posts');
var views = require('./views/posts');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'post/:id': 'getBody'
  },
  initialize: function(){
    this.collection = new models.PostCollection();
  },
  index: function() {
    var titleView = new views.PostTitleView({collection: this.collection});
    this.collection.fetch();
    $('#title-list').html(titleView.el);

  },
  getBody: function(body){
    var self = this;
    var post = this.collection.get(body);
    var bodyView = new views.PostBodyView({model: post});

    //In case page loads before we can grab the post body
      if(!post){
        this.collection.fetch().then(function(){
          self.getBody(body);
        });
        return;
    }
  $('#body-section').html(bodyView.el);
  }
});

var router = new AppRouter();

module.exports = router;
