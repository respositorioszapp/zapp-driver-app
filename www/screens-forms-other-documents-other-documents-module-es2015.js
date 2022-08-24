(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-forms-other-documents-other-documents-module"],{

/***/ "./src/app/screens/forms/other-documents/other-documents-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/screens/forms/other-documents/other-documents-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: OtherDocumentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherDocumentsPageRoutingModule", function() { return OtherDocumentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _other_documents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other-documents.page */ "./src/app/screens/forms/other-documents/other-documents.page.ts");




const routes = [
    {
        path: '',
        component: _other_documents_page__WEBPACK_IMPORTED_MODULE_3__["OtherDocumentsPage"]
    }
];
let OtherDocumentsPageRoutingModule = class OtherDocumentsPageRoutingModule {
};
OtherDocumentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OtherDocumentsPageRoutingModule);



/***/ }),

/***/ "./src/app/screens/forms/other-documents/other-documents.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/screens/forms/other-documents/other-documents.module.ts ***!
  \*************************************************************************/
/*! exports provided: OtherDocumentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherDocumentsPageModule", function() { return OtherDocumentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _other_documents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./other-documents-routing.module */ "./src/app/screens/forms/other-documents/other-documents-routing.module.ts");
/* harmony import */ var _other_documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-documents.page */ "./src/app/screens/forms/other-documents/other-documents.page.ts");







let OtherDocumentsPageModule = class OtherDocumentsPageModule {
};
OtherDocumentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _other_documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtherDocumentsPageRoutingModule"]
        ],
        declarations: [_other_documents_page__WEBPACK_IMPORTED_MODULE_6__["OtherDocumentsPage"]]
    })
], OtherDocumentsPageModule);



/***/ })

}]);
//# sourceMappingURL=screens-forms-other-documents-other-documents-module-es2015.js.map