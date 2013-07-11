/*global RSJ, Backbone*/
(function() {
	'use strict';

	RSJ.Collections.PostsCollection = Backbone.Collection.extend({

		model: RSJ.Models.PostModel,
		url: RSJ.Config.apiUrl+'/get_posts/',

		parse: function(response) {
			return response.posts;
		}

	});
})();
