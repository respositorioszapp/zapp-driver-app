function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-personal-information-personal-information-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/personal-information/personal-information.page.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/personal-information/personal-information.page.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensScreensTabsPersonalInformationPersonalInformationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content color=\"warning\">\n  <ion-button fill=\"clear\" (click) =\"back()\" style=\"position: absolute;\n  left: 0px;\n  padding: 10px;\" >\n    <ion-icon name=\"arrow-back-outline\"   slot=\"icon-only\"  ></ion-icon>\n  </ion-button>\n  <div style=\"position: relative;\">\n    <div class=\"ion-text-center margin-top-15vh ion-padding-bottom\" style=\"width: 60%;\n    margin: auto;\n    position: absolute;\n    left: 0;\n    right: 0;\">\n      <img src=\"assets/imgs/logo-morado.png\" width=\"100\">\n    </div>\n  </div>\n  <ion-card style=\"margin-top:50px\">\n    <ion-card-header>\n      <ion-card-subtitle class=\"ion-text-center\">\n        <h3 ><span class=\"black-color-text ion-text-justify\">Información personal</span></h3>\n        \n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup]=\"personal_information\" (submit)=\"update()\" novalidate>\n        <ion-item  lines=\"none\" class=\"input-text ion-margin-top\">\n    \n          <ion-select placeholder=\"Seleccione una tipo\" name=\"city\" formControlName=\"dni_type_id\" style=\"display: contents;\" [selectedText]=\"type.name\" disabled=\"true\">\n            <ion-select-option *ngFor=\"let item of types; let i = index \" [value]=\"item.id\"  >{{item.name }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.dni_type_id.dirty && controls.dni_type_id.touched && controls.dni_type_id.errors\">\n          <ion-icon name=\"alert-circle\" class=\"danger-color-text\" slot=\"start\"></ion-icon>\n          <ion-label *ngIf=\"controls.dni_type_id.errors.required\">El tipo de documento es requerido</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"No. Identificación\" formControlName=\"dni\" disabled=\"true\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.dni.dirty && controls.dni.touched && controls.dni.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.dni.errors.required\">El número de identificación es requerido</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Nombre\" formControlName=\"first_name\" disabled=\"true\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.first_name.dirty && controls.first_name.touched && controls.first_name.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.first_name.errors.required\">Nombre es requerido</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\"  class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Apellidos\" formControlName=\"last_name\" disabled=\"true\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.last_name.dirty && controls.last_name.touched && controls.last_name.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\" ></ion-icon>\n          <ion-label *ngIf=\"controls.last_name.errors.required\" >Apellidos es requerido</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Dirección\" formControlName=\"address\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"danger-color-text\" *ngIf=\"controls.address.dirty && controls.address.touched && controls.address.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.address.errors.required\">Dirección es requerida</ion-label>\n        </ion-item>\n        <ion-item  lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-select placeholder=\"Seleccione una ciudad\" name=\"city\" formControlName=\"city\" style=\"display: contents;\" [selectedText]=\"city.name\">\n            <ion-select-option *ngFor=\"let item of cities\" [value]=\"item.id\" selected=\"item.id == city.id\" >{{item.name }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.city.dirty && controls.city.touched && controls.city.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.city.errors.required\">La ciudad es requerida</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Teléfono\" formControlName=\"phone\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.phone.dirty && controls.phone.touched && controls.phone.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.phone.errors.required\">El teléfono es requerido</ion-label>\n          <ion-label *ngIf=\"controls.phone.errors.minlength || controls.phone.errors.maxlength\">\n            Debe ser 10 dígitos\n          </ion-label>\n          <ion-label *ngIf=\"controls.phone.errors.pattern\">El teléfono es un valor numérico</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Email\" formControlName=\"email\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.email.dirty && controls.email.touched && controls.email.errors\">\n          <ion-icon class=\"danger-color-text\" name=\"alert-circle\" slot=\"start\"></ion-icon>\n          <ion-label *ngIf=\"controls.email.errors.required\">Email es requerido</ion-label>\n          <ion-label *ngIf=\"controls.email.errors.email\">Debe ser un email válido</ion-label>\n        </ion-item>\n        <ion-button type=\"submit\" expand=\"block\" mode=\"ios\" color=\"primary\" class=\"ion-margin-top\"  >\n          ACTUALIZAR\n        </ion-button>\n      </form>     \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n ";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/personal-information/personal-information-routing.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/personal-information/personal-information-routing.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: PersonalInformationPageRoutingModule */

  /***/
  function srcAppScreensScreensTabsPersonalInformationPersonalInformationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalInformationPageRoutingModule", function () {
      return PersonalInformationPageRoutingModule;
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


    var _personal_information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./personal-information.page */
    "./src/app/screens/screens-tabs/personal-information/personal-information.page.ts");

    var routes = [{
      path: '',
      component: _personal_information_page__WEBPACK_IMPORTED_MODULE_3__["PersonalInformationPage"]
    }];

    var PersonalInformationPageRoutingModule = /*#__PURE__*/_createClass(function PersonalInformationPageRoutingModule() {
      _classCallCheck(this, PersonalInformationPageRoutingModule);
    });

    PersonalInformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PersonalInformationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/personal-information/personal-information.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/personal-information/personal-information.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: PersonalInformationPageModule */

  /***/
  function srcAppScreensScreensTabsPersonalInformationPersonalInformationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalInformationPageModule", function () {
      return PersonalInformationPageModule;
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


    var _personal_information_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./personal-information-routing.module */
    "./src/app/screens/screens-tabs/personal-information/personal-information-routing.module.ts");
    /* harmony import */


    var _personal_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./personal-information.page */
    "./src/app/screens/screens-tabs/personal-information/personal-information.page.ts");

    var PersonalInformationPageModule = /*#__PURE__*/_createClass(function PersonalInformationPageModule() {
      _classCallCheck(this, PersonalInformationPageModule);
    });

    PersonalInformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _personal_information_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalInformationPageRoutingModule"]],
      declarations: [_personal_information_page__WEBPACK_IMPORTED_MODULE_6__["PersonalInformationPage"]]
    })], PersonalInformationPageModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/personal-information/personal-information.page.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/personal-information/personal-information.page.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensScreensTabsPersonalInformationPersonalInformationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy10YWJzL3BlcnNvbmFsLWluZm9ybWF0aW9uL3BlcnNvbmFsLWluZm9ybWF0aW9uLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/personal-information/personal-information.page.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/personal-information/personal-information.page.ts ***!
    \****************************************************************************************/

  /*! exports provided: PersonalInformationPage */

  /***/
  function srcAppScreensScreensTabsPersonalInformationPersonalInformationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalInformationPage", function () {
      return PersonalInformationPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/network-status.service */
    "./src/app/services/network-status.service.ts");

    var PersonalInformationPage = /*#__PURE__*/function () {
      function PersonalInformationPage(requestService, fb, router, ui, auth, network) {
        _classCallCheck(this, PersonalInformationPage);

        this.requestService = requestService;
        this.fb = fb;
        this.router = router;
        this.ui = ui;
        this.auth = auth;
        this.network = network;
        this.cities = [];
        this.city = {};
        this.types = [];
        this.type = {
          id: "",
          name: ""
        }; //[{ value: '', disabled: true }, Validators.required]

        this.personal_information = this.fb.group({
          dni_type_id: [10, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          dni: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          city: [4],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
        this.objectChange = false;
      }

      _createClass(PersonalInformationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _this = this;

            var _this$auth$person, dni_type_id, dni, address, city_id, email, first_name, last_name, phone, loader;

            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _this$auth$person = this.auth.person, dni_type_id = _this$auth$person.dni_type_id, dni = _this$auth$person.dni, address = _this$auth$person.address, city_id = _this$auth$person.city_id, email = _this$auth$person.email, first_name = _this$auth$person.first_name, last_name = _this$auth$person.last_name, phone = _this$auth$person.phone;
                    this.personal_information.setValue({
                      dni_type_id: dni_type_id ? dni_type_id : 10,
                      dni: dni ? dni : '',
                      address: address,
                      first_name: first_name,
                      city: city_id ? city_id : 4,
                      email: email,
                      last_name: last_name,
                      phone: phone
                    });

                    if (!this.network.getNetworkStatus().connected) {
                      _context6.next = 9;
                      break;
                    }

                    _context6.next = 5;
                    return this.ui.loading("Por favor espere...");

                  case 5:
                    loader = _context6.sent;
                    this.requestService.get('indexcities').subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                        var _this2 = this;

                        var obj;
                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                this.cities = res.data;
                                obj = {
                                  dni_type_id: dni_type_id ? dni_type_id : 10,
                                  dni: dni ? dni : '',
                                  address: address,
                                  city: city_id,
                                  email: email,
                                  first_name: first_name,
                                  last_name: last_name,
                                  phone: phone
                                };
                                this.city = this.cities.find(function (c) {
                                  return c.id == city_id;
                                });
                                this.controls.city.valueChanges.subscribe(function (res) {
                                  console.log("Change city", res);
                                  _this2.city = _this2.cities.find(function (c) {
                                    return c.id == res;
                                  });
                                  console.log("Change city", _this2.city);
                                });
                                this.personal_information.valueChanges.subscribe(function (res) {
                                  console.log("Objeto", obj);
                                  console.log("Res", res);
                                  var y = Object.keys(obj).find(function (key) {
                                    return obj[key] != res[key];
                                  });

                                  if (y) {
                                    _this2.objectChange = true;
                                  } else {
                                    _this2.objectChange = false;
                                  }
                                });
                                this.requestService.get('list/attributes?parameter_id=4').subscribe(function (res) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                                    var _this3 = this;

                                    var id;
                                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                      while (1) {
                                        switch (_context2.prev = _context2.next) {
                                          case 0:
                                            _context2.next = 2;
                                            return loader;

                                          case 2:
                                            _context2.sent.dismiss();

                                            this.types = res.data;
                                            id = this.auth.person.dni_type_id ? this.auth.person.dni_type_id : 10;
                                            this.type = this.types.find(function (t) {
                                              return t.id == id;
                                            });
                                            this.controls.dni_type_id.valueChanges.subscribe(function (res) {
                                              _this3.type = _this3.types.find(function (t) {
                                                return t.id == res;
                                              });
                                            });

                                          case 7:
                                          case "end":
                                            return _context2.stop();
                                        }
                                      }
                                    }, _callee2, this);
                                  }));
                                }, function (err) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                      while (1) {
                                        switch (_context3.prev = _context3.next) {
                                          case 0:
                                            _context3.next = 2;
                                            return loader;

                                          case 2:
                                            _context3.sent.dismiss();

                                          case 3:
                                          case "end":
                                            return _context3.stop();
                                        }
                                      }
                                    }, _callee3);
                                  }));
                                });

                              case 6:
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
                    _context6.next = 10;
                    break;

                  case 9:
                    this.ui.showToast("Verifique su conexión");

                  case 10:
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
        key: "getSelected",
        value: function getSelected() {}
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/tabs/profile']);
        }
      }, {
        key: "update",
        value: function update() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var _this4 = this;

            var loader, _this$personal_inform, dni_type_id, dni, first_name, last_name, address, phone, email, city_id, obj;

            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (!this.objectChange) {
                      _context9.next = 15;
                      break;
                    }

                    if (!this.personal_information.valid) {
                      _context9.next = 13;
                      break;
                    }

                    if (!this.network.getNetworkStatus().connected) {
                      _context9.next = 12;
                      break;
                    }

                    _context9.next = 5;
                    return this.ui.loading("Por favor espere...");

                  case 5:
                    loader = _context9.sent;
                    _this$personal_inform = this.personal_information.value, dni_type_id = _this$personal_inform.dni_type_id, dni = _this$personal_inform.dni, first_name = _this$personal_inform.first_name, last_name = _this$personal_inform.last_name, address = _this$personal_inform.address, phone = _this$personal_inform.phone, email = _this$personal_inform.email, city_id = _this$personal_inform.city_id;
                    obj = {
                      dni_type_id: dni_type_id,
                      dni: dni,
                      user_id: this.auth.user.id,
                      role_id: 5,
                      first_name: first_name,
                      last_name: last_name,
                      address: address,
                      phone: phone,
                      email: email,
                      city_id: this.city.id,
                      country: "CO",
                      state_id: this.city.state_id,
                      transport_type_id: this.auth.vehicles.transport_type_id,
                      model: this.auth.vehicles.model,
                      brand: this.auth.vehicles.brand,
                      color: this.auth.vehicles.color,
                      plate: this.auth.vehicles.plate,
                      year: this.auth.vehicles.year
                    };
                    console.log("Obj", obj);
                    this.requestService.post('driver/update_driver', obj).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                        var _this5 = this;

                        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                _context7.next = 2;
                                return loader;

                              case 2:
                                _context7.sent.dismiss();

                                this.auth.setPerson({
                                  dni_type_id: dni_type_id,
                                  dni: dni,
                                  first_name: first_name,
                                  last_name: last_name,
                                  address: address,
                                  phone: phone,
                                  email: email,
                                  city_id: this.city.id,
                                  country: "CO",
                                  state_id: this.city.state_id
                                });
                                this.ui.showToast("Usuario actualizado exitosamente", function () {
                                  _this5.router.navigate(['/tabs/profile']);
                                });

                              case 5:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                _context8.next = 2;
                                return loader;

                              case 2:
                                _context8.sent.dismiss();

                                console.log(err);
                                this.ui.showToast(err.error.messages[0]);

                              case 5:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    });
                    _context9.next = 13;
                    break;

                  case 12:
                    this.ui.showToast("Verifique su conexión");

                  case 13:
                    _context9.next = 16;
                    break;

                  case 15:
                    this.ui.showToast("Debe cambiar alguno de los campos");

                  case 16:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return PersonalInformationPage;
    }();

    PersonalInformationPage.ctorParameters = function () {
      return [{
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"]
      }];
    };

    PersonalInformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-personal-information',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./personal-information.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/personal-information/personal-information.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./personal-information.page.scss */
      "./src/app/screens/screens-tabs/personal-information/personal-information.page.scss"))["default"]]
    })], PersonalInformationPage);
    /***/
  }
}]);
//# sourceMappingURL=screens-screens-tabs-personal-information-personal-information-module-es5.js.map