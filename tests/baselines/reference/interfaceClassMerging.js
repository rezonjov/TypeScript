//// [interfaceClassMerging.ts]
interface Foo {
    method(a: number): string;
    optionalMethod?(a: number): string;
    property: string;
    optionalProperty?: string;
}

class Foo {
    additionalProperty: string;

    additionalMethod(a: number): string {
        return this.method(0);
    }
}

class Bar extends Foo {
    method(a: number) {
        return this.optionalProperty;
    }
}


var bar = new Bar();
bar.method(0);
bar.optionalMethod(1);
bar.property;
bar.optionalProperty;
bar.additionalProperty;
bar.additionalMethod(2);

var obj: {
    method(a: number): string;
    property: string;
    additionalProperty: string;
    additionalMethod(a: number): string;
};

bar = obj;
obj = bar;


//// [interfaceClassMerging.js]
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
var Foo = (function () {
    function Foo() {
    }
    Foo.prototype.additionalMethod = function (a) {
        return this.method(0);
    };
    __names(Foo.prototype, ["additionalMethod"]);
    return Foo;
}());
var Bar = (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bar.prototype.method = function (a) {
        return this.optionalProperty;
    };
    __names(Bar.prototype, ["method"]);
    return Bar;
}(Foo));
var bar = new Bar();
bar.method(0);
bar.optionalMethod(1);
bar.property;
bar.optionalProperty;
bar.additionalProperty;
bar.additionalMethod(2);
var obj;
bar = obj;
obj = bar;
