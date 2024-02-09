import './style.css';
import { jsx as i, jsxs as E, Fragment as We } from "react/jsx-runtime";
import { createContext as er, useState as ne, useEffect as ae, useCallback as Be, useMemo as rr, useContext as tr, forwardRef as B, Children as he, isValidElement as U, useId as D, useRef as oe, cloneElement as re, Fragment as Te } from "react";
import c from "classnames";
import Ue from "react-dom";
const ze = er({}), zr = ({
  children: e,
  routerComponent: n,
  extendRequiredFieldsLabelsWith: r = /* @__PURE__ */ i("span", { style: { color: "var(--text-default-error)" }, children: " *" }),
  extendOptionalFieldsLabelsWith: t = " (optionel)",
  defaultLang: o = "fr",
  verbose: a = !1
}) => {
  const [s, l] = ne(window.localStorage.getItem("locale") || o), [d, f] = ne(!1);
  ae(() => {
    const _ = async () => {
      var T;
      (T = window == null ? void 0 : window.dsfr) != null && T.isStarted || (window.dsfr = {
        verbose: a,
        mode: "manual"
      }, await import("./dsfr.module.min-23ae5258.js"), await import("./utility-251e9615.js"), await import("./dsfr-4e49221c.js"), window.dsfr.start(), f(!0));
    }, y = window.matchMedia("(prefers-color-scheme: dark)"), N = y != null && y.matches ? "dark" : "light", g = window.localStorage.getItem("theme");
    document.documentElement.setAttribute("data-fr-scheme", g || N), _();
  }, []);
  const u = Be((_) => {
    window.localStorage.setItem("locale", _), document.documentElement.setAttribute("lang", "en"), l(_);
  }, []), v = rr(() => ({
    setLocale: u,
    routerComponent: n,
    locale: s,
    extendRequiredFieldsLabelsWith: r,
    extendOptionalFieldsLabelsWith: t
  }), [n, u, s, r, t]);
  return /* @__PURE__ */ i(ze.Provider, { value: v, children: d ? e : null });
}, le = () => tr(ze), z = B(({
  children: e,
  className: n,
  icon: r,
  current: t,
  iconPosition: o = "left",
  isSimple: a = !1,
  size: s = "md",
  ...l
}, d) => {
  const { routerComponent: f } = le();
  return /* @__PURE__ */ i(
    f || "a",
    {
      ref: d,
      "aria-current": t || void 0,
      className: c({
        "fr-link": a,
        [`fr-link-${s}`]: s !== "md",
        [`fr-icon-${r}`]: a && !!r,
        [`fr-link--icon-${o}`]: a && r
      }, n),
      ...l,
      children: e
    }
  );
}), nr = B, ar = nr(
  ({ as: e, className: n, noIcon: r, color: t = "blue-france", size: o, icon: a, variant: s = "primary", ...l }, d) => {
    const f = e === "a" ? z : e || "p", u = c(
      "fr-badge",
      {
        [`fr-badge--${s}`]: s,
        [`fr-badge--${t}`]: t,
        [`fr-icon-${a}`]: a,
        // Next line is a hack to oblige dsfr to display the icon because otherwise 
        // "content: none" is applied on .fr-badge[class^="fr-icon-"]
        "fr-badge--icon-": a,
        "fr-badge--no-icon": r,
        "fr-badge--sm": o === "sm"
      },
      n
    );
    return /* @__PURE__ */ i(f, { className: u, ref: d, ...l });
  }
);
function L(e, n) {
  return he.toArray(e).filter((t) => U(t) && t.type === n);
}
function fe(e, n) {
  return he.toArray(e).filter((r) => U(r) && n.includes(r.type));
}
function or(e, n) {
  return he.toArray(e).filter((r) => U(r) && !n.includes(r.type));
}
const Gr = ({
  children: e,
  className: n,
  ...r
}) => {
  const t = D(), o = c("fr-badges-group", n);
  return /* @__PURE__ */ i("ul", { className: o, ...r, children: L(e, ar).map((a, s) => /* @__PURE__ */ i("li", { children: a }, `${t}-${s}`)) });
};
const sr = B, ce = sr(
  ({ as: e, className: n, color: r = "blue-france", icon: t, iconPosition: o = "left", size: a = "md", variant: s = "primary", children: l, ...d }, f) => {
    const u = e === "a" ? z : e || "button", v = c(
      "fr-btn",
      {
        [`fr-btn--${a}`]: a !== "md",
        [`dfr-btn--${r}`]: !!r && r !== "blue-france",
        "fr-btn--secondary": s === "secondary",
        "fr-btn--tertiary": s === "tertiary",
        "fr-btn--tertiary-no-outline": s === "text",
        [`fr-icon-${t}`]: !!t,
        [`fr-btn--icon-${o}`]: t && l,
        "fr-btn--icon": t && !l
      },
      n
    );
    return /* @__PURE__ */ i(u, { className: v, ref: f, ...d, children: l });
  }
), Vr = ({
  align: e = "left",
  children: n,
  className: r,
  isEquisized: t = !1,
  isInlineFrom: o,
  isReversed: a = !1,
  size: s = "md",
  ...l
}) => {
  var y;
  const d = D(), f = (N, g) => N || U(g) && g.props.icon && g.props.children, u = L(n, ce).reduce(f, !1), v = (y = L(n, ce).map((N) => U(N) && N.props.iconPosition)) == null ? void 0 : y[0], _ = c("fr-btns-group", {
    [`fr-btns-group--${s}`]: s !== "md",
    [`fr-btns-group--${e}`]: e !== "left",
    [`fr-btns-group--icon-${v}`]: u,
    "fr-btns-group--inline": o === "xs",
    [`fr-btns-group--inline-${o}`]: o && o !== "xs",
    "fr-btns-group--inline-reverse": a,
    "fr-btns-group--equisized": t
  }, r);
  return /* @__PURE__ */ i("ul", { className: _, ...l, children: L(n, ce).map((N, g) => /* @__PURE__ */ i("li", { children: N }, `${d}-${g}`)) });
}, ir = B, Hr = ir(({
  as: e = "div",
  className: n,
  fluid: r = !1,
  fluidFrom: t = "xs",
  ...o
}, a) => {
  const s = c({
    "fr-container": !r,
    "fr-container-fluid": r || t === "xs",
    [`fr-container-${t}--fluid`]: !r && t !== "xs"
  }, n);
  return /* @__PURE__ */ i(
    e,
    {
      className: s,
      ref: a,
      ...o
    }
  );
}), Kr = ({
  gutters: e = !1,
  horizontalAlign: n,
  verticalAlign: r,
  className: t,
  ...o
}) => {
  const a = c("fr-grid-row", {
    "fr-grid-row--gutters": e,
    [`fr-grid-row--${n}`]: n,
    [`fr-grid-row--${r}`]: r
  }, t);
  return /* @__PURE__ */ i("div", { className: a, ...o });
}, Jr = ({
  xs: e,
  sm: n,
  md: r,
  lg: t,
  xl: o,
  offsetXs: a,
  offsetSm: s,
  offsetMd: l,
  offsetLg: d,
  offsetXl: f,
  className: u,
  ...v
}) => {
  const _ = c("fr-col", {
    [`fr-col-${e}`]: e,
    [`fr-col-sm-${n}`]: n,
    [`fr-col-md-${r}`]: r,
    [`fr-col-lg-${t}`]: t,
    [`fr-col-xl-${o}`]: o,
    [`fr-col-offset-${a}`]: a,
    [`fr-col-offset-sm-${s}`]: s,
    [`fr-col-offset-md-${l}`]: l,
    [`fr-col-offset-lg-${d}`]: d,
    [`fr-col-offset-xl-${f}`]: f
  }, u);
  return /* @__PURE__ */ i("div", { className: _, ...v });
}, cr = ({ href: e = "/", name: n, tagline: r, className: t, css: o = {}, ...a }) => /* @__PURE__ */ E("div", { className: c("fr-header__service", t), children: [
  /* @__PURE__ */ i("p", { className: c("fr-header__service-title", o["fr-header__service-title"]), children: /* @__PURE__ */ i(z, { href: e, ...a, children: n }) }),
  r && /* @__PURE__ */ i("p", { className: c("fr-header__service-tagline", o["fr-header__service-tagline"]), children: r })
] }), lr = ({ children: e, className: n, css: r = {}, ...t }) => {
  const o = D(), a = t.id || o;
  return /* @__PURE__ */ E("div", { className: c("fr-header__tools-links", n), ...t, children: [
    /* @__PURE__ */ i("ul", { className: c("fr-btns-group", r["fr-btns-group"]), children: L(e, ce).map((s, l) => /* @__PURE__ */ i("li", { children: s }, `${a}-${l}`)) }),
    or(e, [ce])
  ] });
}, fr = ({ className: e, css: n = {}, ...r }) => /* @__PURE__ */ i("div", { className: c("fr-header__operator", e), children: /* @__PURE__ */ i("img", { className: c("fr-responsive-img", n["fr-responsive-img"]), ...r }) }), Oe = ["__TYPE"];
function se(e, n = {}) {
  const { include: r, exclude: t } = n;
  if (r)
    return Object.entries(e).reduce((a, [s, l]) => r.includes(s) ? { ...a, [s]: l } : a, {});
  const o = t ? [...Oe, ...t] : Oe;
  return Object.entries(e).reduce((a, [s, l]) => o.includes(s) ? a : { ...a, [s]: l }, {});
}
function de(e, n) {
  e && n.forEach((r) => {
    typeof r == "function" ? r(e) : r && (r.current = e);
  });
}
const dr = B(({
  className: e,
  css: n = {},
  buttonLabel: r,
  isLarge: t,
  label: o,
  onSearch: a,
  ...s
}, l) => {
  const d = oe(null), f = D(), u = s.id || f, v = (_) => {
    var y;
    return _.key === "Enter" && a((y = d.current) == null ? void 0 : y.value);
  };
  return /* @__PURE__ */ E(
    "div",
    {
      role: "search",
      className: c("fr-search-bar", { "fr-search-bar--lg": t }, e),
      children: [
        o && /* @__PURE__ */ i("label", { className: c("fr-label", n["fr-label"]), htmlFor: u, children: o }),
        /* @__PURE__ */ i(
          "input",
          {
            ref: (_) => de(_, [l, d]),
            className: c("fr-input", n["fr-input"]),
            type: "search",
            id: u,
            onKeyDown: v,
            ...se(s)
          }
        ),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => {
              var _;
              return a((_ = d.current) == null ? void 0 : _.value);
            },
            className: c("fr-btn", { "fr-btn--lg": t }, n["fr-btn"]),
            title: r,
            children: r
          }
        )
      ]
    }
  );
}), Ge = ({
  children: e,
  className: n,
  current: r = !1,
  css: t = {},
  title: o,
  ...a
}) => {
  const s = D(), l = fe(e, [Ge, z]);
  return /* @__PURE__ */ E(We, { children: [
    /* @__PURE__ */ i(
      "button",
      {
        className: c("fr-nav__btn", n),
        "aria-expanded": "false",
        "aria-controls": s,
        "aria-current": r || void 0,
        ...a,
        children: o
      }
    ),
    /* @__PURE__ */ i("div", { className: c("fr-collapse", "fr-menu", t["fr-menu"]), id: s, children: /* @__PURE__ */ i("ul", { className: c("fr-menu__list", t["fr-menu__list"]), children: l.map((d, f) => /* @__PURE__ */ i("li", { className: "fr-nav__item", children: U(d) && d.type === z ? re(d, { className: c("fr-nav__link", d.props.className) }) : d }, `navitem-${s}-${f}`)) }) })
  ] });
}, ur = ({
  children: e,
  className: n,
  css: r = {},
  ...t
}) => {
  const o = D(), a = t.id || o;
  return /* @__PURE__ */ i("nav", { className: c("fr-nav", n), id: a, role: "navigation", ...t, children: /* @__PURE__ */ i("ul", { className: c("fr-nav__list", r["fr-nav__list"]), children: fe(e, [Ge, z]).map((s, l) => U(s) && /* @__PURE__ */ i("li", { className: c("fr-nav__item", r["fr-nav__item"]), children: s.type === z ? re(s, { className: c("fr-nav__link", s.props.className) }) : s }, `navitem-${a}-${l}`)) }) });
}, mr = ({ text: e, splitCharacter: n = "|" }) => {
  const t = e.split(n).reduce((o, a, s) => s > 0 ? [...o, /* @__PURE__ */ i("br", {}, `br-${s}`), /* @__PURE__ */ i(Te, { children: a }, s)] : [/* @__PURE__ */ i(Te, { children: a }, s)], []);
  return /* @__PURE__ */ i("div", { className: "fr-header__logo", children: /* @__PURE__ */ i("p", { className: "fr-logo", children: t }) });
}, Xr = ({ children: e, className: n, css: r = {}, ...t }) => {
  var g, T, P, q;
  const o = D(), a = D(), s = D(), l = D(), d = (g = L(e, cr)) == null ? void 0 : g[0], f = (T = L(e, lr)) == null ? void 0 : T[0], u = (P = L(e, dr)) == null ? void 0 : P[0], v = (q = L(e, ur)) == null ? void 0 : q[0], _ = L(e, mr), y = L(e, fr), N = U(u) ? u.props.title : "Rechercher";
  return /* @__PURE__ */ E("header", { role: "banner", className: c("fr-header", n), ...t, children: [
    /* @__PURE__ */ i("div", { className: c("fr-header__body", r["fr-header__body"]), children: /* @__PURE__ */ i("div", { className: "fr-container", children: /* @__PURE__ */ E("div", { className: c("fr-header__body-row", r["fr-header__body-row"]), children: [
      /* @__PURE__ */ E("div", { className: c("fr-header__brand fr-enlarge-link", r["fr-header__brand"]), children: [
        /* @__PURE__ */ E("div", { className: c("fr-header__brand-top", r["fr-header__brand-top"]), children: [
          _ && _,
          y && y,
          (f || u) && /* @__PURE__ */ E("div", { className: c("fr-header__navbar", r["fr-header__navbar"]), children: [
            u && /* @__PURE__ */ i("button", { className: c("fr-btn--search fr-btn", r["fr-btn--search"]), "data-fr-opened": "false", "aria-controls": a, id: o, title: N, children: N }),
            f && /* @__PURE__ */ i("button", { className: c("fr-btn--menu fr-btn", r["fr-btn--menu"]), "data-fr-opened": "false", "aria-controls": s, "aria-haspopup": "menu", id: l, title: "Menu", children: "Menu" })
          ] })
        ] }),
        d && d
      ] }),
      /* @__PURE__ */ E("div", { className: c("fr-header__tools", r["fr-header__tools"]), children: [
        f,
        u && /* @__PURE__ */ i("div", { className: c("fr-header__search fr-modal", r["fr-header__search"]), id: a, children: /* @__PURE__ */ E("div", { className: "fr-container fr-container-lg--fluid", children: [
          /* @__PURE__ */ i("button", { className: "fr-btn--close fr-btn", "aria-controls": a, title: "Fermer", children: "Fermer" }),
          u
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ i("div", { className: c("fr-header__menu fr-modal", r["fr-header__menu"]), id: s, "aria-labelledby": l, children: /* @__PURE__ */ E("div", { className: "fr-container", children: [
      /* @__PURE__ */ i("button", { className: "fr-btn--close fr-btn", "aria-controls": s, title: "Fermer", children: "Fermer" }),
      /* @__PURE__ */ i("div", { className: c("fr-header__menu-links", r["fr-header__menu-links"]) }),
      v && v
    ] }) })
  ] });
};
const Ce = B, we = ({ className: e, color: n, icon: r, iconPosition: t, size: o }) => c("fr-tag", e, {
  "fr-tag--sm": o === "sm",
  [`fr-icon-${r}`]: r,
  [`fr-tag--icon-${t}`]: r && t,
  [`fr-tag--${n}`]: n
}), pr = Ce(({
  as: e,
  className: n,
  color: r,
  icon: t,
  iconPosition: o = "right",
  size: a,
  ...s
}, l) => {
  const d = we({ className: n, color: r, icon: t, iconPosition: o, size: a });
  return /* @__PURE__ */ i(
    e === "a" ? z : e || "p",
    {
      ref: l,
      className: d,
      ...s
    }
  );
}), vr = Ce(({
  as: e,
  className: n,
  color: r,
  icon: t,
  iconPosition: o = "left",
  size: a,
  selected: s,
  ...l
}, d) => {
  const f = we({ className: n, color: r, icon: t, iconPosition: o, size: a });
  return /* @__PURE__ */ i(
    e === "a" ? z : e || "button",
    {
      "data-fr-js-disable": "true",
      ref: d,
      className: f,
      "aria-pressed": s,
      ...l
    }
  );
}), hr = Ce(({
  as: e,
  className: n,
  color: r,
  icon: t,
  iconPosition: o = "left",
  size: a,
  ...s
}, l) => {
  const d = c("fr-tag--dismiss", we({ className: n, color: r, icon: t, iconPosition: o, size: a }));
  return /* @__PURE__ */ i(
    e === "a" ? z : e || "button",
    {
      ref: l,
      className: d,
      ...s
    }
  );
}), Zr = ({
  className: e,
  children: n,
  ...r
}) => {
  const t = D(), o = c("fr-tags-group", e);
  return /* @__PURE__ */ i("ul", { className: o, ...se(r), children: fe(n, [pr, vr, hr]).map((a, s) => /* @__PURE__ */ i("li", { children: a }, `${t}-${s}`)) });
}, br = {
  config: { attributes: !0, childList: !1, subtree: !1 }
};
function yr(e, n, r = br) {
  const [t, o] = ne(null);
  ae(() => {
    const a = new MutationObserver(n);
    o(a);
  }, [n, r, o]), ae(() => {
    if (!t || !e)
      return;
    const { config: a } = r;
    return t.observe(e, a), () => {
      t && t.disconnect();
    };
  }, [t, e, r]);
}
const _r = B(({
  title: e,
  titleAs: n = "h3",
  children: r,
  className: t,
  css: o = {},
  defaultExpanded: a = !1,
  ...s
}, l) => {
  const d = D(), f = oe(null), [u, v] = ne(!!a), _ = Be(
    (y) => {
      var g;
      if (y.find((T) => T.attributeName === "aria-expanded") && ((g = f == null ? void 0 : f.current) != null && g.attributes)) {
        const T = f.current.attributes.getNamedItem("aria-expanded");
        v(T ? T.value === "true" : !1);
      }
    },
    [f]
  );
  return yr(f == null ? void 0 : f.current, _), /* @__PURE__ */ E("section", { className: c("fr-accordion", t), children: [
    /* @__PURE__ */ i(
      n,
      {
        className: c("fr-accordion__title", o.title),
        children: /* @__PURE__ */ i(
          "button",
          {
            ...s,
            ref: (y) => de(y, [l, f]),
            className: c("fr-accordion__btn", o.button),
            "aria-expanded": a,
            "aria-controls": d,
            children: U(e) || typeof e == "string" ? e : typeof e == "function" ? e(u) : null
          }
        )
      }
    ),
    /* @__PURE__ */ i("div", { className: "fr-collapse", id: d, children: r })
  ] });
}), Qr = ({ children: e, className: n, ...r }) => {
  const t = D();
  return /* @__PURE__ */ i("div", { className: c("fr-accordions-group", n), ...r, children: L(e, _r).map((o, a) => /* @__PURE__ */ i(Te, { children: o }, `${t}-d${a}`)) });
}, et = B(({
  className: e,
  closeMode: n = "disallow",
  description: r,
  size: t,
  onClose: o,
  title: a,
  css: s = {},
  titleAs: l = "h3",
  variant: d = "info",
  ...f
}, u) => {
  const v = oe(null), _ = (y) => {
    var N;
    y.preventDefault(), (N = v.current) == null || N.remove(), o && o(y);
  };
  return /* @__PURE__ */ E(
    "div",
    {
      ref: (y) => de(y, [u, v]),
      className: c(`fr-alert fr-alert--${d}`, { "fr-alert--sm": t === "sm" }, e),
      ...f,
      children: [
        a && /* @__PURE__ */ i(l, { className: c("fr-alert__title", s.title), children: a }),
        r && /* @__PURE__ */ i("p", { className: c(s.description), children: r }),
        n === "uncontrolled" && /* @__PURE__ */ i("button", { onClick: _, className: c("fr-btn--close fr-btn", s.button), children: "Masquer le message" }),
        n === "controlled" && /* @__PURE__ */ i("button", { onClick: o, className: c("fr-link--close fr-link", s.button), children: "Masquer le message" })
      ]
    }
  );
});
const rt = ({
  children: e,
  closeMode: n = "disallow",
  type: r = "info",
  className: t,
  css: o = {},
  onClose: a,
  ...s
}) => {
  const l = oe(null), d = (u) => {
    var v;
    u.preventDefault(), (v = l.current) == null || v.remove(), a && a(u);
  }, f = c("fr-notice", {
    "fr-notice--info": r === "info",
    [`react-dsfr-notice--${r}`]: r !== "info"
  }, t);
  return /* @__PURE__ */ i("div", { ref: l, className: f, ...s, children: /* @__PURE__ */ i("div", { className: c("fr-container", o["fr-container"]), children: /* @__PURE__ */ E("div", { className: c("fr-notice__body", o["fr-notice__body"]), children: [
    /* @__PURE__ */ i("p", { className: c("fr-notice__title", o["fr-notice__title"]), children: e }),
    n !== "disallow" && /* @__PURE__ */ i(
      "button",
      {
        onClick: n === "uncontrolled" ? d : a,
        className: c("fr-btn--close", "fr-btn", o["fr-btn--close"]),
        children: "Masquer le message"
      }
    )
  ] }) }) });
}, gr = ({
  className: e,
  index: n,
  ...r
}) => /* @__PURE__ */ i(
  "div",
  {
    id: `${n}-panel`,
    className: c("fr-tabs__panel", e),
    role: "tabpanel",
    "aria-labelledby": `${n}-button`,
    tabIndex: r["aria-selected"] ? -1 : 0,
    ...r
  }
), tt = ({
  className: e,
  children: n,
  defaultActiveIndex: r = 0,
  css: t = {},
  onTabChange: o,
  ...a
}) => {
  const s = D(), l = a.id || s, d = L(n, gr).filter((f) => U(f)).map(
    (f, u) => re(
      f,
      { index: `${l}-${u}` }
    )
  );
  return /* @__PURE__ */ E(
    "div",
    {
      id: l,
      className: c("fr-tabs", e),
      ...a,
      children: [
        /* @__PURE__ */ i("ul", { className: c("fr-tabs__list", t.ul), role: "tablist", children: d.map((f, u) => /* @__PURE__ */ i("li", { className: c(t.li), role: "presentation", children: /* @__PURE__ */ i(
          "button",
          {
            onClick: (v) => {
              o && (o(u), v.preventDefault());
            },
            id: `${l}-${u}-button`,
            className: c(
              "fr-tabs__tab",
              {
                [`fr-icon-${f.props.icon}`]: U(f) && f.props.icon,
                "fr-tabs__tab--icon-left": U(f) && f.props.icon
              },
              t.button
            ),
            tabIndex: r === u ? 0 : -1,
            role: "tab",
            "aria-selected": r === u ? "true" : "false",
            "aria-controls": `${l}-${u}-panel`,
            children: U(f) && f.props.label
          }
        ) }, `${l}-${u}`)) }),
        d
      ]
    }
  );
};
const nt = ({
  children: e,
  className: n,
  css: r = {},
  fullHeight: t,
  position: o,
  sticky: a,
  title: s,
  ...l
}) => {
  const d = D(), f = c("fr-sidemenu", n, {
    "fr-sidemenu--sticky": a && !t,
    "fr-sidemenu--sticky-full-height": t,
    "fr-sidemenu--right": o === "right"
  });
  return /* @__PURE__ */ i("nav", { className: f, "aria-label": "Menu latéral", ...se(l), children: /* @__PURE__ */ E("div", { className: c("fr-sidemenu__inner", r["fr-sidemenu__inner"]), children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        className: c("fr-sidemenu__btn", r["fr-sidemenu__btn"]),
        "aria-controls": d,
        "aria-expanded": !1,
        children: s || "Dans cette rubrique"
      }
    ),
    /* @__PURE__ */ E("div", { className: "fr-collapse", id: d, children: [
      s && /* @__PURE__ */ i("div", { className: c("fr-sidemenu__title", r["fr-sidemenu__title"]), children: s }),
      /* @__PURE__ */ i("ul", { className: c("fr-sidemenu__list", r["fr-sidemenu__list"]), children: fe(e, [Ve, z]).map((u, v) => U(u) && /* @__PURE__ */ i("li", { className: c("fr-sidemenu__item", r["fr-sidemenu__item"]), children: u.type === z ? re(u, { className: c("fr-sidemenu__link", u.props.className) }) : u }, `navitem-${d}-${v}`)) })
    ] })
  ] }) });
}, Ve = ({
  children: e,
  className: n,
  css: r = {},
  current: t,
  defaultExpanded: o = !1,
  href: a,
  icon: s,
  title: l,
  ...d
}) => {
  const f = D(), u = fe(e, [Ve, z]);
  return /* @__PURE__ */ E(We, { children: [
    /* @__PURE__ */ i(
      "button",
      {
        className: c("fr-sidemenu__btn", n),
        "aria-expanded": o,
        "aria-controls": f,
        "aria-current": t || void 0,
        ...d,
        children: /* @__PURE__ */ i("span", { className: s && `react-dsfr-sidemenu-title--icon fr-icon-${s} fr-icon--sm`, children: l })
      }
    ),
    /* @__PURE__ */ i("div", { className: "fr-collapse", id: f, children: /* @__PURE__ */ i("ul", { className: c("fr-sidemenu__list", r["fr-sidemenu__list"]), children: u.map((v, _) => /* @__PURE__ */ i("li", { className: c("fr-sidemenu__item", r["fr-sidemenu__item"]), children: U(v) && v.type === z ? re(v, { className: c("fr-sidemenu__link", v.props.className) }) : v }, `navitem-${f}-${_}`)) }) })
  ] });
}, at = ({
  children: e,
  className: n,
  css: r = {},
  current: t,
  icon: o,
  ...a
}) => /* @__PURE__ */ i("li", { className: c("fr-sidemenu__item", n), children: /* @__PURE__ */ i(
  z,
  {
    className: c("fr-sidemenu__link", r["fr-sidemenu__link"]),
    "aria-current": t || void 0,
    ...a,
    children: /* @__PURE__ */ i("span", { className: o && `react-dsfr-sidemenu-title--icon fr-icon-${o} fr-icon--sm`, children: e })
  }
) }), ot = B(({
  className: e,
  css: n = {},
  disableAutoValidation: r = !1,
  hint: t,
  icon: o,
  id: a,
  label: s,
  message: l,
  messageType: d,
  onBlur: f,
  onChange: u,
  disabled: v,
  required: _,
  ...y
}, N) => {
  var J;
  const { extendRequiredFieldsLabelsWith: g, extendOptionalFieldsLabelsWith: T } = le(), [P, q] = ne(""), k = a || D(), I = oe(null), p = l !== void 0 || d !== void 0, H = c("fr-input", {
    "fr-input--error": p ? d === "error" : P === "error",
    "fr-input--valid": p ? d === "valid" : P === "valid"
  }, n["fr-input"]), X = c("fr-input-group", {
    "fr-input-group--error": p ? d === "error" : P === "error",
    "fr-input-group--valid": p ? d === "valid" : P === "valid",
    "fr-input-group--disabled": v
  }, e), Z = (G) => {
    const V = I.current;
    !r && !p && V && q(V.checkValidity() ? "valid" : "error"), f && f(G);
  }, W = (G) => {
    const V = I.current;
    !r && !p && V && P && q(V.checkValidity() ? "valid" : "error"), u && u(G);
  }, Y = p || r ? d && /* @__PURE__ */ i("p", { className: `fr-${d || "error"}-text`, id: `${k}-message`, children: l }) : P === "error" && !r && /* @__PURE__ */ i("p", { className: `fr-${P || "error"}-text`, id: `${k}-message`, children: (J = I.current) == null ? void 0 : J.validationMessage });
  return /* @__PURE__ */ E("div", { className: X, children: [
    /* @__PURE__ */ E("label", { className: c("fr-label", n["fr-label"]), htmlFor: k, children: [
      s,
      _ ? g : T,
      t && /* @__PURE__ */ i("span", { className: c("fr-hint-text", n["fr-hint-text"]), children: t })
    ] }),
    /* @__PURE__ */ i("div", { className: c("fr-input-wrap", { [`fr-icon-${o}`]: o }, n["fr-input-wrap"]), children: /* @__PURE__ */ i(
      "input",
      {
        id: k,
        className: H,
        onBlur: Z,
        onChange: W,
        ref: (G) => de(G, [N, I]),
        "aria-describedby": Y ? `${k}-message` : void 0,
        ...y
      }
    ) }),
    Y && Y
  ] });
}), st = B(({
  className: e,
  css: n = {},
  disableAutoValidation: r = !1,
  hint: t,
  icon: o,
  id: a,
  label: s,
  message: l,
  messageType: d,
  onBlur: f,
  onChange: u,
  disabled: v,
  required: _,
  ...y
}, N) => {
  var J;
  const { extendRequiredFieldsLabelsWith: g, extendOptionalFieldsLabelsWith: T } = le(), [P, q] = ne(""), k = a || D(), I = oe(null), p = l !== void 0 || d !== void 0, H = c("fr-input", {
    "fr-input--error": p ? d === "error" : P === "error",
    "fr-input--valid": p ? d === "valid" : P === "valid"
  }, n["fr-input"]), X = c("fr-input-group", {
    "fr-input-group--error": p ? d === "error" : P === "error",
    "fr-input-group--valid": p ? d === "valid" : P === "valid",
    "fr-input-group--disabled": v
  }, e), Z = (G) => {
    const V = I.current;
    !r && !p && V && q(V.checkValidity() ? "valid" : "error"), f && f(G);
  }, W = (G) => {
    const V = I.current;
    !r && !p && V && P && q(V.checkValidity() ? "valid" : "error"), u && u(G);
  }, Y = p || r ? d && /* @__PURE__ */ i("p", { className: `fr-${d || "error"}-text`, id: `${k}-message`, children: l }) : P === "error" && !r && /* @__PURE__ */ i("p", { className: `fr-${P || "error"}-text`, id: `${k}-message`, children: (J = I.current) == null ? void 0 : J.validationMessage });
  return /* @__PURE__ */ E("div", { className: X, children: [
    /* @__PURE__ */ E("label", { className: c("fr-label", n["fr-label"]), htmlFor: k, children: [
      s,
      _ ? g : T,
      t && /* @__PURE__ */ i("span", { className: c("fr-hint-text", n["fr-hint-text"]), children: t })
    ] }),
    /* @__PURE__ */ i("div", { className: c("fr-input-wrap", { [`fr-icon-${o}`]: o }, n["fr-input-wrap"]), children: /* @__PURE__ */ i(
      "textarea",
      {
        id: k,
        className: H,
        onBlur: Z,
        onChange: W,
        ref: (G) => de(G, [N, I]),
        "aria-describedby": Y ? `${k}-message` : void 0,
        ...y
      }
    ) }),
    Y && Y
  ] });
});
function Nr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Se = { exports: {} }, pe = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function Er() {
  if (Ae)
    return M;
  Ae = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, _ = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, N = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
  function k(p) {
    if (typeof p == "object" && p !== null) {
      var H = p.$$typeof;
      switch (H) {
        case n:
          switch (p = p.type, p) {
            case d:
            case f:
            case t:
            case a:
            case o:
            case v:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case l:
                case u:
                case N:
                case y:
                case s:
                  return p;
                default:
                  return H;
              }
          }
        case r:
          return H;
      }
    }
  }
  function I(p) {
    return k(p) === f;
  }
  return M.AsyncMode = d, M.ConcurrentMode = f, M.ContextConsumer = l, M.ContextProvider = s, M.Element = n, M.ForwardRef = u, M.Fragment = t, M.Lazy = N, M.Memo = y, M.Portal = r, M.Profiler = a, M.StrictMode = o, M.Suspense = v, M.isAsyncMode = function(p) {
    return I(p) || k(p) === d;
  }, M.isConcurrentMode = I, M.isContextConsumer = function(p) {
    return k(p) === l;
  }, M.isContextProvider = function(p) {
    return k(p) === s;
  }, M.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === n;
  }, M.isForwardRef = function(p) {
    return k(p) === u;
  }, M.isFragment = function(p) {
    return k(p) === t;
  }, M.isLazy = function(p) {
    return k(p) === N;
  }, M.isMemo = function(p) {
    return k(p) === y;
  }, M.isPortal = function(p) {
    return k(p) === r;
  }, M.isProfiler = function(p) {
    return k(p) === a;
  }, M.isStrictMode = function(p) {
    return k(p) === o;
  }, M.isSuspense = function(p) {
    return k(p) === v;
  }, M.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === f || p === a || p === o || p === v || p === _ || typeof p == "object" && p !== null && (p.$$typeof === N || p.$$typeof === y || p.$$typeof === s || p.$$typeof === l || p.$$typeof === u || p.$$typeof === T || p.$$typeof === P || p.$$typeof === q || p.$$typeof === g);
  }, M.typeOf = k, M;
}
var j = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function $r() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, _ = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, N = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
    function k(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === t || h === f || h === a || h === o || h === v || h === _ || typeof h == "object" && h !== null && (h.$$typeof === N || h.$$typeof === y || h.$$typeof === s || h.$$typeof === l || h.$$typeof === u || h.$$typeof === T || h.$$typeof === P || h.$$typeof === q || h.$$typeof === g);
    }
    function I(h) {
      if (typeof h == "object" && h !== null) {
        var ee = h.$$typeof;
        switch (ee) {
          case n:
            var me = h.type;
            switch (me) {
              case d:
              case f:
              case t:
              case a:
              case o:
              case v:
                return me;
              default:
                var Re = me && me.$$typeof;
                switch (Re) {
                  case l:
                  case u:
                  case N:
                  case y:
                  case s:
                    return Re;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var p = d, H = f, X = l, Z = s, W = n, Y = u, J = t, G = N, V = y, ie = r, be = a, Q = o, te = v, ue = !1;
    function ye(h) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(h) || I(h) === d;
    }
    function m(h) {
      return I(h) === f;
    }
    function b(h) {
      return I(h) === l;
    }
    function w(h) {
      return I(h) === s;
    }
    function S(h) {
      return typeof h == "object" && h !== null && h.$$typeof === n;
    }
    function $(h) {
      return I(h) === u;
    }
    function R(h) {
      return I(h) === t;
    }
    function x(h) {
      return I(h) === N;
    }
    function C(h) {
      return I(h) === y;
    }
    function O(h) {
      return I(h) === r;
    }
    function F(h) {
      return I(h) === a;
    }
    function A(h) {
      return I(h) === o;
    }
    function K(h) {
      return I(h) === v;
    }
    j.AsyncMode = p, j.ConcurrentMode = H, j.ContextConsumer = X, j.ContextProvider = Z, j.Element = W, j.ForwardRef = Y, j.Fragment = J, j.Lazy = G, j.Memo = V, j.Portal = ie, j.Profiler = be, j.StrictMode = Q, j.Suspense = te, j.isAsyncMode = ye, j.isConcurrentMode = m, j.isContextConsumer = b, j.isContextProvider = w, j.isElement = S, j.isForwardRef = $, j.isFragment = R, j.isLazy = x, j.isMemo = C, j.isPortal = O, j.isProfiler = F, j.isStrictMode = A, j.isSuspense = K, j.isValidElementType = k, j.typeOf = I;
  }()), j;
}
var Ie;
function He() {
  return Ie || (Ie = 1, process.env.NODE_ENV === "production" ? pe.exports = Er() : pe.exports = $r()), pe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var _e, Me;
function xr() {
  if (Me)
    return _e;
  Me = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function t(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var d = Object.getOwnPropertyNames(s).map(function(u) {
        return s[u];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        f[u] = u;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return _e = o() ? Object.assign : function(a, s) {
    for (var l, d = t(a), f, u = 1; u < arguments.length; u++) {
      l = Object(arguments[u]);
      for (var v in l)
        n.call(l, v) && (d[v] = l[v]);
      if (e) {
        f = e(l);
        for (var _ = 0; _ < f.length; _++)
          r.call(l, f[_]) && (d[f[_]] = l[f[_]]);
      }
    }
    return d;
  }, _e;
}
var ge, je;
function Pe() {
  if (je)
    return ge;
  je = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ge = e, ge;
}
var Ne, Fe;
function Ke() {
  return Fe || (Fe = 1, Ne = Function.call.bind(Object.prototype.hasOwnProperty)), Ne;
}
var Ee, De;
function Tr() {
  if (De)
    return Ee;
  De = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = Pe(), r = {}, t = Ke();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, l, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in a)
        if (t(a, u)) {
          var v;
          try {
            if (typeof a[u] != "function") {
              var _ = Error(
                (d || "React class") + ": " + l + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw _.name = "Invariant Violation", _;
            }
            v = a[u](s, u, d, l, null, n);
          } catch (N) {
            v = N;
          }
          if (v && !(v instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in r)) {
            r[v.message] = !0;
            var y = f ? f() : "";
            e(
              "Failed " + l + " type: " + v.message + (y ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ee = o, Ee;
}
var $e, Le;
function Sr() {
  if (Le)
    return $e;
  Le = 1;
  var e = He(), n = xr(), r = Pe(), t = Ke(), o = Tr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var d = "Warning: " + l;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return $e = function(l, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function v(m) {
      var b = m && (f && m[f] || m[u]);
      if (typeof b == "function")
        return b;
    }
    var _ = "<<anonymous>>", y = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: q(),
      arrayOf: k,
      element: I(),
      elementType: p(),
      instanceOf: H,
      node: Y(),
      objectOf: Z,
      oneOf: X,
      oneOfType: W,
      shape: G,
      exact: V
    };
    function N(m, b) {
      return m === b ? m !== 0 || 1 / m === 1 / b : m !== m && b !== b;
    }
    function g(m, b) {
      this.message = m, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function T(m) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, w = 0;
      function S(R, x, C, O, F, A, K) {
        if (O = O || _, A = A || C, K !== r) {
          if (d) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = O + ":" + C;
            !b[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            w < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + A + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[ee] = !0, w++);
          }
        }
        return x[C] == null ? R ? x[C] === null ? new g("The " + F + " `" + A + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new g("The " + F + " `" + A + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : m(x, C, O, F, A);
      }
      var $ = S.bind(null, !1);
      return $.isRequired = S.bind(null, !0), $;
    }
    function P(m) {
      function b(w, S, $, R, x, C) {
        var O = w[S], F = Q(O);
        if (F !== m) {
          var A = te(O);
          return new g(
            "Invalid " + R + " `" + x + "` of type " + ("`" + A + "` supplied to `" + $ + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return T(b);
    }
    function q() {
      return T(s);
    }
    function k(m) {
      function b(w, S, $, R, x) {
        if (typeof m != "function")
          return new g("Property `" + x + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var C = w[S];
        if (!Array.isArray(C)) {
          var O = Q(C);
          return new g("Invalid " + R + " `" + x + "` of type " + ("`" + O + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var F = 0; F < C.length; F++) {
          var A = m(C, F, $, R, x + "[" + F + "]", r);
          if (A instanceof Error)
            return A;
        }
        return null;
      }
      return T(b);
    }
    function I() {
      function m(b, w, S, $, R) {
        var x = b[w];
        if (!l(x)) {
          var C = Q(x);
          return new g("Invalid " + $ + " `" + R + "` of type " + ("`" + C + "` supplied to `" + S + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(m);
    }
    function p() {
      function m(b, w, S, $, R) {
        var x = b[w];
        if (!e.isValidElementType(x)) {
          var C = Q(x);
          return new g("Invalid " + $ + " `" + R + "` of type " + ("`" + C + "` supplied to `" + S + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(m);
    }
    function H(m) {
      function b(w, S, $, R, x) {
        if (!(w[S] instanceof m)) {
          var C = m.name || _, O = ye(w[S]);
          return new g("Invalid " + R + " `" + x + "` of type " + ("`" + O + "` supplied to `" + $ + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return T(b);
    }
    function X(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function b(w, S, $, R, x) {
        for (var C = w[S], O = 0; O < m.length; O++)
          if (N(C, m[O]))
            return null;
        var F = JSON.stringify(m, function(K, h) {
          var ee = te(h);
          return ee === "symbol" ? String(h) : h;
        });
        return new g("Invalid " + R + " `" + x + "` of value `" + String(C) + "` " + ("supplied to `" + $ + "`, expected one of " + F + "."));
      }
      return T(b);
    }
    function Z(m) {
      function b(w, S, $, R, x) {
        if (typeof m != "function")
          return new g("Property `" + x + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var C = w[S], O = Q(C);
        if (O !== "object")
          return new g("Invalid " + R + " `" + x + "` of type " + ("`" + O + "` supplied to `" + $ + "`, expected an object."));
        for (var F in C)
          if (t(C, F)) {
            var A = m(C, F, $, R, x + "." + F, r);
            if (A instanceof Error)
              return A;
          }
        return null;
      }
      return T(b);
    }
    function W(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var b = 0; b < m.length; b++) {
        var w = m[b];
        if (typeof w != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(w) + " at index " + b + "."
          ), s;
      }
      function S($, R, x, C, O) {
        for (var F = [], A = 0; A < m.length; A++) {
          var K = m[A], h = K($, R, x, C, O, r);
          if (h == null)
            return null;
          h.data && t(h.data, "expectedType") && F.push(h.data.expectedType);
        }
        var ee = F.length > 0 ? ", expected one of type [" + F.join(", ") + "]" : "";
        return new g("Invalid " + C + " `" + O + "` supplied to " + ("`" + x + "`" + ee + "."));
      }
      return T(S);
    }
    function Y() {
      function m(b, w, S, $, R) {
        return ie(b[w]) ? null : new g("Invalid " + $ + " `" + R + "` supplied to " + ("`" + S + "`, expected a ReactNode."));
      }
      return T(m);
    }
    function J(m, b, w, S, $) {
      return new g(
        (m || "React class") + ": " + b + " type `" + w + "." + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function G(m) {
      function b(w, S, $, R, x) {
        var C = w[S], O = Q(C);
        if (O !== "object")
          return new g("Invalid " + R + " `" + x + "` of type `" + O + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var F in m) {
          var A = m[F];
          if (typeof A != "function")
            return J($, R, x, F, te(A));
          var K = A(C, F, $, R, x + "." + F, r);
          if (K)
            return K;
        }
        return null;
      }
      return T(b);
    }
    function V(m) {
      function b(w, S, $, R, x) {
        var C = w[S], O = Q(C);
        if (O !== "object")
          return new g("Invalid " + R + " `" + x + "` of type `" + O + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var F = n({}, w[S], m);
        for (var A in F) {
          var K = m[A];
          if (t(m, A) && typeof K != "function")
            return J($, R, x, A, te(K));
          if (!K)
            return new g(
              "Invalid " + R + " `" + x + "` key `" + A + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(w[S], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var h = K(C, A, $, R, x + "." + A, r);
          if (h)
            return h;
        }
        return null;
      }
      return T(b);
    }
    function ie(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(ie);
          if (m === null || l(m))
            return !0;
          var b = v(m);
          if (b) {
            var w = b.call(m), S;
            if (b !== m.entries) {
              for (; !(S = w.next()).done; )
                if (!ie(S.value))
                  return !1;
            } else
              for (; !(S = w.next()).done; ) {
                var $ = S.value;
                if ($ && !ie($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function be(m, b) {
      return m === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function Q(m) {
      var b = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : be(b, m) ? "symbol" : b;
    }
    function te(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var b = Q(m);
      if (b === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function ue(m) {
      var b = te(m);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function ye(m) {
      return !m.constructor || !m.constructor.name ? _ : m.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, $e;
}
var xe, qe;
function Cr() {
  if (qe)
    return xe;
  qe = 1;
  var e = Pe();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, xe = function() {
    function t(s, l, d, f, u, v) {
      if (v !== e) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
      }
    }
    t.isRequired = t;
    function o() {
      return t;
    }
    var a = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: o,
      element: t,
      elementType: t,
      instanceOf: o,
      node: t,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: n
    };
    return a.PropTypes = a, a;
  }, xe;
}
if (process.env.NODE_ENV !== "production") {
  var wr = He(), Pr = !0;
  Se.exports = Sr()(wr.isElement, Pr);
} else
  Se.exports = Cr()();
var Rr = Se.exports;
const Or = /* @__PURE__ */ Nr(Rr), Ar = "_spinner_1sjgh_5", kr = "_internal_1sjgh_40", Ir = "_external_1sjgh_41", Mr = {
  spinner: Ar,
  "internal-circle": "_internal-circle_1sjgh_40",
  "external-circle": "_external-circle_1sjgh_41",
  internal: kr,
  external: Ir,
  "spinner-overlay": "_spinner-overlay_1sjgh_57"
};
function Je({ size: e }) {
  const n = D();
  return ae(() => {
    var r, t;
    (r = document == null ? void 0 : document.getElementById(n)) == null || r.style.setProperty("width", `${e}px`), (t = document == null ? void 0 : document.getElementById(n)) == null || t.style.setProperty("height", `${e}px`);
  }, [e, n]), /* @__PURE__ */ E("svg", { id: n, className: Mr.spinner, viewBox: "0 0 120 120", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ i("circle", { className: "internal-circle", cx: "60", cy: "60", r: "30" }),
    /* @__PURE__ */ i("circle", { className: "external-circle", cx: "60", cy: "60", r: "50" })
  ] });
}
Je.propTypes = {
  size: Or.number
};
Je.defaultProps = {
  size: 48
};
const it = B(({
  children: e,
  className: n,
  css: r = {},
  hint: t,
  isInline: o = !1,
  legend: a,
  message: s,
  messageType: l,
  required: d,
  ...f
}, u) => {
  const v = D(), { extendRequiredFieldsLabelsWith: _, extendOptionalFieldsLabelsWith: y } = le();
  return /* @__PURE__ */ E(
    "fieldset",
    {
      ref: u,
      className: c("fr-fieldset", { [`fr-fieldset--${l}`]: l }, n),
      ...se(f),
      "aria-labelledby": s && l ? `${v}-message` : void 0,
      children: [
        a && /* @__PURE__ */ E("legend", { className: c("fr-fieldset__legend fr-text--regular", r.legend), children: [
          a,
          d ? _ : y,
          t && /* @__PURE__ */ i("span", { className: c("fr-hint-text", r.legendHint), children: t })
        ] }),
        he.toArray(e).map((N, g) => /* @__PURE__ */ i("div", { className: c("fr-fieldset__element", { "fr-fieldset__element--inline": o }, r.element), children: N }, `${v}-${g}`)),
        s && l && /* @__PURE__ */ i("div", { id: `${v}-message`, className: c("fr-messages-group", r.messageDiv), children: /* @__PURE__ */ i("p", { className: c(`fr-message fr-message--${l}`, r.messageP), children: s }) })
      ]
    }
  );
}), ct = B(({
  className: e,
  css: n = {},
  hint: r,
  id: t,
  label: o,
  imageComponent: a,
  ...s
}, l) => {
  const d = t || D();
  return /* @__PURE__ */ E("div", { className: c("fr-radio-group", { "fr-radio-rich": a }, e), children: [
    /* @__PURE__ */ i(
      "input",
      {
        ref: l,
        ...s,
        type: "radio",
        id: d
      }
    ),
    /* @__PURE__ */ E(
      "label",
      {
        className: c("fr-label"),
        htmlFor: d,
        children: [
          o,
          r && /* @__PURE__ */ i("p", { className: c("fr-hint-text"), children: r })
        ]
      }
    ),
    a && /* @__PURE__ */ i("div", { className: c("fr-radio-rich__img"), children: a })
  ] });
}), lt = B(({
  className: e,
  css: n = {},
  hint: r,
  id: t,
  label: o,
  size: a,
  ...s
}, l) => {
  const d = D(), f = t || d;
  return /* @__PURE__ */ E("div", { className: c("fr-checkbox-group", { "fr-checkbox-group--sm": a === "sm" }, e), children: [
    /* @__PURE__ */ i(
      "input",
      {
        ref: l,
        type: "checkbox",
        id: f,
        className: c(n.input),
        ...s
      }
    ),
    /* @__PURE__ */ E("label", { className: c("fr-label", n.label), htmlFor: f, children: [
      o,
      r && /* @__PURE__ */ i("span", { className: c("fr-hint-text", n.labelHint), children: r })
    ] })
  ] });
}), ft = ({
  className: e,
  currentStep: n,
  currentTitle: r,
  nextStepTitle: t,
  steps: o,
  titleAs: a = "h4",
  ...s
}) => /* @__PURE__ */ E("div", { className: c("fr-stepper", e), ...s, children: [
  /* @__PURE__ */ E(a, { className: "fr-stepper__title", children: [
    /* @__PURE__ */ i("span", { className: "fr-stepper__state", children: `Étape ${n} sur ${o}` }),
    r
  ] }),
  /* @__PURE__ */ i("div", { className: "fr-stepper__steps", "data-fr-current-step": n, "data-fr-steps": o }),
  /* @__PURE__ */ E("p", { className: "fr-stepper__details", children: [
    /* @__PURE__ */ i("span", { className: "fr-text--bold", children: "Étape suivante : " }),
    t
  ] })
] }), dt = ({
  as: e = "p",
  size: n,
  alt: r,
  bold: t,
  className: o,
  ...a
}) => {
  const s = c(o, {
    "fr-text--alt": n !== "lead" && r,
    "fr-text--heavy": t,
    [`fr-text--${n}`]: n && n !== "md"
  });
  return /* @__PURE__ */ i(e, { className: s, ...a });
}, ut = ({
  as: e = "h1",
  className: n,
  look: r,
  ...t
}) => {
  const o = r && ["xs", "sm", "md", "lg", "xl"].includes(r), a = c(n, {
    [`fr-${r}`]: !o && r && r !== e,
    [`fr-display-${r}`]: o
  });
  return /* @__PURE__ */ i(e, { className: a, ...t });
}, mt = ({
  buttonLabel: e = "Voir le fil d’Ariane",
  children: n,
  className: r,
  css: t = {},
  ...o
}) => {
  const a = D();
  return /* @__PURE__ */ E("nav", { role: "navigation", "aria-label": o["aria-label"] || "vous êtes ici:", className: c("fr-breadcrumb", r), ...o, children: [
    /* @__PURE__ */ i("button", { className: c("fr-breadcrumb__button", t.button), "aria-expanded": "false", "aria-controls": "breadcrumb-1", children: e || "Voir le fil d’Ariane" }),
    /* @__PURE__ */ i("div", { className: "fr-collapse", id: "breadcrumb-1", children: /* @__PURE__ */ i("ol", { className: c("fr-breadcrumb__list", t.list), children: L(n, z).filter((s) => U(s)).map((s, l, { length: d }) => /* @__PURE__ */ i("li", { className: c(t.item), children: re(s, {
      className: c("fr-breadcrumb__link"),
      "aria-current": l + 1 === d ? "page" : void 0
    }) }, `${a}-${l}`)) }) })
  ] });
}, pt = B(({
  id: e,
  className: n,
  css: r = {},
  errorMessage: t,
  hint: o,
  label: a = "Ajouter des fichiers",
  ...s
}, l) => {
  const d = D(), f = e || d, { extendOptionalFieldsLabelsWith: u, extendRequiredFieldsLabelsWith: v } = le();
  return /* @__PURE__ */ E("div", { className: c("fr-upload-group", { "fr-input-group--error": t, "fr-input-group--disabled": s.disabled }, n), children: [
    /* @__PURE__ */ E("label", { className: c("fr-label", r.label), htmlFor: f, children: [
      a,
      s.required ? v : u,
      o && /* @__PURE__ */ i("span", { className: "fr-hint-text", children: o })
    ] }),
    /* @__PURE__ */ i(
      "input",
      {
        ref: l,
        id: f,
        className: c("fr-upload", r.input),
        type: "file",
        "aria-describedby": t ? `${f}-message` : void 0,
        ...s
      }
    ),
    t && /* @__PURE__ */ i("p", { id: `${f}-message`, className: c("fr-error-text", r.errorParagraph), children: t })
  ] });
}), Xe = B(({
  children: e,
  className: n,
  icon: r,
  id: t,
  ...o
}, a) => {
  const s = c("fr-modal__title", n);
  return /* @__PURE__ */ E(
    "h1",
    {
      ref: a,
      className: s,
      id: `${t}-title`,
      ...se(o),
      children: [
        r && /* @__PURE__ */ i("span", { className: `fr-icon-${r} fr-icon--lg` }),
        e
      ]
    }
  );
}), ve = B(({
  className: e,
  controls: n,
  children: r = "Fermer",
  ...t
}, o) => /* @__PURE__ */ i(
  "button",
  {
    ref: o,
    id: `${n}-close`,
    "aria-controls": n || void 0,
    className: c("fr-btn--close fr-btn", e),
    type: "button",
    ...t,
    children: r
  }
)), jr = 9, Ye = 'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
function Fr(e, n, r) {
  function t(o) {
    var f;
    const a = [
      ...(f = e.current) == null ? void 0 : f.querySelectorAll(Ye)
    ].filter((u) => !u.hasAttribute("disabled")), s = a[0], l = a[a.length - 1];
    (o.key === "Tab" || o.keyCode === jr) && (console.log("handleFocus", o), o.shiftKey ? document.activeElement === s && (l.focus(), o.preventDefault()) : (document.activeElement === l || document.activeElement === r) && (s.focus(), o.preventDefault()));
  }
  return ae(() => {
    var o;
    if (n) {
      console.log("here");
      const a = [
        ...(o = e.current) == null ? void 0 : o.querySelectorAll(Ye)
      ].filter((s) => !s.hasAttribute("disabled"));
      console.log("focusableEls", a[0]), document.addEventListener("keydown", t);
    } else
      r == null || r.focus();
    return () => document.removeEventListener("keydown", t);
  }, [n, e, r]), e;
}
const Dr = ({
  children: e,
  hide: n,
  size: r = "md",
  id: t,
  className: o,
  isOpen: a,
  canClose: s,
  ...l
}) => {
  var H, X, Z;
  const [d, f] = ne(null), v = { sm: 4, lg: 8, md: 6, xl: 10 }[r], _ = c("fr-modal", o), y = oe(null), N = (H = L(e, Xe)) == null ? void 0 : H[0], g = L(e, Ze), T = (X = L(e, Qe)) == null ? void 0 : X[0], P = (Z = L(e, ve)) == null ? void 0 : Z[0], q = t || D();
  ae(() => {
    var Y, J;
    y.current && (a && (f(document.activeElement), (Y = document == null ? void 0 : document.getElementById(q)) == null || Y.classList.add("fr-modal--opened")), a || (J = document == null ? void 0 : document.getElementById(q)) == null || J.classList.remove("fr-modal--opened"));
  }, [a]), ae(() => {
    const W = y.current;
    if (W)
      return W.addEventListener("dsfr.conceal", (Y) => Y.stopPropagation()), W.addEventListener("dsfr.disclose", (Y) => Y.stopPropagation()), () => {
        W.removeEventListener("dsfr.conceal", (Y) => Y.stopPropagation()), W.removeEventListener("dsfr.disclose", (Y) => Y.stopPropagation());
      };
  }, []);
  const k = (W) => {
    s && (!y.current || y.current === W.target || W.target.className.indexOf("closing-overlay") > -1) && n();
  };
  Fr(y, a, d);
  const I = P ? re(P, { onClick: () => n(), controls: q }) : s ? /* @__PURE__ */ i(ve, { onClick: () => n(), controls: q }) : null, p = /* @__PURE__ */ i(
    "dialog",
    {
      "aria-labelledby": `${q}-title`,
      "aria-modal": "true",
      className: _,
      ref: y,
      id: q,
      role: "dialog",
      onClick: (W) => k(W),
      ...l,
      children: /* @__PURE__ */ i("div", { className: "fr-container fr-container--fluid fr-container-md", children: /* @__PURE__ */ i("div", { className: "fr-grid-row fr-grid-row--center closing-overlay", children: /* @__PURE__ */ i("div", { className: `fr-col-12 fr-col-md-${v}`, children: /* @__PURE__ */ E("div", { className: "fr-modal__body", children: [
        /* @__PURE__ */ i("div", { className: "fr-modal__header", children: I }),
        /* @__PURE__ */ E("div", { className: "fr-modal__content", children: [
          N && re(N, { id: q }),
          g ?? null
        ] }),
        T
      ] }) }) }) })
    }
  );
  return Ue.createPortal(
    p,
    document.body
  );
}, Lr = ({
  children: e,
  size: n = "md",
  id: r,
  className: t,
  ...o
}) => {
  var N, g, T;
  const s = { sm: 4, lg: 8, md: 6, xl: 10 }[n], l = c("fr-modal", t), d = (N = L(e, Xe)) == null ? void 0 : N[0], f = L(e, Ze), u = (g = L(e, Qe)) == null ? void 0 : g[0], v = (T = L(e, ve)) == null ? void 0 : T[0], _ = v ? re(v, { controls: r }) : /* @__PURE__ */ i(ve, { controls: r }), y = /* @__PURE__ */ i(
    "dialog",
    {
      "aria-labelledby": `${r}-title`,
      className: l,
      id: r,
      role: "dialog",
      ...o,
      children: /* @__PURE__ */ i("div", { className: "fr-container fr-container--fluid fr-container-md", children: /* @__PURE__ */ i("div", { className: "fr-grid-row fr-grid-row--center closing-overlay", children: /* @__PURE__ */ i("div", { className: `fr-col-12 fr-col-md-${s}`, children: /* @__PURE__ */ E("div", { className: "fr-modal__body", children: [
        /* @__PURE__ */ i("div", { className: "fr-modal__header", children: _ }),
        /* @__PURE__ */ E("div", { className: "fr-modal__content", children: [
          d && re(d, { id: r }),
          f ?? null
        ] }),
        u
      ] }) }) }) })
    }
  );
  return Ue.createPortal(
    y,
    document.body
  );
}, vt = ({
  id: e,
  size: n = "md",
  hide: r,
  isOpen: t = !1,
  className: o,
  canClose: a = !0,
  ...s
}) => e ? /* @__PURE__ */ i(Lr, { id: e, size: n, className: o, ...s }) : /* @__PURE__ */ i(
  Dr,
  {
    id: e,
    isOpen: t,
    className: o,
    size: n,
    hide: r,
    canClose: a,
    ...s
  }
), Ze = B(({
  className: e,
  ...n
}, r) => /* @__PURE__ */ i(
  "div",
  {
    ref: r,
    className: c("fr-modal__content", e),
    ...n
  }
)), Qe = B(({
  className: e,
  ...n
}, r) => /* @__PURE__ */ i(
  "div",
  {
    ref: r,
    className: c("fr-modal__footer", e),
    ...n
  }
)), qr = B(({
  className: e,
  css: n = {},
  hasSeparator: r,
  hasLabelLeft: t,
  label: o,
  hint: a,
  ...s
}, l) => {
  const d = D(), f = s.id || d, u = c("fr-toggle", {
    "fr-toggle--border-bottom": r,
    "fr-toggle--label-left": t
  }, e);
  return /* @__PURE__ */ E(
    "div",
    {
      className: u,
      children: [
        /* @__PURE__ */ i(
          "input",
          {
            ref: l,
            type: "checkbox",
            className: c("fr-toggle__input", n["fr-toggle__input"]),
            id: f,
            ...se(s, { exclude: ["type"] })
          }
        ),
        /* @__PURE__ */ i(
          "label",
          {
            className: c("fr-toggle__label", n["fr-toggle__label"]),
            htmlFor: f,
            "data-fr-checked-label": "Activé",
            "data-fr-unchecked-label": "Désactivé",
            children: o
          }
        ),
        a && /* @__PURE__ */ i("p", { className: c("fr-hint-text", n["fr-hint-text"]), children: a })
      ]
    }
  );
}), ht = ({ children: e, className: n, ...r }) => {
  const t = D();
  return /* @__PURE__ */ i("ul", { className: c("fr-toggle__list", n), ...se(r), children: L(e, qr).map((o, a) => /* @__PURE__ */ i("li", { children: o }, `${t}-${a}`)) });
};
export {
  _r as Accordion,
  Qr as AccordionGroup,
  et as Alert,
  ar as Badge,
  Gr as BadgeGroup,
  mt as Breadcrumb,
  ce as Button,
  Vr as ButtonGroup,
  lt as Checkbox,
  Jr as Col,
  Hr as Container,
  zr as DSFRConfig,
  hr as DissmissibleTag,
  lr as FastAccess,
  it as Fieldset,
  pt as FileUpload,
  Xr as Header,
  z as Link,
  mr as Logo,
  vt as Modal,
  ve as ModalClose,
  Ze as ModalContent,
  Qe as ModalFooter,
  Xe as ModalTitle,
  ur as Nav,
  Ge as NavItem,
  rt as Notice,
  fr as Operator,
  ct as Radio,
  Kr as Row,
  dr as SearchBar,
  vr as SelectableTag,
  cr as Service,
  nt as SideMenu,
  Ve as SideMenuItem,
  at as SideMenuLink,
  Je as Spinner,
  ft as Stepper,
  gr as Tab,
  tt as Tabs,
  pr as Tag,
  Zr as TagGroup,
  dt as Text,
  st as TextArea,
  ot as TextInput,
  ut as Title,
  qr as Toggle,
  ht as ToggleGroup,
  le as useDSFRConfig
};
