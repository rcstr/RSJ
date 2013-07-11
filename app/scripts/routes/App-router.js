/*global RSJ, Backbone*/
(function() {
  'use strict';

  RSJ.Routers.AppRouter = Backbone.Router.extend({
    routes: {
      '': 'pageHome',
      'stockist':'pageStockist',
      ':slug': 'page'
    },

    initialize: function() {},

    pageHome: function() {
      if(!this.postsCollection) {
        this.postsCollection = new RSJ.Collections.PostsCollection();
      }

      this.postsCollection.fetch({
        data:{'post_type':'slide'},
        success: function(c) {
          new RSJ.Views.HomeView({
            collection: c
          });
        },
        error: function(c, r) {
          console.log(r);
        }
      });
    },

    pageStockist: function() {
      if(!this.postsCollection) {
        this.postsCollection = new RSJ.Collections.PostsCollection();
      }

      this.postsCollection.fetch({
        data:{'post_type':'stock'},
        success: function(c) {
          new RSJ.Views.StockistsView({
            collection: c
          });
        },
        error: function(c, r) {
          console.log(r);
        }
      });
    },

    page: function(slug) {
      if(!this.pagesCollection) {
        this.pagesCollection = new RSJ.Collections.PagesCollection();
      }
      var page  = this.pagesCollection.fetch({data: {'slug': slug}});
    }
  });
})();