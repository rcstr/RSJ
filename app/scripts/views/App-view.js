/*global RSJ, Backbone*/
(function() {
	'use strict';

	RSJ.Views.AppView = Backbone.View.extend({

		el: 'body',

		initialize: function() {
			RSJ.Vent = _.extend({}, Backbone.Events);

			RSJ.Routers.Navigator = new RSJ.Routers.AppRouter();
			new RSJ.Routers.BlogRouter();

			Backbone.history.start({
				pushState: false,
				root:'/'			
			});

			RSJ.setUrls();
		}

	});
})();
