function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-forms-detail-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/detail/detail.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/detail/detail.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensFormsDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\" style=\"position: relative;\">\n    <ion-title style=\"position: absolute; left: 5px;bottom:14px\">{{detail.address}}\n    </ion-title>\n    <ion-button (click)=\"dismiss()\" style=\"position: absolute; right: 5px;bottom:5px\">\n      <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"warning\">\n\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div #map id=\"map\" style=\"width: 100%;height: 200px;\"></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <p>Duración: {{duration | uppercase}} </p>\n      <p>Distancia: {{distance | uppercase}} </p>\n      <p class=\"ion-text-center\">{{detail.description}}</p>\n      <ng-container *ngIf=\"detail.status !=25\">\n        <ion-button expand=\"full\" fill=\"outline\" color=\"primary\" (click)=\"registerEvent()\">Eventualiad</ion-button>\n        <ion-button expand=\"full\" color=\"primary\" (click)=\"endDetail()\">Finalizar</ion-button>\n      </ng-container>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/screens/forms/detail/detail-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/screens/forms/detail/detail-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: DetailPageRoutingModule */

  /***/
  function srcAppScreensFormsDetailDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function () {
      return DetailPageRoutingModule;
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


    var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/screens/forms/detail/detail.page.ts");

    var routes = [{
      path: '',
      component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }];

    var DetailPageRoutingModule = /*#__PURE__*/_createClass(function DetailPageRoutingModule() {
      _classCallCheck(this, DetailPageRoutingModule);
    });

    DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/forms/detail/detail.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/screens/forms/detail/detail.module.ts ***!
    \*******************************************************/

  /*! exports provided: DetailPageModule */

  /***/
  function srcAppScreensFormsDetailDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
      return DetailPageModule;
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


    var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail-routing.module */
    "./src/app/screens/forms/detail/detail-routing.module.ts");
    /* harmony import */


    var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/screens/forms/detail/detail.page.ts");

    var DetailPageModule = /*#__PURE__*/_createClass(function DetailPageModule() {
      _classCallCheck(this, DetailPageModule);
    });

    DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]],
      declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })], DetailPageModule);
    /***/
  },

  /***/
  "./src/app/screens/forms/detail/detail.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/screens/forms/detail/detail.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensFormsDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZm9ybXMvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/screens/forms/detail/detail.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/screens/forms/detail/detail.page.ts ***!
    \*****************************************************/

  /*! exports provided: DetailPage */

  /***/
  function srcAppScreensFormsDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
      return DetailPage;
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


    var _events_events_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../events/events.page */
    "./src/app/screens/forms/events/events.page.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var DetailPage = /*#__PURE__*/function () {
      function DetailPage(ui, request, auth) {
        _classCallCheck(this, DetailPage);

        this.ui = ui;
        this.request = request;
        this.auth = auth;
        this.az_arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        this.distance = "";
        this.duration = "";
        this.currentLocation = {};
        this.address_array = [];
      }

      _createClass(DetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var loader, coordinates, _coordinates$coords, latitude, longitude;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    loader = this.ui.loading("Por favor espere...");
                    _context.next = 3;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Geolocation"].getCurrentPosition();

                  case 3:
                    coordinates = _context.sent;
                    _coordinates$coords = coordinates.coords, latitude = _coordinates$coords.latitude, longitude = _coordinates$coords.longitude;
                    this.currentLocation = {
                      latitude: latitude,
                      longitude: longitude
                    };
                    this.address_array.push(this.currentLocation);
                    this.address_array.push(this.detail);
                    this.loadMap(loader);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loadMap",
        value: function loadMap(loader) {
          //obtener usos de la API
          var directionsService = new google.maps.DirectionsService();
          var directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true
          }); //puntos de referencia para agregar

          var waypts = [];
          var markers = [];
          var infos = []; //coordenadas de los puntos de ruta

          for (var i = 0; i < this.address_array.length; i++) {
            var latlng = {
              lat: parseFloat(this.address_array[i].latitude),
              lng: parseFloat(this.address_array[i].longitude)
            };
            waypts.push({
              location: latlng,
              stopover: true
            });
          } //creo mapa


          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: {
              lat: waypts[0].location.lat,
              lng: waypts[0].location.lng
            }
          }); //muestro el mapa

          directionsDisplay.setMap(map); //ventanas de informacion

          var infoWindow = new google.maps.InfoWindow(); //coordenadas markers personalizados con ventana de información

          for (var _i = 0; _i < this.address_array.length; _i++) {
            var _latlng = {
              lat: parseFloat(this.address_array[_i].latitude),
              lng: parseFloat(this.address_array[_i].longitude)
            };
            var marker = new google.maps.Marker({
              position: _latlng,
              map: map,
              icon: '../../../assets/imgs/markers/' + this.az_arr[_i] + '.png'
            });
            markers.push(marker); // agrego la informacion de la dirección

            infos.push(this.address_array[_i].address); // google.maps.event.addListener(marker, 'click', (function(marker, i) {
            //   return function() {
            //       infoWindow.setContent(infos[i]);
            //       infoWindow.open(map, marker);
            //   }
            // })(marker, i));
          } // pregunto si es ida y vuelta el servicio


          var origin, destination, return_pt;
          var n = this.address_array.length - 1;

          if (this.detail.round_trip === true) {
            origin = {
              lat: waypts[0].location.lat,
              lng: waypts[0].location.lng
            };
            destination = {
              lat: waypts[0].location.lat,
              lng: waypts[0].location.lng
            };
            return_pt = {
              lat: waypts[n].location.lat,
              lng: waypts[n].location.lng
            }; //punto de retorno en km y min

            this.getDistanceMatrix(return_pt, origin);
          } else {
            origin = {
              lat: waypts[0].location.lat,
              lng: waypts[0].location.lng
            };
            destination = {
              lat: waypts[n].location.lat,
              lng: waypts[n].location.lng
            };
            this.getDistanceMatrix(origin, origin);
          } // pinto la ruta


          directionsService.route({
            origin: origin,
            destination: destination,
            waypoints: waypts,
            travelMode: google.maps.TravelMode.DRIVING
          }, function (response, status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (status === google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                      } else {
                        console.log('Ha fallat la comunicació amb el mapa a causa de: ' + status);
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }); //calcular distancia

          for (var _i2 = 0; _i2 < waypts.length; _i2++) {
            var a = null,
                b = null;

            if (_i2 < waypts.length - 1) {
              a = {
                lat: waypts[_i2].location.lat,
                lng: waypts[_i2].location.lng
              };
            }

            var j = _i2 + 1;

            if (j <= waypts.length - 1) {
              b = {
                lat: waypts[j].location.lat,
                lng: waypts[j].location.lng
              };
            }

            if (a != null && b != null) {
              this.getDistanceMatrix(a, b, loader);
            }
          }
        }
      }, {
        key: "getDistanceMatrix",
        value: function getDistanceMatrix(origin, destination, loader) {
          var service = new google.maps.DistanceMatrixService();

          var _this = this; //calculo distancia


          service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
          }, function (response, status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var distance_text, distance, duration_text, duration;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(status != google.maps.DistanceMatrixStatus.OK)) {
                        _context3.next = 4;
                        break;
                      }

                      console.log("Error was: " + status);
                      _context3.next = 14;
                      break;

                    case 4:
                      distance_text = response.rows[0].elements[0].distance.text;
                      console.log("Distance Text", distance_text);
                      distance = distance_text.substring(0, distance_text.length - 3).replace(",", ".");
                      duration_text = response.rows[0].elements[0].duration.text;
                      console.log("Duration Text", duration_text);
                      duration = duration_text.substring(0, distance_text.length - 4);

                      _this.getCalculateDistance(distance_text, duration_text);

                      _context3.next = 13;
                      return loader;

                    case 13:
                      _context3.sent.dismiss();

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          });
        }
      }, {
        key: "getCalculateDistance",
        value: function getCalculateDistance(distance, duration) {
          this.distance = distance;
          this.duration = duration;
        }
      }, {
        key: "registerEvent",
        value: function registerEvent() {
          this.ui.presentModal(_events_events_page__WEBPACK_IMPORTED_MODULE_4__["EventsPage"], {
            detail: this.detail
          });
        }
      }, {
        key: "endDetail",
        value: function endDetail() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _this2 = this;

            var loader, coordinates, _coordinates$coords2, latitude, longitude, data;

            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    loader = this.ui.loading("Por favor espere...");
                    _context6.next = 3;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Geolocation"].getCurrentPosition();

                  case 3:
                    coordinates = _context6.sent;
                    _coordinates$coords2 = coordinates.coords, latitude = _coordinates$coords2.latitude, longitude = _coordinates$coords2.longitude;
                    data = new FormData();
                    data.append("order_detail_id", this.detail.id);
                    data.append("latitude", latitude.toString());
                    data.append("longitude", longitude.toString());
                    data.append("description", "Finalización Detalle");
                    data.append("user_id", this.auth.user.id.toString());
                    this.request.post("driver/end_order_detail", data).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                        var _this3 = this;

                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                _context4.next = 2;
                                return loader;

                              case 2:
                                _context4.sent.dismiss();

                                this.detail.status = 25;
                                this.ui.showToast("Servicio finalizado.", function () {
                                  _this3.dismiss();
                                });

                              case 5:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                console.log("Error", err);
                                _context5.next = 3;
                                return loader;

                              case 3:
                                _context5.sent.dismiss();

                                this.ui.showToast("Ha ocurrido un error");

                              case 5:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    });

                  case 12:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.ui.dismiss();
        }
      }]);

      return DetailPage;
    }();

    DetailPage.ctorParameters = function () {
      return [{
        type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DetailPage.prototype, "detail", void 0);
    DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/detail/detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail.page.scss */
      "./src/app/screens/forms/detail/detail.page.scss"))["default"]]
    })], DetailPage);
    /***/
  }
}]);
//# sourceMappingURL=screens-forms-detail-detail-module-es5.js.map