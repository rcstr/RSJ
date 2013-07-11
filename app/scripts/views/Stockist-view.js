/*global RSJ, Backbone, JST*/
(function() {
	'use strict';

	RSJ.Views.StockistView = Backbone.View.extend({

		template: JST['app/scripts/templates/Stockist.ejs'],
		tagName: 'li',

		initialize: function() {
			_.bindAll(this);
			this.render();
		},

		render: function() {
			this.$el.append(this.template(this.serialize()));

			return this;
		},

		serialize: function() {
			var stockist = {
				title: this.model.attributes.title,
				address: this.model.attributes.custom_fields['wpcf-address'][0]
			};

			return stockist;
		}
	});

})();