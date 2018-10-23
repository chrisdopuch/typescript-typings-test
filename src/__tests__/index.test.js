"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe('index', function () {
    describe('#reverse', function () {
        it('should return empty string for empty input', function () {
            var s = '';
            var result = index_1.reverse(s);
            expect(result).toEqual('');
        });
        it('should return the reversed input', function () {
            var s = 'abcdefg';
            var result = index_1.reverse(s);
            expect(result).toEqual('gfedcba');
        });
    });
});
