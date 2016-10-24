var $ = require('jquery');
var Backbone = require('backbone');

// templates
var addFormTemplate = require('../../templates/addformtemplate.hbs');
var addTitlesTemplate = require('../../templates/addtitlestemplate.hbs');
var bodyDisplayTemplate = require('../../templates/bodydisplaytemplate.hbs');
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
  events: {
    'click .delete-button': 'delete'
  },
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(person){
    person = person.toJSON();
    if(person.title){
      this.$el.append(this.template(person));
    }
    return this;
  },
  delete: function() {
    this.destroy();
  }
});

var PostBodyView = Backbone.View.extend({
  tagName: 'div',
  className: 'well',
  template: bodyDisplayTemplate,
  initialize: function(){
      this.listenTo(this.model, 'changed', this.render);
    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    }
});







module.exports = {
  AddPostForm: AddPostForm,
  AddTitleView: AddTitleView,
  PostBodyView: PostBodyView
}
