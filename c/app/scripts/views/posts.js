var Backbone = require('backbone');
var $ = require('jquery');

//templates
var postTitleTemplate = require('../../templates/posttitletemplate.hbs');

//views

var PostTitleView = Backbone.View.extend({
  tagName: 'ul',
  className: 'well',
  template: postTitleTemplate,
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
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
  render: function(person){
    person = person.toJSON();
    if(person.title){
      this.$el.append(this.template(person));
    }

    return this;
  }
});


module.exports = {
  PostTitleView: PostTitleView
}
