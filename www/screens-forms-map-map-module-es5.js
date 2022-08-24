function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-forms-map-map-module"], {
  /***/
  "./src/app/screens/forms/map/map-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/screens/forms/map/map-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MapPageRoutingModule */

  /***/
  function srcAppScreensFormsMapMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function () {
      return MapPageRoutingModule;
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


    var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map.page */
    "./src/app/screens/forms/map/map.page.ts");

    var routes = [{
      path: '',
      component: _map_page__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }];

    var MapPageRoutingModule = /*#__PURE__*/_createClass(function MapPageRoutingModule() {
      _classCallCheck(this, MapPageRoutingModule);
    });

    MapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/forms/map/map.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/screens/forms/map/map.module.ts ***!
    \*************************************************/

  /*! exports provided: MapPageModule */

  /***/
  function srcAppScreensFormsMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPageModule", function () {
      return MapPageModule;
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


    var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-routing.module */
    "./src/app/screens/forms/map/map-routing.module.ts");
    /* harmony import */


    var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./map.page */
    "./src/app/screens/forms/map/map.page.ts");

    var MapPageModule = /*#__PURE__*/_createClass(function MapPageModule() {
      _classCallCheck(this, MapPageModule);
    });

    MapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]],
      declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
    })], MapPageModule);
    /***/
  }
}]);
//# sourceMappingURL=screens-forms-map-map-module-es5.js.map