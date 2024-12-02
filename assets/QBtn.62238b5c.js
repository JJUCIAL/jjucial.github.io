import { a as computed, h, z as withDirectives, c as createComponent, g as getCurrentInstance, S as unref, k as createDirective, T as isKeyCode, q as addEvt, x as cleanEvt, u as stop, v as position, r as ref, y as stopAndPrevent, t as prevent, b as onBeforeUnmount, U as Transition, l as listenOpts } from "./index.57f35bce.js";
const useSizeDefaults = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
};
const useSizeProps = {
  size: String
};
function useSize(props, sizes = useSizeDefaults) {
  return computed(() => props.size !== void 0 ? { fontSize: props.size in sizes ? `${sizes[props.size]}px` : props.size } : null);
}
function hSlot(slot, otherwise) {
  return slot !== void 0 ? slot() || otherwise : otherwise;
}
function hUniqueSlot(slot, otherwise) {
  if (slot !== void 0) {
    const vnode = slot();
    if (vnode !== void 0 && vnode !== null) {
      return vnode.slice();
    }
  }
  return otherwise;
}
function hMergeSlot(slot, source) {
  return slot !== void 0 ? source.concat(slot()) : source;
}
function hMergeSlotSafely(slot, source) {
  if (slot === void 0) {
    return source;
  }
  return source !== void 0 ? source.concat(slot()) : slot();
}
function hDir(tag, data, children, key, condition, getDirsFn) {
  data.key = key + condition;
  const vnode = h(tag, data, children);
  return condition === true ? withDirectives(vnode, getDirsFn()) : vnode;
}
const defaultViewBox = "0 0 24 24";
const sameFn = (i) => i;
const ionFn = (i) => `ionicons ${i}`;
const libMap = {
  "mdi-": (i) => `mdi ${i}`,
  "icon-": sameFn,
  "bt-": (i) => `bt ${i}`,
  "eva-": (i) => `eva ${i}`,
  "ion-md": ionFn,
  "ion-ios": ionFn,
  "ion-logo": ionFn,
  "iconfont ": sameFn,
  "ti-": (i) => `themify-icon ${i}`,
  "bi-": (i) => `bootstrap-icons ${i}`
};
const matMap = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
};
const symMap = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
};
const libRE = new RegExp("^(" + Object.keys(libMap).join("|") + ")");
const matRE = new RegExp("^(" + Object.keys(matMap).join("|") + ")");
const symRE = new RegExp("^(" + Object.keys(symMap).join("|") + ")");
const mRE = /^[Mm]\s?[-+]?\.?\d/;
const imgRE = /^img:/;
const svgUseRE = /^svguse:/;
const ionRE = /^ion-/;
const faRE = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var QIcon = createComponent({
  name: "QIcon",
  props: {
    ...useSizeProps,
    tag: {
      type: String,
      default: "i"
    },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = useSize(props);
    const classes = computed(
      () => "q-icon" + (props.left === true ? " on-left" : "") + (props.right === true ? " on-right" : "") + (props.color !== void 0 ? ` text-${props.color}` : "")
    );
    const type = computed(() => {
      let cls;
      let icon = props.name;
      if (icon === "none" || !icon) {
        return { none: true };
      }
      if ($q.iconMapFn !== null) {
        const res = $q.iconMapFn(icon);
        if (res !== void 0) {
          if (res.icon !== void 0) {
            icon = res.icon;
            if (icon === "none" || !icon) {
              return { none: true };
            }
          } else {
            return {
              cls: res.cls,
              content: res.content !== void 0 ? res.content : " "
            };
          }
        }
      }
      if (mRE.test(icon) === true) {
        const [def, viewBox = defaultViewBox] = icon.split("|");
        return {
          svg: true,
          viewBox,
          nodes: def.split("&&").map((path) => {
            const [d, style, transform] = path.split("@@");
            return h("path", { style, d, transform });
          })
        };
      }
      if (imgRE.test(icon) === true) {
        return {
          img: true,
          src: icon.substring(4)
        };
      }
      if (svgUseRE.test(icon) === true) {
        const [def, viewBox = defaultViewBox] = icon.split("|");
        return {
          svguse: true,
          src: def.substring(7),
          viewBox
        };
      }
      let content = " ";
      const matches = icon.match(libRE);
      if (matches !== null) {
        cls = libMap[matches[1]](icon);
      } else if (faRE.test(icon) === true) {
        cls = icon;
      } else if (ionRE.test(icon) === true) {
        cls = `ionicons ion-${$q.platform.is.ios === true ? "ios" : "md"}${icon.substring(3)}`;
      } else if (symRE.test(icon) === true) {
        cls = "notranslate material-symbols";
        const matches2 = icon.match(symRE);
        if (matches2 !== null) {
          icon = icon.substring(6);
          cls += symMap[matches2[1]];
        }
        content = icon;
      } else {
        cls = "notranslate material-icons";
        const matches2 = icon.match(matRE);
        if (matches2 !== null) {
          icon = icon.substring(2);
          cls += matMap[matches2[1]];
        }
        content = icon;
      }
      return {
        cls,
        content
      };
    });
    return () => {
      const data = {
        class: classes.value,
        style: sizeStyle.value,
        "aria-hidden": "true",
        role: "presentation"
      };
      if (type.value.none === true) {
        return h(props.tag, data, hSlot(slots.default));
      }
      if (type.value.img === true) {
        return h(props.tag, data, hMergeSlot(slots.default, [
          h("img", { src: type.value.src })
        ]));
      }
      if (type.value.svg === true) {
        return h(props.tag, data, hMergeSlot(slots.default, [
          h("svg", {
            viewBox: type.value.viewBox || "0 0 24 24"
          }, type.value.nodes)
        ]));
      }
      if (type.value.svguse === true) {
        return h(props.tag, data, hMergeSlot(slots.default, [
          h("svg", {
            viewBox: type.value.viewBox
          }, [
            h("use", { "xlink:href": type.value.src })
          ])
        ]));
      }
      if (type.value.cls !== void 0) {
        data.class += " " + type.value.cls;
      }
      return h(props.tag, data, hMergeSlot(slots.default, [
        type.value.content
      ]));
    };
  }
});
const useSpinnerProps = {
  size: {
    type: [String, Number],
    default: "1em"
  },
  color: String
};
function useSpinner(props) {
  return {
    cSize: computed(() => props.size in useSizeDefaults ? `${useSizeDefaults[props.size]}px` : props.size),
    classes: computed(
      () => "q-spinner" + (props.color ? ` text-${props.color}` : "")
    )
  };
}
var QSpinner = createComponent({
  name: "QSpinner",
  props: {
    ...useSpinnerProps,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(props) {
    const { cSize, classes } = useSpinner(props);
    return () => h("svg", {
      class: classes.value + " q-spinner-mat",
      width: cSize.value,
      height: cSize.value,
      viewBox: "25 25 50 50"
    }, [
      h("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": props.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
});
function css(element, css2) {
  const style = element.style;
  for (const prop in css2) {
    style[prop] = css2[prop];
  }
}
function getElement(el) {
  if (el === void 0 || el === null) {
    return void 0;
  }
  if (typeof el === "string") {
    try {
      return document.querySelector(el) || void 0;
    } catch (err) {
      return void 0;
    }
  }
  const target = unref(el);
  if (target) {
    return target.$el || target;
  }
}
function childHasFocus(el, focusedEl) {
  if (el === void 0 || el === null || el.contains(focusedEl) === true) {
    return true;
  }
  for (let next = el.nextElementSibling; next !== null; next = next.nextElementSibling) {
    if (next.contains(focusedEl)) {
      return true;
    }
  }
  return false;
}
function throttle(fn, limit = 250) {
  let wait = false, result;
  return function() {
    if (wait === false) {
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
      result = fn.apply(this, arguments);
    }
    return result;
  };
}
function showRipple(evt, el, ctx, forceCenter) {
  ctx.modifiers.stop === true && stop(evt);
  const color = ctx.modifiers.color;
  let center = ctx.modifiers.center;
  center = center === true || forceCenter === true;
  const node = document.createElement("span"), innerNode = document.createElement("span"), pos = position(evt), { left, top, width, height } = el.getBoundingClientRect(), diameter = Math.sqrt(width * width + height * height), radius = diameter / 2, centerX = `${(width - diameter) / 2}px`, x = center ? centerX : `${pos.left - left - radius}px`, centerY = `${(height - diameter) / 2}px`, y = center ? centerY : `${pos.top - top - radius}px`;
  innerNode.className = "q-ripple__inner";
  css(innerNode, {
    height: `${diameter}px`,
    width: `${diameter}px`,
    transform: `translate3d(${x},${y},0) scale3d(.2,.2,1)`,
    opacity: 0
  });
  node.className = `q-ripple${color ? " text-" + color : ""}`;
  node.setAttribute("dir", "ltr");
  node.appendChild(innerNode);
  el.appendChild(node);
  const abort = () => {
    node.remove();
    clearTimeout(timer);
  };
  ctx.abort.push(abort);
  let timer = setTimeout(() => {
    innerNode.classList.add("q-ripple__inner--enter");
    innerNode.style.transform = `translate3d(${centerX},${centerY},0) scale3d(1,1,1)`;
    innerNode.style.opacity = 0.2;
    timer = setTimeout(() => {
      innerNode.classList.remove("q-ripple__inner--enter");
      innerNode.classList.add("q-ripple__inner--leave");
      innerNode.style.opacity = 0;
      timer = setTimeout(() => {
        node.remove();
        ctx.abort.splice(ctx.abort.indexOf(abort), 1);
      }, 275);
    }, 250);
  }, 50);
}
function updateModifiers(ctx, { modifiers, value, arg }) {
  const cfg = Object.assign({}, ctx.cfg.ripple, modifiers, value);
  ctx.modifiers = {
    early: cfg.early === true,
    stop: cfg.stop === true,
    center: cfg.center === true,
    color: cfg.color || arg,
    keyCodes: [].concat(cfg.keyCodes || 13)
  };
}
var Ripple = createDirective(
  {
    name: "ripple",
    beforeMount(el, binding) {
      const cfg = binding.instance.$.appContext.config.globalProperties.$q.config || {};
      if (cfg.ripple === false) {
        return;
      }
      const ctx = {
        cfg,
        enabled: binding.value !== false,
        modifiers: {},
        abort: [],
        start(evt) {
          if (ctx.enabled === true && evt.qSkipRipple !== true && evt.type === (ctx.modifiers.early === true ? "pointerdown" : "click")) {
            showRipple(evt, el, ctx, evt.qKeyEvent === true);
          }
        },
        keystart: throttle((evt) => {
          if (ctx.enabled === true && evt.qSkipRipple !== true && isKeyCode(evt, ctx.modifiers.keyCodes) === true && evt.type === `key${ctx.modifiers.early === true ? "down" : "up"}`) {
            showRipple(evt, el, ctx, true);
          }
        }, 300)
      };
      updateModifiers(ctx, binding);
      el.__qripple = ctx;
      addEvt(ctx, "main", [
        [el, "pointerdown", "start", "passive"],
        [el, "click", "start", "passive"],
        [el, "keydown", "keystart", "passive"],
        [el, "keyup", "keystart", "passive"]
      ]);
    },
    updated(el, binding) {
      if (binding.oldValue !== binding.value) {
        const ctx = el.__qripple;
        if (ctx !== void 0) {
          ctx.enabled = binding.value !== false;
          if (ctx.enabled === true && Object(binding.value) === binding.value) {
            updateModifiers(ctx, binding);
          }
        }
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qripple;
      if (ctx !== void 0) {
        ctx.abort.forEach((fn) => {
          fn();
        });
        cleanEvt(ctx, "main");
        delete el._qripple;
      }
    }
  }
);
const alignMap = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
};
const alignValues = Object.keys(alignMap);
const useAlignProps = {
  align: {
    type: String,
    validator: (v) => alignValues.includes(v)
  }
};
function useAlign(props) {
  return computed(() => {
    const align = props.align === void 0 ? props.vertical === true ? "stretch" : "left" : props.align;
    return `${props.vertical === true ? "items" : "justify"}-${alignMap[align]}`;
  });
}
function getParentProxy(proxy) {
  if (Object(proxy.$parent) === proxy.$parent) {
    return proxy.$parent;
  }
  let { parent } = proxy.$;
  while (Object(parent) === parent) {
    if (Object(parent.proxy) === parent.proxy) {
      return parent.proxy;
    }
    parent = parent.parent;
  }
}
function vmHasRouter(vm) {
  return vm.appContext.config.globalProperties.$router !== void 0;
}
function vmIsDestroyed(vm) {
  return vm.isUnmounted === true || vm.isDeactivated === true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key], outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue) {
        return false;
      }
    } else if (Array.isArray(outerValue) === false || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) {
      return false;
    }
  }
  return true;
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) === true ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) === true ? isEquivalentArray(a, b) : Array.isArray(b) === true ? isEquivalentArray(b, a) : a === b;
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (isSameRouteLocationParamsValue(a[key], b[key]) === false) {
      return false;
    }
  }
  return true;
}
const useRouterLinkNonMatchingProps = {
  to: [String, Object],
  replace: Boolean,
  href: String,
  target: String,
  disable: Boolean
};
const useRouterLinkProps = {
  ...useRouterLinkNonMatchingProps,
  exact: Boolean,
  activeClass: {
    type: String,
    default: "q-router-link--active"
  },
  exactActiveClass: {
    type: String,
    default: "q-router-link--exact-active"
  }
};
function useRouterLink({ fallbackTag, useDisableForRouterLinkProps = true } = {}) {
  const vm = getCurrentInstance();
  const { props, proxy, emit } = vm;
  const hasRouter = vmHasRouter(vm);
  const hasHrefLink = computed(() => props.disable !== true && props.href !== void 0);
  const hasRouterLinkProps = useDisableForRouterLinkProps === true ? computed(
    () => hasRouter === true && props.disable !== true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== ""
  ) : computed(
    () => hasRouter === true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== ""
  );
  const resolvedLink = computed(() => hasRouterLinkProps.value === true ? getLink(props.to) : null);
  const hasRouterLink = computed(() => resolvedLink.value !== null);
  const hasLink = computed(() => hasHrefLink.value === true || hasRouterLink.value === true);
  const linkTag = computed(() => props.type === "a" || hasLink.value === true ? "a" : props.tag || fallbackTag || "div");
  const linkAttrs = computed(() => hasHrefLink.value === true ? {
    href: props.href,
    target: props.target
  } : hasRouterLink.value === true ? {
    href: resolvedLink.value.href,
    target: props.target
  } : {});
  const linkActiveIndex = computed(() => {
    if (hasRouterLink.value === false) {
      return -1;
    }
    const { matched } = resolvedLink.value, { length } = matched, routeMatched = matched[length - 1];
    if (routeMatched === void 0) {
      return -1;
    }
    const currentMatched = proxy.$route.matched;
    if (currentMatched.length === 0) {
      return -1;
    }
    const index = currentMatched.findIndex(
      isSameRouteRecord.bind(null, routeMatched)
    );
    if (index !== -1) {
      return index;
    }
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(
      isSameRouteRecord.bind(null, matched[length - 2])
    ) : index;
  });
  const linkIsActive = computed(
    () => hasRouterLink.value === true && linkActiveIndex.value !== -1 && includesParams(proxy.$route.params, resolvedLink.value.params)
  );
  const linkIsExactActive = computed(
    () => linkIsActive.value === true && linkActiveIndex.value === proxy.$route.matched.length - 1 && isSameRouteLocationParams(proxy.$route.params, resolvedLink.value.params)
  );
  const linkClass = computed(() => hasRouterLink.value === true ? linkIsExactActive.value === true ? ` ${props.exactActiveClass} ${props.activeClass}` : props.exact === true ? "" : linkIsActive.value === true ? ` ${props.activeClass}` : "" : "");
  function getLink(to) {
    try {
      return proxy.$router.resolve(to);
    } catch (_) {
    }
    return null;
  }
  function navigateToRouterLink(e, { returnRouterError, to = props.to, replace = props.replace } = {}) {
    if (props.disable === true) {
      e.preventDefault();
      return Promise.resolve(false);
    }
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== void 0 && e.button !== 0 || props.target === "_blank") {
      return Promise.resolve(false);
    }
    e.preventDefault();
    const promise = proxy.$router[replace === true ? "replace" : "push"](to);
    return returnRouterError === true ? promise : promise.then(() => {
    }).catch(() => {
    });
  }
  function navigateOnClick(e) {
    if (hasRouterLink.value === true) {
      const go = (opts) => navigateToRouterLink(e, opts);
      emit("click", e, go);
      e.defaultPrevented !== true && go();
    } else {
      emit("click", e);
    }
  }
  return {
    hasRouterLink,
    hasHrefLink,
    hasLink,
    linkTag,
    resolvedLink,
    linkIsActive,
    linkIsExactActive,
    linkClass,
    linkAttrs,
    getLink,
    navigateToRouterLink,
    navigateOnClick
  };
}
const btnPadding = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};
const defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
const formTypes = ["button", "submit", "reset"];
const mediaTypeRE = /[^\s]\/[^\s]/;
const btnDesignOptions = ["flat", "outline", "push", "unelevated"];
function getBtnDesign(props, defaultValue) {
  if (props.flat === true)
    return "flat";
  if (props.outline === true)
    return "outline";
  if (props.push === true)
    return "push";
  if (props.unelevated === true)
    return "unelevated";
  return defaultValue;
}
const nonRoundBtnProps = {
  ...useSizeProps,
  ...useRouterLinkNonMatchingProps,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...btnDesignOptions.reduce(
    (acc, val) => (acc[val] = Boolean) && acc,
    {}
  ),
  square: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  align: {
    ...useAlignProps.align,
    default: "center"
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
};
const useBtnProps = {
  ...nonRoundBtnProps,
  round: Boolean
};
function useBtn(props) {
  const sizeStyle = useSize(props, defaultSizes);
  const alignClass = useAlign(props);
  const { hasRouterLink, hasLink, linkTag, linkAttrs, navigateOnClick } = useRouterLink({
    fallbackTag: "button"
  });
  const style = computed(() => {
    const obj = props.fab === false && props.fabMini === false ? sizeStyle.value : {};
    return props.padding !== void 0 ? Object.assign({}, obj, {
      padding: props.padding.split(/\s+/).map((v) => v in btnPadding ? btnPadding[v] + "px" : v).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : obj;
  });
  const isRounded = computed(
    () => props.rounded === true || props.fab === true || props.fabMini === true
  );
  const isActionable = computed(
    () => props.disable !== true && props.loading !== true
  );
  const tabIndex = computed(() => isActionable.value === true ? props.tabindex || 0 : -1);
  const design = computed(() => getBtnDesign(props, "standard"));
  const attributes = computed(() => {
    const acc = { tabindex: tabIndex.value };
    if (hasLink.value === true) {
      Object.assign(acc, linkAttrs.value);
    } else if (formTypes.includes(props.type) === true) {
      acc.type = props.type;
    }
    if (linkTag.value === "a") {
      if (props.disable === true) {
        acc["aria-disabled"] = "true";
      } else if (acc.href === void 0) {
        acc.role = "button";
      }
      if (hasRouterLink.value !== true && mediaTypeRE.test(props.type) === true) {
        acc.type = props.type;
      }
    } else if (props.disable === true) {
      acc.disabled = "";
      acc["aria-disabled"] = "true";
    }
    if (props.loading === true && props.percentage !== void 0) {
      Object.assign(acc, {
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": props.percentage
      });
    }
    return acc;
  });
  const classes = computed(() => {
    let colors;
    if (props.color !== void 0) {
      if (props.flat === true || props.outline === true) {
        colors = `text-${props.textColor || props.color}`;
      } else {
        colors = `bg-${props.color} text-${props.textColor || "white"}`;
      }
    } else if (props.textColor) {
      colors = `text-${props.textColor}`;
    }
    const shape = props.round === true ? "round" : `rectangle${isRounded.value === true ? " q-btn--rounded" : props.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${design.value} q-btn--${shape}` + (colors !== void 0 ? " " + colors : "") + (isActionable.value === true ? " q-btn--actionable q-focusable q-hoverable" : props.disable === true ? " disabled" : "") + (props.fab === true ? " q-btn--fab" : props.fabMini === true ? " q-btn--fab-mini" : "") + (props.noCaps === true ? " q-btn--no-uppercase" : "") + (props.dense === true ? " q-btn--dense" : "") + (props.stretch === true ? " no-border-radius self-stretch" : "") + (props.glossy === true ? " glossy" : "") + (props.square ? " q-btn--square" : "");
  });
  const innerClasses = computed(
    () => alignClass.value + (props.stack === true ? " column" : " row") + (props.noWrap === true ? " no-wrap text-no-wrap" : "") + (props.loading === true ? " q-btn__content--hidden" : "")
  );
  return {
    classes,
    style,
    innerClasses,
    attributes,
    hasLink,
    linkTag,
    navigateOnClick,
    isActionable
  };
}
const { passiveCapture } = listenOpts;
let touchTarget = null, keyboardTarget = null, mouseTarget = null;
var QBtn = createComponent({
  name: "QBtn",
  props: {
    ...useBtnProps,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const {
      classes,
      style,
      innerClasses,
      attributes,
      hasLink,
      linkTag,
      navigateOnClick,
      isActionable
    } = useBtn(props);
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    let localTouchTargetEl = null, avoidMouseRipple, mouseTimer = null;
    const hasLabel = computed(
      () => props.label !== void 0 && props.label !== null && props.label !== ""
    );
    const ripple = computed(() => props.disable === true || props.ripple === false ? false : {
      keyCodes: hasLink.value === true ? [13, 32] : [13],
      ...props.ripple === true ? {} : props.ripple
    });
    const rippleProps = computed(() => ({ center: props.round }));
    const percentageStyle = computed(() => {
      const val = Math.max(0, Math.min(100, props.percentage));
      return val > 0 ? { transition: "transform 0.6s", transform: `translateX(${val - 100}%)` } : {};
    });
    const onEvents = computed(() => {
      if (props.loading === true) {
        return {
          onMousedown: onLoadingEvt,
          onTouchstart: onLoadingEvt,
          onClick: onLoadingEvt,
          onKeydown: onLoadingEvt,
          onKeyup: onLoadingEvt
        };
      }
      if (isActionable.value === true) {
        const acc = {
          onClick,
          onKeydown,
          onMousedown
        };
        if (proxy.$q.platform.has.touch === true) {
          const suffix = props.onTouchstart !== void 0 ? "" : "Passive";
          acc[`onTouchstart${suffix}`] = onTouchstart;
        }
        return acc;
      }
      return {
        onClick: stopAndPrevent
      };
    });
    const nodeProps = computed(() => ({
      ref: rootRef,
      class: "q-btn q-btn-item non-selectable no-outline " + classes.value,
      style: style.value,
      ...attributes.value,
      ...onEvents.value
    }));
    function onClick(e) {
      if (rootRef.value === null)
        return;
      if (e !== void 0) {
        if (e.defaultPrevented === true) {
          return;
        }
        const el = document.activeElement;
        if (props.type === "submit" && el !== document.body && rootRef.value.contains(el) === false && el.contains(rootRef.value) === false) {
          rootRef.value.focus();
          const onClickCleanup = () => {
            document.removeEventListener("keydown", stopAndPrevent, true);
            document.removeEventListener("keyup", onClickCleanup, passiveCapture);
            rootRef.value !== null && rootRef.value.removeEventListener("blur", onClickCleanup, passiveCapture);
          };
          document.addEventListener("keydown", stopAndPrevent, true);
          document.addEventListener("keyup", onClickCleanup, passiveCapture);
          rootRef.value.addEventListener("blur", onClickCleanup, passiveCapture);
        }
      }
      navigateOnClick(e);
    }
    function onKeydown(e) {
      if (rootRef.value === null)
        return;
      emit("keydown", e);
      if (isKeyCode(e, [13, 32]) === true && keyboardTarget !== rootRef.value) {
        keyboardTarget !== null && cleanup();
        if (e.defaultPrevented !== true) {
          rootRef.value.focus();
          keyboardTarget = rootRef.value;
          rootRef.value.classList.add("q-btn--active");
          document.addEventListener("keyup", onPressEnd, true);
          rootRef.value.addEventListener("blur", onPressEnd, passiveCapture);
        }
        stopAndPrevent(e);
      }
    }
    function onTouchstart(e) {
      if (rootRef.value === null)
        return;
      emit("touchstart", e);
      if (e.defaultPrevented === true)
        return;
      if (touchTarget !== rootRef.value) {
        touchTarget !== null && cleanup();
        touchTarget = rootRef.value;
        localTouchTargetEl = e.target;
        localTouchTargetEl.addEventListener("touchcancel", onPressEnd, passiveCapture);
        localTouchTargetEl.addEventListener("touchend", onPressEnd, passiveCapture);
      }
      avoidMouseRipple = true;
      mouseTimer !== null && clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        mouseTimer = null;
        avoidMouseRipple = false;
      }, 200);
    }
    function onMousedown(e) {
      if (rootRef.value === null)
        return;
      e.qSkipRipple = avoidMouseRipple === true;
      emit("mousedown", e);
      if (e.defaultPrevented !== true && mouseTarget !== rootRef.value) {
        mouseTarget !== null && cleanup();
        mouseTarget = rootRef.value;
        rootRef.value.classList.add("q-btn--active");
        document.addEventListener("mouseup", onPressEnd, passiveCapture);
      }
    }
    function onPressEnd(e) {
      if (rootRef.value === null)
        return;
      if (e !== void 0 && e.type === "blur" && document.activeElement === rootRef.value) {
        return;
      }
      if (e !== void 0 && e.type === "keyup") {
        if (keyboardTarget === rootRef.value && isKeyCode(e, [13, 32]) === true) {
          const evt = new MouseEvent("click", e);
          evt.qKeyEvent = true;
          e.defaultPrevented === true && prevent(evt);
          e.cancelBubble === true && stop(evt);
          rootRef.value.dispatchEvent(evt);
          stopAndPrevent(e);
          e.qKeyEvent = true;
        }
        emit("keyup", e);
      }
      cleanup();
    }
    function cleanup(destroying) {
      const blurTarget = blurTargetRef.value;
      if (destroying !== true && (touchTarget === rootRef.value || mouseTarget === rootRef.value) && blurTarget !== null && blurTarget !== document.activeElement) {
        blurTarget.setAttribute("tabindex", -1);
        blurTarget.focus();
      }
      if (touchTarget === rootRef.value) {
        if (localTouchTargetEl !== null) {
          localTouchTargetEl.removeEventListener("touchcancel", onPressEnd, passiveCapture);
          localTouchTargetEl.removeEventListener("touchend", onPressEnd, passiveCapture);
        }
        touchTarget = localTouchTargetEl = null;
      }
      if (mouseTarget === rootRef.value) {
        document.removeEventListener("mouseup", onPressEnd, passiveCapture);
        mouseTarget = null;
      }
      if (keyboardTarget === rootRef.value) {
        document.removeEventListener("keyup", onPressEnd, true);
        rootRef.value !== null && rootRef.value.removeEventListener("blur", onPressEnd, passiveCapture);
        keyboardTarget = null;
      }
      rootRef.value !== null && rootRef.value.classList.remove("q-btn--active");
    }
    function onLoadingEvt(evt) {
      stopAndPrevent(evt);
      evt.qSkipRipple = true;
    }
    onBeforeUnmount(() => {
      cleanup(true);
    });
    Object.assign(proxy, {
      click: (e) => {
        if (isActionable.value === true) {
          onClick(e);
        }
      }
    });
    return () => {
      let inner = [];
      props.icon !== void 0 && inner.push(
        h(QIcon, {
          name: props.icon,
          left: props.stack !== true && hasLabel.value === true,
          role: "img"
        })
      );
      hasLabel.value === true && inner.push(
        h("span", { class: "block" }, [props.label])
      );
      inner = hMergeSlot(slots.default, inner);
      if (props.iconRight !== void 0 && props.round === false) {
        inner.push(
          h(QIcon, {
            name: props.iconRight,
            right: props.stack !== true && hasLabel.value === true,
            role: "img"
          })
        );
      }
      const child = [
        h("span", {
          class: "q-focus-helper",
          ref: blurTargetRef
        })
      ];
      if (props.loading === true && props.percentage !== void 0) {
        child.push(
          h("span", {
            class: "q-btn__progress absolute-full overflow-hidden" + (props.darkPercentage === true ? " q-btn__progress--dark" : "")
          }, [
            h("span", {
              class: "q-btn__progress-indicator fit block",
              style: percentageStyle.value
            })
          ])
        );
      }
      child.push(
        h("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + innerClasses.value
        }, inner)
      );
      props.loading !== null && child.push(
        h(Transition, {
          name: "q-transition--fade"
        }, () => props.loading === true ? [
          h("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, slots.loading !== void 0 ? slots.loading() : [h(QSpinner)])
        ] : null)
      );
      return withDirectives(
        h(
          linkTag.value,
          nodeProps.value,
          child
        ),
        [[
          Ripple,
          ripple.value,
          void 0,
          rippleProps.value
        ]]
      );
    };
  }
});
export { QIcon as Q, Ripple as R, hUniqueSlot as a, hDir as b, hMergeSlot as c, QBtn as d, css as e, vmIsDestroyed as f, getElement as g, hSlot as h, useRouterLink as i, QSpinner as j, useSizeProps as k, useSize as l, hMergeSlotSafely as m, getParentProxy as n, childHasFocus as o, useAlignProps as p, useAlign as q, useRouterLinkProps as u, vmHasRouter as v };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUJ0bi42MjIzOGI1Yy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS51c2Utc2l6ZS91c2Utc2l6ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvaWNvbi9RSWNvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3Bpbm5lci91c2Utc3Bpbm5lci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3Bpbm5lci9RU3Bpbm5lci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL2RvbS9kb20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy90aHJvdHRsZS90aHJvdHRsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvcmlwcGxlL1JpcHBsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWFsaWduL3VzZS1hbGlnbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUudm0vdm0uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1yb3V0ZXItbGluay91c2Utcm91dGVyLWxpbmsuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi91c2UtYnRuLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9idG4vUUJ0bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGNvbnN0IHVzZVNpemVEZWZhdWx0cyA9IHtcbiAgeHM6IDE4LFxuICBzbTogMjQsXG4gIG1kOiAzMixcbiAgbGc6IDM4LFxuICB4bDogNDZcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNpemVQcm9wcyA9IHtcbiAgc2l6ZTogU3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgc2l6ZXMgPSB1c2VTaXplRGVmYXVsdHMpIHtcbiAgLy8gcmV0dXJuIHNpemVTdHlsZVxuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnNpemUgIT09IHZvaWQgMFxuICAgICAgPyB7IGZvbnRTaXplOiBwcm9wcy5zaXplIGluIHNpemVzID8gYCR7IHNpemVzWyBwcm9wcy5zaXplIF0gfXB4YCA6IHByb3BzLnNpemUgfVxuICAgICAgOiBudWxsXG4gICkpXG59XG4iLCJpbXBvcnQgeyBoLCB3aXRoRGlyZWN0aXZlcyB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGhTbG90IChzbG90LCBvdGhlcndpc2UpIHtcbiAgcmV0dXJuIHNsb3QgIT09IHZvaWQgMFxuICAgID8gc2xvdCgpIHx8IG90aGVyd2lzZVxuICAgIDogb3RoZXJ3aXNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoVW5pcXVlU2xvdCAoc2xvdCwgb3RoZXJ3aXNlKSB7XG4gIGlmIChzbG90ICE9PSB2b2lkIDApIHtcbiAgICBjb25zdCB2bm9kZSA9IHNsb3QoKVxuICAgIGlmICh2bm9kZSAhPT0gdm9pZCAwICYmIHZub2RlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdm5vZGUuc2xpY2UoKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdGhlcndpc2Vcbn1cblxuLyoqXG4gKiBTb3VyY2UgZGVmaW5pdGVseSBleGlzdHMsXG4gKiBzbyBpdCdzIG1lcmdlZCB3aXRoIHRoZSBwb3NzaWJsZSBzbG90XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoTWVyZ2VTbG90IChzbG90LCBzb3VyY2UpIHtcbiAgcmV0dXJuIHNsb3QgIT09IHZvaWQgMFxuICAgID8gc291cmNlLmNvbmNhdChzbG90KCkpXG4gICAgOiBzb3VyY2Vcbn1cblxuLyoqXG4gKiBNZXJnZSB3aXRoIHBvc3NpYmxlIHNsb3QsXG4gKiBldmVuIGlmIHNvdXJjZSBtaWdodCBub3QgZXhpc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhNZXJnZVNsb3RTYWZlbHkgKHNsb3QsIHNvdXJjZSkge1xuICBpZiAoc2xvdCA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHNvdXJjZVxuICB9XG5cbiAgcmV0dXJuIHNvdXJjZSAhPT0gdm9pZCAwXG4gICAgPyBzb3VyY2UuY29uY2F0KHNsb3QoKSlcbiAgICA6IHNsb3QoKVxufVxuXG4vKlxuICogKFN0cmluZykgIGtleSAgICAgICAtIHVuaXF1ZSB2bm9kZSBrZXlcbiAqIChCb29sZWFuKSBjb25kaXRpb24gLSBzaG91bGQgY2hhbmdlIE9OTFkgd2hlbiBhZGRpbmcvcmVtb3ZpbmcgZGlyZWN0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoRGlyIChcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAga2V5LFxuICBjb25kaXRpb24sXG4gIGdldERpcnNGblxuKSB7XG4gIGRhdGEua2V5ID0ga2V5ICsgY29uZGl0aW9uXG5cbiAgY29uc3Qgdm5vZGUgPSBoKHRhZywgZGF0YSwgY2hpbGRyZW4pXG5cbiAgcmV0dXJuIGNvbmRpdGlvbiA9PT0gdHJ1ZVxuICAgID8gd2l0aERpcmVjdGl2ZXModm5vZGUsIGdldERpcnNGbigpKVxuICAgIDogdm5vZGVcbn1cbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VTaXplLCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLXNpemUvdXNlLXNpemUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90LCBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5jb25zdCBkZWZhdWx0Vmlld0JveCA9ICcwIDAgMjQgMjQnXG5cbmNvbnN0IHNhbWVGbiA9IGkgPT4gaVxuY29uc3QgaW9uRm4gPSBpID0+IGBpb25pY29ucyAkeyBpIH1gXG5cbmNvbnN0IGxpYk1hcCA9IHtcbiAgJ21kaS0nOiBpID0+IGBtZGkgJHsgaSB9YCxcbiAgJ2ljb24tJzogc2FtZUZuLCAvLyBmb250YXdlc29tZSBlcXVpdlxuICAnYnQtJzogaSA9PiBgYnQgJHsgaSB9YCxcbiAgJ2V2YS0nOiBpID0+IGBldmEgJHsgaSB9YCxcbiAgJ2lvbi1tZCc6IGlvbkZuLFxuICAnaW9uLWlvcyc6IGlvbkZuLFxuICAnaW9uLWxvZ28nOiBpb25GbixcbiAgJ2ljb25mb250ICc6IHNhbWVGbixcbiAgJ3RpLSc6IGkgPT4gYHRoZW1pZnktaWNvbiAkeyBpIH1gLFxuICAnYmktJzogaSA9PiBgYm9vdHN0cmFwLWljb25zICR7IGkgfWBcbn1cblxuY29uc3QgbWF0TWFwID0ge1xuICBvXzogJy1vdXRsaW5lZCcsXG4gIHJfOiAnLXJvdW5kJyxcbiAgc186ICctc2hhcnAnXG59XG5cbmNvbnN0IHN5bU1hcCA9IHtcbiAgc3ltX29fOiAnLW91dGxpbmVkJyxcbiAgc3ltX3JfOiAnLXJvdW5kZWQnLFxuICBzeW1fc186ICctc2hhcnAnXG59XG5cbmNvbnN0IGxpYlJFID0gbmV3IFJlZ0V4cCgnXignICsgT2JqZWN0LmtleXMobGliTWFwKS5qb2luKCd8JykgKyAnKScpXG5jb25zdCBtYXRSRSA9IG5ldyBSZWdFeHAoJ14oJyArIE9iamVjdC5rZXlzKG1hdE1hcCkuam9pbignfCcpICsgJyknKVxuY29uc3Qgc3ltUkUgPSBuZXcgUmVnRXhwKCdeKCcgKyBPYmplY3Qua2V5cyhzeW1NYXApLmpvaW4oJ3wnKSArICcpJylcbmNvbnN0IG1SRSA9IC9eW01tXVxccz9bLStdP1xcLj9cXGQvXG5jb25zdCBpbWdSRSA9IC9eaW1nOi9cbmNvbnN0IHN2Z1VzZVJFID0gL15zdmd1c2U6L1xuY29uc3QgaW9uUkUgPSAvXmlvbi0vXG5jb25zdCBmYVJFID0gL14oZmEtKGNsYXNzaWN8c2hhcnB8c29saWR8cmVndWxhcnxsaWdodHxicmFuZHN8ZHVvdG9uZXx0aGluKXxbbGZdYVtzcmxiZGtdPykgL1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUljb24nLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlU2l6ZVByb3BzLFxuXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaSdcbiAgICB9LFxuXG4gICAgbmFtZTogU3RyaW5nLFxuICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgbGVmdDogQm9vbGVhbixcbiAgICByaWdodDogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHNpemVTdHlsZSA9IHVzZVNpemUocHJvcHMpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWljb24nXG4gICAgICArIChwcm9wcy5sZWZ0ID09PSB0cnVlID8gJyBvbi1sZWZ0JyA6ICcnKSAvLyBUT0RPIFF2MzogZHJvcCB0aGlzXG4gICAgICArIChwcm9wcy5yaWdodCA9PT0gdHJ1ZSA/ICcgb24tcmlnaHQnIDogJycpXG4gICAgICArIChwcm9wcy5jb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgdHlwZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCBjbHNcbiAgICAgIGxldCBpY29uID0gcHJvcHMubmFtZVxuXG4gICAgICBpZiAoaWNvbiA9PT0gJ25vbmUnIHx8ICFpY29uKSB7XG4gICAgICAgIHJldHVybiB7IG5vbmU6IHRydWUgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJHEuaWNvbk1hcEZuICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9ICRxLmljb25NYXBGbihpY29uKVxuICAgICAgICBpZiAocmVzICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAocmVzLmljb24gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgaWNvbiA9IHJlcy5pY29uXG4gICAgICAgICAgICBpZiAoaWNvbiA9PT0gJ25vbmUnIHx8ICFpY29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7IG5vbmU6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNsczogcmVzLmNscyxcbiAgICAgICAgICAgICAgY29udGVudDogcmVzLmNvbnRlbnQgIT09IHZvaWQgMFxuICAgICAgICAgICAgICAgID8gcmVzLmNvbnRlbnRcbiAgICAgICAgICAgICAgICA6ICcgJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobVJFLnRlc3QoaWNvbikgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgWyBkZWYsIHZpZXdCb3ggPSBkZWZhdWx0Vmlld0JveCBdID0gaWNvbi5zcGxpdCgnfCcpXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdmc6IHRydWUsXG4gICAgICAgICAgdmlld0JveCxcbiAgICAgICAgICBub2RlczogZGVmLnNwbGl0KCcmJicpLm1hcChwYXRoID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFsgZCwgc3R5bGUsIHRyYW5zZm9ybSBdID0gcGF0aC5zcGxpdCgnQEAnKVxuICAgICAgICAgICAgcmV0dXJuIGgoJ3BhdGgnLCB7IHN0eWxlLCBkLCB0cmFuc2Zvcm0gfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpbWdSRS50ZXN0KGljb24pID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW1nOiB0cnVlLFxuICAgICAgICAgIHNyYzogaWNvbi5zdWJzdHJpbmcoNClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3ZnVXNlUkUudGVzdChpY29uKSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBbIGRlZiwgdmlld0JveCA9IGRlZmF1bHRWaWV3Qm94IF0gPSBpY29uLnNwbGl0KCd8JylcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN2Z3VzZTogdHJ1ZSxcbiAgICAgICAgICBzcmM6IGRlZi5zdWJzdHJpbmcoNyksXG4gICAgICAgICAgdmlld0JveFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBjb250ZW50ID0gJyAnXG4gICAgICBjb25zdCBtYXRjaGVzID0gaWNvbi5tYXRjaChsaWJSRSlcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgY2xzID0gbGliTWFwWyBtYXRjaGVzWyAxIF0gXShpY29uKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZmFSRS50ZXN0KGljb24pID09PSB0cnVlKSB7XG4gICAgICAgIGNscyA9IGljb25cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlvblJFLnRlc3QoaWNvbikgPT09IHRydWUpIHtcbiAgICAgICAgY2xzID0gYGlvbmljb25zIGlvbi0keyAkcS5wbGF0Zm9ybS5pcy5pb3MgPT09IHRydWUgPyAnaW9zJyA6ICdtZCcgfSR7IGljb24uc3Vic3RyaW5nKDMpIH1gXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzeW1SRS50ZXN0KGljb24pID09PSB0cnVlKSB7XG4gICAgICAgIC8vIFwibm90cmFuc2xhdGVcIiBjbGFzcyBpcyBmb3IgR29vZ2xlIFRyYW5zbGF0ZVxuICAgICAgICAvLyB0byBhdm9pZCB0YW1wZXJpbmcgd2l0aCBNYXRlcmlhbCBTeW1ib2xzIGxpZ2F0dXJlIGZvbnRcbiAgICAgICAgLy9cbiAgICAgICAgLy8gQ2F1dGlvbjogVG8gYmUgYWJsZSB0byBhZGQgc3VmZml4IHRvIHRoZSBjbGFzcyBuYW1lLFxuICAgICAgICAvLyBrZWVwIHRoZSAnbWF0ZXJpYWwtc3ltYm9scycgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuICAgICAgICBjbHMgPSAnbm90cmFuc2xhdGUgbWF0ZXJpYWwtc3ltYm9scydcblxuICAgICAgICBjb25zdCBtYXRjaGVzID0gaWNvbi5tYXRjaChzeW1SRSlcbiAgICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgICBpY29uID0gaWNvbi5zdWJzdHJpbmcoNilcbiAgICAgICAgICBjbHMgKz0gc3ltTWFwWyBtYXRjaGVzWyAxIF0gXVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudCA9IGljb25cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBcIm5vdHJhbnNsYXRlXCIgY2xhc3MgaXMgZm9yIEdvb2dsZSBUcmFuc2xhdGVcbiAgICAgICAgLy8gdG8gYXZvaWQgdGFtcGVyaW5nIHdpdGggTWF0ZXJpYWwgSWNvbnMgbGlnYXR1cmUgZm9udFxuICAgICAgICAvL1xuICAgICAgICAvLyBDYXV0aW9uOiBUbyBiZSBhYmxlIHRvIGFkZCBzdWZmaXggdG8gdGhlIGNsYXNzIG5hbWUsXG4gICAgICAgIC8vIGtlZXAgdGhlICdtYXRlcmlhbC1pY29ucycgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuICAgICAgICBjbHMgPSAnbm90cmFuc2xhdGUgbWF0ZXJpYWwtaWNvbnMnXG5cbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGljb24ubWF0Y2gobWF0UkUpXG4gICAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgICAgaWNvbiA9IGljb24uc3Vic3RyaW5nKDIpXG4gICAgICAgICAgY2xzICs9IG1hdE1hcFsgbWF0Y2hlc1sgMSBdIF1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnQgPSBpY29uXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNscyxcbiAgICAgICAgY29udGVudFxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzaXplU3R5bGUudmFsdWUsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgcm9sZTogJ3ByZXNlbnRhdGlvbidcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUudmFsdWUubm9uZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gaChwcm9wcy50YWcsIGRhdGEsIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZS52YWx1ZS5pbWcgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgocHJvcHMudGFnLCBkYXRhLCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIFtcbiAgICAgICAgICBoKCdpbWcnLCB7IHNyYzogdHlwZS52YWx1ZS5zcmMgfSlcbiAgICAgICAgXSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlLnZhbHVlLnN2ZyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gaChwcm9wcy50YWcsIGRhdGEsIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICAgIGgoJ3N2ZycsIHtcbiAgICAgICAgICAgIHZpZXdCb3g6IHR5cGUudmFsdWUudmlld0JveCB8fCAnMCAwIDI0IDI0J1xuICAgICAgICAgIH0sIHR5cGUudmFsdWUubm9kZXMpXG4gICAgICAgIF0pKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZS52YWx1ZS5zdmd1c2UgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgocHJvcHMudGFnLCBkYXRhLCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIFtcbiAgICAgICAgICBoKCdzdmcnLCB7XG4gICAgICAgICAgICB2aWV3Qm94OiB0eXBlLnZhbHVlLnZpZXdCb3hcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCd1c2UnLCB7ICd4bGluazpocmVmJzogdHlwZS52YWx1ZS5zcmMgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUudmFsdWUuY2xzICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF0YS5jbGFzcyArPSAnICcgKyB0eXBlLnZhbHVlLmNsc1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChwcm9wcy50YWcsIGRhdGEsIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICB0eXBlLnZhbHVlLmNvbnRlbnRcbiAgICAgIF0pKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgdXNlU2l6ZURlZmF1bHRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2Utc2l6ZS91c2Utc2l6ZS5qcydcblxuZXhwb3J0IGNvbnN0IHVzZVNwaW5uZXJQcm9wcyA9IHtcbiAgc2l6ZToge1xuICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICBkZWZhdWx0OiAnMWVtJ1xuICB9LFxuICBjb2xvcjogU3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNwaW5uZXIgKHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgY1NpemU6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnNpemUgaW4gdXNlU2l6ZURlZmF1bHRzXG4gICAgICAgID8gYCR7IHVzZVNpemVEZWZhdWx0c1sgcHJvcHMuc2l6ZSBdIH1weGBcbiAgICAgICAgOiBwcm9wcy5zaXplXG4gICAgKSksXG5cbiAgICBjbGFzc2VzOiBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc3Bpbm5lcicgKyAocHJvcHMuY29sb3IgPyBgIHRleHQtJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VTcGlubmVyLCB7IHVzZVNwaW5uZXJQcm9wcyB9IGZyb20gJy4vdXNlLXNwaW5uZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGlubmVyJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVNwaW5uZXJQcm9wcyxcblxuICAgIHRoaWNrbmVzczoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogNVxuICAgIH1cbiAgfSxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICBjb25zdCB7IGNTaXplLCBjbGFzc2VzIH0gPSB1c2VTcGlubmVyKHByb3BzKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ3N2ZycsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlICsgJyBxLXNwaW5uZXItbWF0JyxcbiAgICAgIHdpZHRoOiBjU2l6ZS52YWx1ZSxcbiAgICAgIGhlaWdodDogY1NpemUudmFsdWUsXG4gICAgICB2aWV3Qm94OiAnMjUgMjUgNTAgNTAnXG4gICAgfSwgW1xuICAgICAgaCgnY2lyY2xlJywge1xuICAgICAgICBjbGFzczogJ3BhdGgnLFxuICAgICAgICBjeDogJzUwJyxcbiAgICAgICAgY3k6ICc1MCcsXG4gICAgICAgIHI6ICcyMCcsXG4gICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgJ3N0cm9rZS13aWR0aCc6IHByb3BzLnRoaWNrbmVzcyxcbiAgICAgICAgJ3N0cm9rZS1taXRlcmxpbWl0JzogJzEwJ1xuICAgICAgfSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgdW5yZWYgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZzZXQgKGVsKSB7XG4gIGlmIChlbCA9PT0gd2luZG93KSB7XG4gICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH1cbiAgfVxuICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgcmV0dXJuIHsgdG9wLCBsZWZ0IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlIChlbCwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVpZ2h0IChlbCkge1xuICByZXR1cm4gZWwgPT09IHdpbmRvd1xuICAgID8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgOiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpZHRoIChlbCkge1xuICByZXR1cm4gZWwgPT09IHdpbmRvd1xuICAgID8gd2luZG93LmlubmVyV2lkdGhcbiAgICA6IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjc3MgKGVsZW1lbnQsIGNzcykge1xuICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuc3R5bGVcblxuICBmb3IgKGNvbnN0IHByb3AgaW4gY3NzKSB7XG4gICAgc3R5bGVbIHByb3AgXSA9IGNzc1sgcHJvcCBdXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNzc0JhdGNoIChlbGVtZW50cywgc3R5bGUpIHtcbiAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBjc3MoZWwsIHN0eWxlKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWR5IChmbikge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgcmV0dXJuIGZuKClcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbiwgZmFsc2UpXG59XG5cbi8vIGludGVybmFsXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCAoZWwpIHtcbiAgaWYgKGVsID09PSB2b2lkIDAgfHwgZWwgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdm9pZCAwXG4gIH1cblxuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgfHwgdm9pZCAwXG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB2b2lkIDBcbiAgICB9XG4gIH1cblxuICBjb25zdCB0YXJnZXQgPSB1bnJlZihlbClcbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQuJGVsIHx8IHRhcmdldFxuICB9XG59XG5cbi8vIGludGVybmFsXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRIYXNGb2N1cyAoZWwsIGZvY3VzZWRFbCkge1xuICBpZiAoZWwgPT09IHZvaWQgMCB8fCBlbCA9PT0gbnVsbCB8fCBlbC5jb250YWlucyhmb2N1c2VkRWwpID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZvciAobGV0IG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7IG5leHQgIT09IG51bGw7IG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZykge1xuICAgIGlmIChuZXh0LmNvbnRhaW5zKGZvY3VzZWRFbCkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb2Zmc2V0LFxuICBzdHlsZSxcbiAgaGVpZ2h0LFxuICB3aWR0aCxcbiAgY3NzLFxuICBjc3NCYXRjaCxcbiAgcmVhZHlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChmbiwgbGltaXQgPSAyNTApIHtcbiAgbGV0IHdhaXQgPSBmYWxzZSwgcmVzdWx0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgaWYgKHdhaXQgPT09IGZhbHNlKSB7XG4gICAgICB3YWl0ID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHdhaXQgPSBmYWxzZSB9LCBsaW1pdClcbiAgICAgIHJlc3VsdCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGNzcyB9IGZyb20gJy4uLy4uL3V0aWxzL2RvbS9kb20uanMnXG5pbXBvcnQgeyBwb3NpdGlvbiwgc3RvcCwgYWRkRXZ0LCBjbGVhbkV2dCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5rZXlib2FyZC9rZXktY29tcG9zaXRpb24uanMnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi4vLi4vdXRpbHMvdGhyb3R0bGUvdGhyb3R0bGUuanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtL25vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0uanMnXG5cbmZ1bmN0aW9uIHNob3dSaXBwbGUgKGV2dCwgZWwsIGN0eCwgZm9yY2VDZW50ZXIpIHtcbiAgY3R4Lm1vZGlmaWVycy5zdG9wID09PSB0cnVlICYmIHN0b3AoZXZ0KVxuXG4gIGNvbnN0IGNvbG9yID0gY3R4Lm1vZGlmaWVycy5jb2xvclxuICBsZXQgY2VudGVyID0gY3R4Lm1vZGlmaWVycy5jZW50ZXJcbiAgY2VudGVyID0gY2VudGVyID09PSB0cnVlIHx8IGZvcmNlQ2VudGVyID09PSB0cnVlXG5cbiAgY29uc3RcbiAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgIGlubmVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICBwb3MgPSBwb3NpdGlvbihldnQpLFxuICAgIHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICBkaWFtZXRlciA9IE1hdGguc3FydCh3aWR0aCAqIHdpZHRoICsgaGVpZ2h0ICogaGVpZ2h0KSxcbiAgICByYWRpdXMgPSBkaWFtZXRlciAvIDIsXG4gICAgY2VudGVyWCA9IGAkeyAod2lkdGggLSBkaWFtZXRlcikgLyAyIH1weGAsXG4gICAgeCA9IGNlbnRlciA/IGNlbnRlclggOiBgJHsgcG9zLmxlZnQgLSBsZWZ0IC0gcmFkaXVzIH1weGAsXG4gICAgY2VudGVyWSA9IGAkeyAoaGVpZ2h0IC0gZGlhbWV0ZXIpIC8gMiB9cHhgLFxuICAgIHkgPSBjZW50ZXIgPyBjZW50ZXJZIDogYCR7IHBvcy50b3AgLSB0b3AgLSByYWRpdXMgfXB4YFxuXG4gIGlubmVyTm9kZS5jbGFzc05hbWUgPSAncS1yaXBwbGVfX2lubmVyJ1xuICBjc3MoaW5uZXJOb2RlLCB7XG4gICAgaGVpZ2h0OiBgJHsgZGlhbWV0ZXIgfXB4YCxcbiAgICB3aWR0aDogYCR7IGRpYW1ldGVyIH1weGAsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHsgeCB9LCR7IHkgfSwwKSBzY2FsZTNkKC4yLC4yLDEpYCxcbiAgICBvcGFjaXR5OiAwXG4gIH0pXG5cbiAgbm9kZS5jbGFzc05hbWUgPSBgcS1yaXBwbGUkeyBjb2xvciA/ICcgdGV4dC0nICsgY29sb3IgOiAnJyB9YFxuICBub2RlLnNldEF0dHJpYnV0ZSgnZGlyJywgJ2x0cicpXG4gIG5vZGUuYXBwZW5kQ2hpbGQoaW5uZXJOb2RlKVxuICBlbC5hcHBlbmRDaGlsZChub2RlKVxuXG4gIGNvbnN0IGFib3J0ID0gKCkgPT4ge1xuICAgIG5vZGUucmVtb3ZlKClcbiAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gIH1cbiAgY3R4LmFib3J0LnB1c2goYWJvcnQpXG5cbiAgbGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaW5uZXJOb2RlLmNsYXNzTGlzdC5hZGQoJ3EtcmlwcGxlX19pbm5lci0tZW50ZXInKVxuICAgIGlubmVyTm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHsgY2VudGVyWCB9LCR7IGNlbnRlclkgfSwwKSBzY2FsZTNkKDEsMSwxKWBcbiAgICBpbm5lck5vZGUuc3R5bGUub3BhY2l0eSA9IDAuMlxuXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlubmVyTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdxLXJpcHBsZV9faW5uZXItLWVudGVyJylcbiAgICAgIGlubmVyTm9kZS5jbGFzc0xpc3QuYWRkKCdxLXJpcHBsZV9faW5uZXItLWxlYXZlJylcbiAgICAgIGlubmVyTm9kZS5zdHlsZS5vcGFjaXR5ID0gMFxuXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBub2RlLnJlbW92ZSgpXG4gICAgICAgIGN0eC5hYm9ydC5zcGxpY2UoY3R4LmFib3J0LmluZGV4T2YoYWJvcnQpLCAxKVxuICAgICAgfSwgMjc1KVxuICAgIH0sIDI1MClcbiAgfSwgNTApXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1vZGlmaWVycyAoY3R4LCB7IG1vZGlmaWVycywgdmFsdWUsIGFyZyB9KSB7XG4gIGNvbnN0IGNmZyA9IE9iamVjdC5hc3NpZ24oe30sIGN0eC5jZmcucmlwcGxlLCBtb2RpZmllcnMsIHZhbHVlKVxuICBjdHgubW9kaWZpZXJzID0ge1xuICAgIGVhcmx5OiBjZmcuZWFybHkgPT09IHRydWUsXG4gICAgc3RvcDogY2ZnLnN0b3AgPT09IHRydWUsXG4gICAgY2VudGVyOiBjZmcuY2VudGVyID09PSB0cnVlLFxuICAgIGNvbG9yOiBjZmcuY29sb3IgfHwgYXJnLFxuICAgIGtleUNvZGVzOiBbXS5jb25jYXQoY2ZnLmtleUNvZGVzIHx8IDEzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpcmVjdGl2ZShfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgPyB7IG5hbWU6ICdyaXBwbGUnLCBnZXRTU1JQcm9wcyB9XG4gIDoge1xuICAgICAgbmFtZTogJ3JpcHBsZScsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgYmluZGluZykge1xuICAgICAgICBjb25zdCBjZmcgPSBiaW5kaW5nLmluc3RhbmNlLiQuYXBwQ29udGV4dC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kcS5jb25maWcgfHwge31cblxuICAgICAgICBpZiAoY2ZnLnJpcHBsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICBjZmcsXG4gICAgICAgICAgZW5hYmxlZDogYmluZGluZy52YWx1ZSAhPT0gZmFsc2UsXG4gICAgICAgICAgbW9kaWZpZXJzOiB7fSxcbiAgICAgICAgICBhYm9ydDogW10sXG5cbiAgICAgICAgICBzdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5lbmFibGVkID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGV2dC5xU2tpcFJpcHBsZSAhPT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBldnQudHlwZSA9PT0gKGN0eC5tb2RpZmllcnMuZWFybHkgPT09IHRydWUgPyAncG9pbnRlcmRvd24nIDogJ2NsaWNrJylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzaG93UmlwcGxlKGV2dCwgZWwsIGN0eCwgZXZ0LnFLZXlFdmVudCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAga2V5c3RhcnQ6IHRocm90dGxlKGV2dCA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5lbmFibGVkID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGV2dC5xU2tpcFJpcHBsZSAhPT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBpc0tleUNvZGUoZXZ0LCBjdHgubW9kaWZpZXJzLmtleUNvZGVzKSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBldnQudHlwZSA9PT0gYGtleSR7IGN0eC5tb2RpZmllcnMuZWFybHkgPT09IHRydWUgPyAnZG93bicgOiAndXAnIH1gXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2hvd1JpcHBsZShldnQsIGVsLCBjdHgsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMzAwKVxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlTW9kaWZpZXJzKGN0eCwgYmluZGluZylcblxuICAgICAgICBlbC5fX3FyaXBwbGUgPSBjdHhcblxuICAgICAgICBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICBbIGVsLCAncG9pbnRlcmRvd24nLCAnc3RhcnQnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICBbIGVsLCAnY2xpY2snLCAnc3RhcnQnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICBbIGVsLCAna2V5ZG93bicsICdrZXlzdGFydCcsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgZWwsICdrZXl1cCcsICdrZXlzdGFydCcsICdwYXNzaXZlJyBdXG4gICAgICAgIF0pXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVkIChlbCwgYmluZGluZykge1xuICAgICAgICBpZiAoYmluZGluZy5vbGRWYWx1ZSAhPT0gYmluZGluZy52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXJpcHBsZVxuICAgICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY3R4LmVuYWJsZWQgPSBiaW5kaW5nLnZhbHVlICE9PSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAoY3R4LmVuYWJsZWQgPT09IHRydWUgJiYgT2JqZWN0KGJpbmRpbmcudmFsdWUpID09PSBiaW5kaW5nLnZhbHVlKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZU1vZGlmaWVycyhjdHgsIGJpbmRpbmcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBiZWZvcmVVbm1vdW50IChlbCkge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3FyaXBwbGVcbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY3R4LmFib3J0LmZvckVhY2goZm4gPT4geyBmbigpIH0pXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAnbWFpbicpXG4gICAgICAgICAgZGVsZXRlIGVsLl9xcmlwcGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4pXG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGNvbnN0IGFsaWduTWFwID0ge1xuICBsZWZ0OiAnc3RhcnQnLFxuICBjZW50ZXI6ICdjZW50ZXInLFxuICByaWdodDogJ2VuZCcsXG4gIGJldHdlZW46ICdiZXR3ZWVuJyxcbiAgYXJvdW5kOiAnYXJvdW5kJyxcbiAgZXZlbmx5OiAnZXZlbmx5JyxcbiAgc3RyZXRjaDogJ3N0cmV0Y2gnXG59XG5cbmV4cG9ydCBjb25zdCBhbGlnblZhbHVlcyA9IE9iamVjdC5rZXlzKGFsaWduTWFwKVxuXG5leHBvcnQgY29uc3QgdXNlQWxpZ25Qcm9wcyA9IHtcbiAgYWxpZ246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdmFsaWRhdG9yOiB2ID0+IGFsaWduVmFsdWVzLmluY2x1ZGVzKHYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gIC8vIHJldHVybiBhbGlnbkNsYXNzXG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWxpZ24gPSBwcm9wcy5hbGlnbiA9PT0gdm9pZCAwXG4gICAgICA/IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3N0cmV0Y2gnIDogJ2xlZnQnXG4gICAgICA6IHByb3BzLmFsaWduXG5cbiAgICByZXR1cm4gYCR7IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2l0ZW1zJyA6ICdqdXN0aWZ5JyB9LSR7IGFsaWduTWFwWyBhbGlnbiBdIH1gXG4gIH0pXG59XG4iLCIvLyBjb3BpZWQgdG8gZG9jcyB0b29cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRQcm94eSAocHJveHkpIHtcbiAgaWYgKE9iamVjdChwcm94eS4kcGFyZW50KSA9PT0gcHJveHkuJHBhcmVudCkge1xuICAgIHJldHVybiBwcm94eS4kcGFyZW50XG4gIH1cblxuICBsZXQgeyBwYXJlbnQgfSA9IHByb3h5LiRcblxuICB3aGlsZSAoT2JqZWN0KHBhcmVudCkgPT09IHBhcmVudCkge1xuICAgIGlmIChPYmplY3QocGFyZW50LnByb3h5KSA9PT0gcGFyZW50LnByb3h5KSB7XG4gICAgICByZXR1cm4gcGFyZW50LnByb3h5XG4gICAgfVxuXG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudFxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbGxOb3JtYWxpemVkVk5vZGVzIChjaGlsZHJlbiwgdm5vZGUpIHtcbiAgaWYgKHR5cGVvZiB2bm9kZS50eXBlID09PSAnc3ltYm9sJykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZub2RlLmNoaWxkcmVuKSA9PT0gdHJ1ZSkge1xuICAgICAgdm5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGZpbGxOb3JtYWxpemVkVk5vZGVzKGNoaWxkcmVuLCBjaGlsZClcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGNoaWxkcmVuLmFkZCh2bm9kZSlcbiAgfVxufVxuXG4vLyB2bm9kZXMgZnJvbSByZW5kZXJlZCBpbiBhZHZhbmNlZCBzbG90c1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRWTm9kZXMgKHZub2Rlcykge1xuICBjb25zdCBjaGlsZHJlbiA9IG5ldyBTZXQoKVxuXG4gIHZub2Rlcy5mb3JFYWNoKHZub2RlID0+IHtcbiAgICBmaWxsTm9ybWFsaXplZFZOb2RlcyhjaGlsZHJlbiwgdm5vZGUpXG4gIH0pXG5cbiAgcmV0dXJuIEFycmF5LmZyb20oY2hpbGRyZW4pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2bUhhc1JvdXRlciAodm0pIHtcbiAgcmV0dXJuIHZtLmFwcENvbnRleHQuY29uZmlnLmdsb2JhbFByb3BlcnRpZXMuJHJvdXRlciAhPT0gdm9pZCAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2bUlzRGVzdHJveWVkICh2bSkge1xuICByZXR1cm4gdm0uaXNVbm1vdW50ZWQgPT09IHRydWUgfHwgdm0uaXNEZWFjdGl2YXRlZCA9PT0gdHJ1ZVxufVxuIiwiLypcbiAqIEluc3BpcmVkIGJ5IFJvdXRlckxpbmsgZnJvbSBWdWUgUm91dGVyXG4gKiAgLS0+IEFQSSBzaG91bGQgbWF0Y2ghXG4gKi9cblxuaW1wb3J0IHsgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgdm1IYXNSb3V0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnZtL3ZtLmpzJ1xuXG4vLyBHZXQgdGhlIG9yaWdpbmFsIHBhdGggdmFsdWUgb2YgYSByZWNvcmQgYnkgZm9sbG93aW5nIGl0cyBhbGlhc09mXG5mdW5jdGlvbiBnZXRPcmlnaW5hbFBhdGggKHJlY29yZCkge1xuICByZXR1cm4gcmVjb3JkXG4gICAgPyAoXG4gICAgICAgIHJlY29yZC5hbGlhc09mXG4gICAgICAgICAgPyByZWNvcmQuYWxpYXNPZi5wYXRoXG4gICAgICAgICAgOiByZWNvcmQucGF0aFxuICAgICAgKSA6ICcnXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVJvdXRlUmVjb3JkIChhLCBiKSB7XG4gIC8vIHNpbmNlIHRoZSBvcmlnaW5hbCByZWNvcmQgaGFzIGFuIHVuZGVmaW5lZCB2YWx1ZSBmb3IgYWxpYXNPZlxuICAvLyBidXQgYWxsIGFsaWFzZXMgcG9pbnQgdG8gdGhlIG9yaWdpbmFsIHJlY29yZCwgdGhpcyB3aWxsIGFsd2F5cyBjb21wYXJlXG4gIC8vIHRoZSBvcmlnaW5hbCByZWNvcmRcbiAgcmV0dXJuIChhLmFsaWFzT2YgfHwgYSkgPT09IChiLmFsaWFzT2YgfHwgYilcbn1cblxuZnVuY3Rpb24gaW5jbHVkZXNQYXJhbXMgKG91dGVyLCBpbm5lcikge1xuICBmb3IgKGNvbnN0IGtleSBpbiBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICBpbm5lclZhbHVlID0gaW5uZXJbIGtleSBdLFxuICAgICAgb3V0ZXJWYWx1ZSA9IG91dGVyWyBrZXkgXVxuXG4gICAgaWYgKHR5cGVvZiBpbm5lclZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGlubmVyVmFsdWUgIT09IG91dGVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgQXJyYXkuaXNBcnJheShvdXRlclZhbHVlKSA9PT0gZmFsc2VcbiAgICAgIHx8IG91dGVyVmFsdWUubGVuZ3RoICE9PSBpbm5lclZhbHVlLmxlbmd0aFxuICAgICAgfHwgaW5uZXJWYWx1ZS5zb21lKCh2YWx1ZSwgaSkgPT4gdmFsdWUgIT09IG91dGVyVmFsdWVbIGkgXSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzRXF1aXZhbGVudEFycmF5IChhLCBiKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGIpID09PSB0cnVlXG4gICAgPyBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeSgodmFsdWUsIGkpID0+IHZhbHVlID09PSBiWyBpIF0pXG4gICAgOiBhLmxlbmd0aCA9PT0gMSAmJiBhWyAwIF0gPT09IGJcbn1cblxuZnVuY3Rpb24gaXNTYW1lUm91dGVMb2NhdGlvblBhcmFtc1ZhbHVlIChhLCBiKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGEpID09PSB0cnVlXG4gICAgPyBpc0VxdWl2YWxlbnRBcnJheShhLCBiKVxuICAgIDogKFxuICAgICAgICBBcnJheS5pc0FycmF5KGIpID09PSB0cnVlXG4gICAgICAgICAgPyBpc0VxdWl2YWxlbnRBcnJheShiLCBhKVxuICAgICAgICAgIDogYSA9PT0gYlxuICAgICAgKVxufVxuXG5mdW5jdGlvbiBpc1NhbWVSb3V0ZUxvY2F0aW9uUGFyYW1zIChhLCBiKSB7XG4gIGlmIChPYmplY3Qua2V5cyhhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gYSkge1xuICAgIGlmIChpc1NhbWVSb3V0ZUxvY2F0aW9uUGFyYW1zVmFsdWUoYVsga2V5IF0sIGJbIGtleSBdKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBjb25zdCB1c2VSb3V0ZXJMaW5rTm9uTWF0Y2hpbmdQcm9wcyA9IHtcbiAgLy8gcm91dGVyLWxpbmtcbiAgdG86IFsgU3RyaW5nLCBPYmplY3QgXSxcbiAgcmVwbGFjZTogQm9vbGVhbixcblxuICAvLyByZWd1bGFyIDxhPiBsaW5rXG4gIGhyZWY6IFN0cmluZyxcbiAgdGFyZ2V0OiBTdHJpbmcsXG5cbiAgLy8gc3RhdGVcbiAgZGlzYWJsZTogQm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgdXNlUm91dGVyTGlua1Byb3BzID0ge1xuICAuLi51c2VSb3V0ZXJMaW5rTm9uTWF0Y2hpbmdQcm9wcyxcblxuICAvLyByb3V0ZXItbGlua1xuICBleGFjdDogQm9vbGVhbixcbiAgYWN0aXZlQ2xhc3M6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ3Etcm91dGVyLWxpbmstLWFjdGl2ZSdcbiAgfSxcbiAgZXhhY3RBY3RpdmVDbGFzczoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAncS1yb3V0ZXItbGluay0tZXhhY3QtYWN0aXZlJ1xuICB9XG59XG5cbi8vIGV4dGVybmFsIHByb3BzOiB0eXBlLCB0YWdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgZmFsbGJhY2tUYWcsIHVzZURpc2FibGVGb3JSb3V0ZXJMaW5rUHJvcHMgPSB0cnVlIH0gPSB7fSkge1xuICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IHsgcHJvcHMsIHByb3h5LCBlbWl0IH0gPSB2bVxuXG4gIGNvbnN0IGhhc1JvdXRlciA9IHZtSGFzUm91dGVyKHZtKVxuICBjb25zdCBoYXNIcmVmTGluayA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgcHJvcHMuaHJlZiAhPT0gdm9pZCAwKVxuXG4gIC8vIGZvciBwZXJmIHJlYXNvbnMsIHdlIHVzZSBtaW5pbXVtIGFtb3VudCBvZiBydW50aW1lIHdvcmtcbiAgY29uc3QgaGFzUm91dGVyTGlua1Byb3BzID0gdXNlRGlzYWJsZUZvclJvdXRlckxpbmtQcm9wcyA9PT0gdHJ1ZVxuICAgID8gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGhhc1JvdXRlciA9PT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZVxuICAgICAgJiYgaGFzSHJlZkxpbmsudmFsdWUgIT09IHRydWVcbiAgICAgICYmIHByb3BzLnRvICE9PSB2b2lkIDAgJiYgcHJvcHMudG8gIT09IG51bGwgJiYgcHJvcHMudG8gIT09ICcnXG4gICAgKVxuICAgIDogY29tcHV0ZWQoKCkgPT5cbiAgICAgIGhhc1JvdXRlciA9PT0gdHJ1ZVxuICAgICAgJiYgaGFzSHJlZkxpbmsudmFsdWUgIT09IHRydWVcbiAgICAgICYmIHByb3BzLnRvICE9PSB2b2lkIDAgJiYgcHJvcHMudG8gIT09IG51bGwgJiYgcHJvcHMudG8gIT09ICcnXG4gICAgKVxuXG4gIGNvbnN0IHJlc29sdmVkTGluayA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBoYXNSb3V0ZXJMaW5rUHJvcHMudmFsdWUgPT09IHRydWVcbiAgICAgID8gZ2V0TGluayhwcm9wcy50bylcbiAgICAgIDogbnVsbFxuICApKVxuXG4gIGNvbnN0IGhhc1JvdXRlckxpbmsgPSBjb21wdXRlZCgoKSA9PiByZXNvbHZlZExpbmsudmFsdWUgIT09IG51bGwpXG4gIGNvbnN0IGhhc0xpbmsgPSBjb21wdXRlZCgoKSA9PiBoYXNIcmVmTGluay52YWx1ZSA9PT0gdHJ1ZSB8fCBoYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlKVxuXG4gIGNvbnN0IGxpbmtUYWcgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMudHlwZSA9PT0gJ2EnIHx8IGhhc0xpbmsudmFsdWUgPT09IHRydWVcbiAgICAgID8gJ2EnXG4gICAgICA6IChwcm9wcy50YWcgfHwgZmFsbGJhY2tUYWcgfHwgJ2RpdicpXG4gICkpXG5cbiAgY29uc3QgbGlua0F0dHJzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGhhc0hyZWZMaW5rLnZhbHVlID09PSB0cnVlXG4gICAgICA/IHtcbiAgICAgICAgICBocmVmOiBwcm9wcy5ocmVmLFxuICAgICAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0XG4gICAgICAgIH1cbiAgICAgIDogKFxuICAgICAgICAgIGhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkTGluay52YWx1ZS5ocmVmLFxuICAgICAgICAgICAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge31cbiAgICAgICAgKVxuICApKVxuXG4gIGNvbnN0IGxpbmtBY3RpdmVJbmRleCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAoaGFzUm91dGVyTGluay52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIGNvbnN0XG4gICAgICB7IG1hdGNoZWQgfSA9IHJlc29sdmVkTGluay52YWx1ZSxcbiAgICAgIHsgbGVuZ3RoIH0gPSBtYXRjaGVkLFxuICAgICAgcm91dGVNYXRjaGVkID0gbWF0Y2hlZFsgbGVuZ3RoIC0gMSBdXG5cbiAgICBpZiAocm91dGVNYXRjaGVkID09PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRNYXRjaGVkID0gcHJveHkuJHJvdXRlLm1hdGNoZWRcblxuICAgIGlmIChjdXJyZW50TWF0Y2hlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gY3VycmVudE1hdGNoZWQuZmluZEluZGV4KFxuICAgICAgaXNTYW1lUm91dGVSZWNvcmQuYmluZChudWxsLCByb3V0ZU1hdGNoZWQpXG4gICAgKVxuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcmV0dXJuIGluZGV4XG4gICAgfVxuXG4gICAgLy8gcG9zc2libGUgcGFyZW50IHJlY29yZFxuICAgIGNvbnN0IHBhcmVudFJlY29yZFBhdGggPSBnZXRPcmlnaW5hbFBhdGgobWF0Y2hlZFsgbGVuZ3RoIC0gMiBdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIHdlIGFyZSBkZWFsaW5nIHdpdGggbmVzdGVkIHJvdXRlc1xuICAgICAgbGVuZ3RoID4gMVxuICAgICAgLy8gaWYgdGhlIHBhcmVudCBhbmQgbWF0Y2hlZCByb3V0ZSBoYXZlIHRoZSBzYW1lIHBhdGgsIHRoaXMgbGluayBpc1xuICAgICAgLy8gcmVmZXJyaW5nIHRvIHRoZSBlbXB0eSBjaGlsZC4gT3Igd2UgY3VycmVudGx5IGFyZSBvbiBhIGRpZmZlcmVudFxuICAgICAgLy8gY2hpbGQgb2YgdGhlIHNhbWUgcGFyZW50XG4gICAgICAmJiBnZXRPcmlnaW5hbFBhdGgocm91dGVNYXRjaGVkKSA9PT0gcGFyZW50UmVjb3JkUGF0aFxuICAgICAgLy8gYXZvaWQgY29tcGFyaW5nIHRoZSBjaGlsZCB3aXRoIGl0cyBwYXJlbnRcbiAgICAgICYmIGN1cnJlbnRNYXRjaGVkWyBjdXJyZW50TWF0Y2hlZC5sZW5ndGggLSAxIF0ucGF0aCAhPT0gcGFyZW50UmVjb3JkUGF0aFxuICAgICAgICA/IGN1cnJlbnRNYXRjaGVkLmZpbmRJbmRleChcbiAgICAgICAgICBpc1NhbWVSb3V0ZVJlY29yZC5iaW5kKG51bGwsIG1hdGNoZWRbIGxlbmd0aCAtIDIgXSlcbiAgICAgICAgKVxuICAgICAgICA6IGluZGV4XG4gICAgKVxuICB9KVxuXG4gIGNvbnN0IGxpbmtJc0FjdGl2ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZVxuICAgICYmIGxpbmtBY3RpdmVJbmRleC52YWx1ZSAhPT0gLTFcbiAgICAmJiBpbmNsdWRlc1BhcmFtcyhwcm94eS4kcm91dGUucGFyYW1zLCByZXNvbHZlZExpbmsudmFsdWUucGFyYW1zKVxuICApXG5cbiAgY29uc3QgbGlua0lzRXhhY3RBY3RpdmUgPSBjb21wdXRlZCgoKSA9PlxuICAgIGxpbmtJc0FjdGl2ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgJiYgbGlua0FjdGl2ZUluZGV4LnZhbHVlID09PSBwcm94eS4kcm91dGUubWF0Y2hlZC5sZW5ndGggLSAxXG4gICAgICAmJiBpc1NhbWVSb3V0ZUxvY2F0aW9uUGFyYW1zKHByb3h5LiRyb3V0ZS5wYXJhbXMsIHJlc29sdmVkTGluay52YWx1ZS5wYXJhbXMpXG4gIClcblxuICBjb25zdCBsaW5rQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyAoXG4gICAgICAgICAgbGlua0lzRXhhY3RBY3RpdmUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgID8gYCAkeyBwcm9wcy5leGFjdEFjdGl2ZUNsYXNzIH0gJHsgcHJvcHMuYWN0aXZlQ2xhc3MgfWBcbiAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgIHByb3BzLmV4YWN0ID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICA6IChsaW5rSXNBY3RpdmUudmFsdWUgPT09IHRydWUgPyBgICR7IHByb3BzLmFjdGl2ZUNsYXNzIH1gIDogJycpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgOiAnJ1xuICApKVxuXG4gIGZ1bmN0aW9uIGdldExpbmsgKHRvKSB7XG4gICAgdHJ5IHsgcmV0dXJuIHByb3h5LiRyb3V0ZXIucmVzb2x2ZSh0bykgfVxuICAgIGNhdGNoIChfKSB7fVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBQcm9taXNlPFJvdXRlckVycm9yIHwgZmFsc2UgfCB1bmRlZmluZWQ+XG4gICAqL1xuICBmdW5jdGlvbiBuYXZpZ2F0ZVRvUm91dGVyTGluayAoXG4gICAgZSxcbiAgICB7IHJldHVyblJvdXRlckVycm9yLCB0byA9IHByb3BzLnRvLCByZXBsYWNlID0gcHJvcHMucmVwbGFjZSB9ID0ge31cbiAgKSB7XG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIC8vIGVuc3VyZSBuYXRpdmUgbmF2aWdhdGlvbiBpcyBwcmV2ZW50ZWQgaW4gYWxsIGNhc2VzLFxuICAgICAgLy8gbGlrZSB3aGVuIHVzZURpc2FibGVGb3JSb3V0ZXJMaW5rUHJvcHMgPT09IGZhbHNlIChRUm91dGVUYWIpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgLy8gZG9uJ3QgcmVkaXJlY3Qgd2l0aCBjb250cm9sIGtleXM7XG4gICAgICAvLyBzaG91bGQgbWF0Y2ggUm91dGVyTGluayBmcm9tIFZ1ZSBSb3V0ZXJcbiAgICAgIGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5zaGlmdEtleVxuXG4gICAgICAvLyBkb24ndCByZWRpcmVjdCBvbiByaWdodCBjbGlja1xuICAgICAgfHwgKGUuYnV0dG9uICE9PSB2b2lkIDAgJiYgZS5idXR0b24gIT09IDApXG5cbiAgICAgIC8vIGRvbid0IHJlZGlyZWN0IGlmIGl0IHNob3VsZCBvcGVuIGluIGEgbmV3IHdpbmRvd1xuICAgICAgfHwgcHJvcHMudGFyZ2V0ID09PSAnX2JsYW5rJ1xuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSlcbiAgICB9XG5cbiAgICAvLyBoaW5kZXIgdGhlIG5hdGl2ZSBuYXZpZ2F0aW9uXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyB0aGVuKCkgY2FuIGFsc28gcmV0dXJuIGEgXCJzb2Z0XCIgcm91dGVyIGVycm9yIChWdWUgUm91dGVyIGJlaGF2aW9yKVxuICAgIGNvbnN0IHByb21pc2UgPSBwcm94eS4kcm91dGVyWyByZXBsYWNlID09PSB0cnVlID8gJ3JlcGxhY2UnIDogJ3B1c2gnIF0odG8pXG5cbiAgICByZXR1cm4gcmV0dXJuUm91dGVyRXJyb3IgPT09IHRydWVcbiAgICAgID8gcHJvbWlzZVxuICAgICAgLy8gZWxzZSBjYXRjaGluZyBoYXJkIGVycm9ycyBhbmQgYWxzbyBcInNvZnRcIiBvbmVzIC0gdGhlbihlcnIgPT4gLi4uKVxuICAgICAgOiBwcm9taXNlLnRoZW4oKCkgPT4ge30pLmNhdGNoKCgpID0+IHt9KVxuICB9XG5cbiAgLy8gd2FybmluZyEgZW5zdXJlIHRoYXQgdGhlIGNvbXBvbmVudCB1c2luZyBpdCBoYXMgJ2NsaWNrJyBpbmNsdWRlZCBpbiBpdHMgJ2VtaXRzJyBkZWZpbml0aW9uIHByb3BcbiAgZnVuY3Rpb24gbmF2aWdhdGVPbkNsaWNrIChlKSB7XG4gICAgaWYgKGhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGdvID0gb3B0cyA9PiBuYXZpZ2F0ZVRvUm91dGVyTGluayhlLCBvcHRzKVxuXG4gICAgICBlbWl0KCdjbGljaycsIGUsIGdvKVxuICAgICAgZS5kZWZhdWx0UHJldmVudGVkICE9PSB0cnVlICYmIGdvKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYXNSb3V0ZXJMaW5rLFxuICAgIGhhc0hyZWZMaW5rLFxuICAgIGhhc0xpbmssXG5cbiAgICBsaW5rVGFnLFxuICAgIHJlc29sdmVkTGluayxcbiAgICBsaW5rSXNBY3RpdmUsXG4gICAgbGlua0lzRXhhY3RBY3RpdmUsXG4gICAgbGlua0NsYXNzLFxuICAgIGxpbmtBdHRycyxcblxuICAgIGdldExpbmssXG4gICAgbmF2aWdhdGVUb1JvdXRlckxpbmssXG4gICAgbmF2aWdhdGVPbkNsaWNrXG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlQWxpZ24sIHsgdXNlQWxpZ25Qcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWFsaWduL3VzZS1hbGlnbi5qcydcbmltcG9ydCB1c2VTaXplLCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLXNpemUvdXNlLXNpemUuanMnXG5pbXBvcnQgdXNlUm91dGVyTGluaywgeyB1c2VSb3V0ZXJMaW5rTm9uTWF0Y2hpbmdQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLXJvdXRlci1saW5rL3VzZS1yb3V0ZXItbGluay5qcydcblxuZXhwb3J0IGNvbnN0IGJ0blBhZGRpbmcgPSB7XG4gIG5vbmU6IDAsXG4gIHhzOiA0LFxuICBzbTogOCxcbiAgbWQ6IDE2LFxuICBsZzogMjQsXG4gIHhsOiAzMlxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFNpemVzID0ge1xuICB4czogOCxcbiAgc206IDEwLFxuICBtZDogMTQsXG4gIGxnOiAyMCxcbiAgeGw6IDI0XG59XG5cbmNvbnN0IGZvcm1UeXBlcyA9IFsgJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnIF1cbmNvbnN0IG1lZGlhVHlwZVJFID0gL1teXFxzXVxcL1teXFxzXS9cblxuZXhwb3J0IGNvbnN0IGJ0bkRlc2lnbk9wdGlvbnMgPSBbICdmbGF0JywgJ291dGxpbmUnLCAncHVzaCcsICd1bmVsZXZhdGVkJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCdG5EZXNpZ24gKHByb3BzLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKHByb3BzLmZsYXQgPT09IHRydWUpIHJldHVybiAnZmxhdCdcbiAgaWYgKHByb3BzLm91dGxpbmUgPT09IHRydWUpIHJldHVybiAnb3V0bGluZSdcbiAgaWYgKHByb3BzLnB1c2ggPT09IHRydWUpIHJldHVybiAncHVzaCdcbiAgaWYgKHByb3BzLnVuZWxldmF0ZWQgPT09IHRydWUpIHJldHVybiAndW5lbGV2YXRlZCdcbiAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnRuRGVzaWduQXR0ciAocHJvcHMpIHtcbiAgY29uc3QgZGVzaWduID0gZ2V0QnRuRGVzaWduKHByb3BzKVxuICByZXR1cm4gZGVzaWduICE9PSB2b2lkIDBcbiAgICA/IHsgWyBkZXNpZ24gXTogdHJ1ZSB9XG4gICAgOiB7fVxufVxuXG5leHBvcnQgY29uc3Qgbm9uUm91bmRCdG5Qcm9wcyA9IHtcbiAgLi4udXNlU2l6ZVByb3BzLFxuICAuLi51c2VSb3V0ZXJMaW5rTm9uTWF0Y2hpbmdQcm9wcyxcblxuICB0eXBlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdidXR0b24nXG4gIH0sXG5cbiAgbGFiZWw6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgaWNvbjogU3RyaW5nLFxuICBpY29uUmlnaHQ6IFN0cmluZyxcblxuICAuLi5idG5EZXNpZ25PcHRpb25zLnJlZHVjZShcbiAgICAoYWNjLCB2YWwpID0+IChhY2NbIHZhbCBdID0gQm9vbGVhbikgJiYgYWNjLFxuICAgIHt9XG4gICksXG5cbiAgc3F1YXJlOiBCb29sZWFuLFxuICByb3VuZGVkOiBCb29sZWFuLFxuICBnbG9zc3k6IEJvb2xlYW4sXG5cbiAgc2l6ZTogU3RyaW5nLFxuICBmYWI6IEJvb2xlYW4sXG4gIGZhYk1pbmk6IEJvb2xlYW4sXG4gIHBhZGRpbmc6IFN0cmluZyxcblxuICBjb2xvcjogU3RyaW5nLFxuICB0ZXh0Q29sb3I6IFN0cmluZyxcbiAgbm9DYXBzOiBCb29sZWFuLFxuICBub1dyYXA6IEJvb2xlYW4sXG4gIGRlbnNlOiBCb29sZWFuLFxuXG4gIHRhYmluZGV4OiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgcmlwcGxlOiB7XG4gICAgdHlwZTogWyBCb29sZWFuLCBPYmplY3QgXSxcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH0sXG5cbiAgYWxpZ246IHtcbiAgICAuLi51c2VBbGlnblByb3BzLmFsaWduLFxuICAgIGRlZmF1bHQ6ICdjZW50ZXInXG4gIH0sXG4gIHN0YWNrOiBCb29sZWFuLFxuICBzdHJldGNoOiBCb29sZWFuLFxuICBsb2FkaW5nOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBudWxsXG4gIH0sXG4gIGRpc2FibGU6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUJ0blByb3BzID0ge1xuICAuLi5ub25Sb3VuZEJ0blByb3BzLFxuICByb3VuZDogQm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcywgZGVmYXVsdFNpemVzKVxuICBjb25zdCBhbGlnbkNsYXNzID0gdXNlQWxpZ24ocHJvcHMpXG4gIGNvbnN0IHsgaGFzUm91dGVyTGluaywgaGFzTGluaywgbGlua1RhZywgbGlua0F0dHJzLCBuYXZpZ2F0ZU9uQ2xpY2sgfSA9IHVzZVJvdXRlckxpbmsoe1xuICAgIGZhbGxiYWNrVGFnOiAnYnV0dG9uJ1xuICB9KVxuXG4gIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IHByb3BzLmZhYiA9PT0gZmFsc2UgJiYgcHJvcHMuZmFiTWluaSA9PT0gZmFsc2VcbiAgICAgID8gc2l6ZVN0eWxlLnZhbHVlXG4gICAgICA6IHt9XG5cbiAgICByZXR1cm4gcHJvcHMucGFkZGluZyAhPT0gdm9pZCAwXG4gICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9iaiwge1xuICAgICAgICBwYWRkaW5nOiBwcm9wcy5wYWRkaW5nXG4gICAgICAgICAgLnNwbGl0KC9cXHMrLylcbiAgICAgICAgICAubWFwKHYgPT4gKHYgaW4gYnRuUGFkZGluZyA/IGJ0blBhZGRpbmdbIHYgXSArICdweCcgOiB2KSlcbiAgICAgICAgICAuam9pbignICcpLFxuICAgICAgICBtaW5XaWR0aDogJzAnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcwJ1xuICAgICAgfSlcbiAgICAgIDogb2JqXG4gIH0pXG5cbiAgY29uc3QgaXNSb3VuZGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBwcm9wcy5yb3VuZGVkID09PSB0cnVlIHx8IHByb3BzLmZhYiA9PT0gdHJ1ZSB8fCBwcm9wcy5mYWJNaW5pID09PSB0cnVlXG4gIClcblxuICBjb25zdCBpc0FjdGlvbmFibGUgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgcHJvcHMubG9hZGluZyAhPT0gdHJ1ZVxuICApXG5cbiAgY29uc3QgdGFiSW5kZXggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNBY3Rpb25hYmxlLnZhbHVlID09PSB0cnVlID8gcHJvcHMudGFiaW5kZXggfHwgMCA6IC0xXG4gICkpXG5cbiAgY29uc3QgZGVzaWduID0gY29tcHV0ZWQoKCkgPT4gZ2V0QnRuRGVzaWduKHByb3BzLCAnc3RhbmRhcmQnKSlcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHsgdGFiaW5kZXg6IHRhYkluZGV4LnZhbHVlIH1cblxuICAgIGlmIChoYXNMaW5rLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGFjYywgbGlua0F0dHJzLnZhbHVlKVxuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtVHlwZXMuaW5jbHVkZXMocHJvcHMudHlwZSkgPT09IHRydWUpIHtcbiAgICAgIGFjYy50eXBlID0gcHJvcHMudHlwZVxuICAgIH1cblxuICAgIGlmIChsaW5rVGFnLnZhbHVlID09PSAnYScpIHtcbiAgICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICAgIGFjY1sgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFjYy5ocmVmID09PSB2b2lkIDApIHtcbiAgICAgICAgYWNjLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFzUm91dGVyTGluay52YWx1ZSAhPT0gdHJ1ZSAmJiBtZWRpYVR5cGVSRS50ZXN0KHByb3BzLnR5cGUpID09PSB0cnVlKSB7XG4gICAgICAgIGFjYy50eXBlID0gcHJvcHMudHlwZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICBhY2MuZGlzYWJsZWQgPSAnJ1xuICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHByb3BzLnBlcmNlbnRhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihhY2MsIHtcbiAgICAgICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiAwLFxuICAgICAgICAnYXJpYS12YWx1ZW1heCc6IDEwMCxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5wZXJjZW50YWdlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGxldCBjb2xvcnNcblxuICAgIGlmIChwcm9wcy5jb2xvciAhPT0gdm9pZCAwKSB7XG4gICAgICBpZiAocHJvcHMuZmxhdCA9PT0gdHJ1ZSB8fCBwcm9wcy5vdXRsaW5lID09PSB0cnVlKSB7XG4gICAgICAgIGNvbG9ycyA9IGB0ZXh0LSR7IHByb3BzLnRleHRDb2xvciB8fCBwcm9wcy5jb2xvciB9YFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbG9ycyA9IGBiZy0keyBwcm9wcy5jb2xvciB9IHRleHQtJHsgcHJvcHMudGV4dENvbG9yIHx8ICd3aGl0ZScgfWBcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMudGV4dENvbG9yKSB7XG4gICAgICBjb2xvcnMgPSBgdGV4dC0keyBwcm9wcy50ZXh0Q29sb3IgfWBcbiAgICB9XG5cbiAgICBjb25zdCBzaGFwZSA9IHByb3BzLnJvdW5kID09PSB0cnVlXG4gICAgICA/ICdyb3VuZCdcbiAgICAgIDogYHJlY3RhbmdsZSR7IGlzUm91bmRlZC52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1idG4tLXJvdW5kZWQnIDogKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1idG4tLXNxdWFyZScgOiAnJykgfWBcblxuICAgIHJldHVybiBgcS1idG4tLSR7IGRlc2lnbi52YWx1ZSB9IHEtYnRuLS0keyBzaGFwZSB9YFxuICAgICAgKyAoY29sb3JzICE9PSB2b2lkIDAgPyAnICcgKyBjb2xvcnMgOiAnJylcbiAgICAgICsgKGlzQWN0aW9uYWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1idG4tLWFjdGlvbmFibGUgcS1mb2N1c2FibGUgcS1ob3ZlcmFibGUnIDogKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcnKSlcbiAgICAgICsgKHByb3BzLmZhYiA9PT0gdHJ1ZSA/ICcgcS1idG4tLWZhYicgOiAocHJvcHMuZmFiTWluaSA9PT0gdHJ1ZSA/ICcgcS1idG4tLWZhYi1taW5pJyA6ICcnKSlcbiAgICAgICsgKHByb3BzLm5vQ2FwcyA9PT0gdHJ1ZSA/ICcgcS1idG4tLW5vLXVwcGVyY2FzZScgOiAnJylcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLWJ0bi0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy5zdHJldGNoID09PSB0cnVlID8gJyBuby1ib3JkZXItcmFkaXVzIHNlbGYtc3RyZXRjaCcgOiAnJylcbiAgICAgICsgKHByb3BzLmdsb3NzeSA9PT0gdHJ1ZSA/ICcgZ2xvc3N5JyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3F1YXJlID8gJyBxLWJ0bi0tc3F1YXJlJyA6ICcnKVxuICB9KVxuXG4gIGNvbnN0IGlubmVyQ2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgYWxpZ25DbGFzcy52YWx1ZSArIChwcm9wcy5zdGFjayA9PT0gdHJ1ZSA/ICcgY29sdW1uJyA6ICcgcm93JylcbiAgICArIChwcm9wcy5ub1dyYXAgPT09IHRydWUgPyAnIG5vLXdyYXAgdGV4dC1uby13cmFwJyA6ICcnKVxuICAgICsgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgPyAnIHEtYnRuX19jb250ZW50LS1oaWRkZW4nIDogJycpXG4gIClcblxuICByZXR1cm4ge1xuICAgIGNsYXNzZXMsXG4gICAgc3R5bGUsXG4gICAgaW5uZXJDbGFzc2VzLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAgaGFzTGluayxcbiAgICBsaW5rVGFnLFxuICAgIG5hdmlnYXRlT25DbGljayxcbiAgICBpc0FjdGlvbmFibGVcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgVHJhbnNpdGlvbiwgb25CZWZvcmVVbm1vdW50LCB3aXRoRGlyZWN0aXZlcywgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRU3Bpbm5lciBmcm9tICcuLi9zcGlubmVyL1FTcGlubmVyLmpzJ1xuXG5pbXBvcnQgUmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlL1JpcHBsZS5qcydcblxuaW1wb3J0IHVzZUJ0biwgeyB1c2VCdG5Qcm9wcyB9IGZyb20gJy4vdXNlLWJ0bi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IHN0b3AsIHByZXZlbnQsIHN0b3BBbmRQcmV2ZW50LCBsaXN0ZW5PcHRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQvZXZlbnQuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmtleWJvYXJkL2tleS1jb21wb3NpdGlvbi5qcydcblxuY29uc3QgeyBwYXNzaXZlQ2FwdHVyZSB9ID0gbGlzdGVuT3B0c1xuXG5sZXRcbiAgdG91Y2hUYXJnZXQgPSBudWxsLFxuICBrZXlib2FyZFRhcmdldCA9IG51bGwsXG4gIG1vdXNlVGFyZ2V0ID0gbnVsbFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUJ0bicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VCdG5Qcm9wcyxcblxuICAgIHBlcmNlbnRhZ2U6IE51bWJlcixcbiAgICBkYXJrUGVyY2VudGFnZTogQm9vbGVhbixcblxuICAgIG9uVG91Y2hzdGFydDogWyBGdW5jdGlvbiwgQXJyYXkgXVxuICB9LFxuXG4gIGVtaXRzOiBbICdjbGljaycsICdrZXlkb3duJywgJ21vdXNlZG93bicsICdrZXl1cCcgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc2VzLCBzdHlsZSwgaW5uZXJDbGFzc2VzLFxuICAgICAgYXR0cmlidXRlcyxcbiAgICAgIGhhc0xpbmssIGxpbmtUYWcsIG5hdmlnYXRlT25DbGljayxcbiAgICAgIGlzQWN0aW9uYWJsZVxuICAgIH0gPSB1c2VCdG4ocHJvcHMpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgYmx1clRhcmdldFJlZiA9IHJlZihudWxsKVxuXG4gICAgbGV0IGxvY2FsVG91Y2hUYXJnZXRFbCA9IG51bGwsIGF2b2lkTW91c2VSaXBwbGUsIG1vdXNlVGltZXIgPSBudWxsXG5cbiAgICBjb25zdCBoYXNMYWJlbCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5sYWJlbCAhPT0gdm9pZCAwICYmIHByb3BzLmxhYmVsICE9PSBudWxsICYmIHByb3BzLmxhYmVsICE9PSAnJ1xuICAgIClcblxuICAgIGNvbnN0IHJpcHBsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgcHJvcHMucmlwcGxlID09PSBmYWxzZVxuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDoge1xuICAgICAgICAgICAga2V5Q29kZXM6IGhhc0xpbmsudmFsdWUgPT09IHRydWUgPyBbIDEzLCAzMiBdIDogWyAxMyBdLFxuICAgICAgICAgICAgLi4uKHByb3BzLnJpcHBsZSA9PT0gdHJ1ZSA/IHt9IDogcHJvcHMucmlwcGxlKVxuICAgICAgICAgIH1cbiAgICApKVxuXG4gICAgY29uc3QgcmlwcGxlUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoeyBjZW50ZXI6IHByb3BzLnJvdW5kIH0pKVxuXG4gICAgY29uc3QgcGVyY2VudGFnZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBwcm9wcy5wZXJjZW50YWdlKSlcbiAgICAgIHJldHVybiB2YWwgPiAwXG4gICAgICAgID8geyB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuNnMnLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7IHZhbCAtIDEwMCB9JSlgIH1cbiAgICAgICAgOiB7fVxuICAgIH0pXG5cbiAgICBjb25zdCBvbkV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb25Nb3VzZWRvd246IG9uTG9hZGluZ0V2dCxcbiAgICAgICAgICBvblRvdWNoc3RhcnQ6IG9uTG9hZGluZ0V2dCxcbiAgICAgICAgICBvbkNsaWNrOiBvbkxvYWRpbmdFdnQsXG4gICAgICAgICAgb25LZXlkb3duOiBvbkxvYWRpbmdFdnQsXG4gICAgICAgICAgb25LZXl1cDogb25Mb2FkaW5nRXZ0XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzQWN0aW9uYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBhY2MgPSB7XG4gICAgICAgICAgb25DbGljayxcbiAgICAgICAgICBvbktleWRvd24sXG4gICAgICAgICAgb25Nb3VzZWRvd25cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm94eS4kcS5wbGF0Zm9ybS5oYXMudG91Y2ggPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBzdWZmaXggPSBwcm9wcy5vblRvdWNoc3RhcnQgIT09IHZvaWQgMFxuICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgOiAnUGFzc2l2ZSdcblxuICAgICAgICAgIGFjY1sgYG9uVG91Y2hzdGFydCR7IHN1ZmZpeCB9YCBdID0gb25Ub3VjaHN0YXJ0XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIG5lZWRlZDsgZXNwZWNpYWxseSBmb3IgZGlzYWJsZWQgPGE+IHRhZ3NcbiAgICAgICAgb25DbGljazogc3RvcEFuZFByZXZlbnRcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3Qgbm9kZVByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgIGNsYXNzOiAncS1idG4gcS1idG4taXRlbSBub24tc2VsZWN0YWJsZSBuby1vdXRsaW5lICcgKyBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgLi4uYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgIC4uLm9uRXZlbnRzLnZhbHVlXG4gICAgfSkpXG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrIChlKSB7XG4gICAgICAvLyBpcyBpdCBhbHJlYWR5IGRlc3Ryb3llZD9cbiAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSByZXR1cm5cblxuICAgICAgaWYgKGUgIT09IHZvaWQgMCkge1xuICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgLy8gZm9jdXMgYnV0dG9uIGlmIGl0IGNhbWUgZnJvbSBFTlRFUiBvbiBmb3JtXG4gICAgICAgIC8vIHByZXZlbnQgdGhlIG5ldyBzdWJtaXQgKGFscmVhZHkgZG9uZSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzLnR5cGUgPT09ICdzdWJtaXQnXG4gICAgICAgICAgJiYgZWwgIT09IGRvY3VtZW50LmJvZHlcbiAgICAgICAgICAmJiByb290UmVmLnZhbHVlLmNvbnRhaW5zKGVsKSA9PT0gZmFsc2VcbiAgICAgICAgICAvLyByZXF1aXJlZCBmb3IgaU9TIGFuZCBkZXNrdG9wIFNhZmFyaVxuICAgICAgICAgICYmIGVsLmNvbnRhaW5zKHJvb3RSZWYudmFsdWUpID09PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICByb290UmVmLnZhbHVlLmZvY3VzKClcblxuICAgICAgICAgIGNvbnN0IG9uQ2xpY2tDbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0b3BBbmRQcmV2ZW50LCB0cnVlKVxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvbkNsaWNrQ2xlYW51cCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgICAgICByb290UmVmLnZhbHVlICE9PSBudWxsICYmIHJvb3RSZWYudmFsdWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQ2xpY2tDbGVhbnVwLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc3RvcEFuZFByZXZlbnQsIHRydWUpXG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvbkNsaWNrQ2xlYW51cCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgICAgcm9vdFJlZi52YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25DbGlja0NsZWFudXAsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5hdmlnYXRlT25DbGljayhlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5ZG93biAoZSkge1xuICAgICAgLy8gaXMgaXQgYWxyZWFkeSBkZXN0cm95ZWQ/XG4gICAgICBpZiAocm9vdFJlZi52YWx1ZSA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIGVtaXQoJ2tleWRvd24nLCBlKVxuXG4gICAgICBpZiAoaXNLZXlDb2RlKGUsIFsgMTMsIDMyIF0pID09PSB0cnVlICYmIGtleWJvYXJkVGFyZ2V0ICE9PSByb290UmVmLnZhbHVlKSB7XG4gICAgICAgIGtleWJvYXJkVGFyZ2V0ICE9PSBudWxsICYmIGNsZWFudXAoKVxuXG4gICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgICAgICAvLyBmb2N1cyBleHRlcm5hbCBidXR0b24gaWYgdGhlIGZvY3VzIGhlbHBlciB3YXMgZm9jdXNlZCBiZWZvcmVcbiAgICAgICAgICByb290UmVmLnZhbHVlLmZvY3VzKClcblxuICAgICAgICAgIGtleWJvYXJkVGFyZ2V0ID0gcm9vdFJlZi52YWx1ZVxuICAgICAgICAgIHJvb3RSZWYudmFsdWUuY2xhc3NMaXN0LmFkZCgncS1idG4tLWFjdGl2ZScpXG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvblByZXNzRW5kLCB0cnVlKVxuICAgICAgICAgIHJvb3RSZWYudmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICB9XG5cbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRvdWNoc3RhcnQgKGUpIHtcbiAgICAgIC8vIGlzIGl0IGFscmVhZHkgZGVzdHJveWVkP1xuICAgICAgaWYgKHJvb3RSZWYudmFsdWUgPT09IG51bGwpIHJldHVyblxuXG4gICAgICBlbWl0KCd0b3VjaHN0YXJ0JywgZSlcblxuICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgIGlmICh0b3VjaFRhcmdldCAhPT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICB0b3VjaFRhcmdldCAhPT0gbnVsbCAmJiBjbGVhbnVwKClcbiAgICAgICAgdG91Y2hUYXJnZXQgPSByb290UmVmLnZhbHVlXG5cbiAgICAgICAgbG9jYWxUb3VjaFRhcmdldEVsID0gZS50YXJnZXRcbiAgICAgICAgbG9jYWxUb3VjaFRhcmdldEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIGxvY2FsVG91Y2hUYXJnZXRFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBkdXBsaWNhdGVkIG1vdXNlZG93biBldmVudFxuICAgICAgLy8gdHJpZ2dlcmluZyBhbm90aGVyIGVhcmx5IHJpcHBsZVxuICAgICAgYXZvaWRNb3VzZVJpcHBsZSA9IHRydWVcbiAgICAgIG1vdXNlVGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KG1vdXNlVGltZXIpXG4gICAgICBtb3VzZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1vdXNlVGltZXIgPSBudWxsXG4gICAgICAgIGF2b2lkTW91c2VSaXBwbGUgPSBmYWxzZVxuICAgICAgfSwgMjAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2Vkb3duIChlKSB7XG4gICAgICAvLyBpcyBpdCBhbHJlYWR5IGRlc3Ryb3llZD9cbiAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSByZXR1cm5cblxuICAgICAgZS5xU2tpcFJpcHBsZSA9IGF2b2lkTW91c2VSaXBwbGUgPT09IHRydWVcbiAgICAgIGVtaXQoJ21vdXNlZG93bicsIGUpXG5cbiAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHRydWUgJiYgbW91c2VUYXJnZXQgIT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgbW91c2VUYXJnZXQgIT09IG51bGwgJiYgY2xlYW51cCgpXG4gICAgICAgIG1vdXNlVGFyZ2V0ID0gcm9vdFJlZi52YWx1ZVxuICAgICAgICByb290UmVmLnZhbHVlLmNsYXNzTGlzdC5hZGQoJ3EtYnRuLS1hY3RpdmUnKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QcmVzc0VuZCAoZSkge1xuICAgICAgLy8gaXMgaXQgYWxyZWFkeSBkZXN0cm95ZWQ/XG4gICAgICBpZiAocm9vdFJlZi52YWx1ZSA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIC8vIG5lZWRlZCBmb3IgSUUgKGJlY2F1c2UgaXQgZW1pdHMgYmx1ciB3aGVuIGZvY3VzaW5nIGJ1dHRvbiBmcm9tIGZvY3VzIGhlbHBlcilcbiAgICAgIGlmIChlICE9PSB2b2lkIDAgJiYgZS50eXBlID09PSAnYmx1cicgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGUgIT09IHZvaWQgMCAmJiBlLnR5cGUgPT09ICdrZXl1cCcpIHtcbiAgICAgICAgaWYgKGtleWJvYXJkVGFyZ2V0ID09PSByb290UmVmLnZhbHVlICYmIGlzS2V5Q29kZShlLCBbIDEzLCAzMiBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGZvciBjbGljayB0cmlnZ2VyXG4gICAgICAgICAgY29uc3QgZXZ0ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywgZSlcbiAgICAgICAgICBldnQucUtleUV2ZW50ID0gdHJ1ZVxuICAgICAgICAgIGUuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSAmJiBwcmV2ZW50KGV2dClcbiAgICAgICAgICBlLmNhbmNlbEJ1YmJsZSA9PT0gdHJ1ZSAmJiBzdG9wKGV2dClcbiAgICAgICAgICByb290UmVmLnZhbHVlLmRpc3BhdGNoRXZlbnQoZXZ0KVxuXG4gICAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcblxuICAgICAgICAgIC8vIGZvciByaXBwbGVcbiAgICAgICAgICBlLnFLZXlFdmVudCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXQoJ2tleXVwJywgZSlcbiAgICAgIH1cblxuICAgICAgY2xlYW51cCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoZGVzdHJveWluZykge1xuICAgICAgY29uc3QgYmx1clRhcmdldCA9IGJsdXJUYXJnZXRSZWYudmFsdWVcblxuICAgICAgaWYgKFxuICAgICAgICBkZXN0cm95aW5nICE9PSB0cnVlXG4gICAgICAgICYmICh0b3VjaFRhcmdldCA9PT0gcm9vdFJlZi52YWx1ZSB8fCBtb3VzZVRhcmdldCA9PT0gcm9vdFJlZi52YWx1ZSlcbiAgICAgICAgJiYgYmx1clRhcmdldCAhPT0gbnVsbFxuICAgICAgICAmJiBibHVyVGFyZ2V0ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICApIHtcbiAgICAgICAgYmx1clRhcmdldC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpXG4gICAgICAgIGJsdXJUYXJnZXQuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICBpZiAodG91Y2hUYXJnZXQgPT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgaWYgKGxvY2FsVG91Y2hUYXJnZXRFbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGxvY2FsVG91Y2hUYXJnZXRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICAgIGxvY2FsVG91Y2hUYXJnZXRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICB9XG4gICAgICAgIHRvdWNoVGFyZ2V0ID0gbG9jYWxUb3VjaFRhcmdldEVsID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAobW91c2VUYXJnZXQgPT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICBtb3VzZVRhcmdldCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGtleWJvYXJkVGFyZ2V0ID09PSByb290UmVmLnZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgb25QcmVzc0VuZCwgdHJ1ZSlcbiAgICAgICAgcm9vdFJlZi52YWx1ZSAhPT0gbnVsbCAmJiByb290UmVmLnZhbHVlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvblByZXNzRW5kLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAga2V5Ym9hcmRUYXJnZXQgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHJvb3RSZWYudmFsdWUgIT09IG51bGwgJiYgcm9vdFJlZi52YWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJ0bi0tYWN0aXZlJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxvYWRpbmdFdnQgKGV2dCkge1xuICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuICAgICAgZXZ0LnFTa2lwUmlwcGxlID0gdHJ1ZVxuICAgIH1cblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBjbGVhbnVwKHRydWUpXG4gICAgfSlcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIGNsaWNrOiBlID0+IHtcbiAgICAgICAgaWYgKGlzQWN0aW9uYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbGV0IGlubmVyID0gW11cblxuICAgICAgcHJvcHMuaWNvbiAhPT0gdm9pZCAwICYmIGlubmVyLnB1c2goXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBuYW1lOiBwcm9wcy5pY29uLFxuICAgICAgICAgIGxlZnQ6IHByb3BzLnN0YWNrICE9PSB0cnVlICYmIGhhc0xhYmVsLnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgIHJvbGU6ICdpbWcnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGhhc0xhYmVsLnZhbHVlID09PSB0cnVlICYmIGlubmVyLnB1c2goXG4gICAgICAgIGgoJ3NwYW4nLCB7IGNsYXNzOiAnYmxvY2snIH0sIFsgcHJvcHMubGFiZWwgXSlcbiAgICAgIClcblxuICAgICAgaW5uZXIgPSBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGlubmVyKVxuXG4gICAgICBpZiAocHJvcHMuaWNvblJpZ2h0ICE9PSB2b2lkIDAgJiYgcHJvcHMucm91bmQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlubmVyLnB1c2goXG4gICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgbmFtZTogcHJvcHMuaWNvblJpZ2h0LFxuICAgICAgICAgICAgcmlnaHQ6IHByb3BzLnN0YWNrICE9PSB0cnVlICYmIGhhc0xhYmVsLnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICAgcm9sZTogJ2ltZydcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKCdzcGFuJywge1xuICAgICAgICAgIGNsYXNzOiAncS1mb2N1cy1oZWxwZXInLFxuICAgICAgICAgIHJlZjogYmx1clRhcmdldFJlZlxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSAmJiBwcm9wcy5wZXJjZW50YWdlICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCdzcGFuJywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWJ0bl9fcHJvZ3Jlc3MgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4nICsgKHByb3BzLmRhcmtQZXJjZW50YWdlID09PSB0cnVlID8gJyBxLWJ0bl9fcHJvZ3Jlc3MtLWRhcmsnIDogJycpXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLWJ0bl9fcHJvZ3Jlc3MtaW5kaWNhdG9yIGZpdCBibG9jaycsXG4gICAgICAgICAgICAgIHN0eWxlOiBwZXJjZW50YWdlU3R5bGUudmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdzcGFuJywge1xuICAgICAgICAgIGNsYXNzOiAncS1idG5fX2NvbnRlbnQgdGV4dC1jZW50ZXIgY29sIGl0ZW1zLWNlbnRlciBxLWFuY2hvci0tc2tpcCAnICsgaW5uZXJDbGFzc2VzLnZhbHVlXG4gICAgICAgIH0sIGlubmVyKVxuICAgICAgKVxuXG4gICAgICBwcm9wcy5sb2FkaW5nICE9PSBudWxsICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoVHJhbnNpdGlvbiwge1xuICAgICAgICAgIG5hbWU6ICdxLXRyYW5zaXRpb24tLWZhZGUnXG4gICAgICAgIH0sICgpID0+IChcbiAgICAgICAgICBwcm9wcy5sb2FkaW5nID09PSB0cnVlXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBoKCdzcGFuJywge1xuICAgICAgICAgICAgICAgICAga2V5OiAnbG9hZGluZycsXG4gICAgICAgICAgICAgICAgICBjbGFzczogJ2Fic29sdXRlLWZ1bGwgZmxleCBmbGV4LWNlbnRlcidcbiAgICAgICAgICAgICAgICB9LCBzbG90cy5sb2FkaW5nICE9PSB2b2lkIDAgPyBzbG90cy5sb2FkaW5nKCkgOiBbIGgoUVNwaW5uZXIpIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICApKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gd2l0aERpcmVjdGl2ZXMoXG4gICAgICAgIGgoXG4gICAgICAgICAgbGlua1RhZy52YWx1ZSxcbiAgICAgICAgICBub2RlUHJvcHMudmFsdWUsXG4gICAgICAgICAgY2hpbGRcbiAgICAgICAgKSxcbiAgICAgICAgWyBbXG4gICAgICAgICAgUmlwcGxlLFxuICAgICAgICAgIHJpcHBsZS52YWx1ZSxcbiAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgcmlwcGxlUHJvcHMudmFsdWVcbiAgICAgICAgXSBdXG4gICAgICApXG4gICAgfVxuICB9XG59KVxuIl0sIm5hbWVzIjpbIm1hdGNoZXMiLCJjc3MiXSwibWFwcGluZ3MiOiI7QUFFTyxNQUFNLGtCQUFrQjtBQUFBLEVBQzdCLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFDTjtBQUVZLE1BQUMsZUFBZTtBQUFBLEVBQzFCLE1BQU07QUFDUjtBQUVlLFNBQUEsUUFBVSxPQUFPLFFBQVEsaUJBQWlCO0FBRXZELFNBQU8sU0FBUyxNQUNkLE1BQU0sU0FBUyxTQUNYLEVBQUUsVUFBVSxNQUFNLFFBQVEsUUFBUSxHQUFJLE1BQU8sTUFBTSxZQUFjLE1BQU0sS0FBTSxJQUM3RSxJQUNMO0FBQ0g7QUNuQk8sU0FBUyxNQUFPLE1BQU0sV0FBVztBQUN0QyxTQUFPLFNBQVMsU0FDWixLQUFNLEtBQUksWUFDVjtBQUNOO0FBRU8sU0FBUyxZQUFhLE1BQU0sV0FBVztBQUM1QyxNQUFJLFNBQVMsUUFBUTtBQUNuQixVQUFNLFFBQVEsS0FBTTtBQUNwQixRQUFJLFVBQVUsVUFBVSxVQUFVLE1BQU07QUFDdEMsYUFBTyxNQUFNLE1BQU87QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFFRCxTQUFPO0FBQ1Q7QUFNTyxTQUFTLFdBQVksTUFBTSxRQUFRO0FBQ3hDLFNBQU8sU0FBUyxTQUNaLE9BQU8sT0FBTyxNQUFNLElBQ3BCO0FBQ047QUFNTyxTQUFTLGlCQUFrQixNQUFNLFFBQVE7QUFDOUMsTUFBSSxTQUFTLFFBQVE7QUFDbkIsV0FBTztBQUFBLEVBQ1I7QUFFRCxTQUFPLFdBQVcsU0FDZCxPQUFPLE9BQU8sTUFB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
