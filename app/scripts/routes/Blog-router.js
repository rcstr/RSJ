/*global RSJ, Backbone*/
(function() {
	'use strict';

	RSJ.Routers.BlogRouter = Backbone.Router.extend({
		routes: {
			'blog':'blog',
			'blog/:category':'blogCategory'
		},

		initialize: function() {
			new RSJ.Views.BlogView();
			new RSJ.Views.BlogPostsView();
		},

		blog: function() {
			RSJ.Vent.trigger('rsj:blog');
			RSJ.Vent.trigger('rsj:blog:home');

			RSJ.setTitle('Blog');
		},

		blogCategory: function(category) {
			RSJ.Vent.trigger('rsj:blog:category', {category:category});
		}
	});

})();
