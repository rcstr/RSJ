/*global RSJ, Backbone*/

RSJ.Collections.PostsCollection = Backbone.Collection.extend({

    model: RSJ.Models.PostModel,
    url: RSJ.Config.apiUrl+'/get_posts/',

    parse: function(response) {
    	return response.posts;
    }

});
