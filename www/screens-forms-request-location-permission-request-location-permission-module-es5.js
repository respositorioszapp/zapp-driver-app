function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-forms-request-location-permission-request-location-permission-module"], {
  /***/
  "./src/app/screens/forms/request-location-permission/request-location-permission-routing.module.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/screens/forms/request-location-permission/request-location-permission-routing.module.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: RequestLocationPermissionPageRoutingModule */

  /***/
  function srcAppScreensFormsRequestLocationPermissionRequestLocationPermissionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestLocationPermissionPageRoutingModule", function () {
      return RequestLocationPermissionPageRoutingModule;
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


    var _request_location_permission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./request-location-permission.page */
    "./src/app/screens/forms/request-location-permission/request-location-permission.page.ts");

    var routes = [{
      path: '',
      component: _request_location_permission_page__WEBPACK_IMPORTED_MODULE_3__["RequestLocationPermissionPage"]
    }];

    var RequestLocationPermissionPageRoutingModule = /*#__PURE__*/_createClass(function RequestLocationPermissionPageRoutingModule() {
      _classCallCheck(this, RequestLocationPermissionPageRoutingModule);
    });

    RequestLocationPermissionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RequestLocationPermissionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/forms/request-location-permission/request-location-permission.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/screens/forms/request-location-permission/request-location-permission.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: RequestLocationPermissionPageModule */

  /***/
  function srcAppScreensFormsRequestLocationPermissionRequestLocationPermissionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestLocationPermissionPageModule", function () {
      return RequestLocationPermissionPageModule;
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


    var _request_location_permission_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./request-location-permission-routing.module */
    "./src/app/screens/forms/request-location-permission/request-location-permission-routing.module.ts");
    /* harmony import */


    var _request_location_permission_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./request-location-permission.page */
    "./src/app/screens/forms/request-location-permission/request-location-permission.page.ts");

    var RequestLocationPermissionPageModule = /*#__PURE__*/_createClass(function RequestLocationPermissionPageModule() {
      _classCallCheck(this, RequestLocationPermissionPageModule);
    });

    RequestLocationPermissionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _request_location_permission_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestLocationPermissionPageRoutingModule"]],
      declarations: [_request_location_permission_page__WEBPACK_IMPORTED_MODULE_6__["RequestLocationPermissionPage"]]
    })], RequestLocationPermissionPageModule);
    /***/
  }
}]);
//# sourceMappingURL=screens-forms-request-location-permission-request-location-permission-module-es5.js.map