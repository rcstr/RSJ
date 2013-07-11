/*global RSJ, $*/

window.RSJ = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Config: {
    	apiUrl: 'http://risingsunjeans.com/api'
    },
    init: function () {
        'use strict';

        return new RSJ.Views.AppView();
    },
};

$(document).ready(function () {
    'use strict';
    RSJ.init();
});
