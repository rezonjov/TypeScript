//// [assertInWrapSomeTypeParameter.ts]
class C<T extends C<T>> {
    foo<U extends C<C<T>>(x: U) {
        return null;
    }
}

//// [assertInWrapSomeTypeParameter.js]
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
var C = (function () {
    function C() {
    }
    C.prototype.foo = function (x) {
        return null;
    };
    __names(C.prototype, ["foo"]);
    return C;
}());
