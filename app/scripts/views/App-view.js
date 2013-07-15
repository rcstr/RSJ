/*global RSJ, Backbone*/
(function() {
	'use strict';

	RSJ.Views.AppView = Backbone.View.extend({

		el: 'body',

		initialize: function() {
			RSJ.Routers.Navigator = new RSJ.Routers.AppRouter();
			
			Backbone.history.start({
				pushState: true,
				root:'/'			
			});

			RSJ.setUrls();
		}

	});
})();
