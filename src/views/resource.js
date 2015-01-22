"use strict";

var $ = require('jquery')
  , Backbone = require('backbone')

Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function () {
    var that = this;
    this.$el.html('Loading...');
    this.model.fetch().then(
      function () { that.render(); },
      function () { that.$el.html('Error loading data.') }
    );
  },
  render: function () {
    var template = require('../templates/resource.html')

    this.$el.html(template({ resource: this.model.toJSON() }));
  }
});
