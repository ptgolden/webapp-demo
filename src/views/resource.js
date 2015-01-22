"use strict";

var $ = require('jquery')
  , Backbone = require('backbone')

Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function () {
    this.$el.html('Loading...');
    this.model.fetch({ context: this }).then(this.render, this.showError);
  },
  render: function () {
    var template = require('../templates/resource.html');
    this.$el.html(template({ resource: this.model.toJSON() }));
  },
  showError: function () {
    this.$el.html('Error loading data.');
  }
});
