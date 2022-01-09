var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/campuzanojoseph/me/joseph-campuzano-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/config/meta.ts
init_react();
var defaultMetadata = {
  description: "Joseph Campuzano's personal blog",
  title: "Joseph Campuzano",
  image: "/favicon-32x32.png"
};

// app/components/Layout.tsx
init_react();

// app/components/Container.tsx
init_react();

// app/lib/cn.ts
init_react();
var cn = (...args) => {
  const res = [];
  for (const arg of args) {
    if (typeof arg === "string") {
      res.push(arg);
    }
    if (typeof arg === "object" && arg !== null) {
      for (const [key, value] of Object.entries(arg)) {
        if (value) {
          res.push(key);
        }
      }
    }
  }
  return res.join(" ");
};

// app/components/Container.tsx
var Container = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: cn("max-w-4xl mx-auto p-4", props.className)
  }, props.children);
};

// app/components/Footer.tsx
init_react();
var import_io5 = __toModule(require("react-icons/io5"));

// app/config/socials.ts
init_react();
var SocialType;
(function(SocialType2) {
  SocialType2["email"] = "email";
  SocialType2["twitter"] = "twitter";
  SocialType2["instagram"] = "instagram";
  SocialType2["linkedIn"] = "linkedIn";
  SocialType2["github"] = "github";
})(SocialType || (SocialType = {}));
var socials = [
  {
    type: SocialType.twitter,
    label: "Twitter",
    link: "https://twitter.com/CampuzanoJoe"
  },
  {
    type: SocialType.instagram,
    label: "Instagram",
    link: "https://instagram.com/jcampuza"
  },
  {
    type: SocialType.github,
    label: "Github",
    link: "https://github.com/jcampuza"
  },
  {
    type: SocialType.linkedIn,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/josephcampuzano"
  }
];

// app/components/Footer.tsx
var IconForSocialType = {
  [SocialType.instagram]: import_io5.IoLogoInstagram,
  [SocialType.twitter]: import_io5.IoLogoTwitter,
  [SocialType.email]: import_io5.IoMail,
  [SocialType.linkedIn]: import_io5.IoLogoLinkedin,
  [SocialType.github]: import_io5.IoLogoGithub
};
var Socials = () => {
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("ul", {
    className: "text-sm flex space-x-6 mb-4"
  }, socials.map((social) => {
    const Icon = IconForSocialType[social.type];
    return /* @__PURE__ */ React.createElement("li", {
      key: social.type
    }, /* @__PURE__ */ React.createElement("a", {
      href: social.link,
      target: "_blank",
      rel: "noopener noreferrer"
    }, /* @__PURE__ */ React.createElement(Icon, {
      size: 16,
      className: "inline",
      "aria-hidden": "true"
    }), /* @__PURE__ */ React.createElement("span", {
      className: "sr-only sm:not-sr-only sm:ml-2"
    }, social.label)));
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm block"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "mailto:campuzanojoseph@gmail.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement(import_io5.IoMail, {
    size: 16,
    className: "inline",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml-2"
  }, "Email me"))));
};
var Footer = () => {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "bg-gradient-to-bl from-indigo-900 to-black via-pink-900  text-white"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("small", {
    className: "block mb-2"
  }, "All opinions are my own"), /* @__PURE__ */ React.createElement(Socials, null)));
};

// app/components/Header.tsx
init_react();
var import_remix2 = __toModule(require_remix());
var Header = (props) => {
  return /* @__PURE__ */ React.createElement("header", {
    className: cn("bg-gradient-to-tl from-pink-900 to-indigo-900 text-white shadow-md", props.className)
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    className: "text-md font-mono"
  }, "Joseph Campuzano")));
};

// app/components/Link.tsx
init_react();
var import_remix3 = __toModule(require_remix());
var MyLink = (_a) => {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React.createElement(import_remix3.Link, __spreadProps(__spreadValues({}, rest), {
    className: "underline"
  }), children);
};

// app/components/Layout.tsx
var Subheader = () => {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-2"
  }, /* @__PURE__ */ React.createElement(MyLink, {
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(MyLink, {
    to: "/about"
  }, "About")));
};
var Layout = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen flex flex-col justify-start"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(Subheader, null), /* @__PURE__ */ React.createElement(Container, {
    className: ""
  }, props.children)), /* @__PURE__ */ React.createElement(Footer, null));
};

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-O6KJMGMN.css";

// route-module:/Users/campuzanojoseph/me/joseph-campuzano-remix/app/root.tsx
var isDev = false;
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
    }
  ];
};
var meta = () => {
  return { title: defaultMetadata.title, description: defaultMetadata.description };
};
var HtmlWrapper = ({ children }) => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("script", {
    "data-host": "https://microanalytics.io",
    "data-dnt": "false",
    src: "https://microanalytics.io/js/script.js",
    id: "ZwSg9rf6GA",
    async: true,
    defer: true
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "min-h-screen bg-white"
  }, children, /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), isDev && /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
};
function App() {
  return /* @__PURE__ */ React.createElement(HtmlWrapper, null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null));
}
var CatchBoundary = () => {
  const caught = (0, import_remix4.useCatch)();
  return /* @__PURE__ */ React.createElement(HtmlWrapper, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("h2", null, "Error: ", caught.status), /* @__PURE__ */ React.createElement("p", null, caught.statusText)), /* @__PURE__ */ React.createElement(MyLink, {
    to: "/"
  }, "Go back to a known land! \u{1F304}")));
};
var ErrorBoundary = ({ error }) => {
  return /* @__PURE__ */ React.createElement(HtmlWrapper, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "mb-4 space-y-2"
  }, /* @__PURE__ */ React.createElement("h2", null, "Oops. There was an issue on our end."), isDev && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("pre", {
    className: "p-4 font-mono text-xs bg-slate-300 w-100 whitespace-pre-wrap"
  }, error.stack))), /* @__PURE__ */ React.createElement(MyLink, {
    to: "/"
  }, "Go back to a known land! \u{1F304}")));
};

// route-module:/Users/campuzanojoseph/me/joseph-campuzano-remix/app/routes/posts.$slug.tsx
var posts_slug_exports = {};
__export(posts_slug_exports, {
  default: () => PostLayout,
  loader: () => loader
});
init_react();
var import_remix5 = __toModule(require_remix());

// app/components/PostDetails.tsx
init_react();

// app/lib/date.ts
init_react();
var import_format = __toModule(require("date-fns/format"));
var formatDateLong = (date) => {
  return (0, import_format.default)(new Date(date), "MMMM dd yyyy");
};

// app/components/PostDetails.tsx
var PostDetails = (props) => {
  const dateFormatted = formatDateLong(props.timestamp);
  return /* @__PURE__ */ React.createElement("aside", {
    className: cn(props.className)
  }, /* @__PURE__ */ React.createElement("time", {
    className: "block text-xs italic text-gray-700"
  }, dateFormatted, " "), /* @__PURE__ */ React.createElement("small", {
    className: "block italic text-gray-600"
  }, "Reading Time: ", props.timeToReadMins, " min"));
};

// app/components/PostTags.tsx
init_react();
var PostTags = (props) => {
  return props.tags.length ? /* @__PURE__ */ React.createElement("ul", {
    className: "flex space-x-2"
  }, props.tags.map((tag) => /* @__PURE__ */ React.createElement("li", {
    key: tag,
    className: "px-2 py-1 bg-gradient-to-r from-indigo-700 to-purple-900 text-white rounded-sm text-xs"
  }, tag))) : null;
};

// app/components/ScrollProgressBar.tsx
init_react();
var import_react2 = __toModule(require("react"));

// app/lib/debounce-throttle.ts
init_react();
var throttle = (callback, time) => {
  let timeout = null;
  let latestArgs = [];
  return (...args) => {
    if (timeout) {
      latestArgs = args;
      return;
    }
    timeout = setTimeout(() => {
      callback(...latestArgs);
      timeout = null;
    }, time);
  };
};

// app/lib/useIsMounted.ts
init_react();
var import_react = __toModule(require("react"));
var useIsMounted = () => {
  const isMounted = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  const isMountedCallback = (0, import_react.useCallback)(() => isMounted.current, []);
  return isMountedCallback;
};

// app/components/ScrollProgressBar.tsx
var getScrollPercentage = (el = document.scrollingElement) => {
  if (!el) {
    return 0;
  }
  const scrollHeight = el.scrollHeight;
  const scrollElClientHeight = el.clientHeight;
  const scrollTop = el.scrollTop;
  return scrollTop / (scrollHeight - scrollElClientHeight);
};
var ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = (0, import_react2.useState)(0);
  const isMounted = useIsMounted();
  (0, import_react2.useEffect)(() => {
    const setProgressFn = () => {
      if (isMounted()) {
        setScrollProgress(getScrollPercentage());
      }
    };
    const setProgressThrottled = throttle(setProgressFn, 80);
    window.addEventListener("scroll", setProgressThrottled);
    return () => {
      window.removeEventListener("scroll", setProgressThrottled);
    };
  }, [isMounted]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "fixed top-0 left-0 h-1 w-full bg-blue-700 origin-left transition-transform duration-200",
    style: {
      transform: `scaleX(${scrollProgress})`
    }
  });
};

// app/lib/posts.ts
init_react();
var import_promises = __toModule(require("fs/promises"));
var import_gray_matter = __toModule(require("gray-matter"));
var import_path = __toModule(require("path"));

// app/lib/mdToHtml.ts
init_react();
var import_marked = __toModule(require("marked"));
var mdToHtml = async (content) => {
  const result = (0, import_marked.marked)(content);
  return result;
};

// app/lib/obj.ts
init_react();
var omit = (obj, ...keys) => {
  const copy = __spreadValues({}, obj);
  for (const key of keys) {
    delete copy[key];
  }
  return copy;
};

// app/lib/readingTime.ts
init_react();
var import_node_html_parser = __toModule(require("node-html-parser"));
var readingTimeMins = (html, wpm = 250) => {
  const el = (0, import_node_html_parser.parse)(html);
  const words = el.innerText.split(/\s+/).length;
  const minutes = Math.ceil(words / wpm);
  return minutes;
};

// app/lib/posts.ts
var import_zod = __toModule(require("zod"));
var PostSchema = import_zod.z.object({
  html: import_zod.z.string(),
  timeToReadMins: import_zod.z.number(),
  slug: import_zod.z.string(),
  timestamp: import_zod.z.number(),
  preview: import_zod.z.string(),
  title: import_zod.z.string(),
  tags: import_zod.z.string().array()
});
var postsDir = import_path.default.join(process.cwd(), "_posts");
var parsePostFromFileContents = async (file) => {
  const rawContent = await import_promises.default.readFile(import_path.default.join(postsDir, file), "utf-8");
  const slug = file.replace(/\.md$/, "");
  const { content, data } = (0, import_gray_matter.default)(rawContent);
  const title = data.title;
  const preview = data.preview;
  const date = new Date(data.date);
  const tags = data.tags;
  const result = (await mdToHtml(content)).toString();
  const timeToReadMins = readingTimeMins(result);
  const post = PostSchema.parse({
    html: result,
    timeToReadMins,
    slug,
    timestamp: date.getTime(),
    preview,
    title,
    tags
  });
  return post;
};
var getPostsFiles = () => {
  return import_promises.default.readdir(postsDir);
};
var getPosts = async () => {
  const files = await getPostsFiles();
  const posts = await Promise.all(files.map((file) => parsePostFromFileContents(file)));
  return posts.map((post) => omit(post, "html")).sort((a, b) => b.timestamp - a.timestamp);
};
var getPost = (slug) => {
  const fileName = `${slug}.md`;
  return parsePostFromFileContents(fileName);
};

// route-module:/Users/campuzanojoseph/me/joseph-campuzano-remix/app/routes/posts.$slug.tsx
var loader = async ({ params }) => {
  if (!params || !params.slug) {
    (0, import_remix5.redirect)("/404");
  }
  try {
    return await getPost(params.slug);
  } catch {
    throw new Response("Not Found", {
      status: 404
    });
  }
};
function PostLayout() {
  const post = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(ScrollProgressBar, null), /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("header", {
    className: ""
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-mono text-2xl"
  }, post.title), /* @__PURE__ */ React.createElement(PostDetails, {
    className: "mb-2",
    timeToReadMins: post.timeToReadMins,
    timestamp: post.timestamp
  }), /* @__PURE__ */ React.createElement(PostTags, {
    tags: post.tags
  })), /* @__PURE__ */ React.createElement("section", {
    className: "prose my-8",
    dangerouslySetInnerHTML: { __html: post.html }
  })));
}

// route-module:/Users/campuzanojoseph/me/joseph-campuzano-remix/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
init_react();
function About() {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "font-sans"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-mono text-2xl mb-4"
  }, "About Me"), /* @__PURE__ */ React.createElement("main", {
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement("p", null, "Hi, I'm Joseph", " ", /* @__PURE__ */ React.createElement("span", {
    style: { animationIterationCount: 1, animationDelay: "500ms" },
    className: "inline-block delay-100 animate-wiggle"
  }, "\u{1F44B}")), /* @__PURE__ */ React.createElement("p", null, "I talk code, life, and anything else that may be on my mind. Sometimes I think of things that others may be interested in, so I figured I'd start a small blog"), /* @__PURE__ */ React.createElement("p", null, "If you ever want to reach me, you can at", " ", /* @__PURE__ */ React.createElement("a", {
    className: "text-blue-700 underline",
    href: "mailto:campuzanojoseph@gmail.com"
  }, "campuzanojoseph@gmail.com")))));
}

// route-module:/Users/campuzanojoseph/me/joseph-campuzano-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  headers: () => headers,
  loader: () => loader2
});
init_react();
var import_remix7 = __toModule(require_remix());

// app/components/PostSummary.tsx
init_react();
var import_remix6 = __toModule(require_remix());
var PostSummary = (props) => {
  return /* @__PURE__ */ React.createElement("article", {
    className: "py-8 border-b border-gray-400"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "mb-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: props.href,
    className: "text-lg font-semibold underline"
  }, props.title), /* @__PURE__ */ React.createElement(PostDetails, {
    timeToReadMins: props.timeToReadMins,
    timestamp: props.timestamp
  })), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-800 mb-2"
  }, props.preview), /* @__PURE__ */ React.createElement(PostTags, {
    tags: props.tags
  }));
};

// route-module:/Users/campuzanojoseph/me/joseph-campuzano-remix/app/routes/index.tsx
var loader2 = async (ctx) => {
  const posts = await getPosts();
  return posts;
};
var headers = () => {
  return {
    "Cache-Control": "max-age=300"
  };
};
function Index() {
  const posts = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(PostSummary, {
    key: post.slug,
    title: post.title,
    timestamp: post.timestamp,
    preview: post.preview,
    href: `/posts/${post.slug}`,
    tags: post.tags,
    timeToReadMins: post.timeToReadMins
  })))));
}

// route-module:/Users/campuzanojoseph/me/joseph-campuzano-remix/app/routes/404.tsx
var __exports = {};
__export(__exports, {
  default: () => NotFound
});
init_react();
function NotFound() {
  return /* @__PURE__ */ React.createElement("div", null, "Not Found");
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/posts.$slug": {
    id: "routes/posts.$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: posts_slug_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "404",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
