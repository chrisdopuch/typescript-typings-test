"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = function (s) { return s.split('').reduce(function (acc, val) { return [val].concat(acc); }, []).join(''); };
