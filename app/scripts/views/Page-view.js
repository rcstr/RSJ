/*global RSJ, Backbone, JST*/

(function() {
	'use strict';

	RSJ.Views.PageView = Backbone.View.extend({

	    template: JST['app/scripts/templates/Page.ejs'],
	    el: 'main',

	    initialize: function() {
	    	_.bindAll(this);

	    	this.model = new RSJ.Models.PageModel();

	    	RSJ.Vent.on('rsj:page', this.getPage);

	    	RSJ.setTitle(this.model.get('title'));
	    },

	    render: function() {
	    	this.$el.html(this.template(this.model));

	    	return this;
	    },

	    getPage: function(options) {
	    	var _self = this;

	    	this.model.fetch({
	    	  data: {'slug':options.slug},
	    	  success: function(m) {
	    	    _self.render();
	    	  },
	    	  error: function(m, r) {
	    	    console.log(r);
	    	  }
	    	});
	    }

	});
})();