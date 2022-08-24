function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicPwaElementsDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./pwa-action-sheet.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-action-sheet.entry.js", 43],
      "./pwa-camera-modal-instance.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js", 44],
      "./pwa-camera-modal.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js", 45],
      "./pwa-camera.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js", 46],
      "./pwa-toast.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js", 47]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment/comment.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment/comment.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommentCommentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"comment_data\" novalidate style=\"display:flex\">\n  <div style=\"width: 70%;margin-left: 5px;\">\n    <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n      <ion-input placeholder=\"Comentario\" formControlName=\"comment\" required></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"danger-color-text\"\n      *ngIf=\" controls.comment.dirty && controls.comment.touched && controls.comment.errors\">\n      <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n      <ion-label *ngIf=\"controls.comment.errors.required\">El comentario es requerido</ion-label>\n    </ion-item>\n\n  </div>\n  <div style=\"width: 15%;\">\n    <ion-button expand=\"block\" mode=\"ios\" color=\"light\" class=\" ion-margin-top\" (click)=\"uploadPhoto()\">\n      <ion-icon name=\"images-outline\" ></ion-icon>\n    </ion-button>\n  </div>\n  <div style=\"width: 15%;\">\n    <ion-button type=\"submit\" expand=\"block\" mode=\"ios\" color=\"light\" class=\" ion-margin-top\" (click)=\"save()\">\n      <ion-spinner name=\"crescent\" *ngIf=\"sending == 'yes'\" color=\"primary\"></ion-spinner>\n      <ion-icon name=\"send-outline\" *ngIf=\"!sending\"></ion-icon>\n    </ion-button>\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-card/order-card.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-card/order-card.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsOrderCardOrderCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ion-text-center\" style=\"padding: 1px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  background: #49158c;\n  width: 95%;\n  margin: auto;\n  color: white;\n  font-weight: 900;\n  \">\n    <h3 class=\"ion-text-center\" style=\"margin-top: 2px;\n    margin-bottom: 2px;\n    font-weight: 900;\">{{title}}</h3>\n  </div>\n  <ion-card style=\"padding: 0;min-height: 320px;margin-top: 0; border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\" mode=\"ios\">\n    \n    <ion-card-content style=\"padding: 0;\">\n      <div style=\"justify-content: center;\n    margin: auto;\n    width: 50%;\">\n       \n      </div>\n      <ng-container *ngIf=\"available == 0; else elseTemplate\">\n        <div style=\"justify-content: center;\n    margin: auto;\n    width: 70%;\">\n\n          <div class=\"ion-text-center\" style=\"margin-top:60px;\">\n            <img src=\"assets/imgs/aqua-driver.png\" />\n            <h4 class=\"ion-text-center\">\n              Toca el botón para ponerte disponible y recibir servicios\n            </h4>\n          </div>\n        </div>\n      </ng-container>\n      <ng-template #elseTemplate>\n        <ng-container *ngIf=\"filter().length > 0; else elseTemplateOrder\">\n          <ion-card style=\"--background: #f2f2f2;\" *ngFor=\"let item of filter()\" (click)=\"viewDetail(item, near)\">\n            <ion-card-header style=\"padding: 0;\">\n              <ion-grid style=\"    padding: 0;\">\n                <ion-row>\n                  <ion-col size=\"3\" style=\"padding: 0;\">\n                    <div style=\"font-size: 0.7em;\n                    /* height: 100%; */\n                    padding: 10px;\n                    padding-left: 5px;\n                    font-weight: 900;\n                    background: #49158c;\n                    color: white;\n                    clip-path: polygon;\n                    clip-path: polygon(0 0, 100% 0, 79% 100%, 0% 100%);\">\n                      Orden # {{item.id}}\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"9\" style=\"padding: 0;\">\n                    <h3>Tipo de servicio:\n                      <span style=\"    font-size: 1.1em;\n                      color: black;\n                      font-weight: 900;\" *ngIf=\"item.diligence==0\">{{item.service_type}}</span>\n                      <span style=\"    font-size: 1.1em;\n                      color: black;\n                      font-weight: 900;\" *ngIf=\"item.diligence==1\">Diligencia</span>\n                    </h3>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ng-container *ngIf=\"item.service_type_id==2\">\n                    <ion-col [size]=\"near? 6:12\">\n                      <p>Recorrido: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.round_trip ==1 ? 'Ida y Vuelta': 'Ida'}}</strong></span></p>\n                      <p>Fecha: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.date}}</strong></span></p>\n                      <p>Cantidad: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.details.length}} direcciones</strong></span></p>\n                      <p *ngFor=\"let itemAddress of item.details;let index=i\">Dirección {{index}}: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{itemAddress.address}}</strong></span></p>\n                      \n                      <p>Método de pago: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.payment_method}}</strong></span></p>\n                    </ion-col>\n                  </ng-container>\n                  <ng-container *ngIf=\"item.service_type_id==1\">\n                    <ion-col [size]=\"near? 6:12\">\n                      <p>Recorrido: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.round_trip ==1 ? 'Ida y Vuelta': 'Ida'}}</strong></span></p>\n                      <p>Fecha: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.date}}</strong></span></p>\n                      <p>Método de pago: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.payment_method}}</strong></span></p>\n                      <p>Dirección A: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.details[0].address}}</strong></span></p>\n                      <p>Dirección B: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.details[1].address}}</strong></span></p> \n                    </ion-col>\n                  </ng-container>\n\n                  <ng-container *ngIf=\"item.service_type_id==3\">\n                    <ion-col [size]=\"near? 6:12\">\n                      <p>Recorrido: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.round_trip ==1 ? 'Ida y Vuelta': 'Ida'}}</strong></span></p>\n                      <p>Fecha: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.date}}</strong></span></p>\n                      <p *ngFor=\"let itemAddress of item.details;let index=i\">Dirección {{index}}: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{itemAddress.address}}</strong></span></p>\n                      <p>Número de horas: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.number_hours}}</strong></span></p>\n                      <p>Horario: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong> {{item.details[0].start_time }} - {{item.details[0].departure_time}}</strong></span></p>\n                      \n                      <p>Método de pago: <span class=\"black-color-text\" style=\"font-weight: 900;\"><strong>{{item.payment_method}}</strong></span></p>\n                    </ion-col>\n                  </ng-container>\n                  \n                  \n                  <ion-col size=\"6\" *ngIf=\"near\">\n                    <ion-button color=\"primary\" round=\"true\" style=\"    --border-radius: 20px;\n                    height: 30px;\n                    min-width: 100%;\" (click)=\"accept(item)\">\n                      Aceptar\n                    </ion-button>\n                    <ion-button color=\"danger\" round=\"true\" style=\"    --border-radius: 20px;\n                    height: 30px;\n                    min-width: 100%;\" (click)=\"reject(item)\">\n                      Cancelar\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"item.status_order==23||item.status_order==24\">\n                  <ion-col size=\"12\">\n                    <div style=\"display: flex;justify-content: center;\">\n                      <ion-button>\n                        {{item.status_order==23?'Iniciar':'Continuar'}}\n                      </ion-button>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-header>\n          </ion-card>\n          \n        </ng-container>\n        <ng-template #elseTemplateOrder>\n          <div style=\"position: relative;height: 200px;\" *ngIf=\"spinner\">\n            <h3 class=\"ion-text-center \" style=\"    font-size: 1.5em;\n                position: absolute;\n                top: 0;\n                bottom: 0;\n                right: 0;\n                left: 0;\n                text-align: center;\n                margin: auto;\n                height: 40px;\n            \">Cargando<br><ion-spinner name=\"dots\"></ion-spinner> </h3>\n            \n          </div>\n          <div style=\"position: relative;height: 200px;\" *ngIf=\"!spinner && orders.length == 0;\">\n            <h3 class=\"ion-text-center \" style=\"    font-size: 1.5em;\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          right: 0;\n          left: 0;\n          text-align: center;\n          margin: auto;\n          height: 40px;\n      \">No tiene ordenes asignadas</h3>\n          </div>\n\n        </ng-template>\n        \n        \n      </ng-template>\n    </ion-card-content>\n  </ion-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/order.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/order.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsOrderOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card  style=\"margin-bottom: 10px;\" >\n  <ion-card-content >\n\n    <div style=\"width:100%;display: flex;\">\n      <div style=\"width: 50%;text-align:right\">\n        {{ order.date | dateLocal | titlecase }}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"w-50\">\n        <p class=\" \">Tipo de Servicio :  </p>\n      </div>\n      <div style=\"width: 50%;\">\n        <strong>{{order.service_type}}</strong>\n        \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"w-50\">\n        <p class=\" \"> Ciudad : </p>\n        \n      </div>\n      <div style=\"width: 50%;   \">\n        <strong>{{order.city}}</strong>\n        \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"w-50\">\n        <p class=\"\"> Cantidad : </p>\n      </div>\n      <div class=\"w-50\">\n        <strong>{{order.details.length}}</strong>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"w-50\">\n        <p class=\"\"> Recorrido : </p>\n      </div>\n      <div style=\"width: 50%; \">\n        <strong>{{order.round_trip ==1 ? 'Ida y Vuelta': 'Ida'}}</strong>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"w-50\">\n        <p class=\"\"> Valor declarado : </p>\n      </div>\n      <div class=\"w-50\">\n        <strong>{{order.declared_value}}</strong>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"w-50\">\n        <p class=\"\"> Tipo de accesorio : </p>\n      </div>\n      <div class=\"w-50\">\n        <strong>{{order.accesory}}</strong>\n      </div>\n    </div>\n    \n    <div class=\"row\" *ngIf=\"order.service_type_id == 3\">\n      <div class=\"w-50\">\n        <p class=\"\"> Número de horas : </p>\n      </div>\n      <div style=\"width: 50%;    \">\n        <strong>{{order.number_hours}}</strong>\n      </div>\n      <div class=\"w-50\">\n        <p class=\"\"> Hora de entrada : </p>\n      </div>\n      <div style=\"width: 50%;    \">\n        <strong>{{order.detail ? order.detail[0].start_time : order.details[0].start_time}}</strong>\n      </div>\n      <div class=\"w-50\">\n        <p class=\"\"> Hora de salida : </p>\n      </div>\n      <div style=\"width: 50%;    \">\n        <strong>{{order.detail ? order.detail[0].departure_time : order.details[0].departure_time}}</strong>\n      </div>\n    </div>\n    <div class=\"row\" style=\"justify-content:center\" *ngIf=\"order.status_order != 25 && show\">\n      <ion-button mode=\"ios\" color=\"primary\" size=\"small\"\n         class=\"ion-margin-top ion-text-center\" style=\"margin: auto;\">\n        Iniciar\n      </ion-button>\n    </div>\n    \n  </ion-card-content>\n</ion-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/events/events.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/events/events.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensFormsEventsEventsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\" style=\"position: relative;\" mode=\"ios\">\n    <ion-item lines=\"none\" color=\"primary\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-avatar style=\"width: 40px;\n    height: 40px;\">\n        <ion-img src=\"assets/imgs/avatar.svg\"></ion-img>\n\n      </ion-avatar>\n      <ion-title >{{order.customer_name}} {{order.customer_last_name}}\n      </ion-title>\n    </ion-item>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content forceOverscroll=\"true\">\n  <div style=\"text-align: right;float:right;clear: both;\" *ngFor=\"let item of events\">\n    <ion-img [src]=\"item.photo\" alt=\"\" *ngIf=\"item.photo\" style=\"width: 200px;\n    height: 100px;\n    margin-right: 10px;\n    float: right;\n    margin-bottom: 10px;\" (click)=\"viewImage(item.photo)\"></ion-img>\n    <p style=\"margin-bottom: 5px;font-size: 1em;margin-right: 10px;\" *ngIf=\"item.description\">\n\n      <span style=\"text-align: right;\n      background: #49158c;\n      padding: 9px;\n      border-radius: 10px;\n      color: white;\n      display: block;\n      width: max-content;\n      float: right;\n      max-width: 300px;\">{{item.description}}<ion-icon\n          [name]=\"!item.sending ? 'checkmark-outline': 'checkmark-done-outline'\"></ion-icon></span>\n    </p>\n    <p class=\"grey-color-text\" style=\"margin-bottom: 5px;font-size: 1em; margin-right: 10px;clear: both;\">\n      {{ item.created_at | date:'HH:MM'  }}</p>\n  </div>\n</ion-content>\n<ion-toolbar *ngIf=\"(order.status_order !=25 && order.status_order !=31)\">\n  <comment [order]=\"order\" [events]=\"events\" [latitude]=\"latitude\" [longitude]=\"longitude\" (scroll)=\"scrollToBottom()\">\n  </comment>\n</ion-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/image/image.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/image/image.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensFormsImageImagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\" style=\"position: relative;\" mode=\"ios\">\n    <ion-title style=\"position: absolute; left: 5px;bottom:14px\">Foto\n    </ion-title>\n    <ion-button (click)=\"dismiss()\" style=\"position: absolute; right: 5px;bottom:5px\">\n      <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen] =\"true\" class=\"custom-img\">\n  <ion-thumbnail style=\"width:100%;height:100%\">\n    <ion-img [src]=\"image\" alt=\"\" style=\"width:100%;height:100%\" ></ion-img>\n  </ion-thumbnail>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/map/map.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/map/map.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensFormsMapMapPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\" style=\"position: relative;\">\n    <ion-title style=\"position: absolute; left: 5px;bottom:14px\">Mapa\n    </ion-title>\n    <ion-button (click)=\"dismiss()\" style=\"position: absolute; right: 5px;bottom:5px\">\n      <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\" style=\"width: 100%;height: 100%;\"></div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/view-detail/view-detail.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/view-detail/view-detail.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensFormsViewDetailViewDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\" style=\"position: relative;\" mode=\"ios\">\n    <ion-item lines=\"none\" color=\"primary\">\n      <ion-title>ORDEN #{{order.id}}\n      </ion-title>\n      <ion-button (click)=\"dismiss()\" slot=\"end\" style=\"width: 40px;\"\n        *ngIf=\"(order.status_order == 25 || order.status_order == 31 || order.status_order == 48 || !detailActive)\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-item>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"time\" *ngIf=\"initTimerB && order.service_type_id != 3\">\n  <div id=\"hms\">{{timer_hour}}</div>\n</div>\n<!--- the order service type is time-->\n<ion-content *ngIf=\"order.service_type_id == 3\">\n  <ng-container>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"order.status_order !=25 && order.status_order !=31 \"\n      (click)=\"cancel()\">\n      <ion-fab-button color=\"danger\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" (click)=\"viewEvent(order)\">\n      <ion-fab-button color=\"primary\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ng-container>\n\n  <div style=\"position: absolute;\n  top:0px;left: 0;right: 0;margin: auto;width: 80%;height: 400px;\">\n    <h2 class=\"ion-text-center\" style=\"text-align: center;\n  color: #2dd36f;\n  font-weight: bold;\">En Servicio</h2>\n    <p class=\"ion-padding ion-text-center\" style=\" font-size: 1em;\n    font-weight: 900;\n    padding: 0;\n    margin-top: 0;\n\"> {{initTime | date:'shortTime'}} - {{detailActive.departure_time}}</p>\n\n  </div>\n</ion-content>\n<!--- the order service type is different fron time-->\n<ion-content [fullscreen]=\"true\" *ngIf=\"order.service_type_id != 3\">\n  <ng-container>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"order.status_order !=25 && order.status_order !=31  \"\n      (click)=\"cancel()\">\n      <ion-fab-button color=\"danger\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" style=\"right: 75px;\"\n      *ngIf=\"order.status_order !=25 && order.status_order !=31\">\n      <ion-fab-button color=\"warning\">\n        <ion-img src=\"assets/imgs/support-icon.jpg\" style=\"width: 35px;\"></ion-img>\n      </ion-fab-button>\n    </ion-fab>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" (click)=\"viewEvent(order)\">\n      <ion-fab-button color=\"primary\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ng-container>\n\n\n\n  <div #map id=\"map\" style=\"width: 100%;height: 100%;\"></div>\n\n</ion-content>\n<!--- Details of the service-->\n<ion-footer [translucent]=\"true\">\n  <ng-container *ngIf=\"order.service_type_id != 3; else elseTemplate3\">\n    <ion-card style=\"position: absolute;\n  bottom: 64px;\n  left: 0;\n  right: 0;\n  margin: auto 10%;\n  padding: -5px;\n  border-radius: 10px;\" *ngIf=\"view_more\"\n      [ngClass]=\"{'min-he': (order.status_order == 25 && order.status_order == 31)}\">\n      <ion-card-content style=\"padding: 0;\">\n        <div>\n          <ion-toolbar *ngIf=\"detailActive ? order.status_order == 31 ? false : true: false\">\n            <ion-item (click)=\"callANumber(detailActive.contact_phone)\" lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <ion-img src=\"assets/imgs/avatar.svg\"></ion-img>\n              </ion-avatar>\n              <ion-label>\n                <p class=\" black-color-text\">{{detailActive.contact_name}} </p>\n                <p class=\"grey-color-text\">Duración: {{ duration_text }}</p>\n              </ion-label>\n\n              <ion-icon name=\"call-outline\" slot=\"end\" color=\"success\" size=\"large\"></ion-icon>\n            </ion-item>\n\n\n          </ion-toolbar>\n          <div style=\"max-height: 500px;overflow: auto;transition: height 2s;\"\n            [ngClass]=\"{'min-he': order.status_order==25 || order.status_order == 31}\">\n            <ion-title class=\"ion-text-center\" *ngIf=\"order.status_order==25 || order.status_order == 31 \">Direcciones\n            </ion-title>\n            <ion-button expand=\"block\"\n              [color]=\"(!detailActive || detailActive.status == 25) || detailActive && detailActive.status == 48  ? 'medium': 'success'\"\n              (click)=\"end(detailActive)\"\n              *ngIf=\"detailActive && (order.status_order !=25 && order.status_order !=31) && order.service_type_id != 3\">\n              <ng-container *ngIf=\"detailActive.loading; else elseTemplate\">\n                <p class=\"ion-text-center ion-no-padding\">{{detailActive.text_loading}}<ion-spinner name=\"crescent\">\n                  </ion-spinner>\n                </p>\n              </ng-container>\n              <ng-template #elseTemplate>\n\n                {{!detailActive || detailActive.status == 25 ? 'FINALIZADO': (detailActive.ended) ? 'FINALIZAR TAREA' :\n                detailActive && detailActive.status == 48 ? 'NO EFECTIVO': 'YA LLEGUÉ'}}\n              </ng-template>\n\n            </ion-button>\n            <ng-container *ngIf=\"(order.status_order != 25 && order.status_order != 31);else elseT \">\n              <ion-card style=\"padding: 0;\n            --background: rgb(239 238 244);\n            border-radius: 20px;\n            box-shadow: none;\" *ngIf=\"detailActive\">\n                <ion-card-content class=\"row\">\n                  <div style=\"width:10%\">\n                    <ion-badge color=\"primary\">{{findLetter() | titlecase}}</ion-badge>\n                  </div>\n                  <div style=\"width: 70%;\">\n                    <p class=\"ion-text-justify black-color-text\">{{detailActive.address}}</p>\n                    <p class=\"ion-text-justify grey-color-text\">{{detailActive.description}}</p>\n                    <p class=\"ion-text-justify black-color-text\" *ngIf=\"order.zapp_store_order==1\" style=\"font-weight: bold;\n                  text-transform: uppercase;\n              \">debes retirar la orden {{order.wc_order_id}}</p>\n                  </div>\n                </ion-card-content>\n                <ng-container *ngIf=\"order.service_type_id == 3\">\n                  <p style=\"padding: 10px;\">Día : {{order.date}}</p>\n                  <p class=\"ion-padding\">{{initTime | date:'shortTime'}} - {{detailActive.departure_time}}</p>\n                  <p style=\"padding: 10px;\">Horas : {{detailActive.number_of_hours}}</p>\n                </ng-container>\n                <p class=\"grey-color-text ion-padding\" *ngIf=\"order.service_type_id != 3\" style=\"padding-right: 0;\n              padding-bottom: 0;\">Cobrar : <ion-label class=\"black-color-text\" style=\"font-weight: bold;\">\n                    <!--WHEN PAYMENT METHOD IS CASH -->\n                    <ng-container>\n\n                    </ng-container>\n\n                    {{(order.payment_method == 'efectivo' ? this.order.zapp_store_order ==1 ?\n                    this.order.total_zapp_store:\n                    order.total: order.payment_method == 'masivo'?(detailActive.declared_value || 0 ) :0) |\n                    currency:undefined:'symbol':'3.0'}}\n                  </ion-label>\n                </p>\n                <p class=\"grey-color-text ion-padding\" *ngIf=\"detailActive.total_charge > 0\" style=\"padding-top: 0;\">\n                  Tiempo de espera : <ion-label class=\"black-color-text\" style=\"font-weight: bold;\">\n                    {{detailActive.total_charge | currency:undefined:'symbol':'3.0' }}</ion-label>\n              </ion-card>\n              <ng-template #name>\n                <p class=\"grey-color-text ion-text-justify\">No hay mas direcciones , puedes finalizar la orden</p>\n              </ng-template>\n\n            </ng-container>\n            <ng-template #elseT>\n              <div style=\"max-height: 227px;\n            min-height: 350px;\">\n                <ion-card *ngFor=\"let item of order.details; let i=index\">\n                  <ion-card-content class=\"row\">\n                    <div style=\"width:10%\">\n                      <ion-badge color=\"primary\">{{az_arr[i] | titlecase}}</ion-badge>\n                    </div>\n                    <div style=\"width: 70%;\">\n                      <p class=\"ion-text-justify black-color-text\">{{item.address}}</p>\n                      <p class=\"ion-text-justify grey-color-text\">{{item.description}}</p>\n                      <ng-container *ngIf=\"order.diligence==1\">\n                        <div>\n                          <p class=\"ion-text-justify black-color-text\">Tiempo de espera:{{item.wait_time}} minutos</p>\n                          <p class=\"ion-text-justify grey-color-text\">Total:{{item.surplus_money}}</p>\n                        </div>\n                      </ng-container>\n                    </div>\n\n\n\n                  </ion-card-content>\n                  <ion-button expand=\"block\" color=\"medium\">\n\n                    {{item.status==25 ? 'FINALIZADO' : item.status==48 ?'NO EFECTIVO':'CANCELADO'}}\n                  </ion-button>\n                </ion-card>\n              </div>\n\n            </ng-template>\n\n          </div>\n        </div>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n    <ion-button class=\"ion-margin-top\" style=\"margin: auto;width: 80%;position: absolute;bottom: 15px; right: 0;\n  left: 0;\" color=\"primary\" (click)=\"viewMore()\" *ngIf=\"detailActive || order.status_order == 25\" expand=\"block\">\n      {{view_more ? 'Ocultar detalle' : 'Ver detalle'}}</ion-button>\n  </ng-container>\n  <ng-template #elseTemplate3>\n    <ion-card class=\"card-absolute-normal white-gray-background\" [ngClass]=\"{'min-he': order.status_order == 25}\">\n      <div class=\"view-detail\" (click)=\"viewMore()\">\n        Información del servicio\n      </div>        \n      <ion-card-content class=\"ion-no-padding\" *ngIf=\"view_more\">\n        <div >\n          \n          <ion-toolbar\n            *ngIf=\"detailActive ? order.status_order == 31 ? false : true: false\"\n            class=\"toolbar\">\n            <ion-item lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <ion-img src=\"assets/imgs/avatar.svg\"\n                  ></ion-img>\n              </ion-avatar>\n              <ion-label>\n                <p class=\" black-color-text\" style=\"font-family: 'Gilroy-ExtraBold' !important;\">{{detailActive.contact_name}}</p>\n              </ion-label>\n\n              <ion-icon style=\"display: none;\" name=\"call-outline\" (click)=\"callANumber(this.order.drivers[0].driver_phone)\" slot=\"end\"\n                color=\"success\" size=\"large\"></ion-icon>\n                <div [class]=\"'status in-process'\" >\n                  En servicio\n                </div>\n            </ion-item>\n            \n\n          </ion-toolbar>\n          <div   style=\"min-height: 200px;\n          max-height: 300px;\">\n\n            <div style=\"    max-height: 235px;\n            overflow-y: scroll;\">\n              <ion-card *ngFor=\"let item of order.details; let i=index\" style=\"    border-radius: 20px;\n              padding: 5px;\n              padding-left: 10px;\n              padding-right: 10px;\n              margin-top: 5px;\n              box-shadow: none;\">\n                <ion-card-content class=\"\" style=\"padding-top: 3px;\n                padding-bottom: 3px;\">\n                   <h2 class=\"ion-text-center\" style=\"width: 100%;\">Horas {{item.number_of_hours}}</h2>\n                \n                   <p style=\"width: 100%;\">Dirección de inicio</p>\n                   <p style=\" font-size: 0.8em;width: 100%;font-weight: bold;\"><span style=\"color: black;\n                     font-weight: 900;\n                     font-family: 'Gilroy-ExtraBold' !important;\">\n                     {{item.address}}\n                     </span>\n                   </p>\n                   <p style=\"font-size: 0.8em;width: 100%;\">Hora de inicio:\n                     <span style=\"color: black;\n                     font-weight: 900;\n                     font-family: 'Gilroy-ExtraBold' !important;\">\n                     {{item.start_time}}\n                     </span>\n                      \n                     </p>\n                   <p style=\"font-size: 0.8em;width: 100%;\">Hora de finalización: \n                     <span style=\"color: black;\n                     font-weight: 900;\n                     font-family: 'Gilroy-ExtraBold' !important;\">\n                     {{item.departure_time}}\n                     </span>\n                   </p>\n                   <ng-container >\n                     <div class=\"time\" *ngIf=\"item.timer\" style=\"width: 100%;\n                     text-align: center;\n                     color: black;\n                     font-weight: 900;\n                     font-family: 'Gilroy-ExtraBold' !important;\" >\n                       <span id=\"hms\" style=\"color: black;\n                       font-weight: 900;\n                       font-family: 'Gilroy-ExtraBold' !important;\n                   \">{{item.timer.hours >9? item.timer.hours:'0'+item.timer.hours}}:{{item.timer.minutes >9? item.timer.minutes:'0'+item.timer.minutes}}:{{item.timer.seconds >9? item.timer.seconds:'0'+item.timer.seconds}}</span>\n                     </div>\n                     <br>\n                     \n                   </ng-container>\n\n                </ion-card-content>\n\n              </ion-card>\n            </div>\n            \n          </div>\n        </div>\n      </ion-card-content>\n\n    </ion-card>\n  </ng-template>\n\n\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-auth-login-login-module */
        "screens-auth-login-login-module").then(__webpack_require__.bind(null,
        /*! ./screens/auth/login/login.module */
        "./src/app/screens/auth/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-auth-signup-signup-module */
        "screens-auth-signup-signup-module").then(__webpack_require__.bind(null,
        /*! ./screens/auth/signup/signup.module */
        "./src/app/screens/auth/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'forgotpassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-auth-forgotpassword-forgotpassword-module */
        "forgotpassword-forgotpassword-module").then(__webpack_require__.bind(null,
        /*! ./screens/auth/forgotpassword/forgotpassword.module */
        "./src/app/screens/auth/forgotpassword/forgotpassword.module.ts")).then(function (m) {
          return m.ForgotpasswordPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | screens-screens-tabs-home-home-module */
        [__webpack_require__.e("common"), __webpack_require__.e("screens-screens-tabs-home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./screens/screens-tabs/home/home.module */
        "./src/app/screens/screens-tabs/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-screens-tabs-profile-profile-module */
        "screens-screens-tabs-profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./screens/screens-tabs/profile/profile.module */
        "./src/app/screens/screens-tabs/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'documents',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | screens-screens-tabs-documents-documents-module */
        [__webpack_require__.e("default~screens-forms-other-documents-other-documents-module~screens-screens-tabs-documents-documents-module"), __webpack_require__.e("screens-screens-tabs-documents-documents-module")]).then(__webpack_require__.bind(null,
        /*! ./screens/screens-tabs/documents/documents.module */
        "./src/app/screens/screens-tabs/documents/documents.module.ts")).then(function (m) {
          return m.DocumentsPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'personal-information',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-screens-tabs-personal-information-personal-information-module */
        "screens-screens-tabs-personal-information-personal-information-module").then(__webpack_require__.bind(null,
        /*! ./screens/screens-tabs/personal-information/personal-information.module */
        "./src/app/screens/screens-tabs/personal-information/personal-information.module.ts")).then(function (m) {
          return m.PersonalInformationPageModule;
        });
      }
    }, {
      path: 'vehicle-information',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | screens-screens-tabs-vehicle-information-vehicle-information-module */
        [__webpack_require__.e("common"), __webpack_require__.e("screens-screens-tabs-vehicle-information-vehicle-information-module")]).then(__webpack_require__.bind(null,
        /*! ./screens/screens-tabs/vehicle-information/vehicle-information.module */
        "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.module.ts")).then(function (m) {
          return m.VehicleInformationPageModule;
        });
      }
    }, {
      path: 'change-password',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | screens-screens-tabs-change-password-change-password-module */
        [__webpack_require__.e("common"), __webpack_require__.e("screens-screens-tabs-change-password-change-password-module")]).then(__webpack_require__.bind(null,
        /*! ./screens/screens-tabs/change-password/change-password.module */
        "./src/app/screens/screens-tabs/change-password/change-password.module.ts")).then(function (m) {
          return m.ChangePasswordPageModule;
        });
      }
    }, {
      path: 'view-detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-forms-view-detail-view-detail-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./screens/forms/view-detail/view-detail.module */
        "./src/app/screens/forms/view-detail/view-detail.module.ts")).then(function (m) {
          return m.ViewDetailPageModule;
        });
      }
    }, {
      path: 'detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-forms-detail-detail-module */
        "screens-forms-detail-detail-module").then(__webpack_require__.bind(null,
        /*! .//screens/forms/detail/detail.module */
        "./src/app/screens/forms/detail/detail.module.ts")).then(function (m) {
          return m.DetailPageModule;
        });
      }
    }, {
      path: 'events',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-forms-events-events-module */
        "screens-forms-events-events-module").then(__webpack_require__.bind(null,
        /*! .//screens/forms/events/events.module */
        "./src/app/screens/forms/events/events.module.ts")).then(function (m) {
          return m.EventsPageModule;
        });
      }
    }, {
      path: 'map',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-forms-map-map-module */
        "screens-forms-map-map-module").then(__webpack_require__.bind(null,
        /*! .//screens/forms/map/map.module */
        "./src/app/screens/forms/map/map.module.ts")).then(function (m) {
          return m.MapPageModule;
        });
      }
    }, {
      path: 'image',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-forms-image-image-module */
        "screens-forms-image-image-module").then(__webpack_require__.bind(null,
        /*! .//screens/forms/image/image.module */
        "./src/app/screens/forms/image/image.module.ts")).then(function (m) {
          return m.ImagePageModule;
        });
      }
    }, {
      path: 'history',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-screens-tabs-history-history-module */
        "screens-screens-tabs-history-history-module").then(__webpack_require__.bind(null,
        /*! ./screens/screens-tabs/history/history.module */
        "./src/app/screens/screens-tabs/history/history.module.ts")).then(function (m) {
          return m.HistoryPageModule;
        });
      }
    }, {
      path: 'other-documents',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | screens-forms-other-documents-other-documents-module */
        [__webpack_require__.e("default~screens-forms-other-documents-other-documents-module~screens-screens-tabs-documents-documents-module"), __webpack_require__.e("screens-forms-other-documents-other-documents-module")]).then(__webpack_require__.bind(null,
        /*! .//screens/forms/other-documents/other-documents.module */
        "./src/app/screens/forms/other-documents/other-documents.module.ts")).then(function (m) {
          return m.OtherDocumentsPageModule;
        });
      }
    }, {
      path: 'about',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-screens-tabs-about-about-module */
        "screens-screens-tabs-about-about-module").then(__webpack_require__.bind(null,
        /*! ./screens/screens-tabs/about/about.module */
        "./src/app/screens/screens-tabs/about/about.module.ts")).then(function (m) {
          return m.AboutPageModule;
        });
      }
    }, {
      path: 'request-location-permission',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | screens-forms-request-location-permission-request-location-permission-module */
        [__webpack_require__.e("common"), __webpack_require__.e("screens-forms-request-location-permission-request-location-permission-module")]).then(__webpack_require__.bind(null,
        /*! ./screens/forms/request-location-permission/request-location-permission.module */
        "./src/app/screens/forms/request-location-permission/request-location-permission.module.ts")).then(function (m) {
          return m.RequestLocationPermissionPageModule;
        });
      }
    }, {
      path: 'liquidation',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | screens-screens-tabs-liquidation-liquidation-module */
        "screens-screens-tabs-liquidation-liquidation-module").then(__webpack_require__.bind(null,
        /*! ./screens/screens-tabs/liquidation/liquidation.module */
        "./src/app/screens/screens-tabs/liquidation/liquidation.module.ts")).then(function (m) {
          return m.LiquidationPageModule;
        });
      }
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_fcm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/fcm.service */
    "./src/app/services/fcm.service.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _services_background_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/background.service */
    "./src/app/services/background.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/ui.service */
    "./src/app/services/ui.service.ts");

    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"],
        Network = _capacitor_core__WEBP.Network,
        LocalNotifications = _capacitor_core__WEBP.LocalNotifications;

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, fcm, background_mode, location, router, ui) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.fcm = fcm;
        this.background_mode = background_mode;
        this.location = location;
        this.router = router;
        this.ui = ui;
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        Network.addListener('networkStatusChange', function (status) {
          _this2.networkStatus = status;
          console.log("Network status changed", status);
          localStorage.setItem("network_status", JSON.stringify(status));

          if (status.connected) {// location.reload()
          }
        });
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.toggleDarkTheme(prefersDark.matches); // Listen for changes to the prefers-color-scheme media query

        prefersDark.addListener(function (mediaQuery) {
          return _this2.toggleDarkTheme(mediaQuery.matches);
        }); // Add or remove the "dark" class based on if the media query matches

        document.body.classList.toggle('dark', true);
        this.backButtonEvent();
        this.initializeNetwork();
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "toggleDarkTheme",
        value: function toggleDarkTheme(shouldAdd) {
          console.log("shouldAdd", shouldAdd);
          document.body.classList.toggle('dark', shouldAdd);
        }
      }, {
        key: "backButtonEvent",
        value: function backButtonEvent() {
          var _this3 = this;

          this.platform.backButton.subscribeWithPriority(0, function () {
            _this3.routerOutlets.forEach(function (outlet) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log("Url ".concat(this.router.url));

                        if (this.router.url.includes('tabs/home')) {
                          _context.next = 6;
                          break;
                        }

                        _context.next = 4;
                        return this.location.back();

                      case 4:
                        _context.next = 7;
                        break;

                      case 6:
                        if (this.router.url.includes('tabs/home')) {
                          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
                            this.lastTimeBackPress = new Date().getTime();
                            this.presentAlertConfirm();
                          } else {
                            navigator['app'].exitApp();
                          }
                        }

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          });
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.ui.presentAlert({
                      // header: 'Confirm!',
                      message: 'Está seguro de querer salir de la app?',
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Cerrar Aplicación',
                        handler: function handler() {
                          navigator['app'].exitApp();
                        }
                      }]
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "initializeNetwork",
        value: function initializeNetwork() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Network.getStatus();

                  case 2:
                    this.networkStatus = _context3.sent;
                    localStorage.setItem("network_status", JSON.stringify(this.networkStatus));
                    console.log("Network status ", this.networkStatus);

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this4 = this;

          this.platform.ready().then(function () {
            _this4.statusBar.styleDefault();

            _this4.splashScreen.hide();

            _this4.fcm.initPush(); //this.backgroundMode.enable();

          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _services_fcm_service__WEBPACK_IMPORTED_MODULE_5__["FcmService"]
      }, {
        type: _services_background_service__WEBPACK_IMPORTED_MODULE_7__["BackgroundService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _services_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"])], AppComponent.prototype, "routerOutlets", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _modules_aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./modules/aplication-pipe-module/aplication-pipe-module.module */
    "./src/app/modules/aplication-pipe-module/aplication-pipe-module.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _modules_common_components_common_components_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./modules/common-components/common-components.module */
    "./src/app/modules/common-components/common-components.module.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_foreground_service_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/foreground-service/ngx */
    "./node_modules/@ionic-native/foreground-service/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js"); // import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';


    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__["AngularFireStorageModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _modules_common_components_common_components_module__WEBPACK_IMPORTED_MODULE_15__["CommonComponentsModule"], _modules_aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_13__["AplicationPipeModuleModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_18__["CallNumber"], _ionic_native_foreground_service_ngx__WEBPACK_IMPORTED_MODULE_19__["ForegroundService"], // BackgroundGeolocation,
      _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_20__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_21__["FileTransfer"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_22__["InAppBrowser"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_23__["FileOpener"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_24__["Diagnostic"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/comment/comment.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/comment/comment.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommentCommentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/comment/comment.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/comment/comment.component.ts ***!
    \*********************************************************/

  /*! exports provided: CommentComponent */

  /***/
  function srcAppComponentsCommentCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentComponent", function () {
      return CommentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/network-status.service */
    "./src/app/services/network-status.service.ts");

    var CommentComponent = /*#__PURE__*/function () {
      function CommentComponent(ui, request, auth, photo, network) {
        _classCallCheck(this, CommentComponent);

        this.ui = ui;
        this.request = request;
        this.auth = auth;
        this.photo = photo;
        this.network = network;
        this.eventsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.comment_data = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.sending = '';
      }

      _createClass(CommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("Detail", this.order);
        }
      }, {
        key: "uploadPhoto",
        value: function uploadPhoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var _this5 = this;

            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;

                    if (!this.network.getNetworkStatus().connected) {
                      _context7.next = 9;
                      break;
                    }

                    _context7.next = 4;
                    return this.photo.selectImageSource();

                  case 4:
                    _context7.next = 6;
                    return _context7.sent;

                  case 6:
                    this.photo.imageSubject.subscribe(function (image) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                        var _this6 = this;

                        var dat, name_file1, blob_image, image_to_upload, item, id, comment, data, latitude, longitude;
                        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                if (Object.keys(image).length > 0) {
                                  dat = new Date().getTime();
                                  name_file1 = "".concat(dat, "_").concat(this.auth.user.id, ".").concat(image.format);
                                  blob_image = this.photo.dataUrlToBlob(image.dataUrl);
                                  image_to_upload = this.photo.getFileImage(image.dataUrl, name_file1, image.format);
                                  item = this.order.details.find(function (d) {
                                    return d.status != 25;
                                  });
                                  id = item.id;
                                  this.events.push({
                                    order_detail_id: id,
                                    description: "Foto " + item.address,
                                    photo: image.dataUrl,
                                    sending: false
                                  });
                                  this.updateEvents();
                                  this.scroll.emit();
                                  this.sending = 'yes';
                                  comment = this.comment_data.value.comment;
                                  data = new FormData();
                                  latitude = localStorage.getItem("latitude");
                                  longitude = localStorage.getItem("longitude");
                                  data.append("order_detail_id", id);
                                  data.append("latitude", latitude.toString());
                                  data.append("longitude", longitude.toString());
                                  data.append("description", "Foto " + item.address);
                                  data.append("user_id", this.auth.user.id.toString());
                                  data.append('photo', blob_image);
                                  this.request.post('driver/register_event', data).subscribe(function (res) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                                      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                                        while (1) {
                                          switch (_context4.prev = _context4.next) {
                                            case 0:
                                              this.events[this.events.length - 1].sending = true;
                                              this.updateEvents();
                                              this.sending = undefined;

                                            case 3:
                                            case "end":
                                              return _context4.stop();
                                          }
                                        }
                                      }, _callee4, this);
                                    }));
                                  }, function (err) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                                      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                                        while (1) {
                                          switch (_context5.prev = _context5.next) {
                                            case 0:
                                              this.events.pop();
                                              this.updateEvents();
                                              _context5.next = 4;
                                              return this.ui.presentAlert({
                                                mode: 'ios',
                                                header: 'No se ha podido subir la imagen',
                                                buttons: [{
                                                  text: 'Aceptar',
                                                  role: 'cancel',
                                                  cssClass: 'secondary',
                                                  handler: function handler(blah) {}
                                                }]
                                              });

                                            case 4:
                                              console.log("Error", err);
                                              this.sending = undefined;

                                            case 6:
                                            case "end":
                                              return _context5.stop();
                                          }
                                        }
                                      }, _callee5, this);
                                    }));
                                  });
                                }

                              case 1:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    });
                    _context7.next = 10;
                    break;

                  case 9:
                    this.ui.showToast("Verifique su conexión");

                  case 10:
                    _context7.next = 17;
                    break;

                  case 12:
                    _context7.prev = 12;
                    _context7.t0 = _context7["catch"](0);
                    _context7.next = 16;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: 'No se ha podido subir la imagen',
                      buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }]
                    });

                  case 16:
                    console.log("Error", _context7.t0);

                  case 17:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[0, 12]]);
          }));
        }
      }, {
        key: "controls",
        get: function get() {
          return this.comment_data.controls;
        }
      }, {
        key: "updateEvents",
        value: function updateEvents() {
          this.eventsUpdate.emit(this.events);
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var _this7 = this;

            var id, comment, data, latitude, longitude;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (this.network.getNetworkStatus().connected) {
                      id = this.order.details.find(function (d) {
                        return d.status != 25;
                      }).id;
                      comment = this.comment_data.value.comment;
                      this.events.push({
                        order_detail_id: id,
                        description: comment,
                        sending: false
                      });
                      this.comment_data.reset();
                      this.sending = 'yes';
                      this.updateEvents();
                      this.scroll.emit(); // const coordinates = await Geolocation.getCurrentPosition();
                      // const {
                      //   latitude,
                      //   longitude
                      // } = coordinates.coords;

                      data = new FormData();
                      latitude = localStorage.getItem("latitude");
                      longitude = localStorage.getItem("longitude");
                      data.append("order_detail_id", id);
                      data.append("latitude", latitude.toString());
                      data.append("longitude", longitude.toString());
                      data.append("description", comment);
                      data.append("user_id", this.auth.user.id.toString());
                      this.request.post('driver/register_event', data).subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  this.events[this.events.length - 1].sending = true;
                                  this.updateEvents();
                                  this.scroll.emit();
                                  this.comment_data.reset();
                                  this.sending = undefined;

                                case 5:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  console.log("Error", err);
                                  this.events.pop();
                                  this.updateEvents();
                                  this.sending = undefined;
                                  this.ui.showToast("No se ha podido enviar el comentario");

                                case 5:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9, this);
                        }));
                      });
                    } else {
                      this.ui.showToast("Verifique su conexión");
                    }

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }]);

      return CommentComponent;
    }();

    CommentComponent.ctorParameters = function () {
      return [{
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_6__["PhotoService"]
      }, {
        type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CommentComponent.prototype, "order", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CommentComponent.prototype, "events", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CommentComponent.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CommentComponent.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CommentComponent.prototype, "eventsUpdate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CommentComponent.prototype, "scroll", void 0);
    CommentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'comment',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./comment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment/comment.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./comment.component.scss */
      "./src/app/components/comment/comment.component.scss"))["default"]]
    })], CommentComponent);
    /***/
  },

  /***/
  "./src/app/components/order-card/order-card.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/order-card/order-card.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsOrderCardOrderCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItY2FyZC9vcmRlci1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/order-card/order-card.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/order-card/order-card.component.ts ***!
    \***************************************************************/

  /*! exports provided: OrderCardComponent */

  /***/
  function srcAppComponentsOrderCardOrderCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderCardComponent", function () {
      return OrderCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/realtime.service */
    "./src/app/services/realtime.service.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");
    /* harmony import */


    var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/network-status.service */
    "./src/app/services/network-status.service.ts");
    /* harmony import */


    var src_app_services_days_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/days.service */
    "./src/app/services/days.service.ts");
    /* harmony import */


    var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/place.service */
    "./src/app/services/place.service.ts");
    /* harmony import */


    var src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/screens/forms/view-detail/view-detail.page */
    "./src/app/screens/forms/view-detail/view-detail.page.ts");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/services/geolocation.service */
    "./src/app/services/geolocation.service.ts");

    var _capacitor_core__WEBP2 = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"],
        Geolocation = _capacitor_core__WEBP2.Geolocation,
        Haptics = _capacitor_core__WEBP2.Haptics,
        Modals = _capacitor_core__WEBP2.Modals,
        LocalNotifications = _capacitor_core__WEBP2.LocalNotifications;

    var OrderCardComponent = /*#__PURE__*/function () {
      function OrderCardComponent(realtime, request, auth, ui, network, days, place, geolocation) {
        _classCallCheck(this, OrderCardComponent);

        this.realtime = realtime;
        this.request = request;
        this.auth = auth;
        this.ui = ui;
        this.network = network;
        this.days = days;
        this.place = place;
        this.geolocation = geolocation;
        this.near = true;
        this.spinner = false;
        this.orders = [];
        this.otherOrders = [];
      }

      _createClass(OrderCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.near = this.near == "true" ? true : false;
        }
      }, {
        key: "reject",
        value: function reject(order) {
          this.orders = this.orders.filter(function (o) {
            return o.id != order.id;
          });
          console.log("Orders", this.orders);
          this.realtime.getMassivesOrders().update({
            new_order: 0
          });
          this.auth.person.ordersNearYou = this.orders;
          this.auth.setPerson(this.auth.person);
        }
      }, {
        key: "accept",
        value: function accept(order) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
            var _this8 = this;

            var loader, latitude, longitude, position, data;
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.ui.loading("Por favor espere...");

                  case 2:
                    loader = _context14.sent;
                    _context14.prev = 3;

                    if (!(localStorage.getItem("latitude") && localStorage.getItem("longitude"))) {
                      _context14.next = 9;
                      break;
                    }

                    latitude = localStorage.getItem("latitude");
                    longitude = localStorage.getItem("longitude");
                    _context14.next = 14;
                    break;

                  case 9:
                    _context14.next = 11;
                    return Geolocation.getCurrentPosition({// enableHighAccuracy: true
                    });

                  case 11:
                    position = _context14.sent;
                    latitude = position.coords.latitude;
                    longitude = position.coords.longitude;

                  case 14:
                    data = new FormData();
                    data.append("order_id", order.id);
                    data.append("latitude", latitude.toString());
                    data.append("longitude", longitude.toString());
                    data.append("description", "Orden aceptada");
                    data.append("user_id", this.auth.user.id.toString());
                    this.request.post("driver/accept_near_order", data).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
                        var _this9 = this;

                        var details;
                        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return loader;

                              case 2:
                                _context11.sent.dismiss();

                                this.realtime.getNewOrder().update({
                                  proximity: 1
                                });
                                details = order.details ? order.details : order.detail;
                                details = details.map(function (d) {
                                  return Object.assign(Object.assign({}, d), {
                                    status: 24
                                  });
                                });
                                order.details = details;
                                details.forEach(function (detail) {
                                  _this9.realtime.getFirebaseCollection("order_detail_report/".concat(order.id, "/").concat(detail.id)).update(Object.assign(Object.assign({}, detail), {
                                    status: 24
                                  }));
                                });
                                this.orders = this.orders.filter(function (o) {
                                  return o.id != order.id;
                                });
                                this.auth.person.ordersNearYou = this.orders;
                                this.auth.setPerson(this.auth.person);
                                this.otherOrders.unshift(order);
                                this.viewDetail(order);

                              case 13:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                          while (1) {
                            switch (_context12.prev = _context12.next) {
                              case 0:
                                _context12.next = 2;
                                return loader;

                              case 2:
                                _context12.sent.dismiss();

                                console.log("ddsd", err);

                                if (!err.error.messages) {
                                  _context12.next = 7;
                                  break;
                                }

                                _context12.next = 7;
                                return this.ui.presentAlert({
                                  mode: 'ios',
                                  header: 'No se ha podido iniciar el servicio',
                                  message: err.error.messages[0],
                                  buttons: [{
                                    text: 'Aceptar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function handler(blah) {}
                                  }]
                                });

                              case 7:
                              case "end":
                                return _context12.stop();
                            }
                          }
                        }, _callee12, this);
                      }));
                    });
                    _context14.next = 29;
                    break;

                  case 23:
                    _context14.prev = 23;
                    _context14.t0 = _context14["catch"](3);
                    _context14.next = 27;
                    return loader;

                  case 27:
                    _context14.sent.dismiss();

                    this.ui.presentAlert({
                      mode: 'ios',
                      header: "Advertencia",
                      message: "Su ubicación no está disponible, por favor verificar el estado del GPS",
                      buttons: [{
                        text: 'Aceptar',
                        cssClass: 'secondary',
                        handler: function handler(res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                              while (1) {
                                switch (_context13.prev = _context13.next) {
                                  case 0:
                                  case "end":
                                    return _context13.stop();
                                }
                              }
                            }, _callee13);
                          }));
                        }
                      }]
                    });

                  case 29:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this, [[3, 23]]);
          }));
        }
      }, {
        key: "isAboutToEnd",
        value: function isAboutToEnd(item) {
          return item.details.every(function (d) {
            return d.status == 25 || d.status == 48;
          });
        }
      }, {
        key: "isOrderActive",
        value: function isOrderActive(order) {
          //Validate if the order is currently active
          var date_service = new Date(order.date);
          var today = new Date();
          var today_date = {
            day: today.getDate(),
            month: today.getMonth() + 1,
            year: today.getFullYear()
          };
          var date_split = order.date.split("-");
          var date_service_date = {
            day: Number(date_split[2]),
            month: Number(date_split[1]),
            year: Number(date_split[0])
          };
          var isToday = Object.keys(today_date).every(function (key) {
            return today_date[key] == date_service_date[key];
          });

          if (isToday) {
            if (order.service_type_id == 3) {
              var details = order.detail ? order.detail : order.details;
              var start_time = order.detail ? order.detail[0].start_time_military_format : order.details[0].start_time_military_format;
              console.log("Start time difference", start_time);
              var now = new Date();
              var now_hour = now.getHours() + ":" + now.getMinutes();
              var start_time_split = start_time.split(" ");
              var start_time_value = start_time_split.length > 1 ? start_time_split[1] : start_time_split[0];
              var differenceInHours = this.days.getHourDiff(start_time_value, now_hour);
              console.log("Difference", differenceInHours);
              var id = Math.round(Math.random() * 100);
              /**
               * This validation calculate the difference and its
               * true when current time is  after the start_time
               */

              if (differenceInHours >= 0) {
                return {
                  active: true,
                  message: ""
                };
              } else {
                return {
                  active: false,
                  message: "Debe estar en la dirección en el horario establecido"
                };
              }
            } else {
              return {
                active: true,
                message: ""
              };
            }
          } else {
            return {
              active: false,
              message: "El día del servicio ha pasado "
            };
          }
        }
      }, {
        key: "viewDetail",
        value: function viewDetail(order) {
          var massive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
            var _this10 = this;

            var _yield$this$isOrderAc, message, active, loader, current_latitude, current_longitude, modal, _modal;

            return _regeneratorRuntime().wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    console.log("Order", order);

                    if (!this.network.getNetworkStatus().connected) {
                      _context18.next = 54;
                      break;
                    }

                    if (massive) {
                      _context18.next = 52;
                      break;
                    }

                    if (!(this.auth.user.available != 0)) {
                      _context18.next = 51;
                      break;
                    }

                    if (this.isAboutToEnd(order)) {
                      _context18.next = 49;
                      break;
                    }

                    if (!(order.status_order == 22 || order.status_order == 23)) {
                      _context18.next = 42;
                      break;
                    }

                    if (!(order.service_type_id == 3)) {
                      _context18.next = 32;
                      break;
                    }

                    _context18.next = 9;
                    return this.isOrderActive(order);

                  case 9:
                    _yield$this$isOrderAc = _context18.sent;
                    message = _yield$this$isOrderAc.message;
                    active = _yield$this$isOrderAc.active;

                    if (!active) {
                      _context18.next = 28;
                      break;
                    }

                    _context18.next = 15;
                    return this.ui.loading("Obteniendo ubicación...");

                  case 15:
                    loader = _context18.sent;
                    _context18.prev = 16;
                    //Validate if te user is near to the address
                    this.geolocation.getCurrentPosition().then(function (data) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
                        var _this11 = this;

                        var current_latitude, current_longitude, latitude, longitude, distance;
                        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                          while (1) {
                            switch (_context16.prev = _context16.next) {
                              case 0:
                                _context16.next = 2;
                                return loader;

                              case 2:
                                _context16.sent.dismiss();

                                current_latitude = data.coords.latitude;
                                current_longitude = data.coords.longitude;
                                latitude = order.details[0].latitude;
                                longitude = order.details[0].longitude;
                                distance = this.place.calcCrow(latitude, longitude, current_latitude, current_longitude);
                                console.log("Distance", distance);

                                if (!(distance <= 1)) {
                                  _context16.next = 15;
                                  break;
                                }

                                console.log("Está ahí");
                                _context16.next = 13;
                                return this.ui.presentAlert({
                                  mode: 'ios',
                                  header: '¿Quieres iniciar el viaje?',
                                  buttons: [{
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function handler(blah) {
                                      console.log('Confirm Cancel: blah');
                                    }
                                  }, {
                                    text: 'Sí',
                                    handler: function handler() {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                                        var _this12 = this;

                                        var modal;
                                        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                                          while (1) {
                                            switch (_context15.prev = _context15.next) {
                                              case 0:
                                                this.realtime.getFirebaseCollectionObject("order_gps/".concat(order.id, "/").concat(this.auth.user.id)).set({
                                                  order: order.id,
                                                  key: this.auth.user.id,
                                                  vehicleId: this.auth.vehicles.id,
                                                  lat: current_latitude,
                                                  lng: current_longitude,
                                                  oldLat: current_latitude,
                                                  oldLng: current_longitude,
                                                  angle: 0,
                                                  // last_active: Date.now(),
                                                  code: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].VERSION_NAME
                                                });
                                                localStorage.setItem("current_order", JSON.stringify(order));
                                                _context15.next = 4;
                                                return this.ui.presentModal(src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_10__["ViewDetailPage"], {
                                                  order: order
                                                }, 'custom-modal');

                                              case 4:
                                                modal = _context15.sent;
                                                modal.onDidDismiss().then(function (data) {
                                                  _this12.loadData();
                                                });

                                              case 6:
                                              case "end":
                                                return _context15.stop();
                                            }
                                          }
                                        }, _callee15, this);
                                      }));
                                    }
                                  }]
                                });

                              case 13:
                                _context16.next = 17;
                                break;

                              case 15:
                                _context16.next = 17;
                                return this.ui.presentAlert({
                                  mode: 'ios',
                                  header: 'Advertencia',
                                  message: 'Debe estar en el punto para iniciar el servicio',
                                  buttons: [{
                                    text: 'Aceptar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function handler(blah) {
                                      console.log('Confirm Cancel: blah');
                                    }
                                  }]
                                });

                              case 17:
                              case "end":
                                return _context16.stop();
                            }
                          }
                        }, _callee16, this);
                      }));
                    })["catch"](function (e) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
                        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                          while (1) {
                            switch (_context17.prev = _context17.next) {
                              case 0:
                                _context17.next = 2;
                                return loader;

                              case 2:
                                _context17.sent.dismiss();

                              case 3:
                              case "end":
                                return _context17.stop();
                            }
                          }
                        }, _callee17);
                      }));
                    });
                    _context18.next = 26;
                    break;

                  case 20:
                    _context18.prev = 20;
                    _context18.t0 = _context18["catch"](16);
                    _context18.next = 24;
                    return loader;

                  case 24:
                    _context18.sent.dismiss();

                    console.log("Error", _context18.t0);

                  case 26:
                    _context18.next = 30;
                    break;

                  case 28:
                    _context18.next = 30;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: 'Advertencia',
                      message: message,
                      buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }]
                    });

                  case 30:
                    _context18.next = 40;
                    break;

                  case 32:
                    current_latitude = parseFloat(localStorage.getItem("latitude"));
                    current_longitude = parseFloat(localStorage.getItem("longitude"));
                    this.realtime.getFirebaseCollectionObject("order_gps/".concat(order.id, "/").concat(this.auth.user.id)).set({
                      order: order.id,
                      key: this.auth.user.id,
                      vehicleId: this.auth.vehicles.id,
                      lat: current_latitude,
                      lng: current_longitude,
                      oldLat: current_latitude,
                      oldLng: current_longitude,
                      angle: 0,
                      // last_active: Date.now(),
                      code: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].VERSION_NAME
                    });
                    localStorage.setItem("current_order", JSON.stringify(order));
                    _context18.next = 38;
                    return this.ui.presentModal(src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_10__["ViewDetailPage"], {
                      order: order,
                      latLng: this.latLng
                    }, 'custom-modal');

                  case 38:
                    modal = _context18.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this10.loadData();
                    });

                  case 40:
                    _context18.next = 49;
                    break;

                  case 42:
                    if (!(order.status_order != 25 && order.status_order != 48 && order.status_order != 31 && order.status_order != 36 && !this.isAboutToEnd(order))) {
                      _context18.next = 49;
                      break;
                    }

                    //When I'll load the order, I  could update the proximity with it current value on the SQL database
                    this.realtime.getNewOrder().update({
                      proximity: order.proximity
                    });
                    localStorage.setItem("current_order", JSON.stringify(order));
                    _context18.next = 47;
                    return this.ui.presentModal(src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_10__["ViewDetailPage"], {
                      order: order,
                      latLng: this.latLng
                    }, 'custom-modal');

                  case 47:
                    _modal = _context18.sent;

                    _modal.onDidDismiss().then(function (r) {
                      localStorage.removeItem("current_order");

                      _this10.loadData();
                    });

                  case 49:
                    _context18.next = 52;
                    break;

                  case 51:
                    this.ui.showToast("Debe estar disponible");

                  case 52:
                    _context18.next = 55;
                    break;

                  case 54:
                    this.ui.showToast("Por favor, verifique su conexión");

                  case 55:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this, [[16, 20]]);
          }));
        }
      }, {
        key: "filter",
        value: function filter() {
          var orders = this.orders.filter(function (a) {
            return a.status_order != 25;
          }).sort(function (a, b) {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
          });
          return orders;
        }
      }, {
        key: "loadData",
        value: function loadData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
            var _this13 = this;

            var loader;
            return _regeneratorRuntime().wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    if (!this.network.getNetworkStatus().connected) {
                      _context21.next = 10;
                      break;
                    }

                    this.spinner = true;

                    if (localStorage.getItem("current_order")) {
                      _context21.next = 6;
                      break;
                    }

                    _context21.next = 5;
                    return this.ui.loading("Por favor espere...");

                  case 5:
                    loader = _context21.sent;

                  case 6:
                    this.orders = [];
                    this.request.get("driver/list_current_orders/".concat(this.auth.user.id)).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
                        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                          while (1) {
                            switch (_context19.prev = _context19.next) {
                              case 0:
                                this.spinner = false;
                                this.orders = res.data.data;
                                console.log("Orders", this.orders);

                                if (!loader) {
                                  _context19.next = 7;
                                  break;
                                }

                                _context19.next = 6;
                                return loader;

                              case 6:
                                _context19.sent.dismiss();

                              case 7:
                              case "end":
                                return _context19.stop();
                            }
                          }
                        }, _callee19, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
                        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                          while (1) {
                            switch (_context20.prev = _context20.next) {
                              case 0:
                                if (!loader) {
                                  _context20.next = 4;
                                  break;
                                }

                                _context20.next = 3;
                                return loader;

                              case 3:
                                _context20.sent.dismiss();

                              case 4:
                                this.spinner = false;

                              case 5:
                              case "end":
                                return _context20.stop();
                            }
                          }
                        }, _callee20, this);
                      }));
                    });
                    _context21.next = 11;
                    break;

                  case 10:
                    this.ui.showToast("Verifique su conexión");

                  case 11:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }]);

      return OrderCardComponent;
    }();

    OrderCardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_2__["RealtimeService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"]
      }, {
        type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"]
      }, {
        type: src_app_services_days_service__WEBPACK_IMPORTED_MODULE_8__["DaysService"]
      }, {
        type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_9__["PlaceService"]
      }, {
        type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_12__["GeolocationService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderCardComponent.prototype, "near", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderCardComponent.prototype, "available", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderCardComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderCardComponent.prototype, "spinner", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderCardComponent.prototype, "orders", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderCardComponent.prototype, "otherOrders", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderCardComponent.prototype, "latLng", void 0);
    OrderCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-card',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-card/order-card.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-card.component.scss */
      "./src/app/components/order-card/order-card.component.scss"))["default"]]
    })], OrderCardComponent);
    /***/
  },

  /***/
  "./src/app/components/order/order.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/order/order.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsOrderOrderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/order/order.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/order/order.component.ts ***!
    \*****************************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppComponentsOrderOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderComponent = /*#__PURE__*/function () {
      function OrderComponent() {
        _classCallCheck(this, OrderComponent);
      }

      _createClass(OrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (typeof this.show == "undefined") {
            this.show = true;
          }
        }
      }]);

      return OrderComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderComponent.prototype, "order", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderComponent.prototype, "show", void 0);
    OrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/order.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order.component.scss */
      "./src/app/components/order/order.component.scss"))["default"]]
    })], OrderComponent);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, auth) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.auth = auth;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var isLoggedIn = localStorage.getItem('isLoggedIn');

          if (isLoggedIn != 'si') {
            this.router.navigate(['/login']);
            return false;
          } else {
            this.auth.setData();
            return true;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/modules/aplication-pipe-module/aplication-pipe-module.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/aplication-pipe-module/aplication-pipe-module.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: AplicationPipeModuleModule */

  /***/
  function srcAppModulesAplicationPipeModuleAplicationPipeModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AplicationPipeModuleModule", function () {
      return AplicationPipeModuleModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_date_local_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pipes/date-local.pipe */
    "./src/app/pipes/date-local.pipe.ts");
    /* harmony import */


    var src_app_pipes_wrap_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/pipes/wrap-name.pipe */
    "./src/app/pipes/wrap-name.pipe.ts");

    var AplicationPipeModuleModule = /*#__PURE__*/_createClass(function AplicationPipeModuleModule() {
      _classCallCheck(this, AplicationPipeModuleModule);
    });

    AplicationPipeModuleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pipes_date_local_pipe__WEBPACK_IMPORTED_MODULE_3__["DateLocalPipe"], src_app_pipes_wrap_name_pipe__WEBPACK_IMPORTED_MODULE_4__["WrapNamePipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_pipes_date_local_pipe__WEBPACK_IMPORTED_MODULE_3__["DateLocalPipe"], src_app_pipes_wrap_name_pipe__WEBPACK_IMPORTED_MODULE_4__["WrapNamePipe"]]
    })], AplicationPipeModuleModule);
    /***/
  },

  /***/
  "./src/app/modules/common-components/common-components.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/common-components/common-components.module.ts ***!
    \***********************************************************************/

  /*! exports provided: CommonComponentsModule */

  /***/
  function srcAppModulesCommonComponentsCommonComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonComponentsModule", function () {
      return CommonComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_components_order_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/order/order.component */
    "./src/app/components/order/order.component.ts");
    /* harmony import */


    var src_app_components_comment_comment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/comment/comment.component */
    "./src/app/components/comment/comment.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../aplication-pipe-module/aplication-pipe-module.module */
    "./src/app/modules/aplication-pipe-module/aplication-pipe-module.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_components_order_card_order_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/order-card/order-card.component */
    "./src/app/components/order-card/order-card.component.ts");

    var CommonComponentsModule = /*#__PURE__*/_createClass(function CommonComponentsModule() {
      _classCallCheck(this, CommonComponentsModule);
    });

    CommonComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [src_app_components_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"], src_app_components_comment_comment_component__WEBPACK_IMPORTED_MODULE_4__["CommentComponent"], src_app_components_order_card_order_card_component__WEBPACK_IMPORTED_MODULE_8__["OrderCardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_6__["AplicationPipeModuleModule"]],
      exports: [src_app_components_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"], src_app_components_comment_comment_component__WEBPACK_IMPORTED_MODULE_4__["CommentComponent"], src_app_components_order_card_order_card_component__WEBPACK_IMPORTED_MODULE_8__["OrderCardComponent"]]
    })], CommonComponentsModule);
    /***/
  },

  /***/
  "./src/app/pipes/date-local.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/pipes/date-local.pipe.ts ***!
    \******************************************/

  /*! exports provided: DateLocalPipe */

  /***/
  function srcAppPipesDateLocalPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateLocalPipe", function () {
      return DateLocalPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DateLocalPipe = /*#__PURE__*/function () {
      function DateLocalPipe() {
        _classCallCheck(this, DateLocalPipe);
      }

      _createClass(DateLocalPipe, [{
        key: "transform",
        value: function transform(value, format) {
          var countDownDate = new Date(value);

          if (!format) {
            var lang = navigator.language;
            var monthName = countDownDate.toLocaleString(lang, {
              month: 'long'
            });
            var dayName = countDownDate.toLocaleString(lang, {
              weekday: 'long'
            });
            return "".concat(monthName, " ").concat(countDownDate.getDate() + 1, ", ").concat(countDownDate.getFullYear(), " ");
          } else {
            if (format == 'hour') {
              return "".concat(countDownDate.getHours(), ": ").concat(countDownDate.getMinutes(), "  ");
            }

            return '';
          }
        }
      }]);

      return DateLocalPipe;
    }();

    DateLocalPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'dateLocal'
    })], DateLocalPipe);
    /***/
  },

  /***/
  "./src/app/pipes/wrap-name.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/wrap-name.pipe.ts ***!
    \*****************************************/

  /*! exports provided: WrapNamePipe */

  /***/
  function srcAppPipesWrapNamePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WrapNamePipe", function () {
      return WrapNamePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WrapNamePipe = /*#__PURE__*/function () {
      function WrapNamePipe() {
        _classCallCheck(this, WrapNamePipe);
      }

      _createClass(WrapNamePipe, [{
        key: "transform",
        value: function transform(value, max) {
          if (value.length > max) {
            return value.slice(0, max) + ".";
          }

          return value;
        }
      }]);

      return WrapNamePipe;
    }();

    WrapNamePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'wrapName'
    })], WrapNamePipe);
    /***/
  },

  /***/
  "./src/app/screens/forms/events/events.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/screens/forms/events/events.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensFormsEventsEventsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZm9ybXMvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/screens/forms/events/events.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/screens/forms/events/events.page.ts ***!
    \*****************************************************/

  /*! exports provided: EventsPage */

  /***/
  function srcAppScreensFormsEventsEventsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPage", function () {
      return EventsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");
    /* harmony import */


    var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _map_map_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../map/map.page */
    "./src/app/screens/forms/map/map.page.ts");
    /* harmony import */


    var _image_image_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../image/image.page */
    "./src/app/screens/forms/image/image.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/network-status.service */
    "./src/app/services/network-status.service.ts");

    var EventsPage = /*#__PURE__*/function () {
      function EventsPage(ui, photo, auth, request, fb, router, network) {
        _classCallCheck(this, EventsPage);

        this.ui = ui;
        this.photo = photo;
        this.auth = auth;
        this.request = request;
        this.fb = fb;
        this.router = router;
        this.network = network;
        this.personal_information = this.fb.group({
          comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.image = {
          url: "assets/imgs/img-default.jpg",
          format: ""
        };
        this.events = [];
      }

      _createClass(EventsPage, [{
        key: "controls",
        get: function get() {
          return this.personal_information.controls;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this14 = this;

          if (this.network.getNetworkStatus().connected) {
            var loader = this.ui.loading("Por favor espere...");
            this.request.get("driver/events_per_driver/".concat(this.order.id, "/").concat(this.auth.user.id)).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
                return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                  while (1) {
                    switch (_context22.prev = _context22.next) {
                      case 0:
                        _context22.next = 2;
                        return loader;

                      case 2:
                        _context22.sent.dismiss();

                        this.events = res.data;
                        this.events = this.events.map(function (e) {
                          return Object.assign(Object.assign({}, e), {
                            sending: true
                          });
                        });
                        console.log("Events", res.data);
                        this.scrollToBottom();

                      case 7:
                      case "end":
                        return _context22.stop();
                    }
                  }
                }, _callee22, this);
              }));
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
                return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        _context23.next = 2;
                        return loader;

                      case 2:
                        _context23.sent.dismiss();

                        _context23.next = 5;
                        return this.ui.presentAlert({
                          mode: 'ios',
                          header: 'No se ha podido cargar las eventualidades',
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: function handler(blah) {}
                          }]
                        });

                      case 5:
                        console.log("Error", err);

                      case 6:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23, this);
              }));
            });
          } else {
            this.ui.showToast("Verifique su conexión", function () {
              _this14.dismiss();
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {} // ngAfterViewChecked() {
        //   this.scrollToBottom();
        // }

      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
            return _regeneratorRuntime().wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.prev = 0;
                    console.log("Scrolling...");
                    _context24.next = 4;
                    return this.myContent.scrollToBottom(100);

                  case 4:
                    _context24.next = 8;
                    break;

                  case 6:
                    _context24.prev = 6;
                    _context24.t0 = _context24["catch"](0);

                  case 8:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this, [[0, 6]]);
          }));
        }
      }, {
        key: "viewMap",
        value: function viewMap(detail) {
          var modal = this.ui.presentModal(_map_map_page__WEBPACK_IMPORTED_MODULE_8__["MapPage"], {
            detail: detail
          });
        }
      }, {
        key: "viewImage",
        value: function viewImage(image) {
          var modal = this.ui.presentModal(_image_image_page__WEBPACK_IMPORTED_MODULE_9__["ImagePage"], {
            image: image
          });
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.ui.dismiss();
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
            var _this15 = this;

            var comment, data, detail, dat, name_file1, blob_image, image_to_upload, loader;
            return _regeneratorRuntime().wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    comment = this.personal_information.value.comment;
                    data = new FormData();
                    detail = this.order.details.find(function (d) {
                      return d.status == 24;
                    });
                    data.append("order_detail_id", detail.id);
                    data.append("latitude", this.latitude.toString());
                    data.append("longitude", this.longitude.toString());
                    data.append("description", comment);

                    if (!(this.image.url != "assets/imgs/img-default.jpg")) {
                      _context27.next = 15;
                      break;
                    }

                    dat = new Date().getTime();
                    _context27.next = 11;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: 'Imagen',
                      buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }]
                    });

                  case 11:
                    name_file1 = "".concat(dat, "_").concat(this.auth.user.id, ".").concat(this.image.format);
                    blob_image = this.photo.dataUrlToBlob(this.image.url);
                    image_to_upload = this.photo.getFileImage(this.image.url, name_file1, this.image.format);
                    data.append('photo', blob_image);

                  case 15:
                    data.append("user_id", this.auth.user.id.toString());
                    loader = this.ui.loading("Por favor espere...");
                    this.request.post('driver/register_event', data).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
                        var _this16 = this;

                        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                          while (1) {
                            switch (_context25.prev = _context25.next) {
                              case 0:
                                _context25.next = 2;
                                return loader;

                              case 2:
                                _context25.sent.dismiss();

                                this.ui.showToast("Eventualidad registrada", function () {
                                  _this16.dismiss();
                                });

                              case 4:
                              case "end":
                                return _context25.stop();
                            }
                          }
                        }, _callee25, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
                        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                          while (1) {
                            switch (_context26.prev = _context26.next) {
                              case 0:
                                console.log("Error", err);
                                this.ui.showToast("Ha ocurrido un error");

                              case 2:
                              case "end":
                                return _context26.stop();
                            }
                          }
                        }, _callee26, this);
                      }));
                    });

                  case 18:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }]);

      return EventsPage;
    }();

    EventsPage.ctorParameters = function () {
      return [{
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]
      }, {
        type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_11__["NetworkStatusService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventsPage.prototype, "order", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"],
      "static": false
    })], EventsPage.prototype, "myContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventsPage.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventsPage.prototype, "latitude", void 0);
    EventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./events.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/events/events.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./events.page.scss */
      "./src/app/screens/forms/events/events.page.scss"))["default"]]
    })], EventsPage);
    /***/
  },

  /***/
  "./src/app/screens/forms/image/image.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/screens/forms/image/image.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensFormsImageImagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .custom-img ion-img img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9mb3Jtcy9pbWFnZS9pbWFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NjcmVlbnMvZm9ybXMvaW1hZ2UvaW1hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZm9ybXMvaW1hZ2UvaW1hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwe1xuICAgIC5jdXN0b20taW1nIGlvbi1pbWcgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn0iLCI6Om5nLWRlZXAgLmN1c3RvbS1pbWcgaW9uLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/screens/forms/image/image.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/screens/forms/image/image.page.ts ***!
    \***************************************************/

  /*! exports provided: ImagePage */

  /***/
  function srcAppScreensFormsImageImagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagePage", function () {
      return ImagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");

    var ImagePage = /*#__PURE__*/function () {
      function ImagePage(ui) {
        _classCallCheck(this, ImagePage);

        this.ui = ui;
      }

      _createClass(ImagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.ui.dismiss();
        }
      }]);

      return ImagePage;
    }();

    ImagePage.ctorParameters = function () {
      return [{
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImagePage.prototype, "image", void 0);
    ImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./image.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/image/image.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./image.page.scss */
      "./src/app/screens/forms/image/image.page.scss"))["default"]]
    })], ImagePage);
    /***/
  },

  /***/
  "./src/app/screens/forms/map/map.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/screens/forms/map/map.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensFormsMapMapPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZm9ybXMvbWFwL21hcC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/screens/forms/map/map.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/screens/forms/map/map.page.ts ***!
    \***********************************************/

  /*! exports provided: MapPage */

  /***/
  function srcAppScreensFormsMapMapPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPage", function () {
      return MapPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var MapPage = /*#__PURE__*/function () {
      function MapPage(ui, request, auth) {
        _classCallCheck(this, MapPage);

        this.ui = ui;
        this.request = request;
        this.auth = auth;
        this.az_arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        this.distance = "";
        this.duration = "";
        this.details = [];
      }

      _createClass(MapPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
            var loader;
            return _regeneratorRuntime().wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return this.ui.loading("Por favor espere...");

                  case 2:
                    loader = _context28.sent;
                    this.details.push(this.detail);
                    console.log("Details", this.details);
                    this.loadMap(loader);

                  case 6:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "loadMap",
        value: function loadMap(loader) {
          //obtener usos de la API
          var directionsService = new google.maps.DirectionsService();
          var directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true
          }); //puntos de referencia para agregar

          var waypts = [];
          var markers = [];
          var infos = []; //coordenadas de los puntos de ruta

          for (var i = 0; i < this.details.length; i++) {
            var latlng = {
              lat: parseFloat(this.details[i].latitude),
              lng: parseFloat(this.details[i].longitude)
            };
            waypts.push({
              location: latlng,
              stopover: true
            });
          } //creo mapa


          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: {
              lat: waypts[0].location.lat,
              lng: waypts[0].location.lng
            }
          }); //muestro el mapa

          directionsDisplay.setMap(map); //ventanas de informacion

          var infoWindow = new google.maps.InfoWindow(); //coordenadas markers personalizados con ventana de información

          for (var _i = 0; _i < this.details.length; _i++) {
            var _latlng = {
              lat: parseFloat(this.details[_i].latitude),
              lng: parseFloat(this.details[_i].longitude)
            };
            var marker = new google.maps.Marker({
              position: _latlng,
              map: map,
              icon: '../../../assets/imgs/markers/' + this.az_arr[_i] + '.png'
            });
            markers.push(marker); // agrego la informacion de la dirección

            infos.push(this.details[_i].address); // google.maps.event.addListener(marker, 'click', (function(marker, i) {
            //   return function() {
            //       infoWindow.setContent(infos[i]);
            //       infoWindow.open(map, marker);
            //   }
            // })(marker, i));
          } // pregunto si es ida y vuelta el servicio


          var origin, destination, return_pt;
          var n = this.details.length - 1;

          if (this.order && this.order.round_trip === true) {
            origin = {
              lat: waypts[0].location.lat,
              lng: waypts[0].location.lng
            };
            destination = {
              lat: waypts[0].location.lat,
              lng: waypts[0].location.lng
            };
            return_pt = {
              lat: waypts[n].location.lat,
              lng: waypts[n].location.lng
            }; //punto de retorno en km y min

            this.getDistanceMatrix(return_pt, origin);
          } else {
            origin = {
              lat: waypts[0].location.lat,
              lng: waypts[0].location.lng
            };
            destination = {
              lat: waypts[n].location.lat,
              lng: waypts[n].location.lng
            };
            this.getDistanceMatrix(origin, destination);
          } // pinto la ruta


          var _this = this;

          directionsService.route({
            origin: origin,
            destination: destination,
            waypoints: waypts,
            travelMode: google.maps.TravelMode.DRIVING
          }, function (response, status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
              return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      if (!(status === google.maps.DirectionsStatus.OK)) {
                        _context29.next = 7;
                        break;
                      }

                      directionsDisplay.setDirections(response);
                      _context29.next = 4;
                      return loader;

                    case 4:
                      _context29.sent.dismiss();

                      _context29.next = 12;
                      break;

                    case 7:
                      _context29.next = 9;
                      return loader;

                    case 9:
                      _context29.sent.dismiss();

                      _this.ui.showToast("No se ha podido mostrar el mapa. Verifique su conexión.", function () {
                        _this.dismiss();
                      });

                      console.log('Ha fallat la comunicació amb el mapa a causa de: ' + status);

                    case 12:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29);
            }));
          }); //calcular distancia
        }
      }, {
        key: "getDistanceMatrix",
        value: function getDistanceMatrix(origin, destination, loader) {
          var service = new google.maps.DistanceMatrixService();

          var _this = this; //calculo distancia


          service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
          }, function (response, status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
              var distance_text, distance, duration_text, duration;
              return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      if (status != google.maps.DistanceMatrixStatus.OK) {
                        console.log("Error was: " + status);
                      } else {
                        try {
                          distance_text = response.rows[0].elements[0].distance.text;
                          console.log("Distance Text", distance_text);
                          distance = distance_text.substring(0, distance_text.length - 3).replace(",", ".");
                          duration_text = response.rows[0].elements[0].duration.text;
                          console.log("Duration Text", duration_text);
                          duration = duration_text.substring(0, distance_text.length - 4);

                          _this.getCalculateDistance(distance_text, duration_text);
                        } catch (e) {
                          console.log("error", e);
                        }
                      }

                    case 1:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30);
            }));
          });
        }
      }, {
        key: "getCalculateDistance",
        value: function getCalculateDistance(distance, duration) {
          this.distance = distance;
          this.duration = duration;
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.ui.dismiss();
        }
      }]);

      return MapPage;
    }();

    MapPage.ctorParameters = function () {
      return [{
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapPage.prototype, "order", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapPage.prototype, "detail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapPage.prototype, "history", void 0);
    MapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./map.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/map/map.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./map.page.scss */
      "./src/app/screens/forms/map/map.page.scss"))["default"]]
    })], MapPage);
    /***/
  },

  /***/
  "./src/app/screens/forms/view-detail/view-detail.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/screens/forms/view-detail/view-detail.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensFormsViewDetailViewDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".green {\n  color: #25e24e;\n}\n\n.red {\n  color: #dd0707;\n}\n\n.time {\n  height: 47px;\n  display: flex;\n  justify-content: center;\n  background: white;\n}\n\n.card-absolute-normal {\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  margin: auto 5%;\n  padding: -5px;\n  border-radius: 30px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  box-shadow: none;\n}\n\n.card-absolute-normal .view-detail {\n  border-radius: 26px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  left: 0;\n  right: 0;\n  text-transform: uppercase;\n  z-index: 1000;\n  font-weight: 900;\n  text-align: center;\n  color: white;\n  margin: 0;\n  padding: 10px;\n  background: #497cd5;\n}\n\n.card-absolute-normal .toolbar {\n  /* border-bottom-left-radius: 20px; */\n  border-radius: 20px;\n  /* border-bottom-right-radius: 20px; */\n  /* margin-right: 10px; */\n  /* margin-left: 10px; */\n  width: 100%;\n  margin: auto;\n  --background: transparent;\n}\n\n.card-absolute-normal .toolbar ion-item {\n  --background: transparent;\n}\n\n.card-absolute-normal .toolbar ion-item ion-avatar {\n  padding: 2px;\n  border: 2px solid white;\n  width: 70px;\n  height: 70px;\n}\n\n.card-absolute-normal .toolbar ion-item .status {\n  position: absolute;\n  right: 10px;\n  padding-left: 10px;\n  color: white;\n  border-top-left-radius: 30px;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  width: 45%;\n  font-size: 1em;\n  bottom: 0;\n  height: 25px;\n  display: flex;\n  align-items: center;\n}\n\n.card-absolute-normal .toolbar ion-item .status.completed {\n  background-color: red;\n}\n\n.card-absolute-normal .toolbar ion-item .status.in-process {\n  background-color: #0eda0e;\n}\n\n.card-absolute-normal .toolbar ion-item .status.not-effective {\n  background-color: #1e1e2f;\n}\n\n.card-absolute-normal .div-max-height {\n  max-height: 200px;\n  overflow: auto;\n  transition: height 2s;\n}\n\n.card-absolute-normal ion-badge {\n  padding: 5px;\n  margin-left: 5px;\n}\n\n.timeline-title {\n  margin-left: 10px;\n}\n\n.timeline-title .badge {\n  background: #2dd36f;\n  padding: 4px 8px;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n}\n\n.timeline-title .badge.success {\n  background-color: #497cd5 !important;\n}\n\n.timeline-title .badge.warning {\n  background-color: #fd5d93 !important;\n}\n\n.timeline-title .badge.danger {\n  background-color: #ff8d72 !important;\n}\n\n.timeline-title .badge.in-proccess {\n  background: #2dd36f;\n}\n\n.timeline-title .badge.not-effective {\n  background-color: #1e1e2f;\n}\n\n.time ion-button {\n  z-index: 1;\n}\n\n.time #hms {\n  color: black;\n  font-size: 2em;\n  z-index: 1;\n  letter-spacing: 8px;\n}\n\n.blue {\n  color: #07f5f5;\n}\n\n.button-small {\n  width: 50%;\n  text-align: center;\n  display: block;\n  margin: 5px auto;\n}\n\n.gm-bundled-control-on-bottom {\n  bottom: 350px !important;\n}\n\n.min-he {\n  min-height: 350px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9mb3Jtcy92aWV3LWRldGFpbC92aWV3LWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NjcmVlbnMvZm9ybXMvdmlldy1kZXRhaWwvdmlldy1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBRGVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDWko7O0FEZUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUNaSjs7QURjSTtFQUNJLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQTVDRTtBQ2dDVjs7QURpQkk7RUFFSSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ2hCUjs7QURrQlE7RUFDSSx5QkFBQTtBQ2hCWjs7QURrQlk7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2hCaEI7O0FEbUJZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDbEJoQjs7QURvQmdCO0VBQ0kscUJBQUE7QUNsQnBCOztBRHFCZ0I7RUFDSSx5QkFBQTtBQ25CcEI7O0FEc0JnQjtFQUNJLHlCQTFGYjtBQ3NFUDs7QUQyQkk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ3pCUjs7QUQ0Qkk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUMxQlI7O0FEK0JBO0VBQ0ksaUJBQUE7QUM1Qko7O0FEOEJJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQzVCUjs7QUQ4QlE7RUFDSSxvQ0FBQTtBQzVCWjs7QUQrQlE7RUFDSSxvQ0FBQTtBQzdCWjs7QURnQ1E7RUFDSSxvQ0FBQTtBQzlCWjs7QURpQ1E7RUFDSSxtQkFBQTtBQy9CWjs7QURrQ1E7RUFDSSx5QkExSUw7QUMwR1A7O0FEcUNBO0VBQ0ksVUFBQTtBQ2xDSjs7QURxQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ2xDSjs7QURxQ0E7RUFDSSxjQUFBO0FDbENKOztBRHFDQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2xDSjs7QURxQ0E7RUFDSSx3QkFBQTtBQ2xDSjs7QURxQ0E7RUFDSSw0QkFBQTtBQ2xDSiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZm9ybXMvdmlldy1kZXRhaWwvdmlldy1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWVue1xuICAgIGNvbG9yIDogIzI1ZTI0ZVxufVxuXG4ucmVke1xuICAgIGNvbG9yIDogI2RkMDcwN1xufVxuXG4vLyBjb2xvcnNcbiRwcmltYXJ5OiAjNDk3Y2Q1O1xuJHNlY29uZGFyeTogIzFkOGNmODtcbiRpbmZvOiAjMTFjZGVmO1xuJHN1Y2Nlc3M6ICMwMGJmOWE7XG4kd2FybmluZzogI2ZmOGQ3MjtcbiRkYW5nZXI6ICNmZDVkOTM7XG4kZGFyazogIzFlMWUyZjtcbiRpbi1wcm9jY2VzczogcmdiKDIxMywgMjE2LCAzOCk7XG5cblxuXG5cbi50aW1le1xuICAgIGhlaWdodDogNDdweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNhcmQtYWJzb2x1dGUtbm9ybWFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG8gNSU7XG4gICAgcGFkZGluZzogLTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICYgLnZpZXctZGV0YWlsIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcblxuXG4gICAgfVxuXG4gICAgJiAudG9vbGJhciB7XG4gICAgICAgIC8vYm9yZGVyOiAwLjVweCBzb2xpZCAjZDdkOGRhO1xuICAgICAgICAvKiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4OyAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAvKiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDsgKi9cbiAgICAgICAgLyogbWFyZ2luLXJpZ2h0OiAxMHB4OyAqL1xuICAgICAgICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAmIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgICYgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJiAuc3RhdHVzIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICYuY29tcGxldGVke1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5pbi1wcm9jZXNze1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGVkYTBlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYubm90LWVmZmVjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIC5kaXYtbWF4LWhlaWdodCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xuICAgIH1cblxuICAgICYgaW9uLWJhZGdlIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cblxufVxuXG4udGltZWxpbmUtdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG4gICAgLmJhZGdlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzJkZDM2ZjtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgJi5zdWNjZXNzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLndhcm5pbmcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhbmdlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5kYW5nZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdhcm5pbmcgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaW4tcHJvY2Nlc3Mge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzJkZDM2ZjtcbiAgICAgICAgfVxuXG4gICAgICAgICYubm90LWVmZmVjdGl2ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udGltZSBpb24tYnV0dG9ue1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi50aW1lICNobXN7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcbn1cblxuLmJsdWV7XG4gICAgY29sb3IgOiAjMDdmNWY1XG59XG5cbi5idXR0b24tc21hbGx7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuLmdtLWJ1bmRsZWQtY29udHJvbC1vbi1ib3R0b217XG4gICAgYm90dG9tOiAzNTBweCAhaW1wb3J0YW50O1xufVxuXG4ubWluLWhle1xuICAgIG1pbi1oZWlnaHQ6IDM1MHB4ICFpbXBvcnRhbnQ7XG59IiwiLmdyZWVuIHtcbiAgY29sb3I6ICMyNWUyNGU7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI2RkMDcwNztcbn1cblxuLnRpbWUge1xuICBoZWlnaHQ6IDQ3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNhcmQtYWJzb2x1dGUtbm9ybWFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0byA1JTtcbiAgcGFkZGluZzogLTVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY2FyZC1hYnNvbHV0ZS1ub3JtYWwgLnZpZXctZGV0YWlsIHtcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB6LWluZGV4OiAxMDAwO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDk3Y2Q1O1xufVxuLmNhcmQtYWJzb2x1dGUtbm9ybWFsIC50b29sYmFyIHtcbiAgLyogYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDsgKi9cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLyogYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7ICovXG4gIC8qIG1hcmdpbi1yaWdodDogMTBweDsgKi9cbiAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uY2FyZC1hYnNvbHV0ZS1ub3JtYWwgLnRvb2xiYXIgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmNhcmQtYWJzb2x1dGUtbm9ybWFsIC50b29sYmFyIGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmNhcmQtYWJzb2x1dGUtbm9ybWFsIC50b29sYmFyIGlvbi1pdGVtIC5zdGF0dXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICB3aWR0aDogNDUlO1xuICBmb250LXNpemU6IDFlbTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FyZC1hYnNvbHV0ZS1ub3JtYWwgLnRvb2xiYXIgaW9uLWl0ZW0gLnN0YXR1cy5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4uY2FyZC1hYnNvbHV0ZS1ub3JtYWwgLnRvb2xiYXIgaW9uLWl0ZW0gLnN0YXR1cy5pbi1wcm9jZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlZGEwZTtcbn1cbi5jYXJkLWFic29sdXRlLW5vcm1hbCAudG9vbGJhciBpb24taXRlbSAuc3RhdHVzLm5vdC1lZmZlY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTJmO1xufVxuLmNhcmQtYWJzb2x1dGUtbm9ybWFsIC5kaXYtbWF4LWhlaWdodCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xufVxuLmNhcmQtYWJzb2x1dGUtbm9ybWFsIGlvbi1iYWRnZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnRpbWVsaW5lLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4udGltZWxpbmUtdGl0bGUgLmJhZGdlIHtcbiAgYmFja2dyb3VuZDogIzJkZDM2ZjtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG4udGltZWxpbmUtdGl0bGUgLmJhZGdlLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk3Y2Q1ICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUtdGl0bGUgLmJhZGdlLndhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ1ZDkzICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUtdGl0bGUgLmJhZGdlLmRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjhkNzIgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZS10aXRsZSAuYmFkZ2UuaW4tcHJvY2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjMmRkMzZmO1xufVxuLnRpbWVsaW5lLXRpdGxlIC5iYWRnZS5ub3QtZWZmZWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUyZjtcbn1cblxuLnRpbWUgaW9uLWJ1dHRvbiB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi50aW1lICNobXMge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB6LWluZGV4OiAxO1xuICBsZXR0ZXItc3BhY2luZzogOHB4O1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiAjMDdmNWY1O1xufVxuXG4uYnV0dG9uLXNtYWxsIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuLmdtLWJ1bmRsZWQtY29udHJvbC1vbi1ib3R0b20ge1xuICBib3R0b206IDM1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5taW4taGUge1xuICBtaW4taGVpZ2h0OiAzNTBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/screens/forms/view-detail/view-detail.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/screens/forms/view-detail/view-detail.page.ts ***!
    \***************************************************************/

  /*! exports provided: ViewDetailPage */

  /***/
  function srcAppScreensFormsViewDetailViewDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewDetailPage", function () {
      return ViewDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _events_events_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../events/events.page */
    "./src/app/screens/forms/events/events.page.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/place.service */
    "./src/app/services/place.service.ts");
    /* harmony import */


    var _services_network_status_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/network-status.service */
    "./src/app/services/network-status.service.ts");
    /* harmony import */


    var src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/realtime.service */
    "./src/app/services/realtime.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services_days_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/services/days.service */
    "./src/app/services/days.service.ts");
    /* harmony import */


    var cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! cordova-background-geolocation-lt */
    "./node_modules/cordova-background-geolocation-lt/src/ionic/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_foreground_service_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/foreground-service/ngx */
    "./node_modules/@ionic-native/foreground-service/__ivy_ngcc__/ngx/index.js"); // import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';


    var _capacitor_core__WEBP3 = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"],
        Geolocation = _capacitor_core__WEBP3.Geolocation,
        Haptics = _capacitor_core__WEBP3.Haptics;

    var ViewDetailPage = /*#__PURE__*/function () {
      function ViewDetailPage(ui, request, auth, db, place, network, realtime, days, platform, foregroundService) {
        _classCallCheck(this, ViewDetailPage);

        this.ui = ui;
        this.request = request;
        this.auth = auth;
        this.db = db;
        this.place = place;
        this.network = network;
        this.realtime = realtime;
        this.days = days;
        this.platform = platform;
        this.foregroundService = foregroundService; // @ViewChild(HTMLIonLoadingElement) loading: HTMLIonLoadingElement

        this.az_arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        this.statesClasses = {
          "23": "red",
          "24": "blue",
          "25": "green"
        };
        this.markers = [];
        this.distance = "";
        this.duration = 0;
        this.duration_text = "";
        this.details = [];
        this.initTimerB = false;
        this.firstTime = true;
        this.equal_or_greater_than_a_kilometer = true;
        this.markerPoints = [];
        this.view_more = false;
        this.proximity = 1;
        this.s = 0;
        this.m = 0;
        this.h = 0;
        this.timer_hour = "00:00:00";
        this.markers_numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
        this.client_configuration_data = {};
        this.total_charge = 0;
        this.marker_div = null;
        this.paths = [];
        this.keyDetail = "";
      } //#region Life Cycle ionic Angular


      _createClass(ViewDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
            return _regeneratorRuntime().wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31);
          }));
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this17 = this;

          console.log("Content Init");

          if (this.latLng) {
            console.log("Content Init defined", this.latLng);
            console.log("Content init Markers", this.markerPoints);
            var location = this.latLng;
            this.locationSubscription = location.subscribe(function (loc) {
              console.log("Content Init Subscribe", loc); //Set the marker position

              _this17.markerPoints[0].setPosition(loc);

              _this17.updatePosition(_this17.auth.user.id, _this17.auth.vehicles.id, loc.lat, loc.lng, loc.bearing);
            });
          }
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          console.log("ionViewWillLeave");
          clearInterval(this.positionTracking);
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          console.log("ionViewDidLeave");
          clearInterval(this.positionTracking);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          //Called once, before the instance is destroyed.
          //Add 'implements OnDestroy' to the class.
          clearInterval(this.positionTracking);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
            return _regeneratorRuntime().wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
            var _this18 = this;

            var icon, latitude, longitude, data, _latitude, _longitude, position, y, _latitude2, _longitude2, _y;

            return _regeneratorRuntime().wrap(function _callee37$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    if (this.order.service_type_id == 3) {
                      this.view_more = true;
                    } // this.icon=encodeURIComponent(this.icon)
                    // this.icon = this.icon.replace("<", "\ <")


                    this.sTopTimer();

                    if (this.order.status_order != 25 && this.order.status_order != 31) {
                      if (localStorage.getItem("initTimer") && this.order.service_type_id != 3) {
                        this.initTimer();
                      }

                      this.total_charge = 0;

                      if (this.detailActive && this.detailActive.total_charge) {
                        this.total_charge = Number(this.detailActive.total_charge);
                      }
                    }

                    clearInterval(this.positionTracking);
                    console.log("Proximity", this.proximity); // this.changeAvailability()

                    if (!this.network.getNetworkStatus().connected) {
                      _context37.next = 49;
                      break;
                    }

                    //Assign the proximity property from the the SQL database
                    // this.proximity = this.order.proximity;
                    this.orderSubscription = this.realtime.getNewOrder().valueChanges().subscribe(function (res) {
                      // console.log("New order res", res.proximity)
                      if (res != null) {
                        if (typeof res.proximity != "undefined") {
                          //Assign the proximity property from firebase
                          _this18.proximity = res.proximity;
                        }
                      }

                      console.log("Proximity", _this18.proximity);
                    });

                    if (this.order.service_type_id != 3) {
                      this.request.get("list/attributes?parameter_id=9").subscribe(function (res) {
                        var distance = Number(res.data[0].value);
                        _this18.equal_or_greater_than_a_kilometer = distance >= 1000;

                        if (distance >= 1000) {
                          distance = distance / 1000;
                        }

                        _this18.minimum_distance = distance;
                      }, function (err) {
                        _this18.ui.showToast("Verifique su conexión", function () {
                          _this18.clearLocals();

                          _this18.dismiss();
                        });
                      });
                    }

                    console.log("Order", this.order);
                    icon = "";
                    clearInterval(this.positionTracking);

                    if (!(this.order.service_type_id != 3)) {
                      _context37.next = 23;
                      break;
                    }

                    _context37.t0 = Number(this.auth.vehicles.transport_type_id);
                    _context37.next = _context37.t0 === 4 ? 15 : _context37.t0 === 5 ? 17 : _context37.t0 === 6 ? 19 : 21;
                    break;

                  case 15:
                    icon = "assets/imgs/moto-new.svg";
                    return _context37.abrupt("break", 21);

                  case 17:
                    icon = "assets/imgs/carry.png";
                    return _context37.abrupt("break", 21);

                  case 19:
                    icon = "assets/imgs/auto.png";
                    return _context37.abrupt("break", 21);

                  case 21:
                    if (this.order.status_order != 31) {
                      this.markers.push(icon);
                    }

                    this.markers_numbers.map(function (ab, i) {
                      //  
                      _this18.markers.push("/assets/imgs/markers_numbers/" + (i + 1) + '.png');
                    });

                  case 23:
                    latitude = localStorage.getItem("latitude");
                    longitude = localStorage.getItem("longitude");
                    console.log("Order Current", this.order);

                    if (this.order.status_order == 22 || this.order.status_order == 23 || this.order.status_order == 53) {
                      try {
                        data = new FormData();
                        data.append("order_id", this.order.id);
                        data.append("latitude", latitude.toString());
                        data.append("longitude", longitude.toString());
                        data.append("description", "Inicio Servicio");
                        data.append("user_id", this.auth.user.id.toString());
                        this.request.post('driver/start_service', data).subscribe(function (res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
                            var _this19 = this;

                            var details;
                            return _regeneratorRuntime().wrap(function _callee33$(_context33) {
                              while (1) {
                                switch (_context33.prev = _context33.next) {
                                  case 0:
                                    if (this.order.service_type_id == 3) {
                                      this.initTimerForTimeService(true);
                                      this.realtime.getFirebaseCollectionObject("status_order_mobile/".concat(this.order.city_id, "/").concat(this.order.customer_id, "/").concat(this.order.id)).valueChanges().subscribe(function (res) {
                                        if (res != null) {
                                          if (res.status_order == 25) {
                                            _this19.order.status_order = 25;

                                            _this19.dismiss();

                                            _this19.clearLocals();

                                            if (_this19.subscription) {
                                              _this19.subscription.unsubscribe();
                                            }

                                            if (_this19.subscription2) {
                                              _this19.subscription2.unsubscribe();
                                            }

                                            _this19.ui.presentAlert({
                                              mode: 'ios',
                                              header: 'Orden Finalizada',
                                              message: 'La orden ha sido finalizada con éxito',
                                              buttons: [{
                                                text: 'Aceptar',
                                                role: 'cancel',
                                                cssClass: 'secondary',
                                                handler: function handler(blah) {}
                                              }]
                                            });

                                            return;
                                          }
                                        }
                                      }); // this.backgroundMode.on('activate').subscribe(res=>{
                                      //   console.log("Debug init timer background")
                                      //   this.initTimerForTimeService(true);
                                      // })
                                      // this.backgroundMode.on('deactivate').subscribe(res=>{
                                      //   console.log("Debug init timer foreground")
                                      //   this.initTimerForTimeService(true);
                                      // })
                                    }

                                    if (this.order.zapp_store_order == 0) {
                                      this.order.status_order = 24;
                                    }

                                    details = this.order.details ? this.order.details : this.order.detail;
                                    details = details.map(function (d) {
                                      var detail = Object.assign(Object.assign({}, d), {
                                        status: 24
                                      });
                                      return Object.assign(Object.assign({}, d), {
                                        status: 24
                                      });
                                    });
                                    details.forEach(function (detail) {
                                      _this19.realtime.getFirebaseCollection("order_detail_report/".concat(_this19.order.id, "/").concat(detail.id)).update(Object.assign(Object.assign({}, detail), {
                                        status: 24
                                      }));
                                    });
                                    this.order.details = details; // this.ui.showToast("Se inició el servicio");

                                    console.log("Order Current", this.order);
                                    localStorage.setItem("current_order", JSON.stringify(this.order));

                                    if (this.order.service_type_id != 3) {
                                      this.loadMap(true);
                                    } else {//this.initTimerForTimeService()
                                    }

                                  case 9:
                                  case "end":
                                    return _context33.stop();
                                }
                              }
                            }, _callee33, this);
                          }));
                        }, function (err) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
                            var _this20 = this;

                            return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                              while (1) {
                                switch (_context34.prev = _context34.next) {
                                  case 0:
                                    console.log("Error", err);
                                    localStorage.removeItem("current_order");
                                    this.clearLocals();

                                    if (!(err.status == 400)) {
                                      _context34.next = 6;
                                      break;
                                    }

                                    _context34.next = 6;
                                    return this.ui.presentAlert({
                                      mode: 'ios',
                                      header: 'No se ha podido iniciar el servicio',
                                      message: err.error.messages[0],
                                      buttons: [{
                                        text: 'Aceptar',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function handler(blah) {
                                          _this20.dismiss();
                                        }
                                      }]
                                    });

                                  case 6:
                                    console.log("Error", err);

                                  case 7:
                                  case "end":
                                    return _context34.stop();
                                }
                              }
                            }, _callee34, this);
                          }));
                        });
                      } catch (e) {
                        console.log("Error", e);
                      }
                    } else {
                      if (this.order.status_order == 25) {
                        this.request.get("driver/events_per_driver/".concat(this.order.id, "/").concat(this.auth.user.id)).subscribe(function (res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
                            var _this21 = this;

                            var event, latitude, longitude;
                            return _regeneratorRuntime().wrap(function _callee35$(_context35) {
                              while (1) {
                                switch (_context35.prev = _context35.next) {
                                  case 0:
                                    event = res.data.find(function (e) {
                                      return e.latitude && e.longitude;
                                    });
                                    latitude = event.latitude, longitude = event.longitude;
                                    console.log("Event", event);
                                    this.details.unshift({
                                      latitude: latitude,
                                      longitude: longitude
                                    });
                                    this.order.details.map(function (d) {
                                      _this21.details.push({
                                        id: d.id,
                                        latitude: d.latitude,
                                        longitude: d.longitude
                                      });
                                    });
                                    console.log("Details", this.details);
                                    this.loadMap(true);

                                  case 7:
                                  case "end":
                                    return _context35.stop();
                                }
                              }
                            }, _callee35, this);
                          }));
                        }, function (err) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
                            var _this22 = this;

                            return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                              while (1) {
                                switch (_context36.prev = _context36.next) {
                                  case 0:
                                    localStorage.removeItem("current_order");
                                    this.clearLocals();
                                    _context36.next = 4;
                                    return this.ui.presentAlert({
                                      mode: 'ios',
                                      header: 'No se ha podido mostrar el historial',
                                      buttons: [{
                                        text: 'Aceptar',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function handler(blah) {
                                          _this22.dismiss();
                                        }
                                      }]
                                    });

                                  case 4:
                                    console.log("Error", err);

                                  case 5:
                                  case "end":
                                    return _context36.stop();
                                }
                              }
                            }, _callee36, this);
                          }));
                        });
                      } else {
                        if (this.order.service_type_id != 3) {
                          this.loadMap(true);
                        } else {
                          this.realtime.getFirebaseCollectionObject("status_order_mobile/".concat(this.order.city_id, "/").concat(this.order.customer_id, "/").concat(this.order.id)).valueChanges().subscribe(function (res) {
                            if (res != null) {
                              if (res.status_order == 25) {
                                _this18.order.status_order = 25;

                                _this18.dismiss();

                                _this18.clearLocals();

                                if (_this18.subscription) {
                                  _this18.subscription.unsubscribe();
                                }

                                if (_this18.subscription2) {
                                  _this18.subscription2.unsubscribe();
                                }

                                _this18.ui.presentAlert({
                                  mode: 'ios',
                                  header: 'Orden Finalizada',
                                  message: 'La orden ha sido finalizada con éxito',
                                  buttons: [{
                                    text: 'Aceptar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function handler(blah) {}
                                  }]
                                });

                                return;
                              }
                            }
                          });
                          this.initTimerForTimeService();
                        }
                      }
                    }

                    _context37.prev = 27;

                    if (!(localStorage.getItem("latitude") && localStorage.getItem("longitude"))) {
                      _context37.next = 33;
                      break;
                    }

                    _latitude = localStorage.getItem("latitude");
                    _longitude = localStorage.getItem("longitude");
                    _context37.next = 38;
                    break;

                  case 33:
                    _context37.next = 35;
                    return Geolocation.getCurrentPosition({
                      enableHighAccuracy: true
                    });

                  case 35:
                    position = _context37.sent;
                    _latitude = position.coords.latitude;
                    _longitude = position.coords.longitude;

                  case 38:
                    localStorage.setItem("latitude", _latitude.toString());
                    localStorage.setItem("longitude", _longitude.toString());
                    y = this.realtime.getUserGeolocation().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (snapshot) {
                      console.log(snapshot);
                      y.unsubscribe();

                      if (snapshot === null) {
                        _this18.realtime.getUserGeolocation().set({
                          key: _this18.auth.user.id,
                          user_id: _this18.auth.user.id,
                          latitude: _latitude.toString(),
                          longitude: _longitude.toString(),
                          city_id: _this18.auth.person.city_id,
                          state_id: Number(_this18.auth.person.state_id),
                          level_id: Number(_this18.auth.user.level_id),
                          // last_active: Date.now(),
                          available: _this18.auth.user.available,
                          driver_name: _this18.auth.user.name,
                          transport_type_id: _this18.auth.vehicles.transport_type_id
                        });
                      } else {
                        // update
                        _this18.realtime.getUserGeolocation().update({
                          key: _this18.auth.user.id,
                          user_id: _this18.auth.user.id,
                          latitude: _latitude.toString(),
                          longitude: _longitude.toString(),
                          city_id: _this18.auth.person.city_id,
                          state_id: Number(_this18.auth.person.state_id),
                          level_id: Number(_this18.auth.user.level_id),
                          // last_active: Date.now(),
                          available: _this18.auth.user.available,
                          driver_name: _this18.auth.user.name,
                          transport_type_id: _this18.auth.vehicles.transport_type_id
                        });
                      }
                    });
                    _context37.next = 46;
                    break;

                  case 43:
                    _context37.prev = 43;
                    _context37.t1 = _context37["catch"](27);

                    if (localStorage.getItem("latitude") && localStorage.getItem("longitude")) {
                      _latitude2 = localStorage.getItem("latitude");
                      _longitude2 = localStorage.getItem("longitude");
                      _y = this.realtime.getUserGeolocation().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (snapshot) {
                        console.log(snapshot);

                        _y.unsubscribe();

                        if (snapshot === null) {
                          _this18.realtime.getUserGeolocation().set({
                            key: _this18.auth.user.id,
                            user_id: _this18.auth.user.id,
                            latitude: _latitude2.toString(),
                            longitude: _longitude2.toString(),
                            city_id: _this18.auth.person.city_id,
                            state_id: Number(_this18.auth.person.state_id),
                            level_id: Number(_this18.auth.user.level_id),
                            // last_active: Date.now(),
                            available: _this18.auth.user.available,
                            driver_name: _this18.auth.user.name,
                            transport_type_id: _this18.auth.vehicles.transport_type_id
                          });
                        } else {
                          // update
                          _this18.realtime.getUserGeolocation().update({
                            key: _this18.auth.user.id,
                            user_id: _this18.auth.user.id,
                            latitude: _latitude2.toString(),
                            longitude: _longitude2.toString(),
                            city_id: _this18.auth.person.city_id,
                            state_id: Number(_this18.auth.person.state_id),
                            level_id: Number(_this18.auth.user.level_id),
                            // last_active: Date.now(),
                            available: _this18.auth.user.available,
                            driver_name: _this18.auth.user.name,
                            transport_type_id: _this18.auth.vehicles.transport_type_id
                          });
                        }
                      });
                    }

                  case 46:
                    this.order.step = this.order.details.findIndex(function (d) {
                      return d.status != 25;
                    });
                    _context37.next = 50;
                    break;

                  case 49:
                    this.ui.showToast("Verifique su conexión e intentelo de nuevo", function () {
                      localStorage.removeItem("current_order");

                      _this18.clearLocals();

                      _this18.dismiss();
                    });

                  case 50:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee37, this, [[27, 43]]);
          }));
        } //#endregion

      }, {
        key: "viewMore",
        value: function viewMore() {
          this.view_more = !this.view_more;

          if (!this.view_more) {
            clearInterval(this.positionTracking);
          } else {
            if (this.order.status_order != 25) {// this.changeAvailability();
            }
          }
        }
      }, {
        key: "detailActive",
        get: function get() {
          return this.order.details.find(function (d) {
            return d.status != 25 && d.status != 36 && d.status != 48;
          });
        }
      }, {
        key: "findLetter",
        value: function findLetter() {
          var _this23 = this;

          var index = 0;

          if (this.order.details) {
            index = this.order.details.findIndex(function (d) {
              return d == _this23.detailActive;
            });
          } else {
            index = this.order.detail.findIndex(function (d) {
              return d == _this23.detailActive;
            });
          }

          return this.markers_numbers[index];
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          clearInterval(this.positionTracking);
          this.ui.dismiss();
        }
      }, {
        key: "initTimerForTimeService",
        value: function initTimerForTimeService() {
          var _this24 = this;

          var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.keyDetail = "initDetailTime".concat(this.detailActive.id);
          var initDetailTime = localStorage.getItem(this.keyDetail);

          if (!initDetailTime) {
            this.initTime = new Date();
            localStorage.setItem(this.keyDetail, Date.now().toString());
          } else {
            this.initTime = new Date(Number(initDetailTime));
          }

          this.s = 0;
          this.m = 0;
          this.h = 0;

          if (localStorage.getItem("timer")) {
            var _timer = JSON.parse(localStorage.getItem("timer"));

            this.s = _timer.seconds;
            this.m = _timer.minutes;
            this.h = _timer.hours;
          }

          if (this.detailActive.timer) {
            var time = this.detailActive.timer;
            this.s = time.seconds;
            this.m = time.minutes;
            this.h = time.hours;
          }

          var close_time;
          var hours = 0;
          var minutes = 0;
          var seconds = 0;
          var timer = {
            seconds: this.s,
            minutes: this.m,
            hours: this.h
          };
          this.initTimerB = true;
          localStorage.setItem("initTimer", "yes");
          localStorage.setItem("timer", JSON.stringify(timer));

          if (init && this.id_interval) {
            console.log("Debug Clear interval");
            clearInterval(this.id_interval);
          }

          this.id_interval = setInterval(function () {
            _this24.timerForTimeService();
          }, 1000);
          localStorage.setItem("id_interval", this.id_interval.toString());
        }
      }, {
        key: "timerForTimeService",
        value: function timerForTimeService() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
            var _this25 = this;

            var hAux, mAux, sAux, daysD, close_time, hours, minutes, seconds, intDate, dateFuture, dateNow, secondsS, minutesS, hoursS, days, today, today_date, date_split, date_service_date, isToday, timer, detail;
            return _regeneratorRuntime().wrap(function _callee38$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    daysD = 0;
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                    intDate = localStorage.getItem(this.keyDetail);
                    dateFuture = new Date(Number(intDate));
                    dateNow = new Date();
                    secondsS = Math.floor((dateNow - dateFuture) / 1000);
                    minutesS = Math.floor(secondsS / 60);
                    hoursS = Math.floor(minutesS / 60);
                    days = Math.floor(hoursS / 24);
                    console.log("Debug Days ".concat(days, " Hours ").concat(hoursS, " Minutes ").concat(minutesS, " Seconds ").concat(secondsS));
                    hours = hoursS - days * 24;
                    minutes = minutesS - days * 24 * 60 - hours * 60;
                    seconds = secondsS - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
                    console.log("Debug Days ".concat(daysD, " Hours ").concat(hours, " Minutes ").concat(minutes, " Seconds ").concat(seconds));
                    this.s = seconds;
                    this.m = minutes;
                    this.h = hours;
                    console.log("Seconds", this.s);

                    if (this.s > 59) {
                      this.m++;
                      this.s = 0;
                    }

                    if (this.m > 59) {
                      this.h++;
                      this.m = 0;
                    }

                    if (!this.detailActive) {
                      _context38.next = 36;
                      break;
                    }

                    today = new Date();
                    today_date = {
                      day: today.getDate(),
                      month: today.getMonth() + 1,
                      year: today.getFullYear()
                    };
                    date_split = this.order.date.split("-");
                    date_service_date = {
                      day: Number(date_split[2]),
                      month: Number(date_split[1]),
                      year: Number(date_split[0])
                    };
                    isToday = Object.keys(today_date).every(function (key) {
                      return today_date[key] == date_service_date[key];
                    });

                    if (!(this.h == Number(this.detailActive.number_of_hours) || !isToday)) {
                      _context38.next = 34;
                      break;
                    }

                    clearInterval(this.id_interval);
                    this.clearLocals();
                    this.endTimeOrder();
                    _context38.next = 34;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: '¡Tu viaje ha finalizado!',
                      buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }]
                    });

                  case 34:
                    _context38.next = 37;
                    break;

                  case 36:
                    console.log("Not exist");

                  case 37:
                    if (this.h > 24) {
                      this.h = 0;
                    }

                    if (this.s < 10) {
                      sAux = "0" + this.s;
                    } else {
                      sAux = this.s;
                    }

                    if (this.m < 10) {
                      mAux = "0" + this.m;
                    } else {
                      mAux = this.m;
                    }

                    if (this.h < 10) {
                      hAux = "0" + this.h;
                    } else {
                      hAux = this.h;
                    }

                    timer = {
                      seconds: this.s,
                      minutes: this.m,
                      hours: this.h
                    };
                    console.log("Seconds After", timer.seconds);
                    localStorage.setItem("timer", JSON.stringify(timer));
                    /*
                    REGISTER THE CURRENT DATE
                    THE REASON OT THIS IS
                     IF THE USER CLOSE THE APPLICATION
                     READ IT AND CALCULATE THE DIFFERENCE BETWEEN THE LAST SAVED DATE AND THE CURRENT DATE
                    */

                    this.timer_hour = hAux + ":" + mAux + ":" + sAux;

                    if (this.detailActive) {
                      detail = this.order.details.find(function (d) {
                        return d.id == _this25.detailActive.id;
                      });
                      console.log("Detail", detail, this.detailActive, this.details);
                      detail.timer = timer;
                      detail.total_charge = this.total_charge;
                      console.log("FIND dETAIL", detail); //Update real time timer for the client

                      this.realtime.getFirebaseCollection("order_detail_report/".concat(this.order.id, "/").concat(this.detailActive.id)).update(Object.assign({}, detail));
                      localStorage.setItem("current_order", JSON.stringify(this.order));
                    }

                  case 46:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee38, this);
          }));
        }
      }, {
        key: "getDaysHoursMinutesSecondsFromMiliseconds",
        value: function getDaysHoursMinutesSecondsFromMiliseconds(ms) {
          var days = 0;
          var daysms = 0;
          var hours = 0;
          var hoursms;
          var minutes;
          var minutesms;
          var sec;
          days = Math.floor(ms / (24 * 60 * 60 * 1000));
          daysms = ms % (24 * 60 * 60 * 1000);
          hours = Math.floor(daysms / (60 * 60 * 1000));
          hoursms = ms % (60 * 60 * 1000);
          minutes = Math.floor(hoursms / (60 * 1000));
          minutesms = ms % (60 * 1000);
          sec = Math.floor(minutesms / 1000);
          return {
            days: days,
            hours: hours,
            minutes: minutes,
            sec: sec
          };
        }
      }, {
        key: "initTimer",
        value: function initTimer() {
          var _this26 = this;

          this.keyDetail = "initDetailTime".concat(this.detailActive.id);
          var initDetailTime = localStorage.getItem(this.keyDetail);

          if (!initDetailTime) {
            localStorage.setItem(this.keyDetail, Date.now().toString());
          }

          this.s = 0;
          this.m = 0;
          this.h = 0;

          if (this.detailActive.timer) {
            var time = this.detailActive.timer;
            this.s = time.seconds;
            this.m = time.minutes;
            this.h = time.hours;
            var minuteToCharge = Number(this.m) + Number(this.h) * 60;
            this.total_charge = Math.floor(minuteToCharge / Number(this.order.time_wait)) * Number(this.order.rate_per_minute);
            console.log("Total charge", this.total_charge);
            console.log("Timer", time);
          }

          var close_time;
          var hours = 0;
          var minutes = 0;
          var seconds = 0;
          var timer = {
            seconds: this.s,
            minutes: this.m,
            hours: this.h
          };
          console.log("Difference Time ".concat(timer.hours, ":").concat(timer.minutes, ":").concat(timer.seconds));
          localStorage.setItem("timer", JSON.stringify(timer));
          this.initTimerB = true;
          localStorage.setItem("initTimer", "yes");
          this.total_charge = 0;
          var detail = this.order.details.find(function (d) {
            return d.id == _this26.detailActive.id;
          });

          if (detail) {
            detail.timer = timer;
            detail.total_charge = 0;
            console.log("Order ", this.order);
            localStorage.setItem("current_order", JSON.stringify(this.order));
          }

          console.log("Detail");
          this.id_interval = setInterval(function () {
            _this26.timer();
          }, 1000);
          localStorage.setItem("id_interval", this.id_interval.toString());
        }
      }, {
        key: "sTopTimer",
        value: function sTopTimer() {
          localStorage.removeItem("id_interval");
          clearInterval(this.id_interval);
        }
      }, {
        key: "timer",
        value: function timer() {
          var _this27 = this;

          var hAux, mAux, sAux;
          var close_time;
          var daysD = 0;
          var hours = 0;
          var minutes = 0;
          var seconds = 0;
          /**
           * This feature is for when the operating
           * system close the processes of the application when it restarts
           * take the App close date and compare it with the current time and get the difference in hours, minutes and seconds
           */

          var intDate = localStorage.getItem(this.keyDetail);
          var dateFuture = new Date(Number(intDate));
          var dateNow = new Date();
          var secondsS = Math.floor((dateNow - dateFuture) / 1000);
          var minutesS = Math.floor(secondsS / 60);
          var hoursS = Math.floor(minutesS / 60);
          var days = Math.floor(hoursS / 24);
          console.log("Days ".concat(days, " Hours ").concat(hoursS, " Minutes ").concat(minutesS, " Seconds ").concat(secondsS));
          hours = hoursS - days * 24;
          minutes = minutesS - days * 24 * 60 - hours * 60;
          seconds = secondsS - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
          console.log("Days ".concat(daysD, " Hours ").concat(hours, " Minutes ").concat(minutes, " Seconds ").concat(seconds));
          this.s = seconds;
          this.m = minutes;
          this.h = hours;
          var detail = this.order.details.find(function (d) {
            return d.id == _this27.detailActive.id;
          });

          if (this.order.time_wait) {
            //if the minute is multiple of order the it recalculate the total charge

            /**
             * With this formula
             * total_charge = (minutes/order_wait_time)*order_rate_per_minute
             */
            this.total_charge = 0;
            var minuteToCharge = Number(this.m) + Number(this.h) * 60 + Number(days) * 24 * 60;
            this.total_charge = Math.floor(minuteToCharge / Number(this.order.time_wait)) * Number(this.order.rate_per_minute);
            console.log("Total charge", this.total_charge, this.order.time_wait, this.order.rate_per_minute, minuteToCharge, Math.floor(minuteToCharge / Number(this.order.time_wait)));
          } else {
            console.log("Not exist");
          }

          if (this.s < 10) {
            sAux = "0" + this.s;
          } else {
            sAux = this.s;
          }

          if (this.m < 10) {
            mAux = "0" + this.m;
          } else {
            mAux = this.m;
          }

          if (this.h < 10) {
            hAux = "0" + this.h;
          } else {
            hAux = this.h;
          }

          var timer = {
            seconds: this.s,
            minutes: this.m,
            hours: this.h
          };

          if (detail) {
            detail.timer = timer;
            detail.total_charge = this.total_charge;
            console.log("FIND dETAIL", detail); //Update real time timer for the client

            this.realtime.getFirebaseCollection("order_detail_report/".concat(this.order.id, "/").concat(this.detailActive.id)).update(Object.assign({}, detail));
            localStorage.setItem("current_order", JSON.stringify(this.order));
          }

          this.timer_hour = hAux + ":" + mAux + ":" + sAux;
        }
      }, {
        key: "clearLocals",
        value: function clearLocals() {
          //id_interval
          localStorage.removeItem("current_order");
          localStorage.removeItem("total_charge");
          localStorage.removeItem("initTimer");
          localStorage.removeItem("client_configuration_data");
          localStorage.removeItem("configuration_data");
          localStorage.removeItem("timer");
          localStorage.removeItem(this.keyDetail);
          localStorage.removeItem("bearing");
          localStorage.removeItem("bearing_used");
          localStorage.removeItem("app_close_date");
          this.sTopTimer();

          if (this.locationSubscription) {
            this.locationSubscription.unsubscribe();
          }
        }
      }, {
        key: "toNumber",
        value: function toNumber(number) {
          return Number(number);
        }
      }, {
        key: "toogleComment",
        value: function toogleComment(detail) {
          if (detail.status != 25) {
            if (detail.comment) {
              detail.comment = undefined;
              return;
            }

            detail.comment = "yes";
          } else {
            this.ui.showToast("La direccióon ya está realizada en el detalle del servicio");
          }
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          var firstTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
            var _this28 = this;

            var loader, latitude, longitude, directionsService, directionsDisplay, waypts, markers, infos, _i2, latlng, center, map, infoWindow, _loop, _i3, marker_icon, origin, destination, return_pt, n, _this, i, parts_driver_address, max, parts, marker_origin_number, array_routed_addresses, origin_por_recorrido, waypoints, j, services_options, _loop2, _i4, car, icon, _i5, a, b, _j;

            return _regeneratorRuntime().wrap(function _callee40$(_context40) {
              while (1) {
                switch (_context40.prev = _context40.next) {
                  case 0:
                    if (!this.network.getNetworkStatus().connected) {
                      _context40.next = 64;
                      break;
                    }

                    _context40.next = 3;
                    return this.ui.loading("Por favor espere...");

                  case 3:
                    loader = _context40.sent;
                    _context40.prev = 4;

                    if (this.order.status_order != 25 && this.order.status_order != 31 && this.order.status_order != 48) {
                      if (localStorage.getItem("latitude") && localStorage.getItem("longitude")) {
                        latitude = localStorage.getItem("latitude");
                        longitude = localStorage.getItem("longitude");
                      } else {}

                      this.details.unshift({
                        latitude: latitude,
                        longitude: longitude
                      });
                      this.latitude = latitude;
                      this.longitude = longitude;
                    }

                    if (this.order.status_order != 25) {
                      this.order.details.map(function (d) {
                        _this28.details.push({
                          id: d.id,
                          latitude: d.latitude,
                          longitude: d.longitude
                        });
                      });
                    }

                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer({
                      suppressMarkers: true
                    }); //puntos de referencia para agregar

                    waypts = [];
                    markers = [];
                    infos = []; //coordenadas de los puntos de ruta

                    for (_i2 = 0; _i2 < this.details.length; _i2++) {
                      if (this.details[_i2].latitude && this.details[_i2].longitude) {
                        latlng = {
                          lat: parseFloat(this.details[_i2].latitude),
                          lng: parseFloat(this.details[_i2].longitude)
                        };
                        waypts.push({
                          location: latlng,
                          stopover: true
                        });
                      }
                    }

                    console.log("Way Points", waypts); //creo mapa

                    center = {
                      lat: waypts[0].location.lat,
                      lng: waypts[0].location.lng
                    };
                    map = new google.maps.Map(document.getElementById('map'), {
                      zoom: 8,
                      center: {
                        lat: waypts[0].location.lat,
                        lng: waypts[0].location.lng
                      },
                      mapTypeControl: false,
                      zoomControl: true,
                      streetViewControl: false
                    });
                    this.map = map; //muestro el mapa

                    directionsDisplay.setMap(map); //ventanas de informacion

                    infoWindow = new google.maps.InfoWindow(); //coordenadas markers personalizados con ventana de información

                    if (this.details.length < 25) {
                      _loop = function _loop(_i3) {
                        var latlng = {
                          lat: parseFloat(_this28.details[_i3].latitude),
                          lng: parseFloat(_this28.details[_i3].longitude)
                        };
                        console.log("Marker Url", _this28.markers[_i3]); //Adding icon to the marker

                        var icon_image = {
                          url: _this28.markers[_i3],
                          scaledSize: _i3 == 0 ? new google.maps.Size(35, 50) : new google.maps.Size(35, 50),
                          // The origin for this image is (0, 0).
                          origin: new google.maps.Point(0, 0),
                          // The anchor for this image is the base of the flagpole at (0, 32).
                          anchor: new google.maps.Point(0, 32)
                        };
                        marker_icon = icon_image;
                        var marker = new google.maps.Marker({
                          position: latlng,
                          map: map,
                          icon: marker_icon,
                          id: "dsd",
                          optimized: false
                        });
                        var url = "img[src='" + _this28.markers[0] + "']";
                        console.log("Url", url);
                        var y = document.querySelectorAll("img[src='assets/imgs/moto-new.svg']");
                        _this28.marker_div = document.querySelector(url);

                        _this28.markerPoints.push(marker); // agrego la informacion de la dirección


                        console.log("Detail", _this28.details[_i3]);

                        var df = _this28.order.details.find(function (d) {
                          return d.id == _this28.details[_i3].id;
                        });

                        console.log("Df", df);

                        if (df) {
                          infos.push(df.address);
                        }

                        if (_i3 != 0) {
                          var _y2 = _this28;
                          google.maps.event.addListener(marker, 'click', function (marker, i) {
                            return function () {
                              var df = _y2.order.details.find(function (d) {
                                return d.id == _y2.details[i].id;
                              });

                              console.log("Detail", df);
                              infoWindow.setContent(df.address);
                              infoWindow.open(map, marker);
                            };
                          }(marker, _i3));
                        }
                      };

                      for (_i3 = 0; _i3 < this.details.length; _i3++) {
                        _loop(_i3);
                      }
                    } // pregunto si es ida y vuelta el servicio


                    n = this.order.status_order != 31 ? this.details.length - 1 : waypts.length - 1;
                    console.log("Length Array", n);

                    if (this.order && this.order.round_trip == 1) {
                      console.log("Round trip");
                      origin = {
                        lat: waypts[0].location.lat,
                        lng: waypts[0].location.lng
                      };
                      destination = {
                        lat: waypts[0].location.lat,
                        lng: waypts[0].location.lng
                      };
                      return_pt = {
                        lat: waypts[n].location.lat,
                        lng: waypts[n].location.lng
                      }; //punto de retorno en km y min

                      if (this.order.status_order != 25) {
                        if (this.order.status_order != 31) {
                          this.getDistanceMatrix(return_pt, origin);
                        }
                      }
                    } else {
                      origin = {
                        lat: waypts[0].location.lat,
                        lng: waypts[0].location.lng
                      };
                      destination = {
                        lat: waypts[n].location.lat,
                        lng: waypts[n].location.lng
                      };

                      if (this.order.status_order != 25 && this.order.status_order != 31) {
                        this.getDistanceMatrix(origin, destination);
                      }
                    }

                    _this = this;
                    console.log("Origin", origin, "Destination", destination);
                    console.log("Way Points", waypts);

                    if (!(this.details.length >= 25)) {
                      _context40.next = 51;
                      break;
                    }

                    //DIVIDIMOS EL DRIVER NEAR ADDRRES EN PARTES DE 25, EL CUAL ES EL LIMITE POR SOLICITUD
                    for (i = 0, parts_driver_address = [], max = 23 - 1; i < this.details.length; i = i + max + 1) {
                      parts_driver_address.push(this.details.slice(i, i + max + 1));
                    }

                    for (i = 0, parts = [], max = 23; i < waypts.length; i = i + max) {
                      parts.push(waypts.slice(i, i + max));
                    } //


                    console.log('PARTES DEL WPTS', parts); // AQUI RECOORO EL ARR PARTS Y HAGO LAS DISITINTAS SOLICITUDES

                    /*  **************************************************************************************** */

                    /*   *********************INICIO DEL RECORRIDO DE CADA PARTE ***************************** */

                    /*  **************************************************************************************** */
                    //Aqui definio el numero desde donde empezara el recorrido de marcadore

                    //
                    array_routed_addresses = [];
                    i = 0;

                  case 32:
                    if (!(i < parts.length)) {
                      _context40.next = 46;
                      break;
                    }

                    // CALCULAR LA DIRECCION MAS LEJANA DE LA PARTE ACTUAL 
                    //
                    origin_por_recorrido = void 0;

                    if (i == 0) {
                      origin_por_recorrido = origin;
                      console.log('SEGUNDA PARTE', origin_por_recorrido);
                    } else {
                      origin_por_recorrido = {
                        lat: Number(array_routed_addresses[array_routed_addresses.length - 1].latitude),
                        lng: Number(array_routed_addresses[array_routed_addresses.length - 1].longitude)
                      };
                      console.log('SEGUNDA PARTE', origin_por_recorrido);
                      marker_origin_number = parts[i - 1].length; //
                    }

                    console.log('marker_origin_number', marker_origin_number);
                    waypoints = [];

                    for (j = 0; j < parts[i].length; j++) {
                      waypoints.push(parts[i][j]);
                      console.log('I', i, 'J', j);
                    }

                    services_options = {
                      origin: origin_por_recorrido,
                      destination: destination,
                      waypoints: waypoints,
                      travelMode: google.maps.TravelMode.DRIVING
                    };
                    _context40.next = 41;
                    return this.printDirections(services_options, this.map);

                  case 41:
                    array_routed_addresses = array_routed_addresses.concat(parts_driver_address[i]); // array_routed_addresses = await this.directionServiceFunction(services_options, driver,map,parts_driver_near_address[i]);

                    console.log('ESTE ES EL ARRAY ENRUTADO INICIAL LDM', array_routed_addresses);

                  case 43:
                    i++;
                    _context40.next = 32;
                    break;

                  case 46:
                    _loop2 = function _loop2(_i4) {
                      var latlng = {
                        lat: parseFloat(_this28.details[_i4].latitude),
                        lng: parseFloat(_this28.details[_i4].longitude)
                      };
                      console.log("Marker Url", _this28.markers[_i4]);
                      car = "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z";
                      icon = {
                        path: _this28.markers[0],
                        scale: .7,
                        strokeColor: 'white',
                        strokeWeight: .10,
                        fillOpacity: 1,
                        fillColor: '#404040',
                        offset: '5%',
                        // rotation: parseInt(heading[i]),
                        anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car

                      }; //Adding icon to the marker

                      var icon_image = {
                        url: _this28.markers[_i4],
                        scaledSize: _i4 == 0 ? new google.maps.Size(50, 50) : new google.maps.Size(35, 50),
                        // The origin for this image is (0, 0).
                        origin: new google.maps.Point(0, 0),
                        // The anchor for this image is the base of the flagpole at (0, 32).
                        anchor: new google.maps.Point(0, 32)
                      };
                      marker_icon = icon_image;
                      var marker = new google.maps.Marker({
                        position: latlng,
                        map: map,
                        icon: marker_icon
                      });

                      _this28.markerPoints.push(marker); // agrego la informacion de la dirección


                      console.log("Detail", _this28.details[_i4]);

                      var df = _this28.order.details.find(function (d) {
                        return d.id == _this28.details[_i4].id;
                      });

                      console.log("Df", df);

                      if (df) {
                        infos.push(df.address);
                      }

                      if (_i4 != 0) {
                        var y = _this28;
                        google.maps.event.addListener(marker, 'click', function (marker, i) {
                          return function () {
                            var df = y.order.details.find(function (d) {
                              return d.id == y.details[i].id;
                            });
                            console.log("Detail", df);
                            infoWindow.setContent(df.address);
                            infoWindow.open(map, marker);
                          };
                        }(marker, _i4));
                      }
                    };

                    for (_i4 = 0; _i4 < this.details.length; _i4++) {
                      _loop2(_i4);
                    }

                    _context40.next = 50;
                    return loader;

                  case 50:
                    _context40.sent.dismiss();

                  case 51:
                    if (this.details.length < 25) {
                      directionsService.route({
                        origin: origin,
                        destination: destination,
                        waypoints: waypts,
                        travelMode: google.maps.TravelMode.DRIVING
                      }, function (response, status) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
                          var _this29 = this;

                          var detail, paths, _latitude3, _longitude3, pos_lat_lng, ordered_paths, net_location, next_lat_lng, angle;

                          return _regeneratorRuntime().wrap(function _callee39$(_context39) {
                            while (1) {
                              switch (_context39.prev = _context39.next) {
                                case 0:
                                  _context39.next = 2;
                                  return loader;

                                case 2:
                                  _context39.sent.dismiss();

                                  if (!(status === google.maps.DirectionsStatus.OK)) {
                                    _context39.next = 12;
                                    break;
                                  }

                                  directionsDisplay.setDirections(response);
                                  console.log("center", center);
                                  console.log("Response Directions", response);

                                  _this.map.setCenter(center);

                                  if (_this.order.status_order != 25 && _this.order.status_order != 31 && _this.order.status_order != 48 && _this.order.status_order != 36) {
                                    _this.realtime.getFirebaseCollectionObject("status_order_mobile/".concat(_this.order.city_id, "/").concat(_this.order.customer_id, "/").concat(_this.order.id)).valueChanges().subscribe(function (res) {
                                      if (res != null) {
                                        if (res.status_order == 31) {
                                          _this.dismiss();

                                          _this.clearLocals();

                                          if (_this29.subscription) {
                                            _this.subscription.unsubscribe();
                                          }

                                          if (_this29.subscription2) {
                                            _this.subscription2.unsubscribe();
                                          }

                                          _this.ui.presentAlert({
                                            mode: 'ios',
                                            header: 'Advertencia',
                                            message: 'La orden ha sido cancelada por el cliente',
                                            buttons: [{
                                              text: 'Aceptar',
                                              role: 'cancel',
                                              cssClass: 'secondary',
                                              handler: function handler(blah) {}
                                            }]
                                          });

                                          return;
                                        }
                                      }
                                    });
                                  }

                                  if (_this.order.status_order != 25 && _this.order.status_order != 31) {
                                    _this.changeAvailability(true);

                                    detail = _this.details[0];
                                    console.log("Routes", response.routes);
                                    console.log("Overview Path", response.routes[0].overview_path);
                                    paths = [];
                                    response.routes[0].overview_path.map(function (l) {
                                      paths.push({
                                        lat: l.lat(),
                                        lng: l.lng()
                                      });
                                    });
                                    console.log("Path", paths);
                                    _this.paths = paths;

                                    if (localStorage.getItem("latitude") && localStorage.getItem("longitude")) {
                                      _latitude3 = localStorage.getItem("latitude");
                                      _longitude3 = localStorage.getItem("longitude");
                                      pos_lat_lng = new google.maps.LatLng(parseFloat(_latitude3), parseFloat(_longitude3));
                                      ordered_paths = _this.paths.sort(function (a, b) {
                                        return _this.place.calcCrow(a.lat, a.lng, _latitude3, _longitude3) - _this.place.calcCrow(b.lat, b.lng, _latitude3, _longitude3);
                                      });
                                      net_location = _this.paths.find(function (p) {
                                        return !p.read;
                                      });
                                      net_location.read = true;
                                      next_lat_lng = new google.maps.LatLng(net_location.lat, net_location.lng);
                                      angle = _this.rotateMarker('assets/imgs/moto-new.svg', pos_lat_lng, next_lat_lng);

                                      _this.updatePosition(_this.auth.user.id, _this.auth.vehicles.id, _latitude3, _longitude3, _this.order.id, angle);
                                    }
                                  }

                                  _context39.next = 16;
                                  break;

                                case 12:
                                  _this.clearLocals();

                                  _context39.next = 15;
                                  return _this.ui.presentAlert({
                                    mode: 'ios',
                                    header: 'No se ha podido mostrar el mapa',
                                    message: status,
                                    buttons: [{
                                      text: 'Aceptar',
                                      role: 'cancel',
                                      cssClass: 'secondary',
                                      handler: function handler(blah) {
                                        _this.dismiss();
                                      }
                                    }]
                                  });

                                case 15:
                                  console.log('Ha fallat la comunicació amb el mapa a causa de: ' + status);

                                case 16:
                                case "end":
                                  return _context39.stop();
                              }
                            }
                          }, _callee39);
                        }));
                      });
                    } //calcular distancia


                    if (this.order.status_order != 25 && this.order.status_order != 31) {
                      for (_i5 = 0; _i5 < waypts.length; _i5++) {
                        a = null, b = null;

                        if (_i5 < waypts.length - 1) {
                          a = {
                            lat: waypts[_i5].location.lat,
                            lng: waypts[_i5].location.lng
                          };
                        }

                        _j = _i5 + 1;

                        if (_j <= waypts.length - 1) {
                          b = {
                            lat: waypts[_j].location.lat,
                            lng: waypts[_j].location.lng
                          };
                        }

                        if (a != null && b != null) {
                          this.getDistanceMatrix(a, b);
                        }
                      }
                    }

                    _context40.next = 62;
                    break;

                  case 55:
                    _context40.prev = 55;
                    _context40.t0 = _context40["catch"](4);
                    _context40.next = 59;
                    return loader;

                  case 59:
                    _context40.sent.dismiss();

                    // this.ui.showToast("No se pudo obtener la ubicación load MAp")
                    console.log("Error", _context40.t0);
                    return _context40.abrupt("return");

                  case 62:
                    _context40.next = 65;
                    break;

                  case 64:
                    this.ui.showToast("Verifique su conexión e intentelo de nuevo", function () {
                      localStorage.removeItem("current_order");

                      _this28.clearLocals();

                      _this28.dismiss();
                    });

                  case 65:
                  case "end":
                    return _context40.stop();
                }
              }
            }, _callee40, this, [[4, 55]]);
          }));
        }
      }, {
        key: "printDirections",
        value: function printDirections(service_options, map) {
          var _this = this;

          var directionsService = new google.maps.DirectionsService();
          var directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true
          });
          directionsDisplay.setMap(map);
          return new Promise(function (resolve, reject) {
            directionsService.route(service_options, function (response, status) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
                return _regeneratorRuntime().wrap(function _callee41$(_context41) {
                  while (1) {
                    switch (_context41.prev = _context41.next) {
                      case 0:
                        // (await loader).dismiss()
                        if (status === google.maps.DirectionsStatus.OK) {
                          directionsDisplay.setDirections(response);
                          resolve({}); // console.log("center", center)
                          // _this.map.setCenter(center)

                          if (_this.order.status_order != 25 && _this.order.status_order != 31) {
                            _this.changeAvailability(true);
                          }
                        } else {
                          resolve({});

                          _this.clearLocals();

                          console.log('Ha fallat la comunicació amb el mapa a causa de: ' + status);
                        }

                      case 1:
                      case "end":
                        return _context41.stop();
                    }
                  }
                }, _callee41);
              }));
            });
          });
        }
      }, {
        key: "callANumber",
        value: function callANumber(number) {
          clearInterval(this.positionTracking);
          console.log("Phone", number);
          this.ui.call(number);
        }
      }, {
        key: "parseFloat",
        value: function (_parseFloat) {
          function parseFloat(_x) {
            return _parseFloat.apply(this, arguments);
          }

          parseFloat.toString = function () {
            return _parseFloat.toString();
          };

          return parseFloat;
        }(function (_long) {
          return parseFloat(_long);
        })
      }, {
        key: "getDistanceMatrix",
        value: function getDistanceMatrix(origin, destination, loader) {
          var service = new google.maps.DistanceMatrixService();

          var _this = this; //calculo distancia


          service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
          }, function (response, status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
              var _response$rows$0$elem, distance, dur, distance_text, duration;

              return _regeneratorRuntime().wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      if (!(status != google.maps.DistanceMatrixStatus.OK)) {
                        _context42.next = 6;
                        break;
                      }

                      _context42.next = 3;
                      return _this.ui.presentAlert({
                        mode: 'ios',
                        header: 'No se pudo mostrar el mapa, verifique su conexión y reintentelo de nuevo',
                        buttons: [{
                          text: 'Aceptar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');

                            _this.dismiss();
                          }
                        }]
                      });

                    case 3:
                      console.log("Error was: " + status);
                      _context42.next = 7;
                      break;

                    case 6:
                      try {
                        _response$rows$0$elem = response.rows[0].elements[0], distance = _response$rows$0$elem.distance, dur = _response$rows$0$elem.duration;
                        console.log("Response", response.rows[0].elements[0]);
                        distance_text = response.rows[0].elements[0].distance.text;
                        console.log("Distance Text", distance_text);
                        duration = dur.value;

                        _this.getCalculateDistance(distance_text, duration);
                      } catch (e) {
                        console.log("error", e);
                      }

                    case 7:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42);
            }));
          });
        }
      }, {
        key: "getCalculateDistance",
        value: function getCalculateDistance(distance, duration) {
          this.distance = distance; // this.duration = 0;

          var y = Number(duration);
          this.duration += duration;
          var hour;
          var minutes;

          if (this.duration >= 3600) {
            hour = (this.duration / 3600).toFixed(0);

            if (this.duration - 3600 >= 60) {
              minutes = ((this.duration - 3600) / 60).toFixed(0);

              if (minutes > 60) {
                hour = Number(hour) + Number((minutes / 60).toFixed(0));
                minutes -= Number((minutes / 60).toFixed(0)) * 60;
              }
            } else {
              minutes = 1 .toFixed(0);
            }
          } else {
            minutes = (this.duration / 60).toFixed(0);
          }

          var hour_unit = Number(hour) == 1 ? ' hora' : this.duration < 3600 ? '' : ' horas';
          var min_unit = Number(minutes) == 1 ? ' minuto' : ' minutos';
          hour = hour ? hour : '';
          this.duration_text = hour + hour_unit + " " + minutes + min_unit;
        }
        /**
         * This method is for calculate the distance between the current location
         * and the detail is currently active
         */

      }, {
        key: "calculateAndEndDetail",
        value: function calculateAndEndDetail(item, latitude, longitude) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
            var _this30 = this;

            var y;
            return _regeneratorRuntime().wrap(function _callee46$(_context46) {
              while (1) {
                switch (_context46.prev = _context46.next) {
                  case 0:
                    this.detailActive.loading = true;
                    this.detailActive.text_loading = "Calculando la distancia";
                    y = this.place.calcCrow(latitude, longitude, parseFloat(this.detailActive.latitude), parseFloat(this.detailActive.longitude));
                    console.log("Distance", y);

                    if (!this.equal_or_greater_than_a_kilometer) {
                      y = Number(y) * 1000;
                    }

                    console.log("Y ", y);
                    this.minimum_distance = this.minimum_distance ? this.minimum_distance : 1;
                    this.detailActive.loading = false;
                    this.detailActive.text_loading = "";

                    if (!(y <= Number(this.minimum_distance))) {
                      _context46.next = 14;
                      break;
                    }

                    _context46.next = 12;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: '¿Desea notificar que ya llegaste a este punto?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Sí',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this30, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
                            var _this31 = this;

                            var data, latitude, longitude;
                            return _regeneratorRuntime().wrap(function _callee45$(_context45) {
                              while (1) {
                                switch (_context45.prev = _context45.next) {
                                  case 0:
                                    clearInterval(this.positionTracking);
                                    this.detailActive.loading = true;
                                    this.detailActive.text_loading = "Enviando la información";
                                    data = new FormData();
                                    latitude = localStorage.getItem("latitude");
                                    longitude = localStorage.getItem("longitude");
                                    data.append("order_detail_id", this.detailActive.id);
                                    data.append("latitude", latitude);
                                    data.append("longitude", longitude);
                                    data.append("description", "El mensajero ya llegó al destino " + this.detailActive.address);
                                    data.append("user_id", this.auth.user.id.toString());
                                    this.request.post('driver/register_event', data).subscribe(function (res) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this31, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
                                        return _regeneratorRuntime().wrap(function _callee43$(_context43) {
                                          while (1) {
                                            switch (_context43.prev = _context43.next) {
                                              case 0:
                                                this.detailActive.loading = false;
                                                this.detailActive.text_loading = "";

                                                if (this.order.diligence) {
                                                  this.initTimer();
                                                }

                                                item.ended = true; //Update real time timer for the client

                                                this.realtime.getFirebaseCollection("order_detail_report/".concat(this.order.id, "/").concat(this.detailActive.id)).update(Object.assign({}, item));
                                                localStorage.setItem("current_order", JSON.stringify(this.order));

                                              case 6:
                                              case "end":
                                                return _context43.stop();
                                            }
                                          }
                                        }, _callee43, this);
                                      }));
                                    }, function (err) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this31, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
                                        return _regeneratorRuntime().wrap(function _callee44$(_context44) {
                                          while (1) {
                                            switch (_context44.prev = _context44.next) {
                                              case 0:
                                                console.log("Error", err);
                                                this.detailActive.loading = false;
                                                this.detailActive.text_loading = "";

                                              case 3:
                                              case "end":
                                                return _context44.stop();
                                            }
                                          }
                                        }, _callee44, this);
                                      }));
                                    });

                                  case 12:
                                  case "end":
                                    return _context45.stop();
                                }
                              }
                            }, _callee45, this);
                          }));
                        }
                      }]
                    });

                  case 12:
                    _context46.next = 16;
                    break;

                  case 14:
                    _context46.next = 16;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: 'Advertencia',
                      message: 'Para poder finalizar, <br>debes estar cerca de la dirección',
                      buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }]
                    });

                  case 16:
                  case "end":
                    return _context46.stop();
                }
              }
            }, _callee46, this);
          }));
        }
      }, {
        key: "end",
        value: function end(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
            var _this32 = this;

            var loader, position, latitude, longitude, _latitude4, _longitude4, _position, _latitude5, _longitude5, _latitude6, _longitude6;

            return _regeneratorRuntime().wrap(function _callee59$(_context59) {
              while (1) {
                switch (_context59.prev = _context59.next) {
                  case 0:
                    if (!this.network.getNetworkStatus().connected) {
                      _context59.next = 109;
                      break;
                    }

                    console.log("Detail", item); //Validate if the deatil isn't finished

                    if (!(item.status != 25 && item.status != 48)) {
                      _context59.next = 106;
                      break;
                    }

                    if (!this.order.diligence) {
                      _context59.next = 55;
                      break;
                    }

                    if (this.detailActive.ended) {
                      _context59.next = 51;
                      break;
                    }

                    if (!(this.proximity == 1)) {
                      _context59.next = 47;
                      break;
                    }

                    this.detailActive.loading = true;
                    this.detailActive.text_loading = "Obteniendo tu ubicación"; //Getting the current user location

                    _context59.prev = 8;

                    if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Capacitor"].platform != 'web')) {
                      _context59.next = 15;
                      break;
                    }

                    _context59.next = 12;
                    return cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_14__["default"].getCurrentPosition({
                      timeout: 30000
                    });

                  case 12:
                    position = _context59.sent;
                    _context59.next = 18;
                    break;

                  case 15:
                    _context59.next = 17;
                    return Geolocation.getCurrentPosition({
                      timeout: 30000
                    });

                  case 17:
                    position = _context59.sent;

                  case 18:
                    this.detailActive.loading = false;
                    this.detailActive.text_loading = "";
                    latitude = position.coords.latitude;
                    longitude = position.coords.longitude;
                    this.latitude = latitude;
                    this.longitude = longitude;
                    localStorage.setItem("latitude", latitude.toString());
                    localStorage.setItem("longitude", longitude.toString());
                    this.calculateAndEndDetail(item, latitude, longitude);
                    _context59.next = 45;
                    break;

                  case 29:
                    _context59.prev = 29;
                    _context59.t0 = _context59["catch"](8);
                    this.detailActive.loading = false;
                    this.detailActive.text_loading = ""; // (await loader).dismiss();
                    // this.ui.showToast("Error Geolocation" + e)

                    _latitude4 = localStorage.getItem("latitude");
                    _longitude4 = localStorage.getItem("longitude");

                    if (!(_latitude4 && _longitude4)) {
                      _context59.next = 43;
                      break;
                    }

                    this.latitude = _latitude4;
                    this.longitude = _longitude4;
                    localStorage.setItem("latitude", _latitude4.toString());
                    localStorage.setItem("longitude", _longitude4.toString());
                    this.calculateAndEndDetail(item, _latitude4, _longitude4);
                    _context59.next = 45;
                    break;

                  case 43:
                    _context59.next = 45;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: 'Advertencia',
                      message: 'Su ubicación no está disponible ',
                      buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }]
                    });

                  case 45:
                    _context59.next = 49;
                    break;

                  case 47:
                    _context59.next = 49;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: '¿Desea notificar que ya llegaste a este punto?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Sí',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this32, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
                            var _this33 = this;

                            var data, latitude, longitude;
                            return _regeneratorRuntime().wrap(function _callee49$(_context49) {
                              while (1) {
                                switch (_context49.prev = _context49.next) {
                                  case 0:
                                    clearInterval(this.positionTracking);
                                    this.detailActive.loading = true;
                                    this.detailActive.text_loading = "Enviando información";
                                    data = new FormData();
                                    latitude = localStorage.getItem("latitude");
                                    longitude = localStorage.getItem("latitude");
                                    data.append("order_detail_id", this.detailActive.id);
                                    data.append("latitude", latitude.toString());
                                    data.append("longitude", longitude.toString());
                                    data.append("description", "El mensajero ya llegó al destino " + this.detailActive.address);
                                    data.append("user_id", this.auth.user.id.toString());
                                    this.request.post('driver/register_event', data).subscribe(function (res) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
                                        return _regeneratorRuntime().wrap(function _callee47$(_context47) {
                                          while (1) {
                                            switch (_context47.prev = _context47.next) {
                                              case 0:
                                                this.detailActive.loading = false;
                                                this.detailActive.text_loading = "";

                                                if (this.order.diligence == 1) {
                                                  this.initTimer();
                                                }

                                                item.ended = true;
                                                this.realtime.getFirebaseCollection("order_detail_report/".concat(this.order.id, "/").concat(this.detailActive.id)).update(Object.assign({}, item));

                                              case 5:
                                              case "end":
                                                return _context47.stop();
                                            }
                                          }
                                        }, _callee47, this);
                                      }));
                                    }, function (err) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
                                        return _regeneratorRuntime().wrap(function _callee48$(_context48) {
                                          while (1) {
                                            switch (_context48.prev = _context48.next) {
                                              case 0:
                                                console.log("Error", err);
                                                this.detailActive.loading = false;
                                                this.detailActive.text_loading = "";

                                              case 3:
                                              case "end":
                                                return _context48.stop();
                                            }
                                          }
                                        }, _callee48, this);
                                      }));
                                    });

                                  case 12:
                                  case "end":
                                    return _context49.stop();
                                }
                              }
                            }, _callee49, this);
                          }));
                        }
                      }]
                    });

                  case 49:
                    _context59.next = 53;
                    break;

                  case 51:
                    _context59.next = 53;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: 'Finalizar',
                      buttons: [{
                        text: 'Finalizado con éxito',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          _this32.initTimerB = false;

                          _this32.sTopTimer();

                          _this32.endDetail(item);
                        }
                      }, {
                        text: 'El cliente no se presentó',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this32, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
                            var _this34 = this;

                            var data, _loader;

                            return _regeneratorRuntime().wrap(function _callee52$(_context52) {
                              while (1) {
                                switch (_context52.prev = _context52.next) {
                                  case 0:
                                    if (!(this.m >= Number(this.order.time_wait))) {
                                      _context52.next = 17;
                                      break;
                                    }

                                    this.detailActive.loading = true;
                                    this.detailActive.text_loading = "Enviando información";
                                    data = new FormData();
                                    data.append("order_detail_id", this.detailActive.id);
                                    data.append("latitude", this.latitude.toString());
                                    data.append("longitude", this.longitude.toString());
                                    data.append("wait_time", this.detailActive.timer ? this.detailActive.timer.minutes ? this.detailActive.timer.minutes.toString() : 0 .toString() : 0 .toString());
                                    data.append("surplus_money", this.detailActive.total_charge ? this.detailActive.total_charge.toString() : 0 .toString());
                                    data.append("description", "El cliente no se presentó " + this.detailActive.address);
                                    data.append("user_id", this.auth.user.id.toString());
                                    _context52.next = 13;
                                    return this.ui.loading("Por favor espere...");

                                  case 13:
                                    _loader = _context52.sent;
                                    this.request.post("driver/delivery_change_order_to_ineffective", data).subscribe(function (res) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this34, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
                                        var _this35 = this;

                                        var cash;
                                        return _regeneratorRuntime().wrap(function _callee50$(_context50) {
                                          while (1) {
                                            switch (_context50.prev = _context50.next) {
                                              case 0:
                                                _context50.next = 2;
                                                return _loader;

                                              case 2:
                                                _context50.sent.dismiss();

                                                this.initTimerB = false;
                                                this.sTopTimer();
                                                this.detailActive.loading = false;
                                                this.detailActive.text_loading = "";
                                                item.status = 48;
                                                item.ended = true;
                                                cash = 0;
                                                localStorage.setItem("current_order", JSON.stringify(this.order));
                                                console.log("No effective", res);

                                                if (!(res.data.order_no_effective || this.getOrderDetailStatusSuccessful())) {
                                                  _context50.next = 15;
                                                  break;
                                                }

                                                _context50.next = 15;
                                                return this.ui.presentAlert({
                                                  mode: 'ios',
                                                  header: 'Advertencia',
                                                  message: 'La orden no ha sido efectiva',
                                                  buttons: [{
                                                    text: 'Aceptar',
                                                    role: 'cancel',
                                                    cssClass: 'secondary',
                                                    handler: function handler(blah) {
                                                      _this35.clearLocals();

                                                      _this35.dismiss();
                                                    }
                                                  }]
                                                });

                                              case 15:
                                                //Update real time timer for the client
                                                this.realtime.getFirebaseCollection("order_detail_report/".concat(this.order.id, "/").concat(item.id)).update({
                                                  status: 48
                                                });

                                              case 16:
                                              case "end":
                                                return _context50.stop();
                                            }
                                          }
                                        }, _callee50, this);
                                      }));
                                    }, function (err) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this34, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
                                        return _regeneratorRuntime().wrap(function _callee51$(_context51) {
                                          while (1) {
                                            switch (_context51.prev = _context51.next) {
                                              case 0:
                                                console.log("Err", err);
                                                _context51.next = 3;
                                                return _loader;

                                              case 3:
                                                _context51.sent.dismiss();

                                                if (!(err.status == 200)) {
                                                  _context51.next = 7;
                                                  break;
                                                }

                                                _context51.next = 7;
                                                return this.ui.presentAlert({
                                                  mode: 'ios',
                                                  header: 'El detalle ha sido marcado como no efectivo',
                                                  buttons: [{
                                                    text: 'Aceptar',
                                                    role: 'cancel',
                                                    cssClass: 'secondary',
                                                    handler: function handler(blah) {}
                                                  }]
                                                });

                                              case 7:
                                                if (!(err.status == 400)) {
                                                  _context51.next = 10;
                                                  break;
                                                }

                                                _context51.next = 10;
                                                return this.ui.presentAlert({
                                                  mode: 'ios',
                                                  header: 'Error',
                                                  message: err.error.messages[0],
                                                  buttons: [{
                                                    text: 'Aceptar',
                                                    role: 'cancel',
                                                    cssClass: 'secondary',
                                                    handler: function handler(blah) {}
                                                  }]
                                                });

                                              case 10:
                                              case "end":
                                                return _context51.stop();
                                            }
                                          }
                                        }, _callee51, this);
                                      }));
                                    });
                                    _context52.next = 19;
                                    break;

                                  case 17:
                                    _context52.next = 19;
                                    return this.ui.presentAlert({
                                      mode: 'ios',
                                      header: 'No se puede finalizar esta dirección ',
                                      message: 'Al menos debe esperar ' + this.order.time_wait + ' minutos para poder finalizarlo',
                                      buttons: [{
                                        text: 'Aceptar',
                                        role: '',
                                        cssClass: 'secondary',
                                        handler: function handler(blah) {}
                                      }]
                                    });

                                  case 19:
                                  case "end":
                                    return _context52.stop();
                                }
                              }
                            }, _callee52, this);
                          }));
                        }
                      }]
                    });

                  case 53:
                    _context59.next = 104;
                    break;

                  case 55:
                    if (this.detailActive.ended) {
                      _context59.next = 102;
                      break;
                    }

                    if (!(this.proximity == 1)) {
                      _context59.next = 98;
                      break;
                    }

                    this.detailActive.loading = true;
                    this.detailActive.text_loading = "Obteniendo tu ubicación";
                    _context59.prev = 59;

                    if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Capacitor"].platform != 'web')) {
                      _context59.next = 66;
                      break;
                    }

                    _context59.next = 63;
                    return cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_14__["default"].getCurrentPosition({
                      timeout: 30000
                    });

                  case 63:
                    _position = _context59.sent;
                    _context59.next = 69;
                    break;

                  case 66:
                    _context59.next = 68;
                    return Geolocation.getCurrentPosition({
                      timeout: 30000
                    });

                  case 68:
                    _position = _context59.sent;

                  case 69:
                    this.detailActive.loading = false;
                    this.detailActive.text_loading = "";
                    _latitude5 = _position.coords.latitude;
                    _longitude5 = _position.coords.longitude;
                    this.latitude = _latitude5;
                    this.longitude = _longitude5;
                    localStorage.setItem("latitude", _latitude5.toString());
                    localStorage.setItem("longitude", _longitude5.toString());
                    this.calculateAndEndDetail(item, _latitude5, _longitude5);
                    _context59.next = 96;
                    break;

                  case 80:
                    _context59.prev = 80;
                    _context59.t1 = _context59["catch"](59);
                    this.detailActive.loading = false;
                    this.detailActive.text_loading = "";
                    _latitude6 = localStorage.getItem("latitude");
                    _longitude6 = localStorage.getItem("longitude");

                    if (!(_latitude6 && _longitude6)) {
                      _context59.next = 94;
                      break;
                    }

                    this.latitude = _latitude6;
                    this.longitude = _longitude6;
                    localStorage.setItem("latitude", _latitude6.toString());
                    localStorage.setItem("longitude", _longitude6.toString());
                    this.calculateAndEndDetail(item, _latitude6, _longitude6);
                    _context59.next = 96;
                    break;

                  case 94:
                    _context59.next = 96;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: 'Advertencia',
                      message: 'Su ubicación no está disponible ',
                      buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }]
                    });

                  case 96:
                    _context59.next = 100;
                    break;

                  case 98:
                    _context59.next = 100;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: '¿Desea notificar que ya llegaste a este punto?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Sí',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this32, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
                            var _this36 = this;

                            var data;
                            return _regeneratorRuntime().wrap(function _callee55$(_context55) {
                              while (1) {
                                switch (_context55.prev = _context55.next) {
                                  case 0:
                                    clearInterval(this.positionTracking);
                                    this.detailActive.loading = true;
                                    this.detailActive.text_loading = "Enviando información";
                                    data = new FormData();
                                    data.append("order_detail_id", this.detailActive.id);
                                    data.append("latitude", this.latitude.toString());
                                    data.append("longitude", this.longitude.toString());
                                    data.append("description", "El mensajero ya llegó al destino " + this.detailActive.address);
                                    data.append("user_id", this.auth.user.id.toString());
                                    this.request.post('driver/register_event', data).subscribe(function (res) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this36, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
                                        return _regeneratorRuntime().wrap(function _callee53$(_context53) {
                                          while (1) {
                                            switch (_context53.prev = _context53.next) {
                                              case 0:
                                                this.detailActive.loading = false;
                                                this.detailActive.text_loading = "";

                                                if (this.order.diligence == 1) {
                                                  this.initTimer();
                                                }

                                                item.ended = true;
                                                this.realtime.getFirebaseCollection("order_detail_report/".concat(this.order.id, "/").concat(this.detailActive.id)).update(Object.assign({}, item));

                                              case 5:
                                              case "end":
                                                return _context53.stop();
                                            }
                                          }
                                        }, _callee53, this);
                                      }));
                                    }, function (err) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this36, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee54() {
                                        return _regeneratorRuntime().wrap(function _callee54$(_context54) {
                                          while (1) {
                                            switch (_context54.prev = _context54.next) {
                                              case 0:
                                                console.log("Error", err);
                                                this.detailActive.loading = false;
                                                this.detailActive.text_loading = "";

                                              case 3:
                                              case "end":
                                                return _context54.stop();
                                            }
                                          }
                                        }, _callee54, this);
                                      }));
                                    });

                                  case 10:
                                  case "end":
                                    return _context55.stop();
                                }
                              }
                            }, _callee55, this);
                          }));
                        }
                      }]
                    });

                  case 100:
                    _context59.next = 104;
                    break;

                  case 102:
                    _context59.next = 104;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: 'Finalizar',
                      buttons: [{
                        text: 'Finalizado con éxito',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          _this32.endDetail(item);
                        }
                      }, {
                        text: 'El cliente no se presentó',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this32, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
                            var _this37 = this;

                            var data;
                            return _regeneratorRuntime().wrap(function _callee58$(_context58) {
                              while (1) {
                                switch (_context58.prev = _context58.next) {
                                  case 0:
                                    data = new FormData();
                                    data.append("order_detail_id", this.detailActive.id);
                                    data.append("latitude", this.latitude.toString());
                                    data.append("longitude", this.longitude.toString());
                                    data.append("wait_time", this.detailActive.timer ? this.detailActive.timer.minutes ? this.detailActive.timer.minutes.toString() : 0 .toString() : 0 .toString());
                                    data.append("surplus_money", this.detailActive.total_charge ? this.detailActive.total_charge.toString() : 0 .toString());
                                    data.append("description", "El cliente no se presentó " + this.detailActive.address);
                                    data.append("user_id", this.auth.user.id.toString());
                                    this.detailActive.loading = true;
                                    this.detailActive.text_loading = "Enviando información";
                                    this.request.post("driver/delivery_change_order_to_ineffective", data).subscribe(function (res) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this37, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
                                        var _this38 = this;

                                        return _regeneratorRuntime().wrap(function _callee56$(_context56) {
                                          while (1) {
                                            switch (_context56.prev = _context56.next) {
                                              case 0:
                                                this.detailActive.loading = false;
                                                this.detailActive.text_loading = "";
                                                this.initTimerB = false;
                                                this.sTopTimer();
                                                item.status = 48;
                                                this.realtime.getFirebaseCollection("order_detail_report/".concat(this.order.id, "/").concat(item.id)).update(Object.assign({}, item));
                                                localStorage.setItem("current_order", JSON.stringify(this.order));
                                                console.log("No effective", res);

                                                if (!(res.data.order_no_effective || this.getOrderDetailStatusSuccessful())) {
                                                  _context56.next = 11;
                                                  break;
                                                }

                                                _context56.next = 11;
                                                return this.ui.presentAlert({
                                                  mode: 'ios',
                                                  header: 'Advertencia',
                                                  message: 'La orden no ha sido efectiva',
                                                  buttons: [{
                                                    text: 'Aceptar',
                                                    role: 'cancel',
                                                    cssClass: 'secondary',
                                                    handler: function handler(blah) {
                                                      _this38.clearLocals();

                                                      _this38.dismiss();
                                                    }
                                                  }]
                                                });

                                              case 11:
                                              case "end":
                                                return _context56.stop();
                                            }
                                          }
                                        }, _callee56, this);
                                      }));
                                    }, function (err) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this37, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee57() {
                                        return _regeneratorRuntime().wrap(function _callee57$(_context57) {
                                          while (1) {
                                            switch (_context57.prev = _context57.next) {
                                              case 0:
                                                console.log("Err", err);
                                                this.detailActive.loading = false;
                                                this.detailActive.text_loading = "";

                                                if (!(err.status == 200)) {
                                                  _context57.next = 6;
                                                  break;
                                                }

                                                _context57.next = 6;
                                                return this.ui.presentAlert({
                                                  mode: 'ios',
                                                  header: 'El detalle ha sido marcado como no efectivo',
                                                  buttons: [{
                                                    text: 'Aceptar',
                                                    role: 'cancel',
                                                    cssClass: 'secondary',
                                                    handler: function handler(blah) {}
                                                  }]
                                                });

                                              case 6:
                                                if (!(err.status == 400)) {
                                                  _context57.next = 9;
                                                  break;
                                                }

                                                _context57.next = 9;
                                                return this.ui.presentAlert({
                                                  mode: 'ios',
                                                  header: 'Error',
                                                  message: err.error.messages[0],
                                                  buttons: [{
                                                    text: 'Aceptar',
                                                    role: 'cancel',
                                                    cssClass: 'secondary',
                                                    handler: function handler(blah) {}
                                                  }]
                                                });

                                              case 9:
                                              case "end":
                                                return _context57.stop();
                                            }
                                          }
                                        }, _callee57, this);
                                      }));
                                    });

                                  case 11:
                                  case "end":
                                    return _context58.stop();
                                }
                              }
                            }, _callee58, this);
                          }));
                        }
                      }]
                    });

                  case 104:
                    _context59.next = 107;
                    break;

                  case 106:
                    this.ui.showToast("La dirección ya está realizada en el detalle del servicio");

                  case 107:
                    _context59.next = 110;
                    break;

                  case 109:
                    this.ui.showToast("Verifique su conexión");

                  case 110:
                  case "end":
                    return _context59.stop();
                }
              }
            }, _callee59, this, [[8, 29], [59, 80]]);
          }));
        }
      }, {
        key: "endTimeOrder",
        value: function endTimeOrder() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee62() {
            var _this39 = this;

            var loader, data, latitude, longitude;
            return _regeneratorRuntime().wrap(function _callee62$(_context62) {
              while (1) {
                switch (_context62.prev = _context62.next) {
                  case 0:
                    _context62.next = 2;
                    return this.ui.loading("Por favor espere...");

                  case 2:
                    loader = _context62.sent;
                    data = new FormData();
                    latitude = localStorage.getItem("latitude");
                    longitude = localStorage.getItem("longitude");
                    data.append("order_detail_id", this.detailActive.id);
                    data.append("latitude", latitude.toString());
                    data.append("longitude", longitude.toString());
                    data.append("wait_time", this.detailActive.timer ? this.detailActive.timer.minutes ? this.detailActive.timer.minutes.toString() : 0 .toString() : 0 .toString());
                    data.append("surplus_money", this.detailActive.total_charge ? this.detailActive.total_charge.toString() : 0 .toString());
                    data.append("description", "Finalización " + this.detailActive.address);
                    data.append("user_id", this.auth.user.id.toString());
                    this.request.post("driver/end_order_detail", data).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this39, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee60() {
                        var _this40 = this;

                        var detail;
                        return _regeneratorRuntime().wrap(function _callee60$(_context60) {
                          while (1) {
                            switch (_context60.prev = _context60.next) {
                              case 0:
                                _context60.next = 2;
                                return loader;

                              case 2:
                                _context60.sent.dismiss();

                                this.detailActive.status = 25;
                                this.initTimerB = false;
                                this.sTopTimer();
                                localStorage.removeItem("timer");
                                localStorage.removeItem(this.keyDetail);
                                localStorage.removeItem("initTimer");
                                localStorage.removeItem("app_close_date");
                                localStorage.removeItem("app_background_date");
                                console.log("Order", this.order);
                                detail = this.order.details.find(function (d) {
                                  return d == _this40.detailActive;
                                });
                                console.log("Detail", detail);
                                localStorage.setItem("current_order", JSON.stringify(this.order));
                                this.save();

                              case 16:
                              case "end":
                                return _context60.stop();
                            }
                          }
                        }, _callee60, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this39, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee61() {
                        return _regeneratorRuntime().wrap(function _callee61$(_context61) {
                          while (1) {
                            switch (_context61.prev = _context61.next) {
                              case 0:
                                console.log("Error", err);
                                _context61.next = 3;
                                return loader;

                              case 3:
                                _context61.sent.dismiss();

                                if (!(err.status == 400)) {
                                  _context61.next = 7;
                                  break;
                                }

                                _context61.next = 7;
                                return this.ui.presentAlert({
                                  mode: 'ios',
                                  header: err.error.messages[0]
                                });

                              case 7:
                                this.ui.showToast("Ha ocurrido un error");

                              case 8:
                              case "end":
                                return _context61.stop();
                            }
                          }
                        }, _callee61, this);
                      }));
                    });

                  case 14:
                  case "end":
                    return _context62.stop();
                }
              }
            }, _callee62, this);
          }));
        }
      }, {
        key: "cancel",
        value: function cancel() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee67() {
            var _this41 = this;

            return _regeneratorRuntime().wrap(function _callee67$(_context67) {
              while (1) {
                switch (_context67.prev = _context67.next) {
                  case 0:
                    if (!this.network.getNetworkStatus().connected) {
                      _context67.next = 5;
                      break;
                    }

                    _context67.next = 3;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: '¿Estás seguro que quieres cancelar la orden?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Sí',
                        handler: function handler(blah) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this41, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee66() {
                            var _this42 = this;

                            return _regeneratorRuntime().wrap(function _callee66$(_context66) {
                              while (1) {
                                switch (_context66.prev = _context66.next) {
                                  case 0:
                                    _context66.next = 2;
                                    return this.ui.presentAlert({
                                      mode: 'ios',
                                      header: '¿Por qué desea cancelarla?',
                                      inputs: [{
                                        name: 'why',
                                        id: 'paragraph',
                                        type: 'textarea',
                                        placeholder: 'Razón',
                                        mode: 'ios'
                                      }],
                                      buttons: [{
                                        text: 'Enviar',
                                        handler: function handler(res) {
                                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this42, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
                                            var _this43 = this;

                                            var latitude, longitude, data, detail, loader;
                                            return _regeneratorRuntime().wrap(function _callee65$(_context65) {
                                              while (1) {
                                                switch (_context65.prev = _context65.next) {
                                                  case 0:
                                                    latitude = localStorage.getItem("latitude");
                                                    longitude = localStorage.getItem("longitude");
                                                    data = new FormData();
                                                    detail = this.detailActive ? this.detailActive : this.details[this.details.length - 1];
                                                    data.append("order_detail_id", detail.id);
                                                    data.append("latitude", latitude.toString());
                                                    data.append("longitude", longitude.toString());
                                                    data.append("description", res.why);
                                                    data.append("user_id", this.auth.user.id.toString());
                                                    _context65.next = 11;
                                                    return this.ui.loading("Por favor espere...");

                                                  case 11:
                                                    loader = _context65.sent;
                                                    this.request.post('driver/delivery_cancel_order', data).subscribe(function (res) {
                                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this43, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
                                                        return _regeneratorRuntime().wrap(function _callee63$(_context63) {
                                                          while (1) {
                                                            switch (_context63.prev = _context63.next) {
                                                              case 0:
                                                                _context63.next = 2;
                                                                return loader;

                                                              case 2:
                                                                _context63.sent.dismiss();

                                                                this.order.status_order = 25;
                                                                localStorage.removeItem("current_order");
                                                                this.clearLocals();

                                                                if (this.subscription) {
                                                                  this.subscription.unsubscribe();
                                                                }

                                                                if (this.subscription2) {
                                                                  this.subscription2.unsubscribe();
                                                                }

                                                                this.dismiss();

                                                              case 9:
                                                              case "end":
                                                                return _context63.stop();
                                                            }
                                                          }
                                                        }, _callee63, this);
                                                      }));
                                                    }, function (err) {
                                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this43, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
                                                        return _regeneratorRuntime().wrap(function _callee64$(_context64) {
                                                          while (1) {
                                                            switch (_context64.prev = _context64.next) {
                                                              case 0:
                                                                _context64.next = 2;
                                                                return loader;

                                                              case 2:
                                                                _context64.sent.dismiss();

                                                                _context64.next = 5;
                                                                return this.ui.presentAlert({
                                                                  mode: 'ios',
                                                                  header: 'No se ha podido cancelar la orden',
                                                                  buttons: [{
                                                                    text: "Aceptar",
                                                                    role: 'cancel',
                                                                    handler: function handler() {}
                                                                  }]
                                                                });

                                                              case 5:
                                                              case "end":
                                                                return _context64.stop();
                                                            }
                                                          }
                                                        }, _callee64, this);
                                                      }));
                                                    });

                                                  case 13:
                                                  case "end":
                                                    return _context65.stop();
                                                }
                                              }
                                            }, _callee65, this);
                                          }));
                                        }
                                      }]
                                    });

                                  case 2:
                                  case "end":
                                    return _context66.stop();
                                }
                              }
                            }, _callee66, this);
                          }));
                        }
                      }]
                    });

                  case 3:
                    _context67.next = 6;
                    break;

                  case 5:
                    this.ui.showToast("Verifique su conexión");

                  case 6:
                  case "end":
                    return _context67.stop();
                }
              }
            }, _callee67, this);
          }));
        }
      }, {
        key: "endDetail",
        value: function endDetail(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee70() {
            var _this44 = this;

            var data;
            return _regeneratorRuntime().wrap(function _callee70$(_context70) {
              while (1) {
                switch (_context70.prev = _context70.next) {
                  case 0:
                    if (this.network.getNetworkStatus().connected) {
                      this.detailActive.loading = true;
                      this.detailActive.text_loading = "Enviando información";
                      data = new FormData();
                      data.append("order_detail_id", item.id);
                      data.append("latitude", this.latitude.toString());
                      data.append("longitude", this.longitude.toString());
                      data.append("wait_time", this.detailActive.timer ? this.detailActive.timer.minutes ? this.detailActive.timer.minutes.toString() : 0 .toString() : 0 .toString());
                      data.append("surplus_money", this.detailActive.total_charge ? this.detailActive.total_charge.toString() : 0 .toString());
                      data.append("description", "Finalización " + item.address);
                      data.append("user_id", this.auth.user.id.toString());
                      this.request.post("driver/end_order_detail", data).subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this44, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee68() {
                          var _this45 = this;

                          var detail, amount_to_pay, message, cash, details, wait_time, total_charge, total;
                          return _regeneratorRuntime().wrap(function _callee68$(_context68) {
                            while (1) {
                              switch (_context68.prev = _context68.next) {
                                case 0:
                                  this.detailActive.loading = false;
                                  this.detailActive.text_loading = ""; //Update real time timer for the client

                                  this.realtime.getFirebaseCollection("order_detail_report/".concat(this.order.id, "/").concat(this.detailActive.id)).update(Object.assign(Object.assign({}, item), {
                                    status: 25
                                  }));
                                  item.status = 25;
                                  this.initTimerB = false;
                                  this.sTopTimer();
                                  localStorage.removeItem("timer");
                                  localStorage.removeItem(this.keyDetail);
                                  localStorage.removeItem("initTimer");
                                  localStorage.removeItem("app_close_date");
                                  localStorage.removeItem("app_background_date");
                                  console.log("Order", this.order);
                                  detail = this.order.details.find(function (d) {
                                    return d == item;
                                  });
                                  console.log("Detail", detail);

                                  if (this.order.zapp_store_order == 1) {
                                    this.order.status_order = 54;
                                  }

                                  localStorage.setItem("current_order", JSON.stringify(this.order));

                                  if (!this.getOrderDetailStatusSuccessful()) {
                                    _context68.next = 34;
                                    break;
                                  }

                                  if (this.order.zapp_store_order == 1) {
                                    this.order.status_order = 55;
                                  }

                                  localStorage.setItem("current_order", JSON.stringify(this.order));
                                  amount_to_pay = this.order.payment_method.toLowerCase() == 'efectivo' ? this.order.zapp_store_order == 1 ? Number(this.order.total_zapp_store) : Number(this.order.total) : 0;
                                  message = "Método de pago: <strong>" + this.order.payment_method + "</strong>";
                                  cash = 0;

                                  if (this.order.payment_method.toLowerCase() == 'masivo') {
                                    details = this.order.details ? this.order.details : this.order.detail;
                                    details.forEach(function (d) {
                                      cash += d.declared_value ? d.declared_value : 0;
                                    });
                                    message += "<br> Valor del servicio: <strong>$" + cash + "</strong> <br>";
                                  } else {
                                    message += "<br> Valor del servicio: <strong>$" + amount_to_pay + "</strong> <br>";
                                  }

                                  wait_time = 0;
                                  total_charge = 0;

                                  if (this.order.details) {
                                    this.order.details.map(function (d) {
                                      wait_time += d.wait_time ? Number(d.wait_time) : 0;
                                      total_charge += d.total_charge ? Number(d.total_charge) : 0;
                                    });
                                  } else {
                                    this.order.detail.map(function (d) {
                                      wait_time += d.wait_time ? Number(d.wait_time) : 0;
                                      total_charge += d.total_charge ? Number(d.total_charge) : 0;
                                    });
                                  }

                                  if (total_charge > 0) {
                                    message += " Tiempo de espera : <strong>$" + total_charge + "</strong> <br>";
                                  }

                                  total_charge = Number(total_charge);
                                  total = Number(amount_to_pay + total_charge + cash);
                                  message += "Total a pagar : <strong>$" + total + "</strong>";
                                  _context68.next = 32;
                                  return this.ui.presentAlert({
                                    mode: 'ios',
                                    header: '¡Tu viaje ha finalizado!',
                                    message: message,
                                    backdropDismiss: false,
                                    buttons: [{
                                      text: 'Aceptar',
                                      role: 'cancel',
                                      cssClass: 'secondary',
                                      handler: function handler(blah) {
                                        if (_this45.order.service_type_id != 3) {
                                          _this45.save();
                                        } else {
                                          _this45.order.status_order = 25;
                                          localStorage.removeItem("current_order");

                                          _this45.clearLocals();

                                          _this45.dismiss();
                                        }
                                      }
                                    }]
                                  });

                                case 32:
                                  _context68.next = 36;
                                  break;

                                case 34:
                                  _context68.next = 36;
                                  return this.ui.presentAlert({
                                    mode: 'ios',
                                    header: '¡Acción Completada!',
                                    message: item.address,
                                    buttons: [{
                                      text: 'Aceptar',
                                      role: 'cancel',
                                      cssClass: 'secondary',
                                      handler: function handler(blah) {}
                                    }]
                                  });

                                case 36:
                                case "end":
                                  return _context68.stop();
                              }
                            }
                          }, _callee68, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this44, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee69() {
                          return _regeneratorRuntime().wrap(function _callee69$(_context69) {
                            while (1) {
                              switch (_context69.prev = _context69.next) {
                                case 0:
                                  console.log("Error", err);
                                  this.detailActive.loading = false;
                                  this.detailActive.text_loading = "";

                                  if (!(err.status == 400)) {
                                    _context69.next = 6;
                                    break;
                                  }

                                  this.ui.showToast("Ha ocurrido un error " + err.error.messages[0]);
                                  return _context69.abrupt("return");

                                case 6:
                                case "end":
                                  return _context69.stop();
                              }
                            }
                          }, _callee69, this);
                        }));
                      });
                    } else {
                      this.ui.showToast("Verifique su conexión");
                    }

                  case 1:
                  case "end":
                    return _context70.stop();
                }
              }
            }, _callee70, this);
          }));
        }
      }, {
        key: "viewEvent",
        value: function viewEvent(order) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee71() {
            var modal, m;
            return _regeneratorRuntime().wrap(function _callee71$(_context71) {
              while (1) {
                switch (_context71.prev = _context71.next) {
                  case 0:
                    clearInterval(this.positionTracking);

                    if (!this.network.getNetworkStatus().connected) {
                      _context71.next = 11;
                      break;
                    }

                    _context71.next = 4;
                    return this.ui.presentModal(_events_events_page__WEBPACK_IMPORTED_MODULE_5__["EventsPage"], {
                      order: order,
                      latitude: this.latitude,
                      longitude: this.longitude
                    });

                  case 4:
                    modal = _context71.sent;
                    _context71.next = 7;
                    return modal.onDidDismiss();

                  case 7:
                    m = _context71.sent;

                    if (!this.view_more && this.order.status_order != 25) {// this.changeAvailability()
                    }

                    _context71.next = 12;
                    break;

                  case 11:
                    this.ui.showToast("Verifique su conexión");

                  case 12:
                  case "end":
                    return _context71.stop();
                }
              }
            }, _callee71, this);
          }));
        }
      }, {
        key: "getOrderDetailStatusSuccessful",
        value: function getOrderDetailStatusSuccessful() {
          if (this.order.details) {
            return this.order.details.every(function (d) {
              return d.status == 25 || d.status == 48;
            });
          }

          return this.order.detail.every(function (d) {
            return d.status == 25 || d.status == 48;
          });
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee74() {
            var _this46 = this;

            var data, wait_time, total_charge, latitude, longitude, loader;
            return _regeneratorRuntime().wrap(function _callee74$(_context74) {
              while (1) {
                switch (_context74.prev = _context74.next) {
                  case 0:
                    if (this.getOrderDetailStatusSuccessful()) {
                      console.log("Id", this.order.id);

                      if (this.network.getNetworkStatus().connected) {
                        data = new FormData(); // this.ui.showToast("Latitude " + this.latitude + " Longitud" + this.longitude)

                        wait_time = 0;
                        total_charge = 0;
                        this.order.details.map(function (d) {
                          wait_time += d.wait_time ? Number(d.wait_time) : 0;
                          total_charge += d.total_charge ? Number(d.total_charge) : 0;
                        });
                        latitude = localStorage.getItem("latitude");
                        longitude = localStorage.getItem("longitude");
                        data.append("order_id", this.order.id);
                        data.append("latitude", latitude.toString());
                        data.append("longitude", longitude.toString());
                        data.append("description", "Finalización Servicio");
                        data.append("user_id", this.auth.user.id.toString());
                        data.append("wait_time", wait_time.toString());
                        data.append("surplus_money", total_charge.toString());
                        loader = this.ui.loading("Por favor espere...");
                        this.request.post("driver/end_service", data).subscribe(function (res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this46, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee72() {
                            var _this47 = this;

                            return _regeneratorRuntime().wrap(function _callee72$(_context72) {
                              while (1) {
                                switch (_context72.prev = _context72.next) {
                                  case 0:
                                    _context72.next = 2;
                                    return loader;

                                  case 2:
                                    _context72.sent.dismiss();

                                    clearInterval(this.positionTracking);
                                    this.order.status_order = 25;
                                    localStorage.setItem('end_order_id', String(this.order.id)); // localStorage.removeItem("latitude");
                                    // localStorage.removeItem("longitude");

                                    localStorage.removeItem("current_order");
                                    this.clearLocals();
                                    this.ui.showToast("Orden finalizada.", function () {
                                      _this47.dismiss();

                                      if (_this47.order.zapp_store_order == 1) {
                                        var obj = {
                                          data: {
                                            status: "completed"
                                          }
                                        }; //?option=update_order&id=2638
                                        //wc_order_id

                                        _this47.request.post("?option=update_order&id=".concat(_this47.order.wc_order_id), obj, true).subscribe(function (res) {
                                          console.log("Res", res);
                                        }, function (err) {
                                          if (err.status == 400) {
                                            _this47.ui.showToast(err.error.message);
                                          }
                                        });
                                      }
                                    });

                                  case 9:
                                  case "end":
                                    return _context72.stop();
                                }
                              }
                            }, _callee72, this);
                          }));
                        }, function (err) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this46, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee73() {
                            return _regeneratorRuntime().wrap(function _callee73$(_context73) {
                              while (1) {
                                switch (_context73.prev = _context73.next) {
                                  case 0:
                                    console.log("Error", err);
                                    _context73.next = 3;
                                    return loader;

                                  case 3:
                                    _context73.sent.dismiss();

                                    this.ui.showToast(err.error.messages[0]);

                                  case 5:
                                  case "end":
                                    return _context73.stop();
                                }
                              }
                            }, _callee73, this);
                          }));
                        });
                      } else {
                        this.ui.showToast("Verifique su conexión");
                      }
                    } else {
                      this.ui.showToast("Debe finalizar cada una de las direcciones antes de finalizar la orden");
                    }

                  case 1:
                  case "end":
                    return _context74.stop();
                }
              }
            }, _callee74, this);
          }));
        }
      }, {
        key: "startWatchingPosition",
        value: function startWatchingPosition(mode) {// if (this.auth.user.available != 0) {
          //   if (Capacitor.platform !== 'web') {
          //     // this.backgroundMode.isScreenOff((status) => {
          //     //   if (status) {
          //     //     if (this.auth.user != null && this.auth.user.available != 0) {
          //     //       this.backgroundMode.wakeUp()
          //     //     }
          //     //   }
          //     // })
          //   }
          //   this.id = Geolocation.watchPosition({
          //     // enableHighAccuracy: true
          //   }, async (position, err) => {
          //     if (!err) {
          //       const prev_latitude = this.latitude;
          //       const prev_longitude = this.longitude;
          //       localStorage.setItem("latitude", position.coords.latitude.toString());
          //       localStorage.setItem("longitude", position.coords.longitude.toString());
          //       this.details.shift();
          //       this.details.unshift({
          //         latitude: position.coords.latitude,
          //         longitude: position.coords.longitude
          //       });
          //       this.latitude = position.coords.latitude;
          //       this.longitude = position.coords.longitude;
          //       localStorage.setItem("latitude", position.coords.latitude.toString());
          //       localStorage.setItem("longitude", position.coords.longitude.toString());
          //       // find address from lat lng
          //       //check if the network is available
          //       console.log("GPS", position.coords);
          //       this.latitude = position.coords.latitude.toString();
          //       this.longitude = position.coords.longitude.toString();
          //       console.log("Latitude 2", this.latitude)
          //       console.log("Longitud 2", this.longitude);
          //       this.details.shift();
          //       this.details.unshift({
          //         latitude: position.coords.latitude,
          //         longitude: position.coords.longitude
          //       })
          //       console.log("Marker Points", this.markerPoints)
          //       // this.map.setCenter({ lat: parseFloat(this.details[0].latitude), lng: parseFloat(this.details[0].longitude) },)
          //       let latlng = new google.maps.LatLng(parseFloat(this.latitude), parseFloat(this.longitude))
          //       let prev_lat_lng = new google.maps.LatLng(parseFloat(prev_latitude), parseFloat(prev_longitude));
          //       console.log("Prev latitude", prev_latitude, "Prev longitude", prev_longitude)
          //       console.log("latitude", this.latitude, "longitude", this.longitude)
          //       var marker_icon = {
          //         url: this.markers[0], // url
          //         scaledSize: new google.maps.Size(35, 50), // size
          //         // origin: new google.maps.Point(0, 0), // origin
          //         // anchor: new google.maps.Point(0, 0) // anchor 
          //       };
          //       this.markerPoints[0].setPosition(latlng);
          //       const url = "img[src='" + this.markers[0] + "']";
          //       console.log("Url", url)
          //       const y: any = document.querySelectorAll(url);
          //       const marker_div: any = document.querySelector(url)
          //       console.log("img", marker_div)
          //       const ordered_paths = this.paths.sort((a, b) => {
          //         return this.place.calcCrow(a.lat, a.lng, position.coords.latitude, position.coords.longitude) - this.place.calcCrow(b.lat, b.lng, position.coords.latitude, position.coords.longitude)
          //       })
          //       const net_location = this.paths.find(p => !p.read);
          //       net_location.read = true;
          //       const next_lat_lng = new google.maps.LatLng(net_location.lat, net_location.lng);
          //       const heading = position.coords.heading ? position.coords.heading : 0;
          //       if(localStorage.getItem("bearing")){
          //         const bearing= localStorage.getItem("bearing");
          //         localStorage.setItem("bearing_used", bearing);
          //       }
          //       localStorage.setItem("bearing", heading.toString())
          //       const angle = this.rotateMarker(this.markers[0], prev_lat_lng, latlng, heading);
          //       this.updatePosition(this.auth.user.id, this.auth.vehicles.id, position.coords.latitude, position.coords.longitude, this.order.id, angle)
          //       // Haptics.vibrate()  
          //       if (localStorage.getItem("current_order")) {
          //         const order = JSON.parse(localStorage.getItem("current_order"));
          //         if (order) {
          //           let path = 'order_gps/' + order.id + '/' + this.auth.user.id;
          //           this.db.object(path).update({
          //             order: order.id,
          //             key: this.auth.user.id,
          //             vehicleId: this.auth.vehicles.id,
          //             lat: position.coords.latitude,
          //             lng: position.coords.longitude,
          //             oldLat: position.coords.latitude,
          //             oldLng: position.coords.longitude,
          //             // last_active: Date.now(),
          //             code: environment.VERSION_NAME
          //           });
          //           this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id)
          //             .valueChanges().pipe(take(1)).subscribe((value: any) => {
          //               // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
          //               if (value === null) {
          //                 const locations = [{
          //                   lat: position.coords.latitude, lng: position.coords.longitude, created_at: Date.now()
          //                 }]
          //                 // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
          //                 this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id).set({
          //                   order,
          //                   key: this.auth.user.id,
          //                   user_id: this.auth.user.id,
          //                   locations,
          //                   code: environment.VERSION_NAME
          //                 });
          //               } else {
          //                 // update
          //                 let locations: any[] = value.locations;
          //                 locations.push({
          //                   lat: position.coords.latitude, lng: position.coords.longitude, created_at: Date.now()
          //                 })
          //                 this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id)
          //                   .update({
          //                     order,
          //                     key: this.auth.user.id,
          //                     locations,
          //                     code: environment.VERSION_NAME
          //                   });
          //               }
          //             })
          //         }
          //       }
          //     } else {
          //       // this.ui.showToast("Entré en el error watch position" + err);
          //       await Geolocation.clearWatch({ id: this.id });
          //       this.startWatchingPosition();
          //       if (Capacitor.platform !== 'web') {
          //         await this.backgroundGeolocation.removeAllListeners();
          //       }
          //       this.initializeBackgroundGeolocation()
          //     }
          //   });
          // }
          // setTimeout(async () => {
          //   await Geolocation.clearWatch({ id: this.id });
          //   this.startWatchingPosition();
          //   if (Capacitor.platform !== 'web') {
          //     await this.backgroundGeolocation.removeAllListeners();
          //   }
          //   this.initializeBackgroundGeolocation()
          // }, 240000)
        }
      }, {
        key: "initializeBackgroundGeolocation",
        value: function initializeBackgroundGeolocation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee75() {
            return _regeneratorRuntime().wrap(function _callee75$(_context75) {
              while (1) {
                switch (_context75.prev = _context75.next) {
                  case 0:
                  case "end":
                    return _context75.stop();
                }
              }
            }, _callee75);
          }));
        }
      }, {
        key: "rotateMarker",
        value: function rotateMarker(url_image, prev_position, position, angle_to_rotate) {
          var url = "img[src='".concat(url_image, "']");
          console.log("Url", url);
          var y = document.querySelectorAll(url);
          var marker_div = document.querySelector(url);
          console.log("img", marker_div);
          var angle = 0;

          if (y[0]) {
            // when it hasn't loaded, it's null
            console.log("Encontrado Marker");

            if (typeof angle_to_rotate == 'undefined') {
              var _angle = google.maps.geometry.spherical.computeHeading(prev_position, position);

              var actual_angle = _angle - 180;
              console.log("Angle", _angle);
              console.log("Actual Angle", actual_angle);
              y[0].style.transform = "rotate(".concat(actual_angle, "deg)");
              return actual_angle;
            } else {
              var bearing = 0;

              if (localStorage.getItem("bearing_used")) {
                bearing = parseFloat(localStorage.getItem("bearing_used"));
              } else {
                bearing = 180;
              }

              var _actual_angle = angle_to_rotate - bearing;

              y[0].style.transform = "rotate(".concat(_actual_angle, "deg)");
              return _actual_angle;
            }
          } else {
            console.log("Image Angle Not Found");
          }

          return angle;
        }
      }, {
        key: "changeAvailability",
        value: function changeAvailability(firstTime) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee77() {
            var _this48 = this;

            return _regeneratorRuntime().wrap(function _callee77$(_context77) {
              while (1) {
                switch (_context77.prev = _context77.next) {
                  case 0:
                    // clearInterval(this.positionTracking);
                    this.startWatchingPosition();
                    this.initializeBackgroundGeolocation();

                    _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Network"].addListener('networkStatusChange', function (status) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this48, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee76() {
                        return _regeneratorRuntime().wrap(function _callee76$(_context76) {
                          while (1) {
                            switch (_context76.prev = _context76.next) {
                              case 0:
                                console.log("Network status changed", status);
                                localStorage.setItem("network_status", JSON.stringify(status));

                                if (status.connected) {
                                  Geolocation.clearWatch({
                                    id: this.id
                                  });

                                  if (_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Capacitor"].platform !== 'web') {// await this.backgroundGeolocation.removeAllListeners();
                                  }

                                  this.startWatchingPosition();
                                  this.initializeBackgroundGeolocation();
                                }

                              case 3:
                              case "end":
                                return _context76.stop();
                            }
                          }
                        }, _callee76, this);
                      }));
                    });

                  case 3:
                  case "end":
                    return _context77.stop();
                }
              }
            }, _callee77, this);
          }));
        }
      }, {
        key: "updatePosition",
        value: function updatePosition(user_id, vehicleId, lat, lng, order, angle) {
          var _this49 = this;

          var path = 'order_gps/' + order + '/' + user_id;
          this.subscription = this.db.object(path).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (snapshot) {
            if (localStorage.getItem("current_order")) {
              console.log("Este es el console.log de update position");

              if (_this49.network.getNetworkStatus().connected) {
                if (snapshot === null) {
                  var obj_create = {
                    order: order,
                    key: user_id,
                    vehicleId: vehicleId,
                    lat: lat,
                    lng: lng,
                    oldLat: lat,
                    oldLng: lng,
                    angle: angle,
                    // last_active: Date.now(),
                    code: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].VERSION_NAME
                  };

                  if (typeof angle != 'undefined') {
                    obj_create.angle = angle;
                  }

                  _this49.db.object(path).set(obj_create);
                } else {
                  // update
                  var obj_update = {
                    order: order,
                    key: user_id,
                    vehicleId: vehicleId,
                    lat: lat,
                    lng: lng,
                    oldLat: snapshot.lat,
                    oldLng: snapshot.lng,
                    // last_active: Date.now(),
                    code: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].VERSION_NAME
                  };

                  if (typeof angle != 'undefined') {
                    obj_update.angle = angle;
                  }

                  _this49.db.object(path).update(obj_update);
                }
              } else {}
            } else {
              _this49.subscription.unsubscribe();
            }

            console.log(snapshot); // insert if not exists
          });
          this.subscription2 = this.realtime.getFirebaseCollectionObject('order_history_reports/' + order + '/' + user_id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (value) {
            // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
            if (localStorage.getItem("current_order")) {
              if (value === null) {
                var locations = [{
                  lat: lat,
                  lng: lng,
                  created_at: Date.now()
                }]; // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())

                _this49.realtime.getFirebaseCollectionObject('order_history_reports/' + order + '/' + user_id).set({
                  order: order,
                  key: user_id,
                  user_id: user_id,
                  locations: locations,
                  code: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].VERSION_NAME
                });
              } else {
                // update
                var _locations = value.locations;

                _locations.push({
                  lat: lat,
                  lng: lng,
                  created_at: Date.now()
                });

                _this49.realtime.getFirebaseCollectionObject('order_history_reports/' + order + '/' + user_id).update({
                  order: order,
                  key: user_id,
                  locations: _locations,
                  code: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].VERSION_NAME
                });
              }
            } else {
              _this49.subscription2.unsubscribe();
            }
          });
        }
      }]);

      return ViewDetailPage;
    }();

    ViewDetailPage.ctorParameters = function () {
      return [{
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]
      }, {
        type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_9__["PlaceService"]
      }, {
        type: _services_network_status_service__WEBPACK_IMPORTED_MODULE_10__["NetworkStatusService"]
      }, {
        type: src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_11__["RealtimeService"]
      }, {
        type: src_app_services_days_service__WEBPACK_IMPORTED_MODULE_13__["DaysService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["Platform"]
      }, {
        type: _ionic_native_foreground_service_ngx__WEBPACK_IMPORTED_MODULE_16__["ForegroundService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewDetailPage.prototype, "order", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewDetailPage.prototype, "orders", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewDetailPage.prototype, "latLng", void 0);
    ViewDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./view-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/view-detail/view-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./view-detail.page.scss */
      "./src/app/screens/forms/view-detail/view-detail.page.scss"))["default"]]
    })], ViewDetailPage);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_auth___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth/ */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! cordova-background-geolocation-lt */
    "./node_modules/cordova-background-geolocation-lt/src/ionic/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(request, router, db, afAuth, storage) {
        _classCallCheck(this, AuthService);

        this.request = request;
        this.router = router;
        this.db = db;
        this.afAuth = afAuth;
        this.storage = storage;
        this.setData();
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(email, password) {
          var body = {
            email: email,
            password: password
          };
          return this.request.post('login', body);
        }
      }, {
        key: "setData",
        value: function setData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee78() {
            var data, user, person, token, role, vehicles, collection_id;
            return _regeneratorRuntime().wrap(function _callee78$(_context78) {
              while (1) {
                switch (_context78.prev = _context78.next) {
                  case 0:
                    if (localStorage.getItem('data')) {
                      data = JSON.parse(localStorage.getItem('data'));
                      user = data.user, person = data.person, token = data.token, role = data.role, vehicles = data.vehicles, collection_id = data.collection_id;
                      this.collection_id = collection_id;
                      this.user = user;
                      this.person = person;
                      this.token = token;
                      this.role = role;
                      this.vehicles = vehicles;
                    }

                  case 1:
                  case "end":
                    return _context78.stop();
                }
              }
            }, _callee78, this);
          }));
        }
      }, {
        key: "register",
        value: function register(userInfo) {
          var _this50 = this;

          console.log(userInfo);
          return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            _this50.afAuth.createUserWithEmailAndPassword(userInfo.email, userInfo.password).then(function (authData) {
              // update driver object
              console.log(authData);
              userInfo.uid = authData.user.uid;

              _this50.afAuth.currentUser.then(function (res) {
                res.updateProfile({
                  displayName: userInfo.name
                });

                _this50.db.object('drivers/' + userInfo.uid).update(userInfo);

                observer.next();
              });
            })["catch"](function (error) {
              if (error) {
                observer.error(error);
              }
            });
          });
        }
      }, {
        key: "setVehicles",
        value: function setVehicles(vehicles) {
          this.vehicles = Object.assign(Object.assign({}, this.vehicles), vehicles);
          var data = JSON.parse(localStorage.getItem('data'));
          data.vehicles = this.vehicles;
          localStorage.setItem("data", JSON.stringify(data));
        }
      }, {
        key: "setPerson",
        value: function setPerson(person) {
          this.person = Object.assign(Object.assign({}, this.person), person);
          var data = JSON.parse(localStorage.getItem('data'));
          data.person = this.person;
          localStorage.setItem("data", JSON.stringify(data));
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          this.user = Object.assign(Object.assign({}, this.user), user);
          var data = JSON.parse(localStorage.getItem('data'));
          data.user = this.user;
          localStorage.setItem("data", JSON.stringify(data));
        }
      }, {
        key: "getFirebaseUser",
        value: function getFirebaseUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee79() {
            var user;
            return _regeneratorRuntime().wrap(function _callee79$(_context79) {
              while (1) {
                switch (_context79.prev = _context79.next) {
                  case 0:
                    _context79.next = 2;
                    return this.afAuth.currentUser;

                  case 2:
                    user = _context79.sent;

                  case 3:
                  case "end":
                    return _context79.stop();
                }
              }
            }, _callee79, this);
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee80() {
            return _regeneratorRuntime().wrap(function _callee80$(_context80) {
              while (1) {
                switch (_context80.prev = _context80.next) {
                  case 0:
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("data");
                    localStorage.removeItem("current_order");
                    localStorage.removeItem("current_status");
                    localStorage.removeItem("current_status");
                    localStorage.removeItem("currentDocuments");
                    localStorage.removeItem("longitude");
                    localStorage.removeItem("latitude");
                    localStorage.removeItem("watchPositionId");
                    localStorage.removeItem("current_massive_order"); //current_massive_order

                    this.router.navigate(['/login']);
                    this.person = null;
                    this.role = null;
                    this.token = "";
                    this.user = null;
                    this.vehicles = null;

                    if (!cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_8__["default"]) {
                      _context80.next = 19;
                      break;
                    }

                    _context80.next = 19;
                    return cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_8__["default"].stop();

                  case 19:
                  case "end":
                    return _context80.stop();
                }
              }
            }, _callee80, this);
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
      }, {
        type: _angular_fire_auth___WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }, {
        type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/background.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/background.service.ts ***!
    \************************************************/

  /*! exports provided: BackgroundService */

  /***/
  function srcAppServicesBackgroundServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundService", function () {
      return BackgroundService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _realtime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./realtime.service */
    "./src/app/services/realtime.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _network_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./network-status.service */
    "./src/app/services/network-status.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_native_foreground_service_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/foreground-service/ngx */
    "./node_modules/@ionic-native/foreground-service/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var _capacitor_core__WEBP4 = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
        App = _capacitor_core__WEBP4.App,
        BackgroundTask = _capacitor_core__WEBP4.BackgroundTask;

    var BackgroundService = /*#__PURE__*/function () {
      function BackgroundService(realtime, auth, network, zone, foregroundService) {
        _classCallCheck(this, BackgroundService);

        this.realtime = realtime;
        this.auth = auth;
        this.network = network;
        this.zone = zone;
        this.foregroundService = foregroundService;
      }
      /**
       * Start Background MOde
       * This function make the app can work work as a background service
       * It take 3 steps, if one failed the others won't execute anything
       * 1. Check if the user is available
       * 2. Check if the device has FOREGROUND_SERVICE permission
       * 3. Enable the background mode
       */


      _createClass(BackgroundService, [{
        key: "startBackgroundMode",
        value: function startBackgroundMode() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee81() {
            var _this51 = this;

            return _regeneratorRuntime().wrap(function _callee81$(_context81) {
              while (1) {
                switch (_context81.prev = _context81.next) {
                  case 0:
                    App.addListener("appStateChange", function (state) {
                      clearInterval(_this51.interval); // if (Capacitor.platform !== 'web') {
                      // }
                      // if (this.geoLocationSubscription) {
                      //   this.geoLocationSubscription.unsubscribe()
                      // }

                      console.log("Background mode");

                      if (!state.isActive) {
                        if (_this51.auth.user != null && _this51.auth.user.available != 0) {
                          if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web') {
                            console.log("Foreground START");

                            _this51.foregroundService.start('GPS Running', 'Background Service');
                          } else {}
                        }
                      } else {
                        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web') {
                          _this51.foregroundService.stop();
                        }
                      }
                    });

                  case 1:
                  case "end":
                    return _context81.stop();
                }
              }
            }, _callee81);
          }));
        }
      }, {
        key: "startWatchingPosition",
        value: function startWatchingPosition(mode) {
          var _this52 = this;

          // if (this.watchPositionId) {
          //   Geolocation.clearWatch({ id: this.watchPositionId });
          // }
          // if (this.geoLocationSubscription) {
          //   this.geoLocationSubscription.unsubscribe();
          // }
          if (this.auth.user != null && this.auth.user.available != 0) {
            this.watchPositionId = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Geolocation"].watchPosition({
              enableHighAccuracy: true
            }, function (position, err) {
              console.log("This is my position", mode);
              localStorage.setItem("latitude", position.coords.latitude.toString());
              localStorage.setItem("longitude", position.coords.longitude.toString());
              _this52.geoLocationSubscription = _this52.realtime.getUserGeolocation().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (snapshot) {
                console.log(snapshot);
                console.log("This is my position 2", mode);

                if (snapshot === null) {
                  _this52.realtime.getUserGeolocation().set({
                    key: _this52.auth.user.id,
                    user_id: _this52.auth.user.id,
                    latitude: position.coords.latitude.toString(),
                    longitude: position.coords.longitude.toString(),
                    city_id: _this52.auth.person.city_id,
                    state_id: Number(_this52.auth.person.state_id),
                    level_id: Number(_this52.auth.user.level_id),
                    // last_active: Date.now(),
                    available: _this52.auth.user.available,
                    driver_name: _this52.auth.user.name,
                    transport_type_id: _this52.auth.vehicles.transport_type_id,
                    code: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].VERSION_NAME
                  });
                } else {
                  // update
                  _this52.realtime.getUserGeolocation().update({
                    key: _this52.auth.user.id,
                    user_id: _this52.auth.user.id,
                    latitude: position.coords.latitude.toString(),
                    longitude: position.coords.longitude.toString(),
                    city_id: _this52.auth.person.city_id,
                    state_id: Number(_this52.auth.person.state_id),
                    level_id: Number(_this52.auth.user.level_id),
                    // last_active: Date.now(),
                    available: _this52.auth.user.available,
                    driver_name: _this52.auth.user.name,
                    transport_type_id: _this52.auth.vehicles.transport_type_id,
                    code: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].VERSION_NAME
                  });
                }
              });
            });
          }
        }
        /**
         * Stop Background Mode
         * This is necessary when the user isn't available
         */

      }, {
        key: "stopBackgroundMode",
        value: function stopBackgroundMode() {
          clearInterval(this.interval);

          if (this.watchPositionId) {}

          if (this.geoLocationSubscription) {
            this.geoLocationSubscription.unsubscribe();
          }

          if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web') {// if (this.backgroundMode.isActive) {
            //   this.backgroundMode.setEnabled(false);
            //   this.backgroundMode.disable();
            // }
            // this.foregroundService.stop();
          }
        }
      }, {
        key: "checkStatus",
        value: function checkStatus() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee82() {
            return _regeneratorRuntime().wrap(function _callee82$(_context82) {
              while (1) {
                switch (_context82.prev = _context82.next) {
                  case 0:
                  case "end":
                    return _context82.stop();
                }
              }
            }, _callee82);
          }));
        }
      }]);

      return BackgroundService;
    }();

    BackgroundService.ctorParameters = function () {
      return [{
        type: _realtime_service__WEBPACK_IMPORTED_MODULE_3__["RealtimeService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _network_status_service__WEBPACK_IMPORTED_MODULE_5__["NetworkStatusService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_native_foreground_service_ngx__WEBPACK_IMPORTED_MODULE_7__["ForegroundService"]
      }];
    };

    BackgroundService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BackgroundService);
    /***/
  },

  /***/
  "./src/app/services/days.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/days.service.ts ***!
    \******************************************/

  /*! exports provided: DaysService */

  /***/
  function srcAppServicesDaysServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DaysService", function () {
      return DaysService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

    var DaysService = /*#__PURE__*/function () {
      function DaysService() {
        _classCallCheck(this, DaysService);

        /**
        * Esta función dcompara si la fecha dada es igual a la de hoy
        * @access public
        * @param {string} someDate fecha
        * @return string
        */
        this.isToday = function (someDate) {
          var today = new Date();
          return someDate.getDate() == today.getDate() && someDate.getMonth() == today.getMonth() && someDate.getFullYear() == today.getFullYear();
        };
      }

      _createClass(DaysService, [{
        key: "formatDays",
        value: function formatDays(days) {
          var daysS = 0;
          var months = 0;
          var years = 0;

          if (days >= 365) {
            years = Number((days / 365).toFixed(0));
            var cal_months = days - 365 * years;

            if (cal_months > 0) {
              if (cal_months >= 30) {
                months = Number((cal_months / 30).toFixed(0));
                var calcul_day = cal_months - 30 * months;
                daysS = calcul_day;
              }
            } else {}
          } else {
            if (days >= 30) {
              months = Number((days / 30).toFixed(0));
              daysS = days - 30 * months;
            } else {
              daysS = days;
            }
          }

          var format_days = "";
          format_days += years > 0 ? years + (years == 1 ? ' año ' : ' años ') : '';
          format_days += months > 0 ? months + (months == 1 ? ' mes ' : ' meses ') : '';
          format_days += daysS > 0 ? daysS + (daysS == 1 ? ' día ' : ' días ') : '';
          return format_days;
        }
      }, {
        key: "formatDaysWithDate",
        value: function formatDaysWithDate(date) {
          var today = new Date();
          var date_of = new Date(date);
          var difference = Math.floor((today.getTime() - date_of.getTime()) / (1000 * 60 * 60 * 24));
          return this.formatDays(difference);
        }
      }, {
        key: "getHourDiff",
        value: function getHourDiff(initial_hour, final_hour, format) {
          var entryHour = moment__WEBPACK_IMPORTED_MODULE_3__(initial_hour, 'hh:mm ');
          var exitHour = moment__WEBPACK_IMPORTED_MODULE_3__(final_hour, 'hh:mm ');
          var duration = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](exitHour.diff(entryHour));

          if (!format) {
            return duration.asHours();
          }

          if (format == "hours") {
            return duration.asHours();
          } else {
            if (format == "minutes") {
              return duration.asMinutes();
            } else {
              if (format == "seconds") {
                return duration.asSeconds();
              } else {
                if (format == "miliseconds") {
                  return duration.asMilliseconds();
                }
              }
            }
          }
        }
        /**
        * Esta función compara dos fechas dadas y retorna si es igual
        * @access public
        * @param {Date} date1 fecha uno
        * @param {Date} date2 fecha dos
        *
        * @return boolean
        */

      }, {
        key: "isEqualDate",
        value: function isEqualDate(date1, date2) {
          return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
        }
        /**
        * Esta función suma un número de días a una fecha dada
        * @access public
        * @param {Date} date fecha uno
        * @param {number} numberOfDays número de días
        *
        * @return Date
        */

      }, {
        key: "addDays",
        value: function addDays(date, numberOfDays) {
          console.log("Date", date);
          var dateMoment = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["add"])(date, {
            days: numberOfDays
          });
          return dateMoment;
        }
        /**
        * Esta función suma un número de minutos a una fecha dada
        * @access public
        * @param {Date} date fecha
        * @param {number} numberOfMinutes número de minutos
        *
        * @return Date
        */

      }, {
        key: "substractMinutes",
        value: function substractMinutes(date, numberOfMinutes) {
          var dateMoment = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subMinutes"])(date, numberOfMinutes);
          return dateMoment;
        }
        /**
        * Esta función suma un número de horas a una fecha dada
        * @access public
        * @param {Date} date fecha
        * @param {number} numberOfHours número de horas
        *
        * @return Date
        */

      }, {
        key: "substractHours",
        value: function substractHours(date, numberOfHours) {
          var dateMoment = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subHours"])(date, numberOfHours);
          return dateMoment;
        }
      }]);

      return DaysService;
    }();

    DaysService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DaysService);
    /***/
  },

  /***/
  "./src/app/services/fcm.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/fcm.service.ts ***!
    \*****************************************/

  /*! exports provided: FcmService */

  /***/
  function srcAppServicesFcmServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FcmService", function () {
      return FcmService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var _capacitor_core__WEBP5 = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
        PushNotifications = _capacitor_core__WEBP5.PushNotifications,
        Haptics = _capacitor_core__WEBP5.Haptics;
    var _capacitor_core__WEBP6 = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
        Network = _capacitor_core__WEBP6.Network,
        LocalNotifications = _capacitor_core__WEBP6.LocalNotifications;

    var FcmService = /*#__PURE__*/function () {
      function FcmService(router) {
        _classCallCheck(this, FcmService);

        this.router = router;
        this.notifications = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(FcmService, [{
        key: "initPush",
        value: function initPush() {
          if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web') {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform == "android") {
              /**
               * Build the notification channel with high imporatnce
               */
              var notificationChannel = {
                id: 'pop-notifications',
                name: 'Pop notifications',
                description: 'Pop notifications',
                importance: 5,
                visibility: 1,
                vibration: true,
                lights: true
              };
              LocalNotifications.createChannel(notificationChannel);
              PushNotifications.createChannel(notificationChannel);
            }

            this.registerPush();
          }
        }
      }, {
        key: "playAudio",
        value: function playAudio() {
          if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].PLAY_AUDIO_ON_REQUEST == true) {
            this.audio = new Audio(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].AUDIO_PATH);
            this.audio.play();
          }
        }
      }, {
        key: "stopAudio",
        value: function stopAudio() {
          this.audio.pause();
        }
      }, {
        key: "registerPush",
        value: function registerPush() {
          var _this53 = this;

          PushNotifications.requestPermission().then(function (permission) {
            if (permission.granted) {
              // Register with Apple / Google to receive push via APNS/FCM
              PushNotifications.register();
            } else {// No permission for push granted
            }
          });
          PushNotifications.addListener('registration', function (data) {
            //console.log('My token: ' + JSON.stringify(data));
            localStorage.setItem('fcmId', data.value);
          });
          PushNotifications.addListener('registrationError', function (error) {
            console.log('Error: ' + JSON.stringify(error));
          });
          PushNotifications.addListener('pushNotificationReceived', function (notification) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this53, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee83() {
              var _this54 = this;

              var isPushNotification;
              return _regeneratorRuntime().wrap(function _callee83$(_context83) {
                while (1) {
                  switch (_context83.prev = _context83.next) {
                    case 0:
                      isPushNotification = !!notification.title || !!notification.body; // if this is a push notification received when the app is in the foreground on Android

                      if (isPushNotification) {
                        // We schedule a LocalNotification 1 second later since Capacitor for Android doesn't show anything in this case
                        LocalNotifications.schedule({
                          notifications: [{
                            title: notification.title,
                            body: notification.body,
                            id: new Date().getUTCMilliseconds(),
                            schedule: {
                              at: new Date(Date.now() + 1000)
                            },
                            extra: notification.data,
                            channelId: 'pop-notifications'
                          }]
                        });
                      }

                      Haptics.vibrate();
                      setTimeout(function () {
                        _this54.stopAudio();
                      }, 3000);
                      this.notifications.next(notification);
                      this.notifications = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                      console.log('Push received: ' + JSON.stringify(notification));

                    case 7:
                    case "end":
                      return _context83.stop();
                  }
                }
              }, _callee83, this);
            }));
          });
          PushNotifications.addListener('pushNotificationActionPerformed', function (notification) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this53, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee84() {
              var data;
              return _regeneratorRuntime().wrap(function _callee84$(_context84) {
                while (1) {
                  switch (_context84.prev = _context84.next) {
                    case 0:
                      data = notification.notification.data;
                      console.log('Action performed: ' + JSON.stringify(notification.notification));

                      if (data.detailsId) {
                        // this.router.navigateByUrl(`/home/${data.detailsId}`);
                        this.router.navigateByUrl('tabs/home');
                      }

                    case 3:
                    case "end":
                      return _context84.stop();
                  }
                }
              }, _callee84, this);
            }));
          });
        }
      }]);

      return FcmService;
    }();

    FcmService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    FcmService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FcmService);
    /***/
  },

  /***/
  "./src/app/services/geolocation.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/geolocation.service.ts ***!
    \*************************************************/

  /*! exports provided: GeolocationService */

  /***/
  function srcAppServicesGeolocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationService", function () {
      return GeolocationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ui.service */
    "./src/app/services/ui.service.ts");

    var GeolocationService = /*#__PURE__*/function () {
      function GeolocationService(diagnostic, ui) {
        _classCallCheck(this, GeolocationService);

        this.diagnostic = diagnostic;
        this.ui = ui;
      }
      /**
      * Funcion parao obtener la position actual del usuario
      *
      * Este metodo se encarga de obtener las coordenadas del usuario en sesion,
      *  una vez obtenido, se almacena en el localStorage para su posterior uso.
      * En caso de que falle se obtiene la ultima posicion almacenada en localStorage
      * en caso de que la haya
      *
      * @access public
      * @param  GeolocationOptions options?  , los cuales son los criterios para obtener la posicion
      * @return Retorna una promesa de tipo GeolocationPosition
      */


      _createClass(GeolocationService, [{
        key: "getCurrentPosition",
        value: function getCurrentPosition(options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee85() {
            var enabledHighAccuracy, availableHighAccuracy, enabledNetwork, availableNetwork, geolocation, position;
            return _regeneratorRuntime().wrap(function _callee85$(_context85) {
              while (1) {
                switch (_context85.prev = _context85.next) {
                  case 0:
                    if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web')) {
                      _context85.next = 15;
                      break;
                    }

                    _context85.next = 3;
                    return this.diagnostic.isNetworkLocationAvailable();

                  case 3:
                    enabledNetwork = _context85.sent;
                    _context85.next = 6;
                    return this.diagnostic.isNetworkLocationEnabled();

                  case 6:
                    availableHighAccuracy = _context85.sent;
                    _context85.next = 9;
                    return this.diagnostic.isGpsLocationEnabled();

                  case 9:
                    enabledHighAccuracy = _context85.sent;
                    _context85.next = 12;
                    return this.diagnostic.isGpsLocationAvailable();

                  case 12:
                    availableHighAccuracy = _context85.sent;
                    _context85.next = 19;
                    break;

                  case 15:
                    enabledNetwork = true;
                    availableHighAccuracy = true;
                    enabledHighAccuracy = true;
                    availableHighAccuracy = true;

                  case 19:
                    console.log(" Geolocation Enabled Network ".concat(enabledNetwork, " available Network ").concat(availableNetwork));
                    console.log(" Geolocation Enabled ".concat(enabledHighAccuracy, " available ").concat(availableHighAccuracy));

                    if (!(enabledNetwork || enabledHighAccuracy)) {
                      _context85.next = 51;
                      break;
                    }

                    _context85.prev = 22;
                    console.log(" Geolocation is Enabled ");

                    if (!options) {
                      _context85.next = 30;
                      break;
                    }

                    _context85.next = 27;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Geolocation"].getCurrentPosition(options);

                  case 27:
                    position = _context85.sent;
                    _context85.next = 33;
                    break;

                  case 30:
                    _context85.next = 32;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Geolocation"].getCurrentPosition();

                  case 32:
                    position = _context85.sent;

                  case 33:
                    console.log(" Geolocation is Enabled Latitude", position.coords.latitude, "Geolocation is Enabled Longitude", position.coords.longitude);
                    localStorage.setItem("latitude", position.coords.latitude.toString());
                    localStorage.setItem("longitude", position.coords.longitude.toString());
                    return _context85.abrupt("return", position);

                  case 39:
                    _context85.prev = 39;
                    _context85.t0 = _context85["catch"](22);
                    console.log(" Geolocation Catch Error");

                    if (!(localStorage.getItem("latitude") && localStorage.getItem("longitude"))) {
                      _context85.next = 47;
                      break;
                    }

                    console.log(" Geolocation Catch Error Have Position");
                    return _context85.abrupt("return", {
                      coords: {
                        latitude: parseFloat(localStorage.getItem("latitude")),
                        longitude: parseFloat(localStorage.getItem("longitude")),
                        accuracy: 0
                      },
                      timestamp: Date.now()
                    });

                  case 47:
                    console.log(" Geolocation Catch Error Don\xB4t Have Position");
                    this.showNotInStock();

                  case 49:
                    _context85.next = 52;
                    break;

                  case 51:
                    this.showNotInStock();

                  case 52:
                  case "end":
                    return _context85.stop();
                }
              }
            }, _callee85, this, [[22, 39]]);
          }));
        }
      }, {
        key: "showModal",
        value: function showModal(obj) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee86() {
            return _regeneratorRuntime().wrap(function _callee86$(_context86) {
              while (1) {
                switch (_context86.prev = _context86.next) {
                  case 0:
                  case "end":
                    return _context86.stop();
                }
              }
            }, _callee86);
          }));
        }
      }, {
        key: "showNotInStock",
        value: function showNotInStock() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee87() {
            return _regeneratorRuntime().wrap(function _callee87$(_context87) {
              while (1) {
                switch (_context87.prev = _context87.next) {
                  case 0:
                  case "end":
                    return _context87.stop();
                }
              }
            }, _callee87);
          }));
        }
      }, {
        key: "isLocationEnabled",
        value: function isLocationEnabled() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee88() {
            var enabled, available;
            return _regeneratorRuntime().wrap(function _callee88$(_context88) {
              while (1) {
                switch (_context88.prev = _context88.next) {
                  case 0:
                    if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web')) {
                      _context88.next = 9;
                      break;
                    }

                    _context88.next = 3;
                    return this.diagnostic.isGpsLocationEnabled();

                  case 3:
                    enabled = _context88.sent;
                    _context88.next = 6;
                    return this.diagnostic.isGpsLocationAvailable();

                  case 6:
                    available = _context88.sent;
                    _context88.next = 11;
                    break;

                  case 9:
                    enabled = false;
                    available = false;

                  case 11:
                    console.log("Enabled ".concat(enabled, " available ").concat(available));

                    if (!enabled) {
                      this.showNotInStock();
                    } else {}

                  case 13:
                  case "end":
                    return _context88.stop();
                }
              }
            }, _callee88, this);
          }));
        }
      }]);

      return GeolocationService;
    }();

    GeolocationService.ctorParameters = function () {
      return [{
        type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__["Diagnostic"]
      }, {
        type: _ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"]
      }];
    };

    GeolocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GeolocationService);
    /***/
  },

  /***/
  "./src/app/services/network-status.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/network-status.service.ts ***!
    \****************************************************/

  /*! exports provided: NetworkStatusService */

  /***/
  function srcAppServicesNetworkStatusServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkStatusService", function () {
      return NetworkStatusService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ui.service */
    "./src/app/services/ui.service.ts");

    var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Network;

    var NetworkStatusService = /*#__PURE__*/function () {
      function NetworkStatusService(ui) {
        _classCallCheck(this, NetworkStatusService);

        this.ui = ui;
      } // getNetworkStatus = (subscription: Observable<Object>, res: any, err: any) {
      // }


      _createClass(NetworkStatusService, [{
        key: "getNetworkStatusSubscription",
        value: function getNetworkStatusSubscription(subscription, res, err, loader) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee89() {
            var networkStatus;
            return _regeneratorRuntime().wrap(function _callee89$(_context89) {
              while (1) {
                switch (_context89.prev = _context89.next) {
                  case 0:
                    networkStatus = JSON.parse(localStorage.getItem("network_status"));

                    if (!networkStatus.connected) {
                      _context89.next = 6;
                      break;
                    }

                    subscription.subscribe(res, err);

                    if (networkStatus.connectionType.includes("slow")) {
                      this.ui.showToast("Su conexión es lenta podría tomar un tiempo");
                    }

                    _context89.next = 11;
                    break;

                  case 6:
                    if (!loader) {
                      _context89.next = 10;
                      break;
                    }

                    _context89.next = 9;
                    return loader;

                  case 9:
                    _context89.sent.dismiss();

                  case 10:
                    this.ui.presentAlert({
                      mode: 'ios',
                      header: 'La conexión no está disponible',
                      buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }]
                    });

                  case 11:
                  case "end":
                    return _context89.stop();
                }
              }
            }, _callee89, this);
          }));
        }
      }, {
        key: "getNetworkStatus",
        value: function getNetworkStatus() {
          var networkStatus = JSON.parse(localStorage.getItem("network_status"));
          return networkStatus;
        }
      }]);

      return NetworkStatusService;
    }();

    NetworkStatusService.ctorParameters = function () {
      return [{
        type: _ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]
      }];
    };

    NetworkStatusService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NetworkStatusService);
    /***/
  },

  /***/
  "./src/app/services/photo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/photo.service.ts ***!
    \*******************************************/

  /*! exports provided: PhotoService */

  /***/
  function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
      return PhotoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ui.service */
    "./src/app/services/ui.service.ts");

    var FilePicker = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].FilePicker;
    var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera;

    var PhotoService = /*#__PURE__*/function () {
      function PhotoService(actionSheetCtrl, ui) {
        _classCallCheck(this, PhotoService);

        this.actionSheetCtrl = actionSheetCtrl;
        this.ui = ui;
        this.imageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
      }

      _createClass(PhotoService, [{
        key: "takePicture",
        value: function takePicture(source) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee90() {
            var image;
            return _regeneratorRuntime().wrap(function _callee90$(_context90) {
              while (1) {
                switch (_context90.prev = _context90.next) {
                  case 0:
                    _context90.prev = 0;
                    localStorage.setItem("takingPhoto", "yes");
                    _context90.next = 4;
                    return Camera.getPhoto({
                      quality: 60,
                      allowEditing: false,
                      correctOrientation: true,
                      promptLabelPhoto: 'Elegir de la galería',
                      promptLabelPicture: 'Tomar foto',
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl,
                      source: source
                    });

                  case 4:
                    image = _context90.sent;
                    this.imageSubject.next(image);
                    localStorage.removeItem("takingPhoto");
                    this.imageSubject.complete();
                    this.imageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
                    _context90.next = 17;
                    break;

                  case 11:
                    _context90.prev = 11;
                    _context90.t0 = _context90["catch"](0);
                    console.log("Error", _context90.t0);
                    localStorage.removeItem("takingPhoto");
                    this.imageSubject.complete();
                    this.imageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});

                  case 17:
                  case "end":
                    return _context90.stop();
                }
              }
            }, _callee90, this, [[0, 11]]);
          }));
        }
      }, {
        key: "selectImageSource",
        value: function selectImageSource() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee91() {
            var _this55 = this;

            var buttons, actionSheet;
            return _regeneratorRuntime().wrap(function _callee91$(_context91) {
              while (1) {
                switch (_context91.prev = _context91.next) {
                  case 0:
                    buttons = [{
                      text: 'Tomar foto',
                      icon: 'camera',
                      handler: function handler() {
                        _this55.takePicture(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera);
                      }
                    }, {
                      text: 'Elegir galeria',
                      icon: 'image',
                      handler: function handler() {
                        _this55.takePicture(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos);
                      }
                    }, {
                      text: 'Cancelar',
                      icon: 'close',
                      role: 'cancel',
                      handler: function handler() {
                        _this55.imageSubject.complete();

                        _this55.imageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
                      }
                    }]; // Only allow file selection inside a browser

                    _context91.next = 3;
                    return this.actionSheetCtrl.create({
                      mode: 'ios',
                      header: 'Escoger',
                      buttons: buttons
                    });

                  case 3:
                    actionSheet = _context91.sent;
                    _context91.next = 6;
                    return actionSheet.present();

                  case 6:
                  case "end":
                    return _context91.stop();
                }
              }
            }, _callee91, this);
          }));
        }
      }, {
        key: "dataUrlToBlob",
        value: function dataUrlToBlob(dataUrl) {
          var arr = dataUrl.split(',');
          var mime = arr[0].match(/:(.*?);/)[1];
          var bstr = atob(arr[1]);
          var n = bstr.length;
          var u8arr = new Uint8Array(n);

          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }

          return new Blob([u8arr], {
            type: mime
          });
        }
      }, {
        key: "blobToDataUrl",
        value: function blobToDataUrl(blob) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onerror = reject;

            reader.onload = function () {
              resolve(reader.result);
            };

            reader.readAsDataURL(blob);
          });
        }
      }, {
        key: "getFileImage",
        value: function getFileImage(dataUrl, name, format, useFormat) {
          var type = useFormat ? format : "image/".concat(format);
          console.log("Type", type);
          var options = {
            type: type
          };
          return new File([this.dataUrlToBlob(dataUrl)], name, {
            type: type
          });
        }
      }, {
        key: "getFileImageByBlob",
        value: function getFileImageByBlob(blob, name, format, useFormat) {
          var type = useFormat ? format : "image/".concat(format);
          console.log("Type", type);
          var options = {
            type: type
          };
          return new File([blob], name, options);
        }
      }]);

      return PhotoService;
    }();

    PhotoService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"]
      }];
    };

    PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PhotoService);
    /***/
  },

  /***/
  "./src/app/services/place.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/place.service.ts ***!
    \*******************************************/

  /*! exports provided: PlaceService */

  /***/
  function srcAppServicesPlaceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceService", function () {
      return PlaceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PlaceService = /*#__PURE__*/function () {
      function PlaceService() {
        _classCallCheck(this, PlaceService);
      } //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)


      _createClass(PlaceService, [{
        key: "calcCrow",
        value: function calcCrow(lat1, lon1, lat2, lon2) {
          var R = 6371; // km

          var dLat = this.toRad(lat2 - lat1);
          var dLon = this.toRad(lon2 - lon1);
          lat1 = this.toRad(lat1);
          lat2 = this.toRad(lat2);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c;
          return d;
        } // Converts numeric degrees to radians

      }, {
        key: "toRad",
        value: function toRad(value) {
          return value * Math.PI / 180;
        } // set locality from geocoder result
        // @param results: Geocoder array results

      }, {
        key: "setLocalityFromGeocoder",
        value: function setLocalityFromGeocoder(results) {
          var component;
          var address;

          for (var i = 0; i < results.length; i++) {
            address = results[i];

            for (var j = 0; j < address.address_components.length; j++) {
              component = address.address_components[j];

              if (component.types[0] == 'locality') {
                // if (component.types[0] == 'administrative_area_level_2') {
                // escape firebase characters
                var locality = component.short_name.replace(/[\%\.\#\$\/\[\]]/, '_');
                this.setLocality(locality);
                return locality;
              }
            }
          }

          return false;
        }
      }, {
        key: "setLocality",
        value: function setLocality(locality) {
          return this.locality = locality;
        }
      }, {
        key: "getLocality",
        value: function getLocality() {
          return this.locality;
        }
      }]);

      return PlaceService;
    }();

    PlaceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PlaceService);
    /***/
  },

  /***/
  "./src/app/services/realtime.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/realtime.service.ts ***!
    \**********************************************/

  /*! exports provided: RealtimeService */

  /***/
  function srcAppServicesRealtimeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealtimeService", function () {
      return RealtimeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var RealtimeService = /*#__PURE__*/function () {
      function RealtimeService(db, storage, auth) {
        _classCallCheck(this, RealtimeService);

        this.db = db;
        this.storage = storage;
        this.auth = auth;
      }

      _createClass(RealtimeService, [{
        key: "getFirebaseCollection",
        value: function getFirebaseCollection(path) {
          return this.db.object(path);
        }
      }, {
        key: "getFirebaseCollectionObject",
        value: function getFirebaseCollectionObject(path) {
          return this.db.object(path);
        }
      }, {
        key: "getFirebaseCollectionList",
        value: function getFirebaseCollectionList(path) {
          return this.db.list(path);
        }
      }, {
        key: "getMassivesOrders",
        value: function getMassivesOrders() {
          //massive_new_order
          console.log("Root", "massive_new_order/".concat(this.auth.person.city_id, "/").concat(this.auth.user.id));
          return this.getFirebaseCollection("massive_new_order/".concat(this.auth.person.city_id, "/").concat(this.auth.user.id));
        }
      }, {
        key: "getStatus",
        value: function getStatus() {
          return this.db.object("status_user/".concat(this.auth.user.id));
        }
      }, {
        key: "getNewOrder",
        value: function getNewOrder() {
          console.log("new_orders/".concat(this.auth.person.city_id, "/").concat(this.auth.user.id));
          this.appsRef = this.db.object("new_orders/".concat(this.auth.person.city_id, "/").concat(this.auth.user.id));
          return this.appsRef;
        }
      }, {
        key: "getUserGeolocation",
        value: function getUserGeolocation() {
          console.log("driver_geolocation/".concat(this.auth.person.city_id, "/").concat(this.auth.user.id));
          return this.db.object("driver_geolocation/".concat(this.auth.person.city_id, "/").concat(this.auth.user.id));
        }
      }]);

      return RealtimeService;
    }();

    RealtimeService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    RealtimeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RealtimeService);
    /***/
  },

  /***/
  "./src/app/services/request.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/request.service.ts ***!
    \*********************************************/

  /*! exports provided: RequestService */

  /***/
  function srcAppServicesRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestService", function () {
      return RequestService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Network;

    var RequestService = /*#__PURE__*/function () {
      function RequestService(http) {
        _classCallCheck(this, RequestService);

        this.http = http;
      }

      _createClass(RequestService, [{
        key: "getHeader",
        value: function getHeader(data_header) {
          var data = localStorage.getItem('data');
          var header = {};

          if (data) {
            var y = JSON.parse(data);
            var options = {
              Authorization: "Bearer ".concat(y.token)
            };

            if (data_header) {
              Object.keys(data_header).forEach(function (key) {
                options[key] = data_header[key];
              });
            }

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](options);
            header = {
              headers: headers
            };
            console.log("Header", header);
          }

          return header;
        }
      }, {
        key: "get",
        value: function get(url, useSecondUrl) {
          var url_base = !useSecondUrl ? _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL : _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].SECONDARY_URL;
          console.log("Url", "".concat(url_base).concat(url));
          return this.http.get("".concat(url_base).concat(url), this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(30000));
        }
      }, {
        key: "post",
        value: function post(url, body, useSecondUrl, headers) {
          var url_base = !useSecondUrl ? _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL : _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].SECONDARY_URL;
          console.log("Url", "".concat(url_base).concat(url));
          return this.http.post("".concat(url_base).concat(url), body, this.getHeader(headers)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(30000));
        }
      }, {
        key: "put",
        value: function put(url, body, useSecondUrl) {
          var url_base = !useSecondUrl ? _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL : _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].SECONDARY_URL;
          return this.http.put("".concat(url_base).concat(url), body, this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(10000));
        }
      }, {
        key: "delete",
        value: function _delete(url, useSecondUrl) {
          var url_base = !useSecondUrl ? _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BASEURL : _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].SECONDARY_URL;
          return this.http["delete"]("".concat(url_base).concat(url), this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(10000));
        }
      }]);

      return RequestService;
    }();

    RequestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RequestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RequestService);
    /***/
  },

  /***/
  "./src/app/services/storage.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/storage.service.ts ***!
    \*********************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;

    var StorageService = /*#__PURE__*/function () {
      function StorageService() {
        _classCallCheck(this, StorageService);
      } // JSON "set" 


      _createClass(StorageService, [{
        key: "setObject",
        value: function setObject(key, jsonOject) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee92() {
            return _regeneratorRuntime().wrap(function _callee92$(_context92) {
              while (1) {
                switch (_context92.prev = _context92.next) {
                  case 0:
                    _context92.next = 2;
                    return Storage.set({
                      key: key,
                      value: JSON.stringify(jsonOject)
                    });

                  case 2:
                  case "end":
                    return _context92.stop();
                }
              }
            }, _callee92);
          }));
        } // JSON "get" 

      }, {
        key: "getObject",
        value: function getObject(key) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee93() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee93$(_context93) {
              while (1) {
                switch (_context93.prev = _context93.next) {
                  case 0:
                    _context93.next = 2;
                    return Storage.get({
                      key: key
                    });

                  case 2:
                    ret = _context93.sent;
                    return _context93.abrupt("return", JSON.parse(ret.value));

                  case 4:
                  case "end":
                    return _context93.stop();
                }
              }
            }, _callee93);
          }));
        }
      }, {
        key: "setItem",
        value: function setItem(key, value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee94() {
            return _regeneratorRuntime().wrap(function _callee94$(_context94) {
              while (1) {
                switch (_context94.prev = _context94.next) {
                  case 0:
                    _context94.next = 2;
                    return Storage.set({
                      key: key,
                      value: value
                    });

                  case 2:
                  case "end":
                    return _context94.stop();
                }
              }
            }, _callee94);
          }));
        }
      }, {
        key: "getItem",
        value: function getItem(key) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee95() {
            var _yield$Storage$get, value;

            return _regeneratorRuntime().wrap(function _callee95$(_context95) {
              while (1) {
                switch (_context95.prev = _context95.next) {
                  case 0:
                    _context95.next = 2;
                    return Storage.get({
                      key: key
                    });

                  case 2:
                    _yield$Storage$get = _context95.sent;
                    value = _yield$Storage$get.value;
                    return _context95.abrupt("return", value);

                  case 5:
                  case "end":
                    return _context95.stop();
                }
              }
            }, _callee95);
          }));
        }
      }, {
        key: "removeItem",
        value: function removeItem(key) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee96() {
            return _regeneratorRuntime().wrap(function _callee96$(_context96) {
              while (1) {
                switch (_context96.prev = _context96.next) {
                  case 0:
                    _context96.next = 2;
                    return Storage.remove({
                      key: key
                    });

                  case 2:
                  case "end":
                    return _context96.stop();
                }
              }
            }, _callee96);
          }));
        }
      }, {
        key: "keys",
        value: function keys() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee97() {
            var _yield$Storage$keys, keys;

            return _regeneratorRuntime().wrap(function _callee97$(_context97) {
              while (1) {
                switch (_context97.prev = _context97.next) {
                  case 0:
                    _context97.next = 2;
                    return Storage.keys();

                  case 2:
                    _yield$Storage$keys = _context97.sent;
                    keys = _yield$Storage$keys.keys;
                    return _context97.abrupt("return", keys);

                  case 5:
                  case "end":
                    return _context97.stop();
                }
              }
            }, _callee97);
          }));
        }
      }, {
        key: "clear",
        value: function clear() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee98() {
            return _regeneratorRuntime().wrap(function _callee98$(_context98) {
              while (1) {
                switch (_context98.prev = _context98.next) {
                  case 0:
                    _context98.next = 2;
                    return Storage.clear();

                  case 2:
                  case "end":
                    return _context98.stop();
                }
              }
            }, _callee98);
          }));
        }
      }]);

      return StorageService;
    }();

    StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StorageService);
    /***/
  },

  /***/
  "./src/app/services/ui.service.ts":
  /*!****************************************!*\
    !*** ./src/app/services/ui.service.ts ***!
    \****************************************/

  /*! exports provided: UiService */

  /***/
  function srcAppServicesUiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiService", function () {
      return UiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");

    var UiService = /*#__PURE__*/function () {
      function UiService(loadingController, toastController, alertController, modalController, callNumber, actionSheetCtrl) {
        _classCallCheck(this, UiService);

        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.callNumber = callNumber;
        this.actionSheetCtrl = actionSheetCtrl;
      }

      _createClass(UiService, [{
        key: "loading",
        value: function loading(message, duration) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee100() {
            var _this56 = this;

            var loader;
            return _regeneratorRuntime().wrap(function _callee100$(_context100) {
              while (1) {
                switch (_context100.prev = _context100.next) {
                  case 0:
                    _context100.next = 2;
                    return this.loadingController.create({
                      mode: 'ios',
                      message: message,
                      //Set the maximum duration to load the current loader
                      duration: duration || 10000
                    });

                  case 2:
                    loader = _context100.sent;
                    //Finish the loader no matter if it not finish the operation
                    setTimeout(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this56, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee99() {
                        return _regeneratorRuntime().wrap(function _callee99$(_context99) {
                          while (1) {
                            switch (_context99.prev = _context99.next) {
                              case 0:
                                loader.dismiss();

                              case 1:
                              case "end":
                                return _context99.stop();
                            }
                          }
                        }, _callee99);
                      }));
                    }, 10000);
                    _context100.next = 6;
                    return loader.present();

                  case 6:
                    return _context100.abrupt("return", loader);

                  case 7:
                  case "end":
                    return _context100.stop();
                }
              }
            }, _callee100, this);
          }));
        }
      }, {
        key: "loadingDissmiss",
        value: function loadingDissmiss() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee101() {
            return _regeneratorRuntime().wrap(function _callee101$(_context101) {
              while (1) {
                switch (_context101.prev = _context101.next) {
                  case 0:
                    _context101.next = 2;
                    return this.loader;

                  case 2:
                    _context101.sent.dismiss();

                  case 3:
                  case "end":
                    return _context101.stop();
                }
              }
            }, _callee101, this);
          }));
        }
      }, {
        key: "call",
        value: function call(number) {
          var _this57 = this;

          this.callNumber.callNumber(number, true).then(function (res) {
            return console.log('Launched dialer!', res);
          })["catch"](function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this57, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee102() {
              return _regeneratorRuntime().wrap(function _callee102$(_context102) {
                while (1) {
                  switch (_context102.prev = _context102.next) {
                    case 0:
                      _context102.next = 2;
                      return this.presentAlert({
                        mode: 'ios',
                        header: 'No se ha podido iniciar la llamada',
                        buttons: [{
                          text: 'Aceptar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }]
                      });

                    case 2:
                    case "end":
                      return _context102.stop();
                  }
                }
              }, _callee102, this);
            }));
          });
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet(header, buttons) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee103() {
            var actionSheet;
            return _regeneratorRuntime().wrap(function _callee103$(_context103) {
              while (1) {
                switch (_context103.prev = _context103.next) {
                  case 0:
                    _context103.next = 2;
                    return this.actionSheetCtrl.create({
                      mode: 'ios',
                      header: header,
                      buttons: buttons
                    });

                  case 2:
                    actionSheet = _context103.sent;
                    _context103.next = 5;
                    return actionSheet.present();

                  case 5:
                    return _context103.abrupt("return", actionSheet);

                  case 6:
                  case "end":
                    return _context103.stop();
                }
              }
            }, _callee103, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(opttion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee104() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee104$(_context104) {
              while (1) {
                switch (_context104.prev = _context104.next) {
                  case 0:
                    _context104.next = 2;
                    return this.alertController.create(Object.assign(Object.assign({}, opttion), {
                      mode: 'ios'
                    }));

                  case 2:
                    alert = _context104.sent;
                    _context104.next = 5;
                    return alert.present();

                  case 5:
                    return _context104.abrupt("return", alert);

                  case 6:
                  case "end":
                    return _context104.stop();
                }
              }
            }, _callee104, this);
          }));
        }
      }, {
        key: "presentModal",
        value: function presentModal(component, properties) {
          var cssClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'my-custom-class';
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee105() {
            var modal;
            return _regeneratorRuntime().wrap(function _callee105$(_context105) {
              while (1) {
                switch (_context105.prev = _context105.next) {
                  case 0:
                    _context105.next = 2;
                    return this.modalController.create({
                      component: component,
                      cssClass: cssClass,
                      componentProps: properties
                    });

                  case 2:
                    modal = _context105.sent;
                    _context105.next = 5;
                    return modal.present();

                  case 5:
                    return _context105.abrupt("return", modal);

                  case 6:
                  case "end":
                    return _context105.stop();
                }
              }
            }, _callee105, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss(obj) {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalController.dismiss({
            obj: obj
          });
        }
      }, {
        key: "showToast",
        value: function showToast(message, action) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee106() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee106$(_context106) {
              while (1) {
                switch (_context106.prev = _context106.next) {
                  case 0:
                    _context106.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 3000,
                      position: 'bottom'
                    });

                  case 2:
                    toast = _context106.sent;
                    toast.present();

                    if (action) {
                      toast.onDidDismiss().then(function () {
                        action();
                      });
                    }

                  case 5:
                  case "end":
                    return _context106.stop();
                }
              }
            }, _callee106, this);
          }));
        }
      }, {
        key: "fileRead",
        value: function fileRead() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee107() {
            var contents;
            return _regeneratorRuntime().wrap(function _callee107$(_context107) {
              while (1) {
                switch (_context107.prev = _context107.next) {
                  case 0:
                    _context107.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Filesystem"].readFile({
                      path: 'secrets/text.txt',
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["FilesystemDirectory"].Documents,
                      encoding: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["FilesystemEncoding"].UTF8
                    });

                  case 2:
                    contents = _context107.sent;
                    console.log(contents);

                  case 4:
                  case "end":
                    return _context107.stop();
                }
              }
            }, _callee107);
          }));
        }
      }]);

      return UiService;
    }();

    UiService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }];
    };

    UiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UiService);
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /**
     * Before
     * apiKey: "AIzaSyAwimUJ6tDpOR2-y8jAzXBFgGs_Qanbcss",
        authDomain: "zapp-logistica-45aac.firebaseapp.com",
        databaseURL: "https://zapp-logistica-45aac.firebaseio.com",
        projectId: "zapp-logistica-45aac",
        storageBucket: "zapp-logistica-45aac.appspot.com",
        messagingSenderId: "838612036195",
        appId: "1:838612036195:web:ca521abe7c13b296866656",
        measurementId: "G-Z1K2M86CG4"
     */

    /**
     * This is the update
     * apiKey: "AIzaSyBQiPuLL1oaU8qehYLOaASCE7thzXGiYus",
        authDomain: "zapplogistica-prod.firebaseapp.com",
        projectId: "zapplogistica-prod",
        storageBucket: "zapplogistica-prod.appspot.com",
        messagingSenderId: "355844923625",
        appId: "1:355844923625:web:a22c07e65d7078449e5078",
        measurementId: "G-SFPNWYRG8J"
     */


    var environment = {
      production: true,
      BASEURL: 'https://zappstore.com.co/zapp-back/public/api/',
      SECONDARY_URL: 'https://zappstore.com.co/nuevo/wp-api/',
      firebaseConfig: {
        apiKey: "AIzaSyATr-dHHfoI0fz07QM8JrYqlFT23hmONUE",
        authDomain: "zapplogistica-76f1a.firebaseapp.com",
        databaseURL: "https://zapplogistica-76f1a-default-rtdb.firebaseio.com/",
        projectId: "zapplogistica-76f1a",
        storageBucket: "zapplogistica-76f1a.appspot.com",
        messagingSenderId: "109401557615",
        appId: "1:109401557615:web:6c2a68e7e0c5cccd4a9b9a",
        measurementId: "G-S93W4WF67T"
      },
      PLAY_AUDIO_ON_REQUEST: true,
      AUDIO_PATH: "./assets/audio/notification.mpeg",
      VERSION_NAME: "2.1.7.1",
      PLAY_STORE_URL: "https://play.google.com/store/apps/details?id=com.zapp.driver.app"
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      BASEURL: 'https://appewc.com/zapp/zapp-back/public/api/',
      SECONDARY_URL: 'https://zappstore.com.co/nuevo/wp-api/',
      firebaseConfig: {
        apiKey: "AIzaSyDa-PwG6r2LrtKHjwRWoB5MgnBoZaYT3Wk",
        authDomain: "zapp-logistica-dev.firebaseapp.com",
        databaseURL: "https://zapp-logistica-dev.firebaseio.com",
        projectId: "zapp-logistica-dev",
        storageBucket: "zapp-logistica-dev.appspot.com",
        messagingSenderId: "408995173697",
        appId: "1:408995173697:web:3cabbfbbf09e3e922ffdc0",
        measurementId: "G-PQS21Z48YG"
      },
      PLAY_AUDIO_ON_REQUEST: true,
      AUDIO_PATH: "./assets/audio/notification.mpeg",
      VERSION_NAME: "2.1.6",
      PLAY_STORE_URL: "https://play.google.com/store/apps/details?id=com.zapp.driver.app"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/pwa-elements/loader */
    "./node_modules/@ionic/pwa-elements/loader/index.es2017.mjs");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    }); //pwa elements

    Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/masprilla/DocumentosMiguel/Proyectos/zapp/zapp-driver-app-rpenaloza/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map