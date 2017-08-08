//// [collisionSuperAndLocalFunctionInMethod.ts]
function _super() { // No error
} 
class Foo {
    x() {
        function _super() { // No error
        } 
    }
    _super() { // No error
    }
}
class b extends Foo {
    public foo() {
        function _super() { // should be error
        } 
    }
    _super() { // No Error
    }
}
class c extends Foo {
    public foo() {
        var x = () => {
            function _super() { // should be error
            } 
        }
    }
    _super() { // No error
    }
}

//// [collisionSuperAndLocalFunctionInMethod.js]
var __names = (this && this.__names) || (function() {
    var name = Object.defineProperty ? (function(proto, name) {
        Object.defineProperty(proto[name], 'name', { 
            value: name, configurable: true, writable: false, enumerable: false
        });
    }) : (function(proto, name) {
        proto[name].name = name;
    });
    return function (proto, keys) {
        for (var i = keys.length - 1; i >= 0; i--) {
            name(proto, keys[i])
        }
    };
})();
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function _super() {
}
var Foo = (function () {
    function Foo() {
    }
    Foo.prototype.x = function () {
        function _super() {
        }
    };
    Foo.prototype._super = function () {
    };
    __names(Foo.prototype, ["x", "_super"]);
    return Foo;
}());
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    b.prototype.foo = function () {
        function _super() {
        }
    };
    b.prototype._super = function () {
    };
    __names(b.prototype, ["foo", "_super"]);
    return b;
}(Foo));
var c = (function (_super) {
    __extends(c, _super);
    function c() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    c.prototype.foo = function () {
        var x = function () {
            function _super() {
            }
        };
    };
    c.prototype._super = function () {
    };
    __names(c.prototype, ["foo", "_super"]);
    return c;
}(Foo));
