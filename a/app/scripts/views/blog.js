var $ = require('jquery');
var Backbone = require('backbone');




//views

var PostFormView = Backbone.View.extend({
  el: '#blog-post-form',
  events: {
    'submit': 'addPost'
  },
  addPost: function(e) {
    e.preventDefault();
    console.log("post added");
    var postTitle = $('#post-title').val();
    var postBody = $('#post-body').val();

    this.collection.create ({
      title: postTitle,
      body: postBody
    });

    $('#post-title').val("");
    $('#post-body').val("");
  },
  render: function() {
    return this;
  }
});




module.exports = {
  PostFormView: PostFormView
}
