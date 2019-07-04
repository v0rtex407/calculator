(function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.math = t() : e.math = t()
})(this, function () {
  return function (e) {
    function t(n) {
      if (a[n]) return a[n].exports;
      var i = a[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var a = {};
    return t.m = e, t.c = a, t.d = function (e, a, n) {
      t.o(e, a) || Object.defineProperty(e, a, {
        enumerable: !0,
        get: n
      })
    }, t.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, t.t = function (e, a) {
      if (1 & a && (e = t(e)), 8 & a) return e;
      if (4 & a && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (t.r(n), Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }), 2 & a && "string" != typeof e)
        for (var i in e) t.d(n, i, function (t) {
          return e[t]
        }.bind(null, i));
      return n
    }, t.n = function (e) {
      var a = e && e.__esModule ? function () {
        return e["default"]
      } : function () {
        return e
      };
      return t.d(a, "a", a), a
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 19)
  }([function (e, t, a) {
    "use strict";

    function n(e, t, a, n) {
      function i(n) {
        var i = Object(p.j)(n, t.map(o));
        return r(e, t, n), a(i)
      }
      return i.isFactory = !0, i.fn = e, i.dependencies = t.slice().sort(), n && (i.meta = n), i
    }

    function i(e) {
      return "function" == typeof e && "string" == typeof e.fn && Array.isArray(e.dependencies)
    }

    function r(e, t, a) {
      var n = t.filter(function (e) {
        return !s(e)
      }).every(function (e) {
        return a[e] !== void 0
      });
      if (!n) {
        var i = t.filter(function (e) {
          return a[e] === void 0
        });
        throw new Error("Cannot create function \"".concat(e, "\", ") + "some dependencies are missing: ".concat(i.map(function (e) {
          return "\"".concat(e, "\"")
        }).join(", "), "."))
      }
    }

    function s(e) {
      return e && "?" === e[0]
    }

    function o(e) {
      return e && "?" === e[0] ? e.slice(1) : e
    }
    a.d(t, "a", function () {
      return n
    }), a.d(t, "b", function () {
      return i
    }), a.d(t, "c", function () {
      return o
    });
    var l = a(2),
      p = a(4)
  }, function (e, t, a) {
    "use strict";

    function n(e) {
      return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, n(e)
    }

    function i(e) {
      return "number" == typeof e
    }

    function r(e) {
      return e && !0 === e.constructor.prototype.isBigNumber || !1
    }

    function s(e) {
      return e && "object" === n(e) && !0 === Object.getPrototypeOf(e).isComplex || !1
    }

    function o(e) {
      return e && "object" === n(e) && !0 === Object.getPrototypeOf(e).isFraction || !1
    }

    function l(e) {
      return e && !0 === e.constructor.prototype.isUnit || !1
    }

    function p(e) {
      return "string" == typeof e
    }

    function m(e) {
      return e && !0 === e.constructor.prototype.isMatrix || !1
    }

    function c(e) {
      return Array.isArray(e) || m(e)
    }

    function d(e) {
      return e && e.isDenseMatrix && !0 === e.constructor.prototype.isMatrix || !1
    }

    function u(e) {
      return e && e.isSparseMatrix && !0 === e.constructor.prototype.isMatrix || !1
    }

    function g(e) {
      return e && !0 === e.constructor.prototype.isRange || !1
    }

    function y(e) {
      return e && !0 === e.constructor.prototype.isIndex || !1
    }

    function x(e) {
      return "boolean" == typeof e
    }

    function f(e) {
      return e && !0 === e.constructor.prototype.isResultSet || !1
    }

    function h(e) {
      return e && !0 === e.constructor.prototype.isHelp || !1
    }

    function b(e) {
      return "function" == typeof e
    }

    function v(e) {
      return e instanceof Date
    }

    function N(e) {
      return e instanceof RegExp
    }

    function M(e) {
      return !(!e || "object" !== n(e) || e.constructor !== Object || s(e) || o(e))
    }

    function S(e) {
      return null === e
    }

    function A(e) {
      return e === void 0
    }

    function O(e) {
      return e && !0 === e.isAccessorNode && !0 === e.constructor.prototype.isNode || !1
    }

    function _(e) {
      return e && !0 === e.isArrayNode && !0 === e.constructor.prototype.isNode || !1
    }

    function C(e) {
      return e && !0 === e.isAssignmentNode && !0 === e.constructor.prototype.isNode || !1
    }

    function E(e) {
      return e && !0 === e.isBlockNode && !0 === e.constructor.prototype.isNode || !1
    }

    function w(e) {
      return e && !0 === e.isConditionalNode && !0 === e.constructor.prototype.isNode || !1
    }

    function k(e) {
      return e && !0 === e.isConstantNode && !0 === e.constructor.prototype.isNode || !1
    }

    function T(e) {
      return e && !0 === e.isFunctionAssignmentNode && !0 === e.constructor.prototype.isNode || !1
    }

    function I(e) {
      return e && !0 === e.isFunctionNode && !0 === e.constructor.prototype.isNode || !1
    }

    function q(e) {
      return e && !0 === e.isIndexNode && !0 === e.constructor.prototype.isNode || !1
    }

    function B(e) {
      return e && !0 === e.isNode && !0 === e.constructor.prototype.isNode || !1
    }

    function z(e) {
      return e && !0 === e.isObjectNode && !0 === e.constructor.prototype.isNode || !1
    }

    function j(e) {
      return e && !0 === e.isOperatorNode && !0 === e.constructor.prototype.isNode || !1
    }

    function D(e) {
      return e && !0 === e.isParenthesisNode && !0 === e.constructor.prototype.isNode || !1
    }

    function P(e) {
      return e && !0 === e.isRangeNode && !0 === e.constructor.prototype.isNode || !1
    }

    function R(e) {
      return e && !0 === e.isSymbolNode && !0 === e.constructor.prototype.isNode || !1
    }

    function U(e) {
      return e && !0 === e.constructor.prototype.isChain || !1
    }

    function L(e) {
      var a = n(e);
      return "object" === a ? null === e ? "null" : Array.isArray(e) ? "Array" : e instanceof Date ? "Date" : e instanceof RegExp ? "RegExp" : r(e) ? "BigNumber" : s(e) ? "Complex" : o(e) ? "Fraction" : m(e) ? "Matrix" : l(e) ? "Unit" : y(e) ? "Index" : g(e) ? "Range" : f(e) ? "ResultSet" : B(e) ? e.type : U(e) ? "Chain" : h(e) ? "Help" : "Object" : "function" === a ? "Function" : a
    }
    a.d(t, "y", function () {
      return i
    }), a.d(t, "e", function () {
      return r
    }), a.d(t, "j", function () {
      return s
    }), a.d(t, "o", function () {
      return o
    }), a.d(t, "L", function () {
      return l
    }), a.d(t, "I", function () {
      return p
    }), a.d(t, "b", function () {
      return F
    }), a.d(t, "v", function () {
      return m
    }), a.d(t, "i", function () {
      return c
    }), a.d(t, "n", function () {
      return d
    }), a.d(t, "H", function () {
      return u
    }), a.d(t, "D", function () {
      return g
    }), a.d(t, "t", function () {
      return y
    }), a.d(t, "g", function () {
      return x
    }), a.d(t, "G", function () {
      return f
    }), a.d(t, "s", function () {
      return h
    }), a.d(t, "p", function () {
      return b
    }), a.d(t, "m", function () {
      return v
    }), a.d(t, "F", function () {
      return N
    }), a.d(t, "z", function () {
      return M
    }), a.d(t, "x", function () {
      return S
    }), a.d(t, "K", function () {
      return A
    }), a.d(t, "a", function () {
      return O
    }), a.d(t, "c", function () {
      return _
    }), a.d(t, "d", function () {
      return C
    }), a.d(t, "f", function () {
      return E
    }), a.d(t, "k", function () {
      return w
    }), a.d(t, "l", function () {
      return k
    }), a.d(t, "q", function () {
      return T
    }), a.d(t, "r", function () {
      return I
    }), a.d(t, "u", function () {
      return q
    }), a.d(t, "w", function () {
      return B
    }), a.d(t, "A", function () {
      return z
    }), a.d(t, "B", function () {
      return j
    }), a.d(t, "C", function () {
      return D
    }), a.d(t, "E", function () {
      return P
    }), a.d(t, "J", function () {
      return R
    }), a.d(t, "h", function () {
      return U
    }), a.d(t, "M", function () {
      return L
    });
    var F = Array.isArray
  }, function (e, t, a) {
    "use strict";

    function n(e) {
      for (var t = []; Array.isArray(e);) t.push(e.length), e = e[0];
      return t
    }

    function r(e, t, a) {
      var n = e.length,
        s;
      if (n !== t[a]) throw new T.a(n, t[a]);
      if (a < t.length - 1) {
        for (s = 0; s < n; s++) {
          var o = e[s];
          if (!Array.isArray(o)) throw new T.a(t.length - 1, t.length, "<");
          r(e[s], t, a + 1)
        }
      } else
        for (s = 0; s < n; s++)
          if (Array.isArray(e[s])) throw new T.a(t.length + 1, t.length, ">")
    }

    function s(e, t) {
      var a = 0 === t.length;
      if (!a) r(e, t, 0);
      else if (Array.isArray(e)) throw new T.a(e.length, 0)
    }

    function o(e, t) {
      if (!Object(w.y)(e) || !Object(E.i)(e)) throw new TypeError("Index must be an integer (value: " + e + ")");
      if (0 > e || "number" == typeof t && e >= t) throw new I.a(e, t)
    }

    function l(e, t, a) {
      if (!Array.isArray(e) || !Array.isArray(t)) throw new TypeError("Array expected");
      if (0 === t.length) throw new Error("Resizing to scalar is not supported");
      t.forEach(function (e) {
        if (!Object(w.y)(e) || !Object(E.i)(e) || 0 > e) throw new TypeError("Invalid size, must contain positive integers (size: " + Object(k.d)(t) + ")")
      });
      var n = void 0 === a ? 0 : a;
      return p(e, t, 0, n), e
    }

    function p(e, t, a, n) {
      var r = e.length,
        s = t[a],
        o = Math.min(r, s),
        l, m;
      if (e.length = s, a < t.length - 1) {
        var c = a + 1;
        for (l = 0; l < o; l++) m = e[l], Array.isArray(m) || (m = [m], e[l] = m), p(m, t, c, n);
        for (l = o; l < s; l++) m = [], e[l] = m, p(m, t, c, n)
      } else {
        for (l = 0; l < o; l++)
          for (; Array.isArray(e[l]);) e[l] = e[l][0];
        for (l = o; l < s; l++) e[l] = n
      }
    }

    function m(t, a) {
      function i(e) {
        return e.reduce(function (e, t) {
          return e * t
        })
      }
      var r = x(t),
        s;
      if (!Array.isArray(t) || !Array.isArray(a)) throw new TypeError("Array expected");
      if (0 === a.length) throw new T.a(0, i(n(t)), "!=");
      for (var o = 1, l = 0; l < a.length; l++) o *= a[l];
      if (r.length !== o) throw new T.a(i(a), i(n(t)), "!=");
      try {
        s = c(r, a)
      } catch (r) {
        if (r instanceof T.a) throw new T.a(i(a), i(n(t)), "!=");
        throw r
      }
      return s
    }

    function c(e, t) {
      for (var a = e, n = t.length - 1, r, s; 0 < n; n--) {
        s = t[n], r = [];
        for (var o = a.length / s, l = 0; l < o; l++) r.push(a.slice(l * s, (l + 1) * s));
        a = r
      }
      return a
    }

    function d(e, t) {
      for (var a = t || n(e); Array.isArray(e) && 1 === e.length;) e = e[0], a.shift();
      for (var i = a.length; 1 === a[i - 1];) i--;
      return i < a.length && (e = u(e, i, 0), a.length = i), e
    }

    function u(e, t, a) {
      var n, r;
      if (a < t) {
        for (n = 0, r = e.length; n < r; n++) e[n] = u(e[n], t, a + 1)
      } else
        for (; Array.isArray(e);) e = e[0];
      return e
    }

    function g(e, t, a, r) {
      var o = r || n(e);
      if (a)
        for (var s = 0; s < a; s++) e = [e], o.unshift(1);
      for (e = y(e, t, 0); o.length < t;) o.push(1);
      return e
    }

    function y(e, t, a) {
      var n, r;
      if (Array.isArray(e)) {
        for (n = 0, r = e.length; n < r; n++) e[n] = y(e[n], t, a + 1)
      } else
        for (var s = a; s < t; s++) e = [e];
      return e
    }

    function x(e) {
      if (!Array.isArray(e)) return e;
      var t = [];
      return e.forEach(function e(a) {
        Array.isArray(a) ? a.forEach(e) : t.push(a)
      }), t
    }

    function f(e, t) {
      return Array.prototype.map.call(e, t)
    }

    function h(e, t) {
      Array.prototype.forEach.call(e, t)
    }

    function b(e, t) {
      if (1 !== n(e).length) throw new Error("Only one dimensional matrices supported");
      return Array.prototype.filter.call(e, t)
    }

    function v(e, t) {
      if (1 !== n(e).length) throw new Error("Only one dimensional matrices supported");
      return Array.prototype.filter.call(e, function (e) {
        return t.test(e)
      })
    }

    function N(e, t) {
      return Array.prototype.join.call(e, t)
    }

    function M(e) {
      if (!Array.isArray(e)) throw new TypeError("Array input expected");
      if (0 === e.length) return e;
      var t = [],
        a = 0;
      t[0] = {
        value: e[0],
        identifier: 0
      };
      for (var n = 1; n < e.length; n++) e[n] === e[n - 1] ? a++ : a = 0, t.push({
        value: e[n],
        identifier: a
      });
      return t
    }

    function S(e) {
      if (!Array.isArray(e)) throw new TypeError("Array input expected");
      if (0 === e.length) return e;
      for (var t = [], a = 0; a < e.length; a++) t.push(e[a].value);
      return t
    }

    function A(e, t) {
      for (var a = 0, n = 0, r; n < e.length; n++) {
        var s = e[n],
          o = Array.isArray(s);
        if (0 == n && o && (a = s.length), o && s.length !== a) return;
        var l = o ? A(s, t) : t(s);
        if (void 0 === r) r = l;
        else if (r !== l) return "mixed"
      }
      return r
    }

    function O(e) {
      return e[e.length - 1]
    }

    function _(e) {
      return e.slice(0, e.length - 1)
    }

    function C(e, t) {
      return -1 !== e.indexOf(t)
    }
    a.d(t, "a", function () {
      return n
    }), a.d(t, "r", function () {
      return s
    }), a.d(t, "s", function () {
      return o
    }), a.d(t, "o", function () {
      return l
    }), a.d(t, "n", function () {
      return m
    }), a.d(t, "p", function () {
      return d
    }), a.d(t, "q", function () {
      return g
    }), a.d(t, "e", function () {
      return x
    }), a.d(t, "m", function () {
      return f
    }), a.d(t, "f", function () {
      return h
    }), a.d(t, "c", function () {
      return b
    }), a.d(t, "d", function () {
      return v
    }), a.d(t, "k", function () {
      return N
    }), a.d(t, "i", function () {
      return M
    }), a.d(t, "g", function () {
      return S
    }), a.d(t, "h", function () {
      return A
    }), a.d(t, "l", function () {
      return O
    }), a.d(t, "j", function () {
      return _
    }), a.d(t, "b", function () {
      return C
    });
    var E = a(3),
      w = a(1),
      k = a(5),
      T = a(6),
      I = a(10)
  }, function (e, t, a) {
    "use strict";

    function n(e) {
      return !("boolean" != typeof e) || !!isFinite(e) && e === Math.round(e)
    }

    function i(e, t) {
      if ("function" == typeof t) return t(e);
      if (e === 1 / 0) return "Infinity";
      if (e === -Infinity) return "-Infinity";
      if (isNaN(e)) return "NaN";
      var a = "auto",
        n;
      switch (t && (t.notation && (a = t.notation), Object(x.y)(t) ? n = t : Object(x.y)(t.precision) && (n = t.precision)), a) {
        case "fixed":
          return o(e, n);
        case "exponential":
          return l(e, n);
        case "engineering":
          return s(e, n);
        case "auto":
          if (t && t.exponential && (void 0 !== t.exponential.lower || void 0 !== t.exponential.upper)) {
            var i = Object(y.i)(t, function (e) {
              return e
            });
            return i.exponential = void 0, void 0 !== t.exponential.lower && (i.lowerExp = Math.round(Math.log(t.exponential.lower) / Math.LN10)), void 0 !== t.exponential.upper && (i.upperExp = Math.round(Math.log(t.exponential.upper) / Math.LN10)), console.warn("Deprecation warning: Formatting options exponential.lower and exponential.upper (minimum and maximum value) are replaced with exponential.lowerExp and exponential.upperExp (minimum and maximum exponent) since version 4.0.0. Replace " + JSON.stringify(t) + " with " + JSON.stringify(i)), p(e, n, i)
          }
          return p(e, n, t && t).replace(/((\.\d*?)(0+))($|e)/, function () {
            var t = arguments[2],
              a = arguments[4];
            return "." === t ? a : t + a
          });
        default:
          throw new Error("Unknown notation \"" + a + "\". Choose \"auto\", \"exponential\", or \"fixed\".");
      }
    }

    function r(e) {
      var t = (e + "").toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
      if (!t) throw new SyntaxError("Invalid number " + e);
      var a = t[1],
        n = t[2],
        i = parseFloat(t[4] || "0"),
        r = n.indexOf(".");
      i += -1 === r ? n.length - 1 : r - 1;
      var s = n.replace(".", "").replace(/^0*/, function (e) {
        return i -= e.length, ""
      }).replace(/0*$/, "").split("").map(function (e) {
        return parseInt(e)
      });
      return 0 === s.length && (s.push(0), i++), {
        sign: a,
        coefficients: s,
        exponent: i
      }
    }

    function s(t, a) {
      if (isNaN(t) || !isFinite(t)) return t + "";
      var n = m(r(t), a),
        i = n.exponent,
        e = n.coefficients,
        s = 0 == i % 3 ? i : 0 > i ? i - 3 - i % 3 : i - i % 3;
      if (Object(x.y)(a))
        for (; a > e.length || i - s + 1 > e.length;) e.push(0);
      else
        for (var o = 0 <= i ? i : Math.abs(s); e.length - 1 < o;) e.push(0);
      for (var l = Math.abs(i - s), p = 1; 0 < l;) p++, l--;
      var c = e.slice(p).join(""),
        d = Object(x.y)(a) && c.length || c.match(/[1-9]/) ? "." + c : "",
        u = e.slice(0, p).join("") + d + "e" + (0 <= i ? "+" : "") + s.toString();
      return n.sign + u
    }

    function o(e, t) {
      if (isNaN(e) || !isFinite(e)) return e + "";
      var a = r(e),
        n = "number" == typeof t ? m(a, a.exponent + 1 + t) : a,
        i = n.coefficients,
        s = n.exponent + 1,
        o = s + (t || 0);
      return i.length < o && (i = i.concat(d(o - i.length))), 0 > s && (i = d(-s + 1).concat(i), s = 1), s < i.length && i.splice(s, 0, 0 === s ? "0." : "."), n.sign + i.join("")
    }

    function l(t, a) {
      if (isNaN(t) || !isFinite(t)) return t + "";
      var n = r(t),
        i = a ? m(n, a) : n,
        s = i.coefficients,
        o = i.exponent;
      s.length < a && (s = s.concat(d(a - s.length)));
      var e = s.shift();
      return i.sign + e + (0 < s.length ? "." + s.join("") : "") + "e" + (0 <= o ? "+" : "") + o
    }

    function p(t, a, n) {
      if (isNaN(t) || !isFinite(t)) return t + "";
      var i = n && n.lowerExp !== void 0 ? n.lowerExp : -3,
        s = n && n.upperExp !== void 0 ? n.upperExp : 5,
        o = r(t),
        p = a ? m(o, a) : o;
      if (p.exponent < i || p.exponent >= s) return l(t, a);
      var u = p.coefficients,
        g = p.exponent;
      u.length < a && (u = u.concat(d(a - u.length))), u = u.concat(d(g - u.length + 1 + (u.length < a ? a - u.length : 0))), u = d(-g).concat(u);
      var e = 0 < g ? g : 0;
      return e < u.length - 1 && u.splice(e + 1, 0, "."), p.sign + u.join("")
    }

    function m(e, t) {
      for (var a = {
          sign: e.sign,
          coefficients: e.coefficients,
          exponent: e.exponent
        }, n = a.coefficients; 0 >= t;) n.unshift(0), a.exponent++, t++;
      if (n.length > t) {
        var r = n.splice(t, n.length - t);
        if (5 <= r[0]) {
          var s = t - 1;
          for (n[s]++; 10 === n[s];) n.pop(), 0 == s && (n.unshift(0), a.exponent++, s++), s--, n[s]++
        }
      }
      return a
    }

    function d(e) {
      for (var t = [], a = 0; a < e; a++) t.push(0);
      return t
    }

    function u(e) {
      return e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length
    }

    function g(e, t, a) {
      if (null === a || a === void 0) return e === t;
      if (e === t) return !0;
      if (isNaN(e) || isNaN(t)) return !1;
      if (isFinite(e) && isFinite(t)) {
        var n = Math.abs(e - t);
        return !!(n < S) || n <= Math.max(Math.abs(e), Math.abs(t)) * a
      }
      return !1
    }
    a.d(t, "i", function () {
      return n
    }), a.d(t, "n", function () {
      return f
    }), a.d(t, "l", function () {
      return h
    }), a.d(t, "j", function () {
      return b
    }), a.d(t, "k", function () {
      return v
    }), a.d(t, "d", function () {
      return N
    }), a.d(t, "g", function () {
      return M
    }), a.d(t, "h", function () {
      return i
    }), a.d(t, "q", function () {
      return o
    }), a.d(t, "f", function () {
      return u
    }), a.d(t, "m", function () {
      return g
    }), a.d(t, "a", function () {
      return A
    }), a.d(t, "b", function () {
      return O
    }), a.d(t, "c", function () {
      return _
    }), a.d(t, "e", function () {
      return C
    }), a.d(t, "o", function () {
      return E
    }), a.d(t, "p", function () {
      return w
    });
    var y = a(4),
      x = a(1),
      f = Math.sign || function (e) {
        return 0 < e ? 1 : 0 > e ? -1 : 0
      },
      h = Math.log2 || function (e) {
        return Math.log(e) / Math.LN2
      },
      b = Math.log10 || function (e) {
        return Math.log(e) / Math.LN10
      },
      v = Math.log1p || function (e) {
        return Math.log(e + 1)
      },
      N = Math.cbrt || function (e) {
        if (0 === e) return e;
        var t = 0 > e,
          a;
        return t && (e = -e), isFinite(e) ? (a = Math.exp(Math.log(e) / 3), a = (e / (a * a) + 2 * a) / 3) : a = e, t ? -a : a
      },
      M = Math.expm1 || function (e) {
        return 2e-4 <= e || -2e-4 >= e ? Math.exp(e) - 1 : e + e * e / 2 + e * e * e / 6
      },
      S = Number.EPSILON || 2220446049250313e-31,
      A = Math.acosh || function (e) {
        return Math.log(Math.sqrt(e * e - 1) + e)
      },
      O = Math.asinh || function (e) {
        return Math.log(Math.sqrt(e * e + 1) + e)
      },
      _ = Math.atanh || function (e) {
        return Math.log((1 + e) / (1 - e)) / 2
      },
      C = Math.cosh || function (e) {
        return (Math.exp(e) + Math.exp(-e)) / 2
      },
      E = Math.sinh || function (e) {
        return (Math.exp(e) - Math.exp(-e)) / 2
      },
      w = Math.tanh || function (t) {
        var a = Math.exp(2 * t);
        return (a - 1) / (a + 1)
      }
  }, function (e, t, a) {
    "use strict";

    function n(e) {
      return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, n(e)
    }

    function i(e) {
      var t = n(e);
      if ("number" === t || "string" === t || "boolean" === t || null === e || e === void 0) return e;
      if ("function" == typeof e.clone) return e.clone();
      if (Array.isArray(e)) return e.map(function (e) {
        return i(e)
      });
      if (e instanceof Date) return new Date(e.valueOf());
      if (Object(f.e)(e)) return e;
      if (e instanceof RegExp) throw new TypeError("Cannot clone " + e);
      return r(e, i)
    }

    function r(e, t) {
      var a = {};
      for (var n in e) u(e, n) && (a[n] = t(e[n]));
      return a
    }

    function s(e, t) {
      for (var a in t) u(t, a) && (e[a] = t[a]);
      return e
    }

    function o(e, t) {
      if (Array.isArray(t)) throw new TypeError("Arrays are not supported by deepExtend");
      for (var a in t)
        if (u(t, a))
          if (t[a] && t[a].constructor === Object) void 0 === e[a] && (e[a] = {}), e[a] && e[a].constructor === Object ? o(e[a], t[a]) : e[a] = t[a];
          else if (Array.isArray(t[a])) throw new TypeError("Arrays are not supported by deepExtend");
      else e[a] = t[a];
      return e
    }

    function l(e, t) {
      var a, n, r;
      if (Array.isArray(e)) {
        if (!Array.isArray(t)) return !1;
        if (e.length !== t.length) return !1;
        for (n = 0, r = e.length; n < r; n++)
          if (!l(e[n], t[n])) return !1;
        return !0
      }
      if ("function" == typeof e) return e === t;
      if (e instanceof Object) {
        if (Array.isArray(t) || !(t instanceof Object)) return !1;
        for (a in e)
          if (!(a in t) || !l(e[a], t[a])) return !1;
        for (a in t)
          if (!(a in e) || !l(e[a], t[a])) return !1;
        return !0
      }
      return e === t
    }

    function p(e) {
      var t = {};
      return m(e, t), t
    }

    function m(e, t) {
      for (var a in e)
        if (e.hasOwnProperty(a)) {
          var i = e[a];
          "object" === n(i) && null !== i ? m(i, t) : t[a] = i
        }
    }

    function c(e, t, a) {
      var n = !0,
        i;
      Object.defineProperty(e, t, {
        get: function () {
          return n && (i = a(), n = !1), i
        },
        set: function (e) {
          i = e, n = !1
        },
        configurable: !0,
        enumerable: !0
      })
    }

    function d(e, t) {
      if (t && "string" == typeof t) return d(e, t.split("."));
      var a = e;
      if (t)
        for (var n = 0, r; n < t.length; n++) r = t[n], r in a || (a[r] = {}), a = a[r];
      return a
    }

    function u(e, t) {
      return e && Object.hasOwnProperty.call(e, t)
    }

    function g(e) {
      return e && "function" == typeof e.factory
    }

    function y(e, t) {
      for (var a = {}, n = 0; n < t.length; n++) {
        var r = t[n],
          s = e[r];
        s !== void 0 && (a[r] = s)
      }
      return a
    }

    function x(e) {
      return Object.keys(e).map(function (t) {
        return e[t]
      })
    }
    a.d(t, "a", function () {
      return i
    }), a.d(t, "i", function () {
      return r
    }), a.d(t, "e", function () {
      return s
    }), a.d(t, "b", function () {
      return o
    }), a.d(t, "d", function () {
      return l
    }), a.d(t, "c", function () {
      return p
    }), a.d(t, "h", function () {
      return c
    }), a.d(t, "k", function () {
      return d
    }), a.d(t, "f", function () {
      return u
    }), a.d(t, "g", function () {
      return g
    }), a.d(t, "j", function () {
      return y
    }), a.d(t, "l", function () {
      return x
    });
    var f = a(1)
  }, function (e, t, a) {
    "use strict";

    function n(e, t) {
      if ("function" == typeof t) return t(e);
      if (!e.isFinite()) return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
      var a = "auto",
        o;
      switch (void 0 !== t && (t.notation && (a = t.notation), "number" == typeof t ? o = t : t.precision && (o = t.precision)), a) {
        case "fixed":
          return s(e, o);
        case "exponential":
          return r(e, o);
        case "engineering":
          return i(e, o);
        case "auto":
          if (t && t.exponential && (void 0 !== t.exponential.lower || void 0 !== t.exponential.upper)) {
            var l = Object(x.i)(t, function (e) {
              return e
            });
            return l.exponential = void 0, void 0 !== t.exponential.lower && (l.lowerExp = Math.round(Math.log(t.exponential.lower) / Math.LN10)), void 0 !== t.exponential.upper && (l.upperExp = Math.round(Math.log(t.exponential.upper) / Math.LN10)), console.warn("Deprecation warning: Formatting options exponential.lower and exponential.upper (minimum and maximum value) are replaced with exponential.lowerExp and exponential.upperExp (minimum and maximum exponent) since version 4.0.0. Replace " + JSON.stringify(t) + " with " + JSON.stringify(l)), n(e, l)
          }
          var p = t && void 0 !== t.lowerExp ? t.lowerExp : -3,
            m = t && void 0 !== t.upperExp ? t.upperExp : 5;
          if (e.isZero()) return "0";
          var c = e.toSignificantDigits(o),
            d = c.e,
            u;
          return u = d >= p && d < m ? c.toFixed() : r(e, o), u.replace(/((\.\d*?)(0+))($|e)/, function () {
            var t = arguments[2],
              a = arguments[4];
            return "." === t ? a : t + a
          });
        default:
          throw new Error("Unknown notation \"" + a + "\". Choose \"auto\", \"exponential\", or \"fixed\".");
      }
    }

    function i(t, a) {
      var n = t.e,
        e = 0 == n % 3 ? n : 0 > n ? n - 3 - n % 3 : n - n % 3,
        i = t.mul(Math.pow(10, -e)),
        r = i.toPrecision(a);
      return -1 !== r.indexOf("e") && (r = i.toString()), r + "e" + (0 <= n ? "+" : "") + e.toString()
    }

    function r(e, t) {
      return void 0 === t ? e.toExponential() : e.toExponential(t - 1)
    }

    function s(e, t) {
      return e.toFixed(t)
    }

    function o(e) {
      return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, o(e)
    }

    function l(e, t) {
      var a = e.length - t.length,
        n = e.length;
      return e.substring(a, n) === t
    }

    function p(e, t) {
      if ("number" == typeof e) return Object(y.h)(e, t);
      if (Object(f.e)(e)) return n(e, t);
      if (u(e)) return t && "decimal" === t.fraction ? e.toString() : e.s * e.n + "/" + e.d;
      if (Array.isArray(e)) return d(e, t);
      if (Object(f.I)(e)) return "\"" + e + "\"";
      if ("function" == typeof e) return e.syntax ? e.syntax + "" : "function";
      if (e && "object" === o(e)) {
        if ("function" == typeof e.format) return e.format(t);
        if (e && e.toString() !== {}.toString()) return e.toString();
        var a = [];
        for (var i in e) e.hasOwnProperty(i) && a.push("\"" + i + "\": " + p(e[i], t));
        return "{" + a.join(", ") + "}"
      }
      return e + ""
    }

    function m(e) {
      for (var t = e + "", a = "", n = 0; n < t.length;) {
        var r = t.charAt(n);
        "\\" === r ? (a += r, n++, r = t.charAt(n), ("" === r || -1 === "\"\\/bfnrtu".indexOf(r)) && (a += "\\"), a += r) : "\"" === r ? a += "\\\"" : a += r, n++
      }
      return "\"" + a + "\""
    }

    function c(e) {
      var t = e + "";
      return t = t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), t
    }

    function d(e, t) {
      if (Array.isArray(e)) {
        for (var a = "[", n = e.length, r = 0; r < n; r++) 0 != r && (a += ", "), a += d(e[r], t);
        return a += "]", a
      }
      return p(e, t)
    }

    function u(e) {
      return e && "object" === o(e) && "number" == typeof e.s && "number" == typeof e.n && "number" == typeof e.d || !1
    }

    function g(e, t) {
      if (!Object(f.I)(e)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + Object(f.M)(e) + ", index: 0)");
      if (!Object(f.I)(t)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + Object(f.M)(t) + ", index: 1)");
      return e === t ? 0 : e > t ? 1 : -1
    }
    var f = a(1),
      y = a(3),
      x = a(4);
    a.d(t, "b", function () {
      return l
    }), a.d(t, "d", function () {
      return p
    }), a.d(t, "e", function () {
      return m
    }), a.d(t, "c", function () {
      return c
    }), a.d(t, "a", function () {
      return g
    })
  }, function (e, t, a) {
    "use strict";

    function n(e, t, a) {
      if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
      this.actual = e, this.expected = t, this.relation = a, this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(t) ? "[" + t.join(", ") + "]" : t) + ")", this.stack = new Error().stack
    }
    a.d(t, "a", function () {
      return n
    }), n.prototype = new RangeError, n.prototype.constructor = RangeError, n.prototype.name = "DimensionError", n.prototype.isDimensionError = !0
  }, , function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return n
    });
    var n = function () {
      var e = {};
      return function () {
        for (var t = arguments.length, a = Array(t), n = 0; n < t; n++) a[n] = arguments[n];
        var i = a.join(", ");
        if (!e[i]) {
          var r;
          e[i] = !0, (r = console).warn.apply(r, ["Warning:"].concat(a))
        }
      }
    }()
  }, function (e, t) {
    var a, n;
    (function () {
      'use strict';

      function i(e, t) {
        var a = Math.abs(e),
          n = Math.abs(t);
        return 0 === e ? Math.log(n) : 0 === t ? Math.log(a) : 3e3 > a && 3e3 > n ? .5 * Math.log(e * e + t * t) : Math.log(e / Math.cos(Math.atan2(t, e)))
      }

      function s(e, t) {
        if (!(this instanceof s)) return new s(e, t);
        var a = u(e, t);
        this.re = a.re, this.im = a.im
      }
      var o = function (e) {
          return .5 * (Math.exp(e) + Math.exp(-e))
        },
        l = function (e) {
          return .5 * (Math.exp(e) - Math.exp(-e))
        },
        p = function (e) {
          var t = Math.PI / 4;
          if (e < -t || e > t) return Math.cos(e) - 1;
          var a = e * e;
          return a * (-.5 + a * (1 / 24 + a * (-1 / 720 + a * (1 / 40320 + a * (-1 / 3628800 + a * (1 / 4790014600 + a * (-1 / 87178291200 + a * (1 / 20922789888e3))))))))
        },
        m = function (e, t) {
          var n = Math.abs(e),
            i = Math.abs(t);
          return 3e3 > n && 3e3 > i ? Math.sqrt(n * n + i * i) : (n < i ? (n = i, i = e / t) : i = t / e, n * Math.sqrt(1 + i * i))
        },
        d = function () {
          throw SyntaxError("Invalid Param")
        },
        u = function (e, t) {
          var a = {
            re: 0,
            im: 0
          };
          if (void 0 === e || null === e) a.re = a.im = 0;
          else if (void 0 !== t) a.re = e, a.im = t;
          else switch (typeof e) {
            case "object":
              if ("im" in e && "re" in e) a.re = e.re, a.im = e.im;
              else if ("abs" in e && "arg" in e) {
                if (!Number.isFinite(e.abs) && Number.isFinite(e.arg)) return s.INFINITY;
                a.re = e.abs * Math.cos(e.arg), a.im = e.abs * Math.sin(e.arg)
              } else if ("r" in e && "phi" in e) {
                if (!Number.isFinite(e.r) && Number.isFinite(e.phi)) return s.INFINITY;
                a.re = e.r * Math.cos(e.phi), a.im = e.r * Math.sin(e.phi)
              } else 2 === e.length ? (a.re = e[0], a.im = e[1]) : d();
              break;
            case "string":
              a.im = a.re = 0;
              var n = e.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),
                r = 1,
                o = 0;
              null === n && d();
              for (var l = 0, p; l < n.length; l++) p = n[l], " " === p || "\t" === p || "\n" === p || ("+" === p ? r++ : "-" === p ? o++ : "i" === p || "I" === p ? (0 === r + o && d(), " " === n[l + 1] || isNaN(n[l + 1]) ? a.im += parseFloat((o % 2 ? "-" : "") + "1") : (a.im += parseFloat((o % 2 ? "-" : "") + n[l + 1]), l++), r = o = 0) : ((0 === r + o || isNaN(p)) && d(), "i" === n[l + 1] || "I" === n[l + 1] ? (a.im += parseFloat((o % 2 ? "-" : "") + p), l++) : a.re += parseFloat((o % 2 ? "-" : "") + p), r = o = 0));
              0 < r + o && d();
              break;
            case "number":
              a.im = 0, a.re = e;
              break;
            default:
              d();
          }
          return isNaN(a.re) || isNaN(a.im), a
        };
      s.prototype = {
        re: 0,
        im: 0,
        sign: function () {
          var e = this.abs();
          return new s(this.re / e, this.im / e)
        },
        add: function (e, t) {
          var a = new s(e, t);
          return this.isInfinite() && a.isInfinite() ? s.NAN : this.isInfinite() || a.isInfinite() ? s.INFINITY : new s(this.re + a.re, this.im + a.im)
        },
        sub: function (e, t) {
          var a = new s(e, t);
          return this.isInfinite() && a.isInfinite() ? s.NAN : this.isInfinite() || a.isInfinite() ? s.INFINITY : new s(this.re - a.re, this.im - a.im)
        },
        mul: function (e, t) {
          var a = new s(e, t);
          return this.isInfinite() && a.isZero() || this.isZero() && a.isInfinite() ? s.NAN : this.isInfinite() || a.isInfinite() ? s.INFINITY : 0 === a.im && 0 === this.im ? new s(this.re * a.re, 0) : new s(this.re * a.re - this.im * a.im, this.re * a.im + this.im * a.re)
        },
        div: function (e, n) {
          var i = new s(e, n);
          if (this.isZero() && i.isZero() || this.isInfinite() && i.isInfinite()) return s.NAN;
          if (this.isInfinite() || i.isZero()) return s.INFINITY;
          if (this.isZero() || i.isInfinite()) return s.ZERO;
          e = this.re, n = this.im;
          var r = i.re,
            o = i.im,
            l, p;
          return 0 === o ? new s(e / r, n / r) : Math.abs(r) < Math.abs(o) ? (p = r / o, l = r * p + o, new s((e * p + n) / l, (n * p - e) / l)) : (p = o / r, l = o * p + r, new s((e + n * p) / l, (n - e * p) / l))
        },
        pow: function (e, t) {
          var n = new s(e, t);
          if (e = this.re, t = this.im, n.isZero()) return s.ONE;
          if (0 === n.im) {
            if (0 === t && 0 <= e) return new s(Math.pow(e, n.re), 0);
            if (0 === e) switch ((n.re % 4 + 4) % 4) {
              case 0:
                return new s(Math.pow(t, n.re), 0);
              case 1:
                return new s(0, Math.pow(t, n.re));
              case 2:
                return new s(-Math.pow(t, n.re), 0);
              case 3:
                return new s(0, -Math.pow(t, n.re));
            }
          }
          if (0 === e && 0 === t && 0 < n.re && 0 <= n.im) return s.ZERO;
          var r = Math.atan2(t, e),
            o = i(e, t);
          return e = Math.exp(n.re * o - n.im * r), t = n.im * o + n.re * r, new s(e * Math.cos(t), e * Math.sin(t))
        },
        sqrt: function () {
          var e = this.re,
            t = this.im,
            a = this.abs(),
            n, i;
          if (0 <= e) {
            if (0 === t) return new s(Math.sqrt(e), 0);
            n = .5 * Math.sqrt(2 * (a + e))
          } else n = Math.abs(t) / Math.sqrt(2 * (a - e));
          return i = 0 >= e ? .5 * Math.sqrt(2 * (a - e)) : Math.abs(t) / Math.sqrt(2 * (a + e)), new s(n, 0 > t ? -i : i)
        },
        exp: function () {
          var e = Math.exp(this.re);
          return 0 === this.im, new s(e * Math.cos(this.im), e * Math.sin(this.im))
        },
        expm1: function () {
          var e = this.re,
            t = this.im;
          return new s(Math.expm1(e) * Math.cos(t) + p(t), Math.exp(e) * Math.sin(t))
        },
        log: function () {
          var e = this.re,
            t = this.im;
          return 0 === t && 0 < e, new s(i(e, t), Math.atan2(t, e))
        },
        abs: function () {
          return m(this.re, this.im)
        },
        arg: function () {
          return Math.atan2(this.im, this.re)
        },
        sin: function () {
          var e = this.re,
            t = this.im;
          return new s(Math.sin(e) * o(t), Math.cos(e) * l(t))
        },
        cos: function () {
          var e = this.re,
            t = this.im;
          return new s(Math.cos(e) * o(t), -Math.sin(e) * l(t))
        },
        tan: function () {
          var e = 2 * this.re,
            t = 2 * this.im,
            a = Math.cos(e) + o(t);
          return new s(Math.sin(e) / a, l(t) / a)
        },
        cot: function () {
          var e = 2 * this.re,
            t = 2 * this.im,
            a = Math.cos(e) - o(t);
          return new s(-Math.sin(e) / a, l(t) / a)
        },
        sec: function () {
          var e = this.re,
            t = this.im,
            a = .5 * o(2 * t) + .5 * Math.cos(2 * e);
          return new s(Math.cos(e) * o(t) / a, Math.sin(e) * l(t) / a)
        },
        csc: function () {
          var e = this.re,
            t = this.im,
            a = .5 * o(2 * t) - .5 * Math.cos(2 * e);
          return new s(Math.sin(e) * o(t) / a, -Math.cos(e) * l(t) / a)
        },
        asin: function () {
          var e = this.re,
            t = this.im,
            a = new s(t * t - e * e + 1, -2 * e * t).sqrt(),
            n = new s(a.re - t, a.im + e).log();
          return new s(n.im, -n.re)
        },
        acos: function () {
          var e = this.re,
            t = this.im,
            a = new s(t * t - e * e + 1, -2 * e * t).sqrt(),
            n = new s(a.re - t, a.im + e).log();
          return new s(Math.PI / 2 - n.im, n.re)
        },
        atan: function () {
          var e = this.re,
            t = this.im;
          if (0 === e) {
            if (1 === t) return new s(0, 1 / 0);
            if (-1 === t) return new s(0, -Infinity)
          }
          var a = e * e + (1 - t) * (1 - t),
            n = new s((1 - t * t - e * e) / a, -2 * e / a).log();
          return new s(-.5 * n.im, .5 * n.re)
        },
        acot: function () {
          var e = this.re,
            t = this.im;
          if (0 === t) return new s(Math.atan2(1, e), 0);
          var a = e * e + t * t;
          return 0 == a ? new s(0 === e ? 0 : e / 0, 0 === t ? 0 : -t / 0).atan() : new s(e / a, -t / a).atan()
        },
        asec: function () {
          var e = this.re,
            t = this.im;
          if (0 === e && 0 === t) return new s(0, 1 / 0);
          var a = e * e + t * t;
          return 0 == a ? new s(0 === e ? 0 : e / 0, 0 === t ? 0 : -t / 0).acos() : new s(e / a, -t / a).acos()
        },
        acsc: function () {
          var e = this.re,
            t = this.im;
          if (0 === e && 0 === t) return new s(Math.PI / 2, 1 / 0);
          var a = e * e + t * t;
          return 0 == a ? new s(0 === e ? 0 : e / 0, 0 === t ? 0 : -t / 0).asin() : new s(e / a, -t / a).asin()
        },
        sinh: function () {
          var e = this.re,
            t = this.im;
          return new s(l(e) * Math.cos(t), o(e) * Math.sin(t))
        },
        cosh: function () {
          var e = this.re,
            t = this.im;
          return new s(o(e) * Math.cos(t), l(e) * Math.sin(t))
        },
        tanh: function () {
          var e = 2 * this.re,
            t = 2 * this.im,
            a = o(e) + Math.cos(t);
          return new s(l(e) / a, Math.sin(t) / a)
        },
        coth: function () {
          var e = 2 * this.re,
            t = 2 * this.im,
            a = o(e) - Math.cos(t);
          return new s(l(e) / a, -Math.sin(t) / a)
        },
        csch: function () {
          var e = this.re,
            t = this.im,
            a = Math.cos(2 * t) - o(2 * e);
          return new s(-2 * l(e) * Math.cos(t) / a, 2 * o(e) * Math.sin(t) / a)
        },
        sech: function () {
          var e = this.re,
            t = this.im,
            a = Math.cos(2 * t) + o(2 * e);
          return new s(2 * o(e) * Math.cos(t) / a, -2 * l(e) * Math.sin(t) / a)
        },
        asinh: function () {
          var e = this.im;
          this.im = -this.re, this.re = e;
          var t = this.asin();
          return this.re = -this.im, this.im = e, e = t.re, t.re = -t.im, t.im = e, t
        },
        acosh: function () {
          var e = this.acos();
          if (0 >= e.im) {
            var t = e.re;
            e.re = -e.im, e.im = t
          } else {
            var t = e.im;
            e.im = -e.re, e.re = t
          }
          return e
        },
        atanh: function () {
          var e = this.re,
            t = this.im,
            a = 1 - e,
            n = 1 + e,
            r = a * a + t * t,
            o = 0 === r ? new s(-1 === e ? 0 : e / 0, 0 === t ? 0 : t / 0) : new s((n * a - t * t) / r, (t * a + n * t) / r),
            l = o.re;
          return o.re = i(o.re, o.im) / 2, o.im = Math.atan2(o.im, l) / 2, 1 < e && 0 === t && (o.im = -o.im), o
        },
        acoth: function () {
          var e = this.re,
            t = this.im;
          if (0 === e && 0 === t) return new s(0, Math.PI / 2);
          var a = e * e + t * t;
          return 0 == a ? new s(0 === e ? 0 : e / 0, 0 === t ? 0 : -t / 0).atanh() : new s(e / a, -t / a).atanh()
        },
        acsch: function () {
          var e = this.re,
            t = this.im;
          if (0 === t) return new s(0 === e ? 1 / 0 : Math.log(e + Math.sqrt(e * e + 1)), 0);
          var a = e * e + t * t;
          return 0 == a ? new s(0 === e ? 0 : e / 0, 0 === t ? 0 : -t / 0).asinh() : new s(e / a, -t / a).asinh()
        },
        asech: function () {
          var e = this.re,
            t = this.im;
          if (this.isZero()) return s.INFINITY;
          var a = e * e + t * t;
          return 0 == a ? new s(0 === e ? 0 : e / 0, 0 === t ? 0 : -t / 0).acosh() : new s(e / a, -t / a).acosh()
        },
        inverse: function () {
          if (this.isZero()) return s.INFINITY;
          if (this.isInfinite()) return s.ZERO;
          var e = this.re,
            t = this.im,
            a = e * e + t * t;
          return new s(e / a, -t / a)
        },
        conjugate: function () {
          return new s(this.re, -this.im)
        },
        neg: function () {
          return new s(-this.re, -this.im)
        },
        ceil: function (e) {
          return e = Math.pow(10, e || 0), new s(Math.ceil(this.re * e) / e, Math.ceil(this.im * e) / e)
        },
        floor: function (e) {
          return e = Math.pow(10, e || 0), new s(Math.floor(this.re * e) / e, Math.floor(this.im * e) / e)
        },
        round: function (e) {
          return e = Math.pow(10, e || 0), new s(Math.round(this.re * e) / e, Math.round(this.im * e) / e)
        },
        equals: function (e, t) {
          var a = new s(e, t);
          return Math.abs(a.re - this.re) <= s.EPSILON && Math.abs(a.im - this.im) <= s.EPSILON
        },
        clone: function () {
          return new s(this.re, this.im)
        },
        toString: function () {
          var e = this.re,
            t = this.im,
            a = "";
          return this.isNaN() ? "NaN" : this.isZero() ? "0" : this.isInfinite() ? "Infinity" : (0 !== e && (a += e), 0 !== t && (0 === e ? 0 > t && (a += "-") : a += 0 > t ? " - " : " + ", t = Math.abs(t), 1 !== t && (a += t), a += "i"), a ? a : "0")
        },
        toVector: function () {
          return [this.re, this.im]
        },
        valueOf: function () {
          return 0 === this.im ? this.re : null
        },
        isNaN: function () {
          return isNaN(this.re) || isNaN(this.im)
        },
        isZero: function () {
          return (0 === this.re || -0 === this.re) && (0 === this.im || -0 === this.im)
        },
        isFinite: function () {
          return isFinite(this.re) && isFinite(this.im)
        },
        isInfinite: function () {
          return !(this.isNaN() || this.isFinite())
        }
      }, s.ZERO = new s(0, 0), s.ONE = new s(1, 0), s.I = new s(0, 1), s.PI = new s(Math.PI, 0), s.E = new s(Math.E, 0), s.INFINITY = new s(1 / 0, 1 / 0), s.NAN = new s(NaN, NaN), s.EPSILON = 1e-16, a = [], n = function () {
        return s
      }.apply(t, a), !(n !== void 0 && (e.exports = n))
    })(this)
  }, function (e, t, a) {
    "use strict";

    function n(e, t, a) {
      if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
      this.index = e, 3 > arguments.length ? (this.min = 0, this.max = t) : (this.min = t, this.max = a), this.message = void 0 !== this.min && this.index < this.min ? "Index out of range (" + this.index + " < " + this.min + ")" : void 0 !== this.max && this.index >= this.max ? "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : "Index out of range (" + this.index + ")", this.stack = new Error().stack
    }
    a.d(t, "a", function () {
      return n
    }), n.prototype = new RangeError, n.prototype.constructor = RangeError, n.prototype.name = "IndexError", n.prototype.isIndexError = !0
  }, function (e, t) {
    var a, n;
    (function () {
      "use strict";

      function i(e) {
        function t() {
          var t = Error.apply(this, arguments);
          t.name = this.name = e, this.stack = t.stack, this.message = t.message
        }

        function a() {}
        return a.prototype = Error.prototype, t.prototype = new a, t
      }

      function r(e, t) {
        return isNaN(e = parseInt(e, 10)) && o(), e * t
      }

      function o() {
        throw new y
      }

      function l(t, a, n) {
        for (var i = 1; 0 < a; t = t * t % n, a >>= 1) 1 & a && (i = i * t % n);
        return i
      }

      function p(e, a) {
        for (; 0 == a % 2; a /= 2);
        for (; 0 == a % 5; a /= 5);
        if (1 === a) return 0;
        for (var n = 10 % a, i = 1; 1 !== n; i++)
          if (n = 10 * n % a, 2000 < i) return 0;
        return i
      }

      function m(e, a, n) {
        for (var i = 1, r = l(10, n, a), s = 0; 300 > s; s++) {
          if (i === r) return s;
          i = 10 * i % a, r = 10 * r % a
        }
        return 0
      }

      function c(e, t) {
        if (!e) return t;
        if (!t) return e;
        for (;;) {
          if (e %= t, !e) return t;
          if (t %= e, !t) return e
        }
      }

      function d(e, t) {
        return this instanceof d ? void(x(e, t), e = d.REDUCE ? c(u.d, u.n) : 1, this.s = u.s, this.n = u.n / e, this.d = u.d / e) : new d(e, t)
      }
      var u = {
          s: 1,
          n: 0,
          d: 1
        },
        g = d.DivisionByZero = i("DivisionByZero"),
        y = d.InvalidParameter = i("InvalidParameter"),
        x = function (e, t) {
          var a = 0,
            i = 1,
            l = 1,
            p = 0,
            m = 0,
            c = 0,
            f = 1,
            h = 1,
            b = 0,
            S = 1,
            O = 1,
            _ = 1,
            E = 1e7,
            N;
          if (e === void 0 || null === e);
          else if (t !== void 0) a = e, i = t, l = a * i;
          else switch (typeof e) {
            case "object": {
              "d" in e && "n" in e ? (a = e.n, i = e.d, "s" in e && (a *= e.s)) : 0 in e ? (a = e[0], 1 in e && (i = e[1])) : o(), l = a * i;
              break
            }
            case "number": {
              if (0 > e && (l = e, e = -e), 0 == e % 1) a = e;
              else if (0 < e) {
                for (1 <= e && (h = Math.pow(10, Math.floor(1 + Math.log(e) / Math.LN10)), e /= h); S <= E && _ <= E;)
                  if (N = (b + O) / (S + _), e === N) {
                    S + _ <= E ? (a = b + O, i = S + _) : _ > S ? (a = O, i = _) : (a = b, i = S);
                    break
                  } else e > N ? (b += O, S += _) : (O += b, _ += S), S > E ? (a = O, i = _) : (a = b, i = S);
                a *= h
              } else(isNaN(e) || isNaN(t)) && (i = a = NaN);
              break
            }
            case "string":
              if (S = e.match(/\d+|./g), null === S && o(), "-" === S[b] ? (l = -1, b++) : "+" === S[b] && b++, S.length === b + 1 ? m = r(S[b++], l) : "." === S[b + 1] || "." === S[b] ? ("." !== S[b] && (p = r(S[b++], l)), b++, (b + 1 === S.length || "(" === S[b + 1] && ")" === S[b + 3] || "'" === S[b + 1] && "'" === S[b + 3]) && (m = r(S[b], l), f = Math.pow(10, S[b].length), b++), ("(" === S[b] && ")" === S[b + 2] || "'" === S[b] && "'" === S[b + 2]) && (c = r(S[b + 1], l), h = Math.pow(10, S[b + 1].length) - 1, b += 3)) : "/" === S[b + 1] || ":" === S[b + 1] ? (m = r(S[b], l), f = r(S[b + 2], 1), b += 3) : "/" === S[b + 3] && " " === S[b + 1] && (p = r(S[b], l), m = r(S[b + 2], l), f = r(S[b + 4], 1), b += 5), S.length <= b) {
                i = f * h, l = a = c + i * p + h * m;
                break
              }
              default:
                o();
          }
          if (0 === i) throw new g;
          u.s = 0 > l ? -1 : 1, u.n = Math.abs(a), u.d = Math.abs(i)
        };
      d.REDUCE = 1, d.prototype = {
        s: 1,
        n: 0,
        d: 1,
        abs: function () {
          return new d(this.n, this.d)
        },
        neg: function () {
          return new d(-this.s * this.n, this.d)
        },
        add: function (e, t) {
          return x(e, t), new d(this.s * this.n * u.d + u.s * this.d * u.n, this.d * u.d)
        },
        sub: function (e, t) {
          return x(e, t), new d(this.s * this.n * u.d - u.s * this.d * u.n, this.d * u.d)
        },
        mul: function (e, t) {
          return x(e, t), new d(this.s * u.s * this.n * u.n, this.d * u.d)
        },
        div: function (e, t) {
          return x(e, t), new d(this.s * u.s * this.n * u.d, this.d * u.n)
        },
        clone: function () {
          return new d(this)
        },
        mod: function (e, t) {
          return isNaN(this.n) || isNaN(this.d) ? new d(NaN) : void 0 === e ? new d(this.s * this.n % this.d, 1) : (x(e, t), 0 === u.n && 0 === this.d && d(0, 0), new d(this.s * (u.d * this.n) % (u.n * this.d), u.d * this.d))
        },
        gcd: function (e, t) {
          return x(e, t), new d(c(u.n, this.n) * c(u.d, this.d), u.d * this.d)
        },
        lcm: function (e, t) {
          return x(e, t), 0 === u.n && 0 === this.n ? new d : new d(u.n * this.n, c(u.n, this.n) * c(u.d, this.d))
        },
        ceil: function (e) {
          return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new d(NaN) : new d(Math.ceil(e * this.s * this.n / this.d), e)
        },
        floor: function (e) {
          return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new d(NaN) : new d(Math.floor(e * this.s * this.n / this.d), e)
        },
        round: function (e) {
          return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new d(NaN) : new d(Math.round(e * this.s * this.n / this.d), e)
        },
        inverse: function () {
          return new d(this.s * this.d, this.n)
        },
        pow: function (e) {
          return 0 > e ? new d(Math.pow(this.s * this.d, -e), Math.pow(this.n, -e)) : new d(Math.pow(this.s * this.n, e), Math.pow(this.d, e))
        },
        equals: function (e, t) {
          return x(e, t), this.s * this.n * u.d == u.s * u.n * this.d
        },
        compare: function (e, a) {
          x(e, a);
          var n = this.s * this.n * u.d - u.s * u.n * this.d;
          return (0 < n) - (0 > n)
        },
        simplify: function (e) {
          function t(e) {
            return 1 === e.length ? new d(e[0]) : t(e.slice(1)).inverse().add(e[0])
          }
          if (isNaN(this.n) || isNaN(this.d)) return this;
          var a = this.abs().toContinued();
          e = e || .001;
          for (var n = 0, r; n < a.length; n++)
            if (r = t(a.slice(0, n + 1)), r.sub(this.abs()).abs().valueOf() < e) return r.mul(this.s);
          return this
        },
        divisible: function (e, t) {
          return x(e, t), u.n * this.d && !(this.n * u.d % (u.n * this.d))
        },
        valueOf: function () {
          return this.s * this.n / this.d
        },
        toFraction: function (e) {
          var t = "",
            a = this.n,
            i = this.d,
            r;
          return 0 > this.s && (t += "-"), 1 === i ? t += a : (e && 0 < (r = Math.floor(a / i)) && (t += r, t += " ", a %= i), t += a, t += "/", t += i), t
        },
        toLatex: function (e) {
          var t = "",
            a = this.n,
            i = this.d,
            r;
          return 0 > this.s && (t += "-"), 1 === i ? t += a : (e && 0 < (r = Math.floor(a / i)) && (t += r, a %= i), t += "\\frac{", t += a, t += "}{", t += i, t += "}"), t
        },
        toContinued: function () {
          var e = this.n,
            n = this.d,
            i = [],
            r;
          if (isNaN(this.n) || isNaN(this.d)) return i;
          do i.push(Math.floor(e / n)), r = e % n, e = n, n = r; while (1 !== e);
          return i
        },
        toString: function (e) {
          var t = this.n,
            a = this.d,
            n;
          if (isNaN(t) || isNaN(a)) return "NaN";
          d.REDUCE || (n = c(t, a), t /= n, a /= n), e = e || 15;
          var r = p(t, a),
            s = m(t, a, r),
            o = -1 === this.s ? "-" : "";
          if (o += 0 | t / a, t %= a, t *= 10, t && (o += "."), r) {
            for (var l = s; l--;) o += 0 | t / a, t %= a, t *= 10;
            o += "(";
            for (var l = r; l--;) o += 0 | t / a, t %= a, t *= 10;
            o += ")"
          } else
            for (var l = e; t && l--;) o += 0 | t / a, t %= a, t *= 10;
          return o
        }
      }, a = [], n = function () {
        return d
      }.apply(t, a), !(n !== void 0 && (e.exports = n))
    })(this)
  }, function (e) {
    e.exports = function e(t, a) {
      "use strict";
      var n = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
        r = /(^[ ]*|[ ]*$)/g,
        s = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
        o = /^0x[0-9a-f]+$/i,
        l = /^0/,
        p = function (t) {
          return e.insensitive && ("" + t).toLowerCase() || "" + t
        },
        i = p(t).replace(r, "") || "",
        m = p(a).replace(r, "") || "",
        c = i.replace(n, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
        d = m.replace(n, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
        u = parseInt(i.match(o), 16) || 1 !== c.length && i.match(s) && Date.parse(i),
        g = parseInt(m.match(o), 16) || u && m.match(s) && Date.parse(m) || null,
        y, x;
      if (g) {
        if (u < g) return -1;
        if (u > g) return 1
      }
      for (var f = 0, h = Math.max(c.length, d.length); f < h; f++) {
        if (y = !(c[f] || "").match(l) && parseFloat(c[f]) || c[f] || 0, x = !(d[f] || "").match(l) && parseFloat(d[f]) || d[f] || 0, isNaN(y) !== isNaN(x)) return isNaN(y) ? 1 : -1;
        if (typeof y != typeof x && (y += "", x += ""), y < x) return -1;
        if (y > x) return 1
      }
      return 0
    }
  }, function (e, t, a) {
    "use strict";

    function n(e, t, a, i) {
      if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
      this.fn = e, this.count = t, this.min = a, this.max = i, this.message = "Wrong number of arguments in function " + e + " (" + t + " provided, " + a + (i !== void 0 && null !== i ? "-" + i : "") + " expected)", this.stack = new Error().stack
    }
    a.d(t, "a", function () {
      return n
    }), n.prototype = new Error, n.prototype.constructor = Error, n.prototype.name = "ArgumentsError", n.prototype.isArgumentsError = !0
  }, function (e, t) {
    "use strict";
    var a, n, i;
    (function (r, s) {
      n = [], a = s, i = "function" == typeof a ? a.apply(t, n) : a, !(i !== void 0 && (e.exports = i))
    })(this, function () {
      function e() {
        return !0
      }

      function t() {
        return !1
      }

      function a() {}

      function n() {
        function i(e) {
          var t = F(X.types, function (t) {
            return t.name === e
          });
          if (t) return t;
          if ("any" === e) return W;
          var a = F(X.types, function (t) {
            return t.name.toLowerCase() === e.toLowerCase()
          });
          throw new TypeError("Unknown type \"" + e + "\"" + (a ? ". Did you mean \"" + a.name + "\"?" : ""))
        }

        function r(e) {
          return e === W ? 999 : X.types.indexOf(e)
        }

        function s(e) {
          var t = F(X.types, function (t) {
            return t.test(e)
          });
          if (t) return t.name;
          throw new TypeError("Value has unknown type. Value: " + e)
        }

        function o(e, t) {
          var a = s(e);
          if (t === a) return e;
          for (var n = 0, r; n < X.conversions.length; n++)
            if (r = X.conversions[n], r.from === a && r.to === t) return r.convert(e);
          throw new Error("Cannot convert from " + a + " to " + t)
        }

        function l(e) {
          return e.map(function (e) {
            var t = e.types.map(f);
            return (e.restParam ? "..." : "") + t.join("|")
          }).join(",")
        }

        function p(e, t) {
          var a = 0 === e.indexOf("..."),
            n = a ? 3 < e.length ? e.slice(3) : "any" : e,
            s = n.split("|").map(q).filter(B).filter(I),
            o = O(t, s),
            l = s.map(function (e) {
              var t = i(e);
              return {
                name: e,
                typeIndex: r(t),
                test: t.test,
                conversion: null,
                conversionIndex: -1
              }
            }),
            p = o.map(function (e) {
              var a = i(e.from);
              return {
                name: e.from,
                typeIndex: r(a),
                test: a.test,
                conversion: e,
                conversionIndex: t.indexOf(e)
              }
            });
          return {
            types: l.concat(p),
            restParam: a
          }
        }

        function m(e, t, a) {
          var n = [];
          return "" !== e.trim() && (n = e.split(",").map(q).map(function (e, t, n) {
            var i = p(e, a);
            if (i.restParam && t !== n.length - 1) throw new SyntaxError("Unexpected rest parameter \"" + e + "\": only allowed for the last parameter");
            return i
          })), n.some(j) ? null : {
            params: n,
            fn: t
          }
        }

        function c(e) {
          var t = P(e);
          return !!t && t.restParam
        }

        function d(e) {
          return e.types.some(function (e) {
            return null != e.conversion
          })
        }

        function u(t) {
          if (!t || 0 === t.types.length) return e;
          if (1 === t.types.length) return i(t.types[0].name).test;
          if (2 === t.types.length) {
            var a = i(t.types[0].name).test,
              n = i(t.types[1].name).test;
            return function (e) {
              return a(e) || n(e)
            }
          }
          var r = t.types.map(function (e) {
            return i(e.name).test
          });
          return function (e) {
            for (var t = 0; t < r.length; t++)
              if (r[t](e)) return !0;
            return !1
          }
        }

        function g(e) {
          var t, a, n;
          if (c(e)) {
            t = D(e).map(u);
            var r = t.length,
              s = u(P(e)),
              o = function (e) {
                for (var t = r; t < e.length; t++)
                  if (!s(e[t])) return !1;
                return !0
              };
            return function (e) {
              for (var a = 0; a < t.length; a++)
                if (!t[a](e[a])) return !1;
              return o(e) && e.length >= r + 1
            }
          }
          return 0 === e.length ? function (e) {
            return 0 === e.length
          } : 1 === e.length ? (a = u(e[0]), function (e) {
            return a(e[0]) && 1 === e.length
          }) : 2 === e.length ? (a = u(e[0]), n = u(e[1]), function (e) {
            return a(e[0]) && n(e[1]) && 2 === e.length
          }) : (t = e.map(u), function (e) {
            for (var a = 0; a < t.length; a++)
              if (!t[a](e[a])) return !1;
            return e.length === t.length
          })
        }

        function y(e, t) {
          return t < e.params.length ? e.params[t] : c(e.params) ? P(e.params) : null
        }

        function x(e, t, a) {
          var n = y(e, t),
            i = n ? a ? n.types.filter(h) : n.types : [];
          return i.map(f)
        }

        function f(e) {
          return e.name
        }

        function h(e) {
          return null === e.conversion || void 0 === e.conversion
        }

        function b(e, t) {
          var a = H(G(e, function (e) {
            return x(e, t, !1)
          }));
          return -1 === a.indexOf("any") ? a : ["any"]
        }

        function v(e, t, a) {
          var n = e || "unnamed",
            i = a,
            r, o, l;
          for (l = 0; l < t.length; l++) {
            var p = i.filter(function (e) {
              var a = u(y(e, l));
              return (l < e.params.length || c(e.params)) && a(t[l])
            });
            if (0 !== p.length) i = p;
            else if (o = b(i, l), 0 < o.length) {
              var m = s(t[l]);
              return r = new TypeError("Unexpected type of argument in function " + n + " (expected: " + o.join(" or ") + ", actual: " + m + ", index: " + l + ")"), r.data = {
                category: "wrongType",
                fn: n,
                index: l,
                actual: m,
                expected: o
              }, r
            }
          }
          var d = i.map(function (e) {
            return c(e.params) ? 1 / 0 : e.params.length
          });
          if (t.length < Math.min.apply(null, d)) return o = b(i, l), r = new TypeError("Too few arguments in function " + n + " (expected: " + o.join(" or ") + ", index: " + t.length + ")"), r.data = {
            category: "tooFewArgs",
            fn: n,
            index: t.length,
            expected: o
          }, r;
          var g = Math.max.apply(null, d);
          return t.length > g ? (r = new TypeError("Too many arguments in function " + n + " (expected: " + g + ", actual: " + t.length + ")"), r.data = {
            category: "tooManyArgs",
            fn: n,
            index: t.length,
            expectedLength: g
          }, r) : (r = new TypeError("Arguments of type \"" + t.join(", ") + "\" do not match any of the defined signatures of function " + n + "."), r.data = {
            category: "mismatch",
            actual: t.map(s)
          }, r)
        }

        function N(e) {
          for (var t = 999, a = 0; a < e.types.length; a++) h(e.types[a]) && (t = Math.min(t, e.types[a].typeIndex));
          return t
        }

        function M(e) {
          for (var t = 999, a = 0; a < e.types.length; a++) h(e.types[a]) || (t = Math.min(t, e.types[a].conversionIndex));
          return t
        }

        function S(e, t) {
          var a;
          return (a = e.restParam - t.restParam, 0 !== a) ? a : (a = d(e) - d(t), 0 !== a) ? a : (a = N(e) - N(t), 0 === a ? M(e) - M(t) : a)
        }

        function A(e, t) {
          var a = Math.min(e.params.length, t.params.length),
            n, r;
          if (r = e.params.some(d) - t.params.some(d), 0 !== r) return r;
          for (n = 0; n < a; n++)
            if (r = d(e.params[n]) - d(t.params[n]), 0 !== r) return r;
          for (n = 0; n < a; n++)
            if (r = S(e.params[n], t.params[n]), 0 !== r) return r;
          return e.params.length - t.params.length
        }

        function O(e, t) {
          var a = {};
          return e.forEach(function (e) {
            -1 !== t.indexOf(e.from) || -1 === t.indexOf(e.to) || a[e.from] || (a[e.from] = e)
          }), Object.keys(a).map(function (e) {
            return a[e]
          })
        }

        function _(e, t) {
          var a = t;
          if (e.some(d)) {
            var n = c(e),
              r = e.map(C);
            a = function () {
              for (var e = [], a = n ? arguments.length - 1 : arguments.length, s = 0; s < a; s++) e[s] = r[s](arguments[s]);
              return n && (e[a] = arguments[a].map(r[a])), t.apply(null, e)
            }
          }
          var s = a;
          if (c(e)) {
            var o = e.length - 1;
            s = function () {
              return a.apply(null, R(arguments, 0, o).concat([R(arguments, o)]))
            }
          }
          return s
        }

        function C(e) {
          var t = [],
            a = [],
            n, r, s, o;
          switch (e.types.forEach(function (e) {
            e.conversion && (t.push(i(e.conversion.from).test), a.push(e.conversion.convert))
          }), a.length) {
            case 0:
              return function (e) {
                return e
              };
            case 1:
              return n = t[0], s = a[0],
                function (e) {
                  return n(e) ? s(e) : e
                };
            case 2:
              return n = t[0], r = t[1], s = a[0], o = a[1],
                function (e) {
                  return n(e) ? s(e) : r(e) ? o(e) : e
                };
            default:
              return function (e) {
                for (var n = 0; n < a.length; n++)
                  if (t[n](e)) return a[n](e);
                return e
              };
          }
        }

        function E(e) {
          var t = {};
          return e.forEach(function (e) {
            e.params.some(d) || w(e.params, !0).forEach(function (a) {
              t[l(a)] = e.fn
            })
          }), t
        }

        function w(e, t) {
          function a(e, n, i) {
            if (n < e.length) {
              var r = e[n],
                s = t ? r.types.filter(h) : r.types,
                o;
              if (r.restParam) {
                var l = s.filter(h);
                o = l.length < s.length ? [l, s] : [s]
              } else o = s.map(function (e) {
                return [e]
              });
              return G(o, function (t) {
                return a(e, n + 1, i.concat([t]))
              })
            }
            var p = i.map(function (t, a) {
              return {
                types: t,
                restParam: a === e.length - 1 && c(e)
              }
            });
            return [p]
          }
          return a(e, 0, [])
        }

        function k(e, t) {
          for (var a = Math.max(e.params.length, t.params.length), n = 0; n < a; n++) {
            var r = x(e, n, !0),
              s = x(t, n, !0);
            if (!L(r, s)) return !1
          }
          var o = e.params.length,
            l = t.params.length,
            p = c(e.params),
            m = c(t.params);
          return p ? m ? o === l : l >= o : m ? o >= l : o === l
        }

        function T(e, n) {
          if (0 === Object.keys(n).length) throw new SyntaxError("No signatures provided");
          var i = [];
          Object.keys(n).map(function (e) {
            return m(e, n[e], X.conversions)
          }).filter(z).forEach(function (e) {
            var t = F(i, function (t) {
              return k(t, e)
            });
            if (t) throw new TypeError("Conflicting signatures \"" + l(t.params) + "\" and \"" + l(e.params) + "\".");
            i.push(e)
          });
          var r = G(i, function (e) {
            var t = e ? w(e.params, !1) : [];
            return t.map(function (t) {
              return {
                params: t,
                fn: e.fn
              }
            })
          }).filter(z);
          r.sort(A);
          var s = r[0] && 2 >= r[0].params.length && !c(r[0].params),
            o = r[1] && 2 >= r[1].params.length && !c(r[1].params),
            p = r[2] && 2 >= r[2].params.length && !c(r[2].params),
            d = r[3] && 2 >= r[3].params.length && !c(r[3].params),
            y = r[4] && 2 >= r[4].params.length && !c(r[4].params),
            x = r[5] && 2 >= r[5].params.length && !c(r[5].params),
            f = r.map(function (e) {
              return g(e.params)
            }),
            h = s ? u(r[0].params[0]) : t,
            b = o ? u(r[1].params[0]) : t,
            N = p ? u(r[2].params[0]) : t,
            M = d ? u(r[3].params[0]) : t,
            S = y ? u(r[4].params[0]) : t,
            O = x ? u(r[5].params[0]) : t,
            C = s ? u(r[0].params[1]) : t,
            T = o ? u(r[1].params[1]) : t,
            I = p ? u(r[2].params[1]) : t,
            q = d ? u(r[3].params[1]) : t,
            B = y ? u(r[4].params[1]) : t,
            j = x ? u(r[5].params[1]) : t,
            D = r.map(function (e) {
              return _(e.params, e.fn)
            }),
            P = s ? D[0] : a,
            R = o ? D[1] : a,
            U = p ? D[2] : a,
            L = d ? D[3] : a,
            H = y ? D[4] : a,
            $ = x ? D[5] : a,
            Z = s ? r[0].params.length : -1,
            V = o ? r[1].params.length : -1,
            W = p ? r[2].params.length : -1,
            J = d ? r[3].params.length : -1,
            Y = y ? r[4].params.length : -1,
            Q = x ? r[5].params.length : -1,
            K = s && o && p && d && y && x ? 6 : 0,
            ee = r.length,
            te = function () {
              for (var t = K; t < ee; t++)
                if (f[t](arguments)) return D[t].apply(null, arguments);
              throw v(e, arguments, r)
            },
            ae = function (e, t) {
              return arguments.length === Z && h(e) && C(t) ? P.apply(null, arguments) : arguments.length === V && b(e) && T(t) ? R.apply(null, arguments) : arguments.length === W && N(e) && I(t) ? U.apply(null, arguments) : arguments.length === J && M(e) && q(t) ? L.apply(null, arguments) : arguments.length === Y && S(e) && B(t) ? H.apply(null, arguments) : arguments.length === Q && O(e) && j(t) ? $.apply(null, arguments) : te.apply(null, arguments)
            };
          try {
            Object.defineProperty(ae, "name", {
              value: e
            })
          } catch (e) {}
          return ae.signatures = E(r), ae
        }

        function I(e) {
          return -1 === X.ignore.indexOf(e)
        }

        function q(e) {
          return e.trim()
        }

        function B(e) {
          return !!e
        }

        function z(e) {
          return null !== e
        }

        function j(e) {
          return 0 === e.types.length
        }

        function D(e) {
          return e.slice(0, e.length - 1)
        }

        function P(e) {
          return e[e.length - 1]
        }

        function R(e, t, a) {
          return Array.prototype.slice.call(e, t, a)
        }

        function U(e, t) {
          return -1 !== e.indexOf(t)
        }

        function L(e, t) {
          for (var a = 0; a < e.length; a++)
            if (U(t, e[a])) return !0;
          return !1
        }

        function F(e, t) {
          for (var a = 0; a < e.length; a++)
            if (t(e[a])) return e[a]
        }

        function H(e) {
          for (var t = {}, a = 0; a < e.length; a++) t[e[a]] = !0;
          return Object.keys(t)
        }

        function G(e, t) {
          return Array.prototype.concat.apply([], e.map(t))
        }

        function $(e) {
          for (var t = "", a = 0, n; a < e.length; a++)
            if (n = e[a], ("object" == typeof n.signatures || "string" == typeof n.signature) && "" !== n.name)
              if ("" === t) t = n.name;
              else if (t !== n.name) {
            var r = new Error("Function names do not match (expected: " + t + ", actual: " + n.name + ")");
            throw r.data = {
              actual: n.name,
              expected: t
            }, r
          }
          return t
        }

        function Z(e) {
          function t(e, t) {
            if (a.hasOwnProperty(e) && t !== a[e]) throw r = new Error("Signature \"" + e + "\" is defined twice"), r.data = {
              signature: e
            }, r
          }
          for (var a = {}, n = 0, r, s; n < e.length; n++)
            if (s = e[n], "object" == typeof s.signatures)
              for (var o in s.signatures) s.signatures.hasOwnProperty(o) && (t(o, s.signatures[o]), a[o] = s.signatures[o]);
            else if ("string" == typeof s.signature) t(s.signature, s), a[s.signature] = s;
          else throw r = new TypeError("Function is no typed-function (index: " + n + ")"), r.data = {
            index: n
          }, r;
          return a
        }
        var V = [{
            name: "number",
            test: function (e) {
              return "number" == typeof e
            }
          }, {
            name: "string",
            test: function (e) {
              return "string" == typeof e
            }
          }, {
            name: "boolean",
            test: function (e) {
              return "boolean" == typeof e
            }
          }, {
            name: "Function",
            test: function (e) {
              return "function" == typeof e
            }
          }, {
            name: "Array",
            test: Array.isArray
          }, {
            name: "Date",
            test: function (e) {
              return e instanceof Date
            }
          }, {
            name: "RegExp",
            test: function (e) {
              return e instanceof RegExp
            }
          }, {
            name: "Object",
            test: function (e) {
              return "object" == typeof e && e.constructor === Object
            }
          }, {
            name: "null",
            test: function (e) {
              return null === e
            }
          }, {
            name: "undefined",
            test: function (e) {
              return void 0 === e
            }
          }],
          W = {
            name: "any",
            test: e
          },
          J = [],
          Y = [],
          X = {
            types: V,
            conversions: Y,
            ignore: J
          };
        return X = T("typed", {
          "string, Object": T,
          Object: function (e) {
            var t = [];
            for (var a in e) e.hasOwnProperty(a) && t.push(e[a]);
            var n = $(t);
            return T(n, e)
          },
          "...Function": function (e) {
            return T($(e), Z(e))
          },
          "string, ...Function": function (e, t) {
            return T(e, Z(t))
          }
        }), X.create = n, X.types = V, X.conversions = Y, X.ignore = J, X.convert = o, X.find = function (e, t) {
          if (!e.signatures) throw new TypeError("Function is no typed-function");
          var a;
          if ("string" == typeof t) {
            a = t.split(",");
            for (var n = 0; n < a.length; n++) a[n] = a[n].trim()
          } else if (Array.isArray(t)) a = t;
          else throw new TypeError("String array or a comma separated string expected");
          var r = a.join(","),
            s = e.signatures[r];
          if (s) return s;
          throw new TypeError("Signature not found (signature: " + (e.name || "unnamed") + "(" + a.join(", ") + "))")
        }, X.addType = function (e, t) {
          if (!e || "string" != typeof e.name || "function" != typeof e.test) throw new TypeError("Object with properties {name: string, test: function} expected");
          if (!1 !== t)
            for (var a = 0; a < X.types.length; a++)
              if ("Object" === X.types[a].name) return void X.types.splice(a, 0, e);
          X.types.push(e)
        }, X.addConversion = function (e) {
          if (!e || "string" != typeof e.from || "string" != typeof e.to || "function" != typeof e.convert) throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
          X.conversions.push(e)
        }, X
      }
      return n()
    })
  }, function (e, t, a) {
    "use strict";
    (function (t) {
      function a(e) {
        var a = e.length,
          n = this,
          r = 0,
          o = n.i = n.j = 0,
          l = n.S = [],
          s;
        for (a || (e = [a++]); r < 256;) l[r] = r++;
        for (r = 0; r < 256; r++) l[r] = l[o = 255 & o + e[r % a] + (s = l[r])], l[o] = s;
        (n.g = function (e) {
          for (var a = 0, o = n.i, l = n.j, p = n.S, s; e--;) s = p[o = 255 & o + 1], a = 256 * a + p[255 & (p[o] = p[l = 255 & l + s]) + (p[l] = s)];
          return n.i = o, n.j = l, a
        })(256)
      }

      function n(e, t) {
        var a = [],
          i = (typeof e)[0],
          r;
        if (t && "o" == i)
          for (r in e) try {
            a.push(n(e[r], t - 1))
          } catch (t) {}
        return a.length ? a : "s" == i ? e : e + "\0"
      }

      function i(e, t) {
        for (var a = e + "", n = 0, i; n < a.length;) t[255 & n] = 255 & (i ^= 19 * t[255 & n]) + a.charCodeAt(n++);
        return s(t)
      }

      function r(e) {
        try {
          return p.crypto.getRandomValues(e = new Uint8Array(256)), s(e)
        } catch (t) {
          return [+new Date, p, p.navigator && p.navigator.plugins, p.screen, s(l)]
        }
      }

      function s(e) {
        return String.fromCharCode.apply(0, e)
      }
      var o = 6,
        l = [],
        p = "undefined" == typeof t ? window : t,
        m = Math.pow(256, o),
        c = Math.pow(2, 52),
        d = Math.random;
      e.exports = function (t, p) {
        if (p && !0 === p.global) return p.global = !1, Math.random = e.exports(t, p), p.global = !0, Math.random;
        var d = p && p.entropy || !1,
          u = [],
          g = i(n(d ? [t, s(l)] : 0 in arguments ? t : r(), 3), u),
          y = new a(u);
        return i(s(y.S), l),
          function () {
            for (var e = y.g(o), t = m, a = 0; e < c;) e = 256 * (e + a), t *= 256, a = y.g(1);
            for (; e >= 2 * c;) e /= 2, t /= 2, a >>>= 1;
            return (e + a) / t
          }
      }, e.exports.resetGlobal = function () {
        Math.random = d
      }, i(Math.random(), l)
    }).call(this, a(20))
  }, function (e, t, a) {
    var n;
    (function () {
      'use strict';

      function o(e) {
        var t = e.length - 1,
          a = "",
          n = e[0],
          r, s, o;
        if (0 < t) {
          for (a += n, r = 1; r < t; r++) o = e[r] + "", s = 7 - o.length, s && (a += N(s)), a += o;
          n = e[r], o = n + "", s = 7 - o.length, s && (a += N(s))
        } else if (0 === n) return "0";
        for (; 0 == n % 10;) n /= 10;
        return a + n
      }

      function l(e, t, a) {
        if (e !== ~~e || e < t || e > a) throw Error("[DecimalError] Invalid argument: " + e)
      }

      function p(e, t, a, n) {
        var s, o, l, p;
        for (o = e[0]; 10 <= o; o /= 10) --t;
        return 0 > --t ? (t += 7, s = 0) : (s = Math.ceil((t + 1) / 7), t %= 7), o = Me(10, 7 - t), p = 0 | e[s] % o, null == n ? 3 > t ? (0 == t ? p = 0 | p / 100 : 1 == t && (p = 0 | p / 10), l = 4 > a && 99999 == p || 3 < a && 49999 == p || 5e4 == p || 0 == p) : l = (4 > a && p + 1 == o || 3 < a && p + 1 == o / 2) && (0 | e[s + 1] / o / 100) == Me(10, t - 2) - 1 || (p == o / 2 || 0 == p) && 0 == (0 | e[s + 1] / o / 100) : 4 > t ? (0 == t ? p = 0 | p / 1e3 : 1 == t ? p = 0 | p / 100 : 2 == t && (p = 0 | p / 10), l = (n || 4 > a) && 9999 == p || !n && 3 < a && 4999 == p) : l = ((n || 4 > a) && p + 1 == o || !n && 3 < a && p + 1 == o / 2) && (0 | e[s + 1] / o / 1e3) == Me(10, t - 3) - 1, l
      }

      function m(e, t, a) {
        for (var n = [0], r = 0, s = e.length, o, l; r < s;) {
          for (l = n.length; l--;) n[l] *= t;
          for (n[0] += "0123456789abcdef".indexOf(e.charAt(r++)), o = 0; o < n.length; o++) n[o] > a - 1 && (void 0 === n[o + 1] && (n[o + 1] = 0), n[o + 1] += 0 | n[o] / a, n[o] %= a)
        }
        return n.reverse()
      }

      function c(e, t) {
        var a = t.d.length,
          n, r;
        32 > a ? (n = Math.ceil(a / 3), r = (1 / I(4, n)).toString()) : (n = 16, r = "2.3283064365386962890625e-10"), e.precision += n, t = T(e, 1, t.times(r), new e(1));
        for (var s = n, o; s--;) o = t.times(t), t = o.times(o).minus(o).times(8).plus(1);
        return e.precision -= n, t
      }

      function u(e, t, a, n) {
        var r = e.constructor,
          s, o, l, p, m, c, d, u, g;
        out: if (null != t) {
          if (u = e.d, !u) return e;
          for (s = 1, p = u[0]; 10 <= p; p /= 10) s++;
          if (o = t - s, 0 > o) o += 7, l = t, d = u[g = 0], m = 0 | d / Me(10, s - l - 1) % 10;
          else if (g = Math.ceil((o + 1) / 7), p = u.length, !(g >= p)) {
            for (d = p = u[g], s = 1; 10 <= p; p /= 10) s++;
            o %= 7, l = o - 7 + s, m = 0 > l ? 0 : 0 | d / Me(10, s - l - 1) % 10
          } else if (n) {
            for (; p++ <= g;) u.push(0);
            d = m = 0, s = 1, o %= 7, l = o - 7 + 1
          } else break out;
          if (n = n || 0 > t || void 0 !== u[g + 1] || (0 > l ? d : d % Me(10, s - l - 1)), c = 4 > a ? (m || n) && (0 == a || a == (0 > e.s ? 3 : 2)) : 5 < m || 5 == m && (4 == a || n || 6 == a && 1 & (0 < o ? 0 < l ? d / Me(10, s - l) : 0 : u[g - 1]) % 10 || a == (0 > e.s ? 8 : 7)), 1 > t || !u[0]) return u.length = 0, c ? (t -= e.e + 1, u[0] = Me(10, (7 - t % 7) % 7), e.e = -t || 0) : u[0] = e.e = 0, e;
          if (0 == o ? (u.length = g, p = 1, g--) : (u.length = g + 1, p = Me(10, 7 - o), u[g] = 0 < l ? (0 | d / Me(10, s - l) % Me(10, l)) * p : 0), c)
            for (;;)
              if (0 == g) {
                for (o = 1, l = u[0]; 10 <= l; l /= 10) o++;
                for (l = u[0] += p, p = 1; 10 <= l; l /= 10) p++;
                o != p && (e.e++, 10000000 == u[0] && (u[0] = 1));
                break
              } else {
                if (u[g] += p, 10000000 != u[g]) break;
                u[g--] = 0, p = 1
              } for (o = u.length; 0 === u[--o];) u.pop()
        }
        return ve && (e.e > r.maxE ? (e.d = null, e.e = NaN) : e.e < r.minE && (e.e = 0, e.d = [0])), e
      }

      function g(t, a, n) {
        if (!t.isFinite()) return C(t);
        var i = t.e,
          e = o(t.d),
          r = e.length,
          s;
        return a ? (n && 0 < (s = n - r) ? e = e.charAt(0) + "." + e.slice(1) + N(s) : 1 < r && (e = e.charAt(0) + "." + e.slice(1)), e = e + (0 > t.e ? "e" : "e+") + t.e) : 0 > i ? (e = "0." + N(-i - 1) + e, n && 0 < (s = n - r) && (e += N(s))) : i >= r ? (e += N(i + 1 - r), n && 0 < (s = n - i - 1) && (e = e + "." + N(s))) : ((s = i + 1) < r && (e = e.slice(0, s) + "." + e.slice(s)), n && 0 < (s = n - r) && (i + 1 === r && (e += "."), e += N(s))), e
      }

      function f(t, a) {
        var n = t[0];
        for (a *= 7; 10 <= n; n /= 10) a++;
        return a
      }

      function h(e, t, a) {
        if (t > Ce) throw ve = !0, a && (e.precision = a), Error("[DecimalError] Precision limit exceeded");
        return u(new e(fe), t, 1, !0)
      }

      function b(e, t, a) {
        if (t > Ee) throw Error("[DecimalError] Precision limit exceeded");
        return u(new e(he), t, a, !0)
      }

      function v(e) {
        var t = e.length - 1,
          a = 7 * t + 1;
        if (t = e[t], t) {
          for (; 0 == t % 10; t /= 10) a--;
          for (t = e[0]; 10 <= t; t /= 10) a++
        }
        return a
      }

      function N(e) {
        for (var t = ""; e--;) t += "0";
        return t
      }

      function M(e, t, a, i) {
        var s = new e(1),
          o = Math.ceil(i / 7 + 4),
          l;
        for (ve = !1;;) {
          if (a % 2 && (s = s.times(t), z(s.d, o) && (l = !0)), a = Ne(a / 2), 0 === a) {
            a = s.d.length - 1, l && 0 === s.d[a] && ++s.d[a];
            break
          }
          t = t.times(t), z(t.d, o)
        }
        return ve = !0, s
      }

      function S(e) {
        return 1 & e.d[e.d.length - 1]
      }

      function A(e, t, a) {
        for (var n = new e(t[0]), r = 0, s; ++r < t.length;)
          if (s = new e(t[r]), !s.s) {
            n = s;
            break
          } else n[a](s) && (n = s);
        return n
      }

      function O(e, a) {
        var n = 0,
          r = 0,
          s = 0,
          l = e.constructor,
          m = l.rounding,
          c = l.precision,
          d, g, y, f, h, b, v;
        if (!e.d || !e.d[0] || 17 < e.e) return new l(e.d ? e.d[0] ? 0 > e.s ? 0 : 1 / 0 : 1 : e.s ? 0 > e.s ? 0 : e : 0 / 0);
        for (null == a ? (ve = !1, v = c) : v = a, b = new l(.03125); - 2 < e.e;) e = e.times(b), s += 5;
        for (g = 0 | 2 * (Math.log(Me(2, s)) / Math.LN10) + 5, v += g, d = f = h = new l(1), l.precision = v;;) {
          if (f = u(f.times(e), v, 1), d = d.times(++r), b = h.plus(Ie(f, d, v, 1)), o(b.d).slice(0, v) === o(h.d).slice(0, v)) {
            for (y = s; y--;) h = u(h.times(h), v, 1);
            if (null != a) return l.precision = c, h;
            if (3 > n && p(h.d, v - g, m, n)) l.precision = v += 10, d = f = b = new l(1), r = 0, n++;
            else return u(h, l.precision = c, m, ve = !0)
          }
          h = b
        }
      }

      function _(a, i) {
        var r = 1,
          s = a,
          l = s.d,
          m = s.constructor,
          d = m.rounding,
          g = m.precision,
          y, f, b, v, N, M, S, A, O, C, E;
        if (0 > s.s || !l || !l[0] || !s.e && 1 == l[0] && 1 == l.length) return new m(l && !l[0] ? -1 / 0 : 1 == s.s ? l ? 0 : s : NaN);
        if (null == i ? (ve = !1, O = g) : O = i, m.precision = O += 10, y = o(l), f = y.charAt(0), 15e14 > Math.abs(v = s.e)) {
          for (; 7 > f && 1 != f || 1 == f && 3 < y.charAt(1);) s = s.times(a), y = o(s.d), f = y.charAt(0), r++;
          v = s.e, 1 < f ? (s = new m("0." + y), v++) : s = new m(f + "." + y.slice(1))
        } else return A = h(m, O + 2, g).times(v + ""), s = _(new m(f + "." + y.slice(1)), O - 10).plus(A), m.precision = g, null == i ? u(s, g, d, ve = !0) : s;
        for (C = s, S = N = s = Ie(s.minus(1), s.plus(1), O, 1), E = u(s.times(s), O, 1), b = 3;;) {
          if (N = u(N.times(E), O, 1), A = S.plus(Ie(N, new m(b), O, 1)), o(A.d).slice(0, O) === o(S.d).slice(0, O)) {
            if (S = S.times(2), 0 !== v && (S = S.plus(h(m, O + 2, g).times(v + ""))), S = Ie(S, new m(r), O, 1), null != i) return m.precision = g, S;
            if (p(S.d, O - 10, d, M)) m.precision = O += 10, A = N = s = Ie(C.minus(1), C.plus(1), O, 1), E = u(s.times(s), O, 1), b = M = 1;
            else return u(S, m.precision = g, d, ve = !0)
          }
          S = A, b += 2
        }
      }

      function C(e) {
        return e.s * e.s / 0 + ""
      }

      function E(t, a) {
        var n, r, s;
        for (-1 < (n = a.indexOf(".")) && (a = a.replace(".", "")), 0 < (r = a.search(/e/i)) ? (0 > n && (n = r), n += +a.slice(r + 1), a = a.substring(0, r)) : 0 > n && (n = a.length), r = 0; 48 === a.charCodeAt(r); r++);
        for (s = a.length; 48 === a.charCodeAt(s - 1); --s);
        if (a = a.slice(r, s), a) {
          if (s -= r, t.e = n = n - r - 1, t.d = [], r = (n + 1) % 7, 0 > n && (r += 7), r < s) {
            for (r && t.d.push(+a.slice(0, r)), s -= 7; r < s;) t.d.push(+a.slice(r, r += 7));
            a = a.slice(r), r = 7 - a.length
          } else r -= s;
          for (; r--;) a += "0";
          t.d.push(+a), ve && (t.e > t.constructor.maxE ? (t.d = null, t.e = NaN) : t.e < t.constructor.minE && (t.e = 0, t.d = [0]))
        } else t.e = 0, t.d = [0];
        return t
      }

      function w(e, t) {
        var a, n, r, s, o, l, c, d, u;
        if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
        if (Ae.test(t)) a = 16, t = t.toLowerCase();
        else if (Se.test(t)) a = 2;
        else if (Oe.test(t)) a = 8;
        else throw Error("[DecimalError] Invalid argument: " + t);
        for (s = t.search(/p/i), 0 < s ? (c = +t.slice(s + 1), t = t.substring(2, s)) : t = t.slice(2), s = t.indexOf("."), o = 0 <= s, n = e.constructor, o && (t = t.replace(".", ""), l = t.length, s = l - s, r = M(n, new n(a), s, 2 * s)), d = m(t, a, 10000000), u = d.length - 1, s = u; 0 === d[s]; --s) d.pop();
        return 0 > s ? new n(0 * e.s) : (e.e = f(d, u), e.d = d, ve = !1, o && (e = Ie(e, r, 4 * l)), c && (e = e.times(54 > Math.abs(c) ? Me(2, c) : P.pow(2, c))), ve = !0, e)
      }

      function k(e, t) {
        var a = t.d.length,
          n;
        if (3 > a) return T(e, 2, t, t);
        n = 1.4 * Math.sqrt(a), n = 16 < n ? 16 : 0 | n, t = t.times(1 / I(5, n)), t = T(e, 2, t, t);
        for (var i = new e(5), r = new e(16), s = new e(20), o; n--;) o = t.times(t), t = t.times(i.plus(o.times(r.times(o).minus(s))));
        return t
      }

      function T(e, a, r, s, o) {
        var l = 1,
          p = e.precision,
          m = Math.ceil(p / 7),
          c, d, g, x;
        for (ve = !1, x = r.times(r), g = new e(s);;) {
          if (d = Ie(g.times(x), new e(a++ * a++), p, 1), g = o ? s.plus(d) : s.minus(d), s = Ie(d.times(x), new e(a++ * a++), p, 1), d = g.plus(s), void 0 !== d.d[m]) {
            for (c = m; d.d[c] === g.d[c] && c--;);
            if (-1 == c) break
          }
          c = g, g = s, s = d, d = c, l++
        }
        return ve = !0, d.d.length = m + 1, d
      }

      function I(t, a) {
        for (var i = t; --a;) i *= t;
        return i
      }

      function q(e, a) {
        var n = 0 > a.s,
          i = b(e, e.precision, 1),
          r = i.times(.5),
          s;
        if (a = a.abs(), a.lte(r)) return Te = n ? 4 : 1, a;
        if (s = a.divToInt(i), s.isZero()) Te = n ? 3 : 2;
        else {
          if (a = a.minus(s.times(i)), a.lte(r)) return Te = S(s) ? n ? 2 : 3 : n ? 4 : 1, a;
          Te = S(s) ? n ? 1 : 4 : n ? 3 : 2
        }
        return a.minus(i).abs()
      }

      function B(t, a, n, r) {
        var s = t.constructor,
          o = void 0 !== n,
          p, c, d, u, f, h, b, v, N;
        if (o ? (l(n, 1, 1000000000), void 0 === r ? r = s.rounding : l(r, 0, 8)) : (n = s.precision, r = s.rounding), !t.isFinite()) b = C(t);
        else {
          for (b = g(t), d = b.indexOf("."), o ? (p = 2, 16 == a ? n = 4 * n - 3 : 8 == a && (n = 3 * n - 2)) : p = a, 0 <= d && (b = b.replace(".", ""), N = new s(1), N.e = b.length - d, N.d = m(g(N), 10, p), N.e = N.d.length), v = m(b, 10, p), c = f = v.length; 0 == v[--f];) v.pop();
          if (!v[0]) b = o ? "0p+0" : "0";
          else {
            if (0 > d ? c-- : (t = new s(t), t.d = v, t.e = c, t = Ie(t, N, n, r, 0, p), v = t.d, c = t.e, h = ke), d = v[n], u = p / 2, h = h || void 0 !== v[n + 1], h = 4 > r ? (void 0 !== d || h) && (0 === r || r === (0 > t.s ? 3 : 2)) : d > u || d === u && (4 === r || h || 6 === r && 1 & v[n - 1] || r === (0 > t.s ? 8 : 7)), v.length = n, h)
              for (; ++v[--n] > p - 1;) v[n] = 0, n || (++c, v.unshift(1));
            for (f = v.length; !v[f - 1]; --f);
            for (d = 0, b = ""; d < f; d++) b += "0123456789abcdef".charAt(v[d]);
            if (o) {
              if (1 < f)
                if (16 == a || 8 == a) {
                  for (d = 16 == a ? 4 : 3, --f; f % d; f++) b += "0";
                  for (v = m(b, p, a), f = v.length; !v[f - 1]; --f);
                  for (d = 1, b = "1."; d < f; d++) b += "0123456789abcdef".charAt(v[d])
                } else b = b.charAt(0) + "." + b.slice(1);
              b = b + (0 > c ? "p" : "p+") + c
            } else if (0 > c) {
              for (; ++c;) b = "0" + b;
              b = "0." + b
            } else if (++c > f)
              for (c -= f; c--;) b += "0";
            else c < f && (b = b.slice(0, c) + "." + b.slice(c))
          }
          b = (16 == a ? "0x" : 2 == a ? "0b" : 8 == a ? "0o" : "") + b
        }
        return 0 > t.s ? "-" + b : b
      }

      function z(e, t) {
        if (e.length > t) return e.length = t, !0
      }

      function j(e) {
        return new this(e).abs()
      }

      function D(e) {
        return new this(e).acos()
      }

      function R(e) {
        return new this(e).acosh()
      }

      function U(e, t) {
        return new this(e).plus(t)
      }

      function L(e) {
        return new this(e).asin()
      }

      function F(e) {
        return new this(e).asinh()
      }

      function H(e) {
        return new this(e).atan()
      }

      function G(e) {
        return new this(e).atanh()
      }

      function $(e, t) {
        e = new this(e), t = new this(t);
        var a = this.precision,
          n = this.rounding,
          i = a + 4,
          s;
        return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (s = 0 > t.s ? b(this, a, n) : new this(0), s.s = e.s) : !e.d || t.isZero() ? (s = b(this, i, 1).times(.5), s.s = e.s) : 0 > t.s ? (this.precision = i, this.rounding = 1, s = this.atan(Ie(e, t, i, 1)), t = b(this, i, 1), this.precision = a, this.rounding = n, s = 0 > e.s ? s.minus(t) : s.plus(t)) : s = this.atan(Ie(e, t, i, 1)) : (s = b(this, i, 1).times(0 < t.s ? .25 : .75), s.s = e.s) : s = new this(NaN), s
      }

      function Z(e) {
        return new this(e).cbrt()
      }

      function V(e) {
        return u(e = new this(e), e.e + 1, 2)
      }

      function W(e) {
        if (!e || "object" != typeof e) throw Error("[DecimalError] Object expected");
        var t = !0 === e.defaults,
          a = ["precision", 1, 1000000000, "rounding", 0, 8, "toExpNeg", -9000000000000000, 0, "toExpPos", 0, 9000000000000000, "maxE", 0, 9000000000000000, "minE", -9000000000000000, 0, "modulo", 0, 9],
          n, r, s;
        for (n = 0; n < a.length; n += 3)
          if ((r = a[n], t) && (this[r] = be[r]), void 0 !== (s = e[r]))
            if (Ne(s) === s && s >= a[n + 1] && s <= a[n + 2]) this[r] = s;
            else throw Error("[DecimalError] Invalid argument: " + r + ": " + s);
        if ((r = "crypto", t) && (this[r] = be[r]), void 0 !== (s = e[r]))
          if (!0 !== s && !1 !== s && 0 !== s && 1 !== s) throw Error("[DecimalError] Invalid argument: " + r + ": " + s);
          else if (!s) this[r] = !1;
        else if ("undefined" != typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = !0;
        else throw Error("[DecimalError] crypto unavailable");
        return this
      }

      function J(e) {
        return new this(e).cos()
      }

      function Y(e) {
        return new this(e).cosh()
      }

      function X(e) {
        function a(n) {
          var r = this,
            s, o, l;
          if (!(r instanceof a)) return new a(n);
          if (r.constructor = a, n instanceof a) return r.s = n.s, void(ve ? !n.d || n.e > a.maxE ? (r.e = NaN, r.d = null) : n.e < a.minE ? (r.e = 0, r.d = [0]) : (r.e = n.e, r.d = n.d.slice()) : (r.e = n.e, r.d = n.d ? n.d.slice() : n.d));
          if (l = typeof n, "number" === l) {
            if (0 === n) return r.s = 0 > 1 / n ? -1 : 1, r.e = 0, void(r.d = [0]);
            if (0 > n ? (n = -n, r.s = -1) : r.s = 1, n === ~~n && 1e7 > n) {
              for (s = 0, o = n; 10 <= o; o /= 10) s++;
              return void(ve ? s > a.maxE ? (r.e = NaN, r.d = null) : s < a.minE ? (r.e = 0, r.d = [0]) : (r.e = s, r.d = [n]) : (r.e = s, r.d = [n]))
            }
            return 0 == 0 * n ? E(r, n.toString()) : (n || (r.s = NaN), r.e = NaN, void(r.d = null))
          }
          if ("string" !== l) throw Error("[DecimalError] Invalid argument: " + n);
          return 45 === (o = n.charCodeAt(0)) ? (n = n.slice(1), r.s = -1) : (43 === o && (n = n.slice(1)), r.s = 1), _e.test(n) ? E(r, n) : w(r, n)
        }
        var n, t, o;
        if (a.prototype = we, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.EUCLID = 9, a.config = a.set = W, a.clone = X, a.isDecimal = ae, a.abs = j, a.acos = D, a.acosh = R, a.add = U, a.asin = L, a.asinh = F, a.atan = H, a.atanh = G, a.atan2 = $, a.cbrt = Z, a.ceil = V, a.cos = J, a.cosh = Y, a.div = Q, a.exp = K, a.floor = ee, a.hypot = te, a.ln = ne, a.log = r, a.log10 = d, a.log2 = s, a.max = y, a.min = x, a.mod = ie, a.mul = re, a.pow = se, a.random = oe, a.round = le, a.sign = pe, a.sin = me, a.sinh = ce, a.sqrt = de, a.sub = ue, a.tan = ge, a.tanh = ye, a.trunc = xe, void 0 === e && (e = {}), e && !0 !== e.defaults)
          for (o = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < o.length;) e.hasOwnProperty(t = o[n++]) || (e[t] = this[t]);
        return a.config(e), a
      }

      function Q(e, t) {
        return new this(e).div(t)
      }

      function K(e) {
        return new this(e).exp()
      }

      function ee(e) {
        return u(e = new this(e), e.e + 1, 3)
      }

      function te() {
        var e = new this(0),
          a, r;
        for (ve = !1, a = 0; a < arguments.length;)
          if (r = new this(arguments[a++]), !r.d) {
            if (r.s) return ve = !0, new this(1 / 0);
            e = r
          } else e.d && (e = e.plus(r.times(r)));
        return ve = !0, e.sqrt()
      }

      function ae(e) {
        return e instanceof P || e && "[object Decimal]" === e.name || !1
      }

      function ne(e) {
        return new this(e).ln()
      }

      function r(e, t) {
        return new this(e).log(t)
      }

      function s(e) {
        return new this(e).log(2)
      }

      function d(e) {
        return new this(e).log(10)
      }

      function y() {
        return A(this, arguments, "lt")
      }

      function x() {
        return A(this, arguments, "gt")
      }

      function ie(e, t) {
        return new this(e).mod(t)
      }

      function re(e, t) {
        return new this(e).mul(t)
      }

      function se(e, t) {
        return new this(e).pow(t)
      }

      function oe(t) {
        var a = 0,
          s = new this(1),
          r = [],
          o, p, m, c;
        if (void 0 === t ? t = this.precision : l(t, 1, 1000000000), m = Math.ceil(t / 7), !this.crypto)
          for (; a < m;) r[a++] = 0 | 1e7 * Math.random();
        else if (crypto.getRandomValues)
          for (o = crypto.getRandomValues(new Uint32Array(m)); a < m;) c = o[a], 429e7 <= c ? o[a] = crypto.getRandomValues(new Uint32Array(1))[0] : r[a++] = c % 1e7;
        else if (crypto.randomBytes) {
          for (o = crypto.randomBytes(m *= 4); a < m;) c = o[a] + (o[a + 1] << 8) + (o[a + 2] << 16) + ((127 & o[a + 3]) << 24), 214e7 <= c ? crypto.randomBytes(4).copy(o, a) : (r.push(c % 1e7), a += 4);
          a = m / 4
        } else throw Error("[DecimalError] crypto unavailable");
        for (m = r[--a], t %= 7, m && t && (c = Me(10, 7 - t), r[a] = (0 | m / c) * c); 0 === r[a]; a--) r.pop();
        if (0 > a) p = 0, r = [0];
        else {
          for (p = -1; 0 === r[0]; p -= 7) r.shift();
          for (m = 1, c = r[0]; 10 <= c; c /= 10) m++;
          7 > m && (p -= 7 - m)
        }
        return s.e = p, s.d = r, s
      }

      function le(e) {
        return u(e = new this(e), e.e + 1, this.rounding)
      }

      function pe(e) {
        return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
      }

      function me(e) {
        return new this(e).sin()
      }

      function ce(e) {
        return new this(e).sinh()
      }

      function de(e) {
        return new this(e).sqrt()
      }

      function ue(e, t) {
        return new this(e).sub(t)
      }

      function ge(e) {
        return new this(e).tan()
      }

      function ye(e) {
        return new this(e).tanh()
      }

      function xe(e) {
        return u(e = new this(e), e.e + 1, 1)
      }
      var fe = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        he = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        be = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -9000000000000000,
          maxE: 9000000000000000,
          crypto: !1
        },
        ve = !0,
        Ne = Math.floor,
        Me = Math.pow,
        Se = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        Ae = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        Oe = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        _e = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        Ce = fe.length - 1,
        Ee = he.length - 1,
        we = {
          name: "[object Decimal]"
        },
        P, ke, Te;
      we.absoluteValue = we.abs = function () {
        var e = new this.constructor(this);
        return 0 > e.s && (e.s = 1), u(e)
      }, we.ceil = function () {
        return u(new this.constructor(this), this.e + 1, 2)
      }, we.comparedTo = we.cmp = function (e) {
        var t = this,
          a = t.d,
          n = (e = new t.constructor(e)).d,
          r = t.s,
          s = e.s,
          o, l, p, m;
        if (!a || !n) return r && s ? r === s ? a === n ? 0 : !a ^ 0 > r ? 1 : -1 : r : NaN;
        if (!a[0] || !n[0]) return a[0] ? r : n[0] ? -s : 0;
        if (r !== s) return r;
        if (t.e !== e.e) return t.e > e.e ^ 0 > r ? 1 : -1;
        for (p = a.length, m = n.length, (o = 0, l = p < m ? p : m); o < l; ++o)
          if (a[o] !== n[o]) return a[o] > n[o] ^ 0 > r ? 1 : -1;
        return p === m ? 0 : p > m ^ 0 > r ? 1 : -1
      }, we.cosine = we.cos = function () {
        var e = this,
          t = e.constructor,
          a, n;
        return e.d ? e.d[0] ? (a = t.precision, n = t.rounding, t.precision = a + Math.max(e.e, e.sd()) + 7, t.rounding = 1, e = c(t, q(t, e)), t.precision = a, t.rounding = n, u(2 == Te || 3 == Te ? e.neg() : e, a, n, !0)) : new t(1) : new t(NaN)
      }, we.cubeRoot = we.cbrt = function () {
        var a = this,
          i = a.constructor,
          l, p, c, d, g, y, x, f, h, b;
        if (!a.isFinite() || a.isZero()) return new i(a);
        for (ve = !1, y = a.s * Me(a.s * a, 1 / 3), y && Math.abs(y) != 1 / 0 ? d = new i(y.toString()) : (c = o(a.d), l = a.e, (y = (l - c.length + 1) % 3) && (c += 1 == y || -2 == y ? "0" : "00"), y = Me(c, 1 / 3), l = Ne((l + 1) / 3) - (l % 3 == (0 > l ? -1 : 2)), y == 1 / 0 ? c = "5e" + l : (c = y.toExponential(), c = c.slice(0, c.indexOf("e") + 1) + l), d = new i(c), d.s = a.s), x = (l = i.precision) + 3;;)
          if (f = d, h = f.times(f).times(f), b = h.plus(a), d = Ie(b.plus(a).times(f), b.plus(h), x + 2, 1), o(f.d).slice(0, x) === (c = o(d.d)).slice(0, x))
            if (c = c.slice(x - 3, x + 1), "9999" == c || !g && "4999" == c) {
              if (!g && (u(f, l + 1, 0), f.times(f).times(f).eq(a))) {
                d = f;
                break
              }
              x += 4, g = 1
            } else {
              +c && (+c.slice(1) || "5" != c.charAt(0)) || (u(d, l + 1, 1), p = !d.times(d).times(d).eq(a));
              break
            } return ve = !0, u(d, l, i.rounding, p)
      }, we.decimalPlaces = we.dp = function () {
        var e = this.d,
          t = NaN,
          a;
        if (e) {
          if (a = e.length - 1, t = 7 * (a - Ne(this.e / 7)), a = e[a], a)
            for (; 0 == a % 10; a /= 10) t--;
          0 > t && (t = 0)
        }
        return t
      }, we.dividedBy = we.div = function (e) {
        return Ie(this, new this.constructor(e))
      }, we.dividedToIntegerBy = we.divToInt = function (e) {
        var t = this,
          a = t.constructor;
        return u(Ie(t, new a(e), 0, 1, 1), a.precision, a.rounding)
      }, we.equals = we.eq = function (e) {
        return 0 === this.cmp(e)
      }, we.floor = function () {
        return u(new this.constructor(this), this.e + 1, 3)
      }, we.greaterThan = we.gt = function (e) {
        return 0 < this.cmp(e)
      }, we.greaterThanOrEqualTo = we.gte = function (e) {
        var t = this.cmp(e);
        return 1 == t || 0 === t
      }, we.hyperbolicCosine = we.cosh = function () {
        var e = this,
          t = e.constructor,
          a = new t(1),
          r, s, o, l, p;
        if (!e.isFinite()) return new t(e.s ? 1 / 0 : NaN);
        if (e.isZero()) return a;
        o = t.precision, l = t.rounding, t.precision = o + Math.max(e.e, e.sd()) + 4, t.rounding = 1, p = e.d.length, 32 > p ? (r = Math.ceil(p / 3), s = (1 / I(4, r)).toString()) : (r = 16, s = "2.3283064365386962890625e-10"), e = T(t, 1, e.times(s), new t(1), !0);
        for (var m = r, c = new t(8), d; m--;) d = e.times(e), e = a.minus(d.times(c.minus(d.times(c))));
        return u(e, t.precision = o, t.rounding = l, !0)
      }, we.hyperbolicSine = we.sinh = function () {
        var e = this,
          t = e.constructor,
          a, n, i, r;
        if (!e.isFinite() || e.isZero()) return new t(e);
        if (n = t.precision, i = t.rounding, t.precision = n + Math.max(e.e, e.sd()) + 4, t.rounding = 1, r = e.d.length, 3 > r) e = T(t, 2, e, e, !0);
        else {
          a = 1.4 * Math.sqrt(r), a = 16 < a ? 16 : 0 | a, e = e.times(1 / I(5, a)), e = T(t, 2, e, e, !0);
          for (var s = new t(5), o = new t(16), l = new t(20), p; a--;) p = e.times(e), e = e.times(s.plus(p.times(o.times(p).plus(l))))
        }
        return t.precision = n, t.rounding = i, u(e, n, i, !0)
      }, we.hyperbolicTangent = we.tanh = function () {
        var e = this,
          t = e.constructor,
          a, n;
        return e.isFinite() ? e.isZero() ? new t(e) : (a = t.precision, n = t.rounding, t.precision = a + 7, t.rounding = 1, Ie(e.sinh(), e.cosh(), t.precision = a, t.rounding = n)) : new t(e.s)
      }, we.inverseCosine = we.acos = function () {
        var e = this,
          t = e.constructor,
          a = e.abs().cmp(1),
          n = t.precision,
          i = t.rounding,
          r;
        return -1 === a ? e.isZero() ? b(t, n + 4, i).times(.5) : (t.precision = n + 6, t.rounding = 1, e = e.asin(), r = b(t, n + 4, i).times(.5), t.precision = n, t.rounding = i, r.minus(e)) : 0 === a ? e.isNeg() ? b(t, n, i) : new t(0) : new t(NaN)
      }, we.inverseHyperbolicCosine = we.acosh = function () {
        var e = this,
          t = e.constructor,
          a, n;
        return e.lte(1) ? new t(e.eq(1) ? 0 : NaN) : e.isFinite() ? (a = t.precision, n = t.rounding, t.precision = a + Math.max(Math.abs(e.e), e.sd()) + 4, t.rounding = 1, ve = !1, e = e.times(e).minus(1).sqrt().plus(e), ve = !0, t.precision = a, t.rounding = n, e.ln()) : new t(e)
      }, we.inverseHyperbolicSine = we.asinh = function () {
        var e = this,
          t = e.constructor,
          a, n;
        return !e.isFinite() || e.isZero() ? new t(e) : (a = t.precision, n = t.rounding, t.precision = a + 2 * Math.max(Math.abs(e.e), e.sd()) + 6, t.rounding = 1, ve = !1, e = e.times(e).plus(1).sqrt().plus(e), ve = !0, t.precision = a, t.rounding = n, e.ln())
      }, we.inverseHyperbolicTangent = we.atanh = function () {
        var e = this,
          t = e.constructor,
          a, n, i, r;
        return e.isFinite() ? 0 <= e.e ? new t(e.abs().eq(1) ? e.s / 0 : e.isZero() ? e : NaN) : (a = t.precision, n = t.rounding, r = e.sd(), Math.max(r, a) < 2 * -e.e - 1) ? u(new t(e), a, n, !0) : (t.precision = i = r - e.e, e = Ie(e.plus(1), new t(1).minus(e), i + a, 1), t.precision = a + 4, t.rounding = 1, e = e.ln(), t.precision = a, t.rounding = n, e.times(.5)) : new t(NaN)
      }, we.inverseSine = we.asin = function () {
        var e = this,
          t = e.constructor,
          a, n, i, r;
        return e.isZero() ? new t(e) : (n = e.abs().cmp(1), i = t.precision, r = t.rounding, -1 !== n) ? 0 === n ? (a = b(t, i + 4, r).times(.5), a.s = e.s, a) : new t(NaN) : (t.precision = i + 6, t.rounding = 1, e = e.div(new t(1).minus(e.times(e)).sqrt().plus(1)).atan(), t.precision = i, t.rounding = r, e.times(2))
      }, we.inverseTangent = we.atan = function () {
        var e = this,
          a = e.constructor,
          s = a.precision,
          o = a.rounding,
          l, p, m, c, d, g, y, f, h;
        if (!e.isFinite()) {
          if (!e.s) return new a(NaN);
          if (s + 4 <= Ee) return y = b(a, s + 4, o).times(.5), y.s = e.s, y
        } else {
          if (e.isZero()) return new a(e);
          if (e.abs().eq(1) && s + 4 <= Ee) return y = b(a, s + 4, o).times(.25), y.s = e.s, y
        }
        for (a.precision = f = s + 10, a.rounding = 1, m = Math.min(28, 0 | f / 7 + 2), l = m; l; --l) e = e.div(e.times(e).plus(1).sqrt().plus(1));
        for (ve = !1, p = Math.ceil(f / 7), c = 1, h = e.times(e), y = new a(e), d = e; - 1 !== l;)
          if (d = d.times(h), g = y.minus(d.div(c += 2)), d = d.times(h), y = g.plus(d.div(c += 2)), void 0 !== y.d[p])
            for (l = p; y.d[l] === g.d[l] && l--;);
        return m && (y = y.times(2 << m - 1)), ve = !0, u(y, a.precision = s, a.rounding = o, !0)
      }, we.isFinite = function () {
        return !!this.d
      }, we.isInteger = we.isInt = function () {
        return !!this.d && Ne(this.e / 7) > this.d.length - 2
      }, we.isNaN = function () {
        return !this.s
      }, we.isNegative = we.isNeg = function () {
        return 0 > this.s
      }, we.isPositive = we.isPos = function () {
        return 0 < this.s
      }, we.isZero = function () {
        return !!this.d && 0 === this.d[0]
      }, we.lessThan = we.lt = function (e) {
        return 0 > this.cmp(e)
      }, we.lessThanOrEqualTo = we.lte = function (e) {
        return 1 > this.cmp(e)
      }, we.logarithm = we.log = function (e) {
        var t = this,
          a = t.constructor,
          n = a.precision,
          i = a.rounding,
          s, l, m, c, g, y, x, f;
        if (null == e) e = new a(10), s = !0;
        else {
          if (e = new a(e), l = e.d, 0 > e.s || !l || !l[0] || e.eq(1)) return new a(NaN);
          s = e.eq(10)
        }
        if (l = t.d, 0 > t.s || !l || !l[0] || t.eq(1)) return new a(l && !l[0] ? -1 / 0 : 1 == t.s ? l ? 0 : 1 / 0 : NaN);
        if (s)
          if (1 < l.length) g = !0;
          else {
            for (c = l[0]; 0 == c % 10;) c /= 10;
            g = 1 !== c
          } if (ve = !1, x = n + 5, y = _(t, x), m = s ? h(a, x + 10) : _(e, x), f = Ie(y, m, x, 1), p(f.d, c = n, i))
          do
            if (x += 10, y = _(t, x), m = s ? h(a, x + 10) : _(e, x), f = Ie(y, m, x, 1), !g) {
              1e14 == +o(f.d).slice(c + 1, c + 15) + 1 && (f = u(f, n + 1, 0));
              break
            } while (p(f.d, c += 10, i));
        return ve = !0, u(f, n, i)
      }, we.minus = we.sub = function (t) {
        var a = this,
          n = a.constructor,
          r, s, o, l, p, m, c, g, x, h, b, v;
        if (t = new n(t), !a.d || !t.d) return a.s && t.s ? a.d ? t.s = -t.s : t = new n(t.d || a.s !== t.s ? a : NaN) : t = new n(NaN), t;
        if (a.s != t.s) return t.s = -t.s, a.plus(t);
        if (x = a.d, v = t.d, c = n.precision, g = n.rounding, !x[0] || !v[0]) {
          if (v[0]) t.s = -t.s;
          else if (x[0]) t = new n(a);
          else return new n(3 === g ? -0 : 0);
          return ve ? u(t, c, g) : t
        }
        if (s = Ne(t.e / 7), h = Ne(a.e / 7), x = x.slice(), p = h - s, p) {
          for (b = 0 > p, b ? (r = x, p = -p, m = v.length) : (r = v, s = h, m = x.length), o = Math.max(Math.ceil(c / 7), m) + 2, p > o && (p = o, r.length = 1), r.reverse(), o = p; o--;) r.push(0);
          r.reverse()
        } else {
          for (o = x.length, m = v.length, b = o < m, b && (m = o), o = 0; o < m; o++)
            if (x[o] != v[o]) {
              b = x[o] < v[o];
              break
            } p = 0
        }
        for (b && (r = x, x = v, v = r, t.s = -t.s), m = x.length, o = v.length - m; 0 < o; --o) x[m++] = 0;
        for (o = v.length; o > p;) {
          if (x[--o] < v[o]) {
            for (l = o; l && 0 === x[--l];) x[l] = 9999999;
            --x[l], x[o] += 10000000
          }
          x[o] -= v[o]
        }
        for (; 0 === x[--m];) x.pop();
        for (; 0 === x[0]; x.shift()) --s;
        return x[0] ? (t.d = x, t.e = f(x, s), ve ? u(t, c, g) : t) : new n(3 === g ? -0 : 0)
      }, we.modulo = we.mod = function (e) {
        var t = this,
          a = t.constructor,
          n;
        return (e = new a(e), !t.d || !e.s || e.d && !e.d[0]) ? new a(NaN) : e.d && (!t.d || t.d[0]) ? (ve = !1, 9 == a.modulo ? (n = Ie(t, e.abs(), 0, 3, 1), n.s *= e.s) : n = Ie(t, e, 0, a.modulo, 1), n = n.times(e), ve = !0, t.minus(n)) : u(new a(t), a.precision, a.rounding)
      }, we.naturalExponential = we.exp = function () {
        return O(this)
      }, we.naturalLogarithm = we.ln = function () {
        return _(this)
      }, we.negated = we.neg = function () {
        var e = new this.constructor(this);
        return e.s = -e.s, u(e)
      }, we.plus = we.add = function (t) {
        var a = this,
          n = a.constructor,
          r, s, o, l, p, m, c, g, x, h;
        if (t = new n(t), !a.d || !t.d) return a.s && t.s ? !a.d && (t = new n(t.d || a.s === t.s ? a : NaN)) : t = new n(NaN), t;
        if (a.s != t.s) return t.s = -t.s, a.minus(t);
        if (x = a.d, h = t.d, c = n.precision, g = n.rounding, !x[0] || !h[0]) return h[0] || (t = new n(a)), ve ? u(t, c, g) : t;
        if (p = Ne(a.e / 7), o = Ne(t.e / 7), x = x.slice(), l = p - o, l) {
          for (0 > l ? (s = x, l = -l, m = h.length) : (s = h, o = p, m = x.length), p = Math.ceil(c / 7), m = p > m ? p + 1 : m + 1, l > m && (l = m, s.length = 1), s.reverse(); l--;) s.push(0);
          s.reverse()
        }
        for (m = x.length, l = h.length, 0 > m - l && (l = m, s = h, h = x, x = s), r = 0; l;) r = 0 | (x[--l] = x[l] + h[l] + r) / 10000000, x[l] %= 10000000;
        for (r && (x.unshift(r), ++o), m = x.length; 0 == x[--m];) x.pop();
        return t.d = x, t.e = f(x, o), ve ? u(t, c, g) : t
      }, we.precision = we.sd = function (e) {
        var t = this,
          a;
        if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error("[DecimalError] Invalid argument: " + e);
        return t.d ? (a = v(t.d), e && t.e + 1 > a && (a = t.e + 1)) : a = NaN, a
      }, we.round = function () {
        var e = this,
          t = e.constructor;
        return u(new t(e), e.e + 1, t.rounding)
      }, we.sine = we.sin = function () {
        var e = this,
          t = e.constructor,
          a, n;
        return e.isFinite() ? e.isZero() ? new t(e) : (a = t.precision, n = t.rounding, t.precision = a + Math.max(e.e, e.sd()) + 7, t.rounding = 1, e = k(t, q(t, e)), t.precision = a, t.rounding = n, u(2 < Te ? e.neg() : e, a, n, !0)) : new t(NaN)
      }, we.squareRoot = we.sqrt = function () {
        var a = this,
          i = a.d,
          l = a.e,
          p = a.s,
          c = a.constructor,
          d, g, y, x, f, h;
        if (1 !== p || !i || !i[0]) return new c(!p || 0 > p && (!i || i[0]) ? NaN : i ? a : 1 / 0);
        for (ve = !1, p = Math.sqrt(+a), 0 == p || p == 1 / 0 ? (g = o(i), 0 == (g.length + l) % 2 && (g += "0"), p = Math.sqrt(g), l = Ne((l + 1) / 2) - (0 > l || l % 2), p == 1 / 0 ? g = "1e" + l : (g = p.toExponential(), g = g.slice(0, g.indexOf("e") + 1) + l), x = new c(g)) : x = new c(p.toString()), y = (l = c.precision) + 3;;)
          if (h = x, x = h.plus(Ie(a, h, y + 2, 1)).times(.5), o(h.d).slice(0, y) === (g = o(x.d)).slice(0, y))
            if (g = g.slice(y - 3, y + 1), "9999" == g || !f && "4999" == g) {
              if (!f && (u(h, l + 1, 0), h.times(h).eq(a))) {
                x = h;
                break
              }
              y += 4, f = 1
            } else {
              +g && (+g.slice(1) || "5" != g.charAt(0)) || (u(x, l + 1, 1), d = !x.times(x).eq(a));
              break
            } return ve = !0, u(x, l, c.rounding, d)
      }, we.tangent = we.tan = function () {
        var e = this,
          t = e.constructor,
          a, n;
        return e.isFinite() ? e.isZero() ? new t(e) : (a = t.precision, n = t.rounding, t.precision = a + 10, t.rounding = 1, e = e.sin(), e.s = 1, e = Ie(e, new t(1).minus(e.times(e)).sqrt(), a + 10, 0), t.precision = a, t.rounding = n, u(2 == Te || 4 == Te ? e.neg() : e, a, n, !0)) : new t(NaN)
      }, we.times = we.mul = function (a) {
        var n = this,
          s = n.constructor,
          o = n.d,
          l = (a = new s(a)).d,
          p, m, c, d, g, x, h, b, v;
        if (a.s *= n.s, !o || !o[0] || !l || !l[0]) return new s(a.s && (!o || o[0] || l) && (!l || l[0] || o) ? o && l ? 0 * a.s : a.s / 0 : NaN);
        for (m = Ne(n.e / 7) + Ne(a.e / 7), b = o.length, v = l.length, b < v && (g = o, o = l, l = g, x = b, b = v, v = x), g = [], x = b + v, c = x; c--;) g.push(0);
        for (c = v; 0 <= --c;) {
          for (p = 0, d = b + c; d > c;) h = g[d] + l[c] * o[d - c - 1] + p, g[d--] = 0 | h % 10000000, p = 0 | h / 10000000;
          g[d] = 0 | (g[d] + p) % 10000000
        }
        for (; !g[--x];) g.pop();
        return p ? ++m : g.shift(), a.d = g, a.e = f(g, m), ve ? u(a, s.precision, s.rounding) : a
      }, we.toBinary = function (e, t) {
        return B(this, 2, e, t)
      }, we.toDecimalPlaces = we.toDP = function (e, t) {
        var a = this,
          n = a.constructor;
        return (a = new n(a), void 0 === e) ? a : (l(e, 0, 1000000000), void 0 === t ? t = n.rounding : l(t, 0, 8), u(a, e + a.e + 1, t))
      }, we.toExponential = function (e, t) {
        var a = this,
          n = a.constructor,
          i;
        return void 0 === e ? i = g(a, !0) : (l(e, 0, 1000000000), void 0 === t ? t = n.rounding : l(t, 0, 8), a = u(new n(a), e + 1, t), i = g(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + i : i
      }, we.toFixed = function (e, t) {
        var a = this,
          n = a.constructor,
          i, r;
        return void 0 === e ? i = g(a) : (l(e, 0, 1000000000), void 0 === t ? t = n.rounding : l(t, 0, 8), r = u(new n(a), e + a.e + 1, t), i = g(r, !1, e + r.e + 1)), a.isNeg() && !a.isZero() ? "-" + i : i
      }, we.toFraction = function (t) {
        var a = this,
          i = a.d,
          s = a.constructor,
          l, p, m, c, u, g, y, x, f, h, b, N;
        if (!i) return new s(a);
        if (f = p = new s(1), m = x = new s(0), l = new s(m), u = l.e = v(i) - a.e - 1, g = u % 7, l.d[0] = Me(10, 0 > g ? 7 + g : g), null == t) t = 0 < u ? l : f;
        else {
          if (y = new s(t), !y.isInt() || y.lt(f)) throw Error("[DecimalError] Invalid argument: " + y);
          t = y.gt(l) ? 0 < u ? l : f : y
        }
        for (ve = !1, y = new s(o(i)), h = s.precision, s.precision = u = 2 * (7 * i.length);;) {
          if (b = Ie(y, l, 0, 1, 1), c = p.plus(b.times(m)), 1 == c.cmp(t)) break;
          p = m, m = c, c = f, f = x.plus(b.times(c)), x = c, c = l, l = y.minus(b.times(c)), y = c
        }
        return c = Ie(t.minus(p), m, 0, 1, 1), x = x.plus(c.times(f)), p = p.plus(c.times(m)), x.s = f.s = a.s, N = 1 > Ie(f, m, u, 1).minus(a).abs().cmp(Ie(x, p, u, 1).minus(a).abs()) ? [f, m] : [x, p], s.precision = h, ve = !0, N
      }, we.toHexadecimal = we.toHex = function (e, t) {
        return B(this, 16, e, t)
      }, we.toNearest = function (e, t) {
        var a = this,
          n = a.constructor;
        if (a = new n(a), null == e) {
          if (!a.d) return a;
          e = new n(1), t = n.rounding
        } else {
          if (e = new n(e), void 0 === t ? t = n.rounding : l(t, 0, 8), !a.d) return e.s ? a : e;
          if (!e.d) return e.s && (e.s = a.s), e
        }
        return e.d[0] ? (ve = !1, a = Ie(a, e, 0, t, 1).times(e), ve = !0, u(a)) : (e.s = a.s, a = e), a
      }, we.toNumber = function () {
        return +this
      }, we.toOctal = function (e, t) {
        return B(this, 8, e, t)
      }, we.toPower = we.pow = function (t) {
        var a = this,
          n = a.constructor,
          i = +(t = new n(t)),
          l, m, c, d, g, f;
        if (!a.d || !t.d || !a.d[0] || !t.d[0]) return new n(Me(+a, i));
        if (a = new n(a), a.eq(1)) return a;
        if (c = n.precision, g = n.rounding, t.eq(1)) return u(a, c, g);
        if (l = Ne(t.e / 7), l >= t.d.length - 1 && 9007199254740991 >= (m = 0 > i ? -i : i)) return d = M(n, a, m, c), 0 > t.s ? new n(1).div(d) : u(d, c, g);
        if (f = a.s, 0 > f) {
          if (l < t.d.length - 1) return new n(NaN);
          if (0 == (1 & t.d[l]) && (f = 1), 0 == a.e && 1 == a.d[0] && 1 == a.d.length) return a.s = f, a
        }
        return (m = Me(+a, i), l = 0 != m && isFinite(m) ? new n(m + "").e : Ne(i * (Math.log("0." + o(a.d)) / Math.LN10 + a.e + 1)), l > n.maxE + 1 || l < n.minE - 1) ? new n(0 < l ? f / 0 : 0) : (ve = !1, n.rounding = a.s = 1, m = Math.min(12, (l + "").length), d = O(t.times(_(a, c + m)), c), d.d && (d = u(d, c + 5, 1), p(d.d, c, g) && (l = c + 10, d = u(O(t.times(_(a, l + m)), l), l + 5, 1), 1e14 == +o(d.d).slice(c + 1, c + 15) + 1 && (d = u(d, c + 1, 0)))), d.s = f, ve = !0, n.rounding = g, u(d, c, g))
      }, we.toPrecision = function (e, t) {
        var a = this,
          n = a.constructor,
          i;
        return void 0 === e ? i = g(a, a.e <= n.toExpNeg || a.e >= n.toExpPos) : (l(e, 1, 1000000000), void 0 === t ? t = n.rounding : l(t, 0, 8), a = u(new n(a), e, t), i = g(a, e <= a.e || a.e <= n.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + i : i
      }, we.toSignificantDigits = we.toSD = function (e, t) {
        var a = this,
          n = a.constructor;
        return void 0 === e ? (e = n.precision, t = n.rounding) : (l(e, 1, 1000000000), void 0 === t ? t = n.rounding : l(t, 0, 8)), u(new n(a), e, t)
      }, we.toString = function () {
        var e = this,
          t = e.constructor,
          a = g(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
        return e.isNeg() && !e.isZero() ? "-" + a : a
      }, we.truncated = we.trunc = function () {
        return u(new this.constructor(this), this.e + 1, 1)
      }, we.valueOf = we.toJSON = function () {
        var e = this,
          t = e.constructor,
          a = g(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
        return e.isNeg() ? "-" + a : a
      };
      var Ie = function () {
        function e(e, t, a) {
          var n = 0,
            r = e.length,
            s;
          for (e = e.slice(); r--;) s = e[r] * t + n, e[r] = 0 | s % a, n = 0 | s / a;
          return n && e.unshift(n), e
        }

        function t(e, t, a, n) {
          var s, o;
          if (a != n) o = a > n ? 1 : -1;
          else
            for (s = o = 0; s < a; s++)
              if (e[s] != t[s]) {
                o = e[s] > t[s] ? 1 : -1;
                break
              } return o
        }

        function a(e, t, a, n) {
          for (var r = 0; a--;) e[a] -= r, r = e[a] < t[a] ? 1 : 0, e[a] = r * n + e[a] - t[a];
          for (; !e[0] && 1 < e.length;) e.shift()
        }
        return function (n, r, s, o, l, p) {
          var m = n.constructor,
            c = n.s == r.s ? 1 : -1,
            d = n.d,
            g = r.d,
            y, x, f, h, b, v, N, M, S, A, O, _, C, E, w, T, I, B, z, j;
          if (!d || !d[0] || !g || !g[0]) return new m(n.s && r.s && (d ? !(g && d[0] == g[0]) : !!g) ? d && 0 == d[0] || !g ? 0 * c : c / 0 : NaN);
          for (p ? (b = 1, x = n.e - r.e) : (p = 10000000, b = 7, x = Ne(n.e / b) - Ne(r.e / b)), z = g.length, I = d.length, S = new m(c), A = S.d = [], f = 0; g[f] == (d[f] || 0); f++);
          if (g[f] > (d[f] || 0) && x--, null == s ? (E = s = m.precision, o = m.rounding) : l ? E = s + (n.e - r.e) + 1 : E = s, 0 > E) A.push(1), v = !0;
          else {
            if (E = 0 | E / b + 2, f = 0, 1 == z) {
              for (h = 0, g = g[0], E++;
                (f < I || h) && E--; f++) w = h * p + (d[f] || 0), A[f] = 0 | w / g, h = 0 | w % g;
              v = h || f < I
            } else {
              for (h = 0 | p / (g[0] + 1), 1 < h && (g = e(g, h, p), d = e(d, h, p), z = g.length, I = d.length), T = z, O = d.slice(0, z), _ = O.length; _ < z;) O[_++] = 0;
              j = g.slice(), j.unshift(0), B = g[0], g[1] >= p / 2 && ++B;
              do h = 0, y = t(g, O, z, _), 0 > y ? (C = O[0], z != _ && (C = C * p + (O[1] || 0)), h = 0 | C / B, 1 < h ? (h >= p && (h = p - 1), N = e(g, h, p), M = N.length, _ = O.length, y = t(N, O, M, _), 1 == y && (h--, a(N, z < M ? j : g, M, p))) : (0 == h && (y = h = 1), N = g.slice()), M = N.length, M < _ && N.unshift(0), a(O, N, _, p), -1 == y && (_ = O.length, y = t(g, O, z, _), 1 > y && (h++, a(O, z < _ ? j : g, _, p))), _ = O.length) : 0 === y && (h++, O = [0]), A[f++] = h, y && O[0] ? O[_++] = d[T] || 0 : (O = [d[T]], _ = 1); while ((T++ < I || void 0 !== O[0]) && E--);
              v = void 0 !== O[0]
            }
            A[0] || A.shift()
          }
          if (1 == b) S.e = x, ke = v;
          else {
            for (f = 1, h = A[0]; 10 <= h; h /= 10) f++;
            S.e = f + x * b - 1, u(S, l ? s + S.e + 1 : s, o, v)
          }
          return S
        }
      }();
      P = X(be), P["default"] = P.Decimal = P, fe = new P(fe), he = new P(he), n = function () {
        return P
      }.call(t, a, t, e), !(n !== void 0 && (e.exports = n))
    })(this)
  }, function (e) {
    "use strict";
    var t = Object.assign || function (e) {
        for (var t = 1, a; t < arguments.length; t++)
          for (var n in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        return e
      },
      a = {
        "{": "\\{",
        "}": "\\}",
        "\\": "\\textbackslash{}",
        "#": "\\#",
        $: "\\$",
        "%": "\\%",
        "&": "\\&",
        "^": "\\textasciicircum{}",
        _: "\\_",
        "~": "\\textasciitilde{}"
      },
      n = {
        "–": "\\--",
        "—": "\\---",
        " ": "~",
        "	": "\\qquad{}",
        "\r\n": "\\newline{}",
        "\n": "\\newline{}"
      },
      i = function (e, a) {
        return t({}, e, a)
      };
    e.exports = function (e) {
      for (var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s = r.preserveFormatting, o = r.escapeMapFn, l = void 0 === o ? i : o, p = e + "", m = "", c = l(t({}, a), void 0 !== s && s ? t({}, n) : {}), d = Object.keys(c), u = function () {
          var e = !1;
          d.forEach(function (t, a) {
            e || p.length >= t.length && p.slice(0, t.length) === t && (m += c[d[a]], p = p.slice(t.length, p.length), e = !0)
          }), e || (m += p.slice(0, 1), p = p.slice(1, p.length))
        }; p;) u();
      return m
    }
  }, function (e) {
    function t() {}
    t.prototype = {
      on: function (t, a, n) {
        var i = this.e || (this.e = {});
        return (i[t] || (i[t] = [])).push({
          fn: a,
          ctx: n
        }), this
      },
      once: function (e, t, a) {
        function n() {
          i.off(e, n), t.apply(a, arguments)
        }
        var i = this;
        return n._ = t, this.on(e, n, a)
      },
      emit: function (e) {
        var t = [].slice.call(arguments, 1),
          a = ((this.e || (this.e = {}))[e] || []).slice(),
          n = 0,
          r = a.length;
        for (n; n < r; n++) a[n].fn.apply(a[n].ctx, t);
        return this
      },
      off: function (t, a) {
        var n = this.e || (this.e = {}),
          e = n[t],
          r = [];
        if (e && a)
          for (var s = 0, o = e.length; s < o; s++) e[s].fn !== a && e[s].fn._ !== a && r.push(e[s]);
        return r.length ? n[t] = r : delete n[t], this
      }
    }, e.exports = t, e.exports.TinyEmitter = t
  }, function (e, t, a) {
    var n = a(21),
      i = a(22),
      r = i.create,
      s = r(n);
    e.exports = s
  }, function (e) {
    var t = function () {
      return this
    }();
    try {
      t = t || new Function("return this")()
    } catch (a) {
      "object" == typeof window && (t = window)
    }
    e.exports = t
  }, function (e, t, a) {
    "use strict";

    function n(e) {
      throw new Error("Cannot convert value ".concat(e, " into a BigNumber: no class 'BigNumber' provided"))
    }

    function i(e) {
      throw new Error("Cannot convert value ".concat(e, " into a Complex number: no class 'Complex' provided"))
    }

    function r() {
      throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")
    }

    function s(e) {
      throw new Error("Cannot convert value ".concat(e, " into a Fraction, no class 'Fraction' provided."))
    }

    function o(e) {
      return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, o(e)
    }

    function l(e) {
      for (var t = 0; t < e.length; t++)
        if (Object(Yt.i)(e[t])) return !0;
      return !1
    }

    function p(e, t) {
      Object(Yt.v)(e) && (e = e.valueOf());
      for (var a = 0, n = e.length, r; a < n; a++) r = e[a], Array.isArray(r) ? p(r, t) : t(r)
    }

    function m(e, t, a) {
      return e && "function" == typeof e.map ? e.map(function (e) {
        return m(e, t, a)
      }) : t(e)
    }

    function c(e, t, a) {
      var n = Array.isArray(e) ? Object(ya.a)(e) : e.size();
      if (0 > t || t >= n.length) throw new Ma.a(t, n.length);
      return Object(Yt.v)(e) ? e.create(d(e.valueOf(), t, a)) : d(e, t, a)
    }

    function d(e, t, a) {
      var n, r, s, o;
      if (0 >= t) {
        if (!Array.isArray(e[0])) {
          for (s = e[0], n = 1; n < e.length; n++) s = a(s, e[n]);
          return s
        }
        for (o = u(e), r = [], n = 0; n < o.length; n++) r[n] = d(o[n], t - 1, a);
        return r
      }
      for (r = [], n = 0; n < e.length; n++) r[n] = d(e[n], t - 1, a);
      return r
    }

    function u(e) {
      var t = e.length,
        a = e[0].length,
        n = [],
        r, s;
      for (s = 0; s < a; s++) {
        var o = [];
        for (r = 0; r < t; r++) o.push(e[r][s]);
        n.push(o)
      }
      return n
    }

    function g(e, t, a, n, r, s, o, l, p, m, c) {
      var d = e._values,
        u = e._index,
        g = e._ptr,
        y = o._index,
        x, f, h, b;
      if (n)
        for (f = g[t], h = g[t + 1], x = f; x < h; x++) b = u[x], a[b] === s ? (n[b] = p ? l(d[x], n[b]) : l(n[b], d[x]), r[b] = s) : (a[b] = s, y.push(b), m ? (n[b] = p ? l(d[x], c) : l(c, d[x]), r[b] = s) : n[b] = d[x]);
      else
        for (f = g[t], h = g[t + 1], x = f; x < h; x++) b = u[x], a[b] === s ? r[b] = s : (a[b] = s, y.push(b))
    }

    function y(e) {
      return 0 > e
    }

    function x(e) {
      return 0 < e
    }

    function f(e) {
      return 0 === e
    }

    function h(e) {
      return Number.isNaN(e)
    }

    function b(e, t, a) {
      if (null === a || a === void 0) return e.eq(t);
      if (e.eq(t)) return !0;
      if (e.isNaN() || t.isNaN()) return !1;
      if (e.isFinite() && t.isFinite()) {
        var n = e.minus(t).abs();
        if (n.isZero()) return !0;
        var i = e.constructor.max(e.abs(), t.abs());
        return n.lte(i.times(a))
      }
      return !1
    }

    function v(e, t, a) {
      return Object(Kt.m)(e.re, t.re, a) && Object(Kt.m)(e.im, t.im, a)
    }

    function N(e) {
      return Math.abs(e)
    }

    function M(e, t) {
      return e + t
    }

    function S(e, t) {
      return e * t
    }

    function A(e) {
      return -e
    }

    function O(e) {
      return e
    }

    function _(e) {
      return Object(Kt.d)(e)
    }

    function C(e) {
      return Math.ceil(e)
    }

    function E(e) {
      return e * e * e
    }

    function w(e) {
      return Math.exp(e)
    }

    function k(e) {
      return Object(Kt.g)(e)
    }

    function T(e, t) {
      if (!Object(Kt.i)(e) || !Object(Kt.i)(t)) throw new Error("Parameters in function gcd must be integer numbers");
      for (var n; 0 !== t;) n = e % t, e = t, t = n;
      return 0 > e ? -e : e
    }

    function I(e, n) {
      if (!Object(Kt.i)(e) || !Object(Kt.i)(n)) throw new Error("Parameters in function lcm must be integer numbers");
      if (0 === e || 0 === n) return 0;
      for (var i = e * n, r; 0 !== n;) r = n, n = e % r, e = r;
      return Math.abs(i / e)
    }

    function q(e) {
      return Math.log(e)
    }

    function B(e) {
      return Object(Kt.j)(e)
    }

    function z(e) {
      return Object(Kt.l)(e)
    }

    function j(e, t) {
      if (0 < t) return e - t * Math.floor(e / t);
      if (0 === t) return e;
      throw new Error("Cannot calculate mod for a negative divisor")
    }

    function D(e, t) {
      var a = 0 > t;
      if (a && (t = -t), 0 === t) throw new Error("Root must be non-zero");
      if (0 > e && 1 != Math.abs(t) % 2) throw new Error("Root must be odd when a is negative.");
      if (0 === e) return a ? 1 / 0 : 0;
      if (!isFinite(e)) return a ? 0 : e;
      var n = Math.pow(Math.abs(e), 1 / t);
      return n = 0 > e ? -n : n, a ? 1 / n : n
    }

    function P(e) {
      return Object(Kt.n)(e)
    }

    function R(e) {
      return e * e
    }

    function U(e, n) {
      var i = 0,
        s = 1,
        o = 1,
        l = 0,
        p, m, c;
      if (!Object(Kt.i)(e) || !Object(Kt.i)(n)) throw new Error("Parameters in function xgcd must be integer numbers");
      for (; n;) m = Math.floor(e / n), c = e - m * n, p = i, i = s - m * i, s = p, p = o, o = l - m * o, l = p, e = n, n = c;
      var d;
      return d = 0 > e ? [-e, -s, -l] : [e, e ? s : 0, l], d
    }

    function L(e, t) {
      return 1 > e * e && t === 1 / 0 || 1 < e * e && t === -Infinity ? 0 : Math.pow(e, t)
    }

    function F(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 0;
      return parseFloat(Object(Kt.q)(e, t))
    }

    function H(e, t, a) {
      var n, r, s;
      if (0 >= t) {
        if (!Array.isArray(e[0])) return a(e);
        for (s = G(e), r = [], n = 0; n < s.length; n++) r[n] = H(s[n], t - 1, a);
        return r
      }
      for (r = [], n = 0; n < e.length; n++) r[n] = H(e[n], t - 1, a);
      return r
    }

    function G(e) {
      var t = e.length,
        a = e[0].length,
        n = [],
        r, s;
      for (s = 0; s < a; s++) {
        var o = [];
        for (r = 0; r < t; r++) o.push(e[r][s]);
        n.push(o)
      }
      return n
    }

    function $(e, t) {
      var a = e.size(),
        n = t.size();
      if (a.length !== n.length) throw new ha.a(a.length, n.length)
    }

    function Z(e, t) {
      if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitAnd");
      var a = e.constructor;
      if (e.isNaN() || t.isNaN()) return new a(NaN);
      if (e.isZero() || t.eq(-1) || e.eq(t)) return e;
      if (t.isZero() || e.eq(-1)) return t;
      if (!e.isFinite() || !t.isFinite()) {
        if (!e.isFinite() && !t.isFinite()) return e.isNegative() === t.isNegative() ? e : new a(0);
        if (!e.isFinite()) return t.isNegative() ? e : e.isNegative() ? new a(0) : t;
        if (!t.isFinite()) return e.isNegative() ? t : t.isNegative() ? new a(0) : e
      }
      return J(e, t, function (e, t) {
        return e & t
      })
    }

    function V(e) {
      if (e.isFinite() && !e.isInteger()) throw new Error("Integer expected in function bitNot");
      var t = e.constructor,
        a = t.precision;
      t.config({
        precision: 1E9
      });
      var n = e.plus(new t(1));
      return n.s = -n.s || null, t.config({
        precision: a
      }), n
    }

    function W(e, t) {
      if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitOr");
      var a = e.constructor;
      if (e.isNaN() || t.isNaN()) return new a(NaN);
      var n = new a(-1);
      return e.isZero() || t.eq(n) || e.eq(t) ? t : t.isZero() || e.eq(n) ? e : e.isFinite() && t.isFinite() ? J(e, t, function (e, t) {
        return e | t
      }) : (e.isFinite() || e.isNegative() || !t.isNegative()) && (!e.isNegative() || t.isNegative() || t.isFinite()) ? e.isNegative() && t.isNegative() ? e.isFinite() ? e : t : e.isFinite() ? t : e : n
    }

    function J(e, t, a) {
      var n = e.constructor,
        r = +(0 > e.s),
        s = +(0 > t.s),
        o, l;
      if (r) {
        o = Y(V(e));
        for (var p = 0; p < o.length; ++p) o[p] ^= 1
      } else o = Y(e);
      if (s) {
        l = Y(V(t));
        for (var m = 0; m < l.length; ++m) l[m] ^= 1
      } else l = Y(t);
      var c, d, u;
      o.length <= l.length ? (c = o, d = l, u = r) : (c = l, d = o, u = s);
      var g = c.length,
        y = d.length,
        x = 1 ^ a(r, s),
        f = new n(1 ^ x),
        h = new n(1),
        b = new n(2),
        v = n.precision;
      for (n.config({
          precision: 1E9
        }); 0 < g;) a(c[--g], d[--y]) === x && (f = f.plus(h)), h = h.times(b);
      for (; 0 < y;) a(u, d[--y]) === x && (f = f.plus(h)), h = h.times(b);
      return n.config({
        precision: v
      }), 0 === x && (f.s = -f.s), f
    }

    function Y(e) {
      for (var t = e.d, a = t[0] + "", n = 1, o; n < t.length; ++n) {
        o = t[n] + "";
        for (var l = 7 - o.length; l--;) o = "0" + o;
        a += o
      }
      for (var p = a.length;
        "0" === a.charAt(p);) p--;
      var m = e.e,
        c = a.slice(0, p + 1 || 1),
        d = c.length;
      if (0 < m)
        if (++m > d)
          for (m -= d; m--;) c += "0";
        else m < d && (c = c.slice(0, m) + "." + c.slice(m));
      for (var u = [0], g = 0, y; g < c.length;) {
        for (y = u.length; y--;) u[y] *= 10;
        u[0] += parseInt(c.charAt(g++));
        for (var x = 0; x < u.length; ++x) 1 < u[x] && ((null === u[x + 1] || void 0 === u[x + 1]) && (u[x + 1] = 0), u[x + 1] += u[x] >> 1, u[x] &= 1)
      }
      return u.reverse()
    }

    function X(e, t) {
      if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitXor");
      var a = e.constructor;
      if (e.isNaN() || t.isNaN()) return new a(NaN);
      if (e.isZero()) return t;
      if (t.isZero()) return e;
      if (e.eq(t)) return new a(0);
      var n = new a(-1);
      return e.eq(n) ? V(t) : t.eq(n) ? V(e) : e.isFinite() && t.isFinite() ? J(e, t, function (e, t) {
        return e ^ t
      }) : e.isFinite() || t.isFinite() ? new a(e.isNegative() === t.isNegative() ? 1 / 0 : -Infinity) : n
    }

    function K(e, t) {
      if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function leftShift");
      var a = e.constructor;
      return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new a(NaN) : e.isZero() || t.isZero() ? e : e.isFinite() || t.isFinite() ? t.lt(55) ? e.times(Math.pow(2, t.toNumber()) + "") : e.times(new a(2).pow(t)) : new a(NaN)
    }

    function ee(e, t) {
      if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function rightArithShift");
      var a = e.constructor;
      return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new a(NaN) : e.isZero() || t.isZero() ? e : t.isFinite() ? t.lt(55) ? e.div(Math.pow(2, t.toNumber()) + "").floor() : e.div(new a(2).pow(t)).floor() : e.isNegative() ? new a(-1) : e.isFinite() ? new a(0) : new a(NaN)
    }

    function te(e, t) {
      if (!Object(Kt.i)(e) || !Object(Kt.i)(t)) throw new Error("Integers expected in function bitAnd");
      return e & t
    }

    function ae(e) {
      if (!Object(Kt.i)(e)) throw new Error("Integer expected in function bitNot");
      return ~e
    }

    function ne(e, t) {
      if (!Object(Kt.i)(e) || !Object(Kt.i)(t)) throw new Error("Integers expected in function bitOr");
      return e | t
    }

    function ie(e, t) {
      if (!Object(Kt.i)(e) || !Object(Kt.i)(t)) throw new Error("Integers expected in function bitXor");
      return e ^ t
    }

    function re(e, t) {
      if (!Object(Kt.i)(e) || !Object(Kt.i)(t)) throw new Error("Integers expected in function leftShift");
      return e << t
    }

    function se(e, t) {
      if (!Object(Kt.i)(e) || !Object(Kt.i)(t)) throw new Error("Integers expected in function rightArithShift");
      return e >> t
    }

    function oe(e, t) {
      if (!Object(Kt.i)(e) || !Object(Kt.i)(t)) throw new Error("Integers expected in function rightLogShift");
      return e >>> t
    }

    function le(e) {
      return !e
    }

    function pe(e, t) {
      return !!(e || t)
    }

    function me(e, t) {
      return !!e != !!t
    }

    function ce(e, t) {
      return !!(e && t)
    }

    function de(e, t, a, n) {
      if (n < a) {
        if (e.length !== t.length) throw new ha.a(e.length, t.length);
        for (var r = [], s = 0; s < e.length; s++) r[s] = de(e[s], t[s], a, n + 1);
        return r
      }
      return e.concat(t)
    }

    function ue(e) {
      return ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, ue(e)
    }

    function ge(e, t) {
      return function a() {
        "object" !== ue(a.cache) && (a.cache = {});
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        var s = t ? t(n) : JSON.stringify(n);
        return s in a.cache || (a.cache[s] = e.apply(e, n)), a.cache[s]
      }
    }

    function ye(e) {
      return Object.keys(e.signatures || {}).reduce(function (e, t) {
        var a = (t.match(/,/g) || []).length + 1;
        return Math.max(e, a)
      }, -1)
    }

    function xe(e, t) {
      var a = ye(t);
      return Object(ya.c)(e, function (e, n, i) {
        return 1 === a ? t(e) : 2 === a ? t(e, [n]) : t(e, [n], i)
      })
    }

    function fe(e, t) {
      var a = ye(t);
      (function n(i, r) {
        Array.isArray(i) ? Object(ya.f)(i, function (e, t) {
          n(e, r.concat(t))
        }) : 1 === a ? t(i) : 2 === a ? t(i, r) : t(i, r, e)
      })(e, [])
    }

    function he(e, t) {
      var a = ye(t);
      return function n(i, r) {
        return Array.isArray(i) ? i.map(function (e, t) {
          return n(e, r.concat(t))
        }) : 1 === a ? t(i) : 2 === a ? t(i, r) : t(i, r, e)
      }(e, [])
    }

    function be() {
      throw new Error("No \"bignumber\" implementation available")
    }

    function ve() {
      throw new Error("No \"fraction\" implementation available")
    }

    function Ne() {
      throw new Error("No \"matrix\" implementation available")
    }

    function Me(e) {
      return Me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, Me(e)
    }

    function Se(e, t) {
      if (Ee(e) && Oe(e, t)) return e[t];
      if ("function" == typeof e[t] && Ce(e, t)) throw new Error("Cannot access method \"" + t + "\" as a property");
      throw new Error("No access to property \"" + t + "\"")
    }

    function Ae(e, t, a) {
      if (Ee(e) && Oe(e, t)) return e[t] = a, a;
      throw new Error("No access to property \"" + t + "\"")
    }

    function Oe(e, t) {
      return !!(e && "object" === Me(e)) && (!!Object(fa.f)(yr, t) || !(t in Object.prototype) && !(t in Function.prototype))
    }

    function _e(e, t) {
      if (!Ce(e, t)) throw new Error("No access to method \"" + t + "\"")
    }

    function Ce(e, t) {
      return !!(e && "function" == typeof e[t]) && !(Object(fa.f)(e, t) && Object.getPrototypeOf && t in Object.getPrototypeOf(e)) && (!!Object(fa.f)(xr, t) || !(t in Object.prototype) && !(t in Function.prototype))
    }

    function Ee(e) {
      return "object" === Me(e) && e && e.constructor === Object
    }

    function we(e, t) {
      if (!Object(Yt.t)(t)) throw new TypeError("Index expected");
      if (1 !== t.size().length) throw new ha.a(t.size().length, 1);
      var a = e.length;
      Object(ya.s)(t.min()[0], a), Object(ya.s)(t.max()[0], a);
      var n = t.dimension(0),
        i = "";
      return n.forEach(function (t) {
        i += e.charAt(t)
      }), i
    }

    function ke(e, t, a, n) {
      if (!t || !0 !== t.isIndex) throw new TypeError("Index expected");
      if (1 !== t.size().length) throw new ha.a(t.size().length, 1);
      if (void 0 === n) n = " ";
      else if ("string" != typeof n || 1 !== n.length) throw new TypeError("Single character expected as defaultValue");
      var r = t.dimension(0),
        s = r.size()[0];
      if (s !== a.length) throw new ha.a(r.size()[0], a.length);
      var o = e.length;
      Object(ya.s)(t.min()[0]), Object(ya.s)(t.max()[0]);
      for (var l = [], p = 0; p < o; p++) l[p] = e.charAt(p);
      if (r.forEach(function (e, t) {
          l[e] = a.charAt(t[0])
        }), l.length > o)
        for (var m = o - 1, c = l.length; m < c; m++) l[m] || (l[m] = n);
      return l.join("")
    }

    function Te(e, t) {
      if (1 !== t.size().length) throw new ha.a(t.size(), 1);
      var a = t.dimension(0);
      if ("string" != typeof a) throw new TypeError("String expected as index to retrieve an object property");
      return Se(e, a)
    }

    function Ie(e, t, a) {
      if (1 !== t.size().length) throw new ha.a(t.size(), 1);
      var n = t.dimension(0);
      if ("string" != typeof n) throw new TypeError("String expected as index to retrieve an object property");
      var i = Object(fa.a)(e);
      return Ae(i, n, a), i
    }

    function qe(e, t, a) {
      var n;
      return -1 === (e + "").indexOf("Unexpected type") ? -1 === (e + "").indexOf("complex numbers") ? e : (n = 2 < arguments.length ? " (type: " + Object(Yt.M)(a) + ", value: " + JSON.stringify(a) + ")" : "", new TypeError("Cannot calculate " + t + ", no ordering relation is defined for complex numbers" + n)) : (n = 2 < arguments.length ? " (type: " + Object(Yt.M)(a) + ", value: " + JSON.stringify(a) + ")" : " (type: " + e.data.actual + ")", new TypeError("Cannot calculate " + t + ", unexpected type of argument" + n))
    }

    function Be(e, t, a) {
      return e.replace(/\$([\w.]+)/g, function (e, n) {
        for (var i = n.split("."), r = t[i.shift()]; i.length && r !== void 0;) {
          var s = i.shift();
          r = s ? r[s] : r + "."
        }
        return void 0 === r ? e : Object(Yt.I)(r) ? r : Object(xa.d)(r, a)
      })
    }

    function ze(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null == arguments[t] ? {} : arguments[t],
          n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function (e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), n.forEach(function (t) {
          je(e, t, a[t])
        })
      }
      return e
    }

    function je(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e
    }

    function De(e) {
      var t = e.DenseMatrix;
      return function (e, a, n) {
        var r = e.size();
        if (2 !== r.length) throw new RangeError("Matrix must be two dimensional (size: " + Object(xa.d)(r) + ")");
        var s = r[0],
          o = r[1];
        if (s !== o) throw new RangeError("Matrix must be square (size: " + Object(xa.d)(r) + ")");
        var l, p, m;
        if (Object(Yt.v)(a)) {
          var c = a.size();
          if (1 === c.length) {
            if (c[0] !== s) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
            for (l = [], m = a._data, p = 0; p < s; p++) l[p] = [m[p]];
            return new t({
              data: l,
              size: [s, 1],
              datatype: a._datatype
            })
          }
          if (2 === c.length) {
            if (c[0] !== s || 1 !== c[1]) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
            if (Object(Yt.n)(a)) {
              if (n) {
                for (l = [], m = a._data, p = 0; p < s; p++) l[p] = [m[p][0]];
                return new t({
                  data: l,
                  size: [s, 1],
                  datatype: a._datatype
                })
              }
              return a
            }
            for (l = [], p = 0; p < s; p++) l[p] = [0];
            for (var d = a._values, u = a._index, g = a._ptr, y = g[1], x = g[0]; x < y; x++) p = u[x], l[p][0] = d[x];
            return new t({
              data: l,
              size: [s, 1],
              datatype: a._datatype
            })
          }
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.")
        }
        if (Object(Yt.b)(a)) {
          var f = Object(ya.a)(a);
          if (1 === f.length) {
            if (f[0] !== s) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
            for (l = [], p = 0; p < s; p++) l[p] = [a[p]];
            return new t({
              data: l,
              size: [s, 1]
            })
          }
          if (2 === f.length) {
            if (f[0] !== s || 1 !== f[1]) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
            for (l = [], p = 0; p < s; p++) l[p] = [a[p][0]];
            return new t({
              data: l,
              size: [s, 1]
            })
          }
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.")
        }
      }
    }

    function Pe(e, t) {
      return e.re > t.re ? 1 : e.re < t.re ? -1 : e.im > t.im ? 1 : e.im < t.im ? -1 : 0
    }

    function Re(e) {
      return e[0].precision
    }

    function Ue(e) {
      return Ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, Ue(e)
    }

    function Le() {
      return Le = Object.assign || function (e) {
        for (var t = 1, a; t < arguments.length; t++)
          for (var n in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        return e
      }, Le.apply(this, arguments)
    }

    function Fe(e) {
      return Object(Kt.a)(e)
    }

    function He(e) {
      return Math.atan(1 / e)
    }

    function Ge(e) {
      return isFinite(e) ? (Math.log((e + 1) / e) + Math.log(e / (e - 1))) / 2 : 0
    }

    function $e(e) {
      return Math.asin(1 / e)
    }

    function Ze(e) {
      var t = 1 / e;
      return Math.log(t + Math.sqrt(t * t + 1))
    }

    function Ve(e) {
      return Math.acos(1 / e)
    }

    function We(e) {
      var t = 1 / e,
        a = Math.sqrt(t * t - 1);
      return Math.log(a + t)
    }

    function Je(e) {
      return Object(Kt.b)(e)
    }

    function Ye(e) {
      return Object(Kt.c)(e)
    }

    function Xe(e) {
      return 1 / Math.tan(e)
    }

    function Qe(t) {
      var a = Math.exp(2 * t);
      return (a + 1) / (a - 1)
    }

    function Ke(e) {
      return 1 / Math.sin(e)
    }

    function et(e) {
      return 0 === e ? Number.POSITIVE_INFINITY : Math.abs(2 / (Math.exp(e) - Math.exp(-e))) * Object(Kt.n)(e)
    }

    function tt(e) {
      return 1 / Math.cos(e)
    }

    function at(e) {
      return 2 / (Math.exp(e) + Math.exp(-e))
    }

    function nt(e) {
      return Object(Kt.o)(e)
    }

    function it(e) {
      return it = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, it(e)
    }

    function rt(e) {
      return e && e.isIndexError ? new Ma.a(e.index + 1, e.min + 1, void 0 === e.max ? void 0 : e.max + 1) : e
    }

    function st(e) {
      return st = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, st(e)
    }

    function ot(e) {
      var t = e.subset;
      return function (e, a) {
        try {
          if (Array.isArray(e)) return t(e, a);
          if (e && "function" == typeof e.subset) return e.subset(a);
          if ("string" == typeof e) return t(e, a);
          if ("object" === st(e)) {
            if (!a.isObjectProperty()) throw new TypeError("Cannot apply a numeric index as object property");
            return Se(e, a.getObjectProperty())
          }
          throw new TypeError("Cannot apply index: unsupported type of object")
        } catch (e) {
          throw rt(e)
        }
      }
    }

    function lt(e) {
      return lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, lt(e)
    }

    function pt(e) {
      var t = e.subset,
        a = e.matrix;
      return function (e, n, i) {
        try {
          if (Array.isArray(e)) return a(e).subset(n, i).valueOf();
          if (e && "function" == typeof e.subset) return e.subset(n, i);
          if ("string" == typeof e) return t(e, n, i);
          if ("object" === lt(e)) {
            if (!n.isObjectProperty()) throw TypeError("Cannot apply a numeric index as object property");
            return Ae(e, n.getObjectProperty(), i), e
          }
          throw new TypeError("Cannot apply index: unsupported type of object")
        } catch (e) {
          throw rt(e)
        }
      }
    }

    function mt(e, t) {
      var a = e;
      "keep" !== t && (a = e.getContent());
      for (var n = a.getIdentifier(), r = 0; r < Wl.length; r++)
        if (n in Wl[r]) return r;
      return null
    }

    function ct(e, t) {
      var a = e;
      "keep" !== t && (a = e.getContent());
      var n = a.getIdentifier(),
        i = mt(a, t);
      if (null === i) return null;
      var r = Wl[i][n];
      if (r.hasOwnProperty("associativity")) {
        if ("left" === r.associativity) return "left";
        if ("right" === r.associativity) return "right";
        throw Error("'" + n + "' has the invalid associativity '" + r.associativity + "'.")
      }
      return null
    }

    function dt(e, t, n) {
      var r = "keep" === n ? e : e.getContent(),
        a = "keep" === n ? t : e.getContent(),
        s = r.getIdentifier(),
        o = a.getIdentifier(),
        l = mt(r, n);
      if (null === l) return null;
      var p = Wl[l][s];
      if (p.hasOwnProperty("associativeWith") && p.associativeWith instanceof Array) {
        for (var m = 0; m < p.associativeWith.length; m++)
          if (p.associativeWith[m] === o) return !0;
        return !1
      }
      return null
    }

    function ut(e) {
      return Kl()(e, {
        preserveFormatting: !0
      })
    }

    function gt(e, t) {
      return t = "undefined" != typeof t && t, t ? np.hasOwnProperty(e) ? np[e] : "\\mathrm{" + ut(e) + "}" : ep.hasOwnProperty(e) ? ep[e] : ut(e)
    }

    function yt(e) {
      return ht(e) || ft(e) || xt()
    }

    function xt() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }

    function ft(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }

    function ht(e) {
      if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a
      }
    }

    function bt(e) {
      return bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, bt(e)
    }

    function vt(e) {
      return vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, vt(e)
    }

    function Nt() {
      return Nt = Object.assign || function (e) {
        for (var t = 1, a; t < arguments.length; t++)
          for (var n in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        return e
      }, Nt.apply(this, arguments)
    }

    function Mt() {
      return Mt = Object.assign || function (e) {
        for (var t = 1, a; t < arguments.length; t++)
          for (var n in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        return e
      }, Mt.apply(this, arguments)
    }

    function St(e, a, i, s) {
      for (var o = e._values, l = e._index, p = e._ptr, c = e._size, d = e._datatype, u = c[0], m = c[1], n = s && e._values ? [] : null, g = [], y = [], x = 0, f = 0; f < m; f++) {
        y[f] = x;
        for (var h = i ? i[f] : f, b = p[h], v = p[h + 1], N = b, M; N < v; N++) M = a ? a[l[N]] : l[N], g[x] = M, n && (n[x] = o[N]), x++
      }
      return y[m] = x, e.createSparseMatrix({
        values: n,
        index: g,
        ptr: y,
        size: [u, m],
        datatype: d
      })
    }

    function At(e, t, a, n, r, s, o) {
      var l = 0;
      for (a[o] = e; 0 <= l;) {
        var m = a[o + l],
          p = a[n + m]; - 1 === p ? (l--, s[t++] = m) : (a[n + m] = a[r + p], ++l, a[o + l] = p)
      }
      return t
    }

    function Ot(e, t) {
      if (!e) return null;
      var a = 0,
        n = [],
        i = [],
        r = 0,
        s = t,
        o;
      for (o = 0; o < t; o++) i[r + o] = -1;
      for (o = t - 1; 0 <= o; o--) - 1 !== e[o] && (i[s + o] = i[r + e[o]], i[r + e[o]] = o);
      for (o = 0; o < t; o++) - 1 === e[o] && (a = At(o, a, i, r, s, n, 2 * t));
      return n
    }

    function _t(e, t) {
      if (!e) return null;
      var a = e._index,
        s = e._ptr,
        o = e._size,
        l = o[0],
        m = o[1],
        n = [],
        c = [],
        d = 0,
        u = m,
        g, y;
      if (t)
        for (g = 0; g < l; g++) c[u + g] = -1;
      for (var x = 0; x < m; x++) {
        n[x] = -1, c[d + x] = -1;
        for (var f = s[x], h = s[x + 1], b = f, v; b < h; b++) {
          for (v = a[b], g = t ? c[u + v] : v; - 1 !== g && g < x; g = y) y = c[d + g], c[d + g] = x, -1 === y && (n[g] = x);
          t && (c[u + v] = x)
        }
      }
      return n
    }

    function Ct(e, t, a) {
      for (var i = e._values, r = e._index, s = e._ptr, o = e._size, l = o[1], n = 0, m = 0, c; m < l; m++)
        for (c = s[m], s[m] = n; c < s[m + 1]; c++) t(r[c], m, i ? i[c] : 1, a) && (r[n] = r[c], i && (i[n] = i[c]), n++);
      return s[l] = n, r.splice(n, r.length - n), i && i.splice(n, i.length - n), n
    }

    function Et(e) {
      return -e - 2
    }

    function wt(e, t, a, n, i, r, o) {
      var l = 0,
        p, m, c, d;
      if (e <= t || a[n + t] <= a[i + e]) return -1;
      if (a[i + e] = a[n + t], c = a[r + e], a[r + e] = t, -1 === c) l = 1, d = e;
      else {
        for (l = 2, d = c; d !== a[o + d]; d = a[o + d]);
        for (p = c; p !== d; p = m) m = a[o + p], a[o + p] = d
      }
      return {
        jleaf: l,
        q: d
      }
    }

    function kt(e, t) {
      return 0 > e[t]
    }

    function Tt(e, t) {
      e[t] = Et(e[t])
    }

    function It(e) {
      return 0 > e ? Et(e) : e
    }

    function qt(e, t, a, r, s) {
      var o = t._index,
        l = t._ptr,
        m = t._size,
        c = m[1],
        n = 0,
        d, u, g;
      for (r[0] = e; 0 <= n;) {
        e = r[n];
        var y = s ? s[e] : e;
        kt(l, e) || (Tt(l, e), r[c + n] = 0 > y ? 0 : It(l[y]));
        var x = 1;
        for (u = r[c + n], g = 0 > y ? 0 : It(l[y + 1]); u < g; u++)
          if (d = o[u], !kt(l, d)) {
            r[c + n] = u, r[++n] = d, x = 0;
            break
          } x && (n--, r[--a] = e)
      }
      return a
    }

    function Bt(e, t, a, r, s) {
      var o = e._ptr,
        l = e._size,
        m = t._index,
        c = t._ptr,
        d = l[1],
        n = d,
        u, g, y;
      for (g = c[a], y = c[a + 1], u = g; u < y; u++) {
        var x = m[u];
        kt(o, x) || (n = qt(x, e, n, r, s))
      }
      for (u = n; u < d; u++) Tt(o, r[u]);
      return n
    }

    function zt(e, t) {
      var a = t.length,
        n = [],
        i;
      if (e)
        for (i = 0; i < a; i++) n[e[i]] = t[i];
      else
        for (i = 0; i < a; i++) n[i] = t[i];
      return n
    }

    function jt(e, t) {
      var a;
      return t < e ? 1 : t === e ? t : (a = t + e >> 1, jt(e, a) * jt(a + 1, t))
    }

    function Dt(e, t) {
      var a, n;
      if (!Object(Kt.i)(e) || 0 > e) throw new TypeError("Positive integer value expected in function combinations");
      if (!Object(Kt.i)(t) || 0 > t) throw new TypeError("Positive integer value expected in function combinations");
      if (t > e) throw new TypeError("k must be less than or equal to n");
      return (n = e - t, t < n) ? (a = jt(n + 1, e), a / jt(1, t)) : (a = jt(t + 1, e), a / jt(1, n))
    }

    function Pt(e) {
      return e.isInteger() && e.gte(0)
    }

    function Rt(e) {
      var a, r;
      if (Object(Kt.i)(e)) return 0 >= e ? isFinite(e) ? 1 / 0 : NaN : 171 < e ? 1 / 0 : jt(1, e - 1);
      if (.5 > e) return Math.PI / (Math.sin(Math.PI * e) * Rt(1 - e));
      if (171.35 <= e) return 1 / 0;
      if (85 < e) {
        var s = e * e,
          o = s * e,
          l = o * e,
          p = l * e;
        return Math.sqrt(2 * Math.PI / e) * Math.pow(e / Math.E, e) * (1 + 1 / (12 * e) + 1 / (288 * s) - 139 / (51840 * o) - 571 / (2488320 * l) + 163879 / (209018880 * p) + 5246819 / (75246796800 * p * e))
      }--e, r = Om[0];
      for (var m = 1; m < Om.length; ++m) r += Om[m] / (e + m);
      return a = e + Am + .5, Math.sqrt(2 * Math.PI) * Math.pow(a, e + .5) * Math.exp(-a) * r
    }

    function Ut(e) {
      return e.isInteger() && e.gte(0)
    }

    function Lt(e) {
      function t() {
        return a()
      }
      var a;
      return function (e) {
        a = null === e ? Pm : Dm()(e + "")
      }(e), t
    }

    function Ft(e, t) {
      var a = [];
      if (e = e.slice(0), 1 < e.length)
        for (var n = 0, r = e.shift(); n < r; n++) a.push(Ft(e, t));
      else
        for (var s = 0, o = e.shift(); s < o; s++) a.push(t());
      return a
    }

    function Ht(e) {
      return Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, Ht(e)
    }

    function Gt(e, t, a) {
      return Object(ea.a)(e, t, a, {
        recreateOnConfigChange: !0
      })
    }

    function $t(e, t, a) {
      return Object(ea.a)(e, ["config", "Unit", "BigNumber"], function (e) {
        var n = e.config,
          i = e.Unit,
          r = e.BigNumber,
          s = "BigNumber" === n.number ? new r(t) : parseFloat(t),
          o = new i(s, a);
        return o.fixPrefix = !0, o
      })
    }

    function Zt(e, t) {
      return Object(ea.a)(e, ["config", "BigNumber"], function (e) {
        var a = e.config,
          n = e.BigNumber;
        return "BigNumber" === a.number ? new n(t) : t
      })
    }

    function Vt(e, t, a) {
      var n = e.filter(function (e) {
        return Object(Yt.J)(e) && !(e.name in t) && !(e.name in a)
      })[0];
      if (!n) throw new Error("No undefined variable found in inline expression \"" + e + "\"");
      var i = n.name,
        r = Object.create(a),
        s = e.compile();
      return function (e) {
        return r[i] = e, s.evaluate(r)
      }
    }

    function Wt(e, t) {
      var a = ye(t);
      return Object(ya.c)(e, function (e, n, i) {
        return 1 === a ? t(e) : 2 === a ? t(e, [n + 1]) : t(e, [n + 1], i)
      })
    }

    function Jt(e, t, a) {
      function n(e, r) {
        return Array.isArray(e) ? Object(ya.m)(e, function (e, t) {
          return n(e, r.concat(t + 1))
        }) : 1 === i ? t(e) : 2 === i ? t(e, r) : t(e, r, a)
      }
      var i = ye(t);
      return n(e, [])
    }
    a.r(t);
    var Yt = a(1),
      Xt = a(14),
      Qt = a.n(Xt),
      Kt = a(3),
      ea = a(0),
      ta = function () {
        return ta = Qt.a.create, Qt.a
      },
      aa = Object(ea.a)("typed", ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], function (e) {
        var t = e.BigNumber,
          a = e.Complex,
          o = e.DenseMatrix,
          l = e.Fraction,
          p = ta();
        return p.types = [{
          name: "number",
          test: Yt.y
        }, {
          name: "Complex",
          test: Yt.j
        }, {
          name: "BigNumber",
          test: Yt.e
        }, {
          name: "Fraction",
          test: Yt.o
        }, {
          name: "Unit",
          test: Yt.L
        }, {
          name: "string",
          test: Yt.I
        }, {
          name: "Chain",
          test: Yt.h
        }, {
          name: "Array",
          test: Yt.b
        }, {
          name: "Matrix",
          test: Yt.v
        }, {
          name: "DenseMatrix",
          test: Yt.n
        }, {
          name: "SparseMatrix",
          test: Yt.H
        }, {
          name: "Range",
          test: Yt.D
        }, {
          name: "Index",
          test: Yt.t
        }, {
          name: "boolean",
          test: Yt.g
        }, {
          name: "ResultSet",
          test: Yt.G
        }, {
          name: "Help",
          test: Yt.s
        }, {
          name: "function",
          test: Yt.p
        }, {
          name: "Date",
          test: Yt.m
        }, {
          name: "RegExp",
          test: Yt.F
        }, {
          name: "null",
          test: Yt.x
        }, {
          name: "undefined",
          test: Yt.K
        }, {
          name: "AccessorNode",
          test: Yt.a
        }, {
          name: "ArrayNode",
          test: Yt.c
        }, {
          name: "AssignmentNode",
          test: Yt.d
        }, {
          name: "BlockNode",
          test: Yt.f
        }, {
          name: "ConditionalNode",
          test: Yt.k
        }, {
          name: "ConstantNode",
          test: Yt.l
        }, {
          name: "FunctionNode",
          test: Yt.r
        }, {
          name: "FunctionAssignmentNode",
          test: Yt.q
        }, {
          name: "IndexNode",
          test: Yt.u
        }, {
          name: "Node",
          test: Yt.w
        }, {
          name: "ObjectNode",
          test: Yt.A
        }, {
          name: "OperatorNode",
          test: Yt.B
        }, {
          name: "ParenthesisNode",
          test: Yt.C
        }, {
          name: "RangeNode",
          test: Yt.E
        }, {
          name: "SymbolNode",
          test: Yt.J
        }, {
          name: "Object",
          test: Yt.z
        }], p.conversions = [{
          from: "number",
          to: "BigNumber",
          convert: function (e) {
            if (t || n(e), 15 < Object(Kt.f)(e)) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + e + "). Use function bignumber(x) to convert to BigNumber.");
            return new t(e)
          }
        }, {
          from: "number",
          to: "Complex",
          convert: function (e) {
            return a || i(e), new a(e, 0)
          }
        }, {
          from: "number",
          to: "string",
          convert: function (e) {
            return e + ""
          }
        }, {
          from: "BigNumber",
          to: "Complex",
          convert: function (e) {
            return a || i(e), new a(e.toNumber(), 0)
          }
        }, {
          from: "Fraction",
          to: "BigNumber",
          convert: function () {
            throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")
          }
        }, {
          from: "Fraction",
          to: "Complex",
          convert: function (e) {
            return a || i(e), new a(e.valueOf(), 0)
          }
        }, {
          from: "number",
          to: "Fraction",
          convert: function (e) {
            l || s(e);
            var t = new l(e);
            if (t.valueOf() !== e) throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + e + "). Use function fraction(x) to convert to Fraction.");
            return t
          }
        }, {
          from: "string",
          to: "number",
          convert: function (e) {
            var t = +e;
            if (isNaN(t)) throw new Error("Cannot convert \"" + e + "\" to a number");
            return t
          }
        }, {
          from: "string",
          to: "BigNumber",
          convert: function (e) {
            t || n(e);
            try {
              return new t(e)
            } catch (t) {
              throw new Error("Cannot convert \"" + e + "\" to BigNumber")
            }
          }
        }, {
          from: "string",
          to: "Fraction",
          convert: function (e) {
            l || s(e);
            try {
              return new l(e)
            } catch (t) {
              throw new Error("Cannot convert \"" + e + "\" to Fraction")
            }
          }
        }, {
          from: "string",
          to: "Complex",
          convert: function (e) {
            a || i(e);
            try {
              return new a(e)
            } catch (t) {
              throw new Error("Cannot convert \"" + e + "\" to Complex")
            }
          }
        }, {
          from: "boolean",
          to: "number",
          convert: function (e) {
            return +e
          }
        }, {
          from: "boolean",
          to: "BigNumber",
          convert: function (e) {
            return t || n(e), new t(+e)
          }
        }, {
          from: "boolean",
          to: "Fraction",
          convert: function (e) {
            return l || s(e), new l(+e)
          }
        }, {
          from: "boolean",
          to: "string",
          convert: function (e) {
            return e + ""
          }
        }, {
          from: "Array",
          to: "Matrix",
          convert: function (e) {
            return o || r(), new o(e)
          }
        }, {
          from: "Matrix",
          to: "Array",
          convert: function (e) {
            return e.valueOf()
          }
        }], p
      }),
      na = Object(ea.a)("ResultSet", [], function () {
        function e(t) {
          if (!(this instanceof e)) throw new SyntaxError("Constructor must be called with the new operator");
          this.entries = t || []
        }
        return e.prototype.type = "ResultSet", e.prototype.isResultSet = !0, e.prototype.valueOf = function () {
          return this.entries
        }, e.prototype.toString = function () {
          return "[" + this.entries.join(", ") + "]"
        }, e.prototype.toJSON = function () {
          return {
            mathjs: "ResultSet",
            entries: this.entries
          }
        }, e.fromJSON = function (t) {
          return new e(t.entries)
        }, e
      }, {
        isClass: !0
      }),
      ia = a(16),
      ra = a.n(ia),
      sa = Object(ea.a)("BigNumber", ["?on", "config"], function (e) {
        var t = e.on,
          a = e.config,
          n = ra.a.clone({
            precision: a.precision
          });
        return n.prototype.type = "BigNumber", n.prototype.isBigNumber = !0, n.prototype.toJSON = function () {
          return {
            mathjs: "BigNumber",
            value: this.toString()
          }
        }, n.fromJSON = function (e) {
          return new n(e.value)
        }, t && t("config", function (e, t) {
          e.precision !== t.precision && n.config({
            precision: e.precision
          })
        }), n
      }, {
        isClass: !0
      }),
      oa = a(9),
      la = a.n(oa),
      pa = Object(ea.a)("Complex", [], function () {
        return la.a.prototype.type = "Complex", la.a.prototype.isComplex = !0, la.a.prototype.toJSON = function () {
          return {
            mathjs: "Complex",
            re: this.re,
            im: this.im
          }
        }, la.a.prototype.toPolar = function () {
          return {
            r: this.abs(),
            phi: this.arg()
          }
        }, la.a.prototype.format = function (e) {
          var t = "",
            a = this.im,
            n = this.re,
            i = Object(Kt.h)(this.re, e),
            r = Object(Kt.h)(this.im, e),
            s = Object(Yt.y)(e) ? e : e ? e.precision : null;
          if (null !== s) {
            var o = Math.pow(10, -s);
            Math.abs(n / a) < o && (n = 0), Math.abs(a / n) < o && (a = 0)
          }
          return t = 0 === a ? i : 0 === n ? 1 === a ? "i" : -1 === a ? "-i" : r + "i" : 0 > a ? -1 === a ? i + " - i" : i + " - " + r.substring(1) + "i" : 1 === a ? i + " + i" : i + " + " + r + "i", t
        }, la.a.fromPolar = function () {
          switch (arguments.length) {
            case 1:
              var e = arguments[0];
              if ("object" === o(e)) return la()(e);
              throw new TypeError("Input has to be an object with r and phi keys.");
            case 2:
              var t = arguments[0],
                a = arguments[1];
              if (Object(Yt.y)(t)) {
                if (Object(Yt.L)(a) && a.hasBase("ANGLE") && (a = a.toNumber("rad")), Object(Yt.y)(a)) return new la.a({
                  r: t,
                  phi: a
                });
                throw new TypeError("Phi is not a number nor an angle unit.")
              } else throw new TypeError("Radius r is not a number.");
            default:
              throw new SyntaxError("Wrong number of arguments in function fromPolar");
          }
        }, la.a.prototype.valueOf = la.a.prototype.toString, la.a.fromJSON = function (e) {
          return new la.a(e)
        }, la.a.compare = function (e, t) {
          return e.re > t.re ? 1 : e.re < t.re ? -1 : e.im > t.im ? 1 : e.im < t.im ? -1 : 0
        }, la.a
      }, {
        isClass: !0
      }),
      ma = a(11),
      ca = a.n(ma),
      da = Object(ea.a)("Fraction", [], function () {
        return ca.a.prototype.type = "Fraction", ca.a.prototype.isFraction = !0, ca.a.prototype.toJSON = function () {
          return {
            mathjs: "Fraction",
            n: this.s * this.n,
            d: this.d
          }
        }, ca.a.fromJSON = function (e) {
          return new ca.a(e)
        }, ca.a
      }, {
        isClass: !0
      }),
      ua = Object(ea.a)("Range", [], function () {
        function e(t, a, n) {
          if (!(this instanceof e)) throw new SyntaxError("Constructor must be called with the new operator");
          var i = null !== t && void 0 !== t,
            r = null !== a && void 0 !== a,
            s = null !== n && void 0 !== n;
          if (i)
            if (Object(Yt.e)(t)) t = t.toNumber();
            else if ("number" != typeof t) throw new TypeError("Parameter start must be a number");
          if (r)
            if (Object(Yt.e)(a)) a = a.toNumber();
            else if ("number" != typeof a) throw new TypeError("Parameter end must be a number");
          if (s)
            if (Object(Yt.e)(n)) n = n.toNumber();
            else if ("number" != typeof n) throw new TypeError("Parameter step must be a number");
          this.start = i ? parseFloat(t) : 0, this.end = r ? parseFloat(a) : 0, this.step = s ? parseFloat(n) : 1
        }
        return e.prototype.type = "Range", e.prototype.isRange = !0, e.parse = function (t) {
          if ("string" != typeof t) return null;
          var a = t.split(":"),
            n = a.map(function (e) {
              return parseFloat(e)
            }),
            i = n.some(function (e) {
              return isNaN(e)
            });
          if (i) return null;
          switch (n.length) {
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[2], n[1]);
            default:
              return null;
          }
        }, e.prototype.clone = function () {
          return new e(this.start, this.end, this.step)
        }, e.prototype.size = function () {
          var e = 0,
            t = this.start,
            a = this.step,
            n = this.end,
            i = n - t;
          return Object(Kt.n)(a) === Object(Kt.n)(i) ? e = Math.ceil(i / a) : 0 === i && (e = 0), isNaN(e) && (e = 0), [e]
        }, e.prototype.min = function () {
          var e = this.size()[0];
          return 0 < e ? 0 < this.step ? this.start : this.start + (e - 1) * this.step : void 0
        }, e.prototype.max = function () {
          var e = this.size()[0];
          return 0 < e ? 0 < this.step ? this.start + (e - 1) * this.step : this.start : void 0
        }, e.prototype.forEach = function (e) {
          var t = this.start,
            a = this.step,
            n = this.end,
            r = 0;
          if (0 < a)
            for (; t < n;) e(t, [r], this), t += a, r++;
          else if (0 > a)
            for (; t > n;) e(t, [r], this), t += a, r++
        }, e.prototype.map = function (e) {
          var t = [];
          return this.forEach(function (a, n, i) {
            t[n[0]] = e(a, n, i)
          }), t
        }, e.prototype.toArray = function () {
          var e = [];
          return this.forEach(function (t, a) {
            e[a[0]] = t
          }), e
        }, e.prototype.valueOf = function () {
          return this.toArray()
        }, e.prototype.format = function (e) {
          var t = Object(Kt.h)(this.start, e);
          return 1 !== this.step && (t += ":" + Object(Kt.h)(this.step, e)), t += ":" + Object(Kt.h)(this.end, e), t
        }, e.prototype.toString = function () {
          return this.format()
        }, e.prototype.toJSON = function () {
          return {
            mathjs: "Range",
            start: this.start,
            end: this.end,
            step: this.step
          }
        }, e.fromJSON = function (t) {
          return new e(t.start, t.end, t.step)
        }, e
      }, {
        isClass: !0
      }),
      ga = Object(ea.a)("Matrix", [], function () {
        function e() {
          if (!(this instanceof e)) throw new SyntaxError("Constructor must be called with the new operator")
        }
        return e.prototype.type = "Matrix", e.prototype.isMatrix = !0, e.storage = function () {
          throw new Error("Matrix.storage is deprecated since v6.0.0. Use the factory function math.matrix instead.")
        }, e.prototype.storage = function () {
          throw new Error("Cannot invoke storage on a Matrix interface")
        }, e.prototype.datatype = function () {
          throw new Error("Cannot invoke datatype on a Matrix interface")
        }, e.prototype.create = function () {
          throw new Error("Cannot invoke create on a Matrix interface")
        }, e.prototype.subset = function () {
          throw new Error("Cannot invoke subset on a Matrix interface")
        }, e.prototype.get = function () {
          throw new Error("Cannot invoke get on a Matrix interface")
        }, e.prototype.set = function () {
          throw new Error("Cannot invoke set on a Matrix interface")
        }, e.prototype.resize = function () {
          throw new Error("Cannot invoke resize on a Matrix interface")
        }, e.prototype.reshape = function () {
          throw new Error("Cannot invoke reshape on a Matrix interface")
        }, e.prototype.clone = function () {
          throw new Error("Cannot invoke clone on a Matrix interface")
        }, e.prototype.size = function () {
          throw new Error("Cannot invoke size on a Matrix interface")
        }, e.prototype.map = function () {
          throw new Error("Cannot invoke map on a Matrix interface")
        }, e.prototype.forEach = function () {
          throw new Error("Cannot invoke forEach on a Matrix interface")
        }, e.prototype.toArray = function () {
          throw new Error("Cannot invoke toArray on a Matrix interface")
        }, e.prototype.valueOf = function () {
          throw new Error("Cannot invoke valueOf on a Matrix interface")
        }, e.prototype.format = function () {
          throw new Error("Cannot invoke format on a Matrix interface")
        }, e.prototype.toString = function () {
          throw new Error("Cannot invoke toString on a Matrix interface")
        }, e
      }, {
        isClass: !0
      }),
      ya = a(2),
      xa = a(5),
      fa = a(4),
      ha = a(6),
      ba = Object(ea.a)("DenseMatrix", ["Matrix"], function (e) {
        function t(e, a) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (a && !Object(Yt.I)(a)) throw new Error("Invalid datatype: " + a);
          if (Object(Yt.v)(e)) "DenseMatrix" === e.type ? (this._data = Object(fa.a)(e._data), this._size = Object(fa.a)(e._size), this._datatype = a || e._datatype) : (this._data = e.toArray(), this._size = e.size(), this._datatype = a || e._datatype);
          else if (e && Object(Yt.b)(e.data) && Object(Yt.b)(e.size)) this._data = e.data, this._size = e.size, this._datatype = a || e.datatype;
          else if (Object(Yt.b)(e)) this._data = l(e), this._size = Object(ya.a)(this._data), Object(ya.r)(this._data, this._size), this._datatype = a;
          else if (e) throw new TypeError("Unsupported type of data (" + Object(Yt.M)(e) + ")");
          else this._data = [], this._size = [0], this._datatype = a
        }

        function a(e, a) {
          if (!Object(Yt.t)(a)) throw new TypeError("Invalid index");
          var r = a.isScalar();
          if (r) return e.get(a.min());
          var s = a.size();
          if (s.length !== e._size.length) throw new ha.a(s.length, e._size.length);
          for (var o = a.min(), l = a.max(), p = 0, m = e._size.length; p < m; p++) Object(ya.s)(o[p], e._size[p]), Object(ya.s)(l[p], e._size[p]);
          return new t(n(e._data, a, s.length, 0), e._datatype)
        }

        function n(e, t, a, r) {
          var s = t.dimension(r);
          return r === a - 1 ? s.map(function (t) {
            return Object(ya.s)(t, e.length), e[t]
          }).valueOf() : s.map(function (s) {
            Object(ya.s)(s, e.length);
            var i = e[s];
            return n(i, t, a, r + 1)
          }).valueOf()
        }

        function i(e, t, a, n) {
          if (!t || !0 !== t.isIndex) throw new TypeError("Invalid index");
          var s = t.size(),
            l = t.isScalar(),
            p;
          if (Object(Yt.v)(a) ? (p = a.size(), a = a.valueOf()) : p = Object(ya.a)(a), l) {
            if (0 !== p.length) throw new TypeError("Scalar expected");
            e.set(t.min(), a, n)
          } else {
            if (s.length < e._size.length) throw new ha.a(s.length, e._size.length, "<");
            if (p.length < s.length) {
              for (var m = 0, c = 0; 1 === s[m] && 1 === p[m];) m++;
              for (; 1 === s[m];) c++, m++;
              a = Object(ya.q)(a, s.length, c, p)
            }
            if (!Object(fa.d)(s, p)) throw new ha.a(s, p, ">");
            var d = t.max().map(function (e) {
              return e + 1
            });
            o(e, d, n);
            var u = s.length;
            r(e._data, t, a, u, 0)
          }
          return e
        }

        function r(e, t, a, n, i) {
          var s = t.dimension(i);
          i === n - 1 ? s.forEach(function (t, n) {
            Object(ya.s)(t), e[t] = a[n[0]]
          }) : s.forEach(function (s, o) {
            Object(ya.s)(s), r(e[s], t, a[o[0]], n, i + 1)
          })
        }

        function s(e, t, a) {
          if (0 === t.length) {
            for (var n = e._data; Object(Yt.b)(n);) n = n[0];
            return n
          }
          return e._size = t.slice(0), e._data = Object(ya.o)(e._data, e._size, a), e
        }

        function o(e, t, a) {
          for (var n = e._size.slice(0), r = !1; n.length < t.length;) n.push(0), r = !0;
          for (var o = 0, l = t.length; o < l; o++) t[o] > n[o] && (n[o] = t[o], r = !0);
          r && s(e, n, a)
        }

        function l(e) {
          for (var t = 0, a = e.length, n; t < a; t++) n = e[t], Object(Yt.b)(n) ? e[t] = l(n) : n && !0 === n.isMatrix && (e[t] = l(n.valueOf()));
          return e
        }
        var p = e.Matrix;
        return t.prototype = new p, t.prototype.createDenseMatrix = function (e, a) {
          return new t(e, a)
        }, t.prototype.type = "DenseMatrix", t.prototype.isDenseMatrix = !0, t.prototype.getDataType = function () {
          return Object(ya.h)(this._data, Yt.M)
        }, t.prototype.storage = function () {
          return "dense"
        }, t.prototype.datatype = function () {
          return this._datatype
        }, t.prototype.create = function (e, a) {
          return new t(e, a)
        }, t.prototype.subset = function (e, t, n) {
          switch (arguments.length) {
            case 1:
              return a(this, e);
            case 2:
            case 3:
              return i(this, e, t, n);
            default:
              throw new SyntaxError("Wrong number of arguments");
          }
        }, t.prototype.get = function (e) {
          if (!Object(Yt.b)(e)) throw new TypeError("Array expected");
          if (e.length !== this._size.length) throw new ha.a(e.length, this._size.length);
          for (var t = 0; t < e.length; t++) Object(ya.s)(e[t], this._size[t]);
          for (var a = this._data, n = 0, r = e.length, s; n < r; n++) s = e[n], Object(ya.s)(s, a.length), a = a[s];
          return a
        }, t.prototype.set = function (e, t, a) {
          if (!Object(Yt.b)(e)) throw new TypeError("Array expected");
          if (e.length < this._size.length) throw new ha.a(e.length, this._size.length, "<");
          var n = e.map(function (e) {
              return e + 1
            }),
            r, s, l;
          o(this, n, a);
          var p = this._data;
          for (r = 0, s = e.length - 1; r < s; r++) l = e[r], Object(ya.s)(l, p.length), p = p[l];
          return l = e[e.length - 1], Object(ya.s)(l, p.length), p[l] = t, this
        }, t.prototype.resize = function (e, t, a) {
          if (!Object(Yt.b)(e)) throw new TypeError("Array expected");
          var n = a ? this.clone() : this;
          return s(n, e, t)
        }, t.prototype.reshape = function (e, t) {
          var a = t ? this.clone() : this;
          return a._data = Object(ya.n)(a._data, e), a._size = e.slice(0), a
        }, t.prototype.clone = function () {
          var e = new t({
            data: Object(fa.a)(this._data),
            size: Object(fa.a)(this._size),
            datatype: this._datatype
          });
          return e
        }, t.prototype.size = function () {
          return this._size.slice(0)
        }, t.prototype.map = function (e) {
          var a = this;
          return new t({
            data: function t(n, r) {
              return Object(Yt.b)(n) ? n.map(function (e, a) {
                return t(e, r.concat(a))
              }) : e(n, r, a)
            }(this._data, []),
            size: Object(fa.a)(this._size),
            datatype: this._datatype
          })
        }, t.prototype.forEach = function (e) {
          var t = this;
          (function a(n, r) {
            Object(Yt.b)(n) ? n.forEach(function (e, t) {
              a(e, r.concat(t))
            }) : e(n, r, t)
          })(this._data, [])
        }, t.prototype.toArray = function () {
          return Object(fa.a)(this._data)
        }, t.prototype.valueOf = function () {
          return this._data
        }, t.prototype.format = function (e) {
          return Object(xa.d)(this._data, e)
        }, t.prototype.toString = function () {
          return Object(xa.d)(this._data)
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "DenseMatrix",
            data: this._data,
            size: this._size,
            datatype: this._datatype
          }
        }, t.prototype.diagonal = function (e) {
          if (!e) e = 0;
          else if (Object(Yt.e)(e) && (e = e.toNumber()), !Object(Yt.y)(e) || !Object(Kt.i)(e)) throw new TypeError("The parameter k must be an integer number");
          for (var a = 0 < e ? e : 0, r = 0 > e ? -e : 0, s = this._size[0], o = this._size[1], l = Math.min(s - r, o - a), n = [], p = 0; p < l; p++) n[p] = this._data[p + r][p + a];
          return new t({
            data: n,
            size: [l],
            datatype: this._datatype
          })
        }, t.diagonal = function (e, a, i, r) {
          if (!Object(Yt.b)(e)) throw new TypeError("Array expected, size parameter");
          if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
          if (e = e.map(function (e) {
              if (Object(Yt.e)(e) && (e = e.toNumber()), !Object(Yt.y)(e) || !Object(Kt.i)(e) || 1 > e) throw new Error("Size values must be positive integers");
              return e
            }), !i) i = 0;
          else if (Object(Yt.e)(i) && (i = i.toNumber()), !Object(Yt.y)(i) || !Object(Kt.i)(i)) throw new TypeError("The parameter k must be an integer number");
          var s = 0 < i ? i : 0,
            o = 0 > i ? -i : 0,
            l = e[0],
            p = e[1],
            m = Math.min(l - o, p - s),
            n;
          if (Object(Yt.b)(a)) {
            if (a.length !== m) throw new Error("Invalid value array length");
            n = function (e) {
              return a[e]
            }
          } else if (Object(Yt.v)(a)) {
            var c = a.size();
            if (1 !== c.length || c[0] !== m) throw new Error("Invalid matrix length");
            n = function (e) {
              return a.get([e])
            }
          } else n = function () {
            return a
          };
          r || (r = Object(Yt.e)(n(0)) ? n(0).mul(0) : 0);
          var u = [];
          if (0 < e.length) {
            u = Object(ya.o)(u, e, r);
            for (var g = 0; g < m; g++) u[g + o][g + s] = n(g)
          }
          return new t({
            data: u,
            size: [l, p]
          })
        }, t.fromJSON = function (e) {
          return new t(e)
        }, t.prototype.swapRows = function (e, a) {
          if (!Object(Yt.y)(e) || !Object(Kt.i)(e) || !Object(Yt.y)(a) || !Object(Kt.i)(a)) throw new Error("Row index must be positive integers");
          if (2 !== this._size.length) throw new Error("Only two dimensional matrix is supported");
          return Object(ya.s)(e, this._size[0]), Object(ya.s)(a, this._size[0]), t._swapRows(e, a, this._data), this
        }, t._swapRows = function (e, t, a) {
          var n = a[e];
          a[e] = a[t], a[t] = n
        }, t
      }, {
        isClass: !0
      }),
      va = "clone",
      Na = Object(ea.a)(va, ["typed"], function (e) {
        var t = e.typed;
        return t(va, {
          any: fa.a
        })
      }),
      Ma = a(10),
      Sa = "isInteger",
      Aa = Object(ea.a)(Sa, ["typed"], function (e) {
        var t = e.typed,
          a = t(Sa, {
            number: Kt.i,
            BigNumber: function (e) {
              return e.isInt()
            },
            Fraction: function (e) {
              return 1 === e.d && isFinite(e.n)
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      Oa = "number";
    (function (e) {
      return Object(Kt.i)(e)
    }).signature = Oa, y.signature = Oa, x.signature = Oa, f.signature = Oa, h.signature = Oa;
    var _a = Object(ea.a)("isNegative", ["typed"], function (e) {
        var t = e.typed,
          a = t("isNegative", {
            number: y,
            BigNumber: function (e) {
              return e.isNeg() && !e.isZero() && !e.isNaN()
            },
            Fraction: function (e) {
              return 0 > e.s
            },
            Unit: function (e) {
              return a(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      Ca = "isNumeric",
      Ea = Object(ea.a)(Ca, ["typed"], function (e) {
        var t = e.typed,
          a = t(Ca, {
            "number | BigNumber | Fraction | boolean": function () {
              return !0
            },
            "Complex | Unit | string | null | undefined | Node": function () {
              return !1
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      wa = "hasNumericValue",
      ka = Object(ea.a)(wa, ["typed", "isNumeric"], function (e) {
        var t = e.typed,
          a = e.isNumeric;
        return t(wa, {
          string: function (e) {
            return 0 < e.trim().length && !isNaN(+e)
          },
          any: function (e) {
            return a(e)
          }
        })
      }),
      Ta = "isPositive",
      Ia = Object(ea.a)(Ta, ["typed"], function (e) {
        var t = e.typed,
          a = t(Ta, {
            number: x,
            BigNumber: function (e) {
              return !e.isNeg() && !e.isZero() && !e.isNaN()
            },
            Fraction: function (e) {
              return 0 < e.s && 0 < e.n
            },
            Unit: function (e) {
              return a(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      qa = "isZero",
      Ba = Object(ea.a)(qa, ["typed"], function (e) {
        var t = e.typed,
          a = t(qa, {
            number: f,
            BigNumber: function (e) {
              return e.isZero()
            },
            Complex: function (e) {
              return 0 === e.re && 0 === e.im
            },
            Fraction: function (e) {
              return 1 === e.d && 0 === e.n
            },
            Unit: function (e) {
              return a(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      za = "isNaN",
      ja = Object(ea.a)(za, ["typed"], function (e) {
        var t = e.typed;
        return t(za, {
          number: h,
          BigNumber: function (e) {
            return e.isNaN()
          },
          Fraction: function () {
            return !1
          },
          Complex: function (e) {
            return e.isNaN()
          },
          Unit: function (e) {
            return Number.isNaN(e.value)
          },
          "Array | Matrix": function (e) {
            return m(e, Number.isNaN)
          }
        })
      }),
      Da = a(8),
      Pa = "typeOf",
      Ra = Object(ea.a)(Pa, ["typed"], function (e) {
        var t = e.typed;
        return t(Pa, {
          any: Yt.M
        })
      }),
      Ua = Object(ea.a)("typeof", [], function () {
        return function () {
          Object(Da.a)("Function \"typeof\" has been renamed to \"typeOf\" in v6.0.0, please use the new function instead.");
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
          return Yt.M.apply(Yt.M, t)
        }
      }),
      La = "equalScalar",
      Fa = Object(ea.a)(La, ["typed", "config"], function (e) {
        var t = e.typed,
          a = e.config,
          n = t(La, {
            "boolean, boolean": function (e, t) {
              return e === t
            },
            "number, number": function (e, t) {
              return Object(Kt.m)(e, t, a.epsilon)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.eq(t) || b(e, t, a.epsilon)
            },
            "Fraction, Fraction": function (e, t) {
              return e.equals(t)
            },
            "Complex, Complex": function (e, t) {
              return v(e, t, a.epsilon)
            },
            "Unit, Unit": function (e, t) {
              if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
              return n(e.value, t.value)
            }
          });
        return n
      }),
      Ha = Object(ea.a)(La, ["typed", "config"], function (e) {
        var t = e.typed,
          a = e.config;
        return t(La, {
          "number, number": function (e, t) {
            return Object(Kt.m)(e, t, a.epsilon)
          }
        })
      }),
      Ga = Object(ea.a)("SparseMatrix", ["typed", "equalScalar", "Matrix"], function (e) {
        function t(e, i) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (i && !Object(Yt.I)(i)) throw new Error("Invalid datatype: " + i);
          if (Object(Yt.v)(e)) a(this, e, i);
          else if (e && Object(Yt.b)(e.index) && Object(Yt.b)(e.ptr) && Object(Yt.b)(e.size)) this._values = e.values, this._index = e.index, this._ptr = e.ptr, this._size = e.size, this._datatype = i || e.datatype;
          else if (Object(Yt.b)(e)) n(this, e, i);
          else if (e) throw new TypeError("Unsupported type of data (" + Object(Yt.M)(e) + ")");
          else this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = i
        }

        function a(e, t, a) {
          "SparseMatrix" === t.type ? (e._values = t._values ? Object(fa.a)(t._values) : void 0, e._index = Object(fa.a)(t._index), e._ptr = Object(fa.a)(t._ptr), e._size = Object(fa.a)(t._size), e._datatype = a || t._datatype) : n(e, t.valueOf(), a || t._datatype)
        }

        function n(e, t, a) {
          e._values = [], e._index = [], e._ptr = [], e._datatype = a;
          var n = t.length,
            r = 0,
            s = g,
            o = 0;
          if (Object(Yt.I)(a) && (s = u.find(g, [a, a]) || g, o = u.convert(0, a)), 0 < n) {
            var l = 0;
            do {
              e._ptr.push(e._index.length);
              for (var p = 0, m; p < n; p++)
                if (m = t[p], !Object(Yt.b)(m)) 0 == l && 1 > r && (r = 1), s(m, o) || (e._values.push(m), e._index.push(p));
                else if (0 == l && r < m.length && (r = m.length), l < m.length) {
                var c = m[l];
                s(c, o) || (e._values.push(c), e._index.push(p))
              }
              l++
            } while (l < r)
          }
          e._ptr.push(e._index.length), e._size = [n, r]
        }

        function i(e, a) {
          if (!Object(Yt.t)(a)) throw new TypeError("Invalid index");
          var n = a.isScalar();
          if (n) return e.get(a.min());
          var r = a.size();
          if (r.length !== e._size.length) throw new ha.a(r.length, e._size.length);
          var s = a.min(),
            o = a.max(),
            l, p, m, c;
          for (l = 0, p = e._size.length; l < p; l++) Object(ya.s)(s[l], e._size[l]), Object(ya.s)(o[l], e._size[l]);
          var d = e._values,
            u = e._index,
            g = e._ptr,
            y = a.dimension(0),
            x = a.dimension(1),
            f = [],
            h = [];
          y.forEach(function (e, t) {
            h[e] = t[0], f[e] = !0
          });
          var b = d ? [] : void 0,
            v = [],
            N = [];
          return x.forEach(function (e) {
            for (N.push(v.length), m = g[e], c = g[e + 1]; m < c; m++) l = u[m], !0 === f[l] && (v.push(h[l]), b && b.push(d[m]))
          }), N.push(v.length), new t({
            values: b,
            index: v,
            ptr: N,
            size: r,
            datatype: e._datatype
          })
        }

        function r(e, t, a, r) {
          if (!t || !0 !== t.isIndex) throw new TypeError("Invalid index");
          var s = t.size(),
            o = t.isScalar(),
            l;
          if (Object(Yt.v)(a) ? (l = a.size(), a = a.toArray()) : l = Object(ya.a)(a), o) {
            if (0 !== l.length) throw new TypeError("Scalar expected");
            e.set(t.min(), a, r)
          } else {
            if (1 !== s.length && 2 !== s.length) throw new ha.a(s.length, e._size.length, "<");
            if (l.length < s.length) {
              for (var p = 0, c = 0; 1 === s[p] && 1 === l[p];) p++;
              for (; 1 === s[p];) c++, p++;
              a = Object(ya.q)(a, s.length, c, l)
            }
            if (!Object(fa.d)(s, l)) throw new ha.a(s, l, ">");
            for (var d = t.min()[0], u = t.min()[1], g = l[0], m = l[1], n = 0; n < g; n++)
              for (var f = 0, h; f < m; f++) h = a[n][f], e.set([n + d, f + u], h, r)
          }
          return e
        }

        function s(e, t, a, n) {
          if (0 == a - t) return a;
          for (var i = t; i < a; i++)
            if (n[i] === e) return i;
          return t
        }

        function o(e, t, a, n, i) {
          a.splice(e, 1), n.splice(e, 1);
          for (var r = t + 1; r < i.length; r++) i[r]--
        }

        function l(e, t, a, n, i, r, s) {
          i.splice(e, 0, n), r.splice(e, 0, t);
          for (var o = a + 1; o < s.length; o++) s[o]++
        }

        function p(e, t, a, s) {
          var o = s || 0,
            l = g,
            m = 0;
          Object(Yt.I)(e._datatype) && (l = u.find(g, [e._datatype, e._datatype]) || g, m = u.convert(0, e._datatype), o = u.convert(o, e._datatype));
          var y = !l(o, m),
            x = e._size[0],
            r = e._size[1],
            f, h, b;
          if (a > r) {
            for (h = r; h < a; h++)
              if (e._ptr[h] = e._values.length, y)
                for (f = 0; f < x; f++) e._values.push(o), e._index.push(f);
            e._ptr[a] = e._values.length
          } else a < r && (e._ptr.splice(a + 1, r - a), e._values.splice(e._ptr[a], e._values.length), e._index.splice(e._ptr[a], e._index.length));
          if (r = a, t > x) {
            if (y) {
              var v = 0;
              for (h = 0; h < r; h++) {
                e._ptr[h] += v, b = e._ptr[h + 1] + v;
                var N = 0;
                for (f = x; f < t; f++, N++) e._values.splice(b + N, 0, o), e._index.splice(b + N, 0, f), v++
              }
              e._ptr[r] = e._values.length
            }
          } else if (t < x) {
            var M = 0;
            for (h = 0; h < r; h++) {
              e._ptr[h] -= M;
              var S = e._ptr[h],
                A = e._ptr[h + 1] - M;
              for (b = S; b < A; b++) f = e._index[b], f > t - 1 && (e._values.splice(b, 1), e._index.splice(b, 1), M++)
            }
            e._ptr[h] = e._values.length
          }
          return e._size[0] = t, e._size[1] = a, e
        }

        function m(e, a, n, r, s, o, l) {
          var p = [],
            m = [],
            c = [],
            d = g,
            f = 0;
          Object(Yt.I)(e._datatype) && (d = u.find(g, [e._datatype, e._datatype]) || g, f = u.convert(0, e._datatype));
          for (var h = function (e, t, a) {
              e = o(e, t, a), d(e, f) || (p.push(e), m.push(t))
            }, b = r; b <= s; b++) {
            c.push(p.length);
            var y = e._ptr[b],
              x = e._ptr[b + 1];
            if (l)
              for (var v = y, N; v < x; v++) N = e._index[v], N >= a && N <= n && h(e._values[v], N - a, b - r);
            else {
              for (var M = {}, S = y, A; S < x; S++) A = e._index[S], M[A] = e._values[S];
              for (var O = a, _; O <= n; O++) _ = O in M ? M[O] : 0, h(_, O - a, b - r)
            }
          }
          return c.push(p.length), new t({
            values: p,
            index: m,
            ptr: c,
            size: [n - a + 1, s - r + 1]
          })
        }

        function c(e, t, n, r, s) {
          var o = r[0],
            l = r[1],
            p = [],
            a, m;
          for (a = 0; a < o; a++)
            for (p[a] = [], m = 0; m < l; m++) p[a][m] = 0;
          for (m = 0; m < l; m++)
            for (var c = n[m], d = n[m + 1], u = c; u < d; u++) a = t[u], p[a][m] = e ? s ? Object(fa.a)(e[u]) : e[u] : 1;
          return p
        }
        var u = e.typed,
          g = e.equalScalar,
          y = e.Matrix;
        return t.prototype = new y, t.prototype.createSparseMatrix = function (e, a) {
          return new t(e, a)
        }, t.prototype.type = "SparseMatrix", t.prototype.isSparseMatrix = !0, t.prototype.getDataType = function () {
          return Object(ya.h)(this._values, Yt.M)
        }, t.prototype.storage = function () {
          return "sparse"
        }, t.prototype.datatype = function () {
          return this._datatype
        }, t.prototype.create = function (e, a) {
          return new t(e, a)
        }, t.prototype.density = function () {
          var e = this._size[0],
            t = this._size[1];
          return 0 !== e && 0 !== t ? this._index.length / (e * t) : 0
        }, t.prototype.subset = function (e, t, a) {
          if (!this._values) throw new Error("Cannot invoke subset on a Pattern only matrix");
          switch (arguments.length) {
            case 1:
              return i(this, e);
            case 2:
            case 3:
              return r(this, e, t, a);
            default:
              throw new SyntaxError("Wrong number of arguments");
          }
        }, t.prototype.get = function (e) {
          if (!Object(Yt.b)(e)) throw new TypeError("Array expected");
          if (e.length !== this._size.length) throw new ha.a(e.length, this._size.length);
          if (!this._values) throw new Error("Cannot invoke get on a Pattern only matrix");
          var t = e[0],
            a = e[1];
          Object(ya.s)(t, this._size[0]), Object(ya.s)(a, this._size[1]);
          var n = s(t, this._ptr[a], this._ptr[a + 1], this._index);
          return n < this._ptr[a + 1] && this._index[n] === t ? this._values[n] : 0
        }, t.prototype.set = function (e, t, a) {
          if (!Object(Yt.b)(e)) throw new TypeError("Array expected");
          if (e.length !== this._size.length) throw new ha.a(e.length, this._size.length);
          if (!this._values) throw new Error("Cannot invoke set on a Pattern only matrix");
          var n = e[0],
            i = e[1],
            r = this._size[0],
            m = this._size[1],
            c = g,
            d = 0;
          Object(Yt.I)(this._datatype) && (c = u.find(g, [this._datatype, this._datatype]) || g, d = u.convert(0, this._datatype)), (n > r - 1 || i > m - 1) && (p(this, Math.max(n + 1, r), Math.max(i + 1, m), a), r = this._size[0], m = this._size[1]), Object(ya.s)(n, r), Object(ya.s)(i, m);
          var y = s(n, this._ptr[i], this._ptr[i + 1], this._index);
          return y < this._ptr[i + 1] && this._index[y] === n ? c(t, d) ? o(y, i, this._values, this._index, this._ptr) : this._values[y] = t : l(y, n, i, t, this._values, this._index, this._ptr), this
        }, t.prototype.resize = function (e, t, a) {
          if (!Object(Yt.b)(e)) throw new TypeError("Array expected");
          if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
          e.forEach(function (t) {
            if (!Object(Yt.y)(t) || !Object(Kt.i)(t) || 0 > t) throw new TypeError("Invalid size, must contain positive integers (size: " + Object(xa.d)(e) + ")")
          });
          var n = a ? this.clone() : this;
          return p(n, e[0], e[1], t)
        }, t.prototype.reshape = function (e, t) {
          if (!Object(Yt.b)(e)) throw new TypeError("Array expected");
          if (2 !== e.length) throw new Error("Sparse matrices can only be reshaped in two dimensions");
          if (e.forEach(function (t) {
              if (!Object(Yt.y)(t) || !Object(Kt.i)(t) || 0 > t) throw new TypeError("Invalid size, must contain positive integers (size: " + Object(xa.d)(e) + ")")
            }), this._size[0] * this._size[1] != e[0] * e[1]) throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
          var a = t ? this.clone() : this;
          if (this._size[0] === e[0] && this._size[1] === e[1]) return a;
          for (var n = [], r = 0; r < a._ptr.length; r++)
            for (var o = 0; o < a._ptr[r + 1] - a._ptr[r]; o++) n.push(r);
          for (var p = a._values.slice(), m = a._index.slice(), c = 0; c < a._index.length; c++) {
            var d = m[c],
              u = n[c],
              g = d * a._size[1] + u;
            n[c] = g % e[1], m[c] = Math.floor(g / e[1])
          }
          a._values.length = 0, a._index.length = 0, a._ptr.length = e[1] + 1, a._size = e.slice();
          for (var y = 0; y < a._ptr.length; y++) a._ptr[y] = 0;
          for (var x = 0; x < p.length; x++) {
            var f = m[x],
              b = n[x],
              N = p[x],
              v = s(f, a._ptr[b], a._ptr[b + 1], a._index);
            l(v, f, b, N, a._values, a._index, a._ptr)
          }
          return a
        }, t.prototype.clone = function () {
          var e = new t({
            values: this._values ? Object(fa.a)(this._values) : void 0,
            index: Object(fa.a)(this._index),
            ptr: Object(fa.a)(this._ptr),
            size: Object(fa.a)(this._size),
            datatype: this._datatype
          });
          return e
        }, t.prototype.size = function () {
          return this._size.slice(0)
        }, t.prototype.map = function (e, t) {
          if (!this._values) throw new Error("Cannot invoke map on a Pattern only matrix");
          var a = this,
            n = this._size[0],
            i = this._size[1];
          return m(this, 0, n - 1, 0, i - 1, function (t, n, i) {
            return e(t, [n, i], a)
          }, t)
        }, t.prototype.forEach = function (e, t) {
          if (!this._values) throw new Error("Cannot invoke forEach on a Pattern only matrix");
          for (var a = this, n = this._size[0], r = this._size[1], s = 0; s < r; s++) {
            var o = this._ptr[s],
              l = this._ptr[s + 1];
            if (t)
              for (var p = o, m; p < l; p++) m = this._index[p], e(this._values[p], [m, s], a);
            else {
              for (var c = {}, d = o, u; d < l; d++) u = this._index[d], c[u] = this._values[d];
              for (var g = 0, y; g < n; g++) y = g in c ? c[g] : 0, e(y, [g, s], a)
            }
          }
        }, t.prototype.toArray = function () {
          return c(this._values, this._index, this._ptr, this._size, !0)
        }, t.prototype.valueOf = function () {
          return c(this._values, this._index, this._ptr, this._size, !1)
        }, t.prototype.format = function (e) {
          for (var t = this._size[0], a = this._size[1], n = this.density(), r = "Sparse Matrix [" + Object(xa.d)(t, e) + " x " + Object(xa.d)(a, e) + "] density: " + Object(xa.d)(n, e) + "\n", s = 0; s < a; s++)
            for (var o = this._ptr[s], l = this._ptr[s + 1], p = o, m; p < l; p++) m = this._index[p], r += "\n    (" + Object(xa.d)(m, e) + ", " + Object(xa.d)(s, e) + ") ==> " + (this._values ? Object(xa.d)(this._values[p], e) : "X");
          return r
        }, t.prototype.toString = function () {
          return Object(xa.d)(this.toArray())
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "SparseMatrix",
            values: this._values,
            index: this._index,
            ptr: this._ptr,
            size: this._size,
            datatype: this._datatype
          }
        }, t.prototype.diagonal = function (e) {
          if (!e) e = 0;
          else if (Object(Yt.e)(e) && (e = e.toNumber()), !Object(Yt.y)(e) || !Object(Kt.i)(e)) throw new TypeError("The parameter k must be an integer number");
          var a = 0 < e ? e : 0,
            r = 0 > e ? -e : 0,
            s = this._size[0],
            o = this._size[1],
            l = Math.min(s - r, o - a),
            n = [],
            p = [],
            m = [];
          m[0] = 0;
          for (var c = a; c < o && n.length < l; c++)
            for (var d = this._ptr[c], u = this._ptr[c + 1], g = d, y; g < u; g++)
              if (y = this._index[g], y === c - a + r) {
                n.push(this._values[g]), p[n.length - 1] = y - r;
                break
              } return m.push(n.length), new t({
            values: n,
            index: p,
            ptr: m,
            size: [l, 1]
          })
        }, t.fromJSON = function (e) {
          return new t(e)
        }, t.diagonal = function (e, a, r, s, o) {
          if (!Object(Yt.b)(e)) throw new TypeError("Array expected, size parameter");
          if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
          if (e = e.map(function (e) {
              if (Object(Yt.e)(e) && (e = e.toNumber()), !Object(Yt.y)(e) || !Object(Kt.i)(e) || 1 > e) throw new Error("Size values must be positive integers");
              return e
            }), !r) r = 0;
          else if (Object(Yt.e)(r) && (r = r.toNumber()), !Object(Yt.y)(r) || !Object(Kt.i)(r)) throw new TypeError("The parameter k must be an integer number");
          var l = g,
            p = 0;
          Object(Yt.I)(o) && (l = u.find(g, [o, o]) || g, p = u.convert(0, o));
          var m = 0 < r ? r : 0,
            c = 0 > r ? -r : 0,
            d = e[0],
            y = e[1],
            x = Math.min(d - c, y - m),
            n;
          if (Object(Yt.b)(a)) {
            if (a.length !== x) throw new Error("Invalid value array length");
            n = function (e) {
              return a[e]
            }
          } else if (Object(Yt.v)(a)) {
            var f = a.size();
            if (1 !== f.length || f[0] !== x) throw new Error("Invalid matrix length");
            n = function (e) {
              return a.get([e])
            }
          } else n = function () {
            return a
          };
          for (var h = [], b = [], N = [], M = 0; M < y; M++) {
            N.push(h.length);
            var S = M - m;
            if (0 <= S && S < x) {
              var i = n(S);
              l(i, p) || (b.push(S + c), h.push(i))
            }
          }
          return N.push(h.length), new t({
            values: h,
            index: b,
            ptr: N,
            size: [d, y]
          })
        }, t.prototype.swapRows = function (e, a) {
          if (!Object(Yt.y)(e) || !Object(Kt.i)(e) || !Object(Yt.y)(a) || !Object(Kt.i)(a)) throw new Error("Row index must be positive integers");
          if (2 !== this._size.length) throw new Error("Only two dimensional matrix is supported");
          return Object(ya.s)(e, this._size[0]), Object(ya.s)(a, this._size[0]), t._swapRows(e, a, this._size[1], this._values, this._index, this._ptr), this
        }, t._forEachRow = function (e, t, a, n, i) {
          for (var r = n[e], s = n[e + 1], o = r; o < s; o++) i(a[o], t[o])
        }, t._swapRows = function (e, t, a, n, i, r) {
          for (var o = 0; o < a; o++) {
            var l = r[o],
              p = r[o + 1],
              m = s(e, l, p, i),
              c = s(t, l, p, i);
            if (m < p && c < p && i[m] === e && i[c] === t) {
              if (n) {
                var d = n[m];
                n[m] = n[c], n[c] = d
              }
              continue
            }
            if (m < p && i[m] === e && (c >= p || i[c] !== t)) {
              var u = n ? n[m] : void 0;
              i.splice(c, 0, t), n && n.splice(c, 0, u), i.splice(c <= m ? m + 1 : m, 1), n && n.splice(c <= m ? m + 1 : m, 1);
              continue
            }
            if (c < p && i[c] === t && (m >= p || i[m] !== e)) {
              var g = n ? n[c] : void 0;
              i.splice(m, 0, e), n && n.splice(m, 0, g), i.splice(m <= c ? c + 1 : c, 1), n && n.splice(m <= c ? c + 1 : c, 1)
            }
          }
        }, t
      }, {
        isClass: !0
      }),
      $a = Object(ea.a)("number", ["typed"], function (e) {
        var t = e.typed,
          a = t("number", {
            "": function () {
              return 0
            },
            number: function (e) {
              return e
            },
            string: function (e) {
              if ("NaN" === e) return NaN;
              var t = +e;
              if (isNaN(t)) throw new SyntaxError("String \"" + e + "\" is no valid number");
              return t
            },
            BigNumber: function (e) {
              return e.toNumber()
            },
            Fraction: function (e) {
              return e.valueOf()
            },
            Unit: function () {
              throw new Error("Second argument with valueless unit expected")
            },
            null: function () {
              return 0
            },
            "Unit, string | Unit": function (e, t) {
              return e.toNumber(t)
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      Za = "string",
      Va = Object(ea.a)(Za, ["typed"], function (e) {
        var t = e.typed,
          a = t(Za, {
            "": function () {
              return ""
            },
            number: Kt.h,
            null: function () {
              return "null"
            },
            boolean: function (e) {
              return e + ""
            },
            string: function (e) {
              return e
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            },
            any: function (e) {
              return e + ""
            }
          });
        return a
      }),
      Wa = "boolean",
      Ja = Object(ea.a)(Wa, ["typed"], function (e) {
        var t = e.typed,
          a = t(Wa, {
            "": function () {
              return !1
            },
            boolean: function (e) {
              return e
            },
            number: function (e) {
              return !!e
            },
            null: function () {
              return !1
            },
            BigNumber: function (e) {
              return !e.isZero()
            },
            string: function (e) {
              var t = e.toLowerCase();
              if ("true" === t) return !0;
              if ("false" === t) return !1;
              var a = +e;
              if ("" !== e && !isNaN(a)) return !!a;
              throw new Error("Cannot convert \"" + e + "\" to a boolean")
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      Ya = Object(ea.a)("bignumber", ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.BigNumber,
          n = t("bignumber", {
            "": function () {
              return new a(0)
            },
            number: function (e) {
              return new a(e + "")
            },
            string: function (e) {
              return new a(e)
            },
            BigNumber: function (e) {
              return e
            },
            Fraction: function (e) {
              return new a(e.n).div(e.d).times(e.s)
            },
            null: function () {
              return new a(0)
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      Xa = Object(ea.a)("complex", ["typed", "Complex"], function (e) {
        var t = e.typed,
          a = e.Complex,
          n = t("complex", {
            "": function () {
              return a.ZERO
            },
            number: function (e) {
              return new a(e, 0)
            },
            "number, number": function (e, t) {
              return new a(e, t)
            },
            "BigNumber, BigNumber": function (e, t) {
              return new a(e.toNumber(), t.toNumber())
            },
            Fraction: function (e) {
              return new a(e.valueOf(), 0)
            },
            Complex: function (e) {
              return e.clone()
            },
            string: function (e) {
              return a(e)
            },
            null: function () {
              return a(0)
            },
            Object: function (e) {
              if ("re" in e && "im" in e) return new a(e.re, e.im);
              if ("r" in e && "phi" in e || "abs" in e && "arg" in e) return new a(e);
              throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)")
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      Qa = Object(ea.a)("fraction", ["typed", "Fraction"], function (e) {
        var t = e.typed,
          a = e.Fraction,
          n = t("fraction", {
            number: function (e) {
              if (!isFinite(e) || isNaN(e)) throw new Error(e + " cannot be represented as a fraction");
              return new a(e)
            },
            string: function (e) {
              return new a(e)
            },
            "number, number": function (e, t) {
              return new a(e, t)
            },
            null: function () {
              return new a(0)
            },
            BigNumber: function (e) {
              return new a(e.toString())
            },
            Fraction: function (e) {
              return e
            },
            Object: function (e) {
              return new a(e)
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      Ka = "matrix",
      en = Object(ea.a)(Ka, ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], function (e) {
        function t(e, t, a) {
          if ("dense" === t || "default" === t || t === void 0) return new i(e, a);
          if ("sparse" === t) return new r(e, a);
          throw new TypeError("Unknown matrix type " + JSON.stringify(t) + ".")
        }
        var a = e.typed,
          n = e.Matrix,
          i = e.DenseMatrix,
          r = e.SparseMatrix;
        return a(Ka, {
          "": function () {
            return t([])
          },
          string: function (e) {
            return t([], e)
          },
          "string, string": function (e, a) {
            return t([], e, a)
          },
          Array: function (e) {
            return t(e)
          },
          Matrix: function (e) {
            return t(e, e.storage())
          },
          "Array | Matrix, string": t,
          "Array | Matrix, string, string": t
        })
      }),
      tn = "splitUnit",
      an = Object(ea.a)(tn, ["typed"], function (e) {
        var t = e.typed;
        return t(tn, {
          "Unit, Array": function (e, t) {
            return e.splitUnit(t)
          }
        })
      }),
      nn = "number",
      rn = "number, number";
    N.signature = nn, M.signature = rn,
      function (e, t) {
        return e - t
      }.signature = rn, S.signature = rn,
      function (e, t) {
        return e / t
      }.signature = rn, A.signature = nn, O.signature = nn, _.signature = nn, C.signature = nn, E.signature = nn, w.signature = nn, k.signature = nn,
      function (e) {
        return 0 < e ? Math.floor(e) : Math.ceil(e)
      }.signature = nn,
      function (e) {
        return Math.floor(e)
      }.signature = nn, T.signature = rn, I.signature = rn, q.signature = nn, B.signature = nn, z.signature = nn,
      function (e) {
        return Object(Kt.k)(e)
      }.signature = nn, j.signature = rn, D.signature = rn, P.signature = nn,
      function (e) {
        return Math.sqrt(e)
      }.signature = nn, R.signature = nn, U.signature = rn, L.signature = rn, F.signature = rn,
      function (e) {
        return Math.abs(e)
      }.signature = nn;
    var sn = Object(ea.a)("unaryMinus", ["typed"], function (e) {
        var t = e.typed,
          a = t("unaryMinus", {
            number: A,
            Complex: function (e) {
              return e.neg()
            },
            BigNumber: function (e) {
              return e.neg()
            },
            Fraction: function (e) {
              return e.neg()
            },
            Unit: function (e) {
              var t = e.clone();
              return t.value = a(e.value), t
            },
            "Array | Matrix": function (e) {
              return m(e, a, !0)
            }
          });
        return a
      }),
      on = "unaryPlus",
      ln = Object(ea.a)(on, ["typed", "config", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.BigNumber,
          i = t(on, {
            number: O,
            Complex: function (e) {
              return e
            },
            BigNumber: function (e) {
              return e
            },
            Fraction: function (e) {
              return e
            },
            Unit: function (e) {
              return e.clone()
            },
            "Array | Matrix": function (e) {
              return m(e, i, !0)
            },
            "boolean | string": function (e) {
              return "BigNumber" === a.number ? new n(+e) : +e
            }
          });
        return i
      }),
      pn = "abs",
      mn = Object(ea.a)(pn, ["typed"], function (e) {
        var t = e.typed,
          a = t(pn, {
            number: N,
            Complex: function (e) {
              return e.abs()
            },
            BigNumber: function (e) {
              return e.abs()
            },
            Fraction: function (e) {
              return e.abs()
            },
            "Array | Matrix": function (e) {
              return m(e, a, !0)
            },
            Unit: function (e) {
              return e.abs()
            }
          });
        return a
      }),
      cn = "apply",
      dn = Object(ea.a)(cn, ["typed", "isInteger"], function (e) {
        var t = e.typed,
          a = e.isInteger,
          n = t(cn, {
            "Array | Matrix, number | BigNumber, function": function (e, t, n) {
              if (!a(t)) throw new TypeError("Integer number expected for dimension");
              var i = Array.isArray(e) ? Object(ya.a)(e) : e.size();
              if (0 > t || t >= i.length) throw new Ma.a(t, i.length);
              return Object(Yt.v)(e) ? e.create(H(e.valueOf(), t, n)) : H(e, t, n)
            }
          });
        return n
      }),
      un = "addScalar",
      gn = Object(ea.a)(un, ["typed"], function (e) {
        var t = e.typed,
          a = t(un, {
            "number, number": M,
            "Complex, Complex": function (e, t) {
              return e.add(t)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.plus(t)
            },
            "Fraction, Fraction": function (e, t) {
              return e.add(t)
            },
            "Unit, Unit": function (e, t) {
              if (null === e.value || void 0 === e.value) throw new Error("Parameter x contains a unit with undefined value");
              if (null === t.value || void 0 === t.value) throw new Error("Parameter y contains a unit with undefined value");
              if (!e.equalBase(t)) throw new Error("Units do not match");
              var n = e.clone();
              return n.value = a(n.value, t.value), n.fixPrefix = !1, n
            }
          });
        return a
      }),
      yn = "cbrt",
      xn = Object(ea.a)(yn, ["config", "typed", "isNegative", "unaryMinus", "matrix", "Complex", "BigNumber", "Fraction"], function (e) {
        function t(e, t) {
          var n = e.arg() / 3,
            i = e.abs(),
            r = new o(_(i), 0).mul(new o(0, n).exp());
          if (t) {
            var l = [r, new o(_(i), 0).mul(new o(0, n + 2 * Math.PI / 3).exp()), new o(_(i), 0).mul(new o(0, n - 2 * Math.PI / 3).exp())];
            return "Array" === a.matrix ? l : s(l)
          }
          return r
        }
        var a = e.config,
          n = e.typed,
          i = e.isNegative,
          r = e.unaryMinus,
          s = e.matrix,
          o = e.Complex,
          l = e.BigNumber,
          p = e.Fraction,
          c = n(yn, {
            number: _,
            Complex: t,
            "Complex, boolean": t,
            BigNumber: function (e) {
              return e.cbrt()
            },
            Unit: function (e) {
              if (e.value && Object(Yt.j)(e.value)) {
                var a = e.clone();
                return a.value = 1, a = a.pow(1 / 3), a.value = t(e.value), a
              }
              var n = i(e.value);
              n && (e.value = r(e.value));
              var s = Object(Yt.e)(e.value) ? new l(1).div(3) : Object(Yt.o)(e.value) ? new p(1, 3) : 1 / 3;
              var o = e.pow(s);
              return n && (o.value = r(o.value)), o
            },
            "Array | Matrix": function (e) {
              return m(e, c, !0)
            }
          });
        return c
      }),
      fn = Object(ea.a)("ceil", ["typed", "config", "round"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.round,
          i = t("ceil", {
            number: function (e) {
              return Object(Kt.m)(e, n(e), a.epsilon) ? n(e) : C(e)
            },
            Complex: function (e) {
              return e.ceil()
            },
            BigNumber: function (e) {
              return b(e, n(e), a.epsilon) ? n(e) : e.ceil()
            },
            Fraction: function (e) {
              return e.ceil()
            },
            "Array | Matrix": function (e) {
              return m(e, i, !0)
            }
          });
        return i
      }),
      hn = "cube",
      bn = Object(ea.a)(hn, ["typed"], function (e) {
        var t = e.typed,
          a = t(hn, {
            number: E,
            Complex: function (e) {
              return e.mul(e).mul(e)
            },
            BigNumber: function (e) {
              return e.times(e).times(e)
            },
            Fraction: function (e) {
              return e.pow(3)
            },
            "Array | Matrix": function (e) {
              return m(e, a, !0)
            },
            Unit: function (e) {
              return e.pow(3)
            }
          });
        return a
      }),
      vn = "exp",
      Nn = Object(ea.a)(vn, ["typed"], function (e) {
        var t = e.typed,
          a = t(vn, {
            number: w,
            Complex: function (e) {
              return e.exp()
            },
            BigNumber: function (e) {
              return e.exp()
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      Mn = "expm1",
      Sn = Object(ea.a)(Mn, ["typed", "Complex"], function (e) {
        var t = e.typed,
          a = e.Complex,
          n = t(Mn, {
            number: k,
            Complex: function (e) {
              var t = Math.exp(e.re);
              return new a(t * Math.cos(e.im) - 1, t * Math.sin(e.im))
            },
            BigNumber: function (e) {
              return e.exp().minus(1)
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      An = Object(ea.a)("fix", ["typed", "Complex", "ceil", "floor"], function (e) {
        var t = e.typed,
          a = e.Complex,
          n = e.ceil,
          i = e.floor,
          r = t("fix", {
            number: function (e) {
              return 0 < e ? i(e) : n(e)
            },
            Complex: function (e) {
              return new a(0 < e.re ? Math.floor(e.re) : Math.ceil(e.re), 0 < e.im ? Math.floor(e.im) : Math.ceil(e.im))
            },
            BigNumber: function (e) {
              return e.isNegative() ? n(e) : i(e)
            },
            Fraction: function (e) {
              return 0 > e.s ? e.ceil() : e.floor()
            },
            "Array | Matrix": function (e) {
              return m(e, r, !0)
            }
          });
        return r
      }),
      On = Object(ea.a)("floor", ["typed", "config", "round"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.round,
          i = t("floor", {
            number: function (e) {
              return Object(Kt.m)(e, n(e), a.epsilon) ? n(e) : Math.floor(e)
            },
            Complex: function (e) {
              return e.floor()
            },
            BigNumber: function (e) {
              return b(e, n(e), a.epsilon) ? n(e) : e.floor()
            },
            Fraction: function (e) {
              return e.floor()
            },
            "Array | Matrix": function (e) {
              return m(e, i, !0)
            }
          });
        return i
      }),
      _n = Object(ea.a)("algorithm01", ["typed"], function (e) {
        var t = e.typed;
        return function (e, a, n, r) {
          var s = e._data,
            o = e._size,
            l = e._datatype,
            p = a._values,
            m = a._index,
            c = a._ptr,
            d = a._size,
            u = a._datatype;
          if (o.length !== d.length) throw new ha.a(o.length, d.length);
          if (o[0] !== d[0] || o[1] !== d[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + d + ")");
          if (!p) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
          var g = o[0],
            y = o[1],
            f = "string" == typeof l && l === u ? l : void 0,
            h = f ? t.find(n, [f, f]) : n,
            b = [],
            v, N;
          for (v = 0; v < g; v++) b[v] = [];
          var M = [],
            x = [];
          for (N = 0; N < y; N++) {
            for (var S = N + 1, A = c[N], O = c[N + 1], _ = A; _ < O; _++) v = m[_], M[v] = r ? h(p[_], s[v][N]) : h(s[v][N], p[_]), x[v] = S;
            for (v = 0; v < g; v++) b[v][N] = x[v] === S ? M[v] : s[v][N]
          }
          return e.createDenseMatrix({
            data: b,
            size: [g, y],
            datatype: f
          })
        }
      }),
      Cn = Object(ea.a)("algorithm04", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          n = e.equalScalar;
        return function (e, a, r) {
          var s = e._values,
            o = e._index,
            l = e._ptr,
            p = e._size,
            m = e._datatype,
            d = a._values,
            u = a._index,
            g = a._ptr,
            y = a._size,
            x = a._datatype;
          if (p.length !== y.length) throw new ha.a(p.length, y.length);
          if (p[0] !== y[0] || p[1] !== y[1]) throw new RangeError("Dimension mismatch. Matrix A (" + p + ") must match Matrix B (" + y + ")");
          var f = p[0],
            h = p[1],
            b = n,
            N = 0,
            M = r,
            S;
          "string" == typeof m && m === x && (S = m, b = t.find(n, [S, S]), N = t.convert(0, S), M = t.find(r, [S, S]));
          var A = s && d ? [] : void 0,
            O = [],
            _ = [],
            C = e.createSparseMatrix({
              values: A,
              index: O,
              ptr: _,
              size: [f, h],
              datatype: S
            }),
            c = s && d ? [] : void 0,
            E = s && d ? [] : void 0,
            w = [],
            T = [],
            I, q, B, z, D;
          for (q = 0; q < h; q++) {
            _[q] = O.length;
            var P = q + 1;
            for (z = l[q], D = l[q + 1], B = z; B < D; B++) I = o[B], O.push(I), w[I] = P, c && (c[I] = s[B]);
            for (z = g[q], D = g[q + 1], B = z; B < D; B++)
              if (I = u[B], w[I] !== P) O.push(I), T[I] = P, E && (E[I] = d[B]);
              else if (c) {
              var R = M(c[I], d[B]);
              b(R, N) ? w[I] = null : c[I] = R
            }
            if (c && E)
              for (B = _[q]; B < O.length;) I = O[B], w[I] === P ? (A[B] = c[I], B++) : T[I] === P ? (A[B] = E[I], B++) : O.splice(B, 1)
          }
          return _[h] = O.length, C
        }
      }),
      En = Object(ea.a)("algorithm10", ["typed", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.DenseMatrix;
        return function (e, n, s, o) {
          var l = e._values,
            p = e._index,
            m = e._ptr,
            d = e._size,
            u = e._datatype;
          if (!l) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
          var g = d[0],
            y = d[1],
            f = s,
            h;
          "string" == typeof u && (h = u, n = t.convert(n, h), f = t.find(s, [h, h]));
          for (var v = [], N = new a({
              data: v,
              size: [g, y],
              datatype: h
            }), c = [], x = [], M = 0, S; M < y; M++) {
            S = M + 1;
            for (var A = m[M], O = m[M + 1], _ = A, C; _ < O; _++) C = p[_], c[C] = l[_], x[C] = S;
            for (var E = 0; E < g; E++) 0 == M && (v[E] = []), v[E][M] = x[E] === S ? o ? f(n, c[E]) : f(c[E], n) : n
          }
          return N
        }
      }),
      wn = Object(ea.a)("algorithm13", ["typed"], function (e) {
        function t(e, a, r, s, n, o) {
          var l = [];
          if (a === r.length - 1)
            for (var p = 0; p < s; p++) l[p] = e(n[p], o[p]);
          else
            for (var m = 0; m < s; m++) l[m] = t(e, a + 1, r, r[a + 1], n[m], o[m]);
          return l
        }
        var n = e.typed;
        return function (e, a, i) {
          var r = e._data,
            o = e._size,
            l = e._datatype,
            p = a._data,
            m = a._size,
            c = a._datatype,
            d = [];
          if (o.length !== m.length) throw new ha.a(o.length, m.length);
          for (var u = 0; u < o.length; u++) {
            if (o[u] !== m[u]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + m + ")");
            d[u] = o[u]
          }
          var g = i,
            y;
          "string" == typeof l && l === c && (y = l, g = n.find(i, [y, y]));
          var x = 0 < d.length ? t(g, 0, d, d[0], r, p) : [];
          return e.createDenseMatrix({
            data: x,
            size: d,
            datatype: y
          })
        }
      }),
      kn = Object(ea.a)("algorithm14", ["typed"], function (e) {
        function t(e, a, r, s, n, o, l) {
          var p = [];
          if (a === r.length - 1)
            for (var m = 0; m < s; m++) p[m] = l ? e(o, n[m]) : e(n[m], o);
          else
            for (var c = 0; c < s; c++) p[c] = t(e, a + 1, r, r[a + 1], n[c], o, l);
          return p
        }
        var n = e.typed;
        return function (e, a, i, r) {
          var s = e._data,
            o = e._size,
            l = e._datatype,
            p = i,
            m;
          "string" == typeof l && (m = l, a = n.convert(a, m), p = n.find(i, [m, m]));
          var c = 0 < o.length ? t(p, 0, o, o[0], s, a, r) : [];
          return e.createDenseMatrix({
            data: c,
            size: Object(fa.a)(o),
            datatype: m
          })
        }
      }),
      Tn = "gcd",
      In = Object(ea.a)(Tn, ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.BigNumber,
          r = e.DenseMatrix,
          s = _n({
            typed: t
          }),
          o = Cn({
            typed: t,
            equalScalar: n
          }),
          l = En({
            typed: t,
            DenseMatrix: r
          }),
          p = wn({
            typed: t
          }),
          m = kn({
            typed: t
          }),
          c = t(Tn, {
            "number, number": T,
            "BigNumber, BigNumber": function (e, t) {
              if (!e.isInt() || !t.isInt()) throw new Error("Parameters in function gcd must be integer numbers");
              for (var n = new i(0); !t.isZero();) {
                var s = e.mod(t);
                e = t, t = s
              }
              return e.lt(n) ? e.neg() : e
            },
            "Fraction, Fraction": function (e, t) {
              return e.gcd(t)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, c)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return s(t, e, c, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, c, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return p(e, t, c)
            },
            "Array, Array": function (e, t) {
              return c(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return c(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return c(e, a(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return l(e, t, c, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return m(e, t, c, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              return l(t, e, c, !0)
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return m(t, e, c, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return m(a(e), t, c, !1).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return m(a(t), e, c, !0).valueOf()
            },
            "Array | Matrix | number | BigNumber, Array | Matrix | number | BigNumber, ...Array | Matrix | number | BigNumber": function (e, t, a) {
              for (var n = c(e, t), r = 0; r < a.length; r++) n = c(n, a[r]);
              return n
            }
          });
        return c
      }),
      qn = Object(ea.a)("algorithm02", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          a = e.equalScalar;
        return function (e, n, r, s) {
          var o = e._data,
            l = e._size,
            p = e._datatype,
            m = n._values,
            c = n._index,
            d = n._ptr,
            u = n._size,
            g = n._datatype;
          if (l.length !== u.length) throw new ha.a(l.length, u.length);
          if (l[0] !== u[0] || l[1] !== u[1]) throw new RangeError("Dimension mismatch. Matrix A (" + l + ") must match Matrix B (" + u + ")");
          if (!m) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
          var y = l[0],
            x = l[1],
            f = a,
            h = 0,
            b = r,
            v;
          "string" == typeof p && p === g && (v = p, f = t.find(a, [v, v]), h = t.convert(0, v), b = t.find(r, [v, v]));
          for (var N = [], M = [], S = [], A = 0; A < x; A++) {
            S[A] = M.length;
            for (var O = d[A], _ = d[A + 1], C = O; C < _; C++) {
              var E = c[C],
                i = s ? b(m[C], o[E][A]) : b(o[E][A], m[C]);
              f(i, h) || (M.push(E), N.push(i))
            }
          }
          return S[x] = M.length, n.createSparseMatrix({
            values: N,
            index: M,
            ptr: S,
            size: [y, x],
            datatype: v
          })
        }
      }),
      Bn = Object(ea.a)("algorithm06", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          n = e.equalScalar;
        return function (e, a, s) {
          var o = e._values,
            l = e._size,
            m = e._datatype,
            d = a._values,
            y = a._size,
            f = a._datatype;
          if (l.length !== y.length) throw new ha.a(l.length, y.length);
          if (l[0] !== y[0] || l[1] !== y[1]) throw new RangeError("Dimension mismatch. Matrix A (" + l + ") must match Matrix B (" + y + ")");
          var h = l[0],
            b = l[1],
            N = n,
            M = 0,
            S = s,
            A;
          "string" == typeof m && m === f && (A = m, N = t.find(n, [A, A]), M = t.convert(0, A), S = t.find(s, [A, A]));
          for (var O = o && d ? [] : void 0, _ = [], C = [], E = e.createSparseMatrix({
              values: O,
              index: _,
              ptr: C,
              size: [h, b],
              datatype: A
            }), c = O ? [] : void 0, x = [], w = [], u = 0; u < b; u++) {
            C[u] = _.length;
            var T = u + 1;
            if (g(e, u, x, c, w, T, E, S), g(a, u, x, c, w, T, E, S), c) {
              for (var I = C[u], q; I < _.length;)
                if (q = _[I], w[q] === T) {
                  var B = c[q];
                  N(B, M) ? _.splice(I, 1) : (O.push(B), I++)
                } else _.splice(I, 1);
            } else
              for (var v = C[u], z; v < _.length;) z = _[v], w[z] === T ? v++ : _.splice(v, 1)
          }
          return C[b] = _.length, E
        }
      }),
      zn = Object(ea.a)("algorithm11", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          a = e.equalScalar;
        return function (e, n, r, s) {
          var o = e._values,
            l = e._index,
            p = e._ptr,
            m = e._size,
            d = e._datatype;
          if (!o) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
          var u = m[0],
            g = m[1],
            y = a,
            x = 0,
            f = r,
            h;
          "string" == typeof d && (h = d, y = t.find(a, [h, h]), x = t.convert(0, h), n = t.convert(n, h), f = t.find(r, [h, h]));
          for (var N = [], M = [], S = [], A = e.createSparseMatrix({
              values: N,
              index: M,
              ptr: S,
              size: [u, g],
              datatype: h
            }), c = 0; c < g; c++) {
            S[c] = M.length;
            for (var O = p[c], _ = p[c + 1], C = O; C < _; C++) {
              var E = l[C],
                i = s ? f(n, o[C]) : f(o[C], n);
              y(i, x) || (M.push(E), N.push(i))
            }
          }
          return S[g] = M.length, A
        }
      }),
      jn = "lcm",
      Dn = Object(ea.a)(jn, ["typed", "matrix", "equalScalar"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = qn({
            typed: t,
            equalScalar: n
          }),
          r = Bn({
            typed: t,
            equalScalar: n
          }),
          s = zn({
            typed: t,
            equalScalar: n
          }),
          o = wn({
            typed: t
          }),
          l = kn({
            typed: t
          }),
          p = t(jn, {
            "number, number": I,
            "BigNumber, BigNumber": function (e, n) {
              if (!e.isInt() || !n.isInt()) throw new Error("Parameters in function lcm must be integer numbers");
              if (e.isZero()) return e;
              if (n.isZero()) return n;
              for (var i = e.times(n); !n.isZero();) {
                var r = n;
                n = e.mod(r), e = r
              }
              return i.div(e).abs()
            },
            "Fraction, Fraction": function (e, t) {
              return e.lcm(t)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return r(e, t, p)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return i(t, e, p, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return i(e, t, p, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return o(e, t, p)
            },
            "Array, Array": function (e, t) {
              return p(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return p(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return p(e, a(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return s(e, t, p, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return l(e, t, p, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              return s(t, e, p, !0)
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return l(t, e, p, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return l(a(e), t, p, !1).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return l(a(t), e, p, !0).valueOf()
            },
            "Array | Matrix | number | BigNumber, Array | Matrix | number | BigNumber, ...Array | Matrix | number | BigNumber": function (e, t, a) {
              for (var n = p(e, t), r = 0; r < a.length; r++) n = p(n, a[r]);
              return n
            }
          });
        return p
      }),
      Pn = "log10",
      Rn = Object(ea.a)(Pn, ["typed", "config", "Complex"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.Complex,
          i = t(Pn, {
            number: function (e) {
              return 0 <= e || a.predictable ? B(e) : new n(e, 0).log().div(Math.LN10)
            },
            Complex: function (e) {
              return new n(e).log().div(Math.LN10)
            },
            BigNumber: function (e) {
              return !e.isNegative() || a.predictable ? e.log() : new n(e.toNumber(), 0).log().div(Math.LN10)
            },
            "Array | Matrix": function (e) {
              return m(e, i)
            }
          });
        return i
      }),
      Un = "log2",
      Ln = Object(ea.a)(Un, ["typed", "config", "Complex"], function (e) {
        function t(e) {
          var t = Math.sqrt(e.re * e.re + e.im * e.im);
          return new i(Math.log2 ? Math.log2(t) : Math.log(t) / Math.LN2, Math.atan2(e.im, e.re) / Math.LN2)
        }
        var a = e.typed,
          n = e.config,
          i = e.Complex,
          r = a(Un, {
            number: function (e) {
              return 0 <= e || n.predictable ? z(e) : t(new i(e, 0))
            },
            Complex: t,
            BigNumber: function (e) {
              return !e.isNegative() || n.predictable ? e.log(2) : t(new i(e.toNumber(), 0))
            },
            "Array | Matrix": function (e) {
              return m(e, r)
            }
          });
        return r
      }),
      Fn = Object(ea.a)("algorithm03", ["typed"], function (e) {
        var t = e.typed;
        return function (e, a, n, r) {
          var s = e._data,
            o = e._size,
            l = e._datatype,
            p = a._values,
            m = a._index,
            c = a._ptr,
            d = a._size,
            u = a._datatype;
          if (o.length !== d.length) throw new ha.a(o.length, d.length);
          if (o[0] !== d[0] || o[1] !== d[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + d + ")");
          if (!p) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
          var g = o[0],
            f = o[1],
            h = 0,
            b = n,
            v;
          "string" == typeof l && l === u && (v = l, h = t.convert(0, v), b = t.find(n, [v, v]));
          for (var N = [], M = 0; M < g; M++) N[M] = [];
          for (var S = [], x = [], A = 0, O; A < f; A++) {
            O = A + 1;
            for (var _ = c[A], C = c[A + 1], E = _, w; E < C; E++) w = m[E], S[w] = r ? b(p[E], s[w][A]) : b(s[w][A], p[E]), x[w] = O;
            for (var T = 0; T < g; T++) N[T][A] = x[T] === O ? S[T] : r ? b(h, s[T][A]) : b(s[T][A], h)
          }
          return e.createDenseMatrix({
            data: N,
            size: [g, f],
            datatype: v
          })
        }
      }),
      Hn = Object(ea.a)("algorithm05", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          n = e.equalScalar;
        return function (e, a, r) {
          var s = e._values,
            o = e._index,
            l = e._ptr,
            p = e._size,
            m = e._datatype,
            d = a._values,
            u = a._index,
            g = a._ptr,
            y = a._size,
            x = a._datatype;
          if (p.length !== y.length) throw new ha.a(p.length, y.length);
          if (p[0] !== y[0] || p[1] !== y[1]) throw new RangeError("Dimension mismatch. Matrix A (" + p + ") must match Matrix B (" + y + ")");
          var f = p[0],
            h = p[1],
            b = n,
            v = 0,
            N = r,
            M;
          "string" == typeof m && m === x && (M = m, b = t.find(n, [M, M]), v = t.convert(0, M), N = t.find(r, [M, M]));
          var S = s && d ? [] : void 0,
            A = [],
            O = [],
            _ = e.createSparseMatrix({
              values: S,
              index: A,
              ptr: O,
              size: [f, h],
              datatype: M
            }),
            c = S ? [] : void 0,
            C = S ? [] : void 0,
            E = [],
            w = [],
            T, I, q, B;
          for (I = 0; I < h; I++) {
            O[I] = A.length;
            var z = I + 1;
            for (q = l[I], B = l[I + 1]; q < B; q++) T = o[q], A.push(T), E[T] = z, c && (c[T] = s[q]);
            for (q = g[I], B = g[I + 1]; q < B; q++) T = u[q], E[T] !== z && A.push(T), w[T] = z, C && (C[T] = d[q]);
            if (S)
              for (q = O[I]; q < A.length;) {
                T = A[q];
                var D = E[T],
                  P = w[T];
                if (D === z || P === z) {
                  var R = D === z ? c[T] : v,
                    U = P === z ? C[T] : v,
                    L = N(R, U);
                  b(L, v) ? A.splice(q, 1) : (S.push(L), q++)
                }
              }
          }
          return O[h] = A.length, _
        }
      }),
      Gn = Object(ea.a)("algorithm12", ["typed", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.DenseMatrix;
        return function (e, n, s, o) {
          var l = e._values,
            p = e._index,
            m = e._ptr,
            d = e._size,
            u = e._datatype;
          if (!l) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
          var g = d[0],
            y = d[1],
            f = s,
            h;
          "string" == typeof u && (h = u, n = t.convert(n, h), f = t.find(s, [h, h]));
          for (var v = [], N = new a({
              data: v,
              size: [g, y],
              datatype: h
            }), c = [], x = [], M = 0, S; M < y; M++) {
            S = M + 1;
            for (var A = m[M], O = m[M + 1], _ = A, C; _ < O; _++) C = p[_], c[C] = l[_], x[C] = S;
            for (var E = 0; E < g; E++) 0 == M && (v[E] = []), v[E][M] = x[E] === S ? o ? f(n, c[E]) : f(c[E], n) : o ? f(n, 0) : f(0, n)
          }
          return N
        }
      }),
      $n = "mod",
      Zn = Object(ea.a)($n, ["typed", "matrix", "equalScalar", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.DenseMatrix,
          r = qn({
            typed: t,
            equalScalar: n
          }),
          s = Fn({
            typed: t
          }),
          o = Hn({
            typed: t,
            equalScalar: n
          }),
          l = zn({
            typed: t,
            equalScalar: n
          }),
          p = Gn({
            typed: t,
            DenseMatrix: i
          }),
          m = wn({
            typed: t
          }),
          c = kn({
            typed: t
          }),
          d = t($n, {
            "number, number": j,
            "BigNumber, BigNumber": function (e, t) {
              return t.isZero() ? e : e.mod(t)
            },
            "Fraction, Fraction": function (e, t) {
              return e.mod(t)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, d, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return r(t, e, d, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, d, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return m(e, t, d)
            },
            "Array, Array": function (e, t) {
              return d(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return d(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return d(e, a(t))
            },
            "SparseMatrix, any": function (e, t) {
              return l(e, t, d, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return c(e, t, d, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return p(t, e, d, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return c(t, e, d, !0)
            },
            "Array, any": function (e, t) {
              return c(a(e), t, d, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return c(a(t), e, d, !0).valueOf()
            }
          });
        return d
      }),
      Vn = Object(ea.a)("multiplyScalar", ["typed"], function (e) {
        var t = e.typed,
          a = t("multiplyScalar", {
            "number, number": S,
            "Complex, Complex": function (e, t) {
              return e.mul(t)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.times(t)
            },
            "Fraction, Fraction": function (e, t) {
              return e.mul(t)
            },
            "number | Fraction | BigNumber | Complex, Unit": function (e, t) {
              var n = t.clone();
              return n.value = null === n.value ? n._normalize(e) : a(n.value, e), n
            },
            "Unit, number | Fraction | BigNumber | Complex": function (e, t) {
              var n = e.clone();
              return n.value = null === n.value ? n._normalize(t) : a(n.value, t), n
            },
            "Unit, Unit": function (e, t) {
              return e.multiply(t)
            }
          });
        return a
      }),
      Wn = "multiply",
      Jn = Object(ea.a)(Wn, ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar"], function (e) {
        function t(e, t) {
          switch (e.length) {
            case 1:
              switch (t.length) {
                case 1:
                  if (e[0] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
                  break;
                case 2:
                  if (e[0] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Vector length (" + e[0] + ") must match Matrix rows (" + t[0] + ")");
                  break;
                default:
                  throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)");
              }
              break;
            case 2:
              switch (t.length) {
                case 1:
                  if (e[1] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + e[1] + ") must match Vector length (" + t[0] + ")");
                  break;
                case 2:
                  if (e[1] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + e[1] + ") must match Matrix B rows (" + t[0] + ")");
                  break;
                default:
                  throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)");
              }
              break;
            default:
              throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + e.length + " dimensions)");
          }
        }

        function a(e, t, a) {
          if (0 === a) throw new Error("Cannot multiply two empty vectors");
          var n = e._data,
            s = e._datatype,
            p = t._data,
            m = t._datatype,
            d = o,
            u = l,
            g;
          s && m && s === m && "string" == typeof s && (g = s, d = r.find(o, [g, g]), u = r.find(l, [g, g]));
          for (var y = u(n[0], p[0]), x = 1; x < a; x++) y = d(y, u(n[x], p[x]));
          return y
        }

        function n(e, t) {
          if ("dense" !== t.storage()) throw new Error("Support for SparseMatrix not implemented");
          return i(e, t)
        }

        function i(e, t) {
          var a = e._data,
            n = e._size,
            s = e._datatype,
            p = t._data,
            m = t._size,
            d = t._datatype,
            u = n[0],
            g = m[1],
            y = o,
            x = l,
            f;
          s && d && s === d && "string" == typeof s && (f = s, y = r.find(o, [f, f]), x = r.find(l, [f, f]));
          for (var h = [], c = 0, b; c < g; c++) {
            b = x(a[0], p[0][c]);
            for (var v = 1; v < u; v++) b = y(b, x(a[v], p[v][c]));
            h[c] = b
          }
          return e.createDenseMatrix({
            data: h,
            size: [g],
            datatype: f
          })
        }
        var r = e.typed,
          s = e.matrix,
          o = e.addScalar,
          l = e.multiplyScalar,
          m = e.equalScalar,
          c = zn({
            typed: r,
            equalScalar: m
          }),
          d = kn({
            typed: r
          }),
          u = r(Wn, Object(fa.e)({
            "Array, Array": function (e, a) {
              t(Object(ya.a)(e), Object(ya.a)(a));
              var n = u(s(e), s(a));
              return Object(Yt.v)(n) ? n.valueOf() : n
            },
            "Matrix, Matrix": function (e, i) {
              var r = e.size(),
                s = i.size();
              return t(r, s), 1 === r.length ? 1 === s.length ? a(e, i, r[0]) : n(e, i) : 1 === s.length ? g(e, i) : f(e, i)
            },
            "Matrix, Array": function (e, t) {
              return u(e, s(t))
            },
            "Array, Matrix": function (e, t) {
              return u(s(e, t.storage()), t)
            },
            "SparseMatrix, any": function (e, t) {
              return c(e, t, l, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return d(e, t, l, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return c(t, e, l, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return d(t, e, l, !0)
            },
            "Array, any": function (e, t) {
              return d(s(e), t, l, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return d(s(t), e, l, !0).valueOf()
            },
            "any, any": l,
            "any, any, ...any": function (e, t, a) {
              for (var n = u(e, t), r = 0; r < a.length; r++) n = u(n, a[r]);
              return n
            }
          }, l.signatures)),
          g = r("_multiplyMatrixVector", {
            "DenseMatrix, any": function (e, t) {
              var a = e._data,
                n = e._size,
                s = e._datatype,
                p = t._data,
                m = t._datatype,
                d = n[0],
                u = n[1],
                g = o,
                y = l,
                x;
              s && m && s === m && "string" == typeof s && (x = s, g = r.find(o, [x, x]), y = r.find(l, [x, x]));
              for (var f = [], c = 0; c < d; c++) {
                for (var h = a[c], b = y(h[0], p[0]), v = 1; v < u; v++) b = g(b, y(h[v], p[v]));
                f[c] = b
              }
              return e.createDenseMatrix({
                data: f,
                size: [d],
                datatype: x
              })
            },
            "SparseMatrix, any": function (e, t) {
              var a = e._values,
                n = e._index,
                i = e._ptr,
                s = e._datatype;
              if (!a) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
              var c = t._data,
                d = t._datatype,
                u = e._size[0],
                g = t._size[0],
                y = [],
                f = [],
                h = [],
                b = o,
                v = l,
                N = m,
                M = 0,
                S;
              s && d && s === d && "string" == typeof s && (S = s, b = r.find(o, [S, S]), v = r.find(l, [S, S]), N = r.find(m, [S, S]), M = r.convert(0, S));
              var A = [],
                x = [];
              h[0] = 0;
              for (var O = 0, _; O < g; O++)
                if (_ = c[O], !N(_, M))
                  for (var C = i[O], E = i[O + 1], w = C, k; w < E; w++) k = n[w], x[k] ? A[k] = b(A[k], v(_, a[w])) : (x[k] = !0, f.push(k), A[k] = v(_, a[w]));
              for (var T = f.length, I = 0, q; I < T; I++) q = f[I], y[I] = A[q];
              return h[1] = f.length, e.createSparseMatrix({
                values: y,
                index: f,
                ptr: h,
                size: [u, 1],
                datatype: S
              })
            }
          }),
          f = r("_multiplyMatrixMatrix", {
            "DenseMatrix, DenseMatrix": function (e, t) {
              var a = e._data,
                n = e._size,
                s = e._datatype,
                p = t._data,
                m = t._size,
                d = t._datatype,
                u = n[0],
                g = n[1],
                y = m[1],
                f = o,
                h = l,
                b;
              s && d && s === d && "string" == typeof s && (b = s, f = r.find(o, [b, b]), h = r.find(l, [b, b]));
              for (var v = [], c = 0, N; c < u; c++) {
                N = a[c], v[c] = [];
                for (var M = 0, S; M < y; M++) {
                  S = h(N[0], p[0][M]);
                  for (var A = 1; A < g; A++) S = f(S, h(N[A], p[A][M]));
                  v[c][M] = S
                }
              }
              return e.createDenseMatrix({
                data: v,
                size: [u, y],
                datatype: b
              })
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              var a = e._data,
                n = e._size,
                s = e._datatype,
                p = t._values,
                d = t._index,
                u = t._ptr,
                g = t._size,
                y = t._datatype;
              if (!p) throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
              var x = n[0],
                f = g[1],
                h = o,
                b = l,
                v = m,
                N = 0,
                M;
              s && y && s === y && "string" == typeof s && (M = s, h = r.find(o, [M, M]), b = r.find(l, [M, M]), v = r.find(m, [M, M]), N = r.convert(0, M));
              for (var S = [], A = [], O = [], _ = t.createSparseMatrix({
                  values: S,
                  index: A,
                  ptr: O,
                  size: [x, f],
                  datatype: M
                }), c = 0; c < f; c++) {
                O[c] = A.length;
                var C = u[c],
                  E = u[c + 1];
                if (E > C)
                  for (var w = 0, k = 0; k < x; k++) {
                    for (var T = k + 1, I = void 0, q = C, B; q < E; q++) B = d[q], w === T ? I = h(I, b(a[k][B], p[q])) : (I = b(a[k][B], p[q]), w = T);
                    w !== T || v(I, N) || (A.push(k), S.push(I))
                  }
              }
              return O[f] = A.length, _
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              var a = e._values,
                n = e._index,
                i = e._ptr,
                s = e._datatype;
              if (!a) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
              var d = t._data,
                u = t._datatype,
                g = e._size[0],
                y = t._size[0],
                f = t._size[1],
                h = o,
                b = l,
                v = m,
                N = 0,
                M;
              s && u && s === u && "string" == typeof s && (M = s, h = r.find(o, [M, M]), b = r.find(l, [M, M]), v = r.find(m, [M, M]), N = r.convert(0, M));
              for (var S = [], A = [], O = [], _ = e.createSparseMatrix({
                  values: S,
                  index: A,
                  ptr: O,
                  size: [g, f],
                  datatype: M
                }), c = [], x = [], C = 0; C < f; C++) {
                O[C] = A.length;
                for (var E = C + 1, w = 0, k; w < y; w++)
                  if (k = d[w][C], !v(k, N))
                    for (var T = i[w], I = i[w + 1], q = T, B; q < I; q++) B = n[q], x[B] === E ? c[B] = h(c[B], b(k, a[q])) : (x[B] = E, A.push(B), c[B] = b(k, a[q]));
                for (var z = O[C], j = A.length, D = z, P; D < j; D++) P = A[D], S[D] = c[P]
              }
              return O[f] = A.length, _
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              var a = e._values,
                n = e._index,
                i = e._ptr,
                s = e._datatype,
                m = t._values,
                d = t._index,
                u = t._ptr,
                g = t._datatype,
                y = e._size[0],
                f = t._size[1],
                h = a && m,
                b = o,
                v = l,
                N;
              s && g && s === g && "string" == typeof s && (N = s, b = r.find(o, [N, N]), v = r.find(l, [N, N]));
              for (var M = h ? [] : void 0, S = [], A = [], O = e.createSparseMatrix({
                  values: M,
                  index: S,
                  ptr: A,
                  size: [y, f],
                  datatype: N
                }), c = h ? [] : void 0, x = [], _ = 0, C, E, w, k, T, I, q, B; _ < f; _++) {
                A[_] = S.length;
                var z = _ + 1;
                for (T = u[_], I = u[_ + 1], k = T; k < I; k++)
                  if (B = d[k], h)
                    for (E = i[B], w = i[B + 1], C = E; C < w; C++) q = n[C], x[q] === z ? c[q] = b(c[q], v(m[k], a[C])) : (x[q] = z, S.push(q), c[q] = v(m[k], a[C]));
                  else
                    for (E = i[B], w = i[B + 1], C = E; C < w; C++) q = n[C], x[q] !== z && (x[q] = z, S.push(q));
                if (h)
                  for (var j = A[_], D = S.length, P = j, R; P < D; P++) R = S[P], M[P] = c[R]
              }
              return A[f] = S.length, O
            }
          });
        return u
      }),
      Yn = "nthRoot",
      Xn = Object(ea.a)(Yn, ["typed", "matrix", "equalScalar", "BigNumber"], function (e) {
        function t(e, t) {
          var a = r.precision,
            n = r.clone({
              precision: a + 2
            }),
            i = new r(0),
            s = new n(1),
            o = t.isNegative();
          if (o && (t = t.neg()), t.isZero()) throw new Error("Root must be non-zero");
          if (e.isNegative() && !t.abs().mod(2).equals(1)) throw new Error("Root must be odd when a is negative.");
          if (e.isZero()) return o ? new n(1 / 0) : 0;
          if (!e.isFinite()) return o ? i : e;
          var l = e.abs().pow(s.div(t));
          return l = e.isNeg() ? l.neg() : l, new r((o ? s.div(l) : l).toPrecision(a))
        }
        var a = e.typed,
          n = e.matrix,
          i = e.equalScalar,
          r = e.BigNumber,
          s = _n({
            typed: a
          }),
          o = qn({
            typed: a,
            equalScalar: i
          }),
          l = Bn({
            typed: a,
            equalScalar: i
          }),
          p = zn({
            typed: a,
            equalScalar: i
          }),
          m = wn({
            typed: a
          }),
          c = kn({
            typed: a
          }),
          d = "Complex number not supported in function nthRoot. Use nthRoots instead.",
          u = a(Yn, {
            number: function (e) {
              return D(e, 2)
            },
            "number, number": D,
            BigNumber: function (e) {
              return t(e, new r(2))
            },
            Complex: function () {
              throw new Error(d)
            },
            "Complex, number": function () {
              throw new Error(d)
            },
            "BigNumber, BigNumber": t,
            "Array | Matrix": function (e) {
              return u(e, 2)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              if (1 === t.density()) return l(e, t, u);
              throw new Error("Root must be non-zero")
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return o(t, e, u, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              if (1 === t.density()) return s(e, t, u, !1);
              throw new Error("Root must be non-zero")
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return m(e, t, u)
            },
            "Array, Array": function (e, t) {
              return u(n(e), n(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return u(n(e), t)
            },
            "Matrix, Array": function (e, t) {
              return u(e, n(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return p(e, t, u, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return c(e, t, u, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              if (1 === t.density()) return p(t, e, u, !0);
              throw new Error("Root must be non-zero")
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return c(t, e, u, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return u(n(e), t).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return u(e, n(t)).valueOf()
            }
          });
        return u
      }),
      Qn = Object(ea.a)(Yn, ["typed"], function (e) {
        var t = e.typed;
        return t(Yn, {
          number: D,
          "number, number": D
        })
      }),
      Kn = "sign",
      ei = Object(ea.a)(Kn, ["typed", "BigNumber", "Fraction"], function (e) {
        var t = e.typed,
          a = e.BigNumber,
          n = e.Fraction,
          i = t(Kn, {
            number: P,
            Complex: function (e) {
              return e.sign()
            },
            BigNumber: function (e) {
              return new a(e.cmp(0))
            },
            Fraction: function (e) {
              return new n(e.s, 1)
            },
            "Array | Matrix": function (e) {
              return m(e, i, !0)
            },
            Unit: function (e) {
              return i(e.value)
            }
          });
        return i
      }),
      ti = Object(ea.a)("sqrt", ["config", "typed", "Complex"], function (e) {
        function t(e) {
          return isNaN(e) ? NaN : 0 <= e || a.predictable ? Math.sqrt(e) : new i(e, 0).sqrt()
        }
        var a = e.config,
          n = e.typed,
          i = e.Complex,
          r = n("sqrt", {
            number: t,
            Complex: function (e) {
              return e.sqrt()
            },
            BigNumber: function (e) {
              return !e.isNegative() || a.predictable ? e.sqrt() : t(e.toNumber())
            },
            "Array | Matrix": function (e) {
              return m(e, r, !0)
            },
            Unit: function (e) {
              return e.pow(.5)
            }
          });
        return r
      }),
      ai = "square",
      ni = Object(ea.a)(ai, ["typed"], function (e) {
        var t = e.typed,
          a = t(ai, {
            number: R,
            Complex: function (e) {
              return e.mul(e)
            },
            BigNumber: function (e) {
              return e.times(e)
            },
            Fraction: function (e) {
              return e.mul(e)
            },
            "Array | Matrix": function (e) {
              return m(e, a, !0)
            },
            Unit: function (e) {
              return e.pow(2)
            }
          });
        return a
      }),
      ii = "subtract",
      ri = Object(ea.a)(ii, ["typed", "matrix", "equalScalar", "addScalar", "unaryMinus", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.addScalar,
          r = e.unaryMinus,
          s = e.DenseMatrix,
          o = _n({
            typed: t
          }),
          l = Fn({
            typed: t
          }),
          p = Hn({
            typed: t,
            equalScalar: n
          }),
          m = En({
            typed: t,
            DenseMatrix: s
          }),
          c = wn({
            typed: t
          }),
          d = kn({
            typed: t
          }),
          u = t(ii, {
            "number, number": function (e, t) {
              return e - t
            },
            "Complex, Complex": function (e, t) {
              return e.sub(t)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.minus(t)
            },
            "Fraction, Fraction": function (e, t) {
              return e.sub(t)
            },
            "Unit, Unit": function (e, t) {
              if (null === e.value) throw new Error("Parameter x contains a unit with undefined value");
              if (null === t.value) throw new Error("Parameter y contains a unit with undefined value");
              if (!e.equalBase(t)) throw new Error("Units do not match");
              var a = e.clone();
              return a.value = u(a.value, t.value), a.fixPrefix = !1, a
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return $(e, t), p(e, t, u)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return $(e, t), l(t, e, u, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return $(e, t), o(e, t, u, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return $(e, t), c(e, t, u)
            },
            "Array, Array": function (e, t) {
              return u(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return u(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return u(e, a(t))
            },
            "SparseMatrix, any": function (e, t) {
              return m(e, r(t), i)
            },
            "DenseMatrix, any": function (e, t) {
              return d(e, t, u)
            },
            "any, SparseMatrix": function (e, t) {
              return m(t, e, u, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return d(t, e, u, !0)
            },
            "Array, any": function (e, t) {
              return d(a(e), t, u, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return d(a(t), e, u, !0).valueOf()
            }
          });
        return u
      }),
      si = "xgcd",
      oi = Object(ea.a)(si, ["typed", "config", "matrix", "BigNumber"], function (e) {
        var t = e.typed,
          n = e.config,
          i = e.matrix,
          s = e.BigNumber;
        return t(si, {
          "number, number": function (e, t) {
            var a = U(e, t);
            return "Array" === n.matrix ? a : i(a)
          },
          "BigNumber, BigNumber": function (e, o) {
            var l = new s(0),
              p = new s(1),
              m = l,
              c = p,
              d = p,
              u = l,
              g, f, h;
            if (!e.isInt() || !o.isInt()) throw new Error("Parameters in function xgcd must be integer numbers");
            for (; !o.isZero();) f = e.div(o).floor(), h = e.mod(o), g = m, m = c.minus(f.times(m)), c = g, g = d, d = u.minus(f.times(d)), u = g, e = o, o = h;
            var v;
            return v = e.lt(l) ? [e.neg(), c.neg(), u.neg()] : [e, e.isZero() ? 0 : c, u], "Array" === n.matrix ? v : i(v)
          }
        })
      }),
      li = Object(ea.a)("algorithm09", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          n = e.equalScalar;
        return function (e, a, r) {
          var s = e._values,
            o = e._index,
            l = e._ptr,
            p = e._size,
            m = e._datatype,
            d = a._values,
            u = a._index,
            g = a._ptr,
            y = a._size,
            f = a._datatype;
          if (p.length !== y.length) throw new ha.a(p.length, y.length);
          if (p[0] !== y[0] || p[1] !== y[1]) throw new RangeError("Dimension mismatch. Matrix A (" + p + ") must match Matrix B (" + y + ")");
          var h = p[0],
            b = p[1],
            v = n,
            N = 0,
            M = r,
            S;
          "string" == typeof m && m === f && (S = m, v = t.find(n, [S, S]), N = t.convert(0, S), M = t.find(r, [S, S]));
          var A = s && d ? [] : void 0,
            O = [],
            _ = [],
            C = e.createSparseMatrix({
              values: A,
              index: O,
              ptr: _,
              size: [h, b],
              datatype: S
            }),
            c = A ? [] : void 0,
            x = [],
            E, w, T, I, q;
          for (w = 0; w < b; w++) {
            _[w] = O.length;
            var B = w + 1;
            if (c)
              for (I = g[w], q = g[w + 1], T = I; T < q; T++) E = u[T], x[E] = B, c[E] = d[T];
            for (I = l[w], q = l[w + 1], T = I; T < q; T++)
              if (E = o[T], c) {
                var z = x[E] === B ? c[E] : N,
                  D = M(s[T], z);
                v(D, N) || (O.push(E), A.push(D))
              } else O.push(E)
          }
          return _[b] = O.length, C
        }
      }),
      pi = "dotMultiply",
      mi = Object(ea.a)(pi, ["typed", "matrix", "equalScalar", "multiplyScalar"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.multiplyScalar,
          r = qn({
            typed: t,
            equalScalar: n
          }),
          s = li({
            typed: t,
            equalScalar: n
          }),
          o = zn({
            typed: t,
            equalScalar: n
          }),
          l = wn({
            typed: t
          }),
          p = kn({
            typed: t
          }),
          m = t(pi, {
            "any, any": i,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, i, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return r(t, e, i, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return r(e, t, i, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, i)
            },
            "Array, Array": function (e, t) {
              return m(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, a(t))
            },
            "SparseMatrix, any": function (e, t) {
              return o(e, t, i, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return p(e, t, i, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return o(t, e, i, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return p(t, e, i, !0)
            },
            "Array, any": function (e, t) {
              return p(a(e), t, i, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return p(a(t), e, i, !0).valueOf()
            }
          });
        return m
      }),
      ci = "number, number";
    te.signature = ci, ae.signature = "number", ne.signature = ci, ie.signature = ci, re.signature = ci, se.signature = ci, oe.signature = ci;
    var di = Object(ea.a)("bitAnd", ["typed", "matrix", "equalScalar"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = qn({
            typed: t,
            equalScalar: n
          }),
          r = Bn({
            typed: t,
            equalScalar: n
          }),
          s = zn({
            typed: t,
            equalScalar: n
          }),
          o = wn({
            typed: t
          }),
          l = kn({
            typed: t
          }),
          p = t("bitAnd", {
            "number, number": te,
            "BigNumber, BigNumber": Z,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return r(e, t, p, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return i(t, e, p, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return i(e, t, p, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return o(e, t, p)
            },
            "Array, Array": function (e, t) {
              return p(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return p(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return p(e, a(t))
            },
            "SparseMatrix, any": function (e, t) {
              return s(e, t, p, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return l(e, t, p, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return s(t, e, p, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return l(t, e, p, !0)
            },
            "Array, any": function (e, t) {
              return l(a(e), t, p, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return l(a(t), e, p, !0).valueOf()
            }
          });
        return p
      }),
      ui = "bitNot",
      gi = Object(ea.a)(ui, ["typed"], function (e) {
        var t = e.typed,
          a = t(ui, {
            number: ae,
            BigNumber: V,
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      yi = "bitOr",
      xi = Object(ea.a)(yi, ["typed", "matrix", "equalScalar", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.DenseMatrix,
          r = _n({
            typed: t
          }),
          s = Cn({
            typed: t,
            equalScalar: n
          }),
          o = En({
            typed: t,
            DenseMatrix: i
          }),
          l = wn({
            typed: t
          }),
          p = kn({
            typed: t
          }),
          m = t(yi, {
            "number, number": ne,
            "BigNumber, BigNumber": W,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, m)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return r(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return r(e, t, m, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, m)
            },
            "Array, Array": function (e, t) {
              return m(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, a(t))
            },
            "SparseMatrix, any": function (e, t) {
              return o(e, t, m, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return p(e, t, m, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return o(t, e, m, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return p(t, e, m, !0)
            },
            "Array, any": function (e, t) {
              return p(a(e), t, m, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return p(a(t), e, m, !0).valueOf()
            }
          });
        return m
      }),
      fi = Object(ea.a)("algorithm07", ["typed", "DenseMatrix"], function (e) {
        function t(e, t, a, n, r) {
          for (var s = e._values, o = e._index, l = e._ptr, p = l[t], m = l[t + 1], c; p < m; p++) c = o[p], a[c] = r, n[c] = s[p]
        }
        var n = e.typed,
          r = e.DenseMatrix;
        return function (e, a, s) {
          var o = e._size,
            l = e._datatype,
            p = a._size,
            m = a._datatype;
          if (o.length !== p.length) throw new ha.a(o.length, p.length);
          if (o[0] !== p[0] || o[1] !== p[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + p + ")");
          var d = o[0],
            u = o[1],
            g = 0,
            y = s,
            x;
          "string" == typeof l && l === m && (x = l, g = n.convert(0, x), y = n.find(s, [x, x]));
          var f = [],
            h, b;
          for (h = 0; h < d; h++) f[h] = [];
          var v = new r({
              data: f,
              size: [d, u],
              datatype: x
            }),
            c = [],
            N = [],
            M = [],
            S = [];
          for (b = 0; b < u; b++) {
            var A = b + 1;
            for (t(e, b, M, c, A), t(a, b, S, N, A), h = 0; h < d; h++) {
              var O = M[h] === A ? c[h] : g,
                _ = S[h] === A ? N[h] : g;
              f[h][b] = y(O, _)
            }
          }
          return v
        }
      }),
      hi = "bitXor",
      bi = Object(ea.a)(hi, ["typed", "matrix", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.DenseMatrix,
          i = Fn({
            typed: t
          }),
          r = fi({
            typed: t,
            DenseMatrix: n
          }),
          s = Gn({
            typed: t,
            DenseMatrix: n
          }),
          o = wn({
            typed: t
          }),
          l = kn({
            typed: t
          }),
          p = t(hi, {
            "number, number": ie,
            "BigNumber, BigNumber": X,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return r(e, t, p)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return i(t, e, p, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return i(e, t, p, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return o(e, t, p)
            },
            "Array, Array": function (e, t) {
              return p(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return p(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return p(e, a(t))
            },
            "SparseMatrix, any": function (e, t) {
              return s(e, t, p, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return l(e, t, p, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return s(t, e, p, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return l(t, e, p, !0)
            },
            "Array, any": function (e, t) {
              return l(a(e), t, p, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return l(a(t), e, p, !0).valueOf()
            }
          });
        return p
      }),
      vi = "arg",
      Ni = Object(ea.a)(vi, ["typed"], function (e) {
        var t = e.typed,
          a = t(vi, {
            number: function (e) {
              return Math.atan2(0, e)
            },
            BigNumber: function (e) {
              return e.constructor.atan2(0, e)
            },
            Complex: function (e) {
              return e.arg()
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      Mi = "conj",
      Si = Object(ea.a)(Mi, ["typed"], function (e) {
        var t = e.typed,
          a = t(Mi, {
            number: function (e) {
              return e
            },
            BigNumber: function (e) {
              return e
            },
            Complex: function (e) {
              return e.conjugate()
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      Ai = "im",
      Oi = Object(ea.a)(Ai, ["typed"], function (e) {
        var t = e.typed,
          a = t(Ai, {
            number: function () {
              return 0
            },
            BigNumber: function (e) {
              return e.mul(0)
            },
            Complex: function (e) {
              return e.im
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      _i = "re",
      Ci = Object(ea.a)(_i, ["typed"], function (e) {
        var t = e.typed,
          a = t(_i, {
            number: function (e) {
              return e
            },
            BigNumber: function (e) {
              return e
            },
            Complex: function (e) {
              return e.re
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      Ei = "number, number";
    le.signature = "number", pe.signature = Ei, me.signature = Ei, ce.signature = Ei;
    var wi = Object(ea.a)("not", ["typed"], function (e) {
        var t = e.typed,
          a = t("not", {
            number: le,
            Complex: function (e) {
              return 0 === e.re && 0 === e.im
            },
            BigNumber: function (e) {
              return e.isZero() || e.isNaN()
            },
            Unit: function (e) {
              return null === e.value || a(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      ki = "or",
      Ti = Object(ea.a)(ki, ["typed", "matrix", "equalScalar", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.DenseMatrix,
          r = Fn({
            typed: t
          }),
          s = Hn({
            typed: t,
            equalScalar: n
          }),
          o = Gn({
            typed: t,
            DenseMatrix: i
          }),
          l = wn({
            typed: t
          }),
          p = kn({
            typed: t
          }),
          m = t(ki, {
            "number, number": pe,
            "Complex, Complex": function (e, t) {
              return 0 !== e.re || 0 !== e.im || 0 !== t.re || 0 !== t.im
            },
            "BigNumber, BigNumber": function (e, t) {
              return !e.isZero() && !e.isNaN() || !t.isZero() && !t.isNaN()
            },
            "Unit, Unit": function (e, t) {
              return m(e.value || 0, t.value || 0)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, m)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return r(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return r(e, t, m, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, m)
            },
            "Array, Array": function (e, t) {
              return m(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, a(t))
            },
            "SparseMatrix, any": function (e, t) {
              return o(e, t, m, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return p(e, t, m, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return o(t, e, m, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return p(t, e, m, !0)
            },
            "Array, any": function (e, t) {
              return p(a(e), t, m, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return p(a(t), e, m, !0).valueOf()
            }
          });
        return m
      }),
      Ii = "xor",
      qi = Object(ea.a)(Ii, ["typed", "matrix", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.DenseMatrix,
          i = Fn({
            typed: t
          }),
          r = fi({
            typed: t,
            DenseMatrix: n
          }),
          s = Gn({
            typed: t,
            DenseMatrix: n
          }),
          o = wn({
            typed: t
          }),
          l = kn({
            typed: t
          }),
          p = t(Ii, {
            "number, number": me,
            "Complex, Complex": function (e, t) {
              return (0 !== e.re || 0 !== e.im) != (0 !== t.re || 0 !== t.im)
            },
            "BigNumber, BigNumber": function (e, t) {
              return (!e.isZero() && !e.isNaN()) != (!t.isZero() && !t.isNaN())
            },
            "Unit, Unit": function (e, t) {
              return p(e.value || 0, t.value || 0)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return r(e, t, p)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return i(t, e, p, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return i(e, t, p, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return o(e, t, p)
            },
            "Array, Array": function (e, t) {
              return p(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return p(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return p(e, a(t))
            },
            "SparseMatrix, any": function (e, t) {
              return s(e, t, p, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return l(e, t, p, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return s(t, e, p, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return l(t, e, p, !0)
            },
            "Array, any": function (e, t) {
              return l(a(e), t, p, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return l(a(t), e, p, !0).valueOf()
            }
          });
        return p
      }),
      Bi = "concat",
      zi = Object(ea.a)(Bi, ["typed", "matrix", "isInteger"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.isInteger;
        return t(Bi, {
          "...Array | Matrix | number | BigNumber": function (e) {
            var t = e.length,
              r = -1,
              s = !1,
              o = [],
              l, p;
            for (l = 0; l < t; l++) {
              var c = e[l];
              if (Object(Yt.v)(c) && (s = !0), Object(Yt.y)(c) || Object(Yt.e)(c)) {
                if (l !== t - 1) throw new Error("Dimension must be specified as last argument");
                if (p = r, r = c.valueOf(), !n(r)) throw new TypeError("Integer number expected for dimension");
                if (0 > r || 0 < l && r > p) throw new Ma.a(r, p + 1)
              } else {
                var d = Object(fa.a)(c).valueOf(),
                  m = Object(ya.a)(d);
                if (o[l] = d, p = r, r = m.length - 1, 0 < l && r !== p) throw new ha.a(p + 1, r + 1)
              }
            }
            if (0 === o.length) throw new SyntaxError("At least one matrix expected");
            for (var u = o.shift(); o.length;) u = de(u, o.shift(), r, 0);
            return s ? a(u) : u
          },
          "...string": function (e) {
            return e.join("")
          }
        })
      }),
      ji = "column",
      Di = Object(ea.a)(ji, ["typed", "Index", "matrix", "range"], function (e) {
        function t(e, t) {
          if (2 !== e.size().length) throw new Error("Only two dimensional matrix is supported");
          Object(ya.s)(t, e.size()[1]);
          var a = r(0, e.size()[0]),
            i = new n(a, t);
          return e.subset(i)
        }
        var a = e.typed,
          n = e.Index,
          i = e.matrix,
          r = e.range,
          s = a(ji, {
            "Matrix, number": t,
            "Array, number": function (e, a) {
              return t(i(Object(fa.a)(e)), a).valueOf()
            }
          });
        return s
      }),
      Pi = "cross",
      Ri = Object(ea.a)(Pi, ["typed", "matrix", "subtract", "multiply"], function (e) {
        function t(e, t) {
          var a = Math.max(Object(ya.a)(e).length, Object(ya.a)(t).length);
          e = Object(ya.p)(e), t = Object(ya.p)(t);
          var n = Object(ya.a)(e),
            s = Object(ya.a)(t);
          if (1 !== n.length || 1 !== s.length || 3 !== n[0] || 3 !== s[0]) throw new RangeError("Vectors with length 3 expected (Size A = [" + n.join(", ") + "], B = [" + s.join(", ") + "])");
          var o = [i(r(e[1], t[2]), r(e[2], t[1])), i(r(e[2], t[0]), r(e[0], t[2])), i(r(e[0], t[1]), r(e[1], t[0]))];
          return 1 < a ? [o] : o
        }
        var a = e.typed,
          n = e.matrix,
          i = e.subtract,
          r = e.multiply;
        return a(Pi, {
          "Matrix, Matrix": function (e, a) {
            return n(t(e.toArray(), a.toArray()))
          },
          "Matrix, Array": function (e, a) {
            return n(t(e.toArray(), a))
          },
          "Array, Matrix": function (e, a) {
            return n(t(e, a.toArray()))
          },
          "Array, Array": t
        })
      }),
      Ui = "diag",
      Li = Object(ea.a)(Ui, ["typed", "matrix", "DenseMatrix", "SparseMatrix"], function (e) {
        function t(e, t, i, r) {
          if (!Object(Kt.i)(t)) throw new TypeError("Second parameter in function diag must be an integer");
          var s = 0 < t ? t : 0,
            o = 0 > t ? -t : 0;
          switch (i.length) {
            case 1:
              return a(e, t, r, i[0], o, s);
            case 2:
              return n(e, t, r, i, o, s);
          }
          throw new RangeError("Matrix for function diag must be 2 dimensional")
        }

        function a(e, t, a, n, i, r) {
          var l = [n + i, n + r];
          if (a && "sparse" !== a && "dense" !== a) throw new TypeError("Unknown matrix type ".concat(a, "\""));
          var p = "sparse" === a ? o.diagonal(l, e, t) : s.diagonal(l, e, t);
          return null === a ? p.valueOf() : p
        }

        function n(e, t, a, o, s, l) {
          if (Object(Yt.v)(e)) {
            var p = e.diagonal(t);
            return null === a ? p.valueOf() : a === p.storage() ? p : r(p, a)
          }
          for (var m = Math.min(o[0] - s, o[1] - l), n = [], c = 0; c < m; c++) n[c] = e[c + s][c + l];
          return null === a ? n : r(n)
        }
        var i = e.typed,
          r = e.matrix,
          s = e.DenseMatrix,
          o = e.SparseMatrix;
        return i(Ui, {
          Array: function (e) {
            return t(e, 0, Object(ya.a)(e), null)
          },
          "Array, number": function (e, a) {
            return t(e, a, Object(ya.a)(e), null)
          },
          "Array, BigNumber": function (e, a) {
            return t(e, a.toNumber(), Object(ya.a)(e), null)
          },
          "Array, string": function (e, a) {
            return t(e, 0, Object(ya.a)(e), a)
          },
          "Array, number, string": function (e, a, n) {
            return t(e, a, Object(ya.a)(e), n)
          },
          "Array, BigNumber, string": function (e, a, n) {
            return t(e, a.toNumber(), Object(ya.a)(e), n)
          },
          Matrix: function (e) {
            return t(e, 0, e.size(), e.storage())
          },
          "Matrix, number": function (e, a) {
            return t(e, a, e.size(), e.storage())
          },
          "Matrix, BigNumber": function (e, a) {
            return t(e, a.toNumber(), e.size(), e.storage())
          },
          "Matrix, string": function (e, a) {
            return t(e, 0, e.size(), a)
          },
          "Matrix, number, string": function (e, a, n) {
            return t(e, a, e.size(), n)
          },
          "Matrix, BigNumber, string": function (e, a, n) {
            return t(e, a.toNumber(), e.size(), n)
          }
        })
      }),
      Fi = Object(ea.a)("eye", [], function () {
        return function () {
          throw new Error("Function \"eye\" is renamed to \"identity\" since mathjs version 5.0.0. To keep eye working, create an alias for it using \"math.import({eye: math.identity}, {override: true})\"")
        }
      }),
      Hi = Object(ea.a)("filter", ["typed"], function (e) {
        var t = e.typed;
        return t("filter", {
          "Array, function": xe,
          "Matrix, function": function (e, t) {
            return e.create(xe(e.toArray(), t))
          },
          "Array, RegExp": ya.d,
          "Matrix, RegExp": function (e, t) {
            return e.create(Object(ya.d)(e.toArray(), t))
          }
        })
      }),
      Gi = "flatten",
      $i = Object(ea.a)(Gi, ["typed", "matrix"], function (e) {
        var t = e.typed,
          a = e.matrix;
        return t(Gi, {
          Array: function (e) {
            return Object(ya.e)(Object(fa.a)(e))
          },
          Matrix: function (e) {
            var t = Object(ya.e)(Object(fa.a)(e.toArray()));
            return a(t)
          }
        })
      }),
      Zi = "forEach",
      Vi = Object(ea.a)(Zi, ["typed"], function (e) {
        var t = e.typed;
        return t(Zi, {
          "Array, function": fe,
          "Matrix, function": function (e, t) {
            return e.forEach(t)
          }
        })
      }),
      Wi = "getMatrixDataType",
      Ji = Object(ea.a)(Wi, ["typed"], function (e) {
        var t = e.typed;
        return t(Wi, {
          Array: function (e) {
            return Object(ya.h)(e, Yt.M)
          },
          Matrix: function (e) {
            return e.getDataType()
          }
        })
      }),
      Yi = "identity",
      Xi = Object(ea.a)(Yi, ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"], function (e) {
        function t(e, t) {
          switch (e.length) {
            case 0:
              return t ? r(t) : [];
            case 1:
              return a(e[0], e[0], t);
            case 2:
              return a(e[0], e[1], t);
            default:
              throw new Error("Vector containing two values expected");
          }
        }

        function a(e, t, a) {
          var n = Object(Yt.e)(e) || Object(Yt.e)(t) ? s : null;
          if (Object(Yt.e)(e) && (e = e.toNumber()), Object(Yt.e)(t) && (t = t.toNumber()), !Object(Kt.i)(e) || 1 > e) throw new Error("Parameters in function identity must be positive integers");
          if (!Object(Kt.i)(t) || 1 > t) throw new Error("Parameters in function identity must be positive integers");
          var i = n ? new s(1) : 1,
            r = n ? new n(0) : 0,
            p = [e, t];
          if (a) {
            if ("sparse" === a) return l.diagonal(p, i, 0, r);
            if ("dense" === a) return o.diagonal(p, i, 0, r);
            throw new TypeError("Unknown matrix type \"".concat(a, "\""))
          }
          for (var m = Object(ya.o)([], p, r), c = e < t ? e : t, u = 0; u < c; u++) m[u][u] = i;
          return m
        }
        var n = e.typed,
          i = e.config,
          r = e.matrix,
          s = e.BigNumber,
          o = e.DenseMatrix,
          l = e.SparseMatrix;
        return n(Yi, {
          "": function () {
            return "Matrix" === i.matrix ? r([]) : []
          },
          string: function (e) {
            return r(e)
          },
          "number | BigNumber": function (e) {
            return a(e, e, "Matrix" === i.matrix ? "dense" : void 0)
          },
          "number | BigNumber, string": function (e, t) {
            return a(e, e, t)
          },
          "number | BigNumber, number | BigNumber": function (e, t) {
            return a(e, t, "Matrix" === i.matrix ? "dense" : void 0)
          },
          "number | BigNumber, number | BigNumber, string": function (e, t, n) {
            return a(e, t, n)
          },
          Array: function (e) {
            return t(e)
          },
          "Array, string": function (e, a) {
            return t(e, a)
          },
          Matrix: function (e) {
            return t(e.valueOf(), e.storage())
          },
          "Matrix, string": function (e, a) {
            return t(e.valueOf(), a)
          }
        })
      }),
      Qi = "kron",
      Ki = Object(ea.a)(Qi, ["typed", "matrix", "multiplyScalar"], function (e) {
        function t(e, n) {
          if (1 === Object(ya.a)(e).length && (e = [e]), 1 === Object(ya.a)(n).length && (n = [n]), 2 < Object(ya.a)(e).length || 2 < Object(ya.a)(n).length) throw new RangeError("Vectors with dimensions greater then 2 are not supported expected (Size x = " + JSON.stringify(e.length) + ", y = " + JSON.stringify(n.length) + ")");
          var s = [],
            t = [];
          return e.map(function (e) {
            return n.map(function (a) {
              return t = [], s.push(t), e.map(function (e) {
                return a.map(function (a) {
                  return t.push(i(e, a))
                })
              })
            })
          }) && s
        }
        var a = e.typed,
          n = e.matrix,
          i = e.multiplyScalar;
        return a(Qi, {
          "Matrix, Matrix": function (e, a) {
            return n(t(e.toArray(), a.toArray()))
          },
          "Matrix, Array": function (e, a) {
            return n(t(e.toArray(), a))
          },
          "Array, Matrix": function (e, a) {
            return n(t(e, a.toArray()))
          },
          "Array, Array": t
        })
      }),
      er = "map",
      tr = Object(ea.a)(er, ["typed"], function (e) {
        var t = e.typed;
        return t(er, {
          "Array, function": he,
          "Matrix, function": function (e, t) {
            return e.map(t)
          }
        })
      }),
      ar = Object(ea.a)("ones", ["typed", "config", "matrix", "BigNumber"], function (e) {
        function t(e, t) {
          var i = a(e),
            r = i ? new o(1) : 1;
          if (n(e), t) {
            var l = s(t);
            return 0 < e.length ? l.resize(e, r) : l
          }
          var p = [];
          return 0 < e.length ? Object(ya.o)(p, e, r) : p
        }

        function a(e) {
          var t = !1;
          return e.forEach(function (e, a, n) {
            Object(Yt.e)(e) && (t = !0, n[a] = e.toNumber())
          }), t
        }

        function n(e) {
          e.forEach(function (e) {
            if ("number" != typeof e || !Object(Kt.i)(e) || 0 > e) throw new Error("Parameters in function ones must be positive integers")
          })
        }
        var i = e.typed,
          r = e.config,
          s = e.matrix,
          o = e.BigNumber;
        return i("ones", {
          "": function () {
            return "Array" === r.matrix ? t([]) : t([], "default")
          },
          "...number | BigNumber | string": function (e) {
            var a = e[e.length - 1];
            if ("string" == typeof a) {
              var n = e.pop();
              return t(e, n)
            }
            return "Array" === r.matrix ? t(e) : t(e, "default")
          },
          Array: t,
          Matrix: function (e) {
            var a = e.storage();
            return t(e.valueOf(), a)
          },
          "Array | Matrix, string": function (e, a) {
            return t(e.valueOf(), a)
          }
        })
      }),
      nr = "range",
      ir = Object(ea.a)(nr, ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq"], function (e) {
        function t(e) {
          return "Matrix" === m.matrix ? c ? c(e) : Ne() : e
        }

        function a(e, a) {
          var p = l(e);
          if (!p) throw new SyntaxError("String \"" + e + "\" is no valid range");
          var r;
          return "BigNumber" === m.number ? (void 0 === d && be(), r = a ? o : s, t(r(d(p.start), d(p.end), d(p.step)))) : (r = a ? i : n, t(r(p.start, p.end, p.step)))
        }

        function n(e, t, a) {
          var n = [],
            i = e;
          if (0 < a)
            for (; u(i, t);) n.push(i), i += a;
          else if (0 > a)
            for (; y(i, t);) n.push(i), i += a;
          return n
        }

        function i(e, t, a) {
          var n = [],
            i = e;
          if (0 < a)
            for (; g(i, t);) n.push(i), i += a;
          else if (0 > a)
            for (; f(i, t);) n.push(i), i += a;
          return n
        }

        function s(e, t, a) {
          var n = d(0),
            i = [],
            r = e;
          if (a.gt(n))
            for (; u(r, t);) i.push(r), r = r.plus(a);
          else if (a.lt(n))
            for (; y(r, t);) i.push(r), r = r.plus(a);
          return i
        }

        function o(e, t, a) {
          var n = d(0),
            i = [],
            r = e;
          if (a.gt(n))
            for (; g(r, t);) i.push(r), r = r.plus(a);
          else if (a.lt(n))
            for (; f(r, t);) i.push(r), r = r.plus(a);
          return i
        }

        function l(e) {
          var t = e.split(":"),
            a = t.map(function (e) {
              return +e
            }),
            n = a.some(function (e) {
              return isNaN(e)
            });
          if (n) return null;
          switch (a.length) {
            case 2:
              return {
                start: a[0], end: a[1], step: 1
              };
            case 3:
              return {
                start: a[0], end: a[2], step: a[1]
              };
            default:
              return null;
          }
        }
        var p = e.typed,
          m = e.config,
          c = e.matrix,
          d = e.bignumber,
          u = e.smaller,
          g = e.smallerEq,
          y = e.larger,
          f = e.largerEq;
        return p(nr, {
          string: a,
          "string, boolean": a,
          "number, number": function (e, a) {
            return t(n(e, a, 1))
          },
          "number, number, number": function (e, a, i) {
            return t(n(e, a, i))
          },
          "number, number, boolean": function (e, a, r) {
            return r ? t(i(e, a, 1)) : t(n(e, a, 1))
          },
          "number, number, number, boolean": function (e, a, r, s) {
            return s ? t(i(e, a, r)) : t(n(e, a, r))
          },
          "BigNumber, BigNumber": function (e, a) {
            var n = e.constructor;
            return t(s(e, a, new n(1)))
          },
          "BigNumber, BigNumber, BigNumber": function (e, a, n) {
            return t(s(e, a, n))
          },
          "BigNumber, BigNumber, boolean": function (e, a, n) {
            var i = e.constructor;
            return n ? t(o(e, a, new i(1))) : t(s(e, a, new i(1)))
          },
          "BigNumber, BigNumber, BigNumber, boolean": function (e, a, n, i) {
            return i ? t(o(e, a, n)) : t(s(e, a, n))
          }
        })
      }),
      rr = "reshape",
      sr = Object(ea.a)(rr, ["typed", "isInteger", "matrix"], function (e) {
        var t = e.typed,
          a = e.isInteger,
          n = e.matrix;
        return t(rr, {
          "Matrix, Array": function (e, t) {
            return e.reshape ? e.reshape(t) : n(Object(ya.n)(e.valueOf(), t))
          },
          "Array, Array": function (e, t) {
            return t.forEach(function (e) {
              if (!a(e)) throw new TypeError("Invalid size for dimension: " + e)
            }), Object(ya.n)(e, t)
          }
        })
      }),
      or = a(13),
      lr = Object(ea.a)("resize", ["config", "matrix"], function (e) {
        function t(e, t, a) {
          if (!(a !== void 0)) a = " ";
          else if ("string" != typeof a || 1 !== a.length) throw new TypeError("Single character expected as defaultValue");
          if (1 !== t.length) throw new ha.a(t.length, 1);
          var n = t[0];
          if ("number" != typeof n || !Object(Kt.i)(n)) throw new TypeError("Invalid size, must contain positive integers (size: " + Object(xa.d)(t) + ")");
          if (e.length > n) return e.substring(0, n);
          if (e.length < n) {
            for (var r = e, s = 0, o = n - e.length; s < o; s++) r += a;
            return r
          }
          return e
        }
        var a = e.config,
          n = e.matrix;
        return function (e, i, r) {
          if (2 !== arguments.length && 3 !== arguments.length) throw new or.a("resize", arguments.length, 2, 3);
          if (Object(Yt.v)(i) && (i = i.valueOf()), Object(Yt.e)(i[0]) && (i = i.map(function (e) {
              return Object(Yt.e)(e) ? e.toNumber() : e
            })), Object(Yt.v)(e)) return e.resize(i, r, !0);
          if ("string" == typeof e) return t(e, i, r);
          var s = !Array.isArray(e) && "Array" !== a.matrix;
          if (0 === i.length) {
            for (; Array.isArray(e);) e = e[0];
            return Object(fa.a)(e)
          }
          Array.isArray(e) || (e = [e]), e = Object(fa.a)(e);
          var o = Object(ya.o)(e, i, r);
          return s ? n(o) : o
        }
      }),
      pr = "row",
      mr = Object(ea.a)(pr, ["typed", "Index", "matrix", "range"], function (e) {
        function t(e, t) {
          if (2 !== e.size().length) throw new Error("Only two dimensional matrix is supported");
          Object(ya.s)(t, e.size()[0]);
          var a = r(0, e.size()[1]),
            i = new n(t, a);
          return e.subset(i)
        }
        var a = e.typed,
          n = e.Index,
          i = e.matrix,
          r = e.range,
          s = a(pr, {
            "Matrix, number": t,
            "Array, number": function (e, a) {
              return t(i(Object(fa.a)(e)), a).valueOf()
            }
          });
        return s
      }),
      cr = "size",
      dr = Object(ea.a)(cr, ["typed", "config", "?matrix"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.matrix;
        return t(cr, {
          Matrix: function (e) {
            return e.create(e.size())
          },
          Array: ya.a,
          string: function (e) {
            return "Array" === a.matrix ? [e.length] : n([e.length])
          },
          "number | Complex | BigNumber | Unit | boolean | null": function () {
            return "Array" === a.matrix ? [] : n ? n([]) : Ne()
          }
        })
      }),
      ur = "squeeze",
      gr = Object(ea.a)(ur, ["typed", "matrix"], function (e) {
        var t = e.typed,
          a = e.matrix;
        return t(ur, {
          Array: function (e) {
            return Object(ya.p)(Object(fa.a)(e))
          },
          Matrix: function (e) {
            var t = Object(ya.p)(e.toArray());
            return Array.isArray(t) ? a(t) : t
          },
          any: function (e) {
            return Object(fa.a)(e)
          }
        })
      }),
      yr = {
        length: !0,
        name: !0
      },
      xr = {
        toString: !0,
        valueOf: !0,
        toLocaleString: !0
      },
      fr = "subset",
      hr = Object(ea.a)(fr, ["typed", "matrix"], function (e) {
        var t = e.typed,
          a = e.matrix;
        return t(fr, {
          "Array, Index": function (e, t) {
            var n = a(e),
              i = n.subset(t);
            return t.isScalar() ? i : i.valueOf()
          },
          "Matrix, Index": function (e, t) {
            return e.subset(t)
          },
          "Object, Index": Te,
          "string, Index": we,
          "Array, Index, any": function (e, t, n) {
            return a(Object(fa.a)(e)).subset(t, n, void 0).valueOf()
          },
          "Array, Index, any, any": function (e, t, n, i) {
            return a(Object(fa.a)(e)).subset(t, n, i).valueOf()
          },
          "Matrix, Index, any": function (e, t, a) {
            return e.clone().subset(t, a)
          },
          "Matrix, Index, any, any": function (e, t, a, n) {
            return e.clone().subset(t, a, n)
          },
          "string, Index, string": ke,
          "string, Index, string, string": ke,
          "Object, Index, any": Ie
        })
      }),
      br = Object(ea.a)("transpose", ["typed", "matrix"], function (e) {
        function t(e, t, a) {
          for (var n = e._data, r = [], s = 0, o; s < a; s++) {
            o = r[s] = [];
            for (var l = 0; l < t; l++) o[l] = Object(fa.a)(n[l][s])
          }
          return e.createDenseMatrix({
            data: r,
            size: [a, t],
            datatype: e._datatype
          })
        }

        function a(e, t, a) {
          for (var n = e._values, r = e._index, s = e._ptr, o = n ? [] : void 0, m = [], c = [], d = [], u = 0; u < t; u++) d[u] = 0;
          var g, y, f;
          for (g = 0, y = r.length; g < y; g++) d[r[g]]++;
          for (var h = 0, b = 0; b < t; b++) c.push(h), h += d[b], d[b] = c[b];
          for (c.push(h), f = 0; f < a; f++)
            for (var v = s[f], N = s[f + 1], M = v, S; M < N; M++) S = d[r[M]]++, m[S] = f, n && (o[S] = Object(fa.a)(n[M]));
          return e.createSparseMatrix({
            values: o,
            index: m,
            ptr: c,
            size: [a, t],
            datatype: e._datatype
          })
        }
        var n = e.typed,
          i = e.matrix,
          r = n("transpose", {
            Array: function (e) {
              return r(i(e)).valueOf()
            },
            Matrix: function (e) {
              var n = e.size(),
                i;
              switch (n.length) {
                case 1:
                  i = e.clone();
                  break;
                case 2:
                  var r = n[0],
                    s = n[1];
                  if (0 === s) throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + Object(xa.d)(n) + ")");
                  switch (e.storage()) {
                    case "dense":
                      i = t(e, r, s);
                      break;
                    case "sparse":
                      i = a(e, r, s);
                  }
                  break;
                default:
                  throw new RangeError("Matrix must be a vector or two dimensional (size: " + Object(xa.d)(this._size) + ")");
              }
              return i
            },
            any: function (e) {
              return Object(fa.a)(e)
            }
          });
        return r
      }),
      vr = "ctranspose",
      Nr = Object(ea.a)(vr, ["typed", "transpose", "conj"], function (e) {
        var t = e.typed,
          a = e.transpose,
          n = e.conj;
        return t(vr, {
          any: function (e) {
            return n(a(e))
          }
        })
      }),
      Mr = "zeros",
      Sr = Object(ea.a)(Mr, ["typed", "config", "matrix", "BigNumber"], function (e) {
        function t(e, t) {
          var i = a(e),
            r = i ? new o(0) : 0;
          if (n(e), t) {
            var l = s(t);
            return 0 < e.length ? l.resize(e, r) : l
          }
          var p = [];
          return 0 < e.length ? Object(ya.o)(p, e, r) : p
        }

        function a(e) {
          var t = !1;
          return e.forEach(function (e, a, n) {
            Object(Yt.e)(e) && (t = !0, n[a] = e.toNumber())
          }), t
        }

        function n(e) {
          e.forEach(function (e) {
            if ("number" != typeof e || !Object(Kt.i)(e) || 0 > e) throw new Error("Parameters in function zeros must be positive integers")
          })
        }
        var i = e.typed,
          r = e.config,
          s = e.matrix,
          o = e.BigNumber;
        return i(Mr, {
          "": function () {
            return "Array" === r.matrix ? t([]) : t([], "default")
          },
          "...number | BigNumber | string": function (e) {
            var a = e[e.length - 1];
            if ("string" == typeof a) {
              var n = e.pop();
              return t(e, n)
            }
            return "Array" === r.matrix ? t(e) : t(e, "default")
          },
          Array: t,
          Matrix: function (e) {
            var a = e.storage();
            return t(e.valueOf(), a)
          },
          "Array | Matrix, string": function (e, a) {
            return t(e.valueOf(), a)
          }
        })
      }),
      Ar = Object(ea.a)("erf", ["typed"], function (e) {
        function t(e) {
          var t = e * e,
            a = Or[0][4] * t,
            n = t,
            r;
          for (r = 0; 3 > r; r += 1) a = (a + Or[0][r]) * t, n = (n + _r[0][r]) * t;
          return e * (a + Or[0][3]) / (n + _r[0][3])
        }

        function a(e) {
          var t = Or[1][8] * e,
            a = e,
            n;
          for (n = 0; 7 > n; n += 1) t = (t + Or[1][n]) * e, a = (a + _r[1][n]) * e;
          var r = (t + Or[1][7]) / (a + _r[1][7]),
            s = parseInt(16 * e) / 16;
          return Math.exp(-s * s) * Math.exp(-((e - s) * (e + s))) * r
        }

        function n(e) {
          var t = 1 / (e * e),
            a = Or[2][5] * t,
            n = t,
            r;
          for (r = 0; 4 > r; r += 1) a = (a + Or[2][r]) * t, n = (n + _r[2][r]) * t;
          var s = t * (a + Or[2][4]) / (n + _r[2][4]);
          s = (.5641895835477563 - s) / e, t = parseInt(16 * e) / 16;
          var o = (e - t) * (e + t);
          return Math.exp(-t * t) * Math.exp(-o) * s
        }
        var i = e.typed,
          r = i("name", {
            number: function (e) {
              var i = Math.abs(e);
              return i >= Q ? Object(Kt.n)(e) : i <= .46875 ? Object(Kt.n)(e) * t(i) : 4 >= i ? Object(Kt.n)(e) * (1 - a(i)) : Object(Kt.n)(e) * (1 - n(i))
            },
            "Array | Matrix": function (e) {
              return m(e, r)
            }
          });
        return r
      }),
      Or = [
        [3.1611237438705655, 113.86415415105016, 377.485237685302, 3209.3775891384694, .18577770618460315],
        [.5641884969886701, 8.883149794388377, 66.11919063714163, 298.6351381974001, 881.952221241769, 1712.0476126340707, 2051.0783778260716, 1230.3393547979972, 2.1531153547440383e-8],
        [.30532663496123236, .36034489994980445, .12578172611122926, .016083785148742275, .0006587491615298378, .016315387137302097]
      ],
      _r = [
        [23.601290952344122, 244.02463793444417, 1282.6165260773723, 2844.236833439171],
        [15.744926110709835, 117.6939508913125, 537.1811018620099, 1621.3895745666903, 3290.7992357334597, 4362.619090143247, 3439.3676741437216, 1230.3393548037495],
        [2.568520192289822, 1.8729528499234604, .5279051029514285, .06051834131244132, .0023352049762686918]
      ],
      Q = Math.pow(2, 53),
      Cr = "mode",
      Er = Object(ea.a)(Cr, ["typed", "isNaN", "isNumeric"], function (e) {
        function t(e) {
          e = Object(ya.e)(e.valueOf());
          var t = e.length;
          if (0 === t) throw new Error("Cannot calculate mode of an empty array");
          for (var a = {}, s = [], o = 0, l = 0, p; l < e.length; l++) {
            if (p = e[l], r(p) && n(p)) throw new Error("Cannot calculate mode of an array containing NaN values");
            p in a || (a[p] = 0), a[p]++, a[p] === o ? s.push(p) : a[p] > o && (o = a[p], s = [p])
          }
          return s
        }
        var a = e.typed,
          n = e.isNaN,
          r = e.isNumeric;
        return a(Cr, {
          "Array | Matrix": t,
          "...": function (e) {
            return t(e)
          }
        })
      }),
      wr = "prod",
      kr = Object(ea.a)(wr, ["typed", "multiply"], function (e) {
        function t(e) {
          var t;
          if (p(e, function (e) {
              try {
                t = void 0 === t ? e : n(t, e)
              } catch (t) {
                throw qe(t, "prod", e)
              }
            }), void 0 === t) throw new Error("Cannot calculate prod of an empty array");
          return t
        }
        var a = e.typed,
          n = e.multiply;
        return a(wr, {
          "Array | Matrix": t,
          "Array | Matrix, number | BigNumber": function () {
            throw new Error("prod(A, dim) is not yet supported")
          },
          "...": function (e) {
            return t(e)
          }
        })
      }),
      Tr = "format",
      Ir = Object(ea.a)(Tr, ["typed"], function (e) {
        var t = e.typed;
        return t(Tr, {
          any: xa.d,
          "any, Object | function | number": xa.d
        })
      }),
      qr = "print",
      Br = Object(ea.a)(qr, ["typed"], function (e) {
        var t = e.typed;
        return t(qr, {
          "string, Object | Array": Be,
          "string, Object | Array, number | Object": Be
        })
      }),
      zr = "to",
      jr = Object(ea.a)(zr, ["typed", "matrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = wn({
            typed: t
          }),
          i = kn({
            typed: t
          }),
          r = t(zr, {
            "Unit, Unit | string": function (e, t) {
              return e.to(t)
            },
            "Matrix, Matrix": function (e, t) {
              return n(e, t, r)
            },
            "Array, Array": function (e, t) {
              return r(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return r(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return r(e, a(t))
            },
            "Matrix, any": function (e, t) {
              return i(e, t, r, !1)
            },
            "any, Matrix": function (e, t) {
              return i(t, e, r, !0)
            },
            "Array, any": function (e, t) {
              return i(a(e), t, r, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return i(a(t), e, r, !0).valueOf()
            }
          });
        return r
      }),
      Dr = "isPrime",
      Pr = Object(ea.a)(Dr, ["typed"], function (e) {
        var t = e.typed,
          a = t(Dr, {
            number: function (e) {
              if (2 > e) return !1;
              if (2 === e) return !0;
              if (0 == e % 2) return !1;
              for (var t = 3; t * t <= e; t += 2)
                if (0 == e % t) return !1;
              return !0
            },
            BigNumber: function (e) {
              if (e.lt(2)) return !1;
              if (e.equals(2)) return !0;
              if (e.mod(2).isZero()) return !1;
              for (var t = new e.constructor(3); t.times(t).lte(e); t = t.plus(1))
                if (e.mod(t).isZero()) return !1;
              return !0
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      Rr = Object(ea.a)("numeric", ["number", "?bignumber", "?fraction"], function (e) {
        var t = e.number,
          a = e.bignumber,
          n = e.fraction,
          i = {
            string: !0,
            number: !0,
            BigNumber: !0,
            Fraction: !0
          },
          r = {
            number: function (e) {
              return t(e)
            },
            BigNumber: a ? function (e) {
              return a(e)
            } : be,
            Fraction: n ? function (e) {
              return n(e)
            } : ve
          };
        return function (e, t) {
          var a = Object(Yt.M)(e);
          if (!(a in i)) throw new TypeError("Cannot convert " + e + " of type \"" + a + "\"; valid input types are " + Object.keys(i).join(", "));
          if (!(t in r)) throw new TypeError("Cannot convert " + e + " to type \"" + t + "\"; valid output types are " + Object.keys(r).join(", "));
          return t === a ? e : r[t](e)
        }
      }),
      Ur = "divideScalar",
      Lr = Object(ea.a)(Ur, ["typed", "numeric"], function (e) {
        var t = e.typed,
          a = e.numeric,
          n = t(Ur, {
            "number, number": function (e, t) {
              return e / t
            },
            "Complex, Complex": function (e, t) {
              return e.div(t)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.div(t)
            },
            "Fraction, Fraction": function (e, t) {
              return e.div(t)
            },
            "Unit, number | Fraction | BigNumber": function (e, t) {
              var i = e.clone(),
                r = a(1, Object(Yt.M)(t));
              return i.value = n(null === i.value ? i._normalize(r) : i.value, t), i
            },
            "number | Fraction | BigNumber, Unit": function (e, t) {
              var i = t.clone();
              i = i.pow(-1);
              var r = a(1, Object(Yt.M)(e));
              return i.value = n(e, null === t.value ? t._normalize(r) : t.value), i
            },
            "Unit, Unit": function (e, t) {
              return e.divide(t)
            }
          });
        return n
      }),
      Fr = "pow",
      Hr = Object(ea.a)(Fr, ["typed", "config", "identity", "multiply", "matrix", "fraction", "number", "Complex"], function (e) {
        function t(e, t) {
          if (r.predictable && !Object(Kt.i)(t) && 0 > e) try {
            var a = c(t),
              n = m(a);
            if ((t === n || 1e-14 > Math.abs((t - n) / t)) && 1 == a.d % 2) return (0 == a.n % 2 ? 1 : -1) * Math.pow(-e, t)
          } catch (e) {}
          return r.predictable && (-1 > e && t === 1 / 0 || -1 < e && 0 > e && t === -Infinity) ? NaN : Object(Kt.i)(t) || 0 <= e || r.predictable ? L(e, t) : 1 > e * e && t === 1 / 0 || 1 < e * e && t === -Infinity ? 0 : new d(e, 0).pow(t, 0)
        }

        function a(e, t) {
          if (!Object(Kt.i)(t) || 0 > t) throw new TypeError("For A^b, b must be a positive integer (value is " + t + ")");
          var a = Object(ya.a)(e);
          if (2 !== a.length) throw new Error("For A^b, A must be 2 dimensional (A has " + a.length + " dimensions)");
          if (a[0] !== a[1]) throw new Error("For A^b, A must be square (size is " + a[0] + "x" + a[1] + ")");
          for (var n = o(a[0]).valueOf(), i = e; 1 <= t;) 1 == (1 & t) && (n = l(i, n)), t >>= 1, i = l(i, i);
          return n
        }

        function n(e, t) {
          return p(a(e.valueOf(), t))
        }
        var i = e.typed,
          r = e.config,
          o = e.identity,
          l = e.multiply,
          p = e.matrix,
          m = e.number,
          c = e.fraction,
          d = e.Complex;
        return i(Fr, {
          "number, number": t,
          "Complex, Complex": function (e, t) {
            return e.pow(t)
          },
          "BigNumber, BigNumber": function (e, t) {
            return t.isInteger() || 0 <= e || r.predictable ? e.pow(t) : new d(e.toNumber(), 0).pow(t.toNumber(), 0)
          },
          "Fraction, Fraction": function (e, a) {
            if (1 === a.d) return e.pow(a);
            if (r.predictable) throw new Error("Function pow does not support non-integer exponents for fractions.");
            else return t(e.valueOf(), a.valueOf())
          },
          "Array, number": a,
          "Array, BigNumber": function (e, t) {
            return a(e, t.toNumber())
          },
          "Matrix, number": n,
          "Matrix, BigNumber": function (e, t) {
            return n(e, t.toNumber())
          },
          "Unit, number | BigNumber": function (e, t) {
            return e.pow(t)
          }
        })
      }),
      Gr = "Number of decimals in function round must be an integer",
      $r = "round",
      Zr = Object(ea.a)($r, ["typed", "matrix", "equalScalar", "zeros", "BigNumber", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.zeros,
          r = e.BigNumber,
          s = e.DenseMatrix,
          o = zn({
            typed: t,
            equalScalar: n
          }),
          l = Gn({
            typed: t,
            DenseMatrix: s
          }),
          p = kn({
            typed: t
          }),
          c = t($r, ze({}, Vr, {
            Complex: function (e) {
              return e.round()
            },
            "Complex, number": function (e, t) {
              if (t % 1) throw new TypeError(Gr);
              return e.round(t)
            },
            "Complex, BigNumber": function (e, t) {
              if (!t.isInteger()) throw new TypeError(Gr);
              var a = t.toNumber();
              return e.round(a)
            },
            "number, BigNumber": function (e, t) {
              if (!t.isInteger()) throw new TypeError(Gr);
              return new r(e).toDecimalPlaces(t.toNumber())
            },
            BigNumber: function (e) {
              return e.toDecimalPlaces(0)
            },
            "BigNumber, BigNumber": function (e, t) {
              if (!t.isInteger()) throw new TypeError(Gr);
              return e.toDecimalPlaces(t.toNumber())
            },
            Fraction: function (e) {
              return e.round()
            },
            "Fraction, number": function (e, t) {
              if (t % 1) throw new TypeError(Gr);
              return e.round(t)
            },
            "Array | Matrix": function (e) {
              return m(e, c, !0)
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return o(e, t, c, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return p(e, t, c, !1)
            },
            "number | Complex | BigNumber, SparseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : l(t, e, c, !0)
            },
            "number | Complex | BigNumber, DenseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : p(t, e, c, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return p(a(e), t, c, !1).valueOf()
            },
            "number | Complex | BigNumber, Array": function (e, t) {
              return p(a(t), e, c, !0).valueOf()
            }
          }));
        return c
      }),
      Vr = {
        number: F,
        "number, number": function (e, t) {
          if (!Object(Kt.i)(t)) throw new TypeError(Gr);
          if (0 > t || 15 < t) throw new Error("Number of decimals in function round must be in te range of 0-15");
          return F(e, t)
        }
      },
      Wr = Object(ea.a)($r, ["typed"], function (e) {
        var t = e.typed;
        return t($r, Vr)
      }),
      Jr = "log",
      Yr = Object(ea.a)(Jr, ["config", "typed", "divideScalar", "Complex"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.divideScalar,
          i = e.Complex,
          r = t(Jr, {
            number: function (e) {
              return 0 <= e || a.predictable ? q(e) : new i(e, 0).log()
            },
            Complex: function (e) {
              return e.log()
            },
            BigNumber: function (e) {
              return !e.isNegative() || a.predictable ? e.ln() : new i(e.toNumber(), 0).log()
            },
            "Array | Matrix": function (e) {
              return m(e, r)
            },
            "any, any": function (e, t) {
              return n(r(e), r(t))
            }
          });
        return r
      }),
      Xr = "log1p",
      Qr = Object(ea.a)(Xr, ["typed", "config", "divideScalar", "log", "Complex"], function (e) {
        function t(e) {
          var t = e.re + 1;
          return new s(Math.log(Math.sqrt(t * t + e.im * e.im)), Math.atan2(e.im, t))
        }
        var a = e.typed,
          n = e.config,
          i = e.divideScalar,
          r = e.log,
          s = e.Complex,
          o = a(Xr, {
            number: function (e) {
              return -1 <= e || n.predictable ? Object(Kt.k)(e) : t(new s(e, 0))
            },
            Complex: t,
            BigNumber: function (e) {
              var a = e.plus(1);
              return !a.isNegative() || n.predictable ? a.ln() : t(new s(e.toNumber(), 0))
            },
            "Array | Matrix": function (e) {
              return m(e, o)
            },
            "any, any": function (e, t) {
              return i(o(e), r(t))
            }
          });
        return o
      }),
      Kr = "nthRoots",
      es = Object(ea.a)(Kr, ["config", "typed", "divideScalar", "Complex"], function (e) {
        function t(e, t) {
          if (0 > t) throw new Error("Root must be greater than zero");
          if (0 === t) throw new Error("Root must be non-zero");
          if (0 != t % 1) throw new Error("Root must be an integer");
          if (0 === e || 0 === e.abs()) return [new s(0, 0)];
          var a = "number" == typeof e,
            n;
          (a || 0 === e.re || 0 === e.im) && (a ? n = 2 * +(0 > e) : 0 === e.im ? n = 2 * +(0 > e.re) : n = 2 * +(0 > e.im) + 1);
          for (var i = e.arg(), o = e.abs(), p = [], m = Math.pow(o, 1 / t), r = 0, c; r < t; r++) {
            if (c = (n + 4 * r) / t, c === Math.round(c)) {
              p.push(l[c % 4](m));
              continue
            }
            p.push(new s({
              r: m,
              phi: (i + 2 * Math.PI * r) / t
            }))
          }
          return p
        }
        var a = e.typed,
          n = e.config,
          i = e.divideScalar,
          s = e.Complex,
          o = a(Kr, {
            Complex: function (e) {
              return t(e, 2)
            },
            "Complex, number": t
          }),
          l = [function (e) {
            return new s(e, 0)
          }, function (e) {
            return new s(0, e)
          }, function (e) {
            return new s(-e, 0)
          }, function (e) {
            return new s(0, -e)
          }];
        return o
      }),
      ts = "dotPow",
      as = Object(ea.a)(ts, ["typed", "equalScalar", "matrix", "pow", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.equalScalar,
          n = e.matrix,
          i = e.pow,
          r = e.DenseMatrix,
          s = Fn({
            typed: t
          }),
          o = fi({
            typed: t,
            DenseMatrix: r
          }),
          l = zn({
            typed: t,
            equalScalar: a
          }),
          p = Gn({
            typed: t,
            DenseMatrix: r
          }),
          m = wn({
            typed: t
          }),
          c = kn({
            typed: t
          }),
          d = t(ts, {
            "any, any": i,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, i, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return s(t, e, i, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, i, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return m(e, t, i)
            },
            "Array, Array": function (e, t) {
              return d(n(e), n(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return d(n(e), t)
            },
            "Matrix, Array": function (e, t) {
              return d(e, n(t))
            },
            "SparseMatrix, any": function (e, t) {
              return l(e, t, d, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return c(e, t, d, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return p(t, e, d, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return c(t, e, d, !0)
            },
            "Array, any": function (e, t) {
              return c(n(e), t, d, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return c(n(t), e, d, !0).valueOf()
            }
          });
        return d
      }),
      ns = "dotDivide",
      is = Object(ea.a)(ns, ["typed", "matrix", "equalScalar", "divideScalar", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.divideScalar,
          r = e.DenseMatrix,
          s = qn({
            typed: t,
            equalScalar: n
          }),
          o = Fn({
            typed: t
          }),
          l = fi({
            typed: t,
            DenseMatrix: r
          }),
          p = zn({
            typed: t,
            equalScalar: n
          }),
          m = Gn({
            typed: t,
            DenseMatrix: r
          }),
          c = wn({
            typed: t
          }),
          d = kn({
            typed: t
          }),
          u = t(ns, {
            "any, any": i,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return l(e, t, i, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return s(t, e, i, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, i, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return c(e, t, i)
            },
            "Array, Array": function (e, t) {
              return u(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return u(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return u(e, a(t))
            },
            "SparseMatrix, any": function (e, t) {
              return p(e, t, i, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return d(e, t, i, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return m(t, e, i, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return d(t, e, i, !0)
            },
            "Array, any": function (e, t) {
              return d(a(e), t, i, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return d(a(t), e, i, !0).valueOf()
            }
          });
        return u
      }),
      rs = "lsolve",
      ss = Object(ea.a)(rs, ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"], function (e) {
        function t(e, t) {
          t = d(e, t, !0);
          for (var a = t._data, n = e._size[0], l = e._size[1], m = [], u = e._data, g = 0; g < l; g++) {
            var y = a[g][0] || 0,
              x = void 0;
            if (!p(y, 0)) {
              var f = u[g][g];
              if (p(f, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
              x = r(y, f);
              for (var h = g + 1; h < n; h++) a[h] = [o(a[h][0] || 0, s(x, u[h][g]))]
            } else x = 0;
            m[g] = [x]
          }
          return new c({
            data: m,
            size: [n, 1]
          })
        }

        function a(e, t) {
          t = d(e, t, !0);
          for (var a = t._data, n = e._size[0], m = e._size[1], u = e._values, g = e._index, y = e._ptr, f = [], x = 0, h, v, N; x < m; x++)
            if (N = a[x][0] || 0, !p(N, 0)) {
              var M = 0,
                S = [],
                A = [],
                O = y[x + 1];
              for (v = y[x]; v < O; v++) h = g[v], h === x ? M = u[v] : h > x && (S.push(u[v]), A.push(h));
              if (p(M, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
              var _ = r(N, M);
              for (v = 0, O = A.length; v < O; v++) h = A[v], a[h] = [o(a[h][0] || 0, s(_, S[v]))];
              f[x] = [_]
            } else f[x] = [0];
          return new c({
            data: f,
            size: [n, 1]
          })
        }
        var n = e.typed,
          i = e.matrix,
          r = e.divideScalar,
          s = e.multiplyScalar,
          o = e.subtract,
          p = e.equalScalar,
          c = e.DenseMatrix,
          d = De({
            DenseMatrix: c
          });
        return n(rs, {
          "SparseMatrix, Array | Matrix": function (e, t) {
            return a(e, t)
          },
          "DenseMatrix, Array | Matrix": function (e, a) {
            return t(e, a)
          },
          "Array, Array | Matrix": function (e, a) {
            var n = i(e),
              s = t(n, a);
            return s.valueOf()
          }
        })
      }),
      os = "usolve",
      ls = Object(ea.a)(os, ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"], function (e) {
        function t(e, t) {
          t = d(e, t, !0);
          for (var a = t._data, n = e._size[0], l = e._size[1], m = [], u = e._data, g = l - 1; 0 <= g; g--) {
            var y = a[g][0] || 0,
              x = void 0;
            if (!p(y, 0)) {
              var f = u[g][g];
              if (p(f, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
              x = r(y, f);
              for (var h = g - 1; 0 <= h; h--) a[h] = [o(a[h][0] || 0, s(x, u[h][g]))]
            } else x = 0;
            m[g] = [x]
          }
          return new c({
            data: m,
            size: [n, 1]
          })
        }

        function a(e, t) {
          t = d(e, t, !0);
          for (var a = t._data, n = e._size[0], m = e._size[1], u = e._values, g = e._index, y = e._ptr, h = [], x = m - 1, v, N, M; 0 <= x; x--)
            if (M = a[x][0] || 0, !p(M, 0)) {
              var S = 0,
                A = [],
                O = [],
                _ = y[x],
                f = y[x + 1];
              for (N = f - 1; N >= _; N--) v = g[N], v === x ? S = u[N] : v < x && (A.push(u[N]), O.push(v));
              if (p(S, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
              var C = r(M, S);
              for (N = 0, f = O.length; N < f; N++) v = O[N], a[v] = [o(a[v][0], s(C, A[N]))];
              h[x] = [C]
            } else h[x] = [0];
          return new c({
            data: h,
            size: [n, 1]
          })
        }
        var n = e.typed,
          i = e.matrix,
          r = e.divideScalar,
          s = e.multiplyScalar,
          o = e.subtract,
          p = e.equalScalar,
          c = e.DenseMatrix,
          d = De({
            DenseMatrix: c
          });
        return n(os, {
          "SparseMatrix, Array | Matrix": function (e, t) {
            return a(e, t)
          },
          "DenseMatrix, Array | Matrix": function (e, a) {
            return t(e, a)
          },
          "Array, Array | Matrix": function (e, a) {
            var n = i(e),
              s = t(n, a);
            return s.valueOf()
          }
        })
      }),
      ps = Object(ea.a)("algorithm08", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          n = e.equalScalar;
        return function (e, a, r) {
          var s = e._values,
            o = e._index,
            l = e._ptr,
            p = e._size,
            m = e._datatype,
            d = a._values,
            u = a._index,
            g = a._ptr,
            y = a._size,
            f = a._datatype;
          if (p.length !== y.length) throw new ha.a(p.length, y.length);
          if (p[0] !== y[0] || p[1] !== y[1]) throw new RangeError("Dimension mismatch. Matrix A (" + p + ") must match Matrix B (" + y + ")");
          if (!s || !d) throw new Error("Cannot perform operation on Pattern Sparse Matrices");
          var h = p[0],
            b = p[1],
            N = n,
            M = 0,
            S = r,
            A;
          "string" == typeof m && m === f && (A = m, N = t.find(n, [A, A]), M = t.convert(0, A), S = t.find(r, [A, A]));
          for (var O = [], _ = [], C = [], E = e.createSparseMatrix({
              values: O,
              index: _,
              ptr: C,
              size: [h, b],
              datatype: A
            }), c = [], x = [], w = 0, T, I, q, B; w < b; w++) {
            C[w] = _.length;
            var z = w + 1;
            for (I = l[w], q = l[w + 1], T = I; T < q; T++) B = o[T], x[B] = z, c[B] = s[T], _.push(B);
            for (I = g[w], q = g[w + 1], T = I; T < q; T++) B = u[T], x[B] === z && (c[B] = S(c[B], d[T]));
            for (T = C[w]; T < _.length;) {
              B = _[T];
              var D = c[B];
              N(D, M) ? _.splice(T, 1) : (O.push(D), T++)
            }
          }
          return C[b] = _.length, E
        }
      }),
      ms = "leftShift",
      cs = Object(ea.a)(ms, ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.zeros,
          r = e.DenseMatrix,
          s = _n({
            typed: t
          }),
          o = qn({
            typed: t,
            equalScalar: n
          }),
          l = ps({
            typed: t,
            equalScalar: n
          }),
          p = En({
            typed: t,
            DenseMatrix: r
          }),
          m = zn({
            typed: t,
            equalScalar: n
          }),
          c = wn({
            typed: t
          }),
          d = kn({
            typed: t
          }),
          u = t(ms, {
            "number, number": re,
            "BigNumber, BigNumber": K,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return l(e, t, u, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return o(t, e, u, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, u, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return c(e, t, u)
            },
            "Array, Array": function (e, t) {
              return u(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return u(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return u(e, a(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return n(t, 0) ? e.clone() : m(e, t, u, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return n(t, 0) ? e.clone() : d(e, t, u, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : p(t, e, u, !0)
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : d(t, e, u, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return u(a(e), t).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return u(e, a(t)).valueOf()
            }
          });
        return u
      }),
      ds = "rightArithShift",
      us = Object(ea.a)(ds, ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.zeros,
          r = e.DenseMatrix,
          s = _n({
            typed: t
          }),
          o = qn({
            typed: t,
            equalScalar: n
          }),
          l = ps({
            typed: t,
            equalScalar: n
          }),
          p = En({
            typed: t,
            DenseMatrix: r
          }),
          m = zn({
            typed: t,
            equalScalar: n
          }),
          c = wn({
            typed: t
          }),
          d = kn({
            typed: t
          }),
          u = t(ds, {
            "number, number": se,
            "BigNumber, BigNumber": ee,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return l(e, t, u, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return o(t, e, u, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, u, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return c(e, t, u)
            },
            "Array, Array": function (e, t) {
              return u(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return u(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return u(e, a(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return n(t, 0) ? e.clone() : m(e, t, u, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return n(t, 0) ? e.clone() : d(e, t, u, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : p(t, e, u, !0)
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : d(t, e, u, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return u(a(e), t).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return u(e, a(t)).valueOf()
            }
          });
        return u
      }),
      gs = "rightLogShift",
      ys = Object(ea.a)(gs, ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.zeros,
          r = e.DenseMatrix,
          s = _n({
            typed: t
          }),
          o = qn({
            typed: t,
            equalScalar: n
          }),
          l = ps({
            typed: t,
            equalScalar: n
          }),
          p = En({
            typed: t,
            DenseMatrix: r
          }),
          m = zn({
            typed: t,
            equalScalar: n
          }),
          c = wn({
            typed: t
          }),
          d = kn({
            typed: t
          }),
          u = t(gs, {
            "number, number": oe,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return l(e, t, u, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return o(t, e, u, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, u, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return c(e, t, u)
            },
            "Array, Array": function (e, t) {
              return u(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return u(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return u(e, a(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return n(t, 0) ? e.clone() : m(e, t, u, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return n(t, 0) ? e.clone() : d(e, t, u, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : p(t, e, u, !0)
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : d(t, e, u, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return u(a(e), t).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return u(e, a(t)).valueOf()
            }
          });
        return u
      }),
      xs = "and",
      fs = Object(ea.a)(xs, ["typed", "matrix", "equalScalar", "zeros", "not"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.zeros,
          r = e.not,
          s = qn({
            typed: t,
            equalScalar: n
          }),
          o = Bn({
            typed: t,
            equalScalar: n
          }),
          l = zn({
            typed: t,
            equalScalar: n
          }),
          p = wn({
            typed: t
          }),
          m = kn({
            typed: t
          }),
          c = t(xs, {
            "number, number": ce,
            "Complex, Complex": function (e, t) {
              return (0 !== e.re || 0 !== e.im) && (0 !== t.re || 0 !== t.im)
            },
            "BigNumber, BigNumber": function (e, t) {
              return !e.isZero() && !t.isZero() && !e.isNaN() && !t.isNaN()
            },
            "Unit, Unit": function (e, t) {
              return c(e.value || 0, t.value || 0)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, c, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return s(t, e, c, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, c, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return p(e, t, c)
            },
            "Array, Array": function (e, t) {
              return c(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return c(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return c(e, a(t))
            },
            "SparseMatrix, any": function (e, t) {
              return r(t) ? i(e.size(), e.storage()) : l(e, t, c, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return r(t) ? i(e.size(), e.storage()) : m(e, t, c, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return r(e) ? i(e.size(), e.storage()) : l(t, e, c, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return r(e) ? i(e.size(), e.storage()) : m(t, e, c, !0)
            },
            "Array, any": function (e, t) {
              return c(a(e), t).valueOf()
            },
            "any, Array": function (e, t) {
              return c(e, a(t)).valueOf()
            }
          });
        return c
      }),
      hs = "compare",
      bs = Object(ea.a)(hs, ["typed", "config", "matrix", "equalScalar", "BigNumber", "Fraction", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.equalScalar,
          i = e.matrix,
          r = e.BigNumber,
          s = e.Fraction,
          o = e.DenseMatrix,
          l = Fn({
            typed: t
          }),
          p = Hn({
            typed: t,
            equalScalar: n
          }),
          m = Gn({
            typed: t,
            DenseMatrix: o
          }),
          c = wn({
            typed: t
          }),
          d = kn({
            typed: t
          }),
          u = t(hs, {
            "boolean, boolean": function (e, t) {
              return e === t ? 0 : e > t ? 1 : -1
            },
            "number, number": function (e, t) {
              return Object(Kt.m)(e, t, a.epsilon) ? 0 : e > t ? 1 : -1
            },
            "BigNumber, BigNumber": function (e, t) {
              return b(e, t, a.epsilon) ? new r(0) : new r(e.cmp(t))
            },
            "Fraction, Fraction": function (e, t) {
              return new s(e.compare(t))
            },
            "Complex, Complex": function () {
              throw new TypeError("No ordering relation is defined for complex numbers")
            },
            "Unit, Unit": function (e, t) {
              if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
              return u(e.value, t.value)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return p(e, t, u)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return l(t, e, u, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return l(e, t, u, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return c(e, t, u)
            },
            "Array, Array": function (e, t) {
              return u(i(e), i(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return u(i(e), t)
            },
            "Matrix, Array": function (e, t) {
              return u(e, i(t))
            },
            "SparseMatrix, any": function (e, t) {
              return m(e, t, u, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return d(e, t, u, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return m(t, e, u, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return d(t, e, u, !0)
            },
            "Array, any": function (e, t) {
              return d(i(e), t, u, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return d(i(t), e, u, !0).valueOf()
            }
          });
        return u
      }),
      vs = Object(ea.a)(hs, ["typed", "config"], function (e) {
        var t = e.typed,
          a = e.config;
        return t(hs, {
          "number, number": function (e, t) {
            return Object(Kt.m)(e, t, a.epsilon) ? 0 : e > t ? 1 : -1
          }
        })
      }),
      Ns = a(12),
      Ms = a.n(Ns),
      Ss = "compareNatural",
      As = Object(ea.a)(Ss, ["typed", "compare"], function (e) {
        function t(e, n) {
          return Object(Yt.H)(e) && Object(Yt.H)(n) ? a(e.toJSON().values, n.toJSON().values) : Object(Yt.H)(e) ? t(e.toArray(), n) : Object(Yt.H)(n) ? t(e, n.toArray()) : Object(Yt.n)(e) ? t(e.toJSON().data, n) : Object(Yt.n)(n) ? t(e, n.toJSON().data) : Array.isArray(e) ? Array.isArray(n) ? a(e, n) : t(e, [n]) : t([e], n)
        }

        function a(e, t) {
          for (var a = 0, n = Math.min(e.length, t.length), r; a < n; a++)
            if (r = o(e[a], t[a]), 0 !== r) return r;
          return e.length > t.length ? 1 : e.length < t.length ? -1 : 0
        }

        function n(e, t) {
          var n = Object.keys(e),
            r = Object.keys(t);
          n.sort(Ms.a), r.sort(Ms.a);
          var s = a(n, r);
          if (0 !== s) return s;
          for (var l = 0, p; l < n.length; l++)
            if (p = o(e[n[l]], t[r[l]]), 0 !== p) return p;
          return 0
        }
        var i = e.typed,
          r = e.compare,
          s = r.signatures["boolean,boolean"],
          o = i(Ss, {
            "any, any": function (e, i) {
              var l = Object(Yt.M)(e),
                p = Object(Yt.M)(i),
                m;
              if (("number" === l || "BigNumber" === l || "Fraction" === l) && ("number" === p || "BigNumber" === p || "Fraction" === p)) return m = r(e, i), "0" === m.toString() ? Ms()(l, p) : 0 < m ? 1 : -1;
              if ("Array" === l || "Matrix" === l || "Array" === p || "Matrix" === p) return m = t(e, i), 0 === m ? Ms()(l, p) : m;
              if (l !== p) return Ms()(l, p);
              if ("Complex" === l) return Pe(e, i);
              if ("Unit" === l) return e.equalBase(i) ? o(e.value, i.value) : a(e.formatUnits(), i.formatUnits());
              if ("boolean" === l) return s(e, i);
              if ("string" === l) return Ms()(e, i);
              if ("Object" === l) return n(e, i);
              if ("null" === l) return 0;
              if ("undefined" === l) return 0;
              throw new TypeError("Unsupported type of value \"" + l + "\"")
            }
          });
        return o
      }),
      Os = "compareText",
      _s = Object(ea.a)(Os, ["typed", "matrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = wn({
            typed: t
          }),
          i = kn({
            typed: t
          }),
          r = t(Os, {
            "any, any": xa.a,
            "DenseMatrix, DenseMatrix": function (e, t) {
              return n(e, t, xa.a)
            },
            "Array, Array": function (e, t) {
              return r(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return r(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return r(e, a(t))
            },
            "DenseMatrix, any": function (e, t) {
              return i(e, t, xa.a, !1)
            },
            "any, DenseMatrix": function (e, t) {
              return i(t, e, xa.a, !0)
            },
            "Array, any": function (e, t) {
              return i(a(e), t, xa.a, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return i(a(t), e, xa.a, !0).valueOf()
            }
          });
        return r
      }),
      Cs = Object(ea.a)(Os, ["typed"], function (e) {
        var t = e.typed;
        return t(Os, {
          "any, any": xa.a
        })
      }),
      Es = "equal",
      ws = Object(ea.a)(Es, ["typed", "matrix", "equalScalar", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.DenseMatrix,
          r = Fn({
            typed: t
          }),
          s = fi({
            typed: t,
            DenseMatrix: i
          }),
          o = Gn({
            typed: t,
            DenseMatrix: i
          }),
          l = wn({
            typed: t
          }),
          p = kn({
            typed: t
          }),
          m = t(Es, {
            "any, any": function (e, t) {
              return null === e ? null === t : null === t ? null === e : void 0 === e ? void 0 === t : void 0 === t ? void 0 === e : n(e, t)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, n)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return r(t, e, n, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return r(e, t, n, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, n)
            },
            "Array, Array": function (e, t) {
              return m(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, a(t))
            },
            "SparseMatrix, any": function (e, t) {
              return o(e, t, n, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return p(e, t, n, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return o(t, e, n, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return p(t, e, n, !0)
            },
            "Array, any": function (e, t) {
              return p(a(e), t, n, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return p(a(t), e, n, !0).valueOf()
            }
          });
        return m
      }),
      ks = Object(ea.a)(Es, ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          a = e.equalScalar;
        return t(Es, {
          "any, any": function (e, t) {
            return null === e ? null === t : null === t ? null === e : void 0 === e ? void 0 === t : void 0 === t ? void 0 === e : a(e, t)
          }
        })
      }),
      Ts = "equalText",
      Is = Object(ea.a)(Ts, ["typed", "compareText", "isZero"], function (e) {
        var t = e.typed,
          a = e.compareText,
          n = e.isZero;
        return t(Ts, {
          "any, any": function (e, t) {
            return n(a(e, t))
          }
        })
      }),
      qs = "smaller",
      Bs = Object(ea.a)(qs, ["typed", "config", "matrix", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.matrix,
          i = e.DenseMatrix,
          r = Fn({
            typed: t
          }),
          s = fi({
            typed: t,
            DenseMatrix: i
          }),
          o = Gn({
            typed: t,
            DenseMatrix: i
          }),
          l = wn({
            typed: t
          }),
          p = kn({
            typed: t
          }),
          m = t(qs, {
            "boolean, boolean": function (e, t) {
              return e < t
            },
            "number, number": function (e, t) {
              return e < t && !Object(Kt.m)(e, t, a.epsilon)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.lt(t) && !b(e, t, a.epsilon)
            },
            "Fraction, Fraction": function (e, t) {
              return -1 === e.compare(t)
            },
            "Complex, Complex": function () {
              throw new TypeError("No ordering relation is defined for complex numbers")
            },
            "Unit, Unit": function (e, t) {
              if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
              return m(e.value, t.value)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, m)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return r(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return r(e, t, m, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, m)
            },
            "Array, Array": function (e, t) {
              return m(n(e), n(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(n(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, n(t))
            },
            "SparseMatrix, any": function (e, t) {
              return o(e, t, m, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return p(e, t, m, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return o(t, e, m, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return p(t, e, m, !0)
            },
            "Array, any": function (e, t) {
              return p(n(e), t, m, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return p(n(t), e, m, !0).valueOf()
            }
          });
        return m
      }),
      zs = Object(ea.a)(qs, ["typed", "config"], function (e) {
        var t = e.typed,
          a = e.config;
        return t(qs, {
          "number, number": function (e, t) {
            return e < t && !Object(Kt.m)(e, t, a.epsilon)
          }
        })
      }),
      js = "smallerEq",
      Ds = Object(ea.a)(js, ["typed", "config", "matrix", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.matrix,
          i = e.DenseMatrix,
          r = Fn({
            typed: t
          }),
          s = fi({
            typed: t,
            DenseMatrix: i
          }),
          o = Gn({
            typed: t,
            DenseMatrix: i
          }),
          l = wn({
            typed: t
          }),
          p = kn({
            typed: t
          }),
          m = t(js, {
            "boolean, boolean": function (e, t) {
              return e <= t
            },
            "number, number": function (e, t) {
              return e <= t || Object(Kt.m)(e, t, a.epsilon)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.lte(t) || b(e, t, a.epsilon)
            },
            "Fraction, Fraction": function (e, t) {
              return 1 !== e.compare(t)
            },
            "Complex, Complex": function () {
              throw new TypeError("No ordering relation is defined for complex numbers")
            },
            "Unit, Unit": function (e, t) {
              if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
              return m(e.value, t.value)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, m)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return r(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return r(e, t, m, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, m)
            },
            "Array, Array": function (e, t) {
              return m(n(e), n(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(n(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, n(t))
            },
            "SparseMatrix, any": function (e, t) {
              return o(e, t, m, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return p(e, t, m, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return o(t, e, m, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return p(t, e, m, !0)
            },
            "Array, any": function (e, t) {
              return p(n(e), t, m, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return p(n(t), e, m, !0).valueOf()
            }
          });
        return m
      }),
      Ps = Object(ea.a)(js, ["typed", "config"], function (e) {
        var t = e.typed,
          a = e.config;
        return t(js, {
          "number, number": function (e, t) {
            return e <= t || Object(Kt.m)(e, t, a.epsilon)
          }
        })
      }),
      Rs = "larger",
      Us = Object(ea.a)(Rs, ["typed", "config", "matrix", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.matrix,
          i = e.DenseMatrix,
          r = Fn({
            typed: t
          }),
          s = fi({
            typed: t,
            DenseMatrix: i
          }),
          o = Gn({
            typed: t,
            DenseMatrix: i
          }),
          l = wn({
            typed: t
          }),
          p = kn({
            typed: t
          }),
          m = t(Rs, {
            "boolean, boolean": function (e, t) {
              return e > t
            },
            "number, number": function (e, t) {
              return e > t && !Object(Kt.m)(e, t, a.epsilon)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.gt(t) && !b(e, t, a.epsilon)
            },
            "Fraction, Fraction": function (e, t) {
              return 1 === e.compare(t)
            },
            "Complex, Complex": function () {
              throw new TypeError("No ordering relation is defined for complex numbers")
            },
            "Unit, Unit": function (e, t) {
              if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
              return m(e.value, t.value)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, m)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return r(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return r(e, t, m, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, m)
            },
            "Array, Array": function (e, t) {
              return m(n(e), n(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(n(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, n(t))
            },
            "SparseMatrix, any": function (e, t) {
              return o(e, t, m, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return p(e, t, m, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return o(t, e, m, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return p(t, e, m, !0)
            },
            "Array, any": function (e, t) {
              return p(n(e), t, m, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return p(n(t), e, m, !0).valueOf()
            }
          });
        return m
      }),
      Ls = Object(ea.a)(Rs, ["typed", "config"], function (e) {
        var t = e.typed,
          a = e.config;
        return t(Rs, {
          "number, number": function (e, t) {
            return e > t && !Object(Kt.m)(e, t, a.epsilon)
          }
        })
      }),
      Fs = "largerEq",
      Hs = Object(ea.a)(Fs, ["typed", "config", "matrix", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.matrix,
          i = e.DenseMatrix,
          r = Fn({
            typed: t
          }),
          s = fi({
            typed: t,
            DenseMatrix: i
          }),
          o = Gn({
            typed: t,
            DenseMatrix: i
          }),
          l = wn({
            typed: t
          }),
          p = kn({
            typed: t
          }),
          m = t(Fs, {
            "boolean, boolean": function (e, t) {
              return e >= t
            },
            "number, number": function (e, t) {
              return e >= t || Object(Kt.m)(e, t, a.epsilon)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.gte(t) || b(e, t, a.epsilon)
            },
            "Fraction, Fraction": function (e, t) {
              return -1 !== e.compare(t)
            },
            "Complex, Complex": function () {
              throw new TypeError("No ordering relation is defined for complex numbers")
            },
            "Unit, Unit": function (e, t) {
              if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
              return m(e.value, t.value)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, m)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return r(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return r(e, t, m, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, m)
            },
            "Array, Array": function (e, t) {
              return m(n(e), n(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(n(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, n(t))
            },
            "SparseMatrix, any": function (e, t) {
              return o(e, t, m, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return p(e, t, m, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return o(t, e, m, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return p(t, e, m, !0)
            },
            "Array, any": function (e, t) {
              return p(n(e), t, m, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return p(n(t), e, m, !0).valueOf()
            }
          });
        return m
      }),
      Gs = Object(ea.a)(Fs, ["typed", "config"], function (e) {
        var t = e.typed,
          a = e.config;
        return t(Fs, {
          "number, number": function (e, t) {
            return e >= t || Object(Kt.m)(e, t, a.epsilon)
          }
        })
      }),
      $s = "deepEqual",
      Zs = Object(ea.a)($s, ["typed", "equal"], function (e) {
        function t(e, a) {
          if (Array.isArray(e)) {
            if (Array.isArray(a)) {
              var r = e.length;
              if (r !== a.length) return !1;
              for (var s = 0; s < r; s++)
                if (!t(e[s], a[s])) return !1;
              return !0
            }
            return !1
          }
          return !Array.isArray(a) && n(e, a)
        }
        var a = e.typed,
          n = e.equal;
        return a($s, {
          "any, any": function (e, a) {
            return t(e.valueOf(), a.valueOf())
          }
        })
      }),
      Vs = "unequal",
      Ws = Object(ea.a)(Vs, ["typed", "config", "equalScalar", "matrix", "DenseMatrix"], function (e) {
        function t(e, t) {
          return !i(e, t)
        }
        var a = e.typed,
          n = e.config,
          i = e.equalScalar,
          r = e.matrix,
          s = e.DenseMatrix,
          o = Fn({
            typed: a
          }),
          l = fi({
            typed: a,
            DenseMatrix: s
          }),
          p = Gn({
            typed: a,
            DenseMatrix: s
          }),
          m = wn({
            typed: a
          }),
          c = kn({
            typed: a
          }),
          d = a("unequal", {
            "any, any": function (e, a) {
              return null === e ? null !== a : null === a ? null !== e : void 0 === e ? void 0 !== a : void 0 === a ? void 0 !== e : t(e, a)
            },
            "SparseMatrix, SparseMatrix": function (e, a) {
              return l(e, a, t)
            },
            "SparseMatrix, DenseMatrix": function (e, a) {
              return o(a, e, t, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, a) {
              return o(e, a, t, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, a) {
              return m(e, a, t)
            },
            "Array, Array": function (e, t) {
              return d(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return d(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return d(e, r(t))
            },
            "SparseMatrix, any": function (e, a) {
              return p(e, a, t, !1)
            },
            "DenseMatrix, any": function (e, a) {
              return c(e, a, t, !1)
            },
            "any, SparseMatrix": function (e, a) {
              return p(a, e, t, !0)
            },
            "any, DenseMatrix": function (e, a) {
              return c(a, e, t, !0)
            },
            "Array, any": function (e, a) {
              return c(r(e), a, t, !1).valueOf()
            },
            "any, Array": function (e, a) {
              return c(r(a), e, t, !0).valueOf()
            }
          });
        return d
      }),
      Js = Object(ea.a)(Vs, ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          a = e.equalScalar;
        return t(Vs, {
          "any, any": function (e, t) {
            return null === e ? null !== t : null === t ? null !== e : void 0 === e ? void 0 !== t : void 0 === t ? void 0 !== e : !a(e, t)
          }
        })
      }),
      Ys = "partitionSelect",
      Xs = Object(ea.a)(Ys, ["typed", "isNumeric", "isNaN", "compare"], function (e) {
        function t(e, t, n) {
          if (!Object(Kt.i)(t) || 0 > t) throw new Error("k must be a non-negative integer");
          if (Object(Yt.v)(e)) {
            var i = e.size();
            if (1 < i.length) throw new Error("Only one dimensional matrices supported");
            return a(e.valueOf(), t, n)
          }
          return Array.isArray(e) ? a(e, t, n) : void 0
        }

        function a(e, t, a) {
          if (t >= e.length) throw new Error("k out of bounds");
          for (var n = 0; n < e.length; n++)
            if (r(e[n]) && s(e[n])) return e[n];
          for (var o = 0, l = e.length - 1; o < l;) {
            for (var p = o, m = l, c = e[Math.floor(Math.random() * (l - o + 1)) + o]; p < m;)
              if (0 <= a(e[p], c)) {
                var d = e[m];
                e[m] = e[p], e[p] = d, --m
              } else ++p;
            0 < a(e[p], c) && --p, t <= p ? l = p : o = p + 1
          }
          return e[t]
        }
        var n = e.typed,
          r = e.isNumeric,
          s = e.isNaN,
          o = e.compare,
          l = o,
          p = function (e, t) {
            return -o(e, t)
          };
        return n(Ys, {
          "Array | Matrix, number": function (e, a) {
            return t(e, a, l)
          },
          "Array | Matrix, number, string": function (e, a, n) {
            if ("asc" === n) return t(e, a, l);
            if ("desc" === n) return t(e, a, p);
            throw new Error("Compare string must be \"asc\" or \"desc\"")
          },
          "Array | Matrix, number, function": t
        })
      }),
      Qs = "sort",
      Ks = Object(ea.a)(Qs, ["typed", "matrix", "compare", "compareNatural"], function (e) {
        function t(e) {
          if ("asc" === e) return l;
          if ("desc" === e) return p;
          if ("natural" === e) return o;
          throw new Error("String \"asc\", \"desc\", or \"natural\" expected")
        }

        function a(e) {
          if (1 !== Object(ya.a)(e).length) throw new Error("One dimensional array expected")
        }

        function n(e) {
          if (1 !== e.size().length) throw new Error("One dimensional matrix expected")
        }
        var i = e.typed,
          r = e.matrix,
          s = e.compare,
          o = e.compareNatural,
          l = s,
          p = function (e, t) {
            return -s(e, t)
          };
        return i(Qs, {
          Array: function (e) {
            return a(e), e.sort(l)
          },
          Matrix: function (e) {
            return n(e), r(e.toArray().sort(l), e.storage())
          },
          "Array, function": function (e, t) {
            return a(e), e.sort(t)
          },
          "Matrix, function": function (e, t) {
            return n(e), r(e.toArray().sort(t), e.storage())
          },
          "Array, string": function (e, n) {
            return a(e), e.sort(t(n))
          },
          "Matrix, string": function (e, a) {
            return n(e), r(e.toArray().sort(t(a)), e.storage())
          }
        })
      }),
      eo = "max",
      to = Object(ea.a)(eo, ["typed", "larger"], function (e) {
        function t(e, t) {
          try {
            return i(e, t) ? e : t
          } catch (e) {
            throw qe(e, "max", t)
          }
        }

        function a(e) {
          var t;
          if (p(e, function (e) {
              try {
                isNaN(e) && "number" == typeof e ? t = NaN : (void 0 === t || i(e, t)) && (t = e)
              } catch (t) {
                throw qe(t, "max", e)
              }
            }), void 0 === t) throw new Error("Cannot calculate max of an empty array");
          return t
        }
        var n = e.typed,
          i = e.larger;
        return n(eo, {
          "Array | Matrix": a,
          "Array | Matrix, number | BigNumber": function (e, a) {
            return c(e, a.valueOf(), t)
          },
          "...": function (e) {
            if (l(e)) throw new TypeError("Scalar values expected in function max");
            return a(e)
          }
        })
      }),
      ao = "min",
      no = Object(ea.a)(ao, ["typed", "smaller"], function (e) {
        function t(e, t) {
          try {
            return i(e, t) ? e : t
          } catch (e) {
            throw qe(e, "min", t)
          }
        }

        function a(e) {
          var t;
          if (p(e, function (e) {
              try {
                isNaN(e) && "number" == typeof e ? t = NaN : (void 0 === t || i(e, t)) && (t = e)
              } catch (t) {
                throw qe(t, "min", e)
              }
            }), void 0 === t) throw new Error("Cannot calculate min of an empty array");
          return t
        }
        var n = e.typed,
          i = e.smaller;
        return n(ao, {
          "Array | Matrix": a,
          "Array | Matrix, number | BigNumber": function (e, a) {
            return c(e, a.valueOf(), t)
          },
          "...": function (e) {
            if (l(e)) throw new TypeError("Scalar values expected in function min");
            return a(e)
          }
        })
      }),
      io = Object(ea.a)("ImmutableDenseMatrix", ["smaller", "DenseMatrix"], function (e) {
        function t(e, a) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (a && !Object(Yt.I)(a)) throw new Error("Invalid datatype: " + a);
          if (Object(Yt.v)(e) || Object(Yt.b)(e)) {
            var i = new n(e, a);
            this._data = i._data, this._size = i._size, this._datatype = i._datatype, this._min = null, this._max = null
          } else if (e && Object(Yt.b)(e.data) && Object(Yt.b)(e.size)) this._data = e.data, this._size = e.size, this._datatype = e.datatype, this._min = "undefined" == typeof e.min ? null : e.min, this._max = "undefined" == typeof e.max ? null : e.max;
          else if (e) throw new TypeError("Unsupported type of data (" + Object(Yt.M)(e) + ")");
          else this._data = [], this._size = [0], this._datatype = a, this._min = null, this._max = null
        }
        var a = e.smaller,
          n = e.DenseMatrix;
        return t.prototype = new n, t.prototype.type = "ImmutableDenseMatrix", t.prototype.isImmutableDenseMatrix = !0, t.prototype.subset = function (e) {
          switch (arguments.length) {
            case 1:
              var a = n.prototype.subset.call(this, e);
              return Object(Yt.v)(a) ? new t({
                data: a._data,
                size: a._size,
                datatype: a._datatype
              }) : a;
            case 2:
            case 3:
              throw new Error("Cannot invoke set subset on an Immutable Matrix instance");
            default:
              throw new SyntaxError("Wrong number of arguments");
          }
        }, t.prototype.set = function () {
          throw new Error("Cannot invoke set on an Immutable Matrix instance")
        }, t.prototype.resize = function () {
          throw new Error("Cannot invoke resize on an Immutable Matrix instance")
        }, t.prototype.reshape = function () {
          throw new Error("Cannot invoke reshape on an Immutable Matrix instance")
        }, t.prototype.clone = function () {
          return new t({
            data: Object(fa.a)(this._data),
            size: Object(fa.a)(this._size),
            datatype: this._datatype
          })
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "ImmutableDenseMatrix",
            data: this._data,
            size: this._size,
            datatype: this._datatype
          }
        }, t.fromJSON = function (e) {
          return new t(e)
        }, t.prototype.swapRows = function () {
          throw new Error("Cannot invoke swapRows on an Immutable Matrix instance")
        }, t.prototype.min = function () {
          if (null === this._min) {
            var e = null;
            this.forEach(function (t) {
              (null === e || a(t, e)) && (e = t)
            }), this._min = null === e ? void 0 : e
          }
          return this._min
        }, t.prototype.max = function () {
          if (null === this._max) {
            var e = null;
            this.forEach(function (t) {
              (null === e || a(e, t)) && (e = t)
            }), this._max = null === e ? void 0 : e
          }
          return this._max
        }, t
      }, {
        isClass: !0
      }),
      ro = Object(ea.a)("Index", ["ImmutableDenseMatrix"], function (e) {
        function t() {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          this._dimensions = [], this._isScalar = !0;
          for (var e = 0, n = arguments.length, r; e < n; e++)
            if (r = arguments[e], Object(Yt.D)(r)) this._dimensions.push(r), this._isScalar = !1;
            else if (Array.isArray(r) || Object(Yt.v)(r)) {
            var s = a(r.valueOf());
            this._dimensions.push(s);
            var o = s.size();
            (1 !== o.length || 1 !== o[0]) && (this._isScalar = !1)
          } else if ("number" == typeof r) this._dimensions.push(a([r]));
          else if ("string" == typeof r) this._dimensions.push(r);
          else throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range")
        }

        function a(e) {
          for (var t = 0, a = e.length; t < a; t++)
            if ("number" != typeof e[t] || !Object(Kt.i)(e[t])) throw new TypeError("Index parameters must be positive integer numbers");
          return new n(e)
        }
        var n = e.ImmutableDenseMatrix;
        return t.prototype.type = "Index", t.prototype.isIndex = !0, t.prototype.clone = function () {
          var e = new t;
          return e._dimensions = Object(fa.a)(this._dimensions), e._isScalar = this._isScalar, e
        }, t.create = function (e) {
          var a = new t;
          return t.apply(a, e), a
        }, t.prototype.size = function () {
          for (var e = [], t = 0, a = this._dimensions.length, n; t < a; t++) n = this._dimensions[t], e[t] = "string" == typeof n ? 1 : n.size()[0];
          return e
        }, t.prototype.max = function () {
          for (var e = [], t = 0, a = this._dimensions.length, n; t < a; t++) n = this._dimensions[t], e[t] = "string" == typeof n ? n : n.max();
          return e
        }, t.prototype.min = function () {
          for (var e = [], t = 0, a = this._dimensions.length, n; t < a; t++) n = this._dimensions[t], e[t] = "string" == typeof n ? n : n.min();
          return e
        }, t.prototype.forEach = function (e) {
          for (var t = 0, a = this._dimensions.length; t < a; t++) e(this._dimensions[t], t, this)
        }, t.prototype.dimension = function (e) {
          return this._dimensions[e] || null
        }, t.prototype.isObjectProperty = function () {
          return 1 === this._dimensions.length && "string" == typeof this._dimensions[0]
        }, t.prototype.getObjectProperty = function () {
          return this.isObjectProperty() ? this._dimensions[0] : null
        }, t.prototype.isScalar = function () {
          return this._isScalar
        }, t.prototype.toArray = function () {
          for (var e = [], t = 0, a = this._dimensions.length, n; t < a; t++) n = this._dimensions[t], e.push("string" == typeof n ? n : n.toArray());
          return e
        }, t.prototype.valueOf = t.prototype.toArray, t.prototype.toString = function () {
          for (var e = [], t = 0, a = this._dimensions.length, n; t < a; t++) n = this._dimensions[t], "string" == typeof n ? e.push(JSON.stringify(n)) : e.push(n.toString());
          return "[" + e.join(", ") + "]"
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "Index",
            dimensions: this._dimensions
          }
        }, t.fromJSON = function (e) {
          return t.create(e.dimensions)
        }, t
      }, {
        isClass: !0
      }),
      so = Object(ea.a)("FibonacciHeap", ["smaller", "larger"], function (e) {
        function t() {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          this._minimum = null, this._size = 0
        }

        function a(e, t, a) {
          t.key = a;
          var r = t.parent;
          return r && s(t.key, r.key) && (n(e, t, r), i(e, r)), s(t.key, e.key) && (e = t), e
        }

        function n(e, t, a) {
          t.left.right = t.right, t.right.left = t.left, a.degree--, a.child === t && (a.child = t.right), 0 === a.degree && (a.child = null), t.left = e, t.right = e.right, e.right = t, t.right.left = t, t.parent = null, t.mark = !1
        }

        function i(e, t) {
          var a = t.parent;
          a && (t.mark ? (n(e, t, a), i(a)) : t.mark = !0)
        }

        function r(e, t) {
          var a = Math.floor(Math.log(t) * l) + 1,
            n = Array(a),
            r = 0,
            m = e;
          if (m)
            for (r++, m = m.right; m !== e;) r++, m = m.right;
          for (var c; 0 < r;) {
            for (var u = m.degree, g = m.right; c = n[u], !!c;) {
              if (o(m.key, c.key)) {
                var f = c;
                c = m, m = f
              }
              p(c, m), n[u] = null, u++
            }
            n[u] = m, m = g, r--
          }
          e = null;
          for (var h = 0; h < a; h++)(c = n[h], !!c) && (e ? (c.left.right = c.right, c.right.left = c.left, c.left = e, c.right = e.right, e.right = c, c.right.left = c, s(c.key, e.key) && (e = c)) : e = c);
          return e
        }
        var s = e.smaller,
          o = e.larger,
          l = 1 / Math.log((1 + Math.sqrt(5)) / 2);
        t.prototype.type = "FibonacciHeap", t.prototype.isFibonacciHeap = !0, t.prototype.insert = function (e, t) {
          var a = {
            key: e,
            value: t,
            degree: 0
          };
          if (this._minimum) {
            var n = this._minimum;
            a.left = n, a.right = n.right, n.right = a, a.right.left = a, s(e, n.key) && (this._minimum = a)
          } else a.left = a, a.right = a, this._minimum = a;
          return this._size++, a
        }, t.prototype.size = function () {
          return this._size
        }, t.prototype.clear = function () {
          this._minimum = null, this._size = 0
        }, t.prototype.isEmpty = function () {
          return 0 === this._size
        }, t.prototype.extractMinimum = function () {
          var e = this._minimum;
          if (null === e) return e;
          for (var t = this._minimum, a = e.degree, n = e.child, i; 0 < a;) i = n.right, n.left.right = n.right, n.right.left = n.left, n.left = t, n.right = t.right, t.right = n, n.right.left = n, n.parent = null, n = i, a--;
          return e.left.right = e.right, e.right.left = e.left, e === e.right ? t = null : (t = e.right, t = r(t, this._size)), this._size--, this._minimum = t, e
        }, t.prototype.remove = function (e) {
          this._minimum = a(this._minimum, e, -1), this.extractMinimum()
        };
        var p = function (e, t) {
          e.left.right = e.right, e.right.left = e.left, e.parent = t, t.child ? (e.left = t.child, e.right = t.child.right, t.child.right = e, e.right.left = e) : (t.child = e, e.right = e, e.left = e), t.degree++, e.mark = !1
        };
        return t
      }, {
        isClass: !0
      }),
      oo = Object(ea.a)("Spa", ["addScalar", "equalScalar", "FibonacciHeap"], function (e) {
        function t() {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          this._values = [], this._heap = new i
        }
        var a = e.addScalar,
          n = e.equalScalar,
          i = e.FibonacciHeap;
        return t.prototype.type = "Spa", t.prototype.isSpa = !0, t.prototype.set = function (e, t) {
          if (!this._values[e]) {
            var a = this._heap.insert(e, t);
            this._values[e] = a
          } else this._values[e].value = t
        }, t.prototype.get = function (e) {
          var t = this._values[e];
          return t ? t.value : 0
        }, t.prototype.accumulate = function (e, t) {
          var n = this._values[e];
          n ? n.value = a(n.value, t) : (n = this._heap.insert(e, t), this._values[e] = n)
        }, t.prototype.forEach = function (e, t, a) {
          var r = this._heap,
            s = this._values,
            o = [],
            l = r.extractMinimum();
          for (l && o.push(l); l && l.key <= t;) l.key >= e && !n(l.value, 0) && a(l.key, l.value, this), l = r.extractMinimum(), l && o.push(l);
          for (var p = 0, m; p < o.length; p++) m = o[p], l = r.insert(m.key, m.value), s[l.key] = l
        }, t.prototype.swap = function (e, t) {
          var a = this._values[e],
            n = this._values[t];
          if (!a && n) a = this._heap.insert(e, n.value), this._heap.remove(n), this._values[e] = a, this._values[t] = void 0;
          else if (a && !n) n = this._heap.insert(t, a.value), this._heap.remove(a), this._values[t] = n, this._values[e] = void 0;
          else if (a && n) {
            var i = a.value;
            a.value = n.value, n.value = i
          }
        }, t
      }, {
        isClass: !0
      }),
      lo = ge(function (e) {
        return new e(1).exp()
      }, Re),
      po = ge(function (e) {
        return new e(1).plus(new e(5).sqrt()).div(2)
      }, Re),
      mo = ge(function (e) {
        return e.acos(-1)
      }, Re),
      co = ge(function (e) {
        return mo(e).times(2)
      }, Re),
      uo = Object(ea.a)("Unit", ["?on", "config", "addScalar", "subtract", "multiplyScalar", "divideScalar", "pow", "abs", "fix", "round", "equal", "isNumeric", "format", "number", "Complex", "BigNumber", "Fraction"], function (e) {
        function t(e, a) {
          if (!(this instanceof t)) throw new Error("Constructor must be called with the new operator");
          if (!(null === e || void 0 === e || _(e) || Object(Yt.j)(e))) throw new TypeError("First parameter in Unit constructor must be number, BigNumber, Fraction, Complex, or undefined");
          if (void 0 !== a && ("string" != typeof a || "" === a)) throw new TypeError("Second parameter in Unit constructor must be a string");
          if (void 0 !== a) {
            var n = t.parse(a);
            this.units = n.units, this.dimensions = n.dimensions
          } else {
            this.units = [{
              unit: U,
              prefix: z.NONE,
              power: 0
            }], this.dimensions = [];
            for (var r = 0; r < D.length; r++) this.dimensions[r] = 0
          }
          this.value = void 0 !== e && null !== e ? this._normalize(e) : null, this.fixPrefix = !1, this.skipAutomaticSimplification = !0
        }

        function a() {
          for (;
            " " === B || "\t" === B;) r()
        }

        function n(e) {
          return "0" <= e && "9" >= e || "." === e
        }

        function i(e) {
          return "0" <= e && "9" >= e
        }

        function r() {
          q++, B = I.charAt(q)
        }

        function s(e) {
          q = e, B = I.charAt(q)
        }

        function o() {
          var e = "",
            t;
          if (t = q, "+" === B ? r() : "-" === B && (e += B, r()), !n(B)) return s(t), null;
          if ("." !== B) {
            for (; i(B);) e += B, r();
            "." === B && (e += B, r())
          } else if (e += B, r(), !i(B)) return s(t), null;
          for (; i(B);) e += B, r();
          if ("E" === B || "e" === B) {
            var a = "",
              o = q;
            if (a += B, r(), ("+" === B || "-" === B) && (a += B, r()), !i(B)) return s(o), e;
            for (e += a; i(B);) e += B, r()
          }
          return e
        }

        function l() {
          for (var e = "", t = I.charCodeAt(q); 48 <= t && 57 >= t || 65 <= t && 90 >= t || 97 <= t && 122 >= t;) e += B, r(), t = I.charCodeAt(q);
          return t = e.charCodeAt(0), 65 <= t && 90 >= t || 97 <= t && 122 >= t ? e || null : null
        }

        function m(e) {
          return B === e ? (r(), e) : null
        }

        function d(e) {
          if (L.hasOwnProperty(e)) {
            var t = L[e],
              a = t.prefixes[""];
            return {
              unit: t,
              prefix: a
            }
          }
          for (var n in L)
            if (L.hasOwnProperty(n) && Object(xa.b)(e, n)) {
              var i = L[n],
                r = e.length - n.length,
                s = e.substring(0, r),
                o = i.prefixes.hasOwnProperty(s) ? i.prefixes[s] : void 0;
              if (void 0 !== o) return {
                unit: i,
                prefix: o
              }
            } return null
        }

        function u(e) {
          return e.equalBase(P.NONE) && null !== e.value && !p.predictable ? e.value : e
        }

        function g(e) {
          if ("BigNumber" === e.number) {
            var t = mo(k);
            L.rad.value = new k(1), L.deg.value = t.div(180), L.grad.value = t.div(200), L.cycle.value = t.times(2), L.arcsec.value = t.div(648e3), L.arcmin.value = t.div(10800)
          } else L.rad.value = 1, L.deg.value = Math.PI / 180, L.grad.value = Math.PI / 200, L.cycle.value = 2 * Math.PI, L.arcsec.value = Math.PI / 648e3, L.arcmin.value = Math.PI / 10800;
          L.radian.value = L.rad.value, L.degree.value = L.deg.value, L.gradian.value = L.grad.value
        }

        function y(e) {
          for (var t = 0; t < e.length; t++) {
            var a = e.charAt(t),
              n = function (e) {
                return /^[a-zA-Z]$/.test(e)
              },
              r = function (e) {
                return "0" <= e && "9" >= e
              };
            if (0 == t && !n(a)) throw new Error("Invalid unit name (must begin with alpha character): \"" + e + "\"");
            if (0 < t && !(n(a) || r(a))) throw new Error("Invalid unit name (only alphanumeric characters are allowed): \"" + e + "\"")
          }
        }
        var x = e.on,
          p = e.config,
          f = e.addScalar,
          h = e.subtract,
          b = e.multiplyScalar,
          v = e.divideScalar,
          N = e.pow,
          M = e.abs,
          S = e.fix,
          A = e.round,
          O = e.equal,
          _ = e.isNumeric,
          C = e.format,
          E = e.number,
          w = e.Complex,
          k = e.BigNumber,
          T = e.Fraction;
        t.prototype.type = "Unit", t.prototype.isUnit = !0;
        var I, q, B;
        t.parse = function (e, n) {
          if (n = n || {}, I = e, q = -1, B = "", "string" != typeof I) throw new TypeError("Invalid argument in Unit.parse, string expected");
          var s = new t;
          s.units = [];
          var c = 1,
            u = !1;
          r(), a();
          var g = o(),
            y = null;
          if (g) {
            if ("BigNumber" === p.number) y = new k(g);
            else if ("Fraction" === p.number) try {
              y = new T(g)
            } catch (e) {
              y = parseFloat(g)
            } else y = parseFloat(g);
            a(), m("*") ? (c = 1, u = !0) : m("/") && (c = -1, u = !0)
          }
          for (var x = [], f = 1;;) {
            for (a();
              "(" === B;) x.push(c), f *= c, c = 1, r(), a();
            var h = void 0;
            if (B) {
              var b = B;
              if (h = l(), null === h) throw new SyntaxError("Unexpected \"" + b + "\" in \"" + I + "\" at index " + q.toString())
            } else break;
            var v = d(h);
            if (null === v) throw new SyntaxError("Unit \"" + h + "\" not found.");
            var N = c * f;
            if (a(), m("^")) {
              a();
              var M = o();
              if (null === M) throw new SyntaxError("In \"" + e + "\", \"^\" must be followed by a floating-point number");
              N *= M
            }
            s.units.push({
              unit: v.unit,
              prefix: v.prefix,
              power: N
            });
            for (var S = 0; S < D.length; S++) s.dimensions[S] += (v.unit.dimensions[S] || 0) * N;
            for (a();
              ")" === B;) {
              if (0 === x.length) throw new SyntaxError("Unmatched \")\" in \"" + I + "\" at index " + q.toString());
              f /= x.pop(), r(), a()
            }
            if (u = !1, m("*") ? (c = 1, u = !0) : m("/") ? (c = -1, u = !0) : c = 1, v.unit.base) {
              var A = v.unit.base.key;
              H.auto[A] = {
                unit: v.unit,
                prefix: v.prefix
              }
            }
          }
          if (a(), B) throw new SyntaxError("Could not parse: \"" + e + "\"");
          if (u) throw new SyntaxError("Trailing characters: \"" + e + "\"");
          if (0 !== x.length) throw new SyntaxError("Unmatched \"(\" in \"" + I + "\"");
          if (0 === s.units.length && !n.allowNoUnits) throw new SyntaxError("\"" + e + "\" contains no units");
          return s.value = void 0 === y ? null : s._normalize(y), s
        }, t.prototype.clone = function () {
          var e = new t;
          e.fixPrefix = this.fixPrefix, e.skipAutomaticSimplification = this.skipAutomaticSimplification, e.value = Object(fa.a)(this.value), e.dimensions = this.dimensions.slice(0), e.units = [];
          for (var a = 0; a < this.units.length; a++)
            for (var n in e.units[a] = {}, this.units[a]) this.units[a].hasOwnProperty(n) && (e.units[a][n] = this.units[a][n]);
          return e
        }, t.prototype._isDerived = function () {
          return 0 !== this.units.length && (1 < this.units.length || 1e-15 < Math.abs(this.units[0].power - 1))
        }, t.prototype._normalize = function (e) {
          var a, n, r, s, o;
          if (null === e || void 0 === e || 0 === this.units.length) return e;
          if (this._isDerived()) {
            var l = e;
            o = t._getNumberConverter(Object(Yt.M)(e));
            for (var p = 0; p < this.units.length; p++) a = o(this.units[p].unit.value), s = o(this.units[p].prefix.value), r = o(this.units[p].power), l = b(l, N(b(a, s), r));
            return l
          }
          return o = t._getNumberConverter(Object(Yt.M)(e)), a = o(this.units[0].unit.value), n = o(this.units[0].unit.offset), s = o(this.units[0].prefix.value), b(f(e, n), b(a, s))
        }, t.prototype._denormalize = function (e, a) {
          var n, r, s, o, l;
          if (null === e || void 0 === e || 0 === this.units.length) return e;
          if (this._isDerived()) {
            var p = e;
            l = t._getNumberConverter(Object(Yt.M)(e));
            for (var m = 0; m < this.units.length; m++) n = l(this.units[m].unit.value), o = l(this.units[m].prefix.value), s = l(this.units[m].power), p = v(p, N(b(n, o), s));
            return p
          }
          return l = t._getNumberConverter(Object(Yt.M)(e)), n = l(this.units[0].unit.value), o = l(this.units[0].prefix.value), r = l(this.units[0].unit.offset), void 0 === a || null === a ? h(v(v(e, n), o), r) : h(v(v(e, n), a), r)
        }, t.isValuelessUnit = function (e) {
          return null !== d(e)
        }, t.prototype.hasBase = function (e) {
          if ("string" == typeof e && (e = P[e]), !e) return !1;
          for (var t = 0; t < D.length; t++)
            if (1e-12 < Math.abs((this.dimensions[t] || 0) - (e.dimensions[t] || 0))) return !1;
          return !0
        }, t.prototype.equalBase = function (e) {
          for (var t = 0; t < D.length; t++)
            if (1e-12 < Math.abs((this.dimensions[t] || 0) - (e.dimensions[t] || 0))) return !1;
          return !0
        }, t.prototype.equals = function (e) {
          return this.equalBase(e) && O(this.value, e.value)
        }, t.prototype.multiply = function (e) {
          for (var t = this.clone(), a = 0; a < D.length; a++) t.dimensions[a] = (this.dimensions[a] || 0) + (e.dimensions[a] || 0);
          for (var n = 0, r; n < e.units.length; n++) {
            for (var s in r = {}, e.units[n]) r[s] = e.units[n][s];
            t.units.push(r)
          }
          if (null !== this.value || null !== e.value) {
            var o = null === this.value ? this._normalize(1) : this.value,
              l = null === e.value ? e._normalize(1) : e.value;
            t.value = b(o, l)
          } else t.value = null;
          return t.skipAutomaticSimplification = !1, u(t)
        }, t.prototype.divide = function (e) {
          for (var t = this.clone(), a = 0; a < D.length; a++) t.dimensions[a] = (this.dimensions[a] || 0) - (e.dimensions[a] || 0);
          for (var n = 0, r; n < e.units.length; n++) {
            for (var s in r = {}, e.units[n]) r[s] = e.units[n][s];
            r.power = -r.power, t.units.push(r)
          }
          if (null !== this.value || null !== e.value) {
            var o = null === this.value ? this._normalize(1) : this.value,
              l = null === e.value ? e._normalize(1) : e.value;
            t.value = v(o, l)
          } else t.value = null;
          return t.skipAutomaticSimplification = !1, u(t)
        }, t.prototype.pow = function (e) {
          for (var t = this.clone(), a = 0; a < D.length; a++) t.dimensions[a] = (this.dimensions[a] || 0) * e;
          for (var n = 0; n < t.units.length; n++) t.units[n].power *= e;
          return t.value = null === t.value ? null : N(t.value, e), t.skipAutomaticSimplification = !1, u(t)
        }, t.prototype.abs = function () {
          var e = this.clone();
          for (var t in e.value = null === e.value ? null : M(e.value), e.units)("VA" === e.units[t].unit.name || "VAR" === e.units[t].unit.name) && (e.units[t].unit = L.W);
          return e
        }, t.prototype.to = function (e) {
          var a = null === this.value ? this._normalize(1) : this.value,
            n;
          if ("string" == typeof e) {
            if (n = t.parse(e), !this.equalBase(n)) throw new Error("Units do not match ('".concat(n.toString(), "' != '").concat(this.toString(), "')"));
            if (null !== n.value) throw new Error("Cannot convert to a unit with a value");
            return n.value = Object(fa.a)(a), n.fixPrefix = !0, n.skipAutomaticSimplification = !0, n
          }
          if (Object(Yt.L)(e)) {
            if (!this.equalBase(e)) throw new Error("Units do not match ('".concat(e.toString(), "' != '").concat(this.toString(), "')"));
            if (null !== e.value) throw new Error("Cannot convert to a unit with a value");
            return n = e.clone(), n.value = Object(fa.a)(a), n.fixPrefix = !0, n.skipAutomaticSimplification = !0, n
          }
          throw new Error("String or Unit expected as parameter")
        }, t.prototype.toNumber = function (e) {
          return E(this.toNumeric(e))
        }, t.prototype.toNumeric = function (e) {
          var t;
          return t = e ? this.to(e) : this.clone(), t._isDerived() ? t._denormalize(t.value) : t._denormalize(t.value, t.units[0].prefix.value)
        }, t.prototype.toString = function () {
          return this.format()
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "Unit",
            value: this._denormalize(this.value),
            unit: this.formatUnits(),
            fixPrefix: this.fixPrefix
          }
        }, t.fromJSON = function (e) {
          var a = new t(e.value, e.unit);
          return a.fixPrefix = e.fixPrefix || !1, a
        }, t.prototype.valueOf = t.prototype.toString, t.prototype.simplify = function () {
          var e = this.clone(),
            t = [],
            a;
          for (var n in G)
            if (e.hasBase(P[n])) {
              a = n;
              break
            } if ("NONE" === a) e.units = [];
          else {
            var r;
            if (a && G.hasOwnProperty(a) && (r = G[a]), r) e.units = [{
              unit: r.unit,
              prefix: r.prefix,
              power: 1
            }];
            else {
              for (var s = !1, o = 0, l; o < D.length; o++) l = D[o], 1e-12 < Math.abs(e.dimensions[o] || 0) && (G.hasOwnProperty(l) ? t.push({
                unit: G[l].unit,
                prefix: G[l].prefix,
                power: e.dimensions[o] || 0
              }) : s = !0);
              t.length < e.units.length && !s && (e.units = t)
            }
          }
          return e
        }, t.prototype.toSI = function () {
          for (var e = this.clone(), t = [], a = 0, n; a < D.length; a++)
            if (n = D[a], 1e-12 < Math.abs(e.dimensions[a] || 0))
              if (H.si.hasOwnProperty(n)) t.push({
                unit: H.si[n].unit,
                prefix: H.si[n].prefix,
                power: e.dimensions[a] || 0
              });
              else throw new Error("Cannot express custom unit " + n + " in SI units");
          return e.units = t, e.fixPrefix = !0, e.skipAutomaticSimplification = !0, e
        }, t.prototype.formatUnits = function () {
          for (var e = "", t = "", a = 0, n = 0, r = 0; r < this.units.length; r++) 0 < this.units[r].power ? (a++, e += " " + this.units[r].prefix.name + this.units[r].unit.name, 1e-15 < Math.abs(this.units[r].power - 1) && (e += "^" + this.units[r].power)) : 0 > this.units[r].power && n++;
          if (0 < n)
            for (var s = 0; s < this.units.length; s++) 0 > this.units[s].power && (0 < a ? (t += " " + this.units[s].prefix.name + this.units[s].unit.name, 1e-15 < Math.abs(this.units[s].power + 1) && (t += "^" + -this.units[s].power)) : (t += " " + this.units[s].prefix.name + this.units[s].unit.name, t += "^" + this.units[s].power));
          e = e.substr(1), t = t.substr(1), 1 < a && 0 < n && (e = "(" + e + ")"), 1 < n && 0 < a && (t = "(" + t + ")");
          var o = e;
          return 0 < a && 0 < n && (o += " / "), o += t, o
        }, t.prototype.format = function (e) {
          var t = this.skipAutomaticSimplification || null === this.value ? this.clone() : this.simplify(),
            a = !1;
          for (var n in "undefined" != typeof t.value && null !== t.value && Object(Yt.j)(t.value) && (a = 1e-14 > Math.abs(t.value.re)), t.units) t.units[n].unit && ("VA" === t.units[n].unit.name && a ? t.units[n].unit = L.VAR : "VAR" === t.units[n].unit.name && !a && (t.units[n].unit = L.VA));
          1 === t.units.length && !t.fixPrefix && 1e-14 > Math.abs(t.units[0].power - Math.round(t.units[0].power)) && (t.units[0].prefix = t._bestPrefix());
          var i = t._denormalize(t.value),
            r = null === t.value ? "" : C(i, e || {}),
            s = t.formatUnits();
          return t.value && Object(Yt.j)(t.value) && (r = "(" + r + ")"), 0 < s.length && 0 < r.length && (r += " "), r += s, r
        }, t.prototype._bestPrefix = function () {
          if (1 !== this.units.length) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
          if (1e-14 <= Math.abs(this.units[0].power - Math.round(this.units[0].power))) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
          var e = null === this.value ? 0 : M(this.value),
            t = M(this.units[0].unit.value),
            a = this.units[0].prefix;
          if (0 === e) return a;
          var n = this.units[0].power,
            i = Math.log(e / Math.pow(a.value * t, n)) / Math.LN10 - 1.2;
          if (-2.200001 < i && 1.800001 > i) return a;
          i = Math.abs(i);
          var r = this.units[0].unit.prefixes;
          for (var s in r)
            if (r.hasOwnProperty(s)) {
              var o = r[s];
              if (o.scientific) {
                var l = Math.abs(Math.log(e / Math.pow(o.value * t, n)) / Math.LN10 - 1.2);
                (l < i || l === i && o.name.length < a.name.length) && (a = o, i = l)
              }
            } return a
        }, t.prototype.splitUnit = function (e) {
          for (var a = this.clone(), n = [], r = 0; r < e.length && (a = a.to(e[r]), r != e.length - 1); r++) {
            var s = a.toNumeric(),
              o = A(s),
              l = void 0,
              p = O(o, s);
            l = p ? o : S(a.toNumeric());
            var m = new t(l, e[r].toString());
            n.push(m), a = h(a, m)
          }
          for (var c = 0, d = 0; d < n.length; d++) c = f(c, n[d].value);
          return O(c, this.value) && (a.value = 0), n.push(a), n
        };
        var z = {
          NONE: {
            "": {
              name: "",
              value: 1,
              scientific: !0
            }
          },
          SHORT: {
            "": {
              name: "",
              value: 1,
              scientific: !0
            },
            da: {
              name: "da",
              value: 10,
              scientific: !1
            },
            h: {
              name: "h",
              value: 100,
              scientific: !1
            },
            k: {
              name: "k",
              value: 1e3,
              scientific: !0
            },
            M: {
              name: "M",
              value: 1e6,
              scientific: !0
            },
            G: {
              name: "G",
              value: 1e9,
              scientific: !0
            },
            T: {
              name: "T",
              value: 1e12,
              scientific: !0
            },
            P: {
              name: "P",
              value: 1e15,
              scientific: !0
            },
            E: {
              name: "E",
              value: 1e18,
              scientific: !0
            },
            Z: {
              name: "Z",
              value: 1e21,
              scientific: !0
            },
            Y: {
              name: "Y",
              value: 1e24,
              scientific: !0
            },
            d: {
              name: "d",
              value: .1,
              scientific: !1
            },
            c: {
              name: "c",
              value: .01,
              scientific: !1
            },
            m: {
              name: "m",
              value: 1e-3,
              scientific: !0
            },
            u: {
              name: "u",
              value: 1e-6,
              scientific: !0
            },
            n: {
              name: "n",
              value: 1e-9,
              scientific: !0
            },
            p: {
              name: "p",
              value: 1e-12,
              scientific: !0
            },
            f: {
              name: "f",
              value: 1e-15,
              scientific: !0
            },
            a: {
              name: "a",
              value: 1e-18,
              scientific: !0
            },
            z: {
              name: "z",
              value: 1e-21,
              scientific: !0
            },
            y: {
              name: "y",
              value: 1e-24,
              scientific: !0
            }
          },
          LONG: {
            "": {
              name: "",
              value: 1,
              scientific: !0
            },
            deca: {
              name: "deca",
              value: 10,
              scientific: !1
            },
            hecto: {
              name: "hecto",
              value: 100,
              scientific: !1
            },
            kilo: {
              name: "kilo",
              value: 1e3,
              scientific: !0
            },
            mega: {
              name: "mega",
              value: 1e6,
              scientific: !0
            },
            giga: {
              name: "giga",
              value: 1e9,
              scientific: !0
            },
            tera: {
              name: "tera",
              value: 1e12,
              scientific: !0
            },
            peta: {
              name: "peta",
              value: 1e15,
              scientific: !0
            },
            exa: {
              name: "exa",
              value: 1e18,
              scientific: !0
            },
            zetta: {
              name: "zetta",
              value: 1e21,
              scientific: !0
            },
            yotta: {
              name: "yotta",
              value: 1e24,
              scientific: !0
            },
            deci: {
              name: "deci",
              value: .1,
              scientific: !1
            },
            centi: {
              name: "centi",
              value: .01,
              scientific: !1
            },
            milli: {
              name: "milli",
              value: 1e-3,
              scientific: !0
            },
            micro: {
              name: "micro",
              value: 1e-6,
              scientific: !0
            },
            nano: {
              name: "nano",
              value: 1e-9,
              scientific: !0
            },
            pico: {
              name: "pico",
              value: 1e-12,
              scientific: !0
            },
            femto: {
              name: "femto",
              value: 1e-15,
              scientific: !0
            },
            atto: {
              name: "atto",
              value: 1e-18,
              scientific: !0
            },
            zepto: {
              name: "zepto",
              value: 1e-21,
              scientific: !0
            },
            yocto: {
              name: "yocto",
              value: 1e-24,
              scientific: !0
            }
          },
          SQUARED: {
            "": {
              name: "",
              value: 1,
              scientific: !0
            },
            da: {
              name: "da",
              value: 100,
              scientific: !1
            },
            h: {
              name: "h",
              value: 1e4,
              scientific: !1
            },
            k: {
              name: "k",
              value: 1e6,
              scientific: !0
            },
            M: {
              name: "M",
              value: 1e12,
              scientific: !0
            },
            G: {
              name: "G",
              value: 1e18,
              scientific: !0
            },
            T: {
              name: "T",
              value: 1e24,
              scientific: !0
            },
            P: {
              name: "P",
              value: 1e30,
              scientific: !0
            },
            E: {
              name: "E",
              value: 1e36,
              scientific: !0
            },
            Z: {
              name: "Z",
              value: 1e42,
              scientific: !0
            },
            Y: {
              name: "Y",
              value: 1e48,
              scientific: !0
            },
            d: {
              name: "d",
              value: .01,
              scientific: !1
            },
            c: {
              name: "c",
              value: 1e-4,
              scientific: !1
            },
            m: {
              name: "m",
              value: 1e-6,
              scientific: !0
            },
            u: {
              name: "u",
              value: 1e-12,
              scientific: !0
            },
            n: {
              name: "n",
              value: 1e-18,
              scientific: !0
            },
            p: {
              name: "p",
              value: 1e-24,
              scientific: !0
            },
            f: {
              name: "f",
              value: 1e-30,
              scientific: !0
            },
            a: {
              name: "a",
              value: 1e-36,
              scientific: !0
            },
            z: {
              name: "z",
              value: 1e-42,
              scientific: !0
            },
            y: {
              name: "y",
              value: 1e-48,
              scientific: !0
            }
          },
          CUBIC: {
            "": {
              name: "",
              value: 1,
              scientific: !0
            },
            da: {
              name: "da",
              value: 1e3,
              scientific: !1
            },
            h: {
              name: "h",
              value: 1e6,
              scientific: !1
            },
            k: {
              name: "k",
              value: 1e9,
              scientific: !0
            },
            M: {
              name: "M",
              value: 1e18,
              scientific: !0
            },
            G: {
              name: "G",
              value: 1e27,
              scientific: !0
            },
            T: {
              name: "T",
              value: 1e36,
              scientific: !0
            },
            P: {
              name: "P",
              value: 1e45,
              scientific: !0
            },
            E: {
              name: "E",
              value: 1e54,
              scientific: !0
            },
            Z: {
              name: "Z",
              value: 1e63,
              scientific: !0
            },
            Y: {
              name: "Y",
              value: 1e72,
              scientific: !0
            },
            d: {
              name: "d",
              value: 1e-3,
              scientific: !1
            },
            c: {
              name: "c",
              value: 1e-6,
              scientific: !1
            },
            m: {
              name: "m",
              value: 1e-9,
              scientific: !0
            },
            u: {
              name: "u",
              value: 1e-18,
              scientific: !0
            },
            n: {
              name: "n",
              value: 1e-27,
              scientific: !0
            },
            p: {
              name: "p",
              value: 1e-36,
              scientific: !0
            },
            f: {
              name: "f",
              value: 1e-45,
              scientific: !0
            },
            a: {
              name: "a",
              value: 1e-54,
              scientific: !0
            },
            z: {
              name: "z",
              value: 1e-63,
              scientific: !0
            },
            y: {
              name: "y",
              value: 1e-72,
              scientific: !0
            }
          },
          BINARY_SHORT_SI: {
            "": {
              name: "",
              value: 1,
              scientific: !0
            },
            k: {
              name: "k",
              value: 1e3,
              scientific: !0
            },
            M: {
              name: "M",
              value: 1e6,
              scientific: !0
            },
            G: {
              name: "G",
              value: 1e9,
              scientific: !0
            },
            T: {
              name: "T",
              value: 1e12,
              scientific: !0
            },
            P: {
              name: "P",
              value: 1e15,
              scientific: !0
            },
            E: {
              name: "E",
              value: 1e18,
              scientific: !0
            },
            Z: {
              name: "Z",
              value: 1e21,
              scientific: !0
            },
            Y: {
              name: "Y",
              value: 1e24,
              scientific: !0
            }
          },
          BINARY_SHORT_IEC: {
            "": {
              name: "",
              value: 1,
              scientific: !0
            },
            Ki: {
              name: "Ki",
              value: 1024,
              scientific: !0
            },
            Mi: {
              name: "Mi",
              value: Math.pow(1024, 2),
              scientific: !0
            },
            Gi: {
              name: "Gi",
              value: Math.pow(1024, 3),
              scientific: !0
            },
            Ti: {
              name: "Ti",
              value: Math.pow(1024, 4),
              scientific: !0
            },
            Pi: {
              name: "Pi",
              value: Math.pow(1024, 5),
              scientific: !0
            },
            Ei: {
              name: "Ei",
              value: Math.pow(1024, 6),
              scientific: !0
            },
            Zi: {
              name: "Zi",
              value: Math.pow(1024, 7),
              scientific: !0
            },
            Yi: {
              name: "Yi",
              value: Math.pow(1024, 8),
              scientific: !0
            }
          },
          BINARY_LONG_SI: {
            "": {
              name: "",
              value: 1,
              scientific: !0
            },
            kilo: {
              name: "kilo",
              value: 1e3,
              scientific: !0
            },
            mega: {
              name: "mega",
              value: 1e6,
              scientific: !0
            },
            giga: {
              name: "giga",
              value: 1e9,
              scientific: !0
            },
            tera: {
              name: "tera",
              value: 1e12,
              scientific: !0
            },
            peta: {
              name: "peta",
              value: 1e15,
              scientific: !0
            },
            exa: {
              name: "exa",
              value: 1e18,
              scientific: !0
            },
            zetta: {
              name: "zetta",
              value: 1e21,
              scientific: !0
            },
            yotta: {
              name: "yotta",
              value: 1e24,
              scientific: !0
            }
          },
          BINARY_LONG_IEC: {
            "": {
              name: "",
              value: 1,
              scientific: !0
            },
            kibi: {
              name: "kibi",
              value: 1024,
              scientific: !0
            },
            mebi: {
              name: "mebi",
              value: Math.pow(1024, 2),
              scientific: !0
            },
            gibi: {
              name: "gibi",
              value: Math.pow(1024, 3),
              scientific: !0
            },
            tebi: {
              name: "tebi",
              value: Math.pow(1024, 4),
              scientific: !0
            },
            pebi: {
              name: "pebi",
              value: Math.pow(1024, 5),
              scientific: !0
            },
            exi: {
              name: "exi",
              value: Math.pow(1024, 6),
              scientific: !0
            },
            zebi: {
              name: "zebi",
              value: Math.pow(1024, 7),
              scientific: !0
            },
            yobi: {
              name: "yobi",
              value: Math.pow(1024, 8),
              scientific: !0
            }
          },
          BTU: {
            "": {
              name: "",
              value: 1,
              scientific: !0
            },
            MM: {
              name: "MM",
              value: 1e6,
              scientific: !0
            }
          }
        };
        z.SHORTLONG = Le(z.SHORT, z.LONG), z.BINARY_SHORT = Le(z.BINARY_SHORT_SI, z.BINARY_SHORT_IEC), z.BINARY_LONG = Le(z.BINARY_LONG_SI, z.BINARY_LONG_IEC);
        var D = ["MASS", "LENGTH", "TIME", "CURRENT", "TEMPERATURE", "LUMINOUS_INTENSITY", "AMOUNT_OF_SUBSTANCE", "ANGLE", "BIT"],
          P = {
            NONE: {
              dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            MASS: {
              dimensions: [1, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            LENGTH: {
              dimensions: [0, 1, 0, 0, 0, 0, 0, 0, 0]
            },
            TIME: {
              dimensions: [0, 0, 1, 0, 0, 0, 0, 0, 0]
            },
            CURRENT: {
              dimensions: [0, 0, 0, 1, 0, 0, 0, 0, 0]
            },
            TEMPERATURE: {
              dimensions: [0, 0, 0, 0, 1, 0, 0, 0, 0]
            },
            LUMINOUS_INTENSITY: {
              dimensions: [0, 0, 0, 0, 0, 1, 0, 0, 0]
            },
            AMOUNT_OF_SUBSTANCE: {
              dimensions: [0, 0, 0, 0, 0, 0, 1, 0, 0]
            },
            FORCE: {
              dimensions: [1, 1, -2, 0, 0, 0, 0, 0, 0]
            },
            SURFACE: {
              dimensions: [0, 2, 0, 0, 0, 0, 0, 0, 0]
            },
            VOLUME: {
              dimensions: [0, 3, 0, 0, 0, 0, 0, 0, 0]
            },
            ENERGY: {
              dimensions: [1, 2, -2, 0, 0, 0, 0, 0, 0]
            },
            POWER: {
              dimensions: [1, 2, -3, 0, 0, 0, 0, 0, 0]
            },
            PRESSURE: {
              dimensions: [1, -1, -2, 0, 0, 0, 0, 0, 0]
            },
            ELECTRIC_CHARGE: {
              dimensions: [0, 0, 1, 1, 0, 0, 0, 0, 0]
            },
            ELECTRIC_CAPACITANCE: {
              dimensions: [-1, -2, 4, 2, 0, 0, 0, 0, 0]
            },
            ELECTRIC_POTENTIAL: {
              dimensions: [1, 2, -3, -1, 0, 0, 0, 0, 0]
            },
            ELECTRIC_RESISTANCE: {
              dimensions: [1, 2, -3, -2, 0, 0, 0, 0, 0]
            },
            ELECTRIC_INDUCTANCE: {
              dimensions: [1, 2, -2, -2, 0, 0, 0, 0, 0]
            },
            ELECTRIC_CONDUCTANCE: {
              dimensions: [-1, -2, 3, 2, 0, 0, 0, 0, 0]
            },
            MAGNETIC_FLUX: {
              dimensions: [1, 2, -2, -1, 0, 0, 0, 0, 0]
            },
            MAGNETIC_FLUX_DENSITY: {
              dimensions: [1, 0, -2, -1, 0, 0, 0, 0, 0]
            },
            FREQUENCY: {
              dimensions: [0, 0, -1, 0, 0, 0, 0, 0, 0]
            },
            ANGLE: {
              dimensions: [0, 0, 0, 0, 0, 0, 0, 1, 0]
            },
            BIT: {
              dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 1]
            }
          };
        for (var R in P) P[R].key = R;
        var U = {
            name: "",
            base: {},
            value: 1,
            offset: 0,
            dimensions: D.map(function () {
              return 0
            })
          },
          L = {
            meter: {
              name: "meter",
              base: P.LENGTH,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            inch: {
              name: "inch",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: .0254,
              offset: 0
            },
            foot: {
              name: "foot",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: .3048,
              offset: 0
            },
            yard: {
              name: "yard",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: .9144,
              offset: 0
            },
            mile: {
              name: "mile",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: 1609.344,
              offset: 0
            },
            link: {
              name: "link",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: .201168,
              offset: 0
            },
            rod: {
              name: "rod",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: 5.0292,
              offset: 0
            },
            chain: {
              name: "chain",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: 20.1168,
              offset: 0
            },
            angstrom: {
              name: "angstrom",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: 1e-10,
              offset: 0
            },
            m: {
              name: "m",
              base: P.LENGTH,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            in: {
              name: "in",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: .0254,
              offset: 0
            },
            ft: {
              name: "ft",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: .3048,
              offset: 0
            },
            yd: {
              name: "yd",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: .9144,
              offset: 0
            },
            mi: {
              name: "mi",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: 1609.344,
              offset: 0
            },
            li: {
              name: "li",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: .201168,
              offset: 0
            },
            rd: {
              name: "rd",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: 5.02921,
              offset: 0
            },
            ch: {
              name: "ch",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: 20.1168,
              offset: 0
            },
            mil: {
              name: "mil",
              base: P.LENGTH,
              prefixes: z.NONE,
              value: 254e-7,
              offset: 0
            },
            m2: {
              name: "m2",
              base: P.SURFACE,
              prefixes: z.SQUARED,
              value: 1,
              offset: 0
            },
            sqin: {
              name: "sqin",
              base: P.SURFACE,
              prefixes: z.NONE,
              value: 64516e-8,
              offset: 0
            },
            sqft: {
              name: "sqft",
              base: P.SURFACE,
              prefixes: z.NONE,
              value: .09290304,
              offset: 0
            },
            sqyd: {
              name: "sqyd",
              base: P.SURFACE,
              prefixes: z.NONE,
              value: .83612736,
              offset: 0
            },
            sqmi: {
              name: "sqmi",
              base: P.SURFACE,
              prefixes: z.NONE,
              value: 2589988.110336,
              offset: 0
            },
            sqrd: {
              name: "sqrd",
              base: P.SURFACE,
              prefixes: z.NONE,
              value: 25.29295,
              offset: 0
            },
            sqch: {
              name: "sqch",
              base: P.SURFACE,
              prefixes: z.NONE,
              value: 404.6873,
              offset: 0
            },
            sqmil: {
              name: "sqmil",
              base: P.SURFACE,
              prefixes: z.NONE,
              value: 64516e-14,
              offset: 0
            },
            acre: {
              name: "acre",
              base: P.SURFACE,
              prefixes: z.NONE,
              value: 4046.86,
              offset: 0
            },
            hectare: {
              name: "hectare",
              base: P.SURFACE,
              prefixes: z.NONE,
              value: 1e4,
              offset: 0
            },
            m3: {
              name: "m3",
              base: P.VOLUME,
              prefixes: z.CUBIC,
              value: 1,
              offset: 0
            },
            L: {
              name: "L",
              base: P.VOLUME,
              prefixes: z.SHORT,
              value: .001,
              offset: 0
            },
            l: {
              name: "l",
              base: P.VOLUME,
              prefixes: z.SHORT,
              value: .001,
              offset: 0
            },
            litre: {
              name: "litre",
              base: P.VOLUME,
              prefixes: z.LONG,
              value: .001,
              offset: 0
            },
            cuin: {
              name: "cuin",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: 1.6387064e-5,
              offset: 0
            },
            cuft: {
              name: "cuft",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .028316846592,
              offset: 0
            },
            cuyd: {
              name: "cuyd",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .764554857984,
              offset: 0
            },
            teaspoon: {
              name: "teaspoon",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: 5e-6,
              offset: 0
            },
            tablespoon: {
              name: "tablespoon",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: 15e-6,
              offset: 0
            },
            drop: {
              name: "drop",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: 5e-8,
              offset: 0
            },
            gtt: {
              name: "gtt",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: 5e-8,
              offset: 0
            },
            minim: {
              name: "minim",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: 6.161152e-8,
              offset: 0
            },
            fluiddram: {
              name: "fluiddram",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: 36966911e-13,
              offset: 0
            },
            fluidounce: {
              name: "fluidounce",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: 2957353e-11,
              offset: 0
            },
            gill: {
              name: "gill",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .0001182941,
              offset: 0
            },
            cc: {
              name: "cc",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: 1e-6,
              offset: 0
            },
            cup: {
              name: "cup",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .0002365882,
              offset: 0
            },
            pint: {
              name: "pint",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .0004731765,
              offset: 0
            },
            quart: {
              name: "quart",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .0009463529,
              offset: 0
            },
            gallon: {
              name: "gallon",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .003785412,
              offset: 0
            },
            beerbarrel: {
              name: "beerbarrel",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .1173478,
              offset: 0
            },
            oilbarrel: {
              name: "oilbarrel",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .1589873,
              offset: 0
            },
            hogshead: {
              name: "hogshead",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .238481,
              offset: 0
            },
            fldr: {
              name: "fldr",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: 36966911e-13,
              offset: 0
            },
            floz: {
              name: "floz",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: 2957353e-11,
              offset: 0
            },
            gi: {
              name: "gi",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .0001182941,
              offset: 0
            },
            cp: {
              name: "cp",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .0002365882,
              offset: 0
            },
            pt: {
              name: "pt",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .0004731765,
              offset: 0
            },
            qt: {
              name: "qt",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .0009463529,
              offset: 0
            },
            gal: {
              name: "gal",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .003785412,
              offset: 0
            },
            bbl: {
              name: "bbl",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .1173478,
              offset: 0
            },
            obl: {
              name: "obl",
              base: P.VOLUME,
              prefixes: z.NONE,
              value: .1589873,
              offset: 0
            },
            g: {
              name: "g",
              base: P.MASS,
              prefixes: z.SHORT,
              value: .001,
              offset: 0
            },
            gram: {
              name: "gram",
              base: P.MASS,
              prefixes: z.LONG,
              value: .001,
              offset: 0
            },
            ton: {
              name: "ton",
              base: P.MASS,
              prefixes: z.SHORT,
              value: 907.18474,
              offset: 0
            },
            t: {
              name: "t",
              base: P.MASS,
              prefixes: z.SHORT,
              value: 1e3,
              offset: 0
            },
            tonne: {
              name: "tonne",
              base: P.MASS,
              prefixes: z.LONG,
              value: 1e3,
              offset: 0
            },
            grain: {
              name: "grain",
              base: P.MASS,
              prefixes: z.NONE,
              value: 64.79891e-6,
              offset: 0
            },
            dram: {
              name: "dram",
              base: P.MASS,
              prefixes: z.NONE,
              value: .0017718451953125,
              offset: 0
            },
            ounce: {
              name: "ounce",
              base: P.MASS,
              prefixes: z.NONE,
              value: .028349523125,
              offset: 0
            },
            poundmass: {
              name: "poundmass",
              base: P.MASS,
              prefixes: z.NONE,
              value: .45359237,
              offset: 0
            },
            hundredweight: {
              name: "hundredweight",
              base: P.MASS,
              prefixes: z.NONE,
              value: 45.359237,
              offset: 0
            },
            stick: {
              name: "stick",
              base: P.MASS,
              prefixes: z.NONE,
              value: .115,
              offset: 0
            },
            stone: {
              name: "stone",
              base: P.MASS,
              prefixes: z.NONE,
              value: 6.35029318,
              offset: 0
            },
            gr: {
              name: "gr",
              base: P.MASS,
              prefixes: z.NONE,
              value: 64.79891e-6,
              offset: 0
            },
            dr: {
              name: "dr",
              base: P.MASS,
              prefixes: z.NONE,
              value: .0017718451953125,
              offset: 0
            },
            oz: {
              name: "oz",
              base: P.MASS,
              prefixes: z.NONE,
              value: .028349523125,
              offset: 0
            },
            lbm: {
              name: "lbm",
              base: P.MASS,
              prefixes: z.NONE,
              value: .45359237,
              offset: 0
            },
            cwt: {
              name: "cwt",
              base: P.MASS,
              prefixes: z.NONE,
              value: 45.359237,
              offset: 0
            },
            s: {
              name: "s",
              base: P.TIME,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            min: {
              name: "min",
              base: P.TIME,
              prefixes: z.NONE,
              value: 60,
              offset: 0
            },
            h: {
              name: "h",
              base: P.TIME,
              prefixes: z.NONE,
              value: 3600,
              offset: 0
            },
            second: {
              name: "second",
              base: P.TIME,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            sec: {
              name: "sec",
              base: P.TIME,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            minute: {
              name: "minute",
              base: P.TIME,
              prefixes: z.NONE,
              value: 60,
              offset: 0
            },
            hour: {
              name: "hour",
              base: P.TIME,
              prefixes: z.NONE,
              value: 3600,
              offset: 0
            },
            day: {
              name: "day",
              base: P.TIME,
              prefixes: z.NONE,
              value: 86400,
              offset: 0
            },
            week: {
              name: "week",
              base: P.TIME,
              prefixes: z.NONE,
              value: 604800,
              offset: 0
            },
            month: {
              name: "month",
              base: P.TIME,
              prefixes: z.NONE,
              value: 2629800,
              offset: 0
            },
            year: {
              name: "year",
              base: P.TIME,
              prefixes: z.NONE,
              value: 31557600,
              offset: 0
            },
            decade: {
              name: "decade",
              base: P.TIME,
              prefixes: z.NONE,
              value: 315576e3,
              offset: 0
            },
            century: {
              name: "century",
              base: P.TIME,
              prefixes: z.NONE,
              value: 315576e4,
              offset: 0
            },
            millennium: {
              name: "millennium",
              base: P.TIME,
              prefixes: z.NONE,
              value: 315576e5,
              offset: 0
            },
            hertz: {
              name: "Hertz",
              base: P.FREQUENCY,
              prefixes: z.LONG,
              value: 1,
              offset: 0,
              reciprocal: !0
            },
            Hz: {
              name: "Hz",
              base: P.FREQUENCY,
              prefixes: z.SHORT,
              value: 1,
              offset: 0,
              reciprocal: !0
            },
            rad: {
              name: "rad",
              base: P.ANGLE,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            radian: {
              name: "radian",
              base: P.ANGLE,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            deg: {
              name: "deg",
              base: P.ANGLE,
              prefixes: z.SHORT,
              value: null,
              offset: 0
            },
            degree: {
              name: "degree",
              base: P.ANGLE,
              prefixes: z.LONG,
              value: null,
              offset: 0
            },
            grad: {
              name: "grad",
              base: P.ANGLE,
              prefixes: z.SHORT,
              value: null,
              offset: 0
            },
            gradian: {
              name: "gradian",
              base: P.ANGLE,
              prefixes: z.LONG,
              value: null,
              offset: 0
            },
            cycle: {
              name: "cycle",
              base: P.ANGLE,
              prefixes: z.NONE,
              value: null,
              offset: 0
            },
            arcsec: {
              name: "arcsec",
              base: P.ANGLE,
              prefixes: z.NONE,
              value: null,
              offset: 0
            },
            arcmin: {
              name: "arcmin",
              base: P.ANGLE,
              prefixes: z.NONE,
              value: null,
              offset: 0
            },
            A: {
              name: "A",
              base: P.CURRENT,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            ampere: {
              name: "ampere",
              base: P.CURRENT,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            K: {
              name: "K",
              base: P.TEMPERATURE,
              prefixes: z.NONE,
              value: 1,
              offset: 0
            },
            degC: {
              name: "degC",
              base: P.TEMPERATURE,
              prefixes: z.NONE,
              value: 1,
              offset: 273.15
            },
            degF: {
              name: "degF",
              base: P.TEMPERATURE,
              prefixes: z.NONE,
              value: 1 / 1.8,
              offset: 459.67
            },
            degR: {
              name: "degR",
              base: P.TEMPERATURE,
              prefixes: z.NONE,
              value: 1 / 1.8,
              offset: 0
            },
            kelvin: {
              name: "kelvin",
              base: P.TEMPERATURE,
              prefixes: z.NONE,
              value: 1,
              offset: 0
            },
            celsius: {
              name: "celsius",
              base: P.TEMPERATURE,
              prefixes: z.NONE,
              value: 1,
              offset: 273.15
            },
            fahrenheit: {
              name: "fahrenheit",
              base: P.TEMPERATURE,
              prefixes: z.NONE,
              value: 1 / 1.8,
              offset: 459.67
            },
            rankine: {
              name: "rankine",
              base: P.TEMPERATURE,
              prefixes: z.NONE,
              value: 1 / 1.8,
              offset: 0
            },
            mol: {
              name: "mol",
              base: P.AMOUNT_OF_SUBSTANCE,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            mole: {
              name: "mole",
              base: P.AMOUNT_OF_SUBSTANCE,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            cd: {
              name: "cd",
              base: P.LUMINOUS_INTENSITY,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            candela: {
              name: "candela",
              base: P.LUMINOUS_INTENSITY,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            N: {
              name: "N",
              base: P.FORCE,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            newton: {
              name: "newton",
              base: P.FORCE,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            dyn: {
              name: "dyn",
              base: P.FORCE,
              prefixes: z.SHORT,
              value: 1e-5,
              offset: 0
            },
            dyne: {
              name: "dyne",
              base: P.FORCE,
              prefixes: z.LONG,
              value: 1e-5,
              offset: 0
            },
            lbf: {
              name: "lbf",
              base: P.FORCE,
              prefixes: z.NONE,
              value: 4.4482216152605,
              offset: 0
            },
            poundforce: {
              name: "poundforce",
              base: P.FORCE,
              prefixes: z.NONE,
              value: 4.4482216152605,
              offset: 0
            },
            kip: {
              name: "kip",
              base: P.FORCE,
              prefixes: z.LONG,
              value: 4448.2216,
              offset: 0
            },
            J: {
              name: "J",
              base: P.ENERGY,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            joule: {
              name: "joule",
              base: P.ENERGY,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            erg: {
              name: "erg",
              base: P.ENERGY,
              prefixes: z.NONE,
              value: 1e-7,
              offset: 0
            },
            Wh: {
              name: "Wh",
              base: P.ENERGY,
              prefixes: z.SHORT,
              value: 3600,
              offset: 0
            },
            BTU: {
              name: "BTU",
              base: P.ENERGY,
              prefixes: z.BTU,
              value: 1055.05585262,
              offset: 0
            },
            eV: {
              name: "eV",
              base: P.ENERGY,
              prefixes: z.SHORT,
              value: 1602176565e-28,
              offset: 0
            },
            electronvolt: {
              name: "electronvolt",
              base: P.ENERGY,
              prefixes: z.LONG,
              value: 1602176565e-28,
              offset: 0
            },
            W: {
              name: "W",
              base: P.POWER,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            watt: {
              name: "watt",
              base: P.POWER,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            hp: {
              name: "hp",
              base: P.POWER,
              prefixes: z.NONE,
              value: 745.6998715386,
              offset: 0
            },
            VAR: {
              name: "VAR",
              base: P.POWER,
              prefixes: z.SHORT,
              value: w.I,
              offset: 0
            },
            VA: {
              name: "VA",
              base: P.POWER,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            Pa: {
              name: "Pa",
              base: P.PRESSURE,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            psi: {
              name: "psi",
              base: P.PRESSURE,
              prefixes: z.NONE,
              value: 6894.75729276459,
              offset: 0
            },
            atm: {
              name: "atm",
              base: P.PRESSURE,
              prefixes: z.NONE,
              value: 101325,
              offset: 0
            },
            bar: {
              name: "bar",
              base: P.PRESSURE,
              prefixes: z.SHORTLONG,
              value: 1e5,
              offset: 0
            },
            torr: {
              name: "torr",
              base: P.PRESSURE,
              prefixes: z.NONE,
              value: 133.322,
              offset: 0
            },
            mmHg: {
              name: "mmHg",
              base: P.PRESSURE,
              prefixes: z.NONE,
              value: 133.322,
              offset: 0
            },
            mmH2O: {
              name: "mmH2O",
              base: P.PRESSURE,
              prefixes: z.NONE,
              value: 9.80665,
              offset: 0
            },
            cmH2O: {
              name: "cmH2O",
              base: P.PRESSURE,
              prefixes: z.NONE,
              value: 98.0665,
              offset: 0
            },
            coulomb: {
              name: "coulomb",
              base: P.ELECTRIC_CHARGE,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            C: {
              name: "C",
              base: P.ELECTRIC_CHARGE,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            farad: {
              name: "farad",
              base: P.ELECTRIC_CAPACITANCE,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            F: {
              name: "F",
              base: P.ELECTRIC_CAPACITANCE,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            volt: {
              name: "volt",
              base: P.ELECTRIC_POTENTIAL,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            V: {
              name: "V",
              base: P.ELECTRIC_POTENTIAL,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            ohm: {
              name: "ohm",
              base: P.ELECTRIC_RESISTANCE,
              prefixes: z.SHORTLONG,
              value: 1,
              offset: 0
            },
            henry: {
              name: "henry",
              base: P.ELECTRIC_INDUCTANCE,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            H: {
              name: "H",
              base: P.ELECTRIC_INDUCTANCE,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            siemens: {
              name: "siemens",
              base: P.ELECTRIC_CONDUCTANCE,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            S: {
              name: "S",
              base: P.ELECTRIC_CONDUCTANCE,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            weber: {
              name: "weber",
              base: P.MAGNETIC_FLUX,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            Wb: {
              name: "Wb",
              base: P.MAGNETIC_FLUX,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            tesla: {
              name: "tesla",
              base: P.MAGNETIC_FLUX_DENSITY,
              prefixes: z.LONG,
              value: 1,
              offset: 0
            },
            T: {
              name: "T",
              base: P.MAGNETIC_FLUX_DENSITY,
              prefixes: z.SHORT,
              value: 1,
              offset: 0
            },
            b: {
              name: "b",
              base: P.BIT,
              prefixes: z.BINARY_SHORT,
              value: 1,
              offset: 0
            },
            bits: {
              name: "bits",
              base: P.BIT,
              prefixes: z.BINARY_LONG,
              value: 1,
              offset: 0
            },
            B: {
              name: "B",
              base: P.BIT,
              prefixes: z.BINARY_SHORT,
              value: 8,
              offset: 0
            },
            bytes: {
              name: "bytes",
              base: P.BIT,
              prefixes: z.BINARY_LONG,
              value: 8,
              offset: 0
            }
          },
          F = {
            meters: "meter",
            inches: "inch",
            feet: "foot",
            yards: "yard",
            miles: "mile",
            links: "link",
            rods: "rod",
            chains: "chain",
            angstroms: "angstrom",
            lt: "l",
            litres: "litre",
            liter: "litre",
            liters: "litre",
            teaspoons: "teaspoon",
            tablespoons: "tablespoon",
            minims: "minim",
            fluiddrams: "fluiddram",
            fluidounces: "fluidounce",
            gills: "gill",
            cups: "cup",
            pints: "pint",
            quarts: "quart",
            gallons: "gallon",
            beerbarrels: "beerbarrel",
            oilbarrels: "oilbarrel",
            hogsheads: "hogshead",
            gtts: "gtt",
            grams: "gram",
            tons: "ton",
            tonnes: "tonne",
            grains: "grain",
            drams: "dram",
            ounces: "ounce",
            poundmasses: "poundmass",
            hundredweights: "hundredweight",
            sticks: "stick",
            lb: "lbm",
            lbs: "lbm",
            kips: "kip",
            acres: "acre",
            hectares: "hectare",
            sqfeet: "sqft",
            sqyard: "sqyd",
            sqmile: "sqmi",
            sqmiles: "sqmi",
            mmhg: "mmHg",
            mmh2o: "mmH2O",
            cmh2o: "cmH2O",
            seconds: "second",
            secs: "second",
            minutes: "minute",
            mins: "minute",
            hours: "hour",
            hr: "hour",
            hrs: "hour",
            days: "day",
            weeks: "week",
            months: "month",
            years: "year",
            decades: "decade",
            centuries: "century",
            millennia: "millennium",
            hertz: "hertz",
            radians: "radian",
            degrees: "degree",
            gradians: "gradian",
            cycles: "cycle",
            arcsecond: "arcsec",
            arcseconds: "arcsec",
            arcminute: "arcmin",
            arcminutes: "arcmin",
            BTUs: "BTU",
            watts: "watt",
            joules: "joule",
            amperes: "ampere",
            coulombs: "coulomb",
            volts: "volt",
            ohms: "ohm",
            farads: "farad",
            webers: "weber",
            teslas: "tesla",
            electronvolts: "electronvolt",
            moles: "mole"
          };
        g(p), x && x("config", function (e, t) {
          e.number !== t.number && g(e)
        });
        var H = {
          si: {
            NONE: {
              unit: U,
              prefix: z.NONE[""]
            },
            LENGTH: {
              unit: L.m,
              prefix: z.SHORT[""]
            },
            MASS: {
              unit: L.g,
              prefix: z.SHORT.k
            },
            TIME: {
              unit: L.s,
              prefix: z.SHORT[""]
            },
            CURRENT: {
              unit: L.A,
              prefix: z.SHORT[""]
            },
            TEMPERATURE: {
              unit: L.K,
              prefix: z.SHORT[""]
            },
            LUMINOUS_INTENSITY: {
              unit: L.cd,
              prefix: z.SHORT[""]
            },
            AMOUNT_OF_SUBSTANCE: {
              unit: L.mol,
              prefix: z.SHORT[""]
            },
            ANGLE: {
              unit: L.rad,
              prefix: z.SHORT[""]
            },
            BIT: {
              unit: L.bit,
              prefix: z.SHORT[""]
            },
            FORCE: {
              unit: L.N,
              prefix: z.SHORT[""]
            },
            ENERGY: {
              unit: L.J,
              prefix: z.SHORT[""]
            },
            POWER: {
              unit: L.W,
              prefix: z.SHORT[""]
            },
            PRESSURE: {
              unit: L.Pa,
              prefix: z.SHORT[""]
            },
            ELECTRIC_CHARGE: {
              unit: L.C,
              prefix: z.SHORT[""]
            },
            ELECTRIC_CAPACITANCE: {
              unit: L.F,
              prefix: z.SHORT[""]
            },
            ELECTRIC_POTENTIAL: {
              unit: L.V,
              prefix: z.SHORT[""]
            },
            ELECTRIC_RESISTANCE: {
              unit: L.ohm,
              prefix: z.SHORT[""]
            },
            ELECTRIC_INDUCTANCE: {
              unit: L.H,
              prefix: z.SHORT[""]
            },
            ELECTRIC_CONDUCTANCE: {
              unit: L.S,
              prefix: z.SHORT[""]
            },
            MAGNETIC_FLUX: {
              unit: L.Wb,
              prefix: z.SHORT[""]
            },
            MAGNETIC_FLUX_DENSITY: {
              unit: L.T,
              prefix: z.SHORT[""]
            },
            FREQUENCY: {
              unit: L.Hz,
              prefix: z.SHORT[""]
            }
          }
        };
        H.cgs = JSON.parse(JSON.stringify(H.si)), H.cgs.LENGTH = {
          unit: L.m,
          prefix: z.SHORT.c
        }, H.cgs.MASS = {
          unit: L.g,
          prefix: z.SHORT[""]
        }, H.cgs.FORCE = {
          unit: L.dyn,
          prefix: z.SHORT[""]
        }, H.cgs.ENERGY = {
          unit: L.erg,
          prefix: z.NONE[""]
        }, H.us = JSON.parse(JSON.stringify(H.si)), H.us.LENGTH = {
          unit: L.ft,
          prefix: z.NONE[""]
        }, H.us.MASS = {
          unit: L.lbm,
          prefix: z.NONE[""]
        }, H.us.TEMPERATURE = {
          unit: L.degF,
          prefix: z.NONE[""]
        }, H.us.FORCE = {
          unit: L.lbf,
          prefix: z.NONE[""]
        }, H.us.ENERGY = {
          unit: L.BTU,
          prefix: z.BTU[""]
        }, H.us.POWER = {
          unit: L.hp,
          prefix: z.NONE[""]
        }, H.us.PRESSURE = {
          unit: L.psi,
          prefix: z.NONE[""]
        }, H.auto = JSON.parse(JSON.stringify(H.si));
        var G = H.auto;
        for (var $ in t.setUnitSystem = function (e) {
            if (H.hasOwnProperty(e)) G = H[e];
            else throw new Error("Unit system " + e + " does not exist. Choices are: " + Object.keys(H).join(", "))
          }, t.getUnitSystem = function () {
            for (var e in H)
              if (H[e] === G) return e
          }, t.typeConverters = {
            BigNumber: function (e) {
              return new k(e + "")
            },
            Fraction: function (e) {
              return new T(e)
            },
            Complex: function (e) {
              return e
            },
            number: function (e) {
              return e
            }
          }, t._getNumberConverter = function (e) {
            if (!t.typeConverters[e]) throw new TypeError("Unsupported type \"" + e + "\"");
            return t.typeConverters[e]
          }, L) {
          var Z = L[$];
          Z.dimensions = Z.base.dimensions
        }
        for (var V in F)
          if (F.hasOwnProperty(V)) {
            var W = L[F[V]],
              J = {};
            for (var Y in W) W.hasOwnProperty(Y) && (J[Y] = W[Y]);
            J.name = V, L[V] = J
          } return t.createUnit = function (e, a) {
          if ("object" !== Ue(e)) throw new TypeError("createUnit expects first parameter to be of type 'Object'");
          if (a && a.override)
            for (var n in e)
              if (e.hasOwnProperty(n) && t.deleteUnit(n), e[n].aliases)
                for (var r = 0; r < e[n].aliases.length; r++) t.deleteUnit(e[n].aliases[r]);
          var s;
          for (var o in e) e.hasOwnProperty(o) && (s = t.createUnitSingle(o, e[o]));
          return s
        }, t.createUnitSingle = function (e, a) {
          if (("undefined" == typeof a || null === a) && (a = {}), "string" != typeof e) throw new TypeError("createUnitSingle expects first parameter to be of type 'string'");
          if (L.hasOwnProperty(e)) throw new Error("Cannot create unit \"" + e + "\": a unit with that name already exists");
          y(e);
          var n = null,
            r = [],
            s = 0,
            o, l;
          if (a && "Unit" === a.type) n = a.clone();
          else if ("string" == typeof a) "" != a && (o = a);
          else if ("object" === Ue(a)) o = a.definition, l = a.prefixes, s = a.offset, a.aliases && (r = a.aliases.valueOf());
          else throw new TypeError("Cannot create unit \"" + e + "\" from \"" + a.toString() + "\": expecting \"string\" or \"Unit\" or \"Object\"");
          if (r)
            for (var p = 0; p < r.length; p++)
              if (L.hasOwnProperty(r[p])) throw new Error("Cannot create alias \"" + r[p] + "\": a unit with that name already exists");
          if (o && "string" == typeof o && !n) try {
            n = t.parse(o, {
              allowNoUnits: !0
            })
          } catch (t) {
            throw t.message = "Could not create unit \"" + e + "\" from \"" + o + "\": " + t.message, t
          } else o && "Unit" === o.type && (n = o.clone());
          r = r || [], s = s || 0, l = l && l.toUpperCase ? z[l.toUpperCase()] || z.NONE : z.NONE;
          var m = {};
          if (!n) {
            var c = e + "_STUFF";
            if (0 <= D.indexOf(c)) throw new Error("Cannot create new base unit \"" + e + "\": a base unit with that name already exists (and cannot be overridden)");
            for (var d in D.push(c), P) P.hasOwnProperty(d) && (P[d].dimensions[D.length - 1] = 0);
            for (var u = {
                dimensions: []
              }, g = 0; g < D.length; g++) u.dimensions[g] = 0;
            u.dimensions[D.length - 1] = 1, u.key = c, P[c] = u, m = {
              name: e,
              value: 1,
              dimensions: P[c].dimensions.slice(0),
              prefixes: l,
              offset: s,
              base: P[c]
            }, G[c] = {
              unit: m,
              prefix: z.NONE[""]
            }
          } else {
            m = {
              name: e,
              value: n.value,
              dimensions: n.dimensions.slice(0),
              prefixes: l,
              offset: s
            };
            var x = !1;
            for (var f in P)
              if (P.hasOwnProperty(f)) {
                for (var h = !0, b = 0; b < D.length; b++)
                  if (1e-12 < Math.abs((m.dimensions[b] || 0) - (P[f].dimensions[b] || 0))) {
                    h = !1;
                    break
                  } if (h) {
                  x = !0, m.base = P[f];
                  break
                }
              } if (!x) {
              var v = e + "_STUFF",
                N = {
                  dimensions: n.dimensions.slice(0)
                };
              N.key = v, P[v] = N, G[v] = {
                unit: m,
                prefix: z.NONE[""]
              }, m.base = P[v]
            }
          }
          t.UNITS[e] = m;
          for (var M = 0; M < r.length; M++) {
            var S = r[M],
              A = {};
            for (var O in m) m.hasOwnProperty(O) && (A[O] = m[O]);
            A.name = S, t.UNITS[S] = A
          }
          return new t(null, e)
        }, t.deleteUnit = function (e) {
          delete t.UNITS[e]
        }, t.PREFIXES = z, t.BASE_DIMENSIONS = D, t.BASE_UNITS = P, t.UNIT_SYSTEMS = H, t.UNITS = L, t
      }, {
        isClass: !0
      }),
      go = "unit",
      yo = Object(ea.a)(go, ["typed", "Unit"], function (e) {
        var t = e.typed,
          a = e.Unit,
          n = t(go, {
            Unit: function (e) {
              return e.clone()
            },
            string: function (e) {
              return a.isValuelessUnit(e) ? new a(null, e) : a.parse(e, {
                allowNoUnits: !0
              })
            },
            "number | BigNumber | Fraction | Complex, string": function (e, t) {
              return new a(e, t)
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      xo = "sparse",
      fo = Object(ea.a)(xo, ["typed", "SparseMatrix"], function (e) {
        var t = e.typed,
          a = e.SparseMatrix;
        return t(xo, {
          "": function () {
            return new a([])
          },
          string: function (e) {
            return new a([], e)
          },
          "Array | Matrix": function (e) {
            return new a(e)
          },
          "Array | Matrix, string": function (e, t) {
            return new a(e, t)
          }
        })
      }),
      ho = "createUnit",
      bo = Object(ea.a)(ho, ["typed", "Unit"], function (e) {
        var t = e.typed,
          a = e.Unit;
        return t(ho, {
          "Object, Object": function (e, t) {
            return a.createUnit(e, t)
          },
          Object: function (e) {
            return a.createUnit(e, {})
          },
          "string, Unit | string | Object, Object": function (e, t, n) {
            var i = {};
            return i[e] = t, a.createUnit(i, n)
          },
          "string, Unit | string | Object": function (e, t) {
            var n = {};
            return n[e] = t, a.createUnit(n, {})
          },
          string: function (e) {
            var t = {};
            return t[e] = {}, a.createUnit(t, {})
          }
        })
      }),
      vo = "acos",
      No = Object(ea.a)(vo, ["typed", "config", "Complex"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.Complex,
          i = t(vo, {
            number: function (e) {
              return -1 <= e && 1 >= e || a.predictable ? Math.acos(e) : new n(e, 0).acos()
            },
            Complex: function (e) {
              return e.acos()
            },
            BigNumber: function (e) {
              return e.acos()
            },
            "Array | Matrix": function (e) {
              return m(e, i)
            }
          });
        return i
      }),
      Mo = "number";
    (function (e) {
      return Math.acos(e)
    }).signature = Mo, Fe.signature = Mo, He.signature = Mo, Ge.signature = Mo, $e.signature = Mo, Ze.signature = Mo, Ve.signature = Mo, We.signature = Mo,
      function (e) {
        return Math.asin(e)
      }.signature = Mo, Je.signature = Mo,
      function (e) {
        return Math.atan(e)
      }.signature = Mo,
      function (e, t) {
        return Math.atan2(e, t)
      }.signature = "number, number", Ye.signature = Mo,
      function (e) {
        return Math.cos(e)
      }.signature = Mo,
      function (e) {
        return Object(Kt.e)(e)
      }.signature = Mo, Xe.signature = Mo, Qe.signature = Mo, Ke.signature = Mo, et.signature = Mo, tt.signature = Mo, at.signature = Mo,
      function (e) {
        return Math.sin(e)
      }.signature = Mo, nt.signature = Mo,
      function (e) {
        return Math.tan(e)
      }.signature = Mo,
      function (e) {
        return Object(Kt.p)(e)
      }.signature = Mo;
    var So = Object(ea.a)("acosh", ["typed", "config", "Complex"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.Complex,
          i = t("acosh", {
            number: function (e) {
              return 1 <= e || a.predictable ? Fe(e) : -1 >= e ? new n(Math.log(Math.sqrt(e * e - 1) - e), Math.PI) : new n(e, 0).acosh()
            },
            Complex: function (e) {
              return e.acosh()
            },
            BigNumber: function (e) {
              return e.acosh()
            },
            "Array | Matrix": function (e) {
              return m(e, i)
            }
          });
        return i
      }),
      Ao = "acot",
      Oo = Object(ea.a)(Ao, ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.BigNumber,
          n = t(Ao, {
            number: He,
            Complex: function (e) {
              return e.acot()
            },
            BigNumber: function (e) {
              return new a(1).div(e).atan()
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      _o = "acoth",
      Co = Object(ea.a)(_o, ["typed", "config", "Complex", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.Complex,
          i = e.BigNumber,
          r = t(_o, {
            number: function (e) {
              return 1 <= e || -1 >= e || a.predictable ? Ge(e) : new n(e, 0).acoth()
            },
            Complex: function (e) {
              return e.acoth()
            },
            BigNumber: function (e) {
              return new i(1).div(e).atanh()
            },
            "Array | Matrix": function (e) {
              return m(e, r)
            }
          });
        return r
      }),
      Eo = "acsc",
      wo = Object(ea.a)(Eo, ["typed", "config", "Complex", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.Complex,
          i = e.BigNumber,
          r = t(Eo, {
            number: function (e) {
              return -1 >= e || 1 <= e || a.predictable ? $e(e) : new n(e, 0).acsc()
            },
            Complex: function (e) {
              return e.acsc()
            },
            BigNumber: function (e) {
              return new i(1).div(e).asin()
            },
            "Array | Matrix": function (e) {
              return m(e, r)
            }
          });
        return r
      }),
      ko = "acsch",
      To = Object(ea.a)(ko, ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.BigNumber,
          n = t(ko, {
            number: Ze,
            Complex: function (e) {
              return e.acsch()
            },
            BigNumber: function (e) {
              return new a(1).div(e).asinh()
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      Io = "asec",
      qo = Object(ea.a)(Io, ["typed", "config", "Complex", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.Complex,
          i = e.BigNumber,
          r = t(Io, {
            number: function (e) {
              return -1 >= e || 1 <= e || a.predictable ? Ve(e) : new n(e, 0).asec()
            },
            Complex: function (e) {
              return e.asec()
            },
            BigNumber: function (e) {
              return new i(1).div(e).acos()
            },
            "Array | Matrix": function (e) {
              return m(e, r)
            }
          });
        return r
      }),
      Bo = "asech",
      zo = Object(ea.a)(Bo, ["typed", "config", "Complex", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.Complex,
          i = e.BigNumber,
          r = t(Bo, {
            number: function (e) {
              if (1 >= e && -1 <= e || a.predictable) {
                var t = 1 / e;
                if (0 < t || a.predictable) return We(e);
                var i = Math.sqrt(t * t - 1);
                return new n(Math.log(i - t), Math.PI)
              }
              return new n(e, 0).asech()
            },
            Complex: function (e) {
              return e.asech()
            },
            BigNumber: function (e) {
              return new i(1).div(e).acosh()
            },
            "Array | Matrix": function (e) {
              return m(e, r)
            }
          });
        return r
      }),
      jo = "asin",
      Do = Object(ea.a)(jo, ["typed", "config", "Complex"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.Complex,
          i = t(jo, {
            number: function (e) {
              return -1 <= e && 1 >= e || a.predictable ? Math.asin(e) : new n(e, 0).asin()
            },
            Complex: function (e) {
              return e.asin()
            },
            BigNumber: function (e) {
              return e.asin()
            },
            "Array | Matrix": function (e) {
              return m(e, i, !0)
            }
          });
        return i
      }),
      Po = Object(ea.a)("asinh", ["typed"], function (e) {
        var t = e.typed,
          a = t("asinh", {
            number: Je,
            Complex: function (e) {
              return e.asinh()
            },
            BigNumber: function (e) {
              return e.asinh()
            },
            "Array | Matrix": function (e) {
              return m(e, a, !0)
            }
          });
        return a
      }),
      Ro = Object(ea.a)("atan", ["typed"], function (e) {
        var t = e.typed,
          a = t("atan", {
            number: function (e) {
              return Math.atan(e)
            },
            Complex: function (e) {
              return e.atan()
            },
            BigNumber: function (e) {
              return e.atan()
            },
            "Array | Matrix": function (e) {
              return m(e, a, !0)
            }
          });
        return a
      }),
      Uo = "atan2",
      Lo = Object(ea.a)(Uo, ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.equalScalar,
          i = e.BigNumber,
          r = e.DenseMatrix,
          s = qn({
            typed: t,
            equalScalar: n
          }),
          o = Fn({
            typed: t
          }),
          l = li({
            typed: t,
            equalScalar: n
          }),
          p = zn({
            typed: t,
            equalScalar: n
          }),
          m = Gn({
            typed: t,
            DenseMatrix: r
          }),
          c = wn({
            typed: t
          }),
          d = kn({
            typed: t
          }),
          u = t(Uo, {
            "number, number": Math.atan2,
            "BigNumber, BigNumber": function (e, t) {
              return i.atan2(e, t)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return l(e, t, u, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return s(t, e, u, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, u, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return c(e, t, u)
            },
            "Array, Array": function (e, t) {
              return u(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return u(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return u(e, a(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return p(e, t, u, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return d(e, t, u, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              return m(t, e, u, !0)
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return d(t, e, u, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return d(a(e), t, u, !1).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return d(a(t), e, u, !0).valueOf()
            }
          });
        return u
      }),
      Fo = "atanh",
      Ho = Object(ea.a)(Fo, ["typed", "config", "Complex"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.Complex,
          i = t(Fo, {
            number: function (e) {
              return 1 >= e && -1 <= e || a.predictable ? Ye(e) : new n(e, 0).atanh()
            },
            Complex: function (e) {
              return e.atanh()
            },
            BigNumber: function (e) {
              return e.atanh()
            },
            "Array | Matrix": function (e) {
              return m(e, i, !0)
            }
          });
        return i
      }),
      Go = "cos",
      $o = Object(ea.a)(Go, ["typed"], function (e) {
        var t = e.typed,
          a = t(Go, {
            number: Math.cos,
            Complex: function (e) {
              return e.cos()
            },
            BigNumber: function (e) {
              return e.cos()
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cos is no angle");
              return a(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      Zo = "cosh",
      Vo = Object(ea.a)(Zo, ["typed"], function (e) {
        var t = e.typed,
          a = t(Zo, {
            number: Kt.e,
            Complex: function (e) {
              return e.cosh()
            },
            BigNumber: function (e) {
              return e.cosh()
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cosh is no angle");
              return a(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, a)
            }
          });
        return a
      }),
      Wo = "cot",
      Jo = Object(ea.a)(Wo, ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.BigNumber,
          n = t(Wo, {
            number: Xe,
            Complex: function (e) {
              return e.cot()
            },
            BigNumber: function (e) {
              return new a(1).div(e.tan())
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cot is no angle");
              return n(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      Yo = "coth",
      Xo = Object(ea.a)(Yo, ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.BigNumber,
          n = t(Yo, {
            number: Qe,
            Complex: function (e) {
              return e.coth()
            },
            BigNumber: function (e) {
              return new a(1).div(e.tanh())
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function coth is no angle");
              return n(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      Qo = "csc",
      Ko = Object(ea.a)(Qo, ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.BigNumber,
          n = t(Qo, {
            number: Ke,
            Complex: function (e) {
              return e.csc()
            },
            BigNumber: function (e) {
              return new a(1).div(e.sin())
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csc is no angle");
              return n(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      el = "csch",
      tl = Object(ea.a)(el, ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.BigNumber,
          n = t(el, {
            number: et,
            Complex: function (e) {
              return e.csch()
            },
            BigNumber: function (e) {
              return new a(1).div(e.sinh())
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csch is no angle");
              return n(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      al = "sec",
      nl = Object(ea.a)(al, ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.BigNumber,
          n = t(al, {
            number: tt,
            Complex: function (e) {
              return e.sec()
            },
            BigNumber: function (e) {
              return new a(1).div(e.cos())
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sec is no angle");
              return n(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      il = "sech",
      rl = Object(ea.a)(il, ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          a = e.BigNumber,
          n = t(il, {
            number: at,
            Complex: function (e) {
              return e.sech()
            },
            BigNumber: function (e) {
              return new a(1).div(e.cosh())
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sech is no angle");
              return n(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, n)
            }
          });
        return n
      }),
      sl = "sin",
      ol = Object(ea.a)(sl, ["typed"], function (e) {
        var t = e.typed,
          a = t(sl, {
            number: Math.sin,
            Complex: function (e) {
              return e.sin()
            },
            BigNumber: function (e) {
              return e.sin()
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sin is no angle");
              return a(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, a, !0)
            }
          });
        return a
      }),
      ll = "sinh",
      pl = Object(ea.a)(ll, ["typed"], function (e) {
        var t = e.typed,
          a = t(ll, {
            number: nt,
            Complex: function (e) {
              return e.sinh()
            },
            BigNumber: function (e) {
              return e.sinh()
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sinh is no angle");
              return a(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, a, !0)
            }
          });
        return a
      }),
      ml = "tan",
      cl = Object(ea.a)(ml, ["typed"], function (e) {
        var t = e.typed,
          a = t(ml, {
            number: Math.tan,
            Complex: function (e) {
              return e.tan()
            },
            BigNumber: function (e) {
              return e.tan()
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tan is no angle");
              return a(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, a, !0)
            }
          });
        return a
      }),
      dl = Object(ea.a)("tanh", ["typed"], function (e) {
        var t = e.typed,
          a = t("tanh", {
            number: Kt.p,
            Complex: function (e) {
              return e.tanh()
            },
            BigNumber: function (e) {
              return e.tanh()
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tanh is no angle");
              return a(e.value)
            },
            "Array | Matrix": function (e) {
              return m(e, a, !0)
            }
          });
        return a
      }),
      ul = "setCartesian",
      gl = Object(ea.a)(ul, ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.size,
          n = e.subset,
          r = e.compareNatural,
          s = e.Index,
          o = e.DenseMatrix;
        return t(ul, {
          "Array | Matrix, Array | Matrix": function (e, t) {
            var l = [];
            if (0 !== n(a(e), new s(0)) && 0 !== n(a(t), new s(0))) {
              var p = Object(ya.e)(Array.isArray(e) ? e : e.toArray()).sort(r),
                m = Object(ya.e)(Array.isArray(t) ? t : t.toArray()).sort(r);
              l = [];
              for (var c = 0; c < p.length; c++)
                for (var d = 0; d < m.length; d++) l.push([p[c], m[d]])
            }
            return Array.isArray(e) && Array.isArray(t) ? l : new o(l)
          }
        })
      }),
      yl = "setDifference",
      xl = Object(ea.a)(yl, ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.size,
          n = e.subset,
          r = e.compareNatural,
          s = e.Index,
          o = e.DenseMatrix;
        return t(yl, {
          "Array | Matrix, Array | Matrix": function (e, t) {
            var l;
            if (0 === n(a(e), new s(0))) l = [];
            else {
              if (0 === n(a(t), new s(0))) return Object(ya.e)(e.toArray());
              var p = Object(ya.i)(Object(ya.e)(Array.isArray(e) ? e : e.toArray()).sort(r)),
                m = Object(ya.i)(Object(ya.e)(Array.isArray(t) ? t : t.toArray()).sort(r));
              l = [];
              for (var c = 0, d; c < p.length; c++) {
                d = !1;
                for (var u = 0; u < m.length; u++)
                  if (0 === r(p[c].value, m[u].value) && p[c].identifier === m[u].identifier) {
                    d = !0;
                    break
                  } d || l.push(p[c])
              }
            }
            return Array.isArray(e) && Array.isArray(t) ? Object(ya.g)(l) : new o(Object(ya.g)(l))
          }
        })
      }),
      fl = "setDistinct",
      hl = Object(ea.a)(fl, ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], function (e) {
        var t = e.typed,
          n = e.size,
          r = e.subset,
          s = e.compareNatural,
          o = e.Index,
          l = e.DenseMatrix;
        return t(fl, {
          "Array | Matrix": function (e) {
            var t;
            if (0 === r(n(e), new o(0))) t = [];
            else {
              var a = Object(ya.e)(Array.isArray(e) ? e : e.toArray()).sort(s);
              t = [], t.push(a[0]);
              for (var p = 1; p < a.length; p++) 0 !== s(a[p], a[p - 1]) && t.push(a[p])
            }
            return Array.isArray(e) ? t : new l(t)
          }
        })
      }),
      bl = "setIntersect",
      vl = Object(ea.a)(bl, ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], function (e) {
        var t = e.typed,
          a = e.size,
          n = e.subset,
          r = e.compareNatural,
          s = e.Index,
          o = e.DenseMatrix;
        return t(bl, {
          "Array | Matrix, Array | Matrix": function (e, t) {
            var l;
            if (0 === n(a(e), new s(0)) || 0 === n(a(t), new s(0))) l = [];
            else {
              var p = Object(ya.i)(Object(ya.e)(Array.isArray(e) ? e : e.toArray()).sort(r)),
                m = Object(ya.i)(Object(ya.e)(Array.isArray(t) ? t : t.toArray()).sort(r));
              l = [];
              for (var c = 0; c < p.length; c++)
                for (var d = 0; d < m.length; d++)
                  if (0 === r(p[c].value, m[d].value) && p[c].identifier === m[d].identifier) {
                    l.push(p[c]);
                    break
                  }
            }
            return Array.isArray(e) && Array.isArray(t) ? Object(ya.g)(l) : new o(Object(ya.g)(l))
          }
        })
      }),
      Nl = "setIsSubset",
      Ml = Object(ea.a)(Nl, ["typed", "size", "subset", "compareNatural", "Index"], function (e) {
        var t = e.typed,
          a = e.size,
          n = e.subset,
          r = e.compareNatural,
          s = e.Index;
        return t(Nl, {
          "Array | Matrix, Array | Matrix": function (e, t) {
            if (0 === n(a(e), new s(0))) return !0;
            if (0 === n(a(t), new s(0))) return !1;
            for (var o = Object(ya.i)(Object(ya.e)(Array.isArray(e) ? e : e.toArray()).sort(r)), l = Object(ya.i)(Object(ya.e)(Array.isArray(t) ? t : t.toArray()).sort(r)), p = 0, m; p < o.length; p++) {
              m = !1;
              for (var c = 0; c < l.length; c++)
                if (0 === r(o[p].value, l[c].value) && o[p].identifier === l[c].identifier) {
                  m = !0;
                  break
                } if (!1 === m) return !1
            }
            return !0
          }
        })
      }),
      Sl = "setMultiplicity",
      Al = Object(ea.a)(Sl, ["typed", "size", "subset", "compareNatural", "Index"], function (e) {
        var t = e.typed,
          n = e.size,
          r = e.subset,
          s = e.compareNatural,
          o = e.Index;
        return t(Sl, {
          "number | BigNumber | Fraction | Complex, Array | Matrix": function (t, e) {
            if (0 === r(n(e), new o(0))) return 0;
            for (var a = Object(ya.e)(Array.isArray(e) ? e : e.toArray()), l = 0, p = 0; p < a.length; p++) 0 === s(a[p], t) && l++;
            return l
          }
        })
      }),
      Ol = "setPowerset",
      _l = Object(ea.a)(Ol, ["typed", "size", "subset", "compareNatural", "Index"], function (e) {
        function t(e, t) {
          for (var a = [], n = 0; n < t.length; n++) "1" === t[n] && a.push(e[n]);
          return a
        }

        function n(e) {
          for (var t = [], a = e.length - 1; 0 < a; a--)
            for (var n = 0; n < a; n++) e[n].length > e[n + 1].length && (t = e[n], e[n] = e[n + 1], e[n + 1] = t);
          return e
        }
        var i = e.typed,
          r = e.size,
          s = e.subset,
          o = e.compareNatural,
          l = e.Index;
        return i(Ol, {
          "Array | Matrix": function (e) {
            if (0 === s(r(e), new l(0))) return [];
            for (var a = Object(ya.e)(Array.isArray(e) ? e : e.toArray()).sort(o), i = [], p = 0; p.toString(2).length <= a.length;) i.push(t(a, p.toString(2).split("").reverse())), p++;
            return n(i)
          }
        })
      }),
      Cl = "setSize",
      El = Object(ea.a)(Cl, ["typed", "compareNatural"], function (e) {
        var t = e.typed,
          n = e.compareNatural;
        return t(Cl, {
          "Array | Matrix": function (e) {
            return Array.isArray(e) ? Object(ya.e)(e).length : Object(ya.e)(e.toArray()).length
          },
          "Array | Matrix, boolean": function (e, t) {
            if (!1 === t || 0 === e.length) return Array.isArray(e) ? Object(ya.e)(e).length : Object(ya.e)(e.toArray()).length;
            for (var a = Object(ya.e)(Array.isArray(e) ? e : e.toArray()).sort(n), r = 1, s = 1; s < a.length; s++) 0 !== n(a[s], a[s - 1]) && r++;
            return r
          }
        })
      }),
      wl = "setSymDifference",
      kl = Object(ea.a)(wl, ["typed", "size", "concat", "subset", "setDifference", "Index"], function (e) {
        var t = e.typed,
          a = e.size,
          n = e.concat,
          i = e.subset,
          r = e.setDifference,
          s = e.Index;
        return t(wl, {
          "Array | Matrix, Array | Matrix": function (e, t) {
            if (0 === i(a(e), new s(0))) return Object(ya.e)(t);
            if (0 === i(a(t), new s(0))) return Object(ya.e)(e);
            var o = Object(ya.e)(e),
              l = Object(ya.e)(t);
            return n(r(o, l), r(l, o))
          }
        })
      }),
      Tl = "setUnion",
      Il = Object(ea.a)(Tl, ["typed", "size", "concat", "subset", "setIntersect", "setSymDifference", "Index"], function (e) {
        var t = e.typed,
          a = e.size,
          n = e.concat,
          i = e.subset,
          r = e.setIntersect,
          s = e.setSymDifference,
          o = e.Index;
        return t(Tl, {
          "Array | Matrix, Array | Matrix": function (e, t) {
            if (0 === i(a(e), new o(0))) return Object(ya.e)(t);
            if (0 === i(a(t), new o(0))) return Object(ya.e)(e);
            var l = Object(ya.e)(e),
              p = Object(ya.e)(t);
            return n(s(l, p), r(l, p))
          }
        })
      }),
      ql = "add",
      Bl = Object(ea.a)(ql, ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.addScalar,
          i = e.equalScalar,
          r = e.DenseMatrix,
          s = e.SparseMatrix,
          o = _n({
            typed: t
          }),
          l = Cn({
            typed: t,
            equalScalar: i
          }),
          p = En({
            typed: t,
            DenseMatrix: r
          }),
          m = wn({
            typed: t
          }),
          c = kn({
            typed: t
          }),
          d = t(ql, Object(fa.e)({
            "DenseMatrix, DenseMatrix": function (e, t) {
              return m(e, t, n)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, n, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return o(t, e, n, !0)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return l(e, t, n)
            },
            "Array, Array": function (e, t) {
              return d(a(e), a(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return d(a(e), t)
            },
            "Matrix, Array": function (e, t) {
              return d(e, a(t))
            },
            "DenseMatrix, any": function (e, t) {
              return c(e, t, n, !1)
            },
            "SparseMatrix, any": function (e, t) {
              return p(e, t, n, !1)
            },
            "any, DenseMatrix": function (e, t) {
              return c(t, e, n, !0)
            },
            "any, SparseMatrix": function (e, t) {
              return p(t, e, n, !0)
            },
            "Array, any": function (e, t) {
              return c(a(e), t, n, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return c(a(t), e, n, !0).valueOf()
            },
            "any, any": n,
            "any, any, ...any": function (e, t, a) {
              for (var n = d(e, t), r = 0; r < a.length; r++) n = d(n, a[r]);
              return n
            }
          }, n.signatures));
        return d
      }),
      zl = "hypot",
      jl = Object(ea.a)(zl, ["typed", "abs", "addScalar", "divideScalar", "multiplyScalar", "sqrt", "smaller", "isPositive"], function (e) {
        var t = e.typed,
          a = e.abs,
          n = e.addScalar,
          r = e.divideScalar,
          s = e.multiplyScalar,
          o = e.sqrt,
          l = e.smaller,
          p = e.isPositive,
          m = t(zl, {
            "... number | BigNumber": function (e) {
              for (var t = 0, m = 0, c = 0, d; c < e.length; c++) d = a(e[c]), l(m, d) ? (t = s(t, s(r(m, d), r(m, d))), t = n(t, 1), m = d) : t = n(t, p(d) ? s(r(d, m), r(d, m)) : d);
              return s(m, o(t))
            },
            Array: function (e) {
              return m.apply(m, Object(ya.e)(e))
            },
            Matrix: function (e) {
              return m.apply(m, Object(ya.e)(e.toArray()))
            }
          });
        return m
      }),
      Dl = "norm",
      Pl = Object(ea.a)(Dl, ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix"], function (e) {
        function t(e, a) {
          var i = e.size();
          if (1 === i.length) {
            if (a === Number.POSITIVE_INFINITY || "inf" === a) {
              var y = 0;
              return e.forEach(function (e) {
                var t = s(e);
                u(t, y) && (y = t)
              }, !0), y
            }
            if (a === Number.NEGATIVE_INFINITY || "-inf" === a) {
              var x;
              return e.forEach(function (e) {
                var t = s(e);
                (!x || g(t, x)) && (x = t)
              }, !0), x || 0
            }
            if ("fro" === a) return t(e, 2);
            if ("number" == typeof a && !isNaN(a)) {
              if (!d(a, 0)) {
                var f = 0;
                return e.forEach(function (e) {
                  f = o(l(s(e), a), f)
                }, !0), l(f, 1 / a)
              }
              return Number.POSITIVE_INFINITY
            }
            throw new Error("Unsupported parameter value")
          }
          if (2 === i.length) {
            if (1 === a) {
              var h = [],
                b = 0;
              return e.forEach(function (e, t) {
                var a = t[1],
                  n = o(h[a] || 0, s(e));
                u(n, b) && (b = n), h[a] = n
              }, !0), b
            }
            if (a === Number.POSITIVE_INFINITY || "inf" === a) {
              var v = [],
                r = 0;
              return e.forEach(function (e, t) {
                var a = t[0],
                  n = o(v[a] || 0, s(e));
                u(n, r) && (r = n), v[a] = n
              }, !0), r
            }
            if ("fro" === a) {
              var N = 0;
              return e.forEach(function (e) {
                N = o(N, c(e, p(e)))
              }), s(m(N))
            }
            if (2 === a) throw new Error("Unsupported parameter value, missing implementation of matrix singular value decomposition");
            throw new Error("Unsupported parameter value")
          }
        }
        var a = e.typed,
          s = e.abs,
          o = e.add,
          l = e.pow,
          p = e.conj,
          m = e.sqrt,
          c = e.multiply,
          d = e.equalScalar,
          u = e.larger,
          g = e.smaller,
          y = e.matrix,
          f = a(Dl, {
            number: Math.abs,
            Complex: function (e) {
              return e.abs()
            },
            BigNumber: function (e) {
              return e.abs()
            },
            boolean: function (e) {
              return Math.abs(e)
            },
            Array: function (e) {
              return t(y(e), 2)
            },
            Matrix: function (e) {
              return t(e, 2)
            },
            "number | Complex | BigNumber | boolean, number | BigNumber | string": function (e) {
              return f(e)
            },
            "Array, number | BigNumber | string": function (e, a) {
              return t(y(e), a)
            },
            "Matrix, number | BigNumber | string": function (e, a) {
              return t(e, a)
            }
          });
        return f
      }),
      Rl = "dot",
      Ul = Object(ea.a)(Rl, ["typed", "add", "multiply"], function (e) {
        function t(e, t) {
          var a = Object(ya.a)(e),
            s = Object(ya.a)(t),
            o = a[0];
          if (1 !== a.length || 1 !== s.length) throw new RangeError("Vector expected");
          if (a[0] !== s[0]) throw new RangeError("Vectors must have equal length (" + a[0] + " != " + s[0] + ")");
          if (0 === o) throw new RangeError("Cannot calculate the dot product of empty vectors");
          for (var l = 0, p = 0; p < o; p++) l = n(l, r(e[p], t[p]));
          return l
        }
        var a = e.typed,
          n = e.add,
          r = e.multiply;
        return a(Rl, {
          "Matrix, Matrix": function (e, a) {
            return t(e.toArray(), a.toArray())
          },
          "Matrix, Array": function (e, a) {
            return t(e.toArray(), a)
          },
          "Array, Matrix": function (e, a) {
            return t(e, a.toArray())
          },
          "Array, Array": t
        })
      }),
      Ll = Object(ea.a)("trace", ["typed", "matrix", "add"], function (e) {
        function t(e) {
          var t = e._size,
            a = e._data;
          switch (t.length) {
            case 1:
              if (1 === t[0]) return Object(fa.a)(a[0]);
              throw new RangeError("Matrix must be square (size: " + Object(xa.d)(t) + ")");
            case 2:
              var n = t[0],
                s = t[1];
              if (n === s) {
                for (var o = 0, l = 0; l < n; l++) o = r(o, a[l][l]);
                return o
              }
              throw new RangeError("Matrix must be square (size: " + Object(xa.d)(t) + ")");
            default:
              throw new RangeError("Matrix must be two dimensional (size: " + Object(xa.d)(t) + ")");
          }
        }
        var a = e.typed,
          n = e.matrix,
          r = e.add;
        return a("trace", {
          Array: function (e) {
            return t(n(e))
          },
          SparseMatrix: function (e) {
            var t = e._values,
              a = e._index,
              n = e._ptr,
              s = e._size,
              o = s[0],
              l = s[1];
            if (o === l) {
              var p = 0;
              if (0 < t.length)
                for (var m = 0; m < l; m++)
                  for (var c = n[m], d = n[m + 1], u = c, g; u < d; u++) {
                    if (g = a[u], g === m) {
                      p = r(p, t[u]);
                      break
                    }
                    if (g > m) break
                  }
              return p
            }
            throw new RangeError("Matrix must be square (size: " + Object(xa.d)(s) + ")")
          },
          DenseMatrix: t,
          any: fa.a
        })
      }),
      Fl = "index",
      Hl = Object(ea.a)(Fl, ["typed", "Index"], function (e) {
        var t = e.typed,
          a = e.Index;
        return t(Fl, {
          "...number | string | BigNumber | Range | Array | Matrix": function (e) {
            var t = e.map(function (e) {
                return Object(Yt.e)(e) ? e.toNumber() : Array.isArray(e) || Object(Yt.v)(e) ? e.map(function (e) {
                  return Object(Yt.e)(e) ? e.toNumber() : e
                }) : e
              }),
              n = new a;
            return a.apply(n, t), n
          }
        })
      }),
      Gl = {
        end: !0
      },
      $l = Object(ea.a)("Node", ["mathWithTransform"], function (e) {
        function t() {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator")
        }

        function a(e) {
          for (var t in e)
            if (Object(fa.f)(e, t) && t in Gl) throw new Error("Scope contains an illegal symbol, \"" + t + "\" is a reserved keyword")
        }
        var n = e.mathWithTransform;
        return t.prototype.evaluate = function (e) {
          return this.compile().evaluate(e)
        }, t.prototype.eval = function (e) {
          return Object(Da.a)("Method Node.eval is renamed to Node.evaluate. Please use the new method name."), this.evaluate(e)
        }, t.prototype.type = "Node", t.prototype.isNode = !0, t.prototype.comment = "", t.prototype.compile = function () {
          function e(e) {
            var n = e || {};
            return a(n), t(n, i, r)
          }
          var t = this._compile(n, {}),
            i = {},
            r = null;
          return {
            evaluate: e,
            eval: function (t) {
              return Object(Da.a)("Method eval is renamed to evaluate. Please use the new method."), e(t)
            }
          }
        }, t.prototype._compile = function () {
          throw new Error("Method _compile should be implemented by type " + this.type)
        }, t.prototype.forEach = function () {
          throw new Error("Cannot run forEach on a Node interface")
        }, t.prototype.map = function () {
          throw new Error("Cannot run map on a Node interface")
        }, t.prototype._ifNode = function (e) {
          if (!Object(Yt.w)(e)) throw new TypeError("Callback function must return a Node");
          return e
        }, t.prototype.traverse = function (e) {
          function t(e, a) {
            e.forEach(function (e, n, i) {
              a(e, n, i), t(e, a)
            })
          }
          e(this, null, null), t(this, e)
        }, t.prototype.transform = function (e) {
          function t(a, n, i) {
            var r = e(a, n, i);
            return r === a ? a.map(t) : r
          }
          return t(this, null, null)
        }, t.prototype.filter = function (e) {
          var t = [];
          return this.traverse(function (a, n, i) {
            e(a, n, i) && t.push(a)
          }), t
        }, t.prototype.find = function () {
          throw new Error("Function Node.find is deprecated. Use Node.filter instead.")
        }, t.prototype.match = function () {
          throw new Error("Function Node.match is deprecated. See functions Node.filter, Node.transform, Node.traverse.")
        }, t.prototype.clone = function () {
          throw new Error("Cannot clone a Node interface")
        }, t.prototype.cloneDeep = function () {
          return this.map(function (e) {
            return e.cloneDeep()
          })
        }, t.prototype.equals = function (e) {
          return !!e && Object(fa.d)(this, e)
        }, t.prototype.toString = function (e) {
          var t;
          if (e && "object" === it(e)) switch (it(e.handler)) {
            case "object":
            case "undefined":
              break;
            case "function":
              t = e.handler(this, e);
              break;
            default:
              throw new TypeError("Object or function expected as callback");
          }
          return "undefined" == typeof t ? this._toString(e) : t
        }, t.prototype.toJSON = function () {
          throw new Error("Cannot serialize object: toJSON not implemented by " + this.type)
        }, t.prototype.toHTML = function (e) {
          var t;
          if (e && "object" === it(e)) switch (it(e.handler)) {
            case "object":
            case "undefined":
              break;
            case "function":
              t = e.handler(this, e);
              break;
            default:
              throw new TypeError("Object or function expected as callback");
          }
          return "undefined" == typeof t ? this.toHTML(e) : t
        }, t.prototype._toString = function () {
          throw new Error("_toString not implemented for " + this.type)
        }, t.prototype.toTex = function (e) {
          var t;
          if (e && "object" === it(e)) switch (it(e.handler)) {
            case "object":
            case "undefined":
              break;
            case "function":
              t = e.handler(this, e);
              break;
            default:
              throw new TypeError("Object or function expected as callback");
          }
          return "undefined" == typeof t ? this._toTex(e) : t
        }, t.prototype._toTex = function () {
          throw new Error("_toTex not implemented for " + this.type)
        }, t.prototype.getIdentifier = function () {
          return this.type
        }, t.prototype.getContent = function () {
          return this
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      Zl = Object(ea.a)("AccessorNode", ["subset", "Node"], function (e) {
        function t(e, a) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!Object(Yt.w)(e)) throw new TypeError("Node expected for parameter \"object\"");
          if (!Object(Yt.u)(a)) throw new TypeError("IndexNode expected for parameter \"index\"");
          this.object = e || null, this.index = a, Object.defineProperty(this, "name", {
            get: function () {
              return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || ""
            }.bind(this),
            set: function () {
              throw new Error("Cannot assign a new name, name is read-only")
            }
          })
        }

        function a(e) {
          return !(Object(Yt.a)(e) || Object(Yt.c)(e) || Object(Yt.l)(e) || Object(Yt.r)(e) || Object(Yt.A)(e) || Object(Yt.C)(e) || Object(Yt.J)(e))
        }
        var n = e.subset,
          i = e.Node,
          r = ot({
            subset: n
          });
        return t.prototype = new i, t.prototype.type = "AccessorNode", t.prototype.isAccessorNode = !0, t.prototype._compile = function (e, t) {
          var a = this.object._compile(e, t),
            n = this.index._compile(e, t);
          if (this.index.isObjectProperty()) {
            var i = this.index.getObjectProperty();
            return function (e, t, n) {
              return Se(a(e, t, n), i)
            }
          }
          return function (e, t, i) {
            var s = a(e, t, i),
              o = n(e, t, s);
            return r(s, o)
          }
        }, t.prototype.forEach = function (e) {
          e(this.object, "object", this), e(this.index, "index", this)
        }, t.prototype.map = function (e) {
          return new t(this._ifNode(e(this.object, "object", this)), this._ifNode(e(this.index, "index", this)))
        }, t.prototype.clone = function () {
          return new t(this.object, this.index)
        }, t.prototype._toString = function (e) {
          var t = this.object.toString(e);
          return a(this.object) && (t = "(" + t + ")"), t + this.index.toString(e)
        }, t.prototype.toHTML = function (e) {
          var t = this.object.toHTML(e);
          return a(this.object) && (t = "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + t + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>"), t + this.index.toHTML(e)
        }, t.prototype._toTex = function (e) {
          var t = this.object.toTex(e);
          return a(this.object) && (t = "\\left(' + object + '\\right)"), t + this.index.toTex(e)
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "AccessorNode",
            object: this.object,
            index: this.index
          }
        }, t.fromJSON = function (e) {
          return new t(e.object, e.index)
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      Vl = Object(ea.a)("ArrayNode", ["Node"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (this.items = e || [], !Array.isArray(this.items) || !this.items.every(Yt.w)) throw new TypeError("Array containing Nodes expected");
          var a = function () {
            throw new Error("Property `ArrayNode.nodes` is deprecated, use `ArrayNode.items` instead")
          };
          Object.defineProperty(this, "nodes", {
            get: a,
            set: a
          })
        }
        var a = e.Node;
        return t.prototype = new a, t.prototype.type = "ArrayNode", t.prototype.isArrayNode = !0, t.prototype._compile = function (e, t) {
          var a = Object(ya.m)(this.items, function (a) {
              return a._compile(e, t)
            }),
            n = "Array" !== e.config.matrix;
          if (n) {
            var i = e.matrix;
            return function (e, t, n) {
              return i(Object(ya.m)(a, function (a) {
                return a(e, t, n)
              }))
            }
          }
          return function (e, t, n) {
            return Object(ya.m)(a, function (a) {
              return a(e, t, n)
            })
          }
        }, t.prototype.forEach = function (e) {
          for (var t = 0, a; t < this.items.length; t++) a = this.items[t], e(a, "items[" + t + "]", this)
        }, t.prototype.map = function (e) {
          for (var a = [], n = 0; n < this.items.length; n++) a[n] = this._ifNode(e(this.items[n], "items[" + n + "]", this));
          return new t(a)
        }, t.prototype.clone = function () {
          return new t(this.items.slice(0))
        }, t.prototype._toString = function (e) {
          var t = this.items.map(function (t) {
            return t.toString(e)
          });
          return "[" + t.join(", ") + "]"
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "ArrayNode",
            items: this.items
          }
        }, t.fromJSON = function (e) {
          return new t(e.items)
        }, t.prototype.toHTML = function (e) {
          var t = this.items.map(function (t) {
            return t.toHTML(e)
          });
          return "<span class=\"math-parenthesis math-square-parenthesis\">[</span>" + t.join("<span class=\"math-separator\">,</span>") + "<span class=\"math-parenthesis math-square-parenthesis\">]</span>"
        }, t.prototype._toTex = function (e) {
          var t = "\\begin{bmatrix}";
          return this.items.forEach(function (a) {
            t += a.items ? a.items.map(function (t) {
              return t.toTex(e)
            }).join("&") : a.toTex(e), t += "\\\\"
          }), t += "\\end{bmatrix}", t
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      Wl = [{
        AssignmentNode: {},
        FunctionAssignmentNode: {}
      }, {
        ConditionalNode: {
          latexLeftParens: !1,
          latexRightParens: !1,
          latexParens: !1
        }
      }, {
        "OperatorNode:or": {
          associativity: "left",
          associativeWith: []
        }
      }, {
        "OperatorNode:xor": {
          associativity: "left",
          associativeWith: []
        }
      }, {
        "OperatorNode:and": {
          associativity: "left",
          associativeWith: []
        }
      }, {
        "OperatorNode:bitOr": {
          associativity: "left",
          associativeWith: []
        }
      }, {
        "OperatorNode:bitXor": {
          associativity: "left",
          associativeWith: []
        }
      }, {
        "OperatorNode:bitAnd": {
          associativity: "left",
          associativeWith: []
        }
      }, {
        "OperatorNode:equal": {
          associativity: "left",
          associativeWith: []
        },
        "OperatorNode:unequal": {
          associativity: "left",
          associativeWith: []
        },
        "OperatorNode:smaller": {
          associativity: "left",
          associativeWith: []
        },
        "OperatorNode:larger": {
          associativity: "left",
          associativeWith: []
        },
        "OperatorNode:smallerEq": {
          associativity: "left",
          associativeWith: []
        },
        "OperatorNode:largerEq": {
          associativity: "left",
          associativeWith: []
        },
        RelationalNode: {
          associativity: "left",
          associativeWith: []
        }
      }, {
        "OperatorNode:leftShift": {
          associativity: "left",
          associativeWith: []
        },
        "OperatorNode:rightArithShift": {
          associativity: "left",
          associativeWith: []
        },
        "OperatorNode:rightLogShift": {
          associativity: "left",
          associativeWith: []
        }
      }, {
        "OperatorNode:to": {
          associativity: "left",
          associativeWith: []
        }
      }, {
        RangeNode: {}
      }, {
        "OperatorNode:add": {
          associativity: "left",
          associativeWith: ["OperatorNode:add", "OperatorNode:subtract"]
        },
        "OperatorNode:subtract": {
          associativity: "left",
          associativeWith: []
        }
      }, {
        "OperatorNode:multiply": {
          associativity: "left",
          associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"]
        },
        "OperatorNode:divide": {
          associativity: "left",
          associativeWith: [],
          latexLeftParens: !1,
          latexRightParens: !1,
          latexParens: !1
        },
        "OperatorNode:dotMultiply": {
          associativity: "left",
          associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "OperatorNode:dotMultiply", "OperatorNode:doDivide"]
        },
        "OperatorNode:dotDivide": {
          associativity: "left",
          associativeWith: []
        },
        "OperatorNode:mod": {
          associativity: "left",
          associativeWith: []
        }
      }, {
        "OperatorNode:unaryPlus": {
          associativity: "right"
        },
        "OperatorNode:unaryMinus": {
          associativity: "right"
        },
        "OperatorNode:bitNot": {
          associativity: "right"
        },
        "OperatorNode:not": {
          associativity: "right"
        }
      }, {
        "OperatorNode:pow": {
          associativity: "right",
          associativeWith: [],
          latexRightParens: !1
        },
        "OperatorNode:dotPow": {
          associativity: "right",
          associativeWith: []
        }
      }, {
        "OperatorNode:factorial": {
          associativity: "left"
        }
      }, {
        "OperatorNode:transpose": {
          associativity: "left"
        }
      }],
      Jl = Object(ea.a)("AssignmentNode", ["subset", "?matrix", "Node"], function (e) {
        function t(e, a, n) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (this.object = e, this.index = n ? a : null, this.value = n || a, !Object(Yt.J)(e) && !Object(Yt.a)(e)) throw new TypeError("SymbolNode or AccessorNode expected as \"object\"");
          if (Object(Yt.J)(e) && "end" === e.name) throw new Error("Cannot assign to symbol \"end\"");
          if (this.index && !Object(Yt.u)(this.index)) throw new TypeError("IndexNode expected as \"index\"");
          if (!Object(Yt.w)(this.value)) throw new TypeError("Node expected as \"value\"");
          Object.defineProperty(this, "name", {
            get: function () {
              return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || ""
            }.bind(this),
            set: function () {
              throw new Error("Cannot assign a new name, name is read-only")
            }
          })
        }

        function a(e, t) {
          t || (t = "keep");
          var a = mt(e, t),
            n = mt(e.value, t);
          return "all" === t || null !== n && n <= a
        }
        var n = e.subset,
          i = e.matrix,
          r = e.Node,
          s = ot({
            subset: n
          }),
          o = pt({
            subset: n,
            matrix: i
          });
        return t.prototype = new r, t.prototype.type = "AssignmentNode", t.prototype.isAssignmentNode = !0, t.prototype._compile = function (e, t) {
          var a = this.object._compile(e, t),
            n = this.index ? this.index._compile(e, t) : null,
            i = this.value._compile(e, t),
            r = this.object.name;
          if (!this.index) {
            if (!Object(Yt.J)(this.object)) throw new TypeError("SymbolNode expected as object");
            return function (e, t, a) {
              return Ae(e, r, i(e, t, a))
            }
          }
          if (this.index.isObjectProperty()) {
            var l = this.index.getObjectProperty();
            return function (e, t, n) {
              var r = a(e, t, n),
                s = i(e, t, n);
              return Ae(r, l, s)
            }
          }
          if (Object(Yt.J)(this.object)) return function (e, t, s) {
            var l = a(e, t, s),
              p = i(e, t, s),
              m = n(e, t, l);
            return Ae(e, r, o(l, m, p)), p
          };
          var p = this.object.object._compile(e, t);
          if (this.object.index.isObjectProperty()) {
            var m = this.object.index.getObjectProperty();
            return function (e, t, a) {
              var r = p(e, t, a),
                s = Se(r, m),
                l = n(e, t, s),
                c = i(e, t, a);
              return Ae(r, m, o(s, l, c)), c
            }
          }
          var c = this.object.index._compile(e, t);
          return function (e, t, a) {
            var r = p(e, t, a),
              l = c(e, t, r),
              m = s(r, l),
              d = n(e, t, m),
              u = i(e, t, a);
            return o(r, l, o(m, d, u)), u
          }
        }, t.prototype.forEach = function (e) {
          e(this.object, "object", this), this.index && e(this.index, "index", this), e(this.value, "value", this)
        }, t.prototype.map = function (e) {
          var a = this._ifNode(e(this.object, "object", this)),
            n = this.index ? this._ifNode(e(this.index, "index", this)) : null,
            i = this._ifNode(e(this.value, "value", this));
          return new t(a, n, i)
        }, t.prototype.clone = function () {
          return new t(this.object, this.index, this.value)
        }, t.prototype._toString = function (e) {
          var t = this.object.toString(e),
            n = this.index ? this.index.toString(e) : "",
            i = this.value.toString(e);
          return a(this, e && e.parenthesis) && (i = "(" + i + ")"), t + n + " = " + i
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "AssignmentNode",
            object: this.object,
            index: this.index,
            value: this.value
          }
        }, t.fromJSON = function (e) {
          return new t(e.object, e.index, e.value)
        }, t.prototype.toHTML = function (e) {
          var t = this.object.toHTML(e),
            n = this.index ? this.index.toHTML(e) : "",
            i = this.value.toHTML(e);
          return a(this, e && e.parenthesis) && (i = "<span class=\"math-paranthesis math-round-parenthesis\">(</span>" + i + "<span class=\"math-paranthesis math-round-parenthesis\">)</span>"), t + n + "<span class=\"math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator\">=</span>" + i
        }, t.prototype._toTex = function (e) {
          var t = this.object.toTex(e),
            n = this.index ? this.index.toTex(e) : "",
            i = this.value.toTex(e);
          return a(this, e && e.parenthesis) && (i = "\\left(".concat(i, "\\right)")), t + n + ":=" + i
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      Yl = Object(ea.a)("BlockNode", ["ResultSet", "Node"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!Array.isArray(e)) throw new Error("Array expected");
          this.blocks = e.map(function (e) {
            var t = e && e.node,
              a = !(e && void 0 !== e.visible) || e.visible;
            if (!Object(Yt.w)(t)) throw new TypeError("Property \"node\" must be a Node");
            if ("boolean" != typeof a) throw new TypeError("Property \"visible\" must be a boolean");
            return {
              node: t,
              visible: a
            }
          })
        }
        var a = e.ResultSet,
          n = e.Node;
        return t.prototype = new n, t.prototype.type = "BlockNode", t.prototype.isBlockNode = !0, t.prototype._compile = function (e, t) {
          var n = Object(ya.m)(this.blocks, function (a) {
            return {
              evaluate: a.node._compile(e, t),
              visible: a.visible
            }
          });
          return function (e, t, i) {
            var r = [];
            return Object(ya.f)(n, function (a) {
              var n = a.evaluate(e, t, i);
              a.visible && r.push(n)
            }), new a(r)
          }
        }, t.prototype.forEach = function (e) {
          for (var t = 0; t < this.blocks.length; t++) e(this.blocks[t].node, "blocks[" + t + "].node", this)
        }, t.prototype.map = function (e) {
          for (var a = [], n = 0; n < this.blocks.length; n++) {
            var r = this.blocks[n],
              s = this._ifNode(e(r.node, "blocks[" + n + "].node", this));
            a[n] = {
              node: s,
              visible: r.visible
            }
          }
          return new t(a)
        }, t.prototype.clone = function () {
          var e = this.blocks.map(function (e) {
            return {
              node: e.node,
              visible: e.visible
            }
          });
          return new t(e)
        }, t.prototype._toString = function (e) {
          return this.blocks.map(function (t) {
            return t.node.toString(e) + (t.visible ? "" : ";")
          }).join("\n")
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "BlockNode",
            blocks: this.blocks
          }
        }, t.fromJSON = function (e) {
          return new t(e.blocks)
        }, t.prototype.toHTML = function (e) {
          return this.blocks.map(function (t) {
            return t.node.toHTML(e) + (t.visible ? "" : "<span class=\"math-separator\">;</span>")
          }).join("<span class=\"math-separator\"><br /></span>")
        }, t.prototype._toTex = function (e) {
          return this.blocks.map(function (t) {
            return t.node.toTex(e) + (t.visible ? "" : ";")
          }).join("\\;\\;\n")
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      Xl = Object(ea.a)("ConditionalNode", ["Node"], function (e) {
        function t(e, a, n) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!Object(Yt.w)(e)) throw new TypeError("Parameter condition must be a Node");
          if (!Object(Yt.w)(a)) throw new TypeError("Parameter trueExpr must be a Node");
          if (!Object(Yt.w)(n)) throw new TypeError("Parameter falseExpr must be a Node");
          this.condition = e, this.trueExpr = a, this.falseExpr = n
        }

        function a(e) {
          if ("number" == typeof e || "boolean" == typeof e || "string" == typeof e) return !!e;
          if (e) {
            if (Object(Yt.e)(e)) return !e.isZero();
            if (Object(Yt.j)(e)) return !!(e.re || e.im);
            if (Object(Yt.L)(e)) return !!e.value
          }
          if (null === e || void 0 === e) return !1;
          throw new TypeError("Unsupported type of condition \"" + Object(Yt.M)(e) + "\"")
        }
        var n = e.Node;
        return t.prototype = new n, t.prototype.type = "ConditionalNode", t.prototype.isConditionalNode = !0, t.prototype._compile = function (e, t) {
          var n = this.condition._compile(e, t),
            i = this.trueExpr._compile(e, t),
            r = this.falseExpr._compile(e, t);
          return function (e, t, s) {
            return a(n(e, t, s)) ? i(e, t, s) : r(e, t, s)
          }
        }, t.prototype.forEach = function (e) {
          e(this.condition, "condition", this), e(this.trueExpr, "trueExpr", this), e(this.falseExpr, "falseExpr", this)
        }, t.prototype.map = function (e) {
          return new t(this._ifNode(e(this.condition, "condition", this)), this._ifNode(e(this.trueExpr, "trueExpr", this)), this._ifNode(e(this.falseExpr, "falseExpr", this)))
        }, t.prototype.clone = function () {
          return new t(this.condition, this.trueExpr, this.falseExpr)
        }, t.prototype._toString = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            a = mt(this, t),
            n = this.condition.toString(e),
            i = mt(this.condition, t);
          ("all" === t || "OperatorNode" === this.condition.type || null !== i && i <= a) && (n = "(" + n + ")");
          var r = this.trueExpr.toString(e),
            s = mt(this.trueExpr, t);
          ("all" === t || "OperatorNode" === this.trueExpr.type || null !== s && s <= a) && (r = "(" + r + ")");
          var o = this.falseExpr.toString(e),
            l = mt(this.falseExpr, t);
          return ("all" === t || "OperatorNode" === this.falseExpr.type || null !== l && l <= a) && (o = "(" + o + ")"), n + " ? " + r + " : " + o
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "ConditionalNode",
            condition: this.condition,
            trueExpr: this.trueExpr,
            falseExpr: this.falseExpr
          }
        }, t.fromJSON = function (e) {
          return new t(e.condition, e.trueExpr, e.falseExpr)
        }, t.prototype.toHTML = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            a = mt(this, t),
            n = this.condition.toHTML(e),
            i = mt(this.condition, t);
          ("all" === t || "OperatorNode" === this.condition.type || null !== i && i <= a) && (n = "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + n + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>");
          var r = this.trueExpr.toHTML(e),
            s = mt(this.trueExpr, t);
          ("all" === t || "OperatorNode" === this.trueExpr.type || null !== s && s <= a) && (r = "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + r + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>");
          var o = this.falseExpr.toHTML(e),
            l = mt(this.falseExpr, t);
          return ("all" === t || "OperatorNode" === this.falseExpr.type || null !== l && l <= a) && (o = "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + o + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>"), n + "<span class=\"math-operator math-conditional-operator\">?</span>" + r + "<span class=\"math-operator math-conditional-operator\">:</span>" + o
        }, t.prototype._toTex = function (e) {
          return "\\begin{cases} {" + this.trueExpr.toTex(e) + "}, &\\quad{\\text{if }\\;" + this.condition.toTex(e) + "}\\\\{" + this.falseExpr.toTex(e) + "}, &\\quad{\\text{otherwise}}\\end{cases}"
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      Ql = a(17),
      Kl = a.n(Ql),
      ep = {
        Alpha: "A",
        alpha: "\\alpha",
        Beta: "B",
        beta: "\\beta",
        Gamma: "\\Gamma",
        gamma: "\\gamma",
        Delta: "\\Delta",
        delta: "\\delta",
        Epsilon: "E",
        epsilon: "\\epsilon",
        varepsilon: "\\varepsilon",
        Zeta: "Z",
        zeta: "\\zeta",
        Eta: "H",
        eta: "\\eta",
        Theta: "\\Theta",
        theta: "\\theta",
        vartheta: "\\vartheta",
        Iota: "I",
        iota: "\\iota",
        Kappa: "K",
        kappa: "\\kappa",
        varkappa: "\\varkappa",
        Lambda: "\\Lambda",
        lambda: "\\lambda",
        Mu: "M",
        mu: "\\mu",
        Nu: "N",
        nu: "\\nu",
        Xi: "\\Xi",
        xi: "\\xi",
        Omicron: "O",
        omicron: "o",
        Pi: "\\Pi",
        pi: "\\pi",
        varpi: "\\varpi",
        Rho: "P",
        rho: "\\rho",
        varrho: "\\varrho",
        Sigma: "\\Sigma",
        sigma: "\\sigma",
        varsigma: "\\varsigma",
        Tau: "T",
        tau: "\\tau",
        Upsilon: "\\Upsilon",
        upsilon: "\\upsilon",
        Phi: "\\Phi",
        phi: "\\phi",
        varphi: "\\varphi",
        Chi: "X",
        chi: "\\chi",
        Psi: "\\Psi",
        psi: "\\psi",
        Omega: "\\Omega",
        omega: "\\omega",
        true: "\\mathrm{True}",
        false: "\\mathrm{False}",
        i: "i",
        inf: "\\infty",
        Inf: "\\infty",
        infinity: "\\infty",
        Infinity: "\\infty",
        oo: "\\infty",
        lim: "\\lim",
        undefined: "\\mathbf{?}"
      },
      tp = {
        transpose: "^\\top",
        ctranspose: "^H",
        factorial: "!",
        pow: "^",
        dotPow: ".^\\wedge",
        unaryPlus: "+",
        unaryMinus: "-",
        bitNot: "\\~",
        not: "\\neg",
        multiply: "\\cdot",
        divide: "\\frac",
        dotMultiply: ".\\cdot",
        dotDivide: ".:",
        mod: "\\mod",
        add: "+",
        subtract: "-",
        to: "\\rightarrow",
        leftShift: "<<",
        rightArithShift: ">>",
        rightLogShift: ">>>",
        equal: "=",
        unequal: "\\neq",
        smaller: "<",
        larger: ">",
        smallerEq: "\\leq",
        largerEq: "\\geq",
        bitAnd: "\\&",
        bitXor: "\\underline{|}",
        bitOr: "|",
        and: "\\wedge",
        xor: "\\veebar",
        or: "\\vee"
      },
      ap = {
        abs: {
          1: "\\left|${args[0]}\\right|"
        },
        add: {
          2: "\\left(${args[0]}".concat(tp.add, "${args[1]}\\right)")
        },
        cbrt: {
          1: "\\sqrt[3]{${args[0]}}"
        },
        ceil: {
          1: "\\left\\lceil${args[0]}\\right\\rceil"
        },
        cube: {
          1: "\\left(${args[0]}\\right)^3"
        },
        divide: {
          2: "\\frac{${args[0]}}{${args[1]}}"
        },
        dotDivide: {
          2: "\\left(${args[0]}".concat(tp.dotDivide, "${args[1]}\\right)")
        },
        dotMultiply: {
          2: "\\left(${args[0]}".concat(tp.dotMultiply, "${args[1]}\\right)")
        },
        dotPow: {
          2: "\\left(${args[0]}".concat(tp.dotPow, "${args[1]}\\right)")
        },
        exp: {
          1: "\\exp\\left(${args[0]}\\right)"
        },
        expm1: "\\left(e".concat(tp.pow, "{${args[0]}}-1\\right)"),
        fix: {
          1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
        },
        floor: {
          1: "\\left\\lfloor${args[0]}\\right\\rfloor"
        },
        gcd: "\\gcd\\left(${args}\\right)",
        hypot: "\\hypot\\left(${args}\\right)",
        log: {
          1: "\\ln\\left(${args[0]}\\right)",
          2: "\\log_{${args[1]}}\\left(${args[0]}\\right)"
        },
        log10: {
          1: "\\log_{10}\\left(${args[0]}\\right)"
        },
        log1p: {
          1: "\\ln\\left(${args[0]}+1\\right)",
          2: "\\log_{${args[1]}}\\left(${args[0]}+1\\right)"
        },
        log2: "\\log_{2}\\left(${args[0]}\\right)",
        mod: {
          2: "\\left(${args[0]}".concat(tp.mod, "${args[1]}\\right)")
        },
        multiply: {
          2: "\\left(${args[0]}".concat(tp.multiply, "${args[1]}\\right)")
        },
        norm: {
          1: "\\left\\|${args[0]}\\right\\|",
          2: void 0
        },
        nthRoot: {
          2: "\\sqrt[${args[1]}]{${args[0]}}"
        },
        nthRoots: {
          2: "\\{y : $y^{args[1]} = {${args[0]}}\\}"
        },
        pow: {
          2: "\\left(${args[0]}\\right)".concat(tp.pow, "{${args[1]}}")
        },
        round: {
          1: "\\left\\lfloor${args[0]}\\right\\rceil",
          2: void 0
        },
        sign: {
          1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
        },
        sqrt: {
          1: "\\sqrt{${args[0]}}"
        },
        square: {
          1: "\\left(${args[0]}\\right)^2"
        },
        subtract: {
          2: "\\left(${args[0]}".concat(tp.subtract, "${args[1]}\\right)")
        },
        unaryMinus: {
          1: "".concat(tp.unaryMinus, "\\left(${args[0]}\\right)")
        },
        unaryPlus: {
          1: "".concat(tp.unaryPlus, "\\left(${args[0]}\\right)")
        },
        bitAnd: {
          2: "\\left(${args[0]}".concat(tp.bitAnd, "${args[1]}\\right)")
        },
        bitNot: {
          1: tp.bitNot + "\\left(${args[0]}\\right)"
        },
        bitOr: {
          2: "\\left(${args[0]}".concat(tp.bitOr, "${args[1]}\\right)")
        },
        bitXor: {
          2: "\\left(${args[0]}".concat(tp.bitXor, "${args[1]}\\right)")
        },
        leftShift: {
          2: "\\left(${args[0]}".concat(tp.leftShift, "${args[1]}\\right)")
        },
        rightArithShift: {
          2: "\\left(${args[0]}".concat(tp.rightArithShift, "${args[1]}\\right)")
        },
        rightLogShift: {
          2: "\\left(${args[0]}".concat(tp.rightLogShift, "${args[1]}\\right)")
        },
        bellNumbers: {
          1: "\\mathrm{B}_{${args[0]}}"
        },
        catalan: {
          1: "\\mathrm{C}_{${args[0]}}"
        },
        stirlingS2: {
          2: "\\mathrm{S}\\left(${args}\\right)"
        },
        arg: {
          1: "\\arg\\left(${args[0]}\\right)"
        },
        conj: {
          1: "\\left(${args[0]}\\right)^*"
        },
        im: {
          1: "\\Im\\left\\lbrace${args[0]}\\right\\rbrace"
        },
        re: {
          1: "\\Re\\left\\lbrace${args[0]}\\right\\rbrace"
        },
        and: {
          2: "\\left(${args[0]}".concat(tp.and, "${args[1]}\\right)")
        },
        not: {
          1: tp.not + "\\left(${args[0]}\\right)"
        },
        or: {
          2: "\\left(${args[0]}".concat(tp.or, "${args[1]}\\right)")
        },
        xor: {
          2: "\\left(${args[0]}".concat(tp.xor, "${args[1]}\\right)")
        },
        cross: {
          2: "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)"
        },
        ctranspose: {
          1: "\\left(${args[0]}\\right)".concat(tp.ctranspose)
        },
        det: {
          1: "\\det\\left(${args[0]}\\right)"
        },
        dot: {
          2: "\\left(${args[0]}\\cdot${args[1]}\\right)"
        },
        expm: {
          1: "\\exp\\left(${args[0]}\\right)"
        },
        inv: {
          1: "\\left(${args[0]}\\right)^{-1}"
        },
        sqrtm: {
          1: "{${args[0]}}".concat(tp.pow, "{\\frac{1}{2}}")
        },
        trace: {
          1: "\\mathrm{tr}\\left(${args[0]}\\right)"
        },
        transpose: {
          1: "\\left(${args[0]}\\right)".concat(tp.transpose)
        },
        combinations: {
          2: "\\binom{${args[0]}}{${args[1]}}"
        },
        factorial: {
          1: "\\left(${args[0]}\\right)".concat(tp.factorial)
        },
        gamma: {
          1: "\\Gamma\\left(${args[0]}\\right)"
        },
        equal: {
          2: "\\left(${args[0]}".concat(tp.equal, "${args[1]}\\right)")
        },
        larger: {
          2: "\\left(${args[0]}".concat(tp.larger, "${args[1]}\\right)")
        },
        largerEq: {
          2: "\\left(${args[0]}".concat(tp.largerEq, "${args[1]}\\right)")
        },
        smaller: {
          2: "\\left(${args[0]}".concat(tp.smaller, "${args[1]}\\right)")
        },
        smallerEq: {
          2: "\\left(${args[0]}".concat(tp.smallerEq, "${args[1]}\\right)")
        },
        unequal: {
          2: "\\left(${args[0]}".concat(tp.unequal, "${args[1]}\\right)")
        },
        erf: {
          1: "erf\\left(${args[0]}\\right)"
        },
        max: "\\max\\left(${args}\\right)",
        min: "\\min\\left(${args}\\right)",
        variance: "\\mathrm{Var}\\left(${args}\\right)",
        acos: {
          1: "\\cos^{-1}\\left(${args[0]}\\right)"
        },
        acosh: {
          1: "\\cosh^{-1}\\left(${args[0]}\\right)"
        },
        acot: {
          1: "\\cot^{-1}\\left(${args[0]}\\right)"
        },
        acoth: {
          1: "\\coth^{-1}\\left(${args[0]}\\right)"
        },
        acsc: {
          1: "\\csc^{-1}\\left(${args[0]}\\right)"
        },
        acsch: {
          1: "\\mathrm{csch}^{-1}\\left(${args[0]}\\right)"
        },
        asec: {
          1: "\\sec^{-1}\\left(${args[0]}\\right)"
        },
        asech: {
          1: "\\mathrm{sech}^{-1}\\left(${args[0]}\\right)"
        },
        asin: {
          1: "\\sin^{-1}\\left(${args[0]}\\right)"
        },
        asinh: {
          1: "\\sinh^{-1}\\left(${args[0]}\\right)"
        },
        atan: {
          1: "\\tan^{-1}\\left(${args[0]}\\right)"
        },
        atan2: {
          2: "\\mathrm{atan2}\\left(${args}\\right)"
        },
        atanh: {
          1: "\\tanh^{-1}\\left(${args[0]}\\right)"
        },
        cos: {
          1: "\\cos\\left(${args[0]}\\right)"
        },
        cosh: {
          1: "\\cosh\\left(${args[0]}\\right)"
        },
        cot: {
          1: "\\cot\\left(${args[0]}\\right)"
        },
        coth: {
          1: "\\coth\\left(${args[0]}\\right)"
        },
        csc: {
          1: "\\csc\\left(${args[0]}\\right)"
        },
        csch: {
          1: "\\mathrm{csch}\\left(${args[0]}\\right)"
        },
        sec: {
          1: "\\sec\\left(${args[0]}\\right)"
        },
        sech: {
          1: "\\mathrm{sech}\\left(${args[0]}\\right)"
        },
        sin: {
          1: "\\sin\\left(${args[0]}\\right)"
        },
        sinh: {
          1: "\\sinh\\left(${args[0]}\\right)"
        },
        tan: {
          1: "\\tan\\left(${args[0]}\\right)"
        },
        tanh: {
          1: "\\tanh\\left(${args[0]}\\right)"
        },
        to: {
          2: "\\left(${args[0]}".concat(tp.to, "${args[1]}\\right)")
        },
        numeric: function (e) {
          return e.args[0].toTex()
        },
        number: {
          0: "0",
          1: "\\left(${args[0]}\\right)",
          2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
        },
        string: {
          0: "\\mathtt{\"\"}",
          1: "\\mathrm{string}\\left(${args[0]}\\right)"
        },
        bignumber: {
          0: "0",
          1: "\\left(${args[0]}\\right)"
        },
        complex: {
          0: "0",
          1: "\\left(${args[0]}\\right)",
          2: "\\left(\\left(${args[0]}\\right)+".concat(ep.i, "\\cdot\\left(${args[1]}\\right)\\right)")
        },
        matrix: {
          0: "\\begin{bmatrix}\\end{bmatrix}",
          1: "\\left(${args[0]}\\right)",
          2: "\\left(${args[0]}\\right)"
        },
        sparse: {
          0: "\\begin{bsparse}\\end{bsparse}",
          1: "\\left(${args[0]}\\right)"
        },
        unit: {
          1: "\\left(${args[0]}\\right)",
          2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
        }
      },
      np = {
        deg: "^\\circ"
      },
      ip = Object(ea.a)("ConstantNode", ["Node"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (2 === arguments.length) throw new SyntaxError("new ConstantNode(valueStr, valueType) is not supported anymore since math v4.0.0. Use new ConstantNode(value) instead, where value is a non-stringified value.");
          this.value = e
        }
        var a = e.Node;
        return t.prototype = new a, t.prototype.type = "ConstantNode", t.prototype.isConstantNode = !0, t.prototype._compile = function () {
          var e = this.value;
          return function () {
            return e
          }
        }, t.prototype.forEach = function () {}, t.prototype.map = function () {
          return this.clone()
        }, t.prototype.clone = function () {
          return new t(this.value)
        }, t.prototype._toString = function (e) {
          return Object(xa.d)(this.value, e)
        }, t.prototype.toHTML = function (e) {
          var t = this._toString(e);
          switch (Object(Yt.M)(this.value)) {
            case "number":
            case "BigNumber":
            case "Fraction":
              return "<span class=\"math-number\">" + t + "</span>";
            case "string":
              return "<span class=\"math-string\">" + t + "</span>";
            case "boolean":
              return "<span class=\"math-boolean\">" + t + "</span>";
            case "null":
              return "<span class=\"math-null-symbol\">" + t + "</span>";
            case "undefined":
              return "<span class=\"math-undefined\">" + t + "</span>";
            default:
              return "<span class=\"math-symbol\">" + t + "</span>";
          }
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "ConstantNode",
            value: this.value
          }
        }, t.fromJSON = function (e) {
          return new t(e.value)
        }, t.prototype._toTex = function (e) {
          var t = this._toString(e);
          switch (Object(Yt.M)(this.value)) {
            case "string":
              return "\\mathtt{" + ut(t) + "}";
            case "number":
            case "BigNumber":
              var a = t.toLowerCase().indexOf("e");
              return -1 === a ? t : t.substring(0, a) + "\\cdot10^{" + t.substring(a + 1) + "}";
            case "Fraction":
              return this.value.toLatex();
            default:
              return t;
          }
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      rp = Object(ea.a)("FunctionAssignmentNode", ["typed", "Node"], function (e) {
        function t(e, a, n) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if ("string" != typeof e) throw new TypeError("String expected for parameter \"name\"");
          if (!Array.isArray(a)) throw new TypeError("Array containing strings or objects expected for parameter \"params\"");
          if (!Object(Yt.w)(n)) throw new TypeError("Node expected for parameter \"expr\"");
          if (e in Gl) throw new Error("Illegal function name, \"" + e + "\" is a reserved keyword");
          this.name = e, this.params = a.map(function (e) {
            return e && e.name || e
          }), this.types = a.map(function (e) {
            return e && e.type || "any"
          }), this.expr = n
        }

        function a(e, t) {
          var a = mt(e, t),
            n = mt(e.expr, t);
          return "all" === t || null !== n && n <= a
        }
        var n = e.typed,
          i = e.Node;
        return t.prototype = new i, t.prototype.type = "FunctionAssignmentNode", t.prototype.isFunctionAssignmentNode = !0, t.prototype._compile = function (e, t) {
          var a = Object.create(t);
          Object(ya.f)(this.params, function (e) {
            a[e] = !0
          });
          var r = this.expr._compile(e, a),
            s = this.name,
            o = this.params,
            l = Object(ya.k)(this.types, ","),
            p = s + "(" + Object(ya.k)(this.params, ", ") + ")";
          return function (e, t, a) {
            var i = {};
            i[l] = function () {
              for (var n = Object.create(t), s = 0; s < o.length; s++) n[o[s]] = arguments[s];
              return r(e, n, a)
            };
            var m = n(s, i);
            return m.syntax = p, Ae(e, s, m), m
          }
        }, t.prototype.forEach = function (e) {
          e(this.expr, "expr", this)
        }, t.prototype.map = function (e) {
          var a = this._ifNode(e(this.expr, "expr", this));
          return new t(this.name, this.params.slice(0), a)
        }, t.prototype.clone = function () {
          return new t(this.name, this.params.slice(0), this.expr)
        }, t.prototype._toString = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            n = this.expr.toString(e);
          return a(this, t) && (n = "(" + n + ")"), this.name + "(" + this.params.join(", ") + ") = " + n
        }, t.prototype.toJSON = function () {
          var e = this.types;
          return {
            mathjs: "FunctionAssignmentNode",
            name: this.name,
            params: this.params.map(function (t, a) {
              return {
                name: t,
                type: e[a]
              }
            }),
            expr: this.expr
          }
        }, t.fromJSON = function (e) {
          return new t(e.name, e.params, e.expr)
        }, t.prototype.toHTML = function (e) {
          for (var t = e && e.parenthesis ? e.parenthesis : "keep", n = [], r = 0; r < this.params.length; r++) n.push("<span class=\"math-symbol math-parameter\">" + Object(xa.c)(this.params[r]) + "</span>");
          var s = this.expr.toHTML(e);
          return a(this, t) && (s = "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + s + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>"), "<span class=\"math-function\">" + Object(xa.c)(this.name) + "</span><span class=\"math-parenthesis math-round-parenthesis\">(</span>" + n.join("<span class=\"math-separator\">,</span>") + "<span class=\"math-parenthesis math-round-parenthesis\">)</span><span class=\"math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator\">=</span>" + s
        }, t.prototype._toTex = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            n = this.expr.toTex(e);
          return a(this, t) && (n = "\\left(".concat(n, "\\right)")), "\\mathrm{" + this.name + "}\\left(" + this.params.map(gt).join(",") + "\\right):=" + n
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      sp = Object(ea.a)("index", ["Index"], function (e) {
        var t = e.Index;
        return function () {
          for (var e = [], a = 0, n = arguments.length, r; a < n; a++) {
            if (r = arguments[a], Object(Yt.D)(r)) r.start--, r.end -= 0 < r.step ? 0 : 2;
            else if (r && !0 === r.isSet) r = r.map(function (e) {
              return e - 1
            });
            else if (Object(Yt.b)(r) || Object(Yt.v)(r)) r = r.map(function (e) {
              return e - 1
            });
            else if (Object(Yt.y)(r)) r--;
            else if (Object(Yt.e)(r)) r = r.toNumber() - 1;
            else if ("string" == typeof r);
            else throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
            e[a] = r
          }
          var s = new t;
          return t.apply(s, e), s
        }
      }, {
        isTransformFunction: !0
      }),
      op = Object(ea.a)("IndexNode", ["Range", "Node", "Index", "size"], function (e) {
        function t(e, a) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (this.dimensions = e, this.dotNotation = a || !1, !Array.isArray(e) || !e.every(Yt.w)) throw new TypeError("Array containing Nodes expected for parameter \"dimensions\"");
          if (this.dotNotation && !this.isObjectProperty()) throw new Error("dotNotation only applicable for object properties");
          var n = function () {
            throw new Error("Property `IndexNode.object` is deprecated, use `IndexNode.fn` instead")
          };
          Object.defineProperty(this, "object", {
            get: n,
            set: n
          })
        }

        function a(e, t, a) {
          return new n(Object(Yt.e)(e) ? e.toNumber() : e, Object(Yt.e)(t) ? t.toNumber() : t, Object(Yt.e)(a) ? a.toNumber() : a)
        }
        var n = e.Range,
          i = e.Node,
          r = e.Index,
          o = e.size,
          l = sp({
            Index: r
          });
        return t.prototype = new i, t.prototype.type = "IndexNode", t.prototype.isIndexNode = !0, t.prototype._compile = function (e, t) {
          var n = Object(ya.m)(this.dimensions, function (n, r) {
            if (Object(Yt.E)(n)) {
              if (n.needsEnd()) {
                var i = Object.create(t);
                i.end = !0;
                var l = n.start._compile(e, i),
                  p = n.end._compile(e, i),
                  m = n.step ? n.step._compile(e, i) : function () {
                    return 1
                  };
                return function (e, t, n) {
                  var i = o(n).valueOf(),
                    s = Object.create(t);
                  return s.end = i[r], a(l(e, s, n), p(e, s, n), m(e, s, n))
                }
              }
              var c = n.start._compile(e, t),
                d = n.end._compile(e, t),
                u = n.step ? n.step._compile(e, t) : function () {
                  return 1
                };
              return function (e, t, n) {
                return a(c(e, t, n), d(e, t, n), u(e, t, n))
              }
            }
            if (Object(Yt.J)(n) && "end" === n.name) {
              var g = Object.create(t);
              g.end = !0;
              var y = n._compile(e, g);
              return function (e, t, a) {
                var n = o(a).valueOf(),
                  i = Object.create(t);
                return i.end = n[r], y(e, i, a)
              }
            }
            var x = n._compile(e, t);
            return function (e, t, a) {
              return x(e, t, a)
            }
          });
          return function (e, t, a) {
            var i = Object(ya.m)(n, function (n) {
              return n(e, t, a)
            });
            return l.apply(void 0, yt(i))
          }
        }, t.prototype.forEach = function (e) {
          for (var t = 0; t < this.dimensions.length; t++) e(this.dimensions[t], "dimensions[" + t + "]", this)
        }, t.prototype.map = function (e) {
          for (var a = [], n = 0; n < this.dimensions.length; n++) a[n] = this._ifNode(e(this.dimensions[n], "dimensions[" + n + "]", this));
          return new t(a)
        }, t.prototype.clone = function () {
          return new t(this.dimensions.slice(0))
        }, t.prototype.isObjectProperty = function () {
          return 1 === this.dimensions.length && Object(Yt.l)(this.dimensions[0]) && "string" == typeof this.dimensions[0].value
        }, t.prototype.getObjectProperty = function () {
          return this.isObjectProperty() ? this.dimensions[0].value : null
        }, t.prototype._toString = function () {
          return this.dotNotation ? "." + this.getObjectProperty() : "[" + this.dimensions.join(", ") + "]"
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "IndexNode",
            dimensions: this.dimensions,
            dotNotation: this.dotNotation
          }
        }, t.fromJSON = function (e) {
          return new t(e.dimensions, e.dotNotation)
        }, t.prototype.toHTML = function () {
          for (var e = [], t = 0; t < this.dimensions.length; t++) e[t] = this.dimensions[t].toHTML();
          return this.dotNotation ? "<span class=\"math-operator math-accessor-operator\">.</span><span class=\"math-symbol math-property\">" + Object(xa.c)(this.getObjectProperty()) + "</span>" : "<span class=\"math-parenthesis math-square-parenthesis\">[</span>" + e.join("<span class=\"math-separator\">,</span>") + "<span class=\"math-parenthesis math-square-parenthesis\">]</span>"
        }, t.prototype._toTex = function (e) {
          var t = this.dimensions.map(function (t) {
            return t.toTex(e)
          });
          return this.dotNotation ? "." + this.getObjectProperty() + "" : "_{" + t.join(",") + "}"
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      lp = Object(ea.a)("ObjectNode", ["Node"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (this.properties = e || {}, e && ("object" !== bt(e) || !Object.keys(e).every(function (t) {
              return Object(Yt.w)(e[t])
            }))) throw new TypeError("Object containing Nodes expected")
        }
        var a = e.Node;
        return t.prototype = new a, t.prototype.type = "ObjectNode", t.prototype.isObjectNode = !0, t.prototype._compile = function (e, t) {
          var a = {};
          for (var n in this.properties)
            if (Object(fa.f)(this.properties, n)) {
              var i = Object(xa.e)(n),
                r = JSON.parse(i);
              if (!Oe(this.properties, r)) throw new Error("No access to property \"" + r + "\"");
              a[r] = this.properties[n]._compile(e, t)
            } return function (e, t, n) {
            var i = {};
            for (var r in a) Object(fa.f)(a, r) && (i[r] = a[r](e, t, n));
            return i
          }
        }, t.prototype.forEach = function (e) {
          for (var t in this.properties) this.properties.hasOwnProperty(t) && e(this.properties[t], "properties[" + Object(xa.e)(t) + "]", this)
        }, t.prototype.map = function (e) {
          var a = {};
          for (var n in this.properties) this.properties.hasOwnProperty(n) && (a[n] = this._ifNode(e(this.properties[n], "properties[" + Object(xa.e)(n) + "]", this)));
          return new t(a)
        }, t.prototype.clone = function () {
          var e = {};
          for (var a in this.properties) this.properties.hasOwnProperty(a) && (e[a] = this.properties[a]);
          return new t(e)
        }, t.prototype._toString = function (e) {
          var t = [];
          for (var a in this.properties) this.properties.hasOwnProperty(a) && t.push(Object(xa.e)(a) + ": " + this.properties[a].toString(e));
          return "{" + t.join(", ") + "}"
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "ObjectNode",
            properties: this.properties
          }
        }, t.fromJSON = function (e) {
          return new t(e.properties)
        }, t.prototype.toHTML = function (e) {
          var t = [];
          for (var a in this.properties) this.properties.hasOwnProperty(a) && t.push("<span class=\"math-symbol math-property\">" + Object(xa.c)(a) + "</span><span class=\"math-operator math-assignment-operator math-property-assignment-operator math-binary-operator\">:</span>" + this.properties[a].toHTML(e));
          return "<span class=\"math-parenthesis math-curly-parenthesis\">{</span>" + t.join("<span class=\"math-separator\">,</span>") + "<span class=\"math-parenthesis math-curly-parenthesis\">}</span>"
        }, t.prototype._toTex = function (e) {
          var t = [];
          for (var a in this.properties) this.properties.hasOwnProperty(a) && t.push("\\mathbf{" + a + ":} & " + this.properties[a].toTex(e) + "\\\\");
          return "\\left\\{\\begin{array}{ll}".concat(t.join("\n"), "\\end{array}\\right\\}")
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      pp = Object(ea.a)("OperatorNode", ["Node"], function (e) {
        function t(e, a, n, i) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if ("string" != typeof e) throw new TypeError("string expected for parameter \"op\"");
          if ("string" != typeof a) throw new TypeError("string expected for parameter \"fn\"");
          if (!Array.isArray(n) || !n.every(Yt.w)) throw new TypeError("Array containing Nodes expected for parameter \"args\"");
          this.implicit = !0 === i, this.op = e, this.fn = a, this.args = n || []
        }

        function a(e, t, a, n, i) {
          var r = mt(e, t),
            s = ct(e, t);
          if ("all" === t || 2 < n.length && "OperatorNode:add" !== e.getIdentifier() && "OperatorNode:multiply" !== e.getIdentifier()) return n.map(function (e) {
            switch (e.getContent().type) {
              case "ArrayNode":
              case "ConstantNode":
              case "SymbolNode":
              case "ParenthesisNode":
                return !1;
              default:
                return !0;
            }
          });
          var o;
          switch (n.length) {
            case 0:
              o = [];
              break;
            case 1:
              var l = mt(n[0], t);
              if (i && null !== l) {
                var p, m;
                if ("keep" === t ? (p = n[0].getIdentifier(), m = e.getIdentifier()) : (p = n[0].getContent().getIdentifier(), m = e.getContent().getIdentifier()), !1 === Wl[r][m].latexLeftParens) {
                  o = [!1];
                  break
                }
                if (!1 === Wl[l][p].latexParens) {
                  o = [!1];
                  break
                }
              }
              if (null === l) {
                o = [!1];
                break
              }
              if (l <= r) {
                o = [!0];
                break
              }
              o = [!1];
              break;
            case 2:
              var c = mt(n[0], t),
                d = dt(e, n[0], t),
                u;
              u = null !== c && (!(c !== r || "right" !== s || d) || !!(c < r));
              var g = mt(n[1], t),
                y = dt(e, n[1], t),
                x;
              if (x = null !== g && (!(g !== r || "left" !== s || y) || !!(g < r)), i) {
                var f, h, b;
                "keep" === t ? (f = e.getIdentifier(), h = e.args[0].getIdentifier(), b = e.args[1].getIdentifier()) : (f = e.getContent().getIdentifier(), h = e.args[0].getContent().getIdentifier(), b = e.args[1].getContent().getIdentifier()), null !== c && (!1 === Wl[r][f].latexLeftParens && (u = !1), !1 === Wl[c][h].latexParens && (u = !1)), null !== g && (!1 === Wl[r][f].latexRightParens && (x = !1), !1 === Wl[g][b].latexParens && (x = !1))
              }
              o = [u, x];
              break;
            default:
              ("OperatorNode:add" === e.getIdentifier() || "OperatorNode:multiply" === e.getIdentifier()) && (o = n.map(function (a) {
                var n = mt(a, t),
                  i = dt(e, a, t),
                  o = ct(a, t);
                return null !== n && (!(r !== n || s !== o || i) || !!(n < r))
              }));
          }
          return 2 <= n.length && "OperatorNode:multiply" === e.getIdentifier() && e.implicit && "auto" === t && "hide" === a && (o = n.map(function (e, t) {
            var a = "ParenthesisNode" === e.getIdentifier();
            return !!(o[t] || a)
          })), o
        }
        var n = e.Node;
        return t.prototype = new n, t.prototype.type = "OperatorNode", t.prototype.isOperatorNode = !0, t.prototype._compile = function (e, t) {
          if ("string" != typeof this.fn || !Ce(e, this.fn))
            if (!e[this.fn]) throw new Error("Function " + this.fn + " missing in provided namespace \"math\"");
            else throw new Error("No access to function \"" + this.fn + "\"");
          var a = Se(e, this.fn),
            n = Object(ya.m)(this.args, function (a) {
              return a._compile(e, t)
            });
          if (1 === n.length) {
            var i = n[0];
            return function (e, t, n) {
              return a(i(e, t, n))
            }
          }
          if (2 === n.length) {
            var r = n[0],
              s = n[1];
            return function (e, t, n) {
              return a(r(e, t, n), s(e, t, n))
            }
          }
          return function (e, t, i) {
            return a.apply(null, Object(ya.m)(n, function (a) {
              return a(e, t, i)
            }))
          }
        }, t.prototype.forEach = function (e) {
          for (var t = 0; t < this.args.length; t++) e(this.args[t], "args[" + t + "]", this)
        }, t.prototype.map = function (e) {
          for (var a = [], n = 0; n < this.args.length; n++) a[n] = this._ifNode(e(this.args[n], "args[" + n + "]", this));
          return new t(this.op, this.fn, a, this.implicit)
        }, t.prototype.clone = function () {
          return new t(this.op, this.fn, this.args.slice(0), this.implicit)
        }, t.prototype.isUnary = function () {
          return 1 === this.args.length
        }, t.prototype.isBinary = function () {
          return 2 === this.args.length
        }, t.prototype._toString = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            n = e && e.implicit ? e.implicit : "hide",
            i = this.args,
            r = a(this, t, n, i, !1);
          if (1 === i.length) {
            var s = ct(this, t),
              o = i[0].toString(e);
            r[0] && (o = "(" + o + ")");
            var l = /[a-zA-Z]+/.test(this.op);
            return "right" === s ? this.op + (l ? " " : "") + o : "left" === s ? o + (l ? " " : "") + this.op : o + this.op
          }
          if (2 === i.length) {
            var p = i[0].toString(e),
              m = i[1].toString(e);
            return r[0] && (p = "(" + p + ")"), r[1] && (m = "(" + m + ")"), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === n ? p + " " + m : p + " " + this.op + " " + m
          }
          if (2 < i.length && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) {
            var c = i.map(function (t, a) {
              return t = t.toString(e), r[a] && (t = "(" + t + ")"), t
            });
            return this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === n ? c.join(" ") : c.join(" " + this.op + " ")
          }
          return this.fn + "(" + this.args.join(", ") + ")"
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "OperatorNode",
            op: this.op,
            fn: this.fn,
            args: this.args,
            implicit: this.implicit
          }
        }, t.fromJSON = function (e) {
          return new t(e.op, e.fn, e.args, e.implicit)
        }, t.prototype.toHTML = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            n = e && e.implicit ? e.implicit : "hide",
            i = this.args,
            r = a(this, t, n, i, !1);
          if (1 === i.length) {
            var s = ct(this, t),
              o = i[0].toHTML(e);
            return r[0] && (o = "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + o + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>"), "right" === s ? "<span class=\"math-operator math-unary-operator math-lefthand-unary-operator\">" + Object(xa.c)(this.op) + "</span>" + o : o + "<span class=\"math-operator math-unary-operator math-righthand-unary-operator\">" + Object(xa.c)(this.op) + "</span>"
          }
          if (2 === i.length) {
            var l = i[0].toHTML(e),
              p = i[1].toHTML(e);
            return r[0] && (l = "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + l + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>"), r[1] && (p = "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + p + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>"), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === n ? l + "<span class=\"math-operator math-binary-operator math-implicit-binary-operator\"></span>" + p : l + "<span class=\"math-operator math-binary-operator math-explicit-binary-operator\">" + Object(xa.c)(this.op) + "</span>" + p
          }
          var m = i.map(function (t, a) {
            return t = t.toHTML(e), r[a] && (t = "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + t + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>"), t
          });
          return 2 < i.length && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier()) ? this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === n ? m.join("<span class=\"math-operator math-binary-operator math-implicit-binary-operator\"></span>") : m.join("<span class=\"math-operator math-binary-operator math-explicit-binary-operator\">" + Object(xa.c)(this.op) + "</span>") : "<span class=\"math-function\">" + Object(xa.c)(this.fn) + "</span><span class=\"math-paranthesis math-round-parenthesis\">(</span>" + m.join("<span class=\"math-separator\">,</span>") + "<span class=\"math-paranthesis math-round-parenthesis\">)</span>"
        }, t.prototype._toTex = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            n = e && e.implicit ? e.implicit : "hide",
            i = this.args,
            r = a(this, t, n, i, !0),
            s = tp[this.fn];
          if (s = "undefined" == typeof s ? this.op : s, 1 === i.length) {
            var o = ct(this, t),
              l = i[0].toTex(e);
            return (r[0] && (l = "\\left(".concat(l, "\\right)")), "right" === o) ? s + l : "left" === o ? l + s : l + s
          }
          if (2 === i.length) {
            var p = i[0],
              m = p.toTex(e);
            r[0] && (m = "\\left(".concat(m, "\\right)"));
            var c = i[1],
              d = c.toTex(e);
            r[1] && (d = "\\left(".concat(d, "\\right)"));
            var u;
            switch (u = "keep" === t ? p.getIdentifier() : p.getContent().getIdentifier(), this.getIdentifier()) {
              case "OperatorNode:divide":
                return s + "{" + m + "}{" + d + "}";
              case "OperatorNode:pow":
                m = "{" + m + "}", d = "{" + d + "}", "ConditionalNode" === u || "OperatorNode:divide" === u ? m = "\\left(".concat(m, "\\right)") : void 0;
                break;
              case "OperatorNode:multiply":
                if (this.implicit && "hide" === n) return m + "~" + d;
            }
            return m + s + d
          }
          if (2 < i.length && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) {
            var g = i.map(function (t, a) {
              return t = t.toTex(e), r[a] && (t = "\\left(".concat(t, "\\right)")), t
            });
            return "OperatorNode:multiply" === this.getIdentifier() && this.implicit ? g.join("~") : g.join(s)
          }
          return "\\mathrm{" + this.fn + "}\\left(" + i.map(function (t) {
            return t.toTex(e)
          }).join(",") + "\\right)"
        }, t.prototype.getIdentifier = function () {
          return this.type + ":" + this.fn
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      mp = Object(ea.a)("ParenthesisNode", ["Node"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!Object(Yt.w)(e)) throw new TypeError("Node expected for parameter \"content\"");
          this.content = e
        }
        var a = e.Node;
        return t.prototype = new a, t.prototype.type = "ParenthesisNode", t.prototype.isParenthesisNode = !0, t.prototype._compile = function (e, t) {
          return this.content._compile(e, t)
        }, t.prototype.getContent = function () {
          return this.content.getContent()
        }, t.prototype.forEach = function (e) {
          e(this.content, "content", this)
        }, t.prototype.map = function (e) {
          var a = e(this.content, "content", this);
          return new t(a)
        }, t.prototype.clone = function () {
          return new t(this.content)
        }, t.prototype._toString = function (e) {
          return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? "(" + this.content.toString(e) + ")" : this.content.toString(e)
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "ParenthesisNode",
            content: this.content
          }
        }, t.fromJSON = function (e) {
          return new t(e.content)
        }, t.prototype.toHTML = function (e) {
          return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + this.content.toHTML(e) + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>" : this.content.toHTML(e)
        }, t.prototype._toTex = function (e) {
          return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? "\\left(".concat(this.content.toTex(e), "\\right)") : this.content.toTex(e)
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      cp = Object(ea.a)("RangeNode", ["Node"], function (e) {
        function t(e, a, n) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!Object(Yt.w)(e)) throw new TypeError("Node expected");
          if (!Object(Yt.w)(a)) throw new TypeError("Node expected");
          if (n && !Object(Yt.w)(n)) throw new TypeError("Node expected");
          if (3 < arguments.length) throw new Error("Too many arguments");
          this.start = e, this.end = a, this.step = n || null
        }

        function a(e, t) {
          var a = mt(e, t),
            n = {},
            i = mt(e.start, t);
          if (n.start = null !== i && i <= a || "all" === t, e.step) {
            var r = mt(e.step, t);
            n.step = null !== r && r <= a || "all" === t
          }
          var s = mt(e.end, t);
          return n.end = null !== s && s <= a || "all" === t, n
        }
        var n = e.Node;
        return t.prototype = new n, t.prototype.type = "RangeNode", t.prototype.isRangeNode = !0, t.prototype.needsEnd = function () {
          var e = this.filter(function (e) {
            return Object(Yt.J)(e) && "end" === e.name
          });
          return 0 < e.length
        }, t.prototype._compile = function (e, t) {
          var a = e.range,
            n = this.start._compile(e, t),
            i = this.end._compile(e, t);
          if (this.step) {
            var r = this.step._compile(e, t);
            return function (e, t, s) {
              return a(n(e, t, s), i(e, t, s), r(e, t, s))
            }
          }
          return function (e, t, r) {
            return a(n(e, t, r), i(e, t, r))
          }
        }, t.prototype.forEach = function (e) {
          e(this.start, "start", this), e(this.end, "end", this), this.step && e(this.step, "step", this)
        }, t.prototype.map = function (e) {
          return new t(this._ifNode(e(this.start, "start", this)), this._ifNode(e(this.end, "end", this)), this.step && this._ifNode(e(this.step, "step", this)))
        }, t.prototype.clone = function () {
          return new t(this.start, this.end, this.step && this.step)
        }, t.prototype._toString = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            n = a(this, t),
            i = this.start.toString(e),
            r;
          if (n.start && (i = "(" + i + ")"), r = i, this.step) {
            var s = this.step.toString(e);
            n.step && (s = "(" + s + ")"), r += ":" + s
          }
          var o = this.end.toString(e);
          return n.end && (o = "(" + o + ")"), r += ":" + o, r
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "RangeNode",
            start: this.start,
            end: this.end,
            step: this.step
          }
        }, t.fromJSON = function (e) {
          return new t(e.start, e.end, e.step)
        }, t.prototype.toHTML = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            n = a(this, t),
            i = this.start.toHTML(e),
            r;
          if (n.start && (i = "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + i + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>"), r = i, this.step) {
            var s = this.step.toHTML(e);
            n.step && (s = "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + s + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>"), r += "<span class=\"math-operator math-range-operator\">:</span>" + s
          }
          var o = this.end.toHTML(e);
          return n.end && (o = "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + o + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>"), r += "<span class=\"math-operator math-range-operator\">:</span>" + o, r
        }, t.prototype._toTex = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            n = a(this, t),
            i = this.start.toTex(e);
          if (n.start && (i = "\\left(".concat(i, "\\right)")), this.step) {
            var r = this.step.toTex(e);
            n.step && (r = "\\left(".concat(r, "\\right)")), i += ":" + r
          }
          var s = this.end.toTex(e);
          return n.end && (s = "\\left(".concat(s, "\\right)")), i += ":" + s, i
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      dp = Object(ea.a)("RelationalNode", ["Node"], function (e) {
        function t(e, a) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!Array.isArray(e)) throw new TypeError("Parameter conditionals must be an array");
          if (!Array.isArray(a)) throw new TypeError("Parameter params must be an array");
          if (e.length !== a.length - 1) throw new TypeError("Parameter params must contain exactly one more element than parameter conditionals");
          this.conditionals = e, this.params = a
        }
        var a = e.Node;
        return t.prototype = new a, t.prototype.type = "RelationalNode", t.prototype.isRelationalNode = !0, t.prototype._compile = function (e, t) {
          var a = this,
            n = this.params.map(function (a) {
              return a._compile(e, t)
            });
          return function (t, r, s) {
            for (var o = n[0](t, r, s), l = 0, p; l < a.conditionals.length; l++) {
              p = o, o = n[l + 1](t, r, s);
              var m = Se(e, a.conditionals[l]);
              if (!m(p, o)) return !1
            }
            return !0
          }
        }, t.prototype.forEach = function (e) {
          var t = this;
          this.params.forEach(function (a, n) {
            return e(a, "params[" + n + "]", t)
          }, this)
        }, t.prototype.map = function (e) {
          var a = this;
          return new t(this.conditionals.slice(), this.params.map(function (t, n) {
            return a._ifNode(e(t, "params[" + n + "]", a))
          }, this))
        }, t.prototype.clone = function () {
          return new t(this.conditionals, this.params)
        }, t.prototype._toString = function (e) {
          for (var t = e && e.parenthesis ? e.parenthesis : "keep", a = mt(this, t), n = this.params.map(function (n) {
              var i = mt(n, t);
              return "all" === t || null !== i && i <= a ? "(" + n.toString(e) + ")" : n.toString(e)
            }), r = {
              equal: "==",
              unequal: "!=",
              smaller: "<",
              larger: ">",
              smallerEq: "<=",
              largerEq: ">="
            }, s = n[0], o = 0; o < this.conditionals.length; o++) s += " " + r[this.conditionals[o]] + " " + n[o + 1];
          return s
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "RelationalNode",
            conditionals: this.conditionals,
            params: this.params
          }
        }, t.fromJSON = function (e) {
          return new t(e.conditionals, e.params)
        }, t.prototype.toHTML = function (e) {
          for (var t = e && e.parenthesis ? e.parenthesis : "keep", a = mt(this, t), n = this.params.map(function (n) {
              var i = mt(n, t);
              return "all" === t || null !== i && i <= a ? "<span class=\"math-parenthesis math-round-parenthesis\">(</span>" + n.toHTML(e) + "<span class=\"math-parenthesis math-round-parenthesis\">)</span>" : n.toHTML(e)
            }), r = {
              equal: "==",
              unequal: "!=",
              smaller: "<",
              larger: ">",
              smallerEq: "<=",
              largerEq: ">="
            }, s = n[0], o = 0; o < this.conditionals.length; o++) s += "<span class=\"math-operator math-binary-operator math-explicit-binary-operator\">" + Object(xa.c)(r[this.conditionals[o]]) + "</span>" + n[o + 1];
          return s
        }, t.prototype._toTex = function (e) {
          for (var t = e && e.parenthesis ? e.parenthesis : "keep", a = mt(this, t), n = this.params.map(function (n) {
              var i = mt(n, t);
              return "all" === t || null !== i && i <= a ? "\\left(" + n.toTex(e) + "\right)" : n.toTex(e)
            }), r = n[0], s = 0; s < this.conditionals.length; s++) r += tp[this.conditionals[s]] + n[s + 1];
          return r
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      up = Object(ea.a)("SymbolNode", ["math", "?Unit", "Node"], function (e) {
        function t(e) {
          return !!r && r.isValuelessUnit(e)
        }

        function a(e) {
          if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
          if ("string" != typeof e) throw new TypeError("String expected for parameter \"name\"");
          this.name = e
        }

        function n(e) {
          throw new Error("Undefined symbol " + e)
        }
        var i = e.math,
          r = e.Unit,
          s = e.Node;
        return a.prototype = new s, a.prototype.type = "SymbolNode", a.prototype.isSymbolNode = !0, a.prototype._compile = function (e, a) {
          var i = this.name;
          if (Object(fa.f)(a, i)) return function (e, t) {
            return t[i]
          };
          if (i in e) return function (t) {
            return i in t ? Se(t, i) : Se(e, i)
          };
          var s = t(i);
          return function (e) {
            return i in e ? Se(e, i) : s ? new r(null, i) : n(i)
          }
        }, a.prototype.forEach = function () {}, a.prototype.map = function () {
          return this.clone()
        }, a.prototype.clone = function () {
          return new a(this.name)
        }, a.prototype._toString = function () {
          return this.name
        }, a.prototype.toHTML = function () {
          var e = Object(xa.c)(this.name);
          return "true" === e || "false" === e ? "<span class=\"math-symbol math-boolean\">" + e + "</span>" : "i" === e ? "<span class=\"math-symbol math-imaginary-symbol\">" + e + "</span>" : "Infinity" === e ? "<span class=\"math-symbol math-infinity-symbol\">" + e + "</span>" : "NaN" === e ? "<span class=\"math-symbol math-nan-symbol\">" + e + "</span>" : "null" === e ? "<span class=\"math-symbol math-null-symbol\">" + e + "</span>" : "undefined" === e ? "<span class=\"math-symbol math-undefined-symbol\">" + e + "</span>" : "<span class=\"math-symbol\">" + e + "</span>"
        }, a.prototype.toJSON = function () {
          return {
            mathjs: "SymbolNode",
            name: this.name
          }
        }, a.fromJSON = function (e) {
          return new a(e.name)
        }, a.prototype._toTex = function () {
          var e = !1;
          "undefined" == typeof i[this.name] && t(this.name) && (e = !0);
          var a = gt(this.name, e);
          return "\\" === a[0] ? a : " " + a
        }, a
      }, {
        isClass: !0,
        isNode: !0
      }),
      gp = Object(ea.a)("FunctionNode", ["math", "Node", "SymbolNode"], function (e) {
        function t(e, a) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if ("string" == typeof e && (e = new r(e)), !Object(Yt.w)(e)) throw new TypeError("Node expected as parameter \"fn\"");
          if (!Array.isArray(a) || !a.every(Yt.w)) throw new TypeError("Array containing Nodes expected for parameter \"args\"");
          this.fn = e, this.args = a || [], Object.defineProperty(this, "name", {
            get: function () {
              return this.fn.name || ""
            }.bind(this),
            set: function () {
              throw new Error("Cannot assign a new name, name is read-only")
            }
          });
          var n = function () {
            throw new Error("Property `FunctionNode.object` is deprecated, use `FunctionNode.fn` instead")
          };
          Object.defineProperty(this, "object", {
            get: n,
            set: n
          })
        }

        function a(e, t, a) {
          for (var n = "", i = /\$(?:\{([a-z_][a-z_0-9]*)(?:\[([0-9]+)\])?\}|\$)/ig, r = 0, s; null !== (s = i.exec(e));)
            if (n += e.substring(r, s.index), r = s.index, "$$" === s[0]) n += "$", r++;
            else {
              r += s[0].length;
              var o = t[s[1]];
              if (!o) throw new ReferenceError("Template: Property " + s[1] + " does not exist.");
              if (void 0 === s[2]) switch (vt(o)) {
                  case "string":
                    n += o;
                    break;
                  case "object":
                    if (Object(Yt.w)(o)) n += o.toTex(a);
                    else if (Array.isArray(o)) n += o.map(function (e, t) {
                      if (Object(Yt.w)(e)) return e.toTex(a);
                      throw new TypeError("Template: " + s[1] + "[" + t + "] is not a Node.")
                    }).join(",");
                    else throw new TypeError("Template: " + s[1] + " has to be a Node, String or array of Nodes");
                    break;
                  default:
                    throw new TypeError("Template: " + s[1] + " has to be a Node, String or array of Nodes");
                } else if (Object(Yt.w)(o[s[2]] && o[s[2]])) n += o[s[2]].toTex(a);
                else throw new TypeError("Template: " + s[1] + "[" + s[2] + "] is not a Node.")
            } return n += e.slice(r), n
        }
        var n = e.math,
          i = e.Node,
          r = e.SymbolNode;
        t.prototype = new i, t.prototype.type = "FunctionNode", t.prototype.isFunctionNode = !0, t.prototype._compile = function (e, a) {
          if (!(this instanceof t)) throw new TypeError("No valid FunctionNode");
          var n = Object(ya.m)(this.args, function (t) {
            return t._compile(e, a)
          });
          if (Object(Yt.J)(this.fn)) {
            var i = this.fn.name,
              r = i in e ? Se(e, i) : void 0,
              s = "function" == typeof r && !0 === r.rawArgs;
            if (s) {
              var o = this.args;
              return function (t, a) {
                return (i in t ? Se(t, i) : r)(o, e, Nt({}, t, a))
              }
            }
            if (1 === n.length) {
              var l = n[0];
              return function (e, t, a) {
                return (i in e ? Se(e, i) : r)(l(e, t, a))
              }
            }
            if (2 === n.length) {
              var p = n[0],
                m = n[1];
              return function (e, t, a) {
                return (i in e ? Se(e, i) : r)(p(e, t, a), m(e, t, a))
              }
            }
            return function (e, t, a) {
              return (i in e ? Se(e, i) : r).apply(null, Object(ya.m)(n, function (n) {
                return n(e, t, a)
              }))
            }
          }
          if (Object(Yt.a)(this.fn) && Object(Yt.u)(this.fn.index) && this.fn.index.isObjectProperty()) {
            var c = this.fn.object._compile(e, a),
              d = this.fn.index.getObjectProperty(),
              u = this.args;
            return function (t, a, i) {
              var r = c(t, a, i);
              _e(r, d);
              var s = r[d] && r[d].rawArgs;
              return s ? r[d](u, e, Nt({}, t, a)) : r[d].apply(r, Object(ya.m)(n, function (e) {
                return e(t, a, i)
              }))
            }
          }
          var g = this.fn._compile(e, a),
            y = this.args;
          return function (t, a, i) {
            var r = g(t, a, i),
              s = r && r.rawArgs;
            return s ? r(y, e, Nt({}, t, a)) : r.apply(r, Object(ya.m)(n, function (e) {
              return e(t, a, i)
            }))
          }
        }, t.prototype.forEach = function (e) {
          e(this.fn, "fn", this);
          for (var t = 0; t < this.args.length; t++) e(this.args[t], "args[" + t + "]", this)
        }, t.prototype.map = function (e) {
          for (var a = this._ifNode(e(this.fn, "fn", this)), n = [], r = 0; r < this.args.length; r++) n[r] = this._ifNode(e(this.args[r], "args[" + r + "]", this));
          return new t(a, n)
        }, t.prototype.clone = function () {
          return new t(this.fn, this.args.slice(0))
        };
        var s = t.prototype.toString;
        t.prototype.toString = function (e) {
          var t = this.fn.toString(e),
            a;
          return e && "object" === vt(e.handler) && Object(fa.f)(e.handler, t) && (a = e.handler[t](this, e)), "undefined" == typeof a ? s.call(this, e) : a
        }, t.prototype._toString = function (e) {
          var t = this.args.map(function (t) {
              return t.toString(e)
            }),
            a = Object(Yt.q)(this.fn) ? "(" + this.fn.toString(e) + ")" : this.fn.toString(e);
          return a + "(" + t.join(", ") + ")"
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "FunctionNode",
            fn: this.fn,
            args: this.args
          }
        }, t.fromJSON = function (e) {
          return new t(e.fn, e.args)
        }, t.prototype.toHTML = function (e) {
          var t = this.args.map(function (t) {
            return t.toHTML(e)
          });
          return "<span class=\"math-function\">" + Object(xa.c)(this.fn) + "</span><span class=\"math-paranthesis math-round-parenthesis\">(</span>" + t.join("<span class=\"math-separator\">,</span>") + "<span class=\"math-paranthesis math-round-parenthesis\">)</span>"
        };
        var o = t.prototype.toTex;
        return t.prototype.toTex = function (e) {
          var t;
          return e && "object" === vt(e.handler) && Object(fa.f)(e.handler, this.name) && (t = e.handler[this.name](this, e)), "undefined" == typeof t ? o.call(this, e) : t
        }, t.prototype._toTex = function (e) {
          var t = this.args.map(function (t) {
              return t.toTex(e)
            }),
            i;
          ap[this.name] && (i = ap[this.name]), n[this.name] && ("function" == typeof n[this.name].toTex || "object" === vt(n[this.name].toTex) || "string" == typeof n[this.name].toTex) && (i = n[this.name].toTex);
          var r;
          switch (vt(i)) {
            case "function":
              r = i(this, e);
              break;
            case "string":
              r = a(i, this, e);
              break;
            case "object":
              switch (vt(i[t.length])) {
                case "function":
                  r = i[t.length](this, e);
                  break;
                case "string":
                  r = a(i[t.length], this, e);
              }
          }
          return "undefined" == typeof r ? a("\\mathrm{${name}}\\left(${args}\\right)", this, e) : r
        }, t.prototype.getIdentifier = function () {
          return this.type + ":" + this.name
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      yp = "parse",
      xp = Object(ea.a)(yp, ["typed", "numeric", "config", "AccessorNode", "ArrayNode", "AssignmentNode", "BlockNode", "ConditionalNode", "ConstantNode", "FunctionAssignmentNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "RangeNode", "RelationalNode", "SymbolNode"], function (e) {
        function t(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            a = void 0 === t.nodes ? {} : t.nodes;
          return m(e, function (e) {
            if ("string" != typeof e) throw new TypeError("String expected");
            return u(e, a)
          })
        }

        function a() {
          return {
            extraNodes: {},
            expression: "",
            comment: "",
            index: 0,
            token: "",
            tokenType: ye.NULL,
            nestingLevel: 0,
            conditionalLevel: null
          }
        }

        function n(e, t) {
          return e.expression.substr(e.index, t)
        }

        function i(e) {
          return n(e, 1)
        }

        function r(e) {
          e.index++
        }

        function s(e) {
          return e.expression.charAt(e.index - 1)
        }

        function o(e) {
          return e.expression.charAt(e.index + 1)
        }

        function l(e) {
          for (e.tokenType = ye.NULL, e.token = "", e.comment = ""; ge.isWhitespace(i(e), e.nestingLevel);) r(e);
          if ("#" === i(e))
            for (;
              "\n" !== i(e) && "" !== i(e);) e.comment += i(e), r(e);
          if ("" === i(e)) return void(e.tokenType = ye.DELIMITER);
          if ("\n" === i(e) && !e.nestingLevel) return e.tokenType = ye.DELIMITER, e.token = i(e), void r(e);
          var t = i(e),
            a = n(e, 2),
            l = n(e, 3);
          if (3 === l.length && xe[l]) return e.tokenType = ye.DELIMITER, e.token = l, r(e), r(e), void r(e);
          if (2 === a.length && xe[a]) return e.tokenType = ye.DELIMITER, e.token = a, r(e), void r(e);
          if (xe[t]) return e.tokenType = ye.DELIMITER, e.token = t, void r(e);
          if (ge.isDigitDot(t)) {
            if (e.tokenType = ye.NUMBER, "." === i(e)) e.token += i(e), r(e), ge.isDigit(i(e)) || (e.tokenType = ye.DELIMITER);
            else {
              for (; ge.isDigit(i(e));) e.token += i(e), r(e);
              ge.isDecimalMark(i(e), o(e)) && (e.token += i(e), r(e))
            }
            for (; ge.isDigit(i(e));) e.token += i(e), r(e);
            if ("E" === i(e) || "e" === i(e))
              if (ge.isDigit(o(e)) || "-" === o(e) || "+" === o(e)) {
                if (e.token += i(e), r(e), ("+" === i(e) || "-" === i(e)) && (e.token += i(e), r(e)), !ge.isDigit(i(e))) throw W(e, "Digit expected, got \"" + i(e) + "\"");
                for (; ge.isDigit(i(e));) e.token += i(e), r(e);
                if (ge.isDecimalMark(i(e), o(e))) throw W(e, "Digit expected, got \"" + i(e) + "\"")
              } else if ("." === o(e)) throw r(e), W(e, "Digit expected, got \"" + i(e) + "\"");
            return
          }
          if (ge.isAlpha(i(e), s(e), o(e))) {
            for (; ge.isAlpha(i(e), s(e), o(e)) || ge.isDigit(i(e));) e.token += i(e), r(e);
            return void(e.tokenType = fe.hasOwnProperty(e.token) ? ye.DELIMITER : ye.SYMBOL)
          }
          for (e.tokenType = ye.UNKNOWN;
            "" !== i(e);) e.token += i(e), r(e);
          throw W(e, "Syntax error in part \"" + e.token + "\"")
        }

        function p(e) {
          do l(e); while ("\n" === e.token)
        }

        function c(e) {
          e.nestingLevel++
        }

        function d(e) {
          e.nestingLevel--
        }

        function u(e, t) {
          var n = a();
          Mt(n, {
            expression: e,
            extraNodes: t
          }), l(n);
          var i = g(n);
          if ("" !== n.token)
            if (n.tokenType === ye.DELIMITER) throw J(n, "Unexpected operator " + n.token);
            else throw W(n, "Unexpected part \"" + n.token + "\"");
          return i
        }

        function g(e) {
          var t = [],
            a, n;
          for ("" !== e.token && "\n" !== e.token && ";" !== e.token && (a = y(e), a.comment = e.comment);
            "\n" === e.token || ";" === e.token;) 0 === t.length && a && (n = ";" !== e.token, t.push({
            node: a,
            visible: n
          })), l(e), "\n" !== e.token && ";" !== e.token && "" !== e.token && (a = y(e), a.comment = e.comment, n = ";" !== e.token, t.push({
            node: a,
            visible: n
          }));
          return 0 < t.length ? new ae(t) : (a || (a = new ie(void 0), a.comment = e.comment), a)
        }

        function y(e) {
          var t = x(e),
            a, n, i, r;
          if ("=" === e.token) {
            if (Object(Yt.J)(t)) return a = t.name, p(e), i = y(e), new te(new ue(a), i);
            if (Object(Yt.a)(t)) return p(e), i = y(e), new te(t.object, t.index, i);
            if (Object(Yt.r)(t) && Object(Yt.J)(t.fn) && (r = !0, n = [], a = t.name, t.args.forEach(function (e, t) {
                Object(Yt.J)(e) ? n[t] = e.name : r = !1
              }), r)) return p(e), i = y(e), new re(a, n, i);
            throw W(e, "Invalid left hand side of assignment operator =")
          }
          return t
        }

        function x(e) {
          for (var t = f(e), a;
            "?" === e.token;) {
            a = e.conditionalLevel, e.conditionalLevel = e.nestingLevel, p(e);
            var n = t,
              i = y(e);
            if (":" !== e.token) throw W(e, "False part of conditional expression expected");
            e.conditionalLevel = null, p(e);
            var r = y(e);
            t = new ne(n, i, r), e.conditionalLevel = a
          }
          return t
        }

        function f(e) {
          for (var t = h(e);
            "or" === e.token;) p(e), t = new pe("or", "or", [t, h(e)]);
          return t
        }

        function h(e) {
          for (var t = b(e);
            "xor" === e.token;) p(e), t = new pe("xor", "xor", [t, b(e)]);
          return t
        }

        function b(e) {
          for (var t = v(e);
            "and" === e.token;) p(e), t = new pe("and", "and", [t, v(e)]);
          return t
        }

        function v(e) {
          for (var t = N(e);
            "|" === e.token;) p(e), t = new pe("|", "bitOr", [t, N(e)]);
          return t
        }

        function N(e) {
          for (var t = M(e);
            "^|" === e.token;) p(e), t = new pe("^|", "bitXor", [t, M(e)]);
          return t
        }

        function M(e) {
          for (var t = S(e);
            "&" === e.token;) p(e), t = new pe("&", "bitAnd", [t, S(e)]);
          return t
        }

        function S(e) {
          for (var t = [A(e)], a = [], n = {
              "==": "equal",
              "!=": "unequal",
              "<": "smaller",
              ">": "larger",
              "<=": "smallerEq",
              ">=": "largerEq"
            }, i; n.hasOwnProperty(e.token);) i = {
            name: e.token,
            fn: n[e.token]
          }, a.push(i), p(e), t.push(A(e));
          return 1 === t.length ? t[0] : 2 === t.length ? new pe(a[0].name, a[0].fn, t) : new de(a.map(function (e) {
            return e.fn
          }), t)
        }

        function A(e) {
          var t, a, n, i, r;
          for (t = O(e), a = {
              "<<": "leftShift",
              ">>": "rightArithShift",
              ">>>": "rightLogShift"
            }; a.hasOwnProperty(e.token);) n = e.token, i = a[n], p(e), r = [t, O(e)], t = new pe(n, i, r);
          return t
        }

        function O(e) {
          var t, a, n, i, r;
          for (t = _(e), a = {
              to: "to",
              in: "to"
            }; a.hasOwnProperty(e.token);) n = e.token, i = a[n], p(e), "in" === n && "" === e.token ? t = new pe("*", "multiply", [t, new ue("in")], !0) : (r = [t, _(e)], t = new pe(n, i, r));
          return t
        }

        function _(e) {
          var t = [],
            a;
          if (a = ":" === e.token ? new ie(1) : C(e), ":" === e.token && e.conditionalLevel !== e.nestingLevel) {
            for (t.push(a);
              ":" === e.token && 3 > t.length;) p(e), ")" === e.token || "]" === e.token || "," === e.token || "" === e.token ? t.push(new ue("end")) : t.push(C(e));
            a = 3 === t.length ? new ce(t[0], t[2], t[1]) : new ce(t[0], t[1])
          }
          return a
        }

        function C(e) {
          var t, a, n, i, r;
          for (t = E(e), a = {
              "+": "add",
              "-": "subtract"
            }; a.hasOwnProperty(e.token);) n = e.token, i = a[n], p(e), r = [t, E(e)], t = new pe(n, i, r);
          return t
        }

        function E(e) {
          var t, a, n, i, r;
          for (t = w(e), a = t, n = {
              "*": "multiply",
              ".*": "dotMultiply",
              "/": "divide",
              "./": "dotDivide",
              "%": "mod",
              mod: "mod"
            }; n.hasOwnProperty(e.token);) i = e.token, r = n[i], p(e), a = w(e), t = new pe(i, r, [t, a]);
          return t
        }

        function w(e) {
          var t, a;
          for (t = k(e), a = t; e.tokenType === ye.SYMBOL || "in" === e.token && Object(Yt.l)(t) || e.tokenType === ye.NUMBER && !Object(Yt.l)(a) && (!Object(Yt.B)(a) || "!" === a.op) || "(" === e.token;) a = k(e), t = new pe("*", "multiply", [t, a], !0);
          return t
        }

        function k(e) {
          for (var t = T(e), a = t, n = []; !!("/" === e.token && Object(Yt.l)(a));)
            if (n.push(Mt({}, e)), p(e), e.tokenType !== ye.NUMBER) {
              Mt(e, n.pop());
              break
            } else if (n.push(Mt({}, e)), p(e), e.tokenType === ye.SYMBOL || "(" === e.token) Mt(e, n.pop()), n.pop(), a = T(e), t = new pe("/", "divide", [t, a]);
          else {
            n.pop(), Mt(e, n.pop());
            break
          }
          return t
        }

        function T(e) {
          var t = {
              "-": "unaryMinus",
              "+": "unaryPlus",
              "~": "bitNot",
              not: "not"
            },
            a, n, i;
          return t.hasOwnProperty(e.token) ? (i = t[e.token], a = e.token, p(e), n = [T(e)], new pe(a, i, n)) : I(e)
        }

        function I(e) {
          var t, a, n, i;
          return t = q(e), ("^" === e.token || ".^" === e.token) && (a = e.token, n = "^" === a ? "pow" : "dotPow", p(e), i = [t, T(e)], t = new pe(a, n, i)), t
        }

        function q(e) {
          var t, a, n, i, r;
          for (t = B(e), a = {
              "!": "factorial",
              "'": "ctranspose"
            }; a.hasOwnProperty(e.token);) n = e.token, i = a[n], l(e), r = [t], t = new pe(n, i, r), t = j(e, t);
          return t
        }

        function B(e) {
          var t = [];
          if (e.tokenType === ye.SYMBOL && e.extraNodes.hasOwnProperty(e.token)) {
            var a = e.extraNodes[e.token];
            if (l(e), "(" === e.token) {
              if (t = [], c(e), l(e), ")" !== e.token)
                for (t.push(y(e));
                  "," === e.token;) l(e), t.push(y(e));
              if (")" !== e.token) throw W(e, "Parenthesis ) expected");
              d(e), l(e)
            }
            return new a(t)
          }
          return z(e)
        }

        function z(e) {
          var t, a;
          return e.tokenType === ye.SYMBOL || e.tokenType === ye.DELIMITER && e.token in fe ? (a = e.token, l(e), t = he.hasOwnProperty(a) ? new ie(he[a]) : -1 === be.indexOf(a) ? new ue(a) : new ie(X(a, "number")), t = j(e, t), t) : D(e)
        }

        function j(e, t, a) {
          for (var n;
            ("(" === e.token || "[" === e.token || "." === e.token) && (!a || -1 !== a.indexOf(e.token));)
            if (n = [], "(" === e.token) {
              if (Object(Yt.J)(t) || Object(Yt.a)(t)) {
                if (c(e), l(e), ")" !== e.token)
                  for (n.push(y(e));
                    "," === e.token;) l(e), n.push(y(e));
                if (")" !== e.token) throw W(e, "Parenthesis ) expected");
                d(e), l(e), t = new se(t, n)
              } else return t;
            } else if ("[" === e.token) {
            if (c(e), l(e), "]" !== e.token)
              for (n.push(y(e));
                "," === e.token;) l(e), n.push(y(e));
            if ("]" !== e.token) throw W(e, "Parenthesis ] expected");
            d(e), l(e), t = new K(t, new oe(n))
          } else {
            if (l(e), e.tokenType !== ye.SYMBOL) throw W(e, "Property name expected after dot");
            n.push(new ie(e.token)), l(e);
            t = new K(t, new oe(n, !0))
          }
          return t
        }

        function D(e) {
          var t, a;
          return "\"" === e.token ? (a = P(e), t = new ie(a), t = j(e, t), t) : R(e)
        }

        function P(e) {
          for (var t = "";
            "" !== i(e) && "\"" !== i(e);) "\\" === i(e) && (t += i(e), r(e)), t += i(e), r(e);
          if (l(e), "\"" !== e.token) throw W(e, "End of string \" expected");
          return l(e), JSON.parse("\"" + t + "\"")
        }

        function R(e) {
          var t, a;
          return "'" === e.token ? (a = U(e), t = new ie(a), t = j(e, t), t) : L(e)
        }

        function U(e) {
          for (var t = "";
            "" !== i(e) && "'" !== i(e);) "\\" === i(e) && (t += i(e), r(e)), t += i(e), r(e);
          if (l(e), "'" !== e.token) throw W(e, "End of string ' expected");
          return l(e), JSON.parse("\"" + t + "\"")
        }

        function L(e) {
          var t, a, n, i;
          if ("[" === e.token) {
            if (c(e), l(e), "]" !== e.token) {
              var s = F(e);
              if (";" === e.token) {
                for (n = 1, a = [s];
                  ";" === e.token;) l(e), a[n] = F(e), n++;
                if ("]" !== e.token) throw W(e, "End of matrix ] expected");
                d(e), l(e), i = a[0].items.length;
                for (var o = 1; o < n; o++)
                  if (a[o].items.length !== i) throw J(e, "Column dimensions mismatch (" + a[o].items.length + " !== " + i + ")");
                t = new ee(a)
              } else {
                if ("]" !== e.token) throw W(e, "End of matrix ] expected");
                d(e), l(e), t = s
              }
            } else d(e), l(e), t = new ee([]);
            return j(e, t)
          }
          return H(e)
        }

        function F(e) {
          for (var t = [y(e)], a = 1;
            "," === e.token;) l(e), t[a] = y(e), a++;
          return new ee(t)
        }

        function H(e) {
          if ("{" === e.token) {
            c(e);
            var t = {},
              a;
            do
              if (l(e), "}" !== e.token) {
                if ("\"" === e.token) a = P(e);
                else if ("'" === e.token) a = U(e);
                else if (e.tokenType === ye.SYMBOL) a = e.token, l(e);
                else throw W(e, "Symbol or string expected as object key");
                if (":" !== e.token) throw W(e, "Colon : expected after object key");
                l(e), t[a] = y(e)
              } while ("," === e.token);
            if ("}" !== e.token) throw W(e, "Comma , or bracket } expected after object value");
            d(e), l(e);
            var n = new le(t);
            return n = j(e, n), n
          }
          return G(e)
        }

        function G(e) {
          var t;
          return e.tokenType === ye.NUMBER ? (t = e.token, l(e), new ie(X(t, Q.number))) : $(e)
        }

        function $(e) {
          var t;
          if ("(" === e.token) {
            if (c(e), l(e), t = y(e), ")" !== e.token) throw W(e, "Parenthesis ) expected");
            return d(e), l(e), t = new me(t), t = j(e, t), t
          }
          return Z(e)
        }

        function Z(e) {
          if ("" === e.token) throw W(e, "Unexpected end of expression");
          else throw W(e, "Value expected")
        }

        function V(e) {
          return e.index - e.token.length + 1
        }

        function W(e, t) {
          var a = V(e),
            n = new SyntaxError(t + " (char " + a + ")");
          return n.char = a, n
        }

        function J(e, t) {
          var a = V(e),
            n = new SyntaxError(t + " (char " + a + ")");
          return n.char = a, n
        }
        var Y = e.typed,
          X = e.numeric,
          Q = e.config,
          K = e.AccessorNode,
          ee = e.ArrayNode,
          te = e.AssignmentNode,
          ae = e.BlockNode,
          ne = e.ConditionalNode,
          ie = e.ConstantNode,
          re = e.FunctionAssignmentNode,
          se = e.FunctionNode,
          oe = e.IndexNode,
          le = e.ObjectNode,
          pe = e.OperatorNode,
          me = e.ParenthesisNode,
          ce = e.RangeNode,
          de = e.RelationalNode,
          ue = e.SymbolNode,
          ge = Y(yp, {
            string: function (e) {
              return u(e, {})
            },
            "Array | Matrix": function (e) {
              return t(e, {})
            },
            "string, Object": function (e, t) {
              var a = void 0 === t.nodes ? {} : t.nodes;
              return u(e, a)
            },
            "Array | Matrix, Object": t
          }),
          ye = {
            NULL: 0,
            DELIMITER: 1,
            NUMBER: 2,
            SYMBOL: 3,
            UNKNOWN: 4
          },
          xe = {
            ",": !0,
            "(": !0,
            ")": !0,
            "[": !0,
            "]": !0,
            "{": !0,
            "}": !0,
            '"': !0,
            "'": !0,
            ";": !0,
            "+": !0,
            "-": !0,
            "*": !0,
            ".*": !0,
            "/": !0,
            "./": !0,
            "%": !0,
            "^": !0,
            ".^": !0,
            "~": !0,
            "!": !0,
            "&": !0,
            "|": !0,
            "^|": !0,
            "=": !0,
            ":": !0,
            "?": !0,
            "==": !0,
            "!=": !0,
            "<": !0,
            ">": !0,
            "<=": !0,
            ">=": !0,
            "<<": !0,
            ">>": !0,
            ">>>": !0
          },
          fe = {
            mod: !0,
            to: !0,
            in: !0,
            and: !0,
            xor: !0,
            or: !0,
            not: !0
          },
          he = {
            true: !0,
            false: !1,
            null: null,
            undefined: void 0
          },
          be = ["NaN", "Infinity"];
        return ge.isAlpha = function (e, t, a) {
          return ge.isValidLatinOrGreek(e) || ge.isValidMathSymbol(e, a) || ge.isValidMathSymbol(t, e)
        }, ge.isValidLatinOrGreek = function (e) {
          return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(e)
        }, ge.isValidMathSymbol = function (e, t) {
          return /^[\uD835]$/.test(e) && /^[\uDC00-\uDFFF]$/.test(t) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(t)
        }, ge.isWhitespace = function (e, t) {
          return " " === e || "\t" === e || "\n" === e && 0 < t
        }, ge.isDecimalMark = function (e, t) {
          return "." === e && "/" !== t && "*" !== t && "^" !== t
        }, ge.isDigitDot = function (e) {
          return "0" <= e && "9" >= e || "." === e
        }, ge.isDigit = function (e) {
          return "0" <= e && "9" >= e
        }, ge
      }),
      fp = "compile",
      hp = Object(ea.a)(fp, ["typed", "parse"], function (e) {
        var t = e.typed,
          a = e.parse;
        return t(fp, {
          string: function (e) {
            return a(e).compile()
          },
          "Array | Matrix": function (e) {
            return m(e, function (e) {
              return a(e).compile()
            })
          }
        })
      }),
      bp = "evaluate",
      vp = Object(ea.a)(bp, ["typed", "parse"], function (e) {
        var t = e.typed,
          a = e.parse;
        return t(bp, {
          string: function (e) {
            return a(e).compile().evaluate({})
          },
          "string, Object": function (e, t) {
            return a(e).compile().evaluate(t)
          },
          "Array | Matrix": function (e) {
            var t = {};
            return m(e, function (e) {
              return a(e).compile().evaluate(t)
            })
          },
          "Array | Matrix, Object": function (e, t) {
            return m(e, function (e) {
              return a(e).compile().evaluate(t)
            })
          }
        })
      }),
      Np = Object(ea.a)("eval", ["evaluate"], function (e) {
        var t = e.evaluate;
        return function () {
          Object(Da.a)("Function \"eval\" has been renamed to \"evaluate\" in v6.0.0, please use the new function instead.");
          for (var e = arguments.length, a = Array(e), n = 0; n < e; n++) a[n] = arguments[n];
          return t.apply(t, a)
        }
      }),
      Mp = Object(ea.a)("Parser", ["parse"], function (e) {
        function t() {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          this.scope = {}
        }
        var a = e.parse;
        return t.prototype.type = "Parser", t.prototype.isParser = !0, t.prototype.parse = function () {
          throw new Error("Parser.parse is deprecated. Use math.parse instead.")
        }, t.prototype.compile = function () {
          throw new Error("Parser.compile is deprecated. Use math.compile instead.")
        }, t.prototype.evaluate = function (e) {
          return a(e).compile().evaluate(this.scope)
        }, t.prototype.eval = function (e) {
          return Object(Da.a)("Method Parser.eval is renamed to Parser.evaluate. Please use the new method name."), this.evaluate(e)
        }, t.prototype.get = function (e) {
          return e in this.scope ? Se(this.scope, e) : void 0
        }, t.prototype.getAll = function () {
          return Object(fa.e)({}, this.scope)
        }, t.prototype.set = function (e, t) {
          return Ae(this.scope, e, t)
        }, t.prototype.remove = function (e) {
          delete this.scope[e]
        }, t.prototype.clear = function () {
          for (var e in this.scope) this.scope.hasOwnProperty(e) && delete this.scope[e]
        }, t
      }, {
        isClass: !0
      }),
      Sp = "parser",
      Ap = Object(ea.a)(Sp, ["typed", "Parser"], function (e) {
        var t = e.typed,
          a = e.Parser;
        return t(Sp, {
          "": function () {
            return new a
          }
        })
      }),
      Op = "lup",
      _p = Object(ea.a)(Op, ["typed", "matrix", "abs", "addScalar", "divideScalar", "multiplyScalar", "subtract", "larger", "equalScalar", "unaryMinus", "DenseMatrix", "SparseMatrix", "Spa"], function (e) {
        function t(e) {
          var t = e._size[0],
            a = e._size[1],
            y = Math.min(t, a),
            x = Object(fa.a)(e._data),
            f = [],
            h = [t, y],
            b = [],
            N = [y, a],
            M = [],
            S, A, O;
          for (S = 0; S < t; S++) M[S] = S;
          for (A = 0; A < a; A++) {
            if (0 < A)
              for (S = 0; S < t; S++) {
                var _ = Math.min(S, A),
                  C = 0;
                for (O = 0; O < _; O++) C = o(C, p(x[S][O], x[O][A]));
                x[S][A] = m(x[S][A], C)
              }
            var E = A,
              w = 0,
              T = 0;
            for (S = A; S < t; S++) {
              var I = x[S][A],
                v = r(I);
              c(v, w) && (E = S, w = v, T = I)
            }
            if (A !== E && (M[A] = M[E], g._swapRows(A, E, x)), A < t)
              for (S = A + 1; S < t; S++) {
                var q = x[S][A];
                d(q, 0) || (x[S][A] = l(x[S][A], T))
              }
          }
          for (A = 0; A < a; A++)
            for (S = 0; S < t; S++) {
              if (0 === A && (S < a && (b[S] = []), f[S] = []), S < A) {
                S < a && (b[S][A] = x[S][A]), A < t && (f[S][A] = 0);
                continue
              }
              if (S === A) {
                S < a && (b[S][A] = x[S][A]), A < t && (f[S][A] = 1);
                continue
              }
              S < a && (b[S][A] = 0), A < t && (f[S][A] = x[S][A])
            }
          var B = new g({
              data: f,
              size: h
            }),
            z = new g({
              data: b,
              size: N
            }),
            u = [];
          for (S = 0, y = M.length; S < y; S++) u[M[S]] = S;
          return {
            L: B,
            U: z,
            p: u,
            toString: function () {
              return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p
            }
          }
        }

        function a(e) {
          var t = e._size[0],
            a = e._size[1],
            s = Math.min(t, a),
            n = e._values,
            o = e._index,
            m = e._ptr,
            g = [],
            f = [],
            h = [],
            b = [t, s],
            N = [],
            M = [],
            S = [],
            A = [s, a],
            O = [],
            _ = [],
            C, E, v;
          for (C = 0; C < t; C++) O[C] = C, _[C] = C;
          var w = function (e, t) {
              var a = _[e],
                n = _[t];
              O[a] = t, O[n] = e, _[e] = n, _[t] = a
            },
            T = function () {
              var e = new x;
              E < t && (h.push(g.length), g.push(1), f.push(E)), S.push(N.length);
              var a = m[E],
                i = m[E + 1];
              for (v = a; v < i; v++) C = o[v], e.set(O[C], n[v]);
              0 < E && e.forEach(0, E - 1, function (t, a) {
                y._forEachRow(t, g, f, h, function (n, i) {
                  n > t && e.accumulate(n, u(p(i, a)))
                })
              });
              var s = E,
                _ = e.get(E),
                k = r(_);
              e.forEach(E + 1, t - 1, function (e, t) {
                var a = r(t);
                c(a, k) && (s = e, k = a, _ = t)
              }), E !== s && (y._swapRows(E, s, b[1], g, f, h), y._swapRows(E, s, A[1], N, M, S), e.swap(E, s), w(E, s)), e.forEach(0, t - 1, function (e, t) {
                e <= E ? (N.push(t), M.push(e)) : (t = l(t, _), !d(t, 0) && (g.push(t), f.push(e)))
              })
            };
          for (E = 0; E < a; E++) T();
          return S.push(N.length), h.push(g.length), {
            L: new y({
              values: g,
              index: f,
              ptr: h,
              size: b
            }),
            U: new y({
              values: N,
              index: M,
              ptr: S,
              size: A
            }),
            p: O,
            toString: function () {
              return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p
            }
          }
        }
        var n = e.typed,
          i = e.matrix,
          r = e.abs,
          o = e.addScalar,
          l = e.divideScalar,
          p = e.multiplyScalar,
          m = e.subtract,
          c = e.larger,
          d = e.equalScalar,
          u = e.unaryMinus,
          g = e.DenseMatrix,
          y = e.SparseMatrix,
          x = e.Spa;
        return n(Op, {
          DenseMatrix: function (e) {
            return t(e)
          },
          SparseMatrix: function (e) {
            return a(e)
          },
          Array: function (e) {
            var a = i(e),
              n = t(a);
            return {
              L: n.L.valueOf(),
              U: n.U.valueOf(),
              p: n.p
            }
          }
        })
      }),
      Cp = "qr",
      Ep = Object(ea.a)(Cp, ["typed", "matrix", "zeros", "identity", "isZero", "unequal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtract"], function (e) {
        function t(e) {
          var t = e._size[0],
            a = e._size[1],
            n = o([t], "dense"),
            h = n._data,
            b = e.clone(),
            v = b._data,
            N = r([t], ""),
            M, S, A;
          for (A = 0; A < Math.min(a, t); ++A) {
            var O = v[A][A],
              _ = u(m(O)),
              C = d(_),
              E = 0;
            for (M = A; M < t; M++) E = g(E, x(v[M][A], d(v[M][A])));
            var w = x(_, c(E));
            if (!l(w)) {
              var T = f(O, w);
              for (N[A] = 1, M = A + 1; M < t; M++) N[M] = y(v[M][A], T);
              var I = u(d(y(T, w))),
                q = void 0;
              for (S = A; S < a; S++) {
                for (q = 0, M = A; M < t; M++) q = g(q, x(d(N[M]), v[M][S]));
                for (q = x(q, I), M = A; M < t; M++) v[M][S] = x(f(v[M][S], x(N[M], q)), C)
              }
              for (M = 0; M < t; M++) {
                for (q = 0, S = A; S < t; S++) q = g(q, x(h[M][S], N[S]));
                for (q = x(q, I), S = A; S < t; ++S) h[M][S] = y(f(h[M][S], x(q, d(N[S]))), C)
              }
            }
          }
          for (M = 0; M < t; ++M)
            for (S = 0; S < M && S < a; ++S) {
              if (p(0, y(v[M][S], 1e5))) throw new Error("math.qr(): unknown error - R is not lower triangular (element (" + M + ", " + S + ")  = " + v[M][S] + ")");
              v[M][S] = x(v[M][S], 0)
            }
          return {
            Q: n,
            R: b,
            toString: function () {
              return "Q: " + this.Q.toString() + "\nR: " + this.R.toString()
            }
          }
        }

        function a() {
          throw new Error("qr not implemented for sparse matrices yet")
        }
        var n = e.typed,
          i = e.matrix,
          r = e.zeros,
          o = e.identity,
          l = e.isZero,
          p = e.unequal,
          m = e.sign,
          c = e.sqrt,
          d = e.conj,
          u = e.unaryMinus,
          g = e.addScalar,
          y = e.divideScalar,
          x = e.multiplyScalar,
          f = e.subtract;
        return n(Cp, {
          DenseMatrix: function (e) {
            return t(e)
          },
          SparseMatrix: function (e) {
            return a(e)
          },
          Array: function (e) {
            var a = i(e),
              n = t(a);
            return {
              Q: n.Q.valueOf(),
              R: n.R.valueOf()
            }
          }
        })
      }),
      wp = Object(ea.a)("csAmd", ["add", "multiply", "transpose"], function (e) {
        function t(e, t, i, r, n) {
          var s = d(t);
          if (1 === e && r === i) return l(t, s);
          if (2 === e) {
            for (var o = s._index, m = s._ptr, u = 0, g = 0, y; g < i; g++)
              if (y = m[g], m[g] = u, !(m[g + 1] - y > n))
                for (var x = m[g + 1]; y < x; y++) o[u++] = o[y];
            return m[i] = u, t = d(s), c(s, t)
          }
          return c(s, t)
        }

        function a(e, t, a, n, r, o, l, p, m, c, d, u) {
          for (var g = 0; g < e; g++) a[n + g] = t[g + 1] - t[g];
          a[n + e] = 0;
          for (var y = 0; y <= e; y++) a[r + y] = -1, o[y] = -1, a[l + y] = -1, a[p + y] = -1, a[m + y] = 1, a[c + y] = 1, a[d + y] = 0, a[u + y] = a[n + y];
          var x = s(0, 0, a, c, e);
          return a[d + e] = -2, t[e] = -1, a[c + e] = 0, x
        }

        function r(e, t, a, n, r, s, o, l, p, m, c) {
          for (var u = 0, g = 0, y; g < e; g++)
            if (y = a[n + g], 0 === y) a[r + g] = -2, u++, t[g] = -1, a[s + g] = 0;
            else if (y > o) a[l + g] = 0, a[r + g] = -1, u++, t[g] = Et(e), a[l + e]++;
          else {
            var x = a[p + y]; - 1 !== x && (m[x] = g), a[c + g] = a[p + y], a[p + y] = g
          }
          return u
        }

        function s(e, t, a, i, r) {
          if (2 > e || 0 > e + t) {
            for (var n = 0; n < r; n++) 0 !== a[i + n] && (a[i + n] = 1);
            e = 2
          }
          return e
        }

        function o(e, t) {
          return e !== t
        }
        var l = e.add,
          c = e.multiply,
          d = e.transpose;
        return function (l, c) {
          if (!c || 0 >= l || 3 < l) return null;
          var u = c._size,
            g = u[0],
            m = u[1],
            n = 0,
            y = Math.max(16, 10 * Math.sqrt(m));
          y = Math.min(m - 2, y);
          var x = t(l, c, g, m, y);
          Ct(x, o, null);
          for (var f = x._index, b = x._ptr, v = b[m], N = [], M = [], S = 0, A = m + 1, O = 2 * (m + 1), _ = 3 * (m + 1), C = 4 * (m + 1), E = 5 * (m + 1), T = 6 * (m + 1), w = 7 * (m + 1), I = N, q = a(m, b, M, S, _, I, O, w, A, T, C, E), B = r(m, b, M, E, C, T, y, A, _, I, O), z = 0, D, P, R, U, L, F, H, G, $, Z, V, W, J, Y, X, Q; B < m;) {
            for (R = -1; z < m && -1 === (R = M[_ + z]); z++); - 1 !== M[O + R] && (I[M[O + R]] = -1), M[_ + z] = M[O + R];
            var K = M[C + R],
              ee = M[A + R];
            B += ee;
            var te = 0;
            M[A + R] = -ee;
            var ae = b[R],
              ne = 0 === K ? ae : v,
              ie = ne;
            for (U = 1; U <= K + 1; U++) {
              for (U > K ? (F = R, H = ae, G = M[S + R] - K) : (F = f[ae++], H = b[F], G = M[S + F]), L = 1; L <= G; L++)(D = f[H++], !(0 >= ($ = M[A + D]))) && (te += $, M[A + D] = -$, f[ie++] = D, -1 !== M[O + D] && (I[M[O + D]] = I[D]), -1 === I[D] ? M[_ + M[E + D]] = M[O + D] : M[O + I[D]] = M[O + D]);
              F !== R && (b[F] = Et(R), M[T + F] = 0)
            }
            for (0 !== K && (v = ie), M[E + R] = te, b[R] = ne, M[S + R] = ie - ne, M[C + R] = -2, q = s(q, n, M, T, m), Z = ne; Z < ie; Z++)
              if (D = f[Z], !(0 >= (V = M[C + D]))) {
                $ = -M[A + D];
                var re = q - $;
                for (ae = b[D], W = b[D] + V - 1; ae <= W; ae++) F = f[ae], M[T + F] >= q ? M[T + F] -= $ : 0 !== M[T + F] && (M[T + F] = M[E + F] + re)
              } for (Z = ne; Z < ie; Z++) {
              for (D = f[Z], W = b[D], J = W + M[C + D] - 1, Y = W, (X = 0, Q = 0, ae = W); ae <= J; ae++)
                if (F = f[ae], 0 !== M[T + F]) {
                  var se = M[T + F] - q;
                  0 < se ? (Q += se, f[Y++] = F, X += F) : (b[F] = Et(R), M[T + F] = 0)
                } M[C + D] = Y - W + 1;
              var oe = Y,
                le = W + M[S + D];
              for (ae = J + 1; ae < le; ae++) {
                P = f[ae];
                var pe = M[A + P];
                0 >= pe || (Q += pe, f[Y++] = P, X += P)
              }
              0 === Q ? (b[D] = Et(R), $ = -M[A + D], te -= $, ee += $, B += $, M[A + D] = 0, M[C + D] = -1) : (M[E + D] = Math.min(M[E + D], Q), f[Y] = f[oe], f[oe] = f[W], f[W] = R, M[S + D] = Y - W + 1, X = (0 > X ? -X : X) % m, M[O + D] = M[w + X], M[w + X] = D, I[D] = X)
            }
            for (M[E + R] = te, n = Math.max(n, te), q = s(q + n, n, M, T, m), Z = ne; Z < ie; Z++)
              if (D = f[Z], !(0 <= M[A + D]))
                for (X = I[D], D = M[w + X], M[w + X] = -1; - 1 !== D && -1 !== M[O + D]; D = M[O + D], q++) {
                  for (G = M[S + D], V = M[C + D], ae = b[D] + 1; ae <= b[D] + G - 1; ae++) M[T + f[ae]] = q;
                  var me = D;
                  for (P = M[O + D]; - 1 !== P;) {
                    var ce = M[S + P] === G && M[C + P] === V;
                    for (ae = b[P] + 1; ce && ae <= b[P] + G - 1; ae++) M[T + f[ae]] !== q && (ce = 0);
                    ce ? (b[P] = Et(D), M[A + D] += M[A + P], M[A + P] = 0, M[C + P] = -1, P = M[O + P], M[O + me] = P) : (me = P, P = M[O + P])
                  }
                }
            for (ae = ne, Z = ne; Z < ie; Z++)(D = f[Z], !(0 >= ($ = -M[A + D]))) && (M[A + D] = $, Q = M[E + D] + te - $, Q = Math.min(Q, m - B - $), -1 !== M[_ + Q] && (I[M[_ + Q]] = D), M[O + D] = M[_ + Q], I[D] = -1, M[_ + Q] = D, z = Math.min(z, Q), M[E + D] = Q, f[ae++] = D);
            M[A + R] = ee, 0 == (M[S + R] = ae - ne) && (b[R] = -1, M[T + R] = 0), 0 !== K && (v = ae)
          }
          for (D = 0; D < m; D++) b[D] = Et(b[D]);
          for (P = 0; P <= m; P++) M[_ + P] = -1;
          for (P = m; 0 <= P; P--) 0 < M[A + P] || (M[O + P] = M[_ + b[P]], M[_ + b[P]] = P);
          for (F = m; 0 <= F; F--) 0 >= M[A + F] || -1 !== b[F] && (M[O + F] = M[_ + b[F]], M[_ + b[F]] = F);
          for (R = 0, D = 0; D <= m; D++) - 1 === b[D] && (R = At(D, R, M, _, O, N, T));
          return N.splice(N.length - 1, 1), N
        }
      }),
      kp = Object(ea.a)("csCounts", ["transpose"], function (e) {
        var t = e.transpose;
        return function (e, a, o, l) {
          if (!e || !a || !o) return null;
          var c = e._size,
            d = c[0],
            m = c[1],
            n = 4 * m + (l ? m + d + 1 : 0),
            s = [],
            u = 0,
            g = 3 * m,
            y = 4 * m,
            x = 5 * m + 1,
            f, h, b, v, N, M, S;
          for (b = 0; b < n; b++) s[b] = -1;
          var A = [],
            O = t(e),
            _ = O._index,
            C = O._ptr;
          for (b = 0; b < m; b++)
            for (h = o[b], A[h] = -1 === s[g + h] ? 1 : 0; - 1 !== h && -1 === s[g + h]; h = a[h]) s[g + h] = b;
          if (l) {
            for (b = 0; b < m; b++) s[o[b]] = b;
            for (f = 0; f < d; f++) {
              for (b = m, M = C[f], S = C[f + 1], N = M; N < S; N++) b = Math.min(b, s[_[N]]);
              s[x + f] = s[y + b], s[y + b] = f
            }
          }
          for (f = 0; f < m; f++) s[u + f] = f;
          for (b = 0; b < m; b++) {
            for (h = o[b], -1 !== a[h] && A[a[h]]--, v = l ? s[y + b] : h; - 1 !== v; v = l ? s[x + v] : -1)
              for (N = C[v]; N < C[v + 1]; N++) {
                f = _[N];
                var E = wt(f, h, s, g, m, 2 * m, u);
                1 <= E.jleaf && A[h]++, 2 === E.jleaf && A[E.q]--
              } - 1 !== a[h] && (s[u + h] = a[h])
          }
          for (h = 0; h < m; h++) - 1 !== a[h] && (A[a[h]] += A[h]);
          return A
        }
      }),
      Tp = Object(ea.a)("csSqr", ["add", "multiply", "transpose"], function (e) {
        function t(e, t) {
          var a = e._ptr,
            r = e._index,
            s = e._size,
            o = s[0],
            l = s[1];
          t.pinv = [], t.leftmost = [];
          var n = t.parent,
            m = t.pinv,
            c = t.leftmost,
            d = [],
            u = 0,
            g = o,
            y = o + l,
            x = o + 2 * l,
            f, h, b, v, N;
          for (h = 0; h < l; h++) d[g + h] = -1, d[y + h] = -1, d[x + h] = 0;
          for (f = 0; f < o; f++) c[f] = -1;
          for (h = l - 1; 0 <= h; h--)
            for (v = a[h], N = a[h + 1], b = v; b < N; b++) c[r[b]] = h;
          for (f = o - 1; 0 <= f; f--)(m[f] = -1, h = c[f], -1 !== h) && (0 == d[x + h]++ && (d[y + h] = f), d[u + f] = d[g + h], d[g + h] = f);
          for (t.lnz = 0, t.m2 = o, h = 0; h < l; h++)
            if (f = d[g + h], t.lnz++, 0 > f && (f = t.m2++), m[f] = h, !(0 >= --x[h])) {
              t.lnz += d[x + h];
              var M = n[h]; - 1 !== M && (0 === d[x + M] && (d[y + M] = d[y + h]), d[u + d[y + h]] = d[g + M], d[g + M] = d[u + f], d[x + M] += d[x + h])
            } for (f = 0; f < o; f++) 0 > m[f] && (m[f] = h++);
          return !0
        }
        var a = e.add,
          n = e.multiply,
          i = e.transpose,
          r = wp({
            add: a,
            multiply: n,
            transpose: i
          }),
          o = kp({
            transpose: i
          });
        return function (e, i, a) {
          var l = i._ptr,
            p = i._size,
            m = p[1],
            n = {},
            s;
          if (n.q = r(e, i), e && !n.q) return null;
          if (a) {
            var d = e ? St(i, null, n.q, 0) : i;
            n.parent = _t(d, 1);
            var c = Ot(n.parent, m);
            if (n.cp = o(d, n.parent, c, 1), d && n.parent && n.cp && t(d, n))
              for (n.unz = 0, s = 0; s < m; s++) n.unz += n.cp[s]
          } else n.unz = 4 * l[m] + m, n.lnz = n.unz;
          return n
        }
      }),
      Ip = Object(ea.a)("csSpsolve", ["divideScalar", "multiply", "subtract"], function (e) {
        var t = e.divideScalar,
          a = e.multiply,
          n = e.subtract;
        return function (e, r, s, o, l, m, c) {
          var d = e._values,
            u = e._index,
            g = e._ptr,
            y = e._size,
            x = y[1],
            f = r._values,
            h = r._index,
            b = r._ptr,
            v = Bt(e, r, s, o, m),
            N, M, S, A;
          for (N = v; N < x; N++) l[o[N]] = 0;
          for (M = b[s], S = b[s + 1], N = M; N < S; N++) l[h[N]] = f[N];
          for (var O = v; O < x; O++) {
            var _ = o[O],
              C = m ? m[_] : _;
            if (!(0 > C))
              for (M = g[C], S = g[C + 1], l[_] = t(l[_], d[c ? M : S - 1]), N = c ? M + 1 : M, A = c ? S : S - 1; N < A; N++) {
                var E = u[N];
                l[E] = n(l[E], a(d[N], l[_]))
              }
          }
          return v
        }
      }),
      qp = Object(ea.a)("csLu", ["abs", "divideScalar", "multiply", "subtract", "larger", "largerEq", "SparseMatrix"], function (e) {
        var t = e.abs,
          a = e.divideScalar,
          r = e.multiply,
          s = e.subtract,
          o = e.larger,
          l = e.largerEq,
          c = e.SparseMatrix,
          d = Ip({
            divideScalar: a,
            multiply: r,
            subtract: s
          });
        return function (e, m, s) {
          if (!e) return null;
          var u = e._size,
            g = u[1],
            n = 100,
            y = 100,
            f;
          m && (f = m.q, n = m.lnz || n, y = m.unz || y);
          var h = [],
            b = [],
            v = [],
            N = new c({
              values: h,
              index: b,
              ptr: v,
              size: [g, g]
            }),
            M = [],
            S = [],
            A = [],
            O = new c({
              values: M,
              index: S,
              ptr: A,
              size: [g, g]
            }),
            _ = [],
            C = [],
            x = [],
            E, w;
          for (E = 0; E < g; E++) C[E] = 0, _[E] = -1, v[E + 1] = 0;
          n = 0, y = 0;
          for (var T = 0; T < g; T++) {
            v[T] = n, A[T] = y;
            var I = f ? f[T] : T,
              B = d(N, e, I, x, C, _, 1),
              z = -1,
              j = -1;
            for (w = B; w < g; w++)
              if (E = x[w], 0 > _[E]) {
                var D = t(C[E]);
                o(D, j) && (j = D, z = E)
              } else S[y] = _[E], M[y++] = C[E];
            if (-1 === z || 0 >= j) return null;
            0 > _[I] && l(t(C[I]), r(j, s)) && (z = I);
            var P = C[z];
            for (S[y] = T, M[y++] = P, _[z] = T, b[n] = z, h[n++] = 1, w = B; w < g; w++) E = x[w], 0 > _[E] && (b[n] = E, h[n++] = a(C[E], P)), C[E] = 0
          }
          for (v[g] = n, A[g] = y, w = 0; w < n; w++) b[w] = _[b[w]];
          return h.splice(n, h.length - n), b.splice(n, b.length - n), M.splice(y, M.length - y), S.splice(y, S.length - y), {
            L: N,
            U: O,
            pinv: _
          }
        }
      }),
      Bp = "slu",
      zp = Object(ea.a)(Bp, ["typed", "abs", "add", "multiply", "transpose", "divideScalar", "subtract", "larger", "largerEq", "SparseMatrix"], function (e) {
        var t = e.typed,
          a = e.abs,
          n = e.add,
          i = e.multiply,
          r = e.transpose,
          s = e.divideScalar,
          o = e.subtract,
          l = e.larger,
          p = e.largerEq,
          m = e.SparseMatrix,
          c = Tp({
            add: n,
            multiply: i,
            transpose: r
          }),
          d = qp({
            abs: a,
            divideScalar: s,
            multiply: i,
            subtract: o,
            larger: l,
            largerEq: p,
            SparseMatrix: m
          });
        return t(Bp, {
          "SparseMatrix, number, number": function (e, t, a) {
            if (!Object(Kt.i)(t) || 0 > t || 3 < t) throw new Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]");
            if (0 > a || 1 < a) throw new Error("Partial pivoting threshold must be a number from 0 to 1");
            var n = c(t, e, !1),
              i = d(e, n, a);
            return {
              L: i.L,
              U: i.U,
              p: i.pinv,
              q: n.q,
              toString: function () {
                return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\np: " + this.p.toString() + (this.q ? "\nq: " + this.q.toString() : "") + "\n"
              }
            }
          }
        })
      }),
      jp = "lusolve",
      Dp = Object(ea.a)(jp, ["typed", "matrix", "lup", "slu", "usolve", "lsolve", "DenseMatrix"], function (e) {
        function t(e) {
          if (Object(Yt.v)(e)) return e;
          if (Object(Yt.b)(e)) return r(e);
          throw new TypeError("Invalid Matrix LU decomposition")
        }

        function n(e, a, n, i, r) {
          e = t(e), a = t(a), r = g(e, r, !1), n && (r._data = zt(n, r._data));
          var s = c(e, r),
            o = m(a, s);
          return i && (o._data = zt(i, o._data)), o
        }
        var i = e.typed,
          r = e.matrix,
          s = e.lup,
          o = e.slu,
          m = e.usolve,
          c = e.lsolve,
          d = e.DenseMatrix,
          g = De({
            DenseMatrix: d
          });
        return i(jp, {
          "Array, Array | Matrix": function (e, t) {
            e = r(e);
            var i = s(e),
              o = n(i.L, i.U, i.p, null, t);
            return o.valueOf()
          },
          "DenseMatrix, Array | Matrix": function (e, t) {
            var a = s(e);
            return n(a.L, a.U, a.p, null, t)
          },
          "SparseMatrix, Array | Matrix": function (e, t) {
            var a = s(e);
            return n(a.L, a.U, a.p, null, t)
          },
          "SparseMatrix, Array | Matrix, number, number": function (e, t, a, i) {
            var r = o(e, a, i);
            return n(r.L, r.U, r.p, r.q, t)
          },
          "Object, Array | Matrix": function (e, t) {
            return n(e.L, e.U, e.p, e.q, t)
          }
        })
      }),
      Pp = Object(ea.a)("Help", ["parse"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!e) throw new Error("Argument \"doc\" missing");
          this.doc = e
        }
        var a = e.parse;
        return t.prototype.type = "Help", t.prototype.isHelp = !0, t.prototype.toString = function () {
          var e = this.doc || {},
            t = "\n";
          if (e.name && (t += "Name: " + e.name + "\n\n"), e.category && (t += "Category: " + e.category + "\n\n"), e.description && (t += "Description:\n    " + e.description + "\n\n"), e.syntax && (t += "Syntax:\n    " + e.syntax.join("\n    ") + "\n\n"), e.examples) {
            t += "Examples:\n";
            for (var n = {}, r = 0, s; r < e.examples.length; r++) {
              s = e.examples[r], t += "    " + s + "\n";
              var o = void 0;
              try {
                o = a(s).compile().evaluate(n)
              } catch (t) {
                o = t
              }
              void 0 === o || Object(Yt.s)(o) || (t += "        " + Object(xa.d)(o, {
                precision: 14
              }) + "\n")
            }
            t += "\n"
          }
          return e.seealso && e.seealso.length && (t += "See also: " + e.seealso.join(", ") + "\n"), t
        }, t.prototype.toJSON = function () {
          var e = Object(fa.a)(this.doc);
          return e.mathjs = "Help", e
        }, t.fromJSON = function (e) {
          var a = {};
          for (var n in e) "mathjs" != n && (a[n] = e[n]);
          return new t(a)
        }, t.prototype.valueOf = t.prototype.toString, t
      }, {
        isClass: !0
      }),
      Rp = Object(ea.a)("Chain", ["?on", "math"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          this.value = Object(Yt.h)(e) ? e.value : e
        }

        function a(e, a) {
          "function" == typeof a && (t.prototype[e] = i(a))
        }

        function n(e, a) {
          Object(fa.h)(t.prototype, e, function () {
            var e = a();
            return "function" == typeof e ? i(e) : void 0
          })
        }

        function i(e) {
          return function () {
            for (var a = [this.value], n = 0; n < arguments.length; n++) a[n + 1] = arguments[n];
            return new t(e.apply(e, a))
          }
        }
        var r = e.on,
          s = e.math;
        t.prototype.type = "Chain", t.prototype.isChain = !0, t.prototype.done = function () {
          return this.value
        }, t.prototype.valueOf = function () {
          return this.value
        }, t.prototype.toString = function () {
          return Object(xa.d)(this.value)
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "Chain",
            value: this.value
          }
        }, t.fromJSON = function (e) {
          return new t(e.value)
        }, t.createProxy = function (e, t) {
          if ("string" == typeof e) a(e, t);
          else {
            var i = function (t) {
              e.hasOwnProperty(t) && void 0 === o[t] && n(t, function () {
                return e[t]
              })
            };
            for (var r in e) i(r)
          }
        };
        var o = {
          expression: !0,
          docs: !0,
          type: !0,
          classes: !0,
          json: !0,
          error: !0,
          isChain: !0
        };
        return t.createProxy(s), r && r("import", function (e, t, a) {
          a || n(e, t)
        }), t
      }, {
        isClass: !0
      }),
      Up = {
        name: "typeOf",
        category: "Utils",
        syntax: ["typeOf(x)"],
        description: "Get the type of a variable.",
        examples: ["typeOf(3.5)", "typeOf(2 - 4i)", "typeOf(45 deg)", "typeOf(\"hello world\")"],
        seealso: ["getMatrixDataType"]
      },
      Lp = {
        name: "evaluate",
        category: "Expression",
        syntax: ["evaluate(expression)", "evaluate([expr1, expr2, expr3, ...])"],
        description: "Evaluate an expression or an array with expressions.",
        examples: ["evaluate(\"2 + 3\")", "evaluate(\"sqrt(\" + 4 + \")\")"],
        seealso: []
      },
      Fp = {
        name: "pi",
        category: "Constants",
        syntax: ["pi"],
        description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",
        examples: ["pi", "sin(pi/2)"],
        seealso: ["tau"]
      },
      Hp = {
        name: "e",
        category: "Constants",
        syntax: ["e"],
        description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",
        examples: ["e", "e ^ 2", "exp(2)", "log(e)"],
        seealso: ["exp"]
      },
      Gp = {
        name: "variance",
        category: "Statistics",
        syntax: ["variance(a, b, c, ...)", "variance(A)", "variance(A, normalization)"],
        description: "Compute the variance of all values. Optional parameter normalization can be \"unbiased\" (default), \"uncorrected\", or \"biased\".",
        examples: ["variance(2, 4, 6)", "variance([2, 4, 6, 8])", "variance([2, 4, 6, 8], \"uncorrected\")", "variance([2, 4, 6, 8], \"biased\")", "variance([1, 2, 3; 4, 5, 6])"],
        seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"]
      },
      $p = {
        bignumber: {
          name: "bignumber",
          category: "Construction",
          syntax: ["bignumber(x)"],
          description: "Create a big number from a number or string.",
          examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", "bignumber(\"7.2\")", "bignumber(\"7.2e500\")", "bignumber([0.1, 0.2, 0.3])"],
          seealso: ["boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
        },
        boolean: {
          name: "boolean",
          category: "Construction",
          syntax: ["x", "boolean(x)"],
          description: "Convert a string or number into a boolean.",
          examples: ["boolean(0)", "boolean(1)", "boolean(3)", "boolean(\"true\")", "boolean(\"false\")", "boolean([1, 0, 1, 1])"],
          seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"]
        },
        complex: {
          name: "complex",
          category: "Construction",
          syntax: ["complex()", "complex(re, im)", "complex(string)"],
          description: "Create a complex number.",
          examples: ["complex()", "complex(2, 3)", "complex(\"7 - 2i\")"],
          seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"]
        },
        createUnit: {
          name: "createUnit",
          category: "Construction",
          syntax: ["createUnit(definitions)", "createUnit(name, definition)"],
          description: "Create a user-defined unit and register it with the Unit type.",
          examples: ["createUnit(\"foo\")", "createUnit(\"knot\", {definition: \"0.514444444 m/s\", aliases: [\"knots\", \"kt\", \"kts\"]})", "createUnit(\"mph\", \"1 mile/hour\")"],
          seealso: ["unit", "splitUnit"]
        },
        fraction: {
          name: "fraction",
          category: "Construction",
          syntax: ["fraction(num)", "fraction(num,den)"],
          description: "Create a fraction from a number or from a numerator and denominator.",
          examples: ["fraction(0.125)", "fraction(1, 3) + fraction(2, 5)"],
          seealso: ["bignumber", "boolean", "complex", "index", "matrix", "string", "unit"]
        },
        index: {
          name: "index",
          category: "Construction",
          syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]", "[start1:end1, start2:end2, ...]", "[start1:step1:end1, start2:step2:end2, ...]"],
          description: "Create an index to get or replace a subset of a matrix",
          examples: ["[]", "[1, 2, 3]", "A = [1, 2, 3; 4, 5, 6]", "A[1, :]", "A[1, 2] = 50", "A[0:2, 0:2] = ones(2, 2)"],
          seealso: ["bignumber", "boolean", "complex", "matrix,", "number", "range", "string", "unit"]
        },
        matrix: {
          name: "matrix",
          category: "Construction",
          syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", "matrix(\"dense\")", "matrix([...])"],
          description: "Create a matrix.",
          examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])", "matrix([3, 4; 5, 6], \"sparse\")", "matrix([3, 4; 5, 6], \"sparse\", \"number\")"],
          seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "sparse"]
        },
        number: {
          name: "number",
          category: "Construction",
          syntax: ["x", "number(x)", "number(unit, valuelessUnit)"],
          description: "Create a number or convert a string or boolean into a number.",
          examples: ["2", "2e3", "4.05", "number(2)", "number(\"7.2\")", "number(true)", "number([true, false, true, true])", "number(unit(\"52cm\"), \"m\")"],
          seealso: ["bignumber", "boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
        },
        sparse: {
          name: "sparse",
          category: "Construction",
          syntax: ["sparse()", "sparse([a1, b1, ...; a1, b2, ...])", "sparse([a1, b1, ...; a1, b2, ...], \"number\")"],
          description: "Create a sparse matrix.",
          examples: ["sparse()", "sparse([3, 4; 5, 6])", "sparse([3, 0; 5, 0], \"number\")"],
          seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "matrix"]
        },
        splitUnit: {
          name: "splitUnit",
          category: "Construction",
          syntax: ["splitUnit(unit: Unit, parts: Unit[])"],
          description: "Split a unit in an array of units whose sum is equal to the original unit.",
          examples: ["splitUnit(1 m, [\"feet\", \"inch\"])"],
          seealso: ["unit", "createUnit"]
        },
        string: {
          name: "string",
          category: "Construction",
          syntax: ["\"text\"", "string(x)"],
          description: "Create a string or convert a value to a string",
          examples: ["\"Hello World!\"", "string(4.2)", "string(3 + 2i)"],
          seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "unit"]
        },
        unit: {
          name: "unit",
          category: "Construction",
          syntax: ["value unit", "unit(value, unit)", "unit(string)"],
          description: "Create a unit.",
          examples: ["5.5 mm", "3 inch", "unit(7.1, \"kilogram\")", "unit(\"23 deg\")"],
          seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "string"]
        },
        e: Hp,
        E: Hp,
        false: {
          name: "false",
          category: "Constants",
          syntax: ["false"],
          description: "Boolean value false",
          examples: ["false"],
          seealso: ["true"]
        },
        i: {
          name: "i",
          category: "Constants",
          syntax: ["i"],
          description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.",
          examples: ["i", "i * i", "sqrt(-1)"],
          seealso: []
        },
        Infinity: {
          name: "Infinity",
          category: "Constants",
          syntax: ["Infinity"],
          description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.",
          examples: ["Infinity", "1 / 0"],
          seealso: []
        },
        LN2: {
          name: "LN2",
          category: "Constants",
          syntax: ["LN2"],
          description: "Returns the natural logarithm of 2, approximately equal to 0.693",
          examples: ["LN2", "log(2)"],
          seealso: []
        },
        LN10: {
          name: "LN10",
          category: "Constants",
          syntax: ["LN10"],
          description: "Returns the natural logarithm of 10, approximately equal to 2.302",
          examples: ["LN10", "log(10)"],
          seealso: []
        },
        LOG2E: {
          name: "LOG2E",
          category: "Constants",
          syntax: ["LOG2E"],
          description: "Returns the base-2 logarithm of E, approximately equal to 1.442",
          examples: ["LOG2E", "log(e, 2)"],
          seealso: []
        },
        LOG10E: {
          name: "LOG10E",
          category: "Constants",
          syntax: ["LOG10E"],
          description: "Returns the base-10 logarithm of E, approximately equal to 0.434",
          examples: ["LOG10E", "log(e, 10)"],
          seealso: []
        },
        NaN: {
          name: "NaN",
          category: "Constants",
          syntax: ["NaN"],
          description: "Not a number",
          examples: ["NaN", "0 / 0"],
          seealso: []
        },
        null: {
          name: "null",
          category: "Constants",
          syntax: ["null"],
          description: "Value null",
          examples: ["null"],
          seealso: ["true", "false"]
        },
        pi: Fp,
        PI: Fp,
        phi: {
          name: "phi",
          category: "Constants",
          syntax: ["phi"],
          description: "Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...",
          examples: ["phi"],
          seealso: []
        },
        SQRT1_2: {
          name: "SQRT1_2",
          category: "Constants",
          syntax: ["SQRT1_2"],
          description: "Returns the square root of 1/2, approximately equal to 0.707",
          examples: ["SQRT1_2", "sqrt(1/2)"],
          seealso: []
        },
        SQRT2: {
          name: "SQRT2",
          category: "Constants",
          syntax: ["SQRT2"],
          description: "Returns the square root of 2, approximately equal to 1.414",
          examples: ["SQRT2", "sqrt(2)"],
          seealso: []
        },
        tau: {
          name: "tau",
          category: "Constants",
          syntax: ["tau"],
          description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.",
          examples: ["tau", "2 * pi"],
          seealso: ["pi"]
        },
        true: {
          name: "true",
          category: "Constants",
          syntax: ["true"],
          description: "Boolean value true",
          examples: ["true"],
          seealso: ["false"]
        },
        version: {
          name: "version",
          category: "Constants",
          syntax: ["version"],
          description: "A string with the version number of math.js",
          examples: ["version"],
          seealso: []
        },
        speedOfLight: {
          description: "Speed of light in vacuum",
          examples: ["speedOfLight"]
        },
        gravitationConstant: {
          description: "Newtonian constant of gravitation",
          examples: ["gravitationConstant"]
        },
        planckConstant: {
          description: "Planck constant",
          examples: ["planckConstant"]
        },
        reducedPlanckConstant: {
          description: "Reduced Planck constant",
          examples: ["reducedPlanckConstant"]
        },
        magneticConstant: {
          description: "Magnetic constant (vacuum permeability)",
          examples: ["magneticConstant"]
        },
        electricConstant: {
          description: "Electric constant (vacuum permeability)",
          examples: ["electricConstant"]
        },
        vacuumImpedance: {
          description: "Characteristic impedance of vacuum",
          examples: ["vacuumImpedance"]
        },
        coulomb: {
          description: "Coulomb's constant",
          examples: ["coulomb"]
        },
        elementaryCharge: {
          description: "Elementary charge",
          examples: ["elementaryCharge"]
        },
        bohrMagneton: {
          description: "Borh magneton",
          examples: ["bohrMagneton"]
        },
        conductanceQuantum: {
          description: "Conductance quantum",
          examples: ["conductanceQuantum"]
        },
        inverseConductanceQuantum: {
          description: "Inverse conductance quantum",
          examples: ["inverseConductanceQuantum"]
        },
        magneticFluxQuantum: {
          description: "Magnetic flux quantum",
          examples: ["magneticFluxQuantum"]
        },
        nuclearMagneton: {
          description: "Nuclear magneton",
          examples: ["nuclearMagneton"]
        },
        klitzing: {
          description: "Von Klitzing constant",
          examples: ["klitzing"]
        },
        bohrRadius: {
          description: "Borh radius",
          examples: ["bohrRadius"]
        },
        classicalElectronRadius: {
          description: "Classical electron radius",
          examples: ["classicalElectronRadius"]
        },
        electronMass: {
          description: "Electron mass",
          examples: ["electronMass"]
        },
        fermiCoupling: {
          description: "Fermi coupling constant",
          examples: ["fermiCoupling"]
        },
        fineStructure: {
          description: "Fine-structure constant",
          examples: ["fineStructure"]
        },
        hartreeEnergy: {
          description: "Hartree energy",
          examples: ["hartreeEnergy"]
        },
        protonMass: {
          description: "Proton mass",
          examples: ["protonMass"]
        },
        deuteronMass: {
          description: "Deuteron Mass",
          examples: ["deuteronMass"]
        },
        neutronMass: {
          description: "Neutron mass",
          examples: ["neutronMass"]
        },
        quantumOfCirculation: {
          description: "Quantum of circulation",
          examples: ["quantumOfCirculation"]
        },
        rydberg: {
          description: "Rydberg constant",
          examples: ["rydberg"]
        },
        thomsonCrossSection: {
          description: "Thomson cross section",
          examples: ["thomsonCrossSection"]
        },
        weakMixingAngle: {
          description: "Weak mixing angle",
          examples: ["weakMixingAngle"]
        },
        efimovFactor: {
          description: "Efimov factor",
          examples: ["efimovFactor"]
        },
        atomicMass: {
          description: "Atomic mass constant",
          examples: ["atomicMass"]
        },
        avogadro: {
          description: "Avogadro's number",
          examples: ["avogadro"]
        },
        boltzmann: {
          description: "Boltzmann constant",
          examples: ["boltzmann"]
        },
        faraday: {
          description: "Faraday constant",
          examples: ["faraday"]
        },
        firstRadiation: {
          description: "First radiation constant",
          examples: ["firstRadiation"]
        },
        loschmidt: {
          description: "Loschmidt constant at T=273.15 K and p=101.325 kPa",
          examples: ["loschmidt"]
        },
        gasConstant: {
          description: "Gas constant",
          examples: ["gasConstant"]
        },
        molarPlanckConstant: {
          description: "Molar Planck constant",
          examples: ["molarPlanckConstant"]
        },
        molarVolume: {
          description: "Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa",
          examples: ["molarVolume"]
        },
        sackurTetrode: {
          description: "Sackur-Tetrode constant at T=1 K and p=101.325 kPa",
          examples: ["sackurTetrode"]
        },
        secondRadiation: {
          description: "Second radiation constant",
          examples: ["secondRadiation"]
        },
        stefanBoltzmann: {
          description: "Stefan-Boltzmann constant",
          examples: ["stefanBoltzmann"]
        },
        wienDisplacement: {
          description: "Wien displacement law constant",
          examples: ["wienDisplacement"]
        },
        molarMass: {
          description: "Molar mass constant",
          examples: ["molarMass"]
        },
        molarMassC12: {
          description: "Molar mass constant of carbon-12",
          examples: ["molarMassC12"]
        },
        gravity: {
          description: "Standard acceleration of gravity (standard acceleration of free-fall on Earth)",
          examples: ["gravity"]
        },
        planckLength: {
          description: "Planck length",
          examples: ["planckLength"]
        },
        planckMass: {
          description: "Planck mass",
          examples: ["planckMass"]
        },
        planckTime: {
          description: "Planck time",
          examples: ["planckTime"]
        },
        planckCharge: {
          description: "Planck charge",
          examples: ["planckCharge"]
        },
        planckTemperature: {
          description: "Planck temperature",
          examples: ["planckTemperature"]
        },
        derivative: {
          name: "derivative",
          category: "Algebra",
          syntax: ["derivative(expr, variable)", "derivative(expr, variable, {simplify: boolean})"],
          description: "Takes the derivative of an expression expressed in parser Nodes. The derivative will be taken over the supplied variable in the second parameter. If there are multiple variables in the expression, it will return a partial derivative.",
          examples: ["derivative(\"2x^3\", \"x\")", "derivative(\"2x^3\", \"x\", {simplify: false})", "derivative(\"2x^2 + 3x + 4\", \"x\")", "derivative(\"sin(2x)\", \"x\")", "f = parse(\"x^2 + x\")", "x = parse(\"x\")", "df = derivative(f, x)", "df.evaluate({x: 3})"],
          seealso: ["simplify", "parse", "evaluate"]
        },
        lsolve: {
          name: "lsolve",
          category: "Algebra",
          syntax: ["x=lsolve(L, b)"],
          description: "Solves the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
          examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
          seealso: ["lup", "lusolve", "usolve", "matrix", "sparse"]
        },
        lup: {
          name: "lup",
          category: "Algebra",
          syntax: ["lup(m)"],
          description: "Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in three matrices (L, U, P) where P * A = L * U",
          examples: ["lup([[2, 1], [1, 4]])", "lup(matrix([[2, 1], [1, 4]]))", "lup(sparse([[2, 1], [1, 4]]))"],
          seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "slu", "qr"]
        },
        lusolve: {
          name: "lusolve",
          category: "Algebra",
          syntax: ["x=lusolve(A, b)", "x=lusolve(lu, b)"],
          description: "Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.",
          examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lusolve(a, b)"],
          seealso: ["lup", "slu", "lsolve", "usolve", "matrix", "sparse"]
        },
        simplify: {
          name: "simplify",
          category: "Algebra",
          syntax: ["simplify(expr)", "simplify(expr, rules)"],
          description: "Simplify an expression tree.",
          examples: ["simplify(\"3 + 2 / 4\")", "simplify(\"2x + x\")", "f = parse(\"x * (x + 2 + x)\")", "simplified = simplify(f)", "simplified.evaluate({x: 2})"],
          seealso: ["derivative", "parse", "evaluate"]
        },
        rationalize: {
          name: "rationalize",
          category: "Algebra",
          syntax: ["rationalize(expr)", "rationalize(expr, scope)", "rationalize(expr, scope, detailed)"],
          description: "Transform a rationalizable expression in a rational fraction. If rational fraction is one variable polynomial then converts the numerator and denominator in canonical form, with decreasing exponents, returning the coefficients of numerator.",
          examples: ["rationalize(\"2x/y - y/(x+1)\")", "rationalize(\"2x/y - y/(x+1)\", true)"],
          seealso: ["simplify"]
        },
        slu: {
          name: "slu",
          category: "Algebra",
          syntax: ["slu(A, order, threshold)"],
          description: "Calculate the Matrix LU decomposition with full pivoting. Matrix A is decomposed in two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U",
          examples: ["slu(sparse([4.5, 0, 3.2, 0; 3.1, 2.9, 0, 0.9; 0, 1.7, 3, 0; 3.5, 0.4, 0, 1]), 1, 0.001)"],
          seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "lup", "qr"]
        },
        usolve: {
          name: "usolve",
          category: "Algebra",
          syntax: ["x=usolve(U, b)"],
          description: "Solves the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
          examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"],
          seealso: ["lup", "lusolve", "lsolve", "matrix", "sparse"]
        },
        qr: {
          name: "qr",
          category: "Algebra",
          syntax: ["qr(A)"],
          description: "Calculates the Matrix QR decomposition. Matrix `A` is decomposed in two matrices (`Q`, `R`) where `Q` is an orthogonal matrix and `R` is an upper triangular matrix.",
          examples: ["qr([[1, -1,  4], [1,  4, -2], [1,  4,  2], [1,  -1, 0]])"],
          seealso: ["lup", "slu", "matrix"]
        },
        abs: {
          name: "abs",
          category: "Arithmetic",
          syntax: ["abs(x)"],
          description: "Compute the absolute value.",
          examples: ["abs(3.5)", "abs(-4.2)"],
          seealso: ["sign"]
        },
        add: {
          name: "add",
          category: "Operators",
          syntax: ["x + y", "add(x, y)"],
          description: "Add two values.",
          examples: ["a = 2.1 + 3.6", "a - 3.6", "3 + 2i", "3 cm + 2 inch", "\"2.3\" + \"4\""],
          seealso: ["subtract"]
        },
        cbrt: {
          name: "cbrt",
          category: "Arithmetic",
          syntax: ["cbrt(x)", "cbrt(x, allRoots)"],
          description: "Compute the cubic root value. If x = y * y * y, then y is the cubic root of x. When `x` is a number or complex number, an optional second argument `allRoots` can be provided to return all three cubic roots. If not provided, the principal root is returned",
          examples: ["cbrt(64)", "cube(4)", "cbrt(-8)", "cbrt(2 + 3i)", "cbrt(8i)", "cbrt(8i, true)", "cbrt(27 m^3)"],
          seealso: ["square", "sqrt", "cube", "multiply"]
        },
        ceil: {
          name: "ceil",
          category: "Arithmetic",
          syntax: ["ceil(x)"],
          description: "Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.",
          examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"],
          seealso: ["floor", "fix", "round"]
        },
        cube: {
          name: "cube",
          category: "Arithmetic",
          syntax: ["cube(x)"],
          description: "Compute the cube of a value. The cube of x is x * x * x.",
          examples: ["cube(2)", "2^3", "2 * 2 * 2"],
          seealso: ["multiply", "square", "pow"]
        },
        divide: {
          name: "divide",
          category: "Operators",
          syntax: ["x / y", "divide(x, y)"],
          description: "Divide two values.",
          examples: ["a = 2 / 3", "a * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2", "18 km / 4.5"],
          seealso: ["multiply"]
        },
        dotDivide: {
          name: "dotDivide",
          category: "Operators",
          syntax: ["x ./ y", "dotDivide(x, y)"],
          description: "Divide two values element wise.",
          examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"],
          seealso: ["multiply", "dotMultiply", "divide"]
        },
        dotMultiply: {
          name: "dotMultiply",
          category: "Operators",
          syntax: ["x .* y", "dotMultiply(x, y)"],
          description: "Multiply two values element wise.",
          examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"],
          seealso: ["multiply", "divide", "dotDivide"]
        },
        dotPow: {
          name: "dotPow",
          category: "Operators",
          syntax: ["x .^ y", "dotPow(x, y)"],
          description: "Calculates the power of x to y element wise.",
          examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"],
          seealso: ["pow"]
        },
        exp: {
          name: "exp",
          category: "Arithmetic",
          syntax: ["exp(x)"],
          description: "Calculate the exponent of a value.",
          examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4", "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"],
          seealso: ["expm", "expm1", "pow", "log"]
        },
        expm: {
          name: "expm",
          category: "Arithmetic",
          syntax: ["exp(x)"],
          description: "Compute the matrix exponential, expm(A) = e^A. The matrix must be square. Not to be confused with exp(a), which performs element-wise exponentiation.",
          examples: ["expm([[0,2],[0,0]])"],
          seealso: ["exp"]
        },
        expm1: {
          name: "expm1",
          category: "Arithmetic",
          syntax: ["expm1(x)"],
          description: "Calculate the value of subtracting 1 from the exponential value.",
          examples: ["expm1(2)", "pow(e, 2) - 1", "log(expm1(2) + 1)"],
          seealso: ["exp", "pow", "log"]
        },
        fix: {
          name: "fix",
          category: "Arithmetic",
          syntax: ["fix(x)"],
          description: "Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.",
          examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"],
          seealso: ["ceil", "floor", "round"]
        },
        floor: {
          name: "floor",
          category: "Arithmetic",
          syntax: ["floor(x)"],
          description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.",
          examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"],
          seealso: ["ceil", "fix", "round"]
        },
        gcd: {
          name: "gcd",
          category: "Arithmetic",
          syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"],
          description: "Compute the greatest common divisor.",
          examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"],
          seealso: ["lcm", "xgcd"]
        },
        hypot: {
          name: "hypot",
          category: "Arithmetic",
          syntax: ["hypot(a, b, c, ...)", "hypot([a, b, c, ...])"],
          description: "Calculate the hypotenusa of a list with values. ",
          examples: ["hypot(3, 4)", "sqrt(3^2 + 4^2)", "hypot(-2)", "hypot([3, 4, 5])"],
          seealso: ["abs", "norm"]
        },
        lcm: {
          name: "lcm",
          category: "Arithmetic",
          syntax: ["lcm(x, y)"],
          description: "Compute the least common multiple.",
          examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"],
          seealso: ["gcd"]
        },
        log: {
          name: "log",
          category: "Arithmetic",
          syntax: ["log(x)", "log(x, base)"],
          description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).",
          examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 4", "log(10000, 10)", "log(10000) / log(10)", "b = log(1024, 2)", "2 ^ b"],
          seealso: ["exp", "log1p", "log2", "log10"]
        },
        log2: {
          name: "log2",
          category: "Arithmetic",
          syntax: ["log2(x)"],
          description: "Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.",
          examples: ["log2(0.03125)", "log2(16)", "log2(16) / log2(2)", "pow(2, 4)"],
          seealso: ["exp", "log1p", "log", "log10"]
        },
        log1p: {
          name: "log1p",
          category: "Arithmetic",
          syntax: ["log1p(x)", "log1p(x, base)"],
          description: "Calculate the logarithm of a `value+1`",
          examples: ["log1p(2.5)", "exp(log1p(1.4))", "pow(10, 4)", "log1p(9999, 10)", "log1p(9999) / log(10)"],
          seealso: ["exp", "log", "log2", "log10"]
        },
        log10: {
          name: "log10",
          category: "Arithmetic",
          syntax: ["log10(x)"],
          description: "Compute the 10-base logarithm of a value.",
          examples: ["log10(0.00001)", "log10(10000)", "10 ^ 4", "log(10000) / log(10)", "log(10000, 10)"],
          seealso: ["exp", "log"]
        },
        mod: {
          name: "mod",
          category: "Operators",
          syntax: ["x % y", "x mod y", "mod(x, y)"],
          description: "Calculates the modulus, the remainder of an integer division.",
          examples: ["7 % 3", "11 % 2", "10 mod 4", "isOdd(x) = x % 2", "isOdd(2)", "isOdd(3)"],
          seealso: ["divide"]
        },
        multiply: {
          name: "multiply",
          category: "Operators",
          syntax: ["x * y", "multiply(x, y)"],
          description: "multiply two values.",
          examples: ["a = 2.1 * 3.4", "a / 3.4", "2 * 3 + 4", "2 * (3 + 4)", "3 * 2.1 km"],
          seealso: ["divide"]
        },
        norm: {
          name: "norm",
          category: "Arithmetic",
          syntax: ["norm(x)", "norm(x, p)"],
          description: "Calculate the norm of a number, vector or matrix.",
          examples: ["abs(-3.5)", "norm(-3.5)", "norm(3 - 4i)", "norm([1, 2, -3], Infinity)", "norm([1, 2, -3], -Infinity)", "norm([3, 4], 2)", "norm([[1, 2], [3, 4]], 1)", "norm([[1, 2], [3, 4]], \"inf\")", "norm([[1, 2], [3, 4]], \"fro\")"]
        },
        nthRoot: {
          name: "nthRoot",
          category: "Arithmetic",
          syntax: ["nthRoot(a)", "nthRoot(a, root)"],
          description: "Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation \"x^root = A\".",
          examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"],
          seealso: ["nthRoots", "pow", "sqrt"]
        },
        nthRoots: {
          name: "nthRoots",
          category: "Arithmetic",
          syntax: ["nthRoots(A)", "nthRoots(A, root)"],
          description: "Calculate the nth roots of a value. An nth root of a positive real number A, is a positive real solution of the equation \"x^root = A\". This function returns an array of complex values.",
          examples: ["nthRoots(1)", "nthRoots(1, 3)"],
          seealso: ["sqrt", "pow", "nthRoot"]
        },
        pow: {
          name: "pow",
          category: "Operators",
          syntax: ["x ^ y", "pow(x, y)"],
          description: "Calculates the power of x to y, x^y.",
          examples: ["2^3", "2*2*2", "1 + e ^ (pi * i)"],
          seealso: ["multiply", "nthRoot", "nthRoots", "sqrt"]
        },
        round: {
          name: "round",
          category: "Arithmetic",
          syntax: ["round(x)", "round(x, n)"],
          description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.",
          examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)", "round(pi, 3)", "round(123.45678, 2)"],
          seealso: ["ceil", "floor", "fix"]
        },
        sign: {
          name: "sign",
          category: "Arithmetic",
          syntax: ["sign(x)"],
          description: "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.",
          examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"],
          seealso: ["abs"]
        },
        sqrt: {
          name: "sqrt",
          category: "Arithmetic",
          syntax: ["sqrt(x)"],
          description: "Compute the square root value. If x = y * y, then y is the square root of x.",
          examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"],
          seealso: ["square", "sqrtm", "multiply", "nthRoot", "nthRoots", "pow"]
        },
        sqrtm: {
          name: "sqrtm",
          category: "Arithmetic",
          syntax: ["sqrtm(x)"],
          description: "Calculate the principal square root of a square matrix. The principal square root matrix `X` of another matrix `A` is such that `X * X = A`.",
          examples: ["sqrtm([[1, 2], [3, 4]])"],
          seealso: ["sqrt", "abs", "square", "multiply"]
        },
        square: {
          name: "square",
          category: "Arithmetic",
          syntax: ["square(x)"],
          description: "Compute the square of a value. The square of x is x * x.",
          examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"],
          seealso: ["multiply", "pow", "sqrt", "cube"]
        },
        subtract: {
          name: "subtract",
          category: "Operators",
          syntax: ["x - y", "subtract(x, y)"],
          description: "subtract two values.",
          examples: ["a = 5.3 - 2", "a + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"],
          seealso: ["add"]
        },
        unaryMinus: {
          name: "unaryMinus",
          category: "Operators",
          syntax: ["-x", "unaryMinus(x)"],
          description: "Inverse the sign of a value. Converts booleans and strings to numbers.",
          examples: ["-4.5", "-(-5.6)", "-\"22\""],
          seealso: ["add", "subtract", "unaryPlus"]
        },
        unaryPlus: {
          name: "unaryPlus",
          category: "Operators",
          syntax: ["+x", "unaryPlus(x)"],
          description: "Converts booleans and strings to numbers.",
          examples: ["+true", "+\"2\""],
          seealso: ["add", "subtract", "unaryMinus"]
        },
        xgcd: {
          name: "xgcd",
          category: "Arithmetic",
          syntax: ["xgcd(a, b)"],
          description: "Calculate the extended greatest common divisor for two values. The result is an array [d, x, y] with 3 entries, where d is the greatest common divisor, and d = x * a + y * b.",
          examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"],
          seealso: ["gcd", "lcm"]
        },
        bitAnd: {
          name: "bitAnd",
          category: "Bitwise",
          syntax: ["x & y", "bitAnd(x, y)"],
          description: "Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0",
          examples: ["5 & 3", "bitAnd(53, 131)", "[1, 12, 31] & 42"],
          seealso: ["bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
        },
        bitNot: {
          name: "bitNot",
          category: "Bitwise",
          syntax: ["~x", "bitNot(x)"],
          description: "Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.",
          examples: ["~1", "~2", "bitNot([2, -3, 4])"],
          seealso: ["bitAnd", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
        },
        bitOr: {
          name: "bitOr",
          category: "Bitwise",
          syntax: ["x | y", "bitOr(x, y)"],
          description: "Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.",
          examples: ["5 | 3", "bitOr([1, 2, 3], 4)"],
          seealso: ["bitAnd", "bitNot", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
        },
        bitXor: {
          name: "bitXor",
          category: "Bitwise",
          syntax: ["bitXor(x, y)"],
          description: "Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.",
          examples: ["bitOr(1, 2)", "bitXor([2, 3, 4], 4)"],
          seealso: ["bitAnd", "bitNot", "bitOr", "leftShift", "rightArithShift", "rightLogShift"]
        },
        leftShift: {
          name: "leftShift",
          category: "Bitwise",
          syntax: ["x << y", "leftShift(x, y)"],
          description: "Bitwise left logical shift of a value x by y number of bits.",
          examples: ["4 << 1", "8 >> 1"],
          seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "rightArithShift", "rightLogShift"]
        },
        rightArithShift: {
          name: "rightArithShift",
          category: "Bitwise",
          syntax: ["x >> y", "rightArithShift(x, y)"],
          description: "Bitwise right arithmetic shift of a value x by y number of bits.",
          examples: ["8 >> 1", "4 << 1", "-12 >> 2"],
          seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightLogShift"]
        },
        rightLogShift: {
          name: "rightLogShift",
          category: "Bitwise",
          syntax: ["x >>> y", "rightLogShift(x, y)"],
          description: "Bitwise right logical shift of a value x by y number of bits.",
          examples: ["8 >>> 1", "4 << 1", "-12 >>> 2"],
          seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift"]
        },
        bellNumbers: {
          name: "bellNumbers",
          category: "Combinatorics",
          syntax: ["bellNumbers(n)"],
          description: "The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.",
          examples: ["bellNumbers(3)", "bellNumbers(8)"],
          seealso: ["stirlingS2"]
        },
        catalan: {
          name: "catalan",
          category: "Combinatorics",
          syntax: ["catalan(n)"],
          description: "The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0.",
          examples: ["catalan(3)", "catalan(8)"],
          seealso: ["bellNumbers"]
        },
        composition: {
          name: "composition",
          category: "Combinatorics",
          syntax: ["composition(n, k)"],
          description: "The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.",
          examples: ["composition(5, 3)"],
          seealso: ["combinations"]
        },
        stirlingS2: {
          name: "stirlingS2",
          category: "Combinatorics",
          syntax: ["stirlingS2(n, k)"],
          description: "he Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. `stirlingS2` only takes integer arguments. The following condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) = 1.",
          examples: ["stirlingS2(5, 3)"],
          seealso: ["bellNumbers"]
        },
        config: {
          name: "config",
          category: "Core",
          syntax: ["config()", "config(options)"],
          description: "Get configuration or change configuration.",
          examples: ["config()", "1/3 + 1/4", "config({number: \"Fraction\"})", "1/3 + 1/4"],
          seealso: []
        },
        import: {
          name: "import",
          category: "Core",
          syntax: ["import(functions)", "import(functions, options)"],
          description: "Import functions or constants from an object.",
          examples: ["import({myFn: f(x)=x^2, myConstant: 32 })", "myFn(2)", "myConstant"],
          seealso: []
        },
        typed: {
          name: "typed",
          category: "Core",
          syntax: ["typed(signatures)", "typed(name, signatures)"],
          description: "Create a typed function.",
          examples: ["double = typed({ \"number, number\": f(x)=x+x })", "double(2)", "double(\"hello\")"],
          seealso: []
        },
        arg: {
          name: "arg",
          category: "Complex",
          syntax: ["arg(x)"],
          description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).",
          examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 + 3i)"],
          seealso: ["re", "im", "conj", "abs"]
        },
        conj: {
          name: "conj",
          category: "Complex",
          syntax: ["conj(x)"],
          description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.",
          examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"],
          seealso: ["re", "im", "abs", "arg"]
        },
        re: {
          name: "re",
          category: "Complex",
          syntax: ["re(x)"],
          description: "Get the real part of a complex number.",
          examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"],
          seealso: ["im", "conj", "abs", "arg"]
        },
        im: {
          name: "im",
          category: "Complex",
          syntax: ["im(x)"],
          description: "Get the imaginary part of a complex number.",
          examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"],
          seealso: ["re", "conj", "abs", "arg"]
        },
        evaluate: Lp,
        eval: Lp,
        help: {
          name: "help",
          category: "Expression",
          syntax: ["help(object)", "help(string)"],
          description: "Display documentation on a function or data type.",
          examples: ["help(sqrt)", "help(\"complex\")"],
          seealso: []
        },
        distance: {
          name: "distance",
          category: "Geometry",
          syntax: ["distance([x1, y1], [x2, y2])", "distance([[x1, y1], [x2, y2])"],
          description: "Calculates the Euclidean distance between two points.",
          examples: ["distance([0,0], [4,4])", "distance([[0,0], [4,4]])"],
          seealso: []
        },
        intersect: {
          name: "intersect",
          category: "Geometry",
          syntax: ["intersect(expr1, expr2, expr3, expr4)", "intersect(expr1, expr2, expr3)"],
          description: "Computes the intersection point of lines and/or planes.",
          examples: ["intersect([0, 0], [10, 10], [10, 0], [0, 10])", "intersect([1, 0, 1],  [4, -2, 2], [1, 1, 1, 6])"],
          seealso: []
        },
        and: {
          name: "and",
          category: "Logical",
          syntax: ["x and y", "and(x, y)"],
          description: "Logical and. Test whether two values are both defined with a nonzero/nonempty value.",
          examples: ["true and false", "true and true", "2 and 4"],
          seealso: ["not", "or", "xor"]
        },
        not: {
          name: "not",
          category: "Logical",
          syntax: ["not x", "not(x)"],
          description: "Logical not. Flips the boolean value of given argument.",
          examples: ["not true", "not false", "not 2", "not 0"],
          seealso: ["and", "or", "xor"]
        },
        or: {
          name: "or",
          category: "Logical",
          syntax: ["x or y", "or(x, y)"],
          description: "Logical or. Test if at least one value is defined with a nonzero/nonempty value.",
          examples: ["true or false", "false or false", "0 or 4"],
          seealso: ["not", "and", "xor"]
        },
        xor: {
          name: "xor",
          category: "Logical",
          syntax: ["x xor y", "xor(x, y)"],
          description: "Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.",
          examples: ["true xor false", "false xor false", "true xor true", "0 xor 4"],
          seealso: ["not", "and", "or"]
        },
        concat: {
          name: "concat",
          category: "Matrix",
          syntax: ["concat(A, B, C, ...)", "concat(A, B, C, ..., dim)"],
          description: "Concatenate matrices. By default, the matrices are concatenated by the last dimension. The dimension on which to concatenate can be provided as last argument.",
          examples: ["A = [1, 2; 5, 6]", "B = [3, 4; 7, 8]", "concat(A, B)", "concat(A, B, 1)", "concat(A, B, 2)"],
          seealso: ["det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        },
        cross: {
          name: "cross",
          category: "Matrix",
          syntax: ["cross(A, B)"],
          description: "Calculate the cross product for two vectors in three dimensional space.",
          examples: ["cross([1, 1, 0],  [0, 1, 1])", "cross([3, -3, 1], [4, 9, 2])", "cross([2, 3, 4],  [5, 6, 7])"],
          seealso: ["multiply", "dot"]
        },
        column: {
          name: "column",
          category: "Matrix",
          syntax: ["column(x, index)"],
          description: "Return a column from a matrix or array.",
          examples: ["A = [[1, 2], [3, 4]]", "column(A, 1)", "column(A, 2)"],
          seealso: ["row"]
        },
        ctranspose: {
          name: "ctranspose",
          category: "Matrix",
          syntax: ["x'", "ctranspose(x)"],
          description: "Complex Conjugate and Transpose a matrix",
          examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "ctranspose(a)"],
          seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"]
        },
        det: {
          name: "det",
          category: "Matrix",
          syntax: ["det(x)"],
          description: "Calculate the determinant of a matrix",
          examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"],
          seealso: ["concat", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        },
        diag: {
          name: "diag",
          category: "Matrix",
          syntax: ["diag(x)", "diag(x, k)"],
          description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned. When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.",
          examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]", "diag(a)"],
          seealso: ["concat", "det", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        },
        dot: {
          name: "dot",
          category: "Matrix",
          syntax: ["dot(A, B)", "A * B"],
          description: "Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn",
          examples: ["dot([2, 4, 1], [2, 2, 3])", "[2, 4, 1] * [2, 2, 3]"],
          seealso: ["multiply", "cross"]
        },
        getMatrixDataType: {
          name: "getMatrixDataType",
          category: "Matrix",
          syntax: ["getMatrixDataType(x)"],
          description: "Find the data type of all elements in a matrix or array, for example \"number\" if all items are a number and \"Complex\" if all values are complex numbers. If a matrix contains more than one data type, it will return \"mixed\".",
          examples: ["getMatrixDataType([1, 2, 3])", "getMatrixDataType([[5 cm], [2 inch]])", "getMatrixDataType([1, \"text\"])", "getMatrixDataType([1, bignumber(4)])"],
          seealso: ["matrix", "sparse", "typeOf"]
        },
        identity: {
          name: "identity",
          category: "Matrix",
          syntax: ["identity(n)", "identity(m, n)", "identity([m, n])"],
          description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.",
          examples: ["identity(3)", "identity(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "identity(size(a))"],
          seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        },
        filter: {
          name: "filter",
          category: "Matrix",
          syntax: ["filter(x, test)"],
          description: "Filter items in a matrix.",
          examples: ["isPositive(x) = x > 0", "filter([6, -2, -1, 4, 3], isPositive)", "filter([6, -2, 0, 1, 0], x != 0)"],
          seealso: ["sort", "map", "forEach"]
        },
        flatten: {
          name: "flatten",
          category: "Matrix",
          syntax: ["flatten(x)"],
          description: "Flatten a multi dimensional matrix into a single dimensional matrix.",
          examples: ["a = [1, 2, 3; 4, 5, 6]", "size(a)", "b = flatten(a)", "size(b)"],
          seealso: ["concat", "resize", "size", "squeeze"]
        },
        forEach: {
          name: "forEach",
          category: "Matrix",
          syntax: ["forEach(x, callback)"],
          description: "Iterates over all elements of a matrix/array, and executes the given callback function.",
          examples: ["forEach([1, 2, 3], function(val) { console.log(val) })"],
          seealso: ["map", "sort", "filter"]
        },
        inv: {
          name: "inv",
          category: "Matrix",
          syntax: ["inv(x)"],
          description: "Calculate the inverse of a matrix",
          examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"],
          seealso: ["concat", "det", "diag", "identity", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        },
        kron: {
          name: "kron",
          category: "Matrix",
          syntax: ["kron(x, y)"],
          description: "Calculates the kronecker product of 2 matrices or vectors.",
          examples: ["kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])", "kron([1,1], [2,3,4])"],
          seealso: ["multiply", "dot", "cross"]
        },
        map: {
          name: "map",
          category: "Matrix",
          syntax: ["map(x, callback)"],
          description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.",
          examples: ["map([1, 2, 3], square)"],
          seealso: ["filter", "forEach"]
        },
        ones: {
          name: "ones",
          category: "Matrix",
          syntax: ["ones(m)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m])", "ones([m, n])", "ones([m, n, p, ...])"],
          description: "Create a matrix containing ones.",
          examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5", "a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"],
          seealso: ["concat", "det", "diag", "identity", "inv", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        },
        partitionSelect: {
          name: "partitionSelect",
          category: "Matrix",
          syntax: ["partitionSelect(x, k)", "partitionSelect(x, k, compare)"],
          description: "Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.",
          examples: ["partitionSelect([5, 10, 1], 2)", "partitionSelect([\"C\", \"B\", \"A\", \"D\"], 1)"],
          seealso: ["sort"]
        },
        range: {
          name: "range",
          category: "Type",
          syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"],
          description: "Create a range. Lower bound of the range is included, upper bound is excluded.",
          examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", "range(\"4:10\")", "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"],
          seealso: ["concat", "det", "diag", "identity", "inv", "ones", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        },
        resize: {
          name: "resize",
          category: "Matrix",
          syntax: ["resize(x, size)", "resize(x, size, defaultValue)"],
          description: "Resize a matrix.",
          examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5])", "resize([1,2,3], [5], -1)", "resize(2, [2, 3])", "resize(\"hello\", [8], \"!\")"],
          seealso: ["size", "subset", "squeeze", "reshape"]
        },
        reshape: {
          name: "reshape",
          category: "Matrix",
          syntax: ["reshape(x, sizes)"],
          description: "Reshape a multi dimensional array to fit the specified dimensions.",
          examples: ["reshape([1, 2, 3, 4, 5, 6], [2, 3])", "reshape([[1, 2], [3, 4]], [1, 4])", "reshape([[1, 2], [3, 4]], [4])"],
          seealso: ["size", "squeeze", "resize"]
        },
        row: {
          name: "row",
          category: "Matrix",
          syntax: ["row(x, index)"],
          description: "Return a row from a matrix or array.",
          examples: ["A = [[1, 2], [3, 4]]", "row(A, 1)", "row(A, 2)"],
          seealso: ["column"]
        },
        size: {
          name: "size",
          category: "Matrix",
          syntax: ["size(x)"],
          description: "Calculate the size of a matrix.",
          examples: ["size(2.3)", "size(\"hello world\")", "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"],
          seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "squeeze", "subset", "trace", "transpose", "zeros"]
        },
        sort: {
          name: "sort",
          category: "Matrix",
          syntax: ["sort(x)", "sort(x, compare)"],
          description: "Sort the items in a matrix. Compare can be a string \"asc\", \"desc\", \"natural\", or a custom sort function.",
          examples: ["sort([5, 10, 1])", "sort([\"C\", \"B\", \"A\", \"D\"])", "sortByLength(a, b) = size(a)[1] - size(b)[1]", "sort([\"Langdon\", \"Tom\", \"Sara\"], sortByLength)", "sort([\"10\", \"1\", \"2\"], \"natural\")"],
          seealso: ["map", "filter", "forEach"]
        },
        squeeze: {
          name: "squeeze",
          category: "Matrix",
          syntax: ["squeeze(x)"],
          description: "Remove inner and outer singleton dimensions from a matrix.",
          examples: ["a = zeros(3,2,1)", "size(squeeze(a))", "b = zeros(1,1,3)", "size(squeeze(b))"],
          seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "subset", "trace", "transpose", "zeros"]
        },
        subset: {
          name: "subset",
          category: "Matrix",
          syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])", "subset(value, [index], replacement)"],
          description: "Get or set a subset of a matrix or string. Indexes are one-based. Both the ranges lower-bound and upper-bound are included.",
          examples: ["d = [1, 2; 3, 4]", "e = []", "e[1, 1:2] = [5, 6]", "e[2, :] = [7, 8]", "f = d * e", "f[2, 1]", "f[:, 1]"],
          seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "trace", "transpose", "zeros"]
        },
        trace: {
          name: "trace",
          category: "Matrix",
          syntax: ["trace(A)"],
          description: "Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.",
          examples: ["A = [1, 2, 3; -1, 2, 3; 2, 0, 3]", "trace(A)"],
          seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
        },
        transpose: {
          name: "transpose",
          category: "Matrix",
          syntax: ["x'", "transpose(x)"],
          description: "Transpose a matrix",
          examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"],
          seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"]
        },
        zeros: {
          name: "zeros",
          category: "Matrix",
          syntax: ["zeros(m)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m])", "zeros([m, n])", "zeros([m, n, p, ...])"],
          description: "Create a matrix containing zeros.",
          examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "zeros(size(a))"],
          seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose"]
        },
        combinations: {
          name: "combinations",
          category: "Probability",
          syntax: ["combinations(n, k)"],
          description: "Compute the number of combinations of n items taken k at a time",
          examples: ["combinations(7, 5)"],
          seealso: ["permutations", "factorial"]
        },
        factorial: {
          name: "factorial",
          category: "Probability",
          syntax: ["n!", "factorial(n)"],
          description: "Compute the factorial of a value",
          examples: ["5!", "5 * 4 * 3 * 2 * 1", "3!"],
          seealso: ["combinations", "permutations", "gamma"]
        },
        gamma: {
          name: "gamma",
          category: "Probability",
          syntax: ["gamma(n)"],
          description: "Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.",
          examples: ["gamma(4)", "3!", "gamma(1/2)", "sqrt(pi)"],
          seealso: ["factorial"]
        },
        kldivergence: {
          name: "kldivergence",
          category: "Probability",
          syntax: ["kldivergence(x, y)"],
          description: "Calculate the Kullback-Leibler (KL) divergence  between two distributions.",
          examples: ["kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])"],
          seealso: []
        },
        multinomial: {
          name: "multinomial",
          category: "Probability",
          syntax: ["multinomial(A)"],
          description: "Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from `n` possibilities. multinomial takes one array of integers as an argument. The following condition must be enforced: every ai > 0.",
          examples: ["multinomial([1, 2, 1])"],
          seealso: ["combinations", "factorial"]
        },
        permutations: {
          name: "permutations",
          category: "Probability",
          syntax: ["permutations(n)", "permutations(n, k)"],
          description: "Compute the number of permutations of n items taken k at a time",
          examples: ["permutations(5)", "permutations(5, 3)"],
          seealso: ["combinations", "factorial"]
        },
        pickRandom: {
          name: "pickRandom",
          category: "Probability",
          syntax: ["pickRandom(array)", "pickRandom(array, number)", "pickRandom(array, weights)", "pickRandom(array, number, weights)", "pickRandom(array, weights, number)"],
          description: "Pick a random entry from a given array.",
          examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])", "pickRandom([1, 3, 1, 6], 2)", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], 2, [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1], 2)"],
          seealso: ["random", "randomInt"]
        },
        random: {
          name: "random",
          category: "Probability",
          syntax: ["random()", "random(max)", "random(min, max)", "random(size)", "random(size, max)", "random(size, min, max)"],
          description: "Return a random number.",
          examples: ["random()", "random(10, 20)", "random([2, 3])"],
          seealso: ["pickRandom", "randomInt"]
        },
        randomInt: {
          name: "randomInt",
          category: "Probability",
          syntax: ["randomInt(max)", "randomInt(min, max)", "randomInt(size)", "randomInt(size, max)", "randomInt(size, min, max)"],
          description: "Return a random integer number",
          examples: ["randomInt(10, 20)", "randomInt([2, 3], 10)"],
          seealso: ["pickRandom", "random"]
        },
        compare: {
          name: "compare",
          category: "Relational",
          syntax: ["compare(x, y)"],
          description: "Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
          examples: ["compare(2, 3)", "compare(3, 2)", "compare(2, 2)", "compare(5cm, 40mm)", "compare(2, [1, 2, 3])"],
          seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compareNatural", "compareText"]
        },
        compareNatural: {
          name: "compareNatural",
          category: "Relational",
          syntax: ["compareNatural(x, y)"],
          description: "Compare two values of any type in a deterministic, natural way. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
          examples: ["compareNatural(2, 3)", "compareNatural(3, 2)", "compareNatural(2, 2)", "compareNatural(5cm, 40mm)", "compareNatural(\"2\", \"10\")", "compareNatural(2 + 3i, 2 + 4i)", "compareNatural([1, 2, 4], [1, 2, 3])", "compareNatural([1, 5], [1, 2, 3])", "compareNatural([1, 2], [1, 2])", "compareNatural({a: 2}, {a: 4})"],
          seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare", "compareText"]
        },
        compareText: {
          name: "compareText",
          category: "Relational",
          syntax: ["compareText(x, y)"],
          description: "Compare two strings lexically. Comparison is case sensitive. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
          examples: ["compareText(\"B\", \"A\")", "compareText(\"A\", \"B\")", "compareText(\"A\", \"A\")", "compareText(\"2\", \"10\")", "compare(\"2\", \"10\")", "compare(2, 10)", "compareNatural(\"2\", \"10\")", "compareText(\"B\", [\"A\", \"B\", \"C\"])"],
          seealso: ["compare", "compareNatural"]
        },
        deepEqual: {
          name: "deepEqual",
          category: "Relational",
          syntax: ["deepEqual(x, y)"],
          description: "Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.",
          examples: ["deepEqual([1,3,4], [1,3,4])", "deepEqual([1,3,4], [1,3])"],
          seealso: ["equal", "unequal", "smaller", "larger", "smallerEq", "largerEq", "compare"]
        },
        equal: {
          name: "equal",
          category: "Relational",
          syntax: ["x == y", "equal(x, y)"],
          description: "Check equality of two values. Returns true if the values are equal, and false if not.",
          examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b", "50cm == 0.5m"],
          seealso: ["unequal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual", "equalText"]
        },
        equalText: {
          name: "equalText",
          category: "Relational",
          syntax: ["equalText(x, y)"],
          description: "Check equality of two strings. Comparison is case sensitive. Returns true if the values are equal, and false if not.",
          examples: ["equalText(\"Hello\", \"Hello\")", "equalText(\"a\", \"A\")", "equal(\"2e3\", \"2000\")", "equalText(\"2e3\", \"2000\")", "equalText(\"B\", [\"A\", \"B\", \"C\"])"],
          seealso: ["compare", "compareNatural", "compareText", "equal"]
        },
        larger: {
          name: "larger",
          category: "Relational",
          syntax: ["x > y", "larger(x, y)"],
          description: "Check if value x is larger than y. Returns true if x is larger than y, and false if not.",
          examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)", "5 cm > 2 inch"],
          seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare"]
        },
        largerEq: {
          name: "largerEq",
          category: "Relational",
          syntax: ["x >= y", "largerEq(x, y)"],
          description: "Check if value x is larger or equal to y. Returns true if x is larger or equal to y, and false if not.",
          examples: ["2 >= 1+1", "2 > 1+1", "a = 3.2", "b = 6-2.8", "(a >= b)"],
          seealso: ["equal", "unequal", "smallerEq", "smaller", "compare"]
        },
        smaller: {
          name: "smaller",
          category: "Relational",
          syntax: ["x < y", "smaller(x, y)"],
          description: "Check if value x is smaller than value y. Returns true if x is smaller than y, and false if not.",
          examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)", "5 cm < 2 inch"],
          seealso: ["equal", "unequal", "larger", "smallerEq", "largerEq", "compare"]
        },
        smallerEq: {
          name: "smallerEq",
          category: "Relational",
          syntax: ["x <= y", "smallerEq(x, y)"],
          description: "Check if value x is smaller or equal to value y. Returns true if x is smaller than y, and false if not.",
          examples: ["2 <= 1+1", "2 < 1+1", "a = 3.2", "b = 6-2.8", "(a <= b)"],
          seealso: ["equal", "unequal", "larger", "smaller", "largerEq", "compare"]
        },
        unequal: {
          name: "unequal",
          category: "Relational",
          syntax: ["x != y", "unequal(x, y)"],
          description: "Check unequality of two values. Returns true if the values are unequal, and false if they are equal.",
          examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b", "50cm != 0.5m", "5 cm != 2 inch"],
          seealso: ["equal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual"]
        },
        setCartesian: {
          name: "setCartesian",
          category: "Set",
          syntax: ["setCartesian(set1, set2)"],
          description: "Create the cartesian product of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
          examples: ["setCartesian([1, 2], [3, 4])"],
          seealso: ["setUnion", "setIntersect", "setDifference", "setPowerset"]
        },
        setDifference: {
          name: "setDifference",
          category: "Set",
          syntax: ["setDifference(set1, set2)"],
          description: "Create the difference of two (multi)sets: every element of set1, that is not the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
          examples: ["setDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
          seealso: ["setUnion", "setIntersect", "setSymDifference"]
        },
        setDistinct: {
          name: "setDistinct",
          category: "Set",
          syntax: ["setDistinct(set)"],
          description: "Collect the distinct elements of a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
          examples: ["setDistinct([1, 1, 1, 2, 2, 3])"],
          seealso: ["setMultiplicity"]
        },
        setIntersect: {
          name: "setIntersect",
          category: "Set",
          syntax: ["setIntersect(set1, set2)"],
          description: "Create the intersection of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
          examples: ["setIntersect([1, 2, 3, 4], [3, 4, 5, 6])", "setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
          seealso: ["setUnion", "setDifference"]
        },
        setIsSubset: {
          name: "setIsSubset",
          category: "Set",
          syntax: ["setIsSubset(set1, set2)"],
          description: "Check whether a (multi)set is a subset of another (multi)set: every element of set1 is the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
          examples: ["setIsSubset([1, 2], [3, 4, 5, 6])", "setIsSubset([3, 4], [3, 4, 5, 6])"],
          seealso: ["setUnion", "setIntersect", "setDifference"]
        },
        setMultiplicity: {
          name: "setMultiplicity",
          category: "Set",
          syntax: ["setMultiplicity(element, set)"],
          description: "Count the multiplicity of an element in a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
          examples: ["setMultiplicity(1, [1, 2, 2, 4])", "setMultiplicity(2, [1, 2, 2, 4])"],
          seealso: ["setDistinct", "setSize"]
        },
        setPowerset: {
          name: "setPowerset",
          category: "Set",
          syntax: ["setPowerset(set)"],
          description: "Create the powerset of a (multi)set: the powerset contains very possible subsets of a (multi)set. A multi-dimension array will be converted to a single-dimension array before the operation.",
          examples: ["setPowerset([1, 2, 3])"],
          seealso: ["setCartesian"]
        },
        setSize: {
          name: "setSize",
          category: "Set",
          syntax: ["setSize(set)", "setSize(set, unique)"],
          description: "Count the number of elements of a (multi)set. When the second parameter \"unique\" is true, count only the unique values. A multi-dimension array will be converted to a single-dimension array before the operation.",
          examples: ["setSize([1, 2, 2, 4])", "setSize([1, 2, 2, 4], true)"],
          seealso: ["setUnion", "setIntersect", "setDifference"]
        },
        setSymDifference: {
          name: "setSymDifference",
          category: "Set",
          syntax: ["setSymDifference(set1, set2)"],
          description: "Create the symmetric difference of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
          examples: ["setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
          seealso: ["setUnion", "setIntersect", "setDifference"]
        },
        setUnion: {
          name: "setUnion",
          category: "Set",
          syntax: ["setUnion(set1, set2)"],
          description: "Create the union of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
          examples: ["setUnion([1, 2, 3, 4], [3, 4, 5, 6])", "setUnion([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
          seealso: ["setIntersect", "setDifference"]
        },
        erf: {
          name: "erf",
          category: "Special",
          syntax: ["erf(x)"],
          description: "Compute the erf function of a value using a rational Chebyshev approximations for different intervals of x",
          examples: ["erf(0.2)", "erf(-0.5)", "erf(4)"],
          seealso: []
        },
        mad: {
          name: "mad",
          category: "Statistics",
          syntax: ["mad(a, b, c, ...)", "mad(A)"],
          description: "Compute the median absolute deviation of a matrix or a list with values. The median absolute deviation is defined as the median of the absolute deviations from the median.",
          examples: ["mad(10, 20, 30)", "mad([1, 2, 3])"],
          seealso: ["mean", "median", "std", "abs"]
        },
        max: {
          name: "max",
          category: "Statistics",
          syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dim)"],
          description: "Compute the maximum value of a list of values.",
          examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3])", "max([2, 5; 4, 3], 1)", "max([2, 5; 4, 3], 2)", "max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"],
          seealso: ["mean", "median", "min", "prod", "std", "sum", "variance"]
        },
        mean: {
          name: "mean",
          category: "Statistics",
          syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dim)"],
          description: "Compute the arithmetic mean of a list of values.",
          examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3])", "mean([2, 5; 4, 3], 1)", "mean([2, 5; 4, 3], 2)", "mean([1.0, 2.7, 3.2, 4.0])"],
          seealso: ["max", "median", "min", "prod", "std", "sum", "variance"]
        },
        median: {
          name: "median",
          category: "Statistics",
          syntax: ["median(a, b, c, ...)", "median(A)"],
          description: "Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.",
          examples: ["median(5, 2, 7)", "median([3, -1, 5, 7])"],
          seealso: ["max", "mean", "min", "prod", "std", "sum", "variance", "quantileSeq"]
        },
        min: {
          name: "min",
          category: "Statistics",
          syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dim)"],
          description: "Compute the minimum value of a list of values.",
          examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3])", "min([2, 5; 4, 3], 1)", "min([2, 5; 4, 3], 2)", "min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"],
          seealso: ["max", "mean", "median", "prod", "std", "sum", "variance"]
        },
        mode: {
          name: "mode",
          category: "Statistics",
          syntax: ["mode(a, b, c, ...)", "mode(A)", "mode(A, a, b, B, c, ...)"],
          description: "Computes the mode of all values as an array. In case mode being more than one, multiple values are returned in an array.",
          examples: ["mode(2, 1, 4, 3, 1)", "mode([1, 2.7, 3.2, 4, 2.7])", "mode(1, 4, 6, 1, 6)"],
          seealso: ["max", "mean", "min", "median", "prod", "std", "sum", "variance"]
        },
        prod: {
          name: "prod",
          category: "Statistics",
          syntax: ["prod(a, b, c, ...)", "prod(A)"],
          description: "Compute the product of all values.",
          examples: ["prod(2, 3, 4)", "prod([2, 3, 4])", "prod([2, 5; 4, 3])"],
          seealso: ["max", "mean", "min", "median", "min", "std", "sum", "variance"]
        },
        quantileSeq: {
          name: "quantileSeq",
          category: "Statistics",
          syntax: ["quantileSeq(A, prob[, sorted])", "quantileSeq(A, [prob1, prob2, ...][, sorted])", "quantileSeq(A, N[, sorted])"],
          description: "Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned. Supported types of sequence values are: Number, BigNumber, Unit Supported types of probablity are: Number, BigNumber. \n\nIn case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.",
          examples: ["quantileSeq([3, -1, 5, 7], 0.5)", "quantileSeq([3, -1, 5, 7], [1/3, 2/3])", "quantileSeq([3, -1, 5, 7], 2)", "quantileSeq([-1, 3, 5, 7], 0.5, true)"],
          seealso: ["mean", "median", "min", "max", "prod", "std", "sum", "variance"]
        },
        std: {
          name: "std",
          category: "Statistics",
          syntax: ["std(a, b, c, ...)", "std(A)", "std(A, normalization)"],
          description: "Compute the standard deviation of all values, defined as std(A) = sqrt(variance(A)). Optional parameter normalization can be \"unbiased\" (default), \"uncorrected\", or \"biased\".",
          examples: ["std(2, 4, 6)", "std([2, 4, 6, 8])", "std([2, 4, 6, 8], \"uncorrected\")", "std([2, 4, 6, 8], \"biased\")", "std([1, 2, 3; 4, 5, 6])"],
          seealso: ["max", "mean", "min", "median", "min", "prod", "sum", "variance"]
        },
        sum: {
          name: "sum",
          category: "Statistics",
          syntax: ["sum(a, b, c, ...)", "sum(A)"],
          description: "Compute the sum of all values.",
          examples: ["sum(2, 3, 4, 1)", "sum([2, 3, 4, 1])", "sum([2, 5; 4, 3])"],
          seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "variance"]
        },
        variance: Gp,
        var: Gp,
        acos: {
          name: "acos",
          category: "Trigonometry",
          syntax: ["acos(x)"],
          description: "Compute the inverse cosine of a value in radians.",
          examples: ["acos(0.5)", "acos(cos(2.3))"],
          seealso: ["cos", "atan", "asin"]
        },
        acosh: {
          name: "acosh",
          category: "Trigonometry",
          syntax: ["acosh(x)"],
          description: "Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.",
          examples: ["acosh(1.5)"],
          seealso: ["cosh", "asinh", "atanh"]
        },
        acot: {
          name: "acot",
          category: "Trigonometry",
          syntax: ["acot(x)"],
          description: "Calculate the inverse cotangent of a value.",
          examples: ["acot(0.5)", "acot(cot(0.5))", "acot(2)"],
          seealso: ["cot", "atan"]
        },
        acoth: {
          name: "acoth",
          category: "Trigonometry",
          syntax: ["acoth(x)"],
          description: "Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.",
          examples: ["acoth(2)", "acoth(0.5)"],
          seealso: ["acsch", "asech"]
        },
        acsc: {
          name: "acsc",
          category: "Trigonometry",
          syntax: ["acsc(x)"],
          description: "Calculate the inverse cotangent of a value.",
          examples: ["acsc(2)", "acsc(csc(0.5))", "acsc(0.5)"],
          seealso: ["csc", "asin", "asec"]
        },
        acsch: {
          name: "acsch",
          category: "Trigonometry",
          syntax: ["acsch(x)"],
          description: "Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.",
          examples: ["acsch(0.5)"],
          seealso: ["asech", "acoth"]
        },
        asec: {
          name: "asec",
          category: "Trigonometry",
          syntax: ["asec(x)"],
          description: "Calculate the inverse secant of a value.",
          examples: ["asec(0.5)", "asec(sec(0.5))", "asec(2)"],
          seealso: ["acos", "acot", "acsc"]
        },
        asech: {
          name: "asech",
          category: "Trigonometry",
          syntax: ["asech(x)"],
          description: "Calculate the inverse secant of a value.",
          examples: ["asech(0.5)"],
          seealso: ["acsch", "acoth"]
        },
        asin: {
          name: "asin",
          category: "Trigonometry",
          syntax: ["asin(x)"],
          description: "Compute the inverse sine of a value in radians.",
          examples: ["asin(0.5)", "asin(sin(0.5))"],
          seealso: ["sin", "acos", "atan"]
        },
        asinh: {
          name: "asinh",
          category: "Trigonometry",
          syntax: ["asinh(x)"],
          description: "Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.",
          examples: ["asinh(0.5)"],
          seealso: ["acosh", "atanh"]
        },
        atan: {
          name: "atan",
          category: "Trigonometry",
          syntax: ["atan(x)"],
          description: "Compute the inverse tangent of a value in radians.",
          examples: ["atan(0.5)", "atan(tan(0.5))"],
          seealso: ["tan", "acos", "asin"]
        },
        atanh: {
          name: "atanh",
          category: "Trigonometry",
          syntax: ["atanh(x)"],
          description: "Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.",
          examples: ["atanh(0.5)"],
          seealso: ["acosh", "asinh"]
        },
        atan2: {
          name: "atan2",
          category: "Trigonometry",
          syntax: ["atan2(y, x)"],
          description: "Computes the principal value of the arc tangent of y/x in radians.",
          examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)", "y = sin(angle)", "atan2(y, x)"],
          seealso: ["sin", "cos", "tan"]
        },
        cos: {
          name: "cos",
          category: "Trigonometry",
          syntax: ["cos(x)"],
          description: "Compute the cosine of x in radians.",
          examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)", "sin(0.2)^2 + cos(0.2)^2"],
          seealso: ["acos", "sin", "tan"]
        },
        cosh: {
          name: "cosh",
          category: "Trigonometry",
          syntax: ["cosh(x)"],
          description: "Compute the hyperbolic cosine of x in radians.",
          examples: ["cosh(0.5)"],
          seealso: ["sinh", "tanh", "coth"]
        },
        cot: {
          name: "cot",
          category: "Trigonometry",
          syntax: ["cot(x)"],
          description: "Compute the cotangent of x in radians. Defined as 1/tan(x)",
          examples: ["cot(2)", "1 / tan(2)"],
          seealso: ["sec", "csc", "tan"]
        },
        coth: {
          name: "coth",
          category: "Trigonometry",
          syntax: ["coth(x)"],
          description: "Compute the hyperbolic cotangent of x in radians.",
          examples: ["coth(2)", "1 / tanh(2)"],
          seealso: ["sech", "csch", "tanh"]
        },
        csc: {
          name: "csc",
          category: "Trigonometry",
          syntax: ["csc(x)"],
          description: "Compute the cosecant of x in radians. Defined as 1/sin(x)",
          examples: ["csc(2)", "1 / sin(2)"],
          seealso: ["sec", "cot", "sin"]
        },
        csch: {
          name: "csch",
          category: "Trigonometry",
          syntax: ["csch(x)"],
          description: "Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)",
          examples: ["csch(2)", "1 / sinh(2)"],
          seealso: ["sech", "coth", "sinh"]
        },
        sec: {
          name: "sec",
          category: "Trigonometry",
          syntax: ["sec(x)"],
          description: "Compute the secant of x in radians. Defined as 1/cos(x)",
          examples: ["sec(2)", "1 / cos(2)"],
          seealso: ["cot", "csc", "cos"]
        },
        sech: {
          name: "sech",
          category: "Trigonometry",
          syntax: ["sech(x)"],
          description: "Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)",
          examples: ["sech(2)", "1 / cosh(2)"],
          seealso: ["coth", "csch", "cosh"]
        },
        sin: {
          name: "sin",
          category: "Trigonometry",
          syntax: ["sin(x)"],
          description: "Compute the sine of x in radians.",
          examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)", "sin(0.2)^2 + cos(0.2)^2"],
          seealso: ["asin", "cos", "tan"]
        },
        sinh: {
          name: "sinh",
          category: "Trigonometry",
          syntax: ["sinh(x)"],
          description: "Compute the hyperbolic sine of x in radians.",
          examples: ["sinh(0.5)"],
          seealso: ["cosh", "tanh"]
        },
        tan: {
          name: "tan",
          category: "Trigonometry",
          syntax: ["tan(x)"],
          description: "Compute the tangent of x in radians.",
          examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"],
          seealso: ["atan", "sin", "cos"]
        },
        tanh: {
          name: "tanh",
          category: "Trigonometry",
          syntax: ["tanh(x)"],
          description: "Compute the hyperbolic tangent of x in radians.",
          examples: ["tanh(0.5)", "sinh(0.5) / cosh(0.5)"],
          seealso: ["sinh", "cosh"]
        },
        to: {
          name: "to",
          category: "Units",
          syntax: ["x to unit", "to(x, unit)"],
          description: "Change the unit of a value.",
          examples: ["5 inch to cm", "3.2kg to g", "16 bytes in bits"],
          seealso: []
        },
        clone: {
          name: "clone",
          category: "Utils",
          syntax: ["clone(x)"],
          description: "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices",
          examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", "clone(\"hello world\")"],
          seealso: []
        },
        format: {
          name: "format",
          category: "Utils",
          syntax: ["format(value)", "format(value, precision)"],
          description: "Format a value of any type as string.",
          examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"],
          seealso: ["print"]
        },
        isNaN: {
          name: "isNaN",
          category: "Utils",
          syntax: ["isNaN(x)"],
          description: "Test whether a value is NaN (not a number)",
          examples: ["isNaN(2)", "isNaN(0 / 0)", "isNaN(NaN)", "isNaN(Infinity)"],
          seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
        },
        isInteger: {
          name: "isInteger",
          category: "Utils",
          syntax: ["isInteger(x)"],
          description: "Test whether a value is an integer number.",
          examples: ["isInteger(2)", "isInteger(3.5)", "isInteger([3, 0.5, -2])"],
          seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
        },
        isNegative: {
          name: "isNegative",
          category: "Utils",
          syntax: ["isNegative(x)"],
          description: "Test whether a value is negative: smaller than zero.",
          examples: ["isNegative(2)", "isNegative(0)", "isNegative(-4)", "isNegative([3, 0.5, -2])"],
          seealso: ["isInteger", "isNumeric", "isPositive", "isZero"]
        },
        isNumeric: {
          name: "isNumeric",
          category: "Utils",
          syntax: ["isNumeric(x)"],
          description: "Test whether a value is a numeric value. Returns true when the input is a number, BigNumber, Fraction, or boolean.",
          examples: ["isNumeric(2)", "isNumeric(\"2\")", "hasNumericValue(\"2\")", "isNumeric(0)", "isNumeric(bignumber(500))", "isNumeric(fraction(0.125))", "isNumeric(2 + 3i)", "isNumeric([2.3, \"foo\", false])"],
          seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "hasNumericValue"]
        },
        hasNumericValue: {
          name: "hasNumericValue",
          category: "Utils",
          syntax: ["hasNumericValue(x)"],
          description: "Test whether a value is an numeric value. In case of a string, true is returned if the string contains a numeric value.",
          examples: ["hasNumericValue(2)", "hasNumericValue(\"2\")", "isNumeric(\"2\")", "hasNumericValue(0)", "hasNumericValue(bignumber(500))", "hasNumericValue(fraction(0.125))", "hasNumericValue(2 + 3i)", "hasNumericValue([2.3, \"foo\", false])"],
          seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "isNumeric"]
        },
        isPositive: {
          name: "isPositive",
          category: "Utils",
          syntax: ["isPositive(x)"],
          description: "Test whether a value is positive: larger than zero.",
          examples: ["isPositive(2)", "isPositive(0)", "isPositive(-4)", "isPositive([3, 0.5, -2])"],
          seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
        },
        isPrime: {
          name: "isPrime",
          category: "Utils",
          syntax: ["isPrime(x)"],
          description: "Test whether a value is prime: has no divisors other than itself and one.",
          examples: ["isPrime(3)", "isPrime(-2)", "isPrime([2, 17, 100])"],
          seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
        },
        isZero: {
          name: "isZero",
          category: "Utils",
          syntax: ["isZero(x)"],
          description: "Test whether a value is zero.",
          examples: ["isZero(2)", "isZero(0)", "isZero(-4)", "isZero([3, 0, -2, 0])"],
          seealso: ["isInteger", "isNumeric", "isNegative", "isPositive"]
        },
        typeOf: Up,
        typeof: Up,
        numeric: {
          name: "numeric",
          category: "Utils",
          syntax: ["numeric(x)"],
          description: "Convert a numeric input to a specific numeric type: number, BigNumber, or Fraction.",
          examples: ["numeric(\"4\")", "numeric(\"4\", \"number\")", "numeric(\"4\", \"BigNumber\")", "numeric(\"4\", \"Fraction)", "numeric(4, \"Fraction\")", "numeric(fraction(2, 5), \"number)"],
          seealso: ["number", "fraction", "bignumber", "string", "format"]
        }
      },
      Zp = "help",
      Vp = Object(ea.a)(Zp, ["typed", "mathWithTransform", "Help"], function (e) {
        var t = e.typed,
          a = e.mathWithTransform,
          n = e.Help;
        return t(Zp, {
          any: function (e) {
            var t = e,
              i;
            if ("string" != typeof e)
              for (i in a)
                if (a.hasOwnProperty(i) && e === a[i]) {
                  t = i;
                  break
                } var r = Se($p, t);
            if (!r) {
              var s = "function" == typeof t ? t.name : t;
              throw new Error("No documentation found on \"" + s + "\"")
            }
            return new n(r)
          }
        })
      }),
      Wp = "chain",
      Jp = Object(ea.a)(Wp, ["typed", "Chain"], function (e) {
        var t = e.typed,
          a = e.Chain;
        return t(Wp, {
          "": function () {
            return new a
          },
          any: function (e) {
            return new a(e)
          }
        })
      }),
      Yp = "det",
      Xp = Object(ea.a)(Yp, ["typed", "matrix", "subtract", "multiply", "unaryMinus", "lup"], function (e) {
        function t(e, t) {
          if (1 === t) return Object(fa.a)(e[0][0]);
          if (2 === t) return r(s(e[0][0], e[1][1]), s(e[1][0], e[0][1]));
          for (var a = l(e), n = a.U[0][0], p = 1; p < t; p++) n = s(n, a.U[p][p]);
          for (var m = 0, c = 0, d = [];;) {
            for (; d[c];) c++;
            if (c >= t) break;
            for (var u = c, g = 0; !d[a.p[u]];) d[a.p[u]] = !0, u = a.p[u], g++;
            0 == g % 2 && m++
          }
          return 0 == m % 2 ? n : o(n)
        }
        var a = e.typed,
          n = e.matrix,
          r = e.subtract,
          s = e.multiply,
          o = e.unaryMinus,
          l = e.lup;
        return a(Yp, {
          any: function (e) {
            return Object(fa.a)(e)
          },
          "Array | Matrix": function (e) {
            var a;
            switch (Object(Yt.v)(e) ? a = e.size() : Array.isArray(e) ? (e = n(e), a = e.size()) : a = [], a.length) {
              case 0:
                return Object(fa.a)(e);
              case 1:
                if (1 === a[0]) return Object(fa.a)(e.valueOf()[0]);
                throw new RangeError("Matrix must be square (size: " + Object(xa.d)(a) + ")");
              case 2:
                var i = a[0],
                  r = a[1];
                if (i === r) return t(e.clone().valueOf(), i, r);
                throw new RangeError("Matrix must be square (size: " + Object(xa.d)(a) + ")");
              default:
                throw new RangeError("Matrix must be two dimensional (size: " + Object(xa.d)(a) + ")");
            }
          }
        })
      }),
      Qp = "inv",
      Kp = Object(ea.a)(Qp, ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"], function (e) {
        function t(e, t, a) {
          var n, u, g, y, x;
          if (1 === t) {
            if (y = e[0][0], 0 === y) throw Error("Cannot calculate inverse, determinant is zero");
            return [
              [i(1, y)]
            ]
          }
          if (2 === t) {
            var h = p(e);
            if (0 === h) throw Error("Cannot calculate inverse, determinant is zero");
            return [
              [i(e[1][1], h), i(l(e[0][1]), h)],
              [i(l(e[1][0]), h), i(e[0][0], h)]
            ]
          }
          var b = e.concat();
          for (n = 0; n < t; n++) b[n] = b[n].concat();
          for (var v = m(t).valueOf(), N = 0; N < a; N++) {
            var M = d(b[N][N]),
              S = N;
            for (n = N + 1; n < t;) d(b[n][N]) > M && (M = d(b[n][N]), S = n), n++;
            if (0 === M) throw Error("Cannot calculate inverse, determinant is zero");
            n = S, n !== N && (x = b[N], b[N] = b[n], b[n] = x, x = v[N], v[N] = v[n], v[n] = x);
            var A = b[N],
              O = v[N];
            for (n = 0; n < t; n++) {
              var _ = b[n],
                C = v[n];
              if (n === N) {
                for (g = A[N], u = N; u < a; u++) _[u] = i(_[u], g);
                for (u = 0; u < a; u++) C[u] = i(C[u], g)
              } else if (0 !== _[N]) {
                for (g = i(l(_[N]), A[N]), u = N; u < a; u++) _[u] = r(_[u], o(g, A[u]));
                for (u = 0; u < a; u++) C[u] = r(C[u], o(g, O[u]))
              }
            }
          }
          return v
        }
        var a = e.typed,
          n = e.matrix,
          i = e.divideScalar,
          r = e.addScalar,
          o = e.multiply,
          l = e.unaryMinus,
          p = e.det,
          m = e.identity,
          d = e.abs;
        return a(Qp, {
          "Array | Matrix": function (e) {
            var a = Object(Yt.v)(e) ? e.size() : Object(ya.a)(e);
            switch (a.length) {
              case 1:
                if (1 === a[0]) return Object(Yt.v)(e) ? n([i(1, e.valueOf()[0])]) : [i(1, e[0])];
                throw new RangeError("Matrix must be square (size: " + Object(xa.d)(a) + ")");
              case 2:
                var r = a[0],
                  s = a[1];
                if (r === s) return Object(Yt.v)(e) ? n(t(e.valueOf(), r, s), e.storage()) : t(e, r, s);
                throw new RangeError("Matrix must be square (size: " + Object(xa.d)(a) + ")");
              default:
                throw new RangeError("Matrix must be two dimensional (size: " + Object(xa.d)(a) + ")");
            }
          },
          any: function (e) {
            return i(1, e)
          }
        })
      }),
      em = "expm",
      tm = Object(ea.a)(em, ["typed", "abs", "add", "identity", "inv", "multiply"], function (e) {
        function t(e) {
          for (var t = e.size()[0], a = 0, n = 0, s; n < t; n++) {
            s = 0;
            for (var o = 0; o < t; o++) s += r(e.get([n, o]));
            a = Math.max(s, a)
          }
          return a
        }

        function a(e, t) {
          for (var a = 0; a < 30; a++)
            for (var i = 0, r; i <= a; i++)
              if (r = a - i, n(e, i, r) < t) return {
                q: i,
                j: r
              };
          throw new Error("Could not find acceptable parameters to compute the matrix exponential (try increasing maxSearchSize in expm.js)")
        }

        function n(e, t, a) {
          for (var n = 1, r = 2; r <= t; r++) n *= r;
          for (var s = n, o = t + 1; o <= 2 * t; o++) s *= o;
          var l = s * (2 * t + 1);
          return 8 * Math.pow(e / Math.pow(2, a), 2 * t) * n * n / (s * l)
        }
        var i = e.typed,
          r = e.abs,
          s = e.add,
          o = e.identity,
          l = e.inv,
          p = e.multiply;
        return i(em, {
          Matrix: function (e) {
            var r = e.size();
            if (2 !== r.length || r[0] !== r[1]) throw new RangeError("Matrix must be square (size: " + Object(xa.d)(r) + ")");
            for (var m = r[0], n = t(e), c = a(n, 1e-15), d = c.q, u = c.j, g = p(e, Math.pow(2, -u)), y = o(m), x = o(m), f = 1, h = g, b = -1, v = 1; v <= d; v++) 1 < v && (h = p(h, g), b = -b), f = f * (d - v + 1) / ((2 * d - v + 1) * v), y = s(y, p(f, h)), x = s(x, p(f * b, h));
            for (var M = p(l(x), y), S = 0; S < u; S++) M = p(M, M);
            return Object(Yt.H)(e) ? e.createSparseMatrix(M) : M
          }
        })
      }),
      am = "sqrtm",
      nm = Object(ea.a)(am, ["typed", "abs", "add", "multiply", "sqrt", "subtract", "inv", "size", "max", "identity"], function (e) {
        function t(e) {
          var t = 0,
            a = e,
            s = c(p(e)),
            d;
          do {
            var g = a;
            if (a = r(.5, i(g, l(s))), s = r(.5, i(s, l(g))), d = m(n(o(a, g))), d > u && 1000 < ++t) throw new Error("computing square root of matrix: iterative method could not converge")
          } while (d > u);
          return a
        }
        var a = e.typed,
          n = e.abs,
          i = e.add,
          r = e.multiply,
          s = e.sqrt,
          o = e.subtract,
          l = e.inv,
          p = e.size,
          m = e.max,
          c = e.identity,
          d = a(am, {
            "Array | Matrix": function (e) {
              var a = Object(Yt.v)(e) ? e.size() : Object(ya.a)(e);
              switch (a.length) {
                case 1:
                  if (1 === a[0]) return s(e);
                  throw new RangeError("Matrix must be square (size: " + Object(xa.d)(a) + ")");
                case 2:
                  var n = a[0],
                    i = a[1];
                  if (n === i) return t(e);
                  throw new RangeError("Matrix must be square (size: " + Object(xa.d)(a) + ")");
              }
            }
          }),
          u = 1e-6;
        return d
      }),
      im = Object(ea.a)("divide", ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.multiply,
          i = e.equalScalar,
          r = e.divideScalar,
          s = e.inv,
          o = zn({
            typed: t,
            equalScalar: i
          }),
          l = kn({
            typed: t
          });
        return t("divide", Object(fa.e)({
          "Array | Matrix, Array | Matrix": function (e, t) {
            return n(e, s(t))
          },
          "DenseMatrix, any": function (e, t) {
            return l(e, t, r, !1)
          },
          "SparseMatrix, any": function (e, t) {
            return o(e, t, r, !1)
          },
          "Array, any": function (e, t) {
            return l(a(e), t, r, !1).valueOf()
          },
          "any, Array | Matrix": function (e, t) {
            return n(e, s(t))
          }
        }, r.signatures))
      }),
      rm = "distance",
      sm = Object(ea.a)(rm, ["typed", "addScalar", "subtract", "divideScalar", "multiplyScalar", "unaryMinus", "sqrt", "abs"], function (e) {
        function t(e) {
          return "number" == typeof e || Object(Yt.e)(e)
        }

        function a(e) {
          return e.constructor !== Array && (e = r(e)), t(e[0]) && t(e[1])
        }

        function n(e) {
          return e.constructor !== Array && (e = r(e)), t(e[0]) && t(e[1]) && t(e[2])
        }

        function i(e) {
          return e.constructor !== Array && (e = r(e)), t(e[0]) && t(e[1]) && t(e[2]) && t(e[3]) && t(e[4]) && t(e[5])
        }

        function r(e) {
          for (var t = Object.keys(e), n = [], a = 0; a < t.length; a++) n.push(e[t[a]]);
          return n
        }

        function s(e) {
          if (2 === e[0].length && t(e[0][0]) && t(e[0][1])) {
            if (e.some(function (e) {
                return 2 !== e.length || !t(e[0]) || !t(e[1])
              })) return !1;
          } else if (!(3 === e[0].length && t(e[0][0]) && t(e[0][1]) && t(e[0][2]))) return !1;
          else if (e.some(function (e) {
              return 3 !== e.length || !t(e[0]) || !t(e[1]) || !t(e[2])
            })) return !1;
          return !0
        }

        function o(e, t, n, a, i) {
          var r = N(u(u(f(n, e), f(a, t)), i)),
            s = v(u(f(n, n), f(a, a)));
          return h(r, s)
        }

        function l(e, t, n, i, r, s, o, a, l) {
          var p = [g(f(g(r, t), l), f(g(s, n), a)), g(f(g(s, n), o), f(g(i, e), l)), g(f(g(i, e), a), f(g(r, t), o))];
          p = v(u(u(f(p[0], p[0]), f(p[1], p[1])), f(p[2], p[2])));
          var m = v(u(u(f(o, o), f(a, a)), f(l, l)));
          return h(p, m)
        }

        function p(e, t, a, n) {
          var i = g(n, t),
            r = g(a, e),
            s = u(f(i, i), f(r, r));
          return v(s)
        }

        function m(e, t, a, n, i, r) {
          var s = g(r, a),
            o = g(i, t),
            l = g(n, e),
            p = u(u(f(s, s), f(o, o)), f(l, l));
          return v(p)
        }

        function c(e) {
          for (var t = [], a = 0; a < e.length - 1; a++)
            for (var n = a + 1; n < e.length; n++) 2 === e[0].length ? t.push(p(e[a][0], e[a][1], e[n][0], e[n][1])) : 3 === e[0].length && t.push(m(e[a][0], e[a][1], e[a][2], e[n][0], e[n][1], e[n][2]));
          return t
        }
        var d = e.typed,
          u = e.addScalar,
          g = e.subtract,
          f = e.multiplyScalar,
          h = e.divideScalar,
          b = e.unaryMinus,
          v = e.sqrt,
          N = e.abs;
        return d(rm, {
          "Array, Array, Array": function (e, t, n) {
            if (2 === e.length && 2 === t.length && 2 === n.length) {
              if (!a(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
              if (!a(t)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
              if (!a(n)) throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
              var i = h(g(n[1], n[0]), g(t[1], t[0])),
                r = f(f(i, i), t[0]),
                s = b(f(i, t[0])),
                l = e[1];
              return o(e[0], e[1], r, s, l)
            }
            throw new TypeError("Invalid Arguments: Try again")
          },
          "Object, Object, Object": function (e, t, n) {
            if (2 === Object.keys(e).length && 2 === Object.keys(t).length && 2 === Object.keys(n).length) {
              if (!a(e)) throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
              if (!a(t)) throw new TypeError("Values of lineOnePtX and lineOnePtY should be numbers or BigNumbers");
              if (!a(n)) throw new TypeError("Values of lineTwoPtX and lineTwoPtY should be numbers or BigNumbers");
              if (e.hasOwnProperty("pointX") && e.hasOwnProperty("pointY") && t.hasOwnProperty("lineOnePtX") && t.hasOwnProperty("lineOnePtY") && n.hasOwnProperty("lineTwoPtX") && n.hasOwnProperty("lineTwoPtY")) {
                var i = h(g(n.lineTwoPtY, n.lineTwoPtX), g(t.lineOnePtY, t.lineOnePtX)),
                  r = f(f(i, i), t.lineOnePtX),
                  s = b(f(i, t.lineOnePtX)),
                  l = e.pointX;
                return o(e.pointX, e.pointY, r, s, l)
              }
              throw new TypeError("Key names do not match")
            } else throw new TypeError("Invalid Arguments: Try again")
          },
          "Array, Array": function (e, t) {
            if (2 === e.length && 3 === t.length) {
              if (!a(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
              if (!n(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
              return o(e[0], e[1], t[0], t[1], t[2])
            }
            if (3 === e.length && 6 === t.length) {
              if (!n(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
              if (!i(t)) throw new TypeError("Array with 6 numbers or BigNumbers expected for second argument");
              return l(e[0], e[1], e[2], t[0], t[1], t[2], t[3], t[4], t[5])
            }
            if (2 === e.length && 2 === t.length) {
              if (!a(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
              if (!a(t)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
              return p(e[0], e[1], t[0], t[1])
            }
            if (3 === e.length && 3 === t.length) {
              if (!n(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
              if (!n(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
              return m(e[0], e[1], e[2], t[0], t[1], t[2])
            }
            throw new TypeError("Invalid Arguments: Try again")
          },
          "Object, Object": function (e, t) {
            if (2 === Object.keys(e).length && 3 === Object.keys(t).length) {
              if (!a(e)) throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
              if (!n(t)) throw new TypeError("Values of xCoeffLine, yCoeffLine and constant should be numbers or BigNumbers");
              if (e.hasOwnProperty("pointX") && e.hasOwnProperty("pointY") && t.hasOwnProperty("xCoeffLine") && t.hasOwnProperty("yCoeffLine") && t.hasOwnProperty("constant")) return o(e.pointX, e.pointY, t.xCoeffLine, t.yCoeffLine, t.constant);
              throw new TypeError("Key names do not match")
            } else if (3 === Object.keys(e).length && 6 === Object.keys(t).length) {
              if (!n(e)) throw new TypeError("Values of pointX, pointY and pointZ should be numbers or BigNumbers");
              if (!i(t)) throw new TypeError("Values of x0, y0, z0, a, b and c should be numbers or BigNumbers");
              if (e.hasOwnProperty("pointX") && e.hasOwnProperty("pointY") && t.hasOwnProperty("x0") && t.hasOwnProperty("y0") && t.hasOwnProperty("z0") && t.hasOwnProperty("a") && t.hasOwnProperty("b") && t.hasOwnProperty("c")) return l(e.pointX, e.pointY, e.pointZ, t.x0, t.y0, t.z0, t.a, t.b, t.c);
              throw new TypeError("Key names do not match")
            } else if (2 === Object.keys(e).length && 2 === Object.keys(t).length) {
              if (!a(e)) throw new TypeError("Values of pointOneX and pointOneY should be numbers or BigNumbers");
              if (!a(t)) throw new TypeError("Values of pointTwoX and pointTwoY should be numbers or BigNumbers");
              if (e.hasOwnProperty("pointOneX") && e.hasOwnProperty("pointOneY") && t.hasOwnProperty("pointTwoX") && t.hasOwnProperty("pointTwoY")) return p(e.pointOneX, e.pointOneY, t.pointTwoX, t.pointTwoY);
              throw new TypeError("Key names do not match")
            } else if (3 === Object.keys(e).length && 3 === Object.keys(t).length) {
              if (!n(e)) throw new TypeError("Values of pointOneX, pointOneY and pointOneZ should be numbers or BigNumbers");
              if (!n(t)) throw new TypeError("Values of pointTwoX, pointTwoY and pointTwoZ should be numbers or BigNumbers");
              if (e.hasOwnProperty("pointOneX") && e.hasOwnProperty("pointOneY") && e.hasOwnProperty("pointOneZ") && t.hasOwnProperty("pointTwoX") && t.hasOwnProperty("pointTwoY") && t.hasOwnProperty("pointTwoZ")) return m(e.pointOneX, e.pointOneY, e.pointOneZ, t.pointTwoX, t.pointTwoY, t.pointTwoZ);
              throw new TypeError("Key names do not match")
            } else throw new TypeError("Invalid Arguments: Try again")
          },
          Array: function (e) {
            if (!s(e)) throw new TypeError("Incorrect array format entered for pairwise distance calculation");
            return c(e)
          }
        })
      }),
      om = Object(ea.a)("intersect", ["typed", "config", "abs", "add", "addScalar", "matrix", "multiply", "multiplyScalar", "divideScalar", "subtract", "smaller", "equalScalar"], function (e) {
        function t(e) {
          return "number" == typeof e || Object(Yt.e)(e)
        }

        function a(e) {
          return 2 === e.length && t(e[0]) && t(e[1])
        }

        function n(e) {
          return 3 === e.length && t(e[0]) && t(e[1]) && t(e[2])
        }

        function i(e) {
          return 4 === e.length && t(e[0]) && t(e[1]) && t(e[2]) && t(e[3])
        }

        function r(e, a, n, i) {
          var r = e,
            s = n,
            o = M(r, a),
            l = M(s, i),
            p = M(v(o[0], l[1]), v(l[0], o[1]));
          if (S(c(p), m.epsilon)) return null;
          var g = v(l[0], r[1]),
            x = v(l[1], r[0]),
            f = v(l[0], s[1]),
            h = v(l[1], s[0]),
            b = N(u(M(M(g, x), f), h), p);
          return d(y(o, b), r)
        }

        function s(t, a, n, r, s, e, o, p, m, i, c, d) {
          var l = v(M(t, a), M(n, r)),
            g = v(M(s, e), M(o, p)),
            y = v(M(m, i), M(c, d));
          return u(u(l, g), y)
        }

        function o(e, t, a, n, i, r, o, l, p, m, c, d) {
          var g = s(e, o, m, o, t, l, c, l, a, p, d, p),
            y = s(m, o, n, e, c, l, i, t, d, p, r, a),
            x = s(e, o, n, e, t, l, i, t, a, p, r, a),
            f = s(m, o, m, o, c, l, c, l, d, p, d, p),
            h = s(n, e, n, e, i, t, i, t, r, a, r, a),
            b = N(M(v(g, y), v(x, f)), M(v(h, f), v(y, y))),
            S = N(u(g, v(b, y)), f),
            O = u(e, v(b, M(n, e))),
            _ = u(t, v(b, M(i, t))),
            C = u(a, v(b, M(r, a))),
            E = u(o, v(S, M(m, o))),
            w = u(l, v(S, M(c, l))),
            k = u(p, v(S, M(d, p)));
          return A(O, E) && A(_, w) && A(C, k) ? [O, _, C] : null
        }

        function l(e, a, n, i, r, s, o, l, p, m) {
          var c = v(e, o),
            d = v(i, o),
            g = v(a, l),
            y = v(r, l),
            x = v(n, p),
            f = v(s, p),
            h = N(M(M(M(m, c), g), x), M(M(M(u(u(d, y), f), c), g), x)),
            t = u(e, v(h, M(i, e))),
            b = u(a, v(h, M(r, a))),
            S = u(n, v(h, M(s, n)));
          return [t, b, S]
        }
        var p = e.typed,
          m = e.config,
          c = e.abs,
          d = e.add,
          u = e.addScalar,
          g = e.matrix,
          y = e.multiply,
          v = e.multiplyScalar,
          N = e.divideScalar,
          M = e.subtract,
          S = e.smaller,
          A = e.equalScalar,
          O = p("intersect", {
            "Array, Array, Array": function (e, t, a) {
              if (!n(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
              if (!n(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
              if (!i(a)) throw new TypeError("Array with 4 numbers expected as third argument");
              return l(e[0], e[1], e[2], t[0], t[1], t[2], a[0], a[1], a[2], a[3])
            },
            "Array, Array, Array, Array": function (e, t, i, s) {
              if (2 === e.length) {
                if (!a(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
                if (!a(t)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
                if (!a(i)) throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
                if (!a(s)) throw new TypeError("Array with 2 numbers or BigNumbers expected for fourth argument");
                return r(e, t, i, s)
              }
              if (3 === e.length) {
                if (!n(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
                if (!n(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
                if (!n(i)) throw new TypeError("Array with 3 numbers or BigNumbers expected for third argument");
                if (!n(s)) throw new TypeError("Array with 3 numbers or BigNumbers expected for fourth argument");
                return o(e[0], e[1], e[2], t[0], t[1], t[2], i[0], i[1], i[2], s[0], s[1], s[2])
              }
              throw new TypeError("Arrays with two or thee dimensional points expected")
            },
            "Matrix, Matrix, Matrix": function (e, t, a) {
              return g(O(e.valueOf(), t.valueOf(), a.valueOf()))
            },
            "Matrix, Matrix, Matrix, Matrix": function (e, t, a, n) {
              return g(O(e.valueOf(), t.valueOf(), a.valueOf(), n.valueOf()))
            }
          });
        return O
      }),
      lm = "sum",
      pm = Object(ea.a)(lm, ["typed", "config", "add", "?bignumber", "?fraction"], function (e) {
        function t(e) {
          var t;
          if (p(e, function (e) {
              try {
                t = void 0 === t ? e : i(t, e)
              } catch (t) {
                throw qe(t, "sum", e)
              }
            }), void 0 === t) switch (n.number) {
            case "number":
              return 0;
            case "BigNumber":
              return r ? r(0) : be();
            case "Fraction":
              return s ? s(0) : ve();
            default:
              return 0;
          }
          return t
        }
        var a = e.typed,
          n = e.config,
          i = e.add,
          r = e.bignumber,
          s = e.fraction;
        return a(lm, {
          "Array | Matrix": t,
          "Array | Matrix, number | BigNumber": function (e, t) {
            try {
              var a = c(e, t, i);
              return a
            } catch (e) {
              throw qe(e, "sum")
            }
          },
          "...": function (e) {
            if (l(e)) throw new TypeError("Scalar values expected in function sum");
            return t(e)
          }
        })
      }),
      mm = "mean",
      cm = Object(ea.a)(mm, ["typed", "add", "divide"], function (e) {
        function t(e) {
          var t = 0,
            a = 0;
          if (p(e, function (e) {
              try {
                t = n(t, e), a++
              } catch (t) {
                throw qe(t, "mean", e)
              }
            }), 0 === a) throw new Error("Cannot calculate mean of an empty array");
          return i(t, a)
        }
        var a = e.typed,
          n = e.add,
          i = e.divide;
        return a(mm, {
          "Array | Matrix": t,
          "Array | Matrix, number | BigNumber": function (e, t) {
            try {
              var a = c(e, t, n),
                r = Array.isArray(e) ? Object(ya.a)(e) : e.size();
              return i(a, r[t])
            } catch (e) {
              throw qe(e, "mean")
            }
          },
          "...": function (e) {
            if (l(e)) throw new TypeError("Scalar values expected in function mean");
            return t(e)
          }
        })
      }),
      dm = "median",
      um = Object(ea.a)(dm, ["typed", "add", "divide", "compare", "partitionSelect"], function (e) {
        function t(e) {
          try {
            e = Object(ya.e)(e.valueOf());
            var t = e.length;
            if (0 === t) throw new Error("Cannot calculate median of an empty array");
            if (0 == t % 2) {
              for (var a = t / 2 - 1, n = s(e, a + 1), o = e[a], l = 0; l < a; ++l) 0 < r(e[l], o) && (o = e[l]);
              return m(o, n)
            }
            var c = s(e, (t - 1) / 2);
            return p(c)
          } catch (e) {
            throw qe(e, "median")
          }
        }
        var a = e.typed,
          n = e.add,
          i = e.divide,
          r = e.compare,
          s = e.partitionSelect,
          o = a(dm, {
            "Array | Matrix": t,
            "Array | Matrix, number | BigNumber": function () {
              throw new Error("median(A, dim) is not yet supported")
            },
            "...": function (e) {
              if (l(e)) throw new TypeError("Scalar values expected in function median");
              return t(e)
            }
          }),
          p = a({
            "number | BigNumber | Complex | Unit": function (e) {
              return e
            }
          }),
          m = a({
            "number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit": function (e, t) {
              return i(n(e, t), 2)
            }
          });
        return o
      }),
      gm = "mad",
      ym = Object(ea.a)(gm, ["typed", "abs", "map", "median", "subtract"], function (e) {
        function t(e) {
          if (e = Object(ya.e)(e.valueOf()), 0 === e.length) throw new Error("Cannot calculate median absolute deviation (mad) of an empty array");
          try {
            var t = r(e);
            return r(i(e, function (e) {
              return n(s(e, t))
            }))
          } catch (e) {
            if (e instanceof TypeError && -1 !== e.message.indexOf("median")) throw new TypeError(e.message.replace("median", "mad"));
            else throw qe(e, "mad")
          }
        }
        var a = e.typed,
          n = e.abs,
          i = e.map,
          r = e.median,
          s = e.subtract;
        return a(gm, {
          "Array | Matrix": t,
          "...": function (e) {
            return t(e)
          }
        })
      }),
      xm = "unbiased",
      fm = "variance",
      hm = Object(ea.a)(fm, ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"], function (e) {
        function t(e, t) {
          var a = 0,
            n = 0;
          if (0 === e.length) throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
          if (p(e, function (e) {
              try {
                a = i(a, e), n++
              } catch (t) {
                throw qe(t, "variance", e)
              }
            }), 0 === n) throw new Error("Cannot calculate variance of an empty array");
          var l = o(a, n);
          if (a = 0, p(e, function (e) {
              var t = r(e, l);
              a = i(a, s(t, t))
            }), m(a)) return a;
          switch (t) {
            case "uncorrected":
              return o(a, n);
            case "biased":
              return o(a, n + 1);
            case "unbiased":
              var c = Object(Yt.e)(a) ? a.mul(0) : 0;
              return 1 === n ? c : o(a, n - 1);
            default:
              throw new Error("Unknown normalization \"" + t + "\". Choose \"unbiased\" (default), \"uncorrected\", or \"biased\".");
          }
        }

        function a(e, a, n) {
          try {
            if (0 === e.length) throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
            return l(e, a, function (e) {
              return t(e, n)
            })
          } catch (e) {
            throw qe(e, "variance")
          }
        }
        var n = e.typed,
          i = e.add,
          r = e.subtract,
          s = e.multiply,
          o = e.divide,
          l = e.apply,
          m = e.isNaN;
        return n(fm, {
          "Array | Matrix": function (e) {
            return t(e, xm)
          },
          "Array | Matrix, string": t,
          "Array | Matrix, number | BigNumber": function (e, t) {
            return a(e, t, xm)
          },
          "Array | Matrix, number | BigNumber, string": a,
          "...": function (e) {
            return t(e, xm)
          }
        })
      }),
      bm = Object(ea.a)("var", ["variance"], function (e) {
        var t = e.variance;
        return function () {
          Object(Da.a)("Function \"var\" has been renamed to \"variance\" in v6.0.0, please use the new function instead.");
          for (var e = arguments.length, a = Array(e), n = 0; n < e; n++) a[n] = arguments[n];
          return t.apply(t, a)
        }
      }),
      vm = Object(ea.a)("quantileSeq", ["typed", "add", "multiply", "partitionSelect", "compare"], function (e) {
        function t(e, t, a) {
          var p = Object(ya.e)(e),
            m = p.length;
          if (0 === m) throw new Error("Cannot calculate quantile of an empty sequence");
          if (Object(Yt.y)(t)) {
            var c = t * (m - 1),
              d = c % 1;
            if (0 === d) {
              var u = a ? p[c] : s(p, c);
              return l(u), u
            }
            var g = Math.floor(c),
              y, x;
            if (a) y = p[g], x = p[g + 1];
            else {
              x = s(p, g + 1), y = p[g];
              for (var f = 0; f < g; ++f) 0 < o(p[f], y) && (y = p[f])
            }
            return l(y), l(x), n(r(y, 1 - d), r(x, d))
          }
          var h = t.times(m - 1);
          if (h.isInteger()) {
            h = h.toNumber();
            var b = a ? p[h] : s(p, h);
            return l(b), b
          }
          var v = h.floor(),
            N = h.minus(v),
            M = v.toNumber(),
            S, A;
          if (a) S = p[M], A = p[M + 1];
          else {
            A = s(p, M + 1), S = p[M];
            for (var O = 0; O < M; ++O) 0 < o(p[O], S) && (S = p[O])
          }
          l(S), l(A);
          var _ = new N.constructor(1);
          return n(r(S, _.minus(N)), r(A, N))
        }
        var a = e.typed,
          n = e.add,
          r = e.multiply,
          s = e.partitionSelect,
          o = e.compare,
          l = a({
            "number | BigNumber | Unit": function (e) {
              return e
            }
          });
        return function (e, a, n) {
          var r, s, o;
          if (2 > arguments.length || 3 < arguments.length) throw new SyntaxError("Function quantileSeq requires two or three parameters");
          if (Object(Yt.i)(e)) {
            if (n = n || !1, "boolean" == typeof n) {
              if (s = e.valueOf(), Object(Yt.y)(a)) {
                if (0 > a) throw new Error("N/prob must be non-negative");
                if (1 >= a) return t(s, a, n);
                if (1 < a) {
                  if (!Object(Kt.i)(a)) throw new Error("N must be a positive integer");
                  r = Array(a);
                  for (var l = 0; l < a;) r[l] = t(s, ++l / (a + 1), n);
                  return r
                }
              }
              if (Object(Yt.e)(a)) {
                var p = a.constructor;
                if (a.isNegative()) throw new Error("N/prob must be non-negative");
                if (o = new p(1), a.lte(o)) return new p(t(s, a, n));
                if (a.gt(o)) {
                  if (!a.isInteger()) throw new Error("N must be a positive integer");
                  var m = a.toNumber();
                  if (4294967295 < m) throw new Error("N must be less than or equal to 2^32-1, as that is the maximum length of an Array");
                  var c = new p(m + 1);
                  r = Array(m);
                  for (var d = 0; d < m;) r[d] = new p(t(s, new p(++d).div(c), n));
                  return r
                }
              }
              if (Array.isArray(a)) {
                r = Array(a.length);
                for (var u = 0, g; u < r.length; ++u) {
                  if (g = a[u], Object(Yt.y)(g)) {
                    if (0 > g || 1 < g) throw new Error("Probability must be between 0 and 1, inclusive");
                  } else if (!Object(Yt.e)(g)) throw new TypeError("Unexpected type of argument in function quantileSeq");
                  else if (o = new g.constructor(1), g.isNegative() || g.gt(o)) throw new Error("Probability must be between 0 and 1, inclusive");
                  r[u] = t(s, g, n)
                }
                return r
              }
              throw new TypeError("Unexpected type of argument in function quantileSeq")
            }
            throw new TypeError("Unexpected type of argument in function quantileSeq")
          }
          throw new TypeError("Unexpected type of argument in function quantileSeq")
        }
      }),
      Nm = "std",
      Mm = Object(ea.a)(Nm, ["typed", "sqrt", "variance"], function (e) {
        function t(e) {
          if (0 === e.length) throw new SyntaxError("Function std requires one or more parameters (0 provided)");
          try {
            return n(i.apply(null, arguments))
          } catch (e) {
            if (e instanceof TypeError && -1 !== e.message.indexOf(" variance")) throw new TypeError(e.message.replace(" variance", " std"));
            else throw e
          }
        }
        var a = e.typed,
          n = e.sqrt,
          i = e.variance;
        return a(Nm, {
          "Array | Matrix": t,
          "Array | Matrix, string": t,
          "Array | Matrix, number | BigNumber": t,
          "Array | Matrix, number | BigNumber, string": t,
          "...": function (e) {
            return t(e)
          }
        })
      });
    Dt.signature = "number, number";
    var Sm = Object(ea.a)("combinations", ["typed"], function (e) {
      var t = e.typed;
      return t("combinations", {
        "number, number": Dt,
        "BigNumber, BigNumber": function (e, t) {
          var a = e.constructor,
            n = new a(1),
            r, s, o, l;
          if (!Pt(e) || !Pt(t)) throw new TypeError("Positive integer value expected in function combinations");
          if (t.gt(e)) throw new TypeError("k must be less than n in function combinations");
          for (r = e.minus(t), t.lt(r) && (r = t), s = n, (o = n, l = e.minus(r)); o.lte(l); o = o.plus(1)) s = s.times(r.plus(o)).dividedBy(o);
          return s
        }
      })
    });
    Rt.signature = "number";
    var Am = 4.7421875,
      Om = [.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, .0001580887032249125, -.00021026444172410488, .00021743961811521265, -.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22],
      _m = "gamma",
      Cm = Object(ea.a)(_m, ["typed", "config", "multiplyScalar", "pow", "BigNumber", "Complex"], function (e) {
        function t(e) {
          if (e.isZero()) return new l(1);
          for (var t = i.precision + (0 | Math.log(e.toNumber())), a = l.clone({
              precision: t
            }), n = new a(e), r = e.toNumber() - 1; 1 < r;) n = n.times(r), r--;
          return new l(n.toPrecision(l.precision))
        }
        var a = e.typed,
          i = e.config,
          s = e.multiplyScalar,
          o = e.pow,
          l = e.BigNumber,
          p = e.Complex,
          c = a(_m, {
            number: Rt,
            Complex: function (e) {
              var a, l;
              if (0 === e.im) return c(e.re);
              e = new p(e.re - 1, e.im), l = new p(Om[0], 0);
              for (var m = 1; m < Om.length; ++m) {
                var d = e.re + m,
                  u = d * d + e.im * e.im;
                0 === u ? l.re = 0 > Om[m] ? -Infinity : 1 / 0 : (l.re += Om[m] * d / u, l.im += -(Om[m] * e.im) / u)
              }
              a = new p(e.re + Am + .5, e.im);
              var g = Math.sqrt(2 * Math.PI);
              e.re += .5;
              var y = o(a, e);
              0 === y.im ? y.re *= g : 0 === y.re ? y.im *= g : (y.re *= g, y.im *= g);
              var f = Math.exp(-a.re);
              return a.re = f * Math.cos(-a.im), a.im = f * Math.sin(-a.im), s(s(y, a), l)
            },
            BigNumber: function (e) {
              if (e.isInteger()) return e.isNegative() || e.isZero() ? new l(1 / 0) : t(e.minus(1));
              if (!e.isFinite()) return new l(e.isNegative() ? NaN : 1 / 0);
              throw new Error("Integer BigNumber expected")
            },
            "Array | Matrix": function (e) {
              return m(e, c)
            }
          });
        return c
      }),
      Em = "factorial",
      wm = Object(ea.a)(Em, ["typed", "gamma"], function (e) {
        var t = e.typed,
          a = e.gamma,
          i = t(Em, {
            number: function (e) {
              if (0 > e) throw new Error("Value must be non-negative");
              return a(e + 1)
            },
            BigNumber: function (e) {
              if (e.isNegative()) throw new Error("Value must be non-negative");
              return a(e.plus(1))
            },
            "Array | Matrix": function (e) {
              return m(e, i)
            }
          });
        return i
      }),
      km = "kldivergence",
      Tm = Object(ea.a)(km, ["typed", "matrix", "divide", "sum", "multiply", "dotDivide", "log", "isNumeric"], function (e) {
        function t(e, t) {
          var a = t.size().length,
            n = e.size().length;
          if (1 < a) throw new Error("first object must be one dimensional");
          if (1 < n) throw new Error("second object must be one dimensional");
          if (a !== n) throw new Error("Length of two vectors must be equal");
          var p = r(e);
          if (0 === p) throw new Error("Sum of elements in first object must be non zero");
          var c = r(t);
          if (0 === c) throw new Error("Sum of elements in second object must be non zero");
          var d = i(e, r(e)),
            u = i(t, r(t)),
            g = r(s(d, l(o(d, u))));
          return m(g) ? g : Number.NaN
        }
        var a = e.typed,
          n = e.matrix,
          i = e.divide,
          r = e.sum,
          s = e.multiply,
          o = e.dotDivide,
          l = e.log,
          m = e.isNumeric;
        return a(km, {
          "Array, Array": function (e, a) {
            return t(n(e), n(a))
          },
          "Matrix, Array": function (e, a) {
            return t(e, n(a))
          },
          "Array, Matrix": function (e, a) {
            return t(n(e), a)
          },
          "Matrix, Matrix": function (e, a) {
            return t(e, a)
          }
        })
      }),
      Im = "multinomial",
      qm = Object(ea.a)(Im, ["typed", "add", "divide", "multiply", "factorial", "isInteger", "isPositive"], function (e) {
        var t = e.typed,
          a = e.add,
          n = e.divide,
          i = e.multiply,
          r = e.factorial,
          s = e.isInteger,
          o = e.isPositive;
        return t(Im, {
          "Array | Matrix": function (e) {
            var t = 0,
              l = 1;
            return p(e, function (e) {
              if (!s(e) || !o(e)) throw new TypeError("Positive integer value expected in function multinomial");
              t = a(t, e), l = i(l, r(e))
            }), n(r(t), l)
          }
        })
      }),
      Bm = "permutations",
      zm = Object(ea.a)(Bm, ["typed", "factorial"], function (e) {
        var t = e.typed,
          a = e.factorial;
        return t(Bm, {
          "number | BigNumber": a,
          "number, number": function (e, t) {
            if (!Object(Kt.i)(e) || 0 > e) throw new TypeError("Positive integer value expected in function permutations");
            if (!Object(Kt.i)(t) || 0 > t) throw new TypeError("Positive integer value expected in function permutations");
            if (t > e) throw new TypeError("second argument k must be less than or equal to first argument n");
            return jt(e - t + 1, e)
          },
          "BigNumber, BigNumber": function (e, t) {
            var a, n;
            if (!Ut(e) || !Ut(t)) throw new TypeError("Positive integer value expected in function permutations");
            if (t.gt(e)) throw new TypeError("second argument k must be less than or equal to first argument n");
            var r = e.mul(0).add(1);
            for (a = r, n = e.minus(t).plus(1); n.lte(e); n = n.plus(1)) a = a.times(n);
            return a
          }
        })
      }),
      jm = a(15),
      Dm = a.n(jm),
      Pm = Dm()(),
      Rm = Object(ea.a)("pickRandom", ["typed", "config", "?on"], function (e) {
        function t(e, t, a) {
          var n = "undefined" == typeof t;
          if (n && (t = 1), e = e.valueOf(), a && (a = a.valueOf()), 1 < Object(ya.a)(e).length) throw new Error("Only one dimensional vectors supported");
          var s = 0;
          if ("undefined" != typeof a) {
            if (a.length !== e.length) throw new Error("Weights must have the same length as possibles");
            for (var o = 0, l = a.length; o < l; o++) {
              if (!Object(Yt.y)(a[o]) || 0 > a[o]) throw new Error("Weights must be an array of positive numbers");
              s += a[o]
            }
          }
          var p = e.length;
          if (0 === p) return [];
          if (t >= p) return 1 < t ? e : e[0];
          for (var m = [], c; m.length < t;) {
            if ("undefined" == typeof a) c = e[Math.floor(r() * p)];
            else
              for (var d = r() * s, u = 0, g = e.length; u < g; u++)
                if (d -= a[u], 0 > d) {
                  c = e[u];
                  break
                } - 1 === m.indexOf(c) && m.push(c)
          }
          return n ? m[0] : m
        }
        var a = e.typed,
          n = e.config,
          i = e.on,
          r = Lt(n.randomSeed);
        return i && i("config", function (e, t) {
          e.randomSeed !== t.randomSeed && (r = Lt(e.randomSeed))
        }), a({
          "Array | Matrix": function (e) {
            return t(e)
          },
          "Array | Matrix, number": function (e, a) {
            return t(e, a, void 0)
          },
          "Array | Matrix, Array": function (e, a) {
            return t(e, void 0, a)
          },
          "Array | Matrix, Array | Matrix, number": function (e, a, n) {
            return t(e, n, a)
          },
          "Array | Matrix, number, Array | Matrix": function (e, a, n) {
            return t(e, a, n)
          }
        })
      }),
      Um = "random",
      Lm = Object(ea.a)(Um, ["typed", "config", "?on"], function (e) {
        function t(e, t, n) {
          var i = Ft(e.valueOf(), function () {
            return a(t, n)
          });
          return Object(Yt.v)(e) ? e.create(i) : i
        }

        function a(e, t) {
          return e + s() * (t - e)
        }
        var n = e.typed,
          i = e.config,
          r = e.on,
          s = Lt(i.randomSeed);
        return r && r("config", function (e, t) {
          e.randomSeed !== t.randomSeed && (s = Lt(e.randomSeed))
        }), n(Um, {
          "": function () {
            return a(0, 1)
          },
          number: function (e) {
            return a(0, e)
          },
          "number, number": function (e, t) {
            return a(e, t)
          },
          "Array | Matrix": function (e) {
            return t(e, 0, 1)
          },
          "Array | Matrix, number": function (e, a) {
            return t(e, 0, a)
          },
          "Array | Matrix, number, number": function (e, a, n) {
            return t(e, a, n)
          }
        })
      }),
      Fm = Object(ea.a)(Um, ["typed", "config", "?on"], function (e) {
        function t(e, t) {
          return e + s() * (t - e)
        }
        var a = e.typed,
          n = e.config,
          i = e.on,
          r = e.matrix,
          s = Lt(n.randomSeed);
        return i && i("config", function (e, t) {
          e.randomSeed !== t.randomSeed && (s = Lt(e.randomSeed))
        }), a(Um, {
          "": function () {
            return t(0, 1)
          },
          number: function (e) {
            return t(0, e)
          },
          "number, number": function (e, a) {
            return t(e, a)
          }
        })
      }),
      Hm = "randomInt",
      Gm = Object(ea.a)(Hm, ["typed", "config", "?on"], function (e) {
        function t(e, t, n) {
          var i = Ft(e.valueOf(), function () {
            return a(t, n)
          });
          return Object(Yt.v)(e) ? e.create(i) : i
        }

        function a(e, t) {
          return Math.floor(e + s() * (t - e))
        }
        var n = e.typed,
          i = e.config,
          r = e.on,
          s = Lt(i.randomSeed);
        return r && r("config", function (e, t) {
          e.randomSeed !== t.randomSeed && (s = Lt(e.randomSeed))
        }), n(Hm, {
          "": function () {
            return a(0, 1)
          },
          number: function (e) {
            return a(0, e)
          },
          "number, number": function (e, t) {
            return a(e, t)
          },
          "Array | Matrix": function (e) {
            return t(e, 0, 1)
          },
          "Array | Matrix, number": function (e, a) {
            return t(e, 0, a)
          },
          "Array | Matrix, number, number": function (e, a, n) {
            return t(e, a, n)
          }
        })
      }),
      $m = "stirlingS2",
      Zm = Object(ea.a)($m, ["typed", "addScalar", "subtract", "multiplyScalar", "divideScalar", "pow", "factorial", "combinations", "isNegative", "isInteger", "larger"], function (e) {
        var t = e.typed,
          a = e.addScalar,
          r = e.subtract,
          s = e.multiplyScalar,
          o = e.divideScalar,
          l = e.pow,
          p = e.factorial,
          m = e.combinations,
          c = e.isNegative,
          d = e.isInteger,
          u = e.larger;
        return t($m, {
          "number | BigNumber, number | BigNumber": function (e, t) {
            if (!d(e) || c(e) || !d(t) || c(t)) throw new TypeError("Non-negative integer value expected in function stirlingS2");
            else if (u(t, e)) throw new TypeError("k must be less than or equal to n in function stirlingS2");
            for (var n = p(t), g = 0, y = 0; y <= t; y++) {
              var x = l(-1, r(t, y)),
                f = m(t, y),
                h = l(y, e);
              g = a(g, s(s(f, h), x))
            }
            return o(g, n)
          }
        })
      }),
      Vm = "bellNumbers",
      Wm = Object(ea.a)(Vm, ["typed", "addScalar", "isNegative", "isInteger", "stirlingS2"], function (e) {
        var t = e.typed,
          a = e.addScalar,
          r = e.isNegative,
          s = e.isInteger,
          o = e.stirlingS2;
        return t(Vm, {
          "number | BigNumber": function (e) {
            if (!s(e) || r(e)) throw new TypeError("Non-negative integer value expected in function bellNumbers");
            for (var t = 0, n = 0; n <= e; n++) t = a(t, o(e, n));
            return t
          }
        })
      }),
      Jm = "catalan",
      Ym = Object(ea.a)(Jm, ["typed", "addScalar", "divideScalar", "multiplyScalar", "combinations", "isNegative", "isInteger"], function (e) {
        var t = e.typed,
          a = e.addScalar,
          i = e.divideScalar,
          r = e.multiplyScalar,
          s = e.combinations,
          o = e.isNegative,
          l = e.isInteger;
        return t(Jm, {
          "number | BigNumber": function (e) {
            if (!l(e) || o(e)) throw new TypeError("Non-negative integer value expected in function catalan");
            return i(s(r(e, 2), e), a(e, 1))
          }
        })
      }),
      Xm = "composition",
      Qm = Object(ea.a)(Xm, ["typed", "addScalar", "combinations", "isNegative", "isPositive", "isInteger", "larger"], function (e) {
        var t = e.typed,
          a = e.addScalar,
          i = e.combinations,
          r = e.isPositive,
          s = e.isNegative,
          o = e.isInteger,
          l = e.larger;
        return t(Xm, {
          "number | BigNumber, number | BigNumber": function (e, t) {
            if (!o(e) || !r(e) || !o(t) || !r(t)) throw new TypeError("Positive integer value expected in function composition");
            else if (l(t, e)) throw new TypeError("k must be less than or equal to n in function composition");
            return i(a(e, -1), a(t, -1))
          }
        })
      }),
      Km = Object(ea.a)("simplifyUtil", ["FunctionNode", "OperatorNode", "SymbolNode"], function (e) {
        function t(e, t) {
          if (!Object(Yt.B)(e)) return !1;
          var a = e.fn.toString();
          return t && t.hasOwnProperty(a) && t[a].hasOwnProperty("associative") ? t[a].associative : d[a] || !1
        }

        function a(e) {
          if (!e.args || 0 === e.args.length) return e;
          e.args = n(e);
          for (var t = 0; t < e.args.length; t++) a(e.args[t])
        }

        function n(e) {
          var a = [],
            n = function e(t) {
              for (var n = 0, s; n < t.args.length; n++) s = t.args[n], Object(Yt.B)(s) && r === s.op ? e(s) : a.push(s)
            },
            r;
          return t(e) ? (r = e.op, n(e), a) : e.args
        }

        function r(e) {
          if (e.args && 0 !== e.args.length) {
            for (var a = o(e), n = e.args.length, s = 0; s < n; s++) r(e.args[s]);
            if (2 < n && t(e)) {
              for (var l = e.args.pop(); 0 < e.args.length;) l = a([e.args.pop(), l]);
              e.args = l.args
            }
          }
        }

        function s(e) {
          if (e.args && 0 !== e.args.length) {
            for (var a = o(e), n = e.args.length, r = 0; r < n; r++) s(e.args[r]);
            if (2 < n && t(e)) {
              for (var l = e.args.shift(); 0 < e.args.length;) l = a([l, e.args.shift()]);
              e.args = l.args
            }
          }
        }

        function o(e) {
          return Object(Yt.B)(e) ? function (t) {
            try {
              return new p(e.op, e.fn, t, e.implicit)
            } catch (e) {
              return console.error(e), []
            }
          } : function (t) {
            return new l(new m(e.name), t)
          }
        }
        var l = e.FunctionNode,
          p = e.OperatorNode,
          m = e.SymbolNode,
          c = {
            add: !0,
            multiply: !0
          },
          d = {
            add: !0,
            multiply: !0
          };
        return {
          createMakeNodeFunction: o,
          isCommutative: function (e, t) {
            if (!Object(Yt.B)(e)) return !0;
            var a = e.fn.toString();
            return t && t.hasOwnProperty(a) && t[a].hasOwnProperty("commutative") ? t[a].commutative : c[a] || !1
          },
          isAssociative: t,
          flatten: a,
          allChildren: n,
          unflattenr: r,
          unflattenl: s
        }
      }),
      ec = Object(ea.a)("simplifyCore", ["equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "ConstantNode", "OperatorNode", "FunctionNode", "ParenthesisNode"], function (e) {
        function t(e) {
          if (Object(Yt.B)(e) && e.isUnary()) {
            var y = t(e.args[0]);
            if ("+" === e.op) return y;
            if ("-" === e.op) {
              if (Object(Yt.B)(y)) {
                if (y.isUnary() && "-" === y.op) return y.args[0];
                if (y.isBinary() && "subtract" === y.fn) return new m("-", "subtract", [y.args[1], y.args[0]])
              }
              return new m(e.op, e.fn, [y])
            }
          } else if (Object(Yt.B)(e) && e.isBinary()) {
            var x = t(e.args[0]),
              f = t(e.args[1]);
            if ("+" === e.op) {
              if (Object(Yt.l)(x)) {
                if (n(x.value)) return f;
                if (Object(Yt.l)(f)) return new p(i(x.value, f.value))
              }
              return Object(Yt.l)(f) && n(f.value) ? x : Object(Yt.B)(f) && f.isUnary() && "-" === f.op ? new m("-", "subtract", [x, f.args[0]]) : new m(e.op, e.fn, f ? [x, f] : [x])
            }
            if ("-" === e.op) {
              if (Object(Yt.l)(x) && f) {
                if (Object(Yt.l)(f)) return new p(r(x.value, f.value));
                if (n(x.value)) return new m("-", "unaryMinus", [f])
              }
              if ("subtract" === e.fn) return Object(Yt.l)(f) && n(f.value) ? x : Object(Yt.B)(f) && f.isUnary() && "-" === f.op ? t(new m("+", "add", [x, f.args[0]])) : new m(e.op, e.fn, [x, f])
            } else {
              if ("*" === e.op) {
                if (Object(Yt.l)(x)) {
                  if (n(x.value)) return u;
                  if (a(x.value, 1)) return f;
                  if (Object(Yt.l)(f)) return new p(s(x.value, f.value))
                }
                if (Object(Yt.l)(f)) {
                  if (n(f.value)) return u;
                  if (a(f.value, 1)) return x;
                  if (Object(Yt.B)(x) && x.isBinary() && x.op === e.op) {
                    var h = x.args[0];
                    if (Object(Yt.l)(h)) {
                      var b = new p(s(h.value, f.value));
                      return new m(e.op, e.fn, [b, x.args[1]], e.implicit)
                    }
                  }
                  return new m(e.op, e.fn, [f, x], e.implicit)
                }
                return new m(e.op, e.fn, [x, f], e.implicit)
              }
              if ("/" === e.op) {
                if (Object(Yt.l)(x)) {
                  if (n(x.value)) return u;
                  if (Object(Yt.l)(f) && (a(f.value, 1) || a(f.value, 2) || a(f.value, 4))) return new p(o(x.value, f.value))
                }
                return new m(e.op, e.fn, [x, f])
              }
              if ("^" === e.op) {
                if (Object(Yt.l)(f)) {
                  if (n(f.value)) return g;
                  if (a(f.value, 1)) return x;
                  if (Object(Yt.l)(x)) return new p(l(x.value, f.value));
                  if (Object(Yt.B)(x) && x.isBinary() && "^" === x.op) {
                    var v = x.args[1];
                    if (Object(Yt.l)(v)) return new m(e.op, e.fn, [x.args[0], new p(s(v.value, f.value))])
                  }
                }
                return new m(e.op, e.fn, [x, f])
              }
            }
          } else {
            if (Object(Yt.C)(e)) {
              var N = t(e.content);
              return Object(Yt.C)(N) || Object(Yt.J)(N) || Object(Yt.l)(N) ? N : new d(N)
            }
            if (Object(Yt.r)(e)) {
              var M = e.args.map(t).map(function (e) {
                return Object(Yt.C)(e) ? e.content : e
              });
              return new c(t(e.fn), M)
            }
          }
          return e
        }
        var a = e.equal,
          n = e.isZero,
          i = e.add,
          r = e.subtract,
          s = e.multiply,
          o = e.divide,
          l = e.pow,
          p = e.ConstantNode,
          m = e.OperatorNode,
          c = e.FunctionNode,
          d = e.ParenthesisNode,
          u = new p(0),
          g = new p(1);
        return t
      }),
      tc = Object(ea.a)("simplifyConstant", ["typed", "config", "mathWithTransform", "?fraction", "?bignumber", "ConstantNode", "OperatorNode", "FunctionNode", "SymbolNode"], function (e) {
        function t(e, t, a) {
          try {
            return M(p[e].apply(null, t), a)
          } catch (n) {
            return t = t.map(function (e) {
              return Object(Yt.o)(e) ? e.valueOf() : e
            }), M(p[e].apply(null, t), a)
          }
        }

        function a(e, t) {
          var a = t && !1 !== t.exactFractions;
          if (a && isFinite(e) && m) {
            var n = m(e);
            if (n.valueOf() === e) return n
          }
          return e
        }

        function i(e) {
          return new u("-", "unaryMinus", [e])
        }

        function r(e, a, n, i) {
          return a.reduce(function (r, s) {
            if (!Object(Yt.w)(r) && !Object(Yt.w)(s)) {
              try {
                return t(e, [r, s], i)
              } catch (e) {}
              r = N(r), s = N(s)
            } else Object(Yt.w)(r) ? Object(Yt.w)(s) || (s = N(s)) : r = N(r);
            return n([r, s])
          })
        }

        function s(e, a) {
          switch (e.type) {
            case "SymbolNode":
              return e;
            case "ConstantNode":
              return "number" != typeof e.value && isNaN(e.value) ? e : M(e.value, a);
            case "FunctionNode":
              if (p[e.name] && p[e.name].rawArgs) return e;
              if (-1 === ["add", "multiply"].indexOf(e.name)) {
                var n = e.args.map(function (e) {
                  return s(e, a)
                });
                if (!n.some(Yt.w)) try {
                  return t(e.name, n, a)
                } catch (e) {}
                return n = n.map(function (e) {
                  return Object(Yt.w)(e) ? e : N(e)
                }), new g(e.name, n)
              };
            case "OperatorNode":
              var o = e.fn.toString(),
                l = v(e),
                m, c;
              if (Object(Yt.B)(e) && e.isUnary()) m = [s(e.args[0], a)], c = Object(Yt.w)(m[0]) ? l(m) : t(o, m, a);
              else if (!h(e)) m = e.args.map(function (e) {
                return s(e, a)
              }), c = r(o, m, l, a);
              else if (m = b(e), m = m.map(function (e) {
                  return s(e, a)
                }), f(o)) {
                for (var d = [], u = [], y = 0; y < m.length; y++) Object(Yt.w)(m[y]) ? u.push(m[y]) : d.push(m[y]);
                1 < d.length ? (c = r(o, d, l, a), u.unshift(c), c = r(o, u, l, a)) : c = r(o, m, l, a)
              } else c = r(o, m, l, a);
              return c;
            case "ParenthesisNode":
              return s(e.content, a);
            case "AccessorNode":
            case "ArrayNode":
            case "AssignmentNode":
            case "BlockNode":
            case "FunctionAssignmentNode":
            case "IndexNode":
            case "ObjectNode":
            case "RangeNode":
            case "ConditionalNode":
            default:
              throw new Error("Unimplemented node type in simplifyConstant: ".concat(e.type));
          }
        }
        var o = e.typed,
          l = e.config,
          p = e.mathWithTransform,
          m = e.fraction,
          c = e.bignumber,
          d = e.ConstantNode,
          u = e.OperatorNode,
          g = e.FunctionNode,
          y = e.SymbolNode,
          x = Km({
            FunctionNode: g,
            OperatorNode: u,
            SymbolNode: y
          }),
          f = x.isCommutative,
          h = x.isAssociative,
          b = x.allChildren,
          v = x.createMakeNodeFunction,
          N = o({
            Fraction: function (e) {
              var t = e.s * e.n,
                a;
              return a = 0 > t ? new u("-", "unaryMinus", [new d(-t)]) : new d(t), 1 === e.d ? a : new u("/", "divide", [a, new d(e.d)])
            },
            number: function (e) {
              return 0 > e ? i(new d(-e)) : new d(e)
            },
            BigNumber: function (e) {
              return 0 > e ? i(new d(-e)) : new d(e)
            },
            Complex: function () {
              throw new Error("Cannot convert Complex number to Node")
            }
          }),
          M = o({
            "string, Object": function (e, t) {
              if ("BigNumber" === l.number) return void 0 === c && be(), c(e);
              if ("Fraction" === l.number) return void 0 === m && ve(), m(e);
              var i = parseFloat(e);
              return a(i, t)
            },
            "Fraction, Object": function (e) {
              return e
            },
            "BigNumber, Object": function (e) {
              return e
            },
            "number, Object": function (e, t) {
              return a(e, t)
            },
            "Complex, Object": function (e, t) {
              return 0 === e.im ? a(e.re, t) : e
            }
          });
        return function (e, t) {
          var a = s(e, t);
          return Object(Yt.w)(a) ? a : N(a)
        }
      }),
      ac = Object(ea.a)("resolve", ["parse", "FunctionNode", "OperatorNode", "ParenthesisNode"], function (e) {
        function t(e, s) {
          if (!s) return e;
          if (Object(Yt.J)(e)) {
            var o = s[e.name];
            if (Object(Yt.w)(o)) return t(o, s);
            if ("number" == typeof o) return a(o + "")
          } else {
            if (Object(Yt.B)(e)) {
              var l = e.args.map(function (e) {
                return t(e, s)
              });
              return new i(e.op, e.fn, l, e.implicit)
            }
            if (Object(Yt.C)(e)) return new r(t(e.content, s));
            if (Object(Yt.r)(e)) {
              var p = e.args.map(function (e) {
                return t(e, s)
              });
              return new n(e.name, p)
            }
          }
          return e
        }
        var a = e.parse,
          n = e.FunctionNode,
          i = e.OperatorNode,
          r = e.ParenthesisNode;
        return t
      }),
      nc = Object(ea.a)("simplify", ["config", "typed", "parse", "add", "subtract", "multiply", "divide", "pow", "isZero", "equal", "?fraction", "?bignumber", "mathWithTransform", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode", "SymbolNode"], function (e) {
        function t(e) {
          return e.transform(function (e) {
            return Object(Yt.C)(e) ? t(e.content) : e
          })
        }

        function a(e) {
          for (var a = [], r = 0; r < e.length; r++) {
            var s = e[r],
              o = void 0,
              l = Ht(s);
            switch (l) {
              case "string":
                var p = s.split("->");
                if (2 === p.length) s = {
                  l: p[0],
                  r: p[1]
                };
                else throw SyntaxError("Could not parse rule: " + s);
              case "object":
                if (o = {
                    l: t(u(s.l)),
                    r: t(u(s.r))
                  }, s.context && (o.evaluate = s.context), s.evaluate && (o.evaluate = u(s.evaluate)), B(o.l)) {
                  var m = P(o.l),
                    c = n();
                  o.expanded = {}, o.expanded.l = m([o.l.clone(), c]), z(o.expanded.l), j(o.expanded.l), o.expanded.r = m([o.r, c])
                }
                break;
              case "function":
                o = s;
                break;
              default:
                throw TypeError("Unsupported type of rule: " + l);
            }
            a.push(o)
          }
          return a
        }

        function n() {
          return new E("_p" + L++)
        }

        function i(e, t) {
          var a = [],
            n = P(e),
            r, s;
          if (q(e, t))
            for (var o = 0; o < e.args.length; o++) s = e.args.slice(0), s.splice(o, 1), r = 1 === s.length ? s[0] : n(s), a.push(n([e.args[o], r]));
          else s = e.args.slice(1), r = 1 === s.length ? s[0] : n(s), a.push(n([e.args[0], r]));
          return a
        }

        function r(e, t) {
          var a = {
            placeholders: {}
          };
          if (!e.placeholders && !t.placeholders) return a;
          if (!e.placeholders) return t;
          if (!t.placeholders) return e;
          for (var n in e.placeholders)
            if (a.placeholders[n] = e.placeholders[n], t.placeholders.hasOwnProperty(n) && !m(e.placeholders[n], t.placeholders[n])) return null;
          for (var i in t.placeholders) a.placeholders[i] = t.placeholders[i];
          return a
        }

        function o(e, t) {
          var a = [];
          if (0 === e.length || 0 === t.length) return a;
          for (var n = 0, i; n < e.length; n++)
            for (var s = 0; s < t.length; s++) i = r(e[n], t[s]), i && a.push(i);
          return a
        }

        function l(e) {
          if (0 === e.length) return e;
          for (var t = e.reduce(o), a = [], n = {}, r = 0, l; r < t.length; r++) l = JSON.stringify(t[r]), n[l] || (n[l] = !0, a.push(t[r]));
          return a
        }

        function p(e, t, a) {
          var n = [{
            placeholders: {}
          }];
          if (e instanceof _ && t instanceof _ || e instanceof O && t instanceof O) {
            if (e instanceof _) {
              if (e.op !== t.op || e.fn !== t.fn) return [];
            } else if (e instanceof O && e.name !== t.name) return [];
            if (1 === t.args.length && 1 === e.args.length || !B(t) || a) {
              for (var r = [], s = 0, o; s < e.args.length; s++) {
                if (o = p(e.args[s], t.args[s]), 0 === o.length) return [];
                r.push(o)
              }
              n = l(r)
            } else {
              if (2 <= t.args.length && 2 === e.args.length) {
                for (var m = i(t, e.context), c = [], d = 0, u; d < m.length; d++) u = p(e, m[d], !0), c = c.concat(u);
                return c
              }
              if (2 < e.args.length) throw Error("Unexpected non-binary associative function: " + e.toString());
              else return []
            }
          } else if (e instanceof E) {
            if (0 === e.name.length) throw new Error("Symbol in rule has 0 length...!?");
            if (U[e.name]) {
              if (e.name !== t.name) return [];
            } else if ("n" === e.name[0] || "_p" === e.name.substring(0, 2)) n[0].placeholders[e.name] = t;
            else if ("v" === e.name[0]) {
              if (!Object(Yt.l)(t)) n[0].placeholders[e.name] = t;
              else return [];
            } else if ("c" !== e.name[0]) throw new Error("Invalid symbol in rule: " + e.name);
            else if (t instanceof A) n[0].placeholders[e.name] = t;
            else return []
          } else if (!(e instanceof A)) return [];
          else if (!v(e.value, t.value)) return [];
          return n
        }

        function m(e, t) {
          if (e instanceof A && t instanceof A) {
            if (!v(e.value, t.value)) return !1;
          } else if (e instanceof E && t instanceof E) {
            if (e.name !== t.name) return !1;
          } else if (e instanceof _ && t instanceof _ || e instanceof O && t instanceof O) {
            if (e instanceof _) {
              if (e.op !== t.op || e.fn !== t.fn) return !1;
            } else if (e instanceof O && e.name !== t.name) return !1;
            if (e.args.length !== t.args.length) return !1;
            for (var a = 0; a < e.args.length; a++)
              if (!m(e.args[a], t.args[a])) return !1
          } else return !1;
          return !0
        }
        var c = e.config,
          d = e.typed,
          u = e.parse,
          g = e.add,
          y = e.subtract,
          x = e.multiply,
          f = e.divide,
          h = e.pow,
          b = e.isZero,
          v = e.equal,
          N = e.fraction,
          M = e.bignumber,
          S = e.mathWithTransform,
          A = e.ConstantNode,
          O = e.FunctionNode,
          _ = e.OperatorNode,
          C = e.ParenthesisNode,
          E = e.SymbolNode,
          w = tc({
            typed: d,
            config: c,
            mathWithTransform: S,
            fraction: N,
            bignumber: M,
            ConstantNode: A,
            OperatorNode: _,
            FunctionNode: O,
            SymbolNode: E
          }),
          k = ec({
            equal: v,
            isZero: b,
            add: g,
            subtract: y,
            multiply: x,
            divide: f,
            pow: h,
            ConstantNode: A,
            OperatorNode: _,
            FunctionNode: O,
            ParenthesisNode: C
          }),
          T = ac({
            parse: u,
            FunctionNode: O,
            OperatorNode: _,
            ParenthesisNode: C
          }),
          I = Km({
            FunctionNode: O,
            OperatorNode: _,
            SymbolNode: E
          }),
          q = I.isCommutative,
          B = I.isAssociative,
          z = I.flatten,
          j = I.unflattenr,
          D = I.unflattenl,
          P = I.createMakeNodeFunction,
          R = d("simplify", {
            string: function (e) {
              return R(u(e), R.rules, {}, {})
            },
            "string, Object": function (e, t) {
              return R(u(e), R.rules, t, {})
            },
            "string, Object, Object": function (e, t, a) {
              return R(u(e), R.rules, t, a)
            },
            "string, Array": function (e, t) {
              return R(u(e), t, {}, {})
            },
            "string, Array, Object": function (e, t, a) {
              return R(u(e), t, a, {})
            },
            "string, Array, Object, Object": function (e, t, a, n) {
              return R(u(e), t, a, n)
            },
            "Node, Object": function (e, t) {
              return R(e, R.rules, t, {})
            },
            "Node, Object, Object": function (e, t, a) {
              return R(e, R.rules, t, a)
            },
            Node: function (e) {
              return R(e, R.rules, {}, {})
            },
            "Node, Array": function (e, t) {
              return R(e, t, {}, {})
            },
            "Node, Array, Object": function (e, t, a) {
              return R(e, t, a, {})
            },
            "Node, Array, Object, Object": function (e, n, r, s) {
              n = a(n);
              var o = T(e, r);
              o = t(o);
              for (var l = {}, p = o.toString({
                  parenthesis: "all"
                }); !l[p];) {
                l[p] = !0, L = 0;
                for (var m = 0; m < n.length; m++) "function" == typeof n[m] ? o = n[m](o, s) : (z(o), o = F(o, n[m])), D(o);
                p = o.toString({
                  parenthesis: "all"
                })
              }
              return o
            }
          });
        R.simplifyCore = k, R.resolve = T;
        var U = {
          true: !0,
          false: !0,
          e: !0,
          i: !0,
          Infinity: !0,
          LN2: !0,
          LN10: !0,
          LOG2E: !0,
          LOG10E: !0,
          NaN: !0,
          phi: !0,
          pi: !0,
          SQRT1_2: !0,
          SQRT2: !0,
          tau: !0
        };
        R.rules = [k, {
          l: "log(e)",
          r: "1"
        }, {
          l: "n-n1",
          r: "n+-n1"
        }, {
          l: "-(c*v)",
          r: "(-c) * v"
        }, {
          l: "-v",
          r: "(-1) * v"
        }, {
          l: "n/n1^n2",
          r: "n*n1^-n2"
        }, {
          l: "n/n1",
          r: "n*n1^-1"
        }, {
          l: "(n ^ n1) ^ n2",
          r: "n ^ (n1 * n2)"
        }, {
          l: "n*n",
          r: "n^2"
        }, {
          l: "n * n^n1",
          r: "n^(n1+1)"
        }, {
          l: "n^n1 * n^n2",
          r: "n^(n1+n2)"
        }, {
          l: "n+n",
          r: "2*n"
        }, {
          l: "n+-n",
          r: "0"
        }, {
          l: "n1*n2 + n2",
          r: "(n1+1)*n2"
        }, {
          l: "n1*n3 + n2*n3",
          r: "(n1+n2)*n3"
        }, {
          l: "n1 + -1 * (n2 + n3)",
          r: "n1 + -1 * n2 + -1 * n3"
        }, w, {
          l: "(-n)*n1",
          r: "-(n*n1)"
        }, {
          l: "c+v",
          r: "v+c",
          context: {
            add: {
              commutative: !1
            }
          }
        }, {
          l: "v*c",
          r: "c*v",
          context: {
            multiply: {
              commutative: !1
            }
          }
        }, {
          l: "n+-n1",
          r: "n-n1"
        }, {
          l: "n*(n1^-1)",
          r: "n/n1"
        }, {
          l: "n*n1^-n2",
          r: "n/n1^n2"
        }, {
          l: "n1^-1",
          r: "1/n1"
        }, {
          l: "n*(n1/n2)",
          r: "(n*n1)/n2"
        }, {
          l: "n-(n1+n2)",
          r: "n-n1-n2"
        }, {
          l: "1*n",
          r: "n"
        }];
        var L = 0,
          F = d("applyRule", {
            "Node, Object": function (e, t) {
              var a = e;
              if (!(a instanceof _ || a instanceof O)) a instanceof C && a.content && (a.content = F(a.content, t));
              else if (a.args)
                for (var n = 0; n < a.args.length; n++) a.args[n] = F(a.args[n], t);
              var r = t.r,
                s = p(t.l, a)[0];
              if (!s && t.expanded && (r = t.expanded.r, s = p(t.expanded.l, a)[0]), s) {
                var o = a.implicit;
                a = r.clone(), o && "implicit" in r && (a.implicit = !0), a = a.transform(function (e) {
                  return e.isSymbolNode && s.placeholders.hasOwnProperty(e.name) ? s.placeholders[e.name].clone() : e
                })
              }
              return a
            }
          });
        return R
      }),
      ic = Object(ea.a)("derivative", ["typed", "config", "parse", "simplify", "equal", "isZero", "numeric", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode", "SymbolNode"], function (e) {
        function t(e) {
          if ("log" !== e.name && "nthRoot" !== e.name && "pow" !== e.name || 2 !== e.args.length) {
            for (var t = 0; t < e.args.length; ++t) e.args[t] = a(0);
            throw e.compile().evaluate(), new Error("Expected TypeError, but none found")
          }
        }

        function a(e, t) {
          return new m(p(e, t || i.number))
        }
        var n = e.typed,
          i = e.config,
          r = e.parse,
          s = e.simplify,
          o = e.equal,
          l = e.isZero,
          p = e.numeric,
          m = e.ConstantNode,
          c = e.FunctionNode,
          d = e.OperatorNode,
          u = e.ParenthesisNode,
          g = e.SymbolNode,
          y = n("derivative", {
            "Node, SymbolNode, Object": function (e, t, a) {
              var n = {};
              h(n, e, t.name);
              var i = b(e, n);
              return a.simplify ? s(i) : i
            },
            "Node, SymbolNode": function (e, t) {
              return y(e, t, {
                simplify: !0
              })
            },
            "string, SymbolNode": function (e, t) {
              return y(r(e), t)
            },
            "string, SymbolNode, Object": function (e, t, a) {
              return y(r(e), t, a)
            },
            "string, string": function (e, t) {
              return y(r(e), r(t))
            },
            "string, string, Object": function (e, t, a) {
              return y(r(e), r(t), a)
            },
            "Node, string": function (e, t) {
              return y(e, r(t))
            },
            "Node, string, Object": function (e, t, a) {
              return y(e, r(t), a)
            }
          });
        y._simplify = !0, y.toTex = function (e) {
          return f.apply(null, e.args)
        };
        var f = n("_derivTex", {
            "Node, SymbolNode": function (e, t) {
              return Object(Yt.l)(e) && "string" === Object(Yt.M)(e.value) ? f(r(e.value).toString(), t.toString(), 1) : f(e.toString(), t.toString(), 1)
            },
            "Node, ConstantNode": function (e, t) {
              if ("string" === Object(Yt.M)(t.value)) return f(e, r(t.value));
              throw new Error("The second parameter to 'derivative' is a non-string constant")
            },
            "Node, SymbolNode, ConstantNode": function (e, t, a) {
              return f(e.toString(), t.name, a.value)
            },
            "string, string, number": function (e, t, a) {
              var n;
              return n = 1 === a ? "{d\\over d" + t + "}" : "{d^{" + a + "}\\over d" + t + "^{" + a + "}}", n + "\\left[".concat(e, "\\right]")
            }
          }),
          h = n("constTag", {
            "Object, ConstantNode, string": function (e, t) {
              return e[t] = !0, !0
            },
            "Object, SymbolNode, string": function (e, t, a) {
              return t.name !== a && (e[t] = !0, !0)
            },
            "Object, ParenthesisNode, string": function (e, t, a) {
              return h(e, t.content, a)
            },
            "Object, FunctionAssignmentNode, string": function (e, t, a) {
              return -1 === t.params.indexOf(a) ? (e[t] = !0, !0) : h(e, t.expr, a)
            },
            "Object, FunctionNode | OperatorNode, string": function (e, t, a) {
              if (0 < t.args.length) {
                for (var n = h(e, t.args[0], a), r = 1; r < t.args.length; ++r) n = h(e, t.args[r], a) && n;
                if (n) return e[t] = !0, !0
              }
              return !1
            }
          }),
          b = n("_derivative", {
            "ConstantNode, Object": function () {
              return a(0)
            },
            "SymbolNode, Object": function (e, t) {
              return void 0 === t[e] ? a(1) : a(0)
            },
            "ParenthesisNode, Object": function (e, t) {
              return new u(b(e.content, t))
            },
            "FunctionAssignmentNode, Object": function (e, t) {
              return void 0 === t[e] ? b(e.expr, t) : a(0)
            },
            "FunctionNode, Object": function (e, n) {
              if (1 !== e.args.length && t(e), void 0 !== n[e]) return a(0);
              var i = e.args[0],
                r = !1,
                s = !1,
                o, l;
              switch (e.name) {
                case "cbrt":
                  r = !0, l = new d("*", "multiply", [a(3), new d("^", "pow", [i, new d("/", "divide", [a(2), a(3)])])]);
                  break;
                case "sqrt":
                case "nthRoot":
                  if (1 === e.args.length) r = !0, l = new d("*", "multiply", [a(2), new c("sqrt", [i])]);
                  else if (2 === e.args.length) return o = new d("/", "divide", [a(1), e.args[1]]), n[o] = n[e.args[1]], b(new d("^", "pow", [i, o]), n);
                  break;
                case "log10":
                  o = a(10);
                case "log":
                  if (!o && 1 === e.args.length) l = i.clone(), r = !0;
                  else if (1 === e.args.length && o || 2 === e.args.length && void 0 !== n[e.args[1]]) l = new d("*", "multiply", [i.clone(), new c("log", [o || e.args[1]])]), r = !0;
                  else if (2 === e.args.length) return b(new d("/", "divide", [new c("log", [i]), new c("log", [e.args[1]])]), n);
                  break;
                case "pow":
                  return n[o] = n[e.args[1]], b(new d("^", "pow", [i, e.args[1]]), n);
                case "exp":
                  l = new c("exp", [i.clone()]);
                  break;
                case "sin":
                  l = new c("cos", [i.clone()]);
                  break;
                case "cos":
                  l = new d("-", "unaryMinus", [new c("sin", [i.clone()])]);
                  break;
                case "tan":
                  l = new d("^", "pow", [new c("sec", [i.clone()]), a(2)]);
                  break;
                case "sec":
                  l = new d("*", "multiply", [e, new c("tan", [i.clone()])]);
                  break;
                case "csc":
                  s = !0, l = new d("*", "multiply", [e, new c("cot", [i.clone()])]);
                  break;
                case "cot":
                  s = !0, l = new d("^", "pow", [new c("csc", [i.clone()]), a(2)]);
                  break;
                case "asin":
                  r = !0, l = new c("sqrt", [new d("-", "subtract", [a(1), new d("^", "pow", [i.clone(), a(2)])])]);
                  break;
                case "acos":
                  r = !0, s = !0, l = new c("sqrt", [new d("-", "subtract", [a(1), new d("^", "pow", [i.clone(), a(2)])])]);
                  break;
                case "atan":
                  r = !0, l = new d("+", "add", [new d("^", "pow", [i.clone(), a(2)]), a(1)]);
                  break;
                case "asec":
                  r = !0, l = new d("*", "multiply", [new c("abs", [i.clone()]), new c("sqrt", [new d("-", "subtract", [new d("^", "pow", [i.clone(), a(2)]), a(1)])])]);
                  break;
                case "acsc":
                  r = !0, s = !0, l = new d("*", "multiply", [new c("abs", [i.clone()]), new c("sqrt", [new d("-", "subtract", [new d("^", "pow", [i.clone(), a(2)]), a(1)])])]);
                  break;
                case "acot":
                  r = !0, s = !0, l = new d("+", "add", [new d("^", "pow", [i.clone(), a(2)]), a(1)]);
                  break;
                case "sinh":
                  l = new c("cosh", [i.clone()]);
                  break;
                case "cosh":
                  l = new c("sinh", [i.clone()]);
                  break;
                case "tanh":
                  l = new d("^", "pow", [new c("sech", [i.clone()]), a(2)]);
                  break;
                case "sech":
                  s = !0, l = new d("*", "multiply", [e, new c("tanh", [i.clone()])]);
                  break;
                case "csch":
                  s = !0, l = new d("*", "multiply", [e, new c("coth", [i.clone()])]);
                  break;
                case "coth":
                  s = !0, l = new d("^", "pow", [new c("csch", [i.clone()]), a(2)]);
                  break;
                case "asinh":
                  r = !0, l = new c("sqrt", [new d("+", "add", [new d("^", "pow", [i.clone(), a(2)]), a(1)])]);
                  break;
                case "acosh":
                  r = !0, l = new c("sqrt", [new d("-", "subtract", [new d("^", "pow", [i.clone(), a(2)]), a(1)])]);
                  break;
                case "atanh":
                  r = !0, l = new d("-", "subtract", [a(1), new d("^", "pow", [i.clone(), a(2)])]);
                  break;
                case "asech":
                  r = !0, s = !0, l = new d("*", "multiply", [i.clone(), new c("sqrt", [new d("-", "subtract", [a(1), new d("^", "pow", [i.clone(), a(2)])])])]);
                  break;
                case "acsch":
                  r = !0, s = !0, l = new d("*", "multiply", [new c("abs", [i.clone()]), new c("sqrt", [new d("+", "add", [new d("^", "pow", [i.clone(), a(2)]), a(1)])])]);
                  break;
                case "acoth":
                  r = !0, s = !0, l = new d("-", "subtract", [a(1), new d("^", "pow", [i.clone(), a(2)])]);
                  break;
                case "abs":
                  l = new d("/", "divide", [new c(new g("abs"), [i.clone()]), i.clone()]);
                  break;
                case "gamma":
                default:
                  throw new Error("Function \"" + e.name + "\" is not supported by derivative, or a wrong number of arguments is passed");
              }
              var p, m;
              r ? (p = "/", m = "divide") : (p = "*", m = "multiply");
              var u = b(i, n);
              return s && (u = new d("-", "unaryMinus", [u])), new d(p, m, [u, l])
            },
            "OperatorNode, Object": function (e, t) {
              if (void 0 !== t[e]) return a(0);
              if ("+" === e.op) return new d(e.op, e.fn, e.args.map(function (e) {
                return b(e, t)
              }));
              if ("-" === e.op) {
                if (e.isUnary()) return new d(e.op, e.fn, [b(e.args[0], t)]);
                if (e.isBinary()) return new d(e.op, e.fn, [b(e.args[0], t), b(e.args[1], t)])
              }
              if ("*" === e.op) {
                var n = e.args.filter(function (e) {
                  return void 0 !== t[e]
                });
                if (0 < n.length) {
                  var i = e.args.filter(function (e) {
                      return void 0 === t[e]
                    }),
                    r = 1 === i.length ? i[0] : new d("*", "multiply", i),
                    s = n.concat(b(r, t));
                  return new d("*", "multiply", s)
                }
                return new d("+", "add", e.args.map(function (a) {
                  return new d("*", "multiply", e.args.map(function (e) {
                    return e === a ? b(e, t) : e.clone()
                  }))
                }))
              }
              if ("/" === e.op && e.isBinary()) {
                var p = e.args[0],
                  m = e.args[1];
                return void 0 === t[m] ? void 0 === t[p] ? new d("/", "divide", [new d("-", "subtract", [new d("*", "multiply", [b(p, t), m.clone()]), new d("*", "multiply", [p.clone(), b(m, t)])]), new d("^", "pow", [m.clone(), a(2)])]) : new d("*", "multiply", [new d("-", "unaryMinus", [p]), new d("/", "divide", [b(m, t), new d("^", "pow", [m.clone(), a(2)])])]) : new d("/", "divide", [b(p, t), m])
              }
              if ("^" === e.op && e.isBinary()) {
                var u = e.args[0],
                  g = e.args[1];
                if (void 0 !== t[u]) return Object(Yt.l)(u) && (l(u.value) || o(u.value, 1)) ? a(0) : new d("*", "multiply", [e, new d("*", "multiply", [new c("log", [u.clone()]), b(g.clone(), t)])]);
                if (void 0 !== t[g]) {
                  if (Object(Yt.l)(g)) {
                    if (l(g.value)) return a(0);
                    if (o(g.value, 1)) return b(u, t)
                  }
                  var y = new d("^", "pow", [u.clone(), new d("-", "subtract", [g, a(1)])]);
                  return new d("*", "multiply", [g.clone(), new d("*", "multiply", [b(u, t), y])])
                }
                return new d("*", "multiply", [new d("^", "pow", [u.clone(), g.clone()]), new d("+", "add", [new d("*", "multiply", [b(u, t), new d("/", "divide", [g.clone(), u.clone()])]), new d("*", "multiply", [b(g, t), new c("log", [u.clone()])])])])
              }
              throw new Error("Operator \"" + e.op + "\" is not supported by derivative, or a wrong number of arguments is passed")
            }
          });
        return y
      }),
      rc = "rationalize",
      sc = Object(ea.a)(rc, ["config", "typed", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "parse", "simplify", "?bignumber", "?fraction", "mathWithTransform", "ConstantNode", "OperatorNode", "FunctionNode", "SymbolNode", "ParenthesisNode"], function (e) {
        function t(e, t, a, n) {
          function r(e) {
            var t = e.type;
            if ("FunctionNode" === t) throw new Error("There is an unsolved function call");
            else if ("OperatorNode" === t) {
              if ("^" !== e.op) {
                if (-1 === l.indexOf(e.op)) throw new Error("Operator " + e.op + " invalid in polynomial expression");
                for (var a = 0; a < e.args.length; a++) r(e.args[a])
              } else if ("unaryMinus" === e.args[1].fn && (e = e.args[0]), "ConstantNode" !== e.args[1].type || !Object(Kt.i)(parseFloat(e.args[1].value))) throw new Error("There is a non-integer exponent");
              else r(e.args[0]);
            } else if ("SymbolNode" === t) {
              var n = e.name,
                o = s.indexOf(n); - 1 === o && s.push(n)
            } else if ("ParenthesisNode" === t) r(e.content);
            else if ("ConstantNode" !== t) throw new Error("type " + t + " is not allowed in polynomial expression")
          }
          var s = [],
            o = y(e, n, t, {
              exactFractions: !1
            });
          a = !!a;
          var l = "+-*" + (a ? "/" : "");
          r(o);
          return {
            expression: o,
            variables: s
          }
        }

        function a() {
          var e = [O, {
              l: "n+n",
              r: "2*n"
            }, {
              l: "n+-n",
              r: "0"
            }, A, {
              l: "n*(n1^-1)",
              r: "n/n1"
            }, {
              l: "n*n1^-n2",
              r: "n/n1^n2"
            }, {
              l: "n1^-1",
              r: "1/n1"
            }, {
              l: "n*(n1/n2)",
              r: "(n*n1)/n2"
            }, {
              l: "1*n",
              r: "n"
            }],
            t = [{
              l: "(-n1)/(-n2)",
              r: "n1/n2"
            }, {
              l: "(-n1)*(-n2)",
              r: "n1*n2"
            }, {
              l: "n1--n2",
              r: "n1+n2"
            }, {
              l: "n1-n2",
              r: "n1+(-n2)"
            }, {
              l: "(n1+n2)*n3",
              r: "(n1*n3 + n2*n3)"
            }, {
              l: "n1*(n2+n3)",
              r: "(n1*n2+n1*n3)"
            }, {
              l: "c1*n + c2*n",
              r: "(c1+c2)*n"
            }, {
              l: "c1*n + n",
              r: "(c1+1)*n"
            }, {
              l: "c1*n - c2*n",
              r: "(c1-c2)*n"
            }, {
              l: "c1*n - n",
              r: "(c1-1)*n"
            }, {
              l: "v/c",
              r: "(1/c)*v"
            }, {
              l: "v/-c",
              r: "-(1/c)*v"
            }, {
              l: "-v*-c",
              r: "c*v"
            }, {
              l: "-v*c",
              r: "-c*v"
            }, {
              l: "v*-c",
              r: "-c*v"
            }, {
              l: "v*c",
              r: "c*v"
            }, {
              l: "-(-n1*n2)",
              r: "(n1*n2)"
            }, {
              l: "-(n1*n2)",
              r: "(-n1*n2)"
            }, {
              l: "-(-n1+n2)",
              r: "(n1-n2)"
            }, {
              l: "-(n1+n2)",
              r: "(-n1-n2)"
            }, {
              l: "(n1^n2)^n3",
              r: "(n1^(n2*n3))"
            }, {
              l: "-(-n1/n2)",
              r: "(n1/n2)"
            }, {
              l: "-(n1/n2)",
              r: "(-n1/n2)"
            }],
            a = [{
              l: "(n1/(n2/n3))",
              r: "((n1*n3)/n2)"
            }, {
              l: "(n1/n2/n3)",
              r: "(n1/(n2*n3))"
            }],
            n = {};
          return n.firstRules = e.concat(t, a), n.distrDivRules = [{
            l: "(n1/n2 + n3/n4)",
            r: "((n1*n4 + n3*n2)/(n2*n4))"
          }, {
            l: "(n1/n2 + n3)",
            r: "((n1 + n3*n2)/n2)"
          }, {
            l: "(n1 + n2/n3)",
            r: "((n1*n3 + n2)/n3)"
          }], n.sucDivRules = a, n.firstRulesAgain = e.concat(t), n.finalRules = [O, {
            l: "n*-n",
            r: "-n^2"
          }, {
            l: "n*n",
            r: "n^2"
          }, A, {
            l: "n*-n^n1",
            r: "-n^(n1+1)"
          }, {
            l: "n*n^n1",
            r: "n^(n1+1)"
          }, {
            l: "n^n1*-n^n2",
            r: "-n^(n1+n2)"
          }, {
            l: "n^n1*n^n2",
            r: "n^(n1+n2)"
          }, {
            l: "n^n1*-n",
            r: "-n^(n1+1)"
          }, {
            l: "n^n1*n",
            r: "n^(n1+1)"
          }, {
            l: "n^n1/-n",
            r: "-n^(n1-1)"
          }, {
            l: "n^n1/n",
            r: "n^(n1-1)"
          }, {
            l: "n/-n^n1",
            r: "-n^(1-n1)"
          }, {
            l: "n/n^n1",
            r: "n^(1-n1)"
          }, {
            l: "n^n1/-n^n2",
            r: "n^(n1-n2)"
          }, {
            l: "n^n1/n^n2",
            r: "n^(n1-n2)"
          }, {
            l: "n1+(-n2*n3)",
            r: "n1-n2*n3"
          }, {
            l: "v*(-c)",
            r: "-c*v"
          }, {
            l: "n1+-n2",
            r: "n1-n2"
          }, {
            l: "v*c",
            r: "c*v"
          }, {
            l: "(n1^n2)^n3",
            r: "(n1^(n2*n3))"
          }], n
        }

        function n(e, t, a) {
          var r = e.type,
            s = 1 < arguments.length;
          if ("OperatorNode" === r && e.isBinary()) {
            var o = !1,
              l;
            if ("^" === e.op && ("ParenthesisNode" === e.args[0].type || "OperatorNode" === e.args[0].type) && "ConstantNode" === e.args[1].type && (l = parseFloat(e.args[1].value), o = 2 <= l && Object(Kt.i)(l)), o) {
              if (2 < l) {
                var p = e.args[0],
                  m = new v("^", "pow", [e.args[0].cloneDeep(), new b(l - 1)]);
                e = new v("*", "multiply", [p, m])
              } else e = new v("*", "multiply", [e.args[0], e.args[0].cloneDeep()]);
              s && ("content" === a ? t.content = e : t.args[a] = e)
            }
          }
          if ("ParenthesisNode" === r) n(e.content, e, "content");
          else if ("ConstantNode" !== r && "SymbolNode" !== r)
            for (var c = 0; c < e.args.length; c++) n(e.args[c], e, c);
          return s ? void 0 : e
        }

        function i(e, t) {
          function a(e, i, s) {
            var o = e.type;
            if ("FunctionNode" === o) throw new Error("There is an unsolved function call");
            else if ("OperatorNode" === o) {
              if (-1 === "+-*^".indexOf(e.op)) throw new Error("Operator " + e.op + " invalid");
              if (null !== i) {
                if (("unaryMinus" === e.fn || "pow" === e.fn) && "add" !== i.fn && "subtract" !== i.fn && "multiply" !== i.fn) throw new Error("Invalid " + e.op + " placing");
                if (("subtract" === e.fn || "add" === e.fn || "multiply" === e.fn) && "add" !== i.fn && "subtract" !== i.fn) throw new Error("Invalid " + e.op + " placing");
                if (("subtract" === e.fn || "add" === e.fn || "unaryMinus" === e.fn) && 0 !== s.noFil) throw new Error("Invalid " + e.op + " placing")
              }("^" === e.op || "*" === e.op) && (s.fire = e.op);
              for (var l = 0; l < e.args.length; l++) "unaryMinus" === e.fn && (s.oper = "-"), ("+" === e.op || "subtract" === e.fn) && (s.fire = "", s.cte = 1, s.oper = 0 == l ? "+" : e.op), s.noFil = l, a(e.args[l], e, s)
            } else if ("SymbolNode" === o) {
              if (e.name !== r && "" !== r) throw new Error("There is more than one variable");
              if (r = e.name, null === i) return void(t[1] = 1);
              if ("^" === i.op && 0 !== s.noFil) throw new Error("In power the variable should be the first parameter");
              if ("*" === i.op && 1 !== s.noFil) throw new Error("In multiply the variable should be the second parameter");
              ("" === s.fire || "*" === s.fire) && (1 > n && (t[1] = 0), t[1] += s.cte * ("+" === s.oper ? 1 : -1), n = Math.max(1, n))
            } else if ("ConstantNode" === o) {
              var p = parseFloat(e.value);
              if (null === i) return void(t[0] = p);
              if ("^" === i.op) {
                if (1 !== s.noFil) throw new Error("Constant cannot be powered");
                if (!Object(Kt.i)(p) || 0 >= p) throw new Error("Non-integer exponent is not allowed");
                for (var m = n + 1; m < p; m++) t[m] = 0;
                return p > n && (t[p] = 0), t[p] += s.cte * ("+" === s.oper ? 1 : -1), void(n = Math.max(p, n))
              }
              s.cte = p, "" === s.fire && (t[0] += s.cte * ("+" === s.oper ? 1 : -1))
            } else throw new Error("Type " + o + " is not allowed")
          }
          t === void 0 && (t = []), t[0] = 0;
          var n = 0,
            r = "";
          a(e, null, {
            cte: 1,
            oper: "+",
            fire: ""
          }), n = t.length - 1;
          for (var s = !0, o = n, l; 0 <= o; o--)
            if (0 !== t[o]) {
              var p = new b(s ? t[o] : Math.abs(t[o])),
                m = 0 > t[o] ? "-" : "+";
              if (0 < o) {
                var c = new M(r);
                if (1 < o) {
                  var d = new b(o);
                  c = new v("^", "pow", [c, d])
                }
                p = -1 === t[o] && s ? new v("-", "unaryMinus", [c]) : 1 === Math.abs(t[o]) ? c : new v("*", "multiply", [p, c])
              }
              l = s ? p : "+" === m ? new v("+", "add", [l, p]) : new v("-", "subtract", [l, p]), s = !1
            } return s ? new b(0) : l
        }
        var r = e.config,
          s = e.typed,
          o = e.equal,
          l = e.isZero,
          p = e.add,
          m = e.subtract,
          c = e.multiply,
          d = e.divide,
          u = e.pow,
          g = e.parse,
          y = e.simplify,
          x = e.fraction,
          f = e.bignumber,
          h = e.mathWithTransform,
          b = e.ConstantNode,
          v = e.OperatorNode,
          N = e.FunctionNode,
          M = e.SymbolNode,
          S = e.ParenthesisNode,
          A = tc({
            typed: s,
            config: r,
            mathWithTransform: h,
            fraction: x,
            bignumber: f,
            ConstantNode: b,
            OperatorNode: v,
            FunctionNode: N,
            SymbolNode: M
          }),
          O = ec({
            equal: o,
            isZero: l,
            add: p,
            subtract: m,
            multiply: c,
            divide: d,
            pow: u,
            ConstantNode: b,
            OperatorNode: v,
            FunctionNode: N,
            ParenthesisNode: S
          }),
          _ = s(rc, {
            string: function (e) {
              return _(g(e), {}, !1)
            },
            "string, boolean": function (e, t) {
              return _(g(e), {}, t)
            },
            "string, Object": function (e, t) {
              return _(g(e), t, !1)
            },
            "string, Object, boolean": function (e, t, a) {
              return _(g(e), t, a)
            },
            Node: function (e) {
              return _(e, {}, !1)
            },
            "Node, boolean": function (e, t) {
              return _(e, {}, t)
            },
            "Node, Object": function (e, t) {
              return _(e, t, !1)
            },
            "Node, Object, boolean": function (e, r, o) {
              var l = a(),
                p = t(e, r, !0, l.firstRules),
                m = p.variables.length;
              if (e = p.expression, 1 <= m) {
                e = n(e);
                var c = !0,
                  d = !1,
                  u, g;
                e = y(e, l.firstRules, {}, {
                  exactFractions: !1
                });
                for (var x; g = c ? l.distrDivRules : l.sucDivRules, e = y(e, g), c = !c, x = e.toString(), x !== u;) d = !0, u = x;
                d && (e = y(e, l.firstRulesAgain, {}, {
                  exactFractions: !1
                })), e = y(e, l.finalRules, {}, {
                  exactFractions: !1
                })
              }
              var f = [],
                h = {};
              return ("OperatorNode" === e.type && e.isBinary() && "/" === e.op ? (1 === m && (e.args[0] = i(e.args[0], f), e.args[1] = i(e.args[1])), o && (h.numerator = e.args[0], h.denominator = e.args[1])) : (1 === m && (e = i(e, f)), o && (h.numerator = e, h.denominator = null)), !o) ? e : (h.coefficients = f, h.variables = p.variables, h.expression = e, h)
            }
          });
        return _
      }),
      oc = Object(ea.a)("reviver", ["classes"], function (e) {
        var t = e.classes;
        return function (e, a) {
          var n = t[a && a.mathjs];
          return n && "function" == typeof n.fromJSON ? n.fromJSON(a) : a
        }
      }),
      lc = Math.PI,
      pc = 2 * Math.PI,
      mc = Math.E,
      cc = Object(ea.a)("true", [], function () {
        return !0
      }),
      dc = Object(ea.a)("false", [], function () {
        return !1
      }),
      uc = Object(ea.a)("null", [], function () {
        return null
      }),
      gc = Gt("Infinity", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          a = e.BigNumber;
        return "BigNumber" === t.number ? new a(1 / 0) : 1 / 0
      }),
      yc = Gt("NaN", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          a = e.BigNumber;
        return "BigNumber" === t.number ? new a(NaN) : NaN
      }),
      xc = Gt("pi", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          a = e.BigNumber;
        return "BigNumber" === t.number ? mo(a) : lc
      }),
      fc = Gt("tau", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          a = e.BigNumber;
        return "BigNumber" === t.number ? co(a) : pc
      }),
      hc = Gt("e", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          a = e.BigNumber;
        return "BigNumber" === t.number ? lo(a) : mc
      }),
      bc = Gt("phi", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          a = e.BigNumber;
        return "BigNumber" === t.number ? po(a) : 1.618033988749895
      }),
      vc = Gt("LN2", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          a = e.BigNumber;
        return "BigNumber" === t.number ? new a(2).ln() : Math.LN2
      }),
      Nc = Gt("LN10", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          a = e.BigNumber;
        return "BigNumber" === t.number ? new a(10).ln() : Math.LN10
      }),
      Mc = Gt("LOG2E", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          a = e.BigNumber;
        return "BigNumber" === t.number ? new a(1).div(new a(2).ln()) : Math.LOG2E
      }),
      Sc = Gt("LOG10E", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          a = e.BigNumber;
        return "BigNumber" === t.number ? new a(1).div(new a(10).ln()) : Math.LOG10E
      }),
      Ac = Gt("SQRT1_2", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          a = e.BigNumber;
        return "BigNumber" === t.number ? new a("0.5").sqrt() : Math.SQRT1_2
      }),
      Oc = Gt("SQRT2", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          a = e.BigNumber;
        return "BigNumber" === t.number ? new a(2).sqrt() : Math.SQRT2
      }),
      _c = Gt("i", ["Complex"], function (e) {
        var t = e.Complex;
        return t.I
      }),
      Cc = Object(ea.a)("PI", ["pi"], function (e) {
        var t = e.pi;
        return t
      }),
      Ec = Object(ea.a)("E", ["e"], function (t) {
        var a = t.e;
        return a
      }),
      wc = Object(ea.a)("version", [], function () {
        return "6.0.2"
      }),
      kc = $t("speedOfLight", "299792458", "m s^-1"),
      Tc = $t("gravitationConstant", "6.67430e-11", "m^3 kg^-1 s^-2"),
      Ic = $t("planckConstant", "6.62607015e-34", "J s"),
      qc = $t("reducedPlanckConstant", "1.0545718176461565e-34", "J s"),
      Bc = $t("magneticConstant", "1.25663706212e-6", "N A^-2"),
      zc = $t("electricConstant", "8.8541878128e-12", "F m^-1"),
      jc = $t("vacuumImpedance", "376.730313667", "ohm"),
      Dc = $t("coulomb", "8.987551792261171e9", "N m^2 C^-2"),
      Pc = $t("elementaryCharge", "1.602176634e-19", "C"),
      Rc = $t("bohrMagneton", "9.2740100783e-24", "J T^-1"),
      Uc = $t("conductanceQuantum", "7.748091729863649e-5", "S"),
      Lc = $t("inverseConductanceQuantum", "12906.403729652257", "ohm"),
      Fc = $t("magneticFluxQuantum", "2.0678338484619295e-15", "Wb"),
      Hc = $t("nuclearMagneton", "5.0507837461e-27", "J T^-1"),
      Gc = $t("klitzing", "25812.807459304513", "ohm"),
      $c = $t("josephson", "4.835978484169836e14 Hz V", "Hz V^-1"),
      Zc = $t("bohrRadius", "5.29177210903e-11", "m"),
      Vc = $t("classicalElectronRadius", "2.8179403262e-15", "m"),
      Wc = $t("electronMass", "9.1093837015e-31", "kg"),
      Jc = $t("fermiCoupling", "1.1663787e-5", "GeV^-2"),
      Yc = Zt("fineStructure", .0072973525693),
      Xc = $t("hartreeEnergy", "4.3597447222071e-18", "J"),
      Qc = $t("protonMass", "1.67262192369e-27", "kg"),
      Kc = $t("deuteronMass", "3.3435830926e-27", "kg"),
      ed = $t("neutronMass", "1.6749271613e-27", "kg"),
      td = $t("quantumOfCirculation", "3.6369475516e-4", "m^2 s^-1"),
      ad = $t("rydberg", "10973731.568160", "m^-1"),
      nd = $t("thomsonCrossSection", "6.6524587321e-29", "m^2"),
      id = Zt("weakMixingAngle", .2229),
      rd = Zt("efimovFactor", 22.7),
      sd = $t("atomicMass", "1.66053906660e-27", "kg"),
      od = $t("avogadro", "6.02214076e23", "mol^-1"),
      ld = $t("boltzmann", "1.380649e-23", "J K^-1"),
      pd = $t("faraday", "96485.33212331001", "C mol^-1"),
      md = $t("firstRadiation", "3.7417718521927573e-16", "W m^2"),
      cd = $t("loschmidt", "2.686780111798444e25", "m^-3"),
      dd = $t("gasConstant", "8.31446261815324", "J K^-1 mol^-1"),
      ud = $t("molarPlanckConstant", "3.990312712893431e-10", "J s mol^-1"),
      gd = $t("molarVolume", "0.022413969545014137", "m^3 mol^-1"),
      yd = Zt("sackurTetrode", -1.16487052358),
      xd = $t("secondRadiation", "0.014387768775039337", "m K"),
      fd = $t("stefanBoltzmann", "5.67037441918443e-8", "W m^-2 K^-4"),
      hd = $t("wienDisplacement", "2.897771955e-3", "m K"),
      bd = $t("molarMass", "0.99999999965e-3", "kg mol^-1"),
      vd = $t("molarMassC12", "11.9999999958e-3", "kg mol^-1"),
      Nd = $t("gravity", "9.80665", "m s^-2"),
      Md = $t("planckLength", "1.616255e-35", "m"),
      Sd = $t("planckMass", "2.176435e-8", "kg"),
      Ad = $t("planckTime", "5.391245e-44", "s"),
      Od = $t("planckCharge", "1.87554603778e-18", "C"),
      _d = $t("planckTemperature", "1.416785e+32", "K"),
      Cd = Object(ea.a)("apply", ["typed", "isInteger"], function (e) {
        var t = e.typed,
          a = e.isInteger,
          n = dn({
            typed: t,
            isInteger: a
          });
        return t("apply", {
          "...any": function (e) {
            var t = e[1];
            Object(Yt.y)(t) ? e[1] = t - 1 : Object(Yt.e)(t) && (e[1] = t.minus(1));
            try {
              return n.apply(null, e)
            } catch (e) {
              throw rt(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      Ed = Object(ea.a)("column", ["typed", "Index", "matrix", "range"], function (e) {
        var t = e.typed,
          a = e.Index,
          n = e.matrix,
          i = e.range,
          r = Di({
            typed: t,
            Index: a,
            matrix: n,
            range: i
          });
        return t("column", {
          "...any": function (e) {
            var t = e.length - 1,
              a = e[t];
            Object(Yt.y)(a) && (e[t] = a - 1);
            try {
              return r.apply(null, e)
            } catch (e) {
              throw rt(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      wd = Object(ea.a)("filter", ["typed"], function (e) {
        function t(e, t, a) {
          var i, r;
          return e[0] && (i = e[0].compile().evaluate(a)), e[1] && (Object(Yt.J)(e[1]) || Object(Yt.q)(e[1]) ? r = e[1].compile().evaluate(a) : r = Vt(e[1], t, a)), n(i, r)
        }
        var a = e.typed;
        t.rawArgs = !0;
        var n = a("filter", {
          "Array, function": Wt,
          "Matrix, function": function (e, t) {
            return e.create(Wt(e.toArray(), t))
          },
          "Array, RegExp": ya.d,
          "Matrix, RegExp": function (e, t) {
            return e.create(Object(ya.d)(e.toArray(), t))
          }
        });
        return t
      }, {
        isTransformFunction: !0
      }),
      kd = Object(ea.a)("forEach", ["typed"], function (e) {
        function t(e, t, a) {
          var i, r;
          return e[0] && (i = e[0].compile().evaluate(a)), e[1] && (Object(Yt.J)(e[1]) || Object(Yt.q)(e[1]) ? r = e[1].compile().evaluate(a) : r = Vt(e[1], t, a)), n(i, r)
        }
        var a = e.typed;
        t.rawArgs = !0;
        var n = a("forEach", {
          "Array | Matrix, function": function (e, t) {
            var a = ye(t);
            (function n(i, r) {
              Array.isArray(i) ? Object(ya.f)(i, function (e, t) {
                n(e, r.concat(t + 1))
              }) : 1 === a ? t(i) : 2 === a ? t(i, r) : t(i, r, e)
            })(e.valueOf(), [])
          }
        });
        return t
      }, {
        isTransformFunction: !0
      }),
      Td = Object(ea.a)("map", ["typed"], function (e) {
        function t(e, t, a) {
          var i, r;
          return e[0] && (i = e[0].compile().evaluate(a)), e[1] && (Object(Yt.J)(e[1]) || Object(Yt.q)(e[1]) ? r = e[1].compile().evaluate(a) : r = Vt(e[1], t, a)), n(i, r)
        }
        var a = e.typed;
        t.rawArgs = !0;
        var n = a("map", {
          "Array, function": function (e, t) {
            return Jt(e, t, e)
          },
          "Matrix, function": function (e, t) {
            return e.create(Jt(e.valueOf(), t, e))
          }
        });
        return t
      }, {
        isTransformFunction: !0
      }),
      Id = Object(ea.a)("max", ["typed", "larger"], function (e) {
        var t = e.typed,
          a = e.larger,
          n = to({
            typed: t,
            larger: a
          });
        return t("max", {
          "...any": function (e) {
            if (2 === e.length && Object(Yt.i)(e[0])) {
              var t = e[1];
              Object(Yt.y)(t) ? e[1] = t - 1 : Object(Yt.e)(t) && (e[1] = t.minus(1))
            }
            try {
              return n.apply(null, e)
            } catch (e) {
              throw rt(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      qd = Object(ea.a)("mean", ["typed", "add", "divide"], function (e) {
        var t = e.typed,
          a = e.add,
          n = e.divide,
          i = cm({
            typed: t,
            add: a,
            divide: n
          });
        return t("mean", {
          "...any": function (e) {
            if (2 === e.length && Object(Yt.i)(e[0])) {
              var t = e[1];
              Object(Yt.y)(t) ? e[1] = t - 1 : Object(Yt.e)(t) && (e[1] = t.minus(1))
            }
            try {
              return i.apply(null, e)
            } catch (e) {
              throw rt(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      Bd = Object(ea.a)("min", ["typed", "smaller"], function (e) {
        var t = e.typed,
          a = e.smaller,
          n = no({
            typed: t,
            smaller: a
          });
        return t("min", {
          "...any": function (e) {
            if (2 === e.length && Object(Yt.i)(e[0])) {
              var t = e[1];
              Object(Yt.y)(t) ? e[1] = t - 1 : Object(Yt.e)(t) && (e[1] = t.minus(1))
            }
            try {
              return n.apply(null, e)
            } catch (e) {
              throw rt(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      zd = Object(ea.a)("range", ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.matrix,
          i = e.bignumber,
          r = e.smaller,
          s = e.smallerEq,
          o = e.larger,
          l = e.largerEq,
          p = ir({
            typed: t,
            config: a,
            matrix: n,
            bignumber: i,
            smaller: r,
            smallerEq: s,
            larger: o,
            largerEq: l
          });
        return t("range", {
          "...any": function (e) {
            var t = e.length - 1,
              a = e[t];
            return "boolean" != typeof a && e.push(!0), p.apply(null, e)
          }
        })
      }, {
        isTransformFunction: !0
      }),
      jd = Object(ea.a)("row", ["typed", "Index", "matrix", "range"], function (e) {
        var t = e.typed,
          a = e.Index,
          n = e.matrix,
          i = e.range,
          r = mr({
            typed: t,
            Index: a,
            matrix: n,
            range: i
          });
        return t("row", {
          "...any": function (e) {
            var t = e.length - 1,
              a = e[t];
            Object(Yt.y)(a) && (e[t] = a - 1);
            try {
              return r.apply(null, e)
            } catch (e) {
              throw rt(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      Dd = Object(ea.a)("subset", ["typed", "matrix"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = hr({
            typed: t,
            matrix: a
          });
        return t("subset", {
          "...any": function (e) {
            try {
              return n.apply(null, e)
            } catch (e) {
              throw rt(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      Pd = Object(ea.a)("concat", ["typed", "matrix", "isInteger"], function (e) {
        var t = e.typed,
          a = e.matrix,
          n = e.isInteger,
          i = zi({
            typed: t,
            matrix: a,
            isInteger: n
          });
        return t("concat", {
          "...any": function (e) {
            var t = e.length - 1,
              a = e[t];
            Object(Yt.y)(a) ? e[t] = a - 1 : Object(Yt.e)(a) && (e[t] = a.minus(1));
            try {
              return i.apply(null, e)
            } catch (e) {
              throw rt(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      Rd = Object(ea.a)("std", ["typed", "sqrt", "variance"], function (e) {
        var t = e.typed,
          a = e.sqrt,
          n = e.variance,
          i = Mm({
            typed: t,
            sqrt: a,
            variance: n
          });
        return t("std", {
          "...any": function (e) {
            if (2 <= e.length && Object(Yt.i)(e[0])) {
              var t = e[1];
              Object(Yt.y)(t) ? e[1] = t - 1 : Object(Yt.e)(t) && (e[1] = t.minus(1))
            }
            try {
              return i.apply(null, e)
            } catch (e) {
              throw rt(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      Ud = "sum",
      Ld = Object(ea.a)(Ud, ["typed", "config", "add", "?bignumber", "?fraction"], function (e) {
        var t = e.typed,
          a = e.config,
          n = e.add,
          i = e.bignumber,
          r = e.fraction,
          s = pm({
            typed: t,
            config: a,
            add: n,
            bignumber: i,
            fraction: r
          });
        return t(Ud, {
          "...any": function (e) {
            if (2 === e.length && Object(Yt.i)(e[0])) {
              var t = e[1];
              Object(Yt.y)(t) ? e[1] = t - 1 : Object(Yt.e)(t) && (e[1] = t.minus(1))
            }
            try {
              return s.apply(null, e)
            } catch (e) {
              throw rt(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      Fd = "variance",
      Hd = Object(ea.a)(Fd, ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"], function (e) {
        var t = e.typed,
          a = e.add,
          n = e.subtract,
          i = e.multiply,
          r = e.divide,
          s = e.apply,
          o = e.isNaN,
          l = hm({
            typed: t,
            add: a,
            subtract: n,
            multiply: i,
            divide: r,
            apply: s,
            isNaN: o
          });
        return t(Fd, {
          "...any": function (e) {
            if (2 <= e.length && Object(Yt.i)(e[0])) {
              var t = e[1];
              Object(Yt.y)(t) ? e[1] = t - 1 : Object(Yt.e)(t) && (e[1] = t.minus(1))
            }
            try {
              return l.apply(null, e)
            } catch (e) {
              throw rt(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      });
    a.d(t, "createTyped", function () {
      return aa
    }), a.d(t, "createResultSet", function () {
      return na
    }), a.d(t, "createBigNumberClass", function () {
      return sa
    }), a.d(t, "createComplexClass", function () {
      return pa
    }), a.d(t, "createFractionClass", function () {
      return da
    }), a.d(t, "createRangeClass", function () {
      return ua
    }), a.d(t, "createMatrixClass", function () {
      return ga
    }), a.d(t, "createDenseMatrixClass", function () {
      return ba
    }), a.d(t, "createClone", function () {
      return Na
    }), a.d(t, "createIsInteger", function () {
      return Aa
    }), a.d(t, "createIsNegative", function () {
      return _a
    }), a.d(t, "createIsNumeric", function () {
      return Ea
    }), a.d(t, "createHasNumericValue", function () {
      return ka
    }), a.d(t, "createIsPositive", function () {
      return Ia
    }), a.d(t, "createIsZero", function () {
      return Ba
    }), a.d(t, "createIsNaN", function () {
      return ja
    }), a.d(t, "createTypeOf", function () {
      return Ra
    }), a.d(t, "createDeprecatedTypeof", function () {
      return Ua
    }), a.d(t, "createEqualScalar", function () {
      return Fa
    }), a.d(t, "createSparseMatrixClass", function () {
      return Ga
    }), a.d(t, "createNumber", function () {
      return $a
    }), a.d(t, "createString", function () {
      return Va
    }), a.d(t, "createBoolean", function () {
      return Ja
    }), a.d(t, "createBignumber", function () {
      return Ya
    }), a.d(t, "createComplex", function () {
      return Xa
    }), a.d(t, "createFraction", function () {
      return Qa
    }), a.d(t, "createMatrix", function () {
      return en
    }), a.d(t, "createSplitUnit", function () {
      return an
    }), a.d(t, "createUnaryMinus", function () {
      return sn
    }), a.d(t, "createUnaryPlus", function () {
      return ln
    }), a.d(t, "createAbs", function () {
      return mn
    }), a.d(t, "createApply", function () {
      return dn
    }), a.d(t, "createAddScalar", function () {
      return gn
    }), a.d(t, "createCbrt", function () {
      return xn
    }), a.d(t, "createCeil", function () {
      return fn
    }), a.d(t, "createCube", function () {
      return bn
    }), a.d(t, "createExp", function () {
      return Nn
    }), a.d(t, "createExpm1", function () {
      return Sn
    }), a.d(t, "createFix", function () {
      return An
    }), a.d(t, "createFloor", function () {
      return On
    }), a.d(t, "createGcd", function () {
      return In
    }), a.d(t, "createLcm", function () {
      return Dn
    }), a.d(t, "createLog10", function () {
      return Rn
    }), a.d(t, "createLog2", function () {
      return Ln
    }), a.d(t, "createMod", function () {
      return Zn
    }), a.d(t, "createMultiplyScalar", function () {
      return Vn
    }), a.d(t, "createMultiply", function () {
      return Jn
    }), a.d(t, "createNthRoot", function () {
      return Xn
    }), a.d(t, "createSign", function () {
      return ei
    }), a.d(t, "createSqrt", function () {
      return ti
    }), a.d(t, "createSquare", function () {
      return ni
    }), a.d(t, "createSubtract", function () {
      return ri
    }), a.d(t, "createXgcd", function () {
      return oi
    }), a.d(t, "createDotMultiply", function () {
      return mi
    }), a.d(t, "createBitAnd", function () {
      return di
    }), a.d(t, "createBitNot", function () {
      return gi
    }), a.d(t, "createBitOr", function () {
      return xi
    }), a.d(t, "createBitXor", function () {
      return bi
    }), a.d(t, "createArg", function () {
      return Ni
    }), a.d(t, "createConj", function () {
      return Si
    }), a.d(t, "createIm", function () {
      return Oi
    }), a.d(t, "createRe", function () {
      return Ci
    }), a.d(t, "createNot", function () {
      return wi
    }), a.d(t, "createOr", function () {
      return Ti
    }), a.d(t, "createXor", function () {
      return qi
    }), a.d(t, "createConcat", function () {
      return zi
    }), a.d(t, "createColumn", function () {
      return Di
    }), a.d(t, "createCross", function () {
      return Ri
    }), a.d(t, "createDiag", function () {
      return Li
    }), a.d(t, "createEye", function () {
      return Fi
    }), a.d(t, "createFilter", function () {
      return Hi
    }), a.d(t, "createFlatten", function () {
      return $i
    }), a.d(t, "createForEach", function () {
      return Vi
    }), a.d(t, "createGetMatrixDataType", function () {
      return Ji
    }), a.d(t, "createIdentity", function () {
      return Xi
    }), a.d(t, "createKron", function () {
      return Ki
    }), a.d(t, "createMap", function () {
      return tr
    }), a.d(t, "createOnes", function () {
      return ar
    }), a.d(t, "createRange", function () {
      return ir
    }), a.d(t, "createReshape", function () {
      return sr
    }), a.d(t, "createResize", function () {
      return lr
    }), a.d(t, "createRow", function () {
      return mr
    }), a.d(t, "createSize", function () {
      return dr
    }), a.d(t, "createSqueeze", function () {
      return gr
    }), a.d(t, "createSubset", function () {
      return hr
    }), a.d(t, "createTranspose", function () {
      return br
    }), a.d(t, "createCtranspose", function () {
      return Nr
    }), a.d(t, "createZeros", function () {
      return Sr
    }), a.d(t, "createErf", function () {
      return Ar
    }), a.d(t, "createMode", function () {
      return Er
    }), a.d(t, "createProd", function () {
      return kr
    }), a.d(t, "createFormat", function () {
      return Ir
    }), a.d(t, "createPrint", function () {
      return Br
    }), a.d(t, "createTo", function () {
      return jr
    }), a.d(t, "createIsPrime", function () {
      return Pr
    }), a.d(t, "createNumeric", function () {
      return Rr
    }), a.d(t, "createDivideScalar", function () {
      return Lr
    }), a.d(t, "createPow", function () {
      return Hr
    }), a.d(t, "createRound", function () {
      return Zr
    }), a.d(t, "createLog", function () {
      return Yr
    }), a.d(t, "createLog1p", function () {
      return Qr
    }), a.d(t, "createNthRoots", function () {
      return es
    }), a.d(t, "createDotPow", function () {
      return as
    }), a.d(t, "createDotDivide", function () {
      return is
    }), a.d(t, "createLsolve", function () {
      return ss
    }), a.d(t, "createUsolve", function () {
      return ls
    }), a.d(t, "createLeftShift", function () {
      return cs
    }), a.d(t, "createRightArithShift", function () {
      return us
    }), a.d(t, "createRightLogShift", function () {
      return ys
    }), a.d(t, "createAnd", function () {
      return fs
    }), a.d(t, "createCompare", function () {
      return bs
    }), a.d(t, "createCompareNatural", function () {
      return As
    }), a.d(t, "createCompareText", function () {
      return _s
    }), a.d(t, "createEqual", function () {
      return ws
    }), a.d(t, "createEqualText", function () {
      return Is
    }), a.d(t, "createSmaller", function () {
      return Bs
    }), a.d(t, "createSmallerEq", function () {
      return Ds
    }), a.d(t, "createLarger", function () {
      return Us
    }), a.d(t, "createLargerEq", function () {
      return Hs
    }), a.d(t, "createDeepEqual", function () {
      return Zs
    }), a.d(t, "createUnequal", function () {
      return Ws
    }), a.d(t, "createPartitionSelect", function () {
      return Xs
    }), a.d(t, "createSort", function () {
      return Ks
    }), a.d(t, "createMax", function () {
      return to
    }), a.d(t, "createMin", function () {
      return no
    }), a.d(t, "createImmutableDenseMatrixClass", function () {
      return io
    }), a.d(t, "createIndexClass", function () {
      return ro
    }), a.d(t, "createFibonacciHeapClass", function () {
      return so
    }), a.d(t, "createSpaClass", function () {
      return oo
    }), a.d(t, "createUnitClass", function () {
      return uo
    }), a.d(t, "createUnitFunction", function () {
      return yo
    }), a.d(t, "createSparse", function () {
      return fo
    }), a.d(t, "createCreateUnit", function () {
      return bo
    }), a.d(t, "createAcos", function () {
      return No
    }), a.d(t, "createAcosh", function () {
      return So
    }), a.d(t, "createAcot", function () {
      return Oo
    }), a.d(t, "createAcoth", function () {
      return Co
    }), a.d(t, "createAcsc", function () {
      return wo
    }), a.d(t, "createAcsch", function () {
      return To
    }), a.d(t, "createAsec", function () {
      return qo
    }), a.d(t, "createAsech", function () {
      return zo
    }), a.d(t, "createAsin", function () {
      return Do
    }), a.d(t, "createAsinh", function () {
      return Po
    }), a.d(t, "createAtan", function () {
      return Ro
    }), a.d(t, "createAtan2", function () {
      return Lo
    }), a.d(t, "createAtanh", function () {
      return Ho
    }), a.d(t, "createCos", function () {
      return $o
    }), a.d(t, "createCosh", function () {
      return Vo
    }), a.d(t, "createCot", function () {
      return Jo
    }), a.d(t, "createCoth", function () {
      return Xo
    }), a.d(t, "createCsc", function () {
      return Ko
    }), a.d(t, "createCsch", function () {
      return tl
    }), a.d(t, "createSec", function () {
      return nl
    }), a.d(t, "createSech", function () {
      return rl
    }), a.d(t, "createSin", function () {
      return ol
    }), a.d(t, "createSinh", function () {
      return pl
    }), a.d(t, "createTan", function () {
      return cl
    }), a.d(t, "createTanh", function () {
      return dl
    }), a.d(t, "createSetCartesian", function () {
      return gl
    }), a.d(t, "createSetDifference", function () {
      return xl
    }), a.d(t, "createSetDistinct", function () {
      return hl
    }), a.d(t, "createSetIntersect", function () {
      return vl
    }), a.d(t, "createSetIsSubset", function () {
      return Ml
    }), a.d(t, "createSetMultiplicity", function () {
      return Al
    }), a.d(t, "createSetPowerset", function () {
      return _l
    }), a.d(t, "createSetSize", function () {
      return El
    }), a.d(t, "createSetSymDifference", function () {
      return kl
    }), a.d(t, "createSetUnion", function () {
      return Il
    }), a.d(t, "createAdd", function () {
      return Bl
    }), a.d(t, "createHypot", function () {
      return jl
    }), a.d(t, "createNorm", function () {
      return Pl
    }), a.d(t, "createDot", function () {
      return Ul
    }), a.d(t, "createTrace", function () {
      return Ll
    }), a.d(t, "createIndex", function () {
      return Hl
    }), a.d(t, "createNode", function () {
      return $l
    }), a.d(t, "createAccessorNode", function () {
      return Zl
    }), a.d(t, "createArrayNode", function () {
      return Vl
    }), a.d(t, "createAssignmentNode", function () {
      return Jl
    }), a.d(t, "createBlockNode", function () {
      return Yl
    }), a.d(t, "createConditionalNode", function () {
      return Xl
    }), a.d(t, "createConstantNode", function () {
      return ip
    }), a.d(t, "createFunctionAssignmentNode", function () {
      return rp
    }), a.d(t, "createIndexNode", function () {
      return op
    }), a.d(t, "createObjectNode", function () {
      return lp
    }), a.d(t, "createOperatorNode", function () {
      return pp
    }), a.d(t, "createParenthesisNode", function () {
      return mp
    }), a.d(t, "createRangeNode", function () {
      return cp
    }), a.d(t, "createRelationalNode", function () {
      return dp
    }), a.d(t, "createSymbolNode", function () {
      return up
    }), a.d(t, "createFunctionNode", function () {
      return gp
    }), a.d(t, "createParse", function () {
      return xp
    }), a.d(t, "createCompile", function () {
      return hp
    }), a.d(t, "createEvaluate", function () {
      return vp
    }), a.d(t, "createDeprecatedEval", function () {
      return Np
    }), a.d(t, "createParserClass", function () {
      return Mp
    }), a.d(t, "createParser", function () {
      return Ap
    }), a.d(t, "createLup", function () {
      return _p
    }), a.d(t, "createQr", function () {
      return Ep
    }), a.d(t, "createSlu", function () {
      return zp
    }), a.d(t, "createLusolve", function () {
      return Dp
    }), a.d(t, "createHelpClass", function () {
      return Pp
    }), a.d(t, "createChainClass", function () {
      return Rp
    }), a.d(t, "createHelp", function () {
      return Vp
    }), a.d(t, "createChain", function () {
      return Jp
    }), a.d(t, "createDet", function () {
      return Xp
    }), a.d(t, "createInv", function () {
      return Kp
    }), a.d(t, "createExpm", function () {
      return tm
    }), a.d(t, "createSqrtm", function () {
      return nm
    }), a.d(t, "createDivide", function () {
      return im
    }), a.d(t, "createDistance", function () {
      return sm
    }), a.d(t, "createIntersect", function () {
      return om
    }), a.d(t, "createSum", function () {
      return pm
    }), a.d(t, "createMean", function () {
      return cm
    }), a.d(t, "createMedian", function () {
      return um
    }), a.d(t, "createMad", function () {
      return ym
    }), a.d(t, "createVariance", function () {
      return hm
    }), a.d(t, "createDeprecatedVar", function () {
      return bm
    }), a.d(t, "createQuantileSeq", function () {
      return vm
    }), a.d(t, "createStd", function () {
      return Mm
    }), a.d(t, "createCombinations", function () {
      return Sm
    }), a.d(t, "createGamma", function () {
      return Cm
    }), a.d(t, "createFactorial", function () {
      return wm
    }), a.d(t, "createKldivergence", function () {
      return Tm
    }), a.d(t, "createMultinomial", function () {
      return qm
    }), a.d(t, "createPermutations", function () {
      return zm
    }), a.d(t, "createPickRandom", function () {
      return Rm
    }), a.d(t, "createRandom", function () {
      return Lm
    }), a.d(t, "createRandomInt", function () {
      return Gm
    }), a.d(t, "createStirlingS2", function () {
      return Zm
    }), a.d(t, "createBellNumbers", function () {
      return Wm
    }), a.d(t, "createCatalan", function () {
      return Ym
    }), a.d(t, "createComposition", function () {
      return Qm
    }), a.d(t, "createSimplify", function () {
      return nc
    }), a.d(t, "createDerivative", function () {
      return ic
    }), a.d(t, "createRationalize", function () {
      return sc
    }), a.d(t, "createReviver", function () {
      return oc
    }), a.d(t, "createE", function () {
      return hc
    }), a.d(t, "createUppercaseE", function () {
      return Ec
    }), a.d(t, "createFalse", function () {
      return dc
    }), a.d(t, "createI", function () {
      return _c
    }), a.d(t, "createInfinity", function () {
      return gc
    }), a.d(t, "createLN10", function () {
      return Nc
    }), a.d(t, "createLN2", function () {
      return vc
    }), a.d(t, "createLOG10E", function () {
      return Sc
    }), a.d(t, "createLOG2E", function () {
      return Mc
    }), a.d(t, "createNaN", function () {
      return yc
    }), a.d(t, "createNull", function () {
      return uc
    }), a.d(t, "createPhi", function () {
      return bc
    }), a.d(t, "createPi", function () {
      return xc
    }), a.d(t, "createUppercasePi", function () {
      return Cc
    }), a.d(t, "createSQRT1_2", function () {
      return Ac
    }), a.d(t, "createSQRT2", function () {
      return Oc
    }), a.d(t, "createTau", function () {
      return fc
    }), a.d(t, "createTrue", function () {
      return cc
    }), a.d(t, "createVersion", function () {
      return wc
    }), a.d(t, "createAtomicMass", function () {
      return sd
    }), a.d(t, "createAvogadro", function () {
      return od
    }), a.d(t, "createBohrMagneton", function () {
      return Rc
    }), a.d(t, "createBohrRadius", function () {
      return Zc
    }), a.d(t, "createBoltzmann", function () {
      return ld
    }), a.d(t, "createClassicalElectronRadius", function () {
      return Vc
    }), a.d(t, "createConductanceQuantum", function () {
      return Uc
    }), a.d(t, "createCoulomb", function () {
      return Dc
    }), a.d(t, "createDeuteronMass", function () {
      return Kc
    }), a.d(t, "createEfimovFactor", function () {
      return rd
    }), a.d(t, "createElectricConstant", function () {
      return zc
    }), a.d(t, "createElectronMass", function () {
      return Wc
    }), a.d(t, "createElementaryCharge", function () {
      return Pc
    }), a.d(t, "createFaraday", function () {
      return pd
    }), a.d(t, "createFermiCoupling", function () {
      return Jc
    }), a.d(t, "createFineStructure", function () {
      return Yc
    }), a.d(t, "createFirstRadiation", function () {
      return md
    }), a.d(t, "createGasConstant", function () {
      return dd
    }), a.d(t, "createGravitationConstant", function () {
      return Tc
    }), a.d(t, "createGravity", function () {
      return Nd
    }), a.d(t, "createHartreeEnergy", function () {
      return Xc
    }), a.d(t, "createInverseConductanceQuantum", function () {
      return Lc
    }), a.d(t, "createKlitzing", function () {
      return Gc
    }), a.d(t, "createLoschmidt", function () {
      return cd
    }), a.d(t, "createMagneticConstant", function () {
      return Bc
    }), a.d(t, "createMagneticFluxQuantum", function () {
      return Fc
    }), a.d(t, "createMolarMass", function () {
      return bd
    }), a.d(t, "createMolarMassC12", function () {
      return vd
    }), a.d(t, "createMolarPlanckConstant", function () {
      return ud
    }), a.d(t, "createMolarVolume", function () {
      return gd
    }), a.d(t, "createNeutronMass", function () {
      return ed
    }), a.d(t, "createNuclearMagneton", function () {
      return Hc
    }), a.d(t, "createPlanckCharge", function () {
      return Od
    }), a.d(t, "createPlanckConstant", function () {
      return Ic
    }), a.d(t, "createPlanckLength", function () {
      return Md
    }), a.d(t, "createPlanckMass", function () {
      return Sd
    }), a.d(t, "createPlanckTemperature", function () {
      return _d
    }), a.d(t, "createPlanckTime", function () {
      return Ad
    }), a.d(t, "createProtonMass", function () {
      return Qc
    }), a.d(t, "createQuantumOfCirculation", function () {
      return td
    }), a.d(t, "createReducedPlanckConstant", function () {
      return qc
    }), a.d(t, "createRydberg", function () {
      return ad
    }), a.d(t, "createSackurTetrode", function () {
      return yd
    }), a.d(t, "createSecondRadiation", function () {
      return xd
    }), a.d(t, "createSpeedOfLight", function () {
      return kc
    }), a.d(t, "createStefanBoltzmann", function () {
      return fd
    }), a.d(t, "createThomsonCrossSection", function () {
      return nd
    }), a.d(t, "createVacuumImpedance", function () {
      return jc
    }), a.d(t, "createWeakMixingAngle", function () {
      return id
    }), a.d(t, "createWienDisplacement", function () {
      return hd
    }), a.d(t, "createApplyTransform", function () {
      return Cd
    }), a.d(t, "createColumnTransform", function () {
      return Ed
    }), a.d(t, "createFilterTransform", function () {
      return wd
    }), a.d(t, "createForEachTransform", function () {
      return kd
    }), a.d(t, "createIndexTransform", function () {
      return sp
    }), a.d(t, "createMapTransform", function () {
      return Td
    }), a.d(t, "createMaxTransform", function () {
      return Id
    }), a.d(t, "createMeanTransform", function () {
      return qd
    }), a.d(t, "createMinTransform", function () {
      return Bd
    }), a.d(t, "createRangeTransform", function () {
      return zd
    }), a.d(t, "createRowTransform", function () {
      return jd
    }), a.d(t, "createSubsetTransform", function () {
      return Dd
    }), a.d(t, "createConcatTransform", function () {
      return Pd
    }), a.d(t, "createStdTransform", function () {
      return Rd
    }), a.d(t, "createSumTransform", function () {
      return Ld
    }), a.d(t, "createVarianceTransform", function () {
      return Hd
    })
  }, function (e, t, a) {
    "use strict";

    function n(e) {
      var t = new y.a;
      return e.on = t.on.bind(t), e.off = t.off.bind(t), e.once = t.once.bind(t), e.emit = t.emit.bind(t), e
    }

    function i(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e
    }

    function r(e) {
      return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, r(e)
    }

    function s(e, t, a, n) {
      function s(t, r, s) {
        if (s.wrap && "function" == typeof r && (r = p(r)), y(r) && (r = e(t, i({}, r.signature, r))), g(a[t]) && g(r)) return r = s.override ? e(t, r.signatures) : e(a[t], r), a[t] = r, delete n[t], o(t, r), void a.emit("import", t, function () {
          return r
        });
        if (void 0 === a[t] || s.override) return a[t] = r, delete n[t], o(t, r), void a.emit("import", t, function () {
          return r
        });
        if (!s.silent) throw new Error("Cannot import \"" + t + "\": already exists")
      }

      function o(e, t) {
        t && "function" == typeof t.transform ? (a.expression.transform[e] = t.transform, N(e) && (a.expression.mathWithTransform[e] = t.transform)) : (delete a.expression.transform[e], N(e) && (a.expression.mathWithTransform[e] = t))
      }

      function l(e) {
        delete a.expression.transform[e], N(e) ? a.expression.mathWithTransform[e] = a[e] : delete a.expression.mathWithTransform[e]
      }

      function p(e) {
        var t = function () {
          for (var t = [], n = 0, r = arguments.length, s; n < r; n++) s = arguments[n], t[n] = s && s.valueOf();
          return e.apply(a, t)
        };
        return e.transform && (t.transform = e.transform), t
      }

      function m(i, r) {
        if (Object(v.a)("Factories of type { name, factory } are deprecated since v6. Please create your factory functions using the math.factory function."), "string" == typeof i.name) {
          var s = i.name,
            o = s in a.expression.transform,
            p = i.path ? Object(u.k)(a, i.path) : a,
            m = p.hasOwnProperty(s) ? p[s] : void 0,
            c = function () {
              var a = t(i);
              if (a && "function" == typeof a.transform) throw new Error("Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path=\"expression.transform\"");
              if (g(m) && g(a)) return r.override || (a = e(m, a)), a;
              if (void 0 === m || r.override) return a;
              if (r.silent) return m;
              throw new Error("Cannot import \"" + s + "\": already exists")
            };
          !1 === i.lazy ? (p[s] = c(), o ? l(s) : ("expression.transform" === i.path || M(i)) && (a.expression.mathWithTransform[s] = c())) : (Object(u.h)(p, s, c), o ? l(s) : ("expression.transform" === i.path || M(i)) && Object(u.h)(a.expression.mathWithTransform, s, c));
          var d = i.path ? i.path + "." + i.name : i.name;
          n[d] = i, a.emit("import", s, c, i.path)
        } else t(i)
      }

      function c(t, i) {
        var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : t.fn;
        if (Object(h.b)(r, ".")) throw new Error("Factory name should not contain a nested path. Name: " + JSON.stringify(r));
        var s = A(t) ? a.expression.transform : a,
          o = r in a.expression.transform,
          p = s.hasOwnProperty(r) ? s[r] : void 0,
          m = function () {
            var n = {};
            t.dependencies.map(f.c).forEach(function (e) {
              if (Object(h.b)(e, ".")) throw new Error("Factory dependency should not contain a nested path. Name: " + JSON.stringify(e));
              "math" === e ? n.math = a : "mathWithTransform" === e ? n.mathWithTransform = a.expression.mathWithTransform : "classes" === e ? n.classes = a : n[e] = a[e]
            });
            var s = t(n);
            if (s && "function" == typeof s.transform) throw new Error("Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path=\"expression.transform\"");
            if (void 0 === p || i.override) return s;
            if (g(p) && g(s)) return e(p, s);
            if (i.silent) return p;
            throw new Error("Cannot import \"" + r + "\": already exists")
          };
        t.meta && !1 === t.meta.lazy ? (s[r] = m(), p && o ? l(r) : (A(t) || S(t)) && Object(u.h)(a.expression.mathWithTransform, r, function () {
          return s[r]
        })) : (Object(u.h)(s, r, m), p && o ? l(r) : (A(t) || S(t)) && Object(u.h)(a.expression.mathWithTransform, r, function () {
          return s[r]
        })), n[r] = t, a.emit("import", r, m)
      }

      function d(e) {
        return "function" == typeof e || "number" == typeof e || "string" == typeof e || "boolean" == typeof e || null === e || Object(x.L)(e) || Object(x.j)(e) || Object(x.e)(e) || Object(x.o)(e) || Object(x.v)(e) || Array.isArray(e)
      }

      function g(e) {
        return "function" == typeof e && "object" === r(e.signatures)
      }

      function y(e) {
        return "function" == typeof e && "string" == typeof e.signature
      }

      function N(e) {
        return !O.hasOwnProperty(e)
      }

      function M(e) {
        return e.path === void 0 && !O.hasOwnProperty(e.name)
      }

      function S(e) {
        return -1 === e.fn.indexOf(".") && !O.hasOwnProperty(e.fn) && (!e.meta || !e.meta.isClass)
      }

      function A(e) {
        return e !== void 0 && e.meta !== void 0 && !0 === e.meta.isTransformFunction || !1
      }
      var O = {
        expression: !0,
        type: !0,
        docs: !0,
        error: !0,
        json: !0,
        chain: !0
      };
      return function (e, t) {
        function a(e, n, i) {
          if (Object(u.g)(n)) m(n, t);
          else if (Array.isArray(n)) n.forEach(function (t) {
            return a(e, t)
          });
          else if ("object" === r(n))
            for (var s in n) n.hasOwnProperty(s) && a(e, n[s], s);
          else if (Object(f.b)(n) || void 0 !== i) {
            var o = Object(f.b)(n) ? A(n) ? n.fn + ".transform" : n.fn : i;
            if (Object(u.f)(e, o) && e[o] !== n && !t.silent) throw new Error("Cannot import \"" + o + "\" twice");
            e[o] = n
          } else if (!t.silent) throw new TypeError("Factory, Object, or Array expected")
        }
        var n = arguments.length;
        if (1 !== n && 2 !== n) throw new b.a("import", n, 1, 2);
        t || (t = {});
        var i = {};
        for (var o in a(i, e), i)
          if (i.hasOwnProperty(o)) {
            var l = i[o];
            if (Object(f.b)(l)) c(l, t);
            else if (d(l)) s(o, l, t);
            else if (!t.silent) throw new TypeError("Factory, Object, or Array expected")
          }
      }
    }

    function o(e, t) {
      function a(a) {
        if (a) {
          var n = Object(u.i)(e, u.a);
          m(a, "matrix", M), m(a, "number", S), Object(u.b)(e, a);
          var i = Object(u.i)(e, u.a),
            r = Object(u.i)(a, u.a);
          return t("config", i, n, r), i
        }
        return Object(u.i)(e, u.a)
      }
      return a.MATRIX_OPTIONS = M, a.NUMBER_OPTIONS = S, Object.keys(N).forEach(function (t) {
        Object.defineProperty(a, t, {
          get: function () {
            return e[t]
          },
          enumerable: !0,
          configurable: !0
        })
      }), a
    }

    function l(e, t) {
      return -1 !== e.indexOf(t)
    }

    function p(e, t) {
      return e.map(function (e) {
        return e.toLowerCase()
      }).indexOf(t.toLowerCase())
    }

    function m(e, t, a) {
      if (e[t] !== void 0 && !l(a, e[t])) {
        var n = p(a, e[t]); - 1 === n ? console.warn("Warning: Unknown value \"" + e[t] + "\" for configuration option \"" + t + "\". Available options: " + a.map(JSON.stringify).join(", ") + ".") : (console.warn("Warning: Wrong casing for configuration option \"" + t + "\", should be \"" + a[n] + "\" instead of \"" + e[t] + "\"."), e[t] = a[n])
      }
    }

    function c() {
      return c = Object.assign || function (e) {
        for (var t = 1, a; t < arguments.length; t++)
          for (var n in a = arguments[t], a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        return e
      }, c.apply(this, arguments)
    }

    function d(e, t) {
      function a(e) {
        if (Object(f.b)(e)) return e(r);
        var t = e[Object.keys(e)[0]];
        if (Object(f.b)(t)) return t(r);
        if (!Object(u.g)(e)) throw console.warn("Factory object with properties `type`, `name`, and `factory` expected", e), new Error("Factory object with properties `type`, `name`, and `factory` expected");
        var n = l.indexOf(e),
          s;
        return -1 === n ? (s = !0 === e.math ? e.factory(r.type, i, a, r.typed, r) : e.factory(r.type, i, a, r.typed), l.push(e), p.push(s)) : s = p[n], s
      }
      var i = c({}, N, t);
      if ("function" != typeof Object.create) throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility.");
      var r = n({
        isNumber: x.y,
        isComplex: x.j,
        isBigNumber: x.e,
        isFraction: x.o,
        isUnit: x.L,
        isString: x.I,
        isArray: x.b,
        isMatrix: x.v,
        isCollection: x.i,
        isDenseMatrix: x.n,
        isSparseMatrix: x.H,
        isRange: x.D,
        isIndex: x.t,
        isBoolean: x.g,
        isResultSet: x.G,
        isHelp: x.s,
        isFunction: x.p,
        isDate: x.m,
        isRegExp: x.F,
        isObject: x.z,
        isNull: x.x,
        isUndefined: x.K,
        isAccessorNode: x.a,
        isArrayNode: x.c,
        isAssignmentNode: x.d,
        isBlockNode: x.f,
        isConditionalNode: x.k,
        isConstantNode: x.l,
        isFunctionAssignmentNode: x.q,
        isFunctionNode: x.r,
        isIndexNode: x.u,
        isNode: x.w,
        isObjectNode: x.A,
        isOperatorNode: x.B,
        isParenthesisNode: x.C,
        isRangeNode: x.E,
        isSymbolNode: x.J,
        isChain: x.h
      });
      r.config = o(i, r.emit), r.expression = {
        transform: {},
        mathWithTransform: {
          config: r.config
        }
      };
      var l = [],
        p = [],
        m = {},
        g = s(function () {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
          return r.typed.apply(r.typed, t)
        }, a, r, m);
      r["import"] = g, r.on("config", function () {
        Object(u.l)(m).forEach(function (e) {
          e && e.meta && e.meta.recreateOnConfigChange && g(e, {
            override: !0
          })
        })
      }), r.create = d.bind(null, e), r.factory = f.a, r["import"](Object(u.l)(Object(u.c)(e)));
      return ["type.isNumber", "type.isComplex", "type.isBigNumber", "type.isFraction", "type.isUnit", "type.isString", "type.isArray", "type.isMatrix", "type.isDenseMatrix", "type.isSparseMatrix", "type.isCollection", "type.isRange", "type.isIndex", "type.isBoolean", "type.isResultSet", "type.isHelp", "type.isFunction", "type.isDate", "type.isRegExp", "type.isObject", "type.isNull", "type.isUndefined", "type.isAccessorNode", "type.isArrayNode", "type.isAssignmentNode", "type.isBlockNode", "type.isConditionalNode", "type.isConstantNode", "type.isFunctionAssignmentNode", "type.isFunctionNode", "type.isIndexNode", "type.isNode", "type.isObjectNode", "type.isOperatorNode", "type.isParenthesisNode", "type.isRangeNode", "type.isSymbolNode", "type.isChain", "type.BigNumber", "type.Chain", "type.Complex", "type.Fraction", "type.Matrix", "type.DenseMatrix", "type.SparseMatrix", "type.Spa", "type.FibonacciHeap", "type.ImmutableDenseMatrix", "type.Index", "type.Range", "type.ResultSet", "type.Unit", "type.Help", "type.Parser", "expression.parse", "expression.Parser", "expression.node.AccessorNode", "expression.node.ArrayNode", "expression.node.AssignmentNode", "expression.node.BlockNode", "expression.node.ConditionalNode", "expression.node.ConstantNode", "expression.node.IndexNode", "expression.node.FunctionAssignmentNode", "expression.node.FunctionNode", "expression.node.Node", "expression.node.ObjectNode", "expression.node.OperatorNode", "expression.node.ParenthesisNode", "expression.node.RangeNode", "expression.node.RelationalNode", "expression.node.SymbolNode", "json.reviver", "error.ArgumentsError", "error.DimensionError", "error.IndexError"].forEach(function (e) {
        var t = e.split("."),
          a = Object(h.j)(t),
          n = Object(h.l)(t),
          i = Object(u.k)(r, a);
        Object(u.h)(i, n, function () {
          return Object(v.a)("math.".concat(e, " is moved to math.").concat(n, " in v6.0.0. ") + "Please use the new location instead."), r[n]
        })
      }), Object(u.h)(r.expression, "docs", function () {
        throw new Error("math.expression.docs has been moved. Please import via \"import { docs } from 'mathjs'\"")
      }), r.ArgumentsError = b.a, r.DimensionError = A.a, r.IndexError = O.a, r
    }
    a.r(t);
    var u = a(4),
      g = a(18),
      y = a.n(g),
      x = a(1),
      f = a(0),
      h = a(2),
      b = a(13),
      v = a(8),
      N = {
        epsilon: 1e-12,
        matrix: "Matrix",
        number: "number",
        precision: 64,
        predictable: !1,
        randomSeed: null
      },
      M = ["Matrix", "Array"],
      S = ["number", "BigNumber", "Fraction"],
      A = a(6),
      O = a(10);
    a.d(t, "create", function () {
      return d
    })
  }])
});