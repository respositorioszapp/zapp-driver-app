function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/home/home.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/home/home.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensScreensTabsHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"display: block;\nposition: relative;\n-ms-flex-order: -1;\norder: -1;\nwidth: 100%;\nz-index: 10;\nbackground: transparent;\">\n  <p class=\"ion-text-center\"><img src=\"assets/imgs/logo-morado.png\" style=\"width: 150px;\n    height: 50px;\n\"></p>\n\n</div>\n<ion-content color=\"warning\" >\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"loadData()\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid style=\"width: 80%;\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img [src]=\"image\" width=\"70\" style=\"border-radius: 50%;\n    width: 100px;\n    height: 100px;\">\n      </ion-col>\n    <ion-col size=\"8\" >\n      <ion-grid >\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-card-title class=\"\"><span class=\"black-color-text\">{{user.name | wrapName:17}}</span>\n              <ion-icon name=\"checkmark-circle\"\n                [ngClass]=\"{'verified': user.verified == 1, 'not-verified' : user.verified == 0 }\"></ion-icon>\n            </ion-card-title>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-card-subtitle class=\"\">\n              <span style=\"font-weight: 900;\n    color: black !important;\">{{user.email}}</span>\n            </ion-card-subtitle>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-button mode=\"ios\" color=\"{{user.available == 1? 'success': user.available == 35?'tertiary':'danger'}}\" size=\"small\" (click)=\"verified()\"\n          class=\"ion-margin-top ion-text-center\" style=\"margin: auto;\n      width: 100%;\">\n      <ng-container *ngIf=\"user.verified == 1; else elseTemplateNodisponible\">\n        <span *ngIf=\"user.available == 1\">Disponible</span>\n        <span *ngIf=\"user.available == 0\">No disponible</span>\n        <span *ngIf=\"user.available == 35\">En servicio</span>\n      </ng-container>\n      <ng-template #elseTemplateNodisponible>\n        <span >No disponible</span>\n      </ng-template>\n      \n         \n        </ion-button>\n        </ion-row>\n      </ion-grid>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-order-card [orders]=\"filterOrderNear()\" title=\"Ordenes cerca de ti\" [available]=\"user.available\" [spinner]=\"spinner\" near=\"true\" [latLng]=\"latLng\" [otherOrders]=\"filter()\">\n\n  </app-order-card>\n  <app-order-card [orders]=\"filter()\" title=\"Ordenes activas\" [available]=\"user.available\" [spinner]=\"spinner\" near=\"false\" [latLng]=\"latLng\" [otherOrders]=\"filterOrderNear()\">\n\n  </app-order-card>\n  \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/home/home-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/screens/screens-tabs/home/home-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppScreensScreensTabsHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/screens/screens-tabs/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = /*#__PURE__*/_createClass(function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    });

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/home/home.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/screens/screens-tabs/home/home.module.ts ***!
    \**********************************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppScreensScreensTabsHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/screens/screens-tabs/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/screens/screens-tabs/home/home.page.ts");
    /* harmony import */


    var _modules_aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../modules/aplication-pipe-module/aplication-pipe-module.module */
    "./src/app/modules/aplication-pipe-module/aplication-pipe-module.module.ts");
    /* harmony import */


    var src_app_components_order_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/order/order.component */
    "./src/app/components/order/order.component.ts");
    /* harmony import */


    var src_app_modules_common_components_common_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/modules/common-components/common-components.module */
    "./src/app/modules/common-components/common-components.module.ts");
    /* harmony import */


    var _forms_view_detail_view_detail_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../forms/view-detail/view-detail.module */
    "./src/app/screens/forms/view-detail/view-detail.module.ts");

    var HomePageModule = /*#__PURE__*/_createClass(function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    });

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], src_app_modules_common_components_common_components_module__WEBPACK_IMPORTED_MODULE_9__["CommonComponentsModule"], _modules_aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_7__["AplicationPipeModuleModule"], _forms_view_detail_view_detail_module__WEBPACK_IMPORTED_MODULE_10__["ViewDetailPageModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
      entryComponents: [src_app_components_order_order_component__WEBPACK_IMPORTED_MODULE_8__["OrderComponent"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/home/home.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/screens/screens-tabs/home/home.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensScreensTabsHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".verified {\n  color: #49158c;\n  font-size: 1.2em;\n}\n\n.not-verified {\n  color: #737d81;\n  font-size: 1.2em;\n}\n\n.card-content-md p {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9zY3JlZW5zLXRhYnMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9zY3JlZW5zLXRhYnMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9zY3JlZW5zLXRhYnMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJpZmllZHtcbiAgICBjb2xvcjogIzQ5MTU4YztcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4ubm90LXZlcmlmaWVke1xuICAgIGNvbG9yOiAjNzM3ZDgxO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5jYXJkLWNvbnRlbnQtbWQgcHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuXG5cbiIsIi52ZXJpZmllZCB7XG4gIGNvbG9yOiAjNDkxNThjO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4ubm90LXZlcmlmaWVkIHtcbiAgY29sb3I6ICM3MzdkODE7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5jYXJkLWNvbnRlbnQtbWQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/home/home.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/screens/screens-tabs/home/home.page.ts ***!
    \********************************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppScreensScreensTabsHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/screens/forms/view-detail/view-detail.page */
    "./src/app/screens/forms/view-detail/view-detail.page.ts");
    /* harmony import */


    var _services_realtime_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/realtime.service */
    "./src/app/services/realtime.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _services_network_status_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../services/network-status.service */
    "./src/app/services/network-status.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/services/place.service */
    "./src/app/services/place.service.ts");
    /* harmony import */


    var src_app_services_days_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/services/days.service */
    "./src/app/services/days.service.ts");
    /* harmony import */


    var src_app_services_background_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/app/services/background.service */
    "./src/app/services/background.service.ts");
    /* harmony import */


    var cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! cordova-background-geolocation-lt */
    "./node_modules/cordova-background-geolocation-lt/src/ionic/index.js");
    /* harmony import */


    var _forms_request_location_permission_request_location_permission_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../forms/request-location-permission/request-location-permission.page */
    "./src/app/screens/forms/request-location-permission/request-location-permission.page.ts");

    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
        Geolocation = _capacitor_core__WEBP.Geolocation,
        Haptics = _capacitor_core__WEBP.Haptics,
        Modals = _capacitor_core__WEBP.Modals,
        LocalNotifications = _capacitor_core__WEBP.LocalNotifications; // import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationLocationProvider, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';

    var HomePage = /*#__PURE__*/function () {
      function HomePage(auth, request, ui, router, loadingController, realtime, network, db, place, days, backgroundService) {
        _classCallCheck(this, HomePage);

        this.auth = auth;
        this.request = request;
        this.ui = ui;
        this.router = router;
        this.loadingController = loadingController;
        this.realtime = realtime;
        this.network = network;
        this.db = db;
        this.place = place;
        this.days = days;
        this.backgroundService = backgroundService;
        this.count = 1;
        this.spinner = false;
        this.orders = [];
        this.image = "assets/imgs/avatar.svg";
        this.latLng = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.orderNearYou = [];
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
        this.fcmId = null;
        this.interval = null;
      }

      _createClass(HomePage, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.startPosition();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.user = this.auth.user;
                    _context.next = 3;
                    return LocalNotifications.requestPermission();

                  case 3:
                    //
                    _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["App"].addListener("appStateChange", function (state) {
                      clearInterval(_this.interval);
                      console.log("Background mode");

                      if (!state.isActive) {
                        //Cuando la app está en segundo plano, esperar 6 minutos y reiniciar escuchar la posición
                        if (_this.auth.user != null && _this.auth.user.available != 0) {// setTimeout(() => {
                          //   this.initializeBackgroundGeolocation();
                          //   this.startWatchingPosition()
                          // }, 240000)
                        }
                      } else {}
                    });

                    this.startPosition();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // this.
                    // this.startWatchingPosition();
                    // this.initializeBackgroundGeolocation()
                    _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Network"].addListener('networkStatusChange', function (status) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                console.log("Network status changed", status);
                                localStorage.setItem("network_status", JSON.stringify(status));

                                if (status.connected) {
                                  Geolocation.clearWatch({
                                    id: this.watchPositionId
                                  });

                                  if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web') {// await this.backgroundGeolocation.removeAllListeners()
                                  } // this.initializeBackgroundGeolocation()

                                }

                              case 3:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _this3 = this;

            var i, loader, position;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.user = this.auth.user;
                    i = 0;

                    if (this.auth.person.ordersNearYou) {
                      this.orderNearYou = this.auth.person.ordersNearYou;
                    }

                    this.closeSubscriptions();
                    this.initSubscriptions();
                    this.verifyCurrentOrder();

                    if (!(this.user.available != 0)) {
                      _context6.next = 10;
                      break;
                    }

                    this.loadData();
                    _context6.next = 21;
                    break;

                  case 10:
                    if (!this.network.getNetworkStatus().connected) {
                      _context6.next = 20;
                      break;
                    }

                    if (localStorage.getItem("current_order")) {
                      _context6.next = 17;
                      break;
                    }

                    _context6.next = 14;
                    return this.loadingController.create({
                      message: "Por favor espere..."
                    });

                  case 14:
                    loader = _context6.sent;
                    _context6.next = 17;
                    return loader.present();

                  case 17:
                    this.request.get("driver/documents/".concat(this.auth.user.id)).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                        var documents, photo;
                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                if (localStorage.getItem("current_order")) {
                                  _context4.next = 4;
                                  break;
                                }

                                _context4.next = 3;
                                return loader;

                              case 3:
                                _context4.sent.dismiss();

                              case 4:
                                documents = res.data.documents;
                                photo = documents.filter(function (d) {
                                  return d["document_type "] == "Foto del conductor";
                                });

                                if (photo.length > 0) {
                                  this.image = photo[photo.length - 1].url;
                                }

                              case 7:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                if (localStorage.getItem("current_order")) {
                                  _context5.next = 4;
                                  break;
                                }

                                _context5.next = 3;
                                return loader;

                              case 3:
                                _context5.sent.dismiss();

                              case 4:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5);
                      }));
                    });
                    _context6.next = 21;
                    break;

                  case 20:
                    this.ui.showToast("Verifique su conexión");

                  case 21:
                    _context6.next = 23;
                    return Geolocation.getCurrentPosition({
                      enableHighAccuracy: true
                    });

                  case 23:
                    position = _context6.sent;
                    // (await loader).dismiss();
                    localStorage.setItem("latitude", position.coords.latitude.toString());
                    localStorage.setItem("longitude", position.coords.longitude.toString());

                  case 26:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "verifyCurrentOrder",
        value: function verifyCurrentOrder() {
          var _this4 = this;

          if (localStorage.getItem("current_order")) {
            var order = JSON.parse(localStorage.getItem("current_order"));

            if (order.service_type_id == 3) {
              this.request.get("order/show_order/".concat(order.id)).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                  var _this5 = this;

                  var orderDatabase, myDetails, detailData, otherDetails;
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          orderDatabase = res.data;
                          myDetails = orderDatabase.detail.filter(function (d) {
                            return d.people_id == _this5.auth.user.id;
                          });

                          if (!(myDetails.length > 0)) {
                            _context7.next = 16;
                            break;
                          }

                          detailData = myDetails[0];

                          if (!(detailData.status == 25)) {
                            _context7.next = 15;
                            break;
                          }

                          if (!(orderDatabase.status_order == 25)) {
                            _context7.next = 11;
                            break;
                          }

                          localStorage.removeItem("current_order");
                          _context7.next = 9;
                          return this.ui.presentAlert({
                            mode: 'ios',
                            header: "Advertencia",
                            message: "Esta orden ya ha sido finalizada"
                          });

                        case 9:
                          _context7.next = 13;
                          break;

                        case 11:
                          otherDetails = orderDatabase.detail.filter(function (d) {
                            return d.people_id != _this5.auth.user.id;
                          });

                          if (otherDetails.length == 0) {
                            this.endService(orderDatabase);
                          }

                        case 13:
                          _context7.next = 16;
                          break;

                        case 15:
                          this.viewDetail(order);

                        case 16:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7, this);
                }));
              });
            } else {
              this.viewDetail(order);
            }
          }
        }
      }, {
        key: "clearLocals",
        value: function clearLocals() {
          localStorage.removeItem("current_order");
          localStorage.removeItem("total_charge");
          localStorage.removeItem("initTimer");
          localStorage.removeItem("client_configuration_data");
          localStorage.removeItem("configuration_data");
          localStorage.removeItem("timer");
          localStorage.removeItem("bearing");
          localStorage.removeItem("bearing_used");
          localStorage.removeItem("app_close_date");
          var idInterval = Number(localStorage.getItem("id_interval"));
          clearInterval(idInterval);
          localStorage.removeItem("id_interval");
        }
      }, {
        key: "getOrderAlertMessage",
        value: function getOrderAlertMessage(order, isMassive) {
          var pay = order.payment_method.toLowerCase() == 'efectivo' ? order.zapp_store_order == 1 ? order.total_zapp_store : order.total : 0;
          var details = order.details ? order.details : order.detail;
          var message = "Tipo de servicio: <strong>" + order.service_type + "</strong>";

          if (order.service_type_id != "3") {
            message += "<br/> Recorrido :  <strong>" + (order.round_trip == 1 ? 'Ida y Vuelta' : 'Ida') + "</strong>";
            message += "<br>Cantidad :<strong>" + details.length + " direcciones </strong>";
            message += "<br> Método de pago: <strong>" + order.payment_method + "</strong>";
            +"<br> Tipo de accesorio: <strong>" + order.accessory_type + "</strong>";
            message += "<br> Día del servicio : <strong>" + order.date + "</strong>";
          }

          if (order.service_type_id == "1") {
            message += "<br> Dirección A : <strong>" + details[0].address + "</strong>" + "<br> Dirección B :<strong>" + details[1].address + "</strong>";
          }

          if (order.service_type_id == "3") {
            message += "<br> Día del servicio : <strong>" + order.date + "</strong>";
            message += "<br> Dirección : <strong>" + details[0].address + "</strong>";
            message += "<br> Hora de inicio : <strong>" + details[0].start_time + "</strong>" + "<br> Hora de salida :<strong>" + details[0].departure_time + "</strong>";
            message += "<br> Número de horas :<strong>" + details[0].number_of_hours + "</strong>";
          } else {
            if (order.payment_method.toLowerCase() == 'masivo') {
              var cash = 0;
              details.forEach(function (d) {
                cash += d.declared_value ? d.declared_value : 0;
              });
              message += "<br> Cobrar: <strong>$" + cash + "</strong>";
            } else {
              message += "<br> Cobrar: <strong>$" + pay + "</strong>";
            }
          }

          return message;
        }
      }, {
        key: "initSubscriptions",
        value: function initSubscriptions() {
          console.log("Init Subscription");
          this.startMassiveOrderSubscription();
          this.startNewOrdersSubsriptions();
          this.startStatusSubscription();
          this.listenToVersionChange();
        }
      }, {
        key: "listenToVersionChange",
        value: function listenToVersionChange() {
          var _this6 = this;

          this.versionSubscription = this.realtime.getFirebaseCollectionObject("code_version_mobile/5").valueChanges().subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this7 = this;

              var status;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!(res != null)) {
                        _context8.next = 21;
                        break;
                      }

                      console.log("Res version code", res);

                      if (!localStorage.getItem("current_version")) {
                        _context8.next = 14;
                        break;
                      }

                      status = JSON.parse(localStorage.getItem("current_version"));
                      console.log("current_version", status);
                      console.log("res", res);
                      console.log("equal", res === status);

                      if (!(res.code == status.code)) {
                        _context8.next = 11;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 11:
                      localStorage.setItem("current_version", JSON.stringify(res));

                    case 12:
                      _context8.next = 16;
                      break;

                    case 14:
                      console.log("elseeee");
                      localStorage.setItem("current_version", JSON.stringify(res));

                    case 16:
                      if (!(res.code != _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].VERSION_NAME)) {
                        _context8.next = 19;
                        break;
                      }

                      _context8.next = 19;
                      return this.ui.presentAlert({
                        mode: 'ios',
                        header: '¡Hay nueva versión disponible!',
                        message: 'Por favor, descargala',
                        buttons: [{
                          text: 'Aceptar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log("Execute");

                            _this7.auth.logOut();
                          }
                        }]
                      });

                    case 19:
                      _context8.next = 22;
                      break;

                    case 21:
                      this.realtime.getFirebaseCollectionObject("code_version_mobile/5").set({
                        code: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].VERSION_NAME
                      });

                    case 22:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          });
        }
      }, {
        key: "startStatusSubscription",
        value: function startStatusSubscription() {
          var _this8 = this;

          var verified = this.auth.user.verified;
          this.statusSubscription = this.realtime.getStatus().valueChanges().subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var _this9 = this;

              var status, header, message, _message;

              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      console.log("Status", res);

                      if (!(res != null)) {
                        _context10.next = 27;
                        break;
                      }

                      if (!localStorage.getItem("current_status")) {
                        _context10.next = 14;
                        break;
                      }

                      status = JSON.parse(localStorage.getItem("current_status"));
                      console.log("current_status", status);
                      console.log("res", res);
                      console.log("equal", res === status);

                      if (!(res.verified == status.verified && res.documents == status.documents && res.first_time_verified == status.first_time_verified)) {
                        _context10.next = 11;
                        break;
                      }

                      return _context10.abrupt("return");

                    case 11:
                      localStorage.setItem("current_status", JSON.stringify(res));

                    case 12:
                      _context10.next = 16;
                      break;

                    case 14:
                      console.log("elseeee");
                      localStorage.setItem("current_status", JSON.stringify(res));

                    case 16:
                      if (!(verified == 1)) {
                        _context10.next = 19;
                        break;
                      }

                      verified = 0;
                      return _context10.abrupt("return");

                    case 19:
                      this.auth.user.verified = res.verified;
                      this.user.verified = res.verified;

                      if (res.verified == 1 && res.documents == 1 || res.verified == 1) {
                        header = '¡Enhorabuena, has sido verificado!';

                        if (this.user.available == 1) {
                          this.loadData();
                        }
                      } else {
                        if (res.verified == 0 && res.documents == 1) {
                          header = res.first_time_verified == 0 ? 'Enhorabuena, has completado tu registro, una operadora está verficando tu información y posteriormente serás activado ' : '¡Tu usuario ha sido inhabilitado, contacta al administrador!';
                          console.log("Header", header);
                          this.user.available = 0;
                          this.auth.user.available = 0;
                          this.orders = [];
                        } else {
                          if (res.verified == 0 && res.documents == 0) {
                            header = 'Completa tu información para terminar el regitro y serás habilitado por una operadora';
                          }
                        }
                      }

                      this.auth.setUser(this.user);
                      this.ui.presentAlert({
                        mode: 'ios',
                        header: header,
                        message: message,
                        buttons: [{
                          text: 'Aceptar',
                          role: res.verified == 0 && res.documents == 0 ? undefined : 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            if (res.verified == 0 && res.documents == 0) {
                              _this9.router.navigate(['tabs/documents']);
                            }

                            console.log('cerrar');
                          }
                        }]
                      });

                      if (!localStorage.getItem("firstTime" + this.auth.user.id)) {
                        localStorage.setItem("firstTime" + this.auth.user.id, JSON.stringify({}));
                        _message = "Zapp Driver App te da la bienvenida <br> ";
                        _message += this.auth.person.first_name.toString().toUpperCase() + " ";
                        _message += this.auth.person.last_name.toString().toUpperCase() + " <br> ";
                        _message += "Te recomendamos que para tener la mejor experiencia posible que mantengas el GPS encendido <br>";
                        _message += " <br> Muchas gracias y disfruta de la aplicación";
                        this.ui.presentAlert({
                          mode: 'ios',
                          header: "Bienvennido",
                          message: _message,
                          buttons: [{
                            text: 'Aceptar',
                            cssClass: 'secondary',
                            handler: function handler(res) {
                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                                  while (1) {
                                    switch (_context9.prev = _context9.next) {
                                      case 0:
                                      case "end":
                                        return _context9.stop();
                                    }
                                  }
                                }, _callee9);
                              }));
                            }
                          }]
                        });
                      }

                      _context10.next = 28;
                      break;

                    case 27:
                      this.realtime.getStatus().update({
                        verified: 0,
                        documents: 0,
                        first_time_verified: 0
                      });

                    case 28:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          });
        }
      }, {
        key: "startMassiveOrderSubscription",
        value: function startMassiveOrderSubscription() {
          var _this10 = this;

          this.massiveOrdersSubscription = this.realtime.getMassivesOrders().valueChanges().subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var order, _yield$this$isOrderAc, activeMessage, active;

              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      console.log("Massive order", res);

                      if (!(res != null)) {
                        _context11.next = 11;
                        break;
                      }

                      if (!(res.new_order == 1)) {
                        _context11.next = 11;
                        break;
                      }

                      order = res.orders;

                      if (!(order != null && Object.keys(order).length > 0)) {
                        _context11.next = 11;
                        break;
                      }

                      _context11.next = 7;
                      return this.isOrderActive(order);

                    case 7:
                      _yield$this$isOrderAc = _context11.sent;
                      activeMessage = _yield$this$isOrderAc.message;
                      active = _yield$this$isOrderAc.active;

                      if (active) {
                        if (!localStorage.getItem("current_order")) {
                          this.playAudio();

                          if (!this.orderNearYou.find(function (o) {
                            return o.id == order.id;
                          })) {
                            this.orderNearYou.push(order);
                            this.auth.person.ordersNearYou = this.orderNearYou;
                            this.auth.setPerson(this.auth.person);
                          }
                        }
                      }

                    case 11:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          });
        }
      }, {
        key: "startNewOrdersSubsriptions",
        value: function startNewOrdersSubsriptions() {
          var _this11 = this;

          this.orderSubscription = this.realtime.getNewOrder().valueChanges().subscribe(function (res) {
            console.log("res", res);

            if (res != null) {
              console.log("snapshot", res);

              if (res.new_order == 1) {
                var order = res.orders;

                var item = _this11.orders.find(function (o) {
                  return o.id == order.id;
                });

                if (!item) {
                  _this11.playAudio(); // Haptics.vibrate();


                  _this11.orders.unshift(order);

                  _this11.realtime.getNewOrder().update({
                    new_order: 0,
                    orders: {},
                    proximity: 1
                  });

                  var details = order.details ? order.details : order.detail;

                  _this11.realtime.getFirebaseCollectionObject("order_detail_report/".concat(order.id, "/").concat(details[0].id)).valueChanges().subscribe(function (res) {
                    if (res == null) {
                      _this11.realtime.getFirebaseCollectionObject("order_detail_report/".concat(order.id, "/").concat(details[0].id)).set(Object.assign({}, details[0]));
                    }
                  });
                }
              }
            }
          });
        }
      }, {
        key: "closeSubscriptions",
        value: function closeSubscriptions() {
          if (this.statusSubscription) {
            this.statusSubscription.unsubscribe();
          }

          if (this.orderSubscription) {
            this.orderSubscription.unsubscribe();
          }

          if (this.massiveOrdersSubscription) {
            this.massiveOrdersSubscription.unsubscribe();
          }
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.closeSubscriptions();
        }
      }, {
        key: "isAboutToEnd",
        value: function isAboutToEnd(item) {
          return item.details.every(function (d) {
            return d.status == 25 || d.status == 48;
          });
        }
      }, {
        key: "endService",
        value: function endService(item) {
          var _this12 = this;

          console.log("Order", item);
          var data = new FormData(); // this.ui.showToast("Latitude " + this.latitude + " Longitud" + this.longitude)

          var latitude = localStorage.getItem("latitude");
          var longitude = localStorage.getItem("longitude");
          data.append("order_id", item.id);
          data.append("latitude", latitude);
          data.append("longitude", longitude);
          data.append("description", "Finalización Servicio");
          data.append("user_id", this.auth.user.id.toString());
          var loader = this.ui.loading("Por favor espere...");
          this.request.post("driver/end_service", data).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return loader;

                    case 2:
                      _context12.sent.dismiss();

                      item.status_order = 25;
                      this.ui.showToast("Orden " + item.id + " finalizada.", function () {});

                    case 5:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      console.log("Error", err);
                      _context13.next = 3;
                      return loader;

                    case 3:
                      _context13.sent.dismiss();

                      if (err.status == 400) {
                        this.ui.showToast(err.error.messages[0]);
                      }

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          });
        }
      }, {
        key: "startPosition",
        value: function startPosition() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    if (!(this.auth.user && this.auth.user.available)) {
                      _context14.next = 10;
                      break;
                    }

                    if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web')) {
                      _context14.next = 7;
                      break;
                    }

                    _context14.next = 4;
                    return cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].stop();

                  case 4:
                    this.initializeBackgroundGeolocation();
                    _context14.next = 10;
                    break;

                  case 7:
                    _context14.next = 9;
                    return Geolocation.clearWatch({
                      id: this.watchPositionId
                    });

                  case 9:
                    this.startWatchingPosition();

                  case 10:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "stopPosition",
        value: function stopPosition() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
            return _regeneratorRuntime().wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return Geolocation.clearWatch({
                      id: this.watchPositionId
                    });

                  case 2:
                    if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web')) {
                      _context15.next = 5;
                      break;
                    }

                    _context15.next = 5;
                    return cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].stop();

                  case 5:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "startWatchingPosition",
        value: function startWatchingPosition(mode) {
          var _this13 = this;

          if (this.auth.user.available != 0) {
            this.watchPositionId = Geolocation.watchPosition({// enableHighAccuracy: true
            }, function (position, err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
                var _this14 = this;

                var latitude, longitude, heading, bearing_used, _bearing, bearing, actual_angle, order, path, _heading, _bearing_used, _bearing3, _bearing2, _actual_angle, _order, _path;

                return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        if (err) {
                          _context16.next = 38;
                          break;
                        }

                        console.log("Location Update", JSON.stringify(position)); // if (Capacitor.platform != 'web') {
                        //   Haptics.vibrate();
                        // }

                        latitude = localStorage.getItem("latitude");
                        longitude = localStorage.getItem("longitude");

                        if (!(latitude && longitude)) {
                          _context16.next = 26;
                          break;
                        }

                        _context16.prev = 5;
                        console.log("Location Update Success");
                        localStorage.setItem("latitude", position.coords.latitude.toString());
                        localStorage.setItem("longitude", position.coords.longitude.toString());
                        heading = position.coords.heading ? position.coords.heading : 0;

                        if (localStorage.getItem("bearing")) {
                          _bearing = localStorage.getItem("bearing");
                          bearing_used = _bearing;
                        }

                        localStorage.setItem("bearing", heading.toString());
                        bearing = 0;

                        if (bearing_used) {
                          bearing = bearing_used;
                        } else {
                          bearing = 180;
                        }

                        actual_angle = heading - bearing;
                        this.latLng.next({
                          lat: position.coords.latitude,
                          lng: position.coords.longitude,
                          bearing: actual_angle
                        });
                        _context16.next = 18;
                        return this.realtime.getUserGeolocation().update({
                          key: this.auth.user.id,
                          user_id: this.auth.user.id,
                          latitude: position.coords.latitude.toString(),
                          longitude: position.coords.longitude.toString(),
                          city_id: this.auth.person.city_id,
                          state_id: Number(this.auth.person.state_id),
                          level_id: Number(this.auth.user.level_id),
                          // last_active: Date.now(),
                          available: this.auth.user.available,
                          driver_name: this.auth.user.name,
                          transport_type_id: this.auth.vehicles.transport_type_id
                        });

                      case 18:
                        if (localStorage.getItem("current_order")) {
                          order = JSON.parse(localStorage.getItem("current_order"));
                          console.log("Order Next 2");

                          if (order) {
                            path = 'order_gps/' + order.id + '/' + this.auth.user.id;
                            this.db.object(path).update({
                              order: order.id,
                              key: this.auth.user.id,
                              vehicleId: this.auth.vehicles.id,
                              lat: position.coords.latitude,
                              lng: position.coords.longitude,
                              oldLat: position.coords.latitude,
                              oldLng: position.coords.longitude,
                              angle: actual_angle,
                              // last_active: Date.now(),
                              code: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].VERSION_NAME
                            });
                            this.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + this.auth.user.id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function (value) {
                              // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
                              if (value === null) {
                                var locations = [{
                                  lat: position.coords.latitude,
                                  lng: position.coords.longitude,
                                  created_at: Date.now()
                                }]; // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())

                                _this14.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + _this14.auth.user.id).set({
                                  order: order,
                                  key: _this14.auth.user.id,
                                  user_id: _this14.auth.user.id,
                                  locations: locations,
                                  code: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].VERSION_NAME
                                });
                              } else {
                                // update
                                var _locations = value.locations;

                                _locations.push({
                                  lat: position.coords.latitude,
                                  lng: position.coords.longitude,
                                  created_at: Date.now()
                                });

                                _this14.realtime.getFirebaseCollectionObject('order_history_reports/' + order.id + '/' + _this14.auth.user.id).update({
                                  order: order,
                                  key: _this14.auth.user.id,
                                  locations: _locations,
                                  code: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].VERSION_NAME
                                });
                              }
                            });
                          }
                        }

                        _context16.next = 24;
                        break;

                      case 21:
                        _context16.prev = 21;
                        _context16.t0 = _context16["catch"](5);
                        console.log("Location Update Error", _context16.t0);

                      case 24:
                        _context16.next = 36;
                        break;

                      case 26:
                        localStorage.setItem("latitude", position.coords.latitude.toString());
                        localStorage.setItem("longitude", position.coords.longitude.toString());
                        _heading = position.coords.heading ? position.coords.heading : 0;

                        if (localStorage.getItem("bearing")) {
                          _bearing3 = localStorage.getItem("bearing");
                          _bearing_used = _bearing3;
                        }

                        localStorage.setItem("bearing", _heading.toString());
                        _bearing2 = 0;

                        if (_bearing_used) {
                          _bearing2 = _bearing_used;
                        } else {
                          _bearing2 = 180;
                        }

                        _actual_angle = _heading - _bearing2;
                        this.realtime.getUserGeolocation().update({
                          key: this.auth.user.id,
                          user_id: this.auth.user.id,
                          latitude: position.coords.latitude.toString(),
                          longitude: position.coords.longitude.toString(),
                          city_id: this.auth.person.city_id,
                          state_id: Number(this.auth.person.state_id),
                          level_id: Number(this.auth.user.level_id),
                          // last_active: Date.now(),
                          available: this.auth.user.available,
                          driver_name: this.auth.user.name,
                          transport_type_id: this.auth.vehicles.transport_type_id
                        });

                        if (localStorage.getItem("current_order")) {
                          _order = JSON.parse(localStorage.getItem("current_order"));
                          console.log("Order Next 2");

                          if (_order) {
                            _path = 'order_gps/' + _order.id + '/' + this.auth.user.id;
                            this.db.object(_path).update({
                              order: _order.id,
                              key: this.auth.user.id,
                              vehicleId: this.auth.vehicles.id,
                              lat: position.coords.latitude,
                              lng: position.coords.longitude,
                              oldLat: position.coords.latitude,
                              oldLng: position.coords.longitude,
                              angle: _actual_angle,
                              // last_active: Date.now(),
                              code: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].VERSION_NAME
                            });
                            this.realtime.getFirebaseCollectionObject('order_history_reports/' + _order.id + '/' + this.auth.user.id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function (value) {
                              // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())
                              if (value === null) {
                                var locations = [{
                                  lat: position.coords.latitude,
                                  lng: position.coords.longitude,
                                  created_at: Date.now()
                                }]; // this.ui.showToast("Locations " + "Latitude " + lat + " Longitud " + lng + "Hora" + Date.now())

                                _this14.realtime.getFirebaseCollectionObject('order_history_reports/' + _order.id + '/' + _this14.auth.user.id).set({
                                  order: _order,
                                  key: _this14.auth.user.id,
                                  user_id: _this14.auth.user.id,
                                  locations: locations,
                                  code: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].VERSION_NAME
                                });
                              } else {
                                // update
                                var _locations2 = value.locations;

                                _locations2.push({
                                  lat: position.coords.latitude,
                                  lng: position.coords.longitude,
                                  created_at: Date.now()
                                });

                                _this14.realtime.getFirebaseCollectionObject('order_history_reports/' + _order.id + '/' + _this14.auth.user.id).update({
                                  order: _order,
                                  key: _this14.auth.user.id,
                                  locations: _locations2,
                                  code: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].VERSION_NAME
                                });
                              }
                            });
                          }
                        }

                      case 36:
                        _context16.next = 43;
                        break;

                      case 38:
                        _context16.next = 40;
                        return Geolocation.clearWatch({
                          id: this.watchPositionId
                        });

                      case 40:
                        this.startWatchingPosition();

                        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web') {// await this.backgroundGeolocation.removeAllListeners()
                        }

                        this.initializeBackgroundGeolocation();

                      case 43:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, this, [[5, 21]]);
              }));
            });
          } // setTimeout(async () => {
          //   await Geolocation.clearWatch({ id: this.watchPositionId });
          //   if (Capacitor.platform !== 'web') {
          //     // await this.backgroundGeolocation.removeAllListeners()
          //   }
          //   this.startWatchingPosition();
          //   this.initializeBackgroundGeolocation()
          // }, 240000)

        }
      }, {
        key: "initializeBackgroundGeolocation",
        value: function initializeBackgroundGeolocation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
            var _this15 = this;

            return _regeneratorRuntime().wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    if (this.auth.user.available != 0) {
                      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web') {
                        // 1.  Listen to events.
                        cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].onLocation(function (location) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
                            var heading, bearing_used, _bearing4, bearing, actual_angle, order, path;

                            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                              while (1) {
                                switch (_context17.prev = _context17.next) {
                                  case 0:
                                    console.log('[location] - ', location);
                                    _context17.prev = 1;
                                    localStorage.setItem("latitude", location.coords.latitude.toString());
                                    localStorage.setItem("longitude", location.coords.longitude.toString());
                                    heading = location.coords.heading ? location.coords.heading : 0;
                                    bearing_used = 0;

                                    if (localStorage.getItem("bearing")) {
                                      _bearing4 = localStorage.getItem("bearing");
                                      bearing_used = parseFloat(_bearing4);
                                    }

                                    localStorage.setItem("bearing", heading.toString());
                                    bearing = 0;

                                    if (bearing_used != 0) {
                                      // Angle used before
                                      bearing = bearing_used;
                                    } else {
                                      //Image original angle
                                      bearing = 180;
                                    }

                                    actual_angle = heading - bearing; //Notified modal to update the driver position

                                    this.latLng.next({
                                      lat: location.coords.latitude,
                                      lng: location.coords.longitude,
                                      bearing: actual_angle
                                    }); //Update firebase document driver_geolocation/${city}/${driver_id}

                                    _context17.next = 14;
                                    return this.realtime.getUserGeolocation().update({
                                      key: this.auth.user.id,
                                      user_id: this.auth.user.id,
                                      latitude: location.coords.latitude.toString(),
                                      longitude: location.coords.longitude.toString(),
                                      city_id: this.auth.person.city_id,
                                      state_id: Number(this.auth.person.state_id),
                                      level_id: Number(this.auth.user.level_id),
                                      // last_active: Date.now(),
                                      available: this.auth.user.available,
                                      driver_name: this.auth.user.name,
                                      transport_type_id: this.auth.vehicles.transport_type_id
                                    });

                                  case 14:
                                    console.log("Location Update User Location");

                                    if (!localStorage.getItem("current_order")) {
                                      _context17.next = 23;
                                      break;
                                    }

                                    order = JSON.parse(localStorage.getItem("current_order")); //Set firebase collection path for order gps order_gps/${order_id}/${user_id}

                                    path = 'order_gps/' + order.id + '/' + this.auth.user.id; //Update Driver posititon in the order

                                    _context17.next = 20;
                                    return this.db.object(path).update({
                                      order: order.id,
                                      key: this.auth.user.id,
                                      vehicleId: this.auth.vehicles.id,
                                      lat: location.coords.latitude,
                                      lng: location.coords.longitude,
                                      oldLat: location.coords.latitude,
                                      oldLng: location.coords.longitude,
                                      angle: actual_angle,
                                      code: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].VERSION_NAME
                                    });

                                  case 20:
                                    console.log("Location Update User Location in Order");
                                    _context17.next = 23;
                                    break;

                                  case 23:
                                    _context17.next = 28;
                                    break;

                                  case 25:
                                    _context17.prev = 25;
                                    _context17.t0 = _context17["catch"](1);
                                    console.log("Location Update Error", _context17.t0); // this.ui.showToast("Error" + JSON.stringify(e))

                                  case 28:
                                  case "end":
                                    return _context17.stop();
                                }
                              }
                            }, _callee17, this, [[1, 25]]);
                          }));
                        });
                        cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].onMotionChange(function (event) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
                            var location, heading, bearing_used, _bearing5, bearing, actual_angle, order, path;

                            return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                              while (1) {
                                switch (_context18.prev = _context18.next) {
                                  case 0:
                                    console.log('[motionchange] - ', event.isMoving, event.location);
                                    location = event.location;
                                    _context18.prev = 2;
                                    localStorage.setItem("latitude", event.location.coords.latitude.toString());
                                    localStorage.setItem("longitude", event.location.coords.longitude.toString());
                                    heading = event.location.coords.heading ? event.location.coords.heading : 0;
                                    bearing_used = 0;

                                    if (localStorage.getItem("bearing")) {
                                      _bearing5 = localStorage.getItem("bearing");
                                      bearing_used = parseFloat(_bearing5);
                                    }

                                    localStorage.setItem("bearing", heading.toString());
                                    bearing = 0;

                                    if (bearing != 0) {
                                      // Angle used before
                                      bearing = bearing_used;
                                    } else {
                                      //Image original angle
                                      bearing = 180;
                                    }

                                    actual_angle = heading - bearing; //Notified modal to update the driver position

                                    this.latLng.next({
                                      lat: event.location.coords.latitude,
                                      lng: event.location.coords.longitude,
                                      bearing: actual_angle
                                    }); //Update firebase document driver_geolocation/${city}/${driver_id}

                                    _context18.next = 15;
                                    return this.realtime.getUserGeolocation().update({
                                      key: this.auth.user.id,
                                      user_id: this.auth.user.id,
                                      latitude: event.location.coords.latitude.toString(),
                                      longitude: event.location.coords.longitude.toString(),
                                      city_id: this.auth.person.city_id,
                                      state_id: Number(this.auth.person.state_id),
                                      level_id: Number(this.auth.user.level_id),
                                      // last_active: Date.now(),
                                      available: this.auth.user.available,
                                      driver_name: this.auth.user.name,
                                      transport_type_id: this.auth.vehicles.transport_type_id
                                    });

                                  case 15:
                                    console.log("Location Update User Location");

                                    if (!localStorage.getItem("current_order")) {
                                      _context18.next = 25;
                                      break;
                                    }

                                    order = JSON.parse(localStorage.getItem("current_order"));

                                    if (!order) {
                                      _context18.next = 23;
                                      break;
                                    }

                                    path = 'order_gps/' + order.id + '/' + this.auth.user.id;
                                    _context18.next = 22;
                                    return this.db.object(path).update({
                                      order: order.id,
                                      key: this.auth.user.id,
                                      vehicleId: this.auth.vehicles.id,
                                      lat: event.location.coords.latitude,
                                      lng: event.location.coords.longitude,
                                      oldLat: event.location.coords.latitude,
                                      oldLng: event.location.coords.longitude,
                                      angle: actual_angle,
                                      // last_active: Date.now(),
                                      code: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].VERSION_NAME
                                    });

                                  case 22:
                                    console.log("Location Update User Location in Order");

                                  case 23:
                                    _context18.next = 25;
                                    break;

                                  case 25:
                                    _context18.next = 31;
                                    break;

                                  case 27:
                                    _context18.prev = 27;
                                    _context18.t0 = _context18["catch"](2);
                                    console.log("Location Update Error", _context18.t0);
                                    this.ui.showToast("Error" + JSON.stringify(_context18.t0));

                                  case 31:
                                  case "end":
                                    return _context18.stop();
                                }
                              }
                            }, _callee18, this, [[2, 27]]);
                          }));
                        });
                        cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].onHttp(function (response) {
                          console.log('[http] - ', response.success, response.status, response.responseText);
                        });
                        cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].onProviderChange(function (event) {
                          console.log('[providerchange] - ', event.enabled, event.status, event.gps);
                        }); // 2.  Configure the plugin with #ready

                        cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].ready({
                          stopTimeout: 1,
                          debug: !_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].production,
                          logLevel: cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].LOG_LEVEL_VERBOSE,
                          desiredAccuracy: cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].DESIRED_ACCURACY_HIGH,
                          distanceFilter: 10,
                          stopOnTerminate: false,
                          startOnBoot: true,
                          locationAuthorizationRequest: 'Always',
                          backgroundPermissionRationale: {
                            title: "Allow access to this device's location in the background?",
                            message: "In order to allow X, Y and Z in the background, please enable 'Allow all the time' permission",
                            positiveAction: "Change to Allow all the time",
                            negativeAction: "Cancel"
                          },
                          activityType: cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].ACTIVITY_TYPE_AUTOMOTIVE_NAVIGATION,
                          foregroundService: true,
                          triggerActivities: "on_foot, walking, running,in_vehicle,on_bicycle"
                        }, function (state) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
                            return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                              while (1) {
                                switch (_context19.prev = _context19.next) {
                                  case 0:
                                    console.log('[ready] BackgroundGeolocation is ready to use');

                                    if (state.enabled) {
                                      _context19.next = 6;
                                      break;
                                    }

                                    _context19.next = 4;
                                    return cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].start();

                                  case 4:
                                    cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].changePace(true); // 3.  Start tracking.

                                    if (!localStorage.getItem("background_location_accepted")) {
                                      // Is Android device ignoring battery optimizations?
                                      this.ui.presentModal(_forms_request_location_permission_request_location_permission_page__WEBPACK_IMPORTED_MODULE_19__["RequestLocationPermissionPage"]);
                                    }

                                  case 6:
                                  case "end":
                                    return _context19.stop();
                                }
                              }
                            }, _callee19, this);
                          }));
                        });
                      }
                    }

                  case 1:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "playAudio",
        value: function playAudio() {
          if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].PLAY_AUDIO_ON_REQUEST == true) {
            this.audio = new Audio(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].AUDIO_PATH);
            this.audio.play();
          }
        }
      }, {
        key: "stopAudio",
        value: function stopAudio() {
          this.audio.pause();
        }
      }, {
        key: "cancel",
        value: function cancel() {
          var _this16 = this;

          this.ui.presentAlert({
            mode: 'ios',
            header: "",
            message: "",
            buttons: [{
              text: 'Aceptar',
              cssClass: 'secondary',
              handler: function handler(res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
                  return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                    while (1) {
                      switch (_context21.prev = _context21.next) {
                        case 0:
                        case "end":
                          return _context21.stop();
                      }
                    }
                  }, _callee21);
                }));
              }
            }]
          });
        }
      }, {
        key: "verified",
        value: function verified() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
            var _this17 = this;

            var header, message, loader, latitude, longitude, position;
            return _regeneratorRuntime().wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    if (!(this.user.verified == 0)) {
                      _context25.next = 5;
                      break;
                    }

                    header = "¡Para ponerte disponible, primero debes ser verificado!";
                    this.ui.presentAlert({
                      mode: 'ios',
                      header: header,
                      message: message,
                      buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(res) {
                          console.log('cerrar');
                        }
                      }]
                    });
                    _context25.next = 39;
                    break;

                  case 5:
                    if (!this.network.getNetworkStatus().connected) {
                      _context25.next = 38;
                      break;
                    }

                    _context25.next = 8;
                    return this.loadingController.create({
                      message: "Por favor espere...",
                      mode: 'ios'
                    });

                  case 8:
                    loader = _context25.sent;
                    _context25.next = 11;
                    return loader.present();

                  case 11:
                    _context25.prev = 11;

                    if (!(localStorage.getItem("latitude") && localStorage.getItem("longitude"))) {
                      _context25.next = 17;
                      break;
                    }

                    latitude = localStorage.getItem("latitude");
                    longitude = localStorage.getItem("longitude");
                    _context25.next = 22;
                    break;

                  case 17:
                    _context25.next = 19;
                    return Geolocation.getCurrentPosition({// enableHighAccuracy: true
                    });

                  case 19:
                    position = _context25.sent;
                    latitude = position.coords.latitude;
                    longitude = position.coords.longitude;

                  case 22:
                    localStorage.setItem("latitude", latitude.toString());
                    localStorage.setItem("longitude", longitude.toString());
                    this.auth.user.available = this.auth.user.available == 1 ? 0 : 1;
                    this.user.available = this.auth.user.available;
                    this.request.post("driver/change_availability/".concat(this.auth.user.id), {
                      latitude: latitude,
                      longitude: longitude,
                      available: this.auth.user.available
                    }).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
                        var id;
                        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                          while (1) {
                            switch (_context22.prev = _context22.next) {
                              case 0:
                                _context22.next = 2;
                                return loader;

                              case 2:
                                _context22.sent.dismiss();

                                this.realtime.getUserGeolocation().update({
                                  key: this.auth.user.id,
                                  user_id: this.auth.user.id,
                                  latitude: latitude.toString(),
                                  longitude: longitude.toString(),
                                  city_id: this.auth.person.city_id,
                                  state_id: Number(this.auth.person.state_id),
                                  level_id: Number(this.auth.user.level_id),
                                  // last_active: Date.now(),
                                  available: this.auth.user.available,
                                  driver_name: this.auth.user.name,
                                  transport_type_id: this.auth.vehicles.transport_type_id
                                });

                                if (!(this.auth.user.available == 0)) {
                                  _context22.next = 11;
                                  break;
                                }

                                Geolocation.clearWatch({
                                  id: this.watchPositionId
                                });

                                if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform != 'web')) {
                                  _context22.next = 9;
                                  break;
                                }

                                _context22.next = 9;
                                return cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_18__["default"].stop();

                              case 9:
                                _context22.next = 12;
                                break;

                              case 11:
                                this.startPosition();

                              case 12:
                                this.auth.setUser(this.auth.user);

                                if (this.auth.user.available == 1) {
                                  this.ui.showToast("El usuario ahora está disponible");
                                  this.loadData();
                                } else {
                                  // this.geolocation.stopWatching();
                                  this.ui.showToast("El usuario ahora  no está disponible");
                                  id = localStorage.getItem("watchPositionId");

                                  if (id) {
                                    Geolocation.clearWatch({
                                      id: id
                                    });
                                  }
                                }

                              case 14:
                              case "end":
                                return _context22.stop();
                            }
                          }
                        }, _callee22, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
                        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                          while (1) {
                            switch (_context23.prev = _context23.next) {
                              case 0:
                                _context23.next = 2;
                                return loader;

                              case 2:
                                _context23.sent.dismiss();

                                this.ui.showToast("Hubo un error y  no se pudo poner disponible");
                                this.auth.user.available = this.auth.user.available == 1 ? 0 : 1;
                                this.user.available = this.auth.user.available;
                                console.log('error');

                              case 7:
                              case "end":
                                return _context23.stop();
                            }
                          }
                        }, _callee23, this);
                      }));
                    });
                    _context25.next = 36;
                    break;

                  case 29:
                    _context25.prev = 29;
                    _context25.t0 = _context25["catch"](11);
                    _context25.next = 33;
                    return loader;

                  case 33:
                    _context25.sent.dismiss();

                    this.ui.presentAlert({
                      mode: 'ios',
                      header: "Advertencia",
                      message: "Su ubicación no está disponible, por favor verificar el estado del GPS",
                      buttons: [{
                        text: 'Aceptar',
                        cssClass: 'secondary',
                        handler: function handler(res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
                            return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                              while (1) {
                                switch (_context24.prev = _context24.next) {
                                  case 0:
                                  case "end":
                                    return _context24.stop();
                                }
                              }
                            }, _callee24);
                          }));
                        }
                      }]
                    });
                    console.log("Error", _context25.t0);

                  case 36:
                    _context25.next = 39;
                    break;

                  case 38:
                    this.ui.showToast("Verifique su conexión");

                  case 39:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this, [[11, 29]]);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
            var _this18 = this;

            var loader;
            return _regeneratorRuntime().wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    if (!this.network.getNetworkStatus().connected) {
                      _context31.next = 10;
                      break;
                    }

                    this.spinner = true;

                    if (localStorage.getItem("current_order")) {
                      _context31.next = 6;
                      break;
                    }

                    _context31.next = 5;
                    return this.ui.loading("Por favor espere...");

                  case 5:
                    loader = _context31.sent;

                  case 6:
                    this.orders = [];
                    this.request.get("driver/list_current_orders/".concat(this.auth.user.id)).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
                        var _this19 = this;

                        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                          while (1) {
                            switch (_context28.prev = _context28.next) {
                              case 0:
                                this.refresher.complete();
                                this.spinner = false;
                                this.orders = res.data.data;
                                console.log("Orders", this.orders);
                                this.orders.forEach(function (order) {
                                  _this19.setOrderReminder(order);
                                });

                                if (loader) {
                                  this.request.get("driver/documents/".concat(this.auth.user.id)).subscribe(function (res) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
                                      var documents, photo;
                                      return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                                        while (1) {
                                          switch (_context26.prev = _context26.next) {
                                            case 0:
                                              if (localStorage.getItem("current_order")) {
                                                _context26.next = 4;
                                                break;
                                              }

                                              _context26.next = 3;
                                              return loader;

                                            case 3:
                                              _context26.sent.dismiss();

                                            case 4:
                                              documents = res.data.documents;
                                              photo = documents.filter(function (d) {
                                                return d["document_type "] == "Foto del conductor";
                                              });

                                              if (photo.length > 0) {
                                                this.image = photo[photo.length - 1].url;
                                              }

                                            case 7:
                                            case "end":
                                              return _context26.stop();
                                          }
                                        }
                                      }, _callee26, this);
                                    }));
                                  }, function (err) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
                                      return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                                        while (1) {
                                          switch (_context27.prev = _context27.next) {
                                            case 0:
                                              if (localStorage.getItem("current_order")) {
                                                _context27.next = 4;
                                                break;
                                              }

                                              _context27.next = 3;
                                              return loader;

                                            case 3:
                                              _context27.sent.dismiss();

                                            case 4:
                                            case "end":
                                              return _context27.stop();
                                          }
                                        }
                                      }, _callee27);
                                    }));
                                  });
                                }

                              case 6:
                              case "end":
                                return _context28.stop();
                            }
                          }
                        }, _callee28, this);
                      }));
                    }, function (err) {
                      _this18.refresher.complete();

                      if (loader) {
                        _this18.request.get("driver/documents/".concat(_this18.auth.user.id)).subscribe(function (res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
                            var documents, photo;
                            return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                              while (1) {
                                switch (_context29.prev = _context29.next) {
                                  case 0:
                                    if (localStorage.getItem("current_order")) {
                                      _context29.next = 4;
                                      break;
                                    }

                                    _context29.next = 3;
                                    return loader;

                                  case 3:
                                    _context29.sent.dismiss();

                                  case 4:
                                    documents = res.data.documents;
                                    photo = documents.filter(function (d) {
                                      return d["document_type "] == "Foto del conductor";
                                    });

                                    if (photo.length > 0) {
                                      this.image = photo[photo.length - 1].url;
                                    }

                                  case 7:
                                  case "end":
                                    return _context29.stop();
                                }
                              }
                            }, _callee29, this);
                          }));
                        }, function (err) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
                            return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                              while (1) {
                                switch (_context30.prev = _context30.next) {
                                  case 0:
                                    if (localStorage.getItem("current_order")) {
                                      _context30.next = 4;
                                      break;
                                    }

                                    _context30.next = 3;
                                    return loader;

                                  case 3:
                                    _context30.sent.dismiss();

                                  case 4:
                                  case "end":
                                    return _context30.stop();
                                }
                              }
                            }, _callee30);
                          }));
                        });
                      }

                      _this18.spinner = false;
                    });
                    _context31.next = 11;
                    break;

                  case 10:
                    this.ui.showToast("Verifique su conexión");

                  case 11:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "filter",
        value: function filter() {
          return this.orders.filter(function (a) {
            return a.status_order != 25;
          });
        }
      }, {
        key: "filterOrderNear",
        value: function filterOrderNear() {
          var _this20 = this;

          if (this.auth.person.ordersNearYou) {
            return this.auth.person.ordersNearYou.filter(function (o) {
              return !_this20.orders.find(function (or) {
                return o.id == or.id;
              });
            }).sort(function (a, b) {
              return new Date(a.creation_date).getTime() - new Date(b.creation_date).getTime();
            });
          }

          return [];
        }
      }, {
        key: "viewDetail",
        value: function viewDetail(order) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
            var _this21 = this;

            var _yield$this$isOrderAc2, message, active, current_latitude, current_longitude, latitude, longitude, distance, modal, _modal;

            return _regeneratorRuntime().wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    console.log("Order", order);

                    if (!this.network.getNetworkStatus().connected) {
                      _context33.next = 57;
                      break;
                    }

                    if (!(this.user.available != 0)) {
                      _context33.next = 54;
                      break;
                    }

                    if (this.isAboutToEnd(order)) {
                      _context33.next = 52;
                      break;
                    }

                    if (!(order.status_order == 22 || order.status_order == 23)) {
                      _context33.next = 45;
                      break;
                    }

                    if (!(order.service_type_id == 3)) {
                      _context33.next = 38;
                      break;
                    }

                    _context33.next = 8;
                    return this.isOrderActive(order, true);

                  case 8:
                    _yield$this$isOrderAc2 = _context33.sent;
                    message = _yield$this$isOrderAc2.message;
                    active = _yield$this$isOrderAc2.active;

                    if (!active) {
                      _context33.next = 34;
                      break;
                    }

                    _context33.prev = 12;
                    //Validate if te user is near to the address
                    current_latitude = parseFloat(localStorage.getItem("latitude"));
                    current_longitude = parseFloat(localStorage.getItem("longitude"));
                    latitude = order.details[0].latitude;
                    longitude = order.details[0].longitude;
                    distance = this.place.calcCrow(latitude, longitude, current_latitude, current_longitude);
                    console.log("Distance", distance);

                    if (!(distance <= 1)) {
                      _context33.next = 25;
                      break;
                    }

                    console.log("Está ahí");
                    _context33.next = 23;
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
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this21, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
                            var _this22 = this;

                            var modal;
                            return _regeneratorRuntime().wrap(function _callee32$(_context32) {
                              while (1) {
                                switch (_context32.prev = _context32.next) {
                                  case 0:
                                    localStorage.setItem("current_order", JSON.stringify(order));
                                    _context32.next = 3;
                                    return this.ui.presentModal(src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_8__["ViewDetailPage"], {
                                      order: order
                                    }, 'custom-modal');

                                  case 3:
                                    modal = _context32.sent;
                                    modal.onDidDismiss().then(function (data) {
                                      _this22.loadData();
                                    });

                                  case 5:
                                  case "end":
                                    return _context32.stop();
                                }
                              }
                            }, _callee32, this);
                          }));
                        }
                      }]
                    });

                  case 23:
                    _context33.next = 27;
                    break;

                  case 25:
                    _context33.next = 27;
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

                  case 27:
                    _context33.next = 32;
                    break;

                  case 29:
                    _context33.prev = 29;
                    _context33.t0 = _context33["catch"](12);
                    console.log("Error", _context33.t0);

                  case 32:
                    _context33.next = 36;
                    break;

                  case 34:
                    _context33.next = 36;
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

                  case 36:
                    _context33.next = 43;
                    break;

                  case 38:
                    localStorage.setItem("current_order", JSON.stringify(order));
                    _context33.next = 41;
                    return this.ui.presentModal(src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_8__["ViewDetailPage"], {
                      order: order,
                      latLng: this.latLng
                    }, 'custom-modal');

                  case 41:
                    modal = _context33.sent;
                    modal.onDidDismiss().then(function (data) {
                      _this21.loadData();
                    });

                  case 43:
                    _context33.next = 52;
                    break;

                  case 45:
                    if (!(order.status_order != 25 && order.status_order != 48 && order.status_order != 31 && order.status_order != 36 && !this.isAboutToEnd(order))) {
                      _context33.next = 52;
                      break;
                    }

                    //When I'll load the order, I  could update the proximity with it current value on the SQL database
                    this.realtime.getNewOrder().update({
                      proximity: order.proximity
                    });
                    localStorage.setItem("current_order", JSON.stringify(order));
                    _context33.next = 50;
                    return this.ui.presentModal(src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_8__["ViewDetailPage"], {
                      order: order,
                      latLng: this.latLng
                    }, 'custom-modal');

                  case 50:
                    _modal = _context33.sent;

                    _modal.onDidDismiss().then(function (r) {
                      localStorage.removeItem("current_order");

                      _this21.loadData();
                    });

                  case 52:
                    _context33.next = 55;
                    break;

                  case 54:
                    this.ui.showToast("Debe estar disponible");

                  case 55:
                    _context33.next = 58;
                    break;

                  case 57:
                    this.ui.showToast("Por favor, verifique su conexión");

                  case 58:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this, [[12, 29]]);
          }));
        }
        /**
         * This function is only for time service
         * It build two notification
         * The first one, it show inmediately and the other
         * is scheduled 5 minutes before the start hour that the client put
         * on the order
         * the client
         * @param order
         */

      }, {
        key: "setOrderReminder",
        value: function setOrderReminder(order) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
            var _yield$this$isOrderAc3, message, active, details, start_time, now, now_hour, differenceInHours, id, startDate, startTimeDate, oneHourBeforeDate, fiveMinutesBeforeDate, notificationsToSend, oneHourBeforeObject, fiveMinutesBeforeObject, startTimeObject;

            return _regeneratorRuntime().wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    _context34.prev = 0;

                    if (!order) {
                      _context34.next = 37;
                      break;
                    }

                    if (!(order.service_type_id == 3)) {
                      _context34.next = 35;
                      break;
                    }

                    _context34.next = 5;
                    return this.isOrderActive(order);

                  case 5:
                    _yield$this$isOrderAc3 = _context34.sent;
                    message = _yield$this$isOrderAc3.message;
                    active = _yield$this$isOrderAc3.active;

                    if (!active) {
                      _context34.next = 35;
                      break;
                    }

                    details = order.detail ? order.detail : order.details;
                    start_time = order.detail ? order.detail[0].start_time_military_format : order.details[0].start_time_military_format;
                    now = new Date();
                    now_hour = now.getHours() + ":" + now.getMinutes();
                    differenceInHours = this.days.getHourDiff(start_time, now_hour);
                    id = Math.round(Math.random() * 100); //Validate if the ordeer reminder doesn´t exists

                    if (localStorage.getItem("order_reminder" + order.id)) {
                      _context34.next = 35;
                      break;
                    }

                    startDate = order.date + " " + start_time;
                    console.log("Start Date Service", startDate);
                    startTimeDate = new Date(startDate);
                    console.log("Start Date Service new Date", new Date(startDate));
                    oneHourBeforeDate = this.days.substractHours(new Date(startDate), 1);
                    fiveMinutesBeforeDate = this.days.substractMinutes(new Date(startDate), 5);
                    console.log("Start Date Service One hour before ", oneHourBeforeDate);
                    console.log("Start Date Service Five minutes ", fiveMinutesBeforeDate);
                    notificationsToSend = [];
                    oneHourBeforeObject = {
                      hour: oneHourBeforeDate.getHours(),
                      minute: oneHourBeforeDate.getMinutes()
                    };
                    fiveMinutesBeforeObject = {
                      hour: fiveMinutesBeforeDate.getHours(),
                      minute: fiveMinutesBeforeDate.getMinutes()
                    };
                    startTimeObject = {
                      hour: startTimeDate.getHours(),
                      minute: startTimeDate.getMinutes()
                    };
                    /**
                    * This validation calculate the difference and its
                    * true when current time is between one hour before and 10(ten) minutes
                    * after the start_time
                    */

                    if (differenceInHours > -1 && differenceInHours <= 0.1) {
                      notificationsToSend.push(
                      /**
                      * Inmediately notification to
                      * alert the user
                      */
                      {
                        title: "Orden " + order.id,
                        body: "Recuerda que debes estar a las " + details[0].start_time + " en el lugar",
                        id: Math.round(Math.random() * 100),
                        autoCancel: true,
                        channelId: 'pop-notifications'
                      });
                    }

                    notificationsToSend.push(
                    /**
                    * This notification is scheduled to show one hour before
                    * the start_time
                    */
                    {
                      title: "Orden " + order.id,
                      body: "Recuerda que debes estar a las " + details[0].start_time + " en el lugar",
                      schedule: {
                        on: oneHourBeforeObject
                      },
                      id: Math.round(Math.random() * 100),
                      autoCancel: true,
                      channelId: 'pop-notifications'
                    });
                    notificationsToSend.push(
                    /**
                     * This notification is scheduled to show five minutes before
                     * the start_time
                     */
                    {
                      title: "Orden " + order.id,
                      body: "Recuerda que debes estar a las " + details[0].start_time + " en el lugar faltan cinco minutos",
                      schedule: {
                        on: fiveMinutesBeforeObject
                      },
                      id: Math.round(Math.random() * 100),
                      autoCancel: true,
                      channelId: 'pop-notifications'
                    });
                    notificationsToSend.push(
                    /**
                     * This notification is scheduled to show at the hour
                     * the start_time
                     */
                    {
                      title: "Orden " + order.id,
                      body: "¡Ya es hora! " + " Ve a la dirección " + details[0].address,
                      schedule: {
                        on: startTimeObject
                      },
                      id: Math.round(Math.random() * 100),
                      autoCancel: true,
                      channelId: 'pop-notifications'
                    });
                    /**
                     * This is the first notification shown
                     */
                    //Show the local notificattions

                    _context34.next = 34;
                    return LocalNotifications.schedule({
                      notifications: notificationsToSend
                    });

                  case 34:
                    localStorage.setItem("order_reminder" + order.id, "notified");

                  case 35:
                    _context34.next = 38;
                    break;

                  case 37:
                    this.ui.showToast("No hay orden");

                  case 38:
                    _context34.next = 44;
                    break;

                  case 40:
                    _context34.prev = 40;
                    _context34.t0 = _context34["catch"](0);
                    console.log("Error Notification", _context34.t0);
                    this.ui.showToast("Error" + JSON.stringify(_context34.t0));

                  case 44:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34, this, [[0, 40]]);
          }));
        }
      }, {
        key: "getIsOrderActive",
        value: function getIsOrderActive(order) {
          var _this$isOrderActive = this.isOrderActive(order),
              active = _this$isOrderActive.active,
              message = _this$isOrderActive.message;

          return {
            active: active,
            message: message
          };
        }
      }, {
        key: "isOrderActive",
        value: function isOrderActive(order) {
          var validateHourDifference = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
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
              var now = new Date();
              var now_hour = now.getHours() + ":" + now.getMinutes();
              var differenceInHours = this.days.getHourDiff(start_time, now_hour);
              var id = Math.round(Math.random() * 100);
              /**
               * This validation calculate the difference and its
               * true when current time is between one hour before and 10(ten) minutes
               * after the start_time
               */

              if (validateHourDifference) {
                if (differenceInHours > -1 && differenceInHours <= 0.1) {
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
                if (differenceInHours == 0) {
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
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
      }, {
        type: _services_realtime_service__WEBPACK_IMPORTED_MODULE_9__["RealtimeService"]
      }, {
        type: _services_network_status_service__WEBPACK_IMPORTED_MODULE_12__["NetworkStatusService"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabase"]
      }, {
        type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_15__["PlaceService"]
      }, {
        type: src_app_services_days_service__WEBPACK_IMPORTED_MODULE_16__["DaysService"]
      }, {
        type: src_app_services_background_service__WEBPACK_IMPORTED_MODULE_17__["BackgroundService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRefresher"], {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRefresher"],
      "static": false
    })], HomePage.prototype, "refresher", void 0);
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/screens/screens-tabs/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=screens-screens-tabs-home-home-module-es5.js.map