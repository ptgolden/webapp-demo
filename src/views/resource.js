"use strict";

var $ = require('jquery')
  , Backbone = require('backbone')

Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function () {
    this.$el.html('Loading...');
    this.model.fetch().then(
      this.render.bind(this),
      this.$el.html.bind(this.$el, 'Error loading data.'));
  },
  render: function () {
    var template = require('../templates/resource.html');
    this.$el.html(template({ resource: this.model.toJSON() }));
  }
});
