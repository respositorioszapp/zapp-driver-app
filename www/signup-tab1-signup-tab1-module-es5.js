function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-tab1-signup-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup-tab1/signup-tab1.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup-tab1/signup-tab1.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensAuthSignupTab1SignupTab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4 style=\"text-align: center;\">Registro usuario</h4>\n<form [formGroup]=\"personal_information\" (submit)=\"next()\" novalidate>\n  <ion-item  lines=\"none\" class=\"input-text ion-margin-top\">\n    \n    <ion-select placeholder=\"Seleccione una tipo\" name=\"city\" formControlName=\"dni_type_id\" style=\"display: contents;\" [selectedText]=\"type.name\">\n      <ion-select-option *ngFor=\"let item of types; let i = index \" [value]=\"item.id\"  >{{item.name }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.dni_type_id.dirty && controls.dni_type_id.touched && controls.dni_type_id.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.dni_type_id.errors.required\">El tipo de documento es requerido</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"No. Identificación\" formControlName=\"dni\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.dni.dirty && controls.dni.touched && controls.dni.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.dni.errors.required\">El número de identificación es requerido</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Nombre\" formControlName=\"names\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.names.dirty && controls.names.touched && controls.names.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.names.errors.required\">Nombre es requerido</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\"  class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Apellidos\" formControlName=\"lastnames\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.lastnames.dirty && controls.lastnames.touched && controls.lastnames.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\" ></ion-icon>\n    <ion-label *ngIf=\"controls.lastnames.errors.required\" >Apellidos es requerido</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Dirección\" formControlName=\"address\" required></ion-input>\n  </ion-item>\n  <ion-item class=\"danger-color-text\" *ngIf=\"controls.address.dirty && controls.address.touched && controls.address.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.address.errors.required\">Dirección es requerida</ion-label>\n  </ion-item>\n  <ion-item  lines=\"none\" class=\"input-text ion-margin-top\">\n    \n    <ion-select placeholder=\"Seleccione una ciudad\" name=\"city\" formControlName=\"city\" style=\"display: contents;\" [selectedText]=\"city.name\">\n      <ion-select-option *ngFor=\"let item of cities; let i = index \" [value]=\"item.id\"  >{{item.name }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\"  class=\"danger-color-text\" *ngIf=\"controls.city.dirty && controls.city.touched && controls.city.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.city.errors.required\">La ciudad es requerida</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Teléfono\" formControlName=\"phone\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.phone.dirty && controls.phone.touched && controls.phone.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.phone.errors.required\">El teléfono es requerido</ion-label>\n    <ion-label *ngIf=\"controls.phone.errors.minlength || controls.phone.errors.maxlength\">\n      Debe ser 10 dígitos\n    </ion-label>\n    <ion-label *ngIf=\"controls.phone.errors.pattern\">El télefono es un valor numérico</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Email\" formControlName=\"email\" type=\"email\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.email.dirty && controls.email.touched && controls.email.errors\">\n    <ion-icon class=\"danger-color-text\" name=\"alert-circle\" slot=\"start\"></ion-icon>\n    <ion-label *ngIf=\"controls.email.errors.required\">Email es requerido</ion-label>\n    <ion-label *ngIf=\"controls.email.errors.email || controls.email.errors.pattern\">Debe ser un email válido</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Contraseña\" formControlName=\"password\" [type]=\"view ? 'text':'password'\" required></ion-input>\n    <ion-icon [name]=\"view ? 'eye-outline': 'eye-off-outline'\" slot=\"end\" (click)=\"setView()\"></ion-icon>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\"\n    *ngIf=\"controls.password.dirty && controls.password.touched && controls.password.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.password.errors.required\">La contraseña es requerida</ion-label>\n    <ion-label *ngIf=\"controls.password.errors.minlength || controls.password.errors.maxlength\">La contraseña debe\n      ser\n      de 8 a 16 caracteres</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Repetir Contraseña\" formControlName=\"password_confirm\" [type]=\"view_confirm ? 'text':'password'\" required>\n    </ion-input>\n    <ion-icon [name]=\"view_confirm ? 'eye-outline': 'eye-off-outline'\" slot=\"end\" (click)=\"setViewConfirm()\"></ion-icon>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\"\n    *ngIf=\"controls.password_confirm.dirty && controls.password_confirm.touched && controls.password_confirm.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.password_confirm.errors.required\">La contraseña es requerida</ion-label>\n    <ion-label *ngIf=\"controls.password_confirm.errors.mustMatch\">Las contraseñas no coinciden</ion-label>\n  </ion-item>\n  <ion-button type=\"submit\" expand=\"block\" mode=\"ios\" color=\"primary\" class=\"ion-margin-top\" >\n    CONTINUAR\n  </ion-button>\n</form>";
    /***/
  },

  /***/
  "./src/app/screens/auth/signup-tab1/signup-tab1-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/screens/auth/signup-tab1/signup-tab1-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: SignupTab1PageRoutingModule */

  /***/
  function srcAppScreensAuthSignupTab1SignupTab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupTab1PageRoutingModule", function () {
      return SignupTab1PageRoutingModule;
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


    var _signup_tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup-tab1.page */
    "./src/app/screens/auth/signup-tab1/signup-tab1.page.ts");

    var routes = [{
      path: '',
      component: _signup_tab1_page__WEBPACK_IMPORTED_MODULE_3__["SignupTab1Page"]
    }];

    var SignupTab1PageRoutingModule = /*#__PURE__*/_createClass(function SignupTab1PageRoutingModule() {
      _classCallCheck(this, SignupTab1PageRoutingModule);
    });

    SignupTab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupTab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/auth/signup-tab1/signup-tab1.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/screens/auth/signup-tab1/signup-tab1.module.ts ***!
    \****************************************************************/

  /*! exports provided: SignupTab1PageModule */

  /***/
  function srcAppScreensAuthSignupTab1SignupTab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupTab1PageModule", function () {
      return SignupTab1PageModule;
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


    var _signup_tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-tab1-routing.module */
    "./src/app/screens/auth/signup-tab1/signup-tab1-routing.module.ts");
    /* harmony import */


    var _signup_tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-tab1.page */
    "./src/app/screens/auth/signup-tab1/signup-tab1.page.ts");

    var SignupTab1PageModule = /*#__PURE__*/_createClass(function SignupTab1PageModule() {
      _classCallCheck(this, SignupTab1PageModule);
    });

    SignupTab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupTab1PageRoutingModule"]],
      declarations: [_signup_tab1_page__WEBPACK_IMPORTED_MODULE_6__["SignupTab1Page"]]
    })], SignupTab1PageModule);
    /***/
  },

  /***/
  "./src/app/screens/auth/signup-tab1/signup-tab1.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/screens/auth/signup-tab1/signup-tab1.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensAuthSignupTab1SignupTab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-icon {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9hdXRoL3NpZ251cC10YWIxL3NpZ251cC10YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9hdXRoL3NpZ251cC10YWIxL3NpZ251cC10YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO1VBQUEsa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvYXV0aC9zaWdudXAtdGFiMS9zaWdudXAtdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG59IiwiaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/screens/auth/signup-tab1/signup-tab1.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/screens/auth/signup-tab1/signup-tab1.page.ts ***!
    \**************************************************************/

  /*! exports provided: SignupTab1Page */

  /***/
  function srcAppScreensAuthSignupTab1SignupTab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupTab1Page", function () {
      return SignupTab1Page;
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


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_validators_passwod_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/validators/passwod.validator */
    "./src/app/validators/passwod.validator.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");
    /* harmony import */


    var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/network-status.service */
    "./src/app/services/network-status.service.ts");

    var SignupTab1Page = /*#__PURE__*/function () {
      function SignupTab1Page(requestService, fb, router, ui, network) {
        _classCallCheck(this, SignupTab1Page);

        this.requestService = requestService;
        this.fb = fb;
        this.router = router;
        this.ui = ui;
        this.network = network;
        this.view = false;
        this.view_confirm = false;
        this.cities = [];
        this.city = {};
        this.types = [];
        this.type = {
          id: "",
          name: ""
        };
        /**
         * dni_type_id: information.typeId,
                dni: information.identification,
         */

        this.personal_information = this.fb.group({
          names: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          lastnames: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          dni_type_id: [10, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          dni: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          city: [4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16)]],
          password_confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
          validators: Object(src_app_validators_passwod_validator__WEBPACK_IMPORTED_MODULE_4__["ComparePassword"])("password", "password_confirm")
        });
        var person = {};

        if (localStorage.getItem("personal_information")) {
          person = JSON.parse(localStorage.getItem("personal_information"));
          console.log("City id", person.city.id);
          this.personal_information.setValue({
            names: person.names,
            lastnames: person.lastnames,
            address: person.address,
            city: person.city.id,
            phone: person.phone,
            email: person.email,
            password: person.password,
            password_confirm: person.password_confirm,
            dni: person.dni ? person.dni : '',
            dni_type_id: person.dni_type_id ? person.dni_type_id : 10
          });
        }
      }

      _createClass(SignupTab1Page, [{
        key: "getSelected",
        value: function getSelected(item) {
          return item.id == this.controls.city.value;
        }
      }, {
        key: "setView",
        value: function setView() {
          this.view = !this.view;
        }
      }, {
        key: "setViewConfirm",
        value: function setViewConfirm() {
          this.view_confirm = !this.view_confirm;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _this = this;

            var loader;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!this.network.getNetworkStatus().connected) {
                      _context6.next = 7;
                      break;
                    }

                    _context6.next = 3;
                    return this.ui.loading("Por favor espere...");

                  case 3:
                    loader = _context6.sent;
                    this.requestService.get('indexcities').subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                        var _this2 = this;

                        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                this.cities = res.data;
                                this.city = this.cities.find(function (c) {
                                  return c.id == _this2.controls.city.value;
                                });
                                this.controls.city.valueChanges.subscribe(function (res) {
                                  console.log("Change city", res);
                                  _this2.city = _this2.cities.find(function (c) {
                                    return c.id == res;
                                  });
                                  console.log("Change city", _this2.city);
                                });
                                this.requestService.get('list/attributes?parameter_id=4').subscribe(function (res) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                                    var _this3 = this;

                                    var person;
                                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                                      while (1) {
                                        switch (_context.prev = _context.next) {
                                          case 0:
                                            _context.next = 2;
                                            return loader;

                                          case 2:
                                            _context.sent.dismiss();

                                            this.types = res.data;
                                            this.type = this.types.find(function (t) {
                                              return t.id == 10;
                                            });

                                            if (localStorage.getItem("personal_information")) {
                                              person = JSON.parse(localStorage.getItem("personal_information"));
                                              this.type = this.types.find(function (t) {
                                                return t.id == person.dni_type_id;
                                              });
                                            }

                                            this.controls.dni_type_id.valueChanges.subscribe(function (res) {
                                              _this3.type = _this3.types.find(function (t) {
                                                return t.id == res;
                                              });
                                            });

                                          case 7:
                                          case "end":
                                            return _context.stop();
                                        }
                                      }
                                    }, _callee, this);
                                  }));
                                }, function (err) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                      while (1) {
                                        switch (_context2.prev = _context2.next) {
                                          case 0:
                                            _context2.next = 2;
                                            return loader;

                                          case 2:
                                            _context2.sent.dismiss();

                                          case 3:
                                          case "end":
                                            return _context2.stop();
                                        }
                                      }
                                    }, _callee2);
                                  }));
                                });

                              case 4:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }, function (err) {
                      _this.requestService.get('list/attributes?parameter_id=4').subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                          var _this4 = this;

                          var person;
                          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return loader;

                                case 2:
                                  _context4.sent.dismiss();

                                  this.types = res.data;
                                  this.type = this.types.find(function (t) {
                                    return t.id == 10;
                                  });

                                  if (localStorage.getItem("personal_information")) {
                                    person = JSON.parse(localStorage.getItem("personal_information"));
                                    this.type = this.types.find(function (t) {
                                      return t.id == person.dni_type_id;
                                    });
                                  }

                                  this.controls.dni_type_id.valueChanges.subscribe(function (res) {
                                    _this4.type = _this4.types.find(function (t) {
                                      return t.id == res;
                                    });
                                  });

                                case 7:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return loader;

                                case 2:
                                  _context5.sent.dismiss();

                                case 3:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5);
                        }));
                      });
                    });
                    _context6.next = 8;
                    break;

                  case 7:
                    this.ui.showToast("Verifica tu conexión");

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "controls",
        get: function get() {
          return this.personal_information.controls;
        }
      }, {
        key: "next",
        value: function next() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var obj;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    obj = Object.assign({}, this.personal_information.value);
                    obj.city = this.city;

                    if (this.personal_information.valid) {
                      localStorage.setItem("personal_information", JSON.stringify(obj));
                      this.router.navigate(["/signup/tab2"]);
                    }

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return SignupTab1Page;
    }();

    SignupTab1Page.ctorParameters = function () {
      return [{
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"]
      }, {
        type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"]
      }];
    };

    SignupTab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-tab1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup-tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup-tab1/signup-tab1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup-tab1.page.scss */
      "./src/app/screens/auth/signup-tab1/signup-tab1.page.scss"))["default"]]
    })], SignupTab1Page);
    /***/
  }
}]);
//# sourceMappingURL=signup-tab1-signup-tab1-module-es5.js.map