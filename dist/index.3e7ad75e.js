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
})({"cI5Ua":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b9f913cb3e7ad75e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"MC2Vq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _moduleJs = require("./module.js");
var _moduleJsDefault = parcelHelpers.interopDefault(_moduleJs);
var _recipePreviewJs = require("./views/recipePreview.js");
var _recipePreviewJsDefault = parcelHelpers.interopDefault(_recipePreviewJs);
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _bookmarkViewJs = require("./views/bookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
function App() {
    location.hash = "";
    (0, _moduleJsDefault.default).readLocalStorage();
    (0, _bookmarkViewJsDefault.default).renderView((0, _moduleJsDefault.default).state.bookmarkedRecipes);
    // module.clearLocalStorage();
    async function controlSearch() {
        try {
            const query = (0, _searchViewJsDefault.default).getQuery();
            (0, _recipePreviewJsDefault.default).clearHTML();
            (0, _recipePreviewJsDefault.default).startAnimation();
            await (0, _moduleJsDefault.default).loadRecipes(query);
            (0, _moduleJsDefault.default).state.currentPage = 1;
            (0, _recipePreviewJsDefault.default).renderView((0, _moduleJsDefault.default).state);
        } catch (err) {
            console.error(err);
        } finally{
            (0, _recipePreviewJsDefault.default).endAnimation();
        }
    }
    function controlPagination(goToPage) {
        (0, _moduleJsDefault.default).loadPageResults(goToPage);
        (0, _recipePreviewJsDefault.default).renderView((0, _moduleJsDefault.default).state);
    }
    async function controlHashChange(id) {
        try {
            if (location.hash == "") return;
            (0, _recipeViewJsDefault.default).hideMessage();
            (0, _recipeViewJsDefault.default).clearHTML();
            (0, _recipeViewJsDefault.default).startAnimation();
            (0, _recipeViewJsDefault.default).renderView(await (0, _moduleJsDefault.default).loadRecipe(id));
        } catch (err) {
            throw err;
        } finally{
            (0, _recipeViewJsDefault.default).endAnimation();
        }
    }
    function controlChangeServings(ok) {
        if (ok === true) (0, _moduleJsDefault.default).activeRecipe.currentServings++;
        else if (ok === false && (0, _moduleJsDefault.default).activeRecipe.currentServings > 1) (0, _moduleJsDefault.default).activeRecipe.currentServings--;
        else return;
        (0, _recipeViewJsDefault.default).clearHTML();
        (0, _recipeViewJsDefault.default).renderView((0, _moduleJsDefault.default).activeRecipe);
    }
    function controlBookMarkClicked() {
        if ((0, _moduleJsDefault.default).checkRecipeBookmarked()) (0, _moduleJsDefault.default).unbookmarkRecipe();
        else (0, _moduleJsDefault.default).bookmarkRecipe();
        (0, _recipeViewJsDefault.default).clearHTML();
        (0, _recipeViewJsDefault.default).renderView((0, _moduleJsDefault.default).activeRecipe);
        (0, _bookmarkViewJsDefault.default).renderView((0, _moduleJsDefault.default).state.bookmarkedRecipes);
    }
    function controlBookmarkOnHover() {}
    function addingHandlers() {
        (0, _searchViewJsDefault.default).addHandlerSearch(controlSearch);
        (0, _recipePreviewJsDefault.default).addHandlerPagination(controlPagination);
        (0, _recipePreviewJsDefault.default).addHandlerPreviewClick();
        (0, _recipeViewJsDefault.default).addHandlerHashChange(controlHashChange);
        (0, _recipeViewJsDefault.default).addHandlerChangeServings(controlChangeServings);
        (0, _bookmarkViewJsDefault.default).addHandlerClickBookmark(controlBookMarkClicked);
        (0, _bookmarkViewJsDefault.default).addHandlerHoverBookmark(controlBookmarkOnHover);
    }
    addingHandlers();
}
App();

},{"./views/searchView.js":"bYnrN","./module.js":"cSZqD","./views/recipePreview.js":"6mrXi","./views/recipeView.js":"hgTkH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/bookmarkView.js":"RdFqk"}],"bYnrN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _searchBar = document.querySelector(".search__bar");
    _searchForm = document.querySelector(".search__container");
    getQuery() {
        return this._searchBar.value;
    }
    clearInput() {
        this._searchBar.value = "";
    }
    addHandlerSearch(handler) {
        this._searchForm.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"cSZqD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _env = require("./env");
var _recipePreview = require("./views/recipePreview");
var _recipePreviewDefault = parcelHelpers.interopDefault(_recipePreview);
class Module {
    activeRecipe;
    state = {
        recipes: [],
        bookmarkedRecipes: [],
        currentPage: 1,
        resultsPerPage: (0, _env.RESULT_PER_PAGE)
    };
    readLocalStorage() {
        const storage = localStorage.getItem("bookmarks");
        if (storage) this.state.bookmarkedRecipes = JSON.parse(storage);
    }
    writeLocalStorage() {
        this.clearLocalStorage();
        localStorage.setItem("bookmarks", JSON.stringify(this.state.bookmarkedRecipes));
    }
    clearLocalStorage() {
        localStorage.clear("bookmarks");
    }
    bookmarkRecipe() {
        console.log(this.state.bookmarkedRecipes);
        this.state.bookmarkedRecipes.push(this.activeRecipe);
        this.activeRecipe.bookmarked = true;
        this.writeLocalStorage();
    }
    unbookmarkRecipe() {
        const index = this.state.bookmarkedRecipes.indexOf(this.activeRecipe);
        this.state.bookmarkedRecipes.splice(index, 1);
        this.activeRecipe.bookmarked = false;
        this.writeLocalStorage();
    }
    checkRecipeBookmarked(recipe = this.activeRecipe) {
        if (this.state.bookmarkedRecipes.find((rec)=>rec.id === this.activeRecipe.id)) return true;
        if (!this.state.bookmarkedRecipes.find((rec)=>rec.id === this.activeRecipe.id)) return false;
    }
    loadPageResults(goToPage) {
        const maxPage = Math.ceil(this.state.recipes.length / this.state.resultsPerPage);
        if (goToPage >= 1 && goToPage <= maxPage) this.state.currentPage = goToPage;
    }
    async loadRecipe(id) {
        try {
            const result = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            if (!result.ok) throw new Error("The recipe was not found \uD83D\uDCA5");
            const { data  } = await result.json();
            const { recipe  } = data;
            this.activeRecipe = recipe;
            this.activeRecipe.currentServings = this.activeRecipe.servings;
            if (this.checkRecipeBookmarked()) this.activeRecipe.bookmarked = true;
            else this.activeRecipe.bookmarked = false;
            return this.activeRecipe;
        } catch (err) {
            throw err;
        }
    }
    async loadRecipes(query) {
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`);
            const { ok  } = res;
            if (!ok) throw new Error("Receipt was not found for your input...\uD83D\uDCA5");
            const { data  } = await res.json();
            const { recipes  } = data;
            this.state.recipes = recipes;
        } catch (err) {
            throw err;
        }
    }
}
exports.default = new Module();

},{"./env":"ieYb1","./views/recipePreview":"6mrXi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ieYb1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RESULT_PER_PAGE", ()=>RESULT_PER_PAGE);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
const RESULT_PER_PAGE = 12;
const API_KEY = "1de998c7-6718-4bd4-878c-3ceb6ed71ace";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mrXi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class RecipePreview {
    _prevBtn = document.querySelector(".pagination__btn--left");
    _nextBtn = document.querySelector(".pagination__btn--right");
    _buttons = document.querySelectorAll(".pagination__btn");
    _recipesListContainer = document.querySelector(".recipe--preview-container");
    _recipeElement = document.querySelector(".recipe__list_element");
    _spinnerContainer = document.querySelector(".loading--animation-search-results");
    startAnimation() {
        this._spinnerContainer.classList.remove("hidden");
    }
    endAnimation() {
        this._spinnerContainer.classList.add("hidden");
    }
    renderContent(recipes) {
        let markup = "";
        recipes.forEach((recipe)=>markup += `
    <div class="recipe__list_element" data-id="${recipe.id}">
      <div class="preview__img_container _ibg">
        <img
          src="${recipe.image_url}"
          alt="recipe_img_preview"
        />
      </div>
      <span class="preview__title"
        >${recipe.title}</span
      >
      <span class="preview__subtitle">${recipe.publisher}</span>
    </div>`);
        return markup;
    }
    clearHTML() {
        this._recipesListContainer.innerHTML = "";
    }
    renderView(state) {
        this._prevBtn.classList.remove("hidden");
        this._nextBtn.classList.remove("hidden");
        if (state.currentPage === 1) this._prevBtn.classList.add("hidden");
        if (state.currentPage === Math.ceil(state.recipes.length / state.resultsPerPage)) this._nextBtn.classList.add("hidden");
        const pageResults = state.recipes.slice((state.currentPage - 1) * state.resultsPerPage + 1, state.currentPage * state.resultsPerPage + 1);
        const markup = this.renderContent(pageResults);
        this._recipesListContainer.innerHTML = "";
        this._recipesListContainer.insertAdjacentHTML("afterbegin", markup);
        this._prevBtn.dataset.info = (parseInt(state.currentPage) - 1).toString();
        this._prevBtn.innerHTML = "";
        this._prevBtn.insertAdjacentHTML("afterbegin", `<span class="pagination__btn_text">
        <span class="pagination__arrow">&larr;</span> Page ${this._prevBtn.dataset.info}
      </span>`);
        this._nextBtn.dataset.info = (parseInt(state.currentPage) + 1).toString();
        this._nextBtn.innerHTML = "";
        this._nextBtn.insertAdjacentHTML("afterbegin", `<span class="pagination__btn_text">
        <span class="pagination__arrow">&rarr;</span> Page ${this._nextBtn.dataset.info}
      </span>`);
    }
    addHandlerPagination(handler) {
        function eventFunction(e) {
            if (!e.target.closest(".pagination__btn")) return;
            const goToPage = parseInt(e.target.closest(".pagination__btn").dataset.info);
            handler(goToPage);
        }
        this._buttons.forEach((btn)=>btn.addEventListener("click", eventFunction.bind(this)));
    }
    addHandlerPreviewClick() {
        this._recipesListContainer.addEventListener("click", function(e) {
            if (!e.target.closest(".recipe__list_element")) return;
            const element = e.target.closest(".recipe__list_element");
            window.location.hash = element.dataset.id;
        });
    }
}
exports.default = new RecipePreview();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgTkH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fractional = require("fractional");
class RecipeView {
    _bodyContainer = document.querySelector(".main__recipe_view_container");
    _spinnerContainer = document.querySelector(".loading__animation_recipe-view");
    _servingsContainer = document.querySelector(".modifying__servings_container");
    _servingsPlusBtn = document.querySelector(".fa-circle-plus");
    _servingsMinusBtn = document.querySelector(".fa-circle-minus");
    _messageContainer = document.querySelector(".main__message_container");
    startAnimation() {
        this._spinnerContainer.classList.remove("hidden");
    }
    endAnimation() {
        this._spinnerContainer.classList.add("hidden");
    }
    hideMessage() {
        this._messageContainer.classList.add("hidden");
    }
    clearHTML() {
        this._bodyContainer.innerHTML = "";
    }
    renderContent(recipe) {
        const markup = `
    <div class="recipe__view_img_container _ibg">
                  <img src="${recipe.image_url}" alt="recipe_image" />
                  <div class="recipe__title_container">
                    <span class="recipe__title"
                      >${recipe.title}</span
                    >
                  </div>
                </div>
                <div class="recipe__view_header">
                  <div class="timer__container">
                    <i class="fa-regular fa-clock"></i>
                    <span class="receipt__time"
                      ><span class="receipt__timer_value">${recipe.cooking_time}</span>
                      minutes</span
                    >
                  </div>
                  <div class="servings__container">
                    <i class="fa-solid fa-user-group"></i>
                    <span class="receipt__servings"
                      ><span class="receipt__servings_value">${recipe.currentServings}</span>
                      servings</span
                    >
                  </div>
                  <div class="modifying__servings_container">
                    <i class="fa-solid fa-circle-plus"></i>
                    <i class="fa-solid fa-circle-minus"></i>
                  </div>
                  <div class="bookmark__icon_container">
                    <div class="bookmark__icon_background">
                    ${recipe.bookmarked ? '<i class="fa-solid fa-bookmark"></i>' : ' <i class="fa-regular fa-bookmark"></i>'}
                    </div>
                  </div>
                </div>
                <div class="recipe__view_body">
                  <div class="recipe__body_title">
                    <h2 class="recipe__ingredients_title">
                      recipe ingredients
                    </h2>
                  </div>
                  <ul class="receipt__items">
                  ${recipe.ingredients.reduce((add, ingr)=>add + ` <li>${ingr.quantity ? new (0, _fractional.Fraction)(ingr.quantity * (Math.round(recipe.currentServings / recipe.servings * 10) / 10)).toString() : ""} ${ingr.unit} ${ingr.description}</li>`, "")}
                  </ul>
                </div>
                <div class="recipe__view_footer">
                  <div class="recipe__footer_container">
                    <div class="recipe__footer_title">How to cook it</div>
                    <div class="recipe__footer_subtitle">
                    This recipe was carefully designed and tested by ${recipe.publisher}. Please check out directions at their website.
                    </div>
                    <div class="recipe__footer_btn_container">
                      <div class="recipe__footer_btn">
                      <a class="footer__btn_text" href="${recipe.source_url}">Directions</a>
                        <span class="footer__btn_icon">&rarr;</span>
                      </div>
                    </div>
                  </div>
                </div>
    `;
        return markup;
    }
    renderView(recipe) {
        const markup = this.renderContent(recipe);
        this._bodyContainer.insertAdjacentHTML("afterbegin", markup);
    }
    addHandlerHashChange(handler) {
        window.addEventListener("hashchange", function(e) {
            const id = location.hash.slice(1);
            handler(id);
        });
    }
    addHandlerChangeServings(handler) {
        document.addEventListener("click", function(e) {
            if (!e.target.closest(".fa-circle-plus") && !e.target.closest(".fa-circle-minus")) return;
            let ok;
            if (e.target.closest(".fa-circle-plus")) ok = true;
            if (e.target.closest(".fa-circle-minus")) ok = false;
            handler(ok);
        });
    }
}
exports.default = new RecipeView();

},{"fractional":"3SU56","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SU56":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== "undefined" && denominator) {
        if (typeof numerator === "number" && typeof denominator === "number") {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === "string" && typeof denominator === "string") {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === "undefined") {
        num = numerator; // swap variable names for legibility
        if (typeof num === "number") {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === "string") {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(" ");
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match("/")) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === "string" && a.match("/")) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split("/");
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === "string" && a.match(".")) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === "NaN") return "NaN";
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + "/" + denominator);
    return result.length > 0 ? result.join(" ") : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === "number") a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === "number") a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = function() {
    var isFloat = function(n) {
        return typeof n === "number" && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
}();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num1 = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num1)if (num1 % _factor === 0) {
        factors.push(_factor); // so keep it
        num1 = num1 / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num1 != 1) factors.push(num1); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"RdFqk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class BookMark {
    _bookmarkListBtn = document.querySelector(".nav__bookmarks");
    _bookmarkListContainer = document.querySelector(".bookmark__list_container");
    _spinnerContainer = document.querySelector(".bookmark__anumation_container");
    startAnimation() {
        this._spinnerContainer.classList.remove("hidden");
    }
    endAnimation() {
        this._spinnerContainer.classList.add("hidden");
    }
    hideMessage() {
        this._messageContainer.classList.add("hidden");
    }
    clearHTML() {
        this._bookmarkListContainer.innerHTML = "";
    }
    renderContent(recipes) {
        let markup = "";
        recipes.forEach((recipe)=>markup += `
    <div class="recipe__list_element" data-id="${recipe.id}">
      <div class="preview__img_container _ibg">
        <img
          src="${recipe.image_url}"
          alt="recipe_img_preview"
        />
      </div>
      <span class="preview__title"
        >${recipe.title}</span
      >
      <span class="preview__subtitle">${recipe.publisher}</span>
    </div>`);
        return markup;
    }
    renderView(bookmarkedRecipes) {
        const markup = this.renderContent(bookmarkedRecipes);
        this._bookmarkListContainer.querySelector(".recipe__preview_container").innerHTML = "";
        this._bookmarkListContainer.querySelector(".recipe__preview_container").insertAdjacentHTML("afterbegin", markup);
    }
    addHandlerHoverBookmark(handler) {
        console.log(this._bookmarkListBtn);
        this._bookmarkListBtn.addEventListener("mouseover", function(e) {
            handler();
        });
    }
    addHandlerClickBookmark(handler) {
        document.addEventListener("click", function(e) {
            if (!e.target.closest(".bookmark__icon_background")) return;
            handler();
        });
    }
}
exports.default = new BookMark();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cI5Ua","MC2Vq"], "MC2Vq", "parcelRequire3a11")

//# sourceMappingURL=index.3e7ad75e.js.map
