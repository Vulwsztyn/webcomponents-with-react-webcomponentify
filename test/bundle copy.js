!(function (e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var o = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t]
            }.bind(null, o),
          )
      return r
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 2))
})([
  function (e, t, n) {
    'use strict'
    n.r(t),
      n.d(t, 'Component', function () {
        return C
      }),
      n.d(t, 'Fragment', function () {
        return g
      }),
      n.d(t, 'createContext', function () {
        return $
      }),
      n.d(t, 'createElement', function () {
        return m
      }),
      n.d(t, 'createRef', function () {
        return b
      }),
      n.d(t, 'useCallback', function () {
        return ae
      }),
      n.d(t, 'useContext', function () {
        return fe
      }),
      n.d(t, 'useDebugValue', function () {
        return pe
      }),
      n.d(t, 'useEffect', function () {
        return _e
      }),
      n.d(t, 'useErrorBoundary', function () {
        return de
      }),
      n.d(t, 'useId', function () {
        return he
      }),
      n.d(t, 'useImperativeHandle', function () {
        return ce
      }),
      n.d(t, 'useLayoutEffect', function () {
        return ie
      }),
      n.d(t, 'useMemo', function () {
        return se
      }),
      n.d(t, 'useReducer', function () {
        return ue
      }),
      n.d(t, 'useRef', function () {
        return le
      }),
      n.d(t, 'useState', function () {
        return oe
      }),
      n.d(t, 'Children', function () {
        return De
      }),
      n.d(t, 'PureComponent', function () {
        return Ne
      }),
      n.d(t, 'StrictMode', function () {
        return vt
      }),
      n.d(t, 'Suspense', function () {
        return Me
      }),
      n.d(t, 'SuspenseList', function () {
        return je
      }),
      n.d(t, '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED', function () {
        return _t
      }),
      n.d(t, 'cloneElement', function () {
        return at
      }),
      n.d(t, 'createFactory', function () {
        return lt
      }),
      n.d(t, 'createPortal', function () {
        return Fe
      }),
      n.d(t, 'default', function () {
        return xt
      }),
      n.d(t, 'findDOMNode', function () {
        return pt
      }),
      n.d(t, 'flushSync', function () {
        return ht
      }),
      n.d(t, 'forwardRef', function () {
        return Te
      }),
      n.d(t, 'hydrate', function () {
        return Ke
      }),
      n.d(t, 'isElement', function () {
        return Ct
      }),
      n.d(t, 'isFragment', function () {
        return st
      }),
      n.d(t, 'isValidElement', function () {
        return ct
      }),
      n.d(t, 'lazy', function () {
        return Ae
      }),
      n.d(t, 'memo', function () {
        return Pe
      }),
      n.d(t, 'render', function () {
        return Ze
      }),
      n.d(t, 'startTransition', function () {
        return mt
      }),
      n.d(t, 'unmountComponentAtNode', function () {
        return ft
      }),
      n.d(t, 'unstable_batchedUpdates', function () {
        return dt
      }),
      n.d(t, 'useDeferredValue', function () {
        return yt
      }),
      n.d(t, 'useInsertionEffect', function () {
        return gt
      }),
      n.d(t, 'useSyncExternalStore', function () {
        return Et
      }),
      n.d(t, 'useTransition', function () {
        return bt
      }),
      n.d(t, 'version', function () {
        return it
      })
    var r,
      o,
      u,
      _,
      i,
      l,
      c,
      s,
      a = {},
      f = [],
      p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
      d = Array.isArray
    function h(e, t) {
      for (var n in t) e[n] = t[n]
      return e
    }
    function v(e) {
      var t = e.parentNode
      t && t.removeChild(e)
    }
    function m(e, t, n) {
      var o,
        u,
        _,
        i = {}
      for (_ in t) 'key' == _ ? (o = t[_]) : 'ref' == _ ? (u = t[_]) : (i[_] = t[_])
      if (
        (arguments.length > 2 && (i.children = arguments.length > 3 ? r.call(arguments, 2) : n),
        'function' == typeof e && null != e.defaultProps)
      )
        for (_ in e.defaultProps) void 0 === i[_] && (i[_] = e.defaultProps[_])
      return y(e, i, o, u, null)
    }
    function y(e, t, n, r, _) {
      var i = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == _ ? ++u : _,
      }
      return null == _ && null != o.vnode && o.vnode(i), i
    }
    function b() {
      return { current: null }
    }
    function g(e) {
      return e.children
    }
    function C(e, t) {
      ;(this.props = e), (this.context = t)
    }
    function E(e, t) {
      if (null == t) return e.__ ? E(e.__, e.__.__k.indexOf(e) + 1) : null
      for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e
      return 'function' == typeof e.type ? E(e) : null
    }
    function x(e) {
      var t, n
      if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) {
            e.__e = e.__c.base = n.__e
            break
          }
        return x(e)
      }
    }
    function k(e) {
      ;((!e.__d && (e.__d = !0) && _.push(e) && !S.__r++) || i !== o.debounceRendering) &&
        ((i = o.debounceRendering) || l)(S)
    }
    function S() {
      var e, t, n, r, o, u, i, l, s
      for (_.sort(c); (e = _.shift()); )
        e.__d &&
          ((t = _.length),
          (r = void 0),
          (o = void 0),
          (u = void 0),
          (l = (i = (n = e).__v).__e),
          (s = n.__P) &&
            ((r = []),
            (o = []),
            ((u = h({}, i)).__v = i.__v + 1),
            M(
              s,
              i,
              u,
              n.__n,
              void 0 !== s.ownerSVGElement,
              null != i.__h ? [l] : null,
              r,
              null == l ? E(i) : l,
              i.__h,
              o,
            ),
            W(r, i, o),
            i.__e != l && x(i)),
          _.length > t && _.sort(c))
      S.__r = 0
    }
    function N(e, t, n, r, o, u, _, i, l, c, s) {
      var p,
        h,
        v,
        m,
        b,
        C,
        x,
        k,
        S,
        N = 0,
        O = (r && r.__k) || f,
        R = O.length,
        D = R,
        H = t.length
      for (n.__k = [], p = 0; p < H; p++)
        null !=
        (m = n.__k[p] =
          null == (m = t[p]) || 'boolean' == typeof m || 'function' == typeof m
            ? null
            : 'string' == typeof m || 'number' == typeof m || 'bigint' == typeof m
            ? y(null, m, null, null, m)
            : d(m)
            ? y(g, { children: m }, null, null, null)
            : m.__b > 0
            ? y(m.type, m.props, m.key, m.ref ? m.ref : null, m.__v)
            : m)
          ? ((m.__ = n),
            (m.__b = n.__b + 1),
            -1 === (k = T(m, O, (x = p + N), D)) ? (v = a) : ((v = O[k] || a), (O[k] = void 0), D--),
            M(e, m, v, o, u, _, i, l, c, s),
            (b = m.__e),
            (h = m.ref) && v.ref != h && (v.ref && j(v.ref, null, m), s.push(h, m.__c || b, m)),
            null != b &&
              (null == C && (C = b),
              (S = v === a || null === v.__v)
                ? -1 == k && N--
                : k !== x &&
                  (k === x + 1
                    ? N++
                    : k > x
                    ? D > H - x
                      ? (N += k - x)
                      : N--
                    : (N = k < x && k == x - 1 ? k - x : 0)),
              (x = p + N),
              'function' != typeof m.type || (k === x && v.__k !== m.__k)
                ? 'function' == typeof m.type || (k === x && !S)
                  ? void 0 !== m.__d
                    ? ((l = m.__d), (m.__d = void 0))
                    : (l = b.nextSibling)
                  : (l = w(e, b, l))
                : (l = P(m, l, e)),
              'function' == typeof n.type && (n.__d = l)))
          : (v = O[p]) && null == v.key && v.__e && (v.__e == l && (l = E(v)), L(v, v, !1), (O[p] = null))
      for (n.__e = C, p = R; p--; )
        null != O[p] &&
          ('function' == typeof n.type && null != O[p].__e && O[p].__e == n.__d && (n.__d = O[p].__e.nextSibling),
          L(O[p], O[p]))
    }
    function P(e, t, n) {
      for (var r, o = e.__k, u = 0; o && u < o.length; u++)
        (r = o[u]) && ((r.__ = e), (t = 'function' == typeof r.type ? P(r, t, n) : w(n, r.__e, t)))
      return t
    }
    function O(e, t) {
      return (
        (t = t || []),
        null == e ||
          'boolean' == typeof e ||
          (d(e)
            ? e.some(function (e) {
                O(e, t)
              })
            : t.push(e)),
        t
      )
    }
    function w(e, t, n) {
      return (
        null == n || n.parentNode !== e
          ? e.insertBefore(t, null)
          : (t == n && null != t.parentNode) || e.insertBefore(t, n),
        t.nextSibling
      )
    }
    function T(e, t, n, r) {
      var o = e.key,
        u = e.type,
        _ = n - 1,
        i = n + 1,
        l = t[n]
      if (null === l || (l && o == l.key && u === l.type)) return n
      if (r > (null != l ? 1 : 0))
        for (; _ >= 0 || i < t.length; ) {
          if (_ >= 0) {
            if ((l = t[_]) && o == l.key && u === l.type) return _
            _--
          }
          if (i < t.length) {
            if ((l = t[i]) && o == l.key && u === l.type) return i
            i++
          }
        }
      return -1
    }
    function R(e, t, n) {
      '-' === t[0]
        ? e.setProperty(t, null == n ? '' : n)
        : (e[t] = null == n ? '' : 'number' != typeof n || p.test(t) ? n : n + 'px')
    }
    function D(e, t, n, r, o) {
      var u
      e: if ('style' === t)
        if ('string' == typeof n) e.style.cssText = n
        else {
          if (('string' == typeof r && (e.style.cssText = r = ''), r)) for (t in r) (n && t in n) || R(e.style, t, '')
          if (n) for (t in n) (r && n[t] === r[t]) || R(e.style, t, n[t])
        }
      else if ('o' === t[0] && 'n' === t[1])
        (u = t !== (t = t.replace(/(PointerCapture)$|Capture$/, '$1'))),
          (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
          e.l || (e.l = {}),
          (e.l[t + u] = n),
          n ? r || e.addEventListener(t, u ? U : H, u) : e.removeEventListener(t, u ? U : H, u)
      else if ('dangerouslySetInnerHTML' !== t) {
        if (o) t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's')
        else if (
          'width' !== t &&
          'height' !== t &&
          'href' !== t &&
          'list' !== t &&
          'form' !== t &&
          'tabIndex' !== t &&
          'download' !== t &&
          'rowSpan' !== t &&
          'colSpan' !== t &&
          t in e
        )
          try {
            e[t] = null == n ? '' : n
            break e
          } catch (e) {}
        'function' == typeof n ||
          (null == n || (!1 === n && '-' !== t[4]) ? e.removeAttribute(t) : e.setAttribute(t, n))
      }
    }
    function H(e) {
      return this.l[e.type + !1](o.event ? o.event(e) : e)
    }
    function U(e) {
      return this.l[e.type + !0](o.event ? o.event(e) : e)
    }
    function M(e, t, n, r, u, _, i, l, c, s) {
      var a,
        f,
        p,
        v,
        m,
        y,
        b,
        E,
        x,
        k,
        S,
        P,
        O,
        w,
        T,
        R = t.type
      if (void 0 !== t.constructor) return null
      null != n.__h && ((c = n.__h), (l = t.__e = n.__e), (t.__h = null), (_ = [l])), (a = o.__b) && a(t)
      e: if ('function' == typeof R)
        try {
          if (
            ((E = t.props),
            (x = (a = R.contextType) && r[a.__c]),
            (k = a ? (x ? x.props.value : a.__) : r),
            n.__c
              ? (b = (f = t.__c = n.__c).__ = f.__E)
              : ('prototype' in R && R.prototype.render
                  ? (t.__c = f = new R(E, k))
                  : ((t.__c = f = new C(E, k)), (f.constructor = R), (f.render = V)),
                x && x.sub(f),
                (f.props = E),
                f.state || (f.state = {}),
                (f.context = k),
                (f.__n = r),
                (p = f.__d = !0),
                (f.__h = []),
                (f._sb = [])),
            null == f.__s && (f.__s = f.state),
            null != R.getDerivedStateFromProps &&
              (f.__s == f.state && (f.__s = h({}, f.__s)), h(f.__s, R.getDerivedStateFromProps(E, f.__s))),
            (v = f.props),
            (m = f.state),
            (f.__v = t),
            p)
          )
            null == R.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(),
              null != f.componentDidMount && f.__h.push(f.componentDidMount)
          else {
            if (
              (null == R.getDerivedStateFromProps &&
                E !== v &&
                null != f.componentWillReceiveProps &&
                f.componentWillReceiveProps(E, k),
              !f.__e &&
                ((null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(E, f.__s, k)) || t.__v === n.__v))
            ) {
              for (
                t.__v !== n.__v && ((f.props = E), (f.state = f.__s), (f.__d = !1)),
                  t.__e = n.__e,
                  t.__k = n.__k,
                  t.__k.forEach(function (e) {
                    e && (e.__ = t)
                  }),
                  S = 0;
                S < f._sb.length;
                S++
              )
                f.__h.push(f._sb[S])
              ;(f._sb = []), f.__h.length && i.push(f)
              break e
            }
            null != f.componentWillUpdate && f.componentWillUpdate(E, f.__s, k),
              null != f.componentDidUpdate &&
                f.__h.push(function () {
                  f.componentDidUpdate(v, m, y)
                })
          }
          if (
            ((f.context = k),
            (f.props = E),
            (f.__P = e),
            (f.__e = !1),
            (P = o.__r),
            (O = 0),
            'prototype' in R && R.prototype.render)
          ) {
            for (
              f.state = f.__s, f.__d = !1, P && P(t), a = f.render(f.props, f.state, f.context), w = 0;
              w < f._sb.length;
              w++
            )
              f.__h.push(f._sb[w])
            f._sb = []
          } else
            do {
              ;(f.__d = !1), P && P(t), (a = f.render(f.props, f.state, f.context)), (f.state = f.__s)
            } while (f.__d && ++O < 25)
          ;(f.state = f.__s),
            null != f.getChildContext && (r = h(h({}, r), f.getChildContext())),
            p || null == f.getSnapshotBeforeUpdate || (y = f.getSnapshotBeforeUpdate(v, m)),
            N(
              e,
              d((T = null != a && a.type === g && null == a.key ? a.props.children : a)) ? T : [T],
              t,
              n,
              r,
              u,
              _,
              i,
              l,
              c,
              s,
            ),
            (f.base = t.__e),
            (t.__h = null),
            f.__h.length && i.push(f),
            b && (f.__E = f.__ = null)
        } catch (e) {
          ;(t.__v = null), (c || null != _) && ((t.__e = l), (t.__h = !!c), (_[_.indexOf(l)] = null)), o.__e(e, t, n)
        }
      else
        null == _ && t.__v === n.__v ? ((t.__k = n.__k), (t.__e = n.__e)) : (t.__e = A(n.__e, t, n, r, u, _, i, c, s))
      ;(a = o.diffed) && a(t)
    }
    function W(e, t, n) {
      for (var r = 0; r < n.length; r++) j(n[r], n[++r], n[++r])
      o.__c && o.__c(t, e),
        e.some(function (t) {
          try {
            ;(e = t.__h),
              (t.__h = []),
              e.some(function (e) {
                e.call(t)
              })
          } catch (e) {
            o.__e(e, t.__v)
          }
        })
    }
    function A(e, t, n, o, u, _, i, l, c) {
      var s,
        f,
        p,
        h = n.props,
        m = t.props,
        y = t.type,
        b = 0
      if (('svg' === y && (u = !0), null != _))
        for (; b < _.length; b++)
          if ((s = _[b]) && 'setAttribute' in s == !!y && (y ? s.localName === y : 3 === s.nodeType)) {
            ;(e = s), (_[b] = null)
            break
          }
      if (null == e) {
        if (null === y) return document.createTextNode(m)
        ;(e = u ? document.createElementNS('http://www.w3.org/2000/svg', y) : document.createElement(y, m.is && m)),
          (_ = null),
          (l = !1)
      }
      if (null === y) h === m || (l && e.data === m) || (e.data = m)
      else {
        if (
          ((_ = _ && r.call(e.childNodes)),
          (f = (h = n.props || a).dangerouslySetInnerHTML),
          (p = m.dangerouslySetInnerHTML),
          !l)
        ) {
          if (null != _)
            for (h = {}, b = 0; b < e.attributes.length; b++) h[e.attributes[b].name] = e.attributes[b].value
          ;(p || f) &&
            ((p && ((f && p.__html == f.__html) || p.__html === e.innerHTML)) || (e.innerHTML = (p && p.__html) || ''))
        }
        if (
          ((function (e, t, n, r, o) {
            var u
            for (u in n) 'children' === u || 'key' === u || u in t || D(e, u, null, n[u], r)
            for (u in t)
              (o && 'function' != typeof t[u]) ||
                'children' === u ||
                'key' === u ||
                'value' === u ||
                'checked' === u ||
                n[u] === t[u] ||
                D(e, u, t[u], n[u], r)
          })(e, m, h, u, l),
          p)
        )
          t.__k = []
        else if (
          (N(
            e,
            d((b = t.props.children)) ? b : [b],
            t,
            n,
            o,
            u && 'foreignObject' !== y,
            _,
            i,
            _ ? _[0] : n.__k && E(n, 0),
            l,
            c,
          ),
          null != _)
        )
          for (b = _.length; b--; ) null != _[b] && v(_[b])
        l ||
          ('value' in m &&
            void 0 !== (b = m.value) &&
            (b !== e.value || ('progress' === y && !b) || ('option' === y && b !== h.value)) &&
            D(e, 'value', b, h.value, !1),
          'checked' in m && void 0 !== (b = m.checked) && b !== e.checked && D(e, 'checked', b, h.checked, !1))
      }
      return e
    }
    function j(e, t, n) {
      try {
        'function' == typeof e ? e(t) : (e.current = t)
      } catch (e) {
        o.__e(e, n)
      }
    }
    function L(e, t, n) {
      var r, u
      if (
        (o.unmount && o.unmount(e),
        (r = e.ref) && ((r.current && r.current !== e.__e) || j(r, null, t)),
        null != (r = e.__c))
      ) {
        if (r.componentWillUnmount)
          try {
            r.componentWillUnmount()
          } catch (e) {
            o.__e(e, t)
          }
        ;(r.base = r.__P = null), (e.__c = void 0)
      }
      if ((r = e.__k)) for (u = 0; u < r.length; u++) r[u] && L(r[u], t, n || 'function' != typeof e.type)
      n || null == e.__e || v(e.__e), (e.__ = e.__e = e.__d = void 0)
    }
    function V(e, t, n) {
      return this.constructor(e, n)
    }
    function I(e, t, n) {
      var u, _, i, l
      o.__ && o.__(e, t),
        (_ = (u = 'function' == typeof n) ? null : (n && n.__k) || t.__k),
        (i = []),
        (l = []),
        M(
          t,
          (e = ((!u && n) || t).__k = m(g, null, [e])),
          _ || a,
          a,
          void 0 !== t.ownerSVGElement,
          !u && n ? [n] : _ ? null : t.firstChild ? r.call(t.childNodes) : null,
          i,
          !u && n ? n : _ ? _.__e : t.firstChild,
          u,
          l,
        ),
        W(i, e, l)
    }
    function F(e, t) {
      I(e, t, F)
    }
    function B(e, t, n) {
      var o,
        u,
        _,
        i,
        l = h({}, e.props)
      for (_ in (e.type && e.type.defaultProps && (i = e.type.defaultProps), t))
        'key' == _ ? (o = t[_]) : 'ref' == _ ? (u = t[_]) : (l[_] = void 0 === t[_] && void 0 !== i ? i[_] : t[_])
      return (
        arguments.length > 2 && (l.children = arguments.length > 3 ? r.call(arguments, 2) : n),
        y(e.type, l, o || e.key, u || e.ref, null)
      )
    }
    function $(e, t) {
      var n = {
        __c: (t = '__cC' + s++),
        __: e,
        Consumer: function (e, t) {
          return e.children(t)
        },
        Provider: function (e) {
          var n, r
          return (
            this.getChildContext ||
              ((n = []),
              ((r = {})[t] = this),
              (this.getChildContext = function () {
                return r
              }),
              (this.shouldComponentUpdate = function (e) {
                this.props.value !== e.value &&
                  n.some(function (e) {
                    ;(e.__e = !0), k(e)
                  })
              }),
              (this.sub = function (e) {
                n.push(e)
                var t = e.componentWillUnmount
                e.componentWillUnmount = function () {
                  n.splice(n.indexOf(e), 1), t && t.call(e)
                }
              })),
            e.children
          )
        },
      }
      return (n.Provider.__ = n.Consumer.contextType = n)
    }
    ;(r = f.slice),
      (o = {
        __e: function (e, t, n, r) {
          for (var o, u, _; (t = t.__); )
            if ((o = t.__c) && !o.__)
              try {
                if (
                  ((u = o.constructor) &&
                    null != u.getDerivedStateFromError &&
                    (o.setState(u.getDerivedStateFromError(e)), (_ = o.__d)),
                  null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), (_ = o.__d)),
                  _)
                )
                  return (o.__E = o)
              } catch (t) {
                e = t
              }
          throw e
        },
      }),
      (u = 0),
      (C.prototype.setState = function (e, t) {
        var n
        ;(n = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = h({}, this.state))),
          'function' == typeof e && (e = e(h({}, n), this.props)),
          e && h(n, e),
          null != e && this.__v && (t && this._sb.push(t), k(this))
      }),
      (C.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), k(this))
      }),
      (C.prototype.render = g),
      (_ = []),
      (l = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
      (c = function (e, t) {
        return e.__v.__b - t.__v.__b
      }),
      (S.__r = 0),
      (s = 0)
    var z,
      q,
      G,
      Y,
      Z = 0,
      K = [],
      J = [],
      Q = o.__b,
      X = o.__r,
      ee = o.diffed,
      te = o.__c,
      ne = o.unmount
    function re(e, t) {
      o.__h && o.__h(q, e, Z || t), (Z = 0)
      var n = q.__H || (q.__H = { __: [], __h: [] })
      return e >= n.__.length && n.__.push({ __V: J }), n.__[e]
    }
    function oe(e) {
      return (Z = 1), ue(Ee, e)
    }
    function ue(e, t, n) {
      var r = re(z++, 2)
      if (
        ((r.t = e),
        !r.__c &&
          ((r.__ = [
            n ? n(t) : Ee(void 0, t),
            function (e) {
              var t = r.__N ? r.__N[0] : r.__[0],
                n = r.t(t, e)
              t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}))
            },
          ]),
          (r.__c = q),
          !q.u))
      ) {
        var o = function (e, t, n) {
          if (!r.__c.__H) return !0
          var o = r.__c.__H.__.filter(function (e) {
            return e.__c
          })
          if (
            o.every(function (e) {
              return !e.__N
            })
          )
            return !u || u.call(this, e, t, n)
          var _ = !1
          return (
            o.forEach(function (e) {
              if (e.__N) {
                var t = e.__[0]
                ;(e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (_ = !0)
              }
            }),
            !(!_ && r.__c.props === e) && (!u || u.call(this, e, t, n))
          )
        }
        q.u = !0
        var u = q.shouldComponentUpdate,
          _ = q.componentWillUpdate
        ;(q.componentWillUpdate = function (e, t, n) {
          if (this.__e) {
            var r = u
            ;(u = void 0), o(e, t, n), (u = r)
          }
          _ && _.call(this, e, t, n)
        }),
          (q.shouldComponentUpdate = o)
      }
      return r.__N || r.__
    }
    function _e(e, t) {
      var n = re(z++, 3)
      !o.__s && Ce(n.__H, t) && ((n.__ = e), (n.i = t), q.__H.__h.push(n))
    }
    function ie(e, t) {
      var n = re(z++, 4)
      !o.__s && Ce(n.__H, t) && ((n.__ = e), (n.i = t), q.__h.push(n))
    }
    function le(e) {
      return (
        (Z = 5),
        se(function () {
          return { current: e }
        }, [])
      )
    }
    function ce(e, t, n) {
      ;(Z = 6),
        ie(
          function () {
            return 'function' == typeof e
              ? (e(t()),
                function () {
                  return e(null)
                })
              : e
              ? ((e.current = t()),
                function () {
                  return (e.current = null)
                })
              : void 0
          },
          null == n ? n : n.concat(e),
        )
    }
    function se(e, t) {
      var n = re(z++, 7)
      return Ce(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__
    }
    function ae(e, t) {
      return (
        (Z = 8),
        se(function () {
          return e
        }, t)
      )
    }
    function fe(e) {
      var t = q.context[e.__c],
        n = re(z++, 9)
      return (n.c = e), t ? (null == n.__ && ((n.__ = !0), t.sub(q)), t.props.value) : e.__
    }
    function pe(e, t) {
      o.useDebugValue && o.useDebugValue(t ? t(e) : e)
    }
    function de(e) {
      var t = re(z++, 10),
        n = oe()
      return (
        (t.__ = e),
        q.componentDidCatch ||
          (q.componentDidCatch = function (e, r) {
            t.__ && t.__(e, r), n[1](e)
          }),
        [
          n[0],
          function () {
            n[1](void 0)
          },
        ]
      )
    }
    function he() {
      var e = re(z++, 11)
      if (!e.__) {
        for (var t = q.__v; null !== t && !t.__m && null !== t.__; ) t = t.__
        var n = t.__m || (t.__m = [0, 0])
        e.__ = 'P' + n[0] + '-' + n[1]++
      }
      return e.__
    }
    function ve() {
      for (var e; (e = K.shift()); )
        if (e.__P && e.__H)
          try {
            e.__H.__h.forEach(be), e.__H.__h.forEach(ge), (e.__H.__h = [])
          } catch (t) {
            ;(e.__H.__h = []), o.__e(t, e.__v)
          }
    }
    ;(o.__b = function (e) {
      ;(q = null), Q && Q(e)
    }),
      (o.__r = function (e) {
        X && X(e), (z = 0)
        var t = (q = e.__c).__H
        t &&
          (G === q
            ? ((t.__h = []),
              (q.__h = []),
              t.__.forEach(function (e) {
                e.__N && (e.__ = e.__N), (e.__V = J), (e.__N = e.i = void 0)
              }))
            : (t.__h.forEach(be), t.__h.forEach(ge), (t.__h = []), (z = 0))),
          (G = q)
      }),
      (o.diffed = function (e) {
        ee && ee(e)
        var t = e.__c
        t &&
          t.__H &&
          (t.__H.__h.length &&
            ((1 !== K.push(t) && Y === o.requestAnimationFrame) || ((Y = o.requestAnimationFrame) || ye)(ve)),
          t.__H.__.forEach(function (e) {
            e.i && (e.__H = e.i), e.__V !== J && (e.__ = e.__V), (e.i = void 0), (e.__V = J)
          })),
          (G = q = null)
      }),
      (o.__c = function (e, t) {
        t.some(function (e) {
          try {
            e.__h.forEach(be),
              (e.__h = e.__h.filter(function (e) {
                return !e.__ || ge(e)
              }))
          } catch (n) {
            t.some(function (e) {
              e.__h && (e.__h = [])
            }),
              (t = []),
              o.__e(n, e.__v)
          }
        }),
          te && te(e, t)
      }),
      (o.unmount = function (e) {
        ne && ne(e)
        var t,
          n = e.__c
        n &&
          n.__H &&
          (n.__H.__.forEach(function (e) {
            try {
              be(e)
            } catch (e) {
              t = e
            }
          }),
          (n.__H = void 0),
          t && o.__e(t, n.__v))
      })
    var me = 'function' == typeof requestAnimationFrame
    function ye(e) {
      var t,
        n = function () {
          clearTimeout(r), me && cancelAnimationFrame(t), setTimeout(e)
        },
        r = setTimeout(n, 100)
      me && (t = requestAnimationFrame(n))
    }
    function be(e) {
      var t = q,
        n = e.__c
      'function' == typeof n && ((e.__c = void 0), n()), (q = t)
    }
    function ge(e) {
      var t = q
      ;(e.__c = e.__()), (q = t)
    }
    function Ce(e, t) {
      return (
        !e ||
        e.length !== t.length ||
        t.some(function (t, n) {
          return t !== e[n]
        })
      )
    }
    function Ee(e, t) {
      return 'function' == typeof t ? t(e) : t
    }
    function xe(e, t) {
      for (var n in t) e[n] = t[n]
      return e
    }
    function ke(e, t) {
      for (var n in e) if ('__source' !== n && !(n in t)) return !0
      for (var r in t) if ('__source' !== r && e[r] !== t[r]) return !0
      return !1
    }
    function Se(e, t) {
      return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
    }
    function Ne(e) {
      this.props = e
    }
    function Pe(e, t) {
      function n(e) {
        var n = this.props.ref,
          r = n == e.ref
        return !r && n && (n.call ? n(null) : (n.current = null)), t ? !t(this.props, e) || !r : ke(this.props, e)
      }
      function r(t) {
        return (this.shouldComponentUpdate = n), m(e, t)
      }
      return (
        (r.displayName = 'Memo(' + (e.displayName || e.name) + ')'),
        (r.prototype.isReactComponent = !0),
        (r.__f = !0),
        r
      )
    }
    ;((Ne.prototype = new C()).isPureReactComponent = !0),
      (Ne.prototype.shouldComponentUpdate = function (e, t) {
        return ke(this.props, e) || ke(this.state, t)
      })
    var Oe = o.__b
    o.__b = function (e) {
      e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), Oe && Oe(e)
    }
    var we = ('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.forward_ref')) || 3911
    function Te(e) {
      function t(t) {
        var n = xe({}, t)
        return delete n.ref, e(n, t.ref || null)
      }
      return (
        (t.$$typeof = we),
        (t.render = t),
        (t.prototype.isReactComponent = t.__f = !0),
        (t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
        t
      )
    }
    var Re = function (e, t) {
        return null == e ? null : O(O(e).map(t))
      },
      De = {
        map: Re,
        forEach: Re,
        count: function (e) {
          return e ? O(e).length : 0
        },
        only: function (e) {
          var t = O(e)
          if (1 !== t.length) throw 'Children.only'
          return t[0]
        },
        toArray: O,
      },
      He = o.__e
    o.__e = function (e, t, n, r) {
      if (e.then)
        for (var o, u = t; (u = u.__); )
          if ((o = u.__c) && o.__c) return null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), o.__c(e, t)
      He(e, t, n, r)
    }
    var Ue = o.unmount
    function Me() {
      ;(this.__u = 0), (this.t = null), (this.__b = null)
    }
    function We(e) {
      var t = e.__.__c
      return t && t.__a && t.__a(e)
    }
    function Ae(e) {
      var t, n, r
      function o(o) {
        if (
          (t ||
            (t = e()).then(
              function (e) {
                n = e.default || e
              },
              function (e) {
                r = e
              },
            ),
          r)
        )
          throw r
        if (!n) throw t
        return m(n, o)
      }
      return (o.displayName = 'Lazy'), (o.__f = !0), o
    }
    function je() {
      ;(this.u = null), (this.o = null)
    }
    ;(o.unmount = function (e) {
      var t = e.__c
      t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Ue && Ue(e)
    }),
      ((Me.prototype = new C()).__c = function (e, t) {
        var n = t.__c,
          r = this
        null == r.t && (r.t = []), r.t.push(n)
        var o = We(r.__v),
          u = !1,
          _ = function () {
            u || ((u = !0), (n.__R = null), o ? o(i) : i())
          }
        n.__R = _
        var i = function () {
            if (!--r.__u) {
              if (r.state.__a) {
                var e = r.state.__a
                r.__v.__k[0] = (function e(t, n, r) {
                  return (
                    t &&
                      ((t.__v = null),
                      (t.__k =
                        t.__k &&
                        t.__k.map(function (t) {
                          return e(t, n, r)
                        })),
                      t.__c &&
                        t.__c.__P === n &&
                        (t.__e && r.insertBefore(t.__e, t.__d), (t.__c.__e = !0), (t.__c.__P = r))),
                    t
                  )
                })(e, e.__c.__P, e.__c.__O)
              }
              var t
              for (r.setState({ __a: (r.__b = null) }); (t = r.t.pop()); ) t.forceUpdate()
            }
          },
          l = !0 === t.__h
        r.__u++ || l || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(_, _)
      }),
      (Me.prototype.componentWillUnmount = function () {
        this.t = []
      }),
      (Me.prototype.render = function (e, t) {
        if (this.__b) {
          if (this.__v.__k) {
            var n = document.createElement('div'),
              r = this.__v.__k[0].__c
            this.__v.__k[0] = (function e(t, n, r) {
              return (
                t &&
                  (t.__c &&
                    t.__c.__H &&
                    (t.__c.__H.__.forEach(function (e) {
                      'function' == typeof e.__c && e.__c()
                    }),
                    (t.__c.__H = null)),
                  null != (t = xe({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), (t.__c = null)),
                  (t.__k =
                    t.__k &&
                    t.__k.map(function (t) {
                      return e(t, n, r)
                    }))),
                t
              )
            })(this.__b, n, (r.__O = r.__P))
          }
          this.__b = null
        }
        var o = t.__a && m(g, null, e.fallback)
        return o && (o.__h = null), [m(g, null, t.__a ? null : e.children), o]
      })
    var Le = function (e, t, n) {
      if ((++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ('t' !== e.props.revealOrder[0] || !e.o.size)))
        for (n = e.u; n; ) {
          for (; n.length > 3; ) n.pop()()
          if (n[1] < n[0]) break
          e.u = n = n[2]
        }
    }
    function Ve(e) {
      return (
        (this.getChildContext = function () {
          return e.context
        }),
        e.children
      )
    }
    function Ie(e) {
      var t = this,
        n = e.i
      ;(t.componentWillUnmount = function () {
        I(null, t.l), (t.l = null), (t.i = null)
      }),
        t.i && t.i !== n && t.componentWillUnmount(),
        t.l ||
          ((t.i = n),
          (t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function (e) {
              this.childNodes.push(e), t.i.appendChild(e)
            },
            insertBefore: function (e, n) {
              this.childNodes.push(e), t.i.appendChild(e)
            },
            removeChild: function (e) {
              this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
            },
          })),
        I(m(Ve, { context: t.context }, e.__v), t.l)
    }
    function Fe(e, t) {
      var n = m(Ie, { __v: e, i: t })
      return (n.containerInfo = t), n
    }
    ;((je.prototype = new C()).__a = function (e) {
      var t = this,
        n = We(t.__v),
        r = t.o.get(e)
      return (
        r[0]++,
        function (o) {
          var u = function () {
            t.props.revealOrder ? (r.push(o), Le(t, e, r)) : o()
          }
          n ? n(u) : u()
        }
      )
    }),
      (je.prototype.render = function (e) {
        ;(this.u = null), (this.o = new Map())
        var t = O(e.children)
        e.revealOrder && 'b' === e.revealOrder[0] && t.reverse()
        for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]))
        return e.children
      }),
      (je.prototype.componentDidUpdate = je.prototype.componentDidMount =
        function () {
          var e = this
          this.o.forEach(function (t, n) {
            Le(e, n, t)
          })
        })
    var Be = ('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
      $e =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
      ze = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
      qe = /[A-Z0-9]/g,
      Ge = 'undefined' != typeof document,
      Ye = function (e) {
        return ('undefined' != typeof Symbol && 'symbol' == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e)
      }
    function Ze(e, t, n) {
      return null == t.__k && (t.textContent = ''), I(e, t), 'function' == typeof n && n(), e ? e.__c : null
    }
    function Ke(e, t, n) {
      return F(e, t), 'function' == typeof n && n(), e ? e.__c : null
    }
    ;(C.prototype.isReactComponent = {}),
      ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (e) {
        Object.defineProperty(C.prototype, e, {
          configurable: !0,
          get: function () {
            return this['UNSAFE_' + e]
          },
          set: function (t) {
            Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t })
          },
        })
      })
    var Je = o.event
    function Qe() {}
    function Xe() {
      return this.cancelBubble
    }
    function et() {
      return this.defaultPrevented
    }
    o.event = function (e) {
      return (
        Je && (e = Je(e)),
        (e.persist = Qe),
        (e.isPropagationStopped = Xe),
        (e.isDefaultPrevented = et),
        (e.nativeEvent = e)
      )
    }
    var tt,
      nt = {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return this.class
        },
      },
      rt = o.vnode
    o.vnode = function (e) {
      'string' == typeof e.type &&
        (function (e) {
          var t = e.props,
            n = e.type,
            r = {}
          for (var o in t) {
            var u = t[o]
            if (
              !(
                ('value' === o && 'defaultValue' in t && null == u) ||
                (Ge && 'children' === o && 'noscript' === n) ||
                'class' === o ||
                'className' === o
              )
            ) {
              var _ = o.toLowerCase()
              'defaultValue' === o && 'value' in t && null == t.value
                ? (o = 'value')
                : 'download' === o && !0 === u
                ? (u = '')
                : 'ondoubleclick' === _
                ? (o = 'ondblclick')
                : 'onchange' !== _ || ('input' !== n && 'textarea' !== n) || Ye(t.type)
                ? 'onfocus' === _
                  ? (o = 'onfocusin')
                  : 'onblur' === _
                  ? (o = 'onfocusout')
                  : ze.test(o)
                  ? (o = _)
                  : -1 === n.indexOf('-') && $e.test(o)
                  ? (o = o.replace(qe, '-$&').toLowerCase())
                  : null === u && (u = void 0)
                : (_ = o = 'oninput'),
                'oninput' === _ && r[(o = _)] && (o = 'oninputCapture'),
                (r[o] = u)
            }
          }
          'select' == n &&
            r.multiple &&
            Array.isArray(r.value) &&
            (r.value = O(t.children).forEach(function (e) {
              e.props.selected = -1 != r.value.indexOf(e.props.value)
            })),
            'select' == n &&
              null != r.defaultValue &&
              (r.value = O(t.children).forEach(function (e) {
                e.props.selected = r.multiple
                  ? -1 != r.defaultValue.indexOf(e.props.value)
                  : r.defaultValue == e.props.value
              })),
            t.class && !t.className
              ? ((r.class = t.class), Object.defineProperty(r, 'className', nt))
              : ((t.className && !t.class) || (t.class && t.className)) && (r.class = r.className = t.className),
            (e.props = r)
        })(e),
        (e.$$typeof = Be),
        rt && rt(e)
    }
    var ot = o.__r
    o.__r = function (e) {
      ot && ot(e), (tt = e.__c)
    }
    var ut = o.diffed
    o.diffed = function (e) {
      ut && ut(e)
      var t = e.props,
        n = e.__e
      null != n &&
        'textarea' === e.type &&
        'value' in t &&
        t.value !== n.value &&
        (n.value = null == t.value ? '' : t.value),
        (tt = null)
    }
    var _t = {
        ReactCurrentDispatcher: {
          current: {
            readContext: function (e) {
              return tt.__n[e.__c].props.value
            },
          },
        },
      },
      it = '17.0.2'
    function lt(e) {
      return m.bind(null, e)
    }
    function ct(e) {
      return !!e && e.$$typeof === Be
    }
    function st(e) {
      return ct(e) && e.type === g
    }
    function at(e) {
      return ct(e) ? B.apply(null, arguments) : e
    }
    function ft(e) {
      return !!e.__k && (I(null, e), !0)
    }
    function pt(e) {
      return (e && (e.base || (1 === e.nodeType && e))) || null
    }
    var dt = function (e, t) {
        return e(t)
      },
      ht = function (e, t) {
        return e(t)
      },
      vt = g
    function mt(e) {
      e()
    }
    function yt(e) {
      return e
    }
    function bt() {
      return [!1, mt]
    }
    var gt = ie,
      Ct = ct
    function Et(e, t) {
      var n = t(),
        r = oe({ h: { __: n, v: t } }),
        o = r[0].h,
        u = r[1]
      return (
        ie(
          function () {
            ;(o.__ = n), (o.v = t), Se(o.__, t()) || u({ h: o })
          },
          [e, n, t],
        ),
        _e(
          function () {
            return (
              Se(o.__, o.v()) || u({ h: o }),
              e(function () {
                Se(o.__, o.v()) || u({ h: o })
              })
            )
          },
          [e],
        ),
        n
      )
    }
    var xt = {
      useState: oe,
      useId: he,
      useReducer: ue,
      useEffect: _e,
      useLayoutEffect: ie,
      useInsertionEffect: ie,
      useTransition: bt,
      useDeferredValue: yt,
      useSyncExternalStore: Et,
      startTransition: mt,
      useRef: le,
      useImperativeHandle: ce,
      useMemo: se,
      useCallback: ae,
      useContext: fe,
      useDebugValue: pe,
      version: '17.0.2',
      Children: De,
      render: Ze,
      hydrate: Ke,
      unmountComponentAtNode: ft,
      createPortal: Fe,
      createElement: m,
      createContext: $,
      createFactory: lt,
      cloneElement: at,
      createRef: b,
      Fragment: g,
      isValidElement: ct,
      isElement: ct,
      isFragment: st,
      findDOMNode: pt,
      Component: C,
      PureComponent: Ne,
      memo: Pe,
      forwardRef: Te,
      flushSync: ht,
      unstable_batchedUpdates: dt,
      StrictMode: g,
      Suspense: Me,
      SuspenseList: je,
      lazy: Ae,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: _t,
    }
  },
  function (e, t, n) {
    e.exports = (function (e) {
      var t = {}
      function n(r) {
        if (t[r]) return t[r].exports
        var o = (t[r] = { i: r, l: !1, exports: {} })
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
      }
      return (
        (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
          n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
        }),
        (n.r = function (e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (n.t = function (e, t) {
          if ((1 & t && (e = n(e)), 8 & t)) return e
          if (4 & t && 'object' == typeof e && e && e.__esModule) return e
          var r = Object.create(null)
          if (
            (n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e)
          )
            for (var o in e)
              n.d(
                r,
                o,
                function (t) {
                  return e[t]
                }.bind(null, o),
              )
          return r
        }),
        (n.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default
                }
              : function () {
                  return e
                }
          return n.d(t, 'a', t), t
        }),
        (n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (n.p = ''),
        n((n.s = 3))
      )
    })([
      function (e, t) {
        e.exports = n(0)
      },
      function (e, t) {
        e.exports = n(0)
      },
      function (e, t) {
        function n() {
          var e,
            t = this.parentNode,
            n = arguments.length
          if (t)
            for (n || t.removeChild(this); n--; )
              'object' != typeof (e = arguments[n])
                ? (e = this.ownerDocument.createTextNode(e))
                : e.parentNode && e.parentNode.removeChild(e),
                n ? t.insertBefore(this.previousSibling, e) : t.replaceChild(e, this)
        }
        Element.prototype.replaceWith || (Element.prototype.replaceWith = n),
          CharacterData.prototype.replaceWith || (CharacterData.prototype.replaceWith = n),
          DocumentType.prototype.replaceWith || (DocumentType.prototype.replaceWith = n)
      },
      function (e, t, n) {
        'use strict'
        n.r(t)
        var r = n(1),
          o = n.n(r),
          u = n(0),
          _ = n.n(u),
          i =
            (n(2),
            _.a.createRef ||
              function () {
                var e = function (t) {
                  e.current = t
                }
                return e(null), e
              })
        class l extends _.a.Component {
          constructor() {
            super(...arguments), (this.ref = i())
          }
          componentDidMount() {
            const e = this.props.children
            this.ref.current.replaceWith(...e)
          }
          render() {
            return _.a.createElement('div', { ref: this.ref })
          }
        }
        const c = (e, t, n, r) => {
          class u extends _.a.PureComponent {
            constructor() {
              super(...arguments), (this.state = Object.assign({}, t)), (this.setProps = (e) => this.setState(() => e))
            }
            render() {
              return _.a.createElement(e, Object.assign({}, this.props, this.state))
            }
          }
          const l = i()
          o.a.render(_.a.createElement(u, { ref: l }), n, () => r(l))
        }
        n.d(t, 'registerAsWebComponent', function () {
          return a
        })
        const s = (e, t) =>
            class extends HTMLElement {
              constructor() {
                switch (
                  (super(),
                  (this.targetNode = null),
                  (this.propBridgeRef = null),
                  (this.props = {}),
                  (this.observer = null),
                  (this.setProps = (e) => {
                    var t, n
                    ;(this.props = Object.assign(Object.assign({}, this.props), e)),
                      (t = this.propBridgeRef),
                      (n = this.props),
                      t && t.current && t.current.setProps(n)
                  }),
                  (this._onReactMount = (e) => {
                    ;(this.propBridgeRef = e), this.setProps(this.props)
                  }),
                  (this._onMutation = (e) => {
                    const t = e.reduce((e, t) => {
                      if ('attributes' === t.type) {
                        const n = t.attributeName
                        e[n] = this.getAttribute(n)
                      }
                      return e
                    }, {})
                    this.setProps(t)
                  }),
                  (this.props = ((e) => {
                    const t = e.getAttributeNames().reduce((t, n) => ((t[n] = e.getAttribute(n)), t), {}),
                      n = Array.from(e.childNodes).map((e) => e.cloneNode(!0))
                    return (t.children = _.a.createElement(l, null, n)), t
                  })(this)),
                  (this.observer = new MutationObserver(this._onMutation)),
                  t)
                ) {
                  case 'open':
                    this.targetNode = this.attachShadow({ mode: 'open' })
                    break
                  case 'element':
                    this.targetNode = this
                    break
                  default:
                    this.targetNode = this.attachShadow({ mode: 'closed' })
                }
                c(e, this.props, this.targetNode, this._onReactMount)
              }
              connectedCallback() {
                this.observer.observe(this, { attributes: !0 })
              }
              disconnectedCallback() {
                o.a.unmountComponentAtNode(this.targetNode), this.observer.disconnect()
              }
            },
          a = (e, t, n) => {
            const r = s(e, n)
            customElements.define(t, r)
          }
      },
    ])
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    var r = n(0),
      o = n(1)
    Object(o.registerAsWebComponent)(
      (e) =>
        r.default.createElement(
          'button',
          { style: 'height:40px;font-weight:bold;', id: e.id, onClick: e.onClick },
          e.text || 'Hello',
        ),
      'my-button',
    )
    class u extends r.default.Component {
      constructor(e) {
        super(e), (this.state = { buttonText: '' }), (this.onInputEnter = this.onInputEnter.bind(this))
      }
      onInputEnter(e) {
        this.setState({ buttonText: e.target.value })
      }
      render() {
        return r.default.createElement(
          'div',
          null,
          r.default.createElement('input', {
            style: 'width:200px;height:40px;padding:10px;font-size:14px;border:2px solid blue;',
            type: 'text',
            placeholder: 'enter some text here',
            onChange: this.onInputEnter,
          }),
          r.default.createElement('br', null),
          r.default.createElement('br', null),
          r.default.createElement('code', null, 'Value of this.state.buttonText: '),
          this.state.buttonText,
        )
      }
    }
    Object(o.registerAsWebComponent)(u, 'my-input')
    Object(o.registerAsWebComponent)(
      (e) =>
        r.default.createElement(
          'div',
          null,
          'Kinda complex component 😂',
          r.default.createElement('p', null, e.text),
          r.default.createElement('div', null, e.children),
        ),
      'my-complex-component',
    )
  },
])
//# sourceMappingURL=bundle.js.map
