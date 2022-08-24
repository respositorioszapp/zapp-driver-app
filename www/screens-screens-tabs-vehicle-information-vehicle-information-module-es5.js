function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-vehicle-information-vehicle-information-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensScreensTabsVehicleInformationVehicleInformationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"warning\">\n  <ion-button fill=\"clear\" (click)=\"back()\" style=\"position: absolute;\n  left: 0px;\n  padding: 10px;\" >\n    <ion-icon name=\"arrow-back-outline\"   slot=\"icon-only\"  ></ion-icon>\n  </ion-button>\n  <div style=\"position: relative;\">\n    <div class=\"ion-text-center margin-top-15vh ion-padding-bottom\" style=\"width: 60%;\n    margin: auto;\n    position: absolute;\n    left: 0;\n    right: 0;\">\n      <img src=\"assets/imgs/logo-morado.png\" width=\"100\">\n    </div>\n  </div>\n  <ion-card style=\"margin-top:50px\">\n    <ion-card-header>\n      <ion-card-subtitle class=\"ion-text-center\">\n        <h3 ><span class=\"black-color-text ion-text-justify\">Información del vehículo</span></h3>\n        \n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup]=\"vehicle_information\" (submit)=\"save()\" novalidate>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-select placeholder=\"Tipo de vehículo\" formControlName=\"transport_type_id\" style=\"display: contents;\" required [selectedText]=\"transport_type.name\">\n            <ion-select-option *ngFor=\"let item of transport_types\" [value]=\"item.id\">{{item.name }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text ion-text-justify\"\n          *ngIf=\"controls.transport_type_id.dirty && controls.transport_type_id.touched && controls.transport_type_id.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text ion-text-justify\"></ion-icon>\n          <ion-label *ngIf=\"controls.transport_type_id.errors.required\">El tipo de vehículo es requerida</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Placa\" formControlName=\"plate\" required ></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text ion-text-justify\" *ngIf=\"controls.plate.dirty && controls.plate.touched && controls.plate.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text ion-text-justify\"></ion-icon>\n          <ion-label *ngIf=\"controls.plate.errors.required\">La placa es requerido</ion-label>\n          <ion-label *ngIf=\"controls.plate.errors.minlength || controls.plate.errors.maxlength\">La placa debe contener 6\n            caracteres</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Marca\" formControlName=\"brand\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text ion-text-justify\" *ngIf=\"controls.brand.dirty && controls.brand.touched && controls.brand.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text ion-text-justify\"></ion-icon>\n          <ion-label *ngIf=\"controls.brand.errors.required\">La marca es requerido</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Modelo\" formControlName=\"model\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text ion-text-justify\" *ngIf=\"controls.model.dirty && controls.model.touched && controls.model.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text ion-text-justify\"></ion-icon>\n          <ion-label *ngIf=\"controls.model.errors.required\">El modelo es requerido</ion-label>\n        </ion-item>\n      \n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-select placeholder=\"Año\" formControlName=\"year\" style=\"display: contents;\">\n            <ion-select-option *ngFor=\"let item of common.years\" [value]=\"item\">{{item }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text ion-text-justify\" *ngIf=\"controls.year.dirty && controls.year.touched && controls.year.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text ion-text-justify\"></ion-icon>\n          <ion-label *ngIf=\"controls.year.errors.required\">El año es requerido</ion-label>\n        </ion-item>\n      \n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-select placeholder=\"Color\" formControlName=\"color\" style=\"display: contents;\" required>\n            <ion-select-option *ngFor=\"let item of common.colors\" [value]=\"item\">{{item }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text ion-text-justify\" *ngIf=\"controls.color.dirty && controls.color.touched && controls.color.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text ion-text-justify\"></ion-icon>\n          <ion-label *ngIf=\"controls.color.errors.required\" >El color es requerido</ion-label>\n        </ion-item>\n        <!--  -->\n        <ion-button type=\"submit\" expand=\"block\" mode=\"ios\" color=\"primary\" class =\"ion-margin-top\"  >\n          ACTUALIZAR\n        </ion-button>\n      </form>      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/vehicle-information/vehicle-information-routing.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/vehicle-information/vehicle-information-routing.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: VehicleInformationPageRoutingModule */

  /***/
  function srcAppScreensScreensTabsVehicleInformationVehicleInformationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleInformationPageRoutingModule", function () {
      return VehicleInformationPageRoutingModule;
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


    var _vehicle_information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vehicle-information.page */
    "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.ts");

    var routes = [{
      path: '',
      component: _vehicle_information_page__WEBPACK_IMPORTED_MODULE_3__["VehicleInformationPage"]
    }];

    var VehicleInformationPageRoutingModule = /*#__PURE__*/_createClass(function VehicleInformationPageRoutingModule() {
      _classCallCheck(this, VehicleInformationPageRoutingModule);
    });

    VehicleInformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VehicleInformationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/vehicle-information/vehicle-information.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: VehicleInformationPageModule */

  /***/
  function srcAppScreensScreensTabsVehicleInformationVehicleInformationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleInformationPageModule", function () {
      return VehicleInformationPageModule;
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


    var _vehicle_information_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vehicle-information-routing.module */
    "./src/app/screens/screens-tabs/vehicle-information/vehicle-information-routing.module.ts");
    /* harmony import */


    var _vehicle_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vehicle-information.page */
    "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.ts");

    var VehicleInformationPageModule = /*#__PURE__*/_createClass(function VehicleInformationPageModule() {
      _classCallCheck(this, VehicleInformationPageModule);
    });

    VehicleInformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _vehicle_information_routing_module__WEBPACK_IMPORTED_MODULE_5__["VehicleInformationPageRoutingModule"]],
      declarations: [_vehicle_information_page__WEBPACK_IMPORTED_MODULE_6__["VehicleInformationPage"]]
    })], VehicleInformationPageModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensScreensTabsVehicleInformationVehicleInformationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy10YWJzL3ZlaGljbGUtaW5mb3JtYXRpb24vdmVoaWNsZS1pbmZvcm1hdGlvbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.ts ***!
    \**************************************************************************************/

  /*! exports provided: VehicleInformationPage */

  /***/
  function srcAppScreensScreensTabsVehicleInformationVehicleInformationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleInformationPage", function () {
      return VehicleInformationPage;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_common_atrributes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/common-atrributes.service */
    "./src/app/services/common-atrributes.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/network-status.service */
    "./src/app/services/network-status.service.ts");

    var VehicleInformationPage = /*#__PURE__*/function () {
      function VehicleInformationPage(fb, request, router, ui, auth, common, loadingController, network) {
        _classCallCheck(this, VehicleInformationPage);

        this.fb = fb;
        this.request = request;
        this.router = router;
        this.ui = ui;
        this.auth = auth;
        this.common = common;
        this.loadingController = loadingController;
        this.network = network;
        this.transport_types = [];
        this.personal_information = {};
        this.transport_type = {};
        this.vehicle_information = this.fb.group({
          transport_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          plate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]],
          brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          year: [2020, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.objectChange = false;
      }

      _createClass(VehicleInformationPage, [{
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this = this;

            var loader;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!this.network.getNetworkStatus().connected) {
                      _context4.next = 9;
                      break;
                    }

                    _context4.next = 3;
                    return this.loadingController.create({
                      message: "Por favor espere..."
                    });

                  case 3:
                    loader = _context4.sent;
                    _context4.next = 6;
                    return loader.present();

                  case 6:
                    this.request.get('list/attributes?parameter_id=2').subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        var _this2 = this;

                        var _this$auth$vehicles, brand, color, model, plate, transport_type_id, year, obj;

                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                this.transport_types = res.data;

                                if (this.auth.vehicles) {
                                  _this$auth$vehicles = this.auth.vehicles, brand = _this$auth$vehicles.brand, color = _this$auth$vehicles.color, model = _this$auth$vehicles.model, plate = _this$auth$vehicles.plate, transport_type_id = _this$auth$vehicles.transport_type_id, year = _this$auth$vehicles.year;
                                  this.transport_type = this.transport_types.find(function (t) {
                                    return t.name == transport_type_id || t.id == transport_type_id;
                                  });
                                  transport_type_id = this.transport_type.id;
                                  this.vehicle_information.setValue({
                                    brand: brand,
                                    color: color,
                                    model: model,
                                    plate: plate,
                                    transport_type_id: this.transport_type.id,
                                    year: Number(year)
                                  });
                                  obj = {
                                    brand: brand,
                                    color: color,
                                    model: model,
                                    plate: plate,
                                    transport_type_id: transport_type_id,
                                    year: year
                                  };
                                  this.vehicle_information.valueChanges.subscribe(function (res) {
                                    var y = Object.keys(obj).find(function (key) {
                                      return obj[key] != res[key];
                                    });

                                    if (y) {
                                      _this2.objectChange = true;
                                    } else {
                                      _this2.objectChange = false;
                                    }
                                  });
                                } else {
                                  this.objectChange = true;
                                }

                                this.controls.transport_type_id.valueChanges.subscribe(function (res) {
                                  _this2.transport_type = _this2.transport_types.find(function (t) {
                                    return t.id == res;
                                  });
                                });
                                _context2.next = 5;
                                return loader;

                              case 5:
                                _context2.sent.dismiss();

                              case 6:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }, function (error) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return loader;

                              case 2:
                                _context3.sent.dismiss();

                                console.log("Error", error);

                              case 4:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3);
                      }));
                    });
                    _context4.next = 10;
                    break;

                  case 9:
                    this.ui.showToast("Verifique su conexión");

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "controls",
        get: function get() {
          return this.vehicle_information.controls;
        }
      }, {
        key: "plateOnChange",
        value: function plateOnChange() {
          var plate = this.vehicle_information.value.plate;
          plate = plate.toUpperCase();

          if (plate.length > 6) {
            plate = plate.substring(0, 5);
          }

          this.controls.plate.setValue(plate);
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/tabs/profile']);
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          if (this.objectChange) {
            if (this.vehicle_information.valid) {
              if (this.network.getNetworkStatus().connected) {
                this.ui.loading("Por favor espere...");
                var _this$vehicle_informa = this.vehicle_information.value,
                    brand = _this$vehicle_informa.brand,
                    color = _this$vehicle_informa.color,
                    model = _this$vehicle_informa.model,
                    plate = _this$vehicle_informa.plate,
                    transport_type_id = _this$vehicle_informa.transport_type_id,
                    year = _this$vehicle_informa.year;
                var obj = {
                  user_id: this.auth.user.id,
                  role_id: 5,
                  dni_type_id: this.auth.person.dni_type_id,
                  dni: this.auth.person.dni,
                  first_name: this.auth.person.first_name,
                  last_name: this.auth.person.last_name,
                  address: this.auth.person.address,
                  phone: this.auth.person.phone,
                  email: this.auth.person.email,
                  city_id: this.auth.person.city_id,
                  country: "CO",
                  state_id: this.auth.person.state_id,
                  transport_type_id: transport_type_id,
                  model: model,
                  brand: brand,
                  color: color,
                  plate: plate,
                  year: year
                };
                console.log("Obj", obj);
                this.request.post('driver/update_driver', obj).subscribe(function (res) {
                  _this3.ui.loadingDissmiss();

                  _this3.auth.setVehicles({
                    transport_type_id: transport_type_id,
                    model: model,
                    brand: brand,
                    color: color,
                    plate: plate,
                    year: year
                  });

                  _this3.ui.showToast("Usuario actualizado exitosamente", function () {
                    _this3.router.navigate(['/tabs/profile']);
                  });
                }, function (err) {
                  _this3.ui.loadingDissmiss();

                  console.log(err);

                  _this3.ui.showToast(err.error.messages[0]);
                });
              } else {
                this.ui.showToast("Verifique su conexión");
              }
            }
          } else {
            this.ui.showToast("Debe cambiar alguno de los campos");
          }
        }
      }]);

      return VehicleInformationPage;
    }();

    VehicleInformationPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: src_app_services_common_atrributes_service__WEBPACK_IMPORTED_MODULE_7__["CommonAtrributesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
      }, {
        type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_9__["NetworkStatusService"]
      }];
    };

    VehicleInformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vehicle-information',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./vehicle-information.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./vehicle-information.page.scss */
      "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.scss"))["default"]]
    })], VehicleInformationPage);
    /***/
  }
}]);
//# sourceMappingURL=screens-screens-tabs-vehicle-information-vehicle-information-module-es5.js.map