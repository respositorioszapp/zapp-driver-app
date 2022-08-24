function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~screens-forms-other-documents-other-documents-module~screens-screens-tabs-documents-documents-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/other-documents/other-documents.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/other-documents/other-documents.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensFormsOtherDocumentsOtherDocumentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\" style=\"position: relative;\" mode=\"ios\">\n    <ion-title style=\"position: absolute; left: 5px;bottom:14px\">Otros\n    </ion-title>\n    <ion-button (click)=\"dismiss()\" style=\"position: absolute; right: 5px;bottom:5px\">\n      <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"!img; else elseTemplate\">\n    <form [formGroup]=\"document_information\">\n      <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n        <ion-select placeholder=\"Tipo de documento\" formControlName=\"document_type\" style=\"display: contents;\" required\n          [selectedText]=\"document.name\">\n          <ion-select-option *ngFor=\"let item of documents\" [value]=\"item.id\">{{item.name }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </form>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <ion-img [src] = \"img.url\" style=\"width: 100%;height: 300px;\" (click)=\"getFile()\">\n\n    </ion-img>\n  </ng-template>\n\n\n  <ion-button (click)=\"getFile()\" expand=\"block\" mode=\"ios\" color=\"primary\" class=\"ion-margin-bottom\">\n    Subir documento\n  </ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/screens/forms/other-documents/other-documents.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/screens/forms/other-documents/other-documents.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensFormsOtherDocumentsOtherDocumentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZm9ybXMvb3RoZXItZG9jdW1lbnRzL290aGVyLWRvY3VtZW50cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/screens/forms/other-documents/other-documents.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/screens/forms/other-documents/other-documents.page.ts ***!
    \***********************************************************************/

  /*! exports provided: OtherDocumentsPage */

  /***/
  function srcAppScreensFormsOtherDocumentsOtherDocumentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherDocumentsPage", function () {
      return OtherDocumentsPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/network-status.service */
    "./src/app/services/network-status.service.ts");

    var OtherDocumentsPage = /*#__PURE__*/function () {
      function OtherDocumentsPage(ui, fb, photo, auth, request, network) {
        _classCallCheck(this, OtherDocumentsPage);

        this.ui = ui;
        this.fb = fb;
        this.photo = photo;
        this.auth = auth;
        this.request = request;
        this.network = network;
        this.document = {
          id: "",
          name: ""
        };
        this.document_information = this.fb.group({
          document_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.other_documents = [];
      }

      _createClass(OtherDocumentsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this = this;

            var loader;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.img) {
                      _context3.next = 4;
                      break;
                    }

                    this.document_information.setValue({
                      document_type: this.img["document_type_id "]
                    });
                    _context3.next = 12;
                    break;

                  case 4:
                    if (!this.network.getNetworkStatus().connected) {
                      _context3.next = 11;
                      break;
                    }

                    _context3.next = 7;
                    return this.ui.loading("Por favor espere...");

                  case 7:
                    loader = _context3.sent;
                    this.request.get('list/attributes?parameter_id=8').subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                this.documents = res.data;
                                _context.next = 3;
                                return loader;

                              case 3:
                                _context.sent.dismiss();

                              case 4:
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

                              case 3:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));
                    });
                    _context3.next = 12;
                    break;

                  case 11:
                    this.ui.showToast("Verifique su conexión");

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.ui.dismiss();
        }
      }, {
        key: "takePhoto",
        value: function takePhoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;

                    if (!this.network.getNetworkStatus().connected) {
                      _context6.next = 9;
                      break;
                    }

                    _context6.next = 4;
                    return this.photo.selectImageSource();

                  case 4:
                    _context6.next = 6;
                    return _context6.sent;

                  case 6:
                    this.photo.imageSubject.subscribe(function (image) {
                      var url = "driver/documents/".concat(_this2.auth.user.id, "/32");
                      var dat = new Date().getTime();
                      var name_file1 = "".concat(dat, "_").concat(_this2.auth.user.id, ".").concat(image.format);

                      var blob_image = _this2.photo.dataUrlToBlob(image.url);

                      var image_to_upload = _this2.photo.getFileImage(image.url, name_file1, image.format);

                      var data = new FormData();
                      data.append('photo', blob_image);

                      _this2.request.post(url, data).subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                          var _this3 = this;

                          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  console.log("Este es el res", res);
                                  this.ui.showToast("Documento subido", function () {
                                    _this3.dismiss();
                                  });

                                case 2:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                          var error, message;
                          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  if (!(err.status == 400)) {
                                    _context5.next = 5;
                                    break;
                                  }

                                  error = JSON.stringify(err.error);
                                  message = err.error.messages ? err.error.messages[0].length == 1 ? err.error.messages : err.error.messages[0] : 'No hay mensaje';
                                  _context5.next = 5;
                                  return this.ui.presentAlert({
                                    mode: 'ios',
                                    header: message,
                                    buttons: [{
                                      text: 'Aceptar',
                                      handler: function handler() {}
                                    }]
                                  });

                                case 5:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      });
                    });
                    _context6.next = 10;
                    break;

                  case 9:
                    this.ui.showToast("Verifique su conexión");

                  case 10:
                    _context6.next = 15;
                    break;

                  case 12:
                    _context6.prev = 12;
                    _context6.t0 = _context6["catch"](0);
                    console.log("Error", _context6.t0);

                  case 15:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[0, 12]]);
          }));
        }
      }, {
        key: "getFile",
        value: function getFile() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var _this4 = this;

            var document_type;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (!this.document_information.valid) {
                      _context10.next = 13;
                      break;
                    }

                    document_type = this.document_information.value.document_type;

                    if (!this.network.getNetworkStatus().connected) {
                      _context10.next = 10;
                      break;
                    }

                    _context10.next = 5;
                    return this.photo.selectImageSource();

                  case 5:
                    _context10.next = 7;
                    return _context10.sent;

                  case 7:
                    this.photo.imageSubject.subscribe(function (image) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                        var _this5 = this;

                        var url, data, dat, name_file1, blob_image, image_to_upload, loader;
                        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                if (this.img) {
                                  this.img.url = image.dataUrl;
                                }

                                url = this.img ? "driver/update_documents/".concat(this.img.document_id) : "driver/documents/".concat(this.auth.user.id, "/").concat(document_type);
                                data = new FormData();
                                dat = new Date().getTime();
                                name_file1 = "".concat(dat, "_").concat(this.auth.user.id, ".").concat(image.format);
                                blob_image = this.photo.dataUrlToBlob(image.dataUrl);
                                image_to_upload = this.photo.getFileImage(image.dataUrl, name_file1, image.format);
                                data.append('photo', blob_image);
                                _context9.next = 10;
                                return this.ui.loading("Por favor espere...");

                              case 10:
                                loader = _context9.sent;
                                this.request.post(url, data).subscribe(function (res) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                                    var _this6 = this;

                                    var find;
                                    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                                      while (1) {
                                        switch (_context7.prev = _context7.next) {
                                          case 0:
                                            _context7.next = 2;
                                            return loader;

                                          case 2:
                                            _context7.sent.dismiss();

                                            if (this.img) {
                                              find = this.others.findIndex(function (o) {
                                                return o.document_id == _this6.img;
                                              });

                                              if (find != -1) {
                                                this.others[find] = this.img;
                                              }
                                            } else {
                                              this.others.push({
                                                url: image.dataUrl
                                              });
                                            }

                                            _context7.next = 6;
                                            return this.ui.presentAlert({
                                              mode: 'ios',
                                              header: '¡Archivo subido con éxito!',
                                              buttons: [{
                                                text: 'Aceptar',
                                                handler: function handler() {}
                                              }]
                                            });

                                          case 6:
                                          case "end":
                                            return _context7.stop();
                                        }
                                      }
                                    }, _callee7, this);
                                  }));
                                }, function (err) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                                    var error, message;
                                    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                                      while (1) {
                                        switch (_context8.prev = _context8.next) {
                                          case 0:
                                            _context8.next = 2;
                                            return loader;

                                          case 2:
                                            _context8.sent.dismiss();

                                            if (!(err.status == 400)) {
                                              _context8.next = 8;
                                              break;
                                            }

                                            error = JSON.stringify(err.error);
                                            message = err.error.messages ? err.error.messages[0].length == 1 ? err.error.messages : err.error.messages[0] : 'No hay mensaje';
                                            _context8.next = 8;
                                            return this.ui.presentAlert({
                                              mode: 'ios',
                                              header: message,
                                              buttons: [{
                                                text: 'Aceptar',
                                                handler: function handler() {}
                                              }]
                                            });

                                          case 8:
                                            console.log("Err", err);

                                          case 9:
                                          case "end":
                                            return _context8.stop();
                                        }
                                      }
                                    }, _callee8, this);
                                  }));
                                });

                              case 12:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this);
                      }));
                    });
                    _context10.next = 11;
                    break;

                  case 10:
                    this.ui.showToast("Verifique su conexión");

                  case 11:
                    _context10.next = 14;
                    break;

                  case 13:
                    this.ui.showToast("Debe escoger un tipo de documento");

                  case 14:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }]);

      return OtherDocumentsPage;
    }();

    OtherDocumentsPage.ctorParameters = function () {
      return [{
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]
      }, {
        type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OtherDocumentsPage.prototype, "documents", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OtherDocumentsPage.prototype, "others", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OtherDocumentsPage.prototype, "img", void 0);
    OtherDocumentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-other-documents',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./other-documents.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/other-documents/other-documents.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./other-documents.page.scss */
      "./src/app/screens/forms/other-documents/other-documents.page.scss"))["default"]]
    })], OtherDocumentsPage);
    /***/
  }
}]);
//# sourceMappingURL=default~screens-forms-other-documents-other-documents-module~screens-screens-tabs-documents-documents-module-es5.js.map