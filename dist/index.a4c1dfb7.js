// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7MVYt":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "beffc382a4c1dfb7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"l731N":[function(require,module,exports) {
// import { strGenerateSeedWords, 
//     boolIsValidWords, 
//     objNostrKeys,
//     objCoinKeys } from "@laantungir/nostr-keys"
// import { ToggleFullScreen } from "@laantungir/utilities"
// import QRCode from "qrcode-svg"
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _utilities = require("/node_modules/@laantungir/utilities");
var _qrcodeSvg = require("/node_modules/qrcode-svg");
var _qrcodeSvgDefault = parcelHelpers.interopDefault(_qrcodeSvg);
async function registerServiceWorker() {
    const serviceWorkerUrl = new URL(require("b737d5178e56e7b4"));
    console.log(`Registering service worker file located at ${serviceWorkerUrl} ...`);
    if ("serviceWorker" in navigator) try {
        const registration = await navigator.serviceWorker.register(serviceWorkerUrl, {
            type: "module",
            scope: "/"
        });
        console.log("Service worker registered", registration);
    } catch (error) {
        console.error("Error registering service worker:", error);
    }
    else console.warn("Service workers are not supported.");
}
//////////////////////////////////////////////////////////////////////
// DOM VARIABLES
//////////////////////////////////////////////////////////////////////
const divBody = document.getElementById("divBody");
const divControls = document.getElementById("divControls");
const divSideNav = document.getElementById("divSideNav");
const divSideNavBody = document.getElementById("divSideNavBody");
const divFooter = document.getElementById(`divFooter`);
const svgHam = document.getElementById(`svgHam`);
const divFoot01 = document.getElementById("divFoot01");
const divFoot02 = document.getElementById("divFoot02");
const divFoot03 = document.getElementById("divFoot03");
const divFoot04 = document.getElementById("divFoot04");
const divFoot05 = document.getElementById("divFoot05");
//////////////////////////////////////////////////////////////////////
// SIDENAV
//////////////////////////////////////////////////////////////////////
function openNav() {
    divSideNav.style.zIndex = 3;
    divSideNav.style.width = "80vw";
    LoadSidenav();
}
function closeNav() {
    divSideNav.style.width = "0vw";
    divSideNav.style.zIndex = -1;
}
function LoadSidenav() {
    OutStr = "This is the sidenav";
    LastCategory = "";
    divSideNavBody.innerHTML = OutStr;
    openNav();
} // function LoadSidenav
const UpdateFooter = async ()=>{
    divFoot05.innerHTML = objFormat.owner_digest;
};
//////////////////////////////////////////////////////////////////////////////
//  EVENTS
//////////////////////////////////////////////////////////////////////////////
svgHam.addEventListener("click", LoadSidenav);
svgXClose.addEventListener("click", closeNav);
// svgCheck.addEventListener("click", MarkAllVisibleAsRead)
// svgCarrot.addEventListener("click", ExpandAllPost)
//////////////////////////////////////////////////////////////////////////////
//  MAIN
//////////////////////////////////////////////////////////////////////////////
// registerServiceWorker()
divFoot01.innerHTML = "Hi ya";
var svg = new (0, _qrcodeSvgDefault.default)({
    content: "Pretty Fox",
    join: true,
    predefined: false,
    container: "svg-viewbox"
}).svg();
console.log(svg);
divBody.innerHTML = svg;

},{"b737d5178e56e7b4":"divNp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/node_modules/@laantungir/utilities":"kFq1R","/node_modules/qrcode-svg":"2k17G"}],"divNp":[function(require,module,exports) {
module.exports = require("36664c6fa24901d1").getBundleURL("goGnM") + "sw.d714839d.js" + "?" + Date.now();

},{"36664c6fa24901d1":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kFq1R":[function(require,module,exports) {
//  ██    ██ ████████ ██ ██      ██ ████████ ██ ███████ ███████ 
//  ██    ██    ██    ██ ██      ██    ██    ██ ██      ██      
//  ██    ██    ██    ██ ██      ██    ██    ██ █████   ███████ 
//  ██    ██    ██    ██ ██      ██    ██    ██ ██           ██ 
//   ██████     ██    ██ ███████ ██    ██    ██ ███████ ███████ 
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  CONSTANTS
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "objMimeTypes", ()=>objMimeTypes);
parcelHelpers.export(exports, "arrImageExt", ()=>arrImageExt);
parcelHelpers.export(exports, "htmlCenteringWrapper", ()=>htmlCenteringWrapper);
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  TIME ROUTINES
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
parcelHelpers.export(exports, "timeConverter", ()=>timeConverter);
parcelHelpers.export(exports, "wait", ()=>wait);
parcelHelpers.export(exports, "PythonTimestamp", ()=>PythonTimestamp);
parcelHelpers.export(exports, "JSTimestamp", ()=>JSTimestamp);
parcelHelpers.export(exports, "JSTimestampMidnight", ()=>JSTimestampMidnight);
parcelHelpers.export(exports, "DaysBetweenDates", ()=>DaysBetweenDates);
parcelHelpers.export(exports, "HoursBetweenDates", ()=>HoursBetweenDates);
parcelHelpers.export(exports, "secDayAgo", ()=>secDayAgo);
parcelHelpers.export(exports, "secWeekAgo", ()=>secWeekAgo);
parcelHelpers.export(exports, "secMonthAgo", ()=>secMonthAgo);
parcelHelpers.export(exports, "secYearAgo", ()=>secYearAgo);
parcelHelpers.export(exports, "hash53", ()=>hash53);
parcelHelpers.export(exports, "pad", ()=>pad);
parcelHelpers.export(exports, "arrAllFilesInSubdirectories", ()=>arrAllFilesInSubdirectories);
parcelHelpers.export(exports, "htmlFormatText", ()=>htmlFormatText);
parcelHelpers.export(exports, "arrImageLinks", ()=>arrImageLinks);
parcelHelpers.export(exports, "RemoveTagContent", ()=>RemoveTagContent);
parcelHelpers.export(exports, "objQueryStr", ()=>objQueryStr);
parcelHelpers.export(exports, "CopyValToClipboard", ()=>CopyValToClipboard);
parcelHelpers.export(exports, "SelAllContent", ()=>SelAllContent);
parcelHelpers.export(exports, "ToggleFullScreen", ()=>ToggleFullScreen);
parcelHelpers.export(exports, "ToggleSpellCheck", ()=>ToggleSpellCheck);
parcelHelpers.export(exports, "ConvertStringToType", ()=>ConvertStringToType);
parcelHelpers.export(exports, "displayTextWidth", ()=>displayTextWidth);
parcelHelpers.export(exports, "selDBFields", ()=>selDBFields);
parcelHelpers.export(exports, "ValInArr", ()=>ValInArr);
parcelHelpers.export(exports, "arrOfObjSort", ()=>arrOfObjSort);
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  UTILITIES
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
parcelHelpers.export(exports, "basex", ()=>basex);
parcelHelpers.export(exports, "bs02", ()=>bs02);
parcelHelpers.export(exports, "bs06", ()=>bs06);
parcelHelpers.export(exports, "bs08", ()=>bs08);
parcelHelpers.export(exports, "bs10", ()=>bs10);
parcelHelpers.export(exports, "bs16", ()=>bs16);
parcelHelpers.export(exports, "bs58", ()=>bs58);
parcelHelpers.export(exports, "bs64", ()=>bs64);
parcelHelpers.export(exports, "BaseEncodeDecode", ()=>BaseEncodeDecode);
parcelHelpers.export(exports, "objReadJSONFile", ()=>objReadJSONFile);
parcelHelpers.export(exports, "objWriteJSONFile", ()=>objWriteJSONFile);
parcelHelpers.export(exports, "jsonFolderDir", ()=>jsonFolderDir);
parcelHelpers.export(exports, "arrDBs", ()=>arrDBs);
parcelHelpers.export(exports, "objLoadDB", ()=>objLoadDB);
parcelHelpers.export(exports, "numMax_id", ()=>numMax_id);
parcelHelpers.export(exports, "RowOf_id", ()=>RowOf_id);
parcelHelpers.export(exports, "LoadFields", ()=>LoadFields);
parcelHelpers.export(exports, "DelDB_id", ()=>DelDB_id);
parcelHelpers.export(exports, "SaveDB", ()=>SaveDB);
parcelHelpers.export(exports, "SaveNewDB", ()=>SaveNewDB);
parcelHelpers.export(exports, "objDecryptedJSON", ()=>objDecryptedJSON);
parcelHelpers.export(exports, "objEncryptedJSON", ()=>objEncryptedJSON);
parcelHelpers.export(exports, "DbToCsv", ()=>DbToCsv);
parcelHelpers.export(exports, "CsvToArr", ()=>CsvToArr);
parcelHelpers.export(exports, "objAddPair", ()=>objAddPair);
parcelHelpers.export(exports, "svgIcon", ()=>svgIcon);
parcelHelpers.export(exports, "htmlFromObjSVG", ()=>htmlFromObjSVG);
parcelHelpers.export(exports, "objHashtags", ()=>objHashtags);
parcelHelpers.export(exports, "ToggleHashtags", ()=>ToggleHashtags);
parcelHelpers.export(exports, "objNostrEvents", ()=>objNostrEvents);
parcelHelpers.export(exports, "arrNostrEvents", ()=>arrNostrEvents);
parcelHelpers.export(exports, "arrNostrStandardizedTags", ()=>arrNostrStandardizedTags);
const objMimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "gif": "image/gif",
    "webp": "image/webp",
    "svg": "image/svg+xml",
    "json": "application/json",
    "js": "text/javascript",
    "css": "text/css",
    "ico": "image/x-icon",
    "mp3": "audio/mp3",
    "mjs": "text/javascript"
};
const arrImageExt = [
    ".apng",
    ".avif",
    ".gif",
    ".jpg",
    ".jpeg",
    ".jfif",
    ".pjpeg",
    ".pjp",
    ".png",
    ".svg",
    ".webp"
];
const htmlCenteringWrapper = `<!DOCTYPE html>
  <html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>#title#</title>

    <style>
      .clsMain {
        display: flex;
        justify-content: center;
        align-items: center;
        }
    </style>
  </head>

  <body>
    <div class="clsMain">
      #body#
    </div>
  </body>
</html>`;
function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = pad(a.getHours(), 2);
    var min = pad(a.getMinutes(), 2);
    var sec = pad(a.getSeconds(), 2);
    var time = date + " " + month + " " + year + " " + hour + ":" + min + "." + sec;
    return time;
}
function wait(ms) {
    var start = Date.now(), now = start;
    while(now - start < ms)now = Date.now();
}
function PythonTimestamp() {
    var ts = (new Date() / 1000).toFixed(0);
    return Number(ts);
}
function JSTimestamp() {
    var ts = new Date().toFixed(0);
    return Number(ts);
}
function JSTimestampMidnight() {
    var d = new Date();
    var Day = d.getDate();
    var Month = d.getMonth() + 1;
    var Year = d.getFullYear();
    var ToDay = new Date(Year + "-" + Month + "-" + Day);
    // var ts = (ToDay / 1000).toFixed(0) // For seconds
    // console.log('Midnight',Year,Month,Day)
    return Number(ToDay);
}
const DaysBetweenDates = (dteDate1, dteDate2)=>{
    let d1 = new Date(dteDate1);
    let d2 = new Date(dteDate2);
    if (d1 instanceof Date && d2 instanceof Date) return Math.floor((d2 - d1) / 86400000);
    else return `error`;
};
const HoursBetweenDates = (dteDate1, dteDate2)=>{
    let d1 = new Date(dteDate1);
    let d2 = new Date(dteDate2);
    if (d1 instanceof Date && d2 instanceof Date) return Math.floor((d2 - d1) / 3600000);
    else return `error`;
};
Date.prototype.addDays = function(h) {
    this.setTime(this.getTime() + h * 86400000);
    return this;
};
Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + h * 3600000);
    return this;
};
Date.prototype.addMinutes = function(h) {
    this.setTime(this.getTime() + h * 60000);
    return this;
};
Date.prototype.addSeconds = function(h) {
    this.setTime(this.getTime() + h * 1000);
    return this;
};
const secDayAgo = ()=>{
    const Now = Math.floor(Date.now() / 1000);
    return Now - 86400;
};
const secWeekAgo = ()=>{
    const Now = Math.floor(Date.now() / 1000);
    return Now - Now - 604800;
};
const secMonthAgo = ()=>{
    const Now = Math.floor(Date.now() / 1000);
    return Now - 2592000;
};
const secYearAgo = ()=>{
    const Now = Math.floor(Date.now() / 1000);
    return Now - 31536000;
};
const hash53 = (str, seed = 0)=>{
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i1 = 0, ch; i1 < str.length; i1++){
        ch = str.charCodeAt(i1);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
    h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
    r1 = 4294967296 * (2097151 & h2) + (h1 >>> 0);
    return r1.toString(16);
};
const pad = (num, size)=>{
    num = num.toString();
    while(num.length < size)num = "0" + num;
    return num;
};
const arrAllFilesInSubdirectories = async (dir)=>{
    // import { resolve } from 'path'
    // import { readdir } from 'fs/promises'
    const dirents = await readdir(dir, {
        withFileTypes: true
    });
    const files = await Promise.all(dirents.map((dirent)=>{
        const res = resolve(dir, dirent.name);
        return dirent.isDirectory() ? arrAllFilesInSubdirectories(res) : res;
    }));
    return Array.prototype.concat(...files);
};
const htmlFormatText = (txt)=>{
    var rgxURL = /\bhttp?s?:?\S*/ig;
    var rgxImg = /(.png|.jpg|.jpeg|.gif|.png|.svg)\b/i;
    let arrLinks = [];
    arrLinks = txt.match(rgxURL);
    if (arrLinks) {
        for (EachLink of arrLinks)if (rgxImg.test(EachLink)) txt = txt.replace(EachLink, `<img src="${EachLink}">`);
        else txt = txt.replace(EachLink, `<a href="${EachLink}" target="_blank">${EachLink}</a>`);
    }
    return txt;
};
const arrImageLinks = async (htmlSearch)=>{
    // Return a list of image links from an HTML string
    let setImg = new Set([]);
    let linkStart = 0;
    let linkEnd = 0;
    let strStartTag = "src=";
    let strEndTag = '"';
    if (htmlSearch) {
        let strHTML = htmlSearch.replace(/'/g, '"') //replace all single q's w doubles
        ;
        linkStart = strHTML.indexOf(strStartTag);
        while(linkStart > 0){
            strHTML = strHTML.slice(linkStart + strStartTag.length + 1);
            linkEnd = strHTML.indexOf(strEndTag);
            setImg.add(strHTML.slice(0, linkEnd));
            linkStart = strHTML.indexOf(strStartTag);
        }
    }
    return Array.from(setImg) //remove duplicates
    ;
};
const RemoveTagContent = (strHTML, strStartTag, strEndTag)=>{
    while(strHTML.indexOf(strStartTag) > 0 && strHTML.indexOf(strEndTag) > strHTML.indexOf(strStartTag))strHTML = strHTML.slice(0, strHTML.indexOf(strStartTag)) + strHTML.slice(strHTML.indexOf(strEndTag) + strEndTag.length);
    return strHTML;
};
const objQueryStr = async ()=>{
    let output = {};
    if (window.location.search) {
        var queryParams = window.location.search.substring(1);
        var listQueries = queryParams.split("&");
        for(var query in listQueries)if (listQueries.hasOwnProperty(query)) {
            var queryPair = listQueries[query].split("=");
            output[queryPair[0]] = decodeURIComponent(queryPair[1] || "");
        }
    }
    return output;
};
const CopyValToClipboard = async (val)=>{
    navigator.clipboard.writeText(val);
};
const SelAllContent = async (id)=>{
    var div = document.getElementById(id);
    window.setTimeout(function() {
        var sel, range;
        if (window.getSelection && document.createRange) {
            range = document.createRange();
            range.selectNodeContents(div);
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(div);
            range.select();
        }
    }, 10);
};
const ToggleFullScreen = async ()=>{
    let IsFullScreen = false;
    console.log(window.outerHeight, window.innerHeight, window.screen.height, window.innerWidth, screen.width, window.innerHeight / screen.height, window.innerWidth / screen.width);
    if (window.innerHeight / screen.height > 0.90 && window.innerWidth / screen.width > 0.90) IsFullScreen = true;
    if (window.outerHeight == window.innerHeight == screen.height) IsFullScreen = true;
    if (IsFullScreen) {
        document.exitFullscreen();
        document.getElementById("divFullScreen").innerHTML = `<div  id="divFullScreen"  class="divHeaderButtons" onclick="ToggleFullScreen()">
        <svg  class="svgHeaderButtons" viewBox="0 0 10 10">
          <line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="5" y1="2" x2="5" y2="8" />
          <line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="5" y1="2" x2="3" y2="4" />
          <line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="5" y1="2" x2="7" y2="4" />
        </svg>
      </div>`;
    } else {
        let elem = document.documentElement;
        elem.requestFullscreen();
        document.getElementById("divFullScreen").innerHTML = `<div  id="divFullScreen"  class="divHeaderButtons" onclick="ToggleFullScreen()">
        <svg  class="svgHeaderButtons" viewBox="0 0 10 10">
          <line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="5" y1="2" x2="5" y2="8" />
          <line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="7" y1="6" x2="5" y2="8" />
          <line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-opacity="1" fill="black" fill-opacity="0" x1="3" y1="6" x2="5" y2="8" />
        </svg>
      </div>`;
    }
};
const ToggleSpellCheck = async ()=>{
    SpellCheck = !SpellCheck;
    divBody.spellcheck = SpellCheck;
    if (SpellCheck) document.getElementById("svgCheckPath").setAttribute("stroke", "black");
    else document.getElementById("svgCheckPath").setAttribute("stroke", "lightgray");
};
const ConvertStringToType = async (str)=>{
    if (typeof str == "undefined") str = "";
    else if (!isNaN(str)) str = parseFloat(str);
    else if (str == "true") str = true;
    else if (str == "false") str = false;
    else if (str.slice(0, 1) == "[" && str.slice(-1) == "]") str = JSON.parse(str);
    else if (str.slice(0, 1) == "{" && str.slice(-1) == "}") str = JSON.parse(str);
    else if (str.slice(0, 1) == '"' && str.slice(-1) == '"') str = str.slice(1, -1);
    return str;
};
const displayTextWidth = async (text, font)=>{
    let canvas = displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement("canvas"));
    let context = canvas.getContext("2d");
    context.font = font;
    let metrics = context.measureText(text);
    return metrics.width;
};
const selDBFields = async (db = objDB, optFirst = "", IncludeSysFields = false)=>{
    //GET A SET OF ALL THE FIELD NAMES, CHECKING EVERY ROW.
    let setFields = new Set([]);
    for (let Each of objDB.rows){
        for (let KeyName of Object.keys(Each))try {
            setFields.add(KeyName);
        } catch  {}
    }
    let arrFld = Array.from(setFields);
    arrFld.sort();
    //REMOVE SYS FIELDS IF REQUESTED
    if (!IncludeSysFields) {
        var i1 = arrFld.length;
        while(i1--)if (arrFld[i1].slice(0, 1) == `_`) arrFld.splice(i1, 1);
    }
    //CREATE THE SELECT ELEMENT
    let SelOut = document.createElement(`select`);
    //IF THERE IS TO BE A SPECIAL FIRST 'TITLE' OPTION, WITH NO VALUE
    if (optFirst != "") {
        let opt = document.createElement(`option`);
        opt.innerHTML = optFirst;
        opt.value = "";
        SelOut.appendChild(opt);
    }
    //ADD ALL THE FIELDS TO THE SELECT ELEMENT
    for (Each of arrFld){
        let opt = document.createElement(`option`);
        opt.value = Each;
        opt.innerHTML = Each;
        SelOut.appendChild(opt);
    }
    return SelOut;
};
const ValInArr = async (arrObj, Key)=>{
    console.log(arrObj);
    for (let Ob of arrObj){
        if (Object.keys(Ob)[0] == Key) return Ob[Object.keys(Ob)[0]];
    }
    return "";
};
const arrOfObjSort = async (arr, key, asc = true)=>{
    //CHECK IF THIS KEY IS NUMERIC OR A STRING. ALSO LOOK FOR UNDEFINED
    let Numeric = true;
    for (let Each of arr){
        if (typeof Each[key] != "undefined") {
            if (isNaN(Each[key])) {
                Numeric = false;
                break;
            }
        }
    }
    if (Numeric && asc) arr.sort((a, b)=>{
        if (typeof a[key] == "undefined") return -1;
        if (typeof b[key] == "undefined") return 1;
        return a[key] - b[key];
    });
    else if (Numeric && !asc) arr.sort((a, b)=>{
        if (typeof a[key] == "undefined") return 1;
        if (typeof b[key] == "undefined") return -1;
        return b[key] - a[key];
    });
    else if (asc) arr.sort((a, b)=>{
        if (typeof a[key] == "undefined") return 1;
        if (typeof b[key] == "undefined") return -1;
        let fa = a[key].toLowerCase(), fb = b[key].toLowerCase();
        if (fa < fb) return -1;
        if (fa > fb) return 1;
        return 0;
    });
    else arr.sort((a, b)=>{
        if (typeof a[key] == "undefined") return -1;
        if (typeof b[key] == "undefined") return 1;
        let fa = a[key].toLowerCase(), fb = b[key].toLowerCase();
        if (fa > fb) return -1;
        if (fa < fb) return 1;
        return 0;
    });
    return arr;
};
function basex(ALPHABET) {
    if (ALPHABET.length >= 255) throw new TypeError("Alphabet too long");
    var BASE_MAP = new Uint8Array(256);
    for(var j = 0; j < BASE_MAP.length; j++)BASE_MAP[j] = 255;
    for(var i1 = 0; i1 < ALPHABET.length; i1++){
        var x = ALPHABET.charAt(i1);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) throw new TypeError(x + " is ambiguous");
        BASE_MAP[xc] = i1;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        if (source instanceof Uint8Array) ;
        else if (ArrayBuffer.isView(source)) source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        else if (Array.isArray(source)) source = Uint8Array.from(source);
        if (!(source instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (source.length === 0) return "";
        // Skip & count leading zeroes.
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            var i1 = 0;
            for(var it1 = size - 1; (carry !== 0 || i1 < length) && it1 !== -1; it1--, i1++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length = i1;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        var it2 = size - length;
        while(it2 !== size && b58[it2] === 0)it2++;
        // Translate the result into a string.
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2)str += ALPHABET.charAt(b58[it2]);
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== "string") throw new TypeError("Expected String");
        if (source.length === 0) return new Uint8Array();
        var psz = 0;
        // Skip and count leading '1's.
        var zeroes = 0;
        var length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        var size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        var b256 = new Uint8Array(size);
        // Process the characters.
        while(source[psz]){
            // Decode character
            var carry = BASE_MAP[source.charCodeAt(psz)];
            // Invalid character
            if (carry === 255) return;
            var i1 = 0;
            for(var it3 = size - 1; (carry !== 0 || i1 < length) && it3 !== -1; it3--, i1++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length = i1;
            psz++;
        }
        // Skip leading zeroes in b256.
        var it4 = size - length;
        while(it4 !== size && b256[it4] === 0)it4++;
        var vch = new Uint8Array(zeroes + (size - it4));
        var j = zeroes;
        while(it4 !== size)vch[j++] = b256[it4++];
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) return buffer;
        throw new Error("Non-base" + BASE + " character");
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
    };
}
const BASE02 = `01`;
const BASE06 = `123456`;
const BASE08 = `01234567`;
const BASE10 = `0123456789`;
const BASE16 = `0123456789abcdef`;
const BASE58 = `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`;
// No 0, I, O, l
const BASE64 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;
const bs02 = basex(BASE02);
const bs06 = basex(BASE06);
const bs08 = basex(BASE08);
const bs10 = basex(BASE10);
const bs16 = basex(BASE16);
const bs58 = basex(BASE58);
const bs64 = basex(BASE64);
const BaseEncodeDecode = async (Val, Base, Enc = true)=>{
    //ENCODE
    if (Enc) switch(Base){
        case `bs02`:
            return bs02.encode(Val);
        case `bs06`:
            return bs06.encode(Val);
        case `bs08`:
            return bs08.encode(Val);
        case `bs10`:
            return bs10.encode(Val);
        case `bs16`:
            return bs16.encode(Val);
        case `bs58`:
            return bs58.encode(Val);
        case `bs64`:
            return bs64.encode(Val);
        case `utf8`:
            let Dec = new TextDecoder("utf-8");
            return Dec.decode(Val);
    }
    else switch(Base){
        case `bs02`:
            return bs02.decode(Val);
        case `bs06`:
            return bs06.decode(Val);
        case `bs08`:
            return bs08.decode(Val);
        case `bs10`:
            return bs10.decode(Val);
        case `bs16`:
            return bs16.decode(Val);
        case `bs58`:
            return bs58.decode(Val);
        case `bs64`:
            return bs64.decode(Val);
        case `utf8`:
            let Enc1 = new TextEncoder();
            return Enc1.encode(Val);
    }
};
const objReadJSONFile = async (docPath)=>{
    const data = await fs.promises.readFile(docPath, "utf8");
    return JSON.parse(data);
};
const objWriteJSONFile = async (docPath, objData)=>{
    await fs.promises.writeFile(docPath, JSON.stringify(objData, null, 2));
};
const jsonFolderDir = `/json/`;
const jsonDefaultDB = {
    "format": {
        "hash_algo": "sha-256",
        "hash_decoding": "utf8",
        "hash_encoding": "bs64",
        "encryption_algo": "aes-cgm",
        "encryption_decoding": "utf8",
        "encryption_encoding": "bs64"
    },
    "owner_digest": "",
    "rows": []
};
const arrDBs = async ()=>{
    const response = await fetch(`/json_db/directory.json`);
    return await response.json();
};
const objLoadDB = async (dbName = dbFilename.split(`.`)[0])=>{
    //GET THE LIST OF FILES SO WE CAN FIND THE dbFilename THAT MATCHES dbName
    arrDB = await arrDBs();
    arrDB.sort();
    for (Each of arrDB)if (Each.name.split(`.`)[0] == dbName && Each.isFile) dbFilename = Each.name;
    // console.log("dbFilename", dbFilename)
    const response = await fetch(`${jsonFolderDir}${dbFilename}`);
    objDB = await response.json();
    objDB = await objDecryptedJSON(objDB);
    // console.log("objDB", objDB)
    return [
        objDB,
        dbFilename
    ];
};
const numMax_id = async (db = DB)=>{
    let MaxNum = 0;
    for (let Row of db.rows){
        if (!isNaN(Row._id)) {
            if (Row._id > MaxNum) MaxNum = Row._id;
        }
    }
    return Number(MaxNum);
};
const RowOf_id = (_id)=>{
    let i1 = objDB.rows.length;
    while(i1--){
        if (objDB.rows[i1]._id == _id) return i1;
    }
    return -1;
};
const LoadFields = async ()=>{
    //GET ALL THE FIELD NAMES
    let setFields = new Set([]);
    let setColNames = new Set([
        "Del"
    ]);
    for (let Each of objDB.rows){
        for (let KeyName of Object.keys(Each))try {
            setFields.add(KeyName);
            setColNames.add(KeyName);
        } catch  {}
    }
    arrFields = Array.from(setFields);
    arrColNames = Array.from(setColNames);
    for (Field of arrFields)objFieldWidth[Field] = 0;
    let Len = 0;
    for (Row of objDB.rows)for (Field of arrFields){
        Len = typeof Row[Field] != "undefined" && Row[Field] !== null ? Row[Field].toString().length : 9;
        if (objFieldWidth[Field] < Len) objFieldWidth[Field] = Len;
    }
};
const DelDB_id = async (_id)=>{
    let i1 = objDB.rows.length;
    while(i1--)// console.log(i,_id, objDB.rows[i]._id)
    if (objDB.rows[i1]._id == _id) objDB.rows.splice(i1, 1);
};
const SaveDB = async (db = objDB, CurFilename = dbFilename)=>{
    // console.log("SaveDB",db.rows)
    // console.log(db)
    // console.log("CurFilename", CurFilename)
    arrFilename = CurFilename.split(`.`);
    _rev_old = arrFilename[1] + `.` + arrFilename[2];
    // CHECK FOR DUPLICATE ROW _ID'S
    let arrRowIDs = [];
    for (let R of db.rows)arrRowIDs.push(R._id);
    // console.log("array of ids", arrRowIDs)
    setRowIDs = new Set(arrRowIDs);
    if (arrRowIDs.length != setRowIDs.size) {
        console.log("Can't save DB. Duplicate _id in the rows");
        return;
    }
    // Encrypt the file. Use JSON so you don't reference objDB
    objDBEncr = JSON.parse(JSON.stringify(db));
    objDBEncr = await objEncryptedJSON(objDBEncr);
    // CREATE A _rev FOR THE DB 
    // INTEGER - SHA256(of rows)
    _rev = await CryptoSubtleHash(objDBEncr.rows, `SHA-256`, `bs58`);
    let NewFilename = `${arrFilename[0]}.${Number(arrFilename[1]) + 1}.${_rev}.json`;
    console.log(`_rev_old`, _rev_old);
    console.log(`NewFilename`, NewFilename);
    let FetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objDBEncr)
    };
    // let PutURL = jsonDir + DB 
    let PutURL = `${jsonDir}${NewFilename}?_rev=${_rev_old}`;
    const response = await fetch(PutURL, FetchOptions);
    let Res = await response.json();
    console.log(`Res`, Res);
    dbFilename = NewFilename;
    console.log(dbFilename);
    return NewFilename;
};
const SaveNewDB = async (fileName, objNewDB)=>{
    // console.log("SaveNewDB")
    let PutURL = jsonDir + fileName;
    // Encrypt the file 
    objNewDB = await objEncryptedJSON(objNewDB);
    let FetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objNewDB)
    };
    const response = await fetch(PutURL, FetchOptions);
    let Res = await response.json();
};
const objDecryptedJSON = async (objToDecrypt)=>{
    // console.log(objToDecrypt)
    // DECRYPT THE ROWS
    if (objToDecrypt.format.encryption_algo == "aes-cgm") {
        strDecrypted = await aesGcmDecrypt(objToDecrypt.rows, Password);
        objToDecrypt.rows = JSON.parse(strDecrypted);
    }
    return objToDecrypt;
};
const objEncryptedJSON = async (objToEncrypt)=>{
    let objOut = {};
    if (objToEncrypt.format.encryption_algo == "aes-cgm") // console.log('Encrypt', JSON.stringify(objToEncrypt.rows))
    objToEncrypt.rows = await aesGcmEncrypt(JSON.stringify(objToEncrypt.rows), Password);
    return objToEncrypt;
};
const DbToCsv = async ()=>{
    let CSV = "";
    //GET THE FIELD HEADERS
    for (Field of arrFields)CSV += `"${Field}"\t`;
    CSV = CSV.slice(0, -1) + `\r\n`;
    //GET THE BODY
    for (Each of objDB.rows){
        for (Field of arrFields)switch(typeof Each[Field]){
            case `boolean`:
                CSV += `${Each[Field]}\t`;
                break;
            case `object`:
                CSV += `${JSON.stringify(Each[Field])}\t`;
                break;
            case `undefined`:
                CSV += `""\t`;
                break;
            case ``:
                CSV += `""\t`;
                break;
            default:
                CSV += `"${Each[Field]}"\t`;
        }
        CSV = CSV.slice(0, -1) + `\r\n`;
    }
    return CSV;
};
const CsvToArr = async (CSV)=>{
    let arrTmp = [];
    let arrFld = [];
    let arrCSV = [];
    let strTmp = "";
    // let CSV = document.getElementById(CsvData).value
    // console.log(CSV)
    arrCSV = CSV.split(`\n`);
    arrFld = arrCSV[0].split(`\t`);
    arrCSV.splice(0, 1);
    arrCSV.pop() // The last row turns out to be empty so pop it.
    ;
    console.log(arrCSV);
    console.log(arrCSV.length);
    for (Row of arrCSV){
        strTmp = `{`;
        for(i = 0; i < arrFld.length; i++)strTmp += `${arrFld[i]}:${Row.split(`\t`)[i]},`;
        strTmp = strTmp.slice(0, -1) + `}`;
        console.log(strTmp);
        console.log(JSON.parse(strTmp));
        arrTmp.push(JSON.parse(strTmp));
    }
    console.log(arrTmp);
    return arrTmp;
};
const objAddPair = async (objIn, Key, Val)=>{
    // console.log("AddPair-in", Key, Val, typeof Val)
    Val = Val.trim();
    //CONVERT FROM STRING TO ITS PROPER TYPE
    if (typeof Val == "undefined" || Val == "") Val = "";
    else if (!isNaN(Val)) Val = parseFloat(Val);
    else if (Val == "true") Val = true;
    else if (Val == "false") Val = false;
    else if (Val.slice(0, 1) == "[" && Val.slice(-1) == "]") Val = JSON.parse(Val);
    else if (Val.slice(0, 1) == '"' && Val.slice(-1) == '"') Val = Val.slice(1, -1);
    // console.log("AddPair-out", Key, Val, typeof Val)
    objIn[Key] = Val;
    // console.log("AddPair-out obj",objIn[Key])
    return objIn;
};
const svgIcon = async (Type)=>{
    // DownArrow, UpArrow, DownCarrot, RightCarrot, X, Play, Pause, Plus,
    // Hamburger, HamburgerV, Circle
    let xmlns = "http://www.w3.org/2000/svg";
    const svgEle = document.createElementNS(xmlns, "svg");
    svgEle.setAttributeNS(null, "viewBox", "0 0 10 10");
    svgEle.setAttributeNS(null, "stroke-width", 2);
    svgEle.setAttributeNS(null, "stroke-linecap", `round`);
    svgEle.setAttributeNS(null, "stroke-linejoin", `round`);
    svgEle.setAttributeNS(null, "fill-opacity", 0);
    if (Type == `Plus`) {
        const svgLine1 = document.createElementNS(xmlns, "line");
        svgLine1.setAttributeNS(null, "x1", 5);
        svgLine1.setAttributeNS(null, "y1", 2);
        svgLine1.setAttributeNS(null, "x2", 5);
        svgLine1.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine1);
        const svgLine2 = document.createElementNS(xmlns, "line");
        svgLine2.setAttributeNS(null, "x1", 2);
        svgLine2.setAttributeNS(null, "y1", 5);
        svgLine2.setAttributeNS(null, "x2", 8);
        svgLine2.setAttributeNS(null, "y2", 5);
        svgEle.appendChild(svgLine2);
        return svgEle;
    }
    if (Type == `X`) {
        const svgLine1 = document.createElementNS(xmlns, "line");
        svgLine1.setAttributeNS(null, "x1", 2);
        svgLine1.setAttributeNS(null, "y1", 2);
        svgLine1.setAttributeNS(null, "x2", 8);
        svgLine1.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine1);
        const svgLine2 = document.createElementNS(xmlns, "line");
        svgLine2.setAttributeNS(null, "x1", 8);
        svgLine2.setAttributeNS(null, "y1", 2);
        svgLine2.setAttributeNS(null, "x2", 2);
        svgLine2.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine2);
        return svgEle;
    }
    if (Type == `Minus`) {
        const svgLine2 = document.createElementNS(xmlns, "line");
        svgLine2.setAttributeNS(null, "x1", 2);
        svgLine2.setAttributeNS(null, "y1", 5);
        svgLine2.setAttributeNS(null, "x2", 8);
        svgLine2.setAttributeNS(null, "y2", 5);
        svgEle.appendChild(svgLine2);
        return svgEle;
    }
    if (Type == `Play`) {
        const svgPolygon = document.createElementNS(xmlns, "polygon");
        svgPolygon.setAttributeNS(null, "points", points = "2,8 8,5 2,2 ");
        svgEle.appendChild(svgPolygon);
        return svgEle;
    }
    if (Type == `1`) {
        const svgLine1 = document.createElementNS(xmlns, "line");
        svgLine1.setAttributeNS(null, "x1", 5);
        svgLine1.setAttributeNS(null, "y1", 2);
        svgLine1.setAttributeNS(null, "x2", 5);
        svgLine1.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine1);
        return svgEle;
    }
    if (Type == `2`) {
        const svgLine1 = document.createElementNS(xmlns, "line");
        svgLine1.setAttributeNS(null, "x1", 3);
        svgLine1.setAttributeNS(null, "y1", 2);
        svgLine1.setAttributeNS(null, "x2", 3);
        svgLine1.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine1);
        const svgLine2 = document.createElementNS(xmlns, "line");
        svgLine2.setAttributeNS(null, "x1", 7);
        svgLine2.setAttributeNS(null, "y1", 2);
        svgLine2.setAttributeNS(null, "x2", 7);
        svgLine2.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine2);
        return svgEle;
    }
    if (Type == `3`) {
        const svgLine1 = document.createElementNS(xmlns, "line");
        svgLine1.setAttributeNS(null, "x1", 2);
        svgLine1.setAttributeNS(null, "y1", 2);
        svgLine1.setAttributeNS(null, "x2", 2);
        svgLine1.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine1);
        const svgLine2 = document.createElementNS(xmlns, "line");
        svgLine2.setAttributeNS(null, "x1", 5);
        svgLine2.setAttributeNS(null, "y1", 2);
        svgLine2.setAttributeNS(null, "x2", 5);
        svgLine2.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine2);
        const svgLine3 = document.createElementNS(xmlns, "line");
        svgLine3.setAttributeNS(null, "x1", 8);
        svgLine3.setAttributeNS(null, "y1", 2);
        svgLine3.setAttributeNS(null, "x2", 8);
        svgLine3.setAttributeNS(null, "y2", 8);
        svgEle.appendChild(svgLine3);
        return svgEle;
    }
    if (Type == `carrot_down`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", "M2,2 L5,7 L8,2");
        svgEle.appendChild(svgPath);
        return svgEle;
    }
    if (Type == `carrot_right`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", "M2,2 L8,5 L2,8");
        svgEle.appendChild(svgPath);
        return svgEle;
    }
    if (Type == `carrot_up`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", "M2,8 L5,2 L8,8");
        svgEle.appendChild(svgPath);
        return svgEle;
    }
    if (Type == `carrot_left`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", "M8,2 L2,5 L8,8");
        svgEle.appendChild(svgPath);
        return svgEle;
    }
    if (Type == `pencil`) {
        const svgPolygon = document.createElementNS(xmlns, "polygon");
        svgPolygon.setAttributeNS(null, "points", points = "2,8 2,6 6,2 8,4 4,8");
        svgEle.appendChild(svgPolygon);
        return svgEle;
    }
    if (Type == `check`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", points = "M2,6 L4,8 L8,2");
        svgEle.appendChild(svgPath);
        return svgEle;
    }
    if (Type == `arrow_up_right`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", points = "M2,8 L8,2 L5,2 L8,2 L8,5");
        svgEle.appendChild(svgPath);
        return svgEle;
    }
    if (Type == `box`) {
        const svgPath = document.createElementNS(xmlns, "path");
        svgPath.setAttributeNS(null, "d", points = "M2,2 L8,2 L8,8 L2,8 L2,2 L2,2 L8,2 L8,8 L2,8 L2,2");
        svgEle.appendChild(svgPath);
        return svgEle;
    }
};
const htmlFromObjSVG = async (objSVG)=>{
    let htmlOut = `<svg `;
    // console.log(objSVG.attributes)
    for(let key in objSVG.attributes)htmlOut += `${key}="${objSVG.attributes[key]}" `;
    htmlOut += xmlSVGTagHeader;
    htmlOut += `> \n`;
    for (let Ele of objSVG.elements){
        htmlOut += `<${Ele._element_type} `;
        // console.log("Ele", Ele)
        for(let key in Ele)if (key.slice(0, 1) != "_") htmlOut += `${key}="${Ele[key]}" `;
        htmlOut += `/> \n`;
    }
    htmlOut += `</svg> `;
    return htmlOut;
};
const objHashtags = async (db = DB)=>{
    let arrOut = [];
    let objOut = {};
    for (let Row of db.rows)arrOut = arrOut.concat(Row.hashtags);
    arrOut = [
        ...new Set(arrOut)
    ];
    arrOut.sort();
    for (let H of arrOut)objOut[H] = {
        "Enabled": false
    };
    return objOut;
};
const ToggleHashtags = async (hashtag, row, db = DB)=>{
    if (hashtag.slice(0, 1) != `#`) hashtag = `#${hashtag}`;
    //REMOVE HASHTAG
    if (db.rows[row].hashtags.includes(hashtag)) {
        var i1 = db.rows[row].hashtags.length;
        while(i1--)if (db.rows[row].hashtags[i1] == hashtag) db.rows[row].hashtags.splice(i1, 1);
    } else db.rows[row].hashtags.push(hashtag);
};
const objNostrEvents = [
    {
        "0": {
            name: "Metadata"
        }
    },
    {
        "1": {
            name: "Short Text Note"
        }
    },
    {
        "2": {
            name: "Recommend Relay"
        }
    },
    {
        "3": {
            name: "Contacts"
        }
    },
    {
        "4": {
            name: "Encrypted Direct Messages"
        }
    },
    {
        "5": {
            name: "Event Deletion"
        }
    },
    {
        "6": {
            name: "Repost"
        }
    },
    {
        "7": {
            name: "Reaction"
        }
    },
    {
        "8": {
            name: "Badge Award"
        }
    },
    {
        "16": {
            name: "Generic Repost"
        }
    },
    {
        "40": {
            name: "Channel Creation"
        }
    },
    {
        "41": {
            name: "Channel Metadata"
        }
    },
    {
        "42": {
            name: "Channel Message"
        }
    },
    {
        "43": {
            name: "Channel Hide Message"
        }
    },
    {
        "44": {
            name: "Channel Mute User"
        }
    },
    {
        "1063": {
            name: "File Metadata"
        }
    },
    {
        "1311": {
            name: "Live Chat Message"
        }
    },
    {
        "1984": {
            name: "Reporting"
        }
    },
    {
        "1985": {
            name: "Label"
        }
    },
    {
        "4550": {
            name: "Community Post Approval"
        }
    },
    {
        "9734": {
            name: "Zap Request"
        }
    },
    {
        "9735": {
            name: "Zap"
        }
    },
    {
        "10000": {
            name: "Mute List"
        }
    },
    {
        "10001": {
            name: "Pin List"
        }
    },
    {
        "10002": {
            name: "Relay List Metadata"
        }
    },
    {
        "13194": {
            name: "Wallet Info"
        }
    },
    {
        "22242": {
            name: "Client Authentication"
        }
    },
    {
        "23194": {
            name: "Wallet Request"
        }
    },
    {
        "23195": {
            name: "Wallet Response"
        }
    },
    {
        "24133": {
            name: "Nostr Connect"
        }
    },
    {
        "27235": {
            name: "HTTP Auth"
        }
    },
    {
        "30000": {
            name: "Categorized People List"
        }
    },
    {
        "30001": {
            name: "Categorized Bookmark List"
        }
    },
    {
        "30008": {
            name: "Profile Badges"
        }
    },
    {
        "30009": {
            name: "Badge Definition"
        }
    },
    {
        "30017": {
            name: "Create or update a stall"
        }
    },
    {
        "30018": {
            name: "Create or update a product"
        }
    },
    {
        "30023": {
            name: "Long-form Content"
        }
    },
    {
        "30024": {
            name: "Draft Long-form Content"
        }
    },
    {
        "30078": {
            name: "Application-specific Data"
        }
    },
    {
        "30311": {
            name: "Live Event"
        }
    },
    {
        "30402": {
            name: "Classified Listing"
        }
    },
    {
        "30403": {
            name: "Draft Classified Listing"
        }
    },
    {
        "31922": {
            name: "Date-Based Calendar Event"
        }
    },
    {
        "31923": {
            name: "Time-Based Calendar Event"
        }
    },
    {
        "31924": {
            name: "Calendar"
        }
    },
    {
        "31925": {
            name: "Calendar Event RSVP"
        }
    },
    {
        "31989": {
            name: "Handler recommendation"
        }
    },
    {
        "31990": {
            name: "Handler information"
        }
    },
    {
        "34550": {
            name: "Community Definition"
        }
    }
];
const arrNostrEvents = [
    [
        0,
        "Metadata"
    ],
    [
        1,
        "Short Text Note"
    ],
    [
        2,
        "Recommend Relay"
    ],
    [
        3,
        "Contacts"
    ],
    [
        4,
        "Encrypted Direct Messages"
    ],
    [
        5,
        "Event Deletion"
    ],
    [
        6,
        "Repost"
    ],
    [
        7,
        "Reaction"
    ],
    [
        8,
        "Badge Award"
    ],
    [
        16,
        "Generic Repost"
    ],
    [
        40,
        "Channel Creation"
    ],
    [
        41,
        "Channel Metadata"
    ],
    [
        42,
        "Channel Message"
    ],
    [
        43,
        "Channel Hide Message"
    ],
    [
        44,
        "Channel Mute User"
    ],
    [
        1063,
        "File Metadata"
    ],
    [
        1311,
        "Live Chat Message"
    ],
    [
        1984,
        "Reporting"
    ],
    [
        1985,
        "Label"
    ],
    [
        4550,
        "Community Post Approval"
    ],
    [
        9734,
        "Zap Request"
    ],
    [
        9735,
        "Zap"
    ],
    [
        10000,
        "Mute List"
    ],
    [
        10001,
        "Pin List"
    ],
    [
        10002,
        "Relay List Metadata"
    ],
    [
        13194,
        "Wallet Info"
    ],
    [
        22242,
        "Client Authentication"
    ],
    [
        23194,
        "Wallet Request"
    ],
    [
        23195,
        "Wallet Response"
    ],
    [
        24133,
        "Nostr Connect"
    ],
    [
        27235,
        "HTTP Auth"
    ],
    [
        30000,
        "Categorized People List"
    ],
    [
        30001,
        "Categorized Bookmark List"
    ],
    [
        30008,
        "Profile Badges"
    ],
    [
        30009,
        "Badge Definition"
    ],
    [
        30017,
        "Create or update a stall"
    ],
    [
        30018,
        "Create or update a product"
    ],
    [
        30023,
        "Long-form Content"
    ],
    [
        30024,
        "Draft Long-form Content"
    ],
    [
        30078,
        "Application-specific Data"
    ],
    [
        30311,
        "Live Event"
    ],
    [
        30402,
        "Classified Listing"
    ],
    [
        30403,
        "Draft Classified Listing"
    ],
    [
        31922,
        "Date-Based Calendar Event"
    ],
    [
        31923,
        "Time-Based Calendar Event"
    ],
    [
        31924,
        "Calendar"
    ],
    [
        31925,
        "Calendar Event RSVP"
    ],
    [
        31989,
        "Handler recommendation"
    ],
    [
        31990,
        "Handler information"
    ],
    [
        34550,
        "Community Definition"
    ]
];
const arrNostrStandardizedTags = [
    [
        "e",
        "event id (hex)",
        [
            "relay URL",
            " marker"
        ]
    ],
    [
        "p",
        "pubkey (hex)",
        [
            "relay URL",
            " petname"
        ]
    ],
    [
        "a",
        "coordinates to an event",
        [
            "relay URL"
        ]
    ],
    [
        "d",
        "identifier",
        []
    ],
    [
        "alt",
        "Alt tag",
        []
    ],
    [
        "g",
        "geohash",
        []
    ],
    [
        "i",
        "identity",
        [
            "proof"
        ]
    ],
    [
        "k",
        "kind number (string)",
        []
    ],
    [
        "l",
        "label, label namespace",
        [
            "annotations"
        ]
    ],
    [
        "L",
        "label namespace",
        []
    ],
    [
        "r",
        "a reference (URL, etc)",
        [
            "petname"
        ]
    ],
    [
        "r",
        "relay url",
        [
            "marker"
        ]
    ],
    [
        "t",
        "hashtag",
        []
    ],
    [
        "amount",
        "millisatoshis, stringified",
        []
    ],
    [
        "bolt11",
        "bolt11 invoice",
        []
    ],
    [
        "challenge",
        "challenge string",
        []
    ],
    [
        "content-warning",
        "reason",
        []
    ],
    [
        "delegation",
        "pubkey, conditions, delegation token",
        []
    ],
    [
        "description",
        "badge description",
        []
    ],
    [
        "description",
        "invoice description",
        []
    ],
    [
        "emoji",
        "shortcode, image URL",
        []
    ],
    [
        "expiration",
        "unix timestamp (string)",
        []
    ],
    [
        "image",
        "image URL",
        [
            "dimensions in pixels"
        ]
    ],
    [
        "lnurl",
        "bech32 encoded lnurl",
        []
    ],
    [
        "location",
        "location string",
        []
    ],
    [
        "name",
        "badge name",
        []
    ],
    [
        "nonce",
        "random",
        []
    ],
    [
        "preimage",
        "hash of bolt11 invoice",
        []
    ],
    [
        "price",
        "price",
        [
            "currency",
            " frequency"
        ]
    ],
    [
        "proxy",
        "external ID",
        [
            "protocol"
        ]
    ],
    [
        "published_at",
        "unix timestamp (string)",
        []
    ],
    [
        "relay",
        "relay url",
        []
    ],
    [
        "relays",
        "relay list",
        []
    ],
    [
        "subject",
        "subject",
        []
    ],
    [
        "summary",
        "article summary",
        []
    ],
    [
        "thumb",
        "badge thumbnail",
        [
            "dimensions in pixels"
        ]
    ],
    [
        "title",
        "article title",
        []
    ],
    [
        "zap",
        "pubkey (hex), relay URL",
        [
            "weight"
        ]
    ]
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2k17G":[function(require,module,exports) {
/**
 * @fileoverview
 * - modified davidshimjs/qrcodejs library for use in node.js
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 *
 * @version 0.9.1 (2016-02-12)
 * @author davidshimjs, papnkukn
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 * @see <a href="https://github.com/davidshimjs/qrcodejs" target="_blank">https://github.com/davidshimjs/qrcodejs</a>
 */ //---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of 
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
function QR8bitByte(data) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = data;
    this.parsedData = [];
    // Added to support UTF-8 Characters
    for(var i = 0, l = this.data.length; i < l; i++){
        var byteArray = [];
        var code = this.data.charCodeAt(i);
        if (code > 0x10000) {
            byteArray[0] = 0xF0 | (code & 0x1C0000) >>> 18;
            byteArray[1] = 0x80 | (code & 0x3F000) >>> 12;
            byteArray[2] = 0x80 | (code & 0xFC0) >>> 6;
            byteArray[3] = 0x80 | code & 0x3F;
        } else if (code > 0x800) {
            byteArray[0] = 0xE0 | (code & 0xF000) >>> 12;
            byteArray[1] = 0x80 | (code & 0xFC0) >>> 6;
            byteArray[2] = 0x80 | code & 0x3F;
        } else if (code > 0x80) {
            byteArray[0] = 0xC0 | (code & 0x7C0) >>> 6;
            byteArray[1] = 0x80 | code & 0x3F;
        } else byteArray[0] = code;
        this.parsedData.push(byteArray);
    }
    this.parsedData = Array.prototype.concat.apply([], this.parsedData);
    if (this.parsedData.length != this.data.length) {
        this.parsedData.unshift(191);
        this.parsedData.unshift(187);
        this.parsedData.unshift(239);
    }
}
QR8bitByte.prototype = {
    getLength: function(buffer) {
        return this.parsedData.length;
    },
    write: function(buffer) {
        for(var i = 0, l = this.parsedData.length; i < l; i++)buffer.put(this.parsedData[i], 8);
    }
};
function QRCodeModel(typeNumber, errorCorrectLevel) {
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = [];
}
QRCodeModel.prototype = {
    addData: function(data) {
        var newData = new QR8bitByte(data);
        this.dataList.push(newData);
        this.dataCache = null;
    },
    isDark: function(row, col) {
        if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) throw new Error(row + "," + col);
        return this.modules[row][col];
    },
    getModuleCount: function() {
        return this.moduleCount;
    },
    make: function() {
        this.makeImpl(false, this.getBestMaskPattern());
    },
    makeImpl: function(test, maskPattern) {
        this.moduleCount = this.typeNumber * 4 + 17;
        this.modules = new Array(this.moduleCount);
        for(var row = 0; row < this.moduleCount; row++){
            this.modules[row] = new Array(this.moduleCount);
            for(var col = 0; col < this.moduleCount; col++)this.modules[row][col] = null;
        }
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(test, maskPattern);
        if (this.typeNumber >= 7) this.setupTypeNumber(test);
        if (this.dataCache == null) this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
        this.mapData(this.dataCache, maskPattern);
    },
    setupPositionProbePattern: function(row, col) {
        for(var r = -1; r <= 7; r++){
            if (row + r <= -1 || this.moduleCount <= row + r) continue;
            for(var c = -1; c <= 7; c++){
                if (col + c <= -1 || this.moduleCount <= col + c) continue;
                if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) this.modules[row + r][col + c] = true;
                else this.modules[row + r][col + c] = false;
            }
        }
    },
    getBestMaskPattern: function() {
        var minLostPoint = 0;
        var pattern = 0;
        for(var i = 0; i < 8; i++){
            this.makeImpl(true, i);
            var lostPoint = QRUtil.getLostPoint(this);
            if (i == 0 || minLostPoint > lostPoint) {
                minLostPoint = lostPoint;
                pattern = i;
            }
        }
        return pattern;
    },
    createMovieClip: function(target_mc, instance_name, depth) {
        var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
        var cs = 1;
        this.make();
        for(var row = 0; row < this.modules.length; row++){
            var y = row * cs;
            for(var col = 0; col < this.modules[row].length; col++){
                var x = col * cs;
                var dark = this.modules[row][col];
                if (dark) {
                    qr_mc.beginFill(0, 100);
                    qr_mc.moveTo(x, y);
                    qr_mc.lineTo(x + cs, y);
                    qr_mc.lineTo(x + cs, y + cs);
                    qr_mc.lineTo(x, y + cs);
                    qr_mc.endFill();
                }
            }
        }
        return qr_mc;
    },
    setupTimingPattern: function() {
        for(var r = 8; r < this.moduleCount - 8; r++){
            if (this.modules[r][6] != null) continue;
            this.modules[r][6] = r % 2 == 0;
        }
        for(var c = 8; c < this.moduleCount - 8; c++){
            if (this.modules[6][c] != null) continue;
            this.modules[6][c] = c % 2 == 0;
        }
    },
    setupPositionAdjustPattern: function() {
        var pos = QRUtil.getPatternPosition(this.typeNumber);
        for(var i = 0; i < pos.length; i++)for(var j = 0; j < pos.length; j++){
            var row = pos[i];
            var col = pos[j];
            if (this.modules[row][col] != null) continue;
            for(var r = -2; r <= 2; r++){
                for(var c = -2; c <= 2; c++)if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) this.modules[row + r][col + c] = true;
                else this.modules[row + r][col + c] = false;
            }
        }
    },
    setupTypeNumber: function(test) {
        var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
        for(var i = 0; i < 18; i++){
            var mod = !test && (bits >> i & 1) == 1;
            this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
        }
        for(var i = 0; i < 18; i++){
            var mod = !test && (bits >> i & 1) == 1;
            this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
        }
    },
    setupTypeInfo: function(test, maskPattern) {
        var data = this.errorCorrectLevel << 3 | maskPattern;
        var bits = QRUtil.getBCHTypeInfo(data);
        for(var i = 0; i < 15; i++){
            var mod = !test && (bits >> i & 1) == 1;
            if (i < 6) this.modules[i][8] = mod;
            else if (i < 8) this.modules[i + 1][8] = mod;
            else this.modules[this.moduleCount - 15 + i][8] = mod;
        }
        for(var i = 0; i < 15; i++){
            var mod = !test && (bits >> i & 1) == 1;
            if (i < 8) this.modules[8][this.moduleCount - i - 1] = mod;
            else if (i < 9) this.modules[8][15 - i - 1 + 1] = mod;
            else this.modules[8][15 - i - 1] = mod;
        }
        this.modules[this.moduleCount - 8][8] = !test;
    },
    mapData: function(data, maskPattern) {
        var inc = -1;
        var row = this.moduleCount - 1;
        var bitIndex = 7;
        var byteIndex = 0;
        for(var col = this.moduleCount - 1; col > 0; col -= 2){
            if (col == 6) col--;
            while(true){
                for(var c = 0; c < 2; c++)if (this.modules[row][col - c] == null) {
                    var dark = false;
                    if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                    var mask = QRUtil.getMask(maskPattern, row, col - c);
                    if (mask) dark = !dark;
                    this.modules[row][col - c] = dark;
                    bitIndex--;
                    if (bitIndex == -1) {
                        byteIndex++;
                        bitIndex = 7;
                    }
                }
                row += inc;
                if (row < 0 || this.moduleCount <= row) {
                    row -= inc;
                    inc = -inc;
                    break;
                }
            }
        }
    }
};
QRCodeModel.PAD0 = 0xEC;
QRCodeModel.PAD1 = 0x11;
QRCodeModel.createData = function(typeNumber, errorCorrectLevel, dataList) {
    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    var buffer = new QRBitBuffer();
    for(var i = 0; i < dataList.length; i++){
        var data = dataList[i];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
        data.write(buffer);
    }
    var totalDataCount = 0;
    for(var i = 0; i < rsBlocks.length; i++)totalDataCount += rsBlocks[i].dataCount;
    if (buffer.getLengthInBits() > totalDataCount * 8) throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) buffer.put(0, 4);
    while(buffer.getLengthInBits() % 8 != 0)buffer.putBit(false);
    while(true){
        if (buffer.getLengthInBits() >= totalDataCount * 8) break;
        buffer.put(QRCodeModel.PAD0, 8);
        if (buffer.getLengthInBits() >= totalDataCount * 8) break;
        buffer.put(QRCodeModel.PAD1, 8);
    }
    return QRCodeModel.createBytes(buffer, rsBlocks);
};
QRCodeModel.createBytes = function(buffer, rsBlocks) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for(var r = 0; r < rsBlocks.length; r++){
        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);
        for(var i = 0; i < dcdata[r].length; i++)dcdata[r][i] = 0xff & buffer.buffer[i + offset];
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for(var i = 0; i < ecdata[r].length; i++){
            var modIndex = i + modPoly.getLength() - ecdata[r].length;
            ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
    }
    var totalCodeCount = 0;
    for(var i = 0; i < rsBlocks.length; i++)totalCodeCount += rsBlocks[i].totalCount;
    var data = new Array(totalCodeCount);
    var index = 0;
    for(var i = 0; i < maxDcCount; i++){
        for(var r = 0; r < rsBlocks.length; r++)if (i < dcdata[r].length) data[index++] = dcdata[r][i];
    }
    for(var i = 0; i < maxEcCount; i++){
        for(var r = 0; r < rsBlocks.length; r++)if (i < ecdata[r].length) data[index++] = ecdata[r][i];
    }
    return data;
};
var QRMode = {
    MODE_NUMBER: 1,
    MODE_ALPHA_NUM: 2,
    MODE_8BIT_BYTE: 4,
    MODE_KANJI: 8
};
var QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
};
var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
var QRUtil = {
    PATTERN_POSITION_TABLE: [
        [],
        [
            6,
            18
        ],
        [
            6,
            22
        ],
        [
            6,
            26
        ],
        [
            6,
            30
        ],
        [
            6,
            34
        ],
        [
            6,
            22,
            38
        ],
        [
            6,
            24,
            42
        ],
        [
            6,
            26,
            46
        ],
        [
            6,
            28,
            50
        ],
        [
            6,
            30,
            54
        ],
        [
            6,
            32,
            58
        ],
        [
            6,
            34,
            62
        ],
        [
            6,
            26,
            46,
            66
        ],
        [
            6,
            26,
            48,
            70
        ],
        [
            6,
            26,
            50,
            74
        ],
        [
            6,
            30,
            54,
            78
        ],
        [
            6,
            30,
            56,
            82
        ],
        [
            6,
            30,
            58,
            86
        ],
        [
            6,
            34,
            62,
            90
        ],
        [
            6,
            28,
            50,
            72,
            94
        ],
        [
            6,
            26,
            50,
            74,
            98
        ],
        [
            6,
            30,
            54,
            78,
            102
        ],
        [
            6,
            28,
            54,
            80,
            106
        ],
        [
            6,
            32,
            58,
            84,
            110
        ],
        [
            6,
            30,
            58,
            86,
            114
        ],
        [
            6,
            34,
            62,
            90,
            118
        ],
        [
            6,
            26,
            50,
            74,
            98,
            122
        ],
        [
            6,
            30,
            54,
            78,
            102,
            126
        ],
        [
            6,
            26,
            52,
            78,
            104,
            130
        ],
        [
            6,
            30,
            56,
            82,
            108,
            134
        ],
        [
            6,
            34,
            60,
            86,
            112,
            138
        ],
        [
            6,
            30,
            58,
            86,
            114,
            142
        ],
        [
            6,
            34,
            62,
            90,
            118,
            146
        ],
        [
            6,
            30,
            54,
            78,
            102,
            126,
            150
        ],
        [
            6,
            24,
            50,
            76,
            102,
            128,
            154
        ],
        [
            6,
            28,
            54,
            80,
            106,
            132,
            158
        ],
        [
            6,
            32,
            58,
            84,
            110,
            136,
            162
        ],
        [
            6,
            26,
            54,
            82,
            110,
            138,
            166
        ],
        [
            6,
            30,
            58,
            86,
            114,
            142,
            170
        ]
    ],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function(data) {
        var d = data << 10;
        while(QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0)d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
        return (data << 10 | d) ^ QRUtil.G15_MASK;
    },
    getBCHTypeNumber: function(data) {
        var d = data << 12;
        while(QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0)d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
        return data << 12 | d;
    },
    getBCHDigit: function(data) {
        var digit = 0;
        while(data != 0){
            digit++;
            data >>>= 1;
        }
        return digit;
    },
    getPatternPosition: function(typeNumber) {
        return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    getMask: function(maskPattern, i, j) {
        switch(maskPattern){
            case QRMaskPattern.PATTERN000:
                return (i + j) % 2 == 0;
            case QRMaskPattern.PATTERN001:
                return i % 2 == 0;
            case QRMaskPattern.PATTERN010:
                return j % 3 == 0;
            case QRMaskPattern.PATTERN011:
                return (i + j) % 3 == 0;
            case QRMaskPattern.PATTERN100:
                return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
            case QRMaskPattern.PATTERN101:
                return i * j % 2 + i * j % 3 == 0;
            case QRMaskPattern.PATTERN110:
                return (i * j % 2 + i * j % 3) % 2 == 0;
            case QRMaskPattern.PATTERN111:
                return (i * j % 3 + (i + j) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + maskPattern);
        }
    },
    getErrorCorrectPolynomial: function(errorCorrectLength) {
        var a = new QRPolynomial([
            1
        ], 0);
        for(var i = 0; i < errorCorrectLength; i++)a = a.multiply(new QRPolynomial([
            1,
            QRMath.gexp(i)
        ], 0));
        return a;
    },
    getLengthInBits: function(mode, type) {
        if (1 <= type && type < 10) switch(mode){
            case QRMode.MODE_NUMBER:
                return 10;
            case QRMode.MODE_ALPHA_NUM:
                return 9;
            case QRMode.MODE_8BIT_BYTE:
                return 8;
            case QRMode.MODE_KANJI:
                return 8;
            default:
                throw new Error("mode:" + mode);
        }
        else if (type < 27) switch(mode){
            case QRMode.MODE_NUMBER:
                return 12;
            case QRMode.MODE_ALPHA_NUM:
                return 11;
            case QRMode.MODE_8BIT_BYTE:
                return 16;
            case QRMode.MODE_KANJI:
                return 10;
            default:
                throw new Error("mode:" + mode);
        }
        else if (type < 41) switch(mode){
            case QRMode.MODE_NUMBER:
                return 14;
            case QRMode.MODE_ALPHA_NUM:
                return 13;
            case QRMode.MODE_8BIT_BYTE:
                return 16;
            case QRMode.MODE_KANJI:
                return 12;
            default:
                throw new Error("mode:" + mode);
        }
        else throw new Error("type:" + type);
    },
    getLostPoint: function(qrCode) {
        var moduleCount = qrCode.getModuleCount();
        var lostPoint = 0;
        for(var row = 0; row < moduleCount; row++)for(var col = 0; col < moduleCount; col++){
            var sameCount = 0;
            var dark = qrCode.isDark(row, col);
            for(var r = -1; r <= 1; r++){
                if (row + r < 0 || moduleCount <= row + r) continue;
                for(var c = -1; c <= 1; c++){
                    if (col + c < 0 || moduleCount <= col + c) continue;
                    if (r == 0 && c == 0) continue;
                    if (dark == qrCode.isDark(row + r, col + c)) sameCount++;
                }
            }
            if (sameCount > 5) lostPoint += 3 + sameCount - 5;
        }
        for(var row = 0; row < moduleCount - 1; row++)for(var col = 0; col < moduleCount - 1; col++){
            var count = 0;
            if (qrCode.isDark(row, col)) count++;
            if (qrCode.isDark(row + 1, col)) count++;
            if (qrCode.isDark(row, col + 1)) count++;
            if (qrCode.isDark(row + 1, col + 1)) count++;
            if (count == 0 || count == 4) lostPoint += 3;
        }
        for(var row = 0; row < moduleCount; row++){
            for(var col = 0; col < moduleCount - 6; col++)if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) lostPoint += 40;
        }
        for(var col = 0; col < moduleCount; col++){
            for(var row = 0; row < moduleCount - 6; row++)if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) lostPoint += 40;
        }
        var darkCount = 0;
        for(var col = 0; col < moduleCount; col++){
            for(var row = 0; row < moduleCount; row++)if (qrCode.isDark(row, col)) darkCount++;
        }
        var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
        lostPoint += ratio * 10;
        return lostPoint;
    }
};
var QRMath = {
    glog: function(n) {
        if (n < 1) throw new Error("glog(" + n + ")");
        return QRMath.LOG_TABLE[n];
    },
    gexp: function(n) {
        while(n < 0)n += 255;
        while(n >= 256)n -= 255;
        return QRMath.EXP_TABLE[n];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
};
for(var i = 0; i < 8; i++)QRMath.EXP_TABLE[i] = 1 << i;
for(var i = 8; i < 256; i++)QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
for(var i = 0; i < 255; i++)QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
function QRPolynomial(num, shift) {
    if (num.length == undefined) throw new Error(num.length + "/" + shift);
    var offset = 0;
    while(offset < num.length && num[offset] == 0)offset++;
    this.num = new Array(num.length - offset + shift);
    for(var i = 0; i < num.length - offset; i++)this.num[i] = num[i + offset];
}
QRPolynomial.prototype = {
    get: function(index) {
        return this.num[index];
    },
    getLength: function() {
        return this.num.length;
    },
    multiply: function(e) {
        var num = new Array(this.getLength() + e.getLength() - 1);
        for(var i = 0; i < this.getLength(); i++)for(var j = 0; j < e.getLength(); j++)num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
        return new QRPolynomial(num, 0);
    },
    mod: function(e) {
        if (this.getLength() - e.getLength() < 0) return this;
        var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
        var num = new Array(this.getLength());
        for(var i = 0; i < this.getLength(); i++)num[i] = this.get(i);
        for(var i = 0; i < e.getLength(); i++)num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
        return new QRPolynomial(num, 0).mod(e);
    }
};
function QRRSBlock(totalCount, dataCount) {
    this.totalCount = totalCount;
    this.dataCount = dataCount;
}
QRRSBlock.RS_BLOCK_TABLE = [
    [
        1,
        26,
        19
    ],
    [
        1,
        26,
        16
    ],
    [
        1,
        26,
        13
    ],
    [
        1,
        26,
        9
    ],
    [
        1,
        44,
        34
    ],
    [
        1,
        44,
        28
    ],
    [
        1,
        44,
        22
    ],
    [
        1,
        44,
        16
    ],
    [
        1,
        70,
        55
    ],
    [
        1,
        70,
        44
    ],
    [
        2,
        35,
        17
    ],
    [
        2,
        35,
        13
    ],
    [
        1,
        100,
        80
    ],
    [
        2,
        50,
        32
    ],
    [
        2,
        50,
        24
    ],
    [
        4,
        25,
        9
    ],
    [
        1,
        134,
        108
    ],
    [
        2,
        67,
        43
    ],
    [
        2,
        33,
        15,
        2,
        34,
        16
    ],
    [
        2,
        33,
        11,
        2,
        34,
        12
    ],
    [
        2,
        86,
        68
    ],
    [
        4,
        43,
        27
    ],
    [
        4,
        43,
        19
    ],
    [
        4,
        43,
        15
    ],
    [
        2,
        98,
        78
    ],
    [
        4,
        49,
        31
    ],
    [
        2,
        32,
        14,
        4,
        33,
        15
    ],
    [
        4,
        39,
        13,
        1,
        40,
        14
    ],
    [
        2,
        121,
        97
    ],
    [
        2,
        60,
        38,
        2,
        61,
        39
    ],
    [
        4,
        40,
        18,
        2,
        41,
        19
    ],
    [
        4,
        40,
        14,
        2,
        41,
        15
    ],
    [
        2,
        146,
        116
    ],
    [
        3,
        58,
        36,
        2,
        59,
        37
    ],
    [
        4,
        36,
        16,
        4,
        37,
        17
    ],
    [
        4,
        36,
        12,
        4,
        37,
        13
    ],
    [
        2,
        86,
        68,
        2,
        87,
        69
    ],
    [
        4,
        69,
        43,
        1,
        70,
        44
    ],
    [
        6,
        43,
        19,
        2,
        44,
        20
    ],
    [
        6,
        43,
        15,
        2,
        44,
        16
    ],
    [
        4,
        101,
        81
    ],
    [
        1,
        80,
        50,
        4,
        81,
        51
    ],
    [
        4,
        50,
        22,
        4,
        51,
        23
    ],
    [
        3,
        36,
        12,
        8,
        37,
        13
    ],
    [
        2,
        116,
        92,
        2,
        117,
        93
    ],
    [
        6,
        58,
        36,
        2,
        59,
        37
    ],
    [
        4,
        46,
        20,
        6,
        47,
        21
    ],
    [
        7,
        42,
        14,
        4,
        43,
        15
    ],
    [
        4,
        133,
        107
    ],
    [
        8,
        59,
        37,
        1,
        60,
        38
    ],
    [
        8,
        44,
        20,
        4,
        45,
        21
    ],
    [
        12,
        33,
        11,
        4,
        34,
        12
    ],
    [
        3,
        145,
        115,
        1,
        146,
        116
    ],
    [
        4,
        64,
        40,
        5,
        65,
        41
    ],
    [
        11,
        36,
        16,
        5,
        37,
        17
    ],
    [
        11,
        36,
        12,
        5,
        37,
        13
    ],
    [
        5,
        109,
        87,
        1,
        110,
        88
    ],
    [
        5,
        65,
        41,
        5,
        66,
        42
    ],
    [
        5,
        54,
        24,
        7,
        55,
        25
    ],
    [
        11,
        36,
        12
    ],
    [
        5,
        122,
        98,
        1,
        123,
        99
    ],
    [
        7,
        73,
        45,
        3,
        74,
        46
    ],
    [
        15,
        43,
        19,
        2,
        44,
        20
    ],
    [
        3,
        45,
        15,
        13,
        46,
        16
    ],
    [
        1,
        135,
        107,
        5,
        136,
        108
    ],
    [
        10,
        74,
        46,
        1,
        75,
        47
    ],
    [
        1,
        50,
        22,
        15,
        51,
        23
    ],
    [
        2,
        42,
        14,
        17,
        43,
        15
    ],
    [
        5,
        150,
        120,
        1,
        151,
        121
    ],
    [
        9,
        69,
        43,
        4,
        70,
        44
    ],
    [
        17,
        50,
        22,
        1,
        51,
        23
    ],
    [
        2,
        42,
        14,
        19,
        43,
        15
    ],
    [
        3,
        141,
        113,
        4,
        142,
        114
    ],
    [
        3,
        70,
        44,
        11,
        71,
        45
    ],
    [
        17,
        47,
        21,
        4,
        48,
        22
    ],
    [
        9,
        39,
        13,
        16,
        40,
        14
    ],
    [
        3,
        135,
        107,
        5,
        136,
        108
    ],
    [
        3,
        67,
        41,
        13,
        68,
        42
    ],
    [
        15,
        54,
        24,
        5,
        55,
        25
    ],
    [
        15,
        43,
        15,
        10,
        44,
        16
    ],
    [
        4,
        144,
        116,
        4,
        145,
        117
    ],
    [
        17,
        68,
        42
    ],
    [
        17,
        50,
        22,
        6,
        51,
        23
    ],
    [
        19,
        46,
        16,
        6,
        47,
        17
    ],
    [
        2,
        139,
        111,
        7,
        140,
        112
    ],
    [
        17,
        74,
        46
    ],
    [
        7,
        54,
        24,
        16,
        55,
        25
    ],
    [
        34,
        37,
        13
    ],
    [
        4,
        151,
        121,
        5,
        152,
        122
    ],
    [
        4,
        75,
        47,
        14,
        76,
        48
    ],
    [
        11,
        54,
        24,
        14,
        55,
        25
    ],
    [
        16,
        45,
        15,
        14,
        46,
        16
    ],
    [
        6,
        147,
        117,
        4,
        148,
        118
    ],
    [
        6,
        73,
        45,
        14,
        74,
        46
    ],
    [
        11,
        54,
        24,
        16,
        55,
        25
    ],
    [
        30,
        46,
        16,
        2,
        47,
        17
    ],
    [
        8,
        132,
        106,
        4,
        133,
        107
    ],
    [
        8,
        75,
        47,
        13,
        76,
        48
    ],
    [
        7,
        54,
        24,
        22,
        55,
        25
    ],
    [
        22,
        45,
        15,
        13,
        46,
        16
    ],
    [
        10,
        142,
        114,
        2,
        143,
        115
    ],
    [
        19,
        74,
        46,
        4,
        75,
        47
    ],
    [
        28,
        50,
        22,
        6,
        51,
        23
    ],
    [
        33,
        46,
        16,
        4,
        47,
        17
    ],
    [
        8,
        152,
        122,
        4,
        153,
        123
    ],
    [
        22,
        73,
        45,
        3,
        74,
        46
    ],
    [
        8,
        53,
        23,
        26,
        54,
        24
    ],
    [
        12,
        45,
        15,
        28,
        46,
        16
    ],
    [
        3,
        147,
        117,
        10,
        148,
        118
    ],
    [
        3,
        73,
        45,
        23,
        74,
        46
    ],
    [
        4,
        54,
        24,
        31,
        55,
        25
    ],
    [
        11,
        45,
        15,
        31,
        46,
        16
    ],
    [
        7,
        146,
        116,
        7,
        147,
        117
    ],
    [
        21,
        73,
        45,
        7,
        74,
        46
    ],
    [
        1,
        53,
        23,
        37,
        54,
        24
    ],
    [
        19,
        45,
        15,
        26,
        46,
        16
    ],
    [
        5,
        145,
        115,
        10,
        146,
        116
    ],
    [
        19,
        75,
        47,
        10,
        76,
        48
    ],
    [
        15,
        54,
        24,
        25,
        55,
        25
    ],
    [
        23,
        45,
        15,
        25,
        46,
        16
    ],
    [
        13,
        145,
        115,
        3,
        146,
        116
    ],
    [
        2,
        74,
        46,
        29,
        75,
        47
    ],
    [
        42,
        54,
        24,
        1,
        55,
        25
    ],
    [
        23,
        45,
        15,
        28,
        46,
        16
    ],
    [
        17,
        145,
        115
    ],
    [
        10,
        74,
        46,
        23,
        75,
        47
    ],
    [
        10,
        54,
        24,
        35,
        55,
        25
    ],
    [
        19,
        45,
        15,
        35,
        46,
        16
    ],
    [
        17,
        145,
        115,
        1,
        146,
        116
    ],
    [
        14,
        74,
        46,
        21,
        75,
        47
    ],
    [
        29,
        54,
        24,
        19,
        55,
        25
    ],
    [
        11,
        45,
        15,
        46,
        46,
        16
    ],
    [
        13,
        145,
        115,
        6,
        146,
        116
    ],
    [
        14,
        74,
        46,
        23,
        75,
        47
    ],
    [
        44,
        54,
        24,
        7,
        55,
        25
    ],
    [
        59,
        46,
        16,
        1,
        47,
        17
    ],
    [
        12,
        151,
        121,
        7,
        152,
        122
    ],
    [
        12,
        75,
        47,
        26,
        76,
        48
    ],
    [
        39,
        54,
        24,
        14,
        55,
        25
    ],
    [
        22,
        45,
        15,
        41,
        46,
        16
    ],
    [
        6,
        151,
        121,
        14,
        152,
        122
    ],
    [
        6,
        75,
        47,
        34,
        76,
        48
    ],
    [
        46,
        54,
        24,
        10,
        55,
        25
    ],
    [
        2,
        45,
        15,
        64,
        46,
        16
    ],
    [
        17,
        152,
        122,
        4,
        153,
        123
    ],
    [
        29,
        74,
        46,
        14,
        75,
        47
    ],
    [
        49,
        54,
        24,
        10,
        55,
        25
    ],
    [
        24,
        45,
        15,
        46,
        46,
        16
    ],
    [
        4,
        152,
        122,
        18,
        153,
        123
    ],
    [
        13,
        74,
        46,
        32,
        75,
        47
    ],
    [
        48,
        54,
        24,
        14,
        55,
        25
    ],
    [
        42,
        45,
        15,
        32,
        46,
        16
    ],
    [
        20,
        147,
        117,
        4,
        148,
        118
    ],
    [
        40,
        75,
        47,
        7,
        76,
        48
    ],
    [
        43,
        54,
        24,
        22,
        55,
        25
    ],
    [
        10,
        45,
        15,
        67,
        46,
        16
    ],
    [
        19,
        148,
        118,
        6,
        149,
        119
    ],
    [
        18,
        75,
        47,
        31,
        76,
        48
    ],
    [
        34,
        54,
        24,
        34,
        55,
        25
    ],
    [
        20,
        45,
        15,
        61,
        46,
        16
    ]
];
QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
    if (rsBlock == undefined) throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
    var length = rsBlock.length / 3;
    var list = [];
    for(var i = 0; i < length; i++){
        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];
        for(var j = 0; j < count; j++)list.push(new QRRSBlock(totalCount, dataCount));
    }
    return list;
};
QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
    switch(errorCorrectLevel){
        case QRErrorCorrectLevel.L:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
        case QRErrorCorrectLevel.M:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
        case QRErrorCorrectLevel.Q:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
        case QRErrorCorrectLevel.H:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
        default:
            return undefined;
    }
};
function QRBitBuffer() {
    this.buffer = [];
    this.length = 0;
}
QRBitBuffer.prototype = {
    get: function(index) {
        var bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
    },
    put: function(num, length) {
        for(var i = 0; i < length; i++)this.putBit((num >>> length - i - 1 & 1) == 1);
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(bit) {
        var bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) this.buffer.push(0);
        if (bit) this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        this.length++;
    }
};
var QRCodeLimitLength = [
    [
        17,
        14,
        11,
        7
    ],
    [
        32,
        26,
        20,
        14
    ],
    [
        53,
        42,
        32,
        24
    ],
    [
        78,
        62,
        46,
        34
    ],
    [
        106,
        84,
        60,
        44
    ],
    [
        134,
        106,
        74,
        58
    ],
    [
        154,
        122,
        86,
        64
    ],
    [
        192,
        152,
        108,
        84
    ],
    [
        230,
        180,
        130,
        98
    ],
    [
        271,
        213,
        151,
        119
    ],
    [
        321,
        251,
        177,
        137
    ],
    [
        367,
        287,
        203,
        155
    ],
    [
        425,
        331,
        241,
        177
    ],
    [
        458,
        362,
        258,
        194
    ],
    [
        520,
        412,
        292,
        220
    ],
    [
        586,
        450,
        322,
        250
    ],
    [
        644,
        504,
        364,
        280
    ],
    [
        718,
        560,
        394,
        310
    ],
    [
        792,
        624,
        442,
        338
    ],
    [
        858,
        666,
        482,
        382
    ],
    [
        929,
        711,
        509,
        403
    ],
    [
        1003,
        779,
        565,
        439
    ],
    [
        1091,
        857,
        611,
        461
    ],
    [
        1171,
        911,
        661,
        511
    ],
    [
        1273,
        997,
        715,
        535
    ],
    [
        1367,
        1059,
        751,
        593
    ],
    [
        1465,
        1125,
        805,
        625
    ],
    [
        1528,
        1190,
        868,
        658
    ],
    [
        1628,
        1264,
        908,
        698
    ],
    [
        1732,
        1370,
        982,
        742
    ],
    [
        1840,
        1452,
        1030,
        790
    ],
    [
        1952,
        1538,
        1112,
        842
    ],
    [
        2068,
        1628,
        1168,
        898
    ],
    [
        2188,
        1722,
        1228,
        958
    ],
    [
        2303,
        1809,
        1283,
        983
    ],
    [
        2431,
        1911,
        1351,
        1051
    ],
    [
        2563,
        1989,
        1423,
        1093
    ],
    [
        2699,
        2099,
        1499,
        1139
    ],
    [
        2809,
        2213,
        1579,
        1219
    ],
    [
        2953,
        2331,
        1663,
        1273
    ]
];
/** Constructor */ function QRCode(options) {
    var instance = this;
    //Default options
    this.options = {
        padding: 4,
        width: 256,
        height: 256,
        typeNumber: 4,
        color: "#000000",
        background: "#ffffff",
        ecl: "M"
    };
    //In case the options is string
    if (typeof options === "string") options = {
        content: options
    };
    //Merge options
    if (options) for(var i in options)this.options[i] = options[i];
    if (typeof this.options.content !== "string") throw new Error("Expected 'content' as string!");
    if (this.options.content.length === 0 /* || this.options.content.length > 7089 */ ) throw new Error("Expected 'content' to be non-empty!");
    if (!(this.options.padding >= 0)) throw new Error("Expected 'padding' value to be non-negative!");
    if (!(this.options.width > 0) || !(this.options.height > 0)) throw new Error("Expected 'width' or 'height' value to be higher than zero!");
    //Gets the error correction level
    function _getErrorCorrectLevel(ecl) {
        switch(ecl){
            case "L":
                return QRErrorCorrectLevel.L;
            case "M":
                return QRErrorCorrectLevel.M;
            case "Q":
                return QRErrorCorrectLevel.Q;
            case "H":
                return QRErrorCorrectLevel.H;
            default:
                throw new Error("Unknwon error correction level: " + ecl);
        }
    }
    //Get type number
    function _getTypeNumber(content, ecl) {
        var length = _getUTF8Length(content);
        var type = 1;
        var limit = 0;
        for(var i = 0, len = QRCodeLimitLength.length; i <= len; i++){
            var table = QRCodeLimitLength[i];
            if (!table) throw new Error("Content too long: expected " + limit + " but got " + length);
            switch(ecl){
                case "L":
                    limit = table[0];
                    break;
                case "M":
                    limit = table[1];
                    break;
                case "Q":
                    limit = table[2];
                    break;
                case "H":
                    limit = table[3];
                    break;
                default:
                    throw new Error("Unknwon error correction level: " + ecl);
            }
            if (length <= limit) break;
            type++;
        }
        if (type > QRCodeLimitLength.length) throw new Error("Content too long");
        return type;
    }
    //Gets text length
    function _getUTF8Length(content) {
        var result = encodeURI(content).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return result.length + (result.length != content ? 3 : 0);
    }
    //Generate QR Code matrix
    var content = this.options.content;
    var type = _getTypeNumber(content, this.options.ecl);
    var ecl = _getErrorCorrectLevel(this.options.ecl);
    this.qrcode = new QRCodeModel(type, ecl);
    this.qrcode.addData(content);
    this.qrcode.make();
}
/** Generates QR Code as SVG image */ QRCode.prototype.svg = function(opt) {
    var options = this.options || {};
    var modules = this.qrcode.modules;
    if (typeof opt == "undefined") opt = {
        container: options.container || "svg"
    };
    //Apply new lines and indents in SVG?
    var pretty = typeof options.pretty != "undefined" ? !!options.pretty : true;
    var indent = pretty ? "  " : "";
    var EOL = pretty ? "\r\n" : "";
    var width = options.width;
    var height = options.height;
    var length = modules.length;
    var xsize = width / (length + 2 * options.padding);
    var ysize = height / (length + 2 * options.padding);
    //Join (union, merge) rectangles into one shape?
    var join = typeof options.join != "undefined" ? !!options.join : false;
    //Swap the X and Y modules, pull request #2
    var swap = typeof options.swap != "undefined" ? !!options.swap : false;
    //Apply <?xml...?> declaration in SVG?
    var xmlDeclaration = typeof options.xmlDeclaration != "undefined" ? !!options.xmlDeclaration : true;
    //Populate with predefined shape instead of "rect" elements, thanks to @kkocdko
    var predefined = typeof options.predefined != "undefined" ? !!options.predefined : false;
    var defs = predefined ? indent + '<defs><path id="qrmodule" d="M0 0 h' + ysize + " v" + xsize + ' H0 z" style="fill:' + options.color + ';shape-rendering:crispEdges;" /></defs>' + EOL : "";
    //Background rectangle
    var bgrect = indent + '<rect x="0" y="0" width="' + width + '" height="' + height + '" style="fill:' + options.background + ';shape-rendering:crispEdges;"/>' + EOL;
    //Rectangles representing modules
    var modrect = "";
    var pathdata = "";
    for(var y = 0; y < length; y++)for(var x = 0; x < length; x++){
        var module1 = modules[x][y];
        if (module1) {
            var px = x * xsize + options.padding * xsize;
            var py = y * ysize + options.padding * ysize;
            //Some users have had issues with the QR Code, thanks to @danioso for the solution
            if (swap) {
                var t = px;
                px = py;
                py = t;
            }
            if (join) {
                //Module as a part of svg path data, thanks to @danioso
                var w = xsize + px;
                var h = ysize + py;
                px = Number.isInteger(px) ? Number(px) : px.toFixed(2);
                py = Number.isInteger(py) ? Number(py) : py.toFixed(2);
                w = Number.isInteger(w) ? Number(w) : w.toFixed(2);
                h = Number.isInteger(h) ? Number(h) : h.toFixed(2);
                pathdata += "M" + px + "," + py + " V" + h + " H" + w + " V" + py + " H" + px + " Z ";
            } else if (predefined) //Module as a predefined shape, thanks to @kkocdko
            modrect += indent + '<use x="' + px.toString() + '" y="' + py.toString() + '" href="#qrmodule" />' + EOL;
            else //Module as rectangle element
            modrect += indent + '<rect x="' + px.toString() + '" y="' + py.toString() + '" width="' + xsize + '" height="' + ysize + '" style="fill:' + options.color + ';shape-rendering:crispEdges;"/>' + EOL;
        }
    }
    if (join) modrect = indent + '<path x="0" y="0" style="fill:' + options.color + ';shape-rendering:crispEdges;" d="' + pathdata + '" />';
    var svg = "";
    switch(opt.container){
        //Wrapped in SVG document
        case "svg":
            if (xmlDeclaration) svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
            svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '">' + EOL;
            svg += defs + bgrect + modrect;
            svg += "</svg>";
            break;
        //Viewbox for responsive use in a browser, thanks to @danioso
        case "svg-viewbox":
            if (xmlDeclaration) svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
            svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + width + " " + height + '">' + EOL;
            svg += defs + bgrect + modrect;
            svg += "</svg>";
            break;
        //Wrapped in group element    
        case "g":
            svg += '<g width="' + width + '" height="' + height + '">' + EOL;
            svg += defs + bgrect + modrect;
            svg += "</g>";
            break;
        //Without a container
        default:
            svg += (defs + bgrect + modrect).replace(/^\s+/, ""); //Clear indents on each line
            break;
    }
    return svg;
};
/** Writes QR Code image to a file */ QRCode.prototype.save = function(file, callback) {
    var data = this.svg();
    if (typeof callback != "function") callback = function(error, result) {};
    try {
        //Package 'fs' is available in node.js but not in a web browser
        var fs = require("81b48771f587ef78");
        fs.writeFile(file, data, callback);
    } catch (e) {
        //Sorry, 'fs' is not available
        callback(e);
    }
};
module.exports = QRCode;

},{"81b48771f587ef78":"jhUEF"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}]},["7MVYt","l731N"], "l731N", "parcelRequire9442")

//# sourceMappingURL=index.a4c1dfb7.js.map
