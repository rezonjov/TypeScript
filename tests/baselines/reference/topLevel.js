//// [topLevel.ts]
interface IPoint {
    x:number;
    y:number;
}

class Point implements IPoint {
    constructor(public x,public y){}
    public move(xo:number,yo:number) {
	this.x+=xo;
	this.y+=yo;
	return this;
    }
    public toString() {
	return ("("+this.x+","+this.y+")");
    }
}

var result="";
result+=(new Point(3,4).move(2,2));

module M {
    export var origin=new Point(0,0);
}

result+=(M.origin.move(1,1));



//// [topLevel.js]
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
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (xo, yo) {
        this.x += xo;
        this.y += yo;
        return this;
    };
    Point.prototype.toString = function () {
        return ("(" + this.x + "," + this.y + ")");
    };
    __names(Point.prototype, ["move", "toString"]);
    return Point;
}());
var result = "";
result += (new Point(3, 4).move(2, 2));
var M;
(function (M) {
    M.origin = new Point(0, 0);
})(M || (M = {}));
result += (M.origin.move(1, 1));
