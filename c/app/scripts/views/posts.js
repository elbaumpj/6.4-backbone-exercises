var Backbone = require('backbone');
var $ = require('jquery');

//templates
var postTitleTemplate = require('../../templates/posttitletemplate.hbs');

//views

var PostTitleView = Backbone.View.extend({
  tagName: 'li',
  className: 'well',
  template: postTitleTemplate,
  events: {
    'ready': 'appendTitles'
  },
  appendTitles: function(e){
    e.preventDefault();


  },
  render: function(){
    this.$el.html(this.template());

    return this;
  }
});
