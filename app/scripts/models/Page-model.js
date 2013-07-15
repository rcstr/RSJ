/*global RSJ, Backbone*/
(function() {
	'use strict';
	RSJ.Models.PageModel = Backbone.Model.extend({
		url: RSJ.Config.apiUrl+'/get_page/',

		parse: function(response) {
	    	return response.page;
	    }
	});
})();