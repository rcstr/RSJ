/*global RSJ, Backbone, JST*/
(function() {
	'use strict';
	RSJ.Views.BlogView = Backbone.View.extend({

	    template: JST['app/scripts/templates/Blog.ejs'],
	    el: 'main',

	    initialize: function() {
	    	_.bindAll(this);
	    	
	    	RSJ.Vent.on('rsj:blog', this.render);
	    },

	    render: function() {
	    	this.$el.html(this.template());
	    }
	});

})();