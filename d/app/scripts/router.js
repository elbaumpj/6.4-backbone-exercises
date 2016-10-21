var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var models = require('./models/bookmarks.js');
var views = require('./views/bookmarks.js');


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'link/:id': 'showLinkTags'
  },
  initialize: function(){
    this.collection = new models.LinkCollection();
  },
  index: function(){
    var addLinkForm = new views.AddLinkForm({collection: this.collection});
    var linkListing = new views.AddLinkListing({collection: this.collection});
    var tagListing = new views.AddTagListing({collection: this.collection});
    // var tagList = _.uniq(this.collection.pluck('tagListing'));
    //
    // console.log(tagList);
     this.collection.fetch();

    $('.app').html(addLinkForm.render().el);
    $('#list-url').html(linkListing.el);
    $('#list-tags').html(tagListing.el);
  },
  showLinkTags: function(tag){
    var self = this;
    var link = this.collection.get(tag);

  }
});


var router = new AppRouter();

module.exports = router;
