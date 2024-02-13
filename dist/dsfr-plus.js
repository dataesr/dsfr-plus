import './style.css';
import { jsx as m, jsxs as R, Fragment as kn } from "react/jsx-runtime";
import * as vt from "react";
import Q, { createContext as Nn, useState as J, useEffect as G, useCallback as oe, useMemo as re, useContext as Ae, forwardRef as me, Children as Ot, isValidElement as ge, useId as ie, useRef as B, cloneElement as Te, Fragment as $n, useReducer as rs, createElement as or } from "react";
import y from "classnames";
import In, { flushSync as os } from "react-dom";
const Qr = Nn({}), Jc = ({
  children: t,
  routerComponent: e,
  extendRequiredFieldsLabelsWith: n = /* @__PURE__ */ m("span", { style: { color: "var(--text-default-error)" }, children: " *" }),
  extendOptionalFieldsLabelsWith: r = " (optionel)",
  defaultLang: o = "fr",
  verbose: i = !1
}) => {
  const [l, s] = J(window.localStorage.getItem("locale") || o), [u, a] = J(!1);
  G(() => {
    const p = async () => {
      var x;
      (x = window == null ? void 0 : window.dsfr) != null && x.isStarted || (window.dsfr = {
        verbose: i,
        mode: "manual"
      }, await import("./dsfr.module.min-23ae5258.js"), await import("./utility-251e9615.js"), await import("./dsfr-4e49221c.js"), window.dsfr.start(), a(!0));
    }, d = window.matchMedia("(prefers-color-scheme: dark)"), v = d != null && d.matches ? "dark" : "light", h = window.localStorage.getItem("theme");
    document.documentElement.setAttribute("data-fr-scheme", h || v), p();
  }, []);
  const c = oe((p) => {
    window.localStorage.setItem("locale", p), document.documentElement.setAttribute("lang", p), s(p);
  }, []), f = re(() => ({
    setLocale: c,
    routerComponent: e,
    locale: l,
    extendRequiredFieldsLabelsWith: n,
    extendOptionalFieldsLabelsWith: r
  }), [e, c, l, n, r]);
  return /* @__PURE__ */ m(Qr.Provider, { value: f, children: u ? t : null });
}, ft = () => Ae(Qr), $e = me(({
  children: t,
  className: e,
  icon: n,
  current: r,
  iconPosition: o = "left",
  isSimple: i = !1,
  size: l = "md",
  ...s
}, u) => {
  const { routerComponent: a } = ft();
  return /* @__PURE__ */ m(
    a || "a",
    {
      ref: u,
      "aria-current": r || void 0,
      className: y({
        "fr-link": i,
        [`fr-link-${l}`]: l !== "md",
        [`fr-icon-${n}`]: !!n,
        [`fr-link--icon-${o}`]: n && o
      }, e),
      ...s,
      children: t
    }
  );
}), is = me, ls = is(
  ({ as: t, className: e, noIcon: n, color: r = "blue-france", size: o, icon: i, variant: l = "primary", ...s }, u) => {
    const a = t === "a" ? $e : t || "p", c = y(
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
);
function de(t, e) {
  return Ot.toArray(t).filter((r) => ge(r) && r.type === e);
}
function pt(t, e) {
  return Ot.toArray(t).filter((n) => ge(n) && e.includes(n.type));
}
function ss(t, e) {
  return Ot.toArray(t).filter((n) => ge(n) && !e.includes(n.type));
}
const Qc = ({
  children: t,
  className: e,
  ...n
}) => {
  const r = ie(), o = y("fr-badges-group", e);
  return /* @__PURE__ */ m("ul", { className: o, ...n, children: de(t, ls).map((i, l) => /* @__PURE__ */ m("li", { children: i }, `${r}-${l}`)) });
};
const us = me, st = us(
  ({ as: t, className: e, color: n = "blue-france", icon: r, iconPosition: o = "left", size: i = "md", variant: l = "primary", children: s, ...u }, a) => {
    const c = t === "a" ? $e : t || "button", f = y(
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
), ed = ({
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
  const u = ie(), a = (v, h) => v || ge(h) && h.props.icon && h.props.children, c = de(e, st).reduce(a, !1), f = (d = de(e, st).map((v) => ge(v) && v.props.iconPosition)) == null ? void 0 : d[0], p = y("fr-btns-group", {
    [`fr-btns-group--${l}`]: l !== "md",
    [`fr-btns-group--${t}`]: t !== "left",
    [`fr-btns-group--icon-${f}`]: c,
    "fr-btns-group--inline": o === "xs",
    [`fr-btns-group--inline-${o}`]: o && o !== "xs",
    "fr-btns-group--inline-reverse": i,
    "fr-btns-group--equisized": r
  }, n);
  return /* @__PURE__ */ m("ul", { className: p, ...s, children: de(e, st).map((v, h) => /* @__PURE__ */ m("li", { children: v }, `${u}-${h}`)) });
}, as = me, td = as(({
  as: t = "div",
  className: e,
  fluid: n = !1,
  fluidFrom: r = "xs",
  ...o
}, i) => {
  const l = y({
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
}), nd = ({
  gutters: t = !1,
  horizontalAlign: e,
  verticalAlign: n,
  className: r,
  ...o
}) => {
  const i = y("fr-grid-row", {
    "fr-grid-row--gutters": t,
    [`fr-grid-row--${e}`]: e,
    [`fr-grid-row--${n}`]: n
  }, r);
  return /* @__PURE__ */ m("div", { className: i, ...o });
}, rd = ({
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
  const p = y("fr-col", {
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
  return /* @__PURE__ */ m("div", { className: p, ...f });
}, cs = ({ href: t = "/", name: e, tagline: n, className: r, css: o = {}, ...i }) => /* @__PURE__ */ R("div", { className: y("fr-header__service", r), children: [
  /* @__PURE__ */ m("p", { className: y("fr-header__service-title", o["fr-header__service-title"]), children: /* @__PURE__ */ m($e, { href: t, ...i, children: e }) }),
  n && /* @__PURE__ */ m("p", { className: y("fr-header__service-tagline", o["fr-header__service-tagline"]), children: n })
] }), ds = ({ children: t, className: e, css: n = {}, ...r }) => {
  const o = ie(), i = r.id || o;
  return /* @__PURE__ */ R("div", { className: y("fr-header__tools-links", e), ...r, children: [
    /* @__PURE__ */ m("ul", { className: y("fr-btns-group", n["fr-btns-group"]), children: de(t, st).map((l, s) => /* @__PURE__ */ m("li", { children: l }, `${i}-${s}`)) }),
    ss(t, [st])
  ] });
}, fs = ({ className: t, css: e = {}, ...n }) => /* @__PURE__ */ m("div", { className: y("fr-header__operator", t), children: /* @__PURE__ */ m("img", { className: y("fr-responsive-img", e["fr-responsive-img"]), ...n }) }), ir = ["__TYPE"];
function ze(t, e = {}) {
  const { include: n, exclude: r } = e;
  if (n)
    return Object.entries(t).reduce((i, [l, s]) => n.includes(l) ? { ...i, [l]: s } : i, {});
  const o = r ? [...ir, ...r] : ir;
  return Object.entries(t).reduce((i, [l, s]) => o.includes(l) ? i : { ...i, [l]: s }, {});
}
function bt(t, e) {
  t && e.forEach((n) => {
    typeof n == "function" ? n(t) : n && (n.current = t);
  });
}
const ps = me(({
  className: t,
  css: e = {},
  buttonLabel: n,
  isLarge: r,
  label: o,
  onSearch: i,
  ...l
}, s) => {
  const u = B(null), a = ie(), c = l.id || a, f = (p) => {
    var d;
    return p.key === "Enter" && i((d = u.current) == null ? void 0 : d.value);
  };
  return /* @__PURE__ */ R(
    "div",
    {
      role: "search",
      className: y("fr-search-bar", { "fr-search-bar--lg": r }, t),
      children: [
        o && /* @__PURE__ */ m("label", { className: y("fr-label", e["fr-label"]), htmlFor: c, children: o }),
        /* @__PURE__ */ m(
          "input",
          {
            ref: (p) => bt(p, [s, u]),
            className: y("fr-input", e["fr-input"]),
            type: "search",
            id: c,
            onKeyDown: f,
            ...ze(l)
          }
        ),
        /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            onClick: () => {
              var p;
              return i((p = u.current) == null ? void 0 : p.value);
            },
            className: y("fr-btn", { "fr-btn--lg": r }, e["fr-btn"]),
            title: n,
            children: n
          }
        )
      ]
    }
  );
}), eo = ({
  children: t,
  className: e,
  current: n = !1,
  css: r = {},
  title: o,
  ...i
}) => {
  const l = ie(), s = pt(t, [eo, $e]);
  return /* @__PURE__ */ R(kn, { children: [
    /* @__PURE__ */ m(
      "button",
      {
        className: y("fr-nav__btn", e),
        "aria-expanded": "false",
        "aria-controls": l,
        "aria-current": n || void 0,
        ...i,
        children: o
      }
    ),
    /* @__PURE__ */ m("div", { className: y("fr-collapse", "fr-menu", r["fr-menu"]), id: l, children: /* @__PURE__ */ m("ul", { className: y("fr-menu__list", r["fr-menu__list"]), children: s.map((u, a) => /* @__PURE__ */ m("li", { className: "fr-nav__item", children: ge(u) && u.type === $e ? Te(u, { className: y("fr-nav__link", u.props.className) }) : u }, `navitem-${l}-${a}`)) }) })
  ] });
}, bs = ({
  children: t,
  className: e,
  css: n = {},
  ...r
}) => {
  const o = ie(), i = r.id || o;
  return /* @__PURE__ */ m("nav", { className: y("fr-nav", e), id: i, role: "navigation", ...r, children: /* @__PURE__ */ m("ul", { className: y("fr-nav__list", n["fr-nav__list"]), children: pt(t, [eo, $e]).map((l, s) => ge(l) && /* @__PURE__ */ m("li", { className: y("fr-nav__item", n["fr-nav__item"]), children: l.type === $e ? Te(l, { className: y("fr-nav__link", l.props.className) }) : l }, `navitem-${i}-${s}`)) }) });
}, ms = ({ text: t, splitCharacter: e = "|" }) => {
  const r = t.split(e).reduce((o, i, l) => l > 0 ? [...o, /* @__PURE__ */ m("br", {}, `br-${l}`), /* @__PURE__ */ m($n, { children: i }, l)] : [/* @__PURE__ */ m($n, { children: i }, l)], []);
  return /* @__PURE__ */ m("div", { className: "fr-header__logo", children: /* @__PURE__ */ m("p", { className: "fr-logo", children: r }) });
}, od = ({ children: t, className: e, css: n = {}, ...r }) => {
  var h, x, _, w;
  const o = ie(), i = ie(), l = ie(), s = ie(), u = (h = de(t, cs)) == null ? void 0 : h[0], a = (x = de(t, ds)) == null ? void 0 : x[0], c = (_ = de(t, ps)) == null ? void 0 : _[0], f = (w = de(t, bs)) == null ? void 0 : w[0], p = de(t, ms), d = de(t, fs), v = ge(c) ? c.props.title : "Rechercher";
  return /* @__PURE__ */ R("header", { role: "banner", className: y("fr-header", e), ...r, children: [
    /* @__PURE__ */ m("div", { className: y("fr-header__body", n["fr-header__body"]), children: /* @__PURE__ */ m("div", { className: "fr-container", children: /* @__PURE__ */ R("div", { className: y("fr-header__body-row", n["fr-header__body-row"]), children: [
      /* @__PURE__ */ R("div", { className: y("fr-header__brand fr-enlarge-link", n["fr-header__brand"]), children: [
        /* @__PURE__ */ R("div", { className: y("fr-header__brand-top", n["fr-header__brand-top"]), children: [
          p && p,
          d && d,
          (a || c) && /* @__PURE__ */ R("div", { className: y("fr-header__navbar", n["fr-header__navbar"]), children: [
            c && /* @__PURE__ */ m("button", { className: y("fr-btn--search fr-btn", n["fr-btn--search"]), "data-fr-opened": "false", "aria-controls": i, id: o, title: v, children: v }),
            a && /* @__PURE__ */ m("button", { className: y("fr-btn--menu fr-btn", n["fr-btn--menu"]), "data-fr-opened": "false", "aria-controls": l, "aria-haspopup": "menu", id: s, title: "Menu", children: "Menu" })
          ] })
        ] }),
        u && u
      ] }),
      /* @__PURE__ */ R("div", { className: y("fr-header__tools", n["fr-header__tools"]), children: [
        a,
        c && /* @__PURE__ */ m("div", { className: y("fr-header__search fr-modal", n["fr-header__search"]), id: i, children: /* @__PURE__ */ R("div", { className: "fr-container fr-container-lg--fluid", children: [
          /* @__PURE__ */ m("button", { className: "fr-btn--close fr-btn", "aria-controls": i, title: "Fermer", children: "Fermer" }),
          c
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ m("div", { className: y("fr-header__menu fr-modal", n["fr-header__menu"]), id: l, "aria-labelledby": s, children: /* @__PURE__ */ R("div", { className: "fr-container", children: [
      /* @__PURE__ */ m("button", { className: "fr-btn--close fr-btn", "aria-controls": l, title: "Fermer", children: "Fermer" }),
      /* @__PURE__ */ m("div", { className: y("fr-header__menu-links", n["fr-header__menu-links"]) }),
      f && f
    ] }) })
  ] });
};
const Bn = me, On = ({ className: t, color: e, icon: n, iconPosition: r, size: o }) => y("fr-tag", t, {
  "fr-tag--sm": o === "sm",
  [`fr-icon-${n}`]: n,
  [`fr-tag--icon-${r}`]: n && r,
  [`fr-tag--${e}`]: e
}), vs = Bn(({
  as: t,
  className: e,
  color: n,
  icon: r,
  iconPosition: o = "right",
  size: i,
  ...l
}, s) => {
  const u = On({ className: e, color: n, icon: r, iconPosition: o, size: i });
  return /* @__PURE__ */ m(
    t === "a" ? $e : t || "p",
    {
      ref: s,
      className: u,
      ...l
    }
  );
}), hs = Bn(({
  as: t,
  className: e,
  color: n,
  icon: r,
  iconPosition: o = "left",
  size: i,
  selected: l,
  ...s
}, u) => {
  const a = On({ className: e, color: n, icon: r, iconPosition: o, size: i });
  return /* @__PURE__ */ m(
    t === "a" ? $e : t || "button",
    {
      "data-fr-js-disable": "true",
      ref: u,
      className: a,
      "aria-pressed": l,
      ...s
    }
  );
}), gs = Bn(({
  as: t,
  className: e,
  color: n,
  icon: r,
  iconPosition: o = "left",
  size: i,
  ...l
}, s) => {
  const u = y("fr-tag--dismiss", On({ className: e, color: n, icon: r, iconPosition: o, size: i }));
  return /* @__PURE__ */ m(
    t === "a" ? $e : t || "button",
    {
      ref: s,
      className: u,
      ...l
    }
  );
}), id = ({
  className: t,
  children: e,
  ...n
}) => {
  const r = ie(), o = y("fr-tags-group", t);
  return /* @__PURE__ */ m("ul", { className: o, ...ze(n), children: pt(e, [vs, hs, gs]).map((i, l) => /* @__PURE__ */ m("li", { children: i }, `${r}-${l}`)) });
}, $s = {
  config: { attributes: !0, childList: !1, subtree: !1 }
};
function ys(t, e, n = $s) {
  const [r, o] = J(null);
  G(() => {
    const i = new MutationObserver(e);
    o(i);
  }, [e, n, o]), G(() => {
    if (!r || !t)
      return;
    const { config: i } = n;
    return r.observe(t, i), () => {
      r && r.disconnect();
    };
  }, [r, t, n]);
}
const xs = me(({
  title: t,
  titleAs: e = "h3",
  children: n,
  className: r,
  css: o = {},
  defaultExpanded: i = !1,
  ...l
}, s) => {
  const u = ie(), a = B(null), [c, f] = J(!!i), p = oe(
    (d) => {
      var h;
      if (d.find((x) => x.attributeName === "aria-expanded") && ((h = a == null ? void 0 : a.current) != null && h.attributes)) {
        const x = a.current.attributes.getNamedItem("aria-expanded");
        f(x ? x.value === "true" : !1);
      }
    },
    [a]
  );
  return ys(a == null ? void 0 : a.current, p), /* @__PURE__ */ R("section", { className: y("fr-accordion", r), children: [
    /* @__PURE__ */ m(
      e,
      {
        className: y("fr-accordion__title", o.title),
        children: /* @__PURE__ */ m(
          "button",
          {
            ...l,
            ref: (d) => bt(d, [s, a]),
            className: y("fr-accordion__btn", o.button),
            "aria-expanded": i,
            "aria-controls": u,
            children: ge(t) || typeof t == "string" ? t : typeof t == "function" ? t(c) : null
          }
        )
      }
    ),
    /* @__PURE__ */ m("div", { className: "fr-collapse", id: u, children: n })
  ] });
}), ld = ({ children: t, className: e, ...n }) => {
  const r = ie();
  return /* @__PURE__ */ m("div", { className: y("fr-accordions-group", e), ...n, children: de(t, xs).map((o, i) => /* @__PURE__ */ m($n, { children: o }, `${r}-d${i}`)) });
}, sd = me(({
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
  const f = B(null), p = (d) => {
    var v;
    d.preventDefault(), (v = f.current) == null || v.remove(), o && o(d);
  };
  return /* @__PURE__ */ R(
    "div",
    {
      ref: (d) => bt(d, [c, f]),
      className: y(`fr-alert fr-alert--${u}`, { "fr-alert--sm": r === "sm" }, t),
      ...a,
      children: [
        i && /* @__PURE__ */ m(s, { className: y("fr-alert__title", l.title), children: i }),
        n && /* @__PURE__ */ m("p", { className: y(l.description), children: n }),
        e === "uncontrolled" && /* @__PURE__ */ m("button", { onClick: p, className: y("fr-btn--close fr-btn", l.button), children: "Masquer le message" }),
        e === "controlled" && /* @__PURE__ */ m("button", { onClick: o, className: y("fr-link--close fr-link", l.button), children: "Masquer le message" })
      ]
    }
  );
});
const ud = ({
  children: t,
  closeMode: e = "disallow",
  type: n = "info",
  className: r,
  css: o = {},
  onClose: i,
  ...l
}) => {
  const s = B(null), u = (c) => {
    var f;
    c.preventDefault(), (f = s.current) == null || f.remove(), i && i(c);
  }, a = y("fr-notice", {
    "fr-notice--info": n === "info",
    [`react-dsfr-notice--${n}`]: n !== "info"
  }, r);
  return /* @__PURE__ */ m("div", { ref: s, className: a, ...l, children: /* @__PURE__ */ m("div", { className: y("fr-container", o["fr-container"]), children: /* @__PURE__ */ R("div", { className: y("fr-notice__body", o["fr-notice__body"]), children: [
    /* @__PURE__ */ m("p", { className: y("fr-notice__title", o["fr-notice__title"]), children: t }),
    e !== "disallow" && /* @__PURE__ */ m(
      "button",
      {
        onClick: e === "uncontrolled" ? u : i,
        className: y("fr-btn--close", "fr-btn", o["fr-btn--close"]),
        children: "Masquer le message"
      }
    )
  ] }) }) });
}, Cs = ({
  className: t,
  index: e,
  ...n
}) => /* @__PURE__ */ m(
  "div",
  {
    id: `${e}-panel`,
    className: y("fr-tabs__panel", t),
    role: "tabpanel",
    "aria-labelledby": `${e}-button`,
    tabIndex: n["aria-selected"] ? -1 : 0,
    ...n
  }
), ad = ({
  className: t,
  children: e,
  defaultActiveIndex: n = 0,
  css: r = {},
  onTabChange: o,
  ...i
}) => {
  const l = ie(), s = i.id || l, u = de(e, Cs).filter((a) => ge(a)).map(
    (a, c) => Te(
      a,
      { index: `${s}-${c}` }
    )
  );
  return /* @__PURE__ */ R(
    "div",
    {
      id: s,
      className: y("fr-tabs", t),
      ...i,
      children: [
        /* @__PURE__ */ m("ul", { className: y("fr-tabs__list", r.ul), role: "tablist", children: u.map((a, c) => /* @__PURE__ */ m("li", { className: y(r.li), role: "presentation", children: /* @__PURE__ */ m(
          "button",
          {
            onClick: (f) => {
              o && (o(c), f.preventDefault());
            },
            id: `${s}-${c}-button`,
            className: y(
              "fr-tabs__tab",
              {
                [`fr-icon-${a.props.icon}`]: ge(a) && a.props.icon,
                "fr-tabs__tab--icon-left": ge(a) && a.props.icon
              },
              r.button
            ),
            tabIndex: n === c ? 0 : -1,
            role: "tab",
            "aria-selected": n === c ? "true" : "false",
            "aria-controls": `${s}-${c}-panel`,
            children: ge(a) && a.props.label
          }
        ) }, `${s}-${c}`)) }),
        u
      ]
    }
  );
};
const cd = ({
  children: t,
  className: e,
  css: n = {},
  fullHeight: r,
  position: o,
  sticky: i,
  title: l,
  ...s
}) => {
  const u = ie(), a = y("fr-sidemenu", e, {
    "fr-sidemenu--sticky": i && !r,
    "fr-sidemenu--sticky-full-height": r,
    "fr-sidemenu--right": o === "right"
  });
  return /* @__PURE__ */ m("nav", { className: a, "aria-label": "Menu latéral", ...ze(s), children: /* @__PURE__ */ R("div", { className: y("fr-sidemenu__inner", n["fr-sidemenu__inner"]), children: [
    /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        className: y("fr-sidemenu__btn", n["fr-sidemenu__btn"]),
        "aria-controls": u,
        "aria-expanded": !1,
        children: l || "Dans cette rubrique"
      }
    ),
    /* @__PURE__ */ R("div", { className: "fr-collapse", id: u, children: [
      l && /* @__PURE__ */ m("div", { className: y("fr-sidemenu__title", n["fr-sidemenu__title"]), children: l }),
      /* @__PURE__ */ m("ul", { className: y("fr-sidemenu__list", n["fr-sidemenu__list"]), children: pt(t, [to, $e]).map((c, f) => ge(c) && /* @__PURE__ */ m("li", { className: y("fr-sidemenu__item", n["fr-sidemenu__item"]), children: c.type === $e ? Te(c, { className: y("fr-sidemenu__link", c.props.className) }) : c }, `navitem-${u}-${f}`)) })
    ] })
  ] }) });
}, to = ({
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
  const a = ie(), c = pt(t, [to, $e]);
  return /* @__PURE__ */ R(kn, { children: [
    /* @__PURE__ */ m(
      "button",
      {
        className: y("fr-sidemenu__btn", e),
        "aria-expanded": o,
        "aria-controls": a,
        "aria-current": r || void 0,
        ...u,
        children: /* @__PURE__ */ m("span", { className: l && `react-dsfr-sidemenu-title--icon fr-icon-${l} fr-icon--sm`, children: s })
      }
    ),
    /* @__PURE__ */ m("div", { className: "fr-collapse", id: a, children: /* @__PURE__ */ m("ul", { className: y("fr-sidemenu__list", n["fr-sidemenu__list"]), children: c.map((f, p) => /* @__PURE__ */ m("li", { className: y("fr-sidemenu__item", n["fr-sidemenu__item"]), children: ge(f) && f.type === $e ? Te(f, { className: y("fr-sidemenu__link", f.props.className) }) : f }, `navitem-${a}-${p}`)) }) })
  ] });
}, dd = ({
  children: t,
  className: e,
  css: n = {},
  current: r,
  icon: o,
  ...i
}) => /* @__PURE__ */ m("li", { className: y("fr-sidemenu__item", e), children: /* @__PURE__ */ m(
  $e,
  {
    className: y("fr-sidemenu__link", n["fr-sidemenu__link"]),
    "aria-current": r || void 0,
    ...i,
    children: /* @__PURE__ */ m("span", { className: o && `react-dsfr-sidemenu-title--icon fr-icon-${o} fr-icon--sm`, children: t })
  }
) }), fd = me(({
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
  const { extendRequiredFieldsLabelsWith: h, extendOptionalFieldsLabelsWith: x } = ft(), [_, w] = J(""), S = i || ie(), K = B(null), g = s !== void 0 || u !== void 0, k = y("fr-input", {
    "fr-input--error": g ? u === "error" : _ === "error",
    "fr-input--valid": g ? u === "valid" : _ === "valid"
  }, e["fr-input"]), O = y("fr-input-group", {
    "fr-input-group--error": g ? u === "error" : _ === "error",
    "fr-input-group--valid": g ? u === "valid" : _ === "valid",
    "fr-input-group--disabled": f
  }, t), b = (I) => {
    const C = K.current;
    !n && !g && C && w(C.checkValidity() ? "valid" : "error"), a && a(I);
  }, A = (I) => {
    const C = K.current;
    !n && !g && C && _ && w(C.checkValidity() ? "valid" : "error"), c && c(I);
  }, E = g || n ? u && /* @__PURE__ */ m("p", { className: `fr-${u || "error"}-text`, id: `${S}-message`, children: s }) : _ === "error" && !n && /* @__PURE__ */ m("p", { className: `fr-${_ || "error"}-text`, id: `${S}-message`, children: (P = K.current) == null ? void 0 : P.validationMessage });
  return /* @__PURE__ */ R("div", { className: O, children: [
    /* @__PURE__ */ R("label", { className: y("fr-label", e["fr-label"]), htmlFor: S, children: [
      l,
      p ? h : x,
      r && /* @__PURE__ */ m("span", { className: y("fr-hint-text", e["fr-hint-text"]), children: r })
    ] }),
    /* @__PURE__ */ m("div", { className: y("fr-input-wrap", { [`fr-icon-${o}`]: o }, e["fr-input-wrap"]), children: /* @__PURE__ */ m(
      "input",
      {
        id: S,
        className: k,
        onBlur: b,
        onChange: A,
        ref: (I) => bt(I, [v, K]),
        "aria-describedby": E ? `${S}-message` : void 0,
        ...d
      }
    ) }),
    E && E
  ] });
}), pd = me(({
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
  const { extendRequiredFieldsLabelsWith: h, extendOptionalFieldsLabelsWith: x } = ft(), [_, w] = J(""), S = i || ie(), K = B(null), g = s !== void 0 || u !== void 0, k = y("fr-input", {
    "fr-input--error": g ? u === "error" : _ === "error",
    "fr-input--valid": g ? u === "valid" : _ === "valid"
  }, e["fr-input"]), O = y("fr-input-group", {
    "fr-input-group--error": g ? u === "error" : _ === "error",
    "fr-input-group--valid": g ? u === "valid" : _ === "valid",
    "fr-input-group--disabled": f
  }, t), b = (I) => {
    const C = K.current;
    !n && !g && C && w(C.checkValidity() ? "valid" : "error"), a && a(I);
  }, A = (I) => {
    const C = K.current;
    !n && !g && C && _ && w(C.checkValidity() ? "valid" : "error"), c && c(I);
  }, E = g || n ? u && /* @__PURE__ */ m("p", { className: `fr-${u || "error"}-text`, id: `${S}-message`, children: s }) : _ === "error" && !n && /* @__PURE__ */ m("p", { className: `fr-${_ || "error"}-text`, id: `${S}-message`, children: (P = K.current) == null ? void 0 : P.validationMessage });
  return /* @__PURE__ */ R("div", { className: O, children: [
    /* @__PURE__ */ R("label", { className: y("fr-label", e["fr-label"]), htmlFor: S, children: [
      l,
      p ? h : x,
      r && /* @__PURE__ */ m("span", { className: y("fr-hint-text", e["fr-hint-text"]), children: r })
    ] }),
    /* @__PURE__ */ m("div", { className: y("fr-input-wrap", { [`fr-icon-${o}`]: o }, e["fr-input-wrap"]), children: /* @__PURE__ */ m(
      "textarea",
      {
        id: S,
        className: k,
        onBlur: b,
        onChange: A,
        ref: (I) => bt(I, [v, K]),
        "aria-describedby": E ? `${S}-message` : void 0,
        ...d
      }
    ) }),
    E && E
  ] });
});
function Es(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var yn = { exports: {} }, ht = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function Ps() {
  if (lr)
    return te;
  lr = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, a = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, x = t ? Symbol.for("react.fundamental") : 60117, _ = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
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
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case c:
                case v:
                case d:
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
  return te.AsyncMode = u, te.ConcurrentMode = a, te.ContextConsumer = s, te.ContextProvider = l, te.Element = e, te.ForwardRef = c, te.Fragment = r, te.Lazy = v, te.Memo = d, te.Portal = n, te.Profiler = i, te.StrictMode = o, te.Suspense = f, te.isAsyncMode = function(g) {
    return K(g) || S(g) === u;
  }, te.isConcurrentMode = K, te.isContextConsumer = function(g) {
    return S(g) === s;
  }, te.isContextProvider = function(g) {
    return S(g) === l;
  }, te.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, te.isForwardRef = function(g) {
    return S(g) === c;
  }, te.isFragment = function(g) {
    return S(g) === r;
  }, te.isLazy = function(g) {
    return S(g) === v;
  }, te.isMemo = function(g) {
    return S(g) === d;
  }, te.isPortal = function(g) {
    return S(g) === n;
  }, te.isProfiler = function(g) {
    return S(g) === i;
  }, te.isStrictMode = function(g) {
    return S(g) === o;
  }, te.isSuspense = function(g) {
    return S(g) === f;
  }, te.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === a || g === i || g === o || g === f || g === p || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === d || g.$$typeof === l || g.$$typeof === s || g.$$typeof === c || g.$$typeof === x || g.$$typeof === _ || g.$$typeof === w || g.$$typeof === h);
  }, te.typeOf = S, te;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function ws() {
  return sr || (sr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, a = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, x = t ? Symbol.for("react.fundamental") : 60117, _ = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === a || M === i || M === o || M === f || M === p || typeof M == "object" && M !== null && (M.$$typeof === v || M.$$typeof === d || M.$$typeof === l || M.$$typeof === s || M.$$typeof === c || M.$$typeof === x || M.$$typeof === _ || M.$$typeof === w || M.$$typeof === h);
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
    var g = u, k = a, O = s, b = l, A = e, E = c, P = r, I = v, C = d, T = n, q = i, V = o, F = f, ue = !1;
    function ae(M) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(M) || K(M) === u;
    }
    function $(M) {
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
      return K(M) === d;
    }
    function N(M) {
      return K(M) === n;
    }
    function X(M) {
      return K(M) === i;
    }
    function W(M) {
      return K(M) === o;
    }
    function Z(M) {
      return K(M) === f;
    }
    ne.AsyncMode = g, ne.ConcurrentMode = k, ne.ContextConsumer = O, ne.ContextProvider = b, ne.Element = A, ne.ForwardRef = E, ne.Fragment = P, ne.Lazy = I, ne.Memo = C, ne.Portal = T, ne.Profiler = q, ne.StrictMode = V, ne.Suspense = F, ne.isAsyncMode = ae, ne.isConcurrentMode = $, ne.isContextConsumer = D, ne.isContextProvider = z, ne.isElement = j, ne.isForwardRef = H, ne.isFragment = Y, ne.isLazy = U, ne.isMemo = L, ne.isPortal = N, ne.isProfiler = X, ne.isStrictMode = W, ne.isSuspense = Z, ne.isValidElementType = S, ne.typeOf = K;
  }()), ne;
}
var ur;
function no() {
  return ur || (ur = 1, process.env.NODE_ENV === "production" ? ht.exports = Ps() : ht.exports = ws()), ht.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Jt, ar;
function Ss() {
  if (ar)
    return Jt;
  ar = 1;
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
  return Jt = o() ? Object.assign : function(i, l) {
    for (var s, u = r(i), a, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var f in s)
        e.call(s, f) && (u[f] = s[f]);
      if (t) {
        a = t(s);
        for (var p = 0; p < a.length; p++)
          n.call(s, a[p]) && (u[a[p]] = s[a[p]]);
      }
    }
    return u;
  }, Jt;
}
var Qt, cr;
function Rn() {
  if (cr)
    return Qt;
  cr = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qt = t, Qt;
}
var en, dr;
function ro() {
  return dr || (dr = 1, en = Function.call.bind(Object.prototype.hasOwnProperty)), en;
}
var tn, fr;
function Ts() {
  if (fr)
    return tn;
  fr = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Rn(), n = {}, r = ro();
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
              var p = Error(
                (u || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
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
  }, tn = o, tn;
}
var nn, pr;
function _s() {
  if (pr)
    return nn;
  pr = 1;
  var t = no(), e = Ss(), n = Rn(), r = ro(), o = Ts(), i = function() {
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
  return nn = function(s, u) {
    var a = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f($) {
      var D = $ && (a && $[a] || $[c]);
      if (typeof D == "function")
        return D;
    }
    var p = "<<anonymous>>", d = {
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
      objectOf: b,
      oneOf: O,
      oneOfType: A,
      shape: I,
      exact: C
    };
    function v($, D) {
      return $ === D ? $ !== 0 || 1 / $ === 1 / D : $ !== $ && D !== D;
    }
    function h($, D) {
      this.message = $, this.data = D && typeof D == "object" ? D : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function x($) {
      if (process.env.NODE_ENV !== "production")
        var D = {}, z = 0;
      function j(Y, U, L, N, X, W, Z) {
        if (N = N || p, W = W || L, Z !== n) {
          if (u) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = N + ":" + L;
            !D[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + N + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), D[ye] = !0, z++);
          }
        }
        return U[L] == null ? Y ? U[L] === null ? new h("The " + X + " `" + W + "` is marked as required " + ("in `" + N + "`, but its value is `null`.")) : new h("The " + X + " `" + W + "` is marked as required in " + ("`" + N + "`, but its value is `undefined`.")) : null : $(U, L, N, X, W);
      }
      var H = j.bind(null, !1);
      return H.isRequired = j.bind(null, !0), H;
    }
    function _($) {
      function D(z, j, H, Y, U, L) {
        var N = z[j], X = V(N);
        if (X !== $) {
          var W = F(N);
          return new h(
            "Invalid " + Y + " `" + U + "` of type " + ("`" + W + "` supplied to `" + H + "`, expected ") + ("`" + $ + "`."),
            { expectedType: $ }
          );
        }
        return null;
      }
      return x(D);
    }
    function w() {
      return x(l);
    }
    function S($) {
      function D(z, j, H, Y, U) {
        if (typeof $ != "function")
          return new h("Property `" + U + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var L = z[j];
        if (!Array.isArray(L)) {
          var N = V(L);
          return new h("Invalid " + Y + " `" + U + "` of type " + ("`" + N + "` supplied to `" + H + "`, expected an array."));
        }
        for (var X = 0; X < L.length; X++) {
          var W = $(L, X, H, Y, U + "[" + X + "]", n);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return x(D);
    }
    function K() {
      function $(D, z, j, H, Y) {
        var U = D[z];
        if (!s(U)) {
          var L = V(U);
          return new h("Invalid " + H + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x($);
    }
    function g() {
      function $(D, z, j, H, Y) {
        var U = D[z];
        if (!t.isValidElementType(U)) {
          var L = V(U);
          return new h("Invalid " + H + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x($);
    }
    function k($) {
      function D(z, j, H, Y, U) {
        if (!(z[j] instanceof $)) {
          var L = $.name || p, N = ae(z[j]);
          return new h("Invalid " + Y + " `" + U + "` of type " + ("`" + N + "` supplied to `" + H + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return x(D);
    }
    function O($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), l;
      function D(z, j, H, Y, U) {
        for (var L = z[j], N = 0; N < $.length; N++)
          if (v(L, $[N]))
            return null;
        var X = JSON.stringify($, function(Z, M) {
          var ye = F(M);
          return ye === "symbol" ? String(M) : M;
        });
        return new h("Invalid " + Y + " `" + U + "` of value `" + String(L) + "` " + ("supplied to `" + H + "`, expected one of " + X + "."));
      }
      return x(D);
    }
    function b($) {
      function D(z, j, H, Y, U) {
        if (typeof $ != "function")
          return new h("Property `" + U + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var L = z[j], N = V(L);
        if (N !== "object")
          return new h("Invalid " + Y + " `" + U + "` of type " + ("`" + N + "` supplied to `" + H + "`, expected an object."));
        for (var X in L)
          if (r(L, X)) {
            var W = $(L, X, H, Y, U + "." + X, n);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return x(D);
    }
    function A($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var D = 0; D < $.length; D++) {
        var z = $[D];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(z) + " at index " + D + "."
          ), l;
      }
      function j(H, Y, U, L, N) {
        for (var X = [], W = 0; W < $.length; W++) {
          var Z = $[W], M = Z(H, Y, U, L, N, n);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && X.push(M.data.expectedType);
        }
        var ye = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new h("Invalid " + L + " `" + N + "` supplied to " + ("`" + U + "`" + ye + "."));
      }
      return x(j);
    }
    function E() {
      function $(D, z, j, H, Y) {
        return T(D[z]) ? null : new h("Invalid " + H + " `" + Y + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return x($);
    }
    function P($, D, z, j, H) {
      return new h(
        ($ || "React class") + ": " + D + " type `" + z + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function I($) {
      function D(z, j, H, Y, U) {
        var L = z[j], N = V(L);
        if (N !== "object")
          return new h("Invalid " + Y + " `" + U + "` of type `" + N + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var X in $) {
          var W = $[X];
          if (typeof W != "function")
            return P(H, Y, U, X, F(W));
          var Z = W(L, X, H, Y, U + "." + X, n);
          if (Z)
            return Z;
        }
        return null;
      }
      return x(D);
    }
    function C($) {
      function D(z, j, H, Y, U) {
        var L = z[j], N = V(L);
        if (N !== "object")
          return new h("Invalid " + Y + " `" + U + "` of type `" + N + "` " + ("supplied to `" + H + "`, expected `object`."));
        var X = e({}, z[j], $);
        for (var W in X) {
          var Z = $[W];
          if (r($, W) && typeof Z != "function")
            return P(H, Y, U, W, F(Z));
          if (!Z)
            return new h(
              "Invalid " + Y + " `" + U + "` key `" + W + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(z[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys($), null, "  ")
            );
          var M = Z(L, W, H, Y, U + "." + W, n);
          if (M)
            return M;
        }
        return null;
      }
      return x(D);
    }
    function T($) {
      switch (typeof $) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
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
          return "regexp";
      }
      return D;
    }
    function ue($) {
      var D = F($);
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
    function ae($) {
      return !$.constructor || !$.constructor.name ? p : $.constructor.name;
    }
    return d.checkPropTypes = o, d.resetWarningCache = o.resetWarningCache, d.PropTypes = d, d;
  }, nn;
}
var rn, br;
function As() {
  if (br)
    return rn;
  br = 1;
  var t = Rn();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, rn = function() {
    function r(l, s, u, a, c, f) {
      if (f !== t) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
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
  }, rn;
}
if (process.env.NODE_ENV !== "production") {
  var Ks = no(), Ds = !0;
  yn.exports = _s()(Ks.isElement, Ds);
} else
  yn.exports = As()();
var Fs = yn.exports;
const Ls = /* @__PURE__ */ Es(Fs), Ms = "_spinner_1sjgh_5", ks = "_internal_1sjgh_40", Ns = "_external_1sjgh_41", Is = {
  spinner: Ms,
  "internal-circle": "_internal-circle_1sjgh_40",
  "external-circle": "_external-circle_1sjgh_41",
  internal: ks,
  external: Ns,
  "spinner-overlay": "_spinner-overlay_1sjgh_57"
};
function oo({ size: t }) {
  const e = ie();
  return G(() => {
    var n, r;
    (n = document == null ? void 0 : document.getElementById(e)) == null || n.style.setProperty("width", `${t}px`), (r = document == null ? void 0 : document.getElementById(e)) == null || r.style.setProperty("height", `${t}px`);
  }, [t, e]), /* @__PURE__ */ R("svg", { id: e, className: Is.spinner, viewBox: "0 0 120 120", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ m("circle", { className: "internal-circle", cx: "60", cy: "60", r: "30" }),
    /* @__PURE__ */ m("circle", { className: "external-circle", cx: "60", cy: "60", r: "50" })
  ] });
}
oo.propTypes = {
  size: Ls.number
};
oo.defaultProps = {
  size: 48
};
const bd = me(({
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
  const f = ie(), { extendRequiredFieldsLabelsWith: p, extendOptionalFieldsLabelsWith: d } = ft();
  return /* @__PURE__ */ R(
    "fieldset",
    {
      ref: c,
      className: y("fr-fieldset", { [`fr-fieldset--${s}`]: s }, e),
      ...ze(a),
      "aria-labelledby": l && s ? `${f}-message` : void 0,
      children: [
        i && /* @__PURE__ */ R("legend", { className: y("fr-fieldset__legend fr-text--regular", n.legend), children: [
          i,
          u ? p : d,
          r && /* @__PURE__ */ m("span", { className: y("fr-hint-text", n.legendHint), children: r })
        ] }),
        Ot.toArray(t).map((v, h) => /* @__PURE__ */ m("div", { className: y("fr-fieldset__element", { "fr-fieldset__element--inline": o }, n.element), children: v }, `${f}-${h}`)),
        l && s && /* @__PURE__ */ m("div", { id: `${f}-message`, className: y("fr-messages-group", n.messageDiv), children: /* @__PURE__ */ m("p", { className: y(`fr-message fr-message--${s}`, n.messageP), children: l }) })
      ]
    }
  );
}), md = me(({
  className: t,
  css: e = {},
  hint: n,
  id: r,
  label: o,
  imageComponent: i,
  ...l
}, s) => {
  const u = r || ie();
  return /* @__PURE__ */ R("div", { className: y("fr-radio-group", { "fr-radio-rich": i }, t), children: [
    /* @__PURE__ */ m(
      "input",
      {
        ref: s,
        ...l,
        type: "radio",
        id: u
      }
    ),
    /* @__PURE__ */ R(
      "label",
      {
        className: y("fr-label"),
        htmlFor: u,
        children: [
          o,
          n && /* @__PURE__ */ m("p", { className: y("fr-hint-text"), children: n })
        ]
      }
    ),
    i && /* @__PURE__ */ m("div", { className: y("fr-radio-rich__img"), children: i })
  ] });
}), vd = me(({
  className: t,
  css: e = {},
  hint: n,
  id: r,
  label: o,
  size: i,
  ...l
}, s) => {
  const u = ie(), a = r || u;
  return /* @__PURE__ */ R("div", { className: y("fr-checkbox-group", { "fr-checkbox-group--sm": i === "sm" }, t), children: [
    /* @__PURE__ */ m(
      "input",
      {
        ref: s,
        type: "checkbox",
        id: a,
        className: y(e.input),
        ...l
      }
    ),
    /* @__PURE__ */ R("label", { className: y("fr-label", e.label), htmlFor: a, children: [
      o,
      n && /* @__PURE__ */ m("span", { className: y("fr-hint-text", e.labelHint), children: n })
    ] })
  ] });
}), hd = ({
  className: t,
  currentStep: e,
  currentTitle: n,
  nextStepTitle: r,
  steps: o,
  titleAs: i = "h4",
  ...l
}) => /* @__PURE__ */ R("div", { className: y("fr-stepper", t), ...l, children: [
  /* @__PURE__ */ R(i, { className: "fr-stepper__title", children: [
    /* @__PURE__ */ m("span", { className: "fr-stepper__state", children: `Étape ${e} sur ${o}` }),
    n
  ] }),
  /* @__PURE__ */ m("div", { className: "fr-stepper__steps", "data-fr-current-step": e, "data-fr-steps": o }),
  /* @__PURE__ */ R("p", { className: "fr-stepper__details", children: [
    /* @__PURE__ */ m("span", { className: "fr-text--bold", children: "Étape suivante : " }),
    r
  ] })
] }), gd = ({
  as: t = "p",
  size: e,
  alt: n,
  bold: r,
  className: o,
  ...i
}) => {
  const l = y(o, {
    "fr-text--alt": e !== "lead" && n,
    "fr-text--heavy": r,
    [`fr-text--${e}`]: e && e !== "md"
  });
  return /* @__PURE__ */ m(t, { className: l, ...i });
}, $d = ({
  as: t = "h1",
  className: e,
  look: n,
  ...r
}) => {
  const o = n && ["xs", "sm", "md", "lg", "xl"].includes(n), i = y(e, {
    [`fr-${n}`]: !o && n && n !== t,
    [`fr-display-${n}`]: o
  });
  return /* @__PURE__ */ m(t, { className: i, ...r });
}, yd = ({
  buttonLabel: t = "Voir le fil d’Ariane",
  children: e,
  className: n,
  css: r = {},
  ...o
}) => {
  const i = ie();
  return /* @__PURE__ */ R("nav", { role: "navigation", "aria-label": o["aria-label"] || "vous êtes ici:", className: y("fr-breadcrumb", n), ...o, children: [
    /* @__PURE__ */ m("button", { className: y("fr-breadcrumb__button", r.button), "aria-expanded": "false", "aria-controls": "breadcrumb-1", children: t || "Voir le fil d’Ariane" }),
    /* @__PURE__ */ m("div", { className: "fr-collapse", id: "breadcrumb-1", children: /* @__PURE__ */ m("ol", { className: y("fr-breadcrumb__list", r.list), children: de(e, $e).filter((l) => ge(l)).map((l, s, { length: u }) => /* @__PURE__ */ m("li", { className: y(r.item), children: Te(l, {
      className: y("fr-breadcrumb__link"),
      "aria-current": s + 1 === u ? "page" : void 0
    }) }, `${i}-${s}`)) }) })
  ] });
}, xd = me(({
  id: t,
  className: e,
  css: n = {},
  errorMessage: r,
  hint: o,
  label: i = "Ajouter des fichiers",
  ...l
}, s) => {
  const u = ie(), a = t || u, { extendOptionalFieldsLabelsWith: c, extendRequiredFieldsLabelsWith: f } = ft();
  return /* @__PURE__ */ R("div", { className: y("fr-upload-group", { "fr-input-group--error": r, "fr-input-group--disabled": l.disabled }, e), children: [
    /* @__PURE__ */ R("label", { className: y("fr-label", n.label), htmlFor: a, children: [
      i,
      l.required ? f : c,
      o && /* @__PURE__ */ m("span", { className: "fr-hint-text", children: o })
    ] }),
    /* @__PURE__ */ m(
      "input",
      {
        ref: s,
        id: a,
        className: y("fr-upload", n.input),
        type: "file",
        "aria-describedby": r ? `${a}-message` : void 0,
        ...l
      }
    ),
    r && /* @__PURE__ */ m("p", { id: `${a}-message`, className: y("fr-error-text", n.errorParagraph), children: r })
  ] });
}), io = me(({
  children: t,
  className: e,
  icon: n,
  id: r,
  ...o
}, i) => {
  const l = y("fr-modal__title", e);
  return /* @__PURE__ */ R(
    "h1",
    {
      ref: i,
      className: l,
      id: `${r}-title`,
      ...ze(o),
      children: [
        n && /* @__PURE__ */ m("span", { className: `fr-icon-${n} fr-icon--lg` }),
        t
      ]
    }
  );
}), Tt = me(({
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
    className: y("fr-btn--close fr-btn", t),
    type: "button",
    ...r,
    children: n
  }
)), Bs = 9, mr = 'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
function Os(t, e, n) {
  function r(o) {
    var a;
    const i = [
      ...(a = t.current) == null ? void 0 : a.querySelectorAll(mr)
    ].filter((c) => !c.hasAttribute("disabled")), l = i[0], s = i[i.length - 1];
    (o.key === "Tab" || o.keyCode === Bs) && (console.log("handleFocus", o), o.shiftKey ? document.activeElement === l && (s.focus(), o.preventDefault()) : (document.activeElement === s || document.activeElement === n) && (l.focus(), o.preventDefault()));
  }
  return G(() => {
    var o;
    if (e) {
      console.log("here");
      const i = [
        ...(o = t.current) == null ? void 0 : o.querySelectorAll(mr)
      ].filter((l) => !l.hasAttribute("disabled"));
      console.log("focusableEls", i[0]), document.addEventListener("keydown", r);
    } else
      n == null || n.focus();
    return () => document.removeEventListener("keydown", r);
  }, [e, t, n]), t;
}
const Rs = ({
  children: t,
  hide: e,
  size: n = "md",
  id: r,
  className: o,
  isOpen: i,
  canClose: l,
  ...s
}) => {
  var k, O, b;
  const [u, a] = J(null), f = { sm: 4, lg: 8, md: 6, xl: 10 }[n], p = y("fr-modal", o), d = B(null), v = (k = de(t, io)) == null ? void 0 : k[0], h = de(t, lo), x = (O = de(t, so)) == null ? void 0 : O[0], _ = (b = de(t, Tt)) == null ? void 0 : b[0], w = r || ie();
  G(() => {
    var E, P;
    d.current && (i && (a(document.activeElement), (E = document == null ? void 0 : document.getElementById(w)) == null || E.classList.add("fr-modal--opened")), i || (P = document == null ? void 0 : document.getElementById(w)) == null || P.classList.remove("fr-modal--opened"));
  }, [i]), G(() => {
    const A = d.current;
    if (A)
      return A.addEventListener("dsfr.conceal", (E) => E.stopPropagation()), A.addEventListener("dsfr.disclose", (E) => E.stopPropagation()), () => {
        A.removeEventListener("dsfr.conceal", (E) => E.stopPropagation()), A.removeEventListener("dsfr.disclose", (E) => E.stopPropagation());
      };
  }, []);
  const S = (A) => {
    l && (!d.current || d.current === A.target || A.target.className.indexOf("closing-overlay") > -1) && e();
  };
  Os(d, i, u);
  const K = _ ? Te(_, { onClick: () => e(), controls: w }) : l ? /* @__PURE__ */ m(Tt, { onClick: () => e(), controls: w }) : null, g = /* @__PURE__ */ m(
    "dialog",
    {
      "aria-labelledby": `${w}-title`,
      "aria-modal": "true",
      className: p,
      ref: d,
      id: w,
      role: "dialog",
      onClick: (A) => S(A),
      ...s,
      children: /* @__PURE__ */ m("div", { className: "fr-container fr-container--fluid fr-container-md", children: /* @__PURE__ */ m("div", { className: "fr-grid-row fr-grid-row--center closing-overlay", children: /* @__PURE__ */ m("div", { className: `fr-col-12 fr-col-md-${f}`, children: /* @__PURE__ */ R("div", { className: "fr-modal__body", children: [
        /* @__PURE__ */ m("div", { className: "fr-modal__header", children: K }),
        /* @__PURE__ */ R("div", { className: "fr-modal__content", children: [
          v && Te(v, { id: w }),
          h ?? null
        ] }),
        x
      ] }) }) }) })
    }
  );
  return In.createPortal(
    g,
    document.body
  );
}, Vs = ({
  children: t,
  size: e = "md",
  id: n,
  className: r,
  ...o
}) => {
  var v, h, x;
  const l = { sm: 4, lg: 8, md: 6, xl: 10 }[e], s = y("fr-modal", r), u = (v = de(t, io)) == null ? void 0 : v[0], a = de(t, lo), c = (h = de(t, so)) == null ? void 0 : h[0], f = (x = de(t, Tt)) == null ? void 0 : x[0], p = f ? Te(f, { controls: n }) : /* @__PURE__ */ m(Tt, { controls: n }), d = /* @__PURE__ */ m(
    "dialog",
    {
      "aria-labelledby": `${n}-title`,
      className: s,
      id: n,
      role: "dialog",
      ...o,
      children: /* @__PURE__ */ m("div", { className: "fr-container fr-container--fluid fr-container-md", children: /* @__PURE__ */ m("div", { className: "fr-grid-row fr-grid-row--center closing-overlay", children: /* @__PURE__ */ m("div", { className: `fr-col-12 fr-col-md-${l}`, children: /* @__PURE__ */ R("div", { className: "fr-modal__body", children: [
        /* @__PURE__ */ m("div", { className: "fr-modal__header", children: p }),
        /* @__PURE__ */ R("div", { className: "fr-modal__content", children: [
          u && Te(u, { id: n }),
          a ?? null
        ] }),
        c
      ] }) }) }) })
    }
  );
  return In.createPortal(
    d,
    document.body
  );
}, Cd = ({
  id: t,
  size: e = "md",
  hide: n,
  isOpen: r = !1,
  className: o,
  canClose: i = !0,
  ...l
}) => t ? /* @__PURE__ */ m(Vs, { id: t, size: e, className: o, ...l }) : /* @__PURE__ */ m(
  Rs,
  {
    id: t,
    isOpen: r,
    className: o,
    size: e,
    hide: n,
    canClose: i,
    ...l
  }
), lo = me(({
  className: t,
  ...e
}, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    className: y("fr-modal__content", t),
    ...e
  }
)), so = me(({
  className: t,
  ...e
}, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    className: y("fr-modal__footer", t),
    ...e
  }
)), zs = me(({
  className: t,
  css: e = {},
  hasSeparator: n,
  hasLabelLeft: r,
  label: o,
  hint: i,
  ...l
}, s) => {
  const u = ie(), a = l.id || u, c = y("fr-toggle", {
    "fr-toggle--border-bottom": n,
    "fr-toggle--label-left": r
  }, t);
  return /* @__PURE__ */ R(
    "div",
    {
      className: c,
      children: [
        /* @__PURE__ */ m(
          "input",
          {
            ref: s,
            type: "checkbox",
            className: y("fr-toggle__input", e["fr-toggle__input"]),
            id: a,
            ...ze(l, { exclude: ["type"] })
          }
        ),
        /* @__PURE__ */ m(
          "label",
          {
            className: y("fr-toggle__label", e["fr-toggle__label"]),
            htmlFor: a,
            "data-fr-checked-label": "Activé",
            "data-fr-unchecked-label": "Désactivé",
            children: o
          }
        ),
        i && /* @__PURE__ */ m("p", { className: y("fr-hint-text", e["fr-hint-text"]), children: i })
      ]
    }
  );
}), Ed = ({ children: t, className: e, ...n }) => {
  const r = ie();
  return /* @__PURE__ */ m("ul", { className: y("fr-toggle__list", e), ...ze(n), children: de(t, zs).map((o, i) => /* @__PURE__ */ m("li", { children: o }, `${r}-${i}`)) });
};
function js(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Hs(t, e, n) {
  js(t, e), e.set(t, n);
}
function et(t, e, n) {
  let [r, o] = J(t || e), i = B(t !== void 0), l = t !== void 0;
  G(() => {
    let a = i.current;
    a !== l && console.warn(`WARN: A component changed from ${a ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}.`), i.current = l;
  }, [
    l
  ]);
  let s = l ? t : r, u = oe((a, ...c) => {
    let f = (p, ...d) => {
      n && (Object.is(s, p) || n(p, ...d)), l || (s = p);
    };
    typeof a == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o((d, ...v) => {
      let h = a(l ? s : d, ...v);
      return f(h, ...c), l ? d : h;
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
function xn(t, e = -1 / 0, n = 1 / 0) {
  return Math.min(Math.max(t, e), n);
}
const uo = {
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
}, ao = {
  ...uo,
  customError: !0,
  valid: !1
}, tt = {
  isInvalid: !1,
  validationDetails: uo,
  validationErrors: []
}, Us = Nn({}), Cn = "__formValidationState" + Date.now();
function Vn(t) {
  if (t[Cn]) {
    let { realtimeValidation: e, displayValidation: n, updateValidation: r, resetValidation: o, commitValidation: i } = t[Cn];
    return {
      realtimeValidation: e,
      displayValidation: n,
      updateValidation: r,
      resetValidation: o,
      commitValidation: i
    };
  }
  return Ws(t);
}
function Ws(t) {
  let { isInvalid: e, validationState: n, name: r, value: o, builtinValidation: i, validate: l, validationBehavior: s = "aria" } = t;
  n && (e || (e = n === "invalid"));
  let u = e ? {
    isInvalid: !0,
    validationErrors: [],
    validationDetails: ao
  } : null, a = re(() => vr(Gs(l, o)), [
    l,
    o
  ]);
  i != null && i.validationDetails.valid && (i = null);
  let c = Ae(Us), f = re(() => r ? Array.isArray(r) ? r.flatMap((E) => En(c[E])) : En(c[r]) : [], [
    c,
    r
  ]), [p, d] = J(c), [v, h] = J(!1);
  c !== p && (d(c), h(!1));
  let x = re(() => vr(v ? [] : f), [
    v,
    f
  ]), _ = B(tt), [w, S] = J(tt), K = B(tt), g = () => {
    if (!k)
      return;
    O(!1);
    let E = a || i || _.current;
    on(E, K.current) || (K.current = E, S(E));
  }, [k, O] = J(!1);
  return G(g), {
    realtimeValidation: u || x || a || i || tt,
    displayValidation: s === "native" ? u || x || w : u || x || a || i || w,
    updateValidation(E) {
      s === "aria" && !on(w, E) ? S(E) : _.current = E;
    },
    resetValidation() {
      let E = tt;
      on(E, K.current) || (K.current = E, S(E)), s === "native" && O(!1), h(!0);
    },
    commitValidation() {
      s === "native" && O(!0), h(!0);
    }
  };
}
function En(t) {
  return t ? Array.isArray(t) ? t : [
    t
  ] : [];
}
function Gs(t, e) {
  if (typeof t == "function") {
    let n = t(e);
    if (n && typeof n != "boolean")
      return En(n);
  }
  return [];
}
function vr(t) {
  return t.length ? {
    isInvalid: !0,
    validationErrors: t,
    validationDetails: ao
  } : null;
}
function on(t, e) {
  return t === e ? !0 : t && e && t.isInvalid === e.isInvalid && t.validationErrors.length === e.validationErrors.length && t.validationErrors.every((n, r) => n === e.validationErrors[r]) && Object.entries(t.validationDetails).every(([n, r]) => e.validationDetails[n] === r);
}
function co(t) {
  return null;
}
co.getCollectionNode = function* (e, n) {
  let { childItems: r, title: o, children: i } = e, l = e.title || e.children, s = e.textValue || (typeof l == "string" ? l : "") || e["aria-label"] || "";
  !s && !(n != null && n.suppressTextValueWarning) && console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."), yield {
    type: "item",
    props: e,
    rendered: l,
    textValue: s,
    "aria-label": e["aria-label"],
    hasChildNodes: qs(e),
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
function qs(t) {
  return t.hasChildItems != null ? t.hasChildItems : !!(t.childItems || t.title && Q.Children.count(t.children) > 0);
}
let Rt = co;
function fo(t) {
  return null;
}
fo.getCollectionNode = function* (e) {
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
let po = fo;
class Ys {
  build(e, n) {
    return this.context = n, hr(() => this.iterateCollection(e));
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
        let p = typeof i.type == "function" ? i.type.name : i.type;
        throw new Error(`Unknown element <${p}> in collection.`);
      }
      let a = u.getCollectionNode(i.props, this.context), c = e.index, f = a.next();
      for (; !f.done && f.value; ) {
        let p = f.value;
        e.index = c;
        let d = p.key;
        d || (d = p.element ? null : this.getKey(i, e, n, r));
        let h = [
          ...this.getFullNode({
            ...p,
            key: d,
            index: c,
            wrapper: Xs(e.wrapper, p.wrapper)
          }, this.getChildState(n, p), r ? `${r}${i.key}` : i.key, o)
        ];
        for (let x of h) {
          if (x.value = p.value || e.value, x.value && this.cache.set(x.value, x), e.type && x.type !== e.type)
            throw new Error(`Unsupported type <${ln(x.type)}> in <${ln(o.type)}>. Only <${ln(e.type)}> is supported.`);
          c++, yield x;
        }
        f = a.next(h);
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
      childNodes: hr(function* () {
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
function hr(t) {
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
function Xs(t, e) {
  if (t && e)
    return (n) => t(e(n));
  if (t)
    return t;
  if (e)
    return e;
}
function ln(t) {
  return t[0].toUpperCase() + t.slice(1);
}
function bo(t, e, n) {
  let r = re(() => new Ys(), []), { children: o, items: i, collection: l } = t;
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
function Vt(t, e) {
  return typeof e.getChildren == "function" ? e.getChildren(t.key) : t.childNodes;
}
function Zs(t) {
  return Js(t, 0);
}
function Js(t, e) {
  if (e < 0)
    return;
  let n = 0;
  for (let r of t) {
    if (n === e)
      return r;
    n++;
  }
}
function sn(t, e, n) {
  if (e.parentKey === n.parentKey)
    return e.index - n.index;
  let r = [
    ...gr(t, e),
    e
  ], o = [
    ...gr(t, n),
    n
  ], i = r.slice(0, o.length).findIndex((l, s) => l !== o[s]);
  return i !== -1 ? (e = r[i], n = o[i], e.index - n.index) : r.findIndex((l) => l === n) >= 0 ? 1 : (o.findIndex((l) => l === e) >= 0, -1);
}
function gr(t, e) {
  let n = [];
  for (; (e == null ? void 0 : e.parentKey) != null; )
    e = t.getItem(e.parentKey), n.unshift(e);
  return n;
}
const $r = /* @__PURE__ */ new WeakMap();
function zn(t) {
  let e = $r.get(t);
  if (e != null)
    return e;
  e = 0;
  let n = (r) => {
    for (let o of r)
      o.type === "section" ? n(Vt(o, t)) : e++;
  };
  return n(t), $r.set(t, e), e;
}
class we extends Set {
  constructor(e, n, r) {
    super(e), e instanceof we ? (this.anchorKey = n || e.anchorKey, this.currentKey = r || e.currentKey) : (this.anchorKey = n, this.currentKey = r);
  }
}
function Qs(t, e) {
  if (t.size !== e.size)
    return !1;
  for (let n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
function mo(t) {
  let { selectionMode: e = "none", disallowEmptySelection: n, allowDuplicateSelectionEvents: r, selectionBehavior: o = "toggle", disabledBehavior: i = "all" } = t, l = B(!1), [, s] = J(!1), u = B(null), a = B(null), [, c] = J(null), f = re(() => yr(t.selectedKeys), [
    t.selectedKeys
  ]), p = re(() => yr(t.defaultSelectedKeys, new we()), [
    t.defaultSelectedKeys
  ]), [d, v] = et(f, p, t.onSelectionChange), h = re(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), [x, _] = J(o);
  o === "replace" && x === "toggle" && typeof d == "object" && d.size === 0 && _("replace");
  let w = B(o);
  return G(() => {
    o !== w.current && (_(o), w.current = o);
  }, [
    o
  ]), {
    selectionMode: e,
    disallowEmptySelection: n,
    selectionBehavior: x,
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
    selectedKeys: d,
    setSelectedKeys(S) {
      (r || !Qs(S, d)) && v(S);
    },
    disabledKeys: h,
    disabledBehavior: i
  };
}
function yr(t, e) {
  return t ? t === "all" ? "all" : new we(t) : e;
}
class vo {
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
      (!e || r && sn(this.collection, r, e) < 0) && (e = r);
    }
    return e == null ? void 0 : e.key;
  }
  get lastSelectedKey() {
    let e = null;
    for (let n of this.state.selectedKeys) {
      let r = this.collection.getItem(n);
      (!e || r && sn(this.collection, r, e) > 0) && (e = r);
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
    return r && o ? sn(this.collection, r, o) <= 0 ? this.getKeyRangeInternal(e, n) : this.getKeyRangeInternal(n, e) : [];
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
          o.type === "item" && e.push(r), o.hasChildNodes && (this.allowsCellSelection || o.type !== "item") && n(Zs(Vt(o, this.collection)).key);
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
class Pn {
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
function ho(t) {
  let { filter: e } = t, n = mo(t), r = re(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), o = oe((a) => e ? new Pn(e(a)) : new Pn(a), [
    e
  ]), i = re(() => ({
    suppressTextValueWarning: t.suppressTextValueWarning
  }), [
    t.suppressTextValueWarning
  ]), l = bo(t, o, i), s = re(() => new vo(l, n), [
    l,
    n
  ]);
  const u = B(null);
  return G(() => {
    if (n.focusedKey != null && !l.getItem(n.focusedKey)) {
      const a = u.current.getItem(n.focusedKey), c = [
        ...u.current.getKeys()
      ].map((h) => {
        const x = u.current.getItem(h);
        return x.type === "item" ? x : null;
      }).filter((h) => h !== null), f = [
        ...l.getKeys()
      ].map((h) => {
        const x = l.getItem(h);
        return x.type === "item" ? x : null;
      }).filter((h) => h !== null), p = c.length - f.length;
      let d = Math.min(p > 1 ? Math.max(a.index - p + 1, 0) : a.index, f.length - 1), v;
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
function go(t) {
  var e;
  let [n, r] = et(t.selectedKey, (e = t.defaultSelectedKey) !== null && e !== void 0 ? e : null, t.onSelectionChange), o = re(() => n != null ? [
    n
  ] : [], [
    n
  ]), { collection: i, disabledKeys: l, selectionManager: s } = ho({
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
function jn(t) {
  let [e, n] = et(t.isOpen, t.defaultOpen || !1, t.onOpenChange);
  const r = oe(() => {
    n(!0);
  }, [
    n
  ]), o = oe(() => {
    n(!1);
  }, [
    n
  ]), i = oe(() => {
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
function eu(t) {
  var e, n;
  let { defaultFilter: r, menuTrigger: o = "input", allowsEmptyCollection: i = !1, allowsCustomValue: l, shouldCloseOnBlur: s = !0 } = t, [u, a] = J(!1), [c, f] = J(!1), [p, d] = J(null), v = (ee) => {
    t.onSelectionChange && t.onSelectionChange(ee), ee === w && (H(), D());
  };
  var h;
  let { collection: x, selectionManager: _, selectedKey: w, setSelectedKey: S, selectedItem: K, disabledKeys: g } = go({
    ...t,
    onSelectionChange: v,
    items: (h = t.items) !== null && h !== void 0 ? h : t.defaultItems
  });
  var k, O;
  let [b, A] = et(t.inputValue, (O = (k = t.defaultInputValue) !== null && k !== void 0 ? k : (e = x.getItem(w)) === null || e === void 0 ? void 0 : e.textValue) !== null && O !== void 0 ? O : "", t.onInputChange), E = x, P = re(() => (
    // No default filter if items are controlled.
    t.items != null || !r ? x : tu(x, b, r)
  ), [
    x,
    b,
    r,
    t.items
  ]), [I, C] = J(P), T = B("focus"), V = jn({
    ...t,
    onOpenChange: (ee) => {
      t.onOpenChange && t.onOpenChange(ee, ee ? T.current : void 0), _.setFocused(ee), ee || _.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), F = (ee = null, ce) => {
    let ve = ce === "manual" || ce === "focus" && o === "focus";
    (i || P.size > 0 || ve && E.size > 0 || t.items) && (ve && !V.isOpen && t.items === void 0 && a(!0), T.current = ce, d(ee), V.open());
  }, ue = (ee = null, ce) => {
    let ve = ce === "manual" || ce === "focus" && o === "focus";
    !(i || P.size > 0 || ve && E.size > 0 || t.items) && !V.isOpen || (ve && !V.isOpen && t.items === void 0 && a(!0), V.isOpen || (T.current = ce), $(ee));
  }, ae = oe(() => {
    C(u ? E : P);
  }, [
    u,
    E,
    P
  ]), $ = oe((ee = null) => {
    V.isOpen && ae(), d(ee), V.toggle();
  }, [
    V,
    ae
  ]), D = oe(() => {
    V.isOpen && (ae(), V.close());
  }, [
    V,
    ae
  ]), [z, j] = J(b), H = () => {
    var ee, ce;
    let ve = (ce = (ee = x.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ce !== void 0 ? ce : "";
    j(ve), A(ve);
  };
  var Y, U;
  let L = B((U = (Y = t.selectedKey) !== null && Y !== void 0 ? Y : t.defaultSelectedKey) !== null && U !== void 0 ? U : null);
  var N;
  let X = B((N = (n = x.getItem(w)) === null || n === void 0 ? void 0 : n.textValue) !== null && N !== void 0 ? N : "");
  G(() => {
    var ee;
    c && (P.size > 0 || i) && !V.isOpen && b !== z && o !== "manual" && F(null, "input"), !u && !i && V.isOpen && P.size === 0 && D(), w != null && w !== L.current && D(), b !== z && (_.setFocusedKey(null), a(!1), b === "" && (t.inputValue === void 0 || t.selectedKey === void 0) && S(null)), w !== L.current && (t.inputValue === void 0 || t.selectedKey === void 0) ? H() : z !== b && j(b);
    var ce;
    let ve = (ce = (ee = x.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ce !== void 0 ? ce : "";
    !c && w != null && t.inputValue === void 0 && w === L.current && X.current !== ve && (j(ve), A(ve)), L.current = w, X.current = ve;
  });
  let W = Vn({
    ...t,
    value: re(() => ({
      inputValue: b,
      selectedKey: w
    }), [
      b,
      w
    ])
  }), Z = () => {
    l && w == null ? M() : ye();
  }, M = () => {
    L.current = null, S(null), D();
  }, ye = () => {
    if (t.selectedKey !== void 0 && t.inputValue !== void 0) {
      var ee;
      t.onSelectionChange(w);
      var ce;
      let ve = (ce = (ee = x.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ce !== void 0 ? ce : "";
      j(ve), D();
    } else
      H(), D();
  };
  const Ne = () => {
    if (l) {
      var ee, ce;
      const ve = (ce = (ee = x.getItem(w)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ce !== void 0 ? ce : "";
      b === ve ? ye() : M();
    } else
      ye();
  };
  let mt = () => {
    V.isOpen && _.focusedKey != null ? w === _.focusedKey ? ye() : S(_.focusedKey) : Ne();
  }, rr = B(b), ts = (ee) => {
    ee ? (rr.current = b, o === "focus" && F(null, "focus")) : (s && Ne(), b !== rr.current && W.commitValidation()), f(ee);
  }, ns = re(() => V.isOpen ? u ? E : P : I, [
    V.isOpen,
    E,
    P,
    u,
    I
  ]);
  return {
    ...W,
    ...V,
    focusStrategy: p,
    toggle: ue,
    open: F,
    close: Ne,
    selectionManager: _,
    selectedKey: w,
    setSelectedKey: S,
    disabledKeys: g,
    isFocused: c,
    setFocused: ts,
    selectedItem: K,
    collection: ns,
    inputValue: b,
    setInputValue: A,
    commit: mt,
    revert: Z
  };
}
function tu(t, e, n) {
  return new Pn($o(t, t, e, n));
}
function $o(t, e, n, r) {
  let o = [];
  for (let i of e)
    if (i.type === "section" && i.hasChildNodes) {
      let l = $o(t, Vt(i, t), n, r);
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
const nu = Symbol.for("react-aria.i18n.locale"), ru = Symbol.for("react-aria.i18n.strings");
let He;
class zt {
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
    return n || (n = ou(e, this.strings, this.defaultLocale), this.strings[e] = n), n;
  }
  static getGlobalDictionaryForPackage(e) {
    if (typeof window > "u")
      return null;
    let n = window[nu];
    if (He === void 0) {
      let o = window[ru];
      if (!o)
        return null;
      He = {};
      for (let i in o)
        He[i] = new zt({
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
function ou(t, e, n = "en-US") {
  if (e[t])
    return e[t];
  let r = iu(t);
  if (e[r])
    return e[r];
  for (let o in e)
    if (o.startsWith(r + "-"))
      return e[o];
  return e[n];
}
function iu(t) {
  return Intl.Locale ? new Intl.Locale(t).language : t.split("-")[0];
}
const xr = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map();
class lu {
  /** Formats a localized string for the given key with the provided variables. */
  format(e, n) {
    let r = this.strings.getStringForLocale(e, this.locale);
    return typeof r == "function" ? r(n, this) : r;
  }
  plural(e, n, r = "cardinal") {
    let o = n["=" + e];
    if (o)
      return typeof o == "function" ? o() : o;
    let i = this.locale + ":" + r, l = xr.get(i);
    l || (l = new Intl.PluralRules(this.locale, {
      type: r
    }), xr.set(i, l));
    let s = l.select(e);
    return o = n[s] || n.other, typeof o == "function" ? o() : o;
  }
  number(e) {
    let n = Cr.get(this.locale);
    return n || (n = new Intl.NumberFormat(this.locale), Cr.set(this.locale, n)), n.format(e);
  }
  select(e, n) {
    let r = e[n] || e.other;
    return typeof r == "function" ? r() : r;
  }
  constructor(e, n) {
    this.locale = e, this.strings = n;
  }
}
function su(t, e) {
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
      e((l) => nt(l, o, ...i));
    },
    insertBefore(o, ...i) {
      e((l) => {
        let s = l.items.findIndex((u) => r(u) === o);
        if (s === -1)
          if (l.items.length === 0)
            s = 0;
          else
            return l;
        return nt(l, s, ...i);
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
        return nt(l, s + 1, ...i);
      });
    },
    prepend(...o) {
      e((i) => nt(i, 0, ...o));
    },
    append(...o) {
      e((i) => nt(i, i.items.length, ...o));
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
        return Er(l, a, s);
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
        return Er(l, a, s + 1);
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
function nt(t, e, ...n) {
  return {
    ...t,
    items: [
      ...t.items.slice(0, e),
      ...n,
      ...t.items.slice(e)
    ]
  };
}
function Er(t, e, n) {
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
function uu(t, e) {
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
function Pd(t) {
  const { load: e, sort: n, initialSelectedKeys: r, initialSortDescriptor: o, getKey: i = (f) => f.id || f.key, initialFilterText: l = "" } = t;
  let [s, u] = rs(uu, {
    state: "idle",
    error: null,
    items: [],
    selectedKeys: r === "all" ? "all" : new Set(r),
    sortDescriptor: o,
    filterText: l
  });
  const a = async (f, p) => {
    let d = new AbortController();
    try {
      u({
        ...f,
        abortController: d
      });
      var v;
      let _ = (v = f.filterText) !== null && v !== void 0 ? v : s.filterText;
      var h;
      let w = await p({
        items: s.items.slice(),
        selectedKeys: s.selectedKeys,
        sortDescriptor: (h = f.sortDescriptor) !== null && h !== void 0 ? h : s.sortDescriptor,
        signal: d.signal,
        cursor: f.type === "loadingMore" ? s.cursor : null,
        filterText: _
      });
      var x;
      let S = (x = w.filterText) !== null && x !== void 0 ? x : _;
      u({
        type: "success",
        ...w,
        abortController: d
      }), S && S !== _ && !d.signal.aborted && a({
        type: "filtering",
        filterText: S
      }, e);
    } catch (_) {
      u({
        type: "error",
        error: _,
        abortController: d
      });
    }
  };
  let c = B(!1);
  return G(() => {
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
      return s.items.find((p) => i(p) === f);
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
    ...su({
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
function au(t) {
  let e = jn(t), [n, r] = J(null), [o, i] = J([]), l = () => {
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
function cu(t) {
  let e = jn(t), [n, r] = J(null), o = go({
    ...t,
    onSelectionChange: (u) => {
      t.onSelectionChange != null && t.onSelectionChange(u), e.close(), i.commitValidation();
    }
  }), i = Vn({
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
class du {
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
function fu(t) {
  let [e, n] = et(t.expandedKeys ? new Set(t.expandedKeys) : void 0, t.defaultExpandedKeys ? new Set(t.defaultExpandedKeys) : /* @__PURE__ */ new Set(), t.onExpandedChange), r = mo(t), o = re(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), i = bo(t, oe((s) => new du(s, {
    expandedKeys: e
  }), [
    e
  ]), null);
  return G(() => {
    r.focusedKey != null && !i.getItem(r.focusedKey) && r.setFocusedKey(null);
  }, [
    i,
    r.focusedKey
  ]), {
    collection: i,
    expandedKeys: e,
    disabledKeys: o,
    toggleKey: (s) => {
      n(pu(e, s));
    },
    setExpandedKeys: n,
    selectionManager: new vo(i, r)
  };
}
function pu(t, e) {
  let n = new Set(t);
  return n.has(e) ? n.delete(e) : n.add(e), n;
}
const _t = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, yo = /* @__PURE__ */ Q.createContext(_t), bu = /* @__PURE__ */ Q.createContext(!1);
let mu = !!(typeof window < "u" && window.document && window.document.createElement), un = /* @__PURE__ */ new WeakMap();
function vu(t = !1) {
  let e = Ae(yo), n = B(null);
  if (n.current === null && !t) {
    var r, o;
    let i = (o = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (r = o.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (i) {
      let l = un.get(i);
      l == null ? un.set(i, {
        id: e.current,
        state: i.memoizedState
      }) : i.memoizedState !== l.state && (e.current = l.id, un.delete(i));
    }
    n.current = ++e.current;
  }
  return n.current;
}
function hu(t) {
  let e = Ae(yo);
  e === _t && !mu && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = vu(!!t), r = e === _t && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${e.prefix}`;
  return t || `${r}-${n}`;
}
function gu(t) {
  let e = Q.useId(), [n] = J(jt()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${_t.prefix}`;
  return t || `${r}-${e}`;
}
const $u = typeof Q.useId == "function" ? gu : hu;
function yu() {
  return !1;
}
function xu() {
  return !0;
}
function Cu(t) {
  return () => {
  };
}
function jt() {
  return typeof Q.useSyncExternalStore == "function" ? Q.useSyncExternalStore(Cu, yu, xu) : Ae(bu);
}
function xo(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var o = t.length;
      for (e = 0; e < o; e++)
        t[e] && (n = xo(t[e])) && (r && (r += " "), r += n);
    } else
      for (n in t)
        t[n] && (r && (r += " "), r += n);
  return r;
}
function Eu() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++)
    (t = arguments[n]) && (e = xo(t)) && (r && (r += " "), r += e);
  return r;
}
const fe = typeof document < "u" ? Q.useLayoutEffect : () => {
};
function xe(t) {
  const e = B(null);
  return fe(() => {
    e.current = t;
  }, [
    t
  ]), oe((...n) => {
    const r = e.current;
    return r(...n);
  }, []);
}
function Pu(t) {
  let [e, n] = J(t), r = B(null), o = xe(() => {
    let l = r.current.next();
    if (l.done) {
      r.current = null;
      return;
    }
    e === l.value ? o() : n(l.value);
  });
  fe(() => {
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
let wu = !!(typeof window < "u" && window.document && window.document.createElement), At = /* @__PURE__ */ new Map();
function _e(t) {
  let [e, n] = J(t), r = B(null), o = $u(e), i = oe((l) => {
    r.current = l;
  }, []);
  return wu && At.set(o, i), fe(() => {
    let l = o;
    return () => {
      At.delete(l);
    };
  }, [
    o
  ]), G(() => {
    let l = r.current;
    l && (r.current = null, n(l));
  }), o;
}
function Su(t, e) {
  if (t === e)
    return t;
  let n = At.get(t);
  if (n)
    return n(e), e;
  let r = At.get(e);
  return r ? (r(t), t) : e;
}
function Oe(t = []) {
  let e = _e(), [n, r] = Pu(e), o = oe(() => {
    r(function* () {
      yield e, yield document.getElementById(e) ? e : void 0;
    });
  }, [
    e,
    r
  ]);
  return fe(o, [
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
}, ut = (t) => t && "window" in t && t.window === t ? t : pe(t).defaultView || window;
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
      90 ? e[o] = Qe(i, l) : (o === "className" || o === "UNSAFE_className") && typeof i == "string" && typeof l == "string" ? e[o] = Eu(i, l) : o === "id" && i && l ? e.id = Su(i, l) : e[o] = l !== void 0 ? l : i;
    }
  }
  return e;
}
const Tu = /* @__PURE__ */ new Set([
  "id"
]), _u = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Au = /* @__PURE__ */ new Set([
  "href",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Ku = /^(data-.*)$/;
function je(t, e = {}) {
  let { labelable: n, isLink: r, propNames: o } = e, i = {};
  for (const l in t)
    Object.prototype.hasOwnProperty.call(t, l) && (Tu.has(l) || n && _u.has(l) || r && Au.has(l) || o != null && o.has(l) || Ku.test(l)) && (i[l] = t[l]);
  return i;
}
function Fe(t) {
  if (Du())
    t.focus({
      preventScroll: !0
    });
  else {
    let e = Fu(t);
    t.focus(), Lu(e);
  }
}
let gt = null;
function Du() {
  if (gt == null) {
    gt = !1;
    try {
      var t = document.createElement("div");
      t.focus({
        get preventScroll() {
          return gt = !0, !0;
        }
      });
    } catch {
    }
  }
  return gt;
}
function Fu(t) {
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
function Lu(t) {
  for (let { element: e, scrollTop: n, scrollLeft: r } of t)
    e.scrollTop = n, e.scrollLeft = r;
}
function Ht(t) {
  var e;
  return typeof window > "u" || window.navigator == null ? !1 : ((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.brands.some((n) => t.test(n.brand))) || t.test(window.navigator.userAgent);
}
function Hn(t) {
  var e;
  return typeof window < "u" && window.navigator != null ? t.test(((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.platform) || window.navigator.platform) : !1;
}
function Ie() {
  return Hn(/^Mac/i);
}
function Mu() {
  return Hn(/^iPhone/i);
}
function Co() {
  return Hn(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Ie() && navigator.maxTouchPoints > 1;
}
function Ut() {
  return Mu() || Co();
}
function wt() {
  return Ie() || Ut();
}
function Eo() {
  return Ht(/AppleWebKit/i) && !ku();
}
function ku() {
  return Ht(/Chrome/i);
}
function Po() {
  return Ht(/Android/i);
}
function Nu() {
  return Ht(/Firefox/i);
}
const Iu = /* @__PURE__ */ Nn({
  isNative: !0,
  open: Ou
});
function Wt() {
  return Ae(Iu);
}
function Re(t, e, n = !0) {
  var r, o;
  let { metaKey: i, ctrlKey: l, altKey: s, shiftKey: u } = e;
  Nu() && (!((o = window.event) === null || o === void 0 || (r = o.type) === null || r === void 0) && r.startsWith("key")) && t.target === "_blank" && (Ie() ? i = !0 : l = !0);
  let a = Eo() && Ie() && !Co() ? new KeyboardEvent("keydown", {
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
function Bu(t, e) {
  if (t instanceof HTMLAnchorElement)
    e(t);
  else if (t.hasAttribute("data-href")) {
    let n = document.createElement("a");
    n.href = t.getAttribute("data-href"), t.hasAttribute("data-target") && (n.target = t.getAttribute("data-target")), t.hasAttribute("data-rel") && (n.rel = t.getAttribute("data-rel")), t.hasAttribute("data-download") && (n.download = t.getAttribute("data-download")), t.hasAttribute("data-ping") && (n.ping = t.getAttribute("data-ping")), t.hasAttribute("data-referrer-policy") && (n.referrerPolicy = t.getAttribute("data-referrer-policy")), t.appendChild(n), e(n), t.removeChild(n);
  }
}
function Ou(t, e) {
  Bu(t, (n) => Re(n, e));
}
let qe = /* @__PURE__ */ new Map(), wn = /* @__PURE__ */ new Set();
function Pr() {
  if (typeof window > "u")
    return;
  let t = (n) => {
    let r = qe.get(n.target);
    r || (r = /* @__PURE__ */ new Set(), qe.set(n.target, r), n.target.addEventListener("transitioncancel", e)), r.add(n.propertyName);
  }, e = (n) => {
    let r = qe.get(n.target);
    if (r && (r.delete(n.propertyName), r.size === 0 && (n.target.removeEventListener("transitioncancel", e), qe.delete(n.target)), qe.size === 0)) {
      for (let o of wn)
        o();
      wn.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", e);
}
typeof document < "u" && (document.readyState !== "loading" ? Pr() : document.addEventListener("DOMContentLoaded", Pr));
function wo(t) {
  requestAnimationFrame(() => {
    qe.size === 0 ? t() : wn.add(t);
  });
}
function So() {
  let t = B(/* @__PURE__ */ new Map()), e = oe((o, i, l, s) => {
    let u = s != null && s.once ? (...a) => {
      t.current.delete(l), l(...a);
    } : l;
    t.current.set(l, {
      type: i,
      eventTarget: o,
      fn: u,
      options: s
    }), o.addEventListener(i, l, s);
  }, []), n = oe((o, i, l, s) => {
    var u;
    let a = ((u = t.current.get(l)) === null || u === void 0 ? void 0 : u.fn) || l;
    o.removeEventListener(i, a, s), t.current.delete(l);
  }, []), r = oe(() => {
    t.current.forEach((o, i) => {
      n(o.eventTarget, o.type, i, o.options);
    });
  }, [
    n
  ]);
  return G(() => r, [
    r
  ]), {
    addGlobalListener: e,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Kt(t, e) {
  let { id: n, "aria-label": r, "aria-labelledby": o } = t;
  return n = _e(n), o && r ? o = [
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
function Ru() {
  return typeof window.ResizeObserver < "u";
}
function Vu(t) {
  const { ref: e, onResize: n } = t;
  G(() => {
    let r = e == null ? void 0 : e.current;
    if (r)
      if (Ru()) {
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
function To(t, e) {
  fe(() => {
    if (t && t.ref && e)
      return t.ref.current = e.current, () => {
        t.ref.current = null;
      };
  });
}
function Dt(t, e) {
  for (Ft(t, e) && (t = t.parentElement); t && !Ft(t, e); )
    t = t.parentElement;
  return t || document.scrollingElement || document.documentElement;
}
function Ft(t, e) {
  let n = window.getComputedStyle(t), r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return r && e && (r = t.scrollHeight !== t.clientHeight || t.scrollWidth !== t.clientWidth), r;
}
let zu = 0;
const an = /* @__PURE__ */ new Map();
function ju(t) {
  let [e, n] = J(void 0);
  return fe(() => {
    if (!t)
      return;
    let r = an.get(t);
    if (r)
      n(r.element.id);
    else {
      let o = `react-aria-description-${zu++}`;
      n(o);
      let i = document.createElement("div");
      i.id = o, i.style.display = "none", i.textContent = t, document.body.appendChild(i), r = {
        refCount: 0,
        element: i
      }, an.set(t, r);
    }
    return r.refCount++, () => {
      --r.refCount === 0 && (r.element.remove(), an.delete(t));
    };
  }, [
    t
  ]), {
    "aria-describedby": t ? e : void 0
  };
}
function Hu(t, e, n, r) {
  let o = xe(n), i = n == null;
  G(() => {
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
function _o(t, e) {
  let n = wr(t, e, "left"), r = wr(t, e, "top"), o = e.offsetWidth, i = e.offsetHeight, l = t.scrollLeft, s = t.scrollTop, { borderTopWidth: u, borderLeftWidth: a } = getComputedStyle(t), c = t.scrollLeft + parseInt(a, 10), f = t.scrollTop + parseInt(u, 10), p = c + t.clientWidth, d = f + t.clientHeight;
  n <= l ? l = n - parseInt(a, 10) : n + o > p && (l += n + o - p), r <= f ? s = r - parseInt(u, 10) : r + i > d && (s += r + i - d), t.scrollLeft = l, t.scrollTop = s;
}
function wr(t, e, n) {
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
function Sr(t, e) {
  if (document.contains(t)) {
    let l = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(l).overflow === "hidden") {
      let u = Dt(t);
      for (; t && u && t !== l && u !== l; )
        _o(u, t), t = u, u = Dt(t);
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
function Sn(t) {
  return t.mozInputSource === 0 && t.isTrusted ? !0 : Po() && t.pointerType ? t.type === "click" && t.buttons === 1 : t.detail === 0 && !t.pointerType;
}
function Uu(t) {
  return !Po() && t.width === 0 && t.height === 0 || t.width === 1 && t.height === 1 && t.pressure === 0 && t.detail === 0 && t.pointerType === "mouse";
}
function Ao(t, e, n) {
  let r = B(e), o = xe(() => {
    n && n(r.current);
  });
  G(() => {
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
function Wu(t, e) {
  return e.get ? e.get.call(t) : e.value;
}
function Ko(t, e, n) {
  if (!e.has(t))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return e.get(t);
}
function Gu(t, e) {
  var n = Ko(t, e, "get");
  return Wu(t, n);
}
function qu(t, e, n) {
  if (e.set)
    e.set.call(t, n);
  else {
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    e.value = n;
  }
}
function Tr(t, e, n) {
  var r = Ko(t, e, "set");
  return qu(t, r, n), n;
}
let Xe = "default", Tn = "", St = /* @__PURE__ */ new WeakMap();
function _r(t) {
  if (Ut()) {
    if (Xe === "default") {
      const e = pe(t);
      Tn = e.documentElement.style.webkitUserSelect, e.documentElement.style.webkitUserSelect = "none";
    }
    Xe = "disabled";
  } else
    (t instanceof HTMLElement || t instanceof SVGElement) && (St.set(t, t.style.userSelect), t.style.userSelect = "none");
}
function $t(t) {
  if (Ut()) {
    if (Xe !== "disabled")
      return;
    Xe = "restoring", setTimeout(() => {
      wo(() => {
        if (Xe === "restoring") {
          const e = pe(t);
          e.documentElement.style.webkitUserSelect === "none" && (e.documentElement.style.webkitUserSelect = Tn || ""), Tn = "", Xe = "default";
        }
      });
    }, 300);
  } else if ((t instanceof HTMLElement || t instanceof SVGElement) && t && St.has(t)) {
    let e = St.get(t);
    t.style.userSelect === "none" && (t.style.userSelect = e), t.getAttribute("style") === "" && t.removeAttribute("style"), St.delete(t);
  }
}
const Un = Q.createContext({
  register: () => {
  }
});
Un.displayName = "PressResponderContext";
function Yu(t) {
  let e = Ae(Un);
  if (e) {
    let { register: n, ...r } = e;
    t = se(r, t), n();
  }
  return To(e, t.ref), t;
}
var yt = /* @__PURE__ */ new WeakMap();
class xt {
  continuePropagation() {
    Tr(this, yt, !1);
  }
  get shouldStopPropagation() {
    return Gu(this, yt);
  }
  constructor(e, n, r) {
    Hs(this, yt, {
      writable: !0,
      value: void 0
    }), Tr(this, yt, !0), this.type = e, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey;
  }
}
const Ar = Symbol("linkClicked");
function Gt(t) {
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
    ...p
  } = Yu(t), [d, v] = J(!1), h = B({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: x, removeAllGlobalListeners: _ } = So(), w = xe((b, A) => {
    let E = h.current;
    if (l || E.didFirePressStart)
      return !1;
    let P = !0;
    if (E.isTriggeringEvent = !0, r) {
      let I = new xt("pressstart", A, b);
      r(I), P = I.shouldStopPropagation;
    }
    return n && n(!0), E.isTriggeringEvent = !1, E.didFirePressStart = !0, v(!0), P;
  }), S = xe((b, A, E = !0) => {
    let P = h.current;
    if (!P.didFirePressStart)
      return !1;
    P.ignoreClickAfterPress = !0, P.didFirePressStart = !1, P.isTriggeringEvent = !0;
    let I = !0;
    if (o) {
      let C = new xt("pressend", A, b);
      o(C), I = C.shouldStopPropagation;
    }
    if (n && n(!1), v(!1), e && E && !l) {
      let C = new xt("press", A, b);
      e(C), I && (I = C.shouldStopPropagation);
    }
    return P.isTriggeringEvent = !1, I;
  }), K = xe((b, A) => {
    let E = h.current;
    if (l)
      return !1;
    if (i) {
      E.isTriggeringEvent = !0;
      let P = new xt("pressup", A, b);
      return i(P), E.isTriggeringEvent = !1, P.shouldStopPropagation;
    }
    return !0;
  }), g = xe((b) => {
    let A = h.current;
    A.isPressed && A.target && (A.isOverTarget && A.pointerType != null && S(Ke(A.target, b), A.pointerType, !1), A.isPressed = !1, A.isOverTarget = !1, A.activePointerId = null, A.pointerType = null, _(), c || $t(A.target));
  }), k = xe((b) => {
    a && g(b);
  }), O = re(() => {
    let b = h.current, A = {
      onKeyDown(P) {
        if (cn(P.nativeEvent, P.currentTarget) && P.currentTarget.contains(P.target)) {
          var I;
          Dr(P.target, P.key) && P.preventDefault();
          let C = !0;
          !b.isPressed && !P.repeat && (b.target = P.currentTarget, b.isPressed = !0, C = w(P, "keyboard"), x(pe(P.currentTarget), "keyup", E, !1)), C && P.stopPropagation(), P.metaKey && Ie() && ((I = b.metaKeyEvents) === null || I === void 0 || I.set(P.key, P.nativeEvent));
        } else
          P.key === "Meta" && (b.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onKeyUp(P) {
        cn(P.nativeEvent, P.currentTarget) && !P.repeat && P.currentTarget.contains(P.target) && b.target && K(Ke(b.target, P), "keyboard");
      },
      onClick(P) {
        if (!(P && !P.currentTarget.contains(P.target)) && P && P.button === 0 && !b.isTriggeringEvent && !Re.isOpening) {
          let I = !0;
          if (l && P.preventDefault(), !b.ignoreClickAfterPress && !b.ignoreEmulatedMouseEvents && !b.isPressed && (b.pointerType === "virtual" || Sn(P.nativeEvent))) {
            !l && !u && Fe(P.currentTarget);
            let C = w(P, "virtual"), T = K(P, "virtual"), q = S(P, "virtual");
            I = C && T && q;
          }
          b.ignoreEmulatedMouseEvents = !1, b.ignoreClickAfterPress = !1, I && P.stopPropagation();
        }
      }
    }, E = (P) => {
      var I;
      if (b.isPressed && b.target && cn(P, b.target)) {
        var C;
        Dr(P.target, P.key) && P.preventDefault();
        let q = P.target, V = S(Ke(b.target, P), "keyboard", b.target.contains(q));
        _(), V && P.stopPropagation(), P.key !== "Enter" && Wn(b.target) && b.target.contains(q) && !P[Ar] && (P[Ar] = !0, Re(b.target, P, !1)), b.isPressed = !1, (C = b.metaKeyEvents) === null || C === void 0 || C.delete(P.key);
      } else if (P.key === "Meta" && (!((I = b.metaKeyEvents) === null || I === void 0) && I.size)) {
        var T;
        let q = b.metaKeyEvents;
        b.metaKeyEvents = void 0;
        for (let V of q.values())
          (T = b.target) === null || T === void 0 || T.dispatchEvent(new KeyboardEvent("keyup", V));
      }
    };
    if (typeof PointerEvent < "u") {
      A.onPointerDown = (T) => {
        if (T.button !== 0 || !T.currentTarget.contains(T.target))
          return;
        if (Uu(T.nativeEvent)) {
          b.pointerType = "virtual";
          return;
        }
        dn(T.currentTarget) && T.preventDefault(), b.pointerType = T.pointerType;
        let q = !0;
        b.isPressed || (b.isPressed = !0, b.isOverTarget = !0, b.activePointerId = T.pointerId, b.target = T.currentTarget, !l && !u && Fe(T.currentTarget), c || _r(b.target), q = w(T, b.pointerType), x(pe(T.currentTarget), "pointermove", P, !1), x(pe(T.currentTarget), "pointerup", I, !1), x(pe(T.currentTarget), "pointercancel", C, !1)), q && T.stopPropagation();
      }, A.onMouseDown = (T) => {
        T.currentTarget.contains(T.target) && T.button === 0 && (dn(T.currentTarget) && T.preventDefault(), T.stopPropagation());
      }, A.onPointerUp = (T) => {
        !T.currentTarget.contains(T.target) || b.pointerType === "virtual" || T.button === 0 && Ue(T, T.currentTarget) && K(T, b.pointerType || T.pointerType);
      };
      let P = (T) => {
        T.pointerId === b.activePointerId && (b.target && Ue(T, b.target) ? !b.isOverTarget && b.pointerType != null && (b.isOverTarget = !0, w(Ke(b.target, T), b.pointerType)) : b.target && b.isOverTarget && b.pointerType != null && (b.isOverTarget = !1, S(Ke(b.target, T), b.pointerType, !1), k(T)));
      }, I = (T) => {
        T.pointerId === b.activePointerId && b.isPressed && T.button === 0 && b.target && (Ue(T, b.target) && b.pointerType != null ? S(Ke(b.target, T), b.pointerType) : b.isOverTarget && b.pointerType != null && S(Ke(b.target, T), b.pointerType, !1), b.isPressed = !1, b.isOverTarget = !1, b.activePointerId = null, b.pointerType = null, _(), c || $t(b.target));
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
        if (dn(C.currentTarget) && C.preventDefault(), b.ignoreEmulatedMouseEvents) {
          C.stopPropagation();
          return;
        }
        b.isPressed = !0, b.isOverTarget = !0, b.target = C.currentTarget, b.pointerType = Sn(C.nativeEvent) ? "virtual" : "mouse", !l && !u && Fe(C.currentTarget), w(C, b.pointerType) && C.stopPropagation(), x(pe(C.currentTarget), "mouseup", P, !1);
      }, A.onMouseEnter = (C) => {
        if (!C.currentTarget.contains(C.target))
          return;
        let T = !0;
        b.isPressed && !b.ignoreEmulatedMouseEvents && b.pointerType != null && (b.isOverTarget = !0, T = w(C, b.pointerType)), T && C.stopPropagation();
      }, A.onMouseLeave = (C) => {
        if (!C.currentTarget.contains(C.target))
          return;
        let T = !0;
        b.isPressed && !b.ignoreEmulatedMouseEvents && b.pointerType != null && (b.isOverTarget = !1, T = S(C, b.pointerType, !1), k(C)), T && C.stopPropagation();
      }, A.onMouseUp = (C) => {
        C.currentTarget.contains(C.target) && !b.ignoreEmulatedMouseEvents && C.button === 0 && K(C, b.pointerType || "mouse");
      };
      let P = (C) => {
        if (C.button === 0) {
          if (b.isPressed = !1, _(), b.ignoreEmulatedMouseEvents) {
            b.ignoreEmulatedMouseEvents = !1;
            return;
          }
          b.target && Ue(C, b.target) && b.pointerType != null ? S(Ke(b.target, C), b.pointerType) : b.target && b.isOverTarget && b.pointerType != null && S(Ke(b.target, C), b.pointerType, !1), b.isOverTarget = !1;
        }
      };
      A.onTouchStart = (C) => {
        if (!C.currentTarget.contains(C.target))
          return;
        let T = Xu(C.nativeEvent);
        if (!T)
          return;
        b.activePointerId = T.identifier, b.ignoreEmulatedMouseEvents = !0, b.isOverTarget = !0, b.isPressed = !0, b.target = C.currentTarget, b.pointerType = "touch", !l && !u && Fe(C.currentTarget), c || _r(b.target), w(C, b.pointerType) && C.stopPropagation(), x(ut(C.currentTarget), "scroll", I, !0);
      }, A.onTouchMove = (C) => {
        if (!C.currentTarget.contains(C.target))
          return;
        if (!b.isPressed) {
          C.stopPropagation();
          return;
        }
        let T = Kr(C.nativeEvent, b.activePointerId), q = !0;
        T && Ue(T, C.currentTarget) ? !b.isOverTarget && b.pointerType != null && (b.isOverTarget = !0, q = w(C, b.pointerType)) : b.isOverTarget && b.pointerType != null && (b.isOverTarget = !1, q = S(C, b.pointerType, !1), k(C)), q && C.stopPropagation();
      }, A.onTouchEnd = (C) => {
        if (!C.currentTarget.contains(C.target))
          return;
        if (!b.isPressed) {
          C.stopPropagation();
          return;
        }
        let T = Kr(C.nativeEvent, b.activePointerId), q = !0;
        T && Ue(T, C.currentTarget) && b.pointerType != null ? (K(C, b.pointerType), q = S(C, b.pointerType)) : b.isOverTarget && b.pointerType != null && (q = S(C, b.pointerType, !1)), q && C.stopPropagation(), b.isPressed = !1, b.activePointerId = null, b.isOverTarget = !1, b.ignoreEmulatedMouseEvents = !0, b.target && !c && $t(b.target), _();
      }, A.onTouchCancel = (C) => {
        C.currentTarget.contains(C.target) && (C.stopPropagation(), b.isPressed && g(C));
      };
      let I = (C) => {
        b.isPressed && C.target.contains(b.target) && g({
          currentTarget: b.target,
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
    x,
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
  return G(() => () => {
    var b;
    c || $t((b = h.current.target) !== null && b !== void 0 ? b : void 0);
  }, [
    c
  ]), {
    isPressed: s || d,
    pressProps: se(p, O)
  };
}
function Wn(t) {
  return t.tagName === "A" && t.hasAttribute("href");
}
function cn(t, e) {
  const { key: n, code: r } = t, o = e, i = o.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(o instanceof ut(o).HTMLInputElement && !Do(o, n) || o instanceof ut(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && Wn(o)) && n !== "Enter");
}
function Xu(t) {
  const { targetTouches: e } = t;
  return e.length > 0 ? e[0] : null;
}
function Kr(t, e) {
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
function Zu(t) {
  let e = 0, n = 0;
  return t.width !== void 0 ? e = t.width / 2 : t.radiusX !== void 0 && (e = t.radiusX), t.height !== void 0 ? n = t.height / 2 : t.radiusY !== void 0 && (n = t.radiusY), {
    top: t.clientY - n,
    right: t.clientX + e,
    bottom: t.clientY + n,
    left: t.clientX - e
  };
}
function Ju(t, e) {
  return !(t.left > e.right || e.left > t.right || t.top > e.bottom || e.top > t.bottom);
}
function Ue(t, e) {
  let n = e.getBoundingClientRect(), r = Zu(t);
  return Ju(n, r);
}
function dn(t) {
  return !(t instanceof HTMLElement) || !t.hasAttribute("draggable");
}
function Dr(t, e) {
  return t instanceof HTMLInputElement ? !Do(t, e) : t instanceof HTMLButtonElement ? t.type !== "submit" && t.type !== "reset" : !Wn(t);
}
const Qu = /* @__PURE__ */ new Set([
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
function Do(t, e) {
  return t.type === "checkbox" || t.type === "radio" ? e === " " : Qu.has(t.type);
}
function ea({ children: t }) {
  let e = re(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ Q.createElement(Un.Provider, {
    value: e
  }, t);
}
class ta {
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
function Fo(t) {
  let e = B({
    isFocused: !1,
    observer: null
  });
  fe(() => {
    const r = e.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = xe((r) => {
    t == null || t(r);
  });
  return oe((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      e.current.isFocused = !0;
      let o = r.target, i = (l) => {
        e.current.isFocused = !1, o.disabled && n(new ta("blur", l)), e.current.observer && (e.current.observer.disconnect(), e.current.observer = null);
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
function Gn(t) {
  let { isDisabled: e, onFocus: n, onBlur: r, onFocusChange: o } = t;
  const i = oe((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = Fo(i), s = oe((u) => {
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
let ke = null, at = /* @__PURE__ */ new Set(), Fr = !1, Ve = !1, _n = !1;
const na = {
  Tab: !0,
  Escape: !0
};
function qt(t, e) {
  for (let n of at)
    n(t, e);
}
function ra(t) {
  return !(t.metaKey || !Ie() && t.altKey || t.ctrlKey || t.key === "Control" || t.key === "Shift" || t.key === "Meta");
}
function Lr(t) {
  Ve = !0, ra(t) && (ke = "keyboard", qt("keyboard", t));
}
function We(t) {
  ke = "pointer", (t.type === "mousedown" || t.type === "pointerdown") && (Ve = !0, qt("pointer", t));
}
function oa(t) {
  Sn(t) && (Ve = !0, ke = "virtual");
}
function ia(t) {
  t.target === window || t.target === document || (!Ve && !_n && (ke = "virtual", qt("virtual", t)), Ve = !1, _n = !1);
}
function la() {
  Ve = !1, _n = !0;
}
function Lt() {
  if (typeof window > "u" || Fr)
    return;
  let t = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    Ve = !0, t.apply(this, arguments);
  }, document.addEventListener("keydown", Lr, !0), document.addEventListener("keyup", Lr, !0), document.addEventListener("click", oa, !0), window.addEventListener("focus", ia, !0), window.addEventListener("blur", la, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", We, !0), document.addEventListener("pointermove", We, !0), document.addEventListener("pointerup", We, !0)) : (document.addEventListener("mousedown", We, !0), document.addEventListener("mousemove", We, !0), document.addEventListener("mouseup", We, !0)), Fr = !0;
}
typeof document < "u" && (document.readyState !== "loading" ? Lt() : document.addEventListener("DOMContentLoaded", Lt));
function ct() {
  return ke !== "pointer";
}
function An() {
  return ke;
}
function Lo(t) {
  ke = t, qt(t, null);
}
function sa() {
  Lt();
  let [t, e] = J(ke);
  return G(() => {
    let n = () => {
      e(ke);
    };
    return at.add(n), () => {
      at.delete(n);
    };
  }, []), jt() ? null : t;
}
const ua = /* @__PURE__ */ new Set([
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
function aa(t, e, n) {
  var r;
  return t = t || (n == null ? void 0 : n.target) instanceof HTMLInputElement && !ua.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof HTMLTextAreaElement || (n == null ? void 0 : n.target) instanceof HTMLElement && (n == null ? void 0 : n.target.isContentEditable), !(t && e === "keyboard" && n instanceof KeyboardEvent && !na[n.key]);
}
function ca(t, e, n) {
  Lt(), G(() => {
    let r = (o, i) => {
      aa(!!(n != null && n.isTextInput), o, i) && t(ct());
    };
    return at.add(r), () => {
      at.delete(r);
    };
  }, e);
}
function Yt(t) {
  let { isDisabled: e, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = t, i = B({
    isFocusWithin: !1
  }), l = oe((a) => {
    i.current.isFocusWithin && !a.currentTarget.contains(a.relatedTarget) && (i.current.isFocusWithin = !1, n && n(a), o && o(!1));
  }, [
    n,
    o,
    i
  ]), s = Fo(l), u = oe((a) => {
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
let Mt = !1, fn = 0;
function Kn() {
  Mt = !0, setTimeout(() => {
    Mt = !1;
  }, 50);
}
function Mr(t) {
  t.pointerType === "touch" && Kn();
}
function da() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Mr) : document.addEventListener("touchend", Kn), fn++, () => {
      fn--, !(fn > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Mr) : document.removeEventListener("touchend", Kn));
    };
}
function Mo(t) {
  let { onHoverStart: e, onHoverChange: n, onHoverEnd: r, isDisabled: o } = t, [i, l] = J(!1), s = B({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  G(da, []);
  let { hoverProps: u, triggerHoverEnd: a } = re(() => {
    let c = (d, v) => {
      if (s.pointerType = v, o || v === "touch" || s.isHovered || !d.currentTarget.contains(d.target))
        return;
      s.isHovered = !0;
      let h = d.currentTarget;
      s.target = h, e && e({
        type: "hoverstart",
        target: h,
        pointerType: v
      }), n && n(!0), l(!0);
    }, f = (d, v) => {
      if (s.pointerType = "", s.target = null, v === "touch" || !s.isHovered)
        return;
      s.isHovered = !1;
      let h = d.currentTarget;
      r && r({
        type: "hoverend",
        target: h,
        pointerType: v
      }), n && n(!1), l(!1);
    }, p = {};
    return typeof PointerEvent < "u" ? (p.onPointerEnter = (d) => {
      Mt && d.pointerType === "mouse" || c(d, d.pointerType);
    }, p.onPointerLeave = (d) => {
      !o && d.currentTarget.contains(d.target) && f(d, d.pointerType);
    }) : (p.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (d) => {
      !s.ignoreEmulatedMouseEvents && !Mt && c(d, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (d) => {
      !o && d.currentTarget.contains(d.target) && f(d, "mouse");
    }), {
      hoverProps: p,
      triggerHoverEnd: f
    };
  }, [
    e,
    n,
    r,
    o,
    s
  ]);
  return G(() => {
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
function fa(t) {
  let { ref: e, onInteractOutside: n, isDisabled: r, onInteractOutsideStart: o } = t, i = B({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), l = xe((u) => {
    n && Ct(u, e) && (o && o(u), i.current.isPointerDown = !0);
  }), s = xe((u) => {
    n && n(u);
  });
  G(() => {
    let u = i.current;
    if (r)
      return;
    const a = e.current, c = pe(a);
    if (typeof PointerEvent < "u") {
      let f = (p) => {
        u.isPointerDown && Ct(p, e) && s(p), u.isPointerDown = !1;
      };
      return c.addEventListener("pointerdown", l, !0), c.addEventListener("pointerup", f, !0), () => {
        c.removeEventListener("pointerdown", l, !0), c.removeEventListener("pointerup", f, !0);
      };
    } else {
      let f = (d) => {
        u.ignoreEmulatedMouseEvents ? u.ignoreEmulatedMouseEvents = !1 : u.isPointerDown && Ct(d, e) && s(d), u.isPointerDown = !1;
      }, p = (d) => {
        u.ignoreEmulatedMouseEvents = !0, u.isPointerDown && Ct(d, e) && s(d), u.isPointerDown = !1;
      };
      return c.addEventListener("mousedown", l, !0), c.addEventListener("mouseup", f, !0), c.addEventListener("touchstart", l, !0), c.addEventListener("touchend", p, !0), () => {
        c.removeEventListener("mousedown", l, !0), c.removeEventListener("mouseup", f, !0), c.removeEventListener("touchstart", l, !0), c.removeEventListener("touchend", p, !0);
      };
    }
  }, [
    e,
    r,
    l,
    s
  ]);
}
function Ct(t, e) {
  if (t.button > 0)
    return !1;
  if (t.target) {
    const n = t.target.ownerDocument;
    if (!n || !n.documentElement.contains(t.target) || t.target.closest("[data-react-aria-top-layer]"))
      return !1;
  }
  return e.current && !e.current.contains(t.target);
}
function kr(t) {
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
function ko(t) {
  return {
    keyboardProps: t.isDisabled ? {} : {
      onKeyDown: kr(t.onKeyDown),
      onKeyUp: kr(t.onKeyUp)
    }
  };
}
const pa = 500;
function No(t) {
  let { isDisabled: e, onLongPressStart: n, onLongPressEnd: r, onLongPress: o, threshold: i = pa, accessibilityDescription: l } = t;
  const s = B();
  let { addGlobalListener: u, removeGlobalListener: a } = So(), { pressProps: c } = Gt({
    isDisabled: e,
    onPressStart(p) {
      if (p.continuePropagation(), (p.pointerType === "mouse" || p.pointerType === "touch") && (n && n({
        ...p,
        type: "longpressstart"
      }), s.current = setTimeout(() => {
        p.target.dispatchEvent(new PointerEvent("pointercancel", {
          bubbles: !0
        })), o && o({
          ...p,
          type: "longpress"
        }), s.current = void 0;
      }, i), p.pointerType === "touch")) {
        let d = (v) => {
          v.preventDefault();
        };
        u(p.target, "contextmenu", d, {
          once: !0
        }), u(window, "pointerup", () => {
          setTimeout(() => {
            a(p.target, "contextmenu", d);
          }, 30);
        }, {
          once: !0
        });
      }
    },
    onPressEnd(p) {
      s.current && clearTimeout(s.current), r && (p.pointerType === "mouse" || p.pointerType === "touch") && r({
        ...p,
        type: "longpressend"
      });
    }
  }), f = ju(o && !e ? l : void 0);
  return {
    longPressProps: se(c, f)
  };
}
function dt(t) {
  const e = pe(t);
  if (An() === "virtual") {
    let n = e.activeElement;
    wo(() => {
      e.activeElement === n && t.isConnected && Fe(t);
    });
  } else
    Fe(t);
}
function ba(t) {
  const e = ut(t);
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
function ma(t, e) {
  return !t.hasAttribute("hidden") && (t.nodeName === "DETAILS" && e && e.nodeName !== "SUMMARY" ? t.hasAttribute("open") : !0);
}
function Io(t, e) {
  return t.nodeName !== "#comment" && ba(t) && ma(t, e) && (!t.parentElement || Io(t.parentElement, t));
}
const Nr = /* @__PURE__ */ Q.createContext(null);
let le = null;
function va(t) {
  let { children: e, contain: n, restoreFocus: r, autoFocus: o } = t, i = B(null), l = B(null), s = B([]), { parentNode: u } = Ae(Nr) || {}, a = re(() => new Dn({
    scopeRef: s
  }), [
    s
  ]);
  fe(() => {
    let p = u || be.root;
    if (be.getTreeNode(p.scopeRef) && le && !Nt(le, p.scopeRef)) {
      let d = be.getTreeNode(le);
      d && (p = d);
    }
    p.addChild(a), be.addNode(a);
  }, [
    a,
    u
  ]), fe(() => {
    let p = be.getTreeNode(s);
    p && (p.contain = !!n);
  }, [
    n
  ]), fe(() => {
    var p;
    let d = (p = i.current) === null || p === void 0 ? void 0 : p.nextSibling, v = [];
    for (; d && d !== l.current; )
      v.push(d), d = d.nextSibling;
    s.current = v;
  }, [
    e
  ]), Ea(s, r, n), ya(s, n), wa(s, r, n), Ca(s, o), G(() => {
    const p = pe(s.current ? s.current[0] : void 0).activeElement;
    let d = null;
    if (he(p, s.current)) {
      for (let v of be.traverse())
        v.scopeRef && he(p, v.scopeRef.current) && (d = v);
      d === be.getTreeNode(s) && (le = d.scopeRef);
    }
  }, [
    s
  ]), fe(() => () => {
    var p, d, v;
    let h = (v = (d = be.getTreeNode(s)) === null || d === void 0 || (p = d.parent) === null || p === void 0 ? void 0 : p.scopeRef) !== null && v !== void 0 ? v : null;
    (s === le || Nt(s, le)) && (!h || be.getTreeNode(h)) && (le = h), be.removeTreeNode(s);
  }, [
    s
  ]);
  let c = re(() => ha(s), []), f = re(() => ({
    focusManager: c,
    parentNode: a
  }), [
    a,
    c
  ]);
  return /* @__PURE__ */ Q.createElement(Nr.Provider, {
    value: f
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
function ha(t) {
  return {
    focusNext(e = {}) {
      let n = t.current, { from: r, tabbable: o, wrap: i, accept: l } = e, s = r || pe(n[0]).activeElement, u = n[0].previousElementSibling, a = Be(n), c = Me(a, {
        tabbable: o,
        accept: l
      }, n);
      c.currentNode = he(s, n) ? s : u;
      let f = c.nextNode();
      return !f && i && (c.currentNode = u, f = c.nextNode()), f && Le(f, !0), f;
    },
    focusPrevious(e = {}) {
      let n = t.current, { from: r, tabbable: o, wrap: i, accept: l } = e, s = r || pe(n[0]).activeElement, u = n[n.length - 1].nextElementSibling, a = Be(n), c = Me(a, {
        tabbable: o,
        accept: l
      }, n);
      c.currentNode = he(s, n) ? s : u;
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
const qn = [
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
], ga = qn.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
qn.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $a = qn.join(':not([hidden]):not([tabindex="-1"]),');
function Be(t) {
  return t[0].parentElement;
}
function it(t) {
  let e = be.getTreeNode(le);
  for (; e && e.scopeRef !== t; ) {
    if (e.contain)
      return !1;
    e = e.parent;
  }
  return !0;
}
function ya(t, e) {
  let n = B(), r = B();
  fe(() => {
    let o = t.current;
    if (!e) {
      r.current && (cancelAnimationFrame(r.current), r.current = void 0);
      return;
    }
    const i = pe(o ? o[0] : void 0);
    let l = (a) => {
      if (a.key !== "Tab" || a.altKey || a.ctrlKey || a.metaKey || !it(t))
        return;
      let c = i.activeElement, f = t.current;
      if (!f || !he(c, f))
        return;
      let p = Be(f), d = Me(p, {
        tabbable: !0
      }, f);
      if (!c)
        return;
      d.currentNode = c;
      let v = a.shiftKey ? d.previousNode() : d.nextNode();
      v || (d.currentNode = a.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, v = a.shiftKey ? d.previousNode() : d.nextNode()), a.preventDefault(), v && Le(v, !0);
    }, s = (a) => {
      (!le || Nt(le, t)) && he(a.target, t.current) ? (le = t, n.current = a.target) : it(t) && !kt(a.target, t) ? n.current ? n.current.focus() : le && le.current && It(le.current) : it(t) && (n.current = a.target);
    }, u = (a) => {
      r.current && cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
        if (i.activeElement && it(t) && !kt(i.activeElement, t))
          if (le = t, i.body.contains(a.target)) {
            var c;
            n.current = a.target, (c = n.current) === null || c === void 0 || c.focus();
          } else
            le.current && It(le.current);
      });
    };
    return i.addEventListener("keydown", l, !1), i.addEventListener("focusin", s, !1), o == null || o.forEach((a) => a.addEventListener("focusin", s, !1)), o == null || o.forEach((a) => a.addEventListener("focusout", u, !1)), () => {
      i.removeEventListener("keydown", l, !1), i.removeEventListener("focusin", s, !1), o == null || o.forEach((a) => a.removeEventListener("focusin", s, !1)), o == null || o.forEach((a) => a.removeEventListener("focusout", u, !1));
    };
  }, [
    t,
    e
  ]), fe(() => () => {
    r.current && cancelAnimationFrame(r.current);
  }, [
    r
  ]);
}
function Bo(t) {
  return kt(t);
}
function he(t, e) {
  return !t || !e ? !1 : e.some((n) => n.contains(t));
}
function kt(t, e = null) {
  if (t instanceof Element && t.closest("[data-react-aria-top-layer]"))
    return !0;
  for (let { scopeRef: n } of be.traverse(be.getTreeNode(e)))
    if (n && he(t, n.current))
      return !0;
  return !1;
}
function xa(t) {
  return kt(t, le);
}
function Nt(t, e) {
  var n;
  let r = (n = be.getTreeNode(e)) === null || n === void 0 ? void 0 : n.parent;
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
      dt(t);
    } catch {
    }
  else if (t != null)
    try {
      t.focus();
    } catch {
    }
}
function It(t, e = !0) {
  let n = t[0].previousElementSibling, r = Be(t), o = Me(r, {
    tabbable: e
  }, t);
  o.currentNode = n;
  let i = o.nextNode();
  e && !i && (r = Be(t), o = Me(r, {
    tabbable: !1
  }, t), o.currentNode = n, i = o.nextNode()), Le(i);
}
function Ca(t, e) {
  const n = Q.useRef(e);
  G(() => {
    if (n.current) {
      le = t;
      const r = pe(t.current ? t.current[0] : void 0);
      !he(r.activeElement, le.current) && t.current && It(t.current);
    }
    n.current = !1;
  }, [
    t
  ]);
}
function Ea(t, e, n) {
  fe(() => {
    if (e || n)
      return;
    let r = t.current;
    const o = pe(r ? r[0] : void 0);
    let i = (l) => {
      let s = l.target;
      he(s, t.current) ? le = t : Bo(s) || (le = null);
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
function Pa(t) {
  let e = be.getTreeNode(le);
  for (; e && e.scopeRef !== t; ) {
    if (e.nodeToRestore)
      return !1;
    e = e.parent;
  }
  return (e == null ? void 0 : e.scopeRef) === t;
}
function wa(t, e, n) {
  const r = B(typeof document < "u" ? pe(t.current ? t.current[0] : void 0).activeElement : null);
  fe(() => {
    let o = t.current;
    const i = pe(o ? o[0] : void 0);
    if (!e || n)
      return;
    let l = () => {
      (!le || Nt(le, t)) && he(i.activeElement, t.current) && (le = t);
    };
    return i.addEventListener("focusin", l, !1), o == null || o.forEach((s) => s.addEventListener("focusin", l, !1)), () => {
      i.removeEventListener("focusin", l, !1), o == null || o.forEach((s) => s.removeEventListener("focusin", l, !1));
    };
  }, [
    t,
    n
  ]), fe(() => {
    const o = pe(t.current ? t.current[0] : void 0);
    if (!e)
      return;
    let i = (l) => {
      if (l.key !== "Tab" || l.altKey || l.ctrlKey || l.metaKey || !it(t))
        return;
      let s = o.activeElement;
      if (!he(s, t.current))
        return;
      let u = be.getTreeNode(t);
      if (!u)
        return;
      let a = u.nodeToRestore, c = Me(o.body, {
        tabbable: !0
      });
      c.currentNode = s;
      let f = l.shiftKey ? c.previousNode() : c.nextNode();
      if ((!a || !o.body.contains(a) || a === o.body) && (a = void 0, u.nodeToRestore = void 0), (!f || !he(f, t.current)) && a) {
        c.currentNode = a;
        do
          f = l.shiftKey ? c.previousNode() : c.nextNode();
        while (he(f, t.current));
        l.preventDefault(), l.stopPropagation(), f ? Le(f, !0) : Bo(a) ? Le(a, !0) : s.blur();
      }
    };
    return n || o.addEventListener("keydown", i, !0), () => {
      n || o.removeEventListener("keydown", i, !0);
    };
  }, [
    t,
    e,
    n
  ]), fe(() => {
    const o = pe(t.current ? t.current[0] : void 0);
    if (!e)
      return;
    let i = be.getTreeNode(t);
    if (i) {
      var l;
      return i.nodeToRestore = (l = r.current) !== null && l !== void 0 ? l : void 0, () => {
        let s = be.getTreeNode(t);
        if (!s)
          return;
        let u = s.nodeToRestore;
        if (e && u && // eslint-disable-next-line react-hooks/exhaustive-deps
        (he(o.activeElement, t.current) || o.activeElement === o.body && Pa(t))) {
          let a = be.clone();
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
                if (c.scopeRef && c.scopeRef.current && be.getTreeNode(c.scopeRef)) {
                  It(c.scopeRef.current, !0);
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
  let r = e != null && e.tabbable ? $a : ga, o = pe(t).createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode(i) {
      var l;
      return !(e == null || (l = e.from) === null || l === void 0) && l.contains(i) ? NodeFilter.FILTER_REJECT : i.matches(r) && Io(i) && (!n || he(i, n)) && (!(e != null && e.accept) || e.accept(i)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return e != null && e.from && (o.currentNode = e.from), o;
}
class Yn {
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
    let i = new Dn({
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
      i !== n && n.nodeToRestore && i.nodeToRestore && n.scopeRef && n.scopeRef.current && he(i.nodeToRestore, n.scopeRef.current) && (i.nodeToRestore = n.nodeToRestore);
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
    let n = new Yn();
    var r;
    for (let o of this.traverse())
      n.addTreeNode(o.scopeRef, (r = (e = o.parent) === null || e === void 0 ? void 0 : e.scopeRef) !== null && r !== void 0 ? r : null, o.nodeToRestore);
    return n;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new Dn({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class Dn {
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
let be = new Yn();
function Xn(t = {}) {
  let { autoFocus: e = !1, isTextInput: n, within: r } = t, o = B({
    isFocused: !1,
    isFocusVisible: e || ct()
  }), [i, l] = J(!1), [s, u] = J(() => o.current.isFocused && o.current.isFocusVisible), a = oe(() => u(o.current.isFocused && o.current.isFocusVisible), []), c = oe((d) => {
    o.current.isFocused = d, l(d), a();
  }, [
    a
  ]);
  ca((d) => {
    o.current.isFocusVisible = d, a();
  }, [], {
    isTextInput: n
  });
  let { focusProps: f } = Gn({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: p } = Yt({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? p : f
  };
}
let Sa = /* @__PURE__ */ Q.createContext(null);
function Ta(t) {
  let e = Ae(Sa) || {};
  To(e, t);
  let { ref: n, ...r } = e;
  return r;
}
function Oo(t, e) {
  let { focusProps: n } = Gn(t), { keyboardProps: r } = ko(t), o = se(n, r), i = Ta(e), l = t.isDisabled ? {} : i, s = B(t.autoFocus);
  return G(() => {
    s.current && e.current && dt(e.current), s.current = !1;
  }, [
    e
  ]), {
    focusableProps: se({
      ...o,
      tabIndex: t.excludeFromTabOrder && !t.isDisabled ? -1 : void 0
    }, l)
  };
}
const _a = /* @__PURE__ */ new Set([
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
]), Aa = /* @__PURE__ */ new Set([
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
function Ka(t) {
  if (Intl.Locale) {
    let n = new Intl.Locale(t).maximize(), r = typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo;
    if (r)
      return r.direction === "rtl";
    if (n.script)
      return _a.has(n.script);
  }
  let e = t.split("-")[0];
  return Aa.has(e);
}
const Da = Symbol.for("react-aria.i18n.locale");
function Ro() {
  let t = typeof window < "u" && window[Da] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      t
    ]);
  } catch {
    t = "en-US";
  }
  return {
    locale: t,
    direction: Ka(t) ? "rtl" : "ltr"
  };
}
let Fn = Ro(), lt = /* @__PURE__ */ new Set();
function Ir() {
  Fn = Ro();
  for (let t of lt)
    t(Fn);
}
function Fa() {
  let t = jt(), [e, n] = J(Fn);
  return G(() => (lt.size === 0 && window.addEventListener("languagechange", Ir), lt.add(n), () => {
    lt.delete(n), lt.size === 0 && window.removeEventListener("languagechange", Ir);
  }), []), t ? {
    locale: "en-US",
    direction: "ltr"
  } : e;
}
const La = /* @__PURE__ */ Q.createContext(null);
function Xt() {
  let t = Fa();
  return Ae(La) || t;
}
const Br = /* @__PURE__ */ new WeakMap();
function Ma(t) {
  let e = Br.get(t);
  return e || (e = new zt(t), Br.set(t, e)), e;
}
function ka(t, e) {
  return e && zt.getGlobalDictionaryForPackage(e) || Ma(t);
}
function Zn(t, e) {
  let { locale: n } = Xt(), r = ka(t, e);
  return re(() => new lu(n, r), [
    n,
    r
  ]);
}
let pn = /* @__PURE__ */ new Map();
function Jn(t) {
  let { locale: e } = Xt(), n = e + (t ? Object.entries(t).sort((o, i) => o[0] < i[0] ? -1 : 1).join() : "");
  if (pn.has(n))
    return pn.get(n);
  let r = new Intl.Collator(e, t);
  return pn.set(n, r), r;
}
function Na(t) {
  let e = Jn({
    usage: "search",
    ...t
  }), n = oe((i, l) => l.length === 0 ? !0 : (i = i.normalize("NFC"), l = l.normalize("NFC"), e.compare(i.slice(0, l.length), l) === 0), [
    e
  ]), r = oe((i, l) => l.length === 0 ? !0 : (i = i.normalize("NFC"), l = l.normalize("NFC"), e.compare(i.slice(-l.length), l) === 0), [
    e
  ]), o = oe((i, l) => {
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
function Vo(t, e) {
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
    href: p,
    target: d,
    rel: v,
    type: h = "button"
  } = t, x;
  n === "button" ? x = {
    type: h,
    disabled: r
  } : x = {
    role: "button",
    tabIndex: r ? void 0 : 0,
    href: n === "a" && r ? void 0 : p,
    target: n === "a" ? d : void 0,
    type: n === "input" ? h : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? v : void 0
  };
  let { pressProps: _, isPressed: w } = Gt({
    onPressStart: i,
    onPressEnd: l,
    onPressChange: u,
    onPress: o,
    onPressUp: s,
    isDisabled: r,
    preventFocusOnPress: a,
    ref: e
  }), { focusableProps: S } = Oo(t, e);
  c && (S.tabIndex = r ? -1 : S.tabIndex);
  let K = se(S, _, je(t, {
    labelable: !0
  }));
  return {
    isPressed: w,
    buttonProps: se(x, K, {
      "aria-haspopup": t["aria-haspopup"],
      "aria-expanded": t["aria-expanded"],
      "aria-controls": t["aria-controls"],
      "aria-pressed": t["aria-pressed"],
      onClick: (g) => {
        f && (f(g), console.warn("onClick is deprecated, please use onPress"));
      }
    })
  };
}
const zo = 7e3;
let bn = null;
function mn(t, e = "assertive", n = zo) {
  bn || (bn = new Ia()), bn.announce(t, e, n);
}
class Ia {
  createLog(e) {
    let n = document.createElement("div");
    return n.setAttribute("role", "log"), n.setAttribute("aria-live", e), n.setAttribute("aria-relevant", "additions"), n;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(e, n = "assertive", r = zo) {
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
function jo(t, e, n) {
  let { validationBehavior: r, focus: o } = t;
  fe(() => {
    if (r === "native" && (n != null && n.current)) {
      let u = e.realtimeValidation.isInvalid ? e.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      n.current.setCustomValidity(u), n.current.hasAttribute("title") || (n.current.title = ""), e.realtimeValidation.isInvalid || e.updateValidation(Oa(n.current));
    }
  });
  let i = xe(() => {
    e.resetValidation();
  }), l = xe((u) => {
    var a;
    e.displayValidation.isInvalid || e.commitValidation();
    let c = n == null || (a = n.current) === null || a === void 0 ? void 0 : a.form;
    if (!u.defaultPrevented && n && c && Ra(c) === n.current) {
      var f;
      o ? o() : (f = n.current) === null || f === void 0 || f.focus(), Lo("keyboard");
    }
    u.preventDefault();
  }), s = xe(() => {
    e.commitValidation();
  });
  G(() => {
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
function Ba(t) {
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
function Oa(t) {
  return {
    isInvalid: !t.validity.valid,
    validationDetails: Ba(t),
    validationErrors: t.validationMessage ? [
      t.validationMessage
    ] : []
  };
}
function Ra(t) {
  for (let e = 0; e < t.elements.length; e++) {
    let n = t.elements[e];
    if (!n.validity.valid)
      return n;
  }
  return null;
}
function Ho(t) {
  let { id: e, label: n, "aria-labelledby": r, "aria-label": o, labelElementType: i = "label" } = t;
  e = _e(e);
  let l = _e(), s = {};
  n ? (r = r ? `${l} ${r}` : l, s = {
    id: l,
    htmlFor: i === "label" ? e : void 0
  }) : !r && !o && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let u = Kt({
    id: e,
    "aria-label": o,
    "aria-labelledby": r
  });
  return {
    labelProps: s,
    fieldProps: u
  };
}
function Uo(t) {
  let { description: e, errorMessage: n, isInvalid: r, validationState: o } = t, { labelProps: i, fieldProps: l } = Ho(t), s = Oe([
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
var Wo = {};
Wo = {
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
var Go = {};
Go = {
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
var qo = {};
qo = {
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
var Yo = {};
Yo = {
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
var Xo = {};
Xo = {
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
var Zo = {};
Zo = {
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
var Jo = {};
Jo = {
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
var Qo = {};
Qo = {
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
var ei = {};
ei = {
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
var ti = {};
ti = {
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
var ni = {};
ni = {
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
var ri = {};
ri = {
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
var oi = {};
oi = {
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
var ii = {};
ii = {
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
var li = {};
li = {
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
var si = {};
si = {
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
var ui = {};
ui = {
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
var ai = {};
ai = {
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
var ci = {};
ci = {
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
var di = {};
di = {
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
var fi = {};
fi = {
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
var pi = {};
pi = {
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
var bi = {};
bi = {
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
var mi = {};
mi = {
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
var vi = {};
vi = {
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
var hi = {};
hi = {
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
var gi = {};
gi = {
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
var $i = {};
$i = {
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
var yi = {};
yi = {
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
var xi = {};
xi = {
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
var Ci = {};
Ci = {
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
var Ei = {};
Ei = {
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
var Pi = {};
Pi = {
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
var wi = {};
wi = {
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
var Si = {};
Si = {
  dismiss: "تجاهل"
};
var Ti = {};
Ti = {
  dismiss: "Отхвърляне"
};
var _i = {};
_i = {
  dismiss: "Odstranit"
};
var Ai = {};
Ai = {
  dismiss: "Luk"
};
var Ki = {};
Ki = {
  dismiss: "Schließen"
};
var Di = {};
Di = {
  dismiss: "Απόρριψη"
};
var Fi = {};
Fi = {
  dismiss: "Dismiss"
};
var Li = {};
Li = {
  dismiss: "Descartar"
};
var Mi = {};
Mi = {
  dismiss: "Lõpeta"
};
var ki = {};
ki = {
  dismiss: "Hylkää"
};
var Ni = {};
Ni = {
  dismiss: "Rejeter"
};
var Ii = {};
Ii = {
  dismiss: "התעלם"
};
var Bi = {};
Bi = {
  dismiss: "Odbaci"
};
var Oi = {};
Oi = {
  dismiss: "Elutasítás"
};
var Ri = {};
Ri = {
  dismiss: "Ignora"
};
var Vi = {};
Vi = {
  dismiss: "閉じる"
};
var zi = {};
zi = {
  dismiss: "무시"
};
var ji = {};
ji = {
  dismiss: "Atmesti"
};
var Hi = {};
Hi = {
  dismiss: "Nerādīt"
};
var Ui = {};
Ui = {
  dismiss: "Lukk"
};
var Wi = {};
Wi = {
  dismiss: "Negeren"
};
var Gi = {};
Gi = {
  dismiss: "Zignoruj"
};
var qi = {};
qi = {
  dismiss: "Descartar"
};
var Yi = {};
Yi = {
  dismiss: "Dispensar"
};
var Xi = {};
Xi = {
  dismiss: "Revocare"
};
var Zi = {};
Zi = {
  dismiss: "Пропустить"
};
var Ji = {};
Ji = {
  dismiss: "Zrušiť"
};
var Qi = {};
Qi = {
  dismiss: "Opusti"
};
var el = {};
el = {
  dismiss: "Odbaci"
};
var tl = {};
tl = {
  dismiss: "Avvisa"
};
var nl = {};
nl = {
  dismiss: "Kapat"
};
var rl = {};
rl = {
  dismiss: "Скасувати"
};
var ol = {};
ol = {
  dismiss: "取消"
};
var il = {};
il = {
  dismiss: "關閉"
};
const Or = {
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
function ll(t = {}) {
  let { style: e, isFocusable: n } = t, [r, o] = J(!1), { focusWithinProps: i } = Yt({
    isDisabled: !n,
    onFocusWithinChange: (s) => o(s)
  }), l = re(() => r ? e : e ? {
    ...Or,
    ...e
  } : Or, [
    r
  ]);
  return {
    visuallyHiddenProps: {
      ...i,
      style: l
    }
  };
}
function Va(t) {
  let { children: e, elementType: n = "div", isFocusable: r, style: o, ...i } = t, { visuallyHiddenProps: l } = ll(t);
  return /* @__PURE__ */ Q.createElement(n, se(i, l), e);
}
function za(t) {
  return t && t.__esModule ? t.default : t;
}
const Rr = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, Bt = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, ja = {
  top: "left",
  left: "top"
}, Ln = {
  top: "height",
  left: "width"
}, Ha = {
  width: "totalWidth",
  height: "totalHeight"
}, Et = {};
let Ge = typeof document < "u" && window.visualViewport;
function Vr(t) {
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
function Ua(t) {
  return {
    top: t.scrollTop,
    left: t.scrollLeft,
    width: t.scrollWidth,
    height: t.scrollHeight
  };
}
function zr(t, e, n, r, o, i) {
  let l = o.scroll[t], s = r[Ln[t]], u = e - i - l, a = e + i - l + n;
  return u < 0 ? -u : a > s ? Math.max(s - a, -u) : 0;
}
function Wa(t) {
  let e = window.getComputedStyle(t);
  return {
    top: parseInt(e.marginTop, 10) || 0,
    bottom: parseInt(e.marginBottom, 10) || 0,
    left: parseInt(e.marginLeft, 10) || 0,
    right: parseInt(e.marginRight, 10) || 0
  };
}
function jr(t) {
  if (Et[t])
    return Et[t];
  let [e, n] = t.split(" "), r = Rr[e] || "right", o = ja[r];
  Rr[n] || (n = "center");
  let i = Ln[r], l = Ln[o];
  return Et[t] = {
    placement: e,
    crossPlacement: n,
    axis: r,
    crossAxis: o,
    size: i,
    crossSize: l
  }, Et[t];
}
function vn(t, e, n, r, o, i, l, s, u, a) {
  let { placement: c, crossPlacement: f, axis: p, crossAxis: d, size: v, crossSize: h } = r, x = {};
  x[d] = t[d], f === "center" ? x[d] += (t[h] - n[h]) / 2 : f !== d && (x[d] += t[h] - n[h]), x[d] += i;
  const _ = t[d] - n[h] + u + a, w = t[d] + t[h] - u - a;
  if (x[d] = xn(x[d], _, w), c === p) {
    const S = s ? l[v] : e[Ha[v]];
    x[Bt[p]] = Math.floor(S - t[p] + o);
  } else
    x[p] = Math.floor(t[p] + t[v] + o);
  return x;
}
function Ga(t, e, n, r, o, i) {
  return t.top != null ? Math.max(0, e.height + e.top + e.scroll.top - (n.top + t.top) - (o.top + o.bottom + i)) : Math.max(0, r.top + n.top - (e.top + e.scroll.top) - (o.top + o.bottom + i));
}
function Hr(t, e, n, r, o, i) {
  let { placement: l, axis: s, size: u } = i;
  return l === s ? Math.max(0, n[s] - t[s] - t.scroll[s] + e[s] - r[s] - r[Bt[s]] - o) : Math.max(0, t[u] + t[s] + t.scroll[s] - e[s] - n[s] - n[u] - r[s] - r[Bt[s]] - o);
}
function qa(t, e, n, r, o, i, l, s, u, a, c, f, p, d, v, h) {
  let x = jr(t), { size: _, crossAxis: w, crossSize: S, placement: K, crossPlacement: g } = x, k = vn(e, s, n, x, c, f, a, p, v, h), O = c, b = Hr(s, a, e, o, i + c, x);
  if (l && r[_] > b) {
    let ue = jr(`${Bt[K]} ${g}`), ae = vn(e, s, n, ue, c, f, a, p, v, h);
    Hr(s, a, e, o, i + c, ue) > b && (x = ue, k = ae, O = c);
  }
  let A = zr(w, k[w], n[S], s, u, i);
  k[w] += A;
  let E = Ga(k, s, a, e, o, i);
  d && d < E && (E = d), n.height = Math.min(n.height, E), k = vn(e, s, n, x, O, f, a, p, v, h), A = zr(w, k[w], n[S], s, u, i), k[w] += A;
  let P = {}, I = e[w] + 0.5 * e[S] - n[w];
  const C = v / 2 + h, T = n[S] - v / 2 - h, q = e[w] - n[w] + v / 2, V = e[w] + e[S] - n[w] - v / 2, F = xn(I, q, V);
  return P[w] = xn(F, C, T), {
    position: k,
    maxHeight: E,
    arrowOffsetLeft: P.left,
    arrowOffsetTop: P.top,
    placement: x.placement
  };
}
function Ya(t) {
  let { placement: e, targetNode: n, overlayNode: r, scrollNode: o, padding: i, shouldFlip: l, boundaryElement: s, offset: u, crossOffset: a, maxHeight: c, arrowSize: f = 0, arrowBoundaryOffset: p = 0 } = t, d = r instanceof HTMLElement ? Xa(r) : document.documentElement, v = d === document.documentElement;
  const h = window.getComputedStyle(d).position;
  let x = !!h && h !== "static", _ = v ? Je(n) : Ur(n, d);
  if (!v) {
    let { marginTop: b, marginLeft: A } = window.getComputedStyle(n);
    _.top += parseInt(b, 10) || 0, _.left += parseInt(A, 10) || 0;
  }
  let w = Je(r), S = Wa(r);
  w.width += S.left + S.right, w.height += S.top + S.bottom;
  let K = Ua(o), g = Vr(s), k = Vr(d), O = s.tagName === "BODY" ? Je(d) : Ur(d, s);
  return qa(e, _, w, K, S, i, l, g, k, O, u, a, x, c, f, p);
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
function Ur(t, e) {
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
function Xa(t) {
  let e = t.offsetParent;
  if (e && e === document.body && window.getComputedStyle(e).position === "static" && !Wr(e) && (e = document.documentElement), e == null)
    for (e = t.parentElement; e && !Wr(e); )
      e = e.parentElement;
  return e || document.documentElement;
}
function Wr(t) {
  let e = window.getComputedStyle(t);
  return e.transform !== "none" || /transform|perspective/.test(e.willChange) || e.filter !== "none" || e.contain === "paint" || // @ts-ignore
  "backdropFilter" in e && e.backdropFilter !== "none" || // @ts-ignore
  "WebkitBackdropFilter" in e && e.WebkitBackdropFilter !== "none";
}
const sl = /* @__PURE__ */ new WeakMap();
function Za(t) {
  let { triggerRef: e, isOpen: n, onClose: r } = t;
  G(() => {
    if (!n || r === null)
      return;
    let o = (i) => {
      let l = i.target;
      if (!e.current || l instanceof Node && !l.contains(e.current))
        return;
      let s = r || sl.get(e.current);
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
function Ja(t) {
  let { direction: e } = Xt(), { arrowSize: n = 0, targetRef: r, overlayRef: o, scrollRef: i = o, placement: l = "bottom", containerPadding: s = 12, shouldFlip: u = !0, boundaryElement: a = typeof document < "u" ? document.body : null, offset: c = 0, crossOffset: f = 0, shouldUpdatePosition: p = !0, isOpen: d = !0, onClose: v, maxHeight: h, arrowBoundaryOffset: x = 0 } = t, [_, w] = J({
    position: {},
    arrowOffsetLeft: void 0,
    arrowOffsetTop: void 0,
    maxHeight: void 0,
    placement: void 0
  }), S = [
    p,
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
    h,
    x,
    n
  ], K = oe(() => {
    if (p === !1 || !d || !o.current || !r.current || !i.current || !a)
      return;
    let O = Ya({
      placement: ec(l, e),
      overlayNode: o.current,
      targetNode: r.current,
      scrollNode: i.current,
      padding: s,
      shouldFlip: u,
      boundaryElement: a,
      offset: c,
      crossOffset: f,
      maxHeight: h,
      arrowSize: n,
      arrowBoundaryOffset: x
    });
    Object.keys(O.position).forEach((b) => o.current.style[b] = O.position[b] + "px"), o.current.style.maxHeight = O.maxHeight != null ? O.maxHeight + "px" : void 0, w(O);
  }, S);
  fe(K, S), Qa(K), Vu({
    ref: o,
    onResize: K
  });
  let g = B(!1);
  fe(() => {
    let O, b = () => {
      g.current = !0, clearTimeout(O), O = setTimeout(() => {
        g.current = !1;
      }, 500), K();
    };
    return Ee == null || Ee.addEventListener("resize", b), Ee == null || Ee.addEventListener("scroll", b), () => {
      Ee == null || Ee.removeEventListener("resize", b), Ee == null || Ee.removeEventListener("scroll", b);
    };
  }, [
    K
  ]);
  let k = oe(() => {
    g.current || v();
  }, [
    v,
    g
  ]);
  return Za({
    triggerRef: r,
    isOpen: d,
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
function Qa(t) {
  fe(() => (window.addEventListener("resize", t, !1), () => {
    window.removeEventListener("resize", t, !1);
  }), [
    t
  ]);
}
function ec(t, e) {
  return e === "rtl" ? t.replace("start", "right").replace("end", "left") : t.replace("start", "left").replace("end", "right");
}
const De = [];
function tc(t, e) {
  let { onClose: n, shouldCloseOnBlur: r, isOpen: o, isDismissable: i = !1, isKeyboardDismissDisabled: l = !1, shouldCloseOnInteractOutside: s } = t;
  G(() => (o && De.push(e), () => {
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
  fa({
    ref: e,
    onInteractOutside: i && o ? c : null,
    onInteractOutsideStart: a
  });
  let { focusWithinProps: p } = Yt({
    isDisabled: !r,
    onBlurWithin: (v) => {
      !v.relatedTarget || xa(v.relatedTarget) || (!s || s(v.relatedTarget)) && n();
    }
  }), d = (v) => {
    v.target === v.currentTarget && v.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: f,
      ...p
    },
    underlayProps: {
      onPointerDown: d
    }
  };
}
function nc(t, e, n) {
  let { type: r } = t, { isOpen: o } = e;
  G(() => {
    n && n.current && sl.set(n.current, e.close);
  });
  let i;
  r === "menu" ? i = !0 : r === "listbox" && (i = "listbox");
  let l = _e();
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
const hn = typeof document < "u" && window.visualViewport, rc = /* @__PURE__ */ new Set([
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
let Pt = 0, gn;
function oc(t = {}) {
  let { isDisabled: e } = t;
  fe(() => {
    if (!e)
      return Pt++, Pt === 1 && (Ut() ? gn = lc() : gn = ic()), () => {
        Pt--, Pt === 0 && gn();
      };
  }, [
    e
  ]);
}
function ic() {
  return Qe(Ze(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Ze(document.documentElement, "overflow", "hidden"));
}
function lc() {
  let t, e, n = (a) => {
    t = Dt(a.target, !0), !(t === document.documentElement && t === document.body) && t instanceof HTMLElement && window.getComputedStyle(t).overscrollBehavior === "auto" && (e = Ze(t, "overscrollBehavior", "contain"));
  }, r = (a) => {
    if (!t || t === document.documentElement || t === document.body) {
      a.preventDefault();
      return;
    }
    t.scrollHeight === t.clientHeight && t.scrollWidth === t.clientWidth && a.preventDefault();
  }, o = (a) => {
    let c = a.target;
    qr(c) && c !== document.activeElement && (a.preventDefault(), s(), c.style.transform = "translateY(-2000px)", c.focus(), requestAnimationFrame(() => {
      c.style.transform = "";
    })), e && e();
  }, i = (a) => {
    let c = a.target;
    qr(c) && (s(), c.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      c.style.transform = "", hn && (hn.height < window.innerHeight ? requestAnimationFrame(() => {
        Gr(c);
      }) : hn.addEventListener("resize", () => Gr(c), {
        once: !0
      }));
    }));
  }, l = null, s = () => {
    if (l)
      return;
    let a = () => {
      window.scrollTo(0, 0);
    }, c = window.pageXOffset, f = window.pageYOffset;
    l = Qe(rt(window, "scroll", a), Ze(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Ze(document.documentElement, "overflow", "hidden"), Ze(document.body, "marginTop", `-${f}px`), () => {
      window.scrollTo(c, f);
    }), window.scrollTo(0, 0);
  }, u = Qe(rt(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), rt(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), rt(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), rt(document, "focus", i, !0));
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
function rt(t, e, n, r) {
  return t.addEventListener(e, n, r), () => {
    t.removeEventListener(e, n, r);
  };
}
function Gr(t) {
  let e = document.scrollingElement || document.documentElement;
  for (; t && t !== e; ) {
    let n = Dt(t);
    if (n !== document.documentElement && n !== document.body && n !== t) {
      let r = n.getBoundingClientRect().top, o = t.getBoundingClientRect().top;
      o > r + t.clientHeight && (n.scrollTop += o - r);
    }
    t = n.parentElement;
  }
}
function qr(t) {
  return t instanceof HTMLInputElement && !rc.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable;
}
var ul = {};
ul = {
  "ar-AE": Si,
  "bg-BG": Ti,
  "cs-CZ": _i,
  "da-DK": Ai,
  "de-DE": Ki,
  "el-GR": Di,
  "en-US": Fi,
  "es-ES": Li,
  "et-EE": Mi,
  "fi-FI": ki,
  "fr-FR": Ni,
  "he-IL": Ii,
  "hr-HR": Bi,
  "hu-HU": Oi,
  "it-IT": Ri,
  "ja-JP": Vi,
  "ko-KR": zi,
  "lt-LT": ji,
  "lv-LV": Hi,
  "nb-NO": Ui,
  "nl-NL": Wi,
  "pl-PL": Gi,
  "pt-BR": qi,
  "pt-PT": Yi,
  "ro-RO": Xi,
  "ru-RU": Zi,
  "sk-SK": Ji,
  "sl-SI": Qi,
  "sr-SP": el,
  "sv-SE": tl,
  "tr-TR": nl,
  "uk-UA": rl,
  "zh-CN": ol,
  "zh-TW": il
};
function Yr(t) {
  let { onDismiss: e, ...n } = t, r = Zn(/* @__PURE__ */ za(ul), "@react-aria/overlays"), o = Kt(n, r.format("dismiss")), i = () => {
    e && e();
  };
  return /* @__PURE__ */ Q.createElement(Va, null, /* @__PURE__ */ Q.createElement("button", {
    ...o,
    tabIndex: -1,
    onClick: i,
    style: {
      width: 1,
      height: 1
    }
  }));
}
let ot = /* @__PURE__ */ new WeakMap(), Pe = [];
function al(t, e = document.body) {
  let n = new Set(t), r = /* @__PURE__ */ new Set(), o = (u) => {
    for (let p of u.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))
      n.add(p);
    let a = (p) => {
      if (n.has(p) || r.has(p.parentElement) && p.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let d of n)
        if (p.contains(d))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, c = document.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, {
      acceptNode: a
    }), f = a(u);
    if (f === NodeFilter.FILTER_ACCEPT && i(u), f !== NodeFilter.FILTER_REJECT) {
      let p = c.nextNode();
      for (; p != null; )
        i(p), p = c.nextNode();
    }
  }, i = (u) => {
    var a;
    let c = (a = ot.get(u)) !== null && a !== void 0 ? a : 0;
    u.getAttribute("aria-hidden") === "true" && c === 0 || (c === 0 && u.setAttribute("aria-hidden", "true"), r.add(u), ot.set(u, c + 1));
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
      let a = ot.get(u);
      a === 1 ? (u.removeAttribute("aria-hidden"), ot.delete(u)) : ot.set(u, a - 1);
    }
    s === Pe[Pe.length - 1] ? (Pe.pop(), Pe.length && Pe[Pe.length - 1].observe()) : Pe.splice(Pe.indexOf(s), 1);
  };
}
function sc(t, e) {
  let { triggerRef: n, popoverRef: r, isNonModal: o, isKeyboardDismissDisabled: i, shouldCloseOnInteractOutside: l, ...s } = t, { overlayProps: u, underlayProps: a } = tc({
    isOpen: e.isOpen,
    onClose: e.close,
    shouldCloseOnBlur: !0,
    isDismissable: !o,
    isKeyboardDismissDisabled: i,
    shouldCloseOnInteractOutside: l
  }, r), { overlayProps: c, arrowProps: f, placement: p } = Ja({
    ...s,
    targetRef: n,
    overlayRef: r,
    isOpen: e.isOpen,
    onClose: o ? e.close : null
  });
  return oc({
    isDisabled: o || !e.isOpen
  }), fe(() => {
    if (e.isOpen && !o && r.current)
      return al([
        r.current
      ]);
  }, [
    o,
    e.isOpen,
    r
  ]), {
    popoverProps: se(u, c),
    arrowProps: f,
    underlayProps: a,
    placement: p
  };
}
const uc = /* @__PURE__ */ Q.createContext(null);
function ac(t) {
  let e = jt(), { portalContainer: n = e ? null : document.body, isExiting: r } = t, [o, i] = J(!1), l = re(() => ({
    contain: o,
    setContain: i
  }), [
    o,
    i
  ]);
  if (!n)
    return null;
  let s = t.children;
  return t.disableFocusManagement || (s = /* @__PURE__ */ Q.createElement(va, {
    restoreFocus: !0,
    contain: o && !r
  }, s)), s = /* @__PURE__ */ Q.createElement(uc.Provider, {
    value: l
  }, /* @__PURE__ */ Q.createElement(ea, null, s)), /* @__PURE__ */ In.createPortal(s, n);
}
function Mn(t) {
  return wt() ? t.altKey : t.ctrlKey;
}
function Ye(t) {
  return Ie() ? t.metaKey : t.ctrlKey;
}
const cc = 1e3;
function cl(t) {
  let { keyboardDelegate: e, selectionManager: n, onTypeSelect: r } = t, o = B({
    search: "",
    timeout: null
  }).current, i = (l) => {
    let s = dc(l.key);
    if (!s || l.ctrlKey || l.metaKey || !l.currentTarget.contains(l.target))
      return;
    s === " " && o.search.trim().length > 0 && (l.preventDefault(), "continuePropagation" in l || l.stopPropagation()), o.search += s;
    let u = e.getKeyForSearch(o.search, n.focusedKey);
    u == null && (u = e.getKeyForSearch(o.search)), u != null && (n.setFocusedKey(u), r && r(u)), clearTimeout(o.timeout), o.timeout = setTimeout(() => {
      o.search = "";
    }, cc);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: e.getKeyForSearch ? i : null
    }
  };
}
function dc(t) {
  return t.length === 1 || !/^[A-Z]/i.test(t) ? t : "";
}
function dl(t) {
  let { selectionManager: e, keyboardDelegate: n, ref: r, autoFocus: o = !1, shouldFocusWrap: i = !1, disallowEmptySelection: l = !1, disallowSelectAll: s = !1, selectOnFocus: u = e.selectionBehavior === "replace", disallowTypeAhead: a = !1, shouldUseVirtualFocus: c, allowsTabNavigation: f = !1, isVirtualized: p, scrollRef: d = r, linkBehavior: v = "action" } = t, { direction: h } = Xt(), x = Wt(), _ = (E) => {
    if (E.altKey && E.key === "Tab" && E.preventDefault(), !r.current.contains(E.target))
      return;
    const P = ($, D) => {
      if ($ != null) {
        if (e.isLink($) && v === "selection" && u && !Mn(E)) {
          os(() => {
            e.setFocusedKey($, D);
          });
          let z = d.current.querySelector(`[data-key="${CSS.escape($.toString())}"]`);
          x.open(z, E);
          return;
        }
        if (e.setFocusedKey($, D), e.isLink($) && v === "override")
          return;
        E.shiftKey && e.selectionMode === "multiple" ? e.extendSelection($) : u && !Mn(E) && e.replaceSelection($);
      }
    };
    switch (E.key) {
      case "ArrowDown":
        if (n.getKeyBelow) {
          var I, C;
          E.preventDefault();
          let $ = e.focusedKey != null ? n.getKeyBelow(e.focusedKey) : (I = n.getFirstKey) === null || I === void 0 ? void 0 : I.call(n);
          $ == null && i && ($ = (C = n.getFirstKey) === null || C === void 0 ? void 0 : C.call(n, e.focusedKey)), P($);
        }
        break;
      case "ArrowUp":
        if (n.getKeyAbove) {
          var T, q;
          E.preventDefault();
          let $ = e.focusedKey != null ? n.getKeyAbove(e.focusedKey) : (T = n.getLastKey) === null || T === void 0 ? void 0 : T.call(n);
          $ == null && i && ($ = (q = n.getLastKey) === null || q === void 0 ? void 0 : q.call(n, e.focusedKey)), P($);
        }
        break;
      case "ArrowLeft":
        if (n.getKeyLeftOf) {
          var V, F;
          E.preventDefault();
          let $ = n.getKeyLeftOf(e.focusedKey);
          $ == null && i && ($ = h === "rtl" ? (V = n.getFirstKey) === null || V === void 0 ? void 0 : V.call(n, e.focusedKey) : (F = n.getLastKey) === null || F === void 0 ? void 0 : F.call(n, e.focusedKey)), P($, h === "rtl" ? "first" : "last");
        }
        break;
      case "ArrowRight":
        if (n.getKeyRightOf) {
          var ue, ae;
          E.preventDefault();
          let $ = n.getKeyRightOf(e.focusedKey);
          $ == null && i && ($ = h === "rtl" ? (ue = n.getLastKey) === null || ue === void 0 ? void 0 : ue.call(n, e.focusedKey) : (ae = n.getFirstKey) === null || ae === void 0 ? void 0 : ae.call(n, e.focusedKey)), P($, h === "rtl" ? "last" : "first");
        }
        break;
      case "Home":
        if (n.getFirstKey) {
          E.preventDefault();
          let $ = n.getFirstKey(e.focusedKey, Ye(E));
          e.setFocusedKey($), Ye(E) && E.shiftKey && e.selectionMode === "multiple" ? e.extendSelection($) : u && e.replaceSelection($);
        }
        break;
      case "End":
        if (n.getLastKey) {
          E.preventDefault();
          let $ = n.getLastKey(e.focusedKey, Ye(E));
          e.setFocusedKey($), Ye(E) && E.shiftKey && e.selectionMode === "multiple" ? e.extendSelection($) : u && e.replaceSelection($);
        }
        break;
      case "PageDown":
        if (n.getKeyPageBelow) {
          E.preventDefault();
          let $ = n.getKeyPageBelow(e.focusedKey);
          P($);
        }
        break;
      case "PageUp":
        if (n.getKeyPageAbove) {
          E.preventDefault();
          let $ = n.getKeyPageAbove(e.focusedKey);
          P($);
        }
        break;
      case "a":
        Ye(E) && e.selectionMode === "multiple" && s !== !0 && (E.preventDefault(), e.selectAll());
        break;
      case "Escape":
        E.preventDefault(), l || e.clearSelection();
        break;
      case "Tab":
        if (!f) {
          if (E.shiftKey)
            r.current.focus();
          else {
            let $ = Me(r.current, {
              tabbable: !0
            }), D, z;
            do
              z = $.lastChild(), z && (D = z);
            while (z);
            D && !D.contains(document.activeElement) && Fe(D);
          }
          break;
        }
    }
  }, w = B({
    top: 0,
    left: 0
  });
  Hu(d, "scroll", p ? null : () => {
    w.current = {
      top: d.current.scrollTop,
      left: d.current.scrollLeft
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
        var P, I;
        T && E.currentTarget.compareDocumentPosition(T) & Node.DOCUMENT_POSITION_FOLLOWING ? C((P = e.lastSelectedKey) !== null && P !== void 0 ? P : n.getLastKey()) : C((I = e.firstSelectedKey) !== null && I !== void 0 ? I : n.getFirstKey());
      } else
        p || (d.current.scrollTop = w.current.top, d.current.scrollLeft = w.current.left);
      if (!p && e.focusedKey != null) {
        let C = d.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);
        C && (C.contains(document.activeElement) || Fe(C), An() === "keyboard" && Sr(C, {
          containingElement: r.current
        }));
      }
    }
  }, K = (E) => {
    E.currentTarget.contains(E.relatedTarget) || e.setFocused(!1);
  };
  const g = B(o);
  G(() => {
    if (g.current) {
      let E = null;
      o === "first" && (E = n.getFirstKey()), o === "last" && (E = n.getLastKey());
      let P = e.selectedKeys;
      if (P.size) {
        for (let I of P)
          if (e.canSelectItem(I)) {
            E = I;
            break;
          }
      }
      e.setFocused(!0), e.setFocusedKey(E), E == null && !c && dt(r.current);
    }
  }, []);
  let k = B(e.focusedKey);
  G(() => {
    let E = An();
    if (e.isFocused && e.focusedKey != null && (d != null && d.current)) {
      let P = d.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);
      P && (E === "keyboard" || g.current) && (p || _o(d.current, P), Sr(P, {
        containingElement: r.current
      }));
    }
    e.isFocused && e.focusedKey == null && k.current != null && dt(r.current), k.current = e.focusedKey, g.current = !1;
  }, [
    p,
    d,
    e.focusedKey,
    e.isFocused,
    r
  ]);
  let O = {
    onKeyDown: _,
    onFocus: S,
    onBlur: K,
    onMouseDown(E) {
      d.current === E.target && E.preventDefault();
    }
  }, { typeSelectProps: b } = cl({
    keyboardDelegate: n,
    selectionManager: e
  });
  a || (O = se(b, O));
  let A;
  return c || (A = e.focusedKey == null ? 0 : -1), {
    collectionProps: {
      ...O,
      tabIndex: A
    }
  };
}
function fl(t) {
  let { selectionManager: e, key: n, ref: r, shouldSelectOnPressUp: o, shouldUseVirtualFocus: i, focus: l, isDisabled: s, onAction: u, allowsDifferentPressOrigin: a, linkBehavior: c = "action" } = t, f = Wt(), p = (F) => {
    if (F.pointerType === "keyboard" && Mn(F))
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
  G(() => {
    n === e.focusedKey && e.isFocused && !i && (l ? l() : document.activeElement !== r.current && dt(r.current));
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
  let v = e.isLink(n) && c === "override", h = e.isLink(n) && c !== "selection" && c !== "none", x = !s && e.canSelectItem(n) && !v, _ = (u || h) && !s, w = _ && (e.selectionBehavior === "replace" ? !x : !x || e.isEmpty), S = _ && x && e.selectionBehavior === "replace", K = w || S, g = B(null), k = K && x, O = B(!1), b = B(!1), A = (F) => {
    u && u(), h && f.open(r.current, F);
  }, E = {};
  o ? (E.onPressStart = (F) => {
    g.current = F.pointerType, O.current = k, F.pointerType === "keyboard" && (!K || Zr()) && p(F);
  }, a ? (E.onPressUp = w ? null : (F) => {
    F.pointerType !== "keyboard" && x && p(F);
  }, E.onPress = w ? A : null) : E.onPress = (F) => {
    if (w || S && F.pointerType !== "mouse") {
      if (F.pointerType === "keyboard" && !Xr())
        return;
      A(F);
    } else
      F.pointerType !== "keyboard" && x && p(F);
  }) : (E.onPressStart = (F) => {
    g.current = F.pointerType, O.current = k, b.current = w, x && (F.pointerType === "mouse" && !w || F.pointerType === "keyboard" && (!_ || Zr())) && p(F);
  }, E.onPress = (F) => {
    (F.pointerType === "touch" || F.pointerType === "pen" || F.pointerType === "virtual" || F.pointerType === "keyboard" && K && Xr() || F.pointerType === "mouse" && b.current) && (K ? A(F) : x && p(F));
  }), d["data-key"] = n, E.preventFocusOnPress = i;
  let { pressProps: P, isPressed: I } = Gt(E), C = S ? (F) => {
    g.current === "mouse" && (F.stopPropagation(), F.preventDefault(), A(F));
  } : void 0, { longPressProps: T } = No({
    isDisabled: !k,
    onLongPress(F) {
      F.pointerType === "touch" && (p(F), e.setSelectionBehavior("toggle"));
    }
  }), q = (F) => {
    g.current === "touch" && O.current && F.preventDefault();
  }, V = e.isLink(n) ? (F) => {
    Re.isOpening || F.preventDefault();
  } : void 0;
  return {
    itemProps: se(d, x || w ? P : {}, k ? T : {}, {
      onDoubleClick: C,
      onDragStartCapture: q,
      onClick: V
    }),
    isPressed: I,
    isSelected: e.isSelected(n),
    isFocused: e.isFocused && e.focusedKey === n,
    isDisabled: s,
    allowsSelection: x,
    hasAction: K
  };
}
function Xr() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === "Enter";
}
function Zr() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === " " || (t == null ? void 0 : t.code) === "Space";
}
class Qn {
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
    if (!Ft(n))
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
    if (!Ft(n))
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
function pl(t) {
  let { selectionManager: e, collection: n, disabledKeys: r, ref: o, keyboardDelegate: i } = t, l = Jn({
    usage: "search",
    sensitivity: "base"
  }), s = e.disabledBehavior, u = re(() => i || new Qn(n, s === "selection" ? /* @__PURE__ */ new Set() : r, o, l), [
    i,
    n,
    r,
    o,
    l,
    s
  ]), { collectionProps: a } = dl({
    ...t,
    ref: o,
    selectionManager: e,
    keyboardDelegate: u
  });
  return {
    listProps: a
  };
}
const Zt = /* @__PURE__ */ new WeakMap();
function fc(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function bl(t, e) {
  let n = Zt.get(t);
  if (!n)
    throw new Error("Unknown list");
  return `${n.id}-option-${fc(e)}`;
}
function pc(t, e, n) {
  let r = je(t, {
    labelable: !0
  }), o = t.selectionBehavior || "toggle", i = t.linkBehavior || (o === "replace" ? "action" : "override");
  o === "toggle" && i === "action" && (i = "override");
  let { listProps: l } = pl({
    ...t,
    ref: n,
    selectionManager: e.selectionManager,
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    linkBehavior: i
  }), { focusWithinProps: s } = Yt({
    onFocusWithin: t.onFocus,
    onBlurWithin: t.onBlur,
    onFocusWithinChange: t.onFocusChange
  }), u = _e(t.id);
  Zt.set(e, {
    id: u,
    shouldUseVirtualFocus: t.shouldUseVirtualFocus,
    shouldSelectOnPressUp: t.shouldSelectOnPressUp,
    shouldFocusOnHover: t.shouldFocusOnHover,
    isVirtualized: t.isVirtualized,
    onAction: t.onAction,
    linkBehavior: i
  });
  let { labelProps: a, fieldProps: c } = Ho({
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
function bc(t, e, n) {
  var r;
  let { key: o } = t, i = Zt.get(e);
  var l;
  let s = (l = t.isDisabled) !== null && l !== void 0 ? l : e.disabledKeys.has(o);
  var u;
  let a = (u = t.isSelected) !== null && u !== void 0 ? u : e.selectionManager.isSelected(o);
  var c;
  let f = (c = t.shouldSelectOnPressUp) !== null && c !== void 0 ? c : i == null ? void 0 : i.shouldSelectOnPressUp;
  var p;
  let d = (p = t.shouldFocusOnHover) !== null && p !== void 0 ? p : i == null ? void 0 : i.shouldFocusOnHover;
  var v;
  let h = (v = t.shouldUseVirtualFocus) !== null && v !== void 0 ? v : i == null ? void 0 : i.shouldUseVirtualFocus;
  var x;
  let _ = (x = t.isVirtualized) !== null && x !== void 0 ? x : i == null ? void 0 : i.isVirtualized, w = Oe(), S = Oe(), K = {
    role: "option",
    "aria-disabled": s || void 0,
    "aria-selected": e.selectionManager.selectionMode !== "none" ? a : void 0
  };
  Ie() && Eo() || (K["aria-label"] = t["aria-label"], K["aria-labelledby"] = w, K["aria-describedby"] = S);
  let g = e.collection.getItem(o);
  if (_) {
    let C = Number(g == null ? void 0 : g.index);
    K["aria-posinset"] = Number.isNaN(C) ? void 0 : C + 1, K["aria-setsize"] = zn(e.collection);
  }
  let { itemProps: k, isPressed: O, isFocused: b, hasAction: A, allowsSelection: E } = fl({
    selectionManager: e.selectionManager,
    key: o,
    ref: n,
    shouldSelectOnPressUp: f,
    allowsDifferentPressOrigin: f && d,
    isVirtualized: _,
    shouldUseVirtualFocus: h,
    isDisabled: s,
    onAction: i != null && i.onAction ? () => {
      var C;
      return i == null || (C = i.onAction) === null || C === void 0 ? void 0 : C.call(i, o);
    } : void 0,
    linkBehavior: i == null ? void 0 : i.linkBehavior
  }), { hoverProps: P } = Mo({
    isDisabled: s || !d,
    onHoverStart() {
      ct() || (e.selectionManager.setFocused(!0), e.selectionManager.setFocusedKey(o));
    }
  }), I = je(g == null ? void 0 : g.props, {
    isLink: !!(!(g == null || (r = g.props) === null || r === void 0) && r.href)
  });
  return delete I.id, {
    optionProps: {
      ...K,
      ...se(I, k, P),
      id: bl(e, o)
    },
    labelProps: {
      id: w
    },
    descriptionProps: {
      id: S
    },
    isFocused: b,
    isFocusVisible: b && ct(),
    isSelected: a,
    isDisabled: s,
    isPressed: O,
    allowsSelection: E,
    hasAction: A
  };
}
function mc(t) {
  let { heading: e, "aria-label": n } = t, r = _e();
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
var ml = {};
ml = {
  longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
var vl = {};
vl = {
  longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
var hl = {};
hl = {
  longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
var gl = {};
gl = {
  longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
var $l = {};
$l = {
  longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
var yl = {};
yl = {
  longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
var xl = {};
xl = {
  longPressMessage: "Long press or press Alt + ArrowDown to open menu"
};
var Cl = {};
Cl = {
  longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
var El = {};
El = {
  longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
var Pl = {};
Pl = {
  longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
var wl = {};
wl = {
  longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
var Sl = {};
Sl = {
  longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
var Tl = {};
Tl = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
var _l = {};
_l = {
  longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
var Al = {};
Al = {
  longPressMessage: "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
var Kl = {};
Kl = {
  longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
};
var Dl = {};
Dl = {
  longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
var Fl = {};
Fl = {
  longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
var Ll = {};
Ll = {
  longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
var Ml = {};
Ml = {
  longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
var kl = {};
kl = {
  longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
var Nl = {};
Nl = {
  longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
var Il = {};
Il = {
  longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
var Bl = {};
Bl = {
  longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
var Ol = {};
Ol = {
  longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
var Rl = {};
Rl = {
  longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
var Vl = {};
Vl = {
  longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
var zl = {};
zl = {
  longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
var jl = {};
jl = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
var Hl = {};
Hl = {
  longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
var Ul = {};
Ul = {
  longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
var Wl = {};
Wl = {
  longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
var Gl = {};
Gl = {
  longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
};
var ql = {};
ql = {
  longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
};
function vc(t) {
  return t && t.__esModule ? t.default : t;
}
var Yl = {};
Yl = {
  "ar-AE": ml,
  "bg-BG": vl,
  "cs-CZ": hl,
  "da-DK": gl,
  "de-DE": $l,
  "el-GR": yl,
  "en-US": xl,
  "es-ES": Cl,
  "et-EE": El,
  "fi-FI": Pl,
  "fr-FR": wl,
  "he-IL": Sl,
  "hr-HR": Tl,
  "hu-HU": _l,
  "it-IT": Al,
  "ja-JP": Kl,
  "ko-KR": Dl,
  "lt-LT": Fl,
  "lv-LV": Ll,
  "nb-NO": Ml,
  "nl-NL": kl,
  "pl-PL": Nl,
  "pt-BR": Il,
  "pt-PT": Bl,
  "ro-RO": Ol,
  "ru-RU": Rl,
  "sk-SK": Vl,
  "sl-SI": zl,
  "sr-SP": jl,
  "sv-SE": Hl,
  "tr-TR": Ul,
  "uk-UA": Wl,
  "zh-CN": Gl,
  "zh-TW": ql
};
function er(t, e, n) {
  let { type: r = "menu", isDisabled: o, trigger: i = "press" } = t, l = _e(), { triggerProps: s, overlayProps: u } = nc({
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
  }, c = Zn(/* @__PURE__ */ vc(Yl), "@react-aria/menu"), { longPressProps: f } = No({
    isDisabled: o || i !== "longPress",
    accessibilityDescription: c.format("longPressMessage"),
    onLongPressStart() {
      e.close();
    },
    onLongPress() {
      e.open("first");
    }
  }), p = {
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
      ...i === "press" ? p : f,
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
const Xl = /* @__PURE__ */ new WeakMap();
function hc(t, e, n) {
  let { shouldFocusWrap: r = !0, onKeyDown: o, onKeyUp: i, ...l } = t;
  !t["aria-label"] && !t["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let s = je(t, {
    labelable: !0
  }), { listProps: u } = pl({
    ...l,
    ref: n,
    selectionManager: e.selectionManager,
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    shouldFocusWrap: r,
    linkBehavior: "override"
  });
  return Xl.set(e, {
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
function gc(t, e, n) {
  var r;
  let { key: o, closeOnSelect: i, isVirtualized: l, "aria-haspopup": s, onPressStart: u, onPressUp: a, onPress: c, onPressChange: f, onPressEnd: p, onHoverStart: d, onHoverChange: v, onHoverEnd: h, onKeyDown: x, onKeyUp: _, onFocus: w, onFocusChange: S, onBlur: K } = t, g = !!s;
  var k;
  let O = (k = t.isDisabled) !== null && k !== void 0 ? k : e.disabledKeys.has(o);
  var b;
  let A = (b = t.isSelected) !== null && b !== void 0 ? b : e.selectionManager.isSelected(o), E = Xl.get(e), P = t.onClose || E.onClose, I = g ? () => {
  } : t.onAction || E.onAction, C = Wt(), T = (Z) => {
    I && I(o), Z.target instanceof HTMLAnchorElement && C.open(Z.target, Z);
  }, q = "menuitem";
  g || (e.selectionManager.selectionMode === "single" ? q = "menuitemradio" : e.selectionManager.selectionMode === "multiple" && (q = "menuitemcheckbox"));
  let V = Oe(), F = Oe(), ue = Oe(), ae = {
    "aria-disabled": O || void 0,
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
  let $ = e.collection.getItem(o);
  l && (ae["aria-posinset"] = $ == null ? void 0 : $.index, ae["aria-setsize"] = zn(e.collection));
  let D = (Z) => {
    Z.pointerType === "keyboard" && T(Z), u == null || u(Z);
  }, z = (Z) => {
    Z.pointerType !== "keyboard" && (T(Z), !g && P && (i ?? (e.selectionManager.selectionMode !== "multiple" || e.selectionManager.isLink(o))) && P()), a == null || a(Z);
  }, { itemProps: j, isFocused: H } = fl({
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
  }), { pressProps: Y, isPressed: U } = Gt({
    onPressStart: D,
    onPress: c,
    onPressUp: z,
    onPressChange: f,
    onPressEnd: p,
    isDisabled: O
  }), { hoverProps: L } = Mo({
    isDisabled: O,
    onHoverStart(Z) {
      ct() || (e.selectionManager.setFocused(!0), e.selectionManager.setFocusedKey(o)), d == null || d(Z);
    },
    onHoverChange: v,
    onHoverEnd: h
  }), { keyboardProps: N } = ko({
    onKeyDown: (Z) => {
      if (Z.repeat) {
        Z.continuePropagation();
        return;
      }
      switch (Z.key) {
        case " ":
          !O && e.selectionManager.selectionMode === "none" && !g && i !== !1 && P && P();
          break;
        case "Enter":
          !O && i !== !1 && !g && P && P();
          break;
        default:
          g || Z.continuePropagation(), x == null || x(Z);
          break;
      }
    },
    onKeyUp: _
  }), { focusProps: X } = Gn({
    onBlur: K,
    onFocus: w,
    onFocusChange: S
  }), W = je($.props, {
    isLink: !!(!($ == null || (r = $.props) === null || r === void 0) && r.href)
  });
  return delete W.id, {
    menuItemProps: {
      ...ae,
      ...se(W, g ? {
        onFocus: j.onFocus
      } : j, Y, L, N, X),
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
    isDisabled: O
  };
}
function $c(t) {
  let { heading: e, "aria-label": n } = t, r = _e();
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
function yc(t, e) {
  let { inputElementType: n = "input", isDisabled: r = !1, isRequired: o = !1, isReadOnly: i = !1, type: l = "text", validationBehavior: s = "aria" } = t, [u, a] = et(t.value, t.defaultValue || "", t.onChange), { focusableProps: c } = Oo(t, e), f = Vn({
    ...t,
    value: u
  }), { isInvalid: p, validationErrors: d, validationDetails: v } = f.displayValidation, { labelProps: h, fieldProps: x, descriptionProps: _, errorMessageProps: w } = Uo({
    ...t,
    isInvalid: p,
    errorMessage: t.errorMessage || d
  }), S = je(t, {
    labelable: !0
  });
  const K = {
    type: l,
    pattern: t.pattern
  };
  return Ao(e, u, a), jo(t, f, e), G(() => {
    if (e.current instanceof ut(e.current).HTMLTextAreaElement) {
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
    labelProps: h,
    inputProps: se(S, n === "input" && K, {
      disabled: r,
      readOnly: i,
      required: o && s === "native",
      "aria-required": o && s === "aria" || void 0,
      "aria-invalid": p || void 0,
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
      ...x
    }),
    descriptionProps: _,
    errorMessageProps: w,
    isInvalid: p,
    validationErrors: d,
    validationDetails: v
  };
}
function xc(t) {
  return t && t.__esModule ? t.default : t;
}
var Zl = {};
Zl = {
  "ar-AE": Wo,
  "bg-BG": Go,
  "cs-CZ": qo,
  "da-DK": Yo,
  "de-DE": Xo,
  "el-GR": Zo,
  "en-US": Jo,
  "es-ES": Qo,
  "et-EE": ei,
  "fi-FI": ti,
  "fr-FR": ni,
  "he-IL": ri,
  "hr-HR": oi,
  "hu-HU": ii,
  "it-IT": li,
  "ja-JP": si,
  "ko-KR": ui,
  "lt-LT": ai,
  "lv-LV": ci,
  "nb-NO": di,
  "nl-NL": fi,
  "pl-PL": pi,
  "pt-BR": bi,
  "pt-PT": mi,
  "ro-RO": vi,
  "ru-RU": hi,
  "sk-SK": gi,
  "sl-SI": $i,
  "sr-SP": yi,
  "sv-SE": xi,
  "tr-TR": Ci,
  "uk-UA": Ei,
  "zh-CN": Pi,
  "zh-TW": wi
};
function Cc(t, e) {
  let { buttonRef: n, popoverRef: r, inputRef: o, listBoxRef: i, keyboardDelegate: l, shouldFocusWrap: s, isReadOnly: u, isDisabled: a } = t, c = Zn(/* @__PURE__ */ xc(Zl), "@react-aria/combobox"), { menuTriggerProps: f, menuProps: p } = er({
    type: "listbox",
    isDisabled: a || u
  }, e, n);
  Zt.set(e, {
    id: p.id
  });
  let d = re(() => l || new Qn(e.collection, e.disabledKeys, i), [
    l,
    e.collection,
    e.disabledKeys,
    i
  ]), { collectionProps: v } = dl({
    selectionManager: e.selectionManager,
    keyboardDelegate: d,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: s,
    ref: o,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), h = Wt(), x = (L) => {
    switch (L.key) {
      case "Enter":
      case "Tab":
        if (e.isOpen && L.key === "Enter" && L.preventDefault(), e.isOpen && e.selectionManager.focusedKey != null && e.selectionManager.isLink(e.selectionManager.focusedKey)) {
          if (L.key === "Enter") {
            let N = i.current.querySelector(`[data-key="${CSS.escape(e.selectionManager.focusedKey.toString())}"]`);
            N instanceof HTMLAnchorElement && h.open(N, L);
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
  }, { isInvalid: S, validationErrors: K, validationDetails: g } = e.displayValidation, { labelProps: k, inputProps: O, descriptionProps: b, errorMessageProps: A } = yc({
    ...t,
    onChange: e.setInputValue,
    onKeyDown: u ? t.onKeyDown : Qe(e.isOpen && v.onKeyDown, x, t.onKeyDown),
    onBlur: _,
    value: e.inputValue,
    onFocus: w,
    autoComplete: "off",
    validate: void 0,
    [Cn]: e
  }, o), E = (L) => {
    L.pointerType === "touch" && (o.current.focus(), e.toggle(null, "manual"));
  }, P = (L) => {
    L.pointerType !== "touch" && (o.current.focus(), e.toggle(L.pointerType === "keyboard" || L.pointerType === "virtual" ? "first" : null, "manual"));
  }, I = Kt({
    id: f.id,
    "aria-label": c.format("buttonLabel"),
    "aria-labelledby": t["aria-labelledby"] || k.id
  }), C = Kt({
    id: p.id,
    "aria-label": c.format("listboxLabel"),
    "aria-labelledby": t["aria-labelledby"] || k.id
  }), T = B(0), q = (L) => {
    if (a || u)
      return;
    if (L.timeStamp - T.current < 500) {
      L.preventDefault(), o.current.focus();
      return;
    }
    let N = L.target.getBoundingClientRect(), X = L.changedTouches[0], W = Math.ceil(N.left + 0.5 * N.width), Z = Math.ceil(N.top + 0.5 * N.height);
    X.clientX === W && X.clientY === Z && (L.preventDefault(), o.current.focus(), e.toggle(null, "manual"), T.current = L.timeStamp);
  }, V = e.selectionManager.focusedKey != null && e.isOpen ? e.collection.getItem(e.selectionManager.focusedKey) : void 0;
  var F;
  let ue = (F = V == null ? void 0 : V.parentKey) !== null && F !== void 0 ? F : null;
  var ae;
  let $ = (ae = e.selectionManager.focusedKey) !== null && ae !== void 0 ? ae : null, D = B(ue), z = B($);
  G(() => {
    if (wt() && V != null && $ !== z.current) {
      let L = e.selectionManager.isSelected($), N = ue != null ? e.collection.getItem(ue) : null, X = (N == null ? void 0 : N["aria-label"]) || (typeof (N == null ? void 0 : N.rendered) == "string" ? N.rendered : "") || "", W = c.format("focusAnnouncement", {
        isGroupChange: N && ue !== D.current,
        groupTitle: X,
        groupCount: N ? [
          ...Vt(N, e.collection)
        ].length : 0,
        optionText: V["aria-label"] || V.textValue || "",
        isSelected: L
      });
      mn(W);
    }
    D.current = ue, z.current = $;
  });
  let j = zn(e.collection), H = B(j), Y = B(e.isOpen);
  G(() => {
    let L = e.isOpen !== Y.current && (e.selectionManager.focusedKey == null || wt());
    if (e.isOpen && (L || j !== H.current)) {
      let N = c.format("countAnnouncement", {
        optionCount: j
      });
      mn(N);
    }
    H.current = j, Y.current = e.isOpen;
  });
  let U = B(e.selectedKey);
  return G(() => {
    if (wt() && e.isFocused && e.selectedItem && e.selectedKey !== U.current) {
      let L = e.selectedItem["aria-label"] || e.selectedItem.textValue || "", N = c.format("selectedAnnouncement", {
        optionText: L
      });
      mn(N);
    }
    U.current = e.selectedKey;
  }), G(() => {
    if (e.isOpen)
      return al([
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
      ...f,
      ...I,
      excludeFromTabOrder: !0,
      onPress: E,
      onPressStart: P,
      isDisabled: a || u
    },
    inputProps: se(O, {
      role: "combobox",
      "aria-expanded": f["aria-expanded"],
      "aria-controls": e.isOpen ? p.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": V ? bl(e, V.key) : void 0,
      onTouchEnd: q,
      // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
      autoCorrect: "off",
      // This disable's the macOS Safari spell check auto corrections.
      spellCheck: "false"
    }),
    listBoxProps: se(p, C, {
      autoFocus: e.focusStrategy,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection"
    }),
    descriptionProps: b,
    errorMessageProps: A,
    isInvalid: S,
    validationErrors: K,
    validationDetails: g
  };
}
const Jl = /* @__PURE__ */ new WeakMap();
function Ec(t, e, n) {
  let { keyboardDelegate: r, isDisabled: o, isRequired: i, name: l, validationBehavior: s = "aria" } = t, u = Jn({
    usage: "search",
    sensitivity: "base"
  }), a = re(() => r || new Qn(e.collection, e.disabledKeys, null, u), [
    r,
    e.collection,
    e.disabledKeys,
    u
  ]), { menuTriggerProps: c, menuProps: f } = er({
    isDisabled: o,
    type: "listbox"
  }, e, n), p = (b) => {
    switch (b.key) {
      case "ArrowLeft": {
        b.preventDefault();
        let A = e.selectedKey != null ? a.getKeyAbove(e.selectedKey) : a.getFirstKey();
        A && e.setSelectedKey(A);
        break;
      }
      case "ArrowRight": {
        b.preventDefault();
        let A = e.selectedKey != null ? a.getKeyBelow(e.selectedKey) : a.getFirstKey();
        A && e.setSelectedKey(A);
        break;
      }
    }
  }, { typeSelectProps: d } = cl({
    keyboardDelegate: a,
    selectionManager: e.selectionManager,
    onTypeSelect(b) {
      e.setSelectedKey(b);
    }
  }), { isInvalid: v, validationErrors: h, validationDetails: x } = e.displayValidation, { labelProps: _, fieldProps: w, descriptionProps: S, errorMessageProps: K } = Uo({
    ...t,
    labelElementType: "span",
    isInvalid: v,
    errorMessage: t.errorMessage || h
  });
  d.onKeyDown = d.onKeyDownCapture, delete d.onKeyDownCapture;
  let g = je(t, {
    labelable: !0
  }), k = se(d, c, w), O = _e();
  return Jl.set(e, {
    isDisabled: o,
    isRequired: i,
    name: l,
    validationBehavior: s
  }), {
    labelProps: {
      ..._,
      onClick: () => {
        t.isDisabled || (n.current.focus(), Lo("keyboard"));
      }
    },
    triggerProps: se(g, {
      ...k,
      isDisabled: o,
      onKeyDown: Qe(k.onKeyDown, p, t.onKeyDown),
      onKeyUp: t.onKeyUp,
      "aria-labelledby": [
        O,
        k["aria-labelledby"],
        k["aria-label"] && !k["aria-labelledby"] ? k.id : null
      ].filter(Boolean).join(" "),
      onFocus(b) {
        e.isFocused || (t.onFocus && t.onFocus(b), t.onFocusChange && t.onFocusChange(!0), e.setFocused(!0));
      },
      onBlur(b) {
        e.isOpen || (t.onBlur && t.onBlur(b), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      }
    }),
    valueProps: {
      id: O
    },
    menuProps: {
      ...f,
      autoFocus: e.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      disallowEmptySelection: !0,
      linkBehavior: "selection",
      onBlur: (b) => {
        b.currentTarget.contains(b.relatedTarget) || (t.onBlur && t.onBlur(b), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      },
      "aria-labelledby": [
        w["aria-labelledby"],
        k["aria-label"] && !w["aria-labelledby"] ? k.id : null
      ].filter(Boolean).join(" ")
    },
    descriptionProps: S,
    errorMessageProps: K,
    isInvalid: v,
    validationErrors: h,
    validationDetails: x
  };
}
function Pc(t, e, n) {
  let r = Jl.get(e) || {}, { autoComplete: o, name: i = r.name, isDisabled: l = r.isDisabled } = t, { validationBehavior: s, isRequired: u } = r, a = sa(), { visuallyHiddenProps: c } = ll();
  Ao(t.selectRef, e.selectedKey, e.setSelectedKey), jo({
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
      onChange: (p) => e.setSelectedKey(p.target.value)
    }
  };
}
function wc(t) {
  let { state: e, triggerRef: n, label: r, name: o, isDisabled: i } = t, l = B(null), { containerProps: s, inputProps: u, selectProps: a } = Pc({
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
  ].map((f) => {
    let p = e.collection.getItem(f);
    if (p.type === "item")
      return /* @__PURE__ */ Q.createElement("option", {
        key: p.key,
        value: p.key
      }, p.textValue);
  })))) : o ? /* @__PURE__ */ Q.createElement("input", {
    type: "hidden",
    autoComplete: a.autoComplete,
    name: o,
    disabled: i,
    value: (c = e.selectedKey) !== null && c !== void 0 ? c : ""
  }) : null;
}
const Sc = "_focused_1af8e_1", Tc = "_listbox_1af8e_10", _c = "_content_1af8e_89", Ac = "_description_1af8e_98", Kc = "_uppercase_1af8e_126", Dc = "_divider_1af8e_130", Ce = {
  focused: Sc,
  listbox: Tc,
  "listbox-top": "_listbox-top_1af8e_35",
  "listbox-bottom": "_listbox-bottom_1af8e_39",
  "listbox-content": "_listbox-content_1af8e_43",
  "listbox-section-list": "_listbox-section-list_1af8e_51",
  "listbox-section": "_listbox-section_1af8e_51",
  "listbox-item": "_listbox-item_1af8e_61",
  content: _c,
  description: Ac,
  uppercase: Kc,
  divider: Dc,
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
};
function Ql({ item: t, state: e }) {
  const n = B(null), { optionProps: r, descriptionProps: o, labelProps: i, isFocused: l, isFocusVisible: s } = bc({ key: t.key }, e, n), { description: u, startContent: a, endContent: c, color: f, showDivider: p, href: d, className: v } = t.props || {};
  return /* @__PURE__ */ R(
    d ? "a" : "li",
    {
      ...r,
      ref: n,
      href: d,
      className: y(
        Ce["listbox-item"],
        v,
        {
          [Ce[`listbox-item--${f}`]]: f,
          [Ce.divider]: p,
          "fr-enlarge-link": d,
          [Ce.focused]: l && s
        }
      ),
      children: [
        a && a,
        /* @__PURE__ */ R("span", { className: Ce.content, children: [
          /* @__PURE__ */ m("span", { ...i, children: t.rendered }),
          u && /* @__PURE__ */ m("span", { ...o, className: Ce.description, children: u })
        ] }),
        c && c
      ]
    }
  );
}
function Fc({ section: t, state: e }) {
  const { itemProps: n, headingProps: r, groupProps: o } = mc({
    heading: t.rendered,
    "aria-label": t["aria-label"]
  }), { showDivider: i, className: l, css: s = {} } = t.props || {}, u = [...t.childNodes].find((a) => a.props.href) ? "div" : "ul";
  return /* @__PURE__ */ R(
    "li",
    {
      ...n,
      className: y(
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
            className: y(
              "fr-text-mention--grey fr-text--sm fr-my-1w fr-px-1w",
              s.title
            ),
            children: t.rendered
          }
        ),
        /* @__PURE__ */ m(u, { ...o, className: y(Ce["listbox-section-list"], s.list), children: [...t.childNodes].map((a) => /* @__PURE__ */ m(
          Ql,
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
function tr(t) {
  var d, v;
  const e = B(null), { listBoxRef: n = e, state: r, className: o, css: i = {}, color: l, topContent: s, bottomContent: u, ...a } = t, { listBoxProps: c } = pc(a, r, n), { isFocusVisible: f } = Xn(), p = [...r.collection].find((h) => h.props.href) ? "div" : "ul";
  return /* @__PURE__ */ R("div", { className: y(Ce.listbox, o, i.base), style: { minWidth: ((v = (d = t == null ? void 0 : t.triggerRef) == null ? void 0 : d.current) == null ? void 0 : v.offsetWidth) || "auto" }, children: [
    /* @__PURE__ */ m("span", { className: y(Ce["listbox-top"], i.top), children: s && s }),
    /* @__PURE__ */ m(
      p,
      {
        className: y(Ce["listbox-content"], i.list, { [Ce[`listbox--${l}`]]: l }),
        ref: n,
        "data-focus-visible": f,
        ...c,
        children: [...r.collection].map((h) => h.type === "section" ? /* @__PURE__ */ or(Fc, { ...h.props, key: h.key, section: h, state: r }) : /* @__PURE__ */ or(Ql, { ...h.props, key: h.key, item: h, state: r }))
      }
    ),
    /* @__PURE__ */ m("span", { className: y(Ce["listbox-bottom"], i.bottom), children: u && u })
  ] });
}
const Lc = "_popover_1g6m6_1", Mc = {
  popover: Lc
};
function nr({ children: t, state: e, ...n }) {
  const r = B(null), { isNonModal: o = !1, popoverRef: i = r } = n, { popoverProps: l, underlayProps: s } = sc({
    ...n,
    popoverRef: i
  }, e);
  return /* @__PURE__ */ R(ac, { children: [
    !o && /* @__PURE__ */ m("div", { ...s, style: { position: "fixed", inset: 0 } }),
    /* @__PURE__ */ R(
      "div",
      {
        ...l,
        ref: i,
        className: Mc.popover,
        children: [
          !o && /* @__PURE__ */ m(Yr, { onDismiss: e.close }),
          t,
          /* @__PURE__ */ m(Yr, { onDismiss: e.close })
        ]
      }
    )
  ] });
}
const kc = "_spinner_1m2vp_5", Nc = "_internal_1m2vp_27", Jr = {
  spinner: kc,
  "internal-circle": "_internal-circle_1m2vp_27",
  internal: Nc
};
function Ic({ size: t = 24 }) {
  const e = ie();
  return G(() => {
    var n, r;
    (n = document == null ? void 0 : document.getElementById(e)) == null || n.style.setProperty("width", `${t}px`), (r = document == null ? void 0 : document.getElementById(e)) == null || r.style.setProperty("height", `${t}px`);
  }, [t, e]), /* @__PURE__ */ m("svg", { id: e, className: Jr.spinner, viewBox: "0 0 120 120", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ m("circle", { className: Jr["internal-circle"], cx: "60", cy: "60", r: "30" }) });
}
function wd(t) {
  const { contains: e } = Na({ sensitivity: "base" }), n = eu({
    ...t,
    defaultFilter: e,
    allowsCustomValue: !0
  }), r = vt.useRef(null), o = vt.useRef(null), i = vt.useRef(null), l = vt.useRef(null), { size: s = "md", color: u, onSubmit: a, topContent: c, bottomContent: f, ...p } = t, { inputProps: d, listBoxProps: v } = Cc(
    {
      ...p,
      inputRef: r,
      listBoxRef: o,
      popoverRef: i,
      onKeyUp: (h) => {
        var x;
        h.key === "Enter" && (h.preventDefault(), (x = t.onSubmit) == null || x.call(t, n.inputValue));
      }
    },
    n
  );
  return /* @__PURE__ */ R("form", { onSubmit: () => a == null ? void 0 : a((t == null ? void 0 : t.inputValue) || ""), ref: l, className: y("fr-search-bar", { "fr-search-bar--lg": s === "lg" }), role: "search", children: [
    /* @__PURE__ */ m(
      "input",
      {
        ...d,
        type: "search",
        ref: r,
        className: "fr-input"
      }
    ),
    /* @__PURE__ */ R("button", { type: "submit", style: { position: "relative" }, className: y("fr-btn", { "fr-btn--lg": s === "lg" }), children: [
      /* @__PURE__ */ m("div", { style: { position: "absolute", left: "-40px" }, children: t.loadingState === "loading" && /* @__PURE__ */ m(Ic, {}) }),
      "Rechercher"
    ] }),
    n.isOpen && /* @__PURE__ */ m(
      nr,
      {
        popoverRef: i,
        triggerRef: r,
        state: n,
        isNonModal: !1,
        placement: "bottom start",
        children: /* @__PURE__ */ m(
          tr,
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
const Sd = Rt, Bc = {
  "fr-select-btn": "_fr-select-btn_m2sgv_1"
};
function Td(t) {
  const { buttonLabel: e, ...n } = t, r = cu(n), o = B(null), {
    labelProps: i,
    triggerProps: l,
    valueProps: s,
    menuProps: u
  } = Ec(n, r, o), { isFocusVisible: a, focusProps: c } = Xn(), { buttonProps: f } = Vo({ ...se(l, c) }, o);
  return /* @__PURE__ */ R("div", { className: "fr-select-group", children: [
    t.label && /* @__PURE__ */ m("label", { ...i, className: "fr-label", children: t.label }),
    /* @__PURE__ */ m(
      "button",
      {
        ...f,
        ref: o,
        className: y("fr-select", Bc["fr-select-btn"]),
        "data-focus-visible": a,
        children: /* @__PURE__ */ m("span", { ...s, children: r.selectedItem ? r.selectedItem.rendered : e })
      }
    ),
    /* @__PURE__ */ m(
      wc,
      {
        isDisabled: t.isDisabled,
        state: r,
        triggerRef: o,
        label: t.label,
        name: t.name
      }
    ),
    r.isOpen && /* @__PURE__ */ m(nr, { state: r, triggerRef: o, placement: "bottom start", children: /* @__PURE__ */ m(
      tr,
      {
        ...u,
        state: r,
        triggerRef: o
      }
    ) })
  ] });
}
const _d = Rt;
function Ad(t) {
  const e = ho(t);
  return /* @__PURE__ */ m(tr, { ...t, state: e });
}
const Kd = Rt, Dd = po, Oc = "_focused_og068_1", Rc = "_listbox_og068_10", Vc = "_content_og068_90", zc = "_description_og068_99", jc = "_uppercase_og068_127", Hc = "_divider_og068_131", Se = {
  focused: Oc,
  listbox: Rc,
  "listbox-top": "_listbox-top_og068_36",
  "listbox-bottom": "_listbox-bottom_og068_40",
  "listbox-content": "_listbox-content_og068_44",
  "listbox-section-list": "_listbox-section-list_og068_52",
  "listbox-section": "_listbox-section_og068_52",
  "listbox-item": "_listbox-item_og068_62",
  content: Vc,
  description: zc,
  uppercase: jc,
  divider: Hc,
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
function es({ item: t, state: e }) {
  const n = B(null), { menuItemProps: r, labelProps: o, descriptionProps: i, isFocused: l } = gc({ key: t.key }, e, n), { description: s, startContent: u, endContent: a, color: c, showDivider: f, href: p, className: d } = t.props || {};
  return /* @__PURE__ */ R(
    p ? "a" : "li",
    {
      ...r,
      ref: n,
      href: p,
      className: y(
        Se["listbox-item"],
        d,
        {
          [Se[`listbox-item--${c}`]]: c,
          [Se.divider]: f,
          "fr-enlarge-link": p,
          [Se.focused]: l
        }
      ),
      children: [
        u && u,
        /* @__PURE__ */ R("span", { className: Se.content, children: [
          /* @__PURE__ */ m("span", { ...o, children: t.rendered }),
          s && /* @__PURE__ */ m("span", { ...i, className: Se.description, children: s })
        ] }),
        a && a
      ]
    }
  );
}
function Uc({ section: t, state: e }) {
  const { itemProps: n, headingProps: r, groupProps: o } = $c({
    heading: t.rendered,
    "aria-label": t["aria-label"]
  }), { showDivider: i, className: l, css: s = {} } = t.props || {}, u = [...t.childNodes].find((a) => a.props.href) ? "div" : "ul";
  return /* @__PURE__ */ R(
    "li",
    {
      ...n,
      className: y(
        Se["listbox-section"],
        l,
        s.base,
        { [Se.divider]: i }
      ),
      children: [
        t.rendered && /* @__PURE__ */ m(
          "span",
          {
            ...r,
            className: y(
              "fr-text-mention--grey fr-text--sm fr-my-3v fr-px-1w",
              s.title
            ),
            children: t.rendered
          }
        ),
        /* @__PURE__ */ m(u, { ...o, className: y(Se["listbox-section-list"], s.list), children: [...t.childNodes].map((a) => /* @__PURE__ */ m(
          es,
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
function Wc(t) {
  const e = fu(t), n = B(null), { menuProps: r } = hc(t, e, n);
  return /* @__PURE__ */ m("ul", { ...r, ref: n, className: y(Se.listbox), style: { minWidth: "200px" }, children: [...e.collection].map((o) => o.type === "section" ? /* @__PURE__ */ m(Uc, { section: o, state: e }, o.key) : /* @__PURE__ */ m(es, { item: o, state: e }, o.key)) });
}
const Gc = me(
  ({ className: t, color: e = "blue-france", icon: n, iconPosition: r = "left", size: o = "md", variant: i = "primary", children: l, ...s }, u) => {
    const a = y(
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
function Fd(t) {
  const { className: e, color: n, icon: r, iconPosition: o, size: i, variant: l, placement: s = "start", ...u } = t, a = au(u), c = B(null), { menuTriggerProps: f, menuProps: p } = er({}, a, c), { isFocusVisible: d, focusProps: v } = Xn(), { buttonProps: h } = Vo({ ...se(f, v) }, c);
  return /* @__PURE__ */ R(kn, { children: [
    /* @__PURE__ */ m(
      Gc,
      {
        ...h,
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
    a.isOpen && /* @__PURE__ */ m(nr, { state: a, triggerRef: c, placement: `bottom ${s}`, children: /* @__PURE__ */ m(
      Wc,
      {
        ...u,
        ...p
      }
    ) })
  ] });
}
const Ld = Rt, Md = po;
export {
  xs as Accordion,
  ld as AccordionGroup,
  sd as Alert,
  wd as Autocomplete,
  Sd as AutocompleteItem,
  ls as Badge,
  Qc as BadgeGroup,
  yd as Breadcrumb,
  st as Button,
  ed as ButtonGroup,
  vd as Checkbox,
  rd as Col,
  td as Container,
  Jc as DSFRConfig,
  gs as DissmissibleTag,
  ds as FastAccess,
  bd as Fieldset,
  xd as FileUpload,
  od as Header,
  Rt as Item,
  $e as Link,
  Ad as Listbox,
  Kd as ListboxItem,
  Dd as ListboxSection,
  ms as Logo,
  Fd as MenuButton,
  Ld as MenuItem,
  Md as MenuSection,
  Cd as Modal,
  Tt as ModalClose,
  lo as ModalContent,
  so as ModalFooter,
  io as ModalTitle,
  bs as Nav,
  eo as NavItem,
  ud as Notice,
  fs as Operator,
  md as Radio,
  nd as Row,
  ps as SearchBar,
  po as Section,
  Td as Select,
  _d as SelectOption,
  hs as SelectableTag,
  cs as Service,
  cd as SideMenu,
  to as SideMenuItem,
  dd as SideMenuLink,
  oo as Spinner,
  hd as Stepper,
  Cs as Tab,
  ad as Tabs,
  vs as Tag,
  id as TagGroup,
  gd as Text,
  pd as TextArea,
  fd as TextInput,
  $d as Title,
  zs as Toggle,
  Ed as ToggleGroup,
  Pd as useAutocompleteList,
  ft as useDSFRConfig
};
