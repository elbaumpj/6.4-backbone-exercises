var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

//templates
var addLinkTemplate = require('../../templates/addlinktemplate.hbs');
var addLinkListTemplate = require('../../templates/addlinklisttemplate.hbs');
var addTagTemplate = require('../../templates/addtagtemplate.hbs');
//views

var AddLinkForm = Backbone.View.extend({
  tagName: 'form',
  className: 'well',
  template: addLinkTemplate,
  events: {
    'submit': 'addLink'
  },
  render: function(){
    this.$el.html(this.template());

    return this;
  },
  addLink: function(e){
    e.preventDefault();
    console.log('Form submitted');

    this.collection.create({
      url: $('#link-url').val(),
      title: $('#link-title').val(),
      tagListing: $('#link-tag').val(),
    });

    $('#link-url').val("");
    $('#link-title').val("");
    $('#link-tag').val("");

  }
});

var AddLinkListing = Backbone.View.extend({
  tagName: 'ul',
  className: 'well',
  template: addLinkListTemplate,
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'reset', this.renderFilteredCollection);
  },
  render: function(link){

    var link = link.toJSON();
    this.$el.append(this.template(link));

    return this;
  },

  renderFilteredCollection: function(tag){
    console.log(tag);

    var self = this;
    this.$el.empty();
    tag.forEach(function(item){

      console.log(item.toJSON());
      self.$el.append(self.template(item.toJSON()));
    });

    return this;
  }
});

var AddTagListing = Backbone.View.extend({
  tagName: 'ul',
  // className: 'well',
  template: addTagTemplate,
  events: {
    'click .well-tag': 'filterLinks'
  },
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(tag){
    var filteredTags = _.uniq(this.collection.pluck('tagListing'));
    this.$el.html('');
    filteredTags.forEach(this.renderChild, this);
    return this;
  },
  renderChild: function(tag){
    var _id = tag.replace(/\s/g,'').toLowerCase();
    var object = {_id: _id, tagListing: tag}
    this.$el.append(this.template(object));
  },

  filterLinks: function(e) {
    e.preventDefault();
    var filterValue = e.target.innerText;
    console.log(this.collection);

    var filteredCollection = this.collection.where({
      tagListing: filterValue
    });

    this.collection.reset(filteredCollection);

    return this;



  }
});








module.exports = {
  AddLinkForm: AddLinkForm,
  AddLinkListing: AddLinkListing,
  AddTagListing: AddTagListing
}
