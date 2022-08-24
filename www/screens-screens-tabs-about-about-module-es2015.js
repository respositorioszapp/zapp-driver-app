(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/about/about.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/about/about.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" color=\"warning\">\n  <ion-button fill=\"clear\" routerLink=\"/tabs/profile\" style=\"position: absolute;\n  left: 0px;\n  padding: 10px;\">\n    <ion-icon name=\"arrow-back-outline\" slot=\"icon-only\"></ion-icon>\n  </ion-button>\n  <div style=\"    position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  text-align: center;\n  margin: auto 10%;\n  height: 200px;\n  width: 80%;\">\n    <div style=\"position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    margin: auto;width: 100%;height: 100%;\">\n      <ion-title class=\"ion-text-center\" style=\"color: #420493\">Zapp Logística Driver</ion-title>\n       <ion-label class=\"ion-text-center ion-margin-top ion-margin-bottom\" style=\"opacity: 0.7;\n       color: #420493;display: block;\">Versión : {{version}}</ion-label>\n      <img src=\"assets/imgs/logo-morado.png\" alt=\"\" style=\"width: 200px;height: 70px;\n      \">\n      <ion-title class=\"ion-text-center ion-margin-top\" style=\"color: #420493;display: block;\">Zapp Logística SAS</ion-title>\n      \n      \n    </div>\n    \n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/screens/screens-tabs/about/about-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/screens/screens-tabs/about/about-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ "./src/app/screens/screens-tabs/about/about.page.ts");




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/about/about.module.ts":
/*!************************************************************!*\
  !*** ./src/app/screens/screens-tabs/about/about.module.ts ***!
  \************************************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/screens/screens-tabs/about/about-routing.module.ts");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/screens/screens-tabs/about/about.page.ts");







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/about/about.page.scss":
/*!************************************************************!*\
  !*** ./src/app/screens/screens-tabs/about/about.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy10YWJzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/screens/screens-tabs/about/about.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/screens/screens-tabs/about/about.page.ts ***!
  \**********************************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



let AboutPage = class AboutPage {
    constructor() {
        this.version = "";
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].VERSION_NAME;
    }
    ngOnInit() {
    }
};
AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/about/about.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.page.scss */ "./src/app/screens/screens-tabs/about/about.page.scss")).default]
    })
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=screens-screens-tabs-about-about-module-es2015.js.map