/*global RSJ, Backbone*/
(function() {
  'use strict';

  RSJ.Routers.AppRouter = Backbone.Router.extend({
    routes: {
      '': 'pageHome',
      'stockist':'pageStockist',
      '*slug': 'page'
    },

    initialize: function() {
      new RSJ.Views.HomeView();
      new RSJ.Views.StockistsView();
      new RSJ.Views.PageView();
    },

    pageHome: function() {
      RSJ.Vent.trigger('rsj:homepage');
    },

    pageStockist: function() {
      RSJ.Vent.trigger('rsj:stockists');
    },

    page: function(slug) {
      RSJ.Vent.trigger('rsj:page', {slug:slug});
    }

  });
})();