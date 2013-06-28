/*global RSJ, Backbone*/

RSJ.Collections.PagesCollection = Backbone.Collection.extend({

    model: RSJ.Models.PageModel,
    url: RSJ.Config.apiUrl+'/get_page/'

});
