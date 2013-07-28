/*global RSJ, Backbone, JST*/

(function() {
	'use strict';

	RSJ.Views.BlogPostsView = Backbone.View.extend({

	    el: 'main',

	    initialize: function() {
	    	_.bindAll(this);

	    	this.collection = new RSJ.Collections.PostsCollection();

	    	RSJ.Vent.on('rsj:blog:home', this.renderHome);
	    },

	    renderHome: function() {	    	
	    	var self = this,
	    	posts = document.createDocumentFragment();

	    	this.collection.fetch({
	    		data:{ category:"journal" },
	    		success: function(c, r) {
	    			_.each(c.models, function(model) {
	    				var blogPost = new RSJ.Views.BlogSinglePostView({ model:model });

	    				
	    				posts.appendChild($(blogPost.render())[0]);
	    			});

	    			self.$el.find('#blog-container').html(posts);;
	    		},

	    		error: function(c, r) {
	    			console.log(r);
	    		}
	    	});
	    }

	});
})();