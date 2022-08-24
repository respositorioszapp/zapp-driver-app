function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-auth-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup/signup.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup/signup.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScreensAuthSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"warning\" class=\"ion-padding\">\n  <ion-button fill=\"clear\" (click) =\"back()\" style=\"position: absolute;\n  left: 0px;\n  padding: 10px;\" >\n    <ion-icon name=\"arrow-back-outline\"   slot=\"icon-only\"  ></ion-icon>\n  </ion-button>\n  <div style=\"position: relative;\">\n    <div class=\"ion-text-center margin-top-15vh ion-padding-bottom\" style=\"width: 60%;\n    margin: auto;\n    position: absolute;\n    left: 0;\n    right: 0;\">\n      <img src=\"assets/imgs/logo-morado.png\" width=\"100\">\n    </div>\n  </div>\n  <ion-card class=\"border-radius\" style=\"margin-top: 50px;\">\n    <ion-card-content>\n      <router-outlet></router-outlet>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/screens/auth/signup/signup-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/screens/auth/signup/signup-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppScreensAuthSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/screens/auth/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"],
      children: [{
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
      }, {
        path: 'tab1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | signup-tab1-signup-tab1-module */
          [__webpack_require__.e("common"), __webpack_require__.e("signup-tab1-signup-tab1-module")]).then(__webpack_require__.bind(null,
          /*! ../signup-tab1/signup-tab1.module */
          "./src/app/screens/auth/signup-tab1/signup-tab1.module.ts")).then(function (m) {
            return m.SignupTab1PageModule;
          });
        }
      }, {
        path: 'tab2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | signup-tab2-signup-tab2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("signup-tab2-signup-tab2-module")]).then(__webpack_require__.bind(null,
          /*! ../signup-tab2/signup-tab2.module */
          "./src/app/screens/auth/signup-tab2/signup-tab2.module.ts")).then(function (m) {
            return m.SignupTab2PageModule;
          });
        }
      }, {
        path: 'forgotpassword',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forgotpassword-forgotpassword-module */
          "forgotpassword-forgotpassword-module").then(__webpack_require__.bind(null,
          /*! ../forgotpassword/forgotpassword.module */
          "./src/app/screens/auth/forgotpassword/forgotpassword.module.ts")).then(function (m) {
            return m.ForgotpasswordPageModule;
          });
        }
      }]
    }];

    var SignupPageRoutingModule = /*#__PURE__*/_createClass(function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    });

    SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/screens/auth/signup/signup.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/screens/auth/signup/signup.module.ts ***!
    \******************************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppScreensAuthSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/screens/auth/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/screens/auth/signup/signup.page.ts");

    var SignupPageModule = /*#__PURE__*/_createClass(function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    });

    SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/screens/auth/signup/signup.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/screens/auth/signup/signup.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScreensAuthSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  text-align: justify;\n}\n\nion-button a {\n  display: contents !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9hdXRoL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9zY3JlZW5zL2F1dGgvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvYXV0aC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuaW9uLWJ1dHRvbiBhe1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzICFpbXBvcnRhbnQ7XG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmlvbi1idXR0b24gYSB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/screens/auth/signup/signup.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/screens/auth/signup/signup.page.ts ***!
    \****************************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppScreensAuthSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(active) {
        _classCallCheck(this, SignupPage);

        this.active = active;
        this.routes = {
          "/signup/tab1": "/login",
          "/signup/tab2": "/signup/tab1",
          "/signup/tab3": "/signup/tab2",
          "/signup/tab4": "/signup/tab3",
          "/signup/forgotpassword": "/login"
        };
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("Url", this.active.url);
        }
      }, {
        key: "back",
        value: function back() {
          console.log("ggdgdg");
          var url = this.routes[this.active.url];
          this.active.navigate([url]);
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup/signup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/screens/auth/signup/signup.page.scss"))["default"]]
    })], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=screens-auth-signup-signup-module-es5.js.map