(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/change-password/change-password.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/change-password/change-password.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content color=\"warning\">\n  <ion-button fill=\"clear\" (click) =\"back()\" style=\"position: absolute;\n  left: 0px;\n  padding: 10px;\" >\n    <ion-icon name=\"arrow-back-outline\"   slot=\"icon-only\"  ></ion-icon>\n  </ion-button>\n  <div style=\"position: relative;\">\n    <div class=\"ion-text-center margin-top-15vh ion-padding-bottom\" style=\"width: 60%;\n    margin: auto;\n    position: absolute;\n    left: 0;\n    right: 0;\">\n      <img src=\"assets/imgs/logo-morado.png\" width=\"100\">\n    </div>\n  </div>\n  <ion-card style=\"margin-top:30%\">\n    <ion-card-header>\n      <ion-card-subtitle class=\"ion-text-center \">\n        <span class=\"black-color-text\">Cambia tu contraseña</span>\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup]=\"password_information\" (submit)=\"update()\" novalidate>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Contraseña\" formControlName=\"password\" type=\"password\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.password.dirty && controls.password.touched && controls.password.errors\">\n          <ion-icon name=\"alert-circle\"  slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.password.errors.required\">La contraseña es requerida</ion-label>\n          <ion-label *ngIf=\"controls.password.errors.minlength || controls.password.errors.maxlength\">La contraseña debe ser\n            de 8 a 16 caracteres</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Repetir Contraseña\" formControlName=\"password_confirm\" type=\"password\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.password_confirm.dirty && controls.password_confirm.touched && controls.password_confirm.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.password_confirm.errors.required\">La contraseña es requerida</ion-label>\n          <ion-label *ngIf=\"controls.password_confirm.errors.mustMatch\">Las contraseñas no coinciden</ion-label>\n        </ion-item>\n        <ion-button type=\"submit\" expand=\"block\" mode=\"ios\" color=\"primary\" class =\"ion-margin-top\">\n          CONTINUAR\n        </ion-button>\n      </form>     \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n ");

/***/ }),

/***/ "./src/app/screens/screens-tabs/change-password/change-password-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/change-password/change-password-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "./src/app/screens/screens-tabs/change-password/change-password.page.ts");




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/change-password/change-password.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/change-password/change-password.module.ts ***!
  \********************************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/screens/screens-tabs/change-password/change-password-routing.module.ts");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/screens/screens-tabs/change-password/change-password.page.ts");







let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"]
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/change-password/change-password.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/change-password/change-password.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy10YWJzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/screens/screens-tabs/change-password/change-password.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/change-password/change-password.page.ts ***!
  \******************************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_validators_passwod_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/validators/passwod.validator */ "./src/app/validators/passwod.validator.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");








let ChangePasswordPage = class ChangePasswordPage {
    constructor(requestService, fb, router, ui, auth) {
        this.requestService = requestService;
        this.fb = fb;
        this.router = router;
        this.ui = ui;
        this.auth = auth;
        this.password_information = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16)]],
            password_confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        }, {
            validators: Object(src_app_validators_passwod_validator__WEBPACK_IMPORTED_MODULE_6__["ComparePassword"])("password", "password_confirm")
        });
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['/tabs/profile']);
    }
    get controls() {
        return this.password_information.controls;
    }
    update() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.password_information.valid) {
                const { password, password_confirm } = this.password_information.value;
                const obj = {
                    password,
                    password_confirm,
                    role_id: this.auth.role.id,
                    user_id: this.auth.user.id
                };
                const networkStatus = JSON.parse(localStorage.getItem("network_status"));
                if (networkStatus.connected) {
                    const loader = yield this.ui.loading("Por favor espere...");
                    this.requestService.post('changepassword', obj).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                        this.ui.showToast("Se ha cambiado la contraseña exitosamente", () => {
                            this.router.navigate(['/tabs/profile']);
                        });
                    }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                        console.log("Error", err);
                        this.ui.showToast(err.errors.messages[0]);
                    }));
                }
                else {
                    this.ui.showToast("Verifique su conexión");
                }
            }
            else {
                this.ui.showToast("Rellene todos los campos");
            }
        });
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/change-password/change-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./change-password.page.scss */ "./src/app/screens/screens-tabs/change-password/change-password.page.scss")).default]
    })
], ChangePasswordPage);



/***/ })

}]);
//# sourceMappingURL=screens-screens-tabs-change-password-change-password-module-es2015.js.map