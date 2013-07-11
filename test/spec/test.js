/*global describe, it */
'use strict';
(function () {
    describe('Application', function() {
        it('Should exists an global namespace for RSJ', function() {
            chai.should.exists(RSJ);
        });
    });
})();
