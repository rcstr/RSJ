/*global RSJ, Backbone, JST*/

(function() {
	'use strict';

	RSJ.Views.PageView = Backbone.View.extend({

	    template: JST['app/scripts/templates/Page.ejs'],
	    el: 'main',

	    initialize: function() {
	    	_.bindAll(this);
	    	this.render();
	    	RSJ.setTitle(this.model.get('title'));
	    },

	    render: function() {
	    	this.$el.html(this.template(this.model));

	    	return this;
	    }

	});

})();