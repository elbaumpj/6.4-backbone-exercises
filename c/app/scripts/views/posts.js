var Backbone = require('backbone');
var $ = require('jquery');

//templates
var postTitleTemplate = require('../../templates/posttitletemplate.hbs');

//views

var PostTitleView = Backbone.View.extend({
  tagName: 'ul',
  className: 'well',
  template: postTitleTemplate,
  // events: {
  //   'ready': 'appendTitles'
  // },
  // appendTitles: function(e){
  //   e.preventDefault();
  //   console.log("appending titles");
  //   var postTitles = {
  //     title: $('.titles').html
  //   }
  //
  //   this.collection.create({postTitles});
  //
  // },
  render: function(){
    this.$el.html(this.template());

    return this;
  }
});


module.exports = {
  PostTitleView: PostTitleView
}
