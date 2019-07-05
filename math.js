! function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.math = t() : e.math = t()
}(this, function () {
  return function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var i = r[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var r = {};
    return t.m = e, t.c = r, t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, {
        enumerable: !0,
        get: n
      })
    }, t.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, t.t = function (e, r) {
      if (1 & r && (e = t(e)), 8 & r) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (t.r(n), Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }), 2 & r && "string" != typeof e)
        for (var i in e) t.d(n, i, function (t) {
          return e[t]
        }.bind(null, i));
      return n
    }, t.n = function (e) {
      var r = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return t.d(r, "a", r), r
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 19)
  }([function (e, t, r) {
    "use strict";

    function n(e, t, r, n) {
      function i(n) {
        var i = Object(o.j)(n, t.map(a));
        return function (e, t, r) {
          if (!t.filter(function (e) {
              return ! function (e) {
                return e && "?" === e[0]
              }(e)
            }).every(function (e) {
              return void 0 !== r[e]
            })) {
            var n = t.filter(function (e) {
              return void 0 === r[e]
            });
            throw new Error('Cannot create function "'.concat(e, '", ') + "some dependencies are missing: ".concat(n.map(function (e) {
              return '"'.concat(e, '"')
            }).join(", "), "."))
          }
        }(e, t, n), r(i)
      }
      return i.isFactory = !0, i.fn = e, i.dependencies = t.slice().sort(), n && (i.meta = n), i
    }

    function i(e) {
      return "function" == typeof e && "string" == typeof e.fn && Array.isArray(e.dependencies)
    }

    function a(e) {
      return e && "?" === e[0] ? e.slice(1) : e
    }
    r.d(t, "a", function () {
      return n
    }), r.d(t, "b", function () {
      return i
    }), r.d(t, "c", function () {
      return a
    });
    r(2);
    var o = r(4)
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function i(e) {
      return "number" == typeof e
    }

    function a(e) {
      return e && !0 === e.constructor.prototype.isBigNumber || !1
    }

    function o(e) {
      return e && "object" === n(e) && !0 === Object.getPrototypeOf(e).isComplex || !1
    }

    function s(e) {
      return e && "object" === n(e) && !0 === Object.getPrototypeOf(e).isFraction || !1
    }

    function u(e) {
      return e && !0 === e.constructor.prototype.isUnit || !1
    }

    function c(e) {
      return "string" == typeof e
    }

    function f(e) {
      return e && !0 === e.constructor.prototype.isMatrix || !1
    }

    function l(e) {
      return Array.isArray(e) || f(e)
    }

    function p(e) {
      return e && e.isDenseMatrix && !0 === e.constructor.prototype.isMatrix || !1
    }

    function m(e) {
      return e && e.isSparseMatrix && !0 === e.constructor.prototype.isMatrix || !1
    }

    function h(e) {
      return e && !0 === e.constructor.prototype.isRange || !1
    }

    function d(e) {
      return e && !0 === e.constructor.prototype.isIndex || !1
    }

    function y(e) {
      return "boolean" == typeof e
    }

    function g(e) {
      return e && !0 === e.constructor.prototype.isResultSet || !1
    }

    function b(e) {
      return e && !0 === e.constructor.prototype.isHelp || !1
    }

    function v(e) {
      return "function" == typeof e
    }

    function x(e) {
      return e instanceof Date
    }

    function w(e) {
      return e instanceof RegExp
    }

    function N(e) {
      return !(!e || "object" !== n(e) || e.constructor !== Object || o(e) || s(e))
    }

    function O(e) {
      return null === e
    }

    function M(e) {
      return void 0 === e
    }

    function E(e) {
      return e && !0 === e.isAccessorNode && !0 === e.constructor.prototype.isNode || !1
    }

    function j(e) {
      return e && !0 === e.isArrayNode && !0 === e.constructor.prototype.isNode || !1
    }

    function S(e) {
      return e && !0 === e.isAssignmentNode && !0 === e.constructor.prototype.isNode || !1
    }

    function A(e) {
      return e && !0 === e.isBlockNode && !0 === e.constructor.prototype.isNode || !1
    }

    function C(e) {
      return e && !0 === e.isConditionalNode && !0 === e.constructor.prototype.isNode || !1
    }

    function T(e) {
      return e && !0 === e.isConstantNode && !0 === e.constructor.prototype.isNode || !1
    }

    function _(e) {
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

    function k(e) {
      return e && !0 === e.isObjectNode && !0 === e.constructor.prototype.isNode || !1
    }

    function z(e) {
      return e && !0 === e.isOperatorNode && !0 === e.constructor.prototype.isNode || !1
    }

    function D(e) {
      return e && !0 === e.isParenthesisNode && !0 === e.constructor.prototype.isNode || !1
    }

    function R(e) {
      return e && !0 === e.isRangeNode && !0 === e.constructor.prototype.isNode || !1
    }

    function P(e) {
      return e && !0 === e.isSymbolNode && !0 === e.constructor.prototype.isNode || !1
    }

    function F(e) {
      return e && !0 === e.constructor.prototype.isChain || !1
    }

    function U(e) {
      var t = n(e);
      return "object" === t ? null === e ? "null" : Array.isArray(e) ? "Array" : e instanceof Date ? "Date" : e instanceof RegExp ? "RegExp" : a(e) ? "BigNumber" : o(e) ? "Complex" : s(e) ? "Fraction" : f(e) ? "Matrix" : u(e) ? "Unit" : d(e) ? "Index" : h(e) ? "Range" : g(e) ? "ResultSet" : B(e) ? e.type : F(e) ? "Chain" : b(e) ? "Help" : "Object" : "function" === t ? "Function" : t
    }
    r.d(t, "y", function () {
      return i
    }), r.d(t, "e", function () {
      return a
    }), r.d(t, "j", function () {
      return o
    }), r.d(t, "o", function () {
      return s
    }), r.d(t, "L", function () {
      return u
    }), r.d(t, "I", function () {
      return c
    }), r.d(t, "b", function () {
      return L
    }), r.d(t, "v", function () {
      return f
    }), r.d(t, "i", function () {
      return l
    }), r.d(t, "n", function () {
      return p
    }), r.d(t, "H", function () {
      return m
    }), r.d(t, "D", function () {
      return h
    }), r.d(t, "t", function () {
      return d
    }), r.d(t, "g", function () {
      return y
    }), r.d(t, "G", function () {
      return g
    }), r.d(t, "s", function () {
      return b
    }), r.d(t, "p", function () {
      return v
    }), r.d(t, "m", function () {
      return x
    }), r.d(t, "F", function () {
      return w
    }), r.d(t, "z", function () {
      return N
    }), r.d(t, "x", function () {
      return O
    }), r.d(t, "K", function () {
      return M
    }), r.d(t, "a", function () {
      return E
    }), r.d(t, "c", function () {
      return j
    }), r.d(t, "d", function () {
      return S
    }), r.d(t, "f", function () {
      return A
    }), r.d(t, "k", function () {
      return C
    }), r.d(t, "l", function () {
      return T
    }), r.d(t, "q", function () {
      return _
    }), r.d(t, "r", function () {
      return I
    }), r.d(t, "u", function () {
      return q
    }), r.d(t, "w", function () {
      return B
    }), r.d(t, "A", function () {
      return k
    }), r.d(t, "B", function () {
      return z
    }), r.d(t, "C", function () {
      return D
    }), r.d(t, "E", function () {
      return R
    }), r.d(t, "J", function () {
      return P
    }), r.d(t, "h", function () {
      return F
    }), r.d(t, "M", function () {
      return U
    });
    var L = Array.isArray
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      for (var t = []; Array.isArray(e);) t.push(e.length), e = e[0];
      return t
    }

    function i(e, t) {
      if (0 === t.length) {
        if (Array.isArray(e)) throw new E.a(e.length, 0)
      } else ! function e(t, r, n) {
        var i, a = t.length;
        if (a !== r[n]) throw new E.a(a, r[n]);
        if (n < r.length - 1)
          for (i = 0; i < a; i++) {
            var o = t[i];
            if (!Array.isArray(o)) throw new E.a(r.length - 1, r.length, "<");
            e(t[i], r, n + 1)
          } else
            for (i = 0; i < a; i++)
              if (Array.isArray(t[i])) throw new E.a(r.length + 1, r.length, ">")
      }(e, t, 0)
    }

    function a(e, t) {
      if (!Object(O.y)(e) || !Object(N.i)(e)) throw new TypeError("Index must be an integer (value: " + e + ")");
      if (0 > e || "number" == typeof t && e >= t) throw new j.a(e, t)
    }

    function o(e, t, r) {
      if (!Array.isArray(e) || !Array.isArray(t)) throw new TypeError("Array expected");
      if (0 === t.length) throw new Error("Resizing to scalar is not supported");
      return t.forEach(function (e) {
          if (!Object(O.y)(e) || !Object(N.i)(e) || 0 > e) throw new TypeError("Invalid size, must contain positive integers (size: " + Object(M.d)(t) + ")")
        }),
        function e(t, r, n, i) {
          var a, o, s = t.length,
            u = r[n],
            c = Math.min(s, u);
          if (t.length = u, n < r.length - 1) {
            var f = n + 1;
            for (a = 0; a < c; a++) o = t[a], Array.isArray(o) || (o = [o], t[a] = o), e(o, r, f, i);
            for (a = c; a < u; a++) o = [], t[a] = o, e(o, r, f, i)
          } else {
            for (a = 0; a < c; a++)
              for (; Array.isArray(t[a]);) t[a] = t[a][0];
            for (a = c; a < u; a++) t[a] = i
          }
        }(e, t, 0, void 0 === r ? 0 : r), e
    }

    function s(e, t) {
      function r(e) {
        return e.reduce(function (e, t) {
          return e * t
        })
      }
      var i, a = f(e);
      if (!Array.isArray(e) || !Array.isArray(t)) throw new TypeError("Array expected");
      if (0 === t.length) throw new E.a(0, r(n(e)), "!=");
      for (var o = 1, s = 0; s < t.length; s++) o *= t[s];
      if (a.length !== o) throw new E.a(r(t), r(n(e)), "!=");
      try {
        i = function (e, t) {
          for (var r, n, i = e, a = t.length - 1; 0 < a; a--) {
            n = t[a], r = [];
            for (var o = i.length / n, s = 0; s < o; s++) r.push(i.slice(s * n, (s + 1) * n));
            i = r
          }
          return i
        }(a, t)
      } catch (a) {
        if (a instanceof E.a) throw new E.a(r(t), r(n(e)), "!=");
        throw a
      }
      return i
    }

    function u(e, t) {
      for (var r = t || n(e); Array.isArray(e) && 1 === e.length;) e = e[0], r.shift();
      for (var i = r.length; 1 === r[i - 1];) i--;
      return i < r.length && (e = function e(t, r, n) {
        var i, a;
        if (n < r)
          for (i = 0, a = t.length; i < a; i++) t[i] = e(t[i], r, n + 1);
        else
          for (; Array.isArray(t);) t = t[0];
        return t
      }(e, i, 0), r.length = i), e
    }

    function c(e, t, r, i) {
      var a = i || n(e);
      if (r)
        for (var o = 0; o < r; o++) e = [e], a.unshift(1);
      for (e = function e(t, r, n) {
          var i, a;
          if (Array.isArray(t))
            for (i = 0, a = t.length; i < a; i++) t[i] = e(t[i], r, n + 1);
          else
            for (var o = n; o < r; o++) t = [t];
          return t
        }(e, t, 0); a.length < t;) a.push(1);
      return e
    }

    function f(e) {
      if (!Array.isArray(e)) return e;
      var t = [];
      return e.forEach(function e(r) {
        Array.isArray(r) ? r.forEach(e) : t.push(r)
      }), t
    }

    function l(e, t) {
      return Array.prototype.map.call(e, t)
    }

    function p(e, t) {
      Array.prototype.forEach.call(e, t)
    }

    function m(e, t) {
      if (1 !== n(e).length) throw new Error("Only one dimensional matrices supported");
      return Array.prototype.filter.call(e, t)
    }

    function h(e, t) {
      if (1 !== n(e).length) throw new Error("Only one dimensional matrices supported");
      return Array.prototype.filter.call(e, function (e) {
        return t.test(e)
      })
    }

    function d(e, t) {
      return Array.prototype.join.call(e, t)
    }

    function y(e) {
      if (!Array.isArray(e)) throw new TypeError("Array input expected");
      if (0 === e.length) return e;
      var t = [],
        r = 0;
      t[0] = {
        value: e[0],
        identifier: 0
      };
      for (var n = 1; n < e.length; n++) e[n] === e[n - 1] ? r++ : r = 0, t.push({
        value: e[n],
        identifier: r
      });
      return t
    }

    function g(e) {
      if (!Array.isArray(e)) throw new TypeError("Array input expected");
      if (0 === e.length) return e;
      for (var t = [], r = 0; r < e.length; r++) t.push(e[r].value);
      return t
    }

    function b(e, t) {
      for (var r, n = 0, i = 0; i < e.length; i++) {
        var a = e[i],
          o = Array.isArray(a);
        if (0 == i && o && (n = a.length), o && a.length !== n) return;
        var s = o ? b(a, t) : t(a);
        if (void 0 === r) r = s;
        else if (r !== s) return "mixed"
      }
      return r
    }

    function v(e) {
      return e[e.length - 1]
    }

    function x(e) {
      return e.slice(0, e.length - 1)
    }

    function w(e, t) {
      return -1 !== e.indexOf(t)
    }
    r.d(t, "a", function () {
      return n
    }), r.d(t, "r", function () {
      return i
    }), r.d(t, "s", function () {
      return a
    }), r.d(t, "o", function () {
      return o
    }), r.d(t, "n", function () {
      return s
    }), r.d(t, "p", function () {
      return u
    }), r.d(t, "q", function () {
      return c
    }), r.d(t, "e", function () {
      return f
    }), r.d(t, "m", function () {
      return l
    }), r.d(t, "f", function () {
      return p
    }), r.d(t, "c", function () {
      return m
    }), r.d(t, "d", function () {
      return h
    }), r.d(t, "k", function () {
      return d
    }), r.d(t, "i", function () {
      return y
    }), r.d(t, "g", function () {
      return g
    }), r.d(t, "h", function () {
      return b
    }), r.d(t, "l", function () {
      return v
    }), r.d(t, "j", function () {
      return x
    }), r.d(t, "b", function () {
      return w
    });
    var N = r(3),
      O = r(1),
      M = r(5),
      E = r(6),
      j = r(10)
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return !("boolean" != typeof e) || !!isFinite(e) && e === Math.round(e)
    }

    function i(e, t) {
      if ("function" == typeof t) return t(e);
      if (e === 1 / 0) return "Infinity";
      if (e === -1 / 0) return "-Infinity";
      if (isNaN(e)) return "NaN";
      var r, n = "auto";
      switch (t && (t.notation && (n = t.notation), Object(h.y)(t) ? r = t : Object(h.y)(t.precision) && (r = t.precision)), n) {
        case "fixed":
          return o(e, r);
        case "exponential":
          return s(e, r);
        case "engineering":
          return function (e, t) {
            if (isNaN(e) || !isFinite(e)) return e + "";
            var r = c(a(e), t),
              n = r.exponent,
              i = r.coefficients,
              o = 0 == n % 3 ? n : 0 > n ? n - 3 - n % 3 : n - n % 3;
            if (Object(h.y)(t))
              for (; t > i.length || n - o + 1 > i.length;) i.push(0);
            else
              for (var s = 0 <= n ? n : Math.abs(o); i.length - 1 < s;) i.push(0);
            for (var u = Math.abs(n - o), f = 1; 0 < u;) f++, u--;
            var l = i.slice(f).join(""),
              p = Object(h.y)(t) && l.length || l.match(/[1-9]/) ? "." + l : "",
              m = i.slice(0, f).join("") + p + "e" + (0 <= n ? "+" : "") + o.toString();
            return r.sign + m
          }(e, r);
        case "auto":
          if (t && t.exponential && (void 0 !== t.exponential.lower || void 0 !== t.exponential.upper)) {
            var i = Object(m.i)(t, function (e) {
              return e
            });
            return i.exponential = void 0, void 0 !== t.exponential.lower && (i.lowerExp = Math.round(Math.log(t.exponential.lower) / Math.LN10)), void 0 !== t.exponential.upper && (i.upperExp = Math.round(Math.log(t.exponential.upper) / Math.LN10)), console.warn("Deprecation warning: Formatting options exponential.lower and exponential.upper (minimum and maximum value) are replaced with exponential.lowerExp and exponential.upperExp (minimum and maximum exponent) since version 4.0.0. Replace " + JSON.stringify(t) + " with " + JSON.stringify(i)), u(e, r, i)
          }
          return u(e, r, t && t).replace(/((\.\d*?)(0+))($|e)/, function () {
            var e = arguments[2],
              t = arguments[4];
            return "." === e ? t : e + t
          });
        default:
          throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", or "fixed".')
      }
    }

    function a(e) {
      var t = (e + "").toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
      if (!t) throw new SyntaxError("Invalid number " + e);
      var r = t[1],
        n = t[2],
        i = parseFloat(t[4] || "0"),
        a = n.indexOf(".");
      i += -1 === a ? n.length - 1 : a - 1;
      var o = n.replace(".", "").replace(/^0*/, function (e) {
        return i -= e.length, ""
      }).replace(/0*$/, "").split("").map(function (e) {
        return parseInt(e)
      });
      return 0 === o.length && (o.push(0), i++), {
        sign: r,
        coefficients: o,
        exponent: i
      }
    }

    function o(e, t) {
      if (isNaN(e) || !isFinite(e)) return e + "";
      var r = a(e),
        n = "number" == typeof t ? c(r, r.exponent + 1 + t) : r,
        i = n.coefficients,
        o = n.exponent + 1,
        s = o + (t || 0);
      return i.length < s && (i = i.concat(f(s - i.length))), 0 > o && (i = f(1 - o).concat(i), o = 1), o < i.length && i.splice(o, 0, 0 === o ? "0." : "."), n.sign + i.join("")
    }

    function s(e, t) {
      if (isNaN(e) || !isFinite(e)) return e + "";
      var r = a(e),
        n = t ? c(r, t) : r,
        i = n.coefficients,
        o = n.exponent;
      i.length < t && (i = i.concat(f(t - i.length)));
      var s = i.shift();
      return n.sign + s + (0 < i.length ? "." + i.join("") : "") + "e" + (0 <= o ? "+" : "") + o
    }

    function u(e, t, r) {
      if (isNaN(e) || !isFinite(e)) return e + "";
      var n = r && void 0 !== r.lowerExp ? r.lowerExp : -3,
        i = r && void 0 !== r.upperExp ? r.upperExp : 5,
        o = a(e),
        u = t ? c(o, t) : o;
      if (u.exponent < n || u.exponent >= i) return s(e, t);
      var l = u.coefficients,
        p = u.exponent;
      l.length < t && (l = l.concat(f(t - l.length))), l = l.concat(f(p - l.length + 1 + (l.length < t ? t - l.length : 0)));
      var m = 0 < p ? p : 0;
      return m < (l = f(-p).concat(l)).length - 1 && l.splice(m + 1, 0, "."), u.sign + l.join("")
    }

    function c(e, t) {
      for (var r = {
          sign: e.sign,
          coefficients: e.coefficients,
          exponent: e.exponent
        }, n = r.coefficients; 0 >= t;) n.unshift(0), r.exponent++, t++;
      if (n.length > t && 5 <= n.splice(t, n.length - t)[0]) {
        var i = t - 1;
        for (n[i]++; 10 === n[i];) n.pop(), 0 == i && (n.unshift(0), r.exponent++, i++), n[--i]++
      }
      return r
    }

    function f(e) {
      for (var t = [], r = 0; r < e; r++) t.push(0);
      return t
    }

    function l(e) {
      return e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length
    }

    function p(e, t, r) {
      if (null == r) return e === t;
      if (e === t) return !0;
      if (isNaN(e) || isNaN(t)) return !1;
      if (isFinite(e) && isFinite(t)) {
        var n = Math.abs(e - t);
        return !!(n < w) || n <= Math.max(Math.abs(e), Math.abs(t)) * r
      }
      return !1
    }
    r.d(t, "i", function () {
      return n
    }), r.d(t, "n", function () {
      return d
    }), r.d(t, "l", function () {
      return y
    }), r.d(t, "j", function () {
      return g
    }), r.d(t, "k", function () {
      return b
    }), r.d(t, "d", function () {
      return v
    }), r.d(t, "g", function () {
      return x
    }), r.d(t, "h", function () {
      return i
    }), r.d(t, "q", function () {
      return o
    }), r.d(t, "f", function () {
      return l
    }), r.d(t, "m", function () {
      return p
    }), r.d(t, "a", function () {
      return N
    }), r.d(t, "b", function () {
      return O
    }), r.d(t, "c", function () {
      return M
    }), r.d(t, "e", function () {
      return E
    }), r.d(t, "o", function () {
      return j
    }), r.d(t, "p", function () {
      return S
    });
    var m = r(4),
      h = r(1),
      d = Math.sign || function (e) {
        return 0 < e ? 1 : 0 > e ? -1 : 0
      },
      y = Math.log2 || function (e) {
        return Math.log(e) / Math.LN2
      },
      g = Math.log10 || function (e) {
        return Math.log(e) / Math.LN10
      },
      b = Math.log1p || function (e) {
        return Math.log(e + 1)
      },
      v = Math.cbrt || function (e) {
        if (0 === e) return e;
        var t, r = 0 > e;
        return r && (e = -e), isFinite(e) ? t = (e / ((t = Math.exp(Math.log(e) / 3)) * t) + 2 * t) / 3 : t = e, r ? -t : t
      },
      x = Math.expm1 || function (e) {
        return 2e-4 <= e || -2e-4 >= e ? Math.exp(e) - 1 : e + e * e / 2 + e * e * e / 6
      },
      w = Number.EPSILON || 2.220446049250313e-16,
      N = Math.acosh || function (e) {
        return Math.log(Math.sqrt(e * e - 1) + e)
      },
      O = Math.asinh || function (e) {
        return Math.log(Math.sqrt(e * e + 1) + e)
      },
      M = Math.atanh || function (e) {
        return Math.log((1 + e) / (1 - e)) / 2
      },
      E = Math.cosh || function (e) {
        return (Math.exp(e) + Math.exp(-e)) / 2
      },
      j = Math.sinh || function (e) {
        return (Math.exp(e) - Math.exp(-e)) / 2
      },
      S = Math.tanh || function (e) {
        var t = Math.exp(2 * e);
        return (t - 1) / (t + 1)
      }
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function i(e) {
      var t = n(e);
      if ("number" === t || "string" === t || "boolean" === t || null == e) return e;
      if ("function" == typeof e.clone) return e.clone();
      if (Array.isArray(e)) return e.map(function (e) {
        return i(e)
      });
      if (e instanceof Date) return new Date(e.valueOf());
      if (Object(y.e)(e)) return e;
      if (e instanceof RegExp) throw new TypeError("Cannot clone " + e);
      return a(e, i)
    }

    function a(e, t) {
      var r = {};
      for (var n in e) p(e, n) && (r[n] = t(e[n]));
      return r
    }

    function o(e, t) {
      for (var r in t) p(t, r) && (e[r] = t[r]);
      return e
    }

    function s(e, t) {
      if (Array.isArray(t)) throw new TypeError("Arrays are not supported by deepExtend");
      for (var r in t)
        if (p(t, r))
          if (t[r] && t[r].constructor === Object) void 0 === e[r] && (e[r] = {}), e[r] && e[r].constructor === Object ? s(e[r], t[r]) : e[r] = t[r];
          else {
            if (Array.isArray(t[r])) throw new TypeError("Arrays are not supported by deepExtend");
            e[r] = t[r]
          } return e
    }

    function u(e, t) {
      var r, n, i;
      if (Array.isArray(e)) {
        if (!Array.isArray(t)) return !1;
        if (e.length !== t.length) return !1;
        for (n = 0, i = e.length; n < i; n++)
          if (!u(e[n], t[n])) return !1;
        return !0
      }
      if ("function" == typeof e) return e === t;
      if (e instanceof Object) {
        if (Array.isArray(t) || !(t instanceof Object)) return !1;
        for (r in e)
          if (!(r in t && u(e[r], t[r]))) return !1;
        for (r in t)
          if (!(r in e && u(e[r], t[r]))) return !1;
        return !0
      }
      return e === t
    }

    function c(e) {
      var t = {};
      return function e(t, r) {
        for (var i in t)
          if (t.hasOwnProperty(i)) {
            var a = t[i];
            "object" === n(a) && null !== a ? e(a, r) : r[i] = a
          }
      }(e, t), t
    }

    function f(e, t, r) {
      var n, i = !0;
      Object.defineProperty(e, t, {
        get: function () {
          return i && (n = r(), i = !1), n
        },
        set: function (e) {
          n = e, i = !1
        },
        configurable: !0,
        enumerable: !0
      })
    }

    function l(e, t) {
      if (t && "string" == typeof t) return l(e, t.split("."));
      var r = e;
      if (t)
        for (var n, i = 0; i < t.length; i++)(n = t[i]) in r || (r[n] = {}), r = r[n];
      return r
    }

    function p(e, t) {
      return e && Object.hasOwnProperty.call(e, t)
    }

    function m(e) {
      return e && "function" == typeof e.factory
    }

    function h(e, t) {
      for (var r = {}, n = 0; n < t.length; n++) {
        var i = t[n],
          a = e[i];
        void 0 !== a && (r[i] = a)
      }
      return r
    }

    function d(e) {
      return Object.keys(e).map(function (t) {
        return e[t]
      })
    }
    r.d(t, "a", function () {
      return i
    }), r.d(t, "i", function () {
      return a
    }), r.d(t, "e", function () {
      return o
    }), r.d(t, "b", function () {
      return s
    }), r.d(t, "d", function () {
      return u
    }), r.d(t, "c", function () {
      return c
    }), r.d(t, "h", function () {
      return f
    }), r.d(t, "k", function () {
      return l
    }), r.d(t, "f", function () {
      return p
    }), r.d(t, "g", function () {
      return m
    }), r.d(t, "j", function () {
      return h
    }), r.d(t, "l", function () {
      return d
    });
    var y = r(1)
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if ("function" == typeof t) return t(e);
      if (!e.isFinite()) return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
      var r, a = "auto";
      switch (void 0 !== t && (t.notation && (a = t.notation), "number" == typeof t ? r = t : t.precision && (r = t.precision)), a) {
        case "fixed":
          return function (e, t) {
            return e.toFixed(t)
          }(e, r);
        case "exponential":
          return i(e, r);
        case "engineering":
          return function (e, t) {
            var r = e.e,
              n = 0 == r % 3 ? r : 0 > r ? r - 3 - r % 3 : r - r % 3,
              i = e.mul(Math.pow(10, -n)),
              a = i.toPrecision(t);
            return -1 !== a.indexOf("e") && (a = i.toString()), a + "e" + (0 <= r ? "+" : "") + n.toString()
          }(e, r);
        case "auto":
          if (t && t.exponential && (void 0 !== t.exponential.lower || void 0 !== t.exponential.upper)) {
            var o = Object(m.i)(t, function (e) {
              return e
            });
            return o.exponential = void 0, void 0 !== t.exponential.lower && (o.lowerExp = Math.round(Math.log(t.exponential.lower) / Math.LN10)), void 0 !== t.exponential.upper && (o.upperExp = Math.round(Math.log(t.exponential.upper) / Math.LN10)), console.warn("Deprecation warning: Formatting options exponential.lower and exponential.upper (minimum and maximum value) are replaced with exponential.lowerExp and exponential.upperExp (minimum and maximum exponent) since version 4.0.0. Replace " + JSON.stringify(t) + " with " + JSON.stringify(o)), n(e, o)
          }
          var s = t && void 0 !== t.lowerExp ? t.lowerExp : -3,
            u = t && void 0 !== t.upperExp ? t.upperExp : 5;
          if (e.isZero()) return "0";
          var c = e.toSignificantDigits(r),
            f = c.e;
          return (f >= s && f < u ? c.toFixed() : i(e, r)).replace(/((\.\d*?)(0+))($|e)/, function () {
            var e = arguments[2],
              t = arguments[4];
            return "." === e ? t : e + t
          });
        default:
          throw new Error('Unknown notation "' + a + '". Choose "auto", "exponential", or "fixed".')
      }
    }

    function i(e, t) {
      return void 0 === t ? e.toExponential() : e.toExponential(t - 1)
    }

    function a(e) {
      return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function o(e, t) {
      var r = e.length - t.length,
        n = e.length;
      return e.substring(r, n) === t
    }

    function s(e, t) {
      if ("number" == typeof e) return Object(p.h)(e, t);
      if (Object(l.e)(e)) return n(e, t);
      if (function (e) {
          return e && "object" === a(e) && "number" == typeof e.s && "number" == typeof e.n && "number" == typeof e.d || !1
        }(e)) return t && "decimal" === t.fraction ? e.toString() : e.s * e.n + "/" + e.d;
      if (Array.isArray(e)) return function e(t, r) {
        if (Array.isArray(t)) {
          for (var n = "[", i = t.length, a = 0; a < i; a++) 0 != a && (n += ", "), n += e(t[a], r);
          return n += "]"
        }
        return s(t, r)
      }(e, t);
      if (Object(l.I)(e)) return '"' + e + '"';
      if ("function" == typeof e) return e.syntax ? e.syntax + "" : "function";
      if (e && "object" === a(e)) {
        if ("function" == typeof e.format) return e.format(t);
        if (e && e.toString() !== {}.toString()) return e.toString();
        var r = [];
        for (var i in e) e.hasOwnProperty(i) && r.push('"' + i + '": ' + s(e[i], t));
        return "{" + r.join(", ") + "}"
      }
      return e + ""
    }

    function u(e) {
      for (var t = e + "", r = "", n = 0; n < t.length;) {
        var i = t.charAt(n);
        "\\" === i ? (r += i, n++, ("" === (i = t.charAt(n)) || -1 === '"\\/bfnrtu'.indexOf(i)) && (r += "\\"), r += i) : r += '"' === i ? '\\"' : i, n++
      }
      return '"' + r + '"'
    }

    function c(e) {
      var t = e + "";
      return t = t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function f(e, t) {
      if (!Object(l.I)(e)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + Object(l.M)(e) + ", index: 0)");
      if (!Object(l.I)(t)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + Object(l.M)(t) + ", index: 1)");
      return e === t ? 0 : e > t ? 1 : -1
    }
    var l = r(1),
      p = r(3),
      m = r(4);
    r.d(t, "b", function () {
      return o
    }), r.d(t, "d", function () {
      return s
    }), r.d(t, "e", function () {
      return u
    }), r.d(t, "c", function () {
      return c
    }), r.d(t, "a", function () {
      return f
    })
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
      this.actual = e, this.expected = t, this.relation = r, this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(t) ? "[" + t.join(", ") + "]" : t) + ")", this.stack = (new Error).stack
    }
    r.d(t, "a", function () {
      return n
    }), n.prototype = new RangeError, n.prototype.constructor = RangeError, n.prototype.name = "DimensionError", n.prototype.isDimensionError = !0
  }, , function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return n
    });
    var n = function () {
      var e = {};
      return function () {
        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        var i, a = r.join(", ");
        e[a] || (e[a] = !0, (i = console).warn.apply(i, ["Warning:"].concat(r)))
      }
    }()
  }, function (e, t) {
    var r;
    ! function () {
      "use strict";

      function n(e, t) {
        var r = Math.abs(e),
          n = Math.abs(t);
        return 0 === e ? Math.log(n) : 0 === t ? Math.log(r) : 3e3 > r && 3e3 > n ? .5 * Math.log(e * e + t * t) : Math.log(e / Math.cos(Math.atan2(t, e)))
      }

      function i(e, t) {
        if (!(this instanceof i)) return new i(e, t);
        var r = u(e, t);
        this.re = r.re, this.im = r.im
      }
      var a = function (e) {
          return .5 * (Math.exp(e) + Math.exp(-e))
        },
        o = function (e) {
          return .5 * (Math.exp(e) - Math.exp(-e))
        },
        s = function () {
          throw SyntaxError("Invalid Param")
        },
        u = function (e, t) {
          var r = {
            re: 0,
            im: 0
          };
          if (null == e) r.re = r.im = 0;
          else if (void 0 !== t) r.re = e, r.im = t;
          else switch (typeof e) {
            case "object":
              if ("im" in e && "re" in e) r.re = e.re, r.im = e.im;
              else if ("abs" in e && "arg" in e) {
                if (!Number.isFinite(e.abs) && Number.isFinite(e.arg)) return i.INFINITY;
                r.re = e.abs * Math.cos(e.arg), r.im = e.abs * Math.sin(e.arg)
              } else if ("r" in e && "phi" in e) {
                if (!Number.isFinite(e.r) && Number.isFinite(e.phi)) return i.INFINITY;
                r.re = e.r * Math.cos(e.phi), r.im = e.r * Math.sin(e.phi)
              } else 2 === e.length ? (r.re = e[0], r.im = e[1]) : s();
              break;
            case "string":
              r.im = r.re = 0;
              var n = e.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),
                a = 1,
                o = 0;
              null === n && s();
              for (var u, c = 0; c < n.length; c++) " " === (u = n[c]) || "\t" === u || "\n" === u || ("+" === u ? a++ : "-" === u ? o++ : "i" === u || "I" === u ? (0 === a + o && s(), " " === n[c + 1] || isNaN(n[c + 1]) ? r.im += parseFloat((o % 2 ? "-" : "") + "1") : (r.im += parseFloat((o % 2 ? "-" : "") + n[c + 1]), c++), a = o = 0) : ((0 === a + o || isNaN(u)) && s(), "i" === n[c + 1] || "I" === n[c + 1] ? (r.im += parseFloat((o % 2 ? "-" : "") + u), c++) : r.re += parseFloat((o % 2 ? "-" : "") + u), a = o = 0));
              0 < a + o && s();
              break;
            case "number":
              r.im = 0, r.re = e;
              break;
            default:
              s()
          }
          return isNaN(r.re) || isNaN(r.im), r
        };
      i.prototype = {
        re: 0,
        im: 0,
        sign: function () {
          var e = this.abs();
          return new i(this.re / e, this.im / e)
        },
        add: function (e, t) {
          var r = new i(e, t);
          return this.isInfinite() && r.isInfinite() ? i.NAN : this.isInfinite() || r.isInfinite() ? i.INFINITY : new i(this.re + r.re, this.im + r.im)
        },
        sub: function (e, t) {
          var r = new i(e, t);
          return this.isInfinite() && r.isInfinite() ? i.NAN : this.isInfinite() || r.isInfinite() ? i.INFINITY : new i(this.re - r.re, this.im - r.im)
        },
        mul: function (e, t) {
          var r = new i(e, t);
          return this.isInfinite() && r.isZero() || this.isZero() && r.isInfinite() ? i.NAN : this.isInfinite() || r.isInfinite() ? i.INFINITY : 0 === r.im && 0 === this.im ? new i(this.re * r.re, 0) : new i(this.re * r.re - this.im * r.im, this.re * r.im + this.im * r.re)
        },
        div: function (e, t) {
          var r = new i(e, t);
          if (this.isZero() && r.isZero() || this.isInfinite() && r.isInfinite()) return i.NAN;
          if (this.isInfinite() || r.isZero()) return i.INFINITY;
          if (this.isZero() || r.isInfinite()) return i.ZERO;
          e = this.re, t = this.im;
          var n, a, o = r.re,
            s = r.im;
          return 0 === s ? new i(e / o, t / o) : Math.abs(o) < Math.abs(s) ? new i((e * (a = o / s) + t) / (n = o * a + s), (t * a - e) / n) : new i((e + t * (a = s / o)) / (n = s * a + o), (t - e * a) / n)
        },
        pow: function (e, t) {
          var r = new i(e, t);
          if (e = this.re, t = this.im, r.isZero()) return i.ONE;
          if (0 === r.im) {
            if (0 === t && 0 <= e) return new i(Math.pow(e, r.re), 0);
            if (0 === e) switch ((r.re % 4 + 4) % 4) {
              case 0:
                return new i(Math.pow(t, r.re), 0);
              case 1:
                return new i(0, Math.pow(t, r.re));
              case 2:
                return new i(-Math.pow(t, r.re), 0);
              case 3:
                return new i(0, -Math.pow(t, r.re))
            }
          }
          if (0 === e && 0 === t && 0 < r.re && 0 <= r.im) return i.ZERO;
          var a = Math.atan2(t, e),
            o = n(e, t);
          return e = Math.exp(r.re * o - r.im * a), t = r.im * o + r.re * a, new i(e * Math.cos(t), e * Math.sin(t))
        },
        sqrt: function () {
          var e, t, r = this.re,
            n = this.im,
            a = this.abs();
          if (0 <= r) {
            if (0 === n) return new i(Math.sqrt(r), 0);
            e = .5 * Math.sqrt(2 * (a + r))
          } else e = Math.abs(n) / Math.sqrt(2 * (a - r));
          return t = 0 >= r ? .5 * Math.sqrt(2 * (a - r)) : Math.abs(n) / Math.sqrt(2 * (a + r)), new i(e, 0 > n ? -t : t)
        },
        exp: function () {
          var e = Math.exp(this.re);
          return this.im, new i(e * Math.cos(this.im), e * Math.sin(this.im))
        },
        expm1: function () {
          var e = this.re,
            t = this.im;
          return new i(Math.expm1(e) * Math.cos(t) + function (e) {
            var t = Math.PI / 4;
            if (e < -t || e > t) return Math.cos(e) - 1;
            var r = e * e;
            return r * (r * (1 / 24 + r * (-1 / 720 + r * (1 / 40320 + r * (-1 / 3628800 + r * (1 / 4790014600 + r * (-1 / 87178291200 + r * (1 / 20922789888e3))))))) - .5)
          }(t), Math.exp(e) * Math.sin(t))
        },
        log: function () {
          var e = this.re,
            t = this.im;
          return new i(n(e, t), Math.atan2(t, e))
        },
        abs: function () {
          return e = this.re, t = this.im, r = Math.abs(e), n = Math.abs(t), 3e3 > r && 3e3 > n ? Math.sqrt(r * r + n * n) : (r < n ? (r = n, n = e / t) : n = t / e, r * Math.sqrt(1 + n * n));
          var e, t, r, n
        },
        arg: function () {
          return Math.atan2(this.im, this.re)
        },
        sin: function () {
          var e = this.re,
            t = this.im;
          return new i(Math.sin(e) * a(t), Math.cos(e) * o(t))
        },
        cos: function () {
          var e = this.re,
            t = this.im;
          return new i(Math.cos(e) * a(t), -Math.sin(e) * o(t))
        },
        tan: function () {
          var e = 2 * this.re,
            t = 2 * this.im,
            r = Math.cos(e) + a(t);
          return new i(Math.sin(e) / r, o(t) / r)
        },
        cot: function () {
          var e = 2 * this.re,
            t = 2 * this.im,
            r = Math.cos(e) - a(t);
          return new i(-Math.sin(e) / r, o(t) / r)
        },
        sec: function () {
          var e = this.re,
            t = this.im,
            r = .5 * a(2 * t) + .5 * Math.cos(2 * e);
          return new i(Math.cos(e) * a(t) / r, Math.sin(e) * o(t) / r)
        },
        csc: function () {
          var e = this.re,
            t = this.im,
            r = .5 * a(2 * t) - .5 * Math.cos(2 * e);
          return new i(Math.sin(e) * a(t) / r, -Math.cos(e) * o(t) / r)
        },
        asin: function () {
          var e = this.re,
            t = this.im,
            r = new i(t * t - e * e + 1, -2 * e * t).sqrt(),
            n = new i(r.re - t, r.im + e).log();
          return new i(n.im, -n.re)
        },
        acos: function () {
          var e = this.re,
            t = this.im,
            r = new i(t * t - e * e + 1, -2 * e * t).sqrt(),
            n = new i(r.re - t, r.im + e).log();
          return new i(Math.PI / 2 - n.im, n.re)
        },
        atan: function () {
          var e = this.re,
            t = this.im;
          if (0 === e) {
            if (1 === t) return new i(0, 1 / 0);
            if (-1 === t) return new i(0, -1 / 0)
          }
          var r = e * e + (1 - t) * (1 - t),
            n = new i((1 - t * t - e * e) / r, -2 * e / r).log();
          return new i(-.5 * n.im, .5 * n.re)
        },
        acot: function () {
          var e = this.re,
            t = this.im;
          if (0 === t) return new i(Math.atan2(1, e), 0);
          var r = e * e + t * t;
          return 0 == r ? new i(0 === e ? 0 : e / 0, 0 === t ? 0 : -t / 0).atan() : new i(e / r, -t / r).atan()
        },
        asec: function () {
          var e = this.re,
            t = this.im;
          if (0 === e && 0 === t) return new i(0, 1 / 0);
          var r = e * e + t * t;
          return 0 == r ? new i(0 === e ? 0 : e / 0, 0 === t ? 0 : -t / 0).acos() : new i(e / r, -t / r).acos()
        },
        acsc: function () {
          var e = this.re,
            t = this.im;
          if (0 === e && 0 === t) return new i(Math.PI / 2, 1 / 0);
          var r = e * e + t * t;
          return 0 == r ? new i(0 === e ? 0 : e / 0, 0 === t ? 0 : -t / 0).asin() : new i(e / r, -t / r).asin()
        },
        sinh: function () {
          var e = this.re,
            t = this.im;
          return new i(o(e) * Math.cos(t), a(e) * Math.sin(t))
        },
        cosh: function () {
          var e = this.re,
            t = this.im;
          return new i(a(e) * Math.cos(t), o(e) * Math.sin(t))
        },
        tanh: function () {
          var e = 2 * this.re,
            t = 2 * this.im,
            r = a(e) + Math.cos(t);
          return new i(o(e) / r, Math.sin(t) / r)
        },
        coth: function () {
          var e = 2 * this.re,
            t = 2 * this.im,
            r = a(e) - Math.cos(t);
          return new i(o(e) / r, -Math.sin(t) / r)
        },
        csch: function () {
          var e = this.re,
            t = this.im,
            r = Math.cos(2 * t) - a(2 * e);
          return new i(-2 * o(e) * Math.cos(t) / r, 2 * a(e) * Math.sin(t) / r)
        },
        sech: function () {
          var e = this.re,
            t = this.im,
            r = Math.cos(2 * t) + a(2 * e);
          return new i(2 * a(e) * Math.cos(t) / r, -2 * o(e) * Math.sin(t) / r)
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
            t = e.im;
            e.im = -e.re, e.re = t
          }
          return e
        },
        atanh: function () {
          var e = this.re,
            t = this.im,
            r = 1 - e,
            a = 1 + e,
            o = r * r + t * t,
            s = 0 === o ? new i(-1 === e ? 0 : e / 0, 0 === t ? 0 : t / 0) : new i((a * r - t * t) / o, (t * r + a * t) / o),
            u = s.re;
          return s.re = n(s.re, s.im) / 2, s.im = Math.atan2(s.im, u) / 2, 1 < e && 0 === t && (s.im = -s.im), s
        },
        acoth: function () {
          var e = this.re,
            t = this.im;
          if (0 === e && 0 === t) return new i(0, Math.PI / 2);
          var r = e * e + t * t;
          return 0 == r ? new i(0 === e ? 0 : e / 0, 0 === t ? 0 : -t / 0).atanh() : new i(e / r, -t / r).atanh()
        },
        acsch: function () {
          var e = this.re,
            t = this.im;
          if (0 === t) return new i(0 === e ? 1 / 0 : Math.log(e + Math.sqrt(e * e + 1)), 0);
          var r = e * e + t * t;
          return 0 == r ? new i(0 === e ? 0 : e / 0, 0 === t ? 0 : -t / 0).asinh() : new i(e / r, -t / r).asinh()
        },
        asech: function () {
          var e = this.re,
            t = this.im;
          if (this.isZero()) return i.INFINITY;
          var r = e * e + t * t;
          return 0 == r ? new i(0 === e ? 0 : e / 0, 0 === t ? 0 : -t / 0).acosh() : new i(e / r, -t / r).acosh()
        },
        inverse: function () {
          if (this.isZero()) return i.INFINITY;
          if (this.isInfinite()) return i.ZERO;
          var e = this.re,
            t = this.im,
            r = e * e + t * t;
          return new i(e / r, -t / r)
        },
        conjugate: function () {
          return new i(this.re, -this.im)
        },
        neg: function () {
          return new i(-this.re, -this.im)
        },
        ceil: function (e) {
          return e = Math.pow(10, e || 0), new i(Math.ceil(this.re * e) / e, Math.ceil(this.im * e) / e)
        },
        floor: function (e) {
          return e = Math.pow(10, e || 0), new i(Math.floor(this.re * e) / e, Math.floor(this.im * e) / e)
        },
        round: function (e) {
          return e = Math.pow(10, e || 0), new i(Math.round(this.re * e) / e, Math.round(this.im * e) / e)
        },
        equals: function (e, t) {
          var r = new i(e, t);
          return Math.abs(r.re - this.re) <= i.EPSILON && Math.abs(r.im - this.im) <= i.EPSILON
        },
        clone: function () {
          return new i(this.re, this.im)
        },
        toString: function () {
          var e = this.re,
            t = this.im,
            r = "";
          return this.isNaN() ? "NaN" : this.isZero() ? "0" : this.isInfinite() ? "Infinity" : (0 !== e && (r += e), 0 !== t && (0 === e ? 0 > t && (r += "-") : r += 0 > t ? " - " : " + ", 1 !== (t = Math.abs(t)) && (r += t), r += "i"), r || "0")
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
          return !(0 !== this.re && -0 !== this.re || 0 !== this.im && -0 !== this.im)
        },
        isFinite: function () {
          return isFinite(this.re) && isFinite(this.im)
        },
        isInfinite: function () {
          return !(this.isNaN() || this.isFinite())
        }
      }, i.ZERO = new i(0, 0), i.ONE = new i(1, 0), i.I = new i(0, 1), i.PI = new i(Math.PI, 0), i.E = new i(Math.E, 0), i.INFINITY = new i(1 / 0, 1 / 0), i.NAN = new i(NaN, NaN), i.EPSILON = 1e-16, void 0 === (r = function () {
        return i
      }.apply(t, [])) || (e.exports = r)
    }()
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
      this.index = e, 3 > arguments.length ? (this.min = 0, this.max = t) : (this.min = t, this.max = r), this.message = void 0 !== this.min && this.index < this.min ? "Index out of range (" + this.index + " < " + this.min + ")" : void 0 !== this.max && this.index >= this.max ? "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : "Index out of range (" + this.index + ")", this.stack = (new Error).stack
    }
    r.d(t, "a", function () {
      return n
    }), n.prototype = new RangeError, n.prototype.constructor = RangeError, n.prototype.name = "IndexError", n.prototype.isIndexError = !0
  }, function (e, t) {
    var r;
    ! function () {
      "use strict";

      function n(e) {
        function t() {
          var t = Error.apply(this, arguments);
          t.name = this.name = e, this.stack = t.stack, this.message = t.message
        }

        function r() {}
        return r.prototype = Error.prototype, t.prototype = new r, t
      }

      function i(e, t) {
        return isNaN(e = parseInt(e, 10)) && a(), e * t
      }

      function a() {
        throw new f
      }

      function o(e, t) {
        if (!e) return t;
        if (!t) return e;
        for (;;) {
          if (!(e %= t)) return t;
          if (!(t %= e)) return e
        }
      }

      function s(e, t) {
        return this instanceof s ? (l(e, t), e = s.REDUCE ? o(u.d, u.n) : 1, this.s = u.s, this.n = u.n / e, void(this.d = u.d / e)) : new s(e, t)
      }
      var u = {
          s: 1,
          n: 0,
          d: 1
        },
        c = s.DivisionByZero = n("DivisionByZero"),
        f = s.InvalidParameter = n("InvalidParameter"),
        l = function (e, t) {
          var r, n = 0,
            o = 1,
            s = 1,
            f = 0,
            l = 0,
            p = 0,
            m = 1,
            h = 1,
            d = 0,
            y = 1,
            g = 1,
            b = 1,
            v = 1e7;
          if (null == e);
          else if (void 0 !== t) s = (n = e) * (o = t);
          else switch (typeof e) {
            case "object":
              "d" in e && "n" in e ? (n = e.n, o = e.d, "s" in e && (n *= e.s)) : 0 in e ? (n = e[0], 1 in e && (o = e[1])) : a(), s = n * o;
              break;
            case "number":
              if (0 > e && (s = e, e = -e), 0 == e % 1) n = e;
              else if (0 < e) {
                for (1 <= e && (e /= h = Math.pow(10, Math.floor(1 + Math.log(e) / Math.LN10))); y <= v && b <= v;) {
                  if (e === (r = (d + g) / (y + b))) {
                    y + b <= v ? (n = d + g, o = y + b) : b > y ? (n = g, o = b) : (n = d, o = y);
                    break
                  }
                  e > r ? (d += g, y += b) : (g += d, b += y), y > v ? (n = g, o = b) : (n = d, o = y)
                }
                n *= h
              } else(isNaN(e) || isNaN(t)) && (o = n = NaN);
              break;
            case "string":
              if (null === (y = e.match(/\d+|./g)) && a(), "-" === y[d] ? (s = -1, d++) : "+" === y[d] && d++, y.length === d + 1 ? l = i(y[d++], s) : "." === y[d + 1] || "." === y[d] ? ("." !== y[d] && (f = i(y[d++], s)), (++d + 1 === y.length || "(" === y[d + 1] && ")" === y[d + 3] || "'" === y[d + 1] && "'" === y[d + 3]) && (l = i(y[d], s), m = Math.pow(10, y[d].length), d++), ("(" === y[d] && ")" === y[d + 2] || "'" === y[d] && "'" === y[d + 2]) && (p = i(y[d + 1], s), h = Math.pow(10, y[d + 1].length) - 1, d += 3)) : "/" === y[d + 1] || ":" === y[d + 1] ? (l = i(y[d], s), m = i(y[d + 2], 1), d += 3) : "/" === y[d + 3] && " " === y[d + 1] && (f = i(y[d], s), l = i(y[d + 2], s), m = i(y[d + 4], 1), d += 5), y.length <= d) {
                s = n = p + (o = m * h) * f + h * l;
                break
              }
              default:
                a()
          }
          if (0 === o) throw new c;
          u.s = 0 > s ? -1 : 1, u.n = Math.abs(n), u.d = Math.abs(o)
        };
      s.REDUCE = 1, s.prototype = {
        s: 1,
        n: 0,
        d: 1,
        abs: function () {
          return new s(this.n, this.d)
        },
        neg: function () {
          return new s(-this.s * this.n, this.d)
        },
        add: function (e, t) {
          return l(e, t), new s(this.s * this.n * u.d + u.s * this.d * u.n, this.d * u.d)
        },
        sub: function (e, t) {
          return l(e, t), new s(this.s * this.n * u.d - u.s * this.d * u.n, this.d * u.d)
        },
        mul: function (e, t) {
          return l(e, t), new s(this.s * u.s * this.n * u.n, this.d * u.d)
        },
        div: function (e, t) {
          return l(e, t), new s(this.s * u.s * this.n * u.d, this.d * u.n)
        },
        clone: function () {
          return new s(this)
        },
        mod: function (e, t) {
          return isNaN(this.n) || isNaN(this.d) ? new s(NaN) : void 0 === e ? new s(this.s * this.n % this.d, 1) : (l(e, t), 0 === u.n && 0 === this.d && s(0, 0), new s(this.s * (u.d * this.n) % (u.n * this.d), u.d * this.d))
        },
        gcd: function (e, t) {
          return l(e, t), new s(o(u.n, this.n) * o(u.d, this.d), u.d * this.d)
        },
        lcm: function (e, t) {
          return l(e, t), 0 === u.n && 0 === this.n ? new s : new s(u.n * this.n, o(u.n, this.n) * o(u.d, this.d))
        },
        ceil: function (e) {
          return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new s(NaN) : new s(Math.ceil(e * this.s * this.n / this.d), e)
        },
        floor: function (e) {
          return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new s(NaN) : new s(Math.floor(e * this.s * this.n / this.d), e)
        },
        round: function (e) {
          return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new s(NaN) : new s(Math.round(e * this.s * this.n / this.d), e)
        },
        inverse: function () {
          return new s(this.s * this.d, this.n)
        },
        pow: function (e) {
          return 0 > e ? new s(Math.pow(this.s * this.d, -e), Math.pow(this.n, -e)) : new s(Math.pow(this.s * this.n, e), Math.pow(this.d, e))
        },
        equals: function (e, t) {
          return l(e, t), this.s * this.n * u.d == u.s * u.n * this.d
        },
        compare: function (e, t) {
          l(e, t);
          var r = this.s * this.n * u.d - u.s * u.n * this.d;
          return (0 < r) - (0 > r)
        },
        simplify: function (e) {
          function t(e) {
            return 1 === e.length ? new s(e[0]) : t(e.slice(1)).inverse().add(e[0])
          }
          if (isNaN(this.n) || isNaN(this.d)) return this;
          var r = this.abs().toContinued();
          e = e || .001;
          for (var n, i = 0; i < r.length; i++)
            if ((n = t(r.slice(0, i + 1))).sub(this.abs()).abs().valueOf() < e) return n.mul(this.s);
          return this
        },
        divisible: function (e, t) {
          return l(e, t), u.n * this.d && !(this.n * u.d % (u.n * this.d))
        },
        valueOf: function () {
          return this.s * this.n / this.d
        },
        toFraction: function (e) {
          var t, r = "",
            n = this.n,
            i = this.d;
          return 0 > this.s && (r += "-"), 1 === i ? r += n : (e && 0 < (t = Math.floor(n / i)) && (r += t, r += " ", n %= i), r += n, r += "/", r += i), r
        },
        toLatex: function (e) {
          var t, r = "",
            n = this.n,
            i = this.d;
          return 0 > this.s && (r += "-"), 1 === i ? r += n : (e && 0 < (t = Math.floor(n / i)) && (r += t, n %= i), r += "\\frac{", r += n, r += "}{", r += i, r += "}"), r
        },
        toContinued: function () {
          var e, t = this.n,
            r = this.d,
            n = [];
          if (isNaN(this.n) || isNaN(this.d)) return n;
          do {
            n.push(Math.floor(t / r)), e = t % r, t = r, r = e
          } while (1 !== t);
          return n
        },
        toString: function (e) {
          var t, r = this.n,
            n = this.d;
          if (isNaN(r) || isNaN(n)) return "NaN";
          s.REDUCE || (r /= t = o(r, n), n /= t), e = e || 15;
          var i = function (e, t) {
              for (; 0 == t % 2; t /= 2);
              for (; 0 == t % 5; t /= 5);
              if (1 === t) return 0;
              for (var r = 10 % t, n = 1; 1 !== r; n++)
                if (r = 10 * r % t, 2e3 < n) return 0;
              return n
            }(0, n),
            a = function (e, t, r) {
              for (var n = 1, i = function (e, t, r) {
                  for (var n = 1; 0 < t; e = e * e % r, t >>= 1) 1 & t && (n = n * e % r);
                  return n
                }(10, r, t), a = 0; 300 > a; a++) {
                if (n === i) return a;
                n = 10 * n % t, i = 10 * i % t
              }
              return 0
            }(0, n, i),
            u = -1 === this.s ? "-" : "";
          if (u += 0 | r / n, r %= n, (r *= 10) && (u += "."), i) {
            for (var c = a; c--;) u += 0 | r / n, r %= n, r *= 10;
            u += "(";
            for (c = i; c--;) u += 0 | r / n, r %= n, r *= 10;
            u += ")"
          } else
            for (c = e; r && c--;) u += 0 | r / n, r %= n, r *= 10;
          return u
        }
      }, void 0 === (r = function () {
        return s
      }.apply(t, [])) || (e.exports = r)
    }()
  }, function (e) {
    e.exports = function e(t, r) {
      "use strict";
      var n, i, a = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
        o = /(^[ ]*|[ ]*$)/g,
        s = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
        u = /^0x[0-9a-f]+$/i,
        c = /^0/,
        f = function (t) {
          return e.insensitive && ("" + t).toLowerCase() || "" + t
        },
        l = f(t).replace(o, "") || "",
        p = f(r).replace(o, "") || "",
        m = l.replace(a, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
        h = p.replace(a, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
        d = parseInt(l.match(u), 16) || 1 !== m.length && l.match(s) && Date.parse(l),
        y = parseInt(p.match(u), 16) || d && p.match(s) && Date.parse(p) || null;
      if (y) {
        if (d < y) return -1;
        if (d > y) return 1
      }
      for (var g = 0, b = Math.max(m.length, h.length); g < b; g++) {
        if (n = !(m[g] || "").match(c) && parseFloat(m[g]) || m[g] || 0, i = !(h[g] || "").match(c) && parseFloat(h[g]) || h[g] || 0, isNaN(n) !== isNaN(i)) return isNaN(n) ? 1 : -1;
        if (typeof n != typeof i && (n += "", i += ""), n < i) return -1;
        if (n > i) return 1
      }
      return 0
    }
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r, i) {
      if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
      this.fn = e, this.count = t, this.min = r, this.max = i, this.message = "Wrong number of arguments in function " + e + " (" + t + " provided, " + r + (null != i ? "-" + i : "") + " expected)", this.stack = (new Error).stack
    }
    r.d(t, "a", function () {
      return n
    }), n.prototype = new Error, n.prototype.constructor = Error, n.prototype.name = "ArgumentsError", n.prototype.isArgumentsError = !0
  }, function (e, t) {
    "use strict";
    var r, n, i;
    n = [], r = function () {
      function e() {
        return !0
      }

      function t() {
        return !1
      }

      function r() {}
      return function n() {
        function i(e) {
          var t = P(V.types, function (t) {
            return t.name === e
          });
          if (t) return t;
          if ("any" === e) return $;
          var r = P(V.types, function (t) {
            return t.name.toLowerCase() === e.toLowerCase()
          });
          throw new TypeError('Unknown type "' + e + '"' + (r ? '. Did you mean "' + r.name + '"?' : ""))
        }

        function a(e) {
          return e === $ ? 999 : V.types.indexOf(e)
        }

        function o(e) {
          var t = P(V.types, function (t) {
            return t.test(e)
          });
          if (t) return t.name;
          throw new TypeError("Value has unknown type. Value: " + e)
        }

        function s(e) {
          return e.map(function (e) {
            var t = e.types.map(y);
            return (e.restParam ? "..." : "") + t.join("|")
          }).join(",")
        }

        function u(e, t) {
          var r = 0 === e.indexOf("..."),
            n = r ? 3 < e.length ? e.slice(3) : "any" : e,
            o = n.split("|").map(_).filter(I).filter(T),
            s = function (e, t) {
              var r = {};
              return e.forEach(function (e) {
                -1 !== t.indexOf(e.from) || -1 === t.indexOf(e.to) || r[e.from] || (r[e.from] = e)
              }), Object.keys(r).map(function (e) {
                return r[e]
              })
            }(t, o),
            u = o.map(function (e) {
              var t = i(e);
              return {
                name: e,
                typeIndex: a(t),
                test: t.test,
                conversion: null,
                conversionIndex: -1
              }
            }),
            c = s.map(function (e) {
              var r = i(e.from);
              return {
                name: e.from,
                typeIndex: a(r),
                test: r.test,
                conversion: e,
                conversionIndex: t.indexOf(e)
              }
            });
          return {
            types: u.concat(c),
            restParam: r
          }
        }

        function c(e, t, r) {
          var n = [];
          return "" !== e.trim() && (n = e.split(",").map(_).map(function (e, t, n) {
            var i = u(e, r);
            if (i.restParam && t !== n.length - 1) throw new SyntaxError('Unexpected rest parameter "' + e + '": only allowed for the last parameter');
            return i
          })), n.some(B) ? null : {
            params: n,
            fn: t
          }
        }

        function f(e) {
          var t = k(e);
          return !!t && t.restParam
        }

        function l(e) {
          return e.types.some(function (e) {
            return null != e.conversion
          })
        }

        function p(t) {
          if (!t || 0 === t.types.length) return e;
          if (1 === t.types.length) return i(t.types[0].name).test;
          if (2 === t.types.length) {
            var r = i(t.types[0].name).test,
              n = i(t.types[1].name).test;
            return function (e) {
              return r(e) || n(e)
            }
          }
          var a = t.types.map(function (e) {
            return i(e.name).test
          });
          return function (e) {
            for (var t = 0; t < a.length; t++)
              if (a[t](e)) return !0;
            return !1
          }
        }

        function m(e) {
          var t, r, n;
          if (f(e)) {
            var i = (t = function (e) {
                return e.slice(0, e.length - 1)
              }(e).map(p)).length,
              a = p(k(e));
            return function (e) {
              for (var r = 0; r < t.length; r++)
                if (!t[r](e[r])) return !1;
              return function (e) {
                for (var t = i; t < e.length; t++)
                  if (!a(e[t])) return !1;
                return !0
              }(e) && e.length >= i + 1
            }
          }
          return 0 === e.length ? function (e) {
            return 0 === e.length
          } : 1 === e.length ? (r = p(e[0]), function (e) {
            return r(e[0]) && 1 === e.length
          }) : 2 === e.length ? (r = p(e[0]), n = p(e[1]), function (e) {
            return r(e[0]) && n(e[1]) && 2 === e.length
          }) : (t = e.map(p), function (e) {
            for (var r = 0; r < t.length; r++)
              if (!t[r](e[r])) return !1;
            return e.length === t.length
          })
        }

        function h(e, t) {
          return t < e.params.length ? e.params[t] : f(e.params) ? k(e.params) : null
        }

        function d(e, t, r) {
          var n = h(e, t),
            i = n ? r ? n.types.filter(g) : n.types : [];
          return i.map(y)
        }

        function y(e) {
          return e.name
        }

        function g(e) {
          return null === e.conversion || void 0 === e.conversion
        }

        function b(e, t) {
          var r = function (e) {
            for (var t = {}, r = 0; r < e.length; r++) t[e[r]] = !0;
            return Object.keys(t)
          }(F(e, function (e) {
            return d(e, t, !1)
          }));
          return -1 === r.indexOf("any") ? r : ["any"]
        }

        function v(e, t, r) {
          var n, i, a, s = e || "unnamed",
            u = r;
          for (a = 0; a < t.length; a++) {
            var c = u.filter(function (e) {
              var r = p(h(e, a));
              return (a < e.params.length || f(e.params)) && r(t[a])
            });
            if (0 !== c.length) u = c;
            else if (0 < (i = b(u, a)).length) {
              var l = o(t[a]);
              return (n = new TypeError("Unexpected type of argument in function " + s + " (expected: " + i.join(" or ") + ", actual: " + l + ", index: " + a + ")")).data = {
                category: "wrongType",
                fn: s,
                index: a,
                actual: l,
                expected: i
              }, n
            }
          }
          var m = u.map(function (e) {
            return f(e.params) ? 1 / 0 : e.params.length
          });
          if (t.length < Math.min.apply(null, m)) return i = b(u, a), (n = new TypeError("Too few arguments in function " + s + " (expected: " + i.join(" or ") + ", index: " + t.length + ")")).data = {
            category: "tooFewArgs",
            fn: s,
            index: t.length,
            expected: i
          }, n;
          var d = Math.max.apply(null, m);
          return t.length > d ? ((n = new TypeError("Too many arguments in function " + s + " (expected: " + d + ", actual: " + t.length + ")")).data = {
            category: "tooManyArgs",
            fn: s,
            index: t.length,
            expectedLength: d
          }, n) : ((n = new TypeError('Arguments of type "' + t.join(", ") + '" do not match any of the defined signatures of function ' + s + ".")).data = {
            category: "mismatch",
            actual: t.map(o)
          }, n)
        }

        function x(e) {
          for (var t = 999, r = 0; r < e.types.length; r++) g(e.types[r]) && (t = Math.min(t, e.types[r].typeIndex));
          return t
        }

        function w(e) {
          for (var t = 999, r = 0; r < e.types.length; r++) g(e.types[r]) || (t = Math.min(t, e.types[r].conversionIndex));
          return t
        }

        function N(e, t) {
          var r;
          return 0 != (r = e.restParam - t.restParam) ? r : 0 != (r = l(e) - l(t)) ? r : 0 == (r = x(e) - x(t)) ? w(e) - w(t) : r
        }

        function O(e, t) {
          var r, n, i = Math.min(e.params.length, t.params.length);
          if (0 != (n = e.params.some(l) - t.params.some(l))) return n;
          for (r = 0; r < i; r++)
            if (0 != (n = l(e.params[r]) - l(t.params[r]))) return n;
          for (r = 0; r < i; r++)
            if (0 !== (n = N(e.params[r], t.params[r]))) return n;
          return e.params.length - t.params.length
        }

        function M(e, t) {
          var r = t;
          if (e.some(l)) {
            var n = f(e),
              i = e.map(E);
            r = function () {
              for (var e = [], r = n ? arguments.length - 1 : arguments.length, a = 0; a < r; a++) e[a] = i[a](arguments[a]);
              return n && (e[r] = arguments[r].map(i[r])), t.apply(null, e)
            }
          }
          var a = r;
          if (f(e)) {
            var o = e.length - 1;
            a = function () {
              return r.apply(null, z(arguments, 0, o).concat([z(arguments, o)]))
            }
          }
          return a
        }

        function E(e) {
          var t, r, n, a, o = [],
            s = [];
          switch (e.types.forEach(function (e) {
            e.conversion && (o.push(i(e.conversion.from).test), s.push(e.conversion.convert))
          }), s.length) {
            case 0:
              return function (e) {
                return e
              };
            case 1:
              return t = o[0], n = s[0],
                function (e) {
                  return t(e) ? n(e) : e
                };
            case 2:
              return t = o[0], r = o[1], n = s[0], a = s[1],
                function (e) {
                  return t(e) ? n(e) : r(e) ? a(e) : e
                };
            default:
              return function (e) {
                for (var t = 0; t < s.length; t++)
                  if (o[t](e)) return s[t](e);
                return e
              }
          }
        }

        function j(e) {
          var t = {};
          return e.forEach(function (e) {
            e.params.some(l) || S(e.params, !0).forEach(function (r) {
              t[s(r)] = e.fn
            })
          }), t
        }

        function S(e, t) {
          return function e(r, n, i) {
            if (n < r.length) {
              var a, o = r[n],
                s = t ? o.types.filter(g) : o.types;
              if (o.restParam) {
                var u = s.filter(g);
                a = u.length < s.length ? [u, s] : [s]
              } else a = s.map(function (e) {
                return [e]
              });
              return F(a, function (t) {
                return e(r, n + 1, i.concat([t]))
              })
            }
            var c = i.map(function (e, t) {
              return {
                types: e,
                restParam: t === r.length - 1 && f(r)
              }
            });
            return [c]
          }(e, 0, [])
        }

        function A(e, t) {
          for (var r = Math.max(e.params.length, t.params.length), n = 0; n < r; n++) {
            var i = d(e, n, !0),
              a = d(t, n, !0);
            if (!R(i, a)) return !1
          }
          var o = e.params.length,
            s = t.params.length,
            u = f(e.params),
            c = f(t.params);
          return u ? c ? o === s : s >= o : c ? o >= s : o === s
        }

        function C(e, n) {
          if (0 === Object.keys(n).length) throw new SyntaxError("No signatures provided");
          var i = [];
          Object.keys(n).map(function (e) {
            return c(e, n[e], V.conversions)
          }).filter(q).forEach(function (e) {
            var t = P(i, function (t) {
              return A(t, e)
            });
            if (t) throw new TypeError('Conflicting signatures "' + s(t.params) + '" and "' + s(e.params) + '".');
            i.push(e)
          });
          var a = F(i, function (e) {
            var t = e ? S(e.params, !1) : [];
            return t.map(function (t) {
              return {
                params: t,
                fn: e.fn
              }
            })
          }).filter(q);
          a.sort(O);
          var o = a[0] && 2 >= a[0].params.length && !f(a[0].params),
            u = a[1] && 2 >= a[1].params.length && !f(a[1].params),
            l = a[2] && 2 >= a[2].params.length && !f(a[2].params),
            h = a[3] && 2 >= a[3].params.length && !f(a[3].params),
            d = a[4] && 2 >= a[4].params.length && !f(a[4].params),
            y = a[5] && 2 >= a[5].params.length && !f(a[5].params),
            g = a.map(function (e) {
              return m(e.params)
            }),
            b = o ? p(a[0].params[0]) : t,
            x = u ? p(a[1].params[0]) : t,
            w = l ? p(a[2].params[0]) : t,
            N = h ? p(a[3].params[0]) : t,
            E = d ? p(a[4].params[0]) : t,
            C = y ? p(a[5].params[0]) : t,
            T = o ? p(a[0].params[1]) : t,
            _ = u ? p(a[1].params[1]) : t,
            I = l ? p(a[2].params[1]) : t,
            B = h ? p(a[3].params[1]) : t,
            k = d ? p(a[4].params[1]) : t,
            z = y ? p(a[5].params[1]) : t,
            D = a.map(function (e) {
              return M(e.params, e.fn)
            }),
            R = o ? D[0] : r,
            U = u ? D[1] : r,
            L = l ? D[2] : r,
            H = h ? D[3] : r,
            $ = d ? D[4] : r,
            G = y ? D[5] : r,
            Z = o ? a[0].params.length : -1,
            J = u ? a[1].params.length : -1,
            W = l ? a[2].params.length : -1,
            Y = h ? a[3].params.length : -1,
            X = d ? a[4].params.length : -1,
            Q = y ? a[5].params.length : -1,
            K = o && u && l && h && d && y ? 6 : 0,
            ee = a.length,
            te = function () {
              for (var t = K; t < ee; t++)
                if (g[t](arguments)) return D[t].apply(null, arguments);
              throw v(e, arguments, a)
            },
            re = function (e, t) {
              return arguments.length === Z && b(e) && T(t) ? R.apply(null, arguments) : arguments.length === J && x(e) && _(t) ? U.apply(null, arguments) : arguments.length === W && w(e) && I(t) ? L.apply(null, arguments) : arguments.length === Y && N(e) && B(t) ? H.apply(null, arguments) : arguments.length === X && E(e) && k(t) ? $.apply(null, arguments) : arguments.length === Q && C(e) && z(t) ? G.apply(null, arguments) : te.apply(null, arguments)
            };
          try {
            Object.defineProperty(re, "name", {
              value: e
            })
          } catch (e) {}
          return re.signatures = j(a), re
        }

        function T(e) {
          return -1 === V.ignore.indexOf(e)
        }

        function _(e) {
          return e.trim()
        }

        function I(e) {
          return !!e
        }

        function q(e) {
          return null !== e
        }

        function B(e) {
          return 0 === e.types.length
        }

        function k(e) {
          return e[e.length - 1]
        }

        function z(e, t, r) {
          return Array.prototype.slice.call(e, t, r)
        }

        function D(e, t) {
          return -1 !== e.indexOf(t)
        }

        function R(e, t) {
          for (var r = 0; r < e.length; r++)
            if (D(t, e[r])) return !0;
          return !1
        }

        function P(e, t) {
          for (var r = 0; r < e.length; r++)
            if (t(e[r])) return e[r]
        }

        function F(e, t) {
          return Array.prototype.concat.apply([], e.map(t))
        }

        function U(e) {
          for (var t, r = "", n = 0; n < e.length; n++)
            if (("object" == typeof (t = e[n]).signatures || "string" == typeof t.signature) && "" !== t.name)
              if ("" === r) r = t.name;
              else if (r !== t.name) {
            var i = new Error("Function names do not match (expected: " + r + ", actual: " + t.name + ")");
            throw i.data = {
              actual: t.name,
              expected: r
            }, i
          }
          return r
        }

        function L(e) {
          function t(e, t) {
            if (i.hasOwnProperty(e) && t !== i[e]) throw (r = new Error('Signature "' + e + '" is defined twice')).data = {
              signature: e
            }, r
          }
          for (var r, n, i = {}, a = 0; a < e.length; a++)
            if ("object" == typeof (n = e[a]).signatures)
              for (var o in n.signatures) n.signatures.hasOwnProperty(o) && (t(o, n.signatures[o]), i[o] = n.signatures[o]);
            else {
              if ("string" != typeof n.signature) throw (r = new TypeError("Function is no typed-function (index: " + a + ")")).data = {
                index: a
              }, r;
              t(n.signature, n), i[n.signature] = n
            } return i
        }
        var H = [{
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
          $ = {
            name: "any",
            test: e
          },
          G = [],
          Z = [],
          V = {
            types: H,
            conversions: Z,
            ignore: G
          };
        return (V = C("typed", {
          "string, Object": C,
          Object: function (e) {
            var t = [];
            for (var r in e) e.hasOwnProperty(r) && t.push(e[r]);
            var n = U(t);
            return C(n, e)
          },
          "...Function": function (e) {
            return C(U(e), L(e))
          },
          "string, ...Function": function (e, t) {
            return C(e, L(t))
          }
        })).create = n, V.types = H, V.conversions = Z, V.ignore = G, V.convert = function (e, t) {
          var r = o(e);
          if (t === r) return e;
          for (var n, i = 0; i < V.conversions.length; i++)
            if ((n = V.conversions[i]).from === r && n.to === t) return n.convert(e);
          throw new Error("Cannot convert from " + r + " to " + t)
        }, V.find = function (e, t) {
          if (!e.signatures) throw new TypeError("Function is no typed-function");
          var r;
          if ("string" == typeof t) {
            r = t.split(",");
            for (var n = 0; n < r.length; n++) r[n] = r[n].trim()
          } else {
            if (!Array.isArray(t)) throw new TypeError("String array or a comma separated string expected");
            r = t
          }
          var i = r.join(","),
            a = e.signatures[i];
          if (a) return a;
          throw new TypeError("Signature not found (signature: " + (e.name || "unnamed") + "(" + r.join(", ") + "))")
        }, V.addType = function (e, t) {
          if (!e || "string" != typeof e.name || "function" != typeof e.test) throw new TypeError("Object with properties {name: string, test: function} expected");
          if (!1 !== t)
            for (var r = 0; r < V.types.length; r++)
              if ("Object" === V.types[r].name) return void V.types.splice(r, 0, e);
          V.types.push(e)
        }, V.addConversion = function (e) {
          if (!e || "string" != typeof e.from || "string" != typeof e.to || "function" != typeof e.convert) throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
          V.conversions.push(e)
        }, V
      }()
    }, void 0 === (i = "function" == typeof r ? r.apply(t, n) : r) || (e.exports = i)
  }, function (e, t, r) {
    "use strict";
    (function (t) {
      function r(e, t) {
        for (var r, n = e + "", a = 0; a < n.length;) t[255 & a] = 255 & (r ^= 19 * t[255 & a]) + n.charCodeAt(a++);
        return i(t)
      }

      function n(e) {
        try {
          return o.crypto.getRandomValues(e = new Uint8Array(256)), i(e)
        } catch (e) {
          return [+new Date, o, o.navigator && o.navigator.plugins, o.screen, i(a)]
        }
      }

      function i(e) {
        return String.fromCharCode.apply(0, e)
      }
      var a = [],
        o = void 0 === t ? window : t,
        s = Math.pow(256, 6),
        u = Math.pow(2, 52),
        c = Math.random;
      e.exports = function (t, o) {
        if (o && !0 === o.global) return o.global = !1, Math.random = e.exports(t, o), o.global = !0, Math.random;
        var c = [],
          f = (r(function e(t, r) {
            var n, i = [],
              a = (typeof t)[0];
            if (r && "o" == a)
              for (n in t) try {
                i.push(e(t[n], r - 1))
              } catch (r) {}
            return i.length ? i : "s" == a ? t : t + "\0"
          }(o && o.entropy || !1 ? [t, i(a)] : 0 in arguments ? t : n(), 3), c), new function (e) {
            var t, r = e.length,
              n = this,
              i = 0,
              a = n.i = n.j = 0,
              o = n.S = [];
            for (r || (e = [r++]); i < 256;) o[i] = i++;
            for (i = 0; i < 256; i++) o[i] = o[a = 255 & a + e[i % r] + (t = o[i])], o[a] = t;
            (n.g = function (e) {
              for (var t, r = 0, i = n.i, a = n.j, o = n.S; e--;) t = o[i = 255 & i + 1], r = 256 * r + o[255 & (o[i] = o[a = 255 & a + t]) + (o[a] = t)];
              return n.i = i, n.j = a, r
            })(256)
          }(c));
        return r(i(f.S), a),
          function () {
            for (var e = f.g(6), t = s, r = 0; e < u;) e = 256 * (e + r), t *= 256, r = f.g(1);
            for (; e >= 2 * u;) e /= 2, t /= 2, r >>>= 1;
            return (e + r) / t
          }
      }, e.exports.resetGlobal = function () {
        Math.random = c
      }, r(Math.random(), a)
    }).call(this, r(20))
  }, function (e, t, r) {
    var n;
    ! function () {
      "use strict";

      function i(e) {
        var t, r, n, i = e.length - 1,
          a = "",
          o = e[0];
        if (0 < i) {
          for (a += o, t = 1; t < i; t++)(r = 7 - (n = e[t] + "").length) && (a += h(r)), a += n;
          (r = 7 - (n = (o = e[t]) + "").length) && (a += h(r))
        } else if (0 === o) return "0";
        for (; 0 == o % 10;) o /= 10;
        return a + o
      }

      function a(e, t, r) {
        if (e !== ~~e || e < t || e > r) throw Error("[DecimalError] Invalid argument: " + e)
      }

      function o(e, t, r, n) {
        var i, a, o, s;
        for (a = e[0]; 10 <= a; a /= 10) --t;
        return 0 > --t ? (t += 7, i = 0) : (i = Math.ceil((t + 1) / 7), t %= 7), a = ve(10, 7 - t), s = 0 | e[i] % a, null == n ? 3 > t ? (0 == t ? s = 0 | s / 100 : 1 == t && (s = 0 | s / 10), o = 4 > r && 99999 == s || 3 < r && 49999 == s || 5e4 == s || 0 == s) : o = (4 > r && s + 1 == a || 3 < r && s + 1 == a / 2) && (0 | e[i + 1] / a / 100) == ve(10, t - 2) - 1 || (s == a / 2 || 0 == s) && 0 == (0 | e[i + 1] / a / 100) : 4 > t ? (0 == t ? s = 0 | s / 1e3 : 1 == t ? s = 0 | s / 100 : 2 == t && (s = 0 | s / 10), o = (n || 4 > r) && 9999 == s || !n && 3 < r && 4999 == s) : o = ((n || 4 > r) && s + 1 == a || !n && 3 < r && s + 1 == a / 2) && (0 | e[i + 1] / a / 1e3) == ve(10, t - 3) - 1, o
      }

      function s(e, t, r) {
        for (var n, i, a = [0], o = 0, s = e.length; o < s;) {
          for (i = a.length; i--;) a[i] *= t;
          for (a[0] += "0123456789abcdef".indexOf(e.charAt(o++)), n = 0; n < a.length; n++) a[n] > r - 1 && (void 0 === a[n + 1] && (a[n + 1] = 0), a[n + 1] += 0 | a[n] / r, a[n] %= r)
        }
        return a.reverse()
      }

      function u(e, t, r, n) {
        var i, a, o, s, u, c, f, l, p, m = e.constructor;
        e: if (null != t) {
          if (!(l = e.d)) return e;
          for (i = 1, s = l[0]; 10 <= s; s /= 10) i++;
          if (0 > (a = t - i)) a += 7, o = t, u = 0 | (f = l[p = 0]) / ve(10, i - o - 1) % 10;
          else if ((p = Math.ceil((a + 1) / 7)) >= (s = l.length)) {
            if (!n) break e;
            for (; s++ <= p;) l.push(0);
            f = u = 0, i = 1, o = (a %= 7) - 7 + 1
          } else {
            for (f = s = l[p], i = 1; 10 <= s; s /= 10) i++;
            u = 0 > (o = (a %= 7) - 7 + i) ? 0 : 0 | f / ve(10, i - o - 1) % 10
          }
          if (n = n || 0 > t || void 0 !== l[p + 1] || (0 > o ? f : f % ve(10, i - o - 1)), c = 4 > r ? (u || n) && (0 == r || r == (0 > e.s ? 3 : 2)) : 5 < u || 5 == u && (4 == r || n || 6 == r && 1 & (0 < a ? 0 < o ? f / ve(10, i - o) : 0 : l[p - 1]) % 10 || r == (0 > e.s ? 8 : 7)), 1 > t || !l[0]) return l.length = 0, c ? (t -= e.e + 1, l[0] = ve(10, (7 - t % 7) % 7), e.e = -t || 0) : l[0] = e.e = 0, e;
          if (0 == a ? (l.length = p, s = 1, p--) : (l.length = p + 1, s = ve(10, 7 - a), l[p] = 0 < o ? (0 | f / ve(10, i - o) % ve(10, o)) * s : 0), c)
            for (;;) {
              if (0 == p) {
                for (a = 1, o = l[0]; 10 <= o; o /= 10) a++;
                for (o = l[0] += s, s = 1; 10 <= o; o /= 10) s++;
                a != s && (e.e++, 1e7 == l[0] && (l[0] = 1));
                break
              }
              if (l[p] += s, 1e7 != l[p]) break;
              l[p--] = 0, s = 1
            }
          for (a = l.length; 0 === l[--a];) l.pop()
        }
        return ge && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e
      }

      function c(e, t, r) {
        if (!e.isFinite()) return x(e);
        var n, a = e.e,
          o = i(e.d),
          s = o.length;
        return t ? (r && 0 < (n = r - s) ? o = o.charAt(0) + "." + o.slice(1) + h(n) : 1 < s && (o = o.charAt(0) + "." + o.slice(1)), o = o + (0 > e.e ? "e" : "e+") + e.e) : 0 > a ? (o = "0." + h(-a - 1) + o, r && 0 < (n = r - s) && (o += h(n))) : a >= s ? (o += h(a + 1 - s), r && 0 < (n = r - a - 1) && (o = o + "." + h(n))) : ((n = a + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && 0 < (n = r - s) && (a + 1 === s && (o += "."), o += h(n))), o
      }

      function f(e, t) {
        var r = e[0];
        for (t *= 7; 10 <= r; r /= 10) t++;
        return t
      }

      function l(e, t, r) {
        if (t > Me) throw ge = !0, r && (e.precision = r), Error("[DecimalError] Precision limit exceeded");
        return u(new e(he), t, 1, !0)
      }

      function p(e, t, r) {
        if (t > Ee) throw Error("[DecimalError] Precision limit exceeded");
        return u(new e(de), t, r, !0)
      }

      function m(e) {
        var t = e.length - 1,
          r = 7 * t + 1;
        if (t = e[t]) {
          for (; 0 == t % 10; t /= 10) r--;
          for (t = e[0]; 10 <= t; t /= 10) r++
        }
        return r
      }

      function h(e) {
        for (var t = ""; e--;) t += "0";
        return t
      }

      function d(e, t, r, n) {
        var i, a = new e(1),
          o = Math.ceil(n / 7 + 4);
        for (ge = !1;;) {
          if (r % 2 && (j((a = a.times(t)).d, o) && (i = !0)), 0 === (r = be(r / 2))) {
            r = a.d.length - 1, i && 0 === a.d[r] && ++a.d[r];
            break
          }
          j((t = t.times(t)).d, o)
        }
        return ge = !0, a
      }

      function y(e) {
        return 1 & e.d[e.d.length - 1]
      }

      function g(e, t, r) {
        for (var n, i = new e(t[0]), a = 0; ++a < t.length;) {
          if (!(n = new e(t[a])).s) {
            i = n;
            break
          }
          i[r](n) && (i = n)
        }
        return i
      }

      function b(e, t) {
        var r, n, a, s, c, f, l, p = 0,
          m = 0,
          h = 0,
          d = e.constructor,
          y = d.rounding,
          g = d.precision;
        if (!e.d || !e.d[0] || 17 < e.e) return new d(e.d ? e.d[0] ? 0 > e.s ? 0 : 1 / 0 : 1 : e.s ? 0 > e.s ? 0 : e : NaN);
        for (null == t ? (ge = !1, l = g) : l = t, f = new d(.03125); - 2 < e.e;) e = e.times(f), h += 5;
        for (l += n = 0 | Math.log(ve(2, h)) / Math.LN10 * 2 + 5, r = s = c = new d(1), d.precision = l;;) {
          if (s = u(s.times(e), l, 1), r = r.times(++m), i((f = c.plus(Se(s, r, l, 1))).d).slice(0, l) === i(c.d).slice(0, l)) {
            for (a = h; a--;) c = u(c.times(c), l, 1);
            if (null != t) return d.precision = g, c;
            if (!(3 > p && o(c.d, l - n, y, p))) return u(c, d.precision = g, y, ge = !0);
            d.precision = l += 10, r = s = f = new d(1), m = 0, p++
          }
          c = f
        }
      }

      function v(e, t) {
        var r, n, a, s, c, f, p, m, h, d, y, g = 1,
          b = e,
          x = b.d,
          w = b.constructor,
          N = w.rounding,
          O = w.precision;
        if (0 > b.s || !x || !x[0] || !b.e && 1 == x[0] && 1 == x.length) return new w(x && !x[0] ? -1 / 0 : 1 == b.s ? x ? 0 : b : NaN);
        if (null == t ? (ge = !1, h = O) : h = t, w.precision = h += 10, n = (r = i(x)).charAt(0), !(15e14 > Math.abs(s = b.e))) return m = l(w, h + 2, O).times(s + ""), b = v(new w(n + "." + r.slice(1)), h - 10).plus(m), w.precision = O, null == t ? u(b, O, N, ge = !0) : b;
        for (; 7 > n && 1 != n || 1 == n && 3 < r.charAt(1);) n = (r = i((b = b.times(e)).d)).charAt(0), g++;
        for (s = b.e, 1 < n ? (b = new w("0." + r), s++) : b = new w(n + "." + r.slice(1)), d = b, p = c = b = Se(b.minus(1), b.plus(1), h, 1), y = u(b.times(b), h, 1), a = 3;;) {
          if (c = u(c.times(y), h, 1), i((m = p.plus(Se(c, new w(a), h, 1))).d).slice(0, h) === i(p.d).slice(0, h)) {
            if (p = p.times(2), 0 !== s && (p = p.plus(l(w, h + 2, O).times(s + ""))), p = Se(p, new w(g), h, 1), null != t) return w.precision = O, p;
            if (!o(p.d, h - 10, N, f)) return u(p, w.precision = O, N, ge = !0);
            w.precision = h += 10, m = c = b = Se(d.minus(1), d.plus(1), h, 1), y = u(b.times(b), h, 1), a = f = 1
          }
          p = m, a += 2
        }
      }

      function x(e) {
        return e.s * e.s / 0 + ""
      }

      function w(e, t) {
        var r, n, i;
        for (-1 < (r = t.indexOf(".")) && (t = t.replace(".", "")), 0 < (n = t.search(/e/i)) ? (0 > r && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : 0 > r && (r = t.length), n = 0; 48 === t.charCodeAt(n); n++);
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if (t = t.slice(n, i)) {
          if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % 7, 0 > r && (n += 7), n < i) {
            for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i;) e.d.push(+t.slice(n, n += 7));
            n = 7 - (t = t.slice(n)).length
          } else n -= i;
          for (; n--;) t += "0";
          e.d.push(+t), ge && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
        } else e.e = 0, e.d = [0];
        return e
      }

      function N(e, t, r, n, i) {
        var a, o, s, u, c = e.precision,
          f = Math.ceil(c / 7);
        for (ge = !1, u = r.times(r), s = new e(n);;) {
          if (o = Se(s.times(u), new e(t++ * t++), c, 1), s = i ? n.plus(o) : n.minus(o), n = Se(o.times(u), new e(t++ * t++), c, 1), void 0 !== (o = s.plus(n)).d[f]) {
            for (a = f; o.d[a] === s.d[a] && a--;);
            if (-1 == a) break
          }
          a = s, s = n, n = o, o = a, 0
        }
        return ge = !0, o.d.length = f + 1, o
      }

      function O(e, t) {
        for (var r = e; --t;) r *= e;
        return r
      }

      function M(e, t) {
        var r, n = 0 > t.s,
          i = p(e, e.precision, 1),
          a = i.times(.5);
        if ((t = t.abs()).lte(a)) return me = n ? 4 : 1, t;
        if ((r = t.divToInt(i)).isZero()) me = n ? 3 : 2;
        else {
          if ((t = t.minus(r.times(i))).lte(a)) return me = y(r) ? n ? 2 : 3 : n ? 4 : 1, t;
          me = y(r) ? n ? 1 : 4 : n ? 3 : 2
        }
        return t.minus(i).abs()
      }

      function E(e, t, r, n) {
        var i, o, u, f, l, p, m, h, d, y = e.constructor,
          g = void 0 !== r;
        if (g ? (a(r, 1, 1e9), void 0 === n ? n = y.rounding : a(n, 0, 8)) : (r = y.precision, n = y.rounding), e.isFinite()) {
          for (g ? (i = 2, 16 == t ? r = 4 * r - 3 : 8 == t && (r = 3 * r - 2)) : i = t, 0 <= (u = (m = c(e)).indexOf(".")) && (m = m.replace(".", ""), (d = new y(1)).e = m.length - u, d.d = s(c(d), 10, i), d.e = d.d.length), o = l = (h = s(m, 10, i)).length; 0 == h[--l];) h.pop();
          if (h[0]) {
            if (0 > u ? o-- : ((e = new y(e)).d = h, e.e = o, h = (e = Se(e, d, r, n, 0, i)).d, o = e.e, p = pe), u = h[r], f = i / 2, p = p || void 0 !== h[r + 1], p = 4 > n ? (void 0 !== u || p) && (0 === n || n === (0 > e.s ? 3 : 2)) : u > f || u === f && (4 === n || p || 6 === n && 1 & h[r - 1] || n === (0 > e.s ? 8 : 7)), h.length = r, p)
              for (; ++h[--r] > i - 1;) h[r] = 0, r || (++o, h.unshift(1));
            for (l = h.length; !h[l - 1]; --l);
            for (u = 0, m = ""; u < l; u++) m += "0123456789abcdef".charAt(h[u]);
            if (g) {
              if (1 < l)
                if (16 == t || 8 == t) {
                  for (u = 16 == t ? 4 : 3, --l; l % u; l++) m += "0";
                  for (l = (h = s(m, i, t)).length; !h[l - 1]; --l);
                  for (u = 1, m = "1."; u < l; u++) m += "0123456789abcdef".charAt(h[u])
                } else m = m.charAt(0) + "." + m.slice(1);
              m = m + (0 > o ? "p" : "p+") + o
            } else if (0 > o) {
              for (; ++o;) m = "0" + m;
              m = "0." + m
            } else if (++o > l)
              for (o -= l; o--;) m += "0";
            else o < l && (m = m.slice(0, o) + "." + m.slice(o))
          } else m = g ? "0p+0" : "0";
          m = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + m
        } else m = x(e);
        return 0 > e.s ? "-" + m : m
      }

      function j(e, t) {
        if (e.length > t) return e.length = t, !0
      }

      function S(e) {
        return new this(e).abs()
      }

      function A(e) {
        return new this(e).acos()
      }

      function C(e) {
        return new this(e).acosh()
      }

      function T(e, t) {
        return new this(e).plus(t)
      }

      function _(e) {
        return new this(e).asin()
      }

      function I(e) {
        return new this(e).asinh()
      }

      function q(e) {
        return new this(e).atan()
      }

      function B(e) {
        return new this(e).atanh()
      }

      function k(e, t) {
        e = new this(e), t = new this(t);
        var r, n = this.precision,
          i = this.rounding,
          a = n + 4;
        return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (r = 0 > t.s ? p(this, n, i) : new this(0)).s = e.s : !e.d || t.isZero() ? (r = p(this, a, 1).times(.5)).s = e.s : 0 > t.s ? (this.precision = a, this.rounding = 1, r = this.atan(Se(e, t, a, 1)), t = p(this, a, 1), this.precision = n, this.rounding = i, r = 0 > e.s ? r.minus(t) : r.plus(t)) : r = this.atan(Se(e, t, a, 1)) : (r = p(this, a, 1).times(0 < t.s ? .25 : .75)).s = e.s : r = new this(NaN), r
      }

      function z(e) {
        return new this(e).cbrt()
      }

      function D(e) {
        return u(e = new this(e), e.e + 1, 2)
      }

      function R(e) {
        if (!e || "object" != typeof e) throw Error("[DecimalError] Object expected");
        var t, r, n, i = !0 === e.defaults,
          a = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -9e15, 0, "toExpPos", 0, 9e15, "maxE", 0, 9e15, "minE", -9e15, 0, "modulo", 0, 9];
        for (t = 0; t < a.length; t += 3)
          if (r = a[t], i && (this[r] = ye[r]), void 0 !== (n = e[r])) {
            if (!(be(n) === n && n >= a[t + 1] && n <= a[t + 2])) throw Error("[DecimalError] Invalid argument: " + r + ": " + n);
            this[r] = n
          } if (r = "crypto", i && (this[r] = ye[r]), void 0 !== (n = e[r])) {
          if (!0 !== n && !1 !== n && 0 !== n && 1 !== n) throw Error("[DecimalError] Invalid argument: " + r + ": " + n);
          if (n) {
            if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error("[DecimalError] crypto unavailable");
            this[r] = !0
          } else this[r] = !1
        }
        return this
      }

      function P(e) {
        return new this(e).cos()
      }

      function F(e) {
        return new this(e).cosh()
      }

      function U(e, t) {
        return new this(e).div(t)
      }

      function L(e) {
        return new this(e).exp()
      }

      function H(e) {
        return u(e = new this(e), e.e + 1, 3)
      }

      function $() {
        var e, t, r = new this(0);
        for (ge = !1, e = 0; e < arguments.length;)
          if ((t = new this(arguments[e++])).d) r.d && (r = r.plus(t.times(t)));
          else {
            if (t.s) return ge = !0, new this(1 / 0);
            r = t
          } return ge = !0, r.sqrt()
      }

      function G(e) {
        return e instanceof le || e && "[object Decimal]" === e.name || !1
      }

      function Z(e) {
        return new this(e).ln()
      }

      function V(e, t) {
        return new this(e).log(t)
      }

      function J(e) {
        return new this(e).log(2)
      }

      function W(e) {
        return new this(e).log(10)
      }

      function Y() {
        return g(this, arguments, "lt")
      }

      function X() {
        return g(this, arguments, "gt")
      }

      function Q(e, t) {
        return new this(e).mod(t)
      }

      function K(e, t) {
        return new this(e).mul(t)
      }

      function ee(e, t) {
        return new this(e).pow(t)
      }

      function te(e) {
        var t, r, n, i, o = 0,
          s = new this(1),
          u = [];
        if (void 0 === e ? e = this.precision : a(e, 1, 1e9), n = Math.ceil(e / 7), this.crypto)
          if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(n)); o < n;) 429e7 <= (i = t[o]) ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : u[o++] = i % 1e7;
          else {
            if (!crypto.randomBytes) throw Error("[DecimalError] crypto unavailable");
            for (t = crypto.randomBytes(n *= 4); o < n;) 214e7 <= (i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((127 & t[o + 3]) << 24)) ? crypto.randomBytes(4).copy(t, o) : (u.push(i % 1e7), o += 4);
            o = n / 4
          }
        else
          for (; o < n;) u[o++] = 0 | 1e7 * Math.random();
        for (e %= 7, (n = u[--o]) && e && (i = ve(10, 7 - e), u[o] = (0 | n / i) * i); 0 === u[o]; o--) u.pop();
        if (0 > o) r = 0, u = [0];
        else {
          for (r = -1; 0 === u[0]; r -= 7) u.shift();
          for (n = 1, i = u[0]; 10 <= i; i /= 10) n++;
          7 > n && (r -= 7 - n)
        }
        return s.e = r, s.d = u, s
      }

      function re(e) {
        return u(e = new this(e), e.e + 1, this.rounding)
      }

      function ne(e) {
        return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
      }

      function ie(e) {
        return new this(e).sin()
      }

      function ae(e) {
        return new this(e).sinh()
      }

      function oe(e) {
        return new this(e).sqrt()
      }

      function se(e, t) {
        return new this(e).sub(t)
      }

      function ue(e) {
        return new this(e).tan()
      }

      function ce(e) {
        return new this(e).tanh()
      }

      function fe(e) {
        return u(e = new this(e), e.e + 1, 1)
      }
      var le, pe, me, he = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        de = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        ye = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -9e15,
          maxE: 9e15,
          crypto: !1
        },
        ge = !0,
        be = Math.floor,
        ve = Math.pow,
        xe = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        we = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        Ne = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        Oe = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        Me = he.length - 1,
        Ee = de.length - 1,
        je = {
          name: "[object Decimal]"
        };
      je.absoluteValue = je.abs = function () {
        var e = new this.constructor(this);
        return 0 > e.s && (e.s = 1), u(e)
      }, je.ceil = function () {
        return u(new this.constructor(this), this.e + 1, 2)
      }, je.comparedTo = je.cmp = function (e) {
        var t, r, n, i, a = this,
          o = a.d,
          s = (e = new a.constructor(e)).d,
          u = a.s,
          c = e.s;
        if (!o || !s) return u && c ? u === c ? o === s ? 0 : !o ^ 0 > u ? 1 : -1 : u : NaN;
        if (!o[0] || !s[0]) return o[0] ? u : s[0] ? -c : 0;
        if (u !== c) return u;
        if (a.e !== e.e) return a.e > e.e ^ 0 > u ? 1 : -1;
        for (t = 0, r = (n = o.length) < (i = s.length) ? n : i; t < r; ++t)
          if (o[t] !== s[t]) return o[t] > s[t] ^ 0 > u ? 1 : -1;
        return n === i ? 0 : n > i ^ 0 > u ? 1 : -1
      }, je.cosine = je.cos = function () {
        var e, t, r = this,
          n = r.constructor;
        return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + 7, n.rounding = 1, r = function (e, t) {
          var r, n, i = t.d.length;
          32 > i ? n = (1 / O(4, r = Math.ceil(i / 3))).toString() : (r = 16, n = "2.3283064365386962890625e-10"), e.precision += r, t = N(e, 1, t.times(n), new e(1));
          for (var a, o = r; o--;) t = (a = t.times(t)).times(a).minus(a).times(8).plus(1);
          return e.precision -= r, t
        }(n, M(n, r)), n.precision = e, n.rounding = t, u(2 == me || 3 == me ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN)
      }, je.cubeRoot = je.cbrt = function () {
        var e, t, r, n, a, o, s, c, f, l, p = this,
          m = p.constructor;
        if (!p.isFinite() || p.isZero()) return new m(p);
        for (ge = !1, (o = p.s * ve(p.s * p, 1 / 3)) && Math.abs(o) != 1 / 0 ? n = new m(o.toString()) : (r = i(p.d), (o = ((e = p.e) - r.length + 1) % 3) && (r += 1 == o || -2 == o ? "0" : "00"), o = ve(r, 1 / 3), e = be((e + 1) / 3) - (e % 3 == (0 > e ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : r = (r = o.toExponential()).slice(0, r.indexOf("e") + 1) + e, (n = new m(r)).s = p.s), s = (e = m.precision) + 3;;)
          if (l = (f = (c = n).times(c).times(c)).plus(p), n = Se(l.plus(p).times(c), l.plus(f), s + 2, 1), i(c.d).slice(0, s) === (r = i(n.d)).slice(0, s)) {
            if ("9999" != (r = r.slice(s - 3, s + 1)) && (a || "4999" != r)) {
              +r && (+r.slice(1) || "5" != r.charAt(0)) || (u(n, e + 1, 1), t = !n.times(n).times(n).eq(p));
              break
            }
            if (!a && (u(c, e + 1, 0), c.times(c).times(c).eq(p))) {
              n = c;
              break
            }
            s += 4, a = 1
          } return ge = !0, u(n, e, m.rounding, t)
      }, je.decimalPlaces = je.dp = function () {
        var e, t = this.d,
          r = NaN;
        if (t) {
          if (r = 7 * ((e = t.length - 1) - be(this.e / 7)), e = t[e])
            for (; 0 == e % 10; e /= 10) r--;
          0 > r && (r = 0)
        }
        return r
      }, je.dividedBy = je.div = function (e) {
        return Se(this, new this.constructor(e))
      }, je.dividedToIntegerBy = je.divToInt = function (e) {
        var t = this.constructor;
        return u(Se(this, new t(e), 0, 1, 1), t.precision, t.rounding)
      }, je.equals = je.eq = function (e) {
        return 0 === this.cmp(e)
      }, je.floor = function () {
        return u(new this.constructor(this), this.e + 1, 3)
      }, je.greaterThan = je.gt = function (e) {
        return 0 < this.cmp(e)
      }, je.greaterThanOrEqualTo = je.gte = function (e) {
        var t = this.cmp(e);
        return 1 == t || 0 === t
      }, je.hyperbolicCosine = je.cosh = function () {
        var e, t, r, n, i, a = this,
          o = a.constructor,
          s = new o(1);
        if (!a.isFinite()) return new o(a.s ? 1 / 0 : NaN);
        if (a.isZero()) return s;
        r = o.precision, n = o.rounding, o.precision = r + Math.max(a.e, a.sd()) + 4, o.rounding = 1, 32 > (i = a.d.length) ? t = (1 / O(4, e = Math.ceil(i / 3))).toString() : (e = 16, t = "2.3283064365386962890625e-10"), a = N(o, 1, a.times(t), new o(1), !0);
        for (var c, f = e, l = new o(8); f--;) c = a.times(a), a = s.minus(c.times(l.minus(c.times(l))));
        return u(a, o.precision = r, o.rounding = n, !0)
      }, je.hyperbolicSine = je.sinh = function () {
        var e, t, r, n, i = this,
          a = i.constructor;
        if (!i.isFinite() || i.isZero()) return new a(i);
        if (t = a.precision, r = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, 3 > (n = i.d.length)) i = N(a, 2, i, i, !0);
        else {
          e = 16 < (e = 1.4 * Math.sqrt(n)) ? 16 : 0 | e, i = N(a, 2, i = i.times(1 / O(5, e)), i, !0);
          for (var o, s = new a(5), c = new a(16), f = new a(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(c.times(o).plus(f))))
        }
        return a.precision = t, a.rounding = r, u(i, t, r, !0)
      }, je.hyperbolicTangent = je.tanh = function () {
        var e, t, r = this,
          n = r.constructor;
        return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, Se(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s)
      }, je.inverseCosine = je.acos = function () {
        var e, t = this,
          r = t.constructor,
          n = t.abs().cmp(1),
          i = r.precision,
          a = r.rounding;
        return -1 === n ? t.isZero() ? p(r, i + 4, a).times(.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = p(r, i + 4, a).times(.5), r.precision = i, r.rounding = a, e.minus(t)) : 0 === n ? t.isNeg() ? p(r, i, a) : new r(0) : new r(NaN)
      }, je.inverseHyperbolicCosine = je.acosh = function () {
        var e, t, r = this,
          n = r.constructor;
        return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, ge = !1, r = r.times(r).minus(1).sqrt().plus(r), ge = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r)
      }, je.inverseHyperbolicSine = je.asinh = function () {
        var e, t, r = this,
          n = r.constructor;
        return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, ge = !1, r = r.times(r).plus(1).sqrt().plus(r), ge = !0, n.precision = e, n.rounding = t, r.ln())
      }, je.inverseHyperbolicTangent = je.atanh = function () {
        var e, t, r, n, i = this,
          a = i.constructor;
        return i.isFinite() ? 0 <= i.e ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? u(new a(i), e, t, !0) : (a.precision = r = n - i.e, i = Se(i.plus(1), new a(1).minus(i), r + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN)
      }, je.inverseSine = je.asin = function () {
        var e, t, r, n, i = this,
          a = i.constructor;
        return i.isZero() ? new a(i) : (t = i.abs().cmp(1), r = a.precision, n = a.rounding, -1 !== t ? 0 === t ? ((e = p(a, r + 4, n).times(.5)).s = i.s, e) : new a(NaN) : (a.precision = r + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = r, a.rounding = n, i.times(2)))
      }, je.inverseTangent = je.atan = function () {
        var e, t, r, n, i, a, o, s, c, f = this,
          l = f.constructor,
          m = l.precision,
          h = l.rounding;
        if (f.isFinite()) {
          if (f.isZero()) return new l(f);
          if (f.abs().eq(1) && m + 4 <= Ee) return (o = p(l, m + 4, h).times(.25)).s = f.s, o
        } else {
          if (!f.s) return new l(NaN);
          if (m + 4 <= Ee) return (o = p(l, m + 4, h).times(.5)).s = f.s, o
        }
        for (l.precision = s = m + 10, l.rounding = 1, e = r = Math.min(28, 0 | s / 7 + 2); e; --e) f = f.div(f.times(f).plus(1).sqrt().plus(1));
        for (ge = !1, t = Math.ceil(s / 7), n = 1, c = f.times(f), o = new l(f), i = f; - 1 !== e;)
          if (i = i.times(c), a = o.minus(i.div(n += 2)), i = i.times(c), void 0 !== (o = a.plus(i.div(n += 2))).d[t])
            for (e = t; o.d[e] === a.d[e] && e--;);
        return r && (o = o.times(2 << r - 1)), ge = !0, u(o, l.precision = m, l.rounding = h, !0)
      }, je.isFinite = function () {
        return !!this.d
      }, je.isInteger = je.isInt = function () {
        return !!this.d && be(this.e / 7) > this.d.length - 2
      }, je.isNaN = function () {
        return !this.s
      }, je.isNegative = je.isNeg = function () {
        return 0 > this.s
      }, je.isPositive = je.isPos = function () {
        return 0 < this.s
      }, je.isZero = function () {
        return !!this.d && 0 === this.d[0]
      }, je.lessThan = je.lt = function (e) {
        return 0 > this.cmp(e)
      }, je.lessThanOrEqualTo = je.lte = function (e) {
        return 1 > this.cmp(e)
      }, je.logarithm = je.log = function (e) {
        var t, r, n, a, s, c, f, p, m = this,
          h = m.constructor,
          d = h.precision,
          y = h.rounding;
        if (null == e) e = new h(10), t = !0;
        else {
          if (r = (e = new h(e)).d, 0 > e.s || !r || !r[0] || e.eq(1)) return new h(NaN);
          t = e.eq(10)
        }
        if (r = m.d, 0 > m.s || !r || !r[0] || m.eq(1)) return new h(r && !r[0] ? -1 / 0 : 1 == m.s ? r ? 0 : 1 / 0 : NaN);
        if (t)
          if (1 < r.length) s = !0;
          else {
            for (a = r[0]; 0 == a % 10;) a /= 10;
            s = 1 !== a
          } if (ge = !1, c = v(m, f = d + 5), n = t ? l(h, f + 10) : v(e, f), o((p = Se(c, n, f, 1)).d, a = d, y))
          do {
            if (c = v(m, f += 10), n = t ? l(h, f + 10) : v(e, f), p = Se(c, n, f, 1), !s) {
              1e14 == +i(p.d).slice(a + 1, a + 15) + 1 && (p = u(p, d + 1, 0));
              break
            }
          } while (o(p.d, a += 10, y));
        return ge = !0, u(p, d, y)
      }, je.minus = je.sub = function (e) {
        var t, r, n, i, a, o, s, c, l, p, m, h, d = this,
          y = d.constructor;
        if (e = new y(e), !d.d || !e.d) return d.s && e.s ? d.d ? e.s = -e.s : e = new y(e.d || d.s !== e.s ? d : NaN) : e = new y(NaN), e;
        if (d.s != e.s) return e.s = -e.s, d.plus(e);
        if (l = d.d, h = e.d, s = y.precision, c = y.rounding, !l[0] || !h[0]) {
          if (h[0]) e.s = -e.s;
          else {
            if (!l[0]) return new y(3 === c ? -0 : 0);
            e = new y(d)
          }
          return ge ? u(e, s, c) : e
        }
        if (r = be(e.e / 7), p = be(d.e / 7), l = l.slice(), a = p - r) {
          for ((m = 0 > a) ? (t = l, a = -a, o = h.length) : (t = h, r = p, o = l.length), a > (n = Math.max(Math.ceil(s / 7), o) + 2) && (a = n, t.length = 1), t.reverse(), n = a; n--;) t.push(0);
          t.reverse()
        } else {
          for ((m = (n = l.length) < (o = h.length)) && (o = n), n = 0; n < o; n++)
            if (l[n] != h[n]) {
              m = l[n] < h[n];
              break
            } a = 0
        }
        for (m && (t = l, l = h, h = t, e.s = -e.s), o = l.length, n = h.length - o; 0 < n; --n) l[o++] = 0;
        for (n = h.length; n > a;) {
          if (l[--n] < h[n]) {
            for (i = n; i && 0 === l[--i];) l[i] = 9999999;
            --l[i], l[n] += 1e7
          }
          l[n] -= h[n]
        }
        for (; 0 === l[--o];) l.pop();
        for (; 0 === l[0]; l.shift()) --r;
        return l[0] ? (e.d = l, e.e = f(l, r), ge ? u(e, s, c) : e) : new y(3 === c ? -0 : 0)
      }, je.modulo = je.mod = function (e) {
        var t, r = this,
          n = r.constructor;
        return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? u(new n(r), n.precision, n.rounding) : (ge = !1, 9 == n.modulo ? (t = Se(r, e.abs(), 0, 3, 1)).s *= e.s : t = Se(r, e, 0, n.modulo, 1), t = t.times(e), ge = !0, r.minus(t))
      }, je.naturalExponential = je.exp = function () {
        return b(this)
      }, je.naturalLogarithm = je.ln = function () {
        return v(this)
      }, je.negated = je.neg = function () {
        var e = new this.constructor(this);
        return e.s = -e.s, u(e)
      }, je.plus = je.add = function (e) {
        var t, r, n, i, a, o, s, c, l, p, m = this,
          h = m.constructor;
        if (e = new h(e), !m.d || !e.d) return m.s && e.s ? !m.d && (e = new h(e.d || m.s === e.s ? m : NaN)) : e = new h(NaN), e;
        if (m.s != e.s) return e.s = -e.s, m.minus(e);
        if (l = m.d, p = e.d, s = h.precision, c = h.rounding, !l[0] || !p[0]) return p[0] || (e = new h(m)), ge ? u(e, s, c) : e;
        if (a = be(m.e / 7), n = be(e.e / 7), l = l.slice(), i = a - n) {
          for (0 > i ? (r = l, i = -i, o = p.length) : (r = p, n = a, o = l.length), i > (o = (a = Math.ceil(s / 7)) > o ? a + 1 : o + 1) && (i = o, r.length = 1), r.reverse(); i--;) r.push(0);
          r.reverse()
        }
        for (0 > (o = l.length) - (i = p.length) && (i = o, r = p, p = l, l = r), t = 0; i;) t = 0 | (l[--i] = l[i] + p[i] + t) / 1e7, l[i] %= 1e7;
        for (t && (l.unshift(t), ++n), o = l.length; 0 == l[--o];) l.pop();
        return e.d = l, e.e = f(l, n), ge ? u(e, s, c) : e
      }, je.precision = je.sd = function (e) {
        var t, r = this;
        if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error("[DecimalError] Invalid argument: " + e);
        return r.d ? (t = m(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t
      }, je.round = function () {
        var e = this,
          t = e.constructor;
        return u(new t(e), e.e + 1, t.rounding)
      }, je.sine = je.sin = function () {
        var e, t, r = this,
          n = r.constructor;
        return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + 7, n.rounding = 1, r = function (e, t) {
          var r, n = t.d.length;
          if (3 > n) return N(e, 2, t, t);
          r = 16 < (r = 1.4 * Math.sqrt(n)) ? 16 : 0 | r, t = N(e, 2, t = t.times(1 / O(5, r)), t);
          for (var i, a = new e(5), o = new e(16), s = new e(20); r--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
          return t
        }(n, M(n, r)), n.precision = e, n.rounding = t, u(2 < me ? r.neg() : r, e, t, !0)) : new n(NaN)
      }, je.squareRoot = je.sqrt = function () {
        var e, t, r, n, a, o, s = this,
          c = s.d,
          f = s.e,
          l = s.s,
          p = s.constructor;
        if (1 !== l || !c || !c[0]) return new p(!l || 0 > l && (!c || c[0]) ? NaN : c ? s : 1 / 0);
        for (ge = !1, 0 == (l = Math.sqrt(+s)) || l == 1 / 0 ? (0 == ((t = i(c)).length + f) % 2 && (t += "0"), l = Math.sqrt(t), f = be((f + 1) / 2) - (0 > f || f % 2), l == 1 / 0 ? t = "1e" + f : t = (t = l.toExponential()).slice(0, t.indexOf("e") + 1) + f, n = new p(t)) : n = new p(l.toString()), r = (f = p.precision) + 3;;)
          if (n = (o = n).plus(Se(s, o, r + 2, 1)).times(.5), i(o.d).slice(0, r) === (t = i(n.d)).slice(0, r)) {
            if ("9999" != (t = t.slice(r - 3, r + 1)) && (a || "4999" != t)) {
              +t && (+t.slice(1) || "5" != t.charAt(0)) || (u(n, f + 1, 1), e = !n.times(n).eq(s));
              break
            }
            if (!a && (u(o, f + 1, 0), o.times(o).eq(s))) {
              n = o;
              break
            }
            r += 4, a = 1
          } return ge = !0, u(n, f, p.rounding, e)
      }, je.tangent = je.tan = function () {
        var e, t, r = this,
          n = r.constructor;
        return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, (r = r.sin()).s = 1, r = Se(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, u(2 == me || 4 == me ? r.neg() : r, e, t, !0)) : new n(NaN)
      }, je.times = je.mul = function (e) {
        var t, r, n, i, a, o, s, c, l, p = this,
          m = p.constructor,
          h = p.d,
          d = (e = new m(e)).d;
        if (e.s *= p.s, !(h && h[0] && d && d[0])) return new m(!e.s || h && !h[0] && !d || d && !d[0] && !h ? NaN : h && d ? 0 * e.s : e.s / 0);
        for (r = be(p.e / 7) + be(e.e / 7), (c = h.length) < (l = d.length) && (a = h, h = d, d = a, o = c, c = l, l = o), a = [], n = o = c + l; n--;) a.push(0);
        for (n = l; 0 <= --n;) {
          for (t = 0, i = c + n; i > n;) s = a[i] + d[n] * h[i - n - 1] + t, a[i--] = 0 | s % 1e7, t = 0 | s / 1e7;
          a[i] = 0 | (a[i] + t) % 1e7
        }
        for (; !a[--o];) a.pop();
        return t ? ++r : a.shift(), e.d = a, e.e = f(a, r), ge ? u(e, m.precision, m.rounding) : e
      }, je.toBinary = function (e, t) {
        return E(this, 2, e, t)
      }, je.toDecimalPlaces = je.toDP = function (e, t) {
        var r = this,
          n = r.constructor;
        return r = new n(r), void 0 === e ? r : (a(e, 0, 1e9), void 0 === t ? t = n.rounding : a(t, 0, 8), u(r, e + r.e + 1, t))
      }, je.toExponential = function (e, t) {
        var r, n = this,
          i = n.constructor;
        return void 0 === e ? r = c(n, !0) : (a(e, 0, 1e9), void 0 === t ? t = i.rounding : a(t, 0, 8), r = c(n = u(new i(n), e + 1, t), !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r
      }, je.toFixed = function (e, t) {
        var r, n, i = this,
          o = i.constructor;
        return void 0 === e ? r = c(i) : (a(e, 0, 1e9), void 0 === t ? t = o.rounding : a(t, 0, 8), r = c(n = u(new o(i), e + i.e + 1, t), !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r
      }, je.toFraction = function (e) {
        var t, r, n, a, o, s, u, c, f, l, p, h, d = this,
          y = d.d,
          g = d.constructor;
        if (!y) return new g(d);
        if (f = r = new g(1), s = (o = (t = new g(n = c = new g(0))).e = m(y) - d.e - 1) % 7, t.d[0] = ve(10, 0 > s ? 7 + s : s), null == e) e = 0 < o ? t : f;
        else {
          if (!(u = new g(e)).isInt() || u.lt(f)) throw Error("[DecimalError] Invalid argument: " + u);
          e = u.gt(t) ? 0 < o ? t : f : u
        }
        for (ge = !1, u = new g(i(y)), l = g.precision, g.precision = o = 7 * y.length * 2; p = Se(u, t, 0, 1, 1), 1 != (a = r.plus(p.times(n))).cmp(e);) r = n, n = a, a = f, f = c.plus(p.times(a)), c = a, a = t, t = u.minus(p.times(a)), u = a;
        return a = Se(e.minus(r), n, 0, 1, 1), c = c.plus(a.times(f)), r = r.plus(a.times(n)), c.s = f.s = d.s, h = 1 > Se(f, n, o, 1).minus(d).abs().cmp(Se(c, r, o, 1).minus(d).abs()) ? [f, n] : [c, r], g.precision = l, ge = !0, h
      }, je.toHexadecimal = je.toHex = function (e, t) {
        return E(this, 16, e, t)
      }, je.toNearest = function (e, t) {
        var r = this,
          n = r.constructor;
        if (r = new n(r), null == e) {
          if (!r.d) return r;
          e = new n(1), t = n.rounding
        } else {
          if (e = new n(e), void 0 === t ? t = n.rounding : a(t, 0, 8), !r.d) return e.s ? r : e;
          if (!e.d) return e.s && (e.s = r.s), e
        }
        return e.d[0] ? (ge = !1, r = Se(r, e, 0, t, 1).times(e), ge = !0, u(r)) : (e.s = r.s, r = e), r
      }, je.toNumber = function () {
        return +this
      }, je.toOctal = function (e, t) {
        return E(this, 8, e, t)
      }, je.toPower = je.pow = function (e) {
        var t, r, n, a, s, c, f = this,
          l = f.constructor,
          p = +(e = new l(e));
        if (!(f.d && e.d && f.d[0] && e.d[0])) return new l(ve(+f, p));
        if ((f = new l(f)).eq(1)) return f;
        if (n = l.precision, s = l.rounding, e.eq(1)) return u(f, n, s);
        if ((t = be(e.e / 7)) >= e.d.length - 1 && 9007199254740991 >= (r = 0 > p ? -p : p)) return a = d(l, f, r, n), 0 > e.s ? new l(1).div(a) : u(a, n, s);
        if (0 > (c = f.s)) {
          if (t < e.d.length - 1) return new l(NaN);
          if (0 == (1 & e.d[t]) && (c = 1), 0 == f.e && 1 == f.d[0] && 1 == f.d.length) return f.s = c, f
        }
        return (t = 0 != (r = ve(+f, p)) && isFinite(r) ? new l(r + "").e : be(p * (Math.log("0." + i(f.d)) / Math.LN10 + f.e + 1))) > l.maxE + 1 || t < l.minE - 1 ? new l(0 < t ? c / 0 : 0) : (ge = !1, l.rounding = f.s = 1, r = Math.min(12, (t + "").length), (a = b(e.times(v(f, n + r)), n)).d && (o((a = u(a, n + 5, 1)).d, n, s) && (t = n + 10, 1e14 == +i((a = u(b(e.times(v(f, t + r)), t), t + 5, 1)).d).slice(n + 1, n + 15) + 1 && (a = u(a, n + 1, 0)))), a.s = c, ge = !0, l.rounding = s, u(a, n, s))
      }, je.toPrecision = function (e, t) {
        var r, n = this,
          i = n.constructor;
        return void 0 === e ? r = c(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (a(e, 1, 1e9), void 0 === t ? t = i.rounding : a(t, 0, 8), r = c(n = u(new i(n), e, t), e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r
      }, je.toSignificantDigits = je.toSD = function (e, t) {
        var r = this.constructor;
        return void 0 === e ? (e = r.precision, t = r.rounding) : (a(e, 1, 1e9), void 0 === t ? t = r.rounding : a(t, 0, 8)), u(new r(this), e, t)
      }, je.toString = function () {
        var e = this,
          t = e.constructor,
          r = c(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
        return e.isNeg() && !e.isZero() ? "-" + r : r
      }, je.truncated = je.trunc = function () {
        return u(new this.constructor(this), this.e + 1, 1)
      }, je.valueOf = je.toJSON = function () {
        var e = this,
          t = e.constructor,
          r = c(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
        return e.isNeg() ? "-" + r : r
      };
      var Se = function () {
        function e(e, t, r) {
          var n, i = 0,
            a = e.length;
          for (e = e.slice(); a--;) n = e[a] * t + i, e[a] = 0 | n % r, i = 0 | n / r;
          return i && e.unshift(i), e
        }

        function t(e, t, r, n) {
          var i, a;
          if (r != n) a = r > n ? 1 : -1;
          else
            for (i = a = 0; i < r; i++)
              if (e[i] != t[i]) {
                a = e[i] > t[i] ? 1 : -1;
                break
              } return a
        }

        function r(e, t, r, n) {
          for (var i = 0; r--;) e[r] -= i, i = e[r] < t[r] ? 1 : 0, e[r] = i * n + e[r] - t[r];
          for (; !e[0] && 1 < e.length;) e.shift()
        }
        return function (n, i, a, o, s, c) {
          var f, l, p, m, h, d, y, g, b, v, x, w, N, O, M, E, j, S, A, C, T = n.constructor,
            _ = n.s == i.s ? 1 : -1,
            I = n.d,
            q = i.d;
          if (!(I && I[0] && q && q[0])) return new T(n.s && i.s && (I ? !q || I[0] != q[0] : q) ? I && 0 == I[0] || !q ? 0 * _ : _ / 0 : NaN);
          for (c ? (h = 1, l = n.e - i.e) : (c = 1e7, h = 7, l = be(n.e / h) - be(i.e / h)), A = q.length, j = I.length, v = (b = new T(_)).d = [], p = 0; q[p] == (I[p] || 0); p++);
          if (q[p] > (I[p] || 0) && l--, null == a ? (O = a = T.precision, o = T.rounding) : O = s ? a + (n.e - i.e) + 1 : a, 0 > O) v.push(1), d = !0;
          else {
            if (O = 0 | O / h + 2, p = 0, 1 == A) {
              for (m = 0, q = q[0], O++;
                (p < j || m) && O--; p++) M = m * c + (I[p] || 0), v[p] = 0 | M / q, m = 0 | M % q;
              d = m || p < j
            } else {
              for (1 < (m = 0 | c / (q[0] + 1)) && (q = e(q, m, c), I = e(I, m, c), A = q.length, j = I.length), E = A, w = (x = I.slice(0, A)).length; w < A;) x[w++] = 0;
              (C = q.slice()).unshift(0), S = q[0], q[1] >= c / 2 && ++S;
              do {
                m = 0, 0 > (f = t(q, x, A, w)) ? (N = x[0], A != w && (N = N * c + (x[1] || 0)), 1 < (m = 0 | N / S) ? (m >= c && (m = c - 1), 1 == (f = t(y = e(q, m, c), x, g = y.length, w = x.length)) && (m--, r(y, A < g ? C : q, g, c))) : (0 == m && (f = m = 1), y = q.slice()), (g = y.length) < w && y.unshift(0), r(x, y, w, c), -1 == f && (1 > (f = t(q, x, A, w = x.length)) && (m++, r(x, A < w ? C : q, w, c))), w = x.length) : 0 === f && (m++, x = [0]), v[p++] = m, f && x[0] ? x[w++] = I[E] || 0 : (x = [I[E]], w = 1)
              } while ((E++ < j || void 0 !== x[0]) && O--);
              d = void 0 !== x[0]
            }
            v[0] || v.shift()
          }
          if (1 == h) b.e = l, pe = d;
          else {
            for (p = 1, m = v[0]; 10 <= m; m /= 10) p++;
            b.e = p + l * h - 1, u(b, s ? a + b.e + 1 : a, o, d)
          }
          return b
        }
      }();
      (le = function e(t) {
        function r(e) {
          var t, n, i, a = this;
          if (!(a instanceof r)) return new r(e);
          if (a.constructor = r, e instanceof r) return a.s = e.s, void(ge ? !e.d || e.e > r.maxE ? (a.e = NaN, a.d = null) : e.e < r.minE ? (a.e = 0, a.d = [0]) : (a.e = e.e, a.d = e.d.slice()) : (a.e = e.e, a.d = e.d ? e.d.slice() : e.d));
          if ("number" == (i = typeof e)) {
            if (0 === e) return a.s = 0 > 1 / e ? -1 : 1, a.e = 0, void(a.d = [0]);
            if (0 > e ? (e = -e, a.s = -1) : a.s = 1, e === ~~e && 1e7 > e) {
              for (t = 0, n = e; 10 <= n; n /= 10) t++;
              return void(ge ? t > r.maxE ? (a.e = NaN, a.d = null) : t < r.minE ? (a.e = 0, a.d = [0]) : (a.e = t, a.d = [e]) : (a.e = t, a.d = [e]))
            }
            return 0 == 0 * e ? w(a, e.toString()) : (e || (a.s = NaN), a.e = NaN, void(a.d = null))
          }
          if ("string" !== i) throw Error("[DecimalError] Invalid argument: " + e);
          return 45 === (n = e.charCodeAt(0)) ? (e = e.slice(1), a.s = -1) : (43 === n && (e = e.slice(1)), a.s = 1), Oe.test(e) ? w(a, e) : function (e, t) {
            var r, n, i, a, o, u, c, l, p;
            if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
            if (we.test(t)) r = 16, t = t.toLowerCase();
            else if (xe.test(t)) r = 2;
            else {
              if (!Ne.test(t)) throw Error("[DecimalError] Invalid argument: " + t);
              r = 8
            }
            for (0 < (a = t.search(/p/i)) ? (c = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), o = 0 <= (a = t.indexOf(".")), n = e.constructor, o && (a = (u = (t = t.replace(".", "")).length) - a, i = d(n, new n(r), a, 2 * a)), a = p = (l = s(t, r, 1e7)).length - 1; 0 === l[a]; --a) l.pop();
            return 0 > a ? new n(0 * e.s) : (e.e = f(l, p), e.d = l, ge = !1, o && (e = Se(e, i, 4 * u)), c && (e = e.times(54 > Math.abs(c) ? ve(2, c) : le.pow(2, c))), ge = !0, e)
          }(a, e)
        }
        var n, i, a;
        if (r.prototype = je, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = R, r.clone = e, r.isDecimal = G, r.abs = S, r.acos = A, r.acosh = C, r.add = T, r.asin = _, r.asinh = I, r.atan = q, r.atanh = B, r.atan2 = k, r.cbrt = z, r.ceil = D, r.cos = P, r.cosh = F, r.div = U, r.exp = L, r.floor = H, r.hypot = $, r.ln = Z, r.log = V, r.log10 = W, r.log2 = J, r.max = Y, r.min = X, r.mod = Q, r.mul = K, r.pow = ee, r.random = te, r.round = re, r.sign = ne, r.sin = ie, r.sinh = ae, r.sqrt = oe, r.sub = se, r.tan = ue, r.tanh = ce, r.trunc = fe, void 0 === t && (t = {}), t && !0 !== t.defaults)
          for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length;) t.hasOwnProperty(i = a[n++]) || (t[i] = this[i]);
        return r.config(t), r
      }(ye)).default = le.Decimal = le, he = new le(he), de = new le(de), void 0 === (n = function () {
        return le
      }.call(t, r, t, e)) || (e.exports = n)
    }()
  }, function (e) {
    "use strict";
    var t = Object.assign || function (e) {
        for (var t, r = 1; r < arguments.length; r++)
          for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
      },
      r = {
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
        "\t": "\\qquad{}",
        "\r\n": "\\newline{}",
        "\n": "\\newline{}"
      },
      i = function (e, r) {
        return t({}, e, r)
      };
    e.exports = function (e) {
      for (var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, o = a.preserveFormatting, s = a.escapeMapFn, u = e + "", c = "", f = (void 0 === s ? i : s)(t({}, r), void 0 !== o && o ? t({}, n) : {}), l = Object.keys(f), p = function () {
          var e = !1;
          l.forEach(function (t, r) {
            e || u.length >= t.length && u.slice(0, t.length) === t && (c += f[l[r]], u = u.slice(t.length, u.length), e = !0)
          }), e || (c += u.slice(0, 1), u = u.slice(1, u.length))
        }; u;) p();
      return c
    }
  }, function (e) {
    function t() {}
    t.prototype = {
      on: function (e, t, r) {
        var n = this.e || (this.e = {});
        return (n[e] || (n[e] = [])).push({
          fn: t,
          ctx: r
        }), this
      },
      once: function (e, t, r) {
        function n() {
          i.off(e, n), t.apply(r, arguments)
        }
        var i = this;
        return n._ = t, this.on(e, n, r)
      },
      emit: function (e) {
        for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, i = r.length; n < i; n++) r[n].fn.apply(r[n].ctx, t);
        return this
      },
      off: function (e, t) {
        var r = this.e || (this.e = {}),
          n = r[e],
          i = [];
        if (n && t)
          for (var a = 0, o = n.length; a < o; a++) n[a].fn !== t && n[a].fn._ !== t && i.push(n[a]);
        return i.length ? r[e] = i : delete r[e], this
      }
    }, e.exports = t, e.exports.TinyEmitter = t
  }, function (e, t, r) {
    var n = r(21),
      i = (0, r(22).create)(n);
    e.exports = i
  }, function (e) {
    var t = function () {
      return this
    }();
    try {
      t = t || new Function("return this")()
    } catch (e) {
      "object" == typeof window && (t = window)
    }
    e.exports = t
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      throw new Error("Cannot convert value ".concat(e, " into a BigNumber: no class 'BigNumber' provided"))
    }

    function i(e) {
      throw new Error("Cannot convert value ".concat(e, " into a Complex number: no class 'Complex' provided"))
    }

    function a(e) {
      throw new Error("Cannot convert value ".concat(e, " into a Fraction, no class 'Fraction' provided."))
    }

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function s(e) {
      for (var t = 0; t < e.length; t++)
        if (Object(qt.i)(e[t])) return !0;
      return !1
    }

    function u(e, t) {
      Object(qt.v)(e) && (e = e.valueOf());
      for (var r, n = 0, i = e.length; n < i; n++) r = e[n], Array.isArray(r) ? u(r, t) : t(r)
    }

    function c(e, t, r) {
      return e && "function" == typeof e.map ? e.map(function (e) {
        return c(e, t, r)
      }) : t(e)
    }

    function f(e, t, r) {
      var n = Array.isArray(e) ? Object(Qt.a)(e) : e.size();
      if (0 > t || t >= n.length) throw new ir.a(t, n.length);
      return Object(qt.v)(e) ? e.create(l(e.valueOf(), t, r)) : l(e, t, r)
    }

    function l(e, t, r) {
      var n, i, a, o;
      if (0 >= t) {
        if (!Array.isArray(e[0])) {
          for (a = e[0], n = 1; n < e.length; n++) a = r(a, e[n]);
          return a
        }
        for (o = function (e) {
            var t, r, n = e.length,
              i = e[0].length,
              a = [];
            for (r = 0; r < i; r++) {
              var o = [];
              for (t = 0; t < n; t++) o.push(e[t][r]);
              a.push(o)
            }
            return a
          }(e), i = [], n = 0; n < o.length; n++) i[n] = l(o[n], t - 1, r);
        return i
      }
      for (i = [], n = 0; n < e.length; n++) i[n] = l(e[n], t - 1, r);
      return i
    }

    function p(e, t, r, n, i, a, o, s, u, c, f) {
      var l, p, m, h, d = e._values,
        y = e._index,
        g = e._ptr,
        b = o._index;
      if (n)
        for (p = g[t], m = g[t + 1], l = p; l < m; l++) r[h = y[l]] === a ? (n[h] = u ? s(d[l], n[h]) : s(n[h], d[l]), i[h] = a) : (r[h] = a, b.push(h), c ? (n[h] = u ? s(d[l], f) : s(f, d[l]), i[h] = a) : n[h] = d[l]);
      else
        for (p = g[t], m = g[t + 1], l = p; l < m; l++) r[h = y[l]] === a ? i[h] = a : (r[h] = a, b.push(h))
    }

    function m(e) {
      return 0 > e
    }

    function h(e) {
      return 0 < e
    }

    function d(e) {
      return 0 === e
    }

    function y(e) {
      return Number.isNaN(e)
    }

    function g(e, t, r) {
      if (null == r) return e.eq(t);
      if (e.eq(t)) return !0;
      if (e.isNaN() || t.isNaN()) return !1;
      if (e.isFinite() && t.isFinite()) {
        var n = e.minus(t).abs();
        if (n.isZero()) return !0;
        var i = e.constructor.max(e.abs(), t.abs());
        return n.lte(i.times(r))
      }
      return !1
    }

    function b(e) {
      return Math.abs(e)
    }

    function v(e, t) {
      return e + t
    }

    function x(e, t) {
      return e * t
    }

    function w(e) {
      return -e
    }

    function N(e) {
      return e
    }

    function O(e) {
      return Object(zt.d)(e)
    }

    function M(e) {
      return Math.ceil(e)
    }

    function E(e) {
      return e * e * e
    }

    function j(e) {
      return Math.exp(e)
    }

    function S(e) {
      return Object(zt.g)(e)
    }

    function A(e, t) {
      if (!Object(zt.i)(e) || !Object(zt.i)(t)) throw new Error("Parameters in function gcd must be integer numbers");
      for (var r; 0 !== t;) r = e % t, e = t, t = r;
      return 0 > e ? -e : e
    }

    function C(e, t) {
      if (!Object(zt.i)(e) || !Object(zt.i)(t)) throw new Error("Parameters in function lcm must be integer numbers");
      if (0 === e || 0 === t) return 0;
      for (var r, n = e * t; 0 !== t;) t = e % (r = t), e = r;
      return Math.abs(n / e)
    }

    function T(e) {
      return Math.log(e)
    }

    function _(e) {
      return Object(zt.j)(e)
    }

    function I(e) {
      return Object(zt.l)(e)
    }

    function q(e, t) {
      if (0 < t) return e - t * Math.floor(e / t);
      if (0 === t) return e;
      throw new Error("Cannot calculate mod for a negative divisor")
    }

    function B(e, t) {
      var r = 0 > t;
      if (r && (t = -t), 0 === t) throw new Error("Root must be non-zero");
      if (0 > e && 1 != Math.abs(t) % 2) throw new Error("Root must be odd when a is negative.");
      if (0 === e) return r ? 1 / 0 : 0;
      if (!isFinite(e)) return r ? 0 : e;
      var n = Math.pow(Math.abs(e), 1 / t);
      return n = 0 > e ? -n : n, r ? 1 / n : n
    }

    function k(e) {
      return Object(zt.n)(e)
    }

    function z(e) {
      return e * e
    }

    function D(e, t) {
      var r, n, i, a = 0,
        o = 1,
        s = 1,
        u = 0;
      if (!Object(zt.i)(e) || !Object(zt.i)(t)) throw new Error("Parameters in function xgcd must be integer numbers");
      for (; t;) i = e - (n = Math.floor(e / t)) * t, r = a, a = o - n * a, o = r, r = s, s = u - n * s, u = r, e = t, t = i;
      return 0 > e ? [-e, -o, -u] : [e, e ? o : 0, u]
    }

    function R(e, t) {
      return 1 > e * e && t === 1 / 0 || 1 < e * e && t === -1 / 0 ? 0 : Math.pow(e, t)
    }

    function P(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
      return parseFloat(Object(zt.q)(e, t))
    }

    function F(e, t, r) {
      var n, i, a;
      if (0 >= t) {
        if (!Array.isArray(e[0])) return r(e);
        for (a = function (e) {
            var t, r, n = e.length,
              i = e[0].length,
              a = [];
            for (r = 0; r < i; r++) {
              var o = [];
              for (t = 0; t < n; t++) o.push(e[t][r]);
              a.push(o)
            }
            return a
          }(e), i = [], n = 0; n < a.length; n++) i[n] = F(a[n], t - 1, r);
        return i
      }
      for (i = [], n = 0; n < e.length; n++) i[n] = F(e[n], t - 1, r);
      return i
    }

    function U(e, t) {
      var r = e.size(),
        n = t.size();
      if (r.length !== n.length) throw new tr.a(r.length, n.length)
    }

    function L(e, t) {
      if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitAnd");
      var r = e.constructor;
      if (e.isNaN() || t.isNaN()) return new r(NaN);
      if (e.isZero() || t.eq(-1) || e.eq(t)) return e;
      if (t.isZero() || e.eq(-1)) return t;
      if (!e.isFinite() || !t.isFinite()) {
        if (!e.isFinite() && !t.isFinite()) return e.isNegative() === t.isNegative() ? e : new r(0);
        if (!e.isFinite()) return t.isNegative() ? e : e.isNegative() ? new r(0) : t;
        if (!t.isFinite()) return e.isNegative() ? t : t.isNegative() ? new r(0) : e
      }
      return G(e, t, function (e, t) {
        return e & t
      })
    }

    function H(e) {
      if (e.isFinite() && !e.isInteger()) throw new Error("Integer expected in function bitNot");
      var t = e.constructor,
        r = t.precision;
      t.config({
        precision: 1e9
      });
      var n = e.plus(new t(1));
      return n.s = -n.s || null, t.config({
        precision: r
      }), n
    }

    function $(e, t) {
      if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitOr");
      var r = e.constructor;
      if (e.isNaN() || t.isNaN()) return new r(NaN);
      var n = new r(-1);
      return e.isZero() || t.eq(n) || e.eq(t) ? t : t.isZero() || e.eq(n) ? e : e.isFinite() && t.isFinite() ? G(e, t, function (e, t) {
        return e | t
      }) : !e.isFinite() && !e.isNegative() && t.isNegative() || e.isNegative() && !t.isNegative() && !t.isFinite() ? n : e.isNegative() && t.isNegative() ? e.isFinite() ? e : t : e.isFinite() ? t : e
    }

    function G(e, t, r) {
      var n, i, a, o, s, u = e.constructor,
        c = +(0 > e.s),
        f = +(0 > t.s);
      if (c) {
        n = Z(H(e));
        for (var l = 0; l < n.length; ++l) n[l] ^= 1
      } else n = Z(e);
      if (f) {
        i = Z(H(t));
        for (var p = 0; p < i.length; ++p) i[p] ^= 1
      } else i = Z(t);
      n.length <= i.length ? (a = n, o = i, s = c) : (a = i, o = n, s = f);
      var m = a.length,
        h = o.length,
        d = 1 ^ r(c, f),
        y = new u(1 ^ d),
        g = new u(1),
        b = new u(2),
        v = u.precision;
      for (u.config({
          precision: 1e9
        }); 0 < m;) r(a[--m], o[--h]) === d && (y = y.plus(g)), g = g.times(b);
      for (; 0 < h;) r(s, o[--h]) === d && (y = y.plus(g)), g = g.times(b);
      return u.config({
        precision: v
      }), 0 === d && (y.s = -y.s), y
    }

    function Z(e) {
      for (var t, r = e.d, n = r[0] + "", i = 1; i < r.length; ++i) {
        for (var a = 7 - (t = r[i] + "").length; a--;) t = "0" + t;
        n += t
      }
      for (var o = n.length;
        "0" === n.charAt(o);) o--;
      var s = e.e,
        u = n.slice(0, o + 1 || 1),
        c = u.length;
      if (0 < s)
        if (++s > c)
          for (s -= c; s--;) u += "0";
        else s < c && (u = u.slice(0, s) + "." + u.slice(s));
      for (var f, l = [0], p = 0; p < u.length;) {
        for (f = l.length; f--;) l[f] *= 10;
        l[0] += parseInt(u.charAt(p++));
        for (var m = 0; m < l.length; ++m) 1 < l[m] && ((null === l[m + 1] || void 0 === l[m + 1]) && (l[m + 1] = 0), l[m + 1] += l[m] >> 1, l[m] &= 1)
      }
      return l.reverse()
    }

    function V(e, t) {
      if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitXor");
      var r = e.constructor;
      if (e.isNaN() || t.isNaN()) return new r(NaN);
      if (e.isZero()) return t;
      if (t.isZero()) return e;
      if (e.eq(t)) return new r(0);
      var n = new r(-1);
      return e.eq(n) ? H(t) : t.eq(n) ? H(e) : e.isFinite() && t.isFinite() ? G(e, t, function (e, t) {
        return e ^ t
      }) : e.isFinite() || t.isFinite() ? new r(e.isNegative() === t.isNegative() ? 1 / 0 : -1 / 0) : n
    }

    function J(e, t) {
      if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function leftShift");
      var r = e.constructor;
      return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new r(NaN) : e.isZero() || t.isZero() ? e : e.isFinite() || t.isFinite() ? t.lt(55) ? e.times(Math.pow(2, t.toNumber()) + "") : e.times(new r(2).pow(t)) : new r(NaN)
    }

    function W(e, t) {
      if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function rightArithShift");
      var r = e.constructor;
      return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new r(NaN) : e.isZero() || t.isZero() ? e : t.isFinite() ? t.lt(55) ? e.div(Math.pow(2, t.toNumber()) + "").floor() : e.div(new r(2).pow(t)).floor() : e.isNegative() ? new r(-1) : e.isFinite() ? new r(0) : new r(NaN)
    }

    function Y(e, t) {
      if (!Object(zt.i)(e) || !Object(zt.i)(t)) throw new Error("Integers expected in function bitAnd");
      return e & t
    }

    function X(e) {
      if (!Object(zt.i)(e)) throw new Error("Integer expected in function bitNot");
      return ~e
    }

    function Q(e, t) {
      if (!Object(zt.i)(e) || !Object(zt.i)(t)) throw new Error("Integers expected in function bitOr");
      return e | t
    }

    function K(e, t) {
      if (!Object(zt.i)(e) || !Object(zt.i)(t)) throw new Error("Integers expected in function bitXor");
      return e ^ t
    }

    function ee(e, t) {
      if (!Object(zt.i)(e) || !Object(zt.i)(t)) throw new Error("Integers expected in function leftShift");
      return e << t
    }

    function te(e, t) {
      if (!Object(zt.i)(e) || !Object(zt.i)(t)) throw new Error("Integers expected in function rightArithShift");
      return e >> t
    }

    function re(e, t) {
      if (!Object(zt.i)(e) || !Object(zt.i)(t)) throw new Error("Integers expected in function rightLogShift");
      return e >>> t
    }

    function ne(e) {
      return !e
    }

    function ie(e, t) {
      return !(!e && !t)
    }

    function ae(e, t) {
      return !!e != !!t
    }

    function oe(e, t) {
      return !(!e || !t)
    }

    function se(e, t, r, n) {
      if (n < r) {
        if (e.length !== t.length) throw new tr.a(e.length, t.length);
        for (var i = [], a = 0; a < e.length; a++) i[a] = se(e[a], t[a], r, n + 1);
        return i
      }
      return e.concat(t)
    }

    function ue(e) {
      return (ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function ce(e, t) {
      return function r() {
        "object" !== ue(r.cache) && (r.cache = {});
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
        var a = t ? t(n) : JSON.stringify(n);
        return a in r.cache || (r.cache[a] = e.apply(e, n)), r.cache[a]
      }
    }

    function fe(e) {
      return Object.keys(e.signatures || {}).reduce(function (e, t) {
        var r = (t.match(/,/g) || []).length + 1;
        return Math.max(e, r)
      }, -1)
    }

    function le(e, t) {
      var r = fe(t);
      return Object(Qt.c)(e, function (e, n, i) {
        return 1 === r ? t(e) : 2 === r ? t(e, [n]) : t(e, [n], i)
      })
    }

    function pe(e, t) {
      var r = fe(t);
      ! function n(i, a) {
        Array.isArray(i) ? Object(Qt.f)(i, function (e, t) {
          n(e, a.concat(t))
        }) : 1 === r ? t(i) : 2 === r ? t(i, a) : t(i, a, e)
      }(e, [])
    }

    function me(e, t) {
      var r = fe(t);
      return function n(i, a) {
        return Array.isArray(i) ? i.map(function (e, t) {
          return n(e, a.concat(t))
        }) : 1 === r ? t(i) : 2 === r ? t(i, a) : t(i, a, e)
      }(e, [])
    }

    function he() {
      throw new Error('No "bignumber" implementation available')
    }

    function de() {
      throw new Error('No "fraction" implementation available')
    }

    function ye() {
      throw new Error('No "matrix" implementation available')
    }

    function ge(e) {
      return (ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function be(e, t) {
      if (Ne(e) && xe(e, t)) return e[t];
      if ("function" == typeof e[t] && we(e, t)) throw new Error('Cannot access method "' + t + '" as a property');
      throw new Error('No access to property "' + t + '"')
    }

    function ve(e, t, r) {
      if (Ne(e) && xe(e, t)) return e[t] = r, r;
      throw new Error('No access to property "' + t + '"')
    }

    function xe(e, t) {
      return !(!e || "object" !== ge(e) || !Object(er.f)(pi, t) && (t in Object.prototype || t in Function.prototype))
    }

    function we(e, t) {
      return !(!e || "function" != typeof e[t] || Object(er.f)(e, t) && Object.getPrototypeOf && t in Object.getPrototypeOf(e) || !Object(er.f)(mi, t) && (t in Object.prototype || t in Function.prototype))
    }

    function Ne(e) {
      return "object" === ge(e) && e && e.constructor === Object
    }

    function Oe(e, t) {
      if (!Object(qt.t)(t)) throw new TypeError("Index expected");
      if (1 !== t.size().length) throw new tr.a(t.size().length, 1);
      var r = e.length;
      Object(Qt.s)(t.min()[0], r), Object(Qt.s)(t.max()[0], r);
      var n = t.dimension(0),
        i = "";
      return n.forEach(function (t) {
        i += e.charAt(t)
      }), i
    }

    function Me(e, t, r, n) {
      if (!t || !0 !== t.isIndex) throw new TypeError("Index expected");
      if (1 !== t.size().length) throw new tr.a(t.size().length, 1);
      if (void 0 === n) n = " ";
      else if ("string" != typeof n || 1 !== n.length) throw new TypeError("Single character expected as defaultValue");
      var i = t.dimension(0);
      if (i.size()[0] !== r.length) throw new tr.a(i.size()[0], r.length);
      var a = e.length;
      Object(Qt.s)(t.min()[0]), Object(Qt.s)(t.max()[0]);
      for (var o = [], s = 0; s < a; s++) o[s] = e.charAt(s);
      if (i.forEach(function (e, t) {
          o[e] = r.charAt(t[0])
        }), o.length > a)
        for (var u = a - 1, c = o.length; u < c; u++) o[u] || (o[u] = n);
      return o.join("")
    }

    function Ee(e, t) {
      if (1 !== t.size().length) throw new tr.a(t.size(), 1);
      var r = t.dimension(0);
      if ("string" != typeof r) throw new TypeError("String expected as index to retrieve an object property");
      return be(e, r)
    }

    function je(e, t, r) {
      if (1 !== t.size().length) throw new tr.a(t.size(), 1);
      var n = t.dimension(0);
      if ("string" != typeof n) throw new TypeError("String expected as index to retrieve an object property");
      var i = Object(er.a)(e);
      return ve(i, n, r), i
    }

    function Se(e, t, r) {
      var n;
      return -1 === (e + "").indexOf("Unexpected type") ? -1 === (e + "").indexOf("complex numbers") ? e : (n = 2 < arguments.length ? " (type: " + Object(qt.M)(r) + ", value: " + JSON.stringify(r) + ")" : "", new TypeError("Cannot calculate " + t + ", no ordering relation is defined for complex numbers" + n)) : (n = 2 < arguments.length ? " (type: " + Object(qt.M)(r) + ", value: " + JSON.stringify(r) + ")" : " (type: " + e.data.actual + ")", new TypeError("Cannot calculate " + t + ", unexpected type of argument" + n))
    }

    function Ae(e, t, r) {
      return e.replace(/\$([\w.]+)/g, function (e, n) {
        for (var i = n.split("."), a = t[i.shift()]; i.length && void 0 !== a;) {
          var o = i.shift();
          a = o ? a[o] : a + "."
        }
        return void 0 === a ? e : Object(qt.I)(a) ? a : Object(Kt.d)(a, r)
      })
    }

    function Ce(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }

    function Te(e) {
      var t = e.DenseMatrix;
      return function (e, r, n) {
        var i = e.size();
        if (2 !== i.length) throw new RangeError("Matrix must be two dimensional (size: " + Object(Kt.d)(i) + ")");
        var a, o, s, u = i[0];
        if (u !== i[1]) throw new RangeError("Matrix must be square (size: " + Object(Kt.d)(i) + ")");
        if (Object(qt.v)(r)) {
          var c = r.size();
          if (1 === c.length) {
            if (c[0] !== u) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
            for (a = [], s = r._data, o = 0; o < u; o++) a[o] = [s[o]];
            return new t({
              data: a,
              size: [u, 1],
              datatype: r._datatype
            })
          }
          if (2 === c.length) {
            if (c[0] !== u || 1 !== c[1]) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
            if (Object(qt.n)(r)) {
              if (n) {
                for (a = [], s = r._data, o = 0; o < u; o++) a[o] = [s[o][0]];
                return new t({
                  data: a,
                  size: [u, 1],
                  datatype: r._datatype
                })
              }
              return r
            }
            for (a = [], o = 0; o < u; o++) a[o] = [0];
            for (var f = r._values, l = r._index, p = r._ptr, m = p[1], h = p[0]; h < m; h++) a[o = l[h]][0] = f[h];
            return new t({
              data: a,
              size: [u, 1],
              datatype: r._datatype
            })
          }
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.")
        }
        if (Object(qt.b)(r)) {
          var d = Object(Qt.a)(r);
          if (1 === d.length) {
            if (d[0] !== u) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
            for (a = [], o = 0; o < u; o++) a[o] = [r[o]];
            return new t({
              data: a,
              size: [u, 1]
            })
          }
          if (2 === d.length) {
            if (d[0] !== u || 1 !== d[1]) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
            for (a = [], o = 0; o < u; o++) a[o] = [r[o][0]];
            return new t({
              data: a,
              size: [u, 1]
            })
          }
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.")
        }
      }
    }

    function _e(e) {
      return e[0].precision
    }

    function Ie(e) {
      return (Ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function qe() {
      return (qe = Object.assign || function (e) {
        for (var t, r = 1; r < arguments.length; r++)
          for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
      }).apply(this, arguments)
    }

    function Be(e) {
      return Object(zt.a)(e)
    }

    function ke(e) {
      return Math.atan(1 / e)
    }

    function ze(e) {
      return isFinite(e) ? (Math.log((e + 1) / e) + Math.log(e / (e - 1))) / 2 : 0
    }

    function De(e) {
      return Math.asin(1 / e)
    }

    function Re(e) {
      var t = 1 / e;
      return Math.log(t + Math.sqrt(t * t + 1))
    }

    function Pe(e) {
      return Math.acos(1 / e)
    }

    function Fe(e) {
      var t = 1 / e,
        r = Math.sqrt(t * t - 1);
      return Math.log(r + t)
    }

    function Ue(e) {
      return Object(zt.b)(e)
    }

    function Le(e) {
      return Object(zt.c)(e)
    }

    function He(e) {
      return 1 / Math.tan(e)
    }

    function $e(e) {
      var t = Math.exp(2 * e);
      return (t + 1) / (t - 1)
    }

    function Ge(e) {
      return 1 / Math.sin(e)
    }

    function Ze(e) {
      return 0 === e ? Number.POSITIVE_INFINITY : Math.abs(2 / (Math.exp(e) - Math.exp(-e))) * Object(zt.n)(e)
    }

    function Ve(e) {
      return 1 / Math.cos(e)
    }

    function Je(e) {
      return 2 / (Math.exp(e) + Math.exp(-e))
    }

    function We(e) {
      return Object(zt.o)(e)
    }

    function Ye(e) {
      return (Ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function Xe(e) {
      return e && e.isIndexError ? new ir.a(e.index + 1, e.min + 1, void 0 === e.max ? void 0 : e.max + 1) : e
    }

    function Qe(e) {
      return (Qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function Ke(e) {
      var t = e.subset;
      return function (e, r) {
        try {
          if (Array.isArray(e)) return t(e, r);
          if (e && "function" == typeof e.subset) return e.subset(r);
          if ("string" == typeof e) return t(e, r);
          if ("object" === Qe(e)) {
            if (!r.isObjectProperty()) throw new TypeError("Cannot apply a numeric index as object property");
            return be(e, r.getObjectProperty())
          }
          throw new TypeError("Cannot apply index: unsupported type of object")
        } catch (e) {
          throw Xe(e)
        }
      }
    }

    function et(e) {
      return (et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function tt(e, t) {
      var r = e;
      "keep" !== t && (r = e.getContent());
      for (var n = r.getIdentifier(), i = 0; i < Zo.length; i++)
        if (n in Zo[i]) return i;
      return null
    }

    function rt(e, t) {
      var r = e;
      "keep" !== t && (r = e.getContent());
      var n = r.getIdentifier(),
        i = tt(r, t);
      if (null === i) return null;
      var a = Zo[i][n];
      if (a.hasOwnProperty("associativity")) {
        if ("left" === a.associativity) return "left";
        if ("right" === a.associativity) return "right";
        throw Error("'" + n + "' has the invalid associativity '" + a.associativity + "'.")
      }
      return null
    }

    function nt(e, t, r) {
      var n = "keep" === r ? e : e.getContent(),
        i = "keep" === r ? t : e.getContent(),
        a = n.getIdentifier(),
        o = i.getIdentifier(),
        s = tt(n, r);
      if (null === s) return null;
      var u = Zo[s][a];
      if (u.hasOwnProperty("associativeWith") && u.associativeWith instanceof Array) {
        for (var c = 0; c < u.associativeWith.length; c++)
          if (u.associativeWith[c] === o) return !0;
        return !1
      }
      return null
    }

    function it(e) {
      return Xo()(e, {
        preserveFormatting: !0
      })
    }

    function at(e, t) {
      return (t = void 0 !== t && t) ? ts.hasOwnProperty(e) ? ts[e] : "\\mathrm{" + it(e) + "}" : Qo.hasOwnProperty(e) ? Qo[e] : it(e)
    }

    function ot(e) {
      return function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
          return r
        }
      }(e) || function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }

    function st(e) {
      return (st = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function ut(e) {
      return (ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function ct() {
      return (ct = Object.assign || function (e) {
        for (var t, r = 1; r < arguments.length; r++)
          for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
      }).apply(this, arguments)
    }

    function ft() {
      return (ft = Object.assign || function (e) {
        for (var t, r = 1; r < arguments.length; r++)
          for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
      }).apply(this, arguments)
    }

    function lt(e, t, r, n, i, a, o) {
      var s = 0;
      for (r[o] = e; 0 <= s;) {
        var u = r[o + s],
          c = r[n + u]; - 1 === c ? (s--, a[t++] = u) : (r[n + u] = r[i + c], r[o + ++s] = c)
      }
      return t
    }

    function pt(e) {
      return -e - 2
    }

    function mt(e, t, r, n, i, a, o) {
      var s, u, c, f, l = 0;
      if (e <= t || r[n + t] <= r[i + e]) return -1;
      if (r[i + e] = r[n + t], c = r[a + e], r[a + e] = t, -1 === c) l = 1, f = e;
      else {
        for (l = 2, f = c; f !== r[o + f]; f = r[o + f]);
        for (s = c; s !== f; s = u) u = r[o + s], r[o + s] = f
      }
      return {
        jleaf: l,
        q: f
      }
    }

    function ht(e, t) {
      return 0 > e[t]
    }

    function dt(e, t) {
      e[t] = pt(e[t])
    }

    function yt(e) {
      return 0 > e ? pt(e) : e
    }

    function gt(e, t, r, n, i) {
      var a, o, s, u = t._index,
        c = t._ptr,
        f = t._size[1],
        l = 0;
      for (n[0] = e; 0 <= l;) {
        e = n[l];
        var p = i ? i[e] : e;
        ht(c, e) || (dt(c, e), n[f + l] = 0 > p ? 0 : yt(c[p]));
        var m = 1;
        for (o = n[f + l], s = 0 > p ? 0 : yt(c[p + 1]); o < s; o++)
          if (!ht(c, a = u[o])) {
            n[f + l] = o, n[++l] = a, m = 0;
            break
          } m && (l--, n[--r] = e)
      }
      return r
    }

    function bt(e, t) {
      var r, n = t.length,
        i = [];
      if (e)
        for (r = 0; r < n; r++) i[e[r]] = t[r];
      else
        for (r = 0; r < n; r++) i[r] = t[r];
      return i
    }

    function vt(e, t) {
      var r;
      return t < e ? 1 : t === e ? t : vt(e, r = t + e >> 1) * vt(r + 1, t)
    }

    function xt(e, t) {
      var r;
      if (!Object(zt.i)(e) || 0 > e) throw new TypeError("Positive integer value expected in function combinations");
      if (!Object(zt.i)(t) || 0 > t) throw new TypeError("Positive integer value expected in function combinations");
      if (t > e) throw new TypeError("k must be less than or equal to n");
      return t < (r = e - t) ? vt(r + 1, e) / vt(1, t) : vt(t + 1, e) / vt(1, r)
    }

    function wt(e) {
      return e.isInteger() && e.gte(0)
    }

    function Nt(e) {
      var t, r;
      if (Object(zt.i)(e)) return 0 >= e ? isFinite(e) ? 1 / 0 : NaN : 171 < e ? 1 / 0 : vt(1, e - 1);
      if (.5 > e) return Math.PI / (Math.sin(Math.PI * e) * Nt(1 - e));
      if (171.35 <= e) return 1 / 0;
      if (85 < e) {
        var n = e * e,
          i = n * e,
          a = i * e,
          o = a * e;
        return Math.sqrt(2 * Math.PI / e) * Math.pow(e / Math.E, e) * (1 + 1 / (12 * e) + 1 / (288 * n) - 139 / (51840 * i) - 571 / (2488320 * a) + 163879 / (209018880 * o) + 5246819 / (75246796800 * o * e))
      }--e, r = su[0];
      for (var s = 1; s < su.length; ++s) r += su[s] / (e + s);
      return t = e + ou + .5, Math.sqrt(2 * Math.PI) * Math.pow(t, e + .5) * Math.exp(-t) * r
    }

    function Ot(e) {
      return e.isInteger() && e.gte(0)
    }

    function Mt(e) {
      var t;
      return function (e) {
          t = null === e ? vu : bu()(e + "")
        }(e),
        function () {
          return t()
        }
    }

    function Et(e, t) {
      var r = [];
      if (1 < (e = e.slice(0)).length)
        for (var n = 0, i = e.shift(); n < i; n++) r.push(Et(e, t));
      else
        for (var a = 0, o = e.shift(); a < o; a++) r.push(t());
      return r
    }

    function jt(e) {
      return (jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function St(e, t, r) {
      return Object(Dt.a)(e, t, r, {
        recreateOnConfigChange: !0
      })
    }

    function At(e, t, r) {
      return Object(Dt.a)(e, ["config", "Unit", "BigNumber"], function (e) {
        var n = e.config,
          i = e.Unit,
          a = e.BigNumber,
          o = new i("BigNumber" === n.number ? new a(t) : parseFloat(t), r);
        return o.fixPrefix = !0, o
      })
    }

    function Ct(e, t) {
      return Object(Dt.a)(e, ["config", "BigNumber"], function (e) {
        var r = e.config,
          n = e.BigNumber;
        return "BigNumber" === r.number ? new n(t) : t
      })
    }

    function Tt(e, t, r) {
      var n = e.filter(function (e) {
        return Object(qt.J)(e) && !(e.name in t) && !(e.name in r)
      })[0];
      if (!n) throw new Error('No undefined variable found in inline expression "' + e + '"');
      var i = n.name,
        a = Object.create(r),
        o = e.compile();
      return function (e) {
        return a[i] = e, o.evaluate(a)
      }
    }

    function _t(e, t) {
      var r = fe(t);
      return Object(Qt.c)(e, function (e, n, i) {
        return 1 === r ? t(e) : 2 === r ? t(e, [n + 1]) : t(e, [n + 1], i)
      })
    }

    function It(e, t, r) {
      var n = fe(t);
      return function e(i, a) {
        return Array.isArray(i) ? Object(Qt.m)(i, function (t, r) {
          return e(t, a.concat(r + 1))
        }) : 1 === n ? t(i) : 2 === n ? t(i, a) : t(i, a, r)
      }(e, [])
    }
    r.r(t);
    var qt = r(1),
      Bt = r(14),
      kt = r.n(Bt),
      zt = r(3),
      Dt = r(0),
      Rt = function () {
        return Rt = kt.a.create, kt.a
      },
      Pt = Object(Dt.a)("typed", ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], function (e) {
        var t = e.BigNumber,
          r = e.Complex,
          o = e.DenseMatrix,
          s = e.Fraction,
          u = Rt();
        return u.types = [{
          name: "number",
          test: qt.y
        }, {
          name: "Complex",
          test: qt.j
        }, {
          name: "BigNumber",
          test: qt.e
        }, {
          name: "Fraction",
          test: qt.o
        }, {
          name: "Unit",
          test: qt.L
        }, {
          name: "string",
          test: qt.I
        }, {
          name: "Chain",
          test: qt.h
        }, {
          name: "Array",
          test: qt.b
        }, {
          name: "Matrix",
          test: qt.v
        }, {
          name: "DenseMatrix",
          test: qt.n
        }, {
          name: "SparseMatrix",
          test: qt.H
        }, {
          name: "Range",
          test: qt.D
        }, {
          name: "Index",
          test: qt.t
        }, {
          name: "boolean",
          test: qt.g
        }, {
          name: "ResultSet",
          test: qt.G
        }, {
          name: "Help",
          test: qt.s
        }, {
          name: "function",
          test: qt.p
        }, {
          name: "Date",
          test: qt.m
        }, {
          name: "RegExp",
          test: qt.F
        }, {
          name: "null",
          test: qt.x
        }, {
          name: "undefined",
          test: qt.K
        }, {
          name: "AccessorNode",
          test: qt.a
        }, {
          name: "ArrayNode",
          test: qt.c
        }, {
          name: "AssignmentNode",
          test: qt.d
        }, {
          name: "BlockNode",
          test: qt.f
        }, {
          name: "ConditionalNode",
          test: qt.k
        }, {
          name: "ConstantNode",
          test: qt.l
        }, {
          name: "FunctionNode",
          test: qt.r
        }, {
          name: "FunctionAssignmentNode",
          test: qt.q
        }, {
          name: "IndexNode",
          test: qt.u
        }, {
          name: "Node",
          test: qt.w
        }, {
          name: "ObjectNode",
          test: qt.A
        }, {
          name: "OperatorNode",
          test: qt.B
        }, {
          name: "ParenthesisNode",
          test: qt.C
        }, {
          name: "RangeNode",
          test: qt.E
        }, {
          name: "SymbolNode",
          test: qt.J
        }, {
          name: "Object",
          test: qt.z
        }], u.conversions = [{
          from: "number",
          to: "BigNumber",
          convert: function (e) {
            if (t || n(e), 15 < Object(zt.f)(e)) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + e + "). Use function bignumber(x) to convert to BigNumber.");
            return new t(e)
          }
        }, {
          from: "number",
          to: "Complex",
          convert: function (e) {
            return r || i(e), new r(e, 0)
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
            return r || i(e), new r(e.toNumber(), 0)
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
            return r || i(e), new r(e.valueOf(), 0)
          }
        }, {
          from: "number",
          to: "Fraction",
          convert: function (e) {
            s || a(e);
            var t = new s(e);
            if (t.valueOf() !== e) throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + e + "). Use function fraction(x) to convert to Fraction.");
            return t
          }
        }, {
          from: "string",
          to: "number",
          convert: function (e) {
            var t = +e;
            if (isNaN(t)) throw new Error('Cannot convert "' + e + '" to a number');
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
              throw new Error('Cannot convert "' + e + '" to BigNumber')
            }
          }
        }, {
          from: "string",
          to: "Fraction",
          convert: function (e) {
            s || a(e);
            try {
              return new s(e)
            } catch (t) {
              throw new Error('Cannot convert "' + e + '" to Fraction')
            }
          }
        }, {
          from: "string",
          to: "Complex",
          convert: function (e) {
            r || i(e);
            try {
              return new r(e)
            } catch (t) {
              throw new Error('Cannot convert "' + e + '" to Complex')
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
            return s || a(e), new s(+e)
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
            return o || function () {
              throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")
            }(), new o(e)
          }
        }, {
          from: "Matrix",
          to: "Array",
          convert: function (e) {
            return e.valueOf()
          }
        }], u
      }),
      Ft = Object(Dt.a)("ResultSet", [], function () {
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
      Ut = r(16),
      Lt = r.n(Ut),
      Ht = Object(Dt.a)("BigNumber", ["?on", "config"], function (e) {
        var t = e.on,
          r = e.config,
          n = Lt.a.clone({
            precision: r.precision
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
      $t = r(9),
      Gt = r.n($t),
      Zt = Object(Dt.a)("Complex", [], function () {
        return Gt.a.prototype.type = "Complex", Gt.a.prototype.isComplex = !0, Gt.a.prototype.toJSON = function () {
          return {
            mathjs: "Complex",
            re: this.re,
            im: this.im
          }
        }, Gt.a.prototype.toPolar = function () {
          return {
            r: this.abs(),
            phi: this.arg()
          }
        }, Gt.a.prototype.format = function (e) {
          var t = this.im,
            r = this.re,
            n = Object(zt.h)(this.re, e),
            i = Object(zt.h)(this.im, e),
            a = Object(qt.y)(e) ? e : e ? e.precision : null;
          if (null !== a) {
            var o = Math.pow(10, -a);
            Math.abs(r / t) < o && (r = 0), Math.abs(t / r) < o && (t = 0)
          }
          return 0 === t ? n : 0 === r ? 1 === t ? "i" : -1 === t ? "-i" : i + "i" : 0 > t ? -1 === t ? n + " - i" : n + " - " + i.substring(1) + "i" : 1 === t ? n + " + i" : n + " + " + i + "i"
        }, Gt.a.fromPolar = function () {
          switch (arguments.length) {
            case 1:
              var e = arguments[0];
              if ("object" === o(e)) return Gt()(e);
              throw new TypeError("Input has to be an object with r and phi keys.");
            case 2:
              var t = arguments[0],
                r = arguments[1];
              if (Object(qt.y)(t)) {
                if (Object(qt.L)(r) && r.hasBase("ANGLE") && (r = r.toNumber("rad")), Object(qt.y)(r)) return new Gt.a({
                  r: t,
                  phi: r
                });
                throw new TypeError("Phi is not a number nor an angle unit.")
              }
              throw new TypeError("Radius r is not a number.");
            default:
              throw new SyntaxError("Wrong number of arguments in function fromPolar")
          }
        }, Gt.a.prototype.valueOf = Gt.a.prototype.toString, Gt.a.fromJSON = function (e) {
          return new Gt.a(e)
        }, Gt.a.compare = function (e, t) {
          return e.re > t.re ? 1 : e.re < t.re ? -1 : e.im > t.im ? 1 : e.im < t.im ? -1 : 0
        }, Gt.a
      }, {
        isClass: !0
      }),
      Vt = r(11),
      Jt = r.n(Vt),
      Wt = Object(Dt.a)("Fraction", [], function () {
        return Jt.a.prototype.type = "Fraction", Jt.a.prototype.isFraction = !0, Jt.a.prototype.toJSON = function () {
          return {
            mathjs: "Fraction",
            n: this.s * this.n,
            d: this.d
          }
        }, Jt.a.fromJSON = function (e) {
          return new Jt.a(e)
        }, Jt.a
      }, {
        isClass: !0
      }),
      Yt = Object(Dt.a)("Range", [], function () {
        function e(t, r, n) {
          if (!(this instanceof e)) throw new SyntaxError("Constructor must be called with the new operator");
          var i = null != t,
            a = null != r,
            o = null != n;
          if (i)
            if (Object(qt.e)(t)) t = t.toNumber();
            else if ("number" != typeof t) throw new TypeError("Parameter start must be a number");
          if (a)
            if (Object(qt.e)(r)) r = r.toNumber();
            else if ("number" != typeof r) throw new TypeError("Parameter end must be a number");
          if (o)
            if (Object(qt.e)(n)) n = n.toNumber();
            else if ("number" != typeof n) throw new TypeError("Parameter step must be a number");
          this.start = i ? parseFloat(t) : 0, this.end = a ? parseFloat(r) : 0, this.step = o ? parseFloat(n) : 1
        }
        return e.prototype.type = "Range", e.prototype.isRange = !0, e.parse = function (t) {
          if ("string" != typeof t) return null;
          var r = t.split(":").map(function (e) {
            return parseFloat(e)
          });
          if (r.some(function (e) {
              return isNaN(e)
            })) return null;
          switch (r.length) {
            case 2:
              return new e(r[0], r[1]);
            case 3:
              return new e(r[0], r[2], r[1]);
            default:
              return null
          }
        }, e.prototype.clone = function () {
          return new e(this.start, this.end, this.step)
        }, e.prototype.size = function () {
          var e = 0,
            t = this.start,
            r = this.step,
            n = this.end - t;
          return Object(zt.n)(r) === Object(zt.n)(n) ? e = Math.ceil(n / r) : 0 === n && (e = 0), isNaN(e) && (e = 0), [e]
        }, e.prototype.min = function () {
          var e = this.size()[0];
          return 0 < e ? 0 < this.step ? this.start : this.start + (e - 1) * this.step : void 0
        }, e.prototype.max = function () {
          var e = this.size()[0];
          return 0 < e ? 0 < this.step ? this.start + (e - 1) * this.step : this.start : void 0
        }, e.prototype.forEach = function (e) {
          var t = this.start,
            r = this.step,
            n = this.end,
            i = 0;
          if (0 < r)
            for (; t < n;) e(t, [i], this), t += r, i++;
          else if (0 > r)
            for (; t > n;) e(t, [i], this), t += r, i++
        }, e.prototype.map = function (e) {
          var t = [];
          return this.forEach(function (r, n, i) {
            t[n[0]] = e(r, n, i)
          }), t
        }, e.prototype.toArray = function () {
          var e = [];
          return this.forEach(function (t, r) {
            e[r[0]] = t
          }), e
        }, e.prototype.valueOf = function () {
          return this.toArray()
        }, e.prototype.format = function (e) {
          var t = Object(zt.h)(this.start, e);
          return 1 !== this.step && (t += ":" + Object(zt.h)(this.step, e)), t += ":" + Object(zt.h)(this.end, e)
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
      Xt = Object(Dt.a)("Matrix", [], function () {
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
      Qt = r(2),
      Kt = r(5),
      er = r(4),
      tr = r(6),
      rr = Object(Dt.a)("DenseMatrix", ["Matrix"], function (e) {
        function t(e, r) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (r && !Object(qt.I)(r)) throw new Error("Invalid datatype: " + r);
          if (Object(qt.v)(e)) "DenseMatrix" === e.type ? (this._data = Object(er.a)(e._data), this._size = Object(er.a)(e._size), this._datatype = r || e._datatype) : (this._data = e.toArray(), this._size = e.size(), this._datatype = r || e._datatype);
          else if (e && Object(qt.b)(e.data) && Object(qt.b)(e.size)) this._data = e.data, this._size = e.size, this._datatype = r || e.datatype;
          else if (Object(qt.b)(e)) this._data = function e(t) {
            for (var r, n = 0, i = t.length; n < i; n++) r = t[n], Object(qt.b)(r) ? t[n] = e(r) : r && !0 === r.isMatrix && (t[n] = e(r.valueOf()));
            return t
          }(e), this._size = Object(Qt.a)(this._data), Object(Qt.r)(this._data, this._size), this._datatype = r;
          else {
            if (e) throw new TypeError("Unsupported type of data (" + Object(qt.M)(e) + ")");
            this._data = [], this._size = [0], this._datatype = r
          }
        }

        function r(e, r) {
          if (!Object(qt.t)(r)) throw new TypeError("Invalid index");
          if (r.isScalar()) return e.get(r.min());
          var n = r.size();
          if (n.length !== e._size.length) throw new tr.a(n.length, e._size.length);
          for (var i = r.min(), a = r.max(), o = 0, s = e._size.length; o < s; o++) Object(Qt.s)(i[o], e._size[o]), Object(Qt.s)(a[o], e._size[o]);
          return new t(function e(t, r, n, i) {
            var a = r.dimension(i);
            return i === n - 1 ? a.map(function (e) {
              return Object(Qt.s)(e, t.length), t[e]
            }).valueOf() : a.map(function (a) {
              Object(Qt.s)(a, t.length);
              var o = t[a];
              return e(o, r, n, i + 1)
            }).valueOf()
          }(e._data, r, n.length, 0), e._datatype)
        }

        function n(e, t, r, n) {
          if (!t || !0 !== t.isIndex) throw new TypeError("Invalid index");
          var i, o = t.size(),
            s = t.isScalar();
          if (Object(qt.v)(r) ? (i = r.size(), r = r.valueOf()) : i = Object(Qt.a)(r), s) {
            if (0 !== i.length) throw new TypeError("Scalar expected");
            e.set(t.min(), r, n)
          } else {
            if (o.length < e._size.length) throw new tr.a(o.length, e._size.length, "<");
            if (i.length < o.length) {
              for (var u = 0, c = 0; 1 === o[u] && 1 === i[u];) u++;
              for (; 1 === o[u];) c++, u++;
              r = Object(Qt.q)(r, o.length, c, i)
            }
            if (!Object(er.d)(o, i)) throw new tr.a(o, i, ">");
            a(e, t.max().map(function (e) {
              return e + 1
            }), n);
            var f = o.length;
            ! function e(t, r, n, i, a) {
              var o = r.dimension(a);
              a === i - 1 ? o.forEach(function (e, r) {
                Object(Qt.s)(e), t[e] = n[r[0]]
              }) : o.forEach(function (o, s) {
                Object(Qt.s)(o), e(t[o], r, n[s[0]], i, a + 1)
              })
            }(e._data, t, r, f, 0)
          }
          return e
        }

        function i(e, t, r) {
          if (0 === t.length) {
            for (var n = e._data; Object(qt.b)(n);) n = n[0];
            return n
          }
          return e._size = t.slice(0), e._data = Object(Qt.o)(e._data, e._size, r), e
        }

        function a(e, t, r) {
          for (var n = e._size.slice(0), a = !1; n.length < t.length;) n.push(0), a = !0;
          for (var o = 0, s = t.length; o < s; o++) t[o] > n[o] && (n[o] = t[o], a = !0);
          a && i(e, n, r)
        }
        var o = e.Matrix;
        return t.prototype = new o, t.prototype.createDenseMatrix = function (e, r) {
          return new t(e, r)
        }, t.prototype.type = "DenseMatrix", t.prototype.isDenseMatrix = !0, t.prototype.getDataType = function () {
          return Object(Qt.h)(this._data, qt.M)
        }, t.prototype.storage = function () {
          return "dense"
        }, t.prototype.datatype = function () {
          return this._datatype
        }, t.prototype.create = function (e, r) {
          return new t(e, r)
        }, t.prototype.subset = function (e, t, i) {
          switch (arguments.length) {
            case 1:
              return r(this, e);
            case 2:
            case 3:
              return n(this, e, t, i);
            default:
              throw new SyntaxError("Wrong number of arguments")
          }
        }, t.prototype.get = function (e) {
          if (!Object(qt.b)(e)) throw new TypeError("Array expected");
          if (e.length !== this._size.length) throw new tr.a(e.length, this._size.length);
          for (var t = 0; t < e.length; t++) Object(Qt.s)(e[t], this._size[t]);
          for (var r, n = this._data, i = 0, a = e.length; i < a; i++) r = e[i], Object(Qt.s)(r, n.length), n = n[r];
          return n
        }, t.prototype.set = function (e, t, r) {
          if (!Object(qt.b)(e)) throw new TypeError("Array expected");
          if (e.length < this._size.length) throw new tr.a(e.length, this._size.length, "<");
          var n, i, o;
          a(this, e.map(function (e) {
            return e + 1
          }), r);
          var s = this._data;
          for (n = 0, i = e.length - 1; n < i; n++) o = e[n], Object(Qt.s)(o, s.length), s = s[o];
          return o = e[e.length - 1], Object(Qt.s)(o, s.length), s[o] = t, this
        }, t.prototype.resize = function (e, t, r) {
          if (!Object(qt.b)(e)) throw new TypeError("Array expected");
          return i(r ? this.clone() : this, e, t)
        }, t.prototype.reshape = function (e, t) {
          var r = t ? this.clone() : this;
          return r._data = Object(Qt.n)(r._data, e), r._size = e.slice(0), r
        }, t.prototype.clone = function () {
          return new t({
            data: Object(er.a)(this._data),
            size: Object(er.a)(this._size),
            datatype: this._datatype
          })
        }, t.prototype.size = function () {
          return this._size.slice(0)
        }, t.prototype.map = function (e) {
          var r = this;
          return new t({
            data: function t(n, i) {
              return Object(qt.b)(n) ? n.map(function (e, r) {
                return t(e, i.concat(r))
              }) : e(n, i, r)
            }(this._data, []),
            size: Object(er.a)(this._size),
            datatype: this._datatype
          })
        }, t.prototype.forEach = function (e) {
          var t = this;
          ! function r(n, i) {
            Object(qt.b)(n) ? n.forEach(function (e, t) {
              r(e, i.concat(t))
            }) : e(n, i, t)
          }(this._data, [])
        }, t.prototype.toArray = function () {
          return Object(er.a)(this._data)
        }, t.prototype.valueOf = function () {
          return this._data
        }, t.prototype.format = function (e) {
          return Object(Kt.d)(this._data, e)
        }, t.prototype.toString = function () {
          return Object(Kt.d)(this._data)
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "DenseMatrix",
            data: this._data,
            size: this._size,
            datatype: this._datatype
          }
        }, t.prototype.diagonal = function (e) {
          if (e) {
            if (Object(qt.e)(e) && (e = e.toNumber()), !Object(qt.y)(e) || !Object(zt.i)(e)) throw new TypeError("The parameter k must be an integer number")
          } else e = 0;
          for (var r = 0 < e ? e : 0, n = 0 > e ? -e : 0, i = this._size[0], a = this._size[1], o = Math.min(i - n, a - r), s = [], u = 0; u < o; u++) s[u] = this._data[u + n][u + r];
          return new t({
            data: s,
            size: [o],
            datatype: this._datatype
          })
        }, t.diagonal = function (e, r, n, i) {
          if (!Object(qt.b)(e)) throw new TypeError("Array expected, size parameter");
          if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
          if (e = e.map(function (e) {
              if (Object(qt.e)(e) && (e = e.toNumber()), !Object(qt.y)(e) || !Object(zt.i)(e) || 1 > e) throw new Error("Size values must be positive integers");
              return e
            }), n) {
            if (Object(qt.e)(n) && (n = n.toNumber()), !Object(qt.y)(n) || !Object(zt.i)(n)) throw new TypeError("The parameter k must be an integer number")
          } else n = 0;
          var a, o = 0 < n ? n : 0,
            s = 0 > n ? -n : 0,
            u = e[0],
            c = e[1],
            f = Math.min(u - s, c - o);
          if (Object(qt.b)(r)) {
            if (r.length !== f) throw new Error("Invalid value array length");
            a = function (e) {
              return r[e]
            }
          } else if (Object(qt.v)(r)) {
            var l = r.size();
            if (1 !== l.length || l[0] !== f) throw new Error("Invalid matrix length");
            a = function (e) {
              return r.get([e])
            }
          } else a = function () {
            return r
          };
          i || (i = Object(qt.e)(a(0)) ? a(0).mul(0) : 0);
          var p = [];
          if (0 < e.length) {
            p = Object(Qt.o)(p, e, i);
            for (var m = 0; m < f; m++) p[m + s][m + o] = a(m)
          }
          return new t({
            data: p,
            size: [u, c]
          })
        }, t.fromJSON = function (e) {
          return new t(e)
        }, t.prototype.swapRows = function (e, r) {
          if (!(Object(qt.y)(e) && Object(zt.i)(e) && Object(qt.y)(r) && Object(zt.i)(r))) throw new Error("Row index must be positive integers");
          if (2 !== this._size.length) throw new Error("Only two dimensional matrix is supported");
          return Object(Qt.s)(e, this._size[0]), Object(Qt.s)(r, this._size[0]), t._swapRows(e, r, this._data), this
        }, t._swapRows = function (e, t, r) {
          var n = r[e];
          r[e] = r[t], r[t] = n
        }, t
      }, {
        isClass: !0
      }),
      nr = Object(Dt.a)("clone", ["typed"], function (e) {
        return (0, e.typed)("clone", {
          any: er.a
        })
      }),
      ir = r(10),
      ar = "isInteger",
      or = Object(Dt.a)(ar, ["typed"], function (e) {
        var t = (0, e.typed)(ar, {
          number: zt.i,
          BigNumber: function (e) {
            return e.isInt()
          },
          Fraction: function (e) {
            return 1 === e.d && isFinite(e.n)
          },
          "Array | Matrix": function (e) {
            return c(e, t)
          }
        });
        return t
      }),
      sr = "number";
    m.signature = sr, h.signature = sr, d.signature = sr, y.signature = sr;
    var ur = Object(Dt.a)("isNegative", ["typed"], function (e) {
        var t = (0, e.typed)("isNegative", {
          number: m,
          BigNumber: function (e) {
            return e.isNeg() && !e.isZero() && !e.isNaN()
          },
          Fraction: function (e) {
            return 0 > e.s
          },
          Unit: function (e) {
            return t(e.value)
          },
          "Array | Matrix": function (e) {
            return c(e, t)
          }
        });
        return t
      }),
      cr = "isNumeric",
      fr = Object(Dt.a)(cr, ["typed"], function (e) {
        var t = (0, e.typed)(cr, {
          "number | BigNumber | Fraction | boolean": function () {
            return !0
          },
          "Complex | Unit | string | null | undefined | Node": function () {
            return !1
          },
          "Array | Matrix": function (e) {
            return c(e, t)
          }
        });
        return t
      }),
      lr = "hasNumericValue",
      pr = Object(Dt.a)(lr, ["typed", "isNumeric"], function (e) {
        var t = e.typed,
          r = e.isNumeric;
        return t(lr, {
          string: function (e) {
            return 0 < e.trim().length && !isNaN(+e)
          },
          any: function (e) {
            return r(e)
          }
        })
      }),
      mr = "isPositive",
      hr = Object(Dt.a)(mr, ["typed"], function (e) {
        var t = (0, e.typed)(mr, {
          number: h,
          BigNumber: function (e) {
            return !e.isNeg() && !e.isZero() && !e.isNaN()
          },
          Fraction: function (e) {
            return 0 < e.s && 0 < e.n
          },
          Unit: function (e) {
            return t(e.value)
          },
          "Array | Matrix": function (e) {
            return c(e, t)
          }
        });
        return t
      }),
      dr = Object(Dt.a)("isZero", ["typed"], function (e) {
        var t = (0, e.typed)("isZero", {
          number: d,
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
            return t(e.value)
          },
          "Array | Matrix": function (e) {
            return c(e, t)
          }
        });
        return t
      }),
      yr = Object(Dt.a)("isNaN", ["typed"], function (e) {
        return (0, e.typed)("isNaN", {
          number: y,
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
            return c(e, Number.isNaN)
          }
        })
      }),
      gr = r(8),
      br = Object(Dt.a)("typeOf", ["typed"], function (e) {
        return (0, e.typed)("typeOf", {
          any: qt.M
        })
      }),
      vr = Object(Dt.a)("typeof", [], function () {
        return function () {
          Object(gr.a)('Function "typeof" has been renamed to "typeOf" in v6.0.0, please use the new function instead.');
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return qt.M.apply(qt.M, t)
        }
      }),
      xr = "equalScalar",
      wr = Object(Dt.a)(xr, ["typed", "config"], function (e) {
        var t = e.typed,
          r = e.config,
          n = t(xr, {
            "boolean, boolean": function (e, t) {
              return e === t
            },
            "number, number": function (e, t) {
              return Object(zt.m)(e, t, r.epsilon)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.eq(t) || g(e, t, r.epsilon)
            },
            "Fraction, Fraction": function (e, t) {
              return e.equals(t)
            },
            "Complex, Complex": function (e, t) {
              return function (e, t, r) {
                return Object(zt.m)(e.re, t.re, r) && Object(zt.m)(e.im, t.im, r)
              }(e, t, r.epsilon)
            },
            "Unit, Unit": function (e, t) {
              if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
              return n(e.value, t.value)
            }
          });
        return n
      }),
      Nr = (Object(Dt.a)(xr, ["typed", "config"], function (e) {
        var t = e.typed,
          r = e.config;
        return t(xr, {
          "number, number": function (e, t) {
            return Object(zt.m)(e, t, r.epsilon)
          }
        })
      }), Object(Dt.a)("SparseMatrix", ["typed", "equalScalar", "Matrix"], function (e) {
        function t(e, n) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (n && !Object(qt.I)(n)) throw new Error("Invalid datatype: " + n);
          if (Object(qt.v)(e)) ! function (e, t, n) {
            "SparseMatrix" === t.type ? (e._values = t._values ? Object(er.a)(t._values) : void 0, e._index = Object(er.a)(t._index), e._ptr = Object(er.a)(t._ptr), e._size = Object(er.a)(t._size), e._datatype = n || t._datatype) : r(e, t.valueOf(), n || t._datatype)
          }(this, e, n);
          else if (e && Object(qt.b)(e.index) && Object(qt.b)(e.ptr) && Object(qt.b)(e.size)) this._values = e.values, this._index = e.index, this._ptr = e.ptr, this._size = e.size, this._datatype = n || e.datatype;
          else if (Object(qt.b)(e)) r(this, e, n);
          else {
            if (e) throw new TypeError("Unsupported type of data (" + Object(qt.M)(e) + ")");
            this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = n
          }
        }

        function r(e, t, r) {
          e._values = [], e._index = [], e._ptr = [], e._datatype = r;
          var n = t.length,
            i = 0,
            a = f,
            o = 0;
          if (Object(qt.I)(r) && (a = c.find(f, [r, r]) || f, o = c.convert(0, r)), 0 < n) {
            var s = 0;
            do {
              e._ptr.push(e._index.length);
              for (var u, l = 0; l < n; l++)
                if (u = t[l], Object(qt.b)(u)) {
                  if (0 == s && i < u.length && (i = u.length), s < u.length) {
                    var p = u[s];
                    a(p, o) || (e._values.push(p), e._index.push(l))
                  }
                } else 0 == s && 1 > i && (i = 1), a(u, o) || (e._values.push(u), e._index.push(l));
              s++
            } while (s < i)
          }
          e._ptr.push(e._index.length), e._size = [n, i]
        }

        function n(e, r) {
          if (!Object(qt.t)(r)) throw new TypeError("Invalid index");
          if (r.isScalar()) return e.get(r.min());
          var n = r.size();
          if (n.length !== e._size.length) throw new tr.a(n.length, e._size.length);
          var i, a, o, s, u = r.min(),
            c = r.max();
          for (i = 0, a = e._size.length; i < a; i++) Object(Qt.s)(u[i], e._size[i]), Object(Qt.s)(c[i], e._size[i]);
          var f = e._values,
            l = e._index,
            p = e._ptr,
            m = r.dimension(0),
            h = r.dimension(1),
            d = [],
            y = [];
          m.forEach(function (e, t) {
            y[e] = t[0], d[e] = !0
          });
          var g = f ? [] : void 0,
            b = [],
            v = [];
          return h.forEach(function (e) {
            for (v.push(b.length), o = p[e], s = p[e + 1]; o < s; o++) i = l[o], !0 === d[i] && (b.push(y[i]), g && g.push(f[o]))
          }), v.push(b.length), new t({
            values: g,
            index: b,
            ptr: v,
            size: n,
            datatype: e._datatype
          })
        }

        function i(e, t, r, n) {
          if (0 == r - t) return r;
          for (var i = t; i < r; i++)
            if (n[i] === e) return i;
          return t
        }

        function a(e, t, r, n, i, a, o) {
          i.splice(e, 0, n), a.splice(e, 0, t);
          for (var s = r + 1; s < o.length; s++) o[s]++
        }

        function o(e, t, r, n) {
          var i = n || 0,
            a = f,
            o = 0;
          Object(qt.I)(e._datatype) && (a = c.find(f, [e._datatype, e._datatype]) || f, o = c.convert(0, e._datatype), i = c.convert(i, e._datatype));
          var s, u, l, p = !a(i, o),
            m = e._size[0],
            h = e._size[1];
          if (r > h) {
            for (u = h; u < r; u++)
              if (e._ptr[u] = e._values.length, p)
                for (s = 0; s < m; s++) e._values.push(i), e._index.push(s);
            e._ptr[r] = e._values.length
          } else r < h && (e._ptr.splice(r + 1, h - r), e._values.splice(e._ptr[r], e._values.length), e._index.splice(e._ptr[r], e._index.length));
          if (h = r, t > m) {
            if (p) {
              var d = 0;
              for (u = 0; u < h; u++) {
                e._ptr[u] += d, l = e._ptr[u + 1] + d;
                var y = 0;
                for (s = m; s < t; s++, y++) e._values.splice(l + y, 0, i), e._index.splice(l + y, 0, s), d++
              }
              e._ptr[h] = e._values.length
            }
          } else if (t < m) {
            var g = 0;
            for (u = 0; u < h; u++) {
              e._ptr[u] -= g;
              var b = e._ptr[u],
                v = e._ptr[u + 1] - g;
              for (l = b; l < v; l++)(s = e._index[l]) > t - 1 && (e._values.splice(l, 1), e._index.splice(l, 1), g++)
            }
            e._ptr[u] = e._values.length
          }
          return e._size[0] = t, e._size[1] = r, e
        }

        function s(e, r, n, i, a, o, s) {
          var u = [],
            l = [],
            p = [],
            m = f,
            h = 0;
          Object(qt.I)(e._datatype) && (m = c.find(f, [e._datatype, e._datatype]) || f, h = c.convert(0, e._datatype));
          for (var d = function (e, t, r) {
              e = o(e, t, r), m(e, h) || (u.push(e), l.push(t))
            }, y = i; y <= a; y++) {
            p.push(u.length);
            var g = e._ptr[y],
              b = e._ptr[y + 1];
            if (s)
              for (var v, x = g; x < b; x++)(v = e._index[x]) >= r && v <= n && d(e._values[x], v - r, y - i);
            else {
              for (var w = {}, N = g; N < b; N++) w[e._index[N]] = e._values[N];
              for (var O = r; O <= n; O++) d(O in w ? w[O] : 0, O - r, y - i)
            }
          }
          return p.push(u.length), new t({
            values: u,
            index: l,
            ptr: p,
            size: [n - r + 1, a - i + 1]
          })
        }

        function u(e, t, r, n, i) {
          var a, o, s = n[0],
            u = n[1],
            c = [];
          for (a = 0; a < s; a++)
            for (c[a] = [], o = 0; o < u; o++) c[a][o] = 0;
          for (o = 0; o < u; o++)
            for (var f = r[o], l = r[o + 1], p = f; p < l; p++) c[a = t[p]][o] = e ? i ? Object(er.a)(e[p]) : e[p] : 1;
          return c
        }
        var c = e.typed,
          f = e.equalScalar,
          l = e.Matrix;
        return t.prototype = new l, t.prototype.createSparseMatrix = function (e, r) {
          return new t(e, r)
        }, t.prototype.type = "SparseMatrix", t.prototype.isSparseMatrix = !0, t.prototype.getDataType = function () {
          return Object(Qt.h)(this._values, qt.M)
        }, t.prototype.storage = function () {
          return "sparse"
        }, t.prototype.datatype = function () {
          return this._datatype
        }, t.prototype.create = function (e, r) {
          return new t(e, r)
        }, t.prototype.density = function () {
          var e = this._size[0],
            t = this._size[1];
          return 0 !== e && 0 !== t ? this._index.length / (e * t) : 0
        }, t.prototype.subset = function (e, t, r) {
          if (!this._values) throw new Error("Cannot invoke subset on a Pattern only matrix");
          switch (arguments.length) {
            case 1:
              return n(this, e);
            case 2:
            case 3:
              return function (e, t, r, n) {
                if (!t || !0 !== t.isIndex) throw new TypeError("Invalid index");
                var i, a = t.size(),
                  o = t.isScalar();
                if (Object(qt.v)(r) ? (i = r.size(), r = r.toArray()) : i = Object(Qt.a)(r), o) {
                  if (0 !== i.length) throw new TypeError("Scalar expected");
                  e.set(t.min(), r, n)
                } else {
                  if (1 !== a.length && 2 !== a.length) throw new tr.a(a.length, e._size.length, "<");
                  if (i.length < a.length) {
                    for (var s = 0, u = 0; 1 === a[s] && 1 === i[s];) s++;
                    for (; 1 === a[s];) u++, s++;
                    r = Object(Qt.q)(r, a.length, u, i)
                  }
                  if (!Object(er.d)(a, i)) throw new tr.a(a, i, ">");
                  for (var c = t.min()[0], f = t.min()[1], l = i[0], p = i[1], m = 0; m < l; m++)
                    for (var h, d = 0; d < p; d++) h = r[m][d], e.set([m + c, d + f], h, n)
                }
                return e
              }(this, e, t, r);
            default:
              throw new SyntaxError("Wrong number of arguments")
          }
        }, t.prototype.get = function (e) {
          if (!Object(qt.b)(e)) throw new TypeError("Array expected");
          if (e.length !== this._size.length) throw new tr.a(e.length, this._size.length);
          if (!this._values) throw new Error("Cannot invoke get on a Pattern only matrix");
          var t = e[0],
            r = e[1];
          Object(Qt.s)(t, this._size[0]), Object(Qt.s)(r, this._size[1]);
          var n = i(t, this._ptr[r], this._ptr[r + 1], this._index);
          return n < this._ptr[r + 1] && this._index[n] === t ? this._values[n] : 0
        }, t.prototype.set = function (e, t, r) {
          if (!Object(qt.b)(e)) throw new TypeError("Array expected");
          if (e.length !== this._size.length) throw new tr.a(e.length, this._size.length);
          if (!this._values) throw new Error("Cannot invoke set on a Pattern only matrix");
          var n = e[0],
            s = e[1],
            u = this._size[0],
            l = this._size[1],
            p = f,
            m = 0;
          Object(qt.I)(this._datatype) && (p = c.find(f, [this._datatype, this._datatype]) || f, m = c.convert(0, this._datatype)), (n > u - 1 || s > l - 1) && (o(this, Math.max(n + 1, u), Math.max(s + 1, l), r), u = this._size[0], l = this._size[1]), Object(Qt.s)(n, u), Object(Qt.s)(s, l);
          var h = i(n, this._ptr[s], this._ptr[s + 1], this._index);
          return h < this._ptr[s + 1] && this._index[h] === n ? p(t, m) ? function (e, t, r, n, i) {
            r.splice(e, 1), n.splice(e, 1);
            for (var a = t + 1; a < i.length; a++) i[a]--
          }(h, s, this._values, this._index, this._ptr) : this._values[h] = t : a(h, n, s, t, this._values, this._index, this._ptr), this
        }, t.prototype.resize = function (e, t, r) {
          if (!Object(qt.b)(e)) throw new TypeError("Array expected");
          if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
          return e.forEach(function (t) {
            if (!Object(qt.y)(t) || !Object(zt.i)(t) || 0 > t) throw new TypeError("Invalid size, must contain positive integers (size: " + Object(Kt.d)(e) + ")")
          }), o(r ? this.clone() : this, e[0], e[1], t)
        }, t.prototype.reshape = function (e, t) {
          if (!Object(qt.b)(e)) throw new TypeError("Array expected");
          if (2 !== e.length) throw new Error("Sparse matrices can only be reshaped in two dimensions");
          if (e.forEach(function (t) {
              if (!Object(qt.y)(t) || !Object(zt.i)(t) || 0 > t) throw new TypeError("Invalid size, must contain positive integers (size: " + Object(Kt.d)(e) + ")")
            }), this._size[0] * this._size[1] != e[0] * e[1]) throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
          var r = t ? this.clone() : this;
          if (this._size[0] === e[0] && this._size[1] === e[1]) return r;
          for (var n = [], o = 0; o < r._ptr.length; o++)
            for (var s = 0; s < r._ptr[o + 1] - r._ptr[o]; s++) n.push(o);
          for (var u = r._values.slice(), c = r._index.slice(), f = 0; f < r._index.length; f++) {
            var l = c[f],
              p = n[f],
              m = l * r._size[1] + p;
            n[f] = m % e[1], c[f] = Math.floor(m / e[1])
          }
          r._values.length = 0, r._index.length = 0, r._ptr.length = e[1] + 1, r._size = e.slice();
          for (var h = 0; h < r._ptr.length; h++) r._ptr[h] = 0;
          for (var d = 0; d < u.length; d++) {
            var y = c[d],
              g = n[d],
              b = u[d];
            a(i(y, r._ptr[g], r._ptr[g + 1], r._index), y, g, b, r._values, r._index, r._ptr)
          }
          return r
        }, t.prototype.clone = function () {
          return new t({
            values: this._values ? Object(er.a)(this._values) : void 0,
            index: Object(er.a)(this._index),
            ptr: Object(er.a)(this._ptr),
            size: Object(er.a)(this._size),
            datatype: this._datatype
          })
        }, t.prototype.size = function () {
          return this._size.slice(0)
        }, t.prototype.map = function (e, t) {
          if (!this._values) throw new Error("Cannot invoke map on a Pattern only matrix");
          var r = this;
          return s(this, 0, this._size[0] - 1, 0, this._size[1] - 1, function (t, n, i) {
            return e(t, [n, i], r)
          }, t)
        }, t.prototype.forEach = function (e, t) {
          if (!this._values) throw new Error("Cannot invoke forEach on a Pattern only matrix");
          for (var r = this._size[0], n = this._size[1], i = 0; i < n; i++) {
            var a = this._ptr[i],
              o = this._ptr[i + 1];
            if (t)
              for (var s, u = a; u < o; u++) s = this._index[u], e(this._values[u], [s, i], this);
            else {
              for (var c = {}, f = a; f < o; f++) c[this._index[f]] = this._values[f];
              for (var l = 0; l < r; l++) e(l in c ? c[l] : 0, [l, i], this)
            }
          }
        }, t.prototype.toArray = function () {
          return u(this._values, this._index, this._ptr, this._size, !0)
        }, t.prototype.valueOf = function () {
          return u(this._values, this._index, this._ptr, this._size, !1)
        }, t.prototype.format = function (e) {
          for (var t = this._size[0], r = this._size[1], n = this.density(), i = "Sparse Matrix [" + Object(Kt.d)(t, e) + " x " + Object(Kt.d)(r, e) + "] density: " + Object(Kt.d)(n, e) + "\n", a = 0; a < r; a++)
            for (var o, s = this._ptr[a], u = this._ptr[a + 1], c = s; c < u; c++) o = this._index[c], i += "\n    (" + Object(Kt.d)(o, e) + ", " + Object(Kt.d)(a, e) + ") ==> " + (this._values ? Object(Kt.d)(this._values[c], e) : "X");
          return i
        }, t.prototype.toString = function () {
          return Object(Kt.d)(this.toArray())
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
          if (e) {
            if (Object(qt.e)(e) && (e = e.toNumber()), !Object(qt.y)(e) || !Object(zt.i)(e)) throw new TypeError("The parameter k must be an integer number")
          } else e = 0;
          var r = 0 < e ? e : 0,
            n = 0 > e ? -e : 0,
            i = this._size[0],
            a = this._size[1],
            o = Math.min(i - n, a - r),
            s = [],
            u = [],
            c = [];
          c[0] = 0;
          for (var f = r; f < a && s.length < o; f++)
            for (var l, p = this._ptr[f], m = this._ptr[f + 1], h = p; h < m; h++)
              if ((l = this._index[h]) === f - r + n) {
                s.push(this._values[h]), u[s.length - 1] = l - n;
                break
              } return c.push(s.length), new t({
            values: s,
            index: u,
            ptr: c,
            size: [o, 1]
          })
        }, t.fromJSON = function (e) {
          return new t(e)
        }, t.diagonal = function (e, r, n, i, a) {
          if (!Object(qt.b)(e)) throw new TypeError("Array expected, size parameter");
          if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
          if (e = e.map(function (e) {
              if (Object(qt.e)(e) && (e = e.toNumber()), !Object(qt.y)(e) || !Object(zt.i)(e) || 1 > e) throw new Error("Size values must be positive integers");
              return e
            }), n) {
            if (Object(qt.e)(n) && (n = n.toNumber()), !Object(qt.y)(n) || !Object(zt.i)(n)) throw new TypeError("The parameter k must be an integer number")
          } else n = 0;
          var o = f,
            s = 0;
          Object(qt.I)(a) && (o = c.find(f, [a, a]) || f, s = c.convert(0, a));
          var u, l = 0 < n ? n : 0,
            p = 0 > n ? -n : 0,
            m = e[0],
            h = e[1],
            d = Math.min(m - p, h - l);
          if (Object(qt.b)(r)) {
            if (r.length !== d) throw new Error("Invalid value array length");
            u = function (e) {
              return r[e]
            }
          } else if (Object(qt.v)(r)) {
            var y = r.size();
            if (1 !== y.length || y[0] !== d) throw new Error("Invalid matrix length");
            u = function (e) {
              return r.get([e])
            }
          } else u = function () {
            return r
          };
          for (var g = [], b = [], v = [], x = 0; x < h; x++) {
            v.push(g.length);
            var w = x - l;
            if (0 <= w && w < d) {
              var N = u(w);
              o(N, s) || (b.push(w + p), g.push(N))
            }
          }
          return v.push(g.length), new t({
            values: g,
            index: b,
            ptr: v,
            size: [m, h]
          })
        }, t.prototype.swapRows = function (e, r) {
          if (!(Object(qt.y)(e) && Object(zt.i)(e) && Object(qt.y)(r) && Object(zt.i)(r))) throw new Error("Row index must be positive integers");
          if (2 !== this._size.length) throw new Error("Only two dimensional matrix is supported");
          return Object(Qt.s)(e, this._size[0]), Object(Qt.s)(r, this._size[0]), t._swapRows(e, r, this._size[1], this._values, this._index, this._ptr), this
        }, t._forEachRow = function (e, t, r, n, i) {
          for (var a = n[e], o = n[e + 1], s = a; s < o; s++) i(r[s], t[s])
        }, t._swapRows = function (e, t, r, n, a, o) {
          for (var s = 0; s < r; s++) {
            var u = o[s],
              c = o[s + 1],
              f = i(e, u, c, a),
              l = i(t, u, c, a);
            if (f < c && l < c && a[f] === e && a[l] === t) {
              if (n) {
                var p = n[f];
                n[f] = n[l], n[l] = p
              }
            } else if (f < c && a[f] === e && (l >= c || a[l] !== t)) {
              var m = n ? n[f] : void 0;
              a.splice(l, 0, t), n && n.splice(l, 0, m), a.splice(l <= f ? f + 1 : f, 1), n && n.splice(l <= f ? f + 1 : f, 1)
            } else if (l < c && a[l] === t && (f >= c || a[f] !== e)) {
              var h = n ? n[l] : void 0;
              a.splice(f, 0, e), n && n.splice(f, 0, h), a.splice(f <= l ? l + 1 : l, 1), n && n.splice(f <= l ? l + 1 : l, 1)
            }
          }
        }, t
      }, {
        isClass: !0
      })),
      Or = Object(Dt.a)("number", ["typed"], function (e) {
        var t = (0, e.typed)("number", {
          "": function () {
            return 0
          },
          number: function (e) {
            return e
          },
          string: function (e) {
            if ("NaN" === e) return NaN;
            var t = +e;
            if (isNaN(t)) throw new SyntaxError('String "' + e + '" is no valid number');
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
            return c(e, t)
          }
        });
        return t
      }),
      Mr = Object(Dt.a)("string", ["typed"], function (e) {
        var t = (0, e.typed)("string", {
          "": function () {
            return ""
          },
          number: zt.h,
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
            return c(e, t)
          },
          any: function (e) {
            return e + ""
          }
        });
        return t
      }),
      Er = "boolean",
      jr = Object(Dt.a)(Er, ["typed"], function (e) {
        var t = (0, e.typed)(Er, {
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
            var r = +e;
            if ("" !== e && !isNaN(r)) return !!r;
            throw new Error('Cannot convert "' + e + '" to a boolean')
          },
          "Array | Matrix": function (e) {
            return c(e, t)
          }
        });
        return t
      }),
      Sr = Object(Dt.a)("bignumber", ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.BigNumber,
          n = t("bignumber", {
            "": function () {
              return new r(0)
            },
            number: function (e) {
              return new r(e + "")
            },
            string: function (e) {
              return new r(e)
            },
            BigNumber: function (e) {
              return e
            },
            Fraction: function (e) {
              return new r(e.n).div(e.d).times(e.s)
            },
            null: function () {
              return new r(0)
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      Ar = Object(Dt.a)("complex", ["typed", "Complex"], function (e) {
        var t = e.typed,
          r = e.Complex,
          n = t("complex", {
            "": function () {
              return r.ZERO
            },
            number: function (e) {
              return new r(e, 0)
            },
            "number, number": function (e, t) {
              return new r(e, t)
            },
            "BigNumber, BigNumber": function (e, t) {
              return new r(e.toNumber(), t.toNumber())
            },
            Fraction: function (e) {
              return new r(e.valueOf(), 0)
            },
            Complex: function (e) {
              return e.clone()
            },
            string: function (e) {
              return r(e)
            },
            null: function () {
              return r(0)
            },
            Object: function (e) {
              if ("re" in e && "im" in e) return new r(e.re, e.im);
              if ("r" in e && "phi" in e || "abs" in e && "arg" in e) return new r(e);
              throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)")
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      Cr = Object(Dt.a)("fraction", ["typed", "Fraction"], function (e) {
        var t = e.typed,
          r = e.Fraction,
          n = t("fraction", {
            number: function (e) {
              if (!isFinite(e) || isNaN(e)) throw new Error(e + " cannot be represented as a fraction");
              return new r(e)
            },
            string: function (e) {
              return new r(e)
            },
            "number, number": function (e, t) {
              return new r(e, t)
            },
            null: function () {
              return new r(0)
            },
            BigNumber: function (e) {
              return new r(e.toString())
            },
            Fraction: function (e) {
              return e
            },
            Object: function (e) {
              return new r(e)
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      Tr = Object(Dt.a)("matrix", ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], function (e) {
        function t(e, t, r) {
          if ("dense" === t || "default" === t || void 0 === t) return new n(e, r);
          if ("sparse" === t) return new i(e, r);
          throw new TypeError("Unknown matrix type " + JSON.stringify(t) + ".")
        }
        var r = e.typed,
          n = (e.Matrix, e.DenseMatrix),
          i = e.SparseMatrix;
        return r("matrix", {
          "": function () {
            return t([])
          },
          string: function (e) {
            return t([], e)
          },
          "string, string": function (e, r) {
            return t([], e, r)
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
      _r = "splitUnit",
      Ir = Object(Dt.a)(_r, ["typed"], function (e) {
        return (0, e.typed)(_r, {
          "Unit, Array": function (e, t) {
            return e.splitUnit(t)
          }
        })
      }),
      qr = "number",
      Br = "number, number";
    b.signature = qr, v.signature = Br, x.signature = Br, w.signature = qr, N.signature = qr, O.signature = qr, M.signature = qr, E.signature = qr, j.signature = qr, S.signature = qr, A.signature = Br, C.signature = Br, T.signature = qr, _.signature = qr, I.signature = qr, q.signature = Br, B.signature = Br, k.signature = qr, z.signature = qr, D.signature = Br, R.signature = Br, P.signature = Br;
    var kr = Object(Dt.a)("unaryMinus", ["typed"], function (e) {
        var t = (0, e.typed)("unaryMinus", {
          number: w,
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
            var r = e.clone();
            return r.value = t(e.value), r
          },
          "Array | Matrix": function (e) {
            return c(e, t, !0)
          }
        });
        return t
      }),
      zr = "unaryPlus",
      Dr = Object(Dt.a)(zr, ["typed", "config", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.BigNumber,
          i = t(zr, {
            number: N,
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
              return c(e, i, !0)
            },
            "boolean | string": function (e) {
              return "BigNumber" === r.number ? new n(+e) : +e
            }
          });
        return i
      }),
      Rr = Object(Dt.a)("abs", ["typed"], function (e) {
        var t = (0, e.typed)("abs", {
          number: b,
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
            return c(e, t, !0)
          },
          Unit: function (e) {
            return e.abs()
          }
        });
        return t
      }),
      Pr = Object(Dt.a)("apply", ["typed", "isInteger"], function (e) {
        var t = e.typed,
          r = e.isInteger;
        return t("apply", {
          "Array | Matrix, number | BigNumber, function": function (e, t, n) {
            if (!r(t)) throw new TypeError("Integer number expected for dimension");
            var i = Array.isArray(e) ? Object(Qt.a)(e) : e.size();
            if (0 > t || t >= i.length) throw new ir.a(t, i.length);
            return Object(qt.v)(e) ? e.create(F(e.valueOf(), t, n)) : F(e, t, n)
          }
        })
      }),
      Fr = "addScalar",
      Ur = Object(Dt.a)(Fr, ["typed"], function (e) {
        var t = (0, e.typed)(Fr, {
          "number, number": v,
          "Complex, Complex": function (e, t) {
            return e.add(t)
          },
          "BigNumber, BigNumber": function (e, t) {
            return e.plus(t)
          },
          "Fraction, Fraction": function (e, t) {
            return e.add(t)
          },
          "Unit, Unit": function (e, r) {
            if (null === e.value || void 0 === e.value) throw new Error("Parameter x contains a unit with undefined value");
            if (null === r.value || void 0 === r.value) throw new Error("Parameter y contains a unit with undefined value");
            if (!e.equalBase(r)) throw new Error("Units do not match");
            var n = e.clone();
            return n.value = t(n.value, r.value), n.fixPrefix = !1, n
          }
        });
        return t
      }),
      Lr = Object(Dt.a)("cbrt", ["config", "typed", "isNegative", "unaryMinus", "matrix", "Complex", "BigNumber", "Fraction"], function (e) {
        function t(e, t) {
          var n = e.arg() / 3,
            i = e.abs(),
            a = new s(O(i), 0).mul(new s(0, n).exp());
          if (t) {
            var u = [a, new s(O(i), 0).mul(new s(0, n + 2 * Math.PI / 3).exp()), new s(O(i), 0).mul(new s(0, n - 2 * Math.PI / 3).exp())];
            return "Array" === r.matrix ? u : o(u)
          }
          return a
        }
        var r = e.config,
          n = e.typed,
          i = e.isNegative,
          a = e.unaryMinus,
          o = e.matrix,
          s = e.Complex,
          u = e.BigNumber,
          f = e.Fraction,
          l = n("cbrt", {
            number: O,
            Complex: t,
            "Complex, boolean": t,
            BigNumber: function (e) {
              return e.cbrt()
            },
            Unit: function (e) {
              if (e.value && Object(qt.j)(e.value)) {
                var r = e.clone();
                return r.value = 1, (r = r.pow(1 / 3)).value = t(e.value), r
              }
              var n = i(e.value);
              n && (e.value = a(e.value));
              var o = Object(qt.e)(e.value) ? new u(1).div(3) : Object(qt.o)(e.value) ? new f(1, 3) : 1 / 3,
                s = e.pow(o);
              return n && (s.value = a(s.value)), s
            },
            "Array | Matrix": function (e) {
              return c(e, l, !0)
            }
          });
        return l
      }),
      Hr = Object(Dt.a)("ceil", ["typed", "config", "round"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.round,
          i = t("ceil", {
            number: function (e) {
              return Object(zt.m)(e, n(e), r.epsilon) ? n(e) : M(e)
            },
            Complex: function (e) {
              return e.ceil()
            },
            BigNumber: function (e) {
              return g(e, n(e), r.epsilon) ? n(e) : e.ceil()
            },
            Fraction: function (e) {
              return e.ceil()
            },
            "Array | Matrix": function (e) {
              return c(e, i, !0)
            }
          });
        return i
      }),
      $r = Object(Dt.a)("cube", ["typed"], function (e) {
        var t = (0, e.typed)("cube", {
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
            return c(e, t, !0)
          },
          Unit: function (e) {
            return e.pow(3)
          }
        });
        return t
      }),
      Gr = Object(Dt.a)("exp", ["typed"], function (e) {
        var t = (0, e.typed)("exp", {
          number: j,
          Complex: function (e) {
            return e.exp()
          },
          BigNumber: function (e) {
            return e.exp()
          },
          "Array | Matrix": function (e) {
            return c(e, t)
          }
        });
        return t
      }),
      Zr = Object(Dt.a)("expm1", ["typed", "Complex"], function (e) {
        var t = e.typed,
          r = e.Complex,
          n = t("expm1", {
            number: S,
            Complex: function (e) {
              var t = Math.exp(e.re);
              return new r(t * Math.cos(e.im) - 1, t * Math.sin(e.im))
            },
            BigNumber: function (e) {
              return e.exp().minus(1)
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      Vr = Object(Dt.a)("fix", ["typed", "Complex", "ceil", "floor"], function (e) {
        var t = e.typed,
          r = e.Complex,
          n = e.ceil,
          i = e.floor,
          a = t("fix", {
            number: function (e) {
              return 0 < e ? i(e) : n(e)
            },
            Complex: function (e) {
              return new r(0 < e.re ? Math.floor(e.re) : Math.ceil(e.re), 0 < e.im ? Math.floor(e.im) : Math.ceil(e.im))
            },
            BigNumber: function (e) {
              return e.isNegative() ? n(e) : i(e)
            },
            Fraction: function (e) {
              return 0 > e.s ? e.ceil() : e.floor()
            },
            "Array | Matrix": function (e) {
              return c(e, a, !0)
            }
          });
        return a
      }),
      Jr = Object(Dt.a)("floor", ["typed", "config", "round"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.round,
          i = t("floor", {
            number: function (e) {
              return Object(zt.m)(e, n(e), r.epsilon) ? n(e) : Math.floor(e)
            },
            Complex: function (e) {
              return e.floor()
            },
            BigNumber: function (e) {
              return g(e, n(e), r.epsilon) ? n(e) : e.floor()
            },
            Fraction: function (e) {
              return e.floor()
            },
            "Array | Matrix": function (e) {
              return c(e, i, !0)
            }
          });
        return i
      }),
      Wr = Object(Dt.a)("algorithm01", ["typed"], function (e) {
        var t = e.typed;
        return function (e, r, n, i) {
          var a = e._data,
            o = e._size,
            s = e._datatype,
            u = r._values,
            c = r._index,
            f = r._ptr,
            l = r._size,
            p = r._datatype;
          if (o.length !== l.length) throw new tr.a(o.length, l.length);
          if (o[0] !== l[0] || o[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + l + ")");
          if (!u) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
          var m, h, d = o[0],
            y = o[1],
            g = "string" == typeof s && s === p ? s : void 0,
            b = g ? t.find(n, [g, g]) : n,
            v = [];
          for (m = 0; m < d; m++) v[m] = [];
          var x = [],
            w = [];
          for (h = 0; h < y; h++) {
            for (var N = h + 1, O = f[h], M = f[h + 1], E = O; E < M; E++) x[m = c[E]] = i ? b(u[E], a[m][h]) : b(a[m][h], u[E]), w[m] = N;
            for (m = 0; m < d; m++) v[m][h] = w[m] === N ? x[m] : a[m][h]
          }
          return e.createDenseMatrix({
            data: v,
            size: [d, y],
            datatype: g
          })
        }
      }),
      Yr = Object(Dt.a)("algorithm04", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          r = e.equalScalar;
        return function (e, n, i) {
          var a = e._values,
            o = e._index,
            s = e._ptr,
            u = e._size,
            c = e._datatype,
            f = n._values,
            l = n._index,
            p = n._ptr,
            m = n._size,
            h = n._datatype;
          if (u.length !== m.length) throw new tr.a(u.length, m.length);
          if (u[0] !== m[0] || u[1] !== m[1]) throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + m + ")");
          var d, y = u[0],
            g = u[1],
            b = r,
            v = 0,
            x = i;
          "string" == typeof c && c === h && (d = c, b = t.find(r, [d, d]), v = t.convert(0, d), x = t.find(i, [d, d]));
          var w, N, O, M, E, j = a && f ? [] : void 0,
            S = [],
            A = [],
            C = e.createSparseMatrix({
              values: j,
              index: S,
              ptr: A,
              size: [y, g],
              datatype: d
            }),
            T = a && f ? [] : void 0,
            _ = a && f ? [] : void 0,
            I = [],
            q = [];
          for (N = 0; N < g; N++) {
            A[N] = S.length;
            var B = N + 1;
            for (M = s[N], E = s[N + 1], O = M; O < E; O++) w = o[O], S.push(w), I[w] = B, T && (T[w] = a[O]);
            for (M = p[N], E = p[N + 1], O = M; O < E; O++)
              if (I[w = l[O]] !== B) S.push(w), q[w] = B, _ && (_[w] = f[O]);
              else if (T) {
              var k = x(T[w], f[O]);
              b(k, v) ? I[w] = null : T[w] = k
            }
            if (T && _)
              for (O = A[N]; O < S.length;) I[w = S[O]] === B ? (j[O] = T[w], O++) : q[w] === B ? (j[O] = _[w], O++) : S.splice(O, 1)
          }
          return A[g] = S.length, C
        }
      }),
      Xr = Object(Dt.a)("algorithm10", ["typed", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.DenseMatrix;
        return function (e, n, i, a) {
          var o = e._values,
            s = e._index,
            u = e._ptr,
            c = e._size,
            f = e._datatype;
          if (!o) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
          var l, p = c[0],
            m = c[1],
            h = i;
          "string" == typeof f && (l = f, n = t.convert(n, l), h = t.find(i, [l, l]));
          for (var d, y = [], g = new r({
              data: y,
              size: [p, m],
              datatype: l
            }), b = [], v = [], x = 0; x < m; x++) {
            d = x + 1;
            for (var w, N = u[x], O = u[x + 1], M = N; M < O; M++) b[w = s[M]] = o[M], v[w] = d;
            for (var E = 0; E < p; E++) 0 == x && (y[E] = []), y[E][x] = v[E] === d ? a ? h(n, b[E]) : h(b[E], n) : n
          }
          return g
        }
      }),
      Qr = Object(Dt.a)("algorithm13", ["typed"], function (e) {
        var t = e.typed;
        return function (e, r, n) {
          var i = e._data,
            a = e._size,
            o = e._datatype,
            s = r._data,
            u = r._size,
            c = r._datatype,
            f = [];
          if (a.length !== u.length) throw new tr.a(a.length, u.length);
          for (var l = 0; l < a.length; l++) {
            if (a[l] !== u[l]) throw new RangeError("Dimension mismatch. Matrix A (" + a + ") must match Matrix B (" + u + ")");
            f[l] = a[l]
          }
          var p, m = n;
          "string" == typeof o && o === c && (p = o, m = t.find(n, [p, p]));
          var h = 0 < f.length ? function e(t, r, n, i, a, o) {
            var s = [];
            if (r === n.length - 1)
              for (var u = 0; u < i; u++) s[u] = t(a[u], o[u]);
            else
              for (var c = 0; c < i; c++) s[c] = e(t, r + 1, n, n[r + 1], a[c], o[c]);
            return s
          }(m, 0, f, f[0], i, s) : [];
          return e.createDenseMatrix({
            data: h,
            size: f,
            datatype: p
          })
        }
      }),
      Kr = Object(Dt.a)("algorithm14", ["typed"], function (e) {
        var t = e.typed;
        return function (e, r, n, i) {
          var a, o = e._data,
            s = e._size,
            u = e._datatype,
            c = n;
          "string" == typeof u && (a = u, r = t.convert(r, a), c = t.find(n, [a, a]));
          var f = 0 < s.length ? function e(t, r, n, i, a, o, s) {
            var u = [];
            if (r === n.length - 1)
              for (var c = 0; c < i; c++) u[c] = s ? t(o, a[c]) : t(a[c], o);
            else
              for (var f = 0; f < i; f++) u[f] = e(t, r + 1, n, n[r + 1], a[f], o, s);
            return u
          }(c, 0, s, s[0], o, r, i) : [];
          return e.createDenseMatrix({
            data: f,
            size: Object(er.a)(s),
            datatype: a
          })
        }
      }),
      en = Object(Dt.a)("gcd", ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.BigNumber,
          a = e.DenseMatrix,
          o = Wr({
            typed: t
          }),
          s = Yr({
            typed: t,
            equalScalar: n
          }),
          u = Xr({
            typed: t,
            DenseMatrix: a
          }),
          c = Qr({
            typed: t
          }),
          f = Kr({
            typed: t
          }),
          l = t("gcd", {
            "number, number": A,
            "BigNumber, BigNumber": function (e, t) {
              if (!e.isInt() || !t.isInt()) throw new Error("Parameters in function gcd must be integer numbers");
              for (var r = new i(0); !t.isZero();) {
                var n = e.mod(t);
                e = t, t = n
              }
              return e.lt(r) ? e.neg() : e
            },
            "Fraction, Fraction": function (e, t) {
              return e.gcd(t)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, l)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return o(t, e, l, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, l, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return c(e, t, l)
            },
            "Array, Array": function (e, t) {
              return l(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return l(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return l(e, r(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return u(e, t, l, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return f(e, t, l, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              return u(t, e, l, !0)
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return f(t, e, l, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return f(r(e), t, l, !1).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return f(r(t), e, l, !0).valueOf()
            },
            "Array | Matrix | number | BigNumber, Array | Matrix | number | BigNumber, ...Array | Matrix | number | BigNumber": function (e, t, r) {
              for (var n = l(e, t), i = 0; i < r.length; i++) n = l(n, r[i]);
              return n
            }
          });
        return l
      }),
      tn = Object(Dt.a)("algorithm02", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          r = e.equalScalar;
        return function (e, n, i, a) {
          var o = e._data,
            s = e._size,
            u = e._datatype,
            c = n._values,
            f = n._index,
            l = n._ptr,
            p = n._size,
            m = n._datatype;
          if (s.length !== p.length) throw new tr.a(s.length, p.length);
          if (s[0] !== p[0] || s[1] !== p[1]) throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
          if (!c) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
          var h, d = s[0],
            y = s[1],
            g = r,
            b = 0,
            v = i;
          "string" == typeof u && u === m && (h = u, g = t.find(r, [h, h]), b = t.convert(0, h), v = t.find(i, [h, h]));
          for (var x = [], w = [], N = [], O = 0; O < y; O++) {
            N[O] = w.length;
            for (var M = l[O], E = l[O + 1], j = M; j < E; j++) {
              var S = f[j],
                A = a ? v(c[j], o[S][O]) : v(o[S][O], c[j]);
              g(A, b) || (w.push(S), x.push(A))
            }
          }
          return N[y] = w.length, n.createSparseMatrix({
            values: x,
            index: w,
            ptr: N,
            size: [d, y],
            datatype: h
          })
        }
      }),
      rn = Object(Dt.a)("algorithm06", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          r = e.equalScalar;
        return function (e, n, i) {
          var a = e._values,
            o = e._size,
            s = e._datatype,
            u = n._values,
            c = n._size,
            f = n._datatype;
          if (o.length !== c.length) throw new tr.a(o.length, c.length);
          if (o[0] !== c[0] || o[1] !== c[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + c + ")");
          var l, m = o[0],
            h = o[1],
            d = r,
            y = 0,
            g = i;
          "string" == typeof s && s === f && (l = s, d = t.find(r, [l, l]), y = t.convert(0, l), g = t.find(i, [l, l]));
          for (var b = a && u ? [] : void 0, v = [], x = [], w = e.createSparseMatrix({
              values: b,
              index: v,
              ptr: x,
              size: [m, h],
              datatype: l
            }), N = b ? [] : void 0, O = [], M = [], E = 0; E < h; E++) {
            x[E] = v.length;
            var j = E + 1;
            if (p(e, E, O, N, M, j, w, g), p(n, E, O, N, M, j, w, g), N)
              for (var S, A = x[E]; A < v.length;)
                if (M[S = v[A]] === j) {
                  var C = N[S];
                  d(C, y) ? v.splice(A, 1) : (b.push(C), A++)
                } else v.splice(A, 1);
            else
              for (var T = x[E]; T < v.length;) M[v[T]] === j ? T++ : v.splice(T, 1)
          }
          return x[h] = v.length, w
        }
      }),
      nn = Object(Dt.a)("algorithm11", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          r = e.equalScalar;
        return function (e, n, i, a) {
          var o = e._values,
            s = e._index,
            u = e._ptr,
            c = e._size,
            f = e._datatype;
          if (!o) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
          var l, p = c[0],
            m = c[1],
            h = r,
            d = 0,
            y = i;
          "string" == typeof f && (l = f, h = t.find(r, [l, l]), d = t.convert(0, l), n = t.convert(n, l), y = t.find(i, [l, l]));
          for (var g = [], b = [], v = [], x = e.createSparseMatrix({
              values: g,
              index: b,
              ptr: v,
              size: [p, m],
              datatype: l
            }), w = 0; w < m; w++) {
            v[w] = b.length;
            for (var N = u[w], O = u[w + 1], M = N; M < O; M++) {
              var E = s[M],
                j = a ? y(n, o[M]) : y(o[M], n);
              h(j, d) || (b.push(E), g.push(j))
            }
          }
          return v[m] = b.length, x
        }
      }),
      an = Object(Dt.a)("lcm", ["typed", "matrix", "equalScalar"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = tn({
            typed: t,
            equalScalar: n
          }),
          a = rn({
            typed: t,
            equalScalar: n
          }),
          o = nn({
            typed: t,
            equalScalar: n
          }),
          s = Qr({
            typed: t
          }),
          u = Kr({
            typed: t
          }),
          c = t("lcm", {
            "number, number": C,
            "BigNumber, BigNumber": function (e, t) {
              if (!e.isInt() || !t.isInt()) throw new Error("Parameters in function lcm must be integer numbers");
              if (e.isZero()) return e;
              if (t.isZero()) return t;
              for (var r = e.times(t); !t.isZero();) {
                var n = t;
                t = e.mod(n), e = n
              }
              return r.div(e).abs()
            },
            "Fraction, Fraction": function (e, t) {
              return e.lcm(t)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return a(e, t, c)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return i(t, e, c, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return i(e, t, c, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return s(e, t, c)
            },
            "Array, Array": function (e, t) {
              return c(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return c(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return c(e, r(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return o(e, t, c, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return u(e, t, c, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              return o(t, e, c, !0)
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return u(t, e, c, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return u(r(e), t, c, !1).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return u(r(t), e, c, !0).valueOf()
            },
            "Array | Matrix | number | BigNumber, Array | Matrix | number | BigNumber, ...Array | Matrix | number | BigNumber": function (e, t, r) {
              for (var n = c(e, t), i = 0; i < r.length; i++) n = c(n, r[i]);
              return n
            }
          });
        return c
      }),
      on = Object(Dt.a)("log10", ["typed", "config", "Complex"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.Complex,
          i = t("log10", {
            number: function (e) {
              return 0 <= e || r.predictable ? _(e) : new n(e, 0).log().div(Math.LN10)
            },
            Complex: function (e) {
              return new n(e).log().div(Math.LN10)
            },
            BigNumber: function (e) {
              return !e.isNegative() || r.predictable ? e.log() : new n(e.toNumber(), 0).log().div(Math.LN10)
            },
            "Array | Matrix": function (e) {
              return c(e, i)
            }
          });
        return i
      }),
      sn = Object(Dt.a)("log2", ["typed", "config", "Complex"], function (e) {
        function t(e) {
          var t = Math.sqrt(e.re * e.re + e.im * e.im);
          return new i(Math.log2 ? Math.log2(t) : Math.log(t) / Math.LN2, Math.atan2(e.im, e.re) / Math.LN2)
        }
        var r = e.typed,
          n = e.config,
          i = e.Complex,
          a = r("log2", {
            number: function (e) {
              return 0 <= e || n.predictable ? I(e) : t(new i(e, 0))
            },
            Complex: t,
            BigNumber: function (e) {
              return !e.isNegative() || n.predictable ? e.log(2) : t(new i(e.toNumber(), 0))
            },
            "Array | Matrix": function (e) {
              return c(e, a)
            }
          });
        return a
      }),
      un = Object(Dt.a)("algorithm03", ["typed"], function (e) {
        var t = e.typed;
        return function (e, r, n, i) {
          var a = e._data,
            o = e._size,
            s = e._datatype,
            u = r._values,
            c = r._index,
            f = r._ptr,
            l = r._size,
            p = r._datatype;
          if (o.length !== l.length) throw new tr.a(o.length, l.length);
          if (o[0] !== l[0] || o[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + l + ")");
          if (!u) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
          var m, h = o[0],
            d = o[1],
            y = 0,
            g = n;
          "string" == typeof s && s === p && (m = s, y = t.convert(0, m), g = t.find(n, [m, m]));
          for (var b = [], v = 0; v < h; v++) b[v] = [];
          for (var x, w = [], N = [], O = 0; O < d; O++) {
            x = O + 1;
            for (var M, E = f[O], j = f[O + 1], S = E; S < j; S++) w[M = c[S]] = i ? g(u[S], a[M][O]) : g(a[M][O], u[S]), N[M] = x;
            for (var A = 0; A < h; A++) b[A][O] = N[A] === x ? w[A] : i ? g(y, a[A][O]) : g(a[A][O], y)
          }
          return e.createDenseMatrix({
            data: b,
            size: [h, d],
            datatype: m
          })
        }
      }),
      cn = Object(Dt.a)("algorithm05", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          r = e.equalScalar;
        return function (e, n, i) {
          var a = e._values,
            o = e._index,
            s = e._ptr,
            u = e._size,
            c = e._datatype,
            f = n._values,
            l = n._index,
            p = n._ptr,
            m = n._size,
            h = n._datatype;
          if (u.length !== m.length) throw new tr.a(u.length, m.length);
          if (u[0] !== m[0] || u[1] !== m[1]) throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + m + ")");
          var d, y = u[0],
            g = u[1],
            b = r,
            v = 0,
            x = i;
          "string" == typeof c && c === h && (d = c, b = t.find(r, [d, d]), v = t.convert(0, d), x = t.find(i, [d, d]));
          var w, N, O, M, E = a && f ? [] : void 0,
            j = [],
            S = [],
            A = e.createSparseMatrix({
              values: E,
              index: j,
              ptr: S,
              size: [y, g],
              datatype: d
            }),
            C = E ? [] : void 0,
            T = E ? [] : void 0,
            _ = [],
            I = [];
          for (N = 0; N < g; N++) {
            S[N] = j.length;
            var q = N + 1;
            for (O = s[N], M = s[N + 1]; O < M; O++) w = o[O], j.push(w), _[w] = q, C && (C[w] = a[O]);
            for (O = p[N], M = p[N + 1]; O < M; O++) _[w = l[O]] !== q && j.push(w), I[w] = q, T && (T[w] = f[O]);
            if (E)
              for (O = S[N]; O < j.length;) {
                var B = _[w = j[O]],
                  k = I[w];
                if (B === q || k === q) {
                  var z = x(B === q ? C[w] : v, k === q ? T[w] : v);
                  b(z, v) ? j.splice(O, 1) : (E.push(z), O++)
                }
              }
          }
          return S[g] = j.length, A
        }
      }),
      fn = Object(Dt.a)("algorithm12", ["typed", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.DenseMatrix;
        return function (e, n, i, a) {
          var o = e._values,
            s = e._index,
            u = e._ptr,
            c = e._size,
            f = e._datatype;
          if (!o) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
          var l, p = c[0],
            m = c[1],
            h = i;
          "string" == typeof f && (l = f, n = t.convert(n, l), h = t.find(i, [l, l]));
          for (var d, y = [], g = new r({
              data: y,
              size: [p, m],
              datatype: l
            }), b = [], v = [], x = 0; x < m; x++) {
            d = x + 1;
            for (var w, N = u[x], O = u[x + 1], M = N; M < O; M++) b[w = s[M]] = o[M], v[w] = d;
            for (var E = 0; E < p; E++) 0 == x && (y[E] = []), y[E][x] = v[E] === d ? a ? h(n, b[E]) : h(b[E], n) : a ? h(n, 0) : h(0, n)
          }
          return g
        }
      }),
      ln = Object(Dt.a)("mod", ["typed", "matrix", "equalScalar", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.DenseMatrix,
          a = tn({
            typed: t,
            equalScalar: n
          }),
          o = un({
            typed: t
          }),
          s = cn({
            typed: t,
            equalScalar: n
          }),
          u = nn({
            typed: t,
            equalScalar: n
          }),
          c = fn({
            typed: t,
            DenseMatrix: i
          }),
          f = Qr({
            typed: t
          }),
          l = Kr({
            typed: t
          }),
          p = t("mod", {
            "number, number": q,
            "BigNumber, BigNumber": function (e, t) {
              return t.isZero() ? e : e.mod(t)
            },
            "Fraction, Fraction": function (e, t) {
              return e.mod(t)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, p, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return a(t, e, p, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, p, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return f(e, t, p)
            },
            "Array, Array": function (e, t) {
              return p(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return p(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return p(e, r(t))
            },
            "SparseMatrix, any": function (e, t) {
              return u(e, t, p, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return l(e, t, p, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return c(t, e, p, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return l(t, e, p, !0)
            },
            "Array, any": function (e, t) {
              return l(r(e), t, p, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return l(r(t), e, p, !0).valueOf()
            }
          });
        return p
      }),
      pn = Object(Dt.a)("multiplyScalar", ["typed"], function (e) {
        var t = (0, e.typed)("multiplyScalar", {
          "number, number": x,
          "Complex, Complex": function (e, t) {
            return e.mul(t)
          },
          "BigNumber, BigNumber": function (e, t) {
            return e.times(t)
          },
          "Fraction, Fraction": function (e, t) {
            return e.mul(t)
          },
          "number | Fraction | BigNumber | Complex, Unit": function (e, r) {
            var n = r.clone();
            return n.value = null === n.value ? n._normalize(e) : t(n.value, e), n
          },
          "Unit, number | Fraction | BigNumber | Complex": function (e, r) {
            var n = e.clone();
            return n.value = null === n.value ? n._normalize(r) : t(n.value, r), n
          },
          "Unit, Unit": function (e, t) {
            return e.multiply(t)
          }
        });
        return t
      }),
      mn = "multiply",
      hn = Object(Dt.a)(mn, ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar"], function (e) {
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
                  throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)")
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
                  throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)")
              }
              break;
            default:
              throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + e.length + " dimensions)")
          }
        }

        function r(e, t, r) {
          if (0 === r) throw new Error("Cannot multiply two empty vectors");
          var n, a = e._data,
            u = e._datatype,
            c = t._data,
            f = t._datatype,
            l = o,
            p = s;
          u && f && u === f && "string" == typeof u && (n = u, l = i.find(o, [n, n]), p = i.find(s, [n, n]));
          for (var m = p(a[0], c[0]), h = 1; h < r; h++) m = l(m, p(a[h], c[h]));
          return m
        }

        function n(e, t) {
          if ("dense" !== t.storage()) throw new Error("Support for SparseMatrix not implemented");
          return function (e, t) {
            var r, n = e._data,
              a = e._size,
              u = e._datatype,
              c = t._data,
              f = t._size,
              l = t._datatype,
              p = a[0],
              m = f[1],
              h = o,
              d = s;
            u && l && u === l && "string" == typeof u && (r = u, h = i.find(o, [r, r]), d = i.find(s, [r, r]));
            for (var y, g = [], b = 0; b < m; b++) {
              y = d(n[0], c[0][b]);
              for (var v = 1; v < p; v++) y = h(y, d(n[v], c[v][b]));
              g[b] = y
            }
            return e.createDenseMatrix({
              data: g,
              size: [m],
              datatype: r
            })
          }(e, t)
        }
        var i = e.typed,
          a = e.matrix,
          o = e.addScalar,
          s = e.multiplyScalar,
          u = e.equalScalar,
          c = nn({
            typed: i,
            equalScalar: u
          }),
          f = Kr({
            typed: i
          }),
          l = i(mn, Object(er.e)({
            "Array, Array": function (e, r) {
              t(Object(Qt.a)(e), Object(Qt.a)(r));
              var n = l(a(e), a(r));
              return Object(qt.v)(n) ? n.valueOf() : n
            },
            "Matrix, Matrix": function (e, i) {
              var a = e.size(),
                o = i.size();
              return t(a, o), 1 === a.length ? 1 === o.length ? r(e, i, a[0]) : n(e, i) : 1 === o.length ? p(e, i) : m(e, i)
            },
            "Matrix, Array": function (e, t) {
              return l(e, a(t))
            },
            "Array, Matrix": function (e, t) {
              return l(a(e, t.storage()), t)
            },
            "SparseMatrix, any": function (e, t) {
              return c(e, t, s, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return f(e, t, s, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return c(t, e, s, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return f(t, e, s, !0)
            },
            "Array, any": function (e, t) {
              return f(a(e), t, s, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return f(a(t), e, s, !0).valueOf()
            },
            "any, any": s,
            "any, any, ...any": function (e, t, r) {
              for (var n = l(e, t), i = 0; i < r.length; i++) n = l(n, r[i]);
              return n
            }
          }, s.signatures)),
          p = i("_multiplyMatrixVector", {
            "DenseMatrix, any": function (e, t) {
              var r, n = e._data,
                a = e._size,
                u = e._datatype,
                c = t._data,
                f = t._datatype,
                l = a[0],
                p = a[1],
                m = o,
                h = s;
              u && f && u === f && "string" == typeof u && (r = u, m = i.find(o, [r, r]), h = i.find(s, [r, r]));
              for (var d = [], y = 0; y < l; y++) {
                for (var g = n[y], b = h(g[0], c[0]), v = 1; v < p; v++) b = m(b, h(g[v], c[v]));
                d[y] = b
              }
              return e.createDenseMatrix({
                data: d,
                size: [l],
                datatype: r
              })
            },
            "SparseMatrix, any": function (e, t) {
              var r = e._values,
                n = e._index,
                a = e._ptr,
                c = e._datatype;
              if (!r) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
              var f, l = t._data,
                p = t._datatype,
                m = e._size[0],
                h = t._size[0],
                d = [],
                y = [],
                g = [],
                b = o,
                v = s,
                x = u,
                w = 0;
              c && p && c === p && "string" == typeof c && (f = c, b = i.find(o, [f, f]), v = i.find(s, [f, f]), x = i.find(u, [f, f]), w = i.convert(0, f));
              var N = [],
                O = [];
              g[0] = 0;
              for (var M, E = 0; E < h; E++)
                if (!x(M = l[E], w))
                  for (var j, S = a[E], A = a[E + 1], C = S; C < A; C++) O[j = n[C]] ? N[j] = b(N[j], v(M, r[C])) : (O[j] = !0, y.push(j), N[j] = v(M, r[C]));
              for (var T, _ = y.length, I = 0; I < _; I++) T = y[I], d[I] = N[T];
              return g[1] = y.length, e.createSparseMatrix({
                values: d,
                index: y,
                ptr: g,
                size: [m, 1],
                datatype: f
              })
            }
          }),
          m = i("_multiplyMatrixMatrix", {
            "DenseMatrix, DenseMatrix": function (e, t) {
              var r, n = e._data,
                a = e._size,
                u = e._datatype,
                c = t._data,
                f = t._size,
                l = t._datatype,
                p = a[0],
                m = a[1],
                h = f[1],
                d = o,
                y = s;
              u && l && u === l && "string" == typeof u && (r = u, d = i.find(o, [r, r]), y = i.find(s, [r, r]));
              for (var g, b = [], v = 0; v < p; v++) {
                g = n[v], b[v] = [];
                for (var x, w = 0; w < h; w++) {
                  x = y(g[0], c[0][w]);
                  for (var N = 1; N < m; N++) x = d(x, y(g[N], c[N][w]));
                  b[v][w] = x
                }
              }
              return e.createDenseMatrix({
                data: b,
                size: [p, h],
                datatype: r
              })
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              var r = e._data,
                n = e._size,
                a = e._datatype,
                c = t._values,
                f = t._index,
                l = t._ptr,
                p = t._size,
                m = t._datatype;
              if (!c) throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
              var h, d = n[0],
                y = p[1],
                g = o,
                b = s,
                v = u,
                x = 0;
              a && m && a === m && "string" == typeof a && (h = a, g = i.find(o, [h, h]), b = i.find(s, [h, h]), v = i.find(u, [h, h]), x = i.convert(0, h));
              for (var w = [], N = [], O = [], M = t.createSparseMatrix({
                  values: w,
                  index: N,
                  ptr: O,
                  size: [d, y],
                  datatype: h
                }), E = 0; E < y; E++) {
                O[E] = N.length;
                var j = l[E],
                  S = l[E + 1];
                if (S > j)
                  for (var A = 0, C = 0; C < d; C++) {
                    for (var T, _ = C + 1, I = void 0, q = j; q < S; q++) T = f[q], A === _ ? I = g(I, b(r[C][T], c[q])) : (I = b(r[C][T], c[q]), A = _);
                    A !== _ || v(I, x) || (N.push(C), w.push(I))
                  }
              }
              return O[y] = N.length, M
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              var r = e._values,
                n = e._index,
                a = e._ptr,
                c = e._datatype;
              if (!r) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
              var f, l = t._data,
                p = t._datatype,
                m = e._size[0],
                h = t._size[0],
                d = t._size[1],
                y = o,
                g = s,
                b = u,
                v = 0;
              c && p && c === p && "string" == typeof c && (f = c, y = i.find(o, [f, f]), g = i.find(s, [f, f]), b = i.find(u, [f, f]), v = i.convert(0, f));
              for (var x = [], w = [], N = [], O = e.createSparseMatrix({
                  values: x,
                  index: w,
                  ptr: N,
                  size: [m, d],
                  datatype: f
                }), M = [], E = [], j = 0; j < d; j++) {
                N[j] = w.length;
                for (var S, A = j + 1, C = 0; C < h; C++)
                  if (!b(S = l[C][j], v))
                    for (var T, _ = a[C], I = a[C + 1], q = _; q < I; q++) E[T = n[q]] === A ? M[T] = y(M[T], g(S, r[q])) : (E[T] = A, w.push(T), M[T] = g(S, r[q]));
                for (var B, k = N[j], z = w.length, D = k; D < z; D++) B = w[D], x[D] = M[B]
              }
              return N[d] = w.length, O
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              var r, n = e._values,
                a = e._index,
                u = e._ptr,
                c = e._datatype,
                f = t._values,
                l = t._index,
                p = t._ptr,
                m = t._datatype,
                h = e._size[0],
                d = t._size[1],
                y = n && f,
                g = o,
                b = s;
              c && m && c === m && "string" == typeof c && (r = c, g = i.find(o, [r, r]), b = i.find(s, [r, r]));
              for (var v, x, w, N, O, M, E, j, S = y ? [] : void 0, A = [], C = [], T = e.createSparseMatrix({
                  values: S,
                  index: A,
                  ptr: C,
                  size: [h, d],
                  datatype: r
                }), _ = y ? [] : void 0, I = [], q = 0; q < d; q++) {
                C[q] = A.length;
                var B = q + 1;
                for (O = p[q], M = p[q + 1], N = O; N < M; N++)
                  if (j = l[N], y)
                    for (x = u[j], w = u[j + 1], v = x; v < w; v++) I[E = a[v]] === B ? _[E] = g(_[E], b(f[N], n[v])) : (I[E] = B, A.push(E), _[E] = b(f[N], n[v]));
                  else
                    for (x = u[j], w = u[j + 1], v = x; v < w; v++) I[E = a[v]] !== B && (I[E] = B, A.push(E));
                if (y)
                  for (var k, z = C[q], D = A.length, R = z; R < D; R++) k = A[R], S[R] = _[k]
              }
              return C[d] = A.length, T
            }
          });
        return l
      }),
      dn = "nthRoot",
      yn = Object(Dt.a)(dn, ["typed", "matrix", "equalScalar", "BigNumber"], function (e) {
        function t(e, t) {
          var r = a.precision,
            n = a.clone({
              precision: r + 2
            }),
            i = new a(0),
            o = new n(1),
            s = t.isNegative();
          if (s && (t = t.neg()), t.isZero()) throw new Error("Root must be non-zero");
          if (e.isNegative() && !t.abs().mod(2).equals(1)) throw new Error("Root must be odd when a is negative.");
          if (e.isZero()) return s ? new n(1 / 0) : 0;
          if (!e.isFinite()) return s ? i : e;
          var u = e.abs().pow(o.div(t));
          return u = e.isNeg() ? u.neg() : u, new a((s ? o.div(u) : u).toPrecision(r))
        }
        var r = e.typed,
          n = e.matrix,
          i = e.equalScalar,
          a = e.BigNumber,
          o = Wr({
            typed: r
          }),
          s = tn({
            typed: r,
            equalScalar: i
          }),
          u = rn({
            typed: r,
            equalScalar: i
          }),
          c = nn({
            typed: r,
            equalScalar: i
          }),
          f = Qr({
            typed: r
          }),
          l = Kr({
            typed: r
          }),
          p = "Complex number not supported in function nthRoot. Use nthRoots instead.",
          m = r(dn, {
            number: function (e) {
              return B(e, 2)
            },
            "number, number": B,
            BigNumber: function (e) {
              return t(e, new a(2))
            },
            Complex: function () {
              throw new Error(p)
            },
            "Complex, number": function () {
              throw new Error(p)
            },
            "BigNumber, BigNumber": t,
            "Array | Matrix": function (e) {
              return m(e, 2)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              if (1 === t.density()) return u(e, t, m);
              throw new Error("Root must be non-zero")
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return s(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              if (1 === t.density()) return o(e, t, m, !1);
              throw new Error("Root must be non-zero")
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return f(e, t, m)
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
            "SparseMatrix, number | BigNumber": function (e, t) {
              return c(e, t, m, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return l(e, t, m, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              if (1 === t.density()) return c(t, e, m, !0);
              throw new Error("Root must be non-zero")
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return l(t, e, m, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return m(n(e), t).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return m(e, n(t)).valueOf()
            }
          });
        return m
      }),
      gn = (Object(Dt.a)(dn, ["typed"], function (e) {
        return (0, e.typed)(dn, {
          number: B,
          "number, number": B
        })
      }), Object(Dt.a)("sign", ["typed", "BigNumber", "Fraction"], function (e) {
        var t = e.typed,
          r = e.BigNumber,
          n = e.Fraction,
          i = t("sign", {
            number: k,
            Complex: function (e) {
              return e.sign()
            },
            BigNumber: function (e) {
              return new r(e.cmp(0))
            },
            Fraction: function (e) {
              return new n(e.s, 1)
            },
            "Array | Matrix": function (e) {
              return c(e, i, !0)
            },
            Unit: function (e) {
              return i(e.value)
            }
          });
        return i
      })),
      bn = Object(Dt.a)("sqrt", ["config", "typed", "Complex"], function (e) {
        function t(e) {
          return isNaN(e) ? NaN : 0 <= e || r.predictable ? Math.sqrt(e) : new i(e, 0).sqrt()
        }
        var r = e.config,
          n = e.typed,
          i = e.Complex,
          a = n("sqrt", {
            number: t,
            Complex: function (e) {
              return e.sqrt()
            },
            BigNumber: function (e) {
              return !e.isNegative() || r.predictable ? e.sqrt() : t(e.toNumber())
            },
            "Array | Matrix": function (e) {
              return c(e, a, !0)
            },
            Unit: function (e) {
              return e.pow(.5)
            }
          });
        return a
      }),
      vn = Object(Dt.a)("square", ["typed"], function (e) {
        var t = (0, e.typed)("square", {
          number: z,
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
            return c(e, t, !0)
          },
          Unit: function (e) {
            return e.pow(2)
          }
        });
        return t
      }),
      xn = "subtract",
      wn = Object(Dt.a)(xn, ["typed", "matrix", "equalScalar", "addScalar", "unaryMinus", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.addScalar,
          a = e.unaryMinus,
          o = e.DenseMatrix,
          s = Wr({
            typed: t
          }),
          u = un({
            typed: t
          }),
          c = cn({
            typed: t,
            equalScalar: n
          }),
          f = Xr({
            typed: t,
            DenseMatrix: o
          }),
          l = Qr({
            typed: t
          }),
          p = Kr({
            typed: t
          }),
          m = t(xn, {
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
              var r = e.clone();
              return r.value = m(r.value, t.value), r.fixPrefix = !1, r
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return U(e, t), c(e, t, m)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return U(e, t), u(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return U(e, t), s(e, t, m, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return U(e, t), l(e, t, m)
            },
            "Array, Array": function (e, t) {
              return m(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, r(t))
            },
            "SparseMatrix, any": function (e, t) {
              return f(e, a(t), i)
            },
            "DenseMatrix, any": function (e, t) {
              return p(e, t, m)
            },
            "any, SparseMatrix": function (e, t) {
              return f(t, e, m, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return p(t, e, m, !0)
            },
            "Array, any": function (e, t) {
              return p(r(e), t, m, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return p(r(t), e, m, !0).valueOf()
            }
          });
        return m
      }),
      Nn = Object(Dt.a)("xgcd", ["typed", "config", "matrix", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.matrix,
          i = e.BigNumber;
        return t("xgcd", {
          "number, number": function (e, t) {
            var i = D(e, t);
            return "Array" === r.matrix ? i : n(i)
          },
          "BigNumber, BigNumber": function (e, t) {
            var a, o, s, u, c = new i(0),
              f = new i(1),
              l = c,
              p = f,
              m = f,
              h = c;
            if (!e.isInt() || !t.isInt()) throw new Error("Parameters in function xgcd must be integer numbers");
            for (; !t.isZero();) o = e.div(t).floor(), s = e.mod(t), a = l, l = p.minus(o.times(l)), p = a, a = m, m = h.minus(o.times(m)), h = a, e = t, t = s;
            return u = e.lt(c) ? [e.neg(), p.neg(), h.neg()] : [e, e.isZero() ? 0 : p, h], "Array" === r.matrix ? u : n(u)
          }
        })
      }),
      On = Object(Dt.a)("algorithm09", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          r = e.equalScalar;
        return function (e, n, i) {
          var a = e._values,
            o = e._index,
            s = e._ptr,
            u = e._size,
            c = e._datatype,
            f = n._values,
            l = n._index,
            p = n._ptr,
            m = n._size,
            h = n._datatype;
          if (u.length !== m.length) throw new tr.a(u.length, m.length);
          if (u[0] !== m[0] || u[1] !== m[1]) throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + m + ")");
          var d, y = u[0],
            g = u[1],
            b = r,
            v = 0,
            x = i;
          "string" == typeof c && c === h && (d = c, b = t.find(r, [d, d]), v = t.convert(0, d), x = t.find(i, [d, d]));
          var w, N, O, M, E, j = a && f ? [] : void 0,
            S = [],
            A = [],
            C = e.createSparseMatrix({
              values: j,
              index: S,
              ptr: A,
              size: [y, g],
              datatype: d
            }),
            T = j ? [] : void 0,
            _ = [];
          for (N = 0; N < g; N++) {
            A[N] = S.length;
            var I = N + 1;
            if (T)
              for (M = p[N], E = p[N + 1], O = M; O < E; O++) _[w = l[O]] = I, T[w] = f[O];
            for (M = s[N], E = s[N + 1], O = M; O < E; O++)
              if (w = o[O], T) {
                var q = _[w] === I ? T[w] : v,
                  B = x(a[O], q);
                b(B, v) || (S.push(w), j.push(B))
              } else S.push(w)
          }
          return A[g] = S.length, C
        }
      }),
      Mn = "dotMultiply",
      En = Object(Dt.a)(Mn, ["typed", "matrix", "equalScalar", "multiplyScalar"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.multiplyScalar,
          a = tn({
            typed: t,
            equalScalar: n
          }),
          o = On({
            typed: t,
            equalScalar: n
          }),
          s = nn({
            typed: t,
            equalScalar: n
          }),
          u = Qr({
            typed: t
          }),
          c = Kr({
            typed: t
          }),
          f = t(Mn, {
            "any, any": i,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, i, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return a(t, e, i, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return a(e, t, i, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return u(e, t, i)
            },
            "Array, Array": function (e, t) {
              return f(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return f(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return f(e, r(t))
            },
            "SparseMatrix, any": function (e, t) {
              return s(e, t, i, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return c(e, t, i, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return s(t, e, i, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return c(t, e, i, !0)
            },
            "Array, any": function (e, t) {
              return c(r(e), t, i, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return c(r(t), e, i, !0).valueOf()
            }
          });
        return f
      }),
      jn = "number, number";
    Y.signature = jn, X.signature = "number", Q.signature = jn, K.signature = jn, ee.signature = jn, te.signature = jn, re.signature = jn;
    var Sn = Object(Dt.a)("bitAnd", ["typed", "matrix", "equalScalar"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = tn({
            typed: t,
            equalScalar: n
          }),
          a = rn({
            typed: t,
            equalScalar: n
          }),
          o = nn({
            typed: t,
            equalScalar: n
          }),
          s = Qr({
            typed: t
          }),
          u = Kr({
            typed: t
          }),
          c = t("bitAnd", {
            "number, number": Y,
            "BigNumber, BigNumber": L,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return a(e, t, c, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return i(t, e, c, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return i(e, t, c, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return s(e, t, c)
            },
            "Array, Array": function (e, t) {
              return c(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return c(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return c(e, r(t))
            },
            "SparseMatrix, any": function (e, t) {
              return o(e, t, c, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return u(e, t, c, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return o(t, e, c, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return u(t, e, c, !0)
            },
            "Array, any": function (e, t) {
              return u(r(e), t, c, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return u(r(t), e, c, !0).valueOf()
            }
          });
        return c
      }),
      An = Object(Dt.a)("bitNot", ["typed"], function (e) {
        var t = (0, e.typed)("bitNot", {
          number: X,
          BigNumber: H,
          "Array | Matrix": function (e) {
            return c(e, t)
          }
        });
        return t
      }),
      Cn = Object(Dt.a)("bitOr", ["typed", "matrix", "equalScalar", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.DenseMatrix,
          a = Wr({
            typed: t
          }),
          o = Yr({
            typed: t,
            equalScalar: n
          }),
          s = Xr({
            typed: t,
            DenseMatrix: i
          }),
          u = Qr({
            typed: t
          }),
          c = Kr({
            typed: t
          }),
          f = t("bitOr", {
            "number, number": Q,
            "BigNumber, BigNumber": $,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, f)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return a(t, e, f, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return a(e, t, f, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return u(e, t, f)
            },
            "Array, Array": function (e, t) {
              return f(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return f(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return f(e, r(t))
            },
            "SparseMatrix, any": function (e, t) {
              return s(e, t, f, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return c(e, t, f, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return s(t, e, f, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return c(t, e, f, !0)
            },
            "Array, any": function (e, t) {
              return c(r(e), t, f, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return c(r(t), e, f, !0).valueOf()
            }
          });
        return f
      }),
      Tn = Object(Dt.a)("algorithm07", ["typed", "DenseMatrix"], function (e) {
        function t(e, t, r, n, i) {
          for (var a, o = e._values, s = e._index, u = e._ptr, c = u[t], f = u[t + 1]; c < f; c++) r[a = s[c]] = i, n[a] = o[c]
        }
        var r = e.typed,
          n = e.DenseMatrix;
        return function (e, i, a) {
          var o = e._size,
            s = e._datatype,
            u = i._size,
            c = i._datatype;
          if (o.length !== u.length) throw new tr.a(o.length, u.length);
          if (o[0] !== u[0] || o[1] !== u[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + u + ")");
          var f, l = o[0],
            p = o[1],
            m = 0,
            h = a;
          "string" == typeof s && s === c && (f = s, m = r.convert(0, f), h = r.find(a, [f, f]));
          var d, y, g = [];
          for (d = 0; d < l; d++) g[d] = [];
          var b = new n({
              data: g,
              size: [l, p],
              datatype: f
            }),
            v = [],
            x = [],
            w = [],
            N = [];
          for (y = 0; y < p; y++) {
            var O = y + 1;
            for (t(e, y, w, v, O), t(i, y, N, x, O), d = 0; d < l; d++) {
              var M = w[d] === O ? v[d] : m,
                E = N[d] === O ? x[d] : m;
              g[d][y] = h(M, E)
            }
          }
          return b
        }
      }),
      _n = Object(Dt.a)("bitXor", ["typed", "matrix", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.DenseMatrix,
          i = un({
            typed: t
          }),
          a = Tn({
            typed: t,
            DenseMatrix: n
          }),
          o = fn({
            typed: t,
            DenseMatrix: n
          }),
          s = Qr({
            typed: t
          }),
          u = Kr({
            typed: t
          }),
          c = t("bitXor", {
            "number, number": K,
            "BigNumber, BigNumber": V,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return a(e, t, c)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return i(t, e, c, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return i(e, t, c, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return s(e, t, c)
            },
            "Array, Array": function (e, t) {
              return c(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return c(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return c(e, r(t))
            },
            "SparseMatrix, any": function (e, t) {
              return o(e, t, c, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return u(e, t, c, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return o(t, e, c, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return u(t, e, c, !0)
            },
            "Array, any": function (e, t) {
              return u(r(e), t, c, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return u(r(t), e, c, !0).valueOf()
            }
          });
        return c
      }),
      In = Object(Dt.a)("arg", ["typed"], function (e) {
        var t = (0, e.typed)("arg", {
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
            return c(e, t)
          }
        });
        return t
      }),
      qn = Object(Dt.a)("conj", ["typed"], function (e) {
        var t = (0, e.typed)("conj", {
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
            return c(e, t)
          }
        });
        return t
      }),
      Bn = Object(Dt.a)("im", ["typed"], function (e) {
        var t = (0, e.typed)("im", {
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
            return c(e, t)
          }
        });
        return t
      }),
      kn = Object(Dt.a)("re", ["typed"], function (e) {
        var t = (0, e.typed)("re", {
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
            return c(e, t)
          }
        });
        return t
      }),
      zn = "number, number";
    ne.signature = "number", ie.signature = zn, ae.signature = zn, oe.signature = zn;
    var Dn = Object(Dt.a)("not", ["typed"], function (e) {
        var t = (0, e.typed)("not", {
          number: ne,
          Complex: function (e) {
            return 0 === e.re && 0 === e.im
          },
          BigNumber: function (e) {
            return e.isZero() || e.isNaN()
          },
          Unit: function (e) {
            return null === e.value || t(e.value)
          },
          "Array | Matrix": function (e) {
            return c(e, t)
          }
        });
        return t
      }),
      Rn = Object(Dt.a)("or", ["typed", "matrix", "equalScalar", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.DenseMatrix,
          a = un({
            typed: t
          }),
          o = cn({
            typed: t,
            equalScalar: n
          }),
          s = fn({
            typed: t,
            DenseMatrix: i
          }),
          u = Qr({
            typed: t
          }),
          c = Kr({
            typed: t
          }),
          f = t("or", {
            "number, number": ie,
            "Complex, Complex": function (e, t) {
              return 0 !== e.re || 0 !== e.im || 0 !== t.re || 0 !== t.im
            },
            "BigNumber, BigNumber": function (e, t) {
              return !e.isZero() && !e.isNaN() || !t.isZero() && !t.isNaN()
            },
            "Unit, Unit": function (e, t) {
              return f(e.value || 0, t.value || 0)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, f)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return a(t, e, f, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return a(e, t, f, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return u(e, t, f)
            },
            "Array, Array": function (e, t) {
              return f(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return f(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return f(e, r(t))
            },
            "SparseMatrix, any": function (e, t) {
              return s(e, t, f, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return c(e, t, f, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return s(t, e, f, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return c(t, e, f, !0)
            },
            "Array, any": function (e, t) {
              return c(r(e), t, f, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return c(r(t), e, f, !0).valueOf()
            }
          });
        return f
      }),
      Pn = Object(Dt.a)("xor", ["typed", "matrix", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.DenseMatrix,
          i = un({
            typed: t
          }),
          a = Tn({
            typed: t,
            DenseMatrix: n
          }),
          o = fn({
            typed: t,
            DenseMatrix: n
          }),
          s = Qr({
            typed: t
          }),
          u = Kr({
            typed: t
          }),
          c = t("xor", {
            "number, number": ae,
            "Complex, Complex": function (e, t) {
              return (0 !== e.re || 0 !== e.im) != (0 !== t.re || 0 !== t.im)
            },
            "BigNumber, BigNumber": function (e, t) {
              return (!e.isZero() && !e.isNaN()) != (!t.isZero() && !t.isNaN())
            },
            "Unit, Unit": function (e, t) {
              return c(e.value || 0, t.value || 0)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return a(e, t, c)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return i(t, e, c, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return i(e, t, c, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return s(e, t, c)
            },
            "Array, Array": function (e, t) {
              return c(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return c(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return c(e, r(t))
            },
            "SparseMatrix, any": function (e, t) {
              return o(e, t, c, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return u(e, t, c, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return o(t, e, c, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return u(t, e, c, !0)
            },
            "Array, any": function (e, t) {
              return u(r(e), t, c, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return u(r(t), e, c, !0).valueOf()
            }
          });
        return c
      }),
      Fn = Object(Dt.a)("concat", ["typed", "matrix", "isInteger"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.isInteger;
        return t("concat", {
          "...Array | Matrix | number | BigNumber": function (e) {
            var t, i, a = e.length,
              o = -1,
              s = !1,
              u = [];
            for (t = 0; t < a; t++) {
              var c = e[t];
              if (Object(qt.v)(c) && (s = !0), Object(qt.y)(c) || Object(qt.e)(c)) {
                if (t !== a - 1) throw new Error("Dimension must be specified as last argument");
                if (i = o, o = c.valueOf(), !n(o)) throw new TypeError("Integer number expected for dimension");
                if (0 > o || 0 < t && o > i) throw new ir.a(o, i + 1)
              } else {
                var f = Object(er.a)(c).valueOf(),
                  l = Object(Qt.a)(f);
                if (u[t] = f, i = o, o = l.length - 1, 0 < t && o !== i) throw new tr.a(i + 1, o + 1)
              }
            }
            if (0 === u.length) throw new SyntaxError("At least one matrix expected");
            for (var p = u.shift(); u.length;) p = se(p, u.shift(), o, 0);
            return s ? r(p) : p
          },
          "...string": function (e) {
            return e.join("")
          }
        })
      }),
      Un = Object(Dt.a)("column", ["typed", "Index", "matrix", "range"], function (e) {
        function t(e, t) {
          if (2 !== e.size().length) throw new Error("Only two dimensional matrix is supported");
          Object(Qt.s)(t, e.size()[1]);
          var r = a(0, e.size()[0]),
            i = new n(r, t);
          return e.subset(i)
        }
        var r = e.typed,
          n = e.Index,
          i = e.matrix,
          a = e.range;
        return r("column", {
          "Matrix, number": t,
          "Array, number": function (e, r) {
            return t(i(Object(er.a)(e)), r).valueOf()
          }
        })
      }),
      Ln = Object(Dt.a)("cross", ["typed", "matrix", "subtract", "multiply"], function (e) {
        function t(e, t) {
          var r = Math.max(Object(Qt.a)(e).length, Object(Qt.a)(t).length);
          e = Object(Qt.p)(e), t = Object(Qt.p)(t);
          var n = Object(Qt.a)(e),
            o = Object(Qt.a)(t);
          if (1 !== n.length || 1 !== o.length || 3 !== n[0] || 3 !== o[0]) throw new RangeError("Vectors with length 3 expected (Size A = [" + n.join(", ") + "], B = [" + o.join(", ") + "])");
          var s = [i(a(e[1], t[2]), a(e[2], t[1])), i(a(e[2], t[0]), a(e[0], t[2])), i(a(e[0], t[1]), a(e[1], t[0]))];
          return 1 < r ? [s] : s
        }
        var r = e.typed,
          n = e.matrix,
          i = e.subtract,
          a = e.multiply;
        return r("cross", {
          "Matrix, Matrix": function (e, r) {
            return n(t(e.toArray(), r.toArray()))
          },
          "Matrix, Array": function (e, r) {
            return n(t(e.toArray(), r))
          },
          "Array, Matrix": function (e, r) {
            return n(t(e, r.toArray()))
          },
          "Array, Array": t
        })
      }),
      Hn = Object(Dt.a)("diag", ["typed", "matrix", "DenseMatrix", "SparseMatrix"], function (e) {
        function t(e, t, i, a) {
          if (!Object(zt.i)(t)) throw new TypeError("Second parameter in function diag must be an integer");
          var o = 0 < t ? t : 0,
            s = 0 > t ? -t : 0;
          switch (i.length) {
            case 1:
              return r(e, t, a, i[0], s, o);
            case 2:
              return n(e, t, a, i, s, o)
          }
          throw new RangeError("Matrix for function diag must be 2 dimensional")
        }

        function r(e, t, r, n, i, a) {
          var u = [n + i, n + a];
          if (r && "sparse" !== r && "dense" !== r) throw new TypeError("Unknown matrix type ".concat(r, '"'));
          var c = "sparse" === r ? s.diagonal(u, e, t) : o.diagonal(u, e, t);
          return null === r ? c.valueOf() : c
        }

        function n(e, t, r, n, i, o) {
          if (Object(qt.v)(e)) {
            var s = e.diagonal(t);
            return null === r ? s.valueOf() : r === s.storage() ? s : a(s, r)
          }
          for (var u = Math.min(n[0] - i, n[1] - o), c = [], f = 0; f < u; f++) c[f] = e[f + i][f + o];
          return null === r ? c : a(c)
        }
        var i = e.typed,
          a = e.matrix,
          o = e.DenseMatrix,
          s = e.SparseMatrix;
        return i("diag", {
          Array: function (e) {
            return t(e, 0, Object(Qt.a)(e), null)
          },
          "Array, number": function (e, r) {
            return t(e, r, Object(Qt.a)(e), null)
          },
          "Array, BigNumber": function (e, r) {
            return t(e, r.toNumber(), Object(Qt.a)(e), null)
          },
          "Array, string": function (e, r) {
            return t(e, 0, Object(Qt.a)(e), r)
          },
          "Array, number, string": function (e, r, n) {
            return t(e, r, Object(Qt.a)(e), n)
          },
          "Array, BigNumber, string": function (e, r, n) {
            return t(e, r.toNumber(), Object(Qt.a)(e), n)
          },
          Matrix: function (e) {
            return t(e, 0, e.size(), e.storage())
          },
          "Matrix, number": function (e, r) {
            return t(e, r, e.size(), e.storage())
          },
          "Matrix, BigNumber": function (e, r) {
            return t(e, r.toNumber(), e.size(), e.storage())
          },
          "Matrix, string": function (e, r) {
            return t(e, 0, e.size(), r)
          },
          "Matrix, number, string": function (e, r, n) {
            return t(e, r, e.size(), n)
          },
          "Matrix, BigNumber, string": function (e, r, n) {
            return t(e, r.toNumber(), e.size(), n)
          }
        })
      }),
      $n = Object(Dt.a)("eye", [], function () {
        return function () {
          throw new Error('Function "eye" is renamed to "identity" since mathjs version 5.0.0. To keep eye working, create an alias for it using "math.import({eye: math.identity}, {override: true})"')
        }
      }),
      Gn = Object(Dt.a)("filter", ["typed"], function (e) {
        return (0, e.typed)("filter", {
          "Array, function": le,
          "Matrix, function": function (e, t) {
            return e.create(le(e.toArray(), t))
          },
          "Array, RegExp": Qt.d,
          "Matrix, RegExp": function (e, t) {
            return e.create(Object(Qt.d)(e.toArray(), t))
          }
        })
      }),
      Zn = "flatten",
      Vn = Object(Dt.a)(Zn, ["typed", "matrix"], function (e) {
        var t = e.typed,
          r = e.matrix;
        return t(Zn, {
          Array: function (e) {
            return Object(Qt.e)(Object(er.a)(e))
          },
          Matrix: function (e) {
            var t = Object(Qt.e)(Object(er.a)(e.toArray()));
            return r(t)
          }
        })
      }),
      Jn = "forEach",
      Wn = Object(Dt.a)(Jn, ["typed"], function (e) {
        return (0, e.typed)(Jn, {
          "Array, function": pe,
          "Matrix, function": function (e, t) {
            return e.forEach(t)
          }
        })
      }),
      Yn = "getMatrixDataType",
      Xn = Object(Dt.a)(Yn, ["typed"], function (e) {
        return (0, e.typed)(Yn, {
          Array: function (e) {
            return Object(Qt.h)(e, qt.M)
          },
          Matrix: function (e) {
            return e.getDataType()
          }
        })
      }),
      Qn = "identity",
      Kn = Object(Dt.a)(Qn, ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"], function (e) {
        function t(e, t) {
          switch (e.length) {
            case 0:
              return t ? a(t) : [];
            case 1:
              return r(e[0], e[0], t);
            case 2:
              return r(e[0], e[1], t);
            default:
              throw new Error("Vector containing two values expected")
          }
        }

        function r(e, t, r) {
          var n = Object(qt.e)(e) || Object(qt.e)(t) ? o : null;
          if (Object(qt.e)(e) && (e = e.toNumber()), Object(qt.e)(t) && (t = t.toNumber()), !Object(zt.i)(e) || 1 > e) throw new Error("Parameters in function identity must be positive integers");
          if (!Object(zt.i)(t) || 1 > t) throw new Error("Parameters in function identity must be positive integers");
          var i = n ? new o(1) : 1,
            a = n ? new n(0) : 0,
            c = [e, t];
          if (r) {
            if ("sparse" === r) return u.diagonal(c, i, 0, a);
            if ("dense" === r) return s.diagonal(c, i, 0, a);
            throw new TypeError('Unknown matrix type "'.concat(r, '"'))
          }
          for (var f = Object(Qt.o)([], c, a), l = e < t ? e : t, p = 0; p < l; p++) f[p][p] = i;
          return f
        }
        var n = e.typed,
          i = e.config,
          a = e.matrix,
          o = e.BigNumber,
          s = e.DenseMatrix,
          u = e.SparseMatrix;
        return n(Qn, {
          "": function () {
            return "Matrix" === i.matrix ? a([]) : []
          },
          string: function (e) {
            return a(e)
          },
          "number | BigNumber": function (e) {
            return r(e, e, "Matrix" === i.matrix ? "dense" : void 0)
          },
          "number | BigNumber, string": function (e, t) {
            return r(e, e, t)
          },
          "number | BigNumber, number | BigNumber": function (e, t) {
            return r(e, t, "Matrix" === i.matrix ? "dense" : void 0)
          },
          "number | BigNumber, number | BigNumber, string": function (e, t, n) {
            return r(e, t, n)
          },
          Array: function (e) {
            return t(e)
          },
          "Array, string": function (e, r) {
            return t(e, r)
          },
          Matrix: function (e) {
            return t(e.valueOf(), e.storage())
          },
          "Matrix, string": function (e, r) {
            return t(e.valueOf(), r)
          }
        })
      }),
      ei = Object(Dt.a)("kron", ["typed", "matrix", "multiplyScalar"], function (e) {
        function t(e, t) {
          if (1 === Object(Qt.a)(e).length && (e = [e]), 1 === Object(Qt.a)(t).length && (t = [t]), 2 < Object(Qt.a)(e).length || 2 < Object(Qt.a)(t).length) throw new RangeError("Vectors with dimensions greater then 2 are not supported expected (Size x = " + JSON.stringify(e.length) + ", y = " + JSON.stringify(t.length) + ")");
          var r = [],
            n = [];
          return e.map(function (e) {
            return t.map(function (t) {
              return n = [], r.push(n), e.map(function (e) {
                return t.map(function (t) {
                  return n.push(i(e, t))
                })
              })
            })
          }) && r
        }
        var r = e.typed,
          n = e.matrix,
          i = e.multiplyScalar;
        return r("kron", {
          "Matrix, Matrix": function (e, r) {
            return n(t(e.toArray(), r.toArray()))
          },
          "Matrix, Array": function (e, r) {
            return n(t(e.toArray(), r))
          },
          "Array, Matrix": function (e, r) {
            return n(t(e, r.toArray()))
          },
          "Array, Array": t
        })
      }),
      ti = Object(Dt.a)("map", ["typed"], function (e) {
        return (0, e.typed)("map", {
          "Array, function": me,
          "Matrix, function": function (e, t) {
            return e.map(t)
          }
        })
      }),
      ri = Object(Dt.a)("ones", ["typed", "config", "matrix", "BigNumber"], function (e) {
        function t(e, t) {
          var r = function (e) {
            var t = !1;
            return e.forEach(function (e, r, n) {
              Object(qt.e)(e) && (t = !0, n[r] = e.toNumber())
            }), t
          }(e) ? new a(1) : 1;
          if (function (e) {
              e.forEach(function (e) {
                if ("number" != typeof e || !Object(zt.i)(e) || 0 > e) throw new Error("Parameters in function ones must be positive integers")
              })
            }(e), t) {
            var n = i(t);
            return 0 < e.length ? n.resize(e, r) : n
          }
          var o = [];
          return 0 < e.length ? Object(Qt.o)(o, e, r) : o
        }
        var r = e.typed,
          n = e.config,
          i = e.matrix,
          a = e.BigNumber;
        return r("ones", {
          "": function () {
            return "Array" === n.matrix ? t([]) : t([], "default")
          },
          "...number | BigNumber | string": function (e) {
            return "string" == typeof e[e.length - 1] ? t(e, e.pop()) : "Array" === n.matrix ? t(e) : t(e, "default")
          },
          Array: t,
          Matrix: function (e) {
            var r = e.storage();
            return t(e.valueOf(), r)
          },
          "Array | Matrix, string": function (e, r) {
            return t(e.valueOf(), r)
          }
        })
      }),
      ni = Object(Dt.a)("range", ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq"], function (e) {
        function t(e) {
          return "Matrix" === u.matrix ? c ? c(e) : ye() : e
        }

        function r(e, r) {
          var s = function (e) {
            var t = e.split(":").map(function (e) {
              return +e
            });
            if (t.some(function (e) {
                return isNaN(e)
              })) return null;
            switch (t.length) {
              case 2:
                return {
                  start: t[0], end: t[1], step: 1
                };
              case 3:
                return {
                  start: t[0], end: t[2], step: t[1]
                };
              default:
                return null
            }
          }(e);
          if (!s) throw new SyntaxError('String "' + e + '" is no valid range');
          return "BigNumber" === u.number ? (void 0 === f && he(), t((r ? o : a)(f(s.start), f(s.end), f(s.step)))) : t((r ? i : n)(s.start, s.end, s.step))
        }

        function n(e, t, r) {
          var n = [],
            i = e;
          if (0 < r)
            for (; l(i, t);) n.push(i), i += r;
          else if (0 > r)
            for (; m(i, t);) n.push(i), i += r;
          return n
        }

        function i(e, t, r) {
          var n = [],
            i = e;
          if (0 < r)
            for (; p(i, t);) n.push(i), i += r;
          else if (0 > r)
            for (; h(i, t);) n.push(i), i += r;
          return n
        }

        function a(e, t, r) {
          var n = f(0),
            i = [],
            a = e;
          if (r.gt(n))
            for (; l(a, t);) i.push(a), a = a.plus(r);
          else if (r.lt(n))
            for (; m(a, t);) i.push(a), a = a.plus(r);
          return i
        }

        function o(e, t, r) {
          var n = f(0),
            i = [],
            a = e;
          if (r.gt(n))
            for (; p(a, t);) i.push(a), a = a.plus(r);
          else if (r.lt(n))
            for (; h(a, t);) i.push(a), a = a.plus(r);
          return i
        }
        var s = e.typed,
          u = e.config,
          c = e.matrix,
          f = e.bignumber,
          l = e.smaller,
          p = e.smallerEq,
          m = e.larger,
          h = e.largerEq;
        return s("range", {
          string: r,
          "string, boolean": r,
          "number, number": function (e, r) {
            return t(n(e, r, 1))
          },
          "number, number, number": function (e, r, i) {
            return t(n(e, r, i))
          },
          "number, number, boolean": function (e, r, a) {
            return t(a ? i(e, r, 1) : n(e, r, 1))
          },
          "number, number, number, boolean": function (e, r, a, o) {
            return t(o ? i(e, r, a) : n(e, r, a))
          },
          "BigNumber, BigNumber": function (e, r) {
            return t(a(e, r, new(0, e.constructor)(1)))
          },
          "BigNumber, BigNumber, BigNumber": function (e, r, n) {
            return t(a(e, r, n))
          },
          "BigNumber, BigNumber, boolean": function (e, r, n) {
            var i = e.constructor;
            return t(n ? o(e, r, new i(1)) : a(e, r, new i(1)))
          },
          "BigNumber, BigNumber, BigNumber, boolean": function (e, r, n, i) {
            return t(i ? o(e, r, n) : a(e, r, n))
          }
        })
      }),
      ii = "reshape",
      ai = Object(Dt.a)(ii, ["typed", "isInteger", "matrix"], function (e) {
        var t = e.typed,
          r = e.isInteger,
          n = e.matrix;
        return t(ii, {
          "Matrix, Array": function (e, t) {
            return e.reshape ? e.reshape(t) : n(Object(Qt.n)(e.valueOf(), t))
          },
          "Array, Array": function (e, t) {
            return t.forEach(function (e) {
              if (!r(e)) throw new TypeError("Invalid size for dimension: " + e)
            }), Object(Qt.n)(e, t)
          }
        })
      }),
      oi = r(13),
      si = Object(Dt.a)("resize", ["config", "matrix"], function (e) {
        var t = e.config,
          r = e.matrix;
        return function (e, n, i) {
          if (2 !== arguments.length && 3 !== arguments.length) throw new oi.a("resize", arguments.length, 2, 3);
          if (Object(qt.v)(n) && (n = n.valueOf()), Object(qt.e)(n[0]) && (n = n.map(function (e) {
              return Object(qt.e)(e) ? e.toNumber() : e
            })), Object(qt.v)(e)) return e.resize(n, i, !0);
          if ("string" == typeof e) return function (e, t, r) {
            if (void 0 === r) r = " ";
            else if ("string" != typeof r || 1 !== r.length) throw new TypeError("Single character expected as defaultValue");
            if (1 !== t.length) throw new tr.a(t.length, 1);
            var n = t[0];
            if ("number" != typeof n || !Object(zt.i)(n)) throw new TypeError("Invalid size, must contain positive integers (size: " + Object(Kt.d)(t) + ")");
            if (e.length > n) return e.substring(0, n);
            if (e.length < n) {
              for (var i = e, a = 0, o = n - e.length; a < o; a++) i += r;
              return i
            }
            return e
          }(e, n, i);
          var a = !Array.isArray(e) && "Array" !== t.matrix;
          if (0 === n.length) {
            for (; Array.isArray(e);) e = e[0];
            return Object(er.a)(e)
          }
          Array.isArray(e) || (e = [e]), e = Object(er.a)(e);
          var o = Object(Qt.o)(e, n, i);
          return a ? r(o) : o
        }
      }),
      ui = Object(Dt.a)("row", ["typed", "Index", "matrix", "range"], function (e) {
        function t(e, t) {
          if (2 !== e.size().length) throw new Error("Only two dimensional matrix is supported");
          Object(Qt.s)(t, e.size()[0]);
          var r = a(0, e.size()[1]),
            i = new n(t, r);
          return e.subset(i)
        }
        var r = e.typed,
          n = e.Index,
          i = e.matrix,
          a = e.range;
        return r("row", {
          "Matrix, number": t,
          "Array, number": function (e, r) {
            return t(i(Object(er.a)(e)), r).valueOf()
          }
        })
      }),
      ci = Object(Dt.a)("size", ["typed", "config", "?matrix"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.matrix;
        return t("size", {
          Matrix: function (e) {
            return e.create(e.size())
          },
          Array: Qt.a,
          string: function (e) {
            return "Array" === r.matrix ? [e.length] : n([e.length])
          },
          "number | Complex | BigNumber | Unit | boolean | null": function () {
            return "Array" === r.matrix ? [] : n ? n([]) : ye()
          }
        })
      }),
      fi = "squeeze",
      li = Object(Dt.a)(fi, ["typed", "matrix"], function (e) {
        var t = e.typed,
          r = e.matrix;
        return t(fi, {
          Array: function (e) {
            return Object(Qt.p)(Object(er.a)(e))
          },
          Matrix: function (e) {
            var t = Object(Qt.p)(e.toArray());
            return Array.isArray(t) ? r(t) : t
          },
          any: function (e) {
            return Object(er.a)(e)
          }
        })
      }),
      pi = {
        length: !0,
        name: !0
      },
      mi = {
        toString: !0,
        valueOf: !0,
        toLocaleString: !0
      },
      hi = Object(Dt.a)("subset", ["typed", "matrix"], function (e) {
        var t = e.typed,
          r = e.matrix;
        return t("subset", {
          "Array, Index": function (e, t) {
            var n = r(e).subset(t);
            return t.isScalar() ? n : n.valueOf()
          },
          "Matrix, Index": function (e, t) {
            return e.subset(t)
          },
          "Object, Index": Ee,
          "string, Index": Oe,
          "Array, Index, any": function (e, t, n) {
            return r(Object(er.a)(e)).subset(t, n, void 0).valueOf()
          },
          "Array, Index, any, any": function (e, t, n, i) {
            return r(Object(er.a)(e)).subset(t, n, i).valueOf()
          },
          "Matrix, Index, any": function (e, t, r) {
            return e.clone().subset(t, r)
          },
          "Matrix, Index, any, any": function (e, t, r, n) {
            return e.clone().subset(t, r, n)
          },
          "string, Index, string": Me,
          "string, Index, string, string": Me,
          "Object, Index, any": je
        })
      }),
      di = Object(Dt.a)("transpose", ["typed", "matrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = t("transpose", {
            Array: function (e) {
              return n(r(e)).valueOf()
            },
            Matrix: function (e) {
              var t, r = e.size();
              switch (r.length) {
                case 1:
                  t = e.clone();
                  break;
                case 2:
                  var n = r[0],
                    i = r[1];
                  if (0 === i) throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + Object(Kt.d)(r) + ")");
                  switch (e.storage()) {
                    case "dense":
                      t = function (e, t, r) {
                        for (var n, i = e._data, a = [], o = 0; o < r; o++) {
                          n = a[o] = [];
                          for (var s = 0; s < t; s++) n[s] = Object(er.a)(i[s][o])
                        }
                        return e.createDenseMatrix({
                          data: a,
                          size: [r, t],
                          datatype: e._datatype
                        })
                      }(e, n, i);
                      break;
                    case "sparse":
                      t = function (e, t, r) {
                        for (var n = e._values, i = e._index, a = e._ptr, o = n ? [] : void 0, s = [], u = [], c = [], f = 0; f < t; f++) c[f] = 0;
                        var l, p, m;
                        for (l = 0, p = i.length; l < p; l++) c[i[l]]++;
                        for (var h = 0, d = 0; d < t; d++) u.push(h), h += c[d], c[d] = u[d];
                        for (u.push(h), m = 0; m < r; m++)
                          for (var y, g = a[m], b = a[m + 1], v = g; v < b; v++) s[y = c[i[v]]++] = m, n && (o[y] = Object(er.a)(n[v]));
                        return e.createSparseMatrix({
                          values: o,
                          index: s,
                          ptr: u,
                          size: [r, t],
                          datatype: e._datatype
                        })
                      }(e, n, i)
                  }
                  break;
                default:
                  throw new RangeError("Matrix must be a vector or two dimensional (size: " + Object(Kt.d)(this._size) + ")")
              }
              return t
            },
            any: function (e) {
              return Object(er.a)(e)
            }
          });
        return n
      }),
      yi = "ctranspose",
      gi = Object(Dt.a)(yi, ["typed", "transpose", "conj"], function (e) {
        var t = e.typed,
          r = e.transpose,
          n = e.conj;
        return t(yi, {
          any: function (e) {
            return n(r(e))
          }
        })
      }),
      bi = Object(Dt.a)("zeros", ["typed", "config", "matrix", "BigNumber"], function (e) {
        function t(e, t) {
          var r = function (e) {
            var t = !1;
            return e.forEach(function (e, r, n) {
              Object(qt.e)(e) && (t = !0, n[r] = e.toNumber())
            }), t
          }(e) ? new a(0) : 0;
          if (function (e) {
              e.forEach(function (e) {
                if ("number" != typeof e || !Object(zt.i)(e) || 0 > e) throw new Error("Parameters in function zeros must be positive integers")
              })
            }(e), t) {
            var n = i(t);
            return 0 < e.length ? n.resize(e, r) : n
          }
          var o = [];
          return 0 < e.length ? Object(Qt.o)(o, e, r) : o
        }
        var r = e.typed,
          n = e.config,
          i = e.matrix,
          a = e.BigNumber;
        return r("zeros", {
          "": function () {
            return "Array" === n.matrix ? t([]) : t([], "default")
          },
          "...number | BigNumber | string": function (e) {
            return "string" == typeof e[e.length - 1] ? t(e, e.pop()) : "Array" === n.matrix ? t(e) : t(e, "default")
          },
          Array: t,
          Matrix: function (e) {
            var r = e.storage();
            return t(e.valueOf(), r)
          },
          "Array | Matrix, string": function (e, r) {
            return t(e.valueOf(), r)
          }
        })
      }),
      vi = Object(Dt.a)("erf", ["typed"], function (e) {
        var t = (0, e.typed)("name", {
          number: function (e) {
            var t = Math.abs(e);
            return t >= Ni ? Object(zt.n)(e) : t <= .46875 ? Object(zt.n)(e) * function (e) {
              var t, r = e * e,
                n = xi[0][4] * r,
                i = r;
              for (t = 0; 3 > t; t += 1) n = (n + xi[0][t]) * r, i = (i + wi[0][t]) * r;
              return e * (n + xi[0][3]) / (i + wi[0][3])
            }(t) : 4 >= t ? Object(zt.n)(e) * (1 - function (e) {
              var t, r = xi[1][8] * e,
                n = e;
              for (t = 0; 7 > t; t += 1) r = (r + xi[1][t]) * e, n = (n + wi[1][t]) * e;
              var i = (r + xi[1][7]) / (n + wi[1][7]),
                a = parseInt(16 * e) / 16;
              return Math.exp(-a * a) * Math.exp(-(e - a) * (e + a)) * i
            }(t)) : Object(zt.n)(e) * (1 - function (e) {
              var t, r = 1 / (e * e),
                n = xi[2][5] * r,
                i = r;
              for (t = 0; 4 > t; t += 1) n = (n + xi[2][t]) * r, i = (i + wi[2][t]) * r;
              var a = r * (n + xi[2][4]) / (i + wi[2][4]);
              a = (.5641895835477563 - a) / e;
              var o = (e - (r = parseInt(16 * e) / 16)) * (e + r);
              return Math.exp(-r * r) * Math.exp(-o) * a
            }(t))
          },
          "Array | Matrix": function (e) {
            return c(e, t)
          }
        });
        return t
      }),
      xi = [
        [3.1611237438705655, 113.86415415105016, 377.485237685302, 3209.3775891384694, .18577770618460315],
        [.5641884969886701, 8.883149794388377, 66.11919063714163, 298.6351381974001, 881.952221241769, 1712.0476126340707, 2051.0783778260716, 1230.3393547979972, 2.1531153547440383e-8],
        [.30532663496123236, .36034489994980445, .12578172611122926, .016083785148742275, .0006587491615298378, .016315387137302097]
      ],
      wi = [
        [23.601290952344122, 244.02463793444417, 1282.6165260773723, 2844.236833439171],
        [15.744926110709835, 117.6939508913125, 537.1811018620099, 1621.3895745666903, 3290.7992357334597, 4362.619090143247, 3439.3676741437216, 1230.3393548037495],
        [2.568520192289822, 1.8729528499234604, .5279051029514285, .06051834131244132, .0023352049762686918]
      ],
      Ni = Math.pow(2, 53),
      Oi = Object(Dt.a)("mode", ["typed", "isNaN", "isNumeric"], function (e) {
        function t(e) {
          if (0 === (e = Object(Qt.e)(e.valueOf())).length) throw new Error("Cannot calculate mode of an empty array");
          for (var t, r = {}, a = [], o = 0, s = 0; s < e.length; s++) {
            if (t = e[s], i(t) && n(t)) throw new Error("Cannot calculate mode of an array containing NaN values");
            t in r || (r[t] = 0), r[t]++, r[t] === o ? a.push(t) : r[t] > o && (o = r[t], a = [t])
          }
          return a
        }
        var r = e.typed,
          n = e.isNaN,
          i = e.isNumeric;
        return r("mode", {
          "Array | Matrix": t,
          "...": function (e) {
            return t(e)
          }
        })
      }),
      Mi = Object(Dt.a)("prod", ["typed", "multiply"], function (e) {
        function t(e) {
          var t;
          if (u(e, function (e) {
              try {
                t = void 0 === t ? e : n(t, e)
              } catch (t) {
                throw Se(t, "prod", e)
              }
            }), void 0 === t) throw new Error("Cannot calculate prod of an empty array");
          return t
        }
        var r = e.typed,
          n = e.multiply;
        return r("prod", {
          "Array | Matrix": t,
          "Array | Matrix, number | BigNumber": function () {
            throw new Error("prod(A, dim) is not yet supported")
          },
          "...": function (e) {
            return t(e)
          }
        })
      }),
      Ei = Object(Dt.a)("format", ["typed"], function (e) {
        return (0, e.typed)("format", {
          any: Kt.d,
          "any, Object | function | number": Kt.d
        })
      }),
      ji = Object(Dt.a)("print", ["typed"], function (e) {
        return (0, e.typed)("print", {
          "string, Object | Array": Ae,
          "string, Object | Array, number | Object": Ae
        })
      }),
      Si = Object(Dt.a)("to", ["typed", "matrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = Qr({
            typed: t
          }),
          i = Kr({
            typed: t
          }),
          a = t("to", {
            "Unit, Unit | string": function (e, t) {
              return e.to(t)
            },
            "Matrix, Matrix": function (e, t) {
              return n(e, t, a)
            },
            "Array, Array": function (e, t) {
              return a(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return a(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return a(e, r(t))
            },
            "Matrix, any": function (e, t) {
              return i(e, t, a, !1)
            },
            "any, Matrix": function (e, t) {
              return i(t, e, a, !0)
            },
            "Array, any": function (e, t) {
              return i(r(e), t, a, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return i(r(t), e, a, !0).valueOf()
            }
          });
        return a
      }),
      Ai = "isPrime",
      Ci = Object(Dt.a)(Ai, ["typed"], function (e) {
        var t = (0, e.typed)(Ai, {
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
            return c(e, t)
          }
        });
        return t
      }),
      Ti = Object(Dt.a)("numeric", ["number", "?bignumber", "?fraction"], function (e) {
        var t = e.number,
          r = e.bignumber,
          n = e.fraction,
          i = {
            string: !0,
            number: !0,
            BigNumber: !0,
            Fraction: !0
          },
          a = {
            number: function (e) {
              return t(e)
            },
            BigNumber: r ? function (e) {
              return r(e)
            } : he,
            Fraction: n ? function (e) {
              return n(e)
            } : de
          };
        return function (e, t) {
          var r = Object(qt.M)(e);
          if (!(r in i)) throw new TypeError("Cannot convert " + e + ' of type "' + r + '"; valid input types are ' + Object.keys(i).join(", "));
          if (!(t in a)) throw new TypeError("Cannot convert " + e + ' to type "' + t + '"; valid output types are ' + Object.keys(a).join(", "));
          return t === r ? e : a[t](e)
        }
      }),
      _i = "divideScalar",
      Ii = Object(Dt.a)(_i, ["typed", "numeric"], function (e) {
        var t = e.typed,
          r = e.numeric,
          n = t(_i, {
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
                a = r(1, Object(qt.M)(t));
              return i.value = n(null === i.value ? i._normalize(a) : i.value, t), i
            },
            "number | Fraction | BigNumber, Unit": function (e, t) {
              var i = t.clone();
              i = i.pow(-1);
              var a = r(1, Object(qt.M)(e));
              return i.value = n(e, null === t.value ? t._normalize(a) : t.value), i
            },
            "Unit, Unit": function (e, t) {
              return e.divide(t)
            }
          });
        return n
      }),
      qi = Object(Dt.a)("pow", ["typed", "config", "identity", "multiply", "matrix", "fraction", "number", "Complex"], function (e) {
        function t(e, t) {
          if (a.predictable && !Object(zt.i)(t) && 0 > e) try {
            var r = f(t),
              n = c(r);
            if ((t === n || 1e-14 > Math.abs((t - n) / t)) && 1 == r.d % 2) return (0 == r.n % 2 ? 1 : -1) * Math.pow(-e, t)
          } catch (e) {}
          return a.predictable && (-1 > e && t === 1 / 0 || -1 < e && 0 > e && t === -1 / 0) ? NaN : Object(zt.i)(t) || 0 <= e || a.predictable ? R(e, t) : 1 > e * e && t === 1 / 0 || 1 < e * e && t === -1 / 0 ? 0 : new l(e, 0).pow(t, 0)
        }

        function r(e, t) {
          if (!Object(zt.i)(t) || 0 > t) throw new TypeError("For A^b, b must be a positive integer (value is " + t + ")");
          var r = Object(Qt.a)(e);
          if (2 !== r.length) throw new Error("For A^b, A must be 2 dimensional (A has " + r.length + " dimensions)");
          if (r[0] !== r[1]) throw new Error("For A^b, A must be square (size is " + r[0] + "x" + r[1] + ")");
          for (var n = o(r[0]).valueOf(), i = e; 1 <= t;) 1 == (1 & t) && (n = s(i, n)), t >>= 1, i = s(i, i);
          return n
        }

        function n(e, t) {
          return u(r(e.valueOf(), t))
        }
        var i = e.typed,
          a = e.config,
          o = e.identity,
          s = e.multiply,
          u = e.matrix,
          c = e.number,
          f = e.fraction,
          l = e.Complex;
        return i("pow", {
          "number, number": t,
          "Complex, Complex": function (e, t) {
            return e.pow(t)
          },
          "BigNumber, BigNumber": function (e, t) {
            return t.isInteger() || 0 <= e || a.predictable ? e.pow(t) : new l(e.toNumber(), 0).pow(t.toNumber(), 0)
          },
          "Fraction, Fraction": function (e, r) {
            if (1 === r.d) return e.pow(r);
            if (a.predictable) throw new Error("Function pow does not support non-integer exponents for fractions.");
            return t(e.valueOf(), r.valueOf())
          },
          "Array, number": r,
          "Array, BigNumber": function (e, t) {
            return r(e, t.toNumber())
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
      Bi = "Number of decimals in function round must be an integer",
      ki = "round",
      zi = Object(Dt.a)(ki, ["typed", "matrix", "equalScalar", "zeros", "BigNumber", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.zeros,
          a = e.BigNumber,
          o = e.DenseMatrix,
          s = nn({
            typed: t,
            equalScalar: n
          }),
          u = fn({
            typed: t,
            DenseMatrix: o
          }),
          f = Kr({
            typed: t
          }),
          l = t(ki, function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null == arguments[t] ? {} : arguments[t],
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function (t) {
                Ce(e, t, r[t])
              })
            }
            return e
          }({}, Di, {
            Complex: function (e) {
              return e.round()
            },
            "Complex, number": function (e, t) {
              if (t % 1) throw new TypeError(Bi);
              return e.round(t)
            },
            "Complex, BigNumber": function (e, t) {
              if (!t.isInteger()) throw new TypeError(Bi);
              var r = t.toNumber();
              return e.round(r)
            },
            "number, BigNumber": function (e, t) {
              if (!t.isInteger()) throw new TypeError(Bi);
              return new a(e).toDecimalPlaces(t.toNumber())
            },
            BigNumber: function (e) {
              return e.toDecimalPlaces(0)
            },
            "BigNumber, BigNumber": function (e, t) {
              if (!t.isInteger()) throw new TypeError(Bi);
              return e.toDecimalPlaces(t.toNumber())
            },
            Fraction: function (e) {
              return e.round()
            },
            "Fraction, number": function (e, t) {
              if (t % 1) throw new TypeError(Bi);
              return e.round(t)
            },
            "Array | Matrix": function (e) {
              return c(e, l, !0)
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return s(e, t, l, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return f(e, t, l, !1)
            },
            "number | Complex | BigNumber, SparseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : u(t, e, l, !0)
            },
            "number | Complex | BigNumber, DenseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : f(t, e, l, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return f(r(e), t, l, !1).valueOf()
            },
            "number | Complex | BigNumber, Array": function (e, t) {
              return f(r(t), e, l, !0).valueOf()
            }
          }));
        return l
      }),
      Di = {
        number: P,
        "number, number": function (e, t) {
          if (!Object(zt.i)(t)) throw new TypeError(Bi);
          if (0 > t || 15 < t) throw new Error("Number of decimals in function round must be in te range of 0-15");
          return P(e, t)
        }
      },
      Ri = (Object(Dt.a)(ki, ["typed"], function (e) {
        return (0, e.typed)(ki, Di)
      }), Object(Dt.a)("log", ["config", "typed", "divideScalar", "Complex"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.divideScalar,
          i = e.Complex,
          a = t("log", {
            number: function (e) {
              return 0 <= e || r.predictable ? T(e) : new i(e, 0).log()
            },
            Complex: function (e) {
              return e.log()
            },
            BigNumber: function (e) {
              return !e.isNegative() || r.predictable ? e.ln() : new i(e.toNumber(), 0).log()
            },
            "Array | Matrix": function (e) {
              return c(e, a)
            },
            "any, any": function (e, t) {
              return n(a(e), a(t))
            }
          });
        return a
      })),
      Pi = Object(Dt.a)("log1p", ["typed", "config", "divideScalar", "log", "Complex"], function (e) {
        function t(e) {
          var t = e.re + 1;
          return new o(Math.log(Math.sqrt(t * t + e.im * e.im)), Math.atan2(e.im, t))
        }
        var r = e.typed,
          n = e.config,
          i = e.divideScalar,
          a = e.log,
          o = e.Complex,
          s = r("log1p", {
            number: function (e) {
              return -1 <= e || n.predictable ? Object(zt.k)(e) : t(new o(e, 0))
            },
            Complex: t,
            BigNumber: function (e) {
              var r = e.plus(1);
              return !r.isNegative() || n.predictable ? r.ln() : t(new o(e.toNumber(), 0))
            },
            "Array | Matrix": function (e) {
              return c(e, s)
            },
            "any, any": function (e, t) {
              return i(s(e), a(t))
            }
          });
        return s
      }),
      Fi = "nthRoots",
      Ui = Object(Dt.a)(Fi, ["config", "typed", "divideScalar", "Complex"], function (e) {
        function t(e, t) {
          if (0 > t) throw new Error("Root must be greater than zero");
          if (0 === t) throw new Error("Root must be non-zero");
          if (0 != t % 1) throw new Error("Root must be an integer");
          if (0 === e || 0 === e.abs()) return [new n(0, 0)];
          var r, i = "number" == typeof e;
          (i || 0 === e.re || 0 === e.im) && (r = i ? 2 * +(0 > e) : 0 === e.im ? 2 * +(0 > e.re) : 2 * +(0 > e.im) + 1);
          for (var o, s = e.arg(), u = e.abs(), c = [], f = Math.pow(u, 1 / t), l = 0; l < t; l++)(o = (r + 4 * l) / t) !== Math.round(o) ? c.push(new n({
            r: f,
            phi: (s + 2 * Math.PI * l) / t
          })) : c.push(a[o % 4](f));
          return c
        }
        var r = e.typed,
          n = (e.config, e.divideScalar, e.Complex),
          i = r(Fi, {
            Complex: function (e) {
              return t(e, 2)
            },
            "Complex, number": t
          }),
          a = [function (e) {
            return new n(e, 0)
          }, function (e) {
            return new n(0, e)
          }, function (e) {
            return new n(-e, 0)
          }, function (e) {
            return new n(0, -e)
          }];
        return i
      }),
      Li = Object(Dt.a)("dotPow", ["typed", "equalScalar", "matrix", "pow", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.equalScalar,
          n = e.matrix,
          i = e.pow,
          a = e.DenseMatrix,
          o = un({
            typed: t
          }),
          s = Tn({
            typed: t,
            DenseMatrix: a
          }),
          u = nn({
            typed: t,
            equalScalar: r
          }),
          c = fn({
            typed: t,
            DenseMatrix: a
          }),
          f = Qr({
            typed: t
          }),
          l = Kr({
            typed: t
          }),
          p = t("dotPow", {
            "any, any": i,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, i, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return o(t, e, i, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, i, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return f(e, t, i)
            },
            "Array, Array": function (e, t) {
              return p(n(e), n(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return p(n(e), t)
            },
            "Matrix, Array": function (e, t) {
              return p(e, n(t))
            },
            "SparseMatrix, any": function (e, t) {
              return u(e, t, p, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return l(e, t, p, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return c(t, e, p, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return l(t, e, p, !0)
            },
            "Array, any": function (e, t) {
              return l(n(e), t, p, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return l(n(t), e, p, !0).valueOf()
            }
          });
        return p
      }),
      Hi = "dotDivide",
      $i = Object(Dt.a)(Hi, ["typed", "matrix", "equalScalar", "divideScalar", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.divideScalar,
          a = e.DenseMatrix,
          o = tn({
            typed: t,
            equalScalar: n
          }),
          s = un({
            typed: t
          }),
          u = Tn({
            typed: t,
            DenseMatrix: a
          }),
          c = nn({
            typed: t,
            equalScalar: n
          }),
          f = fn({
            typed: t,
            DenseMatrix: a
          }),
          l = Qr({
            typed: t
          }),
          p = Kr({
            typed: t
          }),
          m = t(Hi, {
            "any, any": i,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return u(e, t, i, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return o(t, e, i, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, i, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, i)
            },
            "Array, Array": function (e, t) {
              return m(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, r(t))
            },
            "SparseMatrix, any": function (e, t) {
              return c(e, t, i, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return p(e, t, i, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return f(t, e, i, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return p(t, e, i, !0)
            },
            "Array, any": function (e, t) {
              return p(r(e), t, i, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return p(r(t), e, i, !0).valueOf()
            }
          });
        return m
      }),
      Gi = Object(Dt.a)("lsolve", ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"], function (e) {
        function t(e, t) {
          for (var r = (t = c(e, t, !0))._data, n = e._size[0], f = e._size[1], l = [], p = e._data, m = 0; m < f; m++) {
            var h = r[m][0] || 0,
              d = void 0;
            if (s(h, 0)) d = 0;
            else {
              var y = p[m][m];
              if (s(y, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
              d = i(h, y);
              for (var g = m + 1; g < n; g++) r[g] = [o(r[g][0] || 0, a(d, p[g][m]))]
            }
            l[m] = [d]
          }
          return new u({
            data: l,
            size: [n, 1]
          })
        }
        var r = e.typed,
          n = e.matrix,
          i = e.divideScalar,
          a = e.multiplyScalar,
          o = e.subtract,
          s = e.equalScalar,
          u = e.DenseMatrix,
          c = Te({
            DenseMatrix: u
          });
        return r("lsolve", {
          "SparseMatrix, Array | Matrix": function (e, t) {
            return function (e, t) {
              for (var r, n, f, l = (t = c(e, t, !0))._data, p = e._size[0], m = e._size[1], h = e._values, d = e._index, y = e._ptr, g = [], b = 0; b < m; b++)
                if (f = l[b][0] || 0, s(f, 0)) g[b] = [0];
                else {
                  var v = 0,
                    x = [],
                    w = [],
                    N = y[b + 1];
                  for (n = y[b]; n < N; n++)(r = d[n]) === b ? v = h[n] : r > b && (x.push(h[n]), w.push(r));
                  if (s(v, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
                  var O = i(f, v);
                  for (n = 0, N = w.length; n < N; n++) l[r = w[n]] = [o(l[r][0] || 0, a(O, x[n]))];
                  g[b] = [O]
                } return new u({
                data: g,
                size: [p, 1]
              })
            }(e, t)
          },
          "DenseMatrix, Array | Matrix": function (e, r) {
            return t(e, r)
          },
          "Array, Array | Matrix": function (e, r) {
            return t(n(e), r).valueOf()
          }
        })
      }),
      Zi = Object(Dt.a)("usolve", ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"], function (e) {
        function t(e, t) {
          for (var r = (t = c(e, t, !0))._data, n = e._size[0], f = e._size[1], l = [], p = e._data, m = f - 1; 0 <= m; m--) {
            var h = r[m][0] || 0,
              d = void 0;
            if (s(h, 0)) d = 0;
            else {
              var y = p[m][m];
              if (s(y, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
              d = i(h, y);
              for (var g = m - 1; 0 <= g; g--) r[g] = [o(r[g][0] || 0, a(d, p[g][m]))]
            }
            l[m] = [d]
          }
          return new u({
            data: l,
            size: [n, 1]
          })
        }
        var r = e.typed,
          n = e.matrix,
          i = e.divideScalar,
          a = e.multiplyScalar,
          o = e.subtract,
          s = e.equalScalar,
          u = e.DenseMatrix,
          c = Te({
            DenseMatrix: u
          });
        return r("usolve", {
          "SparseMatrix, Array | Matrix": function (e, t) {
            return function (e, t) {
              for (var r, n, f, l = (t = c(e, t, !0))._data, p = e._size[0], m = e._size[1], h = e._values, d = e._index, y = e._ptr, g = [], b = m - 1; 0 <= b; b--)
                if (f = l[b][0] || 0, s(f, 0)) g[b] = [0];
                else {
                  var v = 0,
                    x = [],
                    w = [],
                    N = y[b],
                    O = y[b + 1];
                  for (n = O - 1; n >= N; n--)(r = d[n]) === b ? v = h[n] : r < b && (x.push(h[n]), w.push(r));
                  if (s(v, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
                  var M = i(f, v);
                  for (n = 0, O = w.length; n < O; n++) l[r = w[n]] = [o(l[r][0], a(M, x[n]))];
                  g[b] = [M]
                } return new u({
                data: g,
                size: [p, 1]
              })
            }(e, t)
          },
          "DenseMatrix, Array | Matrix": function (e, r) {
            return t(e, r)
          },
          "Array, Array | Matrix": function (e, r) {
            return t(n(e), r).valueOf()
          }
        })
      }),
      Vi = Object(Dt.a)("algorithm08", ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          r = e.equalScalar;
        return function (e, n, i) {
          var a = e._values,
            o = e._index,
            s = e._ptr,
            u = e._size,
            c = e._datatype,
            f = n._values,
            l = n._index,
            p = n._ptr,
            m = n._size,
            h = n._datatype;
          if (u.length !== m.length) throw new tr.a(u.length, m.length);
          if (u[0] !== m[0] || u[1] !== m[1]) throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + m + ")");
          if (!a || !f) throw new Error("Cannot perform operation on Pattern Sparse Matrices");
          var d, y = u[0],
            g = u[1],
            b = r,
            v = 0,
            x = i;
          "string" == typeof c && c === h && (d = c, b = t.find(r, [d, d]), v = t.convert(0, d), x = t.find(i, [d, d]));
          for (var w, N, O, M, E = [], j = [], S = [], A = e.createSparseMatrix({
              values: E,
              index: j,
              ptr: S,
              size: [y, g],
              datatype: d
            }), C = [], T = [], _ = 0; _ < g; _++) {
            S[_] = j.length;
            var I = _ + 1;
            for (N = s[_], O = s[_ + 1], w = N; w < O; w++) T[M = o[w]] = I, C[M] = a[w], j.push(M);
            for (N = p[_], O = p[_ + 1], w = N; w < O; w++) T[M = l[w]] === I && (C[M] = x(C[M], f[w]));
            for (w = S[_]; w < j.length;) {
              var q = C[M = j[w]];
              b(q, v) ? j.splice(w, 1) : (E.push(q), w++)
            }
          }
          return S[g] = j.length, A
        }
      }),
      Ji = "leftShift",
      Wi = Object(Dt.a)(Ji, ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.zeros,
          a = e.DenseMatrix,
          o = Wr({
            typed: t
          }),
          s = tn({
            typed: t,
            equalScalar: n
          }),
          u = Vi({
            typed: t,
            equalScalar: n
          }),
          c = Xr({
            typed: t,
            DenseMatrix: a
          }),
          f = nn({
            typed: t,
            equalScalar: n
          }),
          l = Qr({
            typed: t
          }),
          p = Kr({
            typed: t
          }),
          m = t(Ji, {
            "number, number": ee,
            "BigNumber, BigNumber": J,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return u(e, t, m, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return s(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, m, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, m)
            },
            "Array, Array": function (e, t) {
              return m(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, r(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return n(t, 0) ? e.clone() : f(e, t, m, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return n(t, 0) ? e.clone() : p(e, t, m, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : c(t, e, m, !0)
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : p(t, e, m, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return m(r(e), t).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return m(e, r(t)).valueOf()
            }
          });
        return m
      }),
      Yi = "rightArithShift",
      Xi = Object(Dt.a)(Yi, ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.zeros,
          a = e.DenseMatrix,
          o = Wr({
            typed: t
          }),
          s = tn({
            typed: t,
            equalScalar: n
          }),
          u = Vi({
            typed: t,
            equalScalar: n
          }),
          c = Xr({
            typed: t,
            DenseMatrix: a
          }),
          f = nn({
            typed: t,
            equalScalar: n
          }),
          l = Qr({
            typed: t
          }),
          p = Kr({
            typed: t
          }),
          m = t(Yi, {
            "number, number": te,
            "BigNumber, BigNumber": W,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return u(e, t, m, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return s(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, m, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, m)
            },
            "Array, Array": function (e, t) {
              return m(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, r(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return n(t, 0) ? e.clone() : f(e, t, m, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return n(t, 0) ? e.clone() : p(e, t, m, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : c(t, e, m, !0)
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : p(t, e, m, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return m(r(e), t).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return m(e, r(t)).valueOf()
            }
          });
        return m
      }),
      Qi = "rightLogShift",
      Ki = Object(Dt.a)(Qi, ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.zeros,
          a = e.DenseMatrix,
          o = Wr({
            typed: t
          }),
          s = tn({
            typed: t,
            equalScalar: n
          }),
          u = Vi({
            typed: t,
            equalScalar: n
          }),
          c = Xr({
            typed: t,
            DenseMatrix: a
          }),
          f = nn({
            typed: t,
            equalScalar: n
          }),
          l = Qr({
            typed: t
          }),
          p = Kr({
            typed: t
          }),
          m = t(Qi, {
            "number, number": re,
            "SparseMatrix, SparseMatrix": function (e, t) {
              return u(e, t, m, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return s(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, m, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, m)
            },
            "Array, Array": function (e, t) {
              return m(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, r(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return n(t, 0) ? e.clone() : f(e, t, m, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return n(t, 0) ? e.clone() : p(e, t, m, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : c(t, e, m, !0)
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return n(e, 0) ? i(t.size(), t.storage()) : p(t, e, m, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return m(r(e), t).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return m(e, r(t)).valueOf()
            }
          });
        return m
      }),
      ea = Object(Dt.a)("and", ["typed", "matrix", "equalScalar", "zeros", "not"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.zeros,
          a = e.not,
          o = tn({
            typed: t,
            equalScalar: n
          }),
          s = rn({
            typed: t,
            equalScalar: n
          }),
          u = nn({
            typed: t,
            equalScalar: n
          }),
          c = Qr({
            typed: t
          }),
          f = Kr({
            typed: t
          }),
          l = t("and", {
            "number, number": oe,
            "Complex, Complex": function (e, t) {
              return !(0 === e.re && 0 === e.im || 0 === t.re && 0 === t.im)
            },
            "BigNumber, BigNumber": function (e, t) {
              return !(e.isZero() || t.isZero() || e.isNaN() || t.isNaN())
            },
            "Unit, Unit": function (e, t) {
              return l(e.value || 0, t.value || 0)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, l, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return o(t, e, l, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, l, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return c(e, t, l)
            },
            "Array, Array": function (e, t) {
              return l(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return l(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return l(e, r(t))
            },
            "SparseMatrix, any": function (e, t) {
              return a(t) ? i(e.size(), e.storage()) : u(e, t, l, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return a(t) ? i(e.size(), e.storage()) : f(e, t, l, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return a(e) ? i(e.size(), e.storage()) : u(t, e, l, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return a(e) ? i(e.size(), e.storage()) : f(t, e, l, !0)
            },
            "Array, any": function (e, t) {
              return l(r(e), t).valueOf()
            },
            "any, Array": function (e, t) {
              return l(e, r(t)).valueOf()
            }
          });
        return l
      }),
      ta = "compare",
      ra = Object(Dt.a)(ta, ["typed", "config", "matrix", "equalScalar", "BigNumber", "Fraction", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.equalScalar,
          i = e.matrix,
          a = e.BigNumber,
          o = e.Fraction,
          s = e.DenseMatrix,
          u = un({
            typed: t
          }),
          c = cn({
            typed: t,
            equalScalar: n
          }),
          f = fn({
            typed: t,
            DenseMatrix: s
          }),
          l = Qr({
            typed: t
          }),
          p = Kr({
            typed: t
          }),
          m = t(ta, {
            "boolean, boolean": function (e, t) {
              return e === t ? 0 : e > t ? 1 : -1
            },
            "number, number": function (e, t) {
              return Object(zt.m)(e, t, r.epsilon) ? 0 : e > t ? 1 : -1
            },
            "BigNumber, BigNumber": function (e, t) {
              return g(e, t, r.epsilon) ? new a(0) : new a(e.cmp(t))
            },
            "Fraction, Fraction": function (e, t) {
              return new o(e.compare(t))
            },
            "Complex, Complex": function () {
              throw new TypeError("No ordering relation is defined for complex numbers")
            },
            "Unit, Unit": function (e, t) {
              if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
              return m(e.value, t.value)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return c(e, t, m)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return u(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return u(e, t, m, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, m)
            },
            "Array, Array": function (e, t) {
              return m(i(e), i(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(i(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, i(t))
            },
            "SparseMatrix, any": function (e, t) {
              return f(e, t, m, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return p(e, t, m, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return f(t, e, m, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return p(t, e, m, !0)
            },
            "Array, any": function (e, t) {
              return p(i(e), t, m, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return p(i(t), e, m, !0).valueOf()
            }
          });
        return m
      }),
      na = (Object(Dt.a)(ta, ["typed", "config"], function (e) {
        var t = e.typed,
          r = e.config;
        return t(ta, {
          "number, number": function (e, t) {
            return Object(zt.m)(e, t, r.epsilon) ? 0 : e > t ? 1 : -1
          }
        })
      }), r(12)),
      ia = r.n(na),
      aa = "compareNatural",
      oa = Object(Dt.a)(aa, ["typed", "compare"], function (e) {
        function t(e, t) {
          for (var r, n = 0, i = Math.min(e.length, t.length); n < i; n++)
            if (0 !== (r = a(e[n], t[n]))) return r;
          return e.length > t.length ? 1 : e.length < t.length ? -1 : 0
        }
        var r = e.typed,
          n = e.compare,
          i = n.signatures["boolean,boolean"],
          a = r(aa, {
            "any, any": function (e, r) {
              var o, s = Object(qt.M)(e),
                u = Object(qt.M)(r);
              if (!("number" !== s && "BigNumber" !== s && "Fraction" !== s || "number" !== u && "BigNumber" !== u && "Fraction" !== u)) return "0" === (o = n(e, r)).toString() ? ia()(s, u) : 0 < o ? 1 : -1;
              if ("Array" === s || "Matrix" === s || "Array" === u || "Matrix" === u) return 0 === (o = function e(r, n) {
                return Object(qt.H)(r) && Object(qt.H)(n) ? t(r.toJSON().values, n.toJSON().values) : Object(qt.H)(r) ? e(r.toArray(), n) : Object(qt.H)(n) ? e(r, n.toArray()) : Object(qt.n)(r) ? e(r.toJSON().data, n) : Object(qt.n)(n) ? e(r, n.toJSON().data) : Array.isArray(r) ? Array.isArray(n) ? t(r, n) : e(r, [n]) : e([r], n)
              }(e, r)) ? ia()(s, u) : o;
              if (s !== u) return ia()(s, u);
              if ("Complex" === s) return function (e, t) {
                return e.re > t.re ? 1 : e.re < t.re ? -1 : e.im > t.im ? 1 : e.im < t.im ? -1 : 0
              }(e, r);
              if ("Unit" === s) return e.equalBase(r) ? a(e.value, r.value) : t(e.formatUnits(), r.formatUnits());
              if ("boolean" === s) return i(e, r);
              if ("string" === s) return ia()(e, r);
              if ("Object" === s) return function (e, r) {
                var n = Object.keys(e),
                  i = Object.keys(r);
                n.sort(ia.a), i.sort(ia.a);
                var o = t(n, i);
                if (0 !== o) return o;
                for (var s, u = 0; u < n.length; u++)
                  if (0 !== (s = a(e[n[u]], r[i[u]]))) return s;
                return 0
              }(e, r);
              if ("null" === s) return 0;
              if ("undefined" === s) return 0;
              throw new TypeError('Unsupported type of value "' + s + '"')
            }
          });
        return a
      }),
      sa = "compareText",
      ua = Object(Dt.a)(sa, ["typed", "matrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = Qr({
            typed: t
          }),
          i = Kr({
            typed: t
          }),
          a = t(sa, {
            "any, any": Kt.a,
            "DenseMatrix, DenseMatrix": function (e, t) {
              return n(e, t, Kt.a)
            },
            "Array, Array": function (e, t) {
              return a(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return a(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return a(e, r(t))
            },
            "DenseMatrix, any": function (e, t) {
              return i(e, t, Kt.a, !1)
            },
            "any, DenseMatrix": function (e, t) {
              return i(t, e, Kt.a, !0)
            },
            "Array, any": function (e, t) {
              return i(r(e), t, Kt.a, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return i(r(t), e, Kt.a, !0).valueOf()
            }
          });
        return a
      }),
      ca = (Object(Dt.a)(sa, ["typed"], function (e) {
        return (0, e.typed)(sa, {
          "any, any": Kt.a
        })
      }), "equal"),
      fa = Object(Dt.a)(ca, ["typed", "matrix", "equalScalar", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.DenseMatrix,
          a = un({
            typed: t
          }),
          o = Tn({
            typed: t,
            DenseMatrix: i
          }),
          s = fn({
            typed: t,
            DenseMatrix: i
          }),
          u = Qr({
            typed: t
          }),
          c = Kr({
            typed: t
          }),
          f = t(ca, {
            "any, any": function (e, t) {
              return null === e ? null === t : null === t ? null === e : void 0 === e ? void 0 === t : void 0 === t ? void 0 === e : n(e, t)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, n)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return a(t, e, n, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return a(e, t, n, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return u(e, t, n)
            },
            "Array, Array": function (e, t) {
              return f(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return f(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return f(e, r(t))
            },
            "SparseMatrix, any": function (e, t) {
              return s(e, t, n, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return c(e, t, n, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return s(t, e, n, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return c(t, e, n, !0)
            },
            "Array, any": function (e, t) {
              return c(r(e), t, n, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return c(r(t), e, n, !0).valueOf()
            }
          });
        return f
      }),
      la = (Object(Dt.a)(ca, ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          r = e.equalScalar;
        return t(ca, {
          "any, any": function (e, t) {
            return null === e ? null === t : null === t ? null === e : void 0 === e ? void 0 === t : void 0 === t ? void 0 === e : r(e, t)
          }
        })
      }), "equalText"),
      pa = Object(Dt.a)(la, ["typed", "compareText", "isZero"], function (e) {
        var t = e.typed,
          r = e.compareText,
          n = e.isZero;
        return t(la, {
          "any, any": function (e, t) {
            return n(r(e, t))
          }
        })
      }),
      ma = "smaller",
      ha = Object(Dt.a)(ma, ["typed", "config", "matrix", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.matrix,
          i = e.DenseMatrix,
          a = un({
            typed: t
          }),
          o = Tn({
            typed: t,
            DenseMatrix: i
          }),
          s = fn({
            typed: t,
            DenseMatrix: i
          }),
          u = Qr({
            typed: t
          }),
          c = Kr({
            typed: t
          }),
          f = t(ma, {
            "boolean, boolean": function (e, t) {
              return e < t
            },
            "number, number": function (e, t) {
              return e < t && !Object(zt.m)(e, t, r.epsilon)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.lt(t) && !g(e, t, r.epsilon)
            },
            "Fraction, Fraction": function (e, t) {
              return -1 === e.compare(t)
            },
            "Complex, Complex": function () {
              throw new TypeError("No ordering relation is defined for complex numbers")
            },
            "Unit, Unit": function (e, t) {
              if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
              return f(e.value, t.value)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, f)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return a(t, e, f, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return a(e, t, f, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return u(e, t, f)
            },
            "Array, Array": function (e, t) {
              return f(n(e), n(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return f(n(e), t)
            },
            "Matrix, Array": function (e, t) {
              return f(e, n(t))
            },
            "SparseMatrix, any": function (e, t) {
              return s(e, t, f, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return c(e, t, f, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return s(t, e, f, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return c(t, e, f, !0)
            },
            "Array, any": function (e, t) {
              return c(n(e), t, f, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return c(n(t), e, f, !0).valueOf()
            }
          });
        return f
      }),
      da = (Object(Dt.a)(ma, ["typed", "config"], function (e) {
        var t = e.typed,
          r = e.config;
        return t(ma, {
          "number, number": function (e, t) {
            return e < t && !Object(zt.m)(e, t, r.epsilon)
          }
        })
      }), "smallerEq"),
      ya = Object(Dt.a)(da, ["typed", "config", "matrix", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.matrix,
          i = e.DenseMatrix,
          a = un({
            typed: t
          }),
          o = Tn({
            typed: t,
            DenseMatrix: i
          }),
          s = fn({
            typed: t,
            DenseMatrix: i
          }),
          u = Qr({
            typed: t
          }),
          c = Kr({
            typed: t
          }),
          f = t(da, {
            "boolean, boolean": function (e, t) {
              return e <= t
            },
            "number, number": function (e, t) {
              return e <= t || Object(zt.m)(e, t, r.epsilon)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.lte(t) || g(e, t, r.epsilon)
            },
            "Fraction, Fraction": function (e, t) {
              return 1 !== e.compare(t)
            },
            "Complex, Complex": function () {
              throw new TypeError("No ordering relation is defined for complex numbers")
            },
            "Unit, Unit": function (e, t) {
              if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
              return f(e.value, t.value)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, f)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return a(t, e, f, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return a(e, t, f, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return u(e, t, f)
            },
            "Array, Array": function (e, t) {
              return f(n(e), n(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return f(n(e), t)
            },
            "Matrix, Array": function (e, t) {
              return f(e, n(t))
            },
            "SparseMatrix, any": function (e, t) {
              return s(e, t, f, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return c(e, t, f, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return s(t, e, f, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return c(t, e, f, !0)
            },
            "Array, any": function (e, t) {
              return c(n(e), t, f, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return c(n(t), e, f, !0).valueOf()
            }
          });
        return f
      }),
      ga = (Object(Dt.a)(da, ["typed", "config"], function (e) {
        var t = e.typed,
          r = e.config;
        return t(da, {
          "number, number": function (e, t) {
            return e <= t || Object(zt.m)(e, t, r.epsilon)
          }
        })
      }), "larger"),
      ba = Object(Dt.a)(ga, ["typed", "config", "matrix", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.matrix,
          i = e.DenseMatrix,
          a = un({
            typed: t
          }),
          o = Tn({
            typed: t,
            DenseMatrix: i
          }),
          s = fn({
            typed: t,
            DenseMatrix: i
          }),
          u = Qr({
            typed: t
          }),
          c = Kr({
            typed: t
          }),
          f = t(ga, {
            "boolean, boolean": function (e, t) {
              return e > t
            },
            "number, number": function (e, t) {
              return e > t && !Object(zt.m)(e, t, r.epsilon)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.gt(t) && !g(e, t, r.epsilon)
            },
            "Fraction, Fraction": function (e, t) {
              return 1 === e.compare(t)
            },
            "Complex, Complex": function () {
              throw new TypeError("No ordering relation is defined for complex numbers")
            },
            "Unit, Unit": function (e, t) {
              if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
              return f(e.value, t.value)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, f)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return a(t, e, f, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return a(e, t, f, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return u(e, t, f)
            },
            "Array, Array": function (e, t) {
              return f(n(e), n(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return f(n(e), t)
            },
            "Matrix, Array": function (e, t) {
              return f(e, n(t))
            },
            "SparseMatrix, any": function (e, t) {
              return s(e, t, f, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return c(e, t, f, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return s(t, e, f, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return c(t, e, f, !0)
            },
            "Array, any": function (e, t) {
              return c(n(e), t, f, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return c(n(t), e, f, !0).valueOf()
            }
          });
        return f
      }),
      va = (Object(Dt.a)(ga, ["typed", "config"], function (e) {
        var t = e.typed,
          r = e.config;
        return t(ga, {
          "number, number": function (e, t) {
            return e > t && !Object(zt.m)(e, t, r.epsilon)
          }
        })
      }), "largerEq"),
      xa = Object(Dt.a)(va, ["typed", "config", "matrix", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.matrix,
          i = e.DenseMatrix,
          a = un({
            typed: t
          }),
          o = Tn({
            typed: t,
            DenseMatrix: i
          }),
          s = fn({
            typed: t,
            DenseMatrix: i
          }),
          u = Qr({
            typed: t
          }),
          c = Kr({
            typed: t
          }),
          f = t(va, {
            "boolean, boolean": function (e, t) {
              return e >= t
            },
            "number, number": function (e, t) {
              return e >= t || Object(zt.m)(e, t, r.epsilon)
            },
            "BigNumber, BigNumber": function (e, t) {
              return e.gte(t) || g(e, t, r.epsilon)
            },
            "Fraction, Fraction": function (e, t) {
              return -1 !== e.compare(t)
            },
            "Complex, Complex": function () {
              throw new TypeError("No ordering relation is defined for complex numbers")
            },
            "Unit, Unit": function (e, t) {
              if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
              return f(e.value, t.value)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, f)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return a(t, e, f, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return a(e, t, f, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return u(e, t, f)
            },
            "Array, Array": function (e, t) {
              return f(n(e), n(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return f(n(e), t)
            },
            "Matrix, Array": function (e, t) {
              return f(e, n(t))
            },
            "SparseMatrix, any": function (e, t) {
              return s(e, t, f, !1)
            },
            "DenseMatrix, any": function (e, t) {
              return c(e, t, f, !1)
            },
            "any, SparseMatrix": function (e, t) {
              return s(t, e, f, !0)
            },
            "any, DenseMatrix": function (e, t) {
              return c(t, e, f, !0)
            },
            "Array, any": function (e, t) {
              return c(n(e), t, f, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return c(n(t), e, f, !0).valueOf()
            }
          });
        return f
      }),
      wa = (Object(Dt.a)(va, ["typed", "config"], function (e) {
        var t = e.typed,
          r = e.config;
        return t(va, {
          "number, number": function (e, t) {
            return e >= t || Object(zt.m)(e, t, r.epsilon)
          }
        })
      }), "deepEqual"),
      Na = Object(Dt.a)(wa, ["typed", "equal"], function (e) {
        var t = e.typed,
          r = e.equal;
        return t(wa, {
          "any, any": function (e, t) {
            return function e(t, n) {
              if (Array.isArray(t)) {
                if (Array.isArray(n)) {
                  var i = t.length;
                  if (i !== n.length) return !1;
                  for (var a = 0; a < i; a++)
                    if (!e(t[a], n[a])) return !1;
                  return !0
                }
                return !1
              }
              return !Array.isArray(n) && r(t, n)
            }(e.valueOf(), t.valueOf())
          }
        })
      }),
      Oa = "unequal",
      Ma = Object(Dt.a)(Oa, ["typed", "config", "equalScalar", "matrix", "DenseMatrix"], function (e) {
        function t(e, t) {
          return !n(e, t)
        }
        var r = e.typed,
          n = (e.config, e.equalScalar),
          i = e.matrix,
          a = e.DenseMatrix,
          o = un({
            typed: r
          }),
          s = Tn({
            typed: r,
            DenseMatrix: a
          }),
          u = fn({
            typed: r,
            DenseMatrix: a
          }),
          c = Qr({
            typed: r
          }),
          f = Kr({
            typed: r
          }),
          l = r("unequal", {
            "any, any": function (e, r) {
              return null === e ? null !== r : null === r ? null !== e : void 0 === e ? void 0 !== r : void 0 === r ? void 0 !== e : t(e, r)
            },
            "SparseMatrix, SparseMatrix": function (e, r) {
              return s(e, r, t)
            },
            "SparseMatrix, DenseMatrix": function (e, r) {
              return o(r, e, t, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, r) {
              return o(e, r, t, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, r) {
              return c(e, r, t)
            },
            "Array, Array": function (e, t) {
              return l(i(e), i(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return l(i(e), t)
            },
            "Matrix, Array": function (e, t) {
              return l(e, i(t))
            },
            "SparseMatrix, any": function (e, r) {
              return u(e, r, t, !1)
            },
            "DenseMatrix, any": function (e, r) {
              return f(e, r, t, !1)
            },
            "any, SparseMatrix": function (e, r) {
              return u(r, e, t, !0)
            },
            "any, DenseMatrix": function (e, r) {
              return f(r, e, t, !0)
            },
            "Array, any": function (e, r) {
              return f(i(e), r, t, !1).valueOf()
            },
            "any, Array": function (e, r) {
              return f(i(r), e, t, !0).valueOf()
            }
          });
        return l
      }),
      Ea = (Object(Dt.a)(Oa, ["typed", "equalScalar"], function (e) {
        var t = e.typed,
          r = e.equalScalar;
        return t(Oa, {
          "any, any": function (e, t) {
            return null === e ? null !== t : null === t ? null !== e : void 0 === e ? void 0 !== t : void 0 === t ? void 0 !== e : !r(e, t)
          }
        })
      }), "partitionSelect"),
      ja = Object(Dt.a)(Ea, ["typed", "isNumeric", "isNaN", "compare"], function (e) {
        function t(e, t, n) {
          if (!Object(zt.i)(t) || 0 > t) throw new Error("k must be a non-negative integer");
          if (Object(qt.v)(e)) {
            if (1 < e.size().length) throw new Error("Only one dimensional matrices supported");
            return r(e.valueOf(), t, n)
          }
          return Array.isArray(e) ? r(e, t, n) : void 0
        }

        function r(e, t, r) {
          if (t >= e.length) throw new Error("k out of bounds");
          for (var n = 0; n < e.length; n++)
            if (i(e[n]) && a(e[n])) return e[n];
          for (var o = 0, s = e.length - 1; o < s;) {
            for (var u = o, c = s, f = e[Math.floor(Math.random() * (s - o + 1)) + o]; u < c;)
              if (0 <= r(e[u], f)) {
                var l = e[c];
                e[c] = e[u], e[u] = l, --c
              } else ++u;
            0 < r(e[u], f) && --u, t <= u ? s = u : o = u + 1
          }
          return e[t]
        }
        var n = e.typed,
          i = e.isNumeric,
          a = e.isNaN,
          o = e.compare,
          s = o,
          u = function (e, t) {
            return -o(e, t)
          };
        return n(Ea, {
          "Array | Matrix, number": function (e, r) {
            return t(e, r, s)
          },
          "Array | Matrix, number, string": function (e, r, n) {
            if ("asc" === n) return t(e, r, s);
            if ("desc" === n) return t(e, r, u);
            throw new Error('Compare string must be "asc" or "desc"')
          },
          "Array | Matrix, number, function": t
        })
      }),
      Sa = Object(Dt.a)("sort", ["typed", "matrix", "compare", "compareNatural"], function (e) {
        function t(e) {
          if ("asc" === e) return u;
          if ("desc" === e) return c;
          if ("natural" === e) return s;
          throw new Error('String "asc", "desc", or "natural" expected')
        }

        function r(e) {
          if (1 !== Object(Qt.a)(e).length) throw new Error("One dimensional array expected")
        }

        function n(e) {
          if (1 !== e.size().length) throw new Error("One dimensional matrix expected")
        }
        var i = e.typed,
          a = e.matrix,
          o = e.compare,
          s = e.compareNatural,
          u = o,
          c = function (e, t) {
            return -o(e, t)
          };
        return i("sort", {
          Array: function (e) {
            return r(e), e.sort(u)
          },
          Matrix: function (e) {
            return n(e), a(e.toArray().sort(u), e.storage())
          },
          "Array, function": function (e, t) {
            return r(e), e.sort(t)
          },
          "Matrix, function": function (e, t) {
            return n(e), a(e.toArray().sort(t), e.storage())
          },
          "Array, string": function (e, n) {
            return r(e), e.sort(t(n))
          },
          "Matrix, string": function (e, r) {
            return n(e), a(e.toArray().sort(t(r)), e.storage())
          }
        })
      }),
      Aa = Object(Dt.a)("max", ["typed", "larger"], function (e) {
        function t(e, t) {
          try {
            return i(e, t) ? e : t
          } catch (e) {
            throw Se(e, "max", t)
          }
        }

        function r(e) {
          var t;
          if (u(e, function (e) {
              try {
                isNaN(e) && "number" == typeof e ? t = NaN : (void 0 === t || i(e, t)) && (t = e)
              } catch (t) {
                throw Se(t, "max", e)
              }
            }), void 0 === t) throw new Error("Cannot calculate max of an empty array");
          return t
        }
        var n = e.typed,
          i = e.larger;
        return n("max", {
          "Array | Matrix": r,
          "Array | Matrix, number | BigNumber": function (e, r) {
            return f(e, r.valueOf(), t)
          },
          "...": function (e) {
            if (s(e)) throw new TypeError("Scalar values expected in function max");
            return r(e)
          }
        })
      }),
      Ca = Object(Dt.a)("min", ["typed", "smaller"], function (e) {
        function t(e, t) {
          try {
            return i(e, t) ? e : t
          } catch (e) {
            throw Se(e, "min", t)
          }
        }

        function r(e) {
          var t;
          if (u(e, function (e) {
              try {
                isNaN(e) && "number" == typeof e ? t = NaN : (void 0 === t || i(e, t)) && (t = e)
              } catch (t) {
                throw Se(t, "min", e)
              }
            }), void 0 === t) throw new Error("Cannot calculate min of an empty array");
          return t
        }
        var n = e.typed,
          i = e.smaller;
        return n("min", {
          "Array | Matrix": r,
          "Array | Matrix, number | BigNumber": function (e, r) {
            return f(e, r.valueOf(), t)
          },
          "...": function (e) {
            if (s(e)) throw new TypeError("Scalar values expected in function min");
            return r(e)
          }
        })
      }),
      Ta = Object(Dt.a)("ImmutableDenseMatrix", ["smaller", "DenseMatrix"], function (e) {
        function t(e, r) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (r && !Object(qt.I)(r)) throw new Error("Invalid datatype: " + r);
          if (Object(qt.v)(e) || Object(qt.b)(e)) {
            var i = new n(e, r);
            this._data = i._data, this._size = i._size, this._datatype = i._datatype, this._min = null, this._max = null
          } else if (e && Object(qt.b)(e.data) && Object(qt.b)(e.size)) this._data = e.data, this._size = e.size, this._datatype = e.datatype, this._min = void 0 === e.min ? null : e.min, this._max = void 0 === e.max ? null : e.max;
          else {
            if (e) throw new TypeError("Unsupported type of data (" + Object(qt.M)(e) + ")");
            this._data = [], this._size = [0], this._datatype = r, this._min = null, this._max = null
          }
        }
        var r = e.smaller,
          n = e.DenseMatrix;
        return t.prototype = new n, t.prototype.type = "ImmutableDenseMatrix", t.prototype.isImmutableDenseMatrix = !0, t.prototype.subset = function (e) {
          switch (arguments.length) {
            case 1:
              var r = n.prototype.subset.call(this, e);
              return Object(qt.v)(r) ? new t({
                data: r._data,
                size: r._size,
                datatype: r._datatype
              }) : r;
            case 2:
            case 3:
              throw new Error("Cannot invoke set subset on an Immutable Matrix instance");
            default:
              throw new SyntaxError("Wrong number of arguments")
          }
        }, t.prototype.set = function () {
          throw new Error("Cannot invoke set on an Immutable Matrix instance")
        }, t.prototype.resize = function () {
          throw new Error("Cannot invoke resize on an Immutable Matrix instance")
        }, t.prototype.reshape = function () {
          throw new Error("Cannot invoke reshape on an Immutable Matrix instance")
        }, t.prototype.clone = function () {
          return new t({
            data: Object(er.a)(this._data),
            size: Object(er.a)(this._size),
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
              (null === e || r(t, e)) && (e = t)
            }), this._min = null === e ? void 0 : e
          }
          return this._min
        }, t.prototype.max = function () {
          if (null === this._max) {
            var e = null;
            this.forEach(function (t) {
              (null === e || r(e, t)) && (e = t)
            }), this._max = null === e ? void 0 : e
          }
          return this._max
        }, t
      }, {
        isClass: !0
      }),
      _a = Object(Dt.a)("Index", ["ImmutableDenseMatrix"], function (e) {
        function t() {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          this._dimensions = [], this._isScalar = !0;
          for (var e, n = 0, i = arguments.length; n < i; n++)
            if (e = arguments[n], Object(qt.D)(e)) this._dimensions.push(e), this._isScalar = !1;
            else if (Array.isArray(e) || Object(qt.v)(e)) {
            var a = r(e.valueOf());
            this._dimensions.push(a);
            var o = a.size();
            (1 !== o.length || 1 !== o[0]) && (this._isScalar = !1)
          } else if ("number" == typeof e) this._dimensions.push(r([e]));
          else {
            if ("string" != typeof e) throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
            this._dimensions.push(e)
          }
        }

        function r(e) {
          for (var t = 0, r = e.length; t < r; t++)
            if ("number" != typeof e[t] || !Object(zt.i)(e[t])) throw new TypeError("Index parameters must be positive integer numbers");
          return new n(e)
        }
        var n = e.ImmutableDenseMatrix;
        return t.prototype.type = "Index", t.prototype.isIndex = !0, t.prototype.clone = function () {
          var e = new t;
          return e._dimensions = Object(er.a)(this._dimensions), e._isScalar = this._isScalar, e
        }, t.create = function (e) {
          var r = new t;
          return t.apply(r, e), r
        }, t.prototype.size = function () {
          for (var e, t = [], r = 0, n = this._dimensions.length; r < n; r++) e = this._dimensions[r], t[r] = "string" == typeof e ? 1 : e.size()[0];
          return t
        }, t.prototype.max = function () {
          for (var e, t = [], r = 0, n = this._dimensions.length; r < n; r++) e = this._dimensions[r], t[r] = "string" == typeof e ? e : e.max();
          return t
        }, t.prototype.min = function () {
          for (var e, t = [], r = 0, n = this._dimensions.length; r < n; r++) e = this._dimensions[r], t[r] = "string" == typeof e ? e : e.min();
          return t
        }, t.prototype.forEach = function (e) {
          for (var t = 0, r = this._dimensions.length; t < r; t++) e(this._dimensions[t], t, this)
        }, t.prototype.dimension = function (e) {
          return this._dimensions[e] || null
        }, t.prototype.isObjectProperty = function () {
          return 1 === this._dimensions.length && "string" == typeof this._dimensions[0]
        }, t.prototype.getObjectProperty = function () {
          return this.isObjectProperty() ? this._dimensions[0] : null
        }, t.prototype.isScalar = function () {
          return this._isScalar
        }, t.prototype.toArray = function () {
          for (var e, t = [], r = 0, n = this._dimensions.length; r < n; r++) e = this._dimensions[r], t.push("string" == typeof e ? e : e.toArray());
          return t
        }, t.prototype.valueOf = t.prototype.toArray, t.prototype.toString = function () {
          for (var e, t = [], r = 0, n = this._dimensions.length; r < n; r++) "string" == typeof (e = this._dimensions[r]) ? t.push(JSON.stringify(e)) : t.push(e.toString());
          return "[" + t.join(", ") + "]"
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
      Ia = Object(Dt.a)("FibonacciHeap", ["smaller", "larger"], function (e) {
        function t() {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          this._minimum = null, this._size = 0
        }

        function r(e, t, r) {
          t.key = r;
          var a = t.parent;
          return a && i(t.key, a.key) && (n(e, t, a), function e(t, r) {
            var i = r.parent;
            i && (r.mark ? (n(t, r, i), e(i)) : r.mark = !0)
          }(e, a)), i(t.key, e.key) && (e = t), e
        }

        function n(e, t, r) {
          t.left.right = t.right, t.right.left = t.left, r.degree--, r.child === t && (r.child = t.right), 0 === r.degree && (r.child = null), t.left = e, t.right = e.right, e.right = t, t.right.left = t, t.parent = null, t.mark = !1
        }
        var i = e.smaller,
          a = e.larger,
          o = 1 / Math.log((1 + Math.sqrt(5)) / 2);
        t.prototype.type = "FibonacciHeap", t.prototype.isFibonacciHeap = !0, t.prototype.insert = function (e, t) {
          var r = {
            key: e,
            value: t,
            degree: 0
          };
          if (this._minimum) {
            var n = this._minimum;
            r.left = n, r.right = n.right, n.right = r, r.right.left = r, i(e, n.key) && (this._minimum = r)
          } else r.left = r, r.right = r, this._minimum = r;
          return this._size++, r
        }, t.prototype.size = function () {
          return this._size
        }, t.prototype.clear = function () {
          this._minimum = null, this._size = 0
        }, t.prototype.isEmpty = function () {
          return 0 === this._size
        }, t.prototype.extractMinimum = function () {
          var e = this._minimum;
          if (null === e) return e;
          for (var t, r = this._minimum, n = e.degree, u = e.child; 0 < n;) t = u.right, u.left.right = u.right, u.right.left = u.left, u.left = r, u.right = r.right, r.right = u, u.right.left = u, u.parent = null, u = t, n--;
          return e.left.right = e.right, e.right.left = e.left, e === e.right ? r = null : r = function (e, t) {
            var r, n = Math.floor(Math.log(t) * o) + 1,
              u = Array(n),
              c = 0,
              f = e;
            if (f)
              for (c++, f = f.right; f !== e;) c++, f = f.right;
            for (; 0 < c;) {
              for (var l = f.degree, p = f.right; r = u[l];) {
                if (a(f.key, r.key)) {
                  var m = r;
                  r = f, f = m
                }
                s(r, f), u[l] = null, l++
              }
              u[l] = f, f = p, c--
            }
            e = null;
            for (var h = 0; h < n; h++)(r = u[h]) && (e ? (r.left.right = r.right, r.right.left = r.left, r.left = e, r.right = e.right, e.right = r, r.right.left = r, i(r.key, e.key) && (e = r)) : e = r);
            return e
          }(r = e.right, this._size), this._size--, this._minimum = r, e
        }, t.prototype.remove = function (e) {
          this._minimum = r(this._minimum, e, -1), this.extractMinimum()
        };
        var s = function (e, t) {
          e.left.right = e.right, e.right.left = e.left, e.parent = t, t.child ? (e.left = t.child, e.right = t.child.right, t.child.right = e, e.right.left = e) : (t.child = e, e.right = e, e.left = e), t.degree++, e.mark = !1
        };
        return t
      }, {
        isClass: !0
      }),
      qa = Object(Dt.a)("Spa", ["addScalar", "equalScalar", "FibonacciHeap"], function (e) {
        function t() {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          this._values = [], this._heap = new i
        }
        var r = e.addScalar,
          n = e.equalScalar,
          i = e.FibonacciHeap;
        return t.prototype.type = "Spa", t.prototype.isSpa = !0, t.prototype.set = function (e, t) {
          if (this._values[e]) this._values[e].value = t;
          else {
            var r = this._heap.insert(e, t);
            this._values[e] = r
          }
        }, t.prototype.get = function (e) {
          var t = this._values[e];
          return t ? t.value : 0
        }, t.prototype.accumulate = function (e, t) {
          var n = this._values[e];
          n ? n.value = r(n.value, t) : (n = this._heap.insert(e, t), this._values[e] = n)
        }, t.prototype.forEach = function (e, t, r) {
          var i = this._heap,
            a = this._values,
            o = [],
            s = i.extractMinimum();
          for (s && o.push(s); s && s.key <= t;) s.key >= e && !n(s.value, 0) && r(s.key, s.value, this), (s = i.extractMinimum()) && o.push(s);
          for (var u, c = 0; c < o.length; c++) u = o[c], a[(s = i.insert(u.key, u.value)).key] = s
        }, t.prototype.swap = function (e, t) {
          var r = this._values[e],
            n = this._values[t];
          if (!r && n) r = this._heap.insert(e, n.value), this._heap.remove(n), this._values[e] = r, this._values[t] = void 0;
          else if (r && !n) n = this._heap.insert(t, r.value), this._heap.remove(r), this._values[t] = n, this._values[e] = void 0;
          else if (r && n) {
            var i = r.value;
            r.value = n.value, n.value = i
          }
        }, t
      }, {
        isClass: !0
      }),
      Ba = ce(function (e) {
        return new e(1).exp()
      }, _e),
      ka = ce(function (e) {
        return new e(1).plus(new e(5).sqrt()).div(2)
      }, _e),
      za = ce(function (e) {
        return e.acos(-1)
      }, _e),
      Da = ce(function (e) {
        return za(e).times(2)
      }, _e),
      Ra = Object(Dt.a)("Unit", ["?on", "config", "addScalar", "subtract", "multiplyScalar", "divideScalar", "pow", "abs", "fix", "round", "equal", "isNumeric", "format", "number", "Complex", "BigNumber", "Fraction"], function (e) {
        function t(e, r) {
          if (!(this instanceof t)) throw new Error("Constructor must be called with the new operator");
          if (null != e && !j(e) && !Object(qt.j)(e)) throw new TypeError("First parameter in Unit constructor must be number, BigNumber, Fraction, Complex, or undefined");
          if (void 0 !== r && ("string" != typeof r || "" === r)) throw new TypeError("Second parameter in Unit constructor must be a string");
          if (void 0 !== r) {
            var n = t.parse(r);
            this.units = n.units, this.dimensions = n.dimensions
          } else {
            this.units = [{
              unit: z,
              prefix: I.NONE,
              power: 0
            }], this.dimensions = [];
            for (var i = 0; i < q.length; i++) this.dimensions[i] = 0
          }
          this.value = null != e ? this._normalize(e) : null, this.fixPrefix = !1, this.skipAutomaticSimplification = !0
        }

        function r() {
          for (;
            " " === h || "\t" === h;) i()
        }

        function n(e) {
          return "0" <= e && "9" >= e
        }

        function i() {
          m++, h = p.charAt(m)
        }

        function a(e) {
          m = e, h = p.charAt(m)
        }

        function o() {
          var e, t = "";
          if (e = m, "+" === h ? i() : "-" === h && (t += h, i()), ! function (e) {
              return "0" <= e && "9" >= e || "." === e
            }(h)) return a(e), null;
          if ("." !== h) {
            for (; n(h);) t += h, i();
            "." === h && (t += h, i())
          } else if (t += h, i(), !n(h)) return a(e), null;
          for (; n(h);) t += h, i();
          if ("E" === h || "e" === h) {
            var r = "",
              o = m;
            if (r += h, i(), ("+" === h || "-" === h) && (r += h, i()), !n(h)) return a(o), t;
            for (t += r; n(h);) t += h, i()
          }
          return t
        }

        function s() {
          for (var e = "", t = p.charCodeAt(m); 48 <= t && 57 >= t || 65 <= t && 90 >= t || 97 <= t && 122 >= t;) e += h, i(), t = p.charCodeAt(m);
          return (65 <= (t = e.charCodeAt(0)) && 90 >= t || 97 <= t && 122 >= t) && e || null
        }

        function u(e) {
          return h === e ? (i(), e) : null
        }

        function c(e) {
          if (D.hasOwnProperty(e)) {
            var t = D[e];
            return {
              unit: t,
              prefix: t.prefixes[""]
            }
          }
          for (var r in D)
            if (D.hasOwnProperty(r) && Object(Kt.b)(e, r)) {
              var n = D[r],
                i = e.length - r.length,
                a = e.substring(0, i),
                o = n.prefixes.hasOwnProperty(a) ? n.prefixes[a] : void 0;
              if (void 0 !== o) return {
                unit: n,
                prefix: o
              }
            } return null
        }

        function f(e) {
          return e.equalBase(B.NONE) && null !== e.value && !y.predictable ? e.value : e
        }

        function l(e) {
          if ("BigNumber" === e.number) {
            var t = za(T);
            D.rad.value = new T(1), D.deg.value = t.div(180), D.grad.value = t.div(200), D.cycle.value = t.times(2), D.arcsec.value = t.div(648e3), D.arcmin.value = t.div(10800)
          } else D.rad.value = 1, D.deg.value = Math.PI / 180, D.grad.value = Math.PI / 200, D.cycle.value = 2 * Math.PI, D.arcsec.value = Math.PI / 648e3, D.arcmin.value = Math.PI / 10800;
          D.radian.value = D.rad.value, D.degree.value = D.deg.value, D.gradian.value = D.grad.value
        }
        var p, m, h, d = e.on,
          y = e.config,
          g = e.addScalar,
          b = e.subtract,
          v = e.multiplyScalar,
          x = e.divideScalar,
          w = e.pow,
          N = e.abs,
          O = e.fix,
          M = e.round,
          E = e.equal,
          j = e.isNumeric,
          S = e.format,
          A = e.number,
          C = e.Complex,
          T = e.BigNumber,
          _ = e.Fraction;
        t.prototype.type = "Unit", t.prototype.isUnit = !0, t.parse = function (e, n) {
          if (n = n || {}, m = -1, h = "", "string" != typeof (p = e)) throw new TypeError("Invalid argument in Unit.parse, string expected");
          var a = new t;
          a.units = [];
          var f = 1,
            l = !1;
          i(), r();
          var d = o(),
            g = null;
          if (d) {
            if ("BigNumber" === y.number) g = new T(d);
            else if ("Fraction" === y.number) try {
              g = new _(d)
            } catch (e) {
              g = parseFloat(d)
            } else g = parseFloat(d);
            r(), u("*") ? (f = 1, l = !0) : u("/") && (f = -1, l = !0)
          }
          for (var b = [], v = 1;;) {
            for (r();
              "(" === h;) b.push(f), v *= f, f = 1, i(), r();
            var x = void 0;
            if (!h) break;
            var w = h;
            if (null === (x = s())) throw new SyntaxError('Unexpected "' + w + '" in "' + p + '" at index ' + m.toString());
            var N = c(x);
            if (null === N) throw new SyntaxError('Unit "' + x + '" not found.');
            var O = f * v;
            if (r(), u("^")) {
              r();
              var M = o();
              if (null === M) throw new SyntaxError('In "' + e + '", "^" must be followed by a floating-point number');
              O *= M
            }
            a.units.push({
              unit: N.unit,
              prefix: N.prefix,
              power: O
            });
            for (var E = 0; E < q.length; E++) a.dimensions[E] += (N.unit.dimensions[E] || 0) * O;
            for (r();
              ")" === h;) {
              if (0 === b.length) throw new SyntaxError('Unmatched ")" in "' + p + '" at index ' + m.toString());
              v /= b.pop(), i(), r()
            }
            if (l = !1, u("*") ? (f = 1, l = !0) : u("/") ? (f = -1, l = !0) : f = 1, N.unit.base) {
              var j = N.unit.base.key;
              P.auto[j] = {
                unit: N.unit,
                prefix: N.prefix
              }
            }
          }
          if (r(), h) throw new SyntaxError('Could not parse: "' + e + '"');
          if (l) throw new SyntaxError('Trailing characters: "' + e + '"');
          if (0 !== b.length) throw new SyntaxError('Unmatched "(" in "' + p + '"');
          if (0 === a.units.length && !n.allowNoUnits) throw new SyntaxError('"' + e + '" contains no units');
          return a.value = void 0 === g ? null : a._normalize(g), a
        }, t.prototype.clone = function () {
          var e = new t;
          e.fixPrefix = this.fixPrefix, e.skipAutomaticSimplification = this.skipAutomaticSimplification, e.value = Object(er.a)(this.value), e.dimensions = this.dimensions.slice(0), e.units = [];
          for (var r = 0; r < this.units.length; r++)
            for (var n in e.units[r] = {}, this.units[r]) this.units[r].hasOwnProperty(n) && (e.units[r][n] = this.units[r][n]);
          return e
        }, t.prototype._isDerived = function () {
          return 0 !== this.units.length && (1 < this.units.length || 1e-15 < Math.abs(this.units[0].power - 1))
        }, t.prototype._normalize = function (e) {
          var r, n, i, a, o;
          if (null == e || 0 === this.units.length) return e;
          if (this._isDerived()) {
            var s = e;
            o = t._getNumberConverter(Object(qt.M)(e));
            for (var u = 0; u < this.units.length; u++) r = o(this.units[u].unit.value), a = o(this.units[u].prefix.value), i = o(this.units[u].power), s = v(s, w(v(r, a), i));
            return s
          }
          return r = (o = t._getNumberConverter(Object(qt.M)(e)))(this.units[0].unit.value), n = o(this.units[0].unit.offset), a = o(this.units[0].prefix.value), v(g(e, n), v(r, a))
        }, t.prototype._denormalize = function (e, r) {
          var n, i, a, o, s;
          if (null == e || 0 === this.units.length) return e;
          if (this._isDerived()) {
            var u = e;
            s = t._getNumberConverter(Object(qt.M)(e));
            for (var c = 0; c < this.units.length; c++) n = s(this.units[c].unit.value), o = s(this.units[c].prefix.value), a = s(this.units[c].power), u = x(u, w(v(n, o), a));
            return u
          }
          return n = (s = t._getNumberConverter(Object(qt.M)(e)))(this.units[0].unit.value), o = s(this.units[0].prefix.value), i = s(this.units[0].unit.offset), b(x(x(e, n), null == r ? o : r), i)
        }, t.isValuelessUnit = function (e) {
          return null !== c(e)
        }, t.prototype.hasBase = function (e) {
          if ("string" == typeof e && (e = B[e]), !e) return !1;
          for (var t = 0; t < q.length; t++)
            if (1e-12 < Math.abs((this.dimensions[t] || 0) - (e.dimensions[t] || 0))) return !1;
          return !0
        }, t.prototype.equalBase = function (e) {
          for (var t = 0; t < q.length; t++)
            if (1e-12 < Math.abs((this.dimensions[t] || 0) - (e.dimensions[t] || 0))) return !1;
          return !0
        }, t.prototype.equals = function (e) {
          return this.equalBase(e) && E(this.value, e.value)
        }, t.prototype.multiply = function (e) {
          for (var t = this.clone(), r = 0; r < q.length; r++) t.dimensions[r] = (this.dimensions[r] || 0) + (e.dimensions[r] || 0);
          for (var n, i = 0; i < e.units.length; i++) {
            for (var a in n = {}, e.units[i]) n[a] = e.units[i][a];
            t.units.push(n)
          }
          if (null !== this.value || null !== e.value) {
            var o = null === this.value ? this._normalize(1) : this.value,
              s = null === e.value ? e._normalize(1) : e.value;
            t.value = v(o, s)
          } else t.value = null;
          return t.skipAutomaticSimplification = !1, f(t)
        }, t.prototype.divide = function (e) {
          for (var t = this.clone(), r = 0; r < q.length; r++) t.dimensions[r] = (this.dimensions[r] || 0) - (e.dimensions[r] || 0);
          for (var n, i = 0; i < e.units.length; i++) {
            for (var a in n = {}, e.units[i]) n[a] = e.units[i][a];
            n.power = -n.power, t.units.push(n)
          }
          if (null !== this.value || null !== e.value) {
            var o = null === this.value ? this._normalize(1) : this.value,
              s = null === e.value ? e._normalize(1) : e.value;
            t.value = x(o, s)
          } else t.value = null;
          return t.skipAutomaticSimplification = !1, f(t)
        }, t.prototype.pow = function (e) {
          for (var t = this.clone(), r = 0; r < q.length; r++) t.dimensions[r] = (this.dimensions[r] || 0) * e;
          for (var n = 0; n < t.units.length; n++) t.units[n].power *= e;
          return t.value = null === t.value ? null : w(t.value, e), t.skipAutomaticSimplification = !1, f(t)
        }, t.prototype.abs = function () {
          var e = this.clone();
          for (var t in e.value = null === e.value ? null : N(e.value), e.units)("VA" === e.units[t].unit.name || "VAR" === e.units[t].unit.name) && (e.units[t].unit = D.W);
          return e
        }, t.prototype.to = function (e) {
          var r, n = null === this.value ? this._normalize(1) : this.value;
          if ("string" == typeof e) {
            if (r = t.parse(e), !this.equalBase(r)) throw new Error("Units do not match ('".concat(r.toString(), "' != '").concat(this.toString(), "')"));
            if (null !== r.value) throw new Error("Cannot convert to a unit with a value");
            return r.value = Object(er.a)(n), r.fixPrefix = !0, r.skipAutomaticSimplification = !0, r
          }
          if (Object(qt.L)(e)) {
            if (!this.equalBase(e)) throw new Error("Units do not match ('".concat(e.toString(), "' != '").concat(this.toString(), "')"));
            if (null !== e.value) throw new Error("Cannot convert to a unit with a value");
            return (r = e.clone()).value = Object(er.a)(n), r.fixPrefix = !0, r.skipAutomaticSimplification = !0, r
          }
          throw new Error("String or Unit expected as parameter")
        }, t.prototype.toNumber = function (e) {
          return A(this.toNumeric(e))
        }, t.prototype.toNumeric = function (e) {
          var t;
          return (t = e ? this.to(e) : this.clone())._isDerived() ? t._denormalize(t.value) : t._denormalize(t.value, t.units[0].prefix.value)
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
          var r = new t(e.value, e.unit);
          return r.fixPrefix = e.fixPrefix || !1, r
        }, t.prototype.valueOf = t.prototype.toString, t.prototype.simplify = function () {
          var e, t, r = this.clone(),
            n = [];
          for (var i in F)
            if (r.hasBase(B[i])) {
              e = i;
              break
            } if ("NONE" === e) r.units = [];
          else if (e && F.hasOwnProperty(e) && (t = F[e]), t) r.units = [{
            unit: t.unit,
            prefix: t.prefix,
            power: 1
          }];
          else {
            for (var a, o = !1, s = 0; s < q.length; s++) a = q[s], 1e-12 < Math.abs(r.dimensions[s] || 0) && (F.hasOwnProperty(a) ? n.push({
              unit: F[a].unit,
              prefix: F[a].prefix,
              power: r.dimensions[s] || 0
            }) : o = !0);
            n.length < r.units.length && !o && (r.units = n)
          }
          return r
        }, t.prototype.toSI = function () {
          for (var e, t = this.clone(), r = [], n = 0; n < q.length; n++)
            if (e = q[n], 1e-12 < Math.abs(t.dimensions[n] || 0)) {
              if (!P.si.hasOwnProperty(e)) throw new Error("Cannot express custom unit " + e + " in SI units");
              r.push({
                unit: P.si[e].unit,
                prefix: P.si[e].prefix,
                power: t.dimensions[n] || 0
              })
            } return t.units = r, t.fixPrefix = !0, t.skipAutomaticSimplification = !0, t
        }, t.prototype.formatUnits = function () {
          for (var e = "", t = "", r = 0, n = 0, i = 0; i < this.units.length; i++) 0 < this.units[i].power ? (r++, e += " " + this.units[i].prefix.name + this.units[i].unit.name, 1e-15 < Math.abs(this.units[i].power - 1) && (e += "^" + this.units[i].power)) : 0 > this.units[i].power && n++;
          if (0 < n)
            for (var a = 0; a < this.units.length; a++) 0 > this.units[a].power && (0 < r ? (t += " " + this.units[a].prefix.name + this.units[a].unit.name, 1e-15 < Math.abs(this.units[a].power + 1) && (t += "^" + -this.units[a].power)) : (t += " " + this.units[a].prefix.name + this.units[a].unit.name, t += "^" + this.units[a].power));
          e = e.substr(1), t = t.substr(1), 1 < r && 0 < n && (e = "(" + e + ")"), 1 < n && 0 < r && (t = "(" + t + ")");
          var o = e;
          return 0 < r && 0 < n && (o += " / "), o += t
        }, t.prototype.format = function (e) {
          var t = this.skipAutomaticSimplification || null === this.value ? this.clone() : this.simplify(),
            r = !1;
          for (var n in void 0 !== t.value && null !== t.value && Object(qt.j)(t.value) && (r = 1e-14 > Math.abs(t.value.re)), t.units) t.units[n].unit && ("VA" === t.units[n].unit.name && r ? t.units[n].unit = D.VAR : "VAR" === t.units[n].unit.name && !r && (t.units[n].unit = D.VA));
          1 === t.units.length && !t.fixPrefix && 1e-14 > Math.abs(t.units[0].power - Math.round(t.units[0].power)) && (t.units[0].prefix = t._bestPrefix());
          var i = t._denormalize(t.value),
            a = null === t.value ? "" : S(i, e || {}),
            o = t.formatUnits();
          return t.value && Object(qt.j)(t.value) && (a = "(" + a + ")"), 0 < o.length && 0 < a.length && (a += " "), a += o
        }, t.prototype._bestPrefix = function () {
          if (1 !== this.units.length) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
          if (1e-14 <= Math.abs(this.units[0].power - Math.round(this.units[0].power))) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
          var e = null === this.value ? 0 : N(this.value),
            t = N(this.units[0].unit.value),
            r = this.units[0].prefix;
          if (0 === e) return r;
          var n = this.units[0].power,
            i = Math.log(e / Math.pow(r.value * t, n)) / Math.LN10 - 1.2;
          if (-2.200001 < i && 1.800001 > i) return r;
          i = Math.abs(i);
          var a = this.units[0].unit.prefixes;
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var s = a[o];
              if (s.scientific) {
                var u = Math.abs(Math.log(e / Math.pow(s.value * t, n)) / Math.LN10 - 1.2);
                (u < i || u === i && s.name.length < r.name.length) && (r = s, i = u)
              }
            } return r
        }, t.prototype.splitUnit = function (e) {
          for (var r = this.clone(), n = [], i = 0; i < e.length && (r = r.to(e[i]), i != e.length - 1); i++) {
            var a = r.toNumeric(),
              o = M(a),
              s = new t(E(o, a) ? o : O(r.toNumeric()), e[i].toString());
            n.push(s), r = b(r, s)
          }
          for (var u = 0, c = 0; c < n.length; c++) u = g(u, n[c].value);
          return E(u, this.value) && (r.value = 0), n.push(r), n
        };
        var I = {
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
              value: .001,
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
              value: .001,
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
              value: .001,
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
        I.SHORTLONG = qe(I.SHORT, I.LONG), I.BINARY_SHORT = qe(I.BINARY_SHORT_SI, I.BINARY_SHORT_IEC), I.BINARY_LONG = qe(I.BINARY_LONG_SI, I.BINARY_LONG_IEC);
        var q = ["MASS", "LENGTH", "TIME", "CURRENT", "TEMPERATURE", "LUMINOUS_INTENSITY", "AMOUNT_OF_SUBSTANCE", "ANGLE", "BIT"],
          B = {
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
        for (var k in B) B[k].key = k;
        var z = {
            name: "",
            base: {},
            value: 1,
            offset: 0,
            dimensions: q.map(function () {
              return 0
            })
          },
          D = {
            meter: {
              name: "meter",
              base: B.LENGTH,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            inch: {
              name: "inch",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: .0254,
              offset: 0
            },
            foot: {
              name: "foot",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: .3048,
              offset: 0
            },
            yard: {
              name: "yard",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: .9144,
              offset: 0
            },
            mile: {
              name: "mile",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: 1609.344,
              offset: 0
            },
            link: {
              name: "link",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: .201168,
              offset: 0
            },
            rod: {
              name: "rod",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: 5.0292,
              offset: 0
            },
            chain: {
              name: "chain",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: 20.1168,
              offset: 0
            },
            angstrom: {
              name: "angstrom",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: 1e-10,
              offset: 0
            },
            m: {
              name: "m",
              base: B.LENGTH,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            in: {
              name: "in",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: .0254,
              offset: 0
            },
            ft: {
              name: "ft",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: .3048,
              offset: 0
            },
            yd: {
              name: "yd",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: .9144,
              offset: 0
            },
            mi: {
              name: "mi",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: 1609.344,
              offset: 0
            },
            li: {
              name: "li",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: .201168,
              offset: 0
            },
            rd: {
              name: "rd",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: 5.02921,
              offset: 0
            },
            ch: {
              name: "ch",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: 20.1168,
              offset: 0
            },
            mil: {
              name: "mil",
              base: B.LENGTH,
              prefixes: I.NONE,
              value: 254e-7,
              offset: 0
            },
            m2: {
              name: "m2",
              base: B.SURFACE,
              prefixes: I.SQUARED,
              value: 1,
              offset: 0
            },
            sqin: {
              name: "sqin",
              base: B.SURFACE,
              prefixes: I.NONE,
              value: 64516e-8,
              offset: 0
            },
            sqft: {
              name: "sqft",
              base: B.SURFACE,
              prefixes: I.NONE,
              value: .09290304,
              offset: 0
            },
            sqyd: {
              name: "sqyd",
              base: B.SURFACE,
              prefixes: I.NONE,
              value: .83612736,
              offset: 0
            },
            sqmi: {
              name: "sqmi",
              base: B.SURFACE,
              prefixes: I.NONE,
              value: 2589988.110336,
              offset: 0
            },
            sqrd: {
              name: "sqrd",
              base: B.SURFACE,
              prefixes: I.NONE,
              value: 25.29295,
              offset: 0
            },
            sqch: {
              name: "sqch",
              base: B.SURFACE,
              prefixes: I.NONE,
              value: 404.6873,
              offset: 0
            },
            sqmil: {
              name: "sqmil",
              base: B.SURFACE,
              prefixes: I.NONE,
              value: 6.4516e-10,
              offset: 0
            },
            acre: {
              name: "acre",
              base: B.SURFACE,
              prefixes: I.NONE,
              value: 4046.86,
              offset: 0
            },
            hectare: {
              name: "hectare",
              base: B.SURFACE,
              prefixes: I.NONE,
              value: 1e4,
              offset: 0
            },
            m3: {
              name: "m3",
              base: B.VOLUME,
              prefixes: I.CUBIC,
              value: 1,
              offset: 0
            },
            L: {
              name: "L",
              base: B.VOLUME,
              prefixes: I.SHORT,
              value: .001,
              offset: 0
            },
            l: {
              name: "l",
              base: B.VOLUME,
              prefixes: I.SHORT,
              value: .001,
              offset: 0
            },
            litre: {
              name: "litre",
              base: B.VOLUME,
              prefixes: I.LONG,
              value: .001,
              offset: 0
            },
            cuin: {
              name: "cuin",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: 16387064e-12,
              offset: 0
            },
            cuft: {
              name: "cuft",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .028316846592,
              offset: 0
            },
            cuyd: {
              name: "cuyd",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .764554857984,
              offset: 0
            },
            teaspoon: {
              name: "teaspoon",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: 5e-6,
              offset: 0
            },
            tablespoon: {
              name: "tablespoon",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: 15e-6,
              offset: 0
            },
            drop: {
              name: "drop",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: 5e-8,
              offset: 0
            },
            gtt: {
              name: "gtt",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: 5e-8,
              offset: 0
            },
            minim: {
              name: "minim",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: 6.161152e-8,
              offset: 0
            },
            fluiddram: {
              name: "fluiddram",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: 36966911e-13,
              offset: 0
            },
            fluidounce: {
              name: "fluidounce",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: 2957353e-11,
              offset: 0
            },
            gill: {
              name: "gill",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .0001182941,
              offset: 0
            },
            cc: {
              name: "cc",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: 1e-6,
              offset: 0
            },
            cup: {
              name: "cup",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .0002365882,
              offset: 0
            },
            pint: {
              name: "pint",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .0004731765,
              offset: 0
            },
            quart: {
              name: "quart",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .0009463529,
              offset: 0
            },
            gallon: {
              name: "gallon",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .003785412,
              offset: 0
            },
            beerbarrel: {
              name: "beerbarrel",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .1173478,
              offset: 0
            },
            oilbarrel: {
              name: "oilbarrel",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .1589873,
              offset: 0
            },
            hogshead: {
              name: "hogshead",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .238481,
              offset: 0
            },
            fldr: {
              name: "fldr",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: 36966911e-13,
              offset: 0
            },
            floz: {
              name: "floz",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: 2957353e-11,
              offset: 0
            },
            gi: {
              name: "gi",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .0001182941,
              offset: 0
            },
            cp: {
              name: "cp",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .0002365882,
              offset: 0
            },
            pt: {
              name: "pt",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .0004731765,
              offset: 0
            },
            qt: {
              name: "qt",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .0009463529,
              offset: 0
            },
            gal: {
              name: "gal",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .003785412,
              offset: 0
            },
            bbl: {
              name: "bbl",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .1173478,
              offset: 0
            },
            obl: {
              name: "obl",
              base: B.VOLUME,
              prefixes: I.NONE,
              value: .1589873,
              offset: 0
            },
            g: {
              name: "g",
              base: B.MASS,
              prefixes: I.SHORT,
              value: .001,
              offset: 0
            },
            gram: {
              name: "gram",
              base: B.MASS,
              prefixes: I.LONG,
              value: .001,
              offset: 0
            },
            ton: {
              name: "ton",
              base: B.MASS,
              prefixes: I.SHORT,
              value: 907.18474,
              offset: 0
            },
            t: {
              name: "t",
              base: B.MASS,
              prefixes: I.SHORT,
              value: 1e3,
              offset: 0
            },
            tonne: {
              name: "tonne",
              base: B.MASS,
              prefixes: I.LONG,
              value: 1e3,
              offset: 0
            },
            grain: {
              name: "grain",
              base: B.MASS,
              prefixes: I.NONE,
              value: 6479891e-11,
              offset: 0
            },
            dram: {
              name: "dram",
              base: B.MASS,
              prefixes: I.NONE,
              value: .0017718451953125,
              offset: 0
            },
            ounce: {
              name: "ounce",
              base: B.MASS,
              prefixes: I.NONE,
              value: .028349523125,
              offset: 0
            },
            poundmass: {
              name: "poundmass",
              base: B.MASS,
              prefixes: I.NONE,
              value: .45359237,
              offset: 0
            },
            hundredweight: {
              name: "hundredweight",
              base: B.MASS,
              prefixes: I.NONE,
              value: 45.359237,
              offset: 0
            },
            stick: {
              name: "stick",
              base: B.MASS,
              prefixes: I.NONE,
              value: .115,
              offset: 0
            },
            stone: {
              name: "stone",
              base: B.MASS,
              prefixes: I.NONE,
              value: 6.35029318,
              offset: 0
            },
            gr: {
              name: "gr",
              base: B.MASS,
              prefixes: I.NONE,
              value: 6479891e-11,
              offset: 0
            },
            dr: {
              name: "dr",
              base: B.MASS,
              prefixes: I.NONE,
              value: .0017718451953125,
              offset: 0
            },
            oz: {
              name: "oz",
              base: B.MASS,
              prefixes: I.NONE,
              value: .028349523125,
              offset: 0
            },
            lbm: {
              name: "lbm",
              base: B.MASS,
              prefixes: I.NONE,
              value: .45359237,
              offset: 0
            },
            cwt: {
              name: "cwt",
              base: B.MASS,
              prefixes: I.NONE,
              value: 45.359237,
              offset: 0
            },
            s: {
              name: "s",
              base: B.TIME,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            min: {
              name: "min",
              base: B.TIME,
              prefixes: I.NONE,
              value: 60,
              offset: 0
            },
            h: {
              name: "h",
              base: B.TIME,
              prefixes: I.NONE,
              value: 3600,
              offset: 0
            },
            second: {
              name: "second",
              base: B.TIME,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            sec: {
              name: "sec",
              base: B.TIME,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            minute: {
              name: "minute",
              base: B.TIME,
              prefixes: I.NONE,
              value: 60,
              offset: 0
            },
            hour: {
              name: "hour",
              base: B.TIME,
              prefixes: I.NONE,
              value: 3600,
              offset: 0
            },
            day: {
              name: "day",
              base: B.TIME,
              prefixes: I.NONE,
              value: 86400,
              offset: 0
            },
            week: {
              name: "week",
              base: B.TIME,
              prefixes: I.NONE,
              value: 604800,
              offset: 0
            },
            month: {
              name: "month",
              base: B.TIME,
              prefixes: I.NONE,
              value: 2629800,
              offset: 0
            },
            year: {
              name: "year",
              base: B.TIME,
              prefixes: I.NONE,
              value: 31557600,
              offset: 0
            },
            decade: {
              name: "decade",
              base: B.TIME,
              prefixes: I.NONE,
              value: 315576e3,
              offset: 0
            },
            century: {
              name: "century",
              base: B.TIME,
              prefixes: I.NONE,
              value: 315576e4,
              offset: 0
            },
            millennium: {
              name: "millennium",
              base: B.TIME,
              prefixes: I.NONE,
              value: 315576e5,
              offset: 0
            },
            hertz: {
              name: "Hertz",
              base: B.FREQUENCY,
              prefixes: I.LONG,
              value: 1,
              offset: 0,
              reciprocal: !0
            },
            Hz: {
              name: "Hz",
              base: B.FREQUENCY,
              prefixes: I.SHORT,
              value: 1,
              offset: 0,
              reciprocal: !0
            },
            rad: {
              name: "rad",
              base: B.ANGLE,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            radian: {
              name: "radian",
              base: B.ANGLE,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            deg: {
              name: "deg",
              base: B.ANGLE,
              prefixes: I.SHORT,
              value: null,
              offset: 0
            },
            degree: {
              name: "degree",
              base: B.ANGLE,
              prefixes: I.LONG,
              value: null,
              offset: 0
            },
            grad: {
              name: "grad",
              base: B.ANGLE,
              prefixes: I.SHORT,
              value: null,
              offset: 0
            },
            gradian: {
              name: "gradian",
              base: B.ANGLE,
              prefixes: I.LONG,
              value: null,
              offset: 0
            },
            cycle: {
              name: "cycle",
              base: B.ANGLE,
              prefixes: I.NONE,
              value: null,
              offset: 0
            },
            arcsec: {
              name: "arcsec",
              base: B.ANGLE,
              prefixes: I.NONE,
              value: null,
              offset: 0
            },
            arcmin: {
              name: "arcmin",
              base: B.ANGLE,
              prefixes: I.NONE,
              value: null,
              offset: 0
            },
            A: {
              name: "A",
              base: B.CURRENT,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            ampere: {
              name: "ampere",
              base: B.CURRENT,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            K: {
              name: "K",
              base: B.TEMPERATURE,
              prefixes: I.NONE,
              value: 1,
              offset: 0
            },
            degC: {
              name: "degC",
              base: B.TEMPERATURE,
              prefixes: I.NONE,
              value: 1,
              offset: 273.15
            },
            degF: {
              name: "degF",
              base: B.TEMPERATURE,
              prefixes: I.NONE,
              value: 1 / 1.8,
              offset: 459.67
            },
            degR: {
              name: "degR",
              base: B.TEMPERATURE,
              prefixes: I.NONE,
              value: 1 / 1.8,
              offset: 0
            },
            kelvin: {
              name: "kelvin",
              base: B.TEMPERATURE,
              prefixes: I.NONE,
              value: 1,
              offset: 0
            },
            celsius: {
              name: "celsius",
              base: B.TEMPERATURE,
              prefixes: I.NONE,
              value: 1,
              offset: 273.15
            },
            fahrenheit: {
              name: "fahrenheit",
              base: B.TEMPERATURE,
              prefixes: I.NONE,
              value: 1 / 1.8,
              offset: 459.67
            },
            rankine: {
              name: "rankine",
              base: B.TEMPERATURE,
              prefixes: I.NONE,
              value: 1 / 1.8,
              offset: 0
            },
            mol: {
              name: "mol",
              base: B.AMOUNT_OF_SUBSTANCE,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            mole: {
              name: "mole",
              base: B.AMOUNT_OF_SUBSTANCE,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            cd: {
              name: "cd",
              base: B.LUMINOUS_INTENSITY,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            candela: {
              name: "candela",
              base: B.LUMINOUS_INTENSITY,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            N: {
              name: "N",
              base: B.FORCE,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            newton: {
              name: "newton",
              base: B.FORCE,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            dyn: {
              name: "dyn",
              base: B.FORCE,
              prefixes: I.SHORT,
              value: 1e-5,
              offset: 0
            },
            dyne: {
              name: "dyne",
              base: B.FORCE,
              prefixes: I.LONG,
              value: 1e-5,
              offset: 0
            },
            lbf: {
              name: "lbf",
              base: B.FORCE,
              prefixes: I.NONE,
              value: 4.4482216152605,
              offset: 0
            },
            poundforce: {
              name: "poundforce",
              base: B.FORCE,
              prefixes: I.NONE,
              value: 4.4482216152605,
              offset: 0
            },
            kip: {
              name: "kip",
              base: B.FORCE,
              prefixes: I.LONG,
              value: 4448.2216,
              offset: 0
            },
            J: {
              name: "J",
              base: B.ENERGY,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            joule: {
              name: "joule",
              base: B.ENERGY,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            erg: {
              name: "erg",
              base: B.ENERGY,
              prefixes: I.NONE,
              value: 1e-7,
              offset: 0
            },
            Wh: {
              name: "Wh",
              base: B.ENERGY,
              prefixes: I.SHORT,
              value: 3600,
              offset: 0
            },
            BTU: {
              name: "BTU",
              base: B.ENERGY,
              prefixes: I.BTU,
              value: 1055.05585262,
              offset: 0
            },
            eV: {
              name: "eV",
              base: B.ENERGY,
              prefixes: I.SHORT,
              value: 1.602176565e-19,
              offset: 0
            },
            electronvolt: {
              name: "electronvolt",
              base: B.ENERGY,
              prefixes: I.LONG,
              value: 1.602176565e-19,
              offset: 0
            },
            W: {
              name: "W",
              base: B.POWER,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            watt: {
              name: "watt",
              base: B.POWER,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            hp: {
              name: "hp",
              base: B.POWER,
              prefixes: I.NONE,
              value: 745.6998715386,
              offset: 0
            },
            VAR: {
              name: "VAR",
              base: B.POWER,
              prefixes: I.SHORT,
              value: C.I,
              offset: 0
            },
            VA: {
              name: "VA",
              base: B.POWER,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            Pa: {
              name: "Pa",
              base: B.PRESSURE,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            psi: {
              name: "psi",
              base: B.PRESSURE,
              prefixes: I.NONE,
              value: 6894.75729276459,
              offset: 0
            },
            atm: {
              name: "atm",
              base: B.PRESSURE,
              prefixes: I.NONE,
              value: 101325,
              offset: 0
            },
            bar: {
              name: "bar",
              base: B.PRESSURE,
              prefixes: I.SHORTLONG,
              value: 1e5,
              offset: 0
            },
            torr: {
              name: "torr",
              base: B.PRESSURE,
              prefixes: I.NONE,
              value: 133.322,
              offset: 0
            },
            mmHg: {
              name: "mmHg",
              base: B.PRESSURE,
              prefixes: I.NONE,
              value: 133.322,
              offset: 0
            },
            mmH2O: {
              name: "mmH2O",
              base: B.PRESSURE,
              prefixes: I.NONE,
              value: 9.80665,
              offset: 0
            },
            cmH2O: {
              name: "cmH2O",
              base: B.PRESSURE,
              prefixes: I.NONE,
              value: 98.0665,
              offset: 0
            },
            coulomb: {
              name: "coulomb",
              base: B.ELECTRIC_CHARGE,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            C: {
              name: "C",
              base: B.ELECTRIC_CHARGE,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            farad: {
              name: "farad",
              base: B.ELECTRIC_CAPACITANCE,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            F: {
              name: "F",
              base: B.ELECTRIC_CAPACITANCE,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            volt: {
              name: "volt",
              base: B.ELECTRIC_POTENTIAL,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            V: {
              name: "V",
              base: B.ELECTRIC_POTENTIAL,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            ohm: {
              name: "ohm",
              base: B.ELECTRIC_RESISTANCE,
              prefixes: I.SHORTLONG,
              value: 1,
              offset: 0
            },
            henry: {
              name: "henry",
              base: B.ELECTRIC_INDUCTANCE,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            H: {
              name: "H",
              base: B.ELECTRIC_INDUCTANCE,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            siemens: {
              name: "siemens",
              base: B.ELECTRIC_CONDUCTANCE,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            S: {
              name: "S",
              base: B.ELECTRIC_CONDUCTANCE,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            weber: {
              name: "weber",
              base: B.MAGNETIC_FLUX,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            Wb: {
              name: "Wb",
              base: B.MAGNETIC_FLUX,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            tesla: {
              name: "tesla",
              base: B.MAGNETIC_FLUX_DENSITY,
              prefixes: I.LONG,
              value: 1,
              offset: 0
            },
            T: {
              name: "T",
              base: B.MAGNETIC_FLUX_DENSITY,
              prefixes: I.SHORT,
              value: 1,
              offset: 0
            },
            b: {
              name: "b",
              base: B.BIT,
              prefixes: I.BINARY_SHORT,
              value: 1,
              offset: 0
            },
            bits: {
              name: "bits",
              base: B.BIT,
              prefixes: I.BINARY_LONG,
              value: 1,
              offset: 0
            },
            B: {
              name: "B",
              base: B.BIT,
              prefixes: I.BINARY_SHORT,
              value: 8,
              offset: 0
            },
            bytes: {
              name: "bytes",
              base: B.BIT,
              prefixes: I.BINARY_LONG,
              value: 8,
              offset: 0
            }
          },
          R = {
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
        l(y), d && d("config", function (e, t) {
          e.number !== t.number && l(e)
        });
        var P = {
          si: {
            NONE: {
              unit: z,
              prefix: I.NONE[""]
            },
            LENGTH: {
              unit: D.m,
              prefix: I.SHORT[""]
            },
            MASS: {
              unit: D.g,
              prefix: I.SHORT.k
            },
            TIME: {
              unit: D.s,
              prefix: I.SHORT[""]
            },
            CURRENT: {
              unit: D.A,
              prefix: I.SHORT[""]
            },
            TEMPERATURE: {
              unit: D.K,
              prefix: I.SHORT[""]
            },
            LUMINOUS_INTENSITY: {
              unit: D.cd,
              prefix: I.SHORT[""]
            },
            AMOUNT_OF_SUBSTANCE: {
              unit: D.mol,
              prefix: I.SHORT[""]
            },
            ANGLE: {
              unit: D.rad,
              prefix: I.SHORT[""]
            },
            BIT: {
              unit: D.bit,
              prefix: I.SHORT[""]
            },
            FORCE: {
              unit: D.N,
              prefix: I.SHORT[""]
            },
            ENERGY: {
              unit: D.J,
              prefix: I.SHORT[""]
            },
            POWER: {
              unit: D.W,
              prefix: I.SHORT[""]
            },
            PRESSURE: {
              unit: D.Pa,
              prefix: I.SHORT[""]
            },
            ELECTRIC_CHARGE: {
              unit: D.C,
              prefix: I.SHORT[""]
            },
            ELECTRIC_CAPACITANCE: {
              unit: D.F,
              prefix: I.SHORT[""]
            },
            ELECTRIC_POTENTIAL: {
              unit: D.V,
              prefix: I.SHORT[""]
            },
            ELECTRIC_RESISTANCE: {
              unit: D.ohm,
              prefix: I.SHORT[""]
            },
            ELECTRIC_INDUCTANCE: {
              unit: D.H,
              prefix: I.SHORT[""]
            },
            ELECTRIC_CONDUCTANCE: {
              unit: D.S,
              prefix: I.SHORT[""]
            },
            MAGNETIC_FLUX: {
              unit: D.Wb,
              prefix: I.SHORT[""]
            },
            MAGNETIC_FLUX_DENSITY: {
              unit: D.T,
              prefix: I.SHORT[""]
            },
            FREQUENCY: {
              unit: D.Hz,
              prefix: I.SHORT[""]
            }
          }
        };
        P.cgs = JSON.parse(JSON.stringify(P.si)), P.cgs.LENGTH = {
          unit: D.m,
          prefix: I.SHORT.c
        }, P.cgs.MASS = {
          unit: D.g,
          prefix: I.SHORT[""]
        }, P.cgs.FORCE = {
          unit: D.dyn,
          prefix: I.SHORT[""]
        }, P.cgs.ENERGY = {
          unit: D.erg,
          prefix: I.NONE[""]
        }, P.us = JSON.parse(JSON.stringify(P.si)), P.us.LENGTH = {
          unit: D.ft,
          prefix: I.NONE[""]
        }, P.us.MASS = {
          unit: D.lbm,
          prefix: I.NONE[""]
        }, P.us.TEMPERATURE = {
          unit: D.degF,
          prefix: I.NONE[""]
        }, P.us.FORCE = {
          unit: D.lbf,
          prefix: I.NONE[""]
        }, P.us.ENERGY = {
          unit: D.BTU,
          prefix: I.BTU[""]
        }, P.us.POWER = {
          unit: D.hp,
          prefix: I.NONE[""]
        }, P.us.PRESSURE = {
          unit: D.psi,
          prefix: I.NONE[""]
        }, P.auto = JSON.parse(JSON.stringify(P.si));
        var F = P.auto;
        for (var U in t.setUnitSystem = function (e) {
            if (!P.hasOwnProperty(e)) throw new Error("Unit system " + e + " does not exist. Choices are: " + Object.keys(P).join(", "));
            F = P[e]
          }, t.getUnitSystem = function () {
            for (var e in P)
              if (P[e] === F) return e
          }, t.typeConverters = {
            BigNumber: function (e) {
              return new T(e + "")
            },
            Fraction: function (e) {
              return new _(e)
            },
            Complex: function (e) {
              return e
            },
            number: function (e) {
              return e
            }
          }, t._getNumberConverter = function (e) {
            if (!t.typeConverters[e]) throw new TypeError('Unsupported type "' + e + '"');
            return t.typeConverters[e]
          }, D) {
          var L = D[U];
          L.dimensions = L.base.dimensions
        }
        for (var H in R)
          if (R.hasOwnProperty(H)) {
            var $ = D[R[H]],
              G = {};
            for (var Z in $) $.hasOwnProperty(Z) && (G[Z] = $[Z]);
            G.name = H, D[H] = G
          } return t.createUnit = function (e, r) {
          if ("object" !== Ie(e)) throw new TypeError("createUnit expects first parameter to be of type 'Object'");
          if (r && r.override)
            for (var n in e)
              if (e.hasOwnProperty(n) && t.deleteUnit(n), e[n].aliases)
                for (var i = 0; i < e[n].aliases.length; i++) t.deleteUnit(e[n].aliases[i]);
          var a;
          for (var o in e) e.hasOwnProperty(o) && (a = t.createUnitSingle(o, e[o]));
          return a
        }, t.createUnitSingle = function (e, r) {
          if (null == r && (r = {}), "string" != typeof e) throw new TypeError("createUnitSingle expects first parameter to be of type 'string'");
          if (D.hasOwnProperty(e)) throw new Error('Cannot create unit "' + e + '": a unit with that name already exists');
          ! function (e) {
            for (var t = 0; t < e.length; t++) {
              var r = e.charAt(t),
                n = function (e) {
                  return /^[a-zA-Z]$/.test(e)
                };
              if (0 == t && !n(r)) throw new Error('Invalid unit name (must begin with alpha character): "' + e + '"');
              if (0 < t && !n(r) && ! function (e) {
                  return "0" <= e && "9" >= e
                }(r)) throw new Error('Invalid unit name (only alphanumeric characters are allowed): "' + e + '"')
            }
          }(e);
          var n, i, a = null,
            o = [],
            s = 0;
          if (r && "Unit" === r.type) a = r.clone();
          else if ("string" == typeof r) "" != r && (n = r);
          else {
            if ("object" !== Ie(r)) throw new TypeError('Cannot create unit "' + e + '" from "' + r.toString() + '": expecting "string" or "Unit" or "Object"');
            n = r.definition, i = r.prefixes, s = r.offset, r.aliases && (o = r.aliases.valueOf())
          }
          if (o)
            for (var u = 0; u < o.length; u++)
              if (D.hasOwnProperty(o[u])) throw new Error('Cannot create alias "' + o[u] + '": a unit with that name already exists');
          if (n && "string" == typeof n && !a) try {
            a = t.parse(n, {
              allowNoUnits: !0
            })
          } catch (t) {
            throw t.message = 'Could not create unit "' + e + '" from "' + n + '": ' + t.message, t
          } else n && "Unit" === n.type && (a = n.clone());
          o = o || [], s = s || 0, i = i && i.toUpperCase && I[i.toUpperCase()] || I.NONE;
          var c = {};
          if (a) {
            c = {
              name: e,
              value: a.value,
              dimensions: a.dimensions.slice(0),
              prefixes: i,
              offset: s
            };
            var f = !1;
            for (var l in B)
              if (B.hasOwnProperty(l)) {
                for (var p = !0, m = 0; m < q.length; m++)
                  if (1e-12 < Math.abs((c.dimensions[m] || 0) - (B[l].dimensions[m] || 0))) {
                    p = !1;
                    break
                  } if (p) {
                  f = !0, c.base = B[l];
                  break
                }
              } if (!f) {
              var h = e + "_STUFF",
                d = {
                  dimensions: a.dimensions.slice(0)
                };
              d.key = h, B[h] = d, F[h] = {
                unit: c,
                prefix: I.NONE[""]
              }, c.base = B[h]
            }
          } else {
            var y = e + "_STUFF";
            if (0 <= q.indexOf(y)) throw new Error('Cannot create new base unit "' + e + '": a base unit with that name already exists (and cannot be overridden)');
            for (var g in q.push(y), B) B.hasOwnProperty(g) && (B[g].dimensions[q.length - 1] = 0);
            for (var b = {
                dimensions: []
              }, v = 0; v < q.length; v++) b.dimensions[v] = 0;
            b.dimensions[q.length - 1] = 1, b.key = y, B[y] = b, c = {
              name: e,
              value: 1,
              dimensions: B[y].dimensions.slice(0),
              prefixes: i,
              offset: s,
              base: B[y]
            }, F[y] = {
              unit: c,
              prefix: I.NONE[""]
            }
          }
          t.UNITS[e] = c;
          for (var x = 0; x < o.length; x++) {
            var w = o[x],
              N = {};
            for (var O in c) c.hasOwnProperty(O) && (N[O] = c[O]);
            N.name = w, t.UNITS[w] = N
          }
          return new t(null, e)
        }, t.deleteUnit = function (e) {
          delete t.UNITS[e]
        }, t.PREFIXES = I, t.BASE_DIMENSIONS = q, t.BASE_UNITS = B, t.UNIT_SYSTEMS = P, t.UNITS = D, t
      }, {
        isClass: !0
      }),
      Pa = Object(Dt.a)("unit", ["typed", "Unit"], function (e) {
        var t = e.typed,
          r = e.Unit,
          n = t("unit", {
            Unit: function (e) {
              return e.clone()
            },
            string: function (e) {
              return r.isValuelessUnit(e) ? new r(null, e) : r.parse(e, {
                allowNoUnits: !0
              })
            },
            "number | BigNumber | Fraction | Complex, string": function (e, t) {
              return new r(e, t)
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      Fa = Object(Dt.a)("sparse", ["typed", "SparseMatrix"], function (e) {
        var t = e.typed,
          r = e.SparseMatrix;
        return t("sparse", {
          "": function () {
            return new r([])
          },
          string: function (e) {
            return new r([], e)
          },
          "Array | Matrix": function (e) {
            return new r(e)
          },
          "Array | Matrix, string": function (e, t) {
            return new r(e, t)
          }
        })
      }),
      Ua = "createUnit",
      La = Object(Dt.a)(Ua, ["typed", "Unit"], function (e) {
        var t = e.typed,
          r = e.Unit;
        return t(Ua, {
          "Object, Object": function (e, t) {
            return r.createUnit(e, t)
          },
          Object: function (e) {
            return r.createUnit(e, {})
          },
          "string, Unit | string | Object, Object": function (e, t, n) {
            var i = {};
            return i[e] = t, r.createUnit(i, n)
          },
          "string, Unit | string | Object": function (e, t) {
            var n = {};
            return n[e] = t, r.createUnit(n, {})
          },
          string: function (e) {
            var t = {};
            return t[e] = {}, r.createUnit(t, {})
          }
        })
      }),
      Ha = Object(Dt.a)("acos", ["typed", "config", "Complex"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.Complex,
          i = t("acos", {
            number: function (e) {
              return -1 <= e && 1 >= e || r.predictable ? Math.acos(e) : new n(e, 0).acos()
            },
            Complex: function (e) {
              return e.acos()
            },
            BigNumber: function (e) {
              return e.acos()
            },
            "Array | Matrix": function (e) {
              return c(e, i)
            }
          });
        return i
      }),
      $a = "number";
    Be.signature = $a, ke.signature = $a, ze.signature = $a, De.signature = $a, Re.signature = $a, Pe.signature = $a, Fe.signature = $a, Ue.signature = $a, Le.signature = $a, He.signature = $a, $e.signature = $a, Ge.signature = $a, Ze.signature = $a, Ve.signature = $a, Je.signature = $a, We.signature = $a;
    var Ga = Object(Dt.a)("acosh", ["typed", "config", "Complex"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.Complex,
          i = t("acosh", {
            number: function (e) {
              return 1 <= e || r.predictable ? Be(e) : -1 >= e ? new n(Math.log(Math.sqrt(e * e - 1) - e), Math.PI) : new n(e, 0).acosh()
            },
            Complex: function (e) {
              return e.acosh()
            },
            BigNumber: function (e) {
              return e.acosh()
            },
            "Array | Matrix": function (e) {
              return c(e, i)
            }
          });
        return i
      }),
      Za = Object(Dt.a)("acot", ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.BigNumber,
          n = t("acot", {
            number: ke,
            Complex: function (e) {
              return e.acot()
            },
            BigNumber: function (e) {
              return new r(1).div(e).atan()
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      Va = Object(Dt.a)("acoth", ["typed", "config", "Complex", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.Complex,
          i = e.BigNumber,
          a = t("acoth", {
            number: function (e) {
              return 1 <= e || -1 >= e || r.predictable ? ze(e) : new n(e, 0).acoth()
            },
            Complex: function (e) {
              return e.acoth()
            },
            BigNumber: function (e) {
              return new i(1).div(e).atanh()
            },
            "Array | Matrix": function (e) {
              return c(e, a)
            }
          });
        return a
      }),
      Ja = Object(Dt.a)("acsc", ["typed", "config", "Complex", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.Complex,
          i = e.BigNumber,
          a = t("acsc", {
            number: function (e) {
              return -1 >= e || 1 <= e || r.predictable ? De(e) : new n(e, 0).acsc()
            },
            Complex: function (e) {
              return e.acsc()
            },
            BigNumber: function (e) {
              return new i(1).div(e).asin()
            },
            "Array | Matrix": function (e) {
              return c(e, a)
            }
          });
        return a
      }),
      Wa = Object(Dt.a)("acsch", ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.BigNumber,
          n = t("acsch", {
            number: Re,
            Complex: function (e) {
              return e.acsch()
            },
            BigNumber: function (e) {
              return new r(1).div(e).asinh()
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      Ya = Object(Dt.a)("asec", ["typed", "config", "Complex", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.Complex,
          i = e.BigNumber,
          a = t("asec", {
            number: function (e) {
              return -1 >= e || 1 <= e || r.predictable ? Pe(e) : new n(e, 0).asec()
            },
            Complex: function (e) {
              return e.asec()
            },
            BigNumber: function (e) {
              return new i(1).div(e).acos()
            },
            "Array | Matrix": function (e) {
              return c(e, a)
            }
          });
        return a
      }),
      Xa = Object(Dt.a)("asech", ["typed", "config", "Complex", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.Complex,
          i = e.BigNumber,
          a = t("asech", {
            number: function (e) {
              if (1 >= e && -1 <= e || r.predictable) {
                var t = 1 / e;
                if (0 < t || r.predictable) return Fe(e);
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
              return c(e, a)
            }
          });
        return a
      }),
      Qa = Object(Dt.a)("asin", ["typed", "config", "Complex"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.Complex,
          i = t("asin", {
            number: function (e) {
              return -1 <= e && 1 >= e || r.predictable ? Math.asin(e) : new n(e, 0).asin()
            },
            Complex: function (e) {
              return e.asin()
            },
            BigNumber: function (e) {
              return e.asin()
            },
            "Array | Matrix": function (e) {
              return c(e, i, !0)
            }
          });
        return i
      }),
      Ka = Object(Dt.a)("asinh", ["typed"], function (e) {
        var t = (0, e.typed)("asinh", {
          number: Ue,
          Complex: function (e) {
            return e.asinh()
          },
          BigNumber: function (e) {
            return e.asinh()
          },
          "Array | Matrix": function (e) {
            return c(e, t, !0)
          }
        });
        return t
      }),
      eo = Object(Dt.a)("atan", ["typed"], function (e) {
        var t = (0, e.typed)("atan", {
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
            return c(e, t, !0)
          }
        });
        return t
      }),
      to = Object(Dt.a)("atan2", ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.equalScalar,
          i = e.BigNumber,
          a = e.DenseMatrix,
          o = tn({
            typed: t,
            equalScalar: n
          }),
          s = un({
            typed: t
          }),
          u = On({
            typed: t,
            equalScalar: n
          }),
          c = nn({
            typed: t,
            equalScalar: n
          }),
          f = fn({
            typed: t,
            DenseMatrix: a
          }),
          l = Qr({
            typed: t
          }),
          p = Kr({
            typed: t
          }),
          m = t("atan2", {
            "number, number": Math.atan2,
            "BigNumber, BigNumber": function (e, t) {
              return i.atan2(e, t)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return u(e, t, m, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return o(t, e, m, !0)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, m, !1)
            },
            "DenseMatrix, DenseMatrix": function (e, t) {
              return l(e, t, m)
            },
            "Array, Array": function (e, t) {
              return m(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return m(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return m(e, r(t))
            },
            "SparseMatrix, number | BigNumber": function (e, t) {
              return c(e, t, m, !1)
            },
            "DenseMatrix, number | BigNumber": function (e, t) {
              return p(e, t, m, !1)
            },
            "number | BigNumber, SparseMatrix": function (e, t) {
              return f(t, e, m, !0)
            },
            "number | BigNumber, DenseMatrix": function (e, t) {
              return p(t, e, m, !0)
            },
            "Array, number | BigNumber": function (e, t) {
              return p(r(e), t, m, !1).valueOf()
            },
            "number | BigNumber, Array": function (e, t) {
              return p(r(t), e, m, !0).valueOf()
            }
          });
        return m
      }),
      ro = Object(Dt.a)("atanh", ["typed", "config", "Complex"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.Complex,
          i = t("atanh", {
            number: function (e) {
              return 1 >= e && -1 <= e || r.predictable ? Le(e) : new n(e, 0).atanh()
            },
            Complex: function (e) {
              return e.atanh()
            },
            BigNumber: function (e) {
              return e.atanh()
            },
            "Array | Matrix": function (e) {
              return c(e, i, !0)
            }
          });
        return i
      }),
      no = Object(Dt.a)("cos", ["typed"], function (e) {
        var t = (0, e.typed)("cos", {
          number: Math.cos,
          Complex: function (e) {
            return e.cos()
          },
          BigNumber: function (e) {
            return e.cos()
          },
          Unit: function (e) {
            if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cos is no angle");
            return t(e.value)
          },
          "Array | Matrix": function (e) {
            return c(e, t)
          }
        });
        return t
      }),
      io = Object(Dt.a)("cosh", ["typed"], function (e) {
        var t = (0, e.typed)("cosh", {
          number: zt.e,
          Complex: function (e) {
            return e.cosh()
          },
          BigNumber: function (e) {
            return e.cosh()
          },
          Unit: function (e) {
            if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cosh is no angle");
            return t(e.value)
          },
          "Array | Matrix": function (e) {
            return c(e, t)
          }
        });
        return t
      }),
      ao = Object(Dt.a)("cot", ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.BigNumber,
          n = t("cot", {
            number: He,
            Complex: function (e) {
              return e.cot()
            },
            BigNumber: function (e) {
              return new r(1).div(e.tan())
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cot is no angle");
              return n(e.value)
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      oo = Object(Dt.a)("coth", ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.BigNumber,
          n = t("coth", {
            number: $e,
            Complex: function (e) {
              return e.coth()
            },
            BigNumber: function (e) {
              return new r(1).div(e.tanh())
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function coth is no angle");
              return n(e.value)
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      so = Object(Dt.a)("csc", ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.BigNumber,
          n = t("csc", {
            number: Ge,
            Complex: function (e) {
              return e.csc()
            },
            BigNumber: function (e) {
              return new r(1).div(e.sin())
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csc is no angle");
              return n(e.value)
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      uo = Object(Dt.a)("csch", ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.BigNumber,
          n = t("csch", {
            number: Ze,
            Complex: function (e) {
              return e.csch()
            },
            BigNumber: function (e) {
              return new r(1).div(e.sinh())
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csch is no angle");
              return n(e.value)
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      co = Object(Dt.a)("sec", ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.BigNumber,
          n = t("sec", {
            number: Ve,
            Complex: function (e) {
              return e.sec()
            },
            BigNumber: function (e) {
              return new r(1).div(e.cos())
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sec is no angle");
              return n(e.value)
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      fo = Object(Dt.a)("sech", ["typed", "BigNumber"], function (e) {
        var t = e.typed,
          r = e.BigNumber,
          n = t("sech", {
            number: Je,
            Complex: function (e) {
              return e.sech()
            },
            BigNumber: function (e) {
              return new r(1).div(e.cosh())
            },
            Unit: function (e) {
              if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sech is no angle");
              return n(e.value)
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      lo = Object(Dt.a)("sin", ["typed"], function (e) {
        var t = (0, e.typed)("sin", {
          number: Math.sin,
          Complex: function (e) {
            return e.sin()
          },
          BigNumber: function (e) {
            return e.sin()
          },
          Unit: function (e) {
            if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sin is no angle");
            return t(e.value)
          },
          "Array | Matrix": function (e) {
            return c(e, t, !0)
          }
        });
        return t
      }),
      po = Object(Dt.a)("sinh", ["typed"], function (e) {
        var t = (0, e.typed)("sinh", {
          number: We,
          Complex: function (e) {
            return e.sinh()
          },
          BigNumber: function (e) {
            return e.sinh()
          },
          Unit: function (e) {
            if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sinh is no angle");
            return t(e.value)
          },
          "Array | Matrix": function (e) {
            return c(e, t, !0)
          }
        });
        return t
      }),
      mo = Object(Dt.a)("tan", ["typed"], function (e) {
        var t = (0, e.typed)("tan", {
          number: Math.tan,
          Complex: function (e) {
            return e.tan()
          },
          BigNumber: function (e) {
            return e.tan()
          },
          Unit: function (e) {
            if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tan is no angle");
            return t(e.value)
          },
          "Array | Matrix": function (e) {
            return c(e, t, !0)
          }
        });
        return t
      }),
      ho = Object(Dt.a)("tanh", ["typed"], function (e) {
        var t = (0, e.typed)("tanh", {
          number: zt.p,
          Complex: function (e) {
            return e.tanh()
          },
          BigNumber: function (e) {
            return e.tanh()
          },
          Unit: function (e) {
            if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tanh is no angle");
            return t(e.value)
          },
          "Array | Matrix": function (e) {
            return c(e, t, !0)
          }
        });
        return t
      }),
      yo = "setCartesian",
      go = Object(Dt.a)(yo, ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.size,
          n = e.subset,
          i = e.compareNatural,
          a = e.Index,
          o = e.DenseMatrix;
        return t(yo, {
          "Array | Matrix, Array | Matrix": function (e, t) {
            var s = [];
            if (0 !== n(r(e), new a(0)) && 0 !== n(r(t), new a(0))) {
              var u = Object(Qt.e)(Array.isArray(e) ? e : e.toArray()).sort(i),
                c = Object(Qt.e)(Array.isArray(t) ? t : t.toArray()).sort(i);
              s = [];
              for (var f = 0; f < u.length; f++)
                for (var l = 0; l < c.length; l++) s.push([u[f], c[l]])
            }
            return Array.isArray(e) && Array.isArray(t) ? s : new o(s)
          }
        })
      }),
      bo = "setDifference",
      vo = Object(Dt.a)(bo, ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.size,
          n = e.subset,
          i = e.compareNatural,
          a = e.Index,
          o = e.DenseMatrix;
        return t(bo, {
          "Array | Matrix, Array | Matrix": function (e, t) {
            var s;
            if (0 === n(r(e), new a(0))) s = [];
            else {
              if (0 === n(r(t), new a(0))) return Object(Qt.e)(e.toArray());
              var u = Object(Qt.i)(Object(Qt.e)(Array.isArray(e) ? e : e.toArray()).sort(i)),
                c = Object(Qt.i)(Object(Qt.e)(Array.isArray(t) ? t : t.toArray()).sort(i));
              s = [];
              for (var f, l = 0; l < u.length; l++) {
                f = !1;
                for (var p = 0; p < c.length; p++)
                  if (0 === i(u[l].value, c[p].value) && u[l].identifier === c[p].identifier) {
                    f = !0;
                    break
                  } f || s.push(u[l])
              }
            }
            return Array.isArray(e) && Array.isArray(t) ? Object(Qt.g)(s) : new o(Object(Qt.g)(s))
          }
        })
      }),
      xo = "setDistinct",
      wo = Object(Dt.a)(xo, ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.size,
          n = e.subset,
          i = e.compareNatural,
          a = e.Index,
          o = e.DenseMatrix;
        return t(xo, {
          "Array | Matrix": function (e) {
            var t;
            if (0 === n(r(e), new a(0))) t = [];
            else {
              var s = Object(Qt.e)(Array.isArray(e) ? e : e.toArray()).sort(i);
              (t = []).push(s[0]);
              for (var u = 1; u < s.length; u++) 0 !== i(s[u], s[u - 1]) && t.push(s[u])
            }
            return Array.isArray(e) ? t : new o(t)
          }
        })
      }),
      No = "setIntersect",
      Oo = Object(Dt.a)(No, ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], function (e) {
        var t = e.typed,
          r = e.size,
          n = e.subset,
          i = e.compareNatural,
          a = e.Index,
          o = e.DenseMatrix;
        return t(No, {
          "Array | Matrix, Array | Matrix": function (e, t) {
            var s;
            if (0 === n(r(e), new a(0)) || 0 === n(r(t), new a(0))) s = [];
            else {
              var u = Object(Qt.i)(Object(Qt.e)(Array.isArray(e) ? e : e.toArray()).sort(i)),
                c = Object(Qt.i)(Object(Qt.e)(Array.isArray(t) ? t : t.toArray()).sort(i));
              s = [];
              for (var f = 0; f < u.length; f++)
                for (var l = 0; l < c.length; l++)
                  if (0 === i(u[f].value, c[l].value) && u[f].identifier === c[l].identifier) {
                    s.push(u[f]);
                    break
                  }
            }
            return Array.isArray(e) && Array.isArray(t) ? Object(Qt.g)(s) : new o(Object(Qt.g)(s))
          }
        })
      }),
      Mo = "setIsSubset",
      Eo = Object(Dt.a)(Mo, ["typed", "size", "subset", "compareNatural", "Index"], function (e) {
        var t = e.typed,
          r = e.size,
          n = e.subset,
          i = e.compareNatural,
          a = e.Index;
        return t(Mo, {
          "Array | Matrix, Array | Matrix": function (e, t) {
            if (0 === n(r(e), new a(0))) return !0;
            if (0 === n(r(t), new a(0))) return !1;
            for (var o, s = Object(Qt.i)(Object(Qt.e)(Array.isArray(e) ? e : e.toArray()).sort(i)), u = Object(Qt.i)(Object(Qt.e)(Array.isArray(t) ? t : t.toArray()).sort(i)), c = 0; c < s.length; c++) {
              o = !1;
              for (var f = 0; f < u.length; f++)
                if (0 === i(s[c].value, u[f].value) && s[c].identifier === u[f].identifier) {
                  o = !0;
                  break
                } if (!1 === o) return !1
            }
            return !0
          }
        })
      }),
      jo = "setMultiplicity",
      So = Object(Dt.a)(jo, ["typed", "size", "subset", "compareNatural", "Index"], function (e) {
        var t = e.typed,
          r = e.size,
          n = e.subset,
          i = e.compareNatural,
          a = e.Index;
        return t(jo, {
          "number | BigNumber | Fraction | Complex, Array | Matrix": function (e, t) {
            if (0 === n(r(t), new a(0))) return 0;
            for (var o = Object(Qt.e)(Array.isArray(t) ? t : t.toArray()), s = 0, u = 0; u < o.length; u++) 0 === i(o[u], e) && s++;
            return s
          }
        })
      }),
      Ao = "setPowerset",
      Co = Object(Dt.a)(Ao, ["typed", "size", "subset", "compareNatural", "Index"], function (e) {
        function t(e, t) {
          for (var r = [], n = 0; n < t.length; n++) "1" === t[n] && r.push(e[n]);
          return r
        }
        var r = e.typed,
          n = e.size,
          i = e.subset,
          a = e.compareNatural,
          o = e.Index;
        return r(Ao, {
          "Array | Matrix": function (e) {
            if (0 === i(n(e), new o(0))) return [];
            for (var r = Object(Qt.e)(Array.isArray(e) ? e : e.toArray()).sort(a), s = [], u = 0; u.toString(2).length <= r.length;) s.push(t(r, u.toString(2).split("").reverse())), u++;
            return function (e) {
              for (var t = [], r = e.length - 1; 0 < r; r--)
                for (var n = 0; n < r; n++) e[n].length > e[n + 1].length && (t = e[n], e[n] = e[n + 1], e[n + 1] = t);
              return e
            }(s)
          }
        })
      }),
      To = "setSize",
      _o = Object(Dt.a)(To, ["typed", "compareNatural"], function (e) {
        var t = e.typed,
          r = e.compareNatural;
        return t(To, {
          "Array | Matrix": function (e) {
            return Array.isArray(e) ? Object(Qt.e)(e).length : Object(Qt.e)(e.toArray()).length
          },
          "Array | Matrix, boolean": function (e, t) {
            if (!1 === t || 0 === e.length) return Array.isArray(e) ? Object(Qt.e)(e).length : Object(Qt.e)(e.toArray()).length;
            for (var n = Object(Qt.e)(Array.isArray(e) ? e : e.toArray()).sort(r), i = 1, a = 1; a < n.length; a++) 0 !== r(n[a], n[a - 1]) && i++;
            return i
          }
        })
      }),
      Io = "setSymDifference",
      qo = Object(Dt.a)(Io, ["typed", "size", "concat", "subset", "setDifference", "Index"], function (e) {
        var t = e.typed,
          r = e.size,
          n = e.concat,
          i = e.subset,
          a = e.setDifference,
          o = e.Index;
        return t(Io, {
          "Array | Matrix, Array | Matrix": function (e, t) {
            if (0 === i(r(e), new o(0))) return Object(Qt.e)(t);
            if (0 === i(r(t), new o(0))) return Object(Qt.e)(e);
            var s = Object(Qt.e)(e),
              u = Object(Qt.e)(t);
            return n(a(s, u), a(u, s))
          }
        })
      }),
      Bo = "setUnion",
      ko = Object(Dt.a)(Bo, ["typed", "size", "concat", "subset", "setIntersect", "setSymDifference", "Index"], function (e) {
        var t = e.typed,
          r = e.size,
          n = e.concat,
          i = e.subset,
          a = e.setIntersect,
          o = e.setSymDifference,
          s = e.Index;
        return t(Bo, {
          "Array | Matrix, Array | Matrix": function (e, t) {
            if (0 === i(r(e), new s(0))) return Object(Qt.e)(t);
            if (0 === i(r(t), new s(0))) return Object(Qt.e)(e);
            var u = Object(Qt.e)(e),
              c = Object(Qt.e)(t);
            return n(o(u, c), a(u, c))
          }
        })
      }),
      zo = Object(Dt.a)("add", ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.addScalar,
          i = e.equalScalar,
          a = e.DenseMatrix,
          o = (e.SparseMatrix, Wr({
            typed: t
          })),
          s = Yr({
            typed: t,
            equalScalar: i
          }),
          u = Xr({
            typed: t,
            DenseMatrix: a
          }),
          c = Qr({
            typed: t
          }),
          f = Kr({
            typed: t
          }),
          l = t("add", Object(er.e)({
            "DenseMatrix, DenseMatrix": function (e, t) {
              return c(e, t, n)
            },
            "DenseMatrix, SparseMatrix": function (e, t) {
              return o(e, t, n, !1)
            },
            "SparseMatrix, DenseMatrix": function (e, t) {
              return o(t, e, n, !0)
            },
            "SparseMatrix, SparseMatrix": function (e, t) {
              return s(e, t, n)
            },
            "Array, Array": function (e, t) {
              return l(r(e), r(t)).valueOf()
            },
            "Array, Matrix": function (e, t) {
              return l(r(e), t)
            },
            "Matrix, Array": function (e, t) {
              return l(e, r(t))
            },
            "DenseMatrix, any": function (e, t) {
              return f(e, t, n, !1)
            },
            "SparseMatrix, any": function (e, t) {
              return u(e, t, n, !1)
            },
            "any, DenseMatrix": function (e, t) {
              return f(t, e, n, !0)
            },
            "any, SparseMatrix": function (e, t) {
              return u(t, e, n, !0)
            },
            "Array, any": function (e, t) {
              return f(r(e), t, n, !1).valueOf()
            },
            "any, Array": function (e, t) {
              return f(r(t), e, n, !0).valueOf()
            },
            "any, any": n,
            "any, any, ...any": function (e, t, r) {
              for (var n = l(e, t), i = 0; i < r.length; i++) n = l(n, r[i]);
              return n
            }
          }, n.signatures));
        return l
      }),
      Do = Object(Dt.a)("hypot", ["typed", "abs", "addScalar", "divideScalar", "multiplyScalar", "sqrt", "smaller", "isPositive"], function (e) {
        var t = e.typed,
          r = e.abs,
          n = e.addScalar,
          i = e.divideScalar,
          a = e.multiplyScalar,
          o = e.sqrt,
          s = e.smaller,
          u = e.isPositive,
          c = t("hypot", {
            "... number | BigNumber": function (e) {
              for (var t, c = 0, f = 0, l = 0; l < e.length; l++) t = r(e[l]), s(f, t) ? (c = a(c, a(i(f, t), i(f, t))), c = n(c, 1), f = t) : c = n(c, u(t) ? a(i(t, f), i(t, f)) : t);
              return a(f, o(c))
            },
            Array: function (e) {
              return c.apply(c, Object(Qt.e)(e))
            },
            Matrix: function (e) {
              return c.apply(c, Object(Qt.e)(e.toArray()))
            }
          });
        return c
      }),
      Ro = Object(Dt.a)("norm", ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix"], function (e) {
        function t(e, r) {
          var p = e.size();
          if (1 === p.length) {
            if (r === Number.POSITIVE_INFINITY || "inf" === r) {
              var m = 0;
              return e.forEach(function (e) {
                var t = n(e);
                f(t, m) && (m = t)
              }, !0), m
            }
            var h;
            if (r === Number.NEGATIVE_INFINITY || "-inf" === r) return e.forEach(function (e) {
              var t = n(e);
              (!h || l(t, h)) && (h = t)
            }, !0), h || 0;
            if ("fro" === r) return t(e, 2);
            if ("number" == typeof r && !isNaN(r)) {
              if (!c(r, 0)) {
                var d = 0;
                return e.forEach(function (e) {
                  d = i(a(n(e), r), d)
                }, !0), a(d, 1 / r)
              }
              return Number.POSITIVE_INFINITY
            }
            throw new Error("Unsupported parameter value")
          }
          if (2 === p.length) {
            if (1 === r) {
              var y = [],
                g = 0;
              return e.forEach(function (e, t) {
                var r = t[1],
                  a = i(y[r] || 0, n(e));
                f(a, g) && (g = a), y[r] = a
              }, !0), g
            }
            if (r === Number.POSITIVE_INFINITY || "inf" === r) {
              var b = [],
                v = 0;
              return e.forEach(function (e, t) {
                var r = t[0],
                  a = i(b[r] || 0, n(e));
                f(a, v) && (v = a), b[r] = a
              }, !0), v
            }
            if ("fro" === r) {
              var x = 0;
              return e.forEach(function (e) {
                x = i(x, u(e, o(e)))
              }), n(s(x))
            }
            if (2 === r) throw new Error("Unsupported parameter value, missing implementation of matrix singular value decomposition");
            throw new Error("Unsupported parameter value")
          }
        }
        var r = e.typed,
          n = e.abs,
          i = e.add,
          a = e.pow,
          o = e.conj,
          s = e.sqrt,
          u = e.multiply,
          c = e.equalScalar,
          f = e.larger,
          l = e.smaller,
          p = e.matrix,
          m = r("norm", {
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
              return t(p(e), 2)
            },
            Matrix: function (e) {
              return t(e, 2)
            },
            "number | Complex | BigNumber | boolean, number | BigNumber | string": function (e) {
              return m(e)
            },
            "Array, number | BigNumber | string": function (e, r) {
              return t(p(e), r)
            },
            "Matrix, number | BigNumber | string": function (e, r) {
              return t(e, r)
            }
          });
        return m
      }),
      Po = Object(Dt.a)("dot", ["typed", "add", "multiply"], function (e) {
        function t(e, t) {
          var r = Object(Qt.a)(e),
            a = Object(Qt.a)(t),
            o = r[0];
          if (1 !== r.length || 1 !== a.length) throw new RangeError("Vector expected");
          if (r[0] !== a[0]) throw new RangeError("Vectors must have equal length (" + r[0] + " != " + a[0] + ")");
          if (0 === o) throw new RangeError("Cannot calculate the dot product of empty vectors");
          for (var s = 0, u = 0; u < o; u++) s = n(s, i(e[u], t[u]));
          return s
        }
        var r = e.typed,
          n = e.add,
          i = e.multiply;
        return r("dot", {
          "Matrix, Matrix": function (e, r) {
            return t(e.toArray(), r.toArray())
          },
          "Matrix, Array": function (e, r) {
            return t(e.toArray(), r)
          },
          "Array, Matrix": function (e, r) {
            return t(e, r.toArray())
          },
          "Array, Array": t
        })
      }),
      Fo = Object(Dt.a)("trace", ["typed", "matrix", "add"], function (e) {
        function t(e) {
          var t = e._size,
            r = e._data;
          switch (t.length) {
            case 1:
              if (1 === t[0]) return Object(er.a)(r[0]);
              throw new RangeError("Matrix must be square (size: " + Object(Kt.d)(t) + ")");
            case 2:
              var n = t[0];
              if (n === t[1]) {
                for (var a = 0, o = 0; o < n; o++) a = i(a, r[o][o]);
                return a
              }
              throw new RangeError("Matrix must be square (size: " + Object(Kt.d)(t) + ")");
            default:
              throw new RangeError("Matrix must be two dimensional (size: " + Object(Kt.d)(t) + ")")
          }
        }
        var r = e.typed,
          n = e.matrix,
          i = e.add;
        return r("trace", {
          Array: function (e) {
            return t(n(e))
          },
          SparseMatrix: function (e) {
            var t = e._values,
              r = e._index,
              n = e._ptr,
              a = e._size,
              o = a[0],
              s = a[1];
            if (o === s) {
              var u = 0;
              if (0 < t.length)
                for (var c = 0; c < s; c++)
                  for (var f, l = n[c], p = n[c + 1], m = l; m < p; m++) {
                    if ((f = r[m]) === c) {
                      u = i(u, t[m]);
                      break
                    }
                    if (f > c) break
                  }
              return u
            }
            throw new RangeError("Matrix must be square (size: " + Object(Kt.d)(a) + ")")
          },
          DenseMatrix: t,
          any: er.a
        })
      }),
      Uo = Object(Dt.a)("index", ["typed", "Index"], function (e) {
        var t = e.typed,
          r = e.Index;
        return t("index", {
          "...number | string | BigNumber | Range | Array | Matrix": function (e) {
            var t = e.map(function (e) {
                return Object(qt.e)(e) ? e.toNumber() : Array.isArray(e) || Object(qt.v)(e) ? e.map(function (e) {
                  return Object(qt.e)(e) ? e.toNumber() : e
                }) : e
              }),
              n = new r;
            return r.apply(n, t), n
          }
        })
      }),
      Lo = {
        end: !0
      },
      Ho = Object(Dt.a)("Node", ["mathWithTransform"], function (e) {
        function t() {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator")
        }
        var r = e.mathWithTransform;
        return t.prototype.evaluate = function (e) {
          return this.compile().evaluate(e)
        }, t.prototype.eval = function (e) {
          return Object(gr.a)("Method Node.eval is renamed to Node.evaluate. Please use the new method name."), this.evaluate(e)
        }, t.prototype.type = "Node", t.prototype.isNode = !0, t.prototype.comment = "", t.prototype.compile = function () {
          function e(e) {
            var r = e || {};
            return function (e) {
              for (var t in e)
                if (Object(er.f)(e, t) && t in Lo) throw new Error('Scope contains an illegal symbol, "' + t + '" is a reserved keyword')
            }(r), t(r, n, i)
          }
          var t = this._compile(r, {}),
            n = {},
            i = null;
          return {
            evaluate: e,
            eval: function (t) {
              return Object(gr.a)("Method eval is renamed to evaluate. Please use the new method."), e(t)
            }
          }
        }, t.prototype._compile = function () {
          throw new Error("Method _compile should be implemented by type " + this.type)
        }, t.prototype.forEach = function () {
          throw new Error("Cannot run forEach on a Node interface")
        }, t.prototype.map = function () {
          throw new Error("Cannot run map on a Node interface")
        }, t.prototype._ifNode = function (e) {
          if (!Object(qt.w)(e)) throw new TypeError("Callback function must return a Node");
          return e
        }, t.prototype.traverse = function (e) {
          e(this, null, null),
            function e(t, r) {
              t.forEach(function (t, n, i) {
                r(t, n, i), e(t, r)
              })
            }(this, e)
        }, t.prototype.transform = function (e) {
          return function t(r, n, i) {
            var a = e(r, n, i);
            return a === r ? r.map(t) : a
          }(this, null, null)
        }, t.prototype.filter = function (e) {
          var t = [];
          return this.traverse(function (r, n, i) {
            e(r, n, i) && t.push(r)
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
          return !!e && Object(er.d)(this, e)
        }, t.prototype.toString = function (e) {
          var t;
          if (e && "object" === Ye(e)) switch (Ye(e.handler)) {
            case "object":
            case "undefined":
              break;
            case "function":
              t = e.handler(this, e);
              break;
            default:
              throw new TypeError("Object or function expected as callback")
          }
          return void 0 === t ? this._toString(e) : t
        }, t.prototype.toJSON = function () {
          throw new Error("Cannot serialize object: toJSON not implemented by " + this.type)
        }, t.prototype.toHTML = function (e) {
          var t;
          if (e && "object" === Ye(e)) switch (Ye(e.handler)) {
            case "object":
            case "undefined":
              break;
            case "function":
              t = e.handler(this, e);
              break;
            default:
              throw new TypeError("Object or function expected as callback")
          }
          return void 0 === t ? this.toHTML(e) : t
        }, t.prototype._toString = function () {
          throw new Error("_toString not implemented for " + this.type)
        }, t.prototype.toTex = function (e) {
          var t;
          if (e && "object" === Ye(e)) switch (Ye(e.handler)) {
            case "object":
            case "undefined":
              break;
            case "function":
              t = e.handler(this, e);
              break;
            default:
              throw new TypeError("Object or function expected as callback")
          }
          return void 0 === t ? this._toTex(e) : t
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
      $o = Object(Dt.a)("AccessorNode", ["subset", "Node"], function (e) {
        function t(e, r) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!Object(qt.w)(e)) throw new TypeError('Node expected for parameter "object"');
          if (!Object(qt.u)(r)) throw new TypeError('IndexNode expected for parameter "index"');
          this.object = e || null, this.index = r, Object.defineProperty(this, "name", {
            get: function () {
              return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || ""
            }.bind(this),
            set: function () {
              throw new Error("Cannot assign a new name, name is read-only")
            }
          })
        }

        function r(e) {
          return !(Object(qt.a)(e) || Object(qt.c)(e) || Object(qt.l)(e) || Object(qt.r)(e) || Object(qt.A)(e) || Object(qt.C)(e) || Object(qt.J)(e))
        }
        var n = e.subset,
          i = e.Node,
          a = Ke({
            subset: n
          });
        return t.prototype = new i, t.prototype.type = "AccessorNode", t.prototype.isAccessorNode = !0, t.prototype._compile = function (e, t) {
          var r = this.object._compile(e, t),
            n = this.index._compile(e, t);
          if (this.index.isObjectProperty()) {
            var i = this.index.getObjectProperty();
            return function (e, t, n) {
              return be(r(e, t, n), i)
            }
          }
          return function (e, t, i) {
            var o = r(e, t, i),
              s = n(e, t, o);
            return a(o, s)
          }
        }, t.prototype.forEach = function (e) {
          e(this.object, "object", this), e(this.index, "index", this)
        }, t.prototype.map = function (e) {
          return new t(this._ifNode(e(this.object, "object", this)), this._ifNode(e(this.index, "index", this)))
        }, t.prototype.clone = function () {
          return new t(this.object, this.index)
        }, t.prototype._toString = function (e) {
          var t = this.object.toString(e);
          return r(this.object) && (t = "(" + t + ")"), t + this.index.toString(e)
        }, t.prototype.toHTML = function (e) {
          var t = this.object.toHTML(e);
          return r(this.object) && (t = '<span class="math-parenthesis math-round-parenthesis">(</span>' + t + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t + this.index.toHTML(e)
        }, t.prototype._toTex = function (e) {
          var t = this.object.toTex(e);
          return r(this.object) && (t = "\\left(' + object + '\\right)"), t + this.index.toTex(e)
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
      Go = Object(Dt.a)("ArrayNode", ["Node"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (this.items = e || [], !Array.isArray(this.items) || !this.items.every(qt.w)) throw new TypeError("Array containing Nodes expected");
          var r = function () {
            throw new Error("Property `ArrayNode.nodes` is deprecated, use `ArrayNode.items` instead")
          };
          Object.defineProperty(this, "nodes", {
            get: r,
            set: r
          })
        }
        var r = e.Node;
        return t.prototype = new r, t.prototype.type = "ArrayNode", t.prototype.isArrayNode = !0, t.prototype._compile = function (e, t) {
          var r = Object(Qt.m)(this.items, function (r) {
            return r._compile(e, t)
          });
          if ("Array" !== e.config.matrix) {
            var n = e.matrix;
            return function (e, t, i) {
              return n(Object(Qt.m)(r, function (r) {
                return r(e, t, i)
              }))
            }
          }
          return function (e, t, n) {
            return Object(Qt.m)(r, function (r) {
              return r(e, t, n)
            })
          }
        }, t.prototype.forEach = function (e) {
          for (var t = 0; t < this.items.length; t++) e(this.items[t], "items[" + t + "]", this)
        }, t.prototype.map = function (e) {
          for (var r = [], n = 0; n < this.items.length; n++) r[n] = this._ifNode(e(this.items[n], "items[" + n + "]", this));
          return new t(r)
        }, t.prototype.clone = function () {
          return new t(this.items.slice(0))
        }, t.prototype._toString = function (e) {
          return "[" + this.items.map(function (t) {
            return t.toString(e)
          }).join(", ") + "]"
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "ArrayNode",
            items: this.items
          }
        }, t.fromJSON = function (e) {
          return new t(e.items)
        }, t.prototype.toHTML = function (e) {
          return '<span class="math-parenthesis math-square-parenthesis">[</span>' + this.items.map(function (t) {
            return t.toHTML(e)
          }).join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>'
        }, t.prototype._toTex = function (e) {
          var t = "\\begin{bmatrix}";
          return this.items.forEach(function (r) {
            t += r.items ? r.items.map(function (t) {
              return t.toTex(e)
            }).join("&") : r.toTex(e), t += "\\\\"
          }), t += "\\end{bmatrix}"
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      Zo = [{
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
      Vo = Object(Dt.a)("AssignmentNode", ["subset", "?matrix", "Node"], function (e) {
        function t(e, r, n) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (this.object = e, this.index = n ? r : null, this.value = n || r, !Object(qt.J)(e) && !Object(qt.a)(e)) throw new TypeError('SymbolNode or AccessorNode expected as "object"');
          if (Object(qt.J)(e) && "end" === e.name) throw new Error('Cannot assign to symbol "end"');
          if (this.index && !Object(qt.u)(this.index)) throw new TypeError('IndexNode expected as "index"');
          if (!Object(qt.w)(this.value)) throw new TypeError('Node expected as "value"');
          Object.defineProperty(this, "name", {
            get: function () {
              return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || ""
            }.bind(this),
            set: function () {
              throw new Error("Cannot assign a new name, name is read-only")
            }
          })
        }

        function r(e, t) {
          t || (t = "keep");
          var r = tt(e, t),
            n = tt(e.value, t);
          return "all" === t || null !== n && n <= r
        }
        var n = e.subset,
          i = e.matrix,
          a = e.Node,
          o = Ke({
            subset: n
          }),
          s = function (e) {
            var t = e.subset,
              r = e.matrix;
            return function (e, n, i) {
              try {
                if (Array.isArray(e)) return r(e).subset(n, i).valueOf();
                if (e && "function" == typeof e.subset) return e.subset(n, i);
                if ("string" == typeof e) return t(e, n, i);
                if ("object" === et(e)) {
                  if (!n.isObjectProperty()) throw TypeError("Cannot apply a numeric index as object property");
                  return ve(e, n.getObjectProperty(), i), e
                }
                throw new TypeError("Cannot apply index: unsupported type of object")
              } catch (e) {
                throw Xe(e)
              }
            }
          }({
            subset: n,
            matrix: i
          });
        return t.prototype = new a, t.prototype.type = "AssignmentNode", t.prototype.isAssignmentNode = !0, t.prototype._compile = function (e, t) {
          var r = this.object._compile(e, t),
            n = this.index ? this.index._compile(e, t) : null,
            i = this.value._compile(e, t),
            a = this.object.name;
          if (!this.index) {
            if (!Object(qt.J)(this.object)) throw new TypeError("SymbolNode expected as object");
            return function (e, t, r) {
              return ve(e, a, i(e, t, r))
            }
          }
          if (this.index.isObjectProperty()) {
            var u = this.index.getObjectProperty();
            return function (e, t, n) {
              var a = r(e, t, n),
                o = i(e, t, n);
              return ve(a, u, o)
            }
          }
          if (Object(qt.J)(this.object)) return function (e, t, o) {
            var u = r(e, t, o),
              c = i(e, t, o),
              f = n(e, t, u);
            return ve(e, a, s(u, f, c)), c
          };
          var c = this.object.object._compile(e, t);
          if (this.object.index.isObjectProperty()) {
            var f = this.object.index.getObjectProperty();
            return function (e, t, r) {
              var a = c(e, t, r),
                o = be(a, f),
                u = n(e, t, o),
                l = i(e, t, r);
              return ve(a, f, s(o, u, l)), l
            }
          }
          var l = this.object.index._compile(e, t);
          return function (e, t, r) {
            var a = c(e, t, r),
              u = l(e, t, a),
              f = o(a, u),
              p = n(e, t, f),
              m = i(e, t, r);
            return s(a, u, s(f, p, m)), m
          }
        }, t.prototype.forEach = function (e) {
          e(this.object, "object", this), this.index && e(this.index, "index", this), e(this.value, "value", this)
        }, t.prototype.map = function (e) {
          return new t(this._ifNode(e(this.object, "object", this)), this.index ? this._ifNode(e(this.index, "index", this)) : null, this._ifNode(e(this.value, "value", this)))
        }, t.prototype.clone = function () {
          return new t(this.object, this.index, this.value)
        }, t.prototype._toString = function (e) {
          var t = this.object.toString(e),
            n = this.index ? this.index.toString(e) : "",
            i = this.value.toString(e);
          return r(this, e && e.parenthesis) && (i = "(" + i + ")"), t + n + " = " + i
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
          return r(this, e && e.parenthesis) && (i = '<span class="math-paranthesis math-round-parenthesis">(</span>' + i + '<span class="math-paranthesis math-round-parenthesis">)</span>'), t + n + '<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + i
        }, t.prototype._toTex = function (e) {
          var t = this.object.toTex(e),
            n = this.index ? this.index.toTex(e) : "",
            i = this.value.toTex(e);
          return r(this, e && e.parenthesis) && (i = "\\left(".concat(i, "\\right)")), t + n + ":=" + i
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      Jo = Object(Dt.a)("BlockNode", ["ResultSet", "Node"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!Array.isArray(e)) throw new Error("Array expected");
          this.blocks = e.map(function (e) {
            var t = e && e.node,
              r = !(e && void 0 !== e.visible) || e.visible;
            if (!Object(qt.w)(t)) throw new TypeError('Property "node" must be a Node');
            if ("boolean" != typeof r) throw new TypeError('Property "visible" must be a boolean');
            return {
              node: t,
              visible: r
            }
          })
        }
        var r = e.ResultSet,
          n = e.Node;
        return t.prototype = new n, t.prototype.type = "BlockNode", t.prototype.isBlockNode = !0, t.prototype._compile = function (e, t) {
          var n = Object(Qt.m)(this.blocks, function (r) {
            return {
              evaluate: r.node._compile(e, t),
              visible: r.visible
            }
          });
          return function (e, t, i) {
            var a = [];
            return Object(Qt.f)(n, function (r) {
              var n = r.evaluate(e, t, i);
              r.visible && a.push(n)
            }), new r(a)
          }
        }, t.prototype.forEach = function (e) {
          for (var t = 0; t < this.blocks.length; t++) e(this.blocks[t].node, "blocks[" + t + "].node", this)
        }, t.prototype.map = function (e) {
          for (var r = [], n = 0; n < this.blocks.length; n++) {
            var i = this.blocks[n],
              a = this._ifNode(e(i.node, "blocks[" + n + "].node", this));
            r[n] = {
              node: a,
              visible: i.visible
            }
          }
          return new t(r)
        }, t.prototype.clone = function () {
          return new t(this.blocks.map(function (e) {
            return {
              node: e.node,
              visible: e.visible
            }
          }))
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
            return t.node.toHTML(e) + (t.visible ? "" : '<span class="math-separator">;</span>')
          }).join('<span class="math-separator"><br /></span>')
        }, t.prototype._toTex = function (e) {
          return this.blocks.map(function (t) {
            return t.node.toTex(e) + (t.visible ? "" : ";")
          }).join("\\;\\;\n")
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      Wo = Object(Dt.a)("ConditionalNode", ["Node"], function (e) {
        function t(e, r, n) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!Object(qt.w)(e)) throw new TypeError("Parameter condition must be a Node");
          if (!Object(qt.w)(r)) throw new TypeError("Parameter trueExpr must be a Node");
          if (!Object(qt.w)(n)) throw new TypeError("Parameter falseExpr must be a Node");
          this.condition = e, this.trueExpr = r, this.falseExpr = n
        }
        var r = e.Node;
        return t.prototype = new r, t.prototype.type = "ConditionalNode", t.prototype.isConditionalNode = !0, t.prototype._compile = function (e, t) {
          var r = this.condition._compile(e, t),
            n = this.trueExpr._compile(e, t),
            i = this.falseExpr._compile(e, t);
          return function (e, t, a) {
            return function (e) {
              if ("number" == typeof e || "boolean" == typeof e || "string" == typeof e) return !!e;
              if (e) {
                if (Object(qt.e)(e)) return !e.isZero();
                if (Object(qt.j)(e)) return !(!e.re && !e.im);
                if (Object(qt.L)(e)) return !!e.value
              }
              if (null == e) return !1;
              throw new TypeError('Unsupported type of condition "' + Object(qt.M)(e) + '"')
            }(r(e, t, a)) ? n(e, t, a) : i(e, t, a)
          }
        }, t.prototype.forEach = function (e) {
          e(this.condition, "condition", this), e(this.trueExpr, "trueExpr", this), e(this.falseExpr, "falseExpr", this)
        }, t.prototype.map = function (e) {
          return new t(this._ifNode(e(this.condition, "condition", this)), this._ifNode(e(this.trueExpr, "trueExpr", this)), this._ifNode(e(this.falseExpr, "falseExpr", this)))
        }, t.prototype.clone = function () {
          return new t(this.condition, this.trueExpr, this.falseExpr)
        }, t.prototype._toString = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            r = tt(this, t),
            n = this.condition.toString(e),
            i = tt(this.condition, t);
          ("all" === t || "OperatorNode" === this.condition.type || null !== i && i <= r) && (n = "(" + n + ")");
          var a = this.trueExpr.toString(e),
            o = tt(this.trueExpr, t);
          ("all" === t || "OperatorNode" === this.trueExpr.type || null !== o && o <= r) && (a = "(" + a + ")");
          var s = this.falseExpr.toString(e),
            u = tt(this.falseExpr, t);
          return ("all" === t || "OperatorNode" === this.falseExpr.type || null !== u && u <= r) && (s = "(" + s + ")"), n + " ? " + a + " : " + s
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
            r = tt(this, t),
            n = this.condition.toHTML(e),
            i = tt(this.condition, t);
          ("all" === t || "OperatorNode" === this.condition.type || null !== i && i <= r) && (n = '<span class="math-parenthesis math-round-parenthesis">(</span>' + n + '<span class="math-parenthesis math-round-parenthesis">)</span>');
          var a = this.trueExpr.toHTML(e),
            o = tt(this.trueExpr, t);
          ("all" === t || "OperatorNode" === this.trueExpr.type || null !== o && o <= r) && (a = '<span class="math-parenthesis math-round-parenthesis">(</span>' + a + '<span class="math-parenthesis math-round-parenthesis">)</span>');
          var s = this.falseExpr.toHTML(e),
            u = tt(this.falseExpr, t);
          return ("all" === t || "OperatorNode" === this.falseExpr.type || null !== u && u <= r) && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), n + '<span class="math-operator math-conditional-operator">?</span>' + a + '<span class="math-operator math-conditional-operator">:</span>' + s
        }, t.prototype._toTex = function (e) {
          return "\\begin{cases} {" + this.trueExpr.toTex(e) + "}, &\\quad{\\text{if }\\;" + this.condition.toTex(e) + "}\\\\{" + this.falseExpr.toTex(e) + "}, &\\quad{\\text{otherwise}}\\end{cases}"
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      Yo = r(17),
      Xo = r.n(Yo),
      Qo = {
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
      Ko = {
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
      es = {
        abs: {
          1: "\\left|${args[0]}\\right|"
        },
        add: {
          2: "\\left(${args[0]}".concat(Ko.add, "${args[1]}\\right)")
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
          2: "\\left(${args[0]}".concat(Ko.dotDivide, "${args[1]}\\right)")
        },
        dotMultiply: {
          2: "\\left(${args[0]}".concat(Ko.dotMultiply, "${args[1]}\\right)")
        },
        dotPow: {
          2: "\\left(${args[0]}".concat(Ko.dotPow, "${args[1]}\\right)")
        },
        exp: {
          1: "\\exp\\left(${args[0]}\\right)"
        },
        expm1: "\\left(e".concat(Ko.pow, "{${args[0]}}-1\\right)"),
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
          2: "\\left(${args[0]}".concat(Ko.mod, "${args[1]}\\right)")
        },
        multiply: {
          2: "\\left(${args[0]}".concat(Ko.multiply, "${args[1]}\\right)")
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
          2: "\\left(${args[0]}\\right)".concat(Ko.pow, "{${args[1]}}")
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
          2: "\\left(${args[0]}".concat(Ko.subtract, "${args[1]}\\right)")
        },
        unaryMinus: {
          1: "".concat(Ko.unaryMinus, "\\left(${args[0]}\\right)")
        },
        unaryPlus: {
          1: "".concat(Ko.unaryPlus, "\\left(${args[0]}\\right)")
        },
        bitAnd: {
          2: "\\left(${args[0]}".concat(Ko.bitAnd, "${args[1]}\\right)")
        },
        bitNot: {
          1: Ko.bitNot + "\\left(${args[0]}\\right)"
        },
        bitOr: {
          2: "\\left(${args[0]}".concat(Ko.bitOr, "${args[1]}\\right)")
        },
        bitXor: {
          2: "\\left(${args[0]}".concat(Ko.bitXor, "${args[1]}\\right)")
        },
        leftShift: {
          2: "\\left(${args[0]}".concat(Ko.leftShift, "${args[1]}\\right)")
        },
        rightArithShift: {
          2: "\\left(${args[0]}".concat(Ko.rightArithShift, "${args[1]}\\right)")
        },
        rightLogShift: {
          2: "\\left(${args[0]}".concat(Ko.rightLogShift, "${args[1]}\\right)")
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
          2: "\\left(${args[0]}".concat(Ko.and, "${args[1]}\\right)")
        },
        not: {
          1: Ko.not + "\\left(${args[0]}\\right)"
        },
        or: {
          2: "\\left(${args[0]}".concat(Ko.or, "${args[1]}\\right)")
        },
        xor: {
          2: "\\left(${args[0]}".concat(Ko.xor, "${args[1]}\\right)")
        },
        cross: {
          2: "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)"
        },
        ctranspose: {
          1: "\\left(${args[0]}\\right)".concat(Ko.ctranspose)
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
          1: "{${args[0]}}".concat(Ko.pow, "{\\frac{1}{2}}")
        },
        trace: {
          1: "\\mathrm{tr}\\left(${args[0]}\\right)"
        },
        transpose: {
          1: "\\left(${args[0]}\\right)".concat(Ko.transpose)
        },
        combinations: {
          2: "\\binom{${args[0]}}{${args[1]}}"
        },
        factorial: {
          1: "\\left(${args[0]}\\right)".concat(Ko.factorial)
        },
        gamma: {
          1: "\\Gamma\\left(${args[0]}\\right)"
        },
        equal: {
          2: "\\left(${args[0]}".concat(Ko.equal, "${args[1]}\\right)")
        },
        larger: {
          2: "\\left(${args[0]}".concat(Ko.larger, "${args[1]}\\right)")
        },
        largerEq: {
          2: "\\left(${args[0]}".concat(Ko.largerEq, "${args[1]}\\right)")
        },
        smaller: {
          2: "\\left(${args[0]}".concat(Ko.smaller, "${args[1]}\\right)")
        },
        smallerEq: {
          2: "\\left(${args[0]}".concat(Ko.smallerEq, "${args[1]}\\right)")
        },
        unequal: {
          2: "\\left(${args[0]}".concat(Ko.unequal, "${args[1]}\\right)")
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
          2: "\\left(${args[0]}".concat(Ko.to, "${args[1]}\\right)")
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
          0: '\\mathtt{""}',
          1: "\\mathrm{string}\\left(${args[0]}\\right)"
        },
        bignumber: {
          0: "0",
          1: "\\left(${args[0]}\\right)"
        },
        complex: {
          0: "0",
          1: "\\left(${args[0]}\\right)",
          2: "\\left(\\left(${args[0]}\\right)+".concat(Qo.i, "\\cdot\\left(${args[1]}\\right)\\right)")
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
      ts = {
        deg: "^\\circ"
      },
      rs = Object(Dt.a)("ConstantNode", ["Node"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (2 === arguments.length) throw new SyntaxError("new ConstantNode(valueStr, valueType) is not supported anymore since math v4.0.0. Use new ConstantNode(value) instead, where value is a non-stringified value.");
          this.value = e
        }
        var r = e.Node;
        return t.prototype = new r, t.prototype.type = "ConstantNode", t.prototype.isConstantNode = !0, t.prototype._compile = function () {
          var e = this.value;
          return function () {
            return e
          }
        }, t.prototype.forEach = function () {}, t.prototype.map = function () {
          return this.clone()
        }, t.prototype.clone = function () {
          return new t(this.value)
        }, t.prototype._toString = function (e) {
          return Object(Kt.d)(this.value, e)
        }, t.prototype.toHTML = function (e) {
          var t = this._toString(e);
          switch (Object(qt.M)(this.value)) {
            case "number":
            case "BigNumber":
            case "Fraction":
              return '<span class="math-number">' + t + "</span>";
            case "string":
              return '<span class="math-string">' + t + "</span>";
            case "boolean":
              return '<span class="math-boolean">' + t + "</span>";
            case "null":
              return '<span class="math-null-symbol">' + t + "</span>";
            case "undefined":
              return '<span class="math-undefined">' + t + "</span>";
            default:
              return '<span class="math-symbol">' + t + "</span>"
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
          switch (Object(qt.M)(this.value)) {
            case "string":
              return "\\mathtt{" + it(t) + "}";
            case "number":
            case "BigNumber":
              var r = t.toLowerCase().indexOf("e");
              return -1 === r ? t : t.substring(0, r) + "\\cdot10^{" + t.substring(r + 1) + "}";
            case "Fraction":
              return this.value.toLatex();
            default:
              return t
          }
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      ns = Object(Dt.a)("FunctionAssignmentNode", ["typed", "Node"], function (e) {
        function t(e, r, n) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if ("string" != typeof e) throw new TypeError('String expected for parameter "name"');
          if (!Array.isArray(r)) throw new TypeError('Array containing strings or objects expected for parameter "params"');
          if (!Object(qt.w)(n)) throw new TypeError('Node expected for parameter "expr"');
          if (e in Lo) throw new Error('Illegal function name, "' + e + '" is a reserved keyword');
          this.name = e, this.params = r.map(function (e) {
            return e && e.name || e
          }), this.types = r.map(function (e) {
            return e && e.type || "any"
          }), this.expr = n
        }

        function r(e, t) {
          var r = tt(e, t),
            n = tt(e.expr, t);
          return "all" === t || null !== n && n <= r
        }
        var n = e.typed,
          i = e.Node;
        return t.prototype = new i, t.prototype.type = "FunctionAssignmentNode", t.prototype.isFunctionAssignmentNode = !0, t.prototype._compile = function (e, t) {
          var r = Object.create(t);
          Object(Qt.f)(this.params, function (e) {
            r[e] = !0
          });
          var i = this.expr._compile(e, r),
            a = this.name,
            o = this.params,
            s = Object(Qt.k)(this.types, ","),
            u = a + "(" + Object(Qt.k)(this.params, ", ") + ")";
          return function (e, t, r) {
            var c = {};
            c[s] = function () {
              for (var n = Object.create(t), a = 0; a < o.length; a++) n[o[a]] = arguments[a];
              return i(e, n, r)
            };
            var f = n(a, c);
            return f.syntax = u, ve(e, a, f), f
          }
        }, t.prototype.forEach = function (e) {
          e(this.expr, "expr", this)
        }, t.prototype.map = function (e) {
          var r = this._ifNode(e(this.expr, "expr", this));
          return new t(this.name, this.params.slice(0), r)
        }, t.prototype.clone = function () {
          return new t(this.name, this.params.slice(0), this.expr)
        }, t.prototype._toString = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            n = this.expr.toString(e);
          return r(this, t) && (n = "(" + n + ")"), this.name + "(" + this.params.join(", ") + ") = " + n
        }, t.prototype.toJSON = function () {
          var e = this.types;
          return {
            mathjs: "FunctionAssignmentNode",
            name: this.name,
            params: this.params.map(function (t, r) {
              return {
                name: t,
                type: e[r]
              }
            }),
            expr: this.expr
          }
        }, t.fromJSON = function (e) {
          return new t(e.name, e.params, e.expr)
        }, t.prototype.toHTML = function (e) {
          for (var t = e && e.parenthesis ? e.parenthesis : "keep", n = [], i = 0; i < this.params.length; i++) n.push('<span class="math-symbol math-parameter">' + Object(Kt.c)(this.params[i]) + "</span>");
          var a = this.expr.toHTML(e);
          return r(this, t) && (a = '<span class="math-parenthesis math-round-parenthesis">(</span>' + a + '<span class="math-parenthesis math-round-parenthesis">)</span>'), '<span class="math-function">' + Object(Kt.c)(this.name) + '</span><span class="math-parenthesis math-round-parenthesis">(</span>' + n.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + a
        }, t.prototype._toTex = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            n = this.expr.toTex(e);
          return r(this, t) && (n = "\\left(".concat(n, "\\right)")), "\\mathrm{" + this.name + "}\\left(" + this.params.map(at).join(",") + "\\right):=" + n
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      is = Object(Dt.a)("index", ["Index"], function (e) {
        var t = e.Index;
        return function () {
          for (var e, r = [], n = 0, i = arguments.length; n < i; n++) {
            if (e = arguments[n], Object(qt.D)(e)) e.start--, e.end -= 0 < e.step ? 0 : 2;
            else if (e && !0 === e.isSet) e = e.map(function (e) {
              return e - 1
            });
            else if (Object(qt.b)(e) || Object(qt.v)(e)) e = e.map(function (e) {
              return e - 1
            });
            else if (Object(qt.y)(e)) e--;
            else if (Object(qt.e)(e)) e = e.toNumber() - 1;
            else if ("string" != typeof e) throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
            r[n] = e
          }
          var a = new t;
          return t.apply(a, r), a
        }
      }, {
        isTransformFunction: !0
      }),
      as = Object(Dt.a)("IndexNode", ["Range", "Node", "Index", "size"], function (e) {
        function t(e, r) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (this.dimensions = e, this.dotNotation = r || !1, !Array.isArray(e) || !e.every(qt.w)) throw new TypeError('Array containing Nodes expected for parameter "dimensions"');
          if (this.dotNotation && !this.isObjectProperty()) throw new Error("dotNotation only applicable for object properties");
          var n = function () {
            throw new Error("Property `IndexNode.object` is deprecated, use `IndexNode.fn` instead")
          };
          Object.defineProperty(this, "object", {
            get: n,
            set: n
          })
        }

        function r(e, t, r) {
          return new n(Object(qt.e)(e) ? e.toNumber() : e, Object(qt.e)(t) ? t.toNumber() : t, Object(qt.e)(r) ? r.toNumber() : r)
        }
        var n = e.Range,
          i = e.Node,
          a = e.Index,
          o = e.size,
          s = is({
            Index: a
          });
        return t.prototype = new i, t.prototype.type = "IndexNode", t.prototype.isIndexNode = !0, t.prototype._compile = function (e, t) {
          var n = Object(Qt.m)(this.dimensions, function (n, i) {
            if (Object(qt.E)(n)) {
              if (n.needsEnd()) {
                var a = Object.create(t);
                a.end = !0;
                var s = n.start._compile(e, a),
                  u = n.end._compile(e, a),
                  c = n.step ? n.step._compile(e, a) : function () {
                    return 1
                  };
                return function (e, t, n) {
                  var a = o(n).valueOf(),
                    f = Object.create(t);
                  return f.end = a[i], r(s(e, f, n), u(e, f, n), c(e, f, n))
                }
              }
              var f = n.start._compile(e, t),
                l = n.end._compile(e, t),
                p = n.step ? n.step._compile(e, t) : function () {
                  return 1
                };
              return function (e, t, n) {
                return r(f(e, t, n), l(e, t, n), p(e, t, n))
              }
            }
            if (Object(qt.J)(n) && "end" === n.name) {
              var m = Object.create(t);
              m.end = !0;
              var h = n._compile(e, m);
              return function (e, t, r) {
                var n = o(r).valueOf(),
                  a = Object.create(t);
                return a.end = n[i], h(e, a, r)
              }
            }
            var d = n._compile(e, t);
            return function (e, t, r) {
              return d(e, t, r)
            }
          });
          return function (e, t, r) {
            var i = Object(Qt.m)(n, function (n) {
              return n(e, t, r)
            });
            return s.apply(void 0, ot(i))
          }
        }, t.prototype.forEach = function (e) {
          for (var t = 0; t < this.dimensions.length; t++) e(this.dimensions[t], "dimensions[" + t + "]", this)
        }, t.prototype.map = function (e) {
          for (var r = [], n = 0; n < this.dimensions.length; n++) r[n] = this._ifNode(e(this.dimensions[n], "dimensions[" + n + "]", this));
          return new t(r)
        }, t.prototype.clone = function () {
          return new t(this.dimensions.slice(0))
        }, t.prototype.isObjectProperty = function () {
          return 1 === this.dimensions.length && Object(qt.l)(this.dimensions[0]) && "string" == typeof this.dimensions[0].value
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
          return this.dotNotation ? '<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">' + Object(Kt.c)(this.getObjectProperty()) + "</span>" : '<span class="math-parenthesis math-square-parenthesis">[</span>' + e.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>'
        }, t.prototype._toTex = function (e) {
          var t = this.dimensions.map(function (t) {
            return t.toTex(e)
          });
          return this.dotNotation ? "." + this.getObjectProperty() : "_{" + t.join(",") + "}"
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      os = Object(Dt.a)("ObjectNode", ["Node"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (this.properties = e || {}, e && ("object" !== st(e) || !Object.keys(e).every(function (t) {
              return Object(qt.w)(e[t])
            }))) throw new TypeError("Object containing Nodes expected")
        }
        var r = e.Node;
        return t.prototype = new r, t.prototype.type = "ObjectNode", t.prototype.isObjectNode = !0, t.prototype._compile = function (e, t) {
          var r = {};
          for (var n in this.properties)
            if (Object(er.f)(this.properties, n)) {
              var i = Object(Kt.e)(n),
                a = JSON.parse(i);
              if (!xe(this.properties, a)) throw new Error('No access to property "' + a + '"');
              r[a] = this.properties[n]._compile(e, t)
            } return function (e, t, n) {
            var i = {};
            for (var a in r) Object(er.f)(r, a) && (i[a] = r[a](e, t, n));
            return i
          }
        }, t.prototype.forEach = function (e) {
          for (var t in this.properties) this.properties.hasOwnProperty(t) && e(this.properties[t], "properties[" + Object(Kt.e)(t) + "]", this)
        }, t.prototype.map = function (e) {
          var r = {};
          for (var n in this.properties) this.properties.hasOwnProperty(n) && (r[n] = this._ifNode(e(this.properties[n], "properties[" + Object(Kt.e)(n) + "]", this)));
          return new t(r)
        }, t.prototype.clone = function () {
          var e = {};
          for (var r in this.properties) this.properties.hasOwnProperty(r) && (e[r] = this.properties[r]);
          return new t(e)
        }, t.prototype._toString = function (e) {
          var t = [];
          for (var r in this.properties) this.properties.hasOwnProperty(r) && t.push(Object(Kt.e)(r) + ": " + this.properties[r].toString(e));
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
          for (var r in this.properties) this.properties.hasOwnProperty(r) && t.push('<span class="math-symbol math-property">' + Object(Kt.c)(r) + '</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' + this.properties[r].toHTML(e));
          return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + t.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>'
        }, t.prototype._toTex = function (e) {
          var t = [];
          for (var r in this.properties) this.properties.hasOwnProperty(r) && t.push("\\mathbf{" + r + ":} & " + this.properties[r].toTex(e) + "\\\\");
          return "\\left\\{\\begin{array}{ll}".concat(t.join("\n"), "\\end{array}\\right\\}")
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      ss = Object(Dt.a)("OperatorNode", ["Node"], function (e) {
        function t(e, r, n, i) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if ("string" != typeof e) throw new TypeError('string expected for parameter "op"');
          if ("string" != typeof r) throw new TypeError('string expected for parameter "fn"');
          if (!Array.isArray(n) || !n.every(qt.w)) throw new TypeError('Array containing Nodes expected for parameter "args"');
          this.implicit = !0 === i, this.op = e, this.fn = r, this.args = n || []
        }

        function r(e, t, r, n, i) {
          var a, o = tt(e, t),
            s = rt(e, t);
          if ("all" === t || 2 < n.length && "OperatorNode:add" !== e.getIdentifier() && "OperatorNode:multiply" !== e.getIdentifier()) return n.map(function (e) {
            switch (e.getContent().type) {
              case "ArrayNode":
              case "ConstantNode":
              case "SymbolNode":
              case "ParenthesisNode":
                return !1;
              default:
                return !0
            }
          });
          switch (n.length) {
            case 0:
              a = [];
              break;
            case 1:
              var u = tt(n[0], t);
              if (i && null !== u) {
                var c, f;
                if ("keep" === t ? (c = n[0].getIdentifier(), f = e.getIdentifier()) : (c = n[0].getContent().getIdentifier(), f = e.getContent().getIdentifier()), !1 === Zo[o][f].latexLeftParens) {
                  a = [!1];
                  break
                }
                if (!1 === Zo[u][c].latexParens) {
                  a = [!1];
                  break
                }
              }
              if (null === u) {
                a = [!1];
                break
              }
              if (u <= o) {
                a = [!0];
                break
              }
              a = [!1];
              break;
            case 2:
              var l, p = tt(n[0], t),
                m = nt(e, n[0], t);
              l = !(null === p || (p !== o || "right" !== s || m) && !(p < o));
              var h, d, y, g, b = tt(n[1], t),
                v = nt(e, n[1], t);
              if (h = !(null === b || (b !== o || "left" !== s || v) && !(b < o)), i) "keep" === t ? (d = e.getIdentifier(), y = e.args[0].getIdentifier(), g = e.args[1].getIdentifier()) : (d = e.getContent().getIdentifier(), y = e.args[0].getContent().getIdentifier(), g = e.args[1].getContent().getIdentifier()), null !== p && (!1 === Zo[o][d].latexLeftParens && (l = !1), !1 === Zo[p][y].latexParens && (l = !1)), null !== b && (!1 === Zo[o][d].latexRightParens && (h = !1), !1 === Zo[b][g].latexParens && (h = !1));
              a = [l, h];
              break;
            default:
              ("OperatorNode:add" === e.getIdentifier() || "OperatorNode:multiply" === e.getIdentifier()) && (a = n.map(function (r) {
                var n = tt(r, t),
                  i = nt(e, r, t),
                  a = rt(r, t);
                return !(null === n || (o !== n || s !== a || i) && !(n < o))
              }))
          }
          return 2 <= n.length && "OperatorNode:multiply" === e.getIdentifier() && e.implicit && "auto" === t && "hide" === r && (a = n.map(function (e, t) {
            var r = "ParenthesisNode" === e.getIdentifier();
            return !(!a[t] && !r)
          })), a
        }
        var n = e.Node;
        return t.prototype = new n, t.prototype.type = "OperatorNode", t.prototype.isOperatorNode = !0, t.prototype._compile = function (e, t) {
          if ("string" != typeof this.fn || !we(e, this.fn)) throw e[this.fn] ? new Error('No access to function "' + this.fn + '"') : new Error("Function " + this.fn + ' missing in provided namespace "math"');
          var r = be(e, this.fn),
            n = Object(Qt.m)(this.args, function (r) {
              return r._compile(e, t)
            });
          if (1 === n.length) {
            var i = n[0];
            return function (e, t, n) {
              return r(i(e, t, n))
            }
          }
          if (2 === n.length) {
            var a = n[0],
              o = n[1];
            return function (e, t, n) {
              return r(a(e, t, n), o(e, t, n))
            }
          }
          return function (e, t, i) {
            return r.apply(null, Object(Qt.m)(n, function (r) {
              return r(e, t, i)
            }))
          }
        }, t.prototype.forEach = function (e) {
          for (var t = 0; t < this.args.length; t++) e(this.args[t], "args[" + t + "]", this)
        }, t.prototype.map = function (e) {
          for (var r = [], n = 0; n < this.args.length; n++) r[n] = this._ifNode(e(this.args[n], "args[" + n + "]", this));
          return new t(this.op, this.fn, r, this.implicit)
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
            a = r(this, t, n, i, !1);
          if (1 === i.length) {
            var o = rt(this, t),
              s = i[0].toString(e);
            a[0] && (s = "(" + s + ")");
            var u = /[a-zA-Z]+/.test(this.op);
            return "right" === o ? this.op + (u ? " " : "") + s : "left" === o ? s + (u ? " " : "") + this.op : s + this.op
          }
          if (2 === i.length) {
            var c = i[0].toString(e),
              f = i[1].toString(e);
            return a[0] && (c = "(" + c + ")"), a[1] && (f = "(" + f + ")"), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === n ? c + " " + f : c + " " + this.op + " " + f
          }
          if (2 < i.length && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) {
            var l = i.map(function (t, r) {
              return t = t.toString(e), a[r] && (t = "(" + t + ")"), t
            });
            return this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === n ? l.join(" ") : l.join(" " + this.op + " ")
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
            a = r(this, t, n, i, !1);
          if (1 === i.length) {
            var o = rt(this, t),
              s = i[0].toHTML(e);
            return a[0] && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), "right" === o ? '<span class="math-operator math-unary-operator math-lefthand-unary-operator">' + Object(Kt.c)(this.op) + "</span>" + s : s + '<span class="math-operator math-unary-operator math-righthand-unary-operator">' + Object(Kt.c)(this.op) + "</span>"
          }
          if (2 === i.length) {
            var u = i[0].toHTML(e),
              c = i[1].toHTML(e);
            return a[0] && (u = '<span class="math-parenthesis math-round-parenthesis">(</span>' + u + '<span class="math-parenthesis math-round-parenthesis">)</span>'), a[1] && (c = '<span class="math-parenthesis math-round-parenthesis">(</span>' + c + '<span class="math-parenthesis math-round-parenthesis">)</span>'), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === n ? u + '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' + c : u + '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Object(Kt.c)(this.op) + "</span>" + c
          }
          var f = i.map(function (t, r) {
            return t = t.toHTML(e), a[r] && (t = '<span class="math-parenthesis math-round-parenthesis">(</span>' + t + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t
          });
          return 2 < i.length && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier()) ? this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === n ? f.join('<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>') : f.join('<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Object(Kt.c)(this.op) + "</span>") : '<span class="math-function">' + Object(Kt.c)(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + f.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>'
        }, t.prototype._toTex = function (e) {
          var t = e && e.parenthesis ? e.parenthesis : "keep",
            n = e && e.implicit ? e.implicit : "hide",
            i = this.args,
            a = r(this, t, n, i, !0),
            o = Ko[this.fn];
          if (o = void 0 === o ? this.op : o, 1 === i.length) {
            var s = rt(this, t),
              u = i[0].toTex(e);
            return a[0] && (u = "\\left(".concat(u, "\\right)")), "right" === s ? o + u : u + o
          }
          if (2 === i.length) {
            var c = i[0],
              f = c.toTex(e);
            a[0] && (f = "\\left(".concat(f, "\\right)"));
            var l, p = i[1].toTex(e);
            switch (a[1] && (p = "\\left(".concat(p, "\\right)")), l = "keep" === t ? c.getIdentifier() : c.getContent().getIdentifier(), this.getIdentifier()) {
              case "OperatorNode:divide":
                return o + "{" + f + "}{" + p + "}";
              case "OperatorNode:pow":
                f = "{" + f + "}", p = "{" + p + "}", ("ConditionalNode" === l || "OperatorNode:divide" === l) && (f = "\\left(".concat(f, "\\right)"));
                break;
              case "OperatorNode:multiply":
                if (this.implicit && "hide" === n) return f + "~" + p
            }
            return f + o + p
          }
          if (2 < i.length && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) {
            var m = i.map(function (t, r) {
              return t = t.toTex(e), a[r] && (t = "\\left(".concat(t, "\\right)")), t
            });
            return "OperatorNode:multiply" === this.getIdentifier() && this.implicit ? m.join("~") : m.join(o)
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
      us = Object(Dt.a)("ParenthesisNode", ["Node"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!Object(qt.w)(e)) throw new TypeError('Node expected for parameter "content"');
          this.content = e
        }
        var r = e.Node;
        return t.prototype = new r, t.prototype.type = "ParenthesisNode", t.prototype.isParenthesisNode = !0, t.prototype._compile = function (e, t) {
          return this.content._compile(e, t)
        }, t.prototype.getContent = function () {
          return this.content.getContent()
        }, t.prototype.forEach = function (e) {
          e(this.content, "content", this)
        }, t.prototype.map = function (e) {
          return new t(e(this.content, "content", this))
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
          return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(e) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : this.content.toHTML(e)
        }, t.prototype._toTex = function (e) {
          return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? "\\left(".concat(this.content.toTex(e), "\\right)") : this.content.toTex(e)
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      cs = Object(Dt.a)("RangeNode", ["Node"], function (e) {
        function t(e, r, n) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!Object(qt.w)(e)) throw new TypeError("Node expected");
          if (!Object(qt.w)(r)) throw new TypeError("Node expected");
          if (n && !Object(qt.w)(n)) throw new TypeError("Node expected");
          if (3 < arguments.length) throw new Error("Too many arguments");
          this.start = e, this.end = r, this.step = n || null
        }

        function r(e, t) {
          var r = tt(e, t),
            n = {},
            i = tt(e.start, t);
          if (n.start = null !== i && i <= r || "all" === t, e.step) {
            var a = tt(e.step, t);
            n.step = null !== a && a <= r || "all" === t
          }
          var o = tt(e.end, t);
          return n.end = null !== o && o <= r || "all" === t, n
        }
        var n = e.Node;
        return t.prototype = new n, t.prototype.type = "RangeNode", t.prototype.isRangeNode = !0, t.prototype.needsEnd = function () {
          return 0 < this.filter(function (e) {
            return Object(qt.J)(e) && "end" === e.name
          }).length
        }, t.prototype._compile = function (e, t) {
          var r = e.range,
            n = this.start._compile(e, t),
            i = this.end._compile(e, t);
          if (this.step) {
            var a = this.step._compile(e, t);
            return function (e, t, o) {
              return r(n(e, t, o), i(e, t, o), a(e, t, o))
            }
          }
          return function (e, t, a) {
            return r(n(e, t, a), i(e, t, a))
          }
        }, t.prototype.forEach = function (e) {
          e(this.start, "start", this), e(this.end, "end", this), this.step && e(this.step, "step", this)
        }, t.prototype.map = function (e) {
          return new t(this._ifNode(e(this.start, "start", this)), this._ifNode(e(this.end, "end", this)), this.step && this._ifNode(e(this.step, "step", this)))
        }, t.prototype.clone = function () {
          return new t(this.start, this.end, this.step && this.step)
        }, t.prototype._toString = function (e) {
          var t, n = r(this, e && e.parenthesis ? e.parenthesis : "keep"),
            i = this.start.toString(e);
          if (n.start && (i = "(" + i + ")"), t = i, this.step) {
            var a = this.step.toString(e);
            n.step && (a = "(" + a + ")"), t += ":" + a
          }
          var o = this.end.toString(e);
          return n.end && (o = "(" + o + ")"), t += ":" + o
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
          var t, n = r(this, e && e.parenthesis ? e.parenthesis : "keep"),
            i = this.start.toHTML(e);
          if (n.start && (i = '<span class="math-parenthesis math-round-parenthesis">(</span>' + i + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t = i, this.step) {
            var a = this.step.toHTML(e);
            n.step && (a = '<span class="math-parenthesis math-round-parenthesis">(</span>' + a + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t += '<span class="math-operator math-range-operator">:</span>' + a
          }
          var o = this.end.toHTML(e);
          return n.end && (o = '<span class="math-parenthesis math-round-parenthesis">(</span>' + o + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t += '<span class="math-operator math-range-operator">:</span>' + o
        }, t.prototype._toTex = function (e) {
          var t = r(this, e && e.parenthesis ? e.parenthesis : "keep"),
            n = this.start.toTex(e);
          if (t.start && (n = "\\left(".concat(n, "\\right)")), this.step) {
            var i = this.step.toTex(e);
            t.step && (i = "\\left(".concat(i, "\\right)")), n += ":" + i
          }
          var a = this.end.toTex(e);
          return t.end && (a = "\\left(".concat(a, "\\right)")), n += ":" + a
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      fs = Object(Dt.a)("RelationalNode", ["Node"], function (e) {
        function t(e, r) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!Array.isArray(e)) throw new TypeError("Parameter conditionals must be an array");
          if (!Array.isArray(r)) throw new TypeError("Parameter params must be an array");
          if (e.length !== r.length - 1) throw new TypeError("Parameter params must contain exactly one more element than parameter conditionals");
          this.conditionals = e, this.params = r
        }
        var r = e.Node;
        return t.prototype = new r, t.prototype.type = "RelationalNode", t.prototype.isRelationalNode = !0, t.prototype._compile = function (e, t) {
          var r = this,
            n = this.params.map(function (r) {
              return r._compile(e, t)
            });
          return function (t, i, a) {
            for (var o, s = n[0](t, i, a), u = 0; u < r.conditionals.length; u++) {
              if (o = s, s = n[u + 1](t, i, a), !be(e, r.conditionals[u])(o, s)) return !1
            }
            return !0
          }
        }, t.prototype.forEach = function (e) {
          var t = this;
          this.params.forEach(function (r, n) {
            return e(r, "params[" + n + "]", t)
          }, this)
        }, t.prototype.map = function (e) {
          var r = this;
          return new t(this.conditionals.slice(), this.params.map(function (t, n) {
            return r._ifNode(e(t, "params[" + n + "]", r))
          }, this))
        }, t.prototype.clone = function () {
          return new t(this.conditionals, this.params)
        }, t.prototype._toString = function (e) {
          for (var t = e && e.parenthesis ? e.parenthesis : "keep", r = tt(this, t), n = this.params.map(function (n) {
              var i = tt(n, t);
              return "all" === t || null !== i && i <= r ? "(" + n.toString(e) + ")" : n.toString(e)
            }), i = {
              equal: "==",
              unequal: "!=",
              smaller: "<",
              larger: ">",
              smallerEq: "<=",
              largerEq: ">="
            }, a = n[0], o = 0; o < this.conditionals.length; o++) a += " " + i[this.conditionals[o]] + " " + n[o + 1];
          return a
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "RelationalNode",
            conditionals: this.conditionals,
            params: this.params
          }
        }, t.fromJSON = function (e) {
          return new t(e.conditionals, e.params)
        }, t.prototype.toHTML = function (e) {
          for (var t = e && e.parenthesis ? e.parenthesis : "keep", r = tt(this, t), n = this.params.map(function (n) {
              var i = tt(n, t);
              return "all" === t || null !== i && i <= r ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + n.toHTML(e) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : n.toHTML(e)
            }), i = {
              equal: "==",
              unequal: "!=",
              smaller: "<",
              larger: ">",
              smallerEq: "<=",
              largerEq: ">="
            }, a = n[0], o = 0; o < this.conditionals.length; o++) a += '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Object(Kt.c)(i[this.conditionals[o]]) + "</span>" + n[o + 1];
          return a
        }, t.prototype._toTex = function (e) {
          for (var t = e && e.parenthesis ? e.parenthesis : "keep", r = tt(this, t), n = this.params.map(function (n) {
              var i = tt(n, t);
              return "all" === t || null !== i && i <= r ? "\\left(" + n.toTex(e) + "\right)" : n.toTex(e)
            }), i = n[0], a = 0; a < this.conditionals.length; a++) i += Ko[this.conditionals[a]] + n[a + 1];
          return i
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      ls = Object(Dt.a)("SymbolNode", ["math", "?Unit", "Node"], function (e) {
        function t(e) {
          return !!i && i.isValuelessUnit(e)
        }

        function r(e) {
          if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
          if ("string" != typeof e) throw new TypeError('String expected for parameter "name"');
          this.name = e
        }
        var n = e.math,
          i = e.Unit,
          a = e.Node;
        return r.prototype = new a, r.prototype.type = "SymbolNode", r.prototype.isSymbolNode = !0, r.prototype._compile = function (e, r) {
          var n = this.name;
          if (Object(er.f)(r, n)) return function (e, t) {
            return t[n]
          };
          if (n in e) return function (t) {
            return be(n in t ? t : e, n)
          };
          var a = t(n);
          return function (e) {
            return n in e ? be(e, n) : a ? new i(null, n) : function (e) {
              throw new Error("Undefined symbol " + e)
            }(n)
          }
        }, r.prototype.forEach = function () {}, r.prototype.map = function () {
          return this.clone()
        }, r.prototype.clone = function () {
          return new r(this.name)
        }, r.prototype._toString = function () {
          return this.name
        }, r.prototype.toHTML = function () {
          var e = Object(Kt.c)(this.name);
          return "true" === e || "false" === e ? '<span class="math-symbol math-boolean">' + e + "</span>" : "i" === e ? '<span class="math-symbol math-imaginary-symbol">' + e + "</span>" : "Infinity" === e ? '<span class="math-symbol math-infinity-symbol">' + e + "</span>" : "NaN" === e ? '<span class="math-symbol math-nan-symbol">' + e + "</span>" : "null" === e ? '<span class="math-symbol math-null-symbol">' + e + "</span>" : "undefined" === e ? '<span class="math-symbol math-undefined-symbol">' + e + "</span>" : '<span class="math-symbol">' + e + "</span>"
        }, r.prototype.toJSON = function () {
          return {
            mathjs: "SymbolNode",
            name: this.name
          }
        }, r.fromJSON = function (e) {
          return new r(e.name)
        }, r.prototype._toTex = function () {
          var e = !1;
          void 0 === n[this.name] && t(this.name) && (e = !0);
          var r = at(this.name, e);
          return "\\" === r[0] ? r : " " + r
        }, r
      }, {
        isClass: !0,
        isNode: !0
      }),
      ps = Object(Dt.a)("FunctionNode", ["math", "Node", "SymbolNode"], function (e) {
        function t(e, r) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if ("string" == typeof e && (e = new a(e)), !Object(qt.w)(e)) throw new TypeError('Node expected as parameter "fn"');
          if (!Array.isArray(r) || !r.every(qt.w)) throw new TypeError('Array containing Nodes expected for parameter "args"');
          this.fn = e, this.args = r || [], Object.defineProperty(this, "name", {
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

        function r(e, t, r) {
          for (var n, i = "", a = /\$(?:\{([a-z_][a-z_0-9]*)(?:\[([0-9]+)\])?\}|\$)/gi, o = 0; null !== (n = a.exec(e));)
            if (i += e.substring(o, n.index), o = n.index, "$$" === n[0]) i += "$", o++;
            else {
              o += n[0].length;
              var s = t[n[1]];
              if (!s) throw new ReferenceError("Template: Property " + n[1] + " does not exist.");
              if (void 0 === n[2]) switch (ut(s)) {
                case "string":
                  i += s;
                  break;
                case "object":
                  if (Object(qt.w)(s)) i += s.toTex(r);
                  else {
                    if (!Array.isArray(s)) throw new TypeError("Template: " + n[1] + " has to be a Node, String or array of Nodes");
                    i += s.map(function (e, t) {
                      if (Object(qt.w)(e)) return e.toTex(r);
                      throw new TypeError("Template: " + n[1] + "[" + t + "] is not a Node.")
                    }).join(",")
                  }
                  break;
                default:
                  throw new TypeError("Template: " + n[1] + " has to be a Node, String or array of Nodes")
              } else {
                if (!Object(qt.w)(s[n[2]] && s[n[2]])) throw new TypeError("Template: " + n[1] + "[" + n[2] + "] is not a Node.");
                i += s[n[2]].toTex(r)
              }
            } return i += e.slice(o)
        }
        var n = e.math,
          i = e.Node,
          a = e.SymbolNode;
        t.prototype = new i, t.prototype.type = "FunctionNode", t.prototype.isFunctionNode = !0, t.prototype._compile = function (e, r) {
          if (!(this instanceof t)) throw new TypeError("No valid FunctionNode");
          var n = Object(Qt.m)(this.args, function (t) {
            return t._compile(e, r)
          });
          if (Object(qt.J)(this.fn)) {
            var i = this.fn.name,
              a = i in e ? be(e, i) : void 0;
            if ("function" == typeof a && !0 === a.rawArgs) {
              var o = this.args;
              return function (t, r) {
                return (i in t ? be(t, i) : a)(o, e, ct({}, t, r))
              }
            }
            if (1 === n.length) {
              var s = n[0];
              return function (e, t, r) {
                return (i in e ? be(e, i) : a)(s(e, t, r))
              }
            }
            if (2 === n.length) {
              var u = n[0],
                c = n[1];
              return function (e, t, r) {
                return (i in e ? be(e, i) : a)(u(e, t, r), c(e, t, r))
              }
            }
            return function (e, t, r) {
              return (i in e ? be(e, i) : a).apply(null, Object(Qt.m)(n, function (n) {
                return n(e, t, r)
              }))
            }
          }
          if (Object(qt.a)(this.fn) && Object(qt.u)(this.fn.index) && this.fn.index.isObjectProperty()) {
            var f = this.fn.object._compile(e, r),
              l = this.fn.index.getObjectProperty(),
              p = this.args;
            return function (t, r, i) {
              var a = f(t, r, i);
              return function (e, t) {
                if (!we(e, t)) throw new Error('No access to method "' + t + '"')
              }(a, l), a[l] && a[l].rawArgs ? a[l](p, e, ct({}, t, r)) : a[l].apply(a, Object(Qt.m)(n, function (e) {
                return e(t, r, i)
              }))
            }
          }
          var m = this.fn._compile(e, r),
            h = this.args;
          return function (t, r, i) {
            var a = m(t, r, i);
            return a && a.rawArgs ? a(h, e, ct({}, t, r)) : a.apply(a, Object(Qt.m)(n, function (e) {
              return e(t, r, i)
            }))
          }
        }, t.prototype.forEach = function (e) {
          e(this.fn, "fn", this);
          for (var t = 0; t < this.args.length; t++) e(this.args[t], "args[" + t + "]", this)
        }, t.prototype.map = function (e) {
          for (var r = this._ifNode(e(this.fn, "fn", this)), n = [], i = 0; i < this.args.length; i++) n[i] = this._ifNode(e(this.args[i], "args[" + i + "]", this));
          return new t(r, n)
        }, t.prototype.clone = function () {
          return new t(this.fn, this.args.slice(0))
        };
        var o = t.prototype.toString;
        t.prototype.toString = function (e) {
          var t, r = this.fn.toString(e);
          return e && "object" === ut(e.handler) && Object(er.f)(e.handler, r) && (t = e.handler[r](this, e)), void 0 === t ? o.call(this, e) : t
        }, t.prototype._toString = function (e) {
          var t = this.args.map(function (t) {
            return t.toString(e)
          });
          return (Object(qt.q)(this.fn) ? "(" + this.fn.toString(e) + ")" : this.fn.toString(e)) + "(" + t.join(", ") + ")"
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
          return '<span class="math-function">' + Object(Kt.c)(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + t.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>'
        };
        var s = t.prototype.toTex;
        return t.prototype.toTex = function (e) {
          var t;
          return e && "object" === ut(e.handler) && Object(er.f)(e.handler, this.name) && (t = e.handler[this.name](this, e)), void 0 === t ? s.call(this, e) : t
        }, t.prototype._toTex = function (e) {
          var t, i, a = this.args.map(function (t) {
            return t.toTex(e)
          });
          switch (es[this.name] && (t = es[this.name]), n[this.name] && ("function" == typeof n[this.name].toTex || "object" === ut(n[this.name].toTex) || "string" == typeof n[this.name].toTex) && (t = n[this.name].toTex), ut(t)) {
            case "function":
              i = t(this, e);
              break;
            case "string":
              i = r(t, this, e);
              break;
            case "object":
              switch (ut(t[a.length])) {
                case "function":
                  i = t[a.length](this, e);
                  break;
                case "string":
                  i = r(t[a.length], this, e)
              }
          }
          return void 0 === i ? r("\\mathrm{${name}}\\left(${args}\\right)", this, e) : i
        }, t.prototype.getIdentifier = function () {
          return this.type + ":" + this.name
        }, t
      }, {
        isClass: !0,
        isNode: !0
      }),
      ms = Object(Dt.a)("parse", ["typed", "numeric", "config", "AccessorNode", "ArrayNode", "AssignmentNode", "BlockNode", "ConditionalNode", "ConstantNode", "FunctionAssignmentNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "RangeNode", "RelationalNode", "SymbolNode"], function (e) {
        function t(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            r = void 0 === t.nodes ? {} : t.nodes;
          return c(e, function (e) {
            if ("string" != typeof e) throw new TypeError("String expected");
            return p(e, r)
          })
        }

        function r(e, t) {
          return e.expression.substr(e.index, t)
        }

        function n(e) {
          return r(e, 1)
        }

        function i(e) {
          e.index++
        }

        function a(e) {
          return e.expression.charAt(e.index - 1)
        }

        function o(e) {
          return e.expression.charAt(e.index + 1)
        }

        function s(e) {
          for (e.tokenType = ee.NULL, e.token = "", e.comment = ""; K.isWhitespace(n(e), e.nestingLevel);) i(e);
          if ("#" === n(e))
            for (;
              "\n" !== n(e) && "" !== n(e);) e.comment += n(e), i(e);
          if ("" !== n(e)) {
            if ("\n" === n(e) && !e.nestingLevel) return e.tokenType = ee.DELIMITER, e.token = n(e), void i(e);
            var t = n(e),
              s = r(e, 2),
              u = r(e, 3);
            if (3 === u.length && te[u]) return e.tokenType = ee.DELIMITER, e.token = u, i(e), i(e), void i(e);
            if (2 === s.length && te[s]) return e.tokenType = ee.DELIMITER, e.token = s, i(e), void i(e);
            if (te[t]) return e.tokenType = ee.DELIMITER, e.token = t, void i(e);
            if (K.isDigitDot(t)) {
              if (e.tokenType = ee.NUMBER, "." === n(e)) e.token += n(e), i(e), K.isDigit(n(e)) || (e.tokenType = ee.DELIMITER);
              else {
                for (; K.isDigit(n(e));) e.token += n(e), i(e);
                K.isDecimalMark(n(e), o(e)) && (e.token += n(e), i(e))
              }
              for (; K.isDigit(n(e));) e.token += n(e), i(e);
              if ("E" === n(e) || "e" === n(e))
                if (K.isDigit(o(e)) || "-" === o(e) || "+" === o(e)) {
                  if (e.token += n(e), i(e), ("+" === n(e) || "-" === n(e)) && (e.token += n(e), i(e)), !K.isDigit(n(e))) throw q(e, 'Digit expected, got "' + n(e) + '"');
                  for (; K.isDigit(n(e));) e.token += n(e), i(e);
                  if (K.isDecimalMark(n(e), o(e))) throw q(e, 'Digit expected, got "' + n(e) + '"')
                } else if ("." === o(e)) throw i(e), q(e, 'Digit expected, got "' + n(e) + '"')
            } else {
              if (!K.isAlpha(n(e), a(e), o(e))) {
                for (e.tokenType = ee.UNKNOWN;
                  "" !== n(e);) e.token += n(e), i(e);
                throw q(e, 'Syntax error in part "' + e.token + '"')
              }
              for (; K.isAlpha(n(e), a(e), o(e)) || K.isDigit(n(e));) e.token += n(e), i(e);
              e.tokenType = re.hasOwnProperty(e.token) ? ee.DELIMITER : ee.SYMBOL
            }
          } else e.tokenType = ee.DELIMITER
        }

        function u(e) {
          do {
            s(e)
          } while ("\n" === e.token)
        }

        function f(e) {
          e.nestingLevel++
        }

        function l(e) {
          e.nestingLevel--
        }

        function p(e, t) {
          var r = {
            extraNodes: {},
            expression: "",
            comment: "",
            index: 0,
            token: "",
            tokenType: ee.NULL,
            nestingLevel: 0,
            conditionalLevel: null
          };
          ft(r, {
            expression: e,
            extraNodes: t
          }), s(r);
          var n = function (e) {
            var t, r, n = [];
            for ("" !== e.token && "\n" !== e.token && ";" !== e.token && ((t = m(e)).comment = e.comment);
              "\n" === e.token || ";" === e.token;) 0 === n.length && t && (r = ";" !== e.token, n.push({
              node: t,
              visible: r
            })), s(e), "\n" !== e.token && ";" !== e.token && "" !== e.token && ((t = m(e)).comment = e.comment, r = ";" !== e.token, n.push({
              node: t,
              visible: r
            }));
            return 0 < n.length ? new U(n) : (t || ((t = new H(void 0)).comment = e.comment), t)
          }(r);
          if ("" !== r.token) throw r.tokenType === ee.DELIMITER ? B(r, "Unexpected operator " + r.token) : q(r, 'Unexpected part "' + r.token + '"');
          return n
        }

        function m(e) {
          var t, r, n, i, a = function (e) {
            for (var t, r = function (e) {
                for (var t = h(e);
                  "or" === e.token;) u(e), t = new J("or", "or", [t, h(e)]);
                return t
              }(e);
              "?" === e.token;) {
              t = e.conditionalLevel, e.conditionalLevel = e.nestingLevel, u(e);
              var n = r,
                i = m(e);
              if (":" !== e.token) throw q(e, "False part of conditional expression expected");
              e.conditionalLevel = null, u(e);
              var a = m(e);
              r = new L(n, i, a), e.conditionalLevel = t
            }
            return r
          }(e);
          if ("=" === e.token) {
            if (Object(qt.J)(a)) return t = a.name, u(e), n = m(e), new F(new Q(t), n);
            if (Object(qt.a)(a)) return u(e), n = m(e), new F(a.object, a.index, n);
            if (Object(qt.r)(a) && Object(qt.J)(a.fn) && (i = !0, r = [], t = a.name, a.args.forEach(function (e, t) {
                Object(qt.J)(e) ? r[t] = e.name : i = !1
              }), i)) return u(e), n = m(e), new $(t, r, n);
            throw q(e, "Invalid left hand side of assignment operator =")
          }
          return a
        }

        function h(e) {
          for (var t = d(e);
            "xor" === e.token;) u(e), t = new J("xor", "xor", [t, d(e)]);
          return t
        }

        function d(e) {
          for (var t = y(e);
            "and" === e.token;) u(e), t = new J("and", "and", [t, y(e)]);
          return t
        }

        function y(e) {
          for (var t = g(e);
            "|" === e.token;) u(e), t = new J("|", "bitOr", [t, g(e)]);
          return t
        }

        function g(e) {
          for (var t = b(e);
            "^|" === e.token;) u(e), t = new J("^|", "bitXor", [t, b(e)]);
          return t
        }

        function b(e) {
          for (var t = v(e);
            "&" === e.token;) u(e), t = new J("&", "bitAnd", [t, v(e)]);
          return t
        }

        function v(e) {
          for (var t, r = [x(e)], n = [], i = {
              "==": "equal",
              "!=": "unequal",
              "<": "smaller",
              ">": "larger",
              "<=": "smallerEq",
              ">=": "largerEq"
            }; i.hasOwnProperty(e.token);) t = {
            name: e.token,
            fn: i[e.token]
          }, n.push(t), u(e), r.push(x(e));
          return 1 === r.length ? r[0] : 2 === r.length ? new J(n[0].name, n[0].fn, r) : new X(n.map(function (e) {
            return e.fn
          }), r)
        }

        function x(e) {
          var t, r, n, i, a;
          for (t = w(e), r = {
              "<<": "leftShift",
              ">>": "rightArithShift",
              ">>>": "rightLogShift"
            }; r.hasOwnProperty(e.token);) i = r[n = e.token], u(e), a = [t, w(e)], t = new J(n, i, a);
          return t
        }

        function w(e) {
          var t, r, n, i, a;
          for (t = N(e), r = {
              to: "to",
              in: "to"
            }; r.hasOwnProperty(e.token);) i = r[n = e.token], u(e), "in" === n && "" === e.token ? t = new J("*", "multiply", [t, new Q("in")], !0) : (a = [t, N(e)], t = new J(n, i, a));
          return t
        }

        function N(e) {
          var t, r = [];
          if (t = ":" === e.token ? new H(1) : O(e), ":" === e.token && e.conditionalLevel !== e.nestingLevel) {
            for (r.push(t);
              ":" === e.token && 3 > r.length;) u(e), ")" === e.token || "]" === e.token || "," === e.token || "" === e.token ? r.push(new Q("end")) : r.push(O(e));
            t = 3 === r.length ? new Y(r[0], r[2], r[1]) : new Y(r[0], r[1])
          }
          return t
        }

        function O(e) {
          var t, r, n, i, a;
          for (t = M(e), r = {
              "+": "add",
              "-": "subtract"
            }; r.hasOwnProperty(e.token);) i = r[n = e.token], u(e), a = [t, M(e)], t = new J(n, i, a);
          return t
        }

        function M(e) {
          var t, r, n, i, a;
          for (r = t = E(e), n = {
              "*": "multiply",
              ".*": "dotMultiply",
              "/": "divide",
              "./": "dotDivide",
              "%": "mod",
              mod: "mod"
            }; n.hasOwnProperty(e.token);) a = n[i = e.token], u(e), r = E(e), t = new J(i, a, [t, r]);
          return t
        }

        function E(e) {
          var t, r;
          for (r = t = j(e); e.tokenType === ee.SYMBOL || "in" === e.token && Object(qt.l)(t) || e.tokenType === ee.NUMBER && !Object(qt.l)(r) && (!Object(qt.B)(r) || "!" === r.op) || "(" === e.token;) r = j(e), t = new J("*", "multiply", [t, r], !0);
          return t
        }

        function j(e) {
          for (var t = S(e), r = t, n = [];
            "/" === e.token && Object(qt.l)(r);) {
            if (n.push(ft({}, e)), u(e), e.tokenType !== ee.NUMBER) {
              ft(e, n.pop());
              break
            }
            if (n.push(ft({}, e)), u(e), e.tokenType !== ee.SYMBOL && "(" !== e.token) {
              n.pop(), ft(e, n.pop());
              break
            }
            ft(e, n.pop()), n.pop(), r = S(e), t = new J("/", "divide", [t, r])
          }
          return t
        }

        function S(e) {
          var t, r, n, i = {
            "-": "unaryMinus",
            "+": "unaryPlus",
            "~": "bitNot",
            not: "not"
          };
          return i.hasOwnProperty(e.token) ? (n = i[e.token], t = e.token, u(e), r = [S(e)], new J(t, n, r)) : function (e) {
            var t, r, n, i;
            return t = function (e) {
              var t, r, n, i;
              for (t = function (e) {
                  var t = [];
                  if (e.tokenType === ee.SYMBOL && e.extraNodes.hasOwnProperty(e.token)) {
                    var r = e.extraNodes[e.token];
                    if (s(e), "(" === e.token) {
                      if (t = [], f(e), s(e), ")" !== e.token)
                        for (t.push(m(e));
                          "," === e.token;) s(e), t.push(m(e));
                      if (")" !== e.token) throw q(e, "Parenthesis ) expected");
                      l(e), s(e)
                    }
                    return new r(t)
                  }
                  return function (e) {
                    var t, r;
                    return e.tokenType === ee.SYMBOL || e.tokenType === ee.DELIMITER && e.token in re ? (r = e.token, s(e), t = ne.hasOwnProperty(r) ? new H(ne[r]) : -1 === ie.indexOf(r) ? new Q(r) : new H(z(r, "number")), t = A(e, t)) : function (e) {
                      var t, r;
                      return '"' === e.token ? (r = C(e), t = new H(r), t = A(e, t)) : function (e) {
                        var t, r;
                        return "'" === e.token ? (r = T(e), t = new H(r), t = A(e, t)) : function (e) {
                          var t, r, n, i;
                          if ("[" === e.token) {
                            if (f(e), s(e), "]" !== e.token) {
                              var a = _(e);
                              if (";" === e.token) {
                                for (n = 1, r = [a];
                                  ";" === e.token;) s(e), r[n] = _(e), n++;
                                if ("]" !== e.token) throw q(e, "End of matrix ] expected");
                                l(e), s(e), i = r[0].items.length;
                                for (var o = 1; o < n; o++)
                                  if (r[o].items.length !== i) throw B(e, "Column dimensions mismatch (" + r[o].items.length + " !== " + i + ")");
                                t = new P(r)
                              } else {
                                if ("]" !== e.token) throw q(e, "End of matrix ] expected");
                                l(e), s(e), t = a
                              }
                            } else l(e), s(e), t = new P([]);
                            return A(e, t)
                          }
                          return function (e) {
                            if ("{" === e.token) {
                              f(e);
                              var t, r = {};
                              do {
                                if (s(e), "}" !== e.token) {
                                  if ('"' === e.token) t = C(e);
                                  else if ("'" === e.token) t = T(e);
                                  else {
                                    if (e.tokenType !== ee.SYMBOL) throw q(e, "Symbol or string expected as object key");
                                    t = e.token, s(e)
                                  }
                                  if (":" !== e.token) throw q(e, "Colon : expected after object key");
                                  s(e), r[t] = m(e)
                                }
                              } while ("," === e.token);
                              if ("}" !== e.token) throw q(e, "Comma , or bracket } expected after object value");
                              l(e), s(e);
                              var n = new V(r);
                              return n = A(e, n)
                            }
                            return function (e) {
                              var t;
                              return e.tokenType === ee.NUMBER ? (t = e.token, s(e), new H(z(t, D.number))) : function (e) {
                                var t;
                                if ("(" === e.token) {
                                  if (f(e), s(e), t = m(e), ")" !== e.token) throw q(e, "Parenthesis ) expected");
                                  return l(e), s(e), t = new W(t), t = A(e, t)
                                }
                                return function (e) {
                                  throw "" === e.token ? q(e, "Unexpected end of expression") : q(e, "Value expected")
                                }(e)
                              }(e)
                            }(e)
                          }(e)
                        }(e)
                      }(e)
                    }(e)
                  }(e)
                }(e), r = {
                  "!": "factorial",
                  "'": "ctranspose"
                }; r.hasOwnProperty(e.token);) n = e.token, i = r[n], s(e), t = new J(n, i, [t]), t = A(e, t);
              return t
            }(e), ("^" === e.token || ".^" === e.token) && (r = e.token, n = "^" === r ? "pow" : "dotPow", u(e), i = [t, S(e)], t = new J(r, n, i)), t
          }(e)
        }

        function A(e, t, r) {
          for (var n; !("(" !== e.token && "[" !== e.token && "." !== e.token || r && -1 === r.indexOf(e.token));)
            if (n = [], "(" === e.token) {
              if (!Object(qt.J)(t) && !Object(qt.a)(t)) return t;
              if (f(e), s(e), ")" !== e.token)
                for (n.push(m(e));
                  "," === e.token;) s(e), n.push(m(e));
              if (")" !== e.token) throw q(e, "Parenthesis ) expected");
              l(e), s(e), t = new G(t, n)
            } else if ("[" === e.token) {
            if (f(e), s(e), "]" !== e.token)
              for (n.push(m(e));
                "," === e.token;) s(e), n.push(m(e));
            if ("]" !== e.token) throw q(e, "Parenthesis ] expected");
            l(e), s(e), t = new R(t, new Z(n))
          } else {
            if (s(e), e.tokenType !== ee.SYMBOL) throw q(e, "Property name expected after dot");
            n.push(new H(e.token)), s(e), t = new R(t, new Z(n, !0))
          }
          return t
        }

        function C(e) {
          for (var t = "";
            "" !== n(e) && '"' !== n(e);) "\\" === n(e) && (t += n(e), i(e)), t += n(e), i(e);
          if (s(e), '"' !== e.token) throw q(e, 'End of string " expected');
          return s(e), JSON.parse('"' + t + '"')
        }

        function T(e) {
          for (var t = "";
            "" !== n(e) && "'" !== n(e);) "\\" === n(e) && (t += n(e), i(e)), t += n(e), i(e);
          if (s(e), "'" !== e.token) throw q(e, "End of string ' expected");
          return s(e), JSON.parse('"' + t + '"')
        }

        function _(e) {
          for (var t = [m(e)], r = 1;
            "," === e.token;) s(e), t[r] = m(e), r++;
          return new P(t)
        }

        function I(e) {
          return e.index - e.token.length + 1
        }

        function q(e, t) {
          var r = I(e),
            n = new SyntaxError(t + " (char " + r + ")");
          return n.char = r, n
        }

        function B(e, t) {
          var r = I(e),
            n = new SyntaxError(t + " (char " + r + ")");
          return n.char = r, n
        }
        var k = e.typed,
          z = e.numeric,
          D = e.config,
          R = e.AccessorNode,
          P = e.ArrayNode,
          F = e.AssignmentNode,
          U = e.BlockNode,
          L = e.ConditionalNode,
          H = e.ConstantNode,
          $ = e.FunctionAssignmentNode,
          G = e.FunctionNode,
          Z = e.IndexNode,
          V = e.ObjectNode,
          J = e.OperatorNode,
          W = e.ParenthesisNode,
          Y = e.RangeNode,
          X = e.RelationalNode,
          Q = e.SymbolNode,
          K = k("parse", {
            string: function (e) {
              return p(e, {})
            },
            "Array | Matrix": function (e) {
              return t(e, {})
            },
            "string, Object": function (e, t) {
              return p(e, void 0 === t.nodes ? {} : t.nodes)
            },
            "Array | Matrix, Object": t
          }),
          ee = {
            NULL: 0,
            DELIMITER: 1,
            NUMBER: 2,
            SYMBOL: 3,
            UNKNOWN: 4
          },
          te = {
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
          re = {
            mod: !0,
            to: !0,
            in: !0,
            and: !0,
            xor: !0,
            or: !0,
            not: !0
          },
          ne = {
            true: !0,
            false: !1,
            null: null,
            undefined: void 0
          },
          ie = ["NaN", "Infinity"];
        return K.isAlpha = function (e, t, r) {
          return K.isValidLatinOrGreek(e) || K.isValidMathSymbol(e, r) || K.isValidMathSymbol(t, e)
        }, K.isValidLatinOrGreek = function (e) {
          return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(e)
        }, K.isValidMathSymbol = function (e, t) {
          return /^[\uD835]$/.test(e) && /^[\uDC00-\uDFFF]$/.test(t) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(t)
        }, K.isWhitespace = function (e, t) {
          return " " === e || "\t" === e || "\n" === e && 0 < t
        }, K.isDecimalMark = function (e, t) {
          return "." === e && "/" !== t && "*" !== t && "^" !== t
        }, K.isDigitDot = function (e) {
          return "0" <= e && "9" >= e || "." === e
        }, K.isDigit = function (e) {
          return "0" <= e && "9" >= e
        }, K
      }),
      hs = "compile",
      ds = Object(Dt.a)(hs, ["typed", "parse"], function (e) {
        var t = e.typed,
          r = e.parse;
        return t(hs, {
          string: function (e) {
            return r(e).compile()
          },
          "Array | Matrix": function (e) {
            return c(e, function (e) {
              return r(e).compile()
            })
          }
        })
      }),
      ys = "evaluate",
      gs = Object(Dt.a)(ys, ["typed", "parse"], function (e) {
        var t = e.typed,
          r = e.parse;
        return t(ys, {
          string: function (e) {
            return r(e).compile().evaluate({})
          },
          "string, Object": function (e, t) {
            return r(e).compile().evaluate(t)
          },
          "Array | Matrix": function (e) {
            var t = {};
            return c(e, function (e) {
              return r(e).compile().evaluate(t)
            })
          },
          "Array | Matrix, Object": function (e, t) {
            return c(e, function (e) {
              return r(e).compile().evaluate(t)
            })
          }
        })
      }),
      bs = Object(Dt.a)("eval", ["evaluate"], function (e) {
        var t = e.evaluate;
        return function () {
          Object(gr.a)('Function "eval" has been renamed to "evaluate" in v6.0.0, please use the new function instead.');
          for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
          return t.apply(t, r)
        }
      }),
      vs = Object(Dt.a)("Parser", ["parse"], function (e) {
        function t() {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          this.scope = {}
        }
        var r = e.parse;
        return t.prototype.type = "Parser", t.prototype.isParser = !0, t.prototype.parse = function () {
          throw new Error("Parser.parse is deprecated. Use math.parse instead.")
        }, t.prototype.compile = function () {
          throw new Error("Parser.compile is deprecated. Use math.compile instead.")
        }, t.prototype.evaluate = function (e) {
          return r(e).compile().evaluate(this.scope)
        }, t.prototype.eval = function (e) {
          return Object(gr.a)("Method Parser.eval is renamed to Parser.evaluate. Please use the new method name."), this.evaluate(e)
        }, t.prototype.get = function (e) {
          return e in this.scope ? be(this.scope, e) : void 0
        }, t.prototype.getAll = function () {
          return Object(er.e)({}, this.scope)
        }, t.prototype.set = function (e, t) {
          return ve(this.scope, e, t)
        }, t.prototype.remove = function (e) {
          delete this.scope[e]
        }, t.prototype.clear = function () {
          for (var e in this.scope) this.scope.hasOwnProperty(e) && delete this.scope[e]
        }, t
      }, {
        isClass: !0
      }),
      xs = Object(Dt.a)("parser", ["typed", "Parser"], function (e) {
        var t = e.typed,
          r = e.Parser;
        return t("parser", {
          "": function () {
            return new r
          }
        })
      }),
      ws = Object(Dt.a)("lup", ["typed", "matrix", "abs", "addScalar", "divideScalar", "multiplyScalar", "subtract", "larger", "equalScalar", "unaryMinus", "DenseMatrix", "SparseMatrix", "Spa"], function (e) {
        function t(e) {
          var t, r, n, l = e._size[0],
            m = e._size[1],
            h = Math.min(l, m),
            d = Object(er.a)(e._data),
            y = [],
            g = [l, h],
            b = [],
            v = [h, m],
            x = [];
          for (t = 0; t < l; t++) x[t] = t;
          for (r = 0; r < m; r++) {
            if (0 < r)
              for (t = 0; t < l; t++) {
                var w = Math.min(t, r),
                  N = 0;
                for (n = 0; n < w; n++) N = a(N, s(d[t][n], d[n][r]));
                d[t][r] = u(d[t][r], N)
              }
            var O = r,
              M = 0,
              E = 0;
            for (t = r; t < l; t++) {
              var j = d[t][r],
                S = i(j);
              c(S, M) && (O = t, M = S, E = j)
            }
            if (r !== O && (x[r] = x[O], p._swapRows(r, O, d)), r < l)
              for (t = r + 1; t < l; t++) {
                var A = d[t][r];
                f(A, 0) || (d[t][r] = o(d[t][r], E))
              }
          }
          for (r = 0; r < m; r++)
            for (t = 0; t < l; t++) 0 === r && (t < m && (b[t] = []), y[t] = []), t < r ? (t < m && (b[t][r] = d[t][r]), r < l && (y[t][r] = 0)) : t !== r ? (t < m && (b[t][r] = 0), r < l && (y[t][r] = d[t][r])) : (t < m && (b[t][r] = d[t][r]), r < l && (y[t][r] = 1));
          var C = new p({
              data: y,
              size: g
            }),
            T = new p({
              data: b,
              size: v
            }),
            _ = [];
          for (t = 0, h = x.length; t < h; t++) _[x[t]] = t;
          return {
            L: C,
            U: T,
            p: _,
            toString: function () {
              return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p
            }
          }
        }
        var r = e.typed,
          n = e.matrix,
          i = e.abs,
          a = e.addScalar,
          o = e.divideScalar,
          s = e.multiplyScalar,
          u = e.subtract,
          c = e.larger,
          f = e.equalScalar,
          l = e.unaryMinus,
          p = e.DenseMatrix,
          m = e.SparseMatrix,
          h = e.Spa;
        return r("lup", {
          DenseMatrix: function (e) {
            return t(e)
          },
          SparseMatrix: function (e) {
            return function (e) {
              var t, r, n, a = e._size[0],
                u = e._size[1],
                p = Math.min(a, u),
                d = e._values,
                y = e._index,
                g = e._ptr,
                b = [],
                v = [],
                x = [],
                w = [a, p],
                N = [],
                O = [],
                M = [],
                E = [p, u],
                j = [],
                S = [];
              for (t = 0; t < a; t++) j[t] = t, S[t] = t;
              var A = function (e, t) {
                  var r = S[e],
                    n = S[t];
                  j[r] = t, j[n] = e, S[e] = n, S[t] = r
                },
                C = function () {
                  var e = new h;
                  r < a && (x.push(b.length), b.push(1), v.push(r)), M.push(N.length);
                  var u = g[r],
                    p = g[r + 1];
                  for (n = u; n < p; n++) t = y[n], e.set(j[t], d[n]);
                  0 < r && e.forEach(0, r - 1, function (t, r) {
                    m._forEachRow(t, b, v, x, function (n, i) {
                      n > t && e.accumulate(n, l(s(i, r)))
                    })
                  });
                  var S = r,
                    C = e.get(r),
                    T = i(C);
                  e.forEach(r + 1, a - 1, function (e, t) {
                    var r = i(t);
                    c(r, T) && (S = e, T = r, C = t)
                  }), r !== S && (m._swapRows(r, S, w[1], b, v, x), m._swapRows(r, S, E[1], N, O, M), e.swap(r, S), A(r, S)), e.forEach(0, a - 1, function (e, t) {
                    e <= r ? (N.push(t), O.push(e)) : (t = o(t, C), !f(t, 0) && (b.push(t), v.push(e)))
                  })
                };
              for (r = 0; r < u; r++) C();
              return M.push(N.length), x.push(b.length), {
                L: new m({
                  values: b,
                  index: v,
                  ptr: x,
                  size: w
                }),
                U: new m({
                  values: N,
                  index: O,
                  ptr: M,
                  size: E
                }),
                p: j,
                toString: function () {
                  return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p
                }
              }
            }(e)
          },
          Array: function (e) {
            var r = t(n(e));
            return {
              L: r.L.valueOf(),
              U: r.U.valueOf(),
              p: r.p
            }
          }
        })
      }),
      Ns = Object(Dt.a)("qr", ["typed", "matrix", "zeros", "identity", "isZero", "unequal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtract"], function (e) {
        function t(e) {
          var t, r, n, y = e._size[0],
            g = e._size[1],
            b = a([y], "dense"),
            v = b._data,
            x = e.clone(),
            w = x._data,
            N = i([y], "");
          for (n = 0; n < Math.min(g, y); ++n) {
            var O = w[n][n],
              M = l(u(O)),
              E = f(M),
              j = 0;
            for (t = n; t < y; t++) j = p(j, h(w[t][n], f(w[t][n])));
            var S = h(M, c(j));
            if (!o(S)) {
              var A = d(O, S);
              for (N[n] = 1, t = n + 1; t < y; t++) N[t] = m(w[t][n], A);
              var C = l(f(m(A, S))),
                T = void 0;
              for (r = n; r < g; r++) {
                for (T = 0, t = n; t < y; t++) T = p(T, h(f(N[t]), w[t][r]));
                for (T = h(T, C), t = n; t < y; t++) w[t][r] = h(d(w[t][r], h(N[t], T)), E)
              }
              for (t = 0; t < y; t++) {
                for (T = 0, r = n; r < y; r++) T = p(T, h(v[t][r], N[r]));
                for (T = h(T, C), r = n; r < y; ++r) v[t][r] = m(d(v[t][r], h(T, f(N[r]))), E)
              }
            }
          }
          for (t = 0; t < y; ++t)
            for (r = 0; r < t && r < g; ++r) {
              if (s(0, m(w[t][r], 1e5))) throw new Error("math.qr(): unknown error - R is not lower triangular (element (" + t + ", " + r + ")  = " + w[t][r] + ")");
              w[t][r] = h(w[t][r], 0)
            }
          return {
            Q: b,
            R: x,
            toString: function () {
              return "Q: " + this.Q.toString() + "\nR: " + this.R.toString()
            }
          }
        }
        var r = e.typed,
          n = e.matrix,
          i = e.zeros,
          a = e.identity,
          o = e.isZero,
          s = e.unequal,
          u = e.sign,
          c = e.sqrt,
          f = e.conj,
          l = e.unaryMinus,
          p = e.addScalar,
          m = e.divideScalar,
          h = e.multiplyScalar,
          d = e.subtract;
        return r("qr", {
          DenseMatrix: function (e) {
            return t(e)
          },
          SparseMatrix: function (e) {
            return function () {
              throw new Error("qr not implemented for sparse matrices yet")
            }()
          },
          Array: function (e) {
            var r = t(n(e));
            return {
              Q: r.Q.valueOf(),
              R: r.R.valueOf()
            }
          }
        })
      }),
      Os = Object(Dt.a)("csAmd", ["add", "multiply", "transpose"], function (e) {
        function t(e, t, r, n, s) {
          var u = o(t);
          if (1 === e && n === r) return i(t, u);
          if (2 === e) {
            for (var c, f = u._index, l = u._ptr, p = 0, m = 0; m < r; m++)
              if (c = l[m], l[m] = p, !(l[m + 1] - c > s))
                for (var h = l[m + 1]; c < h; c++) f[p++] = f[c];
            return l[r] = p, t = o(u), a(u, t)
          }
          return a(u, t)
        }

        function r(e, t, r, n, i) {
          if (2 > e || 0 > e + t) {
            for (var a = 0; a < i; a++) 0 !== r[n + a] && (r[n + a] = 1);
            e = 2
          }
          return e
        }

        function n(e, t) {
          return e !== t
        }
        var i = e.add,
          a = e.multiply,
          o = e.transpose;
        return function (e, i) {
          if (!i || 0 >= e || 3 < e) return null;
          var a = i._size,
            o = a[0],
            s = a[1],
            u = 0,
            c = Math.max(16, 10 * Math.sqrt(s)),
            f = t(e, i, o, s, c = Math.min(s - 2, c));
          ! function (e, t, r) {
            for (var n, i = e._values, a = e._index, o = e._ptr, s = e._size[1], u = 0, c = 0; c < s; c++)
              for (n = o[c], o[c] = u; n < o[c + 1]; n++) t(a[n], c, i ? i[n] : 1, r) && (a[u] = a[n], i && (i[u] = i[n]), u++);
            o[s] = u, a.splice(u, a.length - u), i && i.splice(u, i.length - u)
          }(f, n, null);
          for (var l, p, m, h, d, y, g, b, v, x, w, N, O, M, E, j, S = f._index, A = f._ptr, C = A[s], T = [], _ = [], I = s + 1, q = 2 * (s + 1), B = 3 * (s + 1), k = 4 * (s + 1), z = 5 * (s + 1), D = 6 * (s + 1), R = 7 * (s + 1), P = T, F = function (e, t, n, i, a, o, s, u, c, f, l, p) {
              for (var m = 0; m < e; m++) n[i + m] = t[m + 1] - t[m];
              n[i + e] = 0;
              for (var h = 0; h <= e; h++) n[a + h] = -1, o[h] = -1, n[s + h] = -1, n[u + h] = -1, n[c + h] = 1, n[f + h] = 1, n[l + h] = 0, n[p + h] = n[i + h];
              var d = r(0, 0, n, f, e);
              return n[l + e] = -2, t[e] = -1, n[f + e] = 0, d
            }(s, A, _, 0, B, P, q, R, I, D, k, z), U = function (e, t, r, n, i, a, o, s, u, c, f) {
              for (var l, p = 0, m = 0; m < e; m++)
                if (0 === (l = r[n + m])) r[i + m] = -2, p++, t[m] = -1, r[a + m] = 0;
                else if (l > o) r[s + m] = 0, r[i + m] = -1, p++, t[m] = pt(e), r[s + e]++;
              else {
                var h = r[u + l]; - 1 !== h && (c[h] = m), r[f + m] = r[u + l], r[u + l] = m
              }
              return p
            }(s, A, _, z, k, D, c, I, B, P, q), L = 0; U < s;) {
            for (m = -1; L < s && -1 === (m = _[B + L]); L++); - 1 !== _[q + m] && (P[_[q + m]] = -1), _[B + L] = _[q + m];
            var H = _[k + m],
              $ = _[I + m];
            U += $;
            var G = 0;
            _[I + m] = -$;
            var Z = A[m],
              V = 0 === H ? Z : C,
              J = V;
            for (h = 1; h <= H + 1; h++) {
              for (h > H ? (y = m, g = Z, b = _[0 + m] - H) : (g = A[y = S[Z++]], b = _[0 + y]), d = 1; d <= b; d++) !(0 >= (v = _[I + (l = S[g++])])) && (G += v, _[I + l] = -v, S[J++] = l, -1 !== _[q + l] && (P[_[q + l]] = P[l]), -1 === P[l] ? _[B + _[z + l]] = _[q + l] : _[q + P[l]] = _[q + l]);
              y !== m && (A[y] = pt(m), _[D + y] = 0)
            }
            for (0 !== H && (C = J), _[z + m] = G, A[m] = V, _[0 + m] = J - V, _[k + m] = -2, F = r(F, u, _, D, s), x = V; x < J; x++)
              if (!(0 >= (w = _[k + (l = S[x])]))) {
                var W = F - (v = -_[I + l]);
                for (Z = A[l], N = A[l] + w - 1; Z <= N; Z++) _[D + (y = S[Z])] >= F ? _[D + y] -= v : 0 !== _[D + y] && (_[D + y] = _[z + y] + W)
              } for (x = V; x < J; x++) {
              for (O = (N = A[l = S[x]]) + _[k + l] - 1, M = N, E = 0, j = 0, Z = N; Z <= O; Z++)
                if (0 !== _[D + (y = S[Z])]) {
                  var Y = _[D + y] - F;
                  0 < Y ? (j += Y, S[M++] = y, E += y) : (A[y] = pt(m), _[D + y] = 0)
                } _[k + l] = M - N + 1;
              var X = M,
                Q = N + _[0 + l];
              for (Z = O + 1; Z < Q; Z++) {
                var K = _[I + (p = S[Z])];
                0 >= K || (j += K, S[M++] = p, E += p)
              }
              0 === j ? (A[l] = pt(m), G -= v = -_[I + l], $ += v, U += v, _[I + l] = 0, _[k + l] = -1) : (_[z + l] = Math.min(_[z + l], j), S[M] = S[X], S[X] = S[N], S[N] = m, _[0 + l] = M - N + 1, E = (0 > E ? -E : E) % s, _[q + l] = _[R + E], _[R + E] = l, P[l] = E)
            }
            for (_[z + m] = G, F = r(F + (u = Math.max(u, G)), u, _, D, s), x = V; x < J; x++)
              if (!(0 <= _[I + (l = S[x])]))
                for (l = _[R + (E = P[l])], _[R + E] = -1; - 1 !== l && -1 !== _[q + l]; l = _[q + l], F++) {
                  for (b = _[0 + l], w = _[k + l], Z = A[l] + 1; Z <= A[l] + b - 1; Z++) _[D + S[Z]] = F;
                  var ee = l;
                  for (p = _[q + l]; - 1 !== p;) {
                    var te = _[0 + p] === b && _[k + p] === w;
                    for (Z = A[p] + 1; te && Z <= A[p] + b - 1; Z++) _[D + S[Z]] !== F && (te = 0);
                    te ? (A[p] = pt(l), _[I + l] += _[I + p], _[I + p] = 0, _[k + p] = -1, p = _[q + p], _[q + ee] = p) : (ee = p, p = _[q + p])
                  }
                }
            for (Z = V, x = V; x < J; x++) !(0 >= (v = -_[I + (l = S[x])])) && (_[I + l] = v, j = _[z + l] + G - v, -1 !== _[B + (j = Math.min(j, s - U - v))] && (P[_[B + j]] = l), _[q + l] = _[B + j], P[l] = -1, _[B + j] = l, L = Math.min(L, j), _[z + l] = j, S[Z++] = l);
            _[I + m] = $, 0 == (_[0 + m] = Z - V) && (A[m] = -1, _[D + m] = 0), 0 !== H && (C = Z)
          }
          for (l = 0; l < s; l++) A[l] = pt(A[l]);
          for (p = 0; p <= s; p++) _[B + p] = -1;
          for (p = s; 0 <= p; p--) 0 < _[I + p] || (_[q + p] = _[B + A[p]], _[B + A[p]] = p);
          for (y = s; 0 <= y; y--) 0 >= _[I + y] || -1 !== A[y] && (_[q + y] = _[B + A[y]], _[B + A[y]] = y);
          for (m = 0, l = 0; l <= s; l++) - 1 === A[l] && (m = lt(l, m, _, B, q, T, D));
          return T.splice(T.length - 1, 1), T
        }
      }),
      Ms = Object(Dt.a)("csCounts", ["transpose"], function (e) {
        var t = e.transpose;
        return function (e, r, n, i) {
          if (!e || !r || !n) return null;
          var a, o, s, u, c, f, l, p = e._size,
            m = p[0],
            h = p[1],
            d = 4 * h + (i ? h + m + 1 : 0),
            y = [],
            g = 3 * h,
            b = 4 * h,
            v = 5 * h + 1;
          for (s = 0; s < d; s++) y[s] = -1;
          var x = [],
            w = t(e),
            N = w._index,
            O = w._ptr;
          for (s = 0; s < h; s++)
            for (x[o = n[s]] = -1 === y[g + o] ? 1 : 0; - 1 !== o && -1 === y[g + o]; o = r[o]) y[g + o] = s;
          if (i) {
            for (s = 0; s < h; s++) y[n[s]] = s;
            for (a = 0; a < m; a++) {
              for (s = h, f = O[a], l = O[a + 1], c = f; c < l; c++) s = Math.min(s, y[N[c]]);
              y[v + a] = y[b + s], y[b + s] = a
            }
          }
          for (a = 0; a < h; a++) y[0 + a] = a;
          for (s = 0; s < h; s++) {
            for (-1 !== r[o = n[s]] && x[r[o]]--, u = i ? y[b + s] : o; - 1 !== u; u = i ? y[v + u] : -1)
              for (c = O[u]; c < O[u + 1]; c++) {
                var M = mt(a = N[c], o, y, g, h, 2 * h, 0);
                1 <= M.jleaf && x[o]++, 2 === M.jleaf && x[M.q]--
              } - 1 !== r[o] && (y[0 + o] = r[o])
          }
          for (o = 0; o < h; o++) - 1 !== r[o] && (x[r[o]] += x[o]);
          return x
        }
      }),
      Es = Object(Dt.a)("csSqr", ["add", "multiply", "transpose"], function (e) {
        var t = e.add,
          r = e.multiply,
          n = e.transpose,
          i = Os({
            add: t,
            multiply: r,
            transpose: n
          }),
          a = Ms({
            transpose: n
          });
        return function (e, t, r) {
          var n, o = t._ptr,
            s = t._size[1],
            u = {};
          if (u.q = i(e, t), e && !u.q) return null;
          if (r) {
            var c = e ? function (e, t, r, n) {
              for (var i = e._values, a = e._index, o = e._ptr, s = e._size, u = e._datatype, c = s[0], f = s[1], l = n && e._values ? [] : null, p = [], m = [], h = 0, d = 0; d < f; d++) {
                m[d] = h;
                for (var y, g = r ? r[d] : d, b = o[g], v = o[g + 1], x = b; x < v; x++) y = t ? t[a[x]] : a[x], p[h] = y, l && (l[h] = i[x]), h++
              }
              return m[f] = h, e.createSparseMatrix({
                values: l,
                index: p,
                ptr: m,
                size: [c, f],
                datatype: u
              })
            }(t, null, u.q, 0) : t;
            u.parent = function (e, t) {
              if (!e) return null;
              var r, n, i = e._index,
                a = e._ptr,
                o = e._size,
                s = o[0],
                u = o[1],
                c = [],
                f = [],
                l = u;
              if (t)
                for (r = 0; r < s; r++) f[l + r] = -1;
              for (var p = 0; p < u; p++) {
                c[p] = -1, f[0 + p] = -1;
                for (var m, h = a[p], d = a[p + 1], y = h; y < d; y++) {
                  for (m = i[y], r = t ? f[l + m] : m; - 1 !== r && r < p; r = n) n = f[0 + r], f[0 + r] = p, -1 === n && (c[r] = p);
                  t && (f[l + m] = p)
                }
              }
              return c
            }(c, 1);
            var f = function (e, t) {
              if (!e) return null;
              var r, n = 0,
                i = [],
                a = [],
                o = t;
              for (r = 0; r < t; r++) a[0 + r] = -1;
              for (r = t - 1; 0 <= r; r--) - 1 !== e[r] && (a[o + r] = a[0 + e[r]], a[0 + e[r]] = r);
              for (r = 0; r < t; r++) - 1 === e[r] && (n = lt(r, n, a, 0, o, i, 2 * t));
              return i
            }(u.parent, s);
            if (u.cp = a(c, u.parent, f, 1), c && u.parent && u.cp && function (e, t) {
                var r = e._ptr,
                  n = e._index,
                  i = e._size,
                  a = i[0],
                  o = i[1];
                t.pinv = [], t.leftmost = [];
                var s, u, c, f, l, p = t.parent,
                  m = t.pinv,
                  h = t.leftmost,
                  d = [],
                  y = a,
                  g = a + o,
                  b = a + 2 * o;
                for (u = 0; u < o; u++) d[y + u] = -1, d[g + u] = -1, d[b + u] = 0;
                for (s = 0; s < a; s++) h[s] = -1;
                for (u = o - 1; 0 <= u; u--)
                  for (f = r[u], l = r[u + 1], c = f; c < l; c++) h[n[c]] = u;
                for (s = a - 1; 0 <= s; s--) m[s] = -1, -1 !== (u = h[s]) && (0 == d[b + u]++ && (d[g + u] = s), d[0 + s] = d[y + u], d[y + u] = s);
                for (t.lnz = 0, t.m2 = a, u = 0; u < o; u++)
                  if (s = d[y + u], t.lnz++, 0 > s && (s = t.m2++), m[s] = u, !(0 >= --b[u])) {
                    t.lnz += d[b + u];
                    var v = p[u]; - 1 !== v && (0 === d[b + v] && (d[g + v] = d[g + u]), d[0 + d[g + u]] = d[y + v], d[y + v] = d[0 + s], d[b + v] += d[b + u])
                  } for (s = 0; s < a; s++) 0 > m[s] && (m[s] = u++);
                return !0
              }(c, u))
              for (u.unz = 0, n = 0; n < s; n++) u.unz += u.cp[n]
          } else u.unz = 4 * o[s] + s, u.lnz = u.unz;
          return u
        }
      }),
      js = Object(Dt.a)("csSpsolve", ["divideScalar", "multiply", "subtract"], function (e) {
        var t = e.divideScalar,
          r = e.multiply,
          n = e.subtract;
        return function (e, i, a, o, s, u, c) {
          var f, l, p, m, h = e._values,
            d = e._index,
            y = e._ptr,
            g = e._size[1],
            b = i._values,
            v = i._index,
            x = i._ptr,
            w = function (e, t, r, n, i) {
              var a, o, s, u = e._ptr,
                c = e._size,
                f = t._index,
                l = t._ptr,
                p = c[1],
                m = p;
              for (o = l[r], s = l[r + 1], a = o; a < s; a++) {
                var h = f[a];
                ht(u, h) || (m = gt(h, e, m, n, i))
              }
              for (a = m; a < p; a++) dt(u, n[a]);
              return m
            }(e, i, a, o, u);
          for (f = w; f < g; f++) s[o[f]] = 0;
          for (l = x[a], p = x[a + 1], f = l; f < p; f++) s[v[f]] = b[f];
          for (var N = w; N < g; N++) {
            var O = o[N],
              M = u ? u[O] : O;
            if (!(0 > M))
              for (l = y[M], p = y[M + 1], s[O] = t(s[O], h[c ? l : p - 1]), f = c ? l + 1 : l, m = c ? p : p - 1; f < m; f++) {
                var E = d[f];
                s[E] = n(s[E], r(h[f], s[O]))
              }
          }
          return w
        }
      }),
      Ss = Object(Dt.a)("csLu", ["abs", "divideScalar", "multiply", "subtract", "larger", "largerEq", "SparseMatrix"], function (e) {
        var t = e.abs,
          r = e.divideScalar,
          n = e.multiply,
          i = e.subtract,
          a = e.larger,
          o = e.largerEq,
          s = e.SparseMatrix,
          u = js({
            divideScalar: r,
            multiply: n,
            subtract: i
          });
        return function (e, i, c) {
          if (!e) return null;
          var f, l = e._size[1],
            p = 100,
            m = 100;
          i && (f = i.q, p = i.lnz || p, m = i.unz || m);
          var h, d, y = [],
            g = [],
            b = [],
            v = new s({
              values: y,
              index: g,
              ptr: b,
              size: [l, l]
            }),
            x = [],
            w = [],
            N = [],
            O = new s({
              values: x,
              index: w,
              ptr: N,
              size: [l, l]
            }),
            M = [],
            E = [],
            j = [];
          for (h = 0; h < l; h++) E[h] = 0, M[h] = -1, b[h + 1] = 0;
          p = 0, m = 0;
          for (var S = 0; S < l; S++) {
            b[S] = p, N[S] = m;
            var A = f ? f[S] : S,
              C = u(v, e, A, j, E, M, 1),
              T = -1,
              _ = -1;
            for (d = C; d < l; d++)
              if (0 > M[h = j[d]]) {
                var I = t(E[h]);
                a(I, _) && (_ = I, T = h)
              } else w[m] = M[h], x[m++] = E[h];
            if (-1 === T || 0 >= _) return null;
            0 > M[A] && o(t(E[A]), n(_, c)) && (T = A);
            var q = E[T];
            for (w[m] = S, x[m++] = q, M[T] = S, g[p] = T, y[p++] = 1, d = C; d < l; d++) 0 > M[h = j[d]] && (g[p] = h, y[p++] = r(E[h], q)), E[h] = 0
          }
          for (b[l] = p, N[l] = m, d = 0; d < p; d++) g[d] = M[g[d]];
          return y.splice(p, y.length - p), g.splice(p, g.length - p), x.splice(m, x.length - m), w.splice(m, w.length - m), {
            L: v,
            U: O,
            pinv: M
          }
        }
      }),
      As = Object(Dt.a)("slu", ["typed", "abs", "add", "multiply", "transpose", "divideScalar", "subtract", "larger", "largerEq", "SparseMatrix"], function (e) {
        var t = e.typed,
          r = e.abs,
          n = e.add,
          i = e.multiply,
          a = e.transpose,
          o = e.divideScalar,
          s = e.subtract,
          u = e.larger,
          c = e.largerEq,
          f = e.SparseMatrix,
          l = Es({
            add: n,
            multiply: i,
            transpose: a
          }),
          p = Ss({
            abs: r,
            divideScalar: o,
            multiply: i,
            subtract: s,
            larger: u,
            largerEq: c,
            SparseMatrix: f
          });
        return t("slu", {
          "SparseMatrix, number, number": function (e, t, r) {
            if (!Object(zt.i)(t) || 0 > t || 3 < t) throw new Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]");
            if (0 > r || 1 < r) throw new Error("Partial pivoting threshold must be a number from 0 to 1");
            var n = l(t, e, !1),
              i = p(e, n, r);
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
      Cs = "lusolve",
      Ts = Object(Dt.a)(Cs, ["typed", "matrix", "lup", "slu", "usolve", "lsolve", "DenseMatrix"], function (e) {
        function t(e) {
          if (Object(qt.v)(e)) return e;
          if (Object(qt.b)(e)) return i(e);
          throw new TypeError("Invalid Matrix LU decomposition")
        }

        function r(e, r, n, i, a) {
          e = t(e), r = t(r), a = c(e, a, !1), n && (a._data = bt(n, a._data));
          var o = u(e, a),
            f = s(r, o);
          return i && (f._data = bt(i, f._data)), f
        }
        var n = e.typed,
          i = e.matrix,
          a = e.lup,
          o = e.slu,
          s = e.usolve,
          u = e.lsolve,
          c = Te({
            DenseMatrix: e.DenseMatrix
          });
        return n(Cs, {
          "Array, Array | Matrix": function (e, t) {
            e = i(e);
            var n = a(e);
            return r(n.L, n.U, n.p, null, t).valueOf()
          },
          "DenseMatrix, Array | Matrix": function (e, t) {
            var n = a(e);
            return r(n.L, n.U, n.p, null, t)
          },
          "SparseMatrix, Array | Matrix": function (e, t) {
            var n = a(e);
            return r(n.L, n.U, n.p, null, t)
          },
          "SparseMatrix, Array | Matrix, number, number": function (e, t, n, i) {
            var a = o(e, n, i);
            return r(a.L, a.U, a.p, a.q, t)
          },
          "Object, Array | Matrix": function (e, t) {
            return r(e.L, e.U, e.p, e.q, t)
          }
        })
      }),
      _s = Object(Dt.a)("Help", ["parse"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          if (!e) throw new Error('Argument "doc" missing');
          this.doc = e
        }
        var r = e.parse;
        return t.prototype.type = "Help", t.prototype.isHelp = !0, t.prototype.toString = function () {
          var e = this.doc || {},
            t = "\n";
          if (e.name && (t += "Name: " + e.name + "\n\n"), e.category && (t += "Category: " + e.category + "\n\n"), e.description && (t += "Description:\n    " + e.description + "\n\n"), e.syntax && (t += "Syntax:\n    " + e.syntax.join("\n    ") + "\n\n"), e.examples) {
            t += "Examples:\n";
            for (var n, i = {}, a = 0; a < e.examples.length; a++) {
              t += "    " + (n = e.examples[a]) + "\n";
              var o = void 0;
              try {
                o = r(n).compile().evaluate(i)
              } catch (t) {
                o = t
              }
              void 0 === o || Object(qt.s)(o) || (t += "        " + Object(Kt.d)(o, {
                precision: 14
              }) + "\n")
            }
            t += "\n"
          }
          return e.seealso && e.seealso.length && (t += "See also: " + e.seealso.join(", ") + "\n"), t
        }, t.prototype.toJSON = function () {
          var e = Object(er.a)(this.doc);
          return e.mathjs = "Help", e
        }, t.fromJSON = function (e) {
          var r = {};
          for (var n in e) "mathjs" != n && (r[n] = e[n]);
          return new t(r)
        }, t.prototype.valueOf = t.prototype.toString, t
      }, {
        isClass: !0
      }),
      Is = Object(Dt.a)("Chain", ["?on", "math"], function (e) {
        function t(e) {
          if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
          this.value = Object(qt.h)(e) ? e.value : e
        }

        function r(e, r) {
          "function" == typeof r && (t.prototype[e] = i(r))
        }

        function n(e, r) {
          Object(er.h)(t.prototype, e, function () {
            var e = r();
            return "function" == typeof e ? i(e) : void 0
          })
        }

        function i(e) {
          return function () {
            for (var r = [this.value], n = 0; n < arguments.length; n++) r[n + 1] = arguments[n];
            return new t(e.apply(e, r))
          }
        }
        var a = e.on,
          o = e.math;
        t.prototype.type = "Chain", t.prototype.isChain = !0, t.prototype.done = function () {
          return this.value
        }, t.prototype.valueOf = function () {
          return this.value
        }, t.prototype.toString = function () {
          return Object(Kt.d)(this.value)
        }, t.prototype.toJSON = function () {
          return {
            mathjs: "Chain",
            value: this.value
          }
        }, t.fromJSON = function (e) {
          return new t(e.value)
        }, t.createProxy = function (e, t) {
          if ("string" == typeof e) r(e, t);
          else {
            var i = function (t) {
              e.hasOwnProperty(t) && void 0 === s[t] && n(t, function () {
                return e[t]
              })
            };
            for (var a in e) i(a)
          }
        };
        var s = {
          expression: !0,
          docs: !0,
          type: !0,
          classes: !0,
          json: !0,
          error: !0,
          isChain: !0
        };
        return t.createProxy(o), a && a("import", function (e, t, r) {
          r || n(e, t)
        }), t
      }, {
        isClass: !0
      }),
      qs = {
        name: "typeOf",
        category: "Utils",
        syntax: ["typeOf(x)"],
        description: "Get the type of a variable.",
        examples: ["typeOf(3.5)", "typeOf(2 - 4i)", "typeOf(45 deg)", 'typeOf("hello world")'],
        seealso: ["getMatrixDataType"]
      },
      Bs = {
        name: "evaluate",
        category: "Expression",
        syntax: ["evaluate(expression)", "evaluate([expr1, expr2, expr3, ...])"],
        description: "Evaluate an expression or an array with expressions.",
        examples: ['evaluate("2 + 3")', 'evaluate("sqrt(" + 4 + ")")'],
        seealso: []
      },
      ks = {
        name: "pi",
        category: "Constants",
        syntax: ["pi"],
        description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",
        examples: ["pi", "sin(pi/2)"],
        seealso: ["tau"]
      },
      zs = {
        name: "e",
        category: "Constants",
        syntax: ["e"],
        description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",
        examples: ["e", "e ^ 2", "exp(2)", "log(e)"],
        seealso: ["exp"]
      },
      Ds = {
        name: "variance",
        category: "Statistics",
        syntax: ["variance(a, b, c, ...)", "variance(A)", "variance(A, normalization)"],
        description: 'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
        examples: ["variance(2, 4, 6)", "variance([2, 4, 6, 8])", 'variance([2, 4, 6, 8], "uncorrected")', 'variance([2, 4, 6, 8], "biased")', "variance([1, 2, 3; 4, 5, 6])"],
        seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"]
      },
      Rs = {
        bignumber: {
          name: "bignumber",
          category: "Construction",
          syntax: ["bignumber(x)"],
          description: "Create a big number from a number or string.",
          examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", 'bignumber("7.2")', 'bignumber("7.2e500")', "bignumber([0.1, 0.2, 0.3])"],
          seealso: ["boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
        },
        boolean: {
          name: "boolean",
          category: "Construction",
          syntax: ["x", "boolean(x)"],
          description: "Convert a string or number into a boolean.",
          examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")', 'boolean("false")', "boolean([1, 0, 1, 1])"],
          seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"]
        },
        complex: {
          name: "complex",
          category: "Construction",
          syntax: ["complex()", "complex(re, im)", "complex(string)"],
          description: "Create a complex number.",
          examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'],
          seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"]
        },
        createUnit: {
          name: "createUnit",
          category: "Construction",
          syntax: ["createUnit(definitions)", "createUnit(name, definition)"],
          description: "Create a user-defined unit and register it with the Unit type.",
          examples: ['createUnit("foo")', 'createUnit("knot", {definition: "0.514444444 m/s", aliases: ["knots", "kt", "kts"]})', 'createUnit("mph", "1 mile/hour")'],
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
          syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", 'matrix("dense")', "matrix([...])"],
          description: "Create a matrix.",
          examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])", 'matrix([3, 4; 5, 6], "sparse")', 'matrix([3, 4; 5, 6], "sparse", "number")'],
          seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "sparse"]
        },
        number: {
          name: "number",
          category: "Construction",
          syntax: ["x", "number(x)", "number(unit, valuelessUnit)"],
          description: "Create a number or convert a string or boolean into a number.",
          examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)", "number([true, false, true, true])", 'number(unit("52cm"), "m")'],
          seealso: ["bignumber", "boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
        },
        sparse: {
          name: "sparse",
          category: "Construction",
          syntax: ["sparse()", "sparse([a1, b1, ...; a1, b2, ...])", 'sparse([a1, b1, ...; a1, b2, ...], "number")'],
          description: "Create a sparse matrix.",
          examples: ["sparse()", "sparse([3, 4; 5, 6])", 'sparse([3, 0; 5, 0], "number")'],
          seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "matrix"]
        },
        splitUnit: {
          name: "splitUnit",
          category: "Construction",
          syntax: ["splitUnit(unit: Unit, parts: Unit[])"],
          description: "Split a unit in an array of units whose sum is equal to the original unit.",
          examples: ['splitUnit(1 m, ["feet", "inch"])'],
          seealso: ["unit", "createUnit"]
        },
        string: {
          name: "string",
          category: "Construction",
          syntax: ['"text"', "string(x)"],
          description: "Create a string or convert a value to a string",
          examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"],
          seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "unit"]
        },
        unit: {
          name: "unit",
          category: "Construction",
          syntax: ["value unit", "unit(value, unit)", "unit(string)"],
          description: "Create a unit.",
          examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'],
          seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "string"]
        },
        e: zs,
        E: zs,
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
        pi: ks,
        PI: ks,
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
          examples: ['derivative("2x^3", "x")', 'derivative("2x^3", "x", {simplify: false})', 'derivative("2x^2 + 3x + 4", "x")', 'derivative("sin(2x)", "x")', 'f = parse("x^2 + x")', 'x = parse("x")', "df = derivative(f, x)", "df.evaluate({x: 3})"],
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
          examples: ['simplify("3 + 2 / 4")', 'simplify("2x + x")', 'f = parse("x * (x + 2 + x)")', "simplified = simplify(f)", "simplified.evaluate({x: 2})"],
          seealso: ["derivative", "parse", "evaluate"]
        },
        rationalize: {
          name: "rationalize",
          category: "Algebra",
          syntax: ["rationalize(expr)", "rationalize(expr, scope)", "rationalize(expr, scope, detailed)"],
          description: "Transform a rationalizable expression in a rational fraction. If rational fraction is one variable polynomial then converts the numerator and denominator in canonical form, with decreasing exponents, returning the coefficients of numerator.",
          examples: ['rationalize("2x/y - y/(x+1)")', 'rationalize("2x/y - y/(x+1)", true)'],
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
          examples: ["a = 2.1 + 3.6", "a - 3.6", "3 + 2i", "3 cm + 2 inch", '"2.3" + "4"'],
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
          examples: ["abs(-3.5)", "norm(-3.5)", "norm(3 - 4i)", "norm([1, 2, -3], Infinity)", "norm([1, 2, -3], -Infinity)", "norm([3, 4], 2)", "norm([[1, 2], [3, 4]], 1)", 'norm([[1, 2], [3, 4]], "inf")', 'norm([[1, 2], [3, 4]], "fro")']
        },
        nthRoot: {
          name: "nthRoot",
          category: "Arithmetic",
          syntax: ["nthRoot(a)", "nthRoot(a, root)"],
          description: 'Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation "x^root = A".',
          examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"],
          seealso: ["nthRoots", "pow", "sqrt"]
        },
        nthRoots: {
          name: "nthRoots",
          category: "Arithmetic",
          syntax: ["nthRoots(A)", "nthRoots(A, root)"],
          description: 'Calculate the nth roots of a value. An nth root of a positive real number A, is a positive real solution of the equation "x^root = A". This function returns an array of complex values.',
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
          examples: ["-4.5", "-(-5.6)", '-"22"'],
          seealso: ["add", "subtract", "unaryPlus"]
        },
        unaryPlus: {
          name: "unaryPlus",
          category: "Operators",
          syntax: ["+x", "unaryPlus(x)"],
          description: "Converts booleans and strings to numbers.",
          examples: ["+true", '+"2"'],
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
          examples: ["config()", "1/3 + 1/4", 'config({number: "Fraction"})', "1/3 + 1/4"],
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
          examples: ['double = typed({ "number, number": f(x)=x+x })', "double(2)", 'double("hello")'],
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
        evaluate: Bs,
        eval: Bs,
        help: {
          name: "help",
          category: "Expression",
          syntax: ["help(object)", "help(string)"],
          description: "Display documentation on a function or data type.",
          examples: ["help(sqrt)", 'help("complex")'],
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
          description: 'Find the data type of all elements in a matrix or array, for example "number" if all items are a number and "Complex" if all values are complex numbers. If a matrix contains more than one data type, it will return "mixed".',
          examples: ["getMatrixDataType([1, 2, 3])", "getMatrixDataType([[5 cm], [2 inch]])", 'getMatrixDataType([1, "text"])', "getMatrixDataType([1, bignumber(4)])"],
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
          examples: ["partitionSelect([5, 10, 1], 2)", 'partitionSelect(["C", "B", "A", "D"], 1)'],
          seealso: ["sort"]
        },
        range: {
          name: "range",
          category: "Type",
          syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"],
          description: "Create a range. Lower bound of the range is included, upper bound is excluded.",
          examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")', "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"],
          seealso: ["concat", "det", "diag", "identity", "inv", "ones", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
        },
        resize: {
          name: "resize",
          category: "Matrix",
          syntax: ["resize(x, size)", "resize(x, size, defaultValue)"],
          description: "Resize a matrix.",
          examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5])", "resize([1,2,3], [5], -1)", "resize(2, [2, 3])", 'resize("hello", [8], "!")'],
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
          examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"],
          seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "squeeze", "subset", "trace", "transpose", "zeros"]
        },
        sort: {
          name: "sort",
          category: "Matrix",
          syntax: ["sort(x)", "sort(x, compare)"],
          description: 'Sort the items in a matrix. Compare can be a string "asc", "desc", "natural", or a custom sort function.',
          examples: ["sort([5, 10, 1])", 'sort(["C", "B", "A", "D"])', "sortByLength(a, b) = size(a)[1] - size(b)[1]", 'sort(["Langdon", "Tom", "Sara"], sortByLength)', 'sort(["10", "1", "2"], "natural")'],
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
          examples: ["compareNatural(2, 3)", "compareNatural(3, 2)", "compareNatural(2, 2)", "compareNatural(5cm, 40mm)", 'compareNatural("2", "10")', "compareNatural(2 + 3i, 2 + 4i)", "compareNatural([1, 2, 4], [1, 2, 3])", "compareNatural([1, 5], [1, 2, 3])", "compareNatural([1, 2], [1, 2])", "compareNatural({a: 2}, {a: 4})"],
          seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare", "compareText"]
        },
        compareText: {
          name: "compareText",
          category: "Relational",
          syntax: ["compareText(x, y)"],
          description: "Compare two strings lexically. Comparison is case sensitive. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
          examples: ['compareText("B", "A")', 'compareText("A", "B")', 'compareText("A", "A")', 'compareText("2", "10")', 'compare("2", "10")', "compare(2, 10)", 'compareNatural("2", "10")', 'compareText("B", ["A", "B", "C"])'],
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
          examples: ['equalText("Hello", "Hello")', 'equalText("a", "A")', 'equal("2e3", "2000")', 'equalText("2e3", "2000")', 'equalText("B", ["A", "B", "C"])'],
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
          description: 'Count the number of elements of a (multi)set. When the second parameter "unique" is true, count only the unique values. A multi-dimension array will be converted to a single-dimension array before the operation.',
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
          description: 'Compute the standard deviation of all values, defined as std(A) = sqrt(variance(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
          examples: ["std(2, 4, 6)", "std([2, 4, 6, 8])", 'std([2, 4, 6, 8], "uncorrected")', 'std([2, 4, 6, 8], "biased")', "std([1, 2, 3; 4, 5, 6])"],
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
        variance: Ds,
        var: Ds,
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
          examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", 'clone("hello world")'],
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
          examples: ["isNumeric(2)", 'isNumeric("2")', 'hasNumericValue("2")', "isNumeric(0)", "isNumeric(bignumber(500))", "isNumeric(fraction(0.125))", "isNumeric(2 + 3i)", 'isNumeric([2.3, "foo", false])'],
          seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "hasNumericValue"]
        },
        hasNumericValue: {
          name: "hasNumericValue",
          category: "Utils",
          syntax: ["hasNumericValue(x)"],
          description: "Test whether a value is an numeric value. In case of a string, true is returned if the string contains a numeric value.",
          examples: ["hasNumericValue(2)", 'hasNumericValue("2")', 'isNumeric("2")', "hasNumericValue(0)", "hasNumericValue(bignumber(500))", "hasNumericValue(fraction(0.125))", "hasNumericValue(2 + 3i)", 'hasNumericValue([2.3, "foo", false])'],
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
        typeOf: qs,
        typeof: qs,
        numeric: {
          name: "numeric",
          category: "Utils",
          syntax: ["numeric(x)"],
          description: "Convert a numeric input to a specific numeric type: number, BigNumber, or Fraction.",
          examples: ['numeric("4")', 'numeric("4", "number")', 'numeric("4", "BigNumber")', 'numeric("4", "Fraction)', 'numeric(4, "Fraction")', 'numeric(fraction(2, 5), "number)'],
          seealso: ["number", "fraction", "bignumber", "string", "format"]
        }
      },
      Ps = Object(Dt.a)("help", ["typed", "mathWithTransform", "Help"], function (e) {
        var t = e.typed,
          r = e.mathWithTransform,
          n = e.Help;
        return t("help", {
          any: function (e) {
            var t, i = e;
            if ("string" != typeof e)
              for (t in r)
                if (r.hasOwnProperty(t) && e === r[t]) {
                  i = t;
                  break
                } var a = be(Rs, i);
            if (!a) {
              var o = "function" == typeof i ? i.name : i;
              throw new Error('No documentation found on "' + o + '"')
            }
            return new n(a)
          }
        })
      }),
      Fs = Object(Dt.a)("chain", ["typed", "Chain"], function (e) {
        var t = e.typed,
          r = e.Chain;
        return t("chain", {
          "": function () {
            return new r
          },
          any: function (e) {
            return new r(e)
          }
        })
      }),
      Us = Object(Dt.a)("det", ["typed", "matrix", "subtract", "multiply", "unaryMinus", "lup"], function (e) {
        function t(e, t) {
          if (1 === t) return Object(er.a)(e[0][0]);
          if (2 === t) return i(a(e[0][0], e[1][1]), a(e[1][0], e[0][1]));
          for (var r = s(e), n = r.U[0][0], u = 1; u < t; u++) n = a(n, r.U[u][u]);
          for (var c = 0, f = 0, l = [];;) {
            for (; l[f];) f++;
            if (f >= t) break;
            for (var p = f, m = 0; !l[r.p[p]];) l[r.p[p]] = !0, p = r.p[p], m++;
            0 == m % 2 && c++
          }
          return 0 == c % 2 ? n : o(n)
        }
        var r = e.typed,
          n = e.matrix,
          i = e.subtract,
          a = e.multiply,
          o = e.unaryMinus,
          s = e.lup;
        return r("det", {
          any: function (e) {
            return Object(er.a)(e)
          },
          "Array | Matrix": function (e) {
            var r;
            switch (Object(qt.v)(e) ? r = e.size() : Array.isArray(e) ? r = (e = n(e)).size() : r = [], r.length) {
              case 0:
                return Object(er.a)(e);
              case 1:
                if (1 === r[0]) return Object(er.a)(e.valueOf()[0]);
                throw new RangeError("Matrix must be square (size: " + Object(Kt.d)(r) + ")");
              case 2:
                var i = r[0],
                  a = r[1];
                if (i === a) return t(e.clone().valueOf(), i);
                throw new RangeError("Matrix must be square (size: " + Object(Kt.d)(r) + ")");
              default:
                throw new RangeError("Matrix must be two dimensional (size: " + Object(Kt.d)(r) + ")")
            }
          }
        })
      }),
      Ls = Object(Dt.a)("inv", ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"], function (e) {
        function t(e, t, r) {
          var n, l, p, m, h;
          if (1 === t) {
            if (0 === (m = e[0][0])) throw Error("Cannot calculate inverse, determinant is zero");
            return [
              [i(1, m)]
            ]
          }
          if (2 === t) {
            var d = u(e);
            if (0 === d) throw Error("Cannot calculate inverse, determinant is zero");
            return [
              [i(e[1][1], d), i(s(e[0][1]), d)],
              [i(s(e[1][0]), d), i(e[0][0], d)]
            ]
          }
          var y = e.concat();
          for (n = 0; n < t; n++) y[n] = y[n].concat();
          for (var g = c(t).valueOf(), b = 0; b < r; b++) {
            var v = f(y[b][b]),
              x = b;
            for (n = b + 1; n < t;) f(y[n][b]) > v && (v = f(y[n][b]), x = n), n++;
            if (0 === v) throw Error("Cannot calculate inverse, determinant is zero");
            (n = x) !== b && (h = y[b], y[b] = y[n], y[n] = h, h = g[b], g[b] = g[n], g[n] = h);
            var w = y[b],
              N = g[b];
            for (n = 0; n < t; n++) {
              var O = y[n],
                M = g[n];
              if (n === b) {
                for (p = w[b], l = b; l < r; l++) O[l] = i(O[l], p);
                for (l = 0; l < r; l++) M[l] = i(M[l], p)
              } else if (0 !== O[b]) {
                for (p = i(s(O[b]), w[b]), l = b; l < r; l++) O[l] = a(O[l], o(p, w[l]));
                for (l = 0; l < r; l++) M[l] = a(M[l], o(p, N[l]))
              }
            }
          }
          return g
        }
        var r = e.typed,
          n = e.matrix,
          i = e.divideScalar,
          a = e.addScalar,
          o = e.multiply,
          s = e.unaryMinus,
          u = e.det,
          c = e.identity,
          f = e.abs;
        return r("inv", {
          "Array | Matrix": function (e) {
            var r = Object(qt.v)(e) ? e.size() : Object(Qt.a)(e);
            switch (r.length) {
              case 1:
                if (1 === r[0]) return Object(qt.v)(e) ? n([i(1, e.valueOf()[0])]) : [i(1, e[0])];
                throw new RangeError("Matrix must be square (size: " + Object(Kt.d)(r) + ")");
              case 2:
                var a = r[0],
                  o = r[1];
                if (a === o) return Object(qt.v)(e) ? n(t(e.valueOf(), a, o), e.storage()) : t(e, a, o);
                throw new RangeError("Matrix must be square (size: " + Object(Kt.d)(r) + ")");
              default:
                throw new RangeError("Matrix must be two dimensional (size: " + Object(Kt.d)(r) + ")")
            }
          },
          any: function (e) {
            return i(1, e)
          }
        })
      }),
      Hs = Object(Dt.a)("expm", ["typed", "abs", "add", "identity", "inv", "multiply"], function (e) {
        function t(e) {
          for (var t, r = e.size()[0], n = 0, i = 0; i < r; i++) {
            t = 0;
            for (var o = 0; o < r; o++) t += a(e.get([i, o]));
            n = Math.max(t, n)
          }
          return n
        }

        function r(e, t) {
          for (var r = 0; r < 30; r++)
            for (var i, a = 0; a <= r; a++)
              if (n(e, a, i = r - a) < t) return {
                q: a,
                j: i
              };
          throw new Error("Could not find acceptable parameters to compute the matrix exponential (try increasing maxSearchSize in expm.js)")
        }

        function n(e, t, r) {
          for (var n = 1, i = 2; i <= t; i++) n *= i;
          for (var a = n, o = t + 1; o <= 2 * t; o++) a *= o;
          var s = a * (2 * t + 1);
          return 8 * Math.pow(e / Math.pow(2, r), 2 * t) * n * n / (a * s)
        }
        var i = e.typed,
          a = e.abs,
          o = e.add,
          s = e.identity,
          u = e.inv,
          c = e.multiply;
        return i("expm", {
          Matrix: function (e) {
            var n = e.size();
            if (2 !== n.length || n[0] !== n[1]) throw new RangeError("Matrix must be square (size: " + Object(Kt.d)(n) + ")");
            for (var i = n[0], a = r(t(e), 1e-15), f = a.q, l = a.j, p = c(e, Math.pow(2, -l)), m = s(i), h = s(i), d = 1, y = p, g = -1, b = 1; b <= f; b++) 1 < b && (y = c(y, p), g = -g), m = o(m, c(d = d * (f - b + 1) / ((2 * f - b + 1) * b), y)), h = o(h, c(d * g, y));
            for (var v = c(u(h), m), x = 0; x < l; x++) v = c(v, v);
            return Object(qt.H)(e) ? e.createSparseMatrix(v) : v
          }
        })
      }),
      $s = Object(Dt.a)("sqrtm", ["typed", "abs", "add", "multiply", "sqrt", "subtract", "inv", "size", "max", "identity"], function (e) {
        function t(e) {
          var t, r = 0,
            o = e,
            p = l(c(e));
          do {
            var h = o;
            if (o = a(.5, i(h, u(p))), p = a(.5, i(p, u(h))), (t = f(n(s(o, h)))) > m && 1e3 < ++r) throw new Error("computing square root of matrix: iterative method could not converge")
          } while (t > m);
          return o
        }
        var r = e.typed,
          n = e.abs,
          i = e.add,
          a = e.multiply,
          o = e.sqrt,
          s = e.subtract,
          u = e.inv,
          c = e.size,
          f = e.max,
          l = e.identity,
          p = r("sqrtm", {
            "Array | Matrix": function (e) {
              var r = Object(qt.v)(e) ? e.size() : Object(Qt.a)(e);
              switch (r.length) {
                case 1:
                  if (1 === r[0]) return o(e);
                  throw new RangeError("Matrix must be square (size: " + Object(Kt.d)(r) + ")");
                case 2:
                  if (r[0] === r[1]) return t(e);
                  throw new RangeError("Matrix must be square (size: " + Object(Kt.d)(r) + ")")
              }
            }
          }),
          m = 1e-6;
        return p
      }),
      Gs = Object(Dt.a)("divide", ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.multiply,
          i = e.equalScalar,
          a = e.divideScalar,
          o = e.inv,
          s = nn({
            typed: t,
            equalScalar: i
          }),
          u = Kr({
            typed: t
          });
        return t("divide", Object(er.e)({
          "Array | Matrix, Array | Matrix": function (e, t) {
            return n(e, o(t))
          },
          "DenseMatrix, any": function (e, t) {
            return u(e, t, a, !1)
          },
          "SparseMatrix, any": function (e, t) {
            return s(e, t, a, !1)
          },
          "Array, any": function (e, t) {
            return u(r(e), t, a, !1).valueOf()
          },
          "any, Array | Matrix": function (e, t) {
            return n(e, o(t))
          }
        }, a.signatures))
      }),
      Zs = "distance",
      Vs = Object(Dt.a)(Zs, ["typed", "addScalar", "subtract", "divideScalar", "multiplyScalar", "unaryMinus", "sqrt", "abs"], function (e) {
        function t(e) {
          return "number" == typeof e || Object(qt.e)(e)
        }

        function r(e) {
          return e.constructor !== Array && (e = a(e)), t(e[0]) && t(e[1])
        }

        function n(e) {
          return e.constructor !== Array && (e = a(e)), t(e[0]) && t(e[1]) && t(e[2])
        }

        function i(e) {
          return e.constructor !== Array && (e = a(e)), t(e[0]) && t(e[1]) && t(e[2]) && t(e[3]) && t(e[4]) && t(e[5])
        }

        function a(e) {
          for (var t = Object.keys(e), r = [], n = 0; n < t.length; n++) r.push(e[t[n]]);
          return r
        }

        function o(e, t, r, n, i) {
          var a = g(l(l(m(r, e), m(n, t)), i)),
            o = y(l(m(r, r), m(n, n)));
          return h(a, o)
        }

        function s(e, t, r, n, i, a, o, s, u) {
          var c = [p(m(p(i, t), u), m(p(a, r), s)), p(m(p(a, r), o), m(p(n, e), u)), p(m(p(n, e), s), m(p(i, t), o))];
          c = y(l(l(m(c[0], c[0]), m(c[1], c[1])), m(c[2], c[2])));
          var f = y(l(l(m(o, o), m(s, s)), m(u, u)));
          return h(c, f)
        }

        function u(e, t, r, n) {
          var i = p(n, t),
            a = p(r, e),
            o = l(m(i, i), m(a, a));
          return y(o)
        }

        function c(e, t, r, n, i, a) {
          var o = p(a, r),
            s = p(i, t),
            u = p(n, e),
            c = l(l(m(o, o), m(s, s)), m(u, u));
          return y(c)
        }
        var f = e.typed,
          l = e.addScalar,
          p = e.subtract,
          m = e.multiplyScalar,
          h = e.divideScalar,
          d = e.unaryMinus,
          y = e.sqrt,
          g = e.abs;
        return f(Zs, {
          "Array, Array, Array": function (e, t, n) {
            if (2 === e.length && 2 === t.length && 2 === n.length) {
              if (!r(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
              if (!r(t)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
              if (!r(n)) throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
              var i = h(p(n[1], n[0]), p(t[1], t[0])),
                a = m(m(i, i), t[0]),
                s = d(m(i, t[0])),
                u = e[1];
              return o(e[0], e[1], a, s, u)
            }
            throw new TypeError("Invalid Arguments: Try again")
          },
          "Object, Object, Object": function (e, t, n) {
            if (2 === Object.keys(e).length && 2 === Object.keys(t).length && 2 === Object.keys(n).length) {
              if (!r(e)) throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
              if (!r(t)) throw new TypeError("Values of lineOnePtX and lineOnePtY should be numbers or BigNumbers");
              if (!r(n)) throw new TypeError("Values of lineTwoPtX and lineTwoPtY should be numbers or BigNumbers");
              if (e.hasOwnProperty("pointX") && e.hasOwnProperty("pointY") && t.hasOwnProperty("lineOnePtX") && t.hasOwnProperty("lineOnePtY") && n.hasOwnProperty("lineTwoPtX") && n.hasOwnProperty("lineTwoPtY")) {
                var i = h(p(n.lineTwoPtY, n.lineTwoPtX), p(t.lineOnePtY, t.lineOnePtX)),
                  a = m(m(i, i), t.lineOnePtX),
                  s = d(m(i, t.lineOnePtX)),
                  u = e.pointX;
                return o(e.pointX, e.pointY, a, s, u)
              }
              throw new TypeError("Key names do not match")
            }
            throw new TypeError("Invalid Arguments: Try again")
          },
          "Array, Array": function (e, t) {
            if (2 === e.length && 3 === t.length) {
              if (!r(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
              if (!n(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
              return o(e[0], e[1], t[0], t[1], t[2])
            }
            if (3 === e.length && 6 === t.length) {
              if (!n(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
              if (!i(t)) throw new TypeError("Array with 6 numbers or BigNumbers expected for second argument");
              return s(e[0], e[1], e[2], t[0], t[1], t[2], t[3], t[4], t[5])
            }
            if (2 === e.length && 2 === t.length) {
              if (!r(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
              if (!r(t)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
              return u(e[0], e[1], t[0], t[1])
            }
            if (3 === e.length && 3 === t.length) {
              if (!n(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
              if (!n(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
              return c(e[0], e[1], e[2], t[0], t[1], t[2])
            }
            throw new TypeError("Invalid Arguments: Try again")
          },
          "Object, Object": function (e, t) {
            if (2 === Object.keys(e).length && 3 === Object.keys(t).length) {
              if (!r(e)) throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
              if (!n(t)) throw new TypeError("Values of xCoeffLine, yCoeffLine and constant should be numbers or BigNumbers");
              if (e.hasOwnProperty("pointX") && e.hasOwnProperty("pointY") && t.hasOwnProperty("xCoeffLine") && t.hasOwnProperty("yCoeffLine") && t.hasOwnProperty("constant")) return o(e.pointX, e.pointY, t.xCoeffLine, t.yCoeffLine, t.constant);
              throw new TypeError("Key names do not match")
            }
            if (3 === Object.keys(e).length && 6 === Object.keys(t).length) {
              if (!n(e)) throw new TypeError("Values of pointX, pointY and pointZ should be numbers or BigNumbers");
              if (!i(t)) throw new TypeError("Values of x0, y0, z0, a, b and c should be numbers or BigNumbers");
              if (e.hasOwnProperty("pointX") && e.hasOwnProperty("pointY") && t.hasOwnProperty("x0") && t.hasOwnProperty("y0") && t.hasOwnProperty("z0") && t.hasOwnProperty("a") && t.hasOwnProperty("b") && t.hasOwnProperty("c")) return s(e.pointX, e.pointY, e.pointZ, t.x0, t.y0, t.z0, t.a, t.b, t.c);
              throw new TypeError("Key names do not match")
            }
            if (2 === Object.keys(e).length && 2 === Object.keys(t).length) {
              if (!r(e)) throw new TypeError("Values of pointOneX and pointOneY should be numbers or BigNumbers");
              if (!r(t)) throw new TypeError("Values of pointTwoX and pointTwoY should be numbers or BigNumbers");
              if (e.hasOwnProperty("pointOneX") && e.hasOwnProperty("pointOneY") && t.hasOwnProperty("pointTwoX") && t.hasOwnProperty("pointTwoY")) return u(e.pointOneX, e.pointOneY, t.pointTwoX, t.pointTwoY);
              throw new TypeError("Key names do not match")
            }
            if (3 === Object.keys(e).length && 3 === Object.keys(t).length) {
              if (!n(e)) throw new TypeError("Values of pointOneX, pointOneY and pointOneZ should be numbers or BigNumbers");
              if (!n(t)) throw new TypeError("Values of pointTwoX, pointTwoY and pointTwoZ should be numbers or BigNumbers");
              if (e.hasOwnProperty("pointOneX") && e.hasOwnProperty("pointOneY") && e.hasOwnProperty("pointOneZ") && t.hasOwnProperty("pointTwoX") && t.hasOwnProperty("pointTwoY") && t.hasOwnProperty("pointTwoZ")) return c(e.pointOneX, e.pointOneY, e.pointOneZ, t.pointTwoX, t.pointTwoY, t.pointTwoZ);
              throw new TypeError("Key names do not match")
            }
            throw new TypeError("Invalid Arguments: Try again")
          },
          Array: function (e) {
            if (! function (e) {
                if (2 === e[0].length && t(e[0][0]) && t(e[0][1])) {
                  if (e.some(function (e) {
                      return 2 !== e.length || !t(e[0]) || !t(e[1])
                    })) return !1
                } else {
                  if (!(3 === e[0].length && t(e[0][0]) && t(e[0][1]) && t(e[0][2]))) return !1;
                  if (e.some(function (e) {
                      return 3 !== e.length || !t(e[0]) || !t(e[1]) || !t(e[2])
                    })) return !1
                }
                return !0
              }(e)) throw new TypeError("Incorrect array format entered for pairwise distance calculation");
            return function (e) {
              for (var t = [], r = 0; r < e.length - 1; r++)
                for (var n = r + 1; n < e.length; n++) 2 === e[0].length ? t.push(u(e[r][0], e[r][1], e[n][0], e[n][1])) : 3 === e[0].length && t.push(c(e[r][0], e[r][1], e[r][2], e[n][0], e[n][1], e[n][2]));
              return t
            }(e)
          }
        })
      }),
      Js = Object(Dt.a)("intersect", ["typed", "config", "abs", "add", "addScalar", "matrix", "multiply", "multiplyScalar", "divideScalar", "subtract", "smaller", "equalScalar"], function (e) {
        function t(e) {
          return "number" == typeof e || Object(qt.e)(e)
        }

        function r(e) {
          return 2 === e.length && t(e[0]) && t(e[1])
        }

        function n(e) {
          return 3 === e.length && t(e[0]) && t(e[1]) && t(e[2])
        }

        function i(e) {
          return 4 === e.length && t(e[0]) && t(e[1]) && t(e[2]) && t(e[3])
        }

        function a(e, t, r, n, i, a, o, s, u, c, f, p) {
          var m = h(y(e, t), y(r, n)),
            d = h(y(i, a), y(o, s)),
            g = h(y(u, c), y(f, p));
          return l(l(m, d), g)
        }

        function o(e, t, r, n, i, o, s, u, c, f, p, m) {
          var g = a(e, s, f, s, t, u, p, u, r, c, m, c),
            v = a(f, s, n, e, p, u, i, t, m, c, o, r),
            x = a(e, s, n, e, t, u, i, t, r, c, o, r),
            w = a(f, s, f, s, p, u, p, u, m, c, m, c),
            N = a(n, e, n, e, i, t, i, t, o, r, o, r),
            O = d(y(h(g, v), h(x, w)), y(h(N, w), h(v, v))),
            M = d(l(g, h(O, v)), w),
            E = l(e, h(O, y(n, e))),
            j = l(t, h(O, y(i, t))),
            S = l(r, h(O, y(o, r))),
            A = l(s, h(M, y(f, s))),
            C = l(u, h(M, y(p, u))),
            T = l(c, h(M, y(m, c)));
          return b(E, A) && b(j, C) && b(S, T) ? [E, j, S] : null
        }
        var s = e.typed,
          u = e.config,
          c = e.abs,
          f = e.add,
          l = e.addScalar,
          p = e.matrix,
          m = e.multiply,
          h = e.multiplyScalar,
          d = e.divideScalar,
          y = e.subtract,
          g = e.smaller,
          b = e.equalScalar,
          v = s("intersect", {
            "Array, Array, Array": function (e, t, r) {
              if (!n(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
              if (!n(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
              if (!i(r)) throw new TypeError("Array with 4 numbers expected as third argument");
              return function (e, t, r, n, i, a, o, s, u, c) {
                var f = h(e, o),
                  p = h(n, o),
                  m = h(t, s),
                  g = h(i, s),
                  b = h(r, u),
                  v = h(a, u),
                  x = d(y(y(y(c, f), m), b), y(y(y(l(l(p, g), v), f), m), b));
                return [l(e, h(x, y(n, e))), l(t, h(x, y(i, t))), l(r, h(x, y(a, r)))]
              }(e[0], e[1], e[2], t[0], t[1], t[2], r[0], r[1], r[2], r[3])
            },
            "Array, Array, Array, Array": function (e, t, i, a) {
              if (2 === e.length) {
                if (!r(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
                if (!r(t)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
                if (!r(i)) throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
                if (!r(a)) throw new TypeError("Array with 2 numbers or BigNumbers expected for fourth argument");
                return function (e, t, r, n) {
                  var i = e,
                    a = r,
                    o = y(i, t),
                    s = y(a, n),
                    p = y(h(o[0], s[1]), h(s[0], o[1]));
                  if (g(c(p), u.epsilon)) return null;
                  var b = h(s[0], i[1]),
                    v = h(s[1], i[0]),
                    x = h(s[0], a[1]),
                    w = h(s[1], a[0]),
                    N = d(l(y(y(b, v), x), w), p);
                  return f(m(o, N), i)
                }(e, t, i, a)
              }
              if (3 === e.length) {
                if (!n(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
                if (!n(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
                if (!n(i)) throw new TypeError("Array with 3 numbers or BigNumbers expected for third argument");
                if (!n(a)) throw new TypeError("Array with 3 numbers or BigNumbers expected for fourth argument");
                return o(e[0], e[1], e[2], t[0], t[1], t[2], i[0], i[1], i[2], a[0], a[1], a[2])
              }
              throw new TypeError("Arrays with two or thee dimensional points expected")
            },
            "Matrix, Matrix, Matrix": function (e, t, r) {
              return p(v(e.valueOf(), t.valueOf(), r.valueOf()))
            },
            "Matrix, Matrix, Matrix, Matrix": function (e, t, r, n) {
              return p(v(e.valueOf(), t.valueOf(), r.valueOf(), n.valueOf()))
            }
          });
        return v
      }),
      Ws = Object(Dt.a)("sum", ["typed", "config", "add", "?bignumber", "?fraction"], function (e) {
        function t(e) {
          var t;
          if (u(e, function (e) {
              try {
                t = void 0 === t ? e : i(t, e)
              } catch (t) {
                throw Se(t, "sum", e)
              }
            }), void 0 === t) switch (n.number) {
            case "number":
              return 0;
            case "BigNumber":
              return a ? a(0) : he();
            case "Fraction":
              return o ? o(0) : de();
            default:
              return 0
          }
          return t
        }
        var r = e.typed,
          n = e.config,
          i = e.add,
          a = e.bignumber,
          o = e.fraction;
        return r("sum", {
          "Array | Matrix": t,
          "Array | Matrix, number | BigNumber": function (e, t) {
            try {
              return f(e, t, i)
            } catch (e) {
              throw Se(e, "sum")
            }
          },
          "...": function (e) {
            if (s(e)) throw new TypeError("Scalar values expected in function sum");
            return t(e)
          }
        })
      }),
      Ys = Object(Dt.a)("mean", ["typed", "add", "divide"], function (e) {
        function t(e) {
          var t = 0,
            r = 0;
          if (u(e, function (e) {
              try {
                t = n(t, e), r++
              } catch (t) {
                throw Se(t, "mean", e)
              }
            }), 0 === r) throw new Error("Cannot calculate mean of an empty array");
          return i(t, r)
        }
        var r = e.typed,
          n = e.add,
          i = e.divide;
        return r("mean", {
          "Array | Matrix": t,
          "Array | Matrix, number | BigNumber": function (e, t) {
            try {
              var r = f(e, t, n),
                a = Array.isArray(e) ? Object(Qt.a)(e) : e.size();
              return i(r, a[t])
            } catch (e) {
              throw Se(e, "mean")
            }
          },
          "...": function (e) {
            if (s(e)) throw new TypeError("Scalar values expected in function mean");
            return t(e)
          }
        })
      }),
      Xs = Object(Dt.a)("median", ["typed", "add", "divide", "compare", "partitionSelect"], function (e) {
        function t(e) {
          try {
            var t = (e = Object(Qt.e)(e.valueOf())).length;
            if (0 === t) throw new Error("Cannot calculate median of an empty array");
            if (0 == t % 2) {
              for (var r = t / 2 - 1, n = o(e, r + 1), i = e[r], s = 0; s < r; ++s) 0 < a(e[s], i) && (i = e[s]);
              return f(i, n)
            }
            var u = o(e, (t - 1) / 2);
            return c(u)
          } catch (e) {
            throw Se(e, "median")
          }
        }
        var r = e.typed,
          n = e.add,
          i = e.divide,
          a = e.compare,
          o = e.partitionSelect,
          u = r("median", {
            "Array | Matrix": t,
            "Array | Matrix, number | BigNumber": function () {
              throw new Error("median(A, dim) is not yet supported")
            },
            "...": function (e) {
              if (s(e)) throw new TypeError("Scalar values expected in function median");
              return t(e)
            }
          }),
          c = r({
            "number | BigNumber | Complex | Unit": function (e) {
              return e
            }
          }),
          f = r({
            "number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit": function (e, t) {
              return i(n(e, t), 2)
            }
          });
        return u
      }),
      Qs = Object(Dt.a)("mad", ["typed", "abs", "map", "median", "subtract"], function (e) {
        function t(e) {
          if (0 === (e = Object(Qt.e)(e.valueOf())).length) throw new Error("Cannot calculate median absolute deviation (mad) of an empty array");
          try {
            var t = a(e);
            return a(i(e, function (e) {
              return n(o(e, t))
            }))
          } catch (e) {
            throw e instanceof TypeError && -1 !== e.message.indexOf("median") ? new TypeError(e.message.replace("median", "mad")) : Se(e, "mad")
          }
        }
        var r = e.typed,
          n = e.abs,
          i = e.map,
          a = e.median,
          o = e.subtract;
        return r("mad", {
          "Array | Matrix": t,
          "...": function (e) {
            return t(e)
          }
        })
      }),
      Ks = "unbiased",
      eu = "variance",
      tu = Object(Dt.a)(eu, ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"], function (e) {
        function t(e, t) {
          var r = 0,
            n = 0;
          if (0 === e.length) throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
          if (u(e, function (e) {
              try {
                r = i(r, e), n++
              } catch (t) {
                throw Se(t, "variance", e)
              }
            }), 0 === n) throw new Error("Cannot calculate variance of an empty array");
          var c = s(r, n);
          if (r = 0, u(e, function (e) {
              var t = a(e, c);
              r = i(r, o(t, t))
            }), f(r)) return r;
          switch (t) {
            case "uncorrected":
              return s(r, n);
            case "biased":
              return s(r, n + 1);
            case "unbiased":
              var l = Object(qt.e)(r) ? r.mul(0) : 0;
              return 1 === n ? l : s(r, n - 1);
            default:
              throw new Error('Unknown normalization "' + t + '". Choose "unbiased" (default), "uncorrected", or "biased".')
          }
        }

        function r(e, r, n) {
          try {
            if (0 === e.length) throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
            return c(e, r, function (e) {
              return t(e, n)
            })
          } catch (e) {
            throw Se(e, "variance")
          }
        }
        var n = e.typed,
          i = e.add,
          a = e.subtract,
          o = e.multiply,
          s = e.divide,
          c = e.apply,
          f = e.isNaN;
        return n(eu, {
          "Array | Matrix": function (e) {
            return t(e, Ks)
          },
          "Array | Matrix, string": t,
          "Array | Matrix, number | BigNumber": function (e, t) {
            return r(e, t, Ks)
          },
          "Array | Matrix, number | BigNumber, string": r,
          "...": function (e) {
            return t(e, Ks)
          }
        })
      }),
      ru = Object(Dt.a)("var", ["variance"], function (e) {
        var t = e.variance;
        return function () {
          Object(gr.a)('Function "var" has been renamed to "variance" in v6.0.0, please use the new function instead.');
          for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
          return t.apply(t, r)
        }
      }),
      nu = Object(Dt.a)("quantileSeq", ["typed", "add", "multiply", "partitionSelect", "compare"], function (e) {
        function t(e, t, r) {
          var u = Object(Qt.e)(e),
            c = u.length;
          if (0 === c) throw new Error("Cannot calculate quantile of an empty sequence");
          if (Object(qt.y)(t)) {
            var f = t * (c - 1),
              l = f % 1;
            if (0 === l) {
              var p = r ? u[f] : a(u, f);
              return s(p), p
            }
            var m, h, d = Math.floor(f);
            if (r) m = u[d], h = u[d + 1];
            else {
              h = a(u, d + 1), m = u[d];
              for (var y = 0; y < d; ++y) 0 < o(u[y], m) && (m = u[y])
            }
            return s(m), s(h), n(i(m, 1 - l), i(h, l))
          }
          var g = t.times(c - 1);
          if (g.isInteger()) {
            g = g.toNumber();
            var b = r ? u[g] : a(u, g);
            return s(b), b
          }
          var v, x, w = g.floor(),
            N = g.minus(w),
            O = w.toNumber();
          if (r) v = u[O], x = u[O + 1];
          else {
            x = a(u, O + 1), v = u[O];
            for (var M = 0; M < O; ++M) 0 < o(u[M], v) && (v = u[M])
          }
          s(v), s(x);
          var E = new N.constructor(1);
          return n(i(v, E.minus(N)), i(x, N))
        }
        var r = e.typed,
          n = e.add,
          i = e.multiply,
          a = e.partitionSelect,
          o = e.compare,
          s = r({
            "number | BigNumber | Unit": function (e) {
              return e
            }
          });
        return function (e, r, n) {
          var i, a, o;
          if (2 > arguments.length || 3 < arguments.length) throw new SyntaxError("Function quantileSeq requires two or three parameters");
          if (Object(qt.i)(e)) {
            if ("boolean" == typeof (n = n || !1)) {
              if (a = e.valueOf(), Object(qt.y)(r)) {
                if (0 > r) throw new Error("N/prob must be non-negative");
                if (1 >= r) return t(a, r, n);
                if (1 < r) {
                  if (!Object(zt.i)(r)) throw new Error("N must be a positive integer");
                  i = Array(r);
                  for (var s = 0; s < r;) i[s] = t(a, ++s / (r + 1), n);
                  return i
                }
              }
              if (Object(qt.e)(r)) {
                var u = r.constructor;
                if (r.isNegative()) throw new Error("N/prob must be non-negative");
                if (o = new u(1), r.lte(o)) return new u(t(a, r, n));
                if (r.gt(o)) {
                  if (!r.isInteger()) throw new Error("N must be a positive integer");
                  var c = r.toNumber();
                  if (4294967295 < c) throw new Error("N must be less than or equal to 2^32-1, as that is the maximum length of an Array");
                  var f = new u(c + 1);
                  i = Array(c);
                  for (var l = 0; l < c;) i[l] = new u(t(a, new u(++l).div(f), n));
                  return i
                }
              }
              if (Array.isArray(r)) {
                i = Array(r.length);
                for (var p, m = 0; m < i.length; ++m) {
                  if (p = r[m], Object(qt.y)(p)) {
                    if (0 > p || 1 < p) throw new Error("Probability must be between 0 and 1, inclusive")
                  } else {
                    if (!Object(qt.e)(p)) throw new TypeError("Unexpected type of argument in function quantileSeq");
                    if (o = new p.constructor(1), p.isNegative() || p.gt(o)) throw new Error("Probability must be between 0 and 1, inclusive")
                  }
                  i[m] = t(a, p, n)
                }
                return i
              }
              throw new TypeError("Unexpected type of argument in function quantileSeq")
            }
            throw new TypeError("Unexpected type of argument in function quantileSeq")
          }
          throw new TypeError("Unexpected type of argument in function quantileSeq")
        }
      }),
      iu = Object(Dt.a)("std", ["typed", "sqrt", "variance"], function (e) {
        function t(e) {
          if (0 === e.length) throw new SyntaxError("Function std requires one or more parameters (0 provided)");
          try {
            return n(i.apply(null, arguments))
          } catch (e) {
            throw e instanceof TypeError && -1 !== e.message.indexOf(" variance") ? new TypeError(e.message.replace(" variance", " std")) : e
          }
        }
        var r = e.typed,
          n = e.sqrt,
          i = e.variance;
        return r("std", {
          "Array | Matrix": t,
          "Array | Matrix, string": t,
          "Array | Matrix, number | BigNumber": t,
          "Array | Matrix, number | BigNumber, string": t,
          "...": function (e) {
            return t(e)
          }
        })
      });
    xt.signature = "number, number";
    var au = Object(Dt.a)("combinations", ["typed"], function (e) {
      return (0, e.typed)("combinations", {
        "number, number": xt,
        "BigNumber, BigNumber": function (e, t) {
          var r, n, i, a, o = new(0, e.constructor)(1);
          if (!wt(e) || !wt(t)) throw new TypeError("Positive integer value expected in function combinations");
          if (t.gt(e)) throw new TypeError("k must be less than n in function combinations");
          for (r = e.minus(t), t.lt(r) && (r = t), n = o, i = o, a = e.minus(r); i.lte(a); i = i.plus(1)) n = n.times(r.plus(i)).dividedBy(i);
          return n
        }
      })
    });
    Nt.signature = "number";
    var ou = 4.7421875,
      su = [.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, .0001580887032249125, -.00021026444172410488, .00021743961811521265, -.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22],
      uu = Object(Dt.a)("gamma", ["typed", "config", "multiplyScalar", "pow", "BigNumber", "Complex"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.multiplyScalar,
          i = e.pow,
          a = e.BigNumber,
          o = e.Complex,
          s = t("gamma", {
            number: Nt,
            Complex: function (e) {
              var t, r;
              if (0 === e.im) return s(e.re);
              e = new o(e.re - 1, e.im), r = new o(su[0], 0);
              for (var a = 1; a < su.length; ++a) {
                var u = e.re + a,
                  c = u * u + e.im * e.im;
                0 === c ? r.re = 0 > su[a] ? -1 / 0 : 1 / 0 : (r.re += su[a] * u / c, r.im += -su[a] * e.im / c)
              }
              t = new o(e.re + ou + .5, e.im);
              var f = Math.sqrt(2 * Math.PI);
              e.re += .5;
              var l = i(t, e);
              0 === l.im ? l.re *= f : 0 === l.re ? l.im *= f : (l.re *= f, l.im *= f);
              var p = Math.exp(-t.re);
              return t.re = p * Math.cos(-t.im), t.im = p * Math.sin(-t.im), n(n(l, t), r)
            },
            BigNumber: function (e) {
              if (e.isInteger()) return e.isNegative() || e.isZero() ? new a(1 / 0) : function (e) {
                if (e.isZero()) return new a(1);
                for (var t = r.precision + (0 | Math.log(e.toNumber())), n = new(a.clone({
                    precision: t
                  }))(e), i = e.toNumber() - 1; 1 < i;) n = n.times(i), i--;
                return new a(n.toPrecision(a.precision))
              }(e.minus(1));
              if (!e.isFinite()) return new a(e.isNegative() ? NaN : 1 / 0);
              throw new Error("Integer BigNumber expected")
            },
            "Array | Matrix": function (e) {
              return c(e, s)
            }
          });
        return s
      }),
      cu = "factorial",
      fu = Object(Dt.a)(cu, ["typed", "gamma"], function (e) {
        var t = e.typed,
          r = e.gamma,
          n = t(cu, {
            number: function (e) {
              if (0 > e) throw new Error("Value must be non-negative");
              return r(e + 1)
            },
            BigNumber: function (e) {
              if (e.isNegative()) throw new Error("Value must be non-negative");
              return r(e.plus(1))
            },
            "Array | Matrix": function (e) {
              return c(e, n)
            }
          });
        return n
      }),
      lu = "kldivergence",
      pu = Object(Dt.a)(lu, ["typed", "matrix", "divide", "sum", "multiply", "dotDivide", "log", "isNumeric"], function (e) {
        function t(e, t) {
          var r = t.size().length,
            n = e.size().length;
          if (1 < r) throw new Error("first object must be one dimensional");
          if (1 < n) throw new Error("second object must be one dimensional");
          if (r !== n) throw new Error("Length of two vectors must be equal");
          if (0 === a(e)) throw new Error("Sum of elements in first object must be non zero");
          if (0 === a(t)) throw new Error("Sum of elements in second object must be non zero");
          var f = i(e, a(e)),
            l = i(t, a(t)),
            p = a(o(f, u(s(f, l))));
          return c(p) ? p : Number.NaN
        }
        var r = e.typed,
          n = e.matrix,
          i = e.divide,
          a = e.sum,
          o = e.multiply,
          s = e.dotDivide,
          u = e.log,
          c = e.isNumeric;
        return r(lu, {
          "Array, Array": function (e, r) {
            return t(n(e), n(r))
          },
          "Matrix, Array": function (e, r) {
            return t(e, n(r))
          },
          "Array, Matrix": function (e, r) {
            return t(n(e), r)
          },
          "Matrix, Matrix": function (e, r) {
            return t(e, r)
          }
        })
      }),
      mu = "multinomial",
      hu = Object(Dt.a)(mu, ["typed", "add", "divide", "multiply", "factorial", "isInteger", "isPositive"], function (e) {
        var t = e.typed,
          r = e.add,
          n = e.divide,
          i = e.multiply,
          a = e.factorial,
          o = e.isInteger,
          s = e.isPositive;
        return t(mu, {
          "Array | Matrix": function (e) {
            var t = 0,
              c = 1;
            return u(e, function (e) {
              if (!o(e) || !s(e)) throw new TypeError("Positive integer value expected in function multinomial");
              t = r(t, e), c = i(c, a(e))
            }), n(a(t), c)
          }
        })
      }),
      du = "permutations",
      yu = Object(Dt.a)(du, ["typed", "factorial"], function (e) {
        var t = e.typed,
          r = e.factorial;
        return t(du, {
          "number | BigNumber": r,
          "number, number": function (e, t) {
            if (!Object(zt.i)(e) || 0 > e) throw new TypeError("Positive integer value expected in function permutations");
            if (!Object(zt.i)(t) || 0 > t) throw new TypeError("Positive integer value expected in function permutations");
            if (t > e) throw new TypeError("second argument k must be less than or equal to first argument n");
            return vt(e - t + 1, e)
          },
          "BigNumber, BigNumber": function (e, t) {
            var r, n;
            if (!Ot(e) || !Ot(t)) throw new TypeError("Positive integer value expected in function permutations");
            if (t.gt(e)) throw new TypeError("second argument k must be less than or equal to first argument n");
            for (r = e.mul(0).add(1), n = e.minus(t).plus(1); n.lte(e); n = n.plus(1)) r = r.times(n);
            return r
          }
        })
      }),
      gu = r(15),
      bu = r.n(gu),
      vu = bu()(),
      xu = Object(Dt.a)("pickRandom", ["typed", "config", "?on"], function (e) {
        function t(e, t, r) {
          var n = void 0 === t;
          if (n && (t = 1), e = e.valueOf(), r && (r = r.valueOf()), 1 < Object(Qt.a)(e).length) throw new Error("Only one dimensional vectors supported");
          var i = 0;
          if (void 0 !== r) {
            if (r.length !== e.length) throw new Error("Weights must have the same length as possibles");
            for (var o = 0, s = r.length; o < s; o++) {
              if (!Object(qt.y)(r[o]) || 0 > r[o]) throw new Error("Weights must be an array of positive numbers");
              i += r[o]
            }
          }
          var u = e.length;
          if (0 === u) return [];
          if (t >= u) return 1 < t ? e : e[0];
          for (var c, f = []; f.length < t;) {
            if (void 0 === r) c = e[Math.floor(a() * u)];
            else
              for (var l = a() * i, p = 0, m = e.length; p < m; p++)
                if (0 > (l -= r[p])) {
                  c = e[p];
                  break
                } - 1 === f.indexOf(c) && f.push(c)
          }
          return n ? f[0] : f
        }
        var r = e.typed,
          n = e.config,
          i = e.on,
          a = Mt(n.randomSeed);
        return i && i("config", function (e, t) {
          e.randomSeed !== t.randomSeed && (a = Mt(e.randomSeed))
        }), r({
          "Array | Matrix": function (e) {
            return t(e)
          },
          "Array | Matrix, number": function (e, r) {
            return t(e, r, void 0)
          },
          "Array | Matrix, Array": function (e, r) {
            return t(e, void 0, r)
          },
          "Array | Matrix, Array | Matrix, number": function (e, r, n) {
            return t(e, n, r)
          },
          "Array | Matrix, number, Array | Matrix": function (e, r, n) {
            return t(e, r, n)
          }
        })
      }),
      wu = "random",
      Nu = Object(Dt.a)(wu, ["typed", "config", "?on"], function (e) {
        function t(e, t, n) {
          var i = Et(e.valueOf(), function () {
            return r(t, n)
          });
          return Object(qt.v)(e) ? e.create(i) : i
        }

        function r(e, t) {
          return e + o() * (t - e)
        }
        var n = e.typed,
          i = e.config,
          a = e.on,
          o = Mt(i.randomSeed);
        return a && a("config", function (e, t) {
          e.randomSeed !== t.randomSeed && (o = Mt(e.randomSeed))
        }), n(wu, {
          "": function () {
            return r(0, 1)
          },
          number: function (e) {
            return r(0, e)
          },
          "number, number": function (e, t) {
            return r(e, t)
          },
          "Array | Matrix": function (e) {
            return t(e, 0, 1)
          },
          "Array | Matrix, number": function (e, r) {
            return t(e, 0, r)
          },
          "Array | Matrix, number, number": function (e, r, n) {
            return t(e, r, n)
          }
        })
      }),
      Ou = (Object(Dt.a)(wu, ["typed", "config", "?on"], function (e) {
        function t(e, t) {
          return e + a() * (t - e)
        }
        var r = e.typed,
          n = e.config,
          i = e.on,
          a = (e.matrix, Mt(n.randomSeed));
        return i && i("config", function (e, t) {
          e.randomSeed !== t.randomSeed && (a = Mt(e.randomSeed))
        }), r(wu, {
          "": function () {
            return t(0, 1)
          },
          number: function (e) {
            return t(0, e)
          },
          "number, number": function (e, r) {
            return t(e, r)
          }
        })
      }), "randomInt"),
      Mu = Object(Dt.a)(Ou, ["typed", "config", "?on"], function (e) {
        function t(e, t, n) {
          var i = Et(e.valueOf(), function () {
            return r(t, n)
          });
          return Object(qt.v)(e) ? e.create(i) : i
        }

        function r(e, t) {
          return Math.floor(e + o() * (t - e))
        }
        var n = e.typed,
          i = e.config,
          a = e.on,
          o = Mt(i.randomSeed);
        return a && a("config", function (e, t) {
          e.randomSeed !== t.randomSeed && (o = Mt(e.randomSeed))
        }), n(Ou, {
          "": function () {
            return r(0, 1)
          },
          number: function (e) {
            return r(0, e)
          },
          "number, number": function (e, t) {
            return r(e, t)
          },
          "Array | Matrix": function (e) {
            return t(e, 0, 1)
          },
          "Array | Matrix, number": function (e, r) {
            return t(e, 0, r)
          },
          "Array | Matrix, number, number": function (e, r, n) {
            return t(e, r, n)
          }
        })
      }),
      Eu = "stirlingS2",
      ju = Object(Dt.a)(Eu, ["typed", "addScalar", "subtract", "multiplyScalar", "divideScalar", "pow", "factorial", "combinations", "isNegative", "isInteger", "larger"], function (e) {
        var t = e.typed,
          r = e.addScalar,
          n = e.subtract,
          i = e.multiplyScalar,
          a = e.divideScalar,
          o = e.pow,
          s = e.factorial,
          u = e.combinations,
          c = e.isNegative,
          f = e.isInteger,
          l = e.larger;
        return t(Eu, {
          "number | BigNumber, number | BigNumber": function (e, t) {
            if (!f(e) || c(e) || !f(t) || c(t)) throw new TypeError("Non-negative integer value expected in function stirlingS2");
            if (l(t, e)) throw new TypeError("k must be less than or equal to n in function stirlingS2");
            for (var p = s(t), m = 0, h = 0; h <= t; h++) {
              var d = o(-1, n(t, h)),
                y = u(t, h),
                g = o(h, e);
              m = r(m, i(i(y, g), d))
            }
            return a(m, p)
          }
        })
      }),
      Su = "bellNumbers",
      Au = Object(Dt.a)(Su, ["typed", "addScalar", "isNegative", "isInteger", "stirlingS2"], function (e) {
        var t = e.typed,
          r = e.addScalar,
          n = e.isNegative,
          i = e.isInteger,
          a = e.stirlingS2;
        return t(Su, {
          "number | BigNumber": function (e) {
            if (!i(e) || n(e)) throw new TypeError("Non-negative integer value expected in function bellNumbers");
            for (var t = 0, o = 0; o <= e; o++) t = r(t, a(e, o));
            return t
          }
        })
      }),
      Cu = "catalan",
      Tu = Object(Dt.a)(Cu, ["typed", "addScalar", "divideScalar", "multiplyScalar", "combinations", "isNegative", "isInteger"], function (e) {
        var t = e.typed,
          r = e.addScalar,
          n = e.divideScalar,
          i = e.multiplyScalar,
          a = e.combinations,
          o = e.isNegative,
          s = e.isInteger;
        return t(Cu, {
          "number | BigNumber": function (e) {
            if (!s(e) || o(e)) throw new TypeError("Non-negative integer value expected in function catalan");
            return n(a(i(e, 2), e), r(e, 1))
          }
        })
      }),
      _u = "composition",
      Iu = Object(Dt.a)(_u, ["typed", "addScalar", "combinations", "isNegative", "isPositive", "isInteger", "larger"], function (e) {
        var t = e.typed,
          r = e.addScalar,
          n = e.combinations,
          i = e.isPositive,
          a = (e.isNegative, e.isInteger),
          o = e.larger;
        return t(_u, {
          "number | BigNumber, number | BigNumber": function (e, t) {
            if (!(a(e) && i(e) && a(t) && i(t))) throw new TypeError("Positive integer value expected in function composition");
            if (o(t, e)) throw new TypeError("k must be less than or equal to n in function composition");
            return n(r(e, -1), r(t, -1))
          }
        })
      }),
      qu = Object(Dt.a)("simplifyUtil", ["FunctionNode", "OperatorNode", "SymbolNode"], function (e) {
        function t(e, t) {
          if (!Object(qt.B)(e)) return !1;
          var r = e.fn.toString();
          return t && t.hasOwnProperty(r) && t[r].hasOwnProperty("associative") ? t[r].associative : u[r] || !1
        }

        function r(e) {
          var r, n = [];
          return t(e) ? (r = e.op, function e(t) {
            for (var i, a = 0; a < t.args.length; a++) i = t.args[a], Object(qt.B)(i) && r === i.op ? e(i) : n.push(i)
          }(e), n) : e.args
        }

        function n(e) {
          return Object(qt.B)(e) ? function (t) {
            try {
              return new a(e.op, e.fn, t, e.implicit)
            } catch (e) {
              return console.error(e), []
            }
          } : function (t) {
            return new i(new o(e.name), t)
          }
        }
        var i = e.FunctionNode,
          a = e.OperatorNode,
          o = e.SymbolNode,
          s = {
            add: !0,
            multiply: !0
          },
          u = {
            add: !0,
            multiply: !0
          };
        return {
          createMakeNodeFunction: n,
          isCommutative: function (e, t) {
            if (!Object(qt.B)(e)) return !0;
            var r = e.fn.toString();
            return t && t.hasOwnProperty(r) && t[r].hasOwnProperty("commutative") ? t[r].commutative : s[r] || !1
          },
          isAssociative: t,
          flatten: function e(t) {
            if (!t.args || 0 === t.args.length) return t;
            t.args = r(t);
            for (var n = 0; n < t.args.length; n++) e(t.args[n])
          },
          allChildren: r,
          unflattenr: function e(r) {
            if (r.args && 0 !== r.args.length) {
              for (var i = n(r), a = r.args.length, o = 0; o < a; o++) e(r.args[o]);
              if (2 < a && t(r)) {
                for (var s = r.args.pop(); 0 < r.args.length;) s = i([r.args.pop(), s]);
                r.args = s.args
              }
            }
          },
          unflattenl: function e(r) {
            if (r.args && 0 !== r.args.length) {
              for (var i = n(r), a = r.args.length, o = 0; o < a; o++) e(r.args[o]);
              if (2 < a && t(r)) {
                for (var s = r.args.shift(); 0 < r.args.length;) s = i([s, r.args.shift()]);
                r.args = s.args
              }
            }
          }
        }
      }),
      Bu = Object(Dt.a)("simplifyCore", ["equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "ConstantNode", "OperatorNode", "FunctionNode", "ParenthesisNode"], function (e) {
        var t = e.equal,
          r = e.isZero,
          n = e.add,
          i = e.subtract,
          a = e.multiply,
          o = e.divide,
          s = e.pow,
          u = e.ConstantNode,
          c = e.OperatorNode,
          f = e.FunctionNode,
          l = e.ParenthesisNode,
          p = new u(0),
          m = new u(1);
        return function e(h) {
          if (Object(qt.B)(h) && h.isUnary()) {
            var d = e(h.args[0]);
            if ("+" === h.op) return d;
            if ("-" === h.op) {
              if (Object(qt.B)(d)) {
                if (d.isUnary() && "-" === d.op) return d.args[0];
                if (d.isBinary() && "subtract" === d.fn) return new c("-", "subtract", [d.args[1], d.args[0]])
              }
              return new c(h.op, h.fn, [d])
            }
          } else if (Object(qt.B)(h) && h.isBinary()) {
            var y = e(h.args[0]),
              g = e(h.args[1]);
            if ("+" === h.op) {
              if (Object(qt.l)(y)) {
                if (r(y.value)) return g;
                if (Object(qt.l)(g)) return new u(n(y.value, g.value))
              }
              return Object(qt.l)(g) && r(g.value) ? y : Object(qt.B)(g) && g.isUnary() && "-" === g.op ? new c("-", "subtract", [y, g.args[0]]) : new c(h.op, h.fn, g ? [y, g] : [y])
            }
            if ("-" === h.op) {
              if (Object(qt.l)(y) && g) {
                if (Object(qt.l)(g)) return new u(i(y.value, g.value));
                if (r(y.value)) return new c("-", "unaryMinus", [g])
              }
              if ("subtract" === h.fn) return Object(qt.l)(g) && r(g.value) ? y : Object(qt.B)(g) && g.isUnary() && "-" === g.op ? e(new c("+", "add", [y, g.args[0]])) : new c(h.op, h.fn, [y, g])
            } else {
              if ("*" === h.op) {
                if (Object(qt.l)(y)) {
                  if (r(y.value)) return p;
                  if (t(y.value, 1)) return g;
                  if (Object(qt.l)(g)) return new u(a(y.value, g.value))
                }
                if (Object(qt.l)(g)) {
                  if (r(g.value)) return p;
                  if (t(g.value, 1)) return y;
                  if (Object(qt.B)(y) && y.isBinary() && y.op === h.op) {
                    var b = y.args[0];
                    if (Object(qt.l)(b)) {
                      var v = new u(a(b.value, g.value));
                      return new c(h.op, h.fn, [v, y.args[1]], h.implicit)
                    }
                  }
                  return new c(h.op, h.fn, [g, y], h.implicit)
                }
                return new c(h.op, h.fn, [y, g], h.implicit)
              }
              if ("/" === h.op) {
                if (Object(qt.l)(y)) {
                  if (r(y.value)) return p;
                  if (Object(qt.l)(g) && (t(g.value, 1) || t(g.value, 2) || t(g.value, 4))) return new u(o(y.value, g.value))
                }
                return new c(h.op, h.fn, [y, g])
              }
              if ("^" === h.op) {
                if (Object(qt.l)(g)) {
                  if (r(g.value)) return m;
                  if (t(g.value, 1)) return y;
                  if (Object(qt.l)(y)) return new u(s(y.value, g.value));
                  if (Object(qt.B)(y) && y.isBinary() && "^" === y.op) {
                    var x = y.args[1];
                    if (Object(qt.l)(x)) return new c(h.op, h.fn, [y.args[0], new u(a(x.value, g.value))])
                  }
                }
                return new c(h.op, h.fn, [y, g])
              }
            }
          } else {
            if (Object(qt.C)(h)) {
              var w = e(h.content);
              return Object(qt.C)(w) || Object(qt.J)(w) || Object(qt.l)(w) ? w : new l(w)
            }
            if (Object(qt.r)(h)) {
              var N = h.args.map(e).map(function (e) {
                return Object(qt.C)(e) ? e.content : e
              });
              return new f(e(h.fn), N)
            }
          }
          return h
        }
      }),
      ku = Object(Dt.a)("simplifyConstant", ["typed", "config", "mathWithTransform", "?fraction", "?bignumber", "ConstantNode", "OperatorNode", "FunctionNode", "SymbolNode"], function (e) {
        function t(e, t, r) {
          try {
            return w(u[e].apply(null, t), r)
          } catch (n) {
            return t = t.map(function (e) {
              return Object(qt.o)(e) ? e.valueOf() : e
            }), w(u[e].apply(null, t), r)
          }
        }

        function r(e, t) {
          if (t && !1 !== t.exactFractions && isFinite(e) && c) {
            var r = c(e);
            if (r.valueOf() === e) return r
          }
          return e
        }

        function n(e) {
          return new p("-", "unaryMinus", [e])
        }

        function i(e, r, n, i) {
          return r.reduce(function (r, a) {
            if (Object(qt.w)(r) || Object(qt.w)(a)) Object(qt.w)(r) ? Object(qt.w)(a) || (a = x(a)) : r = x(r);
            else {
              try {
                return t(e, [r, a], i)
              } catch (e) {}
              r = x(r), a = x(a)
            }
            return n([r, a])
          })
        }

        function a(e, r) {
          switch (e.type) {
            case "SymbolNode":
              return e;
            case "ConstantNode":
              return "number" != typeof e.value && isNaN(e.value) ? e : w(e.value, r);
            case "FunctionNode":
              if (u[e.name] && u[e.name].rawArgs) return e;
              if (-1 === ["add", "multiply"].indexOf(e.name)) {
                var n = e.args.map(function (e) {
                  return a(e, r)
                });
                if (!n.some(qt.w)) try {
                  return t(e.name, n, r)
                } catch (e) {}
                return n = n.map(function (e) {
                  return Object(qt.w)(e) ? e : x(e)
                }), new m(e.name, n)
              }
              case "OperatorNode":
                var o, s, c = e.fn.toString(),
                  f = v(e);
                if (Object(qt.B)(e) && e.isUnary()) o = [a(e.args[0], r)], s = Object(qt.w)(o[0]) ? f(o) : t(c, o, r);
                else if (g(e))
                  if (o = (o = b(e)).map(function (e) {
                      return a(e, r)
                    }), y(c)) {
                    for (var l = [], p = [], h = 0; h < o.length; h++) Object(qt.w)(o[h]) ? p.push(o[h]) : l.push(o[h]);
                    1 < l.length ? (s = i(c, l, f, r), p.unshift(s), s = i(c, p, f, r)) : s = i(c, o, f, r)
                  } else s = i(c, o, f, r);
                else s = i(c, o = e.args.map(function (e) {
                  return a(e, r)
                }), f, r);
                return s;
              case "ParenthesisNode":
                return a(e.content, r);
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
                throw new Error("Unimplemented node type in simplifyConstant: ".concat(e.type))
          }
        }
        var o = e.typed,
          s = e.config,
          u = e.mathWithTransform,
          c = e.fraction,
          f = e.bignumber,
          l = e.ConstantNode,
          p = e.OperatorNode,
          m = e.FunctionNode,
          h = e.SymbolNode,
          d = qu({
            FunctionNode: m,
            OperatorNode: p,
            SymbolNode: h
          }),
          y = d.isCommutative,
          g = d.isAssociative,
          b = d.allChildren,
          v = d.createMakeNodeFunction,
          x = o({
            Fraction: function (e) {
              var t, r = e.s * e.n;
              return t = 0 > r ? new p("-", "unaryMinus", [new l(-r)]) : new l(r), 1 === e.d ? t : new p("/", "divide", [t, new l(e.d)])
            },
            number: function (e) {
              return 0 > e ? n(new l(-e)) : new l(e)
            },
            BigNumber: function (e) {
              return 0 > e ? n(new l(-e)) : new l(e)
            },
            Complex: function () {
              throw new Error("Cannot convert Complex number to Node")
            }
          }),
          w = o({
            "string, Object": function (e, t) {
              return "BigNumber" === s.number ? (void 0 === f && he(), f(e)) : "Fraction" === s.number ? (void 0 === c && de(), c(e)) : r(parseFloat(e), t)
            },
            "Fraction, Object": function (e) {
              return e
            },
            "BigNumber, Object": function (e) {
              return e
            },
            "number, Object": function (e, t) {
              return r(e, t)
            },
            "Complex, Object": function (e, t) {
              return 0 === e.im ? r(e.re, t) : e
            }
          });
        return function (e, t) {
          var r = a(e, t);
          return Object(qt.w)(r) ? r : x(r)
        }
      }),
      zu = Object(Dt.a)("resolve", ["parse", "FunctionNode", "OperatorNode", "ParenthesisNode"], function (e) {
        var t = e.parse,
          r = e.FunctionNode,
          n = e.OperatorNode,
          i = e.ParenthesisNode;
        return function e(a, o) {
          if (!o) return a;
          if (Object(qt.J)(a)) {
            var s = o[a.name];
            if (Object(qt.w)(s)) return e(s, o);
            if ("number" == typeof s) return t(s + "")
          } else {
            if (Object(qt.B)(a)) {
              var u = a.args.map(function (t) {
                return e(t, o)
              });
              return new n(a.op, a.fn, u, a.implicit)
            }
            if (Object(qt.C)(a)) return new i(e(a.content, o));
            if (Object(qt.r)(a)) {
              var c = a.args.map(function (t) {
                return e(t, o)
              });
              return new r(a.name, c)
            }
          }
          return a
        }
      }),
      Du = Object(Dt.a)("simplify", ["config", "typed", "parse", "add", "subtract", "multiply", "divide", "pow", "isZero", "equal", "?fraction", "?bignumber", "mathWithTransform", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode", "SymbolNode"], function (e) {
        function t(e) {
          return e.transform(function (e) {
            return Object(qt.C)(e) ? t(e.content) : e
          })
        }

        function r(e, t) {
          var r = {
            placeholders: {}
          };
          if (!e.placeholders && !t.placeholders) return r;
          if (!e.placeholders) return t;
          if (!t.placeholders) return e;
          for (var n in e.placeholders)
            if (r.placeholders[n] = e.placeholders[n], t.placeholders.hasOwnProperty(n) && !o(e.placeholders[n], t.placeholders[n])) return null;
          for (var i in t.placeholders) r.placeholders[i] = t.placeholders[i];
          return r
        }

        function n(e, t) {
          var n = [];
          if (0 === e.length || 0 === t.length) return n;
          for (var i, a = 0; a < e.length; a++)
            for (var o = 0; o < t.length; o++)(i = r(e[a], t[o])) && n.push(i);
          return n
        }

        function i(e) {
          if (0 === e.length) return e;
          for (var t, r = e.reduce(n), i = [], a = {}, o = 0; o < r.length; o++) a[t = JSON.stringify(r[o])] || (a[t] = !0, i.push(r[o]));
          return i
        }

        function a(e, t, r) {
          var n = [{
            placeholders: {}
          }];
          if (e instanceof N && t instanceof N || e instanceof w && t instanceof w) {
            if (e instanceof N) {
              if (e.op !== t.op || e.fn !== t.fn) return []
            } else if (e instanceof w && e.name !== t.name) return [];
            if ((1 !== t.args.length || 1 !== e.args.length) && T(t) && !r) {
              if (2 <= t.args.length && 2 === e.args.length) {
                for (var o, s = function (e, t) {
                    var r, n, i = [],
                      a = B(e);
                    if (C(e, t))
                      for (var o = 0; o < e.args.length; o++)(n = e.args.slice(0)).splice(o, 1), r = 1 === n.length ? n[0] : a(n), i.push(a([e.args[o], r]));
                    else r = 1 === (n = e.args.slice(1)).length ? n[0] : a(n), i.push(a([e.args[0], r]));
                    return i
                  }(t, e.context), u = [], c = 0; c < s.length; c++) o = a(e, s[c], !0), u = u.concat(o);
                return u
              }
              if (2 < e.args.length) throw Error("Unexpected non-binary associative function: " + e.toString());
              return []
            }
            for (var f, l = [], p = 0; p < e.args.length; p++) {
              if (0 === (f = a(e.args[p], t.args[p])).length) return [];
              l.push(f)
            }
            n = i(l)
          } else if (e instanceof M) {
            if (0 === e.name.length) throw new Error("Symbol in rule has 0 length...!?");
            if (z[e.name]) {
              if (e.name !== t.name) return []
            } else if ("n" === e.name[0] || "_p" === e.name.substring(0, 2)) n[0].placeholders[e.name] = t;
            else if ("v" === e.name[0]) {
              if (Object(qt.l)(t)) return [];
              n[0].placeholders[e.name] = t
            } else {
              if ("c" !== e.name[0]) throw new Error("Invalid symbol in rule: " + e.name);
              if (!(t instanceof x)) return [];
              n[0].placeholders[e.name] = t
            }
          } else {
            if (!(e instanceof x)) return [];
            if (!y(e.value, t.value)) return []
          }
          return n
        }

        function o(e, t) {
          if (e instanceof x && t instanceof x) {
            if (!y(e.value, t.value)) return !1
          } else if (e instanceof M && t instanceof M) {
            if (e.name !== t.name) return !1
          } else {
            if (!(e instanceof N && t instanceof N || e instanceof w && t instanceof w)) return !1;
            if (e instanceof N) {
              if (e.op !== t.op || e.fn !== t.fn) return !1
            } else if (e instanceof w && e.name !== t.name) return !1;
            if (e.args.length !== t.args.length) return !1;
            for (var r = 0; r < e.args.length; r++)
              if (!o(e.args[r], t.args[r])) return !1
          }
          return !0
        }
        var s = e.config,
          u = e.typed,
          c = e.parse,
          f = e.add,
          l = e.subtract,
          p = e.multiply,
          m = e.divide,
          h = e.pow,
          d = e.isZero,
          y = e.equal,
          g = e.fraction,
          b = e.bignumber,
          v = e.mathWithTransform,
          x = e.ConstantNode,
          w = e.FunctionNode,
          N = e.OperatorNode,
          O = e.ParenthesisNode,
          M = e.SymbolNode,
          E = ku({
            typed: u,
            config: s,
            mathWithTransform: v,
            fraction: g,
            bignumber: b,
            ConstantNode: x,
            OperatorNode: N,
            FunctionNode: w,
            SymbolNode: M
          }),
          j = Bu({
            equal: y,
            isZero: d,
            add: f,
            subtract: l,
            multiply: p,
            divide: m,
            pow: h,
            ConstantNode: x,
            OperatorNode: N,
            FunctionNode: w,
            ParenthesisNode: O
          }),
          S = zu({
            parse: c,
            FunctionNode: w,
            OperatorNode: N,
            ParenthesisNode: O
          }),
          A = qu({
            FunctionNode: w,
            OperatorNode: N,
            SymbolNode: M
          }),
          C = A.isCommutative,
          T = A.isAssociative,
          _ = A.flatten,
          I = A.unflattenr,
          q = A.unflattenl,
          B = A.createMakeNodeFunction,
          k = u("simplify", {
            string: function (e) {
              return k(c(e), k.rules, {}, {})
            },
            "string, Object": function (e, t) {
              return k(c(e), k.rules, t, {})
            },
            "string, Object, Object": function (e, t, r) {
              return k(c(e), k.rules, t, r)
            },
            "string, Array": function (e, t) {
              return k(c(e), t, {}, {})
            },
            "string, Array, Object": function (e, t, r) {
              return k(c(e), t, r, {})
            },
            "string, Array, Object, Object": function (e, t, r, n) {
              return k(c(e), t, r, n)
            },
            "Node, Object": function (e, t) {
              return k(e, k.rules, t, {})
            },
            "Node, Object, Object": function (e, t, r) {
              return k(e, k.rules, t, r)
            },
            Node: function (e) {
              return k(e, k.rules, {}, {})
            },
            "Node, Array": function (e, t) {
              return k(e, t, {}, {})
            },
            "Node, Array, Object": function (e, t, r) {
              return k(e, t, r, {})
            },
            "Node, Array, Object, Object": function (e, r, n, i) {
              r = function (e) {
                for (var r = [], n = 0; n < e.length; n++) {
                  var i = e[n],
                    a = void 0,
                    o = jt(i);
                  switch (o) {
                    case "string":
                      var s = i.split("->");
                      if (2 !== s.length) throw SyntaxError("Could not parse rule: " + i);
                      i = {
                        l: s[0],
                        r: s[1]
                      };
                    case "object":
                      if (a = {
                          l: t(c(i.l)),
                          r: t(c(i.r))
                        }, i.context && (a.evaluate = i.context), i.evaluate && (a.evaluate = c(i.evaluate)), T(a.l)) {
                        var u = B(a.l),
                          f = new M("_p" + D++);
                        a.expanded = {}, a.expanded.l = u([a.l.clone(), f]), _(a.expanded.l), I(a.expanded.l), a.expanded.r = u([a.r, f])
                      }
                      break;
                    case "function":
                      a = i;
                      break;
                    default:
                      throw TypeError("Unsupported type of rule: " + o)
                  }
                  r.push(a)
                }
                return r
              }(r);
              for (var a = S(e, n), o = {}, s = (a = t(a)).toString({
                  parenthesis: "all"
                }); !o[s];) {
                o[s] = !0, D = 0;
                for (var u = 0; u < r.length; u++) "function" == typeof r[u] ? a = r[u](a, i) : (_(a), a = R(a, r[u])), q(a);
                s = a.toString({
                  parenthesis: "all"
                })
              }
              return a
            }
          });
        k.simplifyCore = j, k.resolve = S;
        var z = {
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
        k.rules = [j, {
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
        }, E, {
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
        var D = 0,
          R = u("applyRule", {
            "Node, Object": function (e, t) {
              var r = e;
              if (r instanceof N || r instanceof w) {
                if (r.args)
                  for (var n = 0; n < r.args.length; n++) r.args[n] = R(r.args[n], t)
              } else r instanceof O && r.content && (r.content = R(r.content, t));
              var i = t.r,
                o = a(t.l, r)[0];
              if (!o && t.expanded && (i = t.expanded.r, o = a(t.expanded.l, r)[0]), o) {
                var s = r.implicit;
                r = i.clone(), s && "implicit" in i && (r.implicit = !0), r = r.transform(function (e) {
                  return e.isSymbolNode && o.placeholders.hasOwnProperty(e.name) ? o.placeholders[e.name].clone() : e
                })
              }
              return r
            }
          });
        return k
      }),
      Ru = Object(Dt.a)("derivative", ["typed", "config", "parse", "simplify", "equal", "isZero", "numeric", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode", "SymbolNode"], function (e) {
        function t(e, t) {
          return new c(u(e, t || n.number))
        }
        var r = e.typed,
          n = e.config,
          i = e.parse,
          a = e.simplify,
          o = e.equal,
          s = e.isZero,
          u = e.numeric,
          c = e.ConstantNode,
          f = e.FunctionNode,
          l = e.OperatorNode,
          p = e.ParenthesisNode,
          m = e.SymbolNode,
          h = r("derivative", {
            "Node, SymbolNode, Object": function (e, t, r) {
              var n = {};
              y(n, e, t.name);
              var i = g(e, n);
              return r.simplify ? a(i) : i
            },
            "Node, SymbolNode": function (e, t) {
              return h(e, t, {
                simplify: !0
              })
            },
            "string, SymbolNode": function (e, t) {
              return h(i(e), t)
            },
            "string, SymbolNode, Object": function (e, t, r) {
              return h(i(e), t, r)
            },
            "string, string": function (e, t) {
              return h(i(e), i(t))
            },
            "string, string, Object": function (e, t, r) {
              return h(i(e), i(t), r)
            },
            "Node, string": function (e, t) {
              return h(e, i(t))
            },
            "Node, string, Object": function (e, t, r) {
              return h(e, i(t), r)
            }
          });
        h._simplify = !0, h.toTex = function (e) {
          return d.apply(null, e.args)
        };
        var d = r("_derivTex", {
            "Node, SymbolNode": function (e, t) {
              return Object(qt.l)(e) && "string" === Object(qt.M)(e.value) ? d(i(e.value).toString(), t.toString(), 1) : d(e.toString(), t.toString(), 1)
            },
            "Node, ConstantNode": function (e, t) {
              if ("string" === Object(qt.M)(t.value)) return d(e, i(t.value));
              throw new Error("The second parameter to 'derivative' is a non-string constant")
            },
            "Node, SymbolNode, ConstantNode": function (e, t, r) {
              return d(e.toString(), t.name, r.value)
            },
            "string, string, number": function (e, t, r) {
              return (1 === r ? "{d\\over d" + t + "}" : "{d^{" + r + "}\\over d" + t + "^{" + r + "}}") + "\\left[".concat(e, "\\right]")
            }
          }),
          y = r("constTag", {
            "Object, ConstantNode, string": function (e, t) {
              return e[t] = !0, !0
            },
            "Object, SymbolNode, string": function (e, t, r) {
              return t.name !== r && (e[t] = !0, !0)
            },
            "Object, ParenthesisNode, string": function (e, t, r) {
              return y(e, t.content, r)
            },
            "Object, FunctionAssignmentNode, string": function (e, t, r) {
              return -1 === t.params.indexOf(r) ? (e[t] = !0, !0) : y(e, t.expr, r)
            },
            "Object, FunctionNode | OperatorNode, string": function (e, t, r) {
              if (0 < t.args.length) {
                for (var n = y(e, t.args[0], r), i = 1; i < t.args.length; ++i) n = y(e, t.args[i], r) && n;
                if (n) return e[t] = !0, !0
              }
              return !1
            }
          }),
          g = r("_derivative", {
            "ConstantNode, Object": function () {
              return t(0)
            },
            "SymbolNode, Object": function (e, r) {
              return void 0 === r[e] ? t(1) : t(0)
            },
            "ParenthesisNode, Object": function (e, t) {
              return new p(g(e.content, t))
            },
            "FunctionAssignmentNode, Object": function (e, r) {
              return void 0 === r[e] ? g(e.expr, r) : t(0)
            },
            "FunctionNode, Object": function (e, r) {
              if (1 !== e.args.length && function (e) {
                  if ("log" !== e.name && "nthRoot" !== e.name && "pow" !== e.name || 2 !== e.args.length) {
                    for (var r = 0; r < e.args.length; ++r) e.args[r] = t(0);
                    throw e.compile().evaluate(), new Error("Expected TypeError, but none found")
                  }
                }(e), void 0 !== r[e]) return t(0);
              var n, i, a, o, s = e.args[0],
                u = !1,
                c = !1;
              switch (e.name) {
                case "cbrt":
                  u = !0, i = new l("*", "multiply", [t(3), new l("^", "pow", [s, new l("/", "divide", [t(2), t(3)])])]);
                  break;
                case "sqrt":
                case "nthRoot":
                  if (1 === e.args.length) u = !0, i = new l("*", "multiply", [t(2), new f("sqrt", [s])]);
                  else if (2 === e.args.length) return r[n = new l("/", "divide", [t(1), e.args[1]])] = r[e.args[1]], g(new l("^", "pow", [s, n]), r);
                  break;
                case "log10":
                  n = t(10);
                case "log":
                  if (n || 1 !== e.args.length) {
                    if (1 === e.args.length && n || 2 === e.args.length && void 0 !== r[e.args[1]]) i = new l("*", "multiply", [s.clone(), new f("log", [n || e.args[1]])]), u = !0;
                    else if (2 === e.args.length) return g(new l("/", "divide", [new f("log", [s]), new f("log", [e.args[1]])]), r)
                  } else i = s.clone(), u = !0;
                  break;
                case "pow":
                  return r[n] = r[e.args[1]], g(new l("^", "pow", [s, e.args[1]]), r);
                case "exp":
                  i = new f("exp", [s.clone()]);
                  break;
                case "sin":
                  i = new f("cos", [s.clone()]);
                  break;
                case "cos":
                  i = new l("-", "unaryMinus", [new f("sin", [s.clone()])]);
                  break;
                case "tan":
                  i = new l("^", "pow", [new f("sec", [s.clone()]), t(2)]);
                  break;
                case "sec":
                  i = new l("*", "multiply", [e, new f("tan", [s.clone()])]);
                  break;
                case "csc":
                  c = !0, i = new l("*", "multiply", [e, new f("cot", [s.clone()])]);
                  break;
                case "cot":
                  c = !0, i = new l("^", "pow", [new f("csc", [s.clone()]), t(2)]);
                  break;
                case "asin":
                  u = !0, i = new f("sqrt", [new l("-", "subtract", [t(1), new l("^", "pow", [s.clone(), t(2)])])]);
                  break;
                case "acos":
                  u = !0, c = !0, i = new f("sqrt", [new l("-", "subtract", [t(1), new l("^", "pow", [s.clone(), t(2)])])]);
                  break;
                case "atan":
                  u = !0, i = new l("+", "add", [new l("^", "pow", [s.clone(), t(2)]), t(1)]);
                  break;
                case "asec":
                  u = !0, i = new l("*", "multiply", [new f("abs", [s.clone()]), new f("sqrt", [new l("-", "subtract", [new l("^", "pow", [s.clone(), t(2)]), t(1)])])]);
                  break;
                case "acsc":
                  u = !0, c = !0, i = new l("*", "multiply", [new f("abs", [s.clone()]), new f("sqrt", [new l("-", "subtract", [new l("^", "pow", [s.clone(), t(2)]), t(1)])])]);
                  break;
                case "acot":
                  u = !0, c = !0, i = new l("+", "add", [new l("^", "pow", [s.clone(), t(2)]), t(1)]);
                  break;
                case "sinh":
                  i = new f("cosh", [s.clone()]);
                  break;
                case "cosh":
                  i = new f("sinh", [s.clone()]);
                  break;
                case "tanh":
                  i = new l("^", "pow", [new f("sech", [s.clone()]), t(2)]);
                  break;
                case "sech":
                  c = !0, i = new l("*", "multiply", [e, new f("tanh", [s.clone()])]);
                  break;
                case "csch":
                  c = !0, i = new l("*", "multiply", [e, new f("coth", [s.clone()])]);
                  break;
                case "coth":
                  c = !0, i = new l("^", "pow", [new f("csch", [s.clone()]), t(2)]);
                  break;
                case "asinh":
                  u = !0, i = new f("sqrt", [new l("+", "add", [new l("^", "pow", [s.clone(), t(2)]), t(1)])]);
                  break;
                case "acosh":
                  u = !0, i = new f("sqrt", [new l("-", "subtract", [new l("^", "pow", [s.clone(), t(2)]), t(1)])]);
                  break;
                case "atanh":
                  u = !0, i = new l("-", "subtract", [t(1), new l("^", "pow", [s.clone(), t(2)])]);
                  break;
                case "asech":
                  u = !0, c = !0, i = new l("*", "multiply", [s.clone(), new f("sqrt", [new l("-", "subtract", [t(1), new l("^", "pow", [s.clone(), t(2)])])])]);
                  break;
                case "acsch":
                  u = !0, c = !0, i = new l("*", "multiply", [new f("abs", [s.clone()]), new f("sqrt", [new l("+", "add", [new l("^", "pow", [s.clone(), t(2)]), t(1)])])]);
                  break;
                case "acoth":
                  u = !0, c = !0, i = new l("-", "subtract", [t(1), new l("^", "pow", [s.clone(), t(2)])]);
                  break;
                case "abs":
                  i = new l("/", "divide", [new f(new m("abs"), [s.clone()]), s.clone()]);
                  break;
                case "gamma":
                default:
                  throw new Error('Function "' + e.name + '" is not supported by derivative, or a wrong number of arguments is passed')
              }
              u ? (a = "/", o = "divide") : (a = "*", o = "multiply");
              var p = g(s, r);
              return c && (p = new l("-", "unaryMinus", [p])), new l(a, o, [p, i])
            },
            "OperatorNode, Object": function (e, r) {
              if (void 0 !== r[e]) return t(0);
              if ("+" === e.op) return new l(e.op, e.fn, e.args.map(function (e) {
                return g(e, r)
              }));
              if ("-" === e.op) {
                if (e.isUnary()) return new l(e.op, e.fn, [g(e.args[0], r)]);
                if (e.isBinary()) return new l(e.op, e.fn, [g(e.args[0], r), g(e.args[1], r)])
              }
              if ("*" === e.op) {
                var n = e.args.filter(function (e) {
                  return void 0 !== r[e]
                });
                if (0 < n.length) {
                  var i = e.args.filter(function (e) {
                      return void 0 === r[e]
                    }),
                    a = 1 === i.length ? i[0] : new l("*", "multiply", i),
                    u = n.concat(g(a, r));
                  return new l("*", "multiply", u)
                }
                return new l("+", "add", e.args.map(function (t) {
                  return new l("*", "multiply", e.args.map(function (e) {
                    return e === t ? g(e, r) : e.clone()
                  }))
                }))
              }
              if ("/" === e.op && e.isBinary()) {
                var c = e.args[0],
                  p = e.args[1];
                return void 0 === r[p] ? void 0 === r[c] ? new l("/", "divide", [new l("-", "subtract", [new l("*", "multiply", [g(c, r), p.clone()]), new l("*", "multiply", [c.clone(), g(p, r)])]), new l("^", "pow", [p.clone(), t(2)])]) : new l("*", "multiply", [new l("-", "unaryMinus", [c]), new l("/", "divide", [g(p, r), new l("^", "pow", [p.clone(), t(2)])])]) : new l("/", "divide", [g(c, r), p])
              }
              if ("^" === e.op && e.isBinary()) {
                var m = e.args[0],
                  h = e.args[1];
                if (void 0 !== r[m]) return Object(qt.l)(m) && (s(m.value) || o(m.value, 1)) ? t(0) : new l("*", "multiply", [e, new l("*", "multiply", [new f("log", [m.clone()]), g(h.clone(), r)])]);
                if (void 0 !== r[h]) {
                  if (Object(qt.l)(h)) {
                    if (s(h.value)) return t(0);
                    if (o(h.value, 1)) return g(m, r)
                  }
                  var d = new l("^", "pow", [m.clone(), new l("-", "subtract", [h, t(1)])]);
                  return new l("*", "multiply", [h.clone(), new l("*", "multiply", [g(m, r), d])])
                }
                return new l("*", "multiply", [new l("^", "pow", [m.clone(), h.clone()]), new l("+", "add", [new l("*", "multiply", [g(m, r), new l("/", "divide", [h.clone(), m.clone()])]), new l("*", "multiply", [g(h, r), new f("log", [m.clone()])])])])
              }
              throw new Error('Operator "' + e.op + '" is not supported by derivative, or a wrong number of arguments is passed')
            }
          });
        return h
      }),
      Pu = "rationalize",
      Fu = Object(Dt.a)(Pu, ["config", "typed", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "parse", "simplify", "?bignumber", "?fraction", "mathWithTransform", "ConstantNode", "OperatorNode", "FunctionNode", "SymbolNode", "ParenthesisNode"], function (e) {
        function t(e, t) {
          void 0 === t && (t = []), t[0] = 0;
          var r = 0,
            n = "";
          (function e(i, a, o) {
            var s = i.type;
            if ("FunctionNode" === s) throw new Error("There is an unsolved function call");
            if ("OperatorNode" === s) {
              if (-1 === "+-*^".indexOf(i.op)) throw new Error("Operator " + i.op + " invalid");
              if (null !== a) {
                if (("unaryMinus" === i.fn || "pow" === i.fn) && "add" !== a.fn && "subtract" !== a.fn && "multiply" !== a.fn) throw new Error("Invalid " + i.op + " placing");
                if (("subtract" === i.fn || "add" === i.fn || "multiply" === i.fn) && "add" !== a.fn && "subtract" !== a.fn) throw new Error("Invalid " + i.op + " placing");
                if (("subtract" === i.fn || "add" === i.fn || "unaryMinus" === i.fn) && 0 !== o.noFil) throw new Error("Invalid " + i.op + " placing")
              }("^" === i.op || "*" === i.op) && (o.fire = i.op);
              for (var u = 0; u < i.args.length; u++) "unaryMinus" === i.fn && (o.oper = "-"), ("+" === i.op || "subtract" === i.fn) && (o.fire = "", o.cte = 1, o.oper = 0 == u ? "+" : i.op), o.noFil = u, e(i.args[u], i, o)
            } else if ("SymbolNode" === s) {
              if (i.name !== n && "" !== n) throw new Error("There is more than one variable");
              if (n = i.name, null === a) return void(t[1] = 1);
              if ("^" === a.op && 0 !== o.noFil) throw new Error("In power the variable should be the first parameter");
              if ("*" === a.op && 1 !== o.noFil) throw new Error("In multiply the variable should be the second parameter");
              ("" === o.fire || "*" === o.fire) && (1 > r && (t[1] = 0), t[1] += o.cte * ("+" === o.oper ? 1 : -1), r = Math.max(1, r))
            } else {
              if ("ConstantNode" !== s) throw new Error("Type " + s + " is not allowed");
              var c = parseFloat(i.value);
              if (null === a) return void(t[0] = c);
              if ("^" === a.op) {
                if (1 !== o.noFil) throw new Error("Constant cannot be powered");
                if (!Object(zt.i)(c) || 0 >= c) throw new Error("Non-integer exponent is not allowed");
                for (var f = r + 1; f < c; f++) t[f] = 0;
                return c > r && (t[c] = 0), t[c] += o.cte * ("+" === o.oper ? 1 : -1), void(r = Math.max(c, r))
              }
              o.cte = c, "" === o.fire && (t[0] += o.cte * ("+" === o.oper ? 1 : -1))
            }
          })(e, null, {
            cte: 1,
            oper: "+",
            fire: ""
          });
          for (var i, a = !0, o = r = t.length - 1; 0 <= o; o--)
            if (0 !== t[o]) {
              var s = new y(a ? t[o] : Math.abs(t[o])),
                u = 0 > t[o] ? "-" : "+";
              if (0 < o) {
                var c = new v(n);
                if (1 < o) {
                  var f = new y(o);
                  c = new g("^", "pow", [c, f])
                }
                s = -1 === t[o] && a ? new g("-", "unaryMinus", [c]) : 1 === Math.abs(t[o]) ? c : new g("*", "multiply", [s, c])
              }
              i = a ? s : "+" === u ? new g("+", "add", [i, s]) : new g("-", "subtract", [i, s]), a = !1
            } return a ? new y(0) : i
        }
        var r = e.config,
          n = e.typed,
          i = e.equal,
          a = e.isZero,
          o = e.add,
          s = e.subtract,
          u = e.multiply,
          c = e.divide,
          f = e.pow,
          l = e.parse,
          p = e.simplify,
          m = e.fraction,
          h = e.bignumber,
          d = e.mathWithTransform,
          y = e.ConstantNode,
          g = e.OperatorNode,
          b = e.FunctionNode,
          v = e.SymbolNode,
          x = e.ParenthesisNode,
          w = ku({
            typed: n,
            config: r,
            mathWithTransform: d,
            fraction: m,
            bignumber: h,
            ConstantNode: y,
            OperatorNode: g,
            FunctionNode: b,
            SymbolNode: v
          }),
          N = Bu({
            equal: i,
            isZero: a,
            add: o,
            subtract: s,
            multiply: u,
            divide: c,
            pow: f,
            ConstantNode: y,
            OperatorNode: g,
            FunctionNode: b,
            ParenthesisNode: x
          }),
          O = n(Pu, {
            string: function (e) {
              return O(l(e), {}, !1)
            },
            "string, boolean": function (e, t) {
              return O(l(e), {}, t)
            },
            "string, Object": function (e, t) {
              return O(l(e), t, !1)
            },
            "string, Object, boolean": function (e, t, r) {
              return O(l(e), t, r)
            },
            Node: function (e) {
              return O(e, {}, !1)
            },
            "Node, boolean": function (e, t) {
              return O(e, {}, t)
            },
            "Node, Object": function (e, t) {
              return O(e, t, !1)
            },
            "Node, Object, boolean": function (e, r, n) {
              var i = function () {
                  var e = [N, {
                      l: "n+n",
                      r: "2*n"
                    }, {
                      l: "n+-n",
                      r: "0"
                    }, w, {
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
                    r = [{
                      l: "(n1/(n2/n3))",
                      r: "((n1*n3)/n2)"
                    }, {
                      l: "(n1/n2/n3)",
                      r: "(n1/(n2*n3))"
                    }],
                    n = {};
                  return n.firstRules = e.concat(t, r), n.distrDivRules = [{
                    l: "(n1/n2 + n3/n4)",
                    r: "((n1*n4 + n3*n2)/(n2*n4))"
                  }, {
                    l: "(n1/n2 + n3)",
                    r: "((n1 + n3*n2)/n2)"
                  }, {
                    l: "(n1 + n2/n3)",
                    r: "((n1*n3 + n2)/n3)"
                  }], n.sucDivRules = r, n.firstRulesAgain = e.concat(t), n.finalRules = [N, {
                    l: "n*-n",
                    r: "-n^2"
                  }, {
                    l: "n*n",
                    r: "n^2"
                  }, w, {
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
                }(),
                a = function (e, t, r, n) {
                  var i = [],
                    a = p(e, n, t, {
                      exactFractions: !1
                    }),
                    o = "+-*" + ((r = !!r) ? "/" : "");
                  return function e(t) {
                    var r = t.type;
                    if ("FunctionNode" === r) throw new Error("There is an unsolved function call");
                    if ("OperatorNode" === r)
                      if ("^" !== t.op) {
                        if (-1 === o.indexOf(t.op)) throw new Error("Operator " + t.op + " invalid in polynomial expression");
                        for (var n = 0; n < t.args.length; n++) e(t.args[n])
                      } else {
                        if ("unaryMinus" === t.args[1].fn && (t = t.args[0]), "ConstantNode" !== t.args[1].type || !Object(zt.i)(parseFloat(t.args[1].value))) throw new Error("There is a non-integer exponent");
                        e(t.args[0])
                      }
                    else if ("SymbolNode" === r) {
                      var a = t.name; - 1 === i.indexOf(a) && i.push(a)
                    } else if ("ParenthesisNode" === r) e(t.content);
                    else if ("ConstantNode" !== r) throw new Error("type " + r + " is not allowed in polynomial expression")
                  }(a), {
                    expression: a,
                    variables: i
                  }
                }(e, r, !0, i.firstRules),
                o = a.variables.length;
              if (e = a.expression, 1 <= o) {
                e = function e(t, r, n) {
                  var i = t.type,
                    a = 1 < arguments.length;
                  if ("OperatorNode" === i && t.isBinary()) {
                    var o, s = !1;
                    if ("^" === t.op && ("ParenthesisNode" === t.args[0].type || "OperatorNode" === t.args[0].type) && "ConstantNode" === t.args[1].type && (s = 2 <= (o = parseFloat(t.args[1].value)) && Object(zt.i)(o)), s) {
                      if (2 < o) {
                        var u = t.args[0],
                          c = new g("^", "pow", [t.args[0].cloneDeep(), new y(o - 1)]);
                        t = new g("*", "multiply", [u, c])
                      } else t = new g("*", "multiply", [t.args[0], t.args[0].cloneDeep()]);
                      a && ("content" === n ? r.content = t : r.args[n] = t)
                    }
                  }
                  if ("ParenthesisNode" === i) e(t.content, t, "content");
                  else if ("ConstantNode" !== i && "SymbolNode" !== i)
                    for (var f = 0; f < t.args.length; f++) e(t.args[f], t, f);
                  return a ? void 0 : t
                }(e);
                var s, u, c, f = !0,
                  l = !1;
                for (e = p(e, i.firstRules, {}, {
                    exactFractions: !1
                  }); u = f ? i.distrDivRules : i.sucDivRules, f = !f, (c = (e = p(e, u)).toString()) !== s;) l = !0, s = c;
                l && (e = p(e, i.firstRulesAgain, {}, {
                  exactFractions: !1
                })), e = p(e, i.finalRules, {}, {
                  exactFractions: !1
                })
              }
              var m = [],
                h = {};
              return "OperatorNode" === e.type && e.isBinary() && "/" === e.op ? (1 === o && (e.args[0] = t(e.args[0], m), e.args[1] = t(e.args[1])), n && (h.numerator = e.args[0], h.denominator = e.args[1])) : (1 === o && (e = t(e, m)), n && (h.numerator = e, h.denominator = null)), n ? (h.coefficients = m, h.variables = a.variables, h.expression = e, h) : e
            }
          });
        return O
      }),
      Uu = Object(Dt.a)("reviver", ["classes"], function (e) {
        var t = e.classes;
        return function (e, r) {
          var n = t[r && r.mathjs];
          return n && "function" == typeof n.fromJSON ? n.fromJSON(r) : r
        }
      }),
      Lu = Math.PI,
      Hu = 2 * Math.PI,
      $u = Math.E,
      Gu = Object(Dt.a)("true", [], function () {
        return !0
      }),
      Zu = Object(Dt.a)("false", [], function () {
        return !1
      }),
      Vu = Object(Dt.a)("null", [], function () {
        return null
      }),
      Ju = St("Infinity", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          r = e.BigNumber;
        return "BigNumber" === t.number ? new r(1 / 0) : 1 / 0
      }),
      Wu = St("NaN", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          r = e.BigNumber;
        return "BigNumber" === t.number ? new r(NaN) : NaN
      }),
      Yu = St("pi", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          r = e.BigNumber;
        return "BigNumber" === t.number ? za(r) : Lu
      }),
      Xu = St("tau", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          r = e.BigNumber;
        return "BigNumber" === t.number ? Da(r) : Hu
      }),
      Qu = St("e", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          r = e.BigNumber;
        return "BigNumber" === t.number ? Ba(r) : $u
      }),
      Ku = St("phi", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          r = e.BigNumber;
        return "BigNumber" === t.number ? ka(r) : 1.618033988749895
      }),
      ec = St("LN2", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          r = e.BigNumber;
        return "BigNumber" === t.number ? new r(2).ln() : Math.LN2
      }),
      tc = St("LN10", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          r = e.BigNumber;
        return "BigNumber" === t.number ? new r(10).ln() : Math.LN10
      }),
      rc = St("LOG2E", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          r = e.BigNumber;
        return "BigNumber" === t.number ? new r(1).div(new r(2).ln()) : Math.LOG2E
      }),
      nc = St("LOG10E", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          r = e.BigNumber;
        return "BigNumber" === t.number ? new r(1).div(new r(10).ln()) : Math.LOG10E
      }),
      ic = St("SQRT1_2", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          r = e.BigNumber;
        return "BigNumber" === t.number ? new r("0.5").sqrt() : Math.SQRT1_2
      }),
      ac = St("SQRT2", ["config", "?BigNumber"], function (e) {
        var t = e.config,
          r = e.BigNumber;
        return "BigNumber" === t.number ? new r(2).sqrt() : Math.SQRT2
      }),
      oc = St("i", ["Complex"], function (e) {
        return e.Complex.I
      }),
      sc = Object(Dt.a)("PI", ["pi"], function (e) {
        return e.pi
      }),
      uc = Object(Dt.a)("E", ["e"], function (e) {
        return e.e
      }),
      cc = Object(Dt.a)("version", [], function () {
        return "6.0.2"
      }),
      fc = At("speedOfLight", "299792458", "m s^-1"),
      lc = At("gravitationConstant", "6.67430e-11", "m^3 kg^-1 s^-2"),
      pc = At("planckConstant", "6.62607015e-34", "J s"),
      mc = At("reducedPlanckConstant", "1.0545718176461565e-34", "J s"),
      hc = At("magneticConstant", "1.25663706212e-6", "N A^-2"),
      dc = At("electricConstant", "8.8541878128e-12", "F m^-1"),
      yc = At("vacuumImpedance", "376.730313667", "ohm"),
      gc = At("coulomb", "8.987551792261171e9", "N m^2 C^-2"),
      bc = At("elementaryCharge", "1.602176634e-19", "C"),
      vc = At("bohrMagneton", "9.2740100783e-24", "J T^-1"),
      xc = At("conductanceQuantum", "7.748091729863649e-5", "S"),
      wc = At("inverseConductanceQuantum", "12906.403729652257", "ohm"),
      Nc = At("magneticFluxQuantum", "2.0678338484619295e-15", "Wb"),
      Oc = At("nuclearMagneton", "5.0507837461e-27", "J T^-1"),
      Mc = At("klitzing", "25812.807459304513", "ohm"),
      Ec = (At("josephson", "4.835978484169836e14 Hz V", "Hz V^-1"), At("bohrRadius", "5.29177210903e-11", "m")),
      jc = At("classicalElectronRadius", "2.8179403262e-15", "m"),
      Sc = At("electronMass", "9.1093837015e-31", "kg"),
      Ac = At("fermiCoupling", "1.1663787e-5", "GeV^-2"),
      Cc = Ct("fineStructure", .0072973525693),
      Tc = At("hartreeEnergy", "4.3597447222071e-18", "J"),
      _c = At("protonMass", "1.67262192369e-27", "kg"),
      Ic = At("deuteronMass", "3.3435830926e-27", "kg"),
      qc = At("neutronMass", "1.6749271613e-27", "kg"),
      Bc = At("quantumOfCirculation", "3.6369475516e-4", "m^2 s^-1"),
      kc = At("rydberg", "10973731.568160", "m^-1"),
      zc = At("thomsonCrossSection", "6.6524587321e-29", "m^2"),
      Dc = Ct("weakMixingAngle", .2229),
      Rc = Ct("efimovFactor", 22.7),
      Pc = At("atomicMass", "1.66053906660e-27", "kg"),
      Fc = At("avogadro", "6.02214076e23", "mol^-1"),
      Uc = At("boltzmann", "1.380649e-23", "J K^-1"),
      Lc = At("faraday", "96485.33212331001", "C mol^-1"),
      Hc = At("firstRadiation", "3.7417718521927573e-16", "W m^2"),
      $c = At("loschmidt", "2.686780111798444e25", "m^-3"),
      Gc = At("gasConstant", "8.31446261815324", "J K^-1 mol^-1"),
      Zc = At("molarPlanckConstant", "3.990312712893431e-10", "J s mol^-1"),
      Vc = At("molarVolume", "0.022413969545014137", "m^3 mol^-1"),
      Jc = Ct("sackurTetrode", -1.16487052358),
      Wc = At("secondRadiation", "0.014387768775039337", "m K"),
      Yc = At("stefanBoltzmann", "5.67037441918443e-8", "W m^-2 K^-4"),
      Xc = At("wienDisplacement", "2.897771955e-3", "m K"),
      Qc = At("molarMass", "0.99999999965e-3", "kg mol^-1"),
      Kc = At("molarMassC12", "11.9999999958e-3", "kg mol^-1"),
      ef = At("gravity", "9.80665", "m s^-2"),
      tf = At("planckLength", "1.616255e-35", "m"),
      rf = At("planckMass", "2.176435e-8", "kg"),
      nf = At("planckTime", "5.391245e-44", "s"),
      af = At("planckCharge", "1.87554603778e-18", "C"),
      of = At("planckTemperature", "1.416785e+32", "K"),
      sf = Object(Dt.a)("apply", ["typed", "isInteger"], function (e) {
        var t = e.typed,
          r = e.isInteger,
          n = Pr({
            typed: t,
            isInteger: r
          });
        return t("apply", {
          "...any": function (e) {
            var t = e[1];
            Object(qt.y)(t) ? e[1] = t - 1 : Object(qt.e)(t) && (e[1] = t.minus(1));
            try {
              return n.apply(null, e)
            } catch (e) {
              throw Xe(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      uf = Object(Dt.a)("column", ["typed", "Index", "matrix", "range"], function (e) {
        var t = e.typed,
          r = e.Index,
          n = e.matrix,
          i = e.range,
          a = Un({
            typed: t,
            Index: r,
            matrix: n,
            range: i
          });
        return t("column", {
          "...any": function (e) {
            var t = e.length - 1,
              r = e[t];
            Object(qt.y)(r) && (e[t] = r - 1);
            try {
              return a.apply(null, e)
            } catch (e) {
              throw Xe(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      cf = Object(Dt.a)("filter", ["typed"], function (e) {
        function t(e, t, r) {
          var i, a;
          return e[0] && (i = e[0].compile().evaluate(r)), e[1] && (a = Object(qt.J)(e[1]) || Object(qt.q)(e[1]) ? e[1].compile().evaluate(r) : Tt(e[1], t, r)), n(i, a)
        }
        var r = e.typed;
        t.rawArgs = !0;
        var n = r("filter", {
          "Array, function": _t,
          "Matrix, function": function (e, t) {
            return e.create(_t(e.toArray(), t))
          },
          "Array, RegExp": Qt.d,
          "Matrix, RegExp": function (e, t) {
            return e.create(Object(Qt.d)(e.toArray(), t))
          }
        });
        return t
      }, {
        isTransformFunction: !0
      }),
      ff = Object(Dt.a)("forEach", ["typed"], function (e) {
        function t(e, t, r) {
          var i, a;
          return e[0] && (i = e[0].compile().evaluate(r)), e[1] && (a = Object(qt.J)(e[1]) || Object(qt.q)(e[1]) ? e[1].compile().evaluate(r) : Tt(e[1], t, r)), n(i, a)
        }
        var r = e.typed;
        t.rawArgs = !0;
        var n = r("forEach", {
          "Array | Matrix, function": function (e, t) {
            var r = fe(t);
            ! function n(i, a) {
              Array.isArray(i) ? Object(Qt.f)(i, function (e, t) {
                n(e, a.concat(t + 1))
              }) : 1 === r ? t(i) : 2 === r ? t(i, a) : t(i, a, e)
            }(e.valueOf(), [])
          }
        });
        return t
      }, {
        isTransformFunction: !0
      }),
      lf = Object(Dt.a)("map", ["typed"], function (e) {
        function t(e, t, r) {
          var i, a;
          return e[0] && (i = e[0].compile().evaluate(r)), e[1] && (a = Object(qt.J)(e[1]) || Object(qt.q)(e[1]) ? e[1].compile().evaluate(r) : Tt(e[1], t, r)), n(i, a)
        }
        var r = e.typed;
        t.rawArgs = !0;
        var n = r("map", {
          "Array, function": function (e, t) {
            return It(e, t, e)
          },
          "Matrix, function": function (e, t) {
            return e.create(It(e.valueOf(), t, e))
          }
        });
        return t
      }, {
        isTransformFunction: !0
      }),
      pf = Object(Dt.a)("max", ["typed", "larger"], function (e) {
        var t = e.typed,
          r = e.larger,
          n = Aa({
            typed: t,
            larger: r
          });
        return t("max", {
          "...any": function (e) {
            if (2 === e.length && Object(qt.i)(e[0])) {
              var t = e[1];
              Object(qt.y)(t) ? e[1] = t - 1 : Object(qt.e)(t) && (e[1] = t.minus(1))
            }
            try {
              return n.apply(null, e)
            } catch (e) {
              throw Xe(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      mf = Object(Dt.a)("mean", ["typed", "add", "divide"], function (e) {
        var t = e.typed,
          r = e.add,
          n = e.divide,
          i = Ys({
            typed: t,
            add: r,
            divide: n
          });
        return t("mean", {
          "...any": function (e) {
            if (2 === e.length && Object(qt.i)(e[0])) {
              var t = e[1];
              Object(qt.y)(t) ? e[1] = t - 1 : Object(qt.e)(t) && (e[1] = t.minus(1))
            }
            try {
              return i.apply(null, e)
            } catch (e) {
              throw Xe(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      hf = Object(Dt.a)("min", ["typed", "smaller"], function (e) {
        var t = e.typed,
          r = e.smaller,
          n = Ca({
            typed: t,
            smaller: r
          });
        return t("min", {
          "...any": function (e) {
            if (2 === e.length && Object(qt.i)(e[0])) {
              var t = e[1];
              Object(qt.y)(t) ? e[1] = t - 1 : Object(qt.e)(t) && (e[1] = t.minus(1))
            }
            try {
              return n.apply(null, e)
            } catch (e) {
              throw Xe(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      df = Object(Dt.a)("range", ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.matrix,
          i = e.bignumber,
          a = e.smaller,
          o = e.smallerEq,
          s = e.larger,
          u = e.largerEq,
          c = ni({
            typed: t,
            config: r,
            matrix: n,
            bignumber: i,
            smaller: a,
            smallerEq: o,
            larger: s,
            largerEq: u
          });
        return t("range", {
          "...any": function (e) {
            return "boolean" != typeof e[e.length - 1] && e.push(!0), c.apply(null, e)
          }
        })
      }, {
        isTransformFunction: !0
      }),
      yf = Object(Dt.a)("row", ["typed", "Index", "matrix", "range"], function (e) {
        var t = e.typed,
          r = e.Index,
          n = e.matrix,
          i = e.range,
          a = ui({
            typed: t,
            Index: r,
            matrix: n,
            range: i
          });
        return t("row", {
          "...any": function (e) {
            var t = e.length - 1,
              r = e[t];
            Object(qt.y)(r) && (e[t] = r - 1);
            try {
              return a.apply(null, e)
            } catch (e) {
              throw Xe(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      gf = Object(Dt.a)("subset", ["typed", "matrix"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = hi({
            typed: t,
            matrix: r
          });
        return t("subset", {
          "...any": function (e) {
            try {
              return n.apply(null, e)
            } catch (e) {
              throw Xe(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      bf = Object(Dt.a)("concat", ["typed", "matrix", "isInteger"], function (e) {
        var t = e.typed,
          r = e.matrix,
          n = e.isInteger,
          i = Fn({
            typed: t,
            matrix: r,
            isInteger: n
          });
        return t("concat", {
          "...any": function (e) {
            var t = e.length - 1,
              r = e[t];
            Object(qt.y)(r) ? e[t] = r - 1 : Object(qt.e)(r) && (e[t] = r.minus(1));
            try {
              return i.apply(null, e)
            } catch (e) {
              throw Xe(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      vf = Object(Dt.a)("std", ["typed", "sqrt", "variance"], function (e) {
        var t = e.typed,
          r = e.sqrt,
          n = e.variance,
          i = iu({
            typed: t,
            sqrt: r,
            variance: n
          });
        return t("std", {
          "...any": function (e) {
            if (2 <= e.length && Object(qt.i)(e[0])) {
              var t = e[1];
              Object(qt.y)(t) ? e[1] = t - 1 : Object(qt.e)(t) && (e[1] = t.minus(1))
            }
            try {
              return i.apply(null, e)
            } catch (e) {
              throw Xe(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      xf = Object(Dt.a)("sum", ["typed", "config", "add", "?bignumber", "?fraction"], function (e) {
        var t = e.typed,
          r = e.config,
          n = e.add,
          i = e.bignumber,
          a = e.fraction,
          o = Ws({
            typed: t,
            config: r,
            add: n,
            bignumber: i,
            fraction: a
          });
        return t("sum", {
          "...any": function (e) {
            if (2 === e.length && Object(qt.i)(e[0])) {
              var t = e[1];
              Object(qt.y)(t) ? e[1] = t - 1 : Object(qt.e)(t) && (e[1] = t.minus(1))
            }
            try {
              return o.apply(null, e)
            } catch (e) {
              throw Xe(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      }),
      wf = "variance",
      Nf = Object(Dt.a)(wf, ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"], function (e) {
        var t = e.typed,
          r = e.add,
          n = e.subtract,
          i = e.multiply,
          a = e.divide,
          o = e.apply,
          s = e.isNaN,
          u = tu({
            typed: t,
            add: r,
            subtract: n,
            multiply: i,
            divide: a,
            apply: o,
            isNaN: s
          });
        return t(wf, {
          "...any": function (e) {
            if (2 <= e.length && Object(qt.i)(e[0])) {
              var t = e[1];
              Object(qt.y)(t) ? e[1] = t - 1 : Object(qt.e)(t) && (e[1] = t.minus(1))
            }
            try {
              return u.apply(null, e)
            } catch (e) {
              throw Xe(e)
            }
          }
        })
      }, {
        isTransformFunction: !0
      });
    r.d(t, "createTyped", function () {
      return Pt
    }), r.d(t, "createResultSet", function () {
      return Ft
    }), r.d(t, "createBigNumberClass", function () {
      return Ht
    }), r.d(t, "createComplexClass", function () {
      return Zt
    }), r.d(t, "createFractionClass", function () {
      return Wt
    }), r.d(t, "createRangeClass", function () {
      return Yt
    }), r.d(t, "createMatrixClass", function () {
      return Xt
    }), r.d(t, "createDenseMatrixClass", function () {
      return rr
    }), r.d(t, "createClone", function () {
      return nr
    }), r.d(t, "createIsInteger", function () {
      return or
    }), r.d(t, "createIsNegative", function () {
      return ur
    }), r.d(t, "createIsNumeric", function () {
      return fr
    }), r.d(t, "createHasNumericValue", function () {
      return pr
    }), r.d(t, "createIsPositive", function () {
      return hr
    }), r.d(t, "createIsZero", function () {
      return dr
    }), r.d(t, "createIsNaN", function () {
      return yr
    }), r.d(t, "createTypeOf", function () {
      return br
    }), r.d(t, "createDeprecatedTypeof", function () {
      return vr
    }), r.d(t, "createEqualScalar", function () {
      return wr
    }), r.d(t, "createSparseMatrixClass", function () {
      return Nr
    }), r.d(t, "createNumber", function () {
      return Or
    }), r.d(t, "createString", function () {
      return Mr
    }), r.d(t, "createBoolean", function () {
      return jr
    }), r.d(t, "createBignumber", function () {
      return Sr
    }), r.d(t, "createComplex", function () {
      return Ar
    }), r.d(t, "createFraction", function () {
      return Cr
    }), r.d(t, "createMatrix", function () {
      return Tr
    }), r.d(t, "createSplitUnit", function () {
      return Ir
    }), r.d(t, "createUnaryMinus", function () {
      return kr
    }), r.d(t, "createUnaryPlus", function () {
      return Dr
    }), r.d(t, "createAbs", function () {
      return Rr
    }), r.d(t, "createApply", function () {
      return Pr
    }), r.d(t, "createAddScalar", function () {
      return Ur
    }), r.d(t, "createCbrt", function () {
      return Lr
    }), r.d(t, "createCeil", function () {
      return Hr
    }), r.d(t, "createCube", function () {
      return $r
    }), r.d(t, "createExp", function () {
      return Gr
    }), r.d(t, "createExpm1", function () {
      return Zr
    }), r.d(t, "createFix", function () {
      return Vr
    }), r.d(t, "createFloor", function () {
      return Jr
    }), r.d(t, "createGcd", function () {
      return en
    }), r.d(t, "createLcm", function () {
      return an
    }), r.d(t, "createLog10", function () {
      return on
    }), r.d(t, "createLog2", function () {
      return sn
    }), r.d(t, "createMod", function () {
      return ln
    }), r.d(t, "createMultiplyScalar", function () {
      return pn
    }), r.d(t, "createMultiply", function () {
      return hn
    }), r.d(t, "createNthRoot", function () {
      return yn
    }), r.d(t, "createSign", function () {
      return gn
    }), r.d(t, "createSqrt", function () {
      return bn
    }), r.d(t, "createSquare", function () {
      return vn
    }), r.d(t, "createSubtract", function () {
      return wn
    }), r.d(t, "createXgcd", function () {
      return Nn
    }), r.d(t, "createDotMultiply", function () {
      return En
    }), r.d(t, "createBitAnd", function () {
      return Sn
    }), r.d(t, "createBitNot", function () {
      return An
    }), r.d(t, "createBitOr", function () {
      return Cn
    }), r.d(t, "createBitXor", function () {
      return _n
    }), r.d(t, "createArg", function () {
      return In
    }), r.d(t, "createConj", function () {
      return qn
    }), r.d(t, "createIm", function () {
      return Bn
    }), r.d(t, "createRe", function () {
      return kn
    }), r.d(t, "createNot", function () {
      return Dn
    }), r.d(t, "createOr", function () {
      return Rn
    }), r.d(t, "createXor", function () {
      return Pn
    }), r.d(t, "createConcat", function () {
      return Fn
    }), r.d(t, "createColumn", function () {
      return Un
    }), r.d(t, "createCross", function () {
      return Ln
    }), r.d(t, "createDiag", function () {
      return Hn
    }), r.d(t, "createEye", function () {
      return $n
    }), r.d(t, "createFilter", function () {
      return Gn
    }), r.d(t, "createFlatten", function () {
      return Vn
    }), r.d(t, "createForEach", function () {
      return Wn
    }), r.d(t, "createGetMatrixDataType", function () {
      return Xn
    }), r.d(t, "createIdentity", function () {
      return Kn
    }), r.d(t, "createKron", function () {
      return ei
    }), r.d(t, "createMap", function () {
      return ti
    }), r.d(t, "createOnes", function () {
      return ri
    }), r.d(t, "createRange", function () {
      return ni
    }), r.d(t, "createReshape", function () {
      return ai
    }), r.d(t, "createResize", function () {
      return si
    }), r.d(t, "createRow", function () {
      return ui
    }), r.d(t, "createSize", function () {
      return ci
    }), r.d(t, "createSqueeze", function () {
      return li
    }), r.d(t, "createSubset", function () {
      return hi
    }), r.d(t, "createTranspose", function () {
      return di
    }), r.d(t, "createCtranspose", function () {
      return gi
    }), r.d(t, "createZeros", function () {
      return bi
    }), r.d(t, "createErf", function () {
      return vi
    }), r.d(t, "createMode", function () {
      return Oi
    }), r.d(t, "createProd", function () {
      return Mi
    }), r.d(t, "createFormat", function () {
      return Ei
    }), r.d(t, "createPrint", function () {
      return ji
    }), r.d(t, "createTo", function () {
      return Si
    }), r.d(t, "createIsPrime", function () {
      return Ci
    }), r.d(t, "createNumeric", function () {
      return Ti
    }), r.d(t, "createDivideScalar", function () {
      return Ii
    }), r.d(t, "createPow", function () {
      return qi
    }), r.d(t, "createRound", function () {
      return zi
    }), r.d(t, "createLog", function () {
      return Ri
    }), r.d(t, "createLog1p", function () {
      return Pi
    }), r.d(t, "createNthRoots", function () {
      return Ui
    }), r.d(t, "createDotPow", function () {
      return Li
    }), r.d(t, "createDotDivide", function () {
      return $i
    }), r.d(t, "createLsolve", function () {
      return Gi
    }), r.d(t, "createUsolve", function () {
      return Zi
    }), r.d(t, "createLeftShift", function () {
      return Wi
    }), r.d(t, "createRightArithShift", function () {
      return Xi
    }), r.d(t, "createRightLogShift", function () {
      return Ki
    }), r.d(t, "createAnd", function () {
      return ea
    }), r.d(t, "createCompare", function () {
      return ra
    }), r.d(t, "createCompareNatural", function () {
      return oa
    }), r.d(t, "createCompareText", function () {
      return ua
    }), r.d(t, "createEqual", function () {
      return fa
    }), r.d(t, "createEqualText", function () {
      return pa
    }), r.d(t, "createSmaller", function () {
      return ha
    }), r.d(t, "createSmallerEq", function () {
      return ya
    }), r.d(t, "createLarger", function () {
      return ba
    }), r.d(t, "createLargerEq", function () {
      return xa
    }), r.d(t, "createDeepEqual", function () {
      return Na
    }), r.d(t, "createUnequal", function () {
      return Ma
    }), r.d(t, "createPartitionSelect", function () {
      return ja
    }), r.d(t, "createSort", function () {
      return Sa
    }), r.d(t, "createMax", function () {
      return Aa
    }), r.d(t, "createMin", function () {
      return Ca
    }), r.d(t, "createImmutableDenseMatrixClass", function () {
      return Ta
    }), r.d(t, "createIndexClass", function () {
      return _a
    }), r.d(t, "createFibonacciHeapClass", function () {
      return Ia
    }), r.d(t, "createSpaClass", function () {
      return qa
    }), r.d(t, "createUnitClass", function () {
      return Ra
    }), r.d(t, "createUnitFunction", function () {
      return Pa
    }), r.d(t, "createSparse", function () {
      return Fa
    }), r.d(t, "createCreateUnit", function () {
      return La
    }), r.d(t, "createAcos", function () {
      return Ha
    }), r.d(t, "createAcosh", function () {
      return Ga
    }), r.d(t, "createAcot", function () {
      return Za
    }), r.d(t, "createAcoth", function () {
      return Va
    }), r.d(t, "createAcsc", function () {
      return Ja
    }), r.d(t, "createAcsch", function () {
      return Wa
    }), r.d(t, "createAsec", function () {
      return Ya
    }), r.d(t, "createAsech", function () {
      return Xa
    }), r.d(t, "createAsin", function () {
      return Qa
    }), r.d(t, "createAsinh", function () {
      return Ka
    }), r.d(t, "createAtan", function () {
      return eo
    }), r.d(t, "createAtan2", function () {
      return to
    }), r.d(t, "createAtanh", function () {
      return ro
    }), r.d(t, "createCos", function () {
      return no
    }), r.d(t, "createCosh", function () {
      return io
    }), r.d(t, "createCot", function () {
      return ao
    }), r.d(t, "createCoth", function () {
      return oo
    }), r.d(t, "createCsc", function () {
      return so
    }), r.d(t, "createCsch", function () {
      return uo
    }), r.d(t, "createSec", function () {
      return co
    }), r.d(t, "createSech", function () {
      return fo
    }), r.d(t, "createSin", function () {
      return lo
    }), r.d(t, "createSinh", function () {
      return po
    }), r.d(t, "createTan", function () {
      return mo
    }), r.d(t, "createTanh", function () {
      return ho
    }), r.d(t, "createSetCartesian", function () {
      return go
    }), r.d(t, "createSetDifference", function () {
      return vo
    }), r.d(t, "createSetDistinct", function () {
      return wo
    }), r.d(t, "createSetIntersect", function () {
      return Oo
    }), r.d(t, "createSetIsSubset", function () {
      return Eo
    }), r.d(t, "createSetMultiplicity", function () {
      return So
    }), r.d(t, "createSetPowerset", function () {
      return Co
    }), r.d(t, "createSetSize", function () {
      return _o
    }), r.d(t, "createSetSymDifference", function () {
      return qo
    }), r.d(t, "createSetUnion", function () {
      return ko
    }), r.d(t, "createAdd", function () {
      return zo
    }), r.d(t, "createHypot", function () {
      return Do
    }), r.d(t, "createNorm", function () {
      return Ro
    }), r.d(t, "createDot", function () {
      return Po
    }), r.d(t, "createTrace", function () {
      return Fo
    }), r.d(t, "createIndex", function () {
      return Uo
    }), r.d(t, "createNode", function () {
      return Ho
    }), r.d(t, "createAccessorNode", function () {
      return $o
    }), r.d(t, "createArrayNode", function () {
      return Go
    }), r.d(t, "createAssignmentNode", function () {
      return Vo
    }), r.d(t, "createBlockNode", function () {
      return Jo
    }), r.d(t, "createConditionalNode", function () {
      return Wo
    }), r.d(t, "createConstantNode", function () {
      return rs
    }), r.d(t, "createFunctionAssignmentNode", function () {
      return ns
    }), r.d(t, "createIndexNode", function () {
      return as
    }), r.d(t, "createObjectNode", function () {
      return os
    }), r.d(t, "createOperatorNode", function () {
      return ss
    }), r.d(t, "createParenthesisNode", function () {
      return us
    }), r.d(t, "createRangeNode", function () {
      return cs
    }), r.d(t, "createRelationalNode", function () {
      return fs
    }), r.d(t, "createSymbolNode", function () {
      return ls
    }), r.d(t, "createFunctionNode", function () {
      return ps
    }), r.d(t, "createParse", function () {
      return ms
    }), r.d(t, "createCompile", function () {
      return ds
    }), r.d(t, "createEvaluate", function () {
      return gs
    }), r.d(t, "createDeprecatedEval", function () {
      return bs
    }), r.d(t, "createParserClass", function () {
      return vs
    }), r.d(t, "createParser", function () {
      return xs
    }), r.d(t, "createLup", function () {
      return ws
    }), r.d(t, "createQr", function () {
      return Ns
    }), r.d(t, "createSlu", function () {
      return As
    }), r.d(t, "createLusolve", function () {
      return Ts
    }), r.d(t, "createHelpClass", function () {
      return _s
    }), r.d(t, "createChainClass", function () {
      return Is
    }), r.d(t, "createHelp", function () {
      return Ps
    }), r.d(t, "createChain", function () {
      return Fs
    }), r.d(t, "createDet", function () {
      return Us
    }), r.d(t, "createInv", function () {
      return Ls
    }), r.d(t, "createExpm", function () {
      return Hs
    }), r.d(t, "createSqrtm", function () {
      return $s
    }), r.d(t, "createDivide", function () {
      return Gs
    }), r.d(t, "createDistance", function () {
      return Vs
    }), r.d(t, "createIntersect", function () {
      return Js
    }), r.d(t, "createSum", function () {
      return Ws
    }), r.d(t, "createMean", function () {
      return Ys
    }), r.d(t, "createMedian", function () {
      return Xs
    }), r.d(t, "createMad", function () {
      return Qs
    }), r.d(t, "createVariance", function () {
      return tu
    }), r.d(t, "createDeprecatedVar", function () {
      return ru
    }), r.d(t, "createQuantileSeq", function () {
      return nu
    }), r.d(t, "createStd", function () {
      return iu
    }), r.d(t, "createCombinations", function () {
      return au
    }), r.d(t, "createGamma", function () {
      return uu
    }), r.d(t, "createFactorial", function () {
      return fu
    }), r.d(t, "createKldivergence", function () {
      return pu
    }), r.d(t, "createMultinomial", function () {
      return hu
    }), r.d(t, "createPermutations", function () {
      return yu
    }), r.d(t, "createPickRandom", function () {
      return xu
    }), r.d(t, "createRandom", function () {
      return Nu
    }), r.d(t, "createRandomInt", function () {
      return Mu
    }), r.d(t, "createStirlingS2", function () {
      return ju
    }), r.d(t, "createBellNumbers", function () {
      return Au
    }), r.d(t, "createCatalan", function () {
      return Tu
    }), r.d(t, "createComposition", function () {
      return Iu
    }), r.d(t, "createSimplify", function () {
      return Du
    }), r.d(t, "createDerivative", function () {
      return Ru
    }), r.d(t, "createRationalize", function () {
      return Fu
    }), r.d(t, "createReviver", function () {
      return Uu
    }), r.d(t, "createE", function () {
      return Qu
    }), r.d(t, "createUppercaseE", function () {
      return uc
    }), r.d(t, "createFalse", function () {
      return Zu
    }), r.d(t, "createI", function () {
      return oc
    }), r.d(t, "createInfinity", function () {
      return Ju
    }), r.d(t, "createLN10", function () {
      return tc
    }), r.d(t, "createLN2", function () {
      return ec
    }), r.d(t, "createLOG10E", function () {
      return nc
    }), r.d(t, "createLOG2E", function () {
      return rc
    }), r.d(t, "createNaN", function () {
      return Wu
    }), r.d(t, "createNull", function () {
      return Vu
    }), r.d(t, "createPhi", function () {
      return Ku
    }), r.d(t, "createPi", function () {
      return Yu
    }), r.d(t, "createUppercasePi", function () {
      return sc
    }), r.d(t, "createSQRT1_2", function () {
      return ic
    }), r.d(t, "createSQRT2", function () {
      return ac
    }), r.d(t, "createTau", function () {
      return Xu
    }), r.d(t, "createTrue", function () {
      return Gu
    }), r.d(t, "createVersion", function () {
      return cc
    }), r.d(t, "createAtomicMass", function () {
      return Pc
    }), r.d(t, "createAvogadro", function () {
      return Fc
    }), r.d(t, "createBohrMagneton", function () {
      return vc
    }), r.d(t, "createBohrRadius", function () {
      return Ec
    }), r.d(t, "createBoltzmann", function () {
      return Uc
    }), r.d(t, "createClassicalElectronRadius", function () {
      return jc
    }), r.d(t, "createConductanceQuantum", function () {
      return xc
    }), r.d(t, "createCoulomb", function () {
      return gc
    }), r.d(t, "createDeuteronMass", function () {
      return Ic
    }), r.d(t, "createEfimovFactor", function () {
      return Rc
    }), r.d(t, "createElectricConstant", function () {
      return dc
    }), r.d(t, "createElectronMass", function () {
      return Sc
    }), r.d(t, "createElementaryCharge", function () {
      return bc
    }), r.d(t, "createFaraday", function () {
      return Lc
    }), r.d(t, "createFermiCoupling", function () {
      return Ac
    }), r.d(t, "createFineStructure", function () {
      return Cc
    }), r.d(t, "createFirstRadiation", function () {
      return Hc
    }), r.d(t, "createGasConstant", function () {
      return Gc
    }), r.d(t, "createGravitationConstant", function () {
      return lc
    }), r.d(t, "createGravity", function () {
      return ef
    }), r.d(t, "createHartreeEnergy", function () {
      return Tc
    }), r.d(t, "createInverseConductanceQuantum", function () {
      return wc
    }), r.d(t, "createKlitzing", function () {
      return Mc
    }), r.d(t, "createLoschmidt", function () {
      return $c
    }), r.d(t, "createMagneticConstant", function () {
      return hc
    }), r.d(t, "createMagneticFluxQuantum", function () {
      return Nc
    }), r.d(t, "createMolarMass", function () {
      return Qc
    }), r.d(t, "createMolarMassC12", function () {
      return Kc
    }), r.d(t, "createMolarPlanckConstant", function () {
      return Zc
    }), r.d(t, "createMolarVolume", function () {
      return Vc
    }), r.d(t, "createNeutronMass", function () {
      return qc
    }), r.d(t, "createNuclearMagneton", function () {
      return Oc
    }), r.d(t, "createPlanckCharge", function () {
      return af
    }), r.d(t, "createPlanckConstant", function () {
      return pc
    }), r.d(t, "createPlanckLength", function () {
      return tf
    }), r.d(t, "createPlanckMass", function () {
      return rf
    }), r.d(t, "createPlanckTemperature", function () {
      return of
    }), r.d(t, "createPlanckTime", function () {
      return nf
    }), r.d(t, "createProtonMass", function () {
      return _c
    }), r.d(t, "createQuantumOfCirculation", function () {
      return Bc
    }), r.d(t, "createReducedPlanckConstant", function () {
      return mc
    }), r.d(t, "createRydberg", function () {
      return kc
    }), r.d(t, "createSackurTetrode", function () {
      return Jc
    }), r.d(t, "createSecondRadiation", function () {
      return Wc
    }), r.d(t, "createSpeedOfLight", function () {
      return fc
    }), r.d(t, "createStefanBoltzmann", function () {
      return Yc
    }), r.d(t, "createThomsonCrossSection", function () {
      return zc
    }), r.d(t, "createVacuumImpedance", function () {
      return yc
    }), r.d(t, "createWeakMixingAngle", function () {
      return Dc
    }), r.d(t, "createWienDisplacement", function () {
      return Xc
    }), r.d(t, "createApplyTransform", function () {
      return sf
    }), r.d(t, "createColumnTransform", function () {
      return uf
    }), r.d(t, "createFilterTransform", function () {
      return cf
    }), r.d(t, "createForEachTransform", function () {
      return ff
    }), r.d(t, "createIndexTransform", function () {
      return is
    }), r.d(t, "createMapTransform", function () {
      return lf
    }), r.d(t, "createMaxTransform", function () {
      return pf
    }), r.d(t, "createMeanTransform", function () {
      return mf
    }), r.d(t, "createMinTransform", function () {
      return hf
    }), r.d(t, "createRangeTransform", function () {
      return df
    }), r.d(t, "createRowTransform", function () {
      return yf
    }), r.d(t, "createSubsetTransform", function () {
      return gf
    }), r.d(t, "createConcatTransform", function () {
      return bf
    }), r.d(t, "createStdTransform", function () {
      return vf
    }), r.d(t, "createSumTransform", function () {
      return xf
    }), r.d(t, "createVarianceTransform", function () {
      return Nf
    })
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function i(e, t, r, i) {
      function a(t, n, a) {
        if (a.wrap && "function" == typeof n && (n = function (e) {
            var t = function () {
              for (var t, n = [], i = 0, a = arguments.length; i < a; i++) t = arguments[i], n[i] = t && t.valueOf();
              return e.apply(r, n)
            };
            return e.transform && (t.transform = e.transform), t
          }(n)), function (e) {
            return "function" == typeof e && "string" == typeof e.signature
          }(n) && (n = e(t, function (e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r, e
          }({}, n.signature, n))), g(r[t]) && g(n)) return n = a.override ? e(t, n.signatures) : e(r[t], n), r[t] = n, delete i[t], o(t, n), void r.emit("import", t, function () {
          return n
        });
        if (void 0 === r[t] || a.override) return r[t] = n, delete i[t], o(t, n), void r.emit("import", t, function () {
          return n
        });
        if (!a.silent) throw new Error('Cannot import "' + t + '": already exists')
      }

      function o(e, t) {
        t && "function" == typeof t.transform ? (r.expression.transform[e] = t.transform, b(e) && (r.expression.mathWithTransform[e] = t.transform)) : (delete r.expression.transform[e], b(e) && (r.expression.mathWithTransform[e] = t))
      }

      function s(e) {
        delete r.expression.transform[e], b(e) ? r.expression.mathWithTransform[e] = r[e] : delete r.expression.mathWithTransform[e]
      }

      function u(n, a) {
        if (Object(y.a)("Factories of type { name, factory } are deprecated since v6. Please create your factory functions using the math.factory function."), "string" == typeof n.name) {
          var o = n.name,
            u = o in r.expression.transform,
            f = n.path ? Object(c.k)(r, n.path) : r,
            l = f.hasOwnProperty(o) ? f[o] : void 0,
            p = function () {
              var r = t(n);
              if (r && "function" == typeof r.transform) throw new Error('Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path="expression.transform"');
              if (g(l) && g(r)) return a.override || (r = e(l, r)), r;
              if (void 0 === l || a.override) return r;
              if (a.silent) return l;
              throw new Error('Cannot import "' + o + '": already exists')
            };
          !1 === n.lazy ? (f[o] = p(), u ? s(o) : ("expression.transform" === n.path || v(n)) && (r.expression.mathWithTransform[o] = p())) : (Object(c.h)(f, o, p), u ? s(o) : ("expression.transform" === n.path || v(n)) && Object(c.h)(r.expression.mathWithTransform, o, p));
          var m = n.path ? n.path + "." + n.name : n.name;
          i[m] = n, r.emit("import", o, p, n.path)
        } else t(n)
      }

      function f(t, n) {
        var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t.fn;
        if (Object(h.b)(a, ".")) throw new Error("Factory name should not contain a nested path. Name: " + JSON.stringify(a));
        var o = w(t) ? r.expression.transform : r,
          u = a in r.expression.transform,
          f = o.hasOwnProperty(a) ? o[a] : void 0,
          l = function () {
            var i = {};
            t.dependencies.map(m.c).forEach(function (e) {
              if (Object(h.b)(e, ".")) throw new Error("Factory dependency should not contain a nested path. Name: " + JSON.stringify(e));
              "math" === e ? i.math = r : "mathWithTransform" === e ? i.mathWithTransform = r.expression.mathWithTransform : "classes" === e ? i.classes = r : i[e] = r[e]
            });
            var o = t(i);
            if (o && "function" == typeof o.transform) throw new Error('Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path="expression.transform"');
            if (void 0 === f || n.override) return o;
            if (g(f) && g(o)) return e(f, o);
            if (n.silent) return f;
            throw new Error('Cannot import "' + a + '": already exists')
          };
        t.meta && !1 === t.meta.lazy ? (o[a] = l(), f && u ? s(a) : (w(t) || x(t)) && Object(c.h)(r.expression.mathWithTransform, a, function () {
          return o[a]
        })) : (Object(c.h)(o, a, l), f && u ? s(a) : (w(t) || x(t)) && Object(c.h)(r.expression.mathWithTransform, a, function () {
          return o[a]
        })), i[a] = t, r.emit("import", a, l)
      }

      function l(e) {
        return "function" == typeof e || "number" == typeof e || "string" == typeof e || "boolean" == typeof e || null === e || Object(p.L)(e) || Object(p.j)(e) || Object(p.e)(e) || Object(p.o)(e) || Object(p.v)(e) || Array.isArray(e)
      }

      function g(e) {
        return "function" == typeof e && "object" === n(e.signatures)
      }

      function b(e) {
        return !N.hasOwnProperty(e)
      }

      function v(e) {
        return void 0 === e.path && !N.hasOwnProperty(e.name)
      }

      function x(e) {
        return !(-1 !== e.fn.indexOf(".") || N.hasOwnProperty(e.fn) || e.meta && e.meta.isClass)
      }

      function w(e) {
        return void 0 !== e && void 0 !== e.meta && !0 === e.meta.isTransformFunction || !1
      }
      var N = {
        expression: !0,
        type: !0,
        docs: !0,
        error: !0,
        json: !0,
        chain: !0
      };
      return function (e, t) {
        var r = arguments.length;
        if (1 !== r && 2 !== r) throw new d.a("import", r, 1, 2);
        t || (t = {});
        var i = {};
        for (var o in function e(r, i, a) {
            if (Object(c.g)(i)) u(i, t);
            else if (Array.isArray(i)) i.forEach(function (t) {
              return e(r, t)
            });
            else if ("object" === n(i))
              for (var o in i) i.hasOwnProperty(o) && e(r, i[o], o);
            else if (Object(m.b)(i) || void 0 !== a) {
              var s = Object(m.b)(i) ? w(i) ? i.fn + ".transform" : i.fn : a;
              if (Object(c.f)(r, s) && r[s] !== i && !t.silent) throw new Error('Cannot import "' + s + '" twice');
              r[s] = i
            } else if (!t.silent) throw new TypeError("Factory, Object, or Array expected")
          }(i, e), i)
          if (i.hasOwnProperty(o)) {
            var s = i[o];
            if (Object(m.b)(s)) f(s, t);
            else if (l(s)) a(o, s, t);
            else if (!t.silent) throw new TypeError("Factory, Object, or Array expected")
          }
      }
    }

    function a(e, t) {
      function r(r) {
        if (r) {
          var n = Object(c.i)(e, c.a);
          o(r, "matrix", b), o(r, "number", v), Object(c.b)(e, r);
          var i = Object(c.i)(e, c.a),
            a = Object(c.i)(r, c.a);
          return t("config", i, n, a), i
        }
        return Object(c.i)(e, c.a)
      }
      return r.MATRIX_OPTIONS = b, r.NUMBER_OPTIONS = v, Object.keys(g).forEach(function (t) {
        Object.defineProperty(r, t, {
          get: function () {
            return e[t]
          },
          enumerable: !0,
          configurable: !0
        })
      }), r
    }

    function o(e, t, r) {
      if (void 0 !== e[t] && ! function (e, t) {
          return -1 !== e.indexOf(t)
        }(r, e[t])) {
        var n = function (e, t) {
          return e.map(function (e) {
            return e.toLowerCase()
          }).indexOf(t.toLowerCase())
        }(r, e[t]); - 1 === n ? console.warn('Warning: Unknown value "' + e[t] + '" for configuration option "' + t + '". Available options: ' + r.map(JSON.stringify).join(", ") + ".") : (console.warn('Warning: Wrong casing for configuration option "' + t + '", should be "' + r[n] + '" instead of "' + e[t] + '".'), e[t] = r[n])
      }
    }

    function s() {
      return (s = Object.assign || function (e) {
        for (var t, r = 1; r < arguments.length; r++)
          for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
      }).apply(this, arguments)
    }

    function u(e, t) {
      var r = s({}, g, t);
      if ("function" != typeof Object.create) throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility.");
      var n = function (e) {
        var t = new l.a;
        return e.on = t.on.bind(t), e.off = t.off.bind(t), e.once = t.once.bind(t), e.emit = t.emit.bind(t), e
      }({
        isNumber: p.y,
        isComplex: p.j,
        isBigNumber: p.e,
        isFraction: p.o,
        isUnit: p.L,
        isString: p.I,
        isArray: p.b,
        isMatrix: p.v,
        isCollection: p.i,
        isDenseMatrix: p.n,
        isSparseMatrix: p.H,
        isRange: p.D,
        isIndex: p.t,
        isBoolean: p.g,
        isResultSet: p.G,
        isHelp: p.s,
        isFunction: p.p,
        isDate: p.m,
        isRegExp: p.F,
        isObject: p.z,
        isNull: p.x,
        isUndefined: p.K,
        isAccessorNode: p.a,
        isArrayNode: p.c,
        isAssignmentNode: p.d,
        isBlockNode: p.f,
        isConditionalNode: p.k,
        isConstantNode: p.l,
        isFunctionAssignmentNode: p.q,
        isFunctionNode: p.r,
        isIndexNode: p.u,
        isNode: p.w,
        isObjectNode: p.A,
        isOperatorNode: p.B,
        isParenthesisNode: p.C,
        isRangeNode: p.E,
        isSymbolNode: p.J,
        isChain: p.h
      });
      n.config = a(r, n.emit), n.expression = {
        transform: {},
        mathWithTransform: {
          config: n.config
        }
      };
      var o = [],
        f = [],
        b = {},
        v = i(function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return n.typed.apply(n.typed, t)
        }, function e(t) {
          if (Object(m.b)(t)) return t(n);
          var i = t[Object.keys(t)[0]];
          if (Object(m.b)(i)) return i(n);
          if (!Object(c.g)(t)) throw console.warn("Factory object with properties `type`, `name`, and `factory` expected", t), new Error("Factory object with properties `type`, `name`, and `factory` expected");
          var a, s = o.indexOf(t);
          return -1 === s ? (a = !0 === t.math ? t.factory(n.type, r, e, n.typed, n) : t.factory(n.type, r, e, n.typed), o.push(t), f.push(a)) : a = f[s], a
        }, n, b);
      return n.import = v, n.on("config", function () {
        Object(c.l)(b).forEach(function (e) {
          e && e.meta && e.meta.recreateOnConfigChange && v(e, {
            override: !0
          })
        })
      }), n.create = u.bind(null, e), n.factory = m.a, n.import(Object(c.l)(Object(c.c)(e))), ["type.isNumber", "type.isComplex", "type.isBigNumber", "type.isFraction", "type.isUnit", "type.isString", "type.isArray", "type.isMatrix", "type.isDenseMatrix", "type.isSparseMatrix", "type.isCollection", "type.isRange", "type.isIndex", "type.isBoolean", "type.isResultSet", "type.isHelp", "type.isFunction", "type.isDate", "type.isRegExp", "type.isObject", "type.isNull", "type.isUndefined", "type.isAccessorNode", "type.isArrayNode", "type.isAssignmentNode", "type.isBlockNode", "type.isConditionalNode", "type.isConstantNode", "type.isFunctionAssignmentNode", "type.isFunctionNode", "type.isIndexNode", "type.isNode", "type.isObjectNode", "type.isOperatorNode", "type.isParenthesisNode", "type.isRangeNode", "type.isSymbolNode", "type.isChain", "type.BigNumber", "type.Chain", "type.Complex", "type.Fraction", "type.Matrix", "type.DenseMatrix", "type.SparseMatrix", "type.Spa", "type.FibonacciHeap", "type.ImmutableDenseMatrix", "type.Index", "type.Range", "type.ResultSet", "type.Unit", "type.Help", "type.Parser", "expression.parse", "expression.Parser", "expression.node.AccessorNode", "expression.node.ArrayNode", "expression.node.AssignmentNode", "expression.node.BlockNode", "expression.node.ConditionalNode", "expression.node.ConstantNode", "expression.node.IndexNode", "expression.node.FunctionAssignmentNode", "expression.node.FunctionNode", "expression.node.Node", "expression.node.ObjectNode", "expression.node.OperatorNode", "expression.node.ParenthesisNode", "expression.node.RangeNode", "expression.node.RelationalNode", "expression.node.SymbolNode", "json.reviver", "error.ArgumentsError", "error.DimensionError", "error.IndexError"].forEach(function (e) {
        var t = e.split("."),
          r = Object(h.j)(t),
          i = Object(h.l)(t),
          a = Object(c.k)(n, r);
        Object(c.h)(a, i, function () {
          return Object(y.a)("math.".concat(e, " is moved to math.").concat(i, " in v6.0.0. ") + "Please use the new location instead."), n[i]
        })
      }), Object(c.h)(n.expression, "docs", function () {
        throw new Error("math.expression.docs has been moved. Please import via \"import { docs } from 'mathjs'\"")
      }), n.ArgumentsError = d.a, n.DimensionError = x.a, n.IndexError = w.a, n
    }
    r.r(t);
    var c = r(4),
      f = r(18),
      l = r.n(f),
      p = r(1),
      m = r(0),
      h = r(2),
      d = r(13),
      y = r(8),
      g = {
        epsilon: 1e-12,
        matrix: "Matrix",
        number: "number",
        precision: 64,
        predictable: !1,
        randomSeed: null
      },
      b = ["Matrix", "Array"],
      v = ["number", "BigNumber", "Fraction"],
      x = r(6),
      w = r(10);
    r.d(t, "create", function () {
      return u
    })
  }])
});