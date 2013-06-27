/*global RSJ, Backbone*/

RSJ.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		'': 'home',
        'page/:slug': 'page'
	},

    initialize: function() {
      this.pagesCollection = new RSJ.Collections.PagesCollection();
    },

	home: function() {},

    page: function(slug) {
        var page  = this.pagesCollection.fetch({data: {'slug': slug}});

    }
});
