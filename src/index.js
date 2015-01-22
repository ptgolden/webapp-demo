"use strict";

var $ = require('jquery')
  , Backbone = require('backbone')

Backbone.$ = $;

var IndexRouter = Backbone.Router.extend({
  _view: null,

  routes: {
    '': 'index',
    'http://bnb.data.bl.uk/*resource': 'resource'
  },

  switchToView: function(view) {
    if (this._view) this._view.remove();
    this._view = view;
    view.$el.appendTo('#main');
  },

  index: function () {
    var IndexView = require('./views/index');
    this.switchToView(new IndexView());
  },

  resource: function (resourceID) {
    var Resource = require('./models/resource')
      , ResourceView = require('./views/resource')
      , resource
     
    resource = new Resource({ id: resourceID })
    this.switchToView(new ResourceView({ model: resource }));
  }
});

$(document).ready(function () {
  var router = new IndexRouter();

  Backbone.history.start();
});
