/* global RSJ, Backbone, JST, _*/
(function() {
    'use strict';

    RSJ.Views.StockistsView = Backbone.View.extend({

        el: 'main',
        template: JST['app/scripts/templates/Stockists.ejs'],

        initialize: function() {
            _.bindAll(this);

            this.collection = new RSJ.Collections.PostsCollection();

            RSJ.Vent.on('rsj:stockists', this.getStockists);
            
            RSJ.setTitle('STOCKIST');
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
        },

        getStockists: function() {
            var _self = this;

            this.collection.fetch({
              data:{'post_type':'stock'},
              success: function(c) {
                _self.extractRegions();
              },
              error: function(c, r) {
                console.log(r);
              }
            });
        },

        extractRegions: function() {
            var regions = [];

            _.filter(this.collection.models, function(stock) {
                var stockRegion = stock.get('taxonomy_region')[0].title;

                if(regions.indexOf(stockRegion) < 0) {
                    regions.push(stockRegion);
                }
            });

            this.render(regions);
        },

    });
})();
