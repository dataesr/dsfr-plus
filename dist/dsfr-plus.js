import './style.css';
import { jsxs as O, jsx as m, Fragment as In } from "react/jsx-runtime";
import x from "classnames";
import * as vt from "react";
import Q, { useState as X, useEffect as W, forwardRef as be, useId as ie, useRef as I, useCallback as te, isValidElement as $e, Children as Ot, Fragment as xn, createContext as Rt, useMemo as ne, useContext as Se, useReducer as us, createElement as ir, cloneElement as _e } from "react";
import Bn, { flushSync as as, createPortal as cs } from "react-dom";
const ds = {
  config: { attributes: !0, childList: !1, subtree: !1 }
};
function fs(t, e, n = ds) {
  const [r, o] = X(null);
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
const ps = be(({
  title: t,
  titleAs: e = "h3",
  children: n,
  className: r,
  css: o = {},
  defaultExpanded: i = !1,
  ...l
}, s) => {
  const u = ie(), a = I(null), [c, d] = X(!!i), b = te(
    (f) => {
      var $;
      if (f.find((h) => h.attributeName === "aria-expanded") && (($ = a == null ? void 0 : a.current) != null && $.attributes)) {
        const h = a.current.attributes.getNamedItem("aria-expanded");
        d(h ? h.value === "true" : !1);
      }
    },
    [a]
  );
  return fs(a == null ? void 0 : a.current, b), /* @__PURE__ */ O("section", { className: x("fr-accordion", r), children: [
    /* @__PURE__ */ m(
      e,
      {
        className: x("fr-accordion__title", o.title),
        children: /* @__PURE__ */ m(
          "button",
          {
            ...l,
            ref: (f) => pt(f, [s, a]),
            className: x("fr-accordion__btn", o.button),
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
function fe(t, e) {
  return Ot.toArray(t).filter((r) => $e(r) && r.type === e);
}
function et(t, e) {
  return Ot.toArray(t).filter((n) => $e(n) && e.includes(n.type));
}
function bs(t, e) {
  return Ot.toArray(t).filter((n) => $e(n) && !e.includes(n.type));
}
const ad = ({ children: t, className: e, ...n }) => {
  const r = ie();
  return /* @__PURE__ */ m("div", { className: x("fr-accordions-group", e), ...n, children: fe(t, ps).map((o, i) => /* @__PURE__ */ m(xn, { children: o }, `${r}-d${i}`)) });
}, cd = be(({
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
  const d = I(null), b = (f) => {
    var v;
    f.preventDefault(), (v = d.current) == null || v.remove(), o && o(f);
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: (f) => pt(f, [c, d]),
      className: x(`fr-alert fr-alert--${u}`, { "fr-alert--sm": r === "sm" }, t),
      ...a,
      children: [
        i && /* @__PURE__ */ m(s, { className: x("fr-alert__title", l.title), children: i }),
        n && /* @__PURE__ */ m("p", { className: x(l.description), children: n }),
        e === "uncontrolled" && /* @__PURE__ */ m("button", { onClick: b, className: x("fr-btn--close fr-btn", l.button), children: "Masquer le message" }),
        e === "controlled" && /* @__PURE__ */ m("button", { onClick: o, className: x("fr-link--close fr-link", l.button), children: "Masquer le message" })
      ]
    }
  );
});
function ms(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function vs(t, e, n) {
  ms(t, e), e.set(t, n);
}
function tt(t, e, n) {
  let [r, o] = X(t || e), i = I(t !== void 0), l = t !== void 0;
  W(() => {
    let a = i.current;
    a !== l && console.warn(`WARN: A component changed from ${a ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}.`), i.current = l;
  }, [
    l
  ]);
  let s = l ? t : r, u = te((a, ...c) => {
    let d = (b, ...f) => {
      n && (Object.is(s, b) || n(b, ...f)), l || (s = b);
    };
    typeof a == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o((f, ...v) => {
      let $ = a(l ? s : f, ...v);
      return d($, ...c), l ? f : $;
    })) : (l || o(a), d(a, ...c));
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
}, hs = Rt({}), En = "__formValidationState" + Date.now();
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
  return gs(t);
}
function gs(t) {
  let { isInvalid: e, validationState: n, name: r, value: o, builtinValidation: i, validate: l, validationBehavior: s = "aria" } = t;
  n && (e || (e = n === "invalid"));
  let u = e ? {
    isInvalid: !0,
    validationErrors: [],
    validationDetails: ro
  } : null, a = ne(() => lr($s(l, o)), [
    l,
    o
  ]);
  i != null && i.validationDetails.valid && (i = null);
  let c = Se(hs), d = ne(() => r ? Array.isArray(r) ? r.flatMap((E) => Pn(c[E])) : Pn(c[r]) : [], [
    c,
    r
  ]), [b, f] = X(c), [v, $] = X(!1);
  c !== b && (f(c), $(!1));
  let h = ne(() => lr(v ? [] : d), [
    v,
    d
  ]), _ = I(nt), [w, S] = X(nt), K = I(nt), g = () => {
    if (!k)
      return;
    R(!1);
    let E = a || i || _.current;
    Qt(E, K.current) || (K.current = E, S(E));
  }, [k, R] = X(!1);
  return W(g), {
    realtimeValidation: u || h || a || i || nt,
    displayValidation: s === "native" ? u || h || w : u || h || a || i || w,
    updateValidation(E) {
      s === "aria" && !Qt(w, E) ? S(E) : _.current = E;
    },
    resetValidation() {
      let E = nt;
      Qt(E, K.current) || (K.current = E, S(E)), s === "native" && R(!1), $(!0);
    },
    commitValidation() {
      s === "native" && R(!0), $(!0);
    }
  };
}
function Pn(t) {
  return t ? Array.isArray(t) ? t : [
    t
  ] : [];
}
function $s(t, e) {
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
    hasChildNodes: ys(e),
    *childNodes() {
      if (r)
        for (let u of r)
          yield {
            type: "item",
            value: u
          };
      else if (o) {
        let u = [];
        Q.Children.forEach(i, (a) => {
          u.push({
            type: "item",
            element: a
          });
        }), yield* u;
      }
    }
  };
};
function ys(t) {
  return t.hasChildItems != null ? t.hasChildItems : !!(t.childItems || t.title && Q.Children.count(t.children) > 0);
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
        Q.Children.forEach(n, (l) => {
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
class xs {
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
      Q.Children.forEach(n, (l) => {
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
    if (Q.isValidElement(i)) {
      let u = i.type;
      if (typeof u != "function" && typeof u.getCollectionNode != "function") {
        let b = typeof i.type == "function" ? i.type.name : i.type;
        throw new Error(`Unknown element <${b}> in collection.`);
      }
      let a = u.getCollectionNode(i.props, this.context), c = e.index, d = a.next();
      for (; !d.done && d.value; ) {
        let b = d.value;
        e.index = c;
        let f = b.key;
        f || (f = b.element ? null : this.getKey(i, e, n, r));
        let $ = [
          ...this.getFullNode({
            ...b,
            key: f,
            index: c,
            wrapper: Cs(e.wrapper, b.wrapper)
          }, this.getChildState(n, b), r ? `${r}${i.key}` : i.key, o)
        ];
        for (let h of $) {
          if (h.value = b.value || e.value, h.value && this.cache.set(h.value, h), e.type && h.type !== e.type)
            throw new Error(`Unsupported type <${en(h.type)}> in <${en(o.type)}>. Only <${en(e.type)}> is supported.`);
          c++, yield h;
        }
        d = a.next($);
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
          for (let d of c)
            u++, yield d;
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
function Cs(t, e) {
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
  let r = ne(() => new xs(), []), { children: o, items: i, collection: l } = t;
  return ne(() => {
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
function Es(t) {
  return Ps(t, 0);
}
function Ps(t, e) {
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
function ws(t, e) {
  if (t.size !== e.size)
    return !1;
  for (let n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
function uo(t) {
  let { selectionMode: e = "none", disallowEmptySelection: n, allowDuplicateSelectionEvents: r, selectionBehavior: o = "toggle", disabledBehavior: i = "all" } = t, l = I(!1), [, s] = X(!1), u = I(null), a = I(null), [, c] = X(null), d = ne(() => cr(t.selectedKeys), [
    t.selectedKeys
  ]), b = ne(() => cr(t.defaultSelectedKeys, new we()), [
    t.defaultSelectedKeys
  ]), [f, v] = tt(d, b, t.onSelectionChange), $ = ne(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), [h, _] = X(o);
  o === "replace" && h === "toggle" && typeof f == "object" && f.size === 0 && _("replace");
  let w = I(o);
  return W(() => {
    o !== w.current && (_(o), w.current = o);
  }, [
    o
  ]), {
    selectionMode: e,
    disallowEmptySelection: n,
    selectionBehavior: h,
    setSelectionBehavior: _,
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
    selectedKeys: f,
    setSelectedKeys(S) {
      (r || !ws(S, f)) && v(S);
    },
    disabledKeys: $,
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
          o.type === "item" && e.push(r), o.hasChildNodes && (this.allowsCellSelection || o.type !== "item") && n(Es(zt(o, this.collection)).key);
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
  let { filter: e } = t, n = uo(t), r = ne(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), o = te((a) => e ? new wn(e(a)) : new wn(a), [
    e
  ]), i = ne(() => ({
    suppressTextValueWarning: t.suppressTextValueWarning
  }), [
    t.suppressTextValueWarning
  ]), l = so(t, o, i), s = ne(() => new ao(l, n), [
    l,
    n
  ]);
  const u = I(null);
  return W(() => {
    if (n.focusedKey != null && !l.getItem(n.focusedKey)) {
      const a = u.current.getItem(n.focusedKey), c = [
        ...u.current.getKeys()
      ].map(($) => {
        const h = u.current.getItem($);
        return h.type === "item" ? h : null;
      }).filter(($) => $ !== null), d = [
        ...l.getKeys()
      ].map(($) => {
        const h = l.getItem($);
        return h.type === "item" ? h : null;
      }).filter(($) => $ !== null), b = c.length - d.length;
      let f = Math.min(b > 1 ? Math.max(a.index - b + 1, 0) : a.index, d.length - 1), v;
      for (; f >= 0; ) {
        if (!s.isDisabled(d[f].key)) {
          v = d[f];
          break;
        }
        f < d.length - 1 ? f++ : (f > a.index && (f = a.index), f--);
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
  let [n, r] = tt(t.selectedKey, (e = t.defaultSelectedKey) !== null && e !== void 0 ? e : null, t.onSelectionChange), o = ne(() => n != null ? [
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
      let d = (c = a.values().next().value) !== null && c !== void 0 ? c : null;
      d === n && t.onSelectionChange && t.onSelectionChange(d), r(d);
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
function Ss(t) {
  var e, n;
  let { defaultFilter: r, menuTrigger: o = "input", allowsEmptyCollection: i = !1, allowsCustomValue: l, shouldCloseOnBlur: s = !0 } = t, [u, a] = X(!1), [c, d] = X(!1), [b, f] = X(null), v = (ee) => {
    t.onSelectionChange && t.onSelectionChange(ee), ee === w && (H(), D());
  };
  var $;
  let { collection: h, selectionManager: _, selectedKey: w, setSelectedKey: S, selectedItem: K, disabledKeys: g } = fo({
    ...t,
    onSelectionChange: v,
    items: ($ = t.items) !== null && $ !== void 0 ? $ : t.defaultItems
  });
  var k, R;
  let [p, A] = tt(t.inputValue, (R = (k = t.defaultInputValue) !== null && k !== void 0 ? k : (e = h.getItem(w)) === null || e === void 0 ? void 0 : e.textValue) !== null && R !== void 0 ? R : "", t.onInputChange), E = h, P = ne(() => (
    // No default filter if items are controlled.
    t.items != null || !r ? h : Ts(h, p, r)
  ), [
    h,
    p,
    r,
    t.items
  ]), [B, C] = X(P), T = I("focus"), V = Vn({
    ...t,
    onOpenChange: (ee) => {
      t.onOpenChange && t.onOpenChange(ee, ee ? T.current : void 0), _.setFocused(ee), ee || _.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), F = (ee = null, ce) => {
    let ve = ce === "manual" || ce === "focus" && o === "focus";
    (i || P.size > 0 || ve && E.size > 0 || t.items) && (ve && !V.isOpen && t.items === void 0 && a(!0), T.current = ce, f(ee), V.open());
  }, ue = (ee = null, ce) => {
    let ve = ce === "manual" || ce === "focus" && o === "focus";
    !(i || P.size > 0 || ve && E.size > 0 || t.items) && !V.isOpen || (ve && !V.isOpen && t.items === void 0 && a(!0), V.isOpen || (T.current = ce), y(ee));
  }, ae = te(() => {
    C(u ? E : P);
  }, [
    u,
    E,
    P
  ]), y = te((ee = null) => {
    V.isOpen && ae(), f(ee), V.toggle();
  }, [
    V,
    ae
  ]), D = te(() => {
    V.isOpen && (ae(), V.close());
  }, [
    V,
    ae
  ]), [z, j] = X(p), H = () => {
    var ee, ce;
    let ve = (ce = (ee = h.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ce !== void 0 ? ce : "";
    j(ve), A(ve);
  };
  var Y, U;
  let L = I((U = (Y = t.selectedKey) !== null && Y !== void 0 ? Y : t.defaultSelectedKey) !== null && U !== void 0 ? U : null);
  var N;
  let Z = I((N = (n = h.getItem(w)) === null || n === void 0 ? void 0 : n.textValue) !== null && N !== void 0 ? N : "");
  W(() => {
    var ee;
    c && (P.size > 0 || i) && !V.isOpen && p !== z && o !== "manual" && F(null, "input"), !u && !i && V.isOpen && P.size === 0 && D(), w != null && w !== L.current && D(), p !== z && (_.setFocusedKey(null), a(!1), p === "" && (t.inputValue === void 0 || t.selectedKey === void 0) && S(null)), w !== L.current && (t.inputValue === void 0 || t.selectedKey === void 0) ? H() : z !== p && j(p);
    var ce;
    let ve = (ce = (ee = h.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ce !== void 0 ? ce : "";
    !c && w != null && t.inputValue === void 0 && w === L.current && Z.current !== ve && (j(ve), A(ve)), L.current = w, Z.current = ve;
  });
  let G = On({
    ...t,
    value: ne(() => ({
      inputValue: p,
      selectedKey: w
    }), [
      p,
      w
    ])
  }), J = () => {
    l && w == null ? M() : ye();
  }, M = () => {
    L.current = null, S(null), D();
  }, ye = () => {
    if (t.selectedKey !== void 0 && t.inputValue !== void 0) {
      var ee;
      t.onSelectionChange(w);
      var ce;
      let ve = (ce = (ee = h.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ce !== void 0 ? ce : "";
      j(ve), D();
    } else
      H(), D();
  };
  const Ne = () => {
    if (l) {
      var ee, ce;
      const ve = (ce = (ee = h.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ce !== void 0 ? ce : "";
      p === ve ? ye() : M();
    } else
      ye();
  };
  let mt = () => {
    V.isOpen && _.focusedKey != null ? w === _.focusedKey ? ye() : S(_.focusedKey) : Ne();
  }, or = I(p), ls = (ee) => {
    ee ? (or.current = p, o === "focus" && F(null, "focus")) : (s && Ne(), p !== or.current && G.commitValidation()), d(ee);
  }, ss = ne(() => V.isOpen ? u ? E : P : B, [
    V.isOpen,
    E,
    P,
    u,
    B
  ]);
  return {
    ...G,
    ...V,
    focusStrategy: b,
    toggle: ue,
    open: F,
    close: Ne,
    selectionManager: _,
    selectedKey: w,
    setSelectedKey: S,
    disabledKeys: g,
    isFocused: c,
    setFocused: ls,
    selectedItem: K,
    collection: ss,
    inputValue: p,
    setInputValue: A,
    commit: mt,
    revert: J
  };
}
function Ts(t, e, n) {
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
const _s = Symbol.for("react-aria.i18n.locale"), As = Symbol.for("react-aria.i18n.strings");
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
    return n || (n = Ks(e, this.strings, this.defaultLocale), this.strings[e] = n), n;
  }
  static getGlobalDictionaryForPackage(e) {
    if (typeof window > "u")
      return null;
    let n = window[_s];
    if (He === void 0) {
      let o = window[As];
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
function Ks(t, e, n = "en-US") {
  if (e[t])
    return e[t];
  let r = Ds(t);
  if (e[r])
    return e[r];
  for (let o in e)
    if (o.startsWith(r + "-"))
      return e[o];
  return e[n];
}
function Ds(t) {
  return Intl.Locale ? new Intl.Locale(t).language : t.split("-")[0];
}
const dr = /* @__PURE__ */ new Map(), fr = /* @__PURE__ */ new Map();
class Fs {
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
function Ls(t, e) {
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
        ]).map((c) => l.items.findIndex((d) => r(d) === c)).sort();
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
        ]).map((c) => l.items.findIndex((d) => r(d) === c)).sort();
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
function Ms(t, e) {
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
          var d;
          return {
            ...t,
            filterText: (d = e.filterText) !== null && d !== void 0 ? d : t.filterText,
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
function dd(t) {
  const { load: e, sort: n, initialSelectedKeys: r, initialSortDescriptor: o, getKey: i = (d) => d.id || d.key, initialFilterText: l = "" } = t;
  let [s, u] = us(Ms, {
    state: "idle",
    error: null,
    items: [],
    selectedKeys: r === "all" ? "all" : new Set(r),
    sortDescriptor: o,
    filterText: l
  });
  const a = async (d, b) => {
    let f = new AbortController();
    try {
      u({
        ...d,
        abortController: f
      });
      var v;
      let _ = (v = d.filterText) !== null && v !== void 0 ? v : s.filterText;
      var $;
      let w = await b({
        items: s.items.slice(),
        selectedKeys: s.selectedKeys,
        sortDescriptor: ($ = d.sortDescriptor) !== null && $ !== void 0 ? $ : s.sortDescriptor,
        signal: f.signal,
        cursor: d.type === "loadingMore" ? s.cursor : null,
        filterText: _
      });
      var h;
      let S = (h = w.filterText) !== null && h !== void 0 ? h : _;
      u({
        type: "success",
        ...w,
        abortController: f
      }), S && S !== _ && !f.signal.aborted && a({
        type: "filtering",
        filterText: S
      }, e);
    } catch (_) {
      u({
        type: "error",
        error: _,
        abortController: f
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
    getItem(d) {
      return s.items.find((b) => i(b) === d);
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
    sort(d) {
      a({
        type: "sorting",
        sortDescriptor: d
      }, n || e);
    },
    ...Ls({
      ...t,
      getKey: i,
      cursor: s.cursor
    }, (d) => {
      u({
        type: "update",
        updater: d
      });
    }),
    setFilterText(d) {
      a({
        type: "filtering",
        filterText: d
      }, e);
    }
  };
}
function ks(t) {
  let e = Vn(t), [n, r] = X(null), [o, i] = X([]), l = () => {
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
      i((d) => c > d.length ? d : [
        ...d.slice(0, c),
        a
      ]);
    },
    UNSTABLE_closeSubmenu: (a, c) => {
      i((d) => d[c] === a ? d.slice(0, c) : d);
    }
  };
}
function Ns(t) {
  let e = Vn(t), [n, r] = X(null), o = fo({
    ...t,
    onSelectionChange: (u) => {
      t.onSelectionChange != null && t.onSelectionChange(u), e.close(), i.commitValidation();
    }
  }), i = On({
    ...t,
    value: o.selectedKey
  }), [l, s] = X(!1);
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
class Is {
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
function Bs(t) {
  let [e, n] = tt(t.expandedKeys ? new Set(t.expandedKeys) : void 0, t.defaultExpandedKeys ? new Set(t.defaultExpandedKeys) : /* @__PURE__ */ new Set(), t.onExpandedChange), r = uo(t), o = ne(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), i = so(t, te((s) => new Is(s, {
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
      n(Os(e, s));
    },
    setExpandedKeys: n,
    selectionManager: new ao(i, r)
  };
}
function Os(t, e) {
  let n = new Set(t);
  return n.has(e) ? n.delete(e) : n.add(e), n;
}
const Tt = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, bo = /* @__PURE__ */ Q.createContext(Tt), Rs = /* @__PURE__ */ Q.createContext(!1);
let Vs = !!(typeof window < "u" && window.document && window.document.createElement), nn = /* @__PURE__ */ new WeakMap();
function zs(t = !1) {
  let e = Se(bo), n = I(null);
  if (n.current === null && !t) {
    var r, o;
    let i = (o = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (r = o.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
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
function js(t) {
  let e = Se(bo);
  e === Tt && !Vs && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = zs(!!t), r = e === Tt && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${e.prefix}`;
  return t || `${r}-${n}`;
}
function Hs(t) {
  let e = Q.useId(), [n] = X(Ht()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Tt.prefix}`;
  return t || `${r}-${e}`;
}
const Us = typeof Q.useId == "function" ? Hs : js;
function Ws() {
  return !1;
}
function Gs() {
  return !0;
}
function qs(t) {
  return () => {
  };
}
function Ht() {
  return typeof Q.useSyncExternalStore == "function" ? Q.useSyncExternalStore(qs, Ws, Gs) : Se(Rs);
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
function Ys() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++)
    (t = arguments[n]) && (e = mo(t)) && (r && (r += " "), r += e);
  return r;
}
const de = typeof document < "u" ? Q.useLayoutEffect : () => {
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
function Xs(t) {
  let [e, n] = X(t), r = I(null), o = xe(() => {
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
let Zs = !!(typeof window < "u" && window.document && window.document.createElement), _t = /* @__PURE__ */ new Map();
function Ae(t) {
  let [e, n] = X(t), r = I(null), o = Us(e), i = te((l) => {
    r.current = l;
  }, []);
  return Zs && _t.set(o, i), de(() => {
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
function Js(t, e) {
  if (t === e)
    return t;
  let n = _t.get(t);
  if (n)
    return n(e), e;
  let r = _t.get(e);
  return r ? (r(t), t) : e;
}
function Oe(t = []) {
  let e = Ae(), [n, r] = Xs(e), o = te(() => {
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
function se(...t) {
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
      90 ? e[o] = Qe(i, l) : (o === "className" || o === "UNSAFE_className") && typeof i == "string" && typeof l == "string" ? e[o] = Ys(i, l) : o === "id" && i && l ? e.id = Js(i, l) : e[o] = l !== void 0 ? l : i;
    }
  }
  return e;
}
const Qs = /* @__PURE__ */ new Set([
  "id"
]), eu = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), tu = /* @__PURE__ */ new Set([
  "href",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), nu = /^(data-.*)$/;
function ze(t, e = {}) {
  let { labelable: n, isLink: r, propNames: o } = e, i = {};
  for (const l in t)
    Object.prototype.hasOwnProperty.call(t, l) && (Qs.has(l) || n && eu.has(l) || r && tu.has(l) || o != null && o.has(l) || nu.test(l)) && (i[l] = t[l]);
  return i;
}
function Fe(t) {
  if (ru())
    t.focus({
      preventScroll: !0
    });
  else {
    let e = ou(t);
    t.focus(), iu(e);
  }
}
let ht = null;
function ru() {
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
function ou(t) {
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
function iu(t) {
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
function lu() {
  return zn(/^iPhone/i);
}
function vo() {
  return zn(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Ie() && navigator.maxTouchPoints > 1;
}
function Wt() {
  return lu() || vo();
}
function wt() {
  return Ie() || Wt();
}
function ho() {
  return Ut(/AppleWebKit/i) && !su();
}
function su() {
  return Ut(/Chrome/i);
}
function go() {
  return Ut(/Android/i);
}
function uu() {
  return Ut(/Firefox/i);
}
const au = /* @__PURE__ */ Rt({
  isNative: !0,
  open: du
});
function Gt() {
  return Se(au);
}
function Re(t, e, n = !0) {
  var r, o;
  let { metaKey: i, ctrlKey: l, altKey: s, shiftKey: u } = e;
  uu() && (!((o = window.event) === null || o === void 0 || (r = o.type) === null || r === void 0) && r.startsWith("key")) && t.target === "_blank" && (Ie() ? i = !0 : l = !0);
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
function cu(t, e) {
  if (t instanceof HTMLAnchorElement)
    e(t);
  else if (t.hasAttribute("data-href")) {
    let n = document.createElement("a");
    n.href = t.getAttribute("data-href"), t.hasAttribute("data-target") && (n.target = t.getAttribute("data-target")), t.hasAttribute("data-rel") && (n.rel = t.getAttribute("data-rel")), t.hasAttribute("data-download") && (n.download = t.getAttribute("data-download")), t.hasAttribute("data-ping") && (n.ping = t.getAttribute("data-ping")), t.hasAttribute("data-referrer-policy") && (n.referrerPolicy = t.getAttribute("data-referrer-policy")), t.appendChild(n), e(n), t.removeChild(n);
  }
}
function du(t, e) {
  cu(t, (n) => Re(n, e));
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
function fu() {
  return typeof window.ResizeObserver < "u";
}
function pu(t) {
  const { ref: e, onResize: n } = t;
  W(() => {
    let r = e == null ? void 0 : e.current;
    if (r)
      if (fu()) {
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
let bu = 0;
const rn = /* @__PURE__ */ new Map();
function mu(t) {
  let [e, n] = X(void 0);
  return de(() => {
    if (!t)
      return;
    let r = rn.get(t);
    if (r)
      n(r.element.id);
    else {
      let o = `react-aria-description-${bu++}`;
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
function vu(t, e, n, r) {
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
  let n = mr(t, e, "left"), r = mr(t, e, "top"), o = e.offsetWidth, i = e.offsetHeight, l = t.scrollLeft, s = t.scrollTop, { borderTopWidth: u, borderLeftWidth: a } = getComputedStyle(t), c = t.scrollLeft + parseInt(a, 10), d = t.scrollTop + parseInt(u, 10), b = c + t.clientWidth, f = d + t.clientHeight;
  n <= l ? l = n - parseInt(a, 10) : n + o > b && (l += n + o - b), r <= d ? s = r - parseInt(u, 10) : r + i > f && (s += r + i - f), t.scrollLeft = l, t.scrollTop = s;
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
      let { left: c, top: d } = t.getBoundingClientRect();
      if (Math.abs(u - c) > 1 || Math.abs(a - d) > 1) {
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
function hu(t) {
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
function gu(t, e) {
  return e.get ? e.get.call(t) : e.value;
}
function Po(t, e, n) {
  if (!e.has(t))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return e.get(t);
}
function $u(t, e) {
  var n = Po(t, e, "get");
  return gu(t, n);
}
function yu(t, e, n) {
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
  return yu(t, r, n), n;
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
const jn = Q.createContext({
  register: () => {
  }
});
jn.displayName = "PressResponderContext";
function xu(t) {
  let e = Se(jn);
  if (e) {
    let { register: n, ...r } = e;
    t = se(r, t), n();
  }
  return xo(e, t.ref), t;
}
var $t = /* @__PURE__ */ new WeakMap();
class yt {
  continuePropagation() {
    hr(this, $t, !1);
  }
  get shouldStopPropagation() {
    return $u(this, $t);
  }
  constructor(e, n, r) {
    vs(this, $t, {
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
    ref: d,
    ...b
  } = xu(t), [f, v] = X(!1), $ = I({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: h, removeAllGlobalListeners: _ } = yo(), w = xe((p, A) => {
    let E = $.current;
    if (l || E.didFirePressStart)
      return !1;
    let P = !0;
    if (E.isTriggeringEvent = !0, r) {
      let B = new yt("pressstart", A, p);
      r(B), P = B.shouldStopPropagation;
    }
    return n && n(!0), E.isTriggeringEvent = !1, E.didFirePressStart = !0, v(!0), P;
  }), S = xe((p, A, E = !0) => {
    let P = $.current;
    if (!P.didFirePressStart)
      return !1;
    P.ignoreClickAfterPress = !0, P.didFirePressStart = !1, P.isTriggeringEvent = !0;
    let B = !0;
    if (o) {
      let C = new yt("pressend", A, p);
      o(C), B = C.shouldStopPropagation;
    }
    if (n && n(!1), v(!1), e && E && !l) {
      let C = new yt("press", A, p);
      e(C), B && (B = C.shouldStopPropagation);
    }
    return P.isTriggeringEvent = !1, B;
  }), K = xe((p, A) => {
    let E = $.current;
    if (l)
      return !1;
    if (i) {
      E.isTriggeringEvent = !0;
      let P = new yt("pressup", A, p);
      return i(P), E.isTriggeringEvent = !1, P.shouldStopPropagation;
    }
    return !0;
  }), g = xe((p) => {
    let A = $.current;
    A.isPressed && A.target && (A.isOverTarget && A.pointerType != null && S(Ke(A.target, p), A.pointerType, !1), A.isPressed = !1, A.isOverTarget = !1, A.activePointerId = null, A.pointerType = null, _(), c || gt(A.target));
  }), k = xe((p) => {
    a && g(p);
  }), R = ne(() => {
    let p = $.current, A = {
      onKeyDown(P) {
        if (on(P.nativeEvent, P.currentTarget) && P.currentTarget.contains(P.target)) {
          var B;
          xr(P.target, P.key) && P.preventDefault();
          let C = !0;
          !p.isPressed && !P.repeat && (p.target = P.currentTarget, p.isPressed = !0, C = w(P, "keyboard"), h(pe(P.currentTarget), "keyup", E, !1)), C && P.stopPropagation(), P.metaKey && Ie() && ((B = p.metaKeyEvents) === null || B === void 0 || B.set(P.key, P.nativeEvent));
        } else
          P.key === "Meta" && (p.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onKeyUp(P) {
        on(P.nativeEvent, P.currentTarget) && !P.repeat && P.currentTarget.contains(P.target) && p.target && K(Ke(p.target, P), "keyboard");
      },
      onClick(P) {
        if (!(P && !P.currentTarget.contains(P.target)) && P && P.button === 0 && !p.isTriggeringEvent && !Re.isOpening) {
          let B = !0;
          if (l && P.preventDefault(), !p.ignoreClickAfterPress && !p.ignoreEmulatedMouseEvents && !p.isPressed && (p.pointerType === "virtual" || Tn(P.nativeEvent))) {
            !l && !u && Fe(P.currentTarget);
            let C = w(P, "virtual"), T = K(P, "virtual"), q = S(P, "virtual");
            B = C && T && q;
          }
          p.ignoreEmulatedMouseEvents = !1, p.ignoreClickAfterPress = !1, B && P.stopPropagation();
        }
      }
    }, E = (P) => {
      var B;
      if (p.isPressed && p.target && on(P, p.target)) {
        var C;
        xr(P.target, P.key) && P.preventDefault();
        let q = P.target, V = S(Ke(p.target, P), "keyboard", p.target.contains(q));
        _(), V && P.stopPropagation(), P.key !== "Enter" && Hn(p.target) && p.target.contains(q) && !P[$r] && (P[$r] = !0, Re(p.target, P, !1)), p.isPressed = !1, (C = p.metaKeyEvents) === null || C === void 0 || C.delete(P.key);
      } else if (P.key === "Meta" && (!((B = p.metaKeyEvents) === null || B === void 0) && B.size)) {
        var T;
        let q = p.metaKeyEvents;
        p.metaKeyEvents = void 0;
        for (let V of q.values())
          (T = p.target) === null || T === void 0 || T.dispatchEvent(new KeyboardEvent("keyup", V));
      }
    };
    if (typeof PointerEvent < "u") {
      A.onPointerDown = (T) => {
        if (T.button !== 0 || !T.currentTarget.contains(T.target))
          return;
        if (hu(T.nativeEvent)) {
          p.pointerType = "virtual";
          return;
        }
        ln(T.currentTarget) && T.preventDefault(), p.pointerType = T.pointerType;
        let q = !0;
        p.isPressed || (p.isPressed = !0, p.isOverTarget = !0, p.activePointerId = T.pointerId, p.target = T.currentTarget, !l && !u && Fe(T.currentTarget), c || gr(p.target), q = w(T, p.pointerType), h(pe(T.currentTarget), "pointermove", P, !1), h(pe(T.currentTarget), "pointerup", B, !1), h(pe(T.currentTarget), "pointercancel", C, !1)), q && T.stopPropagation();
      }, A.onMouseDown = (T) => {
        T.currentTarget.contains(T.target) && T.button === 0 && (ln(T.currentTarget) && T.preventDefault(), T.stopPropagation());
      }, A.onPointerUp = (T) => {
        !T.currentTarget.contains(T.target) || p.pointerType === "virtual" || T.button === 0 && Ue(T, T.currentTarget) && K(T, p.pointerType || T.pointerType);
      };
      let P = (T) => {
        T.pointerId === p.activePointerId && (p.target && Ue(T, p.target) ? !p.isOverTarget && p.pointerType != null && (p.isOverTarget = !0, w(Ke(p.target, T), p.pointerType)) : p.target && p.isOverTarget && p.pointerType != null && (p.isOverTarget = !1, S(Ke(p.target, T), p.pointerType, !1), k(T)));
      }, B = (T) => {
        T.pointerId === p.activePointerId && p.isPressed && T.button === 0 && p.target && (Ue(T, p.target) && p.pointerType != null ? S(Ke(p.target, T), p.pointerType) : p.isOverTarget && p.pointerType != null && S(Ke(p.target, T), p.pointerType, !1), p.isPressed = !1, p.isOverTarget = !1, p.activePointerId = null, p.pointerType = null, _(), c || gt(p.target));
      }, C = (T) => {
        g(T);
      };
      A.onDragStart = (T) => {
        T.currentTarget.contains(T.target) && g(T);
      };
    } else {
      A.onMouseDown = (C) => {
        if (C.button !== 0 || !C.currentTarget.contains(C.target))
          return;
        if (ln(C.currentTarget) && C.preventDefault(), p.ignoreEmulatedMouseEvents) {
          C.stopPropagation();
          return;
        }
        p.isPressed = !0, p.isOverTarget = !0, p.target = C.currentTarget, p.pointerType = Tn(C.nativeEvent) ? "virtual" : "mouse", !l && !u && Fe(C.currentTarget), w(C, p.pointerType) && C.stopPropagation(), h(pe(C.currentTarget), "mouseup", P, !1);
      }, A.onMouseEnter = (C) => {
        if (!C.currentTarget.contains(C.target))
          return;
        let T = !0;
        p.isPressed && !p.ignoreEmulatedMouseEvents && p.pointerType != null && (p.isOverTarget = !0, T = w(C, p.pointerType)), T && C.stopPropagation();
      }, A.onMouseLeave = (C) => {
        if (!C.currentTarget.contains(C.target))
          return;
        let T = !0;
        p.isPressed && !p.ignoreEmulatedMouseEvents && p.pointerType != null && (p.isOverTarget = !1, T = S(C, p.pointerType, !1), k(C)), T && C.stopPropagation();
      }, A.onMouseUp = (C) => {
        C.currentTarget.contains(C.target) && !p.ignoreEmulatedMouseEvents && C.button === 0 && K(C, p.pointerType || "mouse");
      };
      let P = (C) => {
        if (C.button === 0) {
          if (p.isPressed = !1, _(), p.ignoreEmulatedMouseEvents) {
            p.ignoreEmulatedMouseEvents = !1;
            return;
          }
          p.target && Ue(C, p.target) && p.pointerType != null ? S(Ke(p.target, C), p.pointerType) : p.target && p.isOverTarget && p.pointerType != null && S(Ke(p.target, C), p.pointerType, !1), p.isOverTarget = !1;
        }
      };
      A.onTouchStart = (C) => {
        if (!C.currentTarget.contains(C.target))
          return;
        let T = Cu(C.nativeEvent);
        if (!T)
          return;
        p.activePointerId = T.identifier, p.ignoreEmulatedMouseEvents = !0, p.isOverTarget = !0, p.isPressed = !0, p.target = C.currentTarget, p.pointerType = "touch", !l && !u && Fe(C.currentTarget), c || gr(p.target), w(C, p.pointerType) && C.stopPropagation(), h(at(C.currentTarget), "scroll", B, !0);
      }, A.onTouchMove = (C) => {
        if (!C.currentTarget.contains(C.target))
          return;
        if (!p.isPressed) {
          C.stopPropagation();
          return;
        }
        let T = yr(C.nativeEvent, p.activePointerId), q = !0;
        T && Ue(T, C.currentTarget) ? !p.isOverTarget && p.pointerType != null && (p.isOverTarget = !0, q = w(C, p.pointerType)) : p.isOverTarget && p.pointerType != null && (p.isOverTarget = !1, q = S(C, p.pointerType, !1), k(C)), q && C.stopPropagation();
      }, A.onTouchEnd = (C) => {
        if (!C.currentTarget.contains(C.target))
          return;
        if (!p.isPressed) {
          C.stopPropagation();
          return;
        }
        let T = yr(C.nativeEvent, p.activePointerId), q = !0;
        T && Ue(T, C.currentTarget) && p.pointerType != null ? (K(C, p.pointerType), q = S(C, p.pointerType)) : p.isOverTarget && p.pointerType != null && (q = S(C, p.pointerType, !1)), q && C.stopPropagation(), p.isPressed = !1, p.activePointerId = null, p.isOverTarget = !1, p.ignoreEmulatedMouseEvents = !0, p.target && !c && gt(p.target), _();
      }, A.onTouchCancel = (C) => {
        C.currentTarget.contains(C.target) && (C.stopPropagation(), p.isPressed && g(C));
      };
      let B = (C) => {
        p.isPressed && C.target.contains(p.target) && g({
          currentTarget: p.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      A.onDragStart = (C) => {
        C.currentTarget.contains(C.target) && g(C);
      };
    }
    return A;
  }, [
    h,
    l,
    u,
    _,
    c,
    g,
    k,
    S,
    w,
    K
  ]);
  return W(() => () => {
    var p;
    c || gt((p = $.current.target) !== null && p !== void 0 ? p : void 0);
  }, [
    c
  ]), {
    isPressed: s || f,
    pressProps: se(b, R)
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
function Cu(t) {
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
function Eu(t) {
  let e = 0, n = 0;
  return t.width !== void 0 ? e = t.width / 2 : t.radiusX !== void 0 && (e = t.radiusX), t.height !== void 0 ? n = t.height / 2 : t.radiusY !== void 0 && (n = t.radiusY), {
    top: t.clientY - n,
    right: t.clientX + e,
    bottom: t.clientY + n,
    left: t.clientX - e
  };
}
function Pu(t, e) {
  return !(t.left > e.right || e.left > t.right || t.top > e.bottom || e.top > t.bottom);
}
function Ue(t, e) {
  let n = e.getBoundingClientRect(), r = Eu(t);
  return Pu(n, r);
}
function ln(t) {
  return !(t instanceof HTMLElement) || !t.hasAttribute("draggable");
}
function xr(t, e) {
  return t instanceof HTMLInputElement ? !wo(t, e) : t instanceof HTMLButtonElement ? t.type !== "submit" && t.type !== "reset" : !Hn(t);
}
const wu = /* @__PURE__ */ new Set([
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
  return t.type === "checkbox" || t.type === "radio" ? e === " " : wu.has(t.type);
}
function Su({ children: t }) {
  let e = ne(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ Q.createElement(jn.Provider, {
    value: e
  }, t);
}
class Tu {
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
        e.current.isFocused = !1, o.disabled && n(new Tu("blur", l)), e.current.observer && (e.current.observer.disconnect(), e.current.observer = null);
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
const _u = {
  Tab: !0,
  Escape: !0
};
function Yt(t, e) {
  for (let n of ct)
    n(t, e);
}
function Au(t) {
  return !(t.metaKey || !Ie() && t.altKey || t.ctrlKey || t.key === "Control" || t.key === "Shift" || t.key === "Meta");
}
function Er(t) {
  Ve = !0, Au(t) && (ke = "keyboard", Yt("keyboard", t));
}
function We(t) {
  ke = "pointer", (t.type === "mousedown" || t.type === "pointerdown") && (Ve = !0, Yt("pointer", t));
}
function Ku(t) {
  Tn(t) && (Ve = !0, ke = "virtual");
}
function Du(t) {
  t.target === window || t.target === document || (!Ve && !An && (ke = "virtual", Yt("virtual", t)), Ve = !1, An = !1);
}
function Fu() {
  Ve = !1, An = !0;
}
function Ft() {
  if (typeof window > "u" || Cr)
    return;
  let t = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    Ve = !0, t.apply(this, arguments);
  }, document.addEventListener("keydown", Er, !0), document.addEventListener("keyup", Er, !0), document.addEventListener("click", Ku, !0), window.addEventListener("focus", Du, !0), window.addEventListener("blur", Fu, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", We, !0), document.addEventListener("pointermove", We, !0), document.addEventListener("pointerup", We, !0)) : (document.addEventListener("mousedown", We, !0), document.addEventListener("mousemove", We, !0), document.addEventListener("mouseup", We, !0)), Cr = !0;
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
function Lu() {
  Ft();
  let [t, e] = X(ke);
  return W(() => {
    let n = () => {
      e(ke);
    };
    return ct.add(n), () => {
      ct.delete(n);
    };
  }, []), Ht() ? null : t;
}
const Mu = /* @__PURE__ */ new Set([
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
function ku(t, e, n) {
  var r;
  return t = t || (n == null ? void 0 : n.target) instanceof HTMLInputElement && !Mu.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof HTMLTextAreaElement || (n == null ? void 0 : n.target) instanceof HTMLElement && (n == null ? void 0 : n.target.isContentEditable), !(t && e === "keyboard" && n instanceof KeyboardEvent && !_u[n.key]);
}
function Nu(t, e, n) {
  Ft(), W(() => {
    let r = (o, i) => {
      ku(!!(n != null && n.isTextInput), o, i) && t(dt());
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
function Iu() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Pr) : document.addEventListener("touchend", Dn), sn++, () => {
      sn--, !(sn > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Pr) : document.removeEventListener("touchend", Dn));
    };
}
function _o(t) {
  let { onHoverStart: e, onHoverChange: n, onHoverEnd: r, isDisabled: o } = t, [i, l] = X(!1), s = I({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  W(Iu, []);
  let { hoverProps: u, triggerHoverEnd: a } = ne(() => {
    let c = (f, v) => {
      if (s.pointerType = v, o || v === "touch" || s.isHovered || !f.currentTarget.contains(f.target))
        return;
      s.isHovered = !0;
      let $ = f.currentTarget;
      s.target = $, e && e({
        type: "hoverstart",
        target: $,
        pointerType: v
      }), n && n(!0), l(!0);
    }, d = (f, v) => {
      if (s.pointerType = "", s.target = null, v === "touch" || !s.isHovered)
        return;
      s.isHovered = !1;
      let $ = f.currentTarget;
      r && r({
        type: "hoverend",
        target: $,
        pointerType: v
      }), n && n(!1), l(!1);
    }, b = {};
    return typeof PointerEvent < "u" ? (b.onPointerEnter = (f) => {
      Lt && f.pointerType === "mouse" || c(f, f.pointerType);
    }, b.onPointerLeave = (f) => {
      !o && f.currentTarget.contains(f.target) && d(f, f.pointerType);
    }) : (b.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, b.onMouseEnter = (f) => {
      !s.ignoreEmulatedMouseEvents && !Lt && c(f, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, b.onMouseLeave = (f) => {
      !o && f.currentTarget.contains(f.target) && d(f, "mouse");
    }), {
      hoverProps: b,
      triggerHoverEnd: d
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
function Bu(t) {
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
      let d = (b) => {
        u.isPointerDown && xt(b, e) && s(b), u.isPointerDown = !1;
      };
      return c.addEventListener("pointerdown", l, !0), c.addEventListener("pointerup", d, !0), () => {
        c.removeEventListener("pointerdown", l, !0), c.removeEventListener("pointerup", d, !0);
      };
    } else {
      let d = (f) => {
        u.ignoreEmulatedMouseEvents ? u.ignoreEmulatedMouseEvents = !1 : u.isPointerDown && xt(f, e) && s(f), u.isPointerDown = !1;
      }, b = (f) => {
        u.ignoreEmulatedMouseEvents = !0, u.isPointerDown && xt(f, e) && s(f), u.isPointerDown = !1;
      };
      return c.addEventListener("mousedown", l, !0), c.addEventListener("mouseup", d, !0), c.addEventListener("touchstart", l, !0), c.addEventListener("touchend", b, !0), () => {
        c.removeEventListener("mousedown", l, !0), c.removeEventListener("mouseup", d, !0), c.removeEventListener("touchstart", l, !0), c.removeEventListener("touchend", b, !0);
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
const Ou = 500;
function Ko(t) {
  let { isDisabled: e, onLongPressStart: n, onLongPressEnd: r, onLongPress: o, threshold: i = Ou, accessibilityDescription: l } = t;
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
        let f = (v) => {
          v.preventDefault();
        };
        u(b.target, "contextmenu", f, {
          once: !0
        }), u(window, "pointerup", () => {
          setTimeout(() => {
            a(b.target, "contextmenu", f);
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
  }), d = mu(o && !e ? l : void 0);
  return {
    longPressProps: se(c, d)
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
function Ru(t) {
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
function Vu(t, e) {
  return !t.hasAttribute("hidden") && (t.nodeName === "DETAILS" && e && e.nodeName !== "SUMMARY" ? t.hasAttribute("open") : !0);
}
function Do(t, e) {
  return t.nodeName !== "#comment" && Ru(t) && Vu(t, e) && (!t.parentElement || Do(t.parentElement, t));
}
const Sr = /* @__PURE__ */ Q.createContext(null);
let le = null;
function zu(t) {
  let { children: e, contain: n, restoreFocus: r, autoFocus: o } = t, i = I(null), l = I(null), s = I([]), { parentNode: u } = Se(Sr) || {}, a = ne(() => new Fn({
    scopeRef: s
  }), [
    s
  ]);
  de(() => {
    let b = u || me.root;
    if (me.getTreeNode(b.scopeRef) && le && !kt(le, b.scopeRef)) {
      let f = me.getTreeNode(le);
      f && (b = f);
    }
    b.addChild(a), me.addNode(a);
  }, [
    a,
    u
  ]), de(() => {
    let b = me.getTreeNode(s);
    b && (b.contain = !!n);
  }, [
    n
  ]), de(() => {
    var b;
    let f = (b = i.current) === null || b === void 0 ? void 0 : b.nextSibling, v = [];
    for (; f && f !== l.current; )
      v.push(f), f = f.nextSibling;
    s.current = v;
  }, [
    e
  ]), Yu(s, r, n), Wu(s, n), Zu(s, r, n), qu(s, o), W(() => {
    const b = pe(s.current ? s.current[0] : void 0).activeElement;
    let f = null;
    if (ge(b, s.current)) {
      for (let v of me.traverse())
        v.scopeRef && ge(b, v.scopeRef.current) && (f = v);
      f === me.getTreeNode(s) && (le = f.scopeRef);
    }
  }, [
    s
  ]), de(() => () => {
    var b, f, v;
    let $ = (v = (f = me.getTreeNode(s)) === null || f === void 0 || (b = f.parent) === null || b === void 0 ? void 0 : b.scopeRef) !== null && v !== void 0 ? v : null;
    (s === le || kt(s, le)) && (!$ || me.getTreeNode($)) && (le = $), me.removeTreeNode(s);
  }, [
    s
  ]);
  let c = ne(() => ju(s), []), d = ne(() => ({
    focusManager: c,
    parentNode: a
  }), [
    a,
    c
  ]);
  return /* @__PURE__ */ Q.createElement(Sr.Provider, {
    value: d
  }, /* @__PURE__ */ Q.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: i
  }), e, /* @__PURE__ */ Q.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: l
  }));
}
function ju(t) {
  return {
    focusNext(e = {}) {
      let n = t.current, { from: r, tabbable: o, wrap: i, accept: l } = e, s = r || pe(n[0]).activeElement, u = n[0].previousElementSibling, a = Be(n), c = Me(a, {
        tabbable: o,
        accept: l
      }, n);
      c.currentNode = ge(s, n) ? s : u;
      let d = c.nextNode();
      return !d && i && (c.currentNode = u, d = c.nextNode()), d && Le(d, !0), d;
    },
    focusPrevious(e = {}) {
      let n = t.current, { from: r, tabbable: o, wrap: i, accept: l } = e, s = r || pe(n[0]).activeElement, u = n[n.length - 1].nextElementSibling, a = Be(n), c = Me(a, {
        tabbable: o,
        accept: l
      }, n);
      c.currentNode = ge(s, n) ? s : u;
      let d = c.previousNode();
      return !d && i && (c.currentNode = u, d = c.previousNode()), d && Le(d, !0), d;
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
], Hu = Wn.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Wn.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const Uu = Wn.join(':not([hidden]):not([tabindex="-1"]),');
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
function Wu(t, e) {
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
      let c = i.activeElement, d = t.current;
      if (!d || !ge(c, d))
        return;
      let b = Be(d), f = Me(b, {
        tabbable: !0
      }, d);
      if (!c)
        return;
      f.currentNode = c;
      let v = a.shiftKey ? f.previousNode() : f.nextNode();
      v || (f.currentNode = a.shiftKey ? d[d.length - 1].nextElementSibling : d[0].previousElementSibling, v = a.shiftKey ? f.previousNode() : f.nextNode()), a.preventDefault(), v && Le(v, !0);
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
function Gu(t) {
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
function qu(t, e) {
  const n = Q.useRef(e);
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
function Yu(t, e, n) {
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
function Xu(t) {
  let e = me.getTreeNode(le);
  for (; e && e.scopeRef !== t; ) {
    if (e.nodeToRestore)
      return !1;
    e = e.parent;
  }
  return (e == null ? void 0 : e.scopeRef) === t;
}
function Zu(t, e, n) {
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
      let d = l.shiftKey ? c.previousNode() : c.nextNode();
      if ((!a || !o.body.contains(a) || a === o.body) && (a = void 0, u.nodeToRestore = void 0), (!d || !ge(d, t.current)) && a) {
        c.currentNode = a;
        do
          d = l.shiftKey ? c.previousNode() : c.nextNode();
        while (ge(d, t.current));
        l.preventDefault(), l.stopPropagation(), d ? Le(d, !0) : Fo(a) ? Le(a, !0) : s.blur();
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
        (ge(o.activeElement, t.current) || o.activeElement === o.body && Xu(t))) {
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
                if (c.scopeRef && c.scopeRef.current && me.getTreeNode(c.scopeRef)) {
                  Nt(c.scopeRef.current, !0);
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
  let r = e != null && e.tabbable ? Uu : Hu, o = pe(t).createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
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
  }), [i, l] = X(!1), [s, u] = X(() => o.current.isFocused && o.current.isFocusVisible), a = te(() => u(o.current.isFocused && o.current.isFocusVisible), []), c = te((f) => {
    o.current.isFocused = f, l(f), a();
  }, [
    a
  ]);
  Nu((f) => {
    o.current.isFocusVisible = f, a();
  }, [], {
    isTextInput: n
  });
  let { focusProps: d } = Un({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: b } = Xt({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? b : d
  };
}
let Ju = /* @__PURE__ */ Q.createContext(null);
function Qu(t) {
  let e = Se(Ju) || {};
  xo(e, t);
  let { ref: n, ...r } = e;
  return r;
}
function Lo(t, e) {
  let { focusProps: n } = Un(t), { keyboardProps: r } = Ao(t), o = se(n, r), i = Qu(e), l = t.isDisabled ? {} : i, s = I(t.autoFocus);
  return W(() => {
    s.current && e.current && ft(e.current), s.current = !1;
  }, [
    e
  ]), {
    focusableProps: se({
      ...o,
      tabIndex: t.excludeFromTabOrder && !t.isDisabled ? -1 : void 0
    }, l)
  };
}
const ea = /* @__PURE__ */ new Set([
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
]), ta = /* @__PURE__ */ new Set([
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
function na(t) {
  if (Intl.Locale) {
    let n = new Intl.Locale(t).maximize(), r = typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo;
    if (r)
      return r.direction === "rtl";
    if (n.script)
      return ea.has(n.script);
  }
  let e = t.split("-")[0];
  return ta.has(e);
}
const ra = Symbol.for("react-aria.i18n.locale");
function Mo() {
  let t = typeof window < "u" && window[ra] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      t
    ]);
  } catch {
    t = "en-US";
  }
  return {
    locale: t,
    direction: na(t) ? "rtl" : "ltr"
  };
}
let Ln = Mo(), st = /* @__PURE__ */ new Set();
function Tr() {
  Ln = Mo();
  for (let t of st)
    t(Ln);
}
function oa() {
  let t = Ht(), [e, n] = X(Ln);
  return W(() => (st.size === 0 && window.addEventListener("languagechange", Tr), st.add(n), () => {
    st.delete(n), st.size === 0 && window.removeEventListener("languagechange", Tr);
  }), []), t ? {
    locale: "en-US",
    direction: "ltr"
  } : e;
}
const ia = /* @__PURE__ */ Q.createContext(null);
function Zt() {
  let t = oa();
  return Se(ia) || t;
}
const _r = /* @__PURE__ */ new WeakMap();
function la(t) {
  let e = _r.get(t);
  return e || (e = new jt(t), _r.set(t, e)), e;
}
function sa(t, e) {
  return e && jt.getGlobalDictionaryForPackage(e) || la(t);
}
function Yn(t, e) {
  let { locale: n } = Zt(), r = sa(t, e);
  return ne(() => new Fs(n, r), [
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
function ua(t) {
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
  return ne(() => ({
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
    onClick: d,
    href: b,
    target: f,
    rel: v,
    type: $ = "button"
  } = t, h;
  n === "button" ? h = {
    type: $,
    disabled: r
  } : h = {
    role: "button",
    tabIndex: r ? void 0 : 0,
    href: n === "a" && r ? void 0 : b,
    target: n === "a" ? f : void 0,
    type: n === "input" ? $ : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? v : void 0
  };
  let { pressProps: _, isPressed: w } = qt({
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
  let K = se(S, _, ze(t, {
    labelable: !0
  }));
  return {
    isPressed: w,
    buttonProps: se(h, K, {
      "aria-haspopup": t["aria-haspopup"],
      "aria-expanded": t["aria-expanded"],
      "aria-controls": t["aria-controls"],
      "aria-pressed": t["aria-pressed"],
      onClick: (g) => {
        d && (d(g), console.warn("onClick is deprecated, please use onPress"));
      }
    })
  };
}
const No = 7e3;
let an = null;
function cn(t, e = "assertive", n = No) {
  an || (an = new aa()), an.announce(t, e, n);
}
class aa {
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
      n.current.setCustomValidity(u), n.current.hasAttribute("title") || (n.current.title = ""), e.realtimeValidation.isInvalid || e.updateValidation(da(n.current));
    }
  });
  let i = xe(() => {
    e.resetValidation();
  }), l = xe((u) => {
    var a;
    e.displayValidation.isInvalid || e.commitValidation();
    let c = n == null || (a = n.current) === null || a === void 0 ? void 0 : a.form;
    if (!u.defaultPrevented && n && c && fa(c) === n.current) {
      var d;
      o ? o() : (d = n.current) === null || d === void 0 || d.focus(), To("keyboard");
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
function ca(t) {
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
function da(t) {
  return {
    isInvalid: !t.validity.valid,
    validationDetails: ca(t),
    validationErrors: t.validationMessage ? [
      t.validationMessage
    ] : []
  };
}
function fa(t) {
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
  return l = se(l, {
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
  let { style: e, isFocusable: n } = t, [r, o] = X(!1), { focusWithinProps: i } = Xt({
    isDisabled: !n,
    onFocusWithinChange: (s) => o(s)
  }), l = ne(() => r ? e : e ? {
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
function pa(t) {
  let { children: e, elementType: n = "div", isFocusable: r, style: o, ...i } = t, { visuallyHiddenProps: l } = el(t);
  return /* @__PURE__ */ Q.createElement(n, se(i, l), e);
}
function ba(t) {
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
}, ma = {
  top: "left",
  left: "top"
}, Mn = {
  top: "height",
  left: "width"
}, va = {
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
function ha(t) {
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
function ga(t) {
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
  let [e, n] = t.split(" "), r = Kr[e] || "right", o = ma[r];
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
  let { placement: c, crossPlacement: d, axis: b, crossAxis: f, size: v, crossSize: $ } = r, h = {};
  h[f] = t[f], d === "center" ? h[f] += (t[$] - n[$]) / 2 : d !== f && (h[f] += t[$] - n[$]), h[f] += i;
  const _ = t[f] - n[$] + u + a, w = t[f] + t[$] - u - a;
  if (h[f] = Cn(h[f], _, w), c === b) {
    const S = s ? l[v] : e[va[v]];
    h[It[b]] = Math.floor(S - t[b] + o);
  } else
    h[b] = Math.floor(t[b] + t[v] + o);
  return h;
}
function $a(t, e, n, r, o, i) {
  return t.top != null ? Math.max(0, e.height + e.top + e.scroll.top - (n.top + t.top) - (o.top + o.bottom + i)) : Math.max(0, r.top + n.top - (e.top + e.scroll.top) - (o.top + o.bottom + i));
}
function Mr(t, e, n, r, o, i) {
  let { placement: l, axis: s, size: u } = i;
  return l === s ? Math.max(0, n[s] - t[s] - t.scroll[s] + e[s] - r[s] - r[It[s]] - o) : Math.max(0, t[u] + t[s] + t.scroll[s] - e[s] - n[s] - n[u] - r[s] - r[It[s]] - o);
}
function ya(t, e, n, r, o, i, l, s, u, a, c, d, b, f, v, $) {
  let h = Lr(t), { size: _, crossAxis: w, crossSize: S, placement: K, crossPlacement: g } = h, k = dn(e, s, n, h, c, d, a, b, v, $), R = c, p = Mr(s, a, e, o, i + c, h);
  if (l && r[_] > p) {
    let ue = Lr(`${It[K]} ${g}`), ae = dn(e, s, n, ue, c, d, a, b, v, $);
    Mr(s, a, e, o, i + c, ue) > p && (h = ue, k = ae, R = c);
  }
  let A = Fr(w, k[w], n[S], s, u, i);
  k[w] += A;
  let E = $a(k, s, a, e, o, i);
  f && f < E && (E = f), n.height = Math.min(n.height, E), k = dn(e, s, n, h, R, d, a, b, v, $), A = Fr(w, k[w], n[S], s, u, i), k[w] += A;
  let P = {}, B = e[w] + 0.5 * e[S] - n[w];
  const C = v / 2 + $, T = n[S] - v / 2 - $, q = e[w] - n[w] + v / 2, V = e[w] + e[S] - n[w] - v / 2, F = Cn(B, q, V);
  return P[w] = Cn(F, C, T), {
    position: k,
    maxHeight: E,
    arrowOffsetLeft: P.left,
    arrowOffsetTop: P.top,
    placement: h.placement
  };
}
function xa(t) {
  let { placement: e, targetNode: n, overlayNode: r, scrollNode: o, padding: i, shouldFlip: l, boundaryElement: s, offset: u, crossOffset: a, maxHeight: c, arrowSize: d = 0, arrowBoundaryOffset: b = 0 } = t, f = r instanceof HTMLElement ? Ca(r) : document.documentElement, v = f === document.documentElement;
  const $ = window.getComputedStyle(f).position;
  let h = !!$ && $ !== "static", _ = v ? Je(n) : kr(n, f);
  if (!v) {
    let { marginTop: p, marginLeft: A } = window.getComputedStyle(n);
    _.top += parseInt(p, 10) || 0, _.left += parseInt(A, 10) || 0;
  }
  let w = Je(r), S = ga(r);
  w.width += S.left + S.right, w.height += S.top + S.bottom;
  let K = ha(o), g = Dr(s), k = Dr(f), R = s.tagName === "BODY" ? Je(f) : kr(f, s);
  return ya(e, _, w, K, S, i, l, g, k, R, u, a, h, c, d, b);
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
function Ca(t) {
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
function Ea(t) {
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
function Pa(t) {
  let { direction: e } = Zt(), { arrowSize: n = 0, targetRef: r, overlayRef: o, scrollRef: i = o, placement: l = "bottom", containerPadding: s = 12, shouldFlip: u = !0, boundaryElement: a = typeof document < "u" ? document.body : null, offset: c = 0, crossOffset: d = 0, shouldUpdatePosition: b = !0, isOpen: f = !0, onClose: v, maxHeight: $, arrowBoundaryOffset: h = 0 } = t, [_, w] = X({
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
    d,
    f,
    e,
    $,
    h,
    n
  ], K = te(() => {
    if (b === !1 || !f || !o.current || !r.current || !i.current || !a)
      return;
    let R = xa({
      placement: Sa(l, e),
      overlayNode: o.current,
      targetNode: r.current,
      scrollNode: i.current,
      padding: s,
      shouldFlip: u,
      boundaryElement: a,
      offset: c,
      crossOffset: d,
      maxHeight: $,
      arrowSize: n,
      arrowBoundaryOffset: h
    });
    Object.keys(R.position).forEach((p) => o.current.style[p] = R.position[p] + "px"), o.current.style.maxHeight = R.maxHeight != null ? R.maxHeight + "px" : void 0, w(R);
  }, S);
  de(K, S), wa(K), pu({
    ref: o,
    onResize: K
  });
  let g = I(!1);
  de(() => {
    let R, p = () => {
      g.current = !0, clearTimeout(R), R = setTimeout(() => {
        g.current = !1;
      }, 500), K();
    };
    return Ee == null || Ee.addEventListener("resize", p), Ee == null || Ee.addEventListener("scroll", p), () => {
      Ee == null || Ee.removeEventListener("resize", p), Ee == null || Ee.removeEventListener("scroll", p);
    };
  }, [
    K
  ]);
  let k = te(() => {
    g.current || v();
  }, [
    v,
    g
  ]);
  return Ea({
    triggerRef: r,
    isOpen: f,
    onClose: v && k
  }), {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ..._.position,
        maxHeight: _.maxHeight
      }
    },
    placement: _.placement,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: _.arrowOffsetLeft,
        top: _.arrowOffsetTop
      }
    },
    updatePosition: K
  };
}
function wa(t) {
  de(() => (window.addEventListener("resize", t, !1), () => {
    window.removeEventListener("resize", t, !1);
  }), [
    t
  ]);
}
function Sa(t, e) {
  return e === "rtl" ? t.replace("start", "right").replace("end", "left") : t.replace("start", "left").replace("end", "right");
}
const De = [];
function Ta(t, e) {
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
  }, d = (v) => {
    v.key === "Escape" && !l && (v.stopPropagation(), v.preventDefault(), u());
  };
  Bu({
    ref: e,
    onInteractOutside: i && o ? c : null,
    onInteractOutsideStart: a
  });
  let { focusWithinProps: b } = Xt({
    isDisabled: !r,
    onBlurWithin: (v) => {
      !v.relatedTarget || Gu(v.relatedTarget) || (!s || s(v.relatedTarget)) && n();
    }
  }), f = (v) => {
    v.target === v.currentTarget && v.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: d,
      ...b
    },
    underlayProps: {
      onPointerDown: f
    }
  };
}
function _a(t, e, n) {
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
const fn = typeof document < "u" && window.visualViewport, Aa = /* @__PURE__ */ new Set([
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
function Ka(t = {}) {
  let { isDisabled: e } = t;
  de(() => {
    if (!e)
      return Et++, Et === 1 && (Wt() ? pn = Fa() : pn = Da()), () => {
        Et--, Et === 0 && pn();
      };
  }, [
    e
  ]);
}
function Da() {
  return Qe(Ze(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Ze(document.documentElement, "overflow", "hidden"));
}
function Fa() {
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
    }, c = window.pageXOffset, d = window.pageYOffset;
    l = Qe(ot(window, "scroll", a), Ze(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Ze(document.documentElement, "overflow", "hidden"), Ze(document.body, "marginTop", `-${d}px`), () => {
      window.scrollTo(c, d);
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
  return t instanceof HTMLInputElement && !Aa.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable;
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
  let { onDismiss: e, ...n } = t, r = Yn(/* @__PURE__ */ ba(nl), "@react-aria/overlays"), o = At(n, r.format("dismiss")), i = () => {
    e && e();
  };
  return /* @__PURE__ */ Q.createElement(pa, null, /* @__PURE__ */ Q.createElement("button", {
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
      for (let f of n)
        if (b.contains(f))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, c = document.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, {
      acceptNode: a
    }), d = a(u);
    if (d === NodeFilter.FILTER_ACCEPT && i(u), d !== NodeFilter.FILTER_REJECT) {
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
function La(t, e) {
  let { triggerRef: n, popoverRef: r, isNonModal: o, isKeyboardDismissDisabled: i, shouldCloseOnInteractOutside: l, ...s } = t, { overlayProps: u, underlayProps: a } = Ta({
    isOpen: e.isOpen,
    onClose: e.close,
    shouldCloseOnBlur: !0,
    isDismissable: !o,
    isKeyboardDismissDisabled: i,
    shouldCloseOnInteractOutside: l
  }, r), { overlayProps: c, arrowProps: d, placement: b } = Pa({
    ...s,
    targetRef: n,
    overlayRef: r,
    isOpen: e.isOpen,
    onClose: o ? e.close : null
  });
  return Ka({
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
    popoverProps: se(u, c),
    arrowProps: d,
    underlayProps: a,
    placement: b
  };
}
const Ma = /* @__PURE__ */ Q.createContext(null);
function ka(t) {
  let e = Ht(), { portalContainer: n = e ? null : document.body, isExiting: r } = t, [o, i] = X(!1), l = ne(() => ({
    contain: o,
    setContain: i
  }), [
    o,
    i
  ]);
  if (!n)
    return null;
  let s = t.children;
  return t.disableFocusManagement || (s = /* @__PURE__ */ Q.createElement(zu, {
    restoreFocus: !0,
    contain: o && !r
  }, s)), s = /* @__PURE__ */ Q.createElement(Ma.Provider, {
    value: l
  }, /* @__PURE__ */ Q.createElement(Su, null, s)), /* @__PURE__ */ Bn.createPortal(s, n);
}
function kn(t) {
  return wt() ? t.altKey : t.ctrlKey;
}
function Ye(t) {
  return Ie() ? t.metaKey : t.ctrlKey;
}
const Na = 1e3;
function ol(t) {
  let { keyboardDelegate: e, selectionManager: n, onTypeSelect: r } = t, o = I({
    search: "",
    timeout: null
  }).current, i = (l) => {
    let s = Ia(l.key);
    if (!s || l.ctrlKey || l.metaKey || !l.currentTarget.contains(l.target))
      return;
    s === " " && o.search.trim().length > 0 && (l.preventDefault(), "continuePropagation" in l || l.stopPropagation()), o.search += s;
    let u = e.getKeyForSearch(o.search, n.focusedKey);
    u == null && (u = e.getKeyForSearch(o.search)), u != null && (n.setFocusedKey(u), r && r(u)), clearTimeout(o.timeout), o.timeout = setTimeout(() => {
      o.search = "";
    }, Na);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: e.getKeyForSearch ? i : null
    }
  };
}
function Ia(t) {
  return t.length === 1 || !/^[A-Z]/i.test(t) ? t : "";
}
function il(t) {
  let { selectionManager: e, keyboardDelegate: n, ref: r, autoFocus: o = !1, shouldFocusWrap: i = !1, disallowEmptySelection: l = !1, disallowSelectAll: s = !1, selectOnFocus: u = e.selectionBehavior === "replace", disallowTypeAhead: a = !1, shouldUseVirtualFocus: c, allowsTabNavigation: d = !1, isVirtualized: b, scrollRef: f = r, linkBehavior: v = "action" } = t, { direction: $ } = Zt(), h = Gt(), _ = (E) => {
    if (E.altKey && E.key === "Tab" && E.preventDefault(), !r.current.contains(E.target))
      return;
    const P = (y, D) => {
      if (y != null) {
        if (e.isLink(y) && v === "selection" && u && !kn(E)) {
          as(() => {
            e.setFocusedKey(y, D);
          });
          let z = f.current.querySelector(`[data-key="${CSS.escape(y.toString())}"]`);
          h.open(z, E);
          return;
        }
        if (e.setFocusedKey(y, D), e.isLink(y) && v === "override")
          return;
        E.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(y) : u && !kn(E) && e.replaceSelection(y);
      }
    };
    switch (E.key) {
      case "ArrowDown":
        if (n.getKeyBelow) {
          var B, C;
          E.preventDefault();
          let y = e.focusedKey != null ? n.getKeyBelow(e.focusedKey) : (B = n.getFirstKey) === null || B === void 0 ? void 0 : B.call(n);
          y == null && i && (y = (C = n.getFirstKey) === null || C === void 0 ? void 0 : C.call(n, e.focusedKey)), P(y);
        }
        break;
      case "ArrowUp":
        if (n.getKeyAbove) {
          var T, q;
          E.preventDefault();
          let y = e.focusedKey != null ? n.getKeyAbove(e.focusedKey) : (T = n.getLastKey) === null || T === void 0 ? void 0 : T.call(n);
          y == null && i && (y = (q = n.getLastKey) === null || q === void 0 ? void 0 : q.call(n, e.focusedKey)), P(y);
        }
        break;
      case "ArrowLeft":
        if (n.getKeyLeftOf) {
          var V, F;
          E.preventDefault();
          let y = n.getKeyLeftOf(e.focusedKey);
          y == null && i && (y = $ === "rtl" ? (V = n.getFirstKey) === null || V === void 0 ? void 0 : V.call(n, e.focusedKey) : (F = n.getLastKey) === null || F === void 0 ? void 0 : F.call(n, e.focusedKey)), P(y, $ === "rtl" ? "first" : "last");
        }
        break;
      case "ArrowRight":
        if (n.getKeyRightOf) {
          var ue, ae;
          E.preventDefault();
          let y = n.getKeyRightOf(e.focusedKey);
          y == null && i && (y = $ === "rtl" ? (ue = n.getLastKey) === null || ue === void 0 ? void 0 : ue.call(n, e.focusedKey) : (ae = n.getFirstKey) === null || ae === void 0 ? void 0 : ae.call(n, e.focusedKey)), P(y, $ === "rtl" ? "last" : "first");
        }
        break;
      case "Home":
        if (n.getFirstKey) {
          E.preventDefault();
          let y = n.getFirstKey(e.focusedKey, Ye(E));
          e.setFocusedKey(y), Ye(E) && E.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(y) : u && e.replaceSelection(y);
        }
        break;
      case "End":
        if (n.getLastKey) {
          E.preventDefault();
          let y = n.getLastKey(e.focusedKey, Ye(E));
          e.setFocusedKey(y), Ye(E) && E.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(y) : u && e.replaceSelection(y);
        }
        break;
      case "PageDown":
        if (n.getKeyPageBelow) {
          E.preventDefault();
          let y = n.getKeyPageBelow(e.focusedKey);
          P(y);
        }
        break;
      case "PageUp":
        if (n.getKeyPageAbove) {
          E.preventDefault();
          let y = n.getKeyPageAbove(e.focusedKey);
          P(y);
        }
        break;
      case "a":
        Ye(E) && e.selectionMode === "multiple" && s !== !0 && (E.preventDefault(), e.selectAll());
        break;
      case "Escape":
        E.preventDefault(), l || e.clearSelection();
        break;
      case "Tab":
        if (!d) {
          if (E.shiftKey)
            r.current.focus();
          else {
            let y = Me(r.current, {
              tabbable: !0
            }), D, z;
            do
              z = y.lastChild(), z && (D = z);
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
  vu(f, "scroll", b ? null : () => {
    w.current = {
      top: f.current.scrollTop,
      left: f.current.scrollLeft
    };
  });
  let S = (E) => {
    if (e.isFocused) {
      E.currentTarget.contains(E.target) || e.setFocused(!1);
      return;
    }
    if (E.currentTarget.contains(E.target)) {
      if (e.setFocused(!0), e.focusedKey == null) {
        let C = (q) => {
          q != null && (e.setFocusedKey(q), u && e.replaceSelection(q));
        }, T = E.relatedTarget;
        var P, B;
        T && E.currentTarget.compareDocumentPosition(T) & Node.DOCUMENT_POSITION_FOLLOWING ? C((P = e.lastSelectedKey) !== null && P !== void 0 ? P : n.getLastKey()) : C((B = e.firstSelectedKey) !== null && B !== void 0 ? B : n.getFirstKey());
      } else
        b || (f.current.scrollTop = w.current.top, f.current.scrollLeft = w.current.left);
      if (!b && e.focusedKey != null) {
        let C = f.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);
        C && (C.contains(document.activeElement) || Fe(C), Kn() === "keyboard" && vr(C, {
          containingElement: r.current
        }));
      }
    }
  }, K = (E) => {
    E.currentTarget.contains(E.relatedTarget) || e.setFocused(!1);
  };
  const g = I(o);
  W(() => {
    if (g.current) {
      let E = null;
      o === "first" && (E = n.getFirstKey()), o === "last" && (E = n.getLastKey());
      let P = e.selectedKeys;
      if (P.size) {
        for (let B of P)
          if (e.canSelectItem(B)) {
            E = B;
            break;
          }
      }
      e.setFocused(!0), e.setFocusedKey(E), E == null && !c && ft(r.current);
    }
  }, []);
  let k = I(e.focusedKey);
  W(() => {
    let E = Kn();
    if (e.isFocused && e.focusedKey != null && (f != null && f.current)) {
      let P = f.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);
      P && (E === "keyboard" || g.current) && (b || Co(f.current, P), vr(P, {
        containingElement: r.current
      }));
    }
    e.isFocused && e.focusedKey == null && k.current != null && ft(r.current), k.current = e.focusedKey, g.current = !1;
  }, [
    b,
    f,
    e.focusedKey,
    e.isFocused,
    r
  ]);
  let R = {
    onKeyDown: _,
    onFocus: S,
    onBlur: K,
    onMouseDown(E) {
      f.current === E.target && E.preventDefault();
    }
  }, { typeSelectProps: p } = ol({
    keyboardDelegate: n,
    selectionManager: e
  });
  a || (R = se(p, R));
  let A;
  return c || (A = e.focusedKey == null ? 0 : -1), {
    collectionProps: {
      ...R,
      tabIndex: A
    }
  };
}
function ll(t) {
  let { selectionManager: e, key: n, ref: r, shouldSelectOnPressUp: o, shouldUseVirtualFocus: i, focus: l, isDisabled: s, onAction: u, allowsDifferentPressOrigin: a, linkBehavior: c = "action" } = t, d = Gt(), b = (F) => {
    if (F.pointerType === "keyboard" && kn(F))
      e.toggleSelection(n);
    else {
      if (e.selectionMode === "none")
        return;
      if (e.isLink(n)) {
        if (c === "selection") {
          d.open(r.current, F), e.setSelectedKeys(e.selectedKeys);
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
  let f = {};
  !i && !s ? f = {
    tabIndex: n === e.focusedKey ? 0 : -1,
    onFocus(F) {
      F.target === r.current && e.setFocusedKey(n);
    }
  } : s && (f.onMouseDown = (F) => {
    F.preventDefault();
  });
  let v = e.isLink(n) && c === "override", $ = e.isLink(n) && c !== "selection" && c !== "none", h = !s && e.canSelectItem(n) && !v, _ = (u || $) && !s, w = _ && (e.selectionBehavior === "replace" ? !h : !h || e.isEmpty), S = _ && h && e.selectionBehavior === "replace", K = w || S, g = I(null), k = K && h, R = I(!1), p = I(!1), A = (F) => {
    u && u(), $ && d.open(r.current, F);
  }, E = {};
  o ? (E.onPressStart = (F) => {
    g.current = F.pointerType, R.current = k, F.pointerType === "keyboard" && (!K || Vr()) && b(F);
  }, a ? (E.onPressUp = w ? null : (F) => {
    F.pointerType !== "keyboard" && h && b(F);
  }, E.onPress = w ? A : null) : E.onPress = (F) => {
    if (w || S && F.pointerType !== "mouse") {
      if (F.pointerType === "keyboard" && !Rr())
        return;
      A(F);
    } else
      F.pointerType !== "keyboard" && h && b(F);
  }) : (E.onPressStart = (F) => {
    g.current = F.pointerType, R.current = k, p.current = w, h && (F.pointerType === "mouse" && !w || F.pointerType === "keyboard" && (!_ || Vr())) && b(F);
  }, E.onPress = (F) => {
    (F.pointerType === "touch" || F.pointerType === "pen" || F.pointerType === "virtual" || F.pointerType === "keyboard" && K && Rr() || F.pointerType === "mouse" && p.current) && (K ? A(F) : h && b(F));
  }), f["data-key"] = n, E.preventFocusOnPress = i;
  let { pressProps: P, isPressed: B } = qt(E), C = S ? (F) => {
    g.current === "mouse" && (F.stopPropagation(), F.preventDefault(), A(F));
  } : void 0, { longPressProps: T } = Ko({
    isDisabled: !k,
    onLongPress(F) {
      F.pointerType === "touch" && (b(F), e.setSelectionBehavior("toggle"));
    }
  }), q = (F) => {
    g.current === "touch" && R.current && F.preventDefault();
  }, V = e.isLink(n) ? (F) => {
    Re.isOpening || F.preventDefault();
  } : void 0;
  return {
    itemProps: se(f, h || w ? P : {}, k ? T : {}, {
      onDoubleClick: C,
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
  }), s = e.disabledBehavior, u = ne(() => i || new Zn(n, s === "selection" ? /* @__PURE__ */ new Set() : r, o, l), [
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
function Ba(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function ul(t, e) {
  let n = Jt.get(t);
  if (!n)
    throw new Error("Unknown list");
  return `${n.id}-option-${Ba(e)}`;
}
function Oa(t, e, n) {
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
    listBoxProps: se(r, s, e.selectionManager.selectionMode === "multiple" ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...se(c, l)
    })
  };
}
function Ra(t, e, n) {
  var r;
  let { key: o } = t, i = Jt.get(e);
  var l;
  let s = (l = t.isDisabled) !== null && l !== void 0 ? l : e.disabledKeys.has(o);
  var u;
  let a = (u = t.isSelected) !== null && u !== void 0 ? u : e.selectionManager.isSelected(o);
  var c;
  let d = (c = t.shouldSelectOnPressUp) !== null && c !== void 0 ? c : i == null ? void 0 : i.shouldSelectOnPressUp;
  var b;
  let f = (b = t.shouldFocusOnHover) !== null && b !== void 0 ? b : i == null ? void 0 : i.shouldFocusOnHover;
  var v;
  let $ = (v = t.shouldUseVirtualFocus) !== null && v !== void 0 ? v : i == null ? void 0 : i.shouldUseVirtualFocus;
  var h;
  let _ = (h = t.isVirtualized) !== null && h !== void 0 ? h : i == null ? void 0 : i.isVirtualized, w = Oe(), S = Oe(), K = {
    role: "option",
    "aria-disabled": s || void 0,
    "aria-selected": e.selectionManager.selectionMode !== "none" ? a : void 0
  };
  Ie() && ho() || (K["aria-label"] = t["aria-label"], K["aria-labelledby"] = w, K["aria-describedby"] = S);
  let g = e.collection.getItem(o);
  if (_) {
    let C = Number(g == null ? void 0 : g.index);
    K["aria-posinset"] = Number.isNaN(C) ? void 0 : C + 1, K["aria-setsize"] = Rn(e.collection);
  }
  let { itemProps: k, isPressed: R, isFocused: p, hasAction: A, allowsSelection: E } = ll({
    selectionManager: e.selectionManager,
    key: o,
    ref: n,
    shouldSelectOnPressUp: d,
    allowsDifferentPressOrigin: d && f,
    isVirtualized: _,
    shouldUseVirtualFocus: $,
    isDisabled: s,
    onAction: i != null && i.onAction ? () => {
      var C;
      return i == null || (C = i.onAction) === null || C === void 0 ? void 0 : C.call(i, o);
    } : void 0,
    linkBehavior: i == null ? void 0 : i.linkBehavior
  }), { hoverProps: P } = _o({
    isDisabled: s || !f,
    onHoverStart() {
      dt() || (e.selectionManager.setFocused(!0), e.selectionManager.setFocusedKey(o));
    }
  }), B = ze(g == null ? void 0 : g.props, {
    isLink: !!(!(g == null || (r = g.props) === null || r === void 0) && r.href)
  });
  return delete B.id, {
    optionProps: {
      ...K,
      ...se(B, k, P),
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
    allowsSelection: E,
    hasAction: A
  };
}
function Va(t) {
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
function za(t) {
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
  let { type: r = "menu", isDisabled: o, trigger: i = "press" } = t, l = Ae(), { triggerProps: s, overlayProps: u } = _a({
    type: r
  }, e, n), a = (f) => {
    if (!o && !(i === "longPress" && !f.altKey) && n && n.current)
      switch (f.key) {
        case "Enter":
        case " ":
          if (i === "longPress")
            return;
        case "ArrowDown":
          "continuePropagation" in f || f.stopPropagation(), f.preventDefault(), e.toggle("first");
          break;
        case "ArrowUp":
          "continuePropagation" in f || f.stopPropagation(), f.preventDefault(), e.toggle("last");
          break;
        default:
          "continuePropagation" in f && f.continuePropagation();
      }
  }, c = Yn(/* @__PURE__ */ za(jl), "@react-aria/menu"), { longPressProps: d } = Ko({
    isDisabled: o || i !== "longPress",
    accessibilityDescription: c.format("longPressMessage"),
    onLongPressStart() {
      e.close();
    },
    onLongPress() {
      e.open("first");
    }
  }), b = {
    onPressStart(f) {
      f.pointerType !== "touch" && f.pointerType !== "keyboard" && !o && e.toggle(f.pointerType === "virtual" ? "first" : null);
    },
    onPress(f) {
      f.pointerType === "touch" && !o && e.toggle();
    }
  };
  return delete s.onPress, {
    menuTriggerProps: {
      ...s,
      ...i === "press" ? b : d,
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
function ja(t, e, n) {
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
    menuProps: se(s, {
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
function Ha(t, e, n) {
  var r;
  let { key: o, closeOnSelect: i, isVirtualized: l, "aria-haspopup": s, onPressStart: u, onPressUp: a, onPress: c, onPressChange: d, onPressEnd: b, onHoverStart: f, onHoverChange: v, onHoverEnd: $, onKeyDown: h, onKeyUp: _, onFocus: w, onFocusChange: S, onBlur: K } = t, g = !!s;
  var k;
  let R = (k = t.isDisabled) !== null && k !== void 0 ? k : e.disabledKeys.has(o);
  var p;
  let A = (p = t.isSelected) !== null && p !== void 0 ? p : e.selectionManager.isSelected(o), E = Hl.get(e), P = t.onClose || E.onClose, B = g ? () => {
  } : t.onAction || E.onAction, C = Gt(), T = (J) => {
    B && B(o), J.target instanceof HTMLAnchorElement && C.open(J.target, J);
  }, q = "menuitem";
  g || (e.selectionManager.selectionMode === "single" ? q = "menuitemradio" : e.selectionManager.selectionMode === "multiple" && (q = "menuitemcheckbox"));
  let V = Oe(), F = Oe(), ue = Oe(), ae = {
    "aria-disabled": R || void 0,
    role: q,
    "aria-label": t["aria-label"],
    "aria-labelledby": V,
    "aria-describedby": [
      F,
      ue
    ].filter(Boolean).join(" ") || void 0,
    "aria-controls": t["aria-controls"],
    "aria-haspopup": s,
    "aria-expanded": t["aria-expanded"]
  };
  e.selectionManager.selectionMode !== "none" && !g && (ae["aria-checked"] = A);
  let y = e.collection.getItem(o);
  l && (ae["aria-posinset"] = y == null ? void 0 : y.index, ae["aria-setsize"] = Rn(e.collection));
  let D = (J) => {
    J.pointerType === "keyboard" && T(J), u == null || u(J);
  }, z = (J) => {
    J.pointerType !== "keyboard" && (T(J), !g && P && (i ?? (e.selectionManager.selectionMode !== "multiple" || e.selectionManager.isLink(o))) && P()), a == null || a(J);
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
    onPressChange: d,
    onPressEnd: b,
    isDisabled: R
  }), { hoverProps: L } = _o({
    isDisabled: R,
    onHoverStart(J) {
      dt() || (e.selectionManager.setFocused(!0), e.selectionManager.setFocusedKey(o)), f == null || f(J);
    },
    onHoverChange: v,
    onHoverEnd: $
  }), { keyboardProps: N } = Ao({
    onKeyDown: (J) => {
      if (J.repeat) {
        J.continuePropagation();
        return;
      }
      switch (J.key) {
        case " ":
          !R && e.selectionManager.selectionMode === "none" && !g && i !== !1 && P && P();
          break;
        case "Enter":
          !R && i !== !1 && !g && P && P();
          break;
        default:
          g || J.continuePropagation(), h == null || h(J);
          break;
      }
    },
    onKeyUp: _
  }), { focusProps: Z } = Un({
    onBlur: K,
    onFocus: w,
    onFocusChange: S
  }), G = ze(y.props, {
    isLink: !!(!(y == null || (r = y.props) === null || r === void 0) && r.href)
  });
  return delete G.id, {
    menuItemProps: {
      ...ae,
      ...se(G, g ? {
        onFocus: j.onFocus
      } : j, Y, L, N, Z),
      tabIndex: j.tabIndex != null ? -1 : void 0
    },
    labelProps: {
      id: V
    },
    descriptionProps: {
      id: F
    },
    keyboardShortcutProps: {
      id: ue
    },
    isFocused: H,
    isSelected: A,
    isPressed: U,
    isDisabled: R
  };
}
function Ua(t) {
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
function Wa(t, e) {
  let { inputElementType: n = "input", isDisabled: r = !1, isRequired: o = !1, isReadOnly: i = !1, type: l = "text", validationBehavior: s = "aria" } = t, [u, a] = tt(t.value, t.defaultValue || "", t.onChange), { focusableProps: c } = Lo(t, e), d = On({
    ...t,
    value: u
  }), { isInvalid: b, validationErrors: f, validationDetails: v } = d.displayValidation, { labelProps: $, fieldProps: h, descriptionProps: _, errorMessageProps: w } = Oo({
    ...t,
    isInvalid: b,
    errorMessage: t.errorMessage || f
  }), S = ze(t, {
    labelable: !0
  });
  const K = {
    type: l,
    pattern: t.pattern
  };
  return Eo(e, u, a), Io(t, d, e), W(() => {
    if (e.current instanceof at(e.current).HTMLTextAreaElement) {
      let g = e.current;
      Object.defineProperty(g, "defaultValue", {
        get: () => g.value,
        set: () => {
        },
        configurable: !0
      });
    }
  }, [
    e
  ]), {
    labelProps: $,
    inputProps: se(S, n === "input" && K, {
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
      onChange: (g) => a(g.target.value),
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
    descriptionProps: _,
    errorMessageProps: w,
    isInvalid: b,
    validationErrors: f,
    validationDetails: v
  };
}
function Ga(t) {
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
function qa(t, e) {
  let { buttonRef: n, popoverRef: r, inputRef: o, listBoxRef: i, keyboardDelegate: l, shouldFocusWrap: s, isReadOnly: u, isDisabled: a } = t, c = Yn(/* @__PURE__ */ Ga(Ul), "@react-aria/combobox"), { menuTriggerProps: d, menuProps: b } = Jn({
    type: "listbox",
    isDisabled: a || u
  }, e, n);
  Jt.set(e, {
    id: b.id
  });
  let f = ne(() => l || new Zn(e.collection, e.disabledKeys, i), [
    l,
    e.collection,
    e.disabledKeys,
    i
  ]), { collectionProps: v } = il({
    selectionManager: e.selectionManager,
    keyboardDelegate: f,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: s,
    ref: o,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), $ = Gt(), h = (L) => {
    switch (L.key) {
      case "Enter":
      case "Tab":
        if (e.isOpen && L.key === "Enter" && L.preventDefault(), e.isOpen && e.selectionManager.focusedKey != null && e.selectionManager.isLink(e.selectionManager.focusedKey)) {
          if (L.key === "Enter") {
            let N = i.current.querySelector(`[data-key="${CSS.escape(e.selectionManager.focusedKey.toString())}"]`);
            N instanceof HTMLAnchorElement && $.open(N, L);
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
  }, _ = (L) => {
    var N;
    L.relatedTarget === (n == null ? void 0 : n.current) || !((N = r.current) === null || N === void 0) && N.contains(L.relatedTarget) || (t.onBlur && t.onBlur(L), e.setFocused(!1));
  }, w = (L) => {
    e.isFocused || (t.onFocus && t.onFocus(L), e.setFocused(!0));
  }, { isInvalid: S, validationErrors: K, validationDetails: g } = e.displayValidation, { labelProps: k, inputProps: R, descriptionProps: p, errorMessageProps: A } = Wa({
    ...t,
    onChange: e.setInputValue,
    onKeyDown: u ? t.onKeyDown : Qe(e.isOpen && v.onKeyDown, h, t.onKeyDown),
    onBlur: _,
    value: e.inputValue,
    onFocus: w,
    autoComplete: "off",
    validate: void 0,
    [En]: e
  }, o), E = (L) => {
    L.pointerType === "touch" && (o.current.focus(), e.toggle(null, "manual"));
  }, P = (L) => {
    L.pointerType !== "touch" && (o.current.focus(), e.toggle(L.pointerType === "keyboard" || L.pointerType === "virtual" ? "first" : null, "manual"));
  }, B = At({
    id: d.id,
    "aria-label": c.format("buttonLabel"),
    "aria-labelledby": t["aria-labelledby"] || k.id
  }), C = At({
    id: b.id,
    "aria-label": c.format("listboxLabel"),
    "aria-labelledby": t["aria-labelledby"] || k.id
  }), T = I(0), q = (L) => {
    if (a || u)
      return;
    if (L.timeStamp - T.current < 500) {
      L.preventDefault(), o.current.focus();
      return;
    }
    let N = L.target.getBoundingClientRect(), Z = L.changedTouches[0], G = Math.ceil(N.left + 0.5 * N.width), J = Math.ceil(N.top + 0.5 * N.height);
    Z.clientX === G && Z.clientY === J && (L.preventDefault(), o.current.focus(), e.toggle(null, "manual"), T.current = L.timeStamp);
  }, V = e.selectionManager.focusedKey != null && e.isOpen ? e.collection.getItem(e.selectionManager.focusedKey) : void 0;
  var F;
  let ue = (F = V == null ? void 0 : V.parentKey) !== null && F !== void 0 ? F : null;
  var ae;
  let y = (ae = e.selectionManager.focusedKey) !== null && ae !== void 0 ? ae : null, D = I(ue), z = I(y);
  W(() => {
    if (wt() && V != null && y !== z.current) {
      let L = e.selectionManager.isSelected(y), N = ue != null ? e.collection.getItem(ue) : null, Z = (N == null ? void 0 : N["aria-label"]) || (typeof (N == null ? void 0 : N.rendered) == "string" ? N.rendered : "") || "", G = c.format("focusAnnouncement", {
        isGroupChange: N && ue !== D.current,
        groupTitle: Z,
        groupCount: N ? [
          ...zt(N, e.collection)
        ].length : 0,
        optionText: V["aria-label"] || V.textValue || "",
        isSelected: L
      });
      cn(G);
    }
    D.current = ue, z.current = y;
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
    labelProps: k,
    buttonProps: {
      ...d,
      ...B,
      excludeFromTabOrder: !0,
      onPress: E,
      onPressStart: P,
      isDisabled: a || u
    },
    inputProps: se(R, {
      role: "combobox",
      "aria-expanded": d["aria-expanded"],
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
    listBoxProps: se(b, C, {
      autoFocus: e.focusStrategy,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection"
    }),
    descriptionProps: p,
    errorMessageProps: A,
    isInvalid: S,
    validationErrors: K,
    validationDetails: g
  };
}
const Wl = /* @__PURE__ */ new WeakMap();
function Ya(t, e, n) {
  let { keyboardDelegate: r, isDisabled: o, isRequired: i, name: l, validationBehavior: s = "aria" } = t, u = Xn({
    usage: "search",
    sensitivity: "base"
  }), a = ne(() => r || new Zn(e.collection, e.disabledKeys, null, u), [
    r,
    e.collection,
    e.disabledKeys,
    u
  ]), { menuTriggerProps: c, menuProps: d } = Jn({
    isDisabled: o,
    type: "listbox"
  }, e, n), b = (p) => {
    switch (p.key) {
      case "ArrowLeft": {
        p.preventDefault();
        let A = e.selectedKey != null ? a.getKeyAbove(e.selectedKey) : a.getFirstKey();
        A && e.setSelectedKey(A);
        break;
      }
      case "ArrowRight": {
        p.preventDefault();
        let A = e.selectedKey != null ? a.getKeyBelow(e.selectedKey) : a.getFirstKey();
        A && e.setSelectedKey(A);
        break;
      }
    }
  }, { typeSelectProps: f } = ol({
    keyboardDelegate: a,
    selectionManager: e.selectionManager,
    onTypeSelect(p) {
      e.setSelectedKey(p);
    }
  }), { isInvalid: v, validationErrors: $, validationDetails: h } = e.displayValidation, { labelProps: _, fieldProps: w, descriptionProps: S, errorMessageProps: K } = Oo({
    ...t,
    labelElementType: "span",
    isInvalid: v,
    errorMessage: t.errorMessage || $
  });
  f.onKeyDown = f.onKeyDownCapture, delete f.onKeyDownCapture;
  let g = ze(t, {
    labelable: !0
  }), k = se(f, c, w), R = Ae();
  return Wl.set(e, {
    isDisabled: o,
    isRequired: i,
    name: l,
    validationBehavior: s
  }), {
    labelProps: {
      ..._,
      onClick: () => {
        t.isDisabled || (n.current.focus(), To("keyboard"));
      }
    },
    triggerProps: se(g, {
      ...k,
      isDisabled: o,
      onKeyDown: Qe(k.onKeyDown, b, t.onKeyDown),
      onKeyUp: t.onKeyUp,
      "aria-labelledby": [
        R,
        k["aria-labelledby"],
        k["aria-label"] && !k["aria-labelledby"] ? k.id : null
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
      ...d,
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
        k["aria-label"] && !w["aria-labelledby"] ? k.id : null
      ].filter(Boolean).join(" ")
    },
    descriptionProps: S,
    errorMessageProps: K,
    isInvalid: v,
    validationErrors: $,
    validationDetails: h
  };
}
function Xa(t, e, n) {
  let r = Wl.get(e) || {}, { autoComplete: o, name: i = r.name, isDisabled: l = r.isDisabled } = t, { validationBehavior: s, isRequired: u } = r, a = Lu(), { visuallyHiddenProps: c } = el();
  Eo(t.selectRef, e.selectedKey, e.setSelectedKey), Io({
    validationBehavior: s,
    focus: () => n.current.focus()
  }, e, t.selectRef);
  var d;
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
      value: (d = e.selectedKey) !== null && d !== void 0 ? d : "",
      onChange: (b) => e.setSelectedKey(b.target.value)
    }
  };
}
function Za(t) {
  let { state: e, triggerRef: n, label: r, name: o, isDisabled: i } = t, l = I(null), { containerProps: s, inputProps: u, selectProps: a } = Xa({
    ...t,
    selectRef: l
  }, e, n);
  var c;
  return e.collection.size <= 300 ? /* @__PURE__ */ Q.createElement("div", {
    ...s,
    "data-testid": "hidden-select-container"
  }, /* @__PURE__ */ Q.createElement("input", u), /* @__PURE__ */ Q.createElement("label", null, r, /* @__PURE__ */ Q.createElement("select", {
    ...a,
    ref: l
  }, /* @__PURE__ */ Q.createElement("option", null), [
    ...e.collection.getKeys()
  ].map((d) => {
    let b = e.collection.getItem(d);
    if (b.type === "item")
      return /* @__PURE__ */ Q.createElement("option", {
        key: b.key,
        value: b.key
      }, b.textValue);
  })))) : o ? /* @__PURE__ */ Q.createElement("input", {
    type: "hidden",
    autoComplete: a.autoComplete,
    name: o,
    disabled: i,
    value: (c = e.selectedKey) !== null && c !== void 0 ? c : ""
  }) : null;
}
const Ja = "_focused_1af8e_1", Qa = "_listbox_1af8e_10", ec = "_content_1af8e_89", tc = "_description_1af8e_98", nc = "_uppercase_1af8e_126", rc = "_divider_1af8e_130", Ce = {
  focused: Ja,
  listbox: Qa,
  "listbox-top": "_listbox-top_1af8e_35",
  "listbox-bottom": "_listbox-bottom_1af8e_39",
  "listbox-content": "_listbox-content_1af8e_43",
  "listbox-section-list": "_listbox-section-list_1af8e_51",
  "listbox-section": "_listbox-section_1af8e_51",
  "listbox-item": "_listbox-item_1af8e_61",
  content: ec,
  description: tc,
  uppercase: nc,
  divider: rc,
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
}, Gl = Rt({}), fd = ({
  children: t,
  routerComponent: e,
  extendRequiredFieldsLabelsWith: n = /* @__PURE__ */ m("span", { style: { color: "var(--text-default-error)" }, children: " *" }),
  extendOptionalFieldsLabelsWith: r = " (optionel)",
  defaultLang: o = "fr",
  verbose: i = !1
}) => {
  const [l, s] = X(window.localStorage.getItem("locale") || o), [u, a] = X(!1);
  W(() => {
    const b = async () => {
      var h;
      (h = window == null ? void 0 : window.dsfr) != null && h.isStarted || (window.dsfr = {
        verbose: i,
        mode: "manual"
      }, await import("./dsfr.module.min-23ae5258.js"), await import("./utility-251e9615.js"), await import("./dsfr-4e49221c.js"), window.dsfr.start(), a(!0));
    }, f = window.matchMedia("(prefers-color-scheme: dark)"), v = f != null && f.matches ? "dark" : "light", $ = window.localStorage.getItem("theme");
    document.documentElement.setAttribute("data-fr-scheme", $ || v), b();
  }, []);
  const c = te((b) => {
    window.localStorage.setItem("locale", b), document.documentElement.setAttribute("lang", b), s(b);
  }, []), d = ne(() => ({
    setLocale: c,
    routerComponent: e,
    locale: l,
    extendRequiredFieldsLabelsWith: n,
    extendOptionalFieldsLabelsWith: r
  }), [e, c, l, n, r]);
  return /* @__PURE__ */ m(Gl.Provider, { value: d, children: u ? t : null });
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
      className: x({
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
  const n = I(null), { optionProps: r, descriptionProps: o, labelProps: i, isFocused: l, isFocusVisible: s } = Ra({ key: t.key }, e, n), { description: u, startContent: a, endContent: c, color: d, showDivider: b, href: f, className: v } = t.props || {};
  return /* @__PURE__ */ O(
    f ? he : "li",
    {
      ...r,
      ref: n,
      href: f,
      className: x(
        Ce["listbox-item"],
        v,
        {
          [Ce[`listbox-item--${d}`]]: d,
          [Ce.divider]: b,
          "fr-enlarge-link": f,
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
function oc({ section: t, state: e }) {
  const { itemProps: n, headingProps: r, groupProps: o } = Va({
    heading: t.rendered,
    "aria-label": t["aria-label"]
  }), { showDivider: i, className: l, css: s = {} } = t.props || {}, u = [...t.childNodes].find((a) => a.props.href) ? "div" : "ul";
  return /* @__PURE__ */ O(
    "li",
    {
      ...n,
      className: x(
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
            className: x(
              "fr-text-mention--grey fr-text--sm fr-my-1w fr-px-1w",
              s.title
            ),
            children: t.rendered
          }
        ),
        /* @__PURE__ */ m(u, { ...o, className: x(Ce["listbox-section-list"], s.list), children: [...t.childNodes].map((a) => /* @__PURE__ */ m(
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
  var v, $;
  const e = I(null), { listBoxRef: n = e, state: r, className: o, css: i = {}, color: l, topContent: s, bottomContent: u, ...a } = t, { listBoxProps: c } = Oa(a, r, n), { isFocusVisible: d } = qn(), b = [...r.collection].find((h) => h.props.href) ? "div" : "ul", f = (($ = (v = t == null ? void 0 : t.triggerRef) == null ? void 0 : v.current) == null ? void 0 : $.offsetWidth) || 0;
  return /* @__PURE__ */ O("div", { className: x(Ce.listbox, o, i.base), style: { minWidth: f || "auto", maxWidth: f > 150 ? f : "auto" }, children: [
    /* @__PURE__ */ m("span", { className: x(Ce["listbox-top"], i.top), children: s && s }),
    /* @__PURE__ */ m(
      b,
      {
        className: x(Ce["listbox-content"], i.list, { [Ce[`listbox--${l}`]]: l }),
        ref: n,
        "data-focus-visible": d,
        ...c,
        children: [...r.collection].map((h) => h.type === "section" ? /* @__PURE__ */ ir(oc, { ...h.props, key: h.key, section: h, state: r }) : /* @__PURE__ */ ir(ql, { ...h.props, key: h.key, item: h, state: r }))
      }
    ),
    /* @__PURE__ */ m("span", { className: x(Ce["listbox-bottom"], i.bottom), children: u && u })
  ] });
}
const ic = "_popover_1g6m6_1", lc = {
  popover: ic
};
function er({ children: t, state: e, ...n }) {
  const r = I(null), { isNonModal: o = !1, popoverRef: i = r } = n, { popoverProps: l, underlayProps: s } = La({
    ...n,
    popoverRef: i
  }, e);
  return /* @__PURE__ */ O(ka, { children: [
    !o && /* @__PURE__ */ m("div", { ...s, style: { position: "fixed", inset: 0 } }),
    /* @__PURE__ */ O(
      "div",
      {
        ...l,
        ref: i,
        className: lc.popover,
        children: [
          !o && /* @__PURE__ */ m(Or, { onDismiss: e.close }),
          t,
          /* @__PURE__ */ m(Or, { onDismiss: e.close })
        ]
      }
    )
  ] });
}
const sc = "_spinner_1m2vp_5", uc = "_internal_1m2vp_27", zr = {
  spinner: sc,
  "internal-circle": "_internal-circle_1m2vp_27",
  internal: uc
};
function ac({ size: t = 24 }) {
  const e = ie();
  return W(() => {
    var n, r;
    (n = document == null ? void 0 : document.getElementById(e)) == null || n.style.setProperty("width", `${t}px`), (r = document == null ? void 0 : document.getElementById(e)) == null || r.style.setProperty("height", `${t}px`);
  }, [t, e]), /* @__PURE__ */ m("svg", { id: e, className: zr.spinner, viewBox: "0 0 120 120", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ m("circle", { className: zr["internal-circle"], cx: "60", cy: "60", r: "30" }) });
}
function cc(t) {
  const { contains: e } = ua({ sensitivity: "base" }), n = Ss({
    ...t,
    defaultFilter: e,
    allowsCustomValue: !0
  }), r = vt.useRef(null), o = vt.useRef(null), i = vt.useRef(null), l = vt.useRef(null), { size: s = "md", color: u, onSubmit: a, topContent: c, bottomContent: d, ...b } = t, { inputProps: f, listBoxProps: v } = qa(
    {
      ...b,
      inputRef: r,
      listBoxRef: o,
      popoverRef: i,
      onKeyUp: ($) => {
        var h;
        $.key === "Enter" && ($.preventDefault(), (h = t.onSubmit) == null || h.call(t, n.inputValue));
      }
    },
    n
  );
  return /* @__PURE__ */ O("form", { onSubmit: () => a == null ? void 0 : a((t == null ? void 0 : t.inputValue) || ""), ref: l, className: x("fr-search-bar", { "fr-search-bar--lg": s === "lg" }), role: "search", children: [
    /* @__PURE__ */ m(
      "input",
      {
        ...f,
        type: "search",
        ref: r,
        className: "fr-input"
      }
    ),
    /* @__PURE__ */ O("button", { type: "submit", style: { position: "relative" }, className: x("fr-btn", { "fr-btn--lg": s === "lg" }), children: [
      /* @__PURE__ */ m("div", { style: { position: "absolute", left: "-40px" }, children: t.loadingState === "loading" && /* @__PURE__ */ m(ac, {}) }),
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
            bottomContent: d
          }
        )
      }
    )
  ] });
}
const pd = Vt;
const dc = be, fc = dc(
  ({ as: t, className: e, noIcon: n, color: r = "blue-france", size: o, icon: i, variant: l = "primary", ...s }, u) => {
    const a = t === "a" ? he : t || "p", c = x(
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
), bd = ({
  children: t,
  className: e,
  ...n
}) => {
  const r = ie(), o = x("fr-badges-group", e);
  return /* @__PURE__ */ m("ul", { className: o, ...n, children: fe(t, fc).map((i, l) => /* @__PURE__ */ m("li", { children: i }, `${r}-${l}`)) });
}, md = ({
  buttonLabel: t = "Voir le fil d’Ariane",
  children: e,
  className: n,
  css: r = {},
  ...o
}) => {
  const i = ie();
  return /* @__PURE__ */ O("nav", { role: "navigation", "aria-label": o["aria-label"] || "vous êtes ici:", className: x("fr-breadcrumb", n), ...o, children: [
    /* @__PURE__ */ m("button", { className: x("fr-breadcrumb__button", r.button), "aria-expanded": "false", "aria-controls": "breadcrumb-1", children: t || "Voir le fil d’Ariane" }),
    /* @__PURE__ */ m("div", { className: "fr-collapse", id: "breadcrumb-1", children: /* @__PURE__ */ m("ol", { className: x("fr-breadcrumb__list", r.list), children: fe(e, he).filter((l) => $e(l)).map((l, s, { length: u }) => /* @__PURE__ */ m("li", { className: x(r.item), children: _e(l, {
      className: x("fr-breadcrumb__link"),
      "aria-current": s + 1 === u ? "page" : void 0
    }) }, `${i}-${s}`)) }) })
  ] });
};
const pc = be, ut = pc(
  ({ as: t, className: e, color: n = "blue-france", icon: r, iconPosition: o = "left", size: i = "md", variant: l = "primary", children: s, ...u }, a) => {
    const c = t === "a" ? he : t || "button", d = x(
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
    return /* @__PURE__ */ m(c, { className: d, ref: a, ...u, children: s });
  }
), vd = ({
  align: t = "left",
  children: e,
  className: n,
  isEquisized: r = !1,
  isInlineFrom: o,
  isReversed: i = !1,
  size: l = "md",
  ...s
}) => {
  var f;
  const u = ie(), a = (v, $) => v || $e($) && $.props.icon && $.props.children, c = fe(e, ut).reduce(a, !1), d = (f = fe(e, ut).map((v) => $e(v) && v.props.iconPosition)) == null ? void 0 : f[0], b = x("fr-btns-group", {
    [`fr-btns-group--${l}`]: l !== "md",
    [`fr-btns-group--${t}`]: t !== "left",
    [`fr-btns-group--icon-${d}`]: c,
    "fr-btns-group--inline": o === "xs",
    [`fr-btns-group--inline-${o}`]: o && o !== "xs",
    "fr-btns-group--inline-reverse": i,
    "fr-btns-group--equisized": r
  }, n);
  return /* @__PURE__ */ m("ul", { className: b, ...s, children: fe(e, ut).map((v, $) => /* @__PURE__ */ m("li", { children: v }, `${u}-${$}`)) });
}, hd = be(({
  className: t,
  css: e = {},
  hint: n,
  id: r,
  label: o,
  size: i,
  ...l
}, s) => {
  const u = ie(), a = r || u;
  return /* @__PURE__ */ O("div", { className: x("fr-checkbox-group", { "fr-checkbox-group--sm": i === "sm" }, t), children: [
    /* @__PURE__ */ m(
      "input",
      {
        ref: s,
        type: "checkbox",
        id: a,
        className: x(e.input),
        ...l
      }
    ),
    /* @__PURE__ */ O("label", { className: x("fr-label", e.label), htmlFor: a, children: [
      o,
      n && /* @__PURE__ */ m("span", { className: x("fr-hint-text", e.labelHint), children: n })
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
const gd = be(({
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
  const d = ie(), { extendRequiredFieldsLabelsWith: b, extendOptionalFieldsLabelsWith: f } = bt();
  return /* @__PURE__ */ O(
    "fieldset",
    {
      ref: c,
      className: x("fr-fieldset", { [`fr-fieldset--${s}`]: s }, e),
      ...je(a),
      "aria-labelledby": l && s ? `${d}-message` : void 0,
      children: [
        i && /* @__PURE__ */ O("legend", { className: x("fr-fieldset__legend fr-text--regular", n.legend), children: [
          i,
          u ? b : f,
          r && /* @__PURE__ */ m("span", { className: x("fr-hint-text", n.legendHint), children: r })
        ] }),
        Ot.toArray(t).map((v, $) => /* @__PURE__ */ m("div", { className: x("fr-fieldset__element", { "fr-fieldset__element--inline": o }, n.element), children: v }, `${d}-${$}`)),
        l && s && /* @__PURE__ */ m("div", { id: `${d}-message`, className: x("fr-messages-group", n.messageDiv), children: /* @__PURE__ */ m("p", { className: x(`fr-message fr-message--${s}`, n.messageP), children: l }) })
      ]
    }
  );
}), $d = be(({
  id: t,
  className: e,
  css: n = {},
  errorMessage: r,
  hint: o,
  label: i = "Ajouter des fichiers",
  ...l
}, s) => {
  const u = ie(), a = t || u, { extendOptionalFieldsLabelsWith: c, extendRequiredFieldsLabelsWith: d } = bt();
  return /* @__PURE__ */ O("div", { className: x("fr-upload-group", { "fr-input-group--error": r, "fr-input-group--disabled": l.disabled }, e), children: [
    /* @__PURE__ */ O("label", { className: x("fr-label", n.label), htmlFor: a, children: [
      i,
      l.required ? d : c,
      o && /* @__PURE__ */ m("span", { className: "fr-hint-text", children: o })
    ] }),
    /* @__PURE__ */ m(
      "input",
      {
        ref: s,
        id: a,
        className: x("fr-upload", n.input),
        type: "file",
        "aria-describedby": r ? `${a}-message` : void 0,
        ...l
      }
    ),
    r && /* @__PURE__ */ m("p", { id: `${a}-message`, className: x("fr-error-text", n.errorParagraph), children: r })
  ] });
}), bc = be, mc = bc(({
  as: t = "div",
  className: e,
  fluid: n = !1,
  fluidFrom: r = "xs",
  ...o
}, i) => {
  const l = x({
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
  const i = x("fr-grid-row", {
    "fr-grid-row--gutters": t,
    [`fr-grid-row--${e}`]: e,
    [`fr-grid-row--${n}`]: n
  }, r);
  return /* @__PURE__ */ m("div", { className: i, ...o });
}, yd = ({
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
  ...d
}) => {
  const b = x("fr-col", {
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
  return /* @__PURE__ */ m("div", { className: b, ...d });
}, vc = ({ href: t = "/", name: e, tagline: n, className: r, css: o = {}, ...i }) => /* @__PURE__ */ O("div", { className: x("fr-header__service", r), children: [
  /* @__PURE__ */ m("p", { className: x("fr-header__service-title", o["fr-header__service-title"]), children: /* @__PURE__ */ m(he, { href: t, ...i, children: e }) }),
  n && /* @__PURE__ */ m("p", { className: x("fr-header__service-tagline", o["fr-header__service-tagline"]), children: n })
] }), hc = ({ children: t, className: e, css: n = {}, ...r }) => {
  const o = ie(), i = r.id || o;
  return /* @__PURE__ */ O("div", { className: x("fr-header__tools-links", e), ...r, children: [
    /* @__PURE__ */ m("ul", { className: x("fr-btns-group", n["fr-btns-group"]), children: fe(t, ut).map((l, s) => /* @__PURE__ */ m("li", { children: l }, `${i}-${s}`)) }),
    bs(t, [ut])
  ] });
}, gc = ({ className: t, css: e = {}, ...n }) => /* @__PURE__ */ m("div", { className: x("fr-header__operator", t), children: /* @__PURE__ */ m("img", { className: x("fr-responsive-img", e["fr-responsive-img"]), ...n }) }), $c = be(({
  className: t,
  css: e = {},
  buttonLabel: n,
  isLarge: r,
  label: o,
  onSearch: i,
  placeholder: l,
  ...s
}, u) => {
  const a = I(null), c = ie(), d = s.id || c, b = (f) => {
    var v;
    return f.key === "Enter" && i((v = a.current) == null ? void 0 : v.value);
  };
  return /* @__PURE__ */ O(
    "div",
    {
      role: "search",
      className: x("fr-search-bar", { "fr-search-bar--lg": r }, t),
      children: [
        o && /* @__PURE__ */ m("label", { className: x("fr-label", e["fr-label"]), htmlFor: d, children: o }),
        /* @__PURE__ */ m(
          "input",
          {
            ref: (f) => pt(f, [u, a]),
            className: x("fr-input", e["fr-input"]),
            type: "search",
            id: d,
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
              var f;
              return i((f = a.current) == null ? void 0 : f.value);
            },
            className: x("fr-btn", { "fr-btn--lg": r }, e["fr-btn"]),
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
  const l = ie(), s = et(t, [Yl, he]);
  return /* @__PURE__ */ O(In, { children: [
    /* @__PURE__ */ m(
      "button",
      {
        className: x("fr-nav__btn", e),
        "aria-expanded": "false",
        "aria-controls": l,
        "aria-current": n || void 0,
        ...i,
        children: o
      }
    ),
    /* @__PURE__ */ m("div", { className: x("fr-collapse", "fr-menu", r["fr-menu"]), id: l, children: /* @__PURE__ */ m("ul", { className: x("fr-menu__list", r["fr-menu__list"]), children: s.map((u, a) => /* @__PURE__ */ m("li", { className: "fr-nav__item", children: $e(u) && u.type === he ? _e(u, { className: x("fr-nav__link", u.props.className) }) : u }, `navitem-${l}-${a}`)) }) })
  ] });
}, yc = ({
  children: t,
  className: e,
  css: n = {},
  ...r
}) => {
  const o = ie(), i = r.id || o;
  return /* @__PURE__ */ m("nav", { className: x("fr-nav", e), id: i, role: "navigation", ...r, children: /* @__PURE__ */ m("ul", { className: x("fr-nav__list", n["fr-nav__list"]), children: et(t, [Yl, he]).map((l, s) => $e(l) && /* @__PURE__ */ m("li", { className: x("fr-nav__item", n["fr-nav__item"]), children: l.type === he ? _e(l, { className: x("fr-nav__link", l.props.className) }) : l }, `navitem-${i}-${s}`)) }) });
}, xc = ({ text: t, splitCharacter: e = "|" }) => {
  const r = t.split(e).reduce((o, i, l) => l > 0 ? [...o, /* @__PURE__ */ m("br", {}, `br-${l}`), /* @__PURE__ */ m(xn, { children: i }, l)] : [/* @__PURE__ */ m(xn, { children: i }, l)], []);
  return /* @__PURE__ */ m("div", { className: "fr-header__logo", children: /* @__PURE__ */ m("p", { className: "fr-logo", children: r }) });
}, xd = ({ children: t, className: e, css: n = {}, ...r }) => {
  var $, h, _, w;
  const o = ie(), i = ie(), l = ie(), s = ie(), u = ($ = fe(t, vc)) == null ? void 0 : $[0], a = (h = fe(t, hc)) == null ? void 0 : h[0], c = (_ = et(t, [$c, cc])) == null ? void 0 : _[0], d = (w = fe(t, yc)) == null ? void 0 : w[0], b = fe(t, xc), f = fe(t, gc), v = $e(c) ? c.props.title : "Rechercher";
  return /* @__PURE__ */ O("header", { role: "banner", className: x("fr-header", e), ...r, children: [
    /* @__PURE__ */ m("div", { className: x("fr-header__body", n["fr-header__body"]), children: /* @__PURE__ */ m("div", { className: "fr-container", children: /* @__PURE__ */ O("div", { className: x("fr-header__body-row", n["fr-header__body-row"]), children: [
      /* @__PURE__ */ O("div", { className: x("fr-header__brand fr-enlarge-link", n["fr-header__brand"]), children: [
        /* @__PURE__ */ O("div", { className: x("fr-header__brand-top", n["fr-header__brand-top"]), children: [
          b && b,
          f && f,
          (a || c) && /* @__PURE__ */ O("div", { className: x("fr-header__navbar", n["fr-header__navbar"]), children: [
            c && /* @__PURE__ */ m("button", { className: x("fr-btn--search fr-btn", n["fr-btn--search"]), "data-fr-opened": "false", "aria-controls": i, id: o, title: v, children: v }),
            a && /* @__PURE__ */ m("button", { className: x("fr-btn--menu fr-btn", n["fr-btn--menu"]), "data-fr-opened": "false", "aria-controls": l, "aria-haspopup": "menu", id: s, title: "Menu", children: "Menu" })
          ] })
        ] }),
        u && u
      ] }),
      /* @__PURE__ */ O("div", { className: x("fr-header__tools", n["fr-header__tools"]), children: [
        a,
        c && /* @__PURE__ */ m("div", { className: x("fr-header__search fr-modal", n["fr-header__search"]), id: i, children: /* @__PURE__ */ O("div", { className: "fr-container fr-container-lg--fluid", children: [
          /* @__PURE__ */ m("button", { className: "fr-btn--close fr-btn", "aria-controls": i, title: "Fermer", children: "Fermer" }),
          c
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ m("div", { className: x("fr-header__menu fr-modal", n["fr-header__menu"]), id: l, "aria-labelledby": s, children: /* @__PURE__ */ O("div", { className: "fr-container", children: [
      /* @__PURE__ */ m("button", { className: "fr-btn--close fr-btn", "aria-controls": l, title: "Fermer", children: "Fermer" }),
      /* @__PURE__ */ m("div", { className: x("fr-header__menu-links", n["fr-header__menu-links"]) }),
      d && d
    ] }) })
  ] });
}, Cc = be(({
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
  disabled: d,
  required: b,
  ...f
}, v) => {
  var P;
  const { extendRequiredFieldsLabelsWith: $, extendOptionalFieldsLabelsWith: h } = bt(), [_, w] = X(""), S = i || ie(), K = I(null), g = s !== void 0 || u !== void 0, k = x("fr-input", {
    "fr-input--error": g ? u === "error" : _ === "error",
    "fr-input--valid": g ? u === "valid" : _ === "valid"
  }, e["fr-input"]), R = x("fr-input-group", {
    "fr-input-group--error": g ? u === "error" : _ === "error",
    "fr-input-group--valid": g ? u === "valid" : _ === "valid",
    "fr-input-group--disabled": d
  }, t), p = (B) => {
    const C = K.current;
    !n && !g && C && w(C.checkValidity() ? "valid" : "error"), a && a(B);
  }, A = (B) => {
    const C = K.current;
    !n && !g && C && _ && w(C.checkValidity() ? "valid" : "error"), c && c(B);
  }, E = g || n ? u && /* @__PURE__ */ m("p", { className: `fr-${u || "error"}-text`, id: `${S}-message`, children: s }) : _ === "error" && !n && /* @__PURE__ */ m("p", { className: `fr-${_ || "error"}-text`, id: `${S}-message`, children: (P = K.current) == null ? void 0 : P.validationMessage });
  return /* @__PURE__ */ O("div", { className: R, children: [
    /* @__PURE__ */ O("label", { className: x("fr-label", e["fr-label"]), htmlFor: S, children: [
      l,
      b ? $ : h,
      r && /* @__PURE__ */ m("span", { className: x("fr-hint-text", e["fr-hint-text"]), children: r })
    ] }),
    /* @__PURE__ */ m("div", { className: x("fr-input-wrap", { [`fr-icon-${o}`]: o }, e["fr-input-wrap"]), children: /* @__PURE__ */ m(
      "input",
      {
        id: S,
        className: k,
        onBlur: p,
        onChange: A,
        ref: (B) => pt(B, [v, K]),
        "aria-describedby": E ? `${S}-message` : void 0,
        ...f
      }
    ) }),
    E && E
  ] });
}), Cd = be(({
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
  disabled: d,
  required: b,
  ...f
}, v) => {
  var P;
  const { extendRequiredFieldsLabelsWith: $, extendOptionalFieldsLabelsWith: h } = bt(), [_, w] = X(""), S = i || ie(), K = I(null), g = s !== void 0 || u !== void 0, k = x("fr-input", {
    "fr-input--error": g ? u === "error" : _ === "error",
    "fr-input--valid": g ? u === "valid" : _ === "valid"
  }, e["fr-input"]), R = x("fr-input-group", {
    "fr-input-group--error": g ? u === "error" : _ === "error",
    "fr-input-group--valid": g ? u === "valid" : _ === "valid",
    "fr-input-group--disabled": d
  }, t), p = (B) => {
    const C = K.current;
    !n && !g && C && w(C.checkValidity() ? "valid" : "error"), a && a(B);
  }, A = (B) => {
    const C = K.current;
    !n && !g && C && _ && w(C.checkValidity() ? "valid" : "error"), c && c(B);
  }, E = g || n ? u && /* @__PURE__ */ m("p", { className: `fr-${u || "error"}-text`, id: `${S}-message`, children: s }) : _ === "error" && !n && /* @__PURE__ */ m("p", { className: `fr-${_ || "error"}-text`, id: `${S}-message`, children: (P = K.current) == null ? void 0 : P.validationMessage });
  return /* @__PURE__ */ O("div", { className: R, children: [
    /* @__PURE__ */ O("label", { className: x("fr-label", e["fr-label"]), htmlFor: S, children: [
      l,
      b ? $ : h,
      r && /* @__PURE__ */ m("span", { className: x("fr-hint-text", e["fr-hint-text"]), children: r })
    ] }),
    /* @__PURE__ */ m("div", { className: x("fr-input-wrap", { [`fr-icon-${o}`]: o }, e["fr-input-wrap"]), children: /* @__PURE__ */ m(
      "textarea",
      {
        id: S,
        className: k,
        onBlur: p,
        onChange: A,
        ref: (B) => pt(B, [v, K]),
        "aria-describedby": E ? `${S}-message` : void 0,
        ...f
      }
    ) }),
    E && E
  ] });
});
function Ed(t) {
  const e = co(t);
  return /* @__PURE__ */ m(Qn, { ...t, state: e });
}
const Pd = Vt, wd = lo, Ec = "_focused_og068_1", Pc = "_listbox_og068_10", wc = "_content_og068_90", Sc = "_description_og068_99", Tc = "_uppercase_og068_127", _c = "_divider_og068_131", Te = {
  focused: Ec,
  listbox: Pc,
  "listbox-top": "_listbox-top_og068_36",
  "listbox-bottom": "_listbox-bottom_og068_40",
  "listbox-content": "_listbox-content_og068_44",
  "listbox-section-list": "_listbox-section-list_og068_52",
  "listbox-section": "_listbox-section_og068_52",
  "listbox-item": "_listbox-item_og068_62",
  content: wc,
  description: Sc,
  uppercase: Tc,
  divider: _c,
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
  const n = I(null), { menuItemProps: r, labelProps: o, descriptionProps: i, isFocused: l } = Ha({ key: t.key }, e, n), { description: s, startContent: u, endContent: a, color: c, showDivider: d, href: b, className: f } = t.props || {};
  return /* @__PURE__ */ O(
    b ? "a" : "li",
    {
      ...r,
      ref: n,
      href: b,
      className: x(
        Te["listbox-item"],
        f,
        {
          [Te[`listbox-item--${c}`]]: c,
          [Te.divider]: d,
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
function Ac({ section: t, state: e }) {
  const { itemProps: n, headingProps: r, groupProps: o } = Ua({
    heading: t.rendered,
    "aria-label": t["aria-label"]
  }), { showDivider: i, className: l, css: s = {} } = t.props || {}, u = [...t.childNodes].find((a) => a.props.href) ? "div" : "ul";
  return /* @__PURE__ */ O(
    "li",
    {
      ...n,
      className: x(
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
            className: x(
              "fr-text-mention--grey fr-text--sm fr-my-3v fr-px-1w",
              s.title
            ),
            children: t.rendered
          }
        ),
        /* @__PURE__ */ m(u, { ...o, className: x(Te["listbox-section-list"], s.list), children: [...t.childNodes].map((a) => /* @__PURE__ */ m(
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
function Kc(t) {
  const e = Bs(t), n = I(null), { menuProps: r } = ja(t, e, n);
  return /* @__PURE__ */ m("ul", { ...r, ref: n, className: x(Te.listbox), style: { minWidth: "200px" }, children: [...e.collection].map((o) => o.type === "section" ? /* @__PURE__ */ m(Ac, { section: o, state: e }, o.key) : /* @__PURE__ */ m(Xl, { item: o, state: e }, o.key)) });
}
const Dc = be(
  ({ className: t, color: e = "blue-france", icon: n, iconPosition: r = "left", size: o = "md", variant: i = "primary", children: l, ...s }, u) => {
    const a = x(
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
function Sd(t) {
  const { className: e, color: n, icon: r, iconPosition: o, size: i, variant: l, placement: s = "start", ...u } = t, a = ks(u), c = I(null), { menuTriggerProps: d, menuProps: b } = Jn({}, a, c), { isFocusVisible: f, focusProps: v } = qn(), { buttonProps: $ } = ko({ ...se(d, v) }, c);
  return /* @__PURE__ */ O(In, { children: [
    /* @__PURE__ */ m(
      Dc,
      {
        ...$,
        ref: c,
        className: e,
        color: n,
        icon: r,
        iconPosition: o,
        size: i,
        variant: l,
        "data-focus-visible": f,
        children: t.label
      }
    ),
    a.isOpen && /* @__PURE__ */ m(er, { state: a, triggerRef: c, placement: `bottom ${s}`, children: /* @__PURE__ */ m(
      Kc,
      {
        ...u,
        ...b
      }
    ) })
  ] });
}
const Td = Vt, _d = lo, Zl = be(({
  children: t,
  className: e,
  icon: n,
  id: r,
  ...o
}, i) => {
  const l = x("fr-modal__title", e);
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
    className: x("fr-btn--close fr-btn", t),
    type: "button",
    ...r,
    children: n
  }
)), Ur = 'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])', Fc = 9;
function Lc(t, e, n) {
  function r(o) {
    var a;
    const i = [
      ...(a = t.current) == null ? void 0 : a.querySelectorAll(Ur)
    ].filter((c) => !c.hasAttribute("disabled")), l = i[0], s = i[i.length - 1];
    (o.key === "Tab" || o.keyCode === Fc) && (o.shiftKey ? document.activeElement === l && (s.focus(), o.preventDefault()) : (document.activeElement === s || document.activeElement === n) && (l.focus(), o.preventDefault()));
  }
  return W(() => {
    var o;
    return e ? ([
      ...(o = t.current) == null ? void 0 : o.querySelectorAll(Ur)
    ].filter((i) => !i.hasAttribute("disabled")), document.addEventListener("keydown", r)) : n == null || n.focus(), () => document.removeEventListener("keydown", r);
  }, [e, t, n]), t;
}
const Mc = ({
  children: t,
  hide: e,
  size: n = "md",
  id: r,
  className: o,
  isOpen: i,
  canClose: l,
  ...s
}) => {
  var k, R, p;
  const [u, a] = X(null), d = { sm: 4, lg: 8, md: 6, xl: 10 }[n], b = x("fr-modal", o), f = I(null), v = (k = fe(t, Zl)) == null ? void 0 : k[0], $ = fe(t, Jl), h = (R = fe(t, Ql)) == null ? void 0 : R[0], _ = (p = fe(t, Bt)) == null ? void 0 : p[0], w = r || ie();
  W(() => {
    var E, P;
    f.current && (i && (a(document.activeElement), (E = document == null ? void 0 : document.getElementById(w)) == null || E.classList.add("fr-modal--opened")), i || (P = document == null ? void 0 : document.getElementById(w)) == null || P.classList.remove("fr-modal--opened"));
  }, [i]), W(() => {
    const A = f.current;
    if (A)
      return A.addEventListener("dsfr.conceal", (E) => E.stopPropagation()), A.addEventListener("dsfr.disclose", (E) => E.stopPropagation()), () => {
        A.removeEventListener("dsfr.conceal", (E) => E.stopPropagation()), A.removeEventListener("dsfr.disclose", (E) => E.stopPropagation());
      };
  }, []);
  const S = (A) => {
    l && (!f.current || f.current === A.target || A.target.className.indexOf("closing-overlay") > -1) && e();
  };
  Lc(f, i, u);
  const K = _ ? _e(_, { onClick: () => e(), controls: w }) : l ? /* @__PURE__ */ m(Bt, { onClick: () => e(), controls: w }) : null, g = /* @__PURE__ */ m(
    "dialog",
    {
      "aria-labelledby": `${w}-title`,
      "aria-modal": "true",
      className: b,
      ref: f,
      id: w,
      role: "dialog",
      onClick: (A) => S(A),
      ...s,
      children: /* @__PURE__ */ m("div", { className: "fr-container fr-container--fluid fr-container-md", children: /* @__PURE__ */ m("div", { className: "fr-grid-row fr-grid-row--center closing-overlay", children: /* @__PURE__ */ m("div", { className: `fr-col-12 fr-col-md-${d}`, children: /* @__PURE__ */ O("div", { className: "fr-modal__body", children: [
        /* @__PURE__ */ m("div", { className: "fr-modal__header", children: K }),
        /* @__PURE__ */ O("div", { className: "fr-modal__content", children: [
          v && _e(v, { id: w }),
          $ ?? null
        ] }),
        h
      ] }) }) }) })
    }
  );
  return Bn.createPortal(
    g,
    document.body
  );
}, kc = ({
  children: t,
  size: e = "md",
  id: n,
  className: r,
  ...o
}) => {
  var v, $, h;
  const l = { sm: 4, lg: 8, md: 6, xl: 10 }[e], s = x("fr-modal", r), u = (v = fe(t, Zl)) == null ? void 0 : v[0], a = fe(t, Jl), c = ($ = fe(t, Ql)) == null ? void 0 : $[0], d = (h = fe(t, Bt)) == null ? void 0 : h[0], b = d ? _e(d, { controls: n }) : /* @__PURE__ */ m(Bt, { controls: n }), f = /* @__PURE__ */ m(
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
    f,
    document.body
  );
}, Ad = ({
  id: t,
  size: e = "md",
  hide: n,
  isOpen: r = !1,
  className: o,
  canClose: i = !0,
  ...l
}) => t ? /* @__PURE__ */ m(kc, { id: t, size: e, className: o, ...l }) : /* @__PURE__ */ m(
  Mc,
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
    className: x("fr-modal__footer", t),
    ...e
  }
));
const Kd = ({
  children: t,
  closeMode: e = "disallow",
  type: n = "info",
  className: r,
  css: o = {},
  onClose: i,
  ...l
}) => {
  const s = I(null), u = (c) => {
    var d;
    c.preventDefault(), (d = s.current) == null || d.remove(), i && i(c);
  }, a = x("fr-notice", {
    "fr-notice--info": n === "info",
    [`dsfr-plus-notice--${n}`]: n !== "info"
  }, r);
  return /* @__PURE__ */ m("div", { ref: s, className: a, ...l, children: /* @__PURE__ */ m("div", { className: x("fr-container", o["fr-container"]), children: /* @__PURE__ */ O("div", { className: x("fr-notice__body", o["fr-notice__body"]), children: [
    /* @__PURE__ */ m("p", { className: x("fr-notice__title", o["fr-notice__title"]), children: t }),
    e !== "disallow" && /* @__PURE__ */ m(
      "button",
      {
        onClick: e === "uncontrolled" ? u : i,
        className: x("fr-btn--close", "fr-btn", o["fr-btn--close"]),
        children: "Masquer le message"
      }
    )
  ] }) }) });
}, Dd = be(({
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
  return /* @__PURE__ */ O("div", { className: x("fr-radio-group", { "fr-radio-rich": i }, e), children: [
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
        className: x("fr-label"),
        htmlFor: a,
        children: [
          l,
          r && /* @__PURE__ */ m("p", { className: x("fr-hint-text"), children: r })
        ]
      }
    ),
    i && /* @__PURE__ */ m("div", { className: x("fr-radio-rich__img"), children: i })
  ] });
}), Nc = {
  "fr-select-btn": "_fr-select-btn_m2sgv_1"
};
function Fd(t) {
  const { buttonLabel: e, ...n } = t, r = Ns(n), o = I(null), {
    labelProps: i,
    triggerProps: l,
    valueProps: s,
    menuProps: u
  } = Ya(n, r, o), { isFocusVisible: a, focusProps: c } = qn(), { buttonProps: d } = ko({ ...se(l, c) }, o);
  return /* @__PURE__ */ O("div", { className: "fr-select-group", children: [
    t.label && /* @__PURE__ */ m("label", { ...i, className: "fr-label", children: t.label }),
    /* @__PURE__ */ m(
      "button",
      {
        ...d,
        ref: o,
        className: x("fr-select", Nc["fr-select-btn"]),
        "data-focus-visible": a,
        children: /* @__PURE__ */ m("span", { ...s, children: r.selectedItem ? r.selectedItem.rendered : e })
      }
    ),
    /* @__PURE__ */ m(
      Za,
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
const Ld = Vt;
const Md = ({
  children: t,
  className: e,
  css: n = {},
  fullHeight: r,
  position: o,
  sticky: i,
  title: l,
  ...s
}) => {
  const u = ie(), a = x("fr-sidemenu", e, {
    "fr-sidemenu--sticky": i && !r,
    "fr-sidemenu--sticky-full-height": r,
    "fr-sidemenu--right": o === "right"
  });
  return /* @__PURE__ */ m("nav", { className: a, "aria-label": "Menu latéral", ...je(s), children: /* @__PURE__ */ O("div", { className: x("fr-sidemenu__inner", n["fr-sidemenu__inner"]), children: [
    /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        className: x("fr-sidemenu__btn", n["fr-sidemenu__btn"]),
        "aria-controls": u,
        "aria-expanded": !1,
        children: l || "Dans cette rubrique"
      }
    ),
    /* @__PURE__ */ O("div", { className: "fr-collapse", id: u, children: [
      l && /* @__PURE__ */ m("div", { className: x("fr-sidemenu__title", n["fr-sidemenu__title"]), children: l }),
      /* @__PURE__ */ m("ul", { className: x("fr-sidemenu__list", n["fr-sidemenu__list"]), children: et(t, [es, he]).map((c, d) => $e(c) && /* @__PURE__ */ m("li", { className: x("fr-sidemenu__item", n["fr-sidemenu__item"]), children: c.type === he ? _e(c, { className: x("fr-sidemenu__link", c.props.className) }) : c }, `navitem-${u}-${d}`)) })
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
  const a = ie(), c = et(t, [es, he]);
  return /* @__PURE__ */ O(In, { children: [
    /* @__PURE__ */ m(
      "button",
      {
        className: x("fr-sidemenu__btn", e),
        "aria-expanded": o,
        "aria-controls": a,
        "aria-current": r || void 0,
        ...u,
        children: /* @__PURE__ */ m("span", { className: l && `dsfr-plus-sidemenu-title--icon fr-icon-${l} fr-icon--sm`, children: s })
      }
    ),
    /* @__PURE__ */ m("div", { className: "fr-collapse", id: a, children: /* @__PURE__ */ m("ul", { className: x("fr-sidemenu__list", n["fr-sidemenu__list"]), children: c.map((d, b) => /* @__PURE__ */ m("li", { className: x("fr-sidemenu__item", n["fr-sidemenu__item"]), children: $e(d) && d.type === he ? _e(d, { className: x("fr-sidemenu__link", d.props.className) }) : d }, `navitem-${a}-${b}`)) }) })
  ] });
}, kd = ({
  children: t,
  className: e,
  css: n = {},
  current: r,
  icon: o,
  ...i
}) => /* @__PURE__ */ m("li", { className: x("fr-sidemenu__item", e), children: /* @__PURE__ */ m(
  he,
  {
    className: x("fr-sidemenu__link", n["fr-sidemenu__link"]),
    "aria-current": r || void 0,
    ...i,
    children: /* @__PURE__ */ m("span", { className: o && `dsfr-plus-sidemenu-title--icon fr-icon-${o} fr-icon--sm`, children: t })
  }
) });
function Ic(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Nn = { exports: {} }, Pt = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function Bc() {
  if (Wr)
    return re;
  Wr = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, a = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, b = t ? Symbol.for("react.suspense_list") : 60120, f = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, $ = t ? Symbol.for("react.block") : 60121, h = t ? Symbol.for("react.fundamental") : 60117, _ = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
  function S(g) {
    if (typeof g == "object" && g !== null) {
      var k = g.$$typeof;
      switch (k) {
        case e:
          switch (g = g.type, g) {
            case u:
            case a:
            case r:
            case i:
            case o:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case c:
                case v:
                case f:
                case l:
                  return g;
                default:
                  return k;
              }
          }
        case n:
          return k;
      }
    }
  }
  function K(g) {
    return S(g) === a;
  }
  return re.AsyncMode = u, re.ConcurrentMode = a, re.ContextConsumer = s, re.ContextProvider = l, re.Element = e, re.ForwardRef = c, re.Fragment = r, re.Lazy = v, re.Memo = f, re.Portal = n, re.Profiler = i, re.StrictMode = o, re.Suspense = d, re.isAsyncMode = function(g) {
    return K(g) || S(g) === u;
  }, re.isConcurrentMode = K, re.isContextConsumer = function(g) {
    return S(g) === s;
  }, re.isContextProvider = function(g) {
    return S(g) === l;
  }, re.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, re.isForwardRef = function(g) {
    return S(g) === c;
  }, re.isFragment = function(g) {
    return S(g) === r;
  }, re.isLazy = function(g) {
    return S(g) === v;
  }, re.isMemo = function(g) {
    return S(g) === f;
  }, re.isPortal = function(g) {
    return S(g) === n;
  }, re.isProfiler = function(g) {
    return S(g) === i;
  }, re.isStrictMode = function(g) {
    return S(g) === o;
  }, re.isSuspense = function(g) {
    return S(g) === d;
  }, re.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === a || g === i || g === o || g === d || g === b || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === f || g.$$typeof === l || g.$$typeof === s || g.$$typeof === c || g.$$typeof === h || g.$$typeof === _ || g.$$typeof === w || g.$$typeof === $);
  }, re.typeOf = S, re;
}
var oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function Oc() {
  return Gr || (Gr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, a = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, b = t ? Symbol.for("react.suspense_list") : 60120, f = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, $ = t ? Symbol.for("react.block") : 60121, h = t ? Symbol.for("react.fundamental") : 60117, _ = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === a || M === i || M === o || M === d || M === b || typeof M == "object" && M !== null && (M.$$typeof === v || M.$$typeof === f || M.$$typeof === l || M.$$typeof === s || M.$$typeof === c || M.$$typeof === h || M.$$typeof === _ || M.$$typeof === w || M.$$typeof === $);
    }
    function K(M) {
      if (typeof M == "object" && M !== null) {
        var ye = M.$$typeof;
        switch (ye) {
          case e:
            var Ne = M.type;
            switch (Ne) {
              case u:
              case a:
              case r:
              case i:
              case o:
              case d:
                return Ne;
              default:
                var mt = Ne && Ne.$$typeof;
                switch (mt) {
                  case s:
                  case c:
                  case v:
                  case f:
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
    var g = u, k = a, R = s, p = l, A = e, E = c, P = r, B = v, C = f, T = n, q = i, V = o, F = d, ue = !1;
    function ae(M) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(M) || K(M) === u;
    }
    function y(M) {
      return K(M) === a;
    }
    function D(M) {
      return K(M) === s;
    }
    function z(M) {
      return K(M) === l;
    }
    function j(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function H(M) {
      return K(M) === c;
    }
    function Y(M) {
      return K(M) === r;
    }
    function U(M) {
      return K(M) === v;
    }
    function L(M) {
      return K(M) === f;
    }
    function N(M) {
      return K(M) === n;
    }
    function Z(M) {
      return K(M) === i;
    }
    function G(M) {
      return K(M) === o;
    }
    function J(M) {
      return K(M) === d;
    }
    oe.AsyncMode = g, oe.ConcurrentMode = k, oe.ContextConsumer = R, oe.ContextProvider = p, oe.Element = A, oe.ForwardRef = E, oe.Fragment = P, oe.Lazy = B, oe.Memo = C, oe.Portal = T, oe.Profiler = q, oe.StrictMode = V, oe.Suspense = F, oe.isAsyncMode = ae, oe.isConcurrentMode = y, oe.isContextConsumer = D, oe.isContextProvider = z, oe.isElement = j, oe.isForwardRef = H, oe.isFragment = Y, oe.isLazy = U, oe.isMemo = L, oe.isPortal = N, oe.isProfiler = Z, oe.isStrictMode = G, oe.isSuspense = J, oe.isValidElementType = S, oe.typeOf = K;
  }()), oe;
}
var qr;
function ts() {
  return qr || (qr = 1, process.env.NODE_ENV === "production" ? Pt.exports = Bc() : Pt.exports = Oc()), Pt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var bn, Yr;
function Rc() {
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
      for (var d in s)
        e.call(s, d) && (u[d] = s[d]);
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
function Vc() {
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
          var d;
          try {
            if (typeof i[c] != "function") {
              var b = Error(
                (u || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            d = i[c](l, c, u, s, null, e);
          } catch (v) {
            d = v;
          }
          if (d && !(d instanceof Error) && t(
            (u || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var f = a ? a() : "";
            t(
              "Failed " + s + " type: " + d.message + (f ?? "")
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
function zc() {
  if (Qr)
    return gn;
  Qr = 1;
  var t = ts(), e = Rc(), n = tr(), r = ns(), o = Vc(), i = function() {
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
    function d(y) {
      var D = y && (a && y[a] || y[c]);
      if (typeof D == "function")
        return D;
    }
    var b = "<<anonymous>>", f = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: w(),
      arrayOf: S,
      element: K(),
      elementType: g(),
      instanceOf: k,
      node: E(),
      objectOf: p,
      oneOf: R,
      oneOfType: A,
      shape: B,
      exact: C
    };
    function v(y, D) {
      return y === D ? y !== 0 || 1 / y === 1 / D : y !== y && D !== D;
    }
    function $(y, D) {
      this.message = y, this.data = D && typeof D == "object" ? D : {}, this.stack = "";
    }
    $.prototype = Error.prototype;
    function h(y) {
      if (process.env.NODE_ENV !== "production")
        var D = {}, z = 0;
      function j(Y, U, L, N, Z, G, J) {
        if (N = N || b, G = G || L, J !== n) {
          if (u) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = N + ":" + L;
            !D[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + N + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), D[ye] = !0, z++);
          }
        }
        return U[L] == null ? Y ? U[L] === null ? new $("The " + Z + " `" + G + "` is marked as required " + ("in `" + N + "`, but its value is `null`.")) : new $("The " + Z + " `" + G + "` is marked as required in " + ("`" + N + "`, but its value is `undefined`.")) : null : y(U, L, N, Z, G);
      }
      var H = j.bind(null, !1);
      return H.isRequired = j.bind(null, !0), H;
    }
    function _(y) {
      function D(z, j, H, Y, U, L) {
        var N = z[j], Z = V(N);
        if (Z !== y) {
          var G = F(N);
          return new $(
            "Invalid " + Y + " `" + U + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return h(D);
    }
    function w() {
      return h(l);
    }
    function S(y) {
      function D(z, j, H, Y, U) {
        if (typeof y != "function")
          return new $("Property `" + U + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var L = z[j];
        if (!Array.isArray(L)) {
          var N = V(L);
          return new $("Invalid " + Y + " `" + U + "` of type " + ("`" + N + "` supplied to `" + H + "`, expected an array."));
        }
        for (var Z = 0; Z < L.length; Z++) {
          var G = y(L, Z, H, Y, U + "[" + Z + "]", n);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return h(D);
    }
    function K() {
      function y(D, z, j, H, Y) {
        var U = D[z];
        if (!s(U)) {
          var L = V(U);
          return new $("Invalid " + H + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(y);
    }
    function g() {
      function y(D, z, j, H, Y) {
        var U = D[z];
        if (!t.isValidElementType(U)) {
          var L = V(U);
          return new $("Invalid " + H + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(y);
    }
    function k(y) {
      function D(z, j, H, Y, U) {
        if (!(z[j] instanceof y)) {
          var L = y.name || b, N = ae(z[j]);
          return new $("Invalid " + Y + " `" + U + "` of type " + ("`" + N + "` supplied to `" + H + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return h(D);
    }
    function R(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), l;
      function D(z, j, H, Y, U) {
        for (var L = z[j], N = 0; N < y.length; N++)
          if (v(L, y[N]))
            return null;
        var Z = JSON.stringify(y, function(J, M) {
          var ye = F(M);
          return ye === "symbol" ? String(M) : M;
        });
        return new $("Invalid " + Y + " `" + U + "` of value `" + String(L) + "` " + ("supplied to `" + H + "`, expected one of " + Z + "."));
      }
      return h(D);
    }
    function p(y) {
      function D(z, j, H, Y, U) {
        if (typeof y != "function")
          return new $("Property `" + U + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var L = z[j], N = V(L);
        if (N !== "object")
          return new $("Invalid " + Y + " `" + U + "` of type " + ("`" + N + "` supplied to `" + H + "`, expected an object."));
        for (var Z in L)
          if (r(L, Z)) {
            var G = y(L, Z, H, Y, U + "." + Z, n);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return h(D);
    }
    function A(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var D = 0; D < y.length; D++) {
        var z = y[D];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(z) + " at index " + D + "."
          ), l;
      }
      function j(H, Y, U, L, N) {
        for (var Z = [], G = 0; G < y.length; G++) {
          var J = y[G], M = J(H, Y, U, L, N, n);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && Z.push(M.data.expectedType);
        }
        var ye = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new $("Invalid " + L + " `" + N + "` supplied to " + ("`" + U + "`" + ye + "."));
      }
      return h(j);
    }
    function E() {
      function y(D, z, j, H, Y) {
        return T(D[z]) ? null : new $("Invalid " + H + " `" + Y + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return h(y);
    }
    function P(y, D, z, j, H) {
      return new $(
        (y || "React class") + ": " + D + " type `" + z + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function B(y) {
      function D(z, j, H, Y, U) {
        var L = z[j], N = V(L);
        if (N !== "object")
          return new $("Invalid " + Y + " `" + U + "` of type `" + N + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var Z in y) {
          var G = y[Z];
          if (typeof G != "function")
            return P(H, Y, U, Z, F(G));
          var J = G(L, Z, H, Y, U + "." + Z, n);
          if (J)
            return J;
        }
        return null;
      }
      return h(D);
    }
    function C(y) {
      function D(z, j, H, Y, U) {
        var L = z[j], N = V(L);
        if (N !== "object")
          return new $("Invalid " + Y + " `" + U + "` of type `" + N + "` " + ("supplied to `" + H + "`, expected `object`."));
        var Z = e({}, z[j], y);
        for (var G in Z) {
          var J = y[G];
          if (r(y, G) && typeof J != "function")
            return P(H, Y, U, G, F(J));
          if (!J)
            return new $(
              "Invalid " + Y + " `" + U + "` key `" + G + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(z[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var M = J(L, G, H, Y, U + "." + G, n);
          if (M)
            return M;
        }
        return null;
      }
      return h(D);
    }
    function T(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(T);
          if (y === null || s(y))
            return !0;
          var D = d(y);
          if (D) {
            var z = D.call(y), j;
            if (D !== y.entries) {
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
    function q(y, D) {
      return y === "symbol" ? !0 : D ? D["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && D instanceof Symbol : !1;
    }
    function V(y) {
      var D = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : q(D, y) ? "symbol" : D;
    }
    function F(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var D = V(y);
      if (D === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return D;
    }
    function ue(y) {
      var D = F(y);
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
    function ae(y) {
      return !y.constructor || !y.constructor.name ? b : y.constructor.name;
    }
    return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
  }, gn;
}
var $n, eo;
function jc() {
  if (eo)
    return $n;
  eo = 1;
  var t = tr();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, $n = function() {
    function r(l, s, u, a, c, d) {
      if (d !== t) {
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
  var Hc = ts(), Uc = !0;
  Nn.exports = zc()(Hc.isElement, Uc);
} else
  Nn.exports = jc()();
var Wc = Nn.exports;
const Gc = /* @__PURE__ */ Ic(Wc), qc = "_spinner_143d9_5", Yc = "_internal_143d9_40", Xc = "_external_143d9_41", yn = {
  spinner: qc,
  "internal-circle": "_internal-circle_143d9_40",
  "external-circle": "_external-circle_143d9_41",
  internal: Yc,
  external: Xc,
  "spinner-overlay": "_spinner-overlay_143d9_57"
};
function rs({ size: t }) {
  const e = ie();
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
  size: Gc.number
};
rs.defaultProps = {
  size: 48
};
const Nd = ({
  className: t,
  currentStep: e,
  currentTitle: n,
  nextStepTitle: r,
  steps: o,
  titleAs: i = "h4",
  ...l
}) => /* @__PURE__ */ O("div", { className: x("fr-stepper", t), ...l, children: [
  /* @__PURE__ */ O(i, { className: "fr-stepper__title", children: [
    /* @__PURE__ */ m("span", { className: "fr-stepper__state", children: `Étape ${e} sur ${o}` }),
    n
  ] }),
  /* @__PURE__ */ m("div", { className: "fr-stepper__steps", "data-fr-current-step": e, "data-fr-steps": o }),
  /* @__PURE__ */ O("p", { className: "fr-stepper__details", children: [
    /* @__PURE__ */ m("span", { className: "fr-text--bold", children: "Étape suivante : " }),
    r
  ] })
] }), Zc = ({
  className: t,
  index: e,
  ...n
}) => /* @__PURE__ */ m(
  "div",
  {
    id: `${e}-panel`,
    className: x("fr-tabs__panel", t),
    role: "tabpanel",
    "aria-labelledby": `${e}-button`,
    tabIndex: n["aria-selected"] ? -1 : 0,
    ...n
  }
), Id = ({
  className: t,
  children: e,
  defaultActiveIndex: n = 0,
  css: r = {},
  onTabChange: o,
  ...i
}) => {
  const l = ie(), s = i.id || l, u = fe(e, Zc).filter((a) => $e(a)).map(
    (a, c) => _e(
      a,
      { index: `${s}-${c}` }
    )
  );
  return /* @__PURE__ */ O(
    "div",
    {
      id: s,
      className: x("fr-tabs", t),
      ...i,
      children: [
        /* @__PURE__ */ m("ul", { className: x("fr-tabs__list", r.ul), role: "tablist", children: u.map((a, c) => /* @__PURE__ */ m("li", { className: x(r.li), role: "presentation", children: /* @__PURE__ */ m(
          "button",
          {
            onClick: (d) => {
              o && (o(c), d.preventDefault());
            },
            id: `${s}-${c}-button`,
            className: x(
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
const nr = be, rr = ({ className: t, color: e, icon: n, iconPosition: r, size: o }) => x("fr-tag", t, {
  "fr-tag--sm": o === "sm",
  [`fr-icon-${n}`]: n,
  [`fr-tag--icon-${r}`]: n && r,
  [`fr-tag--${e}`]: e
}), os = nr(({
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
}), Jc = nr(({
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
}), Qc = nr(({
  as: t,
  className: e,
  color: n,
  icon: r,
  iconPosition: o = "left",
  size: i,
  ...l
}, s) => {
  const u = x("fr-tag--dismiss", rr({ className: e, color: n, icon: r, iconPosition: o, size: i }));
  return /* @__PURE__ */ m(
    t === "a" ? he : t || "button",
    {
      ref: s,
      className: u,
      ...l
    }
  );
}), ed = ({
  className: t,
  children: e,
  ...n
}) => {
  const r = ie(), o = x("fr-tags-group", t);
  return /* @__PURE__ */ m("ul", { className: o, ...je(n), children: et(e, [os, Jc, Qc]).map((i, l) => /* @__PURE__ */ m("li", { children: i }, `${r}-${l}`)) });
}, Bd = be(({
  hint: t,
  label: e,
  onTagsChange: n,
  tags: r
}) => {
  const [o, i] = X(""), [l, s] = X(r), u = (c) => {
    if ([9, 13].includes(c.keyCode) && o) {
      if (c.preventDefault(), l != null && l.includes(o.trim()))
        return;
      const d = [...l ?? [], o.trim()];
      s(d), i(""), n(d);
    }
  }, a = (c) => {
    const d = [...(l ?? []).filter((b) => b !== c)];
    s(d), n(d);
  };
  return /* @__PURE__ */ O("div", { children: [
    /* @__PURE__ */ m(
      Cc,
      {
        type: "text",
        value: o,
        label: e,
        hint: t,
        onChange: (c) => {
          var d;
          return i((d = c == null ? void 0 : c.target) == null ? void 0 : d.value);
        },
        onKeyDown: (c) => u(c)
      }
    ),
    /* @__PURE__ */ m(ed, { children: (l ?? []).map((c) => /* @__PURE__ */ O(
      os,
      {
        className: "fr-mr-1w",
        onClick: () => a(c),
        children: [
          c,
          /* @__PURE__ */ m("span", { className: "fr-icon-close-line" })
        ]
      },
      c
    )) })
  ] });
}), to = ({
  alt: t,
  as: e = "p",
  bold: n,
  className: r,
  size: o,
  ...i
}) => {
  const l = x(r, {
    "fr-text--alt": o !== "lead" && t,
    "fr-text--heavy": n,
    [`fr-text--${o}`]: o && o !== "md"
  });
  return /* @__PURE__ */ m(e, { className: l, ...i });
}, Od = ({
  as: t = "h1",
  className: e,
  look: n,
  ...r
}) => {
  const o = n && ["xs", "sm", "md", "lg", "xl"].includes(n), i = x(e, {
    [`fr-${n}`]: !o && n && n !== t,
    [`fr-display-${n}`]: o
  });
  return /* @__PURE__ */ m(t, { className: i, ...r });
};
function td(t, e) {
  const [n, r] = X(!1), o = I((/* @__PURE__ */ new Date()).getTime()), i = I(e), l = I(void 0), s = () => clearTimeout(l.current), u = () => {
    r(!0), i.current -= (/* @__PURE__ */ new Date()).getTime() - o.current, s();
  }, a = () => {
    o.current = (/* @__PURE__ */ new Date()).getTime(), r(!1);
  };
  return W(() => (!n && e && (l.current = setTimeout(t, i.current)), s), [i, n, e, t]), { paused: n, pause: u, resume: a };
}
const nd = ({ autoDismissAfter: t = 3e3, description: e = "", id: n, remove: r = () => {
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
  }, [n, r]), { pause: u, resume: a } = td(s, t);
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
        /* @__PURE__ */ O(mc, { fluid: !0, className: "toast-content", children: [
          /* @__PURE__ */ m(Hr, { children: o && /* @__PURE__ */ m(to, { bold: !0, className: "mb-1w", children: o }) }),
          /* @__PURE__ */ m(Hr, { children: e && /* @__PURE__ */ m(to, { className: "mb-2w", size: "sm", children: e }) })
        ] })
      ]
    }
  );
};
function rd({ children: t }) {
  return /* @__PURE__ */ m("div", { id: "toast-container", children: t });
}
const is = Rt({}), Rd = ({
  children: t
}) => {
  const [e, n] = X([]), r = te((s) => {
    n((u) => u.filter((a) => a.id !== s));
  }, []), o = te((s) => {
    const u = (s == null ? void 0 : s.id) ?? `toast-${ie()}`;
    return n((a) => [...a, { ...s, id: u }]), u;
  }, []), i = ne(() => ({
    remove: r,
    toast: o,
    toasts: e
  }), [r, o, e]), l = /* @__PURE__ */ m(rd, { children: e.map((s) => /* @__PURE__ */ m(
    nd,
    {
      remove: r,
      ...s
    },
    s.id
  )) });
  return /* @__PURE__ */ O(is.Provider, { value: i, children: [
    t,
    cs(l, document.body)
  ] });
}, Vd = () => Se(is), od = be(({
  className: t,
  css: e = {},
  hasLabelLeft: n,
  hasSeparator: r,
  hint: o,
  label: i,
  ...l
}, s) => {
  const u = ie(), a = l.id || u, c = x("fr-toggle", {
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
            className: x("fr-toggle__input", e["fr-toggle__input"]),
            id: a,
            ...je(l, { exclude: ["type"] })
          }
        ),
        /* @__PURE__ */ m(
          "label",
          {
            className: x("fr-toggle__label", e["fr-toggle__label"]),
            htmlFor: a,
            "data-fr-checked-label": "Activé",
            "data-fr-unchecked-label": "Désactivé",
            children: i
          }
        ),
        o && /* @__PURE__ */ m("p", { className: x("fr-hint-text", e["fr-hint-text"]), children: o })
      ]
    }
  );
}), zd = ({ children: t, className: e, ...n }) => {
  const r = ie();
  return /* @__PURE__ */ m("ul", { className: x("fr-toggle__list", e), ...je(n), children: fe(t, od).map((o, i) => /* @__PURE__ */ m("li", { children: o }, `${r}-${i}`)) });
};
export {
  ps as Accordion,
  ad as AccordionGroup,
  cd as Alert,
  cc as Autocomplete,
  pd as AutocompleteItem,
  fc as Badge,
  bd as BadgeGroup,
  md as Breadcrumb,
  ut as Button,
  vd as ButtonGroup,
  hd as Checkbox,
  yd as Col,
  mc as Container,
  fd as DSFRConfig,
  Qc as DissmissibleTag,
  hc as FastAccess,
  gd as Fieldset,
  $d as FileUpload,
  xd as Header,
  Vt as Item,
  he as Link,
  Ed as Listbox,
  Pd as ListboxItem,
  wd as ListboxSection,
  xc as Logo,
  Sd as MenuButton,
  Td as MenuItem,
  _d as MenuSection,
  Ad as Modal,
  Bt as ModalClose,
  Jl as ModalContent,
  Ql as ModalFooter,
  Zl as ModalTitle,
  yc as Nav,
  Yl as NavItem,
  Kd as Notice,
  gc as Operator,
  Dd as Radio,
  Hr as Row,
  $c as SearchBar,
  lo as Section,
  Fd as Select,
  Ld as SelectOption,
  Jc as SelectableTag,
  vc as Service,
  Md as SideMenu,
  es as SideMenuItem,
  kd as SideMenuLink,
  rs as Spinner,
  Nd as Stepper,
  Zc as Tab,
  Id as Tabs,
  os as Tag,
  ed as TagGroup,
  Bd as TagInput,
  to as Text,
  Cd as TextArea,
  Cc as TextInput,
  Od as Title,
  nd as Toast,
  Rd as ToastContextProvider,
  od as Toggle,
  zd as ToggleGroup,
  dd as useAutocompleteList,
  bt as useDSFRConfig,
  Vd as useToast
};
