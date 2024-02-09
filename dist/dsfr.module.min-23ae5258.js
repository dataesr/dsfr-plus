/*! DSFR v1.11.0 | SPDX-License-Identifier: MIT | License-Filename: LICENSE.md | restricted use (see terms and conditions) */
const h = new class {
  constructor() {
    this.modules = {};
  }
  create(i) {
    const t = new i();
    this.modules[t.type] = t;
  }
  getModule(i) {
    return this.modules[i];
  }
  add(i, t) {
    this.modules[i].add(t);
  }
  remove(i, t) {
    this.modules[i].remove(t);
  }
  get isActive() {
    return this._isActive;
  }
  set isActive(i) {
    if (i === this._isActive)
      return;
    this._isActive = i;
    const t = Object.keys(this.modules).map((e) => this.modules[e]);
    if (i)
      for (const e of t)
        e.activate();
    else
      for (const e of t)
        e.deactivate();
  }
  get isLegacy() {
    return this._isLegacy;
  }
  set isLegacy(i) {
    i !== this._isLegacy && (this._isLegacy = i);
  }
}(), zt = "fr", V = "dsfr", pe = "@gouvfr", ct = "1.11.0";
class W {
  constructor(t, e, n, r) {
    switch (this.level = t, this.light = e, this.dark = n, r) {
      case "warn":
        this.logger = console.warn;
        break;
      case "error":
        this.logger = console.error;
        break;
      default:
        this.logger = console.log;
    }
  }
  log(...t) {
    const e = new lt(V);
    for (const n of t)
      e.add(n);
    this.print(e);
  }
  print(t) {
    t.setColor(this.color), this.logger.apply(console, t.getMessage());
  }
  get color() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? this.dark : this.light;
  }
}
class lt {
  constructor(t) {
    this.inputs = ["%c"], this.styles = ["font-family:Marianne", "line-height: 1.5"], this.objects = [], t && this.add(`${t} :`);
  }
  add(t) {
    switch (typeof t) {
      case "object":
      case "function":
        this.inputs.push("%o "), this.objects.push(t);
        break;
      default:
        this.inputs.push(`${t} `);
    }
  }
  setColor(t) {
    this.styles.push(`color:${t}`);
  }
  getMessage() {
    return [this.inputs.join(""), this.styles.join(";"), ...this.objects];
  }
}
const Dt = { log: new W(0, "#616161", "#989898"), debug: new W(1, "#000091", "#8B8BFF"), info: new W(2, "#007c3b", "#00ed70"), warn: new W(3, "#ba4500", "#fa5c00", "warn"), error: new W(4, "#D80600", "#FF4641", "error") }, g = new class {
  constructor() {
    this.level = 2;
    for (const i in Dt) {
      const t = Dt[i];
      this[i] = (...e) => {
        this.level <= t.level && t.log.apply(t, e);
      }, this[i].print = t.print.bind(t);
    }
  }
  state() {
    const i = new lt();
    i.add(h), this.log.print(i);
  }
  tree() {
    const i = h.getModule("stage");
    if (!i)
      return;
    const t = new lt();
    this._branch(i.root, 0, t), this.log.print(t);
  }
  _branch(i, t, e) {
    let n = "";
    if (t > 0) {
      let r = "";
      for (let a = 0; a < t; a++)
        r += "    ";
      n += r + "└─ ";
    }
    n += `[${i.id}] ${i.html}`, e.add(n), e.add({ "@": i }), e.add(`
`);
    for (const r of i.children)
      n += this._branch(r, t + 1, e);
  }
}(), wt = (i) => {
  document.readyState !== "loading" ? window.requestAnimationFrame(i) : document.addEventListener("DOMContentLoaded", i);
}, v = { AUTO: "auto", MANUAL: "manual", RUNTIME: "runtime", LOADED: "loaded", VUE: "vue", ANGULAR: "angular", REACT: "react" }, Z = new class {
  constructor() {
    this._mode = v.AUTO, this.isStarted = !1, this.starting = this.start.bind(this), this.preventManipulation = !1;
  }
  configure(i = {}, t, e) {
    this.startCallback = t;
    const n = i.production && (!e || e.production !== "false");
    switch (!0) {
      case (e && !isNaN(e.level)):
        g.level = Number(e.level);
        break;
      case (e && e.verbose && (e.verbose === "true" || e.verbose === 1)):
        g.level = 0;
        break;
      case n:
        g.level = 999;
        break;
      case i.verbose:
        g.level = 0;
    }
    g.info(`version ${ct}`), this.mode = i.mode || v.AUTO;
  }
  set mode(i) {
    switch (i) {
      case v.AUTO:
        this.preventManipulation = !1, t = this.starting, wt(t);
        break;
      case v.LOADED:
        this.preventManipulation = !1, wt(this.starting);
        break;
      case v.RUNTIME:
        this.preventManipulation = !1, this.start();
        break;
      case v.MANUAL:
        this.preventManipulation = !1;
        break;
      case v.VUE:
      case v.ANGULAR:
      case v.REACT:
        this.preventManipulation = !0;
        break;
      default:
        return void g.error("Illegal mode");
    }
    var t;
    this._mode = i, g.info(`mode set to ${i}`);
  }
  get mode() {
    return this._mode;
  }
  start() {
    g.info("start"), this.startCallback();
  }
}();
class K {
  constructor() {
    this._collection = [];
  }
  forEach(t) {
    this._collection.forEach(t);
  }
  map(t) {
    return this._collection.map(t);
  }
  get length() {
    return this._collection.length;
  }
  add(t) {
    return !(this._collection.indexOf(t) > -1) && (this._collection.push(t), this.onAdd && this.onAdd(), this.onPopulate && this._collection.length === 1 && this.onPopulate(), !0);
  }
  remove(t) {
    const e = this._collection.indexOf(t);
    if (e === -1)
      return !1;
    this._collection.splice(e, 1), this.onRemove && this.onRemove(), this.onEmpty && this._collection.length === 0 && this.onEmpty();
  }
  execute(...t) {
    for (const e of this._collection)
      e && e.apply(null, t);
  }
  clear() {
    this._collection.length = 0;
  }
  clone() {
    const t = new K();
    return t._collection = this._collection.slice(), t;
  }
  get collection() {
    return this._collection;
  }
}
class w extends K {
  constructor(t) {
    super(), this.type = t, this.isActive = !1;
  }
  activate() {
  }
  deactivate() {
  }
}
const o = (i) => `${zt}-${i}`;
o.selector = (i, t) => (t === void 0 && (t = "."), `${t}${o(i)}`), (o.attr = (i) => `data-${o(i)}`).selector = (i, t) => {
  let e = o.attr(i);
  return t !== void 0 && (e += `="${t}"`), `[${e}]`;
}, o.event = (i) => `${V}.${i}`, o.emission = (i, t) => `emission:${i}.${t}`;
const vt = (i, t) => Array.prototype.slice.call(i.querySelectorAll(t)), yt = (i, t) => {
  const e = i.parentElement;
  return e.matches(t) ? e : e === document.documentElement ? null : yt(e, t);
};
class _e {
  constructor(t, e, n) {
    this.selector = t, this.InstanceClass = e, this.creator = n, this.instances = new K(), this.isIntroduced = !1, this._instanceClassName = this.InstanceClass.instanceClassName, this._instanceClassNames = this.getInstanceClassNames(this.InstanceClass), this._property = this._instanceClassName.substring(0, 1).toLowerCase() + this._instanceClassName.substring(1);
    const r = this._instanceClassName.replace(/[^a-zA-Z0-9]+/g, "-").replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/([0-9])([^0-9])/g, "$1-$2").replace(/([^0-9])([0-9])/g, "$1-$2").toLowerCase();
    this._attribute = o.attr(`js-${r}`);
  }
  getInstanceClassNames(t) {
    const e = Object.getPrototypeOf(t);
    return e && e.instanceClassName !== "Instance" ? [...this.getInstanceClassNames(e), t.instanceClassName] : [t.instanceClassName];
  }
  hasInstanceClassName(t) {
    return this._instanceClassNames.indexOf(t) > -1;
  }
  introduce() {
    this.isIntroduced || (this.isIntroduced = !0, h.getModule("stage").parse(document.documentElement, this));
  }
  parse(t, e) {
    const n = [];
    return t.matches && t.matches(this.selector) && n.push(t), !e && t.querySelectorAll && t.querySelector(this.selector) && n.push.apply(n, vt(t, this.selector)), n;
  }
  create(t) {
    if (!t.node.matches(this.selector))
      return;
    const e = new this.InstanceClass();
    return this.instances.add(e), e;
  }
  remove(t) {
    this.instances.remove(t);
  }
  dispose() {
    const t = this.instances.collection;
    for (let e = t.length - 1; e > -1; e--)
      t[e]._dispose();
    this.creator = null;
  }
  get instanceClassName() {
    return this._instanceClassName;
  }
  get instanceClassNames() {
    return this._instanceClassNames;
  }
  get property() {
    return this._property;
  }
  get attribute() {
    return this._attribute;
  }
}
class be extends w {
  constructor() {
    super("register");
  }
  register(t, e, n) {
    const r = new _e(t, e, n);
    return this.add(r), h.isActive && r.introduce(), r;
  }
  activate() {
    for (const t of this.collection)
      t.introduce();
  }
  remove(t) {
    t.dispose(), super.remove(t);
  }
}
let Lt = 0;
class jt {
  constructor(t, e) {
    e ? this.id = e : (Lt++, this.id = Lt), this.node = t, this.attributeNames = [], this.instances = [], this._children = [], this._parent = null, this._projects = [];
  }
  get proxy() {
    const t = this;
    if (!this._proxy) {
      this._proxy = { id: this.id, get parent() {
        return t.parent ? t.parent.proxy : null;
      }, get children() {
        return t.children.map((e) => e.proxy);
      } };
      for (const e of this.instances)
        this._proxy[e.registration.property] = e.proxy;
    }
    return this._proxy;
  }
  get html() {
    if (!this.node || !this.node.outerHTML)
      return "";
    const t = this.node.outerHTML.indexOf(">");
    return this.node.outerHTML.substring(0, t + 1);
  }
  project(t) {
    this._projects.indexOf(t) === -1 && this._projects.push(t);
  }
  populate() {
    const t = this._projects.slice();
    this._projects.length = 0;
    for (const e of t)
      this.create(e);
  }
  create(t) {
    if (this.hasInstance(t.instanceClassName))
      return;
    g.debug(`create instance of ${t.instanceClassName} on element [${this.id}]`);
    const e = t.create(this);
    this.instances.push(e), e._config(this, t), this._proxy && (this._proxy[t.property] = e.proxy);
  }
  remove(t) {
    const e = this.instances.indexOf(t);
    e > -1 && this.instances.splice(e, 1), this._proxy && delete this._proxy[t.registration.property];
  }
  get parent() {
    return this._parent;
  }
  get ascendants() {
    return [this.parent, ...this.parent.ascendants];
  }
  get children() {
    return this._children;
  }
  get descendants() {
    const t = [...this._children];
    return this._children.forEach((e) => t.push(...e.descendants)), t;
  }
  addChild(t, e) {
    return this._children.indexOf(t) > -1 ? null : (t._parent = this, !isNaN(e) && e > -1 && e < this._children.length ? this._children.splice(e, 0, t) : this._children.push(t), t);
  }
  removeChild(t) {
    const e = this._children.indexOf(t);
    if (e === -1)
      return null;
    t._parent = null, this._children.splice(e, 1);
  }
  emit(t, e) {
    const n = h.getModule("stage").collection, r = [];
    for (const a of n)
      r.push(...a._emit(t, e));
    return r;
  }
  _emit(t, e) {
    const n = [];
    for (const r of this.instances)
      n.push(...r._emitter.emit(t, e));
    return n;
  }
  ascend(t, e) {
    return this._parent ? this._parent._ascend(t, e) : [];
  }
  _ascend(t, e) {
    const n = [];
    for (const r of this.instances)
      n.push(...r._ascent.emit(t, e));
    return this._parent && n.push(...this._parent._ascend(t, e)), n;
  }
  descend(t, e) {
    const n = [];
    for (const r of this._children)
      n.push(...r._descend(t, e));
    return n;
  }
  _descend(t, e) {
    const n = [];
    for (const r of this.instances)
      n.push(...r._descent.emit(t, e));
    for (const r of this._children)
      n.push(...r._descend(t, e));
    return n;
  }
  getInstance(t) {
    for (const e of this.instances)
      if (e.registration.hasInstanceClassName(t))
        return e;
    return null;
  }
  hasInstance(t) {
    return this.getInstance(t) !== null;
  }
  getDescendantInstances(t, e, n) {
    if (!t)
      return [];
    const r = [];
    for (const a of this._children) {
      const c = a.getInstance(t);
      c && (r.push(c), n) || e && a.hasInstance(e) || !a.children.length || r.push.apply(r, a.getDescendantInstances(t, e, n));
    }
    return r;
  }
  getAscendantInstance(t, e) {
    return !t || !this._parent ? null : this._parent.getInstance(t) || (e && this._parent.hasInstance(e) ? null : this._parent.getAscendantInstance(t, e));
  }
  dispose() {
    for (let t = this.instances.length - 1; t >= 0; t--) {
      const e = this.instances[t];
      e && e._dispose();
    }
    this.instances.length = 0, h.remove("stage", this), this.parent.removeChild(this), this._children.length = 0, g.debug(`remove element [${this.id}] ${this.html}`);
  }
  prepare(t) {
    this.attributeNames.indexOf(t) === -1 && this.attributeNames.push(t);
  }
  examine() {
    const t = this.attributeNames.slice();
    this.attributeNames.length = 0;
    for (let e = this.instances.length - 1; e > -1; e--)
      this.instances[e].examine(t);
  }
}
const Q = { CLICK: o.emission("root", "click"), KEYDOWN: o.emission("root", "keydown"), KEYUP: o.emission("root", "keyup") }, Vt = { TAB: { id: "tab", value: 9 }, ESCAPE: { id: "escape", value: 27 }, END: { id: "end", value: 35 }, HOME: { id: "home", value: 36 }, LEFT: { id: "left", value: 37 }, UP: { id: "up", value: 38 }, RIGHT: { id: "right", value: 39 }, DOWN: { id: "down", value: 40 } }, Rt = (i) => Object.values(Vt).filter((t) => t.value === i)[0];
class Ee extends jt {
  constructor() {
    super(document.documentElement, "root"), this.node.setAttribute(o.attr("js"), !0), this.listen();
  }
  listen() {
    document.documentElement.addEventListener("click", this.click.bind(this), { capture: !0 }), document.documentElement.addEventListener("keydown", this.keydown.bind(this), { capture: !0 }), document.documentElement.addEventListener("keyup", this.keyup.bind(this), { capture: !0 });
  }
  click(t) {
    this.emit(Q.CLICK, t.target);
  }
  keydown(t) {
    this.emit(Q.KEYDOWN, Rt(t.keyCode));
  }
  keyup(t) {
    this.emit(Q.KEYUP, Rt(t.keyCode));
  }
}
class fe extends w {
  constructor() {
    super("stage"), this.root = new Ee(), super.add(this.root), this.observer = new MutationObserver(this.mutate.bind(this)), this.modifications = [], this.willModify = !1, this.modifying = this.modify.bind(this);
  }
  hasElement(t) {
    for (const e of this.collection)
      if (e.node === t)
        return !0;
    return !1;
  }
  getElement(t) {
    for (const n of this.collection)
      if (n.node === t)
        return n;
    const e = new jt(t);
    return this.add(e), g.debug(`add element [${e.id}] ${e.html}`), e;
  }
  getProxy(t) {
    return this.hasElement(t) ? this.getElement(t).proxy : null;
  }
  add(t) {
    super.add(t), this.put(t, this.root);
  }
  put(t, e) {
    let n = 0;
    for (let r = e.children.length - 1; r > -1; r--) {
      const a = e.children[r], c = t.node.compareDocumentPosition(a.node);
      if (c & Node.DOCUMENT_POSITION_CONTAINS)
        return void this.put(t, a);
      if (c & Node.DOCUMENT_POSITION_CONTAINED_BY)
        e.removeChild(a), t.addChild(a, 0);
      else if (c & Node.DOCUMENT_POSITION_PRECEDING) {
        n = r + 1;
        break;
      }
    }
    e.addChild(t, n);
  }
  activate() {
    this.observer.observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0 });
  }
  deactivate() {
    this.observer.disconnect();
  }
  mutate(t) {
    const e = [];
    t.forEach((n) => {
      switch (n.type) {
        case "childList":
          n.removedNodes.forEach((r) => this.dispose(r)), n.addedNodes.forEach((r) => this.parse(r));
          break;
        case "attributes":
          if (this.hasElement(n.target)) {
            const r = this.getElement(n.target);
            r.prepare(n.attributeName), e.indexOf(r) === -1 && e.push(r);
            for (const a of r.descendants)
              e.indexOf(a) === -1 && e.push(a);
          }
          this.modifications.indexOf(n.target) === -1 && this.modifications.push(n.target);
      }
    }), e.forEach((n) => n.examine()), this.modifications.length && !this.willModify && (this.willModify = !0, window.requestAnimationFrame(this.modifying));
  }
  modify() {
    this.willModify = !1;
    const t = this.modifications.slice();
    this.modifications.length = 0;
    for (const e of t)
      document.documentElement.contains(e) && this.parse(e);
  }
  dispose(t) {
    const e = [];
    this.forEach((n) => {
      t.contains(n.node) && e.push(n);
    });
    for (const n of e)
      n.dispose(), this.remove(n);
  }
  parse(t, e, n) {
    const r = e ? [e] : h.getModule("register").collection, a = [];
    for (const c of r) {
      const T = c.parse(t, n);
      for (const me of T) {
        const it = this.getElement(me);
        it.project(c), a.indexOf(it) === -1 && a.push(it);
      }
    }
    for (const c of a)
      c.populate();
  }
}
class Ae extends w {
  constructor() {
    super("render"), this.rendering = this.render.bind(this), this.nexts = new K();
  }
  activate() {
    window.requestAnimationFrame(this.rendering);
  }
  request(t) {
    this.nexts.add(t);
  }
  render() {
    if (!h.isActive || (window.requestAnimationFrame(this.rendering), this.forEach((e) => e.render()), !this.nexts.length))
      return;
    const t = this.nexts.clone();
    this.nexts.clear(), t.forEach((e) => e.next());
  }
}
class Te extends w {
  constructor() {
    super("resize"), this.requireResize = !1, this.resizing = this.resize.bind(this);
    const t = this.request.bind(this);
    document.fonts && document.fonts.ready.then(t), window.addEventListener("resize", t), window.addEventListener("orientationchange", t);
  }
  activate() {
    this.request();
  }
  request() {
    this.requireResize || (this.requireResize = !0, window.requestAnimationFrame(this.resizing));
  }
  resize() {
    this.requireResize && (this.forEach((t) => t.resize()), this.requireResize = !1);
  }
}
class Se extends w {
  constructor() {
    super("lock"), this._isLocked = !1, this._scrollY = 0, this.onPopulate = this.lock.bind(this), this.onEmpty = this.unlock.bind(this);
  }
  get isLocked() {
    return this._isLocked;
  }
  lock() {
    if (!this._isLocked) {
      this._isLocked = !0, this._scrollY = window.scrollY;
      const t = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.setAttribute(o.attr("scrolling"), "false"), document.body.style.top = -this._scrollY + "px", this.behavior = getComputedStyle(document.documentElement).getPropertyValue("scroll-behavior"), this.behavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), t > 0 && document.documentElement.style.setProperty("--scrollbar-width", `${t}px`);
    }
  }
  unlock() {
    this._isLocked && (this._isLocked = !1, document.documentElement.removeAttribute(o.attr("scrolling")), document.body.style.top = "", window.scrollTo(0, this._scrollY), this.behavior === "smooth" && document.documentElement.style.removeProperty("scroll-behavior"), document.documentElement.style.removeProperty("--scrollbar-width"));
  }
  move(t) {
    this._isLocked ? (this._scrollY += t, document.body.style.top = -this._scrollY + "px") : window.scrollTo(0, window.scrollY + t);
  }
}
class ve extends w {
  constructor() {
    super("load"), this.loading = this.load.bind(this);
  }
  activate() {
    window.addEventListener("load", this.loading);
  }
  load() {
    this.forEach((t) => t.load());
  }
}
const ye = ["Marianne", "Spectral"];
class Ce extends w {
  constructor() {
    super("font-swap"), this.swapping = this.swap.bind(this);
  }
  activate() {
    document.fonts && document.fonts.addEventListener("loadingdone", this.swapping);
  }
  swap() {
    const t = ye.filter((e) => document.fonts.check(`16px ${e}`));
    this.forEach((e) => e.swapFont(t));
  }
}
class Ne extends w {
  constructor() {
    super("mouse-move"), this.requireMove = !1, this._isMoving = !1, this.moving = this.move.bind(this), this.requesting = this.request.bind(this), this.onPopulate = this.listen.bind(this), this.onEmpty = this.unlisten.bind(this);
  }
  listen() {
    this._isMoving || (this._isMoving = !0, this.requireMove = !1, document.documentElement.addEventListener("mousemove", this.requesting));
  }
  unlisten() {
    this._isMoving && (this._isMoving = !1, this.requireMove = !1, document.documentElement.removeEventListener("mousemove", this.requesting));
  }
  request(t) {
    this._isMoving && (this.point = { x: t.clientX, y: t.clientY }, this.requireMove || (this.requireMove = !0, window.requestAnimationFrame(this.moving)));
  }
  move() {
    this.requireMove && (this.forEach((t) => t.mouseMove(this.point)), this.requireMove = !1);
  }
}
class De extends w {
  constructor() {
    super("hash"), this.handling = this.handle.bind(this), this.getLocationHash();
  }
  activate() {
    window.addEventListener("hashchange", this.handling);
  }
  deactivate() {
    window.removeEventListener("hashchange", this.handling);
  }
  _sanitize(t) {
    return t.charAt(0) === "#" ? t.substring(1) : t;
  }
  set hash(t) {
    const e = this._sanitize(t);
    this._hash !== e && (window.location.hash = e);
  }
  get hash() {
    return this._hash;
  }
  getLocationHash() {
    const t = window.location.hash;
    this._hash = this._sanitize(t);
  }
  handle(t) {
    this.getLocationHash(), this.forEach((e) => e.handleHash(this._hash, t));
  }
}
const dt = new class {
  constructor() {
    h.create(be), h.create(fe), h.create(Ae), h.create(Te), h.create(Se), h.create(ve), h.create(Ce), h.create(Ne), h.create(De);
    const i = h.getModule("register");
    this.register = i.register.bind(i);
  }
  get isActive() {
    return h.isActive;
  }
  start() {
    g.debug("START"), h.isActive = !0;
  }
  stop() {
    g.debug("STOP"), h.isActive = !1;
  }
}(), we = (i) => {
  switch (!0) {
    case i.hover:
      return "-hover";
    case i.active:
      return "-active";
    default:
      return "";
  }
}, Le = new class {
  getColor(i, t, e, n = {}) {
    const r = `--${i}-${t}-${e}${we(n)}`;
    return getComputedStyle(document.documentElement).getPropertyValue(r).trim() || null;
  }
}(), Kt = (i) => i.charAt(0) === "." ? i.substr(1) : i, Ct = (i) => {
  switch (!0) {
    case !i.className:
      return [];
    case typeof i.className == "string":
      return i.className.split(" ");
    case typeof i.className.baseVal == "string":
      return i.className.baseVal.split(" ");
  }
  return [];
}, Yt = (i, t, e) => {
  t = Kt(t);
  const n = Ct(i), r = n.indexOf(t);
  e === !0 ? r > -1 && n.splice(r, 1) : r === -1 && n.push(t), i.className = n.join(" ");
}, Xt = (i, t) => Yt(i, t), Qt = (i, t) => Yt(i, t, !0), Jt = (i, t) => Ct(i).indexOf(Kt(t)) > -1, Re = ['[tabindex]:not([tabindex="-1"])', "a[href]", "button:not([disabled])", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details", "iframe"].join(), Zt = (i) => i.querySelectorAll(Re);
let It = 0;
const te = (i) => {
  if (!document.getElementById(i))
    return i;
  let t = !0;
  const e = i;
  for (; t; )
    It++, i = `${e}-${It}`, t = document.getElementById(i);
  return i;
}, Ie = { addClass: Xt, hasClass: Jt, removeClass: Qt, queryParentSelector: yt, querySelectorAllArray: vt, queryActions: Zt, uniqueId: te }, xe = { DataURISVG: class {
  constructor(i = 0, t = 0) {
    this._width = i, this._height = t, this._content = "";
  }
  get width() {
    return this._width;
  }
  set width(i) {
    this._width = i;
  }
  get height() {
    return this._height;
  }
  set height(i) {
    this._height = i;
  }
  get content() {
    return this._content;
  }
  set content(i) {
    this._content = i;
  }
  getDataURI(i = !1) {
    let t = `<svg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 ${this._width} ${this._height}' width='${this._width}px' height='${this._height}px'>${this._content}</svg>`;
    return t = t.replace(/#/gi, "%23"), i && (t = t.replace(/</gi, "%3C"), t = t.replace(/>/gi, "%3E"), t = t.replace(/"/gi, "'"), t = t.replace(/{/gi, "%7B"), t = t.replace(/}/gi, "%7D")), `data:image/svg+xml;charset=utf8,${t}`;
  }
} }, Oe = { supportLocalStorage: () => {
  try {
    return "localStorage" in window && window.localStorage !== null;
  } catch {
    return !1;
  }
}, supportAspectRatio: () => !!window.CSS && CSS.supports("aspect-ratio: 16 / 9") }, Pe = { TransitionSelector: { NONE: o.selector("transition-none") } }, F = (i, ...t) => (t.forEach((e) => {
  const n = Object.keys(e).reduce((r, a) => (r[a] = Object.getOwnPropertyDescriptor(e, a), r), {});
  Object.getOwnPropertySymbols(e).forEach((r) => {
    const a = Object.getOwnPropertyDescriptor(e, r);
    a.enumerable && (n[r] = a);
  }), Object.defineProperties(i, n);
}), i), ke = { completeAssign: F }, f = {}, nt = {};
Object.defineProperty(nt, "isLegacy", { get: () => h.isLegacy }), nt.setLegacy = () => {
  h.isLegacy = !0;
}, f.legacy = nt, f.dom = Ie, f.image = xe, f.support = Oe, f.motion = Pe, f.property = ke, f.ns = o, f.register = dt.register, f.state = h, f.query = ((i) => {
  if (i && i.search) {
    const t = new URLSearchParams(window.location.search).entries();
    return Object.fromEntries(t);
  }
  return null;
})(window.location), Object.defineProperty(f, "preventManipulation", { get: () => Z.preventManipulation }), Object.defineProperty(f, "stage", { get: () => h.getModule("stage") });
const d = (i) => h.getModule("stage").getProxy(i);
d.version = ct, d.prefix = zt, d.organisation = pe, d.Modes = v, Object.defineProperty(d, "mode", { set: (i) => {
  Z.mode = i;
}, get: () => Z.mode }), d.internals = f, d.version = ct, d.start = dt.start, d.stop = dt.stop, d.inspector = g, d.colors = Le;
const xt = window[V];
d.internals.configuration = xt, Z.configure(xt, d.start, d.internals.query), window[V] = d;
class rt {
  constructor() {
    this.emissions = {};
  }
  add(t, e) {
    if (typeof e != "function")
      throw new Error("closure must be a function");
    this.emissions[t] || (this.emissions[t] = []), this.emissions[t].push(e);
  }
  remove(t, e) {
    if (this.emissions[t])
      if (e) {
        const n = this.emissions[t].indexOf(e);
        n > -1 && this.emissions[t].splice(n);
      } else
        delete this.emissions[t];
  }
  emit(t, e) {
    if (!this.emissions[t])
      return [];
    const n = [];
    for (const r of this.emissions[t])
      r && n.push(r(e));
    return n;
  }
  dispose() {
    this.emissions = null;
  }
}
class q {
  constructor(t, e) {
    this.id = t, this.minWidth = e;
  }
  test() {
    return window.matchMedia(`(min-width: ${this.minWidth}em)`).matches;
  }
}
const ee = { XS: new q("xs", 0), SM: new q("sm", 36), MD: new q("md", 48), LG: new q("lg", 62), XL: new q("xl", 78) };
class b {
  constructor(t = !0) {
    this.jsAttribute = t, this._isRendering = !1, this._isResizing = !1, this._isScrollLocked = !1, this._isLoading = !1, this._isSwappingFont = !1, this._isEnabled = !0, this._isDisposed = !1, this._listeners = {}, this.handlingClick = this.handleClick.bind(this), this._hashes = [], this._hash = "", this._keyListenerTypes = [], this._keys = [], this.handlingKey = this.handleKey.bind(this), this._emitter = new rt(), this._ascent = new rt(), this._descent = new rt(), this._registrations = [], this._nexts = [];
  }
  static get instanceClassName() {
    return "Instance";
  }
  _config(t, e) {
    this.element = t, this.registration = e, this.node = t.node, this.id = t.node.id, this.jsAttribute && this.setAttribute(e.attribute, !0), this.init();
  }
  init() {
  }
  get proxy() {
    const t = this;
    return F({ render: () => t.render(), resize: () => t.resize() }, { get node() {
      return this.node;
    }, get isEnabled() {
      return t.isEnabled;
    }, set isEnabled(e) {
      t.isEnabled = e;
    } });
  }
  log(...t) {
    t.unshift(`${this.registration.instanceClassName} #${this.id} - `), g.log.apply(g, t);
  }
  debug(...t) {
    t.unshift(`${this.registration.instanceClassName} #${this.id} - `), g.debug.apply(g, t);
  }
  info(...t) {
    t.unshift(`${this.registration.instanceClassName} #${this.id} - `), g.info.apply(g, t);
  }
  warn(...t) {
    t.unshift(`${this.registration.instanceClassName} #${this.id} - `), g.warn.apply(g, t);
  }
  error(...t) {
    t.unshift(`${this.registration.instanceClassName} #${this.id} - `), g.error.apply(g, t);
  }
  register(t, e) {
    const n = h.getModule("register").register(t, e, this);
    this._registrations.push(n);
  }
  getRegisteredInstances(t) {
    for (const e of this._registrations)
      if (e.hasInstanceClassName(t))
        return e.instances.collection;
    return [];
  }
  dispatch(t, e, n, r) {
    const a = new CustomEvent(t, { detail: e, bubble: n === !0, cancelable: r === !0 });
    this.node.dispatchEvent(a);
  }
  listen(t, e, n) {
    this._listeners[t] || (this._listeners[t] = []);
    const r = this._listeners[t], a = new $e(this.node, t, e, n);
    r.push(a), a.listen();
  }
  unlisten(t, e, n) {
    if (!t) {
      for (const c in this._listeners)
        this.unlisten(c);
      return;
    }
    const r = this._listeners[t];
    if (!r)
      return;
    if (!e)
      return void r.forEach((c) => this.unlisten(t, c.closure));
    const a = r.filter((c) => c.closure === e && c.matchOptions(n));
    a.forEach((c) => c.unlisten()), this._listeners[t] = r.filter((c) => a.indexOf(c) === -1);
  }
  listenClick(t) {
    this.listen("click", this.handlingClick, t);
  }
  unlistenClick(t) {
    this.unlisten("click", this.handlingClick, t);
  }
  handleClick(t) {
  }
  set hash(t) {
    h.getModule("hash").hash = t;
  }
  get hash() {
    return h.getModule("hash").hash;
  }
  listenHash(t, e) {
    if (!this._hashes)
      return;
    this._hashes.length === 0 && h.add("hash", this);
    const n = new He(t, e);
    this._hashes = this._hashes.filter((r) => r.hash !== t), this._hashes.push(n);
  }
  unlistenHash(t) {
    this._hashes && (this._hashes = this._hashes.filter((e) => e.hash !== t), this._hashes.length === 0 && h.remove("hash", this));
  }
  handleHash(t, e) {
    if (this._hashes)
      for (const n of this._hashes)
        n.handle(t, e);
  }
  listenKey(t, e, n = !1, r = !1, a = "down") {
    this._keyListenerTypes.indexOf(a) === -1 && (this.listen(`key${a}`, this.handlingKey), this._keyListenerTypes.push(a)), this._keys.push(new Me(a, t, e, n, r));
  }
  unlistenKey(t, e) {
    this._keys = this._keys.filter((n) => n.code !== t || n.closure !== e), this._keyListenerTypes.forEach((n) => {
      this._keys.some((r) => r.type === n) || this.unlisten(`key${n}`, this.handlingKey);
    });
  }
  handleKey(t) {
    for (const e of this._keys)
      e.handle(t);
  }
  get isEnabled() {
    return this._isEnabled;
  }
  set isEnabled(t) {
    this._isEnabled = t;
  }
  get isRendering() {
    return this._isRendering;
  }
  set isRendering(t) {
    this._isRendering !== t && (t ? h.add("render", this) : h.remove("render", this), this._isRendering = t);
  }
  render() {
  }
  request(t) {
    this._nexts.push(t), h.getModule("render").request(this);
  }
  next() {
    const t = this._nexts.slice();
    this._nexts.length = 0;
    for (const e of t)
      e && e();
  }
  get isResizing() {
    return this._isResizing;
  }
  set isResizing(t) {
    this._isResizing !== t && (t ? (h.add("resize", this), this.resize()) : h.remove("resize", this), this._isResizing = t);
  }
  resize() {
  }
  isBreakpoint(t) {
    return typeof t == "string" ? ee[t.toUpperCase()].test() : t.test();
  }
  get isScrollLocked() {
    return this._isScrollLocked;
  }
  set isScrollLocked(t) {
    this._isScrollLocked !== t && (t ? h.add("lock", this) : h.remove("lock", this), this._isScrollLocked = t);
  }
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(t) {
    this._isLoading !== t && (t ? h.add("load", this) : h.remove("load", this), this._isLoading = t);
  }
  load() {
  }
  get isSwappingFont() {
    return this._isSwappingFont;
  }
  set isSwappingFont(t) {
    this._isSwappingFont !== t && (t ? h.add("font-swap", this) : h.remove("font-swap", this), this._isSwappingFont = t);
  }
  swapFont() {
  }
  get isMouseMoving() {
    return this._isMouseMoving;
  }
  set isMouseMoving(t) {
    this._isMouseMoving !== t && (t ? h.add("mouse-move", this) : h.remove("mouse-move", this), this._isMouseMoving = t);
  }
  mouseMove(t) {
  }
  examine(t) {
    this.node.matches(this.registration.selector) ? this.mutate(t) : this._dispose();
  }
  mutate(t) {
  }
  retrieveNodeId(t, e) {
    if (t.id)
      return t.id;
    const n = te(`${this.id}-${e}`);
    return this.warn(`add id '${n}' to ${e}`), t.setAttribute("id", n), n;
  }
  get isDisposed() {
    return this._isDisposed;
  }
  _dispose() {
    this.debug(`dispose instance of ${this.registration.instanceClassName} on element [${this.element.id}]`), this.removeAttribute(this.registration.attribute), this.unlisten(), h.remove("hash", this), this._hashes = null, this._keys = null, this.isRendering = !1, this.isResizing = !1, this._nexts = null, h.getModule("render").nexts.remove(this), this.isScrollLocked = !1, this.isLoading = !1, this.isSwappingFont = !1, this.isMouseMoving = !1, this._emitter.dispose(), this._emitter = null, this._ascent.dispose(), this._ascent = null, this._descent.dispose(), this._descent = null, this.element.remove(this);
    for (const t of this._registrations)
      h.remove("register", t);
    this._registrations = null, this.registration.remove(this), this._isDisposed = !0, this.dispose();
  }
  dispose() {
  }
  emit(t, e) {
    return this.element.emit(t, e);
  }
  addEmission(t, e) {
    this._emitter.add(t, e);
  }
  removeEmission(t, e) {
    this._emitter.remove(t, e);
  }
  ascend(t, e) {
    return this.element.ascend(t, e);
  }
  addAscent(t, e) {
    this._ascent.add(t, e);
  }
  removeAscent(t, e) {
    this._ascent.remove(t, e);
  }
  descend(t, e) {
    return this.element.descend(t, e);
  }
  addDescent(t, e) {
    this._descent.add(t, e);
  }
  removeDescent(t, e) {
    this._descent.remove(t, e);
  }
  get style() {
    return this.node.style;
  }
  addClass(t) {
    Xt(this.node, t);
  }
  removeClass(t) {
    Qt(this.node, t);
  }
  hasClass(t) {
    return Jt(this.node, t);
  }
  get classNames() {
    return Ct(this.node);
  }
  remove() {
    this.node.parentNode.removeChild(this.node);
  }
  setAttribute(t, e) {
    this.node.setAttribute(t, e);
  }
  getAttribute(t) {
    return this.node.getAttribute(t);
  }
  hasAttribute(t) {
    return this.node.hasAttribute(t);
  }
  removeAttribute(t) {
    this.node.removeAttribute(t);
  }
  setProperty(t, e) {
    this.node.style.setProperty(t, e);
  }
  removeProperty(t) {
    this.node.style.removeProperty(t);
  }
  focus() {
    this.node.focus();
  }
  blur() {
    this.node.blur();
  }
  focusClosest() {
    const t = this._focusClosest(this.node.parentNode);
    t && t.focus();
  }
  _focusClosest(t) {
    if (!t)
      return null;
    const e = [...Zt(t)];
    if (e.length <= 1)
      return this._focusClosest(t.parentNode);
    {
      const n = e.indexOf(this.node);
      return e[n + (n < e.length - 1 ? 1 : -1)];
    }
  }
  get hasFocus() {
    return this.node === document.activeElement;
  }
  scrollIntoView() {
    const t = this.getRect(), e = h.getModule("lock");
    t.top < 0 && e.move(t.top - 50), t.bottom > window.innerHeight && e.move(t.bottom - window.innerHeight + 50);
  }
  matches(t) {
    return this.node.matches(t);
  }
  querySelector(t) {
    return this.node.querySelector(t);
  }
  querySelectorAll(t) {
    return vt(this.node, t);
  }
  queryParentSelector(t) {
    return yt(this.node, t);
  }
  getRect() {
    const t = this.node.getBoundingClientRect();
    return t.center = t.left + 0.5 * t.width, t.middle = t.top + 0.5 * t.height, t;
  }
  get isLegacy() {
    return h.isLegacy;
  }
}
class Me {
  constructor(t, e, n, r, a) {
    this.type = t, this.eventType = `key${t}`, this.keyCode = e, this.closure = n, this.preventDefault = r === !0, this.stopPropagation = a === !0;
  }
  handle(t) {
    t.type === this.eventType && t.keyCode === this.keyCode.value && (this.closure(t), this.preventDefault && t.preventDefault(), this.stopPropagation && t.stopPropagation());
  }
}
class $e {
  constructor(t, e, n, r) {
    this._node = t, this._type = e, this._closure = n, this._options = r;
  }
  get closure() {
    return this._closure;
  }
  listen() {
    this._node.addEventListener(this._type, this._closure, this._options);
  }
  matchOptions(t = null) {
    switch (!0) {
      case t === null:
      case (typeof this._options == "boolean" && typeof t == "boolean" && this._options === t):
        return !0;
      case Object.keys(this._options).length !== Object.keys(t).length:
        return !1;
      case Object.keys(t).every((e) => this._options[e] === t[e]):
        return !0;
    }
    return !1;
  }
  unlisten() {
    this._node.removeEventListener(this._type, this._closure, this._options);
  }
}
class He {
  constructor(t, e) {
    this.hash = t, this.add = e;
  }
  handle(t, e) {
    this.hash === t && this.add(e);
  }
}
const ut = { DISCLOSE: o.event("disclose"), CONCEAL: o.event("conceal") }, p = { RESET: o.emission("disclosure", "reset"), ADDED: o.emission("disclosure", "added"), RETRIEVE: o.emission("disclosure", "retrieve"), REMOVED: o.emission("disclosure", "removed"), GROUP: o.emission("disclosure", "group"), UNGROUP: o.emission("disclosure", "ungroup"), SPOTLIGHT: o.emission("disclosure", "spotlight") };
class Ot extends b {
  constructor(t, e, n, r) {
    super(), this.type = t, this._selector = e, this.DisclosureButtonInstanceClass = n, this.disclosuresGroupInstanceClassName = r, this.modifier = this._selector + "--" + this.type.id, this._isPristine = !0, this._isRetrievingPrimaries = !1, this._hasRetrieved = !1, this._primaryButtons = [];
  }
  static get instanceClassName() {
    return "Disclosure";
  }
  init() {
    this.addDescent(p.RESET, this.reset.bind(this)), this.addDescent(p.GROUP, this.update.bind(this)), this.addDescent(p.UNGROUP, this.update.bind(this)), this.addAscent(p.SPOTLIGHT, this.disclose.bind(this)), this.register(`[aria-controls="${this.id}"]`, this.DisclosureButtonInstanceClass), this.ascend(p.ADDED), this.listenHash(this.id, this._spotlight.bind(this)), this.update();
  }
  get isEnabled() {
    return super.isEnabled;
  }
  set isEnabled(t) {
    this.isEnabled !== t && (super.isEnabled = t, t ? this.ascend(p.ADDED) : this.ascend(p.REMOVED));
  }
  get isPristine() {
    return this._isPristine;
  }
  get proxy() {
    const t = this, e = Object.assign(super.proxy, { disclose: t.disclose.bind(t), focus: t.focus.bind(t) });
    return this.type.canConceal && (e.conceal = t.conceal.bind(t)), F(e, { get buttons() {
      return t.buttons.map((n) => n.proxy);
    }, get group() {
      const n = t.group;
      return n ? n.proxy : null;
    }, get isDisclosed() {
      return t.isDisclosed;
    } });
  }
  get buttons() {
    return this.getRegisteredInstances(this.DisclosureButtonInstanceClass.instanceClassName);
  }
  update() {
    this.getGroup(), this.retrievePrimaries();
  }
  getGroup() {
    if (!this.disclosuresGroupInstanceClassName)
      return void (this._group = null);
    const t = this.element.getAscendantInstance(this.disclosuresGroupInstanceClassName, this.constructor.instanceClassName);
    t && t.validate(this) ? this._group = t : this._group = null;
  }
  get group() {
    return this._group;
  }
  disclose(t) {
    return !(this.isDisclosed === !0 || !this.isEnabled) && (this._isPristine = !1, this.isDisclosed = !0, !t && this.group && (this.group.current = this), !0);
  }
  conceal(t, e = !0) {
    return this.isDisclosed !== !1 && !(!this.type.canConceal && this.group && this.group.current === this) && (this.isDisclosed = !1, !t && this.group && this.group.current === this && (this.group.current = null), e || this.focus(), this._isPristine || this.descend(p.RESET), !0);
  }
  get isDisclosed() {
    return this._isDisclosed;
  }
  set isDisclosed(t) {
    if (this._isDisclosed !== t && (this.isEnabled || t !== !0)) {
      this.dispatch(t ? ut.DISCLOSE : ut.CONCEAL, this.type), this._isDisclosed = t, t ? this.addClass(this.modifier) : this.removeClass(this.modifier);
      for (let e = 0; e < this.buttons.length; e++)
        this.buttons[e].apply(t);
    }
  }
  get isInitiallyDisclosed() {
    return this.primaryButtons.some((t) => t.isInitiallyDisclosed);
  }
  hasRetrieved() {
    return this._hasRetrieved;
  }
  reset() {
  }
  toggle(t) {
    if (this.type.canConceal)
      switch (!0) {
        case !t:
        case this.isDisclosed:
          this.conceal(!1, !1);
          break;
        default:
          this.disclose();
      }
    else
      this.disclose();
  }
  get buttonHasFocus() {
    return this.buttons.some((t) => t.hasFocus);
  }
  get hasFocus() {
    return !!super.hasFocus || !!this.buttonHasFocus || this.querySelectorAll(":focus").length > 0;
  }
  focus() {
    this._primaryButtons.length > 0 && this._primaryButtons[0].focus();
  }
  get primaryButtons() {
    return this._primaryButtons;
  }
  retrievePrimaries() {
    this._isRetrievingPrimaries || (this._isRetrievingPrimaries = !0, this.request(this._retrievePrimaries.bind(this)));
  }
  _retrievePrimaries() {
    if (this._isRetrievingPrimaries = !1, this._primaryButtons = this._electPrimaries(this.buttons), !this._hasRetrieved && this._primaryButtons.length !== 0) {
      if (this.retrieved(), this._hasRetrieved = !0, this.applyAbility(!0), this.group)
        this.group.retrieve();
      else if (this._isPristine && this.isEnabled && !this.group)
        switch (!0) {
          case this.hash === this.id:
            this._spotlight();
            break;
          case this.isInitiallyDisclosed:
            this.disclose();
        }
    }
  }
  retrieved() {
  }
  _spotlight() {
    this.disclose(), this.request(() => {
      this.ascend(p.SPOTLIGHT);
    });
  }
  _electPrimaries(t) {
    return t.filter((e) => e.canDisclose && !this.node.contains(e.node));
  }
  applyAbility(t = !1) {
    const e = !this._primaryButtons.every((n) => n.isDisabled);
    this.isEnabled !== e && (this.isEnabled = e, t || (!this.isEnabled && this.isDisclosed && (this.group ? this.ascend(p.REMOVED) : this.type.canConceal && this.conceal()), this.isEnabled && (this.group && this.ascend(p.ADDED), this.hash === this.id && this._spotlight())));
  }
  dispose() {
    this._group = null, this._primaryButtons = null, super.dispose(), this.ascend(p.REMOVED);
  }
}
class se extends b {
  constructor(t) {
    super(), this.type = t, this.attributeName = t.ariaState ? "aria-" + t.id : o.attr(t.id), this._canDisclose = !1;
  }
  static get instanceClassName() {
    return "DisclosureButton";
  }
  get isPrimary() {
    return this.registration.creator.primaryButtons.includes(this);
  }
  get canDisclose() {
    return this._canDisclose;
  }
  get isDisabled() {
    return this.type.canDisable && this.hasAttribute("disabled");
  }
  init() {
    this._canDisclose = this.hasAttribute(this.attributeName), this._isInitiallyDisclosed = this.isDisclosed, this._isContained = this.registration.creator.node.contains(this.node), this.controlsId = this.getAttribute("aria-controls"), this.registration.creator.retrievePrimaries(), this.listenClick();
  }
  get proxy() {
    return Object.assign(super.proxy, { focus: this.focus.bind(this) });
  }
  handleClick(t) {
    this.registration.creator && this.registration.creator.toggle(this.canDisclose);
  }
  mutate(t) {
    this._canDisclose = this.hasAttribute(this.attributeName), this.registration.creator.applyAbility(), !this._isApplying && this.isPrimary && t.indexOf(this.attributeName) > -1 && this.registration.creator && (this.isDisclosed ? this.registration.creator.disclose() : this.type.canConceal && this.registration.creator.conceal());
  }
  apply(t) {
    this.canDisclose && (this._isApplying = !0, this.setAttribute(this.attributeName, t), this.request(() => {
      this._isApplying = !1;
    }));
  }
  get isDisclosed() {
    return this.getAttribute(this.attributeName) === "true";
  }
  get isInitiallyDisclosed() {
    return this._isInitiallyDisclosed;
  }
  focus() {
    super.focus(), this.scrollIntoView();
  }
  measure(t) {
    const e = this.rect;
    this._dx = t.x - e.x, this._dy = t.y - e.y;
  }
  get dx() {
    return this._dx;
  }
  get dy() {
    return this._dy;
  }
}
class Pt extends b {
  constructor(t, e) {
    super(e), this.disclosureInstanceClassName = t, this._members = [], this._index = -1, this._isRetrieving = !1, this._hasRetrieved = !1;
  }
  static get instanceClassName() {
    return "DisclosuresGroup";
  }
  init() {
    this.addAscent(p.ADDED, this.update.bind(this)), this.addAscent(p.RETRIEVE, this.retrieve.bind(this)), this.addAscent(p.REMOVED, this.update.bind(this)), this.descend(p.GROUP), this.update();
  }
  get proxy() {
    const t = this, e = { set index(n) {
      t.index = n;
    }, get index() {
      return t.index;
    }, get length() {
      return t.length;
    }, get current() {
      const n = t.current;
      return n ? n.proxy : null;
    }, get members() {
      return t.members.map((n) => n.proxy);
    }, get hasFocus() {
      return t.hasFocus;
    } };
    return F(super.proxy, e);
  }
  validate(t) {
    return !0;
  }
  getMembers() {
    const t = this.element.getDescendantInstances(this.disclosureInstanceClassName, this.constructor.instanceClassName, !0);
    this._members = t.filter(this.validate.bind(this)).filter((e) => e.isEnabled), t.filter((e) => !this._members.includes(e)).forEach((e) => e.conceal());
  }
  retrieve(t = !1) {
    this._isRetrieving || this._hasRetrieved && !t || (this._isRetrieving = !0, this.request(this._retrieve.bind(this)));
  }
  _retrieve() {
    if (this.getMembers(), this._isRetrieving = !1, this._hasRetrieved = !0, this.hash)
      for (let t = 0; t < this.length; t++) {
        const e = this.members[t];
        if (this.hash === e.id)
          return this.index = t, this.request(() => {
            this.ascend(p.SPOTLIGHT);
          }), t;
      }
    for (let t = 0; t < this.length; t++)
      if (this.members[t].isInitiallyDisclosed)
        return this.index = t, t;
    return this.getIndex();
  }
  update() {
    this.getMembers(), this._hasRetrieved && this.getIndex();
  }
  get members() {
    return this._members;
  }
  get length() {
    return this.members ? this.members.length : 0;
  }
  getIndex(t = -1) {
    this._index = void 0;
    let e = t;
    for (let n = 0; n < this.length; n++)
      if (this.members[n].isDisclosed) {
        e = n;
        break;
      }
    return this.index = e, e;
  }
  get index() {
    return this._index;
  }
  set index(t) {
    if (!(t < -1 || t >= this.length || t === this._index)) {
      this._index = t;
      for (let e = 0; e < this.length; e++) {
        const n = this.members[e];
        t === e ? n.isDisclosed || n.disclose(!0) : n.isDisclosed && n.conceal(!0);
      }
      this.apply();
    }
  }
  get current() {
    return this._index === -1 || isNaN(this._index) ? null : this._members[this._index] || null;
  }
  set current(t) {
    this.index = this.members.indexOf(t);
  }
  get hasFocus() {
    const t = this.current;
    return !!t && t.hasFocus;
  }
  apply() {
  }
  dispose() {
    super.dispose(), this.descend(p.UNGROUP), this._members = null;
  }
}
const gt = { EXPAND: { id: "expanded", ariaState: !0, ariaControls: !0, canConceal: !0, canDisable: !0 }, SELECT: { id: "selected", ariaState: !0, ariaControls: !0, canConceal: !1, canDisable: !0 }, OPENED: { id: "opened", ariaState: !1, ariaControls: !0, canConceal: !0, canDisable: !1 } }, Ge = { PREVENT_CONCEAL: o.attr.selector("prevent-conceal") };
class kt extends se {
  constructor() {
    super(gt.EXPAND);
  }
  static get instanceClassName() {
    return "CollapseButton";
  }
}
const z = { COLLAPSE: o.selector("collapse"), COLLAPSING: o.selector("collapsing") }, Y = { CHANGE: o("equisized") }, Ue = { TOGGLE: o.event("toggle") }, Be = { INJECT_SVG: `[${o.attr("inject-svg")}]` }, Fe = { ARTWORK_USE: `${o.selector("artwork")} use` }, We = { ASSESS_FILE: `${o.attr.selector("assess-file")}`, DETAIL: `${o.attr.selector("assess-file")} [class$="__detail"], ${o.attr.selector("assess-file")} [class*="__detail "]` }, O = { UPDATE: o.emission("assess", "update"), ADDED: o.emission("assess", "added") }, ie = ["32x9", "16x9", "3x2", "4x3", "1x1", "3x4", "2x3"], mt = (i, t) => t.map((e) => o.selector(`${i}--${e}`)).join(","), qe = `${o.selector("responsive-img")}, ${mt("responsive-img", ie)}, ${o.selector("responsive-vid")}, ${mt("responsive-vid", ["16x9", "4x3", "1x1"])}`, ze = { RATIO: `${o.selector("ratio")}, ${mt("ratio", ie)}, ${qe}` }, s = window[V], L = { TOP: o.selector("placement--top"), RIGHT: o.selector("placement--right"), BOTTOM: o.selector("placement--bottom"), LEFT: o.selector("placement--left") }, H = { START: o.selector("placement--start"), CENTER: o.selector("placement--center"), END: o.selector("placement--end") }, l = { TOP: "place_top", RIGHT: "place_right", BOTTOM: "place_bottom", LEFT: "place_left" }, u = { START: "align_start", CENTER: "align_center", END: "align_end" }, at = { AUTO: "placement_auto", MANUAL: "placement_manual" };
d.core = { Instance: b, Breakpoints: ee, KeyCodes: Vt, Disclosure: Ot, DisclosureButton: se, DisclosuresGroup: Pt, DisclosureType: gt, DisclosureEvent: ut, DisclosureSelector: Ge, DisclosureEmission: p, Collapse: class extends Ot {
  constructor() {
    super(gt.EXPAND, z.COLLAPSE, kt, "CollapsesGroup");
  }
  static get instanceClassName() {
    return "Collapse";
  }
  init() {
    super.init(), this.listen("transitionend", this.transitionend.bind(this));
  }
  transitionend(i) {
    this.removeClass(z.COLLAPSING), this.isDisclosed || (this.isLegacy ? this.style.maxHeight = "" : this.style.removeProperty("--collapse-max-height"));
  }
  unbound() {
    this.isLegacy ? this.style.maxHeight = "none" : this.style.setProperty("--collapse-max-height", "none");
  }
  disclose(i) {
    if (this.isDisclosed === !0 || !this.isEnabled)
      return !1;
    this.unbound(), this.request(() => {
      this.addClass(z.COLLAPSING), this.adjust(), this.request(() => {
        super.disclose(i);
      });
    });
  }
  conceal(i, t) {
    if (this.isDisclosed === !1)
      return !1;
    this.request(() => {
      this.addClass(z.COLLAPSING), this.adjust(), this.request(() => {
        super.conceal(i, t);
      });
    });
  }
  adjust() {
    this.setProperty("--collapser", "none");
    const i = this.node.offsetHeight;
    this.setProperty("--collapse", -i + "px"), this.setProperty("--collapser", "");
  }
  reset() {
    this.isPristine || (this.isDisclosed = !1);
  }
  _electPrimaries(i) {
    const t = this.element.parent.instances.map((a) => a.collapsePrimary).filter((a) => a !== void 0 && i.indexOf(a) > -1);
    if (t.length === 1)
      return t;
    if ((i = super._electPrimaries(i)).length === 1)
      return i;
    const e = i.filter((a) => a.dy >= 0);
    if (e.length > 0 && (i = e), i.length === 1)
      return i;
    const n = Math.min(...i.map((a) => a.dy)), r = i.filter((a) => a.dy === n);
    return r.length > 0 && (i = r), i.length === 1 || i.sort((a, c) => Math.abs(c.dx) - Math.abs(a.dx)), i;
  }
}, CollapseButton: kt, CollapsesGroup: class extends Pt {
  constructor() {
    super("Collapse");
  }
  static get instanceClassName() {
    return "CollapsesGroup";
  }
}, CollapseSelector: z, RootSelector: { ROOT: ":root" }, RootEmission: Q, Equisized: class extends b {
  static get instanceClassName() {
    return "Equisized";
  }
  init() {
    this.ascend(Y.CHANGE);
  }
  measure() {
    return this.isLegacy && (this.style.width = "auto"), this.getRect().width;
  }
  adjust(i) {
    this.isLegacy && (this.style.width = `${i}px`);
  }
  dispose() {
    this.ascend(Y.CHANGE);
  }
}, EquisizedEmission: Y, Toggle: class extends b {
  static get instanceClassName() {
    return "Toggle";
  }
  init() {
    this.pressed = this.pressed === "true", this.listenClick();
  }
  handleClick() {
    this.toggle();
  }
  toggle() {
    this.pressed = this.pressed !== "true";
  }
  get pressed() {
    return this.getAttribute("aria-pressed");
  }
  set pressed(i) {
    this.setAttribute("aria-pressed", i ? "true" : "false"), this.dispatch(Ue.TOGGLE, i);
  }
  get proxy() {
    const i = this, t = Object.assign(super.proxy, { toggle: i.toggle.bind(i) });
    return F(t, { get pressed() {
      return i.pressed;
    }, set pressed(e) {
      i.pressed = e;
    } });
  }
}, EquisizedsGroup: class extends b {
  static get instanceClassName() {
    return "EquisizedsGroup";
  }
  init() {
    this.isResizing = !0, this.isLoading = !0, this.addAscent(Y.CHANGE, this.resize.bind(this));
  }
  load() {
    this.resize();
  }
  resize() {
    const i = this.element.getDescendantInstances("Equisized");
    this.isLegacy || this.style.setProperty("--equisized-width", "auto");
    const t = Math.max(...i.map((e) => e.measure()));
    this.isLegacy ? i.forEach((e) => e.adjust(t)) : this.style.setProperty("--equisized-width", `${t}px`);
  }
}, InjectSvg: class extends b {
  static get instanceClassName() {
    return "InjectSvg";
  }
  init() {
    this.node && (this.img = this.node.querySelector("img")), this.isLegacy || this.replace();
  }
  get proxy() {
    const i = this;
    return Object.assign(super.proxy, { replace: i.replace.bind(i), restore: i.restore.bind(i) });
  }
  fetch() {
    this.img && (this.imgID = this.img.getAttribute("id"), this.imgClass = this.img.getAttribute("class"), this.imgURL = this.img.getAttribute("src"), fetch(this.imgURL).then((i) => i.text()).then((i) => {
      const t = new DOMParser().parseFromString(i, "text/html");
      this.svg = t.querySelector("svg"), this.svg && this.replace();
    }));
  }
  replace() {
    if (!this.svg)
      return void this.fetch();
    this.imgID && this.imgID !== void 0 && this.svg.setAttribute("id", this.imgID);
    let i = this.imgURL.match(/[ \w-]+\./)[0];
    i && (i = i.slice(0, -1), ["dark", "light", "system"].includes(i) && (this.svg.innerHTML = this.svg.innerHTML.replaceAll('id="artwork-', `id="${i}-artwork-`), this.svg.innerHTML = this.svg.innerHTML.replaceAll('"#artwork-', `"#${i}-artwork-`))), this.imgClass && this.imgClass !== void 0 && this.svg.setAttribute("class", this.imgClass), this.svg.hasAttribute("xmlns:a") && this.svg.removeAttribute("xmlns:a"), this.node.setAttribute("data-fr-inject-svg", !0);
    var t, e;
    t = this.svg, e = { "aria-hidden": !0, focusable: !1 }, Object.keys(e).forEach((n) => t.setAttribute(n, e[n])), this.node.replaceChild(this.svg, this.img);
  }
  restore() {
    this.img && this.svg && (this.node.setAttribute("data-fr-inject-svg", !1), this.node.replaceChild(this.img, this.svg));
  }
}, InjectSvgSelector: Be, Artwork: class extends b {
  static get instanceClassName() {
    return "Artwork";
  }
  init() {
    this.isLegacy && this.replace();
  }
  get proxy() {
    return Object.assign(super.proxy, { replace: this.replace.bind(this) });
  }
  fetch() {
    this.xlink = this.node.getAttribute("href");
    const i = this.xlink.split("#");
    this.svgUrl = i[0], this.svgName = i[1];
    const t = new XMLHttpRequest();
    t.onload = () => {
      const e = new DOMParser().parseFromString(t.responseText, "text/html");
      this.realSvgContent = e.getElementById(this.svgName), this.realSvgContent && (this.realSvgContent.classList.add(this.node.classList), this.replace());
    }, t.open("GET", this.svgUrl), t.send();
  }
  replace() {
    this.realSvgContent ? this.node.parentNode.replaceChild(this.realSvgContent, this.node) : this.fetch();
  }
}, ArtworkSelector: Fe, AssessFile: class extends b {
  static get instanceClassName() {
    return "AssessFile";
  }
  init() {
    this.lang = this.getLang(this.node), this.href = this.getAttribute("href"), this.hreflang = this.getAttribute("hreflang"), this.file = {}, this.gather(), this.addAscent(O.ADDED, this.update.bind(this)), this.addDescent(O.ADDED, this.update.bind(this));
  }
  getFileLength() {
    this.href !== void 0 ? fetch(this.href, { method: "HEAD", mode: "cors" }).then((i) => {
      this.length = i.headers.get("content-length") || -1, this.length === -1 && g.warn("File size unknown: " + this.href + `
Unable to get HTTP header: "content-length"`), this.gather();
    }) : this.length = -1;
  }
  mutate(i) {
    i.indexOf("href") !== -1 && (this.href = this.getAttribute("href"), this.getFileLength()), i.indexOf("hreflang") !== -1 && (this.hreflang = this.getAttribute("hreflang"), this.gather());
  }
  gather() {
    if (this.isLegacy && (this.length = -1), this.length) {
      if (this.details = [], this.href) {
        const i = this.parseExtension(this.href);
        i && this.details.push(i.toUpperCase());
      }
      this.length !== -1 && this.details.push(this.bytesToSize(this.length)), this.hreflang && this.details.push(this.getLangDisplayName(this.hreflang)), this.update();
    } else
      this.getFileLength();
  }
  update() {
    this.details && (this.descend(O.UPDATE, this.details), this.ascend(O.UPDATE, this.details));
  }
  getLang(i) {
    return i.lang ? i.lang : document.documentElement === i ? window.navigator.language : this.getLang(i.parentElement);
  }
  parseExtension(i) {
    return i.match(/\.(\w{1,9})(?:$|[?#])/)[0].replace(".", "");
  }
  getLangDisplayName(i) {
    if (this.isLegacy)
      return i;
    const t = new Intl.DisplayNames([this.lang], { type: "language" }).of(i);
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  bytesToSize(i) {
    if (i === -1)
      return null;
    let t = ["octets", "ko", "Mo", "Go", "To"];
    this.getAttribute(o.attr("assess-file")) === "bytes" && (t = ["bytes", "KB", "MB", "GB", "TB"]);
    const e = parseInt(Math.floor(Math.log(i) / Math.log(1e3)), 10);
    if (e === 0)
      return `${i} ${t[e]}`;
    const n = i / 1e3 ** e, r = Math.round(100 * (n + Number.EPSILON)) / 100;
    return `${String(r).replace(".", ",")} ${t[e]}`;
  }
}, AssessDetail: class extends b {
  static get instanceClassName() {
    return "AssessDetail";
  }
  init() {
    this.addDescent(O.UPDATE, this.update.bind(this)), this.ascend(O.ADDED);
  }
  update(i) {
    this.node.innerHTML = i.join(" - ");
  }
}, AssessEmission: O, AssessSelector: We, Ratio: class extends b {
  static get instanceClassName() {
    return "Ratio";
  }
  init() {
    if (!s.internals.support.supportAspectRatio()) {
      this.ratio = 16 / 9;
      for (const i in this.classNames)
        if (this.registration.selector.indexOf(this.classNames[i]) > 0) {
          const t = this.classNames[i].split("ratio-");
          t[1] && (this.ratio = t[1].split("x")[0] / t[1].split("x")[1]);
        }
      this.isRendering = !0, this.update();
    }
  }
  render() {
    this.getRect().width !== this.currentWidth && this.update();
  }
  update() {
    this.currentWidth = this.getRect().width, this.style.height = this.currentWidth / this.ratio + "px";
  }
}, RatioSelector: ze, Placement: class extends b {
  constructor(i = at.AUTO, t = [l.BOTTOM, l.TOP, l.LEFT, l.RIGHT], e = [u.CENTER, u.START, u.END], n = 16) {
    super(), this._mode = i, this._places = t, this._aligns = e, this._safeAreaMargin = n, this._isShown = !1;
  }
  static get instanceClassName() {
    return "Placement";
  }
  init() {
    this.isResizing = !0;
  }
  get proxy() {
    const i = this, t = Object.assign(super.proxy, { show: i.show.bind(i), hide: i.hide.bind(i) });
    return F(t, { get mode() {
      return i.mode;
    }, set mode(e) {
      i.mode = e;
    }, get place() {
      return i.place;
    }, set place(e) {
      i.place = e;
    }, get align() {
      return i.align;
    }, set align(e) {
      i.align = e;
    }, get isShown() {
      return i.isShown;
    }, set isShown(e) {
      i.isShown = e;
    } });
  }
  get mode() {
    return this._mode;
  }
  set mode(i) {
    this._mode = i;
  }
  get place() {
    return this._place;
  }
  set place(i) {
    if (this._place !== i) {
      switch (this._place) {
        case l.TOP:
          this.removeClass(L.TOP);
          break;
        case l.RIGHT:
          this.removeClass(L.RIGHT);
          break;
        case l.BOTTOM:
          this.removeClass(L.BOTTOM);
          break;
        case l.LEFT:
          this.removeClass(L.LEFT);
      }
      switch (this._place = i, this._place) {
        case l.TOP:
          this.addClass(L.TOP);
          break;
        case l.RIGHT:
          this.addClass(L.RIGHT);
          break;
        case l.BOTTOM:
          this.addClass(L.BOTTOM);
          break;
        case l.LEFT:
          this.addClass(L.LEFT);
      }
    }
  }
  get align() {
    return this._align;
  }
  set align(i) {
    if (this._align !== i) {
      switch (this._align) {
        case u.START:
          this.removeClass(H.START);
          break;
        case u.CENTER:
          this.removeClass(H.CENTER);
          break;
        case u.END:
          this.removeClass(H.END);
      }
      switch (this._align = i, this._align) {
        case u.START:
          this.addClass(H.START);
          break;
        case u.CENTER:
          this.addClass(H.CENTER);
          break;
        case u.END:
          this.addClass(H.END);
      }
    }
  }
  show() {
    this.isShown = !0;
  }
  hide() {
    this.isShown = !1;
  }
  get isShown() {
    return this._isShown;
  }
  set isShown(i) {
    this._isShown !== i && this.isEnabled && (this.isRendering = i, this._isShown = i);
  }
  setReferent(i) {
    this._referent = i;
  }
  resize() {
    this.safeArea = { top: this._safeAreaMargin, right: window.innerWidth - this._safeAreaMargin, bottom: window.innerHeight - this._safeAreaMargin, left: this._safeAreaMargin, center: 0.5 * window.innerWidth, middle: 0.5 * window.innerHeight };
  }
  render() {
    if (!this._referent)
      return;
    if (this.rect = this.getRect(), this.referentRect = this._referent.getRect(), this.mode === at.AUTO)
      switch (this.place = this.getPlace(), this.place) {
        case l.TOP:
        case l.BOTTOM:
          this.align = this.getHorizontalAlign();
          break;
        case l.LEFT:
        case l.RIGHT:
          this.align = this.getVerticalAlign();
      }
    let i, t;
    switch (this.place) {
      case l.TOP:
        t = this.referentRect.top - this.rect.height;
        break;
      case l.RIGHT:
        i = this.referentRect.right;
        break;
      case l.BOTTOM:
        t = this.referentRect.bottom;
        break;
      case l.LEFT:
        i = this.referentRect.left - this.rect.width;
    }
    switch (this.place) {
      case l.TOP:
      case l.BOTTOM:
        switch (this.align) {
          case u.CENTER:
            i = this.referentRect.center - 0.5 * this.rect.width;
            break;
          case u.START:
            i = this.referentRect.left;
            break;
          case u.END:
            i = this.referentRect.right - this.rect.width;
        }
        break;
      case l.RIGHT:
      case l.LEFT:
        switch (this.align) {
          case u.CENTER:
            t = this.referentRect.middle - 0.5 * this.rect.height;
            break;
          case u.START:
            t = this.referentRect.top;
            break;
          case u.END:
            t = this.referentRect.bottom - this.rect.height;
        }
    }
    this._x === i && this._y === t || (this._x = i + 0.5 | 0, this._y = t + 0.5 | 0, this.node.style.transform = `translate(${this._x}px,${this._y}px)`);
  }
  getPlace() {
    for (const i of this._places)
      switch (i) {
        case l.TOP:
          if (this.referentRect.top - this.rect.height > this.safeArea.top)
            return l.TOP;
          break;
        case l.RIGHT:
          if (this.referentRect.right + this.rect.width < this.safeArea.right)
            return l.RIGHT;
          break;
        case l.BOTTOM:
          if (this.referentRect.bottom + this.rect.height < this.safeArea.bottom)
            return l.BOTTOM;
          break;
        case l.LEFT:
          if (this.referentRect.left - this.rect.width > this.safeArea.left)
            return l.LEFT;
      }
    return this._places[0];
  }
  getHorizontalAlign() {
    for (const i of this._aligns)
      switch (i) {
        case u.CENTER:
          if (this.referentRect.center - 0.5 * this.rect.width > this.safeArea.left && this.referentRect.center + 0.5 * this.rect.width < this.safeArea.right)
            return u.CENTER;
          break;
        case u.START:
          if (this.referentRect.left + this.rect.width < this.safeArea.right)
            return u.START;
          break;
        case u.END:
          if (this.referentRect.right - this.rect.width > this.safeArea.left)
            return u.END;
      }
    return this._aligns[0];
  }
  getVerticalAlign() {
    for (const i of this._aligns)
      switch (i) {
        case u.CENTER:
          if (this.referentRect.middle - 0.5 * this.rect.height > this.safeArea.top && this.referentRect.middle + 0.5 * this.rect.height < this.safeArea.bottom)
            return u.CENTER;
          break;
        case u.START:
          if (this.referentRect.top + this.rect.height < this.safeArea.bottom)
            return u.START;
          break;
        case u.END:
          if (this.referentRect.bottom - this.rect.height > this.safeArea.top)
            return u.END;
      }
    return this._aligns[0];
  }
  dispose() {
    this._referent = null, super.dispose();
  }
}, PlacementReferent: class extends b {
  constructor() {
    super(), this._isShown = !1;
  }
  static get instanceClassName() {
    return "PlacementReferent";
  }
  init() {
    this.registration.creator.setReferent(this), this._placement = this.registration.creator;
  }
  get placement() {
    return this._placement;
  }
  get isShown() {
    return this._isShown;
  }
  set isShown(i) {
    this._isShown !== i && this.isEnabled && (this._isShown = i, i ? this.registration.creator.show() : this.registration.creator.hide());
  }
  show() {
    this.isShown = !0;
  }
  hide() {
    this.isShown = !1;
  }
}, PlacementAlign: u, PlacementPosition: l, PlacementMode: at }, d.internals.register(d.core.CollapseSelector.COLLAPSE, d.core.Collapse), d.internals.register(d.core.InjectSvgSelector.INJECT_SVG, d.core.InjectSvg), d.internals.register(d.core.RatioSelector.RATIO, d.core.Ratio), d.internals.register(d.core.AssessSelector.ASSESS_FILE, d.core.AssessFile), d.internals.register(d.core.AssessSelector.DETAIL, d.core.AssessDetail);
const A = { SYSTEM: "system", LIGHT: "light", DARK: "dark" }, S = { THEME: s.internals.ns.attr("theme"), SCHEME: s.internals.ns.attr("scheme"), TRANSITION: s.internals.ns.attr("transition") }, R = { LIGHT: "light", DARK: "dark" }, G = { SCHEME: s.internals.ns.emission("scheme", "scheme"), THEME: s.internals.ns.emission("scheme", "theme"), ASK: s.internals.ns.emission("scheme", "ask") }, pt = { SCHEME: s.internals.ns.event("scheme"), THEME: s.internals.ns.event("theme") };
class je extends s.core.Instance {
  constructor() {
    super(!1);
  }
  static get instanceClassName() {
    return "Scheme";
  }
  init() {
    this.changing = this.change.bind(this), this.hasAttribute(S.TRANSITION) && (this.removeAttribute(S.TRANSITION), this.request(this.restoreTransition.bind(this)));
    const t = s.internals.support.supportLocalStorage() ? localStorage.getItem("scheme") : "", e = this.getAttribute(S.SCHEME);
    switch (t) {
      case A.DARK:
      case A.LIGHT:
      case A.SYSTEM:
        this.scheme = t;
        break;
      default:
        switch (e) {
          case A.DARK:
            this.scheme = A.DARK;
            break;
          case A.LIGHT:
            this.scheme = A.LIGHT;
            break;
          default:
            this.scheme = A.SYSTEM;
        }
    }
    this.addAscent(G.ASK, this.ask.bind(this)), this.addAscent(G.SCHEME, this.apply.bind(this));
  }
  get proxy() {
    const t = this, e = { get scheme() {
      return t.scheme;
    }, set scheme(n) {
      t.scheme = n;
    } };
    return s.internals.property.completeAssign(super.proxy, e);
  }
  restoreTransition() {
    this.setAttribute(S.TRANSITION, "");
  }
  ask() {
    this.descend(G.SCHEME, this.scheme);
  }
  apply(t) {
    this.scheme = t;
  }
  get scheme() {
    return this._scheme;
  }
  set scheme(t) {
    if (this._scheme !== t) {
      switch (this._scheme = t, t) {
        case A.SYSTEM:
          this.listenPreferences();
          break;
        case A.DARK:
          this.unlistenPreferences(), this.theme = R.DARK;
          break;
        case A.LIGHT:
          this.unlistenPreferences(), this.theme = R.LIGHT;
          break;
        default:
          return void (this.scheme = A.SYSTEM);
      }
      this.descend(G.SCHEME, t), s.internals.support.supportLocalStorage() && localStorage.setItem("scheme", t), this.setAttribute(S.SCHEME, t), this.dispatch(pt.SCHEME, { scheme: this._scheme });
    }
  }
  get theme() {
    return this._theme;
  }
  set theme(t) {
    if (this._theme !== t)
      switch (t) {
        case R.LIGHT:
        case R.DARK:
          this._theme = t, this.setAttribute(S.THEME, t), this.descend(G.THEME, t), this.dispatch(pt.THEME, { theme: this._theme }), document.documentElement.style.colorScheme = t === R.DARK ? "dark" : "";
      }
  }
  listenPreferences() {
    this.isListening || (this.isListening = !0, this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)"), this.mediaQuery.addEventListener && this.mediaQuery.addEventListener("change", this.changing), this.change());
  }
  unlistenPreferences() {
    this.isListening && (this.isListening = !1, this.mediaQuery.removeEventListener("change", this.changing), this.mediaQuery = null);
  }
  change() {
    this.isListening && (this.theme = this.mediaQuery.matches ? R.DARK : R.LIGHT);
  }
  mutate(t) {
    t.indexOf(S.SCHEME) > -1 && (this.scheme = this.getAttribute(S.SCHEME)), t.indexOf(S.THEME) > -1 && (this.theme = this.getAttribute(S.THEME));
  }
  dispose() {
    this.unlistenPreferences();
  }
}
const Ve = { SCHEME: `:root${s.internals.ns.attr.selector("theme")}, :root${s.internals.ns.attr.selector("scheme")}`, SWITCH_THEME: s.internals.ns.selector("switch-theme"), RADIO_BUTTONS: `input[name="${s.internals.ns("radios-theme")}"]` };
s.scheme = { Scheme: je, SchemeValue: A, SchemeSelector: Ve, SchemeEmission: G, SchemeTheme: R, SchemeEvent: pt }, s.internals.register(s.scheme.SchemeSelector.SCHEME, s.scheme.Scheme);
const y = s.internals.ns.selector("accordion"), P = s.internals.ns.selector("collapse"), tt = { GROUP: s.internals.ns.selector("accordions-group"), ACCORDION: y, COLLAPSE: `${y} > ${P}, ${y} > *:not(${y}):not(${P}) > ${P}, ${y} > *:not(${y}):not(${P}) > *:not(${y}):not(${P}) > ${P}`, COLLAPSE_LEGACY: `${y} ${P}`, BUTTON: `${y}__btn` };
class Ke extends s.core.Instance {
  static get instanceClassName() {
    return "Accordion";
  }
  get collapsePrimary() {
    return this.element.children.map((t) => t.getInstance("CollapseButton")).filter((t) => t !== null && t.hasClass(tt.BUTTON))[0];
  }
}
class Ye extends s.core.CollapsesGroup {
  static get instanceClassName() {
    return "AccordionsGroup";
  }
  validate(t) {
    const e = t.node.matches(s.internals.legacy.isLegacy ? tt.COLLAPSE_LEGACY : tt.COLLAPSE);
    return super.validate(t) && e;
  }
}
s.accordion = { Accordion: Ke, AccordionSelector: tt, AccordionsGroup: Ye }, s.internals.register(s.accordion.AccordionSelector.GROUP, s.accordion.AccordionsGroup), s.internals.register(s.accordion.AccordionSelector.ACCORDION, s.accordion.Accordion);
const Xe = { EQUISIZED_BUTTON: `${s.internals.ns.selector("btns-group--equisized")} ${s.internals.ns.selector("btn")}`, EQUISIZED_GROUP: s.internals.ns.selector("btns-group--equisized") };
s.button = { ButtonSelector: Xe }, s.internals.register(s.button.ButtonSelector.EQUISIZED_BUTTON, s.core.Equisized), s.internals.register(s.button.ButtonSelector.EQUISIZED_GROUP, s.core.EquisizedsGroup);
class Qe extends s.core.Instance {
  static get instanceClassName() {
    return "CardDownload";
  }
  init() {
    this.addAscent(s.core.AssessEmission.UPDATE, (t) => {
      this.descend(s.core.AssessEmission.UPDATE, t);
    }), this.addAscent(s.core.AssessEmission.ADDED, () => {
      this.descend(s.core.AssessEmission.ADDED);
    });
  }
}
const Je = { DOWNLOAD: s.internals.ns.selector("card--download"), DOWNLOAD_DETAIL: `${s.internals.ns.selector("card--download")} ${s.internals.ns.selector("card__end")} ${s.internals.ns.selector("card__detail")}` };
s.card = { CardSelector: Je, CardDownload: Qe }, s.internals.register(s.card.CardSelector.DOWNLOAD, s.card.CardDownload), s.internals.register(s.card.CardSelector.DOWNLOAD_DETAIL, s.core.AssessDetail);
const _t = { SEGMENTED: s.internals.ns.selector("segmented"), SEGMENTED_ELEMENTS: s.internals.ns.selector("segmented__elements"), SEGMENTED_ELEMENT: s.internals.ns.selector("segmented__element input"), SEGMENTED_LEGEND: s.internals.ns.selector("segmented__legend") }, j = { ADDED: s.internals.ns.emission("segmented", "added"), REMOVED: s.internals.ns.emission("segmented", "removed") };
class Ze extends s.core.Instance {
  static get instanceClassName() {
    return "Segmented";
  }
  init() {
    this.elements = this.node.querySelector(_t.SEGMENTED_ELEMENTS), this.legend = this.node.querySelector(_t.SEGMENTED_LEGEND), this.addAscent(j.ADDED, this.resize.bind(this)), this.addAscent(j.REMOVED, this.resize.bind(this)), this._isLegendInline = this.legend && this.legend.classList.contains(`${s.prefix}-segmented__legend--inline`), this.isResizing = !0;
  }
  resize() {
    const t = `${s.prefix}-segmented--vertical`, e = `${s.prefix}-segmented__legend--inline`;
    this.removeClass(t), this._isLegendInline && (this.legend.classList.add(e), (this.node.offsetWidth > this.node.parentNode.offsetWidth || this.elements.scrollWidth + this.legend.offsetWidth + 16 > this.node.parentNode.offsetWidth) && this.legend.classList.remove(e)), this.elements.offsetWidth > this.node.parentNode.offsetWidth || this.elements.scrollWidth > this.node.parentNode.offsetWidth ? this.addClass(t) : this.removeClass(t);
  }
}
class ts extends s.core.Instance {
  static get instanceClassName() {
    return "SegmentedElement";
  }
  init() {
    this.ascend(j.ADDED);
  }
  dispose() {
    this.ascend(j.REMOVED);
  }
}
s.segmented = { SegmentedSelector: _t, SegmentedEmission: j, SegmentedElement: ts, Segmented: Ze }, s.internals.register(s.segmented.SegmentedSelector.SEGMENTED, s.segmented.Segmented), s.internals.register(s.segmented.SegmentedSelector.SEGMENTED_ELEMENT, s.segmented.SegmentedElement);
const ne = { BREADCRUMB: s.internals.ns.selector("breadcrumb"), BUTTON: s.internals.ns.selector("breadcrumb__button") };
class es extends s.core.Instance {
  constructor() {
    super(), this.count = 0, this.focusing = this.focus.bind(this);
  }
  static get instanceClassName() {
    return "Breadcrumb";
  }
  init() {
    this.getCollapse(), this.isResizing = !0;
  }
  get proxy() {
    const t = this;
    return Object.assign(super.proxy, { focus: t.focus.bind(t), disclose: t.collapse.disclose.bind(t.collapse) });
  }
  getCollapse() {
    const t = this.collapse;
    t ? t.listen(s.core.DisclosureEvent.DISCLOSE, this.focusing) : this.addAscent(s.core.DisclosureEmission.ADDED, this.getCollapse.bind(this));
  }
  resize() {
    const t = this.collapse, e = this.links;
    t && e.length && (this.isBreakpoint(s.core.Breakpoints.MD) ? t.buttonHasFocus && e[0].focus() : e.indexOf(document.activeElement) > -1 && t.focus());
  }
  get links() {
    return [...this.querySelectorAll("a[href]")];
  }
  get collapse() {
    return this.element.getDescendantInstances(s.core.Collapse.instanceClassName, null, !0)[0];
  }
  focus() {
    this.count = 0, this._focus();
  }
  _focus() {
    const t = this.links[0];
    t && (t.focus(), this.request(this.verify.bind(this)));
  }
  verify() {
    if (this.count++, this.count > 100)
      return;
    const t = this.links[0];
    t && document.activeElement !== t && this._focus();
  }
  get collapsePrimary() {
    return this.element.children.map((t) => t.getInstance("CollapseButton")).filter((t) => t !== null && t.hasClass(ne.BUTTON))[0];
  }
}
s.breadcrumb = { BreadcrumbSelector: ne, Breadcrumb: es }, s.internals.register(s.breadcrumb.BreadcrumbSelector.BREADCRUMB, s.breadcrumb.Breadcrumb);
const et = { TOOLTIP: s.internals.ns.selector("tooltip"), SHOWN: s.internals.ns.selector("tooltip--shown"), BUTTON: s.internals.ns.selector("btn--tooltip") }, Mt = 1, $t = 2;
class ss extends s.core.PlacementReferent {
  constructor() {
    super(), this._state = 0;
  }
  static get instanceClassName() {
    return "TooltipReferent";
  }
  init() {
    if (super.init(), this.listen("focusin", this.focusIn.bind(this)), this.listen("focusout", this.focusOut.bind(this)), !this.matches(et.BUTTON)) {
      const t = this.mouseover.bind(this);
      this.listen("mouseover", t), this.placement.listen("mouseover", t);
      const e = this.mouseout.bind(this);
      this.listen("mouseout", e), this.placement.listen("mouseout", e);
    }
    this.addEmission(s.core.RootEmission.KEYDOWN, this._keydown.bind(this)), this.listen("click", this._click.bind(this)), this.addEmission(s.core.RootEmission.CLICK, this._clickOut.bind(this));
  }
  _click() {
    this.focus();
  }
  _clickOut(t) {
    this.node.contains(t) || this.blur();
  }
  _keydown(t) {
    t === s.core.KeyCodes.ESCAPE && (this.blur(), this.close());
  }
  close() {
    this.state = 0;
  }
  get state() {
    return this._state;
  }
  set state(t) {
    this._state !== t && (this.isShown = t > 0, this._state = t);
  }
  focusIn() {
    this.state |= Mt;
  }
  focusOut() {
    this.state &= ~Mt;
  }
  mouseover() {
    this.state |= $t;
  }
  mouseout() {
    this.state &= ~$t;
  }
}
const bt = { SHOW: o.event("show"), HIDE: o.event("hide") }, ot = "hidden", Ht = "shown", Gt = "hiding";
class is extends s.core.Placement {
  constructor() {
    super(s.core.PlacementMode.AUTO, [s.core.PlacementPosition.TOP, s.core.PlacementPosition.BOTTOM], [s.core.PlacementAlign.CENTER, s.core.PlacementAlign.START, s.core.PlacementAlign.END]), this.modifier = "", this._state = ot;
  }
  static get instanceClassName() {
    return "Tooltip";
  }
  init() {
    super.init(), this.register(`[aria-describedby="${this.id}"]`, ss), this.listen("transitionend", this.transitionEnd.bind(this));
  }
  transitionEnd() {
    this._state === Gt && (this._state = ot, this.isShown = !1);
  }
  get isShown() {
    return super.isShown;
  }
  set isShown(t) {
    if (this.isEnabled)
      switch (!0) {
        case t:
          this._state = Ht, this.addClass(et.SHOWN), this.dispatch(bt.SHOW), super.isShown = !0;
          break;
        case (this.isShown && !t && this._state === Ht):
          this._state = Gt, this.removeClass(et.SHOWN);
          break;
        case (this.isShown && !t && this._state === ot):
          this.dispatch(bt.HIDE), super.isShown = !1;
      }
  }
  render() {
    super.render();
    let t = this.referentRect.center - this.rect.center;
    const e = 0.5 * this.rect.width - 8;
    t < -e && (t = -e), t > e && (t = e), this.setProperty("--arrow-x", `${t.toFixed(2)}px`);
  }
}
s.tooltip = { Tooltip: is, TooltipSelector: et, TooltipEvent: bt }, s.internals.register(s.tooltip.TooltipSelector.TOOLTIP, s.tooltip.Tooltip);
class ns extends s.core.Instance {
  static get instanceClassName() {
    return "ToggleInput";
  }
  get isChecked() {
    return this.node.checked;
  }
}
class rs extends s.core.Instance {
  static get instanceClassName() {
    return "ToggleStatusLabel";
  }
  init() {
    this.register(`input[id="${this.getAttribute("for")}"]`, ns), this.update(), this.isSwappingFont = !0;
  }
  get proxy() {
    return Object.assign(super.proxy, { update: this.update.bind(this) });
  }
  get input() {
    return this.getRegisteredInstances("ToggleInput")[0];
  }
  update() {
    this.node.style.removeProperty("--toggle-status-width");
    const t = this.input.isChecked, e = getComputedStyle(this.node, ":before");
    let n = parseFloat(e.width);
    this.input.node.checked = !t;
    const r = getComputedStyle(this.node, ":before"), a = parseFloat(r.width);
    a > n && (n = a), this.input.node.checked = t, this.node.style.setProperty("--toggle-status-width", n / 16 + "rem");
  }
  swapFont(t) {
    this.update();
  }
}
const as = { STATUS_LABEL: `${s.internals.ns.selector("toggle__label")}${s.internals.ns.attr.selector("checked-label")}${s.internals.ns.attr.selector("unchecked-label")}` };
s.toggle = { ToggleStatusLabel: rs, ToggleSelector: as }, s.internals.register(s.toggle.ToggleSelector.STATUS_LABEL, s.toggle.ToggleStatusLabel);
const k = s.internals.ns.selector("sidemenu__item"), M = s.internals.ns.selector("collapse"), st = { LIST: s.internals.ns.selector("sidemenu__list"), COLLAPSE: `${k} > ${M}, ${k} > *:not(${k}):not(${M}) > ${M}, ${k} > *:not(${k}):not(${M}) > *:not(${k}):not(${M}) > ${M}`, COLLAPSE_LEGACY: `${k} ${M}`, ITEM: s.internals.ns.selector("sidemenu__item"), BUTTON: s.internals.ns.selector("sidemenu__btn") };
class os extends s.core.CollapsesGroup {
  static get instanceClassName() {
    return "SidemenuList";
  }
  validate(t) {
    return super.validate(t) && t.node.matches(s.internals.legacy.isLegacy ? st.COLLAPSE_LEGACY : st.COLLAPSE);
  }
}
class hs extends s.core.Instance {
  static get instanceClassName() {
    return "SidemenuItem";
  }
  get collapsePrimary() {
    return this.element.children.map((t) => t.getInstance("CollapseButton")).filter((t) => t !== null && t.hasClass(st.BUTTON))[0];
  }
}
s.sidemenu = { SidemenuList: os, SidemenuItem: hs, SidemenuSelector: st }, s.internals.register(s.sidemenu.SidemenuSelector.LIST, s.sidemenu.SidemenuList), s.internals.register(s.sidemenu.SidemenuSelector.ITEM, s.sidemenu.SidemenuItem);
const B = { MODAL: s.internals.ns.selector("modal"), SCROLL_DIVIDER: s.internals.ns.selector("scroll-divider"), BODY: s.internals.ns.selector("modal__body"), TITLE: s.internals.ns.selector("modal__title") };
class re extends s.core.DisclosureButton {
  constructor() {
    super(s.core.DisclosureType.OPENED);
  }
  static get instanceClassName() {
    return "ModalButton";
  }
}
const cs = { CONCEALING_BACKDROP: s.internals.ns.attr("concealing-backdrop") };
class ls extends s.core.Disclosure {
  constructor() {
    super(s.core.DisclosureType.OPENED, B.MODAL, re, "ModalsGroup"), this._isActive = !1, this.scrolling = this.resize.bind(this, !1), this.resizing = this.resize.bind(this, !0);
  }
  static get instanceClassName() {
    return "Modal";
  }
  init() {
    super.init(), this._isDialog = this.node.tagName === "DIALOG", this.isScrolling = !1, this.listenClick(), this.addEmission(s.core.RootEmission.KEYDOWN, this._keydown.bind(this));
  }
  _keydown(t) {
    t === s.core.KeyCodes.ESCAPE && this._escape();
  }
  _escape() {
    switch (document.activeElement ? document.activeElement.tagName : void 0) {
      case "INPUT":
      case "LABEL":
      case "TEXTAREA":
      case "SELECT":
      case "AUDIO":
      case "VIDEO":
        break;
      default:
        this.isDisclosed && (this.conceal(), this.focus());
    }
  }
  retrieved() {
    this._ensureAccessibleName();
  }
  get body() {
    return this.element.getDescendantInstances("ModalBody", "Modal")[0];
  }
  handleClick(t) {
    t.target === this.node && this.getAttribute(cs.CONCEALING_BACKDROP) !== "false" && this.conceal();
  }
  disclose(t) {
    return !!super.disclose(t) && (this.body && this.body.activate(), this.isScrollLocked = !0, this.setAttribute("aria-modal", "true"), this.setAttribute("open", "true"), this._isDialog || this.activateModal(), !0);
  }
  conceal(t, e) {
    return !!super.conceal(t, e) && (this.isScrollLocked = !1, this.removeAttribute("aria-modal"), this.removeAttribute("open"), this.body && this.body.deactivate(), this._isDialog || this.deactivateModal(), !0);
  }
  get isDialog() {
    return this._isDialog;
  }
  set isDialog(t) {
    this._isDialog = t;
  }
  activateModal() {
    this._isActive || (this._isActive = !0, this._hasDialogRole = this.getAttribute("role") === "dialog", this._hasDialogRole || this.setAttribute("role", "dialog"));
  }
  deactivateModal() {
    this._isActive && (this._isActive = !1, this._hasDialogRole || this.removeAttribute("role"));
  }
  _setAccessibleName(t, e) {
    const n = this.retrieveNodeId(t, e);
    this.warn(`add reference to ${e} for accessible name (aria-labelledby)`), this.setAttribute("aria-labelledby", n);
  }
  _ensureAccessibleName() {
    if (this.hasAttribute("aria-labelledby") || this.hasAttribute("aria-label"))
      return;
    this.warn("missing accessible name");
    const t = this.node.querySelector(B.TITLE), e = this.primaryButtons[0];
    switch (!0) {
      case t !== null:
        this._setAccessibleName(t, "title");
        break;
      case e !== void 0:
        this.warn("missing required title, fallback to primary button"), this._setAccessibleName(e, "primary");
    }
  }
}
const ds = ['[tabindex="0"]', "a[href]", "button:not([disabled])", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details", "iframe"].join(), us = ['[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'].join(), Ut = (i, t) => {
  if (!(i instanceof Element))
    return !1;
  const e = window.getComputedStyle(i);
  if (!e || e.visibility === "hidden")
    return !1;
  for (t === void 0 && (t = i); t.contains(i); ) {
    if (e.display === "none")
      return !1;
    i = i.parentElement;
  }
  return !0;
};
class gs {
  constructor(t, e) {
    this.element = null, this.activeElement = null, this.onTrap = t, this.onUntrap = e, this.waiting = this.wait.bind(this), this.handling = this.handle.bind(this), this.focusing = this.maintainFocus.bind(this), this.current = null;
  }
  get trapped() {
    return this.element !== null;
  }
  trap(t) {
    this.trapped && this.untrap(), this.element = t, this.isTrapping = !0, this.wait(), this.onTrap && this.onTrap();
  }
  wait() {
    Ut(this.element) ? this.trapping() : window.requestAnimationFrame(this.waiting);
  }
  trapping() {
    if (!this.isTrapping)
      return;
    this.isTrapping = !1;
    const t = this.focusables;
    t.length && t.indexOf(document.activeElement) === -1 && t[0].focus(), this.element.setAttribute("aria-modal", !0), window.addEventListener("keydown", this.handling), document.body.addEventListener("focus", this.focusing, !0);
  }
  stun(t) {
    for (const e of t.children)
      e !== this.element && (e.contains(this.element) ? this.stun(e) : this.stunneds.push(new ms(e)));
  }
  maintainFocus(t) {
    if (!this.element.contains(t.target)) {
      const e = this.focusables;
      if (e.length === 0)
        return;
      const n = e[0];
      t.preventDefault(), n.focus();
    }
  }
  handle(t) {
    if (t.keyCode !== 9)
      return;
    const e = this.focusables;
    if (e.length === 0)
      return;
    const n = e[0], r = e[e.length - 1], a = e.indexOf(document.activeElement);
    t.shiftKey ? !this.element.contains(document.activeElement) || a < 1 ? (t.preventDefault(), r.focus()) : (document.activeElement.tabIndex > 0 || e[a - 1].tabIndex > 0) && (t.preventDefault(), e[a - 1].focus()) : this.element.contains(document.activeElement) && a !== e.length - 1 && a !== -1 ? document.activeElement.tabIndex > 0 && (t.preventDefault(), e[a + 1].focus()) : (t.preventDefault(), n.focus());
  }
  get focusables() {
    let t = s.internals.dom.querySelectorAllArray(this.element, ds);
    const e = s.internals.dom.querySelectorAllArray(document.documentElement, 'input[type="radio"]');
    if (e.length) {
      const a = {};
      for (const c of e) {
        const T = c.getAttribute("name");
        a[T] === void 0 && (a[T] = new ps(T)), a[T].push(c);
      }
      t = t.filter((c) => {
        if (c.tagName.toLowerCase() !== "input" || c.getAttribute("type").toLowerCase() !== "radio")
          return !0;
        const T = c.getAttribute("name");
        return a[T].keep(c);
      });
    }
    const n = s.internals.dom.querySelectorAllArray(this.element, us);
    n.sort((a, c) => a.tabIndex - c.tabIndex);
    const r = t.filter((a) => n.indexOf(a) === -1);
    return n.concat(r).filter((a) => a.tabIndex !== "-1" && Ut(a, this.element));
  }
  untrap() {
    this.trapped && (this.isTrapping = !1, this.element.removeAttribute("aria-modal"), window.removeEventListener("keydown", this.handling), document.body.removeEventListener("focus", this.focusing, !0), this.element = null, this.onUntrap && this.onUntrap());
  }
  dispose() {
    this.untrap();
  }
}
class ms {
  constructor(t) {
    this.element = t, this.inert = t.getAttribute("inert"), this.element.setAttribute("inert", "");
  }
  unstun() {
    this.inert === null ? this.element.removeAttribute("inert") : this.element.setAttribute("inert", this.inert);
  }
}
class ps {
  constructor(t) {
    this.name = t, this.buttons = [];
  }
  push(t) {
    this.buttons.push(t), (t === document.activeElement || t.checked || this.selected === void 0) && (this.selected = t);
  }
  keep(t) {
    return this.selected === t;
  }
}
class _s extends s.core.DisclosuresGroup {
  constructor() {
    super("Modal", !1), this.focusTrap = new gs();
  }
  static get instanceClassName() {
    return "ModalsGroup";
  }
  apply(t, e) {
    super.apply(t, e), this.current === null ? this.focusTrap.untrap() : this.focusTrap.trap(this.current.node);
  }
}
class bs extends s.core.Instance {
  static get instanceClassName() {
    return "ModalBody";
  }
  init() {
    this.listen("scroll", this.divide.bind(this));
  }
  activate() {
    this.isResizing = !0, this.resize();
  }
  deactivate() {
    this.isResizing = !1;
  }
  divide() {
    this.node.scrollHeight > this.node.clientHeight ? this.node.offsetHeight + this.node.scrollTop >= this.node.scrollHeight ? this.removeClass(B.SCROLL_DIVIDER) : this.addClass(B.SCROLL_DIVIDER) : this.removeClass(B.SCROLL_DIVIDER);
  }
  resize() {
    this.adjust(), this.request(this.adjust.bind(this));
  }
  adjust() {
    const t = 32 * (this.isBreakpoint(s.core.Breakpoints.MD) ? 2 : 1);
    this.isLegacy ? this.style.maxHeight = window.innerHeight - t + "px" : this.style.setProperty("--modal-max-height", window.innerHeight - t + "px"), this.divide();
  }
}
s.modal = { Modal: ls, ModalButton: re, ModalBody: bs, ModalsGroup: _s, ModalSelector: B }, s.internals.register(s.modal.ModalSelector.MODAL, s.modal.Modal), s.internals.register(s.modal.ModalSelector.BODY, s.modal.ModalBody), s.internals.register(s.core.RootSelector.ROOT, s.modal.ModalsGroup);
const D = { TOGGLE: s.internals.ns.emission("password", "toggle"), ADJUST: s.internals.ns.emission("password", "adjust") };
class Es extends s.core.Instance {
  static get instanceClassName() {
    return "PasswordToggle";
  }
  init() {
    this.listenClick(), this.ascend(D.ADJUST, this.width), this.isSwappingFont = !0, this._isChecked = this.isChecked;
  }
  get width() {
    const t = getComputedStyle(this.node.parentNode);
    return parseInt(t.width);
  }
  get isChecked() {
    return this.node.checked;
  }
  set isChecked(t) {
    this._isChecked = t, this.ascend(D.TOGGLE, t);
  }
  handleClick() {
    this.isChecked = !this._isChecked;
  }
  swapFont(t) {
    this.ascend(D.ADJUST, this.width);
  }
}
class fs extends s.core.Instance {
  static get instanceClassName() {
    return "Password";
  }
  init() {
    this.addAscent(D.TOGGLE, this.toggle.bind(this)), this.addAscent(D.ADJUST, this.adjust.bind(this));
  }
  toggle(t) {
    this.descend(D.TOGGLE, t);
  }
  adjust(t) {
    this.descend(D.ADJUST, t);
  }
}
const As = { PASSWORD: s.internals.ns.selector("password"), INPUT: s.internals.ns.selector("password__input"), LABEL: s.internals.ns.selector("password__label"), TOOGLE: `${s.internals.ns.selector("password__checkbox")} input[type="checkbox"]` };
class Ts extends s.core.Instance {
  static get instanceClassName() {
    return "PasswordInput";
  }
  init() {
    this.addDescent(D.TOGGLE, this.toggle.bind(this)), this._isRevealed = this.hasAttribute("type") === "password", this.listen("keydown", this.capslock.bind(this)), this.listen("keyup", this.capslock.bind(this));
  }
  toggle(t) {
    this.isRevealed = t, this.setAttribute("type", t ? "text" : "password");
  }
  get isRevealed() {
    return this._isRevealed;
  }
  capslock(t) {
    t && typeof t.getModifierState != "function" || (t.getModifierState("CapsLock") ? this.node.parentNode.setAttribute(s.internals.ns.attr("capslock"), "") : this.node.parentNode.removeAttribute(s.internals.ns.attr("capslock")));
  }
  set isRevealed(t) {
    this._isRevealed = t, this.setAttribute("type", t ? "text" : "password");
  }
}
class Ss extends s.core.Instance {
  static get instanceClassName() {
    return "PasswordLabel";
  }
  init() {
    this.addDescent(D.ADJUST, this.adjust.bind(this));
  }
  adjust(t) {
    const e = Math.ceil(t / 16);
    this.node.style.paddingRight = e + "rem";
  }
}
s.password = { Password: fs, PasswordToggle: Es, PasswordSelector: As, PasswordInput: Ts, PasswordLabel: Ss }, s.internals.register(s.password.PasswordSelector.INPUT, s.password.PasswordInput), s.internals.register(s.password.PasswordSelector.PASSWORD, s.password.Password), s.internals.register(s.password.PasswordSelector.TOOGLE, s.password.PasswordToggle), s.internals.register(s.password.PasswordSelector.LABEL, s.password.PasswordLabel);
const C = s.internals.ns.selector("nav__item"), $ = s.internals.ns.selector("collapse"), I = { NAVIGATION: s.internals.ns.selector("nav"), COLLAPSE: `${C} > ${$}, ${C} > *:not(${C}):not(${$}) > ${$}, ${C} > *:not(${C}):not(${$}) > *:not(${C}):not(${$}) > ${$}`, COLLAPSE_LEGACY: `${C} ${$}`, ITEM: C, ITEM_RIGHT: `${C}--align-right`, MENU: s.internals.ns.selector("menu"), BUTTON: s.internals.ns.selector("nav__btn"), TRANSLATE_BUTTON: s.internals.ns.selector("translate__btn") };
class vs extends s.core.Instance {
  constructor() {
    super(), this._isRightAligned = !1;
  }
  static get instanceClassName() {
    return "NavigationItem";
  }
  init() {
    this.addAscent(s.core.DisclosureEmission.ADDED, this.calculate.bind(this)), this.addAscent(s.core.DisclosureEmission.REMOVED, this.calculate.bind(this)), this.isResizing = !0, this.calculate();
  }
  resize() {
    this.calculate();
  }
  calculate() {
    const t = this.element.getDescendantInstances(s.core.Collapse.instanceClassName, null, !0)[0];
    if (t && this.isBreakpoint(s.core.Breakpoints.LG) && t.element.node.matches(I.MENU)) {
      const e = this.element.node.parentElement.getBoundingClientRect().right, n = t.element.node.getBoundingClientRect().width, r = this.element.node.getBoundingClientRect().left;
      this.isRightAligned = r + n > e;
    } else
      this.isRightAligned = !1;
  }
  get isRightAligned() {
    return this._isRightAligned;
  }
  set isRightAligned(t) {
    this._isRightAligned !== t && (this._isRightAligned = t, t ? s.internals.dom.addClass(this.element.node, I.ITEM_RIGHT) : s.internals.dom.removeClass(this.element.node, I.ITEM_RIGHT));
  }
  get collapsePrimary() {
    return this.element.children.map((t) => t.getInstance("CollapseButton")).filter((t) => t !== null && (t.hasClass(I.BUTTON) || t.hasClass(I.TRANSLATE_BUTTON)))[0];
  }
}
const U = { NONE: -1, INSIDE: 0, OUTSIDE: 1 };
class ys extends s.core.CollapsesGroup {
  static get instanceClassName() {
    return "Navigation";
  }
  init() {
    super.init(), this.clicked = !1, this.out = !1, this.listen("focusout", this.focusOutHandler.bind(this)), this.listen("mousedown", this.mouseDownHandler.bind(this)), this.listenClick({ capture: !0 });
  }
  validate(t) {
    return super.validate(t) && t.element.node.matches(s.internals.legacy.isLegacy ? I.COLLAPSE_LEGACY : I.COLLAPSE);
  }
  mouseDownHandler(t) {
    this.isBreakpoint(s.core.Breakpoints.LG) && this.index !== -1 && this.current && (this.position = this.current.node.contains(t.target) ? U.INSIDE : U.OUTSIDE, this.requestPosition());
  }
  clickHandler(t) {
    !t.target.matches("a, button") || t.target.matches("[aria-controls]") || t.target.matches(s.core.DisclosureSelector.PREVENT_CONCEAL) || (this.index = -1);
  }
  focusOutHandler(t) {
    this.isBreakpoint(s.core.Breakpoints.LG) && (this.out = !0, this.requestPosition());
  }
  requestPosition() {
    this.isRequesting || (this.isRequesting = !0, this.request(this.getPosition.bind(this)));
  }
  getPosition() {
    if (this.out)
      switch (this.position) {
        case U.OUTSIDE:
          this.index = -1;
          break;
        case U.INSIDE:
          this.current && !this.current.node.contains(document.activeElement) && this.current.focus();
          break;
        default:
          this.index > -1 && !this.current.hasFocus && (this.index = -1);
      }
    this.request(this.requested.bind(this));
  }
  requested() {
    this.position = U.NONE, this.out = !1, this.isRequesting = !1;
  }
  get index() {
    return super.index;
  }
  set index(t) {
    t === -1 && this.current && this.current.hasFocus && this.current.focus(), super.index = t;
  }
}
s.navigation = { Navigation: ys, NavigationItem: vs, NavigationMousePosition: U, NavigationSelector: I }, s.internals.register(s.navigation.NavigationSelector.NAVIGATION, s.navigation.Navigation), s.internals.register(s.navigation.NavigationSelector.ITEM, s.navigation.NavigationItem);
class ae extends s.core.DisclosureButton {
  constructor() {
    super(s.core.DisclosureType.SELECT);
  }
  static get instanceClassName() {
    return "TabButton";
  }
  handleClick(t) {
    super.handleClick(t), this.focus();
  }
  apply(t) {
    super.apply(t), this.isPrimary && (this.setAttribute("tabindex", t ? "0" : "-1"), t && this.list && this.list.focalize(this));
  }
  get list() {
    return this.element.getAscendantInstance("TabsList", "TabsGroup");
  }
}
const E = { TAB: s.internals.ns.selector("tabs__tab"), GROUP: s.internals.ns.selector("tabs"), PANEL: s.internals.ns.selector("tabs__panel"), LIST: s.internals.ns.selector("tabs__list"), SHADOW: s.internals.ns.selector("tabs__shadow"), SHADOW_LEFT: s.internals.ns.selector("tabs__shadow--left"), SHADOW_RIGHT: s.internals.ns.selector("tabs__shadow--right"), PANEL_START: s.internals.ns.selector("tabs__panel--direction-start"), PANEL_END: s.internals.ns.selector("tabs__panel--direction-end") }, Et = "direction-start", ft = "direction-end", At = "none";
class Cs extends s.core.Disclosure {
  constructor() {
    super(s.core.DisclosureType.SELECT, E.PANEL, ae, "TabsGroup"), this._direction = At, this._isPreventingTransition = !1;
  }
  static get instanceClassName() {
    return "TabPanel";
  }
  get direction() {
    return this._direction;
  }
  set direction(t) {
    if (t !== this._direction) {
      switch (this._direction) {
        case Et:
          this.removeClass(E.PANEL_START);
          break;
        case ft:
          this.removeClass(E.PANEL_END);
          break;
        case At:
          break;
        default:
          return;
      }
      switch (this._direction = t, this._direction) {
        case Et:
          this.addClass(E.PANEL_START);
          break;
        case ft:
          this.addClass(E.PANEL_END);
      }
    }
  }
  get isPreventingTransition() {
    return this._isPreventingTransition;
  }
  set isPreventingTransition(t) {
    this._isPreventingTransition !== t && (t ? this.addClass(s.internals.motion.TransitionSelector.NONE) : this.removeClass(s.internals.motion.TransitionSelector.NONE), this._isPreventingTransition = t === !0);
  }
  translate(t, e) {
    this.isPreventingTransition = e, this.direction = t;
  }
  reset() {
    this.group && this.group.retrieve(!0);
  }
  _electPrimaries(t) {
    return this.group && this.group.list ? super._electPrimaries(t).filter((e) => this.group.list.node.contains(e.node)) : [];
  }
}
const oe = "tab_keys_left", he = "tab_keys_right", ce = "tab_keys_home", le = "tab_keys_end", x = { PRESS_KEY: s.internals.ns.emission("tab", "press_key"), LIST_HEIGHT: s.internals.ns.emission("tab", "list_height") };
class Ns extends s.core.DisclosuresGroup {
  constructor() {
    super("TabPanel");
  }
  static get instanceClassName() {
    return "TabsGroup";
  }
  init() {
    super.init(), this.listen("transitionend", this.transitionend.bind(this)), this.addAscent(x.PRESS_KEY, this.pressKey.bind(this)), this.addAscent(x.LIST_HEIGHT, this.setListHeight.bind(this)), this.isRendering = !0;
  }
  getIndex(t = 0) {
    super.getIndex(t);
  }
  get list() {
    return this.element.getDescendantInstances("TabsList", "TabsGroup", !0)[0];
  }
  setListHeight(t) {
    this.listHeight = t;
  }
  transitionend(t) {
    this.isPreventingTransition = !0;
  }
  get buttonHasFocus() {
    return this.members.some((t) => t.buttonHasFocus);
  }
  pressKey(t) {
    switch (t) {
      case oe:
        this.pressLeft();
        break;
      case he:
        this.pressRight();
        break;
      case ce:
        this.pressHome();
        break;
      case le:
        this.pressEnd();
    }
  }
  pressRight() {
    this.buttonHasFocus && (this.index < this.length - 1 ? this.index++ : this.index = 0, this.focus());
  }
  pressLeft() {
    this.buttonHasFocus && (this.index > 0 ? this.index-- : this.index = this.length - 1, this.focus());
  }
  pressHome() {
    this.buttonHasFocus && (this.index = 0, this.focus());
  }
  pressEnd() {
    this.buttonHasFocus && (this.index = this.length - 1, this.focus());
  }
  focus() {
    this.current && this.current.focus();
  }
  apply() {
    for (let t = 0; t < this._index; t++)
      this.members[t].translate(Et);
    this.current && this.current.translate(At);
    for (let t = this._index + 1; t < this.length; t++)
      this.members[t].translate(ft);
    this.isPreventingTransition = !1;
  }
  get isPreventingTransition() {
    return this._isPreventingTransition;
  }
  set isPreventingTransition(t) {
    this._isPreventingTransition !== t && (t ? this.addClass(s.internals.motion.TransitionSelector.NONE) : this.removeClass(s.internals.motion.TransitionSelector.NONE), this._isPreventingTransition = t === !0);
  }
  render() {
    if (this.current === null)
      return;
    this.node.scrollTop = 0, this.node.scrollLeft = 0;
    const t = Math.round(this.current.node.offsetHeight);
    this.panelHeight !== t && (this.panelHeight = t, this.style.setProperty("--tabs-height", this.panelHeight + this.listHeight + "px"));
  }
}
class Ds extends s.core.Instance {
  static get instanceClassName() {
    return "TabsList";
  }
  init() {
    this.listen("scroll", this.scroll.bind(this)), this.listenKey(s.core.KeyCodes.RIGHT, this.ascend.bind(this, x.PRESS_KEY, he), !0, !0), this.listenKey(s.core.KeyCodes.LEFT, this.ascend.bind(this, x.PRESS_KEY, oe), !0, !0), this.listenKey(s.core.KeyCodes.HOME, this.ascend.bind(this, x.PRESS_KEY, ce), !0, !0), this.listenKey(s.core.KeyCodes.END, this.ascend.bind(this, x.PRESS_KEY, le), !0, !0), this.isResizing = !0;
  }
  focalize(t) {
    const e = t.getRect(), n = this.getRect(), r = this.node.scrollLeft;
    e.left < n.left ? this.node.scrollTo(r - n.left + e.left - 16, 0) : e.right > n.right && this.node.scrollTo(r - n.right + e.right + 16, 0);
  }
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(t) {
    this._isScrolling !== t && (this._isScrolling = t, this.apply());
  }
  apply() {
    this._isScrolling ? (this.addClass(E.SHADOW), this.scroll()) : (this.removeClass(E.SHADOW_RIGHT), this.removeClass(E.SHADOW_LEFT), this.removeClass(E.SHADOW));
  }
  scroll() {
    const t = this.node.scrollLeft, e = t <= 16, n = this.node.scrollWidth - this.node.clientWidth - 16, r = Math.abs(t) >= n, a = document.documentElement.getAttribute("dir") === "rtl", c = a ? E.SHADOW_RIGHT : E.SHADOW_LEFT, T = a ? E.SHADOW_LEFT : E.SHADOW_RIGHT;
    e ? this.removeClass(c) : this.addClass(c), r ? this.removeClass(T) : this.addClass(T);
  }
  resize() {
    this.isScrolling = this.node.scrollWidth > this.node.clientWidth + 16;
    const t = this.getRect().height;
    this.setProperty("--tabs-list-height", `${t}px`), this.ascend(x.LIST_HEIGHT, t);
  }
  dispose() {
    this.isScrolling = !1;
  }
}
s.tab = { TabPanel: Cs, TabButton: ae, TabsGroup: Ns, TabsList: Ds, TabSelector: E, TabEmission: x }, s.internals.register(s.tab.TabSelector.PANEL, s.tab.TabPanel), s.internals.register(s.tab.TabSelector.GROUP, s.tab.TabsGroup), s.internals.register(s.tab.TabSelector.LIST, s.tab.TabsList);
const de = { SCROLLABLE: s.internals.ns.emission("table", "scrollable"), CHANGE: s.internals.ns.emission("table", "change"), CAPTION_HEIGHT: s.internals.ns.emission("table", "captionheight") };
class ws extends s.core.Instance {
  static get instanceClassName() {
    return "Table";
  }
  init() {
    this.addAscent(de.CAPTION_HEIGHT, this.setCaptionHeight.bind(this));
  }
  setCaptionHeight(t) {
    this.setProperty("--table-offset", `calc(${t}px + 1rem)`);
  }
}
const N = { TABLE: s.internals.ns.selector("table"), SHADOW: s.internals.ns.selector("table__shadow"), SHADOW_LEFT: s.internals.ns.selector("table__shadow--left"), SHADOW_RIGHT: s.internals.ns.selector("table__shadow--right"), ELEMENT: `${s.internals.ns.selector("table")}:not(${s.internals.ns.selector("table--no-scroll")}) table`, CAPTION: `${s.internals.ns.selector("table")} table caption` };
class Ls extends s.core.Instance {
  static get instanceClassName() {
    return "TableElement";
  }
  init() {
    this.listen("scroll", this.scroll.bind(this)), this.content = this.querySelector("tbody"), this.isResizing = !0;
  }
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(t) {
    this._isScrolling !== t && (this._isScrolling = t, t ? (this.addClass(N.SHADOW), this.scroll()) : (this.removeClass(N.SHADOW), this.removeClass(N.SHADOW_LEFT), this.removeClass(N.SHADOW_RIGHT)));
  }
  scroll() {
    const t = this.node.scrollLeft <= 8, e = this.content.offsetWidth - this.node.offsetWidth - 8, n = Math.abs(this.node.scrollLeft) >= e, r = document.documentElement.getAttribute("dir") === "rtl", a = r ? N.SHADOW_RIGHT : N.SHADOW_LEFT, c = r ? N.SHADOW_LEFT : N.SHADOW_RIGHT;
    t ? this.removeClass(a) : this.addClass(a), n ? this.removeClass(c) : this.addClass(c);
  }
  resize() {
    this.isScrolling = this.content.offsetWidth > this.node.offsetWidth;
  }
  dispose() {
    this.isScrolling = !1;
  }
}
class Rs extends s.core.Instance {
  static get instanceClassName() {
    return "TableCaption";
  }
  init() {
    this.height = 0, this.isResizing = !0;
  }
  resize() {
    const t = this.getRect().height;
    this.height !== t && (this.height = t, this.ascend(de.CAPTION_HEIGHT, t));
  }
}
s.table = { Table: ws, TableElement: Ls, TableCaption: Rs, TableSelector: N }, s.internals.register(s.table.TableSelector.TABLE, s.table.Table), s.internals.register(s.table.TableSelector.ELEMENT, s.table.TableElement), s.internals.register(s.table.TableSelector.CAPTION, s.table.TableCaption);
const Tt = { DISMISS: s.internals.ns.event("dismiss") };
class Is extends s.core.Instance {
  static get instanceClassName() {
    return "TagDismissible";
  }
  init() {
    this.listenClick();
  }
  handleClick() {
    switch (this.focusClosest(), s.mode) {
      case s.Modes.ANGULAR:
      case s.Modes.REACT:
      case s.Modes.VUE:
        this.request(this.verify.bind(this));
        break;
      default:
        this.remove();
    }
    this.dispatch(Tt.DISMISS);
  }
  verify() {
    document.body.contains(this.node) && this.warn(`a TagDismissible has just been dismissed and should be removed from the dom. In ${s.mode} mode, the api doesn't handle dom modification. An event ${Tt.DISMISS} is dispatched by the element to trigger the removal`);
  }
}
const xs = { PRESSABLE: `${s.internals.ns.selector("tag")}[aria-pressed]`, DISMISSIBLE: `${s.internals.ns.selector("tag--dismiss")}` };
s.tag = { TagDismissible: Is, TagSelector: xs, TagEvent: Tt }, s.internals.register(s.tag.TagSelector.PRESSABLE, s.core.Toggle), s.internals.register(s.tag.TagSelector.DISMISSIBLE, s.tag.TagDismissible);
const Bt = s.internals.ns.selector("transcription"), ue = { TRANSCRIPTION: Bt, BUTTON: `${Bt}__btn` };
class Os extends s.core.Instance {
  static get instanceClassName() {
    return "Transcription";
  }
  get collapsePrimary() {
    return this.element.children.map((t) => t.getInstance("CollapseButton")).filter((t) => t !== null && t.hasClass(ue.BUTTON))[0];
  }
}
s.transcription = { Transcription: Os, TranscriptionSelector: ue }, s.internals.register(s.transcription.TranscriptionSelector.TRANSCRIPTION, s.transcription.Transcription);
class Ps extends s.core.Instance {
  static get instanceClassName() {
    return "TileDownload";
  }
  init() {
    this.addAscent(s.core.AssessEmission.UPDATE, (t) => {
      this.descend(s.core.AssessEmission.UPDATE, t);
    }), this.addAscent(s.core.AssessEmission.ADDED, () => {
      this.descend(s.core.AssessEmission.ADDED);
    });
  }
}
const ks = { DOWNLOAD: s.internals.ns.selector("tile--download"), DOWNLOAD_DETAIL: `${s.internals.ns.selector("tile--download")} ${s.internals.ns.selector("tile__detail")}` };
s.tile = { TileSelector: ks, TileDownload: Ps }, s.internals.register(s.tile.TileSelector.DOWNLOAD, s.tile.TileDownload), s.internals.register(s.tile.TileSelector.DOWNLOAD_DETAIL, s.core.AssessDetail);
const _ = { RANGE: s.internals.ns.selector("range"), RANGE_SM: s.internals.ns.selector("range--sm"), RANGE_STEP: s.internals.ns.selector("range--step"), RANGE_DOUBLE: s.internals.ns.selector("range--double"), RANGE_DOUBLE_STEP: s.internals.ns.selector("range--double") + s.internals.ns.selector("range--step"), RANGE_INPUT: s.internals.ns.selector("range input[type=range]:nth-of-type(1)"), RANGE_INPUT2: `${s.internals.ns.selector("range--double")} input[type=range]:nth-of-type(2)`, RANGE_OUTPUT: s.internals.ns.selector("range__output"), RANGE_MIN: s.internals.ns.selector("range__min"), RANGE_MAX: s.internals.ns.selector("range__max"), RANGE_PREFIX: s.internals.ns.attr("prefix"), RANGE_SUFFIX: s.internals.ns.attr("suffix") }, m = { VALUE: s.internals.ns.emission("range", "value"), VALUE2: s.internals.ns.emission("range", "value2"), OUTPUT: s.internals.ns.emission("range", "output"), CONSTRAINTS: s.internals.ns.emission("range", "constraints"), MIN: s.internals.ns.emission("range", "min"), MAX: s.internals.ns.emission("range", "max"), STEP: s.internals.ns.emission("range", "step"), PREFIX: s.internals.ns.emission("range", "prefix"), SUFFIX: s.internals.ns.emission("range", "suffix"), DISABLED: s.internals.ns.emission("range", "disabled"), ENABLE_POINTER: s.internals.ns.emission("range", "enable_pointer") };
class Nt {
  constructor() {
    this._width = 0, this._min = 0, this._max = 0, this._value = 0, this._thumbSize = 24, this._innerWidth = 0, this._prefix = "", this._suffix = "", this._background = {};
  }
  configure(t) {
    t && (this._prefix = t._prefix, this._suffix = t._suffix, this._width = t.width, this.setConstraints(t._constraints), this.value = t.value, this.update());
  }
  setPrefix(t) {
    this._prefix = t !== null ? t : "";
  }
  setSuffix(t) {
    this._suffix = t !== null ? t : "";
  }
  _decorate(t) {
    return `${this._prefix}${t}${this._suffix}`;
  }
  get width() {
    return this._width;
  }
  set width(t) {
    this._width = t;
  }
  get isSm() {
    return this._isSm;
  }
  set isSm(t) {
    this._isSm !== t && (this._isSm = t, this.setThumbSize(t ? 16 : 24), this.update());
  }
  setThumbSize(t, e = 1) {
    this._thumbSize = t, this._innerPadding = t * e;
  }
  get textValue() {
    return this._decorate(this._value);
  }
  get value() {
    return this._value;
  }
  set value(t) {
    this._value = t;
  }
  get outputX() {
    return this._outputX;
  }
  setConstraints(t) {
    this._constraints = t, this._min = t.min, this._max = t.max, this._step = t.step, this._rangeWidth = t.rangeWidth;
  }
  get min() {
    return this._min;
  }
  get textMin() {
    return this._decorate(this._min);
  }
  get max() {
    return this._max;
  }
  get textMax() {
    return this._decorate(this._max);
  }
  get step() {
    return this._step;
  }
  get output() {
    return { text: this.textValue, transform: `translateX(${this._translateX}px) translateX(-${this._centerPercent}%)` };
  }
  _getRatio(t) {
    return (t - this._min) / this._rangeWidth;
  }
  get progress() {
    return this._progress;
  }
  update() {
    this._update();
  }
  _update() {
    this._innerWidth = this._width - this._innerPadding;
    const t = this._getRatio(this._value);
    this._translateX = t * this._width, this._centerPercent = 100 * t, this._progress = { right: `${(this._innerWidth * t + 0.5 * this._innerPadding).toFixed(2)}px` };
  }
}
class Ms extends Nt {
  get stepWidth() {
    return `${this._stepWidth.toFixed(3)}px`;
  }
  _update() {
    super._update();
    const t = this._rangeWidth / this._step;
    for (this._stepWidth = this._innerWidth / t; this._stepWidth < 4; )
      this._stepWidth *= 2;
  }
}
class ge extends Nt {
  get value2() {
    return this._value;
  }
  set value2(t) {
    this._value2 !== t && (this._value2 = t, this.update());
  }
  get textValue() {
    return `${this._decorate(this._value)} - ${this._decorate(this._value2)}`;
  }
  setThumbSize(t) {
    super.setThumbSize(t, 2);
  }
  _update() {
    super._update();
    const t = this._getRatio(0.5 * (this._value + this._value2));
    this._translateX = t * this._width, this._centerPercent = 100 * t;
    const e = this._getRatio(this._value), n = this._getRatio(this._value2);
    this._progress = { left: `${(this._innerWidth * e + 0.25 * this._innerPadding).toFixed(2)}px`, right: `${(this._innerWidth * n + 0.75 * this._innerPadding).toFixed(2)}px` };
  }
}
class $s extends ge {
  get stepWidth() {
    return `${this._stepWidth.toFixed(3)}px`;
  }
  _update() {
    super._update();
    const t = this._rangeWidth / this._step;
    this._stepWidth = this._innerWidth / t, this._stepWidth < 4 && (this._stepWidth *= Math.ceil(4 / this._stepWidth));
  }
}
const Ft = "step", X = "double", ht = "double-step", Hs = "default";
class Gs extends s.core.Instance {
  static get instanceClassName() {
    return "Range";
  }
  init() {
    this._retrieveType(), this._retrieveSize(), this.isLegacy ? (this.isResizing = !0, this.isMouseMoving = !0) : (this._observer = new ResizeObserver(this.resize.bind(this)), this._observer.observe(this.node)), this.addAscent(m.CONSTRAINTS, this.setConstraints.bind(this)), this.addAscent(m.VALUE, this.setValue.bind(this)), this.addAscent(m.VALUE2, this.setValue2.bind(this)), this.getAttribute(_.RANGE_PREFIX) && this.setPrefix(this.getAttribute(_.RANGE_PREFIX)), this.getAttribute(_.RANGE_SUFFIX) && this.setSuffix(this.getAttribute(_.RANGE_SUFFIX)), this.update();
  }
  _retrieveType() {
    switch (!0) {
      case this.matches(_.RANGE_DOUBLE_STEP):
      case this.matches(_.RANGE_DOUBLE):
        this.type = X;
        break;
      case this.matches(_.RANGE_STEP):
        this.type = Ft;
        break;
      default:
        this.type = Hs;
    }
  }
  set type(t) {
    if (this._type === t)
      return;
    this._type = t;
    const e = this._model;
    switch (this._type) {
      case ht:
        this._model = new $s();
        break;
      case X:
        this._model = new ge();
        break;
      case Ft:
        this._model = new Ms();
        break;
      default:
        this._model = new Nt();
    }
    this._model.configure(e);
  }
  get type() {
    return this._type;
  }
  _retrieveSize() {
    this._model.isSm = this.matches(_.RANGE_SM);
  }
  resize() {
    this._retrieveWidth(), this.update();
  }
  _retrieveWidth() {
    this._model.width = this.getRect().width;
  }
  setValue(t) {
    switch (this._model.value = t, this._type) {
      case ht:
      case X:
        this.descend(m.VALUE, t);
    }
    this.update();
  }
  setValue2(t) {
    this._model.value2 = t, this.descend(m.VALUE2, t), this.update();
  }
  setConstraints(t) {
    this._model.setConstraints(t), this.update(), this.descend(m.CONSTRAINTS, t);
  }
  setPrefix(t) {
    this._model.setPrefix(t), this.update();
  }
  setSuffix(t) {
    this._model.setSuffix(t), this.update();
  }
  mutate(t) {
    switch (!0) {
      case t.includes("class"):
        this._retrieveType(), this._retrieveSize();
        break;
      case t.includes(_.RANGE_PREFIX):
      case t.includes(_.RANGE_SUFFIX):
        this._model.setPrefix(this.getAttribute(_.RANGE_PREFIX)), this._model.setSuffix(this.getAttribute(_.RANGE_SUFFIX)), this.update();
    }
  }
  update() {
    this._model.update(), this.descend(m.OUTPUT, this._model.output), this.descend(m.MIN, this._model.textMin), this.descend(m.MAX, this._model.textMax);
    const t = this._model.progress;
    t.left ? this.style.setProperty("--progress-left", t.left) : this.style.removeProperty("--progress-left"), t.right ? (this.style.setProperty("--progress-right", t.right), this.isLegacy && t.left && (this.style.setProperty("background-position-x", t.left), this.style.setProperty("background-size", `${parseFloat(t.right) - parseFloat(t.left)}px ${this._model.isSm ? "8px" : "12px"}`))) : (this.style.removeProperty("--progress-right"), this.isLegacy && (this.style.removeProperty("background-size"), this.style.removeProperty("background-position-x"))), this._model.stepWidth ? this.style.setProperty("--step-width", this._model.stepWidth) : this.style.removeProperty("--step-width");
  }
  mouseMove(t) {
    if (this._type !== X && this._type !== ht)
      return;
    const e = t.x - this.getRect().left;
    this.descend(m.ENABLE_POINTER, (parseFloat(this._model.progress.right) - parseFloat(this._model.progress.left)) / 2 + parseFloat(this._model.progress.left) < e ? 2 : 1);
  }
  dispose() {
    this._observer.disconnect();
  }
}
class Wt {
  constructor(t) {
    this._min = isNaN(t.min) ? 0 : t.min, this._max = isNaN(t.max) ? 100 : t.max, this._step = isNaN(t.step) ? 1 : t.step, this._rangeWidth = this._max - this._min;
  }
  get min() {
    return this._min;
  }
  get max() {
    return this._max;
  }
  get step() {
    return this._step;
  }
  get rangeWidth() {
    return this._rangeWidth;
  }
  test(t, e, n) {
    return this._min === t && this._max === e && this._step === n;
  }
}
class qt extends s.core.Instance {
  static get instanceClassName() {
    return "RangeInput";
  }
  init() {
    this._init(), this.node.value = this.getAttribute("value"), this.changing = this.change.bind(this), this.node.addEventListener(this.isLegacy ? "change" : "input", this.changing), this.isLegacy && this.addDescent(m.ENABLE_POINTER, this._enablePointer.bind(this)), this.change();
  }
  _init() {
    this._pointerId = 1, this.request(() => {
      this.hasAttribute("min") || this.setAttribute("min", 0), this.ascend(m.CONSTRAINTS, new Wt(this.node)), this.ascend(m.DISABLED, this.node.disabled);
    }), this.addDescent(m.VALUE2, this.setValue.bind(this));
  }
  _enablePointer(t) {
    const e = t === this._pointerId;
    this._isPointerEnabled !== e && (this._isPointerEnabled = e, e ? this.style.removeProperty("pointer-events") : this.style.setProperty("pointer-events", "none"));
  }
  setValue(t) {
    parseFloat(this.node.value) > t && (this.node.value = t, this.change());
  }
  change() {
    this.ascend(m.VALUE, parseFloat(this.node.value));
  }
  mutate(t) {
    t.includes("disabled") && this.ascend(m.DISABLED, this.node.disabled), (t.includes("min") || t.includes("max") || t.includes("step")) && (this.ascend(m.CONSTRAINTS, new Wt(this.node)), this.change());
  }
  dispose() {
    this.removeEventListener("input", this.changing);
  }
}
class Us extends s.core.Instance {
  static get instanceClassName() {
    return "RangeOutput";
  }
  init() {
    this.addDescent(m.OUTPUT, this.change.bind(this));
  }
  change(t) {
    this.node.innerText = t.text, this.node.style.transform = t.transform;
  }
}
class Bs extends s.core.Instance {
  static get instanceClassName() {
    return "RangeLimit";
  }
  init() {
    switch (!0) {
      case this.matches(_.RANGE_MIN):
        this.addDescent(m.MIN, this.change.bind(this));
        break;
      case this.matches(_.RANGE_MAX):
        this.addDescent(m.MAX, this.change.bind(this));
    }
  }
  change(t) {
    this.node.innerText = t;
  }
}
s.range = { Range: Gs, RangeInput: qt, RangeInput2: class extends qt {
  static get instanceClassName() {
    return "RangeInput2";
  }
  _init() {
    this._pointerId = 2, this.addDescent(m.CONSTRAINTS, this.setConstraints.bind(this)), this.addDescent(m.VALUE, this.setValue.bind(this));
  }
  setValue(i) {
    parseFloat(this.node.value) < i && (this.node.value = i, this.change());
  }
  change() {
    this.ascend(m.VALUE2, parseFloat(this.node.value));
  }
  setConstraints(i) {
    this.node.min = i.min, this.node.max = i.max, this.node.step = i.step, this.change();
  }
  mutate(i) {
  }
}, RangeOutput: Us, RangeLimit: Bs, RangeEmission: m, RangeSelector: _ }, s.internals.register(s.range.RangeSelector.RANGE, s.range.Range), s.internals.register(s.range.RangeSelector.RANGE_INPUT, s.range.RangeInput), s.internals.register(s.range.RangeSelector.RANGE_INPUT2, s.range.RangeInput2), s.internals.register(s.range.RangeSelector.RANGE_OUTPUT, s.range.RangeOutput), s.internals.register(s.range.RangeSelector.RANGE_MIN, s.range.RangeLimit), s.internals.register(s.range.RangeSelector.RANGE_MAX, s.range.RangeLimit);
const J = { HEADER: s.internals.ns.selector("header"), TOOLS_LINKS: s.internals.ns.selector("header__tools-links"), MENU_LINKS: s.internals.ns.selector("header__menu-links"), BUTTONS: `${s.internals.ns.selector("header__tools-links")} ${s.internals.ns.selector("btns-group")}, ${s.internals.ns.selector("header__tools-links")} ${s.internals.ns.selector("links-group")}`, MODALS: `${s.internals.ns.selector("header__search")}${s.internals.ns.selector("modal")}, ${s.internals.ns.selector("header__menu")}${s.internals.ns.selector("modal")}` };
class Fs extends s.core.Instance {
  static get instanceClassName() {
    return "HeaderLinks";
  }
  init() {
    const t = this.queryParentSelector(J.HEADER);
    this.toolsLinks = t.querySelector(J.TOOLS_LINKS), this.menuLinks = t.querySelector(J.MENU_LINKS);
    const e = "-mobile", n = this.toolsLinks.innerHTML.replace(/  +/g, " "), r = this.menuLinks.innerHTML.replace(/  +/g, " ");
    let a = n.replace(/id="(.*?)"/gm, 'id="$1' + e + '"');
    if (a = a.replace(/(<nav[.\s\S]*-translate [.\s\S]*) aria-controls="(.*?)"([.\s\S]*<\/nav>)/gm, '$1 aria-controls="$2' + e + '"$3'), a !== r)
      switch (s.mode) {
        case s.Modes.ANGULAR:
        case s.Modes.REACT:
        case s.Modes.VUE:
          this.warn(`header__tools-links content is different from header__menu-links content.
As you're using a dynamic framework, you should handle duplication of this content yourself, please refer to documentation:
${s.header.doc}`);
          break;
        default:
          this.menuLinks.innerHTML = a;
      }
  }
}
class Ws extends s.core.Instance {
  constructor() {
    super(), this._clickHandling = this.clickHandler.bind(this);
  }
  static get instanceClassName() {
    return "HeaderModal";
  }
  init() {
    this.isResizing = !0;
  }
  resize() {
    this.isBreakpoint(s.core.Breakpoints.LG) ? this.deactivateModal() : this.activateModal();
  }
  activateModal() {
    const t = this.element.getInstance("Modal");
    t && (t.isEnabled = !0, this.listen("click", this._clickHandling, { capture: !0 }));
  }
  deactivateModal() {
    const t = this.element.getInstance("Modal");
    t && (t.conceal(), t.isEnabled = !1, this.unlisten("click", this._clickHandling, { capture: !0 }));
  }
  clickHandler(t) {
    t.target.matches("a, button") && !t.target.matches("[aria-controls]") && !t.target.matches(s.core.DisclosureSelector.PREVENT_CONCEAL) && this.element.getInstance("Modal").conceal();
  }
}
s.header = { HeaderLinks: Fs, HeaderModal: Ws, HeaderSelector: J, doc: "https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/en-tete" }, s.internals.register(s.header.HeaderSelector.TOOLS_LINKS, s.header.HeaderLinks), s.internals.register(s.header.HeaderSelector.MODALS, s.header.HeaderModal);
const St = { DISPLAY: s.internals.ns.selector("display"), RADIO_BUTTONS: `input[name="${s.internals.ns("radios-theme")}"]`, FIELDSET: s.internals.ns.selector("fieldset") };
class qs extends s.core.Instance {
  static get instanceClassName() {
    return "Display";
  }
  init() {
    if (this.radios = this.querySelectorAll(St.RADIO_BUTTONS), s.scheme) {
      this.changing = this.change.bind(this);
      for (const t of this.radios)
        t.addEventListener("change", this.changing);
      this.addDescent(s.scheme.SchemeEmission.SCHEME, this.apply.bind(this)), this.ascend(s.scheme.SchemeEmission.ASK);
    } else
      this.querySelector(St.FIELDSET).setAttribute("disabled", "");
  }
  get scheme() {
    return this._scheme;
  }
  set scheme(t) {
    if (this._scheme !== t && s.scheme)
      switch (t) {
        case s.scheme.SchemeValue.SYSTEM:
        case s.scheme.SchemeValue.LIGHT:
        case s.scheme.SchemeValue.DARK:
          this._scheme = t;
          for (const e of this.radios)
            e.checked = e.value === t;
          this.ascend(s.scheme.SchemeEmission.SCHEME, t);
      }
  }
  change() {
    for (const t of this.radios)
      if (t.checked)
        return void (this.scheme = t.value);
  }
  apply(t) {
    this.scheme = t;
  }
  dispose() {
    for (const t of this.radios)
      t.removeEventListener("change", this.changing);
  }
}
s.display = { Display: qs, DisplaySelector: St }, s.internals.register(s.display.DisplaySelector.DISPLAY, s.display.Display);
