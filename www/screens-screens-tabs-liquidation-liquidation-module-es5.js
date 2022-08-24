function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-liquidation-liquidation-module"], {
  /***/
  "./node_modules/capacitor-blob-writer/dist/plugin.esm.js":
  /*!***************************************************************!*\
    !*** ./node_modules/capacitor-blob-writer/dist/plugin.esm.js ***!
    \***************************************************************/

  /*! exports provided: writeFile */

  /***/
  function node_modulesCapacitorBlobWriterDistPluginEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "writeFile", function () {
      return writeFile;
    });
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */


    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    var Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].Filesystem; // By choosing a chunk size which is a multiple of 3, we avoid a bug in
    // Filesystem.appendFile, only on the web platform, which corrupts files by
    // inserting Base64 padding characters within the file. See
    // https://github.com/ionic-team/capacitor-plugins/issues/649.

    var chunkSize = 3 * 128 * 1024;

    function arrayBufferToBase64(buffer) {
      var bytes = new Uint8Array(buffer);
      var binary = '';
      var i = 0;

      while (i < bytes.byteLength) {
        binary += String.fromCharCode(bytes[i]);
        i++;
      }

      return btoa(binary);
    }

    function append(directory, path, data) {
      if (data.size === 0) {
        return Promise.resolve();
      }

      return new Response(data.slice(0, chunkSize)).arrayBuffer().then(function (buffer) {
        return Filesystem.appendFile({
          directory: directory,
          path: path,
          data: arrayBufferToBase64(buffer)
        });
      }).then(function () {
        return append(directory, path, data.slice(chunkSize));
      });
    }

    function writeFileViaBridge(directory, path, data, recursive) {
      // create & truncate file
      return Filesystem.writeFile({
        directory: directory,
        path: path,
        recursive: recursive,
        data: ''
      }).then(function (_ref) {
        var uri = _ref.uri;
        // write file incrementally to be enconomical with memory
        return append(directory, path, data).then(function () {
          return uri;
        });
      });
    }

    var writeFileViaBridge$1 = Object.freeze(writeFileViaBridge);

    var BlobWriterWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
      _inherits(BlobWriterWeb, _capacitor_core__WEBP);

      var _super = _createSuper(BlobWriterWeb);

      function BlobWriterWeb() {
        _classCallCheck(this, BlobWriterWeb);

        return _super.call(this, {
          name: 'BlobWriter',
          platforms: ['web']
        });
      }

      _createClass(BlobWriterWeb, [{
        key: "getConfig",
        value: function getConfig() {
          var err = new Error('Not implemented for web');
          err.code = 'NOT_IMPLEMENTED';
          return Promise.reject(err);
        }
      }]);

      return BlobWriterWeb;
    }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

    var BlobWriter = new BlobWriterWeb();
    Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(BlobWriter);

    function writeFile(options) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$Promise$all, _yield$Promise$all2, _yield$Promise$all2$, baseUrl, authToken, uri, absolutePath, queryString, url, _yield$fetch, status;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Promise.all([_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].BlobWriter.getConfig(), _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].Filesystem.getUri({
                  path: options.path,
                  directory: options.directory
                })]);

              case 3:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                _yield$Promise$all2$ = _yield$Promise$all2[0];
                baseUrl = _yield$Promise$all2$.baseUrl;
                authToken = _yield$Promise$all2$.authToken;
                uri = _yield$Promise$all2[1].uri;
                absolutePath = uri.replace('file://', '');
                queryString = options.recursive ? '?recursive=true' : '';
                url = baseUrl + absolutePath + queryString;
                _context.next = 14;
                return fetch(url, {
                  headers: {
                    authorization: authToken
                  },
                  method: 'put',
                  body: options.data
                });

              case 14:
                _yield$fetch = _context.sent;
                status = _yield$fetch.status;

                if (!(status !== 204)) {
                  _context.next = 18;
                  break;
                }

                throw new Error('unexpected HTTP status: ' + status);

              case 18:
                return _context.abrupt("return", {
                  uri: uri
                });

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](0);

                if (!(typeof options.fallback === 'function' ? options.fallback(_context.t0) : options.fallback !== false)) {
                  _context.next = 26;
                  break;
                }

                if (_context.t0.code !== 'NOT_IMPLEMENTED') {
                  console.error(_context.t0);
                }

                return _context.abrupt("return", writeFileViaBridge$1(options.directory, options.path, options.data, options.recursive).then(function (uri) {
                  return {
                    uri: uri
                  };
                }));

              case 26:
                throw _context.t0;

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 21]]);
      }));
    } //# sourceMappingURL=plugin.esm.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/liquidation/liquidation.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/liquidation/liquidation.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensScreensTabsLiquidationLiquidationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Liquidación</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-6 ion-text-center w-50\" style=\"padding: 0 10px\" >\n      <h4 class=\"ion-text-center\">Fecha Inicio\n      </h4>\n      <ion-item class=\"input-text date\" (click)=\"init.open()\">\n        <label  >{{min_date | date:\"dd/MM/yyyy\"}} </label>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" class=\"hidden\" #init cancelText=\"Cancelar\" doneText=\"Guardar\" mode=\"ios\"\n          [max]=\"max_date\" [(ngModel)]=\"min_date\" ></ion-datetime>\n        <ion-button  fill=\"clear\" slot=\"end\" class=\"ion-no-padding ion-no-margin\"    >\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </div>\n    <div class=\"col-sm-6 ion-text-center w-50\" style=\"padding: 0 10px\">\n      <h4 class=\"ion-text-center\">Fecha Fin\n      </h4>\n      <ion-item class=\"input-text date\" (click)=\"end.open()\">\n        <label  >{{max_date | date:\"dd/MM/yyyy\" }} </label>\n        <ion-datetime class=\"input-text hidden\" displayFormat=\"DD/MM/YYYY\" #end cancelText=\"Cancelar\" doneText=\"Guardar\" mode=\"ios\"\n          [(ngModel)]=\"max_date\" ></ion-datetime>\n        <ion-button  fill=\"clear\" slot=\"end\"  class=\"ion-no-padding ion-no-margin\" >\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n    </div>\n  </div>\n  <div class=\"row ion-text-center\">\n    <ion-button (click)=\"download()\" style=\"text-align: center;\n    margin: 10px auto;\">Descargar <ion-icon name=\"arrow-down-circle-outline\"></ion-icon></ion-button>\n  </div>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/enums/mime-types.enum.ts":
  /*!******************************************!*\
    !*** ./src/app/enums/mime-types.enum.ts ***!
    \******************************************/

  /*! exports provided: MimeTypes */

  /***/
  function srcAppEnumsMimeTypesEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MimeTypes", function () {
      return MimeTypes;
    });

    var MimeTypes;

    (function (MimeTypes) {
      MimeTypes["Excel"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    })(MimeTypes || (MimeTypes = {}));
    /***/

  },

  /***/
  "./src/app/screens/screens-tabs/liquidation/liquidation-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/liquidation/liquidation-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: LiquidationPageRoutingModule */

  /***/
  function srcAppScreensScreensTabsLiquidationLiquidationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiquidationPageRoutingModule", function () {
      return LiquidationPageRoutingModule;
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


    var _liquidation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./liquidation.page */
    "./src/app/screens/screens-tabs/liquidation/liquidation.page.ts");

    var routes = [{
      path: '',
      component: _liquidation_page__WEBPACK_IMPORTED_MODULE_3__["LiquidationPage"]
    }];

    var LiquidationPageRoutingModule = /*#__PURE__*/_createClass(function LiquidationPageRoutingModule() {
      _classCallCheck(this, LiquidationPageRoutingModule);
    });

    LiquidationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LiquidationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/liquidation/liquidation.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/liquidation/liquidation.module.ts ***!
    \************************************************************************/

  /*! exports provided: LiquidationPageModule */

  /***/
  function srcAppScreensScreensTabsLiquidationLiquidationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiquidationPageModule", function () {
      return LiquidationPageModule;
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


    var _liquidation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./liquidation-routing.module */
    "./src/app/screens/screens-tabs/liquidation/liquidation-routing.module.ts");
    /* harmony import */


    var _liquidation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./liquidation.page */
    "./src/app/screens/screens-tabs/liquidation/liquidation.page.ts");

    var LiquidationPageModule = /*#__PURE__*/_createClass(function LiquidationPageModule() {
      _classCallCheck(this, LiquidationPageModule);
    });

    LiquidationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _liquidation_routing_module__WEBPACK_IMPORTED_MODULE_5__["LiquidationPageRoutingModule"]],
      declarations: [_liquidation_page__WEBPACK_IMPORTED_MODULE_6__["LiquidationPage"]]
    })], LiquidationPageModule);
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/liquidation/liquidation.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/screens/screens-tabs/liquidation/liquidation.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensScreensTabsLiquidationLiquidationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy10YWJzL2xpcXVpZGF0aW9uL2xpcXVpZGF0aW9uLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/screens/screens-tabs/liquidation/liquidation.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/screens/screens-tabs/liquidation/liquidation.page.ts ***!
    \**********************************************************************/

  /*! exports provided: LiquidationPage */

  /***/
  function srcAppScreensScreensTabsLiquidationLiquidationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiquidationPage", function () {
      return LiquidationPage;
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


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/ui.service */
    "./src/app/services/ui.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var src_app_enums_mime_types_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/enums/mime-types.enum */
    "./src/app/enums/mime-types.enum.ts");
    /* harmony import */


    var capacitor_blob_writer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! capacitor-blob-writer */
    "./node_modules/capacitor-blob-writer/dist/plugin.esm.js");

    var _capacitor_core__WEBP2 = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"],
        Filesystem = _capacitor_core__WEBP2.Filesystem,
        Storage = _capacitor_core__WEBP2.Storage;

    var LiquidationPage = /*#__PURE__*/function () {
      function LiquidationPage(transfer, file, auth, http, ui, iab, fileOpener, photo) {
        _classCallCheck(this, LiquidationPage);

        this.transfer = transfer;
        this.file = file;
        this.auth = auth;
        this.http = http;
        this.ui = ui;
        this.iab = iab;
        this.fileOpener = fileOpener;
        this.photo = photo;
      }

      _createClass(LiquidationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          // this.min_date = this.formatDated(y);
          // console.log("Fecha min", this.min_date)
          // this.max_date = this.formatDated(maxf);
          var today = new Date(); //This method is for get the first day of a week

          var firstDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfWeek"])(today);
          this.min_date = this.formatDated(firstDay);
          this.max_date = this.formatDated(today);
        }
      }, {
        key: "formatDated",
        value: function formatDated(date) {
          var d = new Date(date),
              day = '' + d.getDate(),
              month = '' + (d.getMonth() + 1),
              year = d.getFullYear();
          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;
          console.log("Fecha", [year, month, day].join('-'));
          return [year, month, day].join('-');
        }
      }, {
        key: "download",
        value: function download() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this = this;

            var url, loader;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    // Download a file:
                    //exports_to_excel/liquidation_of_orders_driver?driver_id=6&start_date=2020/12/20&end_date=2020/12/22
                    url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BASEURL + "exports_to_excel/liquidation_of_orders_of_driver?driver_id=" + this.auth.user.id + "&start_date=" + this.min_date.split("T")[0] + "T00:00:00" + "&end_date=" + this.max_date.split("T")[0] + "T23:59:00";
                    _context4.next = 3;
                    return this.ui.loading("Por favor espere...");

                  case 3:
                    loader = _context4.sent;
                    this.http.get(url, {
                      responseType: 'blob'
                    }).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        var file_name, _yield$Object, uri, path, mimeType;

                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.prev = 0;
                                console.log("File", res);
                                file_name = "Liquidacion" + new Date().getTime() + ".xlsx"; // const base64 = await this.photo.blobToDataUrl(res) as string;

                                _context2.next = 5;
                                return loader;

                              case 5:
                                _context2.sent.dismiss();

                                _context2.next = 8;
                                return Object(capacitor_blob_writer__WEBPACK_IMPORTED_MODULE_14__["writeFile"])({
                                  path: file_name,
                                  directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["FilesystemDirectory"].Data,
                                  // data must be a Blob (creating a Blob which wraps other data types
                                  // is trivial)
                                  data: res,
                                  // create intermediate directories if they don't already exist
                                  // default: false
                                  recursive: true,
                                  // fallback to Filesystem.writeFile instead of throwing an error
                                  // (you may also specify a unary callback, which takes an Error and returns
                                  // a boolean)
                                  // default: true
                                  fallback: function fallback(err) {
                                    return err != undefined;
                                  }
                                });

                              case 8:
                                _yield$Object = _context2.sent;
                                uri = _yield$Object.uri;
                                console.log("Saved File", uri); //Save the file url to show it

                                path = uri; //Set the mime type for excel

                                mimeType = src_app_enums_mime_types_enum__WEBPACK_IMPORTED_MODULE_13__["MimeTypes"].Excel.toString();

                                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Capacitor"].platform !== 'web') {
                                  this.fileOpener.open(path, mimeType).then(function () {
                                    console.log("File is opened");
                                  })["catch"](function (err) {
                                    console.log("Error opening file", err);
                                  });
                                }

                                _context2.next = 22;
                                break;

                              case 16:
                                _context2.prev = 16;
                                _context2.t0 = _context2["catch"](0);
                                _context2.next = 20;
                                return loader;

                              case 20:
                                _context2.sent.dismiss();

                                this.ui.showToast("Error", _context2.t0);

                              case 22:
                                this.ui.showToast("Descargado");

                              case 23:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this, [[0, 16]]);
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

                                this.ui.showToast("El mensajero no tiene liquidación en este rango");

                              case 4:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return LiquidationPage;
    }();

    LiquidationPage.ctorParameters = function () {
      return [{
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
      }, {
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]
      }, {
        type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"]
      }, {
        type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_12__["PhotoService"]
      }];
    };

    LiquidationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-liquidation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./liquidation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/liquidation/liquidation.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./liquidation.page.scss */
      "./src/app/screens/screens-tabs/liquidation/liquidation.page.scss"))["default"]]
    })], LiquidationPage);
    /***/
  }
}]);
//# sourceMappingURL=screens-screens-tabs-liquidation-liquidation-module-es5.js.map