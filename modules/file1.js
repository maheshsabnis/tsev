"use strict";
exports.__esModule = true;
var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    Utilities.prototype.getLength = function (str) {
        return str.length;
    };
    Utilities.prototype.changeCase = function (str, c) {
        if (c === 'L')
            return str.toLowerCase();
        if (c === 'U')
            return str.toUpperCase();
        return str;
    };
    return Utilities;
}());
exports.Utilities = Utilities;
