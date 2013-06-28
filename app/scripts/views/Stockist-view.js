/*global RSJ, Backbone, JST*/

RSJ.Views.StockistView = Backbone.View.extend({

    template: JST['app/scripts/templates/Stockist.ejs'],
    tagName: 'li',

    initialize: function() {
    	this.render();
    },

    render: function() {
    	this.$el.append(this.template(this.model.attributes));

    	return this;
    }
});
