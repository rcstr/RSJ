/*global RSJ, Backbone, JST*/
(function() {
    'use strict';

    RSJ.Views.HomeView = Backbone.View.extend({

        template: JST['app/scripts/templates/Home.ejs'],
        el:'main',

        initialize: function() {
            _.bindAll(this);

            this.collection = new RSJ.Collections.PostsCollection();

            RSJ.Vent.on('rsj:homepage', this.getSlides);
        },

        render: function() {
            this.$el.html(this.template(this.serialize()));

            return this;
        },

        getSlides: function() {
            var _self = this;

            this.collection.fetch({
                data: {"post_type":"slide"},
                success: function(c) {
                    _self.render();
                },
                error: function(c, r) {
                    console.log(r);
                }
            });
        },

        serialize: function() {
            var smallSlides = [], largeSlides = [];

            _.each(this.collection.models, function(model) {
                var slide = {
                    img: model.attributes.attachments[0].url,
                    title: model.attributes.title,
                    url: model.attributes.custom_fields['wpcf-slide-url'][0],
                    isMain: (parseFloat(model.attributes.custom_fields['wpcf-main-picture'][0]) === 1)?true:false
                };

                if(slide.isMain === true) {
                    largeSlides.push(slide);
                } else if(slide.isMain === false) {
                    smallSlides.push(slide);
                }
            });

            return {small:smallSlides, large:largeSlides};
        },

    });
    })();