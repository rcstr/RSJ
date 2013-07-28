/*global RSJ, Backbone, JST*/

(function() {
	'use strict';

	RSJ.Views.BlogSinglePostView = Backbone.View.extend({

	    template: JST['app/scripts/templates/BlogSinglePost.ejs'],

	    render: function() {
	    	return this.template(this.model);
	    }

	});
})();