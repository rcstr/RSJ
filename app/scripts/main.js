/*global RSJ, $*/
'use strict';


window.RSJ = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        return new RSJ.Views.AppView();
    }
};

$(document).ready(function () {
    RSJ.init();
});
