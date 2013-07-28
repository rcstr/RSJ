/*global RSJ, Backbone*/
(function() {
	'use strict';

	RSJ.Collections.CategoriesCollection = Backbone.Collection.extend({

	    model: RSJ.Models.CategoryModel,
	    url: RSJ.Config.apiUrl+'/get_category_index/',

	    parse: function(response) {
	    	return response.categories;
	    }

	});

})();