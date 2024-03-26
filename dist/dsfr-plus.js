import './style.css';
import { jsxs as O, jsx as m, Fragment as In } from "react/jsx-runtime";
<<<<<<< Updated upstream
import y from "classnames";
=======
import g from "classnames";
>>>>>>> Stashed changes
import * as vt from "react";
import X, { useState as J, useEffect as W, forwardRef as be, useId as ne, useRef as I, useCallback as te, isValidElement as $e, Children as Ot, Fragment as xn, createContext as Rt, useMemo as re, useContext as Se, useReducer as ss, createElement as ir, cloneElement as _e } from "react";
import Bn, { flushSync as us, createPortal as as } from "react-dom";
const cs = {
  config: { attributes: !0, childList: !1, subtree: !1 }
};
function ds(t, e, n = cs) {
  const [r, o] = J(null);
  W(() => {
    const i = new MutationObserver(e);
    o(i);
  }, [e, n, o]), W(() => {
    if (!r || !t)
      return;
    const { config: i } = n;
    return r.observe(t, i), () => {
      r && r.disconnect();
    };
  }, [r, t, n]);
}
function pt(t, e) {
  t && e.forEach((n) => {
    typeof n == "function" ? n(t) : n && (n.current = t);
  });
}
const fs = be(({
  title: t,
  titleAs: e = "h3",
  children: n,
  className: r,
  css: o = {},
  defaultExpanded: i = !1,
  ...l
}, s) => {
<<<<<<< Updated upstream
  const u = ie(), a = I(null), [c, f] = Z(!!i), b = te(
    (d) => {
      var g;
      if (d.find((h) => h.attributeName === "aria-expanded") && ((g = a == null ? void 0 : a.current) != null && g.attributes)) {
=======
  const u = ne(), a = I(null), [c, f] = J(!!i), p = te(
    (d) => {
      var y;
      if (d.find((h) => h.attributeName === "aria-expanded") && ((y = a == null ? void 0 : a.current) != null && y.attributes)) {
>>>>>>> Stashed changes
        const h = a.current.attributes.getNamedItem("aria-expanded");
        f(h ? h.value === "true" : !1);
      }
    },
    [a]
  );
<<<<<<< Updated upstream
  return ds(a == null ? void 0 : a.current, b), /* @__PURE__ */ O("section", { className: y("fr-accordion", r), children: [
    /* @__PURE__ */ m(
      e,
      {
        className: y("fr-accordion__title", o.title),
=======
  return ds(a == null ? void 0 : a.current, p), /* @__PURE__ */ O("section", { className: g("fr-accordion", r), children: [
    /* @__PURE__ */ m(
      e,
      {
        className: g("fr-accordion__title", o.title),
>>>>>>> Stashed changes
        children: /* @__PURE__ */ m(
          "button",
          {
            ...l,
            ref: (d) => pt(d, [s, a]),
<<<<<<< Updated upstream
            className: y("fr-accordion__btn", o.button),
=======
            className: g("fr-accordion__btn", o.button),
>>>>>>> Stashed changes
            "aria-expanded": i,
            "aria-controls": u,
            children: $e(t) || typeof t == "string" ? t : typeof t == "function" ? t(c) : null
          }
        )
      }
    ),
    /* @__PURE__ */ m("div", { className: "fr-collapse", id: u, children: n })
  ] });
});
<<<<<<< Updated upstream
function fe(t, e) {
=======
function se(t, e) {
>>>>>>> Stashed changes
  return Ot.toArray(t).filter((r) => $e(r) && r.type === e);
}
function et(t, e) {
  return Ot.toArray(t).filter((n) => $e(n) && e.includes(n.type));
}
function ps(t, e) {
  return Ot.toArray(t).filter((n) => $e(n) && !e.includes(n.type));
}
<<<<<<< Updated upstream
const sd = ({ children: t, className: e, ...n }) => {
  const r = ie();
  return /* @__PURE__ */ m("div", { className: y("fr-accordions-group", e), ...n, children: fe(t, fs).map((o, i) => /* @__PURE__ */ m(xn, { children: o }, `${r}-d${i}`)) });
}, ud = me(({
=======
const ad = ({ children: t, className: e, ...n }) => {
  const r = ne();
  return /* @__PURE__ */ m("div", { className: g("fr-accordions-group", e), ...n, children: se(t, fs).map((o, i) => /* @__PURE__ */ m(xn, { children: o }, `${r}-d${i}`)) });
}, cd = be(({
>>>>>>> Stashed changes
  className: t,
  closeMode: e = "disallow",
  description: n,
  size: r,
  onClose: o,
  title: i,
  css: l = {},
  titleAs: s = "h3",
  variant: u = "info",
  ...a
}, c) => {
  const f = I(null), b = (d) => {
    var v;
    d.preventDefault(), (v = f.current) == null || v.remove(), o && o(d);
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: (d) => pt(d, [c, f]),
<<<<<<< Updated upstream
      className: y(`fr-alert fr-alert--${u}`, { "fr-alert--sm": r === "sm" }, t),
      ...a,
      children: [
        i && /* @__PURE__ */ m(s, { className: y("fr-alert__title", l.title), children: i }),
        n && /* @__PURE__ */ m("p", { className: y(l.description), children: n }),
        e === "uncontrolled" && /* @__PURE__ */ m("button", { onClick: b, className: y("fr-btn--close fr-btn", l.button), children: "Masquer le message" }),
        e === "controlled" && /* @__PURE__ */ m("button", { onClick: o, className: y("fr-link--close fr-link", l.button), children: "Masquer le message" })
=======
      className: g(`fr-alert fr-alert--${u}`, { "fr-alert--sm": r === "sm" }, t),
      ...a,
      children: [
        i && /* @__PURE__ */ m(s, { className: g("fr-alert__title", l.title), children: i }),
        n && /* @__PURE__ */ m("p", { className: g(l.description), children: n }),
        e === "uncontrolled" && /* @__PURE__ */ m("button", { onClick: p, className: g("fr-btn--close fr-btn", l.button), children: "Masquer le message" }),
        e === "controlled" && /* @__PURE__ */ m("button", { onClick: o, className: g("fr-link--close fr-link", l.button), children: "Masquer le message" })
>>>>>>> Stashed changes
      ]
    }
  );
});
function bs(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ms(t, e, n) {
  bs(t, e), e.set(t, n);
}
function tt(t, e, n) {
  let [r, o] = J(t || e), i = I(t !== void 0), l = t !== void 0;
  W(() => {
    let a = i.current;
    a !== l && console.warn(`WARN: A component changed from ${a ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}.`), i.current = l;
  }, [
    l
  ]);
  let s = l ? t : r, u = te((a, ...c) => {
    let f = (b, ...d) => {
      n && (Object.is(s, b) || n(b, ...d)), l || (s = b);
    };
    typeof a == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o((d, ...v) => {
<<<<<<< Updated upstream
      let g = a(l ? s : d, ...v);
      return f(g, ...c), l ? d : g;
=======
      let y = a(l ? s : d, ...v);
      return f(y, ...c), l ? d : y;
>>>>>>> Stashed changes
    })) : (l || o(a), f(a, ...c));
  }, [
    l,
    s,
    n
  ]);
  return [
    s,
    u
  ];
}
function Cn(t, e = -1 / 0, n = 1 / 0) {
  return Math.min(Math.max(t, e), n);
}
const no = {
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valueMissing: !1,
  valid: !0
}, ro = {
  ...no,
  customError: !0,
  valid: !1
}, nt = {
  isInvalid: !1,
  validationDetails: no,
  validationErrors: []
}, vs = Rt({}), En = "__formValidationState" + Date.now();
function On(t) {
  if (t[En]) {
    let { realtimeValidation: e, displayValidation: n, updateValidation: r, resetValidation: o, commitValidation: i } = t[En];
    return {
      realtimeValidation: e,
      displayValidation: n,
      updateValidation: r,
      resetValidation: o,
      commitValidation: i
    };
  }
  return hs(t);
}
function hs(t) {
  let { isInvalid: e, validationState: n, name: r, value: o, builtinValidation: i, validate: l, validationBehavior: s = "aria" } = t;
  n && (e || (e = n === "invalid"));
  let u = e ? {
    isInvalid: !0,
    validationErrors: [],
    validationDetails: ro
  } : null, a = re(() => lr(gs(l, o)), [
    l,
    o
  ]);
  i != null && i.validationDetails.valid && (i = null);
<<<<<<< Updated upstream
  let c = Se(vs), f = ne(() => r ? Array.isArray(r) ? r.flatMap((P) => Pn(c[P])) : Pn(c[r]) : [], [
    c,
    r
  ]), [b, d] = Z(c), [v, g] = Z(!1);
  c !== b && (d(c), g(!1));
  let h = ne(() => lr(v ? [] : f), [
    v,
    f
  ]), A = I(nt), [w, S] = Z(nt), K = I(nt), x = () => {
    if (!M)
      return;
    R(!1);
    let P = a || i || A.current;
    Qt(P, K.current) || (K.current = P, S(P));
  }, [M, R] = Z(!1);
  return W(x), {
=======
  let c = Se(vs), f = re(() => r ? Array.isArray(r) ? r.flatMap((E) => Pn(c[E])) : Pn(c[r]) : [], [
    c,
    r
  ]), [p, d] = J(c), [v, y] = J(!1);
  c !== p && (d(c), y(!1));
  let h = re(() => lr(v ? [] : f), [
    v,
    f
  ]), _ = I(nt), [w, S] = J(nt), K = I(nt), $ = () => {
    if (!N)
      return;
    R(!1);
    let E = a || i || _.current;
    Qt(E, K.current) || (K.current = E, S(E));
  }, [N, R] = J(!1);
  return W($), {
>>>>>>> Stashed changes
    realtimeValidation: u || h || a || i || nt,
    displayValidation: s === "native" ? u || h || w : u || h || a || i || w,
    updateValidation(P) {
      s === "aria" && !Qt(w, P) ? S(P) : A.current = P;
    },
    resetValidation() {
<<<<<<< Updated upstream
      let P = nt;
      Qt(P, K.current) || (K.current = P, S(P)), s === "native" && R(!1), g(!0);
    },
    commitValidation() {
      s === "native" && R(!0), g(!0);
=======
      let E = nt;
      Qt(E, K.current) || (K.current = E, S(E)), s === "native" && R(!1), y(!0);
    },
    commitValidation() {
      s === "native" && R(!0), y(!0);
>>>>>>> Stashed changes
    }
  };
}
function Pn(t) {
  return t ? Array.isArray(t) ? t : [
    t
  ] : [];
}
function gs(t, e) {
  if (typeof t == "function") {
    let n = t(e);
    if (n && typeof n != "boolean")
      return Pn(n);
  }
  return [];
}
function lr(t) {
  return t.length ? {
    isInvalid: !0,
    validationErrors: t,
    validationDetails: ro
  } : null;
}
function Qt(t, e) {
  return t === e ? !0 : t && e && t.isInvalid === e.isInvalid && t.validationErrors.length === e.validationErrors.length && t.validationErrors.every((n, r) => n === e.validationErrors[r]) && Object.entries(t.validationDetails).every(([n, r]) => e.validationDetails[n] === r);
}
function oo(t) {
  return null;
}
oo.getCollectionNode = function* (e, n) {
  let { childItems: r, title: o, children: i } = e, l = e.title || e.children, s = e.textValue || (typeof l == "string" ? l : "") || e["aria-label"] || "";
  !s && !(n != null && n.suppressTextValueWarning) && console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."), yield {
    type: "item",
    props: e,
    rendered: l,
    textValue: s,
    "aria-label": e["aria-label"],
    hasChildNodes: $s(e),
    *childNodes() {
      if (r)
        for (let u of r)
          yield {
            type: "item",
            value: u
          };
      else if (o) {
        let u = [];
        X.Children.forEach(i, (a) => {
          u.push({
            type: "item",
            element: a
          });
        }), yield* u;
      }
    }
  };
};
function $s(t) {
  return t.hasChildItems != null ? t.hasChildItems : !!(t.childItems || t.title && X.Children.count(t.children) > 0);
}
let Vt = oo;
function io(t) {
  return null;
}
io.getCollectionNode = function* (e) {
  let { children: n, title: r, items: o } = e;
  yield {
    type: "section",
    props: e,
    hasChildNodes: !0,
    rendered: r,
    "aria-label": e["aria-label"],
    *childNodes() {
      if (typeof n == "function") {
        if (!o)
          throw new Error("props.children was a function but props.items is missing");
        for (let i of o)
          yield {
            type: "item",
            value: i,
            renderer: n
          };
      } else {
        let i = [];
        X.Children.forEach(n, (l) => {
          i.push({
            type: "item",
            element: l
          });
        }), yield* i;
      }
    }
  };
};
let lo = io;
class ys {
  build(e, n) {
    return this.context = n, sr(() => this.iterateCollection(e));
  }
  *iterateCollection(e) {
    let { children: n, items: r } = e;
    if (typeof n == "function") {
      if (!r)
        throw new Error("props.children was a function but props.items is missing");
      for (let o of e.items)
        yield* this.getFullNode({
          value: o
        }, {
          renderer: n
        });
    } else {
      let o = [];
      X.Children.forEach(n, (l) => {
        o.push(l);
      });
      let i = 0;
      for (let l of o) {
        let s = this.getFullNode({
          element: l,
          index: i
        }, {});
        for (let u of s)
          i++, yield u;
      }
    }
  }
  getKey(e, n, r, o) {
    if (e.key != null)
      return e.key;
    if (n.type === "cell" && n.key != null)
      return `${o}${n.key}`;
    let i = n.value;
    if (i != null) {
      var l;
      let s = (l = i.key) !== null && l !== void 0 ? l : i.id;
      if (s == null)
        throw new Error("No key found for item");
      return s;
    }
    return o ? `${o}.${n.index}` : `$.${n.index}`;
  }
  getChildState(e, n) {
    return {
      renderer: n.renderer || e.renderer
    };
  }
  *getFullNode(e, n, r, o) {
    let i = e.element;
    if (!i && e.value && n && n.renderer) {
      let u = this.cache.get(e.value);
      if (u && (!u.shouldInvalidate || !u.shouldInvalidate(this.context))) {
        u.index = e.index, u.parentKey = o ? o.key : null, yield u;
        return;
      }
      i = n.renderer(e.value);
    }
    if (X.isValidElement(i)) {
      let u = i.type;
      if (typeof u != "function" && typeof u.getCollectionNode != "function") {
        let b = typeof i.type == "function" ? i.type.name : i.type;
        throw new Error(`Unknown element <${b}> in collection.`);
      }
      let a = u.getCollectionNode(i.props, this.context), c = e.index, f = a.next();
      for (; !f.done && f.value; ) {
        let b = f.value;
        e.index = c;
<<<<<<< Updated upstream
        let d = b.key;
        d || (d = b.element ? null : this.getKey(i, e, n, r));
        let g = [
=======
        let d = p.key;
        d || (d = p.element ? null : this.getKey(i, e, n, r));
        let y = [
>>>>>>> Stashed changes
          ...this.getFullNode({
            ...b,
            key: d,
            index: c,
            wrapper: xs(e.wrapper, b.wrapper)
          }, this.getChildState(n, b), r ? `${r}${i.key}` : i.key, o)
        ];
<<<<<<< Updated upstream
        for (let h of g) {
          if (h.value = b.value || e.value, h.value && this.cache.set(h.value, h), e.type && h.type !== e.type)
            throw new Error(`Unsupported type <${en(h.type)}> in <${en(o.type)}>. Only <${en(e.type)}> is supported.`);
          c++, yield h;
        }
        f = a.next(g);
=======
        for (let h of y) {
          if (h.value = p.value || e.value, h.value && this.cache.set(h.value, h), e.type && h.type !== e.type)
            throw new Error(`Unsupported type <${en(h.type)}> in <${en(o.type)}>. Only <${en(e.type)}> is supported.`);
          c++, yield h;
        }
        f = a.next(y);
>>>>>>> Stashed changes
      }
      return;
    }
    if (e.key == null)
      return;
    let l = this, s = {
      type: e.type,
      props: e.props,
      key: e.key,
      parentKey: o ? o.key : null,
      value: e.value,
      level: o ? o.level + 1 : 0,
      index: e.index,
      rendered: e.rendered,
      textValue: e.textValue,
      "aria-label": e["aria-label"],
      wrapper: e.wrapper,
      shouldInvalidate: e.shouldInvalidate,
      hasChildNodes: e.hasChildNodes,
      childNodes: sr(function* () {
        if (!e.hasChildNodes)
          return;
        let u = 0;
        for (let a of e.childNodes()) {
          a.key != null && (a.key = `${s.key}${a.key}`), a.index = u;
          let c = l.getFullNode(a, l.getChildState(n, a), s.key, s);
          for (let f of c)
            u++, yield f;
        }
      })
    };
    yield s;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function sr(t) {
  let e = [], n = null;
  return {
    *[Symbol.iterator]() {
      for (let r of e)
        yield r;
      n || (n = t());
      for (let r of n)
        e.push(r), yield r;
    }
  };
}
function xs(t, e) {
  if (t && e)
    return (n) => t(e(n));
  if (t)
    return t;
  if (e)
    return e;
}
function en(t) {
  return t[0].toUpperCase() + t.slice(1);
}
function so(t, e, n) {
  let r = re(() => new ys(), []), { children: o, items: i, collection: l } = t;
  return re(() => {
    if (l)
      return l;
    let u = r.build({
      children: o,
      items: i
    }, n);
    return e(u);
  }, [
    r,
    o,
    i,
    l,
    n,
    e
  ]);
}
function zt(t, e) {
  return typeof e.getChildren == "function" ? e.getChildren(t.key) : t.childNodes;
}
function Cs(t) {
  return Es(t, 0);
}
function Es(t, e) {
  if (e < 0)
    return;
  let n = 0;
  for (let r of t) {
    if (n === e)
      return r;
    n++;
  }
}
function tn(t, e, n) {
  if (e.parentKey === n.parentKey)
    return e.index - n.index;
  let r = [
    ...ur(t, e),
    e
  ], o = [
    ...ur(t, n),
    n
  ], i = r.slice(0, o.length).findIndex((l, s) => l !== o[s]);
  return i !== -1 ? (e = r[i], n = o[i], e.index - n.index) : r.findIndex((l) => l === n) >= 0 ? 1 : (o.findIndex((l) => l === e) >= 0, -1);
}
function ur(t, e) {
  let n = [];
  for (; (e == null ? void 0 : e.parentKey) != null; )
    e = t.getItem(e.parentKey), n.unshift(e);
  return n;
}
const ar = /* @__PURE__ */ new WeakMap();
function Rn(t) {
  let e = ar.get(t);
  if (e != null)
    return e;
  e = 0;
  let n = (r) => {
    for (let o of r)
      o.type === "section" ? n(zt(o, t)) : e++;
  };
  return n(t), ar.set(t, e), e;
}
class we extends Set {
  constructor(e, n, r) {
    super(e), e instanceof we ? (this.anchorKey = n || e.anchorKey, this.currentKey = r || e.currentKey) : (this.anchorKey = n, this.currentKey = r);
  }
}
function Ps(t, e) {
  if (t.size !== e.size)
    return !1;
  for (let n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
function uo(t) {
  let { selectionMode: e = "none", disallowEmptySelection: n, allowDuplicateSelectionEvents: r, selectionBehavior: o = "toggle", disabledBehavior: i = "all" } = t, l = I(!1), [, s] = J(!1), u = I(null), a = I(null), [, c] = J(null), f = re(() => cr(t.selectedKeys), [
    t.selectedKeys
<<<<<<< Updated upstream
  ]), b = ne(() => cr(t.defaultSelectedKeys, new we()), [
    t.defaultSelectedKeys
  ]), [d, v] = tt(f, b, t.onSelectionChange), g = ne(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), [h, A] = Z(o);
  o === "replace" && h === "toggle" && typeof d == "object" && d.size === 0 && A("replace");
=======
  ]), p = re(() => cr(t.defaultSelectedKeys, new we()), [
    t.defaultSelectedKeys
  ]), [d, v] = tt(f, p, t.onSelectionChange), y = re(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), [h, _] = J(o);
  o === "replace" && h === "toggle" && typeof d == "object" && d.size === 0 && _("replace");
>>>>>>> Stashed changes
  let w = I(o);
  return W(() => {
    o !== w.current && (A(o), w.current = o);
  }, [
    o
  ]), {
    selectionMode: e,
    disallowEmptySelection: n,
    selectionBehavior: h,
    setSelectionBehavior: A,
    get isFocused() {
      return l.current;
    },
    setFocused(S) {
      l.current = S, s(S);
    },
    get focusedKey() {
      return u.current;
    },
    get childFocusStrategy() {
      return a.current;
    },
    setFocusedKey(S, K = "first") {
      u.current = S, a.current = K, c(S);
    },
    selectedKeys: d,
    setSelectedKeys(S) {
      (r || !Ps(S, d)) && v(S);
    },
<<<<<<< Updated upstream
    disabledKeys: g,
=======
    disabledKeys: y,
>>>>>>> Stashed changes
    disabledBehavior: i
  };
}
function cr(t, e) {
  return t ? t === "all" ? "all" : new we(t) : e;
}
class ao {
  /**
  * The type of selection that is allowed in the collection.
  */
  get selectionMode() {
    return this.state.selectionMode;
  }
  /**
  * Whether the collection allows empty selection.
  */
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  /**
  * The selection behavior for the collection.
  */
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  /**
  * Sets the selection behavior for the collection.
  */
  setSelectionBehavior(e) {
    this.state.setSelectionBehavior(e);
  }
  /**
  * Whether the collection is currently focused.
  */
  get isFocused() {
    return this.state.isFocused;
  }
  /**
  * Sets whether the collection is focused.
  */
  setFocused(e) {
    this.state.setFocused(e);
  }
  /**
  * The current focused key in the collection.
  */
  get focusedKey() {
    return this.state.focusedKey;
  }
  /** Whether the first or last child of the focused key should receive focus. */
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  /**
  * Sets the focused key.
  */
  setFocusedKey(e, n) {
    (e == null || this.collection.getItem(e)) && this.state.setFocusedKey(e, n);
  }
  /**
  * The currently selected keys in the collection.
  */
  get selectedKeys() {
    return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  /**
  * The raw selection value for the collection.
  * Either 'all' for select all, or a set of keys.
  */
  get rawSelection() {
    return this.state.selectedKeys;
  }
  /**
  * Returns whether a key is selected.
  */
  isSelected(e) {
    return this.state.selectionMode === "none" ? !1 : (e = this.getKey(e), this.state.selectedKeys === "all" ? this.canSelectItem(e) : this.state.selectedKeys.has(e));
  }
  /**
  * Whether the selection is empty.
  */
  get isEmpty() {
    return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
  }
  /**
  * Whether all items in the collection are selected.
  */
  get isSelectAll() {
    if (this.isEmpty)
      return !1;
    if (this.state.selectedKeys === "all")
      return !0;
    if (this._isSelectAll != null)
      return this._isSelectAll;
    let e = this.getSelectAllKeys(), n = this.state.selectedKeys;
    return this._isSelectAll = e.every((r) => n.has(r)), this._isSelectAll;
  }
  get firstSelectedKey() {
    let e = null;
    for (let n of this.state.selectedKeys) {
      let r = this.collection.getItem(n);
      (!e || r && tn(this.collection, r, e) < 0) && (e = r);
    }
    return e == null ? void 0 : e.key;
  }
  get lastSelectedKey() {
    let e = null;
    for (let n of this.state.selectedKeys) {
      let r = this.collection.getItem(n);
      (!e || r && tn(this.collection, r, e) > 0) && (e = r);
    }
    return e == null ? void 0 : e.key;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  /**
  * Extends the selection to the given key.
  */
  extendSelection(e) {
    if (this.selectionMode === "none")
      return;
    if (this.selectionMode === "single") {
      this.replaceSelection(e);
      return;
    }
    e = this.getKey(e);
    let n;
    if (this.state.selectedKeys === "all")
      n = new we([
        e
      ], e, e);
    else {
      let r = this.state.selectedKeys, o = r.anchorKey || e;
      n = new we(r, o, e);
      for (let i of this.getKeyRange(o, r.currentKey || e))
        n.delete(i);
      for (let i of this.getKeyRange(e, o))
        this.canSelectItem(i) && n.add(i);
    }
    this.state.setSelectedKeys(n);
  }
  getKeyRange(e, n) {
    let r = this.collection.getItem(e), o = this.collection.getItem(n);
    return r && o ? tn(this.collection, r, o) <= 0 ? this.getKeyRangeInternal(e, n) : this.getKeyRangeInternal(n, e) : [];
  }
  getKeyRangeInternal(e, n) {
    let r = [], o = e;
    for (; o; ) {
      let i = this.collection.getItem(o);
      if ((i && i.type === "item" || i.type === "cell" && this.allowsCellSelection) && r.push(o), o === n)
        return r;
      o = this.collection.getKeyAfter(o);
    }
    return [];
  }
  getKey(e) {
    let n = this.collection.getItem(e);
    if (!n || n.type === "cell" && this.allowsCellSelection)
      return e;
    for (; n.type !== "item" && n.parentKey != null; )
      n = this.collection.getItem(n.parentKey);
    return !n || n.type !== "item" ? null : n.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(e) {
    if (this.selectionMode === "none")
      return;
    if (this.selectionMode === "single" && !this.isSelected(e)) {
      this.replaceSelection(e);
      return;
    }
    if (e = this.getKey(e), e == null)
      return;
    let n = new we(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    n.has(e) ? n.delete(e) : this.canSelectItem(e) && (n.add(e), n.anchorKey = e, n.currentKey = e), !(this.disallowEmptySelection && n.size === 0) && this.state.setSelectedKeys(n);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(e) {
    if (this.selectionMode === "none" || (e = this.getKey(e), e == null))
      return;
    let n = this.canSelectItem(e) ? new we([
      e
    ], e, e) : new we();
    this.state.setSelectedKeys(n);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(e) {
    if (this.selectionMode === "none")
      return;
    let n = new we();
    for (let r of e)
      if (r = this.getKey(r), r != null && (n.add(r), this.selectionMode === "single"))
        break;
    this.state.setSelectedKeys(n);
  }
  getSelectAllKeys() {
    let e = [], n = (r) => {
      for (; r; ) {
        if (this.canSelectItem(r)) {
          let o = this.collection.getItem(r);
          o.type === "item" && e.push(r), o.hasChildNodes && (this.allowsCellSelection || o.type !== "item") && n(Cs(zt(o, this.collection)).key);
        }
        r = this.collection.getKeyAfter(r);
      }
    };
    return n(this.collection.getFirstKey()), e;
  }
  /**
  * Selects all items in the collection.
  */
  selectAll() {
    !this.isSelectAll && this.selectionMode === "multiple" && this.state.setSelectedKeys("all");
  }
  /**
  * Removes all keys from the selection.
  */
  clearSelection() {
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new we());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(e, n) {
    this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e) : this.selectionBehavior === "toggle" || n && (n.pointerType === "touch" || n.pointerType === "virtual") ? this.toggleSelection(e) : this.replaceSelection(e));
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(e) {
    if (e === this.state.selectedKeys)
      return !0;
    let n = this.selectedKeys;
    if (e.size !== n.size)
      return !1;
    for (let r of e)
      if (!n.has(r))
        return !1;
    for (let r of n)
      if (!e.has(r))
        return !1;
    return !0;
  }
  canSelectItem(e) {
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(e))
      return !1;
    let n = this.collection.getItem(e);
    return !(!n || n.type === "cell" && !this.allowsCellSelection);
  }
  isDisabled(e) {
    return this.state.disabledKeys.has(e) && this.state.disabledBehavior === "all";
  }
  isLink(e) {
    var n, r;
    return !!(!((r = this.collection.getItem(e)) === null || r === void 0 || (n = r.props) === null || n === void 0) && n.href);
  }
  constructor(e, n, r) {
    this.collection = e, this.state = n;
    var o;
    this.allowsCellSelection = (o = r == null ? void 0 : r.allowsCellSelection) !== null && o !== void 0 ? o : !1, this._isSelectAll = null;
  }
}
class wn {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let n = this.keyMap.get(e);
    return n ? n.prevKey : null;
  }
  getKeyAfter(e) {
    let n = this.keyMap.get(e);
    return n ? n.nextKey : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    return this.keyMap.get(e);
  }
  at(e) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[e]);
  }
  getChildren(e) {
    let n = this.keyMap.get(e);
    return (n == null ? void 0 : n.childNodes) || [];
  }
  constructor(e) {
    this.keyMap = /* @__PURE__ */ new Map(), this.iterable = e;
    let n = (i) => {
      if (this.keyMap.set(i.key, i), i.childNodes && i.type === "section")
        for (let l of i.childNodes)
          n(l);
    };
    for (let i of e)
      n(i);
    let r, o = 0;
    for (let [i, l] of this.keyMap)
      r ? (r.nextKey = i, l.prevKey = r.key) : (this.firstKey = i, l.prevKey = void 0), l.type === "item" && (l.index = o++), r = l, r.nextKey = void 0;
    this.lastKey = r == null ? void 0 : r.key;
  }
}
function co(t) {
  let { filter: e } = t, n = uo(t), r = re(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), o = te((a) => e ? new wn(e(a)) : new wn(a), [
    e
  ]), i = re(() => ({
    suppressTextValueWarning: t.suppressTextValueWarning
  }), [
    t.suppressTextValueWarning
  ]), l = so(t, o, i), s = re(() => new ao(l, n), [
    l,
    n
  ]);
  const u = I(null);
  return W(() => {
    if (n.focusedKey != null && !l.getItem(n.focusedKey)) {
      const a = u.current.getItem(n.focusedKey), c = [
        ...u.current.getKeys()
<<<<<<< Updated upstream
      ].map((g) => {
        const h = u.current.getItem(g);
        return h.type === "item" ? h : null;
      }).filter((g) => g !== null), f = [
        ...l.getKeys()
      ].map((g) => {
        const h = l.getItem(g);
        return h.type === "item" ? h : null;
      }).filter((g) => g !== null), b = c.length - f.length;
      let d = Math.min(b > 1 ? Math.max(a.index - b + 1, 0) : a.index, f.length - 1), v;
=======
      ].map((y) => {
        const h = u.current.getItem(y);
        return h.type === "item" ? h : null;
      }).filter((y) => y !== null), f = [
        ...l.getKeys()
      ].map((y) => {
        const h = l.getItem(y);
        return h.type === "item" ? h : null;
      }).filter((y) => y !== null), p = c.length - f.length;
      let d = Math.min(p > 1 ? Math.max(a.index - p + 1, 0) : a.index, f.length - 1), v;
>>>>>>> Stashed changes
      for (; d >= 0; ) {
        if (!s.isDisabled(f[d].key)) {
          v = f[d];
          break;
        }
        d < f.length - 1 ? d++ : (d > a.index && (d = a.index), d--);
      }
      n.setFocusedKey(v ? v.key : null);
    }
    u.current = l;
  }, [
    l,
    s,
    n,
    n.focusedKey
  ]), {
    collection: l,
    disabledKeys: r,
    selectionManager: s
  };
}
function fo(t) {
  var e;
  let [n, r] = tt(t.selectedKey, (e = t.defaultSelectedKey) !== null && e !== void 0 ? e : null, t.onSelectionChange), o = re(() => n != null ? [
    n
  ] : [], [
    n
  ]), { collection: i, disabledKeys: l, selectionManager: s } = co({
    ...t,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: o,
    onSelectionChange: (a) => {
      var c;
      let f = (c = a.values().next().value) !== null && c !== void 0 ? c : null;
      f === n && t.onSelectionChange && t.onSelectionChange(f), r(f);
    }
  }), u = n != null ? i.getItem(n) : null;
  return {
    collection: i,
    disabledKeys: l,
    selectionManager: s,
    selectedKey: n,
    setSelectedKey: r,
    selectedItem: u
  };
}
function Vn(t) {
  let [e, n] = tt(t.isOpen, t.defaultOpen || !1, t.onOpenChange);
  const r = te(() => {
    n(!0);
  }, [
    n
  ]), o = te(() => {
    n(!1);
  }, [
    n
  ]), i = te(() => {
    n(!e);
  }, [
    n,
    e
  ]);
  return {
    isOpen: e,
    setOpen: n,
    open: r,
    close: o,
    toggle: i
  };
}
function ws(t) {
  var e, n;
<<<<<<< Updated upstream
  let { defaultFilter: r, menuTrigger: o = "input", allowsEmptyCollection: i = !1, allowsCustomValue: l, shouldCloseOnBlur: s = !0 } = t, [u, a] = Z(!1), [c, f] = Z(!1), [b, d] = Z(null), v = (ee) => {
    t.onSelectionChange && t.onSelectionChange(ee), ee === w && (H(), D());
  };
  var g;
  let { collection: h, selectionManager: A, selectedKey: w, setSelectedKey: S, selectedItem: K, disabledKeys: x } = fo({
    ...t,
    onSelectionChange: v,
    items: (g = t.items) !== null && g !== void 0 ? g : t.defaultItems
  });
  var M, R;
  let [p, _] = tt(t.inputValue, (R = (M = t.defaultInputValue) !== null && M !== void 0 ? M : (e = h.getItem(w)) === null || e === void 0 ? void 0 : e.textValue) !== null && R !== void 0 ? R : "", t.onInputChange), P = h, C = ne(() => (
=======
  let { defaultFilter: r, menuTrigger: o = "input", allowsEmptyCollection: i = !1, allowsCustomValue: l, shouldCloseOnBlur: s = !0 } = t, [u, a] = J(!1), [c, f] = J(!1), [p, d] = J(null), v = (ee) => {
    t.onSelectionChange && t.onSelectionChange(ee), ee === w && (H(), D());
  };
  var y;
  let { collection: h, selectionManager: _, selectedKey: w, setSelectedKey: S, selectedItem: K, disabledKeys: $ } = fo({
    ...t,
    onSelectionChange: v,
    items: (y = t.items) !== null && y !== void 0 ? y : t.defaultItems
  });
  var N, R;
  let [b, A] = tt(t.inputValue, (R = (N = t.defaultInputValue) !== null && N !== void 0 ? N : (e = h.getItem(w)) === null || e === void 0 ? void 0 : e.textValue) !== null && R !== void 0 ? R : "", t.onInputChange), E = h, P = re(() => (
>>>>>>> Stashed changes
    // No default filter if items are controlled.
    t.items != null || !r ? h : Ss(h, p, r)
  ), [
    h,
    p,
    r,
    t.items
<<<<<<< Updated upstream
  ]), [B, E] = Z(C), T = I("focus"), V = Vn({
=======
  ]), [B, C] = J(P), T = I("focus"), V = Vn({
>>>>>>> Stashed changes
    ...t,
    onOpenChange: (ee) => {
      t.onOpenChange && t.onOpenChange(ee, ee ? T.current : void 0), A.setFocused(ee), ee || A.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
<<<<<<< Updated upstream
  }), F = (ee = null, ce) => {
    let ve = ce === "manual" || ce === "focus" && o === "focus";
    (i || C.size > 0 || ve && P.size > 0 || t.items) && (ve && !V.isOpen && t.items === void 0 && a(!0), T.current = ce, d(ee), V.open());
  }, ue = (ee = null, ce) => {
    let ve = ce === "manual" || ce === "focus" && o === "focus";
    !(i || C.size > 0 || ve && P.size > 0 || t.items) && !V.isOpen || (ve && !V.isOpen && t.items === void 0 && a(!0), V.isOpen || (T.current = ce), $(ee));
  }, ae = te(() => {
    E(u ? P : C);
  }, [
    u,
    P,
    C
  ]), $ = te((ee = null) => {
    V.isOpen && ae(), d(ee), V.toggle();
=======
  }), F = (ee = null, de) => {
    let ve = de === "manual" || de === "focus" && o === "focus";
    (i || P.size > 0 || ve && E.size > 0 || t.items) && (ve && !V.isOpen && t.items === void 0 && a(!0), T.current = de, d(ee), V.open());
  }, ae = (ee = null, de) => {
    let ve = de === "manual" || de === "focus" && o === "focus";
    !(i || P.size > 0 || ve && E.size > 0 || t.items) && !V.isOpen || (ve && !V.isOpen && t.items === void 0 && a(!0), V.isOpen || (T.current = de), x(ee));
  }, ce = te(() => {
    C(u ? E : P);
  }, [
    u,
    E,
    P
  ]), x = te((ee = null) => {
    V.isOpen && ce(), d(ee), V.toggle();
>>>>>>> Stashed changes
  }, [
    V,
    ce
  ]), D = te(() => {
    V.isOpen && (ce(), V.close());
  }, [
    V,
<<<<<<< Updated upstream
    ae
  ]), [z, j] = Z(p), H = () => {
    var ee, ce;
    let ve = (ce = (ee = h.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ce !== void 0 ? ce : "";
    j(ve), _(ve);
  };
  var Y, U;
  let L = I((U = (Y = t.selectedKey) !== null && Y !== void 0 ? Y : t.defaultSelectedKey) !== null && U !== void 0 ? U : null);
  var N;
  let X = I((N = (n = h.getItem(w)) === null || n === void 0 ? void 0 : n.textValue) !== null && N !== void 0 ? N : "");
  W(() => {
    var ee;
    c && (C.size > 0 || i) && !V.isOpen && p !== z && o !== "manual" && F(null, "input"), !u && !i && V.isOpen && C.size === 0 && D(), w != null && w !== L.current && D(), p !== z && (A.setFocusedKey(null), a(!1), p === "" && (t.inputValue === void 0 || t.selectedKey === void 0) && S(null)), w !== L.current && (t.inputValue === void 0 || t.selectedKey === void 0) ? H() : z !== p && j(p);
    var ce;
    let ve = (ce = (ee = h.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ce !== void 0 ? ce : "";
    !c && w != null && t.inputValue === void 0 && w === L.current && X.current !== ve && (j(ve), _(ve)), L.current = w, X.current = ve;
  });
  let G = On({
    ...t,
    value: ne(() => ({
      inputValue: p,
=======
    ce
  ]), [z, j] = J(b), H = () => {
    var ee, de;
    let ve = (de = (ee = h.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && de !== void 0 ? de : "";
    j(ve), A(ve);
  };
  var Y, U;
  let L = I((U = (Y = t.selectedKey) !== null && Y !== void 0 ? Y : t.defaultSelectedKey) !== null && U !== void 0 ? U : null);
  var k;
  let Z = I((k = (n = h.getItem(w)) === null || n === void 0 ? void 0 : n.textValue) !== null && k !== void 0 ? k : "");
  W(() => {
    var ee;
    c && (P.size > 0 || i) && !V.isOpen && b !== z && o !== "manual" && F(null, "input"), !u && !i && V.isOpen && P.size === 0 && D(), w != null && w !== L.current && D(), b !== z && (_.setFocusedKey(null), a(!1), b === "" && (t.inputValue === void 0 || t.selectedKey === void 0) && S(null)), w !== L.current && (t.inputValue === void 0 || t.selectedKey === void 0) ? H() : z !== b && j(b);
    var de;
    let ve = (de = (ee = h.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && de !== void 0 ? de : "";
    !c && w != null && t.inputValue === void 0 && w === L.current && Z.current !== ve && (j(ve), A(ve)), L.current = w, Z.current = ve;
  });
  let G = On({
    ...t,
    value: re(() => ({
      inputValue: b,
>>>>>>> Stashed changes
      selectedKey: w
    }), [
      p,
      w
    ])
<<<<<<< Updated upstream
  }), J = () => {
    l && w == null ? k() : ye();
  }, k = () => {
=======
  }), Q = () => {
    l && w == null ? M() : ye();
  }, M = () => {
>>>>>>> Stashed changes
    L.current = null, S(null), D();
  }, ye = () => {
    if (t.selectedKey !== void 0 && t.inputValue !== void 0) {
      var ee;
      t.onSelectionChange(w);
      var de;
      let ve = (de = (ee = h.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && de !== void 0 ? de : "";
      j(ve), D();
    } else
      H(), D();
  };
  const Ne = () => {
    if (l) {
<<<<<<< Updated upstream
      var ee, ce;
      const ve = (ce = (ee = h.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ce !== void 0 ? ce : "";
      p === ve ? ye() : k();
=======
      var ee, de;
      const ve = (de = (ee = h.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && de !== void 0 ? de : "";
      b === ve ? ye() : M();
>>>>>>> Stashed changes
    } else
      ye();
  };
  let mt = () => {
<<<<<<< Updated upstream
    V.isOpen && A.focusedKey != null ? w === A.focusedKey ? ye() : S(A.focusedKey) : Ne();
  }, or = I(p), is = (ee) => {
    ee ? (or.current = p, o === "focus" && F(null, "focus")) : (s && Ne(), p !== or.current && G.commitValidation()), f(ee);
  }, ls = ne(() => V.isOpen ? u ? P : C : B, [
=======
    V.isOpen && _.focusedKey != null ? w === _.focusedKey ? ye() : S(_.focusedKey) : ke();
  }, or = I(b), is = (ee) => {
    ee ? (or.current = b, o === "focus" && F(null, "focus")) : (s && ke(), b !== or.current && G.commitValidation()), f(ee);
  }, ls = re(() => V.isOpen ? u ? E : P : B, [
>>>>>>> Stashed changes
    V.isOpen,
    P,
    C,
    u,
    B
  ]);
  return {
    ...G,
    ...V,
<<<<<<< Updated upstream
    focusStrategy: b,
    toggle: ue,
=======
    focusStrategy: p,
    toggle: ae,
>>>>>>> Stashed changes
    open: F,
    close: Ne,
    selectionManager: A,
    selectedKey: w,
    setSelectedKey: S,
<<<<<<< Updated upstream
    disabledKeys: x,
=======
    disabledKeys: $,
>>>>>>> Stashed changes
    isFocused: c,
    setFocused: is,
    selectedItem: K,
    collection: ls,
    inputValue: p,
    setInputValue: _,
    commit: mt,
    revert: Q
  };
}
function Ss(t, e, n) {
  return new wn(po(t, t, e, n));
}
function po(t, e, n, r) {
  let o = [];
  for (let i of e)
    if (i.type === "section" && i.hasChildNodes) {
      let l = po(t, zt(i, t), n, r);
      [
        ...l
      ].some((s) => s.type === "item") && o.push({
        ...i,
        childNodes: l
      });
    } else
      i.type === "item" && r(i.textValue, n) ? o.push({
        ...i
      }) : i.type !== "item" && o.push({
        ...i
      });
  return o;
}
const Ts = Symbol.for("react-aria.i18n.locale"), _s = Symbol.for("react-aria.i18n.strings");
let He;
class jt {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(e, n) {
    let o = this.getStringsForLocale(n)[e];
    if (!o)
      throw new Error(`Could not find intl message ${e} in ${n} locale`);
    return o;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(e) {
    let n = this.strings[e];
    return n || (n = As(e, this.strings, this.defaultLocale), this.strings[e] = n), n;
  }
  static getGlobalDictionaryForPackage(e) {
    if (typeof window > "u")
      return null;
    let n = window[Ts];
    if (He === void 0) {
      let o = window[_s];
      if (!o)
        return null;
      He = {};
      for (let i in o)
        He[i] = new jt({
          [n]: o[i]
        }, n);
    }
    let r = He == null ? void 0 : He[e];
    if (!r)
      throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return r;
  }
  constructor(e, n = "en-US") {
    this.strings = {
      ...e
    }, this.defaultLocale = n;
  }
}
function As(t, e, n = "en-US") {
  if (e[t])
    return e[t];
  let r = Ks(t);
  if (e[r])
    return e[r];
  for (let o in e)
    if (o.startsWith(r + "-"))
      return e[o];
  return e[n];
}
function Ks(t) {
  return Intl.Locale ? new Intl.Locale(t).language : t.split("-")[0];
}
const dr = /* @__PURE__ */ new Map(), fr = /* @__PURE__ */ new Map();
class Ds {
  /** Formats a localized string for the given key with the provided variables. */
  format(e, n) {
    let r = this.strings.getStringForLocale(e, this.locale);
    return typeof r == "function" ? r(n, this) : r;
  }
  plural(e, n, r = "cardinal") {
    let o = n["=" + e];
    if (o)
      return typeof o == "function" ? o() : o;
    let i = this.locale + ":" + r, l = dr.get(i);
    l || (l = new Intl.PluralRules(this.locale, {
      type: r
    }), dr.set(i, l));
    let s = l.select(e);
    return o = n[s] || n.other, typeof o == "function" ? o() : o;
  }
  number(e) {
    let n = fr.get(this.locale);
    return n || (n = new Intl.NumberFormat(this.locale), fr.set(this.locale, n)), n.format(e);
  }
  select(e, n) {
    let r = e[n] || e.other;
    return typeof r == "function" ? r() : r;
  }
  constructor(e, n) {
    this.locale = e, this.strings = n;
  }
}
function Fs(t, e) {
  let { cursor: n, getKey: r } = t;
  return {
    setSelectedKeys(o) {
      e((i) => ({
        ...i,
        selectedKeys: o
      }));
    },
    setFilterText(o) {
      e((i) => ({
        ...i,
        filterText: o
      }));
    },
    insert(o, ...i) {
      e((l) => rt(l, o, ...i));
    },
    insertBefore(o, ...i) {
      e((l) => {
        let s = l.items.findIndex((u) => r(u) === o);
        if (s === -1)
          if (l.items.length === 0)
            s = 0;
          else
            return l;
        return rt(l, s, ...i);
      });
    },
    insertAfter(o, ...i) {
      e((l) => {
        let s = l.items.findIndex((u) => r(u) === o);
        if (s === -1)
          if (l.items.length === 0)
            s = 0;
          else
            return l;
        return rt(l, s + 1, ...i);
      });
    },
    prepend(...o) {
      e((i) => rt(i, 0, ...o));
    },
    append(...o) {
      e((i) => rt(i, i.items.length, ...o));
    },
    remove(...o) {
      e((i) => {
        let l = new Set(o), s = i.items.filter((a) => !l.has(r(a))), u = "all";
        if (i.selectedKeys !== "all") {
          u = new Set(i.selectedKeys);
          for (let a of o)
            u.delete(a);
        }
        return n == null && s.length === 0 && (u = /* @__PURE__ */ new Set()), {
          ...i,
          items: s,
          selectedKeys: u
        };
      });
    },
    removeSelectedItems() {
      e((o) => {
        if (o.selectedKeys === "all")
          return {
            ...o,
            items: [],
            selectedKeys: /* @__PURE__ */ new Set()
          };
        let i = o.selectedKeys, l = o.items.filter((s) => !i.has(r(s)));
        return {
          ...o,
          items: l,
          selectedKeys: /* @__PURE__ */ new Set()
        };
      });
    },
    move(o, i) {
      e((l) => {
        let s = l.items.findIndex((c) => r(c) === o);
        if (s === -1)
          return l;
        let u = l.items.slice(), [a] = u.splice(s, 1);
        return u.splice(i, 0, a), {
          ...l,
          items: u
        };
      });
    },
    moveBefore(o, i) {
      e((l) => {
        let s = l.items.findIndex((c) => r(c) === o);
        if (s === -1)
          return l;
        let a = (Array.isArray(i) ? i : [
          ...i
        ]).map((c) => l.items.findIndex((f) => r(f) === c)).sort();
        return pr(l, a, s);
      });
    },
    moveAfter(o, i) {
      e((l) => {
        let s = l.items.findIndex((c) => r(c) === o);
        if (s === -1)
          return l;
        let a = (Array.isArray(i) ? i : [
          ...i
        ]).map((c) => l.items.findIndex((f) => r(f) === c)).sort();
        return pr(l, a, s + 1);
      });
    },
    update(o, i) {
      e((l) => {
        let s = l.items.findIndex((u) => r(u) === o);
        return s === -1 ? l : {
          ...l,
          items: [
            ...l.items.slice(0, s),
            i,
            ...l.items.slice(s + 1)
          ]
        };
      });
    }
  };
}
function rt(t, e, ...n) {
  return {
    ...t,
    items: [
      ...t.items.slice(0, e),
      ...n,
      ...t.items.slice(e)
    ]
  };
}
function pr(t, e, n) {
  n -= e.filter((i) => i < n).length;
  let r = e.map((i) => ({
    from: i,
    to: n++
  }));
  for (let i = 0; i < r.length; i++) {
    let l = r[i].from;
    for (let s = i; s < r.length; s++)
      r[s].from > l && r[s].from--;
  }
  for (let i = 0; i < r.length; i++) {
    let l = r[i];
    for (let s = r.length - 1; s > i; s--) {
      let u = r[s];
      u.from < l.to ? l.to++ : u.from++;
    }
  }
  let o = t.items.slice();
  for (let i of r) {
    let [l] = o.splice(i.from, 1);
    o.splice(i.to, 0, l);
  }
  return {
    ...t,
    items: o
  };
}
function Ls(t, e) {
  let n;
  switch (t.state) {
    case "idle":
    case "error":
      switch (e.type) {
        case "loading":
        case "loadingMore":
        case "sorting":
        case "filtering":
          var r, o;
          return {
            ...t,
            filterText: (r = e.filterText) !== null && r !== void 0 ? r : t.filterText,
            state: e.type,
            // Reset items to an empty list if loading, but not when sorting.
            items: e.type === "loading" ? [] : t.items,
            sortDescriptor: (o = e.sortDescriptor) !== null && o !== void 0 ? o : t.sortDescriptor,
            abortController: e.abortController
          };
        case "update":
          return {
            ...t,
            ...e.updater(t)
          };
        case "success":
        case "error":
          return t;
        default:
          throw new Error(`Invalid action "${e.type}" in state "${t.state}"`);
      }
    case "loading":
    case "sorting":
    case "filtering":
      switch (e.type) {
        case "success":
          if (e.abortController !== t.abortController)
            return t;
          var i;
          n = (i = e.selectedKeys) !== null && i !== void 0 ? i : t.selectedKeys;
          var l, s;
          return {
            ...t,
            filterText: (l = e.filterText) !== null && l !== void 0 ? l : t.filterText,
            state: "idle",
            items: [
              ...e.items
            ],
            selectedKeys: n === "all" ? "all" : new Set(n),
            sortDescriptor: (s = e.sortDescriptor) !== null && s !== void 0 ? s : t.sortDescriptor,
            abortController: null,
            cursor: e.cursor
          };
        case "error":
          return e.abortController !== t.abortController ? t : {
            ...t,
            state: "error",
            error: e.error,
            abortController: null
          };
        case "loading":
        case "loadingMore":
        case "sorting":
        case "filtering":
          t.abortController.abort();
          var u;
          return {
            ...t,
            filterText: (u = e.filterText) !== null && u !== void 0 ? u : t.filterText,
            state: e.type,
            // Reset items to an empty list if loading, but not when sorting.
            items: e.type === "loading" ? [] : t.items,
            abortController: e.abortController
          };
        case "update":
          return {
            ...t,
            ...e.updater(t)
          };
        default:
          throw new Error(`Invalid action "${e.type}" in state "${t.state}"`);
      }
    case "loadingMore":
      switch (e.type) {
        case "success":
          var a;
          n = t.selectedKeys === "all" || e.selectedKeys === "all" ? "all" : /* @__PURE__ */ new Set([
            ...t.selectedKeys,
            ...(a = e.selectedKeys) !== null && a !== void 0 ? a : []
          ]);
          var c;
          return {
            ...t,
            state: "idle",
            items: [
              ...t.items,
              ...e.items
            ],
            selectedKeys: n,
            sortDescriptor: (c = e.sortDescriptor) !== null && c !== void 0 ? c : t.sortDescriptor,
            abortController: null,
            cursor: e.cursor
          };
        case "error":
          return e.abortController !== t.abortController ? t : {
            ...t,
            state: "error",
            error: e.error
          };
        case "loading":
        case "sorting":
        case "filtering":
          t.abortController.abort();
          var f;
          return {
            ...t,
            filterText: (f = e.filterText) !== null && f !== void 0 ? f : t.filterText,
            state: e.type,
            // Reset items to an empty list if loading, but not when sorting.
            items: e.type === "loading" ? [] : t.items,
            abortController: e.abortController
          };
        case "loadingMore":
          return e.abortController.abort(), t;
        case "update":
          return {
            ...t,
            ...e.updater(t)
          };
        default:
          throw new Error(`Invalid action "${e.type}" in state "${t.state}"`);
      }
    default:
      throw new Error(`Invalid state "${t.state}"`);
  }
}
<<<<<<< Updated upstream
function ad(t) {
=======
function dd(t) {
>>>>>>> Stashed changes
  const { load: e, sort: n, initialSelectedKeys: r, initialSortDescriptor: o, getKey: i = (f) => f.id || f.key, initialFilterText: l = "" } = t;
  let [s, u] = ss(Ls, {
    state: "idle",
    error: null,
    items: [],
    selectedKeys: r === "all" ? "all" : new Set(r),
    sortDescriptor: o,
    filterText: l
  });
  const a = async (f, b) => {
    let d = new AbortController();
    try {
      u({
        ...f,
        abortController: d
      });
      var v;
<<<<<<< Updated upstream
      let A = (v = f.filterText) !== null && v !== void 0 ? v : s.filterText;
      var g;
      let w = await b({
        items: s.items.slice(),
        selectedKeys: s.selectedKeys,
        sortDescriptor: (g = f.sortDescriptor) !== null && g !== void 0 ? g : s.sortDescriptor,
=======
      let _ = (v = f.filterText) !== null && v !== void 0 ? v : s.filterText;
      var y;
      let w = await p({
        items: s.items.slice(),
        selectedKeys: s.selectedKeys,
        sortDescriptor: (y = f.sortDescriptor) !== null && y !== void 0 ? y : s.sortDescriptor,
>>>>>>> Stashed changes
        signal: d.signal,
        cursor: f.type === "loadingMore" ? s.cursor : null,
        filterText: A
      });
      var h;
      let S = (h = w.filterText) !== null && h !== void 0 ? h : A;
      u({
        type: "success",
        ...w,
        abortController: d
      }), S && S !== A && !d.signal.aborted && a({
        type: "filtering",
        filterText: S
      }, e);
    } catch (A) {
      u({
        type: "error",
        error: A,
        abortController: d
      });
    }
  };
  let c = I(!1);
  return W(() => {
    c.current || (a({
      type: "loading"
    }, e), c.current = !0);
  }, []), {
    items: s.items,
    selectedKeys: s.selectedKeys,
    sortDescriptor: s.sortDescriptor,
    isLoading: s.state === "loading" || s.state === "loadingMore" || s.state === "sorting" || s.state === "filtering",
    loadingState: s.state,
    error: s.error,
    filterText: s.filterText,
    getItem(f) {
      return s.items.find((b) => i(b) === f);
    },
    reload() {
      a({
        type: "loading"
      }, e);
    },
    loadMore() {
      s.state === "loadingMore" || s.state === "filtering" || s.cursor == null || a({
        type: "loadingMore"
      }, e);
    },
    sort(f) {
      a({
        type: "sorting",
        sortDescriptor: f
      }, n || e);
    },
    ...Fs({
      ...t,
      getKey: i,
      cursor: s.cursor
    }, (f) => {
      u({
        type: "update",
        updater: f
      });
    }),
    setFilterText(f) {
      a({
        type: "filtering",
        filterText: f
      }, e);
    }
  };
}
function Ms(t) {
  let e = Vn(t), [n, r] = J(null), [o, i] = J([]), l = () => {
    i([]), e.close();
  };
  return {
    focusStrategy: n,
    ...e,
    open(a = null) {
      r(a), e.open();
    },
    toggle(a = null) {
      r(a), e.toggle();
    },
    close() {
      l();
    },
    UNSTABLE_expandedKeysStack: o,
    UNSTABLE_openSubmenu: (a, c) => {
      i((f) => c > f.length ? f : [
        ...f.slice(0, c),
        a
      ]);
    },
    UNSTABLE_closeSubmenu: (a, c) => {
      i((f) => f[c] === a ? f.slice(0, c) : f);
    }
  };
}
<<<<<<< Updated upstream
function ks(t) {
  let e = Vn(t), [n, r] = Z(null), o = fo({
=======
function Ns(t) {
  let e = Vn(t), [n, r] = J(null), o = fo({
>>>>>>> Stashed changes
    ...t,
    onSelectionChange: (u) => {
      t.onSelectionChange != null && t.onSelectionChange(u), e.close(), i.commitValidation();
    }
  }), i = On({
    ...t,
    value: o.selectedKey
  }), [l, s] = J(!1);
  return {
    ...i,
    ...o,
    ...e,
    focusStrategy: n,
    open(u = null) {
      o.collection.size !== 0 && (r(u), e.open());
    },
    toggle(u = null) {
      o.collection.size !== 0 && (r(u), e.toggle());
    },
    isFocused: l,
    setFocused: s
  };
}
class Ns {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let n = this.keyMap.get(e);
    return n ? n.prevKey : null;
  }
  getKeyAfter(e) {
    let n = this.keyMap.get(e);
    return n ? n.nextKey : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    return this.keyMap.get(e);
  }
  at(e) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[e]);
  }
  constructor(e, { expandedKeys: n } = {}) {
    this.keyMap = /* @__PURE__ */ new Map(), this.iterable = e, n = n || /* @__PURE__ */ new Set();
    let r = (l) => {
      if (this.keyMap.set(l.key, l), l.childNodes && (l.type === "section" || n.has(l.key)))
        for (let s of l.childNodes)
          r(s);
    };
    for (let l of e)
      r(l);
    let o, i = 0;
    for (let [l, s] of this.keyMap)
      o ? (o.nextKey = l, s.prevKey = o.key) : (this.firstKey = l, s.prevKey = void 0), s.type === "item" && (s.index = i++), o = s, o.nextKey = void 0;
    this.lastKey = o == null ? void 0 : o.key;
  }
}
function Is(t) {
  let [e, n] = tt(t.expandedKeys ? new Set(t.expandedKeys) : void 0, t.defaultExpandedKeys ? new Set(t.defaultExpandedKeys) : /* @__PURE__ */ new Set(), t.onExpandedChange), r = uo(t), o = re(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), i = so(t, te((s) => new Ns(s, {
    expandedKeys: e
  }), [
    e
  ]), null);
  return W(() => {
    r.focusedKey != null && !i.getItem(r.focusedKey) && r.setFocusedKey(null);
  }, [
    i,
    r.focusedKey
  ]), {
    collection: i,
    expandedKeys: e,
    disabledKeys: o,
    toggleKey: (s) => {
      n(Bs(e, s));
    },
    setExpandedKeys: n,
    selectionManager: new ao(i, r)
  };
}
function Bs(t, e) {
  let n = new Set(t);
  return n.has(e) ? n.delete(e) : n.add(e), n;
}
const Tt = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, bo = /* @__PURE__ */ X.createContext(Tt), Os = /* @__PURE__ */ X.createContext(!1);
let Rs = !!(typeof window < "u" && window.document && window.document.createElement), nn = /* @__PURE__ */ new WeakMap();
function Vs(t = !1) {
  let e = Se(bo), n = I(null);
  if (n.current === null && !t) {
    var r, o;
    let i = (o = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (r = o.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (i) {
      let l = nn.get(i);
      l == null ? nn.set(i, {
        id: e.current,
        state: i.memoizedState
      }) : i.memoizedState !== l.state && (e.current = l.id, nn.delete(i));
    }
    n.current = ++e.current;
  }
  return n.current;
}
function zs(t) {
  let e = Se(bo);
  e === Tt && !Rs && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = Vs(!!t), r = e === Tt && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${e.prefix}`;
  return t || `${r}-${n}`;
}
function js(t) {
  let e = X.useId(), [n] = J(Ht()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Tt.prefix}`;
  return t || `${r}-${e}`;
}
const Hs = typeof X.useId == "function" ? js : zs;
function Us() {
  return !1;
}
function Ws() {
  return !0;
}
function Gs(t) {
  return () => {
  };
}
function Ht() {
  return typeof X.useSyncExternalStore == "function" ? X.useSyncExternalStore(Gs, Us, Ws) : Se(Os);
}
function mo(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var o = t.length;
      for (e = 0; e < o; e++)
        t[e] && (n = mo(t[e])) && (r && (r += " "), r += n);
    } else
      for (n in t)
        t[n] && (r && (r += " "), r += n);
  return r;
}
function qs() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++)
    (t = arguments[n]) && (e = mo(t)) && (r && (r += " "), r += e);
  return r;
}
<<<<<<< Updated upstream
const de = typeof document < "u" ? Q.useLayoutEffect : () => {
=======
const fe = typeof document < "u" ? X.useLayoutEffect : () => {
>>>>>>> Stashed changes
};
function xe(t) {
  const e = I(null);
  return de(() => {
    e.current = t;
  }, [
    t
  ]), te((...n) => {
    const r = e.current;
    return r(...n);
  }, []);
}
function Ys(t) {
  let [e, n] = J(t), r = I(null), o = xe(() => {
    let l = r.current.next();
    if (l.done) {
      r.current = null;
      return;
    }
    e === l.value ? o() : n(l.value);
  });
  de(() => {
    r.current && o();
  });
  let i = xe((l) => {
    r.current = l(e), o();
  });
  return [
    e,
    i
  ];
}
let Xs = !!(typeof window < "u" && window.document && window.document.createElement), _t = /* @__PURE__ */ new Map();
function Ae(t) {
  let [e, n] = J(t), r = I(null), o = Hs(e), i = te((l) => {
    r.current = l;
  }, []);
  return Xs && _t.set(o, i), de(() => {
    let l = o;
    return () => {
      _t.delete(l);
    };
  }, [
    o
  ]), W(() => {
    let l = r.current;
    l && (r.current = null, n(l));
  }), o;
}
function Zs(t, e) {
  if (t === e)
    return t;
  let n = _t.get(t);
  if (n)
    return n(e), e;
  let r = _t.get(e);
  return r ? (r(t), t) : e;
}
function Oe(t = []) {
  let e = Ae(), [n, r] = Ys(e), o = te(() => {
    r(function* () {
      yield e, yield document.getElementById(e) ? e : void 0;
    });
  }, [
    e,
    r
  ]);
  return de(o, [
    e,
    o,
    ...t
  ]), n;
}
function Qe(...t) {
  return (...e) => {
    for (let n of t)
      typeof n == "function" && n(...e);
  };
}
const pe = (t) => {
  var e;
  return (e = t == null ? void 0 : t.ownerDocument) !== null && e !== void 0 ? e : document;
}, at = (t) => t && "window" in t && t.window === t ? t : pe(t).defaultView || window;
function ue(...t) {
  let e = {
    ...t[0]
  };
  for (let n = 1; n < t.length; n++) {
    let r = t[n];
    for (let o in r) {
      let i = e[o], l = r[o];
      typeof i == "function" && typeof l == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? e[o] = Qe(i, l) : (o === "className" || o === "UNSAFE_className") && typeof i == "string" && typeof l == "string" ? e[o] = qs(i, l) : o === "id" && i && l ? e.id = Zs(i, l) : e[o] = l !== void 0 ? l : i;
    }
  }
  return e;
}
const Js = /* @__PURE__ */ new Set([
  "id"
]), Qs = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), eu = /* @__PURE__ */ new Set([
  "href",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), tu = /^(data-.*)$/;
function ze(t, e = {}) {
  let { labelable: n, isLink: r, propNames: o } = e, i = {};
  for (const l in t)
    Object.prototype.hasOwnProperty.call(t, l) && (Js.has(l) || n && Qs.has(l) || r && eu.has(l) || o != null && o.has(l) || tu.test(l)) && (i[l] = t[l]);
  return i;
}
function Fe(t) {
  if (nu())
    t.focus({
      preventScroll: !0
    });
  else {
    let e = ru(t);
    t.focus(), ou(e);
  }
}
let ht = null;
function nu() {
  if (ht == null) {
    ht = !1;
    try {
      var t = document.createElement("div");
      t.focus({
        get preventScroll() {
          return ht = !0, !0;
        }
      });
    } catch {
    }
  }
  return ht;
}
function ru(t) {
  for (var e = t.parentNode, n = [], r = document.scrollingElement || document.documentElement; e instanceof HTMLElement && e !== r; )
    (e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && n.push({
      element: e,
      scrollTop: e.scrollTop,
      scrollLeft: e.scrollLeft
    }), e = e.parentNode;
  return r instanceof HTMLElement && n.push({
    element: r,
    scrollTop: r.scrollTop,
    scrollLeft: r.scrollLeft
  }), n;
}
function ou(t) {
  for (let { element: e, scrollTop: n, scrollLeft: r } of t)
    e.scrollTop = n, e.scrollLeft = r;
}
function Ut(t) {
  var e;
  return typeof window > "u" || window.navigator == null ? !1 : ((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.brands.some((n) => t.test(n.brand))) || t.test(window.navigator.userAgent);
}
function zn(t) {
  var e;
  return typeof window < "u" && window.navigator != null ? t.test(((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.platform) || window.navigator.platform) : !1;
}
function Ie() {
  return zn(/^Mac/i);
}
function iu() {
  return zn(/^iPhone/i);
}
function vo() {
  return zn(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Ie() && navigator.maxTouchPoints > 1;
}
function Wt() {
  return iu() || vo();
}
function wt() {
  return Ie() || Wt();
}
function ho() {
  return Ut(/AppleWebKit/i) && !lu();
}
function lu() {
  return Ut(/Chrome/i);
}
function go() {
  return Ut(/Android/i);
}
function su() {
  return Ut(/Firefox/i);
}
const uu = /* @__PURE__ */ Rt({
  isNative: !0,
  open: cu
});
function Gt() {
  return Se(uu);
}
function Re(t, e, n = !0) {
  var r, o;
  let { metaKey: i, ctrlKey: l, altKey: s, shiftKey: u } = e;
  su() && (!((o = window.event) === null || o === void 0 || (r = o.type) === null || r === void 0) && r.startsWith("key")) && t.target === "_blank" && (Ie() ? i = !0 : l = !0);
  let a = ho() && Ie() && !vo() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: i,
    ctrlKey: l,
    altKey: s,
    shiftKey: u
  }) : new MouseEvent("click", {
    metaKey: i,
    ctrlKey: l,
    altKey: s,
    shiftKey: u,
    bubbles: !0,
    cancelable: !0
  });
  Re.isOpening = n, Fe(t), t.dispatchEvent(a), Re.isOpening = !1;
}
Re.isOpening = !1;
function au(t, e) {
  if (t instanceof HTMLAnchorElement)
    e(t);
  else if (t.hasAttribute("data-href")) {
    let n = document.createElement("a");
    n.href = t.getAttribute("data-href"), t.hasAttribute("data-target") && (n.target = t.getAttribute("data-target")), t.hasAttribute("data-rel") && (n.rel = t.getAttribute("data-rel")), t.hasAttribute("data-download") && (n.download = t.getAttribute("data-download")), t.hasAttribute("data-ping") && (n.ping = t.getAttribute("data-ping")), t.hasAttribute("data-referrer-policy") && (n.referrerPolicy = t.getAttribute("data-referrer-policy")), t.appendChild(n), e(n), t.removeChild(n);
  }
}
function cu(t, e) {
  au(t, (n) => Re(n, e));
}
let qe = /* @__PURE__ */ new Map(), Sn = /* @__PURE__ */ new Set();
function br() {
  if (typeof window > "u")
    return;
  let t = (n) => {
    let r = qe.get(n.target);
    r || (r = /* @__PURE__ */ new Set(), qe.set(n.target, r), n.target.addEventListener("transitioncancel", e)), r.add(n.propertyName);
  }, e = (n) => {
    let r = qe.get(n.target);
    if (r && (r.delete(n.propertyName), r.size === 0 && (n.target.removeEventListener("transitioncancel", e), qe.delete(n.target)), qe.size === 0)) {
      for (let o of Sn)
        o();
      Sn.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", e);
}
typeof document < "u" && (document.readyState !== "loading" ? br() : document.addEventListener("DOMContentLoaded", br));
function $o(t) {
  requestAnimationFrame(() => {
    qe.size === 0 ? t() : Sn.add(t);
  });
}
function yo() {
  let t = I(/* @__PURE__ */ new Map()), e = te((o, i, l, s) => {
    let u = s != null && s.once ? (...a) => {
      t.current.delete(l), l(...a);
    } : l;
    t.current.set(l, {
      type: i,
      eventTarget: o,
      fn: u,
      options: s
    }), o.addEventListener(i, l, s);
  }, []), n = te((o, i, l, s) => {
    var u;
    let a = ((u = t.current.get(l)) === null || u === void 0 ? void 0 : u.fn) || l;
    o.removeEventListener(i, a, s), t.current.delete(l);
  }, []), r = te(() => {
    t.current.forEach((o, i) => {
      n(o.eventTarget, o.type, i, o.options);
    });
  }, [
    n
  ]);
  return W(() => r, [
    r
  ]), {
    addGlobalListener: e,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function At(t, e) {
  let { id: n, "aria-label": r, "aria-labelledby": o } = t;
  return n = Ae(n), o && r ? o = [
    .../* @__PURE__ */ new Set([
      n,
      ...o.trim().split(/\s+/)
    ])
  ].join(" ") : o && (o = o.trim().split(/\s+/).join(" ")), !r && !o && e && (r = e), {
    id: n,
    "aria-label": r,
    "aria-labelledby": o
  };
}
function du() {
  return typeof window.ResizeObserver < "u";
}
function fu(t) {
  const { ref: e, onResize: n } = t;
  W(() => {
    let r = e == null ? void 0 : e.current;
    if (r)
      if (du()) {
        const o = new window.ResizeObserver((i) => {
          i.length && n();
        });
        return o.observe(r), () => {
          r && o.unobserve(r);
        };
      } else
        return window.addEventListener("resize", n, !1), () => {
          window.removeEventListener("resize", n, !1);
        };
  }, [
    n,
    e
  ]);
}
function xo(t, e) {
  de(() => {
    if (t && t.ref && e)
      return t.ref.current = e.current, () => {
        t.ref.current = null;
      };
  });
}
function Kt(t, e) {
  for (Dt(t, e) && (t = t.parentElement); t && !Dt(t, e); )
    t = t.parentElement;
  return t || document.scrollingElement || document.documentElement;
}
function Dt(t, e) {
  let n = window.getComputedStyle(t), r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return r && e && (r = t.scrollHeight !== t.clientHeight || t.scrollWidth !== t.clientWidth), r;
}
let pu = 0;
const rn = /* @__PURE__ */ new Map();
function bu(t) {
<<<<<<< Updated upstream
  let [e, n] = Z(void 0);
  return de(() => {
=======
  let [e, n] = J(void 0);
  return fe(() => {
>>>>>>> Stashed changes
    if (!t)
      return;
    let r = rn.get(t);
    if (r)
      n(r.element.id);
    else {
      let o = `react-aria-description-${pu++}`;
      n(o);
      let i = document.createElement("div");
      i.id = o, i.style.display = "none", i.textContent = t, document.body.appendChild(i), r = {
        refCount: 0,
        element: i
      }, rn.set(t, r);
    }
    return r.refCount++, () => {
      --r.refCount === 0 && (r.element.remove(), rn.delete(t));
    };
  }, [
    t
  ]), {
    "aria-describedby": t ? e : void 0
  };
}
function mu(t, e, n, r) {
  let o = xe(n), i = n == null;
  W(() => {
    if (i)
      return;
    let l = t.current;
    return l.addEventListener(e, o, r), () => {
      l.removeEventListener(e, o, r);
    };
  }, [
    t,
    e,
    r,
    i,
    o
  ]);
}
function Co(t, e) {
  let n = mr(t, e, "left"), r = mr(t, e, "top"), o = e.offsetWidth, i = e.offsetHeight, l = t.scrollLeft, s = t.scrollTop, { borderTopWidth: u, borderLeftWidth: a } = getComputedStyle(t), c = t.scrollLeft + parseInt(a, 10), f = t.scrollTop + parseInt(u, 10), b = c + t.clientWidth, d = f + t.clientHeight;
  n <= l ? l = n - parseInt(a, 10) : n + o > b && (l += n + o - b), r <= f ? s = r - parseInt(u, 10) : r + i > d && (s += r + i - d), t.scrollLeft = l, t.scrollTop = s;
}
function mr(t, e, n) {
  const r = n === "left" ? "offsetLeft" : "offsetTop";
  let o = 0;
  for (; e.offsetParent && (o += e[r], e.offsetParent !== t); ) {
    if (e.offsetParent.contains(t)) {
      o -= t[r];
      break;
    }
    e = e.offsetParent;
  }
  return o;
}
function vr(t, e) {
  if (document.contains(t)) {
    let l = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(l).overflow === "hidden") {
      let u = Kt(t);
      for (; t && u && t !== l && u !== l; )
        Co(u, t), t = u, u = Kt(t);
    } else {
      var n;
      let { left: u, top: a } = t.getBoundingClientRect();
      t == null || (n = t.scrollIntoView) === null || n === void 0 || n.call(t, {
        block: "nearest"
      });
      let { left: c, top: f } = t.getBoundingClientRect();
      if (Math.abs(u - c) > 1 || Math.abs(a - f) > 1) {
        var r, o, i;
        e == null || (o = e.containingElement) === null || o === void 0 || (r = o.scrollIntoView) === null || r === void 0 || r.call(o, {
          block: "center",
          inline: "center"
        }), (i = t.scrollIntoView) === null || i === void 0 || i.call(t, {
          block: "nearest"
        });
      }
    }
  }
}
function Tn(t) {
  return t.mozInputSource === 0 && t.isTrusted ? !0 : go() && t.pointerType ? t.type === "click" && t.buttons === 1 : t.detail === 0 && !t.pointerType;
}
function vu(t) {
  return !go() && t.width === 0 && t.height === 0 || t.width === 1 && t.height === 1 && t.pressure === 0 && t.detail === 0 && t.pointerType === "mouse";
}
function Eo(t, e, n) {
  let r = I(e), o = xe(() => {
    n && n(r.current);
  });
  W(() => {
    var i;
    let l = t == null || (i = t.current) === null || i === void 0 ? void 0 : i.form;
    return l == null || l.addEventListener("reset", o), () => {
      l == null || l.removeEventListener("reset", o);
    };
  }, [
    t,
    o
  ]);
}
function hu(t, e) {
  return e.get ? e.get.call(t) : e.value;
}
function Po(t, e, n) {
  if (!e.has(t))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return e.get(t);
}
function gu(t, e) {
  var n = Po(t, e, "get");
  return hu(t, n);
}
function $u(t, e, n) {
  if (e.set)
    e.set.call(t, n);
  else {
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    e.value = n;
  }
}
function hr(t, e, n) {
  var r = Po(t, e, "set");
  return $u(t, r, n), n;
}
let Xe = "default", _n = "", St = /* @__PURE__ */ new WeakMap();
function gr(t) {
  if (Wt()) {
    if (Xe === "default") {
      const e = pe(t);
      _n = e.documentElement.style.webkitUserSelect, e.documentElement.style.webkitUserSelect = "none";
    }
    Xe = "disabled";
  } else
    (t instanceof HTMLElement || t instanceof SVGElement) && (St.set(t, t.style.userSelect), t.style.userSelect = "none");
}
function gt(t) {
  if (Wt()) {
    if (Xe !== "disabled")
      return;
    Xe = "restoring", setTimeout(() => {
      $o(() => {
        if (Xe === "restoring") {
          const e = pe(t);
          e.documentElement.style.webkitUserSelect === "none" && (e.documentElement.style.webkitUserSelect = _n || ""), _n = "", Xe = "default";
        }
      });
    }, 300);
  } else if ((t instanceof HTMLElement || t instanceof SVGElement) && t && St.has(t)) {
    let e = St.get(t);
    t.style.userSelect === "none" && (t.style.userSelect = e), t.getAttribute("style") === "" && t.removeAttribute("style"), St.delete(t);
  }
}
const jn = X.createContext({
  register: () => {
  }
});
jn.displayName = "PressResponderContext";
function yu(t) {
  let e = Se(jn);
  if (e) {
    let { register: n, ...r } = e;
    t = ue(r, t), n();
  }
  return xo(e, t.ref), t;
}
var $t = /* @__PURE__ */ new WeakMap();
class yt {
  continuePropagation() {
    hr(this, $t, !1);
  }
  get shouldStopPropagation() {
    return gu(this, $t);
  }
  constructor(e, n, r) {
    ms(this, $t, {
      writable: !0,
      value: void 0
    }), hr(this, $t, !0), this.type = e, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey;
  }
}
const $r = Symbol("linkClicked");
function qt(t) {
  let {
    onPress: e,
    onPressChange: n,
    onPressStart: r,
    onPressEnd: o,
    onPressUp: i,
    isDisabled: l,
    isPressed: s,
    preventFocusOnPress: u,
    shouldCancelOnPointerExit: a,
    allowTextSelectionOnPress: c,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: f,
<<<<<<< Updated upstream
    ...b
  } = yu(t), [d, v] = Z(!1), g = I({
=======
    ...p
  } = yu(t), [d, v] = J(!1), y = I({
>>>>>>> Stashed changes
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
<<<<<<< Updated upstream
  }), { addGlobalListener: h, removeAllGlobalListeners: A } = yo(), w = xe((p, _) => {
    let P = g.current;
    if (l || P.didFirePressStart)
=======
  }), { addGlobalListener: h, removeAllGlobalListeners: _ } = yo(), w = xe((b, A) => {
    let E = y.current;
    if (l || E.didFirePressStart)
>>>>>>> Stashed changes
      return !1;
    let C = !0;
    if (P.isTriggeringEvent = !0, r) {
      let B = new yt("pressstart", _, p);
      r(B), C = B.shouldStopPropagation;
    }
<<<<<<< Updated upstream
    return n && n(!0), P.isTriggeringEvent = !1, P.didFirePressStart = !0, v(!0), C;
  }), S = xe((p, _, P = !0) => {
    let C = g.current;
    if (!C.didFirePressStart)
=======
    return n && n(!0), E.isTriggeringEvent = !1, E.didFirePressStart = !0, v(!0), P;
  }), S = xe((b, A, E = !0) => {
    let P = y.current;
    if (!P.didFirePressStart)
>>>>>>> Stashed changes
      return !1;
    C.ignoreClickAfterPress = !0, C.didFirePressStart = !1, C.isTriggeringEvent = !0;
    let B = !0;
    if (o) {
      let E = new yt("pressend", _, p);
      o(E), B = E.shouldStopPropagation;
    }
    if (n && n(!1), v(!1), e && P && !l) {
      let E = new yt("press", _, p);
      e(E), B && (B = E.shouldStopPropagation);
    }
<<<<<<< Updated upstream
    return C.isTriggeringEvent = !1, B;
  }), K = xe((p, _) => {
    let P = g.current;
=======
    return P.isTriggeringEvent = !1, B;
  }), K = xe((b, A) => {
    let E = y.current;
>>>>>>> Stashed changes
    if (l)
      return !1;
    if (i) {
      P.isTriggeringEvent = !0;
      let C = new yt("pressup", _, p);
      return i(C), P.isTriggeringEvent = !1, C.shouldStopPropagation;
    }
    return !0;
<<<<<<< Updated upstream
  }), x = xe((p) => {
    let _ = g.current;
    _.isPressed && _.target && (_.isOverTarget && _.pointerType != null && S(Ke(_.target, p), _.pointerType, !1), _.isPressed = !1, _.isOverTarget = !1, _.activePointerId = null, _.pointerType = null, A(), c || gt(_.target));
  }), M = xe((p) => {
    a && x(p);
  }), R = ne(() => {
    let p = g.current, _ = {
      onKeyDown(C) {
        if (on(C.nativeEvent, C.currentTarget) && C.currentTarget.contains(C.target)) {
=======
  }), $ = xe((b) => {
    let A = y.current;
    A.isPressed && A.target && (A.isOverTarget && A.pointerType != null && S(Ke(A.target, b), A.pointerType, !1), A.isPressed = !1, A.isOverTarget = !1, A.activePointerId = null, A.pointerType = null, _(), c || gt(A.target));
  }), N = xe((b) => {
    a && $(b);
  }), R = re(() => {
    let b = y.current, A = {
      onKeyDown(P) {
        if (on(P.nativeEvent, P.currentTarget) && P.currentTarget.contains(P.target)) {
>>>>>>> Stashed changes
          var B;
          xr(C.target, C.key) && C.preventDefault();
          let E = !0;
          !p.isPressed && !C.repeat && (p.target = C.currentTarget, p.isPressed = !0, E = w(C, "keyboard"), h(pe(C.currentTarget), "keyup", P, !1)), E && C.stopPropagation(), C.metaKey && Ie() && ((B = p.metaKeyEvents) === null || B === void 0 || B.set(C.key, C.nativeEvent));
        } else
          C.key === "Meta" && (p.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onKeyUp(C) {
        on(C.nativeEvent, C.currentTarget) && !C.repeat && C.currentTarget.contains(C.target) && p.target && K(Ke(p.target, C), "keyboard");
      },
      onClick(C) {
        if (!(C && !C.currentTarget.contains(C.target)) && C && C.button === 0 && !p.isTriggeringEvent && !Re.isOpening) {
          let B = !0;
          if (l && C.preventDefault(), !p.ignoreClickAfterPress && !p.ignoreEmulatedMouseEvents && !p.isPressed && (p.pointerType === "virtual" || Tn(C.nativeEvent))) {
            !l && !u && Fe(C.currentTarget);
            let E = w(C, "virtual"), T = K(C, "virtual"), q = S(C, "virtual");
            B = E && T && q;
          }
          p.ignoreEmulatedMouseEvents = !1, p.ignoreClickAfterPress = !1, B && C.stopPropagation();
        }
      }
    }, P = (C) => {
      var B;
      if (p.isPressed && p.target && on(C, p.target)) {
        var E;
        xr(C.target, C.key) && C.preventDefault();
        let q = C.target, V = S(Ke(p.target, C), "keyboard", p.target.contains(q));
        A(), V && C.stopPropagation(), C.key !== "Enter" && Hn(p.target) && p.target.contains(q) && !C[$r] && (C[$r] = !0, Re(p.target, C, !1)), p.isPressed = !1, (E = p.metaKeyEvents) === null || E === void 0 || E.delete(C.key);
      } else if (C.key === "Meta" && (!((B = p.metaKeyEvents) === null || B === void 0) && B.size)) {
        var T;
        let q = p.metaKeyEvents;
        p.metaKeyEvents = void 0;
        for (let V of q.values())
          (T = p.target) === null || T === void 0 || T.dispatchEvent(new KeyboardEvent("keyup", V));
      }
    };
    if (typeof PointerEvent < "u") {
      _.onPointerDown = (T) => {
        if (T.button !== 0 || !T.currentTarget.contains(T.target))
          return;
        if (vu(T.nativeEvent)) {
          p.pointerType = "virtual";
          return;
        }
        ln(T.currentTarget) && T.preventDefault(), p.pointerType = T.pointerType;
        let q = !0;
        p.isPressed || (p.isPressed = !0, p.isOverTarget = !0, p.activePointerId = T.pointerId, p.target = T.currentTarget, !l && !u && Fe(T.currentTarget), c || gr(p.target), q = w(T, p.pointerType), h(pe(T.currentTarget), "pointermove", C, !1), h(pe(T.currentTarget), "pointerup", B, !1), h(pe(T.currentTarget), "pointercancel", E, !1)), q && T.stopPropagation();
      }, _.onMouseDown = (T) => {
        T.currentTarget.contains(T.target) && T.button === 0 && (ln(T.currentTarget) && T.preventDefault(), T.stopPropagation());
      }, _.onPointerUp = (T) => {
        !T.currentTarget.contains(T.target) || p.pointerType === "virtual" || T.button === 0 && Ue(T, T.currentTarget) && K(T, p.pointerType || T.pointerType);
      };
      let C = (T) => {
        T.pointerId === p.activePointerId && (p.target && Ue(T, p.target) ? !p.isOverTarget && p.pointerType != null && (p.isOverTarget = !0, w(Ke(p.target, T), p.pointerType)) : p.target && p.isOverTarget && p.pointerType != null && (p.isOverTarget = !1, S(Ke(p.target, T), p.pointerType, !1), M(T)));
      }, B = (T) => {
<<<<<<< Updated upstream
        T.pointerId === p.activePointerId && p.isPressed && T.button === 0 && p.target && (Ue(T, p.target) && p.pointerType != null ? S(Ke(p.target, T), p.pointerType) : p.isOverTarget && p.pointerType != null && S(Ke(p.target, T), p.pointerType, !1), p.isPressed = !1, p.isOverTarget = !1, p.activePointerId = null, p.pointerType = null, A(), c || gt(p.target));
      }, E = (T) => {
        x(T);
      };
      _.onDragStart = (T) => {
        T.currentTarget.contains(T.target) && x(T);
=======
        T.pointerId === b.activePointerId && b.isPressed && T.button === 0 && b.target && (Ue(T, b.target) && b.pointerType != null ? S(Ke(b.target, T), b.pointerType) : b.isOverTarget && b.pointerType != null && S(Ke(b.target, T), b.pointerType, !1), b.isPressed = !1, b.isOverTarget = !1, b.activePointerId = null, b.pointerType = null, _(), c || gt(b.target));
      }, C = (T) => {
        $(T);
      };
      A.onDragStart = (T) => {
        T.currentTarget.contains(T.target) && $(T);
>>>>>>> Stashed changes
      };
    } else {
      _.onMouseDown = (E) => {
        if (E.button !== 0 || !E.currentTarget.contains(E.target))
          return;
        if (ln(E.currentTarget) && E.preventDefault(), p.ignoreEmulatedMouseEvents) {
          E.stopPropagation();
          return;
        }
        p.isPressed = !0, p.isOverTarget = !0, p.target = E.currentTarget, p.pointerType = Tn(E.nativeEvent) ? "virtual" : "mouse", !l && !u && Fe(E.currentTarget), w(E, p.pointerType) && E.stopPropagation(), h(pe(E.currentTarget), "mouseup", C, !1);
      }, _.onMouseEnter = (E) => {
        if (!E.currentTarget.contains(E.target))
          return;
        let T = !0;
        p.isPressed && !p.ignoreEmulatedMouseEvents && p.pointerType != null && (p.isOverTarget = !0, T = w(E, p.pointerType)), T && E.stopPropagation();
      }, _.onMouseLeave = (E) => {
        if (!E.currentTarget.contains(E.target))
          return;
        let T = !0;
        p.isPressed && !p.ignoreEmulatedMouseEvents && p.pointerType != null && (p.isOverTarget = !1, T = S(E, p.pointerType, !1), M(E)), T && E.stopPropagation();
      }, _.onMouseUp = (E) => {
        E.currentTarget.contains(E.target) && !p.ignoreEmulatedMouseEvents && E.button === 0 && K(E, p.pointerType || "mouse");
      };
      let C = (E) => {
        if (E.button === 0) {
          if (p.isPressed = !1, A(), p.ignoreEmulatedMouseEvents) {
            p.ignoreEmulatedMouseEvents = !1;
            return;
          }
          p.target && Ue(E, p.target) && p.pointerType != null ? S(Ke(p.target, E), p.pointerType) : p.target && p.isOverTarget && p.pointerType != null && S(Ke(p.target, E), p.pointerType, !1), p.isOverTarget = !1;
        }
      };
      _.onTouchStart = (E) => {
        if (!E.currentTarget.contains(E.target))
          return;
        let T = xu(E.nativeEvent);
        if (!T)
          return;
        p.activePointerId = T.identifier, p.ignoreEmulatedMouseEvents = !0, p.isOverTarget = !0, p.isPressed = !0, p.target = E.currentTarget, p.pointerType = "touch", !l && !u && Fe(E.currentTarget), c || gr(p.target), w(E, p.pointerType) && E.stopPropagation(), h(at(E.currentTarget), "scroll", B, !0);
      }, _.onTouchMove = (E) => {
        if (!E.currentTarget.contains(E.target))
          return;
        if (!p.isPressed) {
          E.stopPropagation();
          return;
        }
        let T = yr(E.nativeEvent, p.activePointerId), q = !0;
        T && Ue(T, E.currentTarget) ? !p.isOverTarget && p.pointerType != null && (p.isOverTarget = !0, q = w(E, p.pointerType)) : p.isOverTarget && p.pointerType != null && (p.isOverTarget = !1, q = S(E, p.pointerType, !1), M(E)), q && E.stopPropagation();
      }, _.onTouchEnd = (E) => {
        if (!E.currentTarget.contains(E.target))
          return;
        if (!p.isPressed) {
          E.stopPropagation();
          return;
        }
<<<<<<< Updated upstream
        let T = yr(E.nativeEvent, p.activePointerId), q = !0;
        T && Ue(T, E.currentTarget) && p.pointerType != null ? (K(E, p.pointerType), q = S(E, p.pointerType)) : p.isOverTarget && p.pointerType != null && (q = S(E, p.pointerType, !1)), q && E.stopPropagation(), p.isPressed = !1, p.activePointerId = null, p.isOverTarget = !1, p.ignoreEmulatedMouseEvents = !0, p.target && !c && gt(p.target), A();
      }, _.onTouchCancel = (E) => {
        E.currentTarget.contains(E.target) && (E.stopPropagation(), p.isPressed && x(E));
      };
      let B = (E) => {
        p.isPressed && E.target.contains(p.target) && x({
          currentTarget: p.target,
=======
        let T = yr(C.nativeEvent, b.activePointerId), q = !0;
        T && Ue(T, C.currentTarget) && b.pointerType != null ? (K(C, b.pointerType), q = S(C, b.pointerType)) : b.isOverTarget && b.pointerType != null && (q = S(C, b.pointerType, !1)), q && C.stopPropagation(), b.isPressed = !1, b.activePointerId = null, b.isOverTarget = !1, b.ignoreEmulatedMouseEvents = !0, b.target && !c && gt(b.target), _();
      }, A.onTouchCancel = (C) => {
        C.currentTarget.contains(C.target) && (C.stopPropagation(), b.isPressed && $(C));
      };
      let B = (C) => {
        b.isPressed && C.target.contains(b.target) && $({
          currentTarget: b.target,
>>>>>>> Stashed changes
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
<<<<<<< Updated upstream
      _.onDragStart = (E) => {
        E.currentTarget.contains(E.target) && x(E);
=======
      A.onDragStart = (C) => {
        C.currentTarget.contains(C.target) && $(C);
>>>>>>> Stashed changes
      };
    }
    return _;
  }, [
    h,
    l,
    u,
    A,
    c,
<<<<<<< Updated upstream
    x,
    M,
=======
    $,
    N,
>>>>>>> Stashed changes
    S,
    w,
    K
  ]);
  return W(() => () => {
<<<<<<< Updated upstream
    var p;
    c || gt((p = g.current.target) !== null && p !== void 0 ? p : void 0);
=======
    var b;
    c || gt((b = y.current.target) !== null && b !== void 0 ? b : void 0);
>>>>>>> Stashed changes
  }, [
    c
  ]), {
    isPressed: s || d,
<<<<<<< Updated upstream
    pressProps: se(b, R)
=======
    pressProps: ue(p, R)
>>>>>>> Stashed changes
  };
}
function Hn(t) {
  return t.tagName === "A" && t.hasAttribute("href");
}
function on(t, e) {
  const { key: n, code: r } = t, o = e, i = o.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(o instanceof at(o).HTMLInputElement && !wo(o, n) || o instanceof at(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && Hn(o)) && n !== "Enter");
}
function xu(t) {
  const { targetTouches: e } = t;
  return e.length > 0 ? e[0] : null;
}
function yr(t, e) {
  const n = t.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (o.identifier === e)
      return o;
  }
  return null;
}
function Ke(t, e) {
  return {
    currentTarget: t,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey
  };
}
function Cu(t) {
  let e = 0, n = 0;
  return t.width !== void 0 ? e = t.width / 2 : t.radiusX !== void 0 && (e = t.radiusX), t.height !== void 0 ? n = t.height / 2 : t.radiusY !== void 0 && (n = t.radiusY), {
    top: t.clientY - n,
    right: t.clientX + e,
    bottom: t.clientY + n,
    left: t.clientX - e
  };
}
function Eu(t, e) {
  return !(t.left > e.right || e.left > t.right || t.top > e.bottom || e.top > t.bottom);
}
function Ue(t, e) {
  let n = e.getBoundingClientRect(), r = Cu(t);
  return Eu(n, r);
}
function ln(t) {
  return !(t instanceof HTMLElement) || !t.hasAttribute("draggable");
}
function xr(t, e) {
  return t instanceof HTMLInputElement ? !wo(t, e) : t instanceof HTMLButtonElement ? t.type !== "submit" && t.type !== "reset" : !Hn(t);
}
const Pu = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function wo(t, e) {
  return t.type === "checkbox" || t.type === "radio" ? e === " " : Pu.has(t.type);
}
function wu({ children: t }) {
  let e = re(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ X.createElement(jn.Provider, {
    value: e
  }, t);
}
class Su {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(e, n) {
    this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = e;
  }
}
function So(t) {
  let e = I({
    isFocused: !1,
    observer: null
  });
  de(() => {
    const r = e.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = xe((r) => {
    t == null || t(r);
  });
  return te((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      e.current.isFocused = !0;
      let o = r.target, i = (l) => {
        e.current.isFocused = !1, o.disabled && n(new Su("blur", l)), e.current.observer && (e.current.observer.disconnect(), e.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), e.current.observer = new MutationObserver(() => {
        if (e.current.isFocused && o.disabled) {
          var l;
          (l = e.current.observer) === null || l === void 0 || l.disconnect();
          let s = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: s
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: s
          }));
        }
      }), e.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
function Un(t) {
  let { isDisabled: e, onFocus: n, onBlur: r, onFocusChange: o } = t;
  const i = te((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = So(i), s = te((u) => {
    u.target === u.currentTarget && document.activeElement === u.target && (n && n(u), o && o(!0), l(u));
  }, [
    o,
    n,
    l
  ]);
  return {
    focusProps: {
      onFocus: !e && (n || o || r) ? s : void 0,
      onBlur: !e && (r || o) ? i : void 0
    }
  };
}
let ke = null, ct = /* @__PURE__ */ new Set(), Cr = !1, Ve = !1, An = !1;
const Tu = {
  Tab: !0,
  Escape: !0
};
function Yt(t, e) {
  for (let n of ct)
    n(t, e);
}
function _u(t) {
  return !(t.metaKey || !Ie() && t.altKey || t.ctrlKey || t.key === "Control" || t.key === "Shift" || t.key === "Meta");
}
function Er(t) {
  Ve = !0, _u(t) && (ke = "keyboard", Yt("keyboard", t));
}
function We(t) {
  ke = "pointer", (t.type === "mousedown" || t.type === "pointerdown") && (Ve = !0, Yt("pointer", t));
}
function Au(t) {
  Tn(t) && (Ve = !0, ke = "virtual");
}
function Ku(t) {
  t.target === window || t.target === document || (!Ve && !An && (ke = "virtual", Yt("virtual", t)), Ve = !1, An = !1);
}
function Du() {
  Ve = !1, An = !0;
}
function Ft() {
  if (typeof window > "u" || Cr)
    return;
  let t = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    Ve = !0, t.apply(this, arguments);
  }, document.addEventListener("keydown", Er, !0), document.addEventListener("keyup", Er, !0), document.addEventListener("click", Au, !0), window.addEventListener("focus", Ku, !0), window.addEventListener("blur", Du, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", We, !0), document.addEventListener("pointermove", We, !0), document.addEventListener("pointerup", We, !0)) : (document.addEventListener("mousedown", We, !0), document.addEventListener("mousemove", We, !0), document.addEventListener("mouseup", We, !0)), Cr = !0;
}
typeof document < "u" && (document.readyState !== "loading" ? Ft() : document.addEventListener("DOMContentLoaded", Ft));
function dt() {
  return ke !== "pointer";
}
function Kn() {
  return ke;
}
function To(t) {
  ke = t, Yt(t, null);
}
function Fu() {
  Ft();
<<<<<<< Updated upstream
  let [t, e] = Z(ke);
=======
  let [t, e] = J(Ne);
>>>>>>> Stashed changes
  return W(() => {
    let n = () => {
      e(ke);
    };
    return ct.add(n), () => {
      ct.delete(n);
    };
  }, []), Ht() ? null : t;
}
const Lu = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Mu(t, e, n) {
  var r;
  return t = t || (n == null ? void 0 : n.target) instanceof HTMLInputElement && !Lu.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof HTMLTextAreaElement || (n == null ? void 0 : n.target) instanceof HTMLElement && (n == null ? void 0 : n.target.isContentEditable), !(t && e === "keyboard" && n instanceof KeyboardEvent && !Tu[n.key]);
}
function ku(t, e, n) {
  Ft(), W(() => {
    let r = (o, i) => {
      Mu(!!(n != null && n.isTextInput), o, i) && t(dt());
    };
    return ct.add(r), () => {
      ct.delete(r);
    };
  }, e);
}
function Xt(t) {
  let { isDisabled: e, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = t, i = I({
    isFocusWithin: !1
  }), l = te((a) => {
    i.current.isFocusWithin && !a.currentTarget.contains(a.relatedTarget) && (i.current.isFocusWithin = !1, n && n(a), o && o(!1));
  }, [
    n,
    o,
    i
  ]), s = So(l), u = te((a) => {
    !i.current.isFocusWithin && document.activeElement === a.target && (r && r(a), o && o(!0), i.current.isFocusWithin = !0, s(a));
  }, [
    r,
    o,
    s
  ]);
  return e ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: u,
      onBlur: l
    }
  };
}
let Lt = !1, sn = 0;
function Dn() {
  Lt = !0, setTimeout(() => {
    Lt = !1;
  }, 50);
}
function Pr(t) {
  t.pointerType === "touch" && Dn();
}
function Nu() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Pr) : document.addEventListener("touchend", Dn), sn++, () => {
      sn--, !(sn > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Pr) : document.removeEventListener("touchend", Dn));
    };
}
function _o(t) {
  let { onHoverStart: e, onHoverChange: n, onHoverEnd: r, isDisabled: o } = t, [i, l] = J(!1), s = I({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
<<<<<<< Updated upstream
  W(Nu, []);
  let { hoverProps: u, triggerHoverEnd: a } = ne(() => {
=======
  W(ku, []);
  let { hoverProps: u, triggerHoverEnd: a } = re(() => {
>>>>>>> Stashed changes
    let c = (d, v) => {
      if (s.pointerType = v, o || v === "touch" || s.isHovered || !d.currentTarget.contains(d.target))
        return;
      s.isHovered = !0;
<<<<<<< Updated upstream
      let g = d.currentTarget;
      s.target = g, e && e({
        type: "hoverstart",
        target: g,
=======
      let y = d.currentTarget;
      s.target = y, e && e({
        type: "hoverstart",
        target: y,
>>>>>>> Stashed changes
        pointerType: v
      }), n && n(!0), l(!0);
    }, f = (d, v) => {
      if (s.pointerType = "", s.target = null, v === "touch" || !s.isHovered)
        return;
      s.isHovered = !1;
<<<<<<< Updated upstream
      let g = d.currentTarget;
      r && r({
        type: "hoverend",
        target: g,
=======
      let y = d.currentTarget;
      r && r({
        type: "hoverend",
        target: y,
>>>>>>> Stashed changes
        pointerType: v
      }), n && n(!1), l(!1);
    }, b = {};
    return typeof PointerEvent < "u" ? (b.onPointerEnter = (d) => {
      Lt && d.pointerType === "mouse" || c(d, d.pointerType);
    }, b.onPointerLeave = (d) => {
      !o && d.currentTarget.contains(d.target) && f(d, d.pointerType);
    }) : (b.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, b.onMouseEnter = (d) => {
      !s.ignoreEmulatedMouseEvents && !Lt && c(d, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, b.onMouseLeave = (d) => {
      !o && d.currentTarget.contains(d.target) && f(d, "mouse");
    }), {
      hoverProps: b,
      triggerHoverEnd: f
    };
  }, [
    e,
    n,
    r,
    o,
    s
  ]);
  return W(() => {
    o && a({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    o
  ]), {
    hoverProps: u,
    isHovered: i
  };
}
function Iu(t) {
  let { ref: e, onInteractOutside: n, isDisabled: r, onInteractOutsideStart: o } = t, i = I({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), l = xe((u) => {
    n && xt(u, e) && (o && o(u), i.current.isPointerDown = !0);
  }), s = xe((u) => {
    n && n(u);
  });
  W(() => {
    let u = i.current;
    if (r)
      return;
    const a = e.current, c = pe(a);
    if (typeof PointerEvent < "u") {
      let f = (b) => {
        u.isPointerDown && xt(b, e) && s(b), u.isPointerDown = !1;
      };
      return c.addEventListener("pointerdown", l, !0), c.addEventListener("pointerup", f, !0), () => {
        c.removeEventListener("pointerdown", l, !0), c.removeEventListener("pointerup", f, !0);
      };
    } else {
      let f = (d) => {
        u.ignoreEmulatedMouseEvents ? u.ignoreEmulatedMouseEvents = !1 : u.isPointerDown && xt(d, e) && s(d), u.isPointerDown = !1;
      }, b = (d) => {
        u.ignoreEmulatedMouseEvents = !0, u.isPointerDown && xt(d, e) && s(d), u.isPointerDown = !1;
      };
      return c.addEventListener("mousedown", l, !0), c.addEventListener("mouseup", f, !0), c.addEventListener("touchstart", l, !0), c.addEventListener("touchend", b, !0), () => {
        c.removeEventListener("mousedown", l, !0), c.removeEventListener("mouseup", f, !0), c.removeEventListener("touchstart", l, !0), c.removeEventListener("touchend", b, !0);
      };
    }
  }, [
    e,
    r,
    l,
    s
  ]);
}
function xt(t, e) {
  if (t.button > 0)
    return !1;
  if (t.target) {
    const n = t.target.ownerDocument;
    if (!n || !n.documentElement.contains(t.target) || t.target.closest("[data-react-aria-top-layer]"))
      return !1;
  }
  return e.current && !e.current.contains(t.target);
}
function wr(t) {
  if (!t)
    return;
  let e = !0;
  return (n) => {
    let r = {
      ...n,
      preventDefault() {
        n.preventDefault();
      },
      isDefaultPrevented() {
        return n.isDefaultPrevented();
      },
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
      },
      continuePropagation() {
        e = !1;
      }
    };
    t(r), e && n.stopPropagation();
  };
}
function Ao(t) {
  return {
    keyboardProps: t.isDisabled ? {} : {
      onKeyDown: wr(t.onKeyDown),
      onKeyUp: wr(t.onKeyUp)
    }
  };
}
const Bu = 500;
function Ko(t) {
  let { isDisabled: e, onLongPressStart: n, onLongPressEnd: r, onLongPress: o, threshold: i = Bu, accessibilityDescription: l } = t;
  const s = I();
  let { addGlobalListener: u, removeGlobalListener: a } = yo(), { pressProps: c } = qt({
    isDisabled: e,
    onPressStart(b) {
      if (b.continuePropagation(), (b.pointerType === "mouse" || b.pointerType === "touch") && (n && n({
        ...b,
        type: "longpressstart"
      }), s.current = setTimeout(() => {
        b.target.dispatchEvent(new PointerEvent("pointercancel", {
          bubbles: !0
        })), o && o({
          ...b,
          type: "longpress"
        }), s.current = void 0;
      }, i), b.pointerType === "touch")) {
        let d = (v) => {
          v.preventDefault();
        };
        u(b.target, "contextmenu", d, {
          once: !0
        }), u(window, "pointerup", () => {
          setTimeout(() => {
            a(b.target, "contextmenu", d);
          }, 30);
        }, {
          once: !0
        });
      }
    },
    onPressEnd(b) {
      s.current && clearTimeout(s.current), r && (b.pointerType === "mouse" || b.pointerType === "touch") && r({
        ...b,
        type: "longpressend"
      });
    }
  }), f = bu(o && !e ? l : void 0);
  return {
    longPressProps: ue(c, f)
  };
}
function ft(t) {
  const e = pe(t);
  if (Kn() === "virtual") {
    let n = e.activeElement;
    $o(() => {
      e.activeElement === n && t.isConnected && Fe(t);
    });
  } else
    Fe(t);
}
function Ou(t) {
  const e = at(t);
  if (!(t instanceof e.HTMLElement) && !(t instanceof e.SVGElement))
    return !1;
  let { display: n, visibility: r } = t.style, o = n !== "none" && r !== "hidden" && r !== "collapse";
  if (o) {
    const { getComputedStyle: i } = t.ownerDocument.defaultView;
    let { display: l, visibility: s } = i(t);
    o = l !== "none" && s !== "hidden" && s !== "collapse";
  }
  return o;
}
function Ru(t, e) {
  return !t.hasAttribute("hidden") && (t.nodeName === "DETAILS" && e && e.nodeName !== "SUMMARY" ? t.hasAttribute("open") : !0);
}
function Do(t, e) {
  return t.nodeName !== "#comment" && Ou(t) && Ru(t, e) && (!t.parentElement || Do(t.parentElement, t));
}
const Sr = /* @__PURE__ */ X.createContext(null);
let le = null;
function Vu(t) {
  let { children: e, contain: n, restoreFocus: r, autoFocus: o } = t, i = I(null), l = I(null), s = I([]), { parentNode: u } = Se(Sr) || {}, a = re(() => new Fn({
    scopeRef: s
  }), [
    s
  ]);
<<<<<<< Updated upstream
  de(() => {
    let b = u || be.root;
    if (be.getTreeNode(b.scopeRef) && le && !kt(le, b.scopeRef)) {
      let d = be.getTreeNode(le);
      d && (b = d);
    }
    b.addChild(a), be.addNode(a);
  }, [
    a,
    u
  ]), de(() => {
    let b = be.getTreeNode(s);
    b && (b.contain = !!n);
=======
  fe(() => {
    let p = u || me.root;
    if (me.getTreeNode(p.scopeRef) && le && !Nt(le, p.scopeRef)) {
      let d = me.getTreeNode(le);
      d && (p = d);
    }
    p.addChild(a), me.addNode(a);
  }, [
    a,
    u
  ]), fe(() => {
    let p = me.getTreeNode(s);
    p && (p.contain = !!n);
>>>>>>> Stashed changes
  }, [
    n
  ]), de(() => {
    var b;
    let d = (b = i.current) === null || b === void 0 ? void 0 : b.nextSibling, v = [];
    for (; d && d !== l.current; )
      v.push(d), d = d.nextSibling;
    s.current = v;
  }, [
    e
  ]), qu(s, r, n), Uu(s, n), Xu(s, r, n), Gu(s, o), W(() => {
    const b = pe(s.current ? s.current[0] : void 0).activeElement;
    let d = null;
<<<<<<< Updated upstream
    if (ge(b, s.current)) {
      for (let v of be.traverse())
        v.scopeRef && ge(b, v.scopeRef.current) && (d = v);
      d === be.getTreeNode(s) && (le = d.scopeRef);
    }
  }, [
    s
  ]), de(() => () => {
    var b, d, v;
    let g = (v = (d = be.getTreeNode(s)) === null || d === void 0 || (b = d.parent) === null || b === void 0 ? void 0 : b.scopeRef) !== null && v !== void 0 ? v : null;
    (s === le || kt(s, le)) && (!g || be.getTreeNode(g)) && (le = g), be.removeTreeNode(s);
=======
    if (ge(p, s.current)) {
      for (let v of me.traverse())
        v.scopeRef && ge(p, v.scopeRef.current) && (d = v);
      d === me.getTreeNode(s) && (le = d.scopeRef);
    }
  }, [
    s
  ]), fe(() => () => {
    var p, d, v;
    let y = (v = (d = me.getTreeNode(s)) === null || d === void 0 || (p = d.parent) === null || p === void 0 ? void 0 : p.scopeRef) !== null && v !== void 0 ? v : null;
    (s === le || Nt(s, le)) && (!y || me.getTreeNode(y)) && (le = y), me.removeTreeNode(s);
>>>>>>> Stashed changes
  }, [
    s
  ]);
  let c = re(() => zu(s), []), f = re(() => ({
    focusManager: c,
    parentNode: a
  }), [
    a,
    c
  ]);
  return /* @__PURE__ */ X.createElement(Sr.Provider, {
    value: f
  }, /* @__PURE__ */ X.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: i
  }), e, /* @__PURE__ */ X.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: l
  }));
}
function zu(t) {
  return {
    focusNext(e = {}) {
      let n = t.current, { from: r, tabbable: o, wrap: i, accept: l } = e, s = r || pe(n[0]).activeElement, u = n[0].previousElementSibling, a = Be(n), c = Me(a, {
        tabbable: o,
        accept: l
      }, n);
      c.currentNode = ge(s, n) ? s : u;
      let f = c.nextNode();
      return !f && i && (c.currentNode = u, f = c.nextNode()), f && Le(f, !0), f;
    },
    focusPrevious(e = {}) {
      let n = t.current, { from: r, tabbable: o, wrap: i, accept: l } = e, s = r || pe(n[0]).activeElement, u = n[n.length - 1].nextElementSibling, a = Be(n), c = Me(a, {
        tabbable: o,
        accept: l
      }, n);
      c.currentNode = ge(s, n) ? s : u;
      let f = c.previousNode();
      return !f && i && (c.currentNode = u, f = c.previousNode()), f && Le(f, !0), f;
    },
    focusFirst(e = {}) {
      let n = t.current, { tabbable: r, accept: o } = e, i = Be(n), l = Me(i, {
        tabbable: r,
        accept: o
      }, n);
      l.currentNode = n[0].previousElementSibling;
      let s = l.nextNode();
      return s && Le(s, !0), s;
    },
    focusLast(e = {}) {
      let n = t.current, { tabbable: r, accept: o } = e, i = Be(n), l = Me(i, {
        tabbable: r,
        accept: o
      }, n);
      l.currentNode = n[n.length - 1].nextElementSibling;
      let s = l.previousNode();
      return s && Le(s, !0), s;
    }
  };
}
const Wn = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
], ju = Wn.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Wn.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const Hu = Wn.join(':not([hidden]):not([tabindex="-1"]),');
function Be(t) {
  return t[0].parentElement;
}
function lt(t) {
  let e = me.getTreeNode(le);
  for (; e && e.scopeRef !== t; ) {
    if (e.contain)
      return !1;
    e = e.parent;
  }
  return !0;
}
function Uu(t, e) {
  let n = I(), r = I();
  de(() => {
    let o = t.current;
    if (!e) {
      r.current && (cancelAnimationFrame(r.current), r.current = void 0);
      return;
    }
    const i = pe(o ? o[0] : void 0);
    let l = (a) => {
      if (a.key !== "Tab" || a.altKey || a.ctrlKey || a.metaKey || !lt(t))
        return;
      let c = i.activeElement, f = t.current;
      if (!f || !ge(c, f))
        return;
      let b = Be(f), d = Me(b, {
        tabbable: !0
      }, f);
      if (!c)
        return;
      d.currentNode = c;
      let v = a.shiftKey ? d.previousNode() : d.nextNode();
      v || (d.currentNode = a.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, v = a.shiftKey ? d.previousNode() : d.nextNode()), a.preventDefault(), v && Le(v, !0);
    }, s = (a) => {
      (!le || kt(le, t)) && ge(a.target, t.current) ? (le = t, n.current = a.target) : lt(t) && !Mt(a.target, t) ? n.current ? n.current.focus() : le && le.current && Nt(le.current) : lt(t) && (n.current = a.target);
    }, u = (a) => {
      r.current && cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
        if (i.activeElement && lt(t) && !Mt(i.activeElement, t))
          if (le = t, i.body.contains(a.target)) {
            var c;
            n.current = a.target, (c = n.current) === null || c === void 0 || c.focus();
          } else
            le.current && Nt(le.current);
      });
    };
    return i.addEventListener("keydown", l, !1), i.addEventListener("focusin", s, !1), o == null || o.forEach((a) => a.addEventListener("focusin", s, !1)), o == null || o.forEach((a) => a.addEventListener("focusout", u, !1)), () => {
      i.removeEventListener("keydown", l, !1), i.removeEventListener("focusin", s, !1), o == null || o.forEach((a) => a.removeEventListener("focusin", s, !1)), o == null || o.forEach((a) => a.removeEventListener("focusout", u, !1));
    };
  }, [
    t,
    e
  ]), de(() => () => {
    r.current && cancelAnimationFrame(r.current);
  }, [
    r
  ]);
}
function Fo(t) {
  return Mt(t);
}
function ge(t, e) {
  return !t || !e ? !1 : e.some((n) => n.contains(t));
}
function Mt(t, e = null) {
  if (t instanceof Element && t.closest("[data-react-aria-top-layer]"))
    return !0;
  for (let { scopeRef: n } of me.traverse(me.getTreeNode(e)))
    if (n && ge(t, n.current))
      return !0;
  return !1;
}
function Wu(t) {
  return Mt(t, le);
}
function kt(t, e) {
  var n;
  let r = (n = me.getTreeNode(e)) === null || n === void 0 ? void 0 : n.parent;
  for (; r; ) {
    if (r.scopeRef === t)
      return !0;
    r = r.parent;
  }
  return !1;
}
function Le(t, e = !1) {
  if (t != null && !e)
    try {
      ft(t);
    } catch {
    }
  else if (t != null)
    try {
      t.focus();
    } catch {
    }
}
function Nt(t, e = !0) {
  let n = t[0].previousElementSibling, r = Be(t), o = Me(r, {
    tabbable: e
  }, t);
  o.currentNode = n;
  let i = o.nextNode();
  e && !i && (r = Be(t), o = Me(r, {
    tabbable: !1
  }, t), o.currentNode = n, i = o.nextNode()), Le(i);
}
function Gu(t, e) {
  const n = X.useRef(e);
  W(() => {
    if (n.current) {
      le = t;
      const r = pe(t.current ? t.current[0] : void 0);
      !ge(r.activeElement, le.current) && t.current && Nt(t.current);
    }
    n.current = !1;
  }, [
    t
  ]);
}
function qu(t, e, n) {
  de(() => {
    if (e || n)
      return;
    let r = t.current;
    const o = pe(r ? r[0] : void 0);
    let i = (l) => {
      let s = l.target;
      ge(s, t.current) ? le = t : Fo(s) || (le = null);
    };
    return o.addEventListener("focusin", i, !1), r == null || r.forEach((l) => l.addEventListener("focusin", i, !1)), () => {
      o.removeEventListener("focusin", i, !1), r == null || r.forEach((l) => l.removeEventListener("focusin", i, !1));
    };
  }, [
    t,
    e,
    n
  ]);
}
function Yu(t) {
  let e = me.getTreeNode(le);
  for (; e && e.scopeRef !== t; ) {
    if (e.nodeToRestore)
      return !1;
    e = e.parent;
  }
  return (e == null ? void 0 : e.scopeRef) === t;
}
function Xu(t, e, n) {
  const r = I(typeof document < "u" ? pe(t.current ? t.current[0] : void 0).activeElement : null);
  de(() => {
    let o = t.current;
    const i = pe(o ? o[0] : void 0);
    if (!e || n)
      return;
    let l = () => {
      (!le || kt(le, t)) && ge(i.activeElement, t.current) && (le = t);
    };
    return i.addEventListener("focusin", l, !1), o == null || o.forEach((s) => s.addEventListener("focusin", l, !1)), () => {
      i.removeEventListener("focusin", l, !1), o == null || o.forEach((s) => s.removeEventListener("focusin", l, !1));
    };
  }, [
    t,
    n
  ]), de(() => {
    const o = pe(t.current ? t.current[0] : void 0);
    if (!e)
      return;
    let i = (l) => {
      if (l.key !== "Tab" || l.altKey || l.ctrlKey || l.metaKey || !lt(t))
        return;
      let s = o.activeElement;
      if (!ge(s, t.current))
        return;
      let u = me.getTreeNode(t);
      if (!u)
        return;
      let a = u.nodeToRestore, c = Me(o.body, {
        tabbable: !0
      });
      c.currentNode = s;
      let f = l.shiftKey ? c.previousNode() : c.nextNode();
      if ((!a || !o.body.contains(a) || a === o.body) && (a = void 0, u.nodeToRestore = void 0), (!f || !ge(f, t.current)) && a) {
        c.currentNode = a;
        do
          f = l.shiftKey ? c.previousNode() : c.nextNode();
        while (ge(f, t.current));
        l.preventDefault(), l.stopPropagation(), f ? Le(f, !0) : Fo(a) ? Le(a, !0) : s.blur();
      }
    };
    return n || o.addEventListener("keydown", i, !0), () => {
      n || o.removeEventListener("keydown", i, !0);
    };
  }, [
    t,
    e,
    n
  ]), de(() => {
    const o = pe(t.current ? t.current[0] : void 0);
    if (!e)
      return;
    let i = me.getTreeNode(t);
    if (i) {
      var l;
      return i.nodeToRestore = (l = r.current) !== null && l !== void 0 ? l : void 0, () => {
        let s = me.getTreeNode(t);
        if (!s)
          return;
        let u = s.nodeToRestore;
        if (e && u && // eslint-disable-next-line react-hooks/exhaustive-deps
        (ge(o.activeElement, t.current) || o.activeElement === o.body && Yu(t))) {
          let a = me.clone();
          requestAnimationFrame(() => {
            if (o.activeElement === o.body) {
              let c = a.getTreeNode(t);
              for (; c; ) {
                if (c.nodeToRestore && c.nodeToRestore.isConnected) {
                  Le(c.nodeToRestore);
                  return;
                }
                c = c.parent;
              }
              for (c = a.getTreeNode(t); c; ) {
<<<<<<< Updated upstream
                if (c.scopeRef && c.scopeRef.current && be.getTreeNode(c.scopeRef)) {
                  Nt(c.scopeRef.current, !0);
=======
                if (c.scopeRef && c.scopeRef.current && me.getTreeNode(c.scopeRef)) {
                  kt(c.scopeRef.current, !0);
>>>>>>> Stashed changes
                  return;
                }
                c = c.parent;
              }
            }
          });
        }
      };
    }
  }, [
    t,
    e
  ]);
}
function Me(t, e, n) {
  let r = e != null && e.tabbable ? Hu : ju, o = pe(t).createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode(i) {
      var l;
      return !(e == null || (l = e.from) === null || l === void 0) && l.contains(i) ? NodeFilter.FILTER_REJECT : i.matches(r) && Do(i) && (!n || ge(i, n)) && (!(e != null && e.accept) || e.accept(i)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return e != null && e.from && (o.currentNode = e.from), o;
}
class Gn {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(e) {
    return this.fastMap.get(e);
  }
  addTreeNode(e, n, r) {
    let o = this.fastMap.get(n ?? null);
    if (!o)
      return;
    let i = new Fn({
      scopeRef: e
    });
    o.addChild(i), i.parent = o, this.fastMap.set(e, i), r && (i.nodeToRestore = r);
  }
  addNode(e) {
    this.fastMap.set(e.scopeRef, e);
  }
  removeTreeNode(e) {
    if (e === null)
      return;
    let n = this.fastMap.get(e);
    if (!n)
      return;
    let r = n.parent;
    for (let i of this.traverse())
      i !== n && n.nodeToRestore && i.nodeToRestore && n.scopeRef && n.scopeRef.current && ge(i.nodeToRestore, n.scopeRef.current) && (i.nodeToRestore = n.nodeToRestore);
    let o = n.children;
    r && (r.removeChild(n), o.size > 0 && o.forEach((i) => r && r.addChild(i))), this.fastMap.delete(n.scopeRef);
  }
  // Pre Order Depth First
  *traverse(e = this.root) {
    if (e.scopeRef != null && (yield e), e.children.size > 0)
      for (let n of e.children)
        yield* this.traverse(n);
  }
  clone() {
    var e;
    let n = new Gn();
    var r;
    for (let o of this.traverse())
      n.addTreeNode(o.scopeRef, (r = (e = o.parent) === null || e === void 0 ? void 0 : e.scopeRef) !== null && r !== void 0 ? r : null, o.nodeToRestore);
    return n;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new Fn({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class Fn {
  addChild(e) {
    this.children.add(e), e.parent = this;
  }
  removeChild(e) {
    this.children.delete(e), e.parent = void 0;
  }
  constructor(e) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = e.scopeRef;
  }
}
let me = new Gn();
function qn(t = {}) {
  let { autoFocus: e = !1, isTextInput: n, within: r } = t, o = I({
    isFocused: !1,
    isFocusVisible: e || dt()
  }), [i, l] = J(!1), [s, u] = J(() => o.current.isFocused && o.current.isFocusVisible), a = te(() => u(o.current.isFocused && o.current.isFocusVisible), []), c = te((d) => {
    o.current.isFocused = d, l(d), a();
  }, [
    a
  ]);
  ku((d) => {
    o.current.isFocusVisible = d, a();
  }, [], {
    isTextInput: n
  });
  let { focusProps: f } = Un({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: b } = Xt({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? b : f
  };
}
let Zu = /* @__PURE__ */ X.createContext(null);
function Ju(t) {
  let e = Se(Zu) || {};
  xo(e, t);
  let { ref: n, ...r } = e;
  return r;
}
function Lo(t, e) {
  let { focusProps: n } = Un(t), { keyboardProps: r } = Ao(t), o = ue(n, r), i = Ju(e), l = t.isDisabled ? {} : i, s = I(t.autoFocus);
  return W(() => {
    s.current && e.current && ft(e.current), s.current = !1;
  }, [
    e
  ]), {
    focusableProps: ue({
      ...o,
      tabIndex: t.excludeFromTabOrder && !t.isDisabled ? -1 : void 0
    }, l)
  };
}
const Qu = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), ea = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function ta(t) {
  if (Intl.Locale) {
    let n = new Intl.Locale(t).maximize(), r = typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo;
    if (r)
      return r.direction === "rtl";
    if (n.script)
      return Qu.has(n.script);
  }
  let e = t.split("-")[0];
  return ea.has(e);
}
const na = Symbol.for("react-aria.i18n.locale");
function Mo() {
  let t = typeof window < "u" && window[na] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      t
    ]);
  } catch {
    t = "en-US";
  }
  return {
    locale: t,
    direction: ta(t) ? "rtl" : "ltr"
  };
}
let Ln = Mo(), st = /* @__PURE__ */ new Set();
function Tr() {
  Ln = Mo();
  for (let t of st)
    t(Ln);
}
function ra() {
  let t = Ht(), [e, n] = J(Ln);
  return W(() => (st.size === 0 && window.addEventListener("languagechange", Tr), st.add(n), () => {
    st.delete(n), st.size === 0 && window.removeEventListener("languagechange", Tr);
  }), []), t ? {
    locale: "en-US",
    direction: "ltr"
  } : e;
}
const oa = /* @__PURE__ */ X.createContext(null);
function Zt() {
  let t = ra();
  return Se(oa) || t;
}
const _r = /* @__PURE__ */ new WeakMap();
function ia(t) {
  let e = _r.get(t);
  return e || (e = new jt(t), _r.set(t, e)), e;
}
function la(t, e) {
  return e && jt.getGlobalDictionaryForPackage(e) || ia(t);
}
function Yn(t, e) {
  let { locale: n } = Zt(), r = la(t, e);
  return re(() => new Ds(n, r), [
    n,
    r
  ]);
}
let un = /* @__PURE__ */ new Map();
function Xn(t) {
  let { locale: e } = Zt(), n = e + (t ? Object.entries(t).sort((o, i) => o[0] < i[0] ? -1 : 1).join() : "");
  if (un.has(n))
    return un.get(n);
  let r = new Intl.Collator(e, t);
  return un.set(n, r), r;
}
function sa(t) {
  let e = Xn({
    usage: "search",
    ...t
  }), n = te((i, l) => l.length === 0 ? !0 : (i = i.normalize("NFC"), l = l.normalize("NFC"), e.compare(i.slice(0, l.length), l) === 0), [
    e
  ]), r = te((i, l) => l.length === 0 ? !0 : (i = i.normalize("NFC"), l = l.normalize("NFC"), e.compare(i.slice(-l.length), l) === 0), [
    e
  ]), o = te((i, l) => {
    if (l.length === 0)
      return !0;
    i = i.normalize("NFC"), l = l.normalize("NFC");
    let s = 0, u = l.length;
    for (; s + u <= i.length; s++) {
      let a = i.slice(s, s + u);
      if (e.compare(l, a) === 0)
        return !0;
    }
    return !1;
  }, [
    e
  ]);
  return re(() => ({
    startsWith: n,
    endsWith: r,
    contains: o
  }), [
    n,
    r,
    o
  ]);
}
function ko(t, e) {
  let {
    elementType: n = "button",
    isDisabled: r,
    onPress: o,
    onPressStart: i,
    onPressEnd: l,
    onPressUp: s,
    onPressChange: u,
    preventFocusOnPress: a,
    allowFocusWhenDisabled: c,
    // @ts-ignore
    onClick: f,
    href: b,
    target: d,
    rel: v,
<<<<<<< Updated upstream
    type: g = "button"
  } = t, h;
  n === "button" ? h = {
    type: g,
=======
    type: y = "button"
  } = t, h;
  n === "button" ? h = {
    type: y,
>>>>>>> Stashed changes
    disabled: r
  } : h = {
    role: "button",
    tabIndex: r ? void 0 : 0,
    href: n === "a" && r ? void 0 : b,
    target: n === "a" ? d : void 0,
<<<<<<< Updated upstream
    type: n === "input" ? g : void 0,
=======
    type: n === "input" ? y : void 0,
>>>>>>> Stashed changes
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? v : void 0
  };
  let { pressProps: A, isPressed: w } = qt({
    onPressStart: i,
    onPressEnd: l,
    onPressChange: u,
    onPress: o,
    onPressUp: s,
    isDisabled: r,
    preventFocusOnPress: a,
    ref: e
  }), { focusableProps: S } = Lo(t, e);
  c && (S.tabIndex = r ? -1 : S.tabIndex);
<<<<<<< Updated upstream
  let K = se(S, A, ze(t, {
=======
  let K = ue(S, _, ze(t, {
>>>>>>> Stashed changes
    labelable: !0
  }));
  return {
    isPressed: w,
    buttonProps: ue(h, K, {
      "aria-haspopup": t["aria-haspopup"],
      "aria-expanded": t["aria-expanded"],
      "aria-controls": t["aria-controls"],
      "aria-pressed": t["aria-pressed"],
<<<<<<< Updated upstream
      onClick: (x) => {
        f && (f(x), console.warn("onClick is deprecated, please use onPress"));
=======
      onClick: ($) => {
        f && (f($), console.warn("onClick is deprecated, please use onPress"));
>>>>>>> Stashed changes
      }
    })
  };
}
const No = 7e3;
let an = null;
function cn(t, e = "assertive", n = No) {
  an || (an = new ua()), an.announce(t, e, n);
}
class ua {
  createLog(e) {
    let n = document.createElement("div");
    return n.setAttribute("role", "log"), n.setAttribute("aria-live", e), n.setAttribute("aria-relevant", "additions"), n;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(e, n = "assertive", r = No) {
    if (!this.node)
      return;
    let o = document.createElement("div");
    o.textContent = e, n === "assertive" ? this.assertiveLog.appendChild(o) : this.politeLog.appendChild(o), e !== "" && setTimeout(() => {
      o.remove();
    }, r);
  }
  clear(e) {
    this.node && ((!e || e === "assertive") && (this.assertiveLog.innerHTML = ""), (!e || e === "polite") && (this.politeLog.innerHTML = ""));
  }
  constructor() {
    this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node);
  }
}
function Io(t, e, n) {
  let { validationBehavior: r, focus: o } = t;
  de(() => {
    if (r === "native" && (n != null && n.current)) {
      let u = e.realtimeValidation.isInvalid ? e.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      n.current.setCustomValidity(u), n.current.hasAttribute("title") || (n.current.title = ""), e.realtimeValidation.isInvalid || e.updateValidation(ca(n.current));
    }
  });
  let i = xe(() => {
    e.resetValidation();
  }), l = xe((u) => {
    var a;
    e.displayValidation.isInvalid || e.commitValidation();
    let c = n == null || (a = n.current) === null || a === void 0 ? void 0 : a.form;
    if (!u.defaultPrevented && n && c && da(c) === n.current) {
      var f;
      o ? o() : (f = n.current) === null || f === void 0 || f.focus(), To("keyboard");
    }
    u.preventDefault();
  }), s = xe(() => {
    e.commitValidation();
  });
  W(() => {
    let u = n == null ? void 0 : n.current;
    if (!u)
      return;
    let a = u.form;
    return u.addEventListener("invalid", l), u.addEventListener("change", s), a == null || a.addEventListener("reset", i), () => {
      u.removeEventListener("invalid", l), u.removeEventListener("change", s), a == null || a.removeEventListener("reset", i);
    };
  }, [
    n,
    l,
    s,
    i,
    r
  ]);
}
function aa(t) {
  let e = t.validity;
  return {
    badInput: e.badInput,
    customError: e.customError,
    patternMismatch: e.patternMismatch,
    rangeOverflow: e.rangeOverflow,
    rangeUnderflow: e.rangeUnderflow,
    stepMismatch: e.stepMismatch,
    tooLong: e.tooLong,
    tooShort: e.tooShort,
    typeMismatch: e.typeMismatch,
    valueMissing: e.valueMissing,
    valid: e.valid
  };
}
function ca(t) {
  return {
    isInvalid: !t.validity.valid,
    validationDetails: aa(t),
    validationErrors: t.validationMessage ? [
      t.validationMessage
    ] : []
  };
}
function da(t) {
  for (let e = 0; e < t.elements.length; e++) {
    let n = t.elements[e];
    if (!n.validity.valid)
      return n;
  }
  return null;
}
function Bo(t) {
  let { id: e, label: n, "aria-labelledby": r, "aria-label": o, labelElementType: i = "label" } = t;
  e = Ae(e);
  let l = Ae(), s = {};
  n ? (r = r ? `${l} ${r}` : l, s = {
    id: l,
    htmlFor: i === "label" ? e : void 0
  }) : !r && !o && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let u = At({
    id: e,
    "aria-label": o,
    "aria-labelledby": r
  });
  return {
    labelProps: s,
    fieldProps: u
  };
}
function Oo(t) {
  let { description: e, errorMessage: n, isInvalid: r, validationState: o } = t, { labelProps: i, fieldProps: l } = Bo(t), s = Oe([
    !!e,
    !!n,
    r,
    o
  ]), u = Oe([
    !!e,
    !!n,
    r,
    o
  ]);
  return l = ue(l, {
    "aria-describedby": [
      s,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      u,
      t["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  }), {
    labelProps: i,
    fieldProps: l,
    descriptionProps: {
      id: s
    },
    errorMessageProps: {
      id: u
    }
  };
}
var Ro = {};
Ro = {
  buttonLabel: "عرض المقترحات",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} خيار`,
    other: () => `${e.number(t.optionCount)} خيارات`
  })} متاحة.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `المجموعة المدخلة ${t.groupTitle}, مع ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} خيار`,
      other: () => `${e.number(t.groupCount)} خيارات`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", محدد",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "مقترحات",
  selectedAnnouncement: (t) => `${t.optionText}، محدد`
};
var Vo = {};
Vo = {
  buttonLabel: "Покажи предложения",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} опция`,
    other: () => `${e.number(t.optionCount)} опции`
  })} на разположение.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Въведена група ${t.groupTitle}, с ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} опция`,
      other: () => `${e.number(t.groupCount)} опции`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", избрани",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (t) => `${t.optionText}, избрани`
};
var zo = {};
zo = {
  buttonLabel: "Zobrazit doporučení",
  countAnnouncement: (t, e) => `K dispozici ${e.plural(t.optionCount, {
    one: () => `je ${e.number(t.optionCount)} možnost`,
    other: () => `jsou/je ${e.number(t.optionCount)} možnosti/-í`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Zadaná skupina „${t.groupTitle}“ ${e.plural(t.groupCount, {
      one: () => `s ${e.number(t.groupCount)} možností`,
      other: () => `se ${e.number(t.groupCount)} možnostmi`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: " (vybráno)",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (t) => `${t.optionText}, vybráno`
};
var jo = {};
jo = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} mulighed tilgængelig`,
    other: () => `${e.number(t.optionCount)} muligheder tilgængelige`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Angivet gruppe ${t.groupTitle}, med ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} mulighed`,
      other: () => `${e.number(t.groupCount)} muligheder`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valgt",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (t) => `${t.optionText}, valgt`
};
var Ho = {};
Ho = {
  buttonLabel: "Empfehlungen anzeigen",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} Option`,
    other: () => `${e.number(t.optionCount)} Optionen`
  })} verfügbar.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Eingetretene Gruppe ${t.groupTitle}, mit ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} Option`,
      other: () => `${e.number(t.groupCount)} Optionen`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", ausgewählt",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Empfehlungen",
  selectedAnnouncement: (t) => `${t.optionText}, ausgewählt`
};
var Uo = {};
Uo = {
  buttonLabel: "Προβολή προτάσεων",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} επιλογή`,
    other: () => `${e.number(t.optionCount)} επιλογές `
  })} διαθέσιμες.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Εισαγμένη ομάδα ${t.groupTitle}, με ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} επιλογή`,
      other: () => `${e.number(t.groupCount)} επιλογές`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", επιλεγμένο",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Προτάσεις",
  selectedAnnouncement: (t) => `${t.optionText}, επιλέχθηκε`
};
var Wo = {};
Wo = {
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Entered group ${t.groupTitle}, with ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} option`,
      other: () => `${e.number(t.groupCount)} options`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selected",
    other: ""
  }, t.isSelected)}`,
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} option`,
    other: () => `${e.number(t.optionCount)} options`
  })} available.`,
  selectedAnnouncement: (t) => `${t.optionText}, selected`,
  buttonLabel: "Show suggestions",
  listboxLabel: "Suggestions"
};
var Go = {};
Go = {
  buttonLabel: "Mostrar sugerencias",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opción`,
    other: () => `${e.number(t.optionCount)} opciones`
  })} disponible(s).`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Se ha unido al grupo ${t.groupTitle}, con ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opción`,
      other: () => `${e.number(t.groupCount)} opciones`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", seleccionado",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugerencias",
  selectedAnnouncement: (t) => `${t.optionText}, seleccionado`
};
var qo = {};
qo = {
  buttonLabel: "Kuva soovitused",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} valik`,
    other: () => `${e.number(t.optionCount)} valikud`
  })} saadaval.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Sisestatud rühm ${t.groupTitle}, valikuga ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} valik`,
      other: () => `${e.number(t.groupCount)} valikud`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valitud",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Soovitused",
  selectedAnnouncement: (t) => `${t.optionText}, valitud`
};
var Yo = {};
Yo = {
  buttonLabel: "Näytä ehdotukset",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} vaihtoehto`,
    other: () => `${e.number(t.optionCount)} vaihtoehdot`
  })} saatavilla.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Mentiin ryhmään ${t.groupTitle}, ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} vaihtoehdon`,
      other: () => `${e.number(t.groupCount)} vaihtoehdon`
    })} kanssa.`,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valittu",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Ehdotukset",
  selectedAnnouncement: (t) => `${t.optionText}, valittu`
};
var Xo = {};
Xo = {
  buttonLabel: "Afficher les suggestions",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} option`,
    other: () => `${e.number(t.optionCount)} options`
  })} disponible(s).`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Groupe ${t.groupTitle} saisi, avec ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} option`,
      other: () => `${e.number(t.groupCount)} options`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", sélectionné(s)",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Suggestions",
  selectedAnnouncement: (t) => `${t.optionText}, sélectionné`
};
var Zo = {};
Zo = {
  buttonLabel: "הצג הצעות",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `אפשרות ${e.number(t.optionCount)}`,
    other: () => `${e.number(t.optionCount)} אפשרויות`
  })} במצב זמין.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `נכנס לקבוצה ${t.groupTitle}, עם ${e.plural(t.groupCount, {
      one: () => `אפשרות ${e.number(t.groupCount)}`,
      other: () => `${e.number(t.groupCount)} אפשרויות`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", נבחר",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "הצעות",
  selectedAnnouncement: (t) => `${t.optionText}, נבחר`
};
var Jo = {};
Jo = {
  buttonLabel: "Prikaži prijedloge",
  countAnnouncement: (t, e) => `Dostupno još: ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Unesena skupina ${t.groupTitle}, s ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcijom`,
      other: () => `${e.number(t.groupCount)} opcije/a`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", odabranih",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Prijedlozi",
  selectedAnnouncement: (t) => `${t.optionText}, odabrano`
};
var Qo = {};
Qo = {
  buttonLabel: "Javaslatok megjelenítése",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} lehetőség`,
    other: () => `${e.number(t.optionCount)} lehetőség`
  })} áll rendelkezésre.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Belépett a(z) ${t.groupTitle} csoportba, amely ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} lehetőséget`,
      other: () => `${e.number(t.groupCount)} lehetőséget`
    })} tartalmaz. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", kijelölve",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Javaslatok",
  selectedAnnouncement: (t) => `${t.optionText}, kijelölve`
};
var ei = {};
ei = {
  buttonLabel: "Mostra suggerimenti",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opzione disponibile`,
    other: () => `${e.number(t.optionCount)} opzioni disponibili`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Ingresso nel gruppo ${t.groupTitle}, con ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opzione`,
      other: () => `${e.number(t.groupCount)} opzioni`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selezionato",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Suggerimenti",
  selectedAnnouncement: (t) => `${t.optionText}, selezionato`
};
var ti = {};
ti = {
  buttonLabel: "候補を表示",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} 個のオプション`,
    other: () => `${e.number(t.optionCount)} 個のオプション`
  })}を利用できます。`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `入力されたグループ ${t.groupTitle}、${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} 個のオプション`,
      other: () => `${e.number(t.groupCount)} 個のオプション`
    })}を含む。`,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: "、選択済み",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "候補",
  selectedAnnouncement: (t) => `${t.optionText}、選択済み`
};
var ni = {};
ni = {
  buttonLabel: "제안 사항 표시",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)}개 옵션`,
    other: () => `${e.number(t.optionCount)}개 옵션`
  })}을 사용할 수 있습니다.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `입력한 그룹 ${t.groupTitle}, ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)}개 옵션`,
      other: () => `${e.number(t.groupCount)}개 옵션`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", 선택됨",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "제안",
  selectedAnnouncement: (t) => `${t.optionText}, 선택됨`
};
var ri = {};
ri = {
  buttonLabel: "Rodyti pasiūlymus",
  countAnnouncement: (t, e) => `Yra ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} parinktis`,
    other: () => `${e.number(t.optionCount)} parinktys (-ių)`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Įvesta grupė ${t.groupTitle}, su ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} parinktimi`,
      other: () => `${e.number(t.groupCount)} parinktimis (-ių)`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", pasirinkta",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Pasiūlymai",
  selectedAnnouncement: (t) => `${t.optionText}, pasirinkta`
};
var oi = {};
oi = {
  buttonLabel: "Rādīt ieteikumus",
  countAnnouncement: (t, e) => `Pieejamo opciju skaits: ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcijas`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Ievadīta grupa ${t.groupTitle}, ar ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opciju`,
      other: () => `${e.number(t.groupCount)} opcijām`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", atlasīta",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Ieteikumi",
  selectedAnnouncement: (t) => `${t.optionText}, atlasīta`
};
var ii = {};
ii = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} alternativ`,
    other: () => `${e.number(t.optionCount)} alternativer`
  })} finnes.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Angitt gruppe ${t.groupTitle}, med ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} alternativ`,
      other: () => `${e.number(t.groupCount)} alternativer`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valgt",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (t) => `${t.optionText}, valgt`
};
var li = {};
li = {
  buttonLabel: "Suggesties weergeven",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} optie`,
    other: () => `${e.number(t.optionCount)} opties`
  })} beschikbaar.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Groep ${t.groupTitle} ingevoerd met ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} optie`,
      other: () => `${e.number(t.groupCount)} opties`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", geselecteerd",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Suggesties",
  selectedAnnouncement: (t) => `${t.optionText}, geselecteerd`
};
var si = {};
si = {
  buttonLabel: "Wyświetlaj sugestie",
  countAnnouncement: (t, e) => `dostępna/dostępne(-nych) ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcja`,
    other: () => `${e.number(t.optionCount)} opcje(-i)`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Dołączono do grupy ${t.groupTitle}, z ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcją`,
      other: () => `${e.number(t.groupCount)} opcjami`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", wybrano",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestie",
  selectedAnnouncement: (t) => `${t.optionText}, wybrano`
};
var ui = {};
ui = {
  buttonLabel: "Mostrar sugestões",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opção`,
    other: () => `${e.number(t.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Grupo inserido ${t.groupTitle}, com ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opção`,
      other: () => `${e.number(t.groupCount)} opções`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selecionado",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (t) => `${t.optionText}, selecionado`
};
var ai = {};
ai = {
  buttonLabel: "Apresentar sugestões",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opção`,
    other: () => `${e.number(t.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Grupo introduzido ${t.groupTitle}, com ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opção`,
      other: () => `${e.number(t.groupCount)} opções`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selecionado",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (t) => `${t.optionText}, selecionado`
};
var ci = {};
ci = {
  buttonLabel: "Afișare sugestii",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opțiune`,
    other: () => `${e.number(t.optionCount)} opțiuni`
  })} disponibile.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Grup ${t.groupTitle} introdus, cu ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opțiune`,
      other: () => `${e.number(t.groupCount)} opțiuni`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selectat",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestii",
  selectedAnnouncement: (t) => `${t.optionText}, selectat`
};
var di = {};
di = {
  buttonLabel: "Показать предложения",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} параметр`,
    other: () => `${e.number(t.optionCount)} параметров`
  })} доступно.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Введенная группа ${t.groupTitle}, с ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} параметром`,
      other: () => `${e.number(t.groupCount)} параметрами`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", выбранными",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (t) => `${t.optionText}, выбрано`
};
var fi = {};
fi = {
  buttonLabel: "Zobraziť návrhy",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} možnosť`,
    other: () => `${e.number(t.optionCount)} možnosti/-í`
  })} k dispozícii.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Zadaná skupina ${t.groupTitle}, s ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} možnosťou`,
      other: () => `${e.number(t.groupCount)} možnosťami`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", vybraté",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (t) => `${t.optionText}, vybraté`
};
var pi = {};
pi = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (t, e) => `Na voljo je ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcije`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Vnesena skupina ${t.groupTitle}, z ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcija`,
      other: () => `${e.number(t.groupCount)} opcije`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", izbrano",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Predlogi",
  selectedAnnouncement: (t) => `${t.optionText}, izbrano`
};
var bi = {};
bi = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (t, e) => `Dostupno još: ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Unesena grupa ${t.groupTitle}, s ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcijom`,
      other: () => `${e.number(t.groupCount)} optione/a`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", izabranih",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Predlozi",
  selectedAnnouncement: (t) => `${t.optionText}, izabrano`
};
var mi = {};
mi = {
  buttonLabel: "Visa förslag",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} alternativ`,
    other: () => `${e.number(t.optionCount)} alternativ`
  })} tillgängliga.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Ingick i gruppen ${t.groupTitle} med ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} alternativ`,
      other: () => `${e.number(t.groupCount)} alternativ`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valda",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Förslag",
  selectedAnnouncement: (t) => `${t.optionText}, valda`
};
var vi = {};
vi = {
  buttonLabel: "Önerileri göster",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} seçenek`,
    other: () => `${e.number(t.optionCount)} seçenekler`
  })} kullanılabilir.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Girilen grup ${t.groupTitle}, ile ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} seçenek`,
      other: () => `${e.number(t.groupCount)} seçenekler`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", seçildi",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Öneriler",
  selectedAnnouncement: (t) => `${t.optionText}, seçildi`
};
var hi = {};
hi = {
  buttonLabel: "Показати пропозиції",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} параметр`,
    other: () => `${e.number(t.optionCount)} параметри(-ів)`
  })} доступно.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Введена група ${t.groupTitle}, з ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} параметр`,
      other: () => `${e.number(t.groupCount)} параметри(-ів)`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", вибрано",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Пропозиції",
  selectedAnnouncement: (t) => `${t.optionText}, вибрано`
};
var gi = {};
gi = {
  buttonLabel: "显示建议",
  countAnnouncement: (t, e) => `有 ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} 个选项`,
    other: () => `${e.number(t.optionCount)} 个选项`
  })}可用。`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `进入了 ${t.groupTitle} 组，其中有 ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} 个选项`,
      other: () => `${e.number(t.groupCount)} 个选项`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", 已选择",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "建议",
  selectedAnnouncement: (t) => `${t.optionText}, 已选择`
};
var $i = {};
$i = {
  buttonLabel: "顯示建議",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} 選項`,
    other: () => `${e.number(t.optionCount)} 選項`
  })} 可用。`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `輸入的群組 ${t.groupTitle}, 有 ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} 選項`,
      other: () => `${e.number(t.groupCount)} 選項`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", 已選取",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "建議",
  selectedAnnouncement: (t) => `${t.optionText}, 已選取`
};
var yi = {};
yi = {
  dismiss: "تجاهل"
};
var xi = {};
xi = {
  dismiss: "Отхвърляне"
};
var Ci = {};
Ci = {
  dismiss: "Odstranit"
};
var Ei = {};
Ei = {
  dismiss: "Luk"
};
var Pi = {};
Pi = {
  dismiss: "Schließen"
};
var wi = {};
wi = {
  dismiss: "Απόρριψη"
};
var Si = {};
Si = {
  dismiss: "Dismiss"
};
var Ti = {};
Ti = {
  dismiss: "Descartar"
};
var _i = {};
_i = {
  dismiss: "Lõpeta"
};
var Ai = {};
Ai = {
  dismiss: "Hylkää"
};
var Ki = {};
Ki = {
  dismiss: "Rejeter"
};
var Di = {};
Di = {
  dismiss: "התעלם"
};
var Fi = {};
Fi = {
  dismiss: "Odbaci"
};
var Li = {};
Li = {
  dismiss: "Elutasítás"
};
var Mi = {};
Mi = {
  dismiss: "Ignora"
};
var ki = {};
ki = {
  dismiss: "閉じる"
};
var Ni = {};
Ni = {
  dismiss: "무시"
};
var Ii = {};
Ii = {
  dismiss: "Atmesti"
};
var Bi = {};
Bi = {
  dismiss: "Nerādīt"
};
var Oi = {};
Oi = {
  dismiss: "Lukk"
};
var Ri = {};
Ri = {
  dismiss: "Negeren"
};
var Vi = {};
Vi = {
  dismiss: "Zignoruj"
};
var zi = {};
zi = {
  dismiss: "Descartar"
};
var ji = {};
ji = {
  dismiss: "Dispensar"
};
var Hi = {};
Hi = {
  dismiss: "Revocare"
};
var Ui = {};
Ui = {
  dismiss: "Пропустить"
};
var Wi = {};
Wi = {
  dismiss: "Zrušiť"
};
var Gi = {};
Gi = {
  dismiss: "Opusti"
};
var qi = {};
qi = {
  dismiss: "Odbaci"
};
var Yi = {};
Yi = {
  dismiss: "Avvisa"
};
var Xi = {};
Xi = {
  dismiss: "Kapat"
};
var Zi = {};
Zi = {
  dismiss: "Скасувати"
};
var Ji = {};
Ji = {
  dismiss: "取消"
};
var Qi = {};
Qi = {
  dismiss: "關閉"
};
const Ar = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function el(t = {}) {
  let { style: e, isFocusable: n } = t, [r, o] = J(!1), { focusWithinProps: i } = Xt({
    isDisabled: !n,
    onFocusWithinChange: (s) => o(s)
  }), l = re(() => r ? e : e ? {
    ...Ar,
    ...e
  } : Ar, [
    r
  ]);
  return {
    visuallyHiddenProps: {
      ...i,
      style: l
    }
  };
}
function fa(t) {
  let { children: e, elementType: n = "div", isFocusable: r, style: o, ...i } = t, { visuallyHiddenProps: l } = el(t);
  return /* @__PURE__ */ X.createElement(n, ue(i, l), e);
}
function pa(t) {
  return t && t.__esModule ? t.default : t;
}
const Kr = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, It = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, ba = {
  top: "left",
  left: "top"
}, Mn = {
  top: "height",
  left: "width"
}, ma = {
  width: "totalWidth",
  height: "totalHeight"
}, Ct = {};
let Ge = typeof document < "u" && window.visualViewport;
function Dr(t) {
  let e = 0, n = 0, r = 0, o = 0, i = 0, l = 0, s = {};
  if (t.tagName === "BODY") {
    let c = document.documentElement;
    r = c.clientWidth, o = c.clientHeight;
    var u;
    e = (u = Ge == null ? void 0 : Ge.width) !== null && u !== void 0 ? u : r;
    var a;
    n = (a = Ge == null ? void 0 : Ge.height) !== null && a !== void 0 ? a : o, s.top = c.scrollTop || t.scrollTop, s.left = c.scrollLeft || t.scrollLeft;
  } else
    ({ width: e, height: n, top: i, left: l } = Je(t)), s.top = t.scrollTop, s.left = t.scrollLeft, r = e, o = n;
  return {
    width: e,
    height: n,
    totalWidth: r,
    totalHeight: o,
    scroll: s,
    top: i,
    left: l
  };
}
function va(t) {
  return {
    top: t.scrollTop,
    left: t.scrollLeft,
    width: t.scrollWidth,
    height: t.scrollHeight
  };
}
function Fr(t, e, n, r, o, i) {
  let l = o.scroll[t], s = r[Mn[t]], u = e - i - l, a = e + i - l + n;
  return u < 0 ? -u : a > s ? Math.max(s - a, -u) : 0;
}
function ha(t) {
  let e = window.getComputedStyle(t);
  return {
    top: parseInt(e.marginTop, 10) || 0,
    bottom: parseInt(e.marginBottom, 10) || 0,
    left: parseInt(e.marginLeft, 10) || 0,
    right: parseInt(e.marginRight, 10) || 0
  };
}
function Lr(t) {
  if (Ct[t])
    return Ct[t];
  let [e, n] = t.split(" "), r = Kr[e] || "right", o = ba[r];
  Kr[n] || (n = "center");
  let i = Mn[r], l = Mn[o];
  return Ct[t] = {
    placement: e,
    crossPlacement: n,
    axis: r,
    crossAxis: o,
    size: i,
    crossSize: l
  }, Ct[t];
}
function dn(t, e, n, r, o, i, l, s, u, a) {
<<<<<<< Updated upstream
  let { placement: c, crossPlacement: f, axis: b, crossAxis: d, size: v, crossSize: g } = r, h = {};
  h[d] = t[d], f === "center" ? h[d] += (t[g] - n[g]) / 2 : f !== d && (h[d] += t[g] - n[g]), h[d] += i;
  const A = t[d] - n[g] + u + a, w = t[d] + t[g] - u - a;
  if (h[d] = Cn(h[d], A, w), c === b) {
=======
  let { placement: c, crossPlacement: f, axis: p, crossAxis: d, size: v, crossSize: y } = r, h = {};
  h[d] = t[d], f === "center" ? h[d] += (t[y] - n[y]) / 2 : f !== d && (h[d] += t[y] - n[y]), h[d] += i;
  const _ = t[d] - n[y] + u + a, w = t[d] + t[y] - u - a;
  if (h[d] = Cn(h[d], _, w), c === p) {
>>>>>>> Stashed changes
    const S = s ? l[v] : e[ma[v]];
    h[It[b]] = Math.floor(S - t[b] + o);
  } else
    h[b] = Math.floor(t[b] + t[v] + o);
  return h;
}
function ga(t, e, n, r, o, i) {
  return t.top != null ? Math.max(0, e.height + e.top + e.scroll.top - (n.top + t.top) - (o.top + o.bottom + i)) : Math.max(0, r.top + n.top - (e.top + e.scroll.top) - (o.top + o.bottom + i));
}
function Mr(t, e, n, r, o, i) {
  let { placement: l, axis: s, size: u } = i;
  return l === s ? Math.max(0, n[s] - t[s] - t.scroll[s] + e[s] - r[s] - r[It[s]] - o) : Math.max(0, t[u] + t[s] + t.scroll[s] - e[s] - n[s] - n[u] - r[s] - r[It[s]] - o);
}
<<<<<<< Updated upstream
function $a(t, e, n, r, o, i, l, s, u, a, c, f, b, d, v, g) {
  let h = Lr(t), { size: A, crossAxis: w, crossSize: S, placement: K, crossPlacement: x } = h, M = dn(e, s, n, h, c, f, a, b, v, g), R = c, p = Mr(s, a, e, o, i + c, h);
  if (l && r[A] > p) {
    let ue = Lr(`${It[K]} ${x}`), ae = dn(e, s, n, ue, c, f, a, b, v, g);
    Mr(s, a, e, o, i + c, ue) > p && (h = ue, M = ae, R = c);
  }
  let _ = Fr(w, M[w], n[S], s, u, i);
  M[w] += _;
  let P = ga(M, s, a, e, o, i);
  d && d < P && (P = d), n.height = Math.min(n.height, P), M = dn(e, s, n, h, R, f, a, b, v, g), _ = Fr(w, M[w], n[S], s, u, i), M[w] += _;
  let C = {}, B = e[w] + 0.5 * e[S] - n[w];
  const E = v / 2 + g, T = n[S] - v / 2 - g, q = e[w] - n[w] + v / 2, V = e[w] + e[S] - n[w] - v / 2, F = Cn(B, q, V);
  return C[w] = Cn(F, E, T), {
    position: M,
    maxHeight: P,
    arrowOffsetLeft: C.left,
    arrowOffsetTop: C.top,
=======
function $a(t, e, n, r, o, i, l, s, u, a, c, f, p, d, v, y) {
  let h = Lr(t), { size: _, crossAxis: w, crossSize: S, placement: K, crossPlacement: $ } = h, N = dn(e, s, n, h, c, f, a, p, v, y), R = c, b = Mr(s, a, e, o, i + c, h);
  if (l && r[_] > b) {
    let ae = Lr(`${It[K]} ${$}`), ce = dn(e, s, n, ae, c, f, a, p, v, y);
    Mr(s, a, e, o, i + c, ae) > b && (h = ae, N = ce, R = c);
  }
  let A = Fr(w, N[w], n[S], s, u, i);
  N[w] += A;
  let E = ga(N, s, a, e, o, i);
  d && d < E && (E = d), n.height = Math.min(n.height, E), N = dn(e, s, n, h, R, f, a, p, v, y), A = Fr(w, N[w], n[S], s, u, i), N[w] += A;
  let P = {}, B = e[w] + 0.5 * e[S] - n[w];
  const C = v / 2 + y, T = n[S] - v / 2 - y, q = e[w] - n[w] + v / 2, V = e[w] + e[S] - n[w] - v / 2, F = Cn(B, q, V);
  return P[w] = Cn(F, C, T), {
    position: N,
    maxHeight: E,
    arrowOffsetLeft: P.left,
    arrowOffsetTop: P.top,
>>>>>>> Stashed changes
    placement: h.placement
  };
}
function ya(t) {
<<<<<<< Updated upstream
  let { placement: e, targetNode: n, overlayNode: r, scrollNode: o, padding: i, shouldFlip: l, boundaryElement: s, offset: u, crossOffset: a, maxHeight: c, arrowSize: f = 0, arrowBoundaryOffset: b = 0 } = t, d = r instanceof HTMLElement ? xa(r) : document.documentElement, v = d === document.documentElement;
  const g = window.getComputedStyle(d).position;
  let h = !!g && g !== "static", A = v ? Je(n) : kr(n, d);
=======
  let { placement: e, targetNode: n, overlayNode: r, scrollNode: o, padding: i, shouldFlip: l, boundaryElement: s, offset: u, crossOffset: a, maxHeight: c, arrowSize: f = 0, arrowBoundaryOffset: p = 0 } = t, d = r instanceof HTMLElement ? xa(r) : document.documentElement, v = d === document.documentElement;
  const y = window.getComputedStyle(d).position;
  let h = !!y && y !== "static", _ = v ? Je(n) : Nr(n, d);
>>>>>>> Stashed changes
  if (!v) {
    let { marginTop: p, marginLeft: _ } = window.getComputedStyle(n);
    A.top += parseInt(p, 10) || 0, A.left += parseInt(_, 10) || 0;
  }
  let w = Je(r), S = ha(r);
  w.width += S.left + S.right, w.height += S.top + S.bottom;
<<<<<<< Updated upstream
  let K = va(o), x = Dr(s), M = Dr(d), R = s.tagName === "BODY" ? Je(d) : kr(d, s);
  return $a(e, A, w, K, S, i, l, x, M, R, u, a, h, c, f, b);
=======
  let K = va(o), $ = Dr(s), N = Dr(d), R = s.tagName === "BODY" ? Je(d) : Nr(d, s);
  return $a(e, _, w, K, S, i, l, $, N, R, u, a, h, c, f, p);
>>>>>>> Stashed changes
}
function Je(t) {
  let { top: e, left: n, width: r, height: o } = t.getBoundingClientRect(), { scrollTop: i, scrollLeft: l, clientTop: s, clientLeft: u } = document.documentElement;
  return {
    top: e + i - s,
    left: n + l - u,
    width: r,
    height: o
  };
}
function kr(t, e) {
  let n = window.getComputedStyle(t), r;
  if (n.position === "fixed") {
    let { top: o, left: i, width: l, height: s } = t.getBoundingClientRect();
    r = {
      top: o,
      left: i,
      width: l,
      height: s
    };
  } else {
    r = Je(t);
    let o = Je(e), i = window.getComputedStyle(e);
    o.top += (parseInt(i.borderTopWidth, 10) || 0) - e.scrollTop, o.left += (parseInt(i.borderLeftWidth, 10) || 0) - e.scrollLeft, r.top -= o.top, r.left -= o.left;
  }
  return r.top -= parseInt(n.marginTop, 10) || 0, r.left -= parseInt(n.marginLeft, 10) || 0, r;
}
function xa(t) {
  let e = t.offsetParent;
  if (e && e === document.body && window.getComputedStyle(e).position === "static" && !Nr(e) && (e = document.documentElement), e == null)
    for (e = t.parentElement; e && !Nr(e); )
      e = e.parentElement;
  return e || document.documentElement;
}
function Nr(t) {
  let e = window.getComputedStyle(t);
  return e.transform !== "none" || /transform|perspective/.test(e.willChange) || e.filter !== "none" || e.contain === "paint" || // @ts-ignore
  "backdropFilter" in e && e.backdropFilter !== "none" || // @ts-ignore
  "WebkitBackdropFilter" in e && e.WebkitBackdropFilter !== "none";
}
const tl = /* @__PURE__ */ new WeakMap();
function Ca(t) {
  let { triggerRef: e, isOpen: n, onClose: r } = t;
  W(() => {
    if (!n || r === null)
      return;
    let o = (i) => {
      let l = i.target;
      if (!e.current || l instanceof Node && !l.contains(e.current))
        return;
      let s = r || tl.get(e.current);
      s && s();
    };
    return window.addEventListener("scroll", o, !0), () => {
      window.removeEventListener("scroll", o, !0);
    };
  }, [
    n,
    r,
    e
  ]);
}
let Ee = typeof document < "u" && window.visualViewport;
function Ea(t) {
<<<<<<< Updated upstream
  let { direction: e } = Zt(), { arrowSize: n = 0, targetRef: r, overlayRef: o, scrollRef: i = o, placement: l = "bottom", containerPadding: s = 12, shouldFlip: u = !0, boundaryElement: a = typeof document < "u" ? document.body : null, offset: c = 0, crossOffset: f = 0, shouldUpdatePosition: b = !0, isOpen: d = !0, onClose: v, maxHeight: g, arrowBoundaryOffset: h = 0 } = t, [A, w] = Z({
=======
  let { direction: e } = Zt(), { arrowSize: n = 0, targetRef: r, overlayRef: o, scrollRef: i = o, placement: l = "bottom", containerPadding: s = 12, shouldFlip: u = !0, boundaryElement: a = typeof document < "u" ? document.body : null, offset: c = 0, crossOffset: f = 0, shouldUpdatePosition: p = !0, isOpen: d = !0, onClose: v, maxHeight: y, arrowBoundaryOffset: h = 0 } = t, [_, w] = J({
>>>>>>> Stashed changes
    position: {},
    arrowOffsetLeft: void 0,
    arrowOffsetTop: void 0,
    maxHeight: void 0,
    placement: void 0
  }), S = [
    b,
    l,
    o.current,
    r.current,
    i.current,
    s,
    u,
    a,
    c,
    f,
    d,
    e,
<<<<<<< Updated upstream
    g,
=======
    y,
>>>>>>> Stashed changes
    h,
    n
  ], K = te(() => {
    if (b === !1 || !d || !o.current || !r.current || !i.current || !a)
      return;
    let R = ya({
      placement: wa(l, e),
      overlayNode: o.current,
      targetNode: r.current,
      scrollNode: i.current,
      padding: s,
      shouldFlip: u,
      boundaryElement: a,
      offset: c,
      crossOffset: f,
<<<<<<< Updated upstream
      maxHeight: g,
=======
      maxHeight: y,
>>>>>>> Stashed changes
      arrowSize: n,
      arrowBoundaryOffset: h
    });
    Object.keys(R.position).forEach((p) => o.current.style[p] = R.position[p] + "px"), o.current.style.maxHeight = R.maxHeight != null ? R.maxHeight + "px" : void 0, w(R);
  }, S);
  de(K, S), Pa(K), fu({
    ref: o,
    onResize: K
  });
<<<<<<< Updated upstream
  let x = I(!1);
  de(() => {
    let R, p = () => {
      x.current = !0, clearTimeout(R), R = setTimeout(() => {
        x.current = !1;
=======
  let $ = I(!1);
  fe(() => {
    let R, b = () => {
      $.current = !0, clearTimeout(R), R = setTimeout(() => {
        $.current = !1;
>>>>>>> Stashed changes
      }, 500), K();
    };
    return Ee == null || Ee.addEventListener("resize", p), Ee == null || Ee.addEventListener("scroll", p), () => {
      Ee == null || Ee.removeEventListener("resize", p), Ee == null || Ee.removeEventListener("scroll", p);
    };
  }, [
    K
  ]);
<<<<<<< Updated upstream
  let M = te(() => {
    x.current || v();
  }, [
    v,
    x
=======
  let N = te(() => {
    $.current || v();
  }, [
    v,
    $
>>>>>>> Stashed changes
  ]);
  return Ca({
    triggerRef: r,
    isOpen: d,
    onClose: v && M
  }), {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...A.position,
        maxHeight: A.maxHeight
      }
    },
    placement: A.placement,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: A.arrowOffsetLeft,
        top: A.arrowOffsetTop
      }
    },
    updatePosition: K
  };
}
function Pa(t) {
  de(() => (window.addEventListener("resize", t, !1), () => {
    window.removeEventListener("resize", t, !1);
  }), [
    t
  ]);
}
function wa(t, e) {
  return e === "rtl" ? t.replace("start", "right").replace("end", "left") : t.replace("start", "left").replace("end", "right");
}
const De = [];
function Sa(t, e) {
  let { onClose: n, shouldCloseOnBlur: r, isOpen: o, isDismissable: i = !1, isKeyboardDismissDisabled: l = !1, shouldCloseOnInteractOutside: s } = t;
  W(() => (o && De.push(e), () => {
    let v = De.indexOf(e);
    v >= 0 && De.splice(v, 1);
  }), [
    o,
    e
  ]);
  let u = () => {
    De[De.length - 1] === e && n && n();
  }, a = (v) => {
    (!s || s(v.target)) && De[De.length - 1] === e && (v.stopPropagation(), v.preventDefault());
  }, c = (v) => {
    (!s || s(v.target)) && (De[De.length - 1] === e && (v.stopPropagation(), v.preventDefault()), u());
  }, f = (v) => {
    v.key === "Escape" && !l && (v.stopPropagation(), v.preventDefault(), u());
  };
  Iu({
    ref: e,
    onInteractOutside: i && o ? c : null,
    onInteractOutsideStart: a
  });
  let { focusWithinProps: b } = Xt({
    isDisabled: !r,
    onBlurWithin: (v) => {
      !v.relatedTarget || Wu(v.relatedTarget) || (!s || s(v.relatedTarget)) && n();
    }
  }), d = (v) => {
    v.target === v.currentTarget && v.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: f,
      ...b
    },
    underlayProps: {
      onPointerDown: d
    }
  };
}
function Ta(t, e, n) {
  let { type: r } = t, { isOpen: o } = e;
  W(() => {
    n && n.current && tl.set(n.current, e.close);
  });
  let i;
  r === "menu" ? i = !0 : r === "listbox" && (i = "listbox");
  let l = Ae();
  return {
    triggerProps: {
      "aria-haspopup": i,
      "aria-expanded": o,
      "aria-controls": o ? l : null,
      onPress: e.toggle
    },
    overlayProps: {
      id: l
    }
  };
}
const fn = typeof document < "u" && window.visualViewport, _a = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let Et = 0, pn;
function Aa(t = {}) {
  let { isDisabled: e } = t;
  de(() => {
    if (!e)
      return Et++, Et === 1 && (Wt() ? pn = Da() : pn = Ka()), () => {
        Et--, Et === 0 && pn();
      };
  }, [
    e
  ]);
}
function Ka() {
  return Qe(Ze(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Ze(document.documentElement, "overflow", "hidden"));
}
function Da() {
  let t, e, n = (a) => {
    t = Kt(a.target, !0), !(t === document.documentElement && t === document.body) && t instanceof HTMLElement && window.getComputedStyle(t).overscrollBehavior === "auto" && (e = Ze(t, "overscrollBehavior", "contain"));
  }, r = (a) => {
    if (!t || t === document.documentElement || t === document.body) {
      a.preventDefault();
      return;
    }
    t.scrollHeight === t.clientHeight && t.scrollWidth === t.clientWidth && a.preventDefault();
  }, o = (a) => {
    let c = a.target;
    Br(c) && c !== document.activeElement && (a.preventDefault(), s(), c.style.transform = "translateY(-2000px)", c.focus(), requestAnimationFrame(() => {
      c.style.transform = "";
    })), e && e();
  }, i = (a) => {
    let c = a.target;
    Br(c) && (s(), c.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      c.style.transform = "", fn && (fn.height < window.innerHeight ? requestAnimationFrame(() => {
        Ir(c);
      }) : fn.addEventListener("resize", () => Ir(c), {
        once: !0
      }));
    }));
  }, l = null, s = () => {
    if (l)
      return;
    let a = () => {
      window.scrollTo(0, 0);
    }, c = window.pageXOffset, f = window.pageYOffset;
    l = Qe(ot(window, "scroll", a), Ze(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Ze(document.documentElement, "overflow", "hidden"), Ze(document.body, "marginTop", `-${f}px`), () => {
      window.scrollTo(c, f);
    }), window.scrollTo(0, 0);
  }, u = Qe(ot(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), ot(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), ot(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), ot(document, "focus", i, !0));
  return () => {
    e == null || e(), l == null || l(), u();
  };
}
function Ze(t, e, n) {
  let r = t.style[e];
  return t.style[e] = n, () => {
    t.style[e] = r;
  };
}
function ot(t, e, n, r) {
  return t.addEventListener(e, n, r), () => {
    t.removeEventListener(e, n, r);
  };
}
function Ir(t) {
  let e = document.scrollingElement || document.documentElement;
  for (; t && t !== e; ) {
    let n = Kt(t);
    if (n !== document.documentElement && n !== document.body && n !== t) {
      let r = n.getBoundingClientRect().top, o = t.getBoundingClientRect().top;
      o > r + t.clientHeight && (n.scrollTop += o - r);
    }
    t = n.parentElement;
  }
}
function Br(t) {
  return t instanceof HTMLInputElement && !_a.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable;
}
var nl = {};
nl = {
  "ar-AE": yi,
  "bg-BG": xi,
  "cs-CZ": Ci,
  "da-DK": Ei,
  "de-DE": Pi,
  "el-GR": wi,
  "en-US": Si,
  "es-ES": Ti,
  "et-EE": _i,
  "fi-FI": Ai,
  "fr-FR": Ki,
  "he-IL": Di,
  "hr-HR": Fi,
  "hu-HU": Li,
  "it-IT": Mi,
  "ja-JP": ki,
  "ko-KR": Ni,
  "lt-LT": Ii,
  "lv-LV": Bi,
  "nb-NO": Oi,
  "nl-NL": Ri,
  "pl-PL": Vi,
  "pt-BR": zi,
  "pt-PT": ji,
  "ro-RO": Hi,
  "ru-RU": Ui,
  "sk-SK": Wi,
  "sl-SI": Gi,
  "sr-SP": qi,
  "sv-SE": Yi,
  "tr-TR": Xi,
  "uk-UA": Zi,
  "zh-CN": Ji,
  "zh-TW": Qi
};
function Or(t) {
  let { onDismiss: e, ...n } = t, r = Yn(/* @__PURE__ */ pa(nl), "@react-aria/overlays"), o = At(n, r.format("dismiss")), i = () => {
    e && e();
  };
  return /* @__PURE__ */ X.createElement(fa, null, /* @__PURE__ */ X.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: i,
    style: {
      width: 1,
      height: 1
    }
  }));
}
let it = /* @__PURE__ */ new WeakMap(), Pe = [];
function rl(t, e = document.body) {
  let n = new Set(t), r = /* @__PURE__ */ new Set(), o = (u) => {
    for (let b of u.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))
      n.add(b);
    let a = (b) => {
      if (n.has(b) || r.has(b.parentElement) && b.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let d of n)
        if (b.contains(d))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, c = document.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, {
      acceptNode: a
    }), f = a(u);
    if (f === NodeFilter.FILTER_ACCEPT && i(u), f !== NodeFilter.FILTER_REJECT) {
      let b = c.nextNode();
      for (; b != null; )
        i(b), b = c.nextNode();
    }
  }, i = (u) => {
    var a;
    let c = (a = it.get(u)) !== null && a !== void 0 ? a : 0;
    u.getAttribute("aria-hidden") === "true" && c === 0 || (c === 0 && u.setAttribute("aria-hidden", "true"), r.add(u), it.set(u, c + 1));
  };
  Pe.length && Pe[Pe.length - 1].disconnect(), o(e);
  let l = new MutationObserver((u) => {
    for (let a of u)
      if (!(a.type !== "childList" || a.addedNodes.length === 0) && ![
        ...n,
        ...r
      ].some((c) => c.contains(a.target))) {
        for (let c of a.removedNodes)
          c instanceof Element && (n.delete(c), r.delete(c));
        for (let c of a.addedNodes)
          (c instanceof HTMLElement || c instanceof SVGElement) && (c.dataset.liveAnnouncer === "true" || c.dataset.reactAriaTopLayer === "true") ? n.add(c) : c instanceof Element && o(c);
      }
  });
  l.observe(e, {
    childList: !0,
    subtree: !0
  });
  let s = {
    observe() {
      l.observe(e, {
        childList: !0,
        subtree: !0
      });
    },
    disconnect() {
      l.disconnect();
    }
  };
  return Pe.push(s), () => {
    l.disconnect();
    for (let u of r) {
      let a = it.get(u);
      a === 1 ? (u.removeAttribute("aria-hidden"), it.delete(u)) : it.set(u, a - 1);
    }
    s === Pe[Pe.length - 1] ? (Pe.pop(), Pe.length && Pe[Pe.length - 1].observe()) : Pe.splice(Pe.indexOf(s), 1);
  };
}
function Fa(t, e) {
  let { triggerRef: n, popoverRef: r, isNonModal: o, isKeyboardDismissDisabled: i, shouldCloseOnInteractOutside: l, ...s } = t, { overlayProps: u, underlayProps: a } = Sa({
    isOpen: e.isOpen,
    onClose: e.close,
    shouldCloseOnBlur: !0,
    isDismissable: !o,
    isKeyboardDismissDisabled: i,
    shouldCloseOnInteractOutside: l
  }, r), { overlayProps: c, arrowProps: f, placement: b } = Ea({
    ...s,
    targetRef: n,
    overlayRef: r,
    isOpen: e.isOpen,
    onClose: o ? e.close : null
  });
  return Aa({
    isDisabled: o || !e.isOpen
  }), de(() => {
    if (e.isOpen && !o && r.current)
      return rl([
        r.current
      ]);
  }, [
    o,
    e.isOpen,
    r
  ]), {
    popoverProps: ue(u, c),
    arrowProps: f,
    underlayProps: a,
    placement: b
  };
}
const La = /* @__PURE__ */ X.createContext(null);
function Ma(t) {
  let e = Ht(), { portalContainer: n = e ? null : document.body, isExiting: r } = t, [o, i] = J(!1), l = re(() => ({
    contain: o,
    setContain: i
  }), [
    o,
    i
  ]);
  if (!n)
    return null;
  let s = t.children;
  return t.disableFocusManagement || (s = /* @__PURE__ */ X.createElement(Vu, {
    restoreFocus: !0,
    contain: o && !r
  }, s)), s = /* @__PURE__ */ X.createElement(La.Provider, {
    value: l
  }, /* @__PURE__ */ X.createElement(wu, null, s)), /* @__PURE__ */ Bn.createPortal(s, n);
}
function kn(t) {
  return wt() ? t.altKey : t.ctrlKey;
}
function Ye(t) {
  return Ie() ? t.metaKey : t.ctrlKey;
}
const ka = 1e3;
function ol(t) {
  let { keyboardDelegate: e, selectionManager: n, onTypeSelect: r } = t, o = I({
    search: "",
    timeout: null
  }).current, i = (l) => {
    let s = Na(l.key);
    if (!s || l.ctrlKey || l.metaKey || !l.currentTarget.contains(l.target))
      return;
    s === " " && o.search.trim().length > 0 && (l.preventDefault(), "continuePropagation" in l || l.stopPropagation()), o.search += s;
    let u = e.getKeyForSearch(o.search, n.focusedKey);
    u == null && (u = e.getKeyForSearch(o.search)), u != null && (n.setFocusedKey(u), r && r(u)), clearTimeout(o.timeout), o.timeout = setTimeout(() => {
      o.search = "";
    }, ka);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: e.getKeyForSearch ? i : null
    }
  };
}
function Na(t) {
  return t.length === 1 || !/^[A-Z]/i.test(t) ? t : "";
}
function il(t) {
<<<<<<< Updated upstream
  let { selectionManager: e, keyboardDelegate: n, ref: r, autoFocus: o = !1, shouldFocusWrap: i = !1, disallowEmptySelection: l = !1, disallowSelectAll: s = !1, selectOnFocus: u = e.selectionBehavior === "replace", disallowTypeAhead: a = !1, shouldUseVirtualFocus: c, allowsTabNavigation: f = !1, isVirtualized: b, scrollRef: d = r, linkBehavior: v = "action" } = t, { direction: g } = Zt(), h = Gt(), A = (P) => {
    if (P.altKey && P.key === "Tab" && P.preventDefault(), !r.current.contains(P.target))
      return;
    const C = ($, D) => {
      if ($ != null) {
        if (e.isLink($) && v === "selection" && u && !kn(P)) {
          us(() => {
            e.setFocusedKey($, D);
          });
          let z = d.current.querySelector(`[data-key="${CSS.escape($.toString())}"]`);
          h.open(z, P);
          return;
        }
        if (e.setFocusedKey($, D), e.isLink($) && v === "override")
          return;
        P.shiftKey && e.selectionMode === "multiple" ? e.extendSelection($) : u && !kn(P) && e.replaceSelection($);
=======
  let { selectionManager: e, keyboardDelegate: n, ref: r, autoFocus: o = !1, shouldFocusWrap: i = !1, disallowEmptySelection: l = !1, disallowSelectAll: s = !1, selectOnFocus: u = e.selectionBehavior === "replace", disallowTypeAhead: a = !1, shouldUseVirtualFocus: c, allowsTabNavigation: f = !1, isVirtualized: p, scrollRef: d = r, linkBehavior: v = "action" } = t, { direction: y } = Zt(), h = Gt(), _ = (E) => {
    if (E.altKey && E.key === "Tab" && E.preventDefault(), !r.current.contains(E.target))
      return;
    const P = (x, D) => {
      if (x != null) {
        if (e.isLink(x) && v === "selection" && u && !Nn(E)) {
          us(() => {
            e.setFocusedKey(x, D);
          });
          let z = d.current.querySelector(`[data-key="${CSS.escape(x.toString())}"]`);
          h.open(z, E);
          return;
        }
        if (e.setFocusedKey(x, D), e.isLink(x) && v === "override")
          return;
        E.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(x) : u && !Nn(E) && e.replaceSelection(x);
>>>>>>> Stashed changes
      }
    };
    switch (P.key) {
      case "ArrowDown":
        if (n.getKeyBelow) {
<<<<<<< Updated upstream
          var B, E;
          P.preventDefault();
          let $ = e.focusedKey != null ? n.getKeyBelow(e.focusedKey) : (B = n.getFirstKey) === null || B === void 0 ? void 0 : B.call(n);
          $ == null && i && ($ = (E = n.getFirstKey) === null || E === void 0 ? void 0 : E.call(n, e.focusedKey)), C($);
=======
          var B, C;
          E.preventDefault();
          let x = e.focusedKey != null ? n.getKeyBelow(e.focusedKey) : (B = n.getFirstKey) === null || B === void 0 ? void 0 : B.call(n);
          x == null && i && (x = (C = n.getFirstKey) === null || C === void 0 ? void 0 : C.call(n, e.focusedKey)), P(x);
>>>>>>> Stashed changes
        }
        break;
      case "ArrowUp":
        if (n.getKeyAbove) {
          var T, q;
<<<<<<< Updated upstream
          P.preventDefault();
          let $ = e.focusedKey != null ? n.getKeyAbove(e.focusedKey) : (T = n.getLastKey) === null || T === void 0 ? void 0 : T.call(n);
          $ == null && i && ($ = (q = n.getLastKey) === null || q === void 0 ? void 0 : q.call(n, e.focusedKey)), C($);
=======
          E.preventDefault();
          let x = e.focusedKey != null ? n.getKeyAbove(e.focusedKey) : (T = n.getLastKey) === null || T === void 0 ? void 0 : T.call(n);
          x == null && i && (x = (q = n.getLastKey) === null || q === void 0 ? void 0 : q.call(n, e.focusedKey)), P(x);
>>>>>>> Stashed changes
        }
        break;
      case "ArrowLeft":
        if (n.getKeyLeftOf) {
          var V, F;
<<<<<<< Updated upstream
          P.preventDefault();
          let $ = n.getKeyLeftOf(e.focusedKey);
          $ == null && i && ($ = g === "rtl" ? (V = n.getFirstKey) === null || V === void 0 ? void 0 : V.call(n, e.focusedKey) : (F = n.getLastKey) === null || F === void 0 ? void 0 : F.call(n, e.focusedKey)), C($, g === "rtl" ? "first" : "last");
=======
          E.preventDefault();
          let x = n.getKeyLeftOf(e.focusedKey);
          x == null && i && (x = y === "rtl" ? (V = n.getFirstKey) === null || V === void 0 ? void 0 : V.call(n, e.focusedKey) : (F = n.getLastKey) === null || F === void 0 ? void 0 : F.call(n, e.focusedKey)), P(x, y === "rtl" ? "first" : "last");
>>>>>>> Stashed changes
        }
        break;
      case "ArrowRight":
        if (n.getKeyRightOf) {
<<<<<<< Updated upstream
          var ue, ae;
          P.preventDefault();
          let $ = n.getKeyRightOf(e.focusedKey);
          $ == null && i && ($ = g === "rtl" ? (ue = n.getLastKey) === null || ue === void 0 ? void 0 : ue.call(n, e.focusedKey) : (ae = n.getFirstKey) === null || ae === void 0 ? void 0 : ae.call(n, e.focusedKey)), C($, g === "rtl" ? "last" : "first");
=======
          var ae, ce;
          E.preventDefault();
          let x = n.getKeyRightOf(e.focusedKey);
          x == null && i && (x = y === "rtl" ? (ae = n.getLastKey) === null || ae === void 0 ? void 0 : ae.call(n, e.focusedKey) : (ce = n.getFirstKey) === null || ce === void 0 ? void 0 : ce.call(n, e.focusedKey)), P(x, y === "rtl" ? "last" : "first");
>>>>>>> Stashed changes
        }
        break;
      case "Home":
        if (n.getFirstKey) {
<<<<<<< Updated upstream
          P.preventDefault();
          let $ = n.getFirstKey(e.focusedKey, Ye(P));
          e.setFocusedKey($), Ye(P) && P.shiftKey && e.selectionMode === "multiple" ? e.extendSelection($) : u && e.replaceSelection($);
=======
          E.preventDefault();
          let x = n.getFirstKey(e.focusedKey, Ye(E));
          e.setFocusedKey(x), Ye(E) && E.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(x) : u && e.replaceSelection(x);
>>>>>>> Stashed changes
        }
        break;
      case "End":
        if (n.getLastKey) {
<<<<<<< Updated upstream
          P.preventDefault();
          let $ = n.getLastKey(e.focusedKey, Ye(P));
          e.setFocusedKey($), Ye(P) && P.shiftKey && e.selectionMode === "multiple" ? e.extendSelection($) : u && e.replaceSelection($);
=======
          E.preventDefault();
          let x = n.getLastKey(e.focusedKey, Ye(E));
          e.setFocusedKey(x), Ye(E) && E.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(x) : u && e.replaceSelection(x);
>>>>>>> Stashed changes
        }
        break;
      case "PageDown":
        if (n.getKeyPageBelow) {
<<<<<<< Updated upstream
          P.preventDefault();
          let $ = n.getKeyPageBelow(e.focusedKey);
          C($);
=======
          E.preventDefault();
          let x = n.getKeyPageBelow(e.focusedKey);
          P(x);
>>>>>>> Stashed changes
        }
        break;
      case "PageUp":
        if (n.getKeyPageAbove) {
<<<<<<< Updated upstream
          P.preventDefault();
          let $ = n.getKeyPageAbove(e.focusedKey);
          C($);
=======
          E.preventDefault();
          let x = n.getKeyPageAbove(e.focusedKey);
          P(x);
>>>>>>> Stashed changes
        }
        break;
      case "a":
        Ye(P) && e.selectionMode === "multiple" && s !== !0 && (P.preventDefault(), e.selectAll());
        break;
      case "Escape":
        P.preventDefault(), l || e.clearSelection();
        break;
      case "Tab":
        if (!f) {
          if (P.shiftKey)
            r.current.focus();
          else {
<<<<<<< Updated upstream
            let $ = Me(r.current, {
              tabbable: !0
            }), D, z;
            do
              z = $.lastChild(), z && (D = z);
=======
            let x = Me(r.current, {
              tabbable: !0
            }), D, z;
            do
              z = x.lastChild(), z && (D = z);
>>>>>>> Stashed changes
            while (z);
            D && !D.contains(document.activeElement) && Fe(D);
          }
          break;
        }
    }
  }, w = I({
    top: 0,
    left: 0
  });
  mu(d, "scroll", b ? null : () => {
    w.current = {
      top: d.current.scrollTop,
      left: d.current.scrollLeft
    };
  });
  let S = (P) => {
    if (e.isFocused) {
      P.currentTarget.contains(P.target) || e.setFocused(!1);
      return;
    }
    if (P.currentTarget.contains(P.target)) {
      if (e.setFocused(!0), e.focusedKey == null) {
        let E = (q) => {
          q != null && (e.setFocusedKey(q), u && e.replaceSelection(q));
        }, T = P.relatedTarget;
        var C, B;
        T && P.currentTarget.compareDocumentPosition(T) & Node.DOCUMENT_POSITION_FOLLOWING ? E((C = e.lastSelectedKey) !== null && C !== void 0 ? C : n.getLastKey()) : E((B = e.firstSelectedKey) !== null && B !== void 0 ? B : n.getFirstKey());
      } else
        b || (d.current.scrollTop = w.current.top, d.current.scrollLeft = w.current.left);
      if (!b && e.focusedKey != null) {
        let E = d.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);
        E && (E.contains(document.activeElement) || Fe(E), Kn() === "keyboard" && vr(E, {
          containingElement: r.current
        }));
      }
    }
  }, K = (P) => {
    P.currentTarget.contains(P.relatedTarget) || e.setFocused(!1);
  };
<<<<<<< Updated upstream
  const x = I(o);
  W(() => {
    if (x.current) {
      let P = null;
      o === "first" && (P = n.getFirstKey()), o === "last" && (P = n.getLastKey());
      let C = e.selectedKeys;
      if (C.size) {
        for (let B of C)
=======
  const $ = I(o);
  W(() => {
    if ($.current) {
      let E = null;
      o === "first" && (E = n.getFirstKey()), o === "last" && (E = n.getLastKey());
      let P = e.selectedKeys;
      if (P.size) {
        for (let B of P)
>>>>>>> Stashed changes
          if (e.canSelectItem(B)) {
            P = B;
            break;
          }
      }
      e.setFocused(!0), e.setFocusedKey(P), P == null && !c && ft(r.current);
    }
  }, []);
  let M = I(e.focusedKey);
  W(() => {
    let P = Kn();
    if (e.isFocused && e.focusedKey != null && (d != null && d.current)) {
<<<<<<< Updated upstream
      let C = d.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);
      C && (P === "keyboard" || x.current) && (b || Co(d.current, C), vr(C, {
        containingElement: r.current
      }));
    }
    e.isFocused && e.focusedKey == null && M.current != null && ft(r.current), M.current = e.focusedKey, x.current = !1;
=======
      let P = d.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);
      P && (E === "keyboard" || $.current) && (p || Co(d.current, P), vr(P, {
        containingElement: r.current
      }));
    }
    e.isFocused && e.focusedKey == null && N.current != null && ft(r.current), N.current = e.focusedKey, $.current = !1;
>>>>>>> Stashed changes
  }, [
    b,
    d,
    e.focusedKey,
    e.isFocused,
    r
  ]);
  let R = {
    onKeyDown: A,
    onFocus: S,
    onBlur: K,
    onMouseDown(P) {
      d.current === P.target && P.preventDefault();
    }
  }, { typeSelectProps: p } = ol({
    keyboardDelegate: n,
    selectionManager: e
  });
<<<<<<< Updated upstream
  a || (R = se(p, R));
  let _;
  return c || (_ = e.focusedKey == null ? 0 : -1), {
=======
  a || (R = ue(b, R));
  let A;
  return c || (A = e.focusedKey == null ? 0 : -1), {
>>>>>>> Stashed changes
    collectionProps: {
      ...R,
      tabIndex: _
    }
  };
}
function ll(t) {
  let { selectionManager: e, key: n, ref: r, shouldSelectOnPressUp: o, shouldUseVirtualFocus: i, focus: l, isDisabled: s, onAction: u, allowsDifferentPressOrigin: a, linkBehavior: c = "action" } = t, f = Gt(), b = (F) => {
    if (F.pointerType === "keyboard" && kn(F))
      e.toggleSelection(n);
    else {
      if (e.selectionMode === "none")
        return;
      if (e.isLink(n)) {
        if (c === "selection") {
          f.open(r.current, F), e.setSelectedKeys(e.selectedKeys);
          return;
        } else if (c === "override" || c === "none")
          return;
      }
      e.selectionMode === "single" ? e.isSelected(n) && !e.disallowEmptySelection ? e.toggleSelection(n) : e.replaceSelection(n) : F && F.shiftKey ? e.extendSelection(n) : e.selectionBehavior === "toggle" || F && (Ye(F) || F.pointerType === "touch" || F.pointerType === "virtual") ? e.toggleSelection(n) : e.replaceSelection(n);
    }
  };
  W(() => {
    n === e.focusedKey && e.isFocused && !i && (l ? l() : document.activeElement !== r.current && ft(r.current));
  }, [
    r,
    n,
    e.focusedKey,
    e.childFocusStrategy,
    e.isFocused,
    i
  ]), s = s || e.isDisabled(n);
  let d = {};
  !i && !s ? d = {
    tabIndex: n === e.focusedKey ? 0 : -1,
    onFocus(F) {
      F.target === r.current && e.setFocusedKey(n);
    }
  } : s && (d.onMouseDown = (F) => {
    F.preventDefault();
  });
<<<<<<< Updated upstream
  let v = e.isLink(n) && c === "override", g = e.isLink(n) && c !== "selection" && c !== "none", h = !s && e.canSelectItem(n) && !v, A = (u || g) && !s, w = A && (e.selectionBehavior === "replace" ? !h : !h || e.isEmpty), S = A && h && e.selectionBehavior === "replace", K = w || S, x = I(null), M = K && h, R = I(!1), p = I(!1), _ = (F) => {
    u && u(), g && f.open(r.current, F);
  }, P = {};
  o ? (P.onPressStart = (F) => {
    x.current = F.pointerType, R.current = M, F.pointerType === "keyboard" && (!K || Vr()) && b(F);
  }, a ? (P.onPressUp = w ? null : (F) => {
    F.pointerType !== "keyboard" && h && b(F);
  }, P.onPress = w ? _ : null) : P.onPress = (F) => {
=======
  let v = e.isLink(n) && c === "override", y = e.isLink(n) && c !== "selection" && c !== "none", h = !s && e.canSelectItem(n) && !v, _ = (u || y) && !s, w = _ && (e.selectionBehavior === "replace" ? !h : !h || e.isEmpty), S = _ && h && e.selectionBehavior === "replace", K = w || S, $ = I(null), N = K && h, R = I(!1), b = I(!1), A = (F) => {
    u && u(), y && f.open(r.current, F);
  }, E = {};
  o ? (E.onPressStart = (F) => {
    $.current = F.pointerType, R.current = N, F.pointerType === "keyboard" && (!K || Vr()) && p(F);
  }, a ? (E.onPressUp = w ? null : (F) => {
    F.pointerType !== "keyboard" && h && p(F);
  }, E.onPress = w ? A : null) : E.onPress = (F) => {
>>>>>>> Stashed changes
    if (w || S && F.pointerType !== "mouse") {
      if (F.pointerType === "keyboard" && !Rr())
        return;
      _(F);
    } else
<<<<<<< Updated upstream
      F.pointerType !== "keyboard" && h && b(F);
  }) : (P.onPressStart = (F) => {
    x.current = F.pointerType, R.current = M, p.current = w, h && (F.pointerType === "mouse" && !w || F.pointerType === "keyboard" && (!A || Vr())) && b(F);
  }, P.onPress = (F) => {
    (F.pointerType === "touch" || F.pointerType === "pen" || F.pointerType === "virtual" || F.pointerType === "keyboard" && K && Rr() || F.pointerType === "mouse" && p.current) && (K ? _(F) : h && b(F));
  }), d["data-key"] = n, P.preventFocusOnPress = i;
  let { pressProps: C, isPressed: B } = qt(P), E = S ? (F) => {
    x.current === "mouse" && (F.stopPropagation(), F.preventDefault(), _(F));
=======
      F.pointerType !== "keyboard" && h && p(F);
  }) : (E.onPressStart = (F) => {
    $.current = F.pointerType, R.current = N, b.current = w, h && (F.pointerType === "mouse" && !w || F.pointerType === "keyboard" && (!_ || Vr())) && p(F);
  }, E.onPress = (F) => {
    (F.pointerType === "touch" || F.pointerType === "pen" || F.pointerType === "virtual" || F.pointerType === "keyboard" && K && Rr() || F.pointerType === "mouse" && b.current) && (K ? A(F) : h && p(F));
  }), d["data-key"] = n, E.preventFocusOnPress = i;
  let { pressProps: P, isPressed: B } = qt(E), C = S ? (F) => {
    $.current === "mouse" && (F.stopPropagation(), F.preventDefault(), A(F));
>>>>>>> Stashed changes
  } : void 0, { longPressProps: T } = Ko({
    isDisabled: !M,
    onLongPress(F) {
      F.pointerType === "touch" && (b(F), e.setSelectionBehavior("toggle"));
    }
  }), q = (F) => {
<<<<<<< Updated upstream
    x.current === "touch" && R.current && F.preventDefault();
=======
    $.current === "touch" && R.current && F.preventDefault();
>>>>>>> Stashed changes
  }, V = e.isLink(n) ? (F) => {
    Re.isOpening || F.preventDefault();
  } : void 0;
  return {
<<<<<<< Updated upstream
    itemProps: se(d, h || w ? C : {}, M ? T : {}, {
      onDoubleClick: E,
=======
    itemProps: ue(d, h || w ? P : {}, N ? T : {}, {
      onDoubleClick: C,
>>>>>>> Stashed changes
      onDragStartCapture: q,
      onClick: V
    }),
    isPressed: B,
    isSelected: e.isSelected(n),
    isFocused: e.isFocused && e.focusedKey === n,
    isDisabled: s,
    allowsSelection: h,
    hasAction: K
  };
}
function Rr() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === "Enter";
}
function Vr() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === " " || (t == null ? void 0 : t.code) === "Space";
}
class Zn {
  getNextKey(e) {
    for (e = this.collection.getKeyAfter(e); e != null; ) {
      if (this.collection.getItem(e).type === "item" && !this.disabledKeys.has(e))
        return e;
      e = this.collection.getKeyAfter(e);
    }
    return null;
  }
  getPreviousKey(e) {
    for (e = this.collection.getKeyBefore(e); e != null; ) {
      if (this.collection.getItem(e).type === "item" && !this.disabledKeys.has(e))
        return e;
      e = this.collection.getKeyBefore(e);
    }
    return null;
  }
  findKey(e, n, r) {
    let o = this.getItem(e);
    if (!o)
      return null;
    let i = o.getBoundingClientRect();
    do
      e = n(e), o = this.getItem(e);
    while (o && r(i, o.getBoundingClientRect()));
    return e;
  }
  isSameRow(e, n) {
    return e.top === n.top || e.left !== n.left;
  }
  isSameColumn(e, n) {
    return e.left === n.left || e.top !== n.top;
  }
  getKeyBelow(e) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(e, (n) => this.getNextKey(n), this.isSameRow) : this.getNextKey(e);
  }
  getKeyAbove(e) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(e, (n) => this.getPreviousKey(n), this.isSameRow) : this.getPreviousKey(e);
  }
  getNextColumn(e, n) {
    return n ? this.getPreviousKey(e) : this.getNextKey(e);
  }
  getKeyRightOf(e) {
    return this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(e, this.direction === "rtl") : this.findKey(e, (n) => this.getNextColumn(n, this.direction === "rtl"), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(e, this.direction === "rtl") : null;
  }
  getKeyLeftOf(e) {
    return this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(e, this.direction === "ltr") : this.findKey(e, (n) => this.getNextColumn(n, this.direction === "ltr"), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(e, this.direction === "ltr") : null;
  }
  getFirstKey() {
    let e = this.collection.getFirstKey();
    for (; e != null; ) {
      if (this.collection.getItem(e).type === "item" && !this.disabledKeys.has(e))
        return e;
      e = this.collection.getKeyAfter(e);
    }
    return null;
  }
  getLastKey() {
    let e = this.collection.getLastKey();
    for (; e != null; ) {
      if (this.collection.getItem(e).type === "item" && !this.disabledKeys.has(e))
        return e;
      e = this.collection.getKeyBefore(e);
    }
    return null;
  }
  getItem(e) {
    return this.ref.current.querySelector(`[data-key="${CSS.escape(e.toString())}"]`);
  }
  getKeyPageAbove(e) {
    let n = this.ref.current, r = this.getItem(e);
    if (!r)
      return null;
    if (!Dt(n))
      return this.getFirstKey();
    let o = n.getBoundingClientRect(), i = r.getBoundingClientRect();
    if (this.orientation === "horizontal") {
      let l = o.x - n.scrollLeft, s = Math.max(0, i.x - l + i.width - o.width);
      for (; r && i.x - l > s; )
        e = this.getKeyAbove(e), r = e == null ? null : this.getItem(e), i = r == null ? void 0 : r.getBoundingClientRect();
    } else {
      let l = o.y - n.scrollTop, s = Math.max(0, i.y - l + i.height - o.height);
      for (; r && i.y - l > s; )
        e = this.getKeyAbove(e), r = e == null ? null : this.getItem(e), i = r == null ? void 0 : r.getBoundingClientRect();
    }
    return e ?? this.getFirstKey();
  }
  getKeyPageBelow(e) {
    let n = this.ref.current, r = this.getItem(e);
    if (!r)
      return null;
    if (!Dt(n))
      return this.getLastKey();
    let o = n.getBoundingClientRect(), i = r.getBoundingClientRect();
    if (this.orientation === "horizontal") {
      let l = o.x - n.scrollLeft, s = Math.min(n.scrollWidth, i.x - l - i.width + o.width);
      for (; r && i.x - l < s; )
        e = this.getKeyBelow(e), r = e == null ? null : this.getItem(e), i = r == null ? void 0 : r.getBoundingClientRect();
    } else {
      let l = o.y - n.scrollTop, s = Math.min(n.scrollHeight, i.y - l - i.height + o.height);
      for (; r && i.y - l < s; )
        e = this.getKeyBelow(e), r = e == null ? null : this.getItem(e), i = r == null ? void 0 : r.getBoundingClientRect();
    }
    return e ?? this.getLastKey();
  }
  getKeyForSearch(e, n) {
    if (!this.collator)
      return null;
    let r = this.collection, o = n || this.getFirstKey();
    for (; o != null; ) {
      let i = r.getItem(o), l = i.textValue.slice(0, e.length);
      if (i.textValue && this.collator.compare(l, e) === 0)
        return o;
      o = this.getKeyBelow(o);
    }
    return null;
  }
  constructor(...e) {
    if (e.length === 1) {
      let n = e[0];
      this.collection = n.collection, this.ref = n.ref, this.collator = n.collator, this.disabledKeys = n.disabledKeys || /* @__PURE__ */ new Set(), this.orientation = n.orientation, this.direction = n.direction, this.layout = n.layout || "stack";
    } else
      this.collection = e[0], this.disabledKeys = e[1], this.ref = e[2], this.collator = e[3], this.layout = "stack", this.orientation = "vertical";
    this.layout === "stack" && this.orientation === "vertical" && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0);
  }
}
function sl(t) {
  let { selectionManager: e, collection: n, disabledKeys: r, ref: o, keyboardDelegate: i } = t, l = Xn({
    usage: "search",
    sensitivity: "base"
  }), s = e.disabledBehavior, u = re(() => i || new Zn(n, s === "selection" ? /* @__PURE__ */ new Set() : r, o, l), [
    i,
    n,
    r,
    o,
    l,
    s
  ]), { collectionProps: a } = il({
    ...t,
    ref: o,
    selectionManager: e,
    keyboardDelegate: u
  });
  return {
    listProps: a
  };
}
const Jt = /* @__PURE__ */ new WeakMap();
function Ia(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function ul(t, e) {
  let n = Jt.get(t);
  if (!n)
    throw new Error("Unknown list");
  return `${n.id}-option-${Ia(e)}`;
}
function Ba(t, e, n) {
  let r = ze(t, {
    labelable: !0
  }), o = t.selectionBehavior || "toggle", i = t.linkBehavior || (o === "replace" ? "action" : "override");
  o === "toggle" && i === "action" && (i = "override");
  let { listProps: l } = sl({
    ...t,
    ref: n,
    selectionManager: e.selectionManager,
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    linkBehavior: i
  }), { focusWithinProps: s } = Xt({
    onFocusWithin: t.onFocus,
    onBlurWithin: t.onBlur,
    onFocusWithinChange: t.onFocusChange
  }), u = Ae(t.id);
  Jt.set(e, {
    id: u,
    shouldUseVirtualFocus: t.shouldUseVirtualFocus,
    shouldSelectOnPressUp: t.shouldSelectOnPressUp,
    shouldFocusOnHover: t.shouldFocusOnHover,
    isVirtualized: t.isVirtualized,
    onAction: t.onAction,
    linkBehavior: i
  });
  let { labelProps: a, fieldProps: c } = Bo({
    ...t,
    id: u,
    // listbox is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  return {
    labelProps: a,
    listBoxProps: ue(r, s, e.selectionManager.selectionMode === "multiple" ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...ue(c, l)
    })
  };
}
function Oa(t, e, n) {
  var r;
  let { key: o } = t, i = Jt.get(e);
  var l;
  let s = (l = t.isDisabled) !== null && l !== void 0 ? l : e.disabledKeys.has(o);
  var u;
  let a = (u = t.isSelected) !== null && u !== void 0 ? u : e.selectionManager.isSelected(o);
  var c;
  let f = (c = t.shouldSelectOnPressUp) !== null && c !== void 0 ? c : i == null ? void 0 : i.shouldSelectOnPressUp;
  var b;
  let d = (b = t.shouldFocusOnHover) !== null && b !== void 0 ? b : i == null ? void 0 : i.shouldFocusOnHover;
  var v;
<<<<<<< Updated upstream
  let g = (v = t.shouldUseVirtualFocus) !== null && v !== void 0 ? v : i == null ? void 0 : i.shouldUseVirtualFocus;
=======
  let y = (v = t.shouldUseVirtualFocus) !== null && v !== void 0 ? v : i == null ? void 0 : i.shouldUseVirtualFocus;
>>>>>>> Stashed changes
  var h;
  let A = (h = t.isVirtualized) !== null && h !== void 0 ? h : i == null ? void 0 : i.isVirtualized, w = Oe(), S = Oe(), K = {
    role: "option",
    "aria-disabled": s || void 0,
    "aria-selected": e.selectionManager.selectionMode !== "none" ? a : void 0
  };
  Ie() && ho() || (K["aria-label"] = t["aria-label"], K["aria-labelledby"] = w, K["aria-describedby"] = S);
<<<<<<< Updated upstream
  let x = e.collection.getItem(o);
  if (A) {
    let E = Number(x == null ? void 0 : x.index);
    K["aria-posinset"] = Number.isNaN(E) ? void 0 : E + 1, K["aria-setsize"] = Rn(e.collection);
=======
  let $ = e.collection.getItem(o);
  if (_) {
    let C = Number($ == null ? void 0 : $.index);
    K["aria-posinset"] = Number.isNaN(C) ? void 0 : C + 1, K["aria-setsize"] = Rn(e.collection);
>>>>>>> Stashed changes
  }
  let { itemProps: M, isPressed: R, isFocused: p, hasAction: _, allowsSelection: P } = ll({
    selectionManager: e.selectionManager,
    key: o,
    ref: n,
    shouldSelectOnPressUp: f,
    allowsDifferentPressOrigin: f && d,
<<<<<<< Updated upstream
    isVirtualized: A,
    shouldUseVirtualFocus: g,
=======
    isVirtualized: _,
    shouldUseVirtualFocus: y,
>>>>>>> Stashed changes
    isDisabled: s,
    onAction: i != null && i.onAction ? () => {
      var E;
      return i == null || (E = i.onAction) === null || E === void 0 ? void 0 : E.call(i, o);
    } : void 0,
    linkBehavior: i == null ? void 0 : i.linkBehavior
  }), { hoverProps: C } = _o({
    isDisabled: s || !d,
    onHoverStart() {
      dt() || (e.selectionManager.setFocused(!0), e.selectionManager.setFocusedKey(o));
    }
<<<<<<< Updated upstream
  }), B = ze(x == null ? void 0 : x.props, {
    isLink: !!(!(x == null || (r = x.props) === null || r === void 0) && r.href)
=======
  }), B = ze($ == null ? void 0 : $.props, {
    isLink: !!(!($ == null || (r = $.props) === null || r === void 0) && r.href)
>>>>>>> Stashed changes
  });
  return delete B.id, {
    optionProps: {
      ...K,
<<<<<<< Updated upstream
      ...se(B, M, C),
=======
      ...ue(B, N, P),
>>>>>>> Stashed changes
      id: ul(e, o)
    },
    labelProps: {
      id: w
    },
    descriptionProps: {
      id: S
    },
    isFocused: p,
    isFocusVisible: p && dt(),
    isSelected: a,
    isDisabled: s,
    isPressed: R,
    allowsSelection: P,
    hasAction: _
  };
}
function Ra(t) {
  let { heading: e, "aria-label": n } = t, r = Ae();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: e ? {
      // Techincally, listbox cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a visual label for the nested group.
      id: r,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": e ? r : void 0
    }
  };
}
var al = {};
al = {
  longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
var cl = {};
cl = {
  longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
var dl = {};
dl = {
  longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
var fl = {};
fl = {
  longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
var pl = {};
pl = {
  longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
var bl = {};
bl = {
  longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
var ml = {};
ml = {
  longPressMessage: "Long press or press Alt + ArrowDown to open menu"
};
var vl = {};
vl = {
  longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
var hl = {};
hl = {
  longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
var gl = {};
gl = {
  longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
var $l = {};
$l = {
  longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
var yl = {};
yl = {
  longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
var xl = {};
xl = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
var Cl = {};
Cl = {
  longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
var El = {};
El = {
  longPressMessage: "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
var Pl = {};
Pl = {
  longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
};
var wl = {};
wl = {
  longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
var Sl = {};
Sl = {
  longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
var Tl = {};
Tl = {
  longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
var _l = {};
_l = {
  longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
var Al = {};
Al = {
  longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
var Kl = {};
Kl = {
  longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
var Dl = {};
Dl = {
  longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
var Fl = {};
Fl = {
  longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
var Ll = {};
Ll = {
  longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
var Ml = {};
Ml = {
  longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
var kl = {};
kl = {
  longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
var Nl = {};
Nl = {
  longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
var Il = {};
Il = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
var Bl = {};
Bl = {
  longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
var Ol = {};
Ol = {
  longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
var Rl = {};
Rl = {
  longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
var Vl = {};
Vl = {
  longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
};
var zl = {};
zl = {
  longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
};
function Va(t) {
  return t && t.__esModule ? t.default : t;
}
var jl = {};
jl = {
  "ar-AE": al,
  "bg-BG": cl,
  "cs-CZ": dl,
  "da-DK": fl,
  "de-DE": pl,
  "el-GR": bl,
  "en-US": ml,
  "es-ES": vl,
  "et-EE": hl,
  "fi-FI": gl,
  "fr-FR": $l,
  "he-IL": yl,
  "hr-HR": xl,
  "hu-HU": Cl,
  "it-IT": El,
  "ja-JP": Pl,
  "ko-KR": wl,
  "lt-LT": Sl,
  "lv-LV": Tl,
  "nb-NO": _l,
  "nl-NL": Al,
  "pl-PL": Kl,
  "pt-BR": Dl,
  "pt-PT": Fl,
  "ro-RO": Ll,
  "ru-RU": Ml,
  "sk-SK": kl,
  "sl-SI": Nl,
  "sr-SP": Il,
  "sv-SE": Bl,
  "tr-TR": Ol,
  "uk-UA": Rl,
  "zh-CN": Vl,
  "zh-TW": zl
};
function Jn(t, e, n) {
  let { type: r = "menu", isDisabled: o, trigger: i = "press" } = t, l = Ae(), { triggerProps: s, overlayProps: u } = Ta({
    type: r
  }, e, n), a = (d) => {
    if (!o && !(i === "longPress" && !d.altKey) && n && n.current)
      switch (d.key) {
        case "Enter":
        case " ":
          if (i === "longPress")
            return;
        case "ArrowDown":
          "continuePropagation" in d || d.stopPropagation(), d.preventDefault(), e.toggle("first");
          break;
        case "ArrowUp":
          "continuePropagation" in d || d.stopPropagation(), d.preventDefault(), e.toggle("last");
          break;
        default:
          "continuePropagation" in d && d.continuePropagation();
      }
  }, c = Yn(/* @__PURE__ */ Va(jl), "@react-aria/menu"), { longPressProps: f } = Ko({
    isDisabled: o || i !== "longPress",
    accessibilityDescription: c.format("longPressMessage"),
    onLongPressStart() {
      e.close();
    },
    onLongPress() {
      e.open("first");
    }
  }), b = {
    onPressStart(d) {
      d.pointerType !== "touch" && d.pointerType !== "keyboard" && !o && e.toggle(d.pointerType === "virtual" ? "first" : null);
    },
    onPress(d) {
      d.pointerType === "touch" && !o && e.toggle();
    }
  };
  return delete s.onPress, {
    menuTriggerProps: {
      ...s,
      ...i === "press" ? b : f,
      id: l,
      onKeyDown: a
    },
    menuProps: {
      ...u,
      "aria-labelledby": l,
      autoFocus: e.focusStrategy || !0,
      onClose: e.close
    }
  };
}
const Hl = /* @__PURE__ */ new WeakMap();
function za(t, e, n) {
  let { shouldFocusWrap: r = !0, onKeyDown: o, onKeyUp: i, ...l } = t;
  !t["aria-label"] && !t["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let s = ze(t, {
    labelable: !0
  }), { listProps: u } = sl({
    ...l,
    ref: n,
    selectionManager: e.selectionManager,
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    shouldFocusWrap: r,
    linkBehavior: "override"
  });
  return Hl.set(e, {
    onClose: t.onClose,
    onAction: t.onAction
  }), {
    menuProps: ue(s, {
      onKeyDown: o,
      onKeyUp: i
    }, {
      role: "menu",
      ...u,
      onKeyDown: (a) => {
        a.key !== "Escape" && u.onKeyDown(a);
      }
    })
  };
}
function ja(t, e, n) {
  var r;
<<<<<<< Updated upstream
  let { key: o, closeOnSelect: i, isVirtualized: l, "aria-haspopup": s, onPressStart: u, onPressUp: a, onPress: c, onPressChange: f, onPressEnd: b, onHoverStart: d, onHoverChange: v, onHoverEnd: g, onKeyDown: h, onKeyUp: A, onFocus: w, onFocusChange: S, onBlur: K } = t, x = !!s;
  var M;
  let R = (M = t.isDisabled) !== null && M !== void 0 ? M : e.disabledKeys.has(o);
  var p;
  let _ = (p = t.isSelected) !== null && p !== void 0 ? p : e.selectionManager.isSelected(o), P = Hl.get(e), C = t.onClose || P.onClose, B = x ? () => {
  } : t.onAction || P.onAction, E = Gt(), T = (J) => {
    B && B(o), J.target instanceof HTMLAnchorElement && E.open(J.target, J);
  }, q = "menuitem";
  x || (e.selectionManager.selectionMode === "single" ? q = "menuitemradio" : e.selectionManager.selectionMode === "multiple" && (q = "menuitemcheckbox"));
  let V = Oe(), F = Oe(), ue = Oe(), ae = {
=======
  let { key: o, closeOnSelect: i, isVirtualized: l, "aria-haspopup": s, onPressStart: u, onPressUp: a, onPress: c, onPressChange: f, onPressEnd: p, onHoverStart: d, onHoverChange: v, onHoverEnd: y, onKeyDown: h, onKeyUp: _, onFocus: w, onFocusChange: S, onBlur: K } = t, $ = !!s;
  var N;
  let R = (N = t.isDisabled) !== null && N !== void 0 ? N : e.disabledKeys.has(o);
  var b;
  let A = (b = t.isSelected) !== null && b !== void 0 ? b : e.selectionManager.isSelected(o), E = Hl.get(e), P = t.onClose || E.onClose, B = $ ? () => {
  } : t.onAction || E.onAction, C = Gt(), T = (Q) => {
    B && B(o), Q.target instanceof HTMLAnchorElement && C.open(Q.target, Q);
  }, q = "menuitem";
  $ || (e.selectionManager.selectionMode === "single" ? q = "menuitemradio" : e.selectionManager.selectionMode === "multiple" && (q = "menuitemcheckbox"));
  let V = Oe(), F = Oe(), ae = Oe(), ce = {
>>>>>>> Stashed changes
    "aria-disabled": R || void 0,
    role: q,
    "aria-label": t["aria-label"],
    "aria-labelledby": V,
    "aria-describedby": [
      F,
      ae
    ].filter(Boolean).join(" ") || void 0,
    "aria-controls": t["aria-controls"],
    "aria-haspopup": s,
    "aria-expanded": t["aria-expanded"]
  };
<<<<<<< Updated upstream
  e.selectionManager.selectionMode !== "none" && !x && (ae["aria-checked"] = _);
  let $ = e.collection.getItem(o);
  l && (ae["aria-posinset"] = $ == null ? void 0 : $.index, ae["aria-setsize"] = Rn(e.collection));
  let D = (J) => {
    J.pointerType === "keyboard" && T(J), u == null || u(J);
  }, z = (J) => {
    J.pointerType !== "keyboard" && (T(J), !x && C && (i ?? (e.selectionManager.selectionMode !== "multiple" || e.selectionManager.isLink(o))) && C()), a == null || a(J);
=======
  e.selectionManager.selectionMode !== "none" && !$ && (ce["aria-checked"] = A);
  let x = e.collection.getItem(o);
  l && (ce["aria-posinset"] = x == null ? void 0 : x.index, ce["aria-setsize"] = Rn(e.collection));
  let D = (Q) => {
    Q.pointerType === "keyboard" && T(Q), u == null || u(Q);
  }, z = (Q) => {
    Q.pointerType !== "keyboard" && (T(Q), !$ && P && (i ?? (e.selectionManager.selectionMode !== "multiple" || e.selectionManager.isLink(o))) && P()), a == null || a(Q);
>>>>>>> Stashed changes
  }, { itemProps: j, isFocused: H } = ll({
    selectionManager: e.selectionManager,
    key: o,
    ref: n,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0,
    // Disable all handling of links in useSelectable item
    // because we handle it ourselves. The behavior of menus
    // is slightly different from other collections because
    // actions are performed on key down rather than key up.
    linkBehavior: "none"
  }), { pressProps: Y, isPressed: U } = qt({
    onPressStart: D,
    onPress: c,
    onPressUp: z,
    onPressChange: f,
    onPressEnd: b,
    isDisabled: R
  }), { hoverProps: L } = _o({
    isDisabled: R,
    onHoverStart(Q) {
      dt() || (e.selectionManager.setFocused(!0), e.selectionManager.setFocusedKey(o)), d == null || d(Q);
    },
    onHoverChange: v,
<<<<<<< Updated upstream
    onHoverEnd: g
  }), { keyboardProps: N } = Ao({
    onKeyDown: (J) => {
      if (J.repeat) {
        J.continuePropagation();
=======
    onHoverEnd: y
  }), { keyboardProps: k } = Ao({
    onKeyDown: (Q) => {
      if (Q.repeat) {
        Q.continuePropagation();
>>>>>>> Stashed changes
        return;
      }
      switch (Q.key) {
        case " ":
<<<<<<< Updated upstream
          !R && e.selectionManager.selectionMode === "none" && !x && i !== !1 && C && C();
          break;
        case "Enter":
          !R && i !== !1 && !x && C && C();
          break;
        default:
          x || J.continuePropagation(), h == null || h(J);
          break;
      }
    },
    onKeyUp: A
  }), { focusProps: X } = Un({
    onBlur: K,
    onFocus: w,
    onFocusChange: S
  }), G = ze($.props, {
    isLink: !!(!($ == null || (r = $.props) === null || r === void 0) && r.href)
  });
  return delete G.id, {
    menuItemProps: {
      ...ae,
      ...se(G, x ? {
        onFocus: j.onFocus
      } : j, Y, L, N, X),
=======
          !R && e.selectionManager.selectionMode === "none" && !$ && i !== !1 && P && P();
          break;
        case "Enter":
          !R && i !== !1 && !$ && P && P();
          break;
        default:
          $ || Q.continuePropagation(), h == null || h(Q);
          break;
      }
    },
    onKeyUp: _
  }), { focusProps: Z } = Un({
    onBlur: K,
    onFocus: w,
    onFocusChange: S
  }), G = ze(x.props, {
    isLink: !!(!(x == null || (r = x.props) === null || r === void 0) && r.href)
  });
  return delete G.id, {
    menuItemProps: {
      ...ce,
      ...ue(G, $ ? {
        onFocus: j.onFocus
      } : j, Y, L, k, Z),
>>>>>>> Stashed changes
      tabIndex: j.tabIndex != null ? -1 : void 0
    },
    labelProps: {
      id: V
    },
    descriptionProps: {
      id: F
    },
    keyboardShortcutProps: {
      id: ae
    },
    isFocused: H,
    isSelected: _,
    isPressed: U,
    isDisabled: R
  };
}
function Ha(t) {
  let { heading: e, "aria-label": n } = t, r = Ae();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: e ? {
      // Techincally, menus cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a label for the nested group.
      id: r,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": e ? r : void 0
    }
  };
}
function Ua(t, e) {
  let { inputElementType: n = "input", isDisabled: r = !1, isRequired: o = !1, isReadOnly: i = !1, type: l = "text", validationBehavior: s = "aria" } = t, [u, a] = tt(t.value, t.defaultValue || "", t.onChange), { focusableProps: c } = Lo(t, e), f = On({
    ...t,
    value: u
<<<<<<< Updated upstream
  }), { isInvalid: b, validationErrors: d, validationDetails: v } = f.displayValidation, { labelProps: g, fieldProps: h, descriptionProps: A, errorMessageProps: w } = Oo({
=======
  }), { isInvalid: p, validationErrors: d, validationDetails: v } = f.displayValidation, { labelProps: y, fieldProps: h, descriptionProps: _, errorMessageProps: w } = Oo({
>>>>>>> Stashed changes
    ...t,
    isInvalid: b,
    errorMessage: t.errorMessage || d
  }), S = ze(t, {
    labelable: !0
  });
  const K = {
    type: l,
    pattern: t.pattern
  };
  return Eo(e, u, a), Io(t, f, e), W(() => {
    if (e.current instanceof at(e.current).HTMLTextAreaElement) {
<<<<<<< Updated upstream
      let x = e.current;
      Object.defineProperty(x, "defaultValue", {
        get: () => x.value,
=======
      let $ = e.current;
      Object.defineProperty($, "defaultValue", {
        get: () => $.value,
>>>>>>> Stashed changes
        set: () => {
        },
        configurable: !0
      });
    }
  }, [
    e
  ]), {
<<<<<<< Updated upstream
    labelProps: g,
    inputProps: se(S, n === "input" && K, {
=======
    labelProps: y,
    inputProps: ue(S, n === "input" && K, {
>>>>>>> Stashed changes
      disabled: r,
      readOnly: i,
      required: o && s === "native",
      "aria-required": o && s === "aria" || void 0,
      "aria-invalid": b || void 0,
      "aria-errormessage": t["aria-errormessage"],
      "aria-activedescendant": t["aria-activedescendant"],
      "aria-autocomplete": t["aria-autocomplete"],
      "aria-haspopup": t["aria-haspopup"],
      value: u,
<<<<<<< Updated upstream
      onChange: (x) => a(x.target.value),
=======
      onChange: ($) => a($.target.value),
>>>>>>> Stashed changes
      autoComplete: t.autoComplete,
      autoCapitalize: t.autoCapitalize,
      maxLength: t.maxLength,
      minLength: t.minLength,
      name: t.name,
      placeholder: t.placeholder,
      inputMode: t.inputMode,
      // Clipboard events
      onCopy: t.onCopy,
      onCut: t.onCut,
      onPaste: t.onPaste,
      // Composition events
      onCompositionEnd: t.onCompositionEnd,
      onCompositionStart: t.onCompositionStart,
      onCompositionUpdate: t.onCompositionUpdate,
      // Selection events
      onSelect: t.onSelect,
      // Input events
      onBeforeInput: t.onBeforeInput,
      onInput: t.onInput,
      ...c,
      ...h
    }),
    descriptionProps: A,
    errorMessageProps: w,
    isInvalid: b,
    validationErrors: d,
    validationDetails: v
  };
}
function Wa(t) {
  return t && t.__esModule ? t.default : t;
}
var Ul = {};
Ul = {
  "ar-AE": Ro,
  "bg-BG": Vo,
  "cs-CZ": zo,
  "da-DK": jo,
  "de-DE": Ho,
  "el-GR": Uo,
  "en-US": Wo,
  "es-ES": Go,
  "et-EE": qo,
  "fi-FI": Yo,
  "fr-FR": Xo,
  "he-IL": Zo,
  "hr-HR": Jo,
  "hu-HU": Qo,
  "it-IT": ei,
  "ja-JP": ti,
  "ko-KR": ni,
  "lt-LT": ri,
  "lv-LV": oi,
  "nb-NO": ii,
  "nl-NL": li,
  "pl-PL": si,
  "pt-BR": ui,
  "pt-PT": ai,
  "ro-RO": ci,
  "ru-RU": di,
  "sk-SK": fi,
  "sl-SI": pi,
  "sr-SP": bi,
  "sv-SE": mi,
  "tr-TR": vi,
  "uk-UA": hi,
  "zh-CN": gi,
  "zh-TW": $i
};
function Ga(t, e) {
  let { buttonRef: n, popoverRef: r, inputRef: o, listBoxRef: i, keyboardDelegate: l, shouldFocusWrap: s, isReadOnly: u, isDisabled: a } = t, c = Yn(/* @__PURE__ */ Wa(Ul), "@react-aria/combobox"), { menuTriggerProps: f, menuProps: b } = Jn({
    type: "listbox",
    isDisabled: a || u
  }, e, n);
  Jt.set(e, {
    id: b.id
  });
  let d = re(() => l || new Zn(e.collection, e.disabledKeys, i), [
    l,
    e.collection,
    e.disabledKeys,
    i
  ]), { collectionProps: v } = il({
    selectionManager: e.selectionManager,
    keyboardDelegate: d,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: s,
    ref: o,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
<<<<<<< Updated upstream
  }), g = Gt(), h = (L) => {
=======
  }), y = Gt(), h = (L) => {
>>>>>>> Stashed changes
    switch (L.key) {
      case "Enter":
      case "Tab":
        if (e.isOpen && L.key === "Enter" && L.preventDefault(), e.isOpen && e.selectionManager.focusedKey != null && e.selectionManager.isLink(e.selectionManager.focusedKey)) {
          if (L.key === "Enter") {
<<<<<<< Updated upstream
            let N = i.current.querySelector(`[data-key="${CSS.escape(e.selectionManager.focusedKey.toString())}"]`);
            N instanceof HTMLAnchorElement && g.open(N, L);
=======
            let k = i.current.querySelector(`[data-key="${CSS.escape(e.selectionManager.focusedKey.toString())}"]`);
            k instanceof HTMLAnchorElement && y.open(k, L);
>>>>>>> Stashed changes
          }
          e.close();
        } else
          e.commit();
        break;
      case "Escape":
        (e.selectedKey !== null || e.inputValue === "" || t.allowsCustomValue) && L.continuePropagation(), e.revert();
        break;
      case "ArrowDown":
        e.open("first", "manual");
        break;
      case "ArrowUp":
        e.open("last", "manual");
        break;
      case "ArrowLeft":
      case "ArrowRight":
        e.selectionManager.setFocusedKey(null);
        break;
    }
  }, A = (L) => {
    var N;
    L.relatedTarget === (n == null ? void 0 : n.current) || !((N = r.current) === null || N === void 0) && N.contains(L.relatedTarget) || (t.onBlur && t.onBlur(L), e.setFocused(!1));
  }, w = (L) => {
    e.isFocused || (t.onFocus && t.onFocus(L), e.setFocused(!0));
<<<<<<< Updated upstream
  }, { isInvalid: S, validationErrors: K, validationDetails: x } = e.displayValidation, { labelProps: M, inputProps: R, descriptionProps: p, errorMessageProps: _ } = Ua({
=======
  }, { isInvalid: S, validationErrors: K, validationDetails: $ } = e.displayValidation, { labelProps: N, inputProps: R, descriptionProps: b, errorMessageProps: A } = Ua({
>>>>>>> Stashed changes
    ...t,
    onChange: e.setInputValue,
    onKeyDown: u ? t.onKeyDown : Qe(e.isOpen && v.onKeyDown, h, t.onKeyDown),
    onBlur: A,
    value: e.inputValue,
    onFocus: w,
    autoComplete: "off",
    validate: void 0,
    [En]: e
  }, o), P = (L) => {
    L.pointerType === "touch" && (o.current.focus(), e.toggle(null, "manual"));
  }, C = (L) => {
    L.pointerType !== "touch" && (o.current.focus(), e.toggle(L.pointerType === "keyboard" || L.pointerType === "virtual" ? "first" : null, "manual"));
  }, B = At({
    id: f.id,
    "aria-label": c.format("buttonLabel"),
    "aria-labelledby": t["aria-labelledby"] || M.id
  }), E = At({
    id: b.id,
    "aria-label": c.format("listboxLabel"),
    "aria-labelledby": t["aria-labelledby"] || M.id
  }), T = I(0), q = (L) => {
    if (a || u)
      return;
    if (L.timeStamp - T.current < 500) {
      L.preventDefault(), o.current.focus();
      return;
    }
<<<<<<< Updated upstream
    let N = L.target.getBoundingClientRect(), X = L.changedTouches[0], G = Math.ceil(N.left + 0.5 * N.width), J = Math.ceil(N.top + 0.5 * N.height);
    X.clientX === G && X.clientY === J && (L.preventDefault(), o.current.focus(), e.toggle(null, "manual"), T.current = L.timeStamp);
  }, V = e.selectionManager.focusedKey != null && e.isOpen ? e.collection.getItem(e.selectionManager.focusedKey) : void 0;
  var F;
  let ue = (F = V == null ? void 0 : V.parentKey) !== null && F !== void 0 ? F : null;
  var ae;
  let $ = (ae = e.selectionManager.focusedKey) !== null && ae !== void 0 ? ae : null, D = I(ue), z = I($);
  W(() => {
    if (wt() && V != null && $ !== z.current) {
      let L = e.selectionManager.isSelected($), N = ue != null ? e.collection.getItem(ue) : null, X = (N == null ? void 0 : N["aria-label"]) || (typeof (N == null ? void 0 : N.rendered) == "string" ? N.rendered : "") || "", G = c.format("focusAnnouncement", {
        isGroupChange: N && ue !== D.current,
        groupTitle: X,
        groupCount: N ? [
          ...zt(N, e.collection)
=======
    let k = L.target.getBoundingClientRect(), Z = L.changedTouches[0], G = Math.ceil(k.left + 0.5 * k.width), Q = Math.ceil(k.top + 0.5 * k.height);
    Z.clientX === G && Z.clientY === Q && (L.preventDefault(), o.current.focus(), e.toggle(null, "manual"), T.current = L.timeStamp);
  }, V = e.selectionManager.focusedKey != null && e.isOpen ? e.collection.getItem(e.selectionManager.focusedKey) : void 0;
  var F;
  let ae = (F = V == null ? void 0 : V.parentKey) !== null && F !== void 0 ? F : null;
  var ce;
  let x = (ce = e.selectionManager.focusedKey) !== null && ce !== void 0 ? ce : null, D = I(ae), z = I(x);
  W(() => {
    if (wt() && V != null && x !== z.current) {
      let L = e.selectionManager.isSelected(x), k = ae != null ? e.collection.getItem(ae) : null, Z = (k == null ? void 0 : k["aria-label"]) || (typeof (k == null ? void 0 : k.rendered) == "string" ? k.rendered : "") || "", G = c.format("focusAnnouncement", {
        isGroupChange: k && ae !== D.current,
        groupTitle: Z,
        groupCount: k ? [
          ...zt(k, e.collection)
>>>>>>> Stashed changes
        ].length : 0,
        optionText: V["aria-label"] || V.textValue || "",
        isSelected: L
      });
      cn(G);
    }
<<<<<<< Updated upstream
    D.current = ue, z.current = $;
=======
    D.current = ae, z.current = x;
>>>>>>> Stashed changes
  });
  let j = Rn(e.collection), H = I(j), Y = I(e.isOpen);
  W(() => {
    let L = e.isOpen !== Y.current && (e.selectionManager.focusedKey == null || wt());
    if (e.isOpen && (L || j !== H.current)) {
      let N = c.format("countAnnouncement", {
        optionCount: j
      });
      cn(N);
    }
    H.current = j, Y.current = e.isOpen;
  });
  let U = I(e.selectedKey);
  return W(() => {
    if (wt() && e.isFocused && e.selectedItem && e.selectedKey !== U.current) {
      let L = e.selectedItem["aria-label"] || e.selectedItem.textValue || "", N = c.format("selectedAnnouncement", {
        optionText: L
      });
      cn(N);
    }
    U.current = e.selectedKey;
  }), W(() => {
    if (e.isOpen)
      return rl([
        o.current,
        r.current
      ]);
  }, [
    e.isOpen,
    o,
    r
  ]), {
    labelProps: M,
    buttonProps: {
      ...f,
      ...B,
      excludeFromTabOrder: !0,
      onPress: P,
      onPressStart: C,
      isDisabled: a || u
    },
    inputProps: ue(R, {
      role: "combobox",
      "aria-expanded": f["aria-expanded"],
      "aria-controls": e.isOpen ? b.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": V ? ul(e, V.key) : void 0,
      onTouchEnd: q,
      // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
      autoCorrect: "off",
      // This disable's the macOS Safari spell check auto corrections.
      spellCheck: "false"
    }),
<<<<<<< Updated upstream
    listBoxProps: se(b, E, {
=======
    listBoxProps: ue(p, C, {
>>>>>>> Stashed changes
      autoFocus: e.focusStrategy,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection"
    }),
    descriptionProps: p,
    errorMessageProps: _,
    isInvalid: S,
    validationErrors: K,
<<<<<<< Updated upstream
    validationDetails: x
=======
    validationDetails: $
>>>>>>> Stashed changes
  };
}
const Wl = /* @__PURE__ */ new WeakMap();
function qa(t, e, n) {
  let { keyboardDelegate: r, isDisabled: o, isRequired: i, name: l, validationBehavior: s = "aria" } = t, u = Xn({
    usage: "search",
    sensitivity: "base"
  }), a = re(() => r || new Zn(e.collection, e.disabledKeys, null, u), [
    r,
    e.collection,
    e.disabledKeys,
    u
  ]), { menuTriggerProps: c, menuProps: f } = Jn({
    isDisabled: o,
    type: "listbox"
  }, e, n), b = (p) => {
    switch (p.key) {
      case "ArrowLeft": {
        p.preventDefault();
        let _ = e.selectedKey != null ? a.getKeyAbove(e.selectedKey) : a.getFirstKey();
        _ && e.setSelectedKey(_);
        break;
      }
      case "ArrowRight": {
        p.preventDefault();
        let _ = e.selectedKey != null ? a.getKeyBelow(e.selectedKey) : a.getFirstKey();
        _ && e.setSelectedKey(_);
        break;
      }
    }
  }, { typeSelectProps: d } = ol({
    keyboardDelegate: a,
    selectionManager: e.selectionManager,
    onTypeSelect(p) {
      e.setSelectedKey(p);
    }
<<<<<<< Updated upstream
  }), { isInvalid: v, validationErrors: g, validationDetails: h } = e.displayValidation, { labelProps: A, fieldProps: w, descriptionProps: S, errorMessageProps: K } = Oo({
    ...t,
    labelElementType: "span",
    isInvalid: v,
    errorMessage: t.errorMessage || g
  });
  d.onKeyDown = d.onKeyDownCapture, delete d.onKeyDownCapture;
  let x = ze(t, {
    labelable: !0
  }), M = se(d, c, w), R = Ae();
=======
  }), { isInvalid: v, validationErrors: y, validationDetails: h } = e.displayValidation, { labelProps: _, fieldProps: w, descriptionProps: S, errorMessageProps: K } = Oo({
    ...t,
    labelElementType: "span",
    isInvalid: v,
    errorMessage: t.errorMessage || y
  });
  d.onKeyDown = d.onKeyDownCapture, delete d.onKeyDownCapture;
  let $ = ze(t, {
    labelable: !0
  }), N = ue(d, c, w), R = Ae();
>>>>>>> Stashed changes
  return Wl.set(e, {
    isDisabled: o,
    isRequired: i,
    name: l,
    validationBehavior: s
  }), {
    labelProps: {
      ...A,
      onClick: () => {
        t.isDisabled || (n.current.focus(), To("keyboard"));
      }
    },
<<<<<<< Updated upstream
    triggerProps: se(x, {
      ...M,
=======
    triggerProps: ue($, {
      ...N,
>>>>>>> Stashed changes
      isDisabled: o,
      onKeyDown: Qe(M.onKeyDown, b, t.onKeyDown),
      onKeyUp: t.onKeyUp,
      "aria-labelledby": [
        R,
        M["aria-labelledby"],
        M["aria-label"] && !M["aria-labelledby"] ? M.id : null
      ].filter(Boolean).join(" "),
      onFocus(p) {
        e.isFocused || (t.onFocus && t.onFocus(p), t.onFocusChange && t.onFocusChange(!0), e.setFocused(!0));
      },
      onBlur(p) {
        e.isOpen || (t.onBlur && t.onBlur(p), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      }
    }),
    valueProps: {
      id: R
    },
    menuProps: {
      ...f,
      autoFocus: e.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      disallowEmptySelection: !0,
      linkBehavior: "selection",
      onBlur: (p) => {
        p.currentTarget.contains(p.relatedTarget) || (t.onBlur && t.onBlur(p), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      },
      "aria-labelledby": [
        w["aria-labelledby"],
        M["aria-label"] && !w["aria-labelledby"] ? M.id : null
      ].filter(Boolean).join(" ")
    },
    descriptionProps: S,
    errorMessageProps: K,
    isInvalid: v,
<<<<<<< Updated upstream
    validationErrors: g,
=======
    validationErrors: y,
>>>>>>> Stashed changes
    validationDetails: h
  };
}
function Ya(t, e, n) {
  let r = Wl.get(e) || {}, { autoComplete: o, name: i = r.name, isDisabled: l = r.isDisabled } = t, { validationBehavior: s, isRequired: u } = r, a = Fu(), { visuallyHiddenProps: c } = el();
  Eo(t.selectRef, e.selectedKey, e.setSelectedKey), Io({
    validationBehavior: s,
    focus: () => n.current.focus()
  }, e, t.selectRef);
  var f;
  return {
    containerProps: {
      ...c,
      "aria-hidden": !0,
      "data-a11y-ignore": "aria-hidden-focus"
    },
    inputProps: {
      type: "text",
      tabIndex: a == null || e.isFocused || e.isOpen ? -1 : 0,
      style: {
        fontSize: 16
      },
      onFocus: () => n.current.focus(),
      disabled: l
    },
    selectProps: {
      tabIndex: -1,
      autoComplete: o,
      disabled: l,
      required: s === "native" && u,
      name: i,
      value: (f = e.selectedKey) !== null && f !== void 0 ? f : "",
      onChange: (b) => e.setSelectedKey(b.target.value)
    }
  };
}
function Xa(t) {
  let { state: e, triggerRef: n, label: r, name: o, isDisabled: i } = t, l = I(null), { containerProps: s, inputProps: u, selectProps: a } = Ya({
    ...t,
    selectRef: l
  }, e, n);
  var c;
  return e.collection.size <= 300 ? /* @__PURE__ */ X.createElement("div", {
    ...s,
    "data-testid": "hidden-select-container"
  }, /* @__PURE__ */ X.createElement("input", u), /* @__PURE__ */ X.createElement("label", null, r, /* @__PURE__ */ X.createElement("select", {
    ...a,
    ref: l
  }, /* @__PURE__ */ X.createElement("option", null), [
    ...e.collection.getKeys()
  ].map((f) => {
<<<<<<< Updated upstream
    let b = e.collection.getItem(f);
    if (b.type === "item")
      return /* @__PURE__ */ Q.createElement("option", {
        key: b.key,
        value: b.key
      }, b.textValue);
  })))) : o ? /* @__PURE__ */ Q.createElement("input", {
=======
    let p = e.collection.getItem(f);
    if (p.type === "item")
      return /* @__PURE__ */ X.createElement("option", {
        key: p.key,
        value: p.key
      }, p.textValue);
  })))) : o ? /* @__PURE__ */ X.createElement("input", {
>>>>>>> Stashed changes
    type: "hidden",
    autoComplete: a.autoComplete,
    name: o,
    disabled: i,
    value: (c = e.selectedKey) !== null && c !== void 0 ? c : ""
  }) : null;
}
const Za = "_focused_1af8e_1", Ja = "_listbox_1af8e_10", Qa = "_content_1af8e_89", ec = "_description_1af8e_98", tc = "_uppercase_1af8e_126", nc = "_divider_1af8e_130", Ce = {
  focused: Za,
  listbox: Ja,
  "listbox-top": "_listbox-top_1af8e_35",
  "listbox-bottom": "_listbox-bottom_1af8e_39",
  "listbox-content": "_listbox-content_1af8e_43",
  "listbox-section-list": "_listbox-section-list_1af8e_51",
  "listbox-section": "_listbox-section_1af8e_51",
  "listbox-item": "_listbox-item_1af8e_61",
  content: Qa,
  description: ec,
  uppercase: tc,
  divider: nc,
  "listbox-item--green-tilleul-verveine": "_listbox-item--green-tilleul-verveine_1af8e_141",
  "listbox--green-tilleul-verveine": "_listbox--green-tilleul-verveine_1af8e_149",
  "listbox-item--green-bourgeon": "_listbox-item--green-bourgeon_1af8e_157",
  "listbox--green-bourgeon": "_listbox--green-bourgeon_1af8e_165",
  "listbox-item--green-emeraude": "_listbox-item--green-emeraude_1af8e_173",
  "listbox--green-emeraude": "_listbox--green-emeraude_1af8e_181",
  "listbox-item--green-menthe": "_listbox-item--green-menthe_1af8e_189",
  "listbox--green-menthe": "_listbox--green-menthe_1af8e_197",
  "listbox-item--green-archipel": "_listbox-item--green-archipel_1af8e_205",
  "listbox--green-archipel": "_listbox--green-archipel_1af8e_213",
  "listbox-item--blue-ecume": "_listbox-item--blue-ecume_1af8e_221",
  "listbox--blue-ecume": "_listbox--blue-ecume_1af8e_229",
  "listbox-item--blue-cumulus": "_listbox-item--blue-cumulus_1af8e_237",
  "listbox--blue-cumulus": "_listbox--blue-cumulus_1af8e_245",
  "listbox-item--purple-glycine": "_listbox-item--purple-glycine_1af8e_253",
  "listbox--purple-glycine": "_listbox--purple-glycine_1af8e_261",
  "listbox-item--pink-macaron": "_listbox-item--pink-macaron_1af8e_269",
  "listbox--pink-macaron": "_listbox--pink-macaron_1af8e_277",
  "listbox-item--pink-tuile": "_listbox-item--pink-tuile_1af8e_285",
  "listbox--pink-tuile": "_listbox--pink-tuile_1af8e_293",
  "listbox-item--yellow-tournesol": "_listbox-item--yellow-tournesol_1af8e_301",
  "listbox--yellow-tournesol": "_listbox--yellow-tournesol_1af8e_309",
  "listbox-item--yellow-moutarde": "_listbox-item--yellow-moutarde_1af8e_317",
  "listbox--yellow-moutarde": "_listbox--yellow-moutarde_1af8e_325",
  "listbox-item--orange-terre-battue": "_listbox-item--orange-terre-battue_1af8e_333",
  "listbox--orange-terre-battue": "_listbox--orange-terre-battue_1af8e_341",
  "listbox-item--brown-cafe-creme": "_listbox-item--brown-cafe-creme_1af8e_349",
  "listbox--brown-cafe-creme": "_listbox--brown-cafe-creme_1af8e_357",
  "listbox-item--brown-caramel": "_listbox-item--brown-caramel_1af8e_365",
  "listbox--brown-caramel": "_listbox--brown-caramel_1af8e_373",
  "listbox-item--brown-opera": "_listbox-item--brown-opera_1af8e_381",
  "listbox--brown-opera": "_listbox--brown-opera_1af8e_389",
  "listbox-item--beige-gris-galet": "_listbox-item--beige-gris-galet_1af8e_397",
  "listbox--beige-gris-galet": "_listbox--beige-gris-galet_1af8e_405",
  "listbox-item--success": "_listbox-item--success_1af8e_413",
  "listbox--success": "_listbox--success_1af8e_421",
  "listbox-item--warning": "_listbox-item--warning_1af8e_429",
  "listbox--warning": "_listbox--warning_1af8e_437",
  "listbox-item--info": "_listbox-item--info_1af8e_445",
  "listbox--info": "_listbox--info_1af8e_453",
  "listbox-item--error": "_listbox-item--error_1af8e_461",
  "listbox--error": "_listbox--error_1af8e_469"
<<<<<<< Updated upstream
}, Gl = Rt({}), cd = ({
=======
}, Gl = Rt({}), fd = ({
>>>>>>> Stashed changes
  children: t,
  routerComponent: e,
  extendRequiredFieldsLabelsWith: n = /* @__PURE__ */ m("span", { style: { color: "var(--text-default-error)" }, children: " *" }),
  extendOptionalFieldsLabelsWith: r = " (optionnel)",
  defaultLang: o = "fr",
  verbose: i = !1
}) => {
<<<<<<< Updated upstream
  const [l, s] = Z(
    window.localStorage.getItem("locale") || o
  ), [u, a] = Z(!1);
=======
  const [l, s] = J(window.localStorage.getItem("locale") || o), [u, a] = J(!1);
>>>>>>> Stashed changes
  W(() => {
    const b = async () => {
      var h;
      (h = window == null ? void 0 : window.dsfr) != null && h.isStarted || (window.dsfr = {
        verbose: i,
        mode: "manual"
      }, await import("./dsfr.module.min-23ae5258.js"), await import("./utility-251e9615.js"), await import("./dsfr-4e49221c.js"), window.dsfr.start(), a(!0));
<<<<<<< Updated upstream
    }, d = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ), v = d != null && d.matches ? "dark" : "light", g = window.localStorage.getItem("theme");
    document.documentElement.setAttribute(
      "data-fr-scheme",
      g || v
    ), b();
  }, []);
  const c = te((b) => {
    window.localStorage.setItem("locale", b), document.documentElement.setAttribute("lang", b), s(b);
  }, []), f = ne(
    () => ({
      setLocale: c,
      routerComponent: e,
      locale: l,
      extendRequiredFieldsLabelsWith: n,
      extendOptionalFieldsLabelsWith: r
    }),
    [
      e,
      c,
      l,
      n,
      r
    ]
  );
=======
    }, d = window.matchMedia("(prefers-color-scheme: dark)"), v = d != null && d.matches ? "dark" : "light", y = window.localStorage.getItem("theme");
    document.documentElement.setAttribute("data-fr-scheme", y || v), p();
  }, []);
  const c = te((p) => {
    window.localStorage.setItem("locale", p), document.documentElement.setAttribute("lang", p), s(p);
  }, []), f = re(() => ({
    setLocale: c,
    routerComponent: e,
    locale: l,
    extendRequiredFieldsLabelsWith: n,
    extendOptionalFieldsLabelsWith: r
  }), [e, c, l, n, r]);
>>>>>>> Stashed changes
  return /* @__PURE__ */ m(Gl.Provider, { value: f, children: u ? t : null });
}, bt = () => Se(Gl), he = be(({
  children: t,
  className: e,
  icon: n,
  current: r,
  iconPosition: o = "left",
  isSimple: i = !1,
  size: l = "md",
  ...s
}, u) => {
  const { routerComponent: a } = bt();
  return /* @__PURE__ */ m(
    a || "a",
    {
      ref: u,
      "aria-current": r || void 0,
<<<<<<< Updated upstream
      className: y({
=======
      className: g({
>>>>>>> Stashed changes
        "fr-link": i,
        [`fr-link-${l}`]: l !== "md",
        [`fr-icon-${n}`]: !!n,
        [`fr-link--icon-${o}`]: n && o
      }, e),
      ...s,
      children: t
    }
  );
});
function ql({ item: t, state: e }) {
  const n = I(null), { optionProps: r, descriptionProps: o, labelProps: i, isFocused: l, isFocusVisible: s } = Oa({ key: t.key }, e, n), { description: u, startContent: a, endContent: c, color: f, showDivider: b, href: d, className: v } = t.props || {};
  return /* @__PURE__ */ O(
    d ? he : "li",
    {
      ...r,
      ref: n,
      href: d,
<<<<<<< Updated upstream
      className: y(
=======
      className: g(
>>>>>>> Stashed changes
        Ce["listbox-item"],
        v,
        {
          [Ce[`listbox-item--${f}`]]: f,
          [Ce.divider]: b,
          "fr-enlarge-link": d,
          [Ce.focused]: l && s
        }
      ),
      children: [
        a && a,
        /* @__PURE__ */ O("span", { className: Ce.content, children: [
          /* @__PURE__ */ m("span", { ...i, children: t.rendered }),
          u && /* @__PURE__ */ m("span", { ...o, className: Ce.description, children: u })
        ] }),
        c && c
      ]
    }
  );
}
function rc({ section: t, state: e }) {
  const { itemProps: n, headingProps: r, groupProps: o } = Ra({
    heading: t.rendered,
    "aria-label": t["aria-label"]
  }), { showDivider: i, className: l, css: s = {} } = t.props || {}, u = [...t.childNodes].find((a) => a.props.href) ? "div" : "ul";
  return /* @__PURE__ */ O(
    "li",
    {
      ...n,
<<<<<<< Updated upstream
      className: y(
=======
      className: g(
>>>>>>> Stashed changes
        Ce["listbox-section"],
        l,
        s.base,
        { [Ce.divider]: i }
      ),
      children: [
        t.rendered && /* @__PURE__ */ m(
          "span",
          {
            ...r,
<<<<<<< Updated upstream
            className: y(
=======
            className: g(
>>>>>>> Stashed changes
              "fr-text-mention--grey fr-text--sm fr-my-1w fr-px-1w",
              s.title
            ),
            children: t.rendered
          }
        ),
<<<<<<< Updated upstream
        /* @__PURE__ */ m(u, { ...o, className: y(Ce["listbox-section-list"], s.list), children: [...t.childNodes].map((a) => /* @__PURE__ */ m(
=======
        /* @__PURE__ */ m(u, { ...o, className: g(Ce["listbox-section-list"], s.list), children: [...t.childNodes].map((a) => /* @__PURE__ */ m(
>>>>>>> Stashed changes
          ql,
          {
            item: a,
            state: e
          },
          a.key
        )) })
      ]
    }
  );
}
function Qn(t) {
<<<<<<< Updated upstream
  var v, g;
  const e = I(null), { listBoxRef: n = e, state: r, className: o, css: i = {}, color: l, topContent: s, bottomContent: u, ...a } = t, { listBoxProps: c } = Ba(a, r, n), { isFocusVisible: f } = qn(), b = [...r.collection].find((h) => h.props.href) ? "div" : "ul", d = ((g = (v = t == null ? void 0 : t.triggerRef) == null ? void 0 : v.current) == null ? void 0 : g.offsetWidth) || 0;
  return /* @__PURE__ */ O("div", { className: y(Ce.listbox, o, i.base), style: { minWidth: d || "auto", maxWidth: d > 150 ? d : "auto" }, children: [
    /* @__PURE__ */ m("span", { className: y(Ce["listbox-top"], i.top), children: s && s }),
=======
  var v, y;
  const e = I(null), { listBoxRef: n = e, state: r, className: o, css: i = {}, color: l, topContent: s, bottomContent: u, ...a } = t, { listBoxProps: c } = Ba(a, r, n), { isFocusVisible: f } = qn(), p = [...r.collection].find((h) => h.props.href) ? "div" : "ul", d = ((y = (v = t == null ? void 0 : t.triggerRef) == null ? void 0 : v.current) == null ? void 0 : y.offsetWidth) || 0;
  return /* @__PURE__ */ O("div", { className: g(Ce.listbox, o, i.base), style: { minWidth: d || "auto", maxWidth: d > 150 ? d : "auto" }, children: [
    /* @__PURE__ */ m("span", { className: g(Ce["listbox-top"], i.top), children: s && s }),
>>>>>>> Stashed changes
    /* @__PURE__ */ m(
      b,
      {
<<<<<<< Updated upstream
        className: y(Ce["listbox-content"], i.list, { [Ce[`listbox--${l}`]]: l }),
=======
        className: g(Ce["listbox-content"], i.list, { [Ce[`listbox--${l}`]]: l }),
>>>>>>> Stashed changes
        ref: n,
        "data-focus-visible": f,
        ...c,
        children: [...r.collection].map((h) => h.type === "section" ? /* @__PURE__ */ ir(rc, { ...h.props, key: h.key, section: h, state: r }) : /* @__PURE__ */ ir(ql, { ...h.props, key: h.key, item: h, state: r }))
      }
    ),
<<<<<<< Updated upstream
    /* @__PURE__ */ m("span", { className: y(Ce["listbox-bottom"], i.bottom), children: u && u })
=======
    /* @__PURE__ */ m("span", { className: g(Ce["listbox-bottom"], i.bottom), children: u && u })
>>>>>>> Stashed changes
  ] });
}
const oc = "_popover_1g6m6_1", ic = {
  popover: oc
};
function er({ children: t, state: e, ...n }) {
  const r = I(null), { isNonModal: o = !1, popoverRef: i = r } = n, { popoverProps: l, underlayProps: s } = Fa({
    ...n,
    popoverRef: i
  }, e);
  return /* @__PURE__ */ O(Ma, { children: [
    !o && /* @__PURE__ */ m("div", { ...s, style: { position: "fixed", inset: 0 } }),
    /* @__PURE__ */ O(
      "div",
      {
        ...l,
        ref: i,
        className: ic.popover,
        children: [
          !o && /* @__PURE__ */ m(Or, { onDismiss: e.close }),
          t,
          /* @__PURE__ */ m(Or, { onDismiss: e.close })
        ]
      }
    )
  ] });
}
const lc = "_spinner_1m2vp_5", sc = "_internal_1m2vp_27", zr = {
  spinner: lc,
  "internal-circle": "_internal-circle_1m2vp_27",
  internal: sc
};
function uc({ size: t = 24 }) {
  const e = ne();
  return W(() => {
    var n, r;
    (n = document == null ? void 0 : document.getElementById(e)) == null || n.style.setProperty("width", `${t}px`), (r = document == null ? void 0 : document.getElementById(e)) == null || r.style.setProperty("height", `${t}px`);
  }, [t, e]), /* @__PURE__ */ m("svg", { id: e, className: zr.spinner, viewBox: "0 0 120 120", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ m("circle", { className: zr["internal-circle"], cx: "60", cy: "60", r: "30" }) });
}
function ac(t) {
  const { contains: e } = sa({ sensitivity: "base" }), n = ws({
    ...t,
    defaultFilter: e,
    allowsCustomValue: !0
  }), r = vt.useRef(null), o = vt.useRef(null), i = vt.useRef(null), l = vt.useRef(null), { size: s = "md", color: u, onSubmit: a, topContent: c, bottomContent: f, ...b } = t, { inputProps: d, listBoxProps: v } = Ga(
    {
      ...b,
      inputRef: r,
      listBoxRef: o,
      popoverRef: i,
<<<<<<< Updated upstream
      onKeyUp: (g) => {
        var h;
        g.key === "Enter" && (g.preventDefault(), (h = t.onSubmit) == null || h.call(t, n.inputValue));
=======
      onKeyUp: (y) => {
        var h;
        y.key === "Enter" && (y.preventDefault(), (h = t.onSubmit) == null || h.call(t, n.inputValue));
>>>>>>> Stashed changes
      }
    },
    n
  );
<<<<<<< Updated upstream
  return /* @__PURE__ */ O("form", { onSubmit: () => a == null ? void 0 : a((t == null ? void 0 : t.inputValue) || ""), ref: l, className: y("fr-search-bar", { "fr-search-bar--lg": s === "lg" }), role: "search", children: [
=======
  return /* @__PURE__ */ O("form", { onSubmit: () => a == null ? void 0 : a((t == null ? void 0 : t.inputValue) || ""), ref: l, className: g("fr-search-bar", { "fr-search-bar--lg": s === "lg" }), role: "search", children: [
>>>>>>> Stashed changes
    /* @__PURE__ */ m(
      "input",
      {
        ...d,
        type: "search",
        ref: r,
        className: "fr-input"
      }
    ),
<<<<<<< Updated upstream
    /* @__PURE__ */ O("button", { type: "submit", style: { position: "relative" }, className: y("fr-btn", { "fr-btn--lg": s === "lg" }), children: [
=======
    /* @__PURE__ */ O("button", { type: "submit", style: { position: "relative" }, className: g("fr-btn", { "fr-btn--lg": s === "lg" }), children: [
>>>>>>> Stashed changes
      /* @__PURE__ */ m("div", { style: { position: "absolute", left: "-40px" }, children: t.loadingState === "loading" && /* @__PURE__ */ m(uc, {}) }),
      "Rechercher"
    ] }),
    n.isOpen && /* @__PURE__ */ m(
      er,
      {
        popoverRef: i,
        triggerRef: r,
        state: n,
        isNonModal: !1,
        placement: "bottom start",
        children: /* @__PURE__ */ m(
          Qn,
          {
            ...v,
            color: u,
            listBoxRef: o,
            triggerRef: l,
            state: n,
            topContent: c,
            bottomContent: f
          }
        )
      }
    )
  ] });
}
<<<<<<< Updated upstream
const dd = Vt;
const cc = me, dc = cc(
  ({ as: t, className: e, noIcon: n, color: r = "blue-france", size: o, icon: i, variant: l = "primary", ...s }, u) => {
    const a = t === "a" ? he : t || "p", c = y(
=======
const pd = Vt;
const cc = be, dc = cc(
  ({ as: t, className: e, noIcon: n, color: r = "blue-france", size: o, icon: i, variant: l = "primary", ...s }, u) => {
    const a = t === "a" ? he : t || "p", c = g(
>>>>>>> Stashed changes
      "fr-badge",
      {
        [`fr-badge--${l}`]: l,
        [`fr-badge--${r}`]: r,
        [`fr-icon-${i}`]: i,
        // Next line is a hack to oblige dsfr to display the icon because otherwise 
        // "content: none" is applied on .fr-badge[class^="fr-icon-"]
        "fr-badge--icon-": i,
        "fr-badge--no-icon": n,
        "fr-badge--sm": o === "sm"
      },
      e
    );
    return /* @__PURE__ */ m(a, { className: c, ref: u, ...s });
  }
<<<<<<< Updated upstream
), fd = ({
=======
), bd = ({
>>>>>>> Stashed changes
  children: t,
  className: e,
  ...n
}) => {
<<<<<<< Updated upstream
  const r = ie(), o = y("fr-badges-group", e);
  return /* @__PURE__ */ m("ul", { className: o, ...n, children: fe(t, dc).map((i, l) => /* @__PURE__ */ m("li", { children: i }, `${r}-${l}`)) });
}, pd = ({
=======
  const r = ne(), o = g("fr-badges-group", e);
  return /* @__PURE__ */ m("ul", { className: o, ...n, children: se(t, dc).map((i, l) => /* @__PURE__ */ m("li", { children: i }, `${r}-${l}`)) });
}, md = ({
>>>>>>> Stashed changes
  buttonLabel: t = "Voir le fil d’Ariane",
  children: e,
  className: n,
  css: r = {},
  ...o
}) => {
<<<<<<< Updated upstream
  const i = ie();
  return /* @__PURE__ */ O("nav", { role: "navigation", "aria-label": o["aria-label"] || "vous êtes ici:", className: y("fr-breadcrumb", n), ...o, children: [
    /* @__PURE__ */ m("button", { className: y("fr-breadcrumb__button", r.button), "aria-expanded": "false", "aria-controls": "breadcrumb-1", children: t || "Voir le fil d’Ariane" }),
    /* @__PURE__ */ m("div", { className: "fr-collapse", id: "breadcrumb-1", children: /* @__PURE__ */ m("ol", { className: y("fr-breadcrumb__list", r.list), children: fe(e, he).filter((l) => $e(l)).map((l, s, { length: u }) => /* @__PURE__ */ m("li", { className: y(r.item), children: _e(l, {
      className: y("fr-breadcrumb__link"),
=======
  const i = ne();
  return /* @__PURE__ */ O("nav", { role: "navigation", "aria-label": o["aria-label"] || "vous êtes ici:", className: g("fr-breadcrumb", n), ...o, children: [
    /* @__PURE__ */ m("button", { className: g("fr-breadcrumb__button", r.button), "aria-expanded": "false", "aria-controls": "breadcrumb-1", children: t || "Voir le fil d’Ariane" }),
    /* @__PURE__ */ m("div", { className: "fr-collapse", id: "breadcrumb-1", children: /* @__PURE__ */ m("ol", { className: g("fr-breadcrumb__list", r.list), children: se(e, he).filter((l) => $e(l)).map((l, s, { length: u }) => /* @__PURE__ */ m("li", { className: g(r.item), children: _e(l, {
      className: g("fr-breadcrumb__link"),
>>>>>>> Stashed changes
      "aria-current": s + 1 === u ? "page" : void 0
    }) }, `${i}-${s}`)) }) })
  ] });
};
const fc = be, ut = fc(
  ({ as: t, className: e, color: n = "blue-france", icon: r, iconPosition: o = "left", size: i = "md", variant: l = "primary", children: s, ...u }, a) => {
<<<<<<< Updated upstream
    const c = t === "a" ? he : t || "button", f = y(
=======
    const c = t === "a" ? he : t || "button", f = g(
>>>>>>> Stashed changes
      "fr-btn",
      {
        [`fr-btn--${i}`]: i !== "md",
        [`dfr-btn--${n}`]: !!n && n !== "blue-france",
        "fr-btn--secondary": l === "secondary",
        "fr-btn--tertiary": l === "tertiary",
        "fr-btn--tertiary-no-outline": l === "text",
        [`fr-icon-${r}`]: !!r,
        [`fr-btn--icon-${o}`]: r && s,
        "fr-btn--icon": r && !s
      },
      e
    );
    return /* @__PURE__ */ m(c, { className: f, ref: a, ...u, children: s });
  }
<<<<<<< Updated upstream
), bd = ({
=======
), vd = ({
>>>>>>> Stashed changes
  align: t = "left",
  children: e,
  className: n,
  isEquisized: r = !1,
  isInlineFrom: o,
  isReversed: i = !1,
  size: l = "md",
  ...s
}) => {
  var d;
<<<<<<< Updated upstream
  const u = ie(), a = (v, g) => v || $e(g) && g.props.icon && g.props.children, c = fe(e, ut).reduce(a, !1), f = (d = fe(e, ut).map((v) => $e(v) && v.props.iconPosition)) == null ? void 0 : d[0], b = y("fr-btns-group", {
=======
  const u = ne(), a = (v, y) => v || $e(y) && y.props.icon && y.props.children, c = se(e, ut).reduce(a, !1), f = (d = se(e, ut).map((v) => $e(v) && v.props.iconPosition)) == null ? void 0 : d[0], p = g("fr-btns-group", {
>>>>>>> Stashed changes
    [`fr-btns-group--${l}`]: l !== "md",
    [`fr-btns-group--${t}`]: t !== "left",
    [`fr-btns-group--icon-${f}`]: c,
    "fr-btns-group--inline": o === "xs",
    [`fr-btns-group--inline-${o}`]: o && o !== "xs",
    "fr-btns-group--inline-reverse": i,
    "fr-btns-group--equisized": r
  }, n);
<<<<<<< Updated upstream
  return /* @__PURE__ */ m("ul", { className: b, ...s, children: fe(e, ut).map((v, g) => /* @__PURE__ */ m("li", { children: v }, `${u}-${g}`)) });
}, md = me(({
=======
  return /* @__PURE__ */ m("ul", { className: p, ...s, children: se(e, ut).map((v, y) => /* @__PURE__ */ m("li", { children: v }, `${u}-${y}`)) });
}, hd = be(({
>>>>>>> Stashed changes
  className: t,
  css: e = {},
  hint: n,
  id: r,
  label: o,
  size: i,
  ...l
}, s) => {
<<<<<<< Updated upstream
  const u = ie(), a = r || u;
  return /* @__PURE__ */ O("div", { className: y("fr-checkbox-group", { "fr-checkbox-group--sm": i === "sm" }, t), children: [
=======
  const u = ne(), a = r || u;
  return /* @__PURE__ */ O("div", { className: g("fr-checkbox-group", { "fr-checkbox-group--sm": i === "sm" }, t), children: [
>>>>>>> Stashed changes
    /* @__PURE__ */ m(
      "input",
      {
        ref: s,
        type: "checkbox",
        id: a,
<<<<<<< Updated upstream
        className: y(e.input),
        ...l
      }
    ),
    /* @__PURE__ */ O("label", { className: y("fr-label", e.label), htmlFor: a, children: [
      o,
      n && /* @__PURE__ */ m("span", { className: y("fr-hint-text", e.labelHint), children: n })
=======
        className: g(e.input),
        ...l
      }
    ),
    /* @__PURE__ */ O("label", { className: g("fr-label", e.label), htmlFor: a, children: [
      o,
      n && /* @__PURE__ */ m("span", { className: g("fr-hint-text", e.labelHint), children: n })
>>>>>>> Stashed changes
    ] })
  ] });
}), jr = ["__TYPE"];
function je(t, e = {}) {
  const { include: n, exclude: r } = e;
  if (n)
    return Object.entries(t).reduce((i, [l, s]) => n.includes(l) ? { ...i, [l]: s } : i, {});
  const o = r ? [...jr, ...r] : jr;
  return Object.entries(t).reduce((i, [l, s]) => o.includes(l) ? i : { ...i, [l]: s }, {});
}
<<<<<<< Updated upstream
const vd = me(({
=======
const gd = be(({
>>>>>>> Stashed changes
  children: t,
  className: e,
  css: n = {},
  hint: r,
  isInline: o = !1,
  legend: i,
  message: l,
  messageType: s,
  required: u,
  ...a
}, c) => {
<<<<<<< Updated upstream
  const f = ie(), { extendRequiredFieldsLabelsWith: b, extendOptionalFieldsLabelsWith: d } = bt();
=======
  const f = ne(), { extendRequiredFieldsLabelsWith: p, extendOptionalFieldsLabelsWith: d } = bt();
>>>>>>> Stashed changes
  return /* @__PURE__ */ O(
    "fieldset",
    {
      ref: c,
<<<<<<< Updated upstream
      className: y("fr-fieldset", { [`fr-fieldset--${s}`]: s }, e),
      ...je(a),
      "aria-labelledby": l && s ? `${f}-message` : void 0,
      children: [
        i && /* @__PURE__ */ O("legend", { className: y("fr-fieldset__legend fr-text--regular", n.legend), children: [
          i,
          u ? b : d,
          r && /* @__PURE__ */ m("span", { className: y("fr-hint-text", n.legendHint), children: r })
        ] }),
        Ot.toArray(t).map((v, g) => /* @__PURE__ */ m("div", { className: y("fr-fieldset__element", { "fr-fieldset__element--inline": o }, n.element), children: v }, `${f}-${g}`)),
        l && s && /* @__PURE__ */ m("div", { id: `${f}-message`, className: y("fr-messages-group", n.messageDiv), children: /* @__PURE__ */ m("p", { className: y(`fr-message fr-message--${s}`, n.messageP), children: l }) })
      ]
    }
  );
}), hd = me(({
=======
      className: g("fr-fieldset", { [`fr-fieldset--${s}`]: s }, e),
      ...je(a),
      "aria-labelledby": l && s ? `${f}-message` : void 0,
      children: [
        i && /* @__PURE__ */ O("legend", { className: g("fr-fieldset__legend fr-text--regular", n.legend), children: [
          i,
          u ? p : d,
          r && /* @__PURE__ */ m("span", { className: g("fr-hint-text", n.legendHint), children: r })
        ] }),
        Ot.toArray(t).map((v, y) => /* @__PURE__ */ m("div", { className: g("fr-fieldset__element", { "fr-fieldset__element--inline": o }, n.element), children: v }, `${f}-${y}`)),
        l && s && /* @__PURE__ */ m("div", { id: `${f}-message`, className: g("fr-messages-group", n.messageDiv), children: /* @__PURE__ */ m("p", { className: g(`fr-message fr-message--${s}`, n.messageP), children: l }) })
      ]
    }
  );
}), $d = be(({
>>>>>>> Stashed changes
  id: t,
  className: e,
  css: n = {},
  errorMessage: r,
  hint: o,
  label: i = "Ajouter des fichiers",
  ...l
}, s) => {
<<<<<<< Updated upstream
  const u = ie(), a = t || u, { extendOptionalFieldsLabelsWith: c, extendRequiredFieldsLabelsWith: f } = bt();
  return /* @__PURE__ */ O("div", { className: y("fr-upload-group", { "fr-input-group--error": r, "fr-input-group--disabled": l.disabled }, e), children: [
    /* @__PURE__ */ O("label", { className: y("fr-label", n.label), htmlFor: a, children: [
=======
  const u = ne(), a = t || u, { extendOptionalFieldsLabelsWith: c, extendRequiredFieldsLabelsWith: f } = bt();
  return /* @__PURE__ */ O("div", { className: g("fr-upload-group", { "fr-input-group--error": r, "fr-input-group--disabled": l.disabled }, e), children: [
    /* @__PURE__ */ O("label", { className: g("fr-label", n.label), htmlFor: a, children: [
>>>>>>> Stashed changes
      i,
      l.required ? f : c,
      o && /* @__PURE__ */ m("span", { className: "fr-hint-text", children: o })
    ] }),
    /* @__PURE__ */ m(
      "input",
      {
        ref: s,
        id: a,
<<<<<<< Updated upstream
        className: y("fr-upload", n.input),
=======
        className: g("fr-upload", n.input),
>>>>>>> Stashed changes
        type: "file",
        "aria-describedby": r ? `${a}-message` : void 0,
        ...l
      }
    ),
<<<<<<< Updated upstream
    r && /* @__PURE__ */ m("p", { id: `${a}-message`, className: y("fr-error-text", n.errorParagraph), children: r })
=======
    r && /* @__PURE__ */ m("p", { id: `${a}-message`, className: g("fr-error-text", n.errorParagraph), children: r })
>>>>>>> Stashed changes
  ] });
}), pc = be, bc = pc(({
  as: t = "div",
  className: e,
  fluid: n = !1,
  fluidFrom: r = "xs",
  ...o
}, i) => {
<<<<<<< Updated upstream
  const l = y({
=======
  const l = g({
>>>>>>> Stashed changes
    "fr-container": !n,
    "fr-container-fluid": n || r === "xs",
    [`fr-container-${r}--fluid`]: !n && r !== "xs"
  }, e);
  return /* @__PURE__ */ m(
    t,
    {
      className: l,
      ref: i,
      ...o
    }
  );
}), Hr = ({
  gutters: t = !1,
  horizontalAlign: e,
  verticalAlign: n,
  className: r,
  ...o
}) => {
<<<<<<< Updated upstream
  const i = y("fr-grid-row", {
=======
  const i = g("fr-grid-row", {
>>>>>>> Stashed changes
    "fr-grid-row--gutters": t,
    [`fr-grid-row--${e}`]: e,
    [`fr-grid-row--${n}`]: n
  }, r);
  return /* @__PURE__ */ m("div", { className: i, ...o });
<<<<<<< Updated upstream
}, gd = ({
=======
}, yd = ({
>>>>>>> Stashed changes
  xs: t,
  sm: e,
  md: n,
  lg: r,
  xl: o,
  offsetXs: i,
  offsetSm: l,
  offsetMd: s,
  offsetLg: u,
  offsetXl: a,
  className: c,
  ...f
}) => {
<<<<<<< Updated upstream
  const b = y("fr-col", {
=======
  const p = g("fr-col", {
>>>>>>> Stashed changes
    [`fr-col-${t}`]: t,
    [`fr-col-sm-${e}`]: e,
    [`fr-col-md-${n}`]: n,
    [`fr-col-lg-${r}`]: r,
    [`fr-col-xl-${o}`]: o,
    [`fr-col-offset-${i}`]: i,
    [`fr-col-offset-sm-${l}`]: l,
    [`fr-col-offset-md-${s}`]: s,
    [`fr-col-offset-lg-${u}`]: u,
    [`fr-col-offset-xl-${a}`]: a
  }, c);
<<<<<<< Updated upstream
  return /* @__PURE__ */ m("div", { className: b, ...f });
}, mc = ({ href: t = "/", name: e, tagline: n, className: r, css: o = {}, ...i }) => /* @__PURE__ */ O("div", { className: y("fr-header__service", r), children: [
  /* @__PURE__ */ m("p", { className: y("fr-header__service-title", o["fr-header__service-title"]), children: /* @__PURE__ */ m(he, { href: t, ...i, children: e }) }),
  n && /* @__PURE__ */ m("p", { className: y("fr-header__service-tagline", o["fr-header__service-tagline"]), children: n })
] }), vc = ({ children: t, className: e, css: n = {}, ...r }) => {
  const o = ie(), i = r.id || o;
  return /* @__PURE__ */ O("div", { className: y("fr-header__tools-links", e), ...r, children: [
    /* @__PURE__ */ m("ul", { className: y("fr-btns-group", n["fr-btns-group"]), children: fe(t, ut).map((l, s) => /* @__PURE__ */ m("li", { children: l }, `${i}-${s}`)) }),
    ps(t, [ut])
  ] });
}, hc = ({ className: t, css: e = {}, ...n }) => /* @__PURE__ */ m("div", { className: y("fr-header__operator", t), children: /* @__PURE__ */ m("img", { className: y("fr-responsive-img", e["fr-responsive-img"]), ...n }) }), gc = me(({
=======
  return /* @__PURE__ */ m("div", { className: p, ...f });
}, mc = ({ href: t = "/", name: e, tagline: n, className: r, css: o = {}, ...i }) => /* @__PURE__ */ O("div", { className: g("fr-header__service", r), children: [
  /* @__PURE__ */ m("p", { className: g("fr-header__service-title", o["fr-header__service-title"]), children: /* @__PURE__ */ m(he, { href: t, ...i, children: e }) }),
  n && /* @__PURE__ */ m("p", { className: g("fr-header__service-tagline", o["fr-header__service-tagline"]), children: n })
] }), vc = ({ children: t, className: e, css: n = {}, ...r }) => {
  const o = ne(), i = r.id || o;
  return /* @__PURE__ */ O("div", { className: g("fr-header__tools-links", e), ...r, children: [
    /* @__PURE__ */ m("ul", { className: g("fr-btns-group", n["fr-btns-group"]), children: se(t, ut).map((l, s) => /* @__PURE__ */ m("li", { children: l }, `${i}-${s}`)) }),
    ps(t, [ut])
  ] });
}, hc = ({ className: t, css: e = {}, ...n }) => /* @__PURE__ */ m("div", { className: g("fr-header__operator", t), children: /* @__PURE__ */ m("img", { className: g("fr-responsive-img", e["fr-responsive-img"]), ...n }) }), gc = be(({
>>>>>>> Stashed changes
  className: t,
  css: e = {},
  buttonLabel: n,
  isLarge: r,
  label: o,
  onSearch: i,
  placeholder: l,
  ...s
}, u) => {
<<<<<<< Updated upstream
  const a = I(null), c = ie(), f = s.id || c, b = (d) => {
=======
  const a = I(null), c = ne(), f = s.id || c, p = (d) => {
>>>>>>> Stashed changes
    var v;
    return d.key === "Enter" && i((v = a.current) == null ? void 0 : v.value);
  };
  return /* @__PURE__ */ O(
    "div",
    {
      role: "search",
<<<<<<< Updated upstream
      className: y("fr-search-bar", { "fr-search-bar--lg": r }, t),
      children: [
        o && /* @__PURE__ */ m("label", { className: y("fr-label", e["fr-label"]), htmlFor: f, children: o }),
=======
      className: g("fr-search-bar", { "fr-search-bar--lg": r }, t),
      children: [
        o && /* @__PURE__ */ m("label", { className: g("fr-label", e["fr-label"]), htmlFor: f, children: o }),
>>>>>>> Stashed changes
        /* @__PURE__ */ m(
          "input",
          {
            ref: (d) => pt(d, [u, a]),
<<<<<<< Updated upstream
            className: y("fr-input", e["fr-input"]),
=======
            className: g("fr-input", e["fr-input"]),
>>>>>>> Stashed changes
            type: "search",
            id: f,
            onKeyDown: b,
            placeholder: l,
            ...je(s)
          }
        ),
        /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            onClick: () => {
              var d;
              return i((d = a.current) == null ? void 0 : d.value);
            },
<<<<<<< Updated upstream
            className: y("fr-btn", { "fr-btn--lg": r }, e["fr-btn"]),
=======
            className: g("fr-btn", { "fr-btn--lg": r }, e["fr-btn"]),
>>>>>>> Stashed changes
            title: n,
            children: n
          }
        )
      ]
    }
  );
}), Yl = ({
  children: t,
  className: e,
  current: n = !1,
  css: r = {},
  title: o,
  ...i
}) => {
  const l = ne(), s = et(t, [Yl, he]);
  return /* @__PURE__ */ O(In, { children: [
    /* @__PURE__ */ m(
      "button",
      {
<<<<<<< Updated upstream
        className: y("fr-nav__btn", e),
=======
        className: g("fr-nav__btn", e),
>>>>>>> Stashed changes
        "aria-expanded": "false",
        "aria-controls": l,
        "aria-current": n || void 0,
        ...i,
        children: o
      }
    ),
<<<<<<< Updated upstream
    /* @__PURE__ */ m("div", { className: y("fr-collapse", "fr-menu", r["fr-menu"]), id: l, children: /* @__PURE__ */ m("ul", { className: y("fr-menu__list", r["fr-menu__list"]), children: s.map((u, a) => /* @__PURE__ */ m("li", { className: "fr-nav__item", children: $e(u) && u.type === he ? _e(u, { className: y("fr-nav__link", u.props.className) }) : u }, `navitem-${l}-${a}`)) }) })
=======
    /* @__PURE__ */ m("div", { className: g("fr-collapse", "fr-menu", r["fr-menu"]), id: l, children: /* @__PURE__ */ m("ul", { className: g("fr-menu__list", r["fr-menu__list"]), children: s.map((u, a) => /* @__PURE__ */ m("li", { className: "fr-nav__item", children: $e(u) && u.type === he ? _e(u, { className: g("fr-nav__link", u.props.className) }) : u }, `navitem-${l}-${a}`)) }) })
>>>>>>> Stashed changes
  ] });
}, $c = ({
  children: t,
  className: e,
  css: n = {},
  ...r
}) => {
<<<<<<< Updated upstream
  const o = ie(), i = r.id || o;
  return /* @__PURE__ */ m("nav", { className: y("fr-nav", e), id: i, role: "navigation", ...r, children: /* @__PURE__ */ m("ul", { className: y("fr-nav__list", n["fr-nav__list"]), children: et(t, [Yl, he]).map((l, s) => $e(l) && /* @__PURE__ */ m("li", { className: y("fr-nav__item", n["fr-nav__item"]), children: l.type === he ? _e(l, { className: y("fr-nav__link", l.props.className) }) : l }, `navitem-${i}-${s}`)) }) });
}, yc = ({ text: t, splitCharacter: e = "|" }) => {
  const r = t.split(e).reduce((o, i, l) => l > 0 ? [...o, /* @__PURE__ */ m("br", {}, `br-${l}`), /* @__PURE__ */ m(xn, { children: i }, l)] : [/* @__PURE__ */ m(xn, { children: i }, l)], []);
  return /* @__PURE__ */ m("div", { className: "fr-header__logo", children: /* @__PURE__ */ m("p", { className: "fr-logo", children: r }) });
}, $d = ({ children: t, className: e, css: n = {}, ...r }) => {
  var g, h, A, w;
  const o = ie(), i = ie(), l = ie(), s = ie(), u = (g = fe(t, mc)) == null ? void 0 : g[0], a = (h = fe(t, vc)) == null ? void 0 : h[0], c = (A = et(t, [gc, ac])) == null ? void 0 : A[0], f = (w = fe(t, $c)) == null ? void 0 : w[0], b = fe(t, yc), d = fe(t, hc), v = $e(c) ? c.props.title : "Rechercher";
  return /* @__PURE__ */ O("header", { role: "banner", className: y("fr-header", e), ...r, children: [
    /* @__PURE__ */ m("div", { className: y("fr-header__body", n["fr-header__body"]), children: /* @__PURE__ */ m("div", { className: "fr-container", children: /* @__PURE__ */ O("div", { className: y("fr-header__body-row", n["fr-header__body-row"]), children: [
      /* @__PURE__ */ O("div", { className: y("fr-header__brand fr-enlarge-link", n["fr-header__brand"]), children: [
        /* @__PURE__ */ O("div", { className: y("fr-header__brand-top", n["fr-header__brand-top"]), children: [
          b && b,
          d && d,
          (a || c) && /* @__PURE__ */ O("div", { className: y("fr-header__navbar", n["fr-header__navbar"]), children: [
            c && /* @__PURE__ */ m("button", { className: y("fr-btn--search fr-btn", n["fr-btn--search"]), "data-fr-opened": "false", "aria-controls": i, id: o, title: v, children: v }),
            a && /* @__PURE__ */ m("button", { className: y("fr-btn--menu fr-btn", n["fr-btn--menu"]), "data-fr-opened": "false", "aria-controls": l, "aria-haspopup": "menu", id: s, title: "Menu", children: "Menu" })
=======
  const o = ne(), i = r.id || o;
  return /* @__PURE__ */ m("nav", { className: g("fr-nav", e), id: i, role: "navigation", ...r, children: /* @__PURE__ */ m("ul", { className: g("fr-nav__list", n["fr-nav__list"]), children: et(t, [Yl, he]).map((l, s) => $e(l) && /* @__PURE__ */ m("li", { className: g("fr-nav__item", n["fr-nav__item"]), children: l.type === he ? _e(l, { className: g("fr-nav__link", l.props.className) }) : l }, `navitem-${i}-${s}`)) }) });
}, yc = ({ text: t, splitCharacter: e = "|" }) => {
  const r = t.split(e).reduce((o, i, l) => l > 0 ? [...o, /* @__PURE__ */ m("br", {}, `br-${l}`), /* @__PURE__ */ m(xn, { children: i }, l)] : [/* @__PURE__ */ m(xn, { children: i }, l)], []);
  return /* @__PURE__ */ m("div", { className: "fr-header__logo", children: /* @__PURE__ */ m("p", { className: "fr-logo", children: r }) });
}, xd = ({ children: t, className: e, css: n = {}, ...r }) => {
  var y, h, _, w;
  const o = ne(), i = ne(), l = ne(), s = ne(), u = (y = se(t, mc)) == null ? void 0 : y[0], a = (h = se(t, vc)) == null ? void 0 : h[0], c = (_ = et(t, [gc, ac])) == null ? void 0 : _[0], f = (w = se(t, $c)) == null ? void 0 : w[0], p = se(t, yc), d = se(t, hc), v = $e(c) ? c.props.title : "Rechercher";
  return /* @__PURE__ */ O("header", { role: "banner", className: g("fr-header", e), ...r, children: [
    /* @__PURE__ */ m("div", { className: g("fr-header__body", n["fr-header__body"]), children: /* @__PURE__ */ m("div", { className: "fr-container", children: /* @__PURE__ */ O("div", { className: g("fr-header__body-row", n["fr-header__body-row"]), children: [
      /* @__PURE__ */ O("div", { className: g("fr-header__brand fr-enlarge-link", n["fr-header__brand"]), children: [
        /* @__PURE__ */ O("div", { className: g("fr-header__brand-top", n["fr-header__brand-top"]), children: [
          p && p,
          d && d,
          (a || c) && /* @__PURE__ */ O("div", { className: g("fr-header__navbar", n["fr-header__navbar"]), children: [
            c && /* @__PURE__ */ m("button", { className: g("fr-btn--search fr-btn", n["fr-btn--search"]), "data-fr-opened": "false", "aria-controls": i, id: o, title: v, children: v }),
            a && /* @__PURE__ */ m("button", { className: g("fr-btn--menu fr-btn", n["fr-btn--menu"]), "data-fr-opened": "false", "aria-controls": l, "aria-haspopup": "menu", id: s, title: "Menu", children: "Menu" })
>>>>>>> Stashed changes
          ] })
        ] }),
        u && u
      ] }),
<<<<<<< Updated upstream
      /* @__PURE__ */ O("div", { className: y("fr-header__tools", n["fr-header__tools"]), children: [
        a,
        c && /* @__PURE__ */ m("div", { className: y("fr-header__search fr-modal", n["fr-header__search"]), id: i, children: /* @__PURE__ */ O("div", { className: "fr-container fr-container-lg--fluid", children: [
=======
      /* @__PURE__ */ O("div", { className: g("fr-header__tools", n["fr-header__tools"]), children: [
        a,
        c && /* @__PURE__ */ m("div", { className: g("fr-header__search fr-modal", n["fr-header__search"]), id: i, children: /* @__PURE__ */ O("div", { className: "fr-container fr-container-lg--fluid", children: [
>>>>>>> Stashed changes
          /* @__PURE__ */ m("button", { className: "fr-btn--close fr-btn", "aria-controls": i, title: "Fermer", children: "Fermer" }),
          c
        ] }) })
      ] })
    ] }) }) }),
<<<<<<< Updated upstream
    /* @__PURE__ */ m("div", { className: y("fr-header__menu fr-modal", n["fr-header__menu"]), id: l, "aria-labelledby": s, children: /* @__PURE__ */ O("div", { className: "fr-container", children: [
      /* @__PURE__ */ m("button", { className: "fr-btn--close fr-btn", "aria-controls": l, title: "Fermer", children: "Fermer" }),
      /* @__PURE__ */ m("div", { className: y("fr-header__menu-links", n["fr-header__menu-links"]) }),
      f && f
    ] }) })
  ] });
}, yd = me(
  ({
    className: t,
    css: e = {},
    disableAutoValidation: n = !1,
    hint: r,
    icon: o,
    id: i,
    label: l,
    message: s,
    messageType: u,
    onBlur: a,
    onChange: c,
    disabled: f,
    required: b,
    isOptional: d,
    ...v
  }, g) => {
    const { extendRequiredFieldsLabelsWith: h, extendOptionalFieldsLabelsWith: A } = bt(), [w, S] = Z(""), K = i || ie(), x = I(null), M = s !== void 0 || u !== void 0, R = y(
      "fr-input",
      {
        "fr-input--error": M ? u === "error" : w === "error",
        "fr-input--valid": M ? u === "valid" : w === "valid"
      },
      e["fr-input"]
    ), p = y(
      "fr-input-group",
      {
        "fr-input-group--error": M ? u === "error" : w === "error",
        "fr-input-group--valid": M ? u === "valid" : w === "valid",
        "fr-input-group--disabled": f
      },
      t
    ), _ = (C) => {
      const B = x.current;
      !n && !M && B && S(B.checkValidity() ? "valid" : "error"), a && a(C);
    }, P = (C) => {
      const B = x.current;
      !n && !M && B && w && S(B.checkValidity() ? "valid" : "error"), c && c(C);
    };
    return /* @__PURE__ */ O("div", { className: p, children: [
      /* @__PURE__ */ O("label", { className: y("fr-label", e["fr-label"]), htmlFor: K, children: [
        l,
        b && !d && h,
        d && !b && A,
        r && /* @__PURE__ */ m("span", { className: y("fr-hint-text", e["fr-hint-text"]), children: r })
      ] }),
      /* @__PURE__ */ m(
        "div",
        {
          className: y(
            "fr-input-wrap",
            { [`fr-icon-${o}`]: o },
            e["fr-input-wrap"]
          ),
          children: /* @__PURE__ */ m(
            "input",
            {
              id: K,
              className: R,
              onBlur: _,
              onChange: P,
              ref: (C) => pt(C, [g, x]),
              "aria-describedby": u ? `${K}-message` : void 0,
              ...v
            }
          )
        }
      ),
      u && /* @__PURE__ */ m("p", { className: `fr-${u}-text`, id: `${K}-message`, children: s })
    ] });
  }
), xd = me(
  ({
    className: t,
    css: e = {},
    disableAutoValidation: n = !1,
    hint: r,
    icon: o,
    id: i,
    label: l,
    message: s,
    messageType: u,
    onBlur: a,
    onChange: c,
    disabled: f,
    required: b,
    isOptional: d,
    ...v
  }, g) => {
    const { extendRequiredFieldsLabelsWith: h, extendOptionalFieldsLabelsWith: A } = bt(), [w, S] = Z(""), K = i || ie(), x = I(null), M = s !== void 0 || u !== void 0, R = y(
      "fr-input",
      {
        "fr-input--error": M ? u === "error" : w === "error",
        "fr-input--valid": M ? u === "valid" : w === "valid"
      },
      e["fr-input"]
    ), p = y(
      "fr-input-group",
      {
        "fr-input-group--error": M ? u === "error" : w === "error",
        "fr-input-group--valid": M ? u === "valid" : w === "valid",
        "fr-input-group--disabled": f
      },
      t
    ), _ = (C) => {
      const B = x.current;
      !n && !M && B && S(B.checkValidity() ? "valid" : "error"), a && a(C);
    }, P = (C) => {
      const B = x.current;
      !n && !M && B && w && S(B.checkValidity() ? "valid" : "error"), c && c(C);
    };
    return /* @__PURE__ */ O("div", { className: p, children: [
      /* @__PURE__ */ O("label", { className: y("fr-label", e["fr-label"]), htmlFor: K, children: [
        l,
        b && !d && h,
        d && !b && A,
        r && /* @__PURE__ */ m("span", { className: y("fr-hint-text", e["fr-hint-text"]), children: r })
      ] }),
      /* @__PURE__ */ m(
        "div",
        {
          className: y(
            "fr-input-wrap",
            { [`fr-icon-${o}`]: o },
            e["fr-input-wrap"]
          ),
          children: /* @__PURE__ */ m(
            "textarea",
            {
              id: K,
              className: R,
              onBlur: _,
              onChange: P,
              ref: (C) => pt(C, [g, x]),
              "aria-describedby": u ? `${K}-message` : void 0,
              ...v
            }
          )
        }
      ),
      u && /* @__PURE__ */ m("p", { className: `fr-${u}-text`, id: `${K}-message`, children: s })
    ] });
  }
);
function Cd(t) {
  const e = co(t);
  return /* @__PURE__ */ m(Qn, { ...t, state: e });
}
const Ed = Vt, Pd = lo, xc = "_focused_og068_1", Cc = "_listbox_og068_10", Ec = "_content_og068_90", Pc = "_description_og068_99", wc = "_uppercase_og068_127", Sc = "_divider_og068_131", Te = {
=======
    /* @__PURE__ */ m("div", { className: g("fr-header__menu fr-modal", n["fr-header__menu"]), id: l, "aria-labelledby": s, children: /* @__PURE__ */ O("div", { className: "fr-container", children: [
      /* @__PURE__ */ m("button", { className: "fr-btn--close fr-btn", "aria-controls": l, title: "Fermer", children: "Fermer" }),
      /* @__PURE__ */ m("div", { className: g("fr-header__menu-links", n["fr-header__menu-links"]) }),
      f && f
    ] }) })
  ] });
}, Cd = be(({
  className: t,
  css: e = {},
  disableAutoValidation: n = !1,
  hint: r,
  icon: o,
  id: i,
  label: l,
  message: s,
  messageType: u,
  onBlur: a,
  onChange: c,
  disabled: f,
  required: p,
  ...d
}, v) => {
  var P;
  const { extendRequiredFieldsLabelsWith: y, extendOptionalFieldsLabelsWith: h } = bt(), [_, w] = J(""), S = i || ne(), K = I(null), $ = s !== void 0 || u !== void 0, N = g("fr-input", {
    "fr-input--error": $ ? u === "error" : _ === "error",
    "fr-input--valid": $ ? u === "valid" : _ === "valid"
  }, e["fr-input"]), R = g("fr-input-group", {
    "fr-input-group--error": $ ? u === "error" : _ === "error",
    "fr-input-group--valid": $ ? u === "valid" : _ === "valid",
    "fr-input-group--disabled": f
  }, t), b = (B) => {
    const C = K.current;
    !n && !$ && C && w(C.checkValidity() ? "valid" : "error"), a && a(B);
  }, A = (B) => {
    const C = K.current;
    !n && !$ && C && _ && w(C.checkValidity() ? "valid" : "error"), c && c(B);
  }, E = $ || n ? u && /* @__PURE__ */ m("p", { className: `fr-${u || "error"}-text`, id: `${S}-message`, children: s }) : _ === "error" && !n && /* @__PURE__ */ m("p", { className: `fr-${_ || "error"}-text`, id: `${S}-message`, children: (P = K.current) == null ? void 0 : P.validationMessage });
  return /* @__PURE__ */ O("div", { className: R, children: [
    /* @__PURE__ */ O("label", { className: g("fr-label", e["fr-label"]), htmlFor: S, children: [
      l,
      p ? y : h,
      r && /* @__PURE__ */ m("span", { className: g("fr-hint-text", e["fr-hint-text"]), children: r })
    ] }),
    /* @__PURE__ */ m("div", { className: g("fr-input-wrap", { [`fr-icon-${o}`]: o }, e["fr-input-wrap"]), children: /* @__PURE__ */ m(
      "input",
      {
        id: S,
        className: N,
        onBlur: b,
        onChange: A,
        ref: (B) => pt(B, [v, K]),
        "aria-describedby": E ? `${S}-message` : void 0,
        ...d
      }
    ) }),
    E && E
  ] });
}), Ed = be(({
  className: t,
  css: e = {},
  disableAutoValidation: n = !1,
  hint: r,
  icon: o,
  id: i,
  label: l,
  message: s,
  messageType: u,
  onBlur: a,
  onChange: c,
  disabled: f,
  required: p,
  ...d
}, v) => {
  var P;
  const { extendRequiredFieldsLabelsWith: y, extendOptionalFieldsLabelsWith: h } = bt(), [_, w] = J(""), S = i || ne(), K = I(null), $ = s !== void 0 || u !== void 0, N = g("fr-input", {
    "fr-input--error": $ ? u === "error" : _ === "error",
    "fr-input--valid": $ ? u === "valid" : _ === "valid"
  }, e["fr-input"]), R = g("fr-input-group", {
    "fr-input-group--error": $ ? u === "error" : _ === "error",
    "fr-input-group--valid": $ ? u === "valid" : _ === "valid",
    "fr-input-group--disabled": f
  }, t), b = (B) => {
    const C = K.current;
    !n && !$ && C && w(C.checkValidity() ? "valid" : "error"), a && a(B);
  }, A = (B) => {
    const C = K.current;
    !n && !$ && C && _ && w(C.checkValidity() ? "valid" : "error"), c && c(B);
  }, E = $ || n ? u && /* @__PURE__ */ m("p", { className: `fr-${u || "error"}-text`, id: `${S}-message`, children: s }) : _ === "error" && !n && /* @__PURE__ */ m("p", { className: `fr-${_ || "error"}-text`, id: `${S}-message`, children: (P = K.current) == null ? void 0 : P.validationMessage });
  return /* @__PURE__ */ O("div", { className: R, children: [
    /* @__PURE__ */ O("label", { className: g("fr-label", e["fr-label"]), htmlFor: S, children: [
      l,
      p ? y : h,
      r && /* @__PURE__ */ m("span", { className: g("fr-hint-text", e["fr-hint-text"]), children: r })
    ] }),
    /* @__PURE__ */ m("div", { className: g("fr-input-wrap", { [`fr-icon-${o}`]: o }, e["fr-input-wrap"]), children: /* @__PURE__ */ m(
      "textarea",
      {
        id: S,
        className: N,
        onBlur: b,
        onChange: A,
        ref: (B) => pt(B, [v, K]),
        "aria-describedby": E ? `${S}-message` : void 0,
        ...d
      }
    ) }),
    E && E
  ] });
});
function Pd(t) {
  const e = co(t);
  return /* @__PURE__ */ m(Qn, { ...t, state: e });
}
const wd = Vt, Sd = lo, xc = "_focused_og068_1", Cc = "_listbox_og068_10", Ec = "_content_og068_90", Pc = "_description_og068_99", wc = "_uppercase_og068_127", Sc = "_divider_og068_131", Te = {
>>>>>>> Stashed changes
  focused: xc,
  listbox: Cc,
  "listbox-top": "_listbox-top_og068_36",
  "listbox-bottom": "_listbox-bottom_og068_40",
  "listbox-content": "_listbox-content_og068_44",
  "listbox-section-list": "_listbox-section-list_og068_52",
  "listbox-section": "_listbox-section_og068_52",
  "listbox-item": "_listbox-item_og068_62",
  content: Ec,
  description: Pc,
  uppercase: wc,
  divider: Sc,
  "listbox-item--green-tilleul-verveine": "_listbox-item--green-tilleul-verveine_og068_142",
  "listbox--green-tilleul-verveine": "_listbox--green-tilleul-verveine_og068_150",
  "listbox-item--green-bourgeon": "_listbox-item--green-bourgeon_og068_158",
  "listbox--green-bourgeon": "_listbox--green-bourgeon_og068_166",
  "listbox-item--green-emeraude": "_listbox-item--green-emeraude_og068_174",
  "listbox--green-emeraude": "_listbox--green-emeraude_og068_182",
  "listbox-item--green-menthe": "_listbox-item--green-menthe_og068_190",
  "listbox--green-menthe": "_listbox--green-menthe_og068_198",
  "listbox-item--green-archipel": "_listbox-item--green-archipel_og068_206",
  "listbox--green-archipel": "_listbox--green-archipel_og068_214",
  "listbox-item--blue-ecume": "_listbox-item--blue-ecume_og068_222",
  "listbox--blue-ecume": "_listbox--blue-ecume_og068_230",
  "listbox-item--blue-cumulus": "_listbox-item--blue-cumulus_og068_238",
  "listbox--blue-cumulus": "_listbox--blue-cumulus_og068_246",
  "listbox-item--purple-glycine": "_listbox-item--purple-glycine_og068_254",
  "listbox--purple-glycine": "_listbox--purple-glycine_og068_262",
  "listbox-item--pink-macaron": "_listbox-item--pink-macaron_og068_270",
  "listbox--pink-macaron": "_listbox--pink-macaron_og068_278",
  "listbox-item--pink-tuile": "_listbox-item--pink-tuile_og068_286",
  "listbox--pink-tuile": "_listbox--pink-tuile_og068_294",
  "listbox-item--yellow-tournesol": "_listbox-item--yellow-tournesol_og068_302",
  "listbox--yellow-tournesol": "_listbox--yellow-tournesol_og068_310",
  "listbox-item--yellow-moutarde": "_listbox-item--yellow-moutarde_og068_318",
  "listbox--yellow-moutarde": "_listbox--yellow-moutarde_og068_326",
  "listbox-item--orange-terre-battue": "_listbox-item--orange-terre-battue_og068_334",
  "listbox--orange-terre-battue": "_listbox--orange-terre-battue_og068_342",
  "listbox-item--brown-cafe-creme": "_listbox-item--brown-cafe-creme_og068_350",
  "listbox--brown-cafe-creme": "_listbox--brown-cafe-creme_og068_358",
  "listbox-item--brown-caramel": "_listbox-item--brown-caramel_og068_366",
  "listbox--brown-caramel": "_listbox--brown-caramel_og068_374",
  "listbox-item--brown-opera": "_listbox-item--brown-opera_og068_382",
  "listbox--brown-opera": "_listbox--brown-opera_og068_390",
  "listbox-item--beige-gris-galet": "_listbox-item--beige-gris-galet_og068_398",
  "listbox--beige-gris-galet": "_listbox--beige-gris-galet_og068_406",
  "listbox-item--success": "_listbox-item--success_og068_414",
  "listbox--success": "_listbox--success_og068_422",
  "listbox-item--warning": "_listbox-item--warning_og068_430",
  "listbox--warning": "_listbox--warning_og068_438",
  "listbox-item--info": "_listbox-item--info_og068_446",
  "listbox--info": "_listbox--info_og068_454",
  "listbox-item--error": "_listbox-item--error_og068_462",
  "listbox--error": "_listbox--error_og068_470"
};
function Xl({ item: t, state: e }) {
  const n = I(null), { menuItemProps: r, labelProps: o, descriptionProps: i, isFocused: l } = ja({ key: t.key }, e, n), { description: s, startContent: u, endContent: a, color: c, showDivider: f, href: b, className: d } = t.props || {};
  return /* @__PURE__ */ O(
    b ? "a" : "li",
    {
      ...r,
      ref: n,
<<<<<<< Updated upstream
      href: b,
      className: y(
=======
      href: p,
      className: g(
>>>>>>> Stashed changes
        Te["listbox-item"],
        d,
        {
          [Te[`listbox-item--${c}`]]: c,
          [Te.divider]: f,
          "fr-enlarge-link": b,
          [Te.focused]: l
        }
      ),
      children: [
        u && u,
        /* @__PURE__ */ O("span", { className: Te.content, children: [
          /* @__PURE__ */ m("span", { ...o, children: t.rendered }),
          s && /* @__PURE__ */ m("span", { ...i, className: Te.description, children: s })
        ] }),
        a && a
      ]
    }
  );
}
function Tc({ section: t, state: e }) {
  const { itemProps: n, headingProps: r, groupProps: o } = Ha({
    heading: t.rendered,
    "aria-label": t["aria-label"]
  }), { showDivider: i, className: l, css: s = {} } = t.props || {}, u = [...t.childNodes].find((a) => a.props.href) ? "div" : "ul";
  return /* @__PURE__ */ O(
    "li",
    {
      ...n,
<<<<<<< Updated upstream
      className: y(
=======
      className: g(
>>>>>>> Stashed changes
        Te["listbox-section"],
        l,
        s.base,
        { [Te.divider]: i }
      ),
      children: [
        t.rendered && /* @__PURE__ */ m(
          "span",
          {
            ...r,
<<<<<<< Updated upstream
            className: y(
=======
            className: g(
>>>>>>> Stashed changes
              "fr-text-mention--grey fr-text--sm fr-my-3v fr-px-1w",
              s.title
            ),
            children: t.rendered
          }
        ),
<<<<<<< Updated upstream
        /* @__PURE__ */ m(u, { ...o, className: y(Te["listbox-section-list"], s.list), children: [...t.childNodes].map((a) => /* @__PURE__ */ m(
=======
        /* @__PURE__ */ m(u, { ...o, className: g(Te["listbox-section-list"], s.list), children: [...t.childNodes].map((a) => /* @__PURE__ */ m(
>>>>>>> Stashed changes
          Xl,
          {
            item: a,
            state: e
          },
          a.key
        )) })
      ]
    }
  );
}
function _c(t) {
  const e = Is(t), n = I(null), { menuProps: r } = za(t, e, n);
<<<<<<< Updated upstream
  return /* @__PURE__ */ m("ul", { ...r, ref: n, className: y(Te.listbox), style: { minWidth: "200px" }, children: [...e.collection].map((o) => o.type === "section" ? /* @__PURE__ */ m(Tc, { section: o, state: e }, o.key) : /* @__PURE__ */ m(Xl, { item: o, state: e }, o.key)) });
=======
  return /* @__PURE__ */ m("ul", { ...r, ref: n, className: g(Te.listbox), style: { minWidth: "200px" }, children: [...e.collection].map((o) => o.type === "section" ? /* @__PURE__ */ m(Tc, { section: o, state: e }, o.key) : /* @__PURE__ */ m(Xl, { item: o, state: e }, o.key)) });
>>>>>>> Stashed changes
}
const Ac = be(
  ({ className: t, color: e = "blue-france", icon: n, iconPosition: r = "left", size: o = "md", variant: i = "primary", children: l, ...s }, u) => {
<<<<<<< Updated upstream
    const a = y(
=======
    const a = g(
>>>>>>> Stashed changes
      "fr-btn",
      {
        [`fr-btn--${o}`]: o !== "md",
        [`dfr-btn--${e}`]: !!e && e !== "blue-france",
        "fr-btn--secondary": i === "secondary",
        "fr-btn--tertiary": i === "tertiary",
        "fr-btn--tertiary-no-outline": i === "text",
        [`fr-icon-${n}`]: !!n,
        [`fr-btn--icon-${r}`]: n && l,
        "fr-btn--icon": n && !l
      },
      t
    );
    return /* @__PURE__ */ m("button", { className: a, ref: u, ...s, children: l });
  }
);
<<<<<<< Updated upstream
function wd(t) {
  const { className: e, color: n, icon: r, iconPosition: o, size: i, variant: l, placement: s = "start", ...u } = t, a = Ms(u), c = I(null), { menuTriggerProps: f, menuProps: b } = Jn({}, a, c), { isFocusVisible: d, focusProps: v } = qn(), { buttonProps: g } = ko({ ...se(f, v) }, c);
=======
function Td(t) {
  const { className: e, color: n, icon: r, iconPosition: o, size: i, variant: l, placement: s = "start", ...u } = t, a = Ms(u), c = I(null), { menuTriggerProps: f, menuProps: p } = Jn({}, a, c), { isFocusVisible: d, focusProps: v } = qn(), { buttonProps: y } = No({ ...ue(f, v) }, c);
>>>>>>> Stashed changes
  return /* @__PURE__ */ O(In, { children: [
    /* @__PURE__ */ m(
      Ac,
      {
<<<<<<< Updated upstream
        ...g,
=======
        ...y,
>>>>>>> Stashed changes
        ref: c,
        className: e,
        color: n,
        icon: r,
        iconPosition: o,
        size: i,
        variant: l,
        "data-focus-visible": d,
        children: t.label
      }
    ),
    a.isOpen && /* @__PURE__ */ m(er, { state: a, triggerRef: c, placement: `bottom ${s}`, children: /* @__PURE__ */ m(
      _c,
      {
        ...u,
        ...b
      }
    ) })
  ] });
}
<<<<<<< Updated upstream
const Sd = Vt, Td = lo, Zl = me(({
=======
const _d = Vt, Ad = lo, Zl = be(({
>>>>>>> Stashed changes
  children: t,
  className: e,
  icon: n,
  id: r,
  ...o
}, i) => {
<<<<<<< Updated upstream
  const l = y("fr-modal__title", e);
=======
  const l = g("fr-modal__title", e);
>>>>>>> Stashed changes
  return /* @__PURE__ */ O(
    "h1",
    {
      ref: i,
      className: l,
      id: `${r}-title`,
      ...je(o),
      children: [
        n && /* @__PURE__ */ m("span", { className: `fr-icon-${n} fr-icon--lg` }),
        t
      ]
    }
  );
}), Bt = be(({
  className: t,
  controls: e,
  children: n = "Fermer",
  ...r
}, o) => /* @__PURE__ */ m(
  "button",
  {
    ref: o,
    id: `${e}-close`,
    "aria-controls": e || void 0,
<<<<<<< Updated upstream
    className: y("fr-btn--close fr-btn", t),
=======
    className: g("fr-btn--close fr-btn", t),
>>>>>>> Stashed changes
    type: "button",
    ...r,
    children: n
  }
)), Ur = 'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])', Kc = 9;
function Dc(t, e, n) {
  function r(o) {
    var a;
    const i = [
      ...(a = t.current) == null ? void 0 : a.querySelectorAll(Ur)
    ].filter((c) => !c.hasAttribute("disabled")), l = i[0], s = i[i.length - 1];
    (o.key === "Tab" || o.keyCode === Kc) && (o.shiftKey ? document.activeElement === l && (s.focus(), o.preventDefault()) : (document.activeElement === s || document.activeElement === n) && (l.focus(), o.preventDefault()));
  }
  return W(() => {
    var o;
    return e ? ([
      ...(o = t.current) == null ? void 0 : o.querySelectorAll(Ur)
    ].filter((i) => !i.hasAttribute("disabled")), document.addEventListener("keydown", r)) : n == null || n.focus(), () => document.removeEventListener("keydown", r);
  }, [e, t, n]), t;
}
const Fc = ({
  children: t,
  hide: e,
  size: n = "md",
  id: r,
  className: o,
  isOpen: i,
  canClose: l,
  ...s
}) => {
<<<<<<< Updated upstream
  var M, R, p;
  const [u, a] = Z(null), f = { sm: 4, lg: 8, md: 6, xl: 10 }[n], b = y("fr-modal", o), d = I(null), v = (M = fe(t, Zl)) == null ? void 0 : M[0], g = fe(t, Jl), h = (R = fe(t, Ql)) == null ? void 0 : R[0], A = (p = fe(t, Bt)) == null ? void 0 : p[0], w = r || ie();
=======
  var N, R, b;
  const [u, a] = J(null), f = { sm: 4, lg: 8, md: 6, xl: 10 }[n], p = g("fr-modal", o), d = I(null), v = (N = se(t, Zl)) == null ? void 0 : N[0], y = se(t, Jl), h = (R = se(t, Ql)) == null ? void 0 : R[0], _ = (b = se(t, Bt)) == null ? void 0 : b[0], w = r || ne();
>>>>>>> Stashed changes
  W(() => {
    var P, C;
    d.current && (i && (a(document.activeElement), (P = document == null ? void 0 : document.getElementById(w)) == null || P.classList.add("fr-modal--opened")), i || (C = document == null ? void 0 : document.getElementById(w)) == null || C.classList.remove("fr-modal--opened"));
  }, [i]), W(() => {
    const _ = d.current;
    if (_)
      return _.addEventListener("dsfr.conceal", (P) => P.stopPropagation()), _.addEventListener("dsfr.disclose", (P) => P.stopPropagation()), () => {
        _.removeEventListener("dsfr.conceal", (P) => P.stopPropagation()), _.removeEventListener("dsfr.disclose", (P) => P.stopPropagation());
      };
  }, []);
  const S = (_) => {
    l && (!d.current || d.current === _.target || _.target.className.indexOf("closing-overlay") > -1) && e();
  };
  Dc(d, i, u);
<<<<<<< Updated upstream
  const K = A ? _e(A, { onClick: () => e(), controls: w }) : l ? /* @__PURE__ */ m(Bt, { onClick: () => e(), controls: w }) : null, x = /* @__PURE__ */ m(
=======
  const K = _ ? _e(_, { onClick: () => e(), controls: w }) : l ? /* @__PURE__ */ m(Bt, { onClick: () => e(), controls: w }) : null, $ = /* @__PURE__ */ m(
>>>>>>> Stashed changes
    "dialog",
    {
      "aria-labelledby": `${w}-title`,
      "aria-modal": "true",
      className: b,
      ref: d,
      id: w,
      role: "dialog",
      onClick: (_) => S(_),
      ...s,
      children: /* @__PURE__ */ m("div", { className: "fr-container fr-container--fluid fr-container-md", children: /* @__PURE__ */ m("div", { className: "fr-grid-row fr-grid-row--center closing-overlay", children: /* @__PURE__ */ m("div", { className: `fr-col-12 fr-col-md-${f}`, children: /* @__PURE__ */ O("div", { className: "fr-modal__body", children: [
        /* @__PURE__ */ m("div", { className: "fr-modal__header", children: K }),
        /* @__PURE__ */ O("div", { className: "fr-modal__content", children: [
          v && _e(v, { id: w }),
<<<<<<< Updated upstream
          g ?? null
=======
          y ?? null
>>>>>>> Stashed changes
        ] }),
        h
      ] }) }) }) })
    }
  );
  return Bn.createPortal(
<<<<<<< Updated upstream
    x,
=======
    $,
>>>>>>> Stashed changes
    document.body
  );
}, Lc = ({
  children: t,
  size: e = "md",
  id: n,
  className: r,
  ...o
}) => {
<<<<<<< Updated upstream
  var v, g, h;
  const l = { sm: 4, lg: 8, md: 6, xl: 10 }[e], s = y("fr-modal", r), u = (v = fe(t, Zl)) == null ? void 0 : v[0], a = fe(t, Jl), c = (g = fe(t, Ql)) == null ? void 0 : g[0], f = (h = fe(t, Bt)) == null ? void 0 : h[0], b = f ? _e(f, { controls: n }) : /* @__PURE__ */ m(Bt, { controls: n }), d = /* @__PURE__ */ m(
=======
  var v, y, h;
  const l = { sm: 4, lg: 8, md: 6, xl: 10 }[e], s = g("fr-modal", r), u = (v = se(t, Zl)) == null ? void 0 : v[0], a = se(t, Jl), c = (y = se(t, Ql)) == null ? void 0 : y[0], f = (h = se(t, Bt)) == null ? void 0 : h[0], p = f ? _e(f, { controls: n }) : /* @__PURE__ */ m(Bt, { controls: n }), d = /* @__PURE__ */ m(
>>>>>>> Stashed changes
    "dialog",
    {
      "aria-labelledby": `${n}-title`,
      className: s,
      id: n,
      role: "dialog",
      ...o,
      children: /* @__PURE__ */ m("div", { className: "fr-container fr-container--fluid fr-container-md", children: /* @__PURE__ */ m("div", { className: "fr-grid-row fr-grid-row--center closing-overlay", children: /* @__PURE__ */ m("div", { className: `fr-col-12 fr-col-md-${l}`, children: /* @__PURE__ */ O("div", { className: "fr-modal__body", children: [
        /* @__PURE__ */ m("div", { className: "fr-modal__header", children: b }),
        /* @__PURE__ */ O("div", { className: "fr-modal__content", children: [
          u && _e(u, { id: n }),
          a ?? null
        ] }),
        c
      ] }) }) }) })
    }
  );
  return Bn.createPortal(
    d,
    document.body
  );
<<<<<<< Updated upstream
}, _d = ({
=======
}, Kd = ({
>>>>>>> Stashed changes
  id: t,
  size: e = "md",
  hide: n,
  isOpen: r = !1,
  className: o,
  canClose: i = !0,
  ...l
}) => t ? /* @__PURE__ */ m(Lc, { id: t, size: e, className: o, ...l }) : /* @__PURE__ */ m(
  Fc,
  {
    id: t,
    isOpen: r,
    className: o,
    size: e,
    hide: n,
    canClose: i,
    ...l
  }
), Jl = be(({ ...t }, e) => /* @__PURE__ */ m(
  "div",
  {
    ref: e,
    ...t
  }
)), Ql = be(({
  className: t,
  ...e
}, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
<<<<<<< Updated upstream
    className: y("fr-modal__footer", t),
    ...e
  }
));
const Ad = ({
=======
    className: g("fr-modal__footer", t),
    ...e
  }
));
const Dd = ({
>>>>>>> Stashed changes
  children: t,
  closeMode: e = "disallow",
  type: n = "info",
  className: r,
  css: o = {},
  onClose: i,
  ...l
}) => {
  const s = I(null), u = (c) => {
    var f;
    c.preventDefault(), (f = s.current) == null || f.remove(), i && i(c);
<<<<<<< Updated upstream
  }, a = y("fr-notice", {
    "fr-notice--info": n === "info",
    [`dsfr-plus-notice--${n}`]: n !== "info"
  }, r);
  return /* @__PURE__ */ m("div", { ref: s, className: a, ...l, children: /* @__PURE__ */ m("div", { className: y("fr-container", o["fr-container"]), children: /* @__PURE__ */ O("div", { className: y("fr-notice__body", o["fr-notice__body"]), children: [
    /* @__PURE__ */ m("p", { className: y("fr-notice__title", o["fr-notice__title"]), children: t }),
=======
  }, a = g("fr-notice", {
    "fr-notice--info": n === "info",
    [`dsfr-plus-notice--${n}`]: n !== "info"
  }, r);
  return /* @__PURE__ */ m("div", { ref: s, className: a, ...l, children: /* @__PURE__ */ m("div", { className: g("fr-container", o["fr-container"]), children: /* @__PURE__ */ O("div", { className: g("fr-notice__body", o["fr-notice__body"]), children: [
    /* @__PURE__ */ m("p", { className: g("fr-notice__title", o["fr-notice__title"]), children: t }),
>>>>>>> Stashed changes
    e !== "disallow" && /* @__PURE__ */ m(
      "button",
      {
        onClick: e === "uncontrolled" ? u : i,
<<<<<<< Updated upstream
        className: y("fr-btn--close", "fr-btn", o["fr-btn--close"]),
=======
        className: g("fr-btn--close", "fr-btn", o["fr-btn--close"]),
>>>>>>> Stashed changes
        children: "Masquer le message"
      }
    )
  ] }) }) });
<<<<<<< Updated upstream
}, Kd = me(({
  checked: t,
  className: e,
  css: n = {},
  hint: r,
  id: o,
  imageComponent: i,
  label: l,
  ...s
}, u) => {
  const a = o || ie();
  return /* @__PURE__ */ O("div", { className: y("fr-radio-group", { "fr-radio-rich": i }, e), children: [
=======
}, Mc = be(({
  className: t,
  css: e = {},
  hint: n,
  id: r,
  imageComponent: o,
  label: i,
  name: l,
  ...s
}, u) => {
  const a = r || ne();
  return /* @__PURE__ */ O("div", { className: g("fr-radio-group", { "fr-radio-rich": o }, t), children: [
>>>>>>> Stashed changes
    /* @__PURE__ */ m(
      "input",
      {
        checked: t,
        id: a,
        ref: u,
        type: "radio",
        ...s
      }
    ),
    /* @__PURE__ */ O(
      "label",
      {
<<<<<<< Updated upstream
        className: y("fr-label"),
        htmlFor: a,
        children: [
          l,
          r && /* @__PURE__ */ m("p", { className: y("fr-hint-text"), children: r })
        ]
      }
    ),
    i && /* @__PURE__ */ m("div", { className: y("fr-radio-rich__img"), children: i })
  ] });
}), Mc = {
  "fr-select-btn": "_fr-select-btn_m2sgv_1"
};
function Dd(t) {
  const { buttonLabel: e, ...n } = t, r = ks(n), o = I(null), {
=======
        className: g("fr-label"),
        htmlFor: a,
        children: [
          i,
          n && /* @__PURE__ */ m("p", { className: g("fr-hint-text"), children: n })
        ]
      }
    ),
    o && /* @__PURE__ */ m("div", { className: g("fr-radio-rich__img"), children: o })
  ] });
}), Fd = ({
  children: t,
  className: e,
  hint: n,
  isInline: r,
  label: o,
  message: i,
  name: l,
  onChangeValue: s,
  value: u,
  ...a
}) => {
  const c = ne(), f = g("fr-fieldset", e);
  return /* @__PURE__ */ O(
    "fieldset",
    {
      "aria-labelledby": "radio-hint-legend radio-hint-messages",
      className: f,
      id: c,
      ...a,
      children: [
        o && /* @__PURE__ */ O(
          "legend",
          {
            className: "fr-fieldset__legend--regular fr-fieldset__legend",
            id: "radio-hint-legend",
            children: [
              o,
              n && /* @__PURE__ */ m("span", { className: "fr-hint-text", children: n })
            ]
          }
        ),
        se(t, Mc).map((p) => {
          if (X.isValidElement(p))
            return /* @__PURE__ */ m("div", { className: g("fr-fieldset__element", { "fr-fieldset__element--inline": r }), children: X.cloneElement(p, {
              name: l,
              onChange: () => {
                s == null || s(p.props.value), p.props.onChange();
              }
            }) });
        }),
        i && /* @__PURE__ */ m(
          "div",
          {
            "aria-live": "assertive",
            className: "fr-messages-group",
            id: "radio-hint-messages",
            children: i
          }
        )
      ]
    }
  );
}, Nc = {
  "fr-select-btn": "_fr-select-btn_m2sgv_1"
};
function Ld(t) {
  const { buttonLabel: e, ...n } = t, r = Ns(n), o = I(null), {
>>>>>>> Stashed changes
    labelProps: i,
    triggerProps: l,
    valueProps: s,
    menuProps: u
<<<<<<< Updated upstream
  } = qa(n, r, o), { isFocusVisible: a, focusProps: c } = qn(), { buttonProps: f } = ko({ ...se(l, c) }, o);
=======
  } = qa(n, r, o), { isFocusVisible: a, focusProps: c } = qn(), { buttonProps: f } = No({ ...ue(l, c) }, o);
>>>>>>> Stashed changes
  return /* @__PURE__ */ O("div", { className: "fr-select-group", children: [
    t.label && /* @__PURE__ */ m("label", { ...i, className: "fr-label", children: t.label }),
    /* @__PURE__ */ m(
      "button",
      {
        ...f,
        ref: o,
<<<<<<< Updated upstream
        className: y("fr-select", Mc["fr-select-btn"]),
=======
        className: g("fr-select", Nc["fr-select-btn"]),
>>>>>>> Stashed changes
        "data-focus-visible": a,
        children: /* @__PURE__ */ m("span", { ...s, children: r.selectedItem ? r.selectedItem.rendered : e })
      }
    ),
    /* @__PURE__ */ m(
      Xa,
      {
        isDisabled: t.isDisabled,
        state: r,
        triggerRef: o,
        label: t.label,
        name: t.name
      }
    ),
    r.isOpen && /* @__PURE__ */ m(er, { state: r, triggerRef: o, placement: "bottom start", children: /* @__PURE__ */ m(
      Qn,
      {
        ...u,
        state: r,
        triggerRef: o
      }
    ) })
  ] });
}
<<<<<<< Updated upstream
const Fd = Vt;
const Ld = ({
=======
const Md = Vt;
const Nd = ({
>>>>>>> Stashed changes
  children: t,
  className: e,
  css: n = {},
  fullHeight: r,
  position: o,
  sticky: i,
  title: l,
  ...s
}) => {
<<<<<<< Updated upstream
  const u = ie(), a = y("fr-sidemenu", e, {
=======
  const u = ne(), a = g("fr-sidemenu", e, {
>>>>>>> Stashed changes
    "fr-sidemenu--sticky": i && !r,
    "fr-sidemenu--sticky-full-height": r,
    "fr-sidemenu--right": o === "right"
  });
<<<<<<< Updated upstream
  return /* @__PURE__ */ m("nav", { className: a, "aria-label": "Menu latéral", ...je(s), children: /* @__PURE__ */ O("div", { className: y("fr-sidemenu__inner", n["fr-sidemenu__inner"]), children: [
=======
  return /* @__PURE__ */ m("nav", { className: a, "aria-label": "Menu latéral", ...je(s), children: /* @__PURE__ */ O("div", { className: g("fr-sidemenu__inner", n["fr-sidemenu__inner"]), children: [
>>>>>>> Stashed changes
    /* @__PURE__ */ m(
      "button",
      {
        type: "button",
<<<<<<< Updated upstream
        className: y("fr-sidemenu__btn", n["fr-sidemenu__btn"]),
=======
        className: g("fr-sidemenu__btn", n["fr-sidemenu__btn"]),
>>>>>>> Stashed changes
        "aria-controls": u,
        "aria-expanded": !1,
        children: l || "Dans cette rubrique"
      }
    ),
    /* @__PURE__ */ O("div", { className: "fr-collapse", id: u, children: [
<<<<<<< Updated upstream
      l && /* @__PURE__ */ m("div", { className: y("fr-sidemenu__title", n["fr-sidemenu__title"]), children: l }),
      /* @__PURE__ */ m("ul", { className: y("fr-sidemenu__list", n["fr-sidemenu__list"]), children: et(t, [es, he]).map((c, f) => $e(c) && /* @__PURE__ */ m("li", { className: y("fr-sidemenu__item", n["fr-sidemenu__item"]), children: c.type === he ? _e(c, { className: y("fr-sidemenu__link", c.props.className) }) : c }, `navitem-${u}-${f}`)) })
=======
      l && /* @__PURE__ */ m("div", { className: g("fr-sidemenu__title", n["fr-sidemenu__title"]), children: l }),
      /* @__PURE__ */ m("ul", { className: g("fr-sidemenu__list", n["fr-sidemenu__list"]), children: et(t, [es, he]).map((c, f) => $e(c) && /* @__PURE__ */ m("li", { className: g("fr-sidemenu__item", n["fr-sidemenu__item"]), children: c.type === he ? _e(c, { className: g("fr-sidemenu__link", c.props.className) }) : c }, `navitem-${u}-${f}`)) })
>>>>>>> Stashed changes
    ] })
  ] }) });
}, es = ({
  children: t,
  className: e,
  css: n = {},
  current: r,
  defaultExpanded: o = !1,
  href: i,
  icon: l,
  title: s,
  ...u
}) => {
  const a = ne(), c = et(t, [es, he]);
  return /* @__PURE__ */ O(In, { children: [
    /* @__PURE__ */ m(
      "button",
      {
<<<<<<< Updated upstream
        className: y("fr-sidemenu__btn", e),
=======
        className: g("fr-sidemenu__btn", e),
>>>>>>> Stashed changes
        "aria-expanded": o,
        "aria-controls": a,
        "aria-current": r || void 0,
        ...u,
        children: /* @__PURE__ */ m("span", { className: l && `dsfr-plus-sidemenu-title--icon fr-icon-${l} fr-icon--sm`, children: s })
      }
    ),
<<<<<<< Updated upstream
    /* @__PURE__ */ m("div", { className: "fr-collapse", id: a, children: /* @__PURE__ */ m("ul", { className: y("fr-sidemenu__list", n["fr-sidemenu__list"]), children: c.map((f, b) => /* @__PURE__ */ m("li", { className: y("fr-sidemenu__item", n["fr-sidemenu__item"]), children: $e(f) && f.type === he ? _e(f, { className: y("fr-sidemenu__link", f.props.className) }) : f }, `navitem-${a}-${b}`)) }) })
  ] });
}, Md = ({
=======
    /* @__PURE__ */ m("div", { className: "fr-collapse", id: a, children: /* @__PURE__ */ m("ul", { className: g("fr-sidemenu__list", n["fr-sidemenu__list"]), children: c.map((f, p) => /* @__PURE__ */ m("li", { className: g("fr-sidemenu__item", n["fr-sidemenu__item"]), children: $e(f) && f.type === he ? _e(f, { className: g("fr-sidemenu__link", f.props.className) }) : f }, `navitem-${a}-${p}`)) }) })
  ] });
}, kd = ({
>>>>>>> Stashed changes
  children: t,
  className: e,
  css: n = {},
  current: r,
  icon: o,
  ...i
<<<<<<< Updated upstream
}) => /* @__PURE__ */ m("li", { className: y("fr-sidemenu__item", e), children: /* @__PURE__ */ m(
  he,
  {
    className: y("fr-sidemenu__link", n["fr-sidemenu__link"]),
=======
}) => /* @__PURE__ */ m("li", { className: g("fr-sidemenu__item", e), children: /* @__PURE__ */ m(
  he,
  {
    className: g("fr-sidemenu__link", n["fr-sidemenu__link"]),
>>>>>>> Stashed changes
    "aria-current": r || void 0,
    ...i,
    children: /* @__PURE__ */ m("span", { className: o && `dsfr-plus-sidemenu-title--icon fr-icon-${o} fr-icon--sm`, children: t })
  }
) });
function kc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
<<<<<<< Updated upstream
var Nn = { exports: {} }, Pt = { exports: {} }, re = {};
=======
var kn = { exports: {} }, Pt = { exports: {} }, oe = {};
>>>>>>> Stashed changes
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function Nc() {
  if (Wr)
    return oe;
  Wr = 1;
<<<<<<< Updated upstream
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, a = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, b = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, h = t ? Symbol.for("react.fundamental") : 60117, A = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
  function S(x) {
    if (typeof x == "object" && x !== null) {
      var M = x.$$typeof;
      switch (M) {
        case e:
          switch (x = x.type, x) {
=======
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, a = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, h = t ? Symbol.for("react.fundamental") : 60117, _ = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
  function S($) {
    if (typeof $ == "object" && $ !== null) {
      var N = $.$$typeof;
      switch (N) {
        case e:
          switch ($ = $.type, $) {
>>>>>>> Stashed changes
            case u:
            case a:
            case r:
            case i:
            case o:
            case f:
<<<<<<< Updated upstream
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
=======
              return $;
            default:
              switch ($ = $ && $.$$typeof, $) {
>>>>>>> Stashed changes
                case s:
                case c:
                case v:
                case d:
                case l:
<<<<<<< Updated upstream
                  return x;
=======
                  return $;
>>>>>>> Stashed changes
                default:
                  return M;
              }
          }
        case n:
          return M;
      }
    }
  }
<<<<<<< Updated upstream
  function K(x) {
    return S(x) === a;
  }
  return re.AsyncMode = u, re.ConcurrentMode = a, re.ContextConsumer = s, re.ContextProvider = l, re.Element = e, re.ForwardRef = c, re.Fragment = r, re.Lazy = v, re.Memo = d, re.Portal = n, re.Profiler = i, re.StrictMode = o, re.Suspense = f, re.isAsyncMode = function(x) {
    return K(x) || S(x) === u;
  }, re.isConcurrentMode = K, re.isContextConsumer = function(x) {
    return S(x) === s;
  }, re.isContextProvider = function(x) {
    return S(x) === l;
  }, re.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, re.isForwardRef = function(x) {
    return S(x) === c;
  }, re.isFragment = function(x) {
    return S(x) === r;
  }, re.isLazy = function(x) {
    return S(x) === v;
  }, re.isMemo = function(x) {
    return S(x) === d;
  }, re.isPortal = function(x) {
    return S(x) === n;
  }, re.isProfiler = function(x) {
    return S(x) === i;
  }, re.isStrictMode = function(x) {
    return S(x) === o;
  }, re.isSuspense = function(x) {
    return S(x) === f;
  }, re.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === a || x === i || x === o || x === f || x === b || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === d || x.$$typeof === l || x.$$typeof === s || x.$$typeof === c || x.$$typeof === h || x.$$typeof === A || x.$$typeof === w || x.$$typeof === g);
  }, re.typeOf = S, re;
=======
  function K($) {
    return S($) === a;
  }
  return oe.AsyncMode = u, oe.ConcurrentMode = a, oe.ContextConsumer = s, oe.ContextProvider = l, oe.Element = e, oe.ForwardRef = c, oe.Fragment = r, oe.Lazy = v, oe.Memo = d, oe.Portal = n, oe.Profiler = i, oe.StrictMode = o, oe.Suspense = f, oe.isAsyncMode = function($) {
    return K($) || S($) === u;
  }, oe.isConcurrentMode = K, oe.isContextConsumer = function($) {
    return S($) === s;
  }, oe.isContextProvider = function($) {
    return S($) === l;
  }, oe.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === e;
  }, oe.isForwardRef = function($) {
    return S($) === c;
  }, oe.isFragment = function($) {
    return S($) === r;
  }, oe.isLazy = function($) {
    return S($) === v;
  }, oe.isMemo = function($) {
    return S($) === d;
  }, oe.isPortal = function($) {
    return S($) === n;
  }, oe.isProfiler = function($) {
    return S($) === i;
  }, oe.isStrictMode = function($) {
    return S($) === o;
  }, oe.isSuspense = function($) {
    return S($) === f;
  }, oe.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === r || $ === a || $ === i || $ === o || $ === f || $ === p || typeof $ == "object" && $ !== null && ($.$$typeof === v || $.$$typeof === d || $.$$typeof === l || $.$$typeof === s || $.$$typeof === c || $.$$typeof === h || $.$$typeof === _ || $.$$typeof === w || $.$$typeof === y);
  }, oe.typeOf = S, oe;
>>>>>>> Stashed changes
}
var ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function Ic() {
  return Gr || (Gr = 1, process.env.NODE_ENV !== "production" && function() {
<<<<<<< Updated upstream
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, a = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, b = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, h = t ? Symbol.for("react.fundamental") : 60117, A = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
    function S(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === r || k === a || k === i || k === o || k === f || k === b || typeof k == "object" && k !== null && (k.$$typeof === v || k.$$typeof === d || k.$$typeof === l || k.$$typeof === s || k.$$typeof === c || k.$$typeof === h || k.$$typeof === A || k.$$typeof === w || k.$$typeof === g);
=======
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, a = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, h = t ? Symbol.for("react.fundamental") : 60117, _ = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === a || M === i || M === o || M === f || M === p || typeof M == "object" && M !== null && (M.$$typeof === v || M.$$typeof === d || M.$$typeof === l || M.$$typeof === s || M.$$typeof === c || M.$$typeof === h || M.$$typeof === _ || M.$$typeof === w || M.$$typeof === y);
>>>>>>> Stashed changes
    }
    function K(k) {
      if (typeof k == "object" && k !== null) {
        var ye = k.$$typeof;
        switch (ye) {
          case e:
            var Ne = k.type;
            switch (Ne) {
              case u:
              case a:
              case r:
              case i:
              case o:
              case f:
                return Ne;
              default:
                var mt = Ne && Ne.$$typeof;
                switch (mt) {
                  case s:
                  case c:
                  case v:
                  case d:
                  case l:
                    return mt;
                  default:
                    return ye;
                }
            }
          case n:
            return ye;
        }
      }
    }
<<<<<<< Updated upstream
    var x = u, M = a, R = s, p = l, _ = e, P = c, C = r, B = v, E = d, T = n, q = i, V = o, F = f, ue = !1;
    function ae(k) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(k) || K(k) === u;
    }
    function $(k) {
      return K(k) === a;
=======
    var $ = u, N = a, R = s, b = l, A = e, E = c, P = r, B = v, C = d, T = n, q = i, V = o, F = f, ae = !1;
    function ce(M) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(M) || K(M) === u;
    }
    function x(M) {
      return K(M) === a;
>>>>>>> Stashed changes
    }
    function D(k) {
      return K(k) === s;
    }
    function z(k) {
      return K(k) === l;
    }
    function j(k) {
      return typeof k == "object" && k !== null && k.$$typeof === e;
    }
    function H(k) {
      return K(k) === c;
    }
    function Y(k) {
      return K(k) === r;
    }
    function U(k) {
      return K(k) === v;
    }
    function L(k) {
      return K(k) === d;
    }
    function N(k) {
      return K(k) === n;
    }
<<<<<<< Updated upstream
    function X(k) {
      return K(k) === i;
=======
    function Z(M) {
      return K(M) === i;
>>>>>>> Stashed changes
    }
    function G(k) {
      return K(k) === o;
    }
<<<<<<< Updated upstream
    function J(k) {
      return K(k) === f;
    }
    oe.AsyncMode = x, oe.ConcurrentMode = M, oe.ContextConsumer = R, oe.ContextProvider = p, oe.Element = _, oe.ForwardRef = P, oe.Fragment = C, oe.Lazy = B, oe.Memo = E, oe.Portal = T, oe.Profiler = q, oe.StrictMode = V, oe.Suspense = F, oe.isAsyncMode = ae, oe.isConcurrentMode = $, oe.isContextConsumer = D, oe.isContextProvider = z, oe.isElement = j, oe.isForwardRef = H, oe.isFragment = Y, oe.isLazy = U, oe.isMemo = L, oe.isPortal = N, oe.isProfiler = X, oe.isStrictMode = G, oe.isSuspense = J, oe.isValidElementType = S, oe.typeOf = K;
  }()), oe;
=======
    function Q(M) {
      return K(M) === f;
    }
    ie.AsyncMode = $, ie.ConcurrentMode = N, ie.ContextConsumer = R, ie.ContextProvider = b, ie.Element = A, ie.ForwardRef = E, ie.Fragment = P, ie.Lazy = B, ie.Memo = C, ie.Portal = T, ie.Profiler = q, ie.StrictMode = V, ie.Suspense = F, ie.isAsyncMode = ce, ie.isConcurrentMode = x, ie.isContextConsumer = D, ie.isContextProvider = z, ie.isElement = j, ie.isForwardRef = H, ie.isFragment = Y, ie.isLazy = U, ie.isMemo = L, ie.isPortal = k, ie.isProfiler = Z, ie.isStrictMode = G, ie.isSuspense = Q, ie.isValidElementType = S, ie.typeOf = K;
  }()), ie;
>>>>>>> Stashed changes
}
var qr;
function ts() {
  return qr || (qr = 1, process.env.NODE_ENV === "production" ? Pt.exports = Nc() : Pt.exports = Ic()), Pt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var bn, Yr;
function Bc() {
  if (Yr)
    return bn;
  Yr = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var l = {}, s = 0; s < 10; s++)
        l["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(l).map(function(c) {
        return l[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var a = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        a[c] = c;
      }), Object.keys(Object.assign({}, a)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return bn = o() ? Object.assign : function(i, l) {
    for (var s, u = r(i), a, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var f in s)
        e.call(s, f) && (u[f] = s[f]);
      if (t) {
        a = t(s);
        for (var b = 0; b < a.length; b++)
          n.call(s, a[b]) && (u[a[b]] = s[a[b]]);
      }
    }
    return u;
  }, bn;
}
var mn, Xr;
function tr() {
  if (Xr)
    return mn;
  Xr = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return mn = t, mn;
}
var vn, Zr;
function ns() {
  return Zr || (Zr = 1, vn = Function.call.bind(Object.prototype.hasOwnProperty)), vn;
}
var hn, Jr;
function Oc() {
  if (Jr)
    return hn;
  Jr = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = tr(), n = {}, r = ns();
    t = function(i) {
      var l = "Warning: " + i;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function o(i, l, s, u, a) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in i)
        if (r(i, c)) {
          var f;
          try {
            if (typeof i[c] != "function") {
              var b = Error(
                (u || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            f = i[c](l, c, u, s, null, e);
          } catch (v) {
            f = v;
          }
          if (f && !(f instanceof Error) && t(
            (u || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var d = a ? a() : "";
            t(
              "Failed " + s + " type: " + f.message + (d ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, hn = o, hn;
}
var gn, Qr;
function Rc() {
  if (Qr)
    return gn;
  Qr = 1;
  var t = ts(), e = Bc(), n = tr(), r = ns(), o = Oc(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return gn = function(s, u) {
    var a = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
<<<<<<< Updated upstream
    function f($) {
      var D = $ && (a && $[a] || $[c]);
=======
    function f(x) {
      var D = x && (a && x[a] || x[c]);
>>>>>>> Stashed changes
      if (typeof D == "function")
        return D;
    }
    var b = "<<anonymous>>", d = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: w(),
      arrayOf: S,
      element: K(),
<<<<<<< Updated upstream
      elementType: x(),
      instanceOf: M,
      node: P(),
      objectOf: p,
=======
      elementType: $(),
      instanceOf: N,
      node: E(),
      objectOf: b,
>>>>>>> Stashed changes
      oneOf: R,
      oneOfType: _,
      shape: B,
      exact: E
    };
<<<<<<< Updated upstream
    function v($, D) {
      return $ === D ? $ !== 0 || 1 / $ === 1 / D : $ !== $ && D !== D;
    }
    function g($, D) {
      this.message = $, this.data = D && typeof D == "object" ? D : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function h($) {
      if (process.env.NODE_ENV !== "production")
        var D = {}, z = 0;
      function j(Y, U, L, N, X, G, J) {
        if (N = N || b, G = G || L, J !== n) {
=======
    function v(x, D) {
      return x === D ? x !== 0 || 1 / x === 1 / D : x !== x && D !== D;
    }
    function y(x, D) {
      this.message = x, this.data = D && typeof D == "object" ? D : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function h(x) {
      if (process.env.NODE_ENV !== "production")
        var D = {}, z = 0;
      function j(Y, U, L, k, Z, G, Q) {
        if (k = k || p, G = G || L, Q !== n) {
>>>>>>> Stashed changes
          if (u) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = N + ":" + L;
            !D[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + N + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), D[ye] = !0, z++);
          }
        }
<<<<<<< Updated upstream
        return U[L] == null ? Y ? U[L] === null ? new g("The " + X + " `" + G + "` is marked as required " + ("in `" + N + "`, but its value is `null`.")) : new g("The " + X + " `" + G + "` is marked as required in " + ("`" + N + "`, but its value is `undefined`.")) : null : $(U, L, N, X, G);
=======
        return U[L] == null ? Y ? U[L] === null ? new y("The " + Z + " `" + G + "` is marked as required " + ("in `" + k + "`, but its value is `null`.")) : new y("The " + Z + " `" + G + "` is marked as required in " + ("`" + k + "`, but its value is `undefined`.")) : null : x(U, L, k, Z, G);
>>>>>>> Stashed changes
      }
      var H = j.bind(null, !1);
      return H.isRequired = j.bind(null, !0), H;
    }
<<<<<<< Updated upstream
    function A($) {
      function D(z, j, H, Y, U, L) {
        var N = z[j], X = V(N);
        if (X !== $) {
          var G = F(N);
          return new g(
            "Invalid " + Y + " `" + U + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected ") + ("`" + $ + "`."),
            { expectedType: $ }
=======
    function _(x) {
      function D(z, j, H, Y, U, L) {
        var k = z[j], Z = V(k);
        if (Z !== x) {
          var G = F(k);
          return new y(
            "Invalid " + Y + " `" + U + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
>>>>>>> Stashed changes
          );
        }
        return null;
      }
      return h(D);
    }
    function w() {
      return h(l);
    }
<<<<<<< Updated upstream
    function S($) {
      function D(z, j, H, Y, U) {
        if (typeof $ != "function")
          return new g("Property `" + U + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var L = z[j];
        if (!Array.isArray(L)) {
          var N = V(L);
          return new g("Invalid " + Y + " `" + U + "` of type " + ("`" + N + "` supplied to `" + H + "`, expected an array."));
        }
        for (var X = 0; X < L.length; X++) {
          var G = $(L, X, H, Y, U + "[" + X + "]", n);
=======
    function S(x) {
      function D(z, j, H, Y, U) {
        if (typeof x != "function")
          return new y("Property `" + U + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var L = z[j];
        if (!Array.isArray(L)) {
          var k = V(L);
          return new y("Invalid " + Y + " `" + U + "` of type " + ("`" + k + "` supplied to `" + H + "`, expected an array."));
        }
        for (var Z = 0; Z < L.length; Z++) {
          var G = x(L, Z, H, Y, U + "[" + Z + "]", n);
>>>>>>> Stashed changes
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return h(D);
    }
    function K() {
<<<<<<< Updated upstream
      function $(D, z, j, H, Y) {
        var U = D[z];
        if (!s(U)) {
          var L = V(U);
          return new g("Invalid " + H + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h($);
    }
    function x() {
      function $(D, z, j, H, Y) {
        var U = D[z];
        if (!t.isValidElementType(U)) {
          var L = V(U);
          return new g("Invalid " + H + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h($);
    }
    function M($) {
      function D(z, j, H, Y, U) {
        if (!(z[j] instanceof $)) {
          var L = $.name || b, N = ae(z[j]);
          return new g("Invalid " + Y + " `" + U + "` of type " + ("`" + N + "` supplied to `" + H + "`, expected ") + ("instance of `" + L + "`."));
=======
      function x(D, z, j, H, Y) {
        var U = D[z];
        if (!s(U)) {
          var L = V(U);
          return new y("Invalid " + H + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(x);
    }
    function $() {
      function x(D, z, j, H, Y) {
        var U = D[z];
        if (!t.isValidElementType(U)) {
          var L = V(U);
          return new y("Invalid " + H + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(x);
    }
    function N(x) {
      function D(z, j, H, Y, U) {
        if (!(z[j] instanceof x)) {
          var L = x.name || p, k = ce(z[j]);
          return new y("Invalid " + Y + " `" + U + "` of type " + ("`" + k + "` supplied to `" + H + "`, expected ") + ("instance of `" + L + "`."));
>>>>>>> Stashed changes
        }
        return null;
      }
      return h(D);
    }
<<<<<<< Updated upstream
    function R($) {
      if (!Array.isArray($))
=======
    function R(x) {
      if (!Array.isArray(x))
>>>>>>> Stashed changes
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), l;
      function D(z, j, H, Y, U) {
<<<<<<< Updated upstream
        for (var L = z[j], N = 0; N < $.length; N++)
          if (v(L, $[N]))
            return null;
        var X = JSON.stringify($, function(J, k) {
          var ye = F(k);
          return ye === "symbol" ? String(k) : k;
        });
        return new g("Invalid " + Y + " `" + U + "` of value `" + String(L) + "` " + ("supplied to `" + H + "`, expected one of " + X + "."));
      }
      return h(D);
    }
    function p($) {
      function D(z, j, H, Y, U) {
        if (typeof $ != "function")
          return new g("Property `" + U + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var L = z[j], N = V(L);
        if (N !== "object")
          return new g("Invalid " + Y + " `" + U + "` of type " + ("`" + N + "` supplied to `" + H + "`, expected an object."));
        for (var X in L)
          if (r(L, X)) {
            var G = $(L, X, H, Y, U + "." + X, n);
=======
        for (var L = z[j], k = 0; k < x.length; k++)
          if (v(L, x[k]))
            return null;
        var Z = JSON.stringify(x, function(Q, M) {
          var ye = F(M);
          return ye === "symbol" ? String(M) : M;
        });
        return new y("Invalid " + Y + " `" + U + "` of value `" + String(L) + "` " + ("supplied to `" + H + "`, expected one of " + Z + "."));
      }
      return h(D);
    }
    function b(x) {
      function D(z, j, H, Y, U) {
        if (typeof x != "function")
          return new y("Property `" + U + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var L = z[j], k = V(L);
        if (k !== "object")
          return new y("Invalid " + Y + " `" + U + "` of type " + ("`" + k + "` supplied to `" + H + "`, expected an object."));
        for (var Z in L)
          if (r(L, Z)) {
            var G = x(L, Z, H, Y, U + "." + Z, n);
>>>>>>> Stashed changes
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return h(D);
    }
<<<<<<< Updated upstream
    function _($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var D = 0; D < $.length; D++) {
        var z = $[D];
=======
    function A(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var D = 0; D < x.length; D++) {
        var z = x[D];
>>>>>>> Stashed changes
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(z) + " at index " + D + "."
          ), l;
      }
<<<<<<< Updated upstream
      function j(H, Y, U, L, N) {
        for (var X = [], G = 0; G < $.length; G++) {
          var J = $[G], k = J(H, Y, U, L, N, n);
          if (k == null)
            return null;
          k.data && r(k.data, "expectedType") && X.push(k.data.expectedType);
        }
        var ye = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new g("Invalid " + L + " `" + N + "` supplied to " + ("`" + U + "`" + ye + "."));
      }
      return h(j);
    }
    function P() {
      function $(D, z, j, H, Y) {
        return T(D[z]) ? null : new g("Invalid " + H + " `" + Y + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return h($);
    }
    function C($, D, z, j, H) {
      return new g(
        ($ || "React class") + ": " + D + " type `" + z + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function B($) {
      function D(z, j, H, Y, U) {
        var L = z[j], N = V(L);
        if (N !== "object")
          return new g("Invalid " + Y + " `" + U + "` of type `" + N + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var X in $) {
          var G = $[X];
          if (typeof G != "function")
            return C(H, Y, U, X, F(G));
          var J = G(L, X, H, Y, U + "." + X, n);
          if (J)
            return J;
=======
      function j(H, Y, U, L, k) {
        for (var Z = [], G = 0; G < x.length; G++) {
          var Q = x[G], M = Q(H, Y, U, L, k, n);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && Z.push(M.data.expectedType);
        }
        var ye = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new y("Invalid " + L + " `" + k + "` supplied to " + ("`" + U + "`" + ye + "."));
      }
      return h(j);
    }
    function E() {
      function x(D, z, j, H, Y) {
        return T(D[z]) ? null : new y("Invalid " + H + " `" + Y + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return h(x);
    }
    function P(x, D, z, j, H) {
      return new y(
        (x || "React class") + ": " + D + " type `" + z + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function B(x) {
      function D(z, j, H, Y, U) {
        var L = z[j], k = V(L);
        if (k !== "object")
          return new y("Invalid " + Y + " `" + U + "` of type `" + k + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var Z in x) {
          var G = x[Z];
          if (typeof G != "function")
            return P(H, Y, U, Z, F(G));
          var Q = G(L, Z, H, Y, U + "." + Z, n);
          if (Q)
            return Q;
>>>>>>> Stashed changes
        }
        return null;
      }
      return h(D);
    }
<<<<<<< Updated upstream
    function E($) {
      function D(z, j, H, Y, U) {
        var L = z[j], N = V(L);
        if (N !== "object")
          return new g("Invalid " + Y + " `" + U + "` of type `" + N + "` " + ("supplied to `" + H + "`, expected `object`."));
        var X = e({}, z[j], $);
        for (var G in X) {
          var J = $[G];
          if (r($, G) && typeof J != "function")
            return C(H, Y, U, G, F(J));
          if (!J)
            return new g(
              "Invalid " + Y + " `" + U + "` key `" + G + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(z[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys($), null, "  ")
            );
          var k = J(L, G, H, Y, U + "." + G, n);
          if (k)
            return k;
=======
    function C(x) {
      function D(z, j, H, Y, U) {
        var L = z[j], k = V(L);
        if (k !== "object")
          return new y("Invalid " + Y + " `" + U + "` of type `" + k + "` " + ("supplied to `" + H + "`, expected `object`."));
        var Z = e({}, z[j], x);
        for (var G in Z) {
          var Q = x[G];
          if (r(x, G) && typeof Q != "function")
            return P(H, Y, U, G, F(Q));
          if (!Q)
            return new y(
              "Invalid " + Y + " `" + U + "` key `" + G + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(z[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var M = Q(L, G, H, Y, U + "." + G, n);
          if (M)
            return M;
>>>>>>> Stashed changes
        }
        return null;
      }
      return h(D);
    }
<<<<<<< Updated upstream
    function T($) {
      switch (typeof $) {
=======
    function T(x) {
      switch (typeof x) {
>>>>>>> Stashed changes
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
<<<<<<< Updated upstream
          return !$;
        case "object":
          if (Array.isArray($))
            return $.every(T);
          if ($ === null || s($))
            return !0;
          var D = f($);
          if (D) {
            var z = D.call($), j;
            if (D !== $.entries) {
=======
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(T);
          if (x === null || s(x))
            return !0;
          var D = f(x);
          if (D) {
            var z = D.call(x), j;
            if (D !== x.entries) {
>>>>>>> Stashed changes
              for (; !(j = z.next()).done; )
                if (!T(j.value))
                  return !1;
            } else
              for (; !(j = z.next()).done; ) {
                var H = j.value;
                if (H && !T(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
<<<<<<< Updated upstream
    function q($, D) {
      return $ === "symbol" ? !0 : D ? D["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && D instanceof Symbol : !1;
    }
    function V($) {
      var D = typeof $;
      return Array.isArray($) ? "array" : $ instanceof RegExp ? "object" : q(D, $) ? "symbol" : D;
    }
    function F($) {
      if (typeof $ > "u" || $ === null)
        return "" + $;
      var D = V($);
      if (D === "object") {
        if ($ instanceof Date)
          return "date";
        if ($ instanceof RegExp)
=======
    function q(x, D) {
      return x === "symbol" ? !0 : D ? D["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && D instanceof Symbol : !1;
    }
    function V(x) {
      var D = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : q(D, x) ? "symbol" : D;
    }
    function F(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var D = V(x);
      if (D === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
>>>>>>> Stashed changes
          return "regexp";
      }
      return D;
    }
<<<<<<< Updated upstream
    function ue($) {
      var D = F($);
=======
    function ae(x) {
      var D = F(x);
>>>>>>> Stashed changes
      switch (D) {
        case "array":
        case "object":
          return "an " + D;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + D;
        default:
          return D;
      }
    }
<<<<<<< Updated upstream
    function ae($) {
      return !$.constructor || !$.constructor.name ? b : $.constructor.name;
=======
    function ce(x) {
      return !x.constructor || !x.constructor.name ? p : x.constructor.name;
>>>>>>> Stashed changes
    }
    return d.checkPropTypes = o, d.resetWarningCache = o.resetWarningCache, d.PropTypes = d, d;
  }, gn;
}
var $n, eo;
function Vc() {
  if (eo)
    return $n;
  eo = 1;
  var t = tr();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, $n = function() {
    function r(l, s, u, a, c, f) {
      if (f !== t) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return i.PropTypes = i, i;
  }, $n;
}
if (process.env.NODE_ENV !== "production") {
  var zc = ts(), jc = !0;
  Nn.exports = Rc()(zc.isElement, jc);
} else
  Nn.exports = Vc()();
var Hc = Nn.exports;
const Uc = /* @__PURE__ */ kc(Hc), Wc = "_spinner_143d9_5", Gc = "_internal_143d9_40", qc = "_external_143d9_41", yn = {
  spinner: Wc,
  "internal-circle": "_internal-circle_143d9_40",
  "external-circle": "_external-circle_143d9_41",
  internal: Gc,
  external: qc,
  "spinner-overlay": "_spinner-overlay_143d9_57"
};
function rs({ size: t }) {
  const e = ne();
  return W(() => {
    var n, r;
    (n = document == null ? void 0 : document.getElementById(e)) == null || n.style.setProperty("width", `${t}px`), (r = document == null ? void 0 : document.getElementById(e)) == null || r.style.setProperty("height", `${t}px`);
  }, [t, e]), /* @__PURE__ */ O(
    "svg",
    {
      id: e,
      className: yn.spinner,
      viewBox: "0 0 120 120",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ m("circle", { className: yn["internal-circle"], cx: "60", cy: "60", r: "30" }),
        /* @__PURE__ */ m("circle", { className: yn["external-circle"], cx: "60", cy: "60", r: "50" })
      ]
    }
  );
}
rs.propTypes = {
  size: Uc.number
};
rs.defaultProps = {
  size: 48
};
const Id = ({
  className: t,
  currentStep: e,
  currentTitle: n,
  nextStepTitle: r,
  steps: o,
  titleAs: i = "h4",
  ...l
<<<<<<< Updated upstream
}) => /* @__PURE__ */ O("div", { className: y("fr-stepper", t), ...l, children: [
=======
}) => /* @__PURE__ */ O("div", { className: g("fr-stepper", t), ...l, children: [
>>>>>>> Stashed changes
  /* @__PURE__ */ O(i, { className: "fr-stepper__title", children: [
    /* @__PURE__ */ m("span", { className: "fr-stepper__state", children: `Étape ${e} sur ${o}` }),
    n
  ] }),
  /* @__PURE__ */ m("div", { className: "fr-stepper__steps", "data-fr-current-step": e, "data-fr-steps": o }),
  /* @__PURE__ */ O("p", { className: "fr-stepper__details", children: [
    /* @__PURE__ */ m("span", { className: "fr-text--bold", children: "Étape suivante : " }),
    r
  ] })
] }), Yc = ({
  className: t,
  index: e,
  ...n
}) => /* @__PURE__ */ m(
  "div",
  {
    id: `${e}-panel`,
<<<<<<< Updated upstream
    className: y("fr-tabs__panel", t),
=======
    className: g("fr-tabs__panel", t),
>>>>>>> Stashed changes
    role: "tabpanel",
    "aria-labelledby": `${e}-button`,
    tabIndex: n["aria-selected"] ? -1 : 0,
    ...n
  }
<<<<<<< Updated upstream
), Nd = ({
=======
), Bd = ({
>>>>>>> Stashed changes
  className: t,
  children: e,
  defaultActiveIndex: n = 0,
  css: r = {},
  onTabChange: o,
  ...i
}) => {
<<<<<<< Updated upstream
  const l = ie(), s = i.id || l, u = fe(e, Yc).filter((a) => $e(a)).map(
=======
  const l = ne(), s = i.id || l, u = se(e, Xc).filter((a) => $e(a)).map(
>>>>>>> Stashed changes
    (a, c) => _e(
      a,
      { index: `${s}-${c}` }
    )
  );
  return /* @__PURE__ */ O(
    "div",
    {
      id: s,
<<<<<<< Updated upstream
      className: y("fr-tabs", t),
      ...i,
      children: [
        /* @__PURE__ */ m("ul", { className: y("fr-tabs__list", r.ul), role: "tablist", children: u.map((a, c) => /* @__PURE__ */ m("li", { className: y(r.li), role: "presentation", children: /* @__PURE__ */ m(
=======
      className: g("fr-tabs", t),
      ...i,
      children: [
        /* @__PURE__ */ m("ul", { className: g("fr-tabs__list", r.ul), role: "tablist", children: u.map((a, c) => /* @__PURE__ */ m("li", { className: g(r.li), role: "presentation", children: /* @__PURE__ */ m(
>>>>>>> Stashed changes
          "button",
          {
            onClick: (f) => {
              o && (o(c), f.preventDefault());
            },
            id: `${s}-${c}-button`,
<<<<<<< Updated upstream
            className: y(
=======
            className: g(
>>>>>>> Stashed changes
              "fr-tabs__tab",
              {
                [`fr-icon-${a.props.icon}`]: $e(a) && a.props.icon,
                "fr-tabs__tab--icon-left": $e(a) && a.props.icon
              },
              r.button
            ),
            tabIndex: n === c ? 0 : -1,
            role: "tab",
            "aria-selected": n === c ? "true" : "false",
            "aria-controls": `${s}-${c}-panel`,
            children: $e(a) && a.props.label
          }
        ) }, `${s}-${c}`)) }),
        u
      ]
    }
  );
};
<<<<<<< Updated upstream
const nr = me, rr = ({ className: t, color: e, icon: n, iconPosition: r, size: o }) => y("fr-tag", t, {
=======
const nr = be, rr = ({ className: t, color: e, icon: n, iconPosition: r, size: o }) => g("fr-tag", t, {
>>>>>>> Stashed changes
  "fr-tag--sm": o === "sm",
  [`fr-icon-${n}`]: n,
  [`fr-tag--icon-${r}`]: n && r,
  [`fr-tag--${e}`]: e
}), Xc = nr(({
  as: t,
  className: e,
  color: n,
  icon: r,
  iconPosition: o = "right",
  size: i,
  ...l
}, s) => {
  const u = rr({ className: e, color: n, icon: r, iconPosition: o, size: i });
  return /* @__PURE__ */ m(
    t === "a" ? he : t || "p",
    {
      ref: s,
      className: u,
      ...l
    }
  );
}), Zc = nr(({
  as: t,
  className: e,
  color: n,
  icon: r,
  iconPosition: o = "left",
  selected: i,
  size: l,
  ...s
}, u) => {
  const a = rr({ className: e, color: n, icon: r, iconPosition: o, size: l });
  return /* @__PURE__ */ m(
    t === "a" ? he : t || "button",
    {
      "data-fr-js-disable": "true",
      ref: u,
      className: a,
      "aria-pressed": i,
      ...s
    }
  );
}), Jc = nr(({
  as: t,
  className: e,
  color: n,
  icon: r,
  iconPosition: o = "left",
  size: i,
  ...l
}, s) => {
<<<<<<< Updated upstream
  const u = y("fr-tag--dismiss", rr({ className: e, color: n, icon: r, iconPosition: o, size: i }));
=======
  const u = g("fr-tag--dismiss", rr({ className: e, color: n, icon: r, iconPosition: o, size: i }));
>>>>>>> Stashed changes
  return /* @__PURE__ */ m(
    t === "a" ? he : t || "button",
    {
      ref: s,
      className: u,
      ...l
    }
  );
<<<<<<< Updated upstream
}), Id = ({
=======
}), Od = ({
>>>>>>> Stashed changes
  className: t,
  children: e,
  ...n
}) => {
<<<<<<< Updated upstream
  const r = ie(), o = y("fr-tags-group", t);
  return /* @__PURE__ */ m("ul", { className: o, ...je(n), children: et(e, [Xc, Zc, Jc]).map((i, l) => /* @__PURE__ */ m("li", { children: i }, `${r}-${l}`)) });
=======
  const r = ne(), o = g("fr-tags-group", t);
  return /* @__PURE__ */ m("ul", { className: o, ...je(n), children: et(e, [Zc, Jc, Qc]).map((i, l) => /* @__PURE__ */ m("li", { children: i }, `${r}-${l}`)) });
>>>>>>> Stashed changes
}, to = ({
  alt: t,
  as: e = "p",
  bold: n,
  className: r,
  size: o,
  ...i
}) => {
<<<<<<< Updated upstream
  const l = y(r, {
=======
  const l = g(r, {
>>>>>>> Stashed changes
    "fr-text--alt": o !== "lead" && t,
    "fr-text--heavy": n,
    [`fr-text--${o}`]: o && o !== "md"
  });
  return /* @__PURE__ */ m(e, { className: l, ...i });
<<<<<<< Updated upstream
}, Bd = ({
=======
}, Rd = ({
>>>>>>> Stashed changes
  as: t = "h1",
  className: e,
  look: n,
  ...r
}) => {
<<<<<<< Updated upstream
  const o = n && ["xs", "sm", "md", "lg", "xl"].includes(n), i = y(e, {
=======
  const o = n && ["xs", "sm", "md", "lg", "xl"].includes(n), i = g(e, {
>>>>>>> Stashed changes
    [`fr-${n}`]: !o && n && n !== t,
    [`fr-display-${n}`]: o
  });
  return /* @__PURE__ */ m(t, { className: i, ...r });
};
<<<<<<< Updated upstream
function Qc(t, e) {
  const [n, r] = Z(!1), o = I((/* @__PURE__ */ new Date()).getTime()), i = I(e), l = I(void 0), s = () => clearTimeout(l.current), u = () => {
=======
function ed(t, e) {
  const [n, r] = J(!1), o = I((/* @__PURE__ */ new Date()).getTime()), i = I(e), l = I(void 0), s = () => clearTimeout(l.current), u = () => {
>>>>>>> Stashed changes
    r(!0), i.current -= (/* @__PURE__ */ new Date()).getTime() - o.current, s();
  }, a = () => {
    o.current = (/* @__PURE__ */ new Date()).getTime(), r(!1);
  };
  return W(() => (!n && e && (l.current = setTimeout(t, i.current)), s), [i, n, e, t]), { paused: n, pause: u, resume: a };
}
const ed = ({ autoDismissAfter: t = 3e3, description: e = "", id: n, remove: r = () => {
}, title: o = "", type: i = "success" }) => {
  const l = {
    info: "fr-icon-information-fill",
    warning: "fr-icon-error-warning-fill",
    success: "fr-icon-checkbox-circle-fill",
    error: "fr-icon-close-circle-fill"
  }, s = te(() => {
    var c;
    (c = document.getElementById(n)) == null || c.style.setProperty("animation", "toast-unmount 1000ms"), setTimeout(() => {
      r(n);
    }, 1e3);
  }, [n, r]), { pause: u, resume: a } = Qc(s, t);
  return W(() => {
    const c = document.getElementById(`progress-${n}`);
    c && c.style.setProperty("animation-duration", `${t}ms`);
  }, [n, t]), /* @__PURE__ */ O(
    "div",
    {
      id: `${n}`,
      role: "alert",
      className: `toast toast-${i}`,
      onMouseEnter: u,
      onMouseLeave: a,
      children: [
        /* @__PURE__ */ O("div", { className: "toast-colored-box", children: [
          /* @__PURE__ */ m("span", { className: l[i] }),
          t !== 0 ? /* @__PURE__ */ m("div", { id: `progress-${n}`, className: "toast-progress-bar" }) : null
        ] }),
        /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            onClick: () => r(n),
            className: "toast-btn-close",
            children: /* @__PURE__ */ m("span", { className: "fr-icon-close-line" })
          }
        ),
        /* @__PURE__ */ O(bc, { fluid: !0, className: "toast-content", children: [
          /* @__PURE__ */ m(Hr, { children: o && /* @__PURE__ */ m(to, { bold: !0, className: "mb-1w", children: o }) }),
          /* @__PURE__ */ m(Hr, { children: e && /* @__PURE__ */ m(to, { className: "mb-2w", size: "sm", children: e }) })
        ] })
      ]
    }
  );
};
function td({ children: t }) {
  return /* @__PURE__ */ m("div", { id: "toast-container", children: t });
}
<<<<<<< Updated upstream
const os = Rt({}), Od = ({
=======
const os = Rt({}), Vd = ({
>>>>>>> Stashed changes
  children: t
}) => {
  const [e, n] = J([]), r = te((s) => {
    n((u) => u.filter((a) => a.id !== s));
  }, []), o = te((s) => {
    const u = (s == null ? void 0 : s.id) ?? `toast-${ne()}`;
    return n((a) => [...a, { ...s, id: u }]), u;
  }, []), i = re(() => ({
    remove: r,
    toast: o,
    toasts: e
  }), [r, o, e]), l = /* @__PURE__ */ m(td, { children: e.map((s) => /* @__PURE__ */ m(
    ed,
    {
      remove: r,
      ...s
    },
    s.id
  )) });
  return /* @__PURE__ */ O(os.Provider, { value: i, children: [
    t,
    as(l, document.body)
  ] });
<<<<<<< Updated upstream
}, Rd = () => Se(os), nd = me(({
=======
}, zd = () => Se(os), rd = be(({
>>>>>>> Stashed changes
  className: t,
  css: e = {},
  hasLabelLeft: n,
  hasSeparator: r,
  hint: o,
  label: i,
  ...l
}, s) => {
<<<<<<< Updated upstream
  const u = ie(), a = l.id || u, c = y("fr-toggle", {
=======
  const u = ne(), a = l.id || u, c = g("fr-toggle", {
>>>>>>> Stashed changes
    "fr-toggle--border-bottom": r,
    "fr-toggle--label-left": n
  }, t);
  return /* @__PURE__ */ O(
    "div",
    {
      className: c,
      children: [
        /* @__PURE__ */ m(
          "input",
          {
            ref: s,
            type: "checkbox",
<<<<<<< Updated upstream
            className: y("fr-toggle__input", e["fr-toggle__input"]),
=======
            className: g("fr-toggle__input", e["fr-toggle__input"]),
>>>>>>> Stashed changes
            id: a,
            ...je(l, { exclude: ["type"] })
          }
        ),
        /* @__PURE__ */ m(
          "label",
          {
<<<<<<< Updated upstream
            className: y("fr-toggle__label", e["fr-toggle__label"]),
=======
            className: g("fr-toggle__label", e["fr-toggle__label"]),
>>>>>>> Stashed changes
            htmlFor: a,
            "data-fr-checked-label": "Activé",
            "data-fr-unchecked-label": "Désactivé",
            children: i
          }
        ),
<<<<<<< Updated upstream
        o && /* @__PURE__ */ m("p", { className: y("fr-hint-text", e["fr-hint-text"]), children: o })
      ]
    }
  );
}), Vd = ({ children: t, className: e, ...n }) => {
  const r = ie();
  return /* @__PURE__ */ m("ul", { className: y("fr-toggle__list", e), ...je(n), children: fe(t, nd).map((o, i) => /* @__PURE__ */ m("li", { children: o }, `${r}-${i}`)) });
};
export {
  fs as Accordion,
  sd as AccordionGroup,
  ud as Alert,
  ac as Autocomplete,
  dd as AutocompleteItem,
  dc as Badge,
  fd as BadgeGroup,
  pd as Breadcrumb,
  ut as Button,
  bd as ButtonGroup,
  md as Checkbox,
  gd as Col,
  bc as Container,
  cd as DSFRConfig,
  Jc as DissmissibleTag,
  vc as FastAccess,
  vd as Fieldset,
  hd as FileUpload,
  $d as Header,
  Vt as Item,
  he as Link,
  Cd as Listbox,
  Ed as ListboxItem,
  Pd as ListboxSection,
  yc as Logo,
  wd as MenuButton,
  Sd as MenuItem,
  Td as MenuSection,
  _d as Modal,
=======
        o && /* @__PURE__ */ m("p", { className: g("fr-hint-text", e["fr-hint-text"]), children: o })
      ]
    }
  );
}), jd = ({ children: t, className: e, ...n }) => {
  const r = ne();
  return /* @__PURE__ */ m("ul", { className: g("fr-toggle__list", e), ...je(n), children: se(t, rd).map((o, i) => /* @__PURE__ */ m("li", { children: o }, `${r}-${i}`)) });
}, od = be(({
  className: t,
  icon: e,
  id: n,
  imageComponent: r,
  label: o,
  name: i,
  ...l
}, s) => /* @__PURE__ */ O("div", { className: g("fr-segmented__element"), style: { width: "100%" }, children: [
  /* @__PURE__ */ m(
    "input",
    {
      id: n,
      name: i,
      ref: s,
      type: "radio",
      ...l
    }
  ),
  /* @__PURE__ */ m(
    "label",
    {
      className: g("fr-label", e),
      htmlFor: n,
      children: o
    }
  )
] })), Hd = ({
  children: t,
  className: e,
  isVertical: n,
  label: r,
  legendInline: o,
  name: i,
  onChangeValue: l,
  value: s,
  ...u
}) => {
  const a = ne(), c = g("fr-segmented", e), f = {};
  return n && (f.style = { display: "block" }), /* @__PURE__ */ O(
    "fieldset",
    {
      className: c,
      id: a,
      ...f,
      ...u,
      children: [
        r && /* @__PURE__ */ m("legend", { className: g("fr-segmented__legend", { "fr-segmented__legend--inline": o }), children: r }),
        se(t, od).map((p, d) => {
          if (X.isValidElement(p))
            return /* @__PURE__ */ m("div", { className: g("fr-segmented__elements"), children: X.cloneElement(p, {
              name: i,
              id: `${i}-${d}`,
              onChange: () => {
                l == null || l(p.props.value), p.props.onChange();
              }
            }) });
        })
      ]
    }
  );
};
export {
  fs as Accordion,
  ad as AccordionGroup,
  cd as Alert,
  ac as Autocomplete,
  pd as AutocompleteItem,
  dc as Badge,
  bd as BadgeGroup,
  md as Breadcrumb,
  ut as Button,
  vd as ButtonGroup,
  hd as Checkbox,
  yd as Col,
  bc as Container,
  fd as DSFRConfig,
  Qc as DissmissibleTag,
  vc as FastAccess,
  gd as Fieldset,
  $d as FileUpload,
  xd as Header,
  Vt as Item,
  he as Link,
  Pd as Listbox,
  wd as ListboxItem,
  Sd as ListboxSection,
  yc as Logo,
  Td as MenuButton,
  _d as MenuItem,
  Ad as MenuSection,
  Kd as Modal,
>>>>>>> Stashed changes
  Bt as ModalClose,
  Jl as ModalContent,
  Ql as ModalFooter,
  Zl as ModalTitle,
  $c as Nav,
  Yl as NavItem,
<<<<<<< Updated upstream
  Ad as Notice,
  hc as Operator,
  Kd as Radio,
  Hr as Row,
  gc as SearchBar,
  lo as Section,
  Dd as Select,
  Fd as SelectOption,
  Zc as SelectableTag,
  mc as Service,
  Ld as SideMenu,
  es as SideMenuItem,
  Md as SideMenuLink,
  rs as Spinner,
  kd as Stepper,
  Yc as Tab,
  Nd as Tabs,
  Xc as Tag,
  Id as TagGroup,
  to as Text,
  xd as TextArea,
  yd as TextInput,
  Bd as Title,
  ed as Toast,
  Od as ToastContextProvider,
  nd as Toggle,
  Vd as ToggleGroup,
  ad as useAutocompleteList,
  bt as useDSFRConfig,
  Rd as useToast
=======
  Dd as Notice,
  hc as Operator,
  Mc as Radio,
  Fd as RadioGroup,
  Hr as Row,
  gc as SearchBar,
  lo as Section,
  Hd as SegmentedControl,
  od as SegmentedElement,
  Ld as Select,
  Md as SelectOption,
  Jc as SelectableTag,
  mc as Service,
  Nd as SideMenu,
  es as SideMenuItem,
  kd as SideMenuLink,
  rs as Spinner,
  Id as Stepper,
  Xc as Tab,
  Bd as Tabs,
  Zc as Tag,
  Od as TagGroup,
  to as Text,
  Ed as TextArea,
  Cd as TextInput,
  Rd as Title,
  td as Toast,
  Vd as ToastContextProvider,
  rd as Toggle,
  jd as ToggleGroup,
  dd as useAutocompleteList,
  bt as useDSFRConfig,
  zd as useToast
>>>>>>> Stashed changes
};
