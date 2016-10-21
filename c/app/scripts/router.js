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

    // $('li').on('click', function(){
    //   var selectedTitle = $(this);
    //   $('#body-section').append(this.body)
    //   console.log(selectedTitle);
    // });
  },
  index: function() {
    var titleView = new views.PostTitleView({collection: this.collection});
    // var bodyView = new views.PostBodyView({collection: this.collection});
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
  $('#body-section').html(bodyView.render().el);
  }
});

var router = new AppRouter();

module.exports = router;
