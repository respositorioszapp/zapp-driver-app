function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" color=\"primary\">\n    <ion-tab-button tab=\"history\">\n      <ion-icon name=\"podium-outline\"></ion-icon>\n      <ion-label>Historial</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../guards/auth.guard */
    "./src/app/guards/auth.guard.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | screens-screens-tabs-home-home-module */
          [__webpack_require__.e("common"), __webpack_require__.e("screens-screens-tabs-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ../screens/screens-tabs/home/home.module */
          "./src/app/screens/screens-tabs/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | screens-screens-tabs-profile-profile-module */
          "screens-screens-tabs-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ../screens/screens-tabs/profile/profile.module */
          "./src/app/screens/screens-tabs/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'documents',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | screens-screens-tabs-documents-documents-module */
          [__webpack_require__.e("default~screens-forms-other-documents-other-documents-module~screens-screens-tabs-documents-documents-module"), __webpack_require__.e("screens-screens-tabs-documents-documents-module")]).then(__webpack_require__.bind(null,
          /*! ../screens/screens-tabs/documents/documents.module */
          "./src/app/screens/screens-tabs/documents/documents.module.ts")).then(function (m) {
            return m.DocumentsPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'personal-information',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | screens-screens-tabs-personal-information-personal-information-module */
          "screens-screens-tabs-personal-information-personal-information-module").then(__webpack_require__.bind(null,
          /*! ../screens/screens-tabs/personal-information/personal-information.module */
          "./src/app/screens/screens-tabs/personal-information/personal-information.module.ts")).then(function (m) {
            return m.PersonalInformationPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'vehicle-information',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | screens-screens-tabs-vehicle-information-vehicle-information-module */
          [__webpack_require__.e("common"), __webpack_require__.e("screens-screens-tabs-vehicle-information-vehicle-information-module")]).then(__webpack_require__.bind(null,
          /*! ../screens/screens-tabs/vehicle-information/vehicle-information.module */
          "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.module.ts")).then(function (m) {
            return m.VehicleInformationPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'change-passwsord',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | screens-screens-tabs-change-password-change-password-module */
          [__webpack_require__.e("common"), __webpack_require__.e("screens-screens-tabs-change-password-change-password-module")]).then(__webpack_require__.bind(null,
          /*! ../screens/screens-tabs/change-password/change-password.module */
          "./src/app/screens/screens-tabs/change-password/change-password.module.ts")).then(function (m) {
            return m.ChangePasswordPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'history',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | screens-screens-tabs-history-history-module */
          "screens-screens-tabs-history-history-module").then(__webpack_require__.bind(null,
          /*! ../screens/screens-tabs/history/history.module */
          "./src/app/screens/screens-tabs/history/history.module.ts")).then(function (m) {
            return m.HistoryPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | screens-screens-tabs-about-about-module */
          "screens-screens-tabs-about-about-module").then(__webpack_require__.bind(null,
          /*! ../screens/screens-tabs/about/about.module */
          "./src/app/screens/screens-tabs/about/about.module.ts")).then(function (m) {
            return m.AboutPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'liquidation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | screens-screens-tabs-liquidation-liquidation-module */
          "screens-screens-tabs-liquidation-liquidation-module").then(__webpack_require__.bind(null,
          /*! ../screens/screens-tabs/liquidation/liquidation.module */
          "./src/app/screens/screens-tabs/liquidation/liquidation.module.ts")).then(function (m) {
            return m.LiquidationPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = /*#__PURE__*/_createClass(function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    });

    TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = /*#__PURE__*/_createClass(function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    });

    TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TabsPage = /*#__PURE__*/_createClass(function TabsPage() {
      _classCallCheck(this, TabsPage);
    });

    TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    })], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map