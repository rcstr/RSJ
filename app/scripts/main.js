/*global RSJ, $*/
(function() {
    'use strict';
    window.RSJ = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        Config: {
            apiUrl: 'http://risingsunjeans.com/api'
        },
        init: function () {
            return new RSJ.Views.AppView();
        },
    };

    $(document).ready(function () {
        RSJ.init();
    });
})();