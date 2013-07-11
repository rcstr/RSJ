/*global RSJ, Backbone*/
(function() {
	'use strict';

	RSJ.Views.AppView = Backbone.View.extend({

		el: 'body',

		initialize: function() {
			new RSJ.Routers.AppRouter();
			Backbone.history.start({
				pushState: false,
				root:'/'			
			});
		}

	});
})();
