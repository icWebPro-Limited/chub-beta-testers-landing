import { c as create_ssr_component, b as spread, e as escape_object, d as add_attribute, f as compute_rest_props, v as validate_component, g as subscribe, h as add_classes } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { faLinkedin, faTwitter, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { parse, icon } from "@fortawesome/fontawesome-svg-core";
import { C as ChubLogo } from "../../chunks/wLogo_white.js";
import "sweetalert";
function classList(props) {
  const {
    beat,
    fade,
    beatFade,
    bounce,
    shake,
    flash,
    spin,
    spinPulse,
    spinReverse,
    pulse,
    fixedWidth,
    inverse,
    border,
    listItem,
    flip,
    size,
    rotation,
    pull
  } = props;
  const classes = {
    "fa-beat": beat,
    "fa-fade": fade,
    "fa-beat-fade": beatFade,
    "fa-bounce": bounce,
    "fa-shake": shake,
    "fa-flash": flash,
    "fa-spin": spin,
    "fa-spin-reverse": spinReverse,
    "fa-spin-pulse": spinPulse,
    "fa-pulse": pulse,
    "fa-fw": fixedWidth,
    "fa-inverse": inverse,
    "fa-border": border,
    "fa-li": listItem,
    "fa-flip": flip === true,
    "fa-flip-horizontal": flip === "horizontal" || flip === "both",
    "fa-flip-vertical": flip === "vertical" || flip === "both",
    [`fa-${size}`]: typeof size !== "undefined" && size !== null,
    [`fa-rotate-${rotation}`]: typeof rotation !== "undefined" && rotation !== null && rotation !== 0,
    [`fa-pull-${pull}`]: typeof pull !== "undefined" && pull !== null,
    "fa-swap-opacity": props.swapOpacity
  };
  return Object.keys(classes).map((key) => classes[key] ? key : null).filter((key) => key);
}
function _isNumerical(obj) {
  obj = obj - 0;
  return obj === obj;
}
function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  }
  string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : "";
  });
  return string.substr(0, 1).toLowerCase() + string.substr(1);
}
function styleToString(style) {
  if (typeof style === "string") {
    return style;
  }
  return Object.keys(style).reduce((acc, key) => acc + key.split(/(?=[A-Z])/).join("-").toLowerCase() + ":" + style[key] + ";", "");
}
function convert(createElement, element, extraProps = {}) {
  if (typeof element === "string") {
    return element;
  }
  const children = (element.children || []).map((child) => {
    return convert(createElement, child);
  });
  const mixins = Object.keys(element.attributes || {}).reduce(
    (acc, key) => {
      const val = element.attributes[key];
      if (key === "style") {
        acc.attrs["style"] = styleToString(val);
      } else {
        if (key.indexOf("aria-") === 0 || key.indexOf("data-") === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }
      }
      return acc;
    },
    { attrs: {} }
  );
  return createElement(element.tag, { ...mixins.attrs }, children);
}
let PRODUCTION = false;
try {
  PRODUCTION = process.env.NODE_ENV === "production";
} catch (e) {
}
function log(...args) {
  if (!PRODUCTION && console && typeof console.error === "function") {
    console.error(...args);
  }
}
function normalizeIconArgs(icon2) {
  if (icon2 && typeof icon2 === "object" && icon2.prefix && icon2.iconName && icon2.icon) {
    return icon2;
  }
  if (parse.icon) {
    return parse.icon(icon2);
  }
  if (icon2 === null) {
    return null;
  }
  if (icon2 && typeof icon2 === "object" && icon2.prefix && icon2.iconName) {
    return icon2;
  }
  if (Array.isArray(icon2) && icon2.length === 2) {
    return { prefix: icon2[0], iconName: icon2[1] };
  }
  if (typeof icon2 === "string") {
    return { prefix: "fas", iconName: icon2 };
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? { [key]: value } : {};
}
const SvgElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag } = $$props;
  let { props } = $$props;
  let { children } = $$props;
  let { style = null } = $$props;
  let { ref = null } = $$props;
  if (tag !== "svg") {
    throw new Error('SvgElement requires a tag of "svg"');
  }
  function processChildren(children2) {
    return children2?.reduce(
      (acc, child) => {
        return acc + (child.tag ? generateMarkup(child) : child);
      },
      ""
    ) || "";
  }
  function generateMarkup({ tag: tag2, props: props2, children: children2 }) {
    const attributes = Object.keys(props2).map((key) => `${key}="${props2[key]}"`).join(" ");
    return `<${tag2} ${attributes}>${processChildren(children2)}</${tag2}>`;
  }
  const markup = processChildren(children);
  const elementStyle = props?.style ? `${props.style}${style || ""}` : style;
  const elementProps = { ...props, style: elementStyle };
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<svg${spread([escape_object(elementProps)], {})}${add_attribute("this", ref, 0)}><!-- HTML_TAG_START -->${markup}<!-- HTML_TAG_END --></svg>`;
});
const FontAwesomeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "border",
    "mask",
    "maskId",
    "fixedWidth",
    "inverse",
    "flip",
    "icon",
    "listItem",
    "pull",
    "pulse",
    "rotation",
    "size",
    "spin",
    "spinPulse",
    "spinReverse",
    "beat",
    "fade",
    "beatFade",
    "bounce",
    "shake",
    "symbol",
    "title",
    "titleId",
    "transform",
    "swapOpacity",
    "ref",
    "style"
  ]);
  let { border = false } = $$props;
  let { mask = null } = $$props;
  let { maskId = null } = $$props;
  let { fixedWidth = false } = $$props;
  let { inverse = false } = $$props;
  let { flip = false } = $$props;
  let { icon: icon$1 = null } = $$props;
  let { listItem = false } = $$props;
  let { pull = null } = $$props;
  let { pulse = false } = $$props;
  let { rotation = null } = $$props;
  let { size = null } = $$props;
  let { spin = false } = $$props;
  let { spinPulse = false } = $$props;
  let { spinReverse = false } = $$props;
  let { beat = false } = $$props;
  let { fade = false } = $$props;
  let { beatFade = false } = $$props;
  let { bounce = false } = $$props;
  let { shake = false } = $$props;
  let { symbol = false } = $$props;
  let { title = "" } = $$props;
  let { titleId = null } = $$props;
  let { transform = null } = $$props;
  let { swapOpacity = false } = $$props;
  let { ref = null } = $$props;
  let { style = null } = $$props;
  const iconLookup = normalizeIconArgs(icon$1);
  const classes = objectWithKey("classes", [...classList($$props), ...($$props.class || "").split(" ")]);
  const transformObj = objectWithKey("transform", typeof transform === "string" ? parse.transform(transform) : transform);
  const maskObj = objectWithKey("mask", normalizeIconArgs(mask));
  const renderedIcon = icon(iconLookup, {
    ...classes,
    ...transformObj,
    ...maskObj,
    symbol,
    title,
    titleId,
    maskId
  });
  let result = null;
  if (!renderedIcon) {
    log("Could not find icon", iconLookup);
  } else {
    const { abstract } = renderedIcon;
    result = convert(
      (tag, props, children) => {
        return { tag, props, children };
      },
      abstract[0],
      $$restProps
    );
  }
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.mask === void 0 && $$bindings.mask && mask !== void 0)
    $$bindings.mask(mask);
  if ($$props.maskId === void 0 && $$bindings.maskId && maskId !== void 0)
    $$bindings.maskId(maskId);
  if ($$props.fixedWidth === void 0 && $$bindings.fixedWidth && fixedWidth !== void 0)
    $$bindings.fixedWidth(fixedWidth);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.icon === void 0 && $$bindings.icon && icon$1 !== void 0)
    $$bindings.icon(icon$1);
  if ($$props.listItem === void 0 && $$bindings.listItem && listItem !== void 0)
    $$bindings.listItem(listItem);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.spinPulse === void 0 && $$bindings.spinPulse && spinPulse !== void 0)
    $$bindings.spinPulse(spinPulse);
  if ($$props.spinReverse === void 0 && $$bindings.spinReverse && spinReverse !== void 0)
    $$bindings.spinReverse(spinReverse);
  if ($$props.beat === void 0 && $$bindings.beat && beat !== void 0)
    $$bindings.beat(beat);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  if ($$props.beatFade === void 0 && $$bindings.beatFade && beatFade !== void 0)
    $$bindings.beatFade(beatFade);
  if ($$props.bounce === void 0 && $$bindings.bounce && bounce !== void 0)
    $$bindings.bounce(bounce);
  if ($$props.shake === void 0 && $$bindings.shake && shake !== void 0)
    $$bindings.shake(shake);
  if ($$props.symbol === void 0 && $$bindings.symbol && symbol !== void 0)
    $$bindings.symbol(symbol);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.titleId === void 0 && $$bindings.titleId && titleId !== void 0)
    $$bindings.titleId(titleId);
  if ($$props.transform === void 0 && $$bindings.transform && transform !== void 0)
    $$bindings.transform(transform);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${result ? `${validate_component(SvgElement, "SvgElement").$$render(
      $$result,
      Object.assign({}, result, { style }, { ref }),
      {
        ref: ($$value) => {
          ref = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="w-full"><div class="mb-10 opacity-0" data-svelte-h="svelte-orosdt">Footer</div> <div id="footer-layer" class=""><div class="justify-center mx-20 max-lg:mx-5">   <div class="max-md:pb-[50px] pb-[50px] border-b-[1px] border-solid border-b-white"><div class="mt-20 max-md:mt-10 max-md:block flex justify-between"><div class="w-full">  <img class="bg-transparent w-[9rem] md:w-[14rem] ml-[-10px]"${add_attribute("src", ChubLogo, 0)} alt="CHUB logo">  <p class="text-[0.4rem] lg:text-[12px]" data-svelte-h="svelte-7be61p">Ready, Set, Grow.</p></div>  <div class="flex items-center justify-end gap-10 w-full max-md:flex-col max-md:mt-10 max-md:gap-[15px]"><a href="https://linkedin.com/thechubapp">${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render($$result, { icon: faLinkedin, size: "2x" }, {}, {})}</a> <a href="https://twitter.com/@thechubapp">${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render($$result, { icon: faTwitter, size: "2x" }, {}, {})}</a> <a href="https://tiktok.com/@thechubapp">${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render($$result, { icon: faTiktok, size: "2x" }, {}, {})}</a> <a href="https://instagram.com/@thechubapp">${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render($$result, { icon: faInstagram, size: "2x" }, {}, {})}</a></div></div> <div class="flex justify-center gap-20 mt-5" data-svelte-h="svelte-1eszk21"><a href="/">Home</a> <a href="#">Contact Us</a> <a href="#">Discord</a></div></div>  <div class="mt-10 max-md:mt-5 pb-10 flex max-md:flex-col justify-between" data-svelte-h="svelte-b3ikr6"><div class="text-[12px] w-full"><p>© 2023 CHUB. All rights reserved.</p></div> <div class="flex gap-1 justify-end max-md:justify-start text-[12px] w-full"><p><a href="/cookies">Cookies |</a> <a href="/policies">Policies |</a> <a href="/terms-and-condition">Terms &amp; conditions |</a> <a href="/privacy-policy">Privacy Policy</a></p></div></div></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return ` <menu><a href="/"${add_classes(($page.url.pathname === "/" ? "nav--active" : "").trim())} data-svelte-h="svelte-db4yvy">Home</a> <a href="/about-us"${add_classes(($page.url.pathname === "/about-us" ? "nav--active" : "").trim())} data-svelte-h="svelte-md0f5m">Why Chub?</a> <a href="/suggestions"${add_classes(($page.url.pathname === "/suggestions" ? "nav--active" : "").trim())} data-svelte-h="svelte-1b53649">Join the waitlist</a> </menu>  <div class="relative flex flex-col max-w-full mx-auto w-full text-sm sm:text-base"><div${add_attribute(
    "class",
    "fixed bottom-0 w-auto duration-200 flex p-10 z-[10] bg-transparent opacity-0 pointer-events-none",
    0
  )}><button class="max-md:hidden arrow-button ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-[#33023b] cursor-pointer bg-transparent" data-svelte-h="svelte-d1ntah"><i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i></button></div></div> ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} `;
});
export {
  Layout as default
};
