/*global define, describe, it, expect */
'use strict';

define(['../../app/scripts/core'], function (core) {
    describe('The Core module', function () {
        describe('Initialization', function () {
            it('should expose an init method', function () {
                expect(core.init).toBeDefined();
            });
        });
    });
});

