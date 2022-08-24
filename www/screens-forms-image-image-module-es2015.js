(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-forms-image-image-module"],{

/***/ "./src/app/screens/forms/image/image-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/screens/forms/image/image-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ImagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePageRoutingModule", function() { return ImagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.page */ "./src/app/screens/forms/image/image.page.ts");




const routes = [
    {
        path: '',
        component: _image_page__WEBPACK_IMPORTED_MODULE_3__["ImagePage"]
    }
];
let ImagePageRoutingModule = class ImagePageRoutingModule {
};
ImagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImagePageRoutingModule);



/***/ }),

/***/ "./src/app/screens/forms/image/image.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/screens/forms/image/image.module.ts ***!
  \*****************************************************/
/*! exports provided: ImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePageModule", function() { return ImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _image_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-routing.module */ "./src/app/screens/forms/image/image-routing.module.ts");
/* harmony import */ var _image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image.page */ "./src/app/screens/forms/image/image.page.ts");







let ImagePageModule = class ImagePageModule {
};
ImagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _image_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImagePageRoutingModule"]
        ],
        declarations: [_image_page__WEBPACK_IMPORTED_MODULE_6__["ImagePage"]]
    })
], ImagePageModule);



/***/ })

}]);
//# sourceMappingURL=screens-forms-image-image-module-es2015.js.map