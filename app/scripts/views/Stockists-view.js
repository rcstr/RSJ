/* global RSJ, Backbone, JST, _*/
(function() {
    'use strict';
    RSJ.Views.StockistsView = Backbone.View.extend({

        el: 'main',
        template: JST['app/scripts/templates/Stockists.ejs'],

        initialize: function() {
            _.bindAll(this);
            //  first thing i need to do is get the categories and print them
            this._extractRegions();
        },

        _extractRegions: function() {
            var regions = [];

            _.filter(this.collection.models, function(stock) {
                var stockRegion = stock.get('taxonomy_region')[0].title;

                if(regions.indexOf(stockRegion) < 0) {
                    regions.push(stockRegion);
                }
            });

            this.render(regions);
        },

        render: function(regions) {
            this.$el.html(this.template(regions));

            _.each(this.collection.models, function(stockist) {
                new RSJ.Views.StockistView({
                    model:stockist,
                    el: '[data-rsj-stockist-region="'+stockist.attributes.taxonomy_region[0].title+'"] ul'
                });
            });

            return this;
        }

    });
})();
