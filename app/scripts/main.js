/*global RSJ, $*/
(function() {
    'use strict';
    window.RSJ = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        Config: {
            apiUrl: 'http://risingsunjeans.com/api',
        },

        init: function () {
            return new RSJ.Views.AppView();
        },

        setTitle: function(title) {
            var titleTag = document.getElementsByTagName('title')[0];

            if(!title) {
                titleTag.innerHTML = 'Rising Sun Jeans';
            } else {
                titleTag.innerHTML = title + ' | Rising Sun Jeans';
            }
        },

        setUrls: function() {
            $('[data-rsj-url]').click(function() {
                var url = this.dataset.rsjUrl;

                RSJ.Routers.Navigator.navigate(url, {trigger: true});
                return false;
            });
        }
    };

    $(document).ready(function () {
        RSJ.init();
    });
})();