var Backbone = require('backbone');
var $ = require('jquery');

//templates
var postTitleTemplate = require('../../templates/posttitletemplate.hbs');
var bodyTitleTemplate = require('../../templates/bodytitletemplate.hbs');
//views

var PostTitleView = Backbone.View.extend({
  tagName: 'ul',
  className: 'well',
  template: postTitleTemplate,
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(person){
    person = person.toJSON();
    if(person.title){
      this.$el.append(this.template(person));
    }
    return this;
  }
});

var PostBodyView = Backbone.View.extend({
  tagName: 'div',
  className: 'well',
  template: bodyTitleTemplate,
  initialize: function(){
      this.listenTo(this.model, 'changed', this.render);
    },
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    }
});


module.exports = {
  PostTitleView: PostTitleView,
  PostBodyView: PostBodyView
}
