(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/forgotpassword/forgotpassword.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/forgotpassword/forgotpassword.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 style=\"text-align: center;\">¿Olvidaste tu contraseña?</h4>\n<form [formGroup]=\"email_data\" (submit)=\"sendEMail()\" novalidate>\n    <p class=\"ion-margin-top\">\n        Ingrese su dirección de correo electrónico a continuación y le enviaremos un enlace para restablecer la\n        contraseña</p>\n    <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n        <ion-icon name=\"person-circle\" slot=\"start\"></ion-icon>\n        <ion-input placeholder=\"Email\" formControlName=\"email\" required></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"danger-color-text\"\n        *ngIf=\" controls.email.dirty && controls.email.touched && controls.email.errors\">\n        <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n        <ion-label *ngIf=\"controls.email.errors.required\">Email es requerido</ion-label>\n        <ion-label *ngIf=\"controls.email.errors.email\">Debe ser un email válido</ion-label>\n    </ion-item>\n\n    <ion-button type=\"submit\" expand=\"block\" mode=\"ios\" color=\"primary\" class=\" ion-margin-top\">\n        ENVIAR\n    </ion-button>\n</form>");

/***/ }),

/***/ "./src/app/screens/auth/forgotpassword/forgotpassword-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/screens/auth/forgotpassword/forgotpassword-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ForgotpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function() { return ForgotpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/screens/auth/forgotpassword/forgotpassword.page.ts");




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/screens/auth/forgotpassword/forgotpassword.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/screens/auth/forgotpassword/forgotpassword.module.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword-routing.module */ "./src/app/screens/auth/forgotpassword/forgotpassword-routing.module.ts");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/screens/auth/forgotpassword/forgotpassword.page.ts");







let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"]
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ "./src/app/screens/auth/forgotpassword/forgotpassword.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/screens/auth/forgotpassword/forgotpassword.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvYXV0aC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/screens/auth/forgotpassword/forgotpassword.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/screens/auth/forgotpassword/forgotpassword.page.ts ***!
  \********************************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/network-status.service */ "./src/app/services/network-status.service.ts");








let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(ui, auth, router, request, network) {
        this.ui = ui;
        this.auth = auth;
        this.router = router;
        this.request = request;
        this.network = network;
        this.email_data = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
        });
    }
    ngOnInit() {
    }
    sendEMail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.email_data.valid) {
                if (this.network.getNetworkStatus().connected) {
                    const loader = yield this.ui.loading("Por favor espere...");
                    this.request.post('restore_password', this.email_data.value)
                        .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                        this.ui.showToast("Contraseña restablecida. Verifique su correo", () => {
                            this.router.navigate(['/login']);
                        });
                    }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                        this.ui.showToast("Ha ocurrido un error al intentar restablecer la contraseña.");
                        console.log(error);
                    }));
                }
                else {
                    this.ui.showToast("Verifique su conexión");
                }
            }
        });
    }
    get controls() {
        return this.email_data.controls;
    }
};
ForgotpasswordPage.ctorParameters = () => [
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] },
    { type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"] }
];
ForgotpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgotpassword.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/forgotpassword/forgotpassword.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/screens/auth/forgotpassword/forgotpassword.page.scss")).default]
    })
], ForgotpasswordPage);



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module-es2015.js.map