/*global RSJ, Backbone*/
(function() {
	'use strict';
	
	RSJ.Collections.PagesCollection = Backbone.Collection.extend({

	    model: RSJ.Models.PageModel,
	    url: RSJ.Config.apiUrl+'/get_page/'

	});
})();
