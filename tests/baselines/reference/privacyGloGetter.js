//// [privacyGloGetter.ts]
module m1 {
    export class C1_public {
        private f1() {
        }
    }

    class C2_private {
    }

    export class C3_public {
        private get p1_private() {
            return new C1_public();
        }

        private set p1_private(m1_c3_p1_arg: C1_public) {
        }

        private get p2_private() {
            return new C1_public();
        }

        private set p2_private(m1_c3_p2_arg: C1_public) {
        }

        private get p3_private() {
            return new C2_private();
        }

        private set p3_private(m1_c3_p3_arg: C2_private) {
        }

        public get p4_public(): C2_private { // error
            return new C2_private(); //error
        }

        public set p4_public(m1_c3_p4_arg: C2_private) { // error
        }
    }

    class C4_private {
        private get p1_private() {
            return new C1_public();
        }

        private set p1_private(m1_c3_p1_arg: C1_public) {
        }

        private get p2_private() {
            return new C1_public();
        }

        private set p2_private(m1_c3_p2_arg: C1_public) {
        }

        private get p3_private() {
            return new C2_private();
        }

        private set p3_private(m1_c3_p3_arg: C2_private) {
        }

        public get p4_public(): C2_private {
            return new C2_private();
        }

        public set p4_public(m1_c3_p4_arg: C2_private) {
        }
    }
}

class C6_public {
}

class C7_public {
    private get p1_private() {
        return new C6_public();
    }

    private set p1_private(m1_c3_p1_arg: C6_public) {
    }

    private get p2_private() {
        return new C6_public();
    }

    private set p2_private(m1_c3_p2_arg: C6_public) {
    }
}

//// [privacyGloGetter.js]
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
var m1;
(function (m1) {
    var C1_public = (function () {
        function C1_public() {
        }
        C1_public.prototype.f1 = function () {
        };
        __names(C1_public.prototype, ["f1"]);
        return C1_public;
    }());
    m1.C1_public = C1_public;
    var C2_private = (function () {
        function C2_private() {
        }
        return C2_private;
    }());
    var C3_public = (function () {
        function C3_public() {
        }
        Object.defineProperty(C3_public.prototype, "p1_private", {
            get: function () {
                return new C1_public();
            },
            set: function (m1_c3_p1_arg) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(C3_public.prototype, "p2_private", {
            get: function () {
                return new C1_public();
            },
            set: function (m1_c3_p2_arg) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(C3_public.prototype, "p3_private", {
            get: function () {
                return new C2_private();
            },
            set: function (m1_c3_p3_arg) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(C3_public.prototype, "p4_public", {
            get: function () {
                return new C2_private(); //error
            },
            set: function (m1_c3_p4_arg) {
            },
            enumerable: true,
            configurable: true
        });
        return C3_public;
    }());
    m1.C3_public = C3_public;
    var C4_private = (function () {
        function C4_private() {
        }
        Object.defineProperty(C4_private.prototype, "p1_private", {
            get: function () {
                return new C1_public();
            },
            set: function (m1_c3_p1_arg) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(C4_private.prototype, "p2_private", {
            get: function () {
                return new C1_public();
            },
            set: function (m1_c3_p2_arg) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(C4_private.prototype, "p3_private", {
            get: function () {
                return new C2_private();
            },
            set: function (m1_c3_p3_arg) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(C4_private.prototype, "p4_public", {
            get: function () {
                return new C2_private();
            },
            set: function (m1_c3_p4_arg) {
            },
            enumerable: true,
            configurable: true
        });
        return C4_private;
    }());
})(m1 || (m1 = {}));
var C6_public = (function () {
    function C6_public() {
    }
    return C6_public;
}());
var C7_public = (function () {
    function C7_public() {
    }
    Object.defineProperty(C7_public.prototype, "p1_private", {
        get: function () {
            return new C6_public();
        },
        set: function (m1_c3_p1_arg) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C7_public.prototype, "p2_private", {
        get: function () {
            return new C6_public();
        },
        set: function (m1_c3_p2_arg) {
        },
        enumerable: true,
        configurable: true
    });
    return C7_public;
}());
