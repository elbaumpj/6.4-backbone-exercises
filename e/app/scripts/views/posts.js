var $ = require('jquery');
var Backbone = require('backbone');

// templates
var addFormTemplate = require('../../templates/addformtemplate.hbs');
var addTitlesTemplate = require('../../templates/addtitlestemplate.hbs');
//views

var AddPostForm = Backbone.View.extend({
  tagName: 'form',
  className: 'blog-post-form',
  template: addFormTemplate,
  events: {
    'submit': 'addLink'
  },
  render: function() {
    this.$el.append(this.template());

    return this;
  },
  addLink: function(e) {
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
  }
});

var AddTitleView = Backbone.View.extend({
  tagName: 'ul',
  template: addTitlesTemplate,
  render: function() {
    this.$el.append(this.template());

    return this;
  }
});







module.exports = {
  AddPostForm: AddPostForm,
  AddTitleView: AddTitleView
}
