/*global RSJ, Backbone, JST*/

RSJ.Views.AppView = Backbone.View.extend({

    el: 'body',

    initialize: function() {
    	new RSJ.Routers.AppRouter();
        Backbone.history.start();
    }

});
