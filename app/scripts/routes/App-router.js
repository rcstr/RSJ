/*global RSJ, Backbone*/

RSJ.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		'': 'home',
        'stockist':'pageStockist',
        ':slug': 'page'
	},

    initialize: function() {
      this.pagesCollection = new RSJ.Collections.PagesCollection();
      this.postsCollection = new RSJ.Collections.PostsCollection();
    },

    Pagehome: function() {},

	pageStockist: function() {
        this.postsCollection.fetch({
            data:{'post_type':'stock'},
            success: function(c, r) {
                new RSJ.Views.StockistsView({
                    collection: c
                });
            }
        })
    },

    page: function(slug) {
        var page  = this.pagesCollection.fetch({data: {'slug': slug}});
    }
});
