function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-auth-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/login/login.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/login/login.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensAuthLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"warning\" class=\"ion-padding\">\n  <div class=\"ion-text-center margin-top-15vh ion-padding-bottom\">\n    <img src=\"assets/imgs/logo-morado.png\" width=\"180\">\n  </div>\n  <ion-card class=\"border-radius\">\n    <ion-card-content>\n      <form  [formGroup]=\"loginData\" (submit)=\"send()\" novalidate>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-icon name=\"person-circle\" slot=\"start\"></ion-icon>\n          <ion-input placeholder=\"Email\" formControlName=\"email\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.email.dirty && controls.email.touched && controls.email.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.email.errors.required\">Email es requerido</ion-label>\n          <ion-label *ngIf=\"controls.email.errors.email\">Debe ser un email válido</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top ion-margin-bottom\">\n          <ion-icon name=\"lock-closed\" slot=\"start\"  ></ion-icon>\n          <ion-input [type]=\"view ?'text': 'password'\" placeholder=\"Password\" formControlName=\"password\" required ></ion-input>\n          <ion-icon [name]=\"view ? 'eye-outline': 'eye-off-outline'\" slot=\"end\" (click)=\"setView()\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.password.dirty && controls.password.touched && controls.password.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\" ></ion-icon>\n          <ion-label *ngIf=\"controls.password.errors.required\">La contraseña es requerida</ion-label>\n          <ion-label *ngIf=\"controls.password.errors.minlength || controls.password.errors.maxlength\">La contraseña debe ser\n            de 8 a 16 caracteres</ion-label>\n        </ion-item>\n        \n        <ion-button fill=\"clear\" expand=\"block\" mode=\"ios\" class=\"grey-color\" routerLink=\"/signup/forgotpassword\">\n          ¿Olvidaste tu contraseña?\n        </ion-button>\n        <ion-button type=\"submit\"  expand=\"block\" mode=\"ios\" color=\"primary\"  class=\"ion-margin-bottom\">\n          INICIAR SESION\n        </ion-button>\n        <ion-button fill=\"outline\" color=\"primary\" expand=\"block\" mode=\"ios\" class=\"grey-color\" routerLink=\"/signup\">\n          REGÍSTRARSE\n        </ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/guards/login.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/login.guard.ts ***!
    \***************************************/

  /*! exports provided: LoginGuard */

  /***/
  function srcAppGuardsLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
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

    var LoginGuard = /*#__PURE__*/function () {
      function LoginGuard(router, auth) {
        _classCallCheck(this, LoginGuard);

        this.router = router;
        this.auth = auth;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var isLoggedIn = localStorage.getItem('isLoggedIn');

          if (!isLoggedIn) {
            return true;
          } else {
            if (isLoggedIn == 'si') {
              this.router.navigate(['tabs/home']);
              return false;
            } else {
              return true;
            }
          }
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginGuard);
    /***/
  },

  /***/
  "./src/app/screens/auth/login/login-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/screens/auth/login/login-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppScreensAuthLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var src_app_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/guards/login.guard */
    "./src/app/guards/login.guard.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/screens/auth/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"],
      canActivate: [src_app_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    }];

    var LoginPageRoutingModule = /*#__PURE__*/_createClass(function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    });

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/auth/login/login.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/screens/auth/login/login.module.ts ***!
    \****************************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppScreensAuthLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/screens/auth/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/screens/auth/login/login.page.ts");

    var LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    });

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/screens/auth/login/login.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/screens/auth/login/login.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensAuthLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".margin-top-15vh {\n  margin-top: 15vh;\n}\n\nion-icon {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi10b3AtMTV2aHtcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xufVxuXG5pb24taWNvbntcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG59IiwiLm1hcmdpbi10b3AtMTV2aCB7XG4gIG1hcmdpbi10b3A6IDE1dmg7XG59XG5cbmlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/screens/auth/login/login.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/screens/auth/login/login.page.ts ***!
    \**************************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppScreensAuthLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/ui.service */
    "./src/app/services/ui.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_fcm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/fcm.service */
    "./src/app/services/fcm.service.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/network-status.service */
    "./src/app/services/network-status.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(storage, ui, auth, router, fcm, request, network) {
        _classCallCheck(this, LoginPage);

        this.storage = storage;
        this.ui = ui;
        this.auth = auth;
        this.router = router;
        this.fcm = fcm;
        this.request = request;
        this.network = network;
        this.view = false;
        this.loginData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])
        });
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("data");
          localStorage.removeItem("current_order");
          localStorage.removeItem("current_status");
          localStorage.removeItem("current_status");
          localStorage.removeItem("currentDocuments");
          localStorage.removeItem("longitude");
          localStorage.removeItem("latitude");
          localStorage.removeItem("watchPositionId");
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "controls",
        get: function get() {
          return this.loginData.controls;
        }
      }, {
        key: "send",
        value: function send() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _this = this;

            var _this$loginData$value, email, password, loadier;

            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (this.loginData.valid) {
                      _this$loginData$value = this.loginData.value, email = _this$loginData$value.email, password = _this$loginData$value.password;

                      if (this.network.getNetworkStatus().connected) {
                        loadier = this.ui.loading('Por favor espere...');
                        this.auth.login(email, password).subscribe(function (res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                            var _this2 = this;

                            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    _context4.next = 2;
                                    return loadier;

                                  case 2:
                                    _context4.sent.dismiss();

                                    console.log("Rol id", res.data);

                                    if (!(res.data.role.id == 5)) {
                                      _context4.next = 29;
                                      break;
                                    }

                                    console.log("Version", res.data.code_version);

                                    if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Capacitor"].platform !== 'web')) {
                                      _context4.next = 21;
                                      break;
                                    }

                                    if (!(res.data.code_version == src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].VERSION_NAME)) {
                                      _context4.next = 17;
                                      break;
                                    }

                                    this.storage.setObject('data', res.data);
                                    localStorage.setItem('isLoggedIn', 'si');
                                    localStorage.setItem('data', JSON.stringify(res.data));
                                    this.auth.setData();
                                    this.sendToken();
                                    this.router.navigate(["/tabs/home"]).then(function () {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                          while (1) {
                                            switch (_context2.prev = _context2.next) {
                                              case 0:
                                                if (this.auth.user.available != 0) {}

                                              case 1:
                                              case "end":
                                                return _context2.stop();
                                            }
                                          }
                                        }, _callee2, this);
                                      }));
                                    });
                                    localStorage.removeItem("current_order");
                                    _context4.next = 19;
                                    break;

                                  case 17:
                                    _context4.next = 19;
                                    return this.ui.presentAlert({
                                      mode: 'ios',
                                      header: '¡Existe una nueva actualización!',
                                      message: 'Por favor actualizala, para obtener mejor rendimiento posible',
                                      buttons: [{
                                        text: 'Aceptar',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function handler(blah) {
                                          location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].PLAY_STORE_URL;
                                        }
                                      }]
                                    });

                                  case 19:
                                    _context4.next = 27;
                                    break;

                                  case 21:
                                    this.storage.setObject('data', res.data);
                                    localStorage.setItem('isLoggedIn', 'si');
                                    localStorage.setItem('data', JSON.stringify(res.data));
                                    this.auth.setData();
                                    this.sendToken();
                                    this.router.navigate(["/tabs/home"]).then(function () {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                                        var position;
                                        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                          while (1) {
                                            switch (_context3.prev = _context3.next) {
                                              case 0:
                                                if (!(this.auth.user.available != 0)) {
                                                  _context3.next = 6;
                                                  break;
                                                }

                                                _context3.next = 3;
                                                return _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Geolocation"].getCurrentPosition({
                                                  enableHighAccuracy: true
                                                });

                                              case 3:
                                                position = _context3.sent;
                                                // (await loader).dismiss();
                                                localStorage.setItem("latitude", position.coords.latitude.toString());
                                                localStorage.setItem("longitude", position.coords.longitude.toString());

                                              case 6:
                                              case "end":
                                                return _context3.stop();
                                            }
                                          }
                                        }, _callee3, this);
                                      }));
                                    });

                                  case 27:
                                    _context4.next = 30;
                                    break;

                                  case 29:
                                    this.ui.showToast("El usuario existe, pero  no tiene acceso a esta aplicación");

                                  case 30:
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
                                    return loadier;

                                  case 2:
                                    _context5.sent.dismiss();

                                    if (!(err.status == 400)) {
                                      _context5.next = 6;
                                      break;
                                    }

                                    this.ui.showToast(err.error.messages[0]);
                                    return _context5.abrupt("return");

                                  case 6:
                                    this.ui.showToast("Error de conexión");

                                  case 7:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5, this);
                          }));
                        });
                      } else {
                        this.ui.showToast("Verifique su conexión");
                      }
                    }

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "setView",
        value: function setView() {
          this.view = !this.view;
        }
      }, {
        key: "sendToken",
        value: function sendToken() {
          if (localStorage.getItem('fcmId')) {
            var obj = {
              user_id: this.auth.user.id,
              token: localStorage.getItem('fcmId'),
              platform: "mobile"
            };
            this.request.post("get_token", obj).subscribe(function (res) {}, function (err) {});
          } else {}
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
      }, {
        type: _services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_fcm_service__WEBPACK_IMPORTED_MODULE_6__["FcmService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"]
      }, {
        type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_11__["NetworkStatusService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/screens/auth/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=screens-auth-login-login-module-es5.js.map