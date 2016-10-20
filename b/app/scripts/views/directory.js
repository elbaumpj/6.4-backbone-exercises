var $ = require('jquery');
var Backbone = require('backbone');
var addPersonTemplate = require('../../templates/personformtemplate.hbs');

var PersonAddForm = Backbone.View.extend({
  tagName: 'form',
  className: 'well',
  template: addPersonTemplate,
  events: {
    'submit': 'addPerson'
  },
  addPerson: function(e){
    e.preventDefault();
    console.log("Person Added!");

    // var newPerson = {
    //   first: $('#first-name').val(),
    //   last: $('#last-name').val(),
    //   address: $('address').val(),
    //   phone: $('#phone-number').val()
    // };

    this.collection.create({
      first: $('#first-name').val(),
      last: $('#last-name').val(),
      address: $('#address').val(),
      phone: $('#phone-number').val()
    });

    $('#first-name').val("");
    $('#last-name').val("");
    $('#address').val("");
    $('#phone-number').val("");
  },
  render: function(){

    this.$el.html(this.template());

    return this;
  }
});

module.exports = {
  PersonAddForm: PersonAddForm
}
