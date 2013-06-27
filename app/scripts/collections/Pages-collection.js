/*global RSJ, Backbone*/

RSJ.Collections.PagesCollection = Backbone.Collection.extend({

    model: RSJ.Models.PageModel,
    url: 'http://risingsunjeans.com/api/get_page/'

});
