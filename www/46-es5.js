function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46], {
  /***/
  "./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js ***!
    \***********************************************************************/

  /*! exports provided: pwa_camera */

  /***/
  function node_modulesIonicPwaElementsDistEsmPwaCameraEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pwa_camera", function () {
      return CameraPWA;
    });
    /* harmony import */


    var _core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-f86805ad.js */
    "./node_modules/@ionic/pwa-elements/dist/esm/core-f86805ad.js");
    /**
     * MediaStream ImageCapture polyfill
     *
     * @license
     * Copyright 2018 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var ImageCapture = window.ImageCapture;

    if (typeof ImageCapture === 'undefined') {
      ImageCapture = /*#__PURE__*/function () {
        /**
         * TODO https://www.w3.org/TR/image-capture/#constructors
         *
         * @param {MediaStreamTrack} videoStreamTrack - A MediaStreamTrack of the 'video' kind
         */
        function ImageCapture(videoStreamTrack) {
          var _this = this;

          _classCallCheck(this, ImageCapture);

          if (videoStreamTrack.kind !== 'video') throw new DOMException('NotSupportedError');
          this._videoStreamTrack = videoStreamTrack;

          if (!('readyState' in this._videoStreamTrack)) {
            // Polyfill for Firefox
            this._videoStreamTrack.readyState = 'live';
          } // MediaStream constructor not available until Chrome 55 - https://www.chromestatus.com/feature/5912172546752512


          this._previewStream = new MediaStream([videoStreamTrack]);
          this.videoElement = document.createElement('video');
          this.videoElementPlaying = new Promise(function (resolve) {
            _this.videoElement.addEventListener('playing', resolve);
          });

          if (HTMLMediaElement) {
            this.videoElement.srcObject = this._previewStream; // Safari 11 doesn't allow use of createObjectURL for MediaStream
          } else {
            this.videoElement.src = URL.createObjectURL(this._previewStream);
          }

          this.videoElement.muted = true;
          this.videoElement.setAttribute('playsinline', ''); // Required by Safari on iOS 11. See https://webkit.org/blog/6784

          this.videoElement.play();
          this.canvasElement = document.createElement('canvas'); // TODO Firefox has https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas

          this.canvas2dContext = this.canvasElement.getContext('2d');
        }
        /**
         * https://w3c.github.io/mediacapture-image/index.html#dom-imagecapture-videostreamtrack
         * @return {MediaStreamTrack} The MediaStreamTrack passed into the constructor
         */


        _createClass(ImageCapture, [{
          key: "videoStreamTrack",
          get: function get() {
            return this._videoStreamTrack;
          }
          /**
           * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-getphotocapabilities
           * @return {Promise<PhotoCapabilities>} Fulfilled promise with
           * [PhotoCapabilities](https://www.w3.org/TR/image-capture/#idl-def-photocapabilities)
           * object on success, rejected promise on failure
           */

        }, {
          key: "getPhotoCapabilities",
          value: function getPhotoCapabilities() {
            return new Promise(function executorGPC(resolve, reject) {
              // TODO see https://github.com/w3c/mediacapture-image/issues/97
              var MediaSettingsRange = {
                current: 0,
                min: 0,
                max: 0
              };
              resolve({
                exposureCompensation: MediaSettingsRange,
                exposureMode: 'none',
                fillLightMode: ['none'],
                focusMode: 'none',
                imageHeight: MediaSettingsRange,
                imageWidth: MediaSettingsRange,
                iso: MediaSettingsRange,
                redEyeReduction: false,
                whiteBalanceMode: 'none',
                zoom: MediaSettingsRange
              });
              reject(new DOMException('OperationError'));
            });
          }
          /**
           * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-setoptions
           * @param {Object} photoSettings - Photo settings dictionary, https://www.w3.org/TR/image-capture/#idl-def-photosettings
           * @return {Promise<void>} Fulfilled promise on success, rejected promise on failure
           */

        }, {
          key: "setOptions",
          value: function setOptions() {
            var _photoSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return new Promise(function executorSO(_resolve, _reject) {// TODO
            });
          }
          /**
           * TODO
           * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-takephoto
           * @return {Promise<Blob>} Fulfilled promise with [Blob](https://www.w3.org/TR/FileAPI/#blob)
           * argument on success; rejected promise on failure
           */

        }, {
          key: "takePhoto",
          value: function takePhoto() {
            var self = this;
            return new Promise(function executorTP(resolve, reject) {
              // `If the readyState of the MediaStreamTrack provided in the constructor is not live,
              // return a promise rejected with a new DOMException whose name is "InvalidStateError".`
              if (self._videoStreamTrack.readyState !== 'live') {
                return reject(new DOMException('InvalidStateError'));
              }

              self.videoElementPlaying.then(function () {
                try {
                  self.canvasElement.width = self.videoElement.videoWidth;
                  self.canvasElement.height = self.videoElement.videoHeight;
                  self.canvas2dContext.drawImage(self.videoElement, 0, 0);
                  self.canvasElement.toBlob(resolve);
                } catch (error) {
                  reject(new DOMException('UnknownError'));
                }
              });
            });
          }
          /**
           * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-grabframe
           * @return {Promise<ImageBitmap>} Fulfilled promise with
           * [ImageBitmap](https://www.w3.org/TR/html51/webappapis.html#webappapis-images)
           * argument on success; rejected promise on failure
           */

        }, {
          key: "grabFrame",
          value: function grabFrame() {
            var self = this;
            return new Promise(function executorGF(resolve, reject) {
              // `If the readyState of the MediaStreamTrack provided in the constructor is not live,
              // return a promise rejected with a new DOMException whose name is "InvalidStateError".`
              if (self._videoStreamTrack.readyState !== 'live') {
                return reject(new DOMException('InvalidStateError'));
              }

              self.videoElementPlaying.then(function () {
                try {
                  self.canvasElement.width = self.videoElement.videoWidth;
                  self.canvasElement.height = self.videoElement.videoHeight;
                  self.canvas2dContext.drawImage(self.videoElement, 0, 0); // TODO polyfill https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapFactories/createImageBitmap for IE

                  resolve(window.createImageBitmap(self.canvasElement));
                } catch (error) {
                  reject(new DOMException('UnknownError'));
                }
              });
            });
          }
        }]);

        return ImageCapture;
      }();
    }

    window.ImageCapture = ImageCapture;

    var CameraPWA = /*#__PURE__*/function () {
      function CameraPWA(hostRef) {
        var _this2 = this;

        _classCallCheck(this, CameraPWA);

        Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.facingMode = 'user';
        this.noDevicesText = 'No camera found';
        this.noDevicesButtonText = 'Choose image';
        this.showShutterOverlay = false;
        this.flashIndex = 0;
        this.hasCamera = null;
        this.rotation = 0;
        this.deviceError = null; // Whether the device has multiple cameras (front/back)

        this.hasMultipleCameras = false; // Whether the device has flash support

        this.hasFlash = false; // Flash modes for camera

        this.flashModes = []; // Current flash mode

        this.flashMode = 'off';

        this.handlePickFile = function (_e) {};

        this.handleShutterClick = function (_e) {
          console.debug('shutter click');

          _this2.capture();
        };

        this.handleRotateClick = function (_e) {
          _this2.rotate();
        };

        this.handleClose = function (_e) {
          _this2.handlePhoto && _this2.handlePhoto(null);
        };

        this.handleFlashClick = function (_e) {
          _this2.cycleFlash();
        };

        this.handleCancelPhoto = function (_e) {
          var track = _this2.stream && _this2.stream.getTracks()[0];

          var c = track && track.getConstraints();
          _this2.photo = null;
          _this2.photoSrc = null;

          if (c) {
            _this2.initCamera({
              video: {
                facingMode: c.facingMode
              }
            });
          } else {
            _this2.initCamera();
          }
        };

        this.handleAcceptPhoto = function (_e) {
          _this2.handlePhoto && _this2.handlePhoto(_this2.photo);
        };

        this.handleFileInputChange = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
            var input, file, orientation;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    input = e.target;
                    file = input.files[0];
                    _context.prev = 2;
                    _context.next = 5;
                    return _this2.getOrientation(file);

                  case 5:
                    orientation = _context.sent;
                    console.debug('Got orientation', orientation);
                    _this2.photoOrientation = orientation;
                    _context.next = 12;
                    break;

                  case 10:
                    _context.prev = 10;
                    _context.t0 = _context["catch"](2);

                  case 12:
                    _this2.handlePhoto && _this2.handlePhoto(file);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[2, 10]]);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();

        this.handleVideoMetadata = function (e) {
          console.debug('Video metadata', e);
        };

        this.isServer = Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "isServer");
      }

      _createClass(CameraPWA, [{
        key: "componentDidLoad",
        value: function () {
          var _componentDidLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.isServer) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    this.defaultConstraints = {
                      video: {
                        facingMode: this.facingMode
                      }
                    }; // Figure out how many cameras we have

                    _context2.next = 5;
                    return this.queryDevices();

                  case 5:
                    _context2.next = 7;
                    return this.initCamera();

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function componentDidLoad() {
            return _componentDidLoad.apply(this, arguments);
          }

          return componentDidLoad;
        }()
      }, {
        key: "componentDidUnload",
        value: function componentDidUnload() {
          this.stopStream();
          this.photoSrc && URL.revokeObjectURL(this.photoSrc);
        }
      }, {
        key: "hasImageCapture",
        value: function hasImageCapture() {
          return 'ImageCapture' in window;
        }
        /**
         * Query the list of connected devices and figure out how many video inputs we have.
         */

      }, {
        key: "queryDevices",
        value: function () {
          var _queryDevices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var devices, videoDevices;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return navigator.mediaDevices.enumerateDevices();

                  case 3:
                    devices = _context3.sent;
                    videoDevices = devices.filter(function (d) {
                      return d.kind == 'videoinput';
                    });
                    this.hasCamera = !!videoDevices.length;
                    this.hasMultipleCameras = videoDevices.length > 1;
                    _context3.next = 12;
                    break;

                  case 9:
                    _context3.prev = 9;
                    _context3.t0 = _context3["catch"](0);
                    this.deviceError = _context3.t0;

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 9]]);
          }));

          function queryDevices() {
            return _queryDevices.apply(this, arguments);
          }

          return queryDevices;
        }()
      }, {
        key: "initCamera",
        value: function () {
          var _initCamera = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(constraints) {
            var stream;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!constraints) {
                      constraints = this.defaultConstraints;
                    }

                    _context4.prev = 1;
                    _context4.next = 4;
                    return navigator.mediaDevices.getUserMedia(Object.assign({
                      video: true,
                      audio: false
                    }, constraints));

                  case 4:
                    stream = _context4.sent;
                    this.initStream(stream);
                    _context4.next = 12;
                    break;

                  case 8:
                    _context4.prev = 8;
                    _context4.t0 = _context4["catch"](1);
                    this.deviceError = _context4.t0;
                    this.handleNoDeviceError && this.handleNoDeviceError(_context4.t0);

                  case 12:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[1, 8]]);
          }));

          function initCamera(_x2) {
            return _initCamera.apply(this, arguments);
          }

          return initCamera;
        }()
      }, {
        key: "initStream",
        value: function () {
          var _initStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(stream) {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.stream = stream;
                    this.videoElement.srcObject = stream;

                    if (!this.hasImageCapture()) {
                      _context5.next = 8;
                      break;
                    }

                    this.imageCapture = new window.ImageCapture(stream.getVideoTracks()[0]);
                    _context5.next = 6;
                    return this.initPhotoCapabilities(this.imageCapture);

                  case 6:
                    _context5.next = 10;
                    break;

                  case 8:
                    this.deviceError = 'No image capture';
                    this.handleNoDeviceError && this.handleNoDeviceError();

                  case 10:
                    // Always re-render
                    this.el.forceUpdate();

                  case 11:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function initStream(_x3) {
            return _initStream.apply(this, arguments);
          }

          return initStream;
        }()
      }, {
        key: "initPhotoCapabilities",
        value: function () {
          var _initPhotoCapabilities = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(imageCapture) {
            var c;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return imageCapture.getPhotoCapabilities();

                  case 2:
                    c = _context6.sent;

                    if (c.fillLightMode && c.fillLightMode.length > 1) {
                      this.flashModes = c.fillLightMode.map(function (m) {
                        return m;
                      }); // Try to recall the current flash mode

                      if (this.flashMode) {
                        this.flashMode = this.flashModes[this.flashModes.indexOf(this.flashMode)] || 'off';
                        this.flashIndex = this.flashModes.indexOf(this.flashMode) || 0;
                      } else {
                        this.flashIndex = 0;
                      }
                    }

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function initPhotoCapabilities(_x4) {
            return _initPhotoCapabilities.apply(this, arguments);
          }

          return initPhotoCapabilities;
        }()
      }, {
        key: "stopStream",
        value: function stopStream() {
          if (this.videoElement) {
            this.videoElement.srcObject = null;
          }

          this.stream && this.stream.getTracks().forEach(function (track) {
            return track.stop();
          });
        }
      }, {
        key: "capture",
        value: function () {
          var _capture = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var photo;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!this.hasImageCapture()) {
                      _context7.next = 13;
                      break;
                    }

                    _context7.prev = 1;
                    _context7.next = 4;
                    return this.imageCapture.takePhoto({
                      fillLightMode: this.flashModes.length > 1 ? this.flashMode : undefined
                    });

                  case 4:
                    photo = _context7.sent;
                    _context7.next = 7;
                    return this.flashScreen();

                  case 7:
                    this.promptAccept(photo);
                    _context7.next = 13;
                    break;

                  case 10:
                    _context7.prev = 10;
                    _context7.t0 = _context7["catch"](1);
                    console.error('Unable to take photo!', _context7.t0);

                  case 13:
                    this.stopStream();

                  case 14:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[1, 10]]);
          }));

          function capture() {
            return _capture.apply(this, arguments);
          }

          return capture;
        }()
      }, {
        key: "promptAccept",
        value: function () {
          var _promptAccept = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(photo) {
            var orientation;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.photo = photo;
                    _context8.next = 3;
                    return this.getOrientation(photo);

                  case 3:
                    orientation = _context8.sent;
                    console.debug('Got orientation', orientation);
                    this.photoOrientation = orientation;

                    if (!orientation) {
                      _context8.next = 18;
                      break;
                    }

                    _context8.t0 = orientation;
                    _context8.next = _context8.t0 === 1 ? 10 : _context8.t0 === 2 ? 10 : _context8.t0 === 3 ? 12 : _context8.t0 === 4 ? 12 : _context8.t0 === 5 ? 14 : _context8.t0 === 6 ? 14 : _context8.t0 === 7 ? 16 : _context8.t0 === 8 ? 16 : 18;
                    break;

                  case 10:
                    this.rotation = 0;
                    return _context8.abrupt("break", 18);

                  case 12:
                    this.rotation = 180;
                    return _context8.abrupt("break", 18);

                  case 14:
                    this.rotation = 90;
                    return _context8.abrupt("break", 18);

                  case 16:
                    this.rotation = 270;
                    return _context8.abrupt("break", 18);

                  case 18:
                    this.photoSrc = URL.createObjectURL(photo);

                  case 19:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));

          function promptAccept(_x5) {
            return _promptAccept.apply(this, arguments);
          }

          return promptAccept;
        }()
      }, {
        key: "getOrientation",
        value: function getOrientation(file) {
          return new Promise(function (resolve) {
            var reader = new FileReader();

            reader.onload = function (event) {
              var view = new DataView(event.target.result);

              if (view.getUint16(0, false) !== 0xFFD8) {
                return resolve(-2);
              }

              var length = view.byteLength;
              var offset = 2;

              while (offset < length) {
                var marker = view.getUint16(offset, false);
                offset += 2;

                if (marker === 0xFFE1) {
                  if (view.getUint32(offset += 2, false) !== 0x45786966) {
                    return resolve(-1);
                  }

                  var little = view.getUint16(offset += 6, false) === 0x4949;
                  offset += view.getUint32(offset + 4, little);
                  var tags = view.getUint16(offset, little);
                  offset += 2;

                  for (var i = 0; i < tags; i++) {
                    if (view.getUint16(offset + i * 12, little) === 0x0112) {
                      return resolve(view.getUint16(offset + i * 12 + 8, little));
                    }
                  }
                } else if ((marker & 0xFF00) !== 0xFF00) {
                  break;
                } else {
                  offset += view.getUint16(offset, false);
                }
              }

              return resolve(-1);
            };

            reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
          });
        }
      }, {
        key: "rotate",
        value: function rotate() {
          this.stopStream();
          var track = this.stream && this.stream.getTracks()[0];

          if (!track) {
            return;
          }

          var c = track.getConstraints();
          var facingMode = c.facingMode;

          if (!facingMode) {
            var _c = track.getCapabilities();

            if (_c.facingMode) {
              facingMode = _c.facingMode[0];
            }
          }

          if (facingMode === 'environment') {
            this.initCamera({
              video: {
                facingMode: 'user'
              }
            });
          } else {
            this.initCamera({
              video: {
                facingMode: 'environment'
              }
            });
          }
        }
      }, {
        key: "setFlashMode",
        value: function setFlashMode(mode) {
          console.debug('New flash mode: ', mode);
          this.flashMode = mode;
        }
      }, {
        key: "cycleFlash",
        value: function cycleFlash() {
          if (this.flashModes.length > 0) {
            this.flashIndex = (this.flashIndex + 1) % this.flashModes.length;
            this.setFlashMode(this.flashModes[this.flashIndex]);
          }
        }
      }, {
        key: "flashScreen",
        value: function () {
          var _flashScreen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var _this3 = this;

            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    return _context9.abrupt("return", new Promise(function (resolve, _reject) {
                      _this3.showShutterOverlay = true;
                      setTimeout(function () {
                        _this3.showShutterOverlay = false;
                        resolve();
                      }, 100);
                    }));

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));

          function flashScreen() {
            return _flashScreen.apply(this, arguments);
          }

          return flashScreen;
        }()
      }, {
        key: "iconExit",
        value: function iconExit() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        }
      }, {
        key: "iconPhotos",
        value: function iconPhotos() {
          return Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '512',
            height: '512',
            viewBox: '0 0 512 512'
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", {
            d: 'M450.29,112H142c-34,0-62,27.51-62,61.33V418.67C80,452.49,108,480,142,480H450c34,0,62-26.18,62-60V173.33C512,139.51,484.32,112,450.29,112Zm-77.15,61.34a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-231.55,276c-17,0-29.86-13.75-29.86-30.66V353.85l90.46-80.79a46.54,46.54,0,0,1,63.44,1.83L328.27,337l-113,112.33ZM480,418.67a30.67,30.67,0,0,1-30.71,30.66H259L376.08,333a46.24,46.24,0,0,1,59.44-.16L480,370.59Z'
          }), Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", {
            d: 'M384,32H64A64,64,0,0,0,0,96V352a64.11,64.11,0,0,0,48,62V152a72,72,0,0,1,72-72H446A64.11,64.11,0,0,0,384,32Z'
          }));
        }
      }, {
        key: "iconConfirm",
        value: function iconConfirm() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        }
      }, {
        key: "iconReverseCamera",
        value: function iconReverseCamera() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E";
        }
      }, {
        key: "iconRetake",
        value: function iconRetake() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
        }
      }, {
        key: "iconFlashOff",
        value: function iconFlashOff() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E";
        }
      }, {
        key: "iconFlashOn",
        value: function iconFlashOn() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E";
        }
      }, {
        key: "iconFlashAuto",
        value: function iconFlashAuto() {
          return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E";
        }
      }, {
        key: "render",
        value: function render() {
          var _this4 = this;

          // const acceptStyles = { transform: `rotate(${-this.rotation}deg)` };
          var acceptStyles = {};
          return Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "camera-wrapper"
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "camera-header"
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", {
            "class": "items"
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item close",
            onClick: function onClick(e) {
              return _this4.handleClose(e);
            }
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconExit()
          })), Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item flash",
            onClick: function onClick(e) {
              return _this4.handleFlashClick(e);
            }
          }, this.flashModes.length > 0 && Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.flashMode == 'off' ? Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconFlashOff()
          }) : '', this.flashMode == 'auto' ? Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconFlashAuto()
          }) : '', this.flashMode == 'flash' ? Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconFlashOn()
          }) : '')))), (this.hasCamera === false || !!this.deviceError) && Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "no-device"
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", null, this.noDevicesText), Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
            htmlFor: "_pwa-elements-camera-input"
          }, this.noDevicesButtonText), Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "file",
            id: "_pwa-elements-camera-input",
            onChange: this.handleFileInputChange,
            accept: "image/*",
            "class": "select-file-button"
          })), this.photoSrc ? Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "accept"
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "accept-image",
            style: Object.assign({
              backgroundImage: "url(".concat(this.photoSrc, ")")
            }, acceptStyles)
          })) : Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "camera-video"
          }, this.showShutterOverlay && Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "shutter-overlay"
          }), this.hasImageCapture() ? Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("video", {
            ref: function ref(el) {
              return _this4.videoElement = el;
            },
            onLoadedMetaData: this.handleVideoMetadata,
            autoplay: true,
            playsinline: true
          }) : Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("canvas", {
            ref: function ref(el) {
              return _this4.canvasElement = el;
            },
            width: "100%",
            height: "100%"
          }), Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("canvas", {
            "class": "offscreen-image-render",
            ref: function ref(e) {
              return _this4.offscreenCanvas = e;
            },
            width: "100%",
            height: "100%"
          })), this.hasCamera && Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "camera-footer"
          }, !this.photo ? [Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "pick-image",
            onClick: this.handlePickFile
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
            htmlFor: "_pwa-elements-file-pick"
          }, this.iconPhotos()), Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "file",
            id: "_pwa-elements-file-pick",
            onChange: this.handleFileInputChange,
            accept: "image/*",
            "class": "pick-image-button"
          })), Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "shutter",
            onClick: this.handleShutterClick
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "shutter-button"
          })), Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "rotate",
            onClick: this.handleRotateClick
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconReverseCamera()
          }))] : Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", {
            "class": "items"
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item accept-cancel",
            onClick: function onClick(e) {
              return _this4.handleCancelPhoto(e);
            }
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconRetake()
          })), Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item accept-use",
            onClick: function onClick(e) {
              return _this4.handleAcceptPhoto(e);
            }
          }, Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: this.iconConfirm()
          })))));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_f86805ad_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
        }
      }], [{
        key: "assetsDirs",
        get: function get() {
          return ["icons"];
        }
      }, {
        key: "style",
        get: function get() {
          return ":host{--header-height:4em;--footer-height:9em;--header-height-landscape:3em;--footer-height-landscape:6em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system,BlinkMacSystemFont,“Segoe UI”,“Roboto”,“Droid Sans”,“Helvetica Neue”,sans-serif;display:block}.items,:host{width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:#fff;background-color:#000;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:#fff;background-color:#000;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}\@media (max-height:375px){.camera-header{--header-height:var(--header-height-landscape)}.camera-footer{--footer-height:var(--footer-height-landscape)}.camera-footer .shutter{--shutter-size:4em}}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden}.camera-video,video{background-color:#000}video{width:100%;height:100%;max-height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover}.pick-image{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:#fff}.pick-image input{visibility:hidden}.pick-image svg{cursor:pointer;fill:#fff;width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:#fff;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;color:#fff}.rotate,.rotate img{width:var(--icon-size-footer)}.rotate img{height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:#000}.error{width:100%;height:100%;-ms-flex-pack:center;-ms-flex-align:center}.error,.no-device{color:#fff;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.no-device{background-color:#000;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;-ms-flex-pack:center}.no-device label{cursor:pointer;background:#fff;border-radius:6px;padding:6px 8px;color:#000}.no-device input{visibility:hidden;height:0;margin-top:16px}.accept{background-color:#000;-ms-flex:1;flex:1;overflow:hidden}.accept .accept-image{width:100%;height:100%;max-height:100%;background-position:50%;background-size:cover;background-repeat:no-repeat}.close img{cursor:pointer}.close img,.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-cancel img,.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}";
        }
      }]);

      return CameraPWA;
    }();
    /***/

  }
}]);
//# sourceMappingURL=46-es5.js.map