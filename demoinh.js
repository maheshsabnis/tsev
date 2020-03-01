var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base(a) {
        this.a = a;
    }
    Base.prototype.print = function () {
        console.log("Base " + this.a);
    };
    return Base;
}());
var Derive = /** @class */ (function (_super) {
    __extends(Derive, _super);
    function Derive(b) {
        var _this = _super.call(this, b) || this;
        _this.b = b;
        return _this;
    }
    Derive.prototype.print = function (c) {
        console.log("Derive Print " + this.b + " and " + c);
    };
    Derive.prototype.newprint = function () {
        console.log("Derive " + this.b);
    };
    return Derive;
}(Base));
var obj = new Derive(10);
obj.print(1000);
obj.newprint();
