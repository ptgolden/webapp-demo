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
    var template = require('../templates/index.html');
    this.$el.html(template());
  },
  handleSubmit: function (e) {
    var q = e.target.search.value;
    e.preventDefault();
    this.doSearch(q);
  },
  parseSearchResultHtml: function (html) {
    return $(html).find('.search-result a').toArray().map(function (el) {
      return {
        title: el.textContent.trim(),
        link: el.href
      }
    });
  },
  renderResults: function (results) {
    var resultsTemplate = require('../templates/results.html');

    if (!results.length) {
      this.$results.html('No results for query "' + query + '"');
    } else {
      this.$results.html(resultsTemplate({ results: results }));
    }
  },
  doSearch: function (query) {
    var url = 'http://bnb.data.bl.uk/search?object=' + query

    this.$results.html('Loading...');
    $.get(url).then(this.parseSearchResultHtml).then(
      this.renderResults.bind(this),
      this.$results.html.bind(this.$results, 'Error loading results'));
  }
});
