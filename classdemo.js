"use strict";
exports.__esModule = true;
var MyClass = /** @class */ (function () {
    function MyClass(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        // expression functions purely in ES 6
        this.sub = function () {
            return _this.x - _this.y;
        };
    }
    MyClass.prototype.display = function () {
        console.log('I am Private');
    };
    MyClass.prototype.add = function () {
        return this.x + this.y;
    };
    Object.defineProperty(MyClass.prototype, "X", {
        // get always returns
        get: function () {
            return this.x;
        },
        // set never return a value
        set: function (value) {
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return MyClass;
}());
exports.MyClass = MyClass;
var obj = new MyClass(300, 200);
console.log("Add = " + obj.add());
console.log("Sub = " + obj.sub());
obj.X = 600;
console.log("X = " + obj.X);
console.log("Add = " + obj.add());
console.log("Sub = " + obj.sub());
