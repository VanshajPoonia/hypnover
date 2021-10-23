! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = Object.getPrototypeOf,
        i = n.slice,
        o = n.flat ? function(e) {
            return n.flat.call(e)
        } : function(e) {
            return n.concat.apply([], e)
        },
        a = n.push,
        s = n.indexOf,
        l = {},
        u = l.toString,
        c = l.hasOwnProperty,
        f = c.toString,
        d = f.call(Object),
        h = {},
        p = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        g = function(e) {
            return null != e && e === e.window
        },
        m = e.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var r, i, o = (n = n || m).createElement("script");
        if (o.text = e, t)
            for (r in v)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e
    }
    var x = "3.6.0",
        _ = function(e, t) {
            return new _.fn.init(e, t)
        };

    function w(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !p(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    _.fn = _.prototype = {
        jquery: x,
        constructor: _,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return _.each(this, e)
        },
        map: function(e) {
            return this.pushStack(_.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(_.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(_.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, _.extend = _.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || p(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (u && r && (_.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || _.isPlainObject(n) ? n : {}, i = !1, a[t] = _.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, _.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof(n = c.call(t, "constructor") && t.constructor) || f.call(n) !== d))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (w(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (w(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0,
                s = [];
            if (w(e))
                for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return o(s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function(e) {
        var t, n, r, i, o, a, s, l, u, c, f, d, h, p, g, m, v, y, b, x = "sizzle" + 1 * new Date,
            _ = e.document,
            w = 0,
            T = 0,
            S = le(),
            C = le(),
            D = le(),
            E = le(),
            A = function(e, t) {
                return e === t && (f = !0), 0
            },
            k = {}.hasOwnProperty,
            N = [],
            j = N.pop,
            I = N.push,
            L = N.push,
            P = N.slice,
            R = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            H = "\\[" + F + "*(" + q + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + F + "*\\]",
            M = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            W = new RegExp(F + "+", "g"),
            B = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
            U = new RegExp("^" + F + "*," + F + "*"),
            $ = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            X = new RegExp(F + "|>"),
            V = new RegExp(M),
            z = new RegExp("^" + q + "$"),
            Q = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                d()
            },
            ae = xe(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(N = P.call(_.childNodes), _.childNodes)
        } catch (t) {
            L = {
                apply: N.length ? function(e, t) {
                    I.apply(e, P.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, r, i) {
            var o, s, u, c, f, p, v, y = t && t.ownerDocument,
                _ = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) return r;
            if (!i && (d(t), t = t || h, g)) {
                if (11 !== _ && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === _) {
                            if (!(u = t.getElementById(o))) return r;
                            if (u.id === o) return r.push(u), r
                        } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return r.push(u), r
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    }
                if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== _ || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === _ && (X.test(e) || $.test(e))) {
                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = x)), s = (p = a(e)).length; s--;) p[s] = (c ? "#" + c : ":scope") + " " + be(p[s]);
                        v = p.join(",")
                    }
                    try {
                        return L.apply(r, y.querySelectorAll(v)), r
                    } catch (t) {
                        E(e, !0)
                    } finally {
                        c === x && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(B, "$1"), t, r, i)
        }

        function le() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function ue(e) {
            return e[x] = !0, e
        }

        function ce(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function he(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ue(function(t) {
                return t = +t, ue(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, o = se.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !J.test(e && e.namespaceURI || t && t.nodeName || "HTML")
            }, d = se.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : _;
                return a != h && 9 === a.nodeType && a.documentElement && (p = (h = a).documentElement, g = !o(h), _ != h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce(function(e) {
                    return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), n.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ce(function(e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = K.test(h.getElementsByClassName), n.getById = ce(function(e) {
                    return p.appendChild(e).id = x, !h.getElementsByName || !h.getElementsByName(x).length
                }), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = K.test(h.querySelectorAll)) && (ce(function(e) {
                    var t;
                    p.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + F + "*name" + F + "*=" + F + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = K.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce(function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(p.compareDocumentPosition), b = t || K.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == h || e.ownerDocument == _ && b(_, e) ? -1 : t == h || t.ownerDocument == _ && b(_, t) ? 1 : c ? R(c, e) - R(c, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == h ? -1 : t == h ? 1 : i ? -1 : o ? 1 : c ? R(c, e) - R(c, t) : 0;
                    if (i === o) return de(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? de(a[r], s[r]) : a[r] == _ ? -1 : s[r] == _ ? 1 : 0
                }), h
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (d(e), n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {
                    E(t, !0)
                }
                return 0 < se(t, h, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != h && d(e), b(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != h && d(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && k.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return c = null, e
            }, i = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = se.selectors = {
                cacheLength: 50,
                createPseudo: ue,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && S(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = se.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(W, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (b = (h = (u = (c = (f = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === w && u[1]) && u[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();)
                                        if (1 === d.nodeType && ++b && d === t) {
                                            c[e] = [w, h, b];
                                            break
                                        }
                                } else if (y && (b = h = (u = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === w && u[1]), !1 === b)
                                    for (;
                                        (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [w, b]), d !== t)););
                                return (b -= i) === r || b % r == 0 && 0 <= b / r
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return i[x] ? i(t) : 1 < i.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = R(e, o[a])] = !(n[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: ue(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(B, "$1"));
                        return r[x] ? ue(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: ue(function(e) {
                        return function(t) {
                            return 0 < se(e, t).length
                        }
                    }),
                    contains: ue(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || i(t)).indexOf(e)
                            }
                    }),
                    lang: ue(function(e) {
                        return z.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Y.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = he(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function xe(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = T++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, l) {
                var u, c, f, d = [w, s];
                if (l) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((u = c[o]) && u[0] === w && u[1] === s) return d[2] = u[2];
                                if ((c[o] = d)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function _e(e) {
            return 1 < e.length ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[x] && (r = Te(r)), i && !i[x] && (i = Te(i, o)), ue(function(o, a, s, l) {
                var u, c, f, d = [],
                    h = [],
                    p = a.length,
                    g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : we(g, d, e, s, l),
                    v = n ? i || (o ? e : p || r) ? [] : a : m;
                if (n && n(m, v, s, l), r)
                    for (u = we(v, h), r(u, [], s, l), c = u.length; c--;)(f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = v.length; c--;)(f = v[c]) && u.push(m[c] = f);
                            i(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(f = v[c]) && -1 < (u = i ? R(o, f) : d[c]) && (o[u] = !(a[u] = f))
                    }
                } else v = we(v === a ? v.splice(p, v.length) : v), i ? i(null, a, v, l) : L.apply(a, v)
            })
        }

        function Se(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = xe(function(e) {
                    return e === t
                }, s, !0), f = xe(function(e) {
                    return -1 < R(t, e)
                }, s, !0), d = [function(e, n, r) {
                    var i = !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; l < o; l++)
                if (n = r.relative[e[l].type]) d = [xe(_e(d), n)];
                else {
                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                        for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                        return Te(1 < l && _e(d), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, l < i && Se(e.slice(l, i)), i < o && Se(e = e.slice(i)), i < o && be(e))
                    }
                    d.push(n)
                }
            return _e(d)
        }
        return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
            var n, i, o, a, s, l, u, c = C[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = r.preFilter; s;) {
                for (a in n && !(i = U.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = $.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(B, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = Q[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : C(e, l).slice(0)
        }, s = se.compile = function(e, t) {
            var n, i, o, s, l, c, f = [],
                p = [],
                m = D[e + " "];
            if (!m) {
                for (t || (t = a(e)), n = t.length; n--;)(m = Se(t[n]))[x] ? f.push(m) : p.push(m);
                (m = D(e, (i = p, s = 0 < (o = f).length, l = 0 < i.length, c = function(e, t, n, a, c) {
                    var f, p, m, v = 0,
                        y = "0",
                        b = e && [],
                        x = [],
                        _ = u,
                        T = e || l && r.find.TAG("*", c),
                        S = w += null == _ ? 1 : Math.random() || .1,
                        C = T.length;
                    for (c && (u = t == h || t || c); y !== C && null != (f = T[y]); y++) {
                        if (l && f) {
                            for (p = 0, t || f.ownerDocument == h || (d(f), n = !g); m = i[p++];)
                                if (m(f, t || h, n)) {
                                    a.push(f);
                                    break
                                }
                            c && (w = S)
                        }
                        s && ((f = !m && f) && v--, e && b.push(f))
                    }
                    if (v += y, s && y !== v) {
                        for (p = 0; m = o[p++];) m(b, x, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || x[y] || (x[y] = j.call(a));
                            x = we(x)
                        }
                        L.apply(a, x), c && !e && 0 < x.length && 1 < v + o.length && se.uniqueSort(a)
                    }
                    return c && (w = S, u = _), b
                }, s ? ue(c) : c))).selector = e
            }
            return m
        }, l = se.select = function(e, t, n, i) {
            var o, l, u, c, f, d = "function" == typeof e && e,
                h = !i && a(e = d.selector || e);
            if (n = n || [], 1 === h.length) {
                if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = Q.needsContext.test(e) ? 0 : l.length; o-- && !r.relative[c = (u = l[o]).type];)
                    if ((f = r.find[c]) && (i = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = i.length && be(l))) return L.apply(n, i), n;
                        break
                    }
            }
            return (d || s(e, h))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(O, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(e);
    _.find = T, _.expr = T.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = T.uniqueSort, _.text = T.getText, _.isXMLDoc = T.isXML, _.contains = T.contains, _.escapeSelector = T.escape;
    var S = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && _(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        C = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        D = _.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function k(e, t, n) {
        return p(t) ? _.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? _.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? _.grep(e, function(e) {
            return -1 < s.call(t, e) !== n
        }) : _.filter(t, e, n)
    }
    _.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? _.find.matchesSelector(r, e) ? [r] : [] : _.find.matches(e, _.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (_.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) _.find(e, i[t], n);
            return 1 < r ? _.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(k(this, e || [], !0))
        },
        is: function(e) {
            return !!k(this, "string" == typeof e && D.test(e) ? _(e) : e || [], !1).length
        }
    });
    var N, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || N, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (_.merge(this, _.parseHTML(r[1], (t = t instanceof _ ? t[0] : t) && t.nodeType ? t.ownerDocument || t : m, !0)), A.test(r[1]) && _.isPlainObject(t))
                    for (r in t) p(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = m.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
    }).prototype = _.fn, N = _(m);
    var I = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    _.fn.extend({
        has: function(e) {
            var t = _(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (_.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && _(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? _.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(_(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (E(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
    }, function(e, t) {
        _.fn[e] = function(n, r) {
            var i = _.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = _.filter(r, i)), 1 < this.length && (L[e] || _.uniqueSort(i), I.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function O(e) {
        return e
    }

    function F(e) {
        throw e
    }

    function q(e, t, n, r) {
        var i;
        try {
            e && p(i = e.promise) ? i.call(e).done(t).fail(n) : e && p(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    _.Callbacks = function(e) {
        var t;
        e = "string" == typeof e ? (t = {}, _.each(e.match(R) || [], function(e, n) {
            t[n] = !0
        }), t) : _.extend({}, e);
        var n, r, i, o, a = [],
            s = [],
            l = -1,
            u = function() {
                for (o = o || e.once, i = n = !0; s.length; l = -1)
                    for (r = s.shift(); ++l < a.length;) !1 === a[l].apply(r[0], r[1]) && e.stopOnFalse && (l = a.length, r = !1);
                e.memory || (r = !1), n = !1, o && (a = r ? [] : "")
            },
            c = {
                add: function() {
                    return a && (r && !n && (l = a.length - 1, s.push(r)), function t(n) {
                        _.each(n, function(n, r) {
                            p(r) ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== b(r) && t(r)
                        })
                    }(arguments), r && !n && u()), this
                },
                remove: function() {
                    return _.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = _.inArray(t, a, n));) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < _.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return o = s = [], a = r = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return o = s = [], r || n || (a = r = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, t) {
                    return o || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), n || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, _.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                    ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return _.Deferred(function(t) {
                            _.each(n, function(n, r) {
                                var i = p(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    l = arguments,
                                    u = function() {
                                        var e, u;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            p(u = e && ("object" == typeof e || "function" == typeof e) && e.then) ? i ? u.call(e, a(o, n, O, i), a(o, n, F, i)) : (o++, u.call(e, a(o, n, O, i), a(o, n, F, i), a(o, n, O, n.notifyWith))) : (r !== O && (s = void 0, l = [e]), (i || n.resolveWith)(s, l))
                                        }
                                    },
                                    c = i ? u : function() {
                                        try {
                                            u()
                                        } catch (u) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(u, c.stackTrace), o <= t + 1 && (r !== F && (s = void 0, l = [u]), n.rejectWith(s, l))
                                        }
                                    };
                                t ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return _.Deferred(function(e) {
                            n[0][3].add(a(0, e, p(i) ? i : O, e.notifyWith)), n[1][3].add(a(0, e, p(t) ? t : O)), n[2][3].add(a(0, e, p(r) ? r : F))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? _.extend(e, i) : i
                    }
                },
                o = {};
            return _.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                o = i.call(arguments),
                a = _.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, o[e] = 1 < arguments.length ? i.call(arguments) : n, --t || a.resolveWith(r, o)
                    }
                };
            if (t <= 1 && (q(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || p(o[n] && o[n].then))) return a.then();
            for (; n--;) q(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && H.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, _.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var M = _.Deferred();

    function W() {
        m.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), _.ready()
    }
    _.fn.ready = function(e) {
        return M.then(e).catch(function(e) {
            _.readyException(e)
        }), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0) !== e && 0 < --_.readyWait || M.resolveWith(m, [_])
        }
    }), _.ready.then = M.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(_.ready) : (m.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
    var B = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === b(n))
                for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, p(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(_(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        U = /^-ms-/,
        $ = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(U, "ms-").replace($, X)
    }
    var z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = _.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || _.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var J = new Q,
        Y = new Q,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : G.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Y.set(e, t, n)
            } else n = void 0;
        return n
    }
    _.extend({
        hasData: function(e) {
            return Y.hasData(e) || J.hasData(e)
        },
        data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        removeData: function(e, t) {
            Y.remove(e, t)
        },
        _data: function(e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function(e, t) {
            J.remove(e, t)
        }
    }), _.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Y.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = V(r.slice(5)), Z(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Y.set(this, e)
            }) : B(this, function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Y.get(o, e)) || void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each(function() {
                    Y.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Y.remove(this, e)
            })
        }
    }), _.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return r = J.get(e, t = (t || "fx") + "queue"), n && (!r || Array.isArray(n) ? r = J.access(e, t, _.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            var n = _.queue(e, t = t || "fx"),
                r = n.length,
                i = n.shift(),
                o = _._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                _.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: _.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), _.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = _.queue(this, e, t);
                _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                _.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = _.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = m.documentElement,
        ie = function(e) {
            return _.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return _.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === _.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return _.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (_.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (_.cssNumber[t] || "px" !== u && +l) && te.exec(_.css(e, t));
        if (c && c[3] !== u) {
            for (u = u || c[3], c = +(l /= 2) || 1; a--;) _.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
            _.style(e, t, (c *= 2) + u), n = n || []
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }
    var le = {};

    function ue(e, t) {
        for (var n, r, i, o, a, s, l, u = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (u[c] = J.get(r, "display") || null, u[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (u[c] = (l = a = o = void 0, a = (i = r).ownerDocument, (l = le[s = i.nodeName]) || (o = a.body.appendChild(a.createElement(s)), l = _.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), le[s] = l)))) : "none" !== n && (u[c] = "none", J.set(r, "display", n)));
        for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    _.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var ce, fe, de = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i;
    ce = m.createDocumentFragment().appendChild(m.createElement("div")), (fe = m.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), h.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", h.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? _.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, h.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;

    function be(e, t, n, r, i) {
        for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === b(o)) _.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), a.innerHTML = (l = ge[s] || ge._default)[1] + _.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
            _.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; o = d[h++];)
            if (r && -1 < _.inArray(o, r)) i && i.push(o);
            else if (u = ie(o), a = me(f.appendChild(o), "script"), u && ve(a), n)
            for (c = 0; o = a[c++];) pe.test(o.type || "") && n.push(o);
        return f
    }
    var xe = /^([^.]*)(?:\.(.+)|)/;

    function _e() {
        return !0
    }

    function we() {
        return !1
    }

    function Te(e, t) {
        return e === function() {
            try {
                return m.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Se(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = we;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return _().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = _.guid++)), e.each(function() {
            _.event.add(this, t, i, r, n)
        })
    }

    function Ce(e, t, n) {
        n ? (J.set(e, t, !1), _.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, o, a = J.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(_.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = i.call(arguments), J.set(this, t, a), r = n(this, t), this[t](), a !== (o = J.get(this, t)) || r ? J.set(this, t, !1) : o = {}, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                } else a.length && (J.set(this, t, {
                    value: _.event.trigger(_.extend(a[0], _.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === J.get(e, t) && _.event.add(e, t, _e)
    }
    _.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, h, p, g, m = J.get(e);
            if (z(e))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && _.find.matchesSelector(re, i), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function(t) {
                        return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(R) || [""]).length; u--;) h = g = (s = xe.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h && (f = _.event.special[h] || {}, f = _.event.special[h = (i ? f.delegateType : f.bindType) || h] || {}, c = _.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && _.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, p, a) || e.addEventListener && e.addEventListener(h, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), _.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, h, p, g, m = J.hasData(e) && J.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(R) || [""]).length; u--;)
                    if (h = g = (s = xe.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                        for (f = _.event.special[h] || {}, d = l[h = (r ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || _.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) _.event.remove(e, h + t[u], n, r, !0);
                _.isEmptyObject(l) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                l = _.event.fix(e),
                u = (J.get(this, "events") || Object.create(null))[l.type] || [],
                c = _.event.special[l.type] || {};
            for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                for (a = _.event.handlers.call(this, l, u), t = 0;
                    (i = a[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((_.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < _(i, this).index(u) : _.find(i, this, null, [u]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: p(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[_.expando] ? e : new _.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && E(t, "input") && Ce(t, "click", _e), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && E(t, "input") && Ce(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && E(t, "input") && J.get(t, "click") || E(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, _.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, _.Event = function(e, t) {
        if (!(this instanceof _.Event)) return new _.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: we,
        isPropagationStopped: we,
        isImmediatePropagationStopped: we,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = _e, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = _e, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _e, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, _.event.addProp), _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        _.event.special[e] = {
            setup: function() {
                return Ce(this, e, Te), !1
            },
            trigger: function() {
                return Ce(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        _.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || _.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), _.fn.extend({
        on: function(e, t, n, r) {
            return Se(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Se(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, _(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = we), this.each(function() {
                _.event.remove(this, e, n, t)
            })
        }
    });
    var De = /<script|<style|<link/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ke(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }

    function Ne(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ie(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (s = J.get(e).events))
                for (i in J.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) _.event.add(t, i, s[i][n]);
            Y.hasData(e) && (o = Y.access(e), a = _.extend({}, o), Y.set(t, a))
        }
    }

    function Le(e, t, n, r) {
        t = o(t);
        var i, a, s, l, u, c, f = 0,
            d = e.length,
            g = d - 1,
            m = t[0],
            v = p(m);
        if (v || 1 < d && "string" == typeof m && !h.checkClone && Ee.test(m)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = m.call(this, i, o.html())), Le(o, t, n, r)
        });
        if (d && (a = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
            for (l = (s = _.map(me(i, "script"), Ne)).length; f < d; f++) u = i, f !== g && (u = _.clone(u, !0, !0), l && _.merge(s, me(u, "script"))), n.call(e[f], u, f);
            if (l)
                for (c = s[s.length - 1].ownerDocument, _.map(s, je), f = 0; f < l; f++) pe.test((u = s[f]).type || "") && !J.access(u, "globalEval") && _.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? _._evalUrl && !u.noModule && _._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, c) : y(u.textContent.replace(Ae, ""), u, c))
        }
        return e
    }

    function Pe(e, t, n) {
        for (var r, i = t ? _.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || _.cleanData(me(r)), r.parentNode && (n && ie(r) && ve(me(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    _.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, l, u, c = e.cloneNode(!0),
                f = ie(e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                for (a = me(c), r = 0, i = (o = me(e)).length; r < i; r++) s = o[r], "input" === (u = (l = a[r]).nodeName.toLowerCase()) && de.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), a = a || me(c), r = 0, i = o.length; r < i; r++) Ie(o[r], a[r]);
                else Ie(e, c);
            return 0 < (a = me(c, "script")).length && ve(a, !f && me(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = _.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (z(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? _.event.remove(n, r) : _.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[Y.expando] && (n[Y.expando] = void 0)
                }
        }
    }), _.fn.extend({
        detach: function(e) {
            return Pe(this, e, !0)
        },
        remove: function(e) {
            return Pe(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? _.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return _.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Le(this, arguments, function(t) {
                var n = this.parentNode;
                _.inArray(this, e) < 0 && (_.cleanData(me(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        _.fn[e] = function(e) {
            for (var n, r = [], i = _(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), _(i[s])[t](n), a.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Oe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Fe = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        qe = new RegExp(ne.join("|"), "i");

    function He(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Oe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = _.style(e, t)), !h.pixelBoxStyles() && Re.test(a) && qe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Me(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), re.removeChild(u), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, l, u = m.createElement("div"),
            c = m.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, _.extend(h, {
            boxSizingReliable: function() {
                return t(), i
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), o
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == s && (t = m.createElement("table"), n = m.createElement("tr"), r = m.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", re.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, re.removeChild(t)), s
            }
        }))
    }();
    var We = ["Webkit", "Moz", "ms"],
        Be = m.createElement("div").style,
        Ue = {};

    function $e(e) {
        return _.cssProps[e] || Ue[e] || (e in Be ? e : Ue[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--;)
                if ((e = We[n] + t) in Be) return e
        }(e) || e)
    }
    var Xe = /^(none|table(?!-c[ea]).+)/,
        Ve = /^--/,
        ze = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ye(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += _.css(e, n + ne[a], !0, i)), r ? ("content" === n && (l -= _.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (l -= _.css(e, "border" + ne[a] + "Width", !0, i))) : (l += _.css(e, "padding" + ne[a], !0, i), "padding" !== n ? l += _.css(e, "border" + ne[a] + "Width", !0, i) : s += _.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
    }

    function Ge(e, t, n) {
        var r = Oe(e),
            i = (!h.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, r),
            o = i,
            a = He(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!h.boxSizingReliable() && i || !h.reliableTrDimensions() && E(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === _.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === _.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ye(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = He(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    l = Ve.test(t),
                    u = e.style;
                if (l || (t = $e(s)), a = _.cssHooks[t] || _.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (_.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Ve.test(t) || (t = $e(s)), (a = _.cssHooks[t] || _.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = He(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), _.each(["height", "width"], function(e, t) {
        _.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !Xe.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, t, r) : Fe(e, ze, function() {
                    return Ge(e, t, r)
                })
            },
            set: function(e, n, r) {
                var i, o = Oe(e),
                    a = !h.scrollboxSize() && "absolute" === o.position,
                    s = (a || r) && "border-box" === _.css(e, "boxSizing", !1, o),
                    l = r ? Ye(e, t, r, s, o) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ye(e, t, "border", !1, o) - .5)), l && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = _.css(e, t)), Je(0, n, l)
            }
        }
    }), _.cssHooks.marginLeft = Me(h.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        _.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (_.cssHooks[e + t].set = Je)
    }), _.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Oe(e), i = t.length; a < i; a++) o[t[a]] = _.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((_.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (_.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.pos = t = this.options.duration ? _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !_.cssHooks[e.prop] && null == e.elem.style[$e(e.prop)] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, _.fx = Ke.prototype.init, _.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function ot() {
        et && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, _.fx.interval), _.fx.tick())
    }

    function at() {
        return e.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function st(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ut(e, t, n) {
        var r, i, o = 0,
            a = ut.prefilters.length,
            s = _.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = Ze || at(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
                return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(!0, {
                    specialEasing: {},
                    easing: _.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ze || at(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = _.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = _.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, u.opts.specialEasing); o < a; o++)
            if (r = ut.prefilters[o].call(u, e, c, u.opts)) return p(r.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
        return _.map(c, lt, u), p(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), _.fx.timer(_.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    _.Animation = _.extend(ut, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            p(e) ? (t = e, e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++)(ut.tweeners[n = e[r]] = ut.tweeners[n] || []).unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, l, u, c, f = "width" in t || "height" in t,
                d = this,
                h = {},
                p = e.style,
                g = e.nodeType && ae(e),
                m = J.get(e, "fxshow");
            for (r in n.queue || (null == (a = _._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, d.always(function() {
                    d.always(function() {
                        a.unqueued--, _.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (rt.test(i = t[r])) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        g = !0
                    }
                    h[r] = m && m[r] || _.style(e, r)
                }
            if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(h))
                for (r in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = J.get(e, "display")), "none" === (c = _.css(e, "display")) && (u ? c = u : (ue([e], !0), u = e.style.display || u, c = _.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === _.css(e, "float") && (l || (d.done(function() {
                        p.display = u
                    }), null == u && (u = "none" === (c = p.display) ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", {
                    display: u
                }), o && (m.hidden = !g), g && ue([e], !0), d.done(function() {
                    for (r in g || ue([e]), J.remove(e, "fxshow"), h) _.style(e, r, h[r])
                })), l = lt(g ? m[r] : 0, r, d), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
        }
    }), _.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? _.extend({}, e) : {
            complete: n || !n && t || p(e) && e,
            duration: e,
            easing: n && t || t && !p(t) && t
        };
        return _.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration = r.duration in _.fx.speeds ? _.fx.speeds[r.duration] : _.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            p(r.old) && r.old.call(this), r.queue && _.dequeue(this, r.queue)
        }, r
    }, _.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = _.isEmptyObject(e),
                o = _.speed(t, n, r),
                a = function() {
                    var t = ut(this, _.extend({}, e), o);
                    (i || J.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = _.timers,
                    a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a) a[i] && a[i].stop && it.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || _.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = J.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = _.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, _.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function(e, t) {
        var n = _.fn[t];
        _.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, r, i)
        }
    }), _.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        _.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), _.timers = [], _.fx.tick = function() {
        var e, t = 0,
            n = _.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || _.fx.stop(), Ze = void 0
    }, _.fx.timer = function(e) {
        _.timers.push(e), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function() {
        et || (et = !0, ot())
    }, _.fx.stop = function() {
        et = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(t, n) {
        return t = _.fx && _.fx.speeds[t] || t, this.queue(n = n || "fx", function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }, tt = m.createElement("input"), nt = m.createElement("select").appendChild(m.createElement("option")), tt.type = "checkbox", h.checkOn = "" !== tt.value, h.optSelected = nt.selected, (tt = m.createElement("input")).value = "t", tt.type = "radio", h.radioValue = "t" === tt.value;
    var ct, ft = _.expr.attrHandle;
    _.fn.extend({
        attr: function(e, t) {
            return B(this, _.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (i = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = _.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(R);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), ct = {
        set: function(e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ft[t] || _.find.attr;
        ft[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ft[a], ft[a] = i, i = null != n(e, t, r) ? a : null, ft[a] = o), i
        }
    });
    var dt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;

    function pt(e) {
        return (e.match(R) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    _.fn.extend({
        prop: function(e, t) {
            return B(this, _.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (i = _.propHooks[t = _.propFix[t] || t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (_.propHooks.selected = {
        get: function(e) {
            return null
        },
        set: function(e) {}
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (p(e)) return this.each(function(t) {
                _(this).addClass(e.call(this, t, gt(this)))
            });
            if ((t = mt(e)).length)
                for (; n = this[l++];)
                    if (i = gt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = pt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (p(e)) return this.each(function(t) {
                _(this).removeClass(e.call(this, t, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = mt(e)).length)
                for (; n = this[l++];)
                    if (i = gt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (s = pt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : p(e) ? this.each(function(n) {
                _(this).toggleClass(e.call(this, n, gt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r)
                    for (i = 0, o = _(this), a = mt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = gt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + pt(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    _.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = p(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, _(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = _.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = _.valHooks[i.type] || _.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : pt(_.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : i.length;
                    for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                            if (t = _(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = _.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < _.inArray(_.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < _.inArray(_(e).val(), t)
            }
        }, h.checkOn || (_.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function(e) {
            e.stopPropagation()
        };
    _.extend(_.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, l, u, f, d, h, v = [r || m],
                y = c.call(t, "type") ? t.type : t,
                b = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = h = s = r = r || m, 3 !== r.nodeType && 8 !== r.nodeType && !yt.test(y + _.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[_.expando] ? t : new _.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : _.makeArray(n, [t]), d = _.event.special[y] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!i && !d.noBubble && !g(r)) {
                    for (yt.test((l = d.delegateType || y) + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), s = a;
                    s === (r.ownerDocument || m) && v.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = v[o++]) && !t.isPropagationStopped();) h = a, t.type = 1 < o ? l : d.bindType || y, (f = (J.get(a, "events") || Object.create(null))[t.type] && J.get(a, "handle")) && f.apply(a, n), (f = u && a[u]) && f.apply && z(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !z(r) || u && p(r[y]) && !g(r) && ((s = r[u]) && (r[u] = null), _.event.triggered = y, t.isPropagationStopped() && h.addEventListener(y, bt), r[y](), t.isPropagationStopped() && h.removeEventListener(y, bt), _.event.triggered = void 0, s && (r[u] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = _.extend(new _.Event, n, {
                type: e,
                isSimulated: !0
            });
            _.event.trigger(r, null, t)
        }
    }), _.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                _.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return _.event.trigger(e, t, n, !0)
        }
    }), h.focusin || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            _.event.simulate(t, e.target, _.event.fix(e))
        };
        _.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var xt = e.location,
        _t = {
            guid: Date.now()
        },
        wt = /\?/;
    _.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return r = n && n.getElementsByTagName("parsererror")[0], n && !r || _.error("Invalid XML: " + (r ? _.map(r.childNodes, function(e) {
            return e.textContent
        }).join("\n") : t)), n
    };
    var Tt = /\[\]$/,
        St = /\r?\n/g,
        Ct = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;

    function Et(e, t, n, r) {
        var i;
        if (Array.isArray(t)) _.each(t, function(t, i) {
            n || Tt.test(e) ? r(e, i) : Et(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== b(t)) r(e, t);
        else
            for (i in t) Et(e + "[" + i + "]", t[i], n, r)
    }
    _.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = p(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Et(n, e[n], t, i);
        return r.join("&")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && Dt.test(this.nodeName) && !Ct.test(e) && (this.checked || !de.test(e))
            }).map(function(e, t) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    });
    var At = /%20/g,
        kt = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        Pt = {},
        Rt = {},
        Ot = "*/".concat("*"),
        Ft = m.createElement("a");

    function qt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(R) || [];
            if (p(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Ht(e, t, n, r) {
        var i = {},
            o = e === Rt;

        function a(s) {
            var l;
            return i[s] = !0, _.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
            }), l
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function Mt(e, t) {
        var n, r, i = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && _.extend(!0, e, r), e
    }
    Ft.href = xt.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ot,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Mt(Mt(e, _.ajaxSettings), t) : Mt(_.ajaxSettings, e)
        },
        ajaxPrefilter: qt(Pt),
        ajaxTransport: qt(Rt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0);
            var r, i, o, a, s, l, u, c, f, d, h = _.ajaxSetup({}, n = n || {}),
                p = h.context || h,
                g = h.context && (p.nodeType || p.jquery) ? _(p) : _.event,
                v = _.Deferred(),
                y = _.Callbacks("once memory"),
                b = h.statusCode || {},
                x = {},
                w = {},
                T = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = jt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) S.always(e[S.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t), C(0, t), this
                    }
                };
            if (v.promise(S), h.url = ((t || h.url || xt.href) + "").replace(Lt, xt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
                } catch (t) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = _.param(h.data, h.traditional)), Ht(Pt, h, n, S), u) return S;
            for (f in (c = _.event && h.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), i = h.url.replace(kt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (d = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (wt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Nt, "$1"), d = (wt.test(i) ? "&" : "?") + "_=" + _t.guid++ + d), h.url = i + d), h.ifModified && (_.lastModified[i] && S.setRequestHeader("If-Modified-Since", _.lastModified[i]), _.etag[i] && S.setRequestHeader("If-None-Match", _.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : h.accepts["*"]), h.headers) S.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(p, S, h) || u)) return S.abort();
            if (T = "abort", y.add(h.complete), S.done(h.success), S.fail(h.error), r = Ht(Rt, h, n, S)) {
                if (S.readyState = 1, c && g.trigger("ajaxSend", [S, h]), u) return S;
                h.async && 0 < h.timeout && (s = e.setTimeout(function() {
                    S.abort("timeout")
                }, h.timeout));
                try {
                    u = !1, r.send(x, C)
                } catch (t) {
                    if (u) throw t;
                    C(-1, t)
                }
            } else C(-1, "No Transport");

            function C(t, n, a, l) {
                var f, d, m, x, w, T = n;
                u || (u = !0, s && e.clearTimeout(s), r = void 0, o = l || "", S.readyState = 0 < t ? 4 : 0, f = 200 <= t && t < 300 || 304 === t, a && (x = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(h, S, a)), !f && -1 < _.inArray("script", h.dataTypes) && _.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), x = function(e, t, n, r) {
                    var i, o, a, s, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = u[l + " " + o] || u["* " + o]))
                            for (i in u)
                                if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, x, S, f), f ? (h.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (_.lastModified[i] = w), (w = S.getResponseHeader("etag")) && (_.etag[i] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, d = x.data, f = !(m = x.error))) : (m = T, !t && T || (T = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || T) + "", f ? v.resolveWith(p, [d, T, S]) : v.rejectWith(p, [S, T, m]), S.statusCode(b), b = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [S, h, f ? d : m]), y.fireWith(p, [S, T]), c && (g.trigger("ajaxComplete", [S, h]), --_.active || _.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return _.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function(e, t) {
        _[t] = function(e, n, r, i) {
            return p(n) && (i = i || r, r = n, n = void 0), _.ajax(_.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, _.isPlainObject(e) && e))
        }
    }), _.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), _._evalUrl = function(e, t, n) {
        return _.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                _.globalEval(e, t, n)
            }
        })
    }, _.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (p(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return p(e) ? this.each(function(t) {
                _(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = _(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p(e);
            return this.each(function(n) {
                _(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function(e) {
        return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Wt = {
            0: 200,
            1223: 204
        },
        Bt = _.ajaxSettings.xhr();
    h.cors = !!Bt && "withCredentials" in Bt, h.ajax = Bt = !!Bt, _.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Bt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (i) {
                    if (n) throw i
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), _.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, i) {
                t = _("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), m.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Ut, $t = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || _.expando + "_" + _t.guid++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Xt, "$1" + i) : !1 !== t.jsonp && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || _.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? _(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, $t.push(i)), a && p(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = ((Ut = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), _.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((r = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t.head.appendChild(r)) : t = m), o = !n && [], (i = A.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, o), o && o.length && _(o).remove(), _.merge([], i.childNodes)));
        var r, i, o
    }, _.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = pt(e.slice(s)), e = e.slice(0, s)), p(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && _.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? _("<div>").append(_.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, _.expr.pseudos.animated = function(e) {
        return _.grep(_.timers, function(t) {
            return e === t.elem
        }).length
    }, _.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u = _.css(e, "position"),
                c = _(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), p(t) && (t = t.call(e, n, _.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, _.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                _.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? {
                top: (t = r.getBoundingClientRect()).top + (n = r.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset
            } : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === _.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = _(e).offset()).top += _.css(e, "borderTopWidth", !0), i.left += _.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - _.css(r, "marginTop", !0),
                    left: t.left - i.left - _.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        _.fn[e] = function(r) {
            return B(this, function(e, r, i) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), _.each(["top", "left"], function(e, t) {
        _.cssHooks[t] = Me(h.pixelPosition, function(e, n) {
            if (n) return n = He(e, t), Re.test(n) ? _(e).position()[t] + "px" : n
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        _.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            _.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return B(this, function(t, n, i) {
                    var o;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? _.css(t, n, s) : _.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        _.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), _.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        _.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    _.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), p(e)) return r = i.call(arguments, 2), (o = function() {
            return e.apply(t || this, r.concat(i.call(arguments)))
        }).guid = e.guid = e.guid || _.guid++, o
    }, _.holdReady = function(e) {
        e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = E, _.isFunction = p, _.isWindow = g, _.camelCase = V, _.type = b, _.now = Date.now, _.isNumeric = function(e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, _.trim = function(e) {
        return null == e ? "" : (e + "").replace(Vt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var zt = e.jQuery,
        Qt = e.$;
    return _.noConflict = function(t) {
        return e.$ === _ && (e.$ = Qt), t && e.jQuery === _ && (e.jQuery = zt), _
    }, void 0 === t && (e.jQuery = e.$ = _), _
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        }
    }
    var i = r(t),
        o = r(n);

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e
    }

    function l() {
        return (l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    var u = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = i.default(e).css("transition-duration"),
                n = i.default(e).css("transition-delay"),
                r = parseFloat(t),
                o = parseFloat(n);
            return r || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            i.default(e).trigger("transitionend")
        },
        supportsTransitionEnd: function() {
            return Boolean("transitionend")
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var r in n)
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var i = n[r],
                        o = t[r],
                        a = o && u.isElement(o) ? "element" : null === (s = o) || void 0 === s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(i).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + i + '".')
                }
            var s
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? u.findShadowRoot(e.parentNode) : null
        },
        jQueryDetection: function() {
            if (void 0 === i.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = i.default.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    u.jQueryDetection(), i.default.fn.emulateTransitionEnd = function(e) {
        var t = this,
            n = !1;
        return i.default(this).one(u.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || u.triggerTransitionEnd(t)
        }, e), this
    }, i.default.event.special[u.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function(e) {
            if (i.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var c = "alert",
        f = i.default.fn[c],
        d = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function() {
                i.default.removeData(this._element, "bs.alert"), this._element = null
            }, t._getRootElement = function(e) {
                var t = u.getSelectorFromElement(e),
                    n = !1;
                return t && (n = document.querySelector(t)), n || (n = i.default(e).closest(".alert")[0]), n
            }, t._triggerCloseEvent = function(e) {
                var t = i.default.Event("close.bs.alert");
                return i.default(e).trigger(t), t
            }, t._removeElement = function(e) {
                var t = this;
                if (i.default(e).removeClass("show"), i.default(e).hasClass("fade")) {
                    var n = u.getTransitionDurationFromElement(e);
                    i.default(e).one(u.TRANSITION_END, function(n) {
                        return t._destroyElement(e, n)
                    }).emulateTransitionEnd(n)
                } else this._destroyElement(e)
            }, t._destroyElement = function(e) {
                i.default(e).detach().trigger("closed.bs.alert").remove()
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = i.default(this),
                        r = n.data("bs.alert");
                    r || (r = new e(this), n.data("bs.alert", r)), "close" === t && r[t](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), e
        }();
    i.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', d._handleDismiss(new d)), i.default.fn[c] = d._jQueryInterface, i.default.fn[c].Constructor = d, i.default.fn[c].noConflict = function() {
        return i.default.fn[c] = f, d._jQueryInterface
    };
    var h = i.default.fn.button,
        p = function() {
            function e(e) {
                this._element = e, this.shouldAvoidTriggerChange = !1
            }
            var t = e.prototype;
            return t.toggle = function() {
                var e = !0,
                    t = !0,
                    n = i.default(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var r = this._element.querySelector('input:not([type="hidden"])');
                    if (r) {
                        if ("radio" === r.type)
                            if (r.checked && this._element.classList.contains("active")) e = !1;
                            else {
                                var o = n.querySelector(".active");
                                o && i.default(o).removeClass("active")
                            }
                        e && ("checkbox" !== r.type && "radio" !== r.type || (r.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || i.default(r).trigger("change")), r.focus(), t = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && i.default(this._element).toggleClass("active"))
            }, t.dispose = function() {
                i.default.removeData(this._element, "bs.button"), this._element = null
            }, e._jQueryInterface = function(t, n) {
                return this.each(function() {
                    var r = i.default(this),
                        o = r.data("bs.button");
                    o || (o = new e(this), r.data("bs.button", o)), o.shouldAvoidTriggerChange = n, "toggle" === t && o[t]()
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), e
        }();
    i.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = e.target,
            n = t;
        if (i.default(t).hasClass("btn") || (t = i.default(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
        else {
            var r = t.querySelector('input:not([type="hidden"])');
            if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void e.preventDefault();
            "INPUT" !== n.tagName && "LABEL" === t.tagName || p._jQueryInterface.call(i.default(t), "toggle", "INPUT" === n.tagName)
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = i.default(e.target).closest(".btn")[0];
        i.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), i.default(window).on("load.bs.button.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var r = e[t],
                i = r.querySelector('input:not([type="hidden"])');
            i.checked || i.hasAttribute("checked") ? r.classList.add("active") : r.classList.remove("active")
        }
        for (var o = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < a; o++) {
            var s = e[o];
            "true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active")
        }
    }), i.default.fn.button = p._jQueryInterface, i.default.fn.button.Constructor = p, i.default.fn.button.noConflict = function() {
        return i.default.fn.button = h, p._jQueryInterface
    };
    var g = "carousel",
        m = i.default.fn[g],
        v = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        y = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        b = {
            TOUCH: "touch",
            PEN: "pen"
        },
        x = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var t = e.prototype;
            return t.next = function() {
                this._isSliding || this._slide("next")
            }, t.nextWhenVisible = function() {
                var e = i.default(this._element);
                !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide("prev")
            }, t.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (u.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(".active.carousel-item");
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) i.default(this._element).one("slid.bs.carousel", function() {
                        return t.to(e)
                    });
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        this._slide(e > n ? "next" : "prev", this._items[e])
                    }
            }, t.dispose = function() {
                i.default(this._element).off(".bs.carousel"), i.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(e) {
                return e = l({}, v, e), u.typeCheckConfig(g, e, y), e
            }, t._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                }
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && i.default(this._element).on("keydown.bs.carousel", function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && i.default(this._element).on("mouseenter.bs.carousel", function(t) {
                    return e.pause(t)
                }).on("mouseleave.bs.carousel", function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var t = function(t) {
                            e._pointerEvent && b[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        n = function(t) {
                            e._pointerEvent && b[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (i.default(this._element).on("pointerdown.bs.carousel", function(e) {
                        return t(e)
                    }), i.default(this._element).on("pointerup.bs.carousel", function(e) {
                        return n(e)
                    }), this._element.classList.add("pointer-event")) : (i.default(this._element).on("touchstart.bs.carousel", function(e) {
                        return t(e)
                    }), i.default(this._element).on("touchmove.bs.carousel", function(t) {
                        return function(t) {
                            e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    }), i.default(this._element).on("touchend.bs.carousel", function(e) {
                        return n(e)
                    }))
                }
            }, t._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, t._getItemByDirection = function(e, t) {
                var n = "next" === e,
                    r = "prev" === e,
                    i = this._getItemIndex(t);
                if ((r && 0 === i || n && i === this._items.length - 1) && !this._config.wrap) return t;
                var o = (i + ("prev" === e ? -1 : 1)) % this._items.length;
                return -1 === o ? this._items[this._items.length - 1] : this._items[o]
            }, t._triggerSlideEvent = function(e, t) {
                var n = this._getItemIndex(e),
                    r = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                    o = i.default.Event("slide.bs.carousel", {
                        relatedTarget: e,
                        direction: t,
                        from: r,
                        to: n
                    });
                return i.default(this._element).trigger(o), o
            }, t._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    i.default(t).removeClass("active");
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && i.default(n).addClass("active")
                }
            }, t._updateInterval = function() {
                var e = this._activeElement || this._element.querySelector(".active.carousel-item");
                if (e) {
                    var t = parseInt(e.getAttribute("data-interval"), 10);
                    t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
            }, t._slide = function(e, t) {
                var n, r, o, a = this,
                    s = this._element.querySelector(".active.carousel-item"),
                    l = this._getItemIndex(s),
                    c = t || s && this._getItemByDirection(e, s),
                    f = this._getItemIndex(c),
                    d = Boolean(this._interval);
                if ("next" === e ? (n = "carousel-item-left", r = "carousel-item-next", o = "left") : (n = "carousel-item-right", r = "carousel-item-prev", o = "right"), c && i.default(c).hasClass("active")) this._isSliding = !1;
                else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && s && c) {
                    this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(c), this._activeElement = c;
                    var h = i.default.Event("slid.bs.carousel", {
                        relatedTarget: c,
                        direction: o,
                        from: l,
                        to: f
                    });
                    if (i.default(this._element).hasClass("slide")) {
                        i.default(c).addClass(r), u.reflow(c), i.default(s).addClass(n), i.default(c).addClass(n);
                        var p = u.getTransitionDurationFromElement(s);
                        i.default(s).one(u.TRANSITION_END, function() {
                            i.default(c).removeClass(n + " " + r).addClass("active"), i.default(s).removeClass("active " + r + " " + n), a._isSliding = !1, setTimeout(function() {
                                return i.default(a._element).trigger(h)
                            }, 0)
                        }).emulateTransitionEnd(p)
                    } else i.default(s).removeClass("active"), i.default(c).addClass("active"), this._isSliding = !1, i.default(this._element).trigger(h);
                    d && this.cycle()
                }
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = i.default(this).data("bs.carousel"),
                        r = l({}, v, i.default(this).data());
                    "object" == typeof t && (r = l({}, r, t));
                    var o = "string" == typeof t ? t : r.slide;
                    if (n || (n = new e(this, r), i.default(this).data("bs.carousel", n)), "number" == typeof t) n.to(t);
                    else if ("string" == typeof o) {
                        if (void 0 === n[o]) throw new TypeError('No method named "' + o + '"');
                        n[o]()
                    } else r.interval && r.ride && (n.pause(), n.cycle())
                })
            }, e._dataApiClickHandler = function(t) {
                var n = u.getSelectorFromElement(this);
                if (n) {
                    var r = i.default(n)[0];
                    if (r && i.default(r).hasClass("carousel")) {
                        var o = l({}, i.default(r).data(), i.default(this).data()),
                            a = this.getAttribute("data-slide-to");
                        a && (o.interval = !1), e._jQueryInterface.call(i.default(r), o), a && i.default(r).data("bs.carousel").to(a), t.preventDefault()
                    }
                }
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return v
                }
            }]), e
        }();
    i.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", x._dataApiClickHandler), i.default(window).on("load.bs.carousel.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var r = i.default(e[t]);
            x._jQueryInterface.call(r, r.data())
        }
    }), i.default.fn[g] = x._jQueryInterface, i.default.fn[g].Constructor = x, i.default.fn[g].noConflict = function() {
        return i.default.fn[g] = m, x._jQueryInterface
    };
    var _ = "collapse",
        w = i.default.fn[_],
        T = {
            toggle: !0,
            parent: ""
        },
        S = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        C = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), r = 0, i = n.length; r < i; r++) {
                    var o = n[r],
                        a = u.getSelectorFromElement(o),
                        s = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
                            return t === e
                        });
                    null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = e.prototype;
            return t.toggle = function() {
                i.default(this._element).hasClass("show") ? this.hide() : this.show()
            }, t.show = function() {
                var t, n, r = this;
                if (!(this._isTransitioning || i.default(this._element).hasClass("show") || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains("collapse")
                    })).length && (t = null), t && (n = i.default(t).not(this._selector).data("bs.collapse")) && n._isTransitioning))) {
                    var o = i.default.Event("show.bs.collapse");
                    if (i.default(this._element).trigger(o), !o.isDefaultPrevented()) {
                        t && (e._jQueryInterface.call(i.default(t).not(this._selector), "hide"), n || i.default(t).data("bs.collapse", null));
                        var a = this._getDimension();
                        i.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && i.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            l = u.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(u.TRANSITION_END, function() {
                            i.default(r._element).removeClass("collapsing").addClass("collapse show"), r._element.style[a] = "", r.setTransitioning(!1), i.default(r._element).trigger("shown.bs.collapse")
                        }).emulateTransitionEnd(l), this._element.style[a] = this._element[s] + "px"
                    }
                }
            }, t.hide = function() {
                var e = this;
                if (!this._isTransitioning && i.default(this._element).hasClass("show")) {
                    var t = i.default.Event("hide.bs.collapse");
                    if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", u.reflow(this._element), i.default(this._element).addClass("collapsing").removeClass("collapse show");
                        var r = this._triggerArray.length;
                        if (r > 0)
                            for (var o = 0; o < r; o++) {
                                var a = this._triggerArray[o],
                                    s = u.getSelectorFromElement(a);
                                null !== s && (i.default([].slice.call(document.querySelectorAll(s))).hasClass("show") || i.default(a).addClass("collapsed").attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[n] = "";
                        var l = u.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(u.TRANSITION_END, function() {
                            e.setTransitioning(!1), i.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        }).emulateTransitionEnd(l)
                    }
                }
            }, t.setTransitioning = function(e) {
                this._isTransitioning = e
            }, t.dispose = function() {
                i.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function(e) {
                return (e = l({}, T, e)).toggle = Boolean(e.toggle), u.typeCheckConfig(_, e, S), e
            }, t._getDimension = function() {
                return i.default(this._element).hasClass("width") ? "width" : "height"
            }, t._getParent = function() {
                var t, n = this;
                u.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var r = [].slice.call(t.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'));
                return i.default(r).each(function(t, r) {
                    n._addAriaAndCollapsedClass(e._getTargetFromElement(r), [r])
                }), t
            }, t._addAriaAndCollapsedClass = function(e, t) {
                var n = i.default(e).hasClass("show");
                t.length && i.default(t).toggleClass("collapsed", !n).attr("aria-expanded", n)
            }, e._getTargetFromElement = function(e) {
                var t = u.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = i.default(this),
                        r = n.data("bs.collapse"),
                        o = l({}, T, n.data(), "object" == typeof t && t ? t : {});
                    if (!r && o.toggle && "string" == typeof t && /show|hide/.test(t) && (o.toggle = !1), r || (r = new e(this, o), n.data("bs.collapse", r)), "string" == typeof t) {
                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                        r[t]()
                    }
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return T
                }
            }]), e
        }();
    i.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = i.default(this),
            n = u.getSelectorFromElement(this),
            r = [].slice.call(document.querySelectorAll(n));
        i.default(r).each(function() {
            var e = i.default(this),
                n = e.data("bs.collapse") ? "toggle" : t.data();
            C._jQueryInterface.call(e, n)
        })
    }), i.default.fn[_] = C._jQueryInterface, i.default.fn[_].Constructor = C, i.default.fn[_].noConflict = function() {
        return i.default.fn[_] = w, C._jQueryInterface
    };
    var D = "dropdown",
        E = i.default.fn[D],
        A = new RegExp("38|40|27"),
        k = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        N = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        j = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = e.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !i.default(this._element).hasClass("disabled")) {
                    var t = i.default(this._menu).hasClass("show");
                    e._clearMenus(), t || this.show(!0)
                }
            }, t.show = function(t) {
                if (void 0 === t && (t = !1), !(this._element.disabled || i.default(this._element).hasClass("disabled") || i.default(this._menu).hasClass("show"))) {
                    var n = {
                            relatedTarget: this._element
                        },
                        r = i.default.Event("show.bs.dropdown", n),
                        a = e._getParentFromElement(this._element);
                    if (i.default(a).trigger(r), !r.isDefaultPrevented()) {
                        if (!this._inNavbar && t) {
                            if (void 0 === o.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            var s = this._element;
                            "parent" === this._config.reference ? s = a : u.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && i.default(a).addClass("position-static"), this._popper = new o.default(s, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === i.default(a).closest(".navbar-nav").length && i.default(document.body).children().on("mouseover", null, i.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), i.default(this._menu).toggleClass("show"), i.default(a).toggleClass("show").trigger(i.default.Event("shown.bs.dropdown", n))
                    }
                }
            }, t.hide = function() {
                if (!this._element.disabled && !i.default(this._element).hasClass("disabled") && i.default(this._menu).hasClass("show")) {
                    var t = {
                            relatedTarget: this._element
                        },
                        n = i.default.Event("hide.bs.dropdown", t),
                        r = e._getParentFromElement(this._element);
                    i.default(r).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), i.default(this._menu).toggleClass("show"), i.default(r).toggleClass("show").trigger(i.default.Event("hidden.bs.dropdown", t)))
                }
            }, t.dispose = function() {
                i.default.removeData(this._element, "bs.dropdown"), i.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var e = this;
                i.default(this._element).on("click.bs.dropdown", function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function(e) {
                return e = l({}, this.constructor.Default, i.default(this._element).data(), e), u.typeCheckConfig(D, e, this.constructor.DefaultType), e
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(".dropdown-menu"))
                }
                return this._menu
            }, t._getPlacement = function() {
                var e = i.default(this._element.parentNode),
                    t = "bottom-start";
                return e.hasClass("dropup") ? t = i.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : i.default(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"), t
            }, t._detectNavbar = function() {
                return i.default(this._element).closest(".navbar").length > 0
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), l({}, e, this._config.popperConfig)
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = i.default(this).data("bs.dropdown");
                    if (n || (n = new e(this, "object" == typeof t ? t : null), i.default(this).data("bs.dropdown", n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, e._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), r = 0, o = n.length; r < o; r++) {
                        var a = e._getParentFromElement(n[r]),
                            s = i.default(n[r]).data("bs.dropdown"),
                            l = {
                                relatedTarget: n[r]
                            };
                        if (t && "click" === t.type && (l.clickEvent = t), s) {
                            var u = s._menu;
                            if (i.default(a).hasClass("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && i.default.contains(a, t.target))) {
                                var c = i.default.Event("hide.bs.dropdown", l);
                                i.default(a).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), n[r].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), i.default(u).removeClass("show"), i.default(a).removeClass("show").trigger(i.default.Event("hidden.bs.dropdown", l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, n = u.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(t) {
                if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || i.default(t.target).closest(".dropdown-menu").length) : !A.test(t.which)) && !this.disabled && !i.default(this).hasClass("disabled")) {
                    var n = e._getParentFromElement(this),
                        r = i.default(n).hasClass("show");
                    if (r || 27 !== t.which) {
                        if (t.preventDefault(), t.stopPropagation(), !r || 27 === t.which || 32 === t.which) return 27 === t.which && i.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void i.default(this).trigger("click");
                        var o = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) {
                            return i.default(e).is(":visible")
                        });
                        if (0 !== o.length) {
                            var a = o.indexOf(t.target);
                            38 === t.which && a > 0 && a--, 40 === t.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus()
                        }
                    }
                }
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return k
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return N
                }
            }]), e
        }();
    i.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", j._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function(e) {
        e.preventDefault(), e.stopPropagation(), j._jQueryInterface.call(i.default(this), "toggle")
    }).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }), i.default.fn[D] = j._jQueryInterface, i.default.fn[D].Constructor = j, i.default.fn[D].noConflict = function() {
        return i.default.fn[D] = E, j._jQueryInterface
    };
    var I = i.default.fn.modal,
        L = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        P = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        R = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var t = e.prototype;
            return t.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, t.show = function(e) {
                var t = this;
                if (!this._isShown && !this._isTransitioning) {
                    i.default(this._element).hasClass("fade") && (this._isTransitioning = !0);
                    var n = i.default.Event("show.bs.modal", {
                        relatedTarget: e
                    });
                    i.default(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), i.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function(e) {
                        return t.hide(e)
                    }), i.default(this._dialog).on("mousedown.dismiss.bs.modal", function() {
                        i.default(t._element).one("mouseup.dismiss.bs.modal", function(e) {
                            i.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return t._showElement(e)
                    }))
                }
            }, t.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = i.default.Event("hide.bs.modal");
                    if (i.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = i.default(this._element).hasClass("fade");
                        if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), i.default(document).off("focusin.bs.modal"), i.default(this._element).removeClass("show"), i.default(this._element).off("click.dismiss.bs.modal"), i.default(this._dialog).off("mousedown.dismiss.bs.modal"), r) {
                            var o = u.getTransitionDurationFromElement(this._element);
                            i.default(this._element).one(u.TRANSITION_END, function(e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return i.default(e).off(".bs.modal")
                }), i.default(document).off("focusin.bs.modal"), i.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(e) {
                return e = l({}, L, e), u.typeCheckConfig("modal", e, P), e
            }, t._triggerBackdropTransition = function() {
                var e = this,
                    t = i.default.Event("hidePrevented.bs.modal");
                if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._element.scrollHeight > document.documentElement.clientHeight;
                    n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                    var r = u.getTransitionDurationFromElement(this._dialog);
                    i.default(this._element).off(u.TRANSITION_END), i.default(this._element).one(u.TRANSITION_END, function() {
                        e._element.classList.remove("modal-static"), n || i.default(e._element).one(u.TRANSITION_END, function() {
                            e._element.style.overflowY = ""
                        }).emulateTransitionEnd(e._element, r)
                    }).emulateTransitionEnd(r), this._element.focus()
                }
            }, t._showElement = function(e) {
                var t = this,
                    n = i.default(this._element).hasClass("fade"),
                    r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), i.default(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0, n && u.reflow(this._element), i.default(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                var o = i.default.Event("shown.bs.modal", {
                        relatedTarget: e
                    }),
                    a = function() {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, i.default(t._element).trigger(o)
                    };
                if (n) {
                    var s = u.getTransitionDurationFromElement(this._dialog);
                    i.default(this._dialog).one(u.TRANSITION_END, a).emulateTransitionEnd(s)
                } else a()
            }, t._enforceFocus = function() {
                var e = this;
                i.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function(t) {
                    document !== t.target && e._element !== t.target && 0 === i.default(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown ? i.default(this._element).on("keydown.dismiss.bs.modal", function(t) {
                    e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                }) : this._isShown || i.default(this._element).off("keydown.dismiss.bs.modal")
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? i.default(window).on("resize.bs.modal", function(t) {
                    return e.handleUpdate(t)
                }) : i.default(window).off("resize.bs.modal")
            }, t._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function() {
                    i.default(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), i.default(e._element).trigger("hidden.bs.modal")
                })
            }, t._removeBackdrop = function() {
                this._backdrop && (i.default(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function(e) {
                var t = this,
                    n = i.default(this._element).hasClass("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), i.default(this._backdrop).appendTo(document.body), i.default(this._element).on("click.dismiss.bs.modal", function(e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                        }), n && u.reflow(this._backdrop), i.default(this._backdrop).addClass("show"), !e) return;
                    if (!n) return void e();
                    var r = u.getTransitionDurationFromElement(this._backdrop);
                    i.default(this._backdrop).one(u.TRANSITION_END, e).emulateTransitionEnd(r)
                } else if (!this._isShown && this._backdrop) {
                    i.default(this._backdrop).removeClass("show");
                    var o = function() {
                        t._removeBackdrop(), e && e()
                    };
                    if (i.default(this._element).hasClass("fade")) {
                        var a = u.getTransitionDurationFromElement(this._backdrop);
                        i.default(this._backdrop).one(u.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o()
                } else e && e()
            }, t._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                        n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    i.default(t).each(function(t, n) {
                        var r = n.style.paddingRight,
                            o = i.default(n).css("padding-right");
                        i.default(n).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                    }), i.default(n).each(function(t, n) {
                        var r = n.style.marginRight,
                            o = i.default(n).css("margin-right");
                        i.default(n).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                    });
                    var r = document.body.style.paddingRight,
                        o = i.default(document.body).css("padding-right");
                    i.default(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                i.default(document.body).addClass("modal-open")
            }, t._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                i.default(e).each(function(e, t) {
                    var n = i.default(t).data("padding-right");
                    i.default(t).removeData("padding-right"), t.style.paddingRight = n || ""
                });
                var t = [].slice.call(document.querySelectorAll(".sticky-top"));
                i.default(t).each(function(e, t) {
                    var n = i.default(t).data("margin-right");
                    void 0 !== n && i.default(t).css("margin-right", n).removeData("margin-right")
                });
                var n = i.default(document.body).data("padding-right");
                i.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(t, n) {
                return this.each(function() {
                    var r = i.default(this).data("bs.modal"),
                        o = l({}, L, i.default(this).data(), "object" == typeof t && t ? t : {});
                    if (r || (r = new e(this, o), i.default(this).data("bs.modal", r)), "string" == typeof t) {
                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                        r[t](n)
                    } else o.show && r.show(n)
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return L
                }
            }]), e
        }();
    i.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t, n = this,
            r = u.getSelectorFromElement(this);
        r && (t = document.querySelector(r));
        var o = i.default(t).data("bs.modal") ? "toggle" : l({}, i.default(t).data(), i.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var a = i.default(t).one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || a.one("hidden.bs.modal", function() {
                i.default(n).is(":visible") && n.focus()
            })
        });
        R._jQueryInterface.call(i.default(t), o, this)
    }), i.default.fn.modal = R._jQueryInterface, i.default.fn.modal.Constructor = R, i.default.fn.modal.noConflict = function() {
        return i.default.fn.modal = I, R._jQueryInterface
    };
    var O = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        F = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        q = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function H(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var r = (new window.DOMParser).parseFromString(e, "text/html"), i = Object.keys(t), o = [].slice.call(r.body.querySelectorAll("*")), a = function(e, n) {
                var r = o[e],
                    a = r.nodeName.toLowerCase();
                if (-1 === i.indexOf(r.nodeName.toLowerCase())) return r.parentNode.removeChild(r), "continue";
                var s = [].slice.call(r.attributes),
                    l = [].concat(t["*"] || [], t[a] || []);
                s.forEach(function(e) {
                    (function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === O.indexOf(n) || Boolean(e.nodeValue.match(F) || e.nodeValue.match(q));
                        for (var r = t.filter(function(e) {
                                return e instanceof RegExp
                            }), i = 0, o = r.length; i < o; i++)
                            if (n.match(r[i])) return !0;
                        return !1
                    })(e, l) || r.removeAttribute(e.nodeName)
                })
            }, s = 0, l = o.length; s < l; s++) a(s);
        return r.body.innerHTML
    }
    var M = "tooltip",
        W = i.default.fn[M],
        B = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        U = ["sanitize", "whiteList", "sanitizeFn"],
        $ = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        X = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        V = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        z = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        Q = function() {
            function e(e, t) {
                if (void 0 === o.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var t = e.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }, t.disable = function() {
                this._isEnabled = !1
            }, t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = i.default(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (i.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() {
                clearTimeout(this._timeout), i.default.removeData(this.element, this.constructor.DATA_KEY), i.default(this.element).off(this.constructor.EVENT_KEY), i.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && i.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function() {
                var e = this;
                if ("none" === i.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = i.default.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    i.default(this.element).trigger(t);
                    var n = u.findShadowRoot(this.element),
                        r = i.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !r) return;
                    var a = this.getTipElement(),
                        s = u.getUID(this.constructor.NAME);
                    a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && i.default(a).addClass("fade");
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                        c = this._getAttachment(l);
                    this.addAttachmentClass(c);
                    var f = this._getContainer();
                    i.default(a).data(this.constructor.DATA_KEY, this), i.default.contains(this.element.ownerDocument.documentElement, this.tip) || i.default(a).appendTo(f), i.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new o.default(this.element, a, this._getPopperConfig(c)), i.default(a).addClass("show"), i.default(a).addClass(this.config.customClass), "ontouchstart" in document.documentElement && i.default(document.body).children().on("mouseover", null, i.default.noop);
                    var d = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, i.default(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
                    };
                    if (i.default(this.tip).hasClass("fade")) {
                        var h = u.getTransitionDurationFromElement(this.tip);
                        i.default(this.tip).one(u.TRANSITION_END, d).emulateTransitionEnd(h)
                    } else d()
                }
            }, t.hide = function(e) {
                var t = this,
                    n = this.getTipElement(),
                    r = i.default.Event(this.constructor.Event.HIDE),
                    o = function() {
                        "show" !== t._hoverState && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), i.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                    };
                if (i.default(this.element).trigger(r), !r.isDefaultPrevented()) {
                    if (i.default(n).removeClass("show"), "ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, i.default(this.tip).hasClass("fade")) {
                        var a = u.getTransitionDurationFromElement(n);
                        i.default(n).one(u.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o();
                    this._hoverState = ""
                }
            }, t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function() {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function(e) {
                i.default(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, t.getTipElement = function() {
                return this.tip = this.tip || i.default(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(i.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), i.default(e).removeClass("fade show")
            }, t.setElementContent = function(e, t) {
                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = H(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? i.default(t).parent().is(e) || e.empty().append(t) : e.text(i.default(t).text())
            }, t.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, t._getPopperConfig = function(e) {
                var t = this;
                return l({}, {
                    placement: e,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }, this.config.popperConfig)
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, t._getContainer = function() {
                return !1 === this.config.container ? document.body : u.isElement(this.config.container) ? i.default(this.config.container) : i.default(document).find(this.config.container)
            }, t._getAttachment = function(e) {
                return X[e.toUpperCase()]
            }, t._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) i.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if ("manual" !== t) {
                        var n = "hover" === t ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            r = "hover" === t ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        i.default(e.element).on(n, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(r, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                }), this._hideModalHandler = function() {
                    e.element && e.hide()
                }, i.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || i.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), i.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    "show" === t._hoverState && t.show()
                }, t.config.delay.show) : t.show())
            }, t._leave = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || i.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), i.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    "out" === t._hoverState && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, t._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, t._getConfig = function(e) {
                var t = i.default(this.element).data();
                return Object.keys(t).forEach(function(e) {
                    -1 !== U.indexOf(e) && delete t[e]
                }), "number" == typeof(e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), u.typeCheckConfig(M, e, this.constructor.DefaultType), e.sanitize && (e.template = H(e.template, e.whiteList, e.sanitizeFn)), e
            }, t._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, t._cleanTipClass = function() {
                var e = i.default(this.getTipElement()),
                    t = e.attr("class").match(B);
                null !== t && t.length && e.removeClass(t.join(""))
            }, t._handlePopperPlacementChange = function(e) {
                this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, t._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (i.default(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = i.default(this),
                        r = n.data("bs.tooltip"),
                        o = "object" == typeof t && t;
                    if ((r || !/dispose|hide/.test(t)) && (r || (r = new e(this, o), n.data("bs.tooltip", r)), "string" == typeof t)) {
                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                        r[t]()
                    }
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return V
                }
            }, {
                key: "NAME",
                get: function() {
                    return M
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return z
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return $
                }
            }]), e
        }();
    i.default.fn[M] = Q._jQueryInterface, i.default.fn[M].Constructor = Q, i.default.fn[M].noConflict = function() {
        return i.default.fn[M] = W, Q._jQueryInterface
    };
    var J = "popover",
        Y = i.default.fn[J],
        G = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        K = l({}, Q.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Z = l({}, Q.DefaultType, {
            content: "(string|element|function)"
        }),
        ee = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        te = function(e) {
            var t, n;

            function r() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
            var o = r.prototype;
            return o.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, o.addAttachmentClass = function(e) {
                i.default(this.getTipElement()).addClass("bs-popover-" + e)
            }, o.getTipElement = function() {
                return this.tip = this.tip || i.default(this.config.template)[0], this.tip
            }, o.setContent = function() {
                var e = i.default(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, o._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, o._cleanTipClass = function() {
                var e = i.default(this.getTipElement()),
                    t = e.attr("class").match(G);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }, r._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = i.default(this).data("bs.popover"),
                        n = "object" == typeof e ? e : null;
                    if ((t || !/dispose|hide/.test(e)) && (t || (t = new r(this, n), i.default(this).data("bs.popover", t)), "string" == typeof e)) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, s(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return K
                }
            }, {
                key: "NAME",
                get: function() {
                    return J
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return ee
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Z
                }
            }]), r
        }(Q);
    i.default.fn[J] = te._jQueryInterface, i.default.fn[J].Constructor = te, i.default.fn[J].noConflict = function() {
        return i.default.fn[J] = Y, te._jQueryInterface
    };
    var ne = "scrollspy",
        re = i.default.fn[ne],
        ie = {
            offset: 10,
            method: "auto",
            target: ""
        },
        oe = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        ae = function() {
            function e(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, i.default(this._scrollElement).on("scroll.bs.scrollspy", function(e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }
            var t = e.prototype;
            return t.refresh = function() {
                var e = this,
                    t = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : "position" : this._config.method,
                    n = "position" === t ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var r, o = u.getSelectorFromElement(e);
                    if (o && (r = document.querySelector(o)), r) {
                        var a = r.getBoundingClientRect();
                        if (a.width || a.height) return [i.default(r)[t]().top + n, o]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function() {
                i.default.removeData(this._element, "bs.scrollspy"), i.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(e) {
                if ("string" != typeof(e = l({}, ie, "object" == typeof e && e ? e : {})).target && u.isElement(e.target)) {
                    var t = i.default(e.target).attr("id");
                    t || (t = u.getUID(ne), i.default(e.target).attr("id", t)), e.target = "#" + t
                }
                return u.typeCheckConfig(ne, e, oe), e
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                    var r = this._targets[this._targets.length - 1];
                    this._activeTarget !== r && this._activate(r)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    n = i.default([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), i.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                    relatedTarget: e
                })
            }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains("active")
                }).forEach(function(e) {
                    return e.classList.remove("active")
                })
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = i.default(this).data("bs.scrollspy");
                    if (n || (n = new e(this, "object" == typeof t && t), i.default(this).data("bs.scrollspy", n)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ie
                }
            }]), e
        }();
    i.default(window).on("load.bs.scrollspy.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
            var n = i.default(e[t]);
            ae._jQueryInterface.call(n, n.data())
        }
    }), i.default.fn[ne] = ae._jQueryInterface, i.default.fn[ne].Constructor = ae, i.default.fn[ne].noConflict = function() {
        return i.default.fn[ne] = re, ae._jQueryInterface
    };
    var se = i.default.fn.tab,
        le = function() {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i.default(this._element).hasClass("active") || i.default(this._element).hasClass("disabled"))) {
                    var t, n, r = i.default(this._element).closest(".nav, .list-group")[0],
                        o = u.getSelectorFromElement(this._element);
                    if (r) {
                        var a = "UL" === r.nodeName || "OL" === r.nodeName ? "> li > .active" : ".active";
                        n = (n = i.default.makeArray(i.default(r).find(a)))[n.length - 1]
                    }
                    var s = i.default.Event("hide.bs.tab", {
                            relatedTarget: this._element
                        }),
                        l = i.default.Event("show.bs.tab", {
                            relatedTarget: n
                        });
                    if (n && i.default(n).trigger(s), i.default(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)), this._activate(this._element, r);
                        var c = function() {
                            var t = i.default.Event("hidden.bs.tab", {
                                    relatedTarget: e._element
                                }),
                                r = i.default.Event("shown.bs.tab", {
                                    relatedTarget: n
                                });
                            i.default(n).trigger(t), i.default(e._element).trigger(r)
                        };
                        t ? this._activate(t, t.parentNode, c) : c()
                    }
                }
            }, t.dispose = function() {
                i.default.removeData(this._element, "bs.tab"), this._element = null
            }, t._activate = function(e, t, n) {
                var r = this,
                    o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? i.default(t).children(".active") : i.default(t).find("> li > .active"))[0],
                    a = n && o && i.default(o).hasClass("fade"),
                    s = function() {
                        return r._transitionComplete(e, o, n)
                    };
                if (o && a) {
                    var l = u.getTransitionDurationFromElement(o);
                    i.default(o).removeClass("show").one(u.TRANSITION_END, s).emulateTransitionEnd(l)
                } else s()
            }, t._transitionComplete = function(e, t, n) {
                if (t) {
                    i.default(t).removeClass("active");
                    var r = i.default(t.parentNode).find("> .dropdown-menu .active")[0];
                    r && i.default(r).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (i.default(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), u.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && i.default(e.parentNode).hasClass("dropdown-menu")) {
                    var o = i.default(e).closest(".dropdown")[0];
                    if (o) {
                        var a = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                        i.default(a).addClass("active")
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = i.default(this),
                        r = n.data("bs.tab");
                    if (r || (r = new e(this), n.data("bs.tab", r)), "string" == typeof t) {
                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                        r[t]()
                    }
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), e
        }();
    i.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), le._jQueryInterface.call(i.default(this), "show")
    }), i.default.fn.tab = le._jQueryInterface, i.default.fn.tab.Constructor = le, i.default.fn.tab.noConflict = function() {
        return i.default.fn.tab = se, le._jQueryInterface
    };
    var ue = i.default.fn.toast,
        ce = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        fe = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        de = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var t = e.prototype;
            return t.show = function() {
                var e = this,
                    t = i.default.Event("show.bs.toast");
                if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                    var n = function() {
                        e._element.classList.remove("showing"), e._element.classList.add("show"), i.default(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout(function() {
                            e.hide()
                        }, e._config.delay))
                    };
                    if (this._element.classList.remove("hide"), u.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var r = u.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(u.TRANSITION_END, n).emulateTransitionEnd(r)
                    } else n()
                }
            }, t.hide = function() {
                if (this._element.classList.contains("show")) {
                    var e = i.default.Event("hide.bs.toast");
                    i.default(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                }
            }, t.dispose = function() {
                this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), i.default(this._element).off("click.dismiss.bs.toast"), i.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null
            }, t._getConfig = function(e) {
                return e = l({}, fe, i.default(this._element).data(), "object" == typeof e && e ? e : {}), u.typeCheckConfig("toast", e, this.constructor.DefaultType), e
            }, t._setListeners = function() {
                var e = this;
                i.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function() {
                    return e.hide()
                })
            }, t._close = function() {
                var e = this,
                    t = function() {
                        e._element.classList.add("hide"), i.default(e._element).trigger("hidden.bs.toast")
                    };
                if (this._element.classList.remove("show"), this._config.animation) {
                    var n = u.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(u.TRANSITION_END, t).emulateTransitionEnd(n)
                } else t()
            }, t._clearTimeout = function() {
                clearTimeout(this._timeout), this._timeout = null
            }, e._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = i.default(this),
                        r = n.data("bs.toast");
                    if (r || (r = new e(this, "object" == typeof t && t), n.data("bs.toast", r)), "string" == typeof t) {
                        if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                        r[t](this)
                    }
                })
            }, s(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ce
                }
            }, {
                key: "Default",
                get: function() {
                    return fe
                }
            }]), e
        }();
    i.default.fn.toast = de._jQueryInterface, i.default.fn.toast.Constructor = de, i.default.fn.toast.noConflict = function() {
        return i.default.fn.toast = ue, de._jQueryInterface
    }, e.Alert = d, e.Button = p, e.Carousel = x, e.Collapse = C, e.Dropdown = j, e.Modal = R, e.Popover = te, e.Scrollspy = ae, e.Tab = le, e.Toast = de, e.Tooltip = Q, e.Util = u, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = Object.getPrototypeOf,
        i = n.slice,
        o = n.flat ? function(e) {
            return n.flat.call(e)
        } : function(e) {
            return n.concat.apply([], e)
        },
        a = n.push,
        s = n.indexOf,
        l = {},
        u = l.toString,
        c = l.hasOwnProperty,
        f = c.toString,
        d = f.call(Object),
        h = {},
        p = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        g = function(e) {
            return null != e && e === e.window
        },
        m = e.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var r, i, o = (n = n || m).createElement("script");
        if (o.text = e, t)
            for (r in v)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e
    }
    var x = "3.6.0",
        _ = function(e, t) {
            return new _.fn.init(e, t)
        };

    function w(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !p(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    _.fn = _.prototype = {
        jquery: x,
        constructor: _,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return _.each(this, e)
        },
        map: function(e) {
            return this.pushStack(_.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(_.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(_.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, _.extend = _.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || p(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (u && r && (_.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || _.isPlainObject(n) ? n : {}, i = !1, a[t] = _.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, _.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof(n = c.call(t, "constructor") && t.constructor) || f.call(n) !== d))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (w(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (w(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0,
                s = [];
            if (w(e))
                for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return o(s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function(e) {
        var t, n, r, i, o, a, s, l, u, c, f, d, h, p, g, m, v, y, b, x = "sizzle" + 1 * new Date,
            _ = e.document,
            w = 0,
            T = 0,
            S = le(),
            C = le(),
            D = le(),
            E = le(),
            A = function(e, t) {
                return e === t && (f = !0), 0
            },
            k = {}.hasOwnProperty,
            N = [],
            j = N.pop,
            I = N.push,
            L = N.push,
            P = N.slice,
            R = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            H = "\\[[\\x20\\t\\r\\n\\f]*(" + q + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + F + "*\\]",
            M = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            W = new RegExp(F + "+", "g"),
            B = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            U = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
            $ = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
            X = new RegExp(F + "|>"),
            V = new RegExp(M),
            z = new RegExp("^" + q + "$"),
            Q = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
            },
            J = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                d()
            },
            ae = xe(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(N = P.call(_.childNodes), _.childNodes)
        } catch (Ce) {
            L = {
                apply: N.length ? function(e, t) {
                    I.apply(e, P.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, r, i) {
            var o, s, u, c, f, p, v, y = t && t.ownerDocument,
                _ = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) return r;
            if (!i && (d(t), t = t || h, g)) {
                if (11 !== _ && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === _) {
                            if (!(u = t.getElementById(o))) return r;
                            if (u.id === o) return r.push(u), r
                        } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return r.push(u), r
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    }
                if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== _ || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === _ && (X.test(e) || $.test(e))) {
                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = x)), s = (p = a(e)).length; s--;) p[s] = (c ? "#" + c : ":scope") + " " + be(p[s]);
                        v = p.join(",")
                    }
                    try {
                        return L.apply(r, y.querySelectorAll(v)), r
                    } catch (w) {
                        E(e, !0)
                    } finally {
                        c === x && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(B, "$1"), t, r, i)
        }

        function le() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function ue(e) {
            return e[x] = !0, e
        }

        function ce(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (Ce) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function he(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ue(function(t) {
                return t = +t, ue(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, o = se.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !J.test(e && e.namespaceURI || t && t.nodeName || "HTML")
            }, d = se.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : _;
                return a != h && 9 === a.nodeType && a.documentElement ? (p = (h = a).documentElement, g = !o(h), _ != h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce(function(e) {
                    return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), n.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ce(function(e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = K.test(h.getElementsByClassName), n.getById = ce(function(e) {
                    return p.appendChild(e).id = x, !h.getElementsByName || !h.getElementsByName(x).length
                }), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = K.test(h.querySelectorAll)) && (ce(function(e) {
                    var t;
                    p.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = K.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce(function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(p.compareDocumentPosition), b = t || K.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == h || e.ownerDocument == _ && b(_, e) ? -1 : t == h || t.ownerDocument == _ && b(_, t) ? 1 : c ? R(c, e) - R(c, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == h ? -1 : t == h ? 1 : i ? -1 : o ? 1 : c ? R(c, e) - R(c, t) : 0;
                    if (i === o) return de(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? de(a[r], s[r]) : a[r] == _ ? -1 : s[r] == _ ? 1 : 0
                }, h) : h
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (d(e), n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (Ce) {
                    E(t, !0)
                }
                return se(t, h, null, [e]).length > 0
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != h && d(e), b(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != h && d(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && k.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return c = null, e
            }, i = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = se.selectors = {
                cacheLength: 50,
                createPseudo: ue,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + F + "|$)")) && S(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = se.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (b = (h = (u = (c = (f = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === w && u[1]) && u[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();)
                                        if (1 === d.nodeType && ++b && d === t) {
                                            c[e] = [w, h, b];
                                            break
                                        }
                                } else if (y && (b = h = (u = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === w && u[1]), !1 === b)
                                    for (;
                                        (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [w, b]), d !== t)););
                                return (b -= i) === r || b % r == 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = R(e, o[a])] = !(n[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: ue(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(B, "$1"));
                        return r[x] ? ue(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: ue(function(e) {
                        return function(t) {
                            return se(e, t).length > 0
                        }
                    }),
                    contains: ue(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return (t.textContent || i(t)).indexOf(e) > -1
                            }
                    }),
                    lang: ue(function(e) {
                        return z.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Y.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = he(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function xe(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = T++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, l) {
                var u, c, f, d = [w, s];
                if (l) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((u = c[o]) && u[0] === w && u[1] === s) return d[2] = u[2];
                                if (c[o] = d, d[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function _e(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[x] && (r = Te(r)), i && !i[x] && (i = Te(i, o)), ue(function(o, a, s, l) {
                var u, c, f, d = [],
                    h = [],
                    p = a.length,
                    g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : we(g, d, e, s, l),
                    v = n ? i || (o ? e : p || r) ? [] : a : m;
                if (n && n(m, v, s, l), r)
                    for (u = we(v, h), r(u, [], s, l), c = u.length; c--;)(f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = v.length; c--;)(f = v[c]) && u.push(m[c] = f);
                            i(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (u = i ? R(o, f) : d[c]) > -1 && (o[u] = !(a[u] = f))
                    }
                } else v = we(v === a ? v.splice(p, v.length) : v), i ? i(null, a, v, l) : L.apply(a, v)
            })
        }

        function Se(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = xe(function(e) {
                    return e === t
                }, s, !0), f = xe(function(e) {
                    return R(t, e) > -1
                }, s, !0), d = [function(e, n, r) {
                    var i = !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; l < o; l++)
                if (n = r.relative[e[l].type]) d = [xe(_e(d), n)];
                else {
                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                        for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                        return Te(l > 1 && _e(d), l > 1 && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, l < i && Se(e.slice(l, i)), i < o && Se(e = e.slice(i)), i < o && be(e))
                    }
                    d.push(n)
                }
            return _e(d)
        }
        return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
            var n, i, o, a, s, l, u, c = C[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = r.preFilter; s;) {
                for (a in n && !(i = U.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = $.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(B, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = Q[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : C(e, l).slice(0)
        }, s = se.compile = function(e, t) {
            var n, i = [],
                o = [],
                s = D[e + " "];
            if (!s) {
                for (t || (t = a(e)), n = t.length; n--;)(s = Se(t[n]))[x] ? i.push(s) : o.push(s);
                (s = D(e, function(e, t) {
                    var n = t.length > 0,
                        i = e.length > 0,
                        o = function(o, a, s, l, c) {
                            var f, p, m, v = 0,
                                y = "0",
                                b = o && [],
                                x = [],
                                _ = u,
                                T = o || i && r.find.TAG("*", c),
                                S = w += null == _ ? 1 : Math.random() || .1,
                                C = T.length;
                            for (c && (u = a == h || a || c); y !== C && null != (f = T[y]); y++) {
                                if (i && f) {
                                    for (p = 0, a || f.ownerDocument == h || (d(f), s = !g); m = e[p++];)
                                        if (m(f, a || h, s)) {
                                            l.push(f);
                                            break
                                        }
                                    c && (w = S)
                                }
                                n && ((f = !m && f) && v--, o && b.push(f))
                            }
                            if (v += y, n && y !== v) {
                                for (p = 0; m = t[p++];) m(b, x, a, s);
                                if (o) {
                                    if (v > 0)
                                        for (; y--;) b[y] || x[y] || (x[y] = j.call(l));
                                    x = we(x)
                                }
                                L.apply(l, x), c && !o && x.length > 0 && v + t.length > 1 && se.uniqueSort(l)
                            }
                            return c && (w = S, u = _), b
                        };
                    return n ? ue(o) : o
                }(o, i))).selector = e
            }
            return s
        }, l = se.select = function(e, t, n, i) {
            var o, l, u, c, f, d = "function" == typeof e && e,
                h = !i && a(e = d.selector || e);
            if (n = n || [], 1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = Q.needsContext.test(e) ? 0 : l.length; o-- && !r.relative[c = (u = l[o]).type];)
                    if ((f = r.find[c]) && (i = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = i.length && be(l))) return L.apply(n, i), n;
                        break
                    }
            }
            return (d || s(e, h))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(O, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(e);
    _.find = T, _.expr = T.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = T.uniqueSort, _.text = T.getText, _.isXMLDoc = T.isXML, _.contains = T.contains, _.escapeSelector = T.escape;
    var S = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && _(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        C = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        D = _.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function k(e, t, n) {
        return p(t) ? _.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? _.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? _.grep(e, function(e) {
            return s.call(t, e) > -1 !== n
        }) : _.filter(t, e, n)
    }
    _.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? _.find.matchesSelector(r, e) ? [r] : [] : _.find.matches(e, _.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (_.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) _.find(e, i[t], n);
            return r > 1 ? _.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(k(this, e || [], !0))
        },
        is: function(e) {
            return !!k(this, "string" == typeof e && D.test(e) ? _(e) : e || [], !1).length
        }
    });
    var N, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || N, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (_.merge(this, _.parseHTML(r[1], (t = t instanceof _ ? t[0] : t) && t.nodeType ? t.ownerDocument || t : m, !0)), A.test(r[1]) && _.isPlainObject(t))
                    for (r in t) p(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = m.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
    }).prototype = _.fn, N = _(m);
    var I = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    _.fn.extend({
        has: function(e) {
            var t = _(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (_.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && _(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(_(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (E(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
    }, function(e, t) {
        _.fn[e] = function(n, r) {
            var i = _.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = _.filter(r, i)), this.length > 1 && (L[e] || _.uniqueSort(i), I.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function O(e) {
        return e
    }

    function F(e) {
        throw e
    }

    function q(e, t, n, r) {
        var i;
        try {
            e && p(i = e.promise) ? i.call(e).done(t).fail(n) : e && p(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    _.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return _.each(e.match(R) || [], function(e, n) {
                t[n] = !0
            }), t
        }(e) : _.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            l = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            u = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        _.each(n, function(n, r) {
                            p(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return _.each(arguments, function(e, t) {
                        for (var n;
                            (n = _.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function(e) {
                    return e ? _.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return u
    }, _.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                    ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return _.Deferred(function(t) {
                            _.each(n, function(n, r) {
                                var i = p(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    l = arguments,
                                    u = function() {
                                        var e, u;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            p(u = e && ("object" == typeof e || "function" == typeof e) && e.then) ? i ? u.call(e, a(o, n, O, i), a(o, n, F, i)) : (o++, u.call(e, a(o, n, O, i), a(o, n, F, i), a(o, n, O, n.notifyWith))) : (r !== O && (s = void 0, l = [e]), (i || n.resolveWith)(s, l))
                                        }
                                    },
                                    c = i ? u : function() {
                                        try {
                                            u()
                                        } catch (e) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== F && (s = void 0, l = [e]), n.rejectWith(s, l))
                                        }
                                    };
                                t ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return _.Deferred(function(e) {
                            n[0][3].add(a(0, e, p(i) ? i : O, e.notifyWith)), n[1][3].add(a(0, e, p(t) ? t : O)), n[2][3].add(a(0, e, p(r) ? r : F))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? _.extend(e, i) : i
                    }
                },
                o = {};
            return _.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                o = i.call(arguments),
                a = _.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, o[e] = arguments.length > 1 ? i.call(arguments) : n, --t || a.resolveWith(r, o)
                    }
                };
            if (t <= 1 && (q(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || p(o[n] && o[n].then))) return a.then();
            for (; n--;) q(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && H.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, _.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var M = _.Deferred();

    function W() {
        m.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), _.ready()
    }
    _.fn.ready = function(e) {
        return M.then(e).catch(function(e) {
            _.readyException(e)
        }), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || M.resolveWith(m, [_]))
        }
    }), _.ready.then = M.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(_.ready) : (m.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
    var B = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === b(n))
                for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, p(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(_(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        U = /^-ms-/,
        $ = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(U, "ms-").replace($, X)
    }
    var z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = _.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || _.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var J = new Q,
        Y = new Q,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (i) {}
                Y.set(e, t, n)
            } else n = void 0;
        return n
    }
    _.extend({
        hasData: function(e) {
            return Y.hasData(e) || J.hasData(e)
        },
        data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        removeData: function(e, t) {
            Y.remove(e, t)
        },
        _data: function(e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function(e, t) {
            J.remove(e, t)
        }
    }), _.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Y.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = V(r.slice(5)), Z(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Y.set(this, e)
            }) : B(this, function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Y.get(o, e)) || void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each(function() {
                    Y.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Y.remove(this, e)
            })
        }
    }), _.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return r = J.get(e, t = (t || "fx") + "queue"), n && (!r || Array.isArray(n) ? r = J.access(e, t, _.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            var n = _.queue(e, t = t || "fx"),
                r = n.length,
                i = n.shift(),
                o = _._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                _.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: _.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), _.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = _.queue(this, e, t);
                _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                _.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = _.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = m.documentElement,
        ie = function(e) {
            return _.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return _.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === _.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return _.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (_.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (_.cssNumber[t] || "px" !== u && +l) && te.exec(_.css(e, t));
        if (c && c[3] !== u) {
            for (u = u || c[3], c = +(l /= 2) || 1; a--;) _.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
            _.style(e, t, (c *= 2) + u), n = n || []
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }
    var le = {};

    function ue(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = _.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function ce(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ue(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    _.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var fe, de, he = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ge = /^$|^module$|\/(?:java|ecma)script/i;
    fe = m.createDocumentFragment().appendChild(m.createElement("div")), (de = m.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), fe.appendChild(de), h.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", h.option = !!fe.lastChild;
    var me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? _.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, h.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var be = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === b(o)) _.merge(d, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), a.innerHTML = (l = me[s] || me._default)[1] + _.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
            _.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; o = d[h++];)
            if (r && _.inArray(o, r) > -1) i && i.push(o);
            else if (u = ie(o), a = ve(f.appendChild(o), "script"), u && ye(a), n)
            for (c = 0; o = a[c++];) ge.test(o.type || "") && n.push(o);
        return f
    }
    var _e = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Se(e, t) {
        return e === function() {
            try {
                return m.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ce(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ce(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return _().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = _.guid++)), e.each(function() {
            _.event.add(this, t, i, r, n)
        })
    }

    function De(e, t, n) {
        n ? (J.set(e, t, !1), _.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, o, a = J.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(_.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = i.call(arguments), J.set(this, t, a), r = n(this, t), this[t](), a !== (o = J.get(this, t)) || r ? J.set(this, t, !1) : o = {}, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                } else a.length && (J.set(this, t, {
                    value: _.event.trigger(_.extend(a[0], _.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === J.get(e, t) && _.event.add(e, t, we)
    }
    _.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, h, p, g, m = J.get(e);
            if (z(e))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && _.find.matchesSelector(re, i), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function(t) {
                        return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(R) || [""]).length; u--;) h = g = (s = _e.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h && (f = _.event.special[h] || {}, f = _.event.special[h = (i ? f.delegateType : f.bindType) || h] || {}, c = _.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && _.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, p, a) || e.addEventListener && e.addEventListener(h, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), _.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, h, p, g, m = J.hasData(e) && J.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(R) || [""]).length; u--;)
                    if (h = g = (s = _e.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                        for (f = _.event.special[h] || {}, d = l[h = (r ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || _.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) _.event.remove(e, h + t[u], n, r, !0);
                _.isEmptyObject(l) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                l = _.event.fix(e),
                u = (J.get(this, "events") || Object.create(null))[l.type] || [],
                c = _.event.special[l.type] || {};
            for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                for (a = _.event.handlers.call(this, l, u), t = 0;
                    (i = a[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((_.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? _(i, this).index(u) > -1 : _.find(i, this, null, [u]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: p(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[_.expando] ? e : new _.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && E(t, "input") && De(t, "click", we), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && E(t, "input") && De(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && E(t, "input") && J.get(t, "click") || E(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, _.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, _.Event = function(e, t) {
        if (!(this instanceof _.Event)) return new _.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, _.event.addProp), _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        _.event.special[e] = {
            setup: function() {
                return De(this, e, Se), !1
            },
            trigger: function() {
                return De(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        _.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || _.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), _.fn.extend({
        on: function(e, t, n, r) {
            return Ce(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ce(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, _(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                _.event.remove(this, e, n, t)
            })
        }
    });
    var Ee = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ne(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }

    function je(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ie(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (s = J.get(e).events))
                for (i in J.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) _.event.add(t, i, s[i][n]);
            Y.hasData(e) && (o = Y.access(e), a = _.extend({}, o), Y.set(t, a))
        }
    }

    function Pe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && he.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = o(t);
        var i, a, s, l, u, c, f = 0,
            d = e.length,
            g = d - 1,
            m = t[0],
            v = p(m);
        if (v || d > 1 && "string" == typeof m && !h.checkClone && Ae.test(m)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = m.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (d && (a = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
            for (l = (s = _.map(ve(i, "script"), je)).length; f < d; f++) u = i, f !== g && (u = _.clone(u, !0, !0), l && _.merge(s, ve(u, "script"))), n.call(e[f], u, f);
            if (l)
                for (c = s[s.length - 1].ownerDocument, _.map(s, Ie), f = 0; f < l; f++) ge.test((u = s[f]).type || "") && !J.access(u, "globalEval") && _.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? _._evalUrl && !u.noModule && _._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, c) : y(u.textContent.replace(ke, ""), u, c))
        }
        return e
    }

    function Oe(e, t, n) {
        for (var r, i = t ? _.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || _.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    _.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                l = ie(e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                for (a = ve(s), r = 0, i = (o = ve(e)).length; r < i; r++) Pe(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(s), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, s);
            return (a = ve(s, "script")).length > 0 && ye(a, !l && ve(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = _.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (z(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? _.event.remove(n, r) : _.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[Y.expando] && (n[Y.expando] = void 0)
                }
        }
    }), _.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? _.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ne(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return _.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                _.inArray(this, e) < 0 && (_.cleanData(ve(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        _.fn[e] = function(e) {
            for (var n, r = [], i = _(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), _(i[s])[t](n), a.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Fe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        qe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        He = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Me = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || qe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = _.style(e, t)), !h.pixelBoxStyles() && Fe.test(a) && Me.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Be(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), re.removeChild(u), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, l, u = m.createElement("div"),
            c = m.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, _.extend(h, {
            boxSizingReliable: function() {
                return t(), i
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), o
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == s && (t = m.createElement("table"), n = m.createElement("tr"), r = m.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", re.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, re.removeChild(t)), s
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        $e = m.createElement("div").style,
        Xe = {};

    function Ve(e) {
        return _.cssProps[e] || Xe[e] || (e in $e ? e : Xe[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
                if ((e = Ue[n] + t) in $e) return e
        }(e) || e)
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ge(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += _.css(e, n + ne[a], !0, i)), r ? ("content" === n && (l -= _.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (l -= _.css(e, "border" + ne[a] + "Width", !0, i))) : (l += _.css(e, "padding" + ne[a], !0, i), "padding" !== n ? l += _.css(e, "border" + ne[a] + "Width", !0, i) : s += _.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
    }

    function Ze(e, t, n) {
        var r = qe(e),
            i = (!h.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Fe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!h.boxSizingReliable() && i || !h.reliableTrDimensions() && E(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === _.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === _.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    l = Qe.test(t),
                    u = e.style;
                if (l || (t = Ve(s)), a = _.cssHooks[t] || _.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (_.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ve(s)), (a = _.cssHooks[t] || _.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), _.each(["height", "width"], function(e, t) {
        _.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !ze.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, r) : He(e, Je, function() {
                    return Ze(e, t, r)
                })
            },
            set: function(e, n, r) {
                var i, o = qe(e),
                    a = !h.scrollboxSize() && "absolute" === o.position,
                    s = (a || r) && "border-box" === _.css(e, "boxSizing", !1, o),
                    l = r ? Ke(e, t, r, s, o) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ke(e, t, "border", !1, o) - .5)), l && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = _.css(e, t)), Ge(0, n, l)
            }
        }
    }), _.cssHooks.marginLeft = Be(h.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        _.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (_.cssHooks[e + t].set = Ge)
    }), _.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = qe(e), i = t.length; a < i; a++) o[t[a]] = _.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), _.Tween = et, (et.prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (_.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.pos = t = this.options.duration ? _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !_.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, _.fx = et.prototype.init, _.fx.step = {};
    var tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function ot() {
        nt && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, _.fx.interval), _.fx.tick())
    }

    function at() {
        return e.setTimeout(function() {
            tt = void 0
        }), tt = Date.now()
    }

    function st(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ut(e, t, n) {
        var r, i, o = 0,
            a = ut.prefilters.length,
            s = _.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = tt || at(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
                return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(!0, {
                    specialEasing: {},
                    easing: _.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || at(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = _.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = _.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, u.opts.specialEasing); o < a; o++)
            if (r = ut.prefilters[o].call(u, e, c, u.opts)) return p(r.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
        return _.map(c, lt, u), p(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), _.fx.timer(_.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    _.Animation = _.extend(ut, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                p(e) ? (t = e, e = ["*"]) : e = e.match(R);
                for (var n, r = 0, i = e.length; r < i; r++)(ut.tweeners[n = e[r]] = ut.tweeners[n] || []).unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, l, u, c, f = "width" in t || "height" in t,
                    d = this,
                    h = {},
                    p = e.style,
                    g = e.nodeType && ae(e),
                    m = J.get(e, "fxshow");
                for (r in n.queue || (null == (a = _._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s()
                    }), a.unqueued++, d.always(function() {
                        d.always(function() {
                            a.unqueued--, _.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                    if (rt.test(i = t[r])) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r]) continue;
                            g = !0
                        }
                        h[r] = m && m[r] || _.style(e, r)
                    }
                if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(h))
                    for (r in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = J.get(e, "display")), "none" === (c = _.css(e, "display")) && (u ? c = u : (ce([e], !0), u = e.style.display || u, c = _.css(e, "display"), ce([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === _.css(e, "float") && (l || (d.done(function() {
                            p.display = u
                        }), null == u && (u = "none" === (c = p.display) ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", {
                        display: u
                    }), o && (m.hidden = !g), g && ce([e], !0), d.done(function() {
                        for (r in g || ce([e]), J.remove(e, "fxshow"), h) _.style(e, r, h[r])
                    })), l = lt(g ? m[r] : 0, r, d), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(e, t) {
                t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
            }
        }), _.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? _.extend({}, e) : {
                complete: n || !n && t || p(e) && e,
                duration: e,
                easing: n && t || t && !p(t) && t
            };
            return _.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration = r.duration in _.fx.speeds ? _.fx.speeds[r.duration] : _.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                p(r.old) && r.old.call(this), r.queue && _.dequeue(this, r.queue)
            }, r
        }, _.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = _.isEmptyObject(e),
                    o = _.speed(t, n, r),
                    a = function() {
                        var t = ut(this, _.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = _.timers,
                        a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && it.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || _.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = J.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = _.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, _.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), _.each(["toggle", "show", "hide"], function(e, t) {
            var n = _.fn[t];
            _.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, r, i)
            }
        }), _.each({
            slideDown: st("show"),
            slideUp: st("hide"),
            slideToggle: st("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            _.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), _.timers = [], _.fx.tick = function() {
            var e, t = 0,
                n = _.timers;
            for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || _.fx.stop(), tt = void 0
        }, _.fx.timer = function(e) {
            _.timers.push(e), _.fx.start()
        }, _.fx.interval = 13, _.fx.start = function() {
            nt || (nt = !0, ot())
        }, _.fx.stop = function() {
            nt = null
        }, _.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, _.fn.delay = function(t, n) {
            return t = _.fx && _.fx.speeds[t] || t, this.queue(n = n || "fx", function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = m.createElement("input"),
                t = m.createElement("select").appendChild(m.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = m.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var ct, ft = _.expr.attrHandle;
    _.fn.extend({
        attr: function(e, t) {
            return B(this, _.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (i = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = _.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(R);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), ct = {
        set: function(e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ft[t] || _.find.attr;
        ft[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ft[a], ft[a] = i, i = null != n(e, t, r) ? a : null, ft[a] = o), i
        }
    });
    var dt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;

    function pt(e) {
        return (e.match(R) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    _.fn.extend({
        prop: function(e, t) {
            return B(this, _.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (i = _.propHooks[t = _.propFix[t] || t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (_.propHooks.selected = {
        get: function(e) {
            return null
        },
        set: function(e) {}
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (p(e)) return this.each(function(t) {
                _(this).addClass(e.call(this, t, gt(this)))
            });
            if ((t = mt(e)).length)
                for (; n = this[l++];)
                    if (i = gt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = pt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (p(e)) return this.each(function(t) {
                _(this).removeClass(e.call(this, t, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = mt(e)).length)
                for (; n = this[l++];)
                    if (i = gt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = pt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : p(e) ? this.each(function(n) {
                _(this).toggleClass(e.call(this, n, gt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r)
                    for (i = 0, o = _(this), a = mt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = gt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + pt(gt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    _.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = p(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, _(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = _.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = _.valHooks[i.type] || _.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : pt(_.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : i.length;
                    for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                            if (t = _(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = _.makeArray(t), a = i.length; a--;)((r = i[a]).selected = _.inArray(_.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1
            }
        }, h.checkOn || (_.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function(e) {
            e.stopPropagation()
        };
    _.extend(_.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, l, u, f, d, h, v = [r || m],
                y = c.call(t, "type") ? t.type : t,
                b = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = h = s = r = r || m, 3 !== r.nodeType && 8 !== r.nodeType && !yt.test(y + _.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[_.expando] ? t : new _.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : _.makeArray(n, [t]), d = _.event.special[y] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!i && !d.noBubble && !g(r)) {
                    for (yt.test((l = d.delegateType || y) + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), s = a;
                    s === (r.ownerDocument || m) && v.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = v[o++]) && !t.isPropagationStopped();) h = a, t.type = o > 1 ? l : d.bindType || y, (f = (J.get(a, "events") || Object.create(null))[t.type] && J.get(a, "handle")) && f.apply(a, n), (f = u && a[u]) && f.apply && z(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !z(r) || u && p(r[y]) && !g(r) && ((s = r[u]) && (r[u] = null), _.event.triggered = y, t.isPropagationStopped() && h.addEventListener(y, bt), r[y](), t.isPropagationStopped() && h.removeEventListener(y, bt), _.event.triggered = void 0, s && (r[u] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = _.extend(new _.Event, n, {
                type: e,
                isSimulated: !0
            });
            _.event.trigger(r, null, t)
        }
    }), _.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                _.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return _.event.trigger(e, t, n, !0)
        }
    }), h.focusin || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            _.event.simulate(t, e.target, _.event.fix(e))
        };
        _.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var xt = e.location,
        _t = {
            guid: Date.now()
        },
        wt = /\?/;
    _.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {}
        return r = n && n.getElementsByTagName("parsererror")[0], n && !r || _.error("Invalid XML: " + (r ? _.map(r.childNodes, function(e) {
            return e.textContent
        }).join("\n") : t)), n
    };
    var Tt = /\[\]$/,
        St = /\r?\n/g,
        Ct = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;

    function Et(e, t, n, r) {
        var i;
        if (Array.isArray(t)) _.each(t, function(t, i) {
            n || Tt.test(e) ? r(e, i) : Et(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== b(t)) r(e, t);
        else
            for (i in t) Et(e + "[" + i + "]", t[i], n, r)
    }
    _.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = p(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Et(n, e[n], t, i);
        return r.join("&")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && Dt.test(this.nodeName) && !Ct.test(e) && (this.checked || !he.test(e))
            }).map(function(e, t) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    });
    var At = /%20/g,
        kt = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        Pt = {},
        Rt = {},
        Ot = "*/".concat("*"),
        Ft = m.createElement("a");

    function qt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(R) || [];
            if (p(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Ht(e, t, n, r) {
        var i = {},
            o = e === Rt;

        function a(s) {
            var l;
            return i[s] = !0, _.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
            }), l
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function Mt(e, t) {
        var n, r, i = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && _.extend(!0, e, r), e
    }
    Ft.href = xt.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ot,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Mt(Mt(e, _.ajaxSettings), t) : Mt(_.ajaxSettings, e)
        },
        ajaxPrefilter: qt(Pt),
        ajaxTransport: qt(Rt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0);
            var r, i, o, a, s, l, u, c, f, d, h = _.ajaxSetup({}, n = n || {}),
                p = h.context || h,
                g = h.context && (p.nodeType || p.jquery) ? _(p) : _.event,
                v = _.Deferred(),
                y = _.Callbacks("once memory"),
                b = h.statusCode || {},
                x = {},
                w = {},
                T = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = jt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) S.always(e[S.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t), C(0, t), this
                    }
                };
            if (v.promise(S), h.url = ((t || h.url || xt.href) + "").replace(Lt, xt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
                } catch (D) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = _.param(h.data, h.traditional)), Ht(Pt, h, n, S), u) return S;
            for (f in (c = _.event && h.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), i = h.url.replace(kt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (d = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (wt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Nt, "$1"), d = (wt.test(i) ? "&" : "?") + "_=" + _t.guid++ + d), h.url = i + d), h.ifModified && (_.lastModified[i] && S.setRequestHeader("If-Modified-Since", _.lastModified[i]), _.etag[i] && S.setRequestHeader("If-None-Match", _.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : h.accepts["*"]), h.headers) S.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(p, S, h) || u)) return S.abort();
            if (T = "abort", y.add(h.complete), S.done(h.success), S.fail(h.error), r = Ht(Rt, h, n, S)) {
                if (S.readyState = 1, c && g.trigger("ajaxSend", [S, h]), u) return S;
                h.async && h.timeout > 0 && (s = e.setTimeout(function() {
                    S.abort("timeout")
                }, h.timeout));
                try {
                    u = !1, r.send(x, C)
                } catch (D) {
                    if (u) throw D;
                    C(-1, D)
                }
            } else C(-1, "No Transport");

            function C(t, n, a, l) {
                var f, d, m, x, w, T = n;
                u || (u = !0, s && e.clearTimeout(s), r = void 0, o = l || "", S.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, a && (x = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(h, S, a)), !f && _.inArray("script", h.dataTypes) > -1 && _.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), x = function(e, t, n, r) {
                    var i, o, a, s, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = u[l + " " + o] || u["* " + o]))
                            for (i in u)
                                if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (D) {
                                return {
                                    state: "parsererror",
                                    error: a ? D : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, x, S, f), f ? (h.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (_.lastModified[i] = w), (w = S.getResponseHeader("etag")) && (_.etag[i] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, d = x.data, f = !(m = x.error))) : (m = T, !t && T || (T = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || T) + "", f ? v.resolveWith(p, [d, T, S]) : v.rejectWith(p, [S, T, m]), S.statusCode(b), b = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [S, h, f ? d : m]), y.fireWith(p, [S, T]), c && (g.trigger("ajaxComplete", [S, h]), --_.active || _.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return _.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function(e, t) {
        _[t] = function(e, n, r, i) {
            return p(n) && (i = i || r, r = n, n = void 0), _.ajax(_.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, _.isPlainObject(e) && e))
        }
    }), _.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), _._evalUrl = function(e, t, n) {
        return _.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                _.globalEval(e, t, n)
            }
        })
    }, _.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (p(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return p(e) ? this.each(function(t) {
                _(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = _(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p(e);
            return this.each(function(n) {
                _(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function(e) {
        return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Wt = {
            0: 200,
            1223: 204
        },
        Bt = _.ajaxSettings.xhr();
    h.cors = !!Bt && "withCredentials" in Bt, h.ajax = Bt = !!Bt, _.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Bt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), _.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, i) {
                t = _("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), m.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Ut, $t = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || _.expando + "_" + _t.guid++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Xt, "$1" + i) : !1 !== t.jsonp && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || _.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? _(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, $t.push(i)), a && p(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = ((Ut = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), _.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((r = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t.head.appendChild(r)) : t = m), o = !n && [], (i = A.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && _(o).remove(), _.merge([], i.childNodes)));
        var r, i, o
    }, _.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = pt(e.slice(s)), e = e.slice(0, s)), p(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && _.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? _("<div>").append(_.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, _.expr.pseudos.animated = function(e) {
        return _.grep(_.timers, function(t) {
            return e === t.elem
        }).length
    }, _.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u = _.css(e, "position"),
                c = _(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), p(t) && (t = t.call(e, n, _.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, _.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                _.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? {
                top: (t = r.getBoundingClientRect()).top + (n = r.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset
            } : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === _.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = _(e).offset()).top += _.css(e, "borderTopWidth", !0), i.left += _.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - _.css(r, "marginTop", !0),
                    left: t.left - i.left - _.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        _.fn[e] = function(r) {
            return B(this, function(e, r, i) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), _.each(["top", "left"], function(e, t) {
        _.cssHooks[t] = Be(h.pixelPosition, function(e, n) {
            if (n) return n = We(e, t), Fe.test(n) ? _(e).position()[t] + "px" : n
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        _.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            _.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return B(this, function(t, n, i) {
                    var o;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? _.css(t, n, s) : _.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        _.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), _.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        _.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    _.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), p(e)) return r = i.call(arguments, 2), (o = function() {
            return e.apply(t || this, r.concat(i.call(arguments)))
        }).guid = e.guid = e.guid || _.guid++, o
    }, _.holdReady = function(e) {
        e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = E, _.isFunction = p, _.isWindow = g, _.camelCase = V, _.type = b, _.now = Date.now, _.isNumeric = function(e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, _.trim = function(e) {
        return null == e ? "" : (e + "").replace(Vt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var zt = e.jQuery,
        Qt = e.$;
    return _.noConflict = function(t) {
        return e.$ === _ && (e.$ = Qt), t && e.jQuery === _ && (e.jQuery = zt), _
    }, void 0 === t && (e.jQuery = e.$ = _), _
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return e(t, window, document)
    }) : "object" == typeof exports ? module.exports = function(t, n) {
        return t || (t = window), n || (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n, t, t.document)
    } : e(jQuery, window, document)
}(function(e, t, n, r) {
    "use strict";
    var i, o, a, s, l = function(t) {
            this.$ = function(e, t) {
                return this.api(!0).$(e, t)
            }, this._ = function(e, t) {
                return this.api(!0).rows(e, t).data()
            }, this.api = function(e) {
                return new o(e ? at(this[i.iApiIndex]) : this)
            }, this.fnAddData = function(t, n) {
                var i = this.api(!0),
                    o = Array.isArray(t) && (Array.isArray(t[0]) || e.isPlainObject(t[0])) ? i.rows.add(t) : i.row.add(t);
                return (n === r || n) && i.draw(), o.flatten().toArray()
            }, this.fnAdjustColumnSizing = function(e) {
                var t = this.api(!0).columns.adjust(),
                    n = t.settings()[0],
                    i = n.oScroll;
                e === r || e ? t.draw(!1) : "" === i.sX && "" === i.sY || Be(n)
            }, this.fnClearTable = function(e) {
                var t = this.api(!0).clear();
                (e === r || e) && t.draw()
            }, this.fnClose = function(e) {
                this.api(!0).row(e).child.hide()
            }, this.fnDeleteRow = function(e, t, n) {
                var i = this.api(!0),
                    o = i.rows(e),
                    a = o.settings()[0],
                    s = a.aoData[o[0][0]];
                return o.remove(), t && t.call(this, a, s), (n === r || n) && i.draw(), s
            }, this.fnDestroy = function(e) {
                this.api(!0).destroy(e)
            }, this.fnDraw = function(e) {
                this.api(!0).draw(e)
            }, this.fnFilter = function(e, t, n, i, o, a) {
                var s = this.api(!0);
                null === t || t === r ? s.search(e, n, i, a) : s.column(t).search(e, n, i, a), s.draw()
            }, this.fnGetData = function(e, t) {
                var n = this.api(!0);
                if (e !== r) {
                    var i = e.nodeName ? e.nodeName.toLowerCase() : "";
                    return t !== r || "td" == i || "th" == i ? n.cell(e, t).data() : n.row(e).data() || null
                }
                return n.data().toArray()
            }, this.fnGetNodes = function(e) {
                var t = this.api(!0);
                return e !== r ? t.row(e).node() : t.rows().nodes().flatten().toArray()
            }, this.fnGetPosition = function(e) {
                var t = this.api(!0),
                    n = e.nodeName.toUpperCase();
                if ("TR" == n) return t.row(e).index();
                if ("TD" == n || "TH" == n) {
                    var r = t.cell(e).index();
                    return [r.row, r.columnVisible, r.column]
                }
                return null
            }, this.fnIsOpen = function(e) {
                return this.api(!0).row(e).child.isShown()
            }, this.fnOpen = function(e, t, n) {
                return this.api(!0).row(e).child(t, n).show().child()[0]
            }, this.fnPageChange = function(e, t) {
                var n = this.api(!0).page(e);
                (t === r || t) && n.draw(!1)
            }, this.fnSetColumnVis = function(e, t, n) {
                var i = this.api(!0).column(e).visible(t);
                (n === r || n) && i.columns.adjust().draw()
            }, this.fnSettings = function() {
                return at(this[i.iApiIndex])
            }, this.fnSort = function(e) {
                this.api(!0).order(e).draw()
            }, this.fnSortListener = function(e, t, n) {
                this.api(!0).order.listener(e, t, n)
            }, this.fnUpdate = function(e, t, n, i, o) {
                var a = this.api(!0);
                return n === r || null === n ? a.row(t).data(e) : a.cell(t, n).data(e), (o === r || o) && a.columns.adjust(), (i === r || i) && a.draw(), 0
            }, this.fnVersionCheck = i.fnVersionCheck;
            var n = this,
                a = t === r,
                s = this.length;
            for (var u in a && (t = {}), this.oApi = this.internal = i.internal, l.ext.internal) u && (this[u] = Rt(u));
            return this.each(function() {
                var i, o = s > 1 ? ut({}, t, !0) : t,
                    u = 0,
                    c = this.getAttribute("id"),
                    f = !1,
                    d = l.defaults,
                    h = e(this);
                if ("table" == this.nodeName.toLowerCase()) {
                    j(d), I(d.column), A(d, d, !0), A(d.column, d.column, !0), A(d, e.extend(o, h.data()), !0);
                    var p = l.settings;
                    for (u = 0, i = p.length; u < i; u++) {
                        var g = p[u];
                        if (g.nTable == this || g.nTHead && g.nTHead.parentNode == this || g.nTFoot && g.nTFoot.parentNode == this) {
                            if (a || (o.bRetrieve !== r ? o.bRetrieve : d.bRetrieve)) return g.oInstance;
                            if (o.bDestroy !== r ? o.bDestroy : d.bDestroy) {
                                g.oInstance.fnDestroy();
                                break
                            }
                            return void st(g, 0, "Cannot reinitialise DataTable", 3)
                        }
                        if (g.sTableId == this.id) {
                            p.splice(u, 1);
                            break
                        }
                    }
                    null !== c && "" !== c || (c = "DataTables_Table_" + l.ext._unique++, this.id = c);
                    var m = e.extend(!0, {}, l.models.oSettings, {
                        sDestroyWidth: h[0].style.width,
                        sInstance: c,
                        sTableId: c
                    });
                    m.nTable = this, m.oApi = n.internal, m.oInit = o, p.push(m), m.oInstance = 1 === n.length ? n : h.dataTable(), j(o), k(o.oLanguage), o.aLengthMenu && !o.iDisplayLength && (o.iDisplayLength = Array.isArray(o.aLengthMenu[0]) ? o.aLengthMenu[0][0] : o.aLengthMenu[0]), o = ut(e.extend(!0, {}, d), o), lt(m.oFeatures, o, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), lt(m, o, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"]
                    ]), lt(m.oScroll, o, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]), lt(m.oLanguage, o, "fnInfoCallback"), ft(m, "aoDrawCallback", o.fnDrawCallback, "user"), ft(m, "aoServerParams", o.fnServerParams, "user"), ft(m, "aoStateSaveParams", o.fnStateSaveParams, "user"), ft(m, "aoStateLoadParams", o.fnStateLoadParams, "user"), ft(m, "aoStateLoaded", o.fnStateLoaded, "user"), ft(m, "aoRowCallback", o.fnRowCallback, "user"), ft(m, "aoRowCreatedCallback", o.fnCreatedRow, "user"), ft(m, "aoHeaderCallback", o.fnHeaderCallback, "user"), ft(m, "aoFooterCallback", o.fnFooterCallback, "user"), ft(m, "aoInitComplete", o.fnInitComplete, "user"), ft(m, "aoPreDrawCallback", o.fnPreDrawCallback, "user"), m.rowIdFn = G(o.rowId), L(m);
                    var v = m.oClasses;
                    if (e.extend(v, l.ext.classes, o.oClasses), h.addClass(v.sTable), m.iInitDisplayStart === r && (m.iInitDisplayStart = o.iDisplayStart, m._iDisplayStart = o.iDisplayStart), null !== o.iDeferLoading) {
                        m.bDeferLoading = !0;
                        var y = Array.isArray(o.iDeferLoading);
                        m._iRecordsDisplay = y ? o.iDeferLoading[0] : o.iDeferLoading, m._iRecordsTotal = y ? o.iDeferLoading[1] : o.iDeferLoading
                    }
                    var b = m.oLanguage;
                    e.extend(!0, b, o.oLanguage), b.sUrl ? (e.ajax({
                        dataType: "json",
                        url: b.sUrl,
                        success: function(t) {
                            k(t), A(d.oLanguage, t), e.extend(!0, b, t), dt(m, null, "i18n", [m]), Le(m)
                        },
                        error: function() {
                            Le(m)
                        }
                    }), f = !0) : dt(m, null, "i18n", [m]), null === o.asStripeClasses && (m.asStripeClasses = [v.sStripeOdd, v.sStripeEven]);
                    var x = m.asStripeClasses,
                        _ = h.children("tbody").find("tr").eq(0); - 1 !== e.inArray(!0, e.map(x, function(e, t) {
                        return _.hasClass(e)
                    })) && (e("tbody tr", this).removeClass(x.join(" ")), m.asDestroyStripes = x.slice());
                    var w, T = [],
                        S = this.getElementsByTagName("thead");
                    if (0 !== S.length && (fe(m.aoHeader, S[0]), T = de(m)), null === o.aoColumns)
                        for (w = [], u = 0, i = T.length; u < i; u++) w.push(null);
                    else w = o.aoColumns;
                    for (u = 0, i = w.length; u < i; u++) R(m, T ? T[u] : null);
                    if (U(m, o.aoColumnDefs, w, function(e, t) {
                            O(m, e, t)
                        }), _.length) {
                        var C = function(e, t) {
                            return null !== e.getAttribute("data-" + t) ? t : null
                        };
                        e(_[0]).children("th, td").each(function(e, t) {
                            var n = m.aoColumns[e];
                            if (n.mData === e) {
                                var i = C(t, "sort") || C(t, "order"),
                                    o = C(t, "filter") || C(t, "search");
                                null === i && null === o || (n.mData = {
                                    _: e + ".display",
                                    sort: null !== i ? e + ".@data-" + i : r,
                                    type: null !== i ? e + ".@data-" + i : r,
                                    filter: null !== o ? e + ".@data-" + o : r
                                }, O(m, e))
                            }
                        })
                    }
                    var D = m.oFeatures,
                        E = function() {
                            if (o.aaSorting === r) {
                                var t = m.aaSorting;
                                for (u = 0, i = t.length; u < i; u++) t[u][1] = m.aoColumns[u].asSorting[0]
                            }
                            nt(m), D.bSort && ft(m, "aoDrawCallback", function() {
                                if (m.bSorted) {
                                    var t = Ge(m),
                                        n = {};
                                    e.each(t, function(e, t) {
                                        n[t.src] = t.dir
                                    }), dt(m, null, "order", [m, t, n]), Ze(m)
                                }
                            }), ft(m, "aoDrawCallback", function() {
                                (m.bSorted || "ssp" === gt(m) || D.bDeferRender) && nt(m)
                            }, "sc");
                            var n = h.children("caption").each(function() {
                                    this._captionSide = e(this).css("caption-side")
                                }),
                                a = h.children("thead");
                            0 === a.length && (a = e("<thead/>").appendTo(h)), m.nTHead = a[0];
                            var s = h.children("tbody");
                            0 === s.length && (s = e("<tbody/>").appendTo(h)), m.nTBody = s[0];
                            var l = h.children("tfoot");
                            if (0 === l.length && n.length > 0 && ("" !== m.oScroll.sX || "" !== m.oScroll.sY) && (l = e("<tfoot/>").appendTo(h)), 0 === l.length || 0 === l.children().length ? h.addClass(v.sNoFooter) : l.length > 0 && (m.nTFoot = l[0], fe(m.aoFooter, m.nTFoot)), o.aaData)
                                for (u = 0; u < o.aaData.length; u++) $(m, o.aaData[u]);
                            else(m.bDeferLoading || "dom" == gt(m)) && X(m, e(m.nTBody).children("tr"));
                            m.aiDisplay = m.aiDisplayMaster.slice(), m.bInitialised = !0, !1 === f && Le(m)
                        };
                    o.bStateSave ? (D.bStateSave = !0, ft(m, "aoDrawCallback", it, "state_save"), ot(m, 0, E)) : E()
                } else st(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2)
            }), n = null, this
        },
        u = {},
        c = /[\r\n\u2028]/g,
        f = /<.*?>/g,
        d = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        h = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
        p = /['\u00A0,$\xa3\u20ac\xa5%\u2009\u202F\u20BD\u20a9\u20BArfk\u0243\u039e]/gi,
        g = function(e) {
            return !e || !0 === e || "-" === e
        },
        m = function(e) {
            var t = parseInt(e, 10);
            return !isNaN(t) && isFinite(e) ? t : null
        },
        v = function(e, t) {
            return u[t] || (u[t] = new RegExp(Se(t), "g")), "string" == typeof e && "." !== t ? e.replace(/\./g, "").replace(u[t], ".") : e
        },
        y = function(e, t, n) {
            var r = "string" == typeof e;
            return !!g(e) || (t && r && (e = v(e, t)), n && r && (e = e.replace(p, "")), !isNaN(parseFloat(e)) && isFinite(e))
        },
        b = function(e, t, n) {
            return !!g(e) || function(e) {
                return g(e) || "string" == typeof e
            }(e) && !!y(S(e), t, n) || null
        },
        x = function(e, t, n) {
            var i = [],
                o = 0,
                a = e.length;
            if (n !== r)
                for (; o < a; o++) e[o] && e[o][t] && i.push(e[o][t][n]);
            else
                for (; o < a; o++) e[o] && i.push(e[o][t]);
            return i
        },
        _ = function(e, t, n, i) {
            var o = [],
                a = 0,
                s = t.length;
            if (i !== r)
                for (; a < s; a++) e[t[a]][n] && o.push(e[t[a]][n][i]);
            else
                for (; a < s; a++) o.push(e[t[a]][n]);
            return o
        },
        w = function(e, t) {
            var n, i = [];
            t === r ? (t = 0, n = e) : (n = t, t = e);
            for (var o = t; o < n; o++) i.push(o);
            return i
        },
        T = function(e) {
            for (var t = [], n = 0, r = e.length; n < r; n++) e[n] && t.push(e[n]);
            return t
        },
        S = function(e) {
            return e.replace(f, "")
        },
        C = function(e) {
            if (function(e) {
                    if (e.length < 2) return !0;
                    for (var t = e.slice().sort(), n = t[0], r = 1, i = t.length; r < i; r++) {
                        if (t[r] === n) return !1;
                        n = t[r]
                    }
                    return !0
                }(e)) return e.slice();
            var t, n, r, i = [],
                o = e.length,
                a = 0;
            e: for (n = 0; n < o; n++) {
                for (t = e[n], r = 0; r < a; r++)
                    if (i[r] === t) continue e;
                i.push(t), a++
            }
            return i
        },
        D = function(e, t) {
            if (Array.isArray(t))
                for (var n = 0; n < t.length; n++) D(e, t[n]);
            else e.push(t);
            return e
        };

    function E(t) {
        var n, r, i = {};
        e.each(t, function(e, o) {
            (n = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && (r = e.replace(n[0], n[2].toLowerCase()), i[r] = e, "o" === n[1] && E(t[e]))
        }), t._hungarianMap = i
    }

    function A(t, n, i) {
        var o;
        t._hungarianMap || E(t), e.each(n, function(a, s) {
            (o = t._hungarianMap[a]) === r || !i && n[o] !== r || ("o" === o.charAt(0) ? (n[o] || (n[o] = {}), e.extend(!0, n[o], n[a]), A(t[o], n[o], i)) : n[o] = n[a])
        })
    }

    function k(e) {
        var t = l.defaults.oLanguage,
            n = t.sDecimal;
        if (n && Lt(n), e) {
            var r = e.sZeroRecords;
            !e.sEmptyTable && r && "No data available in table" === t.sEmptyTable && lt(e, e, "sZeroRecords", "sEmptyTable"), !e.sLoadingRecords && r && "Loading..." === t.sLoadingRecords && lt(e, e, "sZeroRecords", "sLoadingRecords"), e.sInfoThousands && (e.sThousands = e.sInfoThousands);
            var i = e.sDecimal;
            i && n !== i && Lt(i)
        }
    }
    Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }), String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }), l.util = {
        throttle: function(e, t) {
            var n, i, o = t !== r ? t : 200;
            return function() {
                var t = this,
                    a = +new Date,
                    s = arguments;
                n && a < n + o ? (clearTimeout(i), i = setTimeout(function() {
                    n = r, e.apply(t, s)
                }, o)) : (n = a, e.apply(t, s))
            }
        },
        escapeRegex: function(e) {
            return e.replace(h, "\\$1")
        }
    };
    var N = function(e, t, n) {
        e[t] !== r && (e[n] = e[t])
    };

    function j(e) {
        N(e, "ordering", "bSort"), N(e, "orderMulti", "bSortMulti"), N(e, "orderClasses", "bSortClasses"), N(e, "orderCellsTop", "bSortCellsTop"), N(e, "order", "aaSorting"), N(e, "orderFixed", "aaSortingFixed"), N(e, "paging", "bPaginate"), N(e, "pagingType", "sPaginationType"), N(e, "pageLength", "iDisplayLength"), N(e, "searching", "bFilter"), "boolean" == typeof e.sScrollX && (e.sScrollX = e.sScrollX ? "100%" : ""), "boolean" == typeof e.scrollX && (e.scrollX = e.scrollX ? "100%" : "");
        var t = e.aoSearchCols;
        if (t)
            for (var n = 0, r = t.length; n < r; n++) t[n] && A(l.models.oSearch, t[n])
    }

    function I(e) {
        N(e, "orderable", "bSortable"), N(e, "orderData", "aDataSort"), N(e, "orderSequence", "asSorting"), N(e, "orderDataType", "sortDataType");
        var t = e.aDataSort;
        "number" != typeof t || Array.isArray(t) || (e.aDataSort = [t])
    }

    function L(n) {
        if (!l.__browser) {
            var r = {};
            l.__browser = r;
            var i = e("<div/>").css({
                    position: "fixed",
                    top: 0,
                    left: -1 * e(t).scrollLeft(),
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(e("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(e("<div/>").css({
                    width: "100%",
                    height: 10
                }))).appendTo("body"),
                o = i.children(),
                a = o.children();
            r.barWidth = o[0].offsetWidth - o[0].clientWidth, r.bScrollOversize = 100 === a[0].offsetWidth && 100 !== o[0].clientWidth, r.bScrollbarLeft = 1 !== Math.round(a.offset().left), r.bBounding = !!i[0].getBoundingClientRect().width, i.remove()
        }
        e.extend(n.oBrowser, l.__browser), n.oScroll.iBarWidth = l.__browser.barWidth
    }

    function P(e, t, n, i, o, a) {
        var s, l = i,
            u = !1;
        for (n !== r && (s = n, u = !0); l !== o;) e.hasOwnProperty(l) && (s = u ? t(s, e[l], l, e) : e[l], u = !0, l += a);
        return s
    }

    function R(t, r) {
        var i = l.defaults.column,
            o = t.aoColumns.length,
            a = e.extend({}, l.models.oColumn, i, {
                nTh: r || n.createElement("th"),
                sTitle: i.sTitle ? i.sTitle : r ? r.innerHTML : "",
                aDataSort: i.aDataSort ? i.aDataSort : [o],
                mData: i.mData ? i.mData : o,
                idx: o
            });
        t.aoColumns.push(a);
        var s = t.aoPreSearchCols;
        s[o] = e.extend({}, l.models.oSearch, s[o]), O(t, o, e(r).data())
    }

    function O(t, n, i) {
        var o = t.aoColumns[n],
            a = t.oClasses,
            s = e(o.nTh);
        if (!o.sWidthOrig) {
            o.sWidthOrig = s.attr("width") || null;
            var u = (s.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            u && (o.sWidthOrig = u[1])
        }
        i !== r && null !== i && (I(i), A(l.defaults.column, i, !0), i.mDataProp === r || i.mData || (i.mData = i.mDataProp), i.sType && (o._sManualType = i.sType), i.className && !i.sClass && (i.sClass = i.className), i.sClass && s.addClass(i.sClass), e.extend(o, i), lt(o, i, "sWidth", "sWidthOrig"), i.iDataSort !== r && (o.aDataSort = [i.iDataSort]), lt(o, i, "aDataSort"));
        var c = o.mData,
            f = G(c),
            d = o.mRender ? G(o.mRender) : null,
            h = function(e) {
                return "string" == typeof e && -1 !== e.indexOf("@")
            };
        o._bAttrSrc = e.isPlainObject(c) && (h(c.sort) || h(c.type) || h(c.filter)), o._setter = null, o.fnGetData = function(e, t, n) {
            var i = f(e, t, r, n);
            return d && t ? d(i, t, e, n) : i
        }, o.fnSetData = function(e, t, n) {
            return K(c)(e, t, n)
        }, "number" != typeof c && (t._rowReadObject = !0), t.oFeatures.bSort || (o.bSortable = !1, s.addClass(a.sSortableNone));
        var p = -1 !== e.inArray("asc", o.asSorting),
            g = -1 !== e.inArray("desc", o.asSorting);
        o.bSortable && (p || g) ? p && !g ? (o.sSortingClass = a.sSortableAsc, o.sSortingClassJUI = a.sSortJUIAscAllowed) : !p && g ? (o.sSortingClass = a.sSortableDesc, o.sSortingClassJUI = a.sSortJUIDescAllowed) : (o.sSortingClass = a.sSortable, o.sSortingClassJUI = a.sSortJUI) : (o.sSortingClass = a.sSortableNone, o.sSortingClassJUI = "")
    }

    function F(e) {
        if (!1 !== e.oFeatures.bAutoWidth) {
            var t = e.aoColumns;
            Xe(e);
            for (var n = 0, r = t.length; n < r; n++) t[n].nTh.style.width = t[n].sWidth
        }
        var i = e.oScroll;
        "" === i.sY && "" === i.sX || Be(e), dt(e, null, "column-sizing", [e])
    }

    function q(e, t) {
        var n = W(e, "bVisible");
        return "number" == typeof n[t] ? n[t] : null
    }

    function H(t, n) {
        var r = W(t, "bVisible"),
            i = e.inArray(n, r);
        return -1 !== i ? i : null
    }

    function M(t) {
        var n = 0;
        return e.each(t.aoColumns, function(t, r) {
            r.bVisible && "none" !== e(r.nTh).css("display") && n++
        }), n
    }

    function W(t, n) {
        var r = [];
        return e.map(t.aoColumns, function(e, t) {
            e[n] && r.push(t)
        }), r
    }

    function B(e) {
        var t, n, i, o, a, s, u, c, f, d = e.aoColumns,
            h = e.aoData,
            p = l.ext.type.detect;
        for (t = 0, n = d.length; t < n; t++)
            if (f = [], !(u = d[t]).sType && u._sManualType) u.sType = u._sManualType;
            else if (!u.sType) {
            for (i = 0, o = p.length; i < o; i++) {
                for (a = 0, s = h.length; a < s && (f[a] === r && (f[a] = V(e, a, t, "type")), (c = p[i](f[a], e)) || i === p.length - 1) && "html" !== c; a++);
                if (c) {
                    u.sType = c;
                    break
                }
            }
            u.sType || (u.sType = "string")
        }
    }

    function U(t, n, i, o) {
        var a, s, l, u, c, f, d, h = t.aoColumns;
        if (n)
            for (a = n.length - 1; a >= 0; a--) {
                var p = (d = n[a]).targets !== r ? d.targets : d.aTargets;
                for (Array.isArray(p) || (p = [p]), l = 0, u = p.length; l < u; l++)
                    if ("number" == typeof p[l] && p[l] >= 0) {
                        for (; h.length <= p[l];) R(t);
                        o(p[l], d)
                    } else if ("number" == typeof p[l] && p[l] < 0) o(h.length + p[l], d);
                else if ("string" == typeof p[l])
                    for (c = 0, f = h.length; c < f; c++)("_all" == p[l] || e(h[c].nTh).hasClass(p[l])) && o(c, d)
            }
        if (i)
            for (a = 0, s = i.length; a < s; a++) o(a, i[a])
    }

    function $(t, n, i, o) {
        var a = t.aoData.length,
            s = e.extend(!0, {}, l.models.oRow, {
                src: i ? "dom" : "data",
                idx: a
            });
        s._aData = n, t.aoData.push(s);
        for (var u = t.aoColumns, c = 0, f = u.length; c < f; c++) u[c].sType = null;
        t.aiDisplayMaster.push(a);
        var d = t.rowIdFn(n);
        return d !== r && (t.aIds[d] = s), !i && t.oFeatures.bDeferRender || ie(t, a, i, o), a
    }

    function X(t, n) {
        var r;
        return n instanceof e || (n = e(n)), n.map(function(e, n) {
            return r = re(t, n), $(t, r.data, n, r.cells)
        })
    }

    function V(e, t, n, i) {
        var o = e.iDraw,
            a = e.aoColumns[n],
            s = e.aoData[t]._aData,
            l = a.sDefaultContent,
            u = a.fnGetData(s, i, {
                settings: e,
                row: t,
                col: n
            });
        if (u === r) return e.iDrawError != o && null === l && (st(e, 0, "Requested unknown parameter " + ("function" == typeof a.mData ? "{function}" : "'" + a.mData + "'") + " for row " + t + ", column " + n, 4), e.iDrawError = o), l;
        if (u !== s && null !== u || null === l || i === r) {
            if ("function" == typeof u) return u.call(s)
        } else u = l;
        return null === u && "display" == i ? "" : u
    }

    function z(e, t, n, r) {
        e.aoColumns[n].fnSetData(e.aoData[t]._aData, r, {
            settings: e,
            row: t,
            col: n
        })
    }
    var Q = /\[.*?\]$/,
        J = /\(\)$/;

    function Y(t) {
        return e.map(t.match(/(\\.|[^\.])+/g) || [""], function(e) {
            return e.replace(/\\\./g, ".")
        })
    }

    function G(t) {
        if (e.isPlainObject(t)) {
            var n = {};
            return e.each(t, function(e, t) {
                    t && (n[e] = G(t))
                }),
                function(e, t, i, o) {
                    var a = n[t] || n._;
                    return a !== r ? a(e, t, i, o) : e
                }
        }
        if (null === t) return function(e) {
            return e
        };
        if ("function" == typeof t) return function(e, n, r, i) {
            return t(e, n, r, i)
        };
        if ("string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("(")) return function(e, n) {
            return e[t]
        };
        var i = function(e, t, n) {
            var o, a, s, l;
            if ("" !== n)
                for (var u = Y(n), c = 0, f = u.length; c < f; c++) {
                    if (o = u[c].match(Q), a = u[c].match(J), o) {
                        if (u[c] = u[c].replace(Q, ""), "" !== u[c] && (e = e[u[c]]), s = [], u.splice(0, c + 1), l = u.join("."), Array.isArray(e))
                            for (var d = 0, h = e.length; d < h; d++) s.push(i(e[d], t, l));
                        var p = o[0].substring(1, o[0].length - 1);
                        e = "" === p ? s : s.join(p);
                        break
                    }
                    if (a) u[c] = u[c].replace(J, ""), e = e[u[c]]();
                    else {
                        if (null === e || e[u[c]] === r) return r;
                        e = e[u[c]]
                    }
                }
            return e
        };
        return function(e, n) {
            return i(e, n, t)
        }
    }

    function K(t) {
        if (e.isPlainObject(t)) return K(t._);
        if (null === t) return function() {};
        if ("function" == typeof t) return function(e, n, r) {
            t(e, "set", n, r)
        };
        if ("string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("(")) return function(e, n) {
            e[t] = n
        };
        var n = function(e, t, i) {
            for (var o, a, s, l, u, c = Y(i), f = c[c.length - 1], d = 0, h = c.length - 1; d < h; d++) {
                if ("__proto__" === c[d] || "constructor" === c[d]) throw new Error("Cannot set prototype values");
                if (a = c[d].match(Q), s = c[d].match(J), a) {
                    if (c[d] = c[d].replace(Q, ""), e[c[d]] = [], (o = c.slice()).splice(0, d + 1), u = o.join("."), Array.isArray(t))
                        for (var p = 0, g = t.length; p < g; p++) n(l = {}, t[p], u), e[c[d]].push(l);
                    else e[c[d]] = t;
                    return
                }
                s && (c[d] = c[d].replace(J, ""), e = e[c[d]](t)), null !== e[c[d]] && e[c[d]] !== r || (e[c[d]] = {}), e = e[c[d]]
            }
            f.match(J) ? e = e[f.replace(J, "")](t) : e[f.replace(Q, "")] = t
        };
        return function(e, r) {
            return n(e, r, t)
        }
    }

    function Z(e) {
        return x(e.aoData, "_aData")
    }

    function ee(e) {
        e.aoData.length = 0, e.aiDisplayMaster.length = 0, e.aiDisplay.length = 0, e.aIds = {}
    }

    function te(e, t, n) {
        for (var i = -1, o = 0, a = e.length; o < a; o++) e[o] == t ? i = o : e[o] > t && e[o]--; - 1 != i && n === r && e.splice(i, 1)
    }

    function ne(e, t, n, i) {
        var o, a, s = e.aoData[t],
            l = function(n, r) {
                for (; n.childNodes.length;) n.removeChild(n.firstChild);
                n.innerHTML = V(e, t, r, "display")
            };
        if ("dom" !== n && (n && "auto" !== n || "dom" !== s.src)) {
            var u = s.anCells;
            if (u)
                if (i !== r) l(u[i], i);
                else
                    for (o = 0, a = u.length; o < a; o++) l(u[o], o)
        } else s._aData = re(e, s, i, i === r ? r : s._aData).data;
        s._aSortData = null, s._aFilterData = null;
        var c = e.aoColumns;
        if (i !== r) c[i].sType = null;
        else {
            for (o = 0, a = c.length; o < a; o++) c[o].sType = null;
            oe(e, s)
        }
    }

    function re(e, t, n, i) {
        var o, a, s, l = [],
            u = t.firstChild,
            c = 0,
            f = e.aoColumns,
            d = e._rowReadObject;
        i = i !== r ? i : d ? {} : [];
        var h = function(e, t) {
                if ("string" == typeof e) {
                    var n = e.indexOf("@");
                    if (-1 !== n) {
                        var r = e.substring(n + 1);
                        K(e)(i, t.getAttribute(r))
                    }
                }
            },
            p = function(e) {
                n !== r && n !== c || (a = f[c], s = e.innerHTML.trim(), a && a._bAttrSrc ? (K(a.mData._)(i, s), h(a.mData.sort, e), h(a.mData.type, e), h(a.mData.filter, e)) : d ? (a._setter || (a._setter = K(a.mData)), a._setter(i, s)) : i[c] = s), c++
            };
        if (u)
            for (; u;) "TD" != (o = u.nodeName.toUpperCase()) && "TH" != o || (p(u), l.push(u)), u = u.nextSibling;
        else
            for (var g = 0, m = (l = t.anCells).length; g < m; g++) p(l[g]);
        var v = t.firstChild ? t : t.nTr;
        if (v) {
            var y = v.getAttribute("id");
            y && K(e.rowId)(i, y)
        }
        return {
            data: i,
            cells: l
        }
    }

    function ie(t, r, i, o) {
        var a, s, l, u, c, f, d = t.aoData[r],
            h = d._aData,
            p = [];
        if (null === d.nTr) {
            for (a = i || n.createElement("tr"), d.nTr = a, d.anCells = p, a._DT_RowIndex = r, oe(t, d), u = 0, c = t.aoColumns.length; u < c; u++) l = t.aoColumns[u], (s = (f = !i) ? n.createElement(l.sCellType) : o[u])._DT_CellIndex = {
                row: r,
                column: u
            }, p.push(s), !f && (!l.mRender && l.mData === u || e.isPlainObject(l.mData) && l.mData._ === u + ".display") || (s.innerHTML = V(t, r, u, "display")), l.sClass && (s.className += " " + l.sClass), l.bVisible && !i ? a.appendChild(s) : !l.bVisible && i && s.parentNode.removeChild(s), l.fnCreatedCell && l.fnCreatedCell.call(t.oInstance, s, V(t, r, u), h, r, u);
            dt(t, "aoRowCreatedCallback", null, [a, h, r, p])
        }
    }

    function oe(t, n) {
        var r = n.nTr,
            i = n._aData;
        if (r) {
            var o = t.rowIdFn(i);
            if (o && (r.id = o), i.DT_RowClass) {
                var a = i.DT_RowClass.split(" ");
                n.__rowc = n.__rowc ? C(n.__rowc.concat(a)) : a, e(r).removeClass(n.__rowc.join(" ")).addClass(i.DT_RowClass)
            }
            i.DT_RowAttr && e(r).attr(i.DT_RowAttr), i.DT_RowData && e(r).data(i.DT_RowData)
        }
    }

    function ae(t) {
        var n, r, i, o, a, s = t.nTHead,
            l = t.nTFoot,
            u = 0 === e("th, td", s).length,
            c = t.oClasses,
            f = t.aoColumns;
        for (u && (o = e("<tr/>").appendTo(s)), n = 0, r = f.length; n < r; n++) i = e((a = f[n]).nTh).addClass(a.sClass), u && i.appendTo(o), t.oFeatures.bSort && (i.addClass(a.sSortingClass), !1 !== a.bSortable && (i.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId), tt(t, a.nTh, n))), a.sTitle != i[0].innerHTML && i.html(a.sTitle), pt(t, "header")(t, i, a, c);
        if (u && fe(t.aoHeader, s), e(s).children("tr").attr("role", "row"), e(s).children("tr").children("th, td").addClass(c.sHeaderTH), e(l).children("tr").children("th, td").addClass(c.sFooterTH), null !== l) {
            var d = t.aoFooter[0];
            for (n = 0, r = d.length; n < r; n++)(a = f[n]).nTf = d[n].cell, a.sClass && e(a.nTf).addClass(a.sClass)
        }
    }

    function se(t, n, i) {
        var o, a, s, l, u, c, f, d, h, p = [],
            g = [],
            m = t.aoColumns.length;
        if (n) {
            for (i === r && (i = !1), o = 0, a = n.length; o < a; o++) {
                for (p[o] = n[o].slice(), p[o].nTr = n[o].nTr, s = m - 1; s >= 0; s--) t.aoColumns[s].bVisible || i || p[o].splice(s, 1);
                g.push([])
            }
            for (o = 0, a = p.length; o < a; o++) {
                if (f = p[o].nTr)
                    for (; c = f.firstChild;) f.removeChild(c);
                for (s = 0, l = p[o].length; s < l; s++)
                    if (d = 1, h = 1, g[o][s] === r) {
                        for (f.appendChild(p[o][s].cell), g[o][s] = 1; p[o + d] !== r && p[o][s].cell == p[o + d][s].cell;) g[o + d][s] = 1, d++;
                        for (; p[o][s + h] !== r && p[o][s].cell == p[o][s + h].cell;) {
                            for (u = 0; u < d; u++) g[o + u][s + h] = 1;
                            h++
                        }
                        e(p[o][s].cell).attr("rowspan", d).attr("colspan", h)
                    }
            }
        }
    }

    function le(t) {
        var n = dt(t, "aoPreDrawCallback", "preDraw", [t]);
        if (-1 === e.inArray(!1, n)) {
            var i = [],
                o = 0,
                a = t.asStripeClasses,
                s = a.length,
                l = t.oLanguage,
                u = t.iInitDisplayStart,
                c = "ssp" == gt(t),
                f = t.aiDisplay;
            t.bDrawing = !0, u !== r && -1 !== u && (t._iDisplayStart = c ? u : u >= t.fnRecordsDisplay() ? 0 : u, t.iInitDisplayStart = -1);
            var d = t._iDisplayStart,
                h = t.fnDisplayEnd();
            if (t.bDeferLoading) t.bDeferLoading = !1, t.iDraw++, Me(t, !1);
            else if (c) {
                if (!t.bDestroying && !pe(t)) return
            } else t.iDraw++;
            if (0 !== f.length)
                for (var p = c ? t.aoData.length : h, g = c ? 0 : d; g < p; g++) {
                    var m = f[g],
                        v = t.aoData[m];
                    null === v.nTr && ie(t, m);
                    var y = v.nTr;
                    if (0 !== s) {
                        var b = a[o % s];
                        v._sRowStripe != b && (e(y).removeClass(v._sRowStripe).addClass(b), v._sRowStripe = b)
                    }
                    dt(t, "aoRowCallback", null, [y, v._aData, o, g, m]), i.push(y), o++
                } else {
                    var x = l.sZeroRecords;
                    1 == t.iDraw && "ajax" == gt(t) ? x = l.sLoadingRecords : l.sEmptyTable && 0 === t.fnRecordsTotal() && (x = l.sEmptyTable), i[0] = e("<tr/>", {
                        class: s ? a[0] : ""
                    }).append(e("<td />", {
                        valign: "top",
                        colSpan: M(t),
                        class: t.oClasses.sRowEmpty
                    }).html(x))[0]
                }
            dt(t, "aoHeaderCallback", "header", [e(t.nTHead).children("tr")[0], Z(t), d, h, f]), dt(t, "aoFooterCallback", "footer", [e(t.nTFoot).children("tr")[0], Z(t), d, h, f]);
            var _ = e(t.nTBody);
            _.children().detach(), _.append(e(i)), dt(t, "aoDrawCallback", "draw", [t]), t.bSorted = !1, t.bFiltered = !1, t.bDrawing = !1
        } else Me(t, !1)
    }

    function ue(e, t) {
        var n = e.oFeatures,
            r = n.bFilter;
        n.bSort && Ke(e), r ? be(e, e.oPreviousSearch) : e.aiDisplay = e.aiDisplayMaster.slice(), !0 !== t && (e._iDisplayStart = 0), e._drawHold = t, le(e), e._drawHold = !1
    }

    function ce(t) {
        var n = t.oClasses,
            r = e(t.nTable),
            i = e("<div/>").insertBefore(r),
            o = t.oFeatures,
            a = e("<div/>", {
                id: t.sTableId + "_wrapper",
                class: n.sWrapper + (t.nTFoot ? "" : " " + n.sNoFooter)
            });
        t.nHolding = i[0], t.nTableWrapper = a[0], t.nTableReinsertBefore = t.nTable.nextSibling;
        for (var s, u, c, f, d, h, p = t.sDom.split(""), g = 0; g < p.length; g++) {
            if (s = null, "<" == (u = p[g])) {
                if (c = e("<div/>")[0], "'" == (f = p[g + 1]) || '"' == f) {
                    for (d = "", h = 2; p[g + h] != f;) d += p[g + h], h++;
                    if ("H" == d ? d = n.sJUIHeader : "F" == d && (d = n.sJUIFooter), -1 != d.indexOf(".")) {
                        var m = d.split(".");
                        c.id = m[0].substr(1, m[0].length - 1), c.className = m[1]
                    } else "#" == d.charAt(0) ? c.id = d.substr(1, d.length - 1) : c.className = d;
                    g += h
                }
                a.append(c), a = e(c)
            } else if (">" == u) a = a.parent();
            else if ("l" == u && o.bPaginate && o.bLengthChange) s = Oe(t);
            else if ("f" == u && o.bFilter) s = ye(t);
            else if ("r" == u && o.bProcessing) s = He(t);
            else if ("t" == u) s = We(t);
            else if ("i" == u && o.bInfo) s = Ne(t);
            else if ("p" == u && o.bPaginate) s = Fe(t);
            else if (0 !== l.ext.feature.length)
                for (var v = l.ext.feature, y = 0, b = v.length; y < b; y++)
                    if (u == v[y].cFeature) {
                        s = v[y].fnInit(t);
                        break
                    }
            if (s) {
                var x = t.aanFeatures;
                x[u] || (x[u] = []), x[u].push(s), a.append(s)
            }
        }
        i.replaceWith(a), t.nHolding = null
    }

    function fe(t, n) {
        var r, i, o, a, s, l, u, c, f, d, h = e(n).children("tr"),
            p = function(e, t, n) {
                for (var r = e[t]; r[n];) n++;
                return n
            };
        for (t.splice(0, t.length), o = 0, l = h.length; o < l; o++) t.push([]);
        for (o = 0, l = h.length; o < l; o++)
            for (i = (r = h[o]).firstChild; i;) {
                if ("TD" == i.nodeName.toUpperCase() || "TH" == i.nodeName.toUpperCase())
                    for (c = (c = 1 * i.getAttribute("colspan")) && 0 !== c && 1 !== c ? c : 1, f = (f = 1 * i.getAttribute("rowspan")) && 0 !== f && 1 !== f ? f : 1, u = p(t, o, 0), d = 1 === c, s = 0; s < c; s++)
                        for (a = 0; a < f; a++) t[o + a][u + s] = {
                            cell: i,
                            unique: d
                        }, t[o + a].nTr = r;
                i = i.nextSibling
            }
    }

    function de(e, t, n) {
        var r = [];
        n || (n = e.aoHeader, t && fe(n = [], t));
        for (var i = 0, o = n.length; i < o; i++)
            for (var a = 0, s = n[i].length; a < s; a++) !n[i][a].unique || r[a] && e.bSortCellsTop || (r[a] = n[i][a].cell);
        return r
    }

    function he(t, n, r) {
        if (dt(t, "aoServerParams", "serverParams", [n]), n && Array.isArray(n)) {
            var i = {},
                o = /(.*?)\[\]$/;
            e.each(n, function(e, t) {
                var n = t.name.match(o);
                if (n) {
                    var r = n[0];
                    i[r] || (i[r] = []), i[r].push(t.value)
                } else i[t.name] = t.value
            }), n = i
        }
        var a, s = t.ajax,
            l = t.oInstance,
            u = function(e) {
                dt(t, null, "xhr", [t, e, t.jqXHR]), r(e)
            };
        if (e.isPlainObject(s) && s.data) {
            var c = "function" == typeof(a = s.data) ? a(n, t) : a;
            n = "function" == typeof a && c ? c : e.extend(!0, n, c), delete s.data
        }
        var f = {
            data: n,
            success: function(e) {
                var n = e.error || e.sError;
                n && st(t, 0, n), t.json = e, u(e)
            },
            dataType: "json",
            cache: !1,
            type: t.sServerMethod,
            error: function(n, r, i) {
                var o = dt(t, null, "xhr", [t, null, t.jqXHR]); - 1 === e.inArray(!0, o) && ("parsererror" == r ? st(t, 0, "Invalid JSON response", 1) : 4 === n.readyState && st(t, 0, "Ajax error", 7)), Me(t, !1)
            }
        };
        t.oAjaxData = n, dt(t, null, "preXhr", [t, n]), t.fnServerData ? t.fnServerData.call(l, t.sAjaxSource, e.map(n, function(e, t) {
            return {
                name: t,
                value: e
            }
        }), u, t) : t.sAjaxSource || "string" == typeof s ? t.jqXHR = e.ajax(e.extend(f, {
            url: s || t.sAjaxSource
        })) : "function" == typeof s ? t.jqXHR = s.call(l, n, u, t) : (t.jqXHR = e.ajax(e.extend(f, s)), s.data = a)
    }

    function pe(e) {
        return !e.bAjaxDataGet || (e.iDraw++, Me(e, !0), he(e, ge(e), function(t) {
            me(e, t)
        }), !1)
    }

    function ge(t) {
        var n, r, i, o, a = t.aoColumns,
            s = a.length,
            u = t.oFeatures,
            c = t.oPreviousSearch,
            f = t.aoPreSearchCols,
            d = [],
            h = Ge(t),
            p = t._iDisplayStart,
            g = !1 !== u.bPaginate ? t._iDisplayLength : -1,
            m = function(e, t) {
                d.push({
                    name: e,
                    value: t
                })
            };
        m("sEcho", t.iDraw), m("iColumns", s), m("sColumns", x(a, "sName").join(",")), m("iDisplayStart", p), m("iDisplayLength", g);
        var v = {
            draw: t.iDraw,
            columns: [],
            order: [],
            start: p,
            length: g,
            search: {
                value: c.sSearch,
                regex: c.bRegex
            }
        };
        for (n = 0; n < s; n++) v.columns.push({
            data: r = "function" == typeof(i = a[n]).mData ? "function" : i.mData,
            name: i.sName,
            searchable: i.bSearchable,
            orderable: i.bSortable,
            search: {
                value: (o = f[n]).sSearch,
                regex: o.bRegex
            }
        }), m("mDataProp_" + n, r), u.bFilter && (m("sSearch_" + n, o.sSearch), m("bRegex_" + n, o.bRegex), m("bSearchable_" + n, i.bSearchable)), u.bSort && m("bSortable_" + n, i.bSortable);
        u.bFilter && (m("sSearch", c.sSearch), m("bRegex", c.bRegex)), u.bSort && (e.each(h, function(e, t) {
            v.order.push({
                column: t.col,
                dir: t.dir
            }), m("iSortCol_" + e, t.col), m("sSortDir_" + e, t.dir)
        }), m("iSortingCols", h.length));
        var y = l.ext.legacy.ajax;
        return null === y ? t.sAjaxSource ? d : v : y ? d : v
    }

    function me(e, t) {
        var n = function(e, n) {
                return t[e] !== r ? t[e] : t[n]
            },
            i = ve(e, t),
            o = n("sEcho", "draw"),
            a = n("iTotalRecords", "recordsTotal"),
            s = n("iTotalDisplayRecords", "recordsFiltered");
        if (o !== r) {
            if (1 * o < e.iDraw) return;
            e.iDraw = 1 * o
        }
        ee(e), e._iRecordsTotal = parseInt(a, 10), e._iRecordsDisplay = parseInt(s, 10);
        for (var l = 0, u = i.length; l < u; l++) $(e, i[l]);
        e.aiDisplay = e.aiDisplayMaster.slice(), e.bAjaxDataGet = !1, le(e), e._bInitComplete || Pe(e, t), e.bAjaxDataGet = !0, Me(e, !1)
    }

    function ve(t, n) {
        var i = e.isPlainObject(t.ajax) && t.ajax.dataSrc !== r ? t.ajax.dataSrc : t.sAjaxDataProp;
        return "data" === i ? n.aaData || n[i] : "" !== i ? G(i)(n) : n
    }

    function ye(t) {
        var r = t.oClasses,
            i = t.sTableId,
            o = t.oLanguage,
            a = t.oPreviousSearch,
            s = t.aanFeatures,
            l = '<input type="search" class="' + r.sFilterInput + '"/>',
            u = o.sSearch;
        u = u.match(/_INPUT_/) ? u.replace("_INPUT_", l) : u + l;
        var c = e("<div/>", {
                id: s.f ? null : i + "_filter",
                class: r.sFilter
            }).append(e("<label/>").append(u)),
            f = function() {
                var e = this.value ? this.value : "";
                e != a.sSearch && (be(t, {
                    sSearch: e,
                    bRegex: a.bRegex,
                    bSmart: a.bSmart,
                    bCaseInsensitive: a.bCaseInsensitive
                }), t._iDisplayStart = 0, le(t))
            },
            d = null !== t.searchDelay ? t.searchDelay : "ssp" === gt(t) ? 400 : 0,
            h = e("input", c).val(a.sSearch).attr("placeholder", o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", d ? Ve(f, d) : f).on("mouseup", function(e) {
                setTimeout(function() {
                    f.call(h[0])
                }, 10)
            }).on("keypress.DT", function(e) {
                if (13 == e.keyCode) return !1
            }).attr("aria-controls", i);
        return e(t.nTable).on("search.dt.DT", function(e, r) {
            if (t === r) try {
                h[0] !== n.activeElement && h.val(a.sSearch)
            } catch (i) {}
        }), c[0]
    }

    function be(e, t, n) {
        var i = e.oPreviousSearch,
            o = e.aoPreSearchCols,
            a = function(e) {
                i.sSearch = e.sSearch, i.bRegex = e.bRegex, i.bSmart = e.bSmart, i.bCaseInsensitive = e.bCaseInsensitive
            },
            s = function(e) {
                return e.bEscapeRegex !== r ? !e.bEscapeRegex : e.bRegex
            };
        if (B(e), "ssp" != gt(e)) {
            we(e, t.sSearch, n, s(t), t.bSmart, t.bCaseInsensitive), a(t);
            for (var l = 0; l < o.length; l++) _e(e, o[l].sSearch, l, s(o[l]), o[l].bSmart, o[l].bCaseInsensitive);
            xe(e)
        } else a(t);
        e.bFiltered = !0, dt(e, null, "search", [e])
    }

    function xe(t) {
        for (var n, r, i = l.ext.search, o = t.aiDisplay, a = 0, s = i.length; a < s; a++) {
            for (var u = [], c = 0, f = o.length; c < f; c++) i[a](t, (n = t.aoData[r = o[c]])._aFilterData, r, n._aData, c) && u.push(r);
            o.length = 0, e.merge(o, u)
        }
    }

    function _e(e, t, n, r, i, o) {
        if ("" !== t) {
            for (var a = [], s = e.aiDisplay, l = Te(t, r, i, o), u = 0; u < s.length; u++) l.test(e.aoData[s[u]]._aFilterData[n]) && a.push(s[u]);
            e.aiDisplay = a
        }
    }

    function we(e, t, n, r, i, o) {
        var a, s, u, c = Te(t, r, i, o),
            f = e.oPreviousSearch.sSearch,
            d = e.aiDisplayMaster,
            h = [];
        if (0 !== l.ext.search.length && (n = !0), s = Ee(e), t.length <= 0) e.aiDisplay = d.slice();
        else {
            for ((s || n || r || f.length > t.length || 0 !== t.indexOf(f) || e.bSorted) && (e.aiDisplay = d.slice()), a = e.aiDisplay, u = 0; u < a.length; u++) c.test(e.aoData[a[u]]._sFilterRow) && h.push(a[u]);
            e.aiDisplay = h
        }
    }

    function Te(t, n, r, i) {
        if (t = n ? t : Se(t), r) {
            var o = e.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function(e) {
                if ('"' === e.charAt(0)) {
                    var t = e.match(/^"(.*)"$/);
                    e = t ? t[1] : e
                }
                return e.replace('"', "")
            });
            t = "^(?=.*?" + o.join(")(?=.*?") + ").*$"
        }
        return new RegExp(t, i ? "i" : "")
    }
    var Se = l.util.escapeRegex,
        Ce = e("<div>")[0],
        De = Ce.textContent !== r;

    function Ee(e) {
        var t, n, r, i, o, a, s, u, c = e.aoColumns,
            f = l.ext.type.search,
            d = !1;
        for (n = 0, i = e.aoData.length; n < i; n++)
            if (!(u = e.aoData[n])._aFilterData) {
                for (a = [], r = 0, o = c.length; r < o; r++)(t = c[r]).bSearchable ? (s = V(e, n, r, "filter"), f[t.sType] && (s = f[t.sType](s)), null === s && (s = ""), "string" != typeof s && s.toString && (s = s.toString())) : s = "", s.indexOf && -1 !== s.indexOf("&") && (Ce.innerHTML = s, s = De ? Ce.textContent : Ce.innerText), s.replace && (s = s.replace(/[\r\n\u2028]/g, "")), a.push(s);
                u._aFilterData = a, u._sFilterRow = a.join("  "), d = !0
            }
        return d
    }

    function Ae(e) {
        return {
            search: e.sSearch,
            smart: e.bSmart,
            regex: e.bRegex,
            caseInsensitive: e.bCaseInsensitive
        }
    }

    function ke(e) {
        return {
            sSearch: e.search,
            bSmart: e.smart,
            bRegex: e.regex,
            bCaseInsensitive: e.caseInsensitive
        }
    }

    function Ne(t) {
        var n = t.sTableId,
            r = t.aanFeatures.i,
            i = e("<div/>", {
                class: t.oClasses.sInfo,
                id: r ? null : n + "_info"
            });
        return r || (t.aoDrawCallback.push({
            fn: je,
            sName: "information"
        }), i.attr("role", "status").attr("aria-live", "polite"), e(t.nTable).attr("aria-describedby", n + "_info")), i[0]
    }

    function je(t) {
        var n = t.aanFeatures.i;
        if (0 !== n.length) {
            var r = t.oLanguage,
                i = t._iDisplayStart + 1,
                o = t.fnDisplayEnd(),
                a = t.fnRecordsTotal(),
                s = t.fnRecordsDisplay(),
                l = s ? r.sInfo : r.sInfoEmpty;
            s !== a && (l += " " + r.sInfoFiltered), l = Ie(t, l += r.sInfoPostFix);
            var u = r.fnInfoCallback;
            null !== u && (l = u.call(t.oInstance, t, i, o, a, s, l)), e(n).html(l)
        }
    }

    function Ie(e, t) {
        var n = e.fnFormatNumber,
            r = e._iDisplayStart + 1,
            i = e._iDisplayLength,
            o = e.fnRecordsDisplay(),
            a = -1 === i;
        return t.replace(/_START_/g, n.call(e, r)).replace(/_END_/g, n.call(e, e.fnDisplayEnd())).replace(/_MAX_/g, n.call(e, e.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(e, o)).replace(/_PAGE_/g, n.call(e, a ? 1 : Math.ceil(r / i))).replace(/_PAGES_/g, n.call(e, a ? 1 : Math.ceil(o / i)))
    }

    function Le(e) {
        var t, n, r, i = e.iInitDisplayStart,
            o = e.aoColumns,
            a = e.oFeatures,
            s = e.bDeferLoading;
        if (e.bInitialised) {
            for (ce(e), ae(e), se(e, e.aoHeader), se(e, e.aoFooter), Me(e, !0), a.bAutoWidth && Xe(e), t = 0, n = o.length; t < n; t++)(r = o[t]).sWidth && (r.nTh.style.width = Ye(r.sWidth));
            dt(e, null, "preInit", [e]), ue(e);
            var l = gt(e);
            ("ssp" != l || s) && ("ajax" == l ? he(e, [], function(n) {
                var r = ve(e, n);
                for (t = 0; t < r.length; t++) $(e, r[t]);
                e.iInitDisplayStart = i, ue(e), Me(e, !1), Pe(e, n)
            }) : (Me(e, !1), Pe(e)))
        } else setTimeout(function() {
            Le(e)
        }, 200)
    }

    function Pe(e, t) {
        e._bInitComplete = !0, (t || e.oInit.aaData) && F(e), dt(e, null, "plugin-init", [e, t]), dt(e, "aoInitComplete", "init", [e, t])
    }

    function Re(e, t) {
        var n = parseInt(t, 10);
        e._iDisplayLength = n, ht(e), dt(e, null, "length", [e, n])
    }

    function Oe(t) {
        for (var n = t.oClasses, r = t.sTableId, i = t.aLengthMenu, o = Array.isArray(i[0]), a = o ? i[0] : i, s = o ? i[1] : i, l = e("<select/>", {
                name: r + "_length",
                "aria-controls": r,
                class: n.sLengthSelect
            }), u = 0, c = a.length; u < c; u++) l[0][u] = new Option("number" == typeof s[u] ? t.fnFormatNumber(s[u]) : s[u], a[u]);
        var f = e("<div><label/></div>").addClass(n.sLength);
        return t.aanFeatures.l || (f[0].id = r + "_length"), f.children().append(t.oLanguage.sLengthMenu.replace("_MENU_", l[0].outerHTML)), e("select", f).val(t._iDisplayLength).on("change.DT", function(n) {
            Re(t, e(this).val()), le(t)
        }), e(t.nTable).on("length.dt.DT", function(n, r, i) {
            t === r && e("select", f).val(i)
        }), f[0]
    }

    function Fe(t) {
        var n = t.sPaginationType,
            r = l.ext.pager[n],
            i = "function" == typeof r,
            o = function(e) {
                le(e)
            },
            a = e("<div/>").addClass(t.oClasses.sPaging + n)[0],
            s = t.aanFeatures;
        return i || r.fnInit(t, a, o), s.p || (a.id = t.sTableId + "_paginate", t.aoDrawCallback.push({
            fn: function(e) {
                if (i) {
                    var t, n, a = e._iDisplayStart,
                        l = e._iDisplayLength,
                        u = e.fnRecordsDisplay(),
                        c = -1 === l,
                        f = c ? 0 : Math.ceil(a / l),
                        d = c ? 1 : Math.ceil(u / l),
                        h = r(f, d);
                    for (t = 0, n = s.p.length; t < n; t++) pt(e, "pageButton")(e, s.p[t], t, h, f, d)
                } else r.fnUpdate(e, o)
            },
            sName: "pagination"
        })), a
    }

    function qe(e, t, n) {
        var r = e._iDisplayStart,
            i = e._iDisplayLength,
            o = e.fnRecordsDisplay();
        0 === o || -1 === i ? r = 0 : "number" == typeof t ? (r = t * i) > o && (r = 0) : "first" == t ? r = 0 : "previous" == t ? (r = i >= 0 ? r - i : 0) < 0 && (r = 0) : "next" == t ? r + i < o && (r += i) : "last" == t ? r = Math.floor((o - 1) / i) * i : st(e, 0, "Unknown paging action: " + t, 5);
        var a = e._iDisplayStart !== r;
        return e._iDisplayStart = r, a && (dt(e, null, "page", [e]), n && le(e)), a
    }

    function He(t) {
        return e("<div/>", {
            id: t.aanFeatures.r ? null : t.sTableId + "_processing",
            class: t.oClasses.sProcessing
        }).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]
    }

    function Me(t, n) {
        t.oFeatures.bProcessing && e(t.aanFeatures.r).css("display", n ? "block" : "none"), dt(t, null, "processing", [t, n])
    }

    function We(t) {
        var n = e(t.nTable);
        n.attr("role", "grid");
        var r = t.oScroll;
        if ("" === r.sX && "" === r.sY) return t.nTable;
        var i = r.sX,
            o = r.sY,
            a = t.oClasses,
            s = n.children("caption"),
            l = s.length ? s[0]._captionSide : null,
            u = e(n[0].cloneNode(!1)),
            c = e(n[0].cloneNode(!1)),
            f = n.children("tfoot"),
            d = "<div/>",
            h = function(e) {
                return e ? Ye(e) : null
            };
        f.length || (f = null);
        var p = e(d, {
            class: a.sScrollWrapper
        }).append(e(d, {
            class: a.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: i ? h(i) : "100%"
        }).append(e(d, {
            class: a.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: r.sXInner || "100%"
        }).append(u.removeAttr("id").css("margin-left", 0).append("top" === l ? s : null).append(n.children("thead"))))).append(e(d, {
            class: a.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: h(i)
        }).append(n));
        f && p.append(e(d, {
            class: a.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: i ? h(i) : "100%"
        }).append(e(d, {
            class: a.sScrollFootInner
        }).append(c.removeAttr("id").css("margin-left", 0).append("bottom" === l ? s : null).append(n.children("tfoot")))));
        var g = p.children(),
            m = g[0],
            v = g[1],
            y = f ? g[2] : null;
        return i && e(v).on("scroll.DT", function(e) {
            var t = this.scrollLeft;
            m.scrollLeft = t, f && (y.scrollLeft = t)
        }), e(v).css("max-height", o), r.bCollapse || e(v).css("height", o), t.nScrollHead = m, t.nScrollBody = v, t.nScrollFoot = y, t.aoDrawCallback.push({
            fn: Be,
            sName: "scrolling"
        }), p[0]
    }

    function Be(t) {
        var n, i, o, a, s, l, u, c, f, d = t.oScroll,
            h = d.sX,
            p = d.sXInner,
            g = d.sY,
            m = d.iBarWidth,
            v = e(t.nScrollHead),
            y = v[0].style,
            b = v.children("div"),
            _ = b[0].style,
            w = b.children("table"),
            T = t.nScrollBody,
            S = e(T),
            C = T.style,
            D = e(t.nScrollFoot).children("div"),
            E = D.children("table"),
            A = e(t.nTHead),
            k = e(t.nTable),
            N = k[0],
            j = N.style,
            I = t.nTFoot ? e(t.nTFoot) : null,
            L = t.oBrowser,
            P = L.bScrollOversize,
            R = x(t.aoColumns, "nTh"),
            O = [],
            H = [],
            M = [],
            W = [],
            B = function(e) {
                var t = e.style;
                t.paddingTop = "0", t.paddingBottom = "0", t.borderTopWidth = "0", t.borderBottomWidth = "0", t.height = 0
            },
            U = T.scrollHeight > T.clientHeight;
        if (t.scrollBarVis !== U && t.scrollBarVis !== r) return t.scrollBarVis = U, void F(t);
        t.scrollBarVis = U, k.children("thead, tfoot").remove(), I && (l = I.clone().prependTo(k), i = I.find("tr"), a = l.find("tr")), s = A.clone().prependTo(k), n = A.find("tr"), o = s.find("tr"), s.find("th, td").removeAttr("tabindex"), h || (C.width = "100%", v[0].style.width = "100%"), e.each(de(t, s), function(e, n) {
            u = q(t, e), n.style.width = t.aoColumns[u].sWidth
        }), I && Ue(function(e) {
            e.style.width = ""
        }, a), f = k.outerWidth(), "" === h ? (j.width = "100%", P && (k.find("tbody").height() > T.offsetHeight || "scroll" == S.css("overflow-y")) && (j.width = Ye(k.outerWidth() - m)), f = k.outerWidth()) : "" !== p && (j.width = Ye(p), f = k.outerWidth()), Ue(B, o), Ue(function(t) {
            M.push(t.innerHTML), O.push(Ye(e(t).css("width")))
        }, o), Ue(function(t, n) {
            -1 !== e.inArray(t, R) && (t.style.width = O[n])
        }, n), e(o).height(0), I && (Ue(B, a), Ue(function(t) {
            W.push(t.innerHTML), H.push(Ye(e(t).css("width")))
        }, a), Ue(function(e, t) {
            e.style.width = H[t]
        }, i), e(a).height(0)), Ue(function(e, t) {
            e.innerHTML = '<div class="dataTables_sizing">' + M[t] + "</div>", e.childNodes[0].style.height = "0", e.childNodes[0].style.overflow = "hidden", e.style.width = O[t]
        }, o), I && Ue(function(e, t) {
            e.innerHTML = '<div class="dataTables_sizing">' + W[t] + "</div>", e.childNodes[0].style.height = "0", e.childNodes[0].style.overflow = "hidden", e.style.width = H[t]
        }, a), k.outerWidth() < f ? (c = T.scrollHeight > T.offsetHeight || "scroll" == S.css("overflow-y") ? f + m : f, P && (T.scrollHeight > T.offsetHeight || "scroll" == S.css("overflow-y")) && (j.width = Ye(c - m)), "" !== h && "" === p || st(t, 1, "Possible column misalignment", 6)) : c = "100%", C.width = Ye(c), y.width = Ye(c), I && (t.nScrollFoot.style.width = Ye(c)), g || P && (C.height = Ye(N.offsetHeight + m));
        var $ = k.outerWidth();
        w[0].style.width = Ye($), _.width = Ye($);
        var X = k.height() > T.clientHeight || "scroll" == S.css("overflow-y"),
            V = "padding" + (L.bScrollbarLeft ? "Left" : "Right");
        _[V] = X ? m + "px" : "0px", I && (E[0].style.width = Ye($), D[0].style.width = Ye($), D[0].style[V] = X ? m + "px" : "0px"), k.children("colgroup").insertBefore(k.children("thead")), S.trigger("scroll"), !t.bSorted && !t.bFiltered || t._drawHold || (T.scrollTop = 0)
    }

    function Ue(e, t, n) {
        for (var r, i, o = 0, a = 0, s = t.length; a < s;) {
            for (r = t[a].firstChild, i = n ? n[a].firstChild : null; r;) 1 === r.nodeType && (n ? e(r, i, o) : e(r, o), o++), r = r.nextSibling, i = n ? i.nextSibling : null;
            a++
        }
    }
    var $e = /<.*?>/g;

    function Xe(n) {
        var r, i, o, a = n.nTable,
            s = n.aoColumns,
            l = n.oScroll,
            u = l.sY,
            c = l.sX,
            f = l.sXInner,
            d = s.length,
            h = W(n, "bVisible"),
            p = e("th", n.nTHead),
            g = a.getAttribute("width"),
            m = a.parentNode,
            v = !1,
            y = n.oBrowser,
            b = y.bScrollOversize,
            x = a.style.width;
        for (x && -1 !== x.indexOf("%") && (g = x), r = 0; r < h.length; r++) null !== (i = s[h[r]]).sWidth && (i.sWidth = ze(i.sWidthOrig, m), v = !0);
        if (b || !v && !c && !u && d == M(n) && d == p.length)
            for (r = 0; r < d; r++) {
                var _ = q(n, r);
                null !== _ && (s[_].sWidth = Ye(p.eq(r).width()))
            } else {
                var w = e(a).clone().css("visibility", "hidden").removeAttr("id");
                w.find("tbody tr").remove();
                var T = e("<tr/>").appendTo(w.find("tbody"));
                for (w.find("thead, tfoot").remove(), w.append(e(n.nTHead).clone()).append(e(n.nTFoot).clone()), w.find("tfoot th, tfoot td").css("width", ""), p = de(n, w.find("thead")[0]), r = 0; r < h.length; r++) p[r].style.width = null !== (i = s[h[r]]).sWidthOrig && "" !== i.sWidthOrig ? Ye(i.sWidthOrig) : "", i.sWidthOrig && c && e(p[r]).append(e("<div/>").css({
                    width: i.sWidthOrig,
                    margin: 0,
                    padding: 0,
                    border: 0,
                    height: 1
                }));
                if (n.aoData.length)
                    for (r = 0; r < h.length; r++) i = s[o = h[r]], e(Qe(n, o)).clone(!1).append(i.sContentPadding).appendTo(T);
                e("[name]", w).removeAttr("name");
                var S = e("<div/>").css(c || u ? {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 1,
                    right: 0,
                    overflow: "hidden"
                } : {}).append(w).appendTo(m);
                c && f ? w.width(f) : c ? (w.css("width", "auto"), w.removeAttr("width"), w.width() < m.clientWidth && g && w.width(m.clientWidth)) : u ? w.width(m.clientWidth) : g && w.width(g);
                var C = 0;
                for (r = 0; r < h.length; r++) {
                    var D = e(p[r]),
                        E = D.outerWidth() - D.width(),
                        A = y.bBounding ? Math.ceil(p[r].getBoundingClientRect().width) : D.outerWidth();
                    C += A, s[h[r]].sWidth = Ye(A - E)
                }
                a.style.width = Ye(C), S.remove()
            }
        if (g && (a.style.width = Ye(g)), (g || c) && !n._reszEvt) {
            var k = function() {
                e(t).on("resize.DT-" + n.sInstance, Ve(function() {
                    F(n)
                }))
            };
            b ? setTimeout(k, 1e3) : k(), n._reszEvt = !0
        }
    }
    var Ve = l.util.throttle;

    function ze(t, r) {
        if (!t) return 0;
        var i = e("<div/>").css("width", Ye(t)).appendTo(r || n.body),
            o = i[0].offsetWidth;
        return i.remove(), o
    }

    function Qe(t, n) {
        var r = Je(t, n);
        if (r < 0) return null;
        var i = t.aoData[r];
        return i.nTr ? i.anCells[n] : e("<td/>").html(V(t, r, n, "display"))[0]
    }

    function Je(e, t) {
        for (var n, r = -1, i = -1, o = 0, a = e.aoData.length; o < a; o++)(n = (n = (n = V(e, o, t, "display") + "").replace($e, "")).replace(/&nbsp;/g, " ")).length > r && (r = n.length, i = o);
        return i
    }

    function Ye(e) {
        return null === e ? "0px" : "number" == typeof e ? e < 0 ? "0px" : e + "px" : e.match(/\d$/) ? e + "px" : e
    }

    function Ge(t) {
        var n, i, o, a, s, u, c, f = [],
            d = t.aoColumns,
            h = t.aaSortingFixed,
            p = e.isPlainObject(h),
            g = [],
            m = function(t) {
                t.length && !Array.isArray(t[0]) ? g.push(t) : e.merge(g, t)
            };
        for (Array.isArray(h) && m(h), p && h.pre && m(h.pre), m(t.aaSorting), p && h.post && m(h.post), n = 0; n < g.length; n++)
            for (i = 0, o = (a = d[c = g[n][0]].aDataSort).length; i < o; i++) u = d[s = a[i]].sType || "string", g[n]._idx === r && (g[n]._idx = e.inArray(g[n][1], d[s].asSorting)), f.push({
                src: c,
                col: s,
                dir: g[n][1],
                index: g[n]._idx,
                type: u,
                formatter: l.ext.type.order[u + "-pre"]
            });
        return f
    }

    function Ke(e) {
        var t, n, r, i, o, a = [],
            s = l.ext.type.order,
            u = e.aoData,
            c = 0,
            f = e.aiDisplayMaster;
        for (B(e), t = 0, n = (o = Ge(e)).length; t < n; t++)(i = o[t]).formatter && c++, rt(e, i.col);
        if ("ssp" != gt(e) && 0 !== o.length) {
            for (t = 0, r = f.length; t < r; t++) a[f[t]] = t;
            f.sort(c === o.length ? function(e, t) {
                var n, r, i, s, l, c = o.length,
                    f = u[e]._aSortData,
                    d = u[t]._aSortData;
                for (i = 0; i < c; i++)
                    if (0 != (s = (n = f[(l = o[i]).col]) < (r = d[l.col]) ? -1 : n > r ? 1 : 0)) return "asc" === l.dir ? s : -s;
                return (n = a[e]) < (r = a[t]) ? -1 : n > r ? 1 : 0
            } : function(e, t) {
                var n, r, i, l, c, f = o.length,
                    d = u[e]._aSortData,
                    h = u[t]._aSortData;
                for (i = 0; i < f; i++)
                    if (0 !== (l = (s[(c = o[i]).type + "-" + c.dir] || s["string-" + c.dir])(n = d[c.col], r = h[c.col]))) return l;
                return (n = a[e]) < (r = a[t]) ? -1 : n > r ? 1 : 0
            })
        }
        e.bSorted = !0
    }

    function Ze(e) {
        for (var t, n, r = e.aoColumns, i = Ge(e), o = e.oLanguage.oAria, a = 0, s = r.length; a < s; a++) {
            var l = r[a],
                u = l.asSorting,
                c = l.sTitle.replace(/<.*?>/g, ""),
                f = l.nTh;
            f.removeAttribute("aria-sort"), l.bSortable ? (i.length > 0 && i[0].col == a ? (f.setAttribute("aria-sort", "asc" == i[0].dir ? "ascending" : "descending"), n = u[i[0].index + 1] || u[0]) : n = u[0], t = c + ("asc" === n ? o.sSortAscending : o.sSortDescending)) : t = c, f.setAttribute("aria-label", t)
        }
    }

    function et(t, n, i, o) {
        var a, s = t.aaSorting,
            l = t.aoColumns[n].asSorting,
            u = function(t, n) {
                var i = t._idx;
                return i === r && (i = e.inArray(t[1], l)), i + 1 < l.length ? i + 1 : n ? null : 0
            };
        if ("number" == typeof s[0] && (s = t.aaSorting = [s]), i && t.oFeatures.bSortMulti) {
            var c = e.inArray(n, x(s, "0")); - 1 !== c ? (null === (a = u(s[c], !0)) && 1 === s.length && (a = 0), null === a ? s.splice(c, 1) : (s[c][1] = l[a], s[c]._idx = a)) : (s.push([n, l[0], 0]), s[s.length - 1]._idx = 0)
        } else s.length && s[0][0] == n ? (a = u(s[0]), s.length = 1, s[0][1] = l[a], s[0]._idx = a) : (s.length = 0, s.push([n, l[0]]), s[0]._idx = 0);
        ue(t), "function" == typeof o && o(t)
    }

    function tt(e, t, n, r) {
        var i = e.aoColumns[n];
        ct(t, {}, function(t) {
            !1 !== i.bSortable && (e.oFeatures.bProcessing ? (Me(e, !0), setTimeout(function() {
                et(e, n, t.shiftKey, r), "ssp" !== gt(e) && Me(e, !1)
            }, 0)) : et(e, n, t.shiftKey, r))
        })
    }

    function nt(t) {
        var n, r, i = t.aLastSort,
            o = t.oClasses.sSortColumn,
            a = Ge(t),
            s = t.oFeatures;
        if (s.bSort && s.bSortClasses) {
            for (n = 0, r = i.length; n < r; n++) e(x(t.aoData, "anCells", i[n].src)).removeClass(o + (n < 2 ? n + 1 : 3));
            for (n = 0, r = a.length; n < r; n++) e(x(t.aoData, "anCells", a[n].src)).addClass(o + (n < 2 ? n + 1 : 3))
        }
        t.aLastSort = a
    }

    function rt(e, t) {
        var n, r, i, o = e.aoColumns[t],
            a = l.ext.order[o.sSortDataType];
        a && (n = a.call(e.oInstance, e, t, H(e, t)));
        for (var s = l.ext.type.order[o.sType + "-pre"], u = 0, c = e.aoData.length; u < c; u++)(r = e.aoData[u])._aSortData || (r._aSortData = []), r._aSortData[t] && !a || (i = a ? n[u] : V(e, u, t, "sort"), r._aSortData[t] = s ? s(i) : i)
    }

    function it(t) {
        if (t.oFeatures.bStateSave && !t.bDestroying) {
            var n = {
                time: +new Date,
                start: t._iDisplayStart,
                length: t._iDisplayLength,
                order: e.extend(!0, [], t.aaSorting),
                search: Ae(t.oPreviousSearch),
                columns: e.map(t.aoColumns, function(e, n) {
                    return {
                        visible: e.bVisible,
                        search: Ae(t.aoPreSearchCols[n])
                    }
                })
            };
            dt(t, "aoStateSaveParams", "stateSaveParams", [t, n]), t.oSavedState = n, t.fnStateSaveCallback.call(t.oInstance, t, n)
        }
    }

    function ot(t, n, i) {
        var o, a, s = t.aoColumns,
            l = function(n) {
                if (n && n.time) {
                    var l = dt(t, "aoStateLoadParams", "stateLoadParams", [t, n]);
                    if (-1 === e.inArray(!1, l)) {
                        var u = t.iStateDuration;
                        if (u > 0 && n.time < +new Date - 1e3 * u) i();
                        else if (n.columns && s.length !== n.columns.length) i();
                        else {
                            if (t.oLoadedState = e.extend(!0, {}, n), n.start !== r && (t._iDisplayStart = n.start, t.iInitDisplayStart = n.start), n.length !== r && (t._iDisplayLength = n.length), n.order !== r && (t.aaSorting = [], e.each(n.order, function(e, n) {
                                    t.aaSorting.push(n[0] >= s.length ? [0, n[1]] : n)
                                })), n.search !== r && e.extend(t.oPreviousSearch, ke(n.search)), n.columns)
                                for (o = 0, a = n.columns.length; o < a; o++) {
                                    var c = n.columns[o];
                                    c.visible !== r && (s[o].bVisible = c.visible), c.search !== r && e.extend(t.aoPreSearchCols[o], ke(c.search))
                                }
                            dt(t, "aoStateLoaded", "stateLoaded", [t, n]), i()
                        }
                    } else i()
                } else i()
            };
        if (t.oFeatures.bStateSave) {
            var u = t.fnStateLoadCallback.call(t.oInstance, t, l);
            u !== r && l(u)
        } else i()
    }

    function at(t) {
        var n = l.settings,
            r = e.inArray(t, x(n, "nTable"));
        return -1 !== r ? n[r] : null
    }

    function st(e, n, r, i) {
        if (r = "DataTables warning: " + (e ? "table id=" + e.sTableId + " - " : "") + r, i && (r += ". For more information about this error, please see http://datatables.net/tn/" + i), n) t.console && console.log && console.log(r);
        else {
            var o = l.ext,
                a = o.sErrMode || o.errMode;
            if (e && dt(e, null, "error", [e, i, r]), "alert" == a) alert(r);
            else {
                if ("throw" == a) throw new Error(r);
                "function" == typeof a && a(e, i, r)
            }
        }
    }

    function lt(t, n, i, o) {
        Array.isArray(i) ? e.each(i, function(e, r) {
            Array.isArray(r) ? lt(t, n, r[0], r[1]) : lt(t, n, r)
        }) : (o === r && (o = i), n[i] !== r && (t[o] = n[i]))
    }

    function ut(t, n, r) {
        var i;
        for (var o in n) n.hasOwnProperty(o) && (e.isPlainObject(i = n[o]) ? (e.isPlainObject(t[o]) || (t[o] = {}), e.extend(!0, t[o], i)) : t[o] = r && "data" !== o && "aaData" !== o && Array.isArray(i) ? i.slice() : i);
        return t
    }

    function ct(t, n, r) {
        e(t).on("click.DT", n, function(n) {
            e(t).trigger("blur"), r(n)
        }).on("keypress.DT", n, function(e) {
            13 === e.which && (e.preventDefault(), r(e))
        }).on("selectstart.DT", function() {
            return !1
        })
    }

    function ft(e, t, n, r) {
        n && e[t].push({
            fn: n,
            sName: r
        })
    }

    function dt(t, n, r, i) {
        var o = [];
        if (n && (o = e.map(t[n].slice().reverse(), function(e, n) {
                return e.fn.apply(t.oInstance, i)
            })), null !== r) {
            var a = e.Event(r + ".dt");
            e(t.nTable).trigger(a, i), o.push(a.result)
        }
        return o
    }

    function ht(e) {
        var t = e._iDisplayStart,
            n = e.fnDisplayEnd(),
            r = e._iDisplayLength;
        t >= n && (t = n - r), t -= t % r, (-1 === r || t < 0) && (t = 0), e._iDisplayStart = t
    }

    function pt(t, n) {
        var r = t.renderer,
            i = l.ext.renderer[n];
        return e.isPlainObject(r) && r[n] ? i[r[n]] || i._ : "string" == typeof r && i[r] || i._
    }

    function gt(e) {
        return e.oFeatures.bServerSide ? "ssp" : e.ajax || e.sAjaxSource ? "ajax" : "dom"
    }
    var mt = [],
        vt = Array.prototype;
    l.Api = o = function(t, n) {
        if (!(this instanceof o)) return new o(t, n);
        var r = [],
            i = function(t) {
                var n = function(t) {
                    var n, r, i = l.settings,
                        o = e.map(i, function(e, t) {
                            return e.nTable
                        });
                    return t ? t.nTable && t.oApi ? [t] : t.nodeName && "table" === t.nodeName.toLowerCase() ? -1 !== (n = e.inArray(t, o)) ? [i[n]] : null : t && "function" == typeof t.settings ? t.settings().toArray() : ("string" == typeof t ? r = e(t) : t instanceof e && (r = t), r ? r.map(function(t) {
                        return -1 !== (n = e.inArray(this, o)) ? i[n] : null
                    }).toArray() : void 0) : []
                }(t);
                n && r.push.apply(r, n)
            };
        if (Array.isArray(t))
            for (var a = 0, s = t.length; a < s; a++) i(t[a]);
        else i(t);
        this.context = C(r), n && e.merge(this, n), this.selector = {
            rows: null,
            cols: null,
            opts: null
        }, o.extend(this, this, mt)
    }, e.extend(o.prototype, {
        any: function() {
            return 0 !== this.count()
        },
        concat: vt.concat,
        context: [],
        count: function() {
            return this.flatten().length
        },
        each: function(e) {
            for (var t = 0, n = this.length; t < n; t++) e.call(this, this[t], t, this);
            return this
        },
        eq: function(e) {
            var t = this.context;
            return t.length > e ? new o(t[e], this[e]) : null
        },
        filter: function(e) {
            var t = [];
            if (vt.filter) t = vt.filter.call(this, e, this);
            else
                for (var n = 0, r = this.length; n < r; n++) e.call(this, this[n], n, this) && t.push(this[n]);
            return new o(this.context, t)
        },
        flatten: function() {
            var e = [];
            return new o(this.context, e.concat.apply(e, this.toArray()))
        },
        join: vt.join,
        indexOf: vt.indexOf || function(e, t) {
            for (var n = t || 0, r = this.length; n < r; n++)
                if (this[n] === e) return n;
            return -1
        },
        iterator: function(e, t, n, i) {
            var a, s, l, u, c, f, d, h, p = [],
                g = this.context,
                m = this.selector;
            for ("string" == typeof e && (i = n, n = t, t = e, e = !1), s = 0, l = g.length; s < l; s++) {
                var v = new o(g[s]);
                if ("table" === t)(a = n.call(v, g[s], s)) !== r && p.push(a);
                else if ("columns" === t || "rows" === t)(a = n.call(v, g[s], this[s], s)) !== r && p.push(a);
                else if ("column" === t || "column-rows" === t || "row" === t || "cell" === t)
                    for (d = this[s], "column-rows" === t && (f = Tt(g[s], m.opts)), u = 0, c = d.length; u < c; u++) h = d[u], (a = "cell" === t ? n.call(v, g[s], h.row, h.column, s, u) : n.call(v, g[s], h, s, u, f)) !== r && p.push(a)
            }
            if (p.length || i) {
                var y = new o(g, e ? p.concat.apply([], p) : p),
                    b = y.selector;
                return b.rows = m.rows, b.cols = m.cols, b.opts = m.opts, y
            }
            return this
        },
        lastIndexOf: vt.lastIndexOf || function(e, t) {
            return this.indexOf.apply(this.toArray.reverse(), arguments)
        },
        length: 0,
        map: function(e) {
            var t = [];
            if (vt.map) t = vt.map.call(this, e, this);
            else
                for (var n = 0, r = this.length; n < r; n++) t.push(e.call(this, this[n], n));
            return new o(this.context, t)
        },
        pluck: function(e) {
            return this.map(function(t) {
                return t[e]
            })
        },
        pop: vt.pop,
        push: vt.push,
        reduce: vt.reduce || function(e, t) {
            return P(this, e, t, 0, this.length, 1)
        },
        reduceRight: vt.reduceRight || function(e, t) {
            return P(this, e, t, this.length - 1, -1, -1)
        },
        reverse: vt.reverse,
        selector: null,
        shift: vt.shift,
        slice: function() {
            return new o(this.context, this)
        },
        sort: vt.sort,
        splice: vt.splice,
        toArray: function() {
            return vt.slice.call(this)
        },
        to$: function() {
            return e(this)
        },
        toJQuery: function() {
            return e(this)
        },
        unique: function() {
            return new o(this.context, C(this))
        },
        unshift: vt.unshift
    }), o.extend = function(e, t, n) {
        if (n.length && t && (t instanceof o || t.__dt_wrapper)) {
            var r, i, a, s = function(e, t, n) {
                return function() {
                    var r = t.apply(e, arguments);
                    return o.extend(r, r, n.methodExt), r
                }
            };
            for (r = 0, i = n.length; r < i; r++) t[(a = n[r]).name] = "function" === a.type ? s(e, a.val, a) : "object" === a.type ? {} : a.val, t[a.name].__dt_wrapper = !0, o.extend(e, t[a.name], a.propExt)
        }
    }, o.register = a = function(t, n) {
        if (Array.isArray(t))
            for (var r = 0, i = t.length; r < i; r++) o.register(t[r], n);
        else {
            var a, s, l, u, c = t.split("."),
                f = mt,
                d = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n].name === t) return e[n];
                    return null
                };
            for (a = 0, s = c.length; a < s; a++) {
                var h = d(f, l = (u = -1 !== c[a].indexOf("()")) ? c[a].replace("()", "") : c[a]);
                h || f.push(h = {
                    name: l,
                    val: {},
                    methodExt: [],
                    propExt: [],
                    type: "object"
                }), a === s - 1 ? (h.val = n, h.type = "function" == typeof n ? "function" : e.isPlainObject(n) ? "object" : "other") : f = u ? h.methodExt : h.propExt
            }
        }
    }, o.registerPlural = s = function(e, t, n) {
        o.register(e, n), o.register(t, function() {
            var e = n.apply(this, arguments);
            return e === this ? this : e instanceof o ? e.length ? Array.isArray(e[0]) ? new o(e.context, e[0]) : e[0] : r : e
        })
    };
    var yt = function(t, n) {
        if (Array.isArray(t)) return e.map(t, function(e) {
            return yt(e, n)
        });
        if ("number" == typeof t) return [n[t]];
        var r = e.map(n, function(e, t) {
            return e.nTable
        });
        return e(r).filter(t).map(function(t) {
            var i = e.inArray(this, r);
            return n[i]
        }).toArray()
    };
    a("tables()", function(e) {
        return e !== r && null !== e ? new o(yt(e, this.context)) : this
    }), a("table()", function(e) {
        var t = this.tables(e),
            n = t.context;
        return n.length ? new o(n[0]) : t
    }), s("tables().nodes()", "table().node()", function() {
        return this.iterator("table", function(e) {
            return e.nTable
        }, 1)
    }), s("tables().body()", "table().body()", function() {
        return this.iterator("table", function(e) {
            return e.nTBody
        }, 1)
    }), s("tables().header()", "table().header()", function() {
        return this.iterator("table", function(e) {
            return e.nTHead
        }, 1)
    }), s("tables().footer()", "table().footer()", function() {
        return this.iterator("table", function(e) {
            return e.nTFoot
        }, 1)
    }), s("tables().containers()", "table().container()", function() {
        return this.iterator("table", function(e) {
            return e.nTableWrapper
        }, 1)
    }), a("draw()", function(e) {
        return this.iterator("table", function(t) {
            "page" === e ? le(t) : ("string" == typeof e && (e = "full-hold" !== e), ue(t, !1 === e))
        })
    }), a("page()", function(e) {
        return e === r ? this.page.info().page : this.iterator("table", function(t) {
            qe(t, e)
        })
    }), a("page.info()", function(e) {
        if (0 === this.context.length) return r;
        var t = this.context[0],
            n = t._iDisplayStart,
            i = t.oFeatures.bPaginate ? t._iDisplayLength : -1,
            o = t.fnRecordsDisplay(),
            a = -1 === i;
        return {
            page: a ? 0 : Math.floor(n / i),
            pages: a ? 1 : Math.ceil(o / i),
            start: n,
            end: t.fnDisplayEnd(),
            length: i,
            recordsTotal: t.fnRecordsTotal(),
            recordsDisplay: o,
            serverSide: "ssp" === gt(t)
        }
    }), a("page.len()", function(e) {
        return e === r ? 0 !== this.context.length ? this.context[0]._iDisplayLength : r : this.iterator("table", function(t) {
            Re(t, e)
        })
    });
    var bt = function(e, t, n) {
        if (n) {
            var r = new o(e);
            r.one("draw", function() {
                n(r.ajax.json())
            })
        }
        if ("ssp" == gt(e)) ue(e, t);
        else {
            Me(e, !0);
            var i = e.jqXHR;
            i && 4 !== i.readyState && i.abort(), he(e, [], function(n) {
                ee(e);
                for (var r = ve(e, n), i = 0, o = r.length; i < o; i++) $(e, r[i]);
                ue(e, t), Me(e, !1)
            })
        }
    };
    a("ajax.json()", function() {
        var e = this.context;
        if (e.length > 0) return e[0].json
    }), a("ajax.params()", function() {
        var e = this.context;
        if (e.length > 0) return e[0].oAjaxData
    }), a("ajax.reload()", function(e, t) {
        return this.iterator("table", function(n) {
            bt(n, !1 === t, e)
        })
    }), a("ajax.url()", function(t) {
        var n = this.context;
        return t === r ? 0 === n.length ? r : (n = n[0]).ajax ? e.isPlainObject(n.ajax) ? n.ajax.url : n.ajax : n.sAjaxSource : this.iterator("table", function(n) {
            e.isPlainObject(n.ajax) ? n.ajax.url = t : n.ajax = t
        })
    }), a("ajax.url().load()", function(e, t) {
        return this.iterator("table", function(n) {
            bt(n, !1 === t, e)
        })
    });
    var xt = function(e, t, n, o, a) {
            var s, l, u, c, f, d, h = [],
                p = typeof t;
            for (t && "string" !== p && "function" !== p && t.length !== r || (t = [t]), u = 0, c = t.length; u < c; u++)
                for (f = 0, d = (l = t[u] && t[u].split && !t[u].match(/[\[\(:]/) ? t[u].split(",") : [t[u]]).length; f < d; f++)(s = n("string" == typeof l[f] ? l[f].trim() : l[f])) && s.length && (h = h.concat(s));
            var g = i.selector[e];
            if (g.length)
                for (u = 0, c = g.length; u < c; u++) h = g[u](o, a, h);
            return C(h)
        },
        _t = function(t) {
            return t || (t = {}), t.filter && t.search === r && (t.search = t.filter), e.extend({
                search: "none",
                order: "current",
                page: "all"
            }, t)
        },
        wt = function(e) {
            for (var t = 0, n = e.length; t < n; t++)
                if (e[t].length > 0) return e[0] = e[t], e[0].length = 1, e.length = 1, e.context = [e.context[t]], e;
            return e.length = 0, e
        },
        Tt = function(t, n) {
            var r, i = [],
                o = t.aiDisplay,
                a = t.aiDisplayMaster,
                s = n.search,
                l = n.order,
                u = n.page;
            if ("ssp" == gt(t)) return "removed" === s ? [] : w(0, a.length);
            if ("current" == u)
                for (f = t._iDisplayStart, d = t.fnDisplayEnd(); f < d; f++) i.push(o[f]);
            else if ("current" == l || "applied" == l) {
                if ("none" == s) i = a.slice();
                else if ("applied" == s) i = o.slice();
                else if ("removed" == s) {
                    for (var c = {}, f = 0, d = o.length; f < d; f++) c[o[f]] = null;
                    i = e.map(a, function(e) {
                        return c.hasOwnProperty(e) ? null : e
                    })
                }
            } else if ("index" == l || "original" == l)
                for (f = 0, d = t.aoData.length; f < d; f++)("none" == s || -1 === (r = e.inArray(f, o)) && "removed" == s || r >= 0 && "applied" == s) && i.push(f);
            return i
        };
    a("rows()", function(t, n) {
        t === r ? t = "" : e.isPlainObject(t) && (n = t, t = ""), n = _t(n);
        var i = this.iterator("table", function(i) {
            return function(t, n, i) {
                var o;
                return xt("row", n, function(n) {
                    var a = m(n),
                        s = t.aoData;
                    if (null !== a && !i) return [a];
                    if (o || (o = Tt(t, i)), null !== a && -1 !== e.inArray(a, o)) return [a];
                    if (null === n || n === r || "" === n) return o;
                    if ("function" == typeof n) return e.map(o, function(e) {
                        var t = s[e];
                        return n(e, t._aData, t.nTr) ? e : null
                    });
                    if (n.nodeName) {
                        var l = n._DT_RowIndex,
                            u = n._DT_CellIndex;
                        if (l !== r) return s[l] && s[l].nTr === n ? [l] : [];
                        if (u) return s[u.row] && s[u.row].nTr === n.parentNode ? [u.row] : [];
                        var c = e(n).closest("*[data-dt-row]");
                        return c.length ? [c.data("dt-row")] : []
                    }
                    if ("string" == typeof n && "#" === n.charAt(0)) {
                        var f = t.aIds[n.replace(/^#/, "")];
                        if (f !== r) return [f.idx]
                    }
                    var d = T(_(t.aoData, o, "nTr"));
                    return e(d).filter(n).map(function() {
                        return this._DT_RowIndex
                    }).toArray()
                }, t, i)
            }(i, t, n)
        }, 1);
        return i.selector.rows = t, i.selector.opts = n, i
    }), a("rows().nodes()", function() {
        return this.iterator("row", function(e, t) {
            return e.aoData[t].nTr || r
        }, 1)
    }), a("rows().data()", function() {
        return this.iterator(!0, "rows", function(e, t) {
            return _(e.aoData, t, "_aData")
        }, 1)
    }), s("rows().cache()", "row().cache()", function(e) {
        return this.iterator("row", function(t, n) {
            var r = t.aoData[n];
            return "search" === e ? r._aFilterData : r._aSortData
        }, 1)
    }), s("rows().invalidate()", "row().invalidate()", function(e) {
        return this.iterator("row", function(t, n) {
            ne(t, n, e)
        })
    }), s("rows().indexes()", "row().index()", function() {
        return this.iterator("row", function(e, t) {
            return t
        }, 1)
    }), s("rows().ids()", "row().id()", function(e) {
        for (var t = [], n = this.context, r = 0, i = n.length; r < i; r++)
            for (var a = 0, s = this[r].length; a < s; a++) {
                var l = n[r].rowIdFn(n[r].aoData[this[r][a]]._aData);
                t.push((!0 === e ? "#" : "") + l)
            }
        return new o(n, t)
    }), s("rows().remove()", "row().remove()", function() {
        var e = this;
        return this.iterator("row", function(t, n, i) {
            var o, a, s, l, u, c, f = t.aoData,
                d = f[n];
            for (f.splice(n, 1), o = 0, a = f.length; o < a; o++)
                if (c = (u = f[o]).anCells, null !== u.nTr && (u.nTr._DT_RowIndex = o), null !== c)
                    for (s = 0, l = c.length; s < l; s++) c[s]._DT_CellIndex.row = o;
            te(t.aiDisplayMaster, n), te(t.aiDisplay, n), te(e[i], n, !1), t._iRecordsDisplay > 0 && t._iRecordsDisplay--, ht(t);
            var h = t.rowIdFn(d._aData);
            h !== r && delete t.aIds[h]
        }), this.iterator("table", function(e) {
            for (var t = 0, n = e.aoData.length; t < n; t++) e.aoData[t].idx = t
        }), this
    }), a("rows.add()", function(t) {
        var n = this.iterator("table", function(e) {
                var n, r, i, o = [];
                for (r = 0, i = t.length; r < i; r++)(n = t[r]).nodeName && "TR" === n.nodeName.toUpperCase() ? o.push(X(e, n)[0]) : o.push($(e, n));
                return o
            }, 1),
            r = this.rows(-1);
        return r.pop(), e.merge(r, n), r
    }), a("row()", function(e, t) {
        return wt(this.rows(e, t))
    }), a("row().data()", function(e) {
        var t = this.context;
        if (e === r) return t.length && this.length ? t[0].aoData[this[0]]._aData : r;
        var n = t[0].aoData[this[0]];
        return n._aData = e, Array.isArray(e) && n.nTr && n.nTr.id && K(t[0].rowId)(e, n.nTr.id), ne(t[0], this[0], "data"), this
    }), a("row().node()", function() {
        var e = this.context;
        return e.length && this.length && e[0].aoData[this[0]].nTr || null
    }), a("row.add()", function(t) {
        t instanceof e && t.length && (t = t[0]);
        var n = this.iterator("table", function(e) {
            return t.nodeName && "TR" === t.nodeName.toUpperCase() ? X(e, t)[0] : $(e, t)
        });
        return this.row(n[0])
    });
    var St = function(e, t) {
            var n = e.context;
            if (n.length) {
                var i = n[0].aoData[t !== r ? t : e[0]];
                i && i._details && (i._details.remove(), i._detailsShow = r, i._details = r)
            }
        },
        Ct = function(e, t) {
            var n = e.context;
            if (n.length && e.length) {
                var r = n[0].aoData[e[0]];
                r._details && (r._detailsShow = t, t ? r._details.insertAfter(r.nTr) : r._details.detach(), Dt(n[0]))
            }
        },
        Dt = function(e) {
            var t = new o(e),
                n = ".dt.DT_details",
                r = "draw" + n,
                i = "column-visibility" + n,
                a = "destroy" + n,
                s = e.aoData;
            t.off(r + " " + i + " " + a), x(s, "_details").length > 0 && (t.on(r, function(n, r) {
                e === r && t.rows({
                    page: "current"
                }).eq(0).each(function(e) {
                    var t = s[e];
                    t._detailsShow && t._details.insertAfter(t.nTr)
                })
            }), t.on(i, function(t, n, r, i) {
                if (e === n)
                    for (var o, a = M(n), l = 0, u = s.length; l < u; l++)(o = s[l])._details && o._details.children("td[colspan]").attr("colspan", a)
            }), t.on(a, function(n, r) {
                if (e === r)
                    for (var i = 0, o = s.length; i < o; i++) s[i]._details && St(t, i)
            }))
        },
        Et = "row().child()";
    a(Et, function(t, n) {
        var i = this.context;
        return t === r ? i.length && this.length ? i[0].aoData[this[0]]._details : r : (!0 === t ? this.child.show() : !1 === t ? St(this) : i.length && this.length && function(t, n, r, i) {
            var o = [],
                a = function(n, r) {
                    if (Array.isArray(n) || n instanceof e)
                        for (var i = 0, s = n.length; i < s; i++) a(n[i], r);
                    else if (n.nodeName && "tr" === n.nodeName.toLowerCase()) o.push(n);
                    else {
                        var l = e("<tr><td></td></tr>").addClass(r);
                        e("td", l).addClass(r).html(n)[0].colSpan = M(t), o.push(l[0])
                    }
                };
            a(r, i), n._details && n._details.detach(), n._details = e(o), n._detailsShow && n._details.insertAfter(n.nTr)
        }(i[0], i[0].aoData[this[0]], t, n), this)
    }), a(["row().child.show()", Et + ".show()"], function(e) {
        return Ct(this, !0), this
    }), a(["row().child.hide()", Et + ".hide()"], function() {
        return Ct(this, !1), this
    }), a(["row().child.remove()", Et + ".remove()"], function() {
        return St(this), this
    }), a("row().child.isShown()", function() {
        var e = this.context;
        return e.length && this.length && e[0].aoData[this[0]]._detailsShow || !1
    });
    var At = /^([^:]+):(name|visIdx|visible)$/,
        kt = function(e, t, n, r, i) {
            for (var o = [], a = 0, s = i.length; a < s; a++) o.push(V(e, i[a], t));
            return o
        };
    a("columns()", function(t, n) {
        t === r ? t = "" : e.isPlainObject(t) && (n = t, t = ""), n = _t(n);
        var i = this.iterator("table", function(r) {
            return function(t, n, r) {
                var i = t.aoColumns,
                    o = x(i, "sName"),
                    a = x(i, "nTh");
                return xt("column", n, function(n) {
                    var s = m(n);
                    if ("" === n) return w(i.length);
                    if (null !== s) return [s >= 0 ? s : i.length + s];
                    if ("function" == typeof n) {
                        var l = Tt(t, r);
                        return e.map(i, function(e, r) {
                            return n(r, kt(t, r, 0, 0, l), a[r]) ? r : null
                        })
                    }
                    var u = "string" == typeof n ? n.match(At) : "";
                    if (u) switch (u[2]) {
                        case "visIdx":
                        case "visible":
                            var c = parseInt(u[1], 10);
                            if (c < 0) {
                                var f = e.map(i, function(e, t) {
                                    return e.bVisible ? t : null
                                });
                                return [f[f.length + c]]
                            }
                            return [q(t, c)];
                        case "name":
                            return e.map(o, function(e, t) {
                                return e === u[1] ? t : null
                            });
                        default:
                            return []
                    }
                    if (n.nodeName && n._DT_CellIndex) return [n._DT_CellIndex.column];
                    var d = e(a).filter(n).map(function() {
                        return e.inArray(this, a)
                    }).toArray();
                    if (d.length || !n.nodeName) return d;
                    var h = e(n).closest("*[data-dt-column]");
                    return h.length ? [h.data("dt-column")] : []
                }, t, r)
            }(r, t, n)
        }, 1);
        return i.selector.cols = t, i.selector.opts = n, i
    }), s("columns().header()", "column().header()", function(e, t) {
        return this.iterator("column", function(e, t) {
            return e.aoColumns[t].nTh
        }, 1)
    }), s("columns().footer()", "column().footer()", function(e, t) {
        return this.iterator("column", function(e, t) {
            return e.aoColumns[t].nTf
        }, 1)
    }), s("columns().data()", "column().data()", function() {
        return this.iterator("column-rows", kt, 1)
    }), s("columns().dataSrc()", "column().dataSrc()", function() {
        return this.iterator("column", function(e, t) {
            return e.aoColumns[t].mData
        }, 1)
    }), s("columns().cache()", "column().cache()", function(e) {
        return this.iterator("column-rows", function(t, n, r, i, o) {
            return _(t.aoData, o, "search" === e ? "_aFilterData" : "_aSortData", n)
        }, 1)
    }), s("columns().nodes()", "column().nodes()", function() {
        return this.iterator("column-rows", function(e, t, n, r, i) {
            return _(e.aoData, i, "anCells", t)
        }, 1)
    }), s("columns().visible()", "column().visible()", function(t, n) {
        var i = this,
            o = this.iterator("column", function(n, i) {
                if (t === r) return n.aoColumns[i].bVisible;
                ! function(t, n, i) {
                    var o, a, s, l, u = t.aoColumns,
                        c = u[n],
                        f = t.aoData;
                    if (i === r) return c.bVisible;
                    if (c.bVisible !== i) {
                        if (i) {
                            var d = e.inArray(!0, x(u, "bVisible"), n + 1);
                            for (a = 0, s = f.length; a < s; a++) o = f[a].anCells, (l = f[a].nTr) && l.insertBefore(o[n], o[d] || null)
                        } else e(x(t.aoData, "anCells", n)).detach();
                        c.bVisible = i
                    }
                }(n, i, t)
            });
        return t !== r && this.iterator("table", function(o) {
            se(o, o.aoHeader), se(o, o.aoFooter), o.aiDisplay.length || e(o.nTBody).find("td[colspan]").attr("colspan", M(o)), it(o), i.iterator("column", function(e, r) {
                dt(e, null, "column-visibility", [e, r, t, n])
            }), (n === r || n) && i.columns.adjust()
        }), o
    }), s("columns().indexes()", "column().index()", function(e) {
        return this.iterator("column", function(t, n) {
            return "visible" === e ? H(t, n) : n
        }, 1)
    }), a("columns.adjust()", function() {
        return this.iterator("table", function(e) {
            F(e)
        }, 1)
    }), a("column.index()", function(e, t) {
        if (0 !== this.context.length) {
            var n = this.context[0];
            if ("fromVisible" === e || "toData" === e) return q(n, t);
            if ("fromData" === e || "toVisible" === e) return H(n, t)
        }
    }), a("column()", function(e, t) {
        return wt(this.columns(e, t))
    }), a("cells()", function(t, n, i) {
        if (e.isPlainObject(t) && (t.row === r ? (i = t, t = null) : (i = n, n = null)), e.isPlainObject(n) && (i = n, n = null), null === n || n === r) return this.iterator("table", function(n) {
            return function(t, n, i) {
                var o, a, s, l, u, c, f, d = t.aoData,
                    h = Tt(t, i),
                    p = T(_(d, h, "anCells")),
                    g = e(D([], p)),
                    m = t.aoColumns.length;
                return xt("cell", n, function(n) {
                    var i = "function" == typeof n;
                    if (null === n || n === r || i) {
                        for (a = [], s = 0, l = h.length; s < l; s++)
                            for (o = h[s], u = 0; u < m; u++) c = {
                                row: o,
                                column: u
                            }, i ? (f = d[o], n(c, V(t, o, u), f.anCells ? f.anCells[u] : null) && a.push(c)) : a.push(c);
                        return a
                    }
                    if (e.isPlainObject(n)) return n.column !== r && n.row !== r && -1 !== e.inArray(n.row, h) ? [n] : [];
                    var p = g.filter(n).map(function(e, t) {
                        return {
                            row: t._DT_CellIndex.row,
                            column: t._DT_CellIndex.column
                        }
                    }).toArray();
                    return p.length || !n.nodeName ? p : (f = e(n).closest("*[data-dt-row]")).length ? [{
                        row: f.data("dt-row"),
                        column: f.data("dt-column")
                    }] : []
                }, t, i)
            }(n, t, _t(i))
        });
        var o, a, s, l, u = i ? {
                page: i.page,
                order: i.order,
                search: i.search
            } : {},
            c = this.columns(n, u),
            f = this.rows(t, u),
            d = this.iterator("table", function(e, t) {
                var n = [];
                for (o = 0, a = f[t].length; o < a; o++)
                    for (s = 0, l = c[t].length; s < l; s++) n.push({
                        row: f[t][o],
                        column: c[t][s]
                    });
                return n
            }, 1),
            h = i && i.selected ? this.cells(d, i) : d;
        return e.extend(h.selector, {
            cols: n,
            rows: t,
            opts: i
        }), h
    }), s("cells().nodes()", "cell().node()", function() {
        return this.iterator("cell", function(e, t, n) {
            var i = e.aoData[t];
            return i && i.anCells ? i.anCells[n] : r
        }, 1)
    }), a("cells().data()", function() {
        return this.iterator("cell", function(e, t, n) {
            return V(e, t, n)
        }, 1)
    }), s("cells().cache()", "cell().cache()", function(e) {
        return e = "search" === e ? "_aFilterData" : "_aSortData", this.iterator("cell", function(t, n, r) {
            return t.aoData[n][e][r]
        }, 1)
    }), s("cells().render()", "cell().render()", function(e) {
        return this.iterator("cell", function(t, n, r) {
            return V(t, n, r, e)
        }, 1)
    }), s("cells().indexes()", "cell().index()", function() {
        return this.iterator("cell", function(e, t, n) {
            return {
                row: t,
                column: n,
                columnVisible: H(e, n)
            }
        }, 1)
    }), s("cells().invalidate()", "cell().invalidate()", function(e) {
        return this.iterator("cell", function(t, n, r) {
            ne(t, n, e, r)
        })
    }), a("cell()", function(e, t, n) {
        return wt(this.cells(e, t, n))
    }), a("cell().data()", function(e) {
        var t = this.context,
            n = this[0];
        return e === r ? t.length && n.length ? V(t[0], n[0].row, n[0].column) : r : (z(t[0], n[0].row, n[0].column, e), ne(t[0], n[0].row, "data", n[0].column), this)
    }), a("order()", function(e, t) {
        var n = this.context;
        return e === r ? 0 !== n.length ? n[0].aaSorting : r : ("number" == typeof e ? e = [
            [e, t]
        ] : e.length && !Array.isArray(e[0]) && (e = Array.prototype.slice.call(arguments)), this.iterator("table", function(t) {
            t.aaSorting = e.slice()
        }))
    }), a("order.listener()", function(e, t, n) {
        return this.iterator("table", function(r) {
            tt(r, e, t, n)
        })
    }), a("order.fixed()", function(t) {
        if (!t) {
            var n = this.context,
                i = n.length ? n[0].aaSortingFixed : r;
            return Array.isArray(i) ? {
                pre: i
            } : i
        }
        return this.iterator("table", function(n) {
            n.aaSortingFixed = e.extend(!0, {}, t)
        })
    }), a(["columns().order()", "column().order()"], function(t) {
        var n = this;
        return this.iterator("table", function(r, i) {
            var o = [];
            e.each(n[i], function(e, n) {
                o.push([n, t])
            }), r.aaSorting = o
        })
    }), a("search()", function(t, n, i, o) {
        var a = this.context;
        return t === r ? 0 !== a.length ? a[0].oPreviousSearch.sSearch : r : this.iterator("table", function(r) {
            r.oFeatures.bFilter && be(r, e.extend({}, r.oPreviousSearch, {
                sSearch: t + "",
                bRegex: null !== n && n,
                bSmart: null === i || i,
                bCaseInsensitive: null === o || o
            }), 1)
        })
    }), s("columns().search()", "column().search()", function(t, n, i, o) {
        return this.iterator("column", function(a, s) {
            var l = a.aoPreSearchCols;
            if (t === r) return l[s].sSearch;
            a.oFeatures.bFilter && (e.extend(l[s], {
                sSearch: t + "",
                bRegex: null !== n && n,
                bSmart: null === i || i,
                bCaseInsensitive: null === o || o
            }), be(a, a.oPreviousSearch, 1))
        })
    }), a("state()", function() {
        return this.context.length ? this.context[0].oSavedState : null
    }), a("state.clear()", function() {
        return this.iterator("table", function(e) {
            e.fnStateSaveCallback.call(e.oInstance, e, {})
        })
    }), a("state.loaded()", function() {
        return this.context.length ? this.context[0].oLoadedState : null
    }), a("state.save()", function() {
        return this.iterator("table", function(e) {
            it(e)
        })
    }), l.versionCheck = l.fnVersionCheck = function(e) {
        for (var t, n, r = l.version.split("."), i = e.split("."), o = 0, a = i.length; o < a; o++)
            if ((t = parseInt(r[o], 10) || 0) !== (n = parseInt(i[o], 10) || 0)) return t > n;
        return !0
    }, l.isDataTable = l.fnIsDataTable = function(t) {
        var n = e(t).get(0),
            r = !1;
        return t instanceof l.Api || (e.each(l.settings, function(t, i) {
            var o = i.nScrollHead ? e("table", i.nScrollHead)[0] : null,
                a = i.nScrollFoot ? e("table", i.nScrollFoot)[0] : null;
            i.nTable !== n && o !== n && a !== n || (r = !0)
        }), r)
    }, l.tables = l.fnTables = function(t) {
        var n = !1;
        e.isPlainObject(t) && (n = t.api, t = t.visible);
        var r = e.map(l.settings, function(n) {
            if (!t || t && e(n.nTable).is(":visible")) return n.nTable
        });
        return n ? new o(r) : r
    }, l.camelToHungarian = A, a("$()", function(t, n) {
        var r = this.rows(n).nodes(),
            i = e(r);
        return e([].concat(i.filter(t).toArray(), i.find(t).toArray()))
    }), e.each(["on", "one", "off"], function(t, n) {
        a(n + "()", function() {
            var t = Array.prototype.slice.call(arguments);
            t[0] = e.map(t[0].split(/\s/), function(e) {
                return e.match(/\.dt\b/) ? e : e + ".dt"
            }).join(" ");
            var r = e(this.tables().nodes());
            return r[n].apply(r, t), this
        })
    }), a("clear()", function() {
        return this.iterator("table", function(e) {
            ee(e)
        })
    }), a("settings()", function() {
        return new o(this.context, this.context)
    }), a("init()", function() {
        var e = this.context;
        return e.length ? e[0].oInit : null
    }), a("data()", function() {
        return this.iterator("table", function(e) {
            return x(e.aoData, "_aData")
        }).flatten()
    }), a("destroy()", function(n) {
        return n = n || !1, this.iterator("table", function(r) {
            var i, a = r.nTableWrapper.parentNode,
                s = r.oClasses,
                u = r.nTable,
                c = r.nTBody,
                f = r.nTHead,
                d = r.nTFoot,
                h = e(u),
                p = e(c),
                g = e(r.nTableWrapper),
                m = e.map(r.aoData, function(e) {
                    return e.nTr
                });
            r.bDestroying = !0, dt(r, "aoDestroyCallback", "destroy", [r]), n || new o(r).columns().visible(!0), g.off(".DT").find(":not(tbody *)").off(".DT"), e(t).off(".DT-" + r.sInstance), u != f.parentNode && (h.children("thead").detach(), h.append(f)), d && u != d.parentNode && (h.children("tfoot").detach(), h.append(d)), r.aaSorting = [], r.aaSortingFixed = [], nt(r), e(m).removeClass(r.asStripeClasses.join(" ")), e("th, td", f).removeClass(s.sSortable + " " + s.sSortableAsc + " " + s.sSortableDesc + " " + s.sSortableNone), p.children().detach(), p.append(m);
            var v = n ? "remove" : "detach";
            h[v](), g[v](), !n && a && (a.insertBefore(u, r.nTableReinsertBefore), h.css("width", r.sDestroyWidth).removeClass(s.sTable), (i = r.asDestroyStripes.length) && p.children().each(function(t) {
                e(this).addClass(r.asDestroyStripes[t % i])
            }));
            var y = e.inArray(r, l.settings); - 1 !== y && l.settings.splice(y, 1)
        })
    }), e.each(["column", "row", "cell"], function(e, t) {
        a(t + "s().every()", function(e) {
            var n = this.selector.opts,
                i = this;
            return this.iterator(t, function(o, a, s, l, u) {
                e.call(i[t](a, "cell" === t ? s : n, "cell" === t ? n : r), a, s, l, u)
            })
        })
    }), a("i18n()", function(t, n, i) {
        var o = this.context[0],
            a = G(t)(o.oLanguage);
        return a === r && (a = n), i !== r && e.isPlainObject(a) && (a = a[i] !== r ? a[i] : a._), a.replace("%d", i)
    }), l.version = "1.10.24", l.settings = [], l.models = {}, l.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0
    }, l.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    }, l.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    }, l.defaults = {
        aaData: null,
        aaSorting: [
            [0, "asc"]
        ],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function(e) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function(e) {
            try {
                return JSON.parse((-1 === e.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + e.sInstance + "_" + location.pathname))
            } catch (t) {
                return {}
            }
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function(e, t) {
            try {
                (-1 === e.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + e.sInstance + "_" + location.pathname, JSON.stringify(t))
            } catch (n) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending"
            },
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: "Next",
                sPrevious: "Previous"
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
        },
        oSearch: e.extend({}, l.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    }, E(l.defaults), l.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    }, E(l.defaults.column), l.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: r,
        oAjaxData: r,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function() {
            return "ssp" == gt(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
        },
        fnRecordsDisplay: function() {
            return "ssp" == gt(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
        },
        fnDisplayEnd: function() {
            var e = this._iDisplayLength,
                t = this._iDisplayStart,
                n = t + e,
                r = this.aiDisplay.length,
                i = this.oFeatures,
                o = i.bPaginate;
            return i.bServerSide ? !1 === o || -1 === e ? t + r : Math.min(t + e, this._iRecordsDisplay) : !o || n > r || -1 === e ? r : n
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    }, l.ext = i = {
        buttons: {},
        classes: {},
        builder: "-source-",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: l.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: l.version
    }, e.extend(i, {
        afnFiltering: i.search,
        aTypes: i.type.detect,
        ofnSearch: i.type.search,
        oSort: i.type.order,
        afnSortData: i.order,
        aoFeatures: i.feature,
        oApi: i.internal,
        oStdClasses: i.classes,
        oPagination: i.pager
    }), e.extend(l.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_desc_disabled",
        sSortableDesc: "sorting_asc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var Nt = l.ext.pager;

    function jt(e, t) {
        var n = [],
            r = Nt.numbers_length,
            i = Math.floor(r / 2);
        return t <= r ? n = w(0, t) : e <= i ? ((n = w(0, r - 2)).push("ellipsis"), n.push(t - 1)) : e >= t - 1 - i ? ((n = w(t - (r - 2), t)).splice(0, 0, "ellipsis"), n.splice(0, 0, 0)) : ((n = w(e - i + 2, e + i - 1)).push("ellipsis"), n.push(t - 1), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)), n.DT_el = "span", n
    }
    e.extend(Nt, {
        simple: function(e, t) {
            return ["previous", "next"]
        },
        full: function(e, t) {
            return ["first", "previous", "next", "last"]
        },
        numbers: function(e, t) {
            return [jt(e, t)]
        },
        simple_numbers: function(e, t) {
            return ["previous", jt(e, t), "next"]
        },
        full_numbers: function(e, t) {
            return ["first", "previous", jt(e, t), "next", "last"]
        },
        first_last_numbers: function(e, t) {
            return ["first", jt(e, t), "last"]
        },
        _numbers: jt,
        numbers_length: 7
    }), e.extend(!0, l.ext.renderer, {
        pageButton: {
            _: function(t, i, o, a, s, l) {
                var u, c, f, d = t.oClasses,
                    h = t.oLanguage.oPaginate,
                    p = t.oLanguage.oAria.paginate || {},
                    g = 0,
                    m = function(n, r) {
                        var i, a, f, v, y = d.sPageButtonDisabled,
                            b = function(e) {
                                qe(t, e.data.action, !0)
                            };
                        for (i = 0, a = r.length; i < a; i++)
                            if (f = r[i], Array.isArray(f)) {
                                var x = e("<" + (f.DT_el || "div") + "/>").appendTo(n);
                                m(x, f)
                            } else {
                                switch (u = null, c = f, v = t.iTabIndex, f) {
                                    case "ellipsis":
                                        n.append('<span class="ellipsis">&#x2026;</span>');
                                        break;
                                    case "first":
                                        u = h.sFirst, 0 === s && (v = -1, c += " " + y);
                                        break;
                                    case "previous":
                                        u = h.sPrevious, 0 === s && (v = -1, c += " " + y);
                                        break;
                                    case "next":
                                        u = h.sNext, 0 !== l && s !== l - 1 || (v = -1, c += " " + y);
                                        break;
                                    case "last":
                                        u = h.sLast, 0 !== l && s !== l - 1 || (v = -1, c += " " + y);
                                        break;
                                    default:
                                        u = t.fnFormatNumber(f + 1), c = s === f ? d.sPageButtonActive : ""
                                }
                                null !== u && (ct(e("<a>", {
                                    class: d.sPageButton + " " + c,
                                    "aria-controls": t.sTableId,
                                    "aria-label": p[f],
                                    "data-dt-idx": g,
                                    tabindex: v,
                                    id: 0 === o && "string" == typeof f ? t.sTableId + "_" + f : null
                                }).html(u).appendTo(n), {
                                    action: f
                                }, b), g++)
                            }
                    };
                try {
                    f = e(i).find(n.activeElement).data("dt-idx")
                } catch (v) {}
                m(e(i).empty(), a), f !== r && e(i).find("[data-dt-idx=" + f + "]").trigger("focus")
            }
        }
    }), e.extend(l.ext.type.detect, [function(e, t) {
        var n = t.oLanguage.sDecimal;
        return y(e, n) ? "num" + n : null
    }, function(e, t) {
        if (e && !(e instanceof Date) && !d.test(e)) return null;
        var n = Date.parse(e);
        return null !== n && !isNaN(n) || g(e) ? "date" : null
    }, function(e, t) {
        var n = t.oLanguage.sDecimal;
        return y(e, n, !0) ? "num-fmt" + n : null
    }, function(e, t) {
        var n = t.oLanguage.sDecimal;
        return b(e, n) ? "html-num" + n : null
    }, function(e, t) {
        var n = t.oLanguage.sDecimal;
        return b(e, n, !0) ? "html-num-fmt" + n : null
    }, function(e, t) {
        return g(e) || "string" == typeof e && -1 !== e.indexOf("<") ? "html" : null
    }]), e.extend(l.ext.type.search, {
        html: function(e) {
            return g(e) ? e : "string" == typeof e ? e.replace(c, " ").replace(f, "") : ""
        },
        string: function(e) {
            return g(e) ? e : "string" == typeof e ? e.replace(c, " ") : e
        }
    });
    var It = function(e, t, n, r) {
        return 0 === e || e && "-" !== e ? (t && (e = v(e, t)), e.replace && (n && (e = e.replace(n, "")), r && (e = e.replace(r, ""))), 1 * e) : -1 / 0
    };

    function Lt(t) {
        e.each({
            num: function(e) {
                return It(e, t)
            },
            "num-fmt": function(e) {
                return It(e, t, p)
            },
            "html-num": function(e) {
                return It(e, t, f)
            },
            "html-num-fmt": function(e) {
                return It(e, t, f, p)
            }
        }, function(e, n) {
            i.type.order[e + t + "-pre"] = n, e.match(/^html\-/) && (i.type.search[e + t] = i.type.search.html)
        })
    }
    e.extend(i.type.order, {
        "date-pre": function(e) {
            var t = Date.parse(e);
            return isNaN(t) ? -1 / 0 : t
        },
        "html-pre": function(e) {
            return g(e) ? "" : e.replace ? e.replace(/<.*?>/g, "").toLowerCase() : e + ""
        },
        "string-pre": function(e) {
            return g(e) ? "" : "string" == typeof e ? e.toLowerCase() : e.toString ? e.toString() : ""
        },
        "string-asc": function(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        },
        "string-desc": function(e, t) {
            return e < t ? 1 : e > t ? -1 : 0
        }
    }), Lt(""), e.extend(!0, l.ext.renderer, {
        header: {
            _: function(t, n, r, i) {
                e(t.nTable).on("order.dt.DT", function(e, o, a, s) {
                    if (t === o) {
                        var l = r.idx;
                        n.removeClass(i.sSortAsc + " " + i.sSortDesc).addClass("asc" == s[l] ? i.sSortAsc : "desc" == s[l] ? i.sSortDesc : r.sSortingClass)
                    }
                })
            },
            jqueryui: function(t, n, r, i) {
                e("<div/>").addClass(i.sSortJUIWrapper).append(n.contents()).append(e("<span/>").addClass(i.sSortIcon + " " + r.sSortingClassJUI)).appendTo(n), e(t.nTable).on("order.dt.DT", function(e, o, a, s) {
                    if (t === o) {
                        var l = r.idx;
                        n.removeClass(i.sSortAsc + " " + i.sSortDesc).addClass("asc" == s[l] ? i.sSortAsc : "desc" == s[l] ? i.sSortDesc : r.sSortingClass), n.find("span." + i.sSortIcon).removeClass(i.sSortJUIAsc + " " + i.sSortJUIDesc + " " + i.sSortJUI + " " + i.sSortJUIAscAllowed + " " + i.sSortJUIDescAllowed).addClass("asc" == s[l] ? i.sSortJUIAsc : "desc" == s[l] ? i.sSortJUIDesc : r.sSortingClassJUI)
                    }
                })
            }
        }
    });
    var Pt = function(e) {
        return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : e
    };

    function Rt(e) {
        return function() {
            var t = [at(this[l.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return l.ext.internal[e].apply(this, t)
        }
    }
    return l.render = {
        number: function(e, t, n, r, i) {
            return {
                display: function(o) {
                    if ("number" != typeof o && "string" != typeof o) return o;
                    var a = o < 0 ? "-" : "",
                        s = parseFloat(o);
                    if (isNaN(s)) return Pt(o);
                    s = s.toFixed(n), o = Math.abs(s);
                    var l = parseInt(o, 10),
                        u = n ? t + (o - l).toFixed(n).substring(2) : "";
                    return a + (r || "") + l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, e) + u + (i || "")
                }
            }
        },
        text: function() {
            return {
                display: Pt,
                filter: Pt
            }
        }
    }, e.extend(l.ext.internal, {
        _fnExternApiFunc: Rt,
        _fnBuildAjax: he,
        _fnAjaxUpdate: pe,
        _fnAjaxParameters: ge,
        _fnAjaxUpdateDraw: me,
        _fnAjaxDataSrc: ve,
        _fnAddColumn: R,
        _fnColumnOptions: O,
        _fnAdjustColumnSizing: F,
        _fnVisibleToColumnIndex: q,
        _fnColumnIndexToVisible: H,
        _fnVisbleColumns: M,
        _fnGetColumns: W,
        _fnColumnTypes: B,
        _fnApplyColumnDefs: U,
        _fnHungarianMap: E,
        _fnCamelToHungarian: A,
        _fnLanguageCompat: k,
        _fnBrowserDetect: L,
        _fnAddData: $,
        _fnAddTr: X,
        _fnNodeToDataIndex: function(e, t) {
            return t._DT_RowIndex !== r ? t._DT_RowIndex : null
        },
        _fnNodeToColumnIndex: function(t, n, r) {
            return e.inArray(r, t.aoData[n].anCells)
        },
        _fnGetCellData: V,
        _fnSetCellData: z,
        _fnSplitObjNotation: Y,
        _fnGetObjectDataFn: G,
        _fnSetObjectDataFn: K,
        _fnGetDataMaster: Z,
        _fnClearTable: ee,
        _fnDeleteIndex: te,
        _fnInvalidate: ne,
        _fnGetRowElements: re,
        _fnCreateTr: ie,
        _fnBuildHead: ae,
        _fnDrawHead: se,
        _fnDraw: le,
        _fnReDraw: ue,
        _fnAddOptionsHtml: ce,
        _fnDetectHeader: fe,
        _fnGetUniqueThs: de,
        _fnFeatureHtmlFilter: ye,
        _fnFilterComplete: be,
        _fnFilterCustom: xe,
        _fnFilterColumn: _e,
        _fnFilter: we,
        _fnFilterCreateSearch: Te,
        _fnEscapeRegex: Se,
        _fnFilterData: Ee,
        _fnFeatureHtmlInfo: Ne,
        _fnUpdateInfo: je,
        _fnInfoMacros: Ie,
        _fnInitialise: Le,
        _fnInitComplete: Pe,
        _fnLengthChange: Re,
        _fnFeatureHtmlLength: Oe,
        _fnFeatureHtmlPaginate: Fe,
        _fnPageChange: qe,
        _fnFeatureHtmlProcessing: He,
        _fnProcessingDisplay: Me,
        _fnFeatureHtmlTable: We,
        _fnScrollDraw: Be,
        _fnApplyToChildren: Ue,
        _fnCalculateColumnWidths: Xe,
        _fnThrottle: Ve,
        _fnConvertToWidth: ze,
        _fnGetWidestNode: Qe,
        _fnGetMaxLenString: Je,
        _fnStringToCss: Ye,
        _fnSortFlatten: Ge,
        _fnSort: Ke,
        _fnSortAria: Ze,
        _fnSortListener: et,
        _fnSortAttachListener: tt,
        _fnSortingClasses: nt,
        _fnSortData: rt,
        _fnSaveState: it,
        _fnLoadState: ot,
        _fnSettingsFromNode: at,
        _fnLog: st,
        _fnMap: lt,
        _fnBindAction: ct,
        _fnCallbackReg: ft,
        _fnCallbackFire: dt,
        _fnLengthOverflow: ht,
        _fnRenderer: pt,
        _fnDataSource: gt,
        _fnRowAttributes: oe,
        _fnExtend: ut,
        _fnCalculateEnd: function() {}
    }), e.fn.dataTable = l, l.$ = e, e.fn.dataTableSettings = l.settings, e.fn.dataTableExt = l.ext, e.fn.DataTable = function(t) {
        return e(this).dataTable(t).api()
    }, e.each(l, function(t, n) {
        e.fn.DataTable[t] = n
    }), e.fn.dataTable
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function(t) {
        return e(t, window, document)
    }) : "object" == typeof exports ? module.exports = function(t, n) {
        return t || (t = window), n && n.fn.dataTable || (n = require("datatables.net")(t, n).$), e(n, 0, t.document)
    } : e(jQuery, window, document)
}(function(e, t, n, r) {
    var i = e.fn.dataTable;
    return e.extend(!0, i.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
    }), e.extend(i.ext.classes, {
        sWrapper: "dataTables_wrapper dt-bootstrap4",
        sFilterInput: "form-control form-control-sm",
        sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
        sProcessing: "dataTables_processing card",
        sPageButton: "paginate_button page-item"
    }), i.ext.renderer.pageButton.bootstrap = function(t, o, a, s, l, u) {
        var c, f, d, h = new i.Api(t),
            p = t.oClasses,
            g = t.oLanguage.oPaginate,
            m = t.oLanguage.oAria.paginate || {},
            v = 0,
            y = function(n, r) {
                var i, o, s, d, b = function(t) {
                    t.preventDefault(), !e(t.currentTarget).hasClass("disabled") && h.page() != t.data.action && h.page(t.data.action).draw("page")
                };
                for (i = 0, o = r.length; i < o; i++)
                    if (d = r[i], Array.isArray(d)) y(n, d);
                    else {
                        switch (f = c = "", d) {
                            case "ellipsis":
                                c = "&#x2026;", f = "disabled";
                                break;
                            case "first":
                                c = g.sFirst, f = d + (0 < l ? "" : " disabled");
                                break;
                            case "previous":
                                c = g.sPrevious, f = d + (0 < l ? "" : " disabled");
                                break;
                            case "next":
                                c = g.sNext, f = d + (l < u - 1 ? "" : " disabled");
                                break;
                            case "last":
                                c = g.sLast, f = d + (l < u - 1 ? "" : " disabled");
                                break;
                            default:
                                c = d + 1, f = l === d ? "active" : ""
                        }
                        c && (s = e("<li>", {
                            class: p.sPageButton + " " + f,
                            id: 0 === a && "string" == typeof d ? t.sTableId + "_" + d : null
                        }).append(e("<a>", {
                            href: "#",
                            "aria-controls": t.sTableId,
                            "aria-label": m[d],
                            "data-dt-idx": v,
                            tabindex: t.iTabIndex,
                            class: "page-link"
                        }).html(c)).appendTo(n), t.oApi._fnBindAction(s, {
                            action: d
                        }, b), v++)
                    }
            };
        try {
            d = e(o).find(n.activeElement).data("dt-idx")
        } catch (b) {}
        y(e(o).empty().html('<ul class="pagination"/>').children("ul"), s), d !== r && e(o).find("[data-dt-idx=" + d + "]").trigger("focus")
    }, i
});