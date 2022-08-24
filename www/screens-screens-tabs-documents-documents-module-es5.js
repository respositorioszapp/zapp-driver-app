function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-documents-documents-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/documents/documents.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/documents/documents.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensScreensTabsDocumentsDocumentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"warning\">\n  <ion-button fill=\"clear\" (click)=\"back()\" style=\"position: absolute;\n  left: 0px;\n  padding: 10px;\">\n    <ion-icon name=\"arrow-back-outline\" slot=\"icon-only\"></ion-icon>\n  </ion-button>\n  <div style=\"position: relative;\">\n    <div class=\"ion-text-center margin-top-15vh ion-padding-bottom\" style=\"width: 60%;\n    margin: auto;\n    position: absolute;\n    left: 0;\n    right: 0;\">\n      <img src=\"assets/imgs/logo-morado.png\" width=\"100\">\n    </div>\n  </div>\n  <ion-card style=\"margin-top:50px\">\n    <ion-card-header *ngIf=\"!getDocumentsComplete()\">\n      <ion-card-subtitle class=\"ion-text-center\">\n        <h2><span class=\"black-color-text\">Completa tu registro</span></h2>\n        <br>\n        Faltan <ion-badge color=\"primary\">{{getDocumentsAlreadyFullFill()}}</ion-badge> documentos\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <!-- <ion-list>\n        <ion-item class=\"ion-text-center\" >\n\n        </ion-item>\n      </ion-list> -->\n      <ion-grid>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">Cédula</ion-label>\n          </div>\n          <ion-col size=\"6\" *ngFor=\"let item of filter(imgs,0,1);let i = index\">\n\n            <img [src]=\"item.url\" alt=\"\" srcset=\"\" style=\"width: 150px;\n          height: 150px;\n          text-align: center;\n          margin: auto;\" (click)=\"takePhoto(item)\">\n            <ion-label>{{i%2==0 ? 'Frontal': 'Trasera'}}</ion-label>\n            <ion-progress-bar type=\"indeterminate\" *ngIf=\"item.loading\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">Tarjeta de propiedad</ion-label>\n          </div>\n          <ion-col size=\"6\" *ngFor=\"let item of filter(imgs,2,3);let i = index\">\n\n            <img [src]=\"item.url\" alt=\"\" srcset=\"\" style=\"width: 150px;\n          height: 150px;\n          text-align: center;\n          margin: auto;\" (click)=\"takePhoto(item)\">\n            <ion-label>{{i%2==0 ? 'Frontal': 'Trasera'}}</ion-label>\n            <ion-progress-bar type=\"indeterminate\" *ngIf=\"item.loading\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">Licencia de conducción</ion-label>\n          </div>\n          <ion-col size=\"6\" *ngFor=\"let item of filter(imgs,4,5);let i = index\">\n\n            <img [src]=\"item.url\" alt=\"\" srcset=\"\" style=\"width: 150px;\n          height: 150px;\n          text-align: center;\n          margin: auto;\" (click)=\"takePhoto(item)\">\n            <ion-label>{{i%2==0 ? 'Frontal': 'Trasera'}}</ion-label>\n            <ion-progress-bar type=\"indeterminate\" *ngIf=\"item.loading\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">Fotos del vehículo</ion-label>\n          </div>\n\n          <ion-col size=\"6\" *ngFor=\"let item of filter(imgs,8,9);let i = index\">\n\n            <img [src]=\"item.url\" alt=\"\" srcset=\"\" style=\"width: 150px;\n          height: 150px;\n          text-align: center;\n          margin: auto;\" (click)=\"takePhoto(item)\">\n            <ion-label>{{i%2==0 ? 'Frontal': 'Trasera'}}</ion-label>\n            <ion-progress-bar type=\"indeterminate\" *ngIf=\"item.loading\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">SOAT</ion-label>\n          </div>\n          <ion-col size=\"12\">\n\n            <img [src]=\"imgs[6].url\" alt=\"\" srcset=\"\" style=\"width: 100%;\n          height: 150px;\n          text-align: center;\n          margin: auto;\" (click)=\"takePhoto(imgs[6])\">\n            <ion-progress-bar type=\"indeterminate\" *ngIf=\"imgs[6].loading\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">Tecnomecánica</ion-label>\n          </div>\n          <ion-col size=\"12\">\n\n            <img [src]=\"imgs[7].url\" alt=\"\" srcset=\"\" style=\"width: 100%;\n          height: 150px;\n          text-align: center;\n          margin: auto;\" (click)=\"takePhoto(imgs[7])\">\n            <ion-progress-bar type=\"indeterminate\" *ngIf=\"imgs[7].loading\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">Otros</ion-label>\n          </div>\n          <ng-container *ngIf=\"others.length > 0; else elseTemp\">\n            <ion-row>\n              <ion-col [size]=\"others.length == 1 ? '12':'6'\" *ngFor=\"let item of others\" (click)=\"updateImage(item)\">\n                <ion-img [src]=\"item.url\" style=\"width:100%;height: 100px;\"></ion-img>\n                <ion-label>{{item[\"document_type \"]}}</ion-label>\n              </ion-col>\n              <ion-button fill=\"outline\" color=\"primary\" expand=\"block\" mode=\"ios\" class=\"grey-color\" (click)=\"getFile()\" *ngIf=\"!getOtherSuccesfull()\">\n                <ion-icon name=\"add-circle-outline\" slot=\"icon-only\" style=\"font-size: 3m;\"></ion-icon>\n              </ion-button>\n            </ion-row>\n            \n          </ng-container>\n          <ng-template #elseTemp>\n            <ion-col size=\"12\">\n              <ion-button fill=\"outline\" color=\"primary\" expand=\"block\" mode=\"ios\" class=\"grey-color\"\n                (click)=\"getFile()\">\n                <ion-icon name=\"add-circle-outline\" slot=\"icon-only\" style=\"font-size: 3m;\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ng-template>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/documents/documents-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/documents/documents-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: DocumentsPageRoutingModule */

  /***/
  function srcAppScreensScreensTabsDocumentsDocumentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentsPageRoutingModule", function () {
      return DocumentsPageRoutingModule;
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


    var _documents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./documents.page */
    "./src/app/screens/screens-tabs/documents/documents.page.ts");

    var routes = [{
      path: '',
      component: _documents_page__WEBPACK_IMPORTED_MODULE_3__["DocumentsPage"]
    }];

    var DocumentsPageRoutingModule = /*#__PURE__*/_createClass(function DocumentsPageRoutingModule() {
      _classCallCheck(this, DocumentsPageRoutingModule);
    });

    DocumentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DocumentsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/documents/documents.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/screens/screens-tabs/documents/documents.module.ts ***!
    \********************************************************************/

  /*! exports provided: DocumentsPageModule */

  /***/
  function srcAppScreensScreensTabsDocumentsDocumentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentsPageModule", function () {
      return DocumentsPageModule;
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


    var _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./documents-routing.module */
    "./src/app/screens/screens-tabs/documents/documents-routing.module.ts");
    /* harmony import */


    var _documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./documents.page */
    "./src/app/screens/screens-tabs/documents/documents.page.ts");

    var DocumentsPageModule = /*#__PURE__*/_createClass(function DocumentsPageModule() {
      _classCallCheck(this, DocumentsPageModule);
    });

    DocumentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentsPageRoutingModule"]],
      declarations: [_documents_page__WEBPACK_IMPORTED_MODULE_6__["DocumentsPage"]]
    })], DocumentsPageModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/documents/documents.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/screens/screens-tabs/documents/documents.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensScreensTabsDocumentsDocumentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy10YWJzL2RvY3VtZW50cy9kb2N1bWVudHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/documents/documents.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/screens/screens-tabs/documents/documents.page.ts ***!
    \******************************************************************/

  /*! exports provided: DocumentsPage */

  /***/
  function srcAppScreensScreensTabsDocumentsDocumentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentsPage", function () {
      return DocumentsPage;
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


    var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/photo.service */
    "./src/app/services/photo.service.ts");
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


    var src_app_screens_forms_other_documents_other_documents_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/screens/forms/other-documents/other-documents.page */
    "./src/app/screens/forms/other-documents/other-documents.page.ts");
    /* harmony import */


    var src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/realtime.service */
    "./src/app/services/realtime.service.ts");
    /* harmony import */


    var _services_network_status_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/network-status.service */
    "./src/app/services/network-status.service.ts");

    var DocumentsPage = /*#__PURE__*/function () {
      function DocumentsPage(photo, auth, request, ui, router, loadingController, realtime, network) {
        _classCallCheck(this, DocumentsPage);

        this.photo = photo;
        this.auth = auth;
        this.request = request;
        this.ui = ui;
        this.router = router;
        this.loadingController = loadingController;
        this.realtime = realtime;
        this.network = network;
        this.imgs = [{
          id: 15,
          url: "assets/imgs/img-default.jpg",
          format: "",
          document_type: "Cédula frontal"
        }, {
          id: 16,
          url: "assets/imgs/img-default.jpg",
          format: "",
          document_type: "Cedula trasera"
        }, {
          id: 17,
          url: "assets/imgs/img-default.jpg",
          format: "",
          document_type: "Tarjeta de propiedad frontal"
        }, {
          id: 18,
          url: "assets/imgs/img-default.jpg",
          format: "",
          document_type: "Tarjeta de propiedad trasera"
        }, {
          id: 19,
          url: "assets/imgs/img-default.jpg",
          format: "",
          document_type: "Licencia de conduccion frontal"
        }, {
          id: 20,
          url: "assets/imgs/img-default.jpg",
          format: "",
          document_type: "Licencia de conduccion trasera"
        }, {
          id: 26,
          url: "assets/imgs/img-default.jpg",
          format: "",
          document_type: "Soat"
        }, {
          id: 27,
          url: "assets/imgs/img-default.jpg",
          format: "",
          document_type: "Tecnomecanica"
        }, {
          id: 28,
          url: "assets/imgs/img-default.jpg",
          format: "",
          document_type: "Foto del vehiculo frontal"
        }, {
          id: 29,
          url: "assets/imgs/img-default.jpg",
          format: "",
          document_type: "Foto del vehiculo trasera"
        }];
        this.others = [{
          id: 32,
          url: "assets/imgs/img-default.jpg",
          format: "",
          document_type: "Recibo Servicio público"
        }, {
          id: 33,
          url: "assets/imgs/img-default.jpg",
          format: "",
          document_type: "Hoja de vida"
        }];
        this.documents_verified = false;
      }

      _createClass(DocumentsPage, [{
        key: "filter",
        value: function filter(array, start, end) {
          return array.filter(function (d, i) {
            return i >= start && i <= end;
          });
        }
      }, {
        key: "getDocumentsComplete",
        value: function getDocumentsComplete() {
          var res = Math.abs(Number(this.auth.vehicles.year) - new Date().getFullYear());
          if (res > 2) return this.imgs.every(function (i) {
            return i.url && i.url != "assets/imgs/img-default.jpg";
          });else {
            var ings = this.imgs.filter(function (i) {
              return i.id != 27;
            });
            return ings.every(function (i) {
              return i.url && i.url != "assets/imgs/img-default.jpg";
            });
          }
        }
      }, {
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
                    if (this.subscription) {
                      this.subscription.unsubscribe();
                    }

                    this.imgs = [{
                      id: 15,
                      url: "assets/imgs/img-default.jpg",
                      format: "",
                      document_type: "Cédula frontal"
                    }, {
                      id: 16,
                      url: "assets/imgs/img-default.jpg",
                      format: "",
                      document_type: "Cedula trasera"
                    }, {
                      id: 17,
                      url: "assets/imgs/img-default.jpg",
                      format: "",
                      document_type: "Tarjeta de propiedad frontal"
                    }, {
                      id: 18,
                      url: "assets/imgs/img-default.jpg",
                      format: "",
                      document_type: "Tarjeta de propiedad trasera"
                    }, {
                      id: 19,
                      url: "assets/imgs/img-default.jpg",
                      format: "",
                      document_type: "Licencia de conduccion frontal"
                    }, {
                      id: 20,
                      url: "assets/imgs/img-default.jpg",
                      format: "",
                      document_type: "Licencia de conduccion trasera"
                    }, {
                      id: 26,
                      url: "assets/imgs/img-default.jpg",
                      format: "",
                      document_type: "Soat"
                    }, {
                      id: 27,
                      url: "assets/imgs/img-default.jpg",
                      format: "",
                      document_type: "Tecnomecanica"
                    }, {
                      id: 28,
                      url: "assets/imgs/img-default.jpg",
                      format: "",
                      document_type: "Foto del vehiculo frontal"
                    }, {
                      id: 29,
                      url: "assets/imgs/img-default.jpg",
                      format: "",
                      document_type: "Foto del vehiculo trasera"
                    }];

                    if (!this.network.getNetworkStatus().connected) {
                      _context4.next = 12;
                      break;
                    }

                    _context4.next = 5;
                    return this.loadingController.create({
                      message: "Por favor espere..."
                    });

                  case 5:
                    loader = _context4.sent;
                    _context4.next = 8;
                    return loader.present();

                  case 8:
                    this.request.get("driver/documents/".concat(this.auth.user.id)).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        var _this2 = this;

                        var documents;
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                documents = res.data.documents;
                                console.log("Documents", documents);
                                this.currentDocuments = documents;
                                localStorage.setItem("currentDocuments", JSON.stringify(this.currentDocuments));
                                this.imgs = this.imgs.map(function (img) {
                                  var id = documents.filter(function (d) {
                                    return d["document_type_id "] == img.id;
                                  });
                                  var other = documents.filter(function (d) {
                                    return d["document_type_id "] == 32 || d["document_type_id "] == 33;
                                  });
                                  _this2.others = other;

                                  if (id.length > 0) {
                                    console.log("Id", id);
                                    var photo = id[id.length - 1].url;
                                    var document_id = id[id.length - 1].document_id;
                                    return Object.assign(Object.assign({}, img), {
                                      url: photo,
                                      document_id: document_id
                                    });
                                  }

                                  return img;
                                });
                                _context2.next = 7;
                                return loader;

                              case 7:
                                _context2.sent.dismiss();

                              case 8:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
                    this.request.get("driver/documents_verified/".concat(this.auth.user.id)).subscribe(function (res) {
                      _this.documents_verified = true;
                    }, function (err) {
                      _this.documents_verified = false;
                    });
                    _context4.next = 13;
                    break;

                  case 12:
                    this.ui.showToast("Verifique su conexión");

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/tabs/profile']);
        }
      }, {
        key: "getDocumentsAlreadyFullFill",
        value: function getDocumentsAlreadyFullFill() {
          var res = Math.abs(Number(this.auth.vehicles.year) - new Date().getFullYear());

          if (res <= 2) {
            var images = this.imgs.filter(function (i) {
              return i.id != 27;
            });
            return images.filter(function (i) {
              return i.url == "assets/imgs/img-default.jpg";
            }).length;
          }

          return this.imgs.filter(function (i) {
            return i.url == "assets/imgs/img-default.jpg";
          }).length;
        }
      }, {
        key: "takePhoto",
        value: function takePhoto(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var _this3 = this;

            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;

                    if (!this.network.getNetworkStatus().connected) {
                      _context8.next = 9;
                      break;
                    }

                    _context8.next = 4;
                    return this.photo.selectImageSource();

                  case 4:
                    _context8.next = 6;
                    return _context8.sent;

                  case 6:
                    this.subscription = this.photo.imageSubject.subscribe(function (image) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                        var _this4 = this;

                        var loading, current_photo, current_photo_url, url, dat, name_file1, blob_image, image_to_upload, data;
                        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                if (!(Object.keys(image).length > 0)) {
                                  _context7.next = 17;
                                  break;
                                }

                                _context7.next = 3;
                                return this.ui.loading("Por favor espere...");

                              case 3:
                                loading = _context7.sent;
                                console.log("Item", item);
                                current_photo = item.url == "assets/imgs/img-default.jpg";
                                current_photo_url = item.url;
                                item.url = image.dataUrl;
                                item.format = image.format;
                                item.loading = "yes";
                                url = !current_photo ? "driver/update_documents/".concat(item.document_id) : "driver/documents/".concat(this.auth.user.id, "/").concat(item.id);
                                dat = new Date().getTime();
                                name_file1 = "".concat(dat, "_").concat(this.auth.user.id, ".").concat(item.format);
                                blob_image = this.photo.dataUrlToBlob(item.url);
                                image_to_upload = this.photo.getFileImage(item.url, name_file1, item.format);
                                data = new FormData();

                                if (image_to_upload instanceof File) {
                                  console.log("Image", JSON.stringify(image_to_upload));
                                  data.append('photo', blob_image);
                                  console.log(" Form Data", data);
                                  this.request.post(url, data, false, {
                                    enctype: 'multipart/form-data'
                                  }).subscribe(function (res) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                                      var _this5 = this;

                                      var documents_profile;
                                      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                                        while (1) {
                                          switch (_context5.prev = _context5.next) {
                                            case 0:
                                              _context5.next = 2;
                                              return loading;

                                            case 2:
                                              _context5.sent.dismiss();

                                              this.subscription.unsubscribe();
                                              console.log("Res", res);
                                              item.loading = undefined;
                                              console.log("Este es el res", res);

                                              if (!item.document_id) {
                                                item.document_id = res.data.id;
                                              }

                                              if (!this.currentDocuments.find(function (d) {
                                                return d.id == item.id;
                                              })) {
                                                this.currentDocuments.push(item);
                                                localStorage.setItem("currentDocuments", JSON.stringify(this.currentDocuments));
                                              }

                                              if (this.getDocumentsComplete()) {
                                                documents_profile = this.currentDocuments.find(function (d) {
                                                  return d["document_type_id "] == 21;
                                                });

                                                if (documents_profile) {
                                                  if (!this.documents_verified) {
                                                    this.realtime.getStatus().update({
                                                      verified: this.auth.user.verified,
                                                      documents: 1
                                                    });
                                                    this.ui.presentAlert({
                                                      mode: 'ios',
                                                      header: "Ha completado su registro exitosamente",
                                                      buttons: [{
                                                        text: 'Aceptar',
                                                        cssClass: 'secondary',
                                                        handler: function handler() {
                                                          _this5.router.navigate(['/tabs/home']);

                                                          console.log('cerrar');
                                                        }
                                                      }]
                                                    });
                                                  }
                                                } else {
                                                  this.ui.presentAlert({
                                                    mode: 'ios',
                                                    header: "Ha completado los registros del vehiculo, falta la foto de perfil",
                                                    buttons: [{
                                                      text: 'Aceptar',
                                                      cssClass: 'secondary',
                                                      handler: function handler() {
                                                        _this5.router.navigate(['/tabs/profile']);

                                                        console.log('cerrar');
                                                      }
                                                    }]
                                                  });
                                                }
                                              }

                                            case 10:
                                            case "end":
                                              return _context5.stop();
                                          }
                                        }
                                      }, _callee5, this);
                                    }));
                                  }, function (err) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                                      var message;
                                      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                                        while (1) {
                                          switch (_context6.prev = _context6.next) {
                                            case 0:
                                              _context6.next = 2;
                                              return loading;

                                            case 2:
                                              _context6.sent.dismiss();

                                              this.subscription.unsubscribe();
                                              item.loading = undefined;
                                              item.url = current_photo_url;
                                              console.log("Error", err); // this.ui.showToast("Archivo" + (image_to_upload && image_to_upload != null) ? image_to_upload.name : 'No existe')

                                              _context6.prev = 7;

                                              if (!(err.status == 400)) {
                                                _context6.next = 13;
                                                break;
                                              }

                                              message = err.error ? err.error.messages ? err.error.messages : 'Hubo un error y no hay message' : "Bad Request";
                                              message + "<br> " + JSON.stringify(err);
                                              this.ui.presentAlert({
                                                mode: 'ios',
                                                header: "Hubo un error",
                                                message: message,
                                                buttons: [{
                                                  text: 'Aceptar',
                                                  cssClass: 'secondary',
                                                  handler: function handler() {}
                                                }]
                                              });
                                              return _context6.abrupt("return");

                                            case 13:
                                              if (!(err.status == 500)) {
                                                _context6.next = 16;
                                                break;
                                              }

                                              this.ui.presentAlert({
                                                mode: 'ios',
                                                header: "Hubo un error",
                                                message: "En el servidor",
                                                buttons: [{
                                                  text: 'Aceptar',
                                                  cssClass: 'secondary',
                                                  handler: function handler() {}
                                                }]
                                              });
                                              return _context6.abrupt("return");

                                            case 16:
                                              this.ui.presentAlert({
                                                mode: 'ios',
                                                header: "Hubo un error no es el error",
                                                message: JSON.stringify(err),
                                                buttons: [{
                                                  text: 'Aceptar',
                                                  cssClass: 'secondary',
                                                  handler: function handler() {}
                                                }]
                                              });
                                              _context6.next = 22;
                                              break;

                                            case 19:
                                              _context6.prev = 19;
                                              _context6.t0 = _context6["catch"](7);
                                              this.ui.presentAlert({
                                                mode: 'ios',
                                                header: "Hubo un error de código",
                                                message: _context6.t0,
                                                buttons: [{
                                                  text: 'Aceptar',
                                                  cssClass: 'secondary',
                                                  handler: function handler() {}
                                                }]
                                              });

                                            case 22:
                                            case "end":
                                              return _context6.stop();
                                          }
                                        }
                                      }, _callee6, this, [[7, 19]]);
                                    }));
                                  });
                                } else {
                                  this.ui.showToast("Debe ser un archivo");
                                }

                              case 17:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    });
                    _context8.next = 10;
                    break;

                  case 9:
                    this.ui.showToast("Verifique su conexión");

                  case 10:
                    _context8.next = 15;
                    break;

                  case 12:
                    _context8.prev = 12;
                    _context8.t0 = _context8["catch"](0);
                    console.log("Error", _context8.t0);

                  case 15:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[0, 12]]);
          }));
        }
      }, {
        key: "getOtherSuccesfull",
        value: function getOtherSuccesfull() {
          return this.others.length == 2;
        }
      }, {
        key: "updateImage",
        value: function updateImage(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var modal, m;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (!this.network.getNetworkStatus().connected) {
                      _context9.next = 10;
                      break;
                    }

                    _context9.next = 3;
                    return this.ui.presentModal(src_app_screens_forms_other_documents_other_documents_page__WEBPACK_IMPORTED_MODULE_8__["OtherDocumentsPage"], {
                      img: item,
                      others: this.others
                    });

                  case 3:
                    modal = _context9.sent;
                    _context9.next = 6;
                    return modal.onDidDismiss();

                  case 6:
                    m = _context9.sent;
                    this.ionViewWillEnter();
                    _context9.next = 11;
                    break;

                  case 10:
                    this.ui.showToast("Verifique su conexión");

                  case 11:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "getFile",
        value: function getFile() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var modal, m;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (!this.network.getNetworkStatus().connected) {
                      _context10.next = 10;
                      break;
                    }

                    _context10.next = 3;
                    return this.ui.presentModal(src_app_screens_forms_other_documents_other_documents_page__WEBPACK_IMPORTED_MODULE_8__["OtherDocumentsPage"], {
                      documents: this.imgs,
                      others: this.others
                    });

                  case 3:
                    modal = _context10.sent;
                    _context10.next = 6;
                    return modal.onDidDismiss();

                  case 6:
                    m = _context10.sent;
                    this.ionViewWillEnter();
                    _context10.next = 11;
                    break;

                  case 10:
                    this.ui.showToast("Verifique su conexión");

                  case 11:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }]);

      return DocumentsPage;
    }();

    DocumentsPage.ctorParameters = function () {
      return [{
        type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }, {
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
        type: src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_9__["RealtimeService"]
      }, {
        type: _services_network_status_service__WEBPACK_IMPORTED_MODULE_10__["NetworkStatusService"]
      }];
    };

    DocumentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-documents',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./documents.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/documents/documents.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./documents.page.scss */
      "./src/app/screens/screens-tabs/documents/documents.page.scss"))["default"]]
    })], DocumentsPage);
    /***/
  }
}]);
//# sourceMappingURL=screens-screens-tabs-documents-documents-module-es5.js.map