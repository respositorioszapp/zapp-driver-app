function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/profile/profile.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/profile/profile.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensScreensTabsProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>home</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n<ion-content color=\"warning\">\n  <div class=\"ion-padding ion-text-center\">\n    <img src=\"assets/imgs/logo-morado.png\" width=\"100\">\n  </div>\n  <div class=\"ion-text-center\" style=\"position: relative;\">\n    <div style=\"position: relative;display: inline;\">\n\n      <img [src]=\"image\" width=\"70\" (click)=\"takePhoto()\" style=\"border-radius: 50%;\n      width: 100px;\n      height: 100px;\">\n      <ion-icon name=\"camera\" style=\"font-size: 1.8em;\n      margin-left: -26px;\n      color: #49158c;\"></ion-icon>\n    </div>\n\n  </div>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle class=\"ion-text-center\">\n        <div style=\"display: inline;\">\n          <span class=\"black-color-text\">{{auth.user.name}}</span>\n          \n          <span class=\"grey-color-text\" style=\"display: block;\">{{auth.user.email}}</span>\n        </div>\n        <div style=\"    position: relative;\n            width: 50%;\n        margin: auto;\n        border-radius: 20px;\" [ngClass]=\"{'bg-oro': level.level_id == 3, 'bg-silver': level.level_id == 2, 'bg-bronce': level.level_id == 1, 'bg-no-level': level.level_id == 0, 'bg-elite': level.level_id == 4}\">\n          <h4 style=\"    margin-top: 10px;\n          margin-bottom: 2px;\">{{level.level_name}}\n          <ion-icon name=\"ribbon-outline\" style=\"font-size: 1em;\n          \"></ion-icon>\n          </h4>\n        </div>\n        \n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <h4 class=\"ion-text-center\">Antiguedad</h4>\n      <h2 class=\"ion-text-center\" style=\"font-size: 1.5em;\n      font-weight: bold;\">{{antiquity}}</h2>\n      <ion-grid class=\"ion-text-center\">\n        <ion-row>\n\n          <ion-col>\n            <span style=\"display: block;\">Calificación</span>\n          </ion-col>\n          <ion-col>\n            <span style=\"display: block;\">Viajes realizados</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" size=\"small\" style=\"font-size: 1.5em;\">\n              {{score}} <ion-icon name=\"star\" class=\"text-yellow\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" size=\"small\" style=\"font-size: 1.5em;\">\n              {{travels}} <ion-icon name=\"airplane\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- <div class=\"ion-text-center\" style=\"display: flex;width: 80%;margin: auto;\">\n        \n        \n      </div> -->\n\n      <ion-list>\n        <ion-item expand=\"block\" lines=\"none\" routerLink=\"/tabs/personal-information\">\n          <ion-label>Datos Personales</ion-label>\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\" color=\"primary\"></ion-icon>\n        </ion-item>\n\n        <ion-item lines=\"none\" routerLink=\"/tabs/vehicle-information\">\n          <ion-label>Datos del vehículo</ion-label>\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\" color=\"primary\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" routerLink=\"/tabs/documents\">\n          <ion-label>Documentos</ion-label>\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\" color=\"primary\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" routerLink=\"/tabs/change-passwsord\">\n          <ion-label>Cambiar contraseña</ion-label>\n          <ion-icon slot=\"end\" name=\"reload-outline\" color=\"primary\"></ion-icon>\n\n        </ion-item>\n        <ion-item lines=\"none\" routerLink=\"/tabs/liquidation\">\n          <ion-label>Liquidación</ion-label>\n          <ion-icon slot=\"end\" name=\"reload-outline\" color=\"primary\"></ion-icon>\n\n        </ion-item>\n        <!-- <ion-item  lines=\"none\" (click)=\"goToPolicies()\">\n          <ion-label>Términos y condiciones</ion-label>\n          <ion-icon name=\"receipt-outline\" slot=\"end\" color=\"primary\"></ion-icon>\n        </ion-item> -->\n        <ion-item lines=\"none\" routerLink=\"/tabs/about\">\n          <ion-label>Acerca de la aplicación</ion-label>\n          <ion-icon name=\"alert-circle-outline\" color=\"primary\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" (click)=\"logOut()\">\n          <ion-label>Cerrar Sesión</ion-label>\n          <ion-icon slot=\"end\" name=\"log-out-outline\" color=\"primary\"></ion-icon>\n\n        </ion-item>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/profile/profile-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/profile/profile-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppScreensScreensTabsProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/screens/screens-tabs/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = /*#__PURE__*/_createClass(function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    });

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/profile/profile.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/screens/screens-tabs/profile/profile.module.ts ***!
    \****************************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppScreensScreensTabsProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/screens/screens-tabs/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/screens/screens-tabs/profile/profile.page.ts");

    var ProfilePageModule = /*#__PURE__*/_createClass(function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    });

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]],
      providers: []
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/profile/profile.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/screens/screens-tabs/profile/profile.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensScreensTabsProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-yellow {\n  color: #F6D000;\n}\n\n.text-black {\n  color: black;\n}\n\n.text-bronce {\n  color: #895024;\n}\n\n.text-silver {\n  color: #BABABA;\n}\n\n.text-elite {\n  color: #0381F2;\n}\n\n.bg-no-level {\n  background-color: black;\n  color: white;\n}\n\n.bg-bronce {\n  background-color: #895024;\n  color: white;\n}\n\n.bg-silver {\n  background-color: #BABABA;\n  color: white;\n}\n\n.bg-oro {\n  background-color: #F6D000;\n  color: white;\n}\n\n.bg-elite {\n  background-color: #0381F2;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9zY3JlZW5zLXRhYnMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9zY3JlZW5zLXRhYnMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL3NjcmVlbnMtdGFicy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQteWVsbG93e1xuICAgIGNvbG9yOiAjRjZEMDAwO1xufVxuXG4udGV4dC1ibGFja3tcbiAgICBjb2xvcjogYmxhY2sgO1xufVxuXG4udGV4dC1icm9uY2V7XG4gICAgY29sb3I6ICAjODk1MDI0IDtcbn1cblxuLnRleHQtc2lsdmVye1xuICAgIGNvbG9yOiAgI0JBQkFCQSA7XG59XG5cbi50ZXh0LWVsaXRle1xuICAgIGNvbG9yOiAjMDM4MUYyO1xufVxuXG4uYmctbm8tbGV2ZWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmctYnJvbmNle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OTUwMjQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmctc2lsdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQUJBQkE7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5iZy1vcm97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RDAwMDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuLmJnLWVsaXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzgxRjI7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiLnRleHQteWVsbG93IHtcbiAgY29sb3I6ICNGNkQwMDA7XG59XG5cbi50ZXh0LWJsYWNrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGV4dC1icm9uY2Uge1xuICBjb2xvcjogIzg5NTAyNDtcbn1cblxuLnRleHQtc2lsdmVyIHtcbiAgY29sb3I6ICNCQUJBQkE7XG59XG5cbi50ZXh0LWVsaXRlIHtcbiAgY29sb3I6ICMwMzgxRjI7XG59XG5cbi5iZy1uby1sZXZlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZy1icm9uY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk1MDI0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZy1zaWx2ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkFCQUJBO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZy1vcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZEMDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZy1lbGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzgxRjI7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/profile/profile.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/screens/screens-tabs/profile/profile.page.ts ***!
    \**************************************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppScreensScreensTabsProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/realtime.service */
    "./src/app/services/realtime.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/network-status.service */
    "./src/app/services/network-status.service.ts");
    /* harmony import */


    var src_app_services_days_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/days.service */
    "./src/app/services/days.service.ts");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(auth, ui, request, photo, realtime, router, network, days) {
        _classCallCheck(this, ProfilePage);

        this.auth = auth;
        this.ui = ui;
        this.request = request;
        this.photo = photo;
        this.realtime = realtime;
        this.router = router;
        this.network = network;
        this.days = days;
        this.image = "assets/imgs/avatar.svg";
        this.score = 0;
        this.travels = 0;
        this.antiquity = "0 días";
        this.level = {
          level_id: 1,
          level_name: "BRONCE"
        };
      }

      _createClass(ProfilePage, [{
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
                    this.image = "assets/imgs/avatar.svg";

                    if (localStorage.getItem("currentDocuments")) {
                      this.currentDOcuments = JSON.parse(localStorage.getItem("currentDocuments"));
                    }

                    if (!this.network.getNetworkStatus().connected) {
                      _context3.next = 10;
                      break;
                    }

                    _context3.next = 5;
                    return this.ui.loading("Por favor espere...");

                  case 5:
                    loader = _context3.sent;
                    this.request.get("driver/documents/".concat(this.auth.user.id)).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        var documents, photo, obj;
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                documents = res.data.documents;
                                photo = documents.filter(function (d) {
                                  return d["document_type_id "] == 21;
                                });

                                if (photo.length > 0) {
                                  this.image = photo[photo.length - 1].url;
                                  this.document_id = photo[photo.length - 1].document_id;
                                  obj = {
                                    id: photo[photo.length - 1].id,
                                    document_id: photo[photo.length - 1].document_id,
                                    "document_type ": photo[photo.length - 1]["document_type "],
                                    "document_type_id ": photo[photo.length - 1]["document_type_id "],
                                    url: this.image
                                  };

                                  if (!this.currentDOcuments) {
                                    this.currentDOcuments = [];
                                  }

                                  if (!this.currentDOcuments.find(function (d) {
                                    return d.id == obj.id;
                                  })) {
                                    this.currentDOcuments.push(obj);
                                  } // if (localStorage.getItem("currentDocuments")) {
                                  //   if (!this.currentDOcuments.find(d => d.id == obj.id)) {
                                  //     this.currentDOcuments.push(obj);
                                  //   }
                                  // }

                                }

                                _context.next = 5;
                                return loader;

                              case 5:
                                _context.sent.dismiss();

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
                                console.log("Error", err);
                                _context2.next = 3;
                                return loader;

                              case 3:
                                _context2.sent.dismiss();

                              case 4:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));
                    });
                    this.request.get("driver/show_driver/".concat(this.auth.user.id)).subscribe(function (res) {
                      console.log("Data", res.data);
                      _this.score = res.data.score;
                      _this.travels = res.data.total_services;
                      _this.level = {
                        level_id: res.data.level_id,
                        level_name: res.data.level_id == 0 ? "SIN NIVEL" : res.data.level_name
                      };
                      _this.auth.user.level_id = _this.level.level_id;

                      _this.auth.setUser(_this.auth.user);

                      _this.antiquity = _this.days.formatDays(res.data.seniority_of_delivery);
                      console.log("Antiguedad", _this.antiquity);
                      console.log("Antiguedad fecha", _this.days.formatDaysWithDate(res.data.first_order_date));
                    });
                    _context3.next = 11;
                    break;

                  case 10:
                    this.ui.showToast("Verifique su conexión");

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: '¿Está seguro de cerrar la sesión?',
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
                          _this2.auth.logOut();
                        }
                      }]
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "goToPolicies",
        value: function goToPolicies() {
          this.router.navigateByUrl("https://zapplogistica.com/politicas/"); // location.href = "https://zapplogistica.com/politicas/"
        }
      }, {
        key: "takePhoto",
        value: function takePhoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var _this3 = this;

            var image;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;

                    if (!this.network.getNetworkStatus().connected) {
                      _context8.next = 10;
                      break;
                    }

                    _context8.next = 4;
                    return this.photo.selectImageSource();

                  case 4:
                    _context8.next = 6;
                    return _context8.sent;

                  case 6:
                    image = _context8.sent;
                    this.photo.imageSubject.subscribe(function (image) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                        var _this4 = this;

                        var current_photo, current_photo_url, url, dat, name_file1, blob_image, image_to_upload, data, loader;
                        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                if (!(Object.keys(image).length > 0)) {
                                  _context7.next = 15;
                                  break;
                                }

                                current_photo = this.image == "assets/imgs/avatar.svg";
                                current_photo_url = this.image;
                                this.image = image.dataUrl;
                                url = !current_photo ? "driver/update_documents/".concat(this.document_id) : "driver/documents/".concat(this.auth.user.id, "/21");
                                dat = new Date().getTime();
                                name_file1 = "".concat(dat, "_").concat(this.auth.user.id, ".").concat(image.format);
                                blob_image = this.photo.dataUrlToBlob(image.dataUrl);
                                image_to_upload = this.photo.getFileImage(image.dataUrl, name_file1, image.format);
                                data = new FormData();
                                data.append('photo', blob_image);
                                _context7.next = 13;
                                return this.ui.loading("Por favor espere...");

                              case 13:
                                loader = _context7.sent;
                                this.request.post(url, data).subscribe(function (res) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                                    var _this5 = this;

                                    var obj, v, current_length, index, _res, length, min_length;

                                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                                      while (1) {
                                        switch (_context5.prev = _context5.next) {
                                          case 0:
                                            _context5.next = 2;
                                            return loader;

                                          case 2:
                                            _context5.sent.dismiss();

                                            this.auth.person.photo = res.data.url;
                                            this.auth.setPerson(this.auth.person);
                                            obj = {
                                              "document_type ": "Foto del conductor",
                                              "document_type_id ": 21,
                                              url: this.image
                                            };
                                            v = this.currentDOcuments.find(function (d) {
                                              return d["document_type_id "] == 21;
                                            });
                                            current_length = this.currentDOcuments.length;

                                            if (!v) {
                                              this.currentDOcuments.push(obj);
                                            } else {
                                              index = this.currentDOcuments.findIndex(function (d) {
                                                return d == v;
                                              });

                                              if (index != -1) {
                                                this.currentDOcuments[index].url = this.image;
                                              }
                                            }

                                            if (!(this.auth.user.verified == 0)) {
                                              _context5.next = 26;
                                              break;
                                            }

                                            _res = Math.abs(Number(this.auth.vehicles.year) - new Date().getFullYear());

                                            if (!localStorage.getItem("currentDocuments")) {
                                              _context5.next = 26;
                                              break;
                                            }

                                            length = _res <= 2 ? 10 : 9;
                                            min_length = _res <= 2 ? 11 : 10;
                                            console.log("Length", this.currentDOcuments.length);

                                            if (!(this.currentDOcuments.length >= length)) {
                                              _context5.next = 24;
                                              break;
                                            }

                                            if (!(current_length < min_length)) {
                                              _context5.next = 22;
                                              break;
                                            }

                                            this.realtime.getStatus().update({
                                              verified: this.auth.user.verified,
                                              documents: 1
                                            });
                                            _context5.next = 20;
                                            return this.ui.presentAlert({
                                              mode: 'ios',
                                              header: '¡Ha completado su registro!',
                                              buttons: [{
                                                text: 'Aceptar',
                                                handler: function handler() {
                                                  _this5.router.navigate(['tabs/home']);
                                                }
                                              }]
                                            });

                                          case 20:
                                            _context5.next = 22;
                                            break;

                                          case 22:
                                            _context5.next = 26;
                                            break;

                                          case 24:
                                            _context5.next = 26;
                                            return this.ui.presentAlert({
                                              mode: 'ios',
                                              header: 'Por favor complete sus documentos',
                                              buttons: [{
                                                text: 'Aceptar',
                                                handler: function handler() {
                                                  _this5.router.navigate(['tabs/documents']);
                                                }
                                              }]
                                            });

                                          case 26:
                                            console.log("Este es el res", res);

                                          case 27:
                                          case "end":
                                            return _context5.stop();
                                        }
                                      }
                                    }, _callee5, this);
                                  }));
                                }, function (err) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                                    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                                      while (1) {
                                        switch (_context6.prev = _context6.next) {
                                          case 0:
                                            _context6.next = 2;
                                            return loader;

                                          case 2:
                                            _context6.sent.dismiss();

                                            this.image = current_photo_url;
                                            this.ui.showToast("No se pudo subir la imagen");
                                            console.log("Error", err);

                                          case 6:
                                          case "end":
                                            return _context6.stop();
                                        }
                                      }
                                    }, _callee6, this);
                                  }));
                                });

                              case 15:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    });
                    _context8.next = 11;
                    break;

                  case 10:
                    this.ui.showToast("Verifique su conexión");

                  case 11:
                    _context8.next = 16;
                    break;

                  case 13:
                    _context8.prev = 13;
                    _context8.t0 = _context8["catch"](0);
                    console.log("Error", _context8.t0);

                  case 16:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[0, 13]]);
          }));
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"]
      }, {
        type: src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_6__["RealtimeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_8__["NetworkStatusService"]
      }, {
        type: src_app_services_days_service__WEBPACK_IMPORTED_MODULE_9__["DaysService"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/screens/screens-tabs/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=screens-screens-tabs-profile-profile-module-es5.js.map