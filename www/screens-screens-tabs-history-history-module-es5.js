function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-history-history-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/history/history.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/history/history.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensScreensTabsHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"warning\">\n  <ion-card style=\"padding: 0;min-height: 350px;\">\n    <ion-card-content style=\"padding: 0\">\n      <ion-title class=\"ion-text-center\">Historial</ion-title>\n      <ng-container *ngIf=\"orders.length > 0; else elseTemplateOrder\">\n        <ion-card *ngFor=\"let item of orders\" style=\"margin-bottom: 10px;\" >\n          <ion-card-content (click)=\"viewDetail(item)\">\n\n            <div style=\"width:100%;display: flex;\">\n              <div class=\"w-50\">\n                ORDEN #{{item.id}}\n              </div>\n              <div style=\"width: 50%;text-align:right\">\n                \n                {{ item.date | dateLocal | titlecase }}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"w-50\">\n                <p class=\" \">Tipo de Servicio :  </p>\n              </div>\n              <div style=\"width: 50%;\">\n                <strong>{{item.service_type}}</strong>\n                \n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"w-50\">\n                <p class=\" \"> Ciudad : </p>\n                \n              </div>\n              <div style=\"width: 50%;   \">\n                <strong>{{item.city}}</strong>\n                \n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"w-50\">\n                <p class=\"\"> Cantidad : </p>\n              </div>\n              <div class=\"w-50\">\n                <strong>{{item.details.length}}</strong>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"w-50\">\n                <p class=\"\"> Recorrido : </p>\n              </div>\n              <div style=\"width: 50%; \">\n                <strong>{{item.round_trip ==1 ? 'Ida y Vuelta': 'Ida'}}</strong>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"w-50\">\n                <p class=\"\"> Valor declarado : </p>\n              </div>\n              <div class=\"w-50\">\n                <strong>{{item.declared_value}}</strong>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"w-50\">\n                <p class=\"\"> Tipo de accesorio : </p>\n              </div>\n              <div class=\"w-50\">\n                <strong>{{item.accessory_type}}</strong>\n              </div>\n            </div>\n            \n            <div class=\"row\" *ngIf=\"item.service_type_id == 3\">\n              <div class=\"w-50\">\n                <p class=\"\"> Número de horas : </p>\n              </div>\n              <div style=\"width: 50%;    \">\n                <strong>{{item.number_hours}}</strong>\n              </div>\n            </div>\n            <ion-item lines=\"none\">\n              <ion-button fill=\"clear\" size=\"small\" slot=\"start\"   style=\"\"  >\n                <ng-container *ngIf=\"item.score_service; else elseTemplate\">\n                  {{item.score_service ? item.score_service: 0 }}<ion-icon name=\"star\" class=\"text-yellow\"  ></ion-icon>  \n                </ng-container>\n                <ng-template #elseTemplate>\n                  Sin calificar <ion-icon name=\"star\" ></ion-icon>   \n                </ng-template>\n                \n                 \n              </ion-button>\n              <ion-button size=\"small\" [class]=\"store_states[item.status_order].class\" slot=\"end\">\n                {{store_states[item.status_order].message}}\n              </ion-button>\n            </ion-item>\n            \n            \n          </ion-card-content>\n         \n        </ion-card>\n        <ion-card *ngIf=\"loading\">\n          <ion-card-content >\n\n            <div style=\"width:100%;display: flex;\">\n              <div class=\"w-50\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n              <div style=\"width: 50%;text-align:right\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n            </div>\n            <div style=\"display: flex;margin-top: 5px;\n            margin-bottom: 5px;\">\n              <div class=\"w-50\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n              <div style=\"width: 50%; margin-left: 11px;\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n            </div>\n            <div style=\"display: flex;margin-top: 5px;\n            margin-bottom: 5px;\">\n              <div class=\"w-50\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n              <div style=\"width: 50%;    margin-left: 11px;\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n            </div>\n            <div style=\"display: flex;margin-top: 5px;\n            margin-bottom: 5px;\">\n              <div class=\"w-50\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n              <div style=\"width: 50%;    margin-left: 11px;\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n            </div>\n            \n          </ion-card-content>\n        </ion-card>\n        <ion-infinite-scroll  (ionInfinite)=\"loadData($event)\" >\n          <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\">\n          </ion-infinite-scroll-content>\n          \n        </ion-infinite-scroll>\n        \n      </ng-container>\n      <ng-template #elseTemplateOrder>\n        <div style=\"position: relative;height: 200px;\" *ngIf=\"orders.length == 0;\">\n          <h3 class=\"ion-text-center \" style=\"    font-size: 1.5em;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        text-align: center;\n        margin: auto;\n        height: 40px;\n    \">No ha realizado ningún viaje</h3>\n        </div>\n\n      </ng-template>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/history/history-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/history/history-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: HistoryPageRoutingModule */

  /***/
  function srcAppScreensScreensTabsHistoryHistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function () {
      return HistoryPageRoutingModule;
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


    var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/screens/screens-tabs/history/history.page.ts");

    var routes = [{
      path: '',
      component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }];

    var HistoryPageRoutingModule = /*#__PURE__*/_createClass(function HistoryPageRoutingModule() {
      _classCallCheck(this, HistoryPageRoutingModule);
    });

    HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HistoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/history/history.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/screens/screens-tabs/history/history.module.ts ***!
    \****************************************************************/

  /*! exports provided: HistoryPageModule */

  /***/
  function srcAppScreensScreensTabsHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
      return HistoryPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./history-routing.module */
    "./src/app/screens/screens-tabs/history/history-routing.module.ts");
    /* harmony import */


    var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/screens/screens-tabs/history/history.page.ts");
    /* harmony import */


    var src_app_modules_aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modules/aplication-pipe-module/aplication-pipe-module.module */
    "./src/app/modules/aplication-pipe-module/aplication-pipe-module.module.ts");

    var HistoryPageModule = /*#__PURE__*/_createClass(function HistoryPageModule() {
      _classCallCheck(this, HistoryPageModule);
    });

    HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"], src_app_modules_aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_7__["AplicationPipeModuleModule"]],
      declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })], HistoryPageModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/history/history.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/screens/screens-tabs/history/history.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensScreensTabsHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-yellow {\n  color: #c6c73a;\n}\n\n.button-green {\n  --background: green;\n  color: white;\n}\n\n.text-green {\n  color: green;\n}\n\n.button-red {\n  --background: red;\n  color: white;\n}\n\n.text-red {\n  color: red;\n}\n\n.button-gray {\n  --background: #CE4257;\n  color: #CE4257;\n}\n\n.button-cancel {\n  --background: #95B2B0;\n  color: #95B2B0;\n}\n\n.button-dark {\n  --background: #0e0f0f;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9zY3JlZW5zLXRhYnMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9zY3JlZW5zLXRhYnMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL3NjcmVlbnMtdGFicy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQteWVsbG93e1xuICAgIGNvbG9yOiAjYzZjNzNhO1xufVxuXG4uYnV0dG9uLWdyZWVuIHtcbiAgICAtLWJhY2tncm91bmQ6IGdyZWVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHQtZ3JlZW57XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udGV4dC1yZWR7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmJ1dHRvbi1ncmF5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNDRTQyNTc7XG4gICAgY29sb3I6ICNDRTQyNTc7XG59XG5cbi5idXR0b24tY2FuY2VsIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5NUIyQjA7XG4gICAgY29sb3I6ICM5NUIyQjA7XG59XG5cbi5idXR0b24tZGFya3tcbiAgICAtLWJhY2tncm91bmQ6ICMwZTBmMGY7XG4gICAgY29sb3I6IHdoaXRlO1xufSIsIi50ZXh0LXllbGxvdyB7XG4gIGNvbG9yOiAjYzZjNzNhO1xufVxuXG4uYnV0dG9uLWdyZWVuIHtcbiAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGV4dC1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmJ1dHRvbi1yZWQge1xuICAtLWJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGV4dC1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uYnV0dG9uLWdyYXkge1xuICAtLWJhY2tncm91bmQ6ICNDRTQyNTc7XG4gIGNvbG9yOiAjQ0U0MjU3O1xufVxuXG4uYnV0dG9uLWNhbmNlbCB7XG4gIC0tYmFja2dyb3VuZDogIzk1QjJCMDtcbiAgY29sb3I6ICM5NUIyQjA7XG59XG5cbi5idXR0b24tZGFyayB7XG4gIC0tYmFja2dyb3VuZDogIzBlMGYwZjtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/history/history.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/screens/screens-tabs/history/history.page.ts ***!
    \**************************************************************/

  /*! exports provided: HistoryPage */

  /***/
  function srcAppScreensScreensTabsHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
      return HistoryPage;
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


    var src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/screens/forms/view-detail/view-detail.page */
    "./src/app/screens/forms/view-detail/view-detail.page.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/network-status.service */
    "./src/app/services/network-status.service.ts");

    var HistoryPage = /*#__PURE__*/function () {
      function HistoryPage(ui, request, auth, router, network) {
        _classCallCheck(this, HistoryPage);

        this.ui = ui;
        this.request = request;
        this.auth = auth;
        this.router = router;
        this.network = network;
        this.orders = [];
        this.image = "assets/imgs/avatar.svg";
        this.slideOpts = {
          initialSlide: 1,
          speed: 400
        };
        this.store_states = {
          25: {
            message: "Finalizada",
            state: 25,
            "class": "button-green"
          },
          31: {
            message: "Cancelada",
            state: 31,
            color: "button-cancel"
          },
          36: {
            message: "Cancelada por mensajero",
            state: 36,
            color: "button-gray "
          },
          48: {
            message: "Orden no efectiva",
            state: 48,
            color: "button-dark"
          }
        };
        this.allLoaded = false;
        this.dataParams = {
          total: 0,
          per_page: 5,
          page: 1,
          filters: []
        };
        this.nextPage = "";
        this.to = 0;
        this.loadedText = "";
        this.loading = false;
      }

      _createClass(HistoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this = this;

            var loader;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.user = this.auth.user;
                    this.dataParams.page = 1;

                    if (!this.network.getNetworkStatus().connected) {
                      _context3.next = 9;
                      break;
                    }

                    _context3.next = 5;
                    return this.ui.loading("Por favor espere...");

                  case 5:
                    loader = _context3.sent;
                    this.request.get("driver/history_services/".concat(this.auth.user.id, "?per_page=").concat(this.dataParams.per_page, "&page=").concat(this.dataParams.page)).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return loader;

                              case 2:
                                _context.sent.dismiss();

                                console.log("Res", res.data.data);
                                this.orders = res.data.data;
                                this.to = res.data.to;

                              case 6:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return loader;

                              case 2:
                                _context2.sent.dismiss();

                                this.orders = [];

                              case 4:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });
                    _context3.next = 10;
                    break;

                  case 9:
                    this.ui.showToast("Verifique su conexión");

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "viewDetail",
        value: function viewDetail(order) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _this2 = this;

            var modal, m;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!this.network.getNetworkStatus().connected) {
                      _context5.next = 16;
                      break;
                    }

                    if (!(order.status_order == 23)) {
                      _context5.next = 6;
                      break;
                    }

                    _context5.next = 4;
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
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                            var modal, m;
                            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    _context4.next = 2;
                                    return this.ui.presentModal(src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_3__["ViewDetailPage"], {
                                      order: order
                                    });

                                  case 2:
                                    modal = _context4.sent;
                                    _context4.next = 5;
                                    return modal.onDidDismiss();

                                  case 5:
                                    m = _context4.sent;
                                    this.dataParams.page = 1;
                                    this.ionViewWillEnter();

                                  case 8:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        }
                      }]
                    });

                  case 4:
                    _context5.next = 14;
                    break;

                  case 6:
                    _context5.next = 8;
                    return this.ui.presentModal(src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_3__["ViewDetailPage"], {
                      order: order
                    });

                  case 8:
                    modal = _context5.sent;
                    _context5.next = 11;
                    return modal.onDidDismiss();

                  case 11:
                    m = _context5.sent;
                    this.dataParams.page = 1;
                    this.ionViewWillEnter();

                  case 14:
                    _context5.next = 17;
                    break;

                  case 16:
                    this.ui.showToast("Verifique su conexión");

                  case 17:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this3 = this;

          if (this.network.getNetworkStatus().connected) {
            this.dataParams.page++;
            this.loading = true;
            this.request.get("driver/history_services/".concat(this.auth.user.id, "?per_page=").concat(this.dataParams.per_page, "&page=").concat(this.dataParams.page)).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                var _this4 = this;

                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        console.log("Sucesss");
                        res.data.data.map(function (d) {
                          _this4.orders.push(d);
                        });
                        console.log("Orders", this.orders);
                        this.loading = false;
                        event.target.complete();

                      case 5:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                var _this5 = this;

                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        console.log("Error");
                        event.target.disabled = true;
                        this.allLoaded = true;
                        this.loading = false;
                        console.log("Error", err);
                        err.error.data.map(function (d) {
                          _this5.orders.push(d);
                        });
                        event.target.complete();

                      case 7:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            });
          } else {
            this.ui.showToast("Verifique su conexión");
          }
        }
      }]);

      return HistoryPage;
    }();

    HistoryPage.ctorParameters = function () {
      return [{
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"]
      }];
    };

    HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./history.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/history/history.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./history.page.scss */
      "./src/app/screens/screens-tabs/history/history.page.scss"))["default"]]
    })], HistoryPage);
    /***/
  }
}]);
//# sourceMappingURL=screens-screens-tabs-history-history-module-es5.js.map