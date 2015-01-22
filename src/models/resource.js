"use strict";

var $ = require('jquery')
  , Backbone = require('backbone')

Backbone.$ = $;

module.exports = Backbone.Model.extend({
  url: function () {
    return 'http://bnb.data.bl.uk/' + this.get('id');
  },
  parse: function (data) {
    return data.result.primaryTopic;
  }
})
