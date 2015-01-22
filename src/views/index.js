"use strict";

var $ = require('jquery')
  , Backbone = require('backbone')

Backbone.$ = $;

module.exports = Backbone.View.extend({
  events: {
    'submit #search-form': 'handleSubmit'
  },
  initialize: function () {
    this.render();
    this.$results = this.$('#results');
  },
  render: function () {
    var template = require('../templates/index.html')
    this.$el.html(template());
  },
  handleSubmit: function (e) {
    var q = e.target.search.value;

    e.preventDefault();

    this.doSearch(q);
  },
  doSearch: function (query) {
    var that = this
      , url = 'http://bnb.data.bl.uk/search?object=' + query
      , resultsTemplate = require('../templates/results.html')

    this.$results.html('Loading...');
    $.get(url).then(
      function (data) {
        var results = $(data).find('.search-result a').toArray().map(function (el) {
          return {
            title: el.textContent.trim(),
            link: el.href
          }
        });

        if (!results.length) {
          that.$results.html('No results for query "' + query + '"');
        } else {
          that.$results.html(resultsTemplate({ results: results }));
        }


      },
      function () {
        that.$results.html('Error loading results.');
      }
    )
  }
})
