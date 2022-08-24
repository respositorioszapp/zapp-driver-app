function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
    \*********************************************************************/

  /*! exports provided: c */

  /***/
  function node_modulesIonicCoreDistEsmButtonActiveD4bd4f74Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a8b7a1c.js */
    "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */


    var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./haptic-27b3f981.js */
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
    /* harmony import */


    var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./index-34cb2743.js */
    "./node_modules/@ionic/core/dist/esm/index-34cb2743.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;

        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!currentTouchedButton) {
          return;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */

        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
          currentTouchedButton.click();
        }

        currentTouchedButton = undefined;
      };

      return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegate94e770ccJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });
    /* harmony import */


    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helpers-1457892a.js */
    "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);
                _context.next = 10;
                return new Promise(function (resolve) {
                  return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                });

              case 10:
                return _context.abrupt("return", el);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color, cssClassMap) {
      return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, ev, direction, animation) {
        var router;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref2.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/request-location-permission/request-location-permission.page.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/request-location-permission/request-location-permission.page.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensFormsRequestLocationPermissionRequestLocationPermissionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"advice\">\n    <h4 class=\"ion-text-center\">¡Aviso importante!</h4>\n    <p class=\"ion-text-center grey-color\">Esta aplicación recopila datos de ubicación para\n      habilitar el seguimiento del mensajero en tiempo real, incluso cuando la aplicación está cerrada o no está en uso.\n      Para un correcto funcionamiento en dispositivos Android 10 o superior, recomendamos tener la ubicación encendida con los permisos de ubicación todo el tiempo e ignorando la optimización de la batería\n    </p>\n  </div>\n  <div class=\"ion-text-center terms-and-conditions\">\n\n    <p class=\"grey-color\">Al hacer clic en \"Aceptar\", aceptas nuestras\n      <a href=\"https://www.zapplogistica.com/privacy\" class=\"ion-margin-top ion-text-center\" target=\"_blank\"\n        rel=\"noopener noreferrer\"  color=\"primary\">condiciones</a>, la <a\n        href=\"https://www.zapplogistica.com/privacy\" class=\"ion-margin-top ion-text-center\" target=\"_blank\"\n        rel=\"noopener noreferrer\"  color=\"primary\">Política de datos</a> y la <a\n        href=\"https://www.zapplogistica.com/privacy\" class=\"ion-margin-top ion-text-center\" target=\"_blank\"\n        rel=\"noopener noreferrer\"  color=\"primary\">Política de cookies</a>.\n    </p>\n\n  </div>\n\n  <img src=\"assets/imgs/express-courier-2.png\" class=\"img-courrier\" alt=\"\" >\n  <ion-button expand=\"full\" class=\"button denie\" (click)=\"denie()\">\n    DENEGAR\n  </ion-button>\n  <ion-button expand=\"full\" class=\"button accept\" (click)=\"accept()\">Aceptar</ion-button>\n  <!-- <ion-button expand=\"block\" >Aceptar</ion-button> -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/screens/forms/request-location-permission/request-location-permission.page.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/screens/forms/request-location-permission/request-location-permission.page.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensFormsRequestLocationPermissionRequestLocationPermissionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".advice {\n  position: absolute;\n  top: 23px;\n}\n\n.terms-and-conditions {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 100px;\n}\n\n.terms-and-conditions p a {\n  color: #1c024b;\n}\n\n.img-courrier {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 300px;\n  height: 200px;\n}\n\nion-button.button {\n  position: absolute;\n  bottom: 0;\n  width: 50%;\n}\n\nion-button.button.denie {\n  --background: white;\n  color: #21c1ff;\n}\n\nion-button.button.accept {\n  right: 0;\n  --background: #21c1ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9mb3Jtcy9yZXF1ZXN0LWxvY2F0aW9uLXBlcm1pc3Npb24vcmVxdWVzdC1sb2NhdGlvbi1wZXJtaXNzaW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9mb3Jtcy9yZXF1ZXN0LWxvY2F0aW9uLXBlcm1pc3Npb24vcmVxdWVzdC1sb2NhdGlvbi1wZXJtaXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFUTtFQUNJLGNBQUE7QUNBWjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBRE1JO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hSOztBREtRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDSFo7O0FETVE7RUFDSSxRQUFBO0VBQ0EscUJBQUE7QUNKWiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZm9ybXMvcmVxdWVzdC1sb2NhdGlvbi1wZXJtaXNzaW9uL3JlcXVlc3QtbG9jYXRpb24tcGVybWlzc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWR2aWNlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyM3B4O1xufVxuXG4udGVybXMtYW5kLWNvbmRpdGlvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMTAwcHg7XG5cbiAgICAmIHAge1xuICAgICAgICAmIGEge1xuICAgICAgICAgICAgY29sb3I6ICMxYzAyNGI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pbWctY291cnJpZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAmLmJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogNTAlO1xuXG4gICAgICAgICYuZGVuaWUge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMjFjMWZmO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY2NlcHQge1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMyMWMxZmY7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmFkdmljZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyM3B4O1xufVxuXG4udGVybXMtYW5kLWNvbmRpdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDEwMHB4O1xufVxuLnRlcm1zLWFuZC1jb25kaXRpb25zIHAgYSB7XG4gIGNvbG9yOiAjMWMwMjRiO1xufVxuXG4uaW1nLWNvdXJyaWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tYnV0dG9uLmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNTAlO1xufVxuaW9uLWJ1dHRvbi5idXR0b24uZGVuaWUge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzIxYzFmZjtcbn1cbmlvbi1idXR0b24uYnV0dG9uLmFjY2VwdCB7XG4gIHJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6ICMyMWMxZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/screens/forms/request-location-permission/request-location-permission.page.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/screens/forms/request-location-permission/request-location-permission.page.ts ***!
    \***********************************************************************************************/

  /*! exports provided: RequestLocationPermissionPage */

  /***/
  function srcAppScreensFormsRequestLocationPermissionRequestLocationPermissionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestLocationPermissionPage", function () {
      return RequestLocationPermissionPage;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! cordova-background-geolocation-lt */
    "./node_modules/cordova-background-geolocation-lt/src/ionic/index.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts"); // import { BackgroundGeolocation, BackgroundGeolocationAuthorizationStatus } from '@ionic-native/background-geolocation/ngx';


    var RequestLocationPermissionPage = /*#__PURE__*/function () {
      function RequestLocationPermissionPage(ui, platform, // private backgroundGeolocation: BackgroundGeolocation,
      auth) {
        _classCallCheck(this, RequestLocationPermissionPage);

        this.ui = ui;
        this.platform = platform;
        this.auth = auth;
        this.platform = platform;
      }

      _createClass(RequestLocationPermissionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "denie",
        value: function denie() {
          if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Capacitor"].platform !== 'web') {
            // App.exitApp()
            try {
              this.auth.logOut();
              navigator['app'].exitApp();
            } catch (e) {
              console.log("Error closing app", e);
            }
          } else {
            this.dismiss();
          }
        }
      }, {
        key: "accept",
        value: function accept() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var status, isIgnoring;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.dismiss();
                    localStorage.setItem("background_location_accepted", "accepted");
                    _context3.prev = 2;
                    _context3.next = 5;
                    return cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_5__["default"].requestPermission();

                  case 5:
                    status = _context3.sent;

                    if (!(status == 2)) {
                      _context3.next = 11;
                      break;
                    }

                    _context3.next = 9;
                    return this.ui.presentAlert({
                      mode: 'ios',
                      header: '¡Advertencia!',
                      message: 'Si la aplicación no tiene perimisos para obtener su ubicación, no podrá tener un correcto funcionamiento',
                      buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log("Execute");
                        }
                      }]
                    });

                  case 9:
                    _context3.next = 18;
                    break;

                  case 11:
                    if (!(status == 3)) {
                      _context3.next = 18;
                      break;
                    }

                    _context3.next = 14;
                    return cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_5__["default"].deviceSettings.isIgnoringBatteryOptimizations();

                  case 14:
                    isIgnoring = _context3.sent;

                    if (!isIgnoring) {
                      cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_5__["default"].deviceSettings.showIgnoreBatteryOptimizations().then(function (request) {
                        console.log("- Screen seen? ".concat(request.seen, " ").concat(request.lastSeenAt));
                        console.log("- Device: ".concat(request.manufacturer, " ").concat(request.model, " ").concat(request.version)); // If we've already shown this screen to the user, we don't want to annoy them.
                        // if (request.seen) {
                        //   return;
                        // }

                        cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_5__["default"].deviceSettings.show(request); // It's your responsibility to instruct the user what exactly
                        // to do here, perhaps with a Confirm Dialog:
                      })["catch"](function (error) {
                        // Depending on Manufacturer/Model/OS Version, a Device may not implement
                        // a particular Settings screen.
                        console.warn(error);
                      });
                    } // User clicked [Confirm] button.  Execute the redirect to settings screen:


                    _context3.next = 18;
                    break;

                  case 18:
                    _context3.next = 22;
                    break;

                  case 20:
                    _context3.prev = 20;
                    _context3.t0 = _context3["catch"](2);

                  case 22:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[2, 20]]);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.ui.dismiss();
        }
      }]);

      return RequestLocationPermissionPage;
    }();

    RequestLocationPermissionPage.ctorParameters = function () {
      return [{
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RequestLocationPermissionPage.prototype, "request", void 0);
    RequestLocationPermissionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-location-permission',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./request-location-permission.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/request-location-permission/request-location-permission.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./request-location-permission.page.scss */
      "./src/app/screens/forms/request-location-permission/request-location-permission.page.scss"))["default"]]
    })], RequestLocationPermissionPage);
    /***/
  },

  /***/
  "./src/app/screens/forms/view-detail/view-detail-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/screens/forms/view-detail/view-detail-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ViewDetailPageRoutingModule */

  /***/
  function srcAppScreensFormsViewDetailViewDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewDetailPageRoutingModule", function () {
      return ViewDetailPageRoutingModule;
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


    var _view_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-detail.page */
    "./src/app/screens/forms/view-detail/view-detail.page.ts");

    var routes = [{
      path: '',
      component: _view_detail_page__WEBPACK_IMPORTED_MODULE_3__["ViewDetailPage"]
    }];

    var ViewDetailPageRoutingModule = /*#__PURE__*/_createClass(function ViewDetailPageRoutingModule() {
      _classCallCheck(this, ViewDetailPageRoutingModule);
    });

    ViewDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/forms/view-detail/view-detail.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/screens/forms/view-detail/view-detail.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ViewDetailPageModule */

  /***/
  function srcAppScreensFormsViewDetailViewDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewDetailPageModule", function () {
      return ViewDetailPageModule;
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


    var _view_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-detail-routing.module */
    "./src/app/screens/forms/view-detail/view-detail-routing.module.ts");
    /* harmony import */


    var _modules_aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../modules/aplication-pipe-module/aplication-pipe-module.module */
    "./src/app/modules/aplication-pipe-module/aplication-pipe-module.module.ts");
    /* harmony import */


    var _view_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./view-detail.page */
    "./src/app/screens/forms/view-detail/view-detail.page.ts");
    /* harmony import */


    var src_app_modules_common_components_common_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modules/common-components/common-components.module */
    "./src/app/modules/common-components/common-components.module.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");

    var ViewDetailPageModule = /*#__PURE__*/_createClass(function ViewDetailPageModule() {
      _classCallCheck(this, ViewDetailPageModule);
    });

    ViewDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewDetailPageRoutingModule"], _modules_aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_6__["AplicationPipeModuleModule"], src_app_modules_common_components_common_components_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentsModule"]],
      providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"]],
      declarations: [_view_detail_page__WEBPACK_IMPORTED_MODULE_7__["ViewDetailPage"]],
      exports: [_view_detail_page__WEBPACK_IMPORTED_MODULE_7__["ViewDetailPage"]]
    })], ViewDetailPageModule);
    /***/
  },

  /***/
  "./src/app/services/common-atrributes.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/common-atrributes.service.ts ***!
    \*******************************************************/

  /*! exports provided: CommonAtrributesService */

  /***/
  function srcAppServicesCommonAtrributesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonAtrributesService", function () {
      return CommonAtrributesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CommonAtrributesService = /*#__PURE__*/function () {
      function CommonAtrributesService() {
        _classCallCheck(this, CommonAtrributesService);

        this.colors = ["Blanco", "Negro", "Rojo", "Verde", "Amarillo", "Azul", "Café", "Morado", "Rosado", "Gris", "Plateado"];
      }

      _createClass(CommonAtrributesService, [{
        key: "years",
        get: function get() {
          var date = new Date();
          var year = date.getFullYear();
          var array = [];

          for (var i = 2008; i <= year; i++) {
            array.push(i);
          }

          return array;
        }
      }]);

      return CommonAtrributesService;
    }();

    CommonAtrributesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonAtrributesService);
    /***/
  },

  /***/
  "./src/app/validators/passwod.validator.ts":
  /*!*************************************************!*\
    !*** ./src/app/validators/passwod.validator.ts ***!
    \*************************************************/

  /*! exports provided: ComparePassword */

  /***/
  function srcAppValidatorsPasswodValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComparePassword", function () {
      return ComparePassword;
    }); // To validate password and confirm password


    function ComparePassword(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
        }

        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map