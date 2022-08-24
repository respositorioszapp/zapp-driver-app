function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-tab2-signup-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup-tab2/signup-tab2.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup-tab2/signup-tab2.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensAuthSignupTab2SignupTab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4 style=\"text-align: center;\">Registro vehículo</h4>\n<form [formGroup]=\"vehicle_information\" (submit)=\"save()\" novalidate>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-select placeholder=\"Tipo de vehículo\" formControlName=\"vehicle_type\" style=\"display: contents;\" required [selectedText]=\"transpot_type.name\">\n      <ion-select-option *ngFor=\"let item of transport_types\" [value]=\"item.id\">{{item.name }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\"\n    *ngIf=\"controls.vehicle_type.dirty && controls.vehicle_type.touched && controls.vehicle_type.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.vehicle_type.errors.required\">El tipo de vehículo es requerida</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Placa\" formControlName=\"plate\" required ></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.plate.dirty && controls.plate.touched && controls.plate.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.plate.errors.required\">La placa es requerido</ion-label>\n    <ion-label *ngIf=\"controls.plate.errors.minlength || controls.plate.errors.maxlength\">La placa debe contener 6\n      caracteres</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Marca\" formControlName=\"brand\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.brand.dirty && controls.brand.touched && controls.brand.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.brand.errors.required\">La marca es requerido</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Modelo\" formControlName=\"model\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.model.dirty && controls.model.touched && controls.model.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.model.errors.required\">El modelo es requerido</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-select placeholder=\"Año\" formControlName=\"year\" style=\"display: contents;\">\n      <ion-select-option *ngFor=\"let item of common.years\" [value]=\"item\">{{item }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.year.dirty && controls.year.touched && controls.year.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.year.errors.required\">El año es requerida</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-select placeholder=\"Color\" formControlName=\"color\" style=\"display: contents;\" required>\n      <ion-select-option *ngFor=\"let item of common.colors\" [value]=\"item\">{{item }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.color.dirty && controls.color.touched && controls.color.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.color.errors.required\">El color es requerida</ion-label>\n  </ion-item>\n  <a href=\"https://zapplogistica.com/politicas/\" class=\"ion-margin-top ion-text-center\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"font-size: 1.2em;display:block;color: #1c024b;\" color=\"primary\">Ver términos y condiciones</a>\n  <ion-item lines=\"none\">\n    \n    <ion-label class=\"ion-text-justify\">Aceptar los términos y condiciones</ion-label>\n    <ion-checkbox slot=\"start\" formControlName=\"terms\" style=\" margin-right: 10px;\" ></ion-checkbox>\n  </ion-item>\n  \n  <!-- -->\n  <ion-button type=\"submit\" expand=\"block\" mode=\"ios\" color=\"primary\" >\n    ENVIAR\n  </ion-button>\n</form>";
    /***/
  },

  /***/
  "./src/app/screens/auth/signup-tab2/signup-tab2-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/screens/auth/signup-tab2/signup-tab2-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: SignupTab2PageRoutingModule */

  /***/
  function srcAppScreensAuthSignupTab2SignupTab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupTab2PageRoutingModule", function () {
      return SignupTab2PageRoutingModule;
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


    var _signup_tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup-tab2.page */
    "./src/app/screens/auth/signup-tab2/signup-tab2.page.ts");

    var routes = [{
      path: '',
      component: _signup_tab2_page__WEBPACK_IMPORTED_MODULE_3__["SignupTab2Page"]
    }];

    var SignupTab2PageRoutingModule = /*#__PURE__*/_createClass(function SignupTab2PageRoutingModule() {
      _classCallCheck(this, SignupTab2PageRoutingModule);
    });

    SignupTab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupTab2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/auth/signup-tab2/signup-tab2.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/screens/auth/signup-tab2/signup-tab2.module.ts ***!
    \****************************************************************/

  /*! exports provided: SignupTab2PageModule */

  /***/
  function srcAppScreensAuthSignupTab2SignupTab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupTab2PageModule", function () {
      return SignupTab2PageModule;
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


    var _signup_tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-tab2-routing.module */
    "./src/app/screens/auth/signup-tab2/signup-tab2-routing.module.ts");
    /* harmony import */


    var _signup_tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-tab2.page */
    "./src/app/screens/auth/signup-tab2/signup-tab2.page.ts");

    var SignupTab2PageModule = /*#__PURE__*/_createClass(function SignupTab2PageModule() {
      _classCallCheck(this, SignupTab2PageModule);
    });

    SignupTab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupTab2PageRoutingModule"]],
      declarations: [_signup_tab2_page__WEBPACK_IMPORTED_MODULE_6__["SignupTab2Page"]]
    })], SignupTab2PageModule);
    /***/
  },

  /***/
  "./src/app/screens/auth/signup-tab2/signup-tab2.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/screens/auth/signup-tab2/signup-tab2.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensAuthSignupTab2SignupTab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvYXV0aC9zaWdudXAtdGFiMi9zaWdudXAtdGFiMi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/screens/auth/signup-tab2/signup-tab2.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/screens/auth/signup-tab2/signup-tab2.page.ts ***!
    \**************************************************************/

  /*! exports provided: SignupTab2Page */

  /***/
  function srcAppScreensAuthSignupTab2SignupTab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupTab2Page", function () {
      return SignupTab2Page;
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


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");
    /* harmony import */


    var src_app_services_common_atrributes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/common-atrributes.service */
    "./src/app/services/common-atrributes.service.ts");
    /* harmony import */


    var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/network-status.service */
    "./src/app/services/network-status.service.ts");

    var SignupTab2Page = /*#__PURE__*/function () {
      function SignupTab2Page(fb, request, router, ui, common, network) {
        _classCallCheck(this, SignupTab2Page);

        this.fb = fb;
        this.request = request;
        this.router = router;
        this.ui = ui;
        this.common = common;
        this.network = network;
        this.transport_types = [];
        this.personal_information = {};
        this.transpot_type = {};
        this.vehicle_information = this.fb.group({
          vehicle_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          plate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]],
          brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          year: [new Date().getFullYear(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          terms: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]]
        });
      }

      _createClass(SignupTab2Page, [{
        key: "plateOnChange",
        value: function plateOnChange() {
          var plate = this.vehicle_information.value.plate;
          plate = plate.toUpperCase();

          if (plate.length > 6) {
            plate = plate.substring(0, 6);
          }

          this.controls.plate.setValue(plate);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this = this;

            var loader;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (localStorage.getItem("personal_information")) {
                      this.personal_information = JSON.parse(localStorage.getItem("personal_information"));
                    }

                    if (!this.network.getNetworkStatus().connected) {
                      _context3.next = 8;
                      break;
                    }

                    _context3.next = 4;
                    return this.ui.loading("Por favor espere...");

                  case 4:
                    loader = _context3.sent;
                    this.request.get('list/attributes?parameter_id=2').subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        var _this2 = this;

                        var vehicle;
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                this.transport_types = res.data;

                                if (localStorage.getItem("vehicle_information")) {
                                  vehicle = JSON.parse(localStorage.getItem("vehicle_information"));
                                  this.vehicle_information.setValue({
                                    vehicle_type: vehicle.vehicle_type,
                                    plate: vehicle.plate,
                                    brand: vehicle.brand,
                                    model: vehicle.model,
                                    color: vehicle.color,
                                    year: new Date().getFullYear(),
                                    terms: false
                                  });
                                  this.transpot_type = this.transport_types.find(function (t) {
                                    return t.id == vehicle.vehicle_type;
                                  });
                                  this.controls.vehicle_type.valueChanges.subscribe(function (res) {
                                    _this2.transpot_type = _this2.transport_types.find(function (t) {
                                      return t.id == res;
                                    });
                                  });
                                }

                                _context.next = 4;
                                return loader;

                              case 4:
                                _context.sent.dismiss();

                              case 5:
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
                    _context3.next = 9;
                    break;

                  case 8:
                    this.ui.showToast("Verifique su conexión");

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "controls",
        get: function get() {
          return this.vehicle_information.controls;
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _this3 = this;

            var loader, obj;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!this.vehicle_information.valid) {
                      _context6.next = 17;
                      break;
                    }

                    this.personal_information = Object.assign(Object.assign({}, this.personal_information), this.vehicle_information.value);
                    this.personal_information.plate = this.personal_information.plate.toUpperCase();
                    console.log(this.personal_information);
                    localStorage.setItem("vehicle_information", JSON.stringify(this.vehicle_information.value));

                    if (!this.network.getNetworkStatus().connected) {
                      _context6.next = 14;
                      break;
                    }

                    _context6.next = 8;
                    return this.ui.loading("Por favor espere...");

                  case 8:
                    loader = _context6.sent;
                    obj = {
                      dni: this.personal_information.dni,
                      dni_type_id: this.personal_information.dni_type_id,
                      role_id: 5,
                      first_name: this.personal_information.names,
                      last_name: this.personal_information.lastnames,
                      address: this.personal_information.address,
                      phone: this.personal_information.phone,
                      email: this.personal_information.email,
                      city_id: this.personal_information.city.id,
                      country: "CO",
                      state_id: this.personal_information.city.state_id,
                      password: this.personal_information.password,
                      password_confirmation: this.personal_information.password_confirm,
                      transport_type_id: this.personal_information.vehicle_type,
                      model: this.personal_information.model,
                      brand: this.personal_information.brand,
                      color: this.personal_information.color,
                      plate: this.personal_information.plate,
                      year: this.vehicle_information.value.year
                    };
                    console.log("Obj", obj);
                    this.request.post('driver/create_driver', obj).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                        var _this4 = this;

                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                _context4.next = 2;
                                return loader;

                              case 2:
                                _context4.sent.dismiss();

                                localStorage.removeItem("personal_information");
                                localStorage.removeItem("vehicle_information");
                                this.ui.showToast("Usuario creado exitosamente", function () {
                                  _this4.router.navigate(['/login']);
                                });

                              case 6:
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
                                _context5.next = 2;
                                return loader;

                              case 2:
                                _context5.sent.dismiss();

                                console.log(err);

                                if (!(err.status == 400)) {
                                  _context5.next = 8;
                                  break;
                                }

                                if (!err.error) {
                                  _context5.next = 8;
                                  break;
                                }

                                if (err.error.messages) {
                                  this.ui.showToast(err.error.messages[0]);
                                }

                                return _context5.abrupt("return");

                              case 8:
                                this.ui.showToast("Ha ocurrido un error en el servidor");

                              case 9:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    });
                    _context6.next = 15;
                    break;

                  case 14:
                    this.ui.showToast("Verifique su conexión");

                  case 15:
                    _context6.next = 20;
                    break;

                  case 17:
                    if (!this.controls.terms.invalid) {
                      _context6.next = 20;
                      break;
                    }

                    _context6.next = 20;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: 'Debe aceptar los términos y condiciones',
                      buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }]
                    });

                  case 20:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return SignupTab2Page;
    }();

    SignupTab2Page.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"]
      }, {
        type: src_app_services_common_atrributes_service__WEBPACK_IMPORTED_MODULE_6__["CommonAtrributesService"]
      }, {
        type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"]
      }];
    };

    SignupTab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-tab2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup-tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup-tab2/signup-tab2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup-tab2.page.scss */
      "./src/app/screens/auth/signup-tab2/signup-tab2.page.scss"))["default"]]
    })], SignupTab2Page);
    /***/
  }
}]);
//# sourceMappingURL=signup-tab2-signup-tab2-module-es5.js.map