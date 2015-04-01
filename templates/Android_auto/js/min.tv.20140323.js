(function() {
    var aa = void 0,
    f = !0,
    l = null,
    n = !1,
    ba;
    String.prototype.hasOwnProperty("trim") || (String.prototype.trim = function() {
        return this.replace(/^(\s|\r|\n|\r\n)*|(\s|\r|\n|\r\n)*$/g, "")
    });
    Function.prototype.hasOwnProperty("bind") || (Function.prototype.bind = function(a) {
        var b = this,
        c = 1 < arguments.length ? Array.slice(arguments, 1) : l;
        return function() {
            return b.apply(a || this, c)
        }
    });
    var p = document,
    q = window,
    ca = "ontouchstart" in q,
    r = q.navigator.userAgent,
    t = /Android|HTC/i.test(r) || !!(q.navigator.platform + "").match(/Linux/i),
    ga = t && /Pad/i.test(r),
    ha = !t && /iPad/i.test(r),
    ia = !t && /iPod|iPhone/i.test(r),
    ja = ha || ia,
    ka = /Windows Phone/i.test(r),
    ma = /Windows Pad/i.test(r),
    na = /BB10|BlackBerry/i.test(r),
    oa = /IEMobile/i.test(r),
    qa = /Symbian/i.test(r),
    sa = !!p.all,
    ta = !(!r.match(/Safari/i) || !r.match(/Macintosh/i)),
    ua = !(!q.WeixinJSBridge && !/MicroMessenger/i.test(r)),
    va = parseFloat(q.devicePixelRatio) || 1,
    wa = t ? 10 : 6,
    xa = ca ? "touchstart": "mousedown",
    za = ca ? "touchmove": "mousemove",
    Aa = ca ? "touchend": "mouseup",
    Ba = p.getElementsByClassName,
    Ca = 1;
    if (sa) try {
        p.execCommand("BackgroundImageCache", n, f)
    } catch(Da) {}
    t && (q.screen.width / q.innerWidth).toFixed(2) == va.toFixed(2) && (Ca = 1 / va);
    var Ea = 1;
    function v(a, b) {
        return 1 > arguments.length ? Fa || new Ga: new w(a, b)
    }
    function Ga() {
        Fa = this;
        return this
    }
    function Ia() {}
    var Fa = l,
    Ma = p.querySelectorAll ?
    function(a, b) {
        b = b || p;
        for (var c = a.slice(1), d, e = f, g = "+~[>#. ".split(""), h = g.length; h--;) if ( - 1 != c.indexOf(g[h])) {
            e = n;
            break
        }
        return e ? "#" == a.charAt(0) ? (d = p.getElementById(c)) ? [d] : [] : Ba && "." == a.charAt(0) ? b.getElementsByClassName(c) : b.getElementsByTagName(a) : b.querySelectorAll(a)
    }: function() {
        return []
    };
    function w(a, b) {
        this.b = [];
        if (a) if (a.nodeType || a === q) this.b = [a],
        this.length = 1;
        else if ("string" === typeof a) {
            var c = a.length;
            if ("<" === a.charAt(0) && 2 < c && ">" === a.charAt(c - 1)) {
                a = a.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, "<$1></$2>");
                c = p.createElement("div");
                c.innerHTML = a;
                for (var d = 0,
                e = c.childNodes.length; d < e; d++) this.b.push(c.childNodes[d])
            } else {
                if (b instanceof w && (b = b.b[0], !b)) return this.b = [],
                this.length = 0,
                this;
                this.b = Ma(a, b)
            }
            this.length = this.b.length
        } else {
            if (a instanceof w) return a;
            if (a.length) {
                for (var c = a,
                d = [], e = 0, g = c.length; e < g; e++) d.push(c[e]);
                this.b = d;
                this.length = this.b.length
            }
        } else this.length = 0;
        return this
    }
    w.prototype = {};
    function z(a, b) {
        for (var c = 0,
        d = a.length,
        e; c < d; c++) e = a.b[c],
        b.call(a, e, c);
        return a
    }
    Ga.prototype = {
        extend: function(a, b) {
            var c, d;
            for (c in b) d = b[c],
            d !== l && (a[c] = "object" == typeof d && !d.nodeType && !(d instanceof Array) ? Ga.prototype.extend({},
            d) : d);
            return a
        },
        copy: function(a) {
            if (a instanceof Array) {
                for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = Ga.prototype.copy(a[c]);
                return b
            }
            return "object" == typeof a ? Ga.prototype.extend({},
            a) : a
        }
    };
    var JSON = q.JSON || {
        U: {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        T: function(a) {
            return JSON.U[a] || "\\u00" + Math.floor(a.charCodeAt() / 16).toString(16) + (a.charCodeAt() % 16).toString(16)
        },
        stringify: function(a) {
            type = a instanceof Array ? "array": typeof a;
            switch (type) {
            case "string":
                return '"' + a.replace(/[\x00-\x1f\\"]/g, JSON.T) + '"';
            case "array":
                for (var b = [], c = 0, d = a.length; c < d; c++) b.push(JSON.stringify(a[c]));
                return "[" + b.join(",") + "]";
            case "object":
            case "hash":
                b = [];
                for (c in a) d = a[c],
                (d = JSON.stringify(d)) && b.push(JSON.stringify(c) + ":" + d);
                return "{" + b.join(",") + "}";
            case "number":
            case "boolean":
                return String(a);
            case n:
                return "null"
            }
            return l
        },
        parse: function(a) {
            return eval("(" + a + ")")
        }
    };
    Array.isArray || (Array.isArray = function(a) {
        return a instanceof Array
    }); [].forEach || (Array.prototype.forEach = function(a, b) {
        b || (b = this);
        for (var c = 0,
        d = b.length; c < d; c++) a.call(b, b[c], c, b)
    }); [].map || (Array.prototype.map = function(a, b) {
        b || (b = this);
        var c = [];
        b.forEach(function(b, e, g) {
            c.push(a.call(g, b, e, g))
        });
        return c
    });
    function Storage(a, b) {
        var c = Na();
        if (c) {
            if ("undefined" === typeof b) return (b = c.getItem(a)) && JSON.parse(b);
            c.setItem(a, JSON.stringify(b))
        }
    }
    function Na() {
        var a;
        try {
            a = q.localStorage
        } catch(b) {}
        Na = function() {
            return q.localStorage
        };
        return a
    }
    function Oa(a) {
        var b = Na();
        if (b) if (a) for (var c in b) 0 === c.indexOf(a) && b.removeItem(c);
        else b.clear()
    }
    function Pa(a, b) {
        Qa.hasOwnProperty(a) ? Qa[a].push(b) : Qa[a] = [b]
    }
    function Sa(a, b) {
        var c;
        c = c || q;
        b && !(b instanceof Array) && (b = [b]);
        var d = Qa[a] || [],
        e,
        g = d.length;
        for (e = 0; e < g; e++) d[e].apply(c, b)
    }
    var Qa = {};
    function Ta(a) {
        a = a.replace(/^\?+/, "").replace(/&amp;/, "&");
        a = a.split("&");
        for (var b = a.length,
        c = {},
        d; b--;) if (d = a[b].split("="), d[0]) {
            var e = d[1] || "";
            try {
                e = decodeURIComponent(e)
            } catch(g) {
                e = unescape(e)
            }
            c[decodeURIComponent(d[0])] = e
        }
        return c
    }
    function A(a, b) {
        var c;
        if (b) {
            var d;
            d = v(b).get(0);
            c = d.search || "";
            if (!c) {
                d = "FORM" == d.nodeName ? d.getAttribute("action") : d.getAttribute("href");
                var e = d.indexOf("?"); - 1 !== e && (c = d.slice(e))
            }
        } else c = q.location.search.substring(1);
        c = Ta(c);
        return a in c ? c[a] : l
    }
    function Ua(a) {
        var b = [],
        c,
        d,
        e;
        for (c in a) if (d = a[c], d instanceof Array) for (e = d.length; e--;) b.push(c + "[]=" + encodeURIComponent(d[e]));
        else b.push(c + "=" + encodeURIComponent("undefined" === typeof d ? "": d));
        return b.join("&")
    }
    var Va;
    function Wa(a, b) {
        return Ua(b)
    }
    function Xa(a) {
        v();
        return A(a, aa)
    }
    function Za(a, b, c, d) {
        var e = "";
        0 !== c && (e = new Date, e.setTime(e.getTime() + 36E5 * (c || 24)), e = ";expires=" + e.toGMTString());
        p.cookie = escape(a) + "=" + escape(b) + e + ";path=/" + (d ? ";domain=" + d: "")
    }
    function B(a) {
        for (var b = p.cookie.split(";"), c, d = 0; d < b.length; d++) if (c = b[d].split("="), c[0].trim() == a) return unescape(c[1]);
        return l
    }
    Ga.prototype.d = w.prototype.d = function(a) {
        f === $a ? a() : (ab.push(a), bb());
        return this
    };
    ba = w.prototype;
    ba.remove = function() {
        return z(this,
        function(a) {
            a.parentNode.removeChild(a)
        })
    };
    function fb(a, b, c) {
        var d = c ? "insertBefore": "appendChild";
        if (a.nodeType) b[d](a, c);
        else if (a instanceof w) for (var e = 0,
        g = a.length; e < g; e++) b[d](a.b[e], c);
        else if ("string" === typeof a) {
            var h = p.createElement("div");
            h.innerHTML = a;
            e = 0;
            for (g = h.childNodes.length; e < g; e++) b[d](h.childNodes[0], c)
        }
    }
    function gb(a, b) {
        z(a,
        function(a) {
            fb(b, a.parentNode, a)
        })
    }
    function hb(a, b) {
        z(a,
        function(a) {
            fb(b, a.parentNode, a.nextSibling)
        })
    }
    function ib(a, b) {
        z(a,
        function(a) {
            fb(b, a, a.firstChild)
        })
    }
    ba.append = function(a) {
        return z(this,
        function(b) {
            fb(a, b)
        })
    };
    ba.insertBefore = function(a) {
        gb(v(a), this);
        return this
    };
    function jb(a) {
        var b = v(".appbar");
        ib(v(b), a);
        return a
    }
    function kb(a, b) {
        v(b).append(a);
        return a
    }
    ba.width = function() {
        var a = this.b[0];
        return a && a.offsetWidth
    };
    ba.height = function() {
        var a = this.b[0];
        return a && a.offsetHeight
    };
    ba.offset = function() {
        var a = this.b[0];
        if (a) {
            var a = (a = a.getBoundingClientRect) && a(),
            b = p.body;
            if (a) return {
                left: a.left + (q.pageXOffset || b.scrollTop || 0),
                top: a.top + (q.pageYOffset || b.scrollLeft || 0)
            }
        }
        return {
            left: 0,
            top: 0
        }
    };
    function D(a, b) {
        return v(a.get(b))
    }
    ba.indexOf = [].indexOf;
    ba.get = function(a) {
        var b = this.length;
        a += 0 > a ? b: 0;
        return a > b - 1 ? l: this.b[a]
    };
    ba.parent = function() {
        var a = new w,
        b = [];
        z(this,
        function(a) {
            b.push(a.parentNode)
        });
        a.b = b;
        a.length = b.length;
        return a
    };
    ba.children = function() {
        var a = new w,
        b = [];
        z(this,
        function(a) {
            for (var d = 0,
            e = a.childNodes.length; d < e; d++) {
                var g = a.childNodes[d];
                1 == g.nodeType && b.push(g)
            }
        });
        a.b = b;
        a.length = b.length;
        return a
    };
    w.uid = function(a) {
        return a.__ruid || (a.__ruid = Ea++)
    };
    var ab = [],
    lb = n,
    $a = n,
    mb = l;
    function nb() {
        sa && "interactive" == p.readyState ? (mb && clearTimeout(mb), mb = setTimeout(nb, 10)) : (bb(), lb = f)
    }
    function bb() {
        if (n === lb) {
            var a = p.readyState;
            0 > "loading|uninitialized".indexOf(a) ? sa && "interactive" == a ? nb() : ob() : (lb = f, p.addEventListener ? p.addEventListener("DOMContentLoaded", ob) : (a = p.getElementById("_ir_"), a || (p.write('<script id="_ir_" defer="true" src="://">\x3c/script>'), a = p.getElementById("_ir_")), a.onreadystatechange = a.onload = function() {
                "complete" == this.readyState && ob()
            }))
        }
    }
    function ob() {
        if (n === $a) {
            $a = f;
            for (var a = ab,
            b = 0,
            c = a.length; b < c; b++) try {
                a[b]()
            } catch(d) {}
            ab = []
        }
    }
    w.prototype.offset = function() {
        var a = this.b[0],
        b = {
            left: 0,
            top: 0
        };
        if (a) {
            do b.left += a.offsetLeft || 0,
            b.top += a.offsetTop || 0,
            a = a.offsetParent;
            while (a)
        }
        return b
    };
    function F(a, b) {
        var c = b;
        if ("undefined" !== typeof c) {
            var c = c + "",
            d = f; - 1 < c.indexOf("<") && -1 < c.indexOf(">") && (d = n);
            return z(a,
            function(a) {
                a && "innerHTML" in a && (a.innerHTML = c, d || Sa("DOM.html", a))
            })
        }
        var e = a.b[0];
        return e && e.innerHTML
    }
    function pb(a, b) {
        if ("undefined" !== typeof b) return z(a,
        function(a) {
            a.value = b
        });
        var c = a.b[0];
        return c && c.value
    }
    function G(a, b, c) {
        return "undefined" !== typeof c ? z(a,
        function(a) {
            a.setAttribute(b, c)
        }) : (a = a.b[0]) && a.getAttribute && a.getAttribute(b)
    }
    function qb(a) {
        z(a,
        function(a) {
            a.removeAttribute && a.removeAttribute("float_menu")
        })
    }
    function I(a, b, c) {
        return z(a,
        function(a) {
            if ("object" !== typeof b) {
                var e = {};
                e[b] = c;
                b = e
            }
            for (var g in b) e = b[g],
            "opacity" !== g && ("" !== e && !isNaN(e) && 0 != e) && (e += "px"),
            a.style[g] = e
        })
    }
    function J(a, b) {
        for (var c = (b || "").match(/\S+/g) || [], d = c.length, e = 0, g, h = a.length; e < h; e++) for (g = 0; g < d; g++) if ( - 1 < (" " + a.b[e].className + " ").indexOf(" " + c[g] + " ")) return f;
        return n
    }
    function K(a, b) {
        var c = (b || "").match(/\S+/g) || [],
        d = c.length;
        return z(a,
        function(a) {
            var b = " " + (a.className || "") + " ",
            h,
            k;
            for (k = 0; k < d; k++) h = c[k],
            0 > b.indexOf(" " + h + " ") && (b += h + " ");
            a.className = b.trim()
        })
    }
    function M(a, b) {
        var c = (b || "").match(/\S+/g) || [],
        d = c.length;
        return z(a,
        function(a) {
            var b = " " + a.className + " ",
            h = b,
            k, m;
            for (m = 0; m < d; m++) k = c[m],
            -1 < b.indexOf(k) && (b = b.replace(" " + k + " ", " "));
            h != b && (a.className = b.trim())
        })
    }
    function rb(a, b, c) {
        var d = (b || "").match(/\S+/g) || [],
        e = d.length;
        return z(a,
        function(a) {
            var b = " " + a.className + " ",
            k, m, s;
            for (s = 0; s < e; s++) k = d[s],
            m = 0 > b.indexOf(" " + k + " "),
            "undefined" === typeof c && (c = m),
            c ? m && (b += k + " ") : b = b.replace(" " + k + " ", " ");
            a.className = b.trim()
        })
    }
    var sb = n; ! t && 0 > r.indexOf("PlayStation") && (sb = f);
    function tb(a) {
        if (a instanceof tb) return a;
        var b = a.changedTouches,
        b = b && 0 < b.length ? b[0] : a;
        this.event = a;
        this.g = b;
        this.target = a.target || a.srcElement;
        this.type = a.type;
        return this
    }
    tb.prototype = {
        P: n,
        preventDefault: function() {
            var a = this.event;
            a.preventDefault ? a.preventDefault() : a.returnValue = n
        },
        stopPropagation: function() {
            var a = this.event;
            this.P = f;
            a.stopPropagation && a.stopPropagation()
        }
    };
    var ub = {},
    vb = p.addEventListener ?
    function(a, b, c, d) {
        b.addEventListener(a, c, d)
    }: function(a, b, c) {
        b.attachEvent("on" + a, c)
    };
    function Ab(a, b, c, d) {
        var e = ub[a] || (ub[a] = {});
        b = e[b] || (e[b] = []);
        e = -1 !== "|focus|blur|".indexOf(a);
        1 > b.length && ( - 1 !== "|click|mouseover|mouseout|mousemove|focus|blur|touchstart|touchmove|touchend|touchcancel".indexOf(a) && (c = p), vb(a, c, Bb, e));
        b.push(d)
    }
    function Cb(a) {
        Ab("click", "tA", p, a)
    }
    function Bb(a) {
        a = new tb(a);
        var b = a.type,
        c = a.target,
        d = ub[b] || {};
        if ("click" === b && sb && !a.g.Q) a.preventDefault();
        else for (; c;) {
            var b = w.uid(c),
            b = d[b] || [],
            e = f,
            g = d["t" + c.nodeName];
            g && (b = b.concat(g));
            for (var g = 0,
            h = b.length; g < h; g++) {
                a.currentTarget = c;
                var k = b[g].apply(c, [a]);
                n === k && (e = k)
            }
            n === e && (a.preventDefault(), a.stopPropagation());
            if (f === a.P) break;
            c = c.parentNode
        }
    }
    w.prototype.a = function(a, b) {
        if ("object" === typeof a) {
            for (var c in a) this.a(c, a[c]);
            return this
        }
        return z(this,
        function(c) {
            var e = w.uid(c);
            Ab(a, e, c, b)
        })
    };
    function Db(a, b) {
        var c = p.createEvent("MouseEvents");
        c.initEvent(b, f, f);
        c.data = aa;
        c.Q = f;
        return z(a,
        function(a) {
            if ("function" === typeof a[b]) a[b]();
            else a.dispatchEvent && a.dispatchEvent(c)
        })
    }
    var N = {
        I: "active",
        r: n,
        O: "__RR_EVENT_INITED__",
        A: function() {
            if (!q[N.O]) {
                var a = {
                    ca: xa,
                    ba: za,
                    aa: Aa
                },
                b;
                for (b in a) vb(a[b], p, N[b], n);
                vb("touchcancel", p, N.C, n);
                sb && vb("click", p, Bb, n);
                q[N.O] = f
            }
        },
        ca: function(a) {
            a = new tb(a);
            var b = a.g;
            a = a.target;
            var c = ub.click || {};
            N.K();
            N.r = f;
            N.L = a;
            N.S = [b.screenX * Ca, b.screenY * Ca];
            for (N.F = []; a;) b = w.uid(a),
            (c[b] || -1 < ["A", "INPUT", "BUTTON"].indexOf(a.nodeName)) && N.F.push(K(v(a), N.I)),
            a = a.parentNode
        },
        ba: function(a) {
            N.r && (a = new tb(a), a = a.g, Math.pow(Math.pow(a.screenX * Ca - N.S[0], 2) + Math.pow(a.screenY * Ca - N.S[1], 2), 0.5) > wa && N.C())
        },
        aa: function() {
            if (N.r) {
                var a = p.createEvent("MouseEvents"),
                b = N.L;
                N.C();
                sb && (a.initEvent("click", f, f), a.Q = f, b.dispatchEvent(a))
            }
        },
        C: function() {
            N.r = n;
            N.L = l;
            setTimeout(N.K, 50)
        },
        K: function() {
            var a = N.F,
            b = N.I;
            if (a) {
                for (var c = 0,
                d = a.length; c < d; c++) M(a[c], b);
                N.F = l
            }
        }
    };
    N.A();
    function Eb() {}
    function Fb(a, b) {
        return this.s(a, b)
    }
    Fb.prototype = {
        m: n,
        s: function(a, b) {
            var c = {};
            "string" == typeof a ? c.url = a: "object" == typeof a && (b = a);
            b = b || {};
            c.i = b.i || Eb;
            c.X = b.X || Eb;
            c.j = b.j || b.ga || Eb;
            c.M = b.M || b.error || Eb;
            c.f = b.f || b.complete || Eb;
            c.W = !!b.W;
            c.dataType = (b.dataType || "json").toLowerCase();
            c.data = b.data || {};
            c.timeout = b.timeout || 0;
            c.type = (b.type || "GET").toUpperCase();
            this.options = c;
            return this
        },
        get: function(a) {
            this.options.type = "GET";
            a && (this.options.url = a);
            return this.send()
        },
        D: function(a) {
            this.options.type = "POST";
            a && (this.options.url = a);
            return this.send()
        },
        abort: function() {
            this.m && (this.H && this.H.abort(), this.m = n);
            return this
        },
        send: function() {
            var a = this.H || (q.XMLHttpRequest ? new XMLHttpRequest: n);
            if (a) {
                this.abort();
                this.H = a;
                this.l = n;
                var b = this,
                c = this.options,
                d = function() {
                    if (b && !(f === b.l || f == b.G)) {
                        var d = a.responseText;
                        b.responseText = d;
                        a.onreadystatechange = Eb;
                        b.m = n;
                        d ? "json" == c.dataType ? d && (responseData = Gb(d)) ? (b.ea = responseData, Hb(b, responseData, a.status)) : Ib(b, "parsererror") : Hb(b, d, a.status) : Ib(b, "parsererror");
                        b.l = f;
                        b = l
                    }
                };
                a.onerror = function() {
                    b.m = n;
                    Ib(b, "offline")
                };
                a.onload = d;
                a.onreadystatechange = function() {
                    Jb(b);
                    4 === this.readyState && 0 !== this.status && d()
                }
            } else return Ib(this, "error"),
            this;
            if (n !== c.i(this, c)) {
                var e = c.data,
                e = "string" == typeof e ? e: Wa(v(), e),
                g = c.url;
                if ("GET" == c.type) {
                    var h = "";
                    0 < e.length && (h = -1 < g.indexOf("?") ? "&": "?");
                    a.open("get", g + h + e, f)
                } else a.open("post", g, f),
                a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                a.setRequestHeader("Accept", "*/*");
                this.G = n;
                a.send(e);
                this.m = f
            }
            return this
        }
    };
    function Ib(a, b) {
        a.options.M.apply(a, [a, b]);
        a.options.f.apply(a, [a, b])
    }
    function Hb(a, b, c) {
        a.options.j.apply(a, [b, c, a]);
        a.options.f.apply(a, [a, "success"])
    }
    function Jb(a) {
        var b = a.options;
        b.timeout && (a.p && (clearTimeout(a.p), a.p = l), a.p = setTimeout(function() {
            f === a.G || f === a.l || (a.abort(), a.G = f, Ib(a, "timeout"))
        }.bind({
            p: a.p
        }), 1E3 * b.timeout))
    }
    function Gb(a) {
        if ("" !== a) try {
            return JSON.parse(a)
        } catch(b) {
            try {
                return eval("(" + a + ")")
            } catch(c) {
                console.log("JSON.parse(eval) failed!")
            }
        }
        return l
    }
    Ga.prototype.s = function(a, b) {
        return (new Fb(a, b)).send()
    };
    Ga.prototype.get = function(a, b) {
        return (new Fb(a, b)).get()
    };
    Ga.prototype.D = function(a, b) {
        return (new Fb(a, b)).D()
    };
    var Kb = {
        api_key: "695fe827ffeb7d74260a813025970bd5",
        plat: "17",
        sver: "1.0",
        partner: "1"
    },
    Lb = {
        android: {
            version: "4.0.1",
            tip: "\u624b\u52bf\u64cd\u4f5c\uff0c\u66f4\u4f73\u89c2\u5f71\u4f53\u9a8c"
        },
        ios: {
            version: "4.0.1",
            tip: "\u624b\u52bf\u64cd\u4f5c\uff0c\u66f4\u4f73\u89c2\u5f71\u4f53\u9a8c"
        }
    },
    O = n;
    location.href.match(/player=1/i) && (O = f);
    var Mb = n;
    if (r.match(/ UC(Browser)?/i) || r.match(/compatible;Android/i)) r.match(/ LT15i /i) || (Mb = f);
    var Nb = r.match(/MQQBrowser/i),
    Ob; (Ob = A("src")) && Za("MTV_SRC", Ob, 86400, ".m.tv.sohu.com");
    var Pb = "";
    "m.s.sohu.com" == location.host && (Pb = "/m.tv.sohu.com");
    var Qb = ua ? "1200230001": "1211010100",
    Rb = n,
    Tb = n;
    function Ub(a) {
        if (a) {
            a = a.split("|");
            for (var b = 0,
            c = a.length; b < c; b++)(new Image).src = a[b]
        }
    }
    function Vb() {
        var a = 0;
        if (ja) {
            var b = r.match(/os ([0-9_]+)/i);
            b && b[1] && (a = Wb(b[1]))
        } else a = t ? (r.match(/android(.*?);/i) || [])[1] || 0 : "4.0.1";
        return a
    }
    function Wb(a) {
        a = a.replace(/_/g, ".").replace(/^([0-9]+\.[0-9]+)[0-9\.]*/, "$1");
        return parseFloat(a || 0)
    }
    function Xb(a) {
        a = parseInt(a);
        isNaN(a) && (a = 0);
        var b = Math.floor(a / 60);
        a %= 60;
        10 > a && (a = "0" + a);
        if (60 > b) return 10 > b && (b = "0" + b),
        b + ":" + a;
        var c = Math.floor(b / 60),
        b = b % 60;
        10 > b && (b = "0" + b);
        10 > c && (c = "0" + c);
        return c + ":" + b + ":" + a
    }
    function hc(a) {
        a = parseInt(a);
        isNaN(a) && (a = 0);
        var b = Math.floor(a / 60);
        a = a % 60 + "\u79d2";
        if (60 > b) return (0 < b ? b + "\u5206": "") + a;
        var c = Math.floor(b / 60);
        return (0 < c ? c + "\u5c0f\u65f6": "") + b % 60 + "\u5206" + a
    }
    function ic(a) {
        a = parseInt(a);
        1E8 < a ? a = Math.floor(a / 1E8) + "\u4ebf": 1E4 < a && (a = Math.floor(a / 1E4) + "\u4e07");
        return a
    }
    function jc(a) {
        var b;
        if (b = a.match(/([0-9]{4}\-[0-9]+\-[0-9]+)/)) a = b[1];
        return a
    }
    function kc(a) {
        a = v(a);
        J(a, "_load_inited") || K(a, "_load_inited").append(v('<i class="ui_loading"><u></u><u></u><u></u></i>'))
    }
    function Q(a, b, c) {
        var d = p.getElementsByTagName("head")[0] || p.body,
        e = p.createElement("script"),
        g = n;
        e.src = a;
        e.onload = e.onreadystatechange = function() {
            if (!g && (!this.readyState || "loading" !== this.readyState)) g = f,
            b && b.apply(l, c || []),
            e.onload = e.onreadystatechange = l,
            d.removeChild(e)
        };
        d.appendChild(e)
    }
    function lc() {
        return q.pageYOffset || p.body && p.body.scrollTop || 0
    }
    function mc(a) {
        var b = "/app",
        c, d = A("src") || A("SRC");
        if (ia) if (1 == A("isappinstalled")) {
            if (b = "sohuvideo://", c = q.VideoData) b += "action.cmd?action=1.1&vid=" + c.vid + "&cid=" + c.cid + "&sid=" + c.sid + "&cateCode=" + c.cateCode
        } else b = "https://itunes.apple.com/cn/app/sou-hu-shi-pin-gao-qing/id458587755?mt=8";
        else ha ? b = "https://itunes.apple.com/cn/app/sou-hu-shi-pin-hd/id414430589?mt=8": t ? (b = a || "/upgrade.m.tv.sohu.com/channels/hdv/all/SohuTV_4.0.2_680_201403101517.apk", O && p.referrer.match(/m\.sohu\.com/i) && (b = "/upgrade.m.tv.sohu.com/channels/hdv/862/4.0.2/SohuTV_4.0.2_862_201403121205.apk")) : ka && (b = "/www.windowsphone.com/zh-CN/apps/403faf93-d22c-4331-ac32-9560ee9fac94");
        d && !a && (a = "", d = Number(d), 700 < d && 1E3 > d && (a = ["/upgrade.m.tv.sohu.com/channels/hdv/all/SohuTV_4.0.2", d, "201403121541"].join("_") + ".apk"), b = a || b);
        return b
    }
    function nc() {
        var a = v(this);
        G(a, "channel");
        R(a);
        setTimeout(function() {
            location.href = G(a, "href") || mc()
        },
        50);
        return n
    }
    function oc() {
        v(this);
        var a = A("src") || B("MTV_SRC"),
        b = "";
        switch (String(a)) {
        case "433":
            b = "/upgrade.m.tv.sohu.com/channels/hdv/all/SohuTV_4.0.2_433_201403101517.apk";
            break;
        case "435":
        case "1001|1100":
            b = "/upgrade.m.tv.sohu.com/channels/hdv/all/SohuTV_4.0.2_435_201403101517.apk";
            break;
        case "1028|1100":
            b = "/upgrade.m.tv.sohu.com/channels/hdv/all/SohuTV_4.0.2_436_201403101517.apk";
            break;
        default:
            b = "/upgrade.m.tv.sohu.com/channels/hdv/all/SohuTV_4.0.2_983_201403101517.apk"
        }
        pc.da("1000120001", n);
        setTimeout(function() {
            location.href = mc(b)
        },
        50);
        return n
    }
    function qc() {
        var a = navigator.connection,
        b, c = "";
        a && (b = a.type, b == a.CELL_2G ? c = "2g": b == a.CELL_3G ? c = "3g": b == a.WIFI && (c = "wifi"));
        return c
    }
    var rc = n;
    function sc() {
        var a = n;
        if (t) if (!Mb && !Nb && r.match(/(M9|M032) Build/i)) a = f;
        else if (r.match(/Mac OS X/i) && !Mb) {
            var b = q.screen.width,
            c = q.screen.height;
            if (640 == b || 960 == b || 320 == b && 410 == c || 410 == b && 320 == c) a = f
        }
        rc = a;
        sc = function() {
            return rc
        };
        return a
    }
    function tc() {
        return q.scrollTo(0, lc() + 1)
    }
    function uc(a) {
        a = a || "";
        if ( - 1 < a.indexOf(".mp4") && (A("src") || B("src"))) a = a.replace("plat=17", "plat=3");
        return a
    }
    function vc() {
        var a = 1;
        ha && (a = 2);
        ia && (a = 3);
        t && (a = 5, /tv/i.test(r) && (a = 6));
        ga && (a = 4);
        ma && (a = 7);
        ka && (a = 8);
        qa && (a = 9);
        return a
    }
    function wc(a, b) {
        var c = v("a[href],form", a),
        d = c.length,
        e,
        g;
        for (b = b || Va; d--;) if (e = c.get(d), g = e.href, !g || !g.match(/^(sms|tel|mail)/i)) a: {
            g = b;
            e = v(e);
            var h = e.get(0),
            k = h.search,
            m = k || "",
            s = aa,
            x = aa;
            if (!k) {
                var y = aa,
                C = h.nodeName;
                if ("FORM" == C) if ("post" == h.method.toLowerCase()) y = G(e, "action") || location + "";
                else {
                    for (s in g) x = g[s],
                    (h = v('input[name="' + s + '"]', e)) ? pb(h, x) : e.append(v('<input type="hidden" name="' + s + '" value="' + x + '" />'));
                    break a
                } else y = G(e, "href") || location + "";
                var u = y.indexOf("?"),
                H = y.indexOf("#"); - 1 == H && (H = y.length);
                0 > u || u > H ? (m = "", u = H) : m = y.slice(u + 1, H)
            }
            var m = Ta(m),
            L = [];
            for (s in g) m[s] = g[s];
            for (s in m) x = m[s],
            L.push(s + (x ? "=" + encodeURIComponent(x) : ""));
            1 > L.length || (g = "?" + L.join("&"), k ? h.search = g: G(e, "FORM" == C ? "action": "href", y.slice(0, u) + g + y.slice(H)))
        }
    }
    v().d(function() {
        var a = "clientType clientVer actionVer plat startClient useVideoLink r player f".split(" "),
        b,
        c = Ta(location.search.substring(1)),
        d = {},
        e = 0;
        O && a.push("channeled");
        for (var g = a.length; g--;) b = a[g],
        c.hasOwnProperty(b) && (d[b] = c[b], e++);
        Va = d;
        0 < e && (wc(p, d), Pa("DOM.html", wc))
    });
    var xc = function() {
        function a() {
            var a;
            a = ["ppinf", "ppinfo", "passport"];
            var e, g, h;
            e = 0;
            for (g = a.length; e < g; e++) if ((h = RegExp("\\b" + a[e] + "\\b=(.*?)(?:$|;)").exec(p.cookie)) && h.length) {
                h = h[1];
                break
            }
            a = h;
            e = b;
            if (c != a) {
                e = c = a;
                a = "";
                try {
                    if (e = unescape(e).split("|"), "1" == e[0] || "2" == e[0]) {
                        var k = e[3];
                        e = [];
                        var m, s;
                        g = "";
                        m = 0;
                        for (s = k.length; m < s; m += 4) {
                            var x;
                            a: {
                                var y = k.substr(m, 4);
                                h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
                                for (var C = 0,
                                u = y.length,
                                H = ""; C < u; C++) {
                                    for (var L = 0; 64 > L; L++) if (y.charAt(C) == h[L]) {
                                        var Ya = L.toString(2),
                                        H = H + ("000000" + Ya).substr(Ya.length);
                                        break
                                    }
                                    if (64 == L) {
                                        x = 2 == C ? H.substr(0, 8) : H.substr(0, 16);
                                        break a
                                    }
                                }
                                x = H
                            }
                            g += x
                        }
                        m = 0;
                        for (s = g.length; m < s; m += 8) {
                            k = 0;
                            x = 128;
                            for (y = 0; 8 > y; y++, x /= 2)"1" == g.substr(m, 8).charAt(y) && (k += x);
                            e += String.fromCharCode(k)
                        }
                        m = e;
                        var da, P, Y, Ha, E, ea, fa, V, ya;
                        da = [];
                        Ha = m.length;
                        for (P = Y = 0; P < Ha;) {
                            E = m.charCodeAt(P++);
                            switch (E >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                da[Y++] = m.charAt(P - 1);
                                break;
                            case 12:
                            case 13:
                                ea = m.charCodeAt(P++);
                                da[Y++] = String.fromCharCode((E & 31) << 6 | ea & 63);
                                break;
                            case 14:
                                ea = m.charCodeAt(P++);
                                fa = m.charCodeAt(P++);
                                da[Y++] = String.fromCharCode((E & 15) << 12 | (ea & 63) << 6 | fa & 63);
                                break;
                            case 15:
                                switch (E & 15) {
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                    ea = m.charCodeAt(P++);
                                    fa = m.charCodeAt(P++);
                                    V = m.charCodeAt(P++);
                                    ya = (E & 7) << 18 | (ea & 63) << 12 | (fa & 63) << 6 | (V & 63) - 65536;
                                    0 <= ya && 1048575 >= ya ? da[Y] = String.fromCharCode(ya >>> 10 & 1023 | 55296, ya & 1023 | 56320) : da[Y] = "?";
                                    break;
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                    P += 4;
                                    da[Y] = "?";
                                    break;
                                case 12:
                                case 13:
                                    P += 5,
                                    da[Y] = "?"
                                }
                            }
                            Y++
                        }
                        a = da.join("")
                    }
                } catch(Sb) {}
                da = {};
                P = (a || "").split("|");
                Y = 0;
                for (Ha = P.length; Y < Ha; Y++) E = P[Y].split(":"),
                1 < E.length && (da[E[0]] = E[2]);
                b = e = da
            }
            return e
        }
        var b = {},
        c;
        return {
            k: function() {
                return a().userid || ""
            },
            q: function() {
                return a().uid || ""
            },
            ia: function() {
                return a().uuid || ""
            },
            ha: function() {
                return a().uniqname || ""
            }
        }
    } (),
    S = function() {
        var a = q.screen,
        b = Math.floor(a.width * Ca) + "x" + Math.floor(a.height * Ca),
        c = xc.k(),
        d = "",
        e = "";
        ja ? (e = "ios", ha ? d = "ipad": ia && (d = "iphone")) : t ? d = e = "android": ka && (d = e = "windowsphone");
        return {
            q: function() {
                return B("SUV") || ""
            },
            z: function() {
                return b
            },
            k: function() {
                return c
            },
            u: function() {
                return e
            },
            w: function() {
                return d
            },
            e: function(a) {
                return (q.VideoData || {})[a] || ""
            },
            N: function() {
                return qc()
            }
        }
    } ();
    function R(a, b, c) {
        b = b || G(a, "position") || "";
        c = c || a && G(a, "details") || "";
        a = {
            t: +new Date,
            uid: S.q(),
            position: b,
            op: "click",
            details: c,
            nid: S.e("nid"),
            url: location.href,
            refer: p.referrer,
            screen: S.z(),
            os: S.u(),
            platform: S.w(),
            passport: S.k()
        };
        Ub("/z.m.tv.sohu.com/h5_cc.gif?" + Wa(v(), a))
    }
    var yc = "pushState" in history,
    zc = n,
    Ac = 1,
    Bc = [],
    Cc = {},
    Dc = l,
    Ec = l,
    Fc = l,
    Gc = l,
    Hc = l,
    Ic = l,
    Jc = "/api/search2/album.json",
    Kc = "",
    Lc = {
        101 : "1002",
        106 : "1003",
        100 : "1004",
        115 : "1005",
        122 : "1006",
        112 : "1007",
        9004 : "1008",
        107 : "1009",
        121 : "1010",
        165 : "1014",
        166 : "1014",
        167 : "1014",
        168 : "1014"
    };
    function Mc() {
        if (! (1 > Dc.length)) if (l === Ic) Ic = location.href;
        else {
            location.pathname.match(/\/[^\/]+\/(.+)/);
            var a = Ta(location.search);
            if (zc && !a.cat) {
                var b = D(v(".row[search_name=cat] a"), 0);
                0 < b.length && (b = G(b, "search_key").split("/"), 0 < b.length && (a.cat = b[1]))
            }
            Hc = l;
            Ac = 1;
            Cc = v().extend({},
            a);
            Nc();
            Oc(f)
        }
    }
    function Pc() {
        if (yc) {
            var a, b, c = [],
            d = location.pathname.match(/\/[^\/\?]+/)[0];
            for (a in Cc) b = Cc[a],
            "" !== b && c.push(a + "=" + Cc[a]);
            a = (location.origin || "") + d + "?" + c.join("&");
            a !== location.href && (history.pushState(l, p.title, a), Ic = a)
        }
    }
    function Qc() {
        var a = v(".filter_wrap"),
        b = Rc;
        J(a, "filter_open") ? (t || I(b, {
            webkitTransform: ""
        }), M(a, "filter_open"), K(Sc, "white_button"), Nc()) : (K(a, "filter_open"), a = b.height() + 150, t || I(b, {
            top: -a,
            webkitTransform: "translate3d(0," + a + "px,0)"
        }))
    }
    function Nc() {
        var a = v(".filter_wrap");
        M(v("a", a), "c");
        var b = v().extend({
            o: "-1"
        },
        Cc);
        z(v("div[search_name]", a),
        function(a) {
            a = G(v(a), "search_name");
            K(v('a[search_key="' + (a + "/" + (b[a] || "")) + '"]'), "c")
        })
    }
    function Tc() {
        var a = {},
        b = [];
        z(v(".c[search_key]"),
        function(c) {
            c = v(c);
            var d = G(c, "search_key").split("/");
            a[d[0]] = d[1];
            "" !== d[1] && "o" !== d[0] && b.push(F(c).replace(/<.*>/, ""))
        });
        Bc = b;
        Cc = v().extend({},
        a);
        return a
    }
    function Uc(a) {
        Hc && M(Hc, "loading");
        Hc = a
    }
    function Vc() {
        var a = v(this),
        b = J(a, "o");
        J(a, "c") || (M(v(".c", a.parent()), "c"), K(a, "c"), b || M(Sc, "white_button"));
        if (768 <= q.innerWidth || b) Uc(a),
        Ac = 1,
        Oc();
        return n
    }
    function Wc() {
        J(v(this), "white_button") || (Uc(v(".filter_handle em")), Ac = 1, Oc(), Qc());
        return n
    }
    function Xc() {
        Uc(Fc);
        Ac++;
        Oc();
        return n
    }
    function Oc(a) {
        var b = Tc(),
        c = {
            cateCode: G(v(p.body), "cate_code") || "",
            pageSize: 15,
            page: Ac,
            o: "-1"
        };
        if (zc) {
            var d = b.cat || "",
            e = [];
            d && (e = d.split("_"), 0 < e.length && (d = e[0]), 3 < d.length && (d = d.slice(0, 3)));
            c.c = d;
            c.cateCode = d
        } else c.c = 2;
        b = v().extend(v().extend(c, Kb), b);
        b = Jc + "?" + Wa(v(), b);
        v().get(b, {
            i: function() {
                Hc && kc(K(Hc, "loading"))
            },
            f: function() {
                Hc && M(Hc, "loading")
            },
            j: Yc
        });
        a || Pc()
    }
    function Yc(a) {
        var b = (a = a.data || a) && a.videos,
        c = b && b.length || 0,
        d = [],
        e = Bc.join(" "),
        g = G(v(p.body), "cate_code");
        if (g && (g = Lc[g])) var h = "12" + g + (1 < Ac ? "0200": "0100");
        F(v(".filter_handle b"), e || "\u7b5b\u9009");
        p.title = (F(v(".channel_nav .c")) || "") + (e ? ": " + e: "") + " - \u641c\u72d0\u89c6\u9891";
        if (0 < c) {
            for (var e = 0,
            k; e < c; e++) k = b[e],
            g = Kc + "/v" + k.vid + ".shtml",
            h && (g += "?channeled=" + h),
            d.push("<dd>", '<a href="' + g + '" class="cover">', '<b style="background-image:url(' + (7 != k.cid && k.ver_big_pic || k.video_big_pic || "") + ')"></b>', "</a>", "<p>", '<a href="' + g + '">' + k.tv_name + "</a>", "<span>" + k.tip + "</span>", "</p>", "</dd>");
            rb(M(Dc, "blank_list"), "has_more", a.count > 15 * Ac)
        } else M(K(Dc, "blank_list"), "has_more");
        d = '<dl class="' + G(Gc, "class") + '">' + d.join("") + "</dl>";
        1 == Ac ? F(Ec, d) : Ec.append('<h1 class="cate_title">\u7b2c' + Ac + "\u9875</h1>" + d)
    }
    var Rc, Sc;
    v().d(function() {
        Dc = v(".channel_page .channel_list_wrap");
        Ec = v(".item_list_wrap");
        Gc = v(".item_list", Ec);
        if (0 < v(".filter_handle").a("click", Qc).length) {
            Tc();
            var a = Bc.join(" ");
            F(v(".filter_handle b"), a || "\u7b5b\u9009");
            Rc = v(".category_list_wrap");
            Sc = v(".button", Rc).a("click", Wc);
            z(v("a[search_key]"),
            function(a) {
                a.setAttribute("href", "#" + a.getAttribute("href"))
            }).a("click", Vc)
        }
        0 < Dc.length && (Fc = v(".more", Dc).a("click", Xc), yc && vb("popstate", q, Mc), J(v(p.body), "sports_page") && (Jc = "/h5/sportscat", Kc = "/m.s.sohu.com", zc = f))
    });
    var Zc = n,
    $c = 1,
    ad = 0;
    function bd() {
        var a = Storage("hot");
        a && 108E5 > +new Date - a.time ? kd(a) : (a = v().extend(Kb, {
            n: 10,
            plat: 3
        }), a = "/api/searcher/hot.json?" + Wa(v(), a), v().get(a, {
            j: kd
        }))
    }
    function kd(a) {
        var b = a && a.data,
        c = b && b.hotList || [],
        d = c.length,
        b = ['<div class="hot_wrap">'],
        e,
        g = v(p.body);
        if (0 < d) {
            var h = "1211040200";
            J(g, "search_page") && (h = "1211040100");
            for (var k = 0; k < d; k++) e = c[k].tv_name,
            b.push('<a href="search.php?wd=' + encodeURIComponent(e) + "&channeled=" + h + '">' + e + "</a>");
            a.time = +new Date;
            Storage("hot", a);
            b.push("</div>");
            a = v("nav");
            0 < a.length ? hb(a, b.join("")) : ib(v(".body_wrap"), b.join(""));
            K(g, "show_hot")
        }
    }
    function ld(a) {
        v("a", a).a("click",
        function() {
            var a = v(this);
            if (!J(a, "more") && !J(a, "item") && (R(l, "search_click"), "_blank" !== G(a, "target"))) return setTimeout(function() {
                location.href = G(a, "href")
            },
            50),
            n
        })
    }
    function md() {
        J(nd, "loading") || ($c++, od());
        return n
    }
    function od() {
        var a = v().extend({
            key: Xa("wd") || "",
            pageSize: 15,
            page: $c,
            o: "0"
        },
        Kb),
        a = "/api/search2/keyword/video.json?" + Wa(v(), a);
        v().get(a, {
            i: function() {
                kc(K(nd, "loading"))
            },
            f: function() {
                M(nd, "loading")
            },
            j: pd
        })
    }
    function pd(a) {
        var b = (a = a && a.data && a.data.videos) && a.length || 0,
        c = [],
        d = v(".search_page .channel_list_wrap"),
        e = v(".search_page .item_list_wrap");
        if (0 < b) for (var g = 0,
        h, k; g < b; g++) k = a[g],
        h = "/v" + k.vid + ".shtml",
        c.push("<dd>", '<a href="' + h + '" class="cover">', '<b style="background-image:url(' + (k.hor_big_pic || k.video_big_pic || "") + ')"></b>', "</a>", "<p>", '<a href="' + h + '">' + k.tv_name + "</a>", "<span>" + k.tip + "</span>", "</p>", "</dd>");
        rb(d, "has_more", ad > 15 * $c);
        c = '<dl class="item_list">' + c.join("") + "</dl>";
        1 == $c ? F(e, c) : (e.append('<h1 class="cate_title">\u7b2c' + $c + "\u9875</h1>"), a = kb(v(c), e), ld(a))
    }
    var nd;
    v().d(function() {
        var a = v(p.body),
        b = v("#top_search").a({
            blur: function() {
                setTimeout(function() {
                    n === Zc && M(a, "search_actived");
                    Zc = n
                },
                200)
            }
        });
        pb(b) || pb(b, F(v(".search_word")));
        var c = v(".search").a({
            submit: function() {
                var a = encodeURIComponent(pb(b));
                Zc = f;
                if ("" !== a.trim()) R(l, "search_submit"),
                setTimeout(function() {
                    location.href = Pb + "search.php?wd=" + a
                },
                50);
                else return Db(Db(b, "focus"), "click"),
                n
            },
            click: function() {
                if ((ia || na) && !J(a, "search_page")) return location.href = Pb + "/so",
                n;
                J(a, "search_actived search_page") || (M(K(a, "search_actived"), "history_open"), Db(Db(b, "focus"), "click"))
            }
        });
        v(".white_button", c).a("click",
        function() {
            M(a, "search_actived");
            return n
        });
        var d = v(".video_src span").a("click",
        function() {
            var a = v(this);
            if (!J(a, "c")) {
                var b = a.parent().parent();
                M(v(".s_l", b), "c");
                var c = K(v(".s_l_" + G(a, "src_id"), b), "c"),
                k = v("a", c),
                c = G(k, "href"),
                k = G(k, "target") || "_self";
                G(G(v(".cover,p a", b), "href", c), "target", k);
                M(d, "c");
                K(a, "c")
            }
        });
        nd = v(".search_page .more").a("click", md.bind(q));
        ad = parseInt(F(v(".search_count")) || 0, 10);
        0 < nd.length ? ld(v(".body_wrap")) : kb(v('<div class="mask search_mask"></div>'), a).a("click",
        function() {
            M(a, "history_open search_actived")
        });
        0 < c.length && !(J(a, "search_page") && 0 < v(".search_album_list,.grid_list").length) && bd()
    });
    A("ht");
    var qd, rd = n,
    U = Storage("history") || [],
    W = Storage("watch_later") || [],
    sd = 0,
    td = 0,
    ud = [];
    function vd(a) {
        for (var b = n,
        c = W.length,
        d = 0; d < c; d++) {
            var e = W[d];
            if (e[0] == a.sid) {
                c = 0;
                for (d = e[1].length; c < d; c++) if (e[1][c][0] == a.vid) {
                    b = f;
                    break
                }
                break
            }
        }
        return b
    }
    function wd() {
        var a = q.VideoData;
        if (a) {
            var b = a.sid,
            c = a.vid,
            d = [],
            d = [],
            e = {
                date: +new Date,
                sid: b || "",
                vid: c || "",
                cid: a.cid || "",
                videoCount: a.videoCount || 0,
                time: td || xd.currentTime() || 0,
                title: a.tv_name || "",
                cover: a.video_cover || "about:blank",
                url: "/v" + c + ".shtml"
            },
            a = v(this),
            g = W.length;
            if (J(a, "watch_later_menu_open")) M(a, "watch_later_menu_open");
            else if (9 < g || J(a, "watch_later_icon_done")) K(a, "watch_later_menu_open");
            else {
                K(a, "watch_later_icon_done");
                for (var h = 0; h < g; h++) {
                    var k = W[h];
                    if (k[0] == b) {
                        d = W.splice(h, 1);
                        d = 0;
                        for (g = k[1].length; d < g; d++) if (k[1][d][0] == c) {
                            k[1].splice(d, 1);
                            break
                        }
                        d = k[1];
                        break
                    }
                }
                d = [[c, e]].concat(d).slice(0, 10);
                W = [[b, d, +new Date]].concat(W).slice(0, 20);
                Storage("watch_later", W);
                R(l, "link_mark");
                var b = G(v('meta[property="og:image"]'), "content"),
                m = v(".watch_later_flier");
                1 > m.length && (m = kb(v('<div class="watch_later_flier" style="background-image:url(' + b + ')"></div>'), p.body));
                b = a.offset().top;
                a = a.offset().left;
                c = v(".icon_history").offset().left;
                I(m, {
                    left: a + "px",
                    top: b + "px",
                    opacity: 1,
                    "-webkit-transform": "translate3d(" + (c - a - 25) + "px," + (lc() - b - 15) + "px,0) scale(0.5)"
                });
                setTimeout(function() {
                    I(m, "opacity", 0)
                },
                400);
                setTimeout(function() {
                    I(m, {
                        "-webkit-transform": "translate3d(0,0,0)",
                        left: "-1000",
                        top: "-1000"
                    });
                    yd()
                },
                500)
            }
        }
    }
    function yd() {
        F(v(".icon_history .num"), W.length + ud.length || "")
    }
    function zd() {
        for (var a = U,
        b, c = [], d = 0, e = a.length; d < e; d++) {
            b = a[d];
            var g = b[1][0][1]; - 1 < "|2|7|16|".indexOf(g.cid) && 300 < g.time && (b = b[0], c.push(b))
        }
        0 < c.length ? (a = Storage("album_update")) && 36E5 > +new Date - a.time ? Ad(a) : v().D("/api/v4/album/batch/latest.json", {
            data: {
                aids: c.join(","),
                api_key: "695fe827ffeb7d74260a813025970bd5"
            },
            ga: Ad
        }) : yd()
    }
    function Ad(a) {
        a = a || {};
        for (var b = a.data || [], c, d = 0, e = b.length, g = [], h = [], k, m = v().copy(U), s = m.length, x; d < e; d++) if (c = b[d], k = c.aid + "", 0 > h.indexOf(k)) {
            for (x = 0; x < s; x++) {
                for (var y = m[x], C = y[0], u = y[1], H = 0, L = u.length; H < L; H++) u[H][1].latest_video_count = c.latest_video_count;
                if (k == C) if (C = c.show_date) {
                    if (C = C.replace("-", ""), u = u[0][1].date || 0) L = new Date(u),
                    u = L.getFullYear(),
                    H = L.getMonth(),
                    L = L.getDate(),
                    10 > H && (H = "0" + H),
                    10 > L && (L = "0" + L),
                    parseInt(u + "" + H + "" + L, 10) < parseInt(C, 10) && (y[3] = 1, g.push(y))
                } else c.latest_video_count > parseInt(u[0][1].videoCount, 10) && (y[3] = 1, g.push(y))
            }
            h.push(k)
        }
        a.time = +new Date;
        Storage("album_update", a);
        U = m;
        ud = g;
        yd()
    }
    function Bd(a, b) {
        var c = +new Date;
        if (! (5E3 > c - sd && 5 > Math.abs(b - td)) && (sd = c, td = b, !("undefined" !== typeof b && 0 == b) && a)) {
            for (var c = a.sid,
            d = a.vid,
            e = [], g = [], h = {
                date: +new Date,
                sid: c || "",
                vid: d,
                cid: a.cid,
                videoCount: a.videoCount || 0,
                time: b || 0,
                title: a.tv_name || "",
                cover: a.video_cover || "about:blank",
                url: "/v" + d + ".shtml"
            },
            k = 0, m = U.length; k < m; k++) if (e = U[k], e[0] == c) {
                U.splice(k, 1);
                k = 0;
                for (g = e[1].length; k < g; k++) if (e[1][k][0] == d) {
                    e[1].splice(k, 1);
                    break
                }
                g = e[1];
                break
            }
            e = [[d, h]].concat(g).slice(0, 40);
            U = [[c, e, +new Date]].concat(U).slice(0, 50);
            Storage("history", U);
            h = W.length;
            for (k = 0; k < h; k++) if (e = W[k], e[0] == c) {
                k = 0;
                for (g = e[1].length; k < g; k++) if (e[1][k][0] == d) {
                    e[1][k][1].time = b;
                    break
                }
                break
            }
            Storage("watch_later", W)
        }
    }
    function Cd(a) {
        a || (a = "history");
        var b = Storage(a) || [];
        "watch_later" === a && (b = b.concat(ud));
        for (var c = [], d = 0, e = b.length, g, h, k, m, s = l, x, y = new Date, C = y.getFullYear() + "-" + y.getMonth(), u; d < e; d++) {
            h = b[d][0];
            g = b[d][1];
            m = new Date(b[d][2]);
            x = m.getDate();
            k = m.getMonth();
            m = m.getFullYear();
            x == y.getDate() && C == m + "-" + k ? x = "\u4eca\u5929": (x = k + "-" + x, m !== y.getFullYear() && (x = m + "-" + x));
            "history" === a && s !== x && c.push("<time>" + x + "</time>");
            c.push('<dl class="item_list' + (1 === b[d][3] ? " updated": "") + '">');
            s = "";
            s = "watch_later" === a ? 1 === b[d][3] ? "1211050002": "1211050001": "1211050003";
            for (k = g.length; 0 < k;) {
                k = g[0][1];
                m = k.time || 0;
                u = k.vid;
                cid = k.cid;
                m = 60 < m ? "\u5df2\u64ad\u653e: " + hc(m) : "\u64ad\u653e\u4e0d\u52301\u5206\u949f";
                g = "/v" + u + ".shtml?channeled=" + s;
                c.push("<dd>", '<a sid="' + h + '" vid="' + u + '" cid="' + cid + '" channeled="' + s + '" href="' + g + '" class="cover">', '<b style="background-image:url(' + (k.cover || "about:blank") + ')"></b>', "</a>", "<p>", '<a sid="' + h + '" vid="' + u + '" cid="' + cid + '" channeled="' + s + '" href="' + g + '">' + k.title + "</a>", "<span>" + m + "</span>", "</p>", '<span class="remove"><b></b></span>', "</dd> ");
                break
            }
            c.push("</dl>");
            s = x
        }
        b = F(v("." + a + "_content"), c.join(""));
        v("a", b).a("click",
        function(a) {
            a = G(v(a.currentTarget), "sid");
            Dd(a);
            Ed(a)
        });
        v(".remove", b).a("click", Fd);
        rb(v("." + a + "_wrap"), "blank_list", 1 > d)
    }
    function Dd(a) {
        for (var b = W,
        c = [], d = q.VideoData || {},
        e = 0, g = b.length; e < g; e++) {
            var h = b[e];
            h[0] != a && c.push(h)
        }
        d.sid == a && M(v(".watch_later_icon_done"), "watch_later_icon_done");
        W = c;
        Storage("watch_later", c);
        yd()
    }
    function Ed(a) {
        for (var b = v().copy(U), c = 0, d = b.length; c < d; c++) {
            var e = b[c],
            g = e[0],
            e = e[1];
            if (g == a) for (var g = 0,
            h = e.length; g < h; g++) {
                var k = e[g][1].latest_video_count;
                k && (e[g][1].videoCount = k)
            }
        }
        d = ud;
        h = d.length;
        for (c = 0; c < h; c++) if (e = d[c], g = e[0], g == a) {
            d.splice(c, 1);
            break
        }
        U = b;
        Storage("history", U)
    }
    function Fd() {
        var a = v(this).parent().parent(),
        b = a.parent(),
        c = G(v("a", a), "sid");
        I(v("dd", a), {
            "-webkit-transform": "translate3d(-" + (a.width() + 98) + "px,0,0)",
            "-webkit-transition": "-webkit-transform 200ms linear 0"
        }).a("webkitTransitionEnd",
        function() {
            a.remove();
            if (J(b, "history_content")) {
                for (var d = 0,
                e = U.length; d < e; d++) if (U[d][0] == c) {
                    U.splice(d, 1);
                    break
                }
                Storage("history", U);
                1 > U.length && (K(b.parent(), "blank_list"), Gd(".history_wrap"))
            } else J(a, "updated") ? Ed(c) : Dd(c),
            1 > v("dl", b).length && (Gd(".watch_later_wrap"), K(b.parent(), "blank_list")),
            yd()
        })
    }
    function Gd(a, b) {
        var c = v(a),
        d = v(".edit", c);
        J(c, "editing") || b ? (M(c, "editing"), K(F(d, "\u7ba1\u7406"), "white_button")) : (M(F(d, "\u5b8c\u6210"), "white_button"), M(K(c, "editing"), "clear_menu_open"))
    }
    function Hd() {
        var a = v(this).parent().parent(),
        b = J(a, "clear_menu_open");
        M(v(".watch_later_wrap"), "clear_menu_open");
        M(v(".history_wrap"), "clear_menu_open");
        rb(a, "clear_menu_open", !b);
        Gd(".watch_later_wrap", f);
        Gd(".history_wrap", f)
    }
    function Id() {
        var a = v(this).parent().parent().parent();
        M(K(a, "blank_list"), "clear_menu_open");
        if (J(a, "watch_later_wrap")) {
            Oa("watch_later");
            W = [];
            M(v(".watch_later_icon_done"), "watch_later_icon_done");
            var a = v().copy(ud),
            b = a.length;
            for (i = 0; i < b; i++) Ed(a[i][0]);
            yd()
        } else J(a, "history_wrap") && (Oa("history"), U = [])
    }
    function Jd(a, b) {
        for (var c = a && a.target; ! b && p !== c && p.body !== c;) {
            if (J(v(c), "clear_menu clear edit")) return;
            c = c.parentNode
        }
        M(v(".watch_later_wrap"), "clear_menu_open");
        M(v(".history_wrap"), "clear_menu_open")
    }
    function Kd(a, b) {
        for (var c = a && a.target; ! b && p !== c && p.body !== c;) {
            if (J(v(c), "watch_later_icon")) return;
            c = c.parentNode
        }
        M(v(".watch_later_icon"), "watch_later_menu_open")
    }
    function Ld() {
        var a = q.VideoData;
        if (a) for (var b = a.sid,
        a = a.vid,
        c = 0,
        d = U.length; c < d; c++) {
            var e = U[c];
            if (e[0] == b) {
                b = 0;
                for (c = e[1].length; b < c && e[1][b][0] != a; b++);
                break
            }
        }
    }
    v().d(function() {
        qd = v(p.body);
        Ld();
        Pa("playerOnStart", Bd);
        Pa("playerOnUnLoad", Bd);
        Pa("playerOnTimeupate", Bd);
        var a = F(v('<div class="history_wacth_later_wrap">').insertBefore(v(".body_wrap")), '<div class="watch_later_wrap"><div class="title"><span class="button white_button edit">\u7ba1\u7406</span><span class="button white_button clear">\u6e05\u7a7a</span><span>\u7a0d\u540e\u89c2\u770b</span><div class="clear_menu"><span class="button">\u6e05\u7a7a</span></div></div><div class="blank_tip">\u6ca1\u6709\u7a0d\u540e\u89c2\u770b</div><div class="watch_later_content"></div></div><div class="history_wrap"><div class="title"><span class="button white_button edit">\u7ba1\u7406</span><span class="button white_button clear">\u6e05\u7a7a</span><span>\u64ad\u653e\u8bb0\u5f55</span><div class="clear_menu"><span class="button">\u6e05\u7a7a</span></div></div><div class="blank_tip">\u6ca1\u6709\u64ad\u653e\u8bb0\u5f55</div><div class="history_content"></div></div>');
        v(".clear", a).a("click", Hd);
        v(".clear_menu .button", a).a("click", Id);
        v(".clear_menu .button", a).a("click", Id);
        v(p).a("click", Jd).a("click", Kd);
        v(".watch_later_wrap .edit", a).a("click",
        function() {
            Gd(".watch_later_wrap")
        });
        v(".history_wrap .edit", a).a("click",
        function() {
            Gd(".history_wrap")
        });
        a = v(".icon_history").a("click",
        function() {
            rb(qd, "history_open");
            if (rd = J(qd, "history_open")) M(qd, "search_actived"),
            Cd("watch_later"),
            Cd("history"),
            R(l, "link_toptip")
        });
        0 < a.length && (kb(v('<div class="mask history_mask"></div>'), qd).a("click",
        function() {
            M(qd, "history_open search_actived");
            rd = n

        }), 1 > v(".num", a).length && v("span", a).append('<b class="num"></b>'), zd());
        q.VideoData && jb(v('<div class="watch_later_icon">\u7a0d\u540e\u89c2\u770b<div class="watch_later_notice_menu"><span class="tip_1">\u60a8\u5df2\u7ecf\u8bb0\u5f55\u8d85\u8fc710\u4e2a\u89c6\u9891\u4e86\uff0c\u8bf7\u5148\u89c2\u770b\u5427</span><span class="tip_2">\u60a8\u5df2\u7ecf\u6dfb\u52a0\u8fc7\u6b64\u89c6\u9891\u4e86</span></div></div>')).a("click", wd)
    });
    var Md = B("SUV"),
    Nd = B("IPLOC");
    if (!Md || !Nd) {
        var Od = 1E3 * +new Date + Math.round(1E3 * Math.random());
        Md || Za("SUV", Od, 5E4, ".sohu.com");
        Nd || Q("//pv.sohu.com/suv/" + Od)
    }
    v().d(function() {
        var a = {};
        try {
            a = {
                url: location.href,
                refer: p.referrer,
                uid: S.q(),
                webtype: "",
                screen: S.z(),
                catecode: S.e("cateCode"),
                pid: S.e("plid"),
                vid: S.e("vid"),
                os: S.u(),
                platform: S.w(),
                passport: S.k(),
                t: +new Date,
                channeled: A("channeled") || ""
            }
        } catch(b) {}
        Ub("/z.m.tv.sohu.com/pv.gif?" + Wa(v(), a))
    });
    O || (q._iwt_UA = "UA-sohu-123456", Q("/tv.sohu.com/upload/Trace/iwt-min.js"), Q("/js.mail.sohu.com/pv/pv_tv.1107251650.js"), Q(("https:" == p.location.protocol ? "https://sb": "/b") + ".scorecardresearch.com/beacon.js",
    function() {
        "undefined" !== typeof q.COMSCORE && q.COMSCORE.beacon({
            c1: "2",
            c2: "7395122",
            c3: "",
            c4: "",
            c5: "",
            c6: "",
            c15: ""
        })
    }), "m.s.sohu.com" === location.host ? v().d(function() {
        Q("/js.sohu.com/wrating20120726.js",
        function() {
            var a;
            try {
                a = q._getAcc()
            } catch(b) {}
            a && Q("/sohu.wrating.com/a1.js",
            function() {
                q.vjAcc = a;
                q.wrUrl = "/sohu.wrating.com/";
                try {
                    if (f === q.vjValidateTrack()) {
                        var b = q.wrUrl + "a.gif" + q.vjGetTrackImgUrl();
                        v(p.body).append('<div style="display:none"><img src="' + b + '" id="wrTagImage" /></div>');
                        q.vjSurveyCheck()
                    }
                } catch(d) {}
            })
        })
    }) : Q("/tv.sohu.com/upload/Trace/wrating.js"));
    var Pd = +new Date,
    Qd = +new Date,
    Rd = n;
    function Sd() {
        var a = 44,
        b = q.VideoData,
        c = "";
        ha ? (a = 4, c = "1h5") : ia ? (a = 41, c = "3h5") : t ? (a = 42, c = "6h5") : ka ? (a = 43, c = "11h5") : oa && (a = 43);
        Td = c;
        Ud = a;
        Vd = (0.5 < Math.random() ? "qf1": "qf2") + ".hd.sohu.com.cn";
        Wd = l !== A("r") && b ? "/sptjs1.hd.sohu.com.cn/h5/tttst.html": "/qc.hd.sohu.com.cn/caton/video/";
        Rd = f
    }
    function Xd(a) {
        n === Rd && Sd();
        if ("1h5" != Td) {
            var b = "",
            c = "",
            d = q.VideoData,
            e = q.VideoData.video_src || "";
            ja ? b = 1 : t ? b = 2 : ka && (b = 3);
            ha ? c = "ipad": /iPod/i.test(r) ? c = "ipod": ia ? c = "iphone": ka && (c = "windowsphone");
            var g = "";
            e.match(/\.m3u8/i) ? g = "m3u8": e.match(/\.mp4/i) && (g = "mp4");
            a += ["&uid=", B("SUV") || "", "&poid=&plat=", Td, "&sver=&os=", b, "&sysver=", Vb(), "&net=", S.N(), "&playmode=&vid=", d.vid || "", "&sid=", d.sid || "", "&vtype=", g, "&pn=", c, "&duFile=", encodeURIComponent(e), "&version=", q.VideoData.videoVersion || 0, "&isp2p=0&ltype=0&time=", +new Date].join("");
            Ub(Wd + "?" + a)
        }
    }
    function Yd(a) {
        n === Rd && Sd();
        var b = q.VideoData;
        a += ["&seekto=0&pt=", Ud, "&sid=", B("SUV") || "", "&vid=", b.vid || "", "&nid=&ref=", encodeURIComponent(location.href), "&dom=&t=", Pd++].join("");
        Ub("/" + Vd + "/dov.do?method=stat" + a)
    }
    function Zd(a, b) {
        var c = q.CONFIG,
        c = c && c.videoTrans;
        a = v().extend({
            url: location.href,
            refer: p.referrer,
            uid: S.q(),
            webtype: S.N(),
            screen: S.z(),
            catecode: S.e("cateCode"),
            pid: S.e("plid"),
            vid: S.e("vid"),
            cateid: S.e("cid"),
            ltype: S.e("ltype"),
            company: S.e("company"),
            version: "0",
            type: "9001" == S.e("cid") ? "my": "vrs",
            td: S.e("duration"),
            apikey: "695fe827ffeb7d74260a813025970bd5",
            trans: c || "",
            _smuid: B("_smuid") || "-",
            t: +new Date,
            os: S.u(),
            platform: S.w(),
            passport: S.k(),
            channeled: A("channeled") || "",
            playid: Qd
        },
        a);
        Ub((b || "/z.m.tv.sohu.com/vv.gif") + "?" + Wa(v(), a))
    }
    function $d() {
        Yd("&error=0&code=2&allno=0&vvmark=1&totTime=" + q.VideoData.duration);
        Ub("/b.scorecardresearch.com/b?c1=1&c2=7395122&c3=&c4=&c5=&c6=&c11=" + (B("SUV") || ""));
        Zd({
            msg: "playCount",
            time: "0"
        });
        Qd = +new Date;
        Xd("code=10&duation=0")
    }
    function ae(a) {
        a = a ? ( + new Date - a) / 1E3: 0;
        Zd({
            msg: "videoStart",
            time: ( + new Date - Qd) / 1E3
        });
        Xd("code=5&duation=" + a)
    }
    function be(a, b) {
        Zd({
            msg: "videoEnds",
            time: a
        });
        Xd("code=7&duration=" + a + "&ct=" + b)
    }
    var Td, Ud, Vd, Wd, X;
    X = {
        B: [],
        status: 1,
        h: 0,
        fa: 0,
        l: n,
        J: l,
        R: [],
        A: function() {
            return q.getAdsCallback = X.Z
        },
        load: function(a, b) {
            var c, d, e, g, h, k, m, s, x, y;
            X.J = b;
            if (!ja && !ta) return X.loaded();
            g = "h3";
            h = "iphone";
            t && (g = "h5", h = "androidphone");
            ga && (g = "h16", h = "androidpad");
            ha && (h = "ipad"); (c = a.cateCode || a.cid || "") && c.indexOf(";" > -1) && (c = c.replace(/.*?;/, ""));
            k = Vb();
            x = c;
            y = a.vid || "";
            s = a.tvid || "";
            e = a.duration || 0;
            c = a.plid || a.sid || "";
            d = a.areaId || 0;
            m = B("MUV") || "";
            return Q("/m.aty.sohu.com/h?" + ["callback=getAdsCallback&", "plat=" + g + "&", "sysver=" + k + "&", "pn=" + h + "&", "pt=oad&cat=1&", "al=" + c + "&", "vid=" + y + "&", "tvid=" + s + "&", "c=tv&", "du=" + e + "&", "ar=" + d + "&", "ag=&st=&", "vc=" + x + "&", "json=std&", "tuv=" + m + "&", "vu=&", "pageUrl=" + location.href + "&", "_t=" + +new Date].join(""))
        },
        Z: function(a) {
            var b, c, d, e, g, h;
            if (b = a && a.data) {
                e = b.oad;
                Array.isArray(e) || (e = [e]);
                c = [];
                b = 0;
                X.B = e;
                X.status = a.status || 1;
                g = 0;
                for (h = e.length; g < h; g++) d = e[g],
                a = d.vid,
                d = d.duration,
                a && c.push(a),
                b += Number(d);
                isNaN(b) || (X.h = b);
                if ((b = q.VideoData) && 1 === X.status) return b.urls.m3u8 = b.urls.m3u8.map(function(a) {
                    return a && a + ("" + (a.indexOf("?" > -1) ? "&": "?") + "ads=" + c.join(","))
                }),
                X.Y(),
                X.loaded()
            } else return (2 < ++X.fa ? X.loaded: X.ja)()
        },
        Y: function() {

            var a, b, c, d, e, g, h, k, m, s;
            b = X.B;
            e = [];
            d = k = g = 0;
            for (c = b.length; k < c; d = ++k) {
                a = b[d];
                0 !== d && (g += Number(b[d - 1].duration || 0));
                a.pingback && e.push([g, a.pingback]);
                h = a.pingbacks || [];
                if (0 < h.length) {
                    m = 0;
                    for (s = h.length; m < s; m++) d = h[m],
                    d.v && e.push([g + d.t, d.v])
                }
                a.finishedstatistics && e.push([g + a.duration, a.finishedstatistics])
            }
            e.sort(function(a, b) {
                return a[0] - b[0]
            });
            a = -1;
            b = [];
            g = 0;
            for (k = e.length; g < k; g++) if (c = e[g], s = c[0], c = "", s !== a) {
                a = s;
                d = 0;
                for (h = e.length; d < h; d++) m = e[d],
                m[0] === s && (c += "|" + m[1]);
                c = c.substring(1);
                b.push([s, c])
            }
            return X.R = b
        },
        loaded: function() {
            X.l = f;
            return X.J(q.VideoData)
        }
    };
    X.A();
    var pc;
    function ce() {
        function a() {
            if (!A("clientType") && 1 > v(".player_message").length) {
                var a = v('<a class="player_message" position="appdownload_inplayer"><span class="button">\u4e0b\u8f7d</span>\u5982\u679c\u89c6\u9891\u65e0\u6cd5\u6b63\u5e38\u64ad\u653e\uff0c<br />\u8bf7\u70b9\u51fb\u4e0b\u8f7d\u641c\u72d0\u89c6\u9891\u5ba2\u6237\u7aef</a>').a("click", nc);
                hb(v(b), a)
            }
        }
        var b = v("#main_player"),
        c = n,
        d = n,
        e = !t && !ja && !ka && !oa && !na,
        g = n,
        h = ha || !ia,
        k = n,
        m,
        s;
        if (s = r.match(/MQQBrowser(?:\/([0-9\._]+))?/i)) s = Wb(s[1]),
        4.3 > s && (g = f);
        if (t) {
            if ((navigator.appVersion || "").match(/UC\/8\.7/i)) g = f;
            r.match(/LT26w.+ MQQBrowser/i) && (g = f)
        }
        if (! (1 > b.length)) {
            var x = function() {
                var a, c;
                if (sa)(a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) && (c = parseInt(a.GetVariable("$version").split(" ")[1].split(",")[0], 10));
                else if ((a = q.navigator.plugins) && 0 < a.length) if (a = a["Shockwave Flash"]) {
                    a = a.description.split(" ");
                    for (var d = 0,
                    e = a.length; d < e; d++) {
                        var g = parseInt(a[d], 10);
                        isNaN(g) || (c = g)
                    }
                }
                return c ? (Q("/js.tv.itc.cn/base/plugin/swfobject13072501.js",
                function() {
                    if ("9001" == m.cid) var a = new SWFObject("/share.vrs.sohu.com/my/v.swf&showRecommend=0&autoplay=true&sogouBtn=0&shareBtn=0&topBarFull=0&topBar=0&topBarNor=0&skinNum=8&topBarFull=0&id=" + m.vid + "&api_key=695fe827ffeb7d74260a813025970bd5", "sohuplayer", "100%", "100%", "9,0,115", "#000000");
                    else a = new SWFObject("/tv.sohu.com/upload/swf/20131104/Main.swf", "sohuplayer", "100%", "100%", "9,0,115", "#000000"),
                    a.addVariable("skinNum", "1"),
                    a.addVariable("pageurl", location.href),
                    a.addVariable("vid", m.vid),
                    a.addVariable("pid", m.pid),
                    a.addVariable("nid", ""),
                    a.addVariable("seekTo", "0"),
                    a.addVariable("jump", "0"),
                    a.addVariable("autoplay", "true"),
                    a.addVariable("showRecommend", "0"),
                    a.addVariable("sid", B("SUV") || ""),
                    a.addVariable("api_key", "695fe827ffeb7d74260a813025970bd5");
                    a.addParam("allowscriptaccess", "always");
                    a.addParam("allowfullscreen", "true");
                    a.flashVars = "";
                    a = a.getFlashHtml();
                    K(b, "flash_player");
                    F(v(".video", b), a)
                }), f) : n
            },
            y = Ta(location.search.substring(1));
            1 == y.startClient ? c = t: 1 == y.useVideoLink && (g = f);
            s = " poster ";
            var C = [];
            r.match(/ HTC Desire S /i) ? c = f: sc() && (g = f);
            r.match(/MI\-ONE/i) && (h = n, C.push("hide_fullscreen"));
            r.match(/MI\-ONE|GT\-I9100/i) && !r.match(/MI\-ONE Plus/i) && C.push("hide_init_video");
            Mb && r.match(/HS\-U950/i) && C.push("auto_height"); (O || r.match(/HTC S720/i)) && C.push("hide_fullscreen");
            Mb && (s += " controls ");
            t && (r.match(/Mac OS X/i) && !r.match(/ UC(Browser)?/i)) && (sc() ? g = f: (a(), k = f, C.push("show_slider_bar")));
            0 < C.length && K(b, C.join(" "));
            r.match(/MI\-ONE Plus/i) && (4 <= Vb() ? d = f: ra = n);
            d && K(v(p.body), "cover_mask_play");
            var d = v(".video", b).append("<video" + s + "></video>"),
            d = v("video", d),
            u = d.get(0),
            H = v(".poster", b),
            L = v(".duration", b),
            Ya = v(".current_time", b),
            da = v(".trackbar", b),
            P = v(".played", b),
            Y = v(".buffered", b),
            Ha = v(".button_play", b),
            E = v(".player_controls", b);
            s = v(".fullscreen", b);
            var ea = v(".video_quality", b),
            fa = n,
            V = [],
            ya = f,
            Sb = X.B || l,
            Yb = X.R,
            T = 0 < X.h,
            we = n,
            xe = 0,
            cd = kb(v('<div class="ad_timer"></div>'), b),
            dd = function() {
                function a(b) {
                    return b && b + ((b.match(/\?/) ? "&": "?") + e)
                }
                var b, c = 0,
                d = m.urls,
                e = ["vid=" + m.vid, "&uid=" + B("SUV") || "", "&plat=17", "&pt=" + vc(), "&prod=h5&pg=null&eye=0", "&cateCode=" + m.cateCode].join("");
                V = [];
                if (fa) {
                    b = uc(d.downloadUrl) || d.mp4;
                    if (b instanceof Array) for (var d = 0,
                    g = b.length; d < g; d++) {
                        if (b[d]) {
                            b = a(b[d]);
                            break
                        }
                    } else b = a(b);
                    b && (b = (b + "").split(",")[0]);
                    V.push(b)
                } else {
                    b = d.m3u8;
                    d = 0;
                    for (g = b.length; d < g; d++) if (b[d]) {
                        V.push(a(b[d]));
                        break
                    }
                    2 < V.length && (ha || 768 < q.screen.width) && V.shift();
                    2 <= V.length ? "hq" === Storage("quality") ? (K(M(ea, "video_quality_fast"), "video_quality_hq"), b = V[1], c = 21) : (M(K(ea, "video_quality_fast"), "video_quality_hq"), b = V[0], c = 1) : b = V[0]
                }
                I(ea, "display", 2 <= V.length ? "block": "none");
                q.VideoData.video_src = b;
                q.VideoData.videoVersion = c;
                return b
            },
            Uf = function(a) {
                var b = Sb.length,
                c = 0,
                d = 0;
                if (1 < b) for (var e = 0; e < b; e++) if (c += Number(Sb[e].duration || 0), c > a) {
                    d = e;
                    break
                }
                return d
            },
            ye = function() {
                ya = n;
                F(v(".message p", E), '<a href="' + q.VideoData.video_src + '">\u8bf7\u70b9\u51fb\u64ad\u653e\u89c6\u9891</a>');
                G(E, "class", "player_controls disabled show_message")
            };
            ja && 4.2 <= Vb() && (fa = n);
            if (t || ka || r.match(/BB10|BlackBerry/i)) fa = f;
            c && (fa = n); (C = A("f")) && (fa = "m3u8" !== C);
            var ed = n,
            wb = n,
            cb = 0,
            fd = 0,
            Zb = 0,
            Ra = n,
            $b = n,
            ac = n,
            xb = n,
            db = n,
            pa = n,
            bc = 0,
            la = 0,
            ze = 0,
            yb, Ja, cc, zb, Ka = 0,
            ra = f,
            gd = function(b, c) {
                setTimeout(function() {
                    ae( + new Date)
                },
                250);
                var d = "sohuvideo" + (ha ? "hd": "://"),
                e = {
                    action: 1.17,
                    vid: m.vid,
                    sid: m.sid,
                    cid: m.cid,
                    cateCode: m.cateCode,
                    ex1: 1
                };
                b && (e.more = '{"sourcedata":{"channeled":' + b + "}}");
                ja && (e = {});
                var d = d + "action.cmd",
                g = d + "?" + Ua(e).replace(/index\.html%2C/, "index.html");
                if (y.clientType || 1 == y.startClient) location.href = g;
                else {
                    1 > v("#play_in_app").length && kb(v('<iframe id="play_in_app" frameborder="0" name="play_in_app" width="0" height="0"></iframe>').a("load", c ? a: Ia), p.body);
                    var h = g = "",
                    k = "";
                    for (h in e) k = e[h],
                    aa !== k && l !== k && (g += '<input type="hidden" name="' + h + '" value="' + k + '"/>');
                    Db(kb(v('<form action="' + d + '" target="play_in_app">' + g + "</form>"), p.body), "submit")
                }
            },
            La = function(a) {
                if (c) return gd();
                O && (u.volume = 0.08);
                if (t) {
                    if (r.match(/HS\-U950|HUAWEI_C8812|vivo/i) && !Mb && !Nb) {
                        u.play();
                        try {
                            u.webkitEnterFullscreen && u.webkitEnterFullscreen(),
                            u.mozRequestFullScreen && u.mozRequestFullScreen()
                        } catch(b) {}
                    }
                    ua && (!db && r.match(/MI/i)) && Ae()
                }
                u.play();
                a && a.stopPropagation()
            },
            Ae = function(a) {
                J(b, "inline_player") && (u.play(), u.webkitEnterFullscreen && u.webkitEnterFullscreen(), u.mozRequestFullScreen && u.mozRequestFullScreen(), setTimeout(function() {
                    u.play()
                },
                0), a && a.stopPropagation())
            },
            hd = function() {
                cc && (clearTimeout(cc), cc = l)
            },
            C = function() {
                clearTimeout(yb);
                n === u.paused ? (J(b, "player_init") && (M(b, "player_init"), O && $d(), R(l, "video_play_start", JSON.stringify({
                    vid: q.VideoData.vid
                })), Xd("code=15"), Sa("playerOnStart", m)), Sa("playerOnPlay", m), (!t || h) && K(E, "loading"), h && K(H, "hidden"), T && K(b, "player_ad"), $b = Ra = db = pa = f, Ka = +new Date) : Be()
            },
            Be = function() {
                pa = Ra = n;
                M(E, "hidden loading");
                h || M(H, "hidden");
                M(Ha, "button_pause");
                K(b, "player_pause");
                Ja && (clearTimeout(Ja), Ja = l);
                F(Ya, Xb(la));
                Sa("playerOnPause", m)
            },
            id = function(a, c) {
                f == pa && Be();
                I(P, "width", 0);
                $b = ed = db = n;
                Zb = 0;
                F(Ya, Xb(0));
                0 < la && la >= u.duration - 15 && !c && (be(u.currentTime, fd), Sa("playerOnEnd", m));
                fd = la = 0;
                setTimeout(function() {
                    K(b, "player_init");
                    M(H, "hidden");
                    M(E, "hidden");
                    try {
                        u.currentTime = 0
                    } catch(a) {}
                },
                10);
                zb && (clearInterval(zb), zb = l)
            },
            Ce = function() {
                ed = f;
                n === k && (h = ha || !ia && (u.webkitSupportsFullscreen || u.mozRequestFullScreen || u.requestFullScreen), rb(b, "inline_player", h));
                O && (t && !Mb && !Nb && h && ra) && (R(l, "video_play_autostart_external"), La())
            },
            dc = function() {
                hd(); (ia || h) && K(E, "loading");
                Ra = f;
                if (!T) {
                    clearTimeout(yb);
                    var a = +new Date;
                    if (!wb && (!xb && !$b && 1E3 < a - ze) && 3 < (a - Ka) / 1E3) {
                        var b = ++fd,
                        c = ( + new Date - Ka) / 1E3; (1 == b || 4 == b) && Yd("&code=5&bufno=1&allbufno=" + b);
                        Xd("code=" + (1 == b ? 6 : 4) + "&ct=" + b + "&duation=" + c);
                        l !== A("r") && 1 == b && "undefined" !== typeof de && ee("auto")
                    }
                    ze = a;
                    $b = n
                }
            },
            Wf = function() {
                h && (M(E, "loading"), K(Ha, "button_pause"), M(b, "player_pause"), K(H, "hidden"));
                Ra = n;
                T ? we || (we = f) : (h && (yb = setTimeout(function() {
                    f === pa && K(E, "hidden")
                },
                3E3)), xb = wb = n, Sa("playerOnPlaying", [u.currentTime, n]), zb || (zb = setInterval(function() {
                    Zd({
                        tc: u.currentTime
                    },
                    "/z.m.tv.sohu.com/playtime.gif")
                },
                12E4), ae(Ka), Ka = +new Date))
            },
            Xf = function() {
                var a = u.duration - X.h;
                bc !== a && (F(L, Xb(a)), bc = a)
            },
            Ee = function() {
                var a = u.duration - X.h,
                b = u.buffered - X.h,
                c = 0,
                d = 0;
                try {
                    c = b.start(0),
                    d = b.end(0)
                } catch(e) {}
                0 < a && I(Y, {
                    left: 100 * (c / a) + "%",
                    width: 100 * ((d - c) / a) + "%"
                })
            };
            d.a({
                play: C,
                pause: C,
                ended: id,
                timeupdate: function() {
                    var a = u.currentTime,
                    c = X.h,
                    d = u.duration - c,
                    e = 2 < Math.abs(a - la);
                    T || (a -= c);
                    0 < a && e && (Ka = +new Date);
                    if (!fa && e && T) try {
                        u.currentTime = la
                    } catch(g) {} else if (0 <= la && la !== a && (Ja && (clearTimeout(Ja), Ja = l), f === Ra && Wf()), fa && T && (T = n, M(b, "player_ad"), K(E, "hidden")), T && (0 < Yb.length && a >= Yb[0][0] && (Ub(Yb[0][1]), Yb.shift()), xe = Uf(a), e = Math.ceil(c - a), 0 > e && (e = 0), F(cd, 0 < d ? "\u5e7f\u544a\u5269\u4f59 <b>" + e + "</b> \u79d2": ""), 0 === e && (setTimeout(function() {
                        T = n
                    },
                    500), F(cd, ""), M(b, "player_ad"), K(E, "hidden"))), !ja || !(0 == a && pa)) ! Ra && (!eb && 0 < d) && (Xf(), F(Ya, Xb(a)), I(P, "width", 100 * (a / (T ? c: d)) + "%"), F(L, Xb(d)), Sa("playerOnTimeupate", [m, a]), 0 < a && (la = a)),
                    Ee(),
                    hd(),
                    t && (!r.match(/( UC(Browser)?|QQBrowser)/i) && !ac) && (cc = setTimeout(function() {
                        pa && (h ? dc() : u.pause())
                    },
                    1200)),
                    ac = n
                },
                progress: Ee,
                loadedmetadata: Ce,
                error: function() {
                    if (T) id();
                    else {
                        var a = this.error;
                        if (a && 4 == a.code) if (K(b, "player_init"), M(H, "hidden"), M(E, "loading"), fa) if (0 === Zb) {
                            Zb++;
                            u.src = dd();
                            u.play();
                            try {
                                u.currentTime = la
                            } catch(c) {}
                        } else ye(),
                        a = Ka,
                        Yd("&error=500&code=2&allno=1&vvmark=0"),
                        Xd("code=8&duation=" + ( + new Date - a) / 1E3 + "&error=" + (!q.VideoData.video_src ? "401": "1000"));
                        else fa = f,
                        u.src = dd(),
                        pa && u.play()
                    }
                },
                abort: function() { ! T && n === wb && Yd("&code=8&error=800&allno=1&drag=-1")
                },
                stalled: function() {
                    if (f === wb && (u.play(), 36 <= cb || !ha)) try {
                        u.currentTime = cb
                    } catch(a) {}
                },
                waiting: dc,
                seeking: function(a) {
                    if (T) return a = a || q.event,
                    a.preventDefault(),
                    n;
                    ac = f
                },
                playing: function() {
                    Ja || (Ja = setTimeout(dc, 1E3));
                    M(E, "loading");
                    ac = f;
                    n === ed && Ce();
                    f === xb && (Ka = +new Date)
                }
            });
            E.a({
                click: function(a) {
                    if (J(v(this), "disabled") && Rb) return n;
                    if (c) return gd();
                    if (n === ya) return ae( + new Date),
                    setTimeout(function() {
                        window.top.location.href = q.VideoData.video_src
                    },
                    50),
                    n;
                    if (T) {
                        var b = Sb[xe] || l;
                        pa && b ? Ub(b.clickstatistics || "") : La(a)
                    } else h ? (J(E, "hidden") ? M(E, "hidden") : f === pa && K(E, "hidden"), clearTimeout(yb), yb = setTimeout(function() {
                        f === pa && K(E, "hidden")
                    },
                    3500), n === pa && La(a)) : La(a),
                    db || Xd("code=31")
                }
            });
            Ha.a("click",
            function() {
                db || Xd("code=31");
                J(E, "hidden") || n === ya || (f === u.paused && !Ra || !h ? La(aa) : T || u.pause())
            });
            ea.a("click",
            function(a) {
                2 > V.length || (cb = u.currentTime, 3 < cb && (cb -= 3), wb = f, la = -1, J(ea, "video_quality_fast") ? (K(M(ea, "video_quality_fast"), "video_quality_hq"), u.src = V[1], Storage("quality", "hq")) : (M(K(ea, "video_quality_fast"), "video_quality_hq"), u.src = V[0], Storage("quality", "fast")), dc(), a && a.stopPropagation())
            });
            s.a("click", Ae);
            var Fe = v(".drag_timer", b),
            ec = n,
            eb = n,
            fc,
            gc = 0,
            jd = [0, 0],
            Ge = 0,
            He = function() {
                eb = ec = n;
                M(E, "dragging")
            };
            v(".dragbar", b).a(xa,
            function(a) {
                if (h && db && !T) {
                    hd();
                    eb = f;
                    var b = a.g;
                    jd = [b.clientX, b.clientY];
                    ec = f;
                    a && a.stopPropagation();
                    Ge = P.width();
                    fc = da.width();
                    F(Fe, Xb(gc));
                    K(E, "dragging")
                }
            });
            v(p).a(za,
            function(a) {
                if (n !== ec) {
                    var b = a.g,
                    c = b.clientX - jd[0],
                    b = b.clientY - jd[1]; ! eb && Math.abs(b) > Math.abs(c) ? ec = n: (a.preventDefault(), eb = f, a = Ge + c, 0 > a && (a = 0), a > fc && (a = fc), gc = bc * (a / fc), F(Fe, Xb(gc)), I(P, "width", a + "px"))
                }
            }).a(Aa,
            function() {
                if (n !== eb) {
                    xb = f;
                    try {
                        u.currentTime = gc + X.h
                    } catch(a) {}
                    He()
                }
            }).a("touchcancel", He);
            var Ie = function() {
                id(0, f);
                Sa("playerOnUnLoad", [m, u.currentTime])
            };
            vb("unload", q, Ie);
            if (r.match(/(HS\-U950|GT\-S756|GT\-I9100|Lenovo K860|SHV-E160L|OPPOX907|MI-ONE Plus|HTC S720|ZTE U970|HUAWEI_C8812|vivo)/i) && !Mb || g) ra = n;
            r.match(/MI/i) && ua && (ra = n);
            if (O) {
                if ("wifi" !== qc()) ra = n;
                else if (parseInt(A("player_index") || 0)) ra = n;
                Nb && (ra = n)
            }
            Rb && (ra = n, K(E, "disabled"));
            this.play = function() {
                La()
            };
            this.pause = function() {
                u.pause()
            };
            this.duration = function() {
                return bc
            };
            this.currentTime = function(a) {
                if (isNaN(a)) return la;
                xb = f;
                try {
                    u.currentTime = a
                } catch(b) {}
            };
            this.da = gd;
            this.$ = function(a) {
                if (! (m && m.vid == a.vid) && (Zb = 0, m && Ie(), m = a, T = f, F(cd, ""), !(e && f === x()))) {
                    a = dd();
                    c || (u && !g ? (u.src = a, setTimeout(function() {
                        try {
                            u.currentTime = 0
                        } catch(a) {}
                    },
                    0)) : ye());
                    if (O) {
                        if (u.load(), f === ra && t && (Mb || Nb)) if (a = r.match(/Android(?:[\/\s*]([0-9\._]+))?/i)) a = Wb(a[1]),
                        2 < a && (R(l, "video_play_autostart_external"), setTimeout(La, 1E3))
                    } else $d(),
                    ra && (Xd("code=30"), setTimeout(La, 10));
                    Sa("playerOnLoad", m)
                }
            };
            return this
        }
    }
    var xd = {
        V: {
            ready: "playerOnLoad",
            play: "playerOnPlay",
            pause: "playerOnPause",
            playing: "playerOnPlaying",
            end: "playerOnEnd"
        },
        play: function() {
            pc && pc.play()
        },
        pause: function() {
            pc && pc.pause()
        },
        duration: function() {
            if (pc) return pc.duration()
        },
        currentTime: function(a) {
            if (pc) return pc.currentTime(a)
        },
        on: function(a, b) {
            var c = xd.V[a];
            c && Pa(c, b)
        }
    };
    q.SohuMobilePlayer = xd;
    O && v().d(function() {
        var a = v("#main_player");
        if (0 < a.length) {
            var b = mc();
            "0" !== A("toolbar") ? 1 > v(".news_toolbar").length && hb(a, '<div class="share_tools news_toolbar"><a class="app_download_link" position="appdownload_external"><b></b>\u4e0b\u8f7d</a><a class="news_more"><b></b>\u66f4\u591a</a></div>') : K(a, "no_toolbar");
            G(v(".news_toolbar .app_download_link"), "href", b).a("click",
            function() {
                R(v(this));
                setTimeout(function() {
                    top.location.href = mc()
                },
                50);
                return n
            });
            var c = v(".player_column");
            v(".news_more").a("click",
            function() {
                J(rb(c, "player_recommand"), "player_recommand") && Db(v("video"), "pause");
                return n
            });
            kb(v('<a href="#nogo">\u66f4\u591a</a>'), v(".recommand_list .cate_title")).a("click",
            function() {
                q.open("/");
                return n
            })
        }
    });
    var Z = 0,
    fe = l,
    ge = l,
    he = {},
    ie = 6,
    je = {},
    ke = {},
    le = 0,
    me = n;
    function ne() {
        var a = he;
        return a && !!( - 1 < "|1000|2|16|".indexOf("|" + a.cid + "|"))
    }
    function oe() {
        var a = G(v(".vol_list_result .c"), "index");
        if (a == ie) D(v(".vol_list_wrap span"), Z).length && setTimeout(pe, 1E3);
        else {
            var b = je[Z];
            ge = b && b[a];
            me = n
        }
    }
    function qe(a) {
        if (! (O && "0" === A("toolbar")) && a) {
            var b = he,
            c = f;
            if (a.plid == b.plid) he = b = a,
            c = n,
            me && re.call(D(v(".vol_list_nav span"), Z)),
            oe();
            else {
                he = a;
                je = {};
                Z = le = 0;
                ge = fe = l;
                me = n;
                v(".vol_wrap").remove();
                var d = ne() ? 20 : 6,
                e = a.cid,
                g = a.plid,
                h = a.vid;
                ie = d;
                var k = v(".vol_wrap");
                v(".cate_title", k);
                1 > v(".vol_wrap").length && (hb(v(".appbar"), '<div class="vol_wrap"><div class="cate_title_wrap"><h2 class="cate_title" float_menu="vol_list" float_menu_label="&lt;span class=&quot;vol_label_tv&quot;&gt;\u5267\u96c6&lt;/span&gt;&lt;span class=&quot;vol_label_album&quot;&gt;\u4e13\u8f91&lt;/span&gt;"><b class="k_vol_list" key="vol_list"><span class="vol_label_tv">\u5267\u96c6</span><span class="vol_label_album">\u4e13\u8f91</span></b></h2></div><div class="vol_list_nav scroll_wrap" style="display:none"><div class="vol_list_wrap scroller"></div></div><div class="scroll_wrap"><dl class="item_list vol_list_result scroller"></dl></div></div>'), se(I(v(".vol_wrap"), "display", "block")));
                g && Number(g) && h ? te(g, h, d, 1) : I(D(v(".cate_title_wrap"), 0), "display", "none");
                G(v(".page_wrap_player"), "class", "page_wrap_player video_channel_" + e || "");
                setTimeout(oe, 3E3);
                b && (!O && f === c) && ((b = Storage("set_list")) && "20131229" === b.version ? ue(b.data) : Q("/tv.sohu.com/upload/touch/static/scripts/tv/min.set_lists.js"));
                a = v().extend({
                    cid: a.cid,
                    vid: a.vid,
                    pageSize: O ? 3 : 10,
                    pageNum: 1
                },
                Kb);
                a = "/api/search2/recommend.json?" + Wa(v(), a);
                v().get(a, {
                    i: function() {
                        K(v(".recommand_list"), "blank_list loading")
                    },
                    f: ve
                })
            }
        }
    }
    function te(a, b, c, d) {
        O && "0" === A("toolbar") || (a = "/api.tv.sohu.com/v4/album/videos/" + a + ".json?api_key=695fe827ffeb7d74260a813025970bd5&page_size=" + c + "&plat=17&sver=4.0&partner=78&callback=videoPageListCallback", a = b ? a + ("&vid=" + b + "&site=" + (d || 1)) : a + ("&page=" + Z), Q(a))
    }
    function re(a, b) {
        if ("undefined" == typeof b) {
            var c = v(this);
            b = G(K(c, "c"), "index") || v(".vol_list_wrap span").length;
            if (Z == b) return;
            M(fe, "c");
            fe = c
        }
        var c = je[b],
        d = he,
        e = ie,
        g = d.plid;
        Z = b;
        if (c) {
            for (var g = [], h = c.length, k = 0, m = d.cid, s, x, y, C; k < h; k++) {
                y = c[k];
                C = y.vid;
                s = 2 == m || 16 == m ? k + 1 + e * (b - 1) : y.video_name.replace(/^\u300a.+?\u300b\s*/, "").replace(/^[0-9]{8}\s*/, "").trim();
                var u = "";
                C == d.vid && (u = ' class="c"');
                x = "/v" + y.vid + ".shtml?channeled=" + Qb;
                coverPic = O ? "about:blank": y.hor_high_pic || y.hor_big_pic || y.ver_high_pic;
                g.push("<dd" + u + ' data-key="vid" data-type="highlight" data-value="' + C + '" index=' + (k + 1) + ">", '<a href="' + x + '" class="cover" vid="' + C + '" channeled="' + Qb + '">', '<b style="background-image:url(' + coverPic + ')"></b>', "</a>", '<p><a href="' + x + '" vid="' + C + '" channeled="' + Qb + '"><b>\u7b2c</b>' + s + "<b>\u96c6</b></a></p>", "</dd>")
            }
            c = F(v(".vol_list_result"), g.join(""));
            t && I(I(c, {
                display: "none"
            }), {
                display: "block"
            });
            v(".c", c).length || D(v("dd", c), 0);
            De(D(v(".vol_list_wrap span"), Z - 1))
        } else te(g, 0, e)
    }
    function pe() {
        Q("/api.tv.sohu.com/v4/album/videos/" + he.plid + ".json?api_key=695fe827ffeb7d74260a813025970bd5&page_size=" + ie + "&page=" + (Z + 1) + "&plat=17&sver=4.0&partner=78&callback=loadNextPageDataCallback")
    }
    function ue(a) {
        if (a) {
            for (var b = 0,
            c = a.length,
            d, e, g, h, k = he,
            m = n; b < c; b++) {
                d = a[b];
                g = d.length;
                for (e = 0; e < g; e++) if (h = d[e], h.sid == k.plid) {
                    e = d;
                    d = [];
                    g = 0;
                    h = e.length;
                    var m = aa,
                    s = he,
                    x = e[0].season_name || e[0].name.replace(/\u7b2c.+?[\u5b63\u90e8]$/, ""),
                    y = 0;
                    for (Je = x; g < h; g++) if (m = e[g].sid, m != s.plid) {
                        var C = e[g].name;
                        C.match(/\u7b2c.+?[\u5b63\u90e8]$/) && (C = C.replace(x, ""));
                        d.push('<span sid="' + m + '" index="' + g + '"' + (0 == y ? 'class="c"': "") + ">" + C + "</span>");
                        y++
                    }
                    1 > d.length || (e = F(v(".season_list"), ["<div>", '<div class="cate_title_wrap"><h2 class="cate_title" float_menu="season_list" float_menu_label="\u7cfb\u5217"><b class="k_season_list" key="season_list">' + x + "\u7cfb\u5217</b></h2></div>", '<div class="vol_list_nav scroll_wrap"><div class="season_list_nav scroller"></div></div><div class="scroll_wrap blank_list loading"><dl class="item_list season_list_vol_wrap scroller"></dl><div class="loading_tip">\u8f7d\u5165\u4e2d...</div></div></div>'].join("")), se(e), d = F(v(".season_list_nav", e), d.join("")), v("span", d).a("click", Ke), Ke(0, 0), Le());
                    m = f;
                    break
                }
            }
            n === m && F(v(".season_list"), "");
            Storage("set_list", {
                version: "20131229",
                data: a
            });
            setTimeout(tc, 2E3)
        }
    }
    var Je = "";
    function Ke(a, b) {
        var c;
        if ("undefined" !== typeof b) c = D(v(".season_list_nav span"), b);
        else {
            c = v(this);
            G(c, "index");
            if (J(c, "c")) return;
            M(v(".season_list_nav .c"), "c");
            K(c, "c")
        }
        De(c, f);
        le = c = G(c, "sid");
        var d = ke[c];
        d ? Me(d, f) : Q("/videolist?playlistid=" + c + "&callback=seasonVolsListCallback")
    }
    function Me(a, b) {
        var c, d = le;
        if (c = b ? a: a && a.videos) {
            0 !== d && !b && (ke[d] = c);
            for (var d = [], e = 0, g = c.length, h, k, m, s; e < g; e++) h = c[e],
            s = h.vid,
            k = (h.subName || h.name || "").replace(/^[0-9]{8}\s*/, "").replace(a.albumName, "").replace(/\u7b2c.+?[\u5b63\u90e8]/, "").replace(Je, ""),
            m = "/v" + s + ".shtml?channeled=1211010200",
            d.push("<dd>", '<a href="' + m + '" class="cover" vid="' + s + '" channeled="1211010200"><b style="background-image:url(' + h.largePicUrl + ')"></b></a>', '<p><a href="' + m + '" vid="' + s + '" channeled="1211010200">' + k + "</a></p>", "</dd>");
            0 < d.length && (I(G(F(v(".season_list_vol_wrap"), d.join("")), "startX", 0), {
                webkitTransform: "translate3d(0,0,0)",
                webkitTransitionDuration: "200ms"
            }), M(v(".season_list .scroll_wrap"), "blank_list loading"))
        }
    }
    function ve(a) {
        var b = (a = a.ea) && a.data && a.data.videos;
        a = "loading";
        var c = v(".recommand_list");
        if (b) {
            for (var d = 0,
            e = b.length,
            g = [], h, k, m, s, x; d < e; d++) h = b[d],
            x = h.vid || h.id,
            k = Pb + "/v" + x + ".shtml?channeled=1211010300",
            m = ha && 1 < va ? h.ver_high_pic: h.ver_big_pic || h.video_big_pic,
            s = h.tv_play_count,
            g.push("<dd>", '<a href="' + k + '" class="cover" vid="' + x + '" channeled="1211010300"><b style="background-image:url(' + m + ')"></b></a>', '<p><a href="' + k + '" vid="' + x + '" channeled="1211010300">' + h.tv_name + "</a>" + (0 < s ? "<span>\u64ad\u653e: " + ic(s) + "</span>": "") + "</p>", "</dd>");
            0 < g.length && (a += " blank_list", b = F(v(".item_list", c), g.join("")), O && v("a", b).a("click",
            function() {
                q.open(G(v(this), "href").replace("player=1", ""));
                return n
            }))
        }
        M(c, a)
    }
    q.videoPageListCallback = function(a) {
        if (a) {
            var b = (a = a.data) && a.videos;
            if (b && 0 < b.length) {
                Z = a.page || Z;
                je[Z] = b;
                a = a.count;
                var c = v(".vol_list_wrap"),
                d = ie,
                e = Math.ceil(a / d),
                g = he.cid,
                h = [],
                k = v(".vol_wrap"),
                m = v(".cate_title", k);
                if (("1000" == g || "1" == g) && 2 > a) I(k, "display", "none"),
                qb(m),
                Le();
                else {
                    I(k, "display", "block");
                    G(m, "float_menu", "vol_list");
                    if (1 < e) for (g = 0; g < e; g++) endNum = (g + 1) * d,
                    endNum > a && (endNum = a),
                    h.push('<span index="' + (g + 1) + '">' + (g * d + 1) + "-" + endNum + "</span>");
                    I(v(".vol_list_nav", k), "display", 1 < e ? "block": "none");
                    F(v(".vol_list_wrap"), h.join(""));
                    v("span", c).a("click", re)
                }
                fe = D(v("span", c), Z - 1);
                K(fe, "c");
                re(0, Z)
            } else a = he,
            te(a.plid, a.vid, ie, 2);
            I(D(v(".cate_title_wrap"), 0), "display", b ? "block": "none")
        }
    };
    q.loadNextPageDataCallback = function(a) {
        a = (a = a.data) && a.videos;
        var b = Z + 1;
        a && 0 < a.length && (je[b] = a, ge = a[0], me = f)
    };
    q.seasonListCallback = ue;
    q.seasonVolsListCallback = Me;
    Pa("playerOnEnd",
    function() {
        if (!r.match(/HS\-U950|HUAWEI_C8812/i) || Mb || r.match(/MQQBrowser/i)) {
            var a, b, c, d = Qb;
            if (ge) b = ge.vid,
            a = "/v" + b + ".shtml",
            (c = Ua(Va)) && (a = a + (0 > a.indexOf("?") ? "?": "&") + c);
            else {
                c = v(".vol_list .c");
                if (0 < c.length && (c = c.get(0).nextElementSibling)) a = G(v("a", c), "href"),
                b = G(v("a", c), "vid");
                a || (a = G(v(".recommand_list dd a"), "href"), b = G(v(".recommand_list dd a"), "vid"), d = "1211010300")
            }
            a && b && (R(l, "video_play_next" + (O ? "_external": "")), setTimeout(function() {
                Ne(b, d)
            },
            50))
        }
    });
    var $, Oe = n,
    Pe = n,
    Qe = 1,
    Re = 0,
    Se = l,
    Te = n;
    function Ue() {
        if (f === Te) return f;
        var a = v("#comments_list");
        if (1 > a.length) return n;
        Te = f;
        Ve = a;
        We = K(v("#comments_wrap"), "blank_list");
        Xe = v(".more", We);
        v(".more", We).a("click", Ye);
        Ze = v("#post_comment_form").a("submit", $e);
        af = v("button", Ze);
        bf = v(".input_count", Ze);
        cf = v("textarea", Ze).a({
            focus: function() {
                Oe = n;
                M(Ze, "closed");
                Se = setInterval(df, 200)
            },
            blur: function() {
                setTimeout(ef, 0)
            }
        });
        "undefined" === typeof PassportSC && Q("/tv.sohu.com/upload/jq_plugin/passport.js", ff);
        return f
    }
    function gf(a) {
        f === Ue() && ($ = a, hf = f, jf(1))
    }
    function ef() {
        f !== Oe && (Se && (clearInterval(Se), Se = l), ca && !t && setTimeout(function() {
            K(Ze, "closed")
        },
        0))
    }
    function df() {
        var a = G(cf, "max_length"),
        b = pb(cf).length;
        F(bf, b + "/" + a);
        b > a ? n === Pe && (K(bf, "overflow"), Pe = f) : f === Pe && (M(bf, "overflow"), Pe = n)
    }
    function ff() {
        PassportSC.cookieHandle() && ("0" == PassportSC.cookie.trust ? F(v(".text_wrap .login_tip", Ze), '\u60a8\u7684\u8d26\u53f7\u672a\u6fc0\u6d3b <a href="/my.tv.sohu.com/user/" target="_blank">\u6fc0\u6d3b\u8d26\u53f7</a>') : M(Ze, "not_login"))
    }
    function $e(a) {
        if (J(bf, "overflow")) K(Db(cf, "focus"), "error"),
        Oe = f;
        else if (M(cf, "error"), !J(af, "loading") && !J(Ze, "post_success") && !J(Ze, "not_login")) if ("" === pb(cf).trim()) Db(cf, "focus"),
        Oe = f;
        else {
            var b = v("#comment_target");
            1 > b.length && (b = v('<iframe name="comment_target" id="comment_target" frameborder="0"></iframe>'), v(p.body).append(b), G(Ze, "target", "comment_target"), G(Ze, "action", "/my.tv.sohu.com/reply/save.do?redirect=blank"));
            Db(Ze, "submit");
            kc(K(af, "loading"));
            setTimeout(kf, 500)
        }
        a.preventDefault();
        return n
    }
    function kf() {
        M(af, "loading");
        K(Ze, "post_success");
        var a = v(lf({
            authorimg: "/tv.sohu.com/upload/space/skin/imgs/avatar_s.jpg",
            reply_from_user: "/my.tv.sohu.com/user/",
            author: decodeURIComponent(PassportSC.cookie.uniqname || "\u641c\u72d0\u7f51\u53cb"),
            content: pb(cf).trim(),
            time: +new Date
        }));
        ib(Ve, a);
        pb(cf, "");
        setTimeout(function() {
            M(Ze, "post_success")
        },
        3E3)
    }
    function Ye() {
        hf = n;
        jf(Qe + 1)
    }
    function jf(a) {
        if (!J(Xe, "loading")) {
            K(We, "loading");
            K(Xe, "loading");
            var b = $.cid; (a = !b || 9001 == b || 0 == b || 25 == b ? "": "/access.tv.sohu.com/reply/list/" + b + "_" + ($.plid || $.sid) + "_" + ($.vid || 0) + "_" + 5 * (a - 1) + "_5.js?" + +new Date) && Q(a, mf)
        }
    }
    function mf() {
        var a = q.returnComments,
        b = a.commentList || [],
        c = b.length || 0;
        M(We, "loading");
        M(Xe, "loading");
        if (c) {
            n === hf ? Qe++:(Qe = 1, Re = 0, F(Ve, ""));
            for (var d = [], e = 0; e < c; e++) d.push(lf(b[e]));
            b = p.createElement("div");
            b.style.display = "none";
            b.innerHTML = d.join("");
            for (var g, e = c = b.children.length; e--;) d = b.children[e],
            (g = d.id) && 0 < v("#" + g, Ve).length ? (c--, b.removeChild(d)) : "DD" == d.nodeName && Re++;
            0 < c && (b.style.display = "block", Ve.append(b));
            c = v(".comment_count", We);
            a = a.allCount;
            F(v("b", c), a);
            G(c, "class", "comment_count comment_count_" + a);
            rb(We, "has_more", a > 5 * Qe);
            rb(We, "blank_list", 1 > Re)
        }
    }
    function lf(a) {
        var b = a.reply_from_name && 0 > a.reply_from_url.indexOf("my.tv.sohu.com/user"),
        c = a.time,
        c = ( + new Date - parseInt(c)) / 1E3;
        return ['<dd id="comment-' + a.id + '">', '<em style="background-image:url(' + (a.user_small_photo || a.authorimg || "/tv.sohu.com/upload/space/skin/imgs/avatar_s.jpg") + ')"></em>', "<div>", '<a class="u" ' + (b ? 'style="background-image:url(' + a.reply_from_icon + ')"': "about:blank") + ">" + unescape(a.author) + "</a>", '<div class="content">' + unescape(a.content) + "</div>", '<p class="f">', "<time>" + (31104E3 <= c ? Math.floor(c / 31104E3) + "\u5e74\u524d": 2592E3 <= c ? Math.floor(c / 2592E3) + "\u4e2a\u6708\u524d": 86400 <= c ? Math.floor(c / 86400) + "\u5929\u524d": 3600 <= c ? Math.floor(c / 3600) + "\u5c0f\u65f6\u524d": 60 <= c ? Math.floor(c / 60) + "\u5206\u949f\u524d": "\u521a\u521a") + "</time>", b ? ' \u6765\u81ea: <a href="' + a.reply_from_url + '" target="_blank">' + unescape(a.reply_from_name) + "</a>": "", "</p></div></dd>"].join("")
    }
    var Ve, We, Xe, Ze, af, bf, cf, hf, nf = 0,
    of = [0, 0],
    pf = 0,
    qf = 0,
    rf = 0,
    sf = n;
    function se(a) {
        a = a || p;
        I(v(".scroll_wrap", a), {
            webkitBackfaceVisibility: "hidden",
            overflowX: "hidden",
            webkitTransform: "translate3d(0,0,0)"
        });
        I(v(".scroller", a), {
            webkitBackfaceVisibility: "hidden",
            webkitTransform: "translate3d(0,0,0)",
            webkitTransition: "-webkit-transform 0"
        }).a(xa, tf)
    }
    function De(a, b) {
        var c = a.parent();
        if (0 != c.length) {
            var d = c.get(0),
            e = d.offsetLeft,
            g = d.offsetLeft,
            h = -(a.offset().left - e),
            d = d.lastElementChild,
            g = d.offsetLeft + d.offsetWidth + e + g,
            e = c.parent().width(),
            g = g - e,
            d = parseInt(G(c, "startX") || 0);
            h < d && -h + a.width() < -d + e || (h < -g && (h = -g), 0 < h && (h = 0), I(G(c, "startX", h), {
                webkitTransform: "translate3d(" + h + "px,0,0)",
                webkitTransitionDuration: b ? "200ms": 0
            }))
        }
    }
    function tf(a) {
        var b = v(this);
        if (0 < this.childElementCount) {
            qf = 0;
            uf = vf = this.offsetLeft;
            var c = this.lastElementChild;
            c && (qf = c.offsetLeft + c.offsetWidth + vf + uf);
            if (! (qf <= this.parentNode.offsetWidth)) {
                wf = b;
                sf = f;
                I(b, "webkitTransitionDuration", "0");
                nf = parseInt(G(b, "startX") || 0, 10);
                xf = yf = l;
                rf = b.parent().width();
                b = this.firstElementChild;
                do
                if (c = v(b).get(0).offsetLeft, !yf && 0 <= c + nf && (yf = b), c + b.offsetWidth + nf > rf) {
                    xf = b;
                    break
                }
                while (b = b.nextElementSibling);
                zf = 0;
                a = a.g;
                of = [a.clientX, a.clientY]
            }
        }
    }
    function Af(a) {

        if (n !== sf) {
            var b = a.g,
            c = b.clientX - of[0],
            b = b.clientY - of[1];
            0 < c && 0 <= nf ? pf = nf + c / 2 : 0 > c && -nf - c >= qf - rf ? pf = -(qf - rf) + (c - zf) / 2 : (pf = nf + c, zf = c); ! Bf && Math.abs(b) > Math.abs(c) ? sf = n: (a.preventDefault(), Bf = f, Cf(pf))
        }
    }
    function Df(a) {
        if (Bf) {
            var b = 0,
            c = G(wf, "page") || 1;
            if (pf < nf) {
                xf ? (b = -1 * xf.offsetLeft, c++) : b = -1 * yf.offsetLeft;
                var d = qf - rf;
                b < -d && (b = -d)
            } else if (pf > nf && yf) {
                var d = yf,
                e = rf - d.offsetWidth - d.offsetLeft;
                do
                if (b = -1 * d.offsetLeft, b > e) {
                    c--;
                    break
                }
                while (d = d.previousElementSibling)
            }
            G(wf, "page", c);
            0 < b && (b = 0);
            G(wf, "startX", b);
            I(wf, "webkitTransitionDuration", "200ms");
            Cf(b);
            a.preventDefault();
            Ef()
        }
    }
    function Ef() {
        sf = Bf = n;
        wf = l
    }
    function Cf(a) {
        I(wf, "webkitTransform", "translate3d(" + a + "px,0,0)")
    }
    var vf, uf, wf, yf, xf, zf, Bf;
    v().d(function() {
        se();
        v(p).a(Aa, Df).a(za, Af).a("touchcancel", Ef).a("click", Ef);
        v(".scroller").a("webkitTransitionEnd",
        function() {
            var a = G(v(this), "page") || 1,
            b = v(".scroller_page b", this.parentNode);
            M(b, "c");
            K(D(b, a - 1), "c")
        });
        v(q).a("resize",
        function() {
            z(v(".scroller"),
            function(a) {
                var b = a.getAttribute("page") || 1;
                De(D(v(a).children(), b - 1))
            })
        })
    });
    ca || vb("mousedown", p,
    function(a) {
        a = new tb(a);
        for (var b = a.target; b;) {
            nodeName = b.nodeName;
            if ("A" == nodeName || "IMG" == nodeName) {
                a.preventDefault();
                break
            }
            b = b.parentNode
        }
    },
    n);
    function Ff() {
        rb(v(p.body), "share_open")
    }
    function Gf(a, b) {
        for (var c = a && a.target; ! b && p !== c && p.body !== c;) {
            if (J(v(c), "share_buttons share_handle")) return;
            c = c.parentNode
        }
        M(v(p.body), "share_open")
    }
    function Hf(a) {
        var b = G(v("em", a), "class"),
        c,
        d = encodeURIComponent(location.href),
        e = encodeURIComponent(p.title),
        g = q.VideoData,
        h = v('link[rel="apple-touch-icon-precomposed"]').get(0),
        g = g && g.video_share_cover || h && h.href || "",
        h = encodeURIComponent(G(v('meta[name="description"]'), "content") || "");
        "weibo" == b ? c = "/service.weibo.com/share/share.php?url=" + d + "&appkey=1753462873&title=" + e + "&pic=" + g + "&ralateUid=2230913455&searchPic=false": "renren" == b ? c = "/widget.renren.com/dialog/share?resourceUrl=" + d + "&srcUrl=" + d + "&pic=" + g + "&description=" + h + "&title=" + e: "qzone" == b && (c = "/sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + d + "&site=\u641c\u72d0\u89c6\u9891&pics=" + g + "&summary=" + h + "&title=" + e);
        a.href = c;
        a.target = "_blank"
    }
    v().d(function() {
        0 < z(v(".share_buttons a"), Hf).a("click",
        function() {
            Gf(l, f)
        }).length && (v(".share_handle").a("click", Ff), v(p).a("click", Gf))
    });
    var If = 0;
    function Jf() {
        var a = lc();
        If !== a && (rb(v(p.body), "nav_shadow", 0 < a), If = a)
    }
    v().d(function() {
        var a = "ipad";
        t || na ? a = "android": ia ? a = "iphone": ka && (a = "windows_phone");
        var b;
        if ((b = r.match(/Android[\s\/]([0-9\._]+)/i)) && !Nb) b = Wb(b[1]),
        2.4 > b && (a += " fixed_nav"); - 1 < r.indexOf("PlayStation") && (a += " fixed_nav");
        A("ua");
        r.match(/MQQBrowser(?:\/([0-9\._]+))?/i) ? a += " qq_browser": Mb ? a += " uc_browser": r.match(/ MI 2 /i) ? a += " mi_2": r.match(/ (HTC|Desire) /i) && (a += " htc");
        O && (a += " all_player");
        var c = K(v(p.body), a);
        if (!O) {
            setTimeout(Jf, 0);
            vb("scroll", q, Jf);
            if (!A("clientType")) {
                var d = 1 == A("isappinstalled") ? "\u6253\u5f00\u5e94\u7528": t ? "": "\u7acb\u5373\u4e0b\u8f7d",
                a = Storage("app_banner");
                b = +new Date - parseInt(a, 10);
                2592E5 < b && (a = l);
                var e = mc();
                if (b = q.VideoData) {
                    var g = n,
                    h = function() {
                        var a = new Date;
                        return "" + a.getFullYear() + (1 + a.getMonth()) + a.getDate()
                    } (),
                    k = Ob || B("MTV_SRC"); - 1 < "2014311201431820143252014412014482014415".indexOf(h) && (g = f);
                    if ("6494271" === b.sid && g && ("1001|1100" == k || "1028|1100" == k)) Rb = f,
                    K(v("body"), "dios_online"),
                    a = n
                }
                Rb && (Tb = f, d = "\u7acb\u5373\u4e0b\u8f7d");
                
                if (b) {
                    var s;
                    v(".channel_link").a("click",
                    function() {
                        var a = v(this);
                        R(l, "link_channel");
                        setTimeout(function() {
                            location.href = G(a, "href")
                        },
                        50);
                        return n
                    });
                    jb(v('<span class="app_download_link" position="appdownload_belowplayer"><b></b>\u4e0b\u8f7d</span>')).a("click", nc);
                    var a = Storage("app_ver"),
                    x = Lb[ja ? "ios": "android"].version;
                    if (a !== x) {
                        var y = v('<div class="app_notice_bar"><span class="close">\u6211\u5df2\u5b89\u88c5</span><span class="app_download_link" position="appdownload_hd_video">\u5b89\u88c5\u5ba2\u6237\u7aef\uff0c\u4f53\u9a8c\u9ad8\u6e05\u89c6\u9891</span></div>').insertBefore(v(".season_list"));
                        v(".app_download_link", y).a("click", nc);
                        v(".close", y).a("click",
                        function() {
                            Storage("app_ver", x);
                            y.remove();
                            s && M(s, "show");
                            R(l, "tip_installed")
                        })
                    }
                    a = Storage("app_pinner");
                    b = +new Date - parseInt(a, 10);
                    d = "";
                    g = e = Ia;
                    "0" === a ? a = f: 864E5 < b && (a = l);
                    Rb && (d = '<div class="fixed_pinner diors_pinner" play_in_client="1"' + (t ? 'href="/upgrade.m.tv.sohu.com/channels/hdv/824/1.0/WebVideo_v1.0_824_201311271605.apk?t=1"': "") + ' position="tip_diaosi3_play"><b>\u4e0b\u8f7d\u641c\u72d0\u89c6\u9891\u5ba2\u6237\u7aef</b>\u300a\u5c4c\u4e1d\u7537\u58eb3\u300b\u9ad8\u6e05\u7248\u62a2\u5148\u770b<button>\u7acb\u5373\u89c2\u770b</button><em position="tip_diaosi3_close"></em></div>', R(l, "tip_diaosi3_show", ""), e = function() {
                        R(l, "tip_diaosi3_play", "");
                        oc.apply(this)
                    },
                    g = function() {
                        s.remove();
                        R(l, "tip_diaosi3_close", "");
                        M(v("body"), "dios_online");
                        M(v("player_controls"), "disabled");
                        return Rb = n
                    });
                    d && (s = kb(v(d), p.body).a("click", e), v("em", s).a("click", g), K(s, "show"), q.onload = function() {
                        J(c, "bookmark_show_tip bookmark_show_handle uc_bookmark_show bookmark") && !Rb && M(s, "show")
                    })
                }
            }
            setTimeout(function() {
                1 > lc() && q.scrollTo(0, 0)
            },
            0);
            var C = v(".channel_nav .c");
            0 < C.length && (De(C), setTimeout(function() {
                De(C)
            },
            100), setTimeout(function() {
                De(C)
            },
            500));
            v(".channel_nav a").a("click",
            function() {
                var a = v(this),
                b = "index_nav_" + G(a, "position");
                R(l, b);
                setTimeout(function() {
                    location.href = G(a, "href")
                },
                10);
                return n
            })
        }
    });
    var Kf = q.VideoData;
    function Lf() {
        if (J(qd, "home") || Kf) {
            var a = 0;
            if (a = r.match(/UCBrowser[\s\/]([0-9\._]+)/i)) a = Wb(a[1]);
            if (9 <= a && (a = Storage("ucmark") || 0, 2592E6 < +new Date - parseInt(a, 10))) {
                var b;
                kb(v('<div class="uc_bookmark_frame" ><iframe frameborder="0" src="/app.uc.cn/appstore/AppCenter/frame?uc_param_str=nieidnutssvebipfcp&api_ver=2.0&id=513"></iframe></div>'), p.body);
                var c = function() {
                    K(qd, "bookmark");
                    b ? K(qd, "uc_bookmark_show") : (b = kb(v('<div class="uc_bookmark_handle"><em class="close"></em><span class="button">\u6dfb\u52a0</span>\u6dfb\u52a0<b>\u641c\u72d0\u89c6\u9891</b>\u5230\u4f60\u7684\u6d4f\u89c8\u5668\u9996\u9875\uff0c\u8bbf\u95ee\u66f4\u65b9\u4fbf</div>').a("click",
                    function() {
                        K(qd, "uc_bookmark_show")
                    }), p.body), v(".close", b).a("click",
                    function() {
                        b.remove();
                        Storage("ucmark", +new Date);
                        return n
                    }))
                };
                vb("message", q,
                function(a) {
                    var e = a.data;
                    if (e) if (a = e.message, e = e.type, "not exist" == a || "" == a) J(v(".voice_pinner"), "show") || (c(), R(l, "tip_uc_nav_show"));
                    else if ("close" == a || "cancle" == a || "success" == a) M(qd, "bookmark_show uc_bookmark_show"),
                    "1" == e && (b.remove(), Storage("ucmark", "0"), R(l, "tip_uc_nav_add"))
                })
            }
        }
    }
    v().d(function() {
        O || (qd = v(p.body), Mb && t && Lf())
    });
    var Mf = {},
    Nf = {},

    Of = l,
    Pf = 0,
    Qf = 0,
    Rf = "";
    function Le() {
        if (!J(v(p.body), "fixed_nav")) {
            Rf = "";
            Of && M(Of, "fixed_title");
            Qf = v("nav").height() + 2;
            Sf = v("*[float_menu]");
            Of = D(Sf, 0);
            var a = 0;
            z(Sf,
            function(b) {
                var c = b.getAttribute("float_menu"),
                d = b.getAttribute("float_menu_label");
                b = v(b);
                var e = v(".k_" + c, Of);
                1 > e.length && (e = kb(v('<b class="k_' + c + '" key="' + c + '">' + d + "</b>"), Of));
                var d = e,
                g = D(v("b[key]", Of), a);
                hb(v(g), d);
                Nf[c] = e.a("click", Tf);
                Mf[c] = b.parent().parent();
                if (0 < a) {
                    c = v("b[key]", b);
                    for (e = c.length; e--;) b = D(c, e),
                    0 < e ? b.remove() : M(b, "c")
                }
                a++
            });
            Pf = Of.height();
            Qf += Pf;
            setTimeout(Vf, 0)
        }
    }
    function Vf() {
        var a = Of,
        b = a.parent().offset().top,
        c = lc(),
        d;
        b - c < Qf - Pf ? K(a, "fixed_title") : M(a, "fixed_title");
        for (var e = 0,
        g = Sf.length; e < g; e++) {
            var h = G(D(Sf, e), "float_menu"),
            k = Mf[h],
            b = k.offset().top,
            m = Qf,
            s = q.innerHeight,
            a = b - c,
            b = b - c + k.height();
            if (0 === e && a >= m || a > m && a < s / 3 || a <= m && b >= s / 3 || e === g - 1 && b <= s) if (d = h, 0 === e) break
        }
        Yf(d)
    }
    function Yf(a) {
        if (a !== Rf) {
            var b, c;
            for (b in Nf) c = Nf[b],
            b === a ? K(c, "c") : M(c, "c");
            Rf = a
        }
    }
    function Tf(a, b) {
        b = G(v(this), "key");
        var c = Mf[b];
        c && (p.body.scrollTop = c.offset().top - Qf + Pf + 2, setTimeout(function() {
            Yf(b)
        },
        0))
    }
    var Sf;
    v().d(function() { ! J(v(p.body), "fixed_nav") && (!sc() && 0 < v("*[float_menu]").length) && (Qf = 48, Le(), vb("load", q, Le), vb("resize", q, Vf), vb("scroll", q, Vf), v(p).a("touchmove", Vf))
    });
    $ = q.VideoData;
    var Zf = {},
    $f = {
        1 : ["\u7535\u5f71", "movie"],
        1E3: ["\u7535\u5f71", "movie"],
        2 : ["\u7535\u89c6\u5267", "drama"],
        7 : ["\u7efc\u827a", "show"],
        8 : ["\u7eaa\u5f55\u7247", "documentary"],
        13 : ["\u5a31\u4e50", "yule"],
        16 : ["\u52a8\u6f2b", "comic"],
        25 : ["\u65b0\u95fb", "news"],
        24 : ["\u97f3\u4e50", "music"]
    },
    ag = l,
    bg = l,
    cg = 0;
    function dg() {
        if (l === ag) ag = location.href;
        else {
            var a = M(v(p.body), "page_home page_channel page_player"),
            b,
            c = location.pathname; (b = c.match(/\/v([0-9]+)\.shtml/i)) ? (Ne(b[1], Xa("channeled")), K(a, "page_player")) : (b = c.match(/(\/[0-9]+\/n[0-9]+|\/us\/[0-9]+\/[0-9]+)\.shtml/i)) ? (b = Zf[b[1]]) ? (Ne(b, Xa("channeled")), K(a, "page_player")) : location.href = location.pathname: c.match(/\/(\?.*)?$/) ? K(a, "page_home") : K(a, "page_channel")
        }
    }
    function Ne(a, b) {
        if (a != $.vid) {
            var c = v().extend({},
            Va);
            b && (c.channeled = b);
            var d = Ua(c),
            d = "//" + location.host + "/v" + a + ".shtml" + (d ? "?" + d: "");
            if ((!ja || !yc) && !ta) location.href = d;
            else if (bg = a, c = v().extend({
                callback: "loadVideoCallback"
            },
            Kb), cg = 0, c = "/api.tv.sohu.com/v4/video/info/" + a + ".json?" + Wa(v(), c), K(v(p.body), "page_player_loading"), pc.pause(), Q(c), d !== location.href) {
                if (c = location.pathname.match(/(\/[0-9]+\/n[0-9]+|\/us\/[0-9]+\/[0-9]+)\.shtml/i)) if (c = Zf[c[1]], c == a) return;
                history.pushState(l, l, d)
            }
        }
    }
    function eg() {
        var a = K(v("#main_player"), "forbidden");
        if (1 > v(".player_message").length) {
            var b = v('<span class="player_message">\u60a8\u6240\u5728\u7684\u56fd\u5bb6\u6216\u5730\u533a, \u4e0d\u5728\u6240\u64ad\u653e\u7684\u8282\u76ee\u7248\u6743\u8303\u56f4</span>');
            hb(v(a), b)
        }
    }
    function fg(a, b) {
        var c = f;
        if (!b) {
            if ("2" == a.mobileLimit || "1" == a.h5Limit) {
                eg();
                c = n;
                return
            }
            if ("1" == a.ipLimit) {
                var d = v().extend({
                    from: "h5",
                    poid: "1",
                    sysver: Vb() || "0"
                },
                Kb);
                Q("/api.tv.sohu.com/mobile_user/device/clientconf.json?" + Wa(v(), d) + "&callback=ipLimitCallback");
                return
            }
        }
        X.load(a,
        function(a) {
            pc || (pc = new ce);
            f === c && (pc.currentTime(0), pc.$(a))
        });
        d = a.cid + "";
        if (!O) {
            var e = v(".score");
            if (0 < e.length && a) if (d.match(/^(2|1000|16|7|8)$/)) {
                var g = (G(e, "num") + "").replace(/^([0-9]+)\.([0-9]).*/, "<b>$1</b>.$2\u5206");
                I(F(e, g), "display", "block")
            } else I(e, "display", "none");
            gf(a);
            gg();
            z(v(".share_buttons a"), Hf);
            e = $f[d];
            g = "//" + location.host;
            e ? F(G(G(v(".channel_link"), "href", g + "/" + e[1]), "class", "channel_link channel_link_" + d), e[0] + "\u9891\u9053") : F(G(G(v(".channel_link"), "href", g), "class", "channel_link"), "\u66f4\u591a\u7cbe\u5f69\u89c6\u9891");
            d = vd(a);
            rb(v(".watch_later_icon"), "watch_later_icon_done", d)
        }
        setTimeout(function() {
            qe(a)
        },
        50)
    }
    function gg() {
        var a = v(".video_detail .desc");
        rb(a, "has_more", 110 < v("span", a).height())
    }
    function hg(a) {
        var b = [],
        c,
        d = "|" + a.cid + "|";
        c = a.latest_video_count; - 1 < "|2|16|".indexOf(d) && b.push("<p>\u66f4\u65b0\u81f3" + c + "\u96c6</p>"); - 1 < "|8|".indexOf(d) && b.push("<p>\u66f4\u65b0\u81f3" + c + "\u671f</p>"); - 1 < "|7|".indexOf(d) && ((c = a.tvGuest) && b.push("<p>\u5609\u5bbe: " + c.replace(/;/g, " ") + "</p>"), (c = a.tvPresenter) && b.push("<p>\u4e3b\u6301\u4eba: " + c.replace(/;/g, " ") + "</p>")); - 1 < "|1|".indexOf(d) && (c = a.director) && b.push("<p>\u5bfc\u6f14: " + c.replace(/;/g, " ") + "</p>"); - 1 < "||0|13|24|".indexOf(d) && (c = a.update_time) && b.push("<p>" + jc(c) + "</p>"); - 1 < "|1|2|".indexOf(d) && (c = a.main_actor) && b.push("<p>\u4e3b\u6f14: " + c.replace(/;/g, " ") + "</p>"); - 1 < "|16|".indexOf(d) && (c = a.year) && b.push("<p>\u5e74\u4efd: " + c + "</p>"); - 1 < "|7|".indexOf(d) && (c = a.area) && b.push("<p>\u5730\u533a: " + c.replace(/;/g, " ") + "</p>"); - 1 < "|8|".indexOf(d) && (c = a.second_cate_name) && b.push("<p>\u7c7b\u578b: " + c.replace(/;/g, " ") + "</p>");
        return b.join("")
    }
    function ig(a) {
        var b = [],
        c,
        d = "|" + a.cid + "|",
        e = c = a.latest_video_count;
        if ( - 1 < "|2|16|7|8|".indexOf(d)) {
            b.push("<label>" + ("|7|" == d ? "\u671f": "\u96c6") + "\u6570:</label>");
            b.push("<p>");
            if ("|7|" == d) b.push("\u66f4\u65b0\u81f3" + c + "\u671f");
            else {
                var g = "|8|" == d ? "\u671f": "\u96c6";
                c != e ? b.push("\u7b2c" + c + g + "<span> \u00b7 \u5171" + e + g + "</span>") : b.push("\u5171" + e + g)
            }
            b.push("</p>")
        }
        if ( - 1 < "|1|2|8|16|24|33|".indexOf(d) && (c = a.year)) b.push("<label>\u5e74\u4efd:</label>"),
        b.push("<p>" + c + "</p>");
        if ( - 1 < "||0|13|25|".indexOf(d) && (c = a.show_date)) b.push("<label>\u65f6\u95f4:</label>"),
        b.push("<p>" + jc(c) + "</p>");
        if (c = a.second_cate_name) b.push("<label>\u7c7b\u578b:</label>"),
        b.push("<p>" + c.replace(/;/g, " ") + "</p>");
        if ( - 1 < "|7|8|".indexOf(d) && (c = a.area)) b.push("<label>\u5730\u533a:</label>"),
        b.push("<p>" + c.replace(/;/g, " ") + "</p>");
        if (c = a.director) b.push("<label>\u5bfc\u6f14:</label>"),
        b.push("<p>" + c.replace(/;/g, " ") + "</p>");
        if (c = a.main_actor) b.push("<label>\u4e3b\u6f14:</label>"),
        b.push("<p>" + c.replace(/;/g, " ") + "</p>");
        return b.join("")
    }
    q.loadVideoCallback = function(a) {
        a = a && a.data;
        if (!a || !a.video_name) if (1 < cg) M(v(p.body), "page_player_loading"),
        location.href = "v" + bg + ".shtml";
        else {
            var b = v().extend({
                callback: "loadVideoCallback",
                site: "2"
            },
            Kb),
            b = "/api.tv.sohu.com/v4/video/info/" + bg + ".json?" + Wa(v(), b);
            Q(b);
            cg++
        } else M(v(p.body), "page_player_loading"),
        b = "|" + a.cid + "|",
        a.tv_desc = a.video_desc || a.video_name,
        a.tv_detail = ig(a),
        a.tv_summary = hg(a),
        a.video_cover = a.ver_high_pic || a[ - 1 < "|2|8|16|".indexOf(b) ? "ver_big_pic": "video_big_pic"],
        a.tv_name = a.video_name,
        !a.video_cover && "|9001|" == b && (a.video_cover = a.hor_big_pic),
        b = a.video_name,
        p.title = b + (b ? " - ": "") + "\u641c\u72d0\u89c6\u9891\u624b\u673a\u7248",
        M(v('*[data-type="highlight"]'), "c"),
        z(v("*[data-key]"),
        function(b) {
            b = v(b);
            var d = G(b, "data-key"),
            e = G(b, "data-type"),
            d = a[d] || "";
            "image" == e ? I(b, "backgroundImage", "url(" + (d || "about:blank") + ")") : "highlight" == e ? G(b, "data-value") == d && K(b, "c") : "attr" == e ? G(b, G(b, "data-value"), d) : ("time" == e && (d = Xb(d)), F(b, d))
        }),
        a.mobileLimit = q.VideoData.mobileLimit,
        a.h5Limit = q.VideoData.h5Limit,
        $ = q.VideoData = {
            vid: a.vid || bg,
            cid: a.cid || "9001",
            cateCode: a.cate_code || "",
            areaId: a.area_id,
            sid: a.sid || a.vid,
            plid: a.aid || a.vid,
            tvid: a.tv_id || "",
            video_cover: a.video_cover,
            video_share_cover: a.video_big_pic,
            videoCount: a.total_video_count,
            tv_name: a.video_name,
            ipLimit: a.ip_limit || "0",
            mobileLimit: a.mobileLimit || "0",
            h5Limit: a.h5Limit || "0",
            urls: {
                m3u8: [a.url_nor || "", a.url_high || "", a.url_super || ""],
                mp4: [a.url_nor_mp4 || "", a.url_high_mp4 || ""],
                downloadUrl: uc(a.download_url) || ""
            },
            duration: a.total_duration,
            apiData: a
        },
        $.video_cover ? fg($) : Q("/api.tv.sohu.com/v4/album/info/" + $.plid + ".json?api_key=695fe827ffeb7d74260a813025970bd5&plat=17&sver=4.0&callback=loadVideoAlbumCallback")
    };
    q.loadVideoAlbumCallback = function(a) { (a = a && a.data) && (q.VideoData.video_cover = a.ver_big_pic || a.ver_high_pic);
        I(v('*[data-key="video_cover"]'), "backgroundImage", "url(" + (q.VideoData.video_cover || "about:blank") + ")");
        fg(q.VideoData)
    };
    q.ipLimitCallback = function(a) {
        a.data && "1" == a.data.iplimit ? eg() : (M(v("#main_player"), "forbidden"), fg($, f))
    }; (function() {
        v(q).a("resize", gg);
        Cb(function(a) {
            var c = v(this),
            d = G(c, "vid"),
            c = G(c, "channeled");
            if (d) return q.scrollTo(0, 0),
            M(qd, "search_actived history_open"),
            a.preventDefault(),
            Ne(d, c),
            n
        });
        yc && vb("popstate", q, dg);
        if ($) {
            q.vid = $.vid;
            q.pid = $.plid;
            $.video_cover = G(v('meta[property="og:image"]'), "content");
            $.tv_name = F(v(".player_info h3"));
            var a;
            if (a = location.pathname.match(/(\/[0-9]+\/n[0-9]+|\/us\/[0-9]+\/[0-9]+)\.shtml/i)) Zf[a[1]] = $.vid;
            v().d(function() {
                var a = v(".video_detail .desc").a("click",
                function() {
                    rb(a, "expand")
                });
                fg($)
            })
        }
    })();
    $ = q.VideoData;
    var jg = "man",
    kg = "",
    lg = "",
    mg = [],
    ng = 0,
    og = {},
    pg = {},
    qg = 0;
    function ee(a) {
        jg = a;
        F(v(".rate_test div"), "");
        rg("OpenAPI");
        kg = "/api.tv.sohu.com/video/playinfo/" + $.vid + ".json?api_key=9854b2afa779e1a6bff1962447a09dbd&plat=6&sver=2.8&partner=999&c=1&sid=0";
        sg(kg);
        var b = qg++;
        a = $.urls.m3u8;
        for (var c, d = new Date,
        e = 0,
        g = a.length; e < g; e++) if (a[e]) {
            c = a[e];
            break
        }
        c && (lg = c, rg("Hot VRS"), v(".rate_test div").append(tg(b, c)), c.match(/\.m3u8/i) && (c = c.replace(/http:\/\/[^\/]+/i, "/hot_vrs")), v().s(c, {
            dataType: "html",
            f: function(a) {
                if (a = a.responseText) {
                    a = a.match(/(http:\/\/[^\s]+)/ig) || [];
                    var c = 0,
                    e = a.length,
                    g, x;
                    ng = e;
                    if (0 < e) {
                        ug(b, d, lg);
                        rg("m3u8 (" + e + ")", "rate_test_video");
                        c = 0;
                        for (e = a.length; c < e; c++) x = "m3u8callback_" + c,
                        g = a[c].replace(/http:\/\/[^\/]+/i, "/61.135.183.62") + "&prot=2&callback=" + x + "&id=" + qg++,
                        q[x] = function(a) {
                            var b = a.url,
                            c = (this.url.match(/&id=([0-9]+)/i) || [])[1];
                            if (b) {
                                var d = new Date,
                                e = sg(b, c, vg);
                                og[b] = setTimeout(function() {
                                    ug(e, d, b, c, l, f);
                                    vg()
                                },
                                3E4)
                            }
                        }.bind({
                            url: g
                        }),
                        mg.push(g);
                        sg(mg.shift())
                    } else a = K(v(".rate_test .item_" + b), "error"),
                    F(v("time", a), "!")
                }
            }
        }))
    }
    function vg() {
        var a = mg.shift(),
        b = v(".rate_test .item .loaded").length;
        a && sg(a, l, l, "#rate_test_video");
        F(v("#rate_test_video"), "m3u8 (" + b + "/" + ng + ")");
        b == ng && M(v(".rate_test .button"), "disabled")
    }
    function sg(a, b, c, d) {
        var e = (a.match(/&id=([0-9]+)/i) || [])[1];
        e || (e = qg++);
        b ? v(".rate_test .item_" + b).append(tg(e, a)) : d ? hb(v(d), tg(e, a)) : v(".rate_test div").append(tg(e, a));
        Q(a, ug, [e, new Date, a, b, c]);
        return e
    }
    function tg(a, b) {
        return '<p class="item item_' + a + '"><time>...</time><span>' + b + "</span></p>"
    }
    function ug(a, b, c, d, e, g) {
        var h = og[c];
        h && (clearTimeout(h), delete og[c]);
        if (! (c in pg)) {
            g && (pg[c] = 1);
            a = K(v(".rate_test .item_" + a), g ? "error": "loaded");
            var k = h = "",
            m = "";
            b = ((new Date - b) / 1E3).toFixed(2);
            F(D(v("time", a), 0), g ? "!": b + " s");
            d && (h = F(v(".rate_test .item_" + d + " span")).replace(/&amp;/g, "&"));
            if (k = c.match(/cip=([0-9\.]+)/i)) k = k[1],
            m = c.match(/http:\/\/([^\/]+)/i)[1];
            c = ["/sptjs1.hd.sohu.com.cn/h5/tttst.html?mode=", jg, "&uid=", B("SUV") || "", "&api=", encodeURIComponent(kg), "&hotvrs=", encodeURIComponent(lg), "&disp=", encodeURIComponent(h), "&url=", encodeURIComponent(c), "&clientip=", k, "&cdnip=", m, "&speed=", b, g ? "&timeout": ""].join("");
            Ub(c);
            e && e()
        }
    }
    function rg(a, b) {
        v(".rate_test div").append('<p class="title" id="' + b + '">' + a + "</p>")
    }
    var de = {};
    v().d(function() {
        l !== A("r") && $ && (ib(v(".body_wrap"), '<div class="rate_test"><span class="button">\u901f\u5ea6\u6d4b\u8bd5</span><span class="tip">UID: ' + (B("SUV") || "-") + "</span><div></div></div>"), v(".rate_test .button").a("click",
        function() {
            var a = v(this);
            J(a, "disabled") || (K(a, "disabled"), ee("man"))
        }))
    });
})()